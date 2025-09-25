goog.provide('vcorpstate.http');
vcorpstate.http.api_base_url = "http://localhost:3001";
/**
 * Load all initial data for a project in a single API call
 */
vcorpstate.http.load_project_initial_data = (function vcorpstate$http$load_project_initial_data(project_id){
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic([vcorpstate.http.api_base_url,"/api/projects/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(project_id),"/initial-data"].join(''),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (p1__11258_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("graph","initial-data-loaded","graph/initial-data-loaded",294963839),p1__11258_SHARP_], null));
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),(function (p1__11259_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("graph","initial-data-failed","graph/initial-data-failed",16586170),p1__11259_SHARP_], null));
}),new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format(),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null))], null)], 0));
});
/**
 * Load detailed information for a specific collection
 */
vcorpstate.http.load_collection_details = (function vcorpstate$http$load_collection_details(collection_id){
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic([vcorpstate.http.api_base_url,"/api/collections/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(collection_id),"/details"].join(''),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (p1__11262_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("collection","details-loaded","collection/details-loaded",1795929218),collection_id,p1__11262_SHARP_], null));
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),(function (p1__11263_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("collection","details-failed","collection/details-failed",-264879279),collection_id,p1__11263_SHARP_], null));
}),new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format(),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null))], null)], 0));
});
/**
 * Load detailed information for a specific job
 */
vcorpstate.http.load_job_details = (function vcorpstate$http$load_job_details(job_id){
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic([vcorpstate.http.api_base_url,"/api/jobs/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(job_id),"/details"].join(''),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (p1__11264_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("job","details-loaded","job/details-loaded",-221164063),job_id,p1__11264_SHARP_], null));
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),(function (p1__11265_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("job","details-failed","job/details-failed",1718247092),job_id,p1__11265_SHARP_], null));
}),new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format(),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null))], null)], 0));
});

//# sourceMappingURL=vcorpstate.http.js.map
