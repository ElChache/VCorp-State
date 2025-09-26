(ns vcorpstate.http
  (:require [ajax.core :as ajax]
            [re-frame.core :as rf]))

(def api-base-url "http://localhost:3001")

;; HTTP client for REST API calls
(defn load-project-initial-data
  "Load all initial data for a project in a single API call"
  [project-id]
  (ajax/GET (str api-base-url "/api/projects/" project-id "/initial-data")
    {:handler #(rf/dispatch [:data/project-loaded %])
     :error-handler #(rf/dispatch [:data/project-failed %])
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

(defn create-project
  "Create a new project"
  [project-data]
  (ajax/POST (str api-base-url "/api/projects")
    {:params (-> project-data
                 (select-keys [:name :description :path :github_origin])
                 (assoc :templateId (:template_id project-data)))
     :handler #(rf/dispatch [:create-project-success %])
     :error-handler #(rf/dispatch [:create-project-error %])
     :format (ajax/json-request-format)
     :response-format (ajax/json-response-format {:keywords? true})}))

(defn launch-agents
  "Launch agents for a project role"
  [project-id role count]
  (ajax/POST (str api-base-url "/api/agents/launch")
    {:params {:projectId project-id
              :role role
              :count count}
     :handler #(rf/dispatch [:agents/launch-success role %])
     :error-handler #(rf/dispatch [:agents/launch-error role %])
     :format (ajax/json-request-format)
     :response-format (ajax/json-response-format {:keywords? true})}))

(defn update-document-status
  "Update document status (ready/not ready)"
  [document-slug status]
  (ajax/PUT (str api-base-url "/api/documents/" document-slug "/status")
    {:params {:status status}
     :handler #(rf/dispatch [:document/status-updated document-slug status %])
     :error-handler #(rf/dispatch [:document/status-update-failed document-slug %])
     :format (ajax/json-request-format)
     :response-format (ajax/json-response-format {:keywords? true})}))