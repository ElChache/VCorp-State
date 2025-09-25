goog.provide('vcorpstate.events.ui');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"toggle-sidebar-section","toggle-sidebar-section",-822593019),(function (db,p__11270){
var vec__11275 = p__11270;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11275,(0),null);
var section = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11275,(1),null);
var current_section = new cljs.core.Keyword(null,"expanded-sidebar-section","expanded-sidebar-section",-903073682).cljs$core$IFn$_invoke$arity$1(db);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"expanded-sidebar-section","expanded-sidebar-section",-903073682),(((section == null))?null:((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_section,section))?null:section)));
}));

//# sourceMappingURL=vcorpstate.events.ui.js.map
