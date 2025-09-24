(ns vcorpstate.components.header)

(defn project-title-header
  "Header component with config button and project title"
  [project]
  [:div {:class "flex items-center gap-3 mb-2"}
   [:button {:class "p-2 hover:bg-gray-100 rounded transition-colors mr-2"
             :on-click #(println "Config clicked")
             :style {:margin-right "2px"}}
    [:div {:class "w-4 h-4 text-gray-600 font-bold text-center"} "⚙"]]
   [:h1 {:class "text-lg font-semibold text-gray-900"}
    (if project (:name project) "Project View")]])