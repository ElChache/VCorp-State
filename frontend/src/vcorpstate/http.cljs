(ns vcorpstate.http
  (:require [ajax.core :as ajax]
            [re-frame.core :as rf]))

(def api-base-url "http://localhost:3001")

;; HTTP client for REST API calls
(defn load-project-initial-data
  "Load all initial data for a project in a single API call"
  [project-id]
  (ajax/GET (str api-base-url "/api/projects/" project-id "/initial-data")
    {:handler #(rf/dispatch [:graph/initial-data-loaded %])
     :error-handler #(rf/dispatch [:graph/initial-data-failed %])
     :format (ajax/json-request-format)
     :response-format (ajax/json-response-format {:keywords? true})}))

(defn load-collection-details
  "Load detailed information for a specific collection"
  [collection-id]
  (ajax/GET (str api-base-url "/api/collections/" collection-id "/details")
    {:handler #(rf/dispatch [:collection/details-loaded collection-id %])
     :error-handler #(rf/dispatch [:collection/details-failed collection-id %])
     :format (ajax/json-request-format)
     :response-format (ajax/json-response-format {:keywords? true})}))

(defn load-job-details
  "Load detailed information for a specific job"
  [job-id]
  (ajax/GET (str api-base-url "/api/jobs/" job-id "/details")
    {:handler #(rf/dispatch [:job/details-loaded job-id %])
     :error-handler #(rf/dispatch [:job/details-failed job-id %])
     :format (ajax/json-request-format)
     :response-format (ajax/json-response-format {:keywords? true})}))