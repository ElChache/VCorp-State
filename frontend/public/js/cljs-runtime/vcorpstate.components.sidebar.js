goog.provide('vcorpstate.components.sidebar');
/**
 * Single sidebar icon button component
 */
vcorpstate.components.sidebar.sidebar_icon_button = (function vcorpstate$components$sidebar$sidebar_icon_button(p__15240){
var map__15241 = p__15240;
var map__15241__$1 = cljs.core.__destructure_map(map__15241);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15241__$1,new cljs.core.Keyword(null,"title","title",636505583));
var icon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15241__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
var section = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15241__$1,new cljs.core.Keyword(null,"section","section",-300141526));
var hover_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15241__$1,new cljs.core.Keyword(null,"hover-class","hover-class",-778006410));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),["mx-1 p-1 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hover_class)," text-gray-600 rounded transition-colors mb-1 flex items-center justify-center w-16 h-16"].join(''),new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-sidebar-section","toggle-sidebar-section",-822593019),section], null));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-center font-bold",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"34px"], null)], null),icon], null)], null);
});
/**
 * Content section for expanded sidebar
 */
vcorpstate.components.sidebar.sidebar_content_section = (function vcorpstate$components$sidebar$sidebar_content_section(title,items){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"font-semibold text-gray-800 mb-3"], null),title], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"space-y-2"], null),(function (){var iter__5480__auto__ = (function vcorpstate$components$sidebar$sidebar_content_section_$_iter__15242(s__15243){
return (new cljs.core.LazySeq(null,(function (){
var s__15243__$1 = s__15243;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__15243__$1);
if(temp__5804__auto__){
var s__15243__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__15243__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__15243__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__15245 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__15244 = (0);
while(true){
if((i__15244 < size__5479__auto__)){
var item = cljs.core._nth(c__5478__auto__,i__15244);
cljs.core.chunk_append(b__15245,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vcorpstate.components.sidebar_utils.sidebar_content_item,item], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),item], null)));

var G__15247 = (i__15244 + (1));
i__15244 = G__15247;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15245),vcorpstate$components$sidebar$sidebar_content_section_$_iter__15242(cljs.core.chunk_rest(s__15243__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15245),null);
}
} else {
var item = cljs.core.first(s__15243__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vcorpstate.components.sidebar_utils.sidebar_content_item,item], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),item], null)),vcorpstate$components$sidebar$sidebar_content_section_$_iter__15242(cljs.core.rest(s__15243__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(items);
})()], null)], null);
});
/**
 * Fixed left column with navigation icons
 */
vcorpstate.components.sidebar.sidebar_icons_column = (function vcorpstate$components$sidebar$sidebar_icons_column(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"bg-white shadow-lg border-r border-gray-200 flex flex-col",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"66px",new cljs.core.Keyword(null,"height","height",1025178622),"100vh"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex-1 flex flex-col pt-4"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vcorpstate.components.sidebar.sidebar_icon_button,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),"Agents",new cljs.core.Keyword(null,"icon","icon",1679606541),"\uD83D\uDC65",new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.Keyword(null,"agents","agents",-1112413700),new cljs.core.Keyword(null,"hover-class","hover-class",-778006410),"hover:bg-blue-50 hover:text-blue-600"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vcorpstate.components.sidebar.sidebar_icon_button,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),"Tickets",new cljs.core.Keyword(null,"icon","icon",1679606541),"\uD83C\uDFAB",new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.Keyword(null,"tickets","tickets",-2077135171),new cljs.core.Keyword(null,"hover-class","hover-class",-778006410),"hover:bg-green-50 hover:text-green-600"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vcorpstate.components.sidebar.sidebar_icon_button,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),"Documents",new cljs.core.Keyword(null,"icon","icon",1679606541),"\uD83D\uDCC4",new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.Keyword(null,"documents","documents",-1582333455),new cljs.core.Keyword(null,"hover-class","hover-class",-778006410),"hover:bg-purple-50 hover:text-purple-600"], null)], null)], null)], null);
});
/**
 * Expandable content panel that slides out from icons
 */
vcorpstate.components.sidebar.sidebar_expanded_panel = (function vcorpstate$components$sidebar$sidebar_expanded_panel(expanded_section){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"bg-white shadow-lg border-r border-gray-200 transition-all duration-300 overflow-hidden",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),(((!((expanded_section == null))))?"214px":"0px"),new cljs.core.Keyword(null,"height","height",1025178622),"100vh",new cljs.core.Keyword(null,"overflow-y","overflow-y",-1436589285),"scroll"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
return e.stopPropagation();
})], null),(((!((expanded_section == null))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"p-4 h-full flex flex-col",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"214px"], null)], null),(function (){var G__15246 = expanded_section;
var G__15246__$1 = (((G__15246 instanceof cljs.core.Keyword))?G__15246.fqn:null);
switch (G__15246__$1) {
case "agents":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [vcorpstate.components.agents_section.agents_section], null);

break;
case "tickets":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [vcorpstate.components.sidebar.sidebar_content_section,"Tickets",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#001 - Setup issue","#002 - Bug report","#003 - Feature request"], null)], null);

break;
case "documents":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [vcorpstate.components.sidebar.sidebar_content_section,"Documents",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["README.md","API_DOCS.md","CHANGELOG.md"], null)], null);

break;
default:
return null;

}
})()], null):null)], null);
});
/**
 * Complete sidebar component with icons and expandable panel
 */
vcorpstate.components.sidebar.sidebar = (function vcorpstate$components$sidebar$sidebar(){
var expanded_section = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"expanded-sidebar-section","expanded-sidebar-section",-903073682)], null)));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [vcorpstate.components.sidebar.sidebar_icons_column], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vcorpstate.components.sidebar.sidebar_expanded_panel,expanded_section], null)], null);
});

//# sourceMappingURL=vcorpstate.components.sidebar.js.map
