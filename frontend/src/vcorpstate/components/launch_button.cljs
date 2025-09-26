(ns vcorpstate.components.launch-button
  (:require [re-frame.core :as rf]))

(defn launch-button
  "Small launch button with rocket icon"
  []
  [:button {:class "p-1 hover:bg-gray-100 rounded transition-colors"
            :title "Launch Agents"
            :on-click (fn [e] 
                        (.preventDefault e)
                        (.stopPropagation e)
                        (rf/dispatch [:show-launch-agents-dialog]))}
   [:span {:class "text-xl"} "🚀"]])