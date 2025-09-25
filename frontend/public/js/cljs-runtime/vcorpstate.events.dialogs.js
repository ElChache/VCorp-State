goog.provide('vcorpstate.events.dialogs');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"show-launch-agents-dialog","show-launch-agents-dialog",346664923),(function (db,_){
console.log("Opening launch agents dialog");

return cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dialogs","dialogs",-2046256986),new cljs.core.Keyword(null,"launch-agents-open?","launch-agents-open?",-17602465)], null),true),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dialogs","dialogs",-2046256986),new cljs.core.Keyword(null,"role-counts","role-counts",-1518952394)], null),cljs.core.PersistentArrayMap.EMPTY);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"hide-launch-agents-dialog","hide-launch-agents-dialog",-856372398),(function (db,_){
return cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dialogs","dialogs",-2046256986),new cljs.core.Keyword(null,"launch-agents-open?","launch-agents-open?",-17602465)], null),false),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dialogs","dialogs",-2046256986),new cljs.core.Keyword(null,"role-counts","role-counts",-1518952394)], null),cljs.core.PersistentArrayMap.EMPTY);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"update-role-count","update-role-count",938333547),(function (db,p__22242){
var vec__22243 = p__22242;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22243,(0),null);
var role_short_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22243,(1),null);
var new_count = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22243,(2),null);
var count = (function (){var x__5087__auto__ = (0);
var y__5088__auto__ = new_count;
return ((x__5087__auto__ > y__5088__auto__) ? x__5087__auto__ : y__5088__auto__);
})();
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dialogs","dialogs",-2046256986),new cljs.core.Keyword(null,"role-counts","role-counts",-1518952394),role_short_name], null),count);
}));

//# sourceMappingURL=vcorpstate.events.dialogs.js.map
