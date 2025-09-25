(ns vcorpstate.events.project
  "Project UI events - navigation and interactions"
  (:require [re-frame.core :as rf]
            [vcorpstate.http :as http]))

;; ====================================
;; PROJECT UI EVENTS
;; ====================================

;; Load project (dispatch to data loading)
(rf/reg-event-fx
 :project/load
 (fn [_ [_ project-id]]
   {:dispatch [:data/load-project project-id]}))

;; ====================================
;; COLLECTION & JOB DETAILS (UI)
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
 (fn [db [_ details]]
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
 (fn [db [_ details]]
   (assoc-in db [:ui :job-details] details)))