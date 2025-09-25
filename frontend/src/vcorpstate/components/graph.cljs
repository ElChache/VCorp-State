(ns vcorpstate.components.graph
  (:require [reagent.core :as r]
            [re-frame.core :as rf]))

(defn loading-state
  []
  [:div {:class "flex items-center justify-center h-full"}
   [:div {:class "flex flex-col items-center space-y-4"}
    [:div {:class "animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"}]
    [:div {:class "text-gray-600"} "Loading graph..."]]])

(defn empty-state
  []
  [:div {:class "flex items-center justify-center h-full"}
   [:div {:class "text-center"}
    [:div {:class "text-gray-500 text-lg mb-2"} "No graph data available"]
    [:div {:class "text-gray-400"} "Select a project to view the pipeline graph"]]])

(defn connection-status
  []
  (let [connected? @(rf/subscribe [:websocket/connected?])]
    [:div {:class "absolute top-4 right-4 z-10"}
     [:div {:class (str "flex items-center space-x-2 px-3 py-2 rounded-lg text-sm "
                        (if connected? "bg-green-100 text-green-800" "bg-yellow-100 text-yellow-800"))}
      [:div {:class (str "w-2 h-2 rounded-full " 
                         (if connected? "bg-green-500" "bg-yellow-500"))}]
      [:span (if connected? "Real-time connected" "Connecting...")]]]))

(defn graph-component
  []
  (let [loading? @(rf/subscribe [:graph/loading?])
        has-data? @(rf/subscribe [:graph/has-data?])
        nodes @(rf/subscribe [:graph/nodes])]
    
    [:div {:class "relative w-full h-full bg-gray-50"}
     [connection-status]
     
     (cond
       loading? 
       [loading-state]
       
       (not has-data?) 
       [empty-state]
       
       :else
       [:div {:class "bg-gray-50 overflow-auto"
              :style {:width "1200px" 
                      :height "600px" 
                      :position "relative"}}
        
        (doall
         (for [node nodes
               :let [{:keys [id position data]} node
                     x (.-x position)
                     y (.-y position)
                     {:keys [label type]} data
                     is-job? (= type :job)
                     bg-color (if is-job? "#f59e0b" "#3b82f6")]]
           
           [:div {:key (str id "-" x "-" y)
                  :class "border shadow-sm rounded cursor-pointer hover:shadow-md transition-shadow"
                  :style {:position "absolute"
                          :left (str x "px") 
                          :top (str y "px")
                          :background-color bg-color
                          :color "white"
                          :padding "6px 12px"
                          :font-size "12px"
                          :font-weight "500"
                          :min-width "120px"
                          :text-align "center"}}
            label]))])]))