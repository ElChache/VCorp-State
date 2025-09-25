goog.provide('vcorpstate.views');
vcorpstate.views.app = (function vcorpstate$views$app(){
var current_view = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-view","current-view",-1037279042)], null)));
var G__13363 = current_view;
var G__13363__$1 = (((G__13363 instanceof cljs.core.Keyword))?G__13363.fqn:null);
switch (G__13363__$1) {
case "main":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [vcorpstate.views.project_main.project_main_view], null);

break;
case "project-selector":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [vcorpstate.views.main.project_selector], null);

break;
default:
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [vcorpstate.views.main.project_selector], null);

}
});

//# sourceMappingURL=vcorpstate.views.js.map
