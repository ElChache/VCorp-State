(ns vcorpstate.subs
  (:require [re-frame.core :as rf]))

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
   (when-let [project-id (:selected-project-id db)]
     (->> (:projects db)
          (filter #(= (:id %) project-id))
          first))))

(rf/reg-sub
 :current-view
 (fn [db _]
   (:current-view db)))

(rf/reg-sub
 :current-route
 (fn [db _]
   (:current-route db)))