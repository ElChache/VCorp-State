goog.provide('vcorpstate.graph');
/**
 * Squad column layout - 7 independent vertical columns
 */
vcorpstate.graph.squad_columns = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"slug","slug",2029314850),"human",new cljs.core.Keyword(null,"name","name",1843675177),"Human Director",new cljs.core.Keyword(null,"x","x",2099068185),(100)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"slug","slug",2029314850),"pd",new cljs.core.Keyword(null,"name","name",1843675177),"Product Designer",new cljs.core.Keyword(null,"x","x",2099068185),(250)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"slug","slug",2029314850),"arch",new cljs.core.Keyword(null,"name","name",1843675177),"Architect",new cljs.core.Keyword(null,"x","x",2099068185),(400)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"slug","slug",2029314850),"fe",new cljs.core.Keyword(null,"name","name",1843675177),"FE Squad",new cljs.core.Keyword(null,"x","x",2099068185),(550)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"slug","slug",2029314850),"be",new cljs.core.Keyword(null,"name","name",1843675177),"BE Squad",new cljs.core.Keyword(null,"x","x",2099068185),(700)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"slug","slug",2029314850),"ai",new cljs.core.Keyword(null,"name","name",1843675177),"AI Squad",new cljs.core.Keyword(null,"x","x",2099068185),(850)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"slug","slug",2029314850),"qa",new cljs.core.Keyword(null,"name","name",1843675177),"QA Squad",new cljs.core.Keyword(null,"x","x",2099068185),(1000)], null)], null);
vcorpstate.graph.node_colors = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"collection-input","collection-input",-1610840657),"#3B82F6",new cljs.core.Keyword(null,"collection-output","collection-output",1229344754),"#10B981",new cljs.core.Keyword(null,"job","job",850873087),"#F59E0B",new cljs.core.Keyword(null,"job-completed","job-completed",629265890),"#059669",new cljs.core.Keyword(null,"job-paused","job-paused",71056393),"#6B7280"], null);
/**
 * Create maps for easy navigation: collection → producer job, collection → consumer jobs
 */
vcorpstate.graph.create_collection_lookup_maps = (function vcorpstate$graph$create_collection_lookup_maps(squad_jobs){
var collection_to_producer = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5480__auto__ = (function vcorpstate$graph$create_collection_lookup_maps_$_iter__14913(s__14914){
return (new cljs.core.LazySeq(null,(function (){
var s__14914__$1 = s__14914;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__14914__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var job = cljs.core.first(xs__6360__auto__);
var iterys__5476__auto__ = ((function (s__14914__$1,job,xs__6360__auto__,temp__5804__auto__){
return (function vcorpstate$graph$create_collection_lookup_maps_$_iter__14913_$_iter__14915(s__14916){
return (new cljs.core.LazySeq(null,((function (s__14914__$1,job,xs__6360__auto__,temp__5804__auto__){
return (function (){
var s__14916__$1 = s__14916;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__14916__$1);
if(temp__5804__auto____$1){
var s__14916__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__14916__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__14916__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__14918 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__14917 = (0);
while(true){
if((i__14917 < size__5479__auto__)){
var output_slug = cljs.core._nth(c__5478__auto__,i__14917);
cljs.core.chunk_append(b__14918,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [output_slug,job], null));

var G__14936 = (i__14917 + (1));
i__14917 = G__14936;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14918),vcorpstate$graph$create_collection_lookup_maps_$_iter__14913_$_iter__14915(cljs.core.chunk_rest(s__14916__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14918),null);
}
} else {
var output_slug = cljs.core.first(s__14916__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [output_slug,job], null),vcorpstate$graph$create_collection_lookup_maps_$_iter__14913_$_iter__14915(cljs.core.rest(s__14916__$2)));
}
} else {
return null;
}
break;
}
});})(s__14914__$1,job,xs__6360__auto__,temp__5804__auto__))
,null,null));
});})(s__14914__$1,job,xs__6360__auto__,temp__5804__auto__))
;
var fs__5477__auto__ = cljs.core.seq(iterys__5476__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"slug","slug",2029314850),new cljs.core.Keyword(null,"outputs","outputs",-1896513034).cljs$core$IFn$_invoke$arity$1(job))));
if(fs__5477__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5477__auto__,vcorpstate$graph$create_collection_lookup_maps_$_iter__14913(cljs.core.rest(s__14914__$1)));
} else {
var G__14937 = cljs.core.rest(s__14914__$1);
s__14914__$1 = G__14937;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(squad_jobs);
})());
var collection_to_consumers = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,job){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc2,input_slug){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(acc2,input_slug,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),job);
}),acc,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"slug","slug",2029314850),new cljs.core.Keyword(null,"inputs","inputs",865803858).cljs$core$IFn$_invoke$arity$1(job)));
}),cljs.core.PersistentArrayMap.EMPTY,squad_jobs);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"collection-to-producer","collection-to-producer",-1242196071),collection_to_producer,new cljs.core.Keyword(null,"collection-to-consumers","collection-to-consumers",-816001294),collection_to_consumers], null);
});
/**
 * Find the beginning jobs using the simple rule
 */
