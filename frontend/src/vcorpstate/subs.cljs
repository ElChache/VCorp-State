(ns vcorpstate.subs
  (:require [re-frame.core :as rf]))

(rf/reg-sub
 :message
 (fn [db _]
   (:message db)))

(rf/reg-sub
 :loading?
 (fn [db _]
   (:loading? db)))

(rf/reg-sub
 :error
 (fn [db _]
   (:error db)))