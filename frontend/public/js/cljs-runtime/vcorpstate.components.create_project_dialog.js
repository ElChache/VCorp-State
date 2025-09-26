goog.provide('vcorpstate.components.create_project_dialog');
/**
 * Reusable form field component
 */
vcorpstate.components.create_project_dialog.form_field = (function vcorpstate$components$create_project_dialog$form_field(var_args){
var args__5732__auto__ = [];
var len__5726__auto___12590 = arguments.length;
var i__5727__auto___12591 = (0);
while(true){
if((i__5727__auto___12591 < len__5726__auto___12590)){
args__5732__auto__.push((arguments[i__5727__auto___12591]));

var G__12592 = (i__5727__auto___12591 + (1));
i__5727__auto___12591 = G__12592;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((5) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((5)),(0),null)):null);
return vcorpstate.components.create_project_dialog.form_field.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__5733__auto__);
});

(vcorpstate.components.create_project_dialog.form_field.cljs$core$IFn$_invoke$arity$variadic = (function (label,id,value,placeholder,on_change,p__12578){
var vec__12579 = p__12578;
var required_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12579,(0),null);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12579,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"mb-4"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"for","for",-1323786319),id,new cljs.core.Keyword(null,"class","class",-2030961996),"block text-sm font-medium text-gray-700 mb-2"], null),label,(cljs.core.truth_(required_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-red-500"], null)," *"], null):null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"type","type",1174270348),(function (){var or__5002__auto__ = type;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "text";
}
})(),new cljs.core.Keyword(null,"class","class",-2030961996),"w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__5002__auto__ = value;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "";
}
})(),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),placeholder,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__12571_SHARP_){
var G__12582 = p1__12571_SHARP_.target.value;
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__12582) : on_change.call(null,G__12582));
})], null)], null)], null);
}));

(vcorpstate.components.create_project_dialog.form_field.cljs$lang$maxFixedArity = (5));

/** @this {Function} */
(vcorpstate.components.create_project_dialog.form_field.cljs$lang$applyTo = (function (seq12572){
var G__12573 = cljs.core.first(seq12572);
var seq12572__$1 = cljs.core.next(seq12572);
var G__12574 = cljs.core.first(seq12572__$1);
var seq12572__$2 = cljs.core.next(seq12572__$1);
var G__12575 = cljs.core.first(seq12572__$2);
var seq12572__$3 = cljs.core.next(seq12572__$2);
var G__12576 = cljs.core.first(seq12572__$3);
var seq12572__$4 = cljs.core.next(seq12572__$3);
var G__12577 = cljs.core.first(seq12572__$4);
var seq12572__$5 = cljs.core.next(seq12572__$4);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12573,G__12574,G__12575,G__12576,G__12577,seq12572__$5);
}));

/**
 * Component for selecting project template
 */
vcorpstate.components.create_project_dialog.template_selector = (function vcorpstate$components$create_project_dialog$template_selector(selected_template,on_change){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"mb-4"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"block text-sm font-medium text-gray-700 mb-2"], null),"Project Template"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__5002__auto__ = selected_template;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "vcorp_standard";
}
})(),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__12583_SHARP_){
var G__12584 = p1__12583_SHARP_.target.value;
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__12584) : on_change.call(null,G__12584));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"vcorp_standard"], null),"VCorp Standard - Full development pipeline"], null)], null)], null);
});
/**
 * Dialog for creating a new project
 */
