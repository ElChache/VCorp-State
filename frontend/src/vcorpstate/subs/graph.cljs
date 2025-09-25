(ns vcorpstate.subs.graph
  "Graph-related subscriptions"
  (:require [re-frame.core :as rf]
            [vcorpstate.graph :as graph]))

;; ====================================
;; GRAPH DATA SUBSCRIPTIONS
;; ====================================

;; Basic graph data subscriptions
(rf/reg-sub
 :graph/collections
 (fn [db _]
   (get-in db [:graph :collections])))

(rf/reg-sub
 :graph/documents
 (fn [db _]
   (get-in db [:graph :documents])))

(rf/reg-sub
 :graph/jobs
 (fn [db _]
   (get-in db [:graph :jobs])))

(rf/reg-sub
 :graph/squads
 (fn [db _]
   (get-in db [:graph :squads])))

(rf/reg-sub
 :graph/roles
 (fn [db _]
   (get-in db [:graph :roles])))

(rf/reg-sub
 :graph/loading?
 (fn [db _]
   (get-in db [:graph :loading?])))

(rf/reg-sub
 :graph/connected?
 (fn [db _]
   (get-in db [:graph :connected?])))

;; ====================================
;; WEBSOCKET SUBSCRIPTIONS
;; ====================================

(rf/reg-sub
 :websocket/connected?
 (fn [db _]
   (get-in db [:websocket :connected?])))

(rf/reg-sub
 :websocket/last-event
 (fn [db _]
   (get-in db [:websocket :last-event])))

;; ====================================
;; COMPUTED GRAPH SUBSCRIPTIONS
;; ====================================

;; Build React Flow graph data from current state
(rf/reg-sub
 :graph/react-flow-data
 (fn [db _]
   (let [collections (get-in db [:graph :collections])
         documents (get-in db [:graph :documents])
         jobs (get-in db [:graph :jobs])
         squads (get-in db [:graph :squads])
         roles (get-in db [:graph :roles])]
     (graph/build-graph-data collections documents jobs squads roles))))

;; Get nodes for React Flow
(rf/reg-sub
 :graph/nodes
 :<- [:graph/react-flow-data]
 (fn [graph-data _]
   (:nodes graph-data)))

;; Get edges for React Flow
(rf/reg-sub
 :graph/edges
 :<- [:graph/react-flow-data]
 (fn [graph-data _]
   (:edges graph-data)))

;; Check if graph has data
(rf/reg-sub
 :graph/has-data?
 :<- [:graph/collections]
 :<- [:graph/jobs]
 (fn [[collections jobs] _]
   (and (not-empty collections) (not-empty jobs))))

;; Graph statistics
(rf/reg-sub
 :graph/stats
 :<- [:graph/collections]
 :<- [:graph/documents] 
 :<- [:graph/jobs]
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