vcorpstate.graph.find_first_jobs_in_column = (function vcorpstate$graph$find_first_jobs_in_column(squad_jobs,all_jobs_by_squad,is_first_column_QMARK_){
var all_outputs_by_any_job = cljs.core.set(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (jobs){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__14919_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"slug","slug",2029314850),new cljs.core.Keyword(null,"outputs","outputs",-1896513034).cljs$core$IFn$_invoke$arity$1(p1__14919_SHARP_));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([jobs], 0));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.vals(all_jobs_by_squad)], 0)));
if(cljs.core.truth_(is_first_column_QMARK_)){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (job){
var input_slugs = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"slug","slug",2029314850),new cljs.core.Keyword(null,"inputs","inputs",865803858).cljs$core$IFn$_invoke$arity$1(job));
return cljs.core.not_any_QMARK_(all_outputs_by_any_job,input_slugs);
}),squad_jobs);
} else {
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (job){
var input_slugs = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"slug","slug",2029314850),new cljs.core.Keyword(null,"inputs","inputs",865803858).cljs$core$IFn$_invoke$arity$1(job)));
return cljs.core.some(all_outputs_by_any_job,input_slugs);
}),squad_jobs);
}
});
/**
 * Build tree by following job → outputs → consuming jobs chain
 */
vcorpstate.graph.build_simple_tree_chain = (function vcorpstate$graph$build_simple_tree_chain(first_jobs,lookup_maps){
var map__14923 = lookup_maps;
var map__14923__$1 = cljs.core.__destructure_map(map__14923);
var collection_to_consumers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14923__$1,new cljs.core.Keyword(null,"collection-to-consumers","collection-to-consumers",-816001294));
var build_chain = (function vcorpstate$graph$build_simple_tree_chain_$_build_chain_fn(job,visited){
if(cljs.core.contains_QMARK_(visited,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(job))){
return cljs.core.PersistentVector.EMPTY;
} else {
var visited_SINGLEQUOTE_ = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(visited,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(job));
var outputs = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"slug","slug",2029314850),new cljs.core.Keyword(null,"outputs","outputs",-1896513034).cljs$core$IFn$_invoke$arity$1(job));
var next_jobs = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__14920_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(collection_to_consumers,p1__14920_SHARP_,cljs.core.PersistentVector.EMPTY);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([outputs], 0));
return cljs.core.cons(job,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__14921_SHARP_){
return vcorpstate$graph$build_simple_tree_chain_$_build_chain_fn(p1__14921_SHARP_,visited_SINGLEQUOTE_);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([next_jobs], 0)));
}
});
return cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__14922_SHARP_){
return build_chain(p1__14922_SHARP_,cljs.core.PersistentHashSet.EMPTY);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([first_jobs], 0)));
});
/**
 * Position jobs and collections in proper workflow order: input → job → output
 */
