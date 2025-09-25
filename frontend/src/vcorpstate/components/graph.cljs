(ns vcorpstate.components.graph
  (:require [reagent.core :as r]
            [re-frame.core :as rf]))

(defn graph-component
  []
  (let [has-data? @(rf/subscribe [:data/loaded?])
        loading? @(rf/subscribe [:app/loading?])
        jobs @(rf/subscribe [:data/jobs])]
    [:div {:class "relative w-full h-full bg-gray-50 p-4 overflow-auto"}
     (cond 
       loading? [:div {:class "flex items-center justify-center h-full"}
                 [:div {:class "text-gray-600"} "Loading project data..."]]
       has-data? [:div
                  [:h2 {:class "text-lg font-bold mb-4"} "Jobs Data (JSON)"]
                  [:pre {:class "bg-gray-100 p-4 rounded text-xs overflow-auto"}
                   (js/JSON.stringify (clj->js jobs) nil 2)]]
       :else [:div {:class "flex items-center justify-center h-full"}
              [:div {:class "text-gray-500"} "No project data available"]])]))