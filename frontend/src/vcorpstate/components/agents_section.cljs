(ns vcorpstate.components.agents-section
  (:require [re-frame.core :as rf]
            [vcorpstate.components.launch-button :refer [launch-button]]))

(defn agent-item
  "Individual agent display component"
  [agent roles]
  (let [role (get roles (:role agent))
        agent-description (str (:slug agent) ": " (:short_name role))
        agent-status (:status agent)]
    [:div {:class "px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded transition-colors cursor-pointer border border-transparent hover:border-gray-200"}
     [:div {:class "font-medium text-gray-900"} agent-description]
     [:div {:class "text-gray-500 text-xs mt-1"} agent-status]]))

(defn agents-section
  "Agents section with title, launch button and agent list"
  []
  (let [agents @(rf/subscribe [:data/agents])
        roles @(rf/subscribe [:data/roles])]
    [:div {:class "flex flex-col h-full"}
     [:div {:class "flex items-center justify-between mb-3 flex-shrink-0"}
      [:h3 {:class "font-semibold text-gray-800"} "Agents"]
      [launch-button]]
     [:div {:class "flex-1 overflow-y-auto space-y-1 max-h-0"}
      (if (and agents roles (seq agents))
        (for [agent (vals agents)]
          ^{:key (:id agent)}
          [agent-item agent roles])
        [:div {:class "text-gray-500 text-center py-4 text-sm"} "No agents launched yet"])]]))