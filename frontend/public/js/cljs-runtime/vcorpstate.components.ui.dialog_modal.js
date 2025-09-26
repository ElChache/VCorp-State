goog.provide('vcorpstate.components.ui.dialog_modal');
/**
 * Modal overlay that handles backdrop clicks.
 *   
 *   Props:
 *   - on-backdrop-click: Function - handler for backdrop clicks
 *   - children: Vector - child components to render inside modal
 */
vcorpstate.components.ui.dialog_modal.dialog_overlay = (function vcorpstate$components$ui$dialog_modal$dialog_overlay(var_args){
var args__5732__auto__ = [];
var len__5726__auto___12528 = arguments.length;
var i__5727__auto___12529 = (0);
while(true){
if((i__5727__auto___12529 < len__5726__auto___12528)){
args__5732__auto__.push((arguments[i__5727__auto___12529]));

var G__12530 = (i__5727__auto___12529 + (1));
i__5727__auto___12529 = G__12530;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return vcorpstate.components.ui.dialog_modal.dialog_overlay.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(vcorpstate.components.ui.dialog_modal.dialog_overlay.cljs$core$IFn$_invoke$arity$variadic = (function (p__12518,children){
var map__12519 = p__12518;
var map__12519__$1 = cljs.core.__destructure_map(map__12519);
var on_backdrop_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12519__$1,new cljs.core.Keyword(null,"on-backdrop-click","on-backdrop-click",1620313327));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"dialog-overlay",new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_backdrop_click], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"dialog-modal",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
return e.stopPropagation();
})], null)], null),children)], null);
}));

(vcorpstate.components.ui.dialog_modal.dialog_overlay.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(vcorpstate.components.ui.dialog_modal.dialog_overlay.cljs$lang$applyTo = (function (seq12516){
var G__12517 = cljs.core.first(seq12516);
var seq12516__$1 = cljs.core.next(seq12516);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12517,seq12516__$1);
}));

/**
 * Dialog header with title and optional subtitle.
 *   
 *   Props:
 *   - title: String - main title
 *   - subtitle: String - optional subtitle
 */
vcorpstate.components.ui.dialog_modal.dialog_header = (function vcorpstate$components$ui$dialog_modal$dialog_header(p__12520){
var map__12521 = p__12520;
var map__12521__$1 = cljs.core.__destructure_map(map__12521);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12521__$1,new cljs.core.Keyword(null,"title","title",636505583));
var subtitle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12521__$1,new cljs.core.Keyword(null,"subtitle","subtitle",-1614524363));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"mb-6"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-lg font-semibold text-gray-900 mb-2"], null),title], null),(cljs.core.truth_(subtitle)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-sm text-gray-600"], null),subtitle], null):null)], null);
});
/**
 * Dialog action buttons container.
 *   
 *   Props:
 *   - children: Vector - button components
 */
vcorpstate.components.ui.dialog_modal.dialog_actions = (function vcorpstate$components$ui$dialog_modal$dialog_actions(var_args){
var args__5732__auto__ = [];
var len__5726__auto___12532 = arguments.length;
var i__5727__auto___12533 = (0);
while(true){
if((i__5727__auto___12533 < len__5726__auto___12532)){
args__5732__auto__.push((arguments[i__5727__auto___12533]));

var G__12534 = (i__5727__auto___12533 + (1));
i__5727__auto___12533 = G__12534;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return vcorpstate.components.ui.dialog_modal.dialog_actions.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(vcorpstate.components.ui.dialog_modal.dialog_actions.cljs$core$IFn$_invoke$arity$variadic = (function (children){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex justify-end gap-3 mt-6"], null)], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,child){
return child;
}),children));
}));

(vcorpstate.components.ui.dialog_modal.dialog_actions.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(vcorpstate.components.ui.dialog_modal.dialog_actions.cljs$lang$applyTo = (function (seq12522){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12522));
}));

/**
 * Standard dialog button.
 *   
 *   Props:
 *   - variant: Keyword - :primary or :secondary (default)
 *   - on-click: Function - click handler
 *   - disabled?: Boolean - whether button is disabled
 *   - children: String or Vector - button content
 */
vcorpstate.components.ui.dialog_modal.dialog_button = (function vcorpstate$components$ui$dialog_modal$dialog_button(var_args){
var args__5732__auto__ = [];
var len__5726__auto___12535 = arguments.length;
var i__5727__auto___12536 = (0);
while(true){
if((i__5727__auto___12536 < len__5726__auto___12535)){
args__5732__auto__.push((arguments[i__5727__auto___12536]));

var G__12537 = (i__5727__auto___12536 + (1));
i__5727__auto___12536 = G__12537;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return vcorpstate.components.ui.dialog_modal.dialog_button.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(vcorpstate.components.ui.dialog_modal.dialog_button.cljs$core$IFn$_invoke$arity$variadic = (function (p__12525,children){
var map__12526 = p__12525;
var map__12526__$1 = cljs.core.__destructure_map(map__12526);
var variant = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__12526__$1,new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"secondary","secondary",-669381460));
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12526__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12526__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var base_classes = "px-4 py-2 rounded-md font-medium text-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";
var variant_classes = (function (){var G__12527 = variant;
var G__12527__$1 = (((G__12527 instanceof cljs.core.Keyword))?G__12527.fqn:null);
switch (G__12527__$1) {
case "primary":
return "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500";

break;
case "secondary":
return "bg-gray-100 text-gray-700 hover:bg-gray-200 focus:ring-gray-500";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__12527__$1)].join('')));

}
})();
var disabled_classes = (cljs.core.truth_(disabled_QMARK_)?" opacity-50 cursor-not-allowed":null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),[base_classes," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(variant_classes),disabled_classes].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_click,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK_], null),children], null);
}));

(vcorpstate.components.ui.dialog_modal.dialog_button.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(vcorpstate.components.ui.dialog_modal.dialog_button.cljs$lang$applyTo = (function (seq12523){
var G__12524 = cljs.core.first(seq12523);
var seq12523__$1 = cljs.core.next(seq12523);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12524,seq12523__$1);
}));


//# sourceMappingURL=vcorpstate.components.ui.dialog_modal.js.map