vcorpstate.graph.position_workflow_chain = (function vcorpstate$graph$position_workflow_chain(job_chain,column_x){
var y_start = (50);
var y_step = (80);
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (idx,job){
var base_y = (y_start + ((idx * y_step) * (3)));
var input_collections = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"slug","slug",2029314850),new cljs.core.Keyword(null,"inputs","inputs",865803858).cljs$core$IFn$_invoke$arity$1(job));
var output_collections = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"slug","slug",2029314850),new cljs.core.Keyword(null,"outputs","outputs",-1896513034).cljs$core$IFn$_invoke$arity$1(job));
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i_idx,input_slug){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"collection","collection",-683361892),new cljs.core.Keyword(null,"id","id",-1388402092),["collection-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(input_slug)].join(''),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),column_x,new cljs.core.Keyword(null,"y","y",-1757859776),(base_y + (i_idx * (25)))], null),new cljs.core.Keyword(null,"slug","slug",2029314850),input_slug], null);
}),input_collections),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"job","job",850873087),new cljs.core.Keyword(null,"job","job",850873087),job,new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),column_x,new cljs.core.Keyword(null,"y","y",-1757859776),(base_y + y_step)], null)], null)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (o_idx,output_slug){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"collection","collection",-683361892),new cljs.core.Keyword(null,"id","id",-1388402092),["collection-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_slug)].join(''),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),column_x,new cljs.core.Keyword(null,"y","y",-1757859776),((base_y + ((2) * y_step)) + (o_idx * (25)))], null),new cljs.core.Keyword(null,"slug","slug",2029314850),output_slug], null);
}),output_collections)], 0));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(job_chain)),job_chain], 0));
});
/**
 * Get X position for a squad column
 */
vcorpstate.graph.get_squad_x_position = (function vcorpstate$graph$get_squad_x_position(squad_slug){
var or__5002__auto__ = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__14924_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"slug","slug",2029314850).cljs$core$IFn$_invoke$arity$1(p1__14924_SHARP_),squad_slug);
}),vcorpstate.graph.squad_columns)));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (600);
}
});
/**
 * Calculate collection status based on documents
 */
vcorpstate.graph.collection_status = (function vcorpstate$graph$collection_status(collection,documents){
var collection_docs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__14925_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"document_collection_id","document_collection_id",-1215530967).cljs$core$IFn$_invoke$arity$1(p1__14925_SHARP_),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(collection));
}),cljs.core.vals(documents));
var total = cljs.core.count(collection_docs);
var completed = cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__14926_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(p1__14926_SHARP_),"done");
}),collection_docs));
if((total === (0))){
return new cljs.core.Keyword(null,"empty","empty",767870958);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(completed,total)){
return new cljs.core.Keyword(null,"completed","completed",-486056503);
} else {
return new cljs.core.Keyword(null,"in-progress","in-progress",2126442630);
}
}
});
/**
 * Get visual status for job (affects color)
 */
vcorpstate.graph.job_visual_status = (function vcorpstate$graph$job_visual_status(job){
if(cljs.core.truth_(new cljs.core.Keyword(null,"completed","completed",-486056503).cljs$core$IFn$_invoke$arity$1(job))){
return new cljs.core.Keyword(null,"completed","completed",-486056503);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"paused","paused",-1710376127).cljs$core$IFn$_invoke$arity$1(job))){
return new cljs.core.Keyword(null,"paused","paused",-1710376127);
} else {
return new cljs.core.Keyword(null,"running","running",1554969103);

}
}
});
/**
 * Create a React Flow node for a document collection
 */
vcorpstate.graph.build_collection_node = (function vcorpstate$graph$build_collection_node(collection,documents,squads,y_offset){
var status = vcorpstate.graph.collection_status(collection,documents);
var color = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(status,new cljs.core.Keyword(null,"completed","completed",-486056503)))?new cljs.core.Keyword(null,"collection-output","collection-output",1229344754).cljs$core$IFn$_invoke$arity$1(vcorpstate.graph.node_colors):new cljs.core.Keyword(null,"collection-input","collection-input",-1610840657).cljs$core$IFn$_invoke$arity$1(vcorpstate.graph.node_colors));
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),["collection-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(collection))].join(''),new cljs.core.Keyword(null,"type","type",1174270348),"default",new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(50),new cljs.core.Keyword(null,"y","y",-1757859776),y_offset], null),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(collection),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(collection),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"collection","collection",-683361892),new cljs.core.Keyword(null,"collection-id","collection-id",963323110),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(collection),new cljs.core.Keyword(null,"slug","slug",2029314850),new cljs.core.Keyword(null,"slug","slug",2029314850).cljs$core$IFn$_invoke$arity$1(collection),new cljs.core.Keyword(null,"status","status",-1997798413),status], null),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),color,new cljs.core.Keyword(null,"color","color",1011675173),"white",new cljs.core.Keyword(null,"border","border",1444987323),"none",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"6px",new cljs.core.Keyword(null,"padding","padding",1660304693),"8px 12px",new cljs.core.Keyword(null,"fontSize","fontSize",919623033),"12px",new cljs.core.Keyword(null,"fontWeight","fontWeight",166450581),"500"], null)], null);
});
/**
 * Create a React Flow node for a job - new simplified version
 */
