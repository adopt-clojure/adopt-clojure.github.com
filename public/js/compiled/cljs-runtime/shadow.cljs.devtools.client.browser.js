goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4870__auto__ = [];
var len__4864__auto___38369 = arguments.length;
var i__4865__auto___38370 = (0);
while(true){
if((i__4865__auto___38370 < len__4864__auto___38369)){
args__4870__auto__.push((arguments[i__4865__auto___38370]));

var G__38371 = (i__4865__auto___38370 + (1));
i__4865__auto___38370 = G__38371;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq37899){
var G__37900 = cljs.core.first(seq37899);
var seq37899__$1 = cljs.core.next(seq37899);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37900,seq37899__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__37908 = cljs.core.seq(sources);
var chunk__37909 = null;
var count__37910 = (0);
var i__37911 = (0);
while(true){
if((i__37911 < count__37910)){
var map__37918 = chunk__37909.cljs$core$IIndexed$_nth$arity$2(null,i__37911);
var map__37918__$1 = cljs.core.__destructure_map(map__37918);
var src = map__37918__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37918__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37918__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37918__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37918__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e37919){var e_38373 = e37919;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_38373);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_38373.message)].join('')));
}

var G__38374 = seq__37908;
var G__38375 = chunk__37909;
var G__38376 = count__37910;
var G__38377 = (i__37911 + (1));
seq__37908 = G__38374;
chunk__37909 = G__38375;
count__37910 = G__38376;
i__37911 = G__38377;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__37908);
if(temp__5753__auto__){
var seq__37908__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37908__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__37908__$1);
var G__38379 = cljs.core.chunk_rest(seq__37908__$1);
var G__38380 = c__4679__auto__;
var G__38381 = cljs.core.count(c__4679__auto__);
var G__38382 = (0);
seq__37908 = G__38379;
chunk__37909 = G__38380;
count__37910 = G__38381;
i__37911 = G__38382;
continue;
} else {
var map__37922 = cljs.core.first(seq__37908__$1);
var map__37922__$1 = cljs.core.__destructure_map(map__37922);
var src = map__37922__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37922__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37922__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37922__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37922__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e37923){var e_38384 = e37923;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_38384);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_38384.message)].join('')));
}

var G__38385 = cljs.core.next(seq__37908__$1);
var G__38386 = null;
var G__38387 = (0);
var G__38388 = (0);
seq__37908 = G__38385;
chunk__37909 = G__38386;
count__37910 = G__38387;
i__37911 = G__38388;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__37926 = cljs.core.seq(js_requires);
var chunk__37927 = null;
var count__37928 = (0);
var i__37929 = (0);
while(true){
if((i__37929 < count__37928)){
var js_ns = chunk__37927.cljs$core$IIndexed$_nth$arity$2(null,i__37929);
var require_str_38391 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_38391);


var G__38392 = seq__37926;
var G__38393 = chunk__37927;
var G__38394 = count__37928;
var G__38395 = (i__37929 + (1));
seq__37926 = G__38392;
chunk__37927 = G__38393;
count__37928 = G__38394;
i__37929 = G__38395;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__37926);
if(temp__5753__auto__){
var seq__37926__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37926__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__37926__$1);
var G__38396 = cljs.core.chunk_rest(seq__37926__$1);
var G__38397 = c__4679__auto__;
var G__38398 = cljs.core.count(c__4679__auto__);
var G__38399 = (0);
seq__37926 = G__38396;
chunk__37927 = G__38397;
count__37928 = G__38398;
i__37929 = G__38399;
continue;
} else {
var js_ns = cljs.core.first(seq__37926__$1);
var require_str_38400 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_38400);


