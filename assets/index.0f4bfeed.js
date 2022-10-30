(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=r(i);fetch(i.href,o)}})();function bi(e,t){const r=Object.create(null),n=e.split(",");for(let i=0;i<n.length;i++)r[n[i]]=!0;return t?i=>!!r[i.toLowerCase()]:i=>!!r[i]}const wl="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Cl=bi(wl);function Js(e){return!!e||e===""}function jr(e){if(L(e)){const t={};for(let r=0;r<e.length;r++){const n=e[r],i=le(n)?Pl(n):jr(n);if(i)for(const o in i)t[o]=i[o]}return t}else{if(le(e))return e;if(x(e))return e}}const Fl=/;(?![^(]*\))/g,Sl=/:(.+)/;function Pl(e){const t={};return e.split(Fl).forEach(r=>{if(r){const n=r.split(Sl);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}function je(e){let t="";if(le(e))t=e;else if(L(e))for(let r=0;r<e.length;r++){const n=je(e[r]);n&&(t+=n+" ")}else if(x(e))for(const r in e)e[r]&&(t+=r+" ");return t.trim()}const se=e=>le(e)?e:e==null?"":L(e)||x(e)&&(e.toString===ra||!D(e.toString))?JSON.stringify(e,qs,2):String(e),qs=(e,t)=>t&&t.__v_isRef?qs(e,t.value):Tt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((r,[n,i])=>(r[`${n} =>`]=i,r),{})}:ea(t)?{[`Set(${t.size})`]:[...t.values()]}:x(t)&&!L(t)&&!na(t)?String(t):t,j={},Et=[],Fe=()=>{},Hl=()=>!1,Ll=/^on[^a-z]/,Xr=e=>Ll.test(e),yi=e=>e.startsWith("onUpdate:"),ce=Object.assign,Ii=(e,t)=>{const r=e.indexOf(t);r>-1&&e.splice(r,1)},Ml=Object.prototype.hasOwnProperty,U=(e,t)=>Ml.call(e,t),L=Array.isArray,Tt=e=>zr(e)==="[object Map]",ea=e=>zr(e)==="[object Set]",D=e=>typeof e=="function",le=e=>typeof e=="string",Ai=e=>typeof e=="symbol",x=e=>e!==null&&typeof e=="object",ta=e=>x(e)&&D(e.then)&&D(e.catch),ra=Object.prototype.toString,zr=e=>ra.call(e),Dl=e=>zr(e).slice(8,-1),na=e=>zr(e)==="[object Object]",Ni=e=>le(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Lr=bi(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Yr=e=>{const t=Object.create(null);return r=>t[r]||(t[r]=e(r))},Rl=/-(\w)/g,Ct=Yr(e=>e.replace(Rl,(t,r)=>r?r.toUpperCase():"")),Ul=/\B([A-Z])/g,Pt=Yr(e=>e.replace(Ul,"-$1").toLowerCase()),ia=Yr(e=>e.charAt(0).toUpperCase()+e.slice(1)),vn=Yr(e=>e?`on${ia(e)}`:""),qt=(e,t)=>!Object.is(e,t),Mr=(e,t)=>{for(let r=0;r<e.length;r++)e[r](t)},Ur=(e,t,r)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:r})},Wr=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let io;const Wl=()=>io||(io=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let De;class Bl{constructor(t=!1){this.detached=t,this.active=!0,this.effects=[],this.cleanups=[],this.parent=De,!t&&De&&(this.index=(De.scopes||(De.scopes=[])).push(this)-1)}run(t){if(this.active){const r=De;try{return De=this,t()}finally{De=r}}}on(){De=this}off(){De=this.parent}stop(t){if(this.active){let r,n;for(r=0,n=this.effects.length;r<n;r++)this.effects[r].stop();for(r=0,n=this.cleanups.length;r<n;r++)this.cleanups[r]();if(this.scopes)for(r=0,n=this.scopes.length;r<n;r++)this.scopes[r].stop(!0);if(!this.detached&&this.parent&&!t){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this.active=!1}}}function Kl(e,t=De){t&&t.active&&t.effects.push(e)}const Ei=e=>{const t=new Set(e);return t.w=0,t.n=0,t},oa=e=>(e.w&it)>0,sa=e=>(e.n&it)>0,Gl=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=it},kl=e=>{const{deps:t}=e;if(t.length){let r=0;for(let n=0;n<t.length;n++){const i=t[n];oa(i)&&!sa(i)?i.delete(e):t[r++]=i,i.w&=~it,i.n&=~it}t.length=r}},kn=new WeakMap;let Zt=0,it=1;const Vn=30;let Oe;const $t=Symbol(""),jn=Symbol("");class Ti{constructor(t,r=null,n){this.fn=t,this.scheduler=r,this.active=!0,this.deps=[],this.parent=void 0,Kl(this,n)}run(){if(!this.active)return this.fn();let t=Oe,r=rt;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Oe,Oe=this,rt=!0,it=1<<++Zt,Zt<=Vn?Gl(this):oo(this),this.fn()}finally{Zt<=Vn&&kl(this),it=1<<--Zt,Oe=this.parent,rt=r,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Oe===this?this.deferStop=!0:this.active&&(oo(this),this.onStop&&this.onStop(),this.active=!1)}}function oo(e){const{deps:t}=e;if(t.length){for(let r=0;r<t.length;r++)t[r].delete(e);t.length=0}}let rt=!0;const aa=[];function Ht(){aa.push(rt),rt=!1}function Lt(){const e=aa.pop();rt=e===void 0?!0:e}function Ie(e,t,r){if(rt&&Oe){let n=kn.get(e);n||kn.set(e,n=new Map);let i=n.get(r);i||n.set(r,i=Ei()),la(i)}}function la(e,t){let r=!1;Zt<=Vn?sa(e)||(e.n|=it,r=!oa(e)):r=!e.has(Oe),r&&(e.add(Oe),Oe.deps.push(e))}function Xe(e,t,r,n,i,o){const s=kn.get(e);if(!s)return;let a=[];if(t==="clear")a=[...s.values()];else if(r==="length"&&L(e))s.forEach((l,f)=>{(f==="length"||f>=n)&&a.push(l)});else switch(r!==void 0&&a.push(s.get(r)),t){case"add":L(e)?Ni(r)&&a.push(s.get("length")):(a.push(s.get($t)),Tt(e)&&a.push(s.get(jn)));break;case"delete":L(e)||(a.push(s.get($t)),Tt(e)&&a.push(s.get(jn)));break;case"set":Tt(e)&&a.push(s.get($t));break}if(a.length===1)a[0]&&Xn(a[0]);else{const l=[];for(const f of a)f&&l.push(...f);Xn(Ei(l))}}function Xn(e,t){const r=L(e)?e:[...e];for(const n of r)n.computed&&so(n);for(const n of r)n.computed||so(n)}function so(e,t){(e!==Oe||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const Vl=bi("__proto__,__v_isRef,__isVue"),fa=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Ai)),jl=Oi(),Xl=Oi(!1,!0),zl=Oi(!0),ao=Yl();function Yl(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...r){const n=K(this);for(let o=0,s=this.length;o<s;o++)Ie(n,"get",o+"");const i=n[t](...r);return i===-1||i===!1?n[t](...r.map(K)):i}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...r){Ht();const n=K(this)[t].apply(this,r);return Lt(),n}}),e}function Oi(e=!1,t=!1){return function(n,i,o){if(i==="__v_isReactive")return!e;if(i==="__v_isReadonly")return e;if(i==="__v_isShallow")return t;if(i==="__v_raw"&&o===(e?t?cf:pa:t?da:va).get(n))return n;const s=L(n);if(!e&&s&&U(ao,i))return Reflect.get(ao,i,o);const a=Reflect.get(n,i,o);return(Ai(i)?fa.has(i):Vl(i))||(e||Ie(n,"get",i),t)?a:re(a)?s&&Ni(i)?a:a.value:x(a)?e?ha(a):Zr(a):a}}const xl=ua(),Zl=ua(!0);function ua(e=!1){return function(r,n,i,o){let s=r[n];if(Ft(s)&&re(s)&&!re(i))return!1;if(!e&&(!Br(i)&&!Ft(i)&&(s=K(s),i=K(i)),!L(r)&&re(s)&&!re(i)))return s.value=i,!0;const a=L(r)&&Ni(n)?Number(n)<r.length:U(r,n),l=Reflect.set(r,n,i,o);return r===K(o)&&(a?qt(i,s)&&Xe(r,"set",n,i):Xe(r,"add",n,i)),l}}function Ql(e,t){const r=U(e,t);e[t];const n=Reflect.deleteProperty(e,t);return n&&r&&Xe(e,"delete",t,void 0),n}function Jl(e,t){const r=Reflect.has(e,t);return(!Ai(t)||!fa.has(t))&&Ie(e,"has",t),r}function ql(e){return Ie(e,"iterate",L(e)?"length":$t),Reflect.ownKeys(e)}const ca={get:jl,set:xl,deleteProperty:Ql,has:Jl,ownKeys:ql},ef={get:zl,set(e,t){return!0},deleteProperty(e,t){return!0}},tf=ce({},ca,{get:Xl,set:Zl}),wi=e=>e,xr=e=>Reflect.getPrototypeOf(e);function vr(e,t,r=!1,n=!1){e=e.__v_raw;const i=K(e),o=K(t);r||(t!==o&&Ie(i,"get",t),Ie(i,"get",o));const{has:s}=xr(i),a=n?wi:r?Si:er;if(s.call(i,t))return a(e.get(t));if(s.call(i,o))return a(e.get(o));e!==i&&e.get(t)}function dr(e,t=!1){const r=this.__v_raw,n=K(r),i=K(e);return t||(e!==i&&Ie(n,"has",e),Ie(n,"has",i)),e===i?r.has(e):r.has(e)||r.has(i)}function pr(e,t=!1){return e=e.__v_raw,!t&&Ie(K(e),"iterate",$t),Reflect.get(e,"size",e)}function lo(e){e=K(e);const t=K(this);return xr(t).has.call(t,e)||(t.add(e),Xe(t,"add",e,e)),this}function fo(e,t){t=K(t);const r=K(this),{has:n,get:i}=xr(r);let o=n.call(r,e);o||(e=K(e),o=n.call(r,e));const s=i.call(r,e);return r.set(e,t),o?qt(t,s)&&Xe(r,"set",e,t):Xe(r,"add",e,t),this}function uo(e){const t=K(this),{has:r,get:n}=xr(t);let i=r.call(t,e);i||(e=K(e),i=r.call(t,e)),n&&n.call(t,e);const o=t.delete(e);return i&&Xe(t,"delete",e,void 0),o}function co(){const e=K(this),t=e.size!==0,r=e.clear();return t&&Xe(e,"clear",void 0,void 0),r}function hr(e,t){return function(n,i){const o=this,s=o.__v_raw,a=K(s),l=t?wi:e?Si:er;return!e&&Ie(a,"iterate",$t),s.forEach((f,u)=>n.call(i,l(f),l(u),o))}}function _r(e,t,r){return function(...n){const i=this.__v_raw,o=K(i),s=Tt(o),a=e==="entries"||e===Symbol.iterator&&s,l=e==="keys"&&s,f=i[e](...n),u=r?wi:t?Si:er;return!t&&Ie(o,"iterate",l?jn:$t),{next(){const{value:d,done:h}=f.next();return h?{value:d,done:h}:{value:a?[u(d[0]),u(d[1])]:u(d),done:h}},[Symbol.iterator](){return this}}}}function xe(e){return function(...t){return e==="delete"?!1:this}}function rf(){const e={get(o){return vr(this,o)},get size(){return pr(this)},has:dr,add:lo,set:fo,delete:uo,clear:co,forEach:hr(!1,!1)},t={get(o){return vr(this,o,!1,!0)},get size(){return pr(this)},has:dr,add:lo,set:fo,delete:uo,clear:co,forEach:hr(!1,!0)},r={get(o){return vr(this,o,!0)},get size(){return pr(this,!0)},has(o){return dr.call(this,o,!0)},add:xe("add"),set:xe("set"),delete:xe("delete"),clear:xe("clear"),forEach:hr(!0,!1)},n={get(o){return vr(this,o,!0,!0)},get size(){return pr(this,!0)},has(o){return dr.call(this,o,!0)},add:xe("add"),set:xe("set"),delete:xe("delete"),clear:xe("clear"),forEach:hr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(o=>{e[o]=_r(o,!1,!1),r[o]=_r(o,!0,!1),t[o]=_r(o,!1,!0),n[o]=_r(o,!0,!0)}),[e,r,t,n]}const[nf,of,sf,af]=rf();function Ci(e,t){const r=t?e?af:sf:e?of:nf;return(n,i,o)=>i==="__v_isReactive"?!e:i==="__v_isReadonly"?e:i==="__v_raw"?n:Reflect.get(U(r,i)&&i in n?r:n,i,o)}const lf={get:Ci(!1,!1)},ff={get:Ci(!1,!0)},uf={get:Ci(!0,!1)},va=new WeakMap,da=new WeakMap,pa=new WeakMap,cf=new WeakMap;function vf(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function df(e){return e.__v_skip||!Object.isExtensible(e)?0:vf(Dl(e))}function Zr(e){return Ft(e)?e:Fi(e,!1,ca,lf,va)}function pf(e){return Fi(e,!1,tf,ff,da)}function ha(e){return Fi(e,!0,ef,uf,pa)}function Fi(e,t,r,n,i){if(!x(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const o=i.get(e);if(o)return o;const s=df(e);if(s===0)return e;const a=new Proxy(e,s===2?n:r);return i.set(e,a),a}function Ot(e){return Ft(e)?Ot(e.__v_raw):!!(e&&e.__v_isReactive)}function Ft(e){return!!(e&&e.__v_isReadonly)}function Br(e){return!!(e&&e.__v_isShallow)}function _a(e){return Ot(e)||Ft(e)}function K(e){const t=e&&e.__v_raw;return t?K(t):e}function ga(e){return Ur(e,"__v_skip",!0),e}const er=e=>x(e)?Zr(e):e,Si=e=>x(e)?ha(e):e;function $a(e){rt&&Oe&&(e=K(e),la(e.dep||(e.dep=Ei())))}function ma(e,t){e=K(e),e.dep&&Xn(e.dep)}function re(e){return!!(e&&e.__v_isRef===!0)}function Qt(e){return hf(e,!1)}function hf(e,t){return re(e)?e:new _f(e,t)}class _f{constructor(t,r){this.__v_isShallow=r,this.dep=void 0,this.__v_isRef=!0,this._rawValue=r?t:K(t),this._value=r?t:er(t)}get value(){return $a(this),this._value}set value(t){const r=this.__v_isShallow||Br(t)||Ft(t);t=r?t:K(t),qt(t,this._rawValue)&&(this._rawValue=t,this._value=r?t:er(t),ma(this))}}function J(e){return re(e)?e.value:e}const gf={get:(e,t,r)=>J(Reflect.get(e,t,r)),set:(e,t,r,n)=>{const i=e[t];return re(i)&&!re(r)?(i.value=r,!0):Reflect.set(e,t,r,n)}};function ba(e){return Ot(e)?e:new Proxy(e,gf)}var ya;class $f{constructor(t,r,n,i){this._setter=r,this.dep=void 0,this.__v_isRef=!0,this[ya]=!1,this._dirty=!0,this.effect=new Ti(t,()=>{this._dirty||(this._dirty=!0,ma(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=n}get value(){const t=K(this);return $a(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}ya="__v_isReadonly";function mf(e,t,r=!1){let n,i;const o=D(e);return o?(n=e,i=Fe):(n=e.get,i=e.set),new $f(n,i,o||!i,r)}function nt(e,t,r,n){let i;try{i=n?e(...n):e()}catch(o){Qr(o,t,r)}return i}function Ee(e,t,r,n){if(D(e)){const o=nt(e,t,r,n);return o&&ta(o)&&o.catch(s=>{Qr(s,t,r)}),o}const i=[];for(let o=0;o<e.length;o++)i.push(Ee(e[o],t,r,n));return i}function Qr(e,t,r,n=!0){const i=t?t.vnode:null;if(t){let o=t.parent;const s=t.proxy,a=r;for(;o;){const f=o.ec;if(f){for(let u=0;u<f.length;u++)if(f[u](e,s,a)===!1)return}o=o.parent}const l=t.appContext.config.errorHandler;if(l){nt(l,null,10,[e,s,a]);return}}bf(e,r,i,n)}function bf(e,t,r,n=!0){console.error(e)}let tr=!1,zn=!1;const de=[];let Ue=0;const wt=[];let Ve=null,dt=0;const Ia=Promise.resolve();let Pi=null;function yf(e){const t=Pi||Ia;return e?t.then(this?e.bind(this):e):t}function If(e){let t=Ue+1,r=de.length;for(;t<r;){const n=t+r>>>1;rr(de[n])<e?t=n+1:r=n}return t}function Hi(e){(!de.length||!de.includes(e,tr&&e.allowRecurse?Ue+1:Ue))&&(e.id==null?de.push(e):de.splice(If(e.id),0,e),Aa())}function Aa(){!tr&&!zn&&(zn=!0,Pi=Ia.then(Ea))}function Af(e){const t=de.indexOf(e);t>Ue&&de.splice(t,1)}function Nf(e){L(e)?wt.push(...e):(!Ve||!Ve.includes(e,e.allowRecurse?dt+1:dt))&&wt.push(e),Aa()}function vo(e,t=tr?Ue+1:0){for(;t<de.length;t++){const r=de[t];r&&r.pre&&(de.splice(t,1),t--,r())}}function Na(e){if(wt.length){const t=[...new Set(wt)];if(wt.length=0,Ve){Ve.push(...t);return}for(Ve=t,Ve.sort((r,n)=>rr(r)-rr(n)),dt=0;dt<Ve.length;dt++)Ve[dt]();Ve=null,dt=0}}const rr=e=>e.id==null?1/0:e.id,Ef=(e,t)=>{const r=rr(e)-rr(t);if(r===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return r};function Ea(e){zn=!1,tr=!0,de.sort(Ef);const t=Fe;try{for(Ue=0;Ue<de.length;Ue++){const r=de[Ue];r&&r.active!==!1&&nt(r,null,14)}}finally{Ue=0,de.length=0,Na(),tr=!1,Pi=null,(de.length||wt.length)&&Ea()}}function Tf(e,t,...r){if(e.isUnmounted)return;const n=e.vnode.props||j;let i=r;const o=t.startsWith("update:"),s=o&&t.slice(7);if(s&&s in n){const u=`${s==="modelValue"?"model":s}Modifiers`,{number:d,trim:h}=n[u]||j;h&&(i=r.map(p=>p.trim())),d&&(i=r.map(Wr))}let a,l=n[a=vn(t)]||n[a=vn(Ct(t))];!l&&o&&(l=n[a=vn(Pt(t))]),l&&Ee(l,e,6,i);const f=n[a+"Once"];if(f){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,Ee(f,e,6,i)}}function Ta(e,t,r=!1){const n=t.emitsCache,i=n.get(e);if(i!==void 0)return i;const o=e.emits;let s={},a=!1;if(!D(e)){const l=f=>{const u=Ta(f,t,!0);u&&(a=!0,ce(s,u))};!r&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!o&&!a?(x(e)&&n.set(e,null),null):(L(o)?o.forEach(l=>s[l]=null):ce(s,o),x(e)&&n.set(e,s),s)}function Jr(e,t){return!e||!Xr(t)?!1:(t=t.slice(2).replace(/Once$/,""),U(e,t[0].toLowerCase()+t.slice(1))||U(e,Pt(t))||U(e,t))}let we=null,qr=null;function Kr(e){const t=we;return we=e,qr=e&&e.type.__scopeId||null,t}function Li(e){qr=e}function Mi(){qr=null}function Oa(e,t=we,r){if(!t||e._n)return e;const n=(...i)=>{n._d&&Ao(-1);const o=Kr(t);let s;try{s=e(...i)}finally{Kr(o),n._d&&Ao(1)}return s};return n._n=!0,n._c=!0,n._d=!0,n}function dn(e){const{type:t,vnode:r,proxy:n,withProxy:i,props:o,propsOptions:[s],slots:a,attrs:l,emit:f,render:u,renderCache:d,data:h,setupState:p,ctx:I,inheritAttrs:A}=e;let w,T;const ie=Kr(e);try{if(r.shapeFlag&4){const G=i||n;w=Re(u.call(G,G,d,o,p,h,I)),T=l}else{const G=t;w=Re(G.length>1?G(o,{attrs:l,slots:a,emit:f}):G(o,null)),T=t.props?l:Of(l)}}catch(G){Jt.length=0,Qr(G,e,1),w=ae(Se)}let V=w;if(T&&A!==!1){const G=Object.keys(T),{shapeFlag:Z}=V;G.length&&Z&7&&(s&&G.some(yi)&&(T=wf(T,s)),V=ot(V,T))}return r.dirs&&(V=ot(V),V.dirs=V.dirs?V.dirs.concat(r.dirs):r.dirs),r.transition&&(V.transition=r.transition),w=V,Kr(ie),w}const Of=e=>{let t;for(const r in e)(r==="class"||r==="style"||Xr(r))&&((t||(t={}))[r]=e[r]);return t},wf=(e,t)=>{const r={};for(const n in e)(!yi(n)||!(n.slice(9)in t))&&(r[n]=e[n]);return r};function Cf(e,t,r){const{props:n,children:i,component:o}=e,{props:s,children:a,patchFlag:l}=t,f=o.emitsOptions;if(t.dirs||t.transition)return!0;if(r&&l>=0){if(l&1024)return!0;if(l&16)return n?po(n,s,f):!!s;if(l&8){const u=t.dynamicProps;for(let d=0;d<u.length;d++){const h=u[d];if(s[h]!==n[h]&&!Jr(f,h))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:n===s?!1:n?s?po(n,s,f):!0:!!s;return!1}function po(e,t,r){const n=Object.keys(t);if(n.length!==Object.keys(e).length)return!0;for(let i=0;i<n.length;i++){const o=n[i];if(t[o]!==e[o]&&!Jr(r,o))return!0}return!1}function Ff({vnode:e,parent:t},r){for(;t&&t.subTree===e;)(e=t.vnode).el=r,t=t.parent}const Sf=e=>e.__isSuspense;function Pf(e,t){t&&t.pendingBranch?L(e)?t.effects.push(...e):t.effects.push(e):Nf(e)}function Hf(e,t){if(ue){let r=ue.provides;const n=ue.parent&&ue.parent.provides;n===r&&(r=ue.provides=Object.create(n)),r[e]=t}}function pn(e,t,r=!1){const n=ue||we;if(n){const i=n.parent==null?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides;if(i&&e in i)return i[e];if(arguments.length>1)return r&&D(t)?t.call(n.proxy):t}}const ho={};function hn(e,t,r){return wa(e,t,r)}function wa(e,t,{immediate:r,deep:n,flush:i,onTrack:o,onTrigger:s}=j){const a=ue;let l,f=!1,u=!1;if(re(e)?(l=()=>e.value,f=Br(e)):Ot(e)?(l=()=>e,n=!0):L(e)?(u=!0,f=e.some(T=>Ot(T)||Br(T)),l=()=>e.map(T=>{if(re(T))return T.value;if(Ot(T))return _t(T);if(D(T))return nt(T,a,2)})):D(e)?t?l=()=>nt(e,a,2):l=()=>{if(!(a&&a.isUnmounted))return d&&d(),Ee(e,a,3,[h])}:l=Fe,t&&n){const T=l;l=()=>_t(T())}let d,h=T=>{d=w.onStop=()=>{nt(T,a,4)}};if(ir)return h=Fe,t?r&&Ee(t,a,3,[l(),u?[]:void 0,h]):l(),Fe;let p=u?[]:ho;const I=()=>{if(!!w.active)if(t){const T=w.run();(n||f||(u?T.some((ie,V)=>qt(ie,p[V])):qt(T,p)))&&(d&&d(),Ee(t,a,3,[T,p===ho?void 0:p,h]),p=T)}else w.run()};I.allowRecurse=!!t;let A;i==="sync"?A=I:i==="post"?A=()=>me(I,a&&a.suspense):(I.pre=!0,a&&(I.id=a.uid),A=()=>Hi(I));const w=new Ti(l,A);return t?r?I():p=w.run():i==="post"?me(w.run.bind(w),a&&a.suspense):w.run(),()=>{w.stop(),a&&a.scope&&Ii(a.scope.effects,w)}}function Lf(e,t,r){const n=this.proxy,i=le(e)?e.includes(".")?Ca(n,e):()=>n[e]:e.bind(n,n);let o;D(t)?o=t:(o=t.handler,r=t);const s=ue;St(this);const a=wa(i,o.bind(n),r);return s?St(s):mt(),a}function Ca(e,t){const r=t.split(".");return()=>{let n=e;for(let i=0;i<r.length&&n;i++)n=n[r[i]];return n}}function _t(e,t){if(!x(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),re(e))_t(e.value,t);else if(L(e))for(let r=0;r<e.length;r++)_t(e[r],t);else if(ea(e)||Tt(e))e.forEach(r=>{_t(r,t)});else if(na(e))for(const r in e)_t(e[r],t);return e}function Mf(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Di(()=>{e.isMounted=!0}),La(()=>{e.isUnmounting=!0}),e}const Ne=[Function,Array],Df={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Ne,onEnter:Ne,onAfterEnter:Ne,onEnterCancelled:Ne,onBeforeLeave:Ne,onLeave:Ne,onAfterLeave:Ne,onLeaveCancelled:Ne,onBeforeAppear:Ne,onAppear:Ne,onAfterAppear:Ne,onAppearCancelled:Ne},setup(e,{slots:t}){const r=yu(),n=Mf();let i;return()=>{const o=t.default&&Pa(t.default(),!0);if(!o||!o.length)return;let s=o[0];if(o.length>1){for(const A of o)if(A.type!==Se){s=A;break}}const a=K(e),{mode:l}=a;if(n.isLeaving)return _n(s);const f=_o(s);if(!f)return _n(s);const u=Yn(f,a,n,r);xn(f,u);const d=r.subTree,h=d&&_o(d);let p=!1;const{getTransitionKey:I}=f.type;if(I){const A=I();i===void 0?i=A:A!==i&&(i=A,p=!0)}if(h&&h.type!==Se&&(!pt(f,h)||p)){const A=Yn(h,a,n,r);if(xn(h,A),l==="out-in")return n.isLeaving=!0,A.afterLeave=()=>{n.isLeaving=!1,r.update()},_n(s);l==="in-out"&&f.type!==Se&&(A.delayLeave=(w,T,ie)=>{const V=Sa(n,h);V[String(h.key)]=h,w._leaveCb=()=>{T(),w._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=ie})}return s}}},Fa=Df;function Sa(e,t){const{leavingVNodes:r}=e;let n=r.get(t.type);return n||(n=Object.create(null),r.set(t.type,n)),n}function Yn(e,t,r,n){const{appear:i,mode:o,persisted:s=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:f,onEnterCancelled:u,onBeforeLeave:d,onLeave:h,onAfterLeave:p,onLeaveCancelled:I,onBeforeAppear:A,onAppear:w,onAfterAppear:T,onAppearCancelled:ie}=t,V=String(e.key),G=Sa(r,e),Z=(H,ee)=>{H&&Ee(H,n,9,ee)},$e=(H,ee)=>{const Y=ee[1];Z(H,ee),L(H)?H.every(ve=>ve.length<=1)&&Y():H.length<=1&&Y()},he={mode:o,persisted:s,beforeEnter(H){let ee=a;if(!r.isMounted)if(i)ee=A||a;else return;H._leaveCb&&H._leaveCb(!0);const Y=G[V];Y&&pt(e,Y)&&Y.el._leaveCb&&Y.el._leaveCb(),Z(ee,[H])},enter(H){let ee=l,Y=f,ve=u;if(!r.isMounted)if(i)ee=w||l,Y=T||f,ve=ie||u;else return;let C=!1;const Q=H._enterCb=be=>{C||(C=!0,be?Z(ve,[H]):Z(Y,[H]),he.delayedLeave&&he.delayedLeave(),H._enterCb=void 0)};ee?$e(ee,[H,Q]):Q()},leave(H,ee){const Y=String(e.key);if(H._enterCb&&H._enterCb(!0),r.isUnmounting)return ee();Z(d,[H]);let ve=!1;const C=H._leaveCb=Q=>{ve||(ve=!0,ee(),Q?Z(I,[H]):Z(p,[H]),H._leaveCb=void 0,G[Y]===e&&delete G[Y])};G[Y]=e,h?$e(h,[H,C]):C()},clone(H){return Yn(H,t,r,n)}};return he}function _n(e){if(en(e))return e=ot(e),e.children=null,e}function _o(e){return en(e)?e.children?e.children[0]:void 0:e}function xn(e,t){e.shapeFlag&6&&e.component?xn(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Pa(e,t=!1,r){let n=[],i=0;for(let o=0;o<e.length;o++){let s=e[o];const a=r==null?s.key:String(r)+String(s.key!=null?s.key:o);s.type===q?(s.patchFlag&128&&i++,n=n.concat(Pa(s.children,t,a))):(t||s.type!==Se)&&n.push(a!=null?ot(s,{key:a}):s)}if(i>1)for(let o=0;o<n.length;o++)n[o].patchFlag=-2;return n}function or(e){return D(e)?{setup:e,name:e.name}:e}const Dr=e=>!!e.type.__asyncLoader,en=e=>e.type.__isKeepAlive;function Rf(e,t){Ha(e,"a",t)}function Uf(e,t){Ha(e,"da",t)}function Ha(e,t,r=ue){const n=e.__wdc||(e.__wdc=()=>{let i=r;for(;i;){if(i.isDeactivated)return;i=i.parent}return e()});if(tn(t,n,r),r){let i=r.parent;for(;i&&i.parent;)en(i.parent.vnode)&&Wf(n,t,r,i),i=i.parent}}function Wf(e,t,r,n){const i=tn(t,e,n,!0);Ri(()=>{Ii(n[t],i)},r)}function tn(e,t,r=ue,n=!1){if(r){const i=r[e]||(r[e]=[]),o=t.__weh||(t.__weh=(...s)=>{if(r.isUnmounted)return;Ht(),St(r);const a=Ee(t,r,e,s);return mt(),Lt(),a});return n?i.unshift(o):i.push(o),o}}const Ye=e=>(t,r=ue)=>(!ir||e==="sp")&&tn(e,(...n)=>t(...n),r),Bf=Ye("bm"),Di=Ye("m"),Kf=Ye("bu"),Gf=Ye("u"),La=Ye("bum"),Ri=Ye("um"),kf=Ye("sp"),Vf=Ye("rtg"),jf=Ye("rtc");function Xf(e,t=ue){tn("ec",e,t)}function zf(e,t){const r=we;if(r===null)return e;const n=nn(r)||r.proxy,i=e.dirs||(e.dirs=[]);for(let o=0;o<t.length;o++){let[s,a,l,f=j]=t[o];D(s)&&(s={mounted:s,updated:s}),s.deep&&_t(a),i.push({dir:s,instance:n,value:a,oldValue:void 0,arg:l,modifiers:f})}return e}function lt(e,t,r,n){const i=e.dirs,o=t&&t.dirs;for(let s=0;s<i.length;s++){const a=i[s];o&&(a.oldValue=o[s].value);let l=a.dir[n];l&&(Ht(),Ee(l,r,8,[e.el,a,e,t]),Lt())}}const Yf=Symbol();function We(e,t,r,n){let i;const o=r&&r[n];if(L(e)||le(e)){i=new Array(e.length);for(let s=0,a=e.length;s<a;s++)i[s]=t(e[s],s,void 0,o&&o[s])}else if(typeof e=="number"){i=new Array(e);for(let s=0;s<e;s++)i[s]=t(s+1,s,void 0,o&&o[s])}else if(x(e))if(e[Symbol.iterator])i=Array.from(e,(s,a)=>t(s,a,void 0,o&&o[a]));else{const s=Object.keys(e);i=new Array(s.length);for(let a=0,l=s.length;a<l;a++){const f=s[a];i[a]=t(e[f],f,a,o&&o[a])}}else i=[];return r&&(r[n]=i),i}const Zn=e=>e?ja(e)?nn(e)||e.proxy:Zn(e.parent):null,Gr=ce(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Zn(e.parent),$root:e=>Zn(e.root),$emit:e=>e.emit,$options:e=>Ui(e),$forceUpdate:e=>e.f||(e.f=()=>Hi(e.update)),$nextTick:e=>e.n||(e.n=yf.bind(e.proxy)),$watch:e=>Lf.bind(e)}),xf={get({_:e},t){const{ctx:r,setupState:n,data:i,props:o,accessCache:s,type:a,appContext:l}=e;let f;if(t[0]!=="$"){const p=s[t];if(p!==void 0)switch(p){case 1:return n[t];case 2:return i[t];case 4:return r[t];case 3:return o[t]}else{if(n!==j&&U(n,t))return s[t]=1,n[t];if(i!==j&&U(i,t))return s[t]=2,i[t];if((f=e.propsOptions[0])&&U(f,t))return s[t]=3,o[t];if(r!==j&&U(r,t))return s[t]=4,r[t];Qn&&(s[t]=0)}}const u=Gr[t];let d,h;if(u)return t==="$attrs"&&Ie(e,"get",t),u(e);if((d=a.__cssModules)&&(d=d[t]))return d;if(r!==j&&U(r,t))return s[t]=4,r[t];if(h=l.config.globalProperties,U(h,t))return h[t]},set({_:e},t,r){const{data:n,setupState:i,ctx:o}=e;return i!==j&&U(i,t)?(i[t]=r,!0):n!==j&&U(n,t)?(n[t]=r,!0):U(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(o[t]=r,!0)},has({_:{data:e,setupState:t,accessCache:r,ctx:n,appContext:i,propsOptions:o}},s){let a;return!!r[s]||e!==j&&U(e,s)||t!==j&&U(t,s)||(a=o[0])&&U(a,s)||U(n,s)||U(Gr,s)||U(i.config.globalProperties,s)},defineProperty(e,t,r){return r.get!=null?e._.accessCache[t]=0:U(r,"value")&&this.set(e,t,r.value,null),Reflect.defineProperty(e,t,r)}};let Qn=!0;function Zf(e){const t=Ui(e),r=e.proxy,n=e.ctx;Qn=!1,t.beforeCreate&&go(t.beforeCreate,e,"bc");const{data:i,computed:o,methods:s,watch:a,provide:l,inject:f,created:u,beforeMount:d,mounted:h,beforeUpdate:p,updated:I,activated:A,deactivated:w,beforeDestroy:T,beforeUnmount:ie,destroyed:V,unmounted:G,render:Z,renderTracked:$e,renderTriggered:he,errorCaptured:H,serverPrefetch:ee,expose:Y,inheritAttrs:ve,components:C,directives:Q,filters:be}=t;if(f&&Qf(f,n,null,e.appContext.config.unwrapInjectedRef),s)for(const te in s){const X=s[te];D(X)&&(n[te]=X.bind(r))}if(i){const te=i.call(r,r);x(te)&&(e.data=Zr(te))}if(Qn=!0,o)for(const te in o){const X=o[te],st=D(X)?X.bind(r,r):D(X.get)?X.get.bind(r,r):Fe,ur=!D(X)&&D(X.set)?X.set.bind(r):Fe,at=ze({get:st,set:ur});Object.defineProperty(n,te,{enumerable:!0,configurable:!0,get:()=>at.value,set:He=>at.value=He})}if(a)for(const te in a)Ma(a[te],n,r,te);if(l){const te=D(l)?l.call(r):l;Reflect.ownKeys(te).forEach(X=>{Hf(X,te[X])})}u&&go(u,e,"c");function oe(te,X){L(X)?X.forEach(st=>te(st.bind(r))):X&&te(X.bind(r))}if(oe(Bf,d),oe(Di,h),oe(Kf,p),oe(Gf,I),oe(Rf,A),oe(Uf,w),oe(Xf,H),oe(jf,$e),oe(Vf,he),oe(La,ie),oe(Ri,G),oe(kf,ee),L(Y))if(Y.length){const te=e.exposed||(e.exposed={});Y.forEach(X=>{Object.defineProperty(te,X,{get:()=>r[X],set:st=>r[X]=st})})}else e.exposed||(e.exposed={});Z&&e.render===Fe&&(e.render=Z),ve!=null&&(e.inheritAttrs=ve),C&&(e.components=C),Q&&(e.directives=Q)}function Qf(e,t,r=Fe,n=!1){L(e)&&(e=Jn(e));for(const i in e){const o=e[i];let s;x(o)?"default"in o?s=pn(o.from||i,o.default,!0):s=pn(o.from||i):s=pn(o),re(s)&&n?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:a=>s.value=a}):t[i]=s}}function go(e,t,r){Ee(L(e)?e.map(n=>n.bind(t.proxy)):e.bind(t.proxy),t,r)}function Ma(e,t,r,n){const i=n.includes(".")?Ca(r,n):()=>r[n];if(le(e)){const o=t[e];D(o)&&hn(i,o)}else if(D(e))hn(i,e.bind(r));else if(x(e))if(L(e))e.forEach(o=>Ma(o,t,r,n));else{const o=D(e.handler)?e.handler.bind(r):t[e.handler];D(o)&&hn(i,o,e)}}function Ui(e){const t=e.type,{mixins:r,extends:n}=t,{mixins:i,optionsCache:o,config:{optionMergeStrategies:s}}=e.appContext,a=o.get(t);let l;return a?l=a:!i.length&&!r&&!n?l=t:(l={},i.length&&i.forEach(f=>kr(l,f,s,!0)),kr(l,t,s)),x(t)&&o.set(t,l),l}function kr(e,t,r,n=!1){const{mixins:i,extends:o}=t;o&&kr(e,o,r,!0),i&&i.forEach(s=>kr(e,s,r,!0));for(const s in t)if(!(n&&s==="expose")){const a=Jf[s]||r&&r[s];e[s]=a?a(e[s],t[s]):t[s]}return e}const Jf={data:$o,props:vt,emits:vt,methods:vt,computed:vt,beforeCreate:_e,created:_e,beforeMount:_e,mounted:_e,beforeUpdate:_e,updated:_e,beforeDestroy:_e,beforeUnmount:_e,destroyed:_e,unmounted:_e,activated:_e,deactivated:_e,errorCaptured:_e,serverPrefetch:_e,components:vt,directives:vt,watch:eu,provide:$o,inject:qf};function $o(e,t){return t?e?function(){return ce(D(e)?e.call(this,this):e,D(t)?t.call(this,this):t)}:t:e}function qf(e,t){return vt(Jn(e),Jn(t))}function Jn(e){if(L(e)){const t={};for(let r=0;r<e.length;r++)t[e[r]]=e[r];return t}return e}function _e(e,t){return e?[...new Set([].concat(e,t))]:t}function vt(e,t){return e?ce(ce(Object.create(null),e),t):t}function eu(e,t){if(!e)return t;if(!t)return e;const r=ce(Object.create(null),e);for(const n in t)r[n]=_e(e[n],t[n]);return r}function tu(e,t,r,n=!1){const i={},o={};Ur(o,rn,1),e.propsDefaults=Object.create(null),Da(e,t,i,o);for(const s in e.propsOptions[0])s in i||(i[s]=void 0);r?e.props=n?i:pf(i):e.type.props?e.props=i:e.props=o,e.attrs=o}function ru(e,t,r,n){const{props:i,attrs:o,vnode:{patchFlag:s}}=e,a=K(i),[l]=e.propsOptions;let f=!1;if((n||s>0)&&!(s&16)){if(s&8){const u=e.vnode.dynamicProps;for(let d=0;d<u.length;d++){let h=u[d];if(Jr(e.emitsOptions,h))continue;const p=t[h];if(l)if(U(o,h))p!==o[h]&&(o[h]=p,f=!0);else{const I=Ct(h);i[I]=qn(l,a,I,p,e,!1)}else p!==o[h]&&(o[h]=p,f=!0)}}}else{Da(e,t,i,o)&&(f=!0);let u;for(const d in a)(!t||!U(t,d)&&((u=Pt(d))===d||!U(t,u)))&&(l?r&&(r[d]!==void 0||r[u]!==void 0)&&(i[d]=qn(l,a,d,void 0,e,!0)):delete i[d]);if(o!==a)for(const d in o)(!t||!U(t,d)&&!0)&&(delete o[d],f=!0)}f&&Xe(e,"set","$attrs")}function Da(e,t,r,n){const[i,o]=e.propsOptions;let s=!1,a;if(t)for(let l in t){if(Lr(l))continue;const f=t[l];let u;i&&U(i,u=Ct(l))?!o||!o.includes(u)?r[u]=f:(a||(a={}))[u]=f:Jr(e.emitsOptions,l)||(!(l in n)||f!==n[l])&&(n[l]=f,s=!0)}if(o){const l=K(r),f=a||j;for(let u=0;u<o.length;u++){const d=o[u];r[d]=qn(i,l,d,f[d],e,!U(f,d))}}return s}function qn(e,t,r,n,i,o){const s=e[r];if(s!=null){const a=U(s,"default");if(a&&n===void 0){const l=s.default;if(s.type!==Function&&D(l)){const{propsDefaults:f}=i;r in f?n=f[r]:(St(i),n=f[r]=l.call(null,t),mt())}else n=l}s[0]&&(o&&!a?n=!1:s[1]&&(n===""||n===Pt(r))&&(n=!0))}return n}function Ra(e,t,r=!1){const n=t.propsCache,i=n.get(e);if(i)return i;const o=e.props,s={},a=[];let l=!1;if(!D(e)){const u=d=>{l=!0;const[h,p]=Ra(d,t,!0);ce(s,h),p&&a.push(...p)};!r&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!o&&!l)return x(e)&&n.set(e,Et),Et;if(L(o))for(let u=0;u<o.length;u++){const d=Ct(o[u]);mo(d)&&(s[d]=j)}else if(o)for(const u in o){const d=Ct(u);if(mo(d)){const h=o[u],p=s[d]=L(h)||D(h)?{type:h}:h;if(p){const I=Io(Boolean,p.type),A=Io(String,p.type);p[0]=I>-1,p[1]=A<0||I<A,(I>-1||U(p,"default"))&&a.push(d)}}}const f=[s,a];return x(e)&&n.set(e,f),f}function mo(e){return e[0]!=="$"}function bo(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function yo(e,t){return bo(e)===bo(t)}function Io(e,t){return L(t)?t.findIndex(r=>yo(r,e)):D(t)&&yo(t,e)?0:-1}const Ua=e=>e[0]==="_"||e==="$stable",Wi=e=>L(e)?e.map(Re):[Re(e)],nu=(e,t,r)=>{if(t._n)return t;const n=Oa((...i)=>Wi(t(...i)),r);return n._c=!1,n},Wa=(e,t,r)=>{const n=e._ctx;for(const i in e){if(Ua(i))continue;const o=e[i];if(D(o))t[i]=nu(i,o,n);else if(o!=null){const s=Wi(o);t[i]=()=>s}}},Ba=(e,t)=>{const r=Wi(t);e.slots.default=()=>r},iu=(e,t)=>{if(e.vnode.shapeFlag&32){const r=t._;r?(e.slots=K(t),Ur(t,"_",r)):Wa(t,e.slots={})}else e.slots={},t&&Ba(e,t);Ur(e.slots,rn,1)},ou=(e,t,r)=>{const{vnode:n,slots:i}=e;let o=!0,s=j;if(n.shapeFlag&32){const a=t._;a?r&&a===1?o=!1:(ce(i,t),!r&&a===1&&delete i._):(o=!t.$stable,Wa(t,i)),s=t}else t&&(Ba(e,t),s={default:1});if(o)for(const a in i)!Ua(a)&&!(a in s)&&delete i[a]};function Ka(){return{app:null,config:{isNativeTag:Hl,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let su=0;function au(e,t){return function(n,i=null){D(n)||(n=Object.assign({},n)),i!=null&&!x(i)&&(i=null);const o=Ka(),s=new Set;let a=!1;const l=o.app={_uid:su++,_component:n,_props:i,_container:null,_context:o,_instance:null,version:wu,get config(){return o.config},set config(f){},use(f,...u){return s.has(f)||(f&&D(f.install)?(s.add(f),f.install(l,...u)):D(f)&&(s.add(f),f(l,...u))),l},mixin(f){return o.mixins.includes(f)||o.mixins.push(f),l},component(f,u){return u?(o.components[f]=u,l):o.components[f]},directive(f,u){return u?(o.directives[f]=u,l):o.directives[f]},mount(f,u,d){if(!a){const h=ae(n,i);return h.appContext=o,u&&t?t(h,f):e(h,f,d),a=!0,l._container=f,f.__vue_app__=l,nn(h.component)||h.component.proxy}},unmount(){a&&(e(null,l._container),delete l._container.__vue_app__)},provide(f,u){return o.provides[f]=u,l}};return l}}function ei(e,t,r,n,i=!1){if(L(e)){e.forEach((h,p)=>ei(h,t&&(L(t)?t[p]:t),r,n,i));return}if(Dr(n)&&!i)return;const o=n.shapeFlag&4?nn(n.component)||n.component.proxy:n.el,s=i?null:o,{i:a,r:l}=e,f=t&&t.r,u=a.refs===j?a.refs={}:a.refs,d=a.setupState;if(f!=null&&f!==l&&(le(f)?(u[f]=null,U(d,f)&&(d[f]=null)):re(f)&&(f.value=null)),D(l))nt(l,a,12,[s,u]);else{const h=le(l),p=re(l);if(h||p){const I=()=>{if(e.f){const A=h?U(d,l)?d[l]:u[l]:l.value;i?L(A)&&Ii(A,o):L(A)?A.includes(o)||A.push(o):h?(u[l]=[o],U(d,l)&&(d[l]=u[l])):(l.value=[o],e.k&&(u[e.k]=l.value))}else h?(u[l]=s,U(d,l)&&(d[l]=s)):p&&(l.value=s,e.k&&(u[e.k]=s))};s?(I.id=-1,me(I,r)):I()}}}const me=Pf;function lu(e){return fu(e)}function fu(e,t){const r=Wl();r.__VUE__=!0;const{insert:n,remove:i,patchProp:o,createElement:s,createText:a,createComment:l,setText:f,setElementText:u,parentNode:d,nextSibling:h,setScopeId:p=Fe,insertStaticContent:I}=e,A=(c,v,_,$=null,g=null,y=null,E=!1,b=null,N=!!v.dynamicChildren)=>{if(c===v)return;c&&!pt(c,v)&&($=cr(c),He(c,g,y,!0),c=null),v.patchFlag===-2&&(N=!1,v.dynamicChildren=null);const{type:m,ref:F,shapeFlag:O}=v;switch(m){case Bi:w(c,v,_,$);break;case Se:T(c,v,_,$);break;case gn:c==null&&ie(v,_,$,E);break;case q:C(c,v,_,$,g,y,E,b,N);break;default:O&1?Z(c,v,_,$,g,y,E,b,N):O&6?Q(c,v,_,$,g,y,E,b,N):(O&64||O&128)&&m.process(c,v,_,$,g,y,E,b,N,yt)}F!=null&&g&&ei(F,c&&c.ref,y,v||c,!v)},w=(c,v,_,$)=>{if(c==null)n(v.el=a(v.children),_,$);else{const g=v.el=c.el;v.children!==c.children&&f(g,v.children)}},T=(c,v,_,$)=>{c==null?n(v.el=l(v.children||""),_,$):v.el=c.el},ie=(c,v,_,$)=>{[c.el,c.anchor]=I(c.children,v,_,$,c.el,c.anchor)},V=({el:c,anchor:v},_,$)=>{let g;for(;c&&c!==v;)g=h(c),n(c,_,$),c=g;n(v,_,$)},G=({el:c,anchor:v})=>{let _;for(;c&&c!==v;)_=h(c),i(c),c=_;i(v)},Z=(c,v,_,$,g,y,E,b,N)=>{E=E||v.type==="svg",c==null?$e(v,_,$,g,y,E,b,N):ee(c,v,g,y,E,b,N)},$e=(c,v,_,$,g,y,E,b)=>{let N,m;const{type:F,props:O,shapeFlag:S,transition:M,dirs:R}=c;if(N=c.el=s(c.type,y,O&&O.is,O),S&8?u(N,c.children):S&16&&H(c.children,N,null,$,g,y&&F!=="foreignObject",E,b),R&&lt(c,null,$,"created"),O){for(const k in O)k!=="value"&&!Lr(k)&&o(N,k,null,O[k],y,c.children,$,g,Be);"value"in O&&o(N,"value",null,O.value),(m=O.onVnodeBeforeMount)&&Me(m,$,c)}he(N,c,c.scopeId,E,$),R&&lt(c,null,$,"beforeMount");const z=(!g||g&&!g.pendingBranch)&&M&&!M.persisted;z&&M.beforeEnter(N),n(N,v,_),((m=O&&O.onVnodeMounted)||z||R)&&me(()=>{m&&Me(m,$,c),z&&M.enter(N),R&&lt(c,null,$,"mounted")},g)},he=(c,v,_,$,g)=>{if(_&&p(c,_),$)for(let y=0;y<$.length;y++)p(c,$[y]);if(g){let y=g.subTree;if(v===y){const E=g.vnode;he(c,E,E.scopeId,E.slotScopeIds,g.parent)}}},H=(c,v,_,$,g,y,E,b,N=0)=>{for(let m=N;m<c.length;m++){const F=c[m]=b?tt(c[m]):Re(c[m]);A(null,F,v,_,$,g,y,E,b)}},ee=(c,v,_,$,g,y,E)=>{const b=v.el=c.el;let{patchFlag:N,dynamicChildren:m,dirs:F}=v;N|=c.patchFlag&16;const O=c.props||j,S=v.props||j;let M;_&&ft(_,!1),(M=S.onVnodeBeforeUpdate)&&Me(M,_,v,c),F&&lt(v,c,_,"beforeUpdate"),_&&ft(_,!0);const R=g&&v.type!=="foreignObject";if(m?Y(c.dynamicChildren,m,b,_,$,R,y):E||X(c,v,b,null,_,$,R,y,!1),N>0){if(N&16)ve(b,v,O,S,_,$,g);else if(N&2&&O.class!==S.class&&o(b,"class",null,S.class,g),N&4&&o(b,"style",O.style,S.style,g),N&8){const z=v.dynamicProps;for(let k=0;k<z.length;k++){const ne=z[k],Te=O[ne],It=S[ne];(It!==Te||ne==="value")&&o(b,ne,Te,It,g,c.children,_,$,Be)}}N&1&&c.children!==v.children&&u(b,v.children)}else!E&&m==null&&ve(b,v,O,S,_,$,g);((M=S.onVnodeUpdated)||F)&&me(()=>{M&&Me(M,_,v,c),F&&lt(v,c,_,"updated")},$)},Y=(c,v,_,$,g,y,E)=>{for(let b=0;b<v.length;b++){const N=c[b],m=v[b],F=N.el&&(N.type===q||!pt(N,m)||N.shapeFlag&70)?d(N.el):_;A(N,m,F,null,$,g,y,E,!0)}},ve=(c,v,_,$,g,y,E)=>{if(_!==$){if(_!==j)for(const b in _)!Lr(b)&&!(b in $)&&o(c,b,_[b],null,E,v.children,g,y,Be);for(const b in $){if(Lr(b))continue;const N=$[b],m=_[b];N!==m&&b!=="value"&&o(c,b,m,N,E,v.children,g,y,Be)}"value"in $&&o(c,"value",_.value,$.value)}},C=(c,v,_,$,g,y,E,b,N)=>{const m=v.el=c?c.el:a(""),F=v.anchor=c?c.anchor:a("");let{patchFlag:O,dynamicChildren:S,slotScopeIds:M}=v;M&&(b=b?b.concat(M):M),c==null?(n(m,_,$),n(F,_,$),H(v.children,_,F,g,y,E,b,N)):O>0&&O&64&&S&&c.dynamicChildren?(Y(c.dynamicChildren,S,_,g,y,E,b),(v.key!=null||g&&v===g.subTree)&&Ga(c,v,!0)):X(c,v,_,F,g,y,E,b,N)},Q=(c,v,_,$,g,y,E,b,N)=>{v.slotScopeIds=b,c==null?v.shapeFlag&512?g.ctx.activate(v,_,$,E,N):be(v,_,$,g,y,E,N):Bt(c,v,N)},be=(c,v,_,$,g,y,E)=>{const b=c.component=bu(c,$,g);if(en(c)&&(b.ctx.renderer=yt),Iu(b),b.asyncDep){if(g&&g.registerDep(b,oe),!c.el){const N=b.subTree=ae(Se);T(null,N,v,_)}return}oe(b,c,v,_,g,y,E)},Bt=(c,v,_)=>{const $=v.component=c.component;if(Cf(c,v,_))if($.asyncDep&&!$.asyncResolved){te($,v,_);return}else $.next=v,Af($.update),$.update();else v.el=c.el,$.vnode=v},oe=(c,v,_,$,g,y,E)=>{const b=()=>{if(c.isMounted){let{next:F,bu:O,u:S,parent:M,vnode:R}=c,z=F,k;ft(c,!1),F?(F.el=R.el,te(c,F,E)):F=R,O&&Mr(O),(k=F.props&&F.props.onVnodeBeforeUpdate)&&Me(k,M,F,R),ft(c,!0);const ne=dn(c),Te=c.subTree;c.subTree=ne,A(Te,ne,d(Te.el),cr(Te),c,g,y),F.el=ne.el,z===null&&Ff(c,ne.el),S&&me(S,g),(k=F.props&&F.props.onVnodeUpdated)&&me(()=>Me(k,M,F,R),g)}else{let F;const{el:O,props:S}=v,{bm:M,m:R,parent:z}=c,k=Dr(v);if(ft(c,!1),M&&Mr(M),!k&&(F=S&&S.onVnodeBeforeMount)&&Me(F,z,v),ft(c,!0),O&&cn){const ne=()=>{c.subTree=dn(c),cn(O,c.subTree,c,g,null)};k?v.type.__asyncLoader().then(()=>!c.isUnmounted&&ne()):ne()}else{const ne=c.subTree=dn(c);A(null,ne,_,$,c,g,y),v.el=ne.el}if(R&&me(R,g),!k&&(F=S&&S.onVnodeMounted)){const ne=v;me(()=>Me(F,z,ne),g)}(v.shapeFlag&256||z&&Dr(z.vnode)&&z.vnode.shapeFlag&256)&&c.a&&me(c.a,g),c.isMounted=!0,v=_=$=null}},N=c.effect=new Ti(b,()=>Hi(m),c.scope),m=c.update=()=>N.run();m.id=c.uid,ft(c,!0),m()},te=(c,v,_)=>{v.component=c;const $=c.vnode.props;c.vnode=v,c.next=null,ru(c,v.props,$,_),ou(c,v.children,_),Ht(),vo(),Lt()},X=(c,v,_,$,g,y,E,b,N=!1)=>{const m=c&&c.children,F=c?c.shapeFlag:0,O=v.children,{patchFlag:S,shapeFlag:M}=v;if(S>0){if(S&128){ur(m,O,_,$,g,y,E,b,N);return}else if(S&256){st(m,O,_,$,g,y,E,b,N);return}}M&8?(F&16&&Be(m,g,y),O!==m&&u(_,O)):F&16?M&16?ur(m,O,_,$,g,y,E,b,N):Be(m,g,y,!0):(F&8&&u(_,""),M&16&&H(O,_,$,g,y,E,b,N))},st=(c,v,_,$,g,y,E,b,N)=>{c=c||Et,v=v||Et;const m=c.length,F=v.length,O=Math.min(m,F);let S;for(S=0;S<O;S++){const M=v[S]=N?tt(v[S]):Re(v[S]);A(c[S],M,_,null,g,y,E,b,N)}m>F?Be(c,g,y,!0,!1,O):H(v,_,$,g,y,E,b,N,O)},ur=(c,v,_,$,g,y,E,b,N)=>{let m=0;const F=v.length;let O=c.length-1,S=F-1;for(;m<=O&&m<=S;){const M=c[m],R=v[m]=N?tt(v[m]):Re(v[m]);if(pt(M,R))A(M,R,_,null,g,y,E,b,N);else break;m++}for(;m<=O&&m<=S;){const M=c[O],R=v[S]=N?tt(v[S]):Re(v[S]);if(pt(M,R))A(M,R,_,null,g,y,E,b,N);else break;O--,S--}if(m>O){if(m<=S){const M=S+1,R=M<F?v[M].el:$;for(;m<=S;)A(null,v[m]=N?tt(v[m]):Re(v[m]),_,R,g,y,E,b,N),m++}}else if(m>S)for(;m<=O;)He(c[m],g,y,!0),m++;else{const M=m,R=m,z=new Map;for(m=R;m<=S;m++){const ye=v[m]=N?tt(v[m]):Re(v[m]);ye.key!=null&&z.set(ye.key,m)}let k,ne=0;const Te=S-R+1;let It=!1,to=0;const Kt=new Array(Te);for(m=0;m<Te;m++)Kt[m]=0;for(m=M;m<=O;m++){const ye=c[m];if(ne>=Te){He(ye,g,y,!0);continue}let Le;if(ye.key!=null)Le=z.get(ye.key);else for(k=R;k<=S;k++)if(Kt[k-R]===0&&pt(ye,v[k])){Le=k;break}Le===void 0?He(ye,g,y,!0):(Kt[Le-R]=m+1,Le>=to?to=Le:It=!0,A(ye,v[Le],_,null,g,y,E,b,N),ne++)}const ro=It?uu(Kt):Et;for(k=ro.length-1,m=Te-1;m>=0;m--){const ye=R+m,Le=v[ye],no=ye+1<F?v[ye+1].el:$;Kt[m]===0?A(null,Le,_,no,g,y,E,b,N):It&&(k<0||m!==ro[k]?at(Le,_,no,2):k--)}}},at=(c,v,_,$,g=null)=>{const{el:y,type:E,transition:b,children:N,shapeFlag:m}=c;if(m&6){at(c.component.subTree,v,_,$);return}if(m&128){c.suspense.move(v,_,$);return}if(m&64){E.move(c,v,_,yt);return}if(E===q){n(y,v,_);for(let O=0;O<N.length;O++)at(N[O],v,_,$);n(c.anchor,v,_);return}if(E===gn){V(c,v,_);return}if($!==2&&m&1&&b)if($===0)b.beforeEnter(y),n(y,v,_),me(()=>b.enter(y),g);else{const{leave:O,delayLeave:S,afterLeave:M}=b,R=()=>n(y,v,_),z=()=>{O(y,()=>{R(),M&&M()})};S?S(y,R,z):z()}else n(y,v,_)},He=(c,v,_,$=!1,g=!1)=>{const{type:y,props:E,ref:b,children:N,dynamicChildren:m,shapeFlag:F,patchFlag:O,dirs:S}=c;if(b!=null&&ei(b,null,_,c,!0),F&256){v.ctx.deactivate(c);return}const M=F&1&&S,R=!Dr(c);let z;if(R&&(z=E&&E.onVnodeBeforeUnmount)&&Me(z,v,c),F&6)Ol(c.component,_,$);else{if(F&128){c.suspense.unmount(_,$);return}M&&lt(c,null,v,"beforeUnmount"),F&64?c.type.remove(c,v,_,g,yt,$):m&&(y!==q||O>0&&O&64)?Be(m,v,_,!1,!0):(y===q&&O&384||!g&&F&16)&&Be(N,v,_),$&&qi(c)}(R&&(z=E&&E.onVnodeUnmounted)||M)&&me(()=>{z&&Me(z,v,c),M&&lt(c,null,v,"unmounted")},_)},qi=c=>{const{type:v,el:_,anchor:$,transition:g}=c;if(v===q){Tl(_,$);return}if(v===gn){G(c);return}const y=()=>{i(_),g&&!g.persisted&&g.afterLeave&&g.afterLeave()};if(c.shapeFlag&1&&g&&!g.persisted){const{leave:E,delayLeave:b}=g,N=()=>E(_,y);b?b(c.el,y,N):N()}else y()},Tl=(c,v)=>{let _;for(;c!==v;)_=h(c),i(c),c=_;i(v)},Ol=(c,v,_)=>{const{bum:$,scope:g,update:y,subTree:E,um:b}=c;$&&Mr($),g.stop(),y&&(y.active=!1,He(E,c,v,_)),b&&me(b,v),me(()=>{c.isUnmounted=!0},v),v&&v.pendingBranch&&!v.isUnmounted&&c.asyncDep&&!c.asyncResolved&&c.suspenseId===v.pendingId&&(v.deps--,v.deps===0&&v.resolve())},Be=(c,v,_,$=!1,g=!1,y=0)=>{for(let E=y;E<c.length;E++)He(c[E],v,_,$,g)},cr=c=>c.shapeFlag&6?cr(c.component.subTree):c.shapeFlag&128?c.suspense.next():h(c.anchor||c.el),eo=(c,v,_)=>{c==null?v._vnode&&He(v._vnode,null,null,!0):A(v._vnode||null,c,v,null,null,null,_),vo(),Na(),v._vnode=c},yt={p:A,um:He,m:at,r:qi,mt:be,mc:H,pc:X,pbc:Y,n:cr,o:e};let un,cn;return t&&([un,cn]=t(yt)),{render:eo,hydrate:un,createApp:au(eo,un)}}function ft({effect:e,update:t},r){e.allowRecurse=t.allowRecurse=r}function Ga(e,t,r=!1){const n=e.children,i=t.children;if(L(n)&&L(i))for(let o=0;o<n.length;o++){const s=n[o];let a=i[o];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[o]=tt(i[o]),a.el=s.el),r||Ga(s,a))}}function uu(e){const t=e.slice(),r=[0];let n,i,o,s,a;const l=e.length;for(n=0;n<l;n++){const f=e[n];if(f!==0){if(i=r[r.length-1],e[i]<f){t[n]=i,r.push(n);continue}for(o=0,s=r.length-1;o<s;)a=o+s>>1,e[r[a]]<f?o=a+1:s=a;f<e[r[o]]&&(o>0&&(t[n]=r[o-1]),r[o]=n)}}for(o=r.length,s=r[o-1];o-- >0;)r[o]=s,s=t[s];return r}const cu=e=>e.__isTeleport,q=Symbol(void 0),Bi=Symbol(void 0),Se=Symbol(void 0),gn=Symbol(void 0),Jt=[];let Ce=null;function W(e=!1){Jt.push(Ce=e?null:[])}function vu(){Jt.pop(),Ce=Jt[Jt.length-1]||null}let nr=1;function Ao(e){nr+=e}function ka(e){return e.dynamicChildren=nr>0?Ce||Et:null,vu(),nr>0&&Ce&&Ce.push(e),e}function B(e,t,r,n,i,o){return ka(P(e,t,r,n,i,o,!0))}function du(e,t,r,n,i){return ka(ae(e,t,r,n,i,!0))}function ti(e){return e?e.__v_isVNode===!0:!1}function pt(e,t){return e.type===t.type&&e.key===t.key}const rn="__vInternal",Va=({key:e})=>e!=null?e:null,Rr=({ref:e,ref_key:t,ref_for:r})=>e!=null?le(e)||re(e)||D(e)?{i:we,r:e,k:t,f:!!r}:e:null;function P(e,t=null,r=null,n=0,i=null,o=e===q?0:1,s=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Va(t),ref:t&&Rr(t),scopeId:qr,slotScopeIds:null,children:r,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:n,dynamicProps:i,dynamicChildren:null,appContext:null};return a?(Ki(l,r),o&128&&e.normalize(l)):r&&(l.shapeFlag|=le(r)?8:16),nr>0&&!s&&Ce&&(l.patchFlag>0||o&6)&&l.patchFlag!==32&&Ce.push(l),l}const ae=pu;function pu(e,t=null,r=null,n=0,i=null,o=!1){if((!e||e===Yf)&&(e=Se),ti(e)){const a=ot(e,t,!0);return r&&Ki(a,r),nr>0&&!o&&Ce&&(a.shapeFlag&6?Ce[Ce.indexOf(e)]=a:Ce.push(a)),a.patchFlag|=-2,a}if(Tu(e)&&(e=e.__vccOpts),t){t=hu(t);let{class:a,style:l}=t;a&&!le(a)&&(t.class=je(a)),x(l)&&(_a(l)&&!L(l)&&(l=ce({},l)),t.style=jr(l))}const s=le(e)?1:Sf(e)?128:cu(e)?64:x(e)?4:D(e)?2:0;return P(e,t,r,n,i,s,o,!0)}function hu(e){return e?_a(e)||rn in e?ce({},e):e:null}function ot(e,t,r=!1){const{props:n,ref:i,patchFlag:o,children:s}=e,a=t?gu(n||{},t):n;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:a,key:a&&Va(a),ref:t&&t.ref?r&&i?L(i)?i.concat(Rr(t)):[i,Rr(t)]:Rr(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:s,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==q?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&ot(e.ssContent),ssFallback:e.ssFallback&&ot(e.ssFallback),el:e.el,anchor:e.anchor}}function Vr(e=" ",t=0){return ae(Bi,null,e,t)}function _u(e="",t=!1){return t?(W(),du(Se,null,e)):ae(Se,null,e)}function Re(e){return e==null||typeof e=="boolean"?ae(Se):L(e)?ae(q,null,e.slice()):typeof e=="object"?tt(e):ae(Bi,null,String(e))}function tt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:ot(e)}function Ki(e,t){let r=0;const{shapeFlag:n}=e;if(t==null)t=null;else if(L(t))r=16;else if(typeof t=="object")if(n&65){const i=t.default;i&&(i._c&&(i._d=!1),Ki(e,i()),i._c&&(i._d=!0));return}else{r=32;const i=t._;!i&&!(rn in t)?t._ctx=we:i===3&&we&&(we.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else D(t)?(t={default:t,_ctx:we},r=32):(t=String(t),n&64?(r=16,t=[Vr(t)]):r=8);e.children=t,e.shapeFlag|=r}function gu(...e){const t={};for(let r=0;r<e.length;r++){const n=e[r];for(const i in n)if(i==="class")t.class!==n.class&&(t.class=je([t.class,n.class]));else if(i==="style")t.style=jr([t.style,n.style]);else if(Xr(i)){const o=t[i],s=n[i];s&&o!==s&&!(L(o)&&o.includes(s))&&(t[i]=o?[].concat(o,s):s)}else i!==""&&(t[i]=n[i])}return t}function Me(e,t,r,n=null){Ee(e,t,7,[r,n])}const $u=Ka();let mu=0;function bu(e,t,r){const n=e.type,i=(t?t.appContext:e.appContext)||$u,o={uid:mu++,vnode:e,type:n,parent:t,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new Bl(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ra(n,i),emitsOptions:Ta(n,i),emit:null,emitted:null,propsDefaults:j,inheritAttrs:n.inheritAttrs,ctx:j,data:j,props:j,attrs:j,slots:j,refs:j,setupState:j,setupContext:null,suspense:r,suspenseId:r?r.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=t?t.root:o,o.emit=Tf.bind(null,o),e.ce&&e.ce(o),o}let ue=null;const yu=()=>ue||we,St=e=>{ue=e,e.scope.on()},mt=()=>{ue&&ue.scope.off(),ue=null};function ja(e){return e.vnode.shapeFlag&4}let ir=!1;function Iu(e,t=!1){ir=t;const{props:r,children:n}=e.vnode,i=ja(e);tu(e,r,i,t),iu(e,n);const o=i?Au(e,t):void 0;return ir=!1,o}function Au(e,t){const r=e.type;e.accessCache=Object.create(null),e.proxy=ga(new Proxy(e.ctx,xf));const{setup:n}=r;if(n){const i=e.setupContext=n.length>1?Eu(e):null;St(e),Ht();const o=nt(n,e,0,[e.props,i]);if(Lt(),mt(),ta(o)){if(o.then(mt,mt),t)return o.then(s=>{No(e,s,t)}).catch(s=>{Qr(s,e,0)});e.asyncDep=o}else No(e,o,t)}else Xa(e,t)}function No(e,t,r){D(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:x(t)&&(e.setupState=ba(t)),Xa(e,r)}let Eo;function Xa(e,t,r){const n=e.type;if(!e.render){if(!t&&Eo&&!n.render){const i=n.template||Ui(e).template;if(i){const{isCustomElement:o,compilerOptions:s}=e.appContext.config,{delimiters:a,compilerOptions:l}=n,f=ce(ce({isCustomElement:o,delimiters:a},s),l);n.render=Eo(i,f)}}e.render=n.render||Fe}St(e),Ht(),Zf(e),Lt(),mt()}function Nu(e){return new Proxy(e.attrs,{get(t,r){return Ie(e,"get","$attrs"),t[r]}})}function Eu(e){const t=n=>{e.exposed=n||{}};let r;return{get attrs(){return r||(r=Nu(e))},slots:e.slots,emit:e.emit,expose:t}}function nn(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(ba(ga(e.exposed)),{get(t,r){if(r in t)return t[r];if(r in Gr)return Gr[r](e)}}))}function Tu(e){return D(e)&&"__vccOpts"in e}const ze=(e,t)=>mf(e,t,ir);function Ou(e,t,r){const n=arguments.length;return n===2?x(t)&&!L(t)?ti(t)?ae(e,null,[t]):ae(e,t):ae(e,null,t):(n>3?r=Array.prototype.slice.call(arguments,2):n===3&&ti(r)&&(r=[r]),ae(e,t,r))}const wu="3.2.41",Cu="http://www.w3.org/2000/svg",ht=typeof document<"u"?document:null,To=ht&&ht.createElement("template"),Fu={insert:(e,t,r)=>{t.insertBefore(e,r||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,r,n)=>{const i=t?ht.createElementNS(Cu,e):ht.createElement(e,r?{is:r}:void 0);return e==="select"&&n&&n.multiple!=null&&i.setAttribute("multiple",n.multiple),i},createText:e=>ht.createTextNode(e),createComment:e=>ht.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>ht.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,r,n,i,o){const s=r?r.previousSibling:t.lastChild;if(i&&(i===o||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),r),!(i===o||!(i=i.nextSibling)););else{To.innerHTML=n?`<svg>${e}</svg>`:e;const a=To.content;if(n){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,r)}return[s?s.nextSibling:t.firstChild,r?r.previousSibling:t.lastChild]}};function Su(e,t,r){const n=e._vtc;n&&(t=(t?[t,...n]:[...n]).join(" ")),t==null?e.removeAttribute("class"):r?e.setAttribute("class",t):e.className=t}function Pu(e,t,r){const n=e.style,i=le(r);if(r&&!i){for(const o in r)ri(n,o,r[o]);if(t&&!le(t))for(const o in t)r[o]==null&&ri(n,o,"")}else{const o=n.display;i?t!==r&&(n.cssText=r):t&&e.removeAttribute("style"),"_vod"in e&&(n.display=o)}}const Oo=/\s*!important$/;function ri(e,t,r){if(L(r))r.forEach(n=>ri(e,t,n));else if(r==null&&(r=""),t.startsWith("--"))e.setProperty(t,r);else{const n=Hu(e,t);Oo.test(r)?e.setProperty(Pt(n),r.replace(Oo,""),"important"):e[n]=r}}const wo=["Webkit","Moz","ms"],$n={};function Hu(e,t){const r=$n[t];if(r)return r;let n=Ct(t);if(n!=="filter"&&n in e)return $n[t]=n;n=ia(n);for(let i=0;i<wo.length;i++){const o=wo[i]+n;if(o in e)return $n[t]=o}return t}const Co="http://www.w3.org/1999/xlink";function Lu(e,t,r,n,i){if(n&&t.startsWith("xlink:"))r==null?e.removeAttributeNS(Co,t.slice(6,t.length)):e.setAttributeNS(Co,t,r);else{const o=Cl(t);r==null||o&&!Js(r)?e.removeAttribute(t):e.setAttribute(t,o?"":r)}}function Mu(e,t,r,n,i,o,s){if(t==="innerHTML"||t==="textContent"){n&&s(n,i,o),e[t]=r==null?"":r;return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=r;const l=r==null?"":r;(e.value!==l||e.tagName==="OPTION")&&(e.value=l),r==null&&e.removeAttribute(t);return}let a=!1;if(r===""||r==null){const l=typeof e[t];l==="boolean"?r=Js(r):r==null&&l==="string"?(r="",a=!0):l==="number"&&(r=0,a=!0)}try{e[t]=r}catch{}a&&e.removeAttribute(t)}function Nt(e,t,r,n){e.addEventListener(t,r,n)}function Du(e,t,r,n){e.removeEventListener(t,r,n)}function Ru(e,t,r,n,i=null){const o=e._vei||(e._vei={}),s=o[t];if(n&&s)s.value=n;else{const[a,l]=Uu(t);if(n){const f=o[t]=Ku(n,i);Nt(e,a,f,l)}else s&&(Du(e,a,s,l),o[t]=void 0)}}const Fo=/(?:Once|Passive|Capture)$/;function Uu(e){let t;if(Fo.test(e)){t={};let n;for(;n=e.match(Fo);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Pt(e.slice(2)),t]}let mn=0;const Wu=Promise.resolve(),Bu=()=>mn||(Wu.then(()=>mn=0),mn=Date.now());function Ku(e,t){const r=n=>{if(!n._vts)n._vts=Date.now();else if(n._vts<=r.attached)return;Ee(Gu(n,r.value),t,5,[n])};return r.value=e,r.attached=Bu(),r}function Gu(e,t){if(L(t)){const r=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{r.call(e),e._stopped=!0},t.map(n=>i=>!i._stopped&&n&&n(i))}else return t}const So=/^on[a-z]/,ku=(e,t,r,n,i=!1,o,s,a,l)=>{t==="class"?Su(e,n,i):t==="style"?Pu(e,r,n):Xr(t)?yi(t)||Ru(e,t,r,n,s):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Vu(e,t,n,i))?Mu(e,t,n,o,s,a,l):(t==="true-value"?e._trueValue=n:t==="false-value"&&(e._falseValue=n),Lu(e,t,n,i))};function Vu(e,t,r,n){return n?!!(t==="innerHTML"||t==="textContent"||t in e&&So.test(t)&&D(r)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||So.test(t)&&le(r)?!1:t in e}const Ze="transition",Gt="animation",Gi=(e,{slots:t})=>Ou(Fa,ju(e),t);Gi.displayName="Transition";const za={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Gi.props=ce({},Fa.props,za);const ut=(e,t=[])=>{L(e)?e.forEach(r=>r(...t)):e&&e(...t)},Po=e=>e?L(e)?e.some(t=>t.length>1):e.length>1:!1;function ju(e){const t={};for(const C in e)C in za||(t[C]=e[C]);if(e.css===!1)return t;const{name:r="v",type:n,duration:i,enterFromClass:o=`${r}-enter-from`,enterActiveClass:s=`${r}-enter-active`,enterToClass:a=`${r}-enter-to`,appearFromClass:l=o,appearActiveClass:f=s,appearToClass:u=a,leaveFromClass:d=`${r}-leave-from`,leaveActiveClass:h=`${r}-leave-active`,leaveToClass:p=`${r}-leave-to`}=e,I=Xu(i),A=I&&I[0],w=I&&I[1],{onBeforeEnter:T,onEnter:ie,onEnterCancelled:V,onLeave:G,onLeaveCancelled:Z,onBeforeAppear:$e=T,onAppear:he=ie,onAppearCancelled:H=V}=t,ee=(C,Q,be)=>{ct(C,Q?u:a),ct(C,Q?f:s),be&&be()},Y=(C,Q)=>{C._isLeaving=!1,ct(C,d),ct(C,p),ct(C,h),Q&&Q()},ve=C=>(Q,be)=>{const Bt=C?he:ie,oe=()=>ee(Q,C,be);ut(Bt,[Q,oe]),Ho(()=>{ct(Q,C?l:o),Qe(Q,C?u:a),Po(Bt)||Lo(Q,n,A,oe)})};return ce(t,{onBeforeEnter(C){ut(T,[C]),Qe(C,o),Qe(C,s)},onBeforeAppear(C){ut($e,[C]),Qe(C,l),Qe(C,f)},onEnter:ve(!1),onAppear:ve(!0),onLeave(C,Q){C._isLeaving=!0;const be=()=>Y(C,Q);Qe(C,d),xu(),Qe(C,h),Ho(()=>{!C._isLeaving||(ct(C,d),Qe(C,p),Po(G)||Lo(C,n,w,be))}),ut(G,[C,be])},onEnterCancelled(C){ee(C,!1),ut(V,[C])},onAppearCancelled(C){ee(C,!0),ut(H,[C])},onLeaveCancelled(C){Y(C),ut(Z,[C])}})}function Xu(e){if(e==null)return null;if(x(e))return[bn(e.enter),bn(e.leave)];{const t=bn(e);return[t,t]}}function bn(e){return Wr(e)}function Qe(e,t){t.split(/\s+/).forEach(r=>r&&e.classList.add(r)),(e._vtc||(e._vtc=new Set)).add(t)}function ct(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.remove(n));const{_vtc:r}=e;r&&(r.delete(t),r.size||(e._vtc=void 0))}function Ho(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let zu=0;function Lo(e,t,r,n){const i=e._endId=++zu,o=()=>{i===e._endId&&n()};if(r)return setTimeout(o,r);const{type:s,timeout:a,propCount:l}=Yu(e,t);if(!s)return n();const f=s+"end";let u=0;const d=()=>{e.removeEventListener(f,h),o()},h=p=>{p.target===e&&++u>=l&&d()};setTimeout(()=>{u<l&&d()},a+1),e.addEventListener(f,h)}function Yu(e,t){const r=window.getComputedStyle(e),n=I=>(r[I]||"").split(", "),i=n(Ze+"Delay"),o=n(Ze+"Duration"),s=Mo(i,o),a=n(Gt+"Delay"),l=n(Gt+"Duration"),f=Mo(a,l);let u=null,d=0,h=0;t===Ze?s>0&&(u=Ze,d=s,h=o.length):t===Gt?f>0&&(u=Gt,d=f,h=l.length):(d=Math.max(s,f),u=d>0?s>f?Ze:Gt:null,h=u?u===Ze?o.length:l.length:0);const p=u===Ze&&/\b(transform|all)(,|$)/.test(r[Ze+"Property"]);return{type:u,timeout:d,propCount:h,hasTransform:p}}function Mo(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((r,n)=>Do(r)+Do(e[n])))}function Do(e){return Number(e.slice(0,-1).replace(",","."))*1e3}function xu(){return document.body.offsetHeight}const Ro=e=>{const t=e.props["onUpdate:modelValue"]||!1;return L(t)?r=>Mr(t,r):t};function Zu(e){e.target.composing=!0}function Uo(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Qu={created(e,{modifiers:{lazy:t,trim:r,number:n}},i){e._assign=Ro(i);const o=n||i.props&&i.props.type==="number";Nt(e,t?"change":"input",s=>{if(s.target.composing)return;let a=e.value;r&&(a=a.trim()),o&&(a=Wr(a)),e._assign(a)}),r&&Nt(e,"change",()=>{e.value=e.value.trim()}),t||(Nt(e,"compositionstart",Zu),Nt(e,"compositionend",Uo),Nt(e,"change",Uo))},mounted(e,{value:t}){e.value=t==null?"":t},beforeUpdate(e,{value:t,modifiers:{lazy:r,trim:n,number:i}},o){if(e._assign=Ro(o),e.composing||document.activeElement===e&&e.type!=="range"&&(r||n&&e.value.trim()===t||(i||e.type==="number")&&Wr(e.value)===t))return;const s=t==null?"":t;e.value!==s&&(e.value=s)}},Ju=["ctrl","shift","alt","meta"],qu={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>Ju.some(r=>e[`${r}Key`]&&!t.includes(r))},e0=(e,t)=>(r,...n)=>{for(let i=0;i<t.length;i++){const o=qu[t[i]];if(o&&o(r,t))return}return e(r,...n)},t0=ce({patchProp:ku},Fu);let Wo;function r0(){return Wo||(Wo=lu(t0))}const n0=(...e)=>{const t=r0().createApp(...e),{mount:r}=t;return t.mount=n=>{const i=i0(n);if(!i)return;const o=t._component;!D(o)&&!o.render&&!o.template&&(o.template=i.innerHTML),i.innerHTML="";const s=r(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),s},t};function i0(e){return le(e)?document.querySelector(e):e}/**
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
*/var o0=typeof Object.defineProperty=="function"?Object.defineProperty:null,s0=o0;/**
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
*/var a0=s0;function l0(){try{return a0({},"x",{}),!0}catch{return!1}}var f0=l0;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var u0=Object.defineProperty,c0=u0;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Mt=Object.prototype,Bo=Mt.toString,Ko=Mt.__defineGetter__,Go=Mt.__defineSetter__,v0=Mt.__lookupGetter__,d0=Mt.__lookupSetter__;function p0(e,t,r){var n,i,o,s;if(typeof e!="object"||e===null||Bo.call(e)==="[object Array]")throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if(typeof r!="object"||r===null||Bo.call(r)==="[object Array]")throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if(i="value"in r,i&&(v0.call(e,t)||d0.call(e,t)?(n=e.__proto__,e.__proto__=Mt,delete e[t],e[t]=r.value,e.__proto__=n):e[t]=r.value),o="get"in r,s="set"in r,i&&(o||s))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&Ko&&Ko.call(e,t,r.get),s&&Go&&Go.call(e,t,r.set),e}var h0=p0;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _0=f0,g0=c0,$0=h0,ni;_0()?ni=g0:ni=$0;var m0=ni;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var b0=m0;function y0(e,t,r){b0(e,t,{configurable:!1,enumerable:!1,writable:!1,value:r})}var I0=y0;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var A0=I0,ki=A0;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var N0=Math.floor,E0=N0;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var T0=E0,sr=T0;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var O0=sr;function w0(e){return O0(e)===e&&e>=0}var C0=w0;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var F0=C0,Ya=F0;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var S0=sr;function P0(e){return S0(e)===e}var H0=P0;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var L0=H0,on=L0;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function M0(e){return e!==e}var D0=M0;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var R0=D0,pe=R0;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var U0=Number.POSITIVE_INFINITY,ge=U0;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var W0=Number;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var B0=W0,K0=B0;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var G0=K0,k0=G0.NEGATIVE_INFINITY,Ae=k0;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var V0=ge,j0=Ae;function X0(e){return e===V0||e===j0}var z0=X0;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Y0=z0,ar=Y0;/**
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
*/function x0(e){return Math.abs(e)}var Z0=x0;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Q0=Z0,bt=Q0;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function J0(){return typeof Symbol=="function"&&typeof Symbol("foo")=="symbol"}var q0=J0;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ec=q0,tc=ec;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var rc=tc,nc=rc();function ic(){return nc&&typeof Symbol.toStringTag=="symbol"}var oc=ic;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var sc=oc,ac=sc;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var lc=Object.prototype.toString,xa=lc;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var fc=xa;function uc(e){return fc.call(e)}var cc=uc;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var vc=Object.prototype.hasOwnProperty;function dc(e,t){return e==null?!1:vc.call(e,t)}var pc=dc;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var hc=pc,_c=hc;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var gc=typeof Symbol=="function"?Symbol.toStringTag:"",$c=gc;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var mc=_c,kt=$c,yn=xa;function bc(e){var t,r,n;if(e==null)return yn.call(e);r=e[kt],t=mc(e,kt);try{e[kt]=void 0}catch{return yn.call(e)}return n=yn.call(e),t?e[kt]=r:delete e[kt],n}var yc=bc;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ic=ac,Ac=cc,Nc=yc,ii;Ic()?ii=Nc:ii=Ac;var sn=ii;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ec=sn,Tc=typeof Uint32Array=="function";function Oc(e){return Tc&&e instanceof Uint32Array||Ec(e)==="[object Uint32Array]"}var wc=Oc;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Cc=wc,Fc=Cc;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Sc=4294967295,Pc=Sc;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Hc=typeof Uint32Array=="function"?Uint32Array:null,Lc=Hc;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Mc=Fc,In=Pc,ko=Lc;function Dc(){var e,t;if(typeof ko!="function")return!1;try{t=[1,3.14,-3.14,In+1,In+2],t=new ko(t),e=Mc(t)&&t[0]===1&&t[1]===3&&t[2]===In-2&&t[3]===0&&t[4]===1}catch{e=!1}return e}var Rc=Dc;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Uc=Rc,Wc=Uc;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Bc=typeof Uint32Array=="function"?Uint32Array:void 0,Kc=Bc;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Gc(){throw new Error("not implemented")}var kc=Gc;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Vc=Wc,jc=Kc,Xc=kc,oi;Vc()?oi=jc:oi=Xc;var Dt=oi;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var zc=sn,Yc=typeof Float64Array=="function";function xc(e){return Yc&&e instanceof Float64Array||zc(e)==="[object Float64Array]"}var Zc=xc;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Qc=Zc,Jc=Qc;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var qc=typeof Float64Array=="function"?Float64Array:null,ev=qc;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var tv=Jc,Vo=ev;function rv(){var e,t;if(typeof Vo!="function")return!1;try{t=new Vo([1,3.14,-3.14,NaN]),e=tv(t)&&t[0]===1&&t[1]===3.14&&t[2]===-3.14&&t[3]!==t[3]}catch{e=!1}return e}var nv=rv;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var iv=nv,ov=iv;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var sv=typeof Float64Array=="function"?Float64Array:void 0,av=sv;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function lv(){throw new Error("not implemented")}var fv=lv;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var uv=ov,cv=av,vv=fv,si;uv()?si=cv:si=vv;var Rt=si;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var dv=sn,pv=typeof Uint8Array=="function";function hv(e){return pv&&e instanceof Uint8Array||dv(e)==="[object Uint8Array]"}var _v=hv;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var gv=_v,$v=gv;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var mv=255,bv=mv;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var yv=typeof Uint8Array=="function"?Uint8Array:null,Iv=yv;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Av=$v,An=bv,jo=Iv;function Nv(){var e,t;if(typeof jo!="function")return!1;try{t=[1,3.14,-3.14,An+1,An+2],t=new jo(t),e=Av(t)&&t[0]===1&&t[1]===3&&t[2]===An-2&&t[3]===0&&t[4]===1}catch{e=!1}return e}var Ev=Nv;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var wv=typeof Uint8Array=="function"?Uint8Array:void 0,Cv=wv;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Fv(){throw new Error("not implemented")}var Sv=Fv;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Pv=Ov,Hv=Cv,Lv=Sv,ai;Pv()?ai=Hv:ai=Lv;var Mv=ai;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Dv=sn,Rv=typeof Uint16Array=="function";function Uv(e){return Rv&&e instanceof Uint16Array||Dv(e)==="[object Uint16Array]"}var Wv=Uv;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Bv=Wv,Kv=Bv;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Gv=65535,kv=Gv;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Vv=typeof Uint16Array=="function"?Uint16Array:null,jv=Vv;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Xv=Kv,Nn=kv,Xo=jv;function zv(){var e,t;if(typeof Xo!="function")return!1;try{t=[1,3.14,-3.14,Nn+1,Nn+2],t=new Xo(t),e=Xv(t)&&t[0]===1&&t[1]===3&&t[2]===Nn-2&&t[3]===0&&t[4]===1}catch{e=!1}return e}var Yv=zv;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var xv=Yv,Zv=xv;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Qv=typeof Uint16Array=="function"?Uint16Array:void 0,Jv=Qv;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function qv(){throw new Error("not implemented")}var e1=qv;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var t1=Zv,r1=Jv,n1=e1,li;t1()?li=r1:li=n1;var i1=li;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var o1=Mv,s1=i1,a1={uint16:s1,uint8:o1},l1=a1;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var zo=l1,Za;function f1(){var e,t;return e=new zo.uint16(1),e[0]=4660,t=new zo.uint8(e.buffer),t[0]===52}Za=f1();var u1=Za;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var c1=u1,Ut=c1;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var v1=Ut,fi;v1===!0?fi=1:fi=0;var d1=fi;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var p1=Dt,h1=Rt,_1=d1,Qa=new h1(1),g1=new p1(Qa.buffer);function $1(e){return Qa[0]=e,g1[_1]}var m1=$1;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var b1=m1,Pe=b1;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var y1=Ut,ui;y1===!0?ui=1:ui=0;var I1=ui;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var A1=Dt,N1=Rt,E1=I1,ci=new N1(1),T1=new A1(ci.buffer);function O1(e,t){return ci[0]=e,T1[E1]=t>>>0,ci[0]}var w1=O1;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var C1=w1,an=C1;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var F1=1023,Wt=F1;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function S1(e){return e===0?.3999999999940942:.3999999999940942+e*(.22222198432149784+e*.15313837699209373)}var P1=S1;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function H1(e){return e===0?.6666666666666735:.6666666666666735+e*(.2857142874366239+e*(.1818357216161805+e*.14798198605116586))}var L1=H1;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Yo=Pe,M1=an,D1=pe,R1=Wt,U1=Ae,W1=P1,B1=L1,gr=.6931471803691238,$r=19082149292705877e-26,K1=0x40000000000000,G1=.3333333333333333,xo=1048575,k1=2146435072,V1=1048576,j1=1072693248;function X1(e){var t,r,n,i,o,s,a,l,f,u,d,h;return e===0?U1:D1(e)||e<0?NaN:(r=Yo(e),o=0,r<V1&&(o-=54,e*=K1,r=Yo(e)),r>=k1?e+e:(o+=(r>>20)-R1|0,r&=xo,l=r+614244&1048576|0,e=M1(e,r|l^j1),o+=l>>20|0,a=e-1,(xo&2+r)<3?a===0?o===0?0:o*gr+o*$r:(s=a*a*(.5-G1*a),o===0?a-s:o*gr-(s-o*$r-a)):(u=a/(2+a),h=u*u,l=r-398458|0,d=h*h,f=440401-r|0,i=d*W1(d),n=h*B1(d),l|=f,s=n+i,l>0?(t=.5*a*a,o===0?a-(t-u*(t+s)):o*gr-(t-(u*(t+s)+o*$r)-a)):o===0?a-u*(a-s):o*gr-(u*(a-s)-o*$r-a))))}var z1=X1;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Y1=z1,lr=Y1;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var x1=Math.ceil,Z1=x1;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Q1=Z1,J1=Q1;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var q1=sr,ed=J1;function td(e){return e<0?ed(e):q1(e)}var rd=td;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var nd=rd,Ja=nd;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function id(e){return e===0?.0416666666666666:.0416666666666666+e*(-.001388888888887411+e*2480158728947673e-20)}var od=id;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function sd(e){return e===0?-27557314351390663e-23:-27557314351390663e-23+e*(2087572321298175e-24+e*-11359647557788195e-27)}var ad=sd;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var ld=od,fd=ad;function ud(e,t){var r,n,i,o;return o=e*e,i=o*o,n=o*ld(o),n+=i*i*fd(o),r=.5*o,i=1-r,i+(1-i-r+(o*n-e*t))}var cd=ud;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var vd=cd,qa=vd;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Zo=-.16666666666666632,dd=.00833333333332249,pd=-.0001984126982985795,hd=27557313707070068e-22,_d=-25050760253406863e-24,gd=158969099521155e-24;function $d(e,t){var r,n,i,o;return o=e*e,i=o*o,r=dd+o*(pd+o*hd)+o*i*(_d+o*gd),n=o*e,t===0?e+n*(Zo+o*r):e-(o*(.5*t-n*r)-t-n*Zo)}var md=$d;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var bd=md,el=bd;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var yd=Ut,vi;yd===!0?vi=0:vi=1;var Id=vi;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ad=Dt,Nd=Rt,Ed=Id,tl=new Nd(1),Td=new Ad(tl.buffer);function Od(e){return tl[0]=e,Td[Ed]}var wd=Od;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Cd=wd,Fd=Cd;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Sd=Ut,rl,di,pi;Sd===!0?(di=1,pi=0):(di=0,pi=1);rl={HIGH:di,LOW:pi};var Pd=rl;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Hd=Dt,Ld=Rt,nl=Pd,il=new Ld(1),Qo=new Hd(il.buffer),Md=nl.HIGH,Dd=nl.LOW;function Rd(e,t){return Qo[Md]=e,Qo[Dd]=t,il[0]}var Ud=Rd;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Wd=Ud,Vi=Wd;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Bd=1023,Kd=Bd;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Gd=-1023,kd=Gd;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Vd=-1074,jd=Vd;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Xd=Ut,ol,hi,_i;Xd===!0?(hi=1,_i=0):(hi=0,_i=1);ol={HIGH:hi,LOW:_i};var zd=ol;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Yd=Dt,xd=Rt,sl=zd,al=new xd(1),Jo=new Yd(al.buffer),Zd=sl.HIGH,Qd=sl.LOW;function Jd(e,t){return al[0]=t,e[0]=Jo[Zd],e[1]=Jo[Qd],e}var qd=Jd;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var qo=qd;function ep(e,t){return arguments.length===1?qo([0,0],e):qo(e,t)}var tp=ep;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var rp=tp,ji=rp;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var np=ji,ip=Pe,op=Vi,sp=2147483648>>>0,ap=2147483647,En=[0,0];function lp(e,t){var r,n;return np(En,e),r=En[0],r&=ap,n=ip(t),n&=sp,r|=n,op(r,En[1])}var fp=lp;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var up=fp,Xi=up;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var cp=22250738585072014e-324,vp=cp;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var dp=vp,pp=ar,hp=pe,_p=bt,gp=4503599627370496;function $p(e,t,r,n){return hp(e)||pp(e)?(t[n]=e,t[n+r]=0,t):e!==0&&_p(e)<dp?(t[n]=e*gp,t[n+r]=-52,t):(t[n]=e,t[n+r]=0,t)}var ll=$p;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var mp=ll;function bp(e){return mp(e,[0,0],1,0)}var yp=bp;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ip=ki,fl=yp,Ap=ll;Ip(fl,"assign",Ap);var Np=fl;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ep=2146435072,Tp=Ep;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Op=Pe,wp=Tp,Cp=Wt;function Fp(e){var t=Op(e);return t=(t&wp)>>>20,t-Cp|0}var Sp=Fp;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Pp=Sp,Hp=Pp;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Lp=ge,Mp=Ae,Dp=Wt,Rp=Kd,Up=kd,Wp=jd,Bp=pe,Kp=ar,Gp=Xi,kp=Np.assign,Vp=Hp,jp=ji,Xp=Vi,zp=2220446049250313e-31,Yp=2148532223>>>0,Tn=[0,0],On=[0,0];function xp(e,t){var r,n;return t===0||e===0||Bp(e)||Kp(e)?e:(kp(e,Tn,1,0),e=Tn[0],t+=Tn[1],t+=Vp(e),t<Wp?Gp(0,e):t>Rp?e<0?Mp:Lp:(t<=Up?(t+=52,n=zp):n=1,jp(On,e),r=On[0],r&=Yp,r|=t+Dp<<20,n*Xp(r,On[1])))}var Zp=xp;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Qp=Zp,zi=Qp;/**
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
*/function Jp(e,t){var r,n;for(r=[],n=0;n<t;n++)r.push(e);return r}var qp=Jp;/**
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
*/var e2=qp,t2=e2;/**
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
*/var r2=t2;function n2(e){return r2(0,e)}var i2=n2;/**
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
*/var o2=i2,s2=o2;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var a2=sr,mr=zi,ln=s2,ul=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],l2=[1.570796251296997,7549789415861596e-23,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],wn=16777216,Cn=5960464477539063e-23,br=ln(20),es=ln(20),yr=ln(20),fe=ln(20);function cl(e,t,r,n,i,o,s,a,l){var f,u,d,h,p,I,A,w,T;for(h=o,T=n[r],w=r,p=0;w>0;p++)u=Cn*T|0,fe[p]=T-wn*u|0,T=n[w-1]+u,w-=1;if(T=mr(T,i),T-=8*a2(T*.125),A=T|0,T-=A,d=0,i>0?(p=fe[r-1]>>24-i,A+=p,fe[r-1]-=p<<24-i,d=fe[r-1]>>23-i):i===0?d=fe[r-1]>>23:T>=.5&&(d=2),d>0){for(A+=1,f=0,p=0;p<r;p++)w=fe[p],f===0?w!==0&&(f=1,fe[p]=16777216-w):fe[p]=16777215-w;if(i>0)switch(i){case 1:fe[r-1]&=8388607;break;case 2:fe[r-1]&=4194303;break}d===2&&(T=1-T,f!==0&&(T-=mr(1,i)))}if(T===0){for(w=0,p=r-1;p>=o;p--)w|=fe[p];if(w===0){for(I=1;fe[o-I]===0;I++);for(p=r+1;p<=r+I;p++){for(l[a+p]=ul[s+p],u=0,w=0;w<=a;w++)u+=e[w]*l[a+(p-w)];n[p]=u}return r+=I,cl(e,t,r,n,i,o,s,a,l)}}if(T===0)for(r-=1,i-=24;fe[r]===0;)r-=1,i-=24;else T=mr(T,-i),T>=wn?(u=Cn*T|0,fe[r]=T-wn*u|0,r+=1,i+=24,fe[r]=u):fe[r]=T|0;for(u=mr(1,i),p=r;p>=0;p--)n[p]=u*fe[p],u*=Cn;for(p=r;p>=0;p--){for(u=0,I=0;I<=h&&I<=r-p;I++)u+=l2[I]*n[p+I];yr[r-p]=u}for(u=0,p=r;p>=0;p--)u+=yr[p];for(d===0?t[0]=u:t[0]=-u,u=yr[0]-u,p=1;p<=r;p++)u+=yr[p];return d===0?t[1]=u:t[1]=-u,A&7}function f2(e,t,r,n){var i,o,s,a,l,f,u,d,h;for(o=4,a=n-1,s=(r-3)/24|0,s<0&&(s=0),f=r-24*(s+1),d=s-a,h=a+o,u=0;u<=h;u++)d<0?br[u]=0:br[u]=ul[d],d+=1;for(u=0;u<=o;u++){for(i=0,d=0;d<=a;d++)i+=e[d]*br[a+(u-d)];es[u]=i}return l=o,cl(e,t,l,es,f,o,s,a,br)}var u2=f2;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var c2=Math.round,v2=c2;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var d2=v2,p2=d2;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var h2=p2,ts=Pe,_2=.6366197723675814,g2=1.5707963267341256,$2=6077100506506192e-26,m2=6077100506303966e-26,b2=20222662487959506e-37,y2=20222662487111665e-37,I2=84784276603689e-45,rs=2047;function A2(e,t,r){var n,i,o,s,a,l,f;return i=h2(e*_2),s=e-i*g2,a=i*$2,f=t>>20|0,r[0]=s-a,n=ts(r[0]),l=f-(n>>20&rs),l>16&&(o=s,a=i*m2,s=o-a,a=i*b2-(o-s-a),r[0]=s-a,n=ts(r[0]),l=f-(n>>20&rs),l>49&&(o=s,a=i*y2,s=o-a,a=i*I2-(o-s-a),r[0]=s-a)),r[1]=s-r[0]-a,i}var N2=A2;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var E2=Pe,T2=Fd,O2=Vi,w2=u2,Ir=N2,C2=0,F2=16777216,Je=1.5707963267341256,gt=6077100506506192e-26,Ar=2*gt,Nr=3*gt,Er=4*gt,S2=2147483647,P2=2146435072,H2=1048575,L2=598523,M2=1072243195,D2=1073928572,R2=1074752122,U2=1074977148,W2=1075183036,B2=1075388923,K2=1075594811,G2=1094263291,Vt=[0,0,0],jt=[0,0];function k2(e,t){var r,n,i,o,s,a,l,f;if(i=E2(e),o=i&S2|0,o<=M2)return t[0]=e,t[1]=0,0;if(o<=R2)return(o&H2)===L2?Ir(e,o,t):o<=D2?e>0?(f=e-Je,t[0]=f-gt,t[1]=f-t[0]-gt,1):(f=e+Je,t[0]=f+gt,t[1]=f-t[0]+gt,-1):e>0?(f=e-2*Je,t[0]=f-Ar,t[1]=f-t[0]-Ar,2):(f=e+2*Je,t[0]=f+Ar,t[1]=f-t[0]+Ar,-2);if(o<=K2)return o<=W2?o===U2?Ir(e,o,t):e>0?(f=e-3*Je,t[0]=f-Nr,t[1]=f-t[0]-Nr,3):(f=e+3*Je,t[0]=f+Nr,t[1]=f-t[0]+Nr,-3):o===B2?Ir(e,o,t):e>0?(f=e-4*Je,t[0]=f-Er,t[1]=f-t[0]-Er,4):(f=e+4*Je,t[0]=f+Er,t[1]=f-t[0]+Er,-4);if(o<G2)return Ir(e,o,t);if(o>=P2)return t[0]=NaN,t[1]=NaN,0;for(r=T2(e),n=(o>>20)-1046,f=O2(o-(n<<20|0),r),a=0;a<2;a++)Vt[a]=f|0,f=(f-Vt[a])*F2;for(Vt[2]=f,s=3;Vt[s-1]===C2;)s-=1;return l=w2(Vt,jt,n,s),e<0?(t[0]=-jt[0],t[1]=-jt[1],-l):(t[0]=jt[0],t[1]=jt[1],l)}var V2=k2;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var j2=V2,vl=j2;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var X2=Pe,Fn=qa,ns=el,z2=vl,Ke=[0,0],Y2=2147483647,x2=1072243195,Z2=1044381696,Q2=2146435072;function J2(e){var t,r;if(t=X2(e),t&=Y2,t<=x2)return t<Z2?1:Fn(e,0);if(t>=Q2)return NaN;switch(r=z2(e,Ke),r&3){case 0:return Fn(Ke[0],Ke[1]);case 1:return-ns(Ke[0],Ke[1]);case 2:return-Fn(Ke[0],Ke[1]);default:return ns(Ke[0],Ke[1])}}var q2=J2;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e3=q2,t3=e3;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var r3=Pe,is=qa,Sn=el,n3=vl,i3=2147483647,o3=2146435072,s3=1072243195,a3=1045430272,Ge=[0,0];function l3(e){var t,r;if(t=r3(e),t&=i3,t<=s3)return t<a3?e:Sn(e,0);if(t>=o3)return NaN;switch(r=n3(e,Ge),r&3){case 0:return Sn(Ge[0],Ge[1]);case 1:return is(Ge[0],Ge[1]);case 2:return-Sn(Ge[0],Ge[1]);default:return-is(Ge[0],Ge[1])}}var f3=l3;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var u3=f3,dl=u3;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var c3=3.141592653589793,Yi=c3;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var v3=pe,d3=ar,os=t3,Pn=dl,p3=bt,Xt=Xi,zt=Yi;function h3(e){var t,r;return v3(e)?NaN:d3(e)?NaN:(r=e%2,t=p3(r),t===0||t===1?Xt(0,r):t<.25?Pn(zt*r):t<.75?(t=.5-t,Xt(os(zt*t),r)):t<1.25?(r=Xt(1,r)-r,Pn(zt*r)):t<1.75?(t-=1.5,-Xt(os(zt*t),r)):(r-=Xt(2,r),Pn(zt*r)))}var _3=h3;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var g3=_3,$3=g3;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function m3(e){return e===0?.06735230105312927:.06735230105312927+e*(.007385550860814029+e*(.0011927076318336207+e*(.00022086279071390839+e*25214456545125733e-21)))}var b3=m3;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function y3(e){return e===0?.020580808432516733:.020580808432516733+e*(.0028905138367341563+e*(.0005100697921535113+e*(.00010801156724758394+e*44864094961891516e-21)))}var I3=y3;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function A3(e){return e===0?1.3920053346762105:1.3920053346762105+e*(.7219355475671381+e*(.17193386563280308+e*(.01864591917156529+e*(.0007779424963818936+e*7326684307446256e-21))))}var N3=A3;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function E3(e){return e===0?.21498241596060885:.21498241596060885+e*(.325778796408931+e*(.14635047265246445+e*(.02664227030336386+e*(.0018402845140733772+e*3194753265841009e-20))))}var T3=E3;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function O3(e){return e===0?-.032788541075985965:-.032788541075985965+e*(.006100538702462913+e*(-.0014034646998923284+e*.00031563207090362595))}var w3=O3;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function C3(e){return e===0?.01797067508118204:.01797067508118204+e*(-.0036845201678113826+e*(.000881081882437654+e*-.00031275416837512086))}var F3=C3;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function S3(e){return e===0?-.010314224129834144:-.010314224129834144+e*(.0022596478090061247+e*(-.0005385953053567405+e*.0003355291926355191))}var P3=S3;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function H3(e){return e===0?.6328270640250934:.6328270640250934+e*(1.4549225013723477+e*(.9777175279633727+e*(.22896372806469245+e*.013381091853678766)))}var L3=H3;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function M3(e){return e===0?2.4559779371304113:2.4559779371304113+e*(2.128489763798934+e*(.7692851504566728+e*(.10422264559336913+e*.003217092422824239)))}var D3=M3;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function R3(e){return e===0?.08333333333333297:.08333333333333297+e*(-.0027777777772877554+e*(.0007936505586430196+e*(-.00059518755745034+e*(.0008363399189962821+e*-.0016309293409657527))))}var U3=R3;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var W3=pe,B3=ar,K3=bt,At=lr,G3=Ja,k3=$3,V3=Yi,Hn=ge,j3=b3,X3=I3,z3=N3,Y3=T3,x3=w3,Z3=F3,Q3=P3,J3=L3,q3=D3,eh=U3,th=.07721566490153287,rh=.3224670334241136,nh=1,ih=-.07721566490153287,oh=.48383612272381005,sh=-.1475877229945939,ah=.06462494023913339,lh=-.07721566490153287,fh=1,uh=.4189385332046727,Tr=1.4616321449683622,ch=4503599627370496,vh=0x400000000000000,dh=8470329472543003e-37,ss=1.4616321449683622,ph=-.12148629053584961,hh=-3638676997039505e-33;function _h(e){var t,r,n,i,o,s,a,l,f,u,d,h,p;if(W3(e)||B3(e))return e;if(e===0)return Hn;if(e<0?(t=!0,e=-e):t=!1,e<dh)return-At(e);if(t){if(e>=ch||(f=k3(e),f===0))return Hn;r=At(V3/K3(f*e))}if(e===1||e===2)return 0;if(e<2)switch(e<=.9?(p=-At(e),e>=Tr-1+.27?(d=1-e,n=0):e>=Tr-1-.27?(d=e-(ss-1),n=1):(d=e,n=2)):(p=0,e>=Tr+.27?(d=2-e,n=0):e>=Tr-.27?(d=e-ss,n=1):(d=e-1,n=2)),n){case 0:h=d*d,s=th+h*j3(h),o=h*(rh+h*X3(h)),a=d*s+o,p+=a-.5*d;break;case 1:h=d*d,u=h*d,s=oh+u*x3(u),o=sh+u*Z3(u),i=ah+u*Q3(u),a=h*s-(hh-u*(o+d*i)),p+=ph+a;break;case 2:s=d*(lh+d*J3(d)),o=fh+d*q3(d),p+=-.5*d+s/o;break}else if(e<8)switch(n=G3(e),d=e-n,a=d*(ih+d*Y3(d)),l=nh+d*z3(d),p=.5*d+a/l,h=1,n){case 7:h*=d+6;case 6:h*=d+5;case 5:h*=d+4;case 4:h*=d+3;case 3:h*=d+2,p+=At(h)}else e<vh?(f=At(e),h=1/e,d=h*h,u=uh+h*eh(d),p=(e-.5)*(f-1)+u):p=e*(At(e)-1);return t&&(p=r-p),p}var gh=_h;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $h=gh,mh=$h;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function bh(e){return e===0?.6666666666666735:.6666666666666735+e*(.3999999999940942+e*(.2857142874366239+e*(.22222198432149784+e*(.1818357216161805+e*(.15313837699209373+e*.14798198605116586)))))}var yh=bh;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Ih=pe,as=Pe,ls=an,Ah=ge,Nh=Ae,fs=Wt,Eh=yh,Ln=.6931471803691238,Mn=19082149292705877e-26,Th=.41421356237309503,Oh=-.2928932188134525,wh=1862645149230957e-24,Ch=5551115123125783e-32,Fh=9007199254740992,Sh=.6666666666666666;function Ph(e){var t,r,n,i,o,s,a,l,f,u;if(e<-1||Ih(e))return NaN;if(e===-1)return Nh;if(e===Ah||e===0)return e;if(e<0?n=-e:n=e,u=1,n<Th){if(n<wh)return n<Ch?e:e-e*e*.5;e>Oh&&(u=0,i=e,r=1)}return u!==0&&(n<Fh?(f=1+e,r=as(f),u=(r>>20)-fs,u>0?o=1-(f-e):o=e-(f-1),o/=f):(f=e,r=as(f),u=(r>>20)-fs,o=0),r&=1048575,r<434334?f=ls(f,r|1072693248):(u+=1,f=ls(f,r|1071644672),r=1048576-r>>2),i=f-1),t=.5*i*i,r===0?i===0?(o+=u*Mn,u*Ln+o):(l=t*(1-Sh*i),u*Ln-(l-(u*Mn+o)-i)):(s=i/(2+i),a=s*s,l=a*Eh(a),u===0?i-(t-s*(t+l)):u*Ln-(t-(s*(t+l)+(u*Mn+o))-i))}var Hh=Ph;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Lh=Hh,xi=Lh;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Mh=Ae;function Dh(e){return e===0&&1/e===Mh}var Rh=Dh;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Uh=Rh,pl=Uh;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Wh=2.5066282746310007,Bh=Wh;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Kh=on;function Gh(e){return Kh(e/2)}var kh=Gh;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Vh=kh,jh=Vh;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var us=jh;function Xh(e){return e>0?us(e-1):us(e+1)}var zh=Xh;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Yh=zh,hl=Yh;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var xh=Math.sqrt,Zh=xh;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Qh=Zh,Jh=Qh;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var qh=Ut,gi;qh===!0?gi=0:gi=1;var e6=gi;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var t6=Dt,r6=Rt,n6=e6,$i=new r6(1),i6=new t6($i.buffer);function o6(e,t){return $i[0]=e,i6[n6]=t>>>0,$i[0]}var s6=o6;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var a6=s6,fn=a6;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function l6(e){return e|0}var f6=l6;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var u6=f6,_l=u6;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var cs=hl,c6=Xi,v6=Ae,Or=ge;function d6(e,t){return t===v6?Or:t===Or?0:t>0?cs(t)?e:0:cs(t)?c6(Or,e):Or}var p6=d6;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var h6=Pe,_6=2147483647,g6=1072693247,wr=1e300,Cr=1e-300;function $6(e,t){var r,n;return n=h6(e),r=n&_6,r<=g6?t<0?wr*wr:Cr*Cr:t>0?wr*wr:Cr*Cr}var m6=$6;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var b6=bt,vs=ge;function y6(e,t){return e===-1?(e-e)/(e-e):e===1?1:b6(e)<1==(t===vs)?0:vs}var I6=y6;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function A6(e){return e===0?.5999999999999946:.5999999999999946+e*(.4285714285785502+e*(.33333332981837743+e*(.272728123808534+e*(.23066074577556175+e*.20697501780033842))))}var N6=A6;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var E6=Pe,Fr=fn,ds=an,T6=Wt,O6=N6,w6=1048575,ps=1048576,C6=1072693248,F6=536870912,S6=524288,P6=20,H6=9007199254740992,L6=.9617966939259756,M6=.9617967009544373,D6=-7028461650952758e-24,R6=[1,1.5],U6=[0,.5849624872207642],W6=[0,1350039202129749e-23];function B6(e,t,r){var n,i,o,s,a,l,f,u,d,h,p,I,A,w,T,ie,V,G,Z,$e,he,H;return $e=0,r<ps&&(t*=H6,$e-=53,r=E6(t)),$e+=(r>>P6)-T6|0,he=r&w6|0,r=he|C6|0,he<=235662?H=0:he<767610?H=1:(H=0,$e+=1,r-=ps),t=ds(t,r),u=R6[H],G=t-u,Z=1/(t+u),i=G*Z,s=Fr(i,0),n=(r>>1|F6)+S6,n+=H<<18,l=ds(0,n),f=t-(l-u),a=Z*(G-s*l-s*f),o=i*i,V=o*o*O6(o),V+=a*(s+i),o=s*s,l=3+o+V,l=Fr(l,0),f=V-(l-3-o),G=s*l,Z=a*l+f*i,h=G+Z,h=Fr(h,0),p=Z-(h-G),I=M6*h,A=D6*h+p*L6+W6[H],d=U6[H],ie=$e,w=I+A+d+ie,w=Fr(w,0),T=A-(w-ie-d-I),e[0]=w,e[1]=T,e}var K6=B6;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function G6(e){return e===0?.5:.5+e*(-.3333333333333333+e*.25)}var k6=G6;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var V6=fn,j6=k6,X6=1.4426950408889634,z6=1.4426950216293335,Y6=19259629911266175e-24;function x6(e,t){var r,n,i,o,s,a;return i=t-1,o=i*i*j6(i),s=z6*i,a=i*Y6-o*X6,n=s+a,n=V6(n,0),r=a-(n-s),e[0]=n,e[1]=r,e}var Z6=x6;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Q6=.6931471805599453,J6=Q6;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function q6(e){return e===0?.16666666666666602:.16666666666666602+e*(-.0027777777777015593+e*(6613756321437934e-20+e*(-16533902205465252e-22+e*41381367970572385e-24)))}var e_=q6;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var t_=Pe,hs=an,r_=fn,n_=_l,i_=zi,o_=J6,_s=Wt,s_=e_,gs=2147483647,$s=1048575,ms=1048576,a_=1071644672,Yt=20,l_=.6931471824645996,f_=-1904654299957768e-24;function u_(e,t,r){var n,i,o,s,a,l,f,u,d,h,p;return h=e&gs|0,p=(h>>Yt)-_s|0,d=0,h>a_&&(d=e+(ms>>p+1)>>>0,p=((d&gs)>>Yt)-_s|0,n=(d&~($s>>p))>>>0,o=hs(0,n),d=(d&$s|ms)>>Yt-p>>>0,e<0&&(d=-d),t-=o),o=r+t,o=r_(o,0),a=o*l_,l=(r-(o-t))*o_+o*f_,u=a+l,f=l-(u-a),o=u*u,i=u-o*s_(o),s=u*i/(i-2)-(f+u*f),u=1-(s-u),e=t_(u),e=n_(e),e+=d<<Yt>>>0,e>>Yt<=0?u=i_(u,d):u=hs(u,e),u}var c_=u_;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var bs=pe,ys=hl,Is=ar,v_=on,As=Jh,d_=bt,Dn=ji,p_=fn,Ns=_l,h_=Ae,__=ge,g_=p6,$_=m6,m_=I6,b_=K6,y_=Z6,I_=c_,Rn=2147483647,A_=1072693247,N_=1105199104,E_=1139802112,Es=1083179008,T_=1072693248,O_=1083231232,w_=3230714880>>>0,Ts=31,qe=1e300,et=1e-300,C_=8008566259537294e-32,ke=[0,0],Os=[0,0];function gl(e,t){var r,n,i,o,s,a,l,f,u,d,h,p,I,A,w,T;if(bs(e)||bs(t))return NaN;if(Dn(ke,t),a=ke[0],l=ke[1],l===0){if(t===0)return 1;if(t===1)return e;if(t===-1)return 1/e;if(t===.5)return As(e);if(t===-.5)return 1/As(e);if(t===2)return e*e;if(t===3)return e*e*e;if(t===4)return e*=e,e*e;if(Is(t))return m_(e,t)}if(Dn(ke,e),o=ke[0],s=ke[1],s===0){if(o===0)return g_(e,t);if(e===1)return 1;if(e===-1&&ys(t))return-1;if(Is(e))return e===h_?gl(-0,-t):t<0?0:__}if(e<0&&v_(t)===!1)return(e-e)/(e-e);if(i=d_(e),r=o&Rn|0,n=a&Rn|0,f=o>>>Ts|0,u=a>>>Ts|0,f&&ys(t)?f=-1:f=1,n>N_){if(n>E_)return $_(e,t);if(r<A_)return u===1?f*qe*qe:f*et*et;if(r>T_)return u===0?f*qe*qe:f*et*et;I=y_(Os,i)}else I=b_(Os,i,r);if(d=p_(t,0),p=(t-d)*I[0]+t*I[1],h=d*I[0],A=p+h,Dn(ke,A),w=Ns(ke[0]),T=Ns(ke[1]),w>=Es){if((w-Es|T)!==0||p+C_>A-h)return f*qe*qe}else if((w&Rn)>=O_&&((w-w_|T)!==0||p<=A-h))return f*et*et;return A=I_(w,h,p),f*A}var F_=gl;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var S_=F_,$l=S_;/**
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
*/function P_(e){return e===0?.16666666666666602:.16666666666666602+e*(-.0027777777777015593+e*(6613756321437934e-20+e*(-16533902205465252e-22+e*41381367970572385e-24)))}var H_=P_;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var L_=zi,M_=H_;function D_(e,t,r){var n,i,o,s;return n=e-t,i=n*n,o=n-i*M_(i),s=1-(t-n*o/(2-o)-e),L_(s,r)}var R_=D_;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var U_=pe,ws=Ja,W_=Ae,Cs=ge,B_=R_,K_=.6931471803691238,G_=19082149292705877e-26,Fs=1.4426950408889634,k_=709.782712893384,V_=-745.1332191019411,ml=1/(1<<28),j_=-ml;function X_(e){var t,r,n;return U_(e)||e===Cs?e:e===W_?0:e>k_?Cs:e<V_?0:e>j_&&e<ml?1+e:(e<0?n=ws(Fs*e-.5):n=ws(Fs*e+.5),t=e-n*K_,r=n*G_,B_(t,r,n))}var z_=X_;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Y_=z_,Zi=Y_;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function x_(e){return e===0?.08333333333334822:.08333333333334822+e*(.0034722222160545866+e*(-.0026813261780578124+e*(-.00022954996161337813+e*.0007873113957930937)))}var Z_=x_;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Q_=Bh,Ss=$l,J_=Zi,q_=Z_,e4=143.01608;function t4(e){var t,r,n;return t=1/e,t=1+t*q_(t),r=J_(e),e>e4?(n=Ss(e,.5*e-.25),r=n*(n/r)):r=Ss(e,e-.5)/r,Q_*r*t}var r4=t4;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var n4=.5772156649015329,i4=n4;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var o4=i4;function s4(e,t){return t/((1+o4*e)*e)}var a4=s4;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function l4(e){var t,r,n;return e===0?1:(e<0?t=-e:t=e,t<=1?(r=1+e*(.4942148268014971+e*(.20744822764843598+e*(.04763678004571372+e*(.010421379756176158+e*(.0011913514700658638+e*(.00016011952247675185+e*0)))))),n=1+e*(.0714304917030273+e*(-.23459179571824335+e*(.035823639860549865+e*(.011813978522206043+e*(-.004456419138517973+e*(.0005396055804933034+e*-23158187332412014e-21))))))):(e=1/e,r=0+e*(.00016011952247675185+e*(.0011913514700658638+e*(.010421379756176158+e*(.04763678004571372+e*(.20744822764843598+e*(.4942148268014971+e*1)))))),n=-23158187332412014e-21+e*(.0005396055804933034+e*(-.004456419138517973+e*(.011813978522206043+e*(.035823639860549865+e*(-.23459179571824335+e*(.0714304917030273+e*1))))))),r/n)}var f4=l4;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var u4=pe,c4=on,v4=pl,Ps=bt,d4=sr,p4=dl,Hs=ge,Ls=Ae,Ms=Yi,Ds=r4,Rs=a4,h4=f4;function _4(e){var t,r,n,i;if(c4(e)&&e<0||e===Ls||u4(e))return NaN;if(e===0)return v4(e)?Ls:Hs;if(e>171.61447887182297)return Hs;if(e<-170.5674972726612)return 0;if(r=Ps(e),r>33)return e>=0?Ds(e):(n=d4(r),(n&1)===0?t=-1:t=1,i=r-n,i>.5&&(n+=1,i=r-n),i=r*p4(Ms*i),t*Ms/(Ps(i)*Ds(r)));for(i=1;e>=3;)e-=1,i*=e;for(;e<0;){if(e>-1e-9)return Rs(e,i);i/=e,e+=1}for(;e<2;){if(e<1e-9)return Rs(e,i);i/=e,e+=1}return e===2?i:(e-=2,i*h4(e))}var g4=_4;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $4=g4,m4=$4;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var b4=ge;function y4(e){return e===0&&1/e===b4}var I4=y4;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var A4=I4,N4=A4;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Us=N4,Un=pe,E4=Ae,Sr=ge;function T4(e,t){var r,n,i,o;if(r=arguments.length,r===2)return Un(e)||Un(t)?NaN:e===Sr||t===Sr?Sr:e===t&&e===0?Us(e)?e:t:e>t?e:t;for(n=E4,o=0;o<r;o++){if(i=arguments[o],Un(i)||i===Sr)return i;(i>n||i===n&&i===0&&Us(i))&&(n=i)}return n}var O4=T4;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var w4=O4,C4=w4;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ws=pl,Wn=pe,Pr=Ae,F4=ge;function S4(e,t){var r,n,i,o;if(r=arguments.length,r===2)return Wn(e)||Wn(t)?NaN:e===Pr||t===Pr?Pr:e===t&&e===0?Ws(e)?e:t:e<t?e:t;for(n=F4,o=0;o<r;o++){if(i=arguments[o],Wn(i)||i===Pr)return i;(i<n||i===n&&i===0&&Ws(i))&&(n=i)}return n}var P4=S4;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var H4=P4,L4=H4;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var M4=.9189385332046728,D4=M4;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
* The code is adapted from the Fortran routine from the FNLIB library of the [SLATEC Common Mathematical Library]{@link http://www.netlib.no/netlib/slatec/fnlib/}.
*
* The original code was developed by W. Fullerton of Los Alamos Scientific Laboratory, a governmental institution, and is therefore public domain.
*/var bl=[1276642195630063e-46,-3401102254316749e-45,1025680058010471e-43,-35475981581010704e-43,14292273559424982e-41,-6831888753985767e-39,39628370610464347e-38,-2868042435334643e-35,2683181998482699e-33,-3399615005417722e-31,6221098041892606e-29,-1809129475572494e-26,981082564692473e-23,-1384948176067564e-20,.16663894804518634],R4=bl.length;function U4(e){var t,r,n,i,o;if(e<-1.1||e>1.1)return NaN;for(n=0,i=0,t=2*e,o=0;o<R4;o++)r=n,n=i,i=t*n-r+bl[o];return(i-r)*.5}var W4=U4;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
* The code is adapted from the Fortran routine from the FNLIB library of the [SLATEC Common Mathematical Library]{@link http://www.netlib.no/netlib/fn/d9lgmc.f}.
*
* The original code was developed by W. Fullerton of Los Alamos Scientific Laboratory, a governmental institution, and is therefore public domain.
*/var B4=$l,K4=W4,G4=9490626562425156e-8,k4=3745194030963158e291;function V4(e){return e<10?NaN:e>=k4?0:e<G4?K4(2*B4(10/e,2)-1)/e:1/(e*12)}var j4=V4;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
* The code is adapted from the Fortran routine from the FNLIB library of the [SLATEC Common Mathematical Library]{@link http://www.netlib.no/netlib/slatec/fnlib/albeta.f}.
*
* The original code was developed by W. Fullerton of Los Alamos Scientific Laboratory, a governmental institution, and is therefore public domain.
*/var X4=mh,Bs=xi,Bn=m4,z4=C4,Y4=L4,Hr=lr,x4=D4,Z4=Ae,Ks=ge,xt=j4;function Q4(e,t){var r,n,i;return n=Y4(e,t),i=z4(e,t),n<0?NaN:n===0?Ks:i===Ks?Z4:n>=10?(r=xt(n)+xt(i)-xt(n+i),-.5*Hr(i)+x4+r+(n-.5)*Hr(n/(n+i))+i*Bs(-n/(n+i))):i>=10?(r=xt(i)-xt(n+i),X4(n)+r+n-n*Hr(n+i)+(i-.5)*Bs(-n/(n+i))):Hr(Bn(n)*(Bn(i)/Bn(n+i)))}var J4=Q4;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var q4=J4,eg=q4;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Gs=on,ks=pe,tg=eg,rg=bt,Vs=lr,js=Ae;function mi(e,t){return ks(e)||ks(t)?NaN:!Gs(e)||!Gs(t)?NaN:e<0?mi(-e+t-1,t):t<0?js:t===0?0:t===1?Vs(rg(e)):e<t?js:e-t<2?mi(e,e-t):-Vs(e+1)-tg(e-t+1,t+1)}var ng=mi;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ig=ng,yl=ig;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Xs=Ya,og=yl,Kn=pe,sg=xi,ag=Zi,lg=lr,fg=ge;function ug(e,t,r){var n;return Kn(e)||Kn(t)||Kn(r)||r<0||r>1||!Xs(t)||t===fg?NaN:Xs(e)?e>t?0:r===0?e===0?1:0:r===1?e===t?1:0:(n=og(t,e),n+=e*lg(r)+(t-e)*sg(-r),ag(n)):0}var cg=ug;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function vg(e){return t;function t(){return e}}var dg=vg;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var pg=dg,Il=pg;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var zs=pe;function hg(e,t){return zs(e)||zs(t)?NaN:e===t?1:0}var _g=hg;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var gg=Il,Ys=pe;function $g(e){if(Ys(e))return gg(NaN);return t;function t(r){return Ys(r)?NaN:r===e?1:0}}var mg=$g;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var bg=ki,Al=_g,yg=mg;bg(Al,"factory",yg);var Ig=Al;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var xs=Ya,Ag=Il,Ng=yl,Zs=Ig.factory,Gn=pe,Eg=xi,Tg=Zi,Og=lr,wg=ge;function Cg(e,t){if(Gn(e)||Gn(t)||!xs(e)||e===wg||t<0||t>1)return Ag(NaN);if(t===0||e===0)return Zs(0);if(t===1)return Zs(e);return r;function r(n){var i;return Gn(n)?NaN:xs(n)?n>e?0:(i=Ng(e,n),i+=n*Og(t)+(e-n)*Eg(-t),Tg(i)):0}}var Fg=Cg;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Sg=ki,Nl=cg,Pg=Fg;Sg(Nl,"factory",Pg);var Hg=Nl;const Qs={E:.1249,T:.0928,A:.0804,O:.0764,I:.0757,N:.0723,S:.0651,R:.0628,H:.0505,L:.0407,D:.0382,C:.0334,U:.0273,M:.0251,F:.024,P:.0214,G:.0187,W:.0168,Y:.0166,B:.0148,V:.0105,K:.0054,X:.0023,J:.0016,Q:.0012,Z:9e-4};function Lg(e,t){const r={};let n=0;for(const i of Object.keys(Qs))n+=r[i]=Hg(e,t,Qs[i]);for(const i of Object.keys(r))r[i]/=n;return r}function Mg(e){let t=0;for(let r=0;r<e.length;++r)/[a-z]/i.test(e[r])&&++t;return t}function Dg(e,t){let r=0;for(let n=0;n<e.length;++n)t===e[n]&&++r;return r}function Rg(...e){return e.length?(e.sort((r,n)=>n-r),e.slice(1).map((r,n)=>e[n]-r).slice(0,3)):[]}function Ug(e){const t={},r=Mg(e);for(let n=0;n<26;++n){const i=String.fromCharCode(n+65),o=Dg(e,i);if(o){const s=Lg(o,r);t[i]={count:o,pValues:s,topPDifs:Rg(...Object.values(s))}}}return{totalLetters:r,letterDetails:t}}function Wg(...e){const t=Math.min(...e),r=Math.max(...e)-t;return e.map(n=>(n-t)/r)}function Bg(...e){const t=[...e].sort((r,n)=>r-n);return e.map(r=>t.indexOf(r)/(t.length-1))}function Kg(e,t,r){const n=(a,l)=>Math.round(a+(l-a)*r),i=n(e.r,t.r),o=n(e.g,t.g),s=n(e.b,t.b);return{r:i,g:o,b:s}}const Gg=["disabled"],kg={class:"row"},Vg=["onClick","title"],jg=["title"],Xg=or({__name:"Keyboard",props:{decryptionKeys:null,pValues:null},emits:["key","enter"],setup(e){const t=e;let r=Qt(!1);const n=["QWERTYUIOP".split(""),"ASDFGHJKL".split(""),["rank",..."ZXCVBNM".split(""),"enter"]],i=ze(()=>!Object.keys(t.pValues).length),o=ze(()=>{const s=new Set(Object.values(t.decryptionKeys)),a={r:0,g:255,b:0},l={r:255,g:0,b:0},u=(r.value?Bg:Wg)(...Object.values(t.pValues)),d=Object.fromEntries(Object.keys(t.pValues).map((h,p)=>[h,u[p]]));return n.map(h=>h.map(p=>{var I;return p.length===1?{value:p,colour:Kg(l,a,d[p]||0),p:`probability=${((I=t.pValues[p])==null?void 0:I.toFixed(3))||"[Select a letter]"}`,isInUse:s.has(p)}:{value:p}}))});return(s,a)=>(W(),B("fieldset",{id:"keyboard",disabled:J(i)},[(W(!0),B(q,null,We(J(o),(l,f)=>(W(),B("div",kg,[P("div",{class:je(`spacer${f}`)},null,2),(W(!0),B(q,null,We(l,u=>(W(),B(q,{key:u},[u.colour?(W(),B("button",{key:0,type:"button",class:je(u.isInUse?"used-key":""),style:jr({borderColor:`rgb(${u.colour.r},${u.colour.g},${u.colour.b})`}),onClick:d=>s.$emit("key",u.value),title:u.p},[P("span",null,se(u.value),1)],14,Vg)):u.value==="rank"?(W(),B("button",{key:1,type:"button",class:je(["non-alpha",J(r)?"depressed":""]),onClick:a[0]||(a[0]=d=>re(r)?r.value=!J(r):r=!J(r)),title:`Show red (unlikely) to green (likely) graduated according to probability ${J(r)?"value":"rank only"}`},[P("span",null,se(u.value),1)],10,jg)):(W(),B("button",{key:2,type:"button",class:"non-alpha",onClick:a[1]||(a[1]=d=>s.$emit("enter"))},[P("span",null,se(u.value),1)]))],64))),128)),P("div",{class:je(`spacer${f}`)},null,2)]))),256))],8,Gg))}});const fr=(e,t)=>{const r=e.__vccOpts||e;for(const[n,i]of t)r[n]=i;return r},zg=fr(Xg,[["__scopeId","data-v-1f386722"]]),Yg={id:"coded-text"},xg={key:0,class:"non-alpha"},Zg=["title","onClick"],Qg=or({__name:"EncodedText",props:{modelValue:null,activeLetter:null,decryptionKeys:null},emits:["update:active-letter"],setup(e,{emit:t}){const r=e;let n=0;const i=ze(()=>r.modelValue.split(`
`).map(s=>s.split("").map(a=>{const l="l"+ ++n;if(!/[a-z]/i.test(a))return{id:l,display:a,isNonAlpha:!0};const f=a.toUpperCase();if(r.decryptionKeys[a]){let u=r.decryptionKeys[a];return a!==f&&(u=u.toLowerCase()),{id:l,display:u,original:a,uc:f}}return{id:l,display:a,uc:f}})));function o(s){t("update:active-letter",s)}return(s,a)=>(W(),B("div",Yg,[(W(!0),B(q,null,We(J(i),l=>(W(),B("div",null,[(W(!0),B(q,null,We(l,f=>(W(),B(q,{key:f.id},[f.isNonAlpha?(W(),B("span",xg,se(f.display),1)):(W(),B("span",{key:1,class:je(["alpha",{current:f.uc===e.activeLetter,decrypted:f.original}]),title:f.original?`decoded from ${f.original}`:"",onClick:u=>o(f.uc)},se(f.display),11,Zg))],64))),128))]))),256))]))}});const Jg=fr(Qg,[["__scopeId","data-v-6b997271"]]),Qi=e=>(Li("data-v-037f63ce"),e=e(),Mi(),e),qg={id:"letter-details"},e$=Qi(()=>P("td",null,null,-1)),t$=["onClick"],r$=Qi(()=>P("th",null," count ",-1)),n$=Qi(()=>P("th",null," decoded ",-1)),i$=or({__name:"LetterDetails",props:{decryptionKeys:null,stats:null,activeLetter:null},setup(e){const t=e,r=ze(()=>Object.keys(t.stats).map(n=>t.decryptionKeys[n]||""));return(n,i)=>(W(),B("div",qg,[P("table",null,[P("tbody",null,[P("tr",null,[e$,(W(!0),B(q,null,We(Object.keys(e.stats),o=>(W(),B("th",{key:o},[P("a",{href:"#",class:je(e.activeLetter===o?"active":""),onClick:e0(s=>n.$emit("update:active-letter",o),["prevent"])},se(o),11,t$)]))),128))]),P("tr",null,[r$,(W(!0),B(q,null,We(e.stats,(o,s)=>(W(),B("td",{key:s},se(o.count),1))),128))]),P("tr",null,[n$,(W(!0),B(q,null,We(J(r),o=>(W(),B("td",{key:o},se(o),1))),128))]),(W(),B(q,null,We(3,o=>P("tr",null,[P("th",null," p dif "+se(o),1),(W(!0),B(q,null,We(e.stats,(s,a)=>(W(),B("td",{key:a},se(s.topPDifs[o-1].toFixed(3)),1))),128))])),64))])])]))}});const o$=fr(i$,[["__scopeId","data-v-037f63ce"]]),El=e=>(Li("data-v-0e9b0428"),e=e(),Mi(),e),s$={id:"letter-details"},a$=El(()=>P("tr",null,[P("th",{rowspan:"2"},"Encoded"),P("th",{rowspan:"2"},"Decodes to"),P("th",{rowspan:"2"},"Occurences"),P("th",{colspan:"3"},"probabilities")],-1)),l$=El(()=>P("tr",null,[P("th",null,"Value"),P("th",null,"Rank / 26"),P("th",null,"max (all letters)")],-1)),f$=or({__name:"DecryptionDetails",props:{decryptionKeys:null,stats:null},setup(e){const t=e,r=ze(()=>Object.keys(t.decryptionKeys).map(n=>{const i=t.decryptionKeys[n],o=t.stats[n],s=o.pValues[i],a=Object.values(o.pValues).sort((f,u)=>u-f),l=f=>f.toFixed(4);return{encoded:n,decoded:i,count:o.count,pValue:l(s),rank:a.indexOf(s)+1,maxP:l(a[0])}}));return ze(()=>Object.keys(t.stats).map(n=>t.decryptionKeys[n]||"")),(n,i)=>(W(),B("div",s$,[P("table",null,[P("tbody",null,[a$,l$,(W(!0),B(q,null,We(J(r),o=>(W(),B("tr",{key:o.encoded},[P("td",null,se(o.encoded),1),P("td",null,se(o.decoded),1),P("td",null,se(o.count),1),P("td",null,se(o.pValue),1),P("td",null,se(o.rank),1),P("td",null,se(o.maxP),1)]))),128))])])]))}});const u$=fr(f$,[["__scopeId","data-v-0e9b0428"]]),Ji=e=>(Li("data-v-514e56d6"),e=e(),Mi(),e),c$={key:0,class:"message"},v$=Ji(()=>P("header",null,[P("h1",null,"Decryptor")],-1)),d$={key:0},p$={key:1},h$=["disabled"],_$={key:2},g$=Ji(()=>P("hr",null,null,-1)),$$=Ji(()=>P("footer",null,[P("small",null,[Vr(" This project is under an MIT licence and is hosted at "),P("a",{href:"https://github.com/mcshaz/letter-swap-decoder"}," github.com/mcshaz/letter-swap-decoder "),Vr(". It borrows heavily from Evan You's Vue version of Wordle on StackBlitz "),P("a",{href:"https://stackblitz.com/edit/vitejs-vite-jjggsx"}," stackblitz.com/edit/vitejs-vite-jjggsx ")])],-1)),m$=or({__name:"Game",setup(e){let t=Qt(""),r=Qt(""),n=Qt(""),i=Qt(0);const o=Zr({}),s=ze(()=>Ug(r.value.toUpperCase())),a=ze(()=>n.value?s.value.letterDetails[n.value]:{pValues:{}});Di(()=>{window.addEventListener("keyup",l),d("Paste the encoded text, then click the go button to begin")}),Ri(()=>{window.removeEventListener("keyup",l)});function l(p){u(p.key)}async function f(){d("click on letter within the message to select the encoded letter, then use the keyboard to determine what the real letter is"),i.value=1}function u(p){if(p.length!==1||!/[a-z]/i.test(p)||!n.value)return;p=p.toUpperCase();const I=Object.keys(o).find(A=>o[A]===p);I&&delete o[I],o[n.value]=p}function d(p,I=1e3){t.value=p,I>0&&setTimeout(()=>{t.value=""},I)}function h(){i.value=2}return(p,I)=>(W(),B(q,null,[ae(Gi,null,{default:Oa(()=>[J(t)?(W(),B("div",c$,se(J(t)),1)):_u("",!0)]),_:1}),v$,J(i)===1?(W(),B("div",d$,[ae(Jg,{modelValue:J(r),"onUpdate:modelValue":I[0]||(I[0]=A=>re(r)?r.value=A:r=A),"active-letter":J(n),"onUpdate:active-letter":I[1]||(I[1]=A=>re(n)?n.value=A:n=A),"decryption-keys":o},null,8,["modelValue","active-letter","decryption-keys"]),P("div",null,[P("h4",null,[Vr(" Total letters: "),P("output",null,se(J(s).totalLetters),1)])]),ae(zg,{onKey:u,"decryption-keys":o,"p-values":J(a).pValues,onEnter:h},null,8,["decryption-keys","p-values"]),ae(o$,{"decryption-keys":o,stats:J(s).letterDetails,"active-letter":J(n),"onUpdate:active-letter":I[2]||(I[2]=A=>re(n)?n.value=A:n=A)},null,8,["decryption-keys","stats","active-letter"])])):J(i)===0?(W(),B("div",p$,[P("div",null,[zf(P("textarea",{id:"encoded-text","onUpdate:modelValue":I[3]||(I[3]=A=>re(r)?r.value=A:r=A)},null,512),[[Qu,J(r)]])]),P("button",{id:"activate-button",onClick:f,disabled:!J(r)},"Go",8,h$)])):(W(),B("div",_$,[ae(u$,{"decryption-keys":o,stats:J(s).letterDetails},null,8,["decryption-keys","stats"]),P("button",{id:"leave-summary",onClick:I[4]||(I[4]=A=>re(i)?i.value=1:i=1)},"Back")])),g$,$$],64))}});const b$=fr(m$,[["__scopeId","data-v-514e56d6"]]);n0(b$).mount("#app");
