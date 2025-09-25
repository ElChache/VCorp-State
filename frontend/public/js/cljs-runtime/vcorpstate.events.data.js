goog.provide('vcorpstate.events.data');
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("data","load-project","data/load-project",1705783942),(function (p__12575,p__12576){
var map__12577 = p__12575;
var map__12577__$1 = cljs.core.__destructure_map(map__12577);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12577__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__12578 = p__12576;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12578,(0),null);
var project_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12578,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app","app",-560961707),new cljs.core.Keyword(null,"loading?","loading?",1905707049)], null),true),new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ms","ms",-1152709733),(100),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("data","fetch-project","data/fetch-project",-1646330123),project_id], null)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("data","fetch-project","data/fetch-project",-1646330123),(function (_,p__12581){
var vec__12582 = p__12581;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12582,(0),null);
var project_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12582,(1),null);
vcorpstate.http.load_project_initial_data(project_id);

return cljs.core.PersistentArrayMap.EMPTY;
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("data","project-loaded","data/project-loaded",864796844),(function (db,p__12585){
var vec__12586 = p__12585;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12586,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12586,(1),null);
var map__12589 = data;
var map__12589__$1 = cljs.core.__destructure_map(map__12589);
var collections = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12589__$1,new cljs.core.Keyword(null,"collections","collections",-2114643505));
var documents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12589__$1,new cljs.core.Keyword(null,"documents","documents",-1582333455));
var jobs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12589__$1,new cljs.core.Keyword(null,"jobs","jobs",-313607120));
var squads = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12589__$1,new cljs.core.Keyword(null,"squads","squads",910525345));
var roles = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12589__$1,new cljs.core.Keyword(null,"roles","roles",143379530));
var timestamp = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12589__$1,new cljs.core.Keyword(null,"timestamp","timestamp",579478971));
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
return cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"collections","collections",-2114643505)], null),collections_by_id),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"documents","documents",-1582333455)], null),documents_by_id),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"jobs","jobs",-313607120)], null),jobs_by_id),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"squads","squads",910525345)], null),squads_by_id),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"roles","roles",143379530)], null),roles_by_short_name),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app","app",-560961707),new cljs.core.Keyword(null,"loading?","loading?",1905707049)], null),false),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"last-updated","last-updated",1881380161)], null),timestamp);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("data","project-failed","data/project-failed",631934374),(function (db,p__12590){
var vec__12591 = p__12590;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12591,(0),null);
var error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12591,(1),null);
return cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app","app",-560961707),new cljs.core.Keyword(null,"loading?","loading?",1905707049)], null),false),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app","app",-560961707),new cljs.core.Keyword(null,"error","error",-978969032)], null),"Failed to load project data");
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("data","document-status-changed","data/document-status-changed",-273122727),(function (db,p__12594){
var vec__12595 = p__12594;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12595,(0),null);
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12595,(1),null);
var map__12598 = event;
var map__12598__$1 = cljs.core.__destructure_map(map__12598);
var document_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12598__$1,new cljs.core.Keyword(null,"document_id","document_id",-1715671349));
var new_status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12598__$1,new cljs.core.Keyword(null,"new_status","new_status",-1841400112));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"documents","documents",-1582333455),document_id,new cljs.core.Keyword(null,"status","status",-1997798413)], null),new_status);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("data","job-status-changed","data/job-status-changed",-194475209),(function (db,p__12599){
var vec__12600 = p__12599;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12600,(0),null);
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12600,(1),null);
var map__12603 = event;
var map__12603__$1 = cljs.core.__destructure_map(map__12603);
var job_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12603__$1,new cljs.core.Keyword(null,"job_id","job_id",-911607906));
var completed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12603__$1,new cljs.core.Keyword(null,"completed","completed",-486056503));
var paused = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12603__$1,new cljs.core.Keyword(null,"paused","paused",-1710376127));
return cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"jobs","jobs",-313607120),job_id,new cljs.core.Keyword(null,"completed","completed",-486056503)], null),completed),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"jobs","jobs",-313607120),job_id,new cljs.core.Keyword(null,"paused","paused",-1710376127)], null),paused);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("data","collection-progress-updated","data/collection-progress-updated",-738056983),(function (db,p__12604){
var vec__12605 = p__12604;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12605,(0),null);
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12605,(1),null);
var map__12608 = event;
var map__12608__$1 = cljs.core.__destructure_map(map__12608);
var collection_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12608__$1,new cljs.core.Keyword(null,"collection_id","collection_id",-1037933240));
var completed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12608__$1,new cljs.core.Keyword(null,"completed","completed",-486056503));
var total = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12608__$1,new cljs.core.Keyword(null,"total","total",1916810418));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"collections","collections",-2114643505),collection_id,new cljs.core.Keyword(null,"progress","progress",244323547)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"completed","completed",-486056503),completed,new cljs.core.Keyword(null,"total","total",1916810418),total], null));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("data","document-created","data/document-created",-259390310),(function (db,p__12609){
var vec__12610 = p__12609;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12610,(0),null);
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12610,(1),null);
var map__12613 = event;
var map__12613__$1 = cljs.core.__destructure_map(map__12613);
var document__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12613__$1,new cljs.core.Keyword(null,"document","document",-1329188687));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"documents","documents",-1582333455),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(document__$1)], null),document__$1);
}));

//# sourceMappingURL=vcorpstate.events.data.js.map
