(ns vcorpstate.subs
  (:require [re-frame.core :as rf]
            [vcorpstate.subs.graph])) ; Load graph subscriptions

(rf/reg-sub
 :projects
 (fn [db _]
   (:projects db)))

(rf/reg-sub
 :selected-project-id
 (fn [db _]
   (:selected-project-id db)))

(rf/reg-sub
 :loading?
 (fn [db _]
   (:loading? db)))

(rf/reg-sub
 :error
 (fn [db _]
   (:error db)))

(rf/reg-sub
 :has-projects?
 (fn [db _]
   (not (empty? (:projects db)))))

(rf/reg-sub
 :selected-project
 (fn [db _]
   ;; First try direct selected-project, then fall back to finding in projects list
   (or (:selected-project db)
       (when-let [project-id (:selected-project-id db)]
         (->> (:projects db)
              (filter #(= (:id %) project-id))
              first)))))

(rf/reg-sub
 :current-view
 (fn [db _]
   (:current-view db)))

(rf/reg-sub
 :current-route
 (fn [db _]
   (:current-route db)))

(rf/reg-sub
 :expanded-sidebar-section
 (fn [db _]
   (:expanded-sidebar-section db)))