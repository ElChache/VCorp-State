goog.provide('vcorpstate.components.graph');
vcorpstate.components.graph.loading_state = (function vcorpstate$components$graph$loading_state(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex items-center justify-center h-full"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex flex-col items-center space-y-4"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-gray-600"], null),"Loading graph..."], null)], null)], null);
});
vcorpstate.components.graph.empty_state = (function vcorpstate$components$graph$empty_state(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex items-center justify-center h-full"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-center"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-gray-500 text-lg mb-2"], null),"No graph data available"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-gray-400"], null),"Select a project to view the pipeline graph"], null)], null)], null);
});
vcorpstate.components.graph.connection_status = (function vcorpstate$components$graph$connection_status(){
var connected_QMARK_ = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("websocket","connected?","websocket/connected?",-1477429986)], null)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"absolute top-4 right-4 z-10"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["flex items-center space-x-2 px-3 py-2 rounded-lg text-sm ",(cljs.core.truth_(connected_QMARK_)?"bg-green-100 text-green-800":"bg-yellow-100 text-yellow-800")].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["w-2 h-2 rounded-full ",(cljs.core.truth_(connected_QMARK_)?"bg-green-500":"bg-yellow-500")].join('')], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(cljs.core.truth_(connected_QMARK_)?"Real-time connected":"Connecting...")], null)], null)], null);
});
vcorpstate.components.graph.graph_component = (function vcorpstate$components$graph$graph_component(){
var loading_QMARK_ = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("graph","loading?","graph/loading?",1937181019)], null)));
var has_data_QMARK_ = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("graph","has-data?","graph/has-data?",-1099325159)], null)));
var nodes = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("graph","nodes","graph/nodes",-1661231999)], null)));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"relative w-full h-full bg-gray-50"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [vcorpstate.components.graph.connection_status], null),(cljs.core.truth_(loading_QMARK_)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [vcorpstate.components.graph.loading_state], null):((cljs.core.not(has_data_QMARK_))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [vcorpstate.components.graph.empty_state], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"bg-gray-50 overflow-auto",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),"1200px",new cljs.core.Keyword(null,"height","height",1025178622),"600px",new cljs.core.Keyword(null,"position","position",-2011731912),"relative"], null)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__5480__auto__ = (function vcorpstate$components$graph$graph_component_$_iter__14801(s__14802){
return (new cljs.core.LazySeq(null,(function (){
var s__14802__$1 = s__14802;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__14802__$1);
if(temp__5804__auto__){
var s__14802__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14802__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__14802__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__14804 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__14803 = (0);
while(true){
if((i__14803 < size__5479__auto__)){
var node = cljs.core._nth(c__5478__auto__,i__14803);
var map__14805 = node;
var map__14805__$1 = cljs.core.__destructure_map(map__14805);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14805__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14805__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14805__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var x = position.x;
var y = position.y;
var map__14806 = data;
var map__14806__$1 = cljs.core.__destructure_map(map__14806);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14806__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14806__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var is_job_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"job","job",850873087));
var bg_color = ((is_job_QMARK_)?"#f59e0b":"#3b82f6");
cljs.core.chunk_append(b__14804,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y)].join(''),new cljs.core.Keyword(null,"class","class",-2030961996),"border shadow-sm rounded cursor-pointer hover:shadow-md transition-shadow",new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"min-width","min-width",1926193728),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"left","left",-399115937)],["120px","white","center","12px",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(y),"px"].join(''),"500",bg_color,"6px 12px","absolute",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"px"].join('')])], null),label], null));

var G__14809 = (i__14803 + (1));
i__14803 = G__14809;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14804),vcorpstate$components$graph$graph_component_$_iter__14801(cljs.core.chunk_rest(s__14802__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14804),null);
}
} else {
var node = cljs.core.first(s__14802__$2);
var map__14807 = node;
var map__14807__$1 = cljs.core.__destructure_map(map__14807);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14807__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14807__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14807__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var x = position.x;
var y = position.y;
var map__14808 = data;
var map__14808__$1 = cljs.core.__destructure_map(map__14808);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14808__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14808__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var is_job_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"job","job",850873087));
var bg_color = ((is_job_QMARK_)?"#f59e0b":"#3b82f6");
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y)].join(''),new cljs.core.Keyword(null,"class","class",-2030961996),"border shadow-sm rounded cursor-pointer hover:shadow-md transition-shadow",new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"min-width","min-width",1926193728),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"left","left",-399115937)],["120px","white","center","12px",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(y),"px"].join(''),"500",bg_color,"6px 12px","absolute",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"px"].join('')])], null),label], null),vcorpstate$components$graph$graph_component_$_iter__14801(cljs.core.rest(s__14802__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(nodes);
})())], null)
))], null);
});

//# sourceMappingURL=vcorpstate.components.graph.js.map