var G__38401 = cljs.core.next(seq__37926__$1);
var G__38402 = null;
var G__38403 = (0);
var G__38404 = (0);
seq__37926 = G__38401;
chunk__37927 = G__38402;
count__37928 = G__38403;
i__37929 = G__38404;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__37938){
var map__37939 = p__37938;
var map__37939__$1 = cljs.core.__destructure_map(map__37939);
var msg = map__37939__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37939__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37939__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37940(s__37941){
return (new cljs.core.LazySeq(null,(function (){
var s__37941__$1 = s__37941;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__37941__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var map__37946 = cljs.core.first(xs__6308__auto__);
var map__37946__$1 = cljs.core.__destructure_map(map__37946);
var src = map__37946__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37946__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37946__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4648__auto__ = ((function (s__37941__$1,map__37946,map__37946__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__37939,map__37939__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37940_$_iter__37942(s__37943){
return (new cljs.core.LazySeq(null,((function (s__37941__$1,map__37946,map__37946__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__37939,map__37939__$1,msg,info,reload_info){
return (function (){
var s__37943__$1 = s__37943;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__37943__$1);
if(temp__5753__auto____$1){
var s__37943__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__37943__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__37943__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__37945 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__37944 = (0);
while(true){
if((i__37944 < size__4651__auto__)){
var warning = cljs.core._nth(c__4650__auto__,i__37944);
cljs.core.chunk_append(b__37945,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__38405 = (i__37944 + (1));
i__37944 = G__38405;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37945),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37940_$_iter__37942(cljs.core.chunk_rest(s__37943__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37945),null);
}
} else {
var warning = cljs.core.first(s__37943__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37940_$_iter__37942(cljs.core.rest(s__37943__$2)));
}
} else {
return null;
}
break;
}
});})(s__37941__$1,map__37946,map__37946__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__37939,map__37939__$1,msg,info,reload_info))
,null,null));
});})(s__37941__$1,map__37946,map__37946__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__37939,map__37939__$1,msg,info,reload_info))
;
var fs__4649__auto__ = cljs.core.seq(iterys__4648__auto__(warnings));
if(fs__4649__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4649__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37940(cljs.core.rest(s__37941__$1)));
} else {
var G__38407 = cljs.core.rest(s__37941__$1);
s__37941__$1 = G__38407;
continue;
}
} else {
var G__38408 = cljs.core.rest(s__37941__$1);
s__37941__$1 = G__38408;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__37948_38409 = cljs.core.seq(warnings);
var chunk__37949_38410 = null;
var count__37950_38411 = (0);
var i__37951_38412 = (0);
while(true){
if((i__37951_38412 < count__37950_38411)){
var map__37955_38413 = chunk__37949_38410.cljs$core$IIndexed$_nth$arity$2(null,i__37951_38412);
var map__37955_38414__$1 = cljs.core.__destructure_map(map__37955_38413);
var w_38415 = map__37955_38414__$1;
var msg_38416__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37955_38414__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_38417 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37955_38414__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_38418 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37955_38414__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_38419 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37955_38414__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_38419)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_38417),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_38418),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_38416__$1)].join(''));


var G__38420 = seq__37948_38409;
var G__38421 = chunk__37949_38410;
var G__38422 = count__37950_38411;
var G__38423 = (i__37951_38412 + (1));
seq__37948_38409 = G__38420;
chunk__37949_38410 = G__38421;
count__37950_38411 = G__38422;
i__37951_38412 = G__38423;
continue;
} else {
var temp__5753__auto___38424 = cljs.core.seq(seq__37948_38409);
if(temp__5753__auto___38424){
var seq__37948_38425__$1 = temp__5753__auto___38424;
if(cljs.core.chunked_seq_QMARK_(seq__37948_38425__$1)){
var c__4679__auto___38426 = cljs.core.chunk_first(seq__37948_38425__$1);
var G__38427 = cljs.core.chunk_rest(seq__37948_38425__$1);
var G__38428 = c__4679__auto___38426;
var G__38429 = cljs.core.count(c__4679__auto___38426);
var G__38430 = (0);
seq__37948_38409 = G__38427;
chunk__37949_38410 = G__38428;
count__37950_38411 = G__38429;
i__37951_38412 = G__38430;
continue;
} else {
var map__37956_38432 = cljs.core.first(seq__37948_38425__$1);
var map__37956_38433__$1 = cljs.core.__destructure_map(map__37956_38432);
var w_38434 = map__37956_38433__$1;
var msg_38435__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37956_38433__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_38436 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37956_38433__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_38437 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37956_38433__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_38438 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37956_38433__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_38438)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_38436),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_38437),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_38435__$1)].join(''));


