goog.provide('vcorpstate.subs.data');
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("data","collections","data/collections",-2111559119),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"collections","collections",-2114643505)], null));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("data","documents","data/documents",-1587506681),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"documents","documents",-1582333455)], null));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("data","jobs","data/jobs",-308433530),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"jobs","jobs",-313607120)], null));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("data","squads","data/squads",915714507),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"squads","squads",910525345)], null));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("data","roles","data/roles",129899700),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"roles","roles",143379530)], null));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("data","graph-structure","data/graph-structure",611438433),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"graph_structure","graph_structure",-1193184968)], null));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("data","loaded?","data/loaded?",-1132268076),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("data","collections","data/collections",-2111559119)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("data","jobs","data/jobs",-308433530)], null),(function (p__12537,_){
var vec__12538 = p__12537;
var collections = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12538,(0),null);
var jobs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12538,(1),null);
var and__5000__auto__ = cljs.core.not_empty(collections);
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.not_empty(jobs);
} else {
return and__5000__auto__;
}
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("data","stats","data/stats",-88424245),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("data","collections","data/collections",-2111559119)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("data","documents","data/documents",-1587506681)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("data","jobs","data/jobs",-308433530)], null),(function (p__12542,_){
var vec__12543 = p__12542;
var collections = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12543,(0),null);
var documents = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12543,(1),null);
var jobs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12543,(2),null);
var total_collections = cljs.core.count(collections);
var total_documents = cljs.core.count(documents);
var total_jobs = cljs.core.count(jobs);
var completed_jobs = cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__12541_SHARP_){
return new cljs.core.Keyword(null,"completed","completed",-486056503).cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__12541_SHARP_));
}),jobs));
var documents_by_status = cljs.core.group_by(new cljs.core.Keyword(null,"status","status",-1997798413),cljs.core.vals(documents));
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"total-collections","total-collections",-217807009),total_collections,new cljs.core.Keyword(null,"total-documents","total-documents",-1425113107),total_documents,new cljs.core.Keyword(null,"total-jobs","total-jobs",-411816567),total_jobs,new cljs.core.Keyword(null,"completed-jobs","completed-jobs",-953510595),completed_jobs,new cljs.core.Keyword(null,"documents-done","documents-done",998570158),cljs.core.count(cljs.core.get.cljs$core$IFn$_invoke$arity$3(documents_by_status,"done",cljs.core.PersistentVector.EMPTY)),new cljs.core.Keyword(null,"documents-in-progress","documents-in-progress",-701599477),cljs.core.count(cljs.core.get.cljs$core$IFn$_invoke$arity$3(documents_by_status,"in_progress",cljs.core.PersistentVector.EMPTY)),new cljs.core.Keyword(null,"documents-ready","documents-ready",1118851065),cljs.core.count(cljs.core.get.cljs$core$IFn$_invoke$arity$3(documents_by_status,"ready",cljs.core.PersistentVector.EMPTY)),new cljs.core.Keyword(null,"documents-blocked","documents-blocked",489205859),cljs.core.count(cljs.core.get.cljs$core$IFn$_invoke$arity$3(documents_by_status,"blocked",cljs.core.PersistentVector.EMPTY))], null);
})], 0));

//# sourceMappingURL=vcorpstate.subs.data.js.map
