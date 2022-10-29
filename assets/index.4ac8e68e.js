(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function t(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerpolicy&&(a.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?a.credentials="include":i.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(i){if(i.ep)return;i.ep=!0;const a=t(i);fetch(i.href,a)}})();function Yi(e,r){const t=Object.create(null),n=e.split(",");for(let i=0;i<n.length;i++)t[n[i]]=!0;return r?i=>!!t[i.toLowerCase()]:i=>!!t[i]}const r1="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",t1=Yi(r1);function co(e){return!!e||e===""}function jn(e){if(H(e)){const r={};for(let t=0;t<e.length;t++){const n=e[t],i=fe(n)?a1(n):jn(n);if(i)for(const a in i)r[a]=i[a]}return r}else{if(fe(e))return e;if(J(e))return e}}const n1=/;(?![^(]*\))/g,i1=/:(.+)/;function a1(e){const r={};return e.split(n1).forEach(t=>{if(t){const n=t.split(i1);n.length>1&&(r[n[0].trim()]=n[1].trim())}}),r}function ar(e){let r="";if(fe(e))r=e;else if(H(e))for(let t=0;t<e.length;t++){const n=ar(e[t]);n&&(r+=n+" ")}else if(J(e))for(const t in e)e[t]&&(r+=t+" ");return r.trim()}const Fe=e=>fe(e)?e:e==null?"":H(e)||J(e)&&(e.toString===mo||!D(e.toString))?JSON.stringify(e,vo,2):String(e),vo=(e,r)=>r&&r.__v_isRef?vo(e,r.value):et(r)?{[`Map(${r.size})`]:[...r.entries()].reduce((t,[n,i])=>(t[`${n} =>`]=i,t),{})}:po(r)?{[`Set(${r.size})`]:[...r.values()]}:J(r)&&!H(r)&&!ho(r)?String(r):r,q={},xr=[],Ue=()=>{},s1=()=>!1,l1=/^on[^a-z]/,qn=e=>l1.test(e),Zi=e=>e.startsWith("onUpdate:"),pe=Object.assign,Ji=(e,r)=>{const t=e.indexOf(r);t>-1&&e.splice(t,1)},o1=Object.prototype.hasOwnProperty,G=(e,r)=>o1.call(e,r),H=Array.isArray,et=e=>Qn(e)==="[object Map]",po=e=>Qn(e)==="[object Set]",D=e=>typeof e=="function",fe=e=>typeof e=="string",zi=e=>typeof e=="symbol",J=e=>e!==null&&typeof e=="object",$o=e=>J(e)&&D(e.then)&&D(e.catch),mo=Object.prototype.toString,Qn=e=>mo.call(e),f1=e=>Qn(e).slice(8,-1),ho=e=>Qn(e)==="[object Object]",xi=e=>fe(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Mn=Yi(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Yn=e=>{const r=Object.create(null);return t=>r[t]||(r[t]=e(t))},u1=/-(\w)/g,it=Yn(e=>e.replace(u1,(r,t)=>t?t.toUpperCase():"")),c1=/\B([A-Z])/g,ot=Yn(e=>e.replace(c1,"-$1").toLowerCase()),_o=Yn(e=>e.charAt(0).toUpperCase()+e.slice(1)),$0=Yn(e=>e?`on${_o(e)}`:""),Ut=(e,r)=>!Object.is(e,r),Hn=(e,r)=>{for(let t=0;t<e.length;t++)e[t](r)},Un=(e,r,t)=>{Object.defineProperty(e,r,{configurable:!0,enumerable:!1,value:t})},Wn=e=>{const r=parseFloat(e);return isNaN(r)?e:r};let La;const v1=()=>La||(La=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Qe;class p1{constructor(r=!1){this.detached=r,this.active=!0,this.effects=[],this.cleanups=[],this.parent=Qe,!r&&Qe&&(this.index=(Qe.scopes||(Qe.scopes=[])).push(this)-1)}run(r){if(this.active){const t=Qe;try{return Qe=this,r()}finally{Qe=t}}}on(){Qe=this}off(){Qe=this.parent}stop(r){if(this.active){let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!r){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this.active=!1}}}function d1(e,r=Qe){r&&r.active&&r.effects.push(e)}const ea=e=>{const r=new Set(e);return r.w=0,r.n=0,r},go=e=>(e.w&Ar)>0,yo=e=>(e.n&Ar)>0,$1=({deps:e})=>{if(e.length)for(let r=0;r<e.length;r++)e[r].w|=Ar},m1=e=>{const{deps:r}=e;if(r.length){let t=0;for(let n=0;n<r.length;n++){const i=r[n];go(i)&&!yo(i)?i.delete(e):r[t++]=i,i.w&=~Ar,i.n&=~Ar}r.length=t}},hi=new WeakMap;let Rt=0,Ar=1;const _i=30;let He;const Wr=Symbol(""),gi=Symbol("");class ra{constructor(r,t=null,n){this.fn=r,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,d1(this,n)}run(){if(!this.active)return this.fn();let r=He,t=br;for(;r;){if(r===this)return;r=r.parent}try{return this.parent=He,He=this,br=!0,Ar=1<<++Rt,Rt<=_i?$1(this):Ca(this),this.fn()}finally{Rt<=_i&&m1(this),Ar=1<<--Rt,He=this.parent,br=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){He===this?this.deferStop=!0:this.active&&(Ca(this),this.onStop&&this.onStop(),this.active=!1)}}function Ca(e){const{deps:r}=e;if(r.length){for(let t=0;t<r.length;t++)r[t].delete(e);r.length=0}}let br=!0;const bo=[];function ft(){bo.push(br),br=!1}function ut(){const e=bo.pop();br=e===void 0?!0:e}function Ae(e,r,t){if(br&&He){let n=hi.get(e);n||hi.set(e,n=new Map);let i=n.get(t);i||n.set(t,i=ea()),Io(i)}}function Io(e,r){let t=!1;Rt<=_i?yo(e)||(e.n|=Ar,t=!go(e)):t=!e.has(He),t&&(e.add(He),He.deps.push(e))}function sr(e,r,t,n,i,a){const s=hi.get(e);if(!s)return;let l=[];if(r==="clear")l=[...s.values()];else if(t==="length"&&H(e))s.forEach((o,u)=>{(u==="length"||u>=n)&&l.push(o)});else switch(t!==void 0&&l.push(s.get(t)),r){case"add":H(e)?xi(t)&&l.push(s.get("length")):(l.push(s.get(Wr)),et(e)&&l.push(s.get(gi)));break;case"delete":H(e)||(l.push(s.get(Wr)),et(e)&&l.push(s.get(gi)));break;case"set":et(e)&&l.push(s.get(Wr));break}if(l.length===1)l[0]&&yi(l[0]);else{const o=[];for(const u of l)u&&o.push(...u);yi(ea(o))}}function yi(e,r){const t=H(e)?e:[...e];for(const n of t)n.computed&&Pa(n);for(const n of t)n.computed||Pa(n)}function Pa(e,r){(e!==He||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const h1=Yi("__proto__,__v_isRef,__isVue"),Ao=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(zi)),_1=ta(),g1=ta(!1,!0),y1=ta(!0),Ma=b1();function b1(){const e={};return["includes","indexOf","lastIndexOf"].forEach(r=>{e[r]=function(...t){const n=V(this);for(let a=0,s=this.length;a<s;a++)Ae(n,"get",a+"");const i=n[r](...t);return i===-1||i===!1?n[r](...t.map(V)):i}}),["push","pop","shift","unshift","splice"].forEach(r=>{e[r]=function(...t){ft();const n=V(this)[r].apply(this,t);return ut(),n}}),e}function ta(e=!1,r=!1){return function(n,i,a){if(i==="__v_isReactive")return!e;if(i==="__v_isReadonly")return e;if(i==="__v_isShallow")return r;if(i==="__v_raw"&&a===(e?r?D1:Fo:r?Oo:To).get(n))return n;const s=H(n);if(!e&&s&&G(Ma,i))return Reflect.get(Ma,i,a);const l=Reflect.get(n,i,a);return(zi(i)?Ao.has(i):h1(i))||(e||Ae(n,"get",i),r)?l:me(l)?s&&xi(i)?l:l.value:J(l)?e?So(l):Jn(l):l}}const I1=No(),A1=No(!0);function No(e=!1){return function(t,n,i,a){let s=t[n];if(at(s)&&me(s)&&!me(i))return!1;if(!e&&(!Bn(i)&&!at(i)&&(s=V(s),i=V(i)),!H(t)&&me(s)&&!me(i)))return s.value=i,!0;const l=H(t)&&xi(n)?Number(n)<t.length:G(t,n),o=Reflect.set(t,n,i,a);return t===V(a)&&(l?Ut(i,s)&&sr(t,"set",n,i):sr(t,"add",n,i)),o}}function N1(e,r){const t=G(e,r);e[r];const n=Reflect.deleteProperty(e,r);return n&&t&&sr(e,"delete",r,void 0),n}function E1(e,r){const t=Reflect.has(e,r);return(!zi(r)||!Ao.has(r))&&Ae(e,"has",r),t}function T1(e){return Ae(e,"iterate",H(e)?"length":Wr),Reflect.ownKeys(e)}const Eo={get:_1,set:I1,deleteProperty:N1,has:E1,ownKeys:T1},O1={get:y1,set(e,r){return!0},deleteProperty(e,r){return!0}},F1=pe({},Eo,{get:g1,set:A1}),na=e=>e,Zn=e=>Reflect.getPrototypeOf(e);function en(e,r,t=!1,n=!1){e=e.__v_raw;const i=V(e),a=V(r);t||(r!==a&&Ae(i,"get",r),Ae(i,"get",a));const{has:s}=Zn(i),l=n?na:t?sa:Wt;if(s.call(i,r))return l(e.get(r));if(s.call(i,a))return l(e.get(a));e!==i&&e.get(r)}function rn(e,r=!1){const t=this.__v_raw,n=V(t),i=V(e);return r||(e!==i&&Ae(n,"has",e),Ae(n,"has",i)),e===i?t.has(e):t.has(e)||t.has(i)}function tn(e,r=!1){return e=e.__v_raw,!r&&Ae(V(e),"iterate",Wr),Reflect.get(e,"size",e)}function Ha(e){e=V(e);const r=V(this);return Zn(r).has.call(r,e)||(r.add(e),sr(r,"add",e,e)),this}function Ra(e,r){r=V(r);const t=V(this),{has:n,get:i}=Zn(t);let a=n.call(t,e);a||(e=V(e),a=n.call(t,e));const s=i.call(t,e);return t.set(e,r),a?Ut(r,s)&&sr(t,"set",e,r):sr(t,"add",e,r),this}function Da(e){const r=V(this),{has:t,get:n}=Zn(r);let i=t.call(r,e);i||(e=V(e),i=t.call(r,e)),n&&n.call(r,e);const a=r.delete(e);return i&&sr(r,"delete",e,void 0),a}function Ua(){const e=V(this),r=e.size!==0,t=e.clear();return r&&sr(e,"clear",void 0,void 0),t}function nn(e,r){return function(n,i){const a=this,s=a.__v_raw,l=V(s),o=r?na:e?sa:Wt;return!e&&Ae(l,"iterate",Wr),s.forEach((u,f)=>n.call(i,o(u),o(f),a))}}function an(e,r,t){return function(...n){const i=this.__v_raw,a=V(i),s=et(a),l=e==="entries"||e===Symbol.iterator&&s,o=e==="keys"&&s,u=i[e](...n),f=t?na:r?sa:Wt;return!r&&Ae(a,"iterate",o?gi:Wr),{next(){const{value:c,done:v}=u.next();return v?{value:c,done:v}:{value:l?[f(c[0]),f(c[1])]:f(c),done:v}},[Symbol.iterator](){return this}}}}function fr(e){return function(...r){return e==="delete"?!1:this}}function S1(){const e={get(a){return en(this,a)},get size(){return tn(this)},has:rn,add:Ha,set:Ra,delete:Da,clear:Ua,forEach:nn(!1,!1)},r={get(a){return en(this,a,!1,!0)},get size(){return tn(this)},has:rn,add:Ha,set:Ra,delete:Da,clear:Ua,forEach:nn(!1,!0)},t={get(a){return en(this,a,!0)},get size(){return tn(this,!0)},has(a){return rn.call(this,a,!0)},add:fr("add"),set:fr("set"),delete:fr("delete"),clear:fr("clear"),forEach:nn(!0,!1)},n={get(a){return en(this,a,!0,!0)},get size(){return tn(this,!0)},has(a){return rn.call(this,a,!0)},add:fr("add"),set:fr("set"),delete:fr("delete"),clear:fr("clear"),forEach:nn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(a=>{e[a]=an(a,!1,!1),t[a]=an(a,!0,!1),r[a]=an(a,!1,!0),n[a]=an(a,!0,!0)}),[e,t,r,n]}const[w1,L1,C1,P1]=S1();function ia(e,r){const t=r?e?P1:C1:e?L1:w1;return(n,i,a)=>i==="__v_isReactive"?!e:i==="__v_isReadonly"?e:i==="__v_raw"?n:Reflect.get(G(t,i)&&i in n?t:n,i,a)}const M1={get:ia(!1,!1)},H1={get:ia(!1,!0)},R1={get:ia(!0,!1)},To=new WeakMap,Oo=new WeakMap,Fo=new WeakMap,D1=new WeakMap;function U1(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function W1(e){return e.__v_skip||!Object.isExtensible(e)?0:U1(f1(e))}function Jn(e){return at(e)?e:aa(e,!1,Eo,M1,To)}function B1(e){return aa(e,!1,F1,H1,Oo)}function So(e){return aa(e,!0,O1,R1,Fo)}function aa(e,r,t,n,i){if(!J(e)||e.__v_raw&&!(r&&e.__v_isReactive))return e;const a=i.get(e);if(a)return a;const s=W1(e);if(s===0)return e;const l=new Proxy(e,s===2?n:t);return i.set(e,l),l}function rt(e){return at(e)?rt(e.__v_raw):!!(e&&e.__v_isReactive)}function at(e){return!!(e&&e.__v_isReadonly)}function Bn(e){return!!(e&&e.__v_isShallow)}function wo(e){return rt(e)||at(e)}function V(e){const r=e&&e.__v_raw;return r?V(r):e}function Lo(e){return Un(e,"__v_skip",!0),e}const Wt=e=>J(e)?Jn(e):e,sa=e=>J(e)?So(e):e;function Co(e){br&&He&&(e=V(e),Io(e.dep||(e.dep=ea())))}function Po(e,r){e=V(e),e.dep&&yi(e.dep)}function me(e){return!!(e&&e.__v_isRef===!0)}function zr(e){return G1(e,!1)}function G1(e,r){return me(e)?e:new K1(e,r)}class K1{constructor(r,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?r:V(r),this._value=t?r:Wt(r)}get value(){return Co(this),this._value}set value(r){const t=this.__v_isShallow||Bn(r)||at(r);r=t?r:V(r),Ut(r,this._rawValue)&&(this._rawValue=r,this._value=t?r:Wt(r),Po(this))}}function Br(e){return me(e)?e.value:e}const X1={get:(e,r,t)=>Br(Reflect.get(e,r,t)),set:(e,r,t,n)=>{const i=e[r];return me(i)&&!me(t)?(i.value=t,!0):Reflect.set(e,r,t,n)}};function Mo(e){return rt(e)?e:new Proxy(e,X1)}var Ho;class k1{constructor(r,t,n,i){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this[Ho]=!1,this._dirty=!0,this.effect=new ra(r,()=>{this._dirty||(this._dirty=!0,Po(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=n}get value(){const r=V(this);return Co(r),(r._dirty||!r._cacheable)&&(r._dirty=!1,r._value=r.effect.run()),r._value}set value(r){this._setter(r)}}Ho="__v_isReadonly";function V1(e,r,t=!1){let n,i;const a=D(e);return a?(n=e,i=Ue):(n=e.get,i=e.set),new k1(n,i,a||!i,t)}function Ir(e,r,t,n){let i;try{i=n?e(...n):e()}catch(a){zn(a,r,t)}return i}function Se(e,r,t,n){if(D(e)){const a=Ir(e,r,t,n);return a&&$o(a)&&a.catch(s=>{zn(s,r,t)}),a}const i=[];for(let a=0;a<e.length;a++)i.push(Se(e[a],r,t,n));return i}function zn(e,r,t,n=!0){const i=r?r.vnode:null;if(r){let a=r.parent;const s=r.proxy,l=t;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](e,s,l)===!1)return}a=a.parent}const o=r.appContext.config.errorHandler;if(o){Ir(o,null,10,[e,s,l]);return}}j1(e,t,i,n)}function j1(e,r,t,n=!0){console.error(e)}let Bt=!1,bi=!1;const $e=[];let Je=0;const tt=[];let ir=null,Mr=0;const Ro=Promise.resolve();let la=null;function q1(e){const r=la||Ro;return e?r.then(this?e.bind(this):e):r}function Q1(e){let r=Je+1,t=$e.length;for(;r<t;){const n=r+t>>>1;Gt($e[n])<e?r=n+1:t=n}return r}function oa(e){(!$e.length||!$e.includes(e,Bt&&e.allowRecurse?Je+1:Je))&&(e.id==null?$e.push(e):$e.splice(Q1(e.id),0,e),Do())}function Do(){!Bt&&!bi&&(bi=!0,la=Ro.then(Wo))}function Y1(e){const r=$e.indexOf(e);r>Je&&$e.splice(r,1)}function Z1(e){H(e)?tt.push(...e):(!ir||!ir.includes(e,e.allowRecurse?Mr+1:Mr))&&tt.push(e),Do()}function Wa(e,r=Bt?Je+1:0){for(;r<$e.length;r++){const t=$e[r];t&&t.pre&&($e.splice(r,1),r--,t())}}function Uo(e){if(tt.length){const r=[...new Set(tt)];if(tt.length=0,ir){ir.push(...r);return}for(ir=r,ir.sort((t,n)=>Gt(t)-Gt(n)),Mr=0;Mr<ir.length;Mr++)ir[Mr]();ir=null,Mr=0}}const Gt=e=>e.id==null?1/0:e.id,J1=(e,r)=>{const t=Gt(e)-Gt(r);if(t===0){if(e.pre&&!r.pre)return-1;if(r.pre&&!e.pre)return 1}return t};function Wo(e){bi=!1,Bt=!0,$e.sort(J1);const r=Ue;try{for(Je=0;Je<$e.length;Je++){const t=$e[Je];t&&t.active!==!1&&Ir(t,null,14)}}finally{Je=0,$e.length=0,Uo(),Bt=!1,la=null,($e.length||tt.length)&&Wo()}}function z1(e,r,...t){if(e.isUnmounted)return;const n=e.vnode.props||q;let i=t;const a=r.startsWith("update:"),s=a&&r.slice(7);if(s&&s in n){const f=`${s==="modelValue"?"model":s}Modifiers`,{number:c,trim:v}=n[f]||q;v&&(i=t.map(d=>d.trim())),c&&(i=t.map(Wn))}let l,o=n[l=$0(r)]||n[l=$0(it(r))];!o&&a&&(o=n[l=$0(ot(r))]),o&&Se(o,e,6,i);const u=n[l+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[l])return;e.emitted[l]=!0,Se(u,e,6,i)}}function Bo(e,r,t=!1){const n=r.emitsCache,i=n.get(e);if(i!==void 0)return i;const a=e.emits;let s={},l=!1;if(!D(e)){const o=u=>{const f=Bo(u,r,!0);f&&(l=!0,pe(s,f))};!t&&r.mixins.length&&r.mixins.forEach(o),e.extends&&o(e.extends),e.mixins&&e.mixins.forEach(o)}return!a&&!l?(J(e)&&n.set(e,null),null):(H(a)?a.forEach(o=>s[o]=null):pe(s,a),J(e)&&n.set(e,s),s)}function xn(e,r){return!e||!qn(r)?!1:(r=r.slice(2).replace(/Once$/,""),G(e,r[0].toLowerCase()+r.slice(1))||G(e,ot(r))||G(e,r))}let Re=null,e0=null;function Gn(e){const r=Re;return Re=e,e0=e&&e.type.__scopeId||null,r}function Go(e){e0=e}function Ko(){e0=null}function Xo(e,r=Re,t){if(!r||e._n)return e;const n=(...i)=>{n._d&&Ya(-1);const a=Gn(r);let s;try{s=e(...i)}finally{Gn(a),n._d&&Ya(1)}return s};return n._n=!0,n._c=!0,n._d=!0,n}function m0(e){const{type:r,vnode:t,proxy:n,withProxy:i,props:a,propsOptions:[s],slots:l,attrs:o,emit:u,render:f,renderCache:c,data:v,setupState:d,ctx:h,inheritAttrs:y}=e;let T,I;const M=Gn(e);try{if(t.shapeFlag&4){const W=i||n;T=Ze(f.call(W,W,c,a,d,v,h)),I=o}else{const W=r;T=Ze(W.length>1?W(a,{attrs:o,slots:l,emit:u}):W(a,null)),I=r.props?o:x1(o)}}catch(W){Dt.length=0,zn(W,e,1),T=ve(We)}let N=T;if(I&&y!==!1){const W=Object.keys(I),{shapeFlag:U}=N;W.length&&U&7&&(s&&W.some(Zi)&&(I=eu(I,s)),N=Nr(N,I))}return t.dirs&&(N=Nr(N),N.dirs=N.dirs?N.dirs.concat(t.dirs):t.dirs),t.transition&&(N.transition=t.transition),T=N,Gn(M),T}const x1=e=>{let r;for(const t in e)(t==="class"||t==="style"||qn(t))&&((r||(r={}))[t]=e[t]);return r},eu=(e,r)=>{const t={};for(const n in e)(!Zi(n)||!(n.slice(9)in r))&&(t[n]=e[n]);return t};function ru(e,r,t){const{props:n,children:i,component:a}=e,{props:s,children:l,patchFlag:o}=r,u=a.emitsOptions;if(r.dirs||r.transition)return!0;if(t&&o>=0){if(o&1024)return!0;if(o&16)return n?Ba(n,s,u):!!s;if(o&8){const f=r.dynamicProps;for(let c=0;c<f.length;c++){const v=f[c];if(s[v]!==n[v]&&!xn(u,v))return!0}}}else return(i||l)&&(!l||!l.$stable)?!0:n===s?!1:n?s?Ba(n,s,u):!0:!!s;return!1}function Ba(e,r,t){const n=Object.keys(r);if(n.length!==Object.keys(e).length)return!0;for(let i=0;i<n.length;i++){const a=n[i];if(r[a]!==e[a]&&!xn(t,a))return!0}return!1}function tu({vnode:e,parent:r},t){for(;r&&r.subTree===e;)(e=r.vnode).el=t,r=r.parent}const nu=e=>e.__isSuspense;function iu(e,r){r&&r.pendingBranch?H(e)?r.effects.push(...e):r.effects.push(e):Z1(e)}function au(e,r){if(ce){let t=ce.provides;const n=ce.parent&&ce.parent.provides;n===t&&(t=ce.provides=Object.create(n)),t[e]=r}}function h0(e,r,t=!1){const n=ce||Re;if(n){const i=n.parent==null?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides;if(i&&e in i)return i[e];if(arguments.length>1)return t&&D(r)?r.call(n.proxy):r}}const Ga={};function _0(e,r,t){return ko(e,r,t)}function ko(e,r,{immediate:t,deep:n,flush:i,onTrack:a,onTrigger:s}=q){const l=ce;let o,u=!1,f=!1;if(me(e)?(o=()=>e.value,u=Bn(e)):rt(e)?(o=()=>e,n=!0):H(e)?(f=!0,u=e.some(I=>rt(I)||Bn(I)),o=()=>e.map(I=>{if(me(I))return I.value;if(rt(I))return Dr(I);if(D(I))return Ir(I,l,2)})):D(e)?r?o=()=>Ir(e,l,2):o=()=>{if(!(l&&l.isUnmounted))return c&&c(),Se(e,l,3,[v])}:o=Ue,r&&n){const I=o;o=()=>Dr(I())}let c,v=I=>{c=T.onStop=()=>{Ir(I,l,4)}};if(Xt)return v=Ue,r?t&&Se(r,l,3,[o(),f?[]:void 0,v]):o(),Ue;let d=f?[]:Ga;const h=()=>{if(!!T.active)if(r){const I=T.run();(n||u||(f?I.some((M,N)=>Ut(M,d[N])):Ut(I,d)))&&(c&&c(),Se(r,l,3,[I,d===Ga?void 0:d,v]),d=I)}else T.run()};h.allowRecurse=!!r;let y;i==="sync"?y=h:i==="post"?y=()=>ge(h,l&&l.suspense):(h.pre=!0,l&&(h.id=l.uid),y=()=>oa(h));const T=new ra(o,y);return r?t?h():d=T.run():i==="post"?ge(T.run.bind(T),l&&l.suspense):T.run(),()=>{T.stop(),l&&l.scope&&Ji(l.scope.effects,T)}}function su(e,r,t){const n=this.proxy,i=fe(e)?e.includes(".")?Vo(n,e):()=>n[e]:e.bind(n,n);let a;D(r)?a=r:(a=r.handler,t=r);const s=ce;st(this);const l=ko(i,a.bind(n),t);return s?st(s):Gr(),l}function Vo(e,r){const t=r.split(".");return()=>{let n=e;for(let i=0;i<t.length&&n;i++)n=n[t[i]];return n}}function Dr(e,r){if(!J(e)||e.__v_skip||(r=r||new Set,r.has(e)))return e;if(r.add(e),me(e))Dr(e.value,r);else if(H(e))for(let t=0;t<e.length;t++)Dr(e[t],r);else if(po(e)||et(e))e.forEach(t=>{Dr(t,r)});else if(ho(e))for(const t in e)Dr(e[t],r);return e}function lu(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return fa(()=>{e.isMounted=!0}),Zo(()=>{e.isUnmounting=!0}),e}const Ee=[Function,Array],ou={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Ee,onEnter:Ee,onAfterEnter:Ee,onEnterCancelled:Ee,onBeforeLeave:Ee,onLeave:Ee,onAfterLeave:Ee,onLeaveCancelled:Ee,onBeforeAppear:Ee,onAppear:Ee,onAfterAppear:Ee,onAppearCancelled:Ee},setup(e,{slots:r}){const t=qu(),n=lu();let i;return()=>{const a=r.default&&Qo(r.default(),!0);if(!a||!a.length)return;let s=a[0];if(a.length>1){for(const y of a)if(y.type!==We){s=y;break}}const l=V(e),{mode:o}=l;if(n.isLeaving)return g0(s);const u=Ka(s);if(!u)return g0(s);const f=Ii(u,l,n,t);Ai(u,f);const c=t.subTree,v=c&&Ka(c);let d=!1;const{getTransitionKey:h}=u.type;if(h){const y=h();i===void 0?i=y:y!==i&&(i=y,d=!0)}if(v&&v.type!==We&&(!Hr(u,v)||d)){const y=Ii(v,l,n,t);if(Ai(v,y),o==="out-in")return n.isLeaving=!0,y.afterLeave=()=>{n.isLeaving=!1,t.update()},g0(s);o==="in-out"&&u.type!==We&&(y.delayLeave=(T,I,M)=>{const N=qo(n,v);N[String(v.key)]=v,T._leaveCb=()=>{I(),T._leaveCb=void 0,delete f.delayedLeave},f.delayedLeave=M})}return s}}},jo=ou;function qo(e,r){const{leavingVNodes:t}=e;let n=t.get(r.type);return n||(n=Object.create(null),t.set(r.type,n)),n}function Ii(e,r,t,n){const{appear:i,mode:a,persisted:s=!1,onBeforeEnter:l,onEnter:o,onAfterEnter:u,onEnterCancelled:f,onBeforeLeave:c,onLeave:v,onAfterLeave:d,onLeaveCancelled:h,onBeforeAppear:y,onAppear:T,onAfterAppear:I,onAppearCancelled:M}=r,N=String(e.key),W=qo(t,e),U=(P,re)=>{P&&Se(P,n,9,re)},ae=(P,re)=>{const Z=re[1];U(P,re),H(P)?P.every(de=>de.length<=1)&&Z():P.length<=1&&Z()},ee={mode:a,persisted:s,beforeEnter(P){let re=l;if(!t.isMounted)if(i)re=y||l;else return;P._leaveCb&&P._leaveCb(!0);const Z=W[N];Z&&Hr(e,Z)&&Z.el._leaveCb&&Z.el._leaveCb(),U(re,[P])},enter(P){let re=o,Z=u,de=f;if(!t.isMounted)if(i)re=T||o,Z=I||u,de=M||f;else return;let w=!1;const z=P._enterCb=be=>{w||(w=!0,be?U(de,[P]):U(Z,[P]),ee.delayedLeave&&ee.delayedLeave(),P._enterCb=void 0)};re?ae(re,[P,z]):z()},leave(P,re){const Z=String(e.key);if(P._enterCb&&P._enterCb(!0),t.isUnmounting)return re();U(c,[P]);let de=!1;const w=P._leaveCb=z=>{de||(de=!0,re(),z?U(h,[P]):U(d,[P]),P._leaveCb=void 0,W[Z]===e&&delete W[Z])};W[Z]=e,v?ae(v,[P,w]):w()},clone(P){return Ii(P,r,t,n)}};return ee}function g0(e){if(t0(e))return e=Nr(e),e.children=null,e}function Ka(e){return t0(e)?e.children?e.children[0]:void 0:e}function Ai(e,r){e.shapeFlag&6&&e.component?Ai(e.component.subTree,r):e.shapeFlag&128?(e.ssContent.transition=r.clone(e.ssContent),e.ssFallback.transition=r.clone(e.ssFallback)):e.transition=r}function Qo(e,r=!1,t){let n=[],i=0;for(let a=0;a<e.length;a++){let s=e[a];const l=t==null?s.key:String(t)+String(s.key!=null?s.key:a);s.type===x?(s.patchFlag&128&&i++,n=n.concat(Qo(s.children,r,l))):(r||s.type!==We)&&n.push(l!=null?Nr(s,{key:l}):s)}if(i>1)for(let a=0;a<n.length;a++)n[a].patchFlag=-2;return n}function r0(e){return D(e)?{setup:e,name:e.name}:e}const Rn=e=>!!e.type.__asyncLoader,t0=e=>e.type.__isKeepAlive;function fu(e,r){Yo(e,"a",r)}function uu(e,r){Yo(e,"da",r)}function Yo(e,r,t=ce){const n=e.__wdc||(e.__wdc=()=>{let i=t;for(;i;){if(i.isDeactivated)return;i=i.parent}return e()});if(n0(r,n,t),t){let i=t.parent;for(;i&&i.parent;)t0(i.parent.vnode)&&cu(n,r,t,i),i=i.parent}}function cu(e,r,t,n){const i=n0(r,e,n,!0);ua(()=>{Ji(n[r],i)},t)}function n0(e,r,t=ce,n=!1){if(t){const i=t[e]||(t[e]=[]),a=r.__weh||(r.__weh=(...s)=>{if(t.isUnmounted)return;ft(),st(t);const l=Se(r,t,e,s);return Gr(),ut(),l});return n?i.unshift(a):i.push(a),a}}const lr=e=>(r,t=ce)=>(!Xt||e==="sp")&&n0(e,(...n)=>r(...n),t),vu=lr("bm"),fa=lr("m"),pu=lr("bu"),du=lr("u"),Zo=lr("bum"),ua=lr("um"),$u=lr("sp"),mu=lr("rtg"),hu=lr("rtc");function _u(e,r=ce){n0("ec",e,r)}function gu(e,r){const t=Re;if(t===null)return e;const n=a0(t)||t.proxy,i=e.dirs||(e.dirs=[]);for(let a=0;a<r.length;a++){let[s,l,o,u=q]=r[a];D(s)&&(s={mounted:s,updated:s}),s.deep&&Dr(l),i.push({dir:s,instance:n,value:l,oldValue:void 0,arg:o,modifiers:u})}return e}function Fr(e,r,t,n){const i=e.dirs,a=r&&r.dirs;for(let s=0;s<i.length;s++){const l=i[s];a&&(l.oldValue=a[s].value);let o=l.dir[n];o&&(ft(),Se(o,t,8,[e.el,l,e,r]),ut())}}const yu=Symbol();function Ye(e,r,t,n){let i;const a=t&&t[n];if(H(e)||fe(e)){i=new Array(e.length);for(let s=0,l=e.length;s<l;s++)i[s]=r(e[s],s,void 0,a&&a[s])}else if(typeof e=="number"){i=new Array(e);for(let s=0;s<e;s++)i[s]=r(s+1,s,void 0,a&&a[s])}else if(J(e))if(e[Symbol.iterator])i=Array.from(e,(s,l)=>r(s,l,void 0,a&&a[l]));else{const s=Object.keys(e);i=new Array(s.length);for(let l=0,o=s.length;l<o;l++){const u=s[l];i[l]=r(e[u],u,l,a&&a[l])}}else i=[];return t&&(t[n]=i),i}const Ni=e=>e?of(e)?a0(e)||e.proxy:Ni(e.parent):null,Kn=pe(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Ni(e.parent),$root:e=>Ni(e.root),$emit:e=>e.emit,$options:e=>ca(e),$forceUpdate:e=>e.f||(e.f=()=>oa(e.update)),$nextTick:e=>e.n||(e.n=q1.bind(e.proxy)),$watch:e=>su.bind(e)}),bu={get({_:e},r){const{ctx:t,setupState:n,data:i,props:a,accessCache:s,type:l,appContext:o}=e;let u;if(r[0]!=="$"){const d=s[r];if(d!==void 0)switch(d){case 1:return n[r];case 2:return i[r];case 4:return t[r];case 3:return a[r]}else{if(n!==q&&G(n,r))return s[r]=1,n[r];if(i!==q&&G(i,r))return s[r]=2,i[r];if((u=e.propsOptions[0])&&G(u,r))return s[r]=3,a[r];if(t!==q&&G(t,r))return s[r]=4,t[r];Ei&&(s[r]=0)}}const f=Kn[r];let c,v;if(f)return r==="$attrs"&&Ae(e,"get",r),f(e);if((c=l.__cssModules)&&(c=c[r]))return c;if(t!==q&&G(t,r))return s[r]=4,t[r];if(v=o.config.globalProperties,G(v,r))return v[r]},set({_:e},r,t){const{data:n,setupState:i,ctx:a}=e;return i!==q&&G(i,r)?(i[r]=t,!0):n!==q&&G(n,r)?(n[r]=t,!0):G(e.props,r)||r[0]==="$"&&r.slice(1)in e?!1:(a[r]=t,!0)},has({_:{data:e,setupState:r,accessCache:t,ctx:n,appContext:i,propsOptions:a}},s){let l;return!!t[s]||e!==q&&G(e,s)||r!==q&&G(r,s)||(l=a[0])&&G(l,s)||G(n,s)||G(Kn,s)||G(i.config.globalProperties,s)},defineProperty(e,r,t){return t.get!=null?e._.accessCache[r]=0:G(t,"value")&&this.set(e,r,t.value,null),Reflect.defineProperty(e,r,t)}};let Ei=!0;function Iu(e){const r=ca(e),t=e.proxy,n=e.ctx;Ei=!1,r.beforeCreate&&Xa(r.beforeCreate,e,"bc");const{data:i,computed:a,methods:s,watch:l,provide:o,inject:u,created:f,beforeMount:c,mounted:v,beforeUpdate:d,updated:h,activated:y,deactivated:T,beforeDestroy:I,beforeUnmount:M,destroyed:N,unmounted:W,render:U,renderTracked:ae,renderTriggered:ee,errorCaptured:P,serverPrefetch:re,expose:Z,inheritAttrs:de,components:w,directives:z,filters:be}=r;if(u&&Au(u,n,null,e.appContext.config.unwrapInjectedRef),s)for(const te in s){const Q=s[te];D(Q)&&(n[te]=Q.bind(t))}if(i){const te=i.call(t,t);J(te)&&(e.data=Jn(te))}if(Ei=!0,a)for(const te in a){const Q=a[te],Tr=D(Q)?Q.bind(t,t):D(Q.get)?Q.get.bind(t,t):Ue,zt=!D(Q)&&D(Q.set)?Q.set.bind(t):Ue,Or=lt({get:Tr,set:zt});Object.defineProperty(n,te,{enumerable:!0,configurable:!0,get:()=>Or.value,set:Ge=>Or.value=Ge})}if(l)for(const te in l)Jo(l[te],n,t,te);if(o){const te=D(o)?o.call(t):o;Reflect.ownKeys(te).forEach(Q=>{au(Q,te[Q])})}f&&Xa(f,e,"c");function oe(te,Q){H(Q)?Q.forEach(Tr=>te(Tr.bind(t))):Q&&te(Q.bind(t))}if(oe(vu,c),oe(fa,v),oe(pu,d),oe(du,h),oe(fu,y),oe(uu,T),oe(_u,P),oe(hu,ae),oe(mu,ee),oe(Zo,M),oe(ua,W),oe($u,re),H(Z))if(Z.length){const te=e.exposed||(e.exposed={});Z.forEach(Q=>{Object.defineProperty(te,Q,{get:()=>t[Q],set:Tr=>t[Q]=Tr})})}else e.exposed||(e.exposed={});U&&e.render===Ue&&(e.render=U),de!=null&&(e.inheritAttrs=de),w&&(e.components=w),z&&(e.directives=z)}function Au(e,r,t=Ue,n=!1){H(e)&&(e=Ti(e));for(const i in e){const a=e[i];let s;J(a)?"default"in a?s=h0(a.from||i,a.default,!0):s=h0(a.from||i):s=h0(a),me(s)&&n?Object.defineProperty(r,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:l=>s.value=l}):r[i]=s}}function Xa(e,r,t){Se(H(e)?e.map(n=>n.bind(r.proxy)):e.bind(r.proxy),r,t)}function Jo(e,r,t,n){const i=n.includes(".")?Vo(t,n):()=>t[n];if(fe(e)){const a=r[e];D(a)&&_0(i,a)}else if(D(e))_0(i,e.bind(t));else if(J(e))if(H(e))e.forEach(a=>Jo(a,r,t,n));else{const a=D(e.handler)?e.handler.bind(t):r[e.handler];D(a)&&_0(i,a,e)}}function ca(e){const r=e.type,{mixins:t,extends:n}=r,{mixins:i,optionsCache:a,config:{optionMergeStrategies:s}}=e.appContext,l=a.get(r);let o;return l?o=l:!i.length&&!t&&!n?o=r:(o={},i.length&&i.forEach(u=>Xn(o,u,s,!0)),Xn(o,r,s)),J(r)&&a.set(r,o),o}function Xn(e,r,t,n=!1){const{mixins:i,extends:a}=r;a&&Xn(e,a,t,!0),i&&i.forEach(s=>Xn(e,s,t,!0));for(const s in r)if(!(n&&s==="expose")){const l=Nu[s]||t&&t[s];e[s]=l?l(e[s],r[s]):r[s]}return e}const Nu={data:ka,props:Pr,emits:Pr,methods:Pr,computed:Pr,beforeCreate:he,created:he,beforeMount:he,mounted:he,beforeUpdate:he,updated:he,beforeDestroy:he,beforeUnmount:he,destroyed:he,unmounted:he,activated:he,deactivated:he,errorCaptured:he,serverPrefetch:he,components:Pr,directives:Pr,watch:Tu,provide:ka,inject:Eu};function ka(e,r){return r?e?function(){return pe(D(e)?e.call(this,this):e,D(r)?r.call(this,this):r)}:r:e}function Eu(e,r){return Pr(Ti(e),Ti(r))}function Ti(e){if(H(e)){const r={};for(let t=0;t<e.length;t++)r[e[t]]=e[t];return r}return e}function he(e,r){return e?[...new Set([].concat(e,r))]:r}function Pr(e,r){return e?pe(pe(Object.create(null),e),r):r}function Tu(e,r){if(!e)return r;if(!r)return e;const t=pe(Object.create(null),e);for(const n in r)t[n]=he(e[n],r[n]);return t}function Ou(e,r,t,n=!1){const i={},a={};Un(a,i0,1),e.propsDefaults=Object.create(null),zo(e,r,i,a);for(const s in e.propsOptions[0])s in i||(i[s]=void 0);t?e.props=n?i:B1(i):e.type.props?e.props=i:e.props=a,e.attrs=a}function Fu(e,r,t,n){const{props:i,attrs:a,vnode:{patchFlag:s}}=e,l=V(i),[o]=e.propsOptions;let u=!1;if((n||s>0)&&!(s&16)){if(s&8){const f=e.vnode.dynamicProps;for(let c=0;c<f.length;c++){let v=f[c];if(xn(e.emitsOptions,v))continue;const d=r[v];if(o)if(G(a,v))d!==a[v]&&(a[v]=d,u=!0);else{const h=it(v);i[h]=Oi(o,l,h,d,e,!1)}else d!==a[v]&&(a[v]=d,u=!0)}}}else{zo(e,r,i,a)&&(u=!0);let f;for(const c in l)(!r||!G(r,c)&&((f=ot(c))===c||!G(r,f)))&&(o?t&&(t[c]!==void 0||t[f]!==void 0)&&(i[c]=Oi(o,l,c,void 0,e,!0)):delete i[c]);if(a!==l)for(const c in a)(!r||!G(r,c)&&!0)&&(delete a[c],u=!0)}u&&sr(e,"set","$attrs")}function zo(e,r,t,n){const[i,a]=e.propsOptions;let s=!1,l;if(r)for(let o in r){if(Mn(o))continue;const u=r[o];let f;i&&G(i,f=it(o))?!a||!a.includes(f)?t[f]=u:(l||(l={}))[f]=u:xn(e.emitsOptions,o)||(!(o in n)||u!==n[o])&&(n[o]=u,s=!0)}if(a){const o=V(t),u=l||q;for(let f=0;f<a.length;f++){const c=a[f];t[c]=Oi(i,o,c,u[c],e,!G(u,c))}}return s}function Oi(e,r,t,n,i,a){const s=e[t];if(s!=null){const l=G(s,"default");if(l&&n===void 0){const o=s.default;if(s.type!==Function&&D(o)){const{propsDefaults:u}=i;t in u?n=u[t]:(st(i),n=u[t]=o.call(null,r),Gr())}else n=o}s[0]&&(a&&!l?n=!1:s[1]&&(n===""||n===ot(t))&&(n=!0))}return n}function xo(e,r,t=!1){const n=r.propsCache,i=n.get(e);if(i)return i;const a=e.props,s={},l=[];let o=!1;if(!D(e)){const f=c=>{o=!0;const[v,d]=xo(c,r,!0);pe(s,v),d&&l.push(...d)};!t&&r.mixins.length&&r.mixins.forEach(f),e.extends&&f(e.extends),e.mixins&&e.mixins.forEach(f)}if(!a&&!o)return J(e)&&n.set(e,xr),xr;if(H(a))for(let f=0;f<a.length;f++){const c=it(a[f]);Va(c)&&(s[c]=q)}else if(a)for(const f in a){const c=it(f);if(Va(c)){const v=a[f],d=s[c]=H(v)||D(v)?{type:v}:v;if(d){const h=Qa(Boolean,d.type),y=Qa(String,d.type);d[0]=h>-1,d[1]=y<0||h<y,(h>-1||G(d,"default"))&&l.push(c)}}}const u=[s,l];return J(e)&&n.set(e,u),u}function Va(e){return e[0]!=="$"}function ja(e){const r=e&&e.toString().match(/^\s*function (\w+)/);return r?r[1]:e===null?"null":""}function qa(e,r){return ja(e)===ja(r)}function Qa(e,r){return H(r)?r.findIndex(t=>qa(t,e)):D(r)&&qa(r,e)?0:-1}const ef=e=>e[0]==="_"||e==="$stable",va=e=>H(e)?e.map(Ze):[Ze(e)],Su=(e,r,t)=>{if(r._n)return r;const n=Xo((...i)=>va(r(...i)),t);return n._c=!1,n},rf=(e,r,t)=>{const n=e._ctx;for(const i in e){if(ef(i))continue;const a=e[i];if(D(a))r[i]=Su(i,a,n);else if(a!=null){const s=va(a);r[i]=()=>s}}},tf=(e,r)=>{const t=va(r);e.slots.default=()=>t},wu=(e,r)=>{if(e.vnode.shapeFlag&32){const t=r._;t?(e.slots=V(r),Un(r,"_",t)):rf(r,e.slots={})}else e.slots={},r&&tf(e,r);Un(e.slots,i0,1)},Lu=(e,r,t)=>{const{vnode:n,slots:i}=e;let a=!0,s=q;if(n.shapeFlag&32){const l=r._;l?t&&l===1?a=!1:(pe(i,r),!t&&l===1&&delete i._):(a=!r.$stable,rf(r,i)),s=r}else r&&(tf(e,r),s={default:1});if(a)for(const l in i)!ef(l)&&!(l in s)&&delete i[l]};function nf(){return{app:null,config:{isNativeTag:s1,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Cu=0;function Pu(e,r){return function(n,i=null){D(n)||(n=Object.assign({},n)),i!=null&&!J(i)&&(i=null);const a=nf(),s=new Set;let l=!1;const o=a.app={_uid:Cu++,_component:n,_props:i,_container:null,_context:a,_instance:null,version:ec,get config(){return a.config},set config(u){},use(u,...f){return s.has(u)||(u&&D(u.install)?(s.add(u),u.install(o,...f)):D(u)&&(s.add(u),u(o,...f))),o},mixin(u){return a.mixins.includes(u)||a.mixins.push(u),o},component(u,f){return f?(a.components[u]=f,o):a.components[u]},directive(u,f){return f?(a.directives[u]=f,o):a.directives[u]},mount(u,f,c){if(!l){const v=ve(n,i);return v.appContext=a,f&&r?r(v,u):e(v,u,c),l=!0,o._container=u,u.__vue_app__=o,a0(v.component)||v.component.proxy}},unmount(){l&&(e(null,o._container),delete o._container.__vue_app__)},provide(u,f){return a.provides[u]=f,o}};return o}}function Fi(e,r,t,n,i=!1){if(H(e)){e.forEach((v,d)=>Fi(v,r&&(H(r)?r[d]:r),t,n,i));return}if(Rn(n)&&!i)return;const a=n.shapeFlag&4?a0(n.component)||n.component.proxy:n.el,s=i?null:a,{i:l,r:o}=e,u=r&&r.r,f=l.refs===q?l.refs={}:l.refs,c=l.setupState;if(u!=null&&u!==o&&(fe(u)?(f[u]=null,G(c,u)&&(c[u]=null)):me(u)&&(u.value=null)),D(o))Ir(o,l,12,[s,f]);else{const v=fe(o),d=me(o);if(v||d){const h=()=>{if(e.f){const y=v?G(c,o)?c[o]:f[o]:o.value;i?H(y)&&Ji(y,a):H(y)?y.includes(a)||y.push(a):v?(f[o]=[a],G(c,o)&&(c[o]=f[o])):(o.value=[a],e.k&&(f[e.k]=o.value))}else v?(f[o]=s,G(c,o)&&(c[o]=s)):d&&(o.value=s,e.k&&(f[e.k]=s))};s?(h.id=-1,ge(h,t)):h()}}}const ge=iu;function Mu(e){return Hu(e)}function Hu(e,r){const t=v1();t.__VUE__=!0;const{insert:n,remove:i,patchProp:a,createElement:s,createText:l,createComment:o,setText:u,setElementText:f,parentNode:c,nextSibling:v,setScopeId:d=Ue,insertStaticContent:h}=e,y=(p,$,m,g=null,_=null,E=null,F=!1,A=null,O=!!$.dynamicChildren)=>{if(p===$)return;p&&!Hr(p,$)&&(g=xt(p),Ge(p,_,E,!0),p=null),$.patchFlag===-2&&(O=!1,$.dynamicChildren=null);const{type:b,ref:L,shapeFlag:S}=$;switch(b){case pa:T(p,$,m,g);break;case We:I(p,$,m,g);break;case y0:p==null&&M($,m,g,F);break;case x:w(p,$,m,g,_,E,F,A,O);break;default:S&1?U(p,$,m,g,_,E,F,A,O):S&6?z(p,$,m,g,_,E,F,A,O):(S&64||S&128)&&b.process(p,$,m,g,_,E,F,A,O,Vr)}L!=null&&_&&Fi(L,p&&p.ref,E,$||p,!$)},T=(p,$,m,g)=>{if(p==null)n($.el=l($.children),m,g);else{const _=$.el=p.el;$.children!==p.children&&u(_,$.children)}},I=(p,$,m,g)=>{p==null?n($.el=o($.children||""),m,g):$.el=p.el},M=(p,$,m,g)=>{[p.el,p.anchor]=h(p.children,$,m,g,p.el,p.anchor)},N=({el:p,anchor:$},m,g)=>{let _;for(;p&&p!==$;)_=v(p),n(p,m,g),p=_;n($,m,g)},W=({el:p,anchor:$})=>{let m;for(;p&&p!==$;)m=v(p),i(p),p=m;i($)},U=(p,$,m,g,_,E,F,A,O)=>{F=F||$.type==="svg",p==null?ae($,m,g,_,E,F,A,O):re(p,$,_,E,F,A,O)},ae=(p,$,m,g,_,E,F,A)=>{let O,b;const{type:L,props:S,shapeFlag:C,transition:R,dirs:B}=p;if(O=p.el=s(p.type,E,S&&S.is,S),C&8?f(O,p.children):C&16&&P(p.children,O,null,g,_,E&&L!=="foreignObject",F,A),B&&Fr(p,null,g,"created"),S){for(const j in S)j!=="value"&&!Mn(j)&&a(O,j,null,S[j],E,p.children,g,_,er);"value"in S&&a(O,"value",null,S.value),(b=S.onVnodeBeforeMount)&&Xe(b,g,p)}ee(O,p,p.scopeId,F,g),B&&Fr(p,null,g,"beforeMount");const Y=(!_||_&&!_.pendingBranch)&&R&&!R.persisted;Y&&R.beforeEnter(O),n(O,$,m),((b=S&&S.onVnodeMounted)||Y||B)&&ge(()=>{b&&Xe(b,g,p),Y&&R.enter(O),B&&Fr(p,null,g,"mounted")},_)},ee=(p,$,m,g,_)=>{if(m&&d(p,m),g)for(let E=0;E<g.length;E++)d(p,g[E]);if(_){let E=_.subTree;if($===E){const F=_.vnode;ee(p,F,F.scopeId,F.slotScopeIds,_.parent)}}},P=(p,$,m,g,_,E,F,A,O=0)=>{for(let b=O;b<p.length;b++){const L=p[b]=A?yr(p[b]):Ze(p[b]);y(null,L,$,m,g,_,E,F,A)}},re=(p,$,m,g,_,E,F)=>{const A=$.el=p.el;let{patchFlag:O,dynamicChildren:b,dirs:L}=$;O|=p.patchFlag&16;const S=p.props||q,C=$.props||q;let R;m&&Sr(m,!1),(R=C.onVnodeBeforeUpdate)&&Xe(R,m,$,p),L&&Fr($,p,m,"beforeUpdate"),m&&Sr(m,!0);const B=_&&$.type!=="foreignObject";if(b?Z(p.dynamicChildren,b,A,m,g,B,E):F||Q(p,$,A,null,m,g,B,E,!1),O>0){if(O&16)de(A,$,S,C,m,g,_);else if(O&2&&S.class!==C.class&&a(A,"class",null,C.class,_),O&4&&a(A,"style",S.style,C.style,_),O&8){const Y=$.dynamicProps;for(let j=0;j<Y.length;j++){const se=Y[j],Ce=S[se],jr=C[se];(jr!==Ce||se==="value")&&a(A,se,Ce,jr,_,p.children,m,g,er)}}O&1&&p.children!==$.children&&f(A,$.children)}else!F&&b==null&&de(A,$,S,C,m,g,_);((R=C.onVnodeUpdated)||L)&&ge(()=>{R&&Xe(R,m,$,p),L&&Fr($,p,m,"updated")},g)},Z=(p,$,m,g,_,E,F)=>{for(let A=0;A<$.length;A++){const O=p[A],b=$[A],L=O.el&&(O.type===x||!Hr(O,b)||O.shapeFlag&70)?c(O.el):m;y(O,b,L,null,g,_,E,F,!0)}},de=(p,$,m,g,_,E,F)=>{if(m!==g){if(m!==q)for(const A in m)!Mn(A)&&!(A in g)&&a(p,A,m[A],null,F,$.children,_,E,er);for(const A in g){if(Mn(A))continue;const O=g[A],b=m[A];O!==b&&A!=="value"&&a(p,A,b,O,F,$.children,_,E,er)}"value"in g&&a(p,"value",m.value,g.value)}},w=(p,$,m,g,_,E,F,A,O)=>{const b=$.el=p?p.el:l(""),L=$.anchor=p?p.anchor:l("");let{patchFlag:S,dynamicChildren:C,slotScopeIds:R}=$;R&&(A=A?A.concat(R):R),p==null?(n(b,m,g),n(L,m,g),P($.children,m,L,_,E,F,A,O)):S>0&&S&64&&C&&p.dynamicChildren?(Z(p.dynamicChildren,C,m,_,E,F,A),($.key!=null||_&&$===_.subTree)&&af(p,$,!0)):Q(p,$,m,L,_,E,F,A,O)},z=(p,$,m,g,_,E,F,A,O)=>{$.slotScopeIds=A,p==null?$.shapeFlag&512?_.ctx.activate($,m,g,F,O):be($,m,g,_,E,F,O):_t(p,$,O)},be=(p,$,m,g,_,E,F)=>{const A=p.component=ju(p,g,_);if(t0(p)&&(A.ctx.renderer=Vr),Qu(A),A.asyncDep){if(_&&_.registerDep(A,oe),!p.el){const O=A.subTree=ve(We);I(null,O,$,m)}return}oe(A,p,$,m,_,E,F)},_t=(p,$,m)=>{const g=$.component=p.component;if(ru(p,$,m))if(g.asyncDep&&!g.asyncResolved){te(g,$,m);return}else g.next=$,Y1(g.update),g.update();else $.el=p.el,g.vnode=$},oe=(p,$,m,g,_,E,F)=>{const A=()=>{if(p.isMounted){let{next:L,bu:S,u:C,parent:R,vnode:B}=p,Y=L,j;Sr(p,!1),L?(L.el=B.el,te(p,L,F)):L=B,S&&Hn(S),(j=L.props&&L.props.onVnodeBeforeUpdate)&&Xe(j,R,L,B),Sr(p,!0);const se=m0(p),Ce=p.subTree;p.subTree=se,y(Ce,se,c(Ce.el),xt(Ce),p,_,E),L.el=se.el,Y===null&&tu(p,se.el),C&&ge(C,_),(j=L.props&&L.props.onVnodeUpdated)&&ge(()=>Xe(j,R,L,B),_)}else{let L;const{el:S,props:C}=$,{bm:R,m:B,parent:Y}=p,j=Rn($);if(Sr(p,!1),R&&Hn(R),!j&&(L=C&&C.onVnodeBeforeMount)&&Xe(L,Y,$),Sr(p,!0),S&&d0){const se=()=>{p.subTree=m0(p),d0(S,p.subTree,p,_,null)};j?$.type.__asyncLoader().then(()=>!p.isUnmounted&&se()):se()}else{const se=p.subTree=m0(p);y(null,se,m,g,p,_,E),$.el=se.el}if(B&&ge(B,_),!j&&(L=C&&C.onVnodeMounted)){const se=$;ge(()=>Xe(L,Y,se),_)}($.shapeFlag&256||Y&&Rn(Y.vnode)&&Y.vnode.shapeFlag&256)&&p.a&&ge(p.a,_),p.isMounted=!0,$=m=g=null}},O=p.effect=new ra(A,()=>oa(b),p.scope),b=p.update=()=>O.run();b.id=p.uid,Sr(p,!0),b()},te=(p,$,m)=>{$.component=p;const g=p.vnode.props;p.vnode=$,p.next=null,Fu(p,$.props,g,m),Lu(p,$.children,m),ft(),Wa(),ut()},Q=(p,$,m,g,_,E,F,A,O=!1)=>{const b=p&&p.children,L=p?p.shapeFlag:0,S=$.children,{patchFlag:C,shapeFlag:R}=$;if(C>0){if(C&128){zt(b,S,m,g,_,E,F,A,O);return}else if(C&256){Tr(b,S,m,g,_,E,F,A,O);return}}R&8?(L&16&&er(b,_,E),S!==b&&f(m,S)):L&16?R&16?zt(b,S,m,g,_,E,F,A,O):er(b,_,E,!0):(L&8&&f(m,""),R&16&&P(S,m,g,_,E,F,A,O))},Tr=(p,$,m,g,_,E,F,A,O)=>{p=p||xr,$=$||xr;const b=p.length,L=$.length,S=Math.min(b,L);let C;for(C=0;C<S;C++){const R=$[C]=O?yr($[C]):Ze($[C]);y(p[C],R,m,null,_,E,F,A,O)}b>L?er(p,_,E,!0,!1,S):P($,m,g,_,E,F,A,O,S)},zt=(p,$,m,g,_,E,F,A,O)=>{let b=0;const L=$.length;let S=p.length-1,C=L-1;for(;b<=S&&b<=C;){const R=p[b],B=$[b]=O?yr($[b]):Ze($[b]);if(Hr(R,B))y(R,B,m,null,_,E,F,A,O);else break;b++}for(;b<=S&&b<=C;){const R=p[S],B=$[C]=O?yr($[C]):Ze($[C]);if(Hr(R,B))y(R,B,m,null,_,E,F,A,O);else break;S--,C--}if(b>S){if(b<=C){const R=C+1,B=R<L?$[R].el:g;for(;b<=C;)y(null,$[b]=O?yr($[b]):Ze($[b]),m,B,_,E,F,A,O),b++}}else if(b>C)for(;b<=S;)Ge(p[b],_,E,!0),b++;else{const R=b,B=b,Y=new Map;for(b=B;b<=C;b++){const Ie=$[b]=O?yr($[b]):Ze($[b]);Ie.key!=null&&Y.set(Ie.key,b)}let j,se=0;const Ce=C-B+1;let jr=!1,Fa=0;const gt=new Array(Ce);for(b=0;b<Ce;b++)gt[b]=0;for(b=R;b<=S;b++){const Ie=p[b];if(se>=Ce){Ge(Ie,_,E,!0);continue}let Ke;if(Ie.key!=null)Ke=Y.get(Ie.key);else for(j=B;j<=C;j++)if(gt[j-B]===0&&Hr(Ie,$[j])){Ke=j;break}Ke===void 0?Ge(Ie,_,E,!0):(gt[Ke-B]=b+1,Ke>=Fa?Fa=Ke:jr=!0,y(Ie,$[Ke],m,null,_,E,F,A,O),se++)}const Sa=jr?Ru(gt):xr;for(j=Sa.length-1,b=Ce-1;b>=0;b--){const Ie=B+b,Ke=$[Ie],wa=Ie+1<L?$[Ie+1].el:g;gt[b]===0?y(null,Ke,m,wa,_,E,F,A,O):jr&&(j<0||b!==Sa[j]?Or(Ke,m,wa,2):j--)}}},Or=(p,$,m,g,_=null)=>{const{el:E,type:F,transition:A,children:O,shapeFlag:b}=p;if(b&6){Or(p.component.subTree,$,m,g);return}if(b&128){p.suspense.move($,m,g);return}if(b&64){F.move(p,$,m,Vr);return}if(F===x){n(E,$,m);for(let S=0;S<O.length;S++)Or(O[S],$,m,g);n(p.anchor,$,m);return}if(F===y0){N(p,$,m);return}if(g!==2&&b&1&&A)if(g===0)A.beforeEnter(E),n(E,$,m),ge(()=>A.enter(E),_);else{const{leave:S,delayLeave:C,afterLeave:R}=A,B=()=>n(E,$,m),Y=()=>{S(E,()=>{B(),R&&R()})};C?C(E,B,Y):Y()}else n(E,$,m)},Ge=(p,$,m,g=!1,_=!1)=>{const{type:E,props:F,ref:A,children:O,dynamicChildren:b,shapeFlag:L,patchFlag:S,dirs:C}=p;if(A!=null&&Fi(A,null,m,p,!0),L&256){$.ctx.deactivate(p);return}const R=L&1&&C,B=!Rn(p);let Y;if(B&&(Y=F&&F.onVnodeBeforeUnmount)&&Xe(Y,$,p),L&6)e1(p.component,m,g);else{if(L&128){p.suspense.unmount(m,g);return}R&&Fr(p,null,$,"beforeUnmount"),L&64?p.type.remove(p,$,m,_,Vr,g):b&&(E!==x||S>0&&S&64)?er(b,$,m,!1,!0):(E===x&&S&384||!_&&L&16)&&er(O,$,m),g&&Ta(p)}(B&&(Y=F&&F.onVnodeUnmounted)||R)&&ge(()=>{Y&&Xe(Y,$,p),R&&Fr(p,null,$,"unmounted")},m)},Ta=p=>{const{type:$,el:m,anchor:g,transition:_}=p;if($===x){xf(m,g);return}if($===y0){W(p);return}const E=()=>{i(m),_&&!_.persisted&&_.afterLeave&&_.afterLeave()};if(p.shapeFlag&1&&_&&!_.persisted){const{leave:F,delayLeave:A}=_,O=()=>F(m,E);A?A(p.el,E,O):O()}else E()},xf=(p,$)=>{let m;for(;p!==$;)m=v(p),i(p),p=m;i($)},e1=(p,$,m)=>{const{bum:g,scope:_,update:E,subTree:F,um:A}=p;g&&Hn(g),_.stop(),E&&(E.active=!1,Ge(F,p,$,m)),A&&ge(A,$),ge(()=>{p.isUnmounted=!0},$),$&&$.pendingBranch&&!$.isUnmounted&&p.asyncDep&&!p.asyncResolved&&p.suspenseId===$.pendingId&&($.deps--,$.deps===0&&$.resolve())},er=(p,$,m,g=!1,_=!1,E=0)=>{for(let F=E;F<p.length;F++)Ge(p[F],$,m,g,_)},xt=p=>p.shapeFlag&6?xt(p.component.subTree):p.shapeFlag&128?p.suspense.next():v(p.anchor||p.el),Oa=(p,$,m)=>{p==null?$._vnode&&Ge($._vnode,null,null,!0):y($._vnode||null,p,$,null,null,null,m),Wa(),Uo(),$._vnode=p},Vr={p:y,um:Ge,m:Or,r:Ta,mt:be,mc:P,pc:Q,pbc:Z,n:xt,o:e};let p0,d0;return r&&([p0,d0]=r(Vr)),{render:Oa,hydrate:p0,createApp:Pu(Oa,p0)}}function Sr({effect:e,update:r},t){e.allowRecurse=r.allowRecurse=t}function af(e,r,t=!1){const n=e.children,i=r.children;if(H(n)&&H(i))for(let a=0;a<n.length;a++){const s=n[a];let l=i[a];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=i[a]=yr(i[a]),l.el=s.el),t||af(s,l))}}function Ru(e){const r=e.slice(),t=[0];let n,i,a,s,l;const o=e.length;for(n=0;n<o;n++){const u=e[n];if(u!==0){if(i=t[t.length-1],e[i]<u){r[n]=i,t.push(n);continue}for(a=0,s=t.length-1;a<s;)l=a+s>>1,e[t[l]]<u?a=l+1:s=l;u<e[t[a]]&&(a>0&&(r[n]=t[a-1]),t[a]=n)}}for(a=t.length,s=t[a-1];a-- >0;)t[a]=s,s=r[s];return t}const Du=e=>e.__isTeleport,x=Symbol(void 0),pa=Symbol(void 0),We=Symbol(void 0),y0=Symbol(void 0),Dt=[];let De=null;function K(e=!1){Dt.push(De=e?null:[])}function Uu(){Dt.pop(),De=Dt[Dt.length-1]||null}let Kt=1;function Ya(e){Kt+=e}function sf(e){return e.dynamicChildren=Kt>0?De||xr:null,Uu(),Kt>0&&De&&De.push(e),e}function k(e,r,t,n,i,a){return sf(X(e,r,t,n,i,a,!0))}function Wu(e,r,t,n,i){return sf(ve(e,r,t,n,i,!0))}function Si(e){return e?e.__v_isVNode===!0:!1}function Hr(e,r){return e.type===r.type&&e.key===r.key}const i0="__vInternal",lf=({key:e})=>e!=null?e:null,Dn=({ref:e,ref_key:r,ref_for:t})=>e!=null?fe(e)||me(e)||D(e)?{i:Re,r:e,k:r,f:!!t}:e:null;function X(e,r=null,t=null,n=0,i=null,a=e===x?0:1,s=!1,l=!1){const o={__v_isVNode:!0,__v_skip:!0,type:e,props:r,key:r&&lf(r),ref:r&&Dn(r),scopeId:e0,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:a,patchFlag:n,dynamicProps:i,dynamicChildren:null,appContext:null};return l?(da(o,t),a&128&&e.normalize(o)):t&&(o.shapeFlag|=fe(t)?8:16),Kt>0&&!s&&De&&(o.patchFlag>0||a&6)&&o.patchFlag!==32&&De.push(o),o}const ve=Bu;function Bu(e,r=null,t=null,n=0,i=null,a=!1){if((!e||e===yu)&&(e=We),Si(e)){const l=Nr(e,r,!0);return t&&da(l,t),Kt>0&&!a&&De&&(l.shapeFlag&6?De[De.indexOf(e)]=l:De.push(l)),l.patchFlag|=-2,l}if(zu(e)&&(e=e.__vccOpts),r){r=Gu(r);let{class:l,style:o}=r;l&&!fe(l)&&(r.class=ar(l)),J(o)&&(wo(o)&&!H(o)&&(o=pe({},o)),r.style=jn(o))}const s=fe(e)?1:nu(e)?128:Du(e)?64:J(e)?4:D(e)?2:0;return X(e,r,t,n,i,s,a,!0)}function Gu(e){return e?wo(e)||i0 in e?pe({},e):e:null}function Nr(e,r,t=!1){const{props:n,ref:i,patchFlag:a,children:s}=e,l=r?Xu(n||{},r):n;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&lf(l),ref:r&&r.ref?t&&i?H(i)?i.concat(Dn(r)):[i,Dn(r)]:Dn(r):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:s,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:r&&e.type!==x?a===-1?16:a|16:a,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Nr(e.ssContent),ssFallback:e.ssFallback&&Nr(e.ssFallback),el:e.el,anchor:e.anchor}}function kn(e=" ",r=0){return ve(pa,null,e,r)}function Ku(e="",r=!1){return r?(K(),Wu(We,null,e)):ve(We,null,e)}function Ze(e){return e==null||typeof e=="boolean"?ve(We):H(e)?ve(x,null,e.slice()):typeof e=="object"?yr(e):ve(pa,null,String(e))}function yr(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Nr(e)}function da(e,r){let t=0;const{shapeFlag:n}=e;if(r==null)r=null;else if(H(r))t=16;else if(typeof r=="object")if(n&65){const i=r.default;i&&(i._c&&(i._d=!1),da(e,i()),i._c&&(i._d=!0));return}else{t=32;const i=r._;!i&&!(i0 in r)?r._ctx=Re:i===3&&Re&&(Re.slots._===1?r._=1:(r._=2,e.patchFlag|=1024))}else D(r)?(r={default:r,_ctx:Re},t=32):(r=String(r),n&64?(t=16,r=[kn(r)]):t=8);e.children=r,e.shapeFlag|=t}function Xu(...e){const r={};for(let t=0;t<e.length;t++){const n=e[t];for(const i in n)if(i==="class")r.class!==n.class&&(r.class=ar([r.class,n.class]));else if(i==="style")r.style=jn([r.style,n.style]);else if(qn(i)){const a=r[i],s=n[i];s&&a!==s&&!(H(a)&&a.includes(s))&&(r[i]=a?[].concat(a,s):s)}else i!==""&&(r[i]=n[i])}return r}function Xe(e,r,t,n=null){Se(e,r,7,[t,n])}const ku=nf();let Vu=0;function ju(e,r,t){const n=e.type,i=(r?r.appContext:e.appContext)||ku,a={uid:Vu++,vnode:e,type:n,parent:r,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new p1(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:r?r.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:xo(n,i),emitsOptions:Bo(n,i),emit:null,emitted:null,propsDefaults:q,inheritAttrs:n.inheritAttrs,ctx:q,data:q,props:q,attrs:q,slots:q,refs:q,setupState:q,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=r?r.root:a,a.emit=z1.bind(null,a),e.ce&&e.ce(a),a}let ce=null;const qu=()=>ce||Re,st=e=>{ce=e,e.scope.on()},Gr=()=>{ce&&ce.scope.off(),ce=null};function of(e){return e.vnode.shapeFlag&4}let Xt=!1;function Qu(e,r=!1){Xt=r;const{props:t,children:n}=e.vnode,i=of(e);Ou(e,t,i,r),wu(e,n);const a=i?Yu(e,r):void 0;return Xt=!1,a}function Yu(e,r){const t=e.type;e.accessCache=Object.create(null),e.proxy=Lo(new Proxy(e.ctx,bu));const{setup:n}=t;if(n){const i=e.setupContext=n.length>1?Ju(e):null;st(e),ft();const a=Ir(n,e,0,[e.props,i]);if(ut(),Gr(),$o(a)){if(a.then(Gr,Gr),r)return a.then(s=>{Za(e,s,r)}).catch(s=>{zn(s,e,0)});e.asyncDep=a}else Za(e,a,r)}else ff(e,r)}function Za(e,r,t){D(r)?e.type.__ssrInlineRender?e.ssrRender=r:e.render=r:J(r)&&(e.setupState=Mo(r)),ff(e,t)}let Ja;function ff(e,r,t){const n=e.type;if(!e.render){if(!r&&Ja&&!n.render){const i=n.template||ca(e).template;if(i){const{isCustomElement:a,compilerOptions:s}=e.appContext.config,{delimiters:l,compilerOptions:o}=n,u=pe(pe({isCustomElement:a,delimiters:l},s),o);n.render=Ja(i,u)}}e.render=n.render||Ue}st(e),ft(),Iu(e),ut(),Gr()}function Zu(e){return new Proxy(e.attrs,{get(r,t){return Ae(e,"get","$attrs"),r[t]}})}function Ju(e){const r=n=>{e.exposed=n||{}};let t;return{get attrs(){return t||(t=Zu(e))},slots:e.slots,emit:e.emit,expose:r}}function a0(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Mo(Lo(e.exposed)),{get(r,t){if(t in r)return r[t];if(t in Kn)return Kn[t](e)}}))}function zu(e){return D(e)&&"__vccOpts"in e}const lt=(e,r)=>V1(e,r,Xt);function xu(e,r,t){const n=arguments.length;return n===2?J(r)&&!H(r)?Si(r)?ve(e,null,[r]):ve(e,r):ve(e,null,r):(n>3?t=Array.prototype.slice.call(arguments,2):n===3&&Si(t)&&(t=[t]),ve(e,r,t))}const ec="3.2.41",rc="http://www.w3.org/2000/svg",Rr=typeof document<"u"?document:null,za=Rr&&Rr.createElement("template"),tc={insert:(e,r,t)=>{r.insertBefore(e,t||null)},remove:e=>{const r=e.parentNode;r&&r.removeChild(e)},createElement:(e,r,t,n)=>{const i=r?Rr.createElementNS(rc,e):Rr.createElement(e,t?{is:t}:void 0);return e==="select"&&n&&n.multiple!=null&&i.setAttribute("multiple",n.multiple),i},createText:e=>Rr.createTextNode(e),createComment:e=>Rr.createComment(e),setText:(e,r)=>{e.nodeValue=r},setElementText:(e,r)=>{e.textContent=r},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Rr.querySelector(e),setScopeId(e,r){e.setAttribute(r,"")},insertStaticContent(e,r,t,n,i,a){const s=t?t.previousSibling:r.lastChild;if(i&&(i===a||i.nextSibling))for(;r.insertBefore(i.cloneNode(!0),t),!(i===a||!(i=i.nextSibling)););else{za.innerHTML=n?`<svg>${e}</svg>`:e;const l=za.content;if(n){const o=l.firstChild;for(;o.firstChild;)l.appendChild(o.firstChild);l.removeChild(o)}r.insertBefore(l,t)}return[s?s.nextSibling:r.firstChild,t?t.previousSibling:r.lastChild]}};function nc(e,r,t){const n=e._vtc;n&&(r=(r?[r,...n]:[...n]).join(" ")),r==null?e.removeAttribute("class"):t?e.setAttribute("class",r):e.className=r}function ic(e,r,t){const n=e.style,i=fe(t);if(t&&!i){for(const a in t)wi(n,a,t[a]);if(r&&!fe(r))for(const a in r)t[a]==null&&wi(n,a,"")}else{const a=n.display;i?r!==t&&(n.cssText=t):r&&e.removeAttribute("style"),"_vod"in e&&(n.display=a)}}const xa=/\s*!important$/;function wi(e,r,t){if(H(t))t.forEach(n=>wi(e,r,n));else if(t==null&&(t=""),r.startsWith("--"))e.setProperty(r,t);else{const n=ac(e,r);xa.test(t)?e.setProperty(ot(n),t.replace(xa,""),"important"):e[n]=t}}const es=["Webkit","Moz","ms"],b0={};function ac(e,r){const t=b0[r];if(t)return t;let n=it(r);if(n!=="filter"&&n in e)return b0[r]=n;n=_o(n);for(let i=0;i<es.length;i++){const a=es[i]+n;if(a in e)return b0[r]=a}return r}const rs="http://www.w3.org/1999/xlink";function sc(e,r,t,n,i){if(n&&r.startsWith("xlink:"))t==null?e.removeAttributeNS(rs,r.slice(6,r.length)):e.setAttributeNS(rs,r,t);else{const a=t1(r);t==null||a&&!co(t)?e.removeAttribute(r):e.setAttribute(r,a?"":t)}}function lc(e,r,t,n,i,a,s){if(r==="innerHTML"||r==="textContent"){n&&s(n,i,a),e[r]=t==null?"":t;return}if(r==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=t;const o=t==null?"":t;(e.value!==o||e.tagName==="OPTION")&&(e.value=o),t==null&&e.removeAttribute(r);return}let l=!1;if(t===""||t==null){const o=typeof e[r];o==="boolean"?t=co(t):t==null&&o==="string"?(t="",l=!0):o==="number"&&(t=0,l=!0)}try{e[r]=t}catch{}l&&e.removeAttribute(r)}function Jr(e,r,t,n){e.addEventListener(r,t,n)}function oc(e,r,t,n){e.removeEventListener(r,t,n)}function fc(e,r,t,n,i=null){const a=e._vei||(e._vei={}),s=a[r];if(n&&s)s.value=n;else{const[l,o]=uc(r);if(n){const u=a[r]=pc(n,i);Jr(e,l,u,o)}else s&&(oc(e,l,s,o),a[r]=void 0)}}const ts=/(?:Once|Passive|Capture)$/;function uc(e){let r;if(ts.test(e)){r={};let n;for(;n=e.match(ts);)e=e.slice(0,e.length-n[0].length),r[n[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):ot(e.slice(2)),r]}let I0=0;const cc=Promise.resolve(),vc=()=>I0||(cc.then(()=>I0=0),I0=Date.now());function pc(e,r){const t=n=>{if(!n._vts)n._vts=Date.now();else if(n._vts<=t.attached)return;Se(dc(n,t.value),r,5,[n])};return t.value=e,t.attached=vc(),t}function dc(e,r){if(H(r)){const t=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{t.call(e),e._stopped=!0},r.map(n=>i=>!i._stopped&&n&&n(i))}else return r}const ns=/^on[a-z]/,$c=(e,r,t,n,i=!1,a,s,l,o)=>{r==="class"?nc(e,n,i):r==="style"?ic(e,t,n):qn(r)?Zi(r)||fc(e,r,t,n,s):(r[0]==="."?(r=r.slice(1),!0):r[0]==="^"?(r=r.slice(1),!1):mc(e,r,n,i))?lc(e,r,n,a,s,l,o):(r==="true-value"?e._trueValue=n:r==="false-value"&&(e._falseValue=n),sc(e,r,n,i))};function mc(e,r,t,n){return n?!!(r==="innerHTML"||r==="textContent"||r in e&&ns.test(r)&&D(t)):r==="spellcheck"||r==="draggable"||r==="translate"||r==="form"||r==="list"&&e.tagName==="INPUT"||r==="type"&&e.tagName==="TEXTAREA"||ns.test(r)&&fe(t)?!1:r in e}const ur="transition",yt="animation",$a=(e,{slots:r})=>xu(jo,hc(e),r);$a.displayName="Transition";const uf={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};$a.props=pe({},jo.props,uf);const wr=(e,r=[])=>{H(e)?e.forEach(t=>t(...r)):e&&e(...r)},is=e=>e?H(e)?e.some(r=>r.length>1):e.length>1:!1;function hc(e){const r={};for(const w in e)w in uf||(r[w]=e[w]);if(e.css===!1)return r;const{name:t="v",type:n,duration:i,enterFromClass:a=`${t}-enter-from`,enterActiveClass:s=`${t}-enter-active`,enterToClass:l=`${t}-enter-to`,appearFromClass:o=a,appearActiveClass:u=s,appearToClass:f=l,leaveFromClass:c=`${t}-leave-from`,leaveActiveClass:v=`${t}-leave-active`,leaveToClass:d=`${t}-leave-to`}=e,h=_c(i),y=h&&h[0],T=h&&h[1],{onBeforeEnter:I,onEnter:M,onEnterCancelled:N,onLeave:W,onLeaveCancelled:U,onBeforeAppear:ae=I,onAppear:ee=M,onAppearCancelled:P=N}=r,re=(w,z,be)=>{Lr(w,z?f:l),Lr(w,z?u:s),be&&be()},Z=(w,z)=>{w._isLeaving=!1,Lr(w,c),Lr(w,d),Lr(w,v),z&&z()},de=w=>(z,be)=>{const _t=w?ee:M,oe=()=>re(z,w,be);wr(_t,[z,oe]),as(()=>{Lr(z,w?o:a),cr(z,w?f:l),is(_t)||ss(z,n,y,oe)})};return pe(r,{onBeforeEnter(w){wr(I,[w]),cr(w,a),cr(w,s)},onBeforeAppear(w){wr(ae,[w]),cr(w,o),cr(w,u)},onEnter:de(!1),onAppear:de(!0),onLeave(w,z){w._isLeaving=!0;const be=()=>Z(w,z);cr(w,c),bc(),cr(w,v),as(()=>{!w._isLeaving||(Lr(w,c),cr(w,d),is(W)||ss(w,n,T,be))}),wr(W,[w,be])},onEnterCancelled(w){re(w,!1),wr(N,[w])},onAppearCancelled(w){re(w,!0),wr(P,[w])},onLeaveCancelled(w){Z(w),wr(U,[w])}})}function _c(e){if(e==null)return null;if(J(e))return[A0(e.enter),A0(e.leave)];{const r=A0(e);return[r,r]}}function A0(e){return Wn(e)}function cr(e,r){r.split(/\s+/).forEach(t=>t&&e.classList.add(t)),(e._vtc||(e._vtc=new Set)).add(r)}function Lr(e,r){r.split(/\s+/).forEach(n=>n&&e.classList.remove(n));const{_vtc:t}=e;t&&(t.delete(r),t.size||(e._vtc=void 0))}function as(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let gc=0;function ss(e,r,t,n){const i=e._endId=++gc,a=()=>{i===e._endId&&n()};if(t)return setTimeout(a,t);const{type:s,timeout:l,propCount:o}=yc(e,r);if(!s)return n();const u=s+"end";let f=0;const c=()=>{e.removeEventListener(u,v),a()},v=d=>{d.target===e&&++f>=o&&c()};setTimeout(()=>{f<o&&c()},l+1),e.addEventListener(u,v)}function yc(e,r){const t=window.getComputedStyle(e),n=h=>(t[h]||"").split(", "),i=n(ur+"Delay"),a=n(ur+"Duration"),s=ls(i,a),l=n(yt+"Delay"),o=n(yt+"Duration"),u=ls(l,o);let f=null,c=0,v=0;r===ur?s>0&&(f=ur,c=s,v=a.length):r===yt?u>0&&(f=yt,c=u,v=o.length):(c=Math.max(s,u),f=c>0?s>u?ur:yt:null,v=f?f===ur?a.length:o.length:0);const d=f===ur&&/\b(transform|all)(,|$)/.test(t[ur+"Property"]);return{type:f,timeout:c,propCount:v,hasTransform:d}}function ls(e,r){for(;e.length<r.length;)e=e.concat(e);return Math.max(...r.map((t,n)=>os(t)+os(e[n])))}function os(e){return Number(e.slice(0,-1).replace(",","."))*1e3}function bc(){return document.body.offsetHeight}const fs=e=>{const r=e.props["onUpdate:modelValue"]||!1;return H(r)?t=>Hn(r,t):r};function Ic(e){e.target.composing=!0}function us(e){const r=e.target;r.composing&&(r.composing=!1,r.dispatchEvent(new Event("input")))}const Ac={created(e,{modifiers:{lazy:r,trim:t,number:n}},i){e._assign=fs(i);const a=n||i.props&&i.props.type==="number";Jr(e,r?"change":"input",s=>{if(s.target.composing)return;let l=e.value;t&&(l=l.trim()),a&&(l=Wn(l)),e._assign(l)}),t&&Jr(e,"change",()=>{e.value=e.value.trim()}),r||(Jr(e,"compositionstart",Ic),Jr(e,"compositionend",us),Jr(e,"change",us))},mounted(e,{value:r}){e.value=r==null?"":r},beforeUpdate(e,{value:r,modifiers:{lazy:t,trim:n,number:i}},a){if(e._assign=fs(a),e.composing||document.activeElement===e&&e.type!=="range"&&(t||n&&e.value.trim()===r||(i||e.type==="number")&&Wn(e.value)===r))return;const s=r==null?"":r;e.value!==s&&(e.value=s)}},Nc=["ctrl","shift","alt","meta"],Ec={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,r)=>Nc.some(t=>e[`${t}Key`]&&!r.includes(t))},Tc=(e,r)=>(t,...n)=>{for(let i=0;i<r.length;i++){const a=Ec[r[i]];if(a&&a(t,r))return}return e(t,...n)},Oc=pe({patchProp:$c},tc);let cs;function Fc(){return cs||(cs=Mu(Oc))}const Sc=(...e)=>{const r=Fc().createApp(...e),{mount:t}=r;return r.mount=n=>{const i=wc(n);if(!i)return;const a=r._component;!D(a)&&!a.render&&!a.template&&(a.template=i.innerHTML),i.innerHTML="";const s=t(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),s},r};function wc(e){return fe(e)?document.querySelector(e):e}/**
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
*/var Lc=typeof Object.defineProperty=="function"?Object.defineProperty:null,Cc=Lc;/**
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
*/var Pc=Cc;function Mc(){try{return Pc({},"x",{}),!0}catch{return!1}}var Hc=Mc;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Rc=Object.defineProperty,Dc=Rc;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ct=Object.prototype,vs=ct.toString,ps=ct.__defineGetter__,ds=ct.__defineSetter__,Uc=ct.__lookupGetter__,Wc=ct.__lookupSetter__;function Bc(e,r,t){var n,i,a,s;if(typeof e!="object"||e===null||vs.call(e)==="[object Array]")throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if(typeof t!="object"||t===null||vs.call(t)==="[object Array]")throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if(i="value"in t,i&&(Uc.call(e,r)||Wc.call(e,r)?(n=e.__proto__,e.__proto__=ct,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),a="get"in t,s="set"in t,i&&(a||s))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&ps&&ps.call(e,r,t.get),s&&ds&&ds.call(e,r,t.set),e}var Gc=Bc;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Kc=Hc,Xc=Dc,kc=Gc,Li;Kc()?Li=Xc:Li=kc;var Vc=Li;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var jc=Vc;function qc(e,r,t){jc(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}var Qc=qc;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Yc=Qc,s0=Yc;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Zc=Math.floor,Jc=Zc;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var zc=Jc,Be=zc;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var xc=Be;function e2(e){return xc(e)===e&&e>=0}var r2=e2;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var t2=r2,cf=t2;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function n2(e){return e!==e}var i2=n2;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var a2=i2,ne=a2;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function s2(){return typeof Symbol=="function"&&typeof Symbol("foo")=="symbol"}var l2=s2;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var o2=l2,f2=o2;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var u2=f2,c2=u2();function v2(){return c2&&typeof Symbol.toStringTag=="symbol"}var p2=v2;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var d2=p2,$2=d2;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var m2=Object.prototype.toString,vf=m2;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var h2=vf;function _2(e){return h2.call(e)}var g2=_2;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var y2=Object.prototype.hasOwnProperty;function b2(e,r){return e==null?!1:y2.call(e,r)}var I2=b2;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var A2=I2,N2=A2;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var E2=typeof Symbol=="function"?Symbol.toStringTag:"",T2=E2;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var O2=N2,bt=T2,N0=vf;function F2(e){var r,t,n;if(e==null)return N0.call(e);t=e[bt],r=O2(e,bt);try{e[bt]=void 0}catch{return N0.call(e)}return n=N0.call(e),r?e[bt]=t:delete e[bt],n}var S2=F2;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var w2=$2,L2=g2,C2=S2,Ci;w2()?Ci=C2:Ci=L2;var l0=Ci;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var P2=l0,M2=typeof Uint32Array=="function";function H2(e){return M2&&e instanceof Uint32Array||P2(e)==="[object Uint32Array]"}var R2=H2;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var D2=R2,U2=D2;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var W2=4294967295,B2=W2;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var G2=typeof Uint32Array=="function"?Uint32Array:null,K2=G2;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var X2=U2,E0=B2,$s=K2;function k2(){var e,r;if(typeof $s!="function")return!1;try{r=[1,3.14,-3.14,E0+1,E0+2],r=new $s(r),e=X2(r)&&r[0]===1&&r[1]===3&&r[2]===E0-2&&r[3]===0&&r[4]===1}catch{e=!1}return e}var V2=k2;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var j2=V2,q2=j2;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Q2=typeof Uint32Array=="function"?Uint32Array:void 0,Y2=Q2;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Z2(){throw new Error("not implemented")}var J2=Z2;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var z2=q2,x2=Y2,ev=J2,Pi;z2()?Pi=x2:Pi=ev;var vt=Pi;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var rv=l0,tv=typeof Float64Array=="function";function nv(e){return tv&&e instanceof Float64Array||rv(e)==="[object Float64Array]"}var iv=nv;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var av=iv,sv=av;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var lv=typeof Float64Array=="function"?Float64Array:null,ov=lv;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var fv=sv,ms=ov;function uv(){var e,r;if(typeof ms!="function")return!1;try{r=new ms([1,3.14,-3.14,NaN]),e=fv(r)&&r[0]===1&&r[1]===3.14&&r[2]===-3.14&&r[3]!==r[3]}catch{e=!1}return e}var cv=uv;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var vv=cv,pv=vv;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var dv=typeof Float64Array=="function"?Float64Array:void 0,$v=dv;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function mv(){throw new Error("not implemented")}var hv=mv;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _v=pv,gv=$v,yv=hv,Mi;_v()?Mi=gv:Mi=yv;var pt=Mi;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var bv=l0,Iv=typeof Uint8Array=="function";function Av(e){return Iv&&e instanceof Uint8Array||bv(e)==="[object Uint8Array]"}var Nv=Av;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ev=Nv,Tv=Ev;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ov=255,Fv=Ov;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Sv=typeof Uint8Array=="function"?Uint8Array:null,wv=Sv;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Lv=Tv,T0=Fv,hs=wv;function Cv(){var e,r;if(typeof hs!="function")return!1;try{r=[1,3.14,-3.14,T0+1,T0+2],r=new hs(r),e=Lv(r)&&r[0]===1&&r[1]===3&&r[2]===T0-2&&r[3]===0&&r[4]===1}catch{e=!1}return e}var Pv=Cv;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Mv=Pv,Hv=Mv;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Rv=typeof Uint8Array=="function"?Uint8Array:void 0,Dv=Rv;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Uv(){throw new Error("not implemented")}var Wv=Uv;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Bv=Hv,Gv=Dv,Kv=Wv,Hi;Bv()?Hi=Gv:Hi=Kv;var Xv=Hi;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var kv=l0,Vv=typeof Uint16Array=="function";function jv(e){return Vv&&e instanceof Uint16Array||kv(e)==="[object Uint16Array]"}var qv=jv;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Qv=qv,Yv=Qv;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Zv=65535,Jv=Zv;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var zv=typeof Uint16Array=="function"?Uint16Array:null,xv=zv;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e3=Yv,O0=Jv,_s=xv;function r3(){var e,r;if(typeof _s!="function")return!1;try{r=[1,3.14,-3.14,O0+1,O0+2],r=new _s(r),e=e3(r)&&r[0]===1&&r[1]===3&&r[2]===O0-2&&r[3]===0&&r[4]===1}catch{e=!1}return e}var t3=r3;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var n3=t3,i3=n3;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var a3=typeof Uint16Array=="function"?Uint16Array:void 0,s3=a3;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function l3(){throw new Error("not implemented")}var o3=l3;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var f3=i3,u3=s3,c3=o3,Ri;f3()?Ri=u3:Ri=c3;var v3=Ri;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var p3=Xv,d3=v3,$3={uint16:d3,uint8:p3},m3=$3;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var gs=m3,pf;function h3(){var e,r;return e=new gs.uint16(1),e[0]=4660,r=new gs.uint8(e.buffer),r[0]===52}pf=h3();var _3=pf;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var g3=_3,dt=g3;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var y3=dt,Di;y3===!0?Di=1:Di=0;var b3=Di;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var I3=vt,A3=pt,N3=b3,df=new A3(1),E3=new I3(df.buffer);function T3(e){return df[0]=e,E3[N3]}var O3=T3;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var F3=O3,we=F3;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var S3=dt,Ui;S3===!0?Ui=1:Ui=0;var w3=Ui;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var L3=vt,C3=pt,P3=w3,Wi=new C3(1),M3=new L3(Wi.buffer);function H3(e,r){return Wi[0]=e,M3[P3]=r>>>0,Wi[0]}var R3=H3;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var D3=R3,kt=D3;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var U3=Number.POSITIVE_INFINITY,le=U3;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var W3=Number;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var B3=W3,G3=B3;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var K3=G3,X3=K3.NEGATIVE_INFINITY,Ne=X3;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var k3=1023,Kr=k3;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var V3=.34657359027997264,j3=V3;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function q3(e){return e===0?-.03333333333333313:-.03333333333333313+e*(.0015873015872548146+e*(-793650757867488e-19+e*(4008217827329362e-21+e*-20109921818362437e-23)))}var Q3=q3;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Y3=ne,F0=we,sn=kt,ys=le,Z3=Ne,J3=Kr,z3=j3,x3=Q3,e6=709.782712893384,S0=.6931471803691238,w0=19082149292705877e-26,bs=1.4426950408889634,r6=38.816242111356935,t6=1.0397207708399179;function n6(e){var r,t,n,i,a,s,l,o,u,f,c,v;if(e===ys||Y3(e))return e;if(e===Z3)return-1;if(e===0)return e;if(e<0?(t=!0,l=-e):(t=!1,l=e),l>=r6){if(t)return-1;if(l>=e6)return ys}if(a=F0(l)|0,l>z3)l<t6?t?(n=e+S0,i=-w0,v=-1):(n=e-S0,i=w0,v=1):(t?v=bs*e-.5:v=bs*e+.5,v|=0,f=v,n=e-f*S0,i=f*w0),e=n-i,u=n-e-i;else{if(a<1016070144)return e;v=0}return r=.5*e,o=e*r,s=1+o*x3(o),f=3-s*r,c=o*((s-f)/(6-e*f)),v===0?e-(e*c-o):(c=e*(c-u)-u,c-=o,v===-1?.5*(e-c)-.5:v===1?e<-.25?-2*(c-(e+.5)):1+2*(e-c):v<=-2||v>56?(l=1-(c-e),n=F0(l)+(v<<20)|0,l=sn(l,n),l-1):(f=1,v<20?(n=1072693248-(2097152>>v)|0,f=sn(f,n),l=f-(c-e)):(n=J3-v<<20|0,f=sn(f,n),l=e-(c+f),l+=1),n=F0(l)+(v<<20)|0,sn(l,n)))}var i6=n6;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var a6=i6,o0=a6;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function s6(e){return e===0?.6666666666666735:.6666666666666735+e*(.3999999999940942+e*(.2857142874366239+e*(.22222198432149784+e*(.1818357216161805+e*(.15313837699209373+e*.14798198605116586)))))}var l6=s6;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var o6=ne,Is=we,As=kt,f6=le,u6=Ne,Ns=Kr,c6=l6,L0=.6931471803691238,C0=19082149292705877e-26,v6=.41421356237309503,p6=-.2928932188134525,d6=1862645149230957e-24,$6=5551115123125783e-32,m6=9007199254740992,h6=.6666666666666666;function _6(e){var r,t,n,i,a,s,l,o,u,f;if(e<-1||o6(e))return NaN;if(e===-1)return u6;if(e===f6||e===0)return e;if(e<0?n=-e:n=e,f=1,n<v6){if(n<d6)return n<$6?e:e-e*e*.5;e>p6&&(f=0,i=e,t=1)}return f!==0&&(n<m6?(u=1+e,t=Is(u),f=(t>>20)-Ns,f>0?a=1-(u-e):a=e-(u-1),a/=u):(u=e,t=Is(u),f=(t>>20)-Ns,a=0),t&=1048575,t<434334?u=As(u,t|1072693248):(f+=1,u=As(u,t|1071644672),t=1048576-t>>2),i=u-1),r=.5*i*i,t===0?i===0?(a+=f*C0,f*L0+a):(o=r*(1-h6*i),f*L0-(o-(f*C0+a)-i)):(s=i/(2+i),l=s*s,o=l*c6(l),f===0?i-(r-s*(r+o)):f*L0-(r-(s*(r+o)+(f*C0+a))-i))}var g6=_6;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var y6=g6,or=y6;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var b6=Math.sqrt,I6=b6;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var A6=I6,xe=A6;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var N6=.7853981633974483,E6=N6;/**
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
*/function T6(e){var r,t,n;return e===0?.16666666666666713:(e<0?r=-e:r=e,r<=1?(t=-8.198089802484825+e*(19.562619833175948+e*(-16.262479672107002+e*(5.444622390564711+e*(-.6019598008014124+e*.004253011369004428)))),n=-49.18853881490881+e*(139.51056146574857+e*(-147.1791292232726+e*(70.49610280856842+e*(-14.740913729888538+e*1))))):(e=1/e,t=.004253011369004428+e*(-.6019598008014124+e*(5.444622390564711+e*(-16.262479672107002+e*(19.562619833175948+e*-8.198089802484825)))),n=1+e*(-14.740913729888538+e*(70.49610280856842+e*(-147.1791292232726+e*(139.51056146574857+e*-49.18853881490881))))),t/n)}var O6=T6;/**
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
*/function F6(e){var r,t,n;return e===0?.08333333333333809:(e<0?r=-e:r=e,r<=1?(t=28.536655482610616+e*(-25.56901049652825+e*(6.968710824104713+e*(-.5634242780008963+e*.002967721961301243))),n=342.43986579130785+e*(-383.8770957603691+e*(147.0656354026815+e*(-21.947795316429207+e*1)))):(e=1/e,t=.002967721961301243+e*(-.5634242780008963+e*(6.968710824104713+e*(-25.56901049652825+e*28.536655482610616))),n=1+e*(-21.947795316429207+e*(147.0656354026815+e*(-383.8770957603691+e*342.43986579130785)))),t/n)}var S6=F6;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var w6=ne,L6=xe,Es=E6,C6=O6,P6=S6,M6=6123233995736766e-32;function H6(e){var r,t,n,i,a;if(w6(e))return NaN;if(e>0?n=e:(r=!0,n=-e),n>1)return NaN;if(n>.625)t=1-n,i=t*P6(t),t=L6(t+t),a=Es-t,t=t*i-M6,a-=t,a+=Es;else{if(n<1e-8)return e;t=n*n,a=t*C6(t),a=n*a+n}return r?-a:a}var R6=H6;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var D6=R6,U6=D6;/**
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
*/function W6(e){return Math.abs(e)}var B6=W6;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var G6=B6,ie=G6;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var K6=Math.ceil,X6=K6;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var k6=X6,V6=k6;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var j6=Be,q6=V6;function Q6(e){return e<0?q6(e):j6(e)}var Y6=Q6;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Z6=Y6,ma=Z6;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var J6=1023,z6=J6;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var x6=-1023,e4=x6;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r4=-1074,t4=r4;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var n4=le,i4=Ne;function a4(e){return e===n4||e===i4}var s4=a4;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var l4=s4,Vt=l4;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var o4=dt,$f,Bi,Gi;o4===!0?(Bi=1,Gi=0):(Bi=0,Gi=1);$f={HIGH:Bi,LOW:Gi};var f4=$f;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var u4=vt,c4=pt,mf=f4,hf=new c4(1),Ts=new u4(hf.buffer),v4=mf.HIGH,p4=mf.LOW;function d4(e,r){return hf[0]=r,e[0]=Ts[v4],e[1]=Ts[p4],e}var $4=d4;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Os=$4;function m4(e,r){return arguments.length===1?Os([0,0],e):Os(e,r)}var h4=m4;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _4=h4,ha=_4;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var g4=dt,_f,Ki,Xi;g4===!0?(Ki=1,Xi=0):(Ki=0,Xi=1);_f={HIGH:Ki,LOW:Xi};var y4=_f;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var b4=vt,I4=pt,gf=y4,yf=new I4(1),Fs=new b4(yf.buffer),A4=gf.HIGH,N4=gf.LOW;function E4(e,r){return Fs[A4]=e,Fs[N4]=r,yf[0]}var T4=E4;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var O4=T4,_a=O4;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var F4=ha,S4=we,w4=_a,L4=2147483648>>>0,C4=2147483647,P0=[0,0];function P4(e,r){var t,n;return F4(P0,e),t=P0[0],t&=C4,n=S4(r),n&=L4,t|=n,w4(t,P0[1])}var M4=P4;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var H4=M4,ga=H4;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var R4=22250738585072014e-324,jt=R4;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var D4=jt,U4=Vt,W4=ne,B4=ie,G4=4503599627370496;function K4(e,r,t,n){return W4(e)||U4(e)?(r[n]=e,r[n+t]=0,r):e!==0&&B4(e)<D4?(r[n]=e*G4,r[n+t]=-52,r):(r[n]=e,r[n+t]=0,r)}var bf=K4;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var X4=bf;function k4(e){return X4(e,[0,0],1,0)}var V4=k4;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var j4=s0,If=V4,q4=bf;j4(If,"assign",q4);var Q4=If;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Y4=2146435072,Z4=Y4;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var J4=we,z4=Z4,x4=Kr;function e5(e){var r=J4(e);return r=(r&z4)>>>20,r-x4|0}var r5=e5;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var t5=r5,n5=t5;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var i5=le,a5=Ne,s5=Kr,l5=z6,o5=e4,f5=t4,u5=ne,c5=Vt,v5=ga,p5=Q4.assign,d5=n5,$5=ha,m5=_a,h5=2220446049250313e-31,_5=2148532223>>>0,M0=[0,0],H0=[0,0];function g5(e,r){var t,n;return r===0||e===0||u5(e)||c5(e)?e:(p5(e,M0,1,0),e=M0[0],r+=M0[1],r+=d5(e),r<f5?v5(0,e):r>l5?e<0?a5:i5:(r<=o5?(r+=52,n=h5):n=1,$5(H0,e),t=H0[0],t&=_5,t|=r+s5<<20,n*m5(t,H0[1])))}var y5=g5;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var b5=y5,ya=b5;/**
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
*/function I5(e){return e===0?.16666666666666602:.16666666666666602+e*(-.0027777777777015593+e*(6613756321437934e-20+e*(-16533902205465252e-22+e*41381367970572385e-24)))}var A5=I5;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var N5=ya,E5=A5;function T5(e,r,t){var n,i,a,s;return n=e-r,i=n*n,a=n-i*E5(i),s=1-(r-n*a/(2-a)-e),N5(s,t)}var O5=T5;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var F5=ne,Ss=ma,S5=Ne,ws=le,w5=O5,L5=.6931471803691238,C5=19082149292705877e-26,Ls=1.4426950408889634,P5=709.782712893384,M5=-745.1332191019411,Af=1/(1<<28),H5=-Af;function R5(e){var r,t,n;return F5(e)||e===ws?e:e===S5?0:e>P5?ws:e<M5?0:e>H5&&e<Af?1+e:(e<0?n=Ss(Ls*e-.5):n=Ss(Ls*e+.5),r=e-n*L5,t=n*C5,w5(r,t,n))}var D5=R5;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var U5=D5,_e=U5;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var W5=Be;function B5(e){return W5(e)===e}var G5=B5;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var K5=G5,qt=K5;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var X5=qt;function k5(e){return X5(e/2)}var V5=k5;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var j5=V5,q5=j5;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Cs=q5;function Q5(e){return e>0?Cs(e-1):Cs(e+1)}var Y5=Q5;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Z5=Y5,ba=Z5;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var J5=dt,ki;J5===!0?ki=0:ki=1;var z5=ki;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var x5=vt,e7=pt,r7=z5,Vi=new e7(1),t7=new x5(Vi.buffer);function n7(e,r){return Vi[0]=e,t7[r7]=r>>>0,Vi[0]}var i7=n7;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var a7=i7,Qt=a7;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function s7(e){return e|0}var l7=s7;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var o7=l7,Nf=o7;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Ps=ba,f7=ga,u7=Ne,ln=le;function c7(e,r){return r===u7?ln:r===ln?0:r>0?Ps(r)?e:0:Ps(r)?f7(ln,e):ln}var v7=c7;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var p7=we,d7=2147483647,$7=1072693247,on=1e300,fn=1e-300;function m7(e,r){var t,n;return n=p7(e),t=n&d7,t<=$7?r<0?on*on:fn*fn:r>0?on*on:fn*fn}var h7=m7;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _7=ie,Ms=le;function g7(e,r){return e===-1?(e-e)/(e-e):e===1?1:_7(e)<1==(r===Ms)?0:Ms}var y7=g7;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function b7(e){return e===0?.5999999999999946:.5999999999999946+e*(.4285714285785502+e*(.33333332981837743+e*(.272728123808534+e*(.23066074577556175+e*.20697501780033842))))}var I7=b7;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var A7=we,un=Qt,Hs=kt,N7=Kr,E7=I7,T7=1048575,Rs=1048576,O7=1072693248,F7=536870912,S7=524288,w7=20,L7=9007199254740992,C7=.9617966939259756,P7=.9617967009544373,M7=-7028461650952758e-24,H7=[1,1.5],R7=[0,.5849624872207642],D7=[0,1350039202129749e-23];function U7(e,r,t){var n,i,a,s,l,o,u,f,c,v,d,h,y,T,I,M,N,W,U,ae,ee,P;return ae=0,t<Rs&&(r*=L7,ae-=53,t=A7(r)),ae+=(t>>w7)-N7|0,ee=t&T7|0,t=ee|O7|0,ee<=235662?P=0:ee<767610?P=1:(P=0,ae+=1,t-=Rs),r=Hs(r,t),f=H7[P],W=r-f,U=1/(r+f),i=W*U,s=un(i,0),n=(t>>1|F7)+S7,n+=P<<18,o=Hs(0,n),u=r-(o-f),l=U*(W-s*o-s*u),a=i*i,N=a*a*E7(a),N+=l*(s+i),a=s*s,o=3+a+N,o=un(o,0),u=N-(o-3-a),W=s*o,U=l*o+u*i,v=W+U,v=un(v,0),d=U-(v-W),h=P7*v,y=M7*v+d*C7+D7[P],c=R7[P],M=ae,T=h+y+c+M,T=un(T,0),I=y-(T-M-c-h),e[0]=T,e[1]=I,e}var W7=U7;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function B7(e){return e===0?.5:.5+e*(-.3333333333333333+e*.25)}var G7=B7;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var K7=Qt,X7=G7,k7=1.4426950408889634,V7=1.4426950216293335,j7=19259629911266175e-24;function q7(e,r){var t,n,i,a,s,l;return i=r-1,a=i*i*X7(i),s=V7*i,l=i*j7-a*k7,n=s+l,n=K7(n,0),t=l-(n-s),e[0]=n,e[1]=t,e}var Q7=q7;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Y7=.6931471805599453,Z7=Y7;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function J7(e){return e===0?.16666666666666602:.16666666666666602+e*(-.0027777777777015593+e*(6613756321437934e-20+e*(-16533902205465252e-22+e*41381367970572385e-24)))}var z7=J7;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var x7=we,Ds=kt,e8=Qt,r8=Nf,t8=ya,n8=Z7,Us=Kr,i8=z7,Ws=2147483647,Bs=1048575,Gs=1048576,a8=1071644672,It=20,s8=.6931471824645996,l8=-1904654299957768e-24;function o8(e,r,t){var n,i,a,s,l,o,u,f,c,v,d;return v=e&Ws|0,d=(v>>It)-Us|0,c=0,v>a8&&(c=e+(Gs>>d+1)>>>0,d=((c&Ws)>>It)-Us|0,n=(c&~(Bs>>d))>>>0,a=Ds(0,n),c=(c&Bs|Gs)>>It-d>>>0,e<0&&(c=-c),r-=a),a=t+r,a=e8(a,0),l=a*s8,o=(t-(a-r))*n8+a*l8,f=l+o,u=o-(f-l),a=f*f,i=f-a*i8(a),s=f*i/(i-2)-(u+f*u),f=1-(s-f),e=x7(f),e=r8(e),e+=c<<It>>>0,e>>It<=0?f=t8(f,c):f=Ds(f,e),f}var f8=o8;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Ks=ne,Xs=ba,ks=Vt,u8=qt,Vs=xe,c8=ie,R0=ha,v8=Qt,js=Nf,p8=Ne,d8=le,$8=v7,m8=h7,h8=y7,_8=W7,g8=Q7,y8=f8,D0=2147483647,b8=1072693247,I8=1105199104,A8=1139802112,qs=1083179008,N8=1072693248,E8=1083231232,T8=3230714880>>>0,Qs=31,vr=1e300,pr=1e-300,O8=8008566259537294e-32,rr=[0,0],Ys=[0,0];function Ef(e,r){var t,n,i,a,s,l,o,u,f,c,v,d,h,y,T,I;if(Ks(e)||Ks(r))return NaN;if(R0(rr,r),l=rr[0],o=rr[1],o===0){if(r===0)return 1;if(r===1)return e;if(r===-1)return 1/e;if(r===.5)return Vs(e);if(r===-.5)return 1/Vs(e);if(r===2)return e*e;if(r===3)return e*e*e;if(r===4)return e*=e,e*e;if(ks(r))return h8(e,r)}if(R0(rr,e),a=rr[0],s=rr[1],s===0){if(a===0)return $8(e,r);if(e===1)return 1;if(e===-1&&Xs(r))return-1;if(ks(e))return e===p8?Ef(-0,-r):r<0?0:d8}if(e<0&&u8(r)===!1)return(e-e)/(e-e);if(i=c8(e),t=a&D0|0,n=l&D0|0,u=a>>>Qs|0,f=l>>>Qs|0,u&&Xs(r)?u=-1:u=1,n>I8){if(n>A8)return m8(e,r);if(t<b8)return f===1?u*vr*vr:u*pr*pr;if(t>N8)return f===0?u*vr*vr:u*pr*pr;h=g8(Ys,i)}else h=_8(Ys,i,t);if(c=v8(r,0),d=(r-c)*h[0]+r*h[1],v=c*h[0],y=d+v,R0(rr,y),T=js(rr[0]),I=js(rr[1]),T>=qs){if((T-qs|I)!==0||d+O8>y-v)return u*vr*vr}else if((T&D0)>=E8&&((T-T8|I)!==0||d<=y-v))return u*pr*pr;return y=y8(T,v,d),u*y}var F8=Ef;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var S8=F8,ye=S8;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var w8=2.718281828459045,$t=w8;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var L8=2220446049250313e-31,Er=L8;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function C8(e){var r,t,n;return e===0?1/0:(e<0?r=-e:r=e,r<=1?(t=709811.662581658+e*(679979.8474157227+e*(293136.7857211597+e*(74887.54032914672+e*(12555.290582413863+e*(1443.4299244417066+e*(115.24194596137347+e*(6.309239205732627+e*(.22668404630224365+e*(.004826466289237662+e*4624429436045379e-20))))))))),n=0+e*(362880+e*(1026576+e*(1172700+e*(723680+e*(269325+e*(63273+e*(9450+e*(870+e*(45+e*1)))))))))):(e=1/e,t=4624429436045379e-20+e*(.004826466289237662+e*(.22668404630224365+e*(6.309239205732627+e*(115.24194596137347+e*(1443.4299244417066+e*(12555.290582413863+e*(74887.54032914672+e*(293136.7857211597+e*(679979.8474157227+e*709811.662581658))))))))),n=1+e*(45+e*(870+e*(9450+e*(63273+e*(269325+e*(723680+e*(1172700+e*(1026576+e*(362880+e*0)))))))))),t/n)}var P8=C8;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Zs=ne,M8=or,H8=xe,R8=ie,D8=_e,U0=ye,U8=$t,W0=Er,B0=P8,G0=10.900511;function W8(e,r){var t,n,i,a,s,l,o;return Zs(e)||Zs(r)?NaN:e<0||r<0?NaN:r===1?1/e:e===1?1/r:(o=e+r,o<W0?(s=o/e,s/=r,s):o===e&&r<W0?1/r:o===r&&e<W0?1/e:(e<r&&(l=r,r=e,e=l),n=e+G0-.5,i=r+G0-.5,a=o+G0-.5,s=B0(e)*(B0(r)/B0(o)),t=e-.5-r,R8(r*t)<a*100&&e>100?s*=D8(t*M8(-r/a)):s*=U0(n/a,t),a>1e10?s*=U0(n/a*(i/a),r):s*=U0(n*i/(a*a),r),s*=H8(U8/i),s))}var B8=W8;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var G8=B8,K8=G8;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var X8=le;function k8(e){return e===0&&1/e===X8}var V8=k8;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var j8=V8,q8=j8;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Js=q8,K0=ne,Q8=Ne,cn=le;function Y8(e,r){var t,n,i,a;if(t=arguments.length,t===2)return K0(e)||K0(r)?NaN:e===cn||r===cn?cn:e===r&&e===0?Js(e)?e:r:e>r?e:r;for(n=Q8,a=0;a<t;a++){if(i=arguments[a],K0(i)||i===cn)return i;(i>n||i===n&&i===0&&Js(i))&&(n=i)}return n}var Z8=Y8;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var J8=Z8,f0=J8;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var z8=Ne;function x8(e){return e===0&&1/e===z8}var e9=x8;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r9=e9,Tf=r9;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var zs=Tf,X0=ne,vn=Ne,t9=le;function n9(e,r){var t,n,i,a;if(t=arguments.length,t===2)return X0(e)||X0(r)?NaN:e===vn||r===vn?vn:e===r&&e===0?zs(e)?e:r:e<r?e:r;for(n=t9,a=0;a<t;a++){if(i=arguments[a],X0(i)||i===vn)return i;(i<n||i===n&&i===0&&zs(i))&&(n=i)}return n}var i9=n9;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var a9=i9,Yt=a9;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var s9=17976931348623157e292,Of=s9;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var l9=2147483647,o9=l9;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var f9=1.5707963267948966,u9=f9;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var c9=3.141592653589793,Zt=c9;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function v9(e){return e===0?.0416666666666666:.0416666666666666+e*(-.001388888888887411+e*2480158728947673e-20)}var p9=v9;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function d9(e){return e===0?-27557314351390663e-23:-27557314351390663e-23+e*(2087572321298175e-24+e*-11359647557788195e-27)}var $9=d9;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var m9=p9,h9=$9;function _9(e,r){var t,n,i,a;return a=e*e,i=a*a,n=a*m9(a),n+=i*i*h9(a),t=.5*a,i=1-t,i+(1-i-t+(a*n-e*r))}var g9=_9;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var y9=g9,Ff=y9;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var xs=-.16666666666666632,b9=.00833333333332249,I9=-.0001984126982985795,A9=27557313707070068e-22,N9=-25050760253406863e-24,E9=158969099521155e-24;function T9(e,r){var t,n,i,a;return a=e*e,i=a*a,t=b9+a*(I9+a*A9)+a*i*(N9+a*E9),n=a*e,r===0?e+n*(xs+a*t):e-(a*(.5*r-n*t)-r-n*xs)}var O9=T9;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var F9=O9,Sf=F9;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var S9=dt,ji;S9===!0?ji=0:ji=1;var w9=ji;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var L9=vt,C9=pt,P9=w9,wf=new C9(1),M9=new L9(wf.buffer);function H9(e){return wf[0]=e,M9[P9]}var R9=H9;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var D9=R9,U9=D9;/**
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
*/function W9(e,r){var t,n;for(t=[],n=0;n<r;n++)t.push(e);return t}var B9=W9;/**
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
*/var G9=B9,K9=G9;/**
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
*/var X9=K9;function k9(e){return X9(0,e)}var V9=k9;/**
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
*/var j9=V9,q9=j9;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Q9=Be,pn=ya,u0=q9,Lf=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],Y9=[1.570796251296997,7549789415861596e-23,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],k0=16777216,V0=5960464477539063e-23,dn=u0(20),el=u0(20),$n=u0(20),ue=u0(20);function Cf(e,r,t,n,i,a,s,l,o){var u,f,c,v,d,h,y,T,I;for(v=a,I=n[t],T=t,d=0;T>0;d++)f=V0*I|0,ue[d]=I-k0*f|0,I=n[T-1]+f,T-=1;if(I=pn(I,i),I-=8*Q9(I*.125),y=I|0,I-=y,c=0,i>0?(d=ue[t-1]>>24-i,y+=d,ue[t-1]-=d<<24-i,c=ue[t-1]>>23-i):i===0?c=ue[t-1]>>23:I>=.5&&(c=2),c>0){for(y+=1,u=0,d=0;d<t;d++)T=ue[d],u===0?T!==0&&(u=1,ue[d]=16777216-T):ue[d]=16777215-T;if(i>0)switch(i){case 1:ue[t-1]&=8388607;break;case 2:ue[t-1]&=4194303;break}c===2&&(I=1-I,u!==0&&(I-=pn(1,i)))}if(I===0){for(T=0,d=t-1;d>=a;d--)T|=ue[d];if(T===0){for(h=1;ue[a-h]===0;h++);for(d=t+1;d<=t+h;d++){for(o[l+d]=Lf[s+d],f=0,T=0;T<=l;T++)f+=e[T]*o[l+(d-T)];n[d]=f}return t+=h,Cf(e,r,t,n,i,a,s,l,o)}}if(I===0)for(t-=1,i-=24;ue[t]===0;)t-=1,i-=24;else I=pn(I,-i),I>=k0?(f=V0*I|0,ue[t]=I-k0*f|0,t+=1,i+=24,ue[t]=f):ue[t]=I|0;for(f=pn(1,i),d=t;d>=0;d--)n[d]=f*ue[d],f*=V0;for(d=t;d>=0;d--){for(f=0,h=0;h<=v&&h<=t-d;h++)f+=Y9[h]*n[d+h];$n[t-d]=f}for(f=0,d=t;d>=0;d--)f+=$n[d];for(c===0?r[0]=f:r[0]=-f,f=$n[0]-f,d=1;d<=t;d++)f+=$n[d];return c===0?r[1]=f:r[1]=-f,y&7}function Z9(e,r,t,n){var i,a,s,l,o,u,f,c,v;for(a=4,l=n-1,s=(t-3)/24|0,s<0&&(s=0),u=t-24*(s+1),c=s-l,v=l+a,f=0;f<=v;f++)c<0?dn[f]=0:dn[f]=Lf[c],c+=1;for(f=0;f<=a;f++){for(i=0,c=0;c<=l;c++)i+=e[c]*dn[l+(f-c)];el[f]=i}return o=a,Cf(e,r,o,el,u,a,s,l,dn)}var J9=Z9;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var z9=Math.round,x9=z9;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ep=x9,Pf=ep;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var rp=Pf,rl=we,tp=.6366197723675814,np=1.5707963267341256,ip=6077100506506192e-26,ap=6077100506303966e-26,sp=20222662487959506e-37,lp=20222662487111665e-37,op=84784276603689e-45,tl=2047;function fp(e,r,t){var n,i,a,s,l,o,u;return i=rp(e*tp),s=e-i*np,l=i*ip,u=r>>20|0,t[0]=s-l,n=rl(t[0]),o=u-(n>>20&tl),o>16&&(a=s,l=i*ap,s=a-l,l=i*sp-(a-s-l),t[0]=s-l,n=rl(t[0]),o=u-(n>>20&tl),o>49&&(a=s,l=i*lp,s=a-l,l=i*op-(a-s-l),t[0]=s-l)),t[1]=s-t[0]-l,i}var up=fp;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var cp=we,vp=U9,pp=_a,dp=J9,mn=up,$p=0,mp=16777216,dr=1.5707963267341256,Ur=6077100506506192e-26,hn=2*Ur,_n=3*Ur,gn=4*Ur,hp=2147483647,_p=2146435072,gp=1048575,yp=598523,bp=1072243195,Ip=1073928572,Ap=1074752122,Np=1074977148,Ep=1075183036,Tp=1075388923,Op=1075594811,Fp=1094263291,At=[0,0,0],Nt=[0,0];function Sp(e,r){var t,n,i,a,s,l,o,u;if(i=cp(e),a=i&hp|0,a<=bp)return r[0]=e,r[1]=0,0;if(a<=Ap)return(a&gp)===yp?mn(e,a,r):a<=Ip?e>0?(u=e-dr,r[0]=u-Ur,r[1]=u-r[0]-Ur,1):(u=e+dr,r[0]=u+Ur,r[1]=u-r[0]+Ur,-1):e>0?(u=e-2*dr,r[0]=u-hn,r[1]=u-r[0]-hn,2):(u=e+2*dr,r[0]=u+hn,r[1]=u-r[0]+hn,-2);if(a<=Op)return a<=Ep?a===Np?mn(e,a,r):e>0?(u=e-3*dr,r[0]=u-_n,r[1]=u-r[0]-_n,3):(u=e+3*dr,r[0]=u+_n,r[1]=u-r[0]+_n,-3):a===Tp?mn(e,a,r):e>0?(u=e-4*dr,r[0]=u-gn,r[1]=u-r[0]-gn,4):(u=e+4*dr,r[0]=u+gn,r[1]=u-r[0]+gn,-4);if(a<Fp)return mn(e,a,r);if(a>=_p)return r[0]=NaN,r[1]=NaN,0;for(t=vp(e),n=(a>>20)-1046,u=pp(a-(n<<20|0),t),l=0;l<2;l++)At[l]=u|0,u=(u-At[l])*mp;for(At[2]=u,s=3;At[s-1]===$p;)s-=1;return o=dp(At,Nt,n,s),e<0?(r[0]=-Nt[0],r[1]=-Nt[1],-o):(r[0]=Nt[0],r[1]=Nt[1],o)}var wp=Sp;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Lp=wp,Mf=Lp;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Cp=we,nl=Ff,j0=Sf,Pp=Mf,Mp=2147483647,Hp=2146435072,Rp=1072243195,Dp=1045430272,tr=[0,0];function Up(e){var r,t;if(r=Cp(e),r&=Mp,r<=Rp)return r<Dp?e:j0(e,0);if(r>=Hp)return NaN;switch(t=Pp(e,tr),t&3){case 0:return j0(tr[0],tr[1]);case 1:return nl(tr[0],tr[1]);case 2:return-j0(tr[0],tr[1]);default:return-nl(tr[0],tr[1])}}var Wp=Up;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Bp=Wp,Hf=Bp;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Gp=2.5066282746310007,Rf=Gp;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Kp(e){return e===0?.08333333333334822:.08333333333334822+e*(.0034722222160545866+e*(-.0026813261780578124+e*(-.00022954996161337813+e*.0007873113957930937)))}var Xp=Kp;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var kp=Rf,il=ye,Vp=_e,jp=Xp,qp=143.01608;function Qp(e){var r,t,n;return r=1/e,r=1+r*jp(r),t=Vp(e),e>qp?(n=il(e,.5*e-.25),t=n*(n/t)):t=il(e,e-.5)/t,kp*t*r}var Yp=Qp;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Zp=.5772156649015329,Jp=Zp;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var zp=Jp;function xp(e,r){return r/((1+zp*e)*e)}var ed=xp;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function rd(e){var r,t,n;return e===0?1:(e<0?r=-e:r=e,r<=1?(t=1+e*(.4942148268014971+e*(.20744822764843598+e*(.04763678004571372+e*(.010421379756176158+e*(.0011913514700658638+e*(.00016011952247675185+e*0)))))),n=1+e*(.0714304917030273+e*(-.23459179571824335+e*(.035823639860549865+e*(.011813978522206043+e*(-.004456419138517973+e*(.0005396055804933034+e*-23158187332412014e-21))))))):(e=1/e,t=0+e*(.00016011952247675185+e*(.0011913514700658638+e*(.010421379756176158+e*(.04763678004571372+e*(.20744822764843598+e*(.4942148268014971+e*1)))))),n=-23158187332412014e-21+e*(.0005396055804933034+e*(-.004456419138517973+e*(.011813978522206043+e*(.035823639860549865+e*(-.23459179571824335+e*(.0714304917030273+e*1))))))),t/n)}var td=rd;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var nd=ne,id=qt,ad=Tf,al=ie,sd=Be,ld=Hf,sl=le,ll=Ne,ol=Zt,fl=Yp,ul=ed,od=td;function fd(e){var r,t,n,i;if(id(e)&&e<0||e===ll||nd(e))return NaN;if(e===0)return ad(e)?ll:sl;if(e>171.61447887182297)return sl;if(e<-170.5674972726612)return 0;if(t=al(e),t>33)return e>=0?fl(e):(n=sd(t),(n&1)===0?r=-1:r=1,i=t-n,i>.5&&(n+=1,i=t-n),i=t*ld(ol*i),r*ol/(al(i)*fl(t)));for(i=1;e>=3;)e-=1,i*=e;for(;e<0;){if(e>-1e-9)return ul(e,i);i/=e,e+=1}for(;e<2;){if(e<1e-9)return ul(e,i);i/=e,e+=1}return e===2?i:(e-=2,i*od(e))}var ud=fd;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var cd=ud,Xr=cd;const vd=[1,1,2,6,24,120,720,5040,40320,362880,3628800,39916800,479001600,6227020800,87178291200,1307674368e3,20922789888e3,355687428096e3,6402373705728e3,121645100408832e3,243290200817664e4,5109094217170944e4,11240007277776077e5,2585201673888498e7,6204484017332394e8,15511210043330986e9,40329146112660565e10,10888869450418352e12,30488834461171387e13,8841761993739702e15,26525285981219107e16,8222838654177922e18,2631308369336935e20,8683317618811886e21,29523279903960416e22,10333147966386145e24,37199332678990125e25,13763753091226346e27,5230226174666011e29,20397882081197444e30,8159152832478977e32,3345252661316381e34,140500611775288e37,6041526306337383e37,2658271574788449e39,11962222086548019e40,5502622159812089e42,25862324151116818e43,12413915592536073e45,6082818640342675e47,30414093201713376e48,15511187532873822e50,8065817517094388e52,42748832840600255e53,2308436973392414e56,12696403353658276e57,7109985878048635e59,40526919504877214e60,23505613312828785e62,13868311854568984e64,832098711274139e67,5075802138772248e68,3146997326038794e70,198260831540444e73,12688693218588417e73,8247650592082472e75,5443449390774431e77,3647111091818868e79,24800355424368305e80,1711224524281413e83,11978571669969892e84,8504785885678623e86,61234458376886085e87,44701154615126844e89,3307885441519386e92,248091408113954e95,18854947016660504e95,14518309202828587e97,11324281178206297e99,8946182130782976e101,7156945704626381e103,5797126020747368e105,4753643337012842e107,3945523969720659e109,3314240134565353e111,281710411438055e114,24227095383672734e114,2107757298379528e117,18548264225739844e118,1650795516090846e121,14857159644817615e122,1352001527678403e125,12438414054641308e126,11567725070816416e128,1087366156656743e131,1032997848823906e133,9916779348709496e134,9619275968248212e136,9426890448883248e138,9332621544394415e140,9332621544394415e142,942594775983836e145,9614466715035127e146,990290071648618e149,10299016745145628e150,1081396758240291e153,11462805637347084e154,1226520203196138e157,1324641819451829e159,14438595832024937e160,1588245541522743e163,17629525510902446e164,1974506857221074e167,22311927486598138e168,25435597334721877e170,2925093693493016e173,3393108684451898e175,3969937160808721e177,4684525849754291e179,5574585761207606e181,6689502913449127e183,8094298525273444e185,9875044200833601e187,1214630436702533e190,1506141741511141e192,1882677176888926e194,2372173242880047e196,30126600184576594e197,3856204823625804e200,4974504222477287e202,6466855489220474e204,847158069087882e207,11182486511960043e208,14872707060906857e210,19929427461615188e212,26904727073180504e214,3659042881952549e217,5012888748274992e219,6917786472619489e221,9615723196941089e223,13462012475717526e225,1898143759076171e228,2695364137888163e230,3854370717180073e232,55502938327393044e233,8047926057471992e236,11749972043909107e238,1727245890454639e241,25563239178728654e242,380892263763057e246,5713383956445855e247,862720977423324e250,13113358856834524e251,20063439050956823e253,30897696138473508e255,4789142901463394e258,7471062926282894e260,11729568794264145e262,1853271869493735e265,29467022724950384e266,47147236359920616e268,7590705053947219e271,12296942187394494e273,20044015765453026e275,3287218585534296e278,5423910666131589e280,9003691705778438e282,1503616514864999e285,25260757449731984e286,4269068009004705e289,7257415615307999e291];/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var pd=ne,dd=qt,$d=Xr,md=le,hd=vd,_d=170;function gd(e){return pd(e)?NaN:dd(e)?e<0?NaN:e<=_d?hd[e]:md:$d(e+1)}var yd=gd;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var bd=yd,Df=bd;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Id(e){var r,t,n;return e===0?1/0:(e<0?r=-e:r=e,r<=1?(t=3847467039331777e-5+e*(3685766504351951e-5+e*(1588920245372942e-5+e*(4059208354298835e-6+e*(6805476611834733e-7+e*(7823975500312005e-8+e*(6246580776401795e-9+e*(341986.3488721347+e*(12287.194511824551+e*(261.61404416416684+e*2.5066282746310007))))))))),n=0+e*(362880+e*(1026576+e*(1172700+e*(723680+e*(269325+e*(63273+e*(9450+e*(870+e*(45+e*1)))))))))):(e=1/e,t=2.5066282746310007+e*(261.61404416416684+e*(12287.194511824551+e*(341986.3488721347+e*(6246580776401795e-9+e*(7823975500312005e-8+e*(6805476611834733e-7+e*(4059208354298835e-6+e*(1588920245372942e-5+e*(3685766504351951e-5+e*3847467039331777e-5))))))))),n=1+e*(45+e*(870+e*(9450+e*(63273+e*(269325+e*(723680+e*(1172700+e*(1026576+e*(362880+e*0)))))))))),t/n)}var Ad=Id;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Nd=Ad,Ed=Nd;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Td=Ed,Od=Td;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Fd=10.900511,Jt=Fd;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var cl=Od,Sd=Xr,vl=or,pl=ie,dl=_e,$l=ye,wd=Er,Ld=$t,Cd=Jt,ml=170,Pd=4269068009004705e289;function Uf(e,r){var t,n,i;return e<wd?r>ml?(n=Uf(r,ml-r),n*=e,n*=Pd,1/n):1/(e*Sd(e+r)):(i=e+Cd-.5,e+r===e?pl(r)<10?t=dl((.5-e)*vl(r/i)):t=1:(pl(r)<10?t=dl((.5-e)*vl(r/i)):t=$l(i/(i+r),e-.5),t*=cl(e)/cl(e+r)),t*=$l(Ld/(i+r),r),t)}var Md=Uf;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Hd=ie,hl=Be,_l=Xr,gl=Df,Rd=Md,yl=170;function Dd(e,r){var t,n,i;if(e<=0||e+r<=0)return _l(e)/_l(e+r);if(n=hl(r),n===r){if(i=hl(e),i===e&&e<=yl&&e+r<=yl)return gl(i-1)/gl(n+i-1);if(Hd(r)<20){if(r===0)return 1;if(r<0){for(e-=1,t=e,r+=1;r!==0;)e-=1,t*=e,r+=1;return t}for(t=1/e,r-=1;r!==0;)e+=1,t/=e,r-=1;return t}}return Rd(e,r)}var Ud=Dd;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Wd=Ud,Bd=Wd;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Gd(e){return e===0?.3999999999940942:.3999999999940942+e*(.22222198432149784+e*.15313837699209373)}var Kd=Gd;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Xd(e){return e===0?.6666666666666735:.6666666666666735+e*(.2857142874366239+e*(.1818357216161805+e*.14798198605116586))}var kd=Xd;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var bl=we,Vd=kt,jd=ne,qd=Kr,Qd=Ne,Yd=Kd,Zd=kd,yn=.6931471803691238,bn=19082149292705877e-26,Jd=0x40000000000000,zd=.3333333333333333,Il=1048575,xd=2146435072,e$=1048576,r$=1072693248;function t$(e){var r,t,n,i,a,s,l,o,u,f,c,v;return e===0?Qd:jd(e)||e<0?NaN:(t=bl(e),a=0,t<e$&&(a-=54,e*=Jd,t=bl(e)),t>=xd?e+e:(a+=(t>>20)-qd|0,t&=Il,o=t+614244&1048576|0,e=Vd(e,t|o^r$),a+=o>>20|0,l=e-1,(Il&2+t)<3?l===0?a===0?0:a*yn+a*bn:(s=l*l*(.5-zd*l),a===0?l-s:a*yn-(s-a*bn-l)):(f=l/(2+l),v=f*f,o=t-398458|0,c=v*v,u=440401-t|0,i=c*Yd(c),n=v*Zd(c),o|=u,s=n+i,o>0?(r=.5*l*l,a===0?l-(r-f*(r+s)):a*yn-(r-(f*(r+s)+a*bn)-l)):a===0?l-f*(l-s):a*yn-(f*(l-s)-a*bn-l))))}var n$=t$;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var i$=n$,Le=i$;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var a$=we,q0=Ff,Al=Sf,s$=Mf,nr=[0,0],l$=2147483647,o$=1072243195,f$=1044381696,u$=2146435072;function c$(e){var r,t;if(r=a$(e),r&=l$,r<=o$)return r<f$?1:q0(e,0);if(r>=u$)return NaN;switch(t=s$(e,nr),t&3){case 0:return q0(nr[0],nr[1]);case 1:return-Al(nr[0],nr[1]);case 2:return-q0(nr[0],nr[1]);default:return Al(nr[0],nr[1])}}var v$=c$;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var p$=v$,d$=p$;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $$=ne,m$=Vt,Nl=d$,Q0=Hf,h$=ie,Et=ga,Tt=Zt;function _$(e){var r,t;return $$(e)?NaN:m$(e)?NaN:(t=e%2,r=h$(t),r===0||r===1?Et(0,t):r<.25?Q0(Tt*t):r<.75?(r=.5-r,Et(Nl(Tt*r),t)):r<1.25?(t=Et(1,t)-t,Q0(Tt*t)):r<1.75?(r-=1.5,-Et(Nl(Tt*r),t)):(t-=Et(2,t),Q0(Tt*t)))}var g$=_$;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var y$=g$,b$=y$;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function I$(e){return e===0?.06735230105312927:.06735230105312927+e*(.007385550860814029+e*(.0011927076318336207+e*(.00022086279071390839+e*25214456545125733e-21)))}var A$=I$;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function N$(e){return e===0?.020580808432516733:.020580808432516733+e*(.0028905138367341563+e*(.0005100697921535113+e*(.00010801156724758394+e*44864094961891516e-21)))}var E$=N$;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function T$(e){return e===0?1.3920053346762105:1.3920053346762105+e*(.7219355475671381+e*(.17193386563280308+e*(.01864591917156529+e*(.0007779424963818936+e*7326684307446256e-21))))}var O$=T$;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function F$(e){return e===0?.21498241596060885:.21498241596060885+e*(.325778796408931+e*(.14635047265246445+e*(.02664227030336386+e*(.0018402845140733772+e*3194753265841009e-20))))}var S$=F$;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function w$(e){return e===0?-.032788541075985965:-.032788541075985965+e*(.006100538702462913+e*(-.0014034646998923284+e*.00031563207090362595))}var L$=w$;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function C$(e){return e===0?.01797067508118204:.01797067508118204+e*(-.0036845201678113826+e*(.000881081882437654+e*-.00031275416837512086))}var P$=C$;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function M$(e){return e===0?-.010314224129834144:-.010314224129834144+e*(.0022596478090061247+e*(-.0005385953053567405+e*.0003355291926355191))}var H$=M$;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function R$(e){return e===0?.6328270640250934:.6328270640250934+e*(1.4549225013723477+e*(.9777175279633727+e*(.22896372806469245+e*.013381091853678766)))}var D$=R$;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function U$(e){return e===0?2.4559779371304113:2.4559779371304113+e*(2.128489763798934+e*(.7692851504566728+e*(.10422264559336913+e*.003217092422824239)))}var W$=U$;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function B$(e){return e===0?.08333333333333297:.08333333333333297+e*(-.0027777777772877554+e*(.0007936505586430196+e*(-.00059518755745034+e*(.0008363399189962821+e*-.0016309293409657527))))}var G$=B$;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var K$=ne,X$=Vt,k$=ie,qr=Le,V$=ma,j$=b$,q$=Zt,Y0=le,Q$=A$,Y$=E$,Z$=O$,J$=S$,z$=L$,x$=P$,em=H$,rm=D$,tm=W$,nm=G$,im=.07721566490153287,am=.3224670334241136,sm=1,lm=-.07721566490153287,om=.48383612272381005,fm=-.1475877229945939,um=.06462494023913339,cm=-.07721566490153287,vm=1,pm=.4189385332046727,In=1.4616321449683622,dm=4503599627370496,$m=0x400000000000000,mm=8470329472543003e-37,El=1.4616321449683622,hm=-.12148629053584961,_m=-3638676997039505e-33;function gm(e){var r,t,n,i,a,s,l,o,u,f,c,v,d;if(K$(e)||X$(e))return e;if(e===0)return Y0;if(e<0?(r=!0,e=-e):r=!1,e<mm)return-qr(e);if(r){if(e>=dm||(u=j$(e),u===0))return Y0;t=qr(q$/k$(u*e))}if(e===1||e===2)return 0;if(e<2)switch(e<=.9?(d=-qr(e),e>=In-1+.27?(c=1-e,n=0):e>=In-1-.27?(c=e-(El-1),n=1):(c=e,n=2)):(d=0,e>=In+.27?(c=2-e,n=0):e>=In-.27?(c=e-El,n=1):(c=e-1,n=2)),n){case 0:v=c*c,s=im+v*Q$(v),a=v*(am+v*Y$(v)),l=c*s+a,d+=l-.5*c;break;case 1:v=c*c,f=v*c,s=om+f*z$(f),a=fm+f*x$(f),i=um+f*em(f),l=v*s-(_m-f*(a+c*i)),d+=hm+l;break;case 2:s=c*(cm+c*rm(c)),a=vm+c*tm(c),d+=-.5*c+s/a;break}else if(e<8)switch(n=V$(e),c=e-n,l=c*(lm+c*J$(c)),o=sm+c*Z$(c),d=.5*c+l/o,v=1,n){case 7:v*=c+6;case 6:v*=c+5;case 5:v*=c+4;case 4:v*=c+3;case 3:v*=c+2,d+=qr(v)}else e<$m?(u=qr(e),v=1/e,c=v*v,f=pm+v*nm(c),d=(e-.5)*(u-1)+f):d=e*(qr(e)-1);return r&&(d=t-d),d}var ym=gm;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var bm=ym,Ia=bm;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Im=14901161193847656e-24,Am=Im;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Nm=709.782712893384,kr=Nm;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Em=_e;function Tm(e,r){var t,n,i,a;if(i=Em(-r),n=i,n!==0)for(t=n,a=1;a<e;++a)t/=a,t*=r,n+=t;return n}var Om=Tm;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Fm(e){return e===0?-.3250421072470015:-.3250421072470015+e*(-.02848174957559851+e*(-.005770270296489442+e*-23763016656650163e-21))}var Sm=Fm;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function wm(e){return e===0?.39791722395915535:.39791722395915535+e*(.0650222499887673+e*(.005081306281875766+e*(.00013249473800432164+e*-3960228278775368e-21)))}var Lm=wm;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Cm(e){return e===0?.41485611868374833:.41485611868374833+e*(-.3722078760357013+e*(.31834661990116175+e*(-.11089469428239668+e*(.035478304325618236+e*-.002166375594868791))))}var Pm=Cm;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Mm(e){return e===0?.10642088040084423:.10642088040084423+e*(.540397917702171+e*(.07182865441419627+e*(.12617121980876164+e*(.01363708391202905+e*.011984499846799107))))}var Hm=Mm;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Rm(e){return e===0?-.6938585727071818:-.6938585727071818+e*(-10.558626225323291+e*(-62.375332450326006+e*(-162.39666946257347+e*(-184.60509290671104+e*(-81.2874355063066+e*-9.814329344169145)))))}var Dm=Rm;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Um(e){return e===0?19.651271667439257:19.651271667439257+e*(137.65775414351904+e*(434.56587747522923+e*(645.3872717332679+e*(429.00814002756783+e*(108.63500554177944+e*(6.570249770319282+e*-.0604244152148581))))))}var Wm=Um;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Bm(e){return e===0?-.799283237680523:-.799283237680523+e*(-17.757954917754752+e*(-160.63638485582192+e*(-637.5664433683896+e*(-1025.0951316110772+e*-483.5191916086514))))}var Gm=Bm;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Km(e){return e===0?30.33806074348246:30.33806074348246+e*(325.7925129965739+e*(1536.729586084437+e*(3199.8582195085955+e*(2553.0504064331644+e*(474.52854120695537+e*-22.44095244658582)))))}var Xm=Km;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var km=ne,Tl=_e,Vm=Qt,jm=le,qm=Ne,Qm=Sm,Ym=Lm,Zm=Pm,Jm=Hm,zm=Dm,xm=Wm,eh=Gm,rh=Xm,An=1e-300,th=13877787807814457e-33,Ol=.8450629115104675,nh=.12837916709551256,ih=1,ah=-.0023621185607526594,sh=1,lh=-.009864944034847148,oh=1,fh=-.0098649429247001,uh=1;function ch(e){var r,t,n,i,a,s,l,o;if(km(e))return NaN;if(e===jm)return 0;if(e===qm)return 2;if(e===0)return 1;if(e<0?(r=!0,t=-e):(r=!1,t=e),t<.84375)return t<th?1-e:(n=e*e,i=nh+n*Qm(n),a=ih+n*Ym(n),s=i/a,e<.25?1-(e+e*s):(i=e*s,i+=e-.5,.5-i));if(t<1.25)return a=t-1,l=ah+a*Zm(a),o=sh+a*Jm(a),r?1+Ol+l/o:1-Ol-l/o;if(t<28){if(a=1/(t*t),t<2.857142857142857)i=lh+a*zm(a),a=oh+a*xm(a);else{if(e<-6)return 2-An;i=fh+a*eh(a),a=uh+a*rh(a)}return n=Vm(t,0),i=Tl(-(n*n)-.5625)*Tl((n-t)*(n+t)+i/a),r?2-i/t:i/t}return r?2-An:An*An}var vh=ch;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ph=vh,Wf=ph;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var dh=Wf,Fl=xe,$h=_e,mh=Zt;function hh(e,r){var t,n,i,a,s;if(a=dh(Fl(r)),a!==0&&e>1){for(n=$h(-r)/Fl(mh*r),n*=r,t=.5,n/=t,i=n,s=2;s<e;++s)n/=s-t,n*=r,i+=n;a+=i}return a}var _h=hh;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var gh=-708.3964185322641,mt=gh;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Qr=_e,Nn=ye,yh=Le,Sl=kr,wl=mt;function bh(e,r){var t,n;return n=e*yh(r),r>=1?n<Sl&&-r>wl?t=Nn(r,e)*Qr(-r):e>=1?t=Nn(r/Qr(r/e),e):t=Qr(n-r):n>wl?t=Nn(r,e)*Qr(-r):r/e<Sl?t=Nn(r/Qr(r/e),e):t=Qr(n-r),t}var Ih=bh;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Ah(e,r){var t,n;if(n=e.length,n<2||r===0)return n===0?0:e[0];for(n-=1,t=e[n]*r+e[n-1],n-=2;n>=0;)t=t*r+e[n],n-=1;return t}var Bf=Ah;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Nh=Bf;function Eh(e){var r,t,n,i;if(e.length>500)return a;if(r="return function evalpoly(x){",t=e.length,t===0)r+="return 0.0;";else if(t===1)r+="return "+e[0]+";";else{for(r+="if(x===0.0){return "+e[0]+";}",r+="return "+e[0],n=t-1,i=1;i<t;i++)r+="+x*",i<n&&(r+="("),r+=e[i];for(i=0;i<n-1;i++)r+=")";r+=";"}return r+="}",r+="//# sourceURL=evalpoly.factory.js",new Function(r)();function a(s){return Nh(e,s)}}var Th=Eh;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Oh=s0,Gf=Bf,Fh=Th;Oh(Gf,"factory",Fh);var Sh=Gf;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var wh=6.283185307179586,Lh=wh;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Ch(e){return e===0?-.3333333333333333:-.3333333333333333+e*(.08333333333333333+e*(-.014814814814814815+e*(.0011574074074074073+e*(.0003527336860670194+e*(-.0001787551440329218+e*(3919263178522438e-20+e*(-21854485106799924e-22+e*(-185406221071516e-20+e*(8296711340953087e-22+e*(-17665952736826078e-23+e*(6707853543401498e-24+e*(10261809784240309e-24+e*(-4382036018453353e-24+e*914769958223679e-24)))))))))))))}var Ph=Ch;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Mh(e){return e===0?-.001851851851851852:-.001851851851851852+e*(-.003472222222222222+e*(.0026455026455026454+e*(-.0009902263374485596+e*(.00020576131687242798+e*(-4018775720164609e-22+e*(-18098550334489977e-21+e*(764916091608111e-20+e*(-16120900894563446e-22+e*(4647127802807434e-24+e*(1378633446915721e-22+e*(-5752545603517705e-23+e*11951628599778148e-24)))))))))))}var Hh=Mh;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Rh(e){return e===0?.004133597883597883:.004133597883597883+e*(-.0026813271604938273+e*(.0007716049382716049+e*(20093878600823047e-22+e*(-.00010736653226365161+e*(52923448829120125e-21+e*(-12760635188618728e-21+e*(3423578734096138e-23+e*(13721957309062932e-22+e*(-6298992138380055e-22+e*14280614206064242e-23)))))))))}var Dh=Rh;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Uh(e){return e===0?.0006494341563786008:.0006494341563786008+e*(.00022947209362139917+e*(-.0004691894943952557+e*(.00026772063206283885+e*(-7561801671883977e-20+e*(-2396505113867297e-22+e*(11082654115347302e-21+e*(-56749528269915965e-22+e*14230900732435883e-22)))))))}var Wh=Uh;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Bh(e){return e===0?-.0008618882909167117:-.0008618882909167117+e*(.0007840392217200666+e*(-.0002990724803031902+e*(-14638452578843418e-22+e*(6641498215465122e-20+e*(-3968365047179435e-20+e*11375726970678419e-21)))))}var Gh=Bh;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Kh(e){return e===0?-.00033679855336635813:-.00033679855336635813+e*(-6972813758365858e-20+e*(.0002772753244959392+e*(-.00019932570516188847+e*(6797780477937208e-20+e*(1419062920643967e-22+e*(-13594048189768693e-21+e*(8018470256334202e-21+e*-2291481176508095e-21)))))))}var Xh=Kh;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function kh(e){return e===0?.0005313079364639922:.0005313079364639922+e*(-.0005921664373536939+e*(.0002708782096718045+e*(7902353232660328e-22+e*(-8153969367561969e-20+e*(561168275310625e-19+e*-18329116582843375e-21)))))}var Vh=kh;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function jh(e){return e===0?.00034436760689237765:.00034436760689237765+e*(5171790908260592e-20+e*(-.00033493161081142234+e*(.0002812695154763237+e*-.00010976582244684731)))}var qh=jh;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Qh(e){return e===0?-.0006526239185953094:-.0006526239185953094+e*(.0008394987206720873+e*-.000438297098541721)}var Yh=Qh;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Zh=Sh,Jh=Wf,Z0=xe,zh=_e,xh=Le,e_=Lh,r_=Ph,t_=Hh,n_=Dh,i_=Wh,a_=Gh,s_=Xh,l_=Vh,o_=qh,f_=Yh,Pe=[0,0,0,0,0,0,0,0,0,0];function u_(e,r){var t,n,i,a,s;return n=(r-e)/e,i=-xh(1+n)+n,a=e*i,s=Z0(2*i),r<e&&(s=-s),Pe[0]=r_(s),Pe[1]=t_(s),Pe[2]=n_(s),Pe[3]=i_(s),Pe[4]=a_(s),Pe[5]=s_(s),Pe[6]=l_(s),Pe[7]=o_(s),Pe[8]=f_(s),Pe[9]=-.0005967612901927463,t=Zh(Pe,1/e),t*=zh(-a)/Z0(e_*e),r<e&&(t=-t),t+=Jh(Z0(a))/2,t}var c_=u_;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var v_=eval,p_=v_;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var d_=p_;function $_(){var e;try{d_('"use strict"; (function* () {})'),e=!0}catch{e=!1}return e}var m_=$_;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var h_=m_,Kf=h_;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var En=ie,__=Er,g_=1e6;function y_(e,r){var t,n,i,a,s,l;if(l={},arguments.length>1&&(l=r),n=l.tolerance||__,a=l.maxTerms||g_,s=l.initialValue||0,t=typeof e.next=="function",t===!0){for(i of e)if(s+=i,En(n*s)>=En(i)||--a===0)break}else do i=e(),s+=i;while(En(n*s)<En(i)&&--a);return s}var b_=y_;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ll=ie,I_=Er,A_=1e6;function N_(e,r){var t,n,i,a,s;s={},arguments.length>1&&(s=r),t=s.tolerance||I_,i=s.maxTerms||A_,a=s.initialValue||0;do n=e(),a+=n;while(Ll(t*a)<Ll(n)&&--i);return a}var E_=N_;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var T_=Kf,O_=b_,F_=E_,qi;T_()?qi=O_:qi=F_;var Aa=qi;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/function S_(e,r){var t=1,n=e,i=r;return a;function a(){var s=t;return n+=1,t*=i/n,s}}var w_=S_;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var L_=Aa,C_=w_;function P_(e,r,t){var n,i;return t=t||0,i=C_(e,r),n=L_(i,{initialValue:t}),n}var M_=P_;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function H_(e){var r,t,n;return e===0?1/0:(e<0?r=-e:r=e,r<=1?(t=709811.662581658+e*(679979.8474157227+e*(293136.7857211597+e*(74887.54032914672+e*(12555.290582413863+e*(1443.4299244417066+e*(115.24194596137347+e*(6.309239205732627+e*(.22668404630224365+e*(.004826466289237662+e*4624429436045379e-20))))))))),n=0+e*(362880+e*(1026576+e*(1172700+e*(723680+e*(269325+e*(63273+e*(9450+e*(870+e*(45+e*1)))))))))):(e=1/e,t=4624429436045379e-20+e*(.004826466289237662+e*(.22668404630224365+e*(6.309239205732627+e*(115.24194596137347+e*(1443.4299244417066+e*(12555.290582413863+e*(74887.54032914672+e*(293136.7857211597+e*(679979.8474157227+e*709811.662581658))))))))),n=1+e*(45+e*(870+e*(9450+e*(63273+e*(269325+e*(723680+e*(1172700+e*(1026576+e*(362880+e*0)))))))))),t/n)}var R_=H_;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var D_=R_,U_=D_;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var W_=U_,c0=W_;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var B_=c0,G_=Ia,K_=Xr,X_=or,k_=xe,V_=ie,$r=_e,Ot=ye,J0=f0,z0=Yt,Cl=Le,Tn=kr,Ft=mt,x0=Jt,j_=$t;function q_(e,r){var t,n,i,a,s,l,o;return i=e+x0-.5,o=(r-e-x0+.5)/i,e<1?r<=Ft?$r(e*Cl(r)-r-G_(e)):Ot(r,e)*$r(-r)/K_(e):(V_(o*o*e)<=100&&e>150?(t=e*(X_(o)-o)+r*(.5-x0)/i,t=$r(t)):(a=e*Cl(r/i),s=e-r,z0(a,s)<=Ft||J0(a,s)>=Tn?(n=s/e,z0(a,s)/2>Ft&&J0(a,s)/2<Tn?(l=Ot(r/i,e/2)*$r(s/2),t=l*l):z0(a,s)/4>Ft&&J0(a,s)/4<Tn&&r>e?(l=Ot(r/i,e/4)*$r(s/4),t=l*l,t*=t):n>Ft&&n<Tn?t=Ot(r*$r(n)/i,e):t=$r(a+s)):t=Ot(r/i,e)*$r(s)),t*=k_(i/j_)/B_(e),t)}var Q_=q_;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Pl=ne,Ml=ie,Y_=o0,Z_=Le,J_=ye,z_=ma;function x_(e,r){var t;if(Pl(e)||Pl(r))return NaN;if(r===0)return 0;if(e===0)return-1;if(e<0&&r%2===0&&(e=-e),e>0){if((Ml(r*(e-1))<.5||Ml(r)<.2)&&(t=Z_(e)*r,t<.5))return Y_(t)}else if(z_(r)!==r)return NaN;return J_(e,r)-1}var eg=x_;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var rg=eg,tg=rg;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function ng(e){var r,t,n;return e===0?-.01803556856784494:(e<0?r=-e:r=e,r<=1?(t=-.01803556856784494+e*(.02512664961998968+e*(.049410315156753225+e*(.0172491608709614+e*(-.0002594535632054381+e*(-.0005410098692152044+e*(-3245886498259485e-20+e*0)))))),n=1+e*(1.962029871977952+e*(1.4801966942423133+e*(.5413914320717209+e*(.09885042511280101+e*(.008213096746488934+e*(.00022493629192211576+e*-22335276320861708e-23))))))):(e=1/e,t=0+e*(-3245886498259485e-20+e*(-.0005410098692152044+e*(-.0002594535632054381+e*(.0172491608709614+e*(.049410315156753225+e*(.02512664961998968+e*-.01803556856784494)))))),n=-22335276320861708e-23+e*(.00022493629192211576+e*(.008213096746488934+e*(.09885042511280101+e*(.5413914320717209+e*(1.4801966942423133+e*(1.962029871977952+e*1))))))),t/n)}var ig=ng;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function ag(e){var r,t,n;return e===0?.04906224540690395:(e<0?r=-e:r=e,r<=1?(t=.04906224540690395+e*(-.09691175301595212+e*(-.4149833583594954+e*(-.4065671242119384+e*(-.1584135863906922+e*(-.024014982064857155+e*-.0010034668769627955))))),n=1+e*(3.0234982984646304+e*(3.4873958536072385+e*(1.9141558827442668+e*(.5071377386143635+e*(.05770397226904519+e*.001957681026011072)))))):(e=1/e,t=-.0010034668769627955+e*(-.024014982064857155+e*(-.1584135863906922+e*(-.4065671242119384+e*(-.4149833583594954+e*(-.09691175301595212+e*.04906224540690395))))),n=.001957681026011072+e*(.05770397226904519+e*(.5071377386143635+e*(1.9141558827442668+e*(3.4873958536072385+e*(3.0234982984646304+e*1)))))),t/n)}var sg=ag;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function lg(e){var r,t,n;return e===0?-.029232972183027003:(e<0?r=-e:r=e,r<=1?(t=-.029232972183027003+e*(.14421626775719232+e*(-.14244039073863127+e*(.05428096940550536+e*(-.008505359768683364+e*(.0004311713426792973+e*0))))),n=1+e*(-1.5016935605448505+e*(.846973248876495+e*(-.22009515181499575+e*(.02558279715597587+e*(-.0010066679553914337+e*-8271935218912905e-22)))))):(e=1/e,t=0+e*(.0004311713426792973+e*(-.008505359768683364+e*(.05428096940550536+e*(-.14244039073863127+e*(.14421626775719232+e*-.029232972183027003))))),n=-8271935218912905e-22+e*(-.0010066679553914337+e*(.02558279715597587+e*(-.22009515181499575+e*(.846973248876495+e*(-1.5016935605448505+e*1)))))),t/n)}var og=lg;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var ei=Le,fg=Er,ug=ig,cg=sg,vg=og,pg=.15896368026733398,dg=.5281534194946289,$g=.45201730728149414;function mg(e,r,t){var n,i,a,s;if(e<fg)return-ei(e);if(r===0||t===0)return 0;if(i=0,e>2){if(e>=3){do e-=1,t-=1,i+=ei(e);while(e>=3);t=e-2}return a=t*(e+1),s=ug(t),i+=a*pg+a*s,i}return e<1&&(i+=-ei(e),t=r,r=e,e+=1),e<=1.5?(a=cg(r),n=r*t,i+=n*dg+n*a,i):(a=t*r,s=vg(-t),i+=a*$g+a*s,i)}var hg=mg;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Hl=Xr,Rl=o0,_g=or,gg=ne,Dl=hg;function yg(e){return gg(e)?NaN:e<0?e<-.5?Hl(1+e)-1:Rl(-_g(e)+Dl(e+2,e+1,e)):e<2?Rl(Dl(e+1,e,e-1)):Hl(1+e)-1}var bg=yg;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ig=bg,Ag=Ig;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/function Ng(e,r){var t,n,i,a;return t=-r,r=-r,n=e+1,i=1,s;function s(){return a=t/n,t*=r,i+=1,t/=i,n+=1,a}}var Eg=Ng;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Tg=tg,Og=Aa,Fg=Ag,Sg=Eg;function wg(e,r,t){var n,i,a,s,l;return i=Fg(e),a=(i+1)/e,s=Tg(r,e),i-=s,i/=e,l=Sg(e,r),s+=1,n=t?a:0,i=-s*Og(l,{initialValue:(n-i)/s}),t&&(i=-i),[i,a]}var Lg=wg;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Cg=11754943508222875e-54,Xf=Cg;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Vn=ie,ze=Xf,Pg=Er,Mg=1e6;function Hg(e,r,t){var n,i,a,s,l,o,u;if(n=typeof e.next=="function",u=n?e.next().value:e(),s=u[1],a=u[0],s===0&&(s=ze),l=s,o=0,n===!0)do u=e.next().value,u&&(o=u[1]+u[0]*o,o===0&&(o=ze),l=u[1]+u[0]/l,l===0&&(l=ze),o=1/o,i=l*o,s*=i);while(Vn(i-1)>r&&--t);else do u=e(),u&&(o=u[1]+u[0]*o,o===0&&(o=ze),l=u[1]+u[0]/l,l===0&&(l=ze),o=1/o,i=l*o,s*=i);while(u&&Vn(i-1)>r&&--t);return a/s}function Rg(e,r,t){var n,i,a,s,l,o;if(n=typeof e.next=="function",o=n?e.next().value:e(),a=o[1],a===0&&(a=ze),s=a,l=0,n===!0)do o=e.next().value,o&&(l=o[1]+o[0]*l,l===0&&(l=ze),s=o[1]+o[0]/s,s===0&&(s=ze),l=1/l,i=s*l,a*=i);while(o&&Vn(i-1)>r&&--t);else do o=e(),o&&(l=o[1]+o[0]*l,l===0&&(l=ze),s=o[1]+o[0]/s,s===0&&(s=ze),l=1/l,i=s*l,a*=i);while(o&&Vn(i-1)>r&&--t);return a}function Dg(e,r){var t,n,i;return n={},arguments.length>1&&(n=r),t=n.maxIter||Mg,i=n.tolerance||Pg,n.keep?Rg(e,i,t):Hg(e,i,t)}var Ug=Dg;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var kf=ie,Wg=Er,nt=Xf,Bg=1e6;function Gg(e,r,t){var n,i,a,s,l,o;o=e(),l=o[1],i=o[0],l===0&&(l=nt),a=l,s=0;do o=e(),o&&(s=o[1]+o[0]*s,s===0&&(s=nt),a=o[1]+o[0]/a,a===0&&(a=nt),s=1/s,n=a*s,l*=n);while(o&&kf(n-1)>r&&--t);return i/l}function Kg(e,r,t){var n,i,a,s,l;l=e(),s=l[1],s===0&&(s=nt),i=s,a=0;do l=e(),l&&(a=l[1]+l[0]*a,a===0&&(a=nt),i=l[1]+l[0]/i,i===0&&(i=nt),a=1/a,n=i*a,s*=n);while(l&&kf(n-1)>r&&--t);return s}function Xg(e,r){var t,n,i;return n={},arguments.length>1&&(n=r),i=n.tolerance||Wg,t=n.maxIter||Bg,n.keep?Kg(e,i,t):Gg(e,i,t)}var kg=Xg;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Vg=Kf,jg=Ug,qg=kg,Qi;Vg()?Qi=jg:Qi=qg;var Vf=Qi;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/function Qg(e,r){var t=r-e+1,n=e,i=0;return a;function a(){return i+=1,t+=2,[i*(n-i),t]}}var Yg=Qg;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Zg=Vf,Jg=Yg;function zg(e,r){var t=Jg(e,r);return 1/(r-e+1+Zg(t))}var xg=zg;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var ey=Ia,ry=Be,St=Xr,Ul=ie,ty=_e,Wl=ye,Me=Le,ny=Am,Bl=Of,iy=Rf,Gl=kr,ay=le,sy=Om,ly=_h,Kl=Ih,oy=c_,ri=M_,Xl=Q_,fy=Lg,kl=xg,uy=170;function jf(e,r,t,n){var i,a,s,l,o,u,f,c,v,d,h,y,T,I,M;if(e<0||r<=0)return NaN;if(a=t===void 0?!0:t,c=n,v=0,r>=uy&&!a)return c&&r*4<e?(v=r*Me(e)-e,v+=Me(kl(r,e))):!c&&r>4*e?(v=r*Me(e)-e,l=0,v+=Me(ri(r,e,l)/r)):(v=jf(r,e,!0,c),v===0?c?(v=1+1/(12*r)+1/(288*r*r),v=Me(v)-r+(r-.5)*Me(r),v+=Me(iy)):(v=r*Me(e)-e,l=0,v+=Me(ri(r,e,l)/r)):v=Me(v)+ey(r)),v>Gl?ay:ty(v);switch(f=r<30&&r<=e+1&&e<Gl,f?(I=ry(r),d=I===r,o=d?!1:Ul(I-r)===.5):d=o=!1,d&&e>.6?(c=!c,s=0):o&&e>.2?(c=!c,s=1):e<ny&&r>1?s=6:e<.5?-.4/Me(e)<r?s=2:s=3:e<1.1?e*.75<r?s=2:s=3:(u=!1,a&&r>20&&(h=Ul((e-r)/r),r>200?20/r>h*h&&(u=!0):h<.4&&(u=!0)),u?s=5:e-1/(3*e)<r?s=2:(s=4,c=!c)),s){case 0:v=sy(r,e),a===!1&&(v*=St(r));break;case 1:v=ly(r,e),a===!1&&(v*=St(r));break;case 2:v=a?Xl(r,e):Kl(r,e),v!==0&&(l=0,i=!1,c&&(l=a?1:St(r),a||v>=1||Bl*v>l?(l/=v,a||r<1||Bl/r>l?(l*=-r,i=!0):l=0):l=0)),v*=ri(r,e,l)/r,i&&(c=!1,v=-v);break;case 3:c=!c,T=fy(r,e,c),v=T[0],M=T[1],c=!1,a&&(v/=M);break;case 4:v=a?Xl(r,e):Kl(r,e),v!==0&&(v*=kl(r,e));break;case 5:v=oy(r,e),e>=r&&(c=!c);break;case 6:v=a?Wl(e,r)/St(r+1):Wl(e,r)/r,v*=1-r*e/(r+1);break}return a&&v>1&&(v=1),c&&(y=a?1:St(r),v=y-v),v}var cy=jf;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var vy=cy,py=vy;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Yr=_e,On=ye,dy=Le,Vl=kr,jl=mt;function $y(e,r){var t,n;return n=e*dy(r),r>=1?n<Vl&&-r>jl?t=On(r,e)*Yr(-r):e>=1?t=On(r/Yr(r/e),e):t=Yr(n-r):n>jl?t=On(r,e)*Yr(-r):r/e<Vl?t=On(r/Yr(r/e),e):t=Yr(n-r),t}var my=$y;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var hy=c0,_y=Ia,gy=Xr,yy=or,by=xe,Iy=ie,mr=_e,wt=ye,ti=f0,ni=Yt,ql=Le,Fn=kr,Lt=mt,ii=Jt,Ay=$t;function Ny(e,r){var t,n,i,a,s,l,o;return i=e+ii-.5,o=(r-e-ii+.5)/i,e<1?r<=Lt?mr(e*ql(r)-r-_y(e)):wt(r,e)*mr(-r)/gy(e):(Iy(o*o*e)<=100&&e>150?(t=e*(yy(o)-o)+r*(.5-ii)/i,t=mr(t)):(a=e*ql(r/i),s=e-r,ni(a,s)<=Lt||ti(a,s)>=Fn?(n=s/e,ni(a,s)/2>Lt&&ti(a,s)/2<Fn?(l=wt(r/i,e/2)*mr(s/2),t=l*l):ni(a,s)/4>Lt&&ti(a,s)/4<Fn&&r>e?(l=wt(r/i,e/4)*mr(s/4),t=l*l,t*=t):n>Lt&&n<Fn?t=wt(r*mr(n)/i,e):t=mr(a+s)):t=wt(r/i,e)*mr(s)),t*=by(i/Ay)/hy(e),t)}var Ey=Ny;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Ty=Bd,Ql=Df,Oy=py,Fy=or,Sn=ie,Yl=ye,Sy=Le,wy=jt,Zl=Er,Ly=my,Cy=Ey,hr=new Array(30);function Py(e,r,t,n,i,a,s){var l,o,u,f,c,v,d,h,y,T,I,M,N,W,U,ae,ee,P;if(v=r-1,ee=e+v/2,n<.35?T=Fy(-n):T=Sy(t),P=-ee*T,M=Cy(r,P),M<=wy)return i;for(s?(l=M/Ty(e,r),l/=Yl(ee,r)):l=Ly(r,P)/Yl(ee,r),l*=a,hr[0]=1,N=Oy(P,r,!0,!0),N/=M,f=i+l*N,u=1,d=T/2,d*=d,h=1,I=4*ee*ee,c=r,U=1;U<hr.length;++U){for(u+=2,hr[U]=0,y=r-U,o=3,W=1;W<U;++W)y=W*r-U,hr[U]+=y*hr[U-W]/Ql(o),o+=2;if(hr[U]/=U,hr[U]+=v/Ql(u),N=(c*(c+1)*N+(P+c+1)*h)/I,h*=d,c+=2,ae=l*hr[U]*N,f+=ae,ae>1){if(Sn(ae)<Sn(Zl*f))break}else if(Sn(ae/Zl)<Sn(f))break}return f}var My=Py;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/function Hy(e,r,t){var n,i;if(t===0)return 1;for(n=1,i=0;i<t;i++)n*=(e+i)/(r+i);return n}var Ry=Hy;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ai=ie,Jl=f0,Dy=le;function Uy(e,r){var t,n,i;if(t=arguments.length,t===0)return Dy;if(t===2)return Jl(ai(e),ai(r));for(n=[],i=0;i<t;i++)n.push(ai(arguments[i]));return Jl.apply(null,n)}var Wy=Uy;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var By=Wy,Gy=By;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var si=ie,zl=Yt,Ky=le;function Xy(e,r){var t,n,i;if(t=arguments.length,t===0)return Ky;if(t===2)return zl(si(e),si(r));for(n=[],i=0;i<t;i++)n.push(si(arguments[i]));return zl.apply(null,n)}var ky=Xy;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Vy=ky,jy=Vy;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var li=c0,qy=Gy,Qy=jy,xl=o0,_r=or,eo=xe,wn=ie,ke=_e,Ve=ye,Yy=Yt,Te=Le,je=kr,Zr=mt,oi=Jt,Zy=$t;function Jy(e,r,t,n,i){var a,s,l,o,u,f,c,v,d,h,y,T,I,M;if(!i)return Ve(t,e)*Ve(n,r);if(I=e+r,o=e+oi-.5,u=r+oi-.5,f=I+oi-.5,a=li(I),a/=li(e)*li(r),a*=eo(u/Zy),a*=eo(o/f),c=(t*r-n*o)/o,v=(n*e-t*u)/u,Qy(c,v)<.2)if(c*v>0||Yy(e,r)<1)wn(c)<.1?a*=ke(e*_r(c)):a*=Ve(t*f/o,e),wn(v)<.1?a*=ke(r*_r(v)):a*=Ve(n*f/u,r);else if(qy(c,v)<.5)s=e<r,l=r/e,s&&l*v<.1||!s&&c/l>.1?(d=xl(l*_r(v)),d=c+d+d*c,d=e*_r(d),a*=ke(d)):(d=xl(_r(c)/l),d=v+d+d*v,d=r*_r(d),a*=ke(d));else if(wn(c)<wn(v))if(M=e*_r(c)+r*Te(n*f/u),M<=Zr||M>=je){if(M+=Te(a),M>=je)return NaN;a=ke(M)}else a*=ke(M);else if(M=r*_r(v)+e*Te(t*f/o),M<=Zr||M>=je){if(M+=Te(a),M>=je)return NaN;a=ke(M)}else a*=ke(M);else if(y=t*f/o,T=n*f/u,c=e*Te(y),v=r*Te(T),c>=je||c<=Zr||v>=je||v<=Zr)if(e<r)if(h=Ve(T,r/e),d=e*(Te(y)+Te(h)),d<je&&d>Zr)a*=Ve(h*y,e);else{if(v+=c+Te(a),v>=je)return NaN;a=ke(v)}else if(h=Ve(y,e/r),d=(Te(h)+Te(T))*r,d<je&&d>Zr)a*=Ve(h*T,r);else{if(v+=c+Te(a),v>=je)return NaN;a=ke(v)}else a*=Ve(y,e)*Ve(T,r);return a}var Na=Jy;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var zy=Vf,xy=Na,eb={keep:!0,maxIter:1e3};function rb(e,r,t,n){var i=0;return a;function a(){var s,l,o;return l=(e+i-1)*(e+r+i-1)*i*(r-i)*t*t,s=e+2*i-1,l/=s*s,o=i,o+=i*(r-i)*t/(e+2*i-1),o+=(e+i)*(e*n-r*t+1+i*(2-t))/(e+2*i+1),i+=1,[l,o]}}function tb(e,r,t,n,i,a){var s,l,o;return s=xy(e,r,t,n,i),a&&(a[1]=s),s===0?s:(o=rb(e,r,t,n),l=zy(o,eb),s/l)}var nb=tb;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var fi=qt,ro=ne,ib=ba,ab=Pf;function qf(e,r){var t,n;if(ro(e)||ro(r))return NaN;if(!fi(e)||!fi(r))return NaN;if(r<0)return 0;if(e<0)return t=qf(-e+r-1,r),ib(r)&&(t=-t),t;if(r>e)return 0;if(r===0||r===e)return 1;if(r===1||r===e-1)return e;for(e-r<r&&(r=e-r),t=e,n=2;n<=r;n++)t*=(e-n+1)/n;return fi(t)?t:ab(t)}var sb=qf;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var lb=sb,ob=lb;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var to=ob,Cr=Be,Ct=ye,fb=jt;function ub(e,r,t,n){var i,a,s,l,o;if(a=Ct(t,e),a>fb)for(l=a,o=Cr(e-1);o>r;o--)l*=(o+1)*n/((e-o)*t),a+=l;else if(s=Cr(e*t),s<=r+1&&(s=Cr(r+2)),a=Ct(t,s)*Ct(n,e-s),a*=to(Cr(e),Cr(s)),a===0)for(o=s-1;o>r;o--)a+=Ct(t,o)*Ct(n,e-o),a*=to(Cr(e),Cr(o));else{for(l=a,i=a,o=s-1;o>r;o--)l*=(o+1)*n/((e-o)*t),a+=l;for(l=i,o=s+1;o<=e;o++)l*=(e-o+1)*t/(o*n),a+=l}return a}var cb=ub;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var vb=Na;function pb(e,r,t,n,i,a,s){var l,o,u,f;if(l=vb(e,r,t,n,a),s&&(s[1]=l),l/=e,l===0)return l;for(u=1,o=1,f=0;f<i-1;++f)o*=(e+r+f)*t/(e+f+1),u+=o;return l*=u,l}var db=pb;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var ui=c0,$b=Aa,mb=or,hb=xe,ci=_e,Ln=ye,Pt=Le,_b=jt,no=kr,io=mt,vi=Jt,gb=$t,ao={maxTerms:100};function yb(e,r,t,n){var i=1-r,a=1;return s;function s(){var l=n/e;return e+=1,n*=i*t/a,a+=1,i+=1,l}}function bb(e,r,t,n,i,a,s){var l,o,u,f,c,v,d,h;return i?(d=e+r,o=e+vi-.5,u=r+vi-.5,f=d+vi-.5,l=ui(d)/(ui(e)*ui(r)),c=Pt(f/u)*(r-.5),v=Pt(t*f/o)*e,c>io&&c<no&&v>io&&v<no?(e*r<u*10?l*=ci((r-.5)*mb(e/u)):l*=Ln(f/u,r-.5),l*=Ln(t*f/o,e),l*=hb(o/gb),a&&(a[1]=l*Ln(s,r))):(l=Pt(l)+c+v+(Pt(o)-1)/2,a&&(a[1]=ci(l+r*Pt(s))),l=ci(l))):l=Ln(t,e),l<_b?n:(h=yb(e,r,t,l),ao.initialValue=n,$b(h,ao))}var Ib=bb,Ab=ne,Nb=o0,Cn=Be,so=or,lo=U6,Oe=K8,pi=xe,Eb=_e,Mt=ye,Tb=f0,oo=Yt,Pn=Of,fo=jt,Ob=o9,Fb=u9,Qf=Zt,gr=My,di=Ry,Sb=Na,uo=nb,wb=cb,Ht=db,qe=Ib,Lb=1/Qf;function Cb(e,r,t,n,i,a,s,l){var o,u,f,c,v,d,h,y,T,I,M,N;if(N=1-e,h=l,y=l+s,a[y]=-1,Ab(e)||e<0||e>1)return a[h]=NaN,a[y]=NaN,a;if(n){if(r<0||t<0)return a[h]=NaN,a[y]=NaN,a;if(r===0){if(t===0)return a[h]=NaN,a[y]=NaN,a;if(t>0)return a[h]=i?0:1,a}else if(t===0&&r>0)return a[h]=i?1:0,a}else if(r<=0||t<=0)return a[h]=NaN,a[y]=NaN,a;return e===0?(r===1?a[y]=1:a[y]=r<1?Pn/2:fo*2,i?(a[h]=n?1:Oe(r,t),a):(a[h]=0,a)):e===1?(t===1?a[y]=1:a[y]=t<1?Pn/2:fo*2,i?a[h]=0:a[h]=n?1:Oe(r,t),a):r===.5&&t===.5?(a[y]=Lb*pi(N*e),M=lo(pi(i?N:e)),M/=Fb,n||(M*=Qf),a[h]=M,a):(r===1&&(d=t,t=r,r=d,d=N,N=e,e=d,i=!i),t===1?r===1?(a[h]=i?N:e,a[y]=1,a):(a[y]=r*Mt(e,r-1),N<.5?M=i?-Nb(r*so(-N)):Eb(r*so(-N)):M=i?-(Mt(e,r)-1):Mt(e,r),n||(M/=r),a[h]=M,a):(oo(r,t)<=1?(e>.5&&(d=t,t=r,r=d,d=N,N=e,e=d,i=!i),Tb(r,t)<=1?r>=oo(.2,t)||Mt(e,r)<=.9?i?(f=-(n?1:Oe(r,t)),i=!1,f=-qe(r,t,e,f,n,a,N)):f=qe(r,t,e,0,n,a,N):(d=t,t=r,r=d,d=N,N=e,e=d,i=!i,N>=.3?i?(f=-(n?1:Oe(r,t)),i=!1,f=-qe(r,t,e,f,n,a,N)):f=qe(r,t,e,0,n,a,N):(n?u=1:u=di(r+t,r,20),f=Ht(r,t,e,N,20,n,a),i?(f-=n?1:Oe(r,t),i=!1,f=-gr(r+20,t,e,N,f,u,n)):f=gr(r+20,t,e,N,f,u,n))):t<=1||e<.1&&Mt(t*e,r)<=.7?i?(f=-(n?1:Oe(r,t)),i=!1,f=-qe(r,t,e,f,n,a,N)):f=qe(r,t,e,0,n,a,N):(d=t,t=r,r=d,d=N,N=e,e=d,i=!i,N>=.3?i?(f=-(n?1:Oe(r,t)),i=!1,f=-qe(r,t,e,f,n,a,N)):f=qe(r,t,e,0,n,a,N):r>=15?i?(f=-(n?1:Oe(r,t)),i=!1,f=-gr(r,t,e,N,f,1,n)):f=gr(r,t,e,N,0,1,n):(n?u=1:u=di(r+t,r,20),f=Ht(r,t,e,N,20,n,a),i?(f-=n?1:Oe(r,t),i=!1,f=-gr(r+20,t,e,N,f,u,n)):f=gr(r+20,t,e,N,f,u,n)))):(r<t?o=r-(r+t)*e:o=(r+t)*N-t,o<0&&(d=t,t=r,r=d,d=N,N=e,e=d,i=!i),t<40?Cn(r)===r&&Cn(t)===t&&r<Ob-100?(T=r-1,I=t+T,f=wb(I,T,e,N),n||(f*=Oe(r,t))):t*e<=.7?i?(f=-(n?1:Oe(r,t)),i=!1,f=-qe(r,t,e,f,n,a,N)):f=qe(r,t,e,0,n,a,N):r>15?(I=Cn(t),I===t&&(I-=1),c=t-I,n?u=1:u=di(r+c,c,I),f=Ht(c,r,N,e,I,n),f=gr(r,c,e,N,f,1,n),f/=u):n?(I=Cn(t),c=t-I,c<=0&&(I-=1,c+=1),f=Ht(c,r,N,e,I,n),f+=Ht(r,c,e,N,20,n),i&&(f-=1),f=gr(r+20,c,e,N,f,1,n),i&&(f=-f,i=!1)):f=uo(r,t,e,N,n,a):f=uo(r,t,e,N,n,a)),a[y]<0&&(a[y]=Sb(r,t,e,N,!0)),v=N*e,a[y]!==0&&(Pn*v<a[y]?a[y]=Pn/2:a[y]/=v),a[h]=i?(n?1:Oe(r,t))-f:f,a))}var Yf=Cb;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Pb=Yf;function Mb(e,r,t,n,i){return Pb(e,r,t,n,i,[0,0],1,0)}var Hb=Mb;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Rb=s0,Zf=Hb,Db=Yf;Rb(Zf,"assign",Db);var Ub=Zf;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Wb=Ub.assign;function Bb(e,r,t,n,i){var a=[0,0];return n=n!==!1,i=i===!0,Wb(e,r,t,n,i,a,1,0),a[0]}var Gb=Bb;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Kb=Gb,Jf=Kb;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Xb=cf,kb=Jf,$i=ne,Vb=Be,jb=le;function qb(e,r,t){return $i(e)||$i(r)||$i(t)||t<0||t>1||!Xb(r)||r===jb?NaN:e<0?0:e>=r?1:(e=Vb(e+1e-7),kb(t,e+1,r-e,!0,!0))}var Qb=qb;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Yb(e){return r;function r(){return e}}var Zb=Yb;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Jb=Zb,zb=Jb;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var xb=cf,eI=zb,rI=Jf,mi=ne,tI=Be,nI=le;function iI(e,r){if(mi(e)||mi(r)||r<0||r>1||!xb(e)||e===nI)return eI(NaN);return t;function t(n){return mi(n)?NaN:n<0?0:n>=e?1:(n=tI(n+1e-7),rI(r,n+1,e-n,!0,!0))}}var aI=iI;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var sI=s0,zf=Qb,lI=aI;sI(zf,"factory",lI);var oI=zf;const fI=[8.1238,1.4893,2.7114,4.3192,12.0195,2.3039,2.0257,5.9215,7.3054,.1031,.6895,3.9785,2.6116,6.9478,7.6812,1.8189,.1125,6.0213,6.2808,9.0986,2.8776,1.1075,2.0949,.1728,2.1135,.0702].map(e=>e/100);function uI(e,r){const t={};for(let n=0;n<26;++n){const i=oI(e,r,fI[n]);t[String.fromCharCode(n+65)]=i>.5?1-i:i}return t}function cI(e){let r=0;for(let t=0;t<e.length;++t)/[a-z]/i.test(e[t])&&++r;return r}function vI(e,r){let t=0;for(let n=0;n<e.length;++n)r===e[n]&&++t;return t}function pI(...e){return e.length?(e.sort((t,n)=>n-t),e.slice(1).map((t,n)=>e[n]-t).slice(0,3)):[]}function dI(e){const r={},t=cI(e);for(let n=0;n<26;++n){const i=String.fromCharCode(n+65),a=vI(e,i);if(a){const s=uI(a,t);r[i]={count:a,pValues:s,topPDifs:pI(...Object.values(s))}}}return{totalLetters:t,letterDetails:r}}function $I(...e){const r=Math.min(...e),t=Math.max(...e)-r;return e.map(n=>(n-r)/t)}function mI(e,r,t){const n=(l,o)=>Math.round(l+(o-l)*t),i=n(e.r,r.r),a=n(e.g,r.g),s=n(e.b,r.b);return{r:i,g:a,b:s}}const hI={id:"keyboard"},_I={class:"row"},gI=["onClick","title"],yI=r0({__name:"Keyboard",props:{decryptionKeys:null,pValues:null},setup(e){const r=e;let t=zr(!1);const n=["QWERTYUIOP".split(""),"ASDFGHJKL".split(""),[..."ZXCVBNM".split(""),"Normalise"]],i=lt(()=>{const a=new Set(Object.values(r.decryptionKeys)),s={r:0,g:255,b:0},l={r:255,g:0,b:0};let o=r.pValues;if(t.value){const u=$I(...Object.values(o));o=Object.fromEntries(Object.keys(o).map((f,c)=>[f,u[c]]))}else{const u=Object.entries(o);u.forEach(f=>f[1]=f[1]*2),o=Object.fromEntries(u)}return n.map(u=>u.map(f=>{var c;return f.length===1?{value:f,colour:mI(l,s,o[f]||0),p:`p-value=${((c=r.pValues[f])==null?void 0:c.toFixed(3))||"N/A"}`,isInUse:a.has(f)}:{value:f}}))});return(a,s)=>(K(),k("div",hI,[(K(!0),k(x,null,Ye(Br(i),(l,o)=>(K(),k("div",_I,[X("div",{class:ar(`spacer${o}`)},null,2),(K(!0),k(x,null,Ye(l,u=>(K(),k(x,null,[u.colour?(K(),k("button",{key:0,class:ar(u.isInUse?"used-key":""),style:jn({borderColor:`rgb(${u.colour.r},${u.colour.g},${u.colour.b})`}),onClick:f=>a.$emit("key",u.value),title:u.p},[X("span",null,Fe(u.value),1)],14,gI)):(K(),k("button",{key:1,class:ar(["normalise",t.value?"depressed":""]),onClick:s[0]||(s[0]=f=>t.value=!t.value),title:"spread narrow range of colours (representing small differences in letter probabilities) wider"},[X("span",null,Fe(u.value),1)],2))],64))),256)),X("div",{class:ar(`spacer${o}`)},null,2)]))),256))]))}});const v0=(e,r)=>{const t=e.__vccOpts||e;for(const[n,i]of r)t[n]=i;return t},bI=v0(yI,[["__scopeId","data-v-6fbc84a1"]]),II={id:"coded-text"},AI={key:0,class:"non-alpha"},NI=["title","onClick"],EI=r0({__name:"EncodedText",props:{modelValue:null,activeLetter:null,decryptionKeys:null},emits:["update:active-letter"],setup(e,{emit:r}){const t=e;zr(-1);const n=lt(()=>t.modelValue.split(`
`).map(a=>a.split("").map(s=>{if(!/[a-z]/i.test(s))return{display:s,isNonAlpha:!0};const l=s.toUpperCase();if(t.decryptionKeys[s]){let o=t.decryptionKeys[s];return s!==l&&(o=o.toLowerCase()),{display:o,original:s,uc:l}}return{display:s,uc:l}})));function i(a){r("update:active-letter",a)}return(a,s)=>(K(),k("div",II,[(K(!0),k(x,null,Ye(Br(n),l=>(K(),k("div",null,[(K(!0),k(x,null,Ye(l,o=>(K(),k(x,null,[o.isNonAlpha?(K(),k("span",AI,Fe(o.display),1)):(K(),k("span",{key:1,class:ar(["alpha",{current:o.uc===e.activeLetter,decrypted:o.original}]),title:o.original?`decoded from ${o.original}`:"",onClick:u=>i(o.uc)},Fe(o.display),11,NI))],64))),256))]))),256))]))}});const TI=v0(EI,[["__scopeId","data-v-7d392282"]]),ht=e=>(Go("data-v-d910994c"),e=e(),Ko(),e),OI={id:"letter-details"},FI=ht(()=>X("th",null,"encoded",-1)),SI=["onClick"],wI=ht(()=>X("th",null," count ",-1)),LI=ht(()=>X("th",null," decoded ",-1)),CI=ht(()=>X("th",null," p dif 1 ",-1)),PI=ht(()=>X("th",null," p dif 2 ",-1)),MI=ht(()=>X("th",null," p dif 3 ",-1)),HI=r0({__name:"LetterDetails",props:{decryptionKeys:null,stats:null,activeLetter:null},setup(e){const r=e,t=lt(()=>Object.keys(r.stats).map(n=>r.decryptionKeys[n]||""));return(n,i)=>(K(),k("div",OI,[X("table",null,[X("tbody",null,[X("tr",null,[FI,(K(!0),k(x,null,Ye(Object.keys(e.stats),a=>(K(),k("th",null,[X("a",{href:"#",class:ar(e.activeLetter===a?"active":""),onClick:Tc(s=>n.$emit("update:active-letter",a),["prevent"])},Fe(a),11,SI)]))),256))]),X("tr",null,[wI,(K(!0),k(x,null,Ye(e.stats,a=>(K(),k("td",null,Fe(a.count),1))),256))]),X("tr",null,[LI,(K(!0),k(x,null,Ye(Br(t),a=>(K(),k("td",null,Fe(a),1))),256))]),X("tr",null,[CI,(K(!0),k(x,null,Ye(e.stats,a=>(K(),k("td",null,Fe((a.topPDifs[0]*100).toFixed(1))+"% ",1))),256))]),X("tr",null,[PI,(K(!0),k(x,null,Ye(e.stats,a=>(K(),k("td",null,Fe((a.topPDifs[1]*100).toFixed(1))+"% ",1))),256))]),X("tr",null,[MI,(K(!0),k(x,null,Ye(e.stats,a=>(K(),k("td",null,Fe((a.topPDifs[2]*100).toFixed(1))+"% ",1))),256))])])])]))}});const RI=v0(HI,[["__scopeId","data-v-d910994c"]]),Ea=e=>(Go("data-v-1571e319"),e=e(),Ko(),e),DI={key:0,class:"message"},UI=Ea(()=>X("header",null,[X("h1",null,"Decryptor")],-1)),WI={key:0},BI={key:1},GI=["disabled"],KI=Ea(()=>X("hr",null,null,-1)),XI=Ea(()=>X("footer",null,[X("small",null,[kn(" This project is under an MIT licence and is hosted at "),X("a",{href:"https://github.com/mcshaz/letter-swap-decoder"}," github.com/mcshaz/letter-swap-decoder "),kn(". It borrows heavily from Evan You's Vue version of Wordle on StackBlitz "),X("a",{href:"https://stackblitz.com/edit/vitejs-vite-jjggsx"}," stackblitz.com/edit/vitejs-vite-jjggsx ")])],-1)),kI=r0({__name:"Game",setup(e){let r=zr(""),t=zr(""),n=zr(""),i=zr(!1);const a=Jn({}),s=lt(()=>dI(t.value)),l=lt(()=>n.value?s.value.letterDetails[n.value]:{pValues:{}});fa(()=>{window.addEventListener("keyup",o),c("Paste the encoded text, then click the go button to begin")}),ua(()=>{window.removeEventListener("keyup",o)});function o(v){f(v.key)}async function u(){c("click on letter within the message to select the encoded letter, then use the keyboard to determine what the real letter is"),i.value=!0}function f(v){if(v.length!==1||!/[a-z]/i.test(v)||!n.value)return;v=v.toUpperCase();const d=Object.keys(a).find(h=>a[h]===v);d&&delete a[d],a[n.value]=v}function c(v,d=1e3){r.value=v,d>0&&setTimeout(()=>{r.value=""},d)}return(v,d)=>(K(),k(x,null,[ve($a,null,{default:Xo(()=>[r.value?(K(),k("div",DI,Fe(r.value),1)):Ku("",!0)]),_:1}),UI,i.value?(K(),k("div",WI,[ve(TI,{modelValue:t.value,"onUpdate:modelValue":d[0]||(d[0]=h=>t.value=h),"active-letter":n.value,"onUpdate:active-letter":d[1]||(d[1]=h=>n.value=h),"decryption-keys":a},null,8,["modelValue","active-letter","decryption-keys"]),kn(" Total letters: "),X("output",null,Fe(Br(s).totalLetters),1),ve(bI,{onKey:f,"decryption-keys":a,"p-values":Br(l).pValues},null,8,["decryption-keys","p-values"]),ve(RI,{"decryption-keys":a,stats:Br(s).letterDetails,"active-letter":n.value,"onUpdate:active-letter":d[2]||(d[2]=h=>n.value=h)},null,8,["decryption-keys","stats","active-letter"])])):(K(),k("div",BI,[X("div",null,[gu(X("textarea",{id:"encoded-text","onUpdate:modelValue":d[3]||(d[3]=h=>t.value=h)},null,512),[[Ac,t.value]])]),X("button",{id:"activate-button",onClick:u,disabled:!t.value},"Go",8,GI)])),KI,XI],64))}});const VI=v0(kI,[["__scopeId","data-v-1571e319"]]);Sc(VI).mount("#app");
