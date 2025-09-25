goog.provide('ajax.xml_http_request');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
var G__11125 = e.target.readyState;
var fexpr__11124 = new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null);
return (fexpr__11124.cljs$core$IFn$_invoke$arity$1 ? fexpr__11124.cljs$core$IFn$_invoke$arity$1(G__11125) : fexpr__11124.call(null,G__11125));
});
ajax.xml_http_request.append = (function ajax$xml_http_request$append(current,next){
if(cljs.core.truth_(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(next)].join('');
} else {
return next;
}
});
ajax.xml_http_request.process_headers = (function ajax$xml_http_request$process_headers(header_str){
if(cljs.core.truth_(header_str)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (headers,header_line){
if(cljs.core.truth_(goog.string.isEmptyOrWhitespace(header_line))){
return headers;
} else {
var key_value = goog.string.splitLimit(header_line,": ",(2));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(headers,(key_value[(0)]),ajax.xml_http_request.append,(key_value[(1)]));
}
}),cljs.core.PersistentArrayMap.EMPTY,header_str.split("\r\n"));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
ajax.xml_http_request.xmlhttprequest = (((typeof goog !== 'undefined') && (typeof goog.global !== 'undefined') && (typeof goog.global.XMLHttpRequest !== 'undefined'))?goog.global.XMLHttpRequest:(((typeof require !== 'undefined'))?(function (){var req = require;
return (req.cljs$core$IFn$_invoke$arity$1 ? req.cljs$core$IFn$_invoke$arity$1("xmlhttprequest") : req.call(null,"xmlhttprequest")).XMLHttpRequest;
})():null));
(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__11141,handler){
var map__11142 = p__11141;
var map__11142__$1 = cljs.core.__destructure_map(map__11142);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11142__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11142__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11142__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11142__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__11142__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__11142__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11142__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
(this$__$1.withCredentials = with_credentials);

(this$__$1.onreadystatechange = (function (p1__11133_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state(p1__11133_SHARP_))){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(this$__$1) : handler.call(null,this$__$1));
} else {
return null;
}
}));

this$__$1.open(method,uri,true);

(this$__$1.timeout = timeout);

var temp__5804__auto___11165 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5804__auto___11165)){
var response_type_11166 = temp__5804__auto___11165;
(this$__$1.responseType = cljs.core.name(response_type_11166));
} else {
}

var seq__11145_11167 = cljs.core.seq(headers);
var chunk__11146_11168 = null;
var count__11147_11169 = (0);
var i__11148_11170 = (0);
while(true){
if((i__11148_11170 < count__11147_11169)){
var vec__11157_11171 = chunk__11146_11168.cljs$core$IIndexed$_nth$arity$2(null,i__11148_11170);
var k_11172 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11157_11171,(0),null);
var v_11173 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11157_11171,(1),null);
this$__$1.setRequestHeader(k_11172,v_11173);


var G__11174 = seq__11145_11167;
var G__11175 = chunk__11146_11168;
var G__11176 = count__11147_11169;
var G__11177 = (i__11148_11170 + (1));
seq__11145_11167 = G__11174;
chunk__11146_11168 = G__11175;
count__11147_11169 = G__11176;
i__11148_11170 = G__11177;
continue;
} else {
var temp__5804__auto___11178 = cljs.core.seq(seq__11145_11167);
if(temp__5804__auto___11178){
var seq__11145_11179__$1 = temp__5804__auto___11178;
if(cljs.core.chunked_seq_QMARK_(seq__11145_11179__$1)){
var c__5525__auto___11180 = cljs.core.chunk_first(seq__11145_11179__$1);
var G__11181 = cljs.core.chunk_rest(seq__11145_11179__$1);
var G__11182 = c__5525__auto___11180;
var G__11183 = cljs.core.count(c__5525__auto___11180);
var G__11184 = (0);
seq__11145_11167 = G__11181;
chunk__11146_11168 = G__11182;
count__11147_11169 = G__11183;
i__11148_11170 = G__11184;
continue;
} else {
var vec__11161_11185 = cljs.core.first(seq__11145_11179__$1);
var k_11186 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11161_11185,(0),null);
var v_11187 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11161_11185,(1),null);
this$__$1.setRequestHeader(k_11186,v_11187);


var G__11188 = cljs.core.next(seq__11145_11179__$1);
var G__11189 = null;
var G__11190 = (0);
var G__11191 = (0);
seq__11145_11167 = G__11188;
chunk__11146_11168 = G__11189;
count__11147_11169 = G__11190;
i__11148_11170 = G__11191;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__5002__auto__ = body;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "";
}
})());

return this$__$1;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_all_headers$arity$1 = (function (this$){
var this$__$1 = this;
return ajax.xml_http_request.process_headers(this$__$1.getAllResponseHeaders());
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),this$__$1.readyState);
}));

//# sourceMappingURL=ajax.xml_http_request.js.map
