goog.provide('vcorpstate.events.dialogs');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"show-launch-agents-dialog","show-launch-agents-dialog",346664923),(function (db,_){
console.log("Opening launch agents dialog");

return cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dialogs","dialogs",-2046256986),new cljs.core.Keyword(null,"launch-agents-open?","launch-agents-open?",-17602465)], null),true),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dialogs","dialogs",-2046256986),new cljs.core.Keyword(null,"role-counts","role-counts",-1518952394)], null),cljs.core.PersistentArrayMap.EMPTY);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"hide-launch-agents-dialog","hide-launch-agents-dialog",-856372398),(function (db,_){
return cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dialogs","dialogs",-2046256986),new cljs.core.Keyword(null,"launch-agents-open?","launch-agents-open?",-17602465)], null),false),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dialogs","dialogs",-2046256986),new cljs.core.Keyword(null,"role-counts","role-counts",-1518952394)], null),cljs.core.PersistentArrayMap.EMPTY);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"update-role-count","update-role-count",938333547),(function (db,p__12473){
var vec__12474 = p__12473;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12474,(0),null);
var role_short_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12474,(1),null);
var new_count = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12474,(2),null);
var count = (function (){var x__5087__auto__ = (0);
var y__5088__auto__ = new_count;
return ((x__5087__auto__ > y__5088__auto__) ? x__5087__auto__ : y__5088__auto__);
})();
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dialogs","dialogs",-2046256986),new cljs.core.Keyword(null,"role-counts","role-counts",-1518952394),role_short_name], null),count);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"launch-agents","launch-agents",-390054830),(function (p__12483,_){
var map__12484 = p__12483;
var map__12484__$1 = cljs.core.__destructure_map(map__12484);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12484__$1,new cljs.core.Keyword(null,"db","db",993250759));
var role_counts = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dialogs","dialogs",-2046256986),new cljs.core.Keyword(null,"role-counts","role-counts",-1518952394)], null));
var project_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"selected-project-id","selected-project-id",-358296808)], null));
var launch_requests = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__12481_SHARP_){
return (cljs.core.second(p1__12481_SHARP_) > (0));
}),role_counts);
console.log("Launching agents:",cljs.core.clj__GT_js(launch_requests),"for project:",project_id);

if(cljs.core.truth_((function (){var and__5000__auto__ = project_id;
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.seq(launch_requests);
} else {
return and__5000__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dialogs","dialogs",-2046256986),new cljs.core.Keyword(null,"launching-agents?","launching-agents?",1626697251)], null),true),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dialogs","dialogs",-2046256986),new cljs.core.Keyword(null,"agent-launch-results","agent-launch-results",-696755020)], null),cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dialogs","dialogs",-2046256986),new cljs.core.Keyword(null,"agent-launch-error","agent-launch-error",516045647)], null),null),new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__12485){
var vec__12487 = p__12485;
var role = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12487,(0),null);
var count = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12487,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("http","launch-agents","http/launch-agents",-392989750),project_id,role,count], null);
}),launch_requests)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dialogs","dialogs",-2046256986),new cljs.core.Keyword(null,"agent-launch-error","agent-launch-error",516045647)], null),"Please select roles to launch")], null);
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("http","launch-agents","http/launch-agents",-392989750),(function (_,p__12490){
var vec__12491 = p__12490;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12491,(0),null);
var project_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12491,(1),null);
var role = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12491,(2),null);
var count = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12491,(3),null);
vcorpstate.http.launch_agents(project_id,role,count);

return cljs.core.PersistentArrayMap.EMPTY;
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("agents","launch-success","agents/launch-success",-924619992),(function (db,p__12494){
var vec__12495 = p__12494;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12495,(0),null);
var role = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12495,(1),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12495,(2),null);
console.log("Agents launched successfully for role",role,":",cljs.core.clj__GT_js(response));

var current_results = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dialogs","dialogs",-2046256986),new cljs.core.Keyword(null,"agent-launch-results","agent-launch-results",-696755020)], null),cljs.core.PersistentVector.EMPTY);
var new_result = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"role","role",-736691072),role,new cljs.core.Keyword(null,"success","success",1890645906),true,new cljs.core.Keyword(null,"response","response",-1068424192),response], null);
return cljs.core.assoc_in(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dialogs","dialogs",-2046256986),new cljs.core.Keyword(null,"agent-launch-results","agent-launch-results",-696755020)], null),cljs.core.conj,new_result),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dialogs","dialogs",-2046256986),new cljs.core.Keyword(null,"launching-agents?","launching-agents?",1626697251)], null),false);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("agents","launch-error","agents/launch-error",922647182),(function (db,p__12506){
var vec__12507 = p__12506;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12507,(0),null);
var role = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12507,(1),null);
var error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12507,(2),null);
console.error("Agent launch failed for role",role,":",cljs.core.clj__GT_js(error));