var G__38439 = cljs.core.next(seq__37948_38425__$1);
var G__38440 = null;
var G__38441 = (0);
var G__38442 = (0);
seq__37948_38409 = G__38439;
chunk__37949_38410 = G__38440;
count__37950_38411 = G__38441;
i__37951_38412 = G__38442;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__37937_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__37937_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4251__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4251__auto__){
var and__4251__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4251__auto____$1){
return new$;
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__37957){
var map__37958 = p__37957;
var map__37958__$1 = cljs.core.__destructure_map(map__37958);
var msg = map__37958__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37958__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37958__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__37959 = cljs.core.seq(updates);
var chunk__37961 = null;
var count__37962 = (0);
var i__37963 = (0);
while(true){
if((i__37963 < count__37962)){
var path = chunk__37961.cljs$core$IIndexed$_nth$arity$2(null,i__37963);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__38126_38443 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__38130_38444 = null;
var count__38131_38445 = (0);
var i__38132_38446 = (0);
while(true){
if((i__38132_38446 < count__38131_38445)){
var node_38447 = chunk__38130_38444.cljs$core$IIndexed$_nth$arity$2(null,i__38132_38446);
if(cljs.core.not(node_38447.shadow$old)){
var path_match_38448 = shadow.cljs.devtools.client.browser.match_paths(node_38447.getAttribute("href"),path);
if(cljs.core.truth_(path_match_38448)){
var new_link_38449 = (function (){var G__38177 = node_38447.cloneNode(true);
G__38177.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_38448),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__38177;
})();
(node_38447.shadow$old = true);

(new_link_38449.onload = ((function (seq__38126_38443,chunk__38130_38444,count__38131_38445,i__38132_38446,seq__37959,chunk__37961,count__37962,i__37963,new_link_38449,path_match_38448,node_38447,path,map__37958,map__37958__$1,msg,updates,reload_info){
return (function (e){
var seq__38179_38450 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__38182_38451 = null;
var count__38183_38452 = (0);
var i__38184_38453 = (0);
while(true){
if((i__38184_38453 < count__38183_38452)){
var map__38221_38454 = chunk__38182_38451.cljs$core$IIndexed$_nth$arity$2(null,i__38184_38453);
var map__38221_38455__$1 = cljs.core.__destructure_map(map__38221_38454);
var task_38456 = map__38221_38455__$1;
var fn_str_38457 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38221_38455__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38458 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38221_38455__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38459 = goog.getObjectByName(fn_str_38457,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38458)].join(''));

(fn_obj_38459.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38459.cljs$core$IFn$_invoke$arity$2(path,new_link_38449) : fn_obj_38459.call(null,path,new_link_38449));


var G__38460 = seq__38179_38450;
var G__38461 = chunk__38182_38451;
var G__38462 = count__38183_38452;
var G__38463 = (i__38184_38453 + (1));
seq__38179_38450 = G__38460;
chunk__38182_38451 = G__38461;
count__38183_38452 = G__38462;
i__38184_38453 = G__38463;
continue;
} else {
var temp__5753__auto___38464 = cljs.core.seq(seq__38179_38450);
if(temp__5753__auto___38464){
var seq__38179_38468__$1 = temp__5753__auto___38464;
if(cljs.core.chunked_seq_QMARK_(seq__38179_38468__$1)){
var c__4679__auto___38469 = cljs.core.chunk_first(seq__38179_38468__$1);
var G__38470 = cljs.core.chunk_rest(seq__38179_38468__$1);
var G__38471 = c__4679__auto___38469;
var G__38472 = cljs.core.count(c__4679__auto___38469);
var G__38473 = (0);
seq__38179_38450 = G__38470;
chunk__38182_38451 = G__38471;
count__38183_38452 = G__38472;
i__38184_38453 = G__38473;
continue;
} else {
var map__38234_38474 = cljs.core.first(seq__38179_38468__$1);
var map__38234_38475__$1 = cljs.core.__destructure_map(map__38234_38474);
var task_38476 = map__38234_38475__$1;
var fn_str_38477 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38234_38475__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38478 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38234_38475__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38479 = goog.getObjectByName(fn_str_38477,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38478)].join(''));

(fn_obj_38479.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38479.cljs$core$IFn$_invoke$arity$2(path,new_link_38449) : fn_obj_38479.call(null,path,new_link_38449));


var G__38480 = cljs.core.next(seq__38179_38468__$1);
var G__38481 = null;
var G__38482 = (0);
var G__38483 = (0);
seq__38179_38450 = G__38480;
chunk__38182_38451 = G__38481;
count__38183_38452 = G__38482;
i__38184_38453 = G__38483;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_38447);
});})(seq__38126_38443,chunk__38130_38444,count__38131_38445,i__38132_38446,seq__37959,chunk__37961,count__37962,i__37963,new_link_38449,path_match_38448,node_38447,path,map__37958,map__37958__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_38448], 0));

goog.dom.insertSiblingAfter(new_link_38449,node_38447);


var G__38484 = seq__38126_38443;
var G__38485 = chunk__38130_38444;
var G__38486 = count__38131_38445;
var G__38487 = (i__38132_38446 + (1));
seq__38126_38443 = G__38484;
chunk__38130_38444 = G__38485;
count__38131_38445 = G__38486;
i__38132_38446 = G__38487;
continue;
} else {
var G__38488 = seq__38126_38443;
var G__38489 = chunk__38130_38444;
var G__38490 = count__38131_38445;
var G__38491 = (i__38132_38446 + (1));
seq__38126_38443 = G__38488;
chunk__38130_38444 = G__38489;
count__38131_38445 = G__38490;
i__38132_38446 = G__38491;
continue;
}
} else {
var G__38492 = seq__38126_38443;
var G__38493 = chunk__38130_38444;
var G__38494 = count__38131_38445;
var G__38495 = (i__38132_38446 + (1));
seq__38126_38443 = G__38492;
chunk__38130_38444 = G__38493;
count__38131_38445 = G__38494;
i__38132_38446 = G__38495;
continue;
}
} else {
var temp__5753__auto___38496 = cljs.core.seq(seq__38126_38443);
if(temp__5753__auto___38496){
var seq__38126_38497__$1 = temp__5753__auto___38496;
if(cljs.core.chunked_seq_QMARK_(seq__38126_38497__$1)){
var c__4679__auto___38498 = cljs.core.chunk_first(seq__38126_38497__$1);
var G__38499 = cljs.core.chunk_rest(seq__38126_38497__$1);
var G__38500 = c__4679__auto___38498;
var G__38501 = cljs.core.count(c__4679__auto___38498);
var G__38502 = (0);
seq__38126_38443 = G__38499;
chunk__38130_38444 = G__38500;
count__38131_38445 = G__38501;
i__38132_38446 = G__38502;
continue;
} else {
var node_38503 = cljs.core.first(seq__38126_38497__$1);
if(cljs.core.not(node_38503.shadow$old)){
var path_match_38504 = shadow.cljs.devtools.client.browser.match_paths(node_38503.getAttribute("href"),path);
if(cljs.core.truth_(path_match_38504)){
var new_link_38505 = (function (){var G__38247 = node_38503.cloneNode(true);
G__38247.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_38504),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__38247;
})();
(node_38503.shadow$old = true);

(new_link_38505.onload = ((function (seq__38126_38443,chunk__38130_38444,count__38131_38445,i__38132_38446,seq__37959,chunk__37961,count__37962,i__37963,new_link_38505,path_match_38504,node_38503,seq__38126_38497__$1,temp__5753__auto___38496,path,map__37958,map__37958__$1,msg,updates,reload_info){
return (function (e){
var seq__38252_38506 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__38254_38507 = null;
var count__38255_38508 = (0);
var i__38256_38509 = (0);
while(true){
if((i__38256_38509 < count__38255_38508)){
var map__38264_38510 = chunk__38254_38507.cljs$core$IIndexed$_nth$arity$2(null,i__38256_38509);
var map__38264_38511__$1 = cljs.core.__destructure_map(map__38264_38510);
var task_38512 = map__38264_38511__$1;
var fn_str_38513 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38264_38511__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38514 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38264_38511__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38515 = goog.getObjectByName(fn_str_38513,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38514)].join(''));

(fn_obj_38515.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38515.cljs$core$IFn$_invoke$arity$2(path,new_link_38505) : fn_obj_38515.call(null,path,new_link_38505));


var G__38516 = seq__38252_38506;
var G__38517 = chunk__38254_38507;
var G__38518 = count__38255_38508;
var G__38519 = (i__38256_38509 + (1));
seq__38252_38506 = G__38516;
chunk__38254_38507 = G__38517;
count__38255_38508 = G__38518;
i__38256_38509 = G__38519;
continue;
} else {
var temp__5753__auto___38520__$1 = cljs.core.seq(seq__38252_38506);
if(temp__5753__auto___38520__$1){
var seq__38252_38521__$1 = temp__5753__auto___38520__$1;
if(cljs.core.chunked_seq_QMARK_(seq__38252_38521__$1)){
var c__4679__auto___38522 = cljs.core.chunk_first(seq__38252_38521__$1);
var G__38523 = cljs.core.chunk_rest(seq__38252_38521__$1);
var G__38524 = c__4679__auto___38522;
var G__38525 = cljs.core.count(c__4679__auto___38522);
var G__38526 = (0);
seq__38252_38506 = G__38523;
chunk__38254_38507 = G__38524;
count__38255_38508 = G__38525;
i__38256_38509 = G__38526;
continue;
} else {
var map__38265_38527 = cljs.core.first(seq__38252_38521__$1);
var map__38265_38528__$1 = cljs.core.__destructure_map(map__38265_38527);
var task_38529 = map__38265_38528__$1;
var fn_str_38530 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38265_38528__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38531 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38265_38528__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38532 = goog.getObjectByName(fn_str_38530,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38531)].join(''));

(fn_obj_38532.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38532.cljs$core$IFn$_invoke$arity$2(path,new_link_38505) : fn_obj_38532.call(null,path,new_link_38505));


var G__38534 = cljs.core.next(seq__38252_38521__$1);
var G__38535 = null;
var G__38536 = (0);
var G__38537 = (0);
seq__38252_38506 = G__38534;
chunk__38254_38507 = G__38535;
count__38255_38508 = G__38536;
i__38256_38509 = G__38537;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_38503);
});})(seq__38126_38443,chunk__38130_38444,count__38131_38445,i__38132_38446,seq__37959,chunk__37961,count__37962,i__37963,new_link_38505,path_match_38504,node_38503,seq__38126_38497__$1,temp__5753__auto___38496,path,map__37958,map__37958__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_38504], 0));

goog.dom.insertSiblingAfter(new_link_38505,node_38503);


var G__38538 = cljs.core.next(seq__38126_38497__$1);
var G__38539 = null;
var G__38540 = (0);
var G__38541 = (0);
seq__38126_38443 = G__38538;
chunk__38130_38444 = G__38539;
count__38131_38445 = G__38540;
i__38132_38446 = G__38541;
continue;
} else {
var G__38542 = cljs.core.next(seq__38126_38497__$1);
var G__38543 = null;
var G__38544 = (0);
var G__38545 = (0);
seq__38126_38443 = G__38542;
chunk__38130_38444 = G__38543;
count__38131_38445 = G__38544;
i__38132_38446 = G__38545;
continue;
}
} else {
var G__38546 = cljs.core.next(seq__38126_38497__$1);
var G__38547 = null;
var G__38548 = (0);
var G__38549 = (0);
seq__38126_38443 = G__38546;
chunk__38130_38444 = G__38547;
count__38131_38445 = G__38548;
i__38132_38446 = G__38549;
continue;
}
}
} else {
}
}
break;
}