vcorpstate.components.create_project_dialog.create_project_dialog = (function vcorpstate$components$create_project_dialog$create_project_dialog(){
var is_open_QMARK_ = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"create-project-dialog-open?","create-project-dialog-open?",169413440)], null)));
var form_data = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"create-project-form","create-project-form",-1293517145)], null)));
var is_creating_QMARK_ = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"creating-project?","creating-project?",1887742256)], null)));
var create_error = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"create-project-error","create-project-error",1853248645)], null)));
if(cljs.core.truth_(is_open_QMARK_)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"z-index","z-index",1892827090),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"left","left",-399115937)],["center","0","rgba(0,0,0,0.5)","100%","9999","center","flex","fixed","100%","0"]),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
if(cljs.core.truth_(is_creating_QMARK_)){
return null;
} else {
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hide-create-project-dialog","hide-create-project-dialog",1114726328)], null));
}
})], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),new cljs.core.Keyword(null,"max-height","max-height",-612563804),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"max-width","max-width",-1939924051),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"overflow-y","overflow-y",-1436589285),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"margin","margin",-995903681)],["0 25px 50px -12px rgba(0, 0, 0, 0.25)","80vh","white","100%","500px","24px","auto","8px","16px"]),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
return e.stopPropagation();
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-xl font-semibold text-gray-900 mb-6"], null),"Create New Project"], null),(cljs.core.truth_(create_error)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-sm"], null),create_error], null)], null):null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),(function (e){
e.preventDefault();

if(cljs.core.truth_(is_creating_QMARK_)){
return null;
} else {
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"create-project","create-project",-2068207849)], null));
}
})], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [vcorpstate.components.create_project_dialog.form_field,"Project Name","project-name",new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(form_data),"My Awesome Project",(function (p1__12585_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-create-project-form","update-create-project-form",1873124692),new cljs.core.Keyword(null,"name","name",1843675177),p1__12585_SHARP_], null));
}),true], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [vcorpstate.components.create_project_dialog.form_field,"Description","project-description",new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(form_data),"Brief description of your project",(function (p1__12586_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-create-project-form","update-create-project-form",1873124692),new cljs.core.Keyword(null,"description","description",-1428560544),p1__12586_SHARP_], null));
})], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [vcorpstate.components.create_project_dialog.form_field,"Project Path","project-path",new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(form_data),"/path/to/project",(function (p1__12587_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-create-project-form","update-create-project-form",1873124692),new cljs.core.Keyword(null,"path","path",-188191168),p1__12587_SHARP_], null));
}),true], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [vcorpstate.components.create_project_dialog.form_field,"GitHub Repository","github-origin",new cljs.core.Keyword(null,"github_origin","github_origin",-202434485).cljs$core$IFn$_invoke$arity$1(form_data),"https://github.com/user/repo",(function (p1__12588_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-create-project-form","update-create-project-form",1873124692),new cljs.core.Keyword(null,"github_origin","github_origin",-202434485),p1__12588_SHARP_], null));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [vcorpstate.components.create_project_dialog.template_selector,new cljs.core.Keyword(null,"template_id","template_id",-1482704733).cljs$core$IFn$_invoke$arity$1(form_data),(function (p1__12589_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-create-project-form","update-create-project-form",1873124692),new cljs.core.Keyword(null,"template_id","template_id",-1482704733),p1__12589_SHARP_], null));
})], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"flex-end",new cljs.core.Keyword(null,"gap","gap",80255254),"12px",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"24px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"disabled","disabled",-1529784218),is_creating_QMARK_,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"font-family","font-family",-667419874)],[(cljs.core.truth_(is_creating_QMARK_)?"#9ca3af":"#374151"),"14px","500",(cljs.core.truth_(is_creating_QMARK_)?"#f9fafb":"#f3f4f6"),(cljs.core.truth_(is_creating_QMARK_)?"not-allowed":"pointer"),"12px 24px","1px solid #d1d5db","8px","system-ui"]),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
if(cljs.core.truth_(is_creating_QMARK_)){
return null;
} else {
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hide-create-project-dialog","hide-create-project-dialog",1114726328)], null));
}
})], null),"Cancel"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(function (){var or__5002__auto__ = is_creating_QMARK_;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return ((cljs.core.empty_QMARK_(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(form_data)))) || (cljs.core.empty_QMARK_(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(form_data)))));
}
})(),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"font-family","font-family",-667419874)],["#ffffff","14px","500",(cljs.core.truth_(is_creating_QMARK_)?"#9ca3af":((((cljs.core.empty_QMARK_(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(form_data)))) || (cljs.core.empty_QMARK_(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(form_data))))))?"#d1d5db":"#3b82f6"
)),(cljs.core.truth_(is_creating_QMARK_)?"not-allowed":((((cljs.core.empty_QMARK_(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(form_data)))) || (cljs.core.empty_QMARK_(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(form_data))))))?"not-allowed":"pointer"
)),"12px 24px",["1px solid ",(cljs.core.truth_(is_creating_QMARK_)?"#9ca3af":((((cljs.core.empty_QMARK_(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(form_data)))) || (cljs.core.empty_QMARK_(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(form_data))))))?"#d1d5db":"#3b82f6"
))].join(''),"8px","system-ui"])], null),(cljs.core.truth_(is_creating_QMARK_)?"Creating...":"Create Project")], null)], null)], null)], null)], null);
} else {
return null;
}
});

//# sourceMappingURL=vcorpstate.components.create_project_dialog.js.map
