goog.provide('vcorpstate.components.ui.status_pill');
/**
 * A clickable status pill that toggles between ready/not ready states.
 *   
 *   Props:
 *   - document-slug: String - unique identifier for the document
 *   - status: String - current status ('ready' or 'not ready')
 *   - clickable?: Boolean - whether the pill is clickable (default: true)
 *   - on-click: Function - optional custom click handler
 */
vcorpstate.components.ui.status_pill.status_pill = (function vcorpstate$components$ui$status_pill$status_pill(p__12499){
var map__12500 = p__12499;
var map__12500__$1 = cljs.core.__destructure_map(map__12500);
var document_slug = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12500__$1,new cljs.core.Keyword(null,"document-slug","document-slug",793339583));
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12500__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var clickable_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__12500__$1,new cljs.core.Keyword(null,"clickable?","clickable?",1336034384),true);
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12500__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
var is_ready_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(status,"ready");
var pill_classes = ["inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border transition-colors duration-200 ",((is_ready_QMARK_)?"bg-green-100 text-green-800 border-green-200 hover:bg-green-50":"bg-gray-100 text-gray-800 border-gray-200 hover:bg-gray-50"),(cljs.core.truth_(clickable_QMARK_)?" cursor-pointer":null)].join('');
var click_handler = (function (){var or__5002__auto__ = on_click;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
if(cljs.core.truth_(clickable_QMARK_)){
return (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-document-status","toggle-document-status",2129681039),document_slug], null));
});
} else {
return null;
}
}
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),pill_classes,new cljs.core.Keyword(null,"on-click","on-click",1632826543),click_handler], null),((is_ready_QMARK_)?"Ready":"Not Ready")], null);
});

//# sourceMappingURL=vcorpstate.components.ui.status_pill.js.map
