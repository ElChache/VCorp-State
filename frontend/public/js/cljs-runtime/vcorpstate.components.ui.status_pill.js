goog.provide('vcorpstate.components.ui.status_pill');
/**
 * A non-clickable status badge that shows ready/not ready state.
 *   
 *   Props:
 *   - status: String - current status ('ready' or 'not ready')
 */
vcorpstate.components.ui.status_pill.status_badge = (function vcorpstate$components$ui$status_pill$status_badge(p__12673){
var map__12674 = p__12673;
var map__12674__$1 = cljs.core.__destructure_map(map__12674);
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12674__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var is_ready_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(status,"ready");
var badge_classes = ["inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ",((is_ready_QMARK_)?"bg-green-100 text-green-800":"bg-gray-100 text-gray-800")].join('');
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),badge_classes], null),((is_ready_QMARK_)?"Ready":"Not Ready")], null);
});

//# sourceMappingURL=vcorpstate.components.ui.status_pill.js.map