var current_results = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dialogs","dialogs",-2046256986),new cljs.core.Keyword(null,"agent-launch-results","agent-launch-results",-696755020)], null),cljs.core.PersistentVector.EMPTY);
var new_result = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"role","role",-736691072),role,new cljs.core.Keyword(null,"success","success",1890645906),false,new cljs.core.Keyword(null,"error","error",-978969032),error], null);
return cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dialogs","dialogs",-2046256986),new cljs.core.Keyword(null,"agent-launch-results","agent-launch-results",-696755020)], null),cljs.core.conj,new_result),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dialogs","dialogs",-2046256986),new cljs.core.Keyword(null,"launching-agents?","launching-agents?",1626697251)], null),false),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dialogs","dialogs",-2046256986),new cljs.core.Keyword(null,"agent-launch-error","agent-launch-error",516045647)], null),["Failed to launch ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(role)," agents: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(error);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "Unknown error";
}
})())].join(''));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"show-document-dialog","show-document-dialog",1018187576),(function (db,p__12514){
var vec__12515 = p__12514;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12515,(0),null);
var document_slug = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12515,(1),null);
console.log("Opening document dialog for:",document_slug);

return cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dialogs","dialogs",-2046256986),new cljs.core.Keyword(null,"document-open?","document-open?",-690671582)], null),true),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dialogs","dialogs",-2046256986),new cljs.core.Keyword(null,"selected-document","selected-document",-816807733)], null),document_slug);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"hide-document-dialog","hide-document-dialog",1857354731),(function (db,_){
return cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dialogs","dialogs",-2046256986),new cljs.core.Keyword(null,"document-open?","document-open?",-690671582)], null),false),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dialogs","dialogs",-2046256986),new cljs.core.Keyword(null,"selected-document","selected-document",-816807733)], null),null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"toggle-document-status","toggle-document-status",2129681039),(function (p__12522,p__12523){
var map__12524 = p__12522;
var map__12524__$1 = cljs.core.__destructure_map(map__12524);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12524__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__12525 = p__12523;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12525,(0),null);
var document_slug = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12525,(1),null);
var current_status = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"documents-by-slug","documents-by-slug",1269449327),document_slug,new cljs.core.Keyword(null,"status","status",-1997798413)], null),"not ready");
var new_status = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_status,"ready"))?"not ready":"ready");
console.log("Toggling document status for",document_slug,"from",current_status,"to",new_status);

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("http","update-document-status","http/update-document-status",-1101155151),document_slug,new_status], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("http","update-document-status","http/update-document-status",-1101155151),(function (_,p__12538){
var vec__12539 = p__12538;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12539,(0),null);
var document_slug = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12539,(1),null);
var status = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12539,(2),null);
vcorpstate.http.update_document_status(document_slug,status);

return cljs.core.PersistentArrayMap.EMPTY;
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("document","status-updated","document/status-updated",-376866723),(function (db,p__12543){
var vec__12547 = p__12543;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12547,(0),null);
var document_slug = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12547,(1),null);
var status = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12547,(2),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12547,(3),null);
console.log("Document status updated successfully:",document_slug,"to",status);

return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"documents-by-slug","documents-by-slug",1269449327),document_slug,new cljs.core.Keyword(null,"status","status",-1997798413)], null),status);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("document","status-update-failed","document/status-update-failed",1404903332),(function (db,p__12551){
var vec__12552 = p__12551;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12552,(0),null);
var document_slug = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12552,(1),null);
var error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12552,(2),null);
console.error("Failed to update document status:",document_slug,error);