vcorpstate.graph.build_job_node = (function vcorpstate$graph$build_job_node(job,roles,squads,position){
var role = cljs.core.get.cljs$core$IFn$_invoke$arity$2(roles,new cljs.core.Keyword(null,"role","role",-736691072).cljs$core$IFn$_invoke$arity$1(job));
var squad_slug = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"squad_slug","squad_slug",259729812).cljs$core$IFn$_invoke$arity$1(role);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "arch";
}
})();
var visual_status = vcorpstate.graph.job_visual_status(job);
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$3(vcorpstate.graph.node_colors,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(["job-",cljs.core.name(visual_status)].join('')),new cljs.core.Keyword(null,"job","job",850873087).cljs$core$IFn$_invoke$arity$1(vcorpstate.graph.node_colors));
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),["job-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(job))].join(''),new cljs.core.Keyword(null,"type","type",1174270348),"default",new cljs.core.Keyword(null,"position","position",-2011731912),position,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(job),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(job),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"job","job",850873087),new cljs.core.Keyword(null,"job-id","job-id",651349542),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(job),new cljs.core.Keyword(null,"role","role",-736691072),new cljs.core.Keyword(null,"role","role",-736691072).cljs$core$IFn$_invoke$arity$1(job),new cljs.core.Keyword(null,"slug","slug",2029314850),new cljs.core.Keyword(null,"slug","slug",2029314850).cljs$core$IFn$_invoke$arity$1(job),new cljs.core.Keyword(null,"squad","squad",1623679812),squad_slug,new cljs.core.Keyword(null,"status","status",-1997798413),visual_status], null),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),color,new cljs.core.Keyword(null,"color","color",1011675173),"white",new cljs.core.Keyword(null,"border","border",1444987323),"none",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"6px",new cljs.core.Keyword(null,"padding","padding",1660304693),"8px 12px",new cljs.core.Keyword(null,"fontSize","fontSize",919623033),"12px",new cljs.core.Keyword(null,"fontWeight","fontWeight",166450581),"500"], null)], null);
});
/**
 * Build column using the simple chain algorithm
 */
vcorpstate.graph.build_simple_column = (function vcorpstate$graph$build_simple_column(squad_slug,squad_jobs,all_jobs_by_squad,column_x,is_first_column_QMARK_){
if(cljs.core.truth_(cljs.core.not_empty(squad_jobs))){
var first_jobs = vcorpstate.graph.find_first_jobs_in_column(squad_jobs,all_jobs_by_squad,is_first_column_QMARK_);
var lookup_maps = vcorpstate.graph.create_collection_lookup_maps(squad_jobs);
var job_chain = vcorpstate.graph.build_simple_tree_chain(first_jobs,lookup_maps);
var workflow_nodes = vcorpstate.graph.position_workflow_chain(job_chain,column_x);
var job_nodes = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__14927_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__14927_SHARP_),new cljs.core.Keyword(null,"job","job",850873087));
}),workflow_nodes);
var collection_nodes = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__14928_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__14928_SHARP_),new cljs.core.Keyword(null,"collection","collection",-683361892));
}),workflow_nodes);
var result = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"job-nodes","job-nodes",1228181907),job_nodes,new cljs.core.Keyword(null,"collection-nodes","collection-nodes",-1502348632),collection_nodes,new cljs.core.Keyword(null,"job-chain","job-chain",-1983558396),job_chain,new cljs.core.Keyword(null,"output-slugs","output-slugs",873584600),cljs.core.set(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__14929_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"slug","slug",2029314850),new cljs.core.Keyword(null,"outputs","outputs",-1896513034).cljs$core$IFn$_invoke$arity$1(p1__14929_SHARP_));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([job_chain], 0)))], null);
return result;
} else {
return null;
}
});
/**
 * Build React Flow graph using simple column algorithm
 */
