(ns vcorpstate.subs.dialogs
  (:require [re-frame.core :as rf]))

(rf/reg-sub
 :launch-agents-dialog-open?
 (fn [db _]
   (get-in db [:dialogs :launch-agents-open?])))

(rf/reg-sub
 :role-counts
 (fn [db _]
   (get-in db [:dialogs :role-counts] {})))

;; ====================================
;; CREATE PROJECT DIALOG SUBSCRIPTIONS
;; ====================================

(rf/reg-sub
 :create-project-dialog-open?
 (fn [db _]
   (get-in db [:dialogs :create-project-open?])))

(rf/reg-sub
 :create-project-form
 (fn [db _]
   (get-in db [:dialogs :create-project-form] {})))

(rf/reg-sub
 :creating-project?
 (fn [db _]
   (get-in db [:dialogs :creating-project?] false)))

(rf/reg-sub
 :create-project-error
 (fn [db _]
   (get-in db [:dialogs :create-project-error])))