(ns vcorpstate.events
  "Core event handlers - loads all modular events"
  (:require [re-frame.core :as rf]
            [day8.re-frame.http-fx] ; Load HTTP effects
            [vcorpstate.db :as db]
            ;; Load modular event handlers
            [vcorpstate.events.graph]
            [vcorpstate.events.websocket]
            [vcorpstate.events.navigation]
            [vcorpstate.events.ui]))

;; ====================================
;; CORE APP INITIALIZATION
;; ====================================

;; Initialize app state
(rf/reg-event-db
 :initialize-db
 (fn [_ _]
   db/default-db))