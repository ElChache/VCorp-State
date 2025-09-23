(ns vcorpstate.views
  (:require [re-frame.core :as rf]))

(defn main-panel []
  (let [message @(rf/subscribe [:message])
        loading? @(rf/subscribe [:loading?])
        error @(rf/subscribe [:error])]
    [:div.container
     [:h1 "VCorpState"]
     [:p "Welcome to the VCorp State Management Platform"]
     
     [:button 
      {:on-click #(rf/dispatch [:fetch-hello])
       :disabled loading?}
      (if loading? "Loading..." "Fetch Hello World")]
     
     (when message
       [:div.message message])
     
     (when error
       [:div.message.error error])]))

(defn app []
  [main-panel])