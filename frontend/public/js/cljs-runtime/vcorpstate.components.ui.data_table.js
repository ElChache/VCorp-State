goog.provide('vcorpstate.components.ui.data_table');
/**
 * Table header component.
 *   
 *   Props:
 *   - columns: Vector of maps with :key and :label
 */
vcorpstate.components.ui.data_table.table_header = (function vcorpstate$components$ui$data_table$table_header(columns){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"bg-gray-50"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),(function (){var iter__5480__auto__ = (function vcorpstate$components$ui$data_table$table_header_$_iter__12503(s__12504){
return (new cljs.core.LazySeq(null,(function (){
var s__12504__$1 = s__12504;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__12504__$1);
if(temp__5804__auto__){
var s__12504__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__12504__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__12504__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__12506 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__12505 = (0);
while(true){
if((i__12505 < size__5479__auto__)){
var col = cljs.core._nth(c__5478__auto__,i__12505);
cljs.core.chunk_append(b__12506,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"], null),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(col)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null)));

var G__12541 = (i__12505 + (1));
i__12505 = G__12541;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12506),vcorpstate$components$ui$data_table$table_header_$_iter__12503(cljs.core.chunk_rest(s__12504__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12506),null);
}
} else {
var col = cljs.core.first(s__12504__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"], null),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(col)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null)),vcorpstate$components$ui$data_table$table_header_$_iter__12503(cljs.core.rest(s__12504__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(columns);
})()], null)], null);
});
/**
 * Table row component.
 *   
 *   Props:
 *   - row-data: Map - data for this row
 *   - columns: Vector - column definitions
 *   - render-cell: Function - (fn [column-key row-data] ...) to render cell content
 */
vcorpstate.components.ui.data_table.table_row = (function vcorpstate$components$ui$data_table$table_row(row_data,columns,render_cell){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"hover:bg-gray-50"], null),(function (){var iter__5480__auto__ = (function vcorpstate$components$ui$data_table$table_row_$_iter__12511(s__12512){
return (new cljs.core.LazySeq(null,(function (){
var s__12512__$1 = s__12512;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__12512__$1);
if(temp__5804__auto__){
var s__12512__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__12512__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__12512__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__12514 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__12513 = (0);
while(true){
if((i__12513 < size__5479__auto__)){
var col = cljs.core._nth(c__5478__auto__,i__12513);
cljs.core.chunk_append(b__12514,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"px-4 py-3 text-sm"], null),(function (){var G__12518 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
var G__12519 = row_data;
return (render_cell.cljs$core$IFn$_invoke$arity$2 ? render_cell.cljs$core$IFn$_invoke$arity$2(G__12518,G__12519) : render_cell.call(null,G__12518,G__12519));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row_data)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col))].join('')], null)));

var G__12543 = (i__12513 + (1));
i__12513 = G__12543;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12514),vcorpstate$components$ui$data_table$table_row_$_iter__12511(cljs.core.chunk_rest(s__12512__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12514),null);
}
} else {
var col = cljs.core.first(s__12512__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"px-4 py-3 text-sm"], null),(function (){var G__12523 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col);
var G__12524 = row_data;
return (render_cell.cljs$core$IFn$_invoke$arity$2 ? render_cell.cljs$core$IFn$_invoke$arity$2(G__12523,G__12524) : render_cell.call(null,G__12523,G__12524));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(row_data)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col))].join('')], null)),vcorpstate$components$ui$data_table$table_row_$_iter__12511(cljs.core.rest(s__12512__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(columns);
})()], null);
});
/**
 * Generic data table component.
 *   
 *   Props:
 *   - data: Vector - array of data objects
 *   - columns: Vector - column definitions with :key and :label
 *   - render-cell: Function - (fn [column-key row-data] ...) to render cell content
 *   - empty-message: String - message when no data
 *   - row-key: Function - (fn [row-data] ...) to generate unique row keys
 */
vcorpstate.components.ui.data_table.data_table = (function vcorpstate$components$ui$data_table$data_table(p__12525){
var map__12526 = p__12525;
var map__12526__$1 = cljs.core.__destructure_map(map__12526);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12526__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var columns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12526__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));
var render_cell = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12526__$1,new cljs.core.Keyword(null,"render-cell","render-cell",-515359581));
var empty_message = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__12526__$1,new cljs.core.Keyword(null,"empty-message","empty-message",-1625491415),"No data available");
var row_key = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__12526__$1,new cljs.core.Keyword(null,"row-key","row-key",-1189010712),new cljs.core.Keyword(null,"id","id",-1388402092));
if(cljs.core.seq(data)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"border border-gray-200 rounded-lg overflow-hidden"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"min-w-full divide-y divide-gray-200"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vcorpstate.components.ui.data_table.table_header,columns], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"bg-white divide-y divide-gray-200"], null),(function (){var iter__5480__auto__ = (function vcorpstate$components$ui$data_table$data_table_$_iter__12530(s__12531){
return (new cljs.core.LazySeq(null,(function (){
var s__12531__$1 = s__12531;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__12531__$1);
if(temp__5804__auto__){
var s__12531__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__12531__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__12531__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__12533 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__12532 = (0);
while(true){
if((i__12532 < size__5479__auto__)){
var row = cljs.core._nth(c__5478__auto__,i__12532);
cljs.core.chunk_append(b__12533,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [vcorpstate.components.ui.data_table.table_row,row,columns,render_cell], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(row_key.cljs$core$IFn$_invoke$arity$1 ? row_key.cljs$core$IFn$_invoke$arity$1(row) : row_key.call(null,row))], null)));

var G__12544 = (i__12532 + (1));
i__12532 = G__12544;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12533),vcorpstate$components$ui$data_table$data_table_$_iter__12530(cljs.core.chunk_rest(s__12531__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12533),null);
}
} else {
var row = cljs.core.first(s__12531__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [vcorpstate.components.ui.data_table.table_row,row,columns,render_cell], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(row_key.cljs$core$IFn$_invoke$arity$1 ? row_key.cljs$core$IFn$_invoke$arity$1(row) : row_key.call(null,row))], null)),vcorpstate$components$ui$data_table$data_table_$_iter__12530(cljs.core.rest(s__12531__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(data);
})()], null)], null)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-center py-8 text-gray-500"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),empty_message], null)], null);
}
});

//# sourceMappingURL=vcorpstate.components.ui.data_table.js.map
