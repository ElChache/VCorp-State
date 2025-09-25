(ns vcorpstate.events.ui
  "UI-related events"
  (:require [re-frame.core :as rf]))

;; ====================================
;; UI STATE EVENTS
;; ====================================

;; Toggle sidebar section
(rf/reg-event-db
 :toggle-sidebar-section
 (fn [db [_ section]]
   (let [current-section (:expanded-sidebar-section db)]
     (assoc db :expanded-sidebar-section 
            (if (nil? section) 
              nil  ; Always close when section is nil
              (if (= current-section section) nil section))))))