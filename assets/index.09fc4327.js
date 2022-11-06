(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerpolicy&&(s.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?s.credentials="include":o.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(o){if(o.ep)return;o.ep=!0;const s=r(o);fetch(o.href,s)}})();function vs(e,t){const r=Object.create(null),n=e.split(",");for(let o=0;o<n.length;o++)r[n[o]]=!0;return t?o=>!!r[o.toLowerCase()]:o=>!!r[o]}const su="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",iu=vs(su);function cl(e){return!!e||e===""}function On(e){if(U(e)){const t={};for(let r=0;r<e.length;r++){const n=e[r],o=Ee(n)?cu(n):On(n);if(o)for(const s in o)t[s]=o[s]}return t}else{if(Ee(e))return e;if(le(e))return e}}const au=/;(?![^(]*\))/g,lu=/:(.+)/;function cu(e){const t={};return e.split(au).forEach(r=>{if(r){const n=r.split(lu);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}function yt(e){let t="";if(Ee(e))t=e;else if(U(e))for(let r=0;r<e.length;r++){const n=yt(e[r]);n&&(t+=n+" ")}else if(le(e))for(const r in e)e[r]&&(t+=r+" ");return t.trim()}function uu(e,t){if(e.length!==t.length)return!1;let r=!0;for(let n=0;r&&n<e.length;n++)r=Cn(e[n],t[n]);return r}function Cn(e,t){if(e===t)return!0;let r=Ys(e),n=Ys(t);if(r||n)return r&&n?e.getTime()===t.getTime():!1;if(r=Cr(e),n=Cr(t),r||n)return e===t;if(r=U(e),n=U(t),r||n)return r&&n?uu(e,t):!1;if(r=le(e),n=le(t),r||n){if(!r||!n)return!1;const o=Object.keys(e).length,s=Object.keys(t).length;if(o!==s)return!1;for(const i in e){const a=e.hasOwnProperty(i),l=t.hasOwnProperty(i);if(a&&!l||!a&&l||!Cn(e[i],t[i]))return!1}}return String(e)===String(t)}function ul(e,t){return e.findIndex(r=>Cn(r,t))}const $e=e=>Ee(e)?e:e==null?"":U(e)||le(e)&&(e.toString===vl||!V(e.toString))?JSON.stringify(e,fl,2):String(e),fl=(e,t)=>t&&t.__v_isRef?fl(e,t.value):Yt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((r,[n,o])=>(r[`${n} =>`]=o,r),{})}:Tn(t)?{[`Set(${t.size})`]:[...t.values()]}:le(t)&&!U(t)&&!pl(t)?String(t):t,ie={},Qt=[],je=()=>{},fu=()=>!1,du=/^on[^a-z]/,Pn=e=>du.test(e),ps=e=>e.startsWith("onUpdate:"),we=Object.assign,hs=(e,t)=>{const r=e.indexOf(t);r>-1&&e.splice(r,1)},vu=Object.prototype.hasOwnProperty,z=(e,t)=>vu.call(e,t),U=Array.isArray,Yt=e=>Dr(e)==="[object Map]",Tn=e=>Dr(e)==="[object Set]",Ys=e=>Dr(e)==="[object Date]",V=e=>typeof e=="function",Ee=e=>typeof e=="string",Cr=e=>typeof e=="symbol",le=e=>e!==null&&typeof e=="object",dl=e=>le(e)&&V(e.then)&&V(e.catch),vl=Object.prototype.toString,Dr=e=>vl.call(e),pu=e=>Dr(e).slice(8,-1),pl=e=>Dr(e)==="[object Object]",gs=e=>Ee(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,pn=vs(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Rn=e=>{const t=Object.create(null);return r=>t[r]||(t[r]=e(r))},hu=/-(\w)/g,tt=Rn(e=>e.replace(hu,(t,r)=>r?r.toUpperCase():"")),gu=/\B([A-Z])/g,sr=Rn(e=>e.replace(gu,"-$1").toLowerCase()),Fn=Rn(e=>e.charAt(0).toUpperCase()+e.slice(1)),Yn=Rn(e=>e?`on${Fn(e)}`:""),Pr=(e,t)=>!Object.is(e,t),hn=(e,t)=>{for(let r=0;r<e.length;r++)e[r](t)},yn=(e,t,r)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:r})},bn=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Zs;const mu=()=>Zs||(Zs=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Qe;class hl{constructor(t=!1){this.detached=t,this.active=!0,this.effects=[],this.cleanups=[],this.parent=Qe,!t&&Qe&&(this.index=(Qe.scopes||(Qe.scopes=[])).push(this)-1)}run(t){if(this.active){const r=Qe;try{return Qe=this,t()}finally{Qe=r}}}on(){Qe=this}off(){Qe=this.parent}stop(t){if(this.active){let r,n;for(r=0,n=this.effects.length;r<n;r++)this.effects[r].stop();for(r=0,n=this.cleanups.length;r<n;r++)this.cleanups[r]();if(this.scopes)for(r=0,n=this.scopes.length;r<n;r++)this.scopes[r].stop(!0);if(!this.detached&&this.parent&&!t){const o=this.parent.scopes.pop();o&&o!==this&&(this.parent.scopes[this.index]=o,o.index=this.index)}this.parent=void 0,this.active=!1}}}function gl(e){return new hl(e)}function _u(e,t=Qe){t&&t.active&&t.effects.push(e)}const ms=e=>{const t=new Set(e);return t.w=0,t.n=0,t},ml=e=>(e.w&wt)>0,_l=e=>(e.n&wt)>0,$u=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=wt},yu=e=>{const{deps:t}=e;if(t.length){let r=0;for(let n=0;n<t.length;n++){const o=t[n];ml(o)&&!_l(o)?o.delete(e):t[r++]=o,o.w&=~wt,o.n&=~wt}t.length=r}},To=new WeakMap;let Ar=0,wt=1;const Ro=30;let Ke;const Bt=Symbol(""),Fo=Symbol("");class _s{constructor(t,r=null,n){this.fn=t,this.scheduler=r,this.active=!0,this.deps=[],this.parent=void 0,_u(this,n)}run(){if(!this.active)return this.fn();let t=Ke,r=bt;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Ke,Ke=this,bt=!0,wt=1<<++Ar,Ar<=Ro?$u(this):Js(this),this.fn()}finally{Ar<=Ro&&yu(this),wt=1<<--Ar,Ke=this.parent,bt=r,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Ke===this?this.deferStop=!0:this.active&&(Js(this),this.onStop&&this.onStop(),this.active=!1)}}function Js(e){const{deps:t}=e;if(t.length){for(let r=0;r<t.length;r++)t[r].delete(e);t.length=0}}let bt=!0;const $l=[];function ir(){$l.push(bt),bt=!1}function ar(){const e=$l.pop();bt=e===void 0?!0:e}function Le(e,t,r){if(bt&&Ke){let n=To.get(e);n||To.set(e,n=new Map);let o=n.get(r);o||n.set(r,o=ms()),yl(o)}}function yl(e,t){let r=!1;Ar<=Ro?_l(e)||(e.n|=wt,r=!ml(e)):r=!e.has(Ke),r&&(e.add(Ke),Ke.deps.push(e))}function lt(e,t,r,n,o,s){const i=To.get(e);if(!i)return;let a=[];if(t==="clear")a=[...i.values()];else if(r==="length"&&U(e))i.forEach((l,c)=>{(c==="length"||c>=n)&&a.push(l)});else switch(r!==void 0&&a.push(i.get(r)),t){case"add":U(e)?gs(r)&&a.push(i.get("length")):(a.push(i.get(Bt)),Yt(e)&&a.push(i.get(Fo)));break;case"delete":U(e)||(a.push(i.get(Bt)),Yt(e)&&a.push(i.get(Fo)));break;case"set":Yt(e)&&a.push(i.get(Bt));break}if(a.length===1)a[0]&&Lo(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);Lo(ms(l))}}function Lo(e,t){const r=U(e)?e:[...e];for(const n of r)n.computed&&ei(n);for(const n of r)n.computed||ei(n)}function ei(e,t){(e!==Ke||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const bu=vs("__proto__,__v_isRef,__isVue"),bl=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Cr)),Eu=$s(),Iu=$s(!1,!0),Au=$s(!0),ti=wu();function wu(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...r){const n=ee(this);for(let s=0,i=this.length;s<i;s++)Le(n,"get",s+"");const o=n[t](...r);return o===-1||o===!1?n[t](...r.map(ee)):o}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...r){ir();const n=ee(this)[t].apply(this,r);return ar(),n}}),e}function $s(e=!1,t=!1){return function(n,o,s){if(o==="__v_isReactive")return!e;if(o==="__v_isReadonly")return e;if(o==="__v_isShallow")return t;if(o==="__v_raw"&&s===(e?t?Wu:Nl:t?wl:Al).get(n))return n;const i=U(n);if(!e&&i&&z(ti,o))return Reflect.get(ti,o,s);const a=Reflect.get(n,o,s);return(Cr(o)?bl.has(o):bu(o))||(e||Le(n,"get",o),t)?a:me(a)?i&&gs(o)?a:a.value:le(a)?e?Sl(a):Kt(a):a}}const Nu=El(),Su=El(!0);function El(e=!1){return function(r,n,o,s){let i=r[n];if(er(i)&&me(i)&&!me(o))return!1;if(!e&&(!En(o)&&!er(o)&&(i=ee(i),o=ee(o)),!U(r)&&me(i)&&!me(o)))return i.value=o,!0;const a=U(r)&&gs(n)?Number(n)<r.length:z(r,n),l=Reflect.set(r,n,o,s);return r===ee(s)&&(a?Pr(o,i)&&lt(r,"set",n,o):lt(r,"add",n,o)),l}}function Ou(e,t){const r=z(e,t);e[t];const n=Reflect.deleteProperty(e,t);return n&&r&&lt(e,"delete",t,void 0),n}function Cu(e,t){const r=Reflect.has(e,t);return(!Cr(t)||!bl.has(t))&&Le(e,"has",t),r}function Pu(e){return Le(e,"iterate",U(e)?"length":Bt),Reflect.ownKeys(e)}const Il={get:Eu,set:Nu,deleteProperty:Ou,has:Cu,ownKeys:Pu},Tu={get:Au,set(e,t){return!0},deleteProperty(e,t){return!0}},Ru=we({},Il,{get:Iu,set:Su}),ys=e=>e,Ln=e=>Reflect.getPrototypeOf(e);function Vr(e,t,r=!1,n=!1){e=e.__v_raw;const o=ee(e),s=ee(t);r||(t!==s&&Le(o,"get",t),Le(o,"get",s));const{has:i}=Ln(o),a=n?ys:r?Is:Tr;if(i.call(o,t))return a(e.get(t));if(i.call(o,s))return a(e.get(s));e!==o&&e.get(t)}function xr(e,t=!1){const r=this.__v_raw,n=ee(r),o=ee(e);return t||(e!==o&&Le(n,"has",e),Le(n,"has",o)),e===o?r.has(e):r.has(e)||r.has(o)}function Xr(e,t=!1){return e=e.__v_raw,!t&&Le(ee(e),"iterate",Bt),Reflect.get(e,"size",e)}function ri(e){e=ee(e);const t=ee(this);return Ln(t).has.call(t,e)||(t.add(e),lt(t,"add",e,e)),this}function ni(e,t){t=ee(t);const r=ee(this),{has:n,get:o}=Ln(r);let s=n.call(r,e);s||(e=ee(e),s=n.call(r,e));const i=o.call(r,e);return r.set(e,t),s?Pr(t,i)&&lt(r,"set",e,t):lt(r,"add",e,t),this}function oi(e){const t=ee(this),{has:r,get:n}=Ln(t);let o=r.call(t,e);o||(e=ee(e),o=r.call(t,e)),n&&n.call(t,e);const s=t.delete(e);return o&&lt(t,"delete",e,void 0),s}function si(){const e=ee(this),t=e.size!==0,r=e.clear();return t&&lt(e,"clear",void 0,void 0),r}function zr(e,t){return function(n,o){const s=this,i=s.__v_raw,a=ee(i),l=t?ys:e?Is:Tr;return!e&&Le(a,"iterate",Bt),i.forEach((c,u)=>n.call(o,l(c),l(u),s))}}function qr(e,t,r){return function(...n){const o=this.__v_raw,s=ee(o),i=Yt(s),a=e==="entries"||e===Symbol.iterator&&i,l=e==="keys"&&i,c=o[e](...n),u=r?ys:t?Is:Tr;return!t&&Le(s,"iterate",l?Fo:Bt),{next(){const{value:f,done:v}=c.next();return v?{value:f,done:v}:{value:a?[u(f[0]),u(f[1])]:u(f),done:v}},[Symbol.iterator](){return this}}}}function ut(e){return function(...t){return e==="delete"?!1:this}}function Fu(){const e={get(s){return Vr(this,s)},get size(){return Xr(this)},has:xr,add:ri,set:ni,delete:oi,clear:si,forEach:zr(!1,!1)},t={get(s){return Vr(this,s,!1,!0)},get size(){return Xr(this)},has:xr,add:ri,set:ni,delete:oi,clear:si,forEach:zr(!1,!0)},r={get(s){return Vr(this,s,!0)},get size(){return Xr(this,!0)},has(s){return xr.call(this,s,!0)},add:ut("add"),set:ut("set"),delete:ut("delete"),clear:ut("clear"),forEach:zr(!0,!1)},n={get(s){return Vr(this,s,!0,!0)},get size(){return Xr(this,!0)},has(s){return xr.call(this,s,!0)},add:ut("add"),set:ut("set"),delete:ut("delete"),clear:ut("clear"),forEach:zr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{e[s]=qr(s,!1,!1),r[s]=qr(s,!0,!1),t[s]=qr(s,!1,!0),n[s]=qr(s,!0,!0)}),[e,r,t,n]}const[Lu,Hu,Mu,Du]=Fu();function bs(e,t){const r=t?e?Du:Mu:e?Hu:Lu;return(n,o,s)=>o==="__v_isReactive"?!e:o==="__v_isReadonly"?e:o==="__v_raw"?n:Reflect.get(z(r,o)&&o in n?r:n,o,s)}const ku={get:bs(!1,!1)},Uu={get:bs(!1,!0)},Bu={get:bs(!0,!1)},Al=new WeakMap,wl=new WeakMap,Nl=new WeakMap,Wu=new WeakMap;function Ku(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Gu(e){return e.__v_skip||!Object.isExtensible(e)?0:Ku(pu(e))}function Kt(e){return er(e)?e:Es(e,!1,Il,ku,Al)}function ju(e){return Es(e,!1,Ru,Uu,wl)}function Sl(e){return Es(e,!0,Tu,Bu,Nl)}function Es(e,t,r,n,o){if(!le(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const s=o.get(e);if(s)return s;const i=Gu(e);if(i===0)return e;const a=new Proxy(e,i===2?n:r);return o.set(e,a),a}function Et(e){return er(e)?Et(e.__v_raw):!!(e&&e.__v_isReactive)}function er(e){return!!(e&&e.__v_isReadonly)}function En(e){return!!(e&&e.__v_isShallow)}function Ol(e){return Et(e)||er(e)}function ee(e){const t=e&&e.__v_raw;return t?ee(t):e}function tr(e){return yn(e,"__v_skip",!0),e}const Tr=e=>le(e)?Kt(e):e,Is=e=>le(e)?Sl(e):e;function Cl(e){bt&&Ke&&(e=ee(e),yl(e.dep||(e.dep=ms())))}function Pl(e,t){e=ee(e),e.dep&&Lo(e.dep)}function me(e){return!!(e&&e.__v_isRef===!0)}function Fe(e){return Tl(e,!1)}function Vu(e){return Tl(e,!0)}function Tl(e,t){return me(e)?e:new xu(e,t)}class xu{constructor(t,r){this.__v_isShallow=r,this.dep=void 0,this.__v_isRef=!0,this._rawValue=r?t:ee(t),this._value=r?t:Tr(t)}get value(){return Cl(this),this._value}set value(t){const r=this.__v_isShallow||En(t)||er(t);t=r?t:ee(t),Pr(t,this._rawValue)&&(this._rawValue=t,this._value=r?t:Tr(t),Pl(this))}}function Ae(e){return me(e)?e.value:e}const Xu={get:(e,t,r)=>Ae(Reflect.get(e,t,r)),set:(e,t,r,n)=>{const o=e[t];return me(o)&&!me(r)?(o.value=r,!0):Reflect.set(e,t,r,n)}};function Rl(e){return Et(e)?e:new Proxy(e,Xu)}function zu(e){const t=U(e)?new Array(e.length):{};for(const r in e)t[r]=Qu(e,r);return t}class qu{constructor(t,r,n){this._object=t,this._key=r,this._defaultValue=n,this.__v_isRef=!0}get value(){const t=this._object[this._key];return t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}}function Qu(e,t,r){const n=e[t];return me(n)?n:new qu(e,t,r)}var Fl;class Yu{constructor(t,r,n,o){this._setter=r,this.dep=void 0,this.__v_isRef=!0,this[Fl]=!1,this._dirty=!0,this.effect=new _s(t,()=>{this._dirty||(this._dirty=!0,Pl(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!o,this.__v_isReadonly=n}get value(){const t=ee(this);return Cl(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}Fl="__v_isReadonly";function Zu(e,t,r=!1){let n,o;const s=V(e);return s?(n=e,o=je):(n=e.get,o=e.set),new Yu(n,o,s||!o,r)}function It(e,t,r,n){let o;try{o=n?e(...n):e()}catch(s){Hn(s,t,r)}return o}function ke(e,t,r,n){if(V(e)){const s=It(e,t,r,n);return s&&dl(s)&&s.catch(i=>{Hn(i,t,r)}),s}const o=[];for(let s=0;s<e.length;s++)o.push(ke(e[s],t,r,n));return o}function Hn(e,t,r,n=!0){const o=t?t.vnode:null;if(t){let s=t.parent;const i=t.proxy,a=r;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](e,i,a)===!1)return}s=s.parent}const l=t.appContext.config.errorHandler;if(l){It(l,null,10,[e,i,a]);return}}Ju(e,r,o,n)}function Ju(e,t,r,n=!0){console.error(e)}let Rr=!1,Ho=!1;const Ne=[];let Ze=0;const Zt=[];let at=null,Lt=0;const Ll=Promise.resolve();let As=null;function ws(e){const t=As||Ll;return e?t.then(this?e.bind(this):e):t}function ef(e){let t=Ze+1,r=Ne.length;for(;t<r;){const n=t+r>>>1;Fr(Ne[n])<e?t=n+1:r=n}return t}function Ns(e){(!Ne.length||!Ne.includes(e,Rr&&e.allowRecurse?Ze+1:Ze))&&(e.id==null?Ne.push(e):Ne.splice(ef(e.id),0,e),Hl())}function Hl(){!Rr&&!Ho&&(Ho=!0,As=Ll.then(Dl))}function tf(e){const t=Ne.indexOf(e);t>Ze&&Ne.splice(t,1)}function rf(e){U(e)?Zt.push(...e):(!at||!at.includes(e,e.allowRecurse?Lt+1:Lt))&&Zt.push(e),Hl()}function ii(e,t=Rr?Ze+1:0){for(;t<Ne.length;t++){const r=Ne[t];r&&r.pre&&(Ne.splice(t,1),t--,r())}}function Ml(e){if(Zt.length){const t=[...new Set(Zt)];if(Zt.length=0,at){at.push(...t);return}for(at=t,at.sort((r,n)=>Fr(r)-Fr(n)),Lt=0;Lt<at.length;Lt++)at[Lt]();at=null,Lt=0}}const Fr=e=>e.id==null?1/0:e.id,nf=(e,t)=>{const r=Fr(e)-Fr(t);if(r===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return r};function Dl(e){Ho=!1,Rr=!0,Ne.sort(nf);const t=je;try{for(Ze=0;Ze<Ne.length;Ze++){const r=Ne[Ze];r&&r.active!==!1&&It(r,null,14)}}finally{Ze=0,Ne.length=0,Ml(),Rr=!1,As=null,(Ne.length||Zt.length)&&Dl()}}function of(e,t,...r){if(e.isUnmounted)return;const n=e.vnode.props||ie;let o=r;const s=t.startsWith("update:"),i=s&&t.slice(7);if(i&&i in n){const u=`${i==="modelValue"?"model":i}Modifiers`,{number:f,trim:v}=n[u]||ie;v&&(o=r.map(p=>p.trim())),f&&(o=r.map(bn))}let a,l=n[a=Yn(t)]||n[a=Yn(tt(t))];!l&&s&&(l=n[a=Yn(sr(t))]),l&&ke(l,e,6,o);const c=n[a+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,ke(c,e,6,o)}}function kl(e,t,r=!1){const n=t.emitsCache,o=n.get(e);if(o!==void 0)return o;const s=e.emits;let i={},a=!1;if(!V(e)){const l=c=>{const u=kl(c,t,!0);u&&(a=!0,we(i,u))};!r&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!s&&!a?(le(e)&&n.set(e,null),null):(U(s)?s.forEach(l=>i[l]=null):we(i,s),le(e)&&n.set(e,i),i)}function Mn(e,t){return!e||!Pn(t)?!1:(t=t.slice(2).replace(/Once$/,""),z(e,t[0].toLowerCase()+t.slice(1))||z(e,sr(t))||z(e,t))}let De=null,Dn=null;function In(e){const t=De;return De=e,Dn=e&&e.type.__scopeId||null,t}function kr(e){Dn=e}function Ur(){Dn=null}function Ss(e,t=De,r){if(!t||e._n)return e;const n=(...o)=>{n._d&&mi(-1);const s=In(t);let i;try{i=e(...o)}finally{In(s),n._d&&mi(1)}return i};return n._n=!0,n._c=!0,n._d=!0,n}function Zn(e){const{type:t,vnode:r,proxy:n,withProxy:o,props:s,propsOptions:[i],slots:a,attrs:l,emit:c,render:u,renderCache:f,data:v,setupState:p,ctx:m,inheritAttrs:A}=e;let E,$;const H=In(e);try{if(r.shapeFlag&4){const W=o||n;E=Ye(u.call(W,W,f,s,p,v,m)),$=l}else{const W=t;E=Ye(W.length>1?W(s,{attrs:l,slots:a,emit:c}):W(s,null)),$=t.props?l:sf(l)}}catch(W){wr.length=0,Hn(W,e,1),E=ye(Ve)}let B=E;if($&&A!==!1){const W=Object.keys($),{shapeFlag:j}=B;W.length&&j&7&&(i&&W.some(ps)&&($=af($,i)),B=Nt(B,$))}return r.dirs&&(B=Nt(B),B.dirs=B.dirs?B.dirs.concat(r.dirs):r.dirs),r.transition&&(B.transition=r.transition),E=B,In(H),E}const sf=e=>{let t;for(const r in e)(r==="class"||r==="style"||Pn(r))&&((t||(t={}))[r]=e[r]);return t},af=(e,t)=>{const r={};for(const n in e)(!ps(n)||!(n.slice(9)in t))&&(r[n]=e[n]);return r};function lf(e,t,r){const{props:n,children:o,component:s}=e,{props:i,children:a,patchFlag:l}=t,c=s.emitsOptions;if(t.dirs||t.transition)return!0;if(r&&l>=0){if(l&1024)return!0;if(l&16)return n?ai(n,i,c):!!i;if(l&8){const u=t.dynamicProps;for(let f=0;f<u.length;f++){const v=u[f];if(i[v]!==n[v]&&!Mn(c,v))return!0}}}else return(o||a)&&(!a||!a.$stable)?!0:n===i?!1:n?i?ai(n,i,c):!0:!!i;return!1}function ai(e,t,r){const n=Object.keys(t);if(n.length!==Object.keys(e).length)return!0;for(let o=0;o<n.length;o++){const s=n[o];if(t[s]!==e[s]&&!Mn(r,s))return!0}return!1}function cf({vnode:e,parent:t},r){for(;t&&t.subTree===e;)(e=t.vnode).el=r,t=t.parent}const uf=e=>e.__isSuspense;function ff(e,t){t&&t.pendingBranch?U(e)?t.effects.push(...e):t.effects.push(e):rf(e)}function gn(e,t){if(be){let r=be.provides;const n=be.parent&&be.parent.provides;n===r&&(r=be.provides=Object.create(n)),r[e]=t}}function et(e,t,r=!1){const n=be||De;if(n){const o=n.parent==null?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides;if(o&&e in o)return o[e];if(arguments.length>1)return r&&V(t)?t.call(n.proxy):t}}const li={};function Jt(e,t,r){return Ul(e,t,r)}function Ul(e,t,{immediate:r,deep:n,flush:o,onTrack:s,onTrigger:i}=ie){const a=be;let l,c=!1,u=!1;if(me(e)?(l=()=>e.value,c=En(e)):Et(e)?(l=()=>e,n=!0):U(e)?(u=!0,c=e.some($=>Et($)||En($)),l=()=>e.map($=>{if(me($))return $.value;if(Et($))return kt($);if(V($))return It($,a,2)})):V(e)?t?l=()=>It(e,a,2):l=()=>{if(!(a&&a.isUnmounted))return f&&f(),ke(e,a,3,[v])}:l=je,t&&n){const $=l;l=()=>kt($())}let f,v=$=>{f=E.onStop=()=>{It($,a,4)}};if(Hr)return v=je,t?r&&ke(t,a,3,[l(),u?[]:void 0,v]):l(),je;let p=u?[]:li;const m=()=>{if(!!E.active)if(t){const $=E.run();(n||c||(u?$.some((H,B)=>Pr(H,p[B])):Pr($,p)))&&(f&&f(),ke(t,a,3,[$,p===li?void 0:p,v]),p=$)}else E.run()};m.allowRecurse=!!t;let A;o==="sync"?A=m:o==="post"?A=()=>Te(m,a&&a.suspense):(m.pre=!0,a&&(m.id=a.uid),A=()=>Ns(m));const E=new _s(l,A);return t?r?m():p=E.run():o==="post"?Te(E.run.bind(E),a&&a.suspense):E.run(),()=>{E.stop(),a&&a.scope&&hs(a.scope.effects,E)}}function df(e,t,r){const n=this.proxy,o=Ee(e)?e.includes(".")?Bl(n,e):()=>n[e]:e.bind(n,n);let s;V(t)?s=t:(s=t.handler,r=t);const i=be;rr(this);const a=Ul(o,s.bind(n),r);return i?rr(i):Wt(),a}function Bl(e,t){const r=t.split(".");return()=>{let n=e;for(let o=0;o<r.length&&n;o++)n=n[r[o]];return n}}function kt(e,t){if(!le(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),me(e))kt(e.value,t);else if(U(e))for(let r=0;r<e.length;r++)kt(e[r],t);else if(Tn(e)||Yt(e))e.forEach(r=>{kt(r,t)});else if(pl(e))for(const r in e)kt(e[r],t);return e}function vf(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Bn(()=>{e.isMounted=!0}),Vl(()=>{e.isUnmounting=!0}),e}const Me=[Function,Array],pf={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Me,onEnter:Me,onAfterEnter:Me,onEnterCancelled:Me,onBeforeLeave:Me,onLeave:Me,onAfterLeave:Me,onLeaveCancelled:Me,onBeforeAppear:Me,onAppear:Me,onAfterAppear:Me,onAppearCancelled:Me},setup(e,{slots:t}){const r=Rs(),n=vf();let o;return()=>{const s=t.default&&Gl(t.default(),!0);if(!s||!s.length)return;let i=s[0];if(s.length>1){for(const A of s)if(A.type!==Ve){i=A;break}}const a=ee(e),{mode:l}=a;if(n.isLeaving)return Jn(i);const c=ci(i);if(!c)return Jn(i);const u=Mo(c,a,n,r);Do(c,u);const f=r.subTree,v=f&&ci(f);let p=!1;const{getTransitionKey:m}=c.type;if(m){const A=m();o===void 0?o=A:A!==o&&(o=A,p=!0)}if(v&&v.type!==Ve&&(!Ht(c,v)||p)){const A=Mo(v,a,n,r);if(Do(v,A),l==="out-in")return n.isLeaving=!0,A.afterLeave=()=>{n.isLeaving=!1,r.update()},Jn(i);l==="in-out"&&c.type!==Ve&&(A.delayLeave=(E,$,H)=>{const B=Kl(n,v);B[String(v.key)]=v,E._leaveCb=()=>{$(),E._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=H})}return i}}},Wl=pf;function Kl(e,t){const{leavingVNodes:r}=e;let n=r.get(t.type);return n||(n=Object.create(null),r.set(t.type,n)),n}function Mo(e,t,r,n){const{appear:o,mode:s,persisted:i=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:f,onLeave:v,onAfterLeave:p,onLeaveCancelled:m,onBeforeAppear:A,onAppear:E,onAfterAppear:$,onAppearCancelled:H}=t,B=String(e.key),W=Kl(r,e),j=(O,q)=>{O&&ke(O,n,9,q)},te=(O,q)=>{const Q=q[1];j(O,q),U(O)?O.every(fe=>fe.length<=1)&&Q():O.length<=1&&Q()},G={mode:s,persisted:i,beforeEnter(O){let q=a;if(!r.isMounted)if(o)q=A||a;else return;O._leaveCb&&O._leaveCb(!0);const Q=W[B];Q&&Ht(e,Q)&&Q.el._leaveCb&&Q.el._leaveCb(),j(q,[O])},enter(O){let q=l,Q=c,fe=u;if(!r.isMounted)if(o)q=E||l,Q=$||c,fe=H||u;else return;let F=!1;const se=O._enterCb=de=>{F||(F=!0,de?j(fe,[O]):j(Q,[O]),G.delayedLeave&&G.delayedLeave(),O._enterCb=void 0)};q?te(q,[O,se]):se()},leave(O,q){const Q=String(e.key);if(O._enterCb&&O._enterCb(!0),r.isUnmounting)return q();j(f,[O]);let fe=!1;const F=O._leaveCb=se=>{fe||(fe=!0,q(),se?j(m,[O]):j(p,[O]),O._leaveCb=void 0,W[Q]===e&&delete W[Q])};W[Q]=e,v?te(v,[O,F]):F()},clone(O){return Mo(O,t,r,n)}};return G}function Jn(e){if(kn(e))return e=Nt(e),e.children=null,e}function ci(e){return kn(e)?e.children?e.children[0]:void 0:e}function Do(e,t){e.shapeFlag&6&&e.component?Do(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Gl(e,t=!1,r){let n=[],o=0;for(let s=0;s<e.length;s++){let i=e[s];const a=r==null?i.key:String(r)+String(i.key!=null?i.key:s);i.type===ae?(i.patchFlag&128&&o++,n=n.concat(Gl(i.children,t,a))):(t||i.type!==Ve)&&n.push(a!=null?Nt(i,{key:a}):i)}if(o>1)for(let s=0;s<n.length;s++)n[s].patchFlag=-2;return n}function rt(e){return V(e)?{setup:e,name:e.name}:e}const mn=e=>!!e.type.__asyncLoader,kn=e=>e.type.__isKeepAlive;function hf(e,t){jl(e,"a",t)}function gf(e,t){jl(e,"da",t)}function jl(e,t,r=be){const n=e.__wdc||(e.__wdc=()=>{let o=r;for(;o;){if(o.isDeactivated)return;o=o.parent}return e()});if(Un(t,n,r),r){let o=r.parent;for(;o&&o.parent;)kn(o.parent.vnode)&&mf(n,t,r,o),o=o.parent}}function mf(e,t,r,n){const o=Un(t,e,n,!0);Br(()=>{hs(n[t],o)},r)}function Un(e,t,r=be,n=!1){if(r){const o=r[e]||(r[e]=[]),s=t.__weh||(t.__weh=(...i)=>{if(r.isUnmounted)return;ir(),rr(r);const a=ke(t,r,e,i);return Wt(),ar(),a});return n?o.unshift(s):o.push(s),s}}const ct=e=>(t,r=be)=>(!Hr||e==="sp")&&Un(e,(...n)=>t(...n),r),_f=ct("bm"),Bn=ct("m"),$f=ct("bu"),yf=ct("u"),Vl=ct("bum"),Br=ct("um"),bf=ct("sp"),Ef=ct("rtg"),If=ct("rtc");function Af(e,t=be){Un("ec",e,t)}function _n(e,t){const r=De;if(r===null)return e;const n=Kn(r)||r.proxy,o=e.dirs||(e.dirs=[]);for(let s=0;s<t.length;s++){let[i,a,l,c=ie]=t[s];V(i)&&(i={mounted:i,updated:i}),i.deep&&kt(a),o.push({dir:i,instance:n,value:a,oldValue:void 0,arg:l,modifiers:c})}return e}function Ct(e,t,r,n){const o=e.dirs,s=t&&t.dirs;for(let i=0;i<o.length;i++){const a=o[i];s&&(a.oldValue=s[i].value);let l=a.dir[n];l&&(ir(),ke(l,r,8,[e.el,a,e,t]),ar())}}const xl="components";function wf(e,t){return Sf(xl,e,!0,t)||e}const Nf=Symbol();function Sf(e,t,r=!0,n=!1){const o=De||be;if(o){const s=o.type;if(e===xl){const a=o0(s,!1);if(a&&(a===t||a===tt(t)||a===Fn(tt(t))))return s}const i=ui(o[e]||s[e],t)||ui(o.appContext[e],t);return!i&&n?s:i}}function ui(e,t){return e&&(e[t]||e[tt(t)]||e[Fn(tt(t))])}function Je(e,t,r,n){let o;const s=r&&r[n];if(U(e)||Ee(e)){o=new Array(e.length);for(let i=0,a=e.length;i<a;i++)o[i]=t(e[i],i,void 0,s&&s[i])}else if(typeof e=="number"){o=new Array(e);for(let i=0;i<e;i++)o[i]=t(i+1,i,void 0,s&&s[i])}else if(le(e))if(e[Symbol.iterator])o=Array.from(e,(i,a)=>t(i,a,void 0,s&&s[a]));else{const i=Object.keys(e);o=new Array(i.length);for(let a=0,l=i.length;a<l;a++){const c=i[a];o[a]=t(e[c],c,a,s&&s[a])}}else o=[];return r&&(r[n]=o),o}const ko=e=>e?nc(e)?Kn(e)||e.proxy:ko(e.parent):null,An=we(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>ko(e.parent),$root:e=>ko(e.root),$emit:e=>e.emit,$options:e=>Os(e),$forceUpdate:e=>e.f||(e.f=()=>Ns(e.update)),$nextTick:e=>e.n||(e.n=ws.bind(e.proxy)),$watch:e=>df.bind(e)}),Of={get({_:e},t){const{ctx:r,setupState:n,data:o,props:s,accessCache:i,type:a,appContext:l}=e;let c;if(t[0]!=="$"){const p=i[t];if(p!==void 0)switch(p){case 1:return n[t];case 2:return o[t];case 4:return r[t];case 3:return s[t]}else{if(n!==ie&&z(n,t))return i[t]=1,n[t];if(o!==ie&&z(o,t))return i[t]=2,o[t];if((c=e.propsOptions[0])&&z(c,t))return i[t]=3,s[t];if(r!==ie&&z(r,t))return i[t]=4,r[t];Uo&&(i[t]=0)}}const u=An[t];let f,v;if(u)return t==="$attrs"&&Le(e,"get",t),u(e);if((f=a.__cssModules)&&(f=f[t]))return f;if(r!==ie&&z(r,t))return i[t]=4,r[t];if(v=l.config.globalProperties,z(v,t))return v[t]},set({_:e},t,r){const{data:n,setupState:o,ctx:s}=e;return o!==ie&&z(o,t)?(o[t]=r,!0):n!==ie&&z(n,t)?(n[t]=r,!0):z(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(s[t]=r,!0)},has({_:{data:e,setupState:t,accessCache:r,ctx:n,appContext:o,propsOptions:s}},i){let a;return!!r[i]||e!==ie&&z(e,i)||t!==ie&&z(t,i)||(a=s[0])&&z(a,i)||z(n,i)||z(An,i)||z(o.config.globalProperties,i)},defineProperty(e,t,r){return r.get!=null?e._.accessCache[t]=0:z(r,"value")&&this.set(e,t,r.value,null),Reflect.defineProperty(e,t,r)}};let Uo=!0;function Cf(e){const t=Os(e),r=e.proxy,n=e.ctx;Uo=!1,t.beforeCreate&&fi(t.beforeCreate,e,"bc");const{data:o,computed:s,methods:i,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:v,beforeUpdate:p,updated:m,activated:A,deactivated:E,beforeDestroy:$,beforeUnmount:H,destroyed:B,unmounted:W,render:j,renderTracked:te,renderTriggered:G,errorCaptured:O,serverPrefetch:q,expose:Q,inheritAttrs:fe,components:F,directives:se,filters:de}=t;if(c&&Pf(c,n,null,e.appContext.config.unwrapInjectedRef),i)for(const ce in i){const ne=i[ce];V(ne)&&(n[ce]=ne.bind(r))}if(o){const ce=o.call(r,r);le(ce)&&(e.data=Kt(ce))}if(Uo=!0,s)for(const ce in s){const ne=s[ce],Ue=V(ne)?ne.bind(r,r):V(ne.get)?ne.get.bind(r,r):je,Ot=!V(ne)&&V(ne.set)?ne.set.bind(r):je,Be=he({get:Ue,set:Ot});Object.defineProperty(n,ce,{enumerable:!0,configurable:!0,get:()=>Be.value,set:Pe=>Be.value=Pe})}if(a)for(const ce in a)Xl(a[ce],n,r,ce);if(l){const ce=V(l)?l.call(r):l;Reflect.ownKeys(ce).forEach(ne=>{gn(ne,ce[ne])})}u&&fi(u,e,"c");function ve(ce,ne){U(ne)?ne.forEach(Ue=>ce(Ue.bind(r))):ne&&ce(ne.bind(r))}if(ve(_f,f),ve(Bn,v),ve($f,p),ve(yf,m),ve(hf,A),ve(gf,E),ve(Af,O),ve(If,te),ve(Ef,G),ve(Vl,H),ve(Br,W),ve(bf,q),U(Q))if(Q.length){const ce=e.exposed||(e.exposed={});Q.forEach(ne=>{Object.defineProperty(ce,ne,{get:()=>r[ne],set:Ue=>r[ne]=Ue})})}else e.exposed||(e.exposed={});j&&e.render===je&&(e.render=j),fe!=null&&(e.inheritAttrs=fe),F&&(e.components=F),se&&(e.directives=se)}function Pf(e,t,r=je,n=!1){U(e)&&(e=Bo(e));for(const o in e){const s=e[o];let i;le(s)?"default"in s?i=et(s.from||o,s.default,!0):i=et(s.from||o):i=et(s),me(i)&&n?Object.defineProperty(t,o,{enumerable:!0,configurable:!0,get:()=>i.value,set:a=>i.value=a}):t[o]=i}}function fi(e,t,r){ke(U(e)?e.map(n=>n.bind(t.proxy)):e.bind(t.proxy),t,r)}function Xl(e,t,r,n){const o=n.includes(".")?Bl(r,n):()=>r[n];if(Ee(e)){const s=t[e];V(s)&&Jt(o,s)}else if(V(e))Jt(o,e.bind(r));else if(le(e))if(U(e))e.forEach(s=>Xl(s,t,r,n));else{const s=V(e.handler)?e.handler.bind(r):t[e.handler];V(s)&&Jt(o,s,e)}}function Os(e){const t=e.type,{mixins:r,extends:n}=t,{mixins:o,optionsCache:s,config:{optionMergeStrategies:i}}=e.appContext,a=s.get(t);let l;return a?l=a:!o.length&&!r&&!n?l=t:(l={},o.length&&o.forEach(c=>wn(l,c,i,!0)),wn(l,t,i)),le(t)&&s.set(t,l),l}function wn(e,t,r,n=!1){const{mixins:o,extends:s}=t;s&&wn(e,s,r,!0),o&&o.forEach(i=>wn(e,i,r,!0));for(const i in t)if(!(n&&i==="expose")){const a=Tf[i]||r&&r[i];e[i]=a?a(e[i],t[i]):t[i]}return e}const Tf={data:di,props:Ft,emits:Ft,methods:Ft,computed:Ft,beforeCreate:Oe,created:Oe,beforeMount:Oe,mounted:Oe,beforeUpdate:Oe,updated:Oe,beforeDestroy:Oe,beforeUnmount:Oe,destroyed:Oe,unmounted:Oe,activated:Oe,deactivated:Oe,errorCaptured:Oe,serverPrefetch:Oe,components:Ft,directives:Ft,watch:Ff,provide:di,inject:Rf};function di(e,t){return t?e?function(){return we(V(e)?e.call(this,this):e,V(t)?t.call(this,this):t)}:t:e}function Rf(e,t){return Ft(Bo(e),Bo(t))}function Bo(e){if(U(e)){const t={};for(let r=0;r<e.length;r++)t[e[r]]=e[r];return t}return e}function Oe(e,t){return e?[...new Set([].concat(e,t))]:t}function Ft(e,t){return e?we(we(Object.create(null),e),t):t}function Ff(e,t){if(!e)return t;if(!t)return e;const r=we(Object.create(null),e);for(const n in t)r[n]=Oe(e[n],t[n]);return r}function Lf(e,t,r,n=!1){const o={},s={};yn(s,Wn,1),e.propsDefaults=Object.create(null),zl(e,t,o,s);for(const i in e.propsOptions[0])i in o||(o[i]=void 0);r?e.props=n?o:ju(o):e.type.props?e.props=o:e.props=s,e.attrs=s}function Hf(e,t,r,n){const{props:o,attrs:s,vnode:{patchFlag:i}}=e,a=ee(o),[l]=e.propsOptions;let c=!1;if((n||i>0)&&!(i&16)){if(i&8){const u=e.vnode.dynamicProps;for(let f=0;f<u.length;f++){let v=u[f];if(Mn(e.emitsOptions,v))continue;const p=t[v];if(l)if(z(s,v))p!==s[v]&&(s[v]=p,c=!0);else{const m=tt(v);o[m]=Wo(l,a,m,p,e,!1)}else p!==s[v]&&(s[v]=p,c=!0)}}}else{zl(e,t,o,s)&&(c=!0);let u;for(const f in a)(!t||!z(t,f)&&((u=sr(f))===f||!z(t,u)))&&(l?r&&(r[f]!==void 0||r[u]!==void 0)&&(o[f]=Wo(l,a,f,void 0,e,!0)):delete o[f]);if(s!==a)for(const f in s)(!t||!z(t,f)&&!0)&&(delete s[f],c=!0)}c&&lt(e,"set","$attrs")}function zl(e,t,r,n){const[o,s]=e.propsOptions;let i=!1,a;if(t)for(let l in t){if(pn(l))continue;const c=t[l];let u;o&&z(o,u=tt(l))?!s||!s.includes(u)?r[u]=c:(a||(a={}))[u]=c:Mn(e.emitsOptions,l)||(!(l in n)||c!==n[l])&&(n[l]=c,i=!0)}if(s){const l=ee(r),c=a||ie;for(let u=0;u<s.length;u++){const f=s[u];r[f]=Wo(o,l,f,c[f],e,!z(c,f))}}return i}function Wo(e,t,r,n,o,s){const i=e[r];if(i!=null){const a=z(i,"default");if(a&&n===void 0){const l=i.default;if(i.type!==Function&&V(l)){const{propsDefaults:c}=o;r in c?n=c[r]:(rr(o),n=c[r]=l.call(null,t),Wt())}else n=l}i[0]&&(s&&!a?n=!1:i[1]&&(n===""||n===sr(r))&&(n=!0))}return n}function ql(e,t,r=!1){const n=t.propsCache,o=n.get(e);if(o)return o;const s=e.props,i={},a=[];let l=!1;if(!V(e)){const u=f=>{l=!0;const[v,p]=ql(f,t,!0);we(i,v),p&&a.push(...p)};!r&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!s&&!l)return le(e)&&n.set(e,Qt),Qt;if(U(s))for(let u=0;u<s.length;u++){const f=tt(s[u]);vi(f)&&(i[f]=ie)}else if(s)for(const u in s){const f=tt(u);if(vi(f)){const v=s[u],p=i[f]=U(v)||V(v)?{type:v}:v;if(p){const m=gi(Boolean,p.type),A=gi(String,p.type);p[0]=m>-1,p[1]=A<0||m<A,(m>-1||z(p,"default"))&&a.push(f)}}}const c=[i,a];return le(e)&&n.set(e,c),c}function vi(e){return e[0]!=="$"}function pi(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function hi(e,t){return pi(e)===pi(t)}function gi(e,t){return U(t)?t.findIndex(r=>hi(r,e)):V(t)&&hi(t,e)?0:-1}const Ql=e=>e[0]==="_"||e==="$stable",Cs=e=>U(e)?e.map(Ye):[Ye(e)],Mf=(e,t,r)=>{if(t._n)return t;const n=Ss((...o)=>Cs(t(...o)),r);return n._c=!1,n},Yl=(e,t,r)=>{const n=e._ctx;for(const o in e){if(Ql(o))continue;const s=e[o];if(V(s))t[o]=Mf(o,s,n);else if(s!=null){const i=Cs(s);t[o]=()=>i}}},Zl=(e,t)=>{const r=Cs(t);e.slots.default=()=>r},Df=(e,t)=>{if(e.vnode.shapeFlag&32){const r=t._;r?(e.slots=ee(t),yn(t,"_",r)):Yl(t,e.slots={})}else e.slots={},t&&Zl(e,t);yn(e.slots,Wn,1)},kf=(e,t,r)=>{const{vnode:n,slots:o}=e;let s=!0,i=ie;if(n.shapeFlag&32){const a=t._;a?r&&a===1?s=!1:(we(o,t),!r&&a===1&&delete o._):(s=!t.$stable,Yl(t,o)),i=t}else t&&(Zl(e,t),i={default:1});if(s)for(const a in o)!Ql(a)&&!(a in i)&&delete o[a]};function Jl(){return{app:null,config:{isNativeTag:fu,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Uf=0;function Bf(e,t){return function(n,o=null){V(n)||(n=Object.assign({},n)),o!=null&&!le(o)&&(o=null);const s=Jl(),i=new Set;let a=!1;const l=s.app={_uid:Uf++,_component:n,_props:o,_container:null,_context:s,_instance:null,version:i0,get config(){return s.config},set config(c){},use(c,...u){return i.has(c)||(c&&V(c.install)?(i.add(c),c.install(l,...u)):V(c)&&(i.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,f){if(!a){const v=ye(n,o);return v.appContext=s,u&&t?t(v,c):e(v,c,f),a=!0,l._container=c,c.__vue_app__=l,Kn(v.component)||v.component.proxy}},unmount(){a&&(e(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l}};return l}}function Ko(e,t,r,n,o=!1){if(U(e)){e.forEach((v,p)=>Ko(v,t&&(U(t)?t[p]:t),r,n,o));return}if(mn(n)&&!o)return;const s=n.shapeFlag&4?Kn(n.component)||n.component.proxy:n.el,i=o?null:s,{i:a,r:l}=e,c=t&&t.r,u=a.refs===ie?a.refs={}:a.refs,f=a.setupState;if(c!=null&&c!==l&&(Ee(c)?(u[c]=null,z(f,c)&&(f[c]=null)):me(c)&&(c.value=null)),V(l))It(l,a,12,[i,u]);else{const v=Ee(l),p=me(l);if(v||p){const m=()=>{if(e.f){const A=v?z(f,l)?f[l]:u[l]:l.value;o?U(A)&&hs(A,s):U(A)?A.includes(s)||A.push(s):v?(u[l]=[s],z(f,l)&&(f[l]=u[l])):(l.value=[s],e.k&&(u[e.k]=l.value))}else v?(u[l]=i,z(f,l)&&(f[l]=i)):p&&(l.value=i,e.k&&(u[e.k]=i))};i?(m.id=-1,Te(m,r)):m()}}}const Te=ff;function Wf(e){return Kf(e)}function Kf(e,t){const r=mu();r.__VUE__=!0;const{insert:n,remove:o,patchProp:s,createElement:i,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:v,setScopeId:p=je,insertStaticContent:m}=e,A=(d,h,g,_=null,b=null,N=null,P=!1,w=null,S=!!h.dynamicChildren)=>{if(d===h)return;d&&!Ht(d,h)&&(_=C(d),Pe(d,b,N,!0),d=null),h.patchFlag===-2&&(S=!1,h.dynamicChildren=null);const{type:I,ref:D,shapeFlag:L}=h;switch(I){case Ps:E(d,h,g,_);break;case Ve:$(d,h,g,_);break;case eo:d==null&&H(h,g,_,P);break;case ae:F(d,h,g,_,b,N,P,w,S);break;default:L&1?j(d,h,g,_,b,N,P,w,S):L&6?se(d,h,g,_,b,N,P,w,S):(L&64||L&128)&&I.process(d,h,g,_,b,N,P,w,S,Y)}D!=null&&b&&Ko(D,d&&d.ref,N,h||d,!h)},E=(d,h,g,_)=>{if(d==null)n(h.el=a(h.children),g,_);else{const b=h.el=d.el;h.children!==d.children&&c(b,h.children)}},$=(d,h,g,_)=>{d==null?n(h.el=l(h.children||""),g,_):h.el=d.el},H=(d,h,g,_)=>{[d.el,d.anchor]=m(d.children,h,g,_,d.el,d.anchor)},B=({el:d,anchor:h},g,_)=>{let b;for(;d&&d!==h;)b=v(d),n(d,g,_),d=b;n(h,g,_)},W=({el:d,anchor:h})=>{let g;for(;d&&d!==h;)g=v(d),o(d),d=g;o(h)},j=(d,h,g,_,b,N,P,w,S)=>{P=P||h.type==="svg",d==null?te(h,g,_,b,N,P,w,S):q(d,h,b,N,P,w,S)},te=(d,h,g,_,b,N,P,w)=>{let S,I;const{type:D,props:L,shapeFlag:k,transition:K,dirs:X}=d;if(S=d.el=i(d.type,N,L&&L.is,L),k&8?u(S,d.children):k&16&&O(d.children,S,null,_,b,N&&D!=="foreignObject",P,w),X&&Ct(d,null,_,"created"),L){for(const oe in L)oe!=="value"&&!pn(oe)&&s(S,oe,null,L[oe],N,d.children,_,b,T);"value"in L&&s(S,"value",null,L.value),(I=L.onVnodeBeforeMount)&&qe(I,_,d)}G(S,d,d.scopeId,P,_),X&&Ct(d,null,_,"beforeMount");const ue=(!b||b&&!b.pendingBranch)&&K&&!K.persisted;ue&&K.beforeEnter(S),n(S,h,g),((I=L&&L.onVnodeMounted)||ue||X)&&Te(()=>{I&&qe(I,_,d),ue&&K.enter(S),X&&Ct(d,null,_,"mounted")},b)},G=(d,h,g,_,b)=>{if(g&&p(d,g),_)for(let N=0;N<_.length;N++)p(d,_[N]);if(b){let N=b.subTree;if(h===N){const P=b.vnode;G(d,P,P.scopeId,P.slotScopeIds,b.parent)}}},O=(d,h,g,_,b,N,P,w,S=0)=>{for(let I=S;I<d.length;I++){const D=d[I]=w?mt(d[I]):Ye(d[I]);A(null,D,h,g,_,b,N,P,w)}},q=(d,h,g,_,b,N,P)=>{const w=h.el=d.el;let{patchFlag:S,dynamicChildren:I,dirs:D}=h;S|=d.patchFlag&16;const L=d.props||ie,k=h.props||ie;let K;g&&Pt(g,!1),(K=k.onVnodeBeforeUpdate)&&qe(K,g,h,d),D&&Ct(h,d,g,"beforeUpdate"),g&&Pt(g,!0);const X=b&&h.type!=="foreignObject";if(I?Q(d.dynamicChildren,I,w,g,_,X,N):P||ne(d,h,w,null,g,_,X,N,!1),S>0){if(S&16)fe(w,h,L,k,g,_,b);else if(S&2&&L.class!==k.class&&s(w,"class",null,k.class,b),S&4&&s(w,"style",L.style,k.style,b),S&8){const ue=h.dynamicProps;for(let oe=0;oe<ue.length;oe++){const _e=ue[oe],We=L[_e],Vt=k[_e];(Vt!==We||_e==="value")&&s(w,_e,We,Vt,b,d.children,g,_,T)}}S&1&&d.children!==h.children&&u(w,h.children)}else!P&&I==null&&fe(w,h,L,k,g,_,b);((K=k.onVnodeUpdated)||D)&&Te(()=>{K&&qe(K,g,h,d),D&&Ct(h,d,g,"updated")},_)},Q=(d,h,g,_,b,N,P)=>{for(let w=0;w<h.length;w++){const S=d[w],I=h[w],D=S.el&&(S.type===ae||!Ht(S,I)||S.shapeFlag&70)?f(S.el):g;A(S,I,D,null,_,b,N,P,!0)}},fe=(d,h,g,_,b,N,P)=>{if(g!==_){if(g!==ie)for(const w in g)!pn(w)&&!(w in _)&&s(d,w,g[w],null,P,h.children,b,N,T);for(const w in _){if(pn(w))continue;const S=_[w],I=g[w];S!==I&&w!=="value"&&s(d,w,I,S,P,h.children,b,N,T)}"value"in _&&s(d,"value",g.value,_.value)}},F=(d,h,g,_,b,N,P,w,S)=>{const I=h.el=d?d.el:a(""),D=h.anchor=d?d.anchor:a("");let{patchFlag:L,dynamicChildren:k,slotScopeIds:K}=h;K&&(w=w?w.concat(K):K),d==null?(n(I,g,_),n(D,g,_),O(h.children,g,D,b,N,P,w,S)):L>0&&L&64&&k&&d.dynamicChildren?(Q(d.dynamicChildren,k,g,b,N,P,w),(h.key!=null||b&&h===b.subTree)&&ec(d,h,!0)):ne(d,h,g,D,b,N,P,w,S)},se=(d,h,g,_,b,N,P,w,S)=>{h.slotScopeIds=w,d==null?h.shapeFlag&512?b.ctx.activate(h,g,_,P,S):de(h,g,_,b,N,P,S):ge(d,h,S)},de=(d,h,g,_,b,N,P)=>{const w=d.component=Jf(d,_,b);if(kn(d)&&(w.ctx.renderer=Y),e0(w),w.asyncDep){if(b&&b.registerDep(w,ve),!d.el){const S=w.subTree=ye(Ve);$(null,S,h,g)}return}ve(w,d,h,g,b,N,P)},ge=(d,h,g)=>{const _=h.component=d.component;if(lf(d,h,g))if(_.asyncDep&&!_.asyncResolved){ce(_,h,g);return}else _.next=h,tf(_.update),_.update();else h.el=d.el,_.vnode=h},ve=(d,h,g,_,b,N,P)=>{const w=()=>{if(d.isMounted){let{next:D,bu:L,u:k,parent:K,vnode:X}=d,ue=D,oe;Pt(d,!1),D?(D.el=X.el,ce(d,D,P)):D=X,L&&hn(L),(oe=D.props&&D.props.onVnodeBeforeUpdate)&&qe(oe,K,D,X),Pt(d,!0);const _e=Zn(d),We=d.subTree;d.subTree=_e,A(We,_e,f(We.el),C(We),d,b,N),D.el=_e.el,ue===null&&cf(d,_e.el),k&&Te(k,b),(oe=D.props&&D.props.onVnodeUpdated)&&Te(()=>qe(oe,K,D,X),b)}else{let D;const{el:L,props:k}=h,{bm:K,m:X,parent:ue}=d,oe=mn(h);if(Pt(d,!1),K&&hn(K),!oe&&(D=k&&k.onVnodeBeforeMount)&&qe(D,ue,h),Pt(d,!0),L&&x){const _e=()=>{d.subTree=Zn(d),x(L,d.subTree,d,b,null)};oe?h.type.__asyncLoader().then(()=>!d.isUnmounted&&_e()):_e()}else{const _e=d.subTree=Zn(d);A(null,_e,g,_,d,b,N),h.el=_e.el}if(X&&Te(X,b),!oe&&(D=k&&k.onVnodeMounted)){const _e=h;Te(()=>qe(D,ue,_e),b)}(h.shapeFlag&256||ue&&mn(ue.vnode)&&ue.vnode.shapeFlag&256)&&d.a&&Te(d.a,b),d.isMounted=!0,h=g=_=null}},S=d.effect=new _s(w,()=>Ns(I),d.scope),I=d.update=()=>S.run();I.id=d.uid,Pt(d,!0),I()},ce=(d,h,g)=>{h.component=d;const _=d.vnode.props;d.vnode=h,d.next=null,Hf(d,h.props,_,g),kf(d,h.children,g),ir(),ii(),ar()},ne=(d,h,g,_,b,N,P,w,S=!1)=>{const I=d&&d.children,D=d?d.shapeFlag:0,L=h.children,{patchFlag:k,shapeFlag:K}=h;if(k>0){if(k&128){Ot(I,L,g,_,b,N,P,w,S);return}else if(k&256){Ue(I,L,g,_,b,N,P,w,S);return}}K&8?(D&16&&T(I,b,N),L!==I&&u(g,L)):D&16?K&16?Ot(I,L,g,_,b,N,P,w,S):T(I,b,N,!0):(D&8&&u(g,""),K&16&&O(L,g,_,b,N,P,w,S))},Ue=(d,h,g,_,b,N,P,w,S)=>{d=d||Qt,h=h||Qt;const I=d.length,D=h.length,L=Math.min(I,D);let k;for(k=0;k<L;k++){const K=h[k]=S?mt(h[k]):Ye(h[k]);A(d[k],K,g,null,b,N,P,w,S)}I>D?T(d,b,N,!0,!1,L):O(h,g,_,b,N,P,w,S,L)},Ot=(d,h,g,_,b,N,P,w,S)=>{let I=0;const D=h.length;let L=d.length-1,k=D-1;for(;I<=L&&I<=k;){const K=d[I],X=h[I]=S?mt(h[I]):Ye(h[I]);if(Ht(K,X))A(K,X,g,null,b,N,P,w,S);else break;I++}for(;I<=L&&I<=k;){const K=d[L],X=h[k]=S?mt(h[k]):Ye(h[k]);if(Ht(K,X))A(K,X,g,null,b,N,P,w,S);else break;L--,k--}if(I>L){if(I<=k){const K=k+1,X=K<D?h[K].el:_;for(;I<=k;)A(null,h[I]=S?mt(h[I]):Ye(h[I]),g,X,b,N,P,w,S),I++}}else if(I>k)for(;I<=L;)Pe(d[I],b,N,!0),I++;else{const K=I,X=I,ue=new Map;for(I=X;I<=k;I++){const Re=h[I]=S?mt(h[I]):Ye(h[I]);Re.key!=null&&ue.set(Re.key,I)}let oe,_e=0;const We=k-X+1;let Vt=!1,zs=0;const pr=new Array(We);for(I=0;I<We;I++)pr[I]=0;for(I=K;I<=L;I++){const Re=d[I];if(_e>=We){Pe(Re,b,N,!0);continue}let ze;if(Re.key!=null)ze=ue.get(Re.key);else for(oe=X;oe<=k;oe++)if(pr[oe-X]===0&&Ht(Re,h[oe])){ze=oe;break}ze===void 0?Pe(Re,b,N,!0):(pr[ze-X]=I+1,ze>=zs?zs=ze:Vt=!0,A(Re,h[ze],g,null,b,N,P,w,S),_e++)}const qs=Vt?Gf(pr):Qt;for(oe=qs.length-1,I=We-1;I>=0;I--){const Re=X+I,ze=h[Re],Qs=Re+1<D?h[Re+1].el:_;pr[I]===0?A(null,ze,g,Qs,b,N,P,w,S):Vt&&(oe<0||I!==qs[oe]?Be(ze,g,Qs,2):oe--)}}},Be=(d,h,g,_,b=null)=>{const{el:N,type:P,transition:w,children:S,shapeFlag:I}=d;if(I&6){Be(d.component.subTree,h,g,_);return}if(I&128){d.suspense.move(h,g,_);return}if(I&64){P.move(d,h,g,Y);return}if(P===ae){n(N,h,g);for(let L=0;L<S.length;L++)Be(S[L],h,g,_);n(d.anchor,h,g);return}if(P===eo){B(d,h,g);return}if(_!==2&&I&1&&w)if(_===0)w.beforeEnter(N),n(N,h,g),Te(()=>w.enter(N),b);else{const{leave:L,delayLeave:k,afterLeave:K}=w,X=()=>n(N,h,g),ue=()=>{L(N,()=>{X(),K&&K()})};k?k(N,X,ue):ue()}else n(N,h,g)},Pe=(d,h,g,_=!1,b=!1)=>{const{type:N,props:P,ref:w,children:S,dynamicChildren:I,shapeFlag:D,patchFlag:L,dirs:k}=d;if(w!=null&&Ko(w,null,g,d,!0),D&256){h.ctx.deactivate(d);return}const K=D&1&&k,X=!mn(d);let ue;if(X&&(ue=P&&P.onVnodeBeforeUnmount)&&qe(ue,h,d),D&6)y(d.component,g,_);else{if(D&128){d.suspense.unmount(g,_);return}K&&Ct(d,null,h,"beforeUnmount"),D&64?d.type.remove(d,h,g,b,Y,_):I&&(N!==ae||L>0&&L&64)?T(I,h,g,!1,!0):(N===ae&&L&384||!b&&D&16)&&T(S,h,g),_&&jt(d)}(X&&(ue=P&&P.onVnodeUnmounted)||K)&&Te(()=>{ue&&qe(ue,h,d),K&&Ct(d,null,h,"unmounted")},g)},jt=d=>{const{type:h,el:g,anchor:_,transition:b}=d;if(h===ae){jr(g,_);return}if(h===eo){W(d);return}const N=()=>{o(g),b&&!b.persisted&&b.afterLeave&&b.afterLeave()};if(d.shapeFlag&1&&b&&!b.persisted){const{leave:P,delayLeave:w}=b,S=()=>P(g,N);w?w(d.el,N,S):S()}else N()},jr=(d,h)=>{let g;for(;d!==h;)g=v(d),o(d),d=g;o(h)},y=(d,h,g)=>{const{bum:_,scope:b,update:N,subTree:P,um:w}=d;_&&hn(_),b.stop(),N&&(N.active=!1,Pe(P,d,h,g)),w&&Te(w,h),Te(()=>{d.isUnmounted=!0},h),h&&h.pendingBranch&&!h.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===h.pendingId&&(h.deps--,h.deps===0&&h.resolve())},T=(d,h,g,_=!1,b=!1,N=0)=>{for(let P=N;P<d.length;P++)Pe(d[P],h,g,_,b)},C=d=>d.shapeFlag&6?C(d.component.subTree):d.shapeFlag&128?d.suspense.next():v(d.anchor||d.el),M=(d,h,g)=>{d==null?h._vnode&&Pe(h._vnode,null,null,!0):A(h._vnode||null,d,h,null,null,null,g),ii(),Ml(),h._vnode=d},Y={p:A,um:Pe,m:Be,r:jt,mt:de,mc:O,pc:ne,pbc:Q,n:C,o:e};let pe,x;return t&&([pe,x]=t(Y)),{render:M,hydrate:pe,createApp:Bf(M,pe)}}function Pt({effect:e,update:t},r){e.allowRecurse=t.allowRecurse=r}function ec(e,t,r=!1){const n=e.children,o=t.children;if(U(n)&&U(o))for(let s=0;s<n.length;s++){const i=n[s];let a=o[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=o[s]=mt(o[s]),a.el=i.el),r||ec(i,a))}}function Gf(e){const t=e.slice(),r=[0];let n,o,s,i,a;const l=e.length;for(n=0;n<l;n++){const c=e[n];if(c!==0){if(o=r[r.length-1],e[o]<c){t[n]=o,r.push(n);continue}for(s=0,i=r.length-1;s<i;)a=s+i>>1,e[r[a]]<c?s=a+1:i=a;c<e[r[s]]&&(s>0&&(t[n]=r[s-1]),r[s]=n)}}for(s=r.length,i=r[s-1];s-- >0;)r[s]=i,i=t[i];return r}const jf=e=>e.__isTeleport,ae=Symbol(void 0),Ps=Symbol(void 0),Ve=Symbol(void 0),eo=Symbol(void 0),wr=[];let Ge=null;function Z(e=!1){wr.push(Ge=e?null:[])}function Vf(){wr.pop(),Ge=wr[wr.length-1]||null}let Lr=1;function mi(e){Lr+=e}function tc(e){return e.dynamicChildren=Lr>0?Ge||Qt:null,Vf(),Lr>0&&Ge&&Ge.push(e),e}function J(e,t,r,n,o,s){return tc(R(e,t,r,n,o,s,!0))}function xf(e,t,r,n,o){return tc(ye(e,t,r,n,o,!0))}function Go(e){return e?e.__v_isVNode===!0:!1}function Ht(e,t){return e.type===t.type&&e.key===t.key}const Wn="__vInternal",rc=({key:e})=>e!=null?e:null,$n=({ref:e,ref_key:t,ref_for:r})=>e!=null?Ee(e)||me(e)||V(e)?{i:De,r:e,k:t,f:!!r}:e:null;function R(e,t=null,r=null,n=0,o=null,s=e===ae?0:1,i=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&rc(t),ref:t&&$n(t),scopeId:Dn,slotScopeIds:null,children:r,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:n,dynamicProps:o,dynamicChildren:null,appContext:null};return a?(Ts(l,r),s&128&&e.normalize(l)):r&&(l.shapeFlag|=Ee(r)?8:16),Lr>0&&!i&&Ge&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Ge.push(l),l}const ye=Xf;function Xf(e,t=null,r=null,n=0,o=null,s=!1){if((!e||e===Nf)&&(e=Ve),Go(e)){const a=Nt(e,t,!0);return r&&Ts(a,r),Lr>0&&!s&&Ge&&(a.shapeFlag&6?Ge[Ge.indexOf(e)]=a:Ge.push(a)),a.patchFlag|=-2,a}if(s0(e)&&(e=e.__vccOpts),t){t=zf(t);let{class:a,style:l}=t;a&&!Ee(a)&&(t.class=yt(a)),le(l)&&(Ol(l)&&!U(l)&&(l=we({},l)),t.style=On(l))}const i=Ee(e)?1:uf(e)?128:jf(e)?64:le(e)?4:V(e)?2:0;return R(e,t,r,n,o,i,s,!0)}function zf(e){return e?Ol(e)||Wn in e?we({},e):e:null}function Nt(e,t,r=!1){const{props:n,ref:o,patchFlag:s,children:i}=e,a=t?Qf(n||{},t):n;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:a,key:a&&rc(a),ref:t&&t.ref?r&&o?U(o)?o.concat($n(t)):[o,$n(t)]:$n(t):o,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:i,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==ae?s===-1?16:s|16:s,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Nt(e.ssContent),ssFallback:e.ssFallback&&Nt(e.ssFallback),el:e.el,anchor:e.anchor}}function At(e=" ",t=0){return ye(Ps,null,e,t)}function qf(e="",t=!1){return t?(Z(),xf(Ve,null,e)):ye(Ve,null,e)}function Ye(e){return e==null||typeof e=="boolean"?ye(Ve):U(e)?ye(ae,null,e.slice()):typeof e=="object"?mt(e):ye(Ps,null,String(e))}function mt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Nt(e)}function Ts(e,t){let r=0;const{shapeFlag:n}=e;if(t==null)t=null;else if(U(t))r=16;else if(typeof t=="object")if(n&65){const o=t.default;o&&(o._c&&(o._d=!1),Ts(e,o()),o._c&&(o._d=!0));return}else{r=32;const o=t._;!o&&!(Wn in t)?t._ctx=De:o===3&&De&&(De.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else V(t)?(t={default:t,_ctx:De},r=32):(t=String(t),n&64?(r=16,t=[At(t)]):r=8);e.children=t,e.shapeFlag|=r}function Qf(...e){const t={};for(let r=0;r<e.length;r++){const n=e[r];for(const o in n)if(o==="class")t.class!==n.class&&(t.class=yt([t.class,n.class]));else if(o==="style")t.style=On([t.style,n.style]);else if(Pn(o)){const s=t[o],i=n[o];i&&s!==i&&!(U(s)&&s.includes(i))&&(t[o]=s?[].concat(s,i):i)}else o!==""&&(t[o]=n[o])}return t}function qe(e,t,r,n=null){ke(e,t,7,[r,n])}const Yf=Jl();let Zf=0;function Jf(e,t,r){const n=e.type,o=(t?t.appContext:e.appContext)||Yf,s={uid:Zf++,vnode:e,type:n,parent:t,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,scope:new hl(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(o.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ql(n,o),emitsOptions:kl(n,o),emit:null,emitted:null,propsDefaults:ie,inheritAttrs:n.inheritAttrs,ctx:ie,data:ie,props:ie,attrs:ie,slots:ie,refs:ie,setupState:ie,setupContext:null,suspense:r,suspenseId:r?r.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=t?t.root:s,s.emit=of.bind(null,s),e.ce&&e.ce(s),s}let be=null;const Rs=()=>be||De,rr=e=>{be=e,e.scope.on()},Wt=()=>{be&&be.scope.off(),be=null};function nc(e){return e.vnode.shapeFlag&4}let Hr=!1;function e0(e,t=!1){Hr=t;const{props:r,children:n}=e.vnode,o=nc(e);Lf(e,r,o,t),Df(e,n);const s=o?t0(e,t):void 0;return Hr=!1,s}function t0(e,t){const r=e.type;e.accessCache=Object.create(null),e.proxy=tr(new Proxy(e.ctx,Of));const{setup:n}=r;if(n){const o=e.setupContext=n.length>1?n0(e):null;rr(e),ir();const s=It(n,e,0,[e.props,o]);if(ar(),Wt(),dl(s)){if(s.then(Wt,Wt),t)return s.then(i=>{_i(e,i,t)}).catch(i=>{Hn(i,e,0)});e.asyncDep=s}else _i(e,s,t)}else oc(e,t)}function _i(e,t,r){V(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:le(t)&&(e.setupState=Rl(t)),oc(e,r)}let $i;function oc(e,t,r){const n=e.type;if(!e.render){if(!t&&$i&&!n.render){const o=n.template||Os(e).template;if(o){const{isCustomElement:s,compilerOptions:i}=e.appContext.config,{delimiters:a,compilerOptions:l}=n,c=we(we({isCustomElement:s,delimiters:a},i),l);n.render=$i(o,c)}}e.render=n.render||je}rr(e),ir(),Cf(e),ar(),Wt()}function r0(e){return new Proxy(e.attrs,{get(t,r){return Le(e,"get","$attrs"),t[r]}})}function n0(e){const t=n=>{e.exposed=n||{}};let r;return{get attrs(){return r||(r=r0(e))},slots:e.slots,emit:e.emit,expose:t}}function Kn(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Rl(tr(e.exposed)),{get(t,r){if(r in t)return t[r];if(r in An)return An[r](e)}}))}function o0(e,t=!0){return V(e)?e.displayName||e.name:e.name||t&&e.__name}function s0(e){return V(e)&&"__vccOpts"in e}const he=(e,t)=>Zu(e,t,Hr);function Fs(e,t,r){const n=arguments.length;return n===2?le(t)&&!U(t)?Go(t)?ye(e,null,[t]):ye(e,t):ye(e,null,t):(n>3?r=Array.prototype.slice.call(arguments,2):n===3&&Go(r)&&(r=[r]),ye(e,t,r))}const i0="3.2.41",a0="http://www.w3.org/2000/svg",Mt=typeof document<"u"?document:null,yi=Mt&&Mt.createElement("template"),l0={insert:(e,t,r)=>{t.insertBefore(e,r||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,r,n)=>{const o=t?Mt.createElementNS(a0,e):Mt.createElement(e,r?{is:r}:void 0);return e==="select"&&n&&n.multiple!=null&&o.setAttribute("multiple",n.multiple),o},createText:e=>Mt.createTextNode(e),createComment:e=>Mt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Mt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,r,n,o,s){const i=r?r.previousSibling:t.lastChild;if(o&&(o===s||o.nextSibling))for(;t.insertBefore(o.cloneNode(!0),r),!(o===s||!(o=o.nextSibling)););else{yi.innerHTML=n?`<svg>${e}</svg>`:e;const a=yi.content;if(n){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,r)}return[i?i.nextSibling:t.firstChild,r?r.previousSibling:t.lastChild]}};function c0(e,t,r){const n=e._vtc;n&&(t=(t?[t,...n]:[...n]).join(" ")),t==null?e.removeAttribute("class"):r?e.setAttribute("class",t):e.className=t}function u0(e,t,r){const n=e.style,o=Ee(r);if(r&&!o){for(const s in r)jo(n,s,r[s]);if(t&&!Ee(t))for(const s in t)r[s]==null&&jo(n,s,"")}else{const s=n.display;o?t!==r&&(n.cssText=r):t&&e.removeAttribute("style"),"_vod"in e&&(n.display=s)}}const bi=/\s*!important$/;function jo(e,t,r){if(U(r))r.forEach(n=>jo(e,t,n));else if(r==null&&(r=""),t.startsWith("--"))e.setProperty(t,r);else{const n=f0(e,t);bi.test(r)?e.setProperty(sr(n),r.replace(bi,""),"important"):e[n]=r}}const Ei=["Webkit","Moz","ms"],to={};function f0(e,t){const r=to[t];if(r)return r;let n=tt(t);if(n!=="filter"&&n in e)return to[t]=n;n=Fn(n);for(let o=0;o<Ei.length;o++){const s=Ei[o]+n;if(s in e)return to[t]=s}return t}const Ii="http://www.w3.org/1999/xlink";function d0(e,t,r,n,o){if(n&&t.startsWith("xlink:"))r==null?e.removeAttributeNS(Ii,t.slice(6,t.length)):e.setAttributeNS(Ii,t,r);else{const s=iu(t);r==null||s&&!cl(r)?e.removeAttribute(t):e.setAttribute(t,s?"":r)}}function v0(e,t,r,n,o,s,i){if(t==="innerHTML"||t==="textContent"){n&&i(n,o,s),e[t]=r==null?"":r;return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=r;const l=r==null?"":r;(e.value!==l||e.tagName==="OPTION")&&(e.value=l),r==null&&e.removeAttribute(t);return}let a=!1;if(r===""||r==null){const l=typeof e[t];l==="boolean"?r=cl(r):r==null&&l==="string"?(r="",a=!0):l==="number"&&(r=0,a=!0)}try{e[t]=r}catch{}a&&e.removeAttribute(t)}function Dt(e,t,r,n){e.addEventListener(t,r,n)}function p0(e,t,r,n){e.removeEventListener(t,r,n)}function h0(e,t,r,n,o=null){const s=e._vei||(e._vei={}),i=s[t];if(n&&i)i.value=n;else{const[a,l]=g0(t);if(n){const c=s[t]=$0(n,o);Dt(e,a,c,l)}else i&&(p0(e,a,i,l),s[t]=void 0)}}const Ai=/(?:Once|Passive|Capture)$/;function g0(e){let t;if(Ai.test(e)){t={};let n;for(;n=e.match(Ai);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):sr(e.slice(2)),t]}let ro=0;const m0=Promise.resolve(),_0=()=>ro||(m0.then(()=>ro=0),ro=Date.now());function $0(e,t){const r=n=>{if(!n._vts)n._vts=Date.now();else if(n._vts<=r.attached)return;ke(y0(n,r.value),t,5,[n])};return r.value=e,r.attached=_0(),r}function y0(e,t){if(U(t)){const r=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{r.call(e),e._stopped=!0},t.map(n=>o=>!o._stopped&&n&&n(o))}else return t}const wi=/^on[a-z]/,b0=(e,t,r,n,o=!1,s,i,a,l)=>{t==="class"?c0(e,n,o):t==="style"?u0(e,r,n):Pn(t)?ps(t)||h0(e,t,r,n,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):E0(e,t,n,o))?v0(e,t,n,s,i,a,l):(t==="true-value"?e._trueValue=n:t==="false-value"&&(e._falseValue=n),d0(e,t,n,o))};function E0(e,t,r,n){return n?!!(t==="innerHTML"||t==="textContent"||t in e&&wi.test(t)&&V(r)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||wi.test(t)&&Ee(r)?!1:t in e}const ft="transition",hr="animation",Ls=(e,{slots:t})=>Fs(Wl,I0(e),t);Ls.displayName="Transition";const sc={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Ls.props=we({},Wl.props,sc);const Tt=(e,t=[])=>{U(e)?e.forEach(r=>r(...t)):e&&e(...t)},Ni=e=>e?U(e)?e.some(t=>t.length>1):e.length>1:!1;function I0(e){const t={};for(const F in e)F in sc||(t[F]=e[F]);if(e.css===!1)return t;const{name:r="v",type:n,duration:o,enterFromClass:s=`${r}-enter-from`,enterActiveClass:i=`${r}-enter-active`,enterToClass:a=`${r}-enter-to`,appearFromClass:l=s,appearActiveClass:c=i,appearToClass:u=a,leaveFromClass:f=`${r}-leave-from`,leaveActiveClass:v=`${r}-leave-active`,leaveToClass:p=`${r}-leave-to`}=e,m=A0(o),A=m&&m[0],E=m&&m[1],{onBeforeEnter:$,onEnter:H,onEnterCancelled:B,onLeave:W,onLeaveCancelled:j,onBeforeAppear:te=$,onAppear:G=H,onAppearCancelled:O=B}=t,q=(F,se,de)=>{Rt(F,se?u:a),Rt(F,se?c:i),de&&de()},Q=(F,se)=>{F._isLeaving=!1,Rt(F,f),Rt(F,p),Rt(F,v),se&&se()},fe=F=>(se,de)=>{const ge=F?G:H,ve=()=>q(se,F,de);Tt(ge,[se,ve]),Si(()=>{Rt(se,F?l:s),dt(se,F?u:a),Ni(ge)||Oi(se,n,A,ve)})};return we(t,{onBeforeEnter(F){Tt($,[F]),dt(F,s),dt(F,i)},onBeforeAppear(F){Tt(te,[F]),dt(F,l),dt(F,c)},onEnter:fe(!1),onAppear:fe(!0),onLeave(F,se){F._isLeaving=!0;const de=()=>Q(F,se);dt(F,f),S0(),dt(F,v),Si(()=>{!F._isLeaving||(Rt(F,f),dt(F,p),Ni(W)||Oi(F,n,E,de))}),Tt(W,[F,de])},onEnterCancelled(F){q(F,!1),Tt(B,[F])},onAppearCancelled(F){q(F,!0),Tt(O,[F])},onLeaveCancelled(F){Q(F),Tt(j,[F])}})}function A0(e){if(e==null)return null;if(le(e))return[no(e.enter),no(e.leave)];{const t=no(e);return[t,t]}}function no(e){return bn(e)}function dt(e,t){t.split(/\s+/).forEach(r=>r&&e.classList.add(r)),(e._vtc||(e._vtc=new Set)).add(t)}function Rt(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.remove(n));const{_vtc:r}=e;r&&(r.delete(t),r.size||(e._vtc=void 0))}function Si(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let w0=0;function Oi(e,t,r,n){const o=e._endId=++w0,s=()=>{o===e._endId&&n()};if(r)return setTimeout(s,r);const{type:i,timeout:a,propCount:l}=N0(e,t);if(!i)return n();const c=i+"end";let u=0;const f=()=>{e.removeEventListener(c,v),s()},v=p=>{p.target===e&&++u>=l&&f()};setTimeout(()=>{u<l&&f()},a+1),e.addEventListener(c,v)}function N0(e,t){const r=window.getComputedStyle(e),n=m=>(r[m]||"").split(", "),o=n(ft+"Delay"),s=n(ft+"Duration"),i=Ci(o,s),a=n(hr+"Delay"),l=n(hr+"Duration"),c=Ci(a,l);let u=null,f=0,v=0;t===ft?i>0&&(u=ft,f=i,v=s.length):t===hr?c>0&&(u=hr,f=c,v=l.length):(f=Math.max(i,c),u=f>0?i>c?ft:hr:null,v=u?u===ft?s.length:l.length:0);const p=u===ft&&/\b(transform|all)(,|$)/.test(r[ft+"Property"]);return{type:u,timeout:f,propCount:v,hasTransform:p}}function Ci(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((r,n)=>Pi(r)+Pi(e[n])))}function Pi(e){return Number(e.slice(0,-1).replace(",","."))*1e3}function S0(){return document.body.offsetHeight}const Nn=e=>{const t=e.props["onUpdate:modelValue"]||!1;return U(t)?r=>hn(t,r):t};function O0(e){e.target.composing=!0}function Ti(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const C0={created(e,{modifiers:{lazy:t,trim:r,number:n}},o){e._assign=Nn(o);const s=n||o.props&&o.props.type==="number";Dt(e,t?"change":"input",i=>{if(i.target.composing)return;let a=e.value;r&&(a=a.trim()),s&&(a=bn(a)),e._assign(a)}),r&&Dt(e,"change",()=>{e.value=e.value.trim()}),t||(Dt(e,"compositionstart",O0),Dt(e,"compositionend",Ti),Dt(e,"change",Ti))},mounted(e,{value:t}){e.value=t==null?"":t},beforeUpdate(e,{value:t,modifiers:{lazy:r,trim:n,number:o}},s){if(e._assign=Nn(s),e.composing||document.activeElement===e&&e.type!=="range"&&(r||n&&e.value.trim()===t||(o||e.type==="number")&&bn(e.value)===t))return;const i=t==null?"":t;e.value!==i&&(e.value=i)}},oo={deep:!0,created(e,t,r){e._assign=Nn(r),Dt(e,"change",()=>{const n=e._modelValue,o=P0(e),s=e.checked,i=e._assign;if(U(n)){const a=ul(n,o),l=a!==-1;if(s&&!l)i(n.concat(o));else if(!s&&l){const c=[...n];c.splice(a,1),i(c)}}else if(Tn(n)){const a=new Set(n);s?a.add(o):a.delete(o),i(a)}else i(ic(e,s))})},mounted:Ri,beforeUpdate(e,t,r){e._assign=Nn(r),Ri(e,t,r)}};function Ri(e,{value:t,oldValue:r},n){e._modelValue=t,U(t)?e.checked=ul(t,n.props.value)>-1:Tn(t)?e.checked=t.has(n.props.value):t!==r&&(e.checked=Cn(t,ic(e,!0)))}function P0(e){return"_value"in e?e._value:e.value}function ic(e,t){const r=t?"_trueValue":"_falseValue";return r in e?e[r]:t}const T0=["ctrl","shift","alt","meta"],R0={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>T0.some(r=>e[`${r}Key`]&&!t.includes(r))},F0=(e,t)=>(r,...n)=>{for(let o=0;o<t.length;o++){const s=R0[t[o]];if(s&&s(r,t))return}return e(r,...n)},L0=we({patchProp:b0},l0);let Fi;function H0(){return Fi||(Fi=Wf(L0))}const M0=(...e)=>{const t=H0().createApp(...e),{mount:r}=t;return t.mount=n=>{const o=D0(n);if(!o)return;const s=t._component;!V(s)&&!s.render&&!s.template&&(s.template=o.innerHTML),o.innerHTML="";const i=r(o,!1,o instanceof SVGElement);return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),i},t};function D0(e){return Ee(e)?document.querySelector(e):e}var k0=!1;/*!
  * pinia v2.0.23
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */let ac;const Gn=e=>ac=e,lc=Symbol();function Vo(e){return e&&typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"&&typeof e.toJSON!="function"}var Nr;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(Nr||(Nr={}));function U0(){const e=gl(!0),t=e.run(()=>Fe({}));let r=[],n=[];const o=tr({install(s){Gn(o),o._a=s,s.provide(lc,o),s.config.globalProperties.$pinia=o,n.forEach(i=>r.push(i)),n=[]},use(s){return!this._a&&!k0?n.push(s):r.push(s),this},_p:r,_a:null,_e:e,_s:new Map,state:t});return o}const cc=()=>{};function Li(e,t,r,n=cc){e.push(t);const o=()=>{const s=e.indexOf(t);s>-1&&(e.splice(s,1),n())};return!r&&Rs()&&Br(o),o}function xt(e,...t){e.slice().forEach(r=>{r(...t)})}function xo(e,t){e instanceof Map&&t instanceof Map&&t.forEach((r,n)=>e.set(n,r)),e instanceof Set&&t instanceof Set&&t.forEach(e.add,e);for(const r in t){if(!t.hasOwnProperty(r))continue;const n=t[r],o=e[r];Vo(o)&&Vo(n)&&e.hasOwnProperty(r)&&!me(n)&&!Et(n)?e[r]=xo(o,n):e[r]=n}return e}const B0=Symbol();function W0(e){return!Vo(e)||!e.hasOwnProperty(B0)}const{assign:_t}=Object;function K0(e){return!!(me(e)&&e.effect)}function G0(e,t,r,n){const{state:o,actions:s,getters:i}=t,a=r.state.value[e];let l;function c(){a||(r.state.value[e]=o?o():{});const u=zu(r.state.value[e]);return _t(u,s,Object.keys(i||{}).reduce((f,v)=>(f[v]=tr(he(()=>{Gn(r);const p=r._s.get(e);return i[v].call(p,p)})),f),{}))}return l=uc(e,c,t,r,n,!0),l.$reset=function(){const f=o?o():{};this.$patch(v=>{_t(v,f)})},l}function uc(e,t,r={},n,o,s){let i;const a=_t({actions:{}},r),l={deep:!0};let c,u,f=tr([]),v=tr([]),p;const m=n.state.value[e];!s&&!m&&(n.state.value[e]={}),Fe({});let A;function E(G){let O;c=u=!1,typeof G=="function"?(G(n.state.value[e]),O={type:Nr.patchFunction,storeId:e,events:p}):(xo(n.state.value[e],G),O={type:Nr.patchObject,payload:G,storeId:e,events:p});const q=A=Symbol();ws().then(()=>{A===q&&(c=!0)}),u=!0,xt(f,O,n.state.value[e])}const $=cc;function H(){i.stop(),f=[],v=[],n._s.delete(e)}function B(G,O){return function(){Gn(n);const q=Array.from(arguments),Q=[],fe=[];function F(ge){Q.push(ge)}function se(ge){fe.push(ge)}xt(v,{args:q,name:G,store:j,after:F,onError:se});let de;try{de=O.apply(this&&this.$id===e?this:j,q)}catch(ge){throw xt(fe,ge),ge}return de instanceof Promise?de.then(ge=>(xt(Q,ge),ge)).catch(ge=>(xt(fe,ge),Promise.reject(ge))):(xt(Q,de),de)}}const W={_p:n,$id:e,$onAction:Li.bind(null,v),$patch:E,$reset:$,$subscribe(G,O={}){const q=Li(f,G,O.detached,()=>Q()),Q=i.run(()=>Jt(()=>n.state.value[e],fe=>{(O.flush==="sync"?u:c)&&G({storeId:e,type:Nr.direct,events:p},fe)},_t({},l,O)));return q},$dispose:H},j=Kt(W);n._s.set(e,j);const te=n._e.run(()=>(i=gl(),i.run(()=>t())));for(const G in te){const O=te[G];if(me(O)&&!K0(O)||Et(O))s||(m&&W0(O)&&(me(O)?O.value=m[G]:xo(O,m[G])),n.state.value[e][G]=O);else if(typeof O=="function"){const q=B(G,O);te[G]=q,a.actions[G]=O}}return _t(j,te),_t(ee(j),te),Object.defineProperty(j,"$state",{get:()=>n.state.value[e],set:G=>{E(O=>{_t(O,G)})}}),n._p.forEach(G=>{_t(j,i.run(()=>G({store:j,app:n._a,pinia:n,options:a})))}),m&&s&&r.hydrate&&r.hydrate(j.$state,m),c=!0,u=!0,j}function fc(e,t,r){let n,o;const s=typeof t=="function";typeof e=="string"?(n=e,o=s?r:t):(o=e,n=e.id);function i(a,l){const c=Rs();return a=a||c&&et(lc),a&&Gn(a),a=ac,a._s.has(n)||(s?uc(n,t,o,a):G0(n,o,a)),a._s.get(n)}return i.$id=n,i}/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const qt=typeof window<"u";function j0(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const re=Object.assign;function so(e,t){const r={};for(const n in t){const o=t[n];r[n]=xe(o)?o.map(e):e(o)}return r}const Sr=()=>{},xe=Array.isArray,V0=/\/$/,x0=e=>e.replace(V0,"");function io(e,t,r="/"){let n,o={},s="",i="";const a=t.indexOf("#");let l=t.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(n=t.slice(0,l),s=t.slice(l+1,a>-1?a:t.length),o=e(s)),a>-1&&(n=n||t.slice(0,a),i=t.slice(a,t.length)),n=Q0(n!=null?n:t,r),{fullPath:n+(s&&"?")+s+i,path:n,query:o,hash:i}}function X0(e,t){const r=t.query?e(t.query):"";return t.path+(r&&"?")+r+(t.hash||"")}function Hi(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function z0(e,t,r){const n=t.matched.length-1,o=r.matched.length-1;return n>-1&&n===o&&nr(t.matched[n],r.matched[o])&&dc(t.params,r.params)&&e(t.query)===e(r.query)&&t.hash===r.hash}function nr(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function dc(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const r in e)if(!q0(e[r],t[r]))return!1;return!0}function q0(e,t){return xe(e)?Mi(e,t):xe(t)?Mi(t,e):e===t}function Mi(e,t){return xe(t)?e.length===t.length&&e.every((r,n)=>r===t[n]):e.length===1&&e[0]===t}function Q0(e,t){if(e.startsWith("/"))return e;if(!e)return t;const r=t.split("/"),n=e.split("/");let o=r.length-1,s,i;for(s=0;s<n.length;s++)if(i=n[s],i!==".")if(i==="..")o>1&&o--;else break;return r.slice(0,o).join("/")+"/"+n.slice(s-(s===n.length?1:0)).join("/")}var Mr;(function(e){e.pop="pop",e.push="push"})(Mr||(Mr={}));var Or;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Or||(Or={}));function Y0(e){if(!e)if(qt){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),x0(e)}const Z0=/^[^#]+#/;function J0(e,t){return e.replace(Z0,"#")+t}function ed(e,t){const r=document.documentElement.getBoundingClientRect(),n=e.getBoundingClientRect();return{behavior:t.behavior,left:n.left-r.left-(t.left||0),top:n.top-r.top-(t.top||0)}}const jn=()=>({left:window.pageXOffset,top:window.pageYOffset});function td(e){let t;if("el"in e){const r=e.el,n=typeof r=="string"&&r.startsWith("#"),o=typeof r=="string"?n?document.getElementById(r.slice(1)):document.querySelector(r):r;if(!o)return;t=ed(o,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function Di(e,t){return(history.state?history.state.position-t:-1)+e}const Xo=new Map;function rd(e,t){Xo.set(e,t)}function nd(e){const t=Xo.get(e);return Xo.delete(e),t}let od=()=>location.protocol+"//"+location.host;function vc(e,t){const{pathname:r,search:n,hash:o}=t,s=e.indexOf("#");if(s>-1){let a=o.includes(e.slice(s))?e.slice(s).length:1,l=o.slice(a);return l[0]!=="/"&&(l="/"+l),Hi(l,"")}return Hi(r,e)+n+o}function sd(e,t,r,n){let o=[],s=[],i=null;const a=({state:v})=>{const p=vc(e,location),m=r.value,A=t.value;let E=0;if(v){if(r.value=p,t.value=v,i&&i===m){i=null;return}E=A?v.position-A.position:0}else n(p);o.forEach($=>{$(r.value,m,{delta:E,type:Mr.pop,direction:E?E>0?Or.forward:Or.back:Or.unknown})})};function l(){i=r.value}function c(v){o.push(v);const p=()=>{const m=o.indexOf(v);m>-1&&o.splice(m,1)};return s.push(p),p}function u(){const{history:v}=window;!v.state||v.replaceState(re({},v.state,{scroll:jn()}),"")}function f(){for(const v of s)v();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:l,listen:c,destroy:f}}function ki(e,t,r,n=!1,o=!1){return{back:e,current:t,forward:r,replaced:n,position:window.history.length,scroll:o?jn():null}}function id(e){const{history:t,location:r}=window,n={value:vc(e,r)},o={value:t.state};o.value||s(n.value,{back:null,current:n.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const f=e.indexOf("#"),v=f>-1?(r.host&&document.querySelector("base")?e:e.slice(f))+l:od()+e+l;try{t[u?"replaceState":"pushState"](c,"",v),o.value=c}catch(p){console.error(p),r[u?"replace":"assign"](v)}}function i(l,c){const u=re({},t.state,ki(o.value.back,l,o.value.forward,!0),c,{position:o.value.position});s(l,u,!0),n.value=l}function a(l,c){const u=re({},o.value,t.state,{forward:l,scroll:jn()});s(u.current,u,!0);const f=re({},ki(n.value,l,null),{position:u.position+1},c);s(l,f,!1),n.value=l}return{location:n,state:o,push:a,replace:i}}function ad(e){e=Y0(e);const t=id(e),r=sd(e,t.state,t.location,t.replace);function n(s,i=!0){i||r.pauseListeners(),history.go(s)}const o=re({location:"",base:e,go:n,createHref:J0.bind(null,e)},t,r);return Object.defineProperty(o,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(o,"state",{enumerable:!0,get:()=>t.state.value}),o}function ld(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),ad(e)}function cd(e){return typeof e=="string"||e&&typeof e=="object"}function pc(e){return typeof e=="string"||typeof e=="symbol"}const vt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},hc=Symbol("");var Ui;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Ui||(Ui={}));function or(e,t){return re(new Error,{type:e,[hc]:!0},t)}function nt(e,t){return e instanceof Error&&hc in e&&(t==null||!!(e.type&t))}const Bi="[^/]+?",ud={sensitive:!1,strict:!1,start:!0,end:!0},fd=/[.+*?^${}()[\]/\\]/g;function dd(e,t){const r=re({},ud,t),n=[];let o=r.start?"^":"";const s=[];for(const c of e){const u=c.length?[]:[90];r.strict&&!c.length&&(o+="/");for(let f=0;f<c.length;f++){const v=c[f];let p=40+(r.sensitive?.25:0);if(v.type===0)f||(o+="/"),o+=v.value.replace(fd,"\\$&"),p+=40;else if(v.type===1){const{value:m,repeatable:A,optional:E,regexp:$}=v;s.push({name:m,repeatable:A,optional:E});const H=$||Bi;if(H!==Bi){p+=10;try{new RegExp(`(${H})`)}catch(W){throw new Error(`Invalid custom RegExp for param "${m}" (${H}): `+W.message)}}let B=A?`((?:${H})(?:/(?:${H}))*)`:`(${H})`;f||(B=E&&c.length<2?`(?:/${B})`:"/"+B),E&&(B+="?"),o+=B,p+=20,E&&(p+=-8),A&&(p+=-20),H===".*"&&(p+=-50)}u.push(p)}n.push(u)}if(r.strict&&r.end){const c=n.length-1;n[c][n[c].length-1]+=.7000000000000001}r.strict||(o+="/?"),r.end?o+="$":r.strict&&(o+="(?:/|$)");const i=new RegExp(o,r.sensitive?"":"i");function a(c){const u=c.match(i),f={};if(!u)return null;for(let v=1;v<u.length;v++){const p=u[v]||"",m=s[v-1];f[m.name]=p&&m.repeatable?p.split("/"):p}return f}function l(c){let u="",f=!1;for(const v of e){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const p of v)if(p.type===0)u+=p.value;else if(p.type===1){const{value:m,repeatable:A,optional:E}=p,$=m in c?c[m]:"";if(xe($)&&!A)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const H=xe($)?$.join("/"):$;if(!H)if(E)v.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${m}"`);u+=H}}return u||"/"}return{re:i,score:n,keys:s,parse:a,stringify:l}}function vd(e,t){let r=0;for(;r<e.length&&r<t.length;){const n=t[r]-e[r];if(n)return n;r++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function pd(e,t){let r=0;const n=e.score,o=t.score;for(;r<n.length&&r<o.length;){const s=vd(n[r],o[r]);if(s)return s;r++}if(Math.abs(o.length-n.length)===1){if(Wi(n))return 1;if(Wi(o))return-1}return o.length-n.length}function Wi(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const hd={type:0,value:""},gd=/[a-zA-Z0-9_]/;function md(e){if(!e)return[[]];if(e==="/")return[[hd]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(p){throw new Error(`ERR (${r})/"${c}": ${p}`)}let r=0,n=r;const o=[];let s;function i(){s&&o.push(s),s=[]}let a=0,l,c="",u="";function f(){!c||(r===0?s.push({type:0,value:c}):r===1||r===2||r===3?(s.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),c="")}function v(){c+=l}for(;a<e.length;){if(l=e[a++],l==="\\"&&r!==2){n=r,r=4;continue}switch(r){case 0:l==="/"?(c&&f(),i()):l===":"?(f(),r=1):v();break;case 4:v(),r=n;break;case 1:l==="("?r=2:gd.test(l)?v():(f(),r=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:r=3:u+=l;break;case 3:f(),r=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:t("Unknown state");break}}return r===2&&t(`Unfinished custom RegExp for param "${c}"`),f(),i(),o}function _d(e,t,r){const n=dd(md(e.path),r),o=re(n,{record:e,parent:t,children:[],alias:[]});return t&&!o.record.aliasOf==!t.record.aliasOf&&t.children.push(o),o}function $d(e,t){const r=[],n=new Map;t=ji({strict:!1,end:!0,sensitive:!1},t);function o(u){return n.get(u)}function s(u,f,v){const p=!v,m=yd(u);m.aliasOf=v&&v.record;const A=ji(t,u),E=[m];if("alias"in u){const B=typeof u.alias=="string"?[u.alias]:u.alias;for(const W of B)E.push(re({},m,{components:v?v.record.components:m.components,path:W,aliasOf:v?v.record:m}))}let $,H;for(const B of E){const{path:W}=B;if(f&&W[0]!=="/"){const j=f.record.path,te=j[j.length-1]==="/"?"":"/";B.path=f.record.path+(W&&te+W)}if($=_d(B,f,A),v?v.alias.push($):(H=H||$,H!==$&&H.alias.push($),p&&u.name&&!Gi($)&&i(u.name)),m.children){const j=m.children;for(let te=0;te<j.length;te++)s(j[te],$,v&&v.children[te])}v=v||$,($.record.components&&Object.keys($.record.components).length||$.record.name||$.record.redirect)&&l($)}return H?()=>{i(H)}:Sr}function i(u){if(pc(u)){const f=n.get(u);f&&(n.delete(u),r.splice(r.indexOf(f),1),f.children.forEach(i),f.alias.forEach(i))}else{const f=r.indexOf(u);f>-1&&(r.splice(f,1),u.record.name&&n.delete(u.record.name),u.children.forEach(i),u.alias.forEach(i))}}function a(){return r}function l(u){let f=0;for(;f<r.length&&pd(u,r[f])>=0&&(u.record.path!==r[f].record.path||!gc(u,r[f]));)f++;r.splice(f,0,u),u.record.name&&!Gi(u)&&n.set(u.record.name,u)}function c(u,f){let v,p={},m,A;if("name"in u&&u.name){if(v=n.get(u.name),!v)throw or(1,{location:u});A=v.record.name,p=re(Ki(f.params,v.keys.filter(H=>!H.optional).map(H=>H.name)),u.params&&Ki(u.params,v.keys.map(H=>H.name))),m=v.stringify(p)}else if("path"in u)m=u.path,v=r.find(H=>H.re.test(m)),v&&(p=v.parse(m),A=v.record.name);else{if(v=f.name?n.get(f.name):r.find(H=>H.re.test(f.path)),!v)throw or(1,{location:u,currentLocation:f});A=v.record.name,p=re({},f.params,u.params),m=v.stringify(p)}const E=[];let $=v;for(;$;)E.unshift($.record),$=$.parent;return{name:A,path:m,params:p,matched:E,meta:Ed(E)}}return e.forEach(u=>s(u)),{addRoute:s,resolve:c,removeRoute:i,getRoutes:a,getRecordMatcher:o}}function Ki(e,t){const r={};for(const n of t)n in e&&(r[n]=e[n]);return r}function yd(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:bd(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function bd(e){const t={},r=e.props||!1;if("component"in e)t.default=r;else for(const n in e.components)t[n]=typeof r=="boolean"?r:r[n];return t}function Gi(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Ed(e){return e.reduce((t,r)=>re(t,r.meta),{})}function ji(e,t){const r={};for(const n in e)r[n]=n in t?t[n]:e[n];return r}function gc(e,t){return t.children.some(r=>r===e||gc(e,r))}const mc=/#/g,Id=/&/g,Ad=/\//g,wd=/=/g,Nd=/\?/g,_c=/\+/g,Sd=/%5B/g,Od=/%5D/g,$c=/%5E/g,Cd=/%60/g,yc=/%7B/g,Pd=/%7C/g,bc=/%7D/g,Td=/%20/g;function Hs(e){return encodeURI(""+e).replace(Pd,"|").replace(Sd,"[").replace(Od,"]")}function Rd(e){return Hs(e).replace(yc,"{").replace(bc,"}").replace($c,"^")}function zo(e){return Hs(e).replace(_c,"%2B").replace(Td,"+").replace(mc,"%23").replace(Id,"%26").replace(Cd,"`").replace(yc,"{").replace(bc,"}").replace($c,"^")}function Fd(e){return zo(e).replace(wd,"%3D")}function Ld(e){return Hs(e).replace(mc,"%23").replace(Nd,"%3F")}function Hd(e){return e==null?"":Ld(e).replace(Ad,"%2F")}function Sn(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function Md(e){const t={};if(e===""||e==="?")return t;const n=(e[0]==="?"?e.slice(1):e).split("&");for(let o=0;o<n.length;++o){const s=n[o].replace(_c," "),i=s.indexOf("="),a=Sn(i<0?s:s.slice(0,i)),l=i<0?null:Sn(s.slice(i+1));if(a in t){let c=t[a];xe(c)||(c=t[a]=[c]),c.push(l)}else t[a]=l}return t}function Vi(e){let t="";for(let r in e){const n=e[r];if(r=Fd(r),n==null){n!==void 0&&(t+=(t.length?"&":"")+r);continue}(xe(n)?n.map(s=>s&&zo(s)):[n&&zo(n)]).forEach(s=>{s!==void 0&&(t+=(t.length?"&":"")+r,s!=null&&(t+="="+s))})}return t}function Dd(e){const t={};for(const r in e){const n=e[r];n!==void 0&&(t[r]=xe(n)?n.map(o=>o==null?null:""+o):n==null?n:""+n)}return t}const kd=Symbol(""),xi=Symbol(""),Vn=Symbol(""),Ec=Symbol(""),qo=Symbol("");function gr(){let e=[];function t(n){return e.push(n),()=>{const o=e.indexOf(n);o>-1&&e.splice(o,1)}}function r(){e=[]}return{add:t,list:()=>e,reset:r}}function $t(e,t,r,n,o){const s=n&&(n.enterCallbacks[o]=n.enterCallbacks[o]||[]);return()=>new Promise((i,a)=>{const l=f=>{f===!1?a(or(4,{from:r,to:t})):f instanceof Error?a(f):cd(f)?a(or(2,{from:t,to:f})):(s&&n.enterCallbacks[o]===s&&typeof f=="function"&&s.push(f),i())},c=e.call(n&&n.instances[o],t,r,l);let u=Promise.resolve(c);e.length<3&&(u=u.then(l)),u.catch(f=>a(f))})}function ao(e,t,r,n){const o=[];for(const s of e)for(const i in s.components){let a=s.components[i];if(!(t!=="beforeRouteEnter"&&!s.instances[i]))if(Ud(a)){const c=(a.__vccOpts||a)[t];c&&o.push($t(c,r,n,s,i))}else{let l=a();o.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${i}" at "${s.path}"`));const u=j0(c)?c.default:c;s.components[i]=u;const v=(u.__vccOpts||u)[t];return v&&$t(v,r,n,s,i)()}))}}return o}function Ud(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Xi(e){const t=et(Vn),r=et(Ec),n=he(()=>t.resolve(Ae(e.to))),o=he(()=>{const{matched:l}=n.value,{length:c}=l,u=l[c-1],f=r.matched;if(!u||!f.length)return-1;const v=f.findIndex(nr.bind(null,u));if(v>-1)return v;const p=zi(l[c-2]);return c>1&&zi(u)===p&&f[f.length-1].path!==p?f.findIndex(nr.bind(null,l[c-2])):v}),s=he(()=>o.value>-1&&Gd(r.params,n.value.params)),i=he(()=>o.value>-1&&o.value===r.matched.length-1&&dc(r.params,n.value.params));function a(l={}){return Kd(l)?t[Ae(e.replace)?"replace":"push"](Ae(e.to)).catch(Sr):Promise.resolve()}return{route:n,href:he(()=>n.value.href),isActive:s,isExactActive:i,navigate:a}}const Bd=rt({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Xi,setup(e,{slots:t}){const r=Kt(Xi(e)),{options:n}=et(Vn),o=he(()=>({[qi(e.activeClass,n.linkActiveClass,"router-link-active")]:r.isActive,[qi(e.exactActiveClass,n.linkExactActiveClass,"router-link-exact-active")]:r.isExactActive}));return()=>{const s=t.default&&t.default(r);return e.custom?s:Fs("a",{"aria-current":r.isExactActive?e.ariaCurrentValue:null,href:r.href,onClick:r.navigate,class:o.value},s)}}}),Wd=Bd;function Kd(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Gd(e,t){for(const r in t){const n=t[r],o=e[r];if(typeof n=="string"){if(n!==o)return!1}else if(!xe(o)||o.length!==n.length||n.some((s,i)=>s!==o[i]))return!1}return!0}function zi(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const qi=(e,t,r)=>e!=null?e:t!=null?t:r,jd=rt({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:r}){const n=et(qo),o=he(()=>e.route||n.value),s=et(xi,0),i=he(()=>{let c=Ae(s);const{matched:u}=o.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),a=he(()=>o.value.matched[i.value]);gn(xi,he(()=>i.value+1)),gn(kd,a),gn(qo,o);const l=Fe();return Jt(()=>[l.value,a.value,e.name],([c,u,f],[v,p,m])=>{u&&(u.instances[f]=c,p&&p!==u&&c&&c===v&&(u.leaveGuards.size||(u.leaveGuards=p.leaveGuards),u.updateGuards.size||(u.updateGuards=p.updateGuards))),c&&u&&(!p||!nr(u,p)||!v)&&(u.enterCallbacks[f]||[]).forEach(A=>A(c))},{flush:"post"}),()=>{const c=o.value,u=e.name,f=a.value,v=f&&f.components[u];if(!v)return Qi(r.default,{Component:v,route:c});const p=f.props[u],m=p?p===!0?c.params:typeof p=="function"?p(c):p:null,E=Fs(v,re({},m,t,{onVnodeUnmounted:$=>{$.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return Qi(r.default,{Component:E,route:c})||E}}});function Qi(e,t){if(!e)return null;const r=e(t);return r.length===1?r[0]:r}const Ic=jd;function Vd(e){const t=$d(e.routes,e),r=e.parseQuery||Md,n=e.stringifyQuery||Vi,o=e.history,s=gr(),i=gr(),a=gr(),l=Vu(vt);let c=vt;qt&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=so.bind(null,y=>""+y),f=so.bind(null,Hd),v=so.bind(null,Sn);function p(y,T){let C,M;return pc(y)?(C=t.getRecordMatcher(y),M=T):M=y,t.addRoute(M,C)}function m(y){const T=t.getRecordMatcher(y);T&&t.removeRoute(T)}function A(){return t.getRoutes().map(y=>y.record)}function E(y){return!!t.getRecordMatcher(y)}function $(y,T){if(T=re({},T||l.value),typeof y=="string"){const d=io(r,y,T.path),h=t.resolve({path:d.path},T),g=o.createHref(d.fullPath);return re(d,h,{params:v(h.params),hash:Sn(d.hash),redirectedFrom:void 0,href:g})}let C;if("path"in y)C=re({},y,{path:io(r,y.path,T.path).path});else{const d=re({},y.params);for(const h in d)d[h]==null&&delete d[h];C=re({},y,{params:f(y.params)}),T.params=f(T.params)}const M=t.resolve(C,T),Y=y.hash||"";M.params=u(v(M.params));const pe=X0(n,re({},y,{hash:Rd(Y),path:M.path})),x=o.createHref(pe);return re({fullPath:pe,hash:Y,query:n===Vi?Dd(y.query):y.query||{}},M,{redirectedFrom:void 0,href:x})}function H(y){return typeof y=="string"?io(r,y,l.value.path):re({},y)}function B(y,T){if(c!==y)return or(8,{from:T,to:y})}function W(y){return G(y)}function j(y){return W(re(H(y),{replace:!0}))}function te(y){const T=y.matched[y.matched.length-1];if(T&&T.redirect){const{redirect:C}=T;let M=typeof C=="function"?C(y):C;return typeof M=="string"&&(M=M.includes("?")||M.includes("#")?M=H(M):{path:M},M.params={}),re({query:y.query,hash:y.hash,params:"path"in M?{}:y.params},M)}}function G(y,T){const C=c=$(y),M=l.value,Y=y.state,pe=y.force,x=y.replace===!0,d=te(C);if(d)return G(re(H(d),{state:typeof d=="object"?re({},Y,d.state):Y,force:pe,replace:x}),T||C);const h=C;h.redirectedFrom=T;let g;return!pe&&z0(n,M,C)&&(g=or(16,{to:h,from:M}),Ot(M,M,!0,!1)),(g?Promise.resolve(g):q(h,M)).catch(_=>nt(_)?nt(_,2)?_:Ue(_):ce(_,h,M)).then(_=>{if(_){if(nt(_,2))return G(re({replace:x},H(_.to),{state:typeof _.to=="object"?re({},Y,_.to.state):Y,force:pe}),T||h)}else _=fe(h,M,!0,x,Y);return Q(h,M,_),_})}function O(y,T){const C=B(y,T);return C?Promise.reject(C):Promise.resolve()}function q(y,T){let C;const[M,Y,pe]=xd(y,T);C=ao(M.reverse(),"beforeRouteLeave",y,T);for(const d of M)d.leaveGuards.forEach(h=>{C.push($t(h,y,T))});const x=O.bind(null,y,T);return C.push(x),Xt(C).then(()=>{C=[];for(const d of s.list())C.push($t(d,y,T));return C.push(x),Xt(C)}).then(()=>{C=ao(Y,"beforeRouteUpdate",y,T);for(const d of Y)d.updateGuards.forEach(h=>{C.push($t(h,y,T))});return C.push(x),Xt(C)}).then(()=>{C=[];for(const d of y.matched)if(d.beforeEnter&&!T.matched.includes(d))if(xe(d.beforeEnter))for(const h of d.beforeEnter)C.push($t(h,y,T));else C.push($t(d.beforeEnter,y,T));return C.push(x),Xt(C)}).then(()=>(y.matched.forEach(d=>d.enterCallbacks={}),C=ao(pe,"beforeRouteEnter",y,T),C.push(x),Xt(C))).then(()=>{C=[];for(const d of i.list())C.push($t(d,y,T));return C.push(x),Xt(C)}).catch(d=>nt(d,8)?d:Promise.reject(d))}function Q(y,T,C){for(const M of a.list())M(y,T,C)}function fe(y,T,C,M,Y){const pe=B(y,T);if(pe)return pe;const x=T===vt,d=qt?history.state:{};C&&(M||x?o.replace(y.fullPath,re({scroll:x&&d&&d.scroll},Y)):o.push(y.fullPath,Y)),l.value=y,Ot(y,T,C,x),Ue()}let F;function se(){F||(F=o.listen((y,T,C)=>{if(!jr.listening)return;const M=$(y),Y=te(M);if(Y){G(re(Y,{replace:!0}),M).catch(Sr);return}c=M;const pe=l.value;qt&&rd(Di(pe.fullPath,C.delta),jn()),q(M,pe).catch(x=>nt(x,12)?x:nt(x,2)?(G(x.to,M).then(d=>{nt(d,20)&&!C.delta&&C.type===Mr.pop&&o.go(-1,!1)}).catch(Sr),Promise.reject()):(C.delta&&o.go(-C.delta,!1),ce(x,M,pe))).then(x=>{x=x||fe(M,pe,!1),x&&(C.delta&&!nt(x,8)?o.go(-C.delta,!1):C.type===Mr.pop&&nt(x,20)&&o.go(-1,!1)),Q(M,pe,x)}).catch(Sr)}))}let de=gr(),ge=gr(),ve;function ce(y,T,C){Ue(y);const M=ge.list();return M.length?M.forEach(Y=>Y(y,T,C)):console.error(y),Promise.reject(y)}function ne(){return ve&&l.value!==vt?Promise.resolve():new Promise((y,T)=>{de.add([y,T])})}function Ue(y){return ve||(ve=!y,se(),de.list().forEach(([T,C])=>y?C(y):T()),de.reset()),y}function Ot(y,T,C,M){const{scrollBehavior:Y}=e;if(!qt||!Y)return Promise.resolve();const pe=!C&&nd(Di(y.fullPath,0))||(M||!C)&&history.state&&history.state.scroll||null;return ws().then(()=>Y(y,T,pe)).then(x=>x&&td(x)).catch(x=>ce(x,y,T))}const Be=y=>o.go(y);let Pe;const jt=new Set,jr={currentRoute:l,listening:!0,addRoute:p,removeRoute:m,hasRoute:E,getRoutes:A,resolve:$,options:e,push:W,replace:j,go:Be,back:()=>Be(-1),forward:()=>Be(1),beforeEach:s.add,beforeResolve:i.add,afterEach:a.add,onError:ge.add,isReady:ne,install(y){const T=this;y.component("RouterLink",Wd),y.component("RouterView",Ic),y.config.globalProperties.$router=T,Object.defineProperty(y.config.globalProperties,"$route",{enumerable:!0,get:()=>Ae(l)}),qt&&!Pe&&l.value===vt&&(Pe=!0,W(o.location).catch(Y=>{}));const C={};for(const Y in vt)C[Y]=he(()=>l.value[Y]);y.provide(Vn,T),y.provide(Ec,Kt(C)),y.provide(qo,l);const M=y.unmount;jt.add(y),y.unmount=function(){jt.delete(y),jt.size<1&&(c=vt,F&&F(),F=null,l.value=vt,Pe=!1,ve=!1),M()}}};return jr}function Xt(e){return e.reduce((t,r)=>t.then(()=>r()),Promise.resolve())}function xd(e,t){const r=[],n=[],o=[],s=Math.max(t.matched.length,e.matched.length);for(let i=0;i<s;i++){const a=t.matched[i];a&&(e.matched.find(c=>nr(c,a))?n.push(a):r.push(a));const l=e.matched[i];l&&(t.matched.find(c=>nr(c,l))||o.push(l))}return[r,n,o]}function Ms(){return et(Vn)}const Ds=e=>(kr("data-v-4cd8445e"),e=e(),Ur(),e),Xd=Ds(()=>R("header",null,[R("h2",null,"Encode/Decode"),R("summary",null,"simple letter for letter substitution ciphers")],-1)),zd=Ds(()=>R("hr",null,null,-1)),qd=Ds(()=>R("footer",null,[R("aside",null," This app is for entertainment and learning purposes only and comes with no warranty. "),R("small",null,[At(" This project is under an MIT licence and is hosted at "),R("a",{href:"https://github.com/mcshaz/letter-swap-decoder"}," github.com/mcshaz/letter-swap-decoder "),At(". More detail can be found there. ")]),R("p",null,"version 0.1.2")],-1)),Qd=rt({__name:"App",setup(e){return(t,r)=>(Z(),J(ae,null,[Xd,ye(Ae(Ic)),zd,qd],64))}});const St=(e,t)=>{const r=e.__vccOpts||e;for(const[n,o]of t)r[n]=o;return r},Yd=St(Qd,[["__scopeId","data-v-4cd8445e"]]);/**
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
*/var $v=_v,Wr=$v;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var yv=Wr;function bv(e){return yv(e)===e&&e>=0}var Ev=bv;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Iv=Ev,Ac=Iv;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Av=Wr;function wv(e){return Av(e)===e}var Nv=wv;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Sv=Nv,xn=Sv;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Pv=Cv,Se=Pv;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Tv=Number.POSITIVE_INFINITY,Ce=Tv;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Dv=Ce,kv=He;function Uv(e){return e===Dv||e===kv}var Bv=Uv;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Wv=Bv,Kr=Wv;/**
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
*/var jv=Gv,Gt=jv;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Vv(){return typeof Symbol=="function"&&typeof Symbol("foo")=="symbol"}var xv=Vv;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Xv=xv,zv=Xv;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var tp=Object.prototype.toString,wc=tp;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var rp=wc;function np(e){return rp.call(e)}var op=np;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var dp=cp,mr=fp,lo=wc;function vp(e){var t,r,n;if(e==null)return lo.call(e);r=e[mr],t=dp(e,mr);try{e[mr]=void 0}catch{return lo.call(e)}return n=lo.call(e),t?e[mr]=r:delete e[mr],n}var pp=vp;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Bp=Xn,Wp=typeof Float64Array=="function";function Kp(e){return Wp&&e instanceof Float64Array||Bp(e)==="[object Float64Array]"}var Gp=Kp;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var jp=Gp,Vp=jp;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var xp=typeof Float64Array=="function"?Float64Array:null,Xp=xp;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var zp=Vp,ta=Xp;function qp(){var e,t;if(typeof ta!="function")return!1;try{t=new ta([1,3.14,-3.14,NaN]),e=zp(t)&&t[0]===1&&t[1]===3.14&&t[2]===-3.14&&t[3]!==t[3]}catch{e=!1}return e}var Qp=qp;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var U1=L1,fo=M1,na=k1;function B1(){var e,t;if(typeof na!="function")return!1;try{t=[1,3.14,-3.14,fo+1,fo+2],t=new na(t),e=U1(t)&&t[0]===1&&t[1]===3&&t[2]===fo-2&&t[3]===0&&t[4]===1}catch{e=!1}return e}var W1=B1;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var K1=W1,G1=K1;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var j1=typeof Uint16Array=="function"?Uint16Array:void 0,V1=j1;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function x1(){throw new Error("not implemented")}var X1=x1;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var z1=G1,q1=V1,Q1=X1,ts;z1()?ts=q1:ts=Q1;var Y1=ts;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var oa=th,Nc;function rh(){var e,t;return e=new oa.uint16(1),e[0]=4660,t=new oa.uint8(e.buffer),t[0]===52}Nc=rh();var nh=Nc;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var ah=cr,lh=ur,ch=ih,Sc=new lh(1),uh=new ah(Sc.buffer);function fh(e){return Sc[0]=e,uh[ch]}var dh=fh;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var vh=dh,Xe=vh;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var sa=Xe,Oh=zn,Ch=Se,Ph=dr,Th=He,Rh=wh,Fh=Sh,Qr=.6931471803691238,Yr=19082149292705877e-26,Lh=0x40000000000000,Hh=.3333333333333333,ia=1048575,Mh=2146435072,Dh=1048576,kh=1072693248;function Uh(e){var t,r,n,o,s,i,a,l,c,u,f,v;return e===0?Th:Ch(e)||e<0?NaN:(r=sa(e),s=0,r<Dh&&(s-=54,e*=Lh,r=sa(e)),r>=Mh?e+e:(s+=(r>>20)-Ph|0,r&=ia,l=r+614244&1048576|0,e=Oh(e,r|l^kh),s+=l>>20|0,a=e-1,(ia&2+r)<3?a===0?s===0?0:s*Qr+s*Yr:(i=a*a*(.5-Hh*a),s===0?a-i:s*Qr-(i-s*Yr-a)):(u=a/(2+a),v=u*u,l=r-398458|0,f=v*v,c=440401-r|0,o=f*Rh(f),n=v*Fh(f),l|=c,i=n+o,l>0?(t=.5*a*a,s===0?a-(t-u*(t+i)):s*Qr-(t-(u*(t+i)+s*Yr)-a)):s===0?a-u*(a-i):s*Qr-(u*(a-i)-s*Yr-a))))}var Bh=Uh;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Wh=Bh,Gr=Wh;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var jh=Gh,Vh=jh;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var xh=Wr,Xh=Vh;function zh(e){return e<0?Xh(e):xh(e)}var qh=zh;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Qh=qh,Oc=Qh;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/function Jh(e){return e===0?-27557314351390663e-23:-27557314351390663e-23+e*(2087572321298175e-24+e*-11359647557788195e-27)}var eg=Jh;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var tg=Zh,rg=eg;function ng(e,t){var r,n,o,s;return s=e*e,o=s*s,n=s*tg(s),n+=o*o*rg(s),r=.5*s,o=1-r,o+(1-o-r+(s*n-e*t))}var og=ng;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var sg=og,Cc=sg;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var aa=-.16666666666666632,ig=.00833333333332249,ag=-.0001984126982985795,lg=27557313707070068e-22,cg=-25050760253406863e-24,ug=158969099521155e-24;function fg(e,t){var r,n,o,s;return s=e*e,o=s*s,r=ig+s*(ag+s*lg)+s*o*(cg+s*ug),n=s*e,t===0?e+n*(aa+s*r):e-(s*(.5*t-n*r)-t-n*aa)}var dg=fg;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var vg=dg,Pc=vg;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var pg=fr,ss;pg===!0?ss=0:ss=1;var hg=ss;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var gg=cr,mg=ur,_g=hg,Tc=new mg(1),$g=new gg(Tc.buffer);function yg(e){return Tc[0]=e,$g[_g]}var bg=yg;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Eg=bg,Ig=Eg;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ag=fr,Rc,is,as;Ag===!0?(is=1,as=0):(is=0,as=1);Rc={HIGH:is,LOW:as};var wg=Rc;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ng=cr,Sg=ur,Fc=wg,Lc=new Sg(1),la=new Ng(Lc.buffer),Og=Fc.HIGH,Cg=Fc.LOW;function Pg(e,t){return la[Og]=e,la[Cg]=t,Lc[0]}var Tg=Pg;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Rg=Tg,Us=Rg;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Fg=1023,Lg=Fg;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Hg=-1023,Mg=Hg;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Dg=-1074,kg=Dg;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ug=fr,Hc,ls,cs;Ug===!0?(ls=1,cs=0):(ls=0,cs=1);Hc={HIGH:ls,LOW:cs};var Bg=Hc;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Wg=cr,Kg=ur,Mc=Bg,Dc=new Kg(1),ca=new Wg(Dc.buffer),Gg=Mc.HIGH,jg=Mc.LOW;function Vg(e,t){return Dc[0]=t,e[0]=ca[Gg],e[1]=ca[jg],e}var xg=Vg;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ua=xg;function Xg(e,t){return arguments.length===1?ua([0,0],e):ua(e,t)}var zg=Xg;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var qg=zg,Bs=qg;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Qg=Bs,Yg=Xe,Zg=Us,Jg=2147483648>>>0,em=2147483647,vo=[0,0];function tm(e,t){var r,n;return Qg(vo,e),r=vo[0],r&=em,n=Yg(t),n&=Jg,r|=n,Zg(r,vo[1])}var rm=tm;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var nm=rm,Ws=nm;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var om=22250738585072014e-324,sm=om;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var im=sm,am=Kr,lm=Se,cm=Gt,um=4503599627370496;function fm(e,t,r,n){return lm(e)||am(e)?(t[n]=e,t[n+r]=0,t):e!==0&&cm(e)<im?(t[n]=e*um,t[n+r]=-52,t):(t[n]=e,t[n+r]=0,t)}var kc=fm;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var dm=kc;function vm(e){return dm(e,[0,0],1,0)}var pm=vm;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var hm=ks,Uc=pm,gm=kc;hm(Uc,"assign",gm);var mm=Uc;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _m=2146435072,$m=_m;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ym=Xe,bm=$m,Em=dr;function Im(e){var t=ym(e);return t=(t&bm)>>>20,t-Em|0}var Am=Im;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var wm=Am,Nm=wm;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Sm=Ce,Om=He,Cm=dr,Pm=Lg,Tm=Mg,Rm=kg,Fm=Se,Lm=Kr,Hm=Ws,Mm=mm.assign,Dm=Nm,km=Bs,Um=Us,Bm=2220446049250313e-31,Wm=2148532223>>>0,po=[0,0],ho=[0,0];function Km(e,t){var r,n;return t===0||e===0||Fm(e)||Lm(e)?e:(Mm(e,po,1,0),e=po[0],t+=po[1],t+=Dm(e),t<Rm?Hm(0,e):t>Pm?e<0?Om:Sm:(t<=Tm?(t+=52,n=Bm):n=1,km(ho,e),r=ho[0],r&=Wm,r|=t+Cm<<20,n*Um(r,ho[1])))}var Gm=Km;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var jm=Gm,Ks=jm;/**
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
*/function Vm(e,t){var r,n;for(r=[],n=0;n<t;n++)r.push(e);return r}var xm=Vm;/**
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
*/var Xm=xm,zm=Xm;/**
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
*/var qm=zm;function Qm(e){return qm(0,e)}var Ym=Qm;/**
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
*/var Zm=Ym,Jm=Zm;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var e2=Wr,Zr=Ks,qn=Jm,Bc=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],t2=[1.570796251296997,7549789415861596e-23,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],go=16777216,mo=5960464477539063e-23,Jr=qn(20),fa=qn(20),en=qn(20),Ie=qn(20);function Wc(e,t,r,n,o,s,i,a,l){var c,u,f,v,p,m,A,E,$;for(v=s,$=n[r],E=r,p=0;E>0;p++)u=mo*$|0,Ie[p]=$-go*u|0,$=n[E-1]+u,E-=1;if($=Zr($,o),$-=8*e2($*.125),A=$|0,$-=A,f=0,o>0?(p=Ie[r-1]>>24-o,A+=p,Ie[r-1]-=p<<24-o,f=Ie[r-1]>>23-o):o===0?f=Ie[r-1]>>23:$>=.5&&(f=2),f>0){for(A+=1,c=0,p=0;p<r;p++)E=Ie[p],c===0?E!==0&&(c=1,Ie[p]=16777216-E):Ie[p]=16777215-E;if(o>0)switch(o){case 1:Ie[r-1]&=8388607;break;case 2:Ie[r-1]&=4194303;break}f===2&&($=1-$,c!==0&&($-=Zr(1,o)))}if($===0){for(E=0,p=r-1;p>=s;p--)E|=Ie[p];if(E===0){for(m=1;Ie[s-m]===0;m++);for(p=r+1;p<=r+m;p++){for(l[a+p]=Bc[i+p],u=0,E=0;E<=a;E++)u+=e[E]*l[a+(p-E)];n[p]=u}return r+=m,Wc(e,t,r,n,o,s,i,a,l)}}if($===0)for(r-=1,o-=24;Ie[r]===0;)r-=1,o-=24;else $=Zr($,-o),$>=go?(u=mo*$|0,Ie[r]=$-go*u|0,r+=1,o+=24,Ie[r]=u):Ie[r]=$|0;for(u=Zr(1,o),p=r;p>=0;p--)n[p]=u*Ie[p],u*=mo;for(p=r;p>=0;p--){for(u=0,m=0;m<=v&&m<=r-p;m++)u+=t2[m]*n[p+m];en[r-p]=u}for(u=0,p=r;p>=0;p--)u+=en[p];for(f===0?t[0]=u:t[0]=-u,u=en[0]-u,p=1;p<=r;p++)u+=en[p];return f===0?t[1]=u:t[1]=-u,A&7}function r2(e,t,r,n){var o,s,i,a,l,c,u,f,v;for(s=4,a=n-1,i=(r-3)/24|0,i<0&&(i=0),c=r-24*(i+1),f=i-a,v=a+s,u=0;u<=v;u++)f<0?Jr[u]=0:Jr[u]=Bc[f],f+=1;for(u=0;u<=s;u++){for(o=0,f=0;f<=a;f++)o+=e[f]*Jr[a+(u-f)];fa[u]=o}return l=s,Wc(e,t,l,fa,c,s,i,a,Jr)}var n2=r2;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var o2=Math.round,s2=o2;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var i2=s2,a2=i2;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var l2=a2,da=Xe,c2=.6366197723675814,u2=1.5707963267341256,f2=6077100506506192e-26,d2=6077100506303966e-26,v2=20222662487959506e-37,p2=20222662487111665e-37,h2=84784276603689e-45,va=2047;function g2(e,t,r){var n,o,s,i,a,l,c;return o=l2(e*c2),i=e-o*u2,a=o*f2,c=t>>20|0,r[0]=i-a,n=da(r[0]),l=c-(n>>20&va),l>16&&(s=i,a=o*d2,i=s-a,a=o*v2-(s-i-a),r[0]=i-a,n=da(r[0]),l=c-(n>>20&va),l>49&&(s=i,a=o*p2,i=s-a,a=o*h2-(s-i-a),r[0]=i-a)),r[1]=i-r[0]-a,o}var m2=g2;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var _2=Xe,$2=Ig,y2=Us,b2=n2,tn=m2,E2=0,I2=16777216,pt=1.5707963267341256,Ut=6077100506506192e-26,rn=2*Ut,nn=3*Ut,on=4*Ut,A2=2147483647,w2=2146435072,N2=1048575,S2=598523,O2=1072243195,C2=1073928572,P2=1074752122,T2=1074977148,R2=1075183036,F2=1075388923,L2=1075594811,H2=1094263291,_r=[0,0,0],$r=[0,0];function M2(e,t){var r,n,o,s,i,a,l,c;if(o=_2(e),s=o&A2|0,s<=O2)return t[0]=e,t[1]=0,0;if(s<=P2)return(s&N2)===S2?tn(e,s,t):s<=C2?e>0?(c=e-pt,t[0]=c-Ut,t[1]=c-t[0]-Ut,1):(c=e+pt,t[0]=c+Ut,t[1]=c-t[0]+Ut,-1):e>0?(c=e-2*pt,t[0]=c-rn,t[1]=c-t[0]-rn,2):(c=e+2*pt,t[0]=c+rn,t[1]=c-t[0]+rn,-2);if(s<=L2)return s<=R2?s===T2?tn(e,s,t):e>0?(c=e-3*pt,t[0]=c-nn,t[1]=c-t[0]-nn,3):(c=e+3*pt,t[0]=c+nn,t[1]=c-t[0]+nn,-3):s===F2?tn(e,s,t):e>0?(c=e-4*pt,t[0]=c-on,t[1]=c-t[0]-on,4):(c=e+4*pt,t[0]=c+on,t[1]=c-t[0]+on,-4);if(s<H2)return tn(e,s,t);if(s>=w2)return t[0]=NaN,t[1]=NaN,0;for(r=$2(e),n=(s>>20)-1046,c=y2(s-(n<<20|0),r),a=0;a<2;a++)_r[a]=c|0,c=(c-_r[a])*I2;for(_r[2]=c,i=3;_r[i-1]===E2;)i-=1;return l=b2(_r,$r,n,i),e<0?(t[0]=-$r[0],t[1]=-$r[1],-l):(t[0]=$r[0],t[1]=$r[1],l)}var D2=M2;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var k2=D2,Kc=k2;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var U2=Xe,_o=Cc,pa=Pc,B2=Kc,ot=[0,0],W2=2147483647,K2=1072243195,G2=1044381696,j2=2146435072;function V2(e){var t,r;if(t=U2(e),t&=W2,t<=K2)return t<G2?1:_o(e,0);if(t>=j2)return NaN;switch(r=B2(e,ot),r&3){case 0:return _o(ot[0],ot[1]);case 1:return-pa(ot[0],ot[1]);case 2:return-_o(ot[0],ot[1]);default:return pa(ot[0],ot[1])}}var x2=V2;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var X2=x2,z2=X2;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var q2=Xe,ha=Cc,$o=Pc,Q2=Kc,Y2=2147483647,Z2=2146435072,J2=1072243195,e_=1045430272,st=[0,0];function t_(e){var t,r;if(t=q2(e),t&=Y2,t<=J2)return t<e_?e:$o(e,0);if(t>=Z2)return NaN;switch(r=Q2(e,st),r&3){case 0:return $o(st[0],st[1]);case 1:return ha(st[0],st[1]);case 2:return-$o(st[0],st[1]);default:return-ha(st[0],st[1])}}var r_=t_;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var n_=r_,Gc=n_;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var s_=Se,i_=Kr,ga=z2,yo=Gc,a_=Gt,yr=Ws,br=Gs;function l_(e){var t,r;return s_(e)?NaN:i_(e)?NaN:(r=e%2,t=a_(r),t===0||t===1?yr(0,r):t<.25?yo(br*r):t<.75?(t=.5-t,yr(ga(br*t),r)):t<1.25?(r=yr(1,r)-r,yo(br*r)):t<1.75?(t-=1.5,-yr(ga(br*t),r)):(r-=yr(2,r),yo(br*r)))}var c_=l_;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var R_=Se,F_=Kr,L_=Gt,zt=Gr,H_=Oc,M_=f_,D_=Gs,bo=Ce,k_=v_,U_=h_,B_=m_,W_=$_,K_=b_,G_=I_,j_=w_,V_=S_,x_=C_,X_=T_,z_=.07721566490153287,q_=.3224670334241136,Q_=1,Y_=-.07721566490153287,Z_=.48383612272381005,J_=-.1475877229945939,e3=.06462494023913339,t3=-.07721566490153287,r3=1,n3=.4189385332046727,sn=1.4616321449683622,o3=4503599627370496,s3=0x400000000000000,i3=8470329472543003e-37,ma=1.4616321449683622,a3=-.12148629053584961,l3=-3638676997039505e-33;function c3(e){var t,r,n,o,s,i,a,l,c,u,f,v,p;if(R_(e)||F_(e))return e;if(e===0)return bo;if(e<0?(t=!0,e=-e):t=!1,e<i3)return-zt(e);if(t){if(e>=o3||(c=M_(e),c===0))return bo;r=zt(D_/L_(c*e))}if(e===1||e===2)return 0;if(e<2)switch(e<=.9?(p=-zt(e),e>=sn-1+.27?(f=1-e,n=0):e>=sn-1-.27?(f=e-(ma-1),n=1):(f=e,n=2)):(p=0,e>=sn+.27?(f=2-e,n=0):e>=sn-.27?(f=e-ma,n=1):(f=e-1,n=2)),n){case 0:v=f*f,i=z_+v*k_(v),s=v*(q_+v*U_(v)),a=f*i+s,p+=a-.5*f;break;case 1:v=f*f,u=v*f,i=Z_+u*K_(u),s=J_+u*G_(u),o=e3+u*j_(u),a=v*i-(l3-u*(s+f*o)),p+=a3+a;break;case 2:i=f*(t3+f*V_(f)),s=r3+f*x_(f),p+=-.5*f+i/s;break}else if(e<8)switch(n=H_(e),f=e-n,a=f*(Y_+f*W_(f)),l=Q_+f*B_(f),p=.5*f+a/l,v=1,n){case 7:v*=f+6;case 6:v*=f+5;case 5:v*=f+4;case 4:v*=f+3;case 3:v*=f+2,p+=zt(v)}else e<s3?(c=zt(e),v=1/e,f=v*v,u=n3+v*X_(f),p=(e-.5)*(c-1)+u):p=e*(zt(e)-1);return t&&(p=r-p),p}var u3=c3;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var h3=Se,_a=Xe,$a=zn,g3=Ce,m3=He,ya=dr,_3=p3,Eo=.6931471803691238,Io=19082149292705877e-26,$3=.41421356237309503,y3=-.2928932188134525,b3=1862645149230957e-24,E3=5551115123125783e-32,I3=9007199254740992,A3=.6666666666666666;function w3(e){var t,r,n,o,s,i,a,l,c,u;if(e<-1||h3(e))return NaN;if(e===-1)return m3;if(e===g3||e===0)return e;if(e<0?n=-e:n=e,u=1,n<$3){if(n<b3)return n<E3?e:e-e*e*.5;e>y3&&(u=0,o=e,r=1)}return u!==0&&(n<I3?(c=1+e,r=_a(c),u=(r>>20)-ya,u>0?s=1-(c-e):s=e-(c-1),s/=c):(c=e,r=_a(c),u=(r>>20)-ya,s=0),r&=1048575,r<434334?c=$a(c,r|1072693248):(u+=1,c=$a(c,r|1071644672),r=1048576-r>>2),o=c-1),t=.5*o*o,r===0?o===0?(s+=u*Io,u*Eo+s):(l=t*(1-A3*o),u*Eo-(l-(u*Io+s)-o)):(i=o/(2+o),a=i*i,l=a*_3(a),u===0?o-(t-i*(t+l)):u*Eo-(t-(i*(t+l)+(u*Io+s))-o))}var N3=w3;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var T3=P3,jc=T3;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var L3=xn;function H3(e){return L3(e/2)}var M3=H3;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var ba=k3;function U3(e){return e>0?ba(e-1):ba(e+1)}var B3=U3;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var W3=B3,Vc=W3;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var j3=G3,V3=j3;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var x3=fr,us;x3===!0?us=0:us=1;var X3=us;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var n6=r6,xc=n6;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Ea=Vc,o6=Ws,s6=He,an=Ce;function i6(e,t){return t===s6?an:t===an?0:t>0?Ea(t)?e:0:Ea(t)?o6(an,e):an}var a6=i6;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var l6=Xe,c6=2147483647,u6=1072693247,ln=1e300,cn=1e-300;function f6(e,t){var r,n;return n=l6(e),r=n&c6,r<=u6?t<0?ln*ln:cn*cn:t>0?ln*ln:cn*cn}var d6=f6;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var v6=Gt,Ia=Ce;function p6(e,t){return e===-1?(e-e)/(e-e):e===1?1:v6(e)<1==(t===Ia)?0:Ia}var h6=p6;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var _6=Xe,un=Qn,Aa=zn,$6=dr,y6=m6,b6=1048575,wa=1048576,E6=1072693248,I6=536870912,A6=524288,w6=20,N6=9007199254740992,S6=.9617966939259756,O6=.9617967009544373,C6=-7028461650952758e-24,P6=[1,1.5],T6=[0,.5849624872207642],R6=[0,1350039202129749e-23];function F6(e,t,r){var n,o,s,i,a,l,c,u,f,v,p,m,A,E,$,H,B,W,j,te,G,O;return te=0,r<wa&&(t*=N6,te-=53,r=_6(t)),te+=(r>>w6)-$6|0,G=r&b6|0,r=G|E6|0,G<=235662?O=0:G<767610?O=1:(O=0,te+=1,r-=wa),t=Aa(t,r),u=P6[O],W=t-u,j=1/(t+u),o=W*j,i=un(o,0),n=(r>>1|I6)+A6,n+=O<<18,l=Aa(0,n),c=t-(l-u),a=j*(W-i*l-i*c),s=o*o,B=s*s*y6(s),B+=a*(i+o),s=i*i,l=3+s+B,l=un(l,0),c=B-(l-3-s),W=i*l,j=a*l+c*o,v=W+j,v=un(v,0),p=j-(v-W),m=O6*v,A=C6*v+p*S6+R6[O],f=T6[O],H=te,E=m+A+f+H,E=un(E,0),$=A-(E-H-f-m),e[0]=E,e[1]=$,e}var L6=F6;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var D6=Qn,k6=M6,U6=1.4426950408889634,B6=1.4426950216293335,W6=19259629911266175e-24;function K6(e,t){var r,n,o,s,i,a;return o=t-1,s=o*o*k6(o),i=B6*o,a=o*W6-s*U6,n=i+a,n=D6(n,0),r=a-(n-i),e[0]=n,e[1]=r,e}var G6=K6;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var j6=.6931471805599453,V6=j6;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function x6(e){return e===0?.16666666666666602:.16666666666666602+e*(-.0027777777777015593+e*(6613756321437934e-20+e*(-16533902205465252e-22+e*41381367970572385e-24)))}var X6=x6;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var z6=Xe,Na=zn,q6=Qn,Q6=xc,Y6=Ks,Z6=V6,Sa=dr,J6=X6,Oa=2147483647,Ca=1048575,Pa=1048576,e4=1071644672,Er=20,t4=.6931471824645996,r4=-1904654299957768e-24;function n4(e,t,r){var n,o,s,i,a,l,c,u,f,v,p;return v=e&Oa|0,p=(v>>Er)-Sa|0,f=0,v>e4&&(f=e+(Pa>>p+1)>>>0,p=((f&Oa)>>Er)-Sa|0,n=(f&~(Ca>>p))>>>0,s=Na(0,n),f=(f&Ca|Pa)>>Er-p>>>0,e<0&&(f=-f),t-=s),s=r+t,s=q6(s,0),a=s*t4,l=(r-(s-t))*Z6+s*r4,u=a+l,c=l-(u-a),s=u*u,o=u-s*J6(s),i=u*o/(o-2)-(c+u*c),u=1-(i-u),e=z6(u),e=Q6(e),e+=f<<Er>>>0,e>>Er<=0?u=Y6(u,f):u=Na(u,e),u}var o4=n4;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Ta=Se,Ra=Vc,Fa=Kr,s4=xn,La=V3,i4=Gt,Ao=Bs,a4=Qn,Ha=xc,l4=He,c4=Ce,u4=a6,f4=d6,d4=h6,v4=L6,p4=G6,h4=o4,wo=2147483647,g4=1072693247,m4=1105199104,_4=1139802112,Ma=1083179008,$4=1072693248,y4=1083231232,b4=3230714880>>>0,Da=31,ht=1e300,gt=1e-300,E4=8008566259537294e-32,it=[0,0],ka=[0,0];function Xc(e,t){var r,n,o,s,i,a,l,c,u,f,v,p,m,A,E,$;if(Ta(e)||Ta(t))return NaN;if(Ao(it,t),a=it[0],l=it[1],l===0){if(t===0)return 1;if(t===1)return e;if(t===-1)return 1/e;if(t===.5)return La(e);if(t===-.5)return 1/La(e);if(t===2)return e*e;if(t===3)return e*e*e;if(t===4)return e*=e,e*e;if(Fa(t))return d4(e,t)}if(Ao(it,e),s=it[0],i=it[1],i===0){if(s===0)return u4(e,t);if(e===1)return 1;if(e===-1&&Ra(t))return-1;if(Fa(e))return e===l4?Xc(-0,-t):t<0?0:c4}if(e<0&&s4(t)===!1)return(e-e)/(e-e);if(o=i4(e),r=s&wo|0,n=a&wo|0,c=s>>>Da|0,u=a>>>Da|0,c&&Ra(t)?c=-1:c=1,n>m4){if(n>_4)return f4(e,t);if(r<g4)return u===1?c*ht*ht:c*gt*gt;if(r>$4)return u===0?c*ht*ht:c*gt*gt;m=p4(ka,o)}else m=v4(ka,o,r);if(f=a4(t,0),p=(t-f)*m[0]+t*m[1],v=f*m[0],A=p+v,Ao(it,A),E=Ha(it[0]),$=Ha(it[1]),E>=Ma){if((E-Ma|$)!==0||p+E4>A-v)return c*ht*ht}else if((E&wo)>=y4&&((E-b4|$)!==0||p<=A-v))return c*gt*gt;return A=h4(E,v,p),c*A}var I4=Xc;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var A4=I4,zc=A4;/**
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
*/var T4=Se,Ua=Oc,R4=He,Ba=Ce,F4=P4,L4=.6931471803691238,H4=19082149292705877e-26,Wa=1.4426950408889634,M4=709.782712893384,D4=-745.1332191019411,qc=1/(1<<28),k4=-qc;function U4(e){var t,r,n;return T4(e)||e===Ba?e:e===R4?0:e>M4?Ba:e<D4?0:e>k4&&e<qc?1+e:(e<0?n=Ua(Wa*e-.5):n=Ua(Wa*e+.5),t=e-n*L4,r=n*H4,F4(t,r,n))}var B4=U4;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var W4=B4,Vs=W4;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var j4=F3,Ka=zc,V4=Vs,x4=G4,X4=143.01608;function z4(e){var t,r,n;return t=1/e,t=1+t*x4(t),r=V4(e),e>X4?(n=Ka(e,.5*e-.25),r=n*(n/r)):r=Ka(e,e-.5)/r,j4*r*t}var q4=z4;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var n$=Se,o$=xn,s$=jc,Ga=Gt,i$=Wr,a$=Gc,ja=Ce,Va=He,xa=Gs,Xa=q4,za=e$,l$=r$;function c$(e){var t,r,n,o;if(o$(e)&&e<0||e===Va||n$(e))return NaN;if(e===0)return s$(e)?Va:ja;if(e>171.61447887182297)return ja;if(e<-170.5674972726612)return 0;if(r=Ga(e),r>33)return e>=0?Xa(e):(n=i$(r),(n&1)===0?t=-1:t=1,o=r-n,o>.5&&(n+=1,o=r-n),o=r*a$(xa*o),t*xa/(Ga(o)*Xa(r)));for(o=1;e>=3;)e-=1,o*=e;for(;e<0;){if(e>-1e-9)return za(e,o);o/=e,e+=1}for(;e<2;){if(e<1e-9)return za(e,o);o/=e,e+=1}return e===2?o:(e-=2,o*l$(e))}var u$=c$;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var v$=Ce;function p$(e){return e===0&&1/e===v$}var h$=p$;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var qa=m$,No=Se,_$=He,fn=Ce;function $$(e,t){var r,n,o,s;if(r=arguments.length,r===2)return No(e)||No(t)?NaN:e===fn||t===fn?fn:e===t&&e===0?qa(e)?e:t:e>t?e:t;for(n=_$,s=0;s<r;s++){if(o=arguments[s],No(o)||o===fn)return o;(o>n||o===n&&o===0&&qa(o))&&(n=o)}return n}var y$=$$;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Qa=jc,So=Se,dn=He,I$=Ce;function A$(e,t){var r,n,o,s;if(r=arguments.length,r===2)return So(e)||So(t)?NaN:e===dn||t===dn?dn:e===t&&e===0?Qa(e)?e:t:e<t?e:t;for(n=I$,s=0;s<r;s++){if(o=arguments[s],So(o)||o===dn)return o;(o<n||o===n&&o===0&&Qa(o))&&(n=o)}return n}var w$=A$;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Qc=[1276642195630063e-46,-3401102254316749e-45,1025680058010471e-43,-35475981581010704e-43,14292273559424982e-41,-6831888753985767e-39,39628370610464347e-38,-2868042435334643e-35,2683181998482699e-33,-3399615005417722e-31,6221098041892606e-29,-1809129475572494e-26,981082564692473e-23,-1384948176067564e-20,.16663894804518634],P$=Qc.length;function T$(e){var t,r,n,o,s;if(e<-1.1||e>1.1)return NaN;for(n=0,o=0,t=2*e,s=0;s<P$;s++)r=n,n=o,o=t*n-r+Qc[s];return(o-r)*.5}var R$=T$;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var F$=zc,L$=R$,H$=9490626562425156e-8,M$=3745194030963158e291;function D$(e){return e<10?NaN:e>=M$?0:e<H$?L$(2*F$(10/e,2)-1)/e:1/(e*12)}var k$=D$;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var U$=d3,Ya=js,Oo=d$,B$=E$,W$=S$,vn=Gr,K$=C$,G$=He,Za=Ce,Ir=k$;function j$(e,t){var r,n,o;return n=W$(e,t),o=B$(e,t),n<0?NaN:n===0?Za:o===Za?G$:n>=10?(r=Ir(n)+Ir(o)-Ir(n+o),-.5*vn(o)+K$+r+(n-.5)*vn(n/(n+o))+o*Ya(-n/(n+o))):o>=10?(r=Ir(o)-Ir(n+o),U$(n)+r+n-n*vn(n+o)+(o-.5)*Ya(-n/(n+o))):vn(Oo(n)*(Oo(o)/Oo(n+o)))}var V$=j$;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var x$=V$,X$=x$;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ja=xn,el=Se,z$=X$,q$=Gt,tl=Gr,rl=He;function ds(e,t){return el(e)||el(t)?NaN:!Ja(e)||!Ja(t)?NaN:e<0?ds(-e+t-1,t):t<0?rl:t===0?0:t===1?tl(q$(e)):e<t?rl:e-t<2?ds(e,e-t):-tl(e+1)-z$(e-t+1,t+1)}var Q$=ds;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Y$=Q$,Yc=Y$;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var nl=Ac,Z$=Yc,Co=Se,J$=js,ey=Vs,ty=Gr,ry=Ce;function ny(e,t,r){var n;return Co(e)||Co(t)||Co(r)||r<0||r>1||!nl(t)||t===ry?NaN:nl(e)?e>t?0:r===0?e===0?1:0:r===1?e===t?1:0:(n=Z$(t,e),n+=e*ty(r)+(t-e)*J$(-r),ey(n)):0}var oy=ny;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var ay=iy,Zc=ay;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ol=Se;function ly(e,t){return ol(e)||ol(t)?NaN:e===t?1:0}var cy=ly;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var uy=Zc,sl=Se;function fy(e){if(sl(e))return uy(NaN);return t;function t(r){return sl(r)?NaN:r===e?1:0}}var dy=fy;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var vy=ks,Jc=cy,py=dy;vy(Jc,"factory",py);var hy=Jc;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var il=Ac,gy=Zc,my=Yc,al=hy.factory,Po=Se,_y=js,$y=Vs,yy=Gr,by=Ce;function Ey(e,t){if(Po(e)||Po(t)||!il(e)||e===by||t<0||t>1)return gy(NaN);if(t===0||e===0)return al(0);if(t===1)return al(e);return r;function r(n){var o;return Po(n)?NaN:il(n)?n>e?0:(o=my(e,n),o+=n*yy(t)+(e-n)*_y(-t),$y(o)):0}}var Iy=Ey;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ay=ks,eu=oy,wy=Iy;Ay(eu,"factory",wy);var Ny=eu;const tu={E:.1249,T:.0928,A:.0804,O:.0764,I:.0757,N:.0723,S:.0651,R:.0628,H:.0505,L:.0407,D:.0382,C:.0334,U:.0273,M:.0251,F:.024,P:.0214,G:.0187,W:.0168,Y:.0166,B:.0148,V:.0105,K:.0054,X:.0023,J:.0016,Q:.0012,Z:9e-4};function Sy(e,t,r=tu){const n={};let o=0;for(const s of Object.keys(r))o+=n[s]=Ny(e,t,r[s]);for(const s of Object.keys(n))n[s]/=o;return n}function Oy(e){const t=Array(26).fill(0);for(let n=0;n<e.length;++n){const o=e.charCodeAt(n);65<=o&&o<=90?++t[o-65]:97<=o&&o<=122&&++t[o-97]}const r={};for(let n=0;n<26;++n)r[String.fromCharCode(n+65)]=t[n];return r}function Cy(e,t){let r=Oy(e),n=tu;if(t&&t.length){const i=new Set(t);let a=1;if(n=Object.fromEntries(Object.entries(n).filter(([l,c])=>i.has(l)?(a-=c,!0):!1)),a<1)for(const l of Object.keys(n))n[l]/=a;r=Object.fromEntries(Object.entries(r).filter(l=>!i.has(l[0])))}const o=Object.values(r).reduce((i,a)=>i+a,0),s=Object.keys(r).reduce((i,a)=>(r[a]&&(i[a]={count:r[a],decodesToProbs:Sy(r[a],o,n)}),i),{});return{totalLetters:o,letterDetails:s}}function ru(e){return Object.entries(e).sort((t,r)=>r[1]-t[1]).map(t=>t[0])}function Py(...e){const t=Math.min(...e),r=Math.max(...e)-t;return e.map(n=>(n-t)/r)}function Ty(e,t,r){const n=(a,l)=>Math.round(a+(l-a)*r),o=n(e.r,t.r),s=n(e.g,t.g),i=n(e.b,t.b);return{r:o,g:s,b:i}}const vr=fc("encoded",()=>{const e=Fe(""),t=Kt(new Map),r=he(()=>Cy(e.value)),n=(i,a)=>{for(const[l,c]of i.entries())if(c===a)return l},o=i=>i.length===1&&/[a-z]/i.test(i);return{message:e,decryptionKeys:t,allLetterStats:r,addKey:(i,a)=>{if(!o(i)||!o(a))return!1;i=i.toUpperCase(),a=a.toUpperCase();const l=n(t,a);return l&&t.delete(l),t.set(i,a),!0}}}),nu=fc("raw",()=>({message:Fe("")})),Ry=e=>(kr("data-v-aa6b7497"),e=e(),Ur(),e),Fy=Ry(()=>R("p",null," Enter text below - either plain text and click encode, or a message encoded with a simple alphabetical letter for letter substitution, and click decode. This app provides some tools to help you, but it does not decode the message for you. ",-1)),Ly=rt({__name:"HomeView",setup(e){const t=vr(),r=nu(),n=Fe(t.message||r.message),o=Ms(),s=()=>{r.message=n.value,t.message="",o.push({name:"encode"})},i=()=>{t.message!==n.value&&(r.message="",t.decryptionKeys.clear(),t.message=n.value),o.push({name:"decode"})};return(a,l)=>(Z(),J(ae,null,[Fy,R("fieldset",null,[R("div",null,[_n(R("textarea",{id:"message","onUpdate:modelValue":l[0]||(l[0]=c=>n.value=c)},null,512),[[C0,n.value]])]),R("button",{class:"btn",onClick:i,role:"link"},"Decode"),R("button",{class:"btn",onClick:s,role:"link"},"Encode")])],64))}});const Hy=St(Ly,[["__scopeId","data-v-aa6b7497"]]);function My(){const e=Array(26);for(let t=0;t<26;++t)e[t]=[String.fromCharCode(t+65),Math.random()];return e.sort((t,r)=>t[1]-r[1]),e.map(t=>t[0])}function ll(e,t){t||(t=My());const r=Array(e.length);for(let n=0;n<e.length;++n){const o=e.charCodeAt(n);65<=o&&o<=90?r[n]=t[o-65]:97<=o&&o<=122?r[n]=t[o-97].toLowerCase():r[n]=e[n]}return r.join("")}const Dy=["value"],ky={for:"noSpaces"},Uy={for:"noSpaces"},By={for:"noSpaces"},Wy=rt({__name:"EncodeMsg",setup(e){const t=nu().message,r=Fe(ll(t)),n=Fe(!1),o=Fe(!1),s=Fe(!1);t||Ms().push("/");const i=he(()=>{let l=r.value;return n.value&&(l=l.replace(/\s/g,"")),o.value&&(l=l.replace(/[^a-zA-Z\s]/g,"")),s.value&&(l=l.toUpperCase()),l}),a=()=>{r.value=ll(t)};return(l,c)=>(Z(),J(ae,null,[R("div",null,[R("textarea",{readonly:"",value:Ae(i)},null,8,Dy)]),R("fieldset",null,[R("label",ky,[_n(R("input",{type:"checkbox","onUpdate:modelValue":c[0]||(c[0]=u=>n.value=u),id:"noSpaces"},null,512),[[oo,n.value]]),At(" Exclude whitespace ")]),R("label",Uy,[_n(R("input",{type:"checkbox","onUpdate:modelValue":c[1]||(c[1]=u=>o.value=u),id:"noSpaces"},null,512),[[oo,o.value]]),At(" Exclude punctuation ")]),R("label",By,[_n(R("input",{type:"checkbox","onUpdate:modelValue":c[2]||(c[2]=u=>s.value=u),id:"noSpaces"},null,512),[[oo,s.value]]),At(" Capitals Only ")])]),R("button",{class:"btn",onClick:a},"New random key")],64))}});const Ky=St(Wy,[["__scopeId","data-v-a6737f22"]]),Gy=["disabled"],jy=["onClick","title"],Vy=rt({__name:"DecodingKeyboard",props:{activeEncodedLetter:null},emits:["key","enter"],setup(e){const t=e,r=vr(),n=["QWERTYUIOP".split(""),"ASDFGHJKL".split(""),[..."ZXCVBNM".split(""),"enter"]],o=Object.fromEntries(Array.from({length:26},(a,l)=>[String.fromCharCode(l+65),1/26])),s=he(()=>t.activeEncodedLetter?r.allLetterStats.letterDetails[t.activeEncodedLetter].decodesToProbs:o),i=he(()=>{const a={r:0,g:255,b:0},l={r:255,g:0,b:0},c=Py(...Object.values(s.value)),u=Object.fromEntries(Object.keys(s.value).map((v,p)=>[v,c[p]])),f=new Set(r.decryptionKeys.values());return n.map(v=>v.map(p=>{var m;return p.length===1?{value:p,colour:Ty(l,a,u[p]||0),p:`probability=${((m=s.value[p])==null?void 0:m.toFixed(3))||"[select letter]"}`,isInUse:f.has(p)}:{value:p}}))});return(a,l)=>(Z(),J("fieldset",{id:"keyboard",disabled:!e.activeEncodedLetter},[(Z(!0),J(ae,null,Je(Ae(i),(c,u)=>(Z(),J("div",{class:"row",key:u},[R("div",{class:yt(`spacer${u}`)},null,2),(Z(!0),J(ae,null,Je(c,f=>(Z(),J(ae,{key:f},[f.colour?(Z(),J("button",{key:0,type:"button",class:yt(f.isInUse?"used-key":""),style:On({borderColor:`rgb(${f.colour.r},${f.colour.g},${f.colour.b})`}),onClick:v=>a.$emit("key",f.value),title:f.p},[R("span",null,$e(f.value),1)],14,jy)):(Z(),J("button",{key:1,type:"button",class:"non-alpha",onClick:l[0]||(l[0]=v=>a.$emit("enter"))},[R("span",null,$e(f.value),1)]))],64))),128)),R("div",{class:yt(`spacer${u}`)},null,2)]))),128))],8,Gy))}});const xy=St(Vy,[["__scopeId","data-v-229a19a1"]]),Xy={id:"coded-text"},zy={key:0,class:"non-alpha char"},qy=["title","onClick"],Qy=rt({__name:"PartialDecodedText",props:{activeLetter:null},emits:["update:active-letter"],setup(e,{emit:t}){const r=e,n=vr(),o=Fe(-1);Bn(()=>{window.addEventListener("keydown",a)}),Br(()=>{window.removeEventListener("keydown",a)});const s=he(()=>{let l=-1;return n.message.split(`
`).map(c=>{var f;++l;const u=Array(c.length);for(let v=0;v<c.length;++v){const p=c[v],m=p.charCodeAt(0),A=65<=m&&m<=90;if(A||97<=m&&m<=122){let E,$;A?($=p,E=n.decryptionKeys.get(p)):($=String.fromCharCode(m-32),E=(f=n.decryptionKeys.get($))==null?void 0:f.toLowerCase());const H=Boolean(E);u[v]={id:l++,uc:$,display:E||p,prior:H?`decrypted from '${p}''`:void 0,isDecrypted:H,isNonAlpha:!1}}else u[v]={id:l++,display:p,isNonAlpha:!0}}return u})});function i(l){o.value=l,t("update:active-letter",l===-1?"":n.message[l].toUpperCase())}Jt(()=>r.activeLetter,l=>{l!==n.message[o.value].toUpperCase()&&(o.value=-1)});function a(l){if(o.value===-1||l.key!=="ArrowRight"&&l.key!=="ArrowLeft")return;const c=u(n.message,o.value,l.key==="ArrowRight");c>=0&&i(c);function u(f,v,p=!0){let m=v,A=p?()=>++m<f.length:()=>--m>=0,E;for(;A()&&((E=f.charCodeAt(m))<65||90<E&&E<97||122<E););return m<f.length?m:-1}}return(l,c)=>(Z(),J("div",Xy,[(Z(!0),J(ae,null,Je(Ae(s),(u,f)=>(Z(),J("div",{key:f},[(Z(!0),J(ae,null,Je(u,v=>(Z(),J(ae,{key:v.id},[v.isNonAlpha?(Z(),J("span",zy,$e(v.display),1)):(Z(),J("span",{key:1,class:yt(["alpha char",{current:v.id===o.value,"active-letter":v.uc===e.activeLetter,decrypted:v.isDecrypted}]),title:v.prior,onClick:p=>i(v.id)},$e(v.display),11,qy))],64))),128))]))),128))]))}});const Yy=St(Qy,[["__scopeId","data-v-422fbf37"]]),xs=e=>(kr("data-v-98773b76"),e=e(),Ur(),e),Zy={id:"letter-details"},Jy=xs(()=>R("td",null,null,-1)),eb=["onClick"],tb=xs(()=>R("th",null,"count",-1)),rb=xs(()=>R("th",null,"decoded",-1)),nb=rt({__name:"DecodingKeyStats",props:{activeLetter:null},setup(e){const t=vr(),r=he(()=>Object.keys(t.allLetterStats.letterDetails)),n=he(()=>r.value.map((i,a)=>({display:t.decryptionKeys.get(i)||"",id:t.decryptionKeys.get(i)||a}))),o=he(()=>Object.values(t.allLetterStats.letterDetails).map(i=>ru(i.decodesToProbs).map(a=>({letter:a,prob:i.decodesToProbs[a].toFixed(3)})))),s=i=>{switch(Math.round(i%10)){case 1:return"st";case 2:return"nd";case 3:return"rd";default:return"th"}};return(i,a)=>(Z(),J("div",Zy,[R("table",null,[R("tbody",null,[R("tr",null,[Jy,(Z(!0),J(ae,null,Je(Ae(r),l=>(Z(),J("th",{key:l},[R("a",{href:"#",class:yt(e.activeLetter===l?"active":""),onClick:F0(c=>i.$emit("update:active-letter",l),["prevent"])},$e(l),11,eb)]))),128))]),R("tr",null,[tb,(Z(!0),J(ae,null,Je(Ae(t).allLetterStats.letterDetails,(l,c)=>(Z(),J("td",{key:c},$e(l.count),1))),128))]),R("tr",null,[rb,(Z(!0),J(ae,null,Je(Ae(n),l=>(Z(),J("td",{key:l.id},$e(l.display),1))),128))]),(Z(),J(ae,null,Je(3,l=>R("tr",{key:l},[R("th",null,[At($e(l),1),R("sup",null,$e(s(l)),1)]),(Z(!0),J(ae,null,Je(Ae(o),(c,u)=>(Z(),J("td",{key:u},$e(c[l-1].letter)+"\xA0("+$e(c[l-1].prob)+") ",1))),128))])),64))])])]))}});const ob=St(nb,[["__scopeId","data-v-98773b76"]]),sb=e=>(kr("data-v-3efff174"),e=e(),Ur(),e),ib={key:0,class:"message"},ab=sb(()=>R("hr",null,null,-1)),lb=rt({__name:"DecodeMsg",setup(e){const t=Fe(""),r=Fe(""),n=vr(),o=Ms();n.message||o.push({name:"home"}),Bn(()=>{window.addEventListener("keyup",s),a("click on letter within the message to select the encoded letter, then use the keyboard to determine what the real letter is")}),Br(()=>{window.removeEventListener("keyup",s)});function s(l){i(l.key)}function i(l){n.addKey(t.value,l)}function a(l,c=3e3){r.value=l,c>0&&setTimeout(()=>{r.value=""},c)}return(l,c)=>(Z(),J(ae,null,[ye(Ls,null,{default:Ss(()=>[r.value?(Z(),J("div",ib,$e(r.value),1)):qf("",!0)]),_:1}),ye(Yy,{"active-letter":t.value,"onUpdate:active-letter":c[0]||(c[0]=u=>t.value=u)},null,8,["active-letter"]),ab,R("div",null,[R("h4",null,[At(" Total letters: "),R("output",null,$e(Ae(n).allLetterStats.totalLetters),1)])]),ye(xy,{onKey:i,onEnter:c[1]||(c[1]=u=>Ae(o).push({name:"decoded-key-details"})),"active-encoded-letter":t.value},null,8,["active-encoded-letter"]),ye(ob,{"active-letter":t.value,"onUpdate:active-letter":c[2]||(c[2]=u=>t.value=u)},null,8,["active-letter"])],64))}});const cb=St(lb,[["__scopeId","data-v-3efff174"]]),ou=e=>(kr("data-v-4a52d52e"),e=e(),Ur(),e),ub={id:"letter-details"},fb=ou(()=>R("tr",null,[R("th",{rowspan:"2"},"Encoded"),R("th",{rowspan:"2"},"Decodes to"),R("th",{rowspan:"2"},"Occurences"),R("th",{colspan:"3"},"probabilities")],-1)),db=ou(()=>R("tr",null,[R("th",null,"Value"),R("th",null,"Rank / 26"),R("th",null,"max (all letters)")],-1)),vb=["onClick"],pb=rt({__name:"DecodedKeysFinalDetails",setup(e){const t=vr(),r=he(()=>[...t.decryptionKeys.keys()].map(n=>{const o=t.decryptionKeys.get(n),s=t.allLetterStats.letterDetails[n],i=ru(s.decodesToProbs),a=l=>l.toFixed(4);return{encoded:n,decoded:o,count:s.count,pValue:a(s.decodesToProbs[o]),rank:i.indexOf(o)+1,maxP:s.decodesToProbs[i[0]].toFixed(3),maxLetter:i[0]}}));return(n,o)=>{const s=wf("RouterLink");return Z(),J(ae,null,[R("div",ub,[R("table",null,[R("tbody",null,[fb,db,(Z(!0),J(ae,null,Je(Ae(r),i=>(Z(),J("tr",{key:i.encoded},[R("td",null,$e(i.encoded),1),R("td",null,$e(i.decoded),1),R("td",null,$e(i.count),1),R("td",null,$e(i.pValue),1),R("td",null,$e(i.rank),1),R("td",null,$e(i.maxP)+"\xA0("+$e(i.maxLetter)+")",1)]))),128))])])]),ye(s,{to:"/decode",custom:""},{default:Ss(({navigate:i})=>[R("button",{class:"btn",onClick:i,role:"link"},"Back to decoding",8,vb)]),_:1})],64)}}});const hb=St(pb,[["__scopeId","data-v-4a52d52e"]]),gb=Vd({history:ld("/letter-swap-decoder/"),routes:[{path:"/",name:"home",component:Hy},{path:"/decode",name:"decode",component:cb},{path:"/encode",name:"encode",component:Ky},{path:"/decoded-key-details",name:"decoded-key-details",component:hb}]});const Xs=M0(Yd);Xs.use(U0());Xs.use(gb);Xs.mount("#app");
