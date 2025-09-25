(ns vcorpstate.components.graph
  (:require [re-frame.core :as rf]))

(defn render-job-level
  "Renders a single level of jobs horizontally (side by side)"
  [jobs-map jobs-by-slug level]
  (when (not-empty jobs-map)
    [:div {:class "mb-4"}
     ;; Current level jobs rendered horizontally and centered
     [:div {:class "flex justify-center"
            :style {:gap "0.5rem"}}
      (map (fn [[job-slug _children]]
             (let [job (get jobs-by-slug job-slug)]
               ^{:key (str level "-" job-slug)}
               [:div {:class "flex flex-col items-center"}
                ;; Input documents (above job) - only for level 0 (root jobs)
                (when (and (= level 0) (not-empty (:inputs job)))
                  [:div {:class "flex justify-center mb-1"
                         :style {:gap "0.5rem"}}
                   (map (fn [input]
                          ^{:key (str job-slug "-input-" (:slug input))}
                          [:div {:class "bg-blue-100 border border-blue-300 rounded px-3 py-2 text-sm"}
                           [:div {:class "font-medium text-blue-800"}
                            (:slug input)]])
                        (:inputs job))])
                
                ;; Job box
                [:div {:class "bg-orange-100 border border-orange-400 rounded px-3 py-2 text-sm"}
                 [:div {:class "font-medium text-orange-800"}
                  (or (:name job) job-slug)]]
                
                ;; Output documents (below job)
                (when (not-empty (:outputs job))
                  [:div {:class "flex justify-center mt-1"
                         :style {:gap "0.5rem"}}
                   (map (fn [output]
                          ^{:key (str job-slug "-output-" (:slug output))}
                          [:div {:class "bg-green-100 border border-green-300 rounded px-3 py-2 text-sm"}
                           [:div {:class "font-medium text-green-800"}
                            (:slug output)]])
                        (:outputs job))])]))
           jobs-map)]
     ;; Recursively render next level - collect all children from current level
     (let [all-children (apply merge (vals jobs-map))]
       [render-job-level all-children jobs-by-slug (inc level)])]))

(defn squad-column
  "Renders a single squad column with title and jobs"
  [squad-data]
  (let [{:keys [squad jobs]} squad-data]
    [:div {:class "flex-shrink-0 min-w-0 mx-2"}
     [:div {:class "bg-white border border-gray-200 rounded-lg shadow-sm min-h-96"}
      ;; Squad title - subtle like in reference
      [:div {:class "px-3 py-2 border-b border-gray-100"}
       [:h3 {:class "text-xs font-medium text-gray-400 uppercase tracking-wide"}
        (str squad " Squad")]]
      
      ;; Jobs content area
      [:div {:class "p-3"}
       (let [jobs-by-slug @(rf/subscribe [:data/jobs-by-slug])]
         [render-job-level jobs jobs-by-slug 0])]]]))

(defn graph-component
  []
  (let [loading? @(rf/subscribe [:app/loading?])
        graph-structure @(rf/subscribe [:data/graph-structure])
        has-graph-structure? (and graph-structure (pos? (count graph-structure)))]
    [:div {:class "relative w-full h-full bg-gray-50 overflow-auto"}
     (cond 
       loading? [:div {:class "flex items-center justify-center h-full"}
                 [:div {:class "text-gray-600"} "Loading project data..."]]
       has-graph-structure? 
       [:div {:class "p-4"}
        ;; Horizontal scrollable container for columns
        [:div {:class "flex items-start overflow-x-auto pb-4"}
         (map-indexed 
           (fn [idx squad-data]
             ^{:key (str "squad-" idx "-" (:squad squad-data))}
             [squad-column squad-data])
           graph-structure)]]
       :else [:div {:class "flex items-center justify-center h-full"}
              [:div {:class "text-gray-500"} "No project data available"]])]))