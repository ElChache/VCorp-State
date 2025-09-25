(ns vcorpstate.events.graph
  "Graph-related events"
  (:require [re-frame.core :as rf]
            [vcorpstate.http :as http]))

;; ====================================
;; GRAPH DATA EVENTS
;; ====================================

;; Load initial graph data for project
(rf/reg-event-fx
 :graph/load-initial-data
 (fn [{:keys [db]} [_ project-id]]
   {:db (assoc-in db [:graph :loading?] true)
    :dispatch-later [{:ms 100 :dispatch [:http/load-project-data project-id]}]}))

;; HTTP call to load project data
(rf/reg-event-fx
 :http/load-project-data
 (fn [_ [_ project-id]]
   (http/load-project-initial-data project-id)
   {}))

;; Handle successful initial data load
(rf/reg-event-db
 :graph/initial-data-loaded
 (fn [db [_ data]]
   (let [{:keys [collections documents jobs squads roles timestamp]} data
         ;; Normalize data by ID for fast lookups
         collections-by-id (into {} (map (fn [c] [(:id c) c])) collections)
         documents-by-id (into {} (map (fn [d] [(:id d) d])) documents) 
         jobs-by-id (into {} (map (fn [j] [(:id j) j])) jobs)
         squads-by-id (into {} (map (fn [s] [(:id s) s])) squads)
         roles-by-short-name (into {} (map (fn [r] [(:short_name r) r])) roles)]
     (-> db
         (assoc-in [:graph :collections] collections-by-id)
         (assoc-in [:graph :documents] documents-by-id)
         (assoc-in [:graph :jobs] jobs-by-id)
         (assoc-in [:graph :squads] squads-by-id)
         (assoc-in [:graph :roles] roles-by-short-name)
         (assoc-in [:graph :loading?] false)
         (assoc-in [:graph :last-updated] timestamp)))))

;; Handle failed initial data load
(rf/reg-event-db
 :graph/initial-data-failed
 (fn [db [_ error]]
   (-> db
       (assoc-in [:graph :loading?] false)
       (assoc :error "Failed to load graph data"))))

;; ====================================
;; REAL-TIME GRAPH UPDATES
;; ====================================

;; Handle document status changes
(rf/reg-event-db
 :graph/document-status-changed
 (fn [db [_ event]]
   (let [{:keys [document_id new_status old_status]} event]
     (assoc-in db [:graph :documents document_id :status] new_status))))

;; Handle job status changes
(rf/reg-event-db
 :graph/job-status-changed
 (fn [db [_ event]]
   (let [{:keys [job_id completed paused]} event]
     (-> db
         (assoc-in [:graph :jobs job_id :completed] completed)
         (assoc-in [:graph :jobs job_id :paused] paused)))))

;; Handle collection progress updates
(rf/reg-event-db
 :graph/collection-progress-updated
 (fn [db [_ event]]
   (let [{:keys [collection_id completed total]} event]
     ;; Update could trigger recalculation of collection status
     (assoc-in db [:graph :collections collection_id :progress] 
               {:completed completed :total total}))))

;; Handle new document creation
(rf/reg-event-db
 :graph/document-created
 (fn [db [_ event]]
   (let [{:keys [document]} event]
     (assoc-in db [:graph :documents (:id document)] document))))

;; ====================================
;; COLLECTION & JOB DETAILS
;; ====================================

;; Show collection details modal
(rf/reg-event-fx
 :collection/show-details
 (fn [{:keys [db]} [_ collection-id]]
   (http/load-collection-details collection-id)
   {:db (assoc-in db [:ui :selected-collection-id] collection-id)}))

;; Handle collection details loaded
(rf/reg-event-db
 :collection/details-loaded
 (fn [db [_ collection-id details]]
   (assoc-in db [:ui :collection-details] details)))

;; Show job details modal
(rf/reg-event-fx
 :job/show-details
 (fn [{:keys [db]} [_ job-id]]
   (http/load-job-details job-id)
   {:db (assoc-in db [:ui :selected-job-id] job-id)}))

;; Handle job details loaded
(rf/reg-event-db
 :job/details-loaded
 (fn [db [_ job-id details]]
   (assoc-in db [:ui :job-details] details)))