(ns vcorpstate.views.project-main
  (:require [re-frame.core :as rf]
            [reagent.core :as r]
            [vcorpstate.components.sidebar :as sidebar]
            [vcorpstate.components.graph :as graph]))

(defn project-main-view
  "Main project view with sidebar and graph"
  []
  (let [selected-project-id @(rf/subscribe [:selected-project-id])
        expanded-section @(rf/subscribe [:expanded-sidebar-section])]
    
    ;; Initialize project data and WebSocket when component mounts
    (r/create-class
     {:component-did-mount 
      (fn []
        (when selected-project-id
          (rf/dispatch [:project/load selected-project-id])
          (rf/dispatch [:websocket/connect selected-project-id])))
      
      :component-did-update
      (fn [_this [_ prev-props]]
        (let [[_ prev-project-id] prev-props]
          (when (and selected-project-id 
                     (not= selected-project-id prev-project-id))
            (rf/dispatch [:project/load selected-project-id])
            (rf/dispatch [:websocket/connect selected-project-id]))))
      
      :reagent-render
      (fn []
        [:div {:class "flex h-screen bg-gray-50"
               :on-click #(when expanded-section (rf/dispatch [:toggle-sidebar-section nil]))}
         
         ;; Sidebar component
         [sidebar/sidebar]
         
         ;; Main content area - now shows the graph
         [:div {:class "flex-1 h-full transition-all duration-300"}
          [graph/graph-component]]])})))