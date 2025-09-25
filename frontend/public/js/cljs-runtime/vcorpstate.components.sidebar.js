goog.provide('vcorpstate.components.sidebar');
/**
 * Back button component for sidebar
 */
vcorpstate.components.sidebar.sidebar_back_button = (function vcorpstate$components$sidebar$sidebar_back_button(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"h-16 flex items-center justify-center border-b border-gray-200"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"p-1 hover:bg-gray-100 rounded transition-colors w-16 h-12 flex items-center justify-center",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return vcorpstate.routes.navigate_to_route_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"home","home",-74557309)], null));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-gray-600 font-bold text-center",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"34px"], null)], null),"\u2190"], null)], null)], null);
});
/**
 * Single sidebar icon button component
 */
vcorpstate.components.sidebar.sidebar_icon_button = (function vcorpstate$components$sidebar$sidebar_icon_button(p__12414){
var map__12415 = p__12414;
var map__12415__$1 = cljs.core.__destructure_map(map__12415);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12415__$1,new cljs.core.Keyword(null,"title","title",636505583));
var icon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12415__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
var section = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12415__$1,new cljs.core.Keyword(null,"section","section",-300141526));
var hover_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12415__$1,new cljs.core.Keyword(null,"hover-class","hover-class",-778006410));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),["mx-1 p-1 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hover_class)," text-gray-600 rounded transition-colors mb-1 flex items-center justify-center w-16 h-16"].join(''),new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-sidebar-section","toggle-sidebar-section",-822593019),section], null));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-center font-bold",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"34px"], null)], null),icon], null)], null);
});
/**
 * Single item in sidebar content panel
 */
vcorpstate.components.sidebar.sidebar_content_item = (function vcorpstate$components$sidebar$sidebar_content_item(text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-sm text-gray-700 cursor-pointer hover:bg-gray-50 p-2 rounded"], null),text], null);
});
/**
 * Content section for expanded sidebar
 */
vcorpstate.components.sidebar.sidebar_content_section = (function vcorpstate$components$sidebar$sidebar_content_section(title,items){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"font-semibold text-gray-800 mb-3"], null),title], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"space-y-2"], null),(function (){var iter__5480__auto__ = (function vcorpstate$components$sidebar$sidebar_content_section_$_iter__12418(s__12419){
return (new cljs.core.LazySeq(null,(function (){
var s__12419__$1 = s__12419;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__12419__$1);
if(temp__5804__auto__){
var s__12419__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__12419__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__12419__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__12423 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__12421 = (0);
while(true){
if((i__12421 < size__5479__auto__)){
var item = cljs.core._nth(c__5478__auto__,i__12421);
cljs.core.chunk_append(b__12423,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vcorpstate.components.sidebar.sidebar_content_item,item], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),item], null)));

var G__12425 = (i__12421 + (1));
i__12421 = G__12425;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12423),vcorpstate$components$sidebar$sidebar_content_section_$_iter__12418(cljs.core.chunk_rest(s__12419__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12423),null);
}
} else {
var item = cljs.core.first(s__12419__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vcorpstate.components.sidebar.sidebar_content_item,item], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),item], null)),vcorpstate$components$sidebar$sidebar_content_section_$_iter__12418(cljs.core.rest(s__12419__$2)));
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
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"bg-white shadow-lg border-r border-gray-200",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"top","top",-1856271961),"0",new cljs.core.Keyword(null,"left","left",-399115937),"0",new cljs.core.Keyword(null,"width","width",-384071477),"66px",new cljs.core.Keyword(null,"height","height",1025178622),"100vh",new cljs.core.Keyword(null,"z-index","z-index",1892827090),"100"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [vcorpstate.components.sidebar.sidebar_back_button], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex-1 flex flex-col pt-4"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vcorpstate.components.sidebar.sidebar_icon_button,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),"Agents",new cljs.core.Keyword(null,"icon","icon",1679606541),"\uD83D\uDC65",new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.Keyword(null,"agents","agents",-1112413700),new cljs.core.Keyword(null,"hover-class","hover-class",-778006410),"hover:bg-blue-50 hover:text-blue-600"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vcorpstate.components.sidebar.sidebar_icon_button,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),"Tickets",new cljs.core.Keyword(null,"icon","icon",1679606541),"\uD83C\uDFAB",new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.Keyword(null,"tickets","tickets",-2077135171),new cljs.core.Keyword(null,"hover-class","hover-class",-778006410),"hover:bg-green-50 hover:text-green-600"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vcorpstate.components.sidebar.sidebar_icon_button,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),"Documents",new cljs.core.Keyword(null,"icon","icon",1679606541),"\uD83D\uDCC4",new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.Keyword(null,"documents","documents",-1582333455),new cljs.core.Keyword(null,"hover-class","hover-class",-778006410),"hover:bg-purple-50 hover:text-purple-600"], null)], null)], null)], null);
});
/**
 * Expandable content panel that slides out from icons
 */
vcorpstate.components.sidebar.sidebar_expanded_panel = (function vcorpstate$components$sidebar$sidebar_expanded_panel(expanded_section){
if((!((expanded_section == null)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"bg-white shadow-lg border-r border-gray-200 transition-all duration-300",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"top","top",-1856271961),"0",new cljs.core.Keyword(null,"left","left",-399115937),"66px",new cljs.core.Keyword(null,"width","width",-384071477),"214px",new cljs.core.Keyword(null,"height","height",1025178622),"100vh",new cljs.core.Keyword(null,"z-index","z-index",1892827090),"90"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
return e.stopPropagation();
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"p-4"], null),(function (){var G__12424 = expanded_section;
var G__12424__$1 = (((G__12424 instanceof cljs.core.Keyword))?G__12424.fqn:null);
switch (G__12424__$1) {
case "agents":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [vcorpstate.components.sidebar.sidebar_content_section,"Agents",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Manolo","Juan","Carlos"], null)], null);

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
})()], null)], null);
} else {
return null;
}
});
/**
 * Complete sidebar component with icons and expandable panel
 */
vcorpstate.components.sidebar.sidebar = (function vcorpstate$components$sidebar$sidebar(){
var expanded_section = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"expanded-sidebar-section","expanded-sidebar-section",-903073682)], null)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [vcorpstate.components.sidebar.sidebar_icons_column], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vcorpstate.components.sidebar.sidebar_expanded_panel,expanded_section], null)], null);
});

//# sourceMappingURL=vcorpstate.components.sidebar.js.map
