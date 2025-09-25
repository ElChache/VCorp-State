goog.provide('vcorpstate.events.data');
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("data","load-project","data/load-project",1705783942),(function (p__13689,p__13690){
var map__13691 = p__13689;
var map__13691__$1 = cljs.core.__destructure_map(map__13691);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13691__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__13692 = p__13690;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13692,(0),null);
var project_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13692,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app","app",-560961707),new cljs.core.Keyword(null,"loading?","loading?",1905707049)], null),true),new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ms","ms",-1152709733),(100),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("data","fetch-project","data/fetch-project",-1646330123),project_id], null)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("data","fetch-project","data/fetch-project",-1646330123),(function (_,p__13695){
var vec__13696 = p__13695;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13696,(0),null);
var project_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13696,(1),null);
vcorpstate.http.load_project_initial_data(project_id);

return cljs.core.PersistentArrayMap.EMPTY;
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("data","project-loaded","data/project-loaded",864796844),(function (p__13699,p__13700){
var map__13701 = p__13699;
var map__13701__$1 = cljs.core.__destructure_map(map__13701);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13701__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__13702 = p__13700;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13702,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13702,(1),null);
var map__13705 = data;
var map__13705__$1 = cljs.core.__destructure_map(map__13705);
var collections = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13705__$1,new cljs.core.Keyword(null,"collections","collections",-2114643505));
var documents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13705__$1,new cljs.core.Keyword(null,"documents","documents",-1582333455));
var jobs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13705__$1,new cljs.core.Keyword(null,"jobs","jobs",-313607120));
var squads = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13705__$1,new cljs.core.Keyword(null,"squads","squads",910525345));
var roles = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13705__$1,new cljs.core.Keyword(null,"roles","roles",143379530));
var timestamp = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13705__$1,new cljs.core.Keyword(null,"timestamp","timestamp",579478971));
var collections_by_id = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (c){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(c),c], null);
})),collections);
var documents_by_id = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (d){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(d),d], null);
})),documents);
var documents_by_slug = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (d){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"slug","slug",2029314850).cljs$core$IFn$_invoke$arity$1(d),d], null);
})),documents);
var jobs_by_id = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (j){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(j),j], null);
})),jobs);
var jobs_by_slug = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (j){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"slug","slug",2029314850).cljs$core$IFn$_invoke$arity$1(j),j], null);
})),jobs);
var squads_by_id = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (s){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(s),s], null);
})),squads);
var roles_by_short_name = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (r){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"short_name","short_name",1420585806).cljs$core$IFn$_invoke$arity$1(r),r], null);
})),roles);
var updated_db = cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"collections","collections",-2114643505)], null),collections_by_id),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"documents","documents",-1582333455)], null),documents_by_id),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"documents-by-slug","documents-by-slug",1269449327)], null),documents_by_slug),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"jobs","jobs",-313607120)], null),jobs_by_id),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"jobs-by-slug","jobs-by-slug",408019610)], null),jobs_by_slug),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"squads","squads",910525345)], null),squads_by_id),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"roles","roles",143379530)], null),roles_by_short_name),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app","app",-560961707),new cljs.core.Keyword(null,"loading?","loading?",1905707049)], null),false),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"last-updated","last-updated",1881380161)], null),timestamp);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),updated_db,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("data","compute-graph-structure","data/compute-graph-structure",997551597)], null)], null);
}));
/**
 * Recursively builds a nested dependency tree for jobs within a squad.
 * 
 * Args:
 *   available-jobs - Vector of remaining jobs to process
 *   current-level-outputs - Set of output slugs from current level
 * 
 * Returns:
 *   Map of job-slug -> nested-dependencies
 */
