goog.provide('vcorpstate.routes');
vcorpstate.routes.parse_url = (function vcorpstate$routes$parse_url(var_args){
var G__12456 = arguments.length;
switch (G__12456) {
case 0:
return vcorpstate.routes.parse_url.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return vcorpstate.routes.parse_url.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(vcorpstate.routes.parse_url.cljs$core$IFn$_invoke$arity$0 = (function (){
return vcorpstate.routes.parse_url.cljs$core$IFn$_invoke$arity$1(window.location.hash);
}));

(vcorpstate.routes.parse_url.cljs$core$IFn$_invoke$arity$1 = (function (url){

var path = (function (){var or__5002__auto__ = url;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return window.location.hash;
}
})();
var path__$1 = ((clojure.string.starts_with_QMARK_(path,"#"))?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(path,(1)):path);
if(((cljs.core.empty_QMARK_(path__$1)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(path__$1,"/")))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"home","home",-74557309)], null);
} else {
if(clojure.string.starts_with_QMARK_(path__$1,"/project/")){
var id_str = cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(path__$1,/\//));
var temp__5802__auto__ = cljs.core.parse_long(id_str);
if(cljs.core.truth_(temp__5802__auto__)){
var id = temp__5802__auto__;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"project","project",1124394579),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),id], null)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"home","home",-74557309)], null);
}
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"home","home",-74557309)], null);

}
}
}));

(vcorpstate.routes.parse_url.cljs$lang$maxFixedArity = 1);

vcorpstate.routes.handle_route_change = (function vcorpstate$routes$handle_route_change(){

var route = vcorpstate.routes.parse_url.cljs$core$IFn$_invoke$arity$0();
var G__12457 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(route);
var G__12457__$1 = (((G__12457 instanceof cljs.core.Keyword))?G__12457.fqn:null);
switch (G__12457__$1) {
case "home":
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"navigate-to-home","navigate-to-home",519585018)], null));

break;
case "project":
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"navigate-to-project-by-id","navigate-to-project-by-id",414954927),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(route,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"id","id",-1388402092)], null))], null));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__12457__$1)].join('')));

}
});
vcorpstate.routes.navigate_to_route_BANG_ = (function vcorpstate$routes$navigate_to_route_BANG_(route){

var hash = (function (){var G__12458 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(route);
var G__12458__$1 = (((G__12458 instanceof cljs.core.Keyword))?G__12458.fqn:null);
switch (G__12458__$1) {
case "home":
return "#/";

break;
case "project":
return ["#/project/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(route,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"id","id",-1388402092)], null)))].join('');

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__12458__$1)].join('')));

}
})();
(window.location.hash = hash);

return vcorpstate.routes.handle_route_change();
});
vcorpstate.routes.init_routes_BANG_ = (function vcorpstate$routes$init_routes_BANG_(){

vcorpstate.routes.handle_route_change();

window.addEventListener("popstate",vcorpstate.routes.handle_route_change);

return window.addEventListener("hashchange",vcorpstate.routes.handle_route_change);
});

//# sourceMappingURL=vcorpstate.routes.js.map
