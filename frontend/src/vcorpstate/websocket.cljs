(ns vcorpstate.websocket
  (:require [re-frame.core :as rf]
            [clojure.string :as str]))

(def websocket-url "ws://localhost:3003/ws")

;; WebSocket connection management
(defn create-websocket-connection
  "Create and configure WebSocket connection"
  [project-id]
  (let [ws (js/WebSocket. websocket-url)]
    
    ;; Connection opened
    (set! (.-onopen ws)
          (fn [event]
            (js/console.log "WebSocket connected")
            (rf/dispatch [:websocket/connected ws])
            ;; Subscribe to project events
            (.send ws (js/JSON.stringify 
                      (clj->js {:type "subscribe_project" 
                               :projectId project-id})))))
    
    ;; Message received
    (set! (.-onmessage ws)
          (fn [event]
            (let [data (js/JSON.parse (.-data event))
                  event-data (js->clj data :keywordize-keys true)]
              (js/console.log "WebSocket event received:" event-data)
              (rf/dispatch [:websocket/event-received event-data]))))
    
    ;; Connection closed
    (set! (.-onclose ws)
          (fn [event]
            (js/console.log "WebSocket disconnected")
            (rf/dispatch [:websocket/disconnected])))
    
    ;; Connection error
    (set! (.-onerror ws)
          (fn [event]
            (js/console.error "WebSocket error:" event)
            (rf/dispatch [:websocket/error event])))
    
    ws))

(defn close-websocket-connection
  "Close WebSocket connection"
  [ws]
  (when ws
    (.close ws)))