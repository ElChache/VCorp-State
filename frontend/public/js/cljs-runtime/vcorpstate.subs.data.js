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
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("data","jobs-by-slug","data/jobs-by-slug",413201112),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"jobs-by-slug","jobs-by-slug",408019610)], null));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("data","collections-by-slug","data/collections-by-slug",806335528),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("data","collections","data/collections",-2111559119)], null),(function (collections,_){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,collection){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,new cljs.core.Keyword(null,"slug","slug",2029314850).cljs$core$IFn$_invoke$arity$1(collection),collection);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.vals(collections));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("data","collections-with-stats","data/collections-with-stats",-2075916159),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("data","collections-by-slug","data/collections-by-slug",806335528)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("data","documents","data/documents",-1587506681)], null),(function (p__12655,_){
var vec__12656 = p__12655;
var collections_by_slug = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12656,(0),null);
var documents = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12656,(1),null);
var documents_by_collection_id = cljs.core.group_by(new cljs.core.Keyword(null,"document_collection_id","document_collection_id",-1215530967),cljs.core.vals(documents));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__12659){
var vec__12660 = p__12659;
var slug = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12660,(0),null);
var collection = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12660,(1),null);
var collection_docs = cljs.core.get.cljs$core$IFn$_invoke$arity$3(documents_by_collection_id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(collection),cljs.core.PersistentVector.EMPTY);
var total_docs = cljs.core.count(collection_docs);
var ready_docs = cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__12654_SHARP_){
return new cljs.core.Keyword(null,"ready","ready",1086465795).cljs$core$IFn$_invoke$arity$1(p1__12654_SHARP_);
}),collection_docs));
var all_ready_QMARK_ = (((total_docs > (0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ready_docs,total_docs)));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,slug,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(collection,new cljs.core.Keyword(null,"documents","documents",-1582333455),collection_docs,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"total-documents","total-documents",-1425113107),total_docs,new cljs.core.Keyword(null,"ready-documents","ready-documents",-1639585393),ready_docs,new cljs.core.Keyword(null,"all-documents-ready?","all-documents-ready?",-1169302192),all_ready_QMARK_], 0)));
}),cljs.core.PersistentArrayMap.EMPTY,collections_by_slug);
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
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("data","loaded?","data/loaded?",-1132268076),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("data","collections","data/collections",-2111559119)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("data","jobs","data/jobs",-308433530)], null),(function (p__12663,_){
var vec__12664 = p__12663;
var collections = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12664,(0),null);
var jobs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12664,(1),null);
var and__5000__auto__ = cljs.core.not_empty(collections);
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.not_empty(jobs);
} else {
return and__5000__auto__;
}
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("data","stats","data/stats",-88424245),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("data","collections","data/collections",-2111559119)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("data","documents","data/documents",-1587506681)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("data","jobs","data/jobs",-308433530)], null),(function (p__12668,_){
var vec__12669 = p__12668;
var collections = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12669,(0),null);
var documents = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12669,(1),null);
var jobs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12669,(2),null);
var total_collections = cljs.core.count(collections);
var total_documents = cljs.core.count(documents);
var total_jobs = cljs.core.count(jobs);
var completed_jobs = cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__12667_SHARP_){
return new cljs.core.Keyword(null,"completed","completed",-486056503).cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__12667_SHARP_));
}),jobs));
var documents_by_status = cljs.core.group_by(new cljs.core.Keyword(null,"status","status",-1997798413),cljs.core.vals(documents));
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"total-collections","total-collections",-217807009),total_collections,new cljs.core.Keyword(null,"total-documents","total-documents",-1425113107),total_documents,new cljs.core.Keyword(null,"total-jobs","total-jobs",-411816567),total_jobs,new cljs.core.Keyword(null,"completed-jobs","completed-jobs",-953510595),completed_jobs,new cljs.core.Keyword(null,"documents-done","documents-done",998570158),cljs.core.count(cljs.core.get.cljs$core$IFn$_invoke$arity$3(documents_by_status,"done",cljs.core.PersistentVector.EMPTY)),new cljs.core.Keyword(null,"documents-in-progress","documents-in-progress",-701599477),cljs.core.count(cljs.core.get.cljs$core$IFn$_invoke$arity$3(documents_by_status,"in_progress",cljs.core.PersistentVector.EMPTY)),new cljs.core.Keyword(null,"documents-ready","documents-ready",1118851065),cljs.core.count(cljs.core.get.cljs$core$IFn$_invoke$arity$3(documents_by_status,"ready",cljs.core.PersistentVector.EMPTY)),new cljs.core.Keyword(null,"documents-blocked","documents-blocked",489205859),cljs.core.count(cljs.core.get.cljs$core$IFn$_invoke$arity$3(documents_by_status,"blocked",cljs.core.PersistentVector.EMPTY))], null);
})], 0));

//# sourceMappingURL=vcorpstate.subs.data.js.map
