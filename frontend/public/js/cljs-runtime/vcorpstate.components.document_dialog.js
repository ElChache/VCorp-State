goog.provide('vcorpstate.components.document_dialog');
/**
 * Calculate overall collection status based on document statuses
 */
vcorpstate.components.document_dialog.calculate_collection_status = (function vcorpstate$components$document_dialog$calculate_collection_status(documents){
if(((cljs.core.seq(documents)) && (cljs.core.every_QMARK_((function (p1__12571_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(p1__12571_SHARP_),"ready");
}),documents)))){
return "ready";
} else {
return "not ready";
}
});
/**
 * Non-clickable status pill for collection overall status
 */
vcorpstate.components.document_dialog.collection_status_pill = (function vcorpstate$components$document_dialog$collection_status_pill(status){
var is_ready_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(status,"ready");
var classes = ["inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ",((is_ready_QMARK_)?"bg-green-100 text-green-800":"bg-gray-100 text-gray-800")].join('');
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),classes], null),((is_ready_QMARK_)?"Ready":"Not Ready")], null);
});
/**
 * Table showing all documents in the collection with their status
 */
vcorpstate.components.document_dialog.documents_table = (function vcorpstate$components$document_dialog$documents_table(documents){
var columns = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"slug","slug",2029314850),new cljs.core.Keyword(null,"label","label",1718410804),"Document"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"label","label",1718410804),"Status"], null)], null);
var render_cell = (function (column_key,row_data){
var G__12572 = column_key;
var G__12572__$1 = (((G__12572 instanceof cljs.core.Keyword))?G__12572.fqn:null);
switch (G__12572__$1) {
case "slug":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"font-medium text-gray-900"], null),new cljs.core.Keyword(null,"slug","slug",2029314850).cljs$core$IFn$_invoke$arity$1(row_data)], null);

break;
case "status":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vcorpstate.components.ui.status_pill.status_pill,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"document-slug","document-slug",793339583),new cljs.core.Keyword(null,"slug","slug",2029314850).cljs$core$IFn$_invoke$arity$1(row_data),new cljs.core.Keyword(null,"status","status",-1997798413),(function (){var or__5002__auto__ = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(row_data);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "not ready";
}
})()], null)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__12572__$1)].join('')));

}
});
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vcorpstate.components.ui.data_table.data_table,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"data","data",-232669377),documents,new cljs.core.Keyword(null,"columns","columns",1998437288),columns,new cljs.core.Keyword(null,"render-cell","render-cell",-515359581),render_cell,new cljs.core.Keyword(null,"empty-message","empty-message",-1625491415),"No documents in this collection",new cljs.core.Keyword(null,"row-key","row-key",-1189010712),new cljs.core.Keyword(null,"slug","slug",2029314850)], null)], null);
});
/**
 * Dialog for viewing and managing document collection status.
 *   
 *   Shows:
 *   - Collection name and overall status (calculated from documents)
 *   - Table of all documents with clickable status pills
 *   - Close button to dismiss dialog
 */
vcorpstate.components.document_dialog.document_dialog = (function vcorpstate$components$document_dialog$document_dialog(){
var is_open_QMARK_ = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"document-dialog-open?","document-dialog-open?",-424640326)], null)));
var selected_document_slug = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-document","selected-document",-816807733)], null)));
var collections_by_slug = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("data","collections-with-stats","data/collections-with-stats",-2075916159)], null)));
var collection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(collections_by_slug,selected_document_slug);
var documents = (cljs.core.truth_(collection)?new cljs.core.Keyword(null,"documents","documents",-1582333455).cljs$core$IFn$_invoke$arity$1(collection):null);
var collection_status = vcorpstate.components.document_dialog.calculate_collection_status(documents);
if(cljs.core.truth_(is_open_QMARK_)){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [vcorpstate.components.ui.dialog_modal.dialog_overlay,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-backdrop-click","on-backdrop-click",1620313327),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hide-document-dialog","hide-document-dialog",1857354731)], null));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vcorpstate.components.ui.dialog_modal.dialog_header,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),["Collection: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(selected_document_slug)].join('')], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"mb-6"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex items-center gap-2"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-sm text-gray-600"], null),"Status:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vcorpstate.components.document_dialog.collection_status_pill,collection_status], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"mb-6"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-md font-medium text-gray-900 mb-3"], null),"Documents"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vcorpstate.components.document_dialog.documents_table,documents], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vcorpstate.components.ui.dialog_modal.dialog_actions,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [vcorpstate.components.ui.dialog_modal.dialog_button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hide-document-dialog","hide-document-dialog",1857354731)], null));
})], null),"Close"], null)], null)], null);
} else {
return null;
}
});

//# sourceMappingURL=vcorpstate.components.document_dialog.js.map
