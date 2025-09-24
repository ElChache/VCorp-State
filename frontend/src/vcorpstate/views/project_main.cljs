(ns vcorpstate.views.project-main
  (:require [re-frame.core :as rf]
            [vcorpstate.routes :as routes]))

(defn back-button []
  [:div {:class "h-16 flex items-center justify-center border-b border-gray-200"}
   [:button {:class "p-1 hover:bg-gray-100 rounded transition-colors w-16 h-12 flex items-center justify-center"
             :on-click #(routes/navigate-to-route! {:name :home})}
    [:div {:class "text-gray-600 font-bold text-center" :style {:font-size "34px"}} "←"]]])

(defn nav-button [emoji title color on-click]
  [:button {:class (str "mx-1 p-1 hover:bg-" color "-50 text-gray-600 hover:text-" color "-600 rounded transition-colors mb-1 flex items-center justify-center w-16 h-16")
            :title title
            :on-click on-click}
   [:div {:class "text-center font-bold" :style {:font-size "34px"}} emoji]])

(defn sidebar []
  [:div {:class "bg-white shadow-lg flex flex-col border-r border-gray-200" :style {:width "66px"}}
   [back-button]
   [:div {:class "flex-1 flex flex-col pt-4"}
    [nav-button "👥" "Agents" "blue" #(js/console.log "Agents clicked")]
    [nav-button "🎫" "Tickets" "green" #(js/console.log "Tickets clicked")]
    [nav-button "📄" "Documents" "purple" #(js/console.log "Documents clicked")]]])

(defn project-title [project]
  [:div {:class "flex items-center gap-3 mb-2"}
   [:button {:class "p-2 hover:bg-gray-100 rounded transition-colors mr-2"
             :on-click #(js/console.log "Config clicked")}
    [:div {:class "w-4 h-4 text-gray-600 font-bold text-center"} "⚙"]]
   [:h1 {:class "text-lg font-semibold text-gray-900"}
    (if project (:name project) "Project View")]])

(defn project-detail-item [label value & [class]]
  [:div
   [:span {:class "font-medium text-gray-700"} (str label ": ")]
   [:span {:class (or class "text-gray-600")} value]])

(defn github-link [url]
  [:div {:class "md:col-span-2"}
   [:span {:class "font-medium text-gray-700"} "GitHub: "]
   [:a {:href url
        :target "_blank"
        :class "text-blue-600 hover:text-blue-800 underline"}
    url]])

(defn project-details [project]
  [:div
   [:h3 {:class "font-medium text-gray-800 mb-3"} "Project Details"]
   [:div {:class "grid grid-cols-1 md:grid-cols-2 gap-4 text-sm"}
    [project-detail-item "ID" (:id project)]
    [project-detail-item "Path" (:path project) "text-gray-600 font-mono text-xs"]
    (when (:github_origin project)
      [github-link (:github_origin project)])]])

(defn workspace-content [project]
  [:div {:class "h-full p-4"}
   [project-title project]])

(defn main-content [project]
  [:div {:class "flex-1 flex flex-col min-h-0"}
   [:div {:class "flex-1 overflow-auto"}
    [:div {:class "h-full"}
     [workspace-content project]]]])

(defn project-main-view []
  (let [selected-project @(rf/subscribe [:selected-project])]
    [:div {:class "flex h-screen bg-gray-50"}
     [sidebar]
     [main-content selected-project]]))