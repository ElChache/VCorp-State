(ns vcorpstate.events.data
  "Data loading and real-time update events"
  (:require [re-frame.core :as rf]
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
(rf/reg-event-db
 :data/project-loaded
 (fn [db [_ data]]
   (let [{:keys [collections documents jobs squads roles timestamp]} data
         ;; Normalize data by ID for fast lookups
         collections-by-id (into {} (map (fn [c] [(:id c) c])) collections)
         documents-by-id (into {} (map (fn [d] [(:id d) d])) documents) 
         jobs-by-id (into {} (map (fn [j] [(:id j) j])) jobs)
         squads-by-id (into {} (map (fn [s] [(:id s) s])) squads)
         roles-by-short-name (into {} (map (fn [r] [(:short_name r) r])) roles)]
     (-> db
         (assoc-in [:data :collections] collections-by-id)
         (assoc-in [:data :documents] documents-by-id)
         (assoc-in [:data :jobs] jobs-by-id)
         (assoc-in [:data :squads] squads-by-id)
         (assoc-in [:data :roles] roles-by-short-name)
         (assoc-in [:app :loading?] false)
         (assoc-in [:data :last-updated] timestamp)))))

;; Handle failed project data load
(rf/reg-event-db
 :data/project-failed
 (fn [db [_ error]]
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