vcorpstate.events.data.build_job_dependency_tree = (function vcorpstate$events$data$build_job_dependency_tree(available_jobs,current_level_outputs){
var next_level_jobs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (job){
var input_slugs = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"slug","slug",2029314850),new cljs.core.Keyword(null,"inputs","inputs",865803858).cljs$core$IFn$_invoke$arity$1(job)));
return clojure.set.subset_QMARK_(input_slugs,current_level_outputs);
}),available_jobs);
if(cljs.core.empty_QMARK_(next_level_jobs)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
var remaining_jobs = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.set(next_level_jobs),available_jobs);
var next_level_outputs = cljs.core.set(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__13706_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"slug","slug",2029314850),new cljs.core.Keyword(null,"outputs","outputs",-1896513034).cljs$core$IFn$_invoke$arity$1(p1__13706_SHARP_));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([next_level_jobs], 0)));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (job){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"slug","slug",2029314850).cljs$core$IFn$_invoke$arity$1(job),(vcorpstate.events.data.build_job_dependency_tree.cljs$core$IFn$_invoke$arity$2 ? vcorpstate.events.data.build_job_dependency_tree.cljs$core$IFn$_invoke$arity$2(remaining_jobs,next_level_outputs) : vcorpstate.events.data.build_job_dependency_tree.call(null,remaining_jobs,next_level_outputs))], null);
}),next_level_jobs));
}
});
/**
 * Computes squad columns with nested job dependency trees for graph visualization.
 * 
 * Each squad column shows the complete dependency flow from root jobs down through
 * all levels, where each level contains jobs whose inputs are satisfied by the
 * previous level's outputs within the same squad.
 * 
 * Args:
 *   jobs - Collection of job maps with :role, :inputs, :outputs, :id
 *   roles - Map of role-name -> role data (including :squad_slug)
 * 
 * Returns:
 *   Vector of {:squad squad-name :jobs {job-slug {nested-deps...}}} maps
 */
