goog.provide('vcorpstate.core');
if((typeof vcorpstate !== 'undefined') && (typeof vcorpstate.core !== 'undefined') && (typeof vcorpstate.core.root !== 'undefined')){
} else {
vcorpstate.core.root = reagent.dom.client.create_root(document.getElementById("app"));
}
vcorpstate.core.mount_root = (function vcorpstate$core$mount_root(){
re_frame.core.clear_subscription_cache_BANG_();

return reagent.dom.client.render.cljs$core$IFn$_invoke$arity$2(vcorpstate.core.root,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [vcorpstate.views.app], null));
});
vcorpstate.core.init_BANG_ = (function vcorpstate$core$init_BANG_(){
re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432)], null));

vcorpstate.routes.init_routes_BANG_();

return vcorpstate.core.mount_root();
});
goog.exportSymbol('vcorpstate.core.init_BANG_', vcorpstate.core.init_BANG_);

//# sourceMappingURL=vcorpstate.core.js.map
