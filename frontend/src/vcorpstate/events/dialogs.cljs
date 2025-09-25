(ns vcorpstate.events.dialogs
  (:require [re-frame.core :as rf]))

;; Show launch agents dialog
(rf/reg-event-db
 :show-launch-agents-dialog
 (fn [db _]
   (js/console.log "Opening launch agents dialog")
   (-> db
       (assoc-in [:dialogs :launch-agents-open?] true)
       (assoc-in [:dialogs :role-counts] {}))))

;; Hide launch agents dialog
(rf/reg-event-db
 :hide-launch-agents-dialog
 (fn [db _]
   (-> db
       (assoc-in [:dialogs :launch-agents-open?] false)
       (assoc-in [:dialogs :role-counts] {}))))

;; Update role count
(rf/reg-event-db
 :update-role-count
 (fn [db [_ role-short-name new-count]]
   (let [count (max 0 new-count)]
     (assoc-in db [:dialogs :role-counts role-short-name] count))))