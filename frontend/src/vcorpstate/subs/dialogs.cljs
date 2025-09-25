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