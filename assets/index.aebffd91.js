(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerpolicy&&(s.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?s.credentials="include":o.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(o){if(o.ep)return;o.ep=!0;const s=r(o);fetch(o.href,s)}})();function ds(e,t){const r=Object.create(null),n=e.split(",");for(let o=0;o<n.length;o++)r[n[o]]=!0;return t?o=>!!r[o.toLowerCase()]:o=>!!r[o]}const su="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",iu=ds(su);function cl(e){return!!e||e===""}function Sn(e){if(U(e)){const t={};for(let r=0;r<e.length;r++){const n=e[r],o=Ee(n)?cu(n):Sn(n);if(o)for(const s in o)t[s]=o[s]}return t}else{if(Ee(e))return e;if(le(e))return e}}const au=/;(?![^(]*\))/g,lu=/:(.+)/;function cu(e){const t={};return e.split(au).forEach(r=>{if(r){const n=r.split(lu);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}function yt(e){let t="";if(Ee(e))t=e;else if(U(e))for(let r=0;r<e.length;r++){const n=yt(e[r]);n&&(t+=n+" ")}else if(le(e))for(const r in e)e[r]&&(t+=r+" ");return t.trim()}function uu(e,t){if(e.length!==t.length)return!1;let r=!0;for(let n=0;r&&n<e.length;n++)r=On(e[n],t[n]);return r}function On(e,t){if(e===t)return!0;let r=Ys(e),n=Ys(t);if(r||n)return r&&n?e.getTime()===t.getTime():!1;if(r=Cr(e),n=Cr(t),r||n)return e===t;if(r=U(e),n=U(t),r||n)return r&&n?uu(e,t):!1;if(r=le(e),n=le(t),r||n){if(!r||!n)return!1;const o=Object.keys(e).length,s=Object.keys(t).length;if(o!==s)return!1;for(const i in e){const a=e.hasOwnProperty(i),l=t.hasOwnProperty(i);if(a&&!l||!a&&l||!On(e[i],t[i]))return!1}}return String(e)===String(t)}function ul(e,t){return e.findIndex(r=>On(r,t))}const $e=e=>Ee(e)?e:e==null?"":U(e)||le(e)&&(e.toString===vl||!V(e.toString))?JSON.stringify(e,fl,2):String(e),fl=(e,t)=>t&&t.__v_isRef?fl(e,t.value):Yt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((r,[n,o])=>(r[`${n} =>`]=o,r),{})}:Pn(t)?{[`Set(${t.size})`]:[...t.values()]}:le(t)&&!U(t)&&!pl(t)?String(t):t,ie={},Qt=[],je=()=>{},fu=()=>!1,du=/^on[^a-z]/,Cn=e=>du.test(e),vs=e=>e.startsWith("onUpdate:"),Ne=Object.assign,ps=(e,t)=>{const r=e.indexOf(t);r>-1&&e.splice(r,1)},vu=Object.prototype.hasOwnProperty,z=(e,t)=>vu.call(e,t),U=Array.isArray,Yt=e=>Dr(e)==="[object Map]",Pn=e=>Dr(e)==="[object Set]",Ys=e=>Dr(e)==="[object Date]",V=e=>typeof e=="function",Ee=e=>typeof e=="string",Cr=e=>typeof e=="symbol",le=e=>e!==null&&typeof e=="object",dl=e=>le(e)&&V(e.then)&&V(e.catch),vl=Object.prototype.toString,Dr=e=>vl.call(e),pu=e=>Dr(e).slice(8,-1),pl=e=>Dr(e)==="[object Object]",hs=e=>Ee(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,vn=ds(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Tn=e=>{const t=Object.create(null);return r=>t[r]||(t[r]=e(r))},hu=/-(\w)/g,tt=Tn(e=>e.replace(hu,(t,r)=>r?r.toUpperCase():"")),gu=/\B([A-Z])/g,or=Tn(e=>e.replace(gu,"-$1").toLowerCase()),Rn=Tn(e=>e.charAt(0).toUpperCase()+e.slice(1)),Qn=Tn(e=>e?`on${Rn(e)}`:""),Pr=(e,t)=>!Object.is(e,t),pn=(e,t)=>{for(let r=0;r<e.length;r++)e[r](t)},$n=(e,t,r)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:r})},yn=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Zs;const mu=()=>Zs||(Zs=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Qe;class hl{constructor(t=!1){this.detached=t,this.active=!0,this.effects=[],this.cleanups=[],this.parent=Qe,!t&&Qe&&(this.index=(Qe.scopes||(Qe.scopes=[])).push(this)-1)}run(t){if(this.active){const r=Qe;try{return Qe=this,t()}finally{Qe=r}}}on(){Qe=this}off(){Qe=this.parent}stop(t){if(this.active){let r,n;for(r=0,n=this.effects.length;r<n;r++)this.effects[r].stop();for(r=0,n=this.cleanups.length;r<n;r++)this.cleanups[r]();if(this.scopes)for(r=0,n=this.scopes.length;r<n;r++)this.scopes[r].stop(!0);if(!this.detached&&this.parent&&!t){const o=this.parent.scopes.pop();o&&o!==this&&(this.parent.scopes[this.index]=o,o.index=this.index)}this.parent=void 0,this.active=!1}}}function gl(e){return new hl(e)}function _u(e,t=Qe){t&&t.active&&t.effects.push(e)}const gs=e=>{const t=new Set(e);return t.w=0,t.n=0,t},ml=e=>(e.w&Nt)>0,_l=e=>(e.n&Nt)>0,$u=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=Nt},yu=e=>{const{deps:t}=e;if(t.length){let r=0;for(let n=0;n<t.length;n++){const o=t[n];ml(o)&&!_l(o)?o.delete(e):t[r++]=o,o.w&=~Nt,o.n&=~Nt}t.length=r}},Po=new WeakMap;let Ir=0,Nt=1;const To=30;let Ke;const Bt=Symbol(""),Ro=Symbol("");class ms{constructor(t,r=null,n){this.fn=t,this.scheduler=r,this.active=!0,this.deps=[],this.parent=void 0,_u(this,n)}run(){if(!this.active)return this.fn();let t=Ke,r=bt;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Ke,Ke=this,bt=!0,Nt=1<<++Ir,Ir<=To?$u(this):Js(this),this.fn()}finally{Ir<=To&&yu(this),Nt=1<<--Ir,Ke=this.parent,bt=r,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Ke===this?this.deferStop=!0:this.active&&(Js(this),this.onStop&&this.onStop(),this.active=!1)}}function Js(e){const{deps:t}=e;if(t.length){for(let r=0;r<t.length;r++)t[r].delete(e);t.length=0}}let bt=!0;const $l=[];function sr(){$l.push(bt),bt=!1}function ir(){const e=$l.pop();bt=e===void 0?!0:e}function Fe(e,t,r){if(bt&&Ke){let n=Po.get(e);n||Po.set(e,n=new Map);let o=n.get(r);o||n.set(r,o=gs()),yl(o)}}function yl(e,t){let r=!1;Ir<=To?_l(e)||(e.n|=Nt,r=!ml(e)):r=!e.has(Ke),r&&(e.add(Ke),Ke.deps.push(e))}function lt(e,t,r,n,o,s){const i=Po.get(e);if(!i)return;let a=[];if(t==="clear")a=[...i.values()];else if(r==="length"&&U(e))i.forEach((l,c)=>{(c==="length"||c>=n)&&a.push(l)});else switch(r!==void 0&&a.push(i.get(r)),t){case"add":U(e)?hs(r)&&a.push(i.get("length")):(a.push(i.get(Bt)),Yt(e)&&a.push(i.get(Ro)));break;case"delete":U(e)||(a.push(i.get(Bt)),Yt(e)&&a.push(i.get(Ro)));break;case"set":Yt(e)&&a.push(i.get(Bt));break}if(a.length===1)a[0]&&Fo(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);Fo(gs(l))}}function Fo(e,t){const r=U(e)?e:[...e];for(const n of r)n.computed&&ei(n);for(const n of r)n.computed||ei(n)}function ei(e,t){(e!==Ke||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const bu=ds("__proto__,__v_isRef,__isVue"),bl=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Cr)),Eu=_s(),Iu=_s(!1,!0),Au=_s(!0),ti=Nu();function Nu(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...r){const n=ee(this);for(let s=0,i=this.length;s<i;s++)Fe(n,"get",s+"");const o=n[t](...r);return o===-1||o===!1?n[t](...r.map(ee)):o}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...r){sr();const n=ee(this)[t].apply(this,r);return ir(),n}}),e}function _s(e=!1,t=!1){return function(n,o,s){if(o==="__v_isReactive")return!e;if(o==="__v_isReadonly")return e;if(o==="__v_isShallow")return t;if(o==="__v_raw"&&s===(e?t?Wu:wl:t?Nl:Al).get(n))return n;const i=U(n);if(!e&&i&&z(ti,o))return Reflect.get(ti,o,s);const a=Reflect.get(n,o,s);return(Cr(o)?bl.has(o):bu(o))||(e||Fe(n,"get",o),t)?a:me(a)?i&&hs(o)?a:a.value:le(a)?e?Sl(a):Kt(a):a}}const wu=El(),Su=El(!0);function El(e=!1){return function(r,n,o,s){let i=r[n];if(Jt(i)&&me(i)&&!me(o))return!1;if(!e&&(!bn(o)&&!Jt(o)&&(i=ee(i),o=ee(o)),!U(r)&&me(i)&&!me(o)))return i.value=o,!0;const a=U(r)&&hs(n)?Number(n)<r.length:z(r,n),l=Reflect.set(r,n,o,s);return r===ee(s)&&(a?Pr(o,i)&&lt(r,"set",n,o):lt(r,"add",n,o)),l}}function Ou(e,t){const r=z(e,t);e[t];const n=Reflect.deleteProperty(e,t);return n&&r&&lt(e,"delete",t,void 0),n}function Cu(e,t){const r=Reflect.has(e,t);return(!Cr(t)||!bl.has(t))&&Fe(e,"has",t),r}function Pu(e){return Fe(e,"iterate",U(e)?"length":Bt),Reflect.ownKeys(e)}const Il={get:Eu,set:wu,deleteProperty:Ou,has:Cu,ownKeys:Pu},Tu={get:Au,set(e,t){return!0},deleteProperty(e,t){return!0}},Ru=Ne({},Il,{get:Iu,set:Su}),$s=e=>e,Fn=e=>Reflect.getPrototypeOf(e);function jr(e,t,r=!1,n=!1){e=e.__v_raw;const o=ee(e),s=ee(t);r||(t!==s&&Fe(o,"get",t),Fe(o,"get",s));const{has:i}=Fn(o),a=n?$s:r?Es:Tr;if(i.call(o,t))return a(e.get(t));if(i.call(o,s))return a(e.get(s));e!==o&&e.get(t)}function Vr(e,t=!1){const r=this.__v_raw,n=ee(r),o=ee(e);return t||(e!==o&&Fe(n,"has",e),Fe(n,"has",o)),e===o?r.has(e):r.has(e)||r.has(o)}function xr(e,t=!1){return e=e.__v_raw,!t&&Fe(ee(e),"iterate",Bt),Reflect.get(e,"size",e)}function ri(e){e=ee(e);const t=ee(this);return Fn(t).has.call(t,e)||(t.add(e),lt(t,"add",e,e)),this}function ni(e,t){t=ee(t);const r=ee(this),{has:n,get:o}=Fn(r);let s=n.call(r,e);s||(e=ee(e),s=n.call(r,e));const i=o.call(r,e);return r.set(e,t),s?Pr(t,i)&&lt(r,"set",e,t):lt(r,"add",e,t),this}function oi(e){const t=ee(this),{has:r,get:n}=Fn(t);let o=r.call(t,e);o||(e=ee(e),o=r.call(t,e)),n&&n.call(t,e);const s=t.delete(e);return o&&lt(t,"delete",e,void 0),s}function si(){const e=ee(this),t=e.size!==0,r=e.clear();return t&&lt(e,"clear",void 0,void 0),r}function Xr(e,t){return function(n,o){const s=this,i=s.__v_raw,a=ee(i),l=t?$s:e?Es:Tr;return!e&&Fe(a,"iterate",Bt),i.forEach((c,u)=>n.call(o,l(c),l(u),s))}}function zr(e,t,r){return function(...n){const o=this.__v_raw,s=ee(o),i=Yt(s),a=e==="entries"||e===Symbol.iterator&&i,l=e==="keys"&&i,c=o[e](...n),u=r?$s:t?Es:Tr;return!t&&Fe(s,"iterate",l?Ro:Bt),{next(){const{value:f,done:v}=c.next();return v?{value:f,done:v}:{value:a?[u(f[0]),u(f[1])]:u(f),done:v}},[Symbol.iterator](){return this}}}}function ut(e){return function(...t){return e==="delete"?!1:this}}function Fu(){const e={get(s){return jr(this,s)},get size(){return xr(this)},has:Vr,add:ri,set:ni,delete:oi,clear:si,forEach:Xr(!1,!1)},t={get(s){return jr(this,s,!1,!0)},get size(){return xr(this)},has:Vr,add:ri,set:ni,delete:oi,clear:si,forEach:Xr(!1,!0)},r={get(s){return jr(this,s,!0)},get size(){return xr(this,!0)},has(s){return Vr.call(this,s,!0)},add:ut("add"),set:ut("set"),delete:ut("delete"),clear:ut("clear"),forEach:Xr(!0,!1)},n={get(s){return jr(this,s,!0,!0)},get size(){return xr(this,!0)},has(s){return Vr.call(this,s,!0)},add:ut("add"),set:ut("set"),delete:ut("delete"),clear:ut("clear"),forEach:Xr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{e[s]=zr(s,!1,!1),r[s]=zr(s,!0,!1),t[s]=zr(s,!1,!0),n[s]=zr(s,!0,!0)}),[e,r,t,n]}const[Hu,Lu,Mu,Du]=Fu();function ys(e,t){const r=t?e?Du:Mu:e?Lu:Hu;return(n,o,s)=>o==="__v_isReactive"?!e:o==="__v_isReadonly"?e:o==="__v_raw"?n:Reflect.get(z(r,o)&&o in n?r:n,o,s)}const ku={get:ys(!1,!1)},Uu={get:ys(!1,!0)},Bu={get:ys(!0,!1)},Al=new WeakMap,Nl=new WeakMap,wl=new WeakMap,Wu=new WeakMap;function Ku(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Gu(e){return e.__v_skip||!Object.isExtensible(e)?0:Ku(pu(e))}function Kt(e){return Jt(e)?e:bs(e,!1,Il,ku,Al)}function ju(e){return bs(e,!1,Ru,Uu,Nl)}function Sl(e){return bs(e,!0,Tu,Bu,wl)}function bs(e,t,r,n,o){if(!le(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const s=o.get(e);if(s)return s;const i=Gu(e);if(i===0)return e;const a=new Proxy(e,i===2?n:r);return o.set(e,a),a}function Et(e){return Jt(e)?Et(e.__v_raw):!!(e&&e.__v_isReactive)}function Jt(e){return!!(e&&e.__v_isReadonly)}function bn(e){return!!(e&&e.__v_isShallow)}function Ol(e){return Et(e)||Jt(e)}function ee(e){const t=e&&e.__v_raw;return t?ee(t):e}function er(e){return $n(e,"__v_skip",!0),e}const Tr=e=>le(e)?Kt(e):e,Es=e=>le(e)?Sl(e):e;function Cl(e){bt&&Ke&&(e=ee(e),yl(e.dep||(e.dep=gs())))}function Pl(e,t){e=ee(e),e.dep&&Fo(e.dep)}function me(e){return!!(e&&e.__v_isRef===!0)}function Me(e){return Tl(e,!1)}function Vu(e){return Tl(e,!0)}function Tl(e,t){return me(e)?e:new xu(e,t)}class xu{constructor(t,r){this.__v_isShallow=r,this.dep=void 0,this.__v_isRef=!0,this._rawValue=r?t:ee(t),this._value=r?t:Tr(t)}get value(){return Cl(this),this._value}set value(t){const r=this.__v_isShallow||bn(t)||Jt(t);t=r?t:ee(t),Pr(t,this._rawValue)&&(this._rawValue=t,this._value=r?t:Tr(t),Pl(this))}}function Ae(e){return me(e)?e.value:e}const Xu={get:(e,t,r)=>Ae(Reflect.get(e,t,r)),set:(e,t,r,n)=>{const o=e[t];return me(o)&&!me(r)?(o.value=r,!0):Reflect.set(e,t,r,n)}};function Rl(e){return Et(e)?e:new Proxy(e,Xu)}function zu(e){const t=U(e)?new Array(e.length):{};for(const r in e)t[r]=Qu(e,r);return t}class qu{constructor(t,r,n){this._object=t,this._key=r,this._defaultValue=n,this.__v_isRef=!0}get value(){const t=this._object[this._key];return t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}}function Qu(e,t,r){const n=e[t];return me(n)?n:new qu(e,t,r)}var Fl;class Yu{constructor(t,r,n,o){this._setter=r,this.dep=void 0,this.__v_isRef=!0,this[Fl]=!1,this._dirty=!0,this.effect=new ms(t,()=>{this._dirty||(this._dirty=!0,Pl(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!o,this.__v_isReadonly=n}get value(){const t=ee(this);return Cl(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}Fl="__v_isReadonly";function Zu(e,t,r=!1){let n,o;const s=V(e);return s?(n=e,o=je):(n=e.get,o=e.set),new Yu(n,o,s||!o,r)}function It(e,t,r,n){let o;try{o=n?e(...n):e()}catch(s){Hn(s,t,r)}return o}function ke(e,t,r,n){if(V(e)){const s=It(e,t,r,n);return s&&dl(s)&&s.catch(i=>{Hn(i,t,r)}),s}const o=[];for(let s=0;s<e.length;s++)o.push(ke(e[s],t,r,n));return o}function Hn(e,t,r,n=!0){const o=t?t.vnode:null;if(t){let s=t.parent;const i=t.proxy,a=r;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](e,i,a)===!1)return}s=s.parent}const l=t.appContext.config.errorHandler;if(l){It(l,null,10,[e,i,a]);return}}Ju(e,r,o,n)}function Ju(e,t,r,n=!0){console.error(e)}let Rr=!1,Ho=!1;const we=[];let Ze=0;const Zt=[];let at=null,Ht=0;const Hl=Promise.resolve();let Is=null;function As(e){const t=Is||Hl;return e?t.then(this?e.bind(this):e):t}function ef(e){let t=Ze+1,r=we.length;for(;t<r;){const n=t+r>>>1;Fr(we[n])<e?t=n+1:r=n}return t}function Ns(e){(!we.length||!we.includes(e,Rr&&e.allowRecurse?Ze+1:Ze))&&(e.id==null?we.push(e):we.splice(ef(e.id),0,e),Ll())}function Ll(){!Rr&&!Ho&&(Ho=!0,Is=Hl.then(Dl))}function tf(e){const t=we.indexOf(e);t>Ze&&we.splice(t,1)}function rf(e){U(e)?Zt.push(...e):(!at||!at.includes(e,e.allowRecurse?Ht+1:Ht))&&Zt.push(e),Ll()}function ii(e,t=Rr?Ze+1:0){for(;t<we.length;t++){const r=we[t];r&&r.pre&&(we.splice(t,1),t--,r())}}function Ml(e){if(Zt.length){const t=[...new Set(Zt)];if(Zt.length=0,at){at.push(...t);return}for(at=t,at.sort((r,n)=>Fr(r)-Fr(n)),Ht=0;Ht<at.length;Ht++)at[Ht]();at=null,Ht=0}}const Fr=e=>e.id==null?1/0:e.id,nf=(e,t)=>{const r=Fr(e)-Fr(t);if(r===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return r};function Dl(e){Ho=!1,Rr=!0,we.sort(nf);const t=je;try{for(Ze=0;Ze<we.length;Ze++){const r=we[Ze];r&&r.active!==!1&&It(r,null,14)}}finally{Ze=0,we.length=0,Ml(),Rr=!1,Is=null,(we.length||Zt.length)&&Dl()}}function of(e,t,...r){if(e.isUnmounted)return;const n=e.vnode.props||ie;let o=r;const s=t.startsWith("update:"),i=s&&t.slice(7);if(i&&i in n){const u=`${i==="modelValue"?"model":i}Modifiers`,{number:f,trim:v}=n[u]||ie;v&&(o=r.map(h=>h.trim())),f&&(o=r.map(yn))}let a,l=n[a=Qn(t)]||n[a=Qn(tt(t))];!l&&s&&(l=n[a=Qn(or(t))]),l&&ke(l,e,6,o);const c=n[a+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,ke(c,e,6,o)}}function kl(e,t,r=!1){const n=t.emitsCache,o=n.get(e);if(o!==void 0)return o;const s=e.emits;let i={},a=!1;if(!V(e)){const l=c=>{const u=kl(c,t,!0);u&&(a=!0,Ne(i,u))};!r&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!s&&!a?(le(e)&&n.set(e,null),null):(U(s)?s.forEach(l=>i[l]=null):Ne(i,s),le(e)&&n.set(e,i),i)}function Ln(e,t){return!e||!Cn(t)?!1:(t=t.slice(2).replace(/Once$/,""),z(e,t[0].toLowerCase()+t.slice(1))||z(e,or(t))||z(e,t))}let De=null,Mn=null;function En(e){const t=De;return De=e,Mn=e&&e.type.__scopeId||null,t}function kr(e){Mn=e}function Ur(){Mn=null}function ws(e,t=De,r){if(!t||e._n)return e;const n=(...o)=>{n._d&&mi(-1);const s=En(t);let i;try{i=e(...o)}finally{En(s),n._d&&mi(1)}return i};return n._n=!0,n._c=!0,n._d=!0,n}function Yn(e){const{type:t,vnode:r,proxy:n,withProxy:o,props:s,propsOptions:[i],slots:a,attrs:l,emit:c,render:u,renderCache:f,data:v,setupState:h,ctx:_,inheritAttrs:I}=e;let A,y;const M=En(e);try{if(r.shapeFlag&4){const W=o||n;A=Ye(u.call(W,W,f,s,h,v,_)),y=l}else{const W=t;A=Ye(W.length>1?W(s,{attrs:l,slots:a,emit:c}):W(s,null)),y=t.props?l:sf(l)}}catch(W){Nr.length=0,Hn(W,e,1),A=ye(Ve)}let B=A;if(y&&I!==!1){const W=Object.keys(y),{shapeFlag:j}=B;W.length&&j&7&&(i&&W.some(vs)&&(y=af(y,i)),B=wt(B,y))}return r.dirs&&(B=wt(B),B.dirs=B.dirs?B.dirs.concat(r.dirs):r.dirs),r.transition&&(B.transition=r.transition),A=B,En(M),A}const sf=e=>{let t;for(const r in e)(r==="class"||r==="style"||Cn(r))&&((t||(t={}))[r]=e[r]);return t},af=(e,t)=>{const r={};for(const n in e)(!vs(n)||!(n.slice(9)in t))&&(r[n]=e[n]);return r};function lf(e,t,r){const{props:n,children:o,component:s}=e,{props:i,children:a,patchFlag:l}=t,c=s.emitsOptions;if(t.dirs||t.transition)return!0;if(r&&l>=0){if(l&1024)return!0;if(l&16)return n?ai(n,i,c):!!i;if(l&8){const u=t.dynamicProps;for(let f=0;f<u.length;f++){const v=u[f];if(i[v]!==n[v]&&!Ln(c,v))return!0}}}else return(o||a)&&(!a||!a.$stable)?!0:n===i?!1:n?i?ai(n,i,c):!0:!!i;return!1}function ai(e,t,r){const n=Object.keys(t);if(n.length!==Object.keys(e).length)return!0;for(let o=0;o<n.length;o++){const s=n[o];if(t[s]!==e[s]&&!Ln(r,s))return!0}return!1}function cf({vnode:e,parent:t},r){for(;t&&t.subTree===e;)(e=t.vnode).el=r,t=t.parent}const uf=e=>e.__isSuspense;function ff(e,t){t&&t.pendingBranch?U(e)?t.effects.push(...e):t.effects.push(e):rf(e)}function hn(e,t){if(be){let r=be.provides;const n=be.parent&&be.parent.provides;n===r&&(r=be.provides=Object.create(n)),r[e]=t}}function et(e,t,r=!1){const n=be||De;if(n){const o=n.parent==null?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides;if(o&&e in o)return o[e];if(arguments.length>1)return r&&V(t)?t.call(n.proxy):t}}const li={};function Ar(e,t,r){return Ul(e,t,r)}function Ul(e,t,{immediate:r,deep:n,flush:o,onTrack:s,onTrigger:i}=ie){const a=be;let l,c=!1,u=!1;if(me(e)?(l=()=>e.value,c=bn(e)):Et(e)?(l=()=>e,n=!0):U(e)?(u=!0,c=e.some(y=>Et(y)||bn(y)),l=()=>e.map(y=>{if(me(y))return y.value;if(Et(y))return kt(y);if(V(y))return It(y,a,2)})):V(e)?t?l=()=>It(e,a,2):l=()=>{if(!(a&&a.isUnmounted))return f&&f(),ke(e,a,3,[v])}:l=je,t&&n){const y=l;l=()=>kt(y())}let f,v=y=>{f=A.onStop=()=>{It(y,a,4)}};if(Lr)return v=je,t?r&&ke(t,a,3,[l(),u?[]:void 0,v]):l(),je;let h=u?[]:li;const _=()=>{if(!!A.active)if(t){const y=A.run();(n||c||(u?y.some((M,B)=>Pr(M,h[B])):Pr(y,h)))&&(f&&f(),ke(t,a,3,[y,h===li?void 0:h,v]),h=y)}else A.run()};_.allowRecurse=!!t;let I;o==="sync"?I=_:o==="post"?I=()=>Te(_,a&&a.suspense):(_.pre=!0,a&&(_.id=a.uid),I=()=>Ns(_));const A=new ms(l,I);return t?r?_():h=A.run():o==="post"?Te(A.run.bind(A),a&&a.suspense):A.run(),()=>{A.stop(),a&&a.scope&&ps(a.scope.effects,A)}}function df(e,t,r){const n=this.proxy,o=Ee(e)?e.includes(".")?Bl(n,e):()=>n[e]:e.bind(n,n);let s;V(t)?s=t:(s=t.handler,r=t);const i=be;tr(this);const a=Ul(o,s.bind(n),r);return i?tr(i):Wt(),a}function Bl(e,t){const r=t.split(".");return()=>{let n=e;for(let o=0;o<r.length&&n;o++)n=n[r[o]];return n}}function kt(e,t){if(!le(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),me(e))kt(e.value,t);else if(U(e))for(let r=0;r<e.length;r++)kt(e[r],t);else if(Pn(e)||Yt(e))e.forEach(r=>{kt(r,t)});else if(pl(e))for(const r in e)kt(e[r],t);return e}function vf(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Ss(()=>{e.isMounted=!0}),Vl(()=>{e.isUnmounting=!0}),e}const Le=[Function,Array],pf={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Le,onEnter:Le,onAfterEnter:Le,onEnterCancelled:Le,onBeforeLeave:Le,onLeave:Le,onAfterLeave:Le,onLeaveCancelled:Le,onBeforeAppear:Le,onAppear:Le,onAfterAppear:Le,onAppearCancelled:Le},setup(e,{slots:t}){const r=Rs(),n=vf();let o;return()=>{const s=t.default&&Gl(t.default(),!0);if(!s||!s.length)return;let i=s[0];if(s.length>1){for(const I of s)if(I.type!==Ve){i=I;break}}const a=ee(e),{mode:l}=a;if(n.isLeaving)return Zn(i);const c=ci(i);if(!c)return Zn(i);const u=Lo(c,a,n,r);Mo(c,u);const f=r.subTree,v=f&&ci(f);let h=!1;const{getTransitionKey:_}=c.type;if(_){const I=_();o===void 0?o=I:I!==o&&(o=I,h=!0)}if(v&&v.type!==Ve&&(!Lt(c,v)||h)){const I=Lo(v,a,n,r);if(Mo(v,I),l==="out-in")return n.isLeaving=!0,I.afterLeave=()=>{n.isLeaving=!1,r.update()},Zn(i);l==="in-out"&&c.type!==Ve&&(I.delayLeave=(A,y,M)=>{const B=Kl(n,v);B[String(v.key)]=v,A._leaveCb=()=>{y(),A._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=M})}return i}}},Wl=pf;function Kl(e,t){const{leavingVNodes:r}=e;let n=r.get(t.type);return n||(n=Object.create(null),r.set(t.type,n)),n}function Lo(e,t,r,n){const{appear:o,mode:s,persisted:i=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:f,onLeave:v,onAfterLeave:h,onLeaveCancelled:_,onBeforeAppear:I,onAppear:A,onAfterAppear:y,onAppearCancelled:M}=t,B=String(e.key),W=Kl(r,e),j=(O,q)=>{O&&ke(O,n,9,q)},te=(O,q)=>{const Q=q[1];j(O,q),U(O)?O.every(fe=>fe.length<=1)&&Q():O.length<=1&&Q()},G={mode:s,persisted:i,beforeEnter(O){let q=a;if(!r.isMounted)if(o)q=I||a;else return;O._leaveCb&&O._leaveCb(!0);const Q=W[B];Q&&Lt(e,Q)&&Q.el._leaveCb&&Q.el._leaveCb(),j(q,[O])},enter(O){let q=l,Q=c,fe=u;if(!r.isMounted)if(o)q=A||l,Q=y||c,fe=M||u;else return;let F=!1;const se=O._enterCb=de=>{F||(F=!0,de?j(fe,[O]):j(Q,[O]),G.delayedLeave&&G.delayedLeave(),O._enterCb=void 0)};q?te(q,[O,se]):se()},leave(O,q){const Q=String(e.key);if(O._enterCb&&O._enterCb(!0),r.isUnmounting)return q();j(f,[O]);let fe=!1;const F=O._leaveCb=se=>{fe||(fe=!0,q(),se?j(_,[O]):j(h,[O]),O._leaveCb=void 0,W[Q]===e&&delete W[Q])};W[Q]=e,v?te(v,[O,F]):F()},clone(O){return Lo(O,t,r,n)}};return G}function Zn(e){if(Dn(e))return e=wt(e),e.children=null,e}function ci(e){return Dn(e)?e.children?e.children[0]:void 0:e}function Mo(e,t){e.shapeFlag&6&&e.component?Mo(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Gl(e,t=!1,r){let n=[],o=0;for(let s=0;s<e.length;s++){let i=e[s];const a=r==null?i.key:String(r)+String(i.key!=null?i.key:s);i.type===ae?(i.patchFlag&128&&o++,n=n.concat(Gl(i.children,t,a))):(t||i.type!==Ve)&&n.push(a!=null?wt(i,{key:a}):i)}if(o>1)for(let s=0;s<n.length;s++)n[s].patchFlag=-2;return n}function rt(e){return V(e)?{setup:e,name:e.name}:e}const gn=e=>!!e.type.__asyncLoader,Dn=e=>e.type.__isKeepAlive;function hf(e,t){jl(e,"a",t)}function gf(e,t){jl(e,"da",t)}function jl(e,t,r=be){const n=e.__wdc||(e.__wdc=()=>{let o=r;for(;o;){if(o.isDeactivated)return;o=o.parent}return e()});if(kn(t,n,r),r){let o=r.parent;for(;o&&o.parent;)Dn(o.parent.vnode)&&mf(n,t,r,o),o=o.parent}}function mf(e,t,r,n){const o=kn(t,e,n,!0);Un(()=>{ps(n[t],o)},r)}function kn(e,t,r=be,n=!1){if(r){const o=r[e]||(r[e]=[]),s=t.__weh||(t.__weh=(...i)=>{if(r.isUnmounted)return;sr(),tr(r);const a=ke(t,r,e,i);return Wt(),ir(),a});return n?o.unshift(s):o.push(s),s}}const ct=e=>(t,r=be)=>(!Lr||e==="sp")&&kn(e,(...n)=>t(...n),r),_f=ct("bm"),Ss=ct("m"),$f=ct("bu"),yf=ct("u"),Vl=ct("bum"),Un=ct("um"),bf=ct("sp"),Ef=ct("rtg"),If=ct("rtc");function Af(e,t=be){kn("ec",e,t)}function mn(e,t){const r=De;if(r===null)return e;const n=Wn(r)||r.proxy,o=e.dirs||(e.dirs=[]);for(let s=0;s<t.length;s++){let[i,a,l,c=ie]=t[s];V(i)&&(i={mounted:i,updated:i}),i.deep&&kt(a),o.push({dir:i,instance:n,value:a,oldValue:void 0,arg:l,modifiers:c})}return e}function Ct(e,t,r,n){const o=e.dirs,s=t&&t.dirs;for(let i=0;i<o.length;i++){const a=o[i];s&&(a.oldValue=s[i].value);let l=a.dir[n];l&&(sr(),ke(l,r,8,[e.el,a,e,t]),ir())}}const xl="components";function Nf(e,t){return Sf(xl,e,!0,t)||e}const wf=Symbol();function Sf(e,t,r=!0,n=!1){const o=De||be;if(o){const s=o.type;if(e===xl){const a=o0(s,!1);if(a&&(a===t||a===tt(t)||a===Rn(tt(t))))return s}const i=ui(o[e]||s[e],t)||ui(o.appContext[e],t);return!i&&n?s:i}}function ui(e,t){return e&&(e[t]||e[tt(t)]||e[Rn(tt(t))])}function Je(e,t,r,n){let o;const s=r&&r[n];if(U(e)||Ee(e)){o=new Array(e.length);for(let i=0,a=e.length;i<a;i++)o[i]=t(e[i],i,void 0,s&&s[i])}else if(typeof e=="number"){o=new Array(e);for(let i=0;i<e;i++)o[i]=t(i+1,i,void 0,s&&s[i])}else if(le(e))if(e[Symbol.iterator])o=Array.from(e,(i,a)=>t(i,a,void 0,s&&s[a]));else{const i=Object.keys(e);o=new Array(i.length);for(let a=0,l=i.length;a<l;a++){const c=i[a];o[a]=t(e[c],c,a,s&&s[a])}}else o=[];return r&&(r[n]=o),o}const Do=e=>e?nc(e)?Wn(e)||e.proxy:Do(e.parent):null,In=Ne(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Do(e.parent),$root:e=>Do(e.root),$emit:e=>e.emit,$options:e=>Os(e),$forceUpdate:e=>e.f||(e.f=()=>Ns(e.update)),$nextTick:e=>e.n||(e.n=As.bind(e.proxy)),$watch:e=>df.bind(e)}),Of={get({_:e},t){const{ctx:r,setupState:n,data:o,props:s,accessCache:i,type:a,appContext:l}=e;let c;if(t[0]!=="$"){const h=i[t];if(h!==void 0)switch(h){case 1:return n[t];case 2:return o[t];case 4:return r[t];case 3:return s[t]}else{if(n!==ie&&z(n,t))return i[t]=1,n[t];if(o!==ie&&z(o,t))return i[t]=2,o[t];if((c=e.propsOptions[0])&&z(c,t))return i[t]=3,s[t];if(r!==ie&&z(r,t))return i[t]=4,r[t];ko&&(i[t]=0)}}const u=In[t];let f,v;if(u)return t==="$attrs"&&Fe(e,"get",t),u(e);if((f=a.__cssModules)&&(f=f[t]))return f;if(r!==ie&&z(r,t))return i[t]=4,r[t];if(v=l.config.globalProperties,z(v,t))return v[t]},set({_:e},t,r){const{data:n,setupState:o,ctx:s}=e;return o!==ie&&z(o,t)?(o[t]=r,!0):n!==ie&&z(n,t)?(n[t]=r,!0):z(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(s[t]=r,!0)},has({_:{data:e,setupState:t,accessCache:r,ctx:n,appContext:o,propsOptions:s}},i){let a;return!!r[i]||e!==ie&&z(e,i)||t!==ie&&z(t,i)||(a=s[0])&&z(a,i)||z(n,i)||z(In,i)||z(o.config.globalProperties,i)},defineProperty(e,t,r){return r.get!=null?e._.accessCache[t]=0:z(r,"value")&&this.set(e,t,r.value,null),Reflect.defineProperty(e,t,r)}};let ko=!0;function Cf(e){const t=Os(e),r=e.proxy,n=e.ctx;ko=!1,t.beforeCreate&&fi(t.beforeCreate,e,"bc");const{data:o,computed:s,methods:i,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:v,beforeUpdate:h,updated:_,activated:I,deactivated:A,beforeDestroy:y,beforeUnmount:M,destroyed:B,unmounted:W,render:j,renderTracked:te,renderTriggered:G,errorCaptured:O,serverPrefetch:q,expose:Q,inheritAttrs:fe,components:F,directives:se,filters:de}=t;if(c&&Pf(c,n,null,e.appContext.config.unwrapInjectedRef),i)for(const ce in i){const ne=i[ce];V(ne)&&(n[ce]=ne.bind(r))}if(o){const ce=o.call(r,r);le(ce)&&(e.data=Kt(ce))}if(ko=!0,s)for(const ce in s){const ne=s[ce],Ue=V(ne)?ne.bind(r,r):V(ne.get)?ne.get.bind(r,r):je,Ot=!V(ne)&&V(ne.set)?ne.set.bind(r):je,Be=he({get:Ue,set:Ot});Object.defineProperty(n,ce,{enumerable:!0,configurable:!0,get:()=>Be.value,set:Pe=>Be.value=Pe})}if(a)for(const ce in a)Xl(a[ce],n,r,ce);if(l){const ce=V(l)?l.call(r):l;Reflect.ownKeys(ce).forEach(ne=>{hn(ne,ce[ne])})}u&&fi(u,e,"c");function ve(ce,ne){U(ne)?ne.forEach(Ue=>ce(Ue.bind(r))):ne&&ce(ne.bind(r))}if(ve(_f,f),ve(Ss,v),ve($f,h),ve(yf,_),ve(hf,I),ve(gf,A),ve(Af,O),ve(If,te),ve(Ef,G),ve(Vl,M),ve(Un,W),ve(bf,q),U(Q))if(Q.length){const ce=e.exposed||(e.exposed={});Q.forEach(ne=>{Object.defineProperty(ce,ne,{get:()=>r[ne],set:Ue=>r[ne]=Ue})})}else e.exposed||(e.exposed={});j&&e.render===je&&(e.render=j),fe!=null&&(e.inheritAttrs=fe),F&&(e.components=F),se&&(e.directives=se)}function Pf(e,t,r=je,n=!1){U(e)&&(e=Uo(e));for(const o in e){const s=e[o];let i;le(s)?"default"in s?i=et(s.from||o,s.default,!0):i=et(s.from||o):i=et(s),me(i)&&n?Object.defineProperty(t,o,{enumerable:!0,configurable:!0,get:()=>i.value,set:a=>i.value=a}):t[o]=i}}function fi(e,t,r){ke(U(e)?e.map(n=>n.bind(t.proxy)):e.bind(t.proxy),t,r)}function Xl(e,t,r,n){const o=n.includes(".")?Bl(r,n):()=>r[n];if(Ee(e)){const s=t[e];V(s)&&Ar(o,s)}else if(V(e))Ar(o,e.bind(r));else if(le(e))if(U(e))e.forEach(s=>Xl(s,t,r,n));else{const s=V(e.handler)?e.handler.bind(r):t[e.handler];V(s)&&Ar(o,s,e)}}function Os(e){const t=e.type,{mixins:r,extends:n}=t,{mixins:o,optionsCache:s,config:{optionMergeStrategies:i}}=e.appContext,a=s.get(t);let l;return a?l=a:!o.length&&!r&&!n?l=t:(l={},o.length&&o.forEach(c=>An(l,c,i,!0)),An(l,t,i)),le(t)&&s.set(t,l),l}function An(e,t,r,n=!1){const{mixins:o,extends:s}=t;s&&An(e,s,r,!0),o&&o.forEach(i=>An(e,i,r,!0));for(const i in t)if(!(n&&i==="expose")){const a=Tf[i]||r&&r[i];e[i]=a?a(e[i],t[i]):t[i]}return e}const Tf={data:di,props:Ft,emits:Ft,methods:Ft,computed:Ft,beforeCreate:Oe,created:Oe,beforeMount:Oe,mounted:Oe,beforeUpdate:Oe,updated:Oe,beforeDestroy:Oe,beforeUnmount:Oe,destroyed:Oe,unmounted:Oe,activated:Oe,deactivated:Oe,errorCaptured:Oe,serverPrefetch:Oe,components:Ft,directives:Ft,watch:Ff,provide:di,inject:Rf};function di(e,t){return t?e?function(){return Ne(V(e)?e.call(this,this):e,V(t)?t.call(this,this):t)}:t:e}function Rf(e,t){return Ft(Uo(e),Uo(t))}function Uo(e){if(U(e)){const t={};for(let r=0;r<e.length;r++)t[e[r]]=e[r];return t}return e}function Oe(e,t){return e?[...new Set([].concat(e,t))]:t}function Ft(e,t){return e?Ne(Ne(Object.create(null),e),t):t}function Ff(e,t){if(!e)return t;if(!t)return e;const r=Ne(Object.create(null),e);for(const n in t)r[n]=Oe(e[n],t[n]);return r}function Hf(e,t,r,n=!1){const o={},s={};$n(s,Bn,1),e.propsDefaults=Object.create(null),zl(e,t,o,s);for(const i in e.propsOptions[0])i in o||(o[i]=void 0);r?e.props=n?o:ju(o):e.type.props?e.props=o:e.props=s,e.attrs=s}function Lf(e,t,r,n){const{props:o,attrs:s,vnode:{patchFlag:i}}=e,a=ee(o),[l]=e.propsOptions;let c=!1;if((n||i>0)&&!(i&16)){if(i&8){const u=e.vnode.dynamicProps;for(let f=0;f<u.length;f++){let v=u[f];if(Ln(e.emitsOptions,v))continue;const h=t[v];if(l)if(z(s,v))h!==s[v]&&(s[v]=h,c=!0);else{const _=tt(v);o[_]=Bo(l,a,_,h,e,!1)}else h!==s[v]&&(s[v]=h,c=!0)}}}else{zl(e,t,o,s)&&(c=!0);let u;for(const f in a)(!t||!z(t,f)&&((u=or(f))===f||!z(t,u)))&&(l?r&&(r[f]!==void 0||r[u]!==void 0)&&(o[f]=Bo(l,a,f,void 0,e,!0)):delete o[f]);if(s!==a)for(const f in s)(!t||!z(t,f)&&!0)&&(delete s[f],c=!0)}c&&lt(e,"set","$attrs")}function zl(e,t,r,n){const[o,s]=e.propsOptions;let i=!1,a;if(t)for(let l in t){if(vn(l))continue;const c=t[l];let u;o&&z(o,u=tt(l))?!s||!s.includes(u)?r[u]=c:(a||(a={}))[u]=c:Ln(e.emitsOptions,l)||(!(l in n)||c!==n[l])&&(n[l]=c,i=!0)}if(s){const l=ee(r),c=a||ie;for(let u=0;u<s.length;u++){const f=s[u];r[f]=Bo(o,l,f,c[f],e,!z(c,f))}}return i}function Bo(e,t,r,n,o,s){const i=e[r];if(i!=null){const a=z(i,"default");if(a&&n===void 0){const l=i.default;if(i.type!==Function&&V(l)){const{propsDefaults:c}=o;r in c?n=c[r]:(tr(o),n=c[r]=l.call(null,t),Wt())}else n=l}i[0]&&(s&&!a?n=!1:i[1]&&(n===""||n===or(r))&&(n=!0))}return n}function ql(e,t,r=!1){const n=t.propsCache,o=n.get(e);if(o)return o;const s=e.props,i={},a=[];let l=!1;if(!V(e)){const u=f=>{l=!0;const[v,h]=ql(f,t,!0);Ne(i,v),h&&a.push(...h)};!r&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!s&&!l)return le(e)&&n.set(e,Qt),Qt;if(U(s))for(let u=0;u<s.length;u++){const f=tt(s[u]);vi(f)&&(i[f]=ie)}else if(s)for(const u in s){const f=tt(u);if(vi(f)){const v=s[u],h=i[f]=U(v)||V(v)?{type:v}:v;if(h){const _=gi(Boolean,h.type),I=gi(String,h.type);h[0]=_>-1,h[1]=I<0||_<I,(_>-1||z(h,"default"))&&a.push(f)}}}const c=[i,a];return le(e)&&n.set(e,c),c}function vi(e){return e[0]!=="$"}function pi(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function hi(e,t){return pi(e)===pi(t)}function gi(e,t){return U(t)?t.findIndex(r=>hi(r,e)):V(t)&&hi(t,e)?0:-1}const Ql=e=>e[0]==="_"||e==="$stable",Cs=e=>U(e)?e.map(Ye):[Ye(e)],Mf=(e,t,r)=>{if(t._n)return t;const n=ws((...o)=>Cs(t(...o)),r);return n._c=!1,n},Yl=(e,t,r)=>{const n=e._ctx;for(const o in e){if(Ql(o))continue;const s=e[o];if(V(s))t[o]=Mf(o,s,n);else if(s!=null){const i=Cs(s);t[o]=()=>i}}},Zl=(e,t)=>{const r=Cs(t);e.slots.default=()=>r},Df=(e,t)=>{if(e.vnode.shapeFlag&32){const r=t._;r?(e.slots=ee(t),$n(t,"_",r)):Yl(t,e.slots={})}else e.slots={},t&&Zl(e,t);$n(e.slots,Bn,1)},kf=(e,t,r)=>{const{vnode:n,slots:o}=e;let s=!0,i=ie;if(n.shapeFlag&32){const a=t._;a?r&&a===1?s=!1:(Ne(o,t),!r&&a===1&&delete o._):(s=!t.$stable,Yl(t,o)),i=t}else t&&(Zl(e,t),i={default:1});if(s)for(const a in o)!Ql(a)&&!(a in i)&&delete o[a]};function Jl(){return{app:null,config:{isNativeTag:fu,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Uf=0;function Bf(e,t){return function(n,o=null){V(n)||(n=Object.assign({},n)),o!=null&&!le(o)&&(o=null);const s=Jl(),i=new Set;let a=!1;const l=s.app={_uid:Uf++,_component:n,_props:o,_container:null,_context:s,_instance:null,version:i0,get config(){return s.config},set config(c){},use(c,...u){return i.has(c)||(c&&V(c.install)?(i.add(c),c.install(l,...u)):V(c)&&(i.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,f){if(!a){const v=ye(n,o);return v.appContext=s,u&&t?t(v,c):e(v,c,f),a=!0,l._container=c,c.__vue_app__=l,Wn(v.component)||v.component.proxy}},unmount(){a&&(e(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l}};return l}}function Wo(e,t,r,n,o=!1){if(U(e)){e.forEach((v,h)=>Wo(v,t&&(U(t)?t[h]:t),r,n,o));return}if(gn(n)&&!o)return;const s=n.shapeFlag&4?Wn(n.component)||n.component.proxy:n.el,i=o?null:s,{i:a,r:l}=e,c=t&&t.r,u=a.refs===ie?a.refs={}:a.refs,f=a.setupState;if(c!=null&&c!==l&&(Ee(c)?(u[c]=null,z(f,c)&&(f[c]=null)):me(c)&&(c.value=null)),V(l))It(l,a,12,[i,u]);else{const v=Ee(l),h=me(l);if(v||h){const _=()=>{if(e.f){const I=v?z(f,l)?f[l]:u[l]:l.value;o?U(I)&&ps(I,s):U(I)?I.includes(s)||I.push(s):v?(u[l]=[s],z(f,l)&&(f[l]=u[l])):(l.value=[s],e.k&&(u[e.k]=l.value))}else v?(u[l]=i,z(f,l)&&(f[l]=i)):h&&(l.value=i,e.k&&(u[e.k]=i))};i?(_.id=-1,Te(_,r)):_()}}}const Te=ff;function Wf(e){return Kf(e)}function Kf(e,t){const r=mu();r.__VUE__=!0;const{insert:n,remove:o,patchProp:s,createElement:i,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:v,setScopeId:h=je,insertStaticContent:_}=e,I=(d,p,g,m=null,b=null,w=null,P=!1,N=null,S=!!p.dynamicChildren)=>{if(d===p)return;d&&!Lt(d,p)&&(m=C(d),Pe(d,b,w,!0),d=null),p.patchFlag===-2&&(S=!1,p.dynamicChildren=null);const{type:E,ref:D,shapeFlag:H}=p;switch(E){case Ps:A(d,p,g,m);break;case Ve:y(d,p,g,m);break;case Jn:d==null&&M(p,g,m,P);break;case ae:F(d,p,g,m,b,w,P,N,S);break;default:H&1?j(d,p,g,m,b,w,P,N,S):H&6?se(d,p,g,m,b,w,P,N,S):(H&64||H&128)&&E.process(d,p,g,m,b,w,P,N,S,Y)}D!=null&&b&&Wo(D,d&&d.ref,w,p||d,!p)},A=(d,p,g,m)=>{if(d==null)n(p.el=a(p.children),g,m);else{const b=p.el=d.el;p.children!==d.children&&c(b,p.children)}},y=(d,p,g,m)=>{d==null?n(p.el=l(p.children||""),g,m):p.el=d.el},M=(d,p,g,m)=>{[d.el,d.anchor]=_(d.children,p,g,m,d.el,d.anchor)},B=({el:d,anchor:p},g,m)=>{let b;for(;d&&d!==p;)b=v(d),n(d,g,m),d=b;n(p,g,m)},W=({el:d,anchor:p})=>{let g;for(;d&&d!==p;)g=v(d),o(d),d=g;o(p)},j=(d,p,g,m,b,w,P,N,S)=>{P=P||p.type==="svg",d==null?te(p,g,m,b,w,P,N,S):q(d,p,b,w,P,N,S)},te=(d,p,g,m,b,w,P,N)=>{let S,E;const{type:D,props:H,shapeFlag:k,transition:K,dirs:X}=d;if(S=d.el=i(d.type,w,H&&H.is,H),k&8?u(S,d.children):k&16&&O(d.children,S,null,m,b,w&&D!=="foreignObject",P,N),X&&Ct(d,null,m,"created"),H){for(const oe in H)oe!=="value"&&!vn(oe)&&s(S,oe,null,H[oe],w,d.children,m,b,T);"value"in H&&s(S,"value",null,H.value),(E=H.onVnodeBeforeMount)&&qe(E,m,d)}G(S,d,d.scopeId,P,m),X&&Ct(d,null,m,"beforeMount");const ue=(!b||b&&!b.pendingBranch)&&K&&!K.persisted;ue&&K.beforeEnter(S),n(S,p,g),((E=H&&H.onVnodeMounted)||ue||X)&&Te(()=>{E&&qe(E,m,d),ue&&K.enter(S),X&&Ct(d,null,m,"mounted")},b)},G=(d,p,g,m,b)=>{if(g&&h(d,g),m)for(let w=0;w<m.length;w++)h(d,m[w]);if(b){let w=b.subTree;if(p===w){const P=b.vnode;G(d,P,P.scopeId,P.slotScopeIds,b.parent)}}},O=(d,p,g,m,b,w,P,N,S=0)=>{for(let E=S;E<d.length;E++){const D=d[E]=N?mt(d[E]):Ye(d[E]);I(null,D,p,g,m,b,w,P,N)}},q=(d,p,g,m,b,w,P)=>{const N=p.el=d.el;let{patchFlag:S,dynamicChildren:E,dirs:D}=p;S|=d.patchFlag&16;const H=d.props||ie,k=p.props||ie;let K;g&&Pt(g,!1),(K=k.onVnodeBeforeUpdate)&&qe(K,g,p,d),D&&Ct(p,d,g,"beforeUpdate"),g&&Pt(g,!0);const X=b&&p.type!=="foreignObject";if(E?Q(d.dynamicChildren,E,N,g,m,X,w):P||ne(d,p,N,null,g,m,X,w,!1),S>0){if(S&16)fe(N,p,H,k,g,m,b);else if(S&2&&H.class!==k.class&&s(N,"class",null,k.class,b),S&4&&s(N,"style",H.style,k.style,b),S&8){const ue=p.dynamicProps;for(let oe=0;oe<ue.length;oe++){const _e=ue[oe],We=H[_e],Vt=k[_e];(Vt!==We||_e==="value")&&s(N,_e,We,Vt,b,d.children,g,m,T)}}S&1&&d.children!==p.children&&u(N,p.children)}else!P&&E==null&&fe(N,p,H,k,g,m,b);((K=k.onVnodeUpdated)||D)&&Te(()=>{K&&qe(K,g,p,d),D&&Ct(p,d,g,"updated")},m)},Q=(d,p,g,m,b,w,P)=>{for(let N=0;N<p.length;N++){const S=d[N],E=p[N],D=S.el&&(S.type===ae||!Lt(S,E)||S.shapeFlag&70)?f(S.el):g;I(S,E,D,null,m,b,w,P,!0)}},fe=(d,p,g,m,b,w,P)=>{if(g!==m){if(g!==ie)for(const N in g)!vn(N)&&!(N in m)&&s(d,N,g[N],null,P,p.children,b,w,T);for(const N in m){if(vn(N))continue;const S=m[N],E=g[N];S!==E&&N!=="value"&&s(d,N,E,S,P,p.children,b,w,T)}"value"in m&&s(d,"value",g.value,m.value)}},F=(d,p,g,m,b,w,P,N,S)=>{const E=p.el=d?d.el:a(""),D=p.anchor=d?d.anchor:a("");let{patchFlag:H,dynamicChildren:k,slotScopeIds:K}=p;K&&(N=N?N.concat(K):K),d==null?(n(E,g,m),n(D,g,m),O(p.children,g,D,b,w,P,N,S)):H>0&&H&64&&k&&d.dynamicChildren?(Q(d.dynamicChildren,k,g,b,w,P,N),(p.key!=null||b&&p===b.subTree)&&ec(d,p,!0)):ne(d,p,g,D,b,w,P,N,S)},se=(d,p,g,m,b,w,P,N,S)=>{p.slotScopeIds=N,d==null?p.shapeFlag&512?b.ctx.activate(p,g,m,P,S):de(p,g,m,b,w,P,S):ge(d,p,S)},de=(d,p,g,m,b,w,P)=>{const N=d.component=Jf(d,m,b);if(Dn(d)&&(N.ctx.renderer=Y),e0(N),N.asyncDep){if(b&&b.registerDep(N,ve),!d.el){const S=N.subTree=ye(Ve);y(null,S,p,g)}return}ve(N,d,p,g,b,w,P)},ge=(d,p,g)=>{const m=p.component=d.component;if(lf(d,p,g))if(m.asyncDep&&!m.asyncResolved){ce(m,p,g);return}else m.next=p,tf(m.update),m.update();else p.el=d.el,m.vnode=p},ve=(d,p,g,m,b,w,P)=>{const N=()=>{if(d.isMounted){let{next:D,bu:H,u:k,parent:K,vnode:X}=d,ue=D,oe;Pt(d,!1),D?(D.el=X.el,ce(d,D,P)):D=X,H&&pn(H),(oe=D.props&&D.props.onVnodeBeforeUpdate)&&qe(oe,K,D,X),Pt(d,!0);const _e=Yn(d),We=d.subTree;d.subTree=_e,I(We,_e,f(We.el),C(We),d,b,w),D.el=_e.el,ue===null&&cf(d,_e.el),k&&Te(k,b),(oe=D.props&&D.props.onVnodeUpdated)&&Te(()=>qe(oe,K,D,X),b)}else{let D;const{el:H,props:k}=p,{bm:K,m:X,parent:ue}=d,oe=gn(p);if(Pt(d,!1),K&&pn(K),!oe&&(D=k&&k.onVnodeBeforeMount)&&qe(D,ue,p),Pt(d,!0),H&&x){const _e=()=>{d.subTree=Yn(d),x(H,d.subTree,d,b,null)};oe?p.type.__asyncLoader().then(()=>!d.isUnmounted&&_e()):_e()}else{const _e=d.subTree=Yn(d);I(null,_e,g,m,d,b,w),p.el=_e.el}if(X&&Te(X,b),!oe&&(D=k&&k.onVnodeMounted)){const _e=p;Te(()=>qe(D,ue,_e),b)}(p.shapeFlag&256||ue&&gn(ue.vnode)&&ue.vnode.shapeFlag&256)&&d.a&&Te(d.a,b),d.isMounted=!0,p=g=m=null}},S=d.effect=new ms(N,()=>Ns(E),d.scope),E=d.update=()=>S.run();E.id=d.uid,Pt(d,!0),E()},ce=(d,p,g)=>{p.component=d;const m=d.vnode.props;d.vnode=p,d.next=null,Lf(d,p.props,m,g),kf(d,p.children,g),sr(),ii(),ir()},ne=(d,p,g,m,b,w,P,N,S=!1)=>{const E=d&&d.children,D=d?d.shapeFlag:0,H=p.children,{patchFlag:k,shapeFlag:K}=p;if(k>0){if(k&128){Ot(E,H,g,m,b,w,P,N,S);return}else if(k&256){Ue(E,H,g,m,b,w,P,N,S);return}}K&8?(D&16&&T(E,b,w),H!==E&&u(g,H)):D&16?K&16?Ot(E,H,g,m,b,w,P,N,S):T(E,b,w,!0):(D&8&&u(g,""),K&16&&O(H,g,m,b,w,P,N,S))},Ue=(d,p,g,m,b,w,P,N,S)=>{d=d||Qt,p=p||Qt;const E=d.length,D=p.length,H=Math.min(E,D);let k;for(k=0;k<H;k++){const K=p[k]=S?mt(p[k]):Ye(p[k]);I(d[k],K,g,null,b,w,P,N,S)}E>D?T(d,b,w,!0,!1,H):O(p,g,m,b,w,P,N,S,H)},Ot=(d,p,g,m,b,w,P,N,S)=>{let E=0;const D=p.length;let H=d.length-1,k=D-1;for(;E<=H&&E<=k;){const K=d[E],X=p[E]=S?mt(p[E]):Ye(p[E]);if(Lt(K,X))I(K,X,g,null,b,w,P,N,S);else break;E++}for(;E<=H&&E<=k;){const K=d[H],X=p[k]=S?mt(p[k]):Ye(p[k]);if(Lt(K,X))I(K,X,g,null,b,w,P,N,S);else break;H--,k--}if(E>H){if(E<=k){const K=k+1,X=K<D?p[K].el:m;for(;E<=k;)I(null,p[E]=S?mt(p[E]):Ye(p[E]),g,X,b,w,P,N,S),E++}}else if(E>k)for(;E<=H;)Pe(d[E],b,w,!0),E++;else{const K=E,X=E,ue=new Map;for(E=X;E<=k;E++){const Re=p[E]=S?mt(p[E]):Ye(p[E]);Re.key!=null&&ue.set(Re.key,E)}let oe,_e=0;const We=k-X+1;let Vt=!1,zs=0;const vr=new Array(We);for(E=0;E<We;E++)vr[E]=0;for(E=K;E<=H;E++){const Re=d[E];if(_e>=We){Pe(Re,b,w,!0);continue}let ze;if(Re.key!=null)ze=ue.get(Re.key);else for(oe=X;oe<=k;oe++)if(vr[oe-X]===0&&Lt(Re,p[oe])){ze=oe;break}ze===void 0?Pe(Re,b,w,!0):(vr[ze-X]=E+1,ze>=zs?zs=ze:Vt=!0,I(Re,p[ze],g,null,b,w,P,N,S),_e++)}const qs=Vt?Gf(vr):Qt;for(oe=qs.length-1,E=We-1;E>=0;E--){const Re=X+E,ze=p[Re],Qs=Re+1<D?p[Re+1].el:m;vr[E]===0?I(null,ze,g,Qs,b,w,P,N,S):Vt&&(oe<0||E!==qs[oe]?Be(ze,g,Qs,2):oe--)}}},Be=(d,p,g,m,b=null)=>{const{el:w,type:P,transition:N,children:S,shapeFlag:E}=d;if(E&6){Be(d.component.subTree,p,g,m);return}if(E&128){d.suspense.move(p,g,m);return}if(E&64){P.move(d,p,g,Y);return}if(P===ae){n(w,p,g);for(let H=0;H<S.length;H++)Be(S[H],p,g,m);n(d.anchor,p,g);return}if(P===Jn){B(d,p,g);return}if(m!==2&&E&1&&N)if(m===0)N.beforeEnter(w),n(w,p,g),Te(()=>N.enter(w),b);else{const{leave:H,delayLeave:k,afterLeave:K}=N,X=()=>n(w,p,g),ue=()=>{H(w,()=>{X(),K&&K()})};k?k(w,X,ue):ue()}else n(w,p,g)},Pe=(d,p,g,m=!1,b=!1)=>{const{type:w,props:P,ref:N,children:S,dynamicChildren:E,shapeFlag:D,patchFlag:H,dirs:k}=d;if(N!=null&&Wo(N,null,g,d,!0),D&256){p.ctx.deactivate(d);return}const K=D&1&&k,X=!gn(d);let ue;if(X&&(ue=P&&P.onVnodeBeforeUnmount)&&qe(ue,p,d),D&6)$(d.component,g,m);else{if(D&128){d.suspense.unmount(g,m);return}K&&Ct(d,null,p,"beforeUnmount"),D&64?d.type.remove(d,p,g,b,Y,m):E&&(w!==ae||H>0&&H&64)?T(E,p,g,!1,!0):(w===ae&&H&384||!b&&D&16)&&T(S,p,g),m&&jt(d)}(X&&(ue=P&&P.onVnodeUnmounted)||K)&&Te(()=>{ue&&qe(ue,p,d),K&&Ct(d,null,p,"unmounted")},g)},jt=d=>{const{type:p,el:g,anchor:m,transition:b}=d;if(p===ae){Gr(g,m);return}if(p===Jn){W(d);return}const w=()=>{o(g),b&&!b.persisted&&b.afterLeave&&b.afterLeave()};if(d.shapeFlag&1&&b&&!b.persisted){const{leave:P,delayLeave:N}=b,S=()=>P(g,w);N?N(d.el,w,S):S()}else w()},Gr=(d,p)=>{let g;for(;d!==p;)g=v(d),o(d),d=g;o(p)},$=(d,p,g)=>{const{bum:m,scope:b,update:w,subTree:P,um:N}=d;m&&pn(m),b.stop(),w&&(w.active=!1,Pe(P,d,p,g)),N&&Te(N,p),Te(()=>{d.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},T=(d,p,g,m=!1,b=!1,w=0)=>{for(let P=w;P<d.length;P++)Pe(d[P],p,g,m,b)},C=d=>d.shapeFlag&6?C(d.component.subTree):d.shapeFlag&128?d.suspense.next():v(d.anchor||d.el),L=(d,p,g)=>{d==null?p._vnode&&Pe(p._vnode,null,null,!0):I(p._vnode||null,d,p,null,null,null,g),ii(),Ml(),p._vnode=d},Y={p:I,um:Pe,m:Be,r:jt,mt:de,mc:O,pc:ne,pbc:Q,n:C,o:e};let pe,x;return t&&([pe,x]=t(Y)),{render:L,hydrate:pe,createApp:Bf(L,pe)}}function Pt({effect:e,update:t},r){e.allowRecurse=t.allowRecurse=r}function ec(e,t,r=!1){const n=e.children,o=t.children;if(U(n)&&U(o))for(let s=0;s<n.length;s++){const i=n[s];let a=o[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=o[s]=mt(o[s]),a.el=i.el),r||ec(i,a))}}function Gf(e){const t=e.slice(),r=[0];let n,o,s,i,a;const l=e.length;for(n=0;n<l;n++){const c=e[n];if(c!==0){if(o=r[r.length-1],e[o]<c){t[n]=o,r.push(n);continue}for(s=0,i=r.length-1;s<i;)a=s+i>>1,e[r[a]]<c?s=a+1:i=a;c<e[r[s]]&&(s>0&&(t[n]=r[s-1]),r[s]=n)}}for(s=r.length,i=r[s-1];s-- >0;)r[s]=i,i=t[i];return r}const jf=e=>e.__isTeleport,ae=Symbol(void 0),Ps=Symbol(void 0),Ve=Symbol(void 0),Jn=Symbol(void 0),Nr=[];let Ge=null;function Z(e=!1){Nr.push(Ge=e?null:[])}function Vf(){Nr.pop(),Ge=Nr[Nr.length-1]||null}let Hr=1;function mi(e){Hr+=e}function tc(e){return e.dynamicChildren=Hr>0?Ge||Qt:null,Vf(),Hr>0&&Ge&&Ge.push(e),e}function J(e,t,r,n,o,s){return tc(R(e,t,r,n,o,s,!0))}function xf(e,t,r,n,o){return tc(ye(e,t,r,n,o,!0))}function Ko(e){return e?e.__v_isVNode===!0:!1}function Lt(e,t){return e.type===t.type&&e.key===t.key}const Bn="__vInternal",rc=({key:e})=>e!=null?e:null,_n=({ref:e,ref_key:t,ref_for:r})=>e!=null?Ee(e)||me(e)||V(e)?{i:De,r:e,k:t,f:!!r}:e:null;function R(e,t=null,r=null,n=0,o=null,s=e===ae?0:1,i=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&rc(t),ref:t&&_n(t),scopeId:Mn,slotScopeIds:null,children:r,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:n,dynamicProps:o,dynamicChildren:null,appContext:null};return a?(Ts(l,r),s&128&&e.normalize(l)):r&&(l.shapeFlag|=Ee(r)?8:16),Hr>0&&!i&&Ge&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Ge.push(l),l}const ye=Xf;function Xf(e,t=null,r=null,n=0,o=null,s=!1){if((!e||e===wf)&&(e=Ve),Ko(e)){const a=wt(e,t,!0);return r&&Ts(a,r),Hr>0&&!s&&Ge&&(a.shapeFlag&6?Ge[Ge.indexOf(e)]=a:Ge.push(a)),a.patchFlag|=-2,a}if(s0(e)&&(e=e.__vccOpts),t){t=zf(t);let{class:a,style:l}=t;a&&!Ee(a)&&(t.class=yt(a)),le(l)&&(Ol(l)&&!U(l)&&(l=Ne({},l)),t.style=Sn(l))}const i=Ee(e)?1:uf(e)?128:jf(e)?64:le(e)?4:V(e)?2:0;return R(e,t,r,n,o,i,s,!0)}function zf(e){return e?Ol(e)||Bn in e?Ne({},e):e:null}function wt(e,t,r=!1){const{props:n,ref:o,patchFlag:s,children:i}=e,a=t?Qf(n||{},t):n;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:a,key:a&&rc(a),ref:t&&t.ref?r&&o?U(o)?o.concat(_n(t)):[o,_n(t)]:_n(t):o,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:i,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==ae?s===-1?16:s|16:s,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&wt(e.ssContent),ssFallback:e.ssFallback&&wt(e.ssFallback),el:e.el,anchor:e.anchor}}function At(e=" ",t=0){return ye(Ps,null,e,t)}function qf(e="",t=!1){return t?(Z(),xf(Ve,null,e)):ye(Ve,null,e)}function Ye(e){return e==null||typeof e=="boolean"?ye(Ve):U(e)?ye(ae,null,e.slice()):typeof e=="object"?mt(e):ye(Ps,null,String(e))}function mt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:wt(e)}function Ts(e,t){let r=0;const{shapeFlag:n}=e;if(t==null)t=null;else if(U(t))r=16;else if(typeof t=="object")if(n&65){const o=t.default;o&&(o._c&&(o._d=!1),Ts(e,o()),o._c&&(o._d=!0));return}else{r=32;const o=t._;!o&&!(Bn in t)?t._ctx=De:o===3&&De&&(De.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else V(t)?(t={default:t,_ctx:De},r=32):(t=String(t),n&64?(r=16,t=[At(t)]):r=8);e.children=t,e.shapeFlag|=r}function Qf(...e){const t={};for(let r=0;r<e.length;r++){const n=e[r];for(const o in n)if(o==="class")t.class!==n.class&&(t.class=yt([t.class,n.class]));else if(o==="style")t.style=Sn([t.style,n.style]);else if(Cn(o)){const s=t[o],i=n[o];i&&s!==i&&!(U(s)&&s.includes(i))&&(t[o]=s?[].concat(s,i):i)}else o!==""&&(t[o]=n[o])}return t}function qe(e,t,r,n=null){ke(e,t,7,[r,n])}const Yf=Jl();let Zf=0;function Jf(e,t,r){const n=e.type,o=(t?t.appContext:e.appContext)||Yf,s={uid:Zf++,vnode:e,type:n,parent:t,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,scope:new hl(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(o.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ql(n,o),emitsOptions:kl(n,o),emit:null,emitted:null,propsDefaults:ie,inheritAttrs:n.inheritAttrs,ctx:ie,data:ie,props:ie,attrs:ie,slots:ie,refs:ie,setupState:ie,setupContext:null,suspense:r,suspenseId:r?r.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=t?t.root:s,s.emit=of.bind(null,s),e.ce&&e.ce(s),s}let be=null;const Rs=()=>be||De,tr=e=>{be=e,e.scope.on()},Wt=()=>{be&&be.scope.off(),be=null};function nc(e){return e.vnode.shapeFlag&4}let Lr=!1;function e0(e,t=!1){Lr=t;const{props:r,children:n}=e.vnode,o=nc(e);Hf(e,r,o,t),Df(e,n);const s=o?t0(e,t):void 0;return Lr=!1,s}function t0(e,t){const r=e.type;e.accessCache=Object.create(null),e.proxy=er(new Proxy(e.ctx,Of));const{setup:n}=r;if(n){const o=e.setupContext=n.length>1?n0(e):null;tr(e),sr();const s=It(n,e,0,[e.props,o]);if(ir(),Wt(),dl(s)){if(s.then(Wt,Wt),t)return s.then(i=>{_i(e,i,t)}).catch(i=>{Hn(i,e,0)});e.asyncDep=s}else _i(e,s,t)}else oc(e,t)}function _i(e,t,r){V(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:le(t)&&(e.setupState=Rl(t)),oc(e,r)}let $i;function oc(e,t,r){const n=e.type;if(!e.render){if(!t&&$i&&!n.render){const o=n.template||Os(e).template;if(o){const{isCustomElement:s,compilerOptions:i}=e.appContext.config,{delimiters:a,compilerOptions:l}=n,c=Ne(Ne({isCustomElement:s,delimiters:a},i),l);n.render=$i(o,c)}}e.render=n.render||je}tr(e),sr(),Cf(e),ir(),Wt()}function r0(e){return new Proxy(e.attrs,{get(t,r){return Fe(e,"get","$attrs"),t[r]}})}function n0(e){const t=n=>{e.exposed=n||{}};let r;return{get attrs(){return r||(r=r0(e))},slots:e.slots,emit:e.emit,expose:t}}function Wn(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Rl(er(e.exposed)),{get(t,r){if(r in t)return t[r];if(r in In)return In[r](e)}}))}function o0(e,t=!0){return V(e)?e.displayName||e.name:e.name||t&&e.__name}function s0(e){return V(e)&&"__vccOpts"in e}const he=(e,t)=>Zu(e,t,Lr);function Fs(e,t,r){const n=arguments.length;return n===2?le(t)&&!U(t)?Ko(t)?ye(e,null,[t]):ye(e,t):ye(e,null,t):(n>3?r=Array.prototype.slice.call(arguments,2):n===3&&Ko(r)&&(r=[r]),ye(e,t,r))}const i0="3.2.41",a0="http://www.w3.org/2000/svg",Mt=typeof document<"u"?document:null,yi=Mt&&Mt.createElement("template"),l0={insert:(e,t,r)=>{t.insertBefore(e,r||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,r,n)=>{const o=t?Mt.createElementNS(a0,e):Mt.createElement(e,r?{is:r}:void 0);return e==="select"&&n&&n.multiple!=null&&o.setAttribute("multiple",n.multiple),o},createText:e=>Mt.createTextNode(e),createComment:e=>Mt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Mt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,r,n,o,s){const i=r?r.previousSibling:t.lastChild;if(o&&(o===s||o.nextSibling))for(;t.insertBefore(o.cloneNode(!0),r),!(o===s||!(o=o.nextSibling)););else{yi.innerHTML=n?`<svg>${e}</svg>`:e;const a=yi.content;if(n){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,r)}return[i?i.nextSibling:t.firstChild,r?r.previousSibling:t.lastChild]}};function c0(e,t,r){const n=e._vtc;n&&(t=(t?[t,...n]:[...n]).join(" ")),t==null?e.removeAttribute("class"):r?e.setAttribute("class",t):e.className=t}function u0(e,t,r){const n=e.style,o=Ee(r);if(r&&!o){for(const s in r)Go(n,s,r[s]);if(t&&!Ee(t))for(const s in t)r[s]==null&&Go(n,s,"")}else{const s=n.display;o?t!==r&&(n.cssText=r):t&&e.removeAttribute("style"),"_vod"in e&&(n.display=s)}}const bi=/\s*!important$/;function Go(e,t,r){if(U(r))r.forEach(n=>Go(e,t,n));else if(r==null&&(r=""),t.startsWith("--"))e.setProperty(t,r);else{const n=f0(e,t);bi.test(r)?e.setProperty(or(n),r.replace(bi,""),"important"):e[n]=r}}const Ei=["Webkit","Moz","ms"],eo={};function f0(e,t){const r=eo[t];if(r)return r;let n=tt(t);if(n!=="filter"&&n in e)return eo[t]=n;n=Rn(n);for(let o=0;o<Ei.length;o++){const s=Ei[o]+n;if(s in e)return eo[t]=s}return t}const Ii="http://www.w3.org/1999/xlink";function d0(e,t,r,n,o){if(n&&t.startsWith("xlink:"))r==null?e.removeAttributeNS(Ii,t.slice(6,t.length)):e.setAttributeNS(Ii,t,r);else{const s=iu(t);r==null||s&&!cl(r)?e.removeAttribute(t):e.setAttribute(t,s?"":r)}}function v0(e,t,r,n,o,s,i){if(t==="innerHTML"||t==="textContent"){n&&i(n,o,s),e[t]=r==null?"":r;return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=r;const l=r==null?"":r;(e.value!==l||e.tagName==="OPTION")&&(e.value=l),r==null&&e.removeAttribute(t);return}let a=!1;if(r===""||r==null){const l=typeof e[t];l==="boolean"?r=cl(r):r==null&&l==="string"?(r="",a=!0):l==="number"&&(r=0,a=!0)}try{e[t]=r}catch{}a&&e.removeAttribute(t)}function Dt(e,t,r,n){e.addEventListener(t,r,n)}function p0(e,t,r,n){e.removeEventListener(t,r,n)}function h0(e,t,r,n,o=null){const s=e._vei||(e._vei={}),i=s[t];if(n&&i)i.value=n;else{const[a,l]=g0(t);if(n){const c=s[t]=$0(n,o);Dt(e,a,c,l)}else i&&(p0(e,a,i,l),s[t]=void 0)}}const Ai=/(?:Once|Passive|Capture)$/;function g0(e){let t;if(Ai.test(e)){t={};let n;for(;n=e.match(Ai);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):or(e.slice(2)),t]}let to=0;const m0=Promise.resolve(),_0=()=>to||(m0.then(()=>to=0),to=Date.now());function $0(e,t){const r=n=>{if(!n._vts)n._vts=Date.now();else if(n._vts<=r.attached)return;ke(y0(n,r.value),t,5,[n])};return r.value=e,r.attached=_0(),r}function y0(e,t){if(U(t)){const r=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{r.call(e),e._stopped=!0},t.map(n=>o=>!o._stopped&&n&&n(o))}else return t}const Ni=/^on[a-z]/,b0=(e,t,r,n,o=!1,s,i,a,l)=>{t==="class"?c0(e,n,o):t==="style"?u0(e,r,n):Cn(t)?vs(t)||h0(e,t,r,n,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):E0(e,t,n,o))?v0(e,t,n,s,i,a,l):(t==="true-value"?e._trueValue=n:t==="false-value"&&(e._falseValue=n),d0(e,t,n,o))};function E0(e,t,r,n){return n?!!(t==="innerHTML"||t==="textContent"||t in e&&Ni.test(t)&&V(r)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Ni.test(t)&&Ee(r)?!1:t in e}const ft="transition",pr="animation",Hs=(e,{slots:t})=>Fs(Wl,I0(e),t);Hs.displayName="Transition";const sc={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Hs.props=Ne({},Wl.props,sc);const Tt=(e,t=[])=>{U(e)?e.forEach(r=>r(...t)):e&&e(...t)},wi=e=>e?U(e)?e.some(t=>t.length>1):e.length>1:!1;function I0(e){const t={};for(const F in e)F in sc||(t[F]=e[F]);if(e.css===!1)return t;const{name:r="v",type:n,duration:o,enterFromClass:s=`${r}-enter-from`,enterActiveClass:i=`${r}-enter-active`,enterToClass:a=`${r}-enter-to`,appearFromClass:l=s,appearActiveClass:c=i,appearToClass:u=a,leaveFromClass:f=`${r}-leave-from`,leaveActiveClass:v=`${r}-leave-active`,leaveToClass:h=`${r}-leave-to`}=e,_=A0(o),I=_&&_[0],A=_&&_[1],{onBeforeEnter:y,onEnter:M,onEnterCancelled:B,onLeave:W,onLeaveCancelled:j,onBeforeAppear:te=y,onAppear:G=M,onAppearCancelled:O=B}=t,q=(F,se,de)=>{Rt(F,se?u:a),Rt(F,se?c:i),de&&de()},Q=(F,se)=>{F._isLeaving=!1,Rt(F,f),Rt(F,h),Rt(F,v),se&&se()},fe=F=>(se,de)=>{const ge=F?G:M,ve=()=>q(se,F,de);Tt(ge,[se,ve]),Si(()=>{Rt(se,F?l:s),dt(se,F?u:a),wi(ge)||Oi(se,n,I,ve)})};return Ne(t,{onBeforeEnter(F){Tt(y,[F]),dt(F,s),dt(F,i)},onBeforeAppear(F){Tt(te,[F]),dt(F,l),dt(F,c)},onEnter:fe(!1),onAppear:fe(!0),onLeave(F,se){F._isLeaving=!0;const de=()=>Q(F,se);dt(F,f),S0(),dt(F,v),Si(()=>{!F._isLeaving||(Rt(F,f),dt(F,h),wi(W)||Oi(F,n,A,de))}),Tt(W,[F,de])},onEnterCancelled(F){q(F,!1),Tt(B,[F])},onAppearCancelled(F){q(F,!0),Tt(O,[F])},onLeaveCancelled(F){Q(F),Tt(j,[F])}})}function A0(e){if(e==null)return null;if(le(e))return[ro(e.enter),ro(e.leave)];{const t=ro(e);return[t,t]}}function ro(e){return yn(e)}function dt(e,t){t.split(/\s+/).forEach(r=>r&&e.classList.add(r)),(e._vtc||(e._vtc=new Set)).add(t)}function Rt(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.remove(n));const{_vtc:r}=e;r&&(r.delete(t),r.size||(e._vtc=void 0))}function Si(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let N0=0;function Oi(e,t,r,n){const o=e._endId=++N0,s=()=>{o===e._endId&&n()};if(r)return setTimeout(s,r);const{type:i,timeout:a,propCount:l}=w0(e,t);if(!i)return n();const c=i+"end";let u=0;const f=()=>{e.removeEventListener(c,v),s()},v=h=>{h.target===e&&++u>=l&&f()};setTimeout(()=>{u<l&&f()},a+1),e.addEventListener(c,v)}function w0(e,t){const r=window.getComputedStyle(e),n=_=>(r[_]||"").split(", "),o=n(ft+"Delay"),s=n(ft+"Duration"),i=Ci(o,s),a=n(pr+"Delay"),l=n(pr+"Duration"),c=Ci(a,l);let u=null,f=0,v=0;t===ft?i>0&&(u=ft,f=i,v=s.length):t===pr?c>0&&(u=pr,f=c,v=l.length):(f=Math.max(i,c),u=f>0?i>c?ft:pr:null,v=u?u===ft?s.length:l.length:0);const h=u===ft&&/\b(transform|all)(,|$)/.test(r[ft+"Property"]);return{type:u,timeout:f,propCount:v,hasTransform:h}}function Ci(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((r,n)=>Pi(r)+Pi(e[n])))}function Pi(e){return Number(e.slice(0,-1).replace(",","."))*1e3}function S0(){return document.body.offsetHeight}const Nn=e=>{const t=e.props["onUpdate:modelValue"]||!1;return U(t)?r=>pn(t,r):t};function O0(e){e.target.composing=!0}function Ti(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const C0={created(e,{modifiers:{lazy:t,trim:r,number:n}},o){e._assign=Nn(o);const s=n||o.props&&o.props.type==="number";Dt(e,t?"change":"input",i=>{if(i.target.composing)return;let a=e.value;r&&(a=a.trim()),s&&(a=yn(a)),e._assign(a)}),r&&Dt(e,"change",()=>{e.value=e.value.trim()}),t||(Dt(e,"compositionstart",O0),Dt(e,"compositionend",Ti),Dt(e,"change",Ti))},mounted(e,{value:t}){e.value=t==null?"":t},beforeUpdate(e,{value:t,modifiers:{lazy:r,trim:n,number:o}},s){if(e._assign=Nn(s),e.composing||document.activeElement===e&&e.type!=="range"&&(r||n&&e.value.trim()===t||(o||e.type==="number")&&yn(e.value)===t))return;const i=t==null?"":t;e.value!==i&&(e.value=i)}},no={deep:!0,created(e,t,r){e._assign=Nn(r),Dt(e,"change",()=>{const n=e._modelValue,o=P0(e),s=e.checked,i=e._assign;if(U(n)){const a=ul(n,o),l=a!==-1;if(s&&!l)i(n.concat(o));else if(!s&&l){const c=[...n];c.splice(a,1),i(c)}}else if(Pn(n)){const a=new Set(n);s?a.add(o):a.delete(o),i(a)}else i(ic(e,s))})},mounted:Ri,beforeUpdate(e,t,r){e._assign=Nn(r),Ri(e,t,r)}};function Ri(e,{value:t,oldValue:r},n){e._modelValue=t,U(t)?e.checked=ul(t,n.props.value)>-1:Pn(t)?e.checked=t.has(n.props.value):t!==r&&(e.checked=On(t,ic(e,!0)))}function P0(e){return"_value"in e?e._value:e.value}function ic(e,t){const r=t?"_trueValue":"_falseValue";return r in e?e[r]:t}const T0=["ctrl","shift","alt","meta"],R0={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>T0.some(r=>e[`${r}Key`]&&!t.includes(r))},F0=(e,t)=>(r,...n)=>{for(let o=0;o<t.length;o++){const s=R0[t[o]];if(s&&s(r,t))return}return e(r,...n)},H0=Ne({patchProp:b0},l0);let Fi;function L0(){return Fi||(Fi=Wf(H0))}const M0=(...e)=>{const t=L0().createApp(...e),{mount:r}=t;return t.mount=n=>{const o=D0(n);if(!o)return;const s=t._component;!V(s)&&!s.render&&!s.template&&(s.template=o.innerHTML),o.innerHTML="";const i=r(o,!1,o instanceof SVGElement);return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),i},t};function D0(e){return Ee(e)?document.querySelector(e):e}var k0=!1;/*!
  * pinia v2.0.23
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */let ac;const Kn=e=>ac=e,lc=Symbol();function jo(e){return e&&typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"&&typeof e.toJSON!="function"}var wr;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(wr||(wr={}));function U0(){const e=gl(!0),t=e.run(()=>Me({}));let r=[],n=[];const o=er({install(s){Kn(o),o._a=s,s.provide(lc,o),s.config.globalProperties.$pinia=o,n.forEach(i=>r.push(i)),n=[]},use(s){return!this._a&&!k0?n.push(s):r.push(s),this},_p:r,_a:null,_e:e,_s:new Map,state:t});return o}const cc=()=>{};function Hi(e,t,r,n=cc){e.push(t);const o=()=>{const s=e.indexOf(t);s>-1&&(e.splice(s,1),n())};return!r&&Rs()&&Un(o),o}function xt(e,...t){e.slice().forEach(r=>{r(...t)})}function Vo(e,t){e instanceof Map&&t instanceof Map&&t.forEach((r,n)=>e.set(n,r)),e instanceof Set&&t instanceof Set&&t.forEach(e.add,e);for(const r in t){if(!t.hasOwnProperty(r))continue;const n=t[r],o=e[r];jo(o)&&jo(n)&&e.hasOwnProperty(r)&&!me(n)&&!Et(n)?e[r]=Vo(o,n):e[r]=n}return e}const B0=Symbol();function W0(e){return!jo(e)||!e.hasOwnProperty(B0)}const{assign:_t}=Object;function K0(e){return!!(me(e)&&e.effect)}function G0(e,t,r,n){const{state:o,actions:s,getters:i}=t,a=r.state.value[e];let l;function c(){a||(r.state.value[e]=o?o():{});const u=zu(r.state.value[e]);return _t(u,s,Object.keys(i||{}).reduce((f,v)=>(f[v]=er(he(()=>{Kn(r);const h=r._s.get(e);return i[v].call(h,h)})),f),{}))}return l=uc(e,c,t,r,n,!0),l.$reset=function(){const f=o?o():{};this.$patch(v=>{_t(v,f)})},l}function uc(e,t,r={},n,o,s){let i;const a=_t({actions:{}},r),l={deep:!0};let c,u,f=er([]),v=er([]),h;const _=n.state.value[e];!s&&!_&&(n.state.value[e]={}),Me({});let I;function A(G){let O;c=u=!1,typeof G=="function"?(G(n.state.value[e]),O={type:wr.patchFunction,storeId:e,events:h}):(Vo(n.state.value[e],G),O={type:wr.patchObject,payload:G,storeId:e,events:h});const q=I=Symbol();As().then(()=>{I===q&&(c=!0)}),u=!0,xt(f,O,n.state.value[e])}const y=cc;function M(){i.stop(),f=[],v=[],n._s.delete(e)}function B(G,O){return function(){Kn(n);const q=Array.from(arguments),Q=[],fe=[];function F(ge){Q.push(ge)}function se(ge){fe.push(ge)}xt(v,{args:q,name:G,store:j,after:F,onError:se});let de;try{de=O.apply(this&&this.$id===e?this:j,q)}catch(ge){throw xt(fe,ge),ge}return de instanceof Promise?de.then(ge=>(xt(Q,ge),ge)).catch(ge=>(xt(fe,ge),Promise.reject(ge))):(xt(Q,de),de)}}const W={_p:n,$id:e,$onAction:Hi.bind(null,v),$patch:A,$reset:y,$subscribe(G,O={}){const q=Hi(f,G,O.detached,()=>Q()),Q=i.run(()=>Ar(()=>n.state.value[e],fe=>{(O.flush==="sync"?u:c)&&G({storeId:e,type:wr.direct,events:h},fe)},_t({},l,O)));return q},$dispose:M},j=Kt(W);n._s.set(e,j);const te=n._e.run(()=>(i=gl(),i.run(()=>t())));for(const G in te){const O=te[G];if(me(O)&&!K0(O)||Et(O))s||(_&&W0(O)&&(me(O)?O.value=_[G]:Vo(O,_[G])),n.state.value[e][G]=O);else if(typeof O=="function"){const q=B(G,O);te[G]=q,a.actions[G]=O}}return _t(j,te),_t(ee(j),te),Object.defineProperty(j,"$state",{get:()=>n.state.value[e],set:G=>{A(O=>{_t(O,G)})}}),n._p.forEach(G=>{_t(j,i.run(()=>G({store:j,app:n._a,pinia:n,options:a})))}),_&&s&&r.hydrate&&r.hydrate(j.$state,_),c=!0,u=!0,j}function fc(e,t,r){let n,o;const s=typeof t=="function";typeof e=="string"?(n=e,o=s?r:t):(o=e,n=e.id);function i(a,l){const c=Rs();return a=a||c&&et(lc),a&&Kn(a),a=ac,a._s.has(n)||(s?uc(n,t,o,a):G0(n,o,a)),a._s.get(n)}return i.$id=n,i}/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const qt=typeof window<"u";function j0(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const re=Object.assign;function oo(e,t){const r={};for(const n in t){const o=t[n];r[n]=xe(o)?o.map(e):e(o)}return r}const Sr=()=>{},xe=Array.isArray,V0=/\/$/,x0=e=>e.replace(V0,"");function so(e,t,r="/"){let n,o={},s="",i="";const a=t.indexOf("#");let l=t.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(n=t.slice(0,l),s=t.slice(l+1,a>-1?a:t.length),o=e(s)),a>-1&&(n=n||t.slice(0,a),i=t.slice(a,t.length)),n=Q0(n!=null?n:t,r),{fullPath:n+(s&&"?")+s+i,path:n,query:o,hash:i}}function X0(e,t){const r=t.query?e(t.query):"";return t.path+(r&&"?")+r+(t.hash||"")}function Li(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function z0(e,t,r){const n=t.matched.length-1,o=r.matched.length-1;return n>-1&&n===o&&rr(t.matched[n],r.matched[o])&&dc(t.params,r.params)&&e(t.query)===e(r.query)&&t.hash===r.hash}function rr(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function dc(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const r in e)if(!q0(e[r],t[r]))return!1;return!0}function q0(e,t){return xe(e)?Mi(e,t):xe(t)?Mi(t,e):e===t}function Mi(e,t){return xe(t)?e.length===t.length&&e.every((r,n)=>r===t[n]):e.length===1&&e[0]===t}function Q0(e,t){if(e.startsWith("/"))return e;if(!e)return t;const r=t.split("/"),n=e.split("/");let o=r.length-1,s,i;for(s=0;s<n.length;s++)if(i=n[s],i!==".")if(i==="..")o>1&&o--;else break;return r.slice(0,o).join("/")+"/"+n.slice(s-(s===n.length?1:0)).join("/")}var Mr;(function(e){e.pop="pop",e.push="push"})(Mr||(Mr={}));var Or;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Or||(Or={}));function Y0(e){if(!e)if(qt){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),x0(e)}const Z0=/^[^#]+#/;function J0(e,t){return e.replace(Z0,"#")+t}function ed(e,t){const r=document.documentElement.getBoundingClientRect(),n=e.getBoundingClientRect();return{behavior:t.behavior,left:n.left-r.left-(t.left||0),top:n.top-r.top-(t.top||0)}}const Gn=()=>({left:window.pageXOffset,top:window.pageYOffset});function td(e){let t;if("el"in e){const r=e.el,n=typeof r=="string"&&r.startsWith("#"),o=typeof r=="string"?n?document.getElementById(r.slice(1)):document.querySelector(r):r;if(!o)return;t=ed(o,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function Di(e,t){return(history.state?history.state.position-t:-1)+e}const xo=new Map;function rd(e,t){xo.set(e,t)}function nd(e){const t=xo.get(e);return xo.delete(e),t}let od=()=>location.protocol+"//"+location.host;function vc(e,t){const{pathname:r,search:n,hash:o}=t,s=e.indexOf("#");if(s>-1){let a=o.includes(e.slice(s))?e.slice(s).length:1,l=o.slice(a);return l[0]!=="/"&&(l="/"+l),Li(l,"")}return Li(r,e)+n+o}function sd(e,t,r,n){let o=[],s=[],i=null;const a=({state:v})=>{const h=vc(e,location),_=r.value,I=t.value;let A=0;if(v){if(r.value=h,t.value=v,i&&i===_){i=null;return}A=I?v.position-I.position:0}else n(h);o.forEach(y=>{y(r.value,_,{delta:A,type:Mr.pop,direction:A?A>0?Or.forward:Or.back:Or.unknown})})};function l(){i=r.value}function c(v){o.push(v);const h=()=>{const _=o.indexOf(v);_>-1&&o.splice(_,1)};return s.push(h),h}function u(){const{history:v}=window;!v.state||v.replaceState(re({},v.state,{scroll:Gn()}),"")}function f(){for(const v of s)v();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:l,listen:c,destroy:f}}function ki(e,t,r,n=!1,o=!1){return{back:e,current:t,forward:r,replaced:n,position:window.history.length,scroll:o?Gn():null}}function id(e){const{history:t,location:r}=window,n={value:vc(e,r)},o={value:t.state};o.value||s(n.value,{back:null,current:n.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const f=e.indexOf("#"),v=f>-1?(r.host&&document.querySelector("base")?e:e.slice(f))+l:od()+e+l;try{t[u?"replaceState":"pushState"](c,"",v),o.value=c}catch(h){console.error(h),r[u?"replace":"assign"](v)}}function i(l,c){const u=re({},t.state,ki(o.value.back,l,o.value.forward,!0),c,{position:o.value.position});s(l,u,!0),n.value=l}function a(l,c){const u=re({},o.value,t.state,{forward:l,scroll:Gn()});s(u.current,u,!0);const f=re({},ki(n.value,l,null),{position:u.position+1},c);s(l,f,!1),n.value=l}return{location:n,state:o,push:a,replace:i}}function ad(e){e=Y0(e);const t=id(e),r=sd(e,t.state,t.location,t.replace);function n(s,i=!0){i||r.pauseListeners(),history.go(s)}const o=re({location:"",base:e,go:n,createHref:J0.bind(null,e)},t,r);return Object.defineProperty(o,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(o,"state",{enumerable:!0,get:()=>t.state.value}),o}function ld(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),ad(e)}function cd(e){return typeof e=="string"||e&&typeof e=="object"}function pc(e){return typeof e=="string"||typeof e=="symbol"}const vt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},hc=Symbol("");var Ui;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Ui||(Ui={}));function nr(e,t){return re(new Error,{type:e,[hc]:!0},t)}function nt(e,t){return e instanceof Error&&hc in e&&(t==null||!!(e.type&t))}const Bi="[^/]+?",ud={sensitive:!1,strict:!1,start:!0,end:!0},fd=/[.+*?^${}()[\]/\\]/g;function dd(e,t){const r=re({},ud,t),n=[];let o=r.start?"^":"";const s=[];for(const c of e){const u=c.length?[]:[90];r.strict&&!c.length&&(o+="/");for(let f=0;f<c.length;f++){const v=c[f];let h=40+(r.sensitive?.25:0);if(v.type===0)f||(o+="/"),o+=v.value.replace(fd,"\\$&"),h+=40;else if(v.type===1){const{value:_,repeatable:I,optional:A,regexp:y}=v;s.push({name:_,repeatable:I,optional:A});const M=y||Bi;if(M!==Bi){h+=10;try{new RegExp(`(${M})`)}catch(W){throw new Error(`Invalid custom RegExp for param "${_}" (${M}): `+W.message)}}let B=I?`((?:${M})(?:/(?:${M}))*)`:`(${M})`;f||(B=A&&c.length<2?`(?:/${B})`:"/"+B),A&&(B+="?"),o+=B,h+=20,A&&(h+=-8),I&&(h+=-20),M===".*"&&(h+=-50)}u.push(h)}n.push(u)}if(r.strict&&r.end){const c=n.length-1;n[c][n[c].length-1]+=.7000000000000001}r.strict||(o+="/?"),r.end?o+="$":r.strict&&(o+="(?:/|$)");const i=new RegExp(o,r.sensitive?"":"i");function a(c){const u=c.match(i),f={};if(!u)return null;for(let v=1;v<u.length;v++){const h=u[v]||"",_=s[v-1];f[_.name]=h&&_.repeatable?h.split("/"):h}return f}function l(c){let u="",f=!1;for(const v of e){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const h of v)if(h.type===0)u+=h.value;else if(h.type===1){const{value:_,repeatable:I,optional:A}=h,y=_ in c?c[_]:"";if(xe(y)&&!I)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const M=xe(y)?y.join("/"):y;if(!M)if(A)v.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${_}"`);u+=M}}return u||"/"}return{re:i,score:n,keys:s,parse:a,stringify:l}}function vd(e,t){let r=0;for(;r<e.length&&r<t.length;){const n=t[r]-e[r];if(n)return n;r++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function pd(e,t){let r=0;const n=e.score,o=t.score;for(;r<n.length&&r<o.length;){const s=vd(n[r],o[r]);if(s)return s;r++}if(Math.abs(o.length-n.length)===1){if(Wi(n))return 1;if(Wi(o))return-1}return o.length-n.length}function Wi(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const hd={type:0,value:""},gd=/[a-zA-Z0-9_]/;function md(e){if(!e)return[[]];if(e==="/")return[[hd]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(h){throw new Error(`ERR (${r})/"${c}": ${h}`)}let r=0,n=r;const o=[];let s;function i(){s&&o.push(s),s=[]}let a=0,l,c="",u="";function f(){!c||(r===0?s.push({type:0,value:c}):r===1||r===2||r===3?(s.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),c="")}function v(){c+=l}for(;a<e.length;){if(l=e[a++],l==="\\"&&r!==2){n=r,r=4;continue}switch(r){case 0:l==="/"?(c&&f(),i()):l===":"?(f(),r=1):v();break;case 4:v(),r=n;break;case 1:l==="("?r=2:gd.test(l)?v():(f(),r=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:r=3:u+=l;break;case 3:f(),r=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:t("Unknown state");break}}return r===2&&t(`Unfinished custom RegExp for param "${c}"`),f(),i(),o}function _d(e,t,r){const n=dd(md(e.path),r),o=re(n,{record:e,parent:t,children:[],alias:[]});return t&&!o.record.aliasOf==!t.record.aliasOf&&t.children.push(o),o}function $d(e,t){const r=[],n=new Map;t=ji({strict:!1,end:!0,sensitive:!1},t);function o(u){return n.get(u)}function s(u,f,v){const h=!v,_=yd(u);_.aliasOf=v&&v.record;const I=ji(t,u),A=[_];if("alias"in u){const B=typeof u.alias=="string"?[u.alias]:u.alias;for(const W of B)A.push(re({},_,{components:v?v.record.components:_.components,path:W,aliasOf:v?v.record:_}))}let y,M;for(const B of A){const{path:W}=B;if(f&&W[0]!=="/"){const j=f.record.path,te=j[j.length-1]==="/"?"":"/";B.path=f.record.path+(W&&te+W)}if(y=_d(B,f,I),v?v.alias.push(y):(M=M||y,M!==y&&M.alias.push(y),h&&u.name&&!Gi(y)&&i(u.name)),_.children){const j=_.children;for(let te=0;te<j.length;te++)s(j[te],y,v&&v.children[te])}v=v||y,(y.record.components&&Object.keys(y.record.components).length||y.record.name||y.record.redirect)&&l(y)}return M?()=>{i(M)}:Sr}function i(u){if(pc(u)){const f=n.get(u);f&&(n.delete(u),r.splice(r.indexOf(f),1),f.children.forEach(i),f.alias.forEach(i))}else{const f=r.indexOf(u);f>-1&&(r.splice(f,1),u.record.name&&n.delete(u.record.name),u.children.forEach(i),u.alias.forEach(i))}}function a(){return r}function l(u){let f=0;for(;f<r.length&&pd(u,r[f])>=0&&(u.record.path!==r[f].record.path||!gc(u,r[f]));)f++;r.splice(f,0,u),u.record.name&&!Gi(u)&&n.set(u.record.name,u)}function c(u,f){let v,h={},_,I;if("name"in u&&u.name){if(v=n.get(u.name),!v)throw nr(1,{location:u});I=v.record.name,h=re(Ki(f.params,v.keys.filter(M=>!M.optional).map(M=>M.name)),u.params&&Ki(u.params,v.keys.map(M=>M.name))),_=v.stringify(h)}else if("path"in u)_=u.path,v=r.find(M=>M.re.test(_)),v&&(h=v.parse(_),I=v.record.name);else{if(v=f.name?n.get(f.name):r.find(M=>M.re.test(f.path)),!v)throw nr(1,{location:u,currentLocation:f});I=v.record.name,h=re({},f.params,u.params),_=v.stringify(h)}const A=[];let y=v;for(;y;)A.unshift(y.record),y=y.parent;return{name:I,path:_,params:h,matched:A,meta:Ed(A)}}return e.forEach(u=>s(u)),{addRoute:s,resolve:c,removeRoute:i,getRoutes:a,getRecordMatcher:o}}function Ki(e,t){const r={};for(const n of t)n in e&&(r[n]=e[n]);return r}function yd(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:bd(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function bd(e){const t={},r=e.props||!1;if("component"in e)t.default=r;else for(const n in e.components)t[n]=typeof r=="boolean"?r:r[n];return t}function Gi(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Ed(e){return e.reduce((t,r)=>re(t,r.meta),{})}function ji(e,t){const r={};for(const n in e)r[n]=n in t?t[n]:e[n];return r}function gc(e,t){return t.children.some(r=>r===e||gc(e,r))}const mc=/#/g,Id=/&/g,Ad=/\//g,Nd=/=/g,wd=/\?/g,_c=/\+/g,Sd=/%5B/g,Od=/%5D/g,$c=/%5E/g,Cd=/%60/g,yc=/%7B/g,Pd=/%7C/g,bc=/%7D/g,Td=/%20/g;function Ls(e){return encodeURI(""+e).replace(Pd,"|").replace(Sd,"[").replace(Od,"]")}function Rd(e){return Ls(e).replace(yc,"{").replace(bc,"}").replace($c,"^")}function Xo(e){return Ls(e).replace(_c,"%2B").replace(Td,"+").replace(mc,"%23").replace(Id,"%26").replace(Cd,"`").replace(yc,"{").replace(bc,"}").replace($c,"^")}function Fd(e){return Xo(e).replace(Nd,"%3D")}function Hd(e){return Ls(e).replace(mc,"%23").replace(wd,"%3F")}function Ld(e){return e==null?"":Hd(e).replace(Ad,"%2F")}function wn(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function Md(e){const t={};if(e===""||e==="?")return t;const n=(e[0]==="?"?e.slice(1):e).split("&");for(let o=0;o<n.length;++o){const s=n[o].replace(_c," "),i=s.indexOf("="),a=wn(i<0?s:s.slice(0,i)),l=i<0?null:wn(s.slice(i+1));if(a in t){let c=t[a];xe(c)||(c=t[a]=[c]),c.push(l)}else t[a]=l}return t}function Vi(e){let t="";for(let r in e){const n=e[r];if(r=Fd(r),n==null){n!==void 0&&(t+=(t.length?"&":"")+r);continue}(xe(n)?n.map(s=>s&&Xo(s)):[n&&Xo(n)]).forEach(s=>{s!==void 0&&(t+=(t.length?"&":"")+r,s!=null&&(t+="="+s))})}return t}function Dd(e){const t={};for(const r in e){const n=e[r];n!==void 0&&(t[r]=xe(n)?n.map(o=>o==null?null:""+o):n==null?n:""+n)}return t}const kd=Symbol(""),xi=Symbol(""),jn=Symbol(""),Ec=Symbol(""),zo=Symbol("");function hr(){let e=[];function t(n){return e.push(n),()=>{const o=e.indexOf(n);o>-1&&e.splice(o,1)}}function r(){e=[]}return{add:t,list:()=>e,reset:r}}function $t(e,t,r,n,o){const s=n&&(n.enterCallbacks[o]=n.enterCallbacks[o]||[]);return()=>new Promise((i,a)=>{const l=f=>{f===!1?a(nr(4,{from:r,to:t})):f instanceof Error?a(f):cd(f)?a(nr(2,{from:t,to:f})):(s&&n.enterCallbacks[o]===s&&typeof f=="function"&&s.push(f),i())},c=e.call(n&&n.instances[o],t,r,l);let u=Promise.resolve(c);e.length<3&&(u=u.then(l)),u.catch(f=>a(f))})}function io(e,t,r,n){const o=[];for(const s of e)for(const i in s.components){let a=s.components[i];if(!(t!=="beforeRouteEnter"&&!s.instances[i]))if(Ud(a)){const c=(a.__vccOpts||a)[t];c&&o.push($t(c,r,n,s,i))}else{let l=a();o.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${i}" at "${s.path}"`));const u=j0(c)?c.default:c;s.components[i]=u;const v=(u.__vccOpts||u)[t];return v&&$t(v,r,n,s,i)()}))}}return o}function Ud(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Xi(e){const t=et(jn),r=et(Ec),n=he(()=>t.resolve(Ae(e.to))),o=he(()=>{const{matched:l}=n.value,{length:c}=l,u=l[c-1],f=r.matched;if(!u||!f.length)return-1;const v=f.findIndex(rr.bind(null,u));if(v>-1)return v;const h=zi(l[c-2]);return c>1&&zi(u)===h&&f[f.length-1].path!==h?f.findIndex(rr.bind(null,l[c-2])):v}),s=he(()=>o.value>-1&&Gd(r.params,n.value.params)),i=he(()=>o.value>-1&&o.value===r.matched.length-1&&dc(r.params,n.value.params));function a(l={}){return Kd(l)?t[Ae(e.replace)?"replace":"push"](Ae(e.to)).catch(Sr):Promise.resolve()}return{route:n,href:he(()=>n.value.href),isActive:s,isExactActive:i,navigate:a}}const Bd=rt({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Xi,setup(e,{slots:t}){const r=Kt(Xi(e)),{options:n}=et(jn),o=he(()=>({[qi(e.activeClass,n.linkActiveClass,"router-link-active")]:r.isActive,[qi(e.exactActiveClass,n.linkExactActiveClass,"router-link-exact-active")]:r.isExactActive}));return()=>{const s=t.default&&t.default(r);return e.custom?s:Fs("a",{"aria-current":r.isExactActive?e.ariaCurrentValue:null,href:r.href,onClick:r.navigate,class:o.value},s)}}}),Wd=Bd;function Kd(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Gd(e,t){for(const r in t){const n=t[r],o=e[r];if(typeof n=="string"){if(n!==o)return!1}else if(!xe(o)||o.length!==n.length||n.some((s,i)=>s!==o[i]))return!1}return!0}function zi(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const qi=(e,t,r)=>e!=null?e:t!=null?t:r,jd=rt({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:r}){const n=et(zo),o=he(()=>e.route||n.value),s=et(xi,0),i=he(()=>{let c=Ae(s);const{matched:u}=o.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),a=he(()=>o.value.matched[i.value]);hn(xi,he(()=>i.value+1)),hn(kd,a),hn(zo,o);const l=Me();return Ar(()=>[l.value,a.value,e.name],([c,u,f],[v,h,_])=>{u&&(u.instances[f]=c,h&&h!==u&&c&&c===v&&(u.leaveGuards.size||(u.leaveGuards=h.leaveGuards),u.updateGuards.size||(u.updateGuards=h.updateGuards))),c&&u&&(!h||!rr(u,h)||!v)&&(u.enterCallbacks[f]||[]).forEach(I=>I(c))},{flush:"post"}),()=>{const c=o.value,u=e.name,f=a.value,v=f&&f.components[u];if(!v)return Qi(r.default,{Component:v,route:c});const h=f.props[u],_=h?h===!0?c.params:typeof h=="function"?h(c):h:null,A=Fs(v,re({},_,t,{onVnodeUnmounted:y=>{y.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return Qi(r.default,{Component:A,route:c})||A}}});function Qi(e,t){if(!e)return null;const r=e(t);return r.length===1?r[0]:r}const Ic=jd;function Vd(e){const t=$d(e.routes,e),r=e.parseQuery||Md,n=e.stringifyQuery||Vi,o=e.history,s=hr(),i=hr(),a=hr(),l=Vu(vt);let c=vt;qt&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=oo.bind(null,$=>""+$),f=oo.bind(null,Ld),v=oo.bind(null,wn);function h($,T){let C,L;return pc($)?(C=t.getRecordMatcher($),L=T):L=$,t.addRoute(L,C)}function _($){const T=t.getRecordMatcher($);T&&t.removeRoute(T)}function I(){return t.getRoutes().map($=>$.record)}function A($){return!!t.getRecordMatcher($)}function y($,T){if(T=re({},T||l.value),typeof $=="string"){const d=so(r,$,T.path),p=t.resolve({path:d.path},T),g=o.createHref(d.fullPath);return re(d,p,{params:v(p.params),hash:wn(d.hash),redirectedFrom:void 0,href:g})}let C;if("path"in $)C=re({},$,{path:so(r,$.path,T.path).path});else{const d=re({},$.params);for(const p in d)d[p]==null&&delete d[p];C=re({},$,{params:f($.params)}),T.params=f(T.params)}const L=t.resolve(C,T),Y=$.hash||"";L.params=u(v(L.params));const pe=X0(n,re({},$,{hash:Rd(Y),path:L.path})),x=o.createHref(pe);return re({fullPath:pe,hash:Y,query:n===Vi?Dd($.query):$.query||{}},L,{redirectedFrom:void 0,href:x})}function M($){return typeof $=="string"?so(r,$,l.value.path):re({},$)}function B($,T){if(c!==$)return nr(8,{from:T,to:$})}function W($){return G($)}function j($){return W(re(M($),{replace:!0}))}function te($){const T=$.matched[$.matched.length-1];if(T&&T.redirect){const{redirect:C}=T;let L=typeof C=="function"?C($):C;return typeof L=="string"&&(L=L.includes("?")||L.includes("#")?L=M(L):{path:L},L.params={}),re({query:$.query,hash:$.hash,params:"path"in L?{}:$.params},L)}}function G($,T){const C=c=y($),L=l.value,Y=$.state,pe=$.force,x=$.replace===!0,d=te(C);if(d)return G(re(M(d),{state:typeof d=="object"?re({},Y,d.state):Y,force:pe,replace:x}),T||C);const p=C;p.redirectedFrom=T;let g;return!pe&&z0(n,L,C)&&(g=nr(16,{to:p,from:L}),Ot(L,L,!0,!1)),(g?Promise.resolve(g):q(p,L)).catch(m=>nt(m)?nt(m,2)?m:Ue(m):ce(m,p,L)).then(m=>{if(m){if(nt(m,2))return G(re({replace:x},M(m.to),{state:typeof m.to=="object"?re({},Y,m.to.state):Y,force:pe}),T||p)}else m=fe(p,L,!0,x,Y);return Q(p,L,m),m})}function O($,T){const C=B($,T);return C?Promise.reject(C):Promise.resolve()}function q($,T){let C;const[L,Y,pe]=xd($,T);C=io(L.reverse(),"beforeRouteLeave",$,T);for(const d of L)d.leaveGuards.forEach(p=>{C.push($t(p,$,T))});const x=O.bind(null,$,T);return C.push(x),Xt(C).then(()=>{C=[];for(const d of s.list())C.push($t(d,$,T));return C.push(x),Xt(C)}).then(()=>{C=io(Y,"beforeRouteUpdate",$,T);for(const d of Y)d.updateGuards.forEach(p=>{C.push($t(p,$,T))});return C.push(x),Xt(C)}).then(()=>{C=[];for(const d of $.matched)if(d.beforeEnter&&!T.matched.includes(d))if(xe(d.beforeEnter))for(const p of d.beforeEnter)C.push($t(p,$,T));else C.push($t(d.beforeEnter,$,T));return C.push(x),Xt(C)}).then(()=>($.matched.forEach(d=>d.enterCallbacks={}),C=io(pe,"beforeRouteEnter",$,T),C.push(x),Xt(C))).then(()=>{C=[];for(const d of i.list())C.push($t(d,$,T));return C.push(x),Xt(C)}).catch(d=>nt(d,8)?d:Promise.reject(d))}function Q($,T,C){for(const L of a.list())L($,T,C)}function fe($,T,C,L,Y){const pe=B($,T);if(pe)return pe;const x=T===vt,d=qt?history.state:{};C&&(L||x?o.replace($.fullPath,re({scroll:x&&d&&d.scroll},Y)):o.push($.fullPath,Y)),l.value=$,Ot($,T,C,x),Ue()}let F;function se(){F||(F=o.listen(($,T,C)=>{if(!Gr.listening)return;const L=y($),Y=te(L);if(Y){G(re(Y,{replace:!0}),L).catch(Sr);return}c=L;const pe=l.value;qt&&rd(Di(pe.fullPath,C.delta),Gn()),q(L,pe).catch(x=>nt(x,12)?x:nt(x,2)?(G(x.to,L).then(d=>{nt(d,20)&&!C.delta&&C.type===Mr.pop&&o.go(-1,!1)}).catch(Sr),Promise.reject()):(C.delta&&o.go(-C.delta,!1),ce(x,L,pe))).then(x=>{x=x||fe(L,pe,!1),x&&(C.delta&&!nt(x,8)?o.go(-C.delta,!1):C.type===Mr.pop&&nt(x,20)&&o.go(-1,!1)),Q(L,pe,x)}).catch(Sr)}))}let de=hr(),ge=hr(),ve;function ce($,T,C){Ue($);const L=ge.list();return L.length?L.forEach(Y=>Y($,T,C)):console.error($),Promise.reject($)}function ne(){return ve&&l.value!==vt?Promise.resolve():new Promise(($,T)=>{de.add([$,T])})}function Ue($){return ve||(ve=!$,se(),de.list().forEach(([T,C])=>$?C($):T()),de.reset()),$}function Ot($,T,C,L){const{scrollBehavior:Y}=e;if(!qt||!Y)return Promise.resolve();const pe=!C&&nd(Di($.fullPath,0))||(L||!C)&&history.state&&history.state.scroll||null;return As().then(()=>Y($,T,pe)).then(x=>x&&td(x)).catch(x=>ce(x,$,T))}const Be=$=>o.go($);let Pe;const jt=new Set,Gr={currentRoute:l,listening:!0,addRoute:h,removeRoute:_,hasRoute:A,getRoutes:I,resolve:y,options:e,push:W,replace:j,go:Be,back:()=>Be(-1),forward:()=>Be(1),beforeEach:s.add,beforeResolve:i.add,afterEach:a.add,onError:ge.add,isReady:ne,install($){const T=this;$.component("RouterLink",Wd),$.component("RouterView",Ic),$.config.globalProperties.$router=T,Object.defineProperty($.config.globalProperties,"$route",{enumerable:!0,get:()=>Ae(l)}),qt&&!Pe&&l.value===vt&&(Pe=!0,W(o.location).catch(Y=>{}));const C={};for(const Y in vt)C[Y]=he(()=>l.value[Y]);$.provide(jn,T),$.provide(Ec,Kt(C)),$.provide(zo,l);const L=$.unmount;jt.add($),$.unmount=function(){jt.delete($),jt.size<1&&(c=vt,F&&F(),F=null,l.value=vt,Pe=!1,ve=!1),L()}}};return Gr}function Xt(e){return e.reduce((t,r)=>t.then(()=>r()),Promise.resolve())}function xd(e,t){const r=[],n=[],o=[],s=Math.max(t.matched.length,e.matched.length);for(let i=0;i<s;i++){const a=t.matched[i];a&&(e.matched.find(c=>rr(c,a))?n.push(a):r.push(a));const l=e.matched[i];l&&(t.matched.find(c=>rr(c,l))||o.push(l))}return[r,n,o]}function Ms(){return et(jn)}const Ds=e=>(kr("data-v-4cd8445e"),e=e(),Ur(),e),Xd=Ds(()=>R("header",null,[R("h2",null,"Encode/Decode"),R("summary",null,"simple letter for letter substitution ciphers")],-1)),zd=Ds(()=>R("hr",null,null,-1)),qd=Ds(()=>R("footer",null,[R("aside",null," This app is for entertainment and learning purposes only and comes with no warranty. "),R("small",null,[At(" This project is under an MIT licence and is hosted at "),R("a",{href:"https://github.com/mcshaz/letter-swap-decoder"}," github.com/mcshaz/letter-swap-decoder "),At(". More detail can be found there. ")]),R("p",null,"version 0.1.2")],-1)),Qd=rt({__name:"App",setup(e){return(t,r)=>(Z(),J(ae,null,[Xd,ye(Ae(Ic)),zd,qd],64))}});const St=(e,t)=>{const r=e.__vccOpts||e;for(const[n,o]of t)r[n]=o;return r},Yd=St(Qd,[["__scopeId","data-v-4cd8445e"]]);/**
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
*/var ar=Object.prototype,Yi=ar.toString,Zi=ar.__defineGetter__,Ji=ar.__defineSetter__,sv=ar.__lookupGetter__,iv=ar.__lookupSetter__;function av(e,t,r){var n,o,s,i;if(typeof e!="object"||e===null||Yi.call(e)==="[object Array]")throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if(typeof r!="object"||r===null||Yi.call(r)==="[object Array]")throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if(o="value"in r,o&&(sv.call(e,t)||iv.call(e,t)?(n=e.__proto__,e.__proto__=ar,delete e[t],e[t]=r.value,e.__proto__=n):e[t]=r.value),s="get"in r,i="set"in r,o&&(s||i))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return s&&Zi&&Zi.call(e,t,r.get),i&&Ji&&Ji.call(e,t,r.set),e}var lv=av;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var cv=rv,uv=ov,fv=lv,qo;cv()?qo=uv:qo=fv;var dv=qo;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Av=Br;function Nv(e){return Av(e)===e}var wv=Nv;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Sv=wv,Vn=Sv;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Fv=Rv,Hv=Fv;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Lv=Hv,Mv=Lv.NEGATIVE_INFINITY,He=Mv;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Wv=Bv,Wr=Wv;/**
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
*/var dp=cp,gr=fp,ao=Nc;function vp(e){var t,r,n;if(e==null)return ao.call(e);r=e[gr],t=dp(e,gr);try{e[gr]=void 0}catch{return ao.call(e)}return n=ao.call(e),t?e[gr]=r:delete e[gr],n}var pp=vp;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var hp=ep,gp=op,mp=pp,Qo;hp()?Qo=mp:Qo=gp;var xn=Qo;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _p=xn,$p=typeof Uint32Array=="function";function yp(e){return $p&&e instanceof Uint32Array||_p(e)==="[object Uint32Array]"}var bp=yp;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Ap=4294967295,Np=Ap;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var wp=typeof Uint32Array=="function"?Uint32Array:null,Sp=wp;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Op=Ip,lo=Np,ea=Sp;function Cp(){var e,t;if(typeof ea!="function")return!1;try{t=[1,3.14,-3.14,lo+1,lo+2],t=new ea(t),e=Op(t)&&t[0]===1&&t[1]===3&&t[2]===lo-2&&t[3]===0&&t[4]===1}catch{e=!1}return e}var Pp=Cp;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Fp=typeof Uint32Array=="function"?Uint32Array:void 0,Hp=Fp;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Lp(){throw new Error("not implemented")}var Mp=Lp;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Dp=Rp,kp=Hp,Up=Mp,Yo;Dp()?Yo=kp:Yo=Up;var lr=Yo;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Bp=xn,Wp=typeof Float64Array=="function";function Kp(e){return Wp&&e instanceof Float64Array||Bp(e)==="[object Float64Array]"}var Gp=Kp;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var n1=Zp,o1=e1,s1=r1,Zo;n1()?Zo=o1:Zo=s1;var cr=Zo;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var i1=xn,a1=typeof Uint8Array=="function";function l1(e){return a1&&e instanceof Uint8Array||i1(e)==="[object Uint8Array]"}var c1=l1;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var g1=f1,co=v1,ra=h1;function m1(){var e,t;if(typeof ra!="function")return!1;try{t=[1,3.14,-3.14,co+1,co+2],t=new ra(t),e=g1(t)&&t[0]===1&&t[1]===3&&t[2]===co-2&&t[3]===0&&t[4]===1}catch{e=!1}return e}var _1=m1;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var N1=y1,w1=E1,S1=A1,Jo;N1()?Jo=w1:Jo=S1;var O1=Jo;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var C1=xn,P1=typeof Uint16Array=="function";function T1(e){return P1&&e instanceof Uint16Array||C1(e)==="[object Uint16Array]"}var R1=T1;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var F1=R1,H1=F1;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var L1=65535,M1=L1;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var U1=H1,uo=M1,na=k1;function B1(){var e,t;if(typeof na!="function")return!1;try{t=[1,3.14,-3.14,uo+1,uo+2],t=new na(t),e=U1(t)&&t[0]===1&&t[1]===3&&t[2]===uo-2&&t[3]===0&&t[4]===1}catch{e=!1}return e}var W1=B1;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var z1=G1,q1=V1,Q1=X1,es;z1()?es=q1:es=Q1;var Y1=es;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var oa=th,wc;function rh(){var e,t;return e=new oa.uint16(1),e[0]=4660,t=new oa.uint8(e.buffer),t[0]===52}wc=rh();var nh=wc;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var oh=nh,ur=oh;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var sh=ur,ts;sh===!0?ts=1:ts=0;var ih=ts;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ah=lr,lh=cr,ch=ih,Sc=new lh(1),uh=new ah(Sc.buffer);function fh(e){return Sc[0]=e,uh[ch]}var dh=fh;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var ph=ur,rs;ph===!0?rs=1:rs=0;var hh=rs;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var gh=lr,mh=cr,_h=hh,ns=new mh(1),$h=new gh(ns.buffer);function yh(e,t){return ns[0]=e,$h[_h]=t>>>0,ns[0]}var bh=yh;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Eh=bh,Xn=Eh;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ih=1023,fr=Ih;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Ah(e){return e===0?.3999999999940942:.3999999999940942+e*(.22222198432149784+e*.15313837699209373)}var Nh=Ah;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function wh(e){return e===0?.6666666666666735:.6666666666666735+e*(.2857142874366239+e*(.1818357216161805+e*.14798198605116586))}var Sh=wh;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var sa=Xe,Oh=Xn,Ch=Se,Ph=fr,Th=He,Rh=Nh,Fh=Sh,qr=.6931471803691238,Qr=19082149292705877e-26,Hh=0x40000000000000,Lh=.3333333333333333,ia=1048575,Mh=2146435072,Dh=1048576,kh=1072693248;function Uh(e){var t,r,n,o,s,i,a,l,c,u,f,v;return e===0?Th:Ch(e)||e<0?NaN:(r=sa(e),s=0,r<Dh&&(s-=54,e*=Hh,r=sa(e)),r>=Mh?e+e:(s+=(r>>20)-Ph|0,r&=ia,l=r+614244&1048576|0,e=Oh(e,r|l^kh),s+=l>>20|0,a=e-1,(ia&2+r)<3?a===0?s===0?0:s*qr+s*Qr:(i=a*a*(.5-Lh*a),s===0?a-i:s*qr-(i-s*Qr-a)):(u=a/(2+a),v=u*u,l=r-398458|0,f=v*v,c=440401-r|0,o=f*Rh(f),n=v*Fh(f),l|=c,i=n+o,l>0?(t=.5*a*a,s===0?a-(t-u*(t+i)):s*qr-(t-(u*(t+i)+s*Qr)-a)):s===0?a-u*(a-i):s*qr-(u*(a-i)-s*Qr-a))))}var Bh=Uh;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Wh=Bh,Kr=Wh;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var xh=Br,Xh=Vh;function zh(e){return e<0?Xh(e):xh(e)}var qh=zh;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var pg=ur,os;pg===!0?os=0:os=1;var hg=os;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var gg=lr,mg=cr,_g=hg,Tc=new mg(1),$g=new gg(Tc.buffer);function yg(e){return Tc[0]=e,$g[_g]}var bg=yg;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Ag=ur,Rc,ss,is;Ag===!0?(ss=1,is=0):(ss=0,is=1);Rc={HIGH:ss,LOW:is};var Ng=Rc;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var wg=lr,Sg=cr,Fc=Ng,Hc=new Sg(1),la=new wg(Hc.buffer),Og=Fc.HIGH,Cg=Fc.LOW;function Pg(e,t){return la[Og]=e,la[Cg]=t,Hc[0]}var Tg=Pg;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Fg=1023,Hg=Fg;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Lg=-1023,Mg=Lg;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Ug=ur,Lc,as,ls;Ug===!0?(as=1,ls=0):(as=0,ls=1);Lc={HIGH:as,LOW:ls};var Bg=Lc;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Wg=lr,Kg=cr,Mc=Bg,Dc=new Kg(1),ca=new Wg(Dc.buffer),Gg=Mc.HIGH,jg=Mc.LOW;function Vg(e,t){return Dc[0]=t,e[0]=ca[Gg],e[1]=ca[jg],e}var xg=Vg;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Qg=Bs,Yg=Xe,Zg=Us,Jg=2147483648>>>0,em=2147483647,fo=[0,0];function tm(e,t){var r,n;return Qg(fo,e),r=fo[0],r&=em,n=Yg(t),n&=Jg,r|=n,Zg(r,fo[1])}var rm=tm;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var im=sm,am=Wr,lm=Se,cm=Gt,um=4503599627370496;function fm(e,t,r,n){return lm(e)||am(e)?(t[n]=e,t[n+r]=0,t):e!==0&&cm(e)<im?(t[n]=e*um,t[n+r]=-52,t):(t[n]=e,t[n+r]=0,t)}var kc=fm;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var ym=Xe,bm=$m,Em=fr;function Im(e){var t=ym(e);return t=(t&bm)>>>20,t-Em|0}var Am=Im;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Nm=Am,wm=Nm;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Sm=Ce,Om=He,Cm=fr,Pm=Hg,Tm=Mg,Rm=kg,Fm=Se,Hm=Wr,Lm=Ws,Mm=mm.assign,Dm=wm,km=Bs,Um=Us,Bm=2220446049250313e-31,Wm=2148532223>>>0,vo=[0,0],po=[0,0];function Km(e,t){var r,n;return t===0||e===0||Fm(e)||Hm(e)?e:(Mm(e,vo,1,0),e=vo[0],t+=vo[1],t+=Dm(e),t<Rm?Lm(0,e):t>Pm?e<0?Om:Sm:(t<=Tm?(t+=52,n=Bm):n=1,km(po,e),r=po[0],r&=Wm,r|=t+Cm<<20,n*Um(r,po[1])))}var Gm=Km;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var e2=Br,Yr=Ks,zn=Jm,Bc=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],t2=[1.570796251296997,7549789415861596e-23,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],ho=16777216,go=5960464477539063e-23,Zr=zn(20),fa=zn(20),Jr=zn(20),Ie=zn(20);function Wc(e,t,r,n,o,s,i,a,l){var c,u,f,v,h,_,I,A,y;for(v=s,y=n[r],A=r,h=0;A>0;h++)u=go*y|0,Ie[h]=y-ho*u|0,y=n[A-1]+u,A-=1;if(y=Yr(y,o),y-=8*e2(y*.125),I=y|0,y-=I,f=0,o>0?(h=Ie[r-1]>>24-o,I+=h,Ie[r-1]-=h<<24-o,f=Ie[r-1]>>23-o):o===0?f=Ie[r-1]>>23:y>=.5&&(f=2),f>0){for(I+=1,c=0,h=0;h<r;h++)A=Ie[h],c===0?A!==0&&(c=1,Ie[h]=16777216-A):Ie[h]=16777215-A;if(o>0)switch(o){case 1:Ie[r-1]&=8388607;break;case 2:Ie[r-1]&=4194303;break}f===2&&(y=1-y,c!==0&&(y-=Yr(1,o)))}if(y===0){for(A=0,h=r-1;h>=s;h--)A|=Ie[h];if(A===0){for(_=1;Ie[s-_]===0;_++);for(h=r+1;h<=r+_;h++){for(l[a+h]=Bc[i+h],u=0,A=0;A<=a;A++)u+=e[A]*l[a+(h-A)];n[h]=u}return r+=_,Wc(e,t,r,n,o,s,i,a,l)}}if(y===0)for(r-=1,o-=24;Ie[r]===0;)r-=1,o-=24;else y=Yr(y,-o),y>=ho?(u=go*y|0,Ie[r]=y-ho*u|0,r+=1,o+=24,Ie[r]=u):Ie[r]=y|0;for(u=Yr(1,o),h=r;h>=0;h--)n[h]=u*Ie[h],u*=go;for(h=r;h>=0;h--){for(u=0,_=0;_<=v&&_<=r-h;_++)u+=t2[_]*n[h+_];Jr[r-h]=u}for(u=0,h=r;h>=0;h--)u+=Jr[h];for(f===0?t[0]=u:t[0]=-u,u=Jr[0]-u,h=1;h<=r;h++)u+=Jr[h];return f===0?t[1]=u:t[1]=-u,I&7}function r2(e,t,r,n){var o,s,i,a,l,c,u,f,v;for(s=4,a=n-1,i=(r-3)/24|0,i<0&&(i=0),c=r-24*(i+1),f=i-a,v=a+s,u=0;u<=v;u++)f<0?Zr[u]=0:Zr[u]=Bc[f],f+=1;for(u=0;u<=s;u++){for(o=0,f=0;f<=a;f++)o+=e[f]*Zr[a+(u-f)];fa[u]=o}return l=s,Wc(e,t,l,fa,c,s,i,a,Zr)}var n2=r2;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var _2=Xe,$2=Ig,y2=Us,b2=n2,en=m2,E2=0,I2=16777216,pt=1.5707963267341256,Ut=6077100506506192e-26,tn=2*Ut,rn=3*Ut,nn=4*Ut,A2=2147483647,N2=2146435072,w2=1048575,S2=598523,O2=1072243195,C2=1073928572,P2=1074752122,T2=1074977148,R2=1075183036,F2=1075388923,H2=1075594811,L2=1094263291,mr=[0,0,0],_r=[0,0];function M2(e,t){var r,n,o,s,i,a,l,c;if(o=_2(e),s=o&A2|0,s<=O2)return t[0]=e,t[1]=0,0;if(s<=P2)return(s&w2)===S2?en(e,s,t):s<=C2?e>0?(c=e-pt,t[0]=c-Ut,t[1]=c-t[0]-Ut,1):(c=e+pt,t[0]=c+Ut,t[1]=c-t[0]+Ut,-1):e>0?(c=e-2*pt,t[0]=c-tn,t[1]=c-t[0]-tn,2):(c=e+2*pt,t[0]=c+tn,t[1]=c-t[0]+tn,-2);if(s<=H2)return s<=R2?s===T2?en(e,s,t):e>0?(c=e-3*pt,t[0]=c-rn,t[1]=c-t[0]-rn,3):(c=e+3*pt,t[0]=c+rn,t[1]=c-t[0]+rn,-3):s===F2?en(e,s,t):e>0?(c=e-4*pt,t[0]=c-nn,t[1]=c-t[0]-nn,4):(c=e+4*pt,t[0]=c+nn,t[1]=c-t[0]+nn,-4);if(s<L2)return en(e,s,t);if(s>=N2)return t[0]=NaN,t[1]=NaN,0;for(r=$2(e),n=(s>>20)-1046,c=y2(s-(n<<20|0),r),a=0;a<2;a++)mr[a]=c|0,c=(c-mr[a])*I2;for(mr[2]=c,i=3;mr[i-1]===E2;)i-=1;return l=b2(mr,_r,n,i),e<0?(t[0]=-_r[0],t[1]=-_r[1],-l):(t[0]=_r[0],t[1]=_r[1],l)}var D2=M2;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var U2=Xe,mo=Cc,pa=Pc,B2=Kc,ot=[0,0],W2=2147483647,K2=1072243195,G2=1044381696,j2=2146435072;function V2(e){var t,r;if(t=U2(e),t&=W2,t<=K2)return t<G2?1:mo(e,0);if(t>=j2)return NaN;switch(r=B2(e,ot),r&3){case 0:return mo(ot[0],ot[1]);case 1:return-pa(ot[0],ot[1]);case 2:return-mo(ot[0],ot[1]);default:return pa(ot[0],ot[1])}}var x2=V2;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var q2=Xe,ha=Cc,_o=Pc,Q2=Kc,Y2=2147483647,Z2=2146435072,J2=1072243195,e_=1045430272,st=[0,0];function t_(e){var t,r;if(t=q2(e),t&=Y2,t<=J2)return t<e_?e:_o(e,0);if(t>=Z2)return NaN;switch(r=Q2(e,st),r&3){case 0:return _o(st[0],st[1]);case 1:return ha(st[0],st[1]);case 2:return-_o(st[0],st[1]);default:return-ha(st[0],st[1])}}var r_=t_;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var s_=Se,i_=Wr,ga=z2,$o=Gc,a_=Gt,$r=Ws,yr=Gs;function l_(e){var t,r;return s_(e)?NaN:i_(e)?NaN:(r=e%2,t=a_(r),t===0||t===1?$r(0,r):t<.25?$o(yr*r):t<.75?(t=.5-t,$r(ga(yr*t),r)):t<1.25?(r=$r(1,r)-r,$o(yr*r)):t<1.75?(t-=1.5,-$r(ga(yr*t),r)):(r-=$r(2,r),$o(yr*r)))}var c_=l_;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/function A_(e){return e===0?-.010314224129834144:-.010314224129834144+e*(.0022596478090061247+e*(-.0005385953053567405+e*.0003355291926355191))}var N_=A_;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function w_(e){return e===0?.6328270640250934:.6328270640250934+e*(1.4549225013723477+e*(.9777175279633727+e*(.22896372806469245+e*.013381091853678766)))}var S_=w_;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var R_=Se,F_=Wr,H_=Gt,zt=Kr,L_=Oc,M_=f_,D_=Gs,yo=Ce,k_=v_,U_=h_,B_=m_,W_=$_,K_=b_,G_=I_,j_=N_,V_=S_,x_=C_,X_=T_,z_=.07721566490153287,q_=.3224670334241136,Q_=1,Y_=-.07721566490153287,Z_=.48383612272381005,J_=-.1475877229945939,e3=.06462494023913339,t3=-.07721566490153287,r3=1,n3=.4189385332046727,on=1.4616321449683622,o3=4503599627370496,s3=0x400000000000000,i3=8470329472543003e-37,ma=1.4616321449683622,a3=-.12148629053584961,l3=-3638676997039505e-33;function c3(e){var t,r,n,o,s,i,a,l,c,u,f,v,h;if(R_(e)||F_(e))return e;if(e===0)return yo;if(e<0?(t=!0,e=-e):t=!1,e<i3)return-zt(e);if(t){if(e>=o3||(c=M_(e),c===0))return yo;r=zt(D_/H_(c*e))}if(e===1||e===2)return 0;if(e<2)switch(e<=.9?(h=-zt(e),e>=on-1+.27?(f=1-e,n=0):e>=on-1-.27?(f=e-(ma-1),n=1):(f=e,n=2)):(h=0,e>=on+.27?(f=2-e,n=0):e>=on-.27?(f=e-ma,n=1):(f=e-1,n=2)),n){case 0:v=f*f,i=z_+v*k_(v),s=v*(q_+v*U_(v)),a=f*i+s,h+=a-.5*f;break;case 1:v=f*f,u=v*f,i=Z_+u*K_(u),s=J_+u*G_(u),o=e3+u*j_(u),a=v*i-(l3-u*(s+f*o)),h+=a3+a;break;case 2:i=f*(t3+f*V_(f)),s=r3+f*x_(f),h+=-.5*f+i/s;break}else if(e<8)switch(n=L_(e),f=e-n,a=f*(Y_+f*W_(f)),l=Q_+f*B_(f),h=.5*f+a/l,v=1,n){case 7:v*=f+6;case 6:v*=f+5;case 5:v*=f+4;case 4:v*=f+3;case 3:v*=f+2,h+=zt(v)}else e<s3?(c=zt(e),v=1/e,f=v*v,u=n3+v*X_(f),h=(e-.5)*(c-1)+u):h=e*(zt(e)-1);return t&&(h=r-h),h}var u3=c3;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var h3=Se,_a=Xe,$a=Xn,g3=Ce,m3=He,ya=fr,_3=p3,bo=.6931471803691238,Eo=19082149292705877e-26,$3=.41421356237309503,y3=-.2928932188134525,b3=1862645149230957e-24,E3=5551115123125783e-32,I3=9007199254740992,A3=.6666666666666666;function N3(e){var t,r,n,o,s,i,a,l,c,u;if(e<-1||h3(e))return NaN;if(e===-1)return m3;if(e===g3||e===0)return e;if(e<0?n=-e:n=e,u=1,n<$3){if(n<b3)return n<E3?e:e-e*e*.5;e>y3&&(u=0,o=e,r=1)}return u!==0&&(n<I3?(c=1+e,r=_a(c),u=(r>>20)-ya,u>0?s=1-(c-e):s=e-(c-1),s/=c):(c=e,r=_a(c),u=(r>>20)-ya,s=0),r&=1048575,r<434334?c=$a(c,r|1072693248):(u+=1,c=$a(c,r|1071644672),r=1048576-r>>2),o=c-1),t=.5*o*o,r===0?o===0?(s+=u*Eo,u*bo+s):(l=t*(1-A3*o),u*bo-(l-(u*Eo+s)-o)):(i=o/(2+o),a=i*i,l=a*_3(a),u===0?o-(t-i*(t+l)):u*bo-(t-(i*(t+l)+(u*Eo+s))-o))}var w3=N3;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var S3=w3,js=S3;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var H3=Vn;function L3(e){return H3(e/2)}var M3=L3;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var x3=ur,cs;x3===!0?cs=0:cs=1;var X3=cs;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var z3=lr,q3=cr,Q3=X3,us=new q3(1),Y3=new z3(us.buffer);function Z3(e,t){return us[0]=e,Y3[Q3]=t>>>0,us[0]}var J3=Z3;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e6=J3,qn=e6;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Ea=Vc,o6=Ws,s6=He,sn=Ce;function i6(e,t){return t===s6?sn:t===sn?0:t>0?Ea(t)?e:0:Ea(t)?o6(sn,e):sn}var a6=i6;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var l6=Xe,c6=2147483647,u6=1072693247,an=1e300,ln=1e-300;function f6(e,t){var r,n;return n=l6(e),r=n&c6,r<=u6?t<0?an*an:ln*ln:t>0?an*an:ln*ln}var d6=f6;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var _6=Xe,cn=qn,Aa=Xn,$6=fr,y6=m6,b6=1048575,Na=1048576,E6=1072693248,I6=536870912,A6=524288,N6=20,w6=9007199254740992,S6=.9617966939259756,O6=.9617967009544373,C6=-7028461650952758e-24,P6=[1,1.5],T6=[0,.5849624872207642],R6=[0,1350039202129749e-23];function F6(e,t,r){var n,o,s,i,a,l,c,u,f,v,h,_,I,A,y,M,B,W,j,te,G,O;return te=0,r<Na&&(t*=w6,te-=53,r=_6(t)),te+=(r>>N6)-$6|0,G=r&b6|0,r=G|E6|0,G<=235662?O=0:G<767610?O=1:(O=0,te+=1,r-=Na),t=Aa(t,r),u=P6[O],W=t-u,j=1/(t+u),o=W*j,i=cn(o,0),n=(r>>1|I6)+A6,n+=O<<18,l=Aa(0,n),c=t-(l-u),a=j*(W-i*l-i*c),s=o*o,B=s*s*y6(s),B+=a*(i+o),s=i*i,l=3+s+B,l=cn(l,0),c=B-(l-3-s),W=i*l,j=a*l+c*o,v=W+j,v=cn(v,0),h=j-(v-W),_=O6*v,I=C6*v+h*S6+R6[O],f=T6[O],M=te,A=_+I+f+M,A=cn(A,0),y=I-(A-M-f-_),e[0]=A,e[1]=y,e}var H6=F6;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function L6(e){return e===0?.5:.5+e*(-.3333333333333333+e*.25)}var M6=L6;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var D6=qn,k6=M6,U6=1.4426950408889634,B6=1.4426950216293335,W6=19259629911266175e-24;function K6(e,t){var r,n,o,s,i,a;return o=t-1,s=o*o*k6(o),i=B6*o,a=o*W6-s*U6,n=i+a,n=D6(n,0),r=a-(n-i),e[0]=n,e[1]=r,e}var G6=K6;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var z6=Xe,wa=Xn,q6=qn,Q6=xc,Y6=Ks,Z6=V6,Sa=fr,J6=X6,Oa=2147483647,Ca=1048575,Pa=1048576,e4=1071644672,br=20,t4=.6931471824645996,r4=-1904654299957768e-24;function n4(e,t,r){var n,o,s,i,a,l,c,u,f,v,h;return v=e&Oa|0,h=(v>>br)-Sa|0,f=0,v>e4&&(f=e+(Pa>>h+1)>>>0,h=((f&Oa)>>br)-Sa|0,n=(f&~(Ca>>h))>>>0,s=wa(0,n),f=(f&Ca|Pa)>>br-h>>>0,e<0&&(f=-f),t-=s),s=r+t,s=q6(s,0),a=s*t4,l=(r-(s-t))*Z6+s*r4,u=a+l,c=l-(u-a),s=u*u,o=u-s*J6(s),i=u*o/(o-2)-(c+u*c),u=1-(i-u),e=z6(u),e=Q6(e),e+=f<<br>>>0,e>>br<=0?u=Y6(u,f):u=wa(u,e),u}var o4=n4;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Ta=Se,Ra=Vc,Fa=Wr,s4=Vn,Ha=V3,i4=Gt,Io=Bs,a4=qn,La=xc,l4=He,c4=Ce,u4=a6,f4=d6,d4=h6,v4=H6,p4=G6,h4=o4,Ao=2147483647,g4=1072693247,m4=1105199104,_4=1139802112,Ma=1083179008,$4=1072693248,y4=1083231232,b4=3230714880>>>0,Da=31,ht=1e300,gt=1e-300,E4=8008566259537294e-32,it=[0,0],ka=[0,0];function Xc(e,t){var r,n,o,s,i,a,l,c,u,f,v,h,_,I,A,y;if(Ta(e)||Ta(t))return NaN;if(Io(it,t),a=it[0],l=it[1],l===0){if(t===0)return 1;if(t===1)return e;if(t===-1)return 1/e;if(t===.5)return Ha(e);if(t===-.5)return 1/Ha(e);if(t===2)return e*e;if(t===3)return e*e*e;if(t===4)return e*=e,e*e;if(Fa(t))return d4(e,t)}if(Io(it,e),s=it[0],i=it[1],i===0){if(s===0)return u4(e,t);if(e===1)return 1;if(e===-1&&Ra(t))return-1;if(Fa(e))return e===l4?Xc(-0,-t):t<0?0:c4}if(e<0&&s4(t)===!1)return(e-e)/(e-e);if(o=i4(e),r=s&Ao|0,n=a&Ao|0,c=s>>>Da|0,u=a>>>Da|0,c&&Ra(t)?c=-1:c=1,n>m4){if(n>_4)return f4(e,t);if(r<g4)return u===1?c*ht*ht:c*gt*gt;if(r>$4)return u===0?c*ht*ht:c*gt*gt;_=p4(ka,o)}else _=v4(ka,o,r);if(f=a4(t,0),h=(t-f)*_[0]+t*_[1],v=f*_[0],I=h+v,Io(it,I),A=La(it[0]),y=La(it[1]),A>=Ma){if((A-Ma|y)!==0||h+E4>I-v)return c*ht*ht}else if((A&Ao)>=y4&&((A-b4|y)!==0||h<=I-v))return c*gt*gt;return I=h4(A,v,h),c*I}var I4=Xc;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/function N4(e){return e===0?.16666666666666602:.16666666666666602+e*(-.0027777777777015593+e*(6613756321437934e-20+e*(-16533902205465252e-22+e*41381367970572385e-24)))}var w4=N4;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var S4=Ks,O4=w4;function C4(e,t,r){var n,o,s,i;return n=e-t,o=n*n,s=n-o*O4(o),i=1-(t-n*s/(2-s)-e),S4(i,r)}var P4=C4;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var T4=Se,Ua=Oc,R4=He,Ba=Ce,F4=P4,H4=.6931471803691238,L4=19082149292705877e-26,Wa=1.4426950408889634,M4=709.782712893384,D4=-745.1332191019411,qc=1/(1<<28),k4=-qc;function U4(e){var t,r,n;return T4(e)||e===Ba?e:e===R4?0:e>M4?Ba:e<D4?0:e>k4&&e<qc?1+e:(e<0?n=Ua(Wa*e-.5):n=Ua(Wa*e+.5),t=e-n*H4,r=n*L4,F4(t,r,n))}var B4=U4;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var n$=Se,o$=Vn,s$=jc,Ga=Gt,i$=Br,a$=Gc,ja=Ce,Va=He,xa=Gs,Xa=q4,za=e$,l$=r$;function c$(e){var t,r,n,o;if(o$(e)&&e<0||e===Va||n$(e))return NaN;if(e===0)return s$(e)?Va:ja;if(e>171.61447887182297)return ja;if(e<-170.5674972726612)return 0;if(r=Ga(e),r>33)return e>=0?Xa(e):(n=i$(r),(n&1)===0?t=-1:t=1,o=r-n,o>.5&&(n+=1,o=r-n),o=r*a$(xa*o),t*xa/(Ga(o)*Xa(r)));for(o=1;e>=3;)e-=1,o*=e;for(;e<0;){if(e>-1e-9)return za(e,o);o/=e,e+=1}for(;e<2;){if(e<1e-9)return za(e,o);o/=e,e+=1}return e===2?o:(e-=2,o*l$(e))}var u$=c$;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var qa=m$,No=Se,_$=He,un=Ce;function $$(e,t){var r,n,o,s;if(r=arguments.length,r===2)return No(e)||No(t)?NaN:e===un||t===un?un:e===t&&e===0?qa(e)?e:t:e>t?e:t;for(n=_$,s=0;s<r;s++){if(o=arguments[s],No(o)||o===un)return o;(o>n||o===n&&o===0&&qa(o))&&(n=o)}return n}var y$=$$;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Qa=jc,wo=Se,fn=He,I$=Ce;function A$(e,t){var r,n,o,s;if(r=arguments.length,r===2)return wo(e)||wo(t)?NaN:e===fn||t===fn?fn:e===t&&e===0?Qa(e)?e:t:e<t?e:t;for(n=I$,s=0;s<r;s++){if(o=arguments[s],wo(o)||o===fn)return o;(o<n||o===n&&o===0&&Qa(o))&&(n=o)}return n}var N$=A$;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var w$=N$,S$=w$;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var F$=zc,H$=R$,L$=9490626562425156e-8,M$=3745194030963158e291;function D$(e){return e<10?NaN:e>=M$?0:e<L$?H$(2*F$(10/e,2)-1)/e:1/(e*12)}var k$=D$;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var U$=d3,Ya=js,So=d$,B$=E$,W$=S$,dn=Kr,K$=C$,G$=He,Za=Ce,Er=k$;function j$(e,t){var r,n,o;return n=W$(e,t),o=B$(e,t),n<0?NaN:n===0?Za:o===Za?G$:n>=10?(r=Er(n)+Er(o)-Er(n+o),-.5*dn(o)+K$+r+(n-.5)*dn(n/(n+o))+o*Ya(-n/(n+o))):o>=10?(r=Er(o)-Er(n+o),U$(n)+r+n-n*dn(n+o)+(o-.5)*Ya(-n/(n+o))):dn(So(n)*(So(o)/So(n+o)))}var V$=j$;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Ja=Vn,el=Se,z$=X$,q$=Gt,tl=Kr,rl=He;function fs(e,t){return el(e)||el(t)?NaN:!Ja(e)||!Ja(t)?NaN:e<0?fs(-e+t-1,t):t<0?rl:t===0?0:t===1?tl(q$(e)):e<t?rl:e-t<2?fs(e,e-t):-tl(e+1)-z$(e-t+1,t+1)}var Q$=fs;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var nl=Ac,Z$=Yc,Oo=Se,J$=js,ey=Vs,ty=Kr,ry=Ce;function ny(e,t,r){var n;return Oo(e)||Oo(t)||Oo(r)||r<0||r>1||!nl(t)||t===ry?NaN:nl(e)?e>t?0:r===0?e===0?1:0:r===1?e===t?1:0:(n=Z$(t,e),n+=e*ty(r)+(t-e)*J$(-r),ey(n)):0}var oy=ny;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var il=Ac,gy=Zc,my=Yc,al=hy.factory,Co=Se,_y=js,$y=Vs,yy=Kr,by=Ce;function Ey(e,t){if(Co(e)||Co(t)||!il(e)||e===by||t<0||t>1)return gy(NaN);if(t===0||e===0)return al(0);if(t===1)return al(e);return r;function r(n){var o;return Co(n)?NaN:il(n)?n>e?0:(o=my(e,n),o+=n*yy(t)+(e-n)*_y(-t),$y(o)):0}}var Iy=Ey;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ay=ks,eu=oy,Ny=Iy;Ay(eu,"factory",Ny);var wy=eu;const tu={E:.1249,T:.0928,A:.0804,O:.0764,I:.0757,N:.0723,S:.0651,R:.0628,H:.0505,L:.0407,D:.0382,C:.0334,U:.0273,M:.0251,F:.024,P:.0214,G:.0187,W:.0168,Y:.0166,B:.0148,V:.0105,K:.0054,X:.0023,J:.0016,Q:.0012,Z:9e-4};function Sy(e,t,r=tu){const n={};let o=0;for(const s of Object.keys(r))o+=n[s]=wy(e,t,r[s]);for(const s of Object.keys(n))n[s]/=o;return n}function Oy(e){const t=Array(26).fill(0);for(let n=0;n<e.length;++n){const o=e.charCodeAt(n);65<=o&&o<=90?++t[o-65]:97<=o&&o<=122&&++t[o-97]}const r={};for(let n=0;n<26;++n)r[String.fromCharCode(n+65)]=t[n];return r}function Cy(e,t){let r=Oy(e),n=tu;if(t&&t.length){const i=new Set(t);let a=1;if(n=Object.fromEntries(Object.entries(n).filter(([l,c])=>i.has(l)?(a-=c,!0):!1)),a<1)for(const l of Object.keys(n))n[l]/=a;r=Object.fromEntries(Object.entries(r).filter(l=>!i.has(l[0])))}const o=Object.values(r).reduce((i,a)=>i+a,0),s=Object.keys(r).reduce((i,a)=>(r[a]&&(i[a]={count:r[a],decodesToProbs:Sy(r[a],o,n)}),i),{});return{totalLetters:o,letterDetails:s}}function ru(e){return Object.entries(e).sort((t,r)=>r[1]-t[1]).map(t=>t[0])}function Py(...e){const t=Math.min(...e),r=Math.max(...e)-t;return e.map(n=>(n-t)/r)}function Ty(e,t,r){const n=(a,l)=>Math.round(a+(l-a)*r),o=n(e.r,t.r),s=n(e.g,t.g),i=n(e.b,t.b);return{r:o,g:s,b:i}}const dr=fc("encoded",()=>{const e=Me(""),t=Kt(new Map),r=he(()=>Cy(e.value)),n=(i,a)=>{for(const[l,c]of i.entries())if(c===a)return l},o=i=>i.length===1&&/[a-z]/i.test(i);return{message:e,decryptionKeys:t,allLetterStats:r,addKey:(i,a)=>{if(!o(i)||!o(a))return!1;i=i.toUpperCase(),a=a.toUpperCase();const l=n(t,a);return l&&t.delete(l),t.set(i,a),!0}}}),nu=fc("raw",()=>({message:Me("")})),Ry=e=>(kr("data-v-61826d58"),e=e(),Ur(),e),Fy=Ry(()=>R("p",null," Enter text below - either plain text and click encode, or a message encoded with a simple alphabetical letter for letter substitution, and click decode. This app provides some tools to help you, but it does not decode the message for you. ",-1)),Hy=rt({__name:"HomeView",setup(e){const t=dr(),r=nu(),n=Me(t.message||r.message),o=Ms(),s=()=>{r.message=n.value,t.message="",o.push({name:"encode"})},i=()=>{t.message!==n.value&&(r.message="",t.decryptionKeys.clear(),t.message=n.value),o.push({name:"decode"})};return(a,l)=>(Z(),J(ae,null,[Fy,R("fieldset",null,[R("div",null,[mn(R("textarea",{id:"message","onUpdate:modelValue":l[0]||(l[0]=c=>n.value=c)},null,512),[[C0,n.value]])]),R("button",{class:"btn",onClick:i,role:"link"},"Decode"),R("button",{class:"btn",onClick:s,role:"link"},"Encode")])],64))}});const Ly=St(Hy,[["__scopeId","data-v-61826d58"]]);function My(){const e=Array(26);for(let t=0;t<26;++t)e[t]=[String.fromCharCode(t+65),Math.random()];return e.sort((t,r)=>t[1]-r[1]),e.map(t=>t[0])}function ll(e,t){t||(t=My());const r=Array(e.length);for(let n=0;n<e.length;++n){const o=e.charCodeAt(n);65<=o&&o<=90?r[n]=t[o-65]:97<=o&&o<=122?r[n]=t[o-97].toLowerCase():r[n]=e[n]}return r.join("")}const Dy=["value"],ky={for:"noSpaces"},Uy={for:"noSpaces"},By={for:"noSpaces"},Wy=rt({__name:"EncodeMsg",setup(e){const t=nu().message,r=Me(ll(t)),n=Me(!1),o=Me(!1),s=Me(!1);t||Ms().push("/");const i=he(()=>{let l=r.value;return n.value&&(l=l.replace(/\s/g,"")),o.value&&(l=l.replace(/[^a-zA-Z\s]/g,"")),s.value&&(l=l.toUpperCase()),l}),a=()=>{r.value=ll(t)};return(l,c)=>(Z(),J(ae,null,[R("div",null,[R("textarea",{readonly:"",value:Ae(i)},null,8,Dy)]),R("fieldset",null,[R("label",ky,[mn(R("input",{type:"checkbox","onUpdate:modelValue":c[0]||(c[0]=u=>n.value=u),id:"noSpaces"},null,512),[[no,n.value]]),At(" Exclude whitespace ")]),R("label",Uy,[mn(R("input",{type:"checkbox","onUpdate:modelValue":c[1]||(c[1]=u=>o.value=u),id:"noSpaces"},null,512),[[no,o.value]]),At(" Exclude punctuation ")]),R("label",By,[mn(R("input",{type:"checkbox","onUpdate:modelValue":c[2]||(c[2]=u=>s.value=u),id:"noSpaces"},null,512),[[no,s.value]]),At(" Capitals Only ")])]),R("button",{class:"btn",onClick:a},"New random key")],64))}});const Ky=St(Wy,[["__scopeId","data-v-a6737f22"]]),Gy=["disabled"],jy=["onClick","title"],Vy=rt({__name:"DecodingKeyboard",props:{activeEncodedLetter:null},emits:["key","enter"],setup(e){const t=e,r=dr(),n=["QWERTYUIOP".split(""),"ASDFGHJKL".split(""),[..."ZXCVBNM".split(""),"enter"]],o=Object.fromEntries(Array.from({length:26},(a,l)=>[String.fromCharCode(l+65),1/26])),s=he(()=>t.activeEncodedLetter?r.allLetterStats.letterDetails[t.activeEncodedLetter].decodesToProbs:o),i=he(()=>{const a={r:0,g:255,b:0},l={r:255,g:0,b:0},c=Py(...Object.values(s.value)),u=Object.fromEntries(Object.keys(s.value).map((v,h)=>[v,c[h]])),f=new Set(r.decryptionKeys.values());return n.map(v=>v.map(h=>{var _;return h.length===1?{value:h,colour:Ty(l,a,u[h]||0),p:`probability=${((_=s.value[h])==null?void 0:_.toFixed(3))||"[select letter]"}`,isInUse:f.has(h)}:{value:h}}))});return(a,l)=>(Z(),J("fieldset",{id:"keyboard",disabled:!e.activeEncodedLetter},[(Z(!0),J(ae,null,Je(Ae(i),(c,u)=>(Z(),J("div",{class:"row",key:u},[R("div",{class:yt(`spacer${u}`)},null,2),(Z(!0),J(ae,null,Je(c,f=>(Z(),J(ae,{key:f},[f.colour?(Z(),J("button",{key:0,type:"button",class:yt(f.isInUse?"used-key":""),style:Sn({borderColor:`rgb(${f.colour.r},${f.colour.g},${f.colour.b})`}),onClick:v=>a.$emit("key",f.value),title:f.p},[R("span",null,$e(f.value),1)],14,jy)):(Z(),J("button",{key:1,type:"button",class:"non-alpha",onClick:l[0]||(l[0]=v=>a.$emit("enter"))},[R("span",null,$e(f.value),1)]))],64))),128)),R("div",{class:yt(`spacer${u}`)},null,2)]))),128))],8,Gy))}});const xy=St(Vy,[["__scopeId","data-v-229a19a1"]]),Xy={id:"coded-text"},zy={key:0,class:"non-alpha char"},qy=["title","onClick"],Qy=rt({__name:"PartialDecodedText",props:{activeLetter:null},emits:["update:active-letter"],setup(e,{emit:t}){const r=dr(),n=he(()=>r.message.split(`
`).map(s=>{var a;const i=Array(s.length);for(let l=0;l<s.length;++l){const c=s[l],u=c.charCodeAt(0),f=65<=u&&u<=90;if(f||97<=u&&u<=122){let v,h;f?(h=c,v=r.decryptionKeys.get(c)):(h=String.fromCharCode(u-32),v=(a=r.decryptionKeys.get(h))==null?void 0:a.toLowerCase());const _=Boolean(v);i[l]={id:l,uc:h,display:v||c,prior:_?`decrypted from '${c}''`:void 0,isDecrypted:_,isNonAlpha:!1}}else i[l]={id:l,display:c,isNonAlpha:!0}}return i}));function o(s){t("update:active-letter",s)}return(s,i)=>(Z(),J("div",Xy,[(Z(!0),J(ae,null,Je(Ae(n),(a,l)=>(Z(),J("div",{key:l},[(Z(!0),J(ae,null,Je(a,c=>(Z(),J(ae,{key:c.id},[c.isNonAlpha?(Z(),J("span",zy,$e(c.display),1)):(Z(),J("span",{key:1,class:yt(["alpha char",{current:c.uc===e.activeLetter,decrypted:c.isDecrypted}]),title:c.prior,onClick:u=>o(c.uc)},$e(c.display),11,qy))],64))),128))]))),128))]))}});const Yy=St(Qy,[["__scopeId","data-v-09294748"]]),xs=e=>(kr("data-v-86a55dd9"),e=e(),Ur(),e),Zy={id:"letter-details"},Jy=xs(()=>R("td",null,null,-1)),e5=["onClick"],t5=xs(()=>R("th",null,"count",-1)),r5=xs(()=>R("th",null,"decoded",-1)),n5=rt({__name:"DecodingKeyStats",props:{activeLetter:null},setup(e){const t=dr(),r=he(()=>Object.keys(t.allLetterStats.letterDetails)),n=he(()=>r.value.map(i=>t.decryptionKeys.get(i)||"")),o=he(()=>Object.values(t.allLetterStats.letterDetails).map(i=>ru(i.decodesToProbs).map(a=>({letter:a,prob:i.decodesToProbs[a].toFixed(3)})))),s=i=>{switch(Math.round(i%10)){case 1:return"st";case 2:return"nd";case 3:return"rd";default:return"th"}};return(i,a)=>(Z(),J("div",Zy,[R("table",null,[R("tbody",null,[R("tr",null,[Jy,(Z(!0),J(ae,null,Je(Ae(r),l=>(Z(),J("th",{key:l},[R("a",{href:"#",class:yt(e.activeLetter===l?"active":""),onClick:F0(c=>i.$emit("update:active-letter",l),["prevent"])},$e(l),11,e5)]))),128))]),R("tr",null,[t5,(Z(!0),J(ae,null,Je(Ae(t).allLetterStats.letterDetails,(l,c)=>(Z(),J("td",{key:c},$e(l.count),1))),128))]),R("tr",null,[r5,(Z(!0),J(ae,null,Je(Ae(n),l=>(Z(),J("td",{key:l},$e(l),1))),128))]),(Z(),J(ae,null,Je(3,l=>R("tr",{key:l},[R("th",null,[At($e(l),1),R("sup",null,$e(s(l)),1)]),(Z(!0),J(ae,null,Je(Ae(o),(c,u)=>(Z(),J("td",{key:u},$e(c[l-1].letter)+"\xA0("+$e(c[l-1].prob)+") ",1))),128))])),64))])])]))}});const o5=St(n5,[["__scopeId","data-v-86a55dd9"]]),s5=e=>(kr("data-v-3efff174"),e=e(),Ur(),e),i5={key:0,class:"message"},a5=s5(()=>R("hr",null,null,-1)),l5=rt({__name:"DecodeMsg",setup(e){const t=Me(""),r=Me(""),n=dr(),o=Ms();n.message||o.push({name:"home"}),Ss(()=>{window.addEventListener("keyup",s),a("click on letter within the message to select the encoded letter, then use the keyboard to determine what the real letter is")}),Un(()=>{window.removeEventListener("keyup",s)});function s(l){i(l.key)}function i(l){n.addKey(t.value,l)}function a(l,c=3e3){r.value=l,c>0&&setTimeout(()=>{r.value=""},c)}return(l,c)=>(Z(),J(ae,null,[ye(Hs,null,{default:ws(()=>[r.value?(Z(),J("div",i5,$e(r.value),1)):qf("",!0)]),_:1}),ye(Yy,{"active-letter":t.value,"onUpdate:active-letter":c[0]||(c[0]=u=>t.value=u)},null,8,["active-letter"]),a5,R("div",null,[R("h4",null,[At(" Total letters: "),R("output",null,$e(Ae(n).allLetterStats.totalLetters),1)])]),ye(xy,{onKey:i,onEnter:c[1]||(c[1]=u=>Ae(o).push({name:"decoded-key-details"})),"active-encoded-letter":t.value},null,8,["active-encoded-letter"]),ye(o5,{"active-letter":t.value,"onUpdate:active-letter":c[2]||(c[2]=u=>t.value=u)},null,8,["active-letter"])],64))}});const c5=St(l5,[["__scopeId","data-v-3efff174"]]),ou=e=>(kr("data-v-4a52d52e"),e=e(),Ur(),e),u5={id:"letter-details"},f5=ou(()=>R("tr",null,[R("th",{rowspan:"2"},"Encoded"),R("th",{rowspan:"2"},"Decodes to"),R("th",{rowspan:"2"},"Occurences"),R("th",{colspan:"3"},"probabilities")],-1)),d5=ou(()=>R("tr",null,[R("th",null,"Value"),R("th",null,"Rank / 26"),R("th",null,"max (all letters)")],-1)),v5=["onClick"],p5=rt({__name:"DecodedKeysFinalDetails",setup(e){const t=dr(),r=he(()=>[...t.decryptionKeys.keys()].map(n=>{const o=t.decryptionKeys.get(n),s=t.allLetterStats.letterDetails[n],i=ru(s.decodesToProbs),a=l=>l.toFixed(4);return{encoded:n,decoded:o,count:s.count,pValue:a(s.decodesToProbs[o]),rank:i.indexOf(o)+1,maxP:s.decodesToProbs[i[0]].toFixed(3),maxLetter:i[0]}}));return(n,o)=>{const s=Nf("RouterLink");return Z(),J(ae,null,[R("div",u5,[R("table",null,[R("tbody",null,[f5,d5,(Z(!0),J(ae,null,Je(Ae(r),i=>(Z(),J("tr",{key:i.encoded},[R("td",null,$e(i.encoded),1),R("td",null,$e(i.decoded),1),R("td",null,$e(i.count),1),R("td",null,$e(i.pValue),1),R("td",null,$e(i.rank),1),R("td",null,$e(i.maxP)+"\xA0("+$e(i.maxLetter)+")",1)]))),128))])])]),ye(s,{to:"/decode",custom:""},{default:ws(({navigate:i})=>[R("button",{class:"btn",onClick:i,role:"link"},"Back to decoding",8,v5)]),_:1})],64)}}});const h5=St(p5,[["__scopeId","data-v-4a52d52e"]]),g5=Vd({history:ld("/letter-swap-decoder/"),routes:[{path:"/",name:"home",component:Ly},{path:"/decode",name:"decode",component:c5},{path:"/encode",name:"encode",component:Ky},{path:"/decoded-key-details",name:"decoded-key-details",component:h5}]});const Xs=M0(Yd);Xs.use(U0());Xs.use(g5);Xs.mount("#app");
