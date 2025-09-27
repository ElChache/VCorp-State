goog.provide('vcorpstate.components.agents_section');
/**
 * Individual agent display component
 */
vcorpstate.components.agents_section.agent_item = (function vcorpstate$components$agents_section$agent_item(agent,roles){
var role = cljs.core.get.cljs$core$IFn$_invoke$arity$2(roles,new cljs.core.Keyword(null,"role","role",-736691072).cljs$core$IFn$_invoke$arity$1(agent));
var agent_description = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"slug","slug",2029314850).cljs$core$IFn$_invoke$arity$1(agent)),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"short_name","short_name",1420585806).cljs$core$IFn$_invoke$arity$1(role))].join('');
var agent_status = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(agent);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded transition-colors cursor-pointer border border-transparent hover:border-gray-200"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"font-medium text-gray-900"], null),agent_description], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-gray-500 text-xs mt-1"], null),agent_status], null)], null);
});
/**
 * Agents section with title, launch button and agent list
 */
vcorpstate.components.agents_section.agents_section = (function vcorpstate$components$agents_section$agents_section(){
var agents = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("data","agents","data/agents",-1115506098)], null)));
var roles = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("data","roles","data/roles",129899700)], null)));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex flex-col h-full"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex items-center justify-between mb-3 flex-shrink-0"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"font-semibold text-gray-800"], null),"Agents"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [vcorpstate.components.launch_button.launch_button], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex-1 overflow-y-auto space-y-1 max-h-0"], null),(cljs.core.truth_((function (){var and__5000__auto__ = agents;
if(cljs.core.truth_(and__5000__auto__)){
var and__5000__auto____$1 = roles;
if(cljs.core.truth_(and__5000__auto____$1)){
return cljs.core.seq(agents);
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
})())?(function (){var iter__5480__auto__ = (function vcorpstate$components$agents_section$agents_section_$_iter__15175(s__15176){
return (new cljs.core.LazySeq(null,(function (){
var s__15176__$1 = s__15176;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__15176__$1);
if(temp__5804__auto__){
var s__15176__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__15176__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__15176__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__15178 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__15177 = (0);
while(true){
if((i__15177 < size__5479__auto__)){
var agent = cljs.core._nth(c__5478__auto__,i__15177);
cljs.core.chunk_append(b__15178,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [vcorpstate.components.agents_section.agent_item,agent,roles], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(agent)], null)));

var G__15179 = (i__15177 + (1));
i__15177 = G__15179;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15178),vcorpstate$components$agents_section$agents_section_$_iter__15175(cljs.core.chunk_rest(s__15176__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15178),null);
}
} else {
var agent = cljs.core.first(s__15176__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [vcorpstate.components.agents_section.agent_item,agent,roles], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(agent)], null)),vcorpstate$components$agents_section$agents_section_$_iter__15175(cljs.core.rest(s__15176__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(cljs.core.vals(agents));
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-gray-500 text-center py-4 text-sm"], null),"No agents launched yet"], null))], null)], null);
});

//# sourceMappingURL=vcorpstate.components.agents_section.js.map
