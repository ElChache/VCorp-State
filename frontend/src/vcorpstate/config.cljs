(ns vcorpstate.config)

(def config
  {:backend-url (str "http://localhost:" 
                     (or (some-> js/window
                                 (.-vcorpConfig)
                                 (.-backendPort))
                         "3001"))
   :api-base "/api"})