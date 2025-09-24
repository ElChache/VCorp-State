(ns vcorpstate.views.main
  (:require [re-frame.core :as rf]
            [vcorpstate.routes :as routes]))

(defn project-selector []
  (let [projects @(rf/subscribe [:projects])
        has-projects? @(rf/subscribe [:has-projects?])
        selected-project-id @(rf/subscribe [:selected-project-id])
        loading? @(rf/subscribe [:loading?])
        error @(rf/subscribe [:error])]
    [:div {:class "min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"}
     [:div {:class "max-w-md mx-auto"}
      [:div {:class "text-center"}
       [:h1 {:class "text-4xl font-bold text-gray-900 mb-2"} "VCorpState"]
       [:p {:class "text-gray-600 mb-8"} "VCorp State Management Platform"]]
      
      (when error
        [:div {:class "bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6"}
         error])
      
      [:div {:class "bg-white shadow-lg rounded-lg p-6"}
       (cond
         loading?
         [:div {:class "text-center py-8"}
          [:div {:class "animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"}]
          [:p {:class "text-gray-600"} "Loading projects..."]]
         
         (not has-projects?)
         [:div {:class "text-center py-8"}
          [:p {:class "text-gray-600 mb-6"} "No projects found."]
          [:button {:class "w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition duration-200"
                    :on-click #(js/alert "Create project functionality coming soon!")}
           "Create New Project"]]
         
         :else
         [:div {:class "space-y-6"}
          [:div
           [:label {:for "project-select" :class "block text-sm font-medium text-gray-700 mb-2"} 
            "Select a project:"]
           [:select {:id "project-select"
                     :class "w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                     :value (or selected-project-id "")
                     :on-change #(let [val (.-value (.-target %))]
                                   (println "Dropdown changed to:" val)
                                   (when (not= val "")
                                     (let [project-id (js/parseInt val)]
                                       (println "Parsed project ID:" project-id)
                                       (rf/dispatch [:set-selected-project project-id]))))}
            [:option {:value ""} "Choose a project..."]
            (for [project projects]
              [:option {:key (:id project) :value (:id project)}
               (:name project)])]]
          
          [:div {:class "space-y-3"}
           [:button {:class (str "w-full font-semibold py-3 px-4 rounded-lg transition duration-200 "
                                 (if (nil? selected-project-id)
                                   "bg-gray-300 text-gray-500 cursor-not-allowed"
                                   "bg-green-600 hover:bg-green-700 text-white"))
                     :disabled (nil? selected-project-id)
                     :on-click #(do
                                  (println "Button clicked! Project ID:" selected-project-id)
                                  (when selected-project-id
                                    (println "Navigating to project:" selected-project-id)
                                    (routes/navigate-to-route! {:name :project :params {:id selected-project-id}})))}
            "Select Project"]
           
           [:button {:class "w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition duration-200"
                     :on-click #(js/alert "Create project functionality coming soon!")}
            "Create New Project"]]])]]]))

(defn main-section []
  [:div.main-section
   [project-selector]])