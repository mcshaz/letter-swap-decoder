(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function t(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerpolicy&&(i.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?i.credentials="include":a.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(a){if(a.ep)return;a.ep=!0;const i=t(a);fetch(a.href,i)}})();function Qi(e,r){const t=Object.create(null),n=e.split(",");for(let a=0;a<n.length;a++)t[n[a]]=!0;return r?a=>!!t[a.toLowerCase()]:a=>!!t[a]}const t1="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",n1=Qi(t1);function po(e){return!!e||e===""}function qn(e){if(R(e)){const r={};for(let t=0;t<e.length;t++){const n=e[t],a=ce(n)?s1(n):qn(n);if(a)for(const i in a)r[i]=a[i]}return r}else{if(ce(e))return e;if(J(e))return e}}const i1=/;(?![^(]*\))/g,a1=/:(.+)/;function s1(e){const r={};return e.split(i1).forEach(t=>{if(t){const n=t.split(a1);n.length>1&&(r[n[0].trim()]=n[1].trim())}}),r}function ar(e){let r="";if(ce(e))r=e;else if(R(e))for(let t=0;t<e.length;t++){const n=ar(e[t]);n&&(r+=n+" ")}else if(J(e))for(const t in e)e[t]&&(r+=t+" ");return r.trim()}const fe=e=>ce(e)?e:e==null?"":R(e)||J(e)&&(e.toString===ho||!U(e.toString))?JSON.stringify(e,$o,2):String(e),$o=(e,r)=>r&&r.__v_isRef?$o(e,r.value):rt(r)?{[`Map(${r.size})`]:[...r.entries()].reduce((t,[n,a])=>(t[`${n} =>`]=a,t),{})}:mo(r)?{[`Set(${r.size})`]:[...r.values()]}:J(r)&&!R(r)&&!go(r)?String(r):r,q={},et=[],Ue=()=>{},l1=()=>!1,o1=/^on[^a-z]/,Qn=e=>o1.test(e),Yi=e=>e.startsWith("onUpdate:"),de=Object.assign,Zi=(e,r)=>{const t=e.indexOf(r);t>-1&&e.splice(t,1)},f1=Object.prototype.hasOwnProperty,K=(e,r)=>f1.call(e,r),R=Array.isArray,rt=e=>Yn(e)==="[object Map]",mo=e=>Yn(e)==="[object Set]",U=e=>typeof e=="function",ce=e=>typeof e=="string",Ji=e=>typeof e=="symbol",J=e=>e!==null&&typeof e=="object",_o=e=>J(e)&&U(e.then)&&U(e.catch),ho=Object.prototype.toString,Yn=e=>ho.call(e),u1=e=>Yn(e).slice(8,-1),go=e=>Yn(e)==="[object Object]",zi=e=>ce(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Hn=Qi(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Zn=e=>{const r=Object.create(null);return t=>r[t]||(r[t]=e(t))},c1=/-(\w)/g,at=Zn(e=>e.replace(c1,(r,t)=>t?t.toUpperCase():"")),v1=/\B([A-Z])/g,ot=Zn(e=>e.replace(v1,"-$1").toLowerCase()),yo=Zn(e=>e.charAt(0).toUpperCase()+e.slice(1)),d0=Zn(e=>e?`on${yo(e)}`:""),Dt=(e,r)=>!Object.is(e,r),Rn=(e,r)=>{for(let t=0;t<e.length;t++)e[t](r)},Wn=(e,r,t)=>{Object.defineProperty(e,r,{configurable:!0,enumerable:!1,value:t})},Bn=e=>{const r=parseFloat(e);return isNaN(r)?e:r};let Pa;const p1=()=>Pa||(Pa=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Qe;class d1{constructor(r=!1){this.detached=r,this.active=!0,this.effects=[],this.cleanups=[],this.parent=Qe,!r&&Qe&&(this.index=(Qe.scopes||(Qe.scopes=[])).push(this)-1)}run(r){if(this.active){const t=Qe;try{return Qe=this,r()}finally{Qe=t}}}on(){Qe=this}off(){Qe=this.parent}stop(r){if(this.active){let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!r){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0,this.active=!1}}}function $1(e,r=Qe){r&&r.active&&r.effects.push(e)}const xi=e=>{const r=new Set(e);return r.w=0,r.n=0,r},bo=e=>(e.w&Nr)>0,Io=e=>(e.n&Nr)>0,m1=({deps:e})=>{if(e.length)for(let r=0;r<e.length;r++)e[r].w|=Nr},_1=e=>{const{deps:r}=e;if(r.length){let t=0;for(let n=0;n<r.length;n++){const a=r[n];bo(a)&&!Io(a)?a.delete(e):r[t++]=a,a.w&=~Nr,a.n&=~Nr}r.length=t}},mi=new WeakMap;let Ht=0,Nr=1;const _i=30;let He;const Gr=Symbol(""),hi=Symbol("");class ea{constructor(r,t=null,n){this.fn=r,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,$1(this,n)}run(){if(!this.active)return this.fn();let r=He,t=Ir;for(;r;){if(r===this)return;r=r.parent}try{return this.parent=He,He=this,Ir=!0,Nr=1<<++Ht,Ht<=_i?m1(this):Ma(this),this.fn()}finally{Ht<=_i&&_1(this),Nr=1<<--Ht,He=this.parent,Ir=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){He===this?this.deferStop=!0:this.active&&(Ma(this),this.onStop&&this.onStop(),this.active=!1)}}function Ma(e){const{deps:r}=e;if(r.length){for(let t=0;t<r.length;t++)r[t].delete(e);r.length=0}}let Ir=!0;const Ao=[];function ft(){Ao.push(Ir),Ir=!1}function ut(){const e=Ao.pop();Ir=e===void 0?!0:e}function Ne(e,r,t){if(Ir&&He){let n=mi.get(e);n||mi.set(e,n=new Map);let a=n.get(t);a||n.set(t,a=xi()),No(a)}}function No(e,r){let t=!1;Ht<=_i?Io(e)||(e.n|=Nr,t=!bo(e)):t=!e.has(He),t&&(e.add(He),He.deps.push(e))}function lr(e,r,t,n,a,i){const s=mi.get(e);if(!s)return;let l=[];if(r==="clear")l=[...s.values()];else if(t==="length"&&R(e))s.forEach((o,u)=>{(u==="length"||u>=n)&&l.push(o)});else switch(t!==void 0&&l.push(s.get(t)),r){case"add":R(e)?zi(t)&&l.push(s.get("length")):(l.push(s.get(Gr)),rt(e)&&l.push(s.get(hi)));break;case"delete":R(e)||(l.push(s.get(Gr)),rt(e)&&l.push(s.get(hi)));break;case"set":rt(e)&&l.push(s.get(Gr));break}if(l.length===1)l[0]&&gi(l[0]);else{const o=[];for(const u of l)u&&o.push(...u);gi(xi(o))}}function gi(e,r){const t=R(e)?e:[...e];for(const n of t)n.computed&&Ha(n);for(const n of t)n.computed||Ha(n)}function Ha(e,r){(e!==He||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const h1=Qi("__proto__,__v_isRef,__isVue"),Eo=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Ji)),g1=ra(),y1=ra(!1,!0),b1=ra(!0),Ra=I1();function I1(){const e={};return["includes","indexOf","lastIndexOf"].forEach(r=>{e[r]=function(...t){const n=X(this);for(let i=0,s=this.length;i<s;i++)Ne(n,"get",i+"");const a=n[r](...t);return a===-1||a===!1?n[r](...t.map(X)):a}}),["push","pop","shift","unshift","splice"].forEach(r=>{e[r]=function(...t){ft();const n=X(this)[r].apply(this,t);return ut(),n}}),e}function ra(e=!1,r=!1){return function(n,a,i){if(a==="__v_isReactive")return!e;if(a==="__v_isReadonly")return e;if(a==="__v_isShallow")return r;if(a==="__v_raw"&&i===(e?r?U1:Fo:r?wo:So).get(n))return n;const s=R(n);if(!e&&s&&K(Ra,a))return Reflect.get(Ra,a,i);const l=Reflect.get(n,a,i);return(Ji(a)?Eo.has(a):h1(a))||(e||Ne(n,"get",a),r)?l:_e(l)?s&&zi(a)?l:l.value:J(l)?e?Lo(l):zn(l):l}}const A1=To(),N1=To(!0);function To(e=!1){return function(t,n,a,i){let s=t[n];if(st(s)&&_e(s)&&!_e(a))return!1;if(!e&&(!Gn(a)&&!st(a)&&(s=X(s),a=X(a)),!R(t)&&_e(s)&&!_e(a)))return s.value=a,!0;const l=R(t)&&zi(n)?Number(n)<t.length:K(t,n),o=Reflect.set(t,n,a,i);return t===X(i)&&(l?Dt(a,s)&&lr(t,"set",n,a):lr(t,"add",n,a)),o}}function E1(e,r){const t=K(e,r);e[r];const n=Reflect.deleteProperty(e,r);return n&&t&&lr(e,"delete",r,void 0),n}function T1(e,r){const t=Reflect.has(e,r);return(!Ji(r)||!Eo.has(r))&&Ne(e,"has",r),t}function O1(e){return Ne(e,"iterate",R(e)?"length":Gr),Reflect.ownKeys(e)}const Oo={get:g1,set:A1,deleteProperty:E1,has:T1,ownKeys:O1},S1={get:b1,set(e,r){return!0},deleteProperty(e,r){return!0}},w1=de({},Oo,{get:y1,set:N1}),ta=e=>e,Jn=e=>Reflect.getPrototypeOf(e);function rn(e,r,t=!1,n=!1){e=e.__v_raw;const a=X(e),i=X(r);t||(r!==i&&Ne(a,"get",r),Ne(a,"get",i));const{has:s}=Jn(a),l=n?ta:t?aa:Ut;if(s.call(a,r))return l(e.get(r));if(s.call(a,i))return l(e.get(i));e!==a&&e.get(r)}function tn(e,r=!1){const t=this.__v_raw,n=X(t),a=X(e);return r||(e!==a&&Ne(n,"has",e),Ne(n,"has",a)),e===a?t.has(e):t.has(e)||t.has(a)}function nn(e,r=!1){return e=e.__v_raw,!r&&Ne(X(e),"iterate",Gr),Reflect.get(e,"size",e)}function Da(e){e=X(e);const r=X(this);return Jn(r).has.call(r,e)||(r.add(e),lr(r,"add",e,e)),this}function Ua(e,r){r=X(r);const t=X(this),{has:n,get:a}=Jn(t);let i=n.call(t,e);i||(e=X(e),i=n.call(t,e));const s=a.call(t,e);return t.set(e,r),i?Dt(r,s)&&lr(t,"set",e,r):lr(t,"add",e,r),this}function Wa(e){const r=X(this),{has:t,get:n}=Jn(r);let a=t.call(r,e);a||(e=X(e),a=t.call(r,e)),n&&n.call(r,e);const i=r.delete(e);return a&&lr(r,"delete",e,void 0),i}function Ba(){const e=X(this),r=e.size!==0,t=e.clear();return r&&lr(e,"clear",void 0,void 0),t}function an(e,r){return function(n,a){const i=this,s=i.__v_raw,l=X(s),o=r?ta:e?aa:Ut;return!e&&Ne(l,"iterate",Gr),s.forEach((u,f)=>n.call(a,o(u),o(f),i))}}function sn(e,r,t){return function(...n){const a=this.__v_raw,i=X(a),s=rt(i),l=e==="entries"||e===Symbol.iterator&&s,o=e==="keys"&&s,u=a[e](...n),f=t?ta:r?aa:Ut;return!r&&Ne(i,"iterate",o?hi:Gr),{next(){const{value:c,done:v}=u.next();return v?{value:c,done:v}:{value:l?[f(c[0]),f(c[1])]:f(c),done:v}},[Symbol.iterator](){return this}}}}function ur(e){return function(...r){return e==="delete"?!1:this}}function F1(){const e={get(i){return rn(this,i)},get size(){return nn(this)},has:tn,add:Da,set:Ua,delete:Wa,clear:Ba,forEach:an(!1,!1)},r={get(i){return rn(this,i,!1,!0)},get size(){return nn(this)},has:tn,add:Da,set:Ua,delete:Wa,clear:Ba,forEach:an(!1,!0)},t={get(i){return rn(this,i,!0)},get size(){return nn(this,!0)},has(i){return tn.call(this,i,!0)},add:ur("add"),set:ur("set"),delete:ur("delete"),clear:ur("clear"),forEach:an(!0,!1)},n={get(i){return rn(this,i,!0,!0)},get size(){return nn(this,!0)},has(i){return tn.call(this,i,!0)},add:ur("add"),set:ur("set"),delete:ur("delete"),clear:ur("clear"),forEach:an(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=sn(i,!1,!1),t[i]=sn(i,!0,!1),r[i]=sn(i,!1,!0),n[i]=sn(i,!0,!0)}),[e,t,r,n]}const[L1,C1,P1,M1]=F1();function na(e,r){const t=r?e?M1:P1:e?C1:L1;return(n,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?n:Reflect.get(K(t,a)&&a in n?t:n,a,i)}const H1={get:na(!1,!1)},R1={get:na(!1,!0)},D1={get:na(!0,!1)},So=new WeakMap,wo=new WeakMap,Fo=new WeakMap,U1=new WeakMap;function W1(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function B1(e){return e.__v_skip||!Object.isExtensible(e)?0:W1(u1(e))}function zn(e){return st(e)?e:ia(e,!1,Oo,H1,So)}function G1(e){return ia(e,!1,w1,R1,wo)}function Lo(e){return ia(e,!0,S1,D1,Fo)}function ia(e,r,t,n,a){if(!J(e)||e.__v_raw&&!(r&&e.__v_isReactive))return e;const i=a.get(e);if(i)return i;const s=B1(e);if(s===0)return e;const l=new Proxy(e,s===2?n:t);return a.set(e,l),l}function tt(e){return st(e)?tt(e.__v_raw):!!(e&&e.__v_isReactive)}function st(e){return!!(e&&e.__v_isReadonly)}function Gn(e){return!!(e&&e.__v_isShallow)}function Co(e){return tt(e)||st(e)}function X(e){const r=e&&e.__v_raw;return r?X(r):e}function Po(e){return Wn(e,"__v_skip",!0),e}const Ut=e=>J(e)?zn(e):e,aa=e=>J(e)?Lo(e):e;function Mo(e){Ir&&He&&(e=X(e),No(e.dep||(e.dep=xi())))}function Ho(e,r){e=X(e),e.dep&&gi(e.dep)}function _e(e){return!!(e&&e.__v_isRef===!0)}function xr(e){return K1(e,!1)}function K1(e,r){return _e(e)?e:new k1(e,r)}class k1{constructor(r,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?r:X(r),this._value=t?r:Ut(r)}get value(){return Mo(this),this._value}set value(r){const t=this.__v_isShallow||Gn(r)||st(r);r=t?r:X(r),Dt(r,this._rawValue)&&(this._rawValue=r,this._value=t?r:Ut(r),Ho(this))}}function sr(e){return _e(e)?e.value:e}const V1={get:(e,r,t)=>sr(Reflect.get(e,r,t)),set:(e,r,t,n)=>{const a=e[r];return _e(a)&&!_e(t)?(a.value=t,!0):Reflect.set(e,r,t,n)}};function Ro(e){return tt(e)?e:new Proxy(e,V1)}var Do;class X1{constructor(r,t,n,a){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this[Do]=!1,this._dirty=!0,this.effect=new ea(r,()=>{this._dirty||(this._dirty=!0,Ho(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=n}get value(){const r=X(this);return Mo(r),(r._dirty||!r._cacheable)&&(r._dirty=!1,r._value=r.effect.run()),r._value}set value(r){this._setter(r)}}Do="__v_isReadonly";function j1(e,r,t=!1){let n,a;const i=U(e);return i?(n=e,a=Ue):(n=e.get,a=e.set),new X1(n,a,i||!a,t)}function Ar(e,r,t,n){let a;try{a=n?e(...n):e()}catch(i){xn(i,r,t)}return a}function we(e,r,t,n){if(U(e)){const i=Ar(e,r,t,n);return i&&_o(i)&&i.catch(s=>{xn(s,r,t)}),i}const a=[];for(let i=0;i<e.length;i++)a.push(we(e[i],r,t,n));return a}function xn(e,r,t,n=!0){const a=r?r.vnode:null;if(r){let i=r.parent;const s=r.proxy,l=t;for(;i;){const u=i.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](e,s,l)===!1)return}i=i.parent}const o=r.appContext.config.errorHandler;if(o){Ar(o,null,10,[e,s,l]);return}}q1(e,t,a,n)}function q1(e,r,t,n=!0){console.error(e)}let Wt=!1,yi=!1;const me=[];let Ze=0;const nt=[];let ir=null,Rr=0;const Uo=Promise.resolve();let sa=null;function Q1(e){const r=sa||Uo;return e?r.then(this?e.bind(this):e):r}function Y1(e){let r=Ze+1,t=me.length;for(;r<t;){const n=r+t>>>1;Bt(me[n])<e?r=n+1:t=n}return r}function la(e){(!me.length||!me.includes(e,Wt&&e.allowRecurse?Ze+1:Ze))&&(e.id==null?me.push(e):me.splice(Y1(e.id),0,e),Wo())}function Wo(){!Wt&&!yi&&(yi=!0,sa=Uo.then(Go))}function Z1(e){const r=me.indexOf(e);r>Ze&&me.splice(r,1)}function J1(e){R(e)?nt.push(...e):(!ir||!ir.includes(e,e.allowRecurse?Rr+1:Rr))&&nt.push(e),Wo()}function Ga(e,r=Wt?Ze+1:0){for(;r<me.length;r++){const t=me[r];t&&t.pre&&(me.splice(r,1),r--,t())}}function Bo(e){if(nt.length){const r=[...new Set(nt)];if(nt.length=0,ir){ir.push(...r);return}for(ir=r,ir.sort((t,n)=>Bt(t)-Bt(n)),Rr=0;Rr<ir.length;Rr++)ir[Rr]();ir=null,Rr=0}}const Bt=e=>e.id==null?1/0:e.id,z1=(e,r)=>{const t=Bt(e)-Bt(r);if(t===0){if(e.pre&&!r.pre)return-1;if(r.pre&&!e.pre)return 1}return t};function Go(e){yi=!1,Wt=!0,me.sort(z1);const r=Ue;try{for(Ze=0;Ze<me.length;Ze++){const t=me[Ze];t&&t.active!==!1&&Ar(t,null,14)}}finally{Ze=0,me.length=0,Bo(),Wt=!1,sa=null,(me.length||nt.length)&&Go()}}function x1(e,r,...t){if(e.isUnmounted)return;const n=e.vnode.props||q;let a=t;const i=r.startsWith("update:"),s=i&&r.slice(7);if(s&&s in n){const f=`${s==="modelValue"?"model":s}Modifiers`,{number:c,trim:v}=n[f]||q;v&&(a=t.map(d=>d.trim())),c&&(a=t.map(Bn))}let l,o=n[l=d0(r)]||n[l=d0(at(r))];!o&&i&&(o=n[l=d0(ot(r))]),o&&we(o,e,6,a);const u=n[l+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[l])return;e.emitted[l]=!0,we(u,e,6,a)}}function Ko(e,r,t=!1){const n=r.emitsCache,a=n.get(e);if(a!==void 0)return a;const i=e.emits;let s={},l=!1;if(!U(e)){const o=u=>{const f=Ko(u,r,!0);f&&(l=!0,de(s,f))};!t&&r.mixins.length&&r.mixins.forEach(o),e.extends&&o(e.extends),e.mixins&&e.mixins.forEach(o)}return!i&&!l?(J(e)&&n.set(e,null),null):(R(i)?i.forEach(o=>s[o]=null):de(s,i),J(e)&&n.set(e,s),s)}function e0(e,r){return!e||!Qn(r)?!1:(r=r.slice(2).replace(/Once$/,""),K(e,r[0].toLowerCase()+r.slice(1))||K(e,ot(r))||K(e,r))}let Re=null,r0=null;function Kn(e){const r=Re;return Re=e,r0=e&&e.type.__scopeId||null,r}function oa(e){r0=e}function fa(){r0=null}function ko(e,r=Re,t){if(!r||e._n)return e;const n=(...a)=>{n._d&&Ja(-1);const i=Kn(r);let s;try{s=e(...a)}finally{Kn(i),n._d&&Ja(1)}return s};return n._n=!0,n._c=!0,n._d=!0,n}function $0(e){const{type:r,vnode:t,proxy:n,withProxy:a,props:i,propsOptions:[s],slots:l,attrs:o,emit:u,render:f,renderCache:c,data:v,setupState:d,ctx:_,inheritAttrs:h}=e;let T,I;const M=Kn(e);try{if(t.shapeFlag&4){const B=a||n;T=Ye(f.call(B,B,c,i,d,v,_)),I=o}else{const B=r;T=Ye(B.length>1?B(i,{attrs:o,slots:l,emit:u}):B(i,null)),I=r.props?o:eu(o)}}catch(B){Rt.length=0,xn(B,e,1),T=ue(We)}let N=T;if(I&&h!==!1){const B=Object.keys(I),{shapeFlag:W}=N;B.length&&W&7&&(s&&B.some(Yi)&&(I=ru(I,s)),N=Er(N,I))}return t.dirs&&(N=Er(N),N.dirs=N.dirs?N.dirs.concat(t.dirs):t.dirs),t.transition&&(N.transition=t.transition),T=N,Kn(M),T}const eu=e=>{let r;for(const t in e)(t==="class"||t==="style"||Qn(t))&&((r||(r={}))[t]=e[t]);return r},ru=(e,r)=>{const t={};for(const n in e)(!Yi(n)||!(n.slice(9)in r))&&(t[n]=e[n]);return t};function tu(e,r,t){const{props:n,children:a,component:i}=e,{props:s,children:l,patchFlag:o}=r,u=i.emitsOptions;if(r.dirs||r.transition)return!0;if(t&&o>=0){if(o&1024)return!0;if(o&16)return n?Ka(n,s,u):!!s;if(o&8){const f=r.dynamicProps;for(let c=0;c<f.length;c++){const v=f[c];if(s[v]!==n[v]&&!e0(u,v))return!0}}}else return(a||l)&&(!l||!l.$stable)?!0:n===s?!1:n?s?Ka(n,s,u):!0:!!s;return!1}function Ka(e,r,t){const n=Object.keys(r);if(n.length!==Object.keys(e).length)return!0;for(let a=0;a<n.length;a++){const i=n[a];if(r[i]!==e[i]&&!e0(t,i))return!0}return!1}function nu({vnode:e,parent:r},t){for(;r&&r.subTree===e;)(e=r.vnode).el=t,r=r.parent}const iu=e=>e.__isSuspense;function au(e,r){r&&r.pendingBranch?R(e)?r.effects.push(...e):r.effects.push(e):J1(e)}function su(e,r){if(pe){let t=pe.provides;const n=pe.parent&&pe.parent.provides;n===t&&(t=pe.provides=Object.create(n)),t[e]=r}}function m0(e,r,t=!1){const n=pe||Re;if(n){const a=n.parent==null?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides;if(a&&e in a)return a[e];if(arguments.length>1)return t&&U(r)?r.call(n.proxy):r}}const ka={};function _0(e,r,t){return Vo(e,r,t)}function Vo(e,r,{immediate:t,deep:n,flush:a,onTrack:i,onTrigger:s}=q){const l=pe;let o,u=!1,f=!1;if(_e(e)?(o=()=>e.value,u=Gn(e)):tt(e)?(o=()=>e,n=!0):R(e)?(f=!0,u=e.some(I=>tt(I)||Gn(I)),o=()=>e.map(I=>{if(_e(I))return I.value;if(tt(I))return Wr(I);if(U(I))return Ar(I,l,2)})):U(e)?r?o=()=>Ar(e,l,2):o=()=>{if(!(l&&l.isUnmounted))return c&&c(),we(e,l,3,[v])}:o=Ue,r&&n){const I=o;o=()=>Wr(I())}let c,v=I=>{c=T.onStop=()=>{Ar(I,l,4)}};if(Kt)return v=Ue,r?t&&we(r,l,3,[o(),f?[]:void 0,v]):o(),Ue;let d=f?[]:ka;const _=()=>{if(!!T.active)if(r){const I=T.run();(n||u||(f?I.some((M,N)=>Dt(M,d[N])):Dt(I,d)))&&(c&&c(),we(r,l,3,[I,d===ka?void 0:d,v]),d=I)}else T.run()};_.allowRecurse=!!r;let h;a==="sync"?h=_:a==="post"?h=()=>ye(_,l&&l.suspense):(_.pre=!0,l&&(_.id=l.uid),h=()=>la(_));const T=new ea(o,h);return r?t?_():d=T.run():a==="post"?ye(T.run.bind(T),l&&l.suspense):T.run(),()=>{T.stop(),l&&l.scope&&Zi(l.scope.effects,T)}}function lu(e,r,t){const n=this.proxy,a=ce(e)?e.includes(".")?Xo(n,e):()=>n[e]:e.bind(n,n);let i;U(r)?i=r:(i=r.handler,t=r);const s=pe;lt(this);const l=Vo(a,i.bind(n),t);return s?lt(s):Kr(),l}function Xo(e,r){const t=r.split(".");return()=>{let n=e;for(let a=0;a<t.length&&n;a++)n=n[t[a]];return n}}function Wr(e,r){if(!J(e)||e.__v_skip||(r=r||new Set,r.has(e)))return e;if(r.add(e),_e(e))Wr(e.value,r);else if(R(e))for(let t=0;t<e.length;t++)Wr(e[t],r);else if(mo(e)||rt(e))e.forEach(t=>{Wr(t,r)});else if(go(e))for(const t in e)Wr(e[t],r);return e}function ou(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ua(()=>{e.isMounted=!0}),Zo(()=>{e.isUnmounting=!0}),e}const Te=[Function,Array],fu={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Te,onEnter:Te,onAfterEnter:Te,onEnterCancelled:Te,onBeforeLeave:Te,onLeave:Te,onAfterLeave:Te,onLeaveCancelled:Te,onBeforeAppear:Te,onAppear:Te,onAfterAppear:Te,onAppearCancelled:Te},setup(e,{slots:r}){const t=Qu(),n=ou();let a;return()=>{const i=r.default&&Qo(r.default(),!0);if(!i||!i.length)return;let s=i[0];if(i.length>1){for(const h of i)if(h.type!==We){s=h;break}}const l=X(e),{mode:o}=l;if(n.isLeaving)return h0(s);const u=Va(s);if(!u)return h0(s);const f=bi(u,l,n,t);Ii(u,f);const c=t.subTree,v=c&&Va(c);let d=!1;const{getTransitionKey:_}=u.type;if(_){const h=_();a===void 0?a=h:h!==a&&(a=h,d=!0)}if(v&&v.type!==We&&(!Dr(u,v)||d)){const h=bi(v,l,n,t);if(Ii(v,h),o==="out-in")return n.isLeaving=!0,h.afterLeave=()=>{n.isLeaving=!1,t.update()},h0(s);o==="in-out"&&u.type!==We&&(h.delayLeave=(T,I,M)=>{const N=qo(n,v);N[String(v.key)]=v,T._leaveCb=()=>{I(),T._leaveCb=void 0,delete f.delayedLeave},f.delayedLeave=M})}return s}}},jo=fu;function qo(e,r){const{leavingVNodes:t}=e;let n=t.get(r.type);return n||(n=Object.create(null),t.set(r.type,n)),n}function bi(e,r,t,n){const{appear:a,mode:i,persisted:s=!1,onBeforeEnter:l,onEnter:o,onAfterEnter:u,onEnterCancelled:f,onBeforeLeave:c,onLeave:v,onAfterLeave:d,onLeaveCancelled:_,onBeforeAppear:h,onAppear:T,onAfterAppear:I,onAppearCancelled:M}=r,N=String(e.key),B=qo(t,e),W=(P,re)=>{P&&we(P,n,9,re)},ae=(P,re)=>{const Z=re[1];W(P,re),R(P)?P.every($e=>$e.length<=1)&&Z():P.length<=1&&Z()},ee={mode:i,persisted:s,beforeEnter(P){let re=l;if(!t.isMounted)if(a)re=h||l;else return;P._leaveCb&&P._leaveCb(!0);const Z=B[N];Z&&Dr(e,Z)&&Z.el._leaveCb&&Z.el._leaveCb(),W(re,[P])},enter(P){let re=o,Z=u,$e=f;if(!t.isMounted)if(a)re=T||o,Z=I||u,$e=M||f;else return;let F=!1;const z=P._enterCb=Ie=>{F||(F=!0,Ie?W($e,[P]):W(Z,[P]),ee.delayedLeave&&ee.delayedLeave(),P._enterCb=void 0)};re?ae(re,[P,z]):z()},leave(P,re){const Z=String(e.key);if(P._enterCb&&P._enterCb(!0),t.isUnmounting)return re();W(c,[P]);let $e=!1;const F=P._leaveCb=z=>{$e||($e=!0,re(),z?W(_,[P]):W(d,[P]),P._leaveCb=void 0,B[Z]===e&&delete B[Z])};B[Z]=e,v?ae(v,[P,F]):F()},clone(P){return bi(P,r,t,n)}};return ee}function h0(e){if(t0(e))return e=Er(e),e.children=null,e}function Va(e){return t0(e)?e.children?e.children[0]:void 0:e}function Ii(e,r){e.shapeFlag&6&&e.component?Ii(e.component.subTree,r):e.shapeFlag&128?(e.ssContent.transition=r.clone(e.ssContent),e.ssFallback.transition=r.clone(e.ssFallback)):e.transition=r}function Qo(e,r=!1,t){let n=[],a=0;for(let i=0;i<e.length;i++){let s=e[i];const l=t==null?s.key:String(t)+String(s.key!=null?s.key:i);s.type===x?(s.patchFlag&128&&a++,n=n.concat(Qo(s.children,r,l))):(r||s.type!==We)&&n.push(l!=null?Er(s,{key:l}):s)}if(a>1)for(let i=0;i<n.length;i++)n[i].patchFlag=-2;return n}function kt(e){return U(e)?{setup:e,name:e.name}:e}const Dn=e=>!!e.type.__asyncLoader,t0=e=>e.type.__isKeepAlive;function uu(e,r){Yo(e,"a",r)}function cu(e,r){Yo(e,"da",r)}function Yo(e,r,t=pe){const n=e.__wdc||(e.__wdc=()=>{let a=t;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(n0(r,n,t),t){let a=t.parent;for(;a&&a.parent;)t0(a.parent.vnode)&&vu(n,r,t,a),a=a.parent}}function vu(e,r,t,n){const a=n0(r,e,n,!0);ca(()=>{Zi(n[r],a)},t)}function n0(e,r,t=pe,n=!1){if(t){const a=t[e]||(t[e]=[]),i=r.__weh||(r.__weh=(...s)=>{if(t.isUnmounted)return;ft(),lt(t);const l=we(r,t,e,s);return Kr(),ut(),l});return n?a.unshift(i):a.push(i),i}}const or=e=>(r,t=pe)=>(!Kt||e==="sp")&&n0(e,(...n)=>r(...n),t),pu=or("bm"),ua=or("m"),du=or("bu"),$u=or("u"),Zo=or("bum"),ca=or("um"),mu=or("sp"),_u=or("rtg"),hu=or("rtc");function gu(e,r=pe){n0("ec",e,r)}function yu(e,r){const t=Re;if(t===null)return e;const n=a0(t)||t.proxy,a=e.dirs||(e.dirs=[]);for(let i=0;i<r.length;i++){let[s,l,o,u=q]=r[i];U(s)&&(s={mounted:s,updated:s}),s.deep&&Wr(l),a.push({dir:s,instance:n,value:l,oldValue:void 0,arg:o,modifiers:u})}return e}function Fr(e,r,t,n){const a=e.dirs,i=r&&r.dirs;for(let s=0;s<a.length;s++){const l=a[s];i&&(l.oldValue=i[s].value);let o=l.dir[n];o&&(ft(),we(o,t,8,[e.el,l,e,r]),ut())}}const bu=Symbol();function Je(e,r,t,n){let a;const i=t&&t[n];if(R(e)||ce(e)){a=new Array(e.length);for(let s=0,l=e.length;s<l;s++)a[s]=r(e[s],s,void 0,i&&i[s])}else if(typeof e=="number"){a=new Array(e);for(let s=0;s<e;s++)a[s]=r(s+1,s,void 0,i&&i[s])}else if(J(e))if(e[Symbol.iterator])a=Array.from(e,(s,l)=>r(s,l,void 0,i&&i[l]));else{const s=Object.keys(e);a=new Array(s.length);for(let l=0,o=s.length;l<o;l++){const u=s[l];a[l]=r(e[u],u,l,i&&i[l])}}else a=[];return t&&(t[n]=a),a}const Ai=e=>e?of(e)?a0(e)||e.proxy:Ai(e.parent):null,kn=de(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Ai(e.parent),$root:e=>Ai(e.root),$emit:e=>e.emit,$options:e=>va(e),$forceUpdate:e=>e.f||(e.f=()=>la(e.update)),$nextTick:e=>e.n||(e.n=Q1.bind(e.proxy)),$watch:e=>lu.bind(e)}),Iu={get({_:e},r){const{ctx:t,setupState:n,data:a,props:i,accessCache:s,type:l,appContext:o}=e;let u;if(r[0]!=="$"){const d=s[r];if(d!==void 0)switch(d){case 1:return n[r];case 2:return a[r];case 4:return t[r];case 3:return i[r]}else{if(n!==q&&K(n,r))return s[r]=1,n[r];if(a!==q&&K(a,r))return s[r]=2,a[r];if((u=e.propsOptions[0])&&K(u,r))return s[r]=3,i[r];if(t!==q&&K(t,r))return s[r]=4,t[r];Ni&&(s[r]=0)}}const f=kn[r];let c,v;if(f)return r==="$attrs"&&Ne(e,"get",r),f(e);if((c=l.__cssModules)&&(c=c[r]))return c;if(t!==q&&K(t,r))return s[r]=4,t[r];if(v=o.config.globalProperties,K(v,r))return v[r]},set({_:e},r,t){const{data:n,setupState:a,ctx:i}=e;return a!==q&&K(a,r)?(a[r]=t,!0):n!==q&&K(n,r)?(n[r]=t,!0):K(e.props,r)||r[0]==="$"&&r.slice(1)in e?!1:(i[r]=t,!0)},has({_:{data:e,setupState:r,accessCache:t,ctx:n,appContext:a,propsOptions:i}},s){let l;return!!t[s]||e!==q&&K(e,s)||r!==q&&K(r,s)||(l=i[0])&&K(l,s)||K(n,s)||K(kn,s)||K(a.config.globalProperties,s)},defineProperty(e,r,t){return t.get!=null?e._.accessCache[r]=0:K(t,"value")&&this.set(e,r,t.value,null),Reflect.defineProperty(e,r,t)}};let Ni=!0;function Au(e){const r=va(e),t=e.proxy,n=e.ctx;Ni=!1,r.beforeCreate&&Xa(r.beforeCreate,e,"bc");const{data:a,computed:i,methods:s,watch:l,provide:o,inject:u,created:f,beforeMount:c,mounted:v,beforeUpdate:d,updated:_,activated:h,deactivated:T,beforeDestroy:I,beforeUnmount:M,destroyed:N,unmounted:B,render:W,renderTracked:ae,renderTriggered:ee,errorCaptured:P,serverPrefetch:re,expose:Z,inheritAttrs:$e,components:F,directives:z,filters:Ie}=r;if(u&&Nu(u,n,null,e.appContext.config.unwrapInjectedRef),s)for(const te in s){const Q=s[te];U(Q)&&(n[te]=Q.bind(t))}if(a){const te=a.call(t,t);J(te)&&(e.data=zn(te))}if(Ni=!0,i)for(const te in i){const Q=i[te],Sr=U(Q)?Q.bind(t,t):U(Q.get)?Q.get.bind(t,t):Ue,xt=!U(Q)&&U(Q.set)?Q.set.bind(t):Ue,wr=Tr({get:Sr,set:xt});Object.defineProperty(n,te,{enumerable:!0,configurable:!0,get:()=>wr.value,set:Ge=>wr.value=Ge})}if(l)for(const te in l)Jo(l[te],n,t,te);if(o){const te=U(o)?o.call(t):o;Reflect.ownKeys(te).forEach(Q=>{su(Q,te[Q])})}f&&Xa(f,e,"c");function oe(te,Q){R(Q)?Q.forEach(Sr=>te(Sr.bind(t))):Q&&te(Q.bind(t))}if(oe(pu,c),oe(ua,v),oe(du,d),oe($u,_),oe(uu,h),oe(cu,T),oe(gu,P),oe(hu,ae),oe(_u,ee),oe(Zo,M),oe(ca,B),oe(mu,re),R(Z))if(Z.length){const te=e.exposed||(e.exposed={});Z.forEach(Q=>{Object.defineProperty(te,Q,{get:()=>t[Q],set:Sr=>t[Q]=Sr})})}else e.exposed||(e.exposed={});W&&e.render===Ue&&(e.render=W),$e!=null&&(e.inheritAttrs=$e),F&&(e.components=F),z&&(e.directives=z)}function Nu(e,r,t=Ue,n=!1){R(e)&&(e=Ei(e));for(const a in e){const i=e[a];let s;J(i)?"default"in i?s=m0(i.from||a,i.default,!0):s=m0(i.from||a):s=m0(i),_e(s)&&n?Object.defineProperty(r,a,{enumerable:!0,configurable:!0,get:()=>s.value,set:l=>s.value=l}):r[a]=s}}function Xa(e,r,t){we(R(e)?e.map(n=>n.bind(r.proxy)):e.bind(r.proxy),r,t)}function Jo(e,r,t,n){const a=n.includes(".")?Xo(t,n):()=>t[n];if(ce(e)){const i=r[e];U(i)&&_0(a,i)}else if(U(e))_0(a,e.bind(t));else if(J(e))if(R(e))e.forEach(i=>Jo(i,r,t,n));else{const i=U(e.handler)?e.handler.bind(t):r[e.handler];U(i)&&_0(a,i,e)}}function va(e){const r=e.type,{mixins:t,extends:n}=r,{mixins:a,optionsCache:i,config:{optionMergeStrategies:s}}=e.appContext,l=i.get(r);let o;return l?o=l:!a.length&&!t&&!n?o=r:(o={},a.length&&a.forEach(u=>Vn(o,u,s,!0)),Vn(o,r,s)),J(r)&&i.set(r,o),o}function Vn(e,r,t,n=!1){const{mixins:a,extends:i}=r;i&&Vn(e,i,t,!0),a&&a.forEach(s=>Vn(e,s,t,!0));for(const s in r)if(!(n&&s==="expose")){const l=Eu[s]||t&&t[s];e[s]=l?l(e[s],r[s]):r[s]}return e}const Eu={data:ja,props:Hr,emits:Hr,methods:Hr,computed:Hr,beforeCreate:he,created:he,beforeMount:he,mounted:he,beforeUpdate:he,updated:he,beforeDestroy:he,beforeUnmount:he,destroyed:he,unmounted:he,activated:he,deactivated:he,errorCaptured:he,serverPrefetch:he,components:Hr,directives:Hr,watch:Ou,provide:ja,inject:Tu};function ja(e,r){return r?e?function(){return de(U(e)?e.call(this,this):e,U(r)?r.call(this,this):r)}:r:e}function Tu(e,r){return Hr(Ei(e),Ei(r))}function Ei(e){if(R(e)){const r={};for(let t=0;t<e.length;t++)r[e[t]]=e[t];return r}return e}function he(e,r){return e?[...new Set([].concat(e,r))]:r}function Hr(e,r){return e?de(de(Object.create(null),e),r):r}function Ou(e,r){if(!e)return r;if(!r)return e;const t=de(Object.create(null),e);for(const n in r)t[n]=he(e[n],r[n]);return t}function Su(e,r,t,n=!1){const a={},i={};Wn(i,i0,1),e.propsDefaults=Object.create(null),zo(e,r,a,i);for(const s in e.propsOptions[0])s in a||(a[s]=void 0);t?e.props=n?a:G1(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function wu(e,r,t,n){const{props:a,attrs:i,vnode:{patchFlag:s}}=e,l=X(a),[o]=e.propsOptions;let u=!1;if((n||s>0)&&!(s&16)){if(s&8){const f=e.vnode.dynamicProps;for(let c=0;c<f.length;c++){let v=f[c];if(e0(e.emitsOptions,v))continue;const d=r[v];if(o)if(K(i,v))d!==i[v]&&(i[v]=d,u=!0);else{const _=at(v);a[_]=Ti(o,l,_,d,e,!1)}else d!==i[v]&&(i[v]=d,u=!0)}}}else{zo(e,r,a,i)&&(u=!0);let f;for(const c in l)(!r||!K(r,c)&&((f=ot(c))===c||!K(r,f)))&&(o?t&&(t[c]!==void 0||t[f]!==void 0)&&(a[c]=Ti(o,l,c,void 0,e,!0)):delete a[c]);if(i!==l)for(const c in i)(!r||!K(r,c)&&!0)&&(delete i[c],u=!0)}u&&lr(e,"set","$attrs")}function zo(e,r,t,n){const[a,i]=e.propsOptions;let s=!1,l;if(r)for(let o in r){if(Hn(o))continue;const u=r[o];let f;a&&K(a,f=at(o))?!i||!i.includes(f)?t[f]=u:(l||(l={}))[f]=u:e0(e.emitsOptions,o)||(!(o in n)||u!==n[o])&&(n[o]=u,s=!0)}if(i){const o=X(t),u=l||q;for(let f=0;f<i.length;f++){const c=i[f];t[c]=Ti(a,o,c,u[c],e,!K(u,c))}}return s}function Ti(e,r,t,n,a,i){const s=e[t];if(s!=null){const l=K(s,"default");if(l&&n===void 0){const o=s.default;if(s.type!==Function&&U(o)){const{propsDefaults:u}=a;t in u?n=u[t]:(lt(a),n=u[t]=o.call(null,r),Kr())}else n=o}s[0]&&(i&&!l?n=!1:s[1]&&(n===""||n===ot(t))&&(n=!0))}return n}function xo(e,r,t=!1){const n=r.propsCache,a=n.get(e);if(a)return a;const i=e.props,s={},l=[];let o=!1;if(!U(e)){const f=c=>{o=!0;const[v,d]=xo(c,r,!0);de(s,v),d&&l.push(...d)};!t&&r.mixins.length&&r.mixins.forEach(f),e.extends&&f(e.extends),e.mixins&&e.mixins.forEach(f)}if(!i&&!o)return J(e)&&n.set(e,et),et;if(R(i))for(let f=0;f<i.length;f++){const c=at(i[f]);qa(c)&&(s[c]=q)}else if(i)for(const f in i){const c=at(f);if(qa(c)){const v=i[f],d=s[c]=R(v)||U(v)?{type:v}:v;if(d){const _=Za(Boolean,d.type),h=Za(String,d.type);d[0]=_>-1,d[1]=h<0||_<h,(_>-1||K(d,"default"))&&l.push(c)}}}const u=[s,l];return J(e)&&n.set(e,u),u}function qa(e){return e[0]!=="$"}function Qa(e){const r=e&&e.toString().match(/^\s*function (\w+)/);return r?r[1]:e===null?"null":""}function Ya(e,r){return Qa(e)===Qa(r)}function Za(e,r){return R(r)?r.findIndex(t=>Ya(t,e)):U(r)&&Ya(r,e)?0:-1}const ef=e=>e[0]==="_"||e==="$stable",pa=e=>R(e)?e.map(Ye):[Ye(e)],Fu=(e,r,t)=>{if(r._n)return r;const n=ko((...a)=>pa(r(...a)),t);return n._c=!1,n},rf=(e,r,t)=>{const n=e._ctx;for(const a in e){if(ef(a))continue;const i=e[a];if(U(i))r[a]=Fu(a,i,n);else if(i!=null){const s=pa(i);r[a]=()=>s}}},tf=(e,r)=>{const t=pa(r);e.slots.default=()=>t},Lu=(e,r)=>{if(e.vnode.shapeFlag&32){const t=r._;t?(e.slots=X(r),Wn(r,"_",t)):rf(r,e.slots={})}else e.slots={},r&&tf(e,r);Wn(e.slots,i0,1)},Cu=(e,r,t)=>{const{vnode:n,slots:a}=e;let i=!0,s=q;if(n.shapeFlag&32){const l=r._;l?t&&l===1?i=!1:(de(a,r),!t&&l===1&&delete a._):(i=!r.$stable,rf(r,a)),s=r}else r&&(tf(e,r),s={default:1});if(i)for(const l in a)!ef(l)&&!(l in s)&&delete a[l]};function nf(){return{app:null,config:{isNativeTag:l1,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Pu=0;function Mu(e,r){return function(n,a=null){U(n)||(n=Object.assign({},n)),a!=null&&!J(a)&&(a=null);const i=nf(),s=new Set;let l=!1;const o=i.app={_uid:Pu++,_component:n,_props:a,_container:null,_context:i,_instance:null,version:rc,get config(){return i.config},set config(u){},use(u,...f){return s.has(u)||(u&&U(u.install)?(s.add(u),u.install(o,...f)):U(u)&&(s.add(u),u(o,...f))),o},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),o},component(u,f){return f?(i.components[u]=f,o):i.components[u]},directive(u,f){return f?(i.directives[u]=f,o):i.directives[u]},mount(u,f,c){if(!l){const v=ue(n,a);return v.appContext=i,f&&r?r(v,u):e(v,u,c),l=!0,o._container=u,u.__vue_app__=o,a0(v.component)||v.component.proxy}},unmount(){l&&(e(null,o._container),delete o._container.__vue_app__)},provide(u,f){return i.provides[u]=f,o}};return o}}function Oi(e,r,t,n,a=!1){if(R(e)){e.forEach((v,d)=>Oi(v,r&&(R(r)?r[d]:r),t,n,a));return}if(Dn(n)&&!a)return;const i=n.shapeFlag&4?a0(n.component)||n.component.proxy:n.el,s=a?null:i,{i:l,r:o}=e,u=r&&r.r,f=l.refs===q?l.refs={}:l.refs,c=l.setupState;if(u!=null&&u!==o&&(ce(u)?(f[u]=null,K(c,u)&&(c[u]=null)):_e(u)&&(u.value=null)),U(o))Ar(o,l,12,[s,f]);else{const v=ce(o),d=_e(o);if(v||d){const _=()=>{if(e.f){const h=v?K(c,o)?c[o]:f[o]:o.value;a?R(h)&&Zi(h,i):R(h)?h.includes(i)||h.push(i):v?(f[o]=[i],K(c,o)&&(c[o]=f[o])):(o.value=[i],e.k&&(f[e.k]=o.value))}else v?(f[o]=s,K(c,o)&&(c[o]=s)):d&&(o.value=s,e.k&&(f[e.k]=s))};s?(_.id=-1,ye(_,t)):_()}}}const ye=au;function Hu(e){return Ru(e)}function Ru(e,r){const t=p1();t.__VUE__=!0;const{insert:n,remove:a,patchProp:i,createElement:s,createText:l,createComment:o,setText:u,setElementText:f,parentNode:c,nextSibling:v,setScopeId:d=Ue,insertStaticContent:_}=e,h=(p,$,m,y=null,g=null,E=null,S=!1,A=null,O=!!$.dynamicChildren)=>{if(p===$)return;p&&!Dr(p,$)&&(y=en(p),Ge(p,g,E,!0),p=null),$.patchFlag===-2&&(O=!1,$.dynamicChildren=null);const{type:b,ref:L,shapeFlag:w}=$;switch(b){case da:T(p,$,m,y);break;case We:I(p,$,m,y);break;case g0:p==null&&M($,m,y,S);break;case x:F(p,$,m,y,g,E,S,A,O);break;default:w&1?W(p,$,m,y,g,E,S,A,O):w&6?z(p,$,m,y,g,E,S,A,O):(w&64||w&128)&&b.process(p,$,m,y,g,E,S,A,O,jr)}L!=null&&g&&Oi(L,p&&p.ref,E,$||p,!$)},T=(p,$,m,y)=>{if(p==null)n($.el=l($.children),m,y);else{const g=$.el=p.el;$.children!==p.children&&u(g,$.children)}},I=(p,$,m,y)=>{p==null?n($.el=o($.children||""),m,y):$.el=p.el},M=(p,$,m,y)=>{[p.el,p.anchor]=_(p.children,$,m,y,p.el,p.anchor)},N=({el:p,anchor:$},m,y)=>{let g;for(;p&&p!==$;)g=v(p),n(p,m,y),p=g;n($,m,y)},B=({el:p,anchor:$})=>{let m;for(;p&&p!==$;)m=v(p),a(p),p=m;a($)},W=(p,$,m,y,g,E,S,A,O)=>{S=S||$.type==="svg",p==null?ae($,m,y,g,E,S,A,O):re(p,$,g,E,S,A,O)},ae=(p,$,m,y,g,E,S,A)=>{let O,b;const{type:L,props:w,shapeFlag:C,transition:D,dirs:G}=p;if(O=p.el=s(p.type,E,w&&w.is,w),C&8?f(O,p.children):C&16&&P(p.children,O,null,y,g,E&&L!=="foreignObject",S,A),G&&Fr(p,null,y,"created"),w){for(const j in w)j!=="value"&&!Hn(j)&&i(O,j,null,w[j],E,p.children,y,g,er);"value"in w&&i(O,"value",null,w.value),(b=w.onVnodeBeforeMount)&&ke(b,y,p)}ee(O,p,p.scopeId,S,y),G&&Fr(p,null,y,"beforeMount");const Y=(!g||g&&!g.pendingBranch)&&D&&!D.persisted;Y&&D.beforeEnter(O),n(O,$,m),((b=w&&w.onVnodeMounted)||Y||G)&&ye(()=>{b&&ke(b,y,p),Y&&D.enter(O),G&&Fr(p,null,y,"mounted")},g)},ee=(p,$,m,y,g)=>{if(m&&d(p,m),y)for(let E=0;E<y.length;E++)d(p,y[E]);if(g){let E=g.subTree;if($===E){const S=g.vnode;ee(p,S,S.scopeId,S.slotScopeIds,g.parent)}}},P=(p,$,m,y,g,E,S,A,O=0)=>{for(let b=O;b<p.length;b++){const L=p[b]=A?br(p[b]):Ye(p[b]);h(null,L,$,m,y,g,E,S,A)}},re=(p,$,m,y,g,E,S)=>{const A=$.el=p.el;let{patchFlag:O,dynamicChildren:b,dirs:L}=$;O|=p.patchFlag&16;const w=p.props||q,C=$.props||q;let D;m&&Lr(m,!1),(D=C.onVnodeBeforeUpdate)&&ke(D,m,$,p),L&&Fr($,p,m,"beforeUpdate"),m&&Lr(m,!0);const G=g&&$.type!=="foreignObject";if(b?Z(p.dynamicChildren,b,A,m,y,G,E):S||Q(p,$,A,null,m,y,G,E,!1),O>0){if(O&16)$e(A,$,w,C,m,y,g);else if(O&2&&w.class!==C.class&&i(A,"class",null,C.class,g),O&4&&i(A,"style",w.style,C.style,g),O&8){const Y=$.dynamicProps;for(let j=0;j<Y.length;j++){const se=Y[j],Ce=w[se],qr=C[se];(qr!==Ce||se==="value")&&i(A,se,Ce,qr,g,p.children,m,y,er)}}O&1&&p.children!==$.children&&f(A,$.children)}else!S&&b==null&&$e(A,$,w,C,m,y,g);((D=C.onVnodeUpdated)||L)&&ye(()=>{D&&ke(D,m,$,p),L&&Fr($,p,m,"updated")},y)},Z=(p,$,m,y,g,E,S)=>{for(let A=0;A<$.length;A++){const O=p[A],b=$[A],L=O.el&&(O.type===x||!Dr(O,b)||O.shapeFlag&70)?c(O.el):m;h(O,b,L,null,y,g,E,S,!0)}},$e=(p,$,m,y,g,E,S)=>{if(m!==y){if(m!==q)for(const A in m)!Hn(A)&&!(A in y)&&i(p,A,m[A],null,S,$.children,g,E,er);for(const A in y){if(Hn(A))continue;const O=y[A],b=m[A];O!==b&&A!=="value"&&i(p,A,b,O,S,$.children,g,E,er)}"value"in y&&i(p,"value",m.value,y.value)}},F=(p,$,m,y,g,E,S,A,O)=>{const b=$.el=p?p.el:l(""),L=$.anchor=p?p.anchor:l("");let{patchFlag:w,dynamicChildren:C,slotScopeIds:D}=$;D&&(A=A?A.concat(D):D),p==null?(n(b,m,y),n(L,m,y),P($.children,m,L,g,E,S,A,O)):w>0&&w&64&&C&&p.dynamicChildren?(Z(p.dynamicChildren,C,m,g,E,S,A),($.key!=null||g&&$===g.subTree)&&af(p,$,!0)):Q(p,$,m,L,g,E,S,A,O)},z=(p,$,m,y,g,E,S,A,O)=>{$.slotScopeIds=A,p==null?$.shapeFlag&512?g.ctx.activate($,m,y,S,O):Ie($,m,y,g,E,S,O):_t(p,$,O)},Ie=(p,$,m,y,g,E,S)=>{const A=p.component=qu(p,y,g);if(t0(p)&&(A.ctx.renderer=jr),Yu(A),A.asyncDep){if(g&&g.registerDep(A,oe),!p.el){const O=A.subTree=ue(We);I(null,O,$,m)}return}oe(A,p,$,m,g,E,S)},_t=(p,$,m)=>{const y=$.component=p.component;if(tu(p,$,m))if(y.asyncDep&&!y.asyncResolved){te(y,$,m);return}else y.next=$,Z1(y.update),y.update();else $.el=p.el,y.vnode=$},oe=(p,$,m,y,g,E,S)=>{const A=()=>{if(p.isMounted){let{next:L,bu:w,u:C,parent:D,vnode:G}=p,Y=L,j;Lr(p,!1),L?(L.el=G.el,te(p,L,S)):L=G,w&&Rn(w),(j=L.props&&L.props.onVnodeBeforeUpdate)&&ke(j,D,L,G),Lr(p,!0);const se=$0(p),Ce=p.subTree;p.subTree=se,h(Ce,se,c(Ce.el),en(Ce),p,g,E),L.el=se.el,Y===null&&nu(p,se.el),C&&ye(C,g),(j=L.props&&L.props.onVnodeUpdated)&&ye(()=>ke(j,D,L,G),g)}else{let L;const{el:w,props:C}=$,{bm:D,m:G,parent:Y}=p,j=Dn($);if(Lr(p,!1),D&&Rn(D),!j&&(L=C&&C.onVnodeBeforeMount)&&ke(L,Y,$),Lr(p,!0),w&&p0){const se=()=>{p.subTree=$0(p),p0(w,p.subTree,p,g,null)};j?$.type.__asyncLoader().then(()=>!p.isUnmounted&&se()):se()}else{const se=p.subTree=$0(p);h(null,se,m,y,p,g,E),$.el=se.el}if(G&&ye(G,g),!j&&(L=C&&C.onVnodeMounted)){const se=$;ye(()=>ke(L,Y,se),g)}($.shapeFlag&256||Y&&Dn(Y.vnode)&&Y.vnode.shapeFlag&256)&&p.a&&ye(p.a,g),p.isMounted=!0,$=m=y=null}},O=p.effect=new ea(A,()=>la(b),p.scope),b=p.update=()=>O.run();b.id=p.uid,Lr(p,!0),b()},te=(p,$,m)=>{$.component=p;const y=p.vnode.props;p.vnode=$,p.next=null,wu(p,$.props,y,m),Cu(p,$.children,m),ft(),Ga(),ut()},Q=(p,$,m,y,g,E,S,A,O=!1)=>{const b=p&&p.children,L=p?p.shapeFlag:0,w=$.children,{patchFlag:C,shapeFlag:D}=$;if(C>0){if(C&128){xt(b,w,m,y,g,E,S,A,O);return}else if(C&256){Sr(b,w,m,y,g,E,S,A,O);return}}D&8?(L&16&&er(b,g,E),w!==b&&f(m,w)):L&16?D&16?xt(b,w,m,y,g,E,S,A,O):er(b,g,E,!0):(L&8&&f(m,""),D&16&&P(w,m,y,g,E,S,A,O))},Sr=(p,$,m,y,g,E,S,A,O)=>{p=p||et,$=$||et;const b=p.length,L=$.length,w=Math.min(b,L);let C;for(C=0;C<w;C++){const D=$[C]=O?br($[C]):Ye($[C]);h(p[C],D,m,null,g,E,S,A,O)}b>L?er(p,g,E,!0,!1,w):P($,m,y,g,E,S,A,O,w)},xt=(p,$,m,y,g,E,S,A,O)=>{let b=0;const L=$.length;let w=p.length-1,C=L-1;for(;b<=w&&b<=C;){const D=p[b],G=$[b]=O?br($[b]):Ye($[b]);if(Dr(D,G))h(D,G,m,null,g,E,S,A,O);else break;b++}for(;b<=w&&b<=C;){const D=p[w],G=$[C]=O?br($[C]):Ye($[C]);if(Dr(D,G))h(D,G,m,null,g,E,S,A,O);else break;w--,C--}if(b>w){if(b<=C){const D=C+1,G=D<L?$[D].el:y;for(;b<=C;)h(null,$[b]=O?br($[b]):Ye($[b]),m,G,g,E,S,A,O),b++}}else if(b>C)for(;b<=w;)Ge(p[b],g,E,!0),b++;else{const D=b,G=b,Y=new Map;for(b=G;b<=C;b++){const Ae=$[b]=O?br($[b]):Ye($[b]);Ae.key!=null&&Y.set(Ae.key,b)}let j,se=0;const Ce=C-G+1;let qr=!1,Fa=0;const ht=new Array(Ce);for(b=0;b<Ce;b++)ht[b]=0;for(b=D;b<=w;b++){const Ae=p[b];if(se>=Ce){Ge(Ae,g,E,!0);continue}let Ke;if(Ae.key!=null)Ke=Y.get(Ae.key);else for(j=G;j<=C;j++)if(ht[j-G]===0&&Dr(Ae,$[j])){Ke=j;break}Ke===void 0?Ge(Ae,g,E,!0):(ht[Ke-G]=b+1,Ke>=Fa?Fa=Ke:qr=!0,h(Ae,$[Ke],m,null,g,E,S,A,O),se++)}const La=qr?Du(ht):et;for(j=La.length-1,b=Ce-1;b>=0;b--){const Ae=G+b,Ke=$[Ae],Ca=Ae+1<L?$[Ae+1].el:y;ht[b]===0?h(null,Ke,m,Ca,g,E,S,A,O):qr&&(j<0||b!==La[j]?wr(Ke,m,Ca,2):j--)}}},wr=(p,$,m,y,g=null)=>{const{el:E,type:S,transition:A,children:O,shapeFlag:b}=p;if(b&6){wr(p.component.subTree,$,m,y);return}if(b&128){p.suspense.move($,m,y);return}if(b&64){S.move(p,$,m,jr);return}if(S===x){n(E,$,m);for(let w=0;w<O.length;w++)wr(O[w],$,m,y);n(p.anchor,$,m);return}if(S===g0){N(p,$,m);return}if(y!==2&&b&1&&A)if(y===0)A.beforeEnter(E),n(E,$,m),ye(()=>A.enter(E),g);else{const{leave:w,delayLeave:C,afterLeave:D}=A,G=()=>n(E,$,m),Y=()=>{w(E,()=>{G(),D&&D()})};C?C(E,G,Y):Y()}else n(E,$,m)},Ge=(p,$,m,y=!1,g=!1)=>{const{type:E,props:S,ref:A,children:O,dynamicChildren:b,shapeFlag:L,patchFlag:w,dirs:C}=p;if(A!=null&&Oi(A,null,m,p,!0),L&256){$.ctx.deactivate(p);return}const D=L&1&&C,G=!Dn(p);let Y;if(G&&(Y=S&&S.onVnodeBeforeUnmount)&&ke(Y,$,p),L&6)r1(p.component,m,y);else{if(L&128){p.suspense.unmount(m,y);return}D&&Fr(p,null,$,"beforeUnmount"),L&64?p.type.remove(p,$,m,g,jr,y):b&&(E!==x||w>0&&w&64)?er(b,$,m,!1,!0):(E===x&&w&384||!g&&L&16)&&er(O,$,m),y&&Sa(p)}(G&&(Y=S&&S.onVnodeUnmounted)||D)&&ye(()=>{Y&&ke(Y,$,p),D&&Fr(p,null,$,"unmounted")},m)},Sa=p=>{const{type:$,el:m,anchor:y,transition:g}=p;if($===x){e1(m,y);return}if($===g0){B(p);return}const E=()=>{a(m),g&&!g.persisted&&g.afterLeave&&g.afterLeave()};if(p.shapeFlag&1&&g&&!g.persisted){const{leave:S,delayLeave:A}=g,O=()=>S(m,E);A?A(p.el,E,O):O()}else E()},e1=(p,$)=>{let m;for(;p!==$;)m=v(p),a(p),p=m;a($)},r1=(p,$,m)=>{const{bum:y,scope:g,update:E,subTree:S,um:A}=p;y&&Rn(y),g.stop(),E&&(E.active=!1,Ge(S,p,$,m)),A&&ye(A,$),ye(()=>{p.isUnmounted=!0},$),$&&$.pendingBranch&&!$.isUnmounted&&p.asyncDep&&!p.asyncResolved&&p.suspenseId===$.pendingId&&($.deps--,$.deps===0&&$.resolve())},er=(p,$,m,y=!1,g=!1,E=0)=>{for(let S=E;S<p.length;S++)Ge(p[S],$,m,y,g)},en=p=>p.shapeFlag&6?en(p.component.subTree):p.shapeFlag&128?p.suspense.next():v(p.anchor||p.el),wa=(p,$,m)=>{p==null?$._vnode&&Ge($._vnode,null,null,!0):h($._vnode||null,p,$,null,null,null,m),Ga(),Bo(),$._vnode=p},jr={p:h,um:Ge,m:wr,r:Sa,mt:Ie,mc:P,pc:Q,pbc:Z,n:en,o:e};let v0,p0;return r&&([v0,p0]=r(jr)),{render:wa,hydrate:v0,createApp:Mu(wa,v0)}}function Lr({effect:e,update:r},t){e.allowRecurse=r.allowRecurse=t}function af(e,r,t=!1){const n=e.children,a=r.children;if(R(n)&&R(a))for(let i=0;i<n.length;i++){const s=n[i];let l=a[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=a[i]=br(a[i]),l.el=s.el),t||af(s,l))}}function Du(e){const r=e.slice(),t=[0];let n,a,i,s,l;const o=e.length;for(n=0;n<o;n++){const u=e[n];if(u!==0){if(a=t[t.length-1],e[a]<u){r[n]=a,t.push(n);continue}for(i=0,s=t.length-1;i<s;)l=i+s>>1,e[t[l]]<u?i=l+1:s=l;u<e[t[i]]&&(i>0&&(r[n]=t[i-1]),t[i]=n)}}for(i=t.length,s=t[i-1];i-- >0;)t[i]=s,s=r[s];return t}const Uu=e=>e.__isTeleport,x=Symbol(void 0),da=Symbol(void 0),We=Symbol(void 0),g0=Symbol(void 0),Rt=[];let De=null;function k(e=!1){Rt.push(De=e?null:[])}function Wu(){Rt.pop(),De=Rt[Rt.length-1]||null}let Gt=1;function Ja(e){Gt+=e}function sf(e){return e.dynamicChildren=Gt>0?De||et:null,Wu(),Gt>0&&De&&De.push(e),e}function V(e,r,t,n,a,i){return sf(H(e,r,t,n,a,i,!0))}function Bu(e,r,t,n,a){return sf(ue(e,r,t,n,a,!0))}function Si(e){return e?e.__v_isVNode===!0:!1}function Dr(e,r){return e.type===r.type&&e.key===r.key}const i0="__vInternal",lf=({key:e})=>e!=null?e:null,Un=({ref:e,ref_key:r,ref_for:t})=>e!=null?ce(e)||_e(e)||U(e)?{i:Re,r:e,k:r,f:!!t}:e:null;function H(e,r=null,t=null,n=0,a=null,i=e===x?0:1,s=!1,l=!1){const o={__v_isVNode:!0,__v_skip:!0,type:e,props:r,key:r&&lf(r),ref:r&&Un(r),scopeId:r0,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:n,dynamicProps:a,dynamicChildren:null,appContext:null};return l?($a(o,t),i&128&&e.normalize(o)):t&&(o.shapeFlag|=ce(t)?8:16),Gt>0&&!s&&De&&(o.patchFlag>0||i&6)&&o.patchFlag!==32&&De.push(o),o}const ue=Gu;function Gu(e,r=null,t=null,n=0,a=null,i=!1){if((!e||e===bu)&&(e=We),Si(e)){const l=Er(e,r,!0);return t&&$a(l,t),Gt>0&&!i&&De&&(l.shapeFlag&6?De[De.indexOf(e)]=l:De.push(l)),l.patchFlag|=-2,l}if(xu(e)&&(e=e.__vccOpts),r){r=Ku(r);let{class:l,style:o}=r;l&&!ce(l)&&(r.class=ar(l)),J(o)&&(Co(o)&&!R(o)&&(o=de({},o)),r.style=qn(o))}const s=ce(e)?1:iu(e)?128:Uu(e)?64:J(e)?4:U(e)?2:0;return H(e,r,t,n,a,s,i,!0)}function Ku(e){return e?Co(e)||i0 in e?de({},e):e:null}function Er(e,r,t=!1){const{props:n,ref:a,patchFlag:i,children:s}=e,l=r?Vu(n||{},r):n;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&lf(l),ref:r&&r.ref?t&&a?R(a)?a.concat(Un(r)):[a,Un(r)]:Un(r):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:s,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:r&&e.type!==x?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Er(e.ssContent),ssFallback:e.ssFallback&&Er(e.ssFallback),el:e.el,anchor:e.anchor}}function Xn(e=" ",r=0){return ue(da,null,e,r)}function ku(e="",r=!1){return r?(k(),Bu(We,null,e)):ue(We,null,e)}function Ye(e){return e==null||typeof e=="boolean"?ue(We):R(e)?ue(x,null,e.slice()):typeof e=="object"?br(e):ue(da,null,String(e))}function br(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Er(e)}function $a(e,r){let t=0;const{shapeFlag:n}=e;if(r==null)r=null;else if(R(r))t=16;else if(typeof r=="object")if(n&65){const a=r.default;a&&(a._c&&(a._d=!1),$a(e,a()),a._c&&(a._d=!0));return}else{t=32;const a=r._;!a&&!(i0 in r)?r._ctx=Re:a===3&&Re&&(Re.slots._===1?r._=1:(r._=2,e.patchFlag|=1024))}else U(r)?(r={default:r,_ctx:Re},t=32):(r=String(r),n&64?(t=16,r=[Xn(r)]):t=8);e.children=r,e.shapeFlag|=t}function Vu(...e){const r={};for(let t=0;t<e.length;t++){const n=e[t];for(const a in n)if(a==="class")r.class!==n.class&&(r.class=ar([r.class,n.class]));else if(a==="style")r.style=qn([r.style,n.style]);else if(Qn(a)){const i=r[a],s=n[a];s&&i!==s&&!(R(i)&&i.includes(s))&&(r[a]=i?[].concat(i,s):s)}else a!==""&&(r[a]=n[a])}return r}function ke(e,r,t,n=null){we(e,r,7,[t,n])}const Xu=nf();let ju=0;function qu(e,r,t){const n=e.type,a=(r?r.appContext:e.appContext)||Xu,i={uid:ju++,vnode:e,type:n,parent:r,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new d1(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:r?r.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:xo(n,a),emitsOptions:Ko(n,a),emit:null,emitted:null,propsDefaults:q,inheritAttrs:n.inheritAttrs,ctx:q,data:q,props:q,attrs:q,slots:q,refs:q,setupState:q,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=r?r.root:i,i.emit=x1.bind(null,i),e.ce&&e.ce(i),i}let pe=null;const Qu=()=>pe||Re,lt=e=>{pe=e,e.scope.on()},Kr=()=>{pe&&pe.scope.off(),pe=null};function of(e){return e.vnode.shapeFlag&4}let Kt=!1;function Yu(e,r=!1){Kt=r;const{props:t,children:n}=e.vnode,a=of(e);Su(e,t,a,r),Lu(e,n);const i=a?Zu(e,r):void 0;return Kt=!1,i}function Zu(e,r){const t=e.type;e.accessCache=Object.create(null),e.proxy=Po(new Proxy(e.ctx,Iu));const{setup:n}=t;if(n){const a=e.setupContext=n.length>1?zu(e):null;lt(e),ft();const i=Ar(n,e,0,[e.props,a]);if(ut(),Kr(),_o(i)){if(i.then(Kr,Kr),r)return i.then(s=>{za(e,s,r)}).catch(s=>{xn(s,e,0)});e.asyncDep=i}else za(e,i,r)}else ff(e,r)}function za(e,r,t){U(r)?e.type.__ssrInlineRender?e.ssrRender=r:e.render=r:J(r)&&(e.setupState=Ro(r)),ff(e,t)}let xa;function ff(e,r,t){const n=e.type;if(!e.render){if(!r&&xa&&!n.render){const a=n.template||va(e).template;if(a){const{isCustomElement:i,compilerOptions:s}=e.appContext.config,{delimiters:l,compilerOptions:o}=n,u=de(de({isCustomElement:i,delimiters:l},s),o);n.render=xa(a,u)}}e.render=n.render||Ue}lt(e),ft(),Au(e),ut(),Kr()}function Ju(e){return new Proxy(e.attrs,{get(r,t){return Ne(e,"get","$attrs"),r[t]}})}function zu(e){const r=n=>{e.exposed=n||{}};let t;return{get attrs(){return t||(t=Ju(e))},slots:e.slots,emit:e.emit,expose:r}}function a0(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Ro(Po(e.exposed)),{get(r,t){if(t in r)return r[t];if(t in kn)return kn[t](e)}}))}function xu(e){return U(e)&&"__vccOpts"in e}const Tr=(e,r)=>j1(e,r,Kt);function ec(e,r,t){const n=arguments.length;return n===2?J(r)&&!R(r)?Si(r)?ue(e,null,[r]):ue(e,r):ue(e,null,r):(n>3?t=Array.prototype.slice.call(arguments,2):n===3&&Si(t)&&(t=[t]),ue(e,r,t))}const rc="3.2.41",tc="http://www.w3.org/2000/svg",Ur=typeof document<"u"?document:null,es=Ur&&Ur.createElement("template"),nc={insert:(e,r,t)=>{r.insertBefore(e,t||null)},remove:e=>{const r=e.parentNode;r&&r.removeChild(e)},createElement:(e,r,t,n)=>{const a=r?Ur.createElementNS(tc,e):Ur.createElement(e,t?{is:t}:void 0);return e==="select"&&n&&n.multiple!=null&&a.setAttribute("multiple",n.multiple),a},createText:e=>Ur.createTextNode(e),createComment:e=>Ur.createComment(e),setText:(e,r)=>{e.nodeValue=r},setElementText:(e,r)=>{e.textContent=r},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Ur.querySelector(e),setScopeId(e,r){e.setAttribute(r,"")},insertStaticContent(e,r,t,n,a,i){const s=t?t.previousSibling:r.lastChild;if(a&&(a===i||a.nextSibling))for(;r.insertBefore(a.cloneNode(!0),t),!(a===i||!(a=a.nextSibling)););else{es.innerHTML=n?`<svg>${e}</svg>`:e;const l=es.content;if(n){const o=l.firstChild;for(;o.firstChild;)l.appendChild(o.firstChild);l.removeChild(o)}r.insertBefore(l,t)}return[s?s.nextSibling:r.firstChild,t?t.previousSibling:r.lastChild]}};function ic(e,r,t){const n=e._vtc;n&&(r=(r?[r,...n]:[...n]).join(" ")),r==null?e.removeAttribute("class"):t?e.setAttribute("class",r):e.className=r}function ac(e,r,t){const n=e.style,a=ce(t);if(t&&!a){for(const i in t)wi(n,i,t[i]);if(r&&!ce(r))for(const i in r)t[i]==null&&wi(n,i,"")}else{const i=n.display;a?r!==t&&(n.cssText=t):r&&e.removeAttribute("style"),"_vod"in e&&(n.display=i)}}const rs=/\s*!important$/;function wi(e,r,t){if(R(t))t.forEach(n=>wi(e,r,n));else if(t==null&&(t=""),r.startsWith("--"))e.setProperty(r,t);else{const n=sc(e,r);rs.test(t)?e.setProperty(ot(n),t.replace(rs,""),"important"):e[n]=t}}const ts=["Webkit","Moz","ms"],y0={};function sc(e,r){const t=y0[r];if(t)return t;let n=at(r);if(n!=="filter"&&n in e)return y0[r]=n;n=yo(n);for(let a=0;a<ts.length;a++){const i=ts[a]+n;if(i in e)return y0[r]=i}return r}const ns="http://www.w3.org/1999/xlink";function lc(e,r,t,n,a){if(n&&r.startsWith("xlink:"))t==null?e.removeAttributeNS(ns,r.slice(6,r.length)):e.setAttributeNS(ns,r,t);else{const i=n1(r);t==null||i&&!po(t)?e.removeAttribute(r):e.setAttribute(r,i?"":t)}}function oc(e,r,t,n,a,i,s){if(r==="innerHTML"||r==="textContent"){n&&s(n,a,i),e[r]=t==null?"":t;return}if(r==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=t;const o=t==null?"":t;(e.value!==o||e.tagName==="OPTION")&&(e.value=o),t==null&&e.removeAttribute(r);return}let l=!1;if(t===""||t==null){const o=typeof e[r];o==="boolean"?t=po(t):t==null&&o==="string"?(t="",l=!0):o==="number"&&(t=0,l=!0)}try{e[r]=t}catch{}l&&e.removeAttribute(r)}function zr(e,r,t,n){e.addEventListener(r,t,n)}function fc(e,r,t,n){e.removeEventListener(r,t,n)}function uc(e,r,t,n,a=null){const i=e._vei||(e._vei={}),s=i[r];if(n&&s)s.value=n;else{const[l,o]=cc(r);if(n){const u=i[r]=dc(n,a);zr(e,l,u,o)}else s&&(fc(e,l,s,o),i[r]=void 0)}}const is=/(?:Once|Passive|Capture)$/;function cc(e){let r;if(is.test(e)){r={};let n;for(;n=e.match(is);)e=e.slice(0,e.length-n[0].length),r[n[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):ot(e.slice(2)),r]}let b0=0;const vc=Promise.resolve(),pc=()=>b0||(vc.then(()=>b0=0),b0=Date.now());function dc(e,r){const t=n=>{if(!n._vts)n._vts=Date.now();else if(n._vts<=t.attached)return;we($c(n,t.value),r,5,[n])};return t.value=e,t.attached=pc(),t}function $c(e,r){if(R(r)){const t=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{t.call(e),e._stopped=!0},r.map(n=>a=>!a._stopped&&n&&n(a))}else return r}const as=/^on[a-z]/,mc=(e,r,t,n,a=!1,i,s,l,o)=>{r==="class"?ic(e,n,a):r==="style"?ac(e,t,n):Qn(r)?Yi(r)||uc(e,r,t,n,s):(r[0]==="."?(r=r.slice(1),!0):r[0]==="^"?(r=r.slice(1),!1):_c(e,r,n,a))?oc(e,r,n,i,s,l,o):(r==="true-value"?e._trueValue=n:r==="false-value"&&(e._falseValue=n),lc(e,r,n,a))};function _c(e,r,t,n){return n?!!(r==="innerHTML"||r==="textContent"||r in e&&as.test(r)&&U(t)):r==="spellcheck"||r==="draggable"||r==="translate"||r==="form"||r==="list"&&e.tagName==="INPUT"||r==="type"&&e.tagName==="TEXTAREA"||as.test(r)&&ce(t)?!1:r in e}const cr="transition",gt="animation",ma=(e,{slots:r})=>ec(jo,hc(e),r);ma.displayName="Transition";const uf={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};ma.props=de({},jo.props,uf);const Cr=(e,r=[])=>{R(e)?e.forEach(t=>t(...r)):e&&e(...r)},ss=e=>e?R(e)?e.some(r=>r.length>1):e.length>1:!1;function hc(e){const r={};for(const F in e)F in uf||(r[F]=e[F]);if(e.css===!1)return r;const{name:t="v",type:n,duration:a,enterFromClass:i=`${t}-enter-from`,enterActiveClass:s=`${t}-enter-active`,enterToClass:l=`${t}-enter-to`,appearFromClass:o=i,appearActiveClass:u=s,appearToClass:f=l,leaveFromClass:c=`${t}-leave-from`,leaveActiveClass:v=`${t}-leave-active`,leaveToClass:d=`${t}-leave-to`}=e,_=gc(a),h=_&&_[0],T=_&&_[1],{onBeforeEnter:I,onEnter:M,onEnterCancelled:N,onLeave:B,onLeaveCancelled:W,onBeforeAppear:ae=I,onAppear:ee=M,onAppearCancelled:P=N}=r,re=(F,z,Ie)=>{Pr(F,z?f:l),Pr(F,z?u:s),Ie&&Ie()},Z=(F,z)=>{F._isLeaving=!1,Pr(F,c),Pr(F,d),Pr(F,v),z&&z()},$e=F=>(z,Ie)=>{const _t=F?ee:M,oe=()=>re(z,F,Ie);Cr(_t,[z,oe]),ls(()=>{Pr(z,F?o:i),vr(z,F?f:l),ss(_t)||os(z,n,h,oe)})};return de(r,{onBeforeEnter(F){Cr(I,[F]),vr(F,i),vr(F,s)},onBeforeAppear(F){Cr(ae,[F]),vr(F,o),vr(F,u)},onEnter:$e(!1),onAppear:$e(!0),onLeave(F,z){F._isLeaving=!0;const Ie=()=>Z(F,z);vr(F,c),Ic(),vr(F,v),ls(()=>{!F._isLeaving||(Pr(F,c),vr(F,d),ss(B)||os(F,n,T,Ie))}),Cr(B,[F,Ie])},onEnterCancelled(F){re(F,!1),Cr(N,[F])},onAppearCancelled(F){re(F,!0),Cr(P,[F])},onLeaveCancelled(F){Z(F),Cr(W,[F])}})}function gc(e){if(e==null)return null;if(J(e))return[I0(e.enter),I0(e.leave)];{const r=I0(e);return[r,r]}}function I0(e){return Bn(e)}function vr(e,r){r.split(/\s+/).forEach(t=>t&&e.classList.add(t)),(e._vtc||(e._vtc=new Set)).add(r)}function Pr(e,r){r.split(/\s+/).forEach(n=>n&&e.classList.remove(n));const{_vtc:t}=e;t&&(t.delete(r),t.size||(e._vtc=void 0))}function ls(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let yc=0;function os(e,r,t,n){const a=e._endId=++yc,i=()=>{a===e._endId&&n()};if(t)return setTimeout(i,t);const{type:s,timeout:l,propCount:o}=bc(e,r);if(!s)return n();const u=s+"end";let f=0;const c=()=>{e.removeEventListener(u,v),i()},v=d=>{d.target===e&&++f>=o&&c()};setTimeout(()=>{f<o&&c()},l+1),e.addEventListener(u,v)}function bc(e,r){const t=window.getComputedStyle(e),n=_=>(t[_]||"").split(", "),a=n(cr+"Delay"),i=n(cr+"Duration"),s=fs(a,i),l=n(gt+"Delay"),o=n(gt+"Duration"),u=fs(l,o);let f=null,c=0,v=0;r===cr?s>0&&(f=cr,c=s,v=i.length):r===gt?u>0&&(f=gt,c=u,v=o.length):(c=Math.max(s,u),f=c>0?s>u?cr:gt:null,v=f?f===cr?i.length:o.length:0);const d=f===cr&&/\b(transform|all)(,|$)/.test(t[cr+"Property"]);return{type:f,timeout:c,propCount:v,hasTransform:d}}function fs(e,r){for(;e.length<r.length;)e=e.concat(e);return Math.max(...r.map((t,n)=>us(t)+us(e[n])))}function us(e){return Number(e.slice(0,-1).replace(",","."))*1e3}function Ic(){return document.body.offsetHeight}const cs=e=>{const r=e.props["onUpdate:modelValue"]||!1;return R(r)?t=>Rn(r,t):r};function Ac(e){e.target.composing=!0}function vs(e){const r=e.target;r.composing&&(r.composing=!1,r.dispatchEvent(new Event("input")))}const Nc={created(e,{modifiers:{lazy:r,trim:t,number:n}},a){e._assign=cs(a);const i=n||a.props&&a.props.type==="number";zr(e,r?"change":"input",s=>{if(s.target.composing)return;let l=e.value;t&&(l=l.trim()),i&&(l=Bn(l)),e._assign(l)}),t&&zr(e,"change",()=>{e.value=e.value.trim()}),r||(zr(e,"compositionstart",Ac),zr(e,"compositionend",vs),zr(e,"change",vs))},mounted(e,{value:r}){e.value=r==null?"":r},beforeUpdate(e,{value:r,modifiers:{lazy:t,trim:n,number:a}},i){if(e._assign=cs(i),e.composing||document.activeElement===e&&e.type!=="range"&&(t||n&&e.value.trim()===r||(a||e.type==="number")&&Bn(e.value)===r))return;const s=r==null?"":r;e.value!==s&&(e.value=s)}},Ec=["ctrl","shift","alt","meta"],Tc={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,r)=>Ec.some(t=>e[`${t}Key`]&&!r.includes(t))},Oc=(e,r)=>(t,...n)=>{for(let a=0;a<r.length;a++){const i=Tc[r[a]];if(i&&i(t,r))return}return e(t,...n)},Sc=de({patchProp:mc},nc);let ps;function wc(){return ps||(ps=Hu(Sc))}const Fc=(...e)=>{const r=wc().createApp(...e),{mount:t}=r;return r.mount=n=>{const a=Lc(n);if(!a)return;const i=r._component;!U(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const s=t(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),s},r};function Lc(e){return ce(e)?document.querySelector(e):e}/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Cc=typeof Object.defineProperty=="function"?Object.defineProperty:null,Pc=Cc;/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Mc=Pc;function Hc(){try{return Mc({},"x",{}),!0}catch{return!1}}var Rc=Hc;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Dc=Object.defineProperty,Uc=Dc;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ct=Object.prototype,ds=ct.toString,$s=ct.__defineGetter__,ms=ct.__defineSetter__,Wc=ct.__lookupGetter__,Bc=ct.__lookupSetter__;function Gc(e,r,t){var n,a,i,s;if(typeof e!="object"||e===null||ds.call(e)==="[object Array]")throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if(typeof t!="object"||t===null||ds.call(t)==="[object Array]")throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if(a="value"in t,a&&(Wc.call(e,r)||Bc.call(e,r)?(n=e.__proto__,e.__proto__=ct,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),i="get"in t,s="set"in t,a&&(i||s))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&$s&&$s.call(e,r,t.get),s&&ms&&ms.call(e,r,t.set),e}var Kc=Gc;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var kc=Rc,Vc=Uc,Xc=Kc,Fi;kc()?Fi=Vc:Fi=Xc;var jc=Fi;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var qc=jc;function Qc(e,r,t){qc(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}var Yc=Qc;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Zc=Yc,s0=Zc;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Jc=Math.floor,zc=Jc;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var xc=zc,Be=xc;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e2=Be;function r2(e){return e2(e)===e&&e>=0}var t2=r2;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var n2=t2,cf=n2;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function i2(e){return e!==e}var a2=i2;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var s2=a2,ne=s2;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function l2(){return typeof Symbol=="function"&&typeof Symbol("foo")=="symbol"}var o2=l2;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var f2=o2,u2=f2;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var c2=u2,v2=c2();function p2(){return v2&&typeof Symbol.toStringTag=="symbol"}var d2=p2;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $2=d2,m2=$2;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _2=Object.prototype.toString,vf=_2;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var h2=vf;function g2(e){return h2.call(e)}var y2=g2;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var b2=Object.prototype.hasOwnProperty;function I2(e,r){return e==null?!1:b2.call(e,r)}var A2=I2;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var N2=A2,E2=N2;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var T2=typeof Symbol=="function"?Symbol.toStringTag:"",O2=T2;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var S2=E2,yt=O2,A0=vf;function w2(e){var r,t,n;if(e==null)return A0.call(e);t=e[yt],r=S2(e,yt);try{e[yt]=void 0}catch{return A0.call(e)}return n=A0.call(e),r?e[yt]=t:delete e[yt],n}var F2=w2;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var L2=m2,C2=y2,P2=F2,Li;L2()?Li=P2:Li=C2;var l0=Li;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var M2=l0,H2=typeof Uint32Array=="function";function R2(e){return H2&&e instanceof Uint32Array||M2(e)==="[object Uint32Array]"}var D2=R2;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var U2=D2,W2=U2;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var B2=4294967295,G2=B2;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var K2=typeof Uint32Array=="function"?Uint32Array:null,k2=K2;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var V2=W2,N0=G2,_s=k2;function X2(){var e,r;if(typeof _s!="function")return!1;try{r=[1,3.14,-3.14,N0+1,N0+2],r=new _s(r),e=V2(r)&&r[0]===1&&r[1]===3&&r[2]===N0-2&&r[3]===0&&r[4]===1}catch{e=!1}return e}var j2=X2;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var q2=j2,Q2=q2;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Y2=typeof Uint32Array=="function"?Uint32Array:void 0,Z2=Y2;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function J2(){throw new Error("not implemented")}var z2=J2;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var x2=Q2,ev=Z2,rv=z2,Ci;x2()?Ci=ev:Ci=rv;var vt=Ci;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var tv=l0,nv=typeof Float64Array=="function";function iv(e){return nv&&e instanceof Float64Array||tv(e)==="[object Float64Array]"}var av=iv;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var sv=av,lv=sv;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ov=typeof Float64Array=="function"?Float64Array:null,fv=ov;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var uv=lv,hs=fv;function cv(){var e,r;if(typeof hs!="function")return!1;try{r=new hs([1,3.14,-3.14,NaN]),e=uv(r)&&r[0]===1&&r[1]===3.14&&r[2]===-3.14&&r[3]!==r[3]}catch{e=!1}return e}var vv=cv;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var pv=vv,dv=pv;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $v=typeof Float64Array=="function"?Float64Array:void 0,mv=$v;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function _v(){throw new Error("not implemented")}var hv=_v;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var gv=dv,yv=mv,bv=hv,Pi;gv()?Pi=yv:Pi=bv;var pt=Pi;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Iv=l0,Av=typeof Uint8Array=="function";function Nv(e){return Av&&e instanceof Uint8Array||Iv(e)==="[object Uint8Array]"}var Ev=Nv;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Tv=Ev,Ov=Tv;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Sv=255,wv=Sv;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Fv=typeof Uint8Array=="function"?Uint8Array:null,Lv=Fv;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Cv=Ov,E0=wv,gs=Lv;function Pv(){var e,r;if(typeof gs!="function")return!1;try{r=[1,3.14,-3.14,E0+1,E0+2],r=new gs(r),e=Cv(r)&&r[0]===1&&r[1]===3&&r[2]===E0-2&&r[3]===0&&r[4]===1}catch{e=!1}return e}var Mv=Pv;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Hv=Mv,Rv=Hv;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Dv=typeof Uint8Array=="function"?Uint8Array:void 0,Uv=Dv;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Wv(){throw new Error("not implemented")}var Bv=Wv;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Gv=Rv,Kv=Uv,kv=Bv,Mi;Gv()?Mi=Kv:Mi=kv;var Vv=Mi;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Xv=l0,jv=typeof Uint16Array=="function";function qv(e){return jv&&e instanceof Uint16Array||Xv(e)==="[object Uint16Array]"}var Qv=qv;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Yv=Qv,Zv=Yv;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Jv=65535,zv=Jv;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var xv=typeof Uint16Array=="function"?Uint16Array:null,e3=xv;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r3=Zv,T0=zv,ys=e3;function t3(){var e,r;if(typeof ys!="function")return!1;try{r=[1,3.14,-3.14,T0+1,T0+2],r=new ys(r),e=r3(r)&&r[0]===1&&r[1]===3&&r[2]===T0-2&&r[3]===0&&r[4]===1}catch{e=!1}return e}var n3=t3;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var i3=n3,a3=i3;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var s3=typeof Uint16Array=="function"?Uint16Array:void 0,l3=s3;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function o3(){throw new Error("not implemented")}var f3=o3;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var u3=a3,c3=l3,v3=f3,Hi;u3()?Hi=c3:Hi=v3;var p3=Hi;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var d3=Vv,$3=p3,m3={uint16:$3,uint8:d3},_3=m3;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var bs=_3,pf;function h3(){var e,r;return e=new bs.uint16(1),e[0]=4660,r=new bs.uint8(e.buffer),r[0]===52}pf=h3();var g3=pf;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var y3=g3,dt=y3;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var b3=dt,Ri;b3===!0?Ri=1:Ri=0;var I3=Ri;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var A3=vt,N3=pt,E3=I3,df=new N3(1),T3=new A3(df.buffer);function O3(e){return df[0]=e,T3[E3]}var S3=O3;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var w3=S3,Fe=w3;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var F3=dt,Di;F3===!0?Di=1:Di=0;var L3=Di;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var C3=vt,P3=pt,M3=L3,Ui=new P3(1),H3=new C3(Ui.buffer);function R3(e,r){return Ui[0]=e,H3[M3]=r>>>0,Ui[0]}var D3=R3;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var U3=D3,Vt=U3;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var W3=Number.POSITIVE_INFINITY,le=W3;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var B3=Number;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var G3=B3,K3=G3;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var k3=K3,V3=k3.NEGATIVE_INFINITY,Ee=V3;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var X3=1023,kr=X3;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var j3=.34657359027997264,q3=j3;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Q3(e){return e===0?-.03333333333333313:-.03333333333333313+e*(.0015873015872548146+e*(-793650757867488e-19+e*(4008217827329362e-21+e*-20109921818362437e-23)))}var Y3=Q3;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright, license, and long comment were part of the original implementation available as part of [FDLIBM]{@link http://www.netlib.org/fdlibm/s_expm1.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 2004 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var Z3=ne,O0=Fe,ln=Vt,Is=le,J3=Ee,z3=kr,x3=q3,e6=Y3,r6=709.782712893384,S0=.6931471803691238,w0=19082149292705877e-26,As=1.4426950408889634,t6=38.816242111356935,n6=1.0397207708399179;function i6(e){var r,t,n,a,i,s,l,o,u,f,c,v;if(e===Is||Z3(e))return e;if(e===J3)return-1;if(e===0)return e;if(e<0?(t=!0,l=-e):(t=!1,l=e),l>=t6){if(t)return-1;if(l>=r6)return Is}if(i=O0(l)|0,l>x3)l<n6?t?(n=e+S0,a=-w0,v=-1):(n=e-S0,a=w0,v=1):(t?v=As*e-.5:v=As*e+.5,v|=0,f=v,n=e-f*S0,a=f*w0),e=n-a,u=n-e-a;else{if(i<1016070144)return e;v=0}return r=.5*e,o=e*r,s=1+o*e6(o),f=3-s*r,c=o*((s-f)/(6-e*f)),v===0?e-(e*c-o):(c=e*(c-u)-u,c-=o,v===-1?.5*(e-c)-.5:v===1?e<-.25?-2*(c-(e+.5)):1+2*(e-c):v<=-2||v>56?(l=1-(c-e),n=O0(l)+(v<<20)|0,l=ln(l,n),l-1):(f=1,v<20?(n=1072693248-(2097152>>v)|0,f=ln(f,n),l=f-(c-e)):(n=z3-v<<20|0,f=ln(f,n),l=e-(c+f),l+=1),n=O0(l)+(v<<20)|0,ln(l,n)))}var a6=i6;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var s6=a6,o0=s6;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function l6(e){return e===0?.6666666666666735:.6666666666666735+e*(.3999999999940942+e*(.2857142874366239+e*(.22222198432149784+e*(.1818357216161805+e*(.15313837699209373+e*.14798198605116586)))))}var o6=l6;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright, license, and long comment were part of the original implementation available as part of [FDLIBM]{@link http://www.netlib.org/fdlibm/s_log1p.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 1993 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var f6=ne,Ns=Fe,Es=Vt,u6=le,c6=Ee,Ts=kr,v6=o6,F0=.6931471803691238,L0=19082149292705877e-26,p6=.41421356237309503,d6=-.2928932188134525,$6=1862645149230957e-24,m6=5551115123125783e-32,_6=9007199254740992,h6=.6666666666666666;function g6(e){var r,t,n,a,i,s,l,o,u,f;if(e<-1||f6(e))return NaN;if(e===-1)return c6;if(e===u6||e===0)return e;if(e<0?n=-e:n=e,f=1,n<p6){if(n<$6)return n<m6?e:e-e*e*.5;e>d6&&(f=0,a=e,t=1)}return f!==0&&(n<_6?(u=1+e,t=Ns(u),f=(t>>20)-Ts,f>0?i=1-(u-e):i=e-(u-1),i/=u):(u=e,t=Ns(u),f=(t>>20)-Ts,i=0),t&=1048575,t<434334?u=Es(u,t|1072693248):(f+=1,u=Es(u,t|1071644672),t=1048576-t>>2),a=u-1),r=.5*a*a,t===0?a===0?(i+=f*L0,f*F0+i):(o=r*(1-h6*a),f*F0-(o-(f*L0+i)-a)):(s=a/(2+a),l=s*s,o=l*v6(l),f===0?a-(r-s*(r+o)):f*F0-(r-(s*(r+o)+(f*L0+i))-a))}var y6=g6;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var b6=y6,fr=b6;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var I6=Math.sqrt,A6=I6;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var N6=A6,xe=N6;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var E6=.7853981633974483,T6=E6;/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function O6(e){var r,t,n;return e===0?.16666666666666713:(e<0?r=-e:r=e,r<=1?(t=-8.198089802484825+e*(19.562619833175948+e*(-16.262479672107002+e*(5.444622390564711+e*(-.6019598008014124+e*.004253011369004428)))),n=-49.18853881490881+e*(139.51056146574857+e*(-147.1791292232726+e*(70.49610280856842+e*(-14.740913729888538+e*1))))):(e=1/e,t=.004253011369004428+e*(-.6019598008014124+e*(5.444622390564711+e*(-16.262479672107002+e*(19.562619833175948+e*-8.198089802484825)))),n=1+e*(-14.740913729888538+e*(70.49610280856842+e*(-147.1791292232726+e*(139.51056146574857+e*-49.18853881490881))))),t/n)}var S6=O6;/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function w6(e){var r,t,n;return e===0?.08333333333333809:(e<0?r=-e:r=e,r<=1?(t=28.536655482610616+e*(-25.56901049652825+e*(6.968710824104713+e*(-.5634242780008963+e*.002967721961301243))),n=342.43986579130785+e*(-383.8770957603691+e*(147.0656354026815+e*(-21.947795316429207+e*1)))):(e=1/e,t=.002967721961301243+e*(-.5634242780008963+e*(6.968710824104713+e*(-25.56901049652825+e*28.536655482610616))),n=1+e*(-21.947795316429207+e*(147.0656354026815+e*(-383.8770957603691+e*342.43986579130785)))),t/n)}var F6=w6;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C code, long comment, copyright, license, and constants are from [Cephes]{@link http://www.netlib.org/cephes}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright 1984, 1995, 2000 by Stephen L. Moshier
*
* Some software in this archive may be from the book _Methods and Programs for Mathematical Functions_ (Prentice-Hall or Simon & Schuster International, 1989) or from the Cephes Mathematical Library, a commercial product. In either event, it is copyrighted by the author. What you see here may be used freely but it comes with no support or guarantee.
*
* Stephen L. Moshier
* moshier@na-net.ornl.gov
* ```
*/var L6=ne,C6=xe,Os=T6,P6=S6,M6=F6,H6=6123233995736766e-32;function R6(e){var r,t,n,a,i;if(L6(e))return NaN;if(e>0?n=e:(r=!0,n=-e),n>1)return NaN;if(n>.625)t=1-n,a=t*M6(t),t=C6(t+t),i=Os-t,t=t*a-H6,i-=t,i+=Os;else{if(n<1e-8)return e;t=n*n,i=t*P6(t),i=n*i+n}return r?-i:i}var D6=R6;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var U6=D6,W6=U6;/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function B6(e){return Math.abs(e)}var G6=B6;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var K6=G6,ie=K6;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var k6=Math.ceil,V6=k6;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var X6=V6,j6=X6;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var q6=Be,Q6=j6;function Y6(e){return e<0?Q6(e):q6(e)}var Z6=Y6;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var J6=Z6,_a=J6;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var z6=1023,x6=z6;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e4=-1023,r4=e4;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var t4=-1074,n4=t4;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var i4=le,a4=Ee;function s4(e){return e===i4||e===a4}var l4=s4;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var o4=l4,Xt=o4;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var f4=dt,$f,Wi,Bi;f4===!0?(Wi=1,Bi=0):(Wi=0,Bi=1);$f={HIGH:Wi,LOW:Bi};var u4=$f;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var c4=vt,v4=pt,mf=u4,_f=new v4(1),Ss=new c4(_f.buffer),p4=mf.HIGH,d4=mf.LOW;function $4(e,r){return _f[0]=r,e[0]=Ss[p4],e[1]=Ss[d4],e}var m4=$4;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ws=m4;function _4(e,r){return arguments.length===1?ws([0,0],e):ws(e,r)}var h4=_4;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var g4=h4,ha=g4;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var y4=dt,hf,Gi,Ki;y4===!0?(Gi=1,Ki=0):(Gi=0,Ki=1);hf={HIGH:Gi,LOW:Ki};var b4=hf;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var I4=vt,A4=pt,gf=b4,yf=new A4(1),Fs=new I4(yf.buffer),N4=gf.HIGH,E4=gf.LOW;function T4(e,r){return Fs[N4]=e,Fs[E4]=r,yf[0]}var O4=T4;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var S4=O4,ga=S4;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var w4=ha,F4=Fe,L4=ga,C4=2147483648>>>0,P4=2147483647,C0=[0,0];function M4(e,r){var t,n;return w4(C0,e),t=C0[0],t&=P4,n=F4(r),n&=C4,t|=n,L4(t,C0[1])}var H4=M4;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var R4=H4,ya=R4;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var D4=22250738585072014e-324,jt=D4;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var U4=jt,W4=Xt,B4=ne,G4=ie,K4=4503599627370496;function k4(e,r,t,n){return B4(e)||W4(e)?(r[n]=e,r[n+t]=0,r):e!==0&&G4(e)<U4?(r[n]=e*K4,r[n+t]=-52,r):(r[n]=e,r[n+t]=0,r)}var bf=k4;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var V4=bf;function X4(e){return V4(e,[0,0],1,0)}var j4=X4;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var q4=s0,If=j4,Q4=bf;q4(If,"assign",Q4);var Y4=If;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Z4=2146435072,J4=Z4;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var z4=Fe,x4=J4,e5=kr;function r5(e){var r=z4(e);return r=(r&x4)>>>20,r-e5|0}var t5=r5;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var n5=t5,i5=n5;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var a5=le,s5=Ee,l5=kr,o5=x6,f5=r4,u5=n4,c5=ne,v5=Xt,p5=ya,d5=Y4.assign,$5=i5,m5=ha,_5=ga,h5=2220446049250313e-31,g5=2148532223>>>0,P0=[0,0],M0=[0,0];function y5(e,r){var t,n;return r===0||e===0||c5(e)||v5(e)?e:(d5(e,P0,1,0),e=P0[0],r+=P0[1],r+=$5(e),r<u5?p5(0,e):r>o5?e<0?s5:a5:(r<=f5?(r+=52,n=h5):n=1,m5(M0,e),t=M0[0],t&=g5,t|=r+l5<<20,n*_5(t,M0[1])))}var b5=y5;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var I5=b5,ba=I5;/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function A5(e){return e===0?.16666666666666602:.16666666666666602+e*(-.0027777777777015593+e*(6613756321437934e-20+e*(-16533902205465252e-22+e*41381367970572385e-24)))}var N5=A5;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright, license, and long comment were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/e_exp.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 2004 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var E5=ba,T5=N5;function O5(e,r,t){var n,a,i,s;return n=e-r,a=n*n,i=n-a*T5(a),s=1-(r-n*i/(2-i)-e),E5(s,t)}var S5=O5;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright, license, and long comment were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/e_exp.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 2004 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var w5=ne,Ls=_a,F5=Ee,Cs=le,L5=S5,C5=.6931471803691238,P5=19082149292705877e-26,Ps=1.4426950408889634,M5=709.782712893384,H5=-745.1332191019411,Af=1/(1<<28),R5=-Af;function D5(e){var r,t,n;return w5(e)||e===Cs?e:e===F5?0:e>M5?Cs:e<H5?0:e>R5&&e<Af?1+e:(e<0?n=Ls(Ps*e-.5):n=Ls(Ps*e+.5),r=e-n*C5,t=n*P5,L5(r,t,n))}var U5=D5;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var W5=U5,ge=W5;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var B5=Be;function G5(e){return B5(e)===e}var K5=G5;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var k5=K5,qt=k5;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var V5=qt;function X5(e){return V5(e/2)}var j5=X5;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var q5=j5,Q5=q5;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ms=Q5;function Y5(e){return e>0?Ms(e-1):Ms(e+1)}var Z5=Y5;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var J5=Z5,Ia=J5;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var z5=dt,ki;z5===!0?ki=0:ki=1;var x5=ki;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e7=vt,r7=pt,t7=x5,Vi=new r7(1),n7=new e7(Vi.buffer);function i7(e,r){return Vi[0]=e,n7[t7]=r>>>0,Vi[0]}var a7=i7;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var s7=a7,Qt=s7;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function l7(e){return e|0}var o7=l7;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var f7=o7,Nf=f7;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/s_pow.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 2004 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var Hs=Ia,u7=ya,c7=Ee,on=le;function v7(e,r){return r===c7?on:r===on?0:r>0?Hs(r)?e:0:Hs(r)?u7(on,e):on}var p7=v7;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/s_pow.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 2004 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var d7=Fe,$7=2147483647,m7=1072693247,fn=1e300,un=1e-300;function _7(e,r){var t,n;return n=d7(e),t=n&$7,t<=m7?r<0?fn*fn:un*un:r>0?fn*fn:un*un}var h7=_7;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var g7=ie,Rs=le;function y7(e,r){return e===-1?(e-e)/(e-e):e===1?1:g7(e)<1==(r===Rs)?0:Rs}var b7=y7;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function I7(e){return e===0?.5999999999999946:.5999999999999946+e*(.4285714285785502+e*(.33333332981837743+e*(.272728123808534+e*(.23066074577556175+e*.20697501780033842))))}var A7=I7;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/s_pow.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 2004 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var N7=Fe,cn=Qt,Ds=Vt,E7=kr,T7=A7,O7=1048575,Us=1048576,S7=1072693248,w7=536870912,F7=524288,L7=20,C7=9007199254740992,P7=.9617966939259756,M7=.9617967009544373,H7=-7028461650952758e-24,R7=[1,1.5],D7=[0,.5849624872207642],U7=[0,1350039202129749e-23];function W7(e,r,t){var n,a,i,s,l,o,u,f,c,v,d,_,h,T,I,M,N,B,W,ae,ee,P;return ae=0,t<Us&&(r*=C7,ae-=53,t=N7(r)),ae+=(t>>L7)-E7|0,ee=t&O7|0,t=ee|S7|0,ee<=235662?P=0:ee<767610?P=1:(P=0,ae+=1,t-=Us),r=Ds(r,t),f=R7[P],B=r-f,W=1/(r+f),a=B*W,s=cn(a,0),n=(t>>1|w7)+F7,n+=P<<18,o=Ds(0,n),u=r-(o-f),l=W*(B-s*o-s*u),i=a*a,N=i*i*T7(i),N+=l*(s+a),i=s*s,o=3+i+N,o=cn(o,0),u=N-(o-3-i),B=s*o,W=l*o+u*a,v=B+W,v=cn(v,0),d=W-(v-B),_=M7*v,h=H7*v+d*P7+U7[P],c=D7[P],M=ae,T=_+h+c+M,T=cn(T,0),I=h-(T-M-c-_),e[0]=T,e[1]=I,e}var B7=W7;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function G7(e){return e===0?.5:.5+e*(-.3333333333333333+e*.25)}var K7=G7;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/s_pow.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 2004 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var k7=Qt,V7=K7,X7=1.4426950408889634,j7=1.4426950216293335,q7=19259629911266175e-24;function Q7(e,r){var t,n,a,i,s,l;return a=r-1,i=a*a*V7(a),s=j7*a,l=a*q7-i*X7,n=s+l,n=k7(n,0),t=l-(n-s),e[0]=n,e[1]=t,e}var Y7=Q7;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Z7=.6931471805599453,J7=Z7;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function z7(e){return e===0?.16666666666666602:.16666666666666602+e*(-.0027777777777015593+e*(6613756321437934e-20+e*(-16533902205465252e-22+e*41381367970572385e-24)))}var x7=z7;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/s_pow.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 2004 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var e8=Fe,Ws=Vt,r8=Qt,t8=Nf,n8=ba,i8=J7,Bs=kr,a8=x7,Gs=2147483647,Ks=1048575,ks=1048576,s8=1071644672,bt=20,l8=.6931471824645996,o8=-1904654299957768e-24;function f8(e,r,t){var n,a,i,s,l,o,u,f,c,v,d;return v=e&Gs|0,d=(v>>bt)-Bs|0,c=0,v>s8&&(c=e+(ks>>d+1)>>>0,d=((c&Gs)>>bt)-Bs|0,n=(c&~(Ks>>d))>>>0,i=Ws(0,n),c=(c&Ks|ks)>>bt-d>>>0,e<0&&(c=-c),r-=i),i=t+r,i=r8(i,0),l=i*l8,o=(t-(i-r))*i8+i*o8,f=l+o,u=o-(f-l),i=f*f,a=f-i*a8(i),s=f*a/(a-2)-(u+f*u),f=1-(s-f),e=e8(f),e=t8(e),e+=c<<bt>>>0,e>>bt<=0?f=n8(f,c):f=Ws(f,e),f}var u8=f8;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/s_pow.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 2004 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var Vs=ne,Xs=Ia,js=Xt,c8=qt,qs=xe,v8=ie,H0=ha,p8=Qt,Qs=Nf,d8=Ee,$8=le,m8=p7,_8=h7,h8=b7,g8=B7,y8=Y7,b8=u8,R0=2147483647,I8=1072693247,A8=1105199104,N8=1139802112,Ys=1083179008,E8=1072693248,T8=1083231232,O8=3230714880>>>0,Zs=31,pr=1e300,dr=1e-300,S8=8008566259537294e-32,rr=[0,0],Js=[0,0];function Ef(e,r){var t,n,a,i,s,l,o,u,f,c,v,d,_,h,T,I;if(Vs(e)||Vs(r))return NaN;if(H0(rr,r),l=rr[0],o=rr[1],o===0){if(r===0)return 1;if(r===1)return e;if(r===-1)return 1/e;if(r===.5)return qs(e);if(r===-.5)return 1/qs(e);if(r===2)return e*e;if(r===3)return e*e*e;if(r===4)return e*=e,e*e;if(js(r))return h8(e,r)}if(H0(rr,e),i=rr[0],s=rr[1],s===0){if(i===0)return m8(e,r);if(e===1)return 1;if(e===-1&&Xs(r))return-1;if(js(e))return e===d8?Ef(-0,-r):r<0?0:$8}if(e<0&&c8(r)===!1)return(e-e)/(e-e);if(a=v8(e),t=i&R0|0,n=l&R0|0,u=i>>>Zs|0,f=l>>>Zs|0,u&&Xs(r)?u=-1:u=1,n>A8){if(n>N8)return _8(e,r);if(t<I8)return f===1?u*pr*pr:u*dr*dr;if(t>E8)return f===0?u*pr*pr:u*dr*dr;_=y8(Js,a)}else _=g8(Js,a,t);if(c=p8(r,0),d=(r-c)*_[0]+r*_[1],v=c*_[0],h=d+v,H0(rr,h),T=Qs(rr[0]),I=Qs(rr[1]),T>=Ys){if((T-Ys|I)!==0||d+S8>h-v)return u*pr*pr}else if((T&R0)>=T8&&((T-O8|I)!==0||d<=h-v))return u*dr*dr;return h=b8(T,v,d),u*h}var w8=Ef;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var F8=w8,be=F8;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var L8=2.718281828459045,$t=L8;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var C8=2220446049250313e-31,Or=C8;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function P8(e){var r,t,n;return e===0?1/0:(e<0?r=-e:r=e,r<=1?(t=709811.662581658+e*(679979.8474157227+e*(293136.7857211597+e*(74887.54032914672+e*(12555.290582413863+e*(1443.4299244417066+e*(115.24194596137347+e*(6.309239205732627+e*(.22668404630224365+e*(.004826466289237662+e*4624429436045379e-20))))))))),n=0+e*(362880+e*(1026576+e*(1172700+e*(723680+e*(269325+e*(63273+e*(9450+e*(870+e*(45+e*1)))))))))):(e=1/e,t=4624429436045379e-20+e*(.004826466289237662+e*(.22668404630224365+e*(6.309239205732627+e*(115.24194596137347+e*(1443.4299244417066+e*(12555.290582413863+e*(74887.54032914672+e*(293136.7857211597+e*(679979.8474157227+e*709811.662581658))))))))),n=1+e*(45+e*(870+e*(9450+e*(63273+e*(269325+e*(723680+e*(1172700+e*(1026576+e*(362880+e*0)))))))))),t/n)}var M8=P8;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{http://www.boost.org/doc/libs/1_64_0/boost/math/special_functions/beta.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var zs=ne,H8=fr,R8=xe,D8=ie,U8=ge,D0=be,W8=$t,U0=Or,W0=M8,B0=10.900511;function B8(e,r){var t,n,a,i,s,l,o;return zs(e)||zs(r)?NaN:e<0||r<0?NaN:r===1?1/e:e===1?1/r:(o=e+r,o<U0?(s=o/e,s/=r,s):o===e&&r<U0?1/r:o===r&&e<U0?1/e:(e<r&&(l=r,r=e,e=l),n=e+B0-.5,a=r+B0-.5,i=o+B0-.5,s=W0(e)*(W0(r)/W0(o)),t=e-.5-r,D8(r*t)<i*100&&e>100?s*=U8(t*H8(-r/i)):s*=D0(n/i,t),i>1e10?s*=D0(n/i*(a/i),r):s*=D0(n*a/(i*i),r),s*=R8(W8/a),s))}var G8=B8;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var K8=G8,k8=K8;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var V8=le;function X8(e){return e===0&&1/e===V8}var j8=X8;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var q8=j8,Q8=q8;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var xs=Q8,G0=ne,Y8=Ee,vn=le;function Z8(e,r){var t,n,a,i;if(t=arguments.length,t===2)return G0(e)||G0(r)?NaN:e===vn||r===vn?vn:e===r&&e===0?xs(e)?e:r:e>r?e:r;for(n=Y8,i=0;i<t;i++){if(a=arguments[i],G0(a)||a===vn)return a;(a>n||a===n&&a===0&&xs(a))&&(n=a)}return n}var J8=Z8;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var z8=J8,f0=z8;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var x8=Ee;function e9(e){return e===0&&1/e===x8}var r9=e9;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var t9=r9,Tf=t9;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var el=Tf,K0=ne,pn=Ee,n9=le;function i9(e,r){var t,n,a,i;if(t=arguments.length,t===2)return K0(e)||K0(r)?NaN:e===pn||r===pn?pn:e===r&&e===0?el(e)?e:r:e<r?e:r;for(n=n9,i=0;i<t;i++){if(a=arguments[i],K0(a)||a===pn)return a;(a<n||a===n&&a===0&&el(a))&&(n=a)}return n}var a9=i9;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var s9=a9,Yt=s9;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var l9=17976931348623157e292,Of=l9;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var o9=2147483647,f9=o9;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var u9=1.5707963267948966,c9=u9;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var v9=3.141592653589793,Zt=v9;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function p9(e){return e===0?.0416666666666666:.0416666666666666+e*(-.001388888888887411+e*2480158728947673e-20)}var d9=p9;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function $9(e){return e===0?-27557314351390663e-23:-27557314351390663e-23+e*(2087572321298175e-24+e*-11359647557788195e-27)}var m9=$9;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright, license, and long comment were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/k_cos.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 1993 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var _9=d9,h9=m9;function g9(e,r){var t,n,a,i;return i=e*e,a=i*i,n=i*_9(i),n+=a*a*h9(i),t=.5*i,a=1-t,a+(1-a-t+(i*n-e*r))}var y9=g9;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var b9=y9,Sf=b9;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright, license, and long comment were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/k_sin.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 1993 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var rl=-.16666666666666632,I9=.00833333333332249,A9=-.0001984126982985795,N9=27557313707070068e-22,E9=-25050760253406863e-24,T9=158969099521155e-24;function O9(e,r){var t,n,a,i;return i=e*e,a=i*i,t=I9+i*(A9+i*N9)+i*a*(E9+i*T9),n=i*e,r===0?e+n*(rl+i*t):e-(i*(.5*r-n*t)-r-n*rl)}var S9=O9;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var w9=S9,wf=w9;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var F9=dt,Xi;F9===!0?Xi=0:Xi=1;var L9=Xi;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var C9=vt,P9=pt,M9=L9,Ff=new P9(1),H9=new C9(Ff.buffer);function R9(e){return Ff[0]=e,H9[M9]}var D9=R9;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var U9=D9,W9=U9;/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function B9(e,r){var t,n;for(t=[],n=0;n<r;n++)t.push(e);return t}var G9=B9;/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var K9=G9,k9=K9;/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var V9=k9;function X9(e){return V9(0,e)}var j9=X9;/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var q9=j9,Q9=q9;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/k_rem_pio2.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 1993 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var Y9=Be,dn=ba,u0=Q9,Lf=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],Z9=[1.570796251296997,7549789415861596e-23,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],k0=16777216,V0=5960464477539063e-23,$n=u0(20),tl=u0(20),mn=u0(20),ve=u0(20);function Cf(e,r,t,n,a,i,s,l,o){var u,f,c,v,d,_,h,T,I;for(v=i,I=n[t],T=t,d=0;T>0;d++)f=V0*I|0,ve[d]=I-k0*f|0,I=n[T-1]+f,T-=1;if(I=dn(I,a),I-=8*Y9(I*.125),h=I|0,I-=h,c=0,a>0?(d=ve[t-1]>>24-a,h+=d,ve[t-1]-=d<<24-a,c=ve[t-1]>>23-a):a===0?c=ve[t-1]>>23:I>=.5&&(c=2),c>0){for(h+=1,u=0,d=0;d<t;d++)T=ve[d],u===0?T!==0&&(u=1,ve[d]=16777216-T):ve[d]=16777215-T;if(a>0)switch(a){case 1:ve[t-1]&=8388607;break;case 2:ve[t-1]&=4194303;break}c===2&&(I=1-I,u!==0&&(I-=dn(1,a)))}if(I===0){for(T=0,d=t-1;d>=i;d--)T|=ve[d];if(T===0){for(_=1;ve[i-_]===0;_++);for(d=t+1;d<=t+_;d++){for(o[l+d]=Lf[s+d],f=0,T=0;T<=l;T++)f+=e[T]*o[l+(d-T)];n[d]=f}return t+=_,Cf(e,r,t,n,a,i,s,l,o)}}if(I===0)for(t-=1,a-=24;ve[t]===0;)t-=1,a-=24;else I=dn(I,-a),I>=k0?(f=V0*I|0,ve[t]=I-k0*f|0,t+=1,a+=24,ve[t]=f):ve[t]=I|0;for(f=dn(1,a),d=t;d>=0;d--)n[d]=f*ve[d],f*=V0;for(d=t;d>=0;d--){for(f=0,_=0;_<=v&&_<=t-d;_++)f+=Z9[_]*n[d+_];mn[t-d]=f}for(f=0,d=t;d>=0;d--)f+=mn[d];for(c===0?r[0]=f:r[0]=-f,f=mn[0]-f,d=1;d<=t;d++)f+=mn[d];return c===0?r[1]=f:r[1]=-f,h&7}function J9(e,r,t,n){var a,i,s,l,o,u,f,c,v;for(i=4,l=n-1,s=(t-3)/24|0,s<0&&(s=0),u=t-24*(s+1),c=s-l,v=l+i,f=0;f<=v;f++)c<0?$n[f]=0:$n[f]=Lf[c],c+=1;for(f=0;f<=i;f++){for(a=0,c=0;c<=l;c++)a+=e[c]*$n[l+(f-c)];tl[f]=a}return o=i,Cf(e,r,o,tl,u,i,s,l,$n)}var z9=J9;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var x9=Math.round,ep=x9;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var rp=ep,Pf=rp;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/k_rem_pio2.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 1993 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var tp=Pf,nl=Fe,np=.6366197723675814,ip=1.5707963267341256,ap=6077100506506192e-26,sp=6077100506303966e-26,lp=20222662487959506e-37,op=20222662487111665e-37,fp=84784276603689e-45,il=2047;function up(e,r,t){var n,a,i,s,l,o,u;return a=tp(e*np),s=e-a*ip,l=a*ap,u=r>>20|0,t[0]=s-l,n=nl(t[0]),o=u-(n>>20&il),o>16&&(i=s,l=a*sp,s=i-l,l=a*lp-(i-s-l),t[0]=s-l,n=nl(t[0]),o=u-(n>>20&il),o>49&&(i=s,l=a*op,s=i-l,l=a*fp-(i-s-l),t[0]=s-l)),t[1]=s-t[0]-l,a}var cp=up;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/e_rem_pio2.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 1993 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
*
* Optimized by Bruce D. Evans.
* ```
*/var vp=Fe,pp=W9,dp=ga,$p=z9,_n=cp,mp=0,_p=16777216,$r=1.5707963267341256,Br=6077100506506192e-26,hn=2*Br,gn=3*Br,yn=4*Br,hp=2147483647,gp=2146435072,yp=1048575,bp=598523,Ip=1072243195,Ap=1073928572,Np=1074752122,Ep=1074977148,Tp=1075183036,Op=1075388923,Sp=1075594811,wp=1094263291,It=[0,0,0],At=[0,0];function Fp(e,r){var t,n,a,i,s,l,o,u;if(a=vp(e),i=a&hp|0,i<=Ip)return r[0]=e,r[1]=0,0;if(i<=Np)return(i&yp)===bp?_n(e,i,r):i<=Ap?e>0?(u=e-$r,r[0]=u-Br,r[1]=u-r[0]-Br,1):(u=e+$r,r[0]=u+Br,r[1]=u-r[0]+Br,-1):e>0?(u=e-2*$r,r[0]=u-hn,r[1]=u-r[0]-hn,2):(u=e+2*$r,r[0]=u+hn,r[1]=u-r[0]+hn,-2);if(i<=Sp)return i<=Tp?i===Ep?_n(e,i,r):e>0?(u=e-3*$r,r[0]=u-gn,r[1]=u-r[0]-gn,3):(u=e+3*$r,r[0]=u+gn,r[1]=u-r[0]+gn,-3):i===Op?_n(e,i,r):e>0?(u=e-4*$r,r[0]=u-yn,r[1]=u-r[0]-yn,4):(u=e+4*$r,r[0]=u+yn,r[1]=u-r[0]+yn,-4);if(i<wp)return _n(e,i,r);if(i>=gp)return r[0]=NaN,r[1]=NaN,0;for(t=pp(e),n=(i>>20)-1046,u=dp(i-(n<<20|0),t),l=0;l<2;l++)It[l]=u|0,u=(u-It[l])*_p;for(It[2]=u,s=3;It[s-1]===mp;)s-=1;return o=$p(It,At,n,s),e<0?(r[0]=-At[0],r[1]=-At[1],-o):(r[0]=At[0],r[1]=At[1],o)}var Lp=Fp;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Cp=Lp,Mf=Cp;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright, license, and long comment were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/s_sin.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 1993 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var Pp=Fe,al=Sf,X0=wf,Mp=Mf,Hp=2147483647,Rp=2146435072,Dp=1072243195,Up=1045430272,tr=[0,0];function Wp(e){var r,t;if(r=Pp(e),r&=Hp,r<=Dp)return r<Up?e:X0(e,0);if(r>=Rp)return NaN;switch(t=Mp(e,tr),t&3){case 0:return X0(tr[0],tr[1]);case 1:return al(tr[0],tr[1]);case 2:return-X0(tr[0],tr[1]);default:return-al(tr[0],tr[1])}}var Bp=Wp;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Gp=Bp,Hf=Gp;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Kp=2.5066282746310007,Rf=Kp;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function kp(e){return e===0?.08333333333334822:.08333333333334822+e*(.0034722222160545866+e*(-.0026813261780578124+e*(-.00022954996161337813+e*.0007873113957930937)))}var Vp=kp;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C code, copyright, license, and constants are from [Cephes]{@link http://www.netlib.org/cephes}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright 1984, 1987, 1989, 1992, 2000 by Stephen L. Moshier
*
* Some software in this archive may be from the book _Methods and Programs for Mathematical Functions_ (Prentice-Hall or Simon & Schuster International, 1989) or from the Cephes Mathematical Library, a commercial product. In either event, it is copyrighted by the author. What you see here may be used freely but it comes with no support or guarantee.
*
* Stephen L. Moshier
* moshier@na-net.ornl.gov
* ```
*/var Xp=Rf,sl=be,jp=ge,qp=Vp,Qp=143.01608;function Yp(e){var r,t,n;return r=1/e,r=1+r*qp(r),t=jp(e),e>Qp?(n=sl(e,.5*e-.25),t=n*(n/t)):t=sl(e,e-.5)/t,Xp*t*r}var Zp=Yp;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Jp=.5772156649015329,zp=Jp;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C code, copyright, license, and constants are from [Cephes]{@link http://www.netlib.org/cephes}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright 1984, 1987, 1989, 1992, 2000 by Stephen L. Moshier
*
* Some software in this archive may be from the book _Methods and Programs for Mathematical Functions_ (Prentice-Hall or Simon & Schuster International, 1989) or from the Cephes Mathematical Library, a commercial product. In either event, it is copyrighted by the author. What you see here may be used freely but it comes with no support or guarantee.
*
* Stephen L. Moshier
* moshier@na-net.ornl.gov
* ```
*/var xp=zp;function ed(e,r){return r/((1+xp*e)*e)}var rd=ed;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function td(e){var r,t,n;return e===0?1:(e<0?r=-e:r=e,r<=1?(t=1+e*(.4942148268014971+e*(.20744822764843598+e*(.04763678004571372+e*(.010421379756176158+e*(.0011913514700658638+e*(.00016011952247675185+e*0)))))),n=1+e*(.0714304917030273+e*(-.23459179571824335+e*(.035823639860549865+e*(.011813978522206043+e*(-.004456419138517973+e*(.0005396055804933034+e*-23158187332412014e-21))))))):(e=1/e,t=0+e*(.00016011952247675185+e*(.0011913514700658638+e*(.010421379756176158+e*(.04763678004571372+e*(.20744822764843598+e*(.4942148268014971+e*1)))))),n=-23158187332412014e-21+e*(.0005396055804933034+e*(-.004456419138517973+e*(.011813978522206043+e*(.035823639860549865+e*(-.23459179571824335+e*(.0714304917030273+e*1))))))),t/n)}var nd=td;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C code, long comment, copyright, license, and constants are from [Cephes]{@link http://www.netlib.org/cephes}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright 1984, 1987, 1989, 1992, 2000 by Stephen L. Moshier
*
* Some software in this archive may be from the book _Methods and Programs for Mathematical Functions_ (Prentice-Hall or Simon & Schuster International, 1989) or from the Cephes Mathematical Library, a commercial product. In either event, it is copyrighted by the author. What you see here may be used freely but it comes with no support or guarantee.
*
* Stephen L. Moshier
* moshier@na-net.ornl.gov
* ```
*/var id=ne,ad=qt,sd=Tf,ll=ie,ld=Be,od=Hf,ol=le,fl=Ee,ul=Zt,cl=Zp,vl=rd,fd=nd;function ud(e){var r,t,n,a;if(ad(e)&&e<0||e===fl||id(e))return NaN;if(e===0)return sd(e)?fl:ol;if(e>171.61447887182297)return ol;if(e<-170.5674972726612)return 0;if(t=ll(e),t>33)return e>=0?cl(e):(n=ld(t),(n&1)===0?r=-1:r=1,a=t-n,a>.5&&(n+=1,a=t-n),a=t*od(ul*a),r*ul/(ll(a)*cl(t)));for(a=1;e>=3;)e-=1,a*=e;for(;e<0;){if(e>-1e-9)return vl(e,a);a/=e,e+=1}for(;e<2;){if(e<1e-9)return vl(e,a);a/=e,e+=1}return e===2?a:(e-=2,a*fd(e))}var cd=ud;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var vd=cd,Vr=vd;const pd=[1,1,2,6,24,120,720,5040,40320,362880,3628800,39916800,479001600,6227020800,87178291200,1307674368e3,20922789888e3,355687428096e3,6402373705728e3,121645100408832e3,243290200817664e4,5109094217170944e4,11240007277776077e5,2585201673888498e7,6204484017332394e8,15511210043330986e9,40329146112660565e10,10888869450418352e12,30488834461171387e13,8841761993739702e15,26525285981219107e16,8222838654177922e18,2631308369336935e20,8683317618811886e21,29523279903960416e22,10333147966386145e24,37199332678990125e25,13763753091226346e27,5230226174666011e29,20397882081197444e30,8159152832478977e32,3345252661316381e34,140500611775288e37,6041526306337383e37,2658271574788449e39,11962222086548019e40,5502622159812089e42,25862324151116818e43,12413915592536073e45,6082818640342675e47,30414093201713376e48,15511187532873822e50,8065817517094388e52,42748832840600255e53,2308436973392414e56,12696403353658276e57,7109985878048635e59,40526919504877214e60,23505613312828785e62,13868311854568984e64,832098711274139e67,5075802138772248e68,3146997326038794e70,198260831540444e73,12688693218588417e73,8247650592082472e75,5443449390774431e77,3647111091818868e79,24800355424368305e80,1711224524281413e83,11978571669969892e84,8504785885678623e86,61234458376886085e87,44701154615126844e89,3307885441519386e92,248091408113954e95,18854947016660504e95,14518309202828587e97,11324281178206297e99,8946182130782976e101,7156945704626381e103,5797126020747368e105,4753643337012842e107,3945523969720659e109,3314240134565353e111,281710411438055e114,24227095383672734e114,2107757298379528e117,18548264225739844e118,1650795516090846e121,14857159644817615e122,1352001527678403e125,12438414054641308e126,11567725070816416e128,1087366156656743e131,1032997848823906e133,9916779348709496e134,9619275968248212e136,9426890448883248e138,9332621544394415e140,9332621544394415e142,942594775983836e145,9614466715035127e146,990290071648618e149,10299016745145628e150,1081396758240291e153,11462805637347084e154,1226520203196138e157,1324641819451829e159,14438595832024937e160,1588245541522743e163,17629525510902446e164,1974506857221074e167,22311927486598138e168,25435597334721877e170,2925093693493016e173,3393108684451898e175,3969937160808721e177,4684525849754291e179,5574585761207606e181,6689502913449127e183,8094298525273444e185,9875044200833601e187,1214630436702533e190,1506141741511141e192,1882677176888926e194,2372173242880047e196,30126600184576594e197,3856204823625804e200,4974504222477287e202,6466855489220474e204,847158069087882e207,11182486511960043e208,14872707060906857e210,19929427461615188e212,26904727073180504e214,3659042881952549e217,5012888748274992e219,6917786472619489e221,9615723196941089e223,13462012475717526e225,1898143759076171e228,2695364137888163e230,3854370717180073e232,55502938327393044e233,8047926057471992e236,11749972043909107e238,1727245890454639e241,25563239178728654e242,380892263763057e246,5713383956445855e247,862720977423324e250,13113358856834524e251,20063439050956823e253,30897696138473508e255,4789142901463394e258,7471062926282894e260,11729568794264145e262,1853271869493735e265,29467022724950384e266,47147236359920616e268,7590705053947219e271,12296942187394494e273,20044015765453026e275,3287218585534296e278,5423910666131589e280,9003691705778438e282,1503616514864999e285,25260757449731984e286,4269068009004705e289,7257415615307999e291];/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var dd=ne,$d=qt,md=Vr,_d=le,hd=pd,gd=170;function yd(e){return dd(e)?NaN:$d(e)?e<0?NaN:e<=gd?hd[e]:_d:md(e+1)}var bd=yd;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Id=bd,Df=Id;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Ad(e){var r,t,n;return e===0?1/0:(e<0?r=-e:r=e,r<=1?(t=3847467039331777e-5+e*(3685766504351951e-5+e*(1588920245372942e-5+e*(4059208354298835e-6+e*(6805476611834733e-7+e*(7823975500312005e-8+e*(6246580776401795e-9+e*(341986.3488721347+e*(12287.194511824551+e*(261.61404416416684+e*2.5066282746310007))))))))),n=0+e*(362880+e*(1026576+e*(1172700+e*(723680+e*(269325+e*(63273+e*(9450+e*(870+e*(45+e*1)))))))))):(e=1/e,t=2.5066282746310007+e*(261.61404416416684+e*(12287.194511824551+e*(341986.3488721347+e*(6246580776401795e-9+e*(7823975500312005e-8+e*(6805476611834733e-7+e*(4059208354298835e-6+e*(1588920245372942e-5+e*(3685766504351951e-5+e*3847467039331777e-5))))))))),n=1+e*(45+e*(870+e*(9450+e*(63273+e*(269325+e*(723680+e*(1172700+e*(1026576+e*(362880+e*0)))))))))),t/n)}var Nd=Ad;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_64_0/boost/math/special_functions/lanczos.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* Copyright John Maddock 2006.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var Ed=Nd,Td=Ed;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Od=Td,Sd=Od;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var wd=10.900511,Jt=wd;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_64_0/boost/math/special_functions/gamma.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* Copyright John Maddock 2006-7, 2013-14.
* Copyright Paul A. Bristow 2007, 2013-14.
* Copyright Nikhar Agrawal 2013-14.
* Copyright Christopher Kormanyos 2013-14.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var pl=Sd,Fd=Vr,dl=fr,$l=ie,ml=ge,_l=be,Ld=Or,Cd=$t,Pd=Jt,hl=170,Md=4269068009004705e289;function Uf(e,r){var t,n,a;return e<Ld?r>hl?(n=Uf(r,hl-r),n*=e,n*=Md,1/n):1/(e*Fd(e+r)):(a=e+Pd-.5,e+r===e?$l(r)<10?t=ml((.5-e)*dl(r/a)):t=1:($l(r)<10?t=ml((.5-e)*dl(r/a)):t=_l(a/(a+r),e-.5),t*=pl(e)/pl(e+r)),t*=_l(Cd/(a+r),r),t)}var Hd=Uf;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_64_0/boost/math/special_functions/gamma.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* Copyright John Maddock 2006-7, 2013-14.
* Copyright Paul A. Bristow 2007, 2013-14.
* Copyright Nikhar Agrawal 2013-14.
* Copyright Christopher Kormanyos 2013-14.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var Rd=ie,gl=Be,yl=Vr,bl=Df,Dd=Hd,Il=170;function Ud(e,r){var t,n,a;if(e<=0||e+r<=0)return yl(e)/yl(e+r);if(n=gl(r),n===r){if(a=gl(e),a===e&&e<=Il&&e+r<=Il)return bl(a-1)/bl(n+a-1);if(Rd(r)<20){if(r===0)return 1;if(r<0){for(e-=1,t=e,r+=1;r!==0;)e-=1,t*=e,r+=1;return t}for(t=1/e,r-=1;r!==0;)e+=1,t/=e,r-=1;return t}}return Dd(e,r)}var Wd=Ud;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Bd=Wd,Gd=Bd;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Kd(e){return e===0?.3999999999940942:.3999999999940942+e*(.22222198432149784+e*.15313837699209373)}var kd=Kd;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Vd(e){return e===0?.6666666666666735:.6666666666666735+e*(.2857142874366239+e*(.1818357216161805+e*.14798198605116586))}var Xd=Vd;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/e_log.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 1993 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var Al=Fe,jd=Vt,qd=ne,Qd=kr,Yd=Ee,Zd=kd,Jd=Xd,bn=.6931471803691238,In=19082149292705877e-26,zd=0x40000000000000,xd=.3333333333333333,Nl=1048575,e$=2146435072,r$=1048576,t$=1072693248;function n$(e){var r,t,n,a,i,s,l,o,u,f,c,v;return e===0?Yd:qd(e)||e<0?NaN:(t=Al(e),i=0,t<r$&&(i-=54,e*=zd,t=Al(e)),t>=e$?e+e:(i+=(t>>20)-Qd|0,t&=Nl,o=t+614244&1048576|0,e=jd(e,t|o^t$),i+=o>>20|0,l=e-1,(Nl&2+t)<3?l===0?i===0?0:i*bn+i*In:(s=l*l*(.5-xd*l),i===0?l-s:i*bn-(s-i*In-l)):(f=l/(2+l),v=f*f,o=t-398458|0,c=v*v,u=440401-t|0,a=c*Zd(c),n=v*Jd(c),o|=u,s=n+a,o>0?(r=.5*l*l,i===0?l-(r-f*(r+s)):i*bn-(r-(f*(r+s)+i*In)-l)):i===0?l-f*(l-s):i*bn-(f*(l-s)-i*In-l))))}var i$=n$;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var a$=i$,Le=a$;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright, license, and long comment were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/s_cos.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 1993 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var s$=Fe,j0=Sf,El=wf,l$=Mf,nr=[0,0],o$=2147483647,f$=1072243195,u$=1044381696,c$=2146435072;function v$(e){var r,t;if(r=s$(e),r&=o$,r<=f$)return r<u$?1:j0(e,0);if(r>=c$)return NaN;switch(t=l$(e,nr),t&3){case 0:return j0(nr[0],nr[1]);case 1:return-El(nr[0],nr[1]);case 2:return-j0(nr[0],nr[1]);default:return El(nr[0],nr[1])}}var p$=v$;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var d$=p$,$$=d$;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var m$=ne,_$=Xt,Tl=$$,q0=Hf,h$=ie,Nt=ya,Et=Zt;function g$(e){var r,t;return m$(e)?NaN:_$(e)?NaN:(t=e%2,r=h$(t),r===0||r===1?Nt(0,t):r<.25?q0(Et*t):r<.75?(r=.5-r,Nt(Tl(Et*r),t)):r<1.25?(t=Nt(1,t)-t,q0(Et*t)):r<1.75?(r-=1.5,-Nt(Tl(Et*r),t)):(t-=Nt(2,t),q0(Et*t)))}var y$=g$;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var b$=y$,I$=b$;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function A$(e){return e===0?.06735230105312927:.06735230105312927+e*(.007385550860814029+e*(.0011927076318336207+e*(.00022086279071390839+e*25214456545125733e-21)))}var N$=A$;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function E$(e){return e===0?.020580808432516733:.020580808432516733+e*(.0028905138367341563+e*(.0005100697921535113+e*(.00010801156724758394+e*44864094961891516e-21)))}var T$=E$;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function O$(e){return e===0?1.3920053346762105:1.3920053346762105+e*(.7219355475671381+e*(.17193386563280308+e*(.01864591917156529+e*(.0007779424963818936+e*7326684307446256e-21))))}var S$=O$;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function w$(e){return e===0?.21498241596060885:.21498241596060885+e*(.325778796408931+e*(.14635047265246445+e*(.02664227030336386+e*(.0018402845140733772+e*3194753265841009e-20))))}var F$=w$;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function L$(e){return e===0?-.032788541075985965:-.032788541075985965+e*(.006100538702462913+e*(-.0014034646998923284+e*.00031563207090362595))}var C$=L$;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function P$(e){return e===0?.01797067508118204:.01797067508118204+e*(-.0036845201678113826+e*(.000881081882437654+e*-.00031275416837512086))}var M$=P$;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function H$(e){return e===0?-.010314224129834144:-.010314224129834144+e*(.0022596478090061247+e*(-.0005385953053567405+e*.0003355291926355191))}var R$=H$;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function D$(e){return e===0?.6328270640250934:.6328270640250934+e*(1.4549225013723477+e*(.9777175279633727+e*(.22896372806469245+e*.013381091853678766)))}var U$=D$;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function W$(e){return e===0?2.4559779371304113:2.4559779371304113+e*(2.128489763798934+e*(.7692851504566728+e*(.10422264559336913+e*.003217092422824239)))}var B$=W$;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function G$(e){return e===0?.08333333333333297:.08333333333333297+e*(-.0027777777772877554+e*(.0007936505586430196+e*(-.00059518755745034+e*(.0008363399189962821+e*-.0016309293409657527))))}var K$=G$;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright, license, and long comment were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/e_lgamma_r.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 1993 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var k$=ne,V$=Xt,X$=ie,Qr=Le,j$=_a,q$=I$,Q$=Zt,Q0=le,Y$=N$,Z$=T$,J$=S$,z$=F$,x$=C$,em=M$,rm=R$,tm=U$,nm=B$,im=K$,am=.07721566490153287,sm=.3224670334241136,lm=1,om=-.07721566490153287,fm=.48383612272381005,um=-.1475877229945939,cm=.06462494023913339,vm=-.07721566490153287,pm=1,dm=.4189385332046727,An=1.4616321449683622,$m=4503599627370496,mm=0x400000000000000,_m=8470329472543003e-37,Ol=1.4616321449683622,hm=-.12148629053584961,gm=-3638676997039505e-33;function ym(e){var r,t,n,a,i,s,l,o,u,f,c,v,d;if(k$(e)||V$(e))return e;if(e===0)return Q0;if(e<0?(r=!0,e=-e):r=!1,e<_m)return-Qr(e);if(r){if(e>=$m||(u=q$(e),u===0))return Q0;t=Qr(Q$/X$(u*e))}if(e===1||e===2)return 0;if(e<2)switch(e<=.9?(d=-Qr(e),e>=An-1+.27?(c=1-e,n=0):e>=An-1-.27?(c=e-(Ol-1),n=1):(c=e,n=2)):(d=0,e>=An+.27?(c=2-e,n=0):e>=An-.27?(c=e-Ol,n=1):(c=e-1,n=2)),n){case 0:v=c*c,s=am+v*Y$(v),i=v*(sm+v*Z$(v)),l=c*s+i,d+=l-.5*c;break;case 1:v=c*c,f=v*c,s=fm+f*x$(f),i=um+f*em(f),a=cm+f*rm(f),l=v*s-(gm-f*(i+c*a)),d+=hm+l;break;case 2:s=c*(vm+c*tm(c)),i=pm+c*nm(c),d+=-.5*c+s/i;break}else if(e<8)switch(n=j$(e),c=e-n,l=c*(om+c*z$(c)),o=lm+c*J$(c),d=.5*c+l/o,v=1,n){case 7:v*=c+6;case 6:v*=c+5;case 5:v*=c+4;case 4:v*=c+3;case 3:v*=c+2,d+=Qr(v)}else e<mm?(u=Qr(e),v=1/e,c=v*v,f=dm+v*im(c),d=(e-.5)*(u-1)+f):d=e*(Qr(e)-1);return r&&(d=t-d),d}var bm=ym;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Im=bm,Aa=Im;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Am=14901161193847656e-24,Nm=Am;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Em=709.782712893384,Xr=Em;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_37_0/boost/math/special_functions/gamma.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006.
* (C) Copyright Paul A. Bristow 2007.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var Tm=ge;function Om(e,r){var t,n,a,i;if(a=Tm(-r),n=a,n!==0)for(t=n,i=1;i<e;++i)t/=i,t*=r,n+=t;return n}var Sm=Om;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function wm(e){return e===0?-.3250421072470015:-.3250421072470015+e*(-.02848174957559851+e*(-.005770270296489442+e*-23763016656650163e-21))}var Fm=wm;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Lm(e){return e===0?.39791722395915535:.39791722395915535+e*(.0650222499887673+e*(.005081306281875766+e*(.00013249473800432164+e*-3960228278775368e-21)))}var Cm=Lm;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Pm(e){return e===0?.41485611868374833:.41485611868374833+e*(-.3722078760357013+e*(.31834661990116175+e*(-.11089469428239668+e*(.035478304325618236+e*-.002166375594868791))))}var Mm=Pm;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Hm(e){return e===0?.10642088040084423:.10642088040084423+e*(.540397917702171+e*(.07182865441419627+e*(.12617121980876164+e*(.01363708391202905+e*.011984499846799107))))}var Rm=Hm;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Dm(e){return e===0?-.6938585727071818:-.6938585727071818+e*(-10.558626225323291+e*(-62.375332450326006+e*(-162.39666946257347+e*(-184.60509290671104+e*(-81.2874355063066+e*-9.814329344169145)))))}var Um=Dm;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Wm(e){return e===0?19.651271667439257:19.651271667439257+e*(137.65775414351904+e*(434.56587747522923+e*(645.3872717332679+e*(429.00814002756783+e*(108.63500554177944+e*(6.570249770319282+e*-.0604244152148581))))))}var Bm=Wm;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Gm(e){return e===0?-.799283237680523:-.799283237680523+e*(-17.757954917754752+e*(-160.63638485582192+e*(-637.5664433683896+e*(-1025.0951316110772+e*-483.5191916086514))))}var Km=Gm;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function km(e){return e===0?30.33806074348246:30.33806074348246+e*(325.7925129965739+e*(1536.729586084437+e*(3199.8582195085955+e*(2553.0504064331644+e*(474.52854120695537+e*-22.44095244658582)))))}var Vm=km;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright, license, and long comment were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/s_erf.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 1993 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var Xm=ne,Sl=ge,jm=Qt,qm=le,Qm=Ee,Ym=Fm,Zm=Cm,Jm=Mm,zm=Rm,xm=Um,e_=Bm,r_=Km,t_=Vm,Nn=1e-300,n_=13877787807814457e-33,wl=.8450629115104675,i_=.12837916709551256,a_=1,s_=-.0023621185607526594,l_=1,o_=-.009864944034847148,f_=1,u_=-.0098649429247001,c_=1;function v_(e){var r,t,n,a,i,s,l,o;if(Xm(e))return NaN;if(e===qm)return 0;if(e===Qm)return 2;if(e===0)return 1;if(e<0?(r=!0,t=-e):(r=!1,t=e),t<.84375)return t<n_?1-e:(n=e*e,a=i_+n*Ym(n),i=a_+n*Zm(n),s=a/i,e<.25?1-(e+e*s):(a=e*s,a+=e-.5,.5-a));if(t<1.25)return i=t-1,l=s_+i*Jm(i),o=l_+i*zm(i),r?1+wl+l/o:1-wl-l/o;if(t<28){if(i=1/(t*t),t<2.857142857142857)a=o_+i*xm(i),i=f_+i*e_(i);else{if(e<-6)return 2-Nn;a=u_+i*r_(i),i=c_+i*t_(i)}return n=jm(t,0),a=Sl(-(n*n)-.5625)*Sl((n-t)*(n+t)+a/i),r?2-a/t:a/t}return r?2-Nn:Nn*Nn}var p_=v_;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var d_=p_,Wf=d_;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_37_0/boost/math/special_functions/gamma.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006.
* (C) Copyright Paul A. Bristow 2007.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var $_=Wf,Fl=xe,m_=ge,__=Zt;function h_(e,r){var t,n,a,i,s;if(i=$_(Fl(r)),i!==0&&e>1){for(n=m_(-r)/Fl(__*r),n*=r,t=.5,n/=t,a=n,s=2;s<e;++s)n/=s-t,n*=r,a+=n;i+=a}return i}var g_=h_;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var y_=-708.3964185322641,mt=y_;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_37_0/boost/math/special_functions/gamma.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006.
* (C) Copyright Paul A. Bristow 2007.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var Yr=ge,En=be,b_=Le,Ll=Xr,Cl=mt;function I_(e,r){var t,n;return n=e*b_(r),r>=1?n<Ll&&-r>Cl?t=En(r,e)*Yr(-r):e>=1?t=En(r/Yr(r/e),e):t=Yr(n-r):n>Cl?t=En(r,e)*Yr(-r):r/e<Ll?t=En(r/Yr(r/e),e):t=Yr(n-r),t}var A_=I_;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function N_(e,r){var t,n;if(n=e.length,n<2||r===0)return n===0?0:e[0];for(n-=1,t=e[n]*r+e[n-1],n-=2;n>=0;)t=t*r+e[n],n-=1;return t}var Bf=N_;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var E_=Bf;function T_(e){var r,t,n,a;if(e.length>500)return i;if(r="return function evalpoly(x){",t=e.length,t===0)r+="return 0.0;";else if(t===1)r+="return "+e[0]+";";else{for(r+="if(x===0.0){return "+e[0]+";}",r+="return "+e[0],n=t-1,a=1;a<t;a++)r+="+x*",a<n&&(r+="("),r+=e[a];for(a=0;a<n-1;a++)r+=")";r+=";"}return r+="}",r+="//# sourceURL=evalpoly.factory.js",new Function(r)();function i(s){return E_(e,s)}}var O_=T_;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var S_=s0,Gf=Bf,w_=O_;S_(Gf,"factory",w_);var F_=Gf;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var L_=6.283185307179586,C_=L_;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function P_(e){return e===0?-.3333333333333333:-.3333333333333333+e*(.08333333333333333+e*(-.014814814814814815+e*(.0011574074074074073+e*(.0003527336860670194+e*(-.0001787551440329218+e*(3919263178522438e-20+e*(-21854485106799924e-22+e*(-185406221071516e-20+e*(8296711340953087e-22+e*(-17665952736826078e-23+e*(6707853543401498e-24+e*(10261809784240309e-24+e*(-4382036018453353e-24+e*914769958223679e-24)))))))))))))}var M_=P_;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function H_(e){return e===0?-.001851851851851852:-.001851851851851852+e*(-.003472222222222222+e*(.0026455026455026454+e*(-.0009902263374485596+e*(.00020576131687242798+e*(-4018775720164609e-22+e*(-18098550334489977e-21+e*(764916091608111e-20+e*(-16120900894563446e-22+e*(4647127802807434e-24+e*(1378633446915721e-22+e*(-5752545603517705e-23+e*11951628599778148e-24)))))))))))}var R_=H_;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function D_(e){return e===0?.004133597883597883:.004133597883597883+e*(-.0026813271604938273+e*(.0007716049382716049+e*(20093878600823047e-22+e*(-.00010736653226365161+e*(52923448829120125e-21+e*(-12760635188618728e-21+e*(3423578734096138e-23+e*(13721957309062932e-22+e*(-6298992138380055e-22+e*14280614206064242e-23)))))))))}var U_=D_;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function W_(e){return e===0?.0006494341563786008:.0006494341563786008+e*(.00022947209362139917+e*(-.0004691894943952557+e*(.00026772063206283885+e*(-7561801671883977e-20+e*(-2396505113867297e-22+e*(11082654115347302e-21+e*(-56749528269915965e-22+e*14230900732435883e-22)))))))}var B_=W_;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function G_(e){return e===0?-.0008618882909167117:-.0008618882909167117+e*(.0007840392217200666+e*(-.0002990724803031902+e*(-14638452578843418e-22+e*(6641498215465122e-20+e*(-3968365047179435e-20+e*11375726970678419e-21)))))}var K_=G_;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function k_(e){return e===0?-.00033679855336635813:-.00033679855336635813+e*(-6972813758365858e-20+e*(.0002772753244959392+e*(-.00019932570516188847+e*(6797780477937208e-20+e*(1419062920643967e-22+e*(-13594048189768693e-21+e*(8018470256334202e-21+e*-2291481176508095e-21)))))))}var V_=k_;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function X_(e){return e===0?.0005313079364639922:.0005313079364639922+e*(-.0005921664373536939+e*(.0002708782096718045+e*(7902353232660328e-22+e*(-8153969367561969e-20+e*(561168275310625e-19+e*-18329116582843375e-21)))))}var j_=X_;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function q_(e){return e===0?.00034436760689237765:.00034436760689237765+e*(5171790908260592e-20+e*(-.00033493161081142234+e*(.0002812695154763237+e*-.00010976582244684731)))}var Q_=q_;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Y_(e){return e===0?-.0006526239185953094:-.0006526239185953094+e*(.0008394987206720873+e*-.000438297098541721)}var Z_=Y_;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_37_0/boost/math/special_functions/gamma.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006.
* (C) Copyright Paul A. Bristow 2007.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var J_=F_,z_=Wf,Y0=xe,x_=ge,eh=Le,rh=C_,th=M_,nh=R_,ih=U_,ah=B_,sh=K_,lh=V_,oh=j_,fh=Q_,uh=Z_,Pe=[0,0,0,0,0,0,0,0,0,0];function ch(e,r){var t,n,a,i,s;return n=(r-e)/e,a=-eh(1+n)+n,i=e*a,s=Y0(2*a),r<e&&(s=-s),Pe[0]=th(s),Pe[1]=nh(s),Pe[2]=ih(s),Pe[3]=ah(s),Pe[4]=sh(s),Pe[5]=lh(s),Pe[6]=oh(s),Pe[7]=fh(s),Pe[8]=uh(s),Pe[9]=-.0005967612901927463,t=J_(Pe,1/e),t*=x_(-i)/Y0(rh*e),r<e&&(t=-t),t+=z_(Y0(i))/2,t}var vh=ch;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ph=eval,dh=ph;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $h=dh;function mh(){var e;try{$h('"use strict"; (function* () {})'),e=!0}catch{e=!1}return e}var _h=mh;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var hh=_h,Kf=hh;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Tn=ie,gh=Or,yh=1e6;function bh(e,r){var t,n,a,i,s,l;if(l={},arguments.length>1&&(l=r),n=l.tolerance||gh,i=l.maxTerms||yh,s=l.initialValue||0,t=typeof e.next=="function",t===!0){for(a of e)if(s+=a,Tn(n*s)>=Tn(a)||--i===0)break}else do a=e(),s+=a;while(Tn(n*s)<Tn(a)&&--i);return s}var Ih=bh;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Pl=ie,Ah=Or,Nh=1e6;function Eh(e,r){var t,n,a,i,s;s={},arguments.length>1&&(s=r),t=s.tolerance||Ah,a=s.maxTerms||Nh,i=s.initialValue||0;do n=e(),i+=n;while(Pl(t*i)<Pl(n)&&--a);return i}var Th=Eh;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Oh=Kf,Sh=Ih,wh=Th,ji;Oh()?ji=Sh:ji=wh;var Na=ji;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_37_0/boost/math/special_functions/gamma.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006.
* (C) Copyright Paul A. Bristow 2007.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/function Fh(e,r){var t=1,n=e,a=r;return i;function i(){var s=t;return n+=1,t*=a/n,s}}var Lh=Fh;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_37_0/boost/math/special_functions/gamma.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006.
* (C) Copyright Paul A. Bristow 2007.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var Ch=Na,Ph=Lh;function Mh(e,r,t){var n,a;return t=t||0,a=Ph(e,r),n=Ch(a,{initialValue:t}),n}var Hh=Mh;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Rh(e){var r,t,n;return e===0?1/0:(e<0?r=-e:r=e,r<=1?(t=709811.662581658+e*(679979.8474157227+e*(293136.7857211597+e*(74887.54032914672+e*(12555.290582413863+e*(1443.4299244417066+e*(115.24194596137347+e*(6.309239205732627+e*(.22668404630224365+e*(.004826466289237662+e*4624429436045379e-20))))))))),n=0+e*(362880+e*(1026576+e*(1172700+e*(723680+e*(269325+e*(63273+e*(9450+e*(870+e*(45+e*1)))))))))):(e=1/e,t=4624429436045379e-20+e*(.004826466289237662+e*(.22668404630224365+e*(6.309239205732627+e*(115.24194596137347+e*(1443.4299244417066+e*(12555.290582413863+e*(74887.54032914672+e*(293136.7857211597+e*(679979.8474157227+e*709811.662581658))))))))),n=1+e*(45+e*(870+e*(9450+e*(63273+e*(269325+e*(723680+e*(1172700+e*(1026576+e*(362880+e*0)))))))))),t/n)}var Dh=Rh;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_64_0/boost/math/special_functions/lanczos.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* Copyright John Maddock 2006.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var Uh=Dh,Wh=Uh;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Bh=Wh,c0=Bh;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_64_0/boost/math/special_functions/gamma.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* Copyright John Maddock 2006-7, 2013-14.
* Copyright Paul A. Bristow 2007, 2013-14.
* Copyright Nikhar Agrawal 2013-14.
* Copyright Christopher Kormanyos 2013-14.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var Gh=c0,Kh=Aa,kh=Vr,Vh=fr,Xh=xe,jh=ie,mr=ge,Tt=be,Z0=f0,J0=Yt,Ml=Le,On=Xr,Ot=mt,z0=Jt,qh=$t;function Qh(e,r){var t,n,a,i,s,l,o;return a=e+z0-.5,o=(r-e-z0+.5)/a,e<1?r<=Ot?mr(e*Ml(r)-r-Kh(e)):Tt(r,e)*mr(-r)/kh(e):(jh(o*o*e)<=100&&e>150?(t=e*(Vh(o)-o)+r*(.5-z0)/a,t=mr(t)):(i=e*Ml(r/a),s=e-r,J0(i,s)<=Ot||Z0(i,s)>=On?(n=s/e,J0(i,s)/2>Ot&&Z0(i,s)/2<On?(l=Tt(r/a,e/2)*mr(s/2),t=l*l):J0(i,s)/4>Ot&&Z0(i,s)/4<On&&r>e?(l=Tt(r/a,e/4)*mr(s/4),t=l*l,t*=t):n>Ot&&n<On?t=Tt(r*mr(n)/a,e):t=mr(i+s)):t=Tt(r/a,e)*mr(s)),t*=Xh(a/qh)/Gh(e),t)}var Yh=Qh;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_60_0/boost/math/special_functions/powm1.hpp}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var Hl=ne,Rl=ie,Zh=o0,Jh=Le,zh=be,xh=_a;function eg(e,r){var t;if(Hl(e)||Hl(r))return NaN;if(r===0)return 0;if(e===0)return-1;if(e<0&&r%2===0&&(e=-e),e>0){if((Rl(r*(e-1))<.5||Rl(r)<.2)&&(t=Jh(e)*r,t<.5))return Zh(t)}else if(xh(r)!==r)return NaN;return zh(e,r)-1}var rg=eg;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var tg=rg,ng=tg;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function ig(e){var r,t,n;return e===0?-.01803556856784494:(e<0?r=-e:r=e,r<=1?(t=-.01803556856784494+e*(.02512664961998968+e*(.049410315156753225+e*(.0172491608709614+e*(-.0002594535632054381+e*(-.0005410098692152044+e*(-3245886498259485e-20+e*0)))))),n=1+e*(1.962029871977952+e*(1.4801966942423133+e*(.5413914320717209+e*(.09885042511280101+e*(.008213096746488934+e*(.00022493629192211576+e*-22335276320861708e-23))))))):(e=1/e,t=0+e*(-3245886498259485e-20+e*(-.0005410098692152044+e*(-.0002594535632054381+e*(.0172491608709614+e*(.049410315156753225+e*(.02512664961998968+e*-.01803556856784494)))))),n=-22335276320861708e-23+e*(.00022493629192211576+e*(.008213096746488934+e*(.09885042511280101+e*(.5413914320717209+e*(1.4801966942423133+e*(1.962029871977952+e*1))))))),t/n)}var ag=ig;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function sg(e){var r,t,n;return e===0?.04906224540690395:(e<0?r=-e:r=e,r<=1?(t=.04906224540690395+e*(-.09691175301595212+e*(-.4149833583594954+e*(-.4065671242119384+e*(-.1584135863906922+e*(-.024014982064857155+e*-.0010034668769627955))))),n=1+e*(3.0234982984646304+e*(3.4873958536072385+e*(1.9141558827442668+e*(.5071377386143635+e*(.05770397226904519+e*.001957681026011072)))))):(e=1/e,t=-.0010034668769627955+e*(-.024014982064857155+e*(-.1584135863906922+e*(-.4065671242119384+e*(-.4149833583594954+e*(-.09691175301595212+e*.04906224540690395))))),n=.001957681026011072+e*(.05770397226904519+e*(.5071377386143635+e*(1.9141558827442668+e*(3.4873958536072385+e*(3.0234982984646304+e*1)))))),t/n)}var lg=sg;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function og(e){var r,t,n;return e===0?-.029232972183027003:(e<0?r=-e:r=e,r<=1?(t=-.029232972183027003+e*(.14421626775719232+e*(-.14244039073863127+e*(.05428096940550536+e*(-.008505359768683364+e*(.0004311713426792973+e*0))))),n=1+e*(-1.5016935605448505+e*(.846973248876495+e*(-.22009515181499575+e*(.02558279715597587+e*(-.0010066679553914337+e*-8271935218912905e-22)))))):(e=1/e,t=0+e*(.0004311713426792973+e*(-.008505359768683364+e*(.05428096940550536+e*(-.14244039073863127+e*(.14421626775719232+e*-.029232972183027003))))),n=-8271935218912905e-22+e*(-.0010066679553914337+e*(.02558279715597587+e*(-.22009515181499575+e*(.846973248876495+e*(-1.5016935605448505+e*1)))))),t/n)}var fg=og;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_64_0/boost/math/special_functions/detail/lgamma_small.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006-7, 2013-14.
* (C) Copyright Paul A. Bristow 2007, 2013-14.
* (C) Copyright Nikhar Agrawal 2013-14.
* (C) Copyright Christopher Kormanyos 2013-14.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var x0=Le,ug=Or,cg=ag,vg=lg,pg=fg,dg=.15896368026733398,$g=.5281534194946289,mg=.45201730728149414;function _g(e,r,t){var n,a,i,s;if(e<ug)return-x0(e);if(r===0||t===0)return 0;if(a=0,e>2){if(e>=3){do e-=1,t-=1,a+=x0(e);while(e>=3);t=e-2}return i=t*(e+1),s=cg(t),a+=i*dg+i*s,a}return e<1&&(a+=-x0(e),t=r,r=e,e+=1),e<=1.5?(i=vg(r),n=r*t,a+=n*$g+n*i,a):(i=t*r,s=pg(-t),a+=i*mg+i*s,a)}var hg=_g;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_64_0/boost/math/special_functions/gamma.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006-7, 2013-14.
* (C) Copyright Paul A. Bristow 2007, 2013-14.
* (C) Copyright Nikhar Agrawal 2013-14.
* (C) Copyright Christopher Kormanyos 2013-14.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var Dl=Vr,Ul=o0,gg=fr,yg=ne,Wl=hg;function bg(e){return yg(e)?NaN:e<0?e<-.5?Dl(1+e)-1:Ul(-gg(e)+Wl(e+2,e+1,e)):e<2?Ul(Wl(e+1,e,e-1)):Dl(1+e)-1}var Ig=bg;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ag=Ig,Ng=Ag;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_37_0/boost/math/special_functions/gamma.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006.
* (C) Copyright Paul A. Bristow 2007.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/function Eg(e,r){var t,n,a,i;return t=-r,r=-r,n=e+1,a=1,s;function s(){return i=t/n,t*=r,a+=1,t/=a,n+=1,i}}var Tg=Eg;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_37_0/boost/math/special_functions/gamma.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006.
* (C) Copyright Paul A. Bristow 2007.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var Og=ng,Sg=Na,wg=Ng,Fg=Tg;function Lg(e,r,t){var n,a,i,s,l;return a=wg(e),i=(a+1)/e,s=Og(r,e),a-=s,a/=e,l=Fg(e,r),s+=1,n=t?i:0,a=-s*Sg(l,{initialValue:(n-a)/s}),t&&(a=-a),[a,i]}var Cg=Lg;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Pg=11754943508222875e-54,kf=Pg;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var jn=ie,ze=kf,Mg=Or,Hg=1e6;function Rg(e,r,t){var n,a,i,s,l,o,u;if(n=typeof e.next=="function",u=n?e.next().value:e(),s=u[1],i=u[0],s===0&&(s=ze),l=s,o=0,n===!0)do u=e.next().value,u&&(o=u[1]+u[0]*o,o===0&&(o=ze),l=u[1]+u[0]/l,l===0&&(l=ze),o=1/o,a=l*o,s*=a);while(jn(a-1)>r&&--t);else do u=e(),u&&(o=u[1]+u[0]*o,o===0&&(o=ze),l=u[1]+u[0]/l,l===0&&(l=ze),o=1/o,a=l*o,s*=a);while(u&&jn(a-1)>r&&--t);return i/s}function Dg(e,r,t){var n,a,i,s,l,o;if(n=typeof e.next=="function",o=n?e.next().value:e(),i=o[1],i===0&&(i=ze),s=i,l=0,n===!0)do o=e.next().value,o&&(l=o[1]+o[0]*l,l===0&&(l=ze),s=o[1]+o[0]/s,s===0&&(s=ze),l=1/l,a=s*l,i*=a);while(o&&jn(a-1)>r&&--t);else do o=e(),o&&(l=o[1]+o[0]*l,l===0&&(l=ze),s=o[1]+o[0]/s,s===0&&(s=ze),l=1/l,a=s*l,i*=a);while(o&&jn(a-1)>r&&--t);return i}function Ug(e,r){var t,n,a;return n={},arguments.length>1&&(n=r),t=n.maxIter||Hg,a=n.tolerance||Mg,n.keep?Dg(e,a,t):Rg(e,a,t)}var Wg=Ug;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Vf=ie,Bg=Or,it=kf,Gg=1e6;function Kg(e,r,t){var n,a,i,s,l,o;o=e(),l=o[1],a=o[0],l===0&&(l=it),i=l,s=0;do o=e(),o&&(s=o[1]+o[0]*s,s===0&&(s=it),i=o[1]+o[0]/i,i===0&&(i=it),s=1/s,n=i*s,l*=n);while(o&&Vf(n-1)>r&&--t);return a/l}function kg(e,r,t){var n,a,i,s,l;l=e(),s=l[1],s===0&&(s=it),a=s,i=0;do l=e(),l&&(i=l[1]+l[0]*i,i===0&&(i=it),a=l[1]+l[0]/a,a===0&&(a=it),i=1/i,n=a*i,s*=n);while(l&&Vf(n-1)>r&&--t);return s}function Vg(e,r){var t,n,a;return n={},arguments.length>1&&(n=r),a=n.tolerance||Bg,t=n.maxIter||Gg,n.keep?kg(e,a,t):Kg(e,a,t)}var Xg=Vg;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var jg=Kf,qg=Wg,Qg=Xg,qi;jg()?qi=qg:qi=Qg;var Xf=qi;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_37_0/boost/math/special_functions/gamma.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006.
* (C) Copyright Paul A. Bristow 2007.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/function Yg(e,r){var t=r-e+1,n=e,a=0;return i;function i(){return a+=1,t+=2,[a*(n-a),t]}}var Zg=Yg;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_37_0/boost/math/special_functions/gamma.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006.
* (C) Copyright Paul A. Bristow 2007.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var Jg=Xf,zg=Zg;function xg(e,r){var t=zg(e,r);return 1/(r-e+1+Jg(t))}var ey=xg;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_62_0/boost/math/special_functions/gamma.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006-7, 2013-14.
* (C) Copyright Paul A. Bristow 2007, 2013-14.
* (C) Copyright Nikhar Agrawal 2013-14.
* (C) Christopher Kormanyos 2013-14.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var ry=Aa,ty=Be,St=Vr,Bl=ie,ny=ge,Gl=be,Me=Le,iy=Nm,Kl=Of,ay=Rf,kl=Xr,sy=le,ly=Sm,oy=g_,Vl=A_,fy=vh,ei=Hh,Xl=Yh,uy=Cg,jl=ey,cy=170;function jf(e,r,t,n){var a,i,s,l,o,u,f,c,v,d,_,h,T,I,M;if(e<0||r<=0)return NaN;if(i=t===void 0?!0:t,c=n,v=0,r>=cy&&!i)return c&&r*4<e?(v=r*Me(e)-e,v+=Me(jl(r,e))):!c&&r>4*e?(v=r*Me(e)-e,l=0,v+=Me(ei(r,e,l)/r)):(v=jf(r,e,!0,c),v===0?c?(v=1+1/(12*r)+1/(288*r*r),v=Me(v)-r+(r-.5)*Me(r),v+=Me(ay)):(v=r*Me(e)-e,l=0,v+=Me(ei(r,e,l)/r)):v=Me(v)+ry(r)),v>kl?sy:ny(v);switch(f=r<30&&r<=e+1&&e<kl,f?(I=ty(r),d=I===r,o=d?!1:Bl(I-r)===.5):d=o=!1,d&&e>.6?(c=!c,s=0):o&&e>.2?(c=!c,s=1):e<iy&&r>1?s=6:e<.5?-.4/Me(e)<r?s=2:s=3:e<1.1?e*.75<r?s=2:s=3:(u=!1,i&&r>20&&(_=Bl((e-r)/r),r>200?20/r>_*_&&(u=!0):_<.4&&(u=!0)),u?s=5:e-1/(3*e)<r?s=2:(s=4,c=!c)),s){case 0:v=ly(r,e),i===!1&&(v*=St(r));break;case 1:v=oy(r,e),i===!1&&(v*=St(r));break;case 2:v=i?Xl(r,e):Vl(r,e),v!==0&&(l=0,a=!1,c&&(l=i?1:St(r),i||v>=1||Kl*v>l?(l/=v,i||r<1||Kl/r>l?(l*=-r,a=!0):l=0):l=0)),v*=ei(r,e,l)/r,a&&(c=!1,v=-v);break;case 3:c=!c,T=uy(r,e,c),v=T[0],M=T[1],c=!1,i&&(v/=M);break;case 4:v=i?Xl(r,e):Vl(r,e),v!==0&&(v*=jl(r,e));break;case 5:v=fy(r,e),e>=r&&(c=!c);break;case 6:v=i?Gl(e,r)/St(r+1):Gl(e,r)/r,v*=1-r*e/(r+1);break}return i&&v>1&&(v=1),c&&(h=i?1:St(r),v=h-v),v}var vy=jf;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var py=vy,dy=py;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_37_0/boost/math/special_functions/gamma.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006.
* (C) Copyright Paul A. Bristow 2007.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var Zr=ge,Sn=be,$y=Le,ql=Xr,Ql=mt;function my(e,r){var t,n;return n=e*$y(r),r>=1?n<ql&&-r>Ql?t=Sn(r,e)*Zr(-r):e>=1?t=Sn(r/Zr(r/e),e):t=Zr(n-r):n>Ql?t=Sn(r,e)*Zr(-r):r/e<ql?t=Sn(r/Zr(r/e),e):t=Zr(n-r),t}var _y=my;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_64_0/boost/math/special_functions/gamma.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* Copyright John Maddock 2006-7, 2013-14.
* Copyright Paul A. Bristow 2007, 2013-14.
* Copyright Nikhar Agrawal 2013-14.
* Copyright Christopher Kormanyos 2013-14.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var hy=c0,gy=Aa,yy=Vr,by=fr,Iy=xe,Ay=ie,_r=ge,wt=be,ri=f0,ti=Yt,Yl=Le,wn=Xr,Ft=mt,ni=Jt,Ny=$t;function Ey(e,r){var t,n,a,i,s,l,o;return a=e+ni-.5,o=(r-e-ni+.5)/a,e<1?r<=Ft?_r(e*Yl(r)-r-gy(e)):wt(r,e)*_r(-r)/yy(e):(Ay(o*o*e)<=100&&e>150?(t=e*(by(o)-o)+r*(.5-ni)/a,t=_r(t)):(i=e*Yl(r/a),s=e-r,ti(i,s)<=Ft||ri(i,s)>=wn?(n=s/e,ti(i,s)/2>Ft&&ri(i,s)/2<wn?(l=wt(r/a,e/2)*_r(s/2),t=l*l):ti(i,s)/4>Ft&&ri(i,s)/4<wn&&r>e?(l=wt(r/a,e/4)*_r(s/4),t=l*l,t*=t):n>Ft&&n<wn?t=wt(r*_r(n)/a,e):t=_r(i+s)):t=wt(r/a,e)*_r(s)),t*=Iy(a/Ny)/hy(e),t)}var Ty=Ey;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_61_0/boost/math/special_functions/beta.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var Oy=Gd,Zl=Df,Sy=dy,wy=fr,Fn=ie,Jl=be,Fy=Le,Ly=jt,zl=Or,Cy=_y,Py=Ty,hr=new Array(30);function My(e,r,t,n,a,i,s){var l,o,u,f,c,v,d,_,h,T,I,M,N,B,W,ae,ee,P;if(v=r-1,ee=e+v/2,n<.35?T=wy(-n):T=Fy(t),P=-ee*T,M=Py(r,P),M<=Ly)return a;for(s?(l=M/Oy(e,r),l/=Jl(ee,r)):l=Cy(r,P)/Jl(ee,r),l*=i,hr[0]=1,N=Sy(P,r,!0,!0),N/=M,f=a+l*N,u=1,d=T/2,d*=d,_=1,I=4*ee*ee,c=r,W=1;W<hr.length;++W){for(u+=2,hr[W]=0,h=r-W,o=3,B=1;B<W;++B)h=B*r-W,hr[W]+=h*hr[W-B]/Zl(o),o+=2;if(hr[W]/=W,hr[W]+=v/Zl(u),N=(c*(c+1)*N+(P+c+1)*_)/I,_*=d,c+=2,ae=l*hr[W]*N,f+=ae,ae>1){if(Fn(ae)<Fn(zl*f))break}else if(Fn(ae/zl)<Fn(f))break}return f}var Hy=My;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_37_0/boost/math/special_functions/beta.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/function Ry(e,r,t){var n,a;if(t===0)return 1;for(n=1,a=0;a<t;a++)n*=(e+a)/(r+a);return n}var Dy=Ry;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ii=ie,xl=f0,Uy=le;function Wy(e,r){var t,n,a;if(t=arguments.length,t===0)return Uy;if(t===2)return xl(ii(e),ii(r));for(n=[],a=0;a<t;a++)n.push(ii(arguments[a]));return xl.apply(null,n)}var By=Wy;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Gy=By,Ky=Gy;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ai=ie,eo=Yt,ky=le;function Vy(e,r){var t,n,a;if(t=arguments.length,t===0)return ky;if(t===2)return eo(ai(e),ai(r));for(n=[],a=0;a<t;a++)n.push(ai(arguments[a]));return eo.apply(null,n)}var Xy=Vy;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var jy=Xy,qy=jy;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_62_0/boost/math/special_functions/beta.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var si=c0,Qy=Ky,Yy=qy,ro=o0,gr=fr,to=xe,Ln=ie,Ve=ge,Xe=be,Zy=Yt,Oe=Le,je=Xr,Jr=mt,li=Jt,Jy=$t;function zy(e,r,t,n,a){var i,s,l,o,u,f,c,v,d,_,h,T,I,M;if(!a)return Xe(t,e)*Xe(n,r);if(I=e+r,o=e+li-.5,u=r+li-.5,f=I+li-.5,i=si(I),i/=si(e)*si(r),i*=to(u/Jy),i*=to(o/f),c=(t*r-n*o)/o,v=(n*e-t*u)/u,Yy(c,v)<.2)if(c*v>0||Zy(e,r)<1)Ln(c)<.1?i*=Ve(e*gr(c)):i*=Xe(t*f/o,e),Ln(v)<.1?i*=Ve(r*gr(v)):i*=Xe(n*f/u,r);else if(Qy(c,v)<.5)s=e<r,l=r/e,s&&l*v<.1||!s&&c/l>.1?(d=ro(l*gr(v)),d=c+d+d*c,d=e*gr(d),i*=Ve(d)):(d=ro(gr(c)/l),d=v+d+d*v,d=r*gr(d),i*=Ve(d));else if(Ln(c)<Ln(v))if(M=e*gr(c)+r*Oe(n*f/u),M<=Jr||M>=je){if(M+=Oe(i),M>=je)return NaN;i=Ve(M)}else i*=Ve(M);else if(M=r*gr(v)+e*Oe(t*f/o),M<=Jr||M>=je){if(M+=Oe(i),M>=je)return NaN;i=Ve(M)}else i*=Ve(M);else if(h=t*f/o,T=n*f/u,c=e*Oe(h),v=r*Oe(T),c>=je||c<=Jr||v>=je||v<=Jr)if(e<r)if(_=Xe(T,r/e),d=e*(Oe(h)+Oe(_)),d<je&&d>Jr)i*=Xe(_*h,e);else{if(v+=c+Oe(i),v>=je)return NaN;i=Ve(v)}else if(_=Xe(h,e/r),d=(Oe(_)+Oe(T))*r,d<je&&d>Jr)i*=Xe(_*T,r);else{if(v+=c+Oe(i),v>=je)return NaN;i=Ve(v)}else i*=Xe(h,e)*Xe(T,r);return i}var Ea=zy;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_61_0/boost/math/special_functions/beta.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var xy=Xf,eb=Ea,rb={keep:!0,maxIter:1e3};function tb(e,r,t,n){var a=0;return i;function i(){var s,l,o;return l=(e+a-1)*(e+r+a-1)*a*(r-a)*t*t,s=e+2*a-1,l/=s*s,o=a,o+=a*(r-a)*t/(e+2*a-1),o+=(e+a)*(e*n-r*t+1+a*(2-t))/(e+2*a+1),a+=1,[l,o]}}function nb(e,r,t,n,a,i){var s,l,o;return s=eb(e,r,t,n,a),i&&(i[1]=s),s===0?s:(o=tb(e,r,t,n),l=xy(o,rb),s/l)}var ib=nb;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var oi=qt,no=ne,ab=Ia,sb=Pf;function qf(e,r){var t,n;if(no(e)||no(r))return NaN;if(!oi(e)||!oi(r))return NaN;if(r<0)return 0;if(e<0)return t=qf(-e+r-1,r),ab(r)&&(t=-t),t;if(r>e)return 0;if(r===0||r===e)return 1;if(r===1||r===e-1)return e;for(e-r<r&&(r=e-r),t=e,n=2;n<=r;n++)t*=(e-n+1)/n;return oi(t)?t:sb(t)}var lb=qf;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ob=lb,fb=ob;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_61_0/boost/math/special_functions/beta.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var io=fb,Mr=Be,Lt=be,ub=jt;function cb(e,r,t,n){var a,i,s,l,o;if(i=Lt(t,e),i>ub)for(l=i,o=Mr(e-1);o>r;o--)l*=(o+1)*n/((e-o)*t),i+=l;else if(s=Mr(e*t),s<=r+1&&(s=Mr(r+2)),i=Lt(t,s)*Lt(n,e-s),i*=io(Mr(e),Mr(s)),i===0)for(o=s-1;o>r;o--)i+=Lt(t,o)*Lt(n,e-o),i*=io(Mr(e),Mr(o));else{for(l=i,a=i,o=s-1;o>r;o--)l*=(o+1)*n/((e-o)*t),i+=l;for(l=a,o=s+1;o<=e;o++)l*=(e-o+1)*t/(o*n),i+=l}return i}var vb=cb;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_61_0/boost/math/special_functions/beta.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var pb=Ea;function db(e,r,t,n,a,i,s){var l,o,u,f;if(l=pb(e,r,t,n,i),s&&(s[1]=l),l/=e,l===0)return l;for(u=1,o=1,f=0;f<a-1;++f)o*=(e+r+f)*t/(e+f+1),u+=o;return l*=u,l}var $b=db;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_64_0/boost/math/special_functions/beta.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var fi=c0,mb=Na,_b=fr,hb=xe,ui=ge,Cn=be,Ct=Le,gb=jt,ao=Xr,so=mt,ci=Jt,yb=$t,lo={maxTerms:100};function bb(e,r,t,n){var a=1-r,i=1;return s;function s(){var l=n/e;return e+=1,n*=a*t/i,i+=1,a+=1,l}}function Ib(e,r,t,n,a,i,s){var l,o,u,f,c,v,d,_;return a?(d=e+r,o=e+ci-.5,u=r+ci-.5,f=d+ci-.5,l=fi(d)/(fi(e)*fi(r)),c=Ct(f/u)*(r-.5),v=Ct(t*f/o)*e,c>so&&c<ao&&v>so&&v<ao?(e*r<u*10?l*=ui((r-.5)*_b(e/u)):l*=Cn(f/u,r-.5),l*=Cn(t*f/o,e),l*=hb(o/yb),i&&(i[1]=l*Cn(s,r))):(l=Ct(l)+c+v+(Ct(o)-1)/2,i&&(i[1]=ui(l+r*Ct(s))),l=ui(l))):l=Cn(t,e),l<gb?n:(_=bb(e,r,t,l),lo.initialValue=n,mb(_,lo))}var Ab=Ib,Nb=ne,Eb=o0,Pn=Be,oo=fr,fo=W6,Se=k8,vi=xe,Tb=ge,Pt=be,Ob=f0,uo=Yt,Mn=Of,co=jt,Sb=f9,wb=c9,Qf=Zt,yr=Hy,pi=Dy,Fb=Ea,vo=ib,Lb=vb,Mt=$b,qe=Ab,Cb=1/Qf;function Pb(e,r,t,n,a,i,s,l){var o,u,f,c,v,d,_,h,T,I,M,N;if(N=1-e,_=l,h=l+s,i[h]=-1,Nb(e)||e<0||e>1)return i[_]=NaN,i[h]=NaN,i;if(n){if(r<0||t<0)return i[_]=NaN,i[h]=NaN,i;if(r===0){if(t===0)return i[_]=NaN,i[h]=NaN,i;if(t>0)return i[_]=a?0:1,i}else if(t===0&&r>0)return i[_]=a?1:0,i}else if(r<=0||t<=0)return i[_]=NaN,i[h]=NaN,i;return e===0?(r===1?i[h]=1:i[h]=r<1?Mn/2:co*2,a?(i[_]=n?1:Se(r,t),i):(i[_]=0,i)):e===1?(t===1?i[h]=1:i[h]=t<1?Mn/2:co*2,a?i[_]=0:i[_]=n?1:Se(r,t),i):r===.5&&t===.5?(i[h]=Cb*vi(N*e),M=fo(vi(a?N:e)),M/=wb,n||(M*=Qf),i[_]=M,i):(r===1&&(d=t,t=r,r=d,d=N,N=e,e=d,a=!a),t===1?r===1?(i[_]=a?N:e,i[h]=1,i):(i[h]=r*Pt(e,r-1),N<.5?M=a?-Eb(r*oo(-N)):Tb(r*oo(-N)):M=a?-(Pt(e,r)-1):Pt(e,r),n||(M/=r),i[_]=M,i):(uo(r,t)<=1?(e>.5&&(d=t,t=r,r=d,d=N,N=e,e=d,a=!a),Ob(r,t)<=1?r>=uo(.2,t)||Pt(e,r)<=.9?a?(f=-(n?1:Se(r,t)),a=!1,f=-qe(r,t,e,f,n,i,N)):f=qe(r,t,e,0,n,i,N):(d=t,t=r,r=d,d=N,N=e,e=d,a=!a,N>=.3?a?(f=-(n?1:Se(r,t)),a=!1,f=-qe(r,t,e,f,n,i,N)):f=qe(r,t,e,0,n,i,N):(n?u=1:u=pi(r+t,r,20),f=Mt(r,t,e,N,20,n,i),a?(f-=n?1:Se(r,t),a=!1,f=-yr(r+20,t,e,N,f,u,n)):f=yr(r+20,t,e,N,f,u,n))):t<=1||e<.1&&Pt(t*e,r)<=.7?a?(f=-(n?1:Se(r,t)),a=!1,f=-qe(r,t,e,f,n,i,N)):f=qe(r,t,e,0,n,i,N):(d=t,t=r,r=d,d=N,N=e,e=d,a=!a,N>=.3?a?(f=-(n?1:Se(r,t)),a=!1,f=-qe(r,t,e,f,n,i,N)):f=qe(r,t,e,0,n,i,N):r>=15?a?(f=-(n?1:Se(r,t)),a=!1,f=-yr(r,t,e,N,f,1,n)):f=yr(r,t,e,N,0,1,n):(n?u=1:u=pi(r+t,r,20),f=Mt(r,t,e,N,20,n,i),a?(f-=n?1:Se(r,t),a=!1,f=-yr(r+20,t,e,N,f,u,n)):f=yr(r+20,t,e,N,f,u,n)))):(r<t?o=r-(r+t)*e:o=(r+t)*N-t,o<0&&(d=t,t=r,r=d,d=N,N=e,e=d,a=!a),t<40?Pn(r)===r&&Pn(t)===t&&r<Sb-100?(T=r-1,I=t+T,f=Lb(I,T,e,N),n||(f*=Se(r,t))):t*e<=.7?a?(f=-(n?1:Se(r,t)),a=!1,f=-qe(r,t,e,f,n,i,N)):f=qe(r,t,e,0,n,i,N):r>15?(I=Pn(t),I===t&&(I-=1),c=t-I,n?u=1:u=pi(r+c,c,I),f=Mt(c,r,N,e,I,n),f=yr(r,c,e,N,f,1,n),f/=u):n?(I=Pn(t),c=t-I,c<=0&&(I-=1,c+=1),f=Mt(c,r,N,e,I,n),f+=Mt(r,c,e,N,20,n),a&&(f-=1),f=yr(r+20,c,e,N,f,1,n),a&&(f=-f,a=!1)):f=vo(r,t,e,N,n,i):f=vo(r,t,e,N,n,i)),i[h]<0&&(i[h]=Fb(r,t,e,N,!0)),v=N*e,i[h]!==0&&(Mn*v<i[h]?i[h]=Mn/2:i[h]/=v),i[_]=a?(n?1:Se(r,t))-f:f,i))}var Yf=Pb;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Mb=Yf;function Hb(e,r,t,n,a){return Mb(e,r,t,n,a,[0,0],1,0)}var Rb=Hb;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Db=s0,Zf=Rb,Ub=Yf;Db(Zf,"assign",Ub);var Wb=Zf;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Bb=Wb.assign;function Gb(e,r,t,n,a){var i=[0,0];return n=n!==!1,a=a===!0,Bb(e,r,t,n,a,i,1,0),i[0]}var Kb=Gb;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var kb=Kb,Jf=kb;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Vb=cf,Xb=Jf,di=ne,jb=Be,qb=le;function Qb(e,r,t){return di(e)||di(r)||di(t)||t<0||t>1||!Vb(r)||r===qb?NaN:e<0?0:e>=r?1:(e=jb(e+1e-7),Xb(t,e+1,r-e,!0,!0))}var Yb=Qb;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Zb(e){return r;function r(){return e}}var Jb=Zb;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var zb=Jb,xb=zb;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var eI=cf,rI=xb,tI=Jf,$i=ne,nI=Be,iI=le;function aI(e,r){if($i(e)||$i(r)||r<0||r>1||!eI(e)||e===iI)return rI(NaN);return t;function t(n){return $i(n)?NaN:n<0?0:n>=e?1:(n=nI(n+1e-7),tI(r,n+1,e-n,!0,!0))}}var sI=aI;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var lI=s0,zf=Yb,oI=sI;lI(zf,"factory",oI);var fI=zf;const uI=[8.1238,1.4893,2.7114,4.3192,12.0195,2.3039,2.0257,5.9215,7.3054,.1031,.6895,3.9785,2.6116,6.9478,7.6812,1.8189,.1125,6.0213,6.2808,9.0986,2.8776,1.1075,2.0949,.1728,2.1135,.0702].map(e=>e/100);function cI(e,r){const t={};for(let n=0;n<26;++n){const a=fI(e,r,uI[n]);t[String.fromCharCode(n+65)]=a>.5?1-a:a}return t}function vI(e){let r=0;for(let t=0;t<e.length;++t)/[a-z]/i.test(e[t])&&++r;return r}function pI(e,r){let t=0;for(let n=0;n<e.length;++n)r===e[n]&&++t;return t}function dI(...e){return e.length?(e.sort((t,n)=>n-t),e.slice(1).map((t,n)=>e[n]-t).slice(0,3)):[]}function $I(e){const r={},t=vI(e);for(let n=0;n<26;++n){const a=String.fromCharCode(n+65),i=pI(e,a);if(i){const s=cI(i,t);r[a]={count:i,pValues:s,topPDifs:dI(...Object.values(s))}}}return{totalLetters:t,letterDetails:r}}function mI(...e){const r=Math.min(...e),t=Math.max(...e)-r;return e.map(n=>(n-r)/t)}function _I(e,r,t){const n=(l,o)=>Math.round(l+(o-l)*t),a=n(e.r,r.r),i=n(e.g,r.g),s=n(e.b,r.b);return{r:a,g:i,b:s}}const hI={id:"keyboard"},gI={class:"row"},yI=["onClick","title"],bI=kt({__name:"Keyboard",props:{decryptionKeys:null,pValues:null},emits:["key","enter"],setup(e){const r=e;let t=xr(!1);const n=["QWERTYUIOP".split(""),"ASDFGHJKL".split(""),["normalise",..."ZXCVBNM".split(""),"enter"]],a=Tr(()=>{const i=new Set(Object.values(r.decryptionKeys)),s={r:0,g:255,b:0},l={r:255,g:0,b:0};let o=r.pValues;if(t.value){const u=mI(...Object.values(o));o=Object.fromEntries(Object.keys(o).map((f,c)=>[f,u[c]]))}else{const u=Object.entries(o);u.forEach(f=>f[1]=f[1]*2),o=Object.fromEntries(u)}return n.map(u=>u.map(f=>{var c;return f.length===1?{value:f,colour:_I(l,s,o[f]||0),p:`p-value=${((c=r.pValues[f])==null?void 0:c.toFixed(3))||"N/A"}`,isInUse:i.has(f)}:{value:f}}))});return(i,s)=>(k(),V("div",hI,[(k(!0),V(x,null,Je(sr(a),(l,o)=>(k(),V("div",gI,[H("div",{class:ar(`spacer${o}`)},null,2),(k(!0),V(x,null,Je(l,u=>(k(),V(x,{key:u},[u.colour?(k(),V("button",{key:0,class:ar(u.isInUse?"used-key":""),style:qn({borderColor:`rgb(${u.colour.r},${u.colour.g},${u.colour.b})`}),onClick:f=>i.$emit("key",u.value),title:u.p},[H("span",null,fe(u.value),1)],14,yI)):u.value==="normalise"?(k(),V("button",{key:1,class:ar(["non-alpha",t.value?"depressed":""]),onClick:s[0]||(s[0]=f=>t.value=!t.value),title:"spread narrow range of colours (representing small differences in letter probabilities) wider"},[H("span",null,fe(u.value),1)],2)):(k(),V("button",{key:2,class:"non-alpha",onClick:s[1]||(s[1]=f=>i.$emit("enter"))},[H("span",null,fe(u.value),1)]))],64))),128)),H("div",{class:ar(`spacer${o}`)},null,2)]))),256))]))}});const zt=(e,r)=>{const t=e.__vccOpts||e;for(const[n,a]of r)t[n]=a;return t},II=zt(bI,[["__scopeId","data-v-c4c4e929"]]),AI={id:"coded-text"},NI={key:0,class:"non-alpha"},EI=["title","onClick"],TI=kt({__name:"EncodedText",props:{modelValue:null,activeLetter:null,decryptionKeys:null},emits:["update:active-letter"],setup(e,{emit:r}){const t=e;xr(-1);let n=0;const a=Tr(()=>t.modelValue.split(`
`).map(s=>s.split("").map(l=>{if(!/[a-z]/i.test(l))return{id:"l"+n,display:l,isNonAlpha:!0};const o=l.toUpperCase();if(t.decryptionKeys[l]){let u=t.decryptionKeys[l];return l!==o&&(u=u.toLowerCase()),{id:"l"+n,display:u,original:l,uc:o}}return{id:"l"+n,display:l,uc:o}})));function i(s){r("update:active-letter",s)}return(s,l)=>(k(),V("div",AI,[(k(!0),V(x,null,Je(sr(a),o=>(k(),V("div",null,[(k(!0),V(x,null,Je(o,u=>(k(),V(x,{key:u.id},[u.isNonAlpha?(k(),V("span",NI,fe(u.display),1)):(k(),V("span",{key:1,class:ar(["alpha",{current:u.uc===e.activeLetter,decrypted:u.original}]),title:u.original?`decoded from ${u.original}`:"",onClick:f=>i(u.uc)},fe(u.display),11,EI))],64))),128))]))),256))]))}});const OI=zt(TI,[["__scopeId","data-v-33c78473"]]),Ta=e=>(oa("data-v-037f63ce"),e=e(),fa(),e),SI={id:"letter-details"},wI=Ta(()=>H("td",null,null,-1)),FI=["onClick"],LI=Ta(()=>H("th",null," count ",-1)),CI=Ta(()=>H("th",null," decoded ",-1)),PI=kt({__name:"LetterDetails",props:{decryptionKeys:null,stats:null,activeLetter:null},setup(e){const r=e,t=Tr(()=>Object.keys(r.stats).map(n=>r.decryptionKeys[n]||""));return(n,a)=>(k(),V("div",SI,[H("table",null,[H("tbody",null,[H("tr",null,[wI,(k(!0),V(x,null,Je(Object.keys(e.stats),i=>(k(),V("th",{key:i},[H("a",{href:"#",class:ar(e.activeLetter===i?"active":""),onClick:Oc(s=>n.$emit("update:active-letter",i),["prevent"])},fe(i),11,FI)]))),128))]),H("tr",null,[LI,(k(!0),V(x,null,Je(e.stats,(i,s)=>(k(),V("td",{key:s},fe(i.count),1))),128))]),H("tr",null,[CI,(k(!0),V(x,null,Je(sr(t),i=>(k(),V("td",{key:i},fe(i),1))),128))]),(k(),V(x,null,Je(3,i=>H("tr",null,[H("th",null," p dif "+fe(i),1),(k(!0),V(x,null,Je(e.stats,(s,l)=>(k(),V("td",{key:l},fe(s.topPDifs[i-1].toFixed(3)),1))),128))])),64))])])]))}});const MI=zt(PI,[["__scopeId","data-v-037f63ce"]]),xf=e=>(oa("data-v-f94ef414"),e=e(),fa(),e),HI={id:"letter-details"},RI=xf(()=>H("tr",null,[H("th",{rowspan:"2"},"Encoded"),H("th",{rowspan:"2"},"Decodes to"),H("th",{rowspan:"2"},"Occurences"),H("th",{colspan:"3"},"p value")],-1)),DI=xf(()=>H("tr",null,[H("th",null,"Value (%)"),H("th",null,"Rank / 26"),H("th",null,"max (all letters)")],-1)),UI=kt({__name:"DecryptionDetails",props:{decryptionKeys:null,stats:null},setup(e){const r=e,t=Tr(()=>Object.keys(r.decryptionKeys).map(n=>{const a=r.decryptionKeys[n],i=r.stats[n],s=i.pValues[a],l=Object.values(i.pValues).sort((u,f)=>f-u),o=u=>u.toFixed(4);return{encoded:n,decoded:a,count:i.count,pValue:o(s),rank:l.indexOf(s)+1,maxP:o(l[0])}}));return Tr(()=>Object.keys(r.stats).map(n=>r.decryptionKeys[n]||"")),(n,a)=>(k(),V("div",HI,[H("table",null,[H("tbody",null,[RI,DI,(k(!0),V(x,null,Je(sr(t),i=>(k(),V("tr",{key:i.encoded},[H("td",null,fe(i.encoded),1),H("td",null,fe(i.decoded),1),H("td",null,fe(i.count),1),H("td",null,fe(i.pValue),1),H("td",null,fe(i.rank),1),H("td",null,fe(i.maxP),1)]))),128))])])]))}});const WI=zt(UI,[["__scopeId","data-v-f94ef414"]]),Oa=e=>(oa("data-v-cfdf1b2d"),e=e(),fa(),e),BI={key:0,class:"message"},GI=Oa(()=>H("header",null,[H("h1",null,"Decryptor")],-1)),KI={key:0},kI={key:1},VI=["disabled"],XI={key:2},jI=Oa(()=>H("hr",null,null,-1)),qI=Oa(()=>H("footer",null,[H("small",null,[Xn(" This project is under an MIT licence and is hosted at "),H("a",{href:"https://github.com/mcshaz/letter-swap-decoder"}," github.com/mcshaz/letter-swap-decoder "),Xn(". It borrows heavily from Evan You's Vue version of Wordle on StackBlitz "),H("a",{href:"https://stackblitz.com/edit/vitejs-vite-jjggsx"}," stackblitz.com/edit/vitejs-vite-jjggsx ")])],-1)),QI=kt({__name:"Game",setup(e){let r=xr(""),t=xr(""),n=xr(""),a=xr(0);const i=zn({}),s=Tr(()=>$I(t.value)),l=Tr(()=>n.value?s.value.letterDetails[n.value]:{pValues:{}});ua(()=>{window.addEventListener("keyup",o),c("Paste the encoded text, then click the go button to begin")}),ca(()=>{window.removeEventListener("keyup",o)});function o(d){f(d.key)}async function u(){c("click on letter within the message to select the encoded letter, then use the keyboard to determine what the real letter is"),a.value=1}function f(d){if(d.length!==1||!/[a-z]/i.test(d)||!n.value)return;d=d.toUpperCase();const _=Object.keys(i).find(h=>i[h]===d);_&&delete i[_],i[n.value]=d}function c(d,_=1e3){r.value=d,_>0&&setTimeout(()=>{r.value=""},_)}function v(){a.value=2}return(d,_)=>(k(),V(x,null,[ue(ma,null,{default:ko(()=>[r.value?(k(),V("div",BI,fe(r.value),1)):ku("",!0)]),_:1}),GI,a.value===1?(k(),V("div",KI,[ue(OI,{modelValue:t.value,"onUpdate:modelValue":_[0]||(_[0]=h=>t.value=h),"active-letter":n.value,"onUpdate:active-letter":_[1]||(_[1]=h=>n.value=h),"decryption-keys":i},null,8,["modelValue","active-letter","decryption-keys"]),H("div",null,[H("h4",null,[Xn(" Total letters: "),H("output",null,fe(sr(s).totalLetters),1)])]),ue(II,{onKey:f,"decryption-keys":i,"p-values":sr(l).pValues,onEnter:v},null,8,["decryption-keys","p-values"]),ue(MI,{"decryption-keys":i,stats:sr(s).letterDetails,"active-letter":n.value,"onUpdate:active-letter":_[2]||(_[2]=h=>n.value=h)},null,8,["decryption-keys","stats","active-letter"])])):a.value===0?(k(),V("div",kI,[H("div",null,[yu(H("textarea",{id:"encoded-text","onUpdate:modelValue":_[3]||(_[3]=h=>t.value=h)},null,512),[[Nc,t.value]])]),H("button",{id:"activate-button",onClick:u,disabled:!t.value},"Go",8,VI)])):(k(),V("div",XI,[ue(WI,{"decryption-keys":i,stats:sr(s).letterDetails},null,8,["decryption-keys","stats"]),H("button",{id:"leave-summary",onClick:_[4]||(_[4]=h=>a.value=1)},"Back")])),jI,qI],64))}});const YI=zt(QI,[["__scopeId","data-v-cfdf1b2d"]]);Fc(YI).mount("#app");
