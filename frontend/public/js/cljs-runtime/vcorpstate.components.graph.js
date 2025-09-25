goog.provide('vcorpstate.components.graph');
/**
 * Renders a single level of jobs horizontally (side by side)
 */
vcorpstate.components.graph.render_job_level = (function vcorpstate$components$graph$render_job_level(jobs_map,jobs_by_slug,level){
if(cljs.core.truth_(cljs.core.not_empty(jobs_map))){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"mb-4"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex justify-center",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"gap","gap",80255254),"0.5rem"], null)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__12541){
var vec__12542 = p__12541;
var job_slug = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12542,(0),null);
var _children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12542,(1),null);
var job = cljs.core.get.cljs$core$IFn$_invoke$arity$2(jobs_by_slug,job_slug);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"bg-orange-100 border border-orange-400 rounded px-3 py-2 text-sm"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"font-medium text-orange-800"], null),(function (){var or__5002__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(job);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return job_slug;
}
})()], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(level),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(job_slug)].join('')], null));
}),jobs_map)], null),(function (){var all_children = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.vals(jobs_map));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [vcorpstate.components.graph.render_job_level,all_children,jobs_by_slug,(level + (1))], null);
})()], null);
} else {
return null;
}
});
/**
 * Renders a single squad column with title and jobs
 */
vcorpstate.components.graph.squad_column = (function vcorpstate$components$graph$squad_column(squad_data){
var map__12545 = squad_data;
var map__12545__$1 = cljs.core.__destructure_map(map__12545);
var squad = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12545__$1,new cljs.core.Keyword(null,"squad","squad",1623679812));
var jobs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12545__$1,new cljs.core.Keyword(null,"jobs","jobs",-313607120));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex-shrink-0 min-w-0 mx-2"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"bg-white border border-gray-200 rounded-lg shadow-sm min-h-96"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"px-3 py-2 border-b border-gray-100"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-xs font-medium text-gray-400 uppercase tracking-wide"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(squad)," Squad"].join('')], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"p-3"], null),(function (){var jobs_by_slug = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("data","jobs-by-slug","data/jobs-by-slug",413201112)], null)));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [vcorpstate.components.graph.render_job_level,jobs,jobs_by_slug,(0)], null);
})()], null)], null)], null);
});
vcorpstate.components.graph.graph_component = (function vcorpstate$components$graph$graph_component(){
var loading_QMARK_ = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","loading?","app/loading?",1905551882)], null)));
var graph_structure = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("data","graph-structure","data/graph-structure",611438433)], null)));
var has_graph_structure_QMARK_ = (function (){var and__5000__auto__ = graph_structure;
if(cljs.core.truth_(and__5000__auto__)){
return (cljs.core.count(graph_structure) > (0));
} else {
return and__5000__auto__;
}
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"relative w-full h-full bg-gray-50 overflow-auto"], null),(cljs.core.truth_(loading_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex items-center justify-center h-full"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-gray-600"], null),"Loading project data..."], null)], null):(cljs.core.truth_(has_graph_structure_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"p-4"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex items-start overflow-x-auto pb-4"], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,squad_data){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vcorpstate.components.graph.squad_column,squad_data], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["squad-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"squad","squad",1623679812).cljs$core$IFn$_invoke$arity$1(squad_data))].join('')], null));
}),graph_structure)], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex items-center justify-center h-full"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-gray-500"], null),"No project data available"], null)], null)
))], null);
});

//# sourceMappingURL=vcorpstate.components.graph.js.map