vcorpstate.events.data.compute_squad_columns = (function vcorpstate$events$data$compute_squad_columns(jobs,roles){
var all_jobs = cljs.core.vec(jobs);
var get_squad_from_role = (function (role_name){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(roles,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [role_name,new cljs.core.Keyword(null,"squad_slug","squad_slug",259729812)], null));
});
var jobs_by_squad = cljs.core.group_by((function (p1__13707_SHARP_){
return get_squad_from_role(new cljs.core.Keyword(null,"role","role",-736691072).cljs$core$IFn$_invoke$arity$1(p1__13707_SHARP_));
}),all_jobs);
var squad_dependency_trees = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__13711){
var vec__13712 = p__13711;
var squad = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13712,(0),null);
var squad_jobs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13712,(1),null);
var squad_outputs = cljs.core.set(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__13708_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"slug","slug",2029314850),new cljs.core.Keyword(null,"outputs","outputs",-1896513034).cljs$core$IFn$_invoke$arity$1(p1__13708_SHARP_));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([squad_jobs], 0)));
var root_jobs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (job){
var input_slugs = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"slug","slug",2029314850),new cljs.core.Keyword(null,"inputs","inputs",865803858).cljs$core$IFn$_invoke$arity$1(job)));
return cljs.core.empty_QMARK_(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(input_slugs,squad_outputs));
}),squad_jobs);
var root_outputs = cljs.core.set(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__13709_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"slug","slug",2029314850),new cljs.core.Keyword(null,"outputs","outputs",-1896513034).cljs$core$IFn$_invoke$arity$1(p1__13709_SHARP_));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([root_jobs], 0)));
var remaining_jobs = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.set(root_jobs),squad_jobs);
var dependency_tree = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (root_job){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"slug","slug",2029314850).cljs$core$IFn$_invoke$arity$1(root_job),vcorpstate.events.data.build_job_dependency_tree(remaining_jobs,root_outputs)], null);
}),root_jobs));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [squad,dependency_tree], null);
}),jobs_by_squad));
return cljs.core.filterv((function (p1__13710_SHARP_){
return cljs.core.not_empty(new cljs.core.Keyword(null,"jobs","jobs",-313607120).cljs$core$IFn$_invoke$arity$1(p1__13710_SHARP_));
}),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__13715){
var vec__13716 = p__13715;
var squad = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13716,(0),null);
var dependency_tree = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13716,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"squad","squad",1623679812),squad,new cljs.core.Keyword(null,"jobs","jobs",-313607120),dependency_tree], null);
}),squad_dependency_trees));
});
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("data","compute-graph-structure","data/compute-graph-structure",997551597),(function (db,_){
var jobs = cljs.core.vals(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"jobs","jobs",-313607120)], null)));
var roles = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"roles","roles",143379530)], null));
var graph_structure = vcorpstate.events.data.compute_squad_columns(jobs,roles);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"graph_structure","graph_structure",-1193184968)], null),graph_structure);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("data","project-failed","data/project-failed",631934374),(function (db,p__13719){
var vec__13720 = p__13719;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13720,(0),null);
var _error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13720,(1),null);
return cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app","app",-560961707),new cljs.core.Keyword(null,"loading?","loading?",1905707049)], null),false),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app","app",-560961707),new cljs.core.Keyword(null,"error","error",-978969032)], null),"Failed to load project data");
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("data","document-status-changed","data/document-status-changed",-273122727),(function (db,p__13723){
var vec__13724 = p__13723;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13724,(0),null);
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13724,(1),null);
var map__13727 = event;
var map__13727__$1 = cljs.core.__destructure_map(map__13727);
var document_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13727__$1,new cljs.core.Keyword(null,"document_id","document_id",-1715671349));
var new_status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13727__$1,new cljs.core.Keyword(null,"new_status","new_status",-1841400112));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"documents","documents",-1582333455),document_id,new cljs.core.Keyword(null,"status","status",-1997798413)], null),new_status);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("data","job-status-changed","data/job-status-changed",-194475209),(function (db,p__13728){
var vec__13729 = p__13728;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13729,(0),null);
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13729,(1),null);
var map__13732 = event;
var map__13732__$1 = cljs.core.__destructure_map(map__13732);
var job_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13732__$1,new cljs.core.Keyword(null,"job_id","job_id",-911607906));
var completed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13732__$1,new cljs.core.Keyword(null,"completed","completed",-486056503));
var paused = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13732__$1,new cljs.core.Keyword(null,"paused","paused",-1710376127));
return cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"jobs","jobs",-313607120),job_id,new cljs.core.Keyword(null,"completed","completed",-486056503)], null),completed),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"jobs","jobs",-313607120),job_id,new cljs.core.Keyword(null,"paused","paused",-1710376127)], null),paused);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("data","collection-progress-updated","data/collection-progress-updated",-738056983),(function (db,p__13733){
var vec__13734 = p__13733;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13734,(0),null);
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13734,(1),null);
var map__13737 = event;
var map__13737__$1 = cljs.core.__destructure_map(map__13737);
var collection_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13737__$1,new cljs.core.Keyword(null,"collection_id","collection_id",-1037933240));
var completed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13737__$1,new cljs.core.Keyword(null,"completed","completed",-486056503));
var total = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13737__$1,new cljs.core.Keyword(null,"total","total",1916810418));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"collections","collections",-2114643505),collection_id,new cljs.core.Keyword(null,"progress","progress",244323547)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"completed","completed",-486056503),completed,new cljs.core.Keyword(null,"total","total",1916810418),total], null));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("data","document-created","data/document-created",-259390310),(function (db,p__13738){
var vec__13739 = p__13738;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13739,(0),null);
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13739,(1),null);
var map__13742 = event;
var map__13742__$1 = cljs.core.__destructure_map(map__13742);
var document__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13742__$1,new cljs.core.Keyword(null,"document","document",-1329188687));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"documents","documents",-1582333455),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(document__$1)], null),document__$1);
}));

//# sourceMappingURL=vcorpstate.events.data.js.map
