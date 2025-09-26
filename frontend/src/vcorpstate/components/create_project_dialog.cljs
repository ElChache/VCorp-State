(ns vcorpstate.components.create-project-dialog
  (:require [re-frame.core :as rf]))

(defn form-field
  "Reusable form field component"
  [label id value placeholder on-change & [required? type]]
  [:div {:class "mb-4"}
   [:label {:for id :class "block text-sm font-medium text-gray-700 mb-2"} 
    label (when required? [:span {:class "text-red-500"} " *"])]
   [:input {:id id
            :type (or type "text")
            :class "w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            :value (or value "")
            :placeholder placeholder
            :on-change #(on-change (.. % -target -value))}]])

(defn template-selector
  "Component for selecting project template"
  [selected-template on-change]
  [:div {:class "mb-4"}
   [:label {:class "block text-sm font-medium text-gray-700 mb-2"} "Project Template"]
   [:select {:class "w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
             :value (or selected-template "vcorp_standard")
             :on-change #(on-change (.. % -target -value))}
    [:option {:value "vcorp_standard"} "VCorp Standard - Full development pipeline"]]])

(defn create-project-dialog
  "Dialog for creating a new project"
  []
  (let [is-open? @(rf/subscribe [:create-project-dialog-open?])
        form-data @(rf/subscribe [:create-project-form])
        is-creating? @(rf/subscribe [:creating-project?])
        create-error @(rf/subscribe [:create-project-error])]
    (when is-open?
      [:div {:style {:position "fixed" :top "0" :left "0" :width "100%" :height "100%" :background-color "rgba(0,0,0,0.5)" :z-index "9999" :display "flex" :align-items "center" :justify-content "center"}
             :on-click #(when-not is-creating? (rf/dispatch [:hide-create-project-dialog]))}
       [:div {:style {:background-color "white" :border-radius "8px" :box-shadow "0 25px 50px -12px rgba(0, 0, 0, 0.25)" :padding "24px" :max-width "500px" :width "100%" :margin "16px" :max-height "80vh" :overflow-y "auto"}
              :on-click (fn [e] (.stopPropagation e))}
        
        [:h2 {:class "text-xl font-semibold text-gray-900 mb-6"} "Create New Project"]
        
        (when create-error
          [:div {:class "bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4"}
           [:p {:class "text-sm"} create-error]])
        
        [:form {:on-submit (fn [e] 
                             (.preventDefault e)
                             (when-not is-creating?
                               (rf/dispatch [:create-project])))}
         
         [form-field "Project Name" "project-name" (:name form-data) "My Awesome Project"
          #(rf/dispatch [:update-create-project-form :name %]) true]
         
         [form-field "Description" "project-description" (:description form-data) "Brief description of your project"
          #(rf/dispatch [:update-create-project-form :description %])]
         
         [form-field "Project Path" "project-path" (:path form-data) "/path/to/project"
          #(rf/dispatch [:update-create-project-form :path %]) true]
         
         [form-field "GitHub Repository" "github-origin" (:github_origin form-data) "https://github.com/user/repo"
          #(rf/dispatch [:update-create-project-form :github_origin %])]
         
         [template-selector (:template_id form-data)
          #(rf/dispatch [:update-create-project-form :template_id %])]
         
         [:div {:style {:display "flex" :justify-content "flex-end" :gap "12px" :margin-top "24px"}}
          [:button {:type "button"
                    :disabled is-creating?
                    :style {:padding "12px 24px" 
                            :background-color (if is-creating? "#f9fafb" "#f3f4f6")
                            :color (if is-creating? "#9ca3af" "#374151")
                            :border "1px solid #d1d5db" 
                            :border-radius "8px" 
                            :cursor (if is-creating? "not-allowed" "pointer")
                            :font-size "14px" 
                            :font-weight "500" 
                            :font-family "system-ui"}
                    :on-click #(when-not is-creating? (rf/dispatch [:hide-create-project-dialog]))}
           "Cancel"]
          
          [:button {:type "submit"
                    :disabled (or is-creating? 
                                  (empty? (str (:name form-data)))
                                  (empty? (str (:path form-data))))
                    :style {:padding "12px 24px" 
                            :background-color (cond
                                               is-creating? "#9ca3af"
                                               (or (empty? (str (:name form-data)))
                                                   (empty? (str (:path form-data)))) "#d1d5db"
                                               :else "#3b82f6")
                            :color "#ffffff" 
                            :border (str "1px solid " (cond
                                                       is-creating? "#9ca3af"
                                                       (or (empty? (str (:name form-data)))
                                                           (empty? (str (:path form-data)))) "#d1d5db"
                                                       :else "#3b82f6"))
                            :border-radius "8px" 
                            :cursor (cond
                                     is-creating? "not-allowed"
                                     (or (empty? (str (:name form-data)))
                                         (empty? (str (:path form-data)))) "not-allowed"
                                     :else "pointer")
                            :font-size "14px" 
                            :font-weight "500" 
                            :font-family "system-ui"}}
           (if is-creating? "Creating..." "Create Project")]]]]])))