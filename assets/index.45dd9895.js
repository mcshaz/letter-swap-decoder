(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerpolicy&&(s.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?s.credentials="include":o.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(o){if(o.ep)return;o.ep=!0;const s=r(o);fetch(o.href,s)}})();function vs(e,t){const r=Object.create(null),n=e.split(",");for(let o=0;o<n.length;o++)r[n[o]]=!0;return t?o=>!!r[o.toLowerCase()]:o=>!!r[o]}const iu="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",au=vs(iu);function cl(e){return!!e||e===""}function On(e){if(W(e)){const t={};for(let r=0;r<e.length;r++){const n=e[r],o=Ie(n)?uu(n):On(n);if(o)for(const s in o)t[s]=o[s]}return t}else{if(Ie(e))return e;if(le(e))return e}}const lu=/;(?![^(]*\))/g,cu=/:(.+)/;function uu(e){const t={};return e.split(lu).forEach(r=>{if(r){const n=r.split(cu);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}function Et(e){let t="";if(Ie(e))t=e;else if(W(e))for(let r=0;r<e.length;r++){const n=Et(e[r]);n&&(t+=n+" ")}else if(le(e))for(const r in e)e[r]&&(t+=r+" ");return t.trim()}function fu(e,t){if(e.length!==t.length)return!1;let r=!0;for(let n=0;r&&n<e.length;n++)r=Cn(e[n],t[n]);return r}function Cn(e,t){if(e===t)return!0;let r=Ys(e),n=Ys(t);if(r||n)return r&&n?e.getTime()===t.getTime():!1;if(r=Cr(e),n=Cr(t),r||n)return e===t;if(r=W(e),n=W(t),r||n)return r&&n?fu(e,t):!1;if(r=le(e),n=le(t),r||n){if(!r||!n)return!1;const o=Object.keys(e).length,s=Object.keys(t).length;if(o!==s)return!1;for(const i in e){const a=e.hasOwnProperty(i),l=t.hasOwnProperty(i);if(a&&!l||!a&&l||!Cn(e[i],t[i]))return!1}}return String(e)===String(t)}function ul(e,t){return e.findIndex(r=>Cn(r,t))}const he=e=>Ie(e)?e:e==null?"":W(e)||le(e)&&(e.toString===vl||!x(e.toString))?JSON.stringify(e,fl,2):String(e),fl=(e,t)=>t&&t.__v_isRef?fl(e,t.value):Zt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((r,[n,o])=>(r[`${n} =>`]=o,r),{})}:Tn(t)?{[`Set(${t.size})`]:[...t.values()]}:le(t)&&!W(t)&&!pl(t)?String(t):t,ae={},Yt=[],xe=()=>{},du=()=>!1,vu=/^on[^a-z]/,Pn=e=>vu.test(e),ps=e=>e.startsWith("onUpdate:"),Ne=Object.assign,hs=(e,t)=>{const r=e.indexOf(t);r>-1&&e.splice(r,1)},pu=Object.prototype.hasOwnProperty,Q=(e,t)=>pu.call(e,t),W=Array.isArray,Zt=e=>Dr(e)==="[object Map]",Tn=e=>Dr(e)==="[object Set]",Ys=e=>Dr(e)==="[object Date]",x=e=>typeof e=="function",Ie=e=>typeof e=="string",Cr=e=>typeof e=="symbol",le=e=>e!==null&&typeof e=="object",dl=e=>le(e)&&x(e.then)&&x(e.catch),vl=Object.prototype.toString,Dr=e=>vl.call(e),hu=e=>Dr(e).slice(8,-1),pl=e=>Dr(e)==="[object Object]",gs=e=>Ie(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,pn=vs(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Rn=e=>{const t=Object.create(null);return r=>t[r]||(t[r]=e(r))},gu=/-(\w)/g,rt=Rn(e=>e.replace(gu,(t,r)=>r?r.toUpperCase():"")),mu=/\B([A-Z])/g,sr=Rn(e=>e.replace(mu,"-$1").toLowerCase()),Fn=Rn(e=>e.charAt(0).toUpperCase()+e.slice(1)),Yn=Rn(e=>e?`on${Fn(e)}`:""),Pr=(e,t)=>!Object.is(e,t),hn=(e,t)=>{for(let r=0;r<e.length;r++)e[r](t)},yn=(e,t,r)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:r})},bn=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Zs;const _u=()=>Zs||(Zs=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Ze;class hl{constructor(t=!1){this.detached=t,this.active=!0,this.effects=[],this.cleanups=[],this.parent=Ze,!t&&Ze&&(this.index=(Ze.scopes||(Ze.scopes=[])).push(this)-1)}run(t){if(this.active){const r=Ze;try{return Ze=this,t()}finally{Ze=r}}}on(){Ze=this}off(){Ze=this.parent}stop(t){if(this.active){let r,n;for(r=0,n=this.effects.length;r<n;r++)this.effects[r].stop();for(r=0,n=this.cleanups.length;r<n;r++)this.cleanups[r]();if(this.scopes)for(r=0,n=this.scopes.length;r<n;r++)this.scopes[r].stop(!0);if(!this.detached&&this.parent&&!t){const o=this.parent.scopes.pop();o&&o!==this&&(this.parent.scopes[this.index]=o,o.index=this.index)}this.parent=void 0,this.active=!1}}}function gl(e){return new hl(e)}function $u(e,t=Ze){t&&t.active&&t.effects.push(e)}const ms=e=>{const t=new Set(e);return t.w=0,t.n=0,t},ml=e=>(e.w&Nt)>0,_l=e=>(e.n&Nt)>0,yu=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=Nt},bu=e=>{const{deps:t}=e;if(t.length){let r=0;for(let n=0;n<t.length;n++){const o=t[n];ml(o)&&!_l(o)?o.delete(e):t[r++]=o,o.w&=~Nt,o.n&=~Nt}t.length=r}},To=new WeakMap;let Ar=0,Nt=1;const Ro=30;let Ke;const Wt=Symbol(""),Fo=Symbol("");class _s{constructor(t,r=null,n){this.fn=t,this.scheduler=r,this.active=!0,this.deps=[],this.parent=void 0,$u(this,n)}run(){if(!this.active)return this.fn();let t=Ke,r=It;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Ke,Ke=this,It=!0,Nt=1<<++Ar,Ar<=Ro?yu(this):Js(this),this.fn()}finally{Ar<=Ro&&bu(this),Nt=1<<--Ar,Ke=this.parent,It=r,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Ke===this?this.deferStop=!0:this.active&&(Js(this),this.onStop&&this.onStop(),this.active=!1)}}function Js(e){const{deps:t}=e;if(t.length){for(let r=0;r<t.length;r++)t[r].delete(e);t.length=0}}let It=!0;const $l=[];function ir(){$l.push(It),It=!1}function ar(){const e=$l.pop();It=e===void 0?!0:e}function Le(e,t,r){if(It&&Ke){let n=To.get(e);n||To.set(e,n=new Map);let o=n.get(r);o||n.set(r,o=ms()),yl(o)}}function yl(e,t){let r=!1;Ar<=Ro?_l(e)||(e.n|=Nt,r=!ml(e)):r=!e.has(Ke),r&&(e.add(Ke),Ke.deps.push(e))}function ct(e,t,r,n,o,s){const i=To.get(e);if(!i)return;let a=[];if(t==="clear")a=[...i.values()];else if(r==="length"&&W(e))i.forEach((l,u)=>{(u==="length"||u>=n)&&a.push(l)});else switch(r!==void 0&&a.push(i.get(r)),t){case"add":W(e)?gs(r)&&a.push(i.get("length")):(a.push(i.get(Wt)),Zt(e)&&a.push(i.get(Fo)));break;case"delete":W(e)||(a.push(i.get(Wt)),Zt(e)&&a.push(i.get(Fo)));break;case"set":Zt(e)&&a.push(i.get(Wt));break}if(a.length===1)a[0]&&Lo(a[0]);else{const l=[];for(const u of a)u&&l.push(...u);Lo(ms(l))}}function Lo(e,t){const r=W(e)?e:[...e];for(const n of r)n.computed&&ei(n);for(const n of r)n.computed||ei(n)}function ei(e,t){(e!==Ke||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const Eu=vs("__proto__,__v_isRef,__isVue"),bl=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Cr)),Iu=$s(),Au=$s(!1,!0),wu=$s(!0),ti=Nu();function Nu(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...r){const n=ee(this);for(let s=0,i=this.length;s<i;s++)Le(n,"get",s+"");const o=n[t](...r);return o===-1||o===!1?n[t](...r.map(ee)):o}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...r){ir();const n=ee(this)[t].apply(this,r);return ar(),n}}),e}function $s(e=!1,t=!1){return function(n,o,s){if(o==="__v_isReactive")return!e;if(o==="__v_isReadonly")return e;if(o==="__v_isShallow")return t;if(o==="__v_raw"&&s===(e?t?Ku:Nl:t?wl:Al).get(n))return n;const i=W(n);if(!e&&i&&Q(ti,o))return Reflect.get(ti,o,s);const a=Reflect.get(n,o,s);return(Cr(o)?bl.has(o):Eu(o))||(e||Le(n,"get",o),t)?a:_e(a)?i&&gs(o)?a:a.value:le(a)?e?Sl(a):Gt(a):a}}const Su=El(),Ou=El(!0);function El(e=!1){return function(r,n,o,s){let i=r[n];if(er(i)&&_e(i)&&!_e(o))return!1;if(!e&&(!En(o)&&!er(o)&&(i=ee(i),o=ee(o)),!W(r)&&_e(i)&&!_e(o)))return i.value=o,!0;const a=W(r)&&gs(n)?Number(n)<r.length:Q(r,n),l=Reflect.set(r,n,o,s);return r===ee(s)&&(a?Pr(o,i)&&ct(r,"set",n,o):ct(r,"add",n,o)),l}}function Cu(e,t){const r=Q(e,t);e[t];const n=Reflect.deleteProperty(e,t);return n&&r&&ct(e,"delete",t,void 0),n}function Pu(e,t){const r=Reflect.has(e,t);return(!Cr(t)||!bl.has(t))&&Le(e,"has",t),r}function Tu(e){return Le(e,"iterate",W(e)?"length":Wt),Reflect.ownKeys(e)}const Il={get:Iu,set:Su,deleteProperty:Cu,has:Pu,ownKeys:Tu},Ru={get:wu,set(e,t){return!0},deleteProperty(e,t){return!0}},Fu=Ne({},Il,{get:Au,set:Ou}),ys=e=>e,Ln=e=>Reflect.getPrototypeOf(e);function xr(e,t,r=!1,n=!1){e=e.__v_raw;const o=ee(e),s=ee(t);r||(t!==s&&Le(o,"get",t),Le(o,"get",s));const{has:i}=Ln(o),a=n?ys:r?Is:Tr;if(i.call(o,t))return a(e.get(t));if(i.call(o,s))return a(e.get(s));e!==o&&e.get(t)}function Vr(e,t=!1){const r=this.__v_raw,n=ee(r),o=ee(e);return t||(e!==o&&Le(n,"has",e),Le(n,"has",o)),e===o?r.has(e):r.has(e)||r.has(o)}function Xr(e,t=!1){return e=e.__v_raw,!t&&Le(ee(e),"iterate",Wt),Reflect.get(e,"size",e)}function ri(e){e=ee(e);const t=ee(this);return Ln(t).has.call(t,e)||(t.add(e),ct(t,"add",e,e)),this}function ni(e,t){t=ee(t);const r=ee(this),{has:n,get:o}=Ln(r);let s=n.call(r,e);s||(e=ee(e),s=n.call(r,e));const i=o.call(r,e);return r.set(e,t),s?Pr(t,i)&&ct(r,"set",e,t):ct(r,"add",e,t),this}function oi(e){const t=ee(this),{has:r,get:n}=Ln(t);let o=r.call(t,e);o||(e=ee(e),o=r.call(t,e)),n&&n.call(t,e);const s=t.delete(e);return o&&ct(t,"delete",e,void 0),s}function si(){const e=ee(this),t=e.size!==0,r=e.clear();return t&&ct(e,"clear",void 0,void 0),r}function zr(e,t){return function(n,o){const s=this,i=s.__v_raw,a=ee(i),l=t?ys:e?Is:Tr;return!e&&Le(a,"iterate",Wt),i.forEach((u,c)=>n.call(o,l(u),l(c),s))}}function qr(e,t,r){return function(...n){const o=this.__v_raw,s=ee(o),i=Zt(s),a=e==="entries"||e===Symbol.iterator&&i,l=e==="keys"&&i,u=o[e](...n),c=r?ys:t?Is:Tr;return!t&&Le(s,"iterate",l?Fo:Wt),{next(){const{value:f,done:v}=u.next();return v?{value:f,done:v}:{value:a?[c(f[0]),c(f[1])]:c(f),done:v}},[Symbol.iterator](){return this}}}}function dt(e){return function(...t){return e==="delete"?!1:this}}function Lu(){const e={get(s){return xr(this,s)},get size(){return Xr(this)},has:Vr,add:ri,set:ni,delete:oi,clear:si,forEach:zr(!1,!1)},t={get(s){return xr(this,s,!1,!0)},get size(){return Xr(this)},has:Vr,add:ri,set:ni,delete:oi,clear:si,forEach:zr(!1,!0)},r={get(s){return xr(this,s,!0)},get size(){return Xr(this,!0)},has(s){return Vr.call(this,s,!0)},add:dt("add"),set:dt("set"),delete:dt("delete"),clear:dt("clear"),forEach:zr(!0,!1)},n={get(s){return xr(this,s,!0,!0)},get size(){return Xr(this,!0)},has(s){return Vr.call(this,s,!0)},add:dt("add"),set:dt("set"),delete:dt("delete"),clear:dt("clear"),forEach:zr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{e[s]=qr(s,!1,!1),r[s]=qr(s,!0,!1),t[s]=qr(s,!1,!0),n[s]=qr(s,!0,!0)}),[e,r,t,n]}const[Hu,Mu,Du,ku]=Lu();function bs(e,t){const r=t?e?ku:Du:e?Mu:Hu;return(n,o,s)=>o==="__v_isReactive"?!e:o==="__v_isReadonly"?e:o==="__v_raw"?n:Reflect.get(Q(r,o)&&o in n?r:n,o,s)}const Uu={get:bs(!1,!1)},Wu={get:bs(!1,!0)},Bu={get:bs(!0,!1)},Al=new WeakMap,wl=new WeakMap,Nl=new WeakMap,Ku=new WeakMap;function Gu(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ju(e){return e.__v_skip||!Object.isExtensible(e)?0:Gu(hu(e))}function Gt(e){return er(e)?e:Es(e,!1,Il,Uu,Al)}function xu(e){return Es(e,!1,Fu,Wu,wl)}function Sl(e){return Es(e,!0,Ru,Bu,Nl)}function Es(e,t,r,n,o){if(!le(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const s=o.get(e);if(s)return s;const i=ju(e);if(i===0)return e;const a=new Proxy(e,i===2?n:r);return o.set(e,a),a}function At(e){return er(e)?At(e.__v_raw):!!(e&&e.__v_isReactive)}function er(e){return!!(e&&e.__v_isReadonly)}function En(e){return!!(e&&e.__v_isShallow)}function Ol(e){return At(e)||er(e)}function ee(e){const t=e&&e.__v_raw;return t?ee(t):e}function tr(e){return yn(e,"__v_skip",!0),e}const Tr=e=>le(e)?Gt(e):e,Is=e=>le(e)?Sl(e):e;function Cl(e){It&&Ke&&(e=ee(e),yl(e.dep||(e.dep=ms())))}function Pl(e,t){e=ee(e),e.dep&&Lo(e.dep)}function _e(e){return!!(e&&e.__v_isRef===!0)}function we(e){return Tl(e,!1)}function Vu(e){return Tl(e,!0)}function Tl(e,t){return _e(e)?e:new Xu(e,t)}class Xu{constructor(t,r){this.__v_isShallow=r,this.dep=void 0,this.__v_isRef=!0,this._rawValue=r?t:ee(t),this._value=r?t:Tr(t)}get value(){return Cl(this),this._value}set value(t){const r=this.__v_isShallow||En(t)||er(t);t=r?t:ee(t),Pr(t,this._rawValue)&&(this._rawValue=t,this._value=r?t:Tr(t),Pl(this))}}function be(e){return _e(e)?e.value:e}const zu={get:(e,t,r)=>be(Reflect.get(e,t,r)),set:(e,t,r,n)=>{const o=e[t];return _e(o)&&!_e(r)?(o.value=r,!0):Reflect.set(e,t,r,n)}};function Rl(e){return At(e)?e:new Proxy(e,zu)}function qu(e){const t=W(e)?new Array(e.length):{};for(const r in e)t[r]=Yu(e,r);return t}class Qu{constructor(t,r,n){this._object=t,this._key=r,this._defaultValue=n,this.__v_isRef=!0}get value(){const t=this._object[this._key];return t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}}function Yu(e,t,r){const n=e[t];return _e(n)?n:new Qu(e,t,r)}var Fl;class Zu{constructor(t,r,n,o){this._setter=r,this.dep=void 0,this.__v_isRef=!0,this[Fl]=!1,this._dirty=!0,this.effect=new _s(t,()=>{this._dirty||(this._dirty=!0,Pl(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!o,this.__v_isReadonly=n}get value(){const t=ee(this);return Cl(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}Fl="__v_isReadonly";function Ju(e,t,r=!1){let n,o;const s=x(e);return s?(n=e,o=xe):(n=e.get,o=e.set),new Zu(n,o,s||!o,r)}function wt(e,t,r,n){let o;try{o=n?e(...n):e()}catch(s){Hn(s,t,r)}return o}function ke(e,t,r,n){if(x(e)){const s=wt(e,t,r,n);return s&&dl(s)&&s.catch(i=>{Hn(i,t,r)}),s}const o=[];for(let s=0;s<e.length;s++)o.push(ke(e[s],t,r,n));return o}function Hn(e,t,r,n=!0){const o=t?t.vnode:null;if(t){let s=t.parent;const i=t.proxy,a=r;for(;s;){const u=s.ec;if(u){for(let c=0;c<u.length;c++)if(u[c](e,i,a)===!1)return}s=s.parent}const l=t.appContext.config.errorHandler;if(l){wt(l,null,10,[e,i,a]);return}}ef(e,r,o,n)}function ef(e,t,r,n=!0){console.error(e)}let Rr=!1,Ho=!1;const Se=[];let et=0;const Jt=[];let at=null,Lt=0;const Ll=Promise.resolve();let As=null;function ws(e){const t=As||Ll;return e?t.then(this?e.bind(this):e):t}function tf(e){let t=et+1,r=Se.length;for(;t<r;){const n=t+r>>>1;Fr(Se[n])<e?t=n+1:r=n}return t}function Ns(e){(!Se.length||!Se.includes(e,Rr&&e.allowRecurse?et+1:et))&&(e.id==null?Se.push(e):Se.splice(tf(e.id),0,e),Hl())}function Hl(){!Rr&&!Ho&&(Ho=!0,As=Ll.then(Dl))}function rf(e){const t=Se.indexOf(e);t>et&&Se.splice(t,1)}function nf(e){W(e)?Jt.push(...e):(!at||!at.includes(e,e.allowRecurse?Lt+1:Lt))&&Jt.push(e),Hl()}function ii(e,t=Rr?et+1:0){for(;t<Se.length;t++){const r=Se[t];r&&r.pre&&(Se.splice(t,1),t--,r())}}function Ml(e){if(Jt.length){const t=[...new Set(Jt)];if(Jt.length=0,at){at.push(...t);return}for(at=t,at.sort((r,n)=>Fr(r)-Fr(n)),Lt=0;Lt<at.length;Lt++)at[Lt]();at=null,Lt=0}}const Fr=e=>e.id==null?1/0:e.id,of=(e,t)=>{const r=Fr(e)-Fr(t);if(r===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return r};function Dl(e){Ho=!1,Rr=!0,Se.sort(of);const t=xe;try{for(et=0;et<Se.length;et++){const r=Se[et];r&&r.active!==!1&&wt(r,null,14)}}finally{et=0,Se.length=0,Ml(),Rr=!1,As=null,(Se.length||Jt.length)&&Dl()}}function sf(e,t,...r){if(e.isUnmounted)return;const n=e.vnode.props||ae;let o=r;const s=t.startsWith("update:"),i=s&&t.slice(7);if(i&&i in n){const c=`${i==="modelValue"?"model":i}Modifiers`,{number:f,trim:v}=n[c]||ae;v&&(o=r.map(p=>p.trim())),f&&(o=r.map(bn))}let a,l=n[a=Yn(t)]||n[a=Yn(rt(t))];!l&&s&&(l=n[a=Yn(sr(t))]),l&&ke(l,e,6,o);const u=n[a+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,ke(u,e,6,o)}}function kl(e,t,r=!1){const n=t.emitsCache,o=n.get(e);if(o!==void 0)return o;const s=e.emits;let i={},a=!1;if(!x(e)){const l=u=>{const c=kl(u,t,!0);c&&(a=!0,Ne(i,c))};!r&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!s&&!a?(le(e)&&n.set(e,null),null):(W(s)?s.forEach(l=>i[l]=null):Ne(i,s),le(e)&&n.set(e,i),i)}function Mn(e,t){return!e||!Pn(t)?!1:(t=t.slice(2).replace(/Once$/,""),Q(e,t[0].toLowerCase()+t.slice(1))||Q(e,sr(t))||Q(e,t))}let De=null,Dn=null;function In(e){const t=De;return De=e,Dn=e&&e.type.__scopeId||null,t}function kr(e){Dn=e}function Ur(){Dn=null}function Ss(e,t=De,r){if(!t||e._n)return e;const n=(...o)=>{n._d&&mi(-1);const s=In(t);let i;try{i=e(...o)}finally{In(s),n._d&&mi(1)}return i};return n._n=!0,n._c=!0,n._d=!0,n}function Zn(e){const{type:t,vnode:r,proxy:n,withProxy:o,props:s,propsOptions:[i],slots:a,attrs:l,emit:u,render:c,renderCache:f,data:v,setupState:p,ctx:_,inheritAttrs:y}=e;let I,m;const L=In(e);try{if(r.shapeFlag&4){const B=o||n;I=Je(c.call(B,B,f,s,p,v,_)),m=l}else{const B=t;I=Je(B.length>1?B(s,{attrs:l,slots:a,emit:u}):B(s,null)),m=t.props?l:af(l)}}catch(B){wr.length=0,Hn(B,e,1),I=ye(Ve)}let M=I;if(m&&y!==!1){const B=Object.keys(m),{shapeFlag:K}=M;B.length&&K&7&&(i&&B.some(ps)&&(m=lf(m,i)),M=St(M,m))}return r.dirs&&(M=St(M),M.dirs=M.dirs?M.dirs.concat(r.dirs):r.dirs),r.transition&&(M.transition=r.transition),I=M,In(L),I}const af=e=>{let t;for(const r in e)(r==="class"||r==="style"||Pn(r))&&((t||(t={}))[r]=e[r]);return t},lf=(e,t)=>{const r={};for(const n in e)(!ps(n)||!(n.slice(9)in t))&&(r[n]=e[n]);return r};function cf(e,t,r){const{props:n,children:o,component:s}=e,{props:i,children:a,patchFlag:l}=t,u=s.emitsOptions;if(t.dirs||t.transition)return!0;if(r&&l>=0){if(l&1024)return!0;if(l&16)return n?ai(n,i,u):!!i;if(l&8){const c=t.dynamicProps;for(let f=0;f<c.length;f++){const v=c[f];if(i[v]!==n[v]&&!Mn(u,v))return!0}}}else return(o||a)&&(!a||!a.$stable)?!0:n===i?!1:n?i?ai(n,i,u):!0:!!i;return!1}function ai(e,t,r){const n=Object.keys(t);if(n.length!==Object.keys(e).length)return!0;for(let o=0;o<n.length;o++){const s=n[o];if(t[s]!==e[s]&&!Mn(r,s))return!0}return!1}function uf({vnode:e,parent:t},r){for(;t&&t.subTree===e;)(e=t.vnode).el=r,t=t.parent}const ff=e=>e.__isSuspense;function df(e,t){t&&t.pendingBranch?W(e)?t.effects.push(...e):t.effects.push(e):nf(e)}function gn(e,t){if(Ee){let r=Ee.provides;const n=Ee.parent&&Ee.parent.provides;n===r&&(r=Ee.provides=Object.create(n)),r[e]=t}}function tt(e,t,r=!1){const n=Ee||De;if(n){const o=n.parent==null?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides;if(o&&e in o)return o[e];if(arguments.length>1)return r&&x(t)?t.call(n.proxy):t}}const li={};function Bt(e,t,r){return Ul(e,t,r)}function Ul(e,t,{immediate:r,deep:n,flush:o,onTrack:s,onTrigger:i}=ae){const a=Ee;let l,u=!1,c=!1;if(_e(e)?(l=()=>e.value,u=En(e)):At(e)?(l=()=>e,n=!0):W(e)?(c=!0,u=e.some(m=>At(m)||En(m)),l=()=>e.map(m=>{if(_e(m))return m.value;if(At(m))return kt(m);if(x(m))return wt(m,a,2)})):x(e)?t?l=()=>wt(e,a,2):l=()=>{if(!(a&&a.isUnmounted))return f&&f(),ke(e,a,3,[v])}:l=xe,t&&n){const m=l;l=()=>kt(m())}let f,v=m=>{f=I.onStop=()=>{wt(m,a,4)}};if(Hr)return v=xe,t?r&&ke(t,a,3,[l(),c?[]:void 0,v]):l(),xe;let p=c?[]:li;const _=()=>{if(!!I.active)if(t){const m=I.run();(n||u||(c?m.some((L,M)=>Pr(L,p[M])):Pr(m,p)))&&(f&&f(),ke(t,a,3,[m,p===li?void 0:p,v]),p=m)}else I.run()};_.allowRecurse=!!t;let y;o==="sync"?y=_:o==="post"?y=()=>Re(_,a&&a.suspense):(_.pre=!0,a&&(_.id=a.uid),y=()=>Ns(_));const I=new _s(l,y);return t?r?_():p=I.run():o==="post"?Re(I.run.bind(I),a&&a.suspense):I.run(),()=>{I.stop(),a&&a.scope&&hs(a.scope.effects,I)}}function vf(e,t,r){const n=this.proxy,o=Ie(e)?e.includes(".")?Wl(n,e):()=>n[e]:e.bind(n,n);let s;x(t)?s=t:(s=t.handler,r=t);const i=Ee;rr(this);const a=Ul(o,s.bind(n),r);return i?rr(i):Kt(),a}function Wl(e,t){const r=t.split(".");return()=>{let n=e;for(let o=0;o<r.length&&n;o++)n=n[r[o]];return n}}function kt(e,t){if(!le(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),_e(e))kt(e.value,t);else if(W(e))for(let r=0;r<e.length;r++)kt(e[r],t);else if(Tn(e)||Zt(e))e.forEach(r=>{kt(r,t)});else if(pl(e))for(const r in e)kt(e[r],t);return e}function pf(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Wn(()=>{e.isMounted=!0}),xl(()=>{e.isUnmounting=!0}),e}const Me=[Function,Array],hf={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Me,onEnter:Me,onAfterEnter:Me,onEnterCancelled:Me,onBeforeLeave:Me,onLeave:Me,onAfterLeave:Me,onLeaveCancelled:Me,onBeforeAppear:Me,onAppear:Me,onAfterAppear:Me,onAppearCancelled:Me},setup(e,{slots:t}){const r=Rs(),n=pf();let o;return()=>{const s=t.default&&Gl(t.default(),!0);if(!s||!s.length)return;let i=s[0];if(s.length>1){for(const y of s)if(y.type!==Ve){i=y;break}}const a=ee(e),{mode:l}=a;if(n.isLeaving)return Jn(i);const u=ci(i);if(!u)return Jn(i);const c=Mo(u,a,n,r);Do(u,c);const f=r.subTree,v=f&&ci(f);let p=!1;const{getTransitionKey:_}=u.type;if(_){const y=_();o===void 0?o=y:y!==o&&(o=y,p=!0)}if(v&&v.type!==Ve&&(!Ht(u,v)||p)){const y=Mo(v,a,n,r);if(Do(v,y),l==="out-in")return n.isLeaving=!0,y.afterLeave=()=>{n.isLeaving=!1,r.update()},Jn(i);l==="in-out"&&u.type!==Ve&&(y.delayLeave=(I,m,L)=>{const M=Kl(n,v);M[String(v.key)]=v,I._leaveCb=()=>{m(),I._leaveCb=void 0,delete c.delayedLeave},c.delayedLeave=L})}return i}}},Bl=hf;function Kl(e,t){const{leavingVNodes:r}=e;let n=r.get(t.type);return n||(n=Object.create(null),r.set(t.type,n)),n}function Mo(e,t,r,n){const{appear:o,mode:s,persisted:i=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:u,onEnterCancelled:c,onBeforeLeave:f,onLeave:v,onAfterLeave:p,onLeaveCancelled:_,onBeforeAppear:y,onAppear:I,onAfterAppear:m,onAppearCancelled:L}=t,M=String(e.key),B=Kl(r,e),K=(O,Y)=>{O&&ke(O,n,9,Y)},te=(O,Y)=>{const Z=Y[1];K(O,Y),W(O)?O.every(fe=>fe.length<=1)&&Z():O.length<=1&&Z()},j={mode:s,persisted:i,beforeEnter(O){let Y=a;if(!r.isMounted)if(o)Y=y||a;else return;O._leaveCb&&O._leaveCb(!0);const Z=B[M];Z&&Ht(e,Z)&&Z.el._leaveCb&&Z.el._leaveCb(),K(Y,[O])},enter(O){let Y=l,Z=u,fe=c;if(!r.isMounted)if(o)Y=I||l,Z=m||u,fe=L||c;else return;let F=!1;const ie=O._enterCb=de=>{F||(F=!0,de?K(fe,[O]):K(Z,[O]),j.delayedLeave&&j.delayedLeave(),O._enterCb=void 0)};Y?te(Y,[O,ie]):ie()},leave(O,Y){const Z=String(e.key);if(O._enterCb&&O._enterCb(!0),r.isUnmounting)return Y();K(f,[O]);let fe=!1;const F=O._leaveCb=ie=>{fe||(fe=!0,Y(),ie?K(_,[O]):K(p,[O]),O._leaveCb=void 0,B[Z]===e&&delete B[Z])};B[Z]=e,v?te(v,[O,F]):F()},clone(O){return Mo(O,t,r,n)}};return j}function Jn(e){if(kn(e))return e=St(e),e.children=null,e}function ci(e){return kn(e)?e.children?e.children[0]:void 0:e}function Do(e,t){e.shapeFlag&6&&e.component?Do(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Gl(e,t=!1,r){let n=[],o=0;for(let s=0;s<e.length;s++){let i=e[s];const a=r==null?i.key:String(r)+String(i.key!=null?i.key:s);i.type===se?(i.patchFlag&128&&o++,n=n.concat(Gl(i.children,t,a))):(t||i.type!==Ve)&&n.push(a!=null?St(i,{key:a}):i)}if(o>1)for(let s=0;s<n.length;s++)n[s].patchFlag=-2;return n}function ze(e){return x(e)?{setup:e,name:e.name}:e}const mn=e=>!!e.type.__asyncLoader,kn=e=>e.type.__isKeepAlive;function gf(e,t){jl(e,"a",t)}function mf(e,t){jl(e,"da",t)}function jl(e,t,r=Ee){const n=e.__wdc||(e.__wdc=()=>{let o=r;for(;o;){if(o.isDeactivated)return;o=o.parent}return e()});if(Un(t,n,r),r){let o=r.parent;for(;o&&o.parent;)kn(o.parent.vnode)&&_f(n,t,r,o),o=o.parent}}function _f(e,t,r,n){const o=Un(t,e,n,!0);Wr(()=>{hs(n[t],o)},r)}function Un(e,t,r=Ee,n=!1){if(r){const o=r[e]||(r[e]=[]),s=t.__weh||(t.__weh=(...i)=>{if(r.isUnmounted)return;ir(),rr(r);const a=ke(t,r,e,i);return Kt(),ar(),a});return n?o.unshift(s):o.push(s),s}}const ut=e=>(t,r=Ee)=>(!Hr||e==="sp")&&Un(e,(...n)=>t(...n),r),$f=ut("bm"),Wn=ut("m"),yf=ut("bu"),bf=ut("u"),xl=ut("bum"),Wr=ut("um"),Ef=ut("sp"),If=ut("rtg"),Af=ut("rtc");function wf(e,t=Ee){Un("ec",e,t)}function _n(e,t){const r=De;if(r===null)return e;const n=Kn(r)||r.proxy,o=e.dirs||(e.dirs=[]);for(let s=0;s<t.length;s++){let[i,a,l,u=ae]=t[s];x(i)&&(i={mounted:i,updated:i}),i.deep&&kt(a),o.push({dir:i,instance:n,value:a,oldValue:void 0,arg:l,modifiers:u})}return e}function Ct(e,t,r,n){const o=e.dirs,s=t&&t.dirs;for(let i=0;i<o.length;i++){const a=o[i];s&&(a.oldValue=s[i].value);let l=a.dir[n];l&&(ir(),ke(l,r,8,[e.el,a,e,t]),ar())}}const Vl="components";function Nf(e,t){return Of(Vl,e,!0,t)||e}const Sf=Symbol();function Of(e,t,r=!0,n=!1){const o=De||Ee;if(o){const s=o.type;if(e===Vl){const a=o0(s,!1);if(a&&(a===t||a===rt(t)||a===Fn(rt(t))))return s}const i=ui(o[e]||s[e],t)||ui(o.appContext[e],t);return!i&&n?s:i}}function ui(e,t){return e&&(e[t]||e[rt(t)]||e[Fn(rt(t))])}function Ge(e,t,r,n){let o;const s=r&&r[n];if(W(e)||Ie(e)){o=new Array(e.length);for(let i=0,a=e.length;i<a;i++)o[i]=t(e[i],i,void 0,s&&s[i])}else if(typeof e=="number"){o=new Array(e);for(let i=0;i<e;i++)o[i]=t(i+1,i,void 0,s&&s[i])}else if(le(e))if(e[Symbol.iterator])o=Array.from(e,(i,a)=>t(i,a,void 0,s&&s[a]));else{const i=Object.keys(e);o=new Array(i.length);for(let a=0,l=i.length;a<l;a++){const u=i[a];o[a]=t(e[u],u,a,s&&s[a])}}else o=[];return r&&(r[n]=o),o}const ko=e=>e?oc(e)?Kn(e)||e.proxy:ko(e.parent):null,An=Ne(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>ko(e.parent),$root:e=>ko(e.root),$emit:e=>e.emit,$options:e=>Os(e),$forceUpdate:e=>e.f||(e.f=()=>Ns(e.update)),$nextTick:e=>e.n||(e.n=ws.bind(e.proxy)),$watch:e=>vf.bind(e)}),Cf={get({_:e},t){const{ctx:r,setupState:n,data:o,props:s,accessCache:i,type:a,appContext:l}=e;let u;if(t[0]!=="$"){const p=i[t];if(p!==void 0)switch(p){case 1:return n[t];case 2:return o[t];case 4:return r[t];case 3:return s[t]}else{if(n!==ae&&Q(n,t))return i[t]=1,n[t];if(o!==ae&&Q(o,t))return i[t]=2,o[t];if((u=e.propsOptions[0])&&Q(u,t))return i[t]=3,s[t];if(r!==ae&&Q(r,t))return i[t]=4,r[t];Uo&&(i[t]=0)}}const c=An[t];let f,v;if(c)return t==="$attrs"&&Le(e,"get",t),c(e);if((f=a.__cssModules)&&(f=f[t]))return f;if(r!==ae&&Q(r,t))return i[t]=4,r[t];if(v=l.config.globalProperties,Q(v,t))return v[t]},set({_:e},t,r){const{data:n,setupState:o,ctx:s}=e;return o!==ae&&Q(o,t)?(o[t]=r,!0):n!==ae&&Q(n,t)?(n[t]=r,!0):Q(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(s[t]=r,!0)},has({_:{data:e,setupState:t,accessCache:r,ctx:n,appContext:o,propsOptions:s}},i){let a;return!!r[i]||e!==ae&&Q(e,i)||t!==ae&&Q(t,i)||(a=s[0])&&Q(a,i)||Q(n,i)||Q(An,i)||Q(o.config.globalProperties,i)},defineProperty(e,t,r){return r.get!=null?e._.accessCache[t]=0:Q(r,"value")&&this.set(e,t,r.value,null),Reflect.defineProperty(e,t,r)}};let Uo=!0;function Pf(e){const t=Os(e),r=e.proxy,n=e.ctx;Uo=!1,t.beforeCreate&&fi(t.beforeCreate,e,"bc");const{data:o,computed:s,methods:i,watch:a,provide:l,inject:u,created:c,beforeMount:f,mounted:v,beforeUpdate:p,updated:_,activated:y,deactivated:I,beforeDestroy:m,beforeUnmount:L,destroyed:M,unmounted:B,render:K,renderTracked:te,renderTriggered:j,errorCaptured:O,serverPrefetch:Y,expose:Z,inheritAttrs:fe,components:F,directives:ie,filters:de}=t;if(u&&Tf(u,n,null,e.appContext.config.unwrapInjectedRef),i)for(const ce in i){const ne=i[ce];x(ne)&&(n[ce]=ne.bind(r))}if(o){const ce=o.call(r,r);le(ce)&&(e.data=Gt(ce))}if(Uo=!0,s)for(const ce in s){const ne=s[ce],Ue=x(ne)?ne.bind(r,r):x(ne.get)?ne.get.bind(r,r):xe,Ot=!x(ne)&&x(ne.set)?ne.set.bind(r):xe,We=ge({get:Ue,set:Ot});Object.defineProperty(n,ce,{enumerable:!0,configurable:!0,get:()=>We.value,set:Te=>We.value=Te})}if(a)for(const ce in a)Xl(a[ce],n,r,ce);if(l){const ce=x(l)?l.call(r):l;Reflect.ownKeys(ce).forEach(ne=>{gn(ne,ce[ne])})}c&&fi(c,e,"c");function ve(ce,ne){W(ne)?ne.forEach(Ue=>ce(Ue.bind(r))):ne&&ce(ne.bind(r))}if(ve($f,f),ve(Wn,v),ve(yf,p),ve(bf,_),ve(gf,y),ve(mf,I),ve(wf,O),ve(Af,te),ve(If,j),ve(xl,L),ve(Wr,B),ve(Ef,Y),W(Z))if(Z.length){const ce=e.exposed||(e.exposed={});Z.forEach(ne=>{Object.defineProperty(ce,ne,{get:()=>r[ne],set:Ue=>r[ne]=Ue})})}else e.exposed||(e.exposed={});K&&e.render===xe&&(e.render=K),fe!=null&&(e.inheritAttrs=fe),F&&(e.components=F),ie&&(e.directives=ie)}function Tf(e,t,r=xe,n=!1){W(e)&&(e=Wo(e));for(const o in e){const s=e[o];let i;le(s)?"default"in s?i=tt(s.from||o,s.default,!0):i=tt(s.from||o):i=tt(s),_e(i)&&n?Object.defineProperty(t,o,{enumerable:!0,configurable:!0,get:()=>i.value,set:a=>i.value=a}):t[o]=i}}function fi(e,t,r){ke(W(e)?e.map(n=>n.bind(t.proxy)):e.bind(t.proxy),t,r)}function Xl(e,t,r,n){const o=n.includes(".")?Wl(r,n):()=>r[n];if(Ie(e)){const s=t[e];x(s)&&Bt(o,s)}else if(x(e))Bt(o,e.bind(r));else if(le(e))if(W(e))e.forEach(s=>Xl(s,t,r,n));else{const s=x(e.handler)?e.handler.bind(r):t[e.handler];x(s)&&Bt(o,s,e)}}function Os(e){const t=e.type,{mixins:r,extends:n}=t,{mixins:o,optionsCache:s,config:{optionMergeStrategies:i}}=e.appContext,a=s.get(t);let l;return a?l=a:!o.length&&!r&&!n?l=t:(l={},o.length&&o.forEach(u=>wn(l,u,i,!0)),wn(l,t,i)),le(t)&&s.set(t,l),l}function wn(e,t,r,n=!1){const{mixins:o,extends:s}=t;s&&wn(e,s,r,!0),o&&o.forEach(i=>wn(e,i,r,!0));for(const i in t)if(!(n&&i==="expose")){const a=Rf[i]||r&&r[i];e[i]=a?a(e[i],t[i]):t[i]}return e}const Rf={data:di,props:Ft,emits:Ft,methods:Ft,computed:Ft,beforeCreate:Ce,created:Ce,beforeMount:Ce,mounted:Ce,beforeUpdate:Ce,updated:Ce,beforeDestroy:Ce,beforeUnmount:Ce,destroyed:Ce,unmounted:Ce,activated:Ce,deactivated:Ce,errorCaptured:Ce,serverPrefetch:Ce,components:Ft,directives:Ft,watch:Lf,provide:di,inject:Ff};function di(e,t){return t?e?function(){return Ne(x(e)?e.call(this,this):e,x(t)?t.call(this,this):t)}:t:e}function Ff(e,t){return Ft(Wo(e),Wo(t))}function Wo(e){if(W(e)){const t={};for(let r=0;r<e.length;r++)t[e[r]]=e[r];return t}return e}function Ce(e,t){return e?[...new Set([].concat(e,t))]:t}function Ft(e,t){return e?Ne(Ne(Object.create(null),e),t):t}function Lf(e,t){if(!e)return t;if(!t)return e;const r=Ne(Object.create(null),e);for(const n in t)r[n]=Ce(e[n],t[n]);return r}function Hf(e,t,r,n=!1){const o={},s={};yn(s,Bn,1),e.propsDefaults=Object.create(null),zl(e,t,o,s);for(const i in e.propsOptions[0])i in o||(o[i]=void 0);r?e.props=n?o:xu(o):e.type.props?e.props=o:e.props=s,e.attrs=s}function Mf(e,t,r,n){const{props:o,attrs:s,vnode:{patchFlag:i}}=e,a=ee(o),[l]=e.propsOptions;let u=!1;if((n||i>0)&&!(i&16)){if(i&8){const c=e.vnode.dynamicProps;for(let f=0;f<c.length;f++){let v=c[f];if(Mn(e.emitsOptions,v))continue;const p=t[v];if(l)if(Q(s,v))p!==s[v]&&(s[v]=p,u=!0);else{const _=rt(v);o[_]=Bo(l,a,_,p,e,!1)}else p!==s[v]&&(s[v]=p,u=!0)}}}else{zl(e,t,o,s)&&(u=!0);let c;for(const f in a)(!t||!Q(t,f)&&((c=sr(f))===f||!Q(t,c)))&&(l?r&&(r[f]!==void 0||r[c]!==void 0)&&(o[f]=Bo(l,a,f,void 0,e,!0)):delete o[f]);if(s!==a)for(const f in s)(!t||!Q(t,f)&&!0)&&(delete s[f],u=!0)}u&&ct(e,"set","$attrs")}function zl(e,t,r,n){const[o,s]=e.propsOptions;let i=!1,a;if(t)for(let l in t){if(pn(l))continue;const u=t[l];let c;o&&Q(o,c=rt(l))?!s||!s.includes(c)?r[c]=u:(a||(a={}))[c]=u:Mn(e.emitsOptions,l)||(!(l in n)||u!==n[l])&&(n[l]=u,i=!0)}if(s){const l=ee(r),u=a||ae;for(let c=0;c<s.length;c++){const f=s[c];r[f]=Bo(o,l,f,u[f],e,!Q(u,f))}}return i}function Bo(e,t,r,n,o,s){const i=e[r];if(i!=null){const a=Q(i,"default");if(a&&n===void 0){const l=i.default;if(i.type!==Function&&x(l)){const{propsDefaults:u}=o;r in u?n=u[r]:(rr(o),n=u[r]=l.call(null,t),Kt())}else n=l}i[0]&&(s&&!a?n=!1:i[1]&&(n===""||n===sr(r))&&(n=!0))}return n}function ql(e,t,r=!1){const n=t.propsCache,o=n.get(e);if(o)return o;const s=e.props,i={},a=[];let l=!1;if(!x(e)){const c=f=>{l=!0;const[v,p]=ql(f,t,!0);Ne(i,v),p&&a.push(...p)};!r&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}if(!s&&!l)return le(e)&&n.set(e,Yt),Yt;if(W(s))for(let c=0;c<s.length;c++){const f=rt(s[c]);vi(f)&&(i[f]=ae)}else if(s)for(const c in s){const f=rt(c);if(vi(f)){const v=s[c],p=i[f]=W(v)||x(v)?{type:v}:v;if(p){const _=gi(Boolean,p.type),y=gi(String,p.type);p[0]=_>-1,p[1]=y<0||_<y,(_>-1||Q(p,"default"))&&a.push(f)}}}const u=[i,a];return le(e)&&n.set(e,u),u}function vi(e){return e[0]!=="$"}function pi(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function hi(e,t){return pi(e)===pi(t)}function gi(e,t){return W(t)?t.findIndex(r=>hi(r,e)):x(t)&&hi(t,e)?0:-1}const Ql=e=>e[0]==="_"||e==="$stable",Cs=e=>W(e)?e.map(Je):[Je(e)],Df=(e,t,r)=>{if(t._n)return t;const n=Ss((...o)=>Cs(t(...o)),r);return n._c=!1,n},Yl=(e,t,r)=>{const n=e._ctx;for(const o in e){if(Ql(o))continue;const s=e[o];if(x(s))t[o]=Df(o,s,n);else if(s!=null){const i=Cs(s);t[o]=()=>i}}},Zl=(e,t)=>{const r=Cs(t);e.slots.default=()=>r},kf=(e,t)=>{if(e.vnode.shapeFlag&32){const r=t._;r?(e.slots=ee(t),yn(t,"_",r)):Yl(t,e.slots={})}else e.slots={},t&&Zl(e,t);yn(e.slots,Bn,1)},Uf=(e,t,r)=>{const{vnode:n,slots:o}=e;let s=!0,i=ae;if(n.shapeFlag&32){const a=t._;a?r&&a===1?s=!1:(Ne(o,t),!r&&a===1&&delete o._):(s=!t.$stable,Yl(t,o)),i=t}else t&&(Zl(e,t),i={default:1});if(s)for(const a in o)!Ql(a)&&!(a in i)&&delete o[a]};function Jl(){return{app:null,config:{isNativeTag:du,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Wf=0;function Bf(e,t){return function(n,o=null){x(n)||(n=Object.assign({},n)),o!=null&&!le(o)&&(o=null);const s=Jl(),i=new Set;let a=!1;const l=s.app={_uid:Wf++,_component:n,_props:o,_container:null,_context:s,_instance:null,version:i0,get config(){return s.config},set config(u){},use(u,...c){return i.has(u)||(u&&x(u.install)?(i.add(u),u.install(l,...c)):x(u)&&(i.add(u),u(l,...c))),l},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),l},component(u,c){return c?(s.components[u]=c,l):s.components[u]},directive(u,c){return c?(s.directives[u]=c,l):s.directives[u]},mount(u,c,f){if(!a){const v=ye(n,o);return v.appContext=s,c&&t?t(v,u):e(v,u,f),a=!0,l._container=u,u.__vue_app__=l,Kn(v.component)||v.component.proxy}},unmount(){a&&(e(null,l._container),delete l._container.__vue_app__)},provide(u,c){return s.provides[u]=c,l}};return l}}function Ko(e,t,r,n,o=!1){if(W(e)){e.forEach((v,p)=>Ko(v,t&&(W(t)?t[p]:t),r,n,o));return}if(mn(n)&&!o)return;const s=n.shapeFlag&4?Kn(n.component)||n.component.proxy:n.el,i=o?null:s,{i:a,r:l}=e,u=t&&t.r,c=a.refs===ae?a.refs={}:a.refs,f=a.setupState;if(u!=null&&u!==l&&(Ie(u)?(c[u]=null,Q(f,u)&&(f[u]=null)):_e(u)&&(u.value=null)),x(l))wt(l,a,12,[i,c]);else{const v=Ie(l),p=_e(l);if(v||p){const _=()=>{if(e.f){const y=v?Q(f,l)?f[l]:c[l]:l.value;o?W(y)&&hs(y,s):W(y)?y.includes(s)||y.push(s):v?(c[l]=[s],Q(f,l)&&(f[l]=c[l])):(l.value=[s],e.k&&(c[e.k]=l.value))}else v?(c[l]=i,Q(f,l)&&(f[l]=i)):p&&(l.value=i,e.k&&(c[e.k]=i))};i?(_.id=-1,Re(_,r)):_()}}}const Re=df;function Kf(e){return Gf(e)}function Gf(e,t){const r=_u();r.__VUE__=!0;const{insert:n,remove:o,patchProp:s,createElement:i,createText:a,createComment:l,setText:u,setElementText:c,parentNode:f,nextSibling:v,setScopeId:p=xe,insertStaticContent:_}=e,y=(d,h,g,$=null,E=null,N=null,P=!1,w=null,S=!!h.dynamicChildren)=>{if(d===h)return;d&&!Ht(d,h)&&($=C(d),Te(d,E,N,!0),d=null),h.patchFlag===-2&&(S=!1,h.dynamicChildren=null);const{type:A,ref:k,shapeFlag:H}=h;switch(A){case Ps:I(d,h,g,$);break;case Ve:m(d,h,g,$);break;case eo:d==null&&L(h,g,$,P);break;case se:F(d,h,g,$,E,N,P,w,S);break;default:H&1?K(d,h,g,$,E,N,P,w,S):H&6?ie(d,h,g,$,E,N,P,w,S):(H&64||H&128)&&A.process(d,h,g,$,E,N,P,w,S,J)}k!=null&&E&&Ko(k,d&&d.ref,N,h||d,!h)},I=(d,h,g,$)=>{if(d==null)n(h.el=a(h.children),g,$);else{const E=h.el=d.el;h.children!==d.children&&u(E,h.children)}},m=(d,h,g,$)=>{d==null?n(h.el=l(h.children||""),g,$):h.el=d.el},L=(d,h,g,$)=>{[d.el,d.anchor]=_(d.children,h,g,$,d.el,d.anchor)},M=({el:d,anchor:h},g,$)=>{let E;for(;d&&d!==h;)E=v(d),n(d,g,$),d=E;n(h,g,$)},B=({el:d,anchor:h})=>{let g;for(;d&&d!==h;)g=v(d),o(d),d=g;o(h)},K=(d,h,g,$,E,N,P,w,S)=>{P=P||h.type==="svg",d==null?te(h,g,$,E,N,P,w,S):Y(d,h,E,N,P,w,S)},te=(d,h,g,$,E,N,P,w)=>{let S,A;const{type:k,props:H,shapeFlag:U,transition:G,dirs:q}=d;if(S=d.el=i(d.type,N,H&&H.is,H),U&8?c(S,d.children):U&16&&O(d.children,S,null,$,E,N&&k!=="foreignObject",P,w),q&&Ct(d,null,$,"created"),H){for(const oe in H)oe!=="value"&&!pn(oe)&&s(S,oe,null,H[oe],N,d.children,$,E,R);"value"in H&&s(S,"value",null,H.value),(A=H.onVnodeBeforeMount)&&Ye(A,$,d)}j(S,d,d.scopeId,P,$),q&&Ct(d,null,$,"beforeMount");const ue=(!E||E&&!E.pendingBranch)&&G&&!G.persisted;ue&&G.beforeEnter(S),n(S,h,g),((A=H&&H.onVnodeMounted)||ue||q)&&Re(()=>{A&&Ye(A,$,d),ue&&G.enter(S),q&&Ct(d,null,$,"mounted")},E)},j=(d,h,g,$,E)=>{if(g&&p(d,g),$)for(let N=0;N<$.length;N++)p(d,$[N]);if(E){let N=E.subTree;if(h===N){const P=E.vnode;j(d,P,P.scopeId,P.slotScopeIds,E.parent)}}},O=(d,h,g,$,E,N,P,w,S=0)=>{for(let A=S;A<d.length;A++){const k=d[A]=w?$t(d[A]):Je(d[A]);y(null,k,h,g,$,E,N,P,w)}},Y=(d,h,g,$,E,N,P)=>{const w=h.el=d.el;let{patchFlag:S,dynamicChildren:A,dirs:k}=h;S|=d.patchFlag&16;const H=d.props||ae,U=h.props||ae;let G;g&&Pt(g,!1),(G=U.onVnodeBeforeUpdate)&&Ye(G,g,h,d),k&&Ct(h,d,g,"beforeUpdate"),g&&Pt(g,!0);const q=E&&h.type!=="foreignObject";if(A?Z(d.dynamicChildren,A,w,g,$,q,N):P||ne(d,h,w,null,g,$,q,N,!1),S>0){if(S&16)fe(w,h,H,U,g,$,E);else if(S&2&&H.class!==U.class&&s(w,"class",null,U.class,E),S&4&&s(w,"style",H.style,U.style,E),S&8){const ue=h.dynamicProps;for(let oe=0;oe<ue.length;oe++){const $e=ue[oe],Be=H[$e],Vt=U[$e];(Vt!==Be||$e==="value")&&s(w,$e,Be,Vt,E,d.children,g,$,R)}}S&1&&d.children!==h.children&&c(w,h.children)}else!P&&A==null&&fe(w,h,H,U,g,$,E);((G=U.onVnodeUpdated)||k)&&Re(()=>{G&&Ye(G,g,h,d),k&&Ct(h,d,g,"updated")},$)},Z=(d,h,g,$,E,N,P)=>{for(let w=0;w<h.length;w++){const S=d[w],A=h[w],k=S.el&&(S.type===se||!Ht(S,A)||S.shapeFlag&70)?f(S.el):g;y(S,A,k,null,$,E,N,P,!0)}},fe=(d,h,g,$,E,N,P)=>{if(g!==$){if(g!==ae)for(const w in g)!pn(w)&&!(w in $)&&s(d,w,g[w],null,P,h.children,E,N,R);for(const w in $){if(pn(w))continue;const S=$[w],A=g[w];S!==A&&w!=="value"&&s(d,w,A,S,P,h.children,E,N,R)}"value"in $&&s(d,"value",g.value,$.value)}},F=(d,h,g,$,E,N,P,w,S)=>{const A=h.el=d?d.el:a(""),k=h.anchor=d?d.anchor:a("");let{patchFlag:H,dynamicChildren:U,slotScopeIds:G}=h;G&&(w=w?w.concat(G):G),d==null?(n(A,g,$),n(k,g,$),O(h.children,g,k,E,N,P,w,S)):H>0&&H&64&&U&&d.dynamicChildren?(Z(d.dynamicChildren,U,g,E,N,P,w),(h.key!=null||E&&h===E.subTree)&&ec(d,h,!0)):ne(d,h,g,k,E,N,P,w,S)},ie=(d,h,g,$,E,N,P,w,S)=>{h.slotScopeIds=w,d==null?h.shapeFlag&512?E.ctx.activate(h,g,$,P,S):de(h,g,$,E,N,P,S):me(d,h,S)},de=(d,h,g,$,E,N,P)=>{const w=d.component=Jf(d,$,E);if(kn(d)&&(w.ctx.renderer=J),e0(w),w.asyncDep){if(E&&E.registerDep(w,ve),!d.el){const S=w.subTree=ye(Ve);m(null,S,h,g)}return}ve(w,d,h,g,E,N,P)},me=(d,h,g)=>{const $=h.component=d.component;if(cf(d,h,g))if($.asyncDep&&!$.asyncResolved){ce($,h,g);return}else $.next=h,rf($.update),$.update();else h.el=d.el,$.vnode=h},ve=(d,h,g,$,E,N,P)=>{const w=()=>{if(d.isMounted){let{next:k,bu:H,u:U,parent:G,vnode:q}=d,ue=k,oe;Pt(d,!1),k?(k.el=q.el,ce(d,k,P)):k=q,H&&hn(H),(oe=k.props&&k.props.onVnodeBeforeUpdate)&&Ye(oe,G,k,q),Pt(d,!0);const $e=Zn(d),Be=d.subTree;d.subTree=$e,y(Be,$e,f(Be.el),C(Be),d,E,N),k.el=$e.el,ue===null&&uf(d,$e.el),U&&Re(U,E),(oe=k.props&&k.props.onVnodeUpdated)&&Re(()=>Ye(oe,G,k,q),E)}else{let k;const{el:H,props:U}=h,{bm:G,m:q,parent:ue}=d,oe=mn(h);if(Pt(d,!1),G&&hn(G),!oe&&(k=U&&U.onVnodeBeforeMount)&&Ye(k,ue,h),Pt(d,!0),H&&V){const $e=()=>{d.subTree=Zn(d),V(H,d.subTree,d,E,null)};oe?h.type.__asyncLoader().then(()=>!d.isUnmounted&&$e()):$e()}else{const $e=d.subTree=Zn(d);y(null,$e,g,$,d,E,N),h.el=$e.el}if(q&&Re(q,E),!oe&&(k=U&&U.onVnodeMounted)){const $e=h;Re(()=>Ye(k,ue,$e),E)}(h.shapeFlag&256||ue&&mn(ue.vnode)&&ue.vnode.shapeFlag&256)&&d.a&&Re(d.a,E),d.isMounted=!0,h=g=$=null}},S=d.effect=new _s(w,()=>Ns(A),d.scope),A=d.update=()=>S.run();A.id=d.uid,Pt(d,!0),A()},ce=(d,h,g)=>{h.component=d;const $=d.vnode.props;d.vnode=h,d.next=null,Mf(d,h.props,$,g),Uf(d,h.children,g),ir(),ii(),ar()},ne=(d,h,g,$,E,N,P,w,S=!1)=>{const A=d&&d.children,k=d?d.shapeFlag:0,H=h.children,{patchFlag:U,shapeFlag:G}=h;if(U>0){if(U&128){Ot(A,H,g,$,E,N,P,w,S);return}else if(U&256){Ue(A,H,g,$,E,N,P,w,S);return}}G&8?(k&16&&R(A,E,N),H!==A&&c(g,H)):k&16?G&16?Ot(A,H,g,$,E,N,P,w,S):R(A,E,N,!0):(k&8&&c(g,""),G&16&&O(H,g,$,E,N,P,w,S))},Ue=(d,h,g,$,E,N,P,w,S)=>{d=d||Yt,h=h||Yt;const A=d.length,k=h.length,H=Math.min(A,k);let U;for(U=0;U<H;U++){const G=h[U]=S?$t(h[U]):Je(h[U]);y(d[U],G,g,null,E,N,P,w,S)}A>k?R(d,E,N,!0,!1,H):O(h,g,$,E,N,P,w,S,H)},Ot=(d,h,g,$,E,N,P,w,S)=>{let A=0;const k=h.length;let H=d.length-1,U=k-1;for(;A<=H&&A<=U;){const G=d[A],q=h[A]=S?$t(h[A]):Je(h[A]);if(Ht(G,q))y(G,q,g,null,E,N,P,w,S);else break;A++}for(;A<=H&&A<=U;){const G=d[H],q=h[U]=S?$t(h[U]):Je(h[U]);if(Ht(G,q))y(G,q,g,null,E,N,P,w,S);else break;H--,U--}if(A>H){if(A<=U){const G=U+1,q=G<k?h[G].el:$;for(;A<=U;)y(null,h[A]=S?$t(h[A]):Je(h[A]),g,q,E,N,P,w,S),A++}}else if(A>U)for(;A<=H;)Te(d[A],E,N,!0),A++;else{const G=A,q=A,ue=new Map;for(A=q;A<=U;A++){const Fe=h[A]=S?$t(h[A]):Je(h[A]);Fe.key!=null&&ue.set(Fe.key,A)}let oe,$e=0;const Be=U-q+1;let Vt=!1,zs=0;const pr=new Array(Be);for(A=0;A<Be;A++)pr[A]=0;for(A=G;A<=H;A++){const Fe=d[A];if($e>=Be){Te(Fe,E,N,!0);continue}let Qe;if(Fe.key!=null)Qe=ue.get(Fe.key);else for(oe=q;oe<=U;oe++)if(pr[oe-q]===0&&Ht(Fe,h[oe])){Qe=oe;break}Qe===void 0?Te(Fe,E,N,!0):(pr[Qe-q]=A+1,Qe>=zs?zs=Qe:Vt=!0,y(Fe,h[Qe],g,null,E,N,P,w,S),$e++)}const qs=Vt?jf(pr):Yt;for(oe=qs.length-1,A=Be-1;A>=0;A--){const Fe=q+A,Qe=h[Fe],Qs=Fe+1<k?h[Fe+1].el:$;pr[A]===0?y(null,Qe,g,Qs,E,N,P,w,S):Vt&&(oe<0||A!==qs[oe]?We(Qe,g,Qs,2):oe--)}}},We=(d,h,g,$,E=null)=>{const{el:N,type:P,transition:w,children:S,shapeFlag:A}=d;if(A&6){We(d.component.subTree,h,g,$);return}if(A&128){d.suspense.move(h,g,$);return}if(A&64){P.move(d,h,g,J);return}if(P===se){n(N,h,g);for(let H=0;H<S.length;H++)We(S[H],h,g,$);n(d.anchor,h,g);return}if(P===eo){M(d,h,g);return}if($!==2&&A&1&&w)if($===0)w.beforeEnter(N),n(N,h,g),Re(()=>w.enter(N),E);else{const{leave:H,delayLeave:U,afterLeave:G}=w,q=()=>n(N,h,g),ue=()=>{H(N,()=>{q(),G&&G()})};U?U(N,q,ue):ue()}else n(N,h,g)},Te=(d,h,g,$=!1,E=!1)=>{const{type:N,props:P,ref:w,children:S,dynamicChildren:A,shapeFlag:k,patchFlag:H,dirs:U}=d;if(w!=null&&Ko(w,null,g,d,!0),k&256){h.ctx.deactivate(d);return}const G=k&1&&U,q=!mn(d);let ue;if(q&&(ue=P&&P.onVnodeBeforeUnmount)&&Ye(ue,h,d),k&6)b(d.component,g,$);else{if(k&128){d.suspense.unmount(g,$);return}G&&Ct(d,null,h,"beforeUnmount"),k&64?d.type.remove(d,h,g,E,J,$):A&&(N!==se||H>0&&H&64)?R(A,h,g,!1,!0):(N===se&&H&384||!E&&k&16)&&R(S,h,g),$&&xt(d)}(q&&(ue=P&&P.onVnodeUnmounted)||G)&&Re(()=>{ue&&Ye(ue,h,d),G&&Ct(d,null,h,"unmounted")},g)},xt=d=>{const{type:h,el:g,anchor:$,transition:E}=d;if(h===se){jr(g,$);return}if(h===eo){B(d);return}const N=()=>{o(g),E&&!E.persisted&&E.afterLeave&&E.afterLeave()};if(d.shapeFlag&1&&E&&!E.persisted){const{leave:P,delayLeave:w}=E,S=()=>P(g,N);w?w(d.el,N,S):S()}else N()},jr=(d,h)=>{let g;for(;d!==h;)g=v(d),o(d),d=g;o(h)},b=(d,h,g)=>{const{bum:$,scope:E,update:N,subTree:P,um:w}=d;$&&hn($),E.stop(),N&&(N.active=!1,Te(P,d,h,g)),w&&Re(w,h),Re(()=>{d.isUnmounted=!0},h),h&&h.pendingBranch&&!h.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===h.pendingId&&(h.deps--,h.deps===0&&h.resolve())},R=(d,h,g,$=!1,E=!1,N=0)=>{for(let P=N;P<d.length;P++)Te(d[P],h,g,$,E)},C=d=>d.shapeFlag&6?C(d.component.subTree):d.shapeFlag&128?d.suspense.next():v(d.anchor||d.el),D=(d,h,g)=>{d==null?h._vnode&&Te(h._vnode,null,null,!0):y(h._vnode||null,d,h,null,null,null,g),ii(),Ml(),h._vnode=d},J={p:y,um:Te,m:We,r:xt,mt:de,mc:O,pc:ne,pbc:Z,n:C,o:e};let pe,V;return t&&([pe,V]=t(J)),{render:D,hydrate:pe,createApp:Bf(D,pe)}}function Pt({effect:e,update:t},r){e.allowRecurse=t.allowRecurse=r}function ec(e,t,r=!1){const n=e.children,o=t.children;if(W(n)&&W(o))for(let s=0;s<n.length;s++){const i=n[s];let a=o[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=o[s]=$t(o[s]),a.el=i.el),r||ec(i,a))}}function jf(e){const t=e.slice(),r=[0];let n,o,s,i,a;const l=e.length;for(n=0;n<l;n++){const u=e[n];if(u!==0){if(o=r[r.length-1],e[o]<u){t[n]=o,r.push(n);continue}for(s=0,i=r.length-1;s<i;)a=s+i>>1,e[r[a]]<u?s=a+1:i=a;u<e[r[s]]&&(s>0&&(t[n]=r[s-1]),r[s]=n)}}for(s=r.length,i=r[s-1];s-- >0;)r[s]=i,i=t[i];return r}const xf=e=>e.__isTeleport,se=Symbol(void 0),Ps=Symbol(void 0),Ve=Symbol(void 0),eo=Symbol(void 0),wr=[];let je=null;function X(e=!1){wr.push(je=e?null:[])}function Vf(){wr.pop(),je=wr[wr.length-1]||null}let Lr=1;function mi(e){Lr+=e}function tc(e){return e.dynamicChildren=Lr>0?je||Yt:null,Vf(),Lr>0&&je&&je.push(e),e}function z(e,t,r,n,o,s){return tc(T(e,t,r,n,o,s,!0))}function Xf(e,t,r,n,o){return tc(ye(e,t,r,n,o,!0))}function Go(e){return e?e.__v_isVNode===!0:!1}function Ht(e,t){return e.type===t.type&&e.key===t.key}const Bn="__vInternal",rc=({key:e})=>e!=null?e:null,$n=({ref:e,ref_key:t,ref_for:r})=>e!=null?Ie(e)||_e(e)||x(e)?{i:De,r:e,k:t,f:!!r}:e:null;function T(e,t=null,r=null,n=0,o=null,s=e===se?0:1,i=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&rc(t),ref:t&&$n(t),scopeId:Dn,slotScopeIds:null,children:r,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:n,dynamicProps:o,dynamicChildren:null,appContext:null};return a?(Ts(l,r),s&128&&e.normalize(l)):r&&(l.shapeFlag|=Ie(r)?8:16),Lr>0&&!i&&je&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&je.push(l),l}const ye=zf;function zf(e,t=null,r=null,n=0,o=null,s=!1){if((!e||e===Sf)&&(e=Ve),Go(e)){const a=St(e,t,!0);return r&&Ts(a,r),Lr>0&&!s&&je&&(a.shapeFlag&6?je[je.indexOf(e)]=a:je.push(a)),a.patchFlag|=-2,a}if(s0(e)&&(e=e.__vccOpts),t){t=qf(t);let{class:a,style:l}=t;a&&!Ie(a)&&(t.class=Et(a)),le(l)&&(Ol(l)&&!W(l)&&(l=Ne({},l)),t.style=On(l))}const i=Ie(e)?1:ff(e)?128:xf(e)?64:le(e)?4:x(e)?2:0;return T(e,t,r,n,o,i,s,!0)}function qf(e){return e?Ol(e)||Bn in e?Ne({},e):e:null}function St(e,t,r=!1){const{props:n,ref:o,patchFlag:s,children:i}=e,a=t?Qf(n||{},t):n;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:a,key:a&&rc(a),ref:t&&t.ref?r&&o?W(o)?o.concat($n(t)):[o,$n(t)]:$n(t):o,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:i,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==se?s===-1?16:s|16:s,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&St(e.ssContent),ssFallback:e.ssFallback&&St(e.ssFallback),el:e.el,anchor:e.anchor}}function lt(e=" ",t=0){return ye(Ps,null,e,t)}function nc(e="",t=!1){return t?(X(),Xf(Ve,null,e)):ye(Ve,null,e)}function Je(e){return e==null||typeof e=="boolean"?ye(Ve):W(e)?ye(se,null,e.slice()):typeof e=="object"?$t(e):ye(Ps,null,String(e))}function $t(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:St(e)}function Ts(e,t){let r=0;const{shapeFlag:n}=e;if(t==null)t=null;else if(W(t))r=16;else if(typeof t=="object")if(n&65){const o=t.default;o&&(o._c&&(o._d=!1),Ts(e,o()),o._c&&(o._d=!0));return}else{r=32;const o=t._;!o&&!(Bn in t)?t._ctx=De:o===3&&De&&(De.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else x(t)?(t={default:t,_ctx:De},r=32):(t=String(t),n&64?(r=16,t=[lt(t)]):r=8);e.children=t,e.shapeFlag|=r}function Qf(...e){const t={};for(let r=0;r<e.length;r++){const n=e[r];for(const o in n)if(o==="class")t.class!==n.class&&(t.class=Et([t.class,n.class]));else if(o==="style")t.style=On([t.style,n.style]);else if(Pn(o)){const s=t[o],i=n[o];i&&s!==i&&!(W(s)&&s.includes(i))&&(t[o]=s?[].concat(s,i):i)}else o!==""&&(t[o]=n[o])}return t}function Ye(e,t,r,n=null){ke(e,t,7,[r,n])}const Yf=Jl();let Zf=0;function Jf(e,t,r){const n=e.type,o=(t?t.appContext:e.appContext)||Yf,s={uid:Zf++,vnode:e,type:n,parent:t,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,scope:new hl(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(o.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ql(n,o),emitsOptions:kl(n,o),emit:null,emitted:null,propsDefaults:ae,inheritAttrs:n.inheritAttrs,ctx:ae,data:ae,props:ae,attrs:ae,slots:ae,refs:ae,setupState:ae,setupContext:null,suspense:r,suspenseId:r?r.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=t?t.root:s,s.emit=sf.bind(null,s),e.ce&&e.ce(s),s}let Ee=null;const Rs=()=>Ee||De,rr=e=>{Ee=e,e.scope.on()},Kt=()=>{Ee&&Ee.scope.off(),Ee=null};function oc(e){return e.vnode.shapeFlag&4}let Hr=!1;function e0(e,t=!1){Hr=t;const{props:r,children:n}=e.vnode,o=oc(e);Hf(e,r,o,t),kf(e,n);const s=o?t0(e,t):void 0;return Hr=!1,s}function t0(e,t){const r=e.type;e.accessCache=Object.create(null),e.proxy=tr(new Proxy(e.ctx,Cf));const{setup:n}=r;if(n){const o=e.setupContext=n.length>1?n0(e):null;rr(e),ir();const s=wt(n,e,0,[e.props,o]);if(ar(),Kt(),dl(s)){if(s.then(Kt,Kt),t)return s.then(i=>{_i(e,i,t)}).catch(i=>{Hn(i,e,0)});e.asyncDep=s}else _i(e,s,t)}else sc(e,t)}function _i(e,t,r){x(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:le(t)&&(e.setupState=Rl(t)),sc(e,r)}let $i;function sc(e,t,r){const n=e.type;if(!e.render){if(!t&&$i&&!n.render){const o=n.template||Os(e).template;if(o){const{isCustomElement:s,compilerOptions:i}=e.appContext.config,{delimiters:a,compilerOptions:l}=n,u=Ne(Ne({isCustomElement:s,delimiters:a},i),l);n.render=$i(o,u)}}e.render=n.render||xe}rr(e),ir(),Pf(e),ar(),Kt()}function r0(e){return new Proxy(e.attrs,{get(t,r){return Le(e,"get","$attrs"),t[r]}})}function n0(e){const t=n=>{e.exposed=n||{}};let r;return{get attrs(){return r||(r=r0(e))},slots:e.slots,emit:e.emit,expose:t}}function Kn(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Rl(tr(e.exposed)),{get(t,r){if(r in t)return t[r];if(r in An)return An[r](e)}}))}function o0(e,t=!0){return x(e)?e.displayName||e.name:e.name||t&&e.__name}function s0(e){return x(e)&&"__vccOpts"in e}const ge=(e,t)=>Ju(e,t,Hr);function Fs(e,t,r){const n=arguments.length;return n===2?le(t)&&!W(t)?Go(t)?ye(e,null,[t]):ye(e,t):ye(e,null,t):(n>3?r=Array.prototype.slice.call(arguments,2):n===3&&Go(r)&&(r=[r]),ye(e,t,r))}const i0="3.2.41",a0="http://www.w3.org/2000/svg",Mt=typeof document<"u"?document:null,yi=Mt&&Mt.createElement("template"),l0={insert:(e,t,r)=>{t.insertBefore(e,r||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,r,n)=>{const o=t?Mt.createElementNS(a0,e):Mt.createElement(e,r?{is:r}:void 0);return e==="select"&&n&&n.multiple!=null&&o.setAttribute("multiple",n.multiple),o},createText:e=>Mt.createTextNode(e),createComment:e=>Mt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Mt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,r,n,o,s){const i=r?r.previousSibling:t.lastChild;if(o&&(o===s||o.nextSibling))for(;t.insertBefore(o.cloneNode(!0),r),!(o===s||!(o=o.nextSibling)););else{yi.innerHTML=n?`<svg>${e}</svg>`:e;const a=yi.content;if(n){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,r)}return[i?i.nextSibling:t.firstChild,r?r.previousSibling:t.lastChild]}};function c0(e,t,r){const n=e._vtc;n&&(t=(t?[t,...n]:[...n]).join(" ")),t==null?e.removeAttribute("class"):r?e.setAttribute("class",t):e.className=t}function u0(e,t,r){const n=e.style,o=Ie(r);if(r&&!o){for(const s in r)jo(n,s,r[s]);if(t&&!Ie(t))for(const s in t)r[s]==null&&jo(n,s,"")}else{const s=n.display;o?t!==r&&(n.cssText=r):t&&e.removeAttribute("style"),"_vod"in e&&(n.display=s)}}const bi=/\s*!important$/;function jo(e,t,r){if(W(r))r.forEach(n=>jo(e,t,n));else if(r==null&&(r=""),t.startsWith("--"))e.setProperty(t,r);else{const n=f0(e,t);bi.test(r)?e.setProperty(sr(n),r.replace(bi,""),"important"):e[n]=r}}const Ei=["Webkit","Moz","ms"],to={};function f0(e,t){const r=to[t];if(r)return r;let n=rt(t);if(n!=="filter"&&n in e)return to[t]=n;n=Fn(n);for(let o=0;o<Ei.length;o++){const s=Ei[o]+n;if(s in e)return to[t]=s}return t}const Ii="http://www.w3.org/1999/xlink";function d0(e,t,r,n,o){if(n&&t.startsWith("xlink:"))r==null?e.removeAttributeNS(Ii,t.slice(6,t.length)):e.setAttributeNS(Ii,t,r);else{const s=au(t);r==null||s&&!cl(r)?e.removeAttribute(t):e.setAttribute(t,s?"":r)}}function v0(e,t,r,n,o,s,i){if(t==="innerHTML"||t==="textContent"){n&&i(n,o,s),e[t]=r==null?"":r;return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=r;const l=r==null?"":r;(e.value!==l||e.tagName==="OPTION")&&(e.value=l),r==null&&e.removeAttribute(t);return}let a=!1;if(r===""||r==null){const l=typeof e[t];l==="boolean"?r=cl(r):r==null&&l==="string"?(r="",a=!0):l==="number"&&(r=0,a=!0)}try{e[t]=r}catch{}a&&e.removeAttribute(t)}function Dt(e,t,r,n){e.addEventListener(t,r,n)}function p0(e,t,r,n){e.removeEventListener(t,r,n)}function h0(e,t,r,n,o=null){const s=e._vei||(e._vei={}),i=s[t];if(n&&i)i.value=n;else{const[a,l]=g0(t);if(n){const u=s[t]=$0(n,o);Dt(e,a,u,l)}else i&&(p0(e,a,i,l),s[t]=void 0)}}const Ai=/(?:Once|Passive|Capture)$/;function g0(e){let t;if(Ai.test(e)){t={};let n;for(;n=e.match(Ai);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):sr(e.slice(2)),t]}let ro=0;const m0=Promise.resolve(),_0=()=>ro||(m0.then(()=>ro=0),ro=Date.now());function $0(e,t){const r=n=>{if(!n._vts)n._vts=Date.now();else if(n._vts<=r.attached)return;ke(y0(n,r.value),t,5,[n])};return r.value=e,r.attached=_0(),r}function y0(e,t){if(W(t)){const r=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{r.call(e),e._stopped=!0},t.map(n=>o=>!o._stopped&&n&&n(o))}else return t}const wi=/^on[a-z]/,b0=(e,t,r,n,o=!1,s,i,a,l)=>{t==="class"?c0(e,n,o):t==="style"?u0(e,r,n):Pn(t)?ps(t)||h0(e,t,r,n,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):E0(e,t,n,o))?v0(e,t,n,s,i,a,l):(t==="true-value"?e._trueValue=n:t==="false-value"&&(e._falseValue=n),d0(e,t,n,o))};function E0(e,t,r,n){return n?!!(t==="innerHTML"||t==="textContent"||t in e&&wi.test(t)&&x(r)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||wi.test(t)&&Ie(r)?!1:t in e}const vt="transition",hr="animation",Ls=(e,{slots:t})=>Fs(Bl,I0(e),t);Ls.displayName="Transition";const ic={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Ls.props=Ne({},Bl.props,ic);const Tt=(e,t=[])=>{W(e)?e.forEach(r=>r(...t)):e&&e(...t)},Ni=e=>e?W(e)?e.some(t=>t.length>1):e.length>1:!1;function I0(e){const t={};for(const F in e)F in ic||(t[F]=e[F]);if(e.css===!1)return t;const{name:r="v",type:n,duration:o,enterFromClass:s=`${r}-enter-from`,enterActiveClass:i=`${r}-enter-active`,enterToClass:a=`${r}-enter-to`,appearFromClass:l=s,appearActiveClass:u=i,appearToClass:c=a,leaveFromClass:f=`${r}-leave-from`,leaveActiveClass:v=`${r}-leave-active`,leaveToClass:p=`${r}-leave-to`}=e,_=A0(o),y=_&&_[0],I=_&&_[1],{onBeforeEnter:m,onEnter:L,onEnterCancelled:M,onLeave:B,onLeaveCancelled:K,onBeforeAppear:te=m,onAppear:j=L,onAppearCancelled:O=M}=t,Y=(F,ie,de)=>{Rt(F,ie?c:a),Rt(F,ie?u:i),de&&de()},Z=(F,ie)=>{F._isLeaving=!1,Rt(F,f),Rt(F,p),Rt(F,v),ie&&ie()},fe=F=>(ie,de)=>{const me=F?j:L,ve=()=>Y(ie,F,de);Tt(me,[ie,ve]),Si(()=>{Rt(ie,F?l:s),pt(ie,F?c:a),Ni(me)||Oi(ie,n,y,ve)})};return Ne(t,{onBeforeEnter(F){Tt(m,[F]),pt(F,s),pt(F,i)},onBeforeAppear(F){Tt(te,[F]),pt(F,l),pt(F,u)},onEnter:fe(!1),onAppear:fe(!0),onLeave(F,ie){F._isLeaving=!0;const de=()=>Z(F,ie);pt(F,f),S0(),pt(F,v),Si(()=>{!F._isLeaving||(Rt(F,f),pt(F,p),Ni(B)||Oi(F,n,I,de))}),Tt(B,[F,de])},onEnterCancelled(F){Y(F,!1),Tt(M,[F])},onAppearCancelled(F){Y(F,!0),Tt(O,[F])},onLeaveCancelled(F){Z(F),Tt(K,[F])}})}function A0(e){if(e==null)return null;if(le(e))return[no(e.enter),no(e.leave)];{const t=no(e);return[t,t]}}function no(e){return bn(e)}function pt(e,t){t.split(/\s+/).forEach(r=>r&&e.classList.add(r)),(e._vtc||(e._vtc=new Set)).add(t)}function Rt(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.remove(n));const{_vtc:r}=e;r&&(r.delete(t),r.size||(e._vtc=void 0))}function Si(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let w0=0;function Oi(e,t,r,n){const o=e._endId=++w0,s=()=>{o===e._endId&&n()};if(r)return setTimeout(s,r);const{type:i,timeout:a,propCount:l}=N0(e,t);if(!i)return n();const u=i+"end";let c=0;const f=()=>{e.removeEventListener(u,v),s()},v=p=>{p.target===e&&++c>=l&&f()};setTimeout(()=>{c<l&&f()},a+1),e.addEventListener(u,v)}function N0(e,t){const r=window.getComputedStyle(e),n=_=>(r[_]||"").split(", "),o=n(vt+"Delay"),s=n(vt+"Duration"),i=Ci(o,s),a=n(hr+"Delay"),l=n(hr+"Duration"),u=Ci(a,l);let c=null,f=0,v=0;t===vt?i>0&&(c=vt,f=i,v=s.length):t===hr?u>0&&(c=hr,f=u,v=l.length):(f=Math.max(i,u),c=f>0?i>u?vt:hr:null,v=c?c===vt?s.length:l.length:0);const p=c===vt&&/\b(transform|all)(,|$)/.test(r[vt+"Property"]);return{type:c,timeout:f,propCount:v,hasTransform:p}}function Ci(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((r,n)=>Pi(r)+Pi(e[n])))}function Pi(e){return Number(e.slice(0,-1).replace(",","."))*1e3}function S0(){return document.body.offsetHeight}const Nn=e=>{const t=e.props["onUpdate:modelValue"]||!1;return W(t)?r=>hn(t,r):t};function O0(e){e.target.composing=!0}function Ti(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const C0={created(e,{modifiers:{lazy:t,trim:r,number:n}},o){e._assign=Nn(o);const s=n||o.props&&o.props.type==="number";Dt(e,t?"change":"input",i=>{if(i.target.composing)return;let a=e.value;r&&(a=a.trim()),s&&(a=bn(a)),e._assign(a)}),r&&Dt(e,"change",()=>{e.value=e.value.trim()}),t||(Dt(e,"compositionstart",O0),Dt(e,"compositionend",Ti),Dt(e,"change",Ti))},mounted(e,{value:t}){e.value=t==null?"":t},beforeUpdate(e,{value:t,modifiers:{lazy:r,trim:n,number:o}},s){if(e._assign=Nn(s),e.composing||document.activeElement===e&&e.type!=="range"&&(r||n&&e.value.trim()===t||(o||e.type==="number")&&bn(e.value)===t))return;const i=t==null?"":t;e.value!==i&&(e.value=i)}},oo={deep:!0,created(e,t,r){e._assign=Nn(r),Dt(e,"change",()=>{const n=e._modelValue,o=P0(e),s=e.checked,i=e._assign;if(W(n)){const a=ul(n,o),l=a!==-1;if(s&&!l)i(n.concat(o));else if(!s&&l){const u=[...n];u.splice(a,1),i(u)}}else if(Tn(n)){const a=new Set(n);s?a.add(o):a.delete(o),i(a)}else i(ac(e,s))})},mounted:Ri,beforeUpdate(e,t,r){e._assign=Nn(r),Ri(e,t,r)}};function Ri(e,{value:t,oldValue:r},n){e._modelValue=t,W(t)?e.checked=ul(t,n.props.value)>-1:Tn(t)?e.checked=t.has(n.props.value):t!==r&&(e.checked=Cn(t,ac(e,!0)))}function P0(e){return"_value"in e?e._value:e.value}function ac(e,t){const r=t?"_trueValue":"_falseValue";return r in e?e[r]:t}const T0=["ctrl","shift","alt","meta"],R0={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>T0.some(r=>e[`${r}Key`]&&!t.includes(r))},F0=(e,t)=>(r,...n)=>{for(let o=0;o<t.length;o++){const s=R0[t[o]];if(s&&s(r,t))return}return e(r,...n)},L0=Ne({patchProp:b0},l0);let Fi;function H0(){return Fi||(Fi=Kf(L0))}const M0=(...e)=>{const t=H0().createApp(...e),{mount:r}=t;return t.mount=n=>{const o=D0(n);if(!o)return;const s=t._component;!x(s)&&!s.render&&!s.template&&(s.template=o.innerHTML),o.innerHTML="";const i=r(o,!1,o instanceof SVGElement);return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),i},t};function D0(e){return Ie(e)?document.querySelector(e):e}var k0=!1;/*!
  * pinia v2.0.23
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */let lc;const Gn=e=>lc=e,cc=Symbol();function xo(e){return e&&typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"&&typeof e.toJSON!="function"}var Nr;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(Nr||(Nr={}));function U0(){const e=gl(!0),t=e.run(()=>we({}));let r=[],n=[];const o=tr({install(s){Gn(o),o._a=s,s.provide(cc,o),s.config.globalProperties.$pinia=o,n.forEach(i=>r.push(i)),n=[]},use(s){return!this._a&&!k0?n.push(s):r.push(s),this},_p:r,_a:null,_e:e,_s:new Map,state:t});return o}const uc=()=>{};function Li(e,t,r,n=uc){e.push(t);const o=()=>{const s=e.indexOf(t);s>-1&&(e.splice(s,1),n())};return!r&&Rs()&&Wr(o),o}function Xt(e,...t){e.slice().forEach(r=>{r(...t)})}function Vo(e,t){e instanceof Map&&t instanceof Map&&t.forEach((r,n)=>e.set(n,r)),e instanceof Set&&t instanceof Set&&t.forEach(e.add,e);for(const r in t){if(!t.hasOwnProperty(r))continue;const n=t[r],o=e[r];xo(o)&&xo(n)&&e.hasOwnProperty(r)&&!_e(n)&&!At(n)?e[r]=Vo(o,n):e[r]=n}return e}const W0=Symbol();function B0(e){return!xo(e)||!e.hasOwnProperty(W0)}const{assign:yt}=Object;function K0(e){return!!(_e(e)&&e.effect)}function G0(e,t,r,n){const{state:o,actions:s,getters:i}=t,a=r.state.value[e];let l;function u(){a||(r.state.value[e]=o?o():{});const c=qu(r.state.value[e]);return yt(c,s,Object.keys(i||{}).reduce((f,v)=>(f[v]=tr(ge(()=>{Gn(r);const p=r._s.get(e);return i[v].call(p,p)})),f),{}))}return l=fc(e,u,t,r,n,!0),l.$reset=function(){const f=o?o():{};this.$patch(v=>{yt(v,f)})},l}function fc(e,t,r={},n,o,s){let i;const a=yt({actions:{}},r),l={deep:!0};let u,c,f=tr([]),v=tr([]),p;const _=n.state.value[e];!s&&!_&&(n.state.value[e]={}),we({});let y;function I(j){let O;u=c=!1,typeof j=="function"?(j(n.state.value[e]),O={type:Nr.patchFunction,storeId:e,events:p}):(Vo(n.state.value[e],j),O={type:Nr.patchObject,payload:j,storeId:e,events:p});const Y=y=Symbol();ws().then(()=>{y===Y&&(u=!0)}),c=!0,Xt(f,O,n.state.value[e])}const m=uc;function L(){i.stop(),f=[],v=[],n._s.delete(e)}function M(j,O){return function(){Gn(n);const Y=Array.from(arguments),Z=[],fe=[];function F(me){Z.push(me)}function ie(me){fe.push(me)}Xt(v,{args:Y,name:j,store:K,after:F,onError:ie});let de;try{de=O.apply(this&&this.$id===e?this:K,Y)}catch(me){throw Xt(fe,me),me}return de instanceof Promise?de.then(me=>(Xt(Z,me),me)).catch(me=>(Xt(fe,me),Promise.reject(me))):(Xt(Z,de),de)}}const B={_p:n,$id:e,$onAction:Li.bind(null,v),$patch:I,$reset:m,$subscribe(j,O={}){const Y=Li(f,j,O.detached,()=>Z()),Z=i.run(()=>Bt(()=>n.state.value[e],fe=>{(O.flush==="sync"?c:u)&&j({storeId:e,type:Nr.direct,events:p},fe)},yt({},l,O)));return Y},$dispose:L},K=Gt(B);n._s.set(e,K);const te=n._e.run(()=>(i=gl(),i.run(()=>t())));for(const j in te){const O=te[j];if(_e(O)&&!K0(O)||At(O))s||(_&&B0(O)&&(_e(O)?O.value=_[j]:Vo(O,_[j])),n.state.value[e][j]=O);else if(typeof O=="function"){const Y=M(j,O);te[j]=Y,a.actions[j]=O}}return yt(K,te),yt(ee(K),te),Object.defineProperty(K,"$state",{get:()=>n.state.value[e],set:j=>{I(O=>{yt(O,j)})}}),n._p.forEach(j=>{yt(K,i.run(()=>j({store:K,app:n._a,pinia:n,options:a})))}),_&&s&&r.hydrate&&r.hydrate(K.$state,_),u=!0,c=!0,K}function dc(e,t,r){let n,o;const s=typeof t=="function";typeof e=="string"?(n=e,o=s?r:t):(o=e,n=e.id);function i(a,l){const u=Rs();return a=a||u&&tt(cc),a&&Gn(a),a=lc,a._s.has(n)||(s?fc(n,t,o,a):G0(n,o,a)),a._s.get(n)}return i.$id=n,i}/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Qt=typeof window<"u";function j0(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const re=Object.assign;function so(e,t){const r={};for(const n in t){const o=t[n];r[n]=Xe(o)?o.map(e):e(o)}return r}const Sr=()=>{},Xe=Array.isArray,x0=/\/$/,V0=e=>e.replace(x0,"");function io(e,t,r="/"){let n,o={},s="",i="";const a=t.indexOf("#");let l=t.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(n=t.slice(0,l),s=t.slice(l+1,a>-1?a:t.length),o=e(s)),a>-1&&(n=n||t.slice(0,a),i=t.slice(a,t.length)),n=Q0(n!=null?n:t,r),{fullPath:n+(s&&"?")+s+i,path:n,query:o,hash:i}}function X0(e,t){const r=t.query?e(t.query):"";return t.path+(r&&"?")+r+(t.hash||"")}function Hi(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function z0(e,t,r){const n=t.matched.length-1,o=r.matched.length-1;return n>-1&&n===o&&nr(t.matched[n],r.matched[o])&&vc(t.params,r.params)&&e(t.query)===e(r.query)&&t.hash===r.hash}function nr(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function vc(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const r in e)if(!q0(e[r],t[r]))return!1;return!0}function q0(e,t){return Xe(e)?Mi(e,t):Xe(t)?Mi(t,e):e===t}function Mi(e,t){return Xe(t)?e.length===t.length&&e.every((r,n)=>r===t[n]):e.length===1&&e[0]===t}function Q0(e,t){if(e.startsWith("/"))return e;if(!e)return t;const r=t.split("/"),n=e.split("/");let o=r.length-1,s,i;for(s=0;s<n.length;s++)if(i=n[s],i!==".")if(i==="..")o>1&&o--;else break;return r.slice(0,o).join("/")+"/"+n.slice(s-(s===n.length?1:0)).join("/")}var Mr;(function(e){e.pop="pop",e.push="push"})(Mr||(Mr={}));var Or;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Or||(Or={}));function Y0(e){if(!e)if(Qt){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),V0(e)}const Z0=/^[^#]+#/;function J0(e,t){return e.replace(Z0,"#")+t}function ed(e,t){const r=document.documentElement.getBoundingClientRect(),n=e.getBoundingClientRect();return{behavior:t.behavior,left:n.left-r.left-(t.left||0),top:n.top-r.top-(t.top||0)}}const jn=()=>({left:window.pageXOffset,top:window.pageYOffset});function td(e){let t;if("el"in e){const r=e.el,n=typeof r=="string"&&r.startsWith("#"),o=typeof r=="string"?n?document.getElementById(r.slice(1)):document.querySelector(r):r;if(!o)return;t=ed(o,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function Di(e,t){return(history.state?history.state.position-t:-1)+e}const Xo=new Map;function rd(e,t){Xo.set(e,t)}function nd(e){const t=Xo.get(e);return Xo.delete(e),t}let od=()=>location.protocol+"//"+location.host;function pc(e,t){const{pathname:r,search:n,hash:o}=t,s=e.indexOf("#");if(s>-1){let a=o.includes(e.slice(s))?e.slice(s).length:1,l=o.slice(a);return l[0]!=="/"&&(l="/"+l),Hi(l,"")}return Hi(r,e)+n+o}function sd(e,t,r,n){let o=[],s=[],i=null;const a=({state:v})=>{const p=pc(e,location),_=r.value,y=t.value;let I=0;if(v){if(r.value=p,t.value=v,i&&i===_){i=null;return}I=y?v.position-y.position:0}else n(p);o.forEach(m=>{m(r.value,_,{delta:I,type:Mr.pop,direction:I?I>0?Or.forward:Or.back:Or.unknown})})};function l(){i=r.value}function u(v){o.push(v);const p=()=>{const _=o.indexOf(v);_>-1&&o.splice(_,1)};return s.push(p),p}function c(){const{history:v}=window;!v.state||v.replaceState(re({},v.state,{scroll:jn()}),"")}function f(){for(const v of s)v();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",c)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",c),{pauseListeners:l,listen:u,destroy:f}}function ki(e,t,r,n=!1,o=!1){return{back:e,current:t,forward:r,replaced:n,position:window.history.length,scroll:o?jn():null}}function id(e){const{history:t,location:r}=window,n={value:pc(e,r)},o={value:t.state};o.value||s(n.value,{back:null,current:n.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function s(l,u,c){const f=e.indexOf("#"),v=f>-1?(r.host&&document.querySelector("base")?e:e.slice(f))+l:od()+e+l;try{t[c?"replaceState":"pushState"](u,"",v),o.value=u}catch(p){console.error(p),r[c?"replace":"assign"](v)}}function i(l,u){const c=re({},t.state,ki(o.value.back,l,o.value.forward,!0),u,{position:o.value.position});s(l,c,!0),n.value=l}function a(l,u){const c=re({},o.value,t.state,{forward:l,scroll:jn()});s(c.current,c,!0);const f=re({},ki(n.value,l,null),{position:c.position+1},u);s(l,f,!1),n.value=l}return{location:n,state:o,push:a,replace:i}}function ad(e){e=Y0(e);const t=id(e),r=sd(e,t.state,t.location,t.replace);function n(s,i=!0){i||r.pauseListeners(),history.go(s)}const o=re({location:"",base:e,go:n,createHref:J0.bind(null,e)},t,r);return Object.defineProperty(o,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(o,"state",{enumerable:!0,get:()=>t.state.value}),o}function ld(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),ad(e)}function cd(e){return typeof e=="string"||e&&typeof e=="object"}function hc(e){return typeof e=="string"||typeof e=="symbol"}const ht={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},gc=Symbol("");var Ui;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Ui||(Ui={}));function or(e,t){return re(new Error,{type:e,[gc]:!0},t)}function nt(e,t){return e instanceof Error&&gc in e&&(t==null||!!(e.type&t))}const Wi="[^/]+?",ud={sensitive:!1,strict:!1,start:!0,end:!0},fd=/[.+*?^${}()[\]/\\]/g;function dd(e,t){const r=re({},ud,t),n=[];let o=r.start?"^":"";const s=[];for(const u of e){const c=u.length?[]:[90];r.strict&&!u.length&&(o+="/");for(let f=0;f<u.length;f++){const v=u[f];let p=40+(r.sensitive?.25:0);if(v.type===0)f||(o+="/"),o+=v.value.replace(fd,"\\$&"),p+=40;else if(v.type===1){const{value:_,repeatable:y,optional:I,regexp:m}=v;s.push({name:_,repeatable:y,optional:I});const L=m||Wi;if(L!==Wi){p+=10;try{new RegExp(`(${L})`)}catch(B){throw new Error(`Invalid custom RegExp for param "${_}" (${L}): `+B.message)}}let M=y?`((?:${L})(?:/(?:${L}))*)`:`(${L})`;f||(M=I&&u.length<2?`(?:/${M})`:"/"+M),I&&(M+="?"),o+=M,p+=20,I&&(p+=-8),y&&(p+=-20),L===".*"&&(p+=-50)}c.push(p)}n.push(c)}if(r.strict&&r.end){const u=n.length-1;n[u][n[u].length-1]+=.7000000000000001}r.strict||(o+="/?"),r.end?o+="$":r.strict&&(o+="(?:/|$)");const i=new RegExp(o,r.sensitive?"":"i");function a(u){const c=u.match(i),f={};if(!c)return null;for(let v=1;v<c.length;v++){const p=c[v]||"",_=s[v-1];f[_.name]=p&&_.repeatable?p.split("/"):p}return f}function l(u){let c="",f=!1;for(const v of e){(!f||!c.endsWith("/"))&&(c+="/"),f=!1;for(const p of v)if(p.type===0)c+=p.value;else if(p.type===1){const{value:_,repeatable:y,optional:I}=p,m=_ in u?u[_]:"";if(Xe(m)&&!y)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const L=Xe(m)?m.join("/"):m;if(!L)if(I)v.length<2&&(c.endsWith("/")?c=c.slice(0,-1):f=!0);else throw new Error(`Missing required param "${_}"`);c+=L}}return c||"/"}return{re:i,score:n,keys:s,parse:a,stringify:l}}function vd(e,t){let r=0;for(;r<e.length&&r<t.length;){const n=t[r]-e[r];if(n)return n;r++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function pd(e,t){let r=0;const n=e.score,o=t.score;for(;r<n.length&&r<o.length;){const s=vd(n[r],o[r]);if(s)return s;r++}if(Math.abs(o.length-n.length)===1){if(Bi(n))return 1;if(Bi(o))return-1}return o.length-n.length}function Bi(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const hd={type:0,value:""},gd=/[a-zA-Z0-9_]/;function md(e){if(!e)return[[]];if(e==="/")return[[hd]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(p){throw new Error(`ERR (${r})/"${u}": ${p}`)}let r=0,n=r;const o=[];let s;function i(){s&&o.push(s),s=[]}let a=0,l,u="",c="";function f(){!u||(r===0?s.push({type:0,value:u}):r===1||r===2||r===3?(s.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:u,regexp:c,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),u="")}function v(){u+=l}for(;a<e.length;){if(l=e[a++],l==="\\"&&r!==2){n=r,r=4;continue}switch(r){case 0:l==="/"?(u&&f(),i()):l===":"?(f(),r=1):v();break;case 4:v(),r=n;break;case 1:l==="("?r=2:gd.test(l)?v():(f(),r=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?c[c.length-1]=="\\"?c=c.slice(0,-1)+l:r=3:c+=l;break;case 3:f(),r=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,c="";break;default:t("Unknown state");break}}return r===2&&t(`Unfinished custom RegExp for param "${u}"`),f(),i(),o}function _d(e,t,r){const n=dd(md(e.path),r),o=re(n,{record:e,parent:t,children:[],alias:[]});return t&&!o.record.aliasOf==!t.record.aliasOf&&t.children.push(o),o}function $d(e,t){const r=[],n=new Map;t=ji({strict:!1,end:!0,sensitive:!1},t);function o(c){return n.get(c)}function s(c,f,v){const p=!v,_=yd(c);_.aliasOf=v&&v.record;const y=ji(t,c),I=[_];if("alias"in c){const M=typeof c.alias=="string"?[c.alias]:c.alias;for(const B of M)I.push(re({},_,{components:v?v.record.components:_.components,path:B,aliasOf:v?v.record:_}))}let m,L;for(const M of I){const{path:B}=M;if(f&&B[0]!=="/"){const K=f.record.path,te=K[K.length-1]==="/"?"":"/";M.path=f.record.path+(B&&te+B)}if(m=_d(M,f,y),v?v.alias.push(m):(L=L||m,L!==m&&L.alias.push(m),p&&c.name&&!Gi(m)&&i(c.name)),_.children){const K=_.children;for(let te=0;te<K.length;te++)s(K[te],m,v&&v.children[te])}v=v||m,(m.record.components&&Object.keys(m.record.components).length||m.record.name||m.record.redirect)&&l(m)}return L?()=>{i(L)}:Sr}function i(c){if(hc(c)){const f=n.get(c);f&&(n.delete(c),r.splice(r.indexOf(f),1),f.children.forEach(i),f.alias.forEach(i))}else{const f=r.indexOf(c);f>-1&&(r.splice(f,1),c.record.name&&n.delete(c.record.name),c.children.forEach(i),c.alias.forEach(i))}}function a(){return r}function l(c){let f=0;for(;f<r.length&&pd(c,r[f])>=0&&(c.record.path!==r[f].record.path||!mc(c,r[f]));)f++;r.splice(f,0,c),c.record.name&&!Gi(c)&&n.set(c.record.name,c)}function u(c,f){let v,p={},_,y;if("name"in c&&c.name){if(v=n.get(c.name),!v)throw or(1,{location:c});y=v.record.name,p=re(Ki(f.params,v.keys.filter(L=>!L.optional).map(L=>L.name)),c.params&&Ki(c.params,v.keys.map(L=>L.name))),_=v.stringify(p)}else if("path"in c)_=c.path,v=r.find(L=>L.re.test(_)),v&&(p=v.parse(_),y=v.record.name);else{if(v=f.name?n.get(f.name):r.find(L=>L.re.test(f.path)),!v)throw or(1,{location:c,currentLocation:f});y=v.record.name,p=re({},f.params,c.params),_=v.stringify(p)}const I=[];let m=v;for(;m;)I.unshift(m.record),m=m.parent;return{name:y,path:_,params:p,matched:I,meta:Ed(I)}}return e.forEach(c=>s(c)),{addRoute:s,resolve:u,removeRoute:i,getRoutes:a,getRecordMatcher:o}}function Ki(e,t){const r={};for(const n of t)n in e&&(r[n]=e[n]);return r}function yd(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:bd(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function bd(e){const t={},r=e.props||!1;if("component"in e)t.default=r;else for(const n in e.components)t[n]=typeof r=="boolean"?r:r[n];return t}function Gi(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Ed(e){return e.reduce((t,r)=>re(t,r.meta),{})}function ji(e,t){const r={};for(const n in e)r[n]=n in t?t[n]:e[n];return r}function mc(e,t){return t.children.some(r=>r===e||mc(e,r))}const _c=/#/g,Id=/&/g,Ad=/\//g,wd=/=/g,Nd=/\?/g,$c=/\+/g,Sd=/%5B/g,Od=/%5D/g,yc=/%5E/g,Cd=/%60/g,bc=/%7B/g,Pd=/%7C/g,Ec=/%7D/g,Td=/%20/g;function Hs(e){return encodeURI(""+e).replace(Pd,"|").replace(Sd,"[").replace(Od,"]")}function Rd(e){return Hs(e).replace(bc,"{").replace(Ec,"}").replace(yc,"^")}function zo(e){return Hs(e).replace($c,"%2B").replace(Td,"+").replace(_c,"%23").replace(Id,"%26").replace(Cd,"`").replace(bc,"{").replace(Ec,"}").replace(yc,"^")}function Fd(e){return zo(e).replace(wd,"%3D")}function Ld(e){return Hs(e).replace(_c,"%23").replace(Nd,"%3F")}function Hd(e){return e==null?"":Ld(e).replace(Ad,"%2F")}function Sn(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function Md(e){const t={};if(e===""||e==="?")return t;const n=(e[0]==="?"?e.slice(1):e).split("&");for(let o=0;o<n.length;++o){const s=n[o].replace($c," "),i=s.indexOf("="),a=Sn(i<0?s:s.slice(0,i)),l=i<0?null:Sn(s.slice(i+1));if(a in t){let u=t[a];Xe(u)||(u=t[a]=[u]),u.push(l)}else t[a]=l}return t}function xi(e){let t="";for(let r in e){const n=e[r];if(r=Fd(r),n==null){n!==void 0&&(t+=(t.length?"&":"")+r);continue}(Xe(n)?n.map(s=>s&&zo(s)):[n&&zo(n)]).forEach(s=>{s!==void 0&&(t+=(t.length?"&":"")+r,s!=null&&(t+="="+s))})}return t}function Dd(e){const t={};for(const r in e){const n=e[r];n!==void 0&&(t[r]=Xe(n)?n.map(o=>o==null?null:""+o):n==null?n:""+n)}return t}const kd=Symbol(""),Vi=Symbol(""),xn=Symbol(""),Ic=Symbol(""),qo=Symbol("");function gr(){let e=[];function t(n){return e.push(n),()=>{const o=e.indexOf(n);o>-1&&e.splice(o,1)}}function r(){e=[]}return{add:t,list:()=>e,reset:r}}function bt(e,t,r,n,o){const s=n&&(n.enterCallbacks[o]=n.enterCallbacks[o]||[]);return()=>new Promise((i,a)=>{const l=f=>{f===!1?a(or(4,{from:r,to:t})):f instanceof Error?a(f):cd(f)?a(or(2,{from:t,to:f})):(s&&n.enterCallbacks[o]===s&&typeof f=="function"&&s.push(f),i())},u=e.call(n&&n.instances[o],t,r,l);let c=Promise.resolve(u);e.length<3&&(c=c.then(l)),c.catch(f=>a(f))})}function ao(e,t,r,n){const o=[];for(const s of e)for(const i in s.components){let a=s.components[i];if(!(t!=="beforeRouteEnter"&&!s.instances[i]))if(Ud(a)){const u=(a.__vccOpts||a)[t];u&&o.push(bt(u,r,n,s,i))}else{let l=a();o.push(()=>l.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${i}" at "${s.path}"`));const c=j0(u)?u.default:u;s.components[i]=c;const v=(c.__vccOpts||c)[t];return v&&bt(v,r,n,s,i)()}))}}return o}function Ud(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Xi(e){const t=tt(xn),r=tt(Ic),n=ge(()=>t.resolve(be(e.to))),o=ge(()=>{const{matched:l}=n.value,{length:u}=l,c=l[u-1],f=r.matched;if(!c||!f.length)return-1;const v=f.findIndex(nr.bind(null,c));if(v>-1)return v;const p=zi(l[u-2]);return u>1&&zi(c)===p&&f[f.length-1].path!==p?f.findIndex(nr.bind(null,l[u-2])):v}),s=ge(()=>o.value>-1&&Gd(r.params,n.value.params)),i=ge(()=>o.value>-1&&o.value===r.matched.length-1&&vc(r.params,n.value.params));function a(l={}){return Kd(l)?t[be(e.replace)?"replace":"push"](be(e.to)).catch(Sr):Promise.resolve()}return{route:n,href:ge(()=>n.value.href),isActive:s,isExactActive:i,navigate:a}}const Wd=ze({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Xi,setup(e,{slots:t}){const r=Gt(Xi(e)),{options:n}=tt(xn),o=ge(()=>({[qi(e.activeClass,n.linkActiveClass,"router-link-active")]:r.isActive,[qi(e.exactActiveClass,n.linkExactActiveClass,"router-link-exact-active")]:r.isExactActive}));return()=>{const s=t.default&&t.default(r);return e.custom?s:Fs("a",{"aria-current":r.isExactActive?e.ariaCurrentValue:null,href:r.href,onClick:r.navigate,class:o.value},s)}}}),Bd=Wd;function Kd(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Gd(e,t){for(const r in t){const n=t[r],o=e[r];if(typeof n=="string"){if(n!==o)return!1}else if(!Xe(o)||o.length!==n.length||n.some((s,i)=>s!==o[i]))return!1}return!0}function zi(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const qi=(e,t,r)=>e!=null?e:t!=null?t:r,jd=ze({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:r}){const n=tt(qo),o=ge(()=>e.route||n.value),s=tt(Vi,0),i=ge(()=>{let u=be(s);const{matched:c}=o.value;let f;for(;(f=c[u])&&!f.components;)u++;return u}),a=ge(()=>o.value.matched[i.value]);gn(Vi,ge(()=>i.value+1)),gn(kd,a),gn(qo,o);const l=we();return Bt(()=>[l.value,a.value,e.name],([u,c,f],[v,p,_])=>{c&&(c.instances[f]=u,p&&p!==c&&u&&u===v&&(c.leaveGuards.size||(c.leaveGuards=p.leaveGuards),c.updateGuards.size||(c.updateGuards=p.updateGuards))),u&&c&&(!p||!nr(c,p)||!v)&&(c.enterCallbacks[f]||[]).forEach(y=>y(u))},{flush:"post"}),()=>{const u=o.value,c=e.name,f=a.value,v=f&&f.components[c];if(!v)return Qi(r.default,{Component:v,route:u});const p=f.props[c],_=p?p===!0?u.params:typeof p=="function"?p(u):p:null,I=Fs(v,re({},_,t,{onVnodeUnmounted:m=>{m.component.isUnmounted&&(f.instances[c]=null)},ref:l}));return Qi(r.default,{Component:I,route:u})||I}}});function Qi(e,t){if(!e)return null;const r=e(t);return r.length===1?r[0]:r}const Ac=jd;function xd(e){const t=$d(e.routes,e),r=e.parseQuery||Md,n=e.stringifyQuery||xi,o=e.history,s=gr(),i=gr(),a=gr(),l=Vu(ht);let u=ht;Qt&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const c=so.bind(null,b=>""+b),f=so.bind(null,Hd),v=so.bind(null,Sn);function p(b,R){let C,D;return hc(b)?(C=t.getRecordMatcher(b),D=R):D=b,t.addRoute(D,C)}function _(b){const R=t.getRecordMatcher(b);R&&t.removeRoute(R)}function y(){return t.getRoutes().map(b=>b.record)}function I(b){return!!t.getRecordMatcher(b)}function m(b,R){if(R=re({},R||l.value),typeof b=="string"){const d=io(r,b,R.path),h=t.resolve({path:d.path},R),g=o.createHref(d.fullPath);return re(d,h,{params:v(h.params),hash:Sn(d.hash),redirectedFrom:void 0,href:g})}let C;if("path"in b)C=re({},b,{path:io(r,b.path,R.path).path});else{const d=re({},b.params);for(const h in d)d[h]==null&&delete d[h];C=re({},b,{params:f(b.params)}),R.params=f(R.params)}const D=t.resolve(C,R),J=b.hash||"";D.params=c(v(D.params));const pe=X0(n,re({},b,{hash:Rd(J),path:D.path})),V=o.createHref(pe);return re({fullPath:pe,hash:J,query:n===xi?Dd(b.query):b.query||{}},D,{redirectedFrom:void 0,href:V})}function L(b){return typeof b=="string"?io(r,b,l.value.path):re({},b)}function M(b,R){if(u!==b)return or(8,{from:R,to:b})}function B(b){return j(b)}function K(b){return B(re(L(b),{replace:!0}))}function te(b){const R=b.matched[b.matched.length-1];if(R&&R.redirect){const{redirect:C}=R;let D=typeof C=="function"?C(b):C;return typeof D=="string"&&(D=D.includes("?")||D.includes("#")?D=L(D):{path:D},D.params={}),re({query:b.query,hash:b.hash,params:"path"in D?{}:b.params},D)}}function j(b,R){const C=u=m(b),D=l.value,J=b.state,pe=b.force,V=b.replace===!0,d=te(C);if(d)return j(re(L(d),{state:typeof d=="object"?re({},J,d.state):J,force:pe,replace:V}),R||C);const h=C;h.redirectedFrom=R;let g;return!pe&&z0(n,D,C)&&(g=or(16,{to:h,from:D}),Ot(D,D,!0,!1)),(g?Promise.resolve(g):Y(h,D)).catch($=>nt($)?nt($,2)?$:Ue($):ce($,h,D)).then($=>{if($){if(nt($,2))return j(re({replace:V},L($.to),{state:typeof $.to=="object"?re({},J,$.to.state):J,force:pe}),R||h)}else $=fe(h,D,!0,V,J);return Z(h,D,$),$})}function O(b,R){const C=M(b,R);return C?Promise.reject(C):Promise.resolve()}function Y(b,R){let C;const[D,J,pe]=Vd(b,R);C=ao(D.reverse(),"beforeRouteLeave",b,R);for(const d of D)d.leaveGuards.forEach(h=>{C.push(bt(h,b,R))});const V=O.bind(null,b,R);return C.push(V),zt(C).then(()=>{C=[];for(const d of s.list())C.push(bt(d,b,R));return C.push(V),zt(C)}).then(()=>{C=ao(J,"beforeRouteUpdate",b,R);for(const d of J)d.updateGuards.forEach(h=>{C.push(bt(h,b,R))});return C.push(V),zt(C)}).then(()=>{C=[];for(const d of b.matched)if(d.beforeEnter&&!R.matched.includes(d))if(Xe(d.beforeEnter))for(const h of d.beforeEnter)C.push(bt(h,b,R));else C.push(bt(d.beforeEnter,b,R));return C.push(V),zt(C)}).then(()=>(b.matched.forEach(d=>d.enterCallbacks={}),C=ao(pe,"beforeRouteEnter",b,R),C.push(V),zt(C))).then(()=>{C=[];for(const d of i.list())C.push(bt(d,b,R));return C.push(V),zt(C)}).catch(d=>nt(d,8)?d:Promise.reject(d))}function Z(b,R,C){for(const D of a.list())D(b,R,C)}function fe(b,R,C,D,J){const pe=M(b,R);if(pe)return pe;const V=R===ht,d=Qt?history.state:{};C&&(D||V?o.replace(b.fullPath,re({scroll:V&&d&&d.scroll},J)):o.push(b.fullPath,J)),l.value=b,Ot(b,R,C,V),Ue()}let F;function ie(){F||(F=o.listen((b,R,C)=>{if(!jr.listening)return;const D=m(b),J=te(D);if(J){j(re(J,{replace:!0}),D).catch(Sr);return}u=D;const pe=l.value;Qt&&rd(Di(pe.fullPath,C.delta),jn()),Y(D,pe).catch(V=>nt(V,12)?V:nt(V,2)?(j(V.to,D).then(d=>{nt(d,20)&&!C.delta&&C.type===Mr.pop&&o.go(-1,!1)}).catch(Sr),Promise.reject()):(C.delta&&o.go(-C.delta,!1),ce(V,D,pe))).then(V=>{V=V||fe(D,pe,!1),V&&(C.delta&&!nt(V,8)?o.go(-C.delta,!1):C.type===Mr.pop&&nt(V,20)&&o.go(-1,!1)),Z(D,pe,V)}).catch(Sr)}))}let de=gr(),me=gr(),ve;function ce(b,R,C){Ue(b);const D=me.list();return D.length?D.forEach(J=>J(b,R,C)):console.error(b),Promise.reject(b)}function ne(){return ve&&l.value!==ht?Promise.resolve():new Promise((b,R)=>{de.add([b,R])})}function Ue(b){return ve||(ve=!b,ie(),de.list().forEach(([R,C])=>b?C(b):R()),de.reset()),b}function Ot(b,R,C,D){const{scrollBehavior:J}=e;if(!Qt||!J)return Promise.resolve();const pe=!C&&nd(Di(b.fullPath,0))||(D||!C)&&history.state&&history.state.scroll||null;return ws().then(()=>J(b,R,pe)).then(V=>V&&td(V)).catch(V=>ce(V,b,R))}const We=b=>o.go(b);let Te;const xt=new Set,jr={currentRoute:l,listening:!0,addRoute:p,removeRoute:_,hasRoute:I,getRoutes:y,resolve:m,options:e,push:B,replace:K,go:We,back:()=>We(-1),forward:()=>We(1),beforeEach:s.add,beforeResolve:i.add,afterEach:a.add,onError:me.add,isReady:ne,install(b){const R=this;b.component("RouterLink",Bd),b.component("RouterView",Ac),b.config.globalProperties.$router=R,Object.defineProperty(b.config.globalProperties,"$route",{enumerable:!0,get:()=>be(l)}),Qt&&!Te&&l.value===ht&&(Te=!0,B(o.location).catch(J=>{}));const C={};for(const J in ht)C[J]=ge(()=>l.value[J]);b.provide(xn,R),b.provide(Ic,Gt(C)),b.provide(qo,l);const D=b.unmount;xt.add(b),b.unmount=function(){xt.delete(b),xt.size<1&&(u=ht,F&&F(),F=null,l.value=ht,Te=!1,ve=!1),D()}}};return jr}function zt(e){return e.reduce((t,r)=>t.then(()=>r()),Promise.resolve())}function Vd(e,t){const r=[],n=[],o=[],s=Math.max(t.matched.length,e.matched.length);for(let i=0;i<s;i++){const a=t.matched[i];a&&(e.matched.find(u=>nr(u,a))?n.push(a):r.push(a));const l=e.matched[i];l&&(t.matched.find(u=>nr(u,l))||o.push(l))}return[r,n,o]}function Ms(){return tt(xn)}const Ds=e=>(kr("data-v-4cd8445e"),e=e(),Ur(),e),Xd=Ds(()=>T("header",null,[T("h2",null,"Encode/Decode"),T("summary",null,"simple letter for letter substitution ciphers")],-1)),zd=Ds(()=>T("hr",null,null,-1)),qd=Ds(()=>T("footer",null,[T("aside",null," This app is for entertainment and learning purposes only and comes with no warranty. "),T("small",null,[lt(" This project is under an MIT licence and is hosted at "),T("a",{href:"https://github.com/mcshaz/letter-swap-decoder"}," github.com/mcshaz/letter-swap-decoder "),lt(". More detail can be found there. ")]),T("p",null,"version 0.1.2")],-1)),Qd=ze({__name:"App",setup(e){return(t,r)=>(X(),z(se,null,[Xd,ye(be(Ac)),zd,qd],64))}});const ft=(e,t)=>{const r=e.__vccOpts||e;for(const[n,o]of t)r[n]=o;return r},Yd=ft(Qd,[["__scopeId","data-v-4cd8445e"]]);/**
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
*/var Zd=typeof Object.defineProperty=="function"?Object.defineProperty:null,Jd=Zd;/**
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
*/var ev=Jd;function tv(){try{return ev({},"x",{}),!0}catch{return!1}}var rv=tv;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var nv=Object.defineProperty,ov=nv;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var lr=Object.prototype,Yi=lr.toString,Zi=lr.__defineGetter__,Ji=lr.__defineSetter__,sv=lr.__lookupGetter__,iv=lr.__lookupSetter__;function av(e,t,r){var n,o,s,i;if(typeof e!="object"||e===null||Yi.call(e)==="[object Array]")throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if(typeof r!="object"||r===null||Yi.call(r)==="[object Array]")throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if(o="value"in r,o&&(sv.call(e,t)||iv.call(e,t)?(n=e.__proto__,e.__proto__=lr,delete e[t],e[t]=r.value,e.__proto__=n):e[t]=r.value),s="get"in r,i="set"in r,o&&(s||i))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return s&&Zi&&Zi.call(e,t,r.get),i&&Ji&&Ji.call(e,t,r.set),e}var lv=av;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var cv=rv,uv=ov,fv=lv,Qo;cv()?Qo=uv:Qo=fv;var dv=Qo;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var vv=dv;function pv(e,t,r){vv(e,t,{configurable:!1,enumerable:!1,writable:!1,value:r})}var hv=pv;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var gv=hv,ks=gv;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var mv=Math.floor,_v=mv;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $v=_v,Br=$v;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var yv=Br;function bv(e){return yv(e)===e&&e>=0}var Ev=bv;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Iv=Ev,wc=Iv;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Av=Br;function wv(e){return Av(e)===e}var Nv=wv;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Sv=Nv,Vn=Sv;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Ov(e){return e!==e}var Cv=Ov;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Pv=Cv,Oe=Pv;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Tv=Number.POSITIVE_INFINITY,Pe=Tv;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Rv=Number;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Fv=Rv,Lv=Fv;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Hv=Lv,Mv=Hv.NEGATIVE_INFINITY,He=Mv;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Dv=Pe,kv=He;function Uv(e){return e===Dv||e===kv}var Wv=Uv;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Bv=Wv,Kr=Bv;/**
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
*/function Kv(e){return Math.abs(e)}var Gv=Kv;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var jv=Gv,jt=jv;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function xv(){return typeof Symbol=="function"&&typeof Symbol("foo")=="symbol"}var Vv=xv;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Xv=Vv,zv=Xv;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var qv=zv,Qv=qv();function Yv(){return Qv&&typeof Symbol.toStringTag=="symbol"}var Zv=Yv;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Jv=Zv,ep=Jv;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var tp=Object.prototype.toString,Nc=tp;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var rp=Nc;function np(e){return rp.call(e)}var op=np;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var sp=Object.prototype.hasOwnProperty;function ip(e,t){return e==null?!1:sp.call(e,t)}var ap=ip;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var lp=ap,cp=lp;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var up=typeof Symbol=="function"?Symbol.toStringTag:"",fp=up;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var dp=cp,mr=fp,lo=Nc;function vp(e){var t,r,n;if(e==null)return lo.call(e);r=e[mr],t=dp(e,mr);try{e[mr]=void 0}catch{return lo.call(e)}return n=lo.call(e),t?e[mr]=r:delete e[mr],n}var pp=vp;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var hp=ep,gp=op,mp=pp,Yo;hp()?Yo=mp:Yo=gp;var Xn=Yo;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _p=Xn,$p=typeof Uint32Array=="function";function yp(e){return $p&&e instanceof Uint32Array||_p(e)==="[object Uint32Array]"}var bp=yp;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ep=bp,Ip=Ep;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ap=4294967295,wp=Ap;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Np=typeof Uint32Array=="function"?Uint32Array:null,Sp=Np;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Op=Ip,co=wp,ea=Sp;function Cp(){var e,t;if(typeof ea!="function")return!1;try{t=[1,3.14,-3.14,co+1,co+2],t=new ea(t),e=Op(t)&&t[0]===1&&t[1]===3&&t[2]===co-2&&t[3]===0&&t[4]===1}catch{e=!1}return e}var Pp=Cp;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Tp=Pp,Rp=Tp;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Fp=typeof Uint32Array=="function"?Uint32Array:void 0,Lp=Fp;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Hp(){throw new Error("not implemented")}var Mp=Hp;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Dp=Rp,kp=Lp,Up=Mp,Zo;Dp()?Zo=kp:Zo=Up;var cr=Zo;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Wp=Xn,Bp=typeof Float64Array=="function";function Kp(e){return Bp&&e instanceof Float64Array||Wp(e)==="[object Float64Array]"}var Gp=Kp;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var jp=Gp,xp=jp;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Vp=typeof Float64Array=="function"?Float64Array:null,Xp=Vp;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var zp=xp,ta=Xp;function qp(){var e,t;if(typeof ta!="function")return!1;try{t=new ta([1,3.14,-3.14,NaN]),e=zp(t)&&t[0]===1&&t[1]===3.14&&t[2]===-3.14&&t[3]!==t[3]}catch{e=!1}return e}var Qp=qp;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Yp=Qp,Zp=Yp;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Jp=typeof Float64Array=="function"?Float64Array:void 0,e1=Jp;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function t1(){throw new Error("not implemented")}var r1=t1;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var n1=Zp,o1=e1,s1=r1,Jo;n1()?Jo=o1:Jo=s1;var ur=Jo;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var i1=Xn,a1=typeof Uint8Array=="function";function l1(e){return a1&&e instanceof Uint8Array||i1(e)==="[object Uint8Array]"}var c1=l1;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var u1=c1,f1=u1;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var d1=255,v1=d1;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var p1=typeof Uint8Array=="function"?Uint8Array:null,h1=p1;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var g1=f1,uo=v1,ra=h1;function m1(){var e,t;if(typeof ra!="function")return!1;try{t=[1,3.14,-3.14,uo+1,uo+2],t=new ra(t),e=g1(t)&&t[0]===1&&t[1]===3&&t[2]===uo-2&&t[3]===0&&t[4]===1}catch{e=!1}return e}var _1=m1;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $1=_1,y1=$1;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var b1=typeof Uint8Array=="function"?Uint8Array:void 0,E1=b1;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function I1(){throw new Error("not implemented")}var A1=I1;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var w1=y1,N1=E1,S1=A1,es;w1()?es=N1:es=S1;var O1=es;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var C1=Xn,P1=typeof Uint16Array=="function";function T1(e){return P1&&e instanceof Uint16Array||C1(e)==="[object Uint16Array]"}var R1=T1;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var F1=R1,L1=F1;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var H1=65535,M1=H1;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var D1=typeof Uint16Array=="function"?Uint16Array:null,k1=D1;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var U1=L1,fo=M1,na=k1;function W1(){var e,t;if(typeof na!="function")return!1;try{t=[1,3.14,-3.14,fo+1,fo+2],t=new na(t),e=U1(t)&&t[0]===1&&t[1]===3&&t[2]===fo-2&&t[3]===0&&t[4]===1}catch{e=!1}return e}var B1=W1;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var K1=B1,G1=K1;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var j1=typeof Uint16Array=="function"?Uint16Array:void 0,x1=j1;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function V1(){throw new Error("not implemented")}var X1=V1;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var z1=G1,q1=x1,Q1=X1,ts;z1()?ts=q1:ts=Q1;var Y1=ts;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Z1=O1,J1=Y1,eh={uint16:J1,uint8:Z1},th=eh;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var oa=th,Sc;function rh(){var e,t;return e=new oa.uint16(1),e[0]=4660,t=new oa.uint8(e.buffer),t[0]===52}Sc=rh();var nh=Sc;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var oh=nh,fr=oh;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var sh=fr,rs;sh===!0?rs=1:rs=0;var ih=rs;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ah=cr,lh=ur,ch=ih,Oc=new lh(1),uh=new ah(Oc.buffer);function fh(e){return Oc[0]=e,uh[ch]}var dh=fh;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var vh=dh,qe=vh;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ph=fr,ns;ph===!0?ns=1:ns=0;var hh=ns;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var gh=cr,mh=ur,_h=hh,os=new mh(1),$h=new gh(os.buffer);function yh(e,t){return os[0]=e,$h[_h]=t>>>0,os[0]}var bh=yh;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Eh=bh,zn=Eh;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ih=1023,dr=Ih;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Ah(e){return e===0?.3999999999940942:.3999999999940942+e*(.22222198432149784+e*.15313837699209373)}var wh=Ah;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Nh(e){return e===0?.6666666666666735:.6666666666666735+e*(.2857142874366239+e*(.1818357216161805+e*.14798198605116586))}var Sh=Nh;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var sa=qe,Oh=zn,Ch=Oe,Ph=dr,Th=He,Rh=wh,Fh=Sh,Qr=.6931471803691238,Yr=19082149292705877e-26,Lh=0x40000000000000,Hh=.3333333333333333,ia=1048575,Mh=2146435072,Dh=1048576,kh=1072693248;function Uh(e){var t,r,n,o,s,i,a,l,u,c,f,v;return e===0?Th:Ch(e)||e<0?NaN:(r=sa(e),s=0,r<Dh&&(s-=54,e*=Lh,r=sa(e)),r>=Mh?e+e:(s+=(r>>20)-Ph|0,r&=ia,l=r+614244&1048576|0,e=Oh(e,r|l^kh),s+=l>>20|0,a=e-1,(ia&2+r)<3?a===0?s===0?0:s*Qr+s*Yr:(i=a*a*(.5-Hh*a),s===0?a-i:s*Qr-(i-s*Yr-a)):(c=a/(2+a),v=c*c,l=r-398458|0,f=v*v,u=440401-r|0,o=f*Rh(f),n=v*Fh(f),l|=u,i=n+o,l>0?(t=.5*a*a,s===0?a-(t-c*(t+i)):s*Qr-(t-(c*(t+i)+s*Yr)-a)):s===0?a-c*(a-i):s*Qr-(c*(a-i)-s*Yr-a))))}var Wh=Uh;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Bh=Wh,Gr=Bh;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Kh=Math.ceil,Gh=Kh;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var jh=Gh,xh=jh;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Vh=Br,Xh=xh;function zh(e){return e<0?Xh(e):Vh(e)}var qh=zh;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Qh=qh,Cc=Qh;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Yh(e){return e===0?.0416666666666666:.0416666666666666+e*(-.001388888888887411+e*2480158728947673e-20)}var Zh=Yh;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Jh(e){return e===0?-27557314351390663e-23:-27557314351390663e-23+e*(2087572321298175e-24+e*-11359647557788195e-27)}var e2=Jh;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var t2=Zh,r2=e2;function n2(e,t){var r,n,o,s;return s=e*e,o=s*s,n=s*t2(s),n+=o*o*r2(s),r=.5*s,o=1-r,o+(1-o-r+(s*n-e*t))}var o2=n2;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var s2=o2,Pc=s2;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var aa=-.16666666666666632,i2=.00833333333332249,a2=-.0001984126982985795,l2=27557313707070068e-22,c2=-25050760253406863e-24,u2=158969099521155e-24;function f2(e,t){var r,n,o,s;return s=e*e,o=s*s,r=i2+s*(a2+s*l2)+s*o*(c2+s*u2),n=s*e,t===0?e+n*(aa+s*r):e-(s*(.5*t-n*r)-t-n*aa)}var d2=f2;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var v2=d2,Tc=v2;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var p2=fr,ss;p2===!0?ss=0:ss=1;var h2=ss;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var g2=cr,m2=ur,_2=h2,Rc=new m2(1),$2=new g2(Rc.buffer);function y2(e){return Rc[0]=e,$2[_2]}var b2=y2;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var E2=b2,I2=E2;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var A2=fr,Fc,is,as;A2===!0?(is=1,as=0):(is=0,as=1);Fc={HIGH:is,LOW:as};var w2=Fc;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var N2=cr,S2=ur,Lc=w2,Hc=new S2(1),la=new N2(Hc.buffer),O2=Lc.HIGH,C2=Lc.LOW;function P2(e,t){return la[O2]=e,la[C2]=t,Hc[0]}var T2=P2;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var R2=T2,Us=R2;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var F2=1023,L2=F2;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var H2=-1023,M2=H2;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var D2=-1074,k2=D2;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var U2=fr,Mc,ls,cs;U2===!0?(ls=1,cs=0):(ls=0,cs=1);Mc={HIGH:ls,LOW:cs};var W2=Mc;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var B2=cr,K2=ur,Dc=W2,kc=new K2(1),ca=new B2(kc.buffer),G2=Dc.HIGH,j2=Dc.LOW;function x2(e,t){return kc[0]=t,e[0]=ca[G2],e[1]=ca[j2],e}var V2=x2;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ua=V2;function X2(e,t){return arguments.length===1?ua([0,0],e):ua(e,t)}var z2=X2;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var q2=z2,Ws=q2;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Q2=Ws,Y2=qe,Z2=Us,J2=2147483648>>>0,eg=2147483647,vo=[0,0];function tg(e,t){var r,n;return Q2(vo,e),r=vo[0],r&=eg,n=Y2(t),n&=J2,r|=n,Z2(r,vo[1])}var rg=tg;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ng=rg,Bs=ng;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var og=22250738585072014e-324,sg=og;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ig=sg,ag=Kr,lg=Oe,cg=jt,ug=4503599627370496;function fg(e,t,r,n){return lg(e)||ag(e)?(t[n]=e,t[n+r]=0,t):e!==0&&cg(e)<ig?(t[n]=e*ug,t[n+r]=-52,t):(t[n]=e,t[n+r]=0,t)}var Uc=fg;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var dg=Uc;function vg(e){return dg(e,[0,0],1,0)}var pg=vg;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var hg=ks,Wc=pg,gg=Uc;hg(Wc,"assign",gg);var mg=Wc;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _g=2146435072,$g=_g;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var yg=qe,bg=$g,Eg=dr;function Ig(e){var t=yg(e);return t=(t&bg)>>>20,t-Eg|0}var Ag=Ig;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var wg=Ag,Ng=wg;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Sg=Pe,Og=He,Cg=dr,Pg=L2,Tg=M2,Rg=k2,Fg=Oe,Lg=Kr,Hg=Bs,Mg=mg.assign,Dg=Ng,kg=Ws,Ug=Us,Wg=2220446049250313e-31,Bg=2148532223>>>0,po=[0,0],ho=[0,0];function Kg(e,t){var r,n;return t===0||e===0||Fg(e)||Lg(e)?e:(Mg(e,po,1,0),e=po[0],t+=po[1],t+=Dg(e),t<Rg?Hg(0,e):t>Pg?e<0?Og:Sg:(t<=Tg?(t+=52,n=Wg):n=1,kg(ho,e),r=ho[0],r&=Bg,r|=t+Cg<<20,n*Ug(r,ho[1])))}var Gg=Kg;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var jg=Gg,Ks=jg;/**
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
*/function xg(e,t){var r,n;for(r=[],n=0;n<t;n++)r.push(e);return r}var Vg=xg;/**
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
*/var Xg=Vg,zg=Xg;/**
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
*/var qg=zg;function Qg(e){return qg(0,e)}var Yg=Qg;/**
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
*/var Zg=Yg,Jg=Zg;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var em=Br,Zr=Ks,qn=Jg,Bc=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],tm=[1.570796251296997,7549789415861596e-23,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],go=16777216,mo=5960464477539063e-23,Jr=qn(20),fa=qn(20),en=qn(20),Ae=qn(20);function Kc(e,t,r,n,o,s,i,a,l){var u,c,f,v,p,_,y,I,m;for(v=s,m=n[r],I=r,p=0;I>0;p++)c=mo*m|0,Ae[p]=m-go*c|0,m=n[I-1]+c,I-=1;if(m=Zr(m,o),m-=8*em(m*.125),y=m|0,m-=y,f=0,o>0?(p=Ae[r-1]>>24-o,y+=p,Ae[r-1]-=p<<24-o,f=Ae[r-1]>>23-o):o===0?f=Ae[r-1]>>23:m>=.5&&(f=2),f>0){for(y+=1,u=0,p=0;p<r;p++)I=Ae[p],u===0?I!==0&&(u=1,Ae[p]=16777216-I):Ae[p]=16777215-I;if(o>0)switch(o){case 1:Ae[r-1]&=8388607;break;case 2:Ae[r-1]&=4194303;break}f===2&&(m=1-m,u!==0&&(m-=Zr(1,o)))}if(m===0){for(I=0,p=r-1;p>=s;p--)I|=Ae[p];if(I===0){for(_=1;Ae[s-_]===0;_++);for(p=r+1;p<=r+_;p++){for(l[a+p]=Bc[i+p],c=0,I=0;I<=a;I++)c+=e[I]*l[a+(p-I)];n[p]=c}return r+=_,Kc(e,t,r,n,o,s,i,a,l)}}if(m===0)for(r-=1,o-=24;Ae[r]===0;)r-=1,o-=24;else m=Zr(m,-o),m>=go?(c=mo*m|0,Ae[r]=m-go*c|0,r+=1,o+=24,Ae[r]=c):Ae[r]=m|0;for(c=Zr(1,o),p=r;p>=0;p--)n[p]=c*Ae[p],c*=mo;for(p=r;p>=0;p--){for(c=0,_=0;_<=v&&_<=r-p;_++)c+=tm[_]*n[p+_];en[r-p]=c}for(c=0,p=r;p>=0;p--)c+=en[p];for(f===0?t[0]=c:t[0]=-c,c=en[0]-c,p=1;p<=r;p++)c+=en[p];return f===0?t[1]=c:t[1]=-c,y&7}function rm(e,t,r,n){var o,s,i,a,l,u,c,f,v;for(s=4,a=n-1,i=(r-3)/24|0,i<0&&(i=0),u=r-24*(i+1),f=i-a,v=a+s,c=0;c<=v;c++)f<0?Jr[c]=0:Jr[c]=Bc[f],f+=1;for(c=0;c<=s;c++){for(o=0,f=0;f<=a;f++)o+=e[f]*Jr[a+(c-f)];fa[c]=o}return l=s,Kc(e,t,l,fa,u,s,i,a,Jr)}var nm=rm;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var om=Math.round,sm=om;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var im=sm,am=im;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var lm=am,da=qe,cm=.6366197723675814,um=1.5707963267341256,fm=6077100506506192e-26,dm=6077100506303966e-26,vm=20222662487959506e-37,pm=20222662487111665e-37,hm=84784276603689e-45,va=2047;function gm(e,t,r){var n,o,s,i,a,l,u;return o=lm(e*cm),i=e-o*um,a=o*fm,u=t>>20|0,r[0]=i-a,n=da(r[0]),l=u-(n>>20&va),l>16&&(s=i,a=o*dm,i=s-a,a=o*vm-(s-i-a),r[0]=i-a,n=da(r[0]),l=u-(n>>20&va),l>49&&(s=i,a=o*pm,i=s-a,a=o*hm-(s-i-a),r[0]=i-a)),r[1]=i-r[0]-a,o}var mm=gm;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var _m=qe,$m=I2,ym=Us,bm=nm,tn=mm,Em=0,Im=16777216,gt=1.5707963267341256,Ut=6077100506506192e-26,rn=2*Ut,nn=3*Ut,on=4*Ut,Am=2147483647,wm=2146435072,Nm=1048575,Sm=598523,Om=1072243195,Cm=1073928572,Pm=1074752122,Tm=1074977148,Rm=1075183036,Fm=1075388923,Lm=1075594811,Hm=1094263291,_r=[0,0,0],$r=[0,0];function Mm(e,t){var r,n,o,s,i,a,l,u;if(o=_m(e),s=o&Am|0,s<=Om)return t[0]=e,t[1]=0,0;if(s<=Pm)return(s&Nm)===Sm?tn(e,s,t):s<=Cm?e>0?(u=e-gt,t[0]=u-Ut,t[1]=u-t[0]-Ut,1):(u=e+gt,t[0]=u+Ut,t[1]=u-t[0]+Ut,-1):e>0?(u=e-2*gt,t[0]=u-rn,t[1]=u-t[0]-rn,2):(u=e+2*gt,t[0]=u+rn,t[1]=u-t[0]+rn,-2);if(s<=Lm)return s<=Rm?s===Tm?tn(e,s,t):e>0?(u=e-3*gt,t[0]=u-nn,t[1]=u-t[0]-nn,3):(u=e+3*gt,t[0]=u+nn,t[1]=u-t[0]+nn,-3):s===Fm?tn(e,s,t):e>0?(u=e-4*gt,t[0]=u-on,t[1]=u-t[0]-on,4):(u=e+4*gt,t[0]=u+on,t[1]=u-t[0]+on,-4);if(s<Hm)return tn(e,s,t);if(s>=wm)return t[0]=NaN,t[1]=NaN,0;for(r=$m(e),n=(s>>20)-1046,u=ym(s-(n<<20|0),r),a=0;a<2;a++)_r[a]=u|0,u=(u-_r[a])*Im;for(_r[2]=u,i=3;_r[i-1]===Em;)i-=1;return l=bm(_r,$r,n,i),e<0?(t[0]=-$r[0],t[1]=-$r[1],-l):(t[0]=$r[0],t[1]=$r[1],l)}var Dm=Mm;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var km=Dm,Gc=km;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Um=qe,_o=Pc,pa=Tc,Wm=Gc,ot=[0,0],Bm=2147483647,Km=1072243195,Gm=1044381696,jm=2146435072;function xm(e){var t,r;if(t=Um(e),t&=Bm,t<=Km)return t<Gm?1:_o(e,0);if(t>=jm)return NaN;switch(r=Wm(e,ot),r&3){case 0:return _o(ot[0],ot[1]);case 1:return-pa(ot[0],ot[1]);case 2:return-_o(ot[0],ot[1]);default:return pa(ot[0],ot[1])}}var Vm=xm;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Xm=Vm,zm=Xm;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var qm=qe,ha=Pc,$o=Tc,Qm=Gc,Ym=2147483647,Zm=2146435072,Jm=1072243195,e_=1045430272,st=[0,0];function t_(e){var t,r;if(t=qm(e),t&=Ym,t<=Jm)return t<e_?e:$o(e,0);if(t>=Zm)return NaN;switch(r=Qm(e,st),r&3){case 0:return $o(st[0],st[1]);case 1:return ha(st[0],st[1]);case 2:return-$o(st[0],st[1]);default:return-ha(st[0],st[1])}}var r_=t_;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var n_=r_,jc=n_;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var o_=3.141592653589793,Gs=o_;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var s_=Oe,i_=Kr,ga=zm,yo=jc,a_=jt,yr=Bs,br=Gs;function l_(e){var t,r;return s_(e)?NaN:i_(e)?NaN:(r=e%2,t=a_(r),t===0||t===1?yr(0,r):t<.25?yo(br*r):t<.75?(t=.5-t,yr(ga(br*t),r)):t<1.25?(r=yr(1,r)-r,yo(br*r)):t<1.75?(t-=1.5,-yr(ga(br*t),r)):(r-=yr(2,r),yo(br*r)))}var c_=l_;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var u_=c_,f_=u_;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function d_(e){return e===0?.06735230105312927:.06735230105312927+e*(.007385550860814029+e*(.0011927076318336207+e*(.00022086279071390839+e*25214456545125733e-21)))}var v_=d_;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function p_(e){return e===0?.020580808432516733:.020580808432516733+e*(.0028905138367341563+e*(.0005100697921535113+e*(.00010801156724758394+e*44864094961891516e-21)))}var h_=p_;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function g_(e){return e===0?1.3920053346762105:1.3920053346762105+e*(.7219355475671381+e*(.17193386563280308+e*(.01864591917156529+e*(.0007779424963818936+e*7326684307446256e-21))))}var m_=g_;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function __(e){return e===0?.21498241596060885:.21498241596060885+e*(.325778796408931+e*(.14635047265246445+e*(.02664227030336386+e*(.0018402845140733772+e*3194753265841009e-20))))}var $_=__;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function y_(e){return e===0?-.032788541075985965:-.032788541075985965+e*(.006100538702462913+e*(-.0014034646998923284+e*.00031563207090362595))}var b_=y_;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function E_(e){return e===0?.01797067508118204:.01797067508118204+e*(-.0036845201678113826+e*(.000881081882437654+e*-.00031275416837512086))}var I_=E_;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function A_(e){return e===0?-.010314224129834144:-.010314224129834144+e*(.0022596478090061247+e*(-.0005385953053567405+e*.0003355291926355191))}var w_=A_;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function N_(e){return e===0?.6328270640250934:.6328270640250934+e*(1.4549225013723477+e*(.9777175279633727+e*(.22896372806469245+e*.013381091853678766)))}var S_=N_;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function O_(e){return e===0?2.4559779371304113:2.4559779371304113+e*(2.128489763798934+e*(.7692851504566728+e*(.10422264559336913+e*.003217092422824239)))}var C_=O_;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function P_(e){return e===0?.08333333333333297:.08333333333333297+e*(-.0027777777772877554+e*(.0007936505586430196+e*(-.00059518755745034+e*(.0008363399189962821+e*-.0016309293409657527))))}var T_=P_;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var R_=Oe,F_=Kr,L_=jt,qt=Gr,H_=Cc,M_=f_,D_=Gs,bo=Pe,k_=v_,U_=h_,W_=m_,B_=$_,K_=b_,G_=I_,j_=w_,x_=S_,V_=C_,X_=T_,z_=.07721566490153287,q_=.3224670334241136,Q_=1,Y_=-.07721566490153287,Z_=.48383612272381005,J_=-.1475877229945939,e3=.06462494023913339,t3=-.07721566490153287,r3=1,n3=.4189385332046727,sn=1.4616321449683622,o3=4503599627370496,s3=0x400000000000000,i3=8470329472543003e-37,ma=1.4616321449683622,a3=-.12148629053584961,l3=-3638676997039505e-33;function c3(e){var t,r,n,o,s,i,a,l,u,c,f,v,p;if(R_(e)||F_(e))return e;if(e===0)return bo;if(e<0?(t=!0,e=-e):t=!1,e<i3)return-qt(e);if(t){if(e>=o3||(u=M_(e),u===0))return bo;r=qt(D_/L_(u*e))}if(e===1||e===2)return 0;if(e<2)switch(e<=.9?(p=-qt(e),e>=sn-1+.27?(f=1-e,n=0):e>=sn-1-.27?(f=e-(ma-1),n=1):(f=e,n=2)):(p=0,e>=sn+.27?(f=2-e,n=0):e>=sn-.27?(f=e-ma,n=1):(f=e-1,n=2)),n){case 0:v=f*f,i=z_+v*k_(v),s=v*(q_+v*U_(v)),a=f*i+s,p+=a-.5*f;break;case 1:v=f*f,c=v*f,i=Z_+c*K_(c),s=J_+c*G_(c),o=e3+c*j_(c),a=v*i-(l3-c*(s+f*o)),p+=a3+a;break;case 2:i=f*(t3+f*x_(f)),s=r3+f*V_(f),p+=-.5*f+i/s;break}else if(e<8)switch(n=H_(e),f=e-n,a=f*(Y_+f*B_(f)),l=Q_+f*W_(f),p=.5*f+a/l,v=1,n){case 7:v*=f+6;case 6:v*=f+5;case 5:v*=f+4;case 4:v*=f+3;case 3:v*=f+2,p+=qt(v)}else e<s3?(u=qt(e),v=1/e,f=v*v,c=n3+v*X_(f),p=(e-.5)*(u-1)+c):p=e*(qt(e)-1);return t&&(p=r-p),p}var u3=c3;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var f3=u3,d3=f3;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function v3(e){return e===0?.6666666666666735:.6666666666666735+e*(.3999999999940942+e*(.2857142874366239+e*(.22222198432149784+e*(.1818357216161805+e*(.15313837699209373+e*.14798198605116586)))))}var p3=v3;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var h3=Oe,_a=qe,$a=zn,g3=Pe,m3=He,ya=dr,_3=p3,Eo=.6931471803691238,Io=19082149292705877e-26,$3=.41421356237309503,y3=-.2928932188134525,b3=1862645149230957e-24,E3=5551115123125783e-32,I3=9007199254740992,A3=.6666666666666666;function w3(e){var t,r,n,o,s,i,a,l,u,c;if(e<-1||h3(e))return NaN;if(e===-1)return m3;if(e===g3||e===0)return e;if(e<0?n=-e:n=e,c=1,n<$3){if(n<b3)return n<E3?e:e-e*e*.5;e>y3&&(c=0,o=e,r=1)}return c!==0&&(n<I3?(u=1+e,r=_a(u),c=(r>>20)-ya,c>0?s=1-(u-e):s=e-(u-1),s/=u):(u=e,r=_a(u),c=(r>>20)-ya,s=0),r&=1048575,r<434334?u=$a(u,r|1072693248):(c+=1,u=$a(u,r|1071644672),r=1048576-r>>2),o=u-1),t=.5*o*o,r===0?o===0?(s+=c*Io,c*Eo+s):(l=t*(1-A3*o),c*Eo-(l-(c*Io+s)-o)):(i=o/(2+o),a=i*i,l=a*_3(a),c===0?o-(t-i*(t+l)):c*Eo-(t-(i*(t+l)+(c*Io+s))-o))}var N3=w3;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var S3=N3,js=S3;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var O3=He;function C3(e){return e===0&&1/e===O3}var P3=C3;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var T3=P3,xc=T3;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var R3=2.5066282746310007,F3=R3;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var L3=Vn;function H3(e){return L3(e/2)}var M3=H3;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var D3=M3,k3=D3;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ba=k3;function U3(e){return e>0?ba(e-1):ba(e+1)}var W3=U3;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var B3=W3,Vc=B3;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var K3=Math.sqrt,G3=K3;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var j3=G3,x3=j3;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var V3=fr,us;V3===!0?us=0:us=1;var X3=us;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var z3=cr,q3=ur,Q3=X3,fs=new q3(1),Y3=new z3(fs.buffer);function Z3(e,t){return fs[0]=e,Y3[Q3]=t>>>0,fs[0]}var J3=Z3;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e6=J3,Qn=e6;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function t6(e){return e|0}var r6=t6;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var n6=r6,Xc=n6;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Ea=Vc,o6=Bs,s6=He,an=Pe;function i6(e,t){return t===s6?an:t===an?0:t>0?Ea(t)?e:0:Ea(t)?o6(an,e):an}var a6=i6;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var l6=qe,c6=2147483647,u6=1072693247,ln=1e300,cn=1e-300;function f6(e,t){var r,n;return n=l6(e),r=n&c6,r<=u6?t<0?ln*ln:cn*cn:t>0?ln*ln:cn*cn}var d6=f6;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var v6=jt,Ia=Pe;function p6(e,t){return e===-1?(e-e)/(e-e):e===1?1:v6(e)<1==(t===Ia)?0:Ia}var h6=p6;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function g6(e){return e===0?.5999999999999946:.5999999999999946+e*(.4285714285785502+e*(.33333332981837743+e*(.272728123808534+e*(.23066074577556175+e*.20697501780033842))))}var m6=g6;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var _6=qe,un=Qn,Aa=zn,$6=dr,y6=m6,b6=1048575,wa=1048576,E6=1072693248,I6=536870912,A6=524288,w6=20,N6=9007199254740992,S6=.9617966939259756,O6=.9617967009544373,C6=-7028461650952758e-24,P6=[1,1.5],T6=[0,.5849624872207642],R6=[0,1350039202129749e-23];function F6(e,t,r){var n,o,s,i,a,l,u,c,f,v,p,_,y,I,m,L,M,B,K,te,j,O;return te=0,r<wa&&(t*=N6,te-=53,r=_6(t)),te+=(r>>w6)-$6|0,j=r&b6|0,r=j|E6|0,j<=235662?O=0:j<767610?O=1:(O=0,te+=1,r-=wa),t=Aa(t,r),c=P6[O],B=t-c,K=1/(t+c),o=B*K,i=un(o,0),n=(r>>1|I6)+A6,n+=O<<18,l=Aa(0,n),u=t-(l-c),a=K*(B-i*l-i*u),s=o*o,M=s*s*y6(s),M+=a*(i+o),s=i*i,l=3+s+M,l=un(l,0),u=M-(l-3-s),B=i*l,K=a*l+u*o,v=B+K,v=un(v,0),p=K-(v-B),_=O6*v,y=C6*v+p*S6+R6[O],f=T6[O],L=te,I=_+y+f+L,I=un(I,0),m=y-(I-L-f-_),e[0]=I,e[1]=m,e}var L6=F6;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function H6(e){return e===0?.5:.5+e*(-.3333333333333333+e*.25)}var M6=H6;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var D6=Qn,k6=M6,U6=1.4426950408889634,W6=1.4426950216293335,B6=19259629911266175e-24;function K6(e,t){var r,n,o,s,i,a;return o=t-1,s=o*o*k6(o),i=W6*o,a=o*B6-s*U6,n=i+a,n=D6(n,0),r=a-(n-i),e[0]=n,e[1]=r,e}var G6=K6;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var j6=.6931471805599453,x6=j6;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function V6(e){return e===0?.16666666666666602:.16666666666666602+e*(-.0027777777777015593+e*(6613756321437934e-20+e*(-16533902205465252e-22+e*41381367970572385e-24)))}var X6=V6;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var z6=qe,Na=zn,q6=Qn,Q6=Xc,Y6=Ks,Z6=x6,Sa=dr,J6=X6,Oa=2147483647,Ca=1048575,Pa=1048576,e4=1071644672,Er=20,t4=.6931471824645996,r4=-1904654299957768e-24;function n4(e,t,r){var n,o,s,i,a,l,u,c,f,v,p;return v=e&Oa|0,p=(v>>Er)-Sa|0,f=0,v>e4&&(f=e+(Pa>>p+1)>>>0,p=((f&Oa)>>Er)-Sa|0,n=(f&~(Ca>>p))>>>0,s=Na(0,n),f=(f&Ca|Pa)>>Er-p>>>0,e<0&&(f=-f),t-=s),s=r+t,s=q6(s,0),a=s*t4,l=(r-(s-t))*Z6+s*r4,c=a+l,u=l-(c-a),s=c*c,o=c-s*J6(s),i=c*o/(o-2)-(u+c*u),c=1-(i-c),e=z6(c),e=Q6(e),e+=f<<Er>>>0,e>>Er<=0?c=Y6(c,f):c=Na(c,e),c}var o4=n4;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Ta=Oe,Ra=Vc,Fa=Kr,s4=Vn,La=x3,i4=jt,Ao=Ws,a4=Qn,Ha=Xc,l4=He,c4=Pe,u4=a6,f4=d6,d4=h6,v4=L6,p4=G6,h4=o4,wo=2147483647,g4=1072693247,m4=1105199104,_4=1139802112,Ma=1083179008,$4=1072693248,y4=1083231232,b4=3230714880>>>0,Da=31,mt=1e300,_t=1e-300,E4=8008566259537294e-32,it=[0,0],ka=[0,0];function zc(e,t){var r,n,o,s,i,a,l,u,c,f,v,p,_,y,I,m;if(Ta(e)||Ta(t))return NaN;if(Ao(it,t),a=it[0],l=it[1],l===0){if(t===0)return 1;if(t===1)return e;if(t===-1)return 1/e;if(t===.5)return La(e);if(t===-.5)return 1/La(e);if(t===2)return e*e;if(t===3)return e*e*e;if(t===4)return e*=e,e*e;if(Fa(t))return d4(e,t)}if(Ao(it,e),s=it[0],i=it[1],i===0){if(s===0)return u4(e,t);if(e===1)return 1;if(e===-1&&Ra(t))return-1;if(Fa(e))return e===l4?zc(-0,-t):t<0?0:c4}if(e<0&&s4(t)===!1)return(e-e)/(e-e);if(o=i4(e),r=s&wo|0,n=a&wo|0,u=s>>>Da|0,c=a>>>Da|0,u&&Ra(t)?u=-1:u=1,n>m4){if(n>_4)return f4(e,t);if(r<g4)return c===1?u*mt*mt:u*_t*_t;if(r>$4)return c===0?u*mt*mt:u*_t*_t;_=p4(ka,o)}else _=v4(ka,o,r);if(f=a4(t,0),p=(t-f)*_[0]+t*_[1],v=f*_[0],y=p+v,Ao(it,y),I=Ha(it[0]),m=Ha(it[1]),I>=Ma){if((I-Ma|m)!==0||p+E4>y-v)return u*mt*mt}else if((I&wo)>=y4&&((I-b4|m)!==0||p<=y-v))return u*_t*_t;return y=h4(I,v,p),u*y}var I4=zc;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var A4=I4,qc=A4;/**
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
*/function w4(e){return e===0?.16666666666666602:.16666666666666602+e*(-.0027777777777015593+e*(6613756321437934e-20+e*(-16533902205465252e-22+e*41381367970572385e-24)))}var N4=w4;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var S4=Ks,O4=N4;function C4(e,t,r){var n,o,s,i;return n=e-t,o=n*n,s=n-o*O4(o),i=1-(t-n*s/(2-s)-e),S4(i,r)}var P4=C4;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var T4=Oe,Ua=Cc,R4=He,Wa=Pe,F4=P4,L4=.6931471803691238,H4=19082149292705877e-26,Ba=1.4426950408889634,M4=709.782712893384,D4=-745.1332191019411,Qc=1/(1<<28),k4=-Qc;function U4(e){var t,r,n;return T4(e)||e===Wa?e:e===R4?0:e>M4?Wa:e<D4?0:e>k4&&e<Qc?1+e:(e<0?n=Ua(Ba*e-.5):n=Ua(Ba*e+.5),t=e-n*L4,r=n*H4,F4(t,r,n))}var W4=U4;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var B4=W4,xs=B4;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function K4(e){return e===0?.08333333333334822:.08333333333334822+e*(.0034722222160545866+e*(-.0026813261780578124+e*(-.00022954996161337813+e*.0007873113957930937)))}var G4=K4;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var j4=F3,Ka=qc,x4=xs,V4=G4,X4=143.01608;function z4(e){var t,r,n;return t=1/e,t=1+t*V4(t),r=x4(e),e>X4?(n=Ka(e,.5*e-.25),r=n*(n/r)):r=Ka(e,e-.5)/r,j4*r*t}var q4=z4;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Q4=.5772156649015329,Y4=Q4;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Z4=Y4;function J4(e,t){return t/((1+Z4*e)*e)}var e$=J4;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function t$(e){var t,r,n;return e===0?1:(e<0?t=-e:t=e,t<=1?(r=1+e*(.4942148268014971+e*(.20744822764843598+e*(.04763678004571372+e*(.010421379756176158+e*(.0011913514700658638+e*(.00016011952247675185+e*0)))))),n=1+e*(.0714304917030273+e*(-.23459179571824335+e*(.035823639860549865+e*(.011813978522206043+e*(-.004456419138517973+e*(.0005396055804933034+e*-23158187332412014e-21))))))):(e=1/e,r=0+e*(.00016011952247675185+e*(.0011913514700658638+e*(.010421379756176158+e*(.04763678004571372+e*(.20744822764843598+e*(.4942148268014971+e*1)))))),n=-23158187332412014e-21+e*(.0005396055804933034+e*(-.004456419138517973+e*(.011813978522206043+e*(.035823639860549865+e*(-.23459179571824335+e*(.0714304917030273+e*1))))))),r/n)}var r$=t$;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var n$=Oe,o$=Vn,s$=xc,Ga=jt,i$=Br,a$=jc,ja=Pe,xa=He,Va=Gs,Xa=q4,za=e$,l$=r$;function c$(e){var t,r,n,o;if(o$(e)&&e<0||e===xa||n$(e))return NaN;if(e===0)return s$(e)?xa:ja;if(e>171.61447887182297)return ja;if(e<-170.5674972726612)return 0;if(r=Ga(e),r>33)return e>=0?Xa(e):(n=i$(r),(n&1)===0?t=-1:t=1,o=r-n,o>.5&&(n+=1,o=r-n),o=r*a$(Va*o),t*Va/(Ga(o)*Xa(r)));for(o=1;e>=3;)e-=1,o*=e;for(;e<0;){if(e>-1e-9)return za(e,o);o/=e,e+=1}for(;e<2;){if(e<1e-9)return za(e,o);o/=e,e+=1}return e===2?o:(e-=2,o*l$(e))}var u$=c$;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var f$=u$,d$=f$;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var v$=Pe;function p$(e){return e===0&&1/e===v$}var h$=p$;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var g$=h$,m$=g$;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var qa=m$,No=Oe,_$=He,fn=Pe;function $$(e,t){var r,n,o,s;if(r=arguments.length,r===2)return No(e)||No(t)?NaN:e===fn||t===fn?fn:e===t&&e===0?qa(e)?e:t:e>t?e:t;for(n=_$,s=0;s<r;s++){if(o=arguments[s],No(o)||o===fn)return o;(o>n||o===n&&o===0&&qa(o))&&(n=o)}return n}var y$=$$;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var b$=y$,E$=b$;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Qa=xc,So=Oe,dn=He,I$=Pe;function A$(e,t){var r,n,o,s;if(r=arguments.length,r===2)return So(e)||So(t)?NaN:e===dn||t===dn?dn:e===t&&e===0?Qa(e)?e:t:e<t?e:t;for(n=I$,s=0;s<r;s++){if(o=arguments[s],So(o)||o===dn)return o;(o<n||o===n&&o===0&&Qa(o))&&(n=o)}return n}var w$=A$;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var N$=w$,S$=N$;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var O$=.9189385332046728,C$=O$;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Yc=[1276642195630063e-46,-3401102254316749e-45,1025680058010471e-43,-35475981581010704e-43,14292273559424982e-41,-6831888753985767e-39,39628370610464347e-38,-2868042435334643e-35,2683181998482699e-33,-3399615005417722e-31,6221098041892606e-29,-1809129475572494e-26,981082564692473e-23,-1384948176067564e-20,.16663894804518634],P$=Yc.length;function T$(e){var t,r,n,o,s;if(e<-1.1||e>1.1)return NaN;for(n=0,o=0,t=2*e,s=0;s<P$;s++)r=n,n=o,o=t*n-r+Yc[s];return(o-r)*.5}var R$=T$;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var F$=qc,L$=R$,H$=9490626562425156e-8,M$=3745194030963158e291;function D$(e){return e<10?NaN:e>=M$?0:e<H$?L$(2*F$(10/e,2)-1)/e:1/(e*12)}var k$=D$;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var U$=d3,Ya=js,Oo=d$,W$=E$,B$=S$,vn=Gr,K$=C$,G$=He,Za=Pe,Ir=k$;function j$(e,t){var r,n,o;return n=B$(e,t),o=W$(e,t),n<0?NaN:n===0?Za:o===Za?G$:n>=10?(r=Ir(n)+Ir(o)-Ir(n+o),-.5*vn(o)+K$+r+(n-.5)*vn(n/(n+o))+o*Ya(-n/(n+o))):o>=10?(r=Ir(o)-Ir(n+o),U$(n)+r+n-n*vn(n+o)+(o-.5)*Ya(-n/(n+o))):vn(Oo(n)*(Oo(o)/Oo(n+o)))}var x$=j$;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var V$=x$,X$=V$;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ja=Vn,el=Oe,z$=X$,q$=jt,tl=Gr,rl=He;function ds(e,t){return el(e)||el(t)?NaN:!Ja(e)||!Ja(t)?NaN:e<0?ds(-e+t-1,t):t<0?rl:t===0?0:t===1?tl(q$(e)):e<t?rl:e-t<2?ds(e,e-t):-tl(e+1)-z$(e-t+1,t+1)}var Q$=ds;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Y$=Q$,Zc=Y$;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var nl=wc,Z$=Zc,Co=Oe,J$=js,ey=xs,ty=Gr,ry=Pe;function ny(e,t,r){var n;return Co(e)||Co(t)||Co(r)||r<0||r>1||!nl(t)||t===ry?NaN:nl(e)?e>t?0:r===0?e===0?1:0:r===1?e===t?1:0:(n=Z$(t,e),n+=e*ty(r)+(t-e)*J$(-r),ey(n)):0}var oy=ny;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function sy(e){return t;function t(){return e}}var iy=sy;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ay=iy,Jc=ay;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ol=Oe;function ly(e,t){return ol(e)||ol(t)?NaN:e===t?1:0}var cy=ly;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var uy=Jc,sl=Oe;function fy(e){if(sl(e))return uy(NaN);return t;function t(r){return sl(r)?NaN:r===e?1:0}}var dy=fy;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var vy=ks,eu=cy,py=dy;vy(eu,"factory",py);var hy=eu;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var il=wc,gy=Jc,my=Zc,al=hy.factory,Po=Oe,_y=js,$y=xs,yy=Gr,by=Pe;function Ey(e,t){if(Po(e)||Po(t)||!il(e)||e===by||t<0||t>1)return gy(NaN);if(t===0||e===0)return al(0);if(t===1)return al(e);return r;function r(n){var o;return Po(n)?NaN:il(n)?n>e?0:(o=my(e,n),o+=n*yy(t)+(e-n)*_y(-t),$y(o)):0}}var Iy=Ey;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ay=ks,tu=oy,wy=Iy;Ay(tu,"factory",wy);var Ny=tu;const ru={E:.1249,T:.0928,A:.0804,O:.0764,I:.0757,N:.0723,S:.0651,R:.0628,H:.0505,L:.0407,D:.0382,C:.0334,U:.0273,M:.0251,F:.024,P:.0214,G:.0187,W:.0168,Y:.0166,B:.0148,V:.0105,K:.0054,X:.0023,J:.0016,Q:.0012,Z:9e-4};function Sy(e,t,r=ru){const n={};let o=0;for(const s of Object.keys(r))o+=n[s]=Ny(e,t,r[s]);for(const s of Object.keys(n))n[s]/=o;return n}function Oy(e){const t=Array(26).fill(0);for(let n=0;n<e.length;++n){const o=e.charCodeAt(n);65<=o&&o<=90?++t[o-65]:97<=o&&o<=122&&++t[o-97]}const r={};for(let n=0;n<26;++n)r[String.fromCharCode(n+65)]=t[n];return r}function Cy(e,t){let r=Oy(e),n=ru;if(t&&t.length){const i=new Set(t);let a=1;if(n=Object.fromEntries(Object.entries(n).filter(([l,u])=>i.has(l)?(a-=u,!0):!1)),a<1)for(const l of Object.keys(n))n[l]/=a;r=Object.fromEntries(Object.entries(r).filter(l=>!i.has(l[0])))}const o=Object.values(r).reduce((i,a)=>i+a,0),s=Object.keys(r).reduce((i,a)=>(r[a]&&(i[a]={count:r[a],decodesToProbs:Sy(r[a],o,n)}),i),{});return{totalLetters:o,letterDetails:s}}function nu(e){return Object.entries(e).sort((t,r)=>r[1]-t[1]).map(t=>t[0])}function Py(...e){const t=Math.min(...e),r=Math.max(...e)-t;return e.map(n=>(n-t)/r)}function Ty(e,t,r){const n=(a,l)=>Math.round(a+(l-a)*r),o=n(e.r,t.r),s=n(e.g,t.g),i=n(e.b,t.b);return{r:o,g:s,b:i}}const vr=dc("encoded",()=>{const e=we(""),t=Gt(new Map),r=ge(()=>Cy(e.value)),n=(i,a)=>{for(const[l,u]of i.entries())if(u===a)return l},o=i=>i.length===1&&/[a-z]/i.test(i);return{message:e,decryptionKeys:t,allLetterStats:r,addKey:(i,a)=>{if(!o(i)||!o(a))return!1;i=i.toUpperCase(),a=a.toUpperCase();const l=n(t,a);return l&&t.delete(l),t.set(i,a),!0}}}),ou=dc("raw",()=>({message:we("")})),Ry=e=>(kr("data-v-aa6b7497"),e=e(),Ur(),e),Fy=Ry(()=>T("p",null," Enter text below - either plain text and click encode, or a message encoded with a simple alphabetical letter for letter substitution, and click decode. This app provides some tools to help you, but it does not decode the message for you. ",-1)),Ly=ze({__name:"HomeView",setup(e){const t=vr(),r=ou(),n=we(t.message||r.message),o=Ms(),s=()=>{r.message=n.value,t.message="",o.push({name:"encode"})},i=()=>{t.message!==n.value&&(r.message="",t.decryptionKeys.clear(),t.message=n.value),o.push({name:"decode"})};return(a,l)=>(X(),z(se,null,[Fy,T("fieldset",null,[T("div",null,[_n(T("textarea",{id:"message","onUpdate:modelValue":l[0]||(l[0]=u=>n.value=u)},null,512),[[C0,n.value]])]),T("button",{class:"btn",onClick:i,role:"link"},"Decode"),T("button",{class:"btn",onClick:s,role:"link"},"Encode")])],64))}});const Hy=ft(Ly,[["__scopeId","data-v-aa6b7497"]]);function My(){const e=Array(26);for(let t=0;t<26;++t)e[t]=[String.fromCharCode(t+65),Math.random()];return e.sort((t,r)=>t[1]-r[1]),e.map(t=>t[0])}function ll(e,t){t||(t=My());const r=Array(e.length);for(let n=0;n<e.length;++n){const o=e.charCodeAt(n);65<=o&&o<=90?r[n]=t[o-65]:97<=o&&o<=122?r[n]=t[o-97].toLowerCase():r[n]=e[n]}return r.join("")}const Dy=["value"],ky={for:"noSpaces"},Uy={for:"noSpaces"},Wy={for:"noSpaces"},By=ze({__name:"EncodeMsg",setup(e){const t=ou().message,r=we(ll(t)),n=we(!1),o=we(!1),s=we(!1);t||Ms().push("/");const i=ge(()=>{let l=r.value;return n.value&&(l=l.replace(/\s/g,"")),o.value&&(l=l.replace(/[^a-zA-Z\s]/g,"")),s.value&&(l=l.toUpperCase()),l}),a=()=>{r.value=ll(t)};return(l,u)=>(X(),z(se,null,[T("div",null,[T("textarea",{readonly:"",value:be(i)},null,8,Dy)]),T("fieldset",null,[T("label",ky,[_n(T("input",{type:"checkbox","onUpdate:modelValue":u[0]||(u[0]=c=>n.value=c),id:"noSpaces"},null,512),[[oo,n.value]]),lt(" Exclude whitespace ")]),T("label",Uy,[_n(T("input",{type:"checkbox","onUpdate:modelValue":u[1]||(u[1]=c=>o.value=c),id:"noSpaces"},null,512),[[oo,o.value]]),lt(" Exclude punctuation ")]),T("label",Wy,[_n(T("input",{type:"checkbox","onUpdate:modelValue":u[2]||(u[2]=c=>s.value=c),id:"noSpaces"},null,512),[[oo,s.value]]),lt(" Capitals Only ")])]),T("button",{class:"btn",onClick:a},"New random key")],64))}});const Ky=ft(By,[["__scopeId","data-v-f3de3c51"]]),Gy=["disabled"],jy=["onClick","title"],xy=ze({__name:"DecodingKeyboard",props:{activeEncodedLetter:null},emits:["key","enter"],setup(e){const t=e,r=vr(),n=["QWERTYUIOP".split(""),"ASDFGHJKL".split(""),[..."ZXCVBNM".split(""),"enter"]],o=Object.fromEntries(Array.from({length:26},(a,l)=>[String.fromCharCode(l+65),1/26])),s=ge(()=>t.activeEncodedLetter?r.allLetterStats.letterDetails[t.activeEncodedLetter].decodesToProbs:o),i=ge(()=>{const a={r:0,g:255,b:0},l={r:255,g:0,b:0},u=Py(...Object.values(s.value)),c=Object.fromEntries(Object.keys(s.value).map((v,p)=>[v,u[p]])),f=new Set(r.decryptionKeys.values());return n.map(v=>v.map(p=>{var _;return p.length===1?{value:p,colour:Ty(l,a,c[p]||0),p:`probability=${((_=s.value[p])==null?void 0:_.toFixed(3))||"[select letter]"}`,isInUse:f.has(p)}:{value:p}}))});return(a,l)=>(X(),z("fieldset",{id:"keyboard",disabled:!e.activeEncodedLetter},[(X(!0),z(se,null,Ge(be(i),(u,c)=>(X(),z("div",{class:"row",key:c},[T("div",{class:Et(`spacer${c}`)},null,2),(X(!0),z(se,null,Ge(u,f=>(X(),z(se,{key:f},[f.colour?(X(),z("button",{key:0,type:"button",class:Et(f.isInUse?"used-key":""),style:On({borderColor:`rgb(${f.colour.r},${f.colour.g},${f.colour.b})`}),onClick:v=>a.$emit("key",f.value),title:f.p},[T("span",null,he(f.value),1)],14,jy)):(X(),z("button",{key:1,type:"button",class:"non-alpha",onClick:l[0]||(l[0]=v=>a.$emit("enter"))},[T("span",null,he(f.value),1)]))],64))),128)),T("div",{class:Et(`spacer${c}`)},null,2)]))),128))],8,Gy))}});const Vy=ft(xy,[["__scopeId","data-v-8116d145"]]),Xy={id:"coded-text"},zy={key:0,class:"non-alpha char"},qy=["title","onClick","onDblclick"],Qy=ze({__name:"PartialDecodedText",props:{activeLetter:null},emits:["update:active-letter","update:active-word"],setup(e,{emit:t}){const r=e,n=vr(),o=we(-1),s=we(-1),i=we(-1);Wn(()=>{window.addEventListener("keydown",c)}),Wr(()=>{window.removeEventListener("keydown",c)});const a=ge(()=>{let f=-1;return n.message.split(`
`).map(v=>{var _;++f;const p=Array(v.length);for(let y=0;y<v.length;++y){const I=v[y],m=I.charCodeAt(0),L=65<=m&&m<=90;if(L||97<=m&&m<=122){let M,B;L?(B=I,M=n.decryptionKeys.get(I)):(B=String.fromCharCode(m-32),M=(_=n.decryptionKeys.get(B))==null?void 0:_.toLowerCase());const K=Boolean(M);p[y]={id:f++,uc:B,display:M||I,prior:K?`decrypted from '${I}''`:void 0,isDecrypted:K,isNonAlpha:!1}}else p[y]={id:f++,display:I,isNonAlpha:!0}}return p})});function l(f){o.value=f,(f<s.value||f>=i.value)&&(s.value=i.value=-1),t("update:active-letter",f===-1?"":n.message[f].toUpperCase())}function u(f){s.value=p(n.message,f,!1)+1,i.value=p(n.message,f,!0);const v=n.message.slice(s.value,i.value);t("update:active-word",v);function p(_,y,I=!0){let m=y,L=I?()=>++m<_.length:()=>--m>=0,M;for(;L()&&(65<=(M=_.charCodeAt(m))&&M<=90||97<=M&&M<=122););return m}}Bt(()=>r.activeLetter,f=>{o.value!==-1&&f!==n.message[o.value].toUpperCase()&&(o.value=-1)});function c(f){if(o.value===-1||f.key!=="ArrowRight"&&f.key!=="ArrowLeft")return;const v=p(n.message,o.value,f.key==="ArrowRight");v>=0&&l(v);function p(_,y,I=!0){let m=y,L=I?()=>++m<_.length:()=>--m>=0,M;for(;L()&&((M=_.charCodeAt(m))<65||90<M&&M<97||122<M););return m<_.length?m:-1}}return(f,v)=>(X(),z("div",Xy,[(X(!0),z(se,null,Ge(be(a),(p,_)=>(X(),z("div",{key:_},[(X(!0),z(se,null,Ge(p,y=>(X(),z(se,{key:y.id},[y.isNonAlpha?(X(),z("span",zy,he(y.display),1)):(X(),z("span",{key:1,class:Et(["alpha char",{current:y.id===o.value,"active-letter":y.uc===e.activeLetter,"active-word":s.value<=y.id&&y.id<=i.value,decrypted:y.isDecrypted}]),title:y.prior,onClick:I=>l(y.id),onDblclick:I=>u(y.id)},he(y.display),43,qy))],64))),128))]))),128))]))}});const Yy=ft(Qy,[["__scopeId","data-v-3c3fbd57"]]),Vs=e=>(kr("data-v-2309fe36"),e=e(),Ur(),e),Zy=Vs(()=>T("td",null,null,-1)),Jy=["onClick"],e5=Vs(()=>T("th",null,"count",-1)),t5=Vs(()=>T("th",null,"decoded",-1)),r5=ze({__name:"DecodingKeyStats",props:{activeLetter:null},setup(e){const t=e,r=vr(),n=we(),o=ge(()=>Object.keys(r.allLetterStats.letterDetails)),s=ge(()=>o.value.map((l,u)=>({display:r.decryptionKeys.get(l)||"",id:r.decryptionKeys.get(l)||u}))),i=ge(()=>Object.values(r.allLetterStats.letterDetails).map(l=>nu(l.decodesToProbs).map(u=>({letter:u,prob:l.decodesToProbs[u].toFixed(3)})))),a=l=>{switch(Math.round(l%10)){case 1:return"st";case 2:return"nd";case 3:return"rd";default:return"th"}};return Bt(()=>t.activeLetter,l=>{if(l&&n.value&&n.value.scrollWidth>n.value.clientWidth){const u=n.value.scrollWidth/(o.value.length+1);let f=(o.value.indexOf(l)+1.5)*u-.5*n.value.clientWidth;f<0&&(f=0),n.value.scrollLeft=f}}),(l,u)=>(X(),z("div",{id:"letter-details",ref_key:"mainDiv",ref:n},[T("table",null,[T("tbody",null,[T("tr",null,[Zy,(X(!0),z(se,null,Ge(be(o),c=>(X(),z("th",{key:c},[T("a",{href:"#",class:Et(e.activeLetter===c?"active":""),onClick:F0(f=>l.$emit("update:active-letter",c),["prevent"])},he(c),11,Jy)]))),128))]),T("tr",null,[e5,(X(!0),z(se,null,Ge(be(r).allLetterStats.letterDetails,(c,f)=>(X(),z("td",{key:f},he(c.count),1))),128))]),T("tr",null,[t5,(X(!0),z(se,null,Ge(be(s),c=>(X(),z("td",{key:c.id},he(c.display),1))),128))]),(X(),z(se,null,Ge(3,c=>T("tr",{key:c},[T("th",null,[lt(he(c),1),T("sup",null,he(a(c)),1)]),(X(!0),z(se,null,Ge(be(i),(f,v)=>(X(),z("td",{key:v},he(f[c-1].letter)+"\xA0("+he(f[c-1].prob)+") ",1))),128))])),64))])])],512))}});const n5=ft(r5,[["__scopeId","data-v-2309fe36"]]),o5=Object.freeze([null,{a:2.06,i:.52},{of:4.16,to:2.6,in:2.27,is:1.13,it:.77,as:.77,be:.65,by:.63,on:.62,he:.55,or:.49,at:.46,an:.37,we:.28,if:.21,so:.19,no:.19},{the:7.14,and:3.04,for:.88,was:.74,not:.61,are:.5,his:.49,but:.38,had:.35,you:.31,one:.29,all:.28,can:.22,her:.22,has:.22,who:.2},{that:1.08,with:.7,this:.51,from:.47,have:.37,they:.33,were:.31,been:.22,more:.21,when:.2,will:.2},{which:.42,their:.29,there:.22,would:.2}]),s5={key:0,id:"words-of-length"},i5={key:0},a5={key:1},l5=ze({__name:"CommonWordLengths",props:{wordLength:null},setup(e){const t=e,r=ge(()=>o5[t.wordLength]);return(n,o)=>e.wordLength?(X(),z("div",s5,[T("h4",null,"Word length: "+he(e.wordLength),1),be(r)?(X(),z("ol",i5,[(X(!0),z(se,null,Ge(be(r),(s,i)=>(X(),z("li",{key:i},[lt(' "'+he(i)+'" ',1),T("small",null,"("+he(s)+"% of all words)",1)]))),128))])):(X(),z("p",a5,"No data"))])):nc("",!0)}});const c5=ft(l5,[["__scopeId","data-v-c7de237e"]]),u5=e=>(kr("data-v-a215f896"),e=e(),Ur(),e),f5={key:0,class:"message"},d5=u5(()=>T("hr",null,null,-1)),v5=ze({__name:"DecodeMsg",setup(e){const t=we(""),r=we(""),n=we(0),o=vr(),s=Ms();o.message||s.push({name:"home"}),Wn(()=>{window.addEventListener("keyup",i),l("click on letter within the message to select the encoded letter, then use the keyboard to determine what the real letter is")}),Wr(()=>{window.removeEventListener("keyup",i)});function i(u){a(u.key)}function a(u){o.addKey(t.value,u)}function l(u,c=3e3){r.value=u,c>0&&setTimeout(()=>{r.value=""},c)}return(u,c)=>(X(),z(se,null,[ye(Ls,null,{default:Ss(()=>[r.value?(X(),z("div",f5,he(r.value),1)):nc("",!0)]),_:1}),ye(Yy,{"active-letter":t.value,"onUpdate:active-letter":c[0]||(c[0]=f=>t.value=f),"onUpdate:activeWord":c[1]||(c[1]=f=>n.value=f.length)},null,8,["active-letter"]),d5,T("div",null,[T("h4",null,[lt(" Total letters: "),T("output",null,he(be(o).allLetterStats.totalLetters),1)])]),ye(Vy,{onKey:a,onEnter:c[2]||(c[2]=f=>be(s).push({name:"decoded-key-details"})),"active-encoded-letter":t.value},null,8,["active-encoded-letter"]),ye(n5,{"active-letter":t.value,"onUpdate:active-letter":c[3]||(c[3]=f=>t.value=f)},null,8,["active-letter"]),ye(c5,{"word-length":n.value},null,8,["word-length"])],64))}});const p5=ft(v5,[["__scopeId","data-v-a215f896"]]),su=e=>(kr("data-v-4a52d52e"),e=e(),Ur(),e),h5={id:"letter-details"},g5=su(()=>T("tr",null,[T("th",{rowspan:"2"},"Encoded"),T("th",{rowspan:"2"},"Decodes to"),T("th",{rowspan:"2"},"Occurences"),T("th",{colspan:"3"},"probabilities")],-1)),m5=su(()=>T("tr",null,[T("th",null,"Value"),T("th",null,"Rank / 26"),T("th",null,"max (all letters)")],-1)),_5=["onClick"],$5=ze({__name:"DecodedKeysFinalDetails",setup(e){const t=vr(),r=ge(()=>[...t.decryptionKeys.keys()].map(n=>{const o=t.decryptionKeys.get(n),s=t.allLetterStats.letterDetails[n],i=nu(s.decodesToProbs),a=l=>l.toFixed(4);return{encoded:n,decoded:o,count:s.count,pValue:a(s.decodesToProbs[o]),rank:i.indexOf(o)+1,maxP:s.decodesToProbs[i[0]].toFixed(3),maxLetter:i[0]}}));return(n,o)=>{const s=Nf("RouterLink");return X(),z(se,null,[T("div",h5,[T("table",null,[T("tbody",null,[g5,m5,(X(!0),z(se,null,Ge(be(r),i=>(X(),z("tr",{key:i.encoded},[T("td",null,he(i.encoded),1),T("td",null,he(i.decoded),1),T("td",null,he(i.count),1),T("td",null,he(i.pValue),1),T("td",null,he(i.rank),1),T("td",null,he(i.maxP)+"\xA0("+he(i.maxLetter)+")",1)]))),128))])])]),ye(s,{to:"/decode",custom:""},{default:Ss(({navigate:i})=>[T("button",{class:"btn",onClick:i,role:"link"},"Back to decoding",8,_5)]),_:1})],64)}}});const y5=ft($5,[["__scopeId","data-v-4a52d52e"]]),b5=xd({history:ld("/letter-swap-decoder/"),routes:[{path:"/",name:"home",component:Hy},{path:"/decode",name:"decode",component:p5},{path:"/encode",name:"encode",component:Ky},{path:"/decoded-key-details",name:"decoded-key-details",component:y5}]});const Xs=M0(Yd);Xs.use(U0());Xs.use(b5);Xs.mount("#app");
