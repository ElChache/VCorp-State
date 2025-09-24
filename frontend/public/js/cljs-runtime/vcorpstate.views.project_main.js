goog.provide('vcorpstate.views.project_main');
vcorpstate.views.project_main.back_button = (function vcorpstate$views$project_main$back_button(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"h-16 flex items-center justify-center border-b border-gray-200"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"p-1 hover:bg-gray-100 rounded transition-colors w-16 h-12 flex items-center justify-center",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return vcorpstate.routes.navigate_to_route_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"home","home",-74557309)], null));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-gray-600 font-bold text-center",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"34px"], null)], null),"\u2190"], null)], null)], null);
});
vcorpstate.views.project_main.nav_button = (function vcorpstate$views$project_main$nav_button(emoji,title,color,on_click){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),["mx-1 p-1 hover:bg-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(color),"-50 text-gray-600 hover:text-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(color),"-600 rounded transition-colors mb-1 flex items-center justify-center w-16 h-16"].join(''),new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_click], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-center font-bold",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"34px"], null)], null),emoji], null)], null);
});
vcorpstate.views.project_main.sidebar = (function vcorpstate$views$project_main$sidebar(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"bg-white shadow-lg flex flex-col border-r border-gray-200",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"66px"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [vcorpstate.views.project_main.back_button], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex-1 flex flex-col pt-4"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [vcorpstate.views.project_main.nav_button,"\uD83D\uDC65","Agents","blue",(function (){
return console.log("Agents clicked");
})], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [vcorpstate.views.project_main.nav_button,"\uD83C\uDFAB","Tickets","green",(function (){
return console.log("Tickets clicked");
})], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [vcorpstate.views.project_main.nav_button,"\uD83D\uDCC4","Documents","purple",(function (){
return console.log("Documents clicked");
})], null)], null)], null);
});
vcorpstate.views.project_main.project_title = (function vcorpstate$views$project_main$project_title(project){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex items-center gap-3 mb-2"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"p-2 hover:bg-gray-100 rounded transition-colors mr-2",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return console.log("Config clicked");
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-4 h-4 text-gray-600 font-bold text-center"], null),"\u2699"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-lg font-semibold text-gray-900"], null),(cljs.core.truth_(project)?new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(project):"Project View")], null)], null);
});
vcorpstate.views.project_main.project_detail_item = (function vcorpstate$views$project_main$project_detail_item(var_args){
var args__5732__auto__ = [];
var len__5726__auto___12844 = arguments.length;
var i__5727__auto___12845 = (0);
while(true){
if((i__5727__auto___12845 < len__5726__auto___12844)){
args__5732__auto__.push((arguments[i__5727__auto___12845]));

var G__12846 = (i__5727__auto___12845 + (1));
i__5727__auto___12845 = G__12846;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return vcorpstate.views.project_main.project_detail_item.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(vcorpstate.views.project_main.project_detail_item.cljs$core$IFn$_invoke$arity$variadic = (function (label,value,p__12840){
var vec__12841 = p__12840;
var class$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12841,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"font-medium text-gray-700"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(label),": "].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(function (){var or__5002__auto__ = class$;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "text-gray-600";
}
})()], null),value], null)], null);
}));

(vcorpstate.views.project_main.project_detail_item.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(vcorpstate.views.project_main.project_detail_item.cljs$lang$applyTo = (function (seq12837){
var G__12838 = cljs.core.first(seq12837);
var seq12837__$1 = cljs.core.next(seq12837);
var G__12839 = cljs.core.first(seq12837__$1);
var seq12837__$2 = cljs.core.next(seq12837__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12838,G__12839,seq12837__$2);
}));

vcorpstate.views.project_main.github_link = (function vcorpstate$views$project_main$github_link(url){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"md:col-span-2"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"font-medium text-gray-700"], null),"GitHub: "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),url,new cljs.core.Keyword(null,"target","target",253001721),"_blank",new cljs.core.Keyword(null,"class","class",-2030961996),"text-blue-600 hover:text-blue-800 underline"], null),url], null)], null);
});
vcorpstate.views.project_main.project_details = (function vcorpstate$views$project_main$project_details(project){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"font-medium text-gray-800 mb-3"], null),"Project Details"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"grid grid-cols-1 md:grid-cols-2 gap-4 text-sm"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [vcorpstate.views.project_main.project_detail_item,"ID",new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(project)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [vcorpstate.views.project_main.project_detail_item,"Path",new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(project),"text-gray-600 font-mono text-xs"], null),(cljs.core.truth_(new cljs.core.Keyword(null,"github_origin","github_origin",-202434485).cljs$core$IFn$_invoke$arity$1(project))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vcorpstate.views.project_main.github_link,new cljs.core.Keyword(null,"github_origin","github_origin",-202434485).cljs$core$IFn$_invoke$arity$1(project)], null):null)], null)], null);
});
vcorpstate.views.project_main.workspace_content = (function vcorpstate$views$project_main$workspace_content(project){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"h-full p-4"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vcorpstate.views.project_main.project_title,project], null)], null);
});
vcorpstate.views.project_main.main_content = (function vcorpstate$views$project_main$main_content(project){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex-1 flex flex-col min-h-0"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex-1 overflow-auto"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"h-full"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vcorpstate.views.project_main.workspace_content,project], null)], null)], null)], null);
});
vcorpstate.views.project_main.project_main_view = (function vcorpstate$views$project_main$project_main_view(){
var selected_project = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-project","selected-project",993223033)], null)));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex h-screen bg-gray-50"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [vcorpstate.views.project_main.sidebar], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vcorpstate.views.project_main.main_content,selected_project], null)], null);
});

//# sourceMappingURL=vcorpstate.views.project_main.js.map
