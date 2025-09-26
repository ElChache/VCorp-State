goog.provide('vcorpstate.views.project_main');
/**
 * Main project view with sidebar and graph
 */
vcorpstate.views.project_main.project_main_view = (function vcorpstate$views$project_main$project_main_view(){
var selected_project = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-project","selected-project",993223033)], null)));
var selected_project_id = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-project-id","selected-project-id",-358296808)], null)));
var expanded_section = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"expanded-sidebar-section","expanded-sidebar-section",-903073682)], null)));
var has_data_QMARK_ = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("data","loaded?","data/loaded?",-1132268076)], null)));
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (){
if(cljs.core.truth_(selected_project_id)){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("project","load","project/load",2146921719),selected_project_id], null));

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("websocket","connect","websocket/connect",1397358632),selected_project_id], null));
} else {
return null;
}
}),new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),(function (this$,p__14531){
var vec__14532 = p__14531;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14532,(0),null);
var prev_props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14532,(1),null);
var vec__14535 = prev_props;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14535,(0),null);
var prev_project_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14535,(1),null);
if(cljs.core.truth_((function (){var and__5000__auto__ = selected_project_id;
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(selected_project_id,prev_project_id);
} else {
return and__5000__auto__;
}
})())){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("project","load","project/load",2146921719),selected_project_id], null));

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("websocket","connect","websocket/connect",1397358632),selected_project_id], null));
} else {
return null;
}
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"relative h-screen bg-gray-50",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
if(cljs.core.truth_(expanded_section)){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-sidebar-section","toggle-sidebar-section",-822593019),null], null));
} else {
return null;
}
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"h-full",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"66px"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [vcorpstate.components.graph.graph_component], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [vcorpstate.components.sidebar.sidebar], null)], null);
})], null));
});

//# sourceMappingURL=vcorpstate.views.project_main.js.map
