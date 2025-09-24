(ns vcorpstate.views.project-main
  (:require [re-frame.core :as rf]
            [vcorpstate.components.sidebar :as sidebar]
            [vcorpstate.components.main-content :as main-content]))

(defn project-main-view
  "Main project view with sidebar and content area"
  []
  (let [selected-project @(rf/subscribe [:selected-project])
        expanded-section @(rf/subscribe [:expanded-sidebar-section])]
    [:div {:class "relative h-screen bg-gray-50"
           :on-click #(when expanded-section (rf/dispatch [:toggle-sidebar-section nil]))}
     ;; Main content area - positioned to account for sidebar
     [:div {:class "h-full" :style {:margin-left "66px"}}
      [main-content/main-content-area selected-project]]
     ;; Sidebar component
     [sidebar/sidebar]]))