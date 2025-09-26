(ns vcorpstate.components.launch-agents-dialog
  (:require [re-frame.core :as rf]))

(defn role-counter-row
  "Row component for a single role with +/- counter"
  [role role-counts]
  (let [count (get role-counts (:short_name role) 0)]
    [:div {:class "flex items-center justify-between py-3 px-4 border-b border-gray-100 last:border-b-0 hover:bg-gray-50"}
     [:div {:class "flex-1 pr-4"}
      [:div {:class "font-medium text-gray-900 text-sm"} (:long_name role)]]
     [:div {:class "flex items-center space-x-2"}
      [:button {:style {:width "32px" :height "32px" :border-radius "50%" :border "1px solid #d1d5db" :background-color "#ffffff" :color "#374151" :cursor "pointer" :display "flex" :align-items "center" :justify-content "center" :font-size "16px" :font-weight "600" :transition "all 0.2s" :box-shadow "0 1px 2px rgba(0, 0, 0, 0.05)"}
                :disabled (zero? count)
                :on-click #(rf/dispatch [:update-role-count (:short_name role) (dec count)])}
       "−"]
      [:div {:style {:width "40px" :height "32px" :display "flex" :align-items "center" :justify-content "center" :background-color "#f9fafb" :border "1px solid #e5e7eb" :border-radius "6px" :font-size "14px" :font-weight "600" :color "#374151"}} count]
      [:button {:style {:width "32px" :height "32px" :border-radius "50%" :border "1px solid #d1d5db" :background-color "#ffffff" :color "#374151" :cursor "pointer" :display "flex" :align-items "center" :justify-content "center" :font-size "16px" :font-weight "600" :transition "all 0.2s" :box-shadow "0 1px 2px rgba(0, 0, 0, 0.05)"}
                :on-click #(rf/dispatch [:update-role-count (:short_name role) (inc count)])}
       "+"]]]))

(defn launch-agents-dialog
  "Dialog for launching agents"
  []
  (let [is-open? @(rf/subscribe [:launch-agents-dialog-open?])
        roles @(rf/subscribe [:data/roles])
        role-counts @(rf/subscribe [:role-counts])]
    (when is-open?
      [:div {:style {:position "fixed" :top "0" :left "0" :width "100%" :height "100%" :background-color "rgba(0,0,0,0.5)" :z-index "9999" :display "flex" :align-items "center" :justify-content "center"}
             :on-click #(rf/dispatch [:hide-launch-agents-dialog])}
       [:div {:style {:background-color "white" :border-radius "8px" :box-shadow "0 25px 50px -12px rgba(0, 0, 0, 0.25)" :padding "24px" :max-width "500px" :width "100%" :margin "16px" :max-height "80vh" :overflow-y "auto"}
              :on-click (fn [e] (.stopPropagation e))}
        
        [:div {:class "mb-6"}
         [:div {:class "border border-gray-200 rounded-lg overflow-hidden max-h-64 overflow-y-auto"}
          (if (seq roles)
            (for [role (vals roles)]
              ^{:key (:short_name role)}
              [role-counter-row role role-counts])
            [:div {:class "text-gray-500 text-center py-8 px-4"} "Loading roles..."])]]
        
        [:div {:style {:display "flex" :justify-content "flex-end" :gap "12px" :margin-top "20px"}}
         [:button {:style {:padding "12px 24px" :background-color "#f3f4f6" :color "#374151" :border "1px solid #d1d5db" :border-radius "8px" :cursor "pointer" :font-size "14px" :font-weight "500" :font-family "system-ui"}
                   :on-click #(rf/dispatch [:hide-launch-agents-dialog])}
          "Cancel"]
         [:button {:style {:padding "12px 24px" :background-color "#3b82f6" :color "#ffffff" :border "1px solid #3b82f6" :border-radius "8px" :cursor "pointer" :font-size "14px" :font-weight "500" :font-family "system-ui"}
                   :on-click #(rf/dispatch [:launch-agents])}
          "Launch"]]]])))