return db;
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"show-create-project-dialog","show-create-project-dialog",367423033),(function (db,_){
console.log("Opening create project dialog");

return cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dialogs","dialogs",-2046256986),new cljs.core.Keyword(null,"create-project-open?","create-project-open?",-1021727714)], null),true),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dialogs","dialogs",-2046256986),new cljs.core.Keyword(null,"create-project-form","create-project-form",-1293517145)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Monitors",new cljs.core.Keyword(null,"description","description",-1428560544),"Monitoring magic",new cljs.core.Keyword(null,"path","path",-188191168),"/Users/davidcerezo/Projects/monitors",new cljs.core.Keyword(null,"github_origin","github_origin",-202434485),"https://github.com/ElChache/monitors.git",new cljs.core.Keyword(null,"template_id","template_id",-1482704733),"vcorp_standard"], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dialogs","dialogs",-2046256986),new cljs.core.Keyword(null,"creating-project?","creating-project?",1887742256)], null),false),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dialogs","dialogs",-2046256986),new cljs.core.Keyword(null,"create-project-error","create-project-error",1853248645)], null),null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"hide-create-project-dialog","hide-create-project-dialog",1114726328),(function (db,_){
return cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dialogs","dialogs",-2046256986),new cljs.core.Keyword(null,"create-project-open?","create-project-open?",-1021727714)], null),false),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dialogs","dialogs",-2046256986),new cljs.core.Keyword(null,"create-project-form","create-project-form",-1293517145)], null),cljs.core.PersistentArrayMap.EMPTY),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dialogs","dialogs",-2046256986),new cljs.core.Keyword(null,"creating-project?","creating-project?",1887742256)], null),false),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dialogs","dialogs",-2046256986),new cljs.core.Keyword(null,"create-project-error","create-project-error",1853248645)], null),null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"update-create-project-form","update-create-project-form",1873124692),(function (db,p__12556){
var vec__12560 = p__12556;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12560,(0),null);
var field = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12560,(1),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12560,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dialogs","dialogs",-2046256986),new cljs.core.Keyword(null,"create-project-form","create-project-form",-1293517145),field], null),value);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"create-project","create-project",-2068207849),(function (p__12564,_){
var map__12565 = p__12564;
var map__12565__$1 = cljs.core.__destructure_map(map__12565);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12565__$1,new cljs.core.Keyword(null,"db","db",993250759));
var form_data = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dialogs","dialogs",-2046256986),new cljs.core.Keyword(null,"create-project-form","create-project-form",-1293517145)], null));
console.log("Creating project with data:",cljs.core.clj__GT_js(form_data));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dialogs","dialogs",-2046256986),new cljs.core.Keyword(null,"creating-project?","creating-project?",1887742256)], null),true),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dialogs","dialogs",-2046256986),new cljs.core.Keyword(null,"create-project-error","create-project-error",1853248645)], null),null),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("http","create-project","http/create-project",-2065133681),form_data], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"create-project-success","create-project-success",-471308096),(function (p__12566,p__12567){
var map__12568 = p__12566;
var map__12568__$1 = cljs.core.__destructure_map(map__12568);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12568__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__12569 = p__12567;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12569,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12569,(1),null);
console.log("Project created successfully:",cljs.core.clj__GT_js(response));

var project_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(response,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"project","project",1124394579),new cljs.core.Keyword(null,"id","id",-1388402092)], null));
console.log("Navigating to project ID:",project_id);

vcorpstate.routes.navigate_to_route_BANG_(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"project","project",1124394579),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),project_id], null)], null));

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dialogs","dialogs",-2046256986),new cljs.core.Keyword(null,"creating-project?","creating-project?",1887742256)], null),false),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dialogs","dialogs",-2046256986),new cljs.core.Keyword(null,"create-project-open?","create-project-open?",-1021727714)], null),false),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dialogs","dialogs",-2046256986),new cljs.core.Keyword(null,"create-project-form","create-project-form",-1293517145)], null),cljs.core.PersistentArrayMap.EMPTY)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"create-project-error","create-project-error",1853248645),(function (db,p__12577){
var vec__12578 = p__12577;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12578,(0),null);
var error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12578,(1),null);
console.error("Project creation failed:",cljs.core.clj__GT_js(error));

return cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dialogs","dialogs",-2046256986),new cljs.core.Keyword(null,"creating-project?","creating-project?",1887742256)], null),false),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dialogs","dialogs",-2046256986),new cljs.core.Keyword(null,"create-project-error","create-project-error",1853248645)], null),(function (){var or__5002__auto__ = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(error);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "Failed to create project";
}
})());
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("http","create-project","http/create-project",-2065133681),(function (_,p__12581){
var vec__12582 = p__12581;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12582,(0),null);
var project_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12582,(1),null);
vcorpstate.http.create_project(project_data);

return cljs.core.PersistentArrayMap.EMPTY;
}));

//# sourceMappingURL=vcorpstate.events.dialogs.js.map
