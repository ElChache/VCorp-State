(ns vcorpstate.events
  (:require [re-frame.core :as rf]
            [ajax.core :as ajax]
            [day8.re-frame.http-fx]
            [vcorpstate.config :as config]))

;; Initialize app state
(rf/reg-event-db
 :initialize-db
 (fn [_ _]
   {:message nil
    :loading? false
    :error nil}))

;; Fetch hello world message
(rf/reg-event-fx
 :fetch-hello
 (fn [_ _]
   {:db {:loading? true :error nil :message nil}
    :http-xhrio {:method :get
                 :uri (str (:backend-url config/config) (:api-base config/config) "/hello")
                 :format (ajax/json-request-format)
                 :response-format (ajax/json-response-format {:keywords? true})
                 :on-success [:fetch-hello-success]
                 :on-failure [:fetch-hello-failure]}}))

;; Handle successful response
(rf/reg-event-db
 :fetch-hello-success
 (fn [db [_ response]]
   (assoc db
          :loading? false
          :message (:message response)
          :error nil)))

;; Handle error response
(rf/reg-event-db
 :fetch-hello-failure
 (fn [db [_ error]]
   (assoc db
          :loading? false
          :error "Failed to fetch message from backend"
          :message nil)))