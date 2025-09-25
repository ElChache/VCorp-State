goog.provide('vcorpstate.components.launch_button');
/**
 * Small launch button with rocket icon
 */
vcorpstate.components.launch_button.launch_button = (function vcorpstate$components$launch_button$launch_button(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"p-1 hover:bg-gray-100 rounded transition-colors",new cljs.core.Keyword(null,"title","title",636505583),"Launch Agents",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
e.preventDefault();

e.stopPropagation();

console.log("Launch button clicked!");

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-launch-agents-dialog","show-launch-agents-dialog",346664923)], null));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-xl"], null),"\uD83D\uDE80"], null)], null);
});

//# sourceMappingURL=vcorpstate.components.launch_button.js.map
