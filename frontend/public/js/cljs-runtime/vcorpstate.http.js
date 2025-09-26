goog.provide('vcorpstate.http');
vcorpstate.http.api_base_url = "http://localhost:3001";
/**
 * Load all initial data for a project in a single API call
 */
vcorpstate.http.load_project_initial_data = (function vcorpstate$http$load_project_initial_data(project_id){
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic([vcorpstate.http.api_base_url,"/api/projects/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(project_id),"/initial-data"].join(''),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (p1__14297_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("data","project-loaded","data/project-loaded",864796844),p1__14297_SHARP_], null));
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),(function (p1__14298_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("data","project-failed","data/project-failed",631934374),p1__14298_SHARP_], null));
}),new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format(),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null))], null)], 0));
});
/**
 * Load detailed information for a specific collection
 */
vcorpstate.http.load_collection_details = (function vcorpstate$http$load_collection_details(collection_id){
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic([vcorpstate.http.api_base_url,"/api/collections/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(collection_id),"/details"].join(''),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (p1__14299_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("collection","details-loaded","collection/details-loaded",1795929218),collection_id,p1__14299_SHARP_], null));
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),(function (p1__14300_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("collection","details-failed","collection/details-failed",-264879279),collection_id,p1__14300_SHARP_], null));
}),new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format(),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null))], null)], 0));
});
/**
 * Load detailed information for a specific job
 */
vcorpstate.http.load_job_details = (function vcorpstate$http$load_job_details(job_id){
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic([vcorpstate.http.api_base_url,"/api/jobs/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(job_id),"/details"].join(''),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (p1__14301_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("job","details-loaded","job/details-loaded",-221164063),job_id,p1__14301_SHARP_], null));
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),(function (p1__14302_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("job","details-failed","job/details-failed",1718247092),job_id,p1__14302_SHARP_], null));
}),new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format(),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null))], null)], 0));
});
/**
 * Create a new project
 */
vcorpstate.http.create_project = (function vcorpstate$http$create_project(project_data){
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic([vcorpstate.http.api_base_url,"/api/projects"].join(''),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.select_keys(project_data,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"github_origin","github_origin",-202434485)], null)),new cljs.core.Keyword(null,"templateId","templateId",613248985),new cljs.core.Keyword(null,"template_id","template_id",-1482704733).cljs$core$IFn$_invoke$arity$1(project_data)),new cljs.core.Keyword(null,"handler","handler",-195596612),(function (p1__14303_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"create-project-success","create-project-success",-471308096),p1__14303_SHARP_], null));
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),(function (p1__14304_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"create-project-error","create-project-error",1853248645),p1__14304_SHARP_], null));
}),new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format(),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null))], null)], 0));
});
/**
 * Launch agents for a project role
 */
vcorpstate.http.launch_agents = (function vcorpstate$http$launch_agents(project_id,role,count){
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic([vcorpstate.http.api_base_url,"/api/agents/launch"].join(''),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"projectId","projectId",-1551013096),project_id,new cljs.core.Keyword(null,"role","role",-736691072),role,new cljs.core.Keyword(null,"count","count",2139924085),count], null),new cljs.core.Keyword(null,"handler","handler",-195596612),(function (p1__14305_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("agents","launch-success","agents/launch-success",-924619992),role,p1__14305_SHARP_], null));
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),(function (p1__14306_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("agents","launch-error","agents/launch-error",922647182),role,p1__14306_SHARP_], null));
}),new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format(),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null))], null)], 0));
});
/**
 * Update document ready status (boolean)
 */
vcorpstate.http.update_document_status = (function vcorpstate$http$update_document_status(document_id,ready_QMARK_){
return ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic([vcorpstate.http.api_base_url,"/api/documents/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(document_id),"/ready"].join(''),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ready","ready",1086465795),ready_QMARK_], null),new cljs.core.Keyword(null,"handler","handler",-195596612),(function (p1__14307_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("document","status-updated","document/status-updated",-376866723),document_id,ready_QMARK_,p1__14307_SHARP_], null));
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),(function (p1__14308_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("document","status-update-failed","document/status-update-failed",1404903332),document_id,p1__14308_SHARP_], null));
}),new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format(),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null))], null)], 0));
});

//# sourceMappingURL=vcorpstate.http.js.map