vcorpstate.graph.build_graph_data = (function vcorpstate$graph$build_graph_data(collections,documents,jobs,squads,roles){
if(cljs.core.truth_((function (){var and__5000__auto__ = collections;
if(cljs.core.truth_(and__5000__auto__)){
return jobs;
} else {
return and__5000__auto__;
}
})())){
console.log("=== BUILD GRAPH DEBUG ===");

console.log("Total jobs:",cljs.core.count(cljs.core.vals(jobs)));

console.log("Total collections:",cljs.core.count(cljs.core.vals(collections)));

var jobs_by_squad = cljs.core.group_by((function (job){
var role_key = new cljs.core.Keyword(null,"role","role",-736691072).cljs$core$IFn$_invoke$arity$1(job);
var role = cljs.core.get.cljs$core$IFn$_invoke$arity$2(roles,role_key);
var or__5002__auto__ = new cljs.core.Keyword(null,"squad_slug","squad_slug",259729812).cljs$core$IFn$_invoke$arity$1(role);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "unknown";
}
}),cljs.core.vals(jobs));
var _ = console.log("Jobs grouped by squad:",cljs.core.clj__GT_js(jobs_by_squad));
var column_results = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__14930){
var map__14931 = p__14930;
var map__14931__$1 = cljs.core.__destructure_map(map__14931);
var slug = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14931__$1,new cljs.core.Keyword(null,"slug","slug",2029314850));
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14931__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var is_first_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(slug,"human");
var squad_jobs = cljs.core.get.cljs$core$IFn$_invoke$arity$3(jobs_by_squad,slug,cljs.core.PersistentVector.EMPTY);
console.log("Building column",slug,"with",cljs.core.count(squad_jobs),"jobs at x=",x);

return vcorpstate.graph.build_simple_column(slug,squad_jobs,jobs_by_squad,x,is_first_QMARK_);
}),vcorpstate.graph.squad_columns);
var ___$1 = console.log("Column results:",cljs.core.clj__GT_js(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,column_results)));
var all_job_nodes = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"job-nodes","job-nodes",1228181907),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,column_results)], 0));
var all_collection_nodes = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"collection-nodes","collection-nodes",-1502348632),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,column_results)], 0));
var react_flow_jobs = cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,p__14932){
var map__14933 = p__14932;
var map__14933__$1 = cljs.core.__destructure_map(map__14933);
var job = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14933__$1,new cljs.core.Keyword(null,"job","job",850873087));
var position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14933__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
console.log("Job",new cljs.core.Keyword(null,"slug","slug",2029314850).cljs$core$IFn$_invoke$arity$1(job),"at position",position);

return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),["job-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(job))].join(''),new cljs.core.Keyword(null,"type","type",1174270348),"default",new cljs.core.Keyword(null,"position","position",-2011731912),cljs.core.clj__GT_js(position),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(job),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"job","job",850873087)], null),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"#f59e0b",new cljs.core.Keyword(null,"color","color",1011675173),"white",new cljs.core.Keyword(null,"border","border",1444987323),"none",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"6px",new cljs.core.Keyword(null,"padding","padding",1660304693),"8px 12px",new cljs.core.Keyword(null,"fontSize","fontSize",919623033),"12px"], null)], null);
}),all_job_nodes);
var react_flow_collections = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__14934){
var map__14935 = p__14934;
var map__14935__$1 = cljs.core.__destructure_map(map__14935);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14935__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14935__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var slug = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14935__$1,new cljs.core.Keyword(null,"slug","slug",2029314850));
console.log("Collection",slug,"at position",position);

return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"position","position",-2011731912),cljs.core.clj__GT_js(position),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),slug], null),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fontSize","fontSize",919623033),"11px",new cljs.core.Keyword(null,"color","color",1011675173),"#666"], null)], null);
}),all_collection_nodes);
var all_nodes = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(react_flow_jobs,react_flow_collections);
var all_edges = cljs.core.PersistentVector.EMPTY;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nodes","nodes",-2099585805),all_nodes,new cljs.core.Keyword(null,"edges","edges",-694791395),all_edges], null);
} else {
return null;
}
});

//# sourceMappingURL=vcorpstate.graph.js.map
