goog.provide('vcorpstate.views');
vcorpstate.views.app = (function vcorpstate$views$app(){
var current_view = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-view","current-view",-1037279042)], null)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var G__14538 = current_view;
var G__14538__$1 = (((G__14538 instanceof cljs.core.Keyword))?G__14538.fqn:null);
switch (G__14538__$1) {
case "main":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [vcorpstate.views.project_main.project_main_view], null);

break;
case "project-selector":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [vcorpstate.views.main.project_selector], null);

break;
default:
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [vcorpstate.views.main.project_selector], null);

}
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [vcorpstate.components.dialogs.dialogs], null)], null);
});

//# sourceMappingURL=vcorpstate.views.js.map
