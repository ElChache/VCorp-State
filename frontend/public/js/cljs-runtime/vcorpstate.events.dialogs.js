goog.provide('vcorpstate.events.dialogs');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"show-launch-agents-dialog","show-launch-agents-dialog",346664923),(function (db,_){
console.log("Opening launch agents dialog");

return cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dialogs","dialogs",-2046256986),new cljs.core.Keyword(null,"launch-agents-open?","launch-agents-open?",-17602465)], null),true),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dialogs","dialogs",-2046256986),new cljs.core.Keyword(null,"role-counts","role-counts",-1518952394)], null),cljs.core.PersistentArrayMap.EMPTY);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"hide-launch-agents-dialog","hide-launch-agents-dialog",-856372398),(function (db,_){
return cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dialogs","dialogs",-2046256986),new cljs.core.Keyword(null,"launch-agents-open?","launch-agents-open?",-17602465)], null),false),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dialogs","dialogs",-2046256986),new cljs.core.Keyword(null,"role-counts","role-counts",-1518952394)], null),cljs.core.PersistentArrayMap.EMPTY);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"update-role-count","update-role-count",938333547),(function (db,p__12643){
var vec__12644 = p__12643;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12644,(0),null);
var role_short_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12644,(1),null);
var new_count = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12644,(2),null);
var count = (function (){var x__5087__auto__ = (0);
var y__5088__auto__ = new_count;
return ((x__5087__auto__ > y__5088__auto__) ? x__5087__auto__ : y__5088__auto__);
})();
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dialogs","dialogs",-2046256986),new cljs.core.Keyword(null,"role-counts","role-counts",-1518952394),role_short_name], null),count);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"show-create-project-dialog","show-create-project-dialog",367423033),(function (db,_){
console.log("Opening create project dialog");

return cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dialogs","dialogs",-2046256986),new cljs.core.Keyword(null,"create-project-open?","create-project-open?",-1021727714)], null),true),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dialogs","dialogs",-2046256986),new cljs.core.Keyword(null,"create-project-form","create-project-form",-1293517145)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Monitors",new cljs.core.Keyword(null,"description","description",-1428560544),"Monitoring magic",new cljs.core.Keyword(null,"path","path",-188191168),"/Users/davidcerezo/Projects/monitors",new cljs.core.Keyword(null,"github_origin","github_origin",-202434485),"https://github.com/ElChache/monitors.git",new cljs.core.Keyword(null,"template_id","template_id",-1482704733),"vcorp_standard"], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dialogs","dialogs",-2046256986),new cljs.core.Keyword(null,"creating-project?","creating-project?",1887742256)], null),false),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dialogs","dialogs",-2046256986),new cljs.core.Keyword(null,"create-project-error","create-project-error",1853248645)], null),null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"hide-create-project-dialog","hide-create-project-dialog",1114726328),(function (db,_){
return cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dialogs","dialogs",-2046256986),new cljs.core.Keyword(null,"create-project-open?","create-project-open?",-1021727714)], null),false),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dialogs","dialogs",-2046256986),new cljs.core.Keyword(null,"create-project-form","create-project-form",-1293517145)], null),cljs.core.PersistentArrayMap.EMPTY),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dialogs","dialogs",-2046256986),new cljs.core.Keyword(null,"creating-project?","creating-project?",1887742256)], null),false),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dialogs","dialogs",-2046256986),new cljs.core.Keyword(null,"create-project-error","create-project-error",1853248645)], null),null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"update-create-project-form","update-create-project-form",1873124692),(function (db,p__12647){
var vec__12648 = p__12647;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12648,(0),null);
var field = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12648,(1),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12648,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dialogs","dialogs",-2046256986),new cljs.core.Keyword(null,"create-project-form","create-project-form",-1293517145),field], null),value);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"create-project","create-project",-2068207849),(function (p__12651,_){
var map__12652 = p__12651;
var map__12652__$1 = cljs.core.__destructure_map(map__12652);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12652__$1,new cljs.core.Keyword(null,"db","db",993250759));
var form_data = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dialogs","dialogs",-2046256986),new cljs.core.Keyword(null,"create-project-form","create-project-form",-1293517145)], null));
console.log("Creating project with data:",cljs.core.clj__GT_js(form_data));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dialogs","dialogs",-2046256986),new cljs.core.Keyword(null,"creating-project?","creating-project?",1887742256)], null),true),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dialogs","dialogs",-2046256986),new cljs.core.Keyword(null,"create-project-error","create-project-error",1853248645)], null),null),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("http","create-project","http/create-project",-2065133681),form_data], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"create-project-success","create-project-success",-471308096),(function (p__12653,p__12654){
var map__12655 = p__12653;
var map__12655__$1 = cljs.core.__destructure_map(map__12655);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12655__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__12656 = p__12654;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12656,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12656,(1),null);
console.log("Project created successfully:",cljs.core.clj__GT_js(response));

var project_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(response,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"project","project",1124394579),new cljs.core.Keyword(null,"id","id",-1388402092)], null));
console.log("Navigating to project ID:",project_id);

vcorpstate.routes.navigate_to_route_BANG_(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"project","project",1124394579),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),project_id], null)], null));

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dialogs","dialogs",-2046256986),new cljs.core.Keyword(null,"creating-project?","creating-project?",1887742256)], null),false),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dialogs","dialogs",-2046256986),new cljs.core.Keyword(null,"create-project-open?","create-project-open?",-1021727714)], null),false),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dialogs","dialogs",-2046256986),new cljs.core.Keyword(null,"create-project-form","create-project-form",-1293517145)], null),cljs.core.PersistentArrayMap.EMPTY)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"create-project-error","create-project-error",1853248645),(function (db,p__12659){
var vec__12660 = p__12659;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12660,(0),null);
var error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12660,(1),null);
console.error("Project creation failed:",cljs.core.clj__GT_js(error));

return cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dialogs","dialogs",-2046256986),new cljs.core.Keyword(null,"creating-project?","creating-project?",1887742256)], null),false),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dialogs","dialogs",-2046256986),new cljs.core.Keyword(null,"create-project-error","create-project-error",1853248645)], null),(function (){var or__5002__auto__ = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(error);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "Failed to create project";
}
})());
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("http","create-project","http/create-project",-2065133681),(function (_,p__12663){
var vec__12664 = p__12663;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12664,(0),null);
var project_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12664,(1),null);
vcorpstate.http.create_project(project_data);

return cljs.core.PersistentArrayMap.EMPTY;
}));

//# sourceMappingURL=vcorpstate.events.dialogs.js.map