var G__38550 = seq__37959;
var G__38551 = chunk__37961;
var G__38552 = count__37962;
var G__38553 = (i__37963 + (1));
seq__37959 = G__38550;
chunk__37961 = G__38551;
count__37962 = G__38552;
i__37963 = G__38553;
continue;
} else {
var G__38554 = seq__37959;
var G__38555 = chunk__37961;
var G__38556 = count__37962;
var G__38557 = (i__37963 + (1));
seq__37959 = G__38554;
chunk__37961 = G__38555;
count__37962 = G__38556;
i__37963 = G__38557;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__37959);
if(temp__5753__auto__){
var seq__37959__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37959__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__37959__$1);
var G__38558 = cljs.core.chunk_rest(seq__37959__$1);
var G__38559 = c__4679__auto__;
var G__38560 = cljs.core.count(c__4679__auto__);
var G__38561 = (0);
seq__37959 = G__38558;
chunk__37961 = G__38559;
count__37962 = G__38560;
i__37963 = G__38561;
continue;
} else {
var path = cljs.core.first(seq__37959__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__38266_38562 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__38270_38563 = null;
var count__38271_38564 = (0);
var i__38272_38565 = (0);
while(true){
if((i__38272_38565 < count__38271_38564)){
var node_38566 = chunk__38270_38563.cljs$core$IIndexed$_nth$arity$2(null,i__38272_38565);
if(cljs.core.not(node_38566.shadow$old)){
var path_match_38567 = shadow.cljs.devtools.client.browser.match_paths(node_38566.getAttribute("href"),path);
if(cljs.core.truth_(path_match_38567)){
var new_link_38568 = (function (){var G__38308 = node_38566.cloneNode(true);
G__38308.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_38567),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__38308;
})();
(node_38566.shadow$old = true);

(new_link_38568.onload = ((function (seq__38266_38562,chunk__38270_38563,count__38271_38564,i__38272_38565,seq__37959,chunk__37961,count__37962,i__37963,new_link_38568,path_match_38567,node_38566,path,seq__37959__$1,temp__5753__auto__,map__37958,map__37958__$1,msg,updates,reload_info){
return (function (e){
var seq__38310_38569 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__38312_38570 = null;
var count__38313_38571 = (0);
var i__38314_38572 = (0);
while(true){
if((i__38314_38572 < count__38313_38571)){
var map__38318_38573 = chunk__38312_38570.cljs$core$IIndexed$_nth$arity$2(null,i__38314_38572);
var map__38318_38574__$1 = cljs.core.__destructure_map(map__38318_38573);
var task_38575 = map__38318_38574__$1;
var fn_str_38576 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38318_38574__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38577 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38318_38574__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38578 = goog.getObjectByName(fn_str_38576,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38577)].join(''));

(fn_obj_38578.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38578.cljs$core$IFn$_invoke$arity$2(path,new_link_38568) : fn_obj_38578.call(null,path,new_link_38568));


var G__38579 = seq__38310_38569;
var G__38580 = chunk__38312_38570;
var G__38581 = count__38313_38571;
var G__38582 = (i__38314_38572 + (1));
seq__38310_38569 = G__38579;
chunk__38312_38570 = G__38580;
count__38313_38571 = G__38581;
i__38314_38572 = G__38582;
continue;
} else {
var temp__5753__auto___38583__$1 = cljs.core.seq(seq__38310_38569);
if(temp__5753__auto___38583__$1){
var seq__38310_38584__$1 = temp__5753__auto___38583__$1;
if(cljs.core.chunked_seq_QMARK_(seq__38310_38584__$1)){
var c__4679__auto___38585 = cljs.core.chunk_first(seq__38310_38584__$1);
var G__38586 = cljs.core.chunk_rest(seq__38310_38584__$1);
var G__38587 = c__4679__auto___38585;
var G__38588 = cljs.core.count(c__4679__auto___38585);
var G__38589 = (0);
seq__38310_38569 = G__38586;
chunk__38312_38570 = G__38587;
count__38313_38571 = G__38588;
i__38314_38572 = G__38589;
continue;
} else {
var map__38319_38590 = cljs.core.first(seq__38310_38584__$1);
var map__38319_38591__$1 = cljs.core.__destructure_map(map__38319_38590);
var task_38592 = map__38319_38591__$1;
var fn_str_38593 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38319_38591__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38594 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38319_38591__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38595 = goog.getObjectByName(fn_str_38593,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38594)].join(''));

(fn_obj_38595.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38595.cljs$core$IFn$_invoke$arity$2(path,new_link_38568) : fn_obj_38595.call(null,path,new_link_38568));


var G__38596 = cljs.core.next(seq__38310_38584__$1);
var G__38597 = null;
var G__38598 = (0);
var G__38599 = (0);
seq__38310_38569 = G__38596;
chunk__38312_38570 = G__38597;
count__38313_38571 = G__38598;
i__38314_38572 = G__38599;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_38566);
});})(seq__38266_38562,chunk__38270_38563,count__38271_38564,i__38272_38565,seq__37959,chunk__37961,count__37962,i__37963,new_link_38568,path_match_38567,node_38566,path,seq__37959__$1,temp__5753__auto__,map__37958,map__37958__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_38567], 0));

goog.dom.insertSiblingAfter(new_link_38568,node_38566);


var G__38600 = seq__38266_38562;
var G__38601 = chunk__38270_38563;
var G__38602 = count__38271_38564;
var G__38603 = (i__38272_38565 + (1));
seq__38266_38562 = G__38600;
chunk__38270_38563 = G__38601;
count__38271_38564 = G__38602;
i__38272_38565 = G__38603;
continue;
} else {
var G__38604 = seq__38266_38562;
var G__38605 = chunk__38270_38563;
var G__38606 = count__38271_38564;
var G__38607 = (i__38272_38565 + (1));
seq__38266_38562 = G__38604;
chunk__38270_38563 = G__38605;
count__38271_38564 = G__38606;
i__38272_38565 = G__38607;
continue;
}
} else {
var G__38608 = seq__38266_38562;
var G__38609 = chunk__38270_38563;
var G__38610 = count__38271_38564;
var G__38611 = (i__38272_38565 + (1));
seq__38266_38562 = G__38608;
chunk__38270_38563 = G__38609;
count__38271_38564 = G__38610;
i__38272_38565 = G__38611;
continue;
}
} else {
var temp__5753__auto___38612__$1 = cljs.core.seq(seq__38266_38562);
if(temp__5753__auto___38612__$1){
var seq__38266_38613__$1 = temp__5753__auto___38612__$1;
if(cljs.core.chunked_seq_QMARK_(seq__38266_38613__$1)){
var c__4679__auto___38614 = cljs.core.chunk_first(seq__38266_38613__$1);
var G__38615 = cljs.core.chunk_rest(seq__38266_38613__$1);
var G__38616 = c__4679__auto___38614;
var G__38617 = cljs.core.count(c__4679__auto___38614);
var G__38618 = (0);
seq__38266_38562 = G__38615;
chunk__38270_38563 = G__38616;
count__38271_38564 = G__38617;
i__38272_38565 = G__38618;
continue;
} else {
var node_38619 = cljs.core.first(seq__38266_38613__$1);
if(cljs.core.not(node_38619.shadow$old)){
var path_match_38620 = shadow.cljs.devtools.client.browser.match_paths(node_38619.getAttribute("href"),path);
if(cljs.core.truth_(path_match_38620)){
var new_link_38621 = (function (){var G__38320 = node_38619.cloneNode(true);
G__38320.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_38620),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__38320;
})();
(node_38619.shadow$old = true);

(new_link_38621.onload = ((function (seq__38266_38562,chunk__38270_38563,count__38271_38564,i__38272_38565,seq__37959,chunk__37961,count__37962,i__37963,new_link_38621,path_match_38620,node_38619,seq__38266_38613__$1,temp__5753__auto___38612__$1,path,seq__37959__$1,temp__5753__auto__,map__37958,map__37958__$1,msg,updates,reload_info){
return (function (e){
var seq__38321_38622 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__38323_38623 = null;
var count__38324_38624 = (0);
var i__38325_38625 = (0);
while(true){
if((i__38325_38625 < count__38324_38624)){
var map__38331_38626 = chunk__38323_38623.cljs$core$IIndexed$_nth$arity$2(null,i__38325_38625);
var map__38331_38627__$1 = cljs.core.__destructure_map(map__38331_38626);
var task_38628 = map__38331_38627__$1;
var fn_str_38629 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38331_38627__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38630 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38331_38627__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38631 = goog.getObjectByName(fn_str_38629,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38630)].join(''));

(fn_obj_38631.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38631.cljs$core$IFn$_invoke$arity$2(path,new_link_38621) : fn_obj_38631.call(null,path,new_link_38621));


var G__38632 = seq__38321_38622;
var G__38633 = chunk__38323_38623;
var G__38634 = count__38324_38624;
var G__38635 = (i__38325_38625 + (1));
seq__38321_38622 = G__38632;
chunk__38323_38623 = G__38633;
count__38324_38624 = G__38634;
i__38325_38625 = G__38635;
continue;
} else {
var temp__5753__auto___38636__$2 = cljs.core.seq(seq__38321_38622);
if(temp__5753__auto___38636__$2){
var seq__38321_38637__$1 = temp__5753__auto___38636__$2;
if(cljs.core.chunked_seq_QMARK_(seq__38321_38637__$1)){
var c__4679__auto___38638 = cljs.core.chunk_first(seq__38321_38637__$1);
var G__38639 = cljs.core.chunk_rest(seq__38321_38637__$1);
var G__38640 = c__4679__auto___38638;
var G__38641 = cljs.core.count(c__4679__auto___38638);
var G__38642 = (0);
seq__38321_38622 = G__38639;
chunk__38323_38623 = G__38640;
count__38324_38624 = G__38641;
i__38325_38625 = G__38642;
continue;
} else {
var map__38332_38643 = cljs.core.first(seq__38321_38637__$1);
var map__38332_38644__$1 = cljs.core.__destructure_map(map__38332_38643);
var task_38645 = map__38332_38644__$1;
var fn_str_38646 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38332_38644__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38647 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38332_38644__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38648 = goog.getObjectByName(fn_str_38646,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38647)].join(''));

(fn_obj_38648.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38648.cljs$core$IFn$_invoke$arity$2(path,new_link_38621) : fn_obj_38648.call(null,path,new_link_38621));


var G__38649 = cljs.core.next(seq__38321_38637__$1);
var G__38650 = null;
var G__38651 = (0);
var G__38652 = (0);
seq__38321_38622 = G__38649;
chunk__38323_38623 = G__38650;
count__38324_38624 = G__38651;
i__38325_38625 = G__38652;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_38619);
});})(seq__38266_38562,chunk__38270_38563,count__38271_38564,i__38272_38565,seq__37959,chunk__37961,count__37962,i__37963,new_link_38621,path_match_38620,node_38619,seq__38266_38613__$1,temp__5753__auto___38612__$1,path,seq__37959__$1,temp__5753__auto__,map__37958,map__37958__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_38620], 0));

goog.dom.insertSiblingAfter(new_link_38621,node_38619);


var G__38653 = cljs.core.next(seq__38266_38613__$1);
var G__38654 = null;
var G__38655 = (0);
var G__38656 = (0);
seq__38266_38562 = G__38653;
chunk__38270_38563 = G__38654;
count__38271_38564 = G__38655;
i__38272_38565 = G__38656;
continue;
} else {
var G__38657 = cljs.core.next(seq__38266_38613__$1);
var G__38658 = null;
var G__38659 = (0);
var G__38660 = (0);
seq__38266_38562 = G__38657;
chunk__38270_38563 = G__38658;
count__38271_38564 = G__38659;
i__38272_38565 = G__38660;
continue;
}
} else {
var G__38661 = cljs.core.next(seq__38266_38613__$1);
var G__38662 = null;
var G__38663 = (0);
var G__38664 = (0);
seq__38266_38562 = G__38661;
chunk__38270_38563 = G__38662;
count__38271_38564 = G__38663;
i__38272_38565 = G__38664;
continue;
}
}
} else {
}
}
break;
}


