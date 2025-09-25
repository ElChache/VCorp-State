goog.provide('vcorpstate.events.graph');
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("graph","load-initial-data","graph/load-initial-data",470096851),(function (p__11304,p__11305){
var map__11306 = p__11304;
var map__11306__$1 = cljs.core.__destructure_map(map__11306);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11306__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__11307 = p__11305;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11307,(0),null);
var project_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11307,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"graph","graph",1558099509),new cljs.core.Keyword(null,"loading?","loading?",1905707049)], null),true),new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ms","ms",-1152709733),(100),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("http","load-project-data","http/load-project-data",15731271),project_id], null)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("http","load-project-data","http/load-project-data",15731271),(function (_,p__11310){
var vec__11311 = p__11310;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11311,(0),null);
var project_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11311,(1),null);
vcorpstate.http.load_project_initial_data(project_id);

return cljs.core.PersistentArrayMap.EMPTY;
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("graph","initial-data-loaded","graph/initial-data-loaded",294963839),(function (db,p__11314){
var vec__11315 = p__11314;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11315,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11315,(1),null);
var map__11318 = data;
var map__11318__$1 = cljs.core.__destructure_map(map__11318);
var collections = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11318__$1,new cljs.core.Keyword(null,"collections","collections",-2114643505));
var documents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11318__$1,new cljs.core.Keyword(null,"documents","documents",-1582333455));
var jobs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11318__$1,new cljs.core.Keyword(null,"jobs","jobs",-313607120));
var squads = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11318__$1,new cljs.core.Keyword(null,"squads","squads",910525345));
var roles = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11318__$1,new cljs.core.Keyword(null,"roles","roles",143379530));
var timestamp = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11318__$1,new cljs.core.Keyword(null,"timestamp","timestamp",579478971));
var collections_by_id = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (c){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(c),c], null);
})),collections);
var documents_by_id = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (d){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(d),d], null);
})),documents);
var jobs_by_id = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (j){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(j),j], null);
})),jobs);
var squads_by_id = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (s){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(s),s], null);
})),squads);
var roles_by_short_name = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (r){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"short_name","short_name",1420585806).cljs$core$IFn$_invoke$arity$1(r),r], null);
})),roles);
return cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"graph","graph",1558099509),new cljs.core.Keyword(null,"collections","collections",-2114643505)], null),collections_by_id),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"graph","graph",1558099509),new cljs.core.Keyword(null,"documents","documents",-1582333455)], null),documents_by_id),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"graph","graph",1558099509),new cljs.core.Keyword(null,"jobs","jobs",-313607120)], null),jobs_by_id),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"graph","graph",1558099509),new cljs.core.Keyword(null,"squads","squads",910525345)], null),squads_by_id),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"graph","graph",1558099509),new cljs.core.Keyword(null,"roles","roles",143379530)], null),roles_by_short_name),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"graph","graph",1558099509),new cljs.core.Keyword(null,"loading?","loading?",1905707049)], null),false),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"graph","graph",1558099509),new cljs.core.Keyword(null,"last-updated","last-updated",1881380161)], null),timestamp);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("graph","initial-data-failed","graph/initial-data-failed",16586170),(function (db,p__11325){
var vec__11326 = p__11325;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11326,(0),null);
var error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11326,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"graph","graph",1558099509),new cljs.core.Keyword(null,"loading?","loading?",1905707049)], null),false),new cljs.core.Keyword(null,"error","error",-978969032),"Failed to load graph data");
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("graph","document-status-changed","graph/document-status-changed",-164205867),(function (db,p__11329){
var vec__11330 = p__11329;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11330,(0),null);
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11330,(1),null);
var map__11333 = event;
var map__11333__$1 = cljs.core.__destructure_map(map__11333);
var document_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11333__$1,new cljs.core.Keyword(null,"document_id","document_id",-1715671349));
var new_status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11333__$1,new cljs.core.Keyword(null,"new_status","new_status",-1841400112));
var old_status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11333__$1,new cljs.core.Keyword(null,"old_status","old_status",748852615));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"graph","graph",1558099509),new cljs.core.Keyword(null,"documents","documents",-1582333455),document_id,new cljs.core.Keyword(null,"status","status",-1997798413)], null),new_status);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("graph","job-status-changed","graph/job-status-changed",-335897525),(function (db,p__11335){
var vec__11336 = p__11335;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11336,(0),null);
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11336,(1),null);
var map__11339 = event;
var map__11339__$1 = cljs.core.__destructure_map(map__11339);
var job_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11339__$1,new cljs.core.Keyword(null,"job_id","job_id",-911607906));
var completed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11339__$1,new cljs.core.Keyword(null,"completed","completed",-486056503));
var paused = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11339__$1,new cljs.core.Keyword(null,"paused","paused",-1710376127));
return cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"graph","graph",1558099509),new cljs.core.Keyword(null,"jobs","jobs",-313607120),job_id,new cljs.core.Keyword(null,"completed","completed",-486056503)], null),completed),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"graph","graph",1558099509),new cljs.core.Keyword(null,"jobs","jobs",-313607120),job_id,new cljs.core.Keyword(null,"paused","paused",-1710376127)], null),paused);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("graph","collection-progress-updated","graph/collection-progress-updated",-783101299),(function (db,p__11340){
var vec__11341 = p__11340;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11341,(0),null);
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11341,(1),null);
var map__11344 = event;
var map__11344__$1 = cljs.core.__destructure_map(map__11344);
var collection_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11344__$1,new cljs.core.Keyword(null,"collection_id","collection_id",-1037933240));
var completed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11344__$1,new cljs.core.Keyword(null,"completed","completed",-486056503));
var total = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11344__$1,new cljs.core.Keyword(null,"total","total",1916810418));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"graph","graph",1558099509),new cljs.core.Keyword(null,"collections","collections",-2114643505),collection_id,new cljs.core.Keyword(null,"progress","progress",244323547)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"completed","completed",-486056503),completed,new cljs.core.Keyword(null,"total","total",1916810418),total], null));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("graph","document-created","graph/document-created",-424135234),(function (db,p__11345){
var vec__11346 = p__11345;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11346,(0),null);
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11346,(1),null);
var map__11349 = event;
var map__11349__$1 = cljs.core.__destructure_map(map__11349);
var document__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11349__$1,new cljs.core.Keyword(null,"document","document",-1329188687));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"graph","graph",1558099509),new cljs.core.Keyword(null,"documents","documents",-1582333455),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(document__$1)], null),document__$1);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("collection","show-details","collection/show-details",-2083604890),(function (p__11350,p__11351){
var map__11352 = p__11350;
var map__11352__$1 = cljs.core.__destructure_map(map__11352);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11352__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__11353 = p__11351;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11353,(0),null);
var collection_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11353,(1),null);
vcorpstate.http.load_collection_details(collection_id);

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"selected-collection-id","selected-collection-id",-660113981)], null),collection_id)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("collection","details-loaded","collection/details-loaded",1795929218),(function (db,p__11356){
var vec__11357 = p__11356;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11357,(0),null);
var collection_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11357,(1),null);
var details = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11357,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"collection-details","collection-details",1419849986)], null),details);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("job","show-details","job/show-details",463160645),(function (p__11360,p__11361){
var map__11366 = p__11360;
var map__11366__$1 = cljs.core.__destructure_map(map__11366);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11366__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__11367 = p__11361;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11367,(0),null);
var job_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11367,(1),null);
vcorpstate.http.load_job_details(job_id);

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"selected-job-id","selected-job-id",284545636)], null),job_id)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("job","details-loaded","job/details-loaded",-221164063),(function (db,p__11370){
var vec__11371 = p__11370;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11371,(0),null);
var job_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11371,(1),null);
var details = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11371,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"job-details","job-details",-545212614)], null),details);
}));

//# sourceMappingURL=vcorpstate.events.graph.js.map
