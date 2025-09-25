(ns vcorpstate.components.graph
  (:require [re-frame.core :as rf]))

(defn graph-component
  []
  (let [loading? @(rf/subscribe [:app/loading?])
        graph-structure @(rf/subscribe [:data/graph-structure])
        has-graph-structure? (and graph-structure (pos? (count graph-structure)))]
    [:div {:class "relative w-full h-full bg-gray-50 p-4 overflow-auto"}
     (cond 
       loading? [:div {:class "flex items-center justify-center h-full"}
                 [:div {:class "text-gray-600"} "Loading project data..."]]
       has-graph-structure? [:div
                             [:h2 {:class "text-lg font-bold mb-4"} "Squad Columns Graph Structure (JSON)"]
                             [:pre {:class "bg-gray-100 p-4 rounded text-xs overflow-auto"}
                              (js/JSON.stringify (clj->js graph-structure) nil 2)]]
       :else [:div {:class "flex items-center justify-center h-full"}
              [:div {:class "text-gray-500"} "No project data available"]])]))