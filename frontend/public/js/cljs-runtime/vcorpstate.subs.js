goog.provide('vcorpstate.subs');
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"projects","projects",-364845983),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return new cljs.core.Keyword(null,"projects","projects",-364845983).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"selected-project-id","selected-project-id",-358296808),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return new cljs.core.Keyword(null,"selected-project-id","selected-project-id",-358296808).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"loading?","loading?",1905707049),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return new cljs.core.Keyword(null,"loading?","loading?",1905707049).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("app","loading?","app/loading?",1905551882),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app","app",-560961707),new cljs.core.Keyword(null,"loading?","loading?",1905707049)], null));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"has-projects?","has-projects?",-190505523),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return (!(cljs.core.empty_QMARK_(new cljs.core.Keyword(null,"projects","projects",-364845983).cljs$core$IFn$_invoke$arity$1(db))));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"selected-project","selected-project",993223033),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
var or__5002__auto__ = new cljs.core.Keyword(null,"selected-project","selected-project",993223033).cljs$core$IFn$_invoke$arity$1(db);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var temp__5804__auto__ = new cljs.core.Keyword(null,"selected-project-id","selected-project-id",-358296808).cljs$core$IFn$_invoke$arity$1(db);
if(cljs.core.truth_(temp__5804__auto__)){
var project_id = temp__5804__auto__;
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__12672_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__12672_SHARP_),project_id);
}),new cljs.core.Keyword(null,"projects","projects",-364845983).cljs$core$IFn$_invoke$arity$1(db)));
} else {
return null;
}
}
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"current-view","current-view",-1037279042),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return new cljs.core.Keyword(null,"current-view","current-view",-1037279042).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"current-route","current-route",2067529448),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return new cljs.core.Keyword(null,"current-route","current-route",2067529448).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"expanded-sidebar-section","expanded-sidebar-section",-903073682),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return new cljs.core.Keyword(null,"expanded-sidebar-section","expanded-sidebar-section",-903073682).cljs$core$IFn$_invoke$arity$1(db);
})], 0));

//# sourceMappingURL=vcorpstate.subs.js.map