var G__38665 = cljs.core.next(seq__37959__$1);
var G__38666 = null;
var G__38667 = (0);
var G__38668 = (0);
seq__37959 = G__38665;
chunk__37961 = G__38666;
count__37962 = G__38667;
i__37963 = G__38668;
continue;
} else {
var G__38669 = cljs.core.next(seq__37959__$1);
var G__38670 = null;
var G__38671 = (0);
var G__38672 = (0);
seq__37959 = G__38669;
chunk__37961 = G__38670;
count__37962 = G__38671;
i__37963 = G__38672;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__38339){
var map__38340 = p__38339;
var map__38340__$1 = cljs.core.__destructure_map(map__38340);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38340__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__38345){
var map__38347 = p__38345;
var map__38347__$1 = cljs.core.__destructure_map(map__38347);
var _ = map__38347__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38347__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__38348,done,error){
var map__38349 = p__38348;
var map__38349__$1 = cljs.core.__destructure_map(map__38349);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38349__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__38350,done,error){
var map__38351 = p__38350;
var map__38351__$1 = cljs.core.__destructure_map(map__38351);
var msg = map__38351__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38351__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38351__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38351__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__38353){
var map__38354 = p__38353;
var map__38354__$1 = cljs.core.__destructure_map(map__38354);
var src = map__38354__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38354__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4251__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4251__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__38355 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__38355) : done.call(null,G__38355));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__38356){
var map__38357 = p__38356;
var map__38357__$1 = cljs.core.__destructure_map(map__38357);
var msg__$1 = map__38357__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38357__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e38358){var ex = e38358;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__38359){
var map__38360 = p__38359;
var map__38360__$1 = cljs.core.__destructure_map(map__38360);
var env = map__38360__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38360__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__38365){
var map__38366 = p__38365;
var map__38366__$1 = cljs.core.__destructure_map(map__38366);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38366__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38366__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__38367){
var map__38368 = p__38367;
var map__38368__$1 = cljs.core.__destructure_map(map__38368);
var svc = map__38368__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38368__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
