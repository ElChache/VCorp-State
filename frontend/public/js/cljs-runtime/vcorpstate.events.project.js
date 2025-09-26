goog.provide('vcorpstate.events.project');
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("project","load","project/load",2146921719),(function (_,p__12433){
var vec__12434 = p__12433;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12434,(0),null);
var project_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12434,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("data","load-project","data/load-project",1705783942),project_id], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("collection","show-details","collection/show-details",-2083604890),(function (p__12439,p__12440){
var map__12445 = p__12439;
var map__12445__$1 = cljs.core.__destructure_map(map__12445);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12445__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__12446 = p__12440;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12446,(0),null);
var collection_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12446,(1),null);
vcorpstate.http.load_collection_details(collection_id);

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"selected-collection-id","selected-collection-id",-660113981)], null),collection_id)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("collection","details-loaded","collection/details-loaded",1795929218),(function (db,p__12449){
var vec__12451 = p__12449;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12451,(0),null);
var details = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12451,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"collection-details","collection-details",1419849986)], null),details);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("job","show-details","job/show-details",463160645),(function (p__12457,p__12458){
var map__12459 = p__12457;
var map__12459__$1 = cljs.core.__destructure_map(map__12459);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12459__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__12460 = p__12458;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12460,(0),null);
var job_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12460,(1),null);
vcorpstate.http.load_job_details(job_id);

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"selected-job-id","selected-job-id",284545636)], null),job_id)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("job","details-loaded","job/details-loaded",-221164063),(function (db,p__12470){
var vec__12471 = p__12470;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12471,(0),null);
var details = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12471,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"job-details","job-details",-545212614)], null),details);
}));

//# sourceMappingURL=vcorpstate.events.project.js.map
