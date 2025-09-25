(ns vcorpstate.subs.data
  "Data subscriptions - collections, documents, jobs, etc."
  (:require [re-frame.core :as rf]))

;; ====================================
;; DATA SUBSCRIPTIONS
;; ====================================

;; Raw data subscriptions
(rf/reg-sub
 :data/collections
 (fn [db _]
   (get-in db [:data :collections])))

(rf/reg-sub
 :data/documents
 (fn [db _]
   (get-in db [:data :documents])))

(rf/reg-sub
 :data/jobs
 (fn [db _]
   (get-in db [:data :jobs])))

(rf/reg-sub
 :data/jobs-by-slug
 (fn [db _]
   (get-in db [:data :jobs-by-slug])))

(rf/reg-sub
 :data/squads
 (fn [db _]
   (get-in db [:data :squads])))

(rf/reg-sub
 :data/roles
 (fn [db _]
   (get-in db [:data :roles])))

;; ====================================
;; COMPUTED DATA SUBSCRIPTIONS
;; ====================================

;; Graph structure - pre-computed squad columns with root jobs
(rf/reg-sub
 :data/graph-structure
 (fn [db _]
   (get-in db [:data :graph_structure])))

;; Check if data is loaded
(rf/reg-sub
 :data/loaded?
 :<- [:data/collections]
 :<- [:data/jobs]
 (fn [[collections jobs] _]
   (and (not-empty collections) (not-empty jobs))))

;; Data statistics
(rf/reg-sub
 :data/stats
 :<- [:data/collections]
 :<- [:data/documents] 
 :<- [:data/jobs]
 (fn [[collections documents jobs] _]
   (let [total-collections (count collections)
         total-documents (count documents)
         total-jobs (count jobs)
         completed-jobs (count (filter #(:completed (second %)) jobs))
         documents-by-status (group-by :status (vals documents))]
     {:total-collections total-collections
      :total-documents total-documents
      :total-jobs total-jobs
      :completed-jobs completed-jobs
      :documents-done (count (get documents-by-status "done" []))
      :documents-in-progress (count (get documents-by-status "in_progress" []))
      :documents-ready (count (get documents-by-status "ready" []))
      :documents-blocked (count (get documents-by-status "blocked" []))})))