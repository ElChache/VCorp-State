(ns vcorpstate.events.websocket-events
  "WebSocket-related events"
  (:require [re-frame.core :as rf]
            [vcorpstate.websocket :as ws]))

;; ====================================
;; WEBSOCKET CONNECTION EVENTS
;; ====================================

;; Connect to WebSocket
(rf/reg-event-fx
 :websocket/connect
 (fn [{:keys [db]} [_ project-id]]
   (let [ws-connection (ws/create-websocket-connection project-id)]
     {:db (assoc-in db [:websocket :connection] ws-connection)})))

;; WebSocket connected
(rf/reg-event-db
 :websocket/connected
 (fn [db [_ ws]]
   (-> db
       (assoc-in [:websocket :connected?] true)
       (assoc-in [:websocket :connection] ws)
       (assoc-in [:websocket :reconnect-attempts] 0)
       (assoc-in [:graph :connected?] true))))

;; WebSocket disconnected
(rf/reg-event-db
 :websocket/disconnected
 (fn [db _]
   (-> db
       (assoc-in [:websocket :connected?] false)
       (assoc-in [:graph :connected?] false))))

;; WebSocket error
(rf/reg-event-db
 :websocket/error
 (fn [db [_ error]]
   (-> db
       (assoc-in [:websocket :connected?] false)
       (assoc-in [:graph :connected?] false)
       (update-in [:websocket :reconnect-attempts] inc))))

;; ====================================
;; WEBSOCKET EVENT ROUTING
;; ====================================

;; Handle WebSocket events (router)
(rf/reg-event-db
 :websocket/event-received
 (fn [db [_ event]]
   (let [event-type (:type event)]
     (case event-type
       "document_status_changed" (rf/dispatch [:data/document-status-changed event])
       "job_status_changed" (rf/dispatch [:data/job-status-changed event])
       "collection_progress_updated" (rf/dispatch [:data/collection-progress-updated event])
       "document_created" (rf/dispatch [:data/document-created event])
       "connection_established" (js/console.log "WebSocket connection established")
       "subscription_confirmed" (js/console.log "Project subscription confirmed")
       (js/console.log "Unknown WebSocket event type:" event-type))
     (assoc-in db [:websocket :last-event] event))))