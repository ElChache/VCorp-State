(ns vcorpstate.events.data
  "Data loading and real-time update events"
  (:require [re-frame.core :as rf]
            [clojure.set :as set]
            [vcorpstate.http :as http]))

;; ====================================
;; PROJECT DATA LOADING
;; ====================================

;; Load all project data when project is accessed
(rf/reg-event-fx
 :data/load-project
 (fn [{:keys [db]} [_ project-id]]
   {:db (assoc-in db [:app :loading?] true)
    :dispatch-later [{:ms 100 :dispatch [:data/fetch-project project-id]}]}))

;; HTTP call to fetch project data
(rf/reg-event-fx
 :data/fetch-project
 (fn [_ [_ project-id]]
   (http/load-project-initial-data project-id)
   {}))

;; Handle successful project data load
(rf/reg-event-fx
 :data/project-loaded
 (fn [{:keys [db]} [_ data]]
    (let [{:keys [collections documents jobs squads roles timestamp]} data
         ;; Normalize data by ID for fast lookups
         collections-by-id (into {} (map (fn [c] [(:id c) c])) collections)
         documents-by-id (into {} (map (fn [d] [(:id d) d])) documents)
         documents-by-slug (into {} (map (fn [d] [(:slug d) d])) documents) 
         jobs-by-id (into {} (map (fn [j] [(:id j) j])) jobs)
         jobs-by-slug (into {} (map (fn [j] [(:slug j) j])) jobs)
         squads-by-id (into {} (map (fn [s] [(:id s) s])) squads)
         roles-by-short-name (into {} (map (fn [r] [(:short_name r) r])) roles)
         updated-db (-> db
                       (assoc-in [:data :collections] collections-by-id)
                       (assoc-in [:data :documents] documents-by-id)
                       (assoc-in [:data :documents-by-slug] documents-by-slug)
                       (assoc-in [:data :jobs] jobs-by-id)
                       (assoc-in [:data :jobs-by-slug] jobs-by-slug)
                       (assoc-in [:data :squads] squads-by-id)
                       (assoc-in [:data :roles] roles-by-short-name)
                       (assoc-in [:app :loading?] false)
                       (assoc-in [:data :last-updated] timestamp))]
     {:db updated-db
      :dispatch [:data/compute-graph-structure]})))

(defn build-job-dependency-tree
  "Recursively builds a nested dependency tree for jobs within a squad.
   
   Args:
     available-jobs - Vector of remaining jobs to process
     current-level-outputs - Set of output slugs from current level
   
   Returns:
     Map of job-slug -> nested-dependencies"
  [available-jobs current-level-outputs]
  (let [;; Find jobs whose inputs are satisfied by current level outputs
        next-level-jobs (filter (fn [job]
                                 (let [input-slugs (set (map :slug (:inputs job)))]
                                   (set/subset? input-slugs current-level-outputs)))
                               available-jobs)]
    (if (empty? next-level-jobs)
      {}
      (let [;; Remove processed jobs from available jobs
            remaining-jobs (remove (set next-level-jobs) available-jobs)
            ;; Get all outputs from this level
            next-level-outputs (set (mapcat #(map :slug (:outputs %)) next-level-jobs))]
        ;; Build nested structure: job-slug -> recursive dependencies
        (into {}
              (map (fn [job]
                     [(:slug job) 
                      (build-job-dependency-tree remaining-jobs next-level-outputs)])
                   next-level-jobs))))))

(defn compute-squad-columns 
  "Computes squad columns with nested job dependency trees for graph visualization.
   
   Each squad column shows the complete dependency flow from root jobs down through
   all levels, where each level contains jobs whose inputs are satisfied by the
   previous level's outputs within the same squad.
   
   Args:
     jobs - Collection of job maps with :role, :inputs, :outputs, :id
     roles - Map of role-name -> role data (including :squad_slug)
   
   Returns:
     Vector of {:squad squad-name :jobs {job-slug {nested-deps...}}} maps"
  [jobs roles]
  (let [all-jobs (vec jobs)
        ;; Helper to get squad from role
        get-squad-from-role (fn [role-name]
                             (get-in roles [role-name :squad_slug]))
        
        ;; Group jobs by squad
        jobs-by-squad (group-by #(get-squad-from-role (:role %)) all-jobs)
        
        ;; For each squad, build the complete dependency tree
        squad-dependency-trees (into {} 
                                    (map (fn [[squad squad-jobs]]
                                          (let [squad-outputs (set (mapcat #(map :slug (:outputs %)) squad-jobs))
                                                ;; Find root jobs (inputs from outside squad)
                                                root-jobs (filter (fn [job]
                                                                  (let [input-slugs (set (map :slug (:inputs job)))]
                                                                    (empty? (set/intersection input-slugs squad-outputs))))
                                                                squad-jobs)
                                                ;; Get outputs from root jobs to start dependency chain
                                                root-outputs (set (mapcat #(map :slug (:outputs %)) root-jobs))
                                                ;; Remaining jobs to process (excluding roots)
                                                remaining-jobs (remove (set root-jobs) squad-jobs)
                                                ;; Build nested dependency tree starting from roots
                                                dependency-tree (into {}
                                                                     (map (fn [root-job]
                                                                           [(:slug root-job)
                                                                            (build-job-dependency-tree remaining-jobs root-outputs)])
                                                                          root-jobs))]
                                            [squad dependency-tree]))
                                        jobs-by-squad))]
    
    ;; Convert to expected format and remove empty squads
    (filterv #(not-empty (:jobs %))
             (mapv (fn [[squad dependency-tree]]
                     {:squad squad :jobs dependency-tree})
                   squad-dependency-trees))))

;; Compute graph structure from jobs data
(rf/reg-event-db
 :data/compute-graph-structure
 (fn [db _]
   (let [jobs (vals (get-in db [:data :jobs]))
         roles (get-in db [:data :roles])
         graph-structure (compute-squad-columns jobs roles)]
     (assoc-in db [:data :graph_structure] graph-structure))))

;; Handle failed project data load
(rf/reg-event-db
 :data/project-failed
 (fn [db [_ _error]]
   (-> db
       (assoc-in [:app :loading?] false)
       (assoc-in [:app :error] "Failed to load project data"))))

;; ====================================
;; REAL-TIME DATA UPDATES
;; ====================================

;; Handle document status changes
(rf/reg-event-db
 :data/document-status-changed
 (fn [db [_ event]]
   (let [{:keys [document_id new_status]} event]
     (assoc-in db [:data :documents document_id :status] new_status))))

;; Handle job status changes
(rf/reg-event-db
 :data/job-status-changed
 (fn [db [_ event]]
   (let [{:keys [job_id completed paused]} event]
     (-> db
         (assoc-in [:data :jobs job_id :completed] completed)
         (assoc-in [:data :jobs job_id :paused] paused)))))

;; Handle collection progress updates
(rf/reg-event-db
 :data/collection-progress-updated
 (fn [db [_ event]]
   (let [{:keys [collection_id completed total]} event]
     (assoc-in db [:data :collections collection_id :progress] 
               {:completed completed :total total}))))

;; Handle new document creation
(rf/reg-event-db
 :data/document-created
 (fn [db [_ event]]
   (let [{:keys [document]} event]
     (assoc-in db [:data :documents (:id document)] document))))