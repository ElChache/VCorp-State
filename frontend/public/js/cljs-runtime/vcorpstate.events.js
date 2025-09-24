goog.provide('vcorpstate.events');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),(function (_,___$1){
return vcorpstate.db.default_db;
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fetch-projects","fetch-projects",1303051401),(function (p__12499,_){
var map__12500 = p__12499;
var map__12500__$1 = cljs.core.__destructure_map(map__12500);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12500__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"loading?","loading?",1905707049),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"error","error",-978969032),null], 0)),new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"backend-url","backend-url",-283436201).cljs$core$IFn$_invoke$arity$1(vcorpstate.config.config)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"api-base","api-base",891294827).cljs$core$IFn$_invoke$arity$1(vcorpstate.config.config)),"/projects"].join(''),new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format(),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fetch-projects-success","fetch-projects-success",-844184285)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fetch-projects-failure","fetch-projects-failure",1492946592)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fetch-projects-success","fetch-projects-success",-844184285),(function (p__12501,p__12502){
var map__12503 = p__12501;
var map__12503__$1 = cljs.core.__destructure_map(map__12503);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12503__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__12504 = p__12502;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12504,(0),null);
var projects = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12504,(1),null);
var updated_db = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"loading?","loading?",1905707049),false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"projects","projects",-364845983),projects,new cljs.core.Keyword(null,"error","error",-978969032),null], 0));
var pending_route = new cljs.core.Keyword(null,"pending-route","pending-route",-107452698).cljs$core$IFn$_invoke$arity$1(db);
if(cljs.core.truth_(pending_route)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(updated_db,new cljs.core.Keyword(null,"pending-route","pending-route",-107452698)),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"navigate-to-project-by-id","navigate-to-project-by-id",414954927),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(pending_route,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"id","id",-1388402092)], null))], null)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),updated_db], null);
}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fetch-projects-failure","fetch-projects-failure",1492946592),(function (db,p__12507){
var vec__12508 = p__12507;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12508,(0),null);
var error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12508,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"loading?","loading?",1905707049),false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"error","error",-978969032),"Failed to fetch projects"], 0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-selected-project","set-selected-project",639995206),(function (db,p__12511){
var vec__12512 = p__12511;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12512,(0),null);
var project_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12512,(1),null);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["set-selected-project event received with project-id:",project_id], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Type of project-id:",cljs.core.type(project_id)], 0));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"selected-project-id","selected-project-id",-358296808),project_id);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"navigate-to-main","navigate-to-main",475294581),(function (db,p__12515){
var vec__12516 = p__12515;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12516,(0),null);
var project_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12516,(1),null);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["navigate-to-main event received with project-id:",project_id], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Current db:",db], 0));

var new_db = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"current-view","current-view",-1037279042),new cljs.core.Keyword(null,"main","main",-2117802661),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"selected-project-id","selected-project-id",-358296808),project_id], 0));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["New db:",new_db], 0));

return new_db;
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-current-view","set-current-view",1459791368),(function (db,p__12519){
var vec__12520 = p__12519;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12520,(0),null);
var view = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12520,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"current-view","current-view",-1037279042),view);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-route","set-route",-1886203891),(function (db,p__12523){
var vec__12524 = p__12523;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12524,(0),null);
var route = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12524,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"current-route","current-route",2067529448),route);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"navigate-to-project-by-id","navigate-to-project-by-id",414954927),(function (p__12528,p__12529){
var map__12530 = p__12528;
var map__12530__$1 = cljs.core.__destructure_map(map__12530);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12530__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__12531 = p__12529;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12531,(0),null);
var project_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12531,(1),null);
var projects = new cljs.core.Keyword(null,"projects","projects",-364845983).cljs$core$IFn$_invoke$arity$1(db);
var project = cljs.core.some((function (p1__12527_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__12527_SHARP_),project_id)){
return p1__12527_SHARP_;
} else {
return null;
}
}),projects);
if(cljs.core.truth_((function (){var and__5000__auto__ = project;
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.seq(projects);
} else {
return and__5000__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"current-view","current-view",-1037279042),new cljs.core.Keyword(null,"main","main",-2117802661),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"selected-project-id","selected-project-id",-358296808),project_id,new cljs.core.Keyword(null,"current-route","current-route",2067529448),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"project","project",1124394579),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),project_id], null)], null)], 0))], null);
} else {
if(cljs.core.empty_QMARK_(projects)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"pending-route","pending-route",-107452698),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"project","project",1124394579),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),project_id], null)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"current-view","current-view",-1037279042),new cljs.core.Keyword(null,"project-selector","project-selector",2050158805)], 0))], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"current-view","current-view",-1037279042),new cljs.core.Keyword(null,"project-selector","project-selector",2050158805),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"current-route","current-route",2067529448),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"home","home",-74557309)], null)], 0))], null);
}
}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"navigate-to-home","navigate-to-home",519585018),(function (db,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"current-view","current-view",-1037279042),new cljs.core.Keyword(null,"project-selector","project-selector",2050158805),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"selected-project-id","selected-project-id",-358296808),null,new cljs.core.Keyword(null,"current-route","current-route",2067529448),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"home","home",-74557309)], null)], 0));
}));

//# sourceMappingURL=vcorpstate.events.js.map
