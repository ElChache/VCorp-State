(ns vcorpstate.components.agents-section
  (:require [vcorpstate.components.sidebar-utils :refer [sidebar-content-item]]
            [vcorpstate.components.launch-button :refer [launch-button]]))

(defn agents-section
  "Agents section with title, launch button and agent list"
  []
  [:div
   [:div {:class "flex items-center justify-between mb-3"}
    [:h3 {:class "font-semibold text-gray-800"} "Agents"]
    [launch-button]]
   [:div {:class "space-y-2"}
    (map (fn [agent]
           ^{:key agent}
           [sidebar-content-item agent])
         ["Manolo" "Juan" "Carlos"])]])