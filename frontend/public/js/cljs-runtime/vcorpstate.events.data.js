goog.provide('vcorpstate.events.data');
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("data","load-project","data/load-project",1705783942),(function (p__12407,p__12408){
var map__12409 = p__12407;
var map__12409__$1 = cljs.core.__destructure_map(map__12409);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12409__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__12410 = p__12408;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12410,(0),null);
var project_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12410,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app","app",-560961707),new cljs.core.Keyword(null,"loading?","loading?",1905707049)], null),true),new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ms","ms",-1152709733),(100),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("data","fetch-project","data/fetch-project",-1646330123),project_id], null)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("data","fetch-project","data/fetch-project",-1646330123),(function (_,p__12413){
var vec__12414 = p__12413;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12414,(0),null);
var project_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12414,(1),null);
vcorpstate.http.load_project_initial_data(project_id);

return cljs.core.PersistentArrayMap.EMPTY;
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("data","project-loaded","data/project-loaded",864796844),(function (p__12417,p__12418){
var map__12419 = p__12417;
var map__12419__$1 = cljs.core.__destructure_map(map__12419);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12419__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__12420 = p__12418;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12420,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12420,(1),null);
var map__12423 = data;
var map__12423__$1 = cljs.core.__destructure_map(map__12423);
var collections = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12423__$1,new cljs.core.Keyword(null,"collections","collections",-2114643505));
var documents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12423__$1,new cljs.core.Keyword(null,"documents","documents",-1582333455));
var jobs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12423__$1,new cljs.core.Keyword(null,"jobs","jobs",-313607120));
var squads = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12423__$1,new cljs.core.Keyword(null,"squads","squads",910525345));
var roles = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12423__$1,new cljs.core.Keyword(null,"roles","roles",143379530));
var timestamp = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12423__$1,new cljs.core.Keyword(null,"timestamp","timestamp",579478971));
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
var next_level_outputs = cljs.core.set(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__12424_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"slug","slug",2029314850),new cljs.core.Keyword(null,"outputs","outputs",-1896513034).cljs$core$IFn$_invoke$arity$1(p1__12424_SHARP_));
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
var jobs_by_squad = cljs.core.group_by((function (p1__12425_SHARP_){
return get_squad_from_role(new cljs.core.Keyword(null,"role","role",-736691072).cljs$core$IFn$_invoke$arity$1(p1__12425_SHARP_));
}),all_jobs);
var squad_dependency_trees = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__12429){
var vec__12430 = p__12429;
var squad = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12430,(0),null);
var squad_jobs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12430,(1),null);
var squad_outputs = cljs.core.set(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__12426_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"slug","slug",2029314850),new cljs.core.Keyword(null,"outputs","outputs",-1896513034).cljs$core$IFn$_invoke$arity$1(p1__12426_SHARP_));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([squad_jobs], 0)));
var root_jobs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (job){
var input_slugs = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"slug","slug",2029314850),new cljs.core.Keyword(null,"inputs","inputs",865803858).cljs$core$IFn$_invoke$arity$1(job)));
return cljs.core.empty_QMARK_(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(input_slugs,squad_outputs));
}),squad_jobs);
var root_outputs = cljs.core.set(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__12427_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"slug","slug",2029314850),new cljs.core.Keyword(null,"outputs","outputs",-1896513034).cljs$core$IFn$_invoke$arity$1(p1__12427_SHARP_));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([root_jobs], 0)));
var remaining_jobs = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.set(root_jobs),squad_jobs);
var dependency_tree = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (root_job){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"slug","slug",2029314850).cljs$core$IFn$_invoke$arity$1(root_job),vcorpstate.events.data.build_job_dependency_tree(remaining_jobs,root_outputs)], null);
}),root_jobs));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [squad,dependency_tree], null);
}),jobs_by_squad));
return cljs.core.filterv((function (p1__12428_SHARP_){
return cljs.core.not_empty(new cljs.core.Keyword(null,"jobs","jobs",-313607120).cljs$core$IFn$_invoke$arity$1(p1__12428_SHARP_));
}),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__12433){
var vec__12434 = p__12433;
var squad = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12434,(0),null);
var dependency_tree = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12434,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"squad","squad",1623679812),squad,new cljs.core.Keyword(null,"jobs","jobs",-313607120),dependency_tree], null);
}),squad_dependency_trees));
});
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("data","compute-graph-structure","data/compute-graph-structure",997551597),(function (db,_){
var jobs = cljs.core.vals(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"jobs","jobs",-313607120)], null)));
var roles = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"roles","roles",143379530)], null));
var graph_structure = vcorpstate.events.data.compute_squad_columns(jobs,roles);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"graph_structure","graph_structure",-1193184968)], null),graph_structure);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("data","project-failed","data/project-failed",631934374),(function (db,p__12437){
var vec__12438 = p__12437;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12438,(0),null);
var _error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12438,(1),null);
return cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app","app",-560961707),new cljs.core.Keyword(null,"loading?","loading?",1905707049)], null),false),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app","app",-560961707),new cljs.core.Keyword(null,"error","error",-978969032)], null),"Failed to load project data");
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("data","document-status-changed","data/document-status-changed",-273122727),(function (db,p__12441){
var vec__12442 = p__12441;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12442,(0),null);
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12442,(1),null);
var map__12445 = event;
var map__12445__$1 = cljs.core.__destructure_map(map__12445);
var document_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12445__$1,new cljs.core.Keyword(null,"document_id","document_id",-1715671349));
var new_status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12445__$1,new cljs.core.Keyword(null,"new_status","new_status",-1841400112));
var new_ready = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12445__$1,new cljs.core.Keyword(null,"new_ready","new_ready",806009199));
return cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"documents","documents",-1582333455),document_id,new cljs.core.Keyword(null,"status","status",-1997798413)], null),new_status),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"documents","documents",-1582333455),document_id,new cljs.core.Keyword(null,"ready","ready",1086465795)], null),new_ready);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("data","job-status-changed","data/job-status-changed",-194475209),(function (db,p__12446){
var vec__12447 = p__12446;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12447,(0),null);
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12447,(1),null);
var map__12450 = event;
var map__12450__$1 = cljs.core.__destructure_map(map__12450);
var job_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12450__$1,new cljs.core.Keyword(null,"job_id","job_id",-911607906));
var completed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12450__$1,new cljs.core.Keyword(null,"completed","completed",-486056503));
var paused = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12450__$1,new cljs.core.Keyword(null,"paused","paused",-1710376127));
return cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"jobs","jobs",-313607120),job_id,new cljs.core.Keyword(null,"completed","completed",-486056503)], null),completed),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"jobs","jobs",-313607120),job_id,new cljs.core.Keyword(null,"paused","paused",-1710376127)], null),paused);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("data","collection-progress-updated","data/collection-progress-updated",-738056983),(function (db,p__12451){
var vec__12452 = p__12451;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12452,(0),null);
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12452,(1),null);
var map__12455 = event;
var map__12455__$1 = cljs.core.__destructure_map(map__12455);
var collection_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12455__$1,new cljs.core.Keyword(null,"collection_id","collection_id",-1037933240));
var completed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12455__$1,new cljs.core.Keyword(null,"completed","completed",-486056503));
var total = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12455__$1,new cljs.core.Keyword(null,"total","total",1916810418));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"collections","collections",-2114643505),collection_id,new cljs.core.Keyword(null,"progress","progress",244323547)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"completed","completed",-486056503),completed,new cljs.core.Keyword(null,"total","total",1916810418),total], null));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("data","document-created","data/document-created",-259390310),(function (db,p__12456){
var vec__12457 = p__12456;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12457,(0),null);
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12457,(1),null);
var map__12460 = event;
var map__12460__$1 = cljs.core.__destructure_map(map__12460);
var document_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12460__$1,new cljs.core.Keyword(null,"document_id","document_id",-1715671349));
var project_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12460__$1,new cljs.core.Keyword(null,"project_id","project_id",1147160698));
var collection_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12460__$1,new cljs.core.Keyword(null,"collection_id","collection_id",-1037933240));
var slug = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12460__$1,new cljs.core.Keyword(null,"slug","slug",2029314850));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12460__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12460__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var ready = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12460__$1,new cljs.core.Keyword(null,"ready","ready",1086465795));
var document_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12460__$1,new cljs.core.Keyword(null,"document_type","document_type",882041046));
var document__$1 = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"id","id",-1388402092),document_id,new cljs.core.Keyword(null,"project_id","project_id",1147160698),project_id,new cljs.core.Keyword(null,"document_collection_id","document_collection_id",-1215530967),collection_id,new cljs.core.Keyword(null,"slug","slug",2029314850),slug,new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"ready","ready",1086465795),ready,new cljs.core.Keyword(null,"document_type","document_type",882041046),document_type], null);
return cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"documents","documents",-1582333455),document_id], null),document__$1),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"documents-by-slug","documents-by-slug",1269449327),slug], null),document__$1);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("data","collection-changed","data/collection-changed",-1837672645),(function (db,p__12461){
var vec__12462 = p__12461;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12462,(0),null);
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12462,(1),null);
var map__12465 = event;
var map__12465__$1 = cljs.core.__destructure_map(map__12465);
var collection_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12465__$1,new cljs.core.Keyword(null,"collection_id","collection_id",-1037933240));
var slug = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12465__$1,new cljs.core.Keyword(null,"slug","slug",2029314850));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12465__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12465__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var document_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12465__$1,new cljs.core.Keyword(null,"document_type","document_type",882041046));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"collections","collections",-2114643505),collection_id], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),collection_id,new cljs.core.Keyword(null,"slug","slug",2029314850),slug,new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"document_type","document_type",882041046),document_type], null));
}));

//# sourceMappingURL=vcorpstate.events.data.js.map
