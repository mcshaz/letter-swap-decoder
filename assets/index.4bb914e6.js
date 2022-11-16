(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerpolicy&&(s.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?s.credentials="include":o.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(o){if(o.ep)return;o.ep=!0;const s=r(o);fetch(o.href,s)}})();function gs(e,t){const r=Object.create(null),n=e.split(",");for(let o=0;o<n.length;o++)r[n[o]]=!0;return t?o=>!!r[o.toLowerCase()]:o=>!!r[o]}function Cn(e){if(W(e)){const t={};for(let r=0;r<e.length;r++){const n=e[r],o=Ee(n)?du(n):Cn(n);if(o)for(const s in o)t[s]=o[s]}return t}else{if(Ee(e))return e;if(le(e))return e}}const cu=/;(?![^(]*\))/g,uu=/:([^]+)/,fu=/\/\*.*?\*\//gs;function du(e){const t={};return e.replace(fu,"").split(cu).forEach(r=>{if(r){const n=r.split(uu);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}function Et(e){let t="";if(Ee(e))t=e;else if(W(e))for(let r=0;r<e.length;r++){const n=Et(e[r]);n&&(t+=n+" ")}else if(le(e))for(const r in e)e[r]&&(t+=r+" ");return t.trim()}const vu="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",pu=gs(vu);function fl(e){return!!e||e===""}function hu(e,t){if(e.length!==t.length)return!1;let r=!0;for(let n=0;r&&n<e.length;n++)r=Pn(e[n],t[n]);return r}function Pn(e,t){if(e===t)return!0;let r=ei(e),n=ei(t);if(r||n)return r&&n?e.getTime()===t.getTime():!1;if(r=Rr(e),n=Rr(t),r||n)return e===t;if(r=W(e),n=W(t),r||n)return r&&n?hu(e,t):!1;if(r=le(e),n=le(t),r||n){if(!r||!n)return!1;const o=Object.keys(e).length,s=Object.keys(t).length;if(o!==s)return!1;for(const i in e){const a=e.hasOwnProperty(i),l=t.hasOwnProperty(i);if(a&&!l||!a&&l||!Pn(e[i],t[i]))return!1}}return String(e)===String(t)}function dl(e,t){return e.findIndex(r=>Pn(r,t))}const ie=e=>Ee(e)?e:e==null?"":W(e)||le(e)&&(e.toString===hl||!X(e.toString))?JSON.stringify(e,vl,2):String(e),vl=(e,t)=>t&&t.__v_isRef?vl(e,t.value):Jt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((r,[n,o])=>(r[`${n} =>`]=o,r),{})}:Rn(t)?{[`Set(${t.size})`]:[...t.values()]}:le(t)&&!W(t)&&!gl(t)?String(t):t,de={},Zt=[],Ve=()=>{},gu=()=>!1,mu=/^on[^a-z]/,Tn=e=>mu.test(e),ms=e=>e.startsWith("onUpdate:"),Ne=Object.assign,_s=(e,t)=>{const r=e.indexOf(t);r>-1&&e.splice(r,1)},_u=Object.prototype.hasOwnProperty,J=(e,t)=>_u.call(e,t),W=Array.isArray,Jt=e=>Wr(e)==="[object Map]",Rn=e=>Wr(e)==="[object Set]",ei=e=>Wr(e)==="[object Date]",X=e=>typeof e=="function",Ee=e=>typeof e=="string",Rr=e=>typeof e=="symbol",le=e=>e!==null&&typeof e=="object",pl=e=>le(e)&&X(e.then)&&X(e.catch),hl=Object.prototype.toString,Wr=e=>hl.call(e),yu=e=>Wr(e).slice(8,-1),gl=e=>Wr(e)==="[object Object]",ys=e=>Ee(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,mn=gs(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Fn=e=>{const t=Object.create(null);return r=>t[r]||(t[r]=e(r))},$u=/-(\w)/g,rt=Fn(e=>e.replace($u,(t,r)=>r?r.toUpperCase():"")),bu=/\B([A-Z])/g,ir=Fn(e=>e.replace(bu,"-$1").toLowerCase()),Ln=Fn(e=>e.charAt(0).toUpperCase()+e.slice(1)),Jn=Fn(e=>e?`on${Ln(e)}`:""),Fr=(e,t)=>!Object.is(e,t),_n=(e,t)=>{for(let r=0;r<e.length;r++)e[r](t)},In=(e,t,r)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:r})},Lr=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let ti;const Eu=()=>ti||(ti=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Je;class ml{constructor(t=!1){this.detached=t,this.active=!0,this.effects=[],this.cleanups=[],this.parent=Je,!t&&Je&&(this.index=(Je.scopes||(Je.scopes=[])).push(this)-1)}run(t){if(this.active){const r=Je;try{return Je=this,t()}finally{Je=r}}}on(){Je=this}off(){Je=this.parent}stop(t){if(this.active){let r,n;for(r=0,n=this.effects.length;r<n;r++)this.effects[r].stop();for(r=0,n=this.cleanups.length;r<n;r++)this.cleanups[r]();if(this.scopes)for(r=0,n=this.scopes.length;r<n;r++)this.scopes[r].stop(!0);if(!this.detached&&this.parent&&!t){const o=this.parent.scopes.pop();o&&o!==this&&(this.parent.scopes[this.index]=o,o.index=this.index)}this.parent=void 0,this.active=!1}}}function _l(e){return new ml(e)}function Iu(e,t=Je){t&&t.active&&t.effects.push(e)}const $s=e=>{const t=new Set(e);return t.w=0,t.n=0,t},yl=e=>(e.w&Nt)>0,$l=e=>(e.n&Nt)>0,Au=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=Nt},wu=e=>{const{deps:t}=e;if(t.length){let r=0;for(let n=0;n<t.length;n++){const o=t[n];yl(o)&&!$l(o)?o.delete(e):t[r++]=o,o.w&=~Nt,o.n&=~Nt}t.length=r}},Lo=new WeakMap;let Nr=0,Nt=1;const Ho=30;let Ge;const Bt=Symbol(""),Mo=Symbol("");class bs{constructor(t,r=null,n){this.fn=t,this.scheduler=r,this.active=!0,this.deps=[],this.parent=void 0,Iu(this,n)}run(){if(!this.active)return this.fn();let t=Ge,r=It;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Ge,Ge=this,It=!0,Nt=1<<++Nr,Nr<=Ho?Au(this):ri(this),this.fn()}finally{Nr<=Ho&&wu(this),Nt=1<<--Nr,Ge=this.parent,It=r,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Ge===this?this.deferStop=!0:this.active&&(ri(this),this.onStop&&this.onStop(),this.active=!1)}}function ri(e){const{deps:t}=e;if(t.length){for(let r=0;r<t.length;r++)t[r].delete(e);t.length=0}}let It=!0;const bl=[];function ar(){bl.push(It),It=!1}function lr(){const e=bl.pop();It=e===void 0?!0:e}function Me(e,t,r){if(It&&Ge){let n=Lo.get(e);n||Lo.set(e,n=new Map);let o=n.get(r);o||n.set(r,o=$s()),El(o)}}function El(e,t){let r=!1;Nr<=Ho?$l(e)||(e.n|=Nt,r=!yl(e)):r=!e.has(Ge),r&&(e.add(Ge),Ge.deps.push(e))}function ut(e,t,r,n,o,s){const i=Lo.get(e);if(!i)return;let a=[];if(t==="clear")a=[...i.values()];else if(r==="length"&&W(e)){const l=Lr(n);i.forEach((u,c)=>{(c==="length"||c>=l)&&a.push(u)})}else switch(r!==void 0&&a.push(i.get(r)),t){case"add":W(e)?ys(r)&&a.push(i.get("length")):(a.push(i.get(Bt)),Jt(e)&&a.push(i.get(Mo)));break;case"delete":W(e)||(a.push(i.get(Bt)),Jt(e)&&a.push(i.get(Mo)));break;case"set":Jt(e)&&a.push(i.get(Bt));break}if(a.length===1)a[0]&&ko(a[0]);else{const l=[];for(const u of a)u&&l.push(...u);ko($s(l))}}function ko(e,t){const r=W(e)?e:[...e];for(const n of r)n.computed&&ni(n);for(const n of r)n.computed||ni(n)}function ni(e,t){(e!==Ge||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const Nu=gs("__proto__,__v_isRef,__isVue"),Il=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Rr)),Su=Es(),Ou=Es(!1,!0),Cu=Es(!0),oi=Pu();function Pu(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...r){const n=ee(this);for(let s=0,i=this.length;s<i;s++)Me(n,"get",s+"");const o=n[t](...r);return o===-1||o===!1?n[t](...r.map(ee)):o}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...r){ar();const n=ee(this)[t].apply(this,r);return lr(),n}}),e}function Es(e=!1,t=!1){return function(n,o,s){if(o==="__v_isReactive")return!e;if(o==="__v_isReadonly")return e;if(o==="__v_isShallow")return t;if(o==="__v_raw"&&s===(e?t?Vu:Ol:t?Sl:Nl).get(n))return n;const i=W(n);if(!e&&i&&J(oi,o))return Reflect.get(oi,o,s);const a=Reflect.get(n,o,s);return(Rr(o)?Il.has(o):Nu(o))||(e||Me(n,"get",o),t)?a:$e(a)?i&&ys(o)?a:a.value:le(a)?e?Cl(a):xt(a):a}}const Tu=Al(),Ru=Al(!0);function Al(e=!1){return function(r,n,o,s){let i=r[n];if(tr(i)&&$e(i)&&!$e(o))return!1;if(!e&&(!An(o)&&!tr(o)&&(i=ee(i),o=ee(o)),!W(r)&&$e(i)&&!$e(o)))return i.value=o,!0;const a=W(r)&&ys(n)?Number(n)<r.length:J(r,n),l=Reflect.set(r,n,o,s);return r===ee(s)&&(a?Fr(o,i)&&ut(r,"set",n,o):ut(r,"add",n,o)),l}}function Fu(e,t){const r=J(e,t);e[t];const n=Reflect.deleteProperty(e,t);return n&&r&&ut(e,"delete",t,void 0),n}function Lu(e,t){const r=Reflect.has(e,t);return(!Rr(t)||!Il.has(t))&&Me(e,"has",t),r}function Hu(e){return Me(e,"iterate",W(e)?"length":Bt),Reflect.ownKeys(e)}const wl={get:Su,set:Tu,deleteProperty:Fu,has:Lu,ownKeys:Hu},Mu={get:Cu,set(e,t){return!0},deleteProperty(e,t){return!0}},ku=Ne({},wl,{get:Ou,set:Ru}),Is=e=>e,Hn=e=>Reflect.getPrototypeOf(e);function Xr(e,t,r=!1,n=!1){e=e.__v_raw;const o=ee(e),s=ee(t);r||(t!==s&&Me(o,"get",t),Me(o,"get",s));const{has:i}=Hn(o),a=n?Is:r?Ns:Hr;if(i.call(o,t))return a(e.get(t));if(i.call(o,s))return a(e.get(s));e!==o&&e.get(t)}function qr(e,t=!1){const r=this.__v_raw,n=ee(r),o=ee(e);return t||(e!==o&&Me(n,"has",e),Me(n,"has",o)),e===o?r.has(e):r.has(e)||r.has(o)}function zr(e,t=!1){return e=e.__v_raw,!t&&Me(ee(e),"iterate",Bt),Reflect.get(e,"size",e)}function si(e){e=ee(e);const t=ee(this);return Hn(t).has.call(t,e)||(t.add(e),ut(t,"add",e,e)),this}function ii(e,t){t=ee(t);const r=ee(this),{has:n,get:o}=Hn(r);let s=n.call(r,e);s||(e=ee(e),s=n.call(r,e));const i=o.call(r,e);return r.set(e,t),s?Fr(t,i)&&ut(r,"set",e,t):ut(r,"add",e,t),this}function ai(e){const t=ee(this),{has:r,get:n}=Hn(t);let o=r.call(t,e);o||(e=ee(e),o=r.call(t,e)),n&&n.call(t,e);const s=t.delete(e);return o&&ut(t,"delete",e,void 0),s}function li(){const e=ee(this),t=e.size!==0,r=e.clear();return t&&ut(e,"clear",void 0,void 0),r}function Qr(e,t){return function(n,o){const s=this,i=s.__v_raw,a=ee(i),l=t?Is:e?Ns:Hr;return!e&&Me(a,"iterate",Bt),i.forEach((u,c)=>n.call(o,l(u),l(c),s))}}function Yr(e,t,r){return function(...n){const o=this.__v_raw,s=ee(o),i=Jt(s),a=e==="entries"||e===Symbol.iterator&&i,l=e==="keys"&&i,u=o[e](...n),c=r?Is:t?Ns:Hr;return!t&&Me(s,"iterate",l?Mo:Bt),{next(){const{value:f,done:v}=u.next();return v?{value:f,done:v}:{value:a?[c(f[0]),c(f[1])]:c(f),done:v}},[Symbol.iterator](){return this}}}}function dt(e){return function(...t){return e==="delete"?!1:this}}function Du(){const e={get(s){return Xr(this,s)},get size(){return zr(this)},has:qr,add:si,set:ii,delete:ai,clear:li,forEach:Qr(!1,!1)},t={get(s){return Xr(this,s,!1,!0)},get size(){return zr(this)},has:qr,add:si,set:ii,delete:ai,clear:li,forEach:Qr(!1,!0)},r={get(s){return Xr(this,s,!0)},get size(){return zr(this,!0)},has(s){return qr.call(this,s,!0)},add:dt("add"),set:dt("set"),delete:dt("delete"),clear:dt("clear"),forEach:Qr(!0,!1)},n={get(s){return Xr(this,s,!0,!0)},get size(){return zr(this,!0)},has(s){return qr.call(this,s,!0)},add:dt("add"),set:dt("set"),delete:dt("delete"),clear:dt("clear"),forEach:Qr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{e[s]=Yr(s,!1,!1),r[s]=Yr(s,!0,!1),t[s]=Yr(s,!1,!0),n[s]=Yr(s,!0,!0)}),[e,r,t,n]}const[Uu,Bu,Wu,Ku]=Du();function As(e,t){const r=t?e?Ku:Wu:e?Bu:Uu;return(n,o,s)=>o==="__v_isReactive"?!e:o==="__v_isReadonly"?e:o==="__v_raw"?n:Reflect.get(J(r,o)&&o in n?r:n,o,s)}const xu={get:As(!1,!1)},Gu={get:As(!1,!0)},ju={get:As(!0,!1)},Nl=new WeakMap,Sl=new WeakMap,Ol=new WeakMap,Vu=new WeakMap;function Xu(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function qu(e){return e.__v_skip||!Object.isExtensible(e)?0:Xu(yu(e))}function xt(e){return tr(e)?e:ws(e,!1,wl,xu,Nl)}function zu(e){return ws(e,!1,ku,Gu,Sl)}function Cl(e){return ws(e,!0,Mu,ju,Ol)}function ws(e,t,r,n,o){if(!le(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const s=o.get(e);if(s)return s;const i=qu(e);if(i===0)return e;const a=new Proxy(e,i===2?n:r);return o.set(e,a),a}function At(e){return tr(e)?At(e.__v_raw):!!(e&&e.__v_isReactive)}function tr(e){return!!(e&&e.__v_isReadonly)}function An(e){return!!(e&&e.__v_isShallow)}function Pl(e){return At(e)||tr(e)}function ee(e){const t=e&&e.__v_raw;return t?ee(t):e}function rr(e){return In(e,"__v_skip",!0),e}const Hr=e=>le(e)?xt(e):e,Ns=e=>le(e)?Cl(e):e;function Tl(e){It&&Ge&&(e=ee(e),El(e.dep||(e.dep=$s())))}function Rl(e,t){e=ee(e),e.dep&&ko(e.dep)}function $e(e){return!!(e&&e.__v_isRef===!0)}function we(e){return Fl(e,!1)}function Qu(e){return Fl(e,!0)}function Fl(e,t){return $e(e)?e:new Yu(e,t)}class Yu{constructor(t,r){this.__v_isShallow=r,this.dep=void 0,this.__v_isRef=!0,this._rawValue=r?t:ee(t),this._value=r?t:Hr(t)}get value(){return Tl(this),this._value}set value(t){const r=this.__v_isShallow||An(t)||tr(t);t=r?t:ee(t),Fr(t,this._rawValue)&&(this._rawValue=t,this._value=r?t:Hr(t),Rl(this))}}function me(e){return $e(e)?e.value:e}const Zu={get:(e,t,r)=>me(Reflect.get(e,t,r)),set:(e,t,r,n)=>{const o=e[t];return $e(o)&&!$e(r)?(o.value=r,!0):Reflect.set(e,t,r,n)}};function Ll(e){return At(e)?e:new Proxy(e,Zu)}function Ju(e){const t=W(e)?new Array(e.length):{};for(const r in e)t[r]=tf(e,r);return t}class ef{constructor(t,r,n){this._object=t,this._key=r,this._defaultValue=n,this.__v_isRef=!0}get value(){const t=this._object[this._key];return t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}}function tf(e,t,r){const n=e[t];return $e(n)?n:new ef(e,t,r)}var Hl;class rf{constructor(t,r,n,o){this._setter=r,this.dep=void 0,this.__v_isRef=!0,this[Hl]=!1,this._dirty=!0,this.effect=new bs(t,()=>{this._dirty||(this._dirty=!0,Rl(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!o,this.__v_isReadonly=n}get value(){const t=ee(this);return Tl(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}Hl="__v_isReadonly";function nf(e,t,r=!1){let n,o;const s=X(e);return s?(n=e,o=Ve):(n=e.get,o=e.set),new rf(n,o,s||!o,r)}function wt(e,t,r,n){let o;try{o=n?e(...n):e()}catch(s){Mn(s,t,r)}return o}function Ue(e,t,r,n){if(X(e)){const s=wt(e,t,r,n);return s&&pl(s)&&s.catch(i=>{Mn(i,t,r)}),s}const o=[];for(let s=0;s<e.length;s++)o.push(Ue(e[s],t,r,n));return o}function Mn(e,t,r,n=!0){const o=t?t.vnode:null;if(t){let s=t.parent;const i=t.proxy,a=r;for(;s;){const u=s.ec;if(u){for(let c=0;c<u.length;c++)if(u[c](e,i,a)===!1)return}s=s.parent}const l=t.appContext.config.errorHandler;if(l){wt(l,null,10,[e,i,a]);return}}of(e,r,o,n)}function of(e,t,r,n=!0){console.error(e)}let Mr=!1,Do=!1;const Se=[];let tt=0;const er=[];let lt=null,Lt=0;const Ml=Promise.resolve();let Ss=null;function Os(e){const t=Ss||Ml;return e?t.then(this?e.bind(this):e):t}function sf(e){let t=tt+1,r=Se.length;for(;t<r;){const n=t+r>>>1;kr(Se[n])<e?t=n+1:r=n}return t}function Cs(e){(!Se.length||!Se.includes(e,Mr&&e.allowRecurse?tt+1:tt))&&(e.id==null?Se.push(e):Se.splice(sf(e.id),0,e),kl())}function kl(){!Mr&&!Do&&(Do=!0,Ss=Ml.then(Ul))}function af(e){const t=Se.indexOf(e);t>tt&&Se.splice(t,1)}function lf(e){W(e)?er.push(...e):(!lt||!lt.includes(e,e.allowRecurse?Lt+1:Lt))&&er.push(e),kl()}function ci(e,t=Mr?tt+1:0){for(;t<Se.length;t++){const r=Se[t];r&&r.pre&&(Se.splice(t,1),t--,r())}}function Dl(e){if(er.length){const t=[...new Set(er)];if(er.length=0,lt){lt.push(...t);return}for(lt=t,lt.sort((r,n)=>kr(r)-kr(n)),Lt=0;Lt<lt.length;Lt++)lt[Lt]();lt=null,Lt=0}}const kr=e=>e.id==null?1/0:e.id,cf=(e,t)=>{const r=kr(e)-kr(t);if(r===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return r};function Ul(e){Do=!1,Mr=!0,Se.sort(cf);const t=Ve;try{for(tt=0;tt<Se.length;tt++){const r=Se[tt];r&&r.active!==!1&&wt(r,null,14)}}finally{tt=0,Se.length=0,Dl(),Mr=!1,Ss=null,(Se.length||er.length)&&Ul()}}function uf(e,t,...r){if(e.isUnmounted)return;const n=e.vnode.props||de;let o=r;const s=t.startsWith("update:"),i=s&&t.slice(7);if(i&&i in n){const c=`${i==="modelValue"?"model":i}Modifiers`,{number:f,trim:v}=n[c]||de;v&&(o=r.map(p=>Ee(p)?p.trim():p)),f&&(o=r.map(Lr))}let a,l=n[a=Jn(t)]||n[a=Jn(rt(t))];!l&&s&&(l=n[a=Jn(ir(t))]),l&&Ue(l,e,6,o);const u=n[a+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,Ue(u,e,6,o)}}function Bl(e,t,r=!1){const n=t.emitsCache,o=n.get(e);if(o!==void 0)return o;const s=e.emits;let i={},a=!1;if(!X(e)){const l=u=>{const c=Bl(u,t,!0);c&&(a=!0,Ne(i,c))};!r&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!s&&!a?(le(e)&&n.set(e,null),null):(W(s)?s.forEach(l=>i[l]=null):Ne(i,s),le(e)&&n.set(e,i),i)}function kn(e,t){return!e||!Tn(t)?!1:(t=t.slice(2).replace(/Once$/,""),J(e,t[0].toLowerCase()+t.slice(1))||J(e,ir(t))||J(e,t))}let He=null,Dn=null;function wn(e){const t=He;return He=e,Dn=e&&e.type.__scopeId||null,t}function cr(e){Dn=e}function ur(){Dn=null}function Ps(e,t=He,r){if(!t||e._n)return e;const n=(...o)=>{n._d&&yi(-1);const s=wn(t);let i;try{i=e(...o)}finally{wn(s),n._d&&yi(1)}return i};return n._n=!0,n._c=!0,n._d=!0,n}function eo(e){const{type:t,vnode:r,proxy:n,withProxy:o,props:s,propsOptions:[i],slots:a,attrs:l,emit:u,render:c,renderCache:f,data:v,setupState:p,ctx:m,inheritAttrs:$}=e;let w,y;const H=wn(e);try{if(r.shapeFlag&4){const B=o||n;w=et(c.call(B,B,f,s,p,v,m)),y=l}else{const B=t;w=et(B.length>1?B(s,{attrs:l,slots:a,emit:u}):B(s,null)),y=t.props?l:ff(l)}}catch(B){Or.length=0,Mn(B,e,1),w=ye(qe)}let O=w;if(y&&$!==!1){const B=Object.keys(y),{shapeFlag:K}=O;B.length&&K&7&&(i&&B.some(ms)&&(y=df(y,i)),O=St(O,y))}return r.dirs&&(O=St(O),O.dirs=O.dirs?O.dirs.concat(r.dirs):r.dirs),r.transition&&(O.transition=r.transition),w=O,wn(H),w}const ff=e=>{let t;for(const r in e)(r==="class"||r==="style"||Tn(r))&&((t||(t={}))[r]=e[r]);return t},df=(e,t)=>{const r={};for(const n in e)(!ms(n)||!(n.slice(9)in t))&&(r[n]=e[n]);return r};function vf(e,t,r){const{props:n,children:o,component:s}=e,{props:i,children:a,patchFlag:l}=t,u=s.emitsOptions;if(t.dirs||t.transition)return!0;if(r&&l>=0){if(l&1024)return!0;if(l&16)return n?ui(n,i,u):!!i;if(l&8){const c=t.dynamicProps;for(let f=0;f<c.length;f++){const v=c[f];if(i[v]!==n[v]&&!kn(u,v))return!0}}}else return(o||a)&&(!a||!a.$stable)?!0:n===i?!1:n?i?ui(n,i,u):!0:!!i;return!1}function ui(e,t,r){const n=Object.keys(t);if(n.length!==Object.keys(e).length)return!0;for(let o=0;o<n.length;o++){const s=n[o];if(t[s]!==e[s]&&!kn(r,s))return!0}return!1}function pf({vnode:e,parent:t},r){for(;t&&t.subTree===e;)(e=t.vnode).el=r,t=t.parent}const hf=e=>e.__isSuspense;function gf(e,t){t&&t.pendingBranch?W(e)?t.effects.push(...e):t.effects.push(e):lf(e)}function yn(e,t){if(Ie){let r=Ie.provides;const n=Ie.parent&&Ie.parent.provides;n===r&&(r=Ie.provides=Object.create(n)),r[e]=t}}function Xe(e,t,r=!1){const n=Ie||He;if(n){const o=n.parent==null?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides;if(o&&e in o)return o[e];if(arguments.length>1)return r&&X(t)?t.call(n.proxy):t}}const Zr={};function Wt(e,t,r){return Wl(e,t,r)}function Wl(e,t,{immediate:r,deep:n,flush:o,onTrack:s,onTrigger:i}=de){const a=Ie;let l,u=!1,c=!1;if($e(e)?(l=()=>e.value,u=An(e)):At(e)?(l=()=>e,n=!0):W(e)?(c=!0,u=e.some(O=>At(O)||An(O)),l=()=>e.map(O=>{if($e(O))return O.value;if(At(O))return Dt(O);if(X(O))return wt(O,a,2)})):X(e)?t?l=()=>wt(e,a,2):l=()=>{if(!(a&&a.isUnmounted))return f&&f(),Ue(e,a,3,[v])}:l=Ve,t&&n){const O=l;l=()=>Dt(O())}let f,v=O=>{f=y.onStop=()=>{wt(O,a,4)}},p;if(Ur)if(v=Ve,t?r&&Ue(t,a,3,[l(),c?[]:void 0,v]):l(),o==="sync"){const O=f0();p=O.__watcherHandles||(O.__watcherHandles=[])}else return Ve;let m=c?new Array(e.length).fill(Zr):Zr;const $=()=>{if(!!y.active)if(t){const O=y.run();(n||u||(c?O.some((B,K)=>Fr(B,m[K])):Fr(O,m)))&&(f&&f(),Ue(t,a,3,[O,m===Zr?void 0:c&&m[0]===Zr?[]:m,v]),m=O)}else y.run()};$.allowRecurse=!!t;let w;o==="sync"?w=$:o==="post"?w=()=>Re($,a&&a.suspense):($.pre=!0,a&&($.id=a.uid),w=()=>Cs($));const y=new bs(l,w);t?r?$():m=y.run():o==="post"?Re(y.run.bind(y),a&&a.suspense):y.run();const H=()=>{y.stop(),a&&a.scope&&_s(a.scope.effects,y)};return p&&p.push(H),H}function mf(e,t,r){const n=this.proxy,o=Ee(e)?e.includes(".")?Kl(n,e):()=>n[e]:e.bind(n,n);let s;X(t)?s=t:(s=t.handler,r=t);const i=Ie;nr(this);const a=Wl(o,s.bind(n),r);return i?nr(i):Kt(),a}function Kl(e,t){const r=t.split(".");return()=>{let n=e;for(let o=0;o<r.length&&n;o++)n=n[r[o]];return n}}function Dt(e,t){if(!le(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),$e(e))Dt(e.value,t);else if(W(e))for(let r=0;r<e.length;r++)Dt(e[r],t);else if(Rn(e)||Jt(e))e.forEach(r=>{Dt(r,t)});else if(gl(e))for(const r in e)Dt(e[r],t);return e}function _f(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Wn(()=>{e.isMounted=!0}),Xl(()=>{e.isUnmounting=!0}),e}const De=[Function,Array],yf={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:De,onEnter:De,onAfterEnter:De,onEnterCancelled:De,onBeforeLeave:De,onLeave:De,onAfterLeave:De,onLeaveCancelled:De,onBeforeAppear:De,onAppear:De,onAfterAppear:De,onAppearCancelled:De},setup(e,{slots:t}){const r=Ls(),n=_f();let o;return()=>{const s=t.default&&jl(t.default(),!0);if(!s||!s.length)return;let i=s[0];if(s.length>1){for(const $ of s)if($.type!==qe){i=$;break}}const a=ee(e),{mode:l}=a;if(n.isLeaving)return to(i);const u=fi(i);if(!u)return to(i);const c=Uo(u,a,n,r);Bo(u,c);const f=r.subTree,v=f&&fi(f);let p=!1;const{getTransitionKey:m}=u.type;if(m){const $=m();o===void 0?o=$:$!==o&&(o=$,p=!0)}if(v&&v.type!==qe&&(!Ht(u,v)||p)){const $=Uo(v,a,n,r);if(Bo(v,$),l==="out-in")return n.isLeaving=!0,$.afterLeave=()=>{n.isLeaving=!1,r.update.active!==!1&&r.update()},to(i);l==="in-out"&&u.type!==qe&&($.delayLeave=(w,y,H)=>{const O=Gl(n,v);O[String(v.key)]=v,w._leaveCb=()=>{y(),w._leaveCb=void 0,delete c.delayedLeave},c.delayedLeave=H})}return i}}},xl=yf;function Gl(e,t){const{leavingVNodes:r}=e;let n=r.get(t.type);return n||(n=Object.create(null),r.set(t.type,n)),n}function Uo(e,t,r,n){const{appear:o,mode:s,persisted:i=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:u,onEnterCancelled:c,onBeforeLeave:f,onLeave:v,onAfterLeave:p,onLeaveCancelled:m,onBeforeAppear:$,onAppear:w,onAfterAppear:y,onAppearCancelled:H}=t,O=String(e.key),B=Gl(r,e),K=(P,Q)=>{P&&Ue(P,n,9,Q)},te=(P,Q)=>{const Y=Q[1];K(P,Q),W(P)?P.every(fe=>fe.length<=1)&&Y():P.length<=1&&Y()},G={mode:s,persisted:i,beforeEnter(P){let Q=a;if(!r.isMounted)if(o)Q=$||a;else return;P._leaveCb&&P._leaveCb(!0);const Y=B[O];Y&&Ht(e,Y)&&Y.el._leaveCb&&Y.el._leaveCb(),K(Q,[P])},enter(P){let Q=l,Y=u,fe=c;if(!r.isMounted)if(o)Q=w||l,Y=y||u,fe=H||c;else return;let L=!1;const ae=P._enterCb=pe=>{L||(L=!0,pe?K(fe,[P]):K(Y,[P]),G.delayedLeave&&G.delayedLeave(),P._enterCb=void 0)};Q?te(Q,[P,ae]):ae()},leave(P,Q){const Y=String(e.key);if(P._enterCb&&P._enterCb(!0),r.isUnmounting)return Q();K(f,[P]);let fe=!1;const L=P._leaveCb=ae=>{fe||(fe=!0,Q(),ae?K(m,[P]):K(p,[P]),P._leaveCb=void 0,B[Y]===e&&delete B[Y])};B[Y]=e,v?te(v,[P,L]):L()},clone(P){return Uo(P,t,r,n)}};return G}function to(e){if(Un(e))return e=St(e),e.children=null,e}function fi(e){return Un(e)?e.children?e.children[0]:void 0:e}function Bo(e,t){e.shapeFlag&6&&e.component?Bo(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function jl(e,t=!1,r){let n=[],o=0;for(let s=0;s<e.length;s++){let i=e[s];const a=r==null?i.key:String(r)+String(i.key!=null?i.key:s);i.type===re?(i.patchFlag&128&&o++,n=n.concat(jl(i.children,t,a))):(t||i.type!==qe)&&n.push(a!=null?St(i,{key:a}):i)}if(o>1)for(let s=0;s<n.length;s++)n[s].patchFlag=-2;return n}function Be(e){return X(e)?{setup:e,name:e.name}:e}const $n=e=>!!e.type.__asyncLoader,Un=e=>e.type.__isKeepAlive;function $f(e,t){Vl(e,"a",t)}function bf(e,t){Vl(e,"da",t)}function Vl(e,t,r=Ie){const n=e.__wdc||(e.__wdc=()=>{let o=r;for(;o;){if(o.isDeactivated)return;o=o.parent}return e()});if(Bn(t,n,r),r){let o=r.parent;for(;o&&o.parent;)Un(o.parent.vnode)&&Ef(n,t,r,o),o=o.parent}}function Ef(e,t,r,n){const o=Bn(t,e,n,!0);Kr(()=>{_s(n[t],o)},r)}function Bn(e,t,r=Ie,n=!1){if(r){const o=r[e]||(r[e]=[]),s=t.__weh||(t.__weh=(...i)=>{if(r.isUnmounted)return;ar(),nr(r);const a=Ue(t,r,e,i);return Kt(),lr(),a});return n?o.unshift(s):o.push(s),s}}const ft=e=>(t,r=Ie)=>(!Ur||e==="sp")&&Bn(e,(...n)=>t(...n),r),If=ft("bm"),Wn=ft("m"),Af=ft("bu"),wf=ft("u"),Xl=ft("bum"),Kr=ft("um"),Nf=ft("sp"),Sf=ft("rtg"),Of=ft("rtc");function Cf(e,t=Ie){Bn("ec",e,t)}function bn(e,t){const r=He;if(r===null)return e;const n=Gn(r)||r.proxy,o=e.dirs||(e.dirs=[]);for(let s=0;s<t.length;s++){let[i,a,l,u=de]=t[s];i&&(X(i)&&(i={mounted:i,updated:i}),i.deep&&Dt(a),o.push({dir:i,instance:n,value:a,oldValue:void 0,arg:l,modifiers:u}))}return e}function Ct(e,t,r,n){const o=e.dirs,s=t&&t.dirs;for(let i=0;i<o.length;i++){const a=o[i];s&&(a.oldValue=s[i].value);let l=a.dir[n];l&&(ar(),Ue(l,r,8,[e.el,a,e,t]),lr())}}const ql="components";function Pf(e,t){return Rf(ql,e,!0,t)||e}const Tf=Symbol();function Rf(e,t,r=!0,n=!1){const o=He||Ie;if(o){const s=o.type;if(e===ql){const a=l0(s,!1);if(a&&(a===t||a===rt(t)||a===Ln(rt(t))))return s}const i=di(o[e]||s[e],t)||di(o.appContext[e],t);return!i&&n?s:i}}function di(e,t){return e&&(e[t]||e[rt(t)]||e[Ln(rt(t))])}function Le(e,t,r,n){let o;const s=r&&r[n];if(W(e)||Ee(e)){o=new Array(e.length);for(let i=0,a=e.length;i<a;i++)o[i]=t(e[i],i,void 0,s&&s[i])}else if(typeof e=="number"){o=new Array(e);for(let i=0;i<e;i++)o[i]=t(i+1,i,void 0,s&&s[i])}else if(le(e))if(e[Symbol.iterator])o=Array.from(e,(i,a)=>t(i,a,void 0,s&&s[a]));else{const i=Object.keys(e);o=new Array(i.length);for(let a=0,l=i.length;a<l;a++){const u=i[a];o[a]=t(e[u],u,a,s&&s[a])}}else o=[];return r&&(r[n]=o),o}const Wo=e=>e?ic(e)?Gn(e)||e.proxy:Wo(e.parent):null,Sr=Ne(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Wo(e.parent),$root:e=>Wo(e.root),$emit:e=>e.emit,$options:e=>Ts(e),$forceUpdate:e=>e.f||(e.f=()=>Cs(e.update)),$nextTick:e=>e.n||(e.n=Os.bind(e.proxy)),$watch:e=>mf.bind(e)}),ro=(e,t)=>e!==de&&!e.__isScriptSetup&&J(e,t),Ff={get({_:e},t){const{ctx:r,setupState:n,data:o,props:s,accessCache:i,type:a,appContext:l}=e;let u;if(t[0]!=="$"){const p=i[t];if(p!==void 0)switch(p){case 1:return n[t];case 2:return o[t];case 4:return r[t];case 3:return s[t]}else{if(ro(n,t))return i[t]=1,n[t];if(o!==de&&J(o,t))return i[t]=2,o[t];if((u=e.propsOptions[0])&&J(u,t))return i[t]=3,s[t];if(r!==de&&J(r,t))return i[t]=4,r[t];Ko&&(i[t]=0)}}const c=Sr[t];let f,v;if(c)return t==="$attrs"&&Me(e,"get",t),c(e);if((f=a.__cssModules)&&(f=f[t]))return f;if(r!==de&&J(r,t))return i[t]=4,r[t];if(v=l.config.globalProperties,J(v,t))return v[t]},set({_:e},t,r){const{data:n,setupState:o,ctx:s}=e;return ro(o,t)?(o[t]=r,!0):n!==de&&J(n,t)?(n[t]=r,!0):J(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(s[t]=r,!0)},has({_:{data:e,setupState:t,accessCache:r,ctx:n,appContext:o,propsOptions:s}},i){let a;return!!r[i]||e!==de&&J(e,i)||ro(t,i)||(a=s[0])&&J(a,i)||J(n,i)||J(Sr,i)||J(o.config.globalProperties,i)},defineProperty(e,t,r){return r.get!=null?e._.accessCache[t]=0:J(r,"value")&&this.set(e,t,r.value,null),Reflect.defineProperty(e,t,r)}};let Ko=!0;function Lf(e){const t=Ts(e),r=e.proxy,n=e.ctx;Ko=!1,t.beforeCreate&&vi(t.beforeCreate,e,"bc");const{data:o,computed:s,methods:i,watch:a,provide:l,inject:u,created:c,beforeMount:f,mounted:v,beforeUpdate:p,updated:m,activated:$,deactivated:w,beforeDestroy:y,beforeUnmount:H,destroyed:O,unmounted:B,render:K,renderTracked:te,renderTriggered:G,errorCaptured:P,serverPrefetch:Q,expose:Y,inheritAttrs:fe,components:L,directives:ae,filters:pe}=t;if(u&&Hf(u,n,null,e.appContext.config.unwrapInjectedRef),i)for(const ce in i){const oe=i[ce];X(oe)&&(n[ce]=oe.bind(r))}if(o){const ce=o.call(r,r);le(ce)&&(e.data=xt(ce))}if(Ko=!0,s)for(const ce in s){const oe=s[ce],We=X(oe)?oe.bind(r,r):X(oe.get)?oe.get.bind(r,r):Ve,Ot=!X(oe)&&X(oe.set)?oe.set.bind(r):Ve,Ke=ve({get:We,set:Ot});Object.defineProperty(n,ce,{enumerable:!0,configurable:!0,get:()=>Ke.value,set:Te=>Ke.value=Te})}if(a)for(const ce in a)zl(a[ce],n,r,ce);if(l){const ce=X(l)?l.call(r):l;Reflect.ownKeys(ce).forEach(oe=>{yn(oe,ce[oe])})}c&&vi(c,e,"c");function he(ce,oe){W(oe)?oe.forEach(We=>ce(We.bind(r))):oe&&ce(oe.bind(r))}if(he(If,f),he(Wn,v),he(Af,p),he(wf,m),he($f,$),he(bf,w),he(Cf,P),he(Of,te),he(Sf,G),he(Xl,H),he(Kr,B),he(Nf,Q),W(Y))if(Y.length){const ce=e.exposed||(e.exposed={});Y.forEach(oe=>{Object.defineProperty(ce,oe,{get:()=>r[oe],set:We=>r[oe]=We})})}else e.exposed||(e.exposed={});K&&e.render===Ve&&(e.render=K),fe!=null&&(e.inheritAttrs=fe),L&&(e.components=L),ae&&(e.directives=ae)}function Hf(e,t,r=Ve,n=!1){W(e)&&(e=xo(e));for(const o in e){const s=e[o];let i;le(s)?"default"in s?i=Xe(s.from||o,s.default,!0):i=Xe(s.from||o):i=Xe(s),$e(i)&&n?Object.defineProperty(t,o,{enumerable:!0,configurable:!0,get:()=>i.value,set:a=>i.value=a}):t[o]=i}}function vi(e,t,r){Ue(W(e)?e.map(n=>n.bind(t.proxy)):e.bind(t.proxy),t,r)}function zl(e,t,r,n){const o=n.includes(".")?Kl(r,n):()=>r[n];if(Ee(e)){const s=t[e];X(s)&&Wt(o,s)}else if(X(e))Wt(o,e.bind(r));else if(le(e))if(W(e))e.forEach(s=>zl(s,t,r,n));else{const s=X(e.handler)?e.handler.bind(r):t[e.handler];X(s)&&Wt(o,s,e)}}function Ts(e){const t=e.type,{mixins:r,extends:n}=t,{mixins:o,optionsCache:s,config:{optionMergeStrategies:i}}=e.appContext,a=s.get(t);let l;return a?l=a:!o.length&&!r&&!n?l=t:(l={},o.length&&o.forEach(u=>Nn(l,u,i,!0)),Nn(l,t,i)),le(t)&&s.set(t,l),l}function Nn(e,t,r,n=!1){const{mixins:o,extends:s}=t;s&&Nn(e,s,r,!0),o&&o.forEach(i=>Nn(e,i,r,!0));for(const i in t)if(!(n&&i==="expose")){const a=Mf[i]||r&&r[i];e[i]=a?a(e[i],t[i]):t[i]}return e}const Mf={data:pi,props:Ft,emits:Ft,methods:Ft,computed:Ft,beforeCreate:Ce,created:Ce,beforeMount:Ce,mounted:Ce,beforeUpdate:Ce,updated:Ce,beforeDestroy:Ce,beforeUnmount:Ce,destroyed:Ce,unmounted:Ce,activated:Ce,deactivated:Ce,errorCaptured:Ce,serverPrefetch:Ce,components:Ft,directives:Ft,watch:Df,provide:pi,inject:kf};function pi(e,t){return t?e?function(){return Ne(X(e)?e.call(this,this):e,X(t)?t.call(this,this):t)}:t:e}function kf(e,t){return Ft(xo(e),xo(t))}function xo(e){if(W(e)){const t={};for(let r=0;r<e.length;r++)t[e[r]]=e[r];return t}return e}function Ce(e,t){return e?[...new Set([].concat(e,t))]:t}function Ft(e,t){return e?Ne(Ne(Object.create(null),e),t):t}function Df(e,t){if(!e)return t;if(!t)return e;const r=Ne(Object.create(null),e);for(const n in t)r[n]=Ce(e[n],t[n]);return r}function Uf(e,t,r,n=!1){const o={},s={};In(s,xn,1),e.propsDefaults=Object.create(null),Ql(e,t,o,s);for(const i in e.propsOptions[0])i in o||(o[i]=void 0);r?e.props=n?o:zu(o):e.type.props?e.props=o:e.props=s,e.attrs=s}function Bf(e,t,r,n){const{props:o,attrs:s,vnode:{patchFlag:i}}=e,a=ee(o),[l]=e.propsOptions;let u=!1;if((n||i>0)&&!(i&16)){if(i&8){const c=e.vnode.dynamicProps;for(let f=0;f<c.length;f++){let v=c[f];if(kn(e.emitsOptions,v))continue;const p=t[v];if(l)if(J(s,v))p!==s[v]&&(s[v]=p,u=!0);else{const m=rt(v);o[m]=Go(l,a,m,p,e,!1)}else p!==s[v]&&(s[v]=p,u=!0)}}}else{Ql(e,t,o,s)&&(u=!0);let c;for(const f in a)(!t||!J(t,f)&&((c=ir(f))===f||!J(t,c)))&&(l?r&&(r[f]!==void 0||r[c]!==void 0)&&(o[f]=Go(l,a,f,void 0,e,!0)):delete o[f]);if(s!==a)for(const f in s)(!t||!J(t,f)&&!0)&&(delete s[f],u=!0)}u&&ut(e,"set","$attrs")}function Ql(e,t,r,n){const[o,s]=e.propsOptions;let i=!1,a;if(t)for(let l in t){if(mn(l))continue;const u=t[l];let c;o&&J(o,c=rt(l))?!s||!s.includes(c)?r[c]=u:(a||(a={}))[c]=u:kn(e.emitsOptions,l)||(!(l in n)||u!==n[l])&&(n[l]=u,i=!0)}if(s){const l=ee(r),u=a||de;for(let c=0;c<s.length;c++){const f=s[c];r[f]=Go(o,l,f,u[f],e,!J(u,f))}}return i}function Go(e,t,r,n,o,s){const i=e[r];if(i!=null){const a=J(i,"default");if(a&&n===void 0){const l=i.default;if(i.type!==Function&&X(l)){const{propsDefaults:u}=o;r in u?n=u[r]:(nr(o),n=u[r]=l.call(null,t),Kt())}else n=l}i[0]&&(s&&!a?n=!1:i[1]&&(n===""||n===ir(r))&&(n=!0))}return n}function Yl(e,t,r=!1){const n=t.propsCache,o=n.get(e);if(o)return o;const s=e.props,i={},a=[];let l=!1;if(!X(e)){const c=f=>{l=!0;const[v,p]=Yl(f,t,!0);Ne(i,v),p&&a.push(...p)};!r&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}if(!s&&!l)return le(e)&&n.set(e,Zt),Zt;if(W(s))for(let c=0;c<s.length;c++){const f=rt(s[c]);hi(f)&&(i[f]=de)}else if(s)for(const c in s){const f=rt(c);if(hi(f)){const v=s[c],p=i[f]=W(v)||X(v)?{type:v}:Object.assign({},v);if(p){const m=_i(Boolean,p.type),$=_i(String,p.type);p[0]=m>-1,p[1]=$<0||m<$,(m>-1||J(p,"default"))&&a.push(f)}}}const u=[i,a];return le(e)&&n.set(e,u),u}function hi(e){return e[0]!=="$"}function gi(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function mi(e,t){return gi(e)===gi(t)}function _i(e,t){return W(t)?t.findIndex(r=>mi(r,e)):X(t)&&mi(t,e)?0:-1}const Zl=e=>e[0]==="_"||e==="$stable",Rs=e=>W(e)?e.map(et):[et(e)],Wf=(e,t,r)=>{if(t._n)return t;const n=Ps((...o)=>Rs(t(...o)),r);return n._c=!1,n},Jl=(e,t,r)=>{const n=e._ctx;for(const o in e){if(Zl(o))continue;const s=e[o];if(X(s))t[o]=Wf(o,s,n);else if(s!=null){const i=Rs(s);t[o]=()=>i}}},ec=(e,t)=>{const r=Rs(t);e.slots.default=()=>r},Kf=(e,t)=>{if(e.vnode.shapeFlag&32){const r=t._;r?(e.slots=ee(t),In(t,"_",r)):Jl(t,e.slots={})}else e.slots={},t&&ec(e,t);In(e.slots,xn,1)},xf=(e,t,r)=>{const{vnode:n,slots:o}=e;let s=!0,i=de;if(n.shapeFlag&32){const a=t._;a?r&&a===1?s=!1:(Ne(o,t),!r&&a===1&&delete o._):(s=!t.$stable,Jl(t,o)),i=t}else t&&(ec(e,t),i={default:1});if(s)for(const a in o)!Zl(a)&&!(a in i)&&delete o[a]};function tc(){return{app:null,config:{isNativeTag:gu,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Gf=0;function jf(e,t){return function(n,o=null){X(n)||(n=Object.assign({},n)),o!=null&&!le(o)&&(o=null);const s=tc(),i=new Set;let a=!1;const l=s.app={_uid:Gf++,_component:n,_props:o,_container:null,_context:s,_instance:null,version:d0,get config(){return s.config},set config(u){},use(u,...c){return i.has(u)||(u&&X(u.install)?(i.add(u),u.install(l,...c)):X(u)&&(i.add(u),u(l,...c))),l},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),l},component(u,c){return c?(s.components[u]=c,l):s.components[u]},directive(u,c){return c?(s.directives[u]=c,l):s.directives[u]},mount(u,c,f){if(!a){const v=ye(n,o);return v.appContext=s,c&&t?t(v,u):e(v,u,f),a=!0,l._container=u,u.__vue_app__=l,Gn(v.component)||v.component.proxy}},unmount(){a&&(e(null,l._container),delete l._container.__vue_app__)},provide(u,c){return s.provides[u]=c,l}};return l}}function jo(e,t,r,n,o=!1){if(W(e)){e.forEach((v,p)=>jo(v,t&&(W(t)?t[p]:t),r,n,o));return}if($n(n)&&!o)return;const s=n.shapeFlag&4?Gn(n.component)||n.component.proxy:n.el,i=o?null:s,{i:a,r:l}=e,u=t&&t.r,c=a.refs===de?a.refs={}:a.refs,f=a.setupState;if(u!=null&&u!==l&&(Ee(u)?(c[u]=null,J(f,u)&&(f[u]=null)):$e(u)&&(u.value=null)),X(l))wt(l,a,12,[i,c]);else{const v=Ee(l),p=$e(l);if(v||p){const m=()=>{if(e.f){const $=v?J(f,l)?f[l]:c[l]:l.value;o?W($)&&_s($,s):W($)?$.includes(s)||$.push(s):v?(c[l]=[s],J(f,l)&&(f[l]=c[l])):(l.value=[s],e.k&&(c[e.k]=l.value))}else v?(c[l]=i,J(f,l)&&(f[l]=i)):p&&(l.value=i,e.k&&(c[e.k]=i))};i?(m.id=-1,Re(m,r)):m()}}}const Re=gf;function Vf(e){return Xf(e)}function Xf(e,t){const r=Eu();r.__VUE__=!0;const{insert:n,remove:o,patchProp:s,createElement:i,createText:a,createComment:l,setText:u,setElementText:c,parentNode:f,nextSibling:v,setScopeId:p=Ve,insertStaticContent:m}=e,$=(d,h,g,_=null,E=null,S=null,R=!1,N=null,C=!!h.dynamicChildren)=>{if(d===h)return;d&&!Ht(d,h)&&(_=T(d),Te(d,E,S,!0),d=null),h.patchFlag===-2&&(C=!1,h.dynamicChildren=null);const{type:I,ref:D,shapeFlag:M}=h;switch(I){case Kn:w(d,h,g,_);break;case qe:y(d,h,g,_);break;case no:d==null&&H(h,g,_,R);break;case re:L(d,h,g,_,E,S,R,N,C);break;default:M&1?K(d,h,g,_,E,S,R,N,C):M&6?ae(d,h,g,_,E,S,R,N,C):(M&64||M&128)&&I.process(d,h,g,_,E,S,R,N,C,Z)}D!=null&&E&&jo(D,d&&d.ref,S,h||d,!h)},w=(d,h,g,_)=>{if(d==null)n(h.el=a(h.children),g,_);else{const E=h.el=d.el;h.children!==d.children&&u(E,h.children)}},y=(d,h,g,_)=>{d==null?n(h.el=l(h.children||""),g,_):h.el=d.el},H=(d,h,g,_)=>{[d.el,d.anchor]=m(d.children,h,g,_,d.el,d.anchor)},O=({el:d,anchor:h},g,_)=>{let E;for(;d&&d!==h;)E=v(d),n(d,g,_),d=E;n(h,g,_)},B=({el:d,anchor:h})=>{let g;for(;d&&d!==h;)g=v(d),o(d),d=g;o(h)},K=(d,h,g,_,E,S,R,N,C)=>{R=R||h.type==="svg",d==null?te(h,g,_,E,S,R,N,C):Q(d,h,E,S,R,N,C)},te=(d,h,g,_,E,S,R,N)=>{let C,I;const{type:D,props:M,shapeFlag:U,transition:x,dirs:z}=d;if(C=d.el=i(d.type,S,M&&M.is,M),U&8?c(C,d.children):U&16&&P(d.children,C,null,_,E,S&&D!=="foreignObject",R,N),z&&Ct(d,null,_,"created"),M){for(const se in M)se!=="value"&&!mn(se)&&s(C,se,null,M[se],S,d.children,_,E,F);"value"in M&&s(C,"value",null,M.value),(I=M.onVnodeBeforeMount)&&Ze(I,_,d)}G(C,d,d.scopeId,R,_),z&&Ct(d,null,_,"beforeMount");const ue=(!E||E&&!E.pendingBranch)&&x&&!x.persisted;ue&&x.beforeEnter(C),n(C,h,g),((I=M&&M.onVnodeMounted)||ue||z)&&Re(()=>{I&&Ze(I,_,d),ue&&x.enter(C),z&&Ct(d,null,_,"mounted")},E)},G=(d,h,g,_,E)=>{if(g&&p(d,g),_)for(let S=0;S<_.length;S++)p(d,_[S]);if(E){let S=E.subTree;if(h===S){const R=E.vnode;G(d,R,R.scopeId,R.slotScopeIds,E.parent)}}},P=(d,h,g,_,E,S,R,N,C=0)=>{for(let I=C;I<d.length;I++){const D=d[I]=N?yt(d[I]):et(d[I]);$(null,D,h,g,_,E,S,R,N)}},Q=(d,h,g,_,E,S,R)=>{const N=h.el=d.el;let{patchFlag:C,dynamicChildren:I,dirs:D}=h;C|=d.patchFlag&16;const M=d.props||de,U=h.props||de;let x;g&&Pt(g,!1),(x=U.onVnodeBeforeUpdate)&&Ze(x,g,h,d),D&&Ct(h,d,g,"beforeUpdate"),g&&Pt(g,!0);const z=E&&h.type!=="foreignObject";if(I?Y(d.dynamicChildren,I,N,g,_,z,S):R||oe(d,h,N,null,g,_,z,S,!1),C>0){if(C&16)fe(N,h,M,U,g,_,E);else if(C&2&&M.class!==U.class&&s(N,"class",null,U.class,E),C&4&&s(N,"style",M.style,U.style,E),C&8){const ue=h.dynamicProps;for(let se=0;se<ue.length;se++){const be=ue[se],xe=M[be],Xt=U[be];(Xt!==xe||be==="value")&&s(N,be,xe,Xt,E,d.children,g,_,F)}}C&1&&d.children!==h.children&&c(N,h.children)}else!R&&I==null&&fe(N,h,M,U,g,_,E);((x=U.onVnodeUpdated)||D)&&Re(()=>{x&&Ze(x,g,h,d),D&&Ct(h,d,g,"updated")},_)},Y=(d,h,g,_,E,S,R)=>{for(let N=0;N<h.length;N++){const C=d[N],I=h[N],D=C.el&&(C.type===re||!Ht(C,I)||C.shapeFlag&70)?f(C.el):g;$(C,I,D,null,_,E,S,R,!0)}},fe=(d,h,g,_,E,S,R)=>{if(g!==_){if(g!==de)for(const N in g)!mn(N)&&!(N in _)&&s(d,N,g[N],null,R,h.children,E,S,F);for(const N in _){if(mn(N))continue;const C=_[N],I=g[N];C!==I&&N!=="value"&&s(d,N,I,C,R,h.children,E,S,F)}"value"in _&&s(d,"value",g.value,_.value)}},L=(d,h,g,_,E,S,R,N,C)=>{const I=h.el=d?d.el:a(""),D=h.anchor=d?d.anchor:a("");let{patchFlag:M,dynamicChildren:U,slotScopeIds:x}=h;x&&(N=N?N.concat(x):x),d==null?(n(I,g,_),n(D,g,_),P(h.children,g,D,E,S,R,N,C)):M>0&&M&64&&U&&d.dynamicChildren?(Y(d.dynamicChildren,U,g,E,S,R,N),(h.key!=null||E&&h===E.subTree)&&rc(d,h,!0)):oe(d,h,g,D,E,S,R,N,C)},ae=(d,h,g,_,E,S,R,N,C)=>{h.slotScopeIds=N,d==null?h.shapeFlag&512?E.ctx.activate(h,g,_,R,C):pe(h,g,_,E,S,R,C):_e(d,h,C)},pe=(d,h,g,_,E,S,R)=>{const N=d.component=n0(d,_,E);if(Un(d)&&(N.ctx.renderer=Z),o0(N),N.asyncDep){if(E&&E.registerDep(N,he),!d.el){const C=N.subTree=ye(qe);y(null,C,h,g)}return}he(N,d,h,g,E,S,R)},_e=(d,h,g)=>{const _=h.component=d.component;if(vf(d,h,g))if(_.asyncDep&&!_.asyncResolved){ce(_,h,g);return}else _.next=h,af(_.update),_.update();else h.el=d.el,_.vnode=h},he=(d,h,g,_,E,S,R)=>{const N=()=>{if(d.isMounted){let{next:D,bu:M,u:U,parent:x,vnode:z}=d,ue=D,se;Pt(d,!1),D?(D.el=z.el,ce(d,D,R)):D=z,M&&_n(M),(se=D.props&&D.props.onVnodeBeforeUpdate)&&Ze(se,x,D,z),Pt(d,!0);const be=eo(d),xe=d.subTree;d.subTree=be,$(xe,be,f(xe.el),T(xe),d,E,S),D.el=be.el,ue===null&&pf(d,be.el),U&&Re(U,E),(se=D.props&&D.props.onVnodeUpdated)&&Re(()=>Ze(se,x,D,z),E)}else{let D;const{el:M,props:U}=h,{bm:x,m:z,parent:ue}=d,se=$n(h);if(Pt(d,!1),x&&_n(x),!se&&(D=U&&U.onVnodeBeforeMount)&&Ze(D,ue,h),Pt(d,!0),M&&q){const be=()=>{d.subTree=eo(d),q(M,d.subTree,d,E,null)};se?h.type.__asyncLoader().then(()=>!d.isUnmounted&&be()):be()}else{const be=d.subTree=eo(d);$(null,be,g,_,d,E,S),h.el=be.el}if(z&&Re(z,E),!se&&(D=U&&U.onVnodeMounted)){const be=h;Re(()=>Ze(D,ue,be),E)}(h.shapeFlag&256||ue&&$n(ue.vnode)&&ue.vnode.shapeFlag&256)&&d.a&&Re(d.a,E),d.isMounted=!0,h=g=_=null}},C=d.effect=new bs(N,()=>Cs(I),d.scope),I=d.update=()=>C.run();I.id=d.uid,Pt(d,!0),I()},ce=(d,h,g)=>{h.component=d;const _=d.vnode.props;d.vnode=h,d.next=null,Bf(d,h.props,_,g),xf(d,h.children,g),ar(),ci(),lr()},oe=(d,h,g,_,E,S,R,N,C=!1)=>{const I=d&&d.children,D=d?d.shapeFlag:0,M=h.children,{patchFlag:U,shapeFlag:x}=h;if(U>0){if(U&128){Ot(I,M,g,_,E,S,R,N,C);return}else if(U&256){We(I,M,g,_,E,S,R,N,C);return}}x&8?(D&16&&F(I,E,S),M!==I&&c(g,M)):D&16?x&16?Ot(I,M,g,_,E,S,R,N,C):F(I,E,S,!0):(D&8&&c(g,""),x&16&&P(M,g,_,E,S,R,N,C))},We=(d,h,g,_,E,S,R,N,C)=>{d=d||Zt,h=h||Zt;const I=d.length,D=h.length,M=Math.min(I,D);let U;for(U=0;U<M;U++){const x=h[U]=C?yt(h[U]):et(h[U]);$(d[U],x,g,null,E,S,R,N,C)}I>D?F(d,E,S,!0,!1,M):P(h,g,_,E,S,R,N,C,M)},Ot=(d,h,g,_,E,S,R,N,C)=>{let I=0;const D=h.length;let M=d.length-1,U=D-1;for(;I<=M&&I<=U;){const x=d[I],z=h[I]=C?yt(h[I]):et(h[I]);if(Ht(x,z))$(x,z,g,null,E,S,R,N,C);else break;I++}for(;I<=M&&I<=U;){const x=d[M],z=h[U]=C?yt(h[U]):et(h[U]);if(Ht(x,z))$(x,z,g,null,E,S,R,N,C);else break;M--,U--}if(I>M){if(I<=U){const x=U+1,z=x<D?h[x].el:_;for(;I<=U;)$(null,h[I]=C?yt(h[I]):et(h[I]),g,z,E,S,R,N,C),I++}}else if(I>U)for(;I<=M;)Te(d[I],E,S,!0),I++;else{const x=I,z=I,ue=new Map;for(I=z;I<=U;I++){const Fe=h[I]=C?yt(h[I]):et(h[I]);Fe.key!=null&&ue.set(Fe.key,I)}let se,be=0;const xe=U-z+1;let Xt=!1,Ys=0;const gr=new Array(xe);for(I=0;I<xe;I++)gr[I]=0;for(I=x;I<=M;I++){const Fe=d[I];if(be>=xe){Te(Fe,E,S,!0);continue}let Ye;if(Fe.key!=null)Ye=ue.get(Fe.key);else for(se=z;se<=U;se++)if(gr[se-z]===0&&Ht(Fe,h[se])){Ye=se;break}Ye===void 0?Te(Fe,E,S,!0):(gr[Ye-z]=I+1,Ye>=Ys?Ys=Ye:Xt=!0,$(Fe,h[Ye],g,null,E,S,R,N,C),be++)}const Zs=Xt?qf(gr):Zt;for(se=Zs.length-1,I=xe-1;I>=0;I--){const Fe=z+I,Ye=h[Fe],Js=Fe+1<D?h[Fe+1].el:_;gr[I]===0?$(null,Ye,g,Js,E,S,R,N,C):Xt&&(se<0||I!==Zs[se]?Ke(Ye,g,Js,2):se--)}}},Ke=(d,h,g,_,E=null)=>{const{el:S,type:R,transition:N,children:C,shapeFlag:I}=d;if(I&6){Ke(d.component.subTree,h,g,_);return}if(I&128){d.suspense.move(h,g,_);return}if(I&64){R.move(d,h,g,Z);return}if(R===re){n(S,h,g);for(let M=0;M<C.length;M++)Ke(C[M],h,g,_);n(d.anchor,h,g);return}if(R===no){O(d,h,g);return}if(_!==2&&I&1&&N)if(_===0)N.beforeEnter(S),n(S,h,g),Re(()=>N.enter(S),E);else{const{leave:M,delayLeave:U,afterLeave:x}=N,z=()=>n(S,h,g),ue=()=>{M(S,()=>{z(),x&&x()})};U?U(S,z,ue):ue()}else n(S,h,g)},Te=(d,h,g,_=!1,E=!1)=>{const{type:S,props:R,ref:N,children:C,dynamicChildren:I,shapeFlag:D,patchFlag:M,dirs:U}=d;if(N!=null&&jo(N,null,g,d,!0),D&256){h.ctx.deactivate(d);return}const x=D&1&&U,z=!$n(d);let ue;if(z&&(ue=R&&R.onVnodeBeforeUnmount)&&Ze(ue,h,d),D&6)b(d.component,g,_);else{if(D&128){d.suspense.unmount(g,_);return}x&&Ct(d,null,h,"beforeUnmount"),D&64?d.type.remove(d,h,g,E,Z,_):I&&(S!==re||M>0&&M&64)?F(I,h,g,!1,!0):(S===re&&M&384||!E&&D&16)&&F(C,h,g),_&&Vt(d)}(z&&(ue=R&&R.onVnodeUnmounted)||x)&&Re(()=>{ue&&Ze(ue,h,d),x&&Ct(d,null,h,"unmounted")},g)},Vt=d=>{const{type:h,el:g,anchor:_,transition:E}=d;if(h===re){Vr(g,_);return}if(h===no){B(d);return}const S=()=>{o(g),E&&!E.persisted&&E.afterLeave&&E.afterLeave()};if(d.shapeFlag&1&&E&&!E.persisted){const{leave:R,delayLeave:N}=E,C=()=>R(g,S);N?N(d.el,S,C):C()}else S()},Vr=(d,h)=>{let g;for(;d!==h;)g=v(d),o(d),d=g;o(h)},b=(d,h,g)=>{const{bum:_,scope:E,update:S,subTree:R,um:N}=d;_&&_n(_),E.stop(),S&&(S.active=!1,Te(R,d,h,g)),N&&Re(N,h),Re(()=>{d.isUnmounted=!0},h),h&&h.pendingBranch&&!h.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===h.pendingId&&(h.deps--,h.deps===0&&h.resolve())},F=(d,h,g,_=!1,E=!1,S=0)=>{for(let R=S;R<d.length;R++)Te(d[R],h,g,_,E)},T=d=>d.shapeFlag&6?T(d.component.subTree):d.shapeFlag&128?d.suspense.next():v(d.anchor||d.el),k=(d,h,g)=>{d==null?h._vnode&&Te(h._vnode,null,null,!0):$(h._vnode||null,d,h,null,null,null,g),ci(),Dl(),h._vnode=d},Z={p:$,um:Te,m:Ke,r:Vt,mt:pe,mc:P,pc:oe,pbc:Y,n:T,o:e};let ge,q;return t&&([ge,q]=t(Z)),{render:k,hydrate:ge,createApp:jf(k,ge)}}function Pt({effect:e,update:t},r){e.allowRecurse=t.allowRecurse=r}function rc(e,t,r=!1){const n=e.children,o=t.children;if(W(n)&&W(o))for(let s=0;s<n.length;s++){const i=n[s];let a=o[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=o[s]=yt(o[s]),a.el=i.el),r||rc(i,a)),a.type===Kn&&(a.el=i.el)}}function qf(e){const t=e.slice(),r=[0];let n,o,s,i,a;const l=e.length;for(n=0;n<l;n++){const u=e[n];if(u!==0){if(o=r[r.length-1],e[o]<u){t[n]=o,r.push(n);continue}for(s=0,i=r.length-1;s<i;)a=s+i>>1,e[r[a]]<u?s=a+1:i=a;u<e[r[s]]&&(s>0&&(t[n]=r[s-1]),r[s]=n)}}for(s=r.length,i=r[s-1];s-- >0;)r[s]=i,i=t[i];return r}const zf=e=>e.__isTeleport,re=Symbol(void 0),Kn=Symbol(void 0),qe=Symbol(void 0),no=Symbol(void 0),Or=[];let je=null;function j(e=!1){Or.push(je=e?null:[])}function Qf(){Or.pop(),je=Or[Or.length-1]||null}let Dr=1;function yi(e){Dr+=e}function nc(e){return e.dynamicChildren=Dr>0?je||Zt:null,Qf(),Dr>0&&je&&je.push(e),e}function V(e,t,r,n,o,s){return nc(A(e,t,r,n,o,s,!0))}function Yf(e,t,r,n,o){return nc(ye(e,t,r,n,o,!0))}function Vo(e){return e?e.__v_isVNode===!0:!1}function Ht(e,t){return e.type===t.type&&e.key===t.key}const xn="__vInternal",oc=({key:e})=>e!=null?e:null,En=({ref:e,ref_key:t,ref_for:r})=>e!=null?Ee(e)||$e(e)||X(e)?{i:He,r:e,k:t,f:!!r}:e:null;function A(e,t=null,r=null,n=0,o=null,s=e===re?0:1,i=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&oc(t),ref:t&&En(t),scopeId:Dn,slotScopeIds:null,children:r,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:n,dynamicProps:o,dynamicChildren:null,appContext:null,ctx:He};return a?(Fs(l,r),s&128&&e.normalize(l)):r&&(l.shapeFlag|=Ee(r)?8:16),Dr>0&&!i&&je&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&je.push(l),l}const ye=Zf;function Zf(e,t=null,r=null,n=0,o=null,s=!1){if((!e||e===Tf)&&(e=qe),Vo(e)){const a=St(e,t,!0);return r&&Fs(a,r),Dr>0&&!s&&je&&(a.shapeFlag&6?je[je.indexOf(e)]=a:je.push(a)),a.patchFlag|=-2,a}if(c0(e)&&(e=e.__vccOpts),t){t=Jf(t);let{class:a,style:l}=t;a&&!Ee(a)&&(t.class=Et(a)),le(l)&&(Pl(l)&&!W(l)&&(l=Ne({},l)),t.style=Cn(l))}const i=Ee(e)?1:hf(e)?128:zf(e)?64:le(e)?4:X(e)?2:0;return A(e,t,r,n,o,i,s,!0)}function Jf(e){return e?Pl(e)||xn in e?Ne({},e):e:null}function St(e,t,r=!1){const{props:n,ref:o,patchFlag:s,children:i}=e,a=t?e0(n||{},t):n;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:a,key:a&&oc(a),ref:t&&t.ref?r&&o?W(o)?o.concat(En(t)):[o,En(t)]:En(t):o,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:i,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==re?s===-1?16:s|16:s,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&St(e.ssContent),ssFallback:e.ssFallback&&St(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx}}function ct(e=" ",t=0){return ye(Kn,null,e,t)}function sc(e="",t=!1){return t?(j(),Yf(qe,null,e)):ye(qe,null,e)}function et(e){return e==null||typeof e=="boolean"?ye(qe):W(e)?ye(re,null,e.slice()):typeof e=="object"?yt(e):ye(Kn,null,String(e))}function yt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:St(e)}function Fs(e,t){let r=0;const{shapeFlag:n}=e;if(t==null)t=null;else if(W(t))r=16;else if(typeof t=="object")if(n&65){const o=t.default;o&&(o._c&&(o._d=!1),Fs(e,o()),o._c&&(o._d=!0));return}else{r=32;const o=t._;!o&&!(xn in t)?t._ctx=He:o===3&&He&&(He.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else X(t)?(t={default:t,_ctx:He},r=32):(t=String(t),n&64?(r=16,t=[ct(t)]):r=8);e.children=t,e.shapeFlag|=r}function e0(...e){const t={};for(let r=0;r<e.length;r++){const n=e[r];for(const o in n)if(o==="class")t.class!==n.class&&(t.class=Et([t.class,n.class]));else if(o==="style")t.style=Cn([t.style,n.style]);else if(Tn(o)){const s=t[o],i=n[o];i&&s!==i&&!(W(s)&&s.includes(i))&&(t[o]=s?[].concat(s,i):i)}else o!==""&&(t[o]=n[o])}return t}function Ze(e,t,r,n=null){Ue(e,t,7,[r,n])}const t0=tc();let r0=0;function n0(e,t,r){const n=e.type,o=(t?t.appContext:e.appContext)||t0,s={uid:r0++,vnode:e,type:n,parent:t,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,scope:new ml(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(o.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Yl(n,o),emitsOptions:Bl(n,o),emit:null,emitted:null,propsDefaults:de,inheritAttrs:n.inheritAttrs,ctx:de,data:de,props:de,attrs:de,slots:de,refs:de,setupState:de,setupContext:null,suspense:r,suspenseId:r?r.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=t?t.root:s,s.emit=uf.bind(null,s),e.ce&&e.ce(s),s}let Ie=null;const Ls=()=>Ie||He,nr=e=>{Ie=e,e.scope.on()},Kt=()=>{Ie&&Ie.scope.off(),Ie=null};function ic(e){return e.vnode.shapeFlag&4}let Ur=!1;function o0(e,t=!1){Ur=t;const{props:r,children:n}=e.vnode,o=ic(e);Uf(e,r,o,t),Kf(e,n);const s=o?s0(e,t):void 0;return Ur=!1,s}function s0(e,t){const r=e.type;e.accessCache=Object.create(null),e.proxy=rr(new Proxy(e.ctx,Ff));const{setup:n}=r;if(n){const o=e.setupContext=n.length>1?a0(e):null;nr(e),ar();const s=wt(n,e,0,[e.props,o]);if(lr(),Kt(),pl(s)){if(s.then(Kt,Kt),t)return s.then(i=>{$i(e,i,t)}).catch(i=>{Mn(i,e,0)});e.asyncDep=s}else $i(e,s,t)}else ac(e,t)}function $i(e,t,r){X(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:le(t)&&(e.setupState=Ll(t)),ac(e,r)}let bi;function ac(e,t,r){const n=e.type;if(!e.render){if(!t&&bi&&!n.render){const o=n.template||Ts(e).template;if(o){const{isCustomElement:s,compilerOptions:i}=e.appContext.config,{delimiters:a,compilerOptions:l}=n,u=Ne(Ne({isCustomElement:s,delimiters:a},i),l);n.render=bi(o,u)}}e.render=n.render||Ve}nr(e),ar(),Lf(e),lr(),Kt()}function i0(e){return new Proxy(e.attrs,{get(t,r){return Me(e,"get","$attrs"),t[r]}})}function a0(e){const t=n=>{e.exposed=n||{}};let r;return{get attrs(){return r||(r=i0(e))},slots:e.slots,emit:e.emit,expose:t}}function Gn(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Ll(rr(e.exposed)),{get(t,r){if(r in t)return t[r];if(r in Sr)return Sr[r](e)},has(t,r){return r in t||r in Sr}}))}function l0(e,t=!0){return X(e)?e.displayName||e.name:e.name||t&&e.__name}function c0(e){return X(e)&&"__vccOpts"in e}const ve=(e,t)=>nf(e,t,Ur);function Hs(e,t,r){const n=arguments.length;return n===2?le(t)&&!W(t)?Vo(t)?ye(e,null,[t]):ye(e,t):ye(e,null,t):(n>3?r=Array.prototype.slice.call(arguments,2):n===3&&Vo(r)&&(r=[r]),ye(e,t,r))}const u0=Symbol(""),f0=()=>Xe(u0),d0="3.2.45",v0="http://www.w3.org/2000/svg",Mt=typeof document<"u"?document:null,Ei=Mt&&Mt.createElement("template"),p0={insert:(e,t,r)=>{t.insertBefore(e,r||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,r,n)=>{const o=t?Mt.createElementNS(v0,e):Mt.createElement(e,r?{is:r}:void 0);return e==="select"&&n&&n.multiple!=null&&o.setAttribute("multiple",n.multiple),o},createText:e=>Mt.createTextNode(e),createComment:e=>Mt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Mt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,r,n,o,s){const i=r?r.previousSibling:t.lastChild;if(o&&(o===s||o.nextSibling))for(;t.insertBefore(o.cloneNode(!0),r),!(o===s||!(o=o.nextSibling)););else{Ei.innerHTML=n?`<svg>${e}</svg>`:e;const a=Ei.content;if(n){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,r)}return[i?i.nextSibling:t.firstChild,r?r.previousSibling:t.lastChild]}};function h0(e,t,r){const n=e._vtc;n&&(t=(t?[t,...n]:[...n]).join(" ")),t==null?e.removeAttribute("class"):r?e.setAttribute("class",t):e.className=t}function g0(e,t,r){const n=e.style,o=Ee(r);if(r&&!o){for(const s in r)Xo(n,s,r[s]);if(t&&!Ee(t))for(const s in t)r[s]==null&&Xo(n,s,"")}else{const s=n.display;o?t!==r&&(n.cssText=r):t&&e.removeAttribute("style"),"_vod"in e&&(n.display=s)}}const Ii=/\s*!important$/;function Xo(e,t,r){if(W(r))r.forEach(n=>Xo(e,t,n));else if(r==null&&(r=""),t.startsWith("--"))e.setProperty(t,r);else{const n=m0(e,t);Ii.test(r)?e.setProperty(ir(n),r.replace(Ii,""),"important"):e[n]=r}}const Ai=["Webkit","Moz","ms"],oo={};function m0(e,t){const r=oo[t];if(r)return r;let n=rt(t);if(n!=="filter"&&n in e)return oo[t]=n;n=Ln(n);for(let o=0;o<Ai.length;o++){const s=Ai[o]+n;if(s in e)return oo[t]=s}return t}const wi="http://www.w3.org/1999/xlink";function _0(e,t,r,n,o){if(n&&t.startsWith("xlink:"))r==null?e.removeAttributeNS(wi,t.slice(6,t.length)):e.setAttributeNS(wi,t,r);else{const s=pu(t);r==null||s&&!fl(r)?e.removeAttribute(t):e.setAttribute(t,s?"":r)}}function y0(e,t,r,n,o,s,i){if(t==="innerHTML"||t==="textContent"){n&&i(n,o,s),e[t]=r==null?"":r;return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=r;const l=r==null?"":r;(e.value!==l||e.tagName==="OPTION")&&(e.value=l),r==null&&e.removeAttribute(t);return}let a=!1;if(r===""||r==null){const l=typeof e[t];l==="boolean"?r=fl(r):r==null&&l==="string"?(r="",a=!0):l==="number"&&(r=0,a=!0)}try{e[t]=r}catch{}a&&e.removeAttribute(t)}function kt(e,t,r,n){e.addEventListener(t,r,n)}function $0(e,t,r,n){e.removeEventListener(t,r,n)}function b0(e,t,r,n,o=null){const s=e._vei||(e._vei={}),i=s[t];if(n&&i)i.value=n;else{const[a,l]=E0(t);if(n){const u=s[t]=w0(n,o);kt(e,a,u,l)}else i&&($0(e,a,i,l),s[t]=void 0)}}const Ni=/(?:Once|Passive|Capture)$/;function E0(e){let t;if(Ni.test(e)){t={};let n;for(;n=e.match(Ni);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):ir(e.slice(2)),t]}let so=0;const I0=Promise.resolve(),A0=()=>so||(I0.then(()=>so=0),so=Date.now());function w0(e,t){const r=n=>{if(!n._vts)n._vts=Date.now();else if(n._vts<=r.attached)return;Ue(N0(n,r.value),t,5,[n])};return r.value=e,r.attached=A0(),r}function N0(e,t){if(W(t)){const r=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{r.call(e),e._stopped=!0},t.map(n=>o=>!o._stopped&&n&&n(o))}else return t}const Si=/^on[a-z]/,S0=(e,t,r,n,o=!1,s,i,a,l)=>{t==="class"?h0(e,n,o):t==="style"?g0(e,r,n):Tn(t)?ms(t)||b0(e,t,r,n,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):O0(e,t,n,o))?y0(e,t,n,s,i,a,l):(t==="true-value"?e._trueValue=n:t==="false-value"&&(e._falseValue=n),_0(e,t,n,o))};function O0(e,t,r,n){return n?!!(t==="innerHTML"||t==="textContent"||t in e&&Si.test(t)&&X(r)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Si.test(t)&&Ee(r)?!1:t in e}const vt="transition",mr="animation",Ms=(e,{slots:t})=>Hs(xl,C0(e),t);Ms.displayName="Transition";const lc={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Ms.props=Ne({},xl.props,lc);const Tt=(e,t=[])=>{W(e)?e.forEach(r=>r(...t)):e&&e(...t)},Oi=e=>e?W(e)?e.some(t=>t.length>1):e.length>1:!1;function C0(e){const t={};for(const L in e)L in lc||(t[L]=e[L]);if(e.css===!1)return t;const{name:r="v",type:n,duration:o,enterFromClass:s=`${r}-enter-from`,enterActiveClass:i=`${r}-enter-active`,enterToClass:a=`${r}-enter-to`,appearFromClass:l=s,appearActiveClass:u=i,appearToClass:c=a,leaveFromClass:f=`${r}-leave-from`,leaveActiveClass:v=`${r}-leave-active`,leaveToClass:p=`${r}-leave-to`}=e,m=P0(o),$=m&&m[0],w=m&&m[1],{onBeforeEnter:y,onEnter:H,onEnterCancelled:O,onLeave:B,onLeaveCancelled:K,onBeforeAppear:te=y,onAppear:G=H,onAppearCancelled:P=O}=t,Q=(L,ae,pe)=>{Rt(L,ae?c:a),Rt(L,ae?u:i),pe&&pe()},Y=(L,ae)=>{L._isLeaving=!1,Rt(L,f),Rt(L,p),Rt(L,v),ae&&ae()},fe=L=>(ae,pe)=>{const _e=L?G:H,he=()=>Q(ae,L,pe);Tt(_e,[ae,he]),Ci(()=>{Rt(ae,L?l:s),pt(ae,L?c:a),Oi(_e)||Pi(ae,n,$,he)})};return Ne(t,{onBeforeEnter(L){Tt(y,[L]),pt(L,s),pt(L,i)},onBeforeAppear(L){Tt(te,[L]),pt(L,l),pt(L,u)},onEnter:fe(!1),onAppear:fe(!0),onLeave(L,ae){L._isLeaving=!0;const pe=()=>Y(L,ae);pt(L,f),F0(),pt(L,v),Ci(()=>{!L._isLeaving||(Rt(L,f),pt(L,p),Oi(B)||Pi(L,n,w,pe))}),Tt(B,[L,pe])},onEnterCancelled(L){Q(L,!1),Tt(O,[L])},onAppearCancelled(L){Q(L,!0),Tt(P,[L])},onLeaveCancelled(L){Y(L),Tt(K,[L])}})}function P0(e){if(e==null)return null;if(le(e))return[io(e.enter),io(e.leave)];{const t=io(e);return[t,t]}}function io(e){return Lr(e)}function pt(e,t){t.split(/\s+/).forEach(r=>r&&e.classList.add(r)),(e._vtc||(e._vtc=new Set)).add(t)}function Rt(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.remove(n));const{_vtc:r}=e;r&&(r.delete(t),r.size||(e._vtc=void 0))}function Ci(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let T0=0;function Pi(e,t,r,n){const o=e._endId=++T0,s=()=>{o===e._endId&&n()};if(r)return setTimeout(s,r);const{type:i,timeout:a,propCount:l}=R0(e,t);if(!i)return n();const u=i+"end";let c=0;const f=()=>{e.removeEventListener(u,v),s()},v=p=>{p.target===e&&++c>=l&&f()};setTimeout(()=>{c<l&&f()},a+1),e.addEventListener(u,v)}function R0(e,t){const r=window.getComputedStyle(e),n=m=>(r[m]||"").split(", "),o=n(`${vt}Delay`),s=n(`${vt}Duration`),i=Ti(o,s),a=n(`${mr}Delay`),l=n(`${mr}Duration`),u=Ti(a,l);let c=null,f=0,v=0;t===vt?i>0&&(c=vt,f=i,v=s.length):t===mr?u>0&&(c=mr,f=u,v=l.length):(f=Math.max(i,u),c=f>0?i>u?vt:mr:null,v=c?c===vt?s.length:l.length:0);const p=c===vt&&/\b(transform|all)(,|$)/.test(n(`${vt}Property`).toString());return{type:c,timeout:f,propCount:v,hasTransform:p}}function Ti(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((r,n)=>Ri(r)+Ri(e[n])))}function Ri(e){return Number(e.slice(0,-1).replace(",","."))*1e3}function F0(){return document.body.offsetHeight}const Sn=e=>{const t=e.props["onUpdate:modelValue"]||!1;return W(t)?r=>_n(t,r):t};function L0(e){e.target.composing=!0}function Fi(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const H0={created(e,{modifiers:{lazy:t,trim:r,number:n}},o){e._assign=Sn(o);const s=n||o.props&&o.props.type==="number";kt(e,t?"change":"input",i=>{if(i.target.composing)return;let a=e.value;r&&(a=a.trim()),s&&(a=Lr(a)),e._assign(a)}),r&&kt(e,"change",()=>{e.value=e.value.trim()}),t||(kt(e,"compositionstart",L0),kt(e,"compositionend",Fi),kt(e,"change",Fi))},mounted(e,{value:t}){e.value=t==null?"":t},beforeUpdate(e,{value:t,modifiers:{lazy:r,trim:n,number:o}},s){if(e._assign=Sn(s),e.composing||document.activeElement===e&&e.type!=="range"&&(r||n&&e.value.trim()===t||(o||e.type==="number")&&Lr(e.value)===t))return;const i=t==null?"":t;e.value!==i&&(e.value=i)}},ao={deep:!0,created(e,t,r){e._assign=Sn(r),kt(e,"change",()=>{const n=e._modelValue,o=M0(e),s=e.checked,i=e._assign;if(W(n)){const a=dl(n,o),l=a!==-1;if(s&&!l)i(n.concat(o));else if(!s&&l){const u=[...n];u.splice(a,1),i(u)}}else if(Rn(n)){const a=new Set(n);s?a.add(o):a.delete(o),i(a)}else i(cc(e,s))})},mounted:Li,beforeUpdate(e,t,r){e._assign=Sn(r),Li(e,t,r)}};function Li(e,{value:t,oldValue:r},n){e._modelValue=t,W(t)?e.checked=dl(t,n.props.value)>-1:Rn(t)?e.checked=t.has(n.props.value):t!==r&&(e.checked=Pn(t,cc(e,!0)))}function M0(e){return"_value"in e?e._value:e.value}function cc(e,t){const r=t?"_trueValue":"_falseValue";return r in e?e[r]:t}const k0=["ctrl","shift","alt","meta"],D0={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>k0.some(r=>e[`${r}Key`]&&!t.includes(r))},U0=(e,t)=>(r,...n)=>{for(let o=0;o<t.length;o++){const s=D0[t[o]];if(s&&s(r,t))return}return e(r,...n)},B0=Ne({patchProp:S0},p0);let Hi;function W0(){return Hi||(Hi=Vf(B0))}const K0=(...e)=>{const t=W0().createApp(...e),{mount:r}=t;return t.mount=n=>{const o=x0(n);if(!o)return;const s=t._component;!X(s)&&!s.render&&!s.template&&(s.template=o.innerHTML),o.innerHTML="";const i=r(o,!1,o instanceof SVGElement);return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),i},t};function x0(e){return Ee(e)?document.querySelector(e):e}var G0=!1;/*!
  * pinia v2.0.23
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */let uc;const jn=e=>uc=e,fc=Symbol();function qo(e){return e&&typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"&&typeof e.toJSON!="function"}var Cr;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(Cr||(Cr={}));function j0(){const e=_l(!0),t=e.run(()=>we({}));let r=[],n=[];const o=rr({install(s){jn(o),o._a=s,s.provide(fc,o),s.config.globalProperties.$pinia=o,n.forEach(i=>r.push(i)),n=[]},use(s){return!this._a&&!G0?n.push(s):r.push(s),this},_p:r,_a:null,_e:e,_s:new Map,state:t});return o}const dc=()=>{};function Mi(e,t,r,n=dc){e.push(t);const o=()=>{const s=e.indexOf(t);s>-1&&(e.splice(s,1),n())};return!r&&Ls()&&Kr(o),o}function qt(e,...t){e.slice().forEach(r=>{r(...t)})}function zo(e,t){e instanceof Map&&t instanceof Map&&t.forEach((r,n)=>e.set(n,r)),e instanceof Set&&t instanceof Set&&t.forEach(e.add,e);for(const r in t){if(!t.hasOwnProperty(r))continue;const n=t[r],o=e[r];qo(o)&&qo(n)&&e.hasOwnProperty(r)&&!$e(n)&&!At(n)?e[r]=zo(o,n):e[r]=n}return e}const V0=Symbol();function X0(e){return!qo(e)||!e.hasOwnProperty(V0)}const{assign:$t}=Object;function q0(e){return!!($e(e)&&e.effect)}function z0(e,t,r,n){const{state:o,actions:s,getters:i}=t,a=r.state.value[e];let l;function u(){a||(r.state.value[e]=o?o():{});const c=Ju(r.state.value[e]);return $t(c,s,Object.keys(i||{}).reduce((f,v)=>(f[v]=rr(ve(()=>{jn(r);const p=r._s.get(e);return i[v].call(p,p)})),f),{}))}return l=vc(e,u,t,r,n,!0),l.$reset=function(){const f=o?o():{};this.$patch(v=>{$t(v,f)})},l}function vc(e,t,r={},n,o,s){let i;const a=$t({actions:{}},r),l={deep:!0};let u,c,f=rr([]),v=rr([]),p;const m=n.state.value[e];!s&&!m&&(n.state.value[e]={}),we({});let $;function w(G){let P;u=c=!1,typeof G=="function"?(G(n.state.value[e]),P={type:Cr.patchFunction,storeId:e,events:p}):(zo(n.state.value[e],G),P={type:Cr.patchObject,payload:G,storeId:e,events:p});const Q=$=Symbol();Os().then(()=>{$===Q&&(u=!0)}),c=!0,qt(f,P,n.state.value[e])}const y=dc;function H(){i.stop(),f=[],v=[],n._s.delete(e)}function O(G,P){return function(){jn(n);const Q=Array.from(arguments),Y=[],fe=[];function L(_e){Y.push(_e)}function ae(_e){fe.push(_e)}qt(v,{args:Q,name:G,store:K,after:L,onError:ae});let pe;try{pe=P.apply(this&&this.$id===e?this:K,Q)}catch(_e){throw qt(fe,_e),_e}return pe instanceof Promise?pe.then(_e=>(qt(Y,_e),_e)).catch(_e=>(qt(fe,_e),Promise.reject(_e))):(qt(Y,pe),pe)}}const B={_p:n,$id:e,$onAction:Mi.bind(null,v),$patch:w,$reset:y,$subscribe(G,P={}){const Q=Mi(f,G,P.detached,()=>Y()),Y=i.run(()=>Wt(()=>n.state.value[e],fe=>{(P.flush==="sync"?c:u)&&G({storeId:e,type:Cr.direct,events:p},fe)},$t({},l,P)));return Q},$dispose:H},K=xt(B);n._s.set(e,K);const te=n._e.run(()=>(i=_l(),i.run(()=>t())));for(const G in te){const P=te[G];if($e(P)&&!q0(P)||At(P))s||(m&&X0(P)&&($e(P)?P.value=m[G]:zo(P,m[G])),n.state.value[e][G]=P);else if(typeof P=="function"){const Q=O(G,P);te[G]=Q,a.actions[G]=P}}return $t(K,te),$t(ee(K),te),Object.defineProperty(K,"$state",{get:()=>n.state.value[e],set:G=>{w(P=>{$t(P,G)})}}),n._p.forEach(G=>{$t(K,i.run(()=>G({store:K,app:n._a,pinia:n,options:a})))}),m&&s&&r.hydrate&&r.hydrate(K.$state,m),u=!0,c=!0,K}function pc(e,t,r){let n,o;const s=typeof t=="function";typeof e=="string"?(n=e,o=s?r:t):(o=e,n=e.id);function i(a,l){const u=Ls();return a=a||u&&Xe(fc),a&&jn(a),a=uc,a._s.has(n)||(s?vc(n,t,o,a):z0(n,o,a)),a._s.get(n)}return i.$id=n,i}/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Yt=typeof window<"u";function Q0(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const ne=Object.assign;function lo(e,t){const r={};for(const n in t){const o=t[n];r[n]=ze(o)?o.map(e):e(o)}return r}const Pr=()=>{},ze=Array.isArray,Y0=/\/$/,Z0=e=>e.replace(Y0,"");function co(e,t,r="/"){let n,o={},s="",i="";const a=t.indexOf("#");let l=t.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(n=t.slice(0,l),s=t.slice(l+1,a>-1?a:t.length),o=e(s)),a>-1&&(n=n||t.slice(0,a),i=t.slice(a,t.length)),n=rd(n!=null?n:t,r),{fullPath:n+(s&&"?")+s+i,path:n,query:o,hash:i}}function J0(e,t){const r=t.query?e(t.query):"";return t.path+(r&&"?")+r+(t.hash||"")}function ki(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function ed(e,t,r){const n=t.matched.length-1,o=r.matched.length-1;return n>-1&&n===o&&or(t.matched[n],r.matched[o])&&hc(t.params,r.params)&&e(t.query)===e(r.query)&&t.hash===r.hash}function or(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function hc(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const r in e)if(!td(e[r],t[r]))return!1;return!0}function td(e,t){return ze(e)?Di(e,t):ze(t)?Di(t,e):e===t}function Di(e,t){return ze(t)?e.length===t.length&&e.every((r,n)=>r===t[n]):e.length===1&&e[0]===t}function rd(e,t){if(e.startsWith("/"))return e;if(!e)return t;const r=t.split("/"),n=e.split("/");let o=r.length-1,s,i;for(s=0;s<n.length;s++)if(i=n[s],i!==".")if(i==="..")o>1&&o--;else break;return r.slice(0,o).join("/")+"/"+n.slice(s-(s===n.length?1:0)).join("/")}var Br;(function(e){e.pop="pop",e.push="push"})(Br||(Br={}));var Tr;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Tr||(Tr={}));function nd(e){if(!e)if(Yt){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Z0(e)}const od=/^[^#]+#/;function sd(e,t){return e.replace(od,"#")+t}function id(e,t){const r=document.documentElement.getBoundingClientRect(),n=e.getBoundingClientRect();return{behavior:t.behavior,left:n.left-r.left-(t.left||0),top:n.top-r.top-(t.top||0)}}const Vn=()=>({left:window.pageXOffset,top:window.pageYOffset});function ad(e){let t;if("el"in e){const r=e.el,n=typeof r=="string"&&r.startsWith("#"),o=typeof r=="string"?n?document.getElementById(r.slice(1)):document.querySelector(r):r;if(!o)return;t=id(o,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function Ui(e,t){return(history.state?history.state.position-t:-1)+e}const Qo=new Map;function ld(e,t){Qo.set(e,t)}function cd(e){const t=Qo.get(e);return Qo.delete(e),t}let ud=()=>location.protocol+"//"+location.host;function gc(e,t){const{pathname:r,search:n,hash:o}=t,s=e.indexOf("#");if(s>-1){let a=o.includes(e.slice(s))?e.slice(s).length:1,l=o.slice(a);return l[0]!=="/"&&(l="/"+l),ki(l,"")}return ki(r,e)+n+o}function fd(e,t,r,n){let o=[],s=[],i=null;const a=({state:v})=>{const p=gc(e,location),m=r.value,$=t.value;let w=0;if(v){if(r.value=p,t.value=v,i&&i===m){i=null;return}w=$?v.position-$.position:0}else n(p);o.forEach(y=>{y(r.value,m,{delta:w,type:Br.pop,direction:w?w>0?Tr.forward:Tr.back:Tr.unknown})})};function l(){i=r.value}function u(v){o.push(v);const p=()=>{const m=o.indexOf(v);m>-1&&o.splice(m,1)};return s.push(p),p}function c(){const{history:v}=window;!v.state||v.replaceState(ne({},v.state,{scroll:Vn()}),"")}function f(){for(const v of s)v();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",c)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",c),{pauseListeners:l,listen:u,destroy:f}}function Bi(e,t,r,n=!1,o=!1){return{back:e,current:t,forward:r,replaced:n,position:window.history.length,scroll:o?Vn():null}}function dd(e){const{history:t,location:r}=window,n={value:gc(e,r)},o={value:t.state};o.value||s(n.value,{back:null,current:n.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function s(l,u,c){const f=e.indexOf("#"),v=f>-1?(r.host&&document.querySelector("base")?e:e.slice(f))+l:ud()+e+l;try{t[c?"replaceState":"pushState"](u,"",v),o.value=u}catch(p){console.error(p),r[c?"replace":"assign"](v)}}function i(l,u){const c=ne({},t.state,Bi(o.value.back,l,o.value.forward,!0),u,{position:o.value.position});s(l,c,!0),n.value=l}function a(l,u){const c=ne({},o.value,t.state,{forward:l,scroll:Vn()});s(c.current,c,!0);const f=ne({},Bi(n.value,l,null),{position:c.position+1},u);s(l,f,!1),n.value=l}return{location:n,state:o,push:a,replace:i}}function vd(e){e=nd(e);const t=dd(e),r=fd(e,t.state,t.location,t.replace);function n(s,i=!0){i||r.pauseListeners(),history.go(s)}const o=ne({location:"",base:e,go:n,createHref:sd.bind(null,e)},t,r);return Object.defineProperty(o,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(o,"state",{enumerable:!0,get:()=>t.state.value}),o}function pd(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),vd(e)}function hd(e){return typeof e=="string"||e&&typeof e=="object"}function mc(e){return typeof e=="string"||typeof e=="symbol"}const ht={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},_c=Symbol("");var Wi;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Wi||(Wi={}));function sr(e,t){return ne(new Error,{type:e,[_c]:!0},t)}function ot(e,t){return e instanceof Error&&_c in e&&(t==null||!!(e.type&t))}const Ki="[^/]+?",gd={sensitive:!1,strict:!1,start:!0,end:!0},md=/[.+*?^${}()[\]/\\]/g;function _d(e,t){const r=ne({},gd,t),n=[];let o=r.start?"^":"";const s=[];for(const u of e){const c=u.length?[]:[90];r.strict&&!u.length&&(o+="/");for(let f=0;f<u.length;f++){const v=u[f];let p=40+(r.sensitive?.25:0);if(v.type===0)f||(o+="/"),o+=v.value.replace(md,"\\$&"),p+=40;else if(v.type===1){const{value:m,repeatable:$,optional:w,regexp:y}=v;s.push({name:m,repeatable:$,optional:w});const H=y||Ki;if(H!==Ki){p+=10;try{new RegExp(`(${H})`)}catch(B){throw new Error(`Invalid custom RegExp for param "${m}" (${H}): `+B.message)}}let O=$?`((?:${H})(?:/(?:${H}))*)`:`(${H})`;f||(O=w&&u.length<2?`(?:/${O})`:"/"+O),w&&(O+="?"),o+=O,p+=20,w&&(p+=-8),$&&(p+=-20),H===".*"&&(p+=-50)}c.push(p)}n.push(c)}if(r.strict&&r.end){const u=n.length-1;n[u][n[u].length-1]+=.7000000000000001}r.strict||(o+="/?"),r.end?o+="$":r.strict&&(o+="(?:/|$)");const i=new RegExp(o,r.sensitive?"":"i");function a(u){const c=u.match(i),f={};if(!c)return null;for(let v=1;v<c.length;v++){const p=c[v]||"",m=s[v-1];f[m.name]=p&&m.repeatable?p.split("/"):p}return f}function l(u){let c="",f=!1;for(const v of e){(!f||!c.endsWith("/"))&&(c+="/"),f=!1;for(const p of v)if(p.type===0)c+=p.value;else if(p.type===1){const{value:m,repeatable:$,optional:w}=p,y=m in u?u[m]:"";if(ze(y)&&!$)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const H=ze(y)?y.join("/"):y;if(!H)if(w)v.length<2&&(c.endsWith("/")?c=c.slice(0,-1):f=!0);else throw new Error(`Missing required param "${m}"`);c+=H}}return c||"/"}return{re:i,score:n,keys:s,parse:a,stringify:l}}function yd(e,t){let r=0;for(;r<e.length&&r<t.length;){const n=t[r]-e[r];if(n)return n;r++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function $d(e,t){let r=0;const n=e.score,o=t.score;for(;r<n.length&&r<o.length;){const s=yd(n[r],o[r]);if(s)return s;r++}if(Math.abs(o.length-n.length)===1){if(xi(n))return 1;if(xi(o))return-1}return o.length-n.length}function xi(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const bd={type:0,value:""},Ed=/[a-zA-Z0-9_]/;function Id(e){if(!e)return[[]];if(e==="/")return[[bd]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(p){throw new Error(`ERR (${r})/"${u}": ${p}`)}let r=0,n=r;const o=[];let s;function i(){s&&o.push(s),s=[]}let a=0,l,u="",c="";function f(){!u||(r===0?s.push({type:0,value:u}):r===1||r===2||r===3?(s.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:u,regexp:c,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),u="")}function v(){u+=l}for(;a<e.length;){if(l=e[a++],l==="\\"&&r!==2){n=r,r=4;continue}switch(r){case 0:l==="/"?(u&&f(),i()):l===":"?(f(),r=1):v();break;case 4:v(),r=n;break;case 1:l==="("?r=2:Ed.test(l)?v():(f(),r=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?c[c.length-1]=="\\"?c=c.slice(0,-1)+l:r=3:c+=l;break;case 3:f(),r=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,c="";break;default:t("Unknown state");break}}return r===2&&t(`Unfinished custom RegExp for param "${u}"`),f(),i(),o}function Ad(e,t,r){const n=_d(Id(e.path),r),o=ne(n,{record:e,parent:t,children:[],alias:[]});return t&&!o.record.aliasOf==!t.record.aliasOf&&t.children.push(o),o}function wd(e,t){const r=[],n=new Map;t=Vi({strict:!1,end:!0,sensitive:!1},t);function o(c){return n.get(c)}function s(c,f,v){const p=!v,m=Nd(c);m.aliasOf=v&&v.record;const $=Vi(t,c),w=[m];if("alias"in c){const O=typeof c.alias=="string"?[c.alias]:c.alias;for(const B of O)w.push(ne({},m,{components:v?v.record.components:m.components,path:B,aliasOf:v?v.record:m}))}let y,H;for(const O of w){const{path:B}=O;if(f&&B[0]!=="/"){const K=f.record.path,te=K[K.length-1]==="/"?"":"/";O.path=f.record.path+(B&&te+B)}if(y=Ad(O,f,$),v?v.alias.push(y):(H=H||y,H!==y&&H.alias.push(y),p&&c.name&&!ji(y)&&i(c.name)),m.children){const K=m.children;for(let te=0;te<K.length;te++)s(K[te],y,v&&v.children[te])}v=v||y,(y.record.components&&Object.keys(y.record.components).length||y.record.name||y.record.redirect)&&l(y)}return H?()=>{i(H)}:Pr}function i(c){if(mc(c)){const f=n.get(c);f&&(n.delete(c),r.splice(r.indexOf(f),1),f.children.forEach(i),f.alias.forEach(i))}else{const f=r.indexOf(c);f>-1&&(r.splice(f,1),c.record.name&&n.delete(c.record.name),c.children.forEach(i),c.alias.forEach(i))}}function a(){return r}function l(c){let f=0;for(;f<r.length&&$d(c,r[f])>=0&&(c.record.path!==r[f].record.path||!yc(c,r[f]));)f++;r.splice(f,0,c),c.record.name&&!ji(c)&&n.set(c.record.name,c)}function u(c,f){let v,p={},m,$;if("name"in c&&c.name){if(v=n.get(c.name),!v)throw sr(1,{location:c});$=v.record.name,p=ne(Gi(f.params,v.keys.filter(H=>!H.optional).map(H=>H.name)),c.params&&Gi(c.params,v.keys.map(H=>H.name))),m=v.stringify(p)}else if("path"in c)m=c.path,v=r.find(H=>H.re.test(m)),v&&(p=v.parse(m),$=v.record.name);else{if(v=f.name?n.get(f.name):r.find(H=>H.re.test(f.path)),!v)throw sr(1,{location:c,currentLocation:f});$=v.record.name,p=ne({},f.params,c.params),m=v.stringify(p)}const w=[];let y=v;for(;y;)w.unshift(y.record),y=y.parent;return{name:$,path:m,params:p,matched:w,meta:Od(w)}}return e.forEach(c=>s(c)),{addRoute:s,resolve:u,removeRoute:i,getRoutes:a,getRecordMatcher:o}}function Gi(e,t){const r={};for(const n of t)n in e&&(r[n]=e[n]);return r}function Nd(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:Sd(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function Sd(e){const t={},r=e.props||!1;if("component"in e)t.default=r;else for(const n in e.components)t[n]=typeof r=="boolean"?r:r[n];return t}function ji(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Od(e){return e.reduce((t,r)=>ne(t,r.meta),{})}function Vi(e,t){const r={};for(const n in e)r[n]=n in t?t[n]:e[n];return r}function yc(e,t){return t.children.some(r=>r===e||yc(e,r))}const $c=/#/g,Cd=/&/g,Pd=/\//g,Td=/=/g,Rd=/\?/g,bc=/\+/g,Fd=/%5B/g,Ld=/%5D/g,Ec=/%5E/g,Hd=/%60/g,Ic=/%7B/g,Md=/%7C/g,Ac=/%7D/g,kd=/%20/g;function ks(e){return encodeURI(""+e).replace(Md,"|").replace(Fd,"[").replace(Ld,"]")}function Dd(e){return ks(e).replace(Ic,"{").replace(Ac,"}").replace(Ec,"^")}function Yo(e){return ks(e).replace(bc,"%2B").replace(kd,"+").replace($c,"%23").replace(Cd,"%26").replace(Hd,"`").replace(Ic,"{").replace(Ac,"}").replace(Ec,"^")}function Ud(e){return Yo(e).replace(Td,"%3D")}function Bd(e){return ks(e).replace($c,"%23").replace(Rd,"%3F")}function Wd(e){return e==null?"":Bd(e).replace(Pd,"%2F")}function On(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function Kd(e){const t={};if(e===""||e==="?")return t;const n=(e[0]==="?"?e.slice(1):e).split("&");for(let o=0;o<n.length;++o){const s=n[o].replace(bc," "),i=s.indexOf("="),a=On(i<0?s:s.slice(0,i)),l=i<0?null:On(s.slice(i+1));if(a in t){let u=t[a];ze(u)||(u=t[a]=[u]),u.push(l)}else t[a]=l}return t}function Xi(e){let t="";for(let r in e){const n=e[r];if(r=Ud(r),n==null){n!==void 0&&(t+=(t.length?"&":"")+r);continue}(ze(n)?n.map(s=>s&&Yo(s)):[n&&Yo(n)]).forEach(s=>{s!==void 0&&(t+=(t.length?"&":"")+r,s!=null&&(t+="="+s))})}return t}function xd(e){const t={};for(const r in e){const n=e[r];n!==void 0&&(t[r]=ze(n)?n.map(o=>o==null?null:""+o):n==null?n:""+n)}return t}const Gd=Symbol(""),qi=Symbol(""),Xn=Symbol(""),wc=Symbol(""),Zo=Symbol("");function _r(){let e=[];function t(n){return e.push(n),()=>{const o=e.indexOf(n);o>-1&&e.splice(o,1)}}function r(){e=[]}return{add:t,list:()=>e,reset:r}}function bt(e,t,r,n,o){const s=n&&(n.enterCallbacks[o]=n.enterCallbacks[o]||[]);return()=>new Promise((i,a)=>{const l=f=>{f===!1?a(sr(4,{from:r,to:t})):f instanceof Error?a(f):hd(f)?a(sr(2,{from:t,to:f})):(s&&n.enterCallbacks[o]===s&&typeof f=="function"&&s.push(f),i())},u=e.call(n&&n.instances[o],t,r,l);let c=Promise.resolve(u);e.length<3&&(c=c.then(l)),c.catch(f=>a(f))})}function uo(e,t,r,n){const o=[];for(const s of e)for(const i in s.components){let a=s.components[i];if(!(t!=="beforeRouteEnter"&&!s.instances[i]))if(jd(a)){const u=(a.__vccOpts||a)[t];u&&o.push(bt(u,r,n,s,i))}else{let l=a();o.push(()=>l.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${i}" at "${s.path}"`));const c=Q0(u)?u.default:u;s.components[i]=c;const v=(c.__vccOpts||c)[t];return v&&bt(v,r,n,s,i)()}))}}return o}function jd(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function zi(e){const t=Xe(Xn),r=Xe(wc),n=ve(()=>t.resolve(me(e.to))),o=ve(()=>{const{matched:l}=n.value,{length:u}=l,c=l[u-1],f=r.matched;if(!c||!f.length)return-1;const v=f.findIndex(or.bind(null,c));if(v>-1)return v;const p=Qi(l[u-2]);return u>1&&Qi(c)===p&&f[f.length-1].path!==p?f.findIndex(or.bind(null,l[u-2])):v}),s=ve(()=>o.value>-1&&zd(r.params,n.value.params)),i=ve(()=>o.value>-1&&o.value===r.matched.length-1&&hc(r.params,n.value.params));function a(l={}){return qd(l)?t[me(e.replace)?"replace":"push"](me(e.to)).catch(Pr):Promise.resolve()}return{route:n,href:ve(()=>n.value.href),isActive:s,isExactActive:i,navigate:a}}const Vd=Be({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:zi,setup(e,{slots:t}){const r=xt(zi(e)),{options:n}=Xe(Xn),o=ve(()=>({[Yi(e.activeClass,n.linkActiveClass,"router-link-active")]:r.isActive,[Yi(e.exactActiveClass,n.linkExactActiveClass,"router-link-exact-active")]:r.isExactActive}));return()=>{const s=t.default&&t.default(r);return e.custom?s:Hs("a",{"aria-current":r.isExactActive?e.ariaCurrentValue:null,href:r.href,onClick:r.navigate,class:o.value},s)}}}),Xd=Vd;function qd(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function zd(e,t){for(const r in t){const n=t[r],o=e[r];if(typeof n=="string"){if(n!==o)return!1}else if(!ze(o)||o.length!==n.length||n.some((s,i)=>s!==o[i]))return!1}return!0}function Qi(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Yi=(e,t,r)=>e!=null?e:t!=null?t:r,Qd=Be({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:r}){const n=Xe(Zo),o=ve(()=>e.route||n.value),s=Xe(qi,0),i=ve(()=>{let u=me(s);const{matched:c}=o.value;let f;for(;(f=c[u])&&!f.components;)u++;return u}),a=ve(()=>o.value.matched[i.value]);yn(qi,ve(()=>i.value+1)),yn(Gd,a),yn(Zo,o);const l=we();return Wt(()=>[l.value,a.value,e.name],([u,c,f],[v,p,m])=>{c&&(c.instances[f]=u,p&&p!==c&&u&&u===v&&(c.leaveGuards.size||(c.leaveGuards=p.leaveGuards),c.updateGuards.size||(c.updateGuards=p.updateGuards))),u&&c&&(!p||!or(c,p)||!v)&&(c.enterCallbacks[f]||[]).forEach($=>$(u))},{flush:"post"}),()=>{const u=o.value,c=e.name,f=a.value,v=f&&f.components[c];if(!v)return Zi(r.default,{Component:v,route:u});const p=f.props[c],m=p?p===!0?u.params:typeof p=="function"?p(u):p:null,w=Hs(v,ne({},m,t,{onVnodeUnmounted:y=>{y.component.isUnmounted&&(f.instances[c]=null)},ref:l}));return Zi(r.default,{Component:w,route:u})||w}}});function Zi(e,t){if(!e)return null;const r=e(t);return r.length===1?r[0]:r}const Nc=Qd;function Yd(e){const t=wd(e.routes,e),r=e.parseQuery||Kd,n=e.stringifyQuery||Xi,o=e.history,s=_r(),i=_r(),a=_r(),l=Qu(ht);let u=ht;Yt&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const c=lo.bind(null,b=>""+b),f=lo.bind(null,Wd),v=lo.bind(null,On);function p(b,F){let T,k;return mc(b)?(T=t.getRecordMatcher(b),k=F):k=b,t.addRoute(k,T)}function m(b){const F=t.getRecordMatcher(b);F&&t.removeRoute(F)}function $(){return t.getRoutes().map(b=>b.record)}function w(b){return!!t.getRecordMatcher(b)}function y(b,F){if(F=ne({},F||l.value),typeof b=="string"){const d=co(r,b,F.path),h=t.resolve({path:d.path},F),g=o.createHref(d.fullPath);return ne(d,h,{params:v(h.params),hash:On(d.hash),redirectedFrom:void 0,href:g})}let T;if("path"in b)T=ne({},b,{path:co(r,b.path,F.path).path});else{const d=ne({},b.params);for(const h in d)d[h]==null&&delete d[h];T=ne({},b,{params:f(b.params)}),F.params=f(F.params)}const k=t.resolve(T,F),Z=b.hash||"";k.params=c(v(k.params));const ge=J0(n,ne({},b,{hash:Dd(Z),path:k.path})),q=o.createHref(ge);return ne({fullPath:ge,hash:Z,query:n===Xi?xd(b.query):b.query||{}},k,{redirectedFrom:void 0,href:q})}function H(b){return typeof b=="string"?co(r,b,l.value.path):ne({},b)}function O(b,F){if(u!==b)return sr(8,{from:F,to:b})}function B(b){return G(b)}function K(b){return B(ne(H(b),{replace:!0}))}function te(b){const F=b.matched[b.matched.length-1];if(F&&F.redirect){const{redirect:T}=F;let k=typeof T=="function"?T(b):T;return typeof k=="string"&&(k=k.includes("?")||k.includes("#")?k=H(k):{path:k},k.params={}),ne({query:b.query,hash:b.hash,params:"path"in k?{}:b.params},k)}}function G(b,F){const T=u=y(b),k=l.value,Z=b.state,ge=b.force,q=b.replace===!0,d=te(T);if(d)return G(ne(H(d),{state:typeof d=="object"?ne({},Z,d.state):Z,force:ge,replace:q}),F||T);const h=T;h.redirectedFrom=F;let g;return!ge&&ed(n,k,T)&&(g=sr(16,{to:h,from:k}),Ot(k,k,!0,!1)),(g?Promise.resolve(g):Q(h,k)).catch(_=>ot(_)?ot(_,2)?_:We(_):ce(_,h,k)).then(_=>{if(_){if(ot(_,2))return G(ne({replace:q},H(_.to),{state:typeof _.to=="object"?ne({},Z,_.to.state):Z,force:ge}),F||h)}else _=fe(h,k,!0,q,Z);return Y(h,k,_),_})}function P(b,F){const T=O(b,F);return T?Promise.reject(T):Promise.resolve()}function Q(b,F){let T;const[k,Z,ge]=Zd(b,F);T=uo(k.reverse(),"beforeRouteLeave",b,F);for(const d of k)d.leaveGuards.forEach(h=>{T.push(bt(h,b,F))});const q=P.bind(null,b,F);return T.push(q),zt(T).then(()=>{T=[];for(const d of s.list())T.push(bt(d,b,F));return T.push(q),zt(T)}).then(()=>{T=uo(Z,"beforeRouteUpdate",b,F);for(const d of Z)d.updateGuards.forEach(h=>{T.push(bt(h,b,F))});return T.push(q),zt(T)}).then(()=>{T=[];for(const d of b.matched)if(d.beforeEnter&&!F.matched.includes(d))if(ze(d.beforeEnter))for(const h of d.beforeEnter)T.push(bt(h,b,F));else T.push(bt(d.beforeEnter,b,F));return T.push(q),zt(T)}).then(()=>(b.matched.forEach(d=>d.enterCallbacks={}),T=uo(ge,"beforeRouteEnter",b,F),T.push(q),zt(T))).then(()=>{T=[];for(const d of i.list())T.push(bt(d,b,F));return T.push(q),zt(T)}).catch(d=>ot(d,8)?d:Promise.reject(d))}function Y(b,F,T){for(const k of a.list())k(b,F,T)}function fe(b,F,T,k,Z){const ge=O(b,F);if(ge)return ge;const q=F===ht,d=Yt?history.state:{};T&&(k||q?o.replace(b.fullPath,ne({scroll:q&&d&&d.scroll},Z)):o.push(b.fullPath,Z)),l.value=b,Ot(b,F,T,q),We()}let L;function ae(){L||(L=o.listen((b,F,T)=>{if(!Vr.listening)return;const k=y(b),Z=te(k);if(Z){G(ne(Z,{replace:!0}),k).catch(Pr);return}u=k;const ge=l.value;Yt&&ld(Ui(ge.fullPath,T.delta),Vn()),Q(k,ge).catch(q=>ot(q,12)?q:ot(q,2)?(G(q.to,k).then(d=>{ot(d,20)&&!T.delta&&T.type===Br.pop&&o.go(-1,!1)}).catch(Pr),Promise.reject()):(T.delta&&o.go(-T.delta,!1),ce(q,k,ge))).then(q=>{q=q||fe(k,ge,!1),q&&(T.delta&&!ot(q,8)?o.go(-T.delta,!1):T.type===Br.pop&&ot(q,20)&&o.go(-1,!1)),Y(k,ge,q)}).catch(Pr)}))}let pe=_r(),_e=_r(),he;function ce(b,F,T){We(b);const k=_e.list();return k.length?k.forEach(Z=>Z(b,F,T)):console.error(b),Promise.reject(b)}function oe(){return he&&l.value!==ht?Promise.resolve():new Promise((b,F)=>{pe.add([b,F])})}function We(b){return he||(he=!b,ae(),pe.list().forEach(([F,T])=>b?T(b):F()),pe.reset()),b}function Ot(b,F,T,k){const{scrollBehavior:Z}=e;if(!Yt||!Z)return Promise.resolve();const ge=!T&&cd(Ui(b.fullPath,0))||(k||!T)&&history.state&&history.state.scroll||null;return Os().then(()=>Z(b,F,ge)).then(q=>q&&ad(q)).catch(q=>ce(q,b,F))}const Ke=b=>o.go(b);let Te;const Vt=new Set,Vr={currentRoute:l,listening:!0,addRoute:p,removeRoute:m,hasRoute:w,getRoutes:$,resolve:y,options:e,push:B,replace:K,go:Ke,back:()=>Ke(-1),forward:()=>Ke(1),beforeEach:s.add,beforeResolve:i.add,afterEach:a.add,onError:_e.add,isReady:oe,install(b){const F=this;b.component("RouterLink",Xd),b.component("RouterView",Nc),b.config.globalProperties.$router=F,Object.defineProperty(b.config.globalProperties,"$route",{enumerable:!0,get:()=>me(l)}),Yt&&!Te&&l.value===ht&&(Te=!0,B(o.location).catch(Z=>{}));const T={};for(const Z in ht)T[Z]=ve(()=>l.value[Z]);b.provide(Xn,F),b.provide(wc,xt(T)),b.provide(Zo,l);const k=b.unmount;Vt.add(b),b.unmount=function(){Vt.delete(b),Vt.size<1&&(u=ht,L&&L(),L=null,l.value=ht,Te=!1,he=!1),k()}}};return Vr}function zt(e){return e.reduce((t,r)=>t.then(()=>r()),Promise.resolve())}function Zd(e,t){const r=[],n=[],o=[],s=Math.max(t.matched.length,e.matched.length);for(let i=0;i<s;i++){const a=t.matched[i];a&&(e.matched.find(u=>or(u,a))?n.push(a):r.push(a));const l=e.matched[i];l&&(t.matched.find(u=>or(u,l))||o.push(l))}return[r,n,o]}function Ds(){return Xe(Xn)}const Us=e=>(cr("data-v-33f552ac"),e=e(),ur(),e),Jd=Us(()=>A("header",null,[A("h2",null,"Encode/Decode"),A("summary",null,"simple letter for letter substitution ciphers")],-1)),ev=Us(()=>A("hr",null,null,-1)),tv=Us(()=>A("footer",null,[A("aside",null," This app is for entertainment and learning purposes only and comes with no warranty. "),A("small",null,[ct(" This project is under an MIT licence and is hosted at "),A("a",{href:"https://github.com/mcshaz/letter-swap-decoder"}," github.com/mcshaz/letter-swap-decoder "),ct(". More detail can be found there. ")]),A("p",null,"version 0.1.3")],-1)),rv=Be({__name:"App",setup(e){return(t,r)=>(j(),V(re,null,[Jd,ye(me(Nc)),ev,tv],64))}});const nt=(e,t)=>{const r=e.__vccOpts||e;for(const[n,o]of t)r[n]=o;return r},nv=nt(rv,[["__scopeId","data-v-33f552ac"]]);/**
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
*/var ov=typeof Object.defineProperty=="function"?Object.defineProperty:null,sv=ov;/**
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
*/var iv=sv;function av(){try{return iv({},"x",{}),!0}catch{return!1}}var lv=av;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var cv=Object.defineProperty,uv=cv;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var fr=Object.prototype,Ji=fr.toString,ea=fr.__defineGetter__,ta=fr.__defineSetter__,fv=fr.__lookupGetter__,dv=fr.__lookupSetter__;function vv(e,t,r){var n,o,s,i;if(typeof e!="object"||e===null||Ji.call(e)==="[object Array]")throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if(typeof r!="object"||r===null||Ji.call(r)==="[object Array]")throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if(o="value"in r,o&&(fv.call(e,t)||dv.call(e,t)?(n=e.__proto__,e.__proto__=fr,delete e[t],e[t]=r.value,e.__proto__=n):e[t]=r.value),s="get"in r,i="set"in r,o&&(s||i))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return s&&ea&&ea.call(e,t,r.get),i&&ta&&ta.call(e,t,r.set),e}var pv=vv;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var hv=lv,gv=uv,mv=pv,Jo;hv()?Jo=gv:Jo=mv;var _v=Jo;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var yv=_v;function $v(e,t,r){yv(e,t,{configurable:!1,enumerable:!1,writable:!1,value:r})}var bv=$v;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ev=bv,Bs=Ev;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Iv=Math.floor,Av=Iv;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var wv=Av,xr=wv;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Nv=xr;function Sv(e){return Nv(e)===e&&e>=0}var Ov=Sv;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Cv=Ov,Sc=Cv;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Pv=xr;function Tv(e){return Pv(e)===e}var Rv=Tv;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Fv=Rv,qn=Fv;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Lv(e){return e!==e}var Hv=Lv;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Mv=Hv,Oe=Mv;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var kv=Number.POSITIVE_INFINITY,Pe=kv;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Dv=Number;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Uv=Dv,Bv=Uv;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Wv=Bv,Kv=Wv.NEGATIVE_INFINITY,ke=Kv;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var xv=Pe,Gv=ke;function jv(e){return e===xv||e===Gv}var Vv=jv;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Xv=Vv,Gr=Xv;/**
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
*/function qv(e){return Math.abs(e)}var zv=qv;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Qv=zv,Gt=Qv;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Yv(){return typeof Symbol=="function"&&typeof Symbol("foo")=="symbol"}var Zv=Yv;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Jv=Zv,e1=Jv;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var t1=e1,r1=t1();function n1(){return r1&&typeof Symbol.toStringTag=="symbol"}var o1=n1;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var s1=o1,i1=s1;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var a1=Object.prototype.toString,Oc=a1;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var l1=Oc;function c1(e){return l1.call(e)}var u1=c1;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var f1=Object.prototype.hasOwnProperty;function d1(e,t){return e==null?!1:f1.call(e,t)}var v1=d1;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var p1=v1,h1=p1;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var g1=typeof Symbol=="function"?Symbol.toStringTag:"",m1=g1;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _1=h1,yr=m1,fo=Oc;function y1(e){var t,r,n;if(e==null)return fo.call(e);r=e[yr],t=_1(e,yr);try{e[yr]=void 0}catch{return fo.call(e)}return n=fo.call(e),t?e[yr]=r:delete e[yr],n}var $1=y1;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var b1=i1,E1=u1,I1=$1,es;b1()?es=I1:es=E1;var zn=es;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var A1=zn,w1=typeof Uint32Array=="function";function N1(e){return w1&&e instanceof Uint32Array||A1(e)==="[object Uint32Array]"}var S1=N1;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var O1=S1,C1=O1;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var P1=4294967295,T1=P1;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var R1=typeof Uint32Array=="function"?Uint32Array:null,F1=R1;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var L1=C1,vo=T1,ra=F1;function H1(){var e,t;if(typeof ra!="function")return!1;try{t=[1,3.14,-3.14,vo+1,vo+2],t=new ra(t),e=L1(t)&&t[0]===1&&t[1]===3&&t[2]===vo-2&&t[3]===0&&t[4]===1}catch{e=!1}return e}var M1=H1;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var k1=M1,D1=k1;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var U1=typeof Uint32Array=="function"?Uint32Array:void 0,B1=U1;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function W1(){throw new Error("not implemented")}var K1=W1;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var x1=D1,G1=B1,j1=K1,ts;x1()?ts=G1:ts=j1;var dr=ts;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var V1=zn,X1=typeof Float64Array=="function";function q1(e){return X1&&e instanceof Float64Array||V1(e)==="[object Float64Array]"}var z1=q1;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Q1=z1,Y1=Q1;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Z1=typeof Float64Array=="function"?Float64Array:null,J1=Z1;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ep=Y1,na=J1;function tp(){var e,t;if(typeof na!="function")return!1;try{t=new na([1,3.14,-3.14,NaN]),e=ep(t)&&t[0]===1&&t[1]===3.14&&t[2]===-3.14&&t[3]!==t[3]}catch{e=!1}return e}var rp=tp;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var np=rp,op=np;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var sp=typeof Float64Array=="function"?Float64Array:void 0,ip=sp;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function ap(){throw new Error("not implemented")}var lp=ap;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var cp=op,up=ip,fp=lp,rs;cp()?rs=up:rs=fp;var vr=rs;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var dp=zn,vp=typeof Uint8Array=="function";function pp(e){return vp&&e instanceof Uint8Array||dp(e)==="[object Uint8Array]"}var hp=pp;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var gp=hp,mp=gp;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _p=255,yp=_p;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $p=typeof Uint8Array=="function"?Uint8Array:null,bp=$p;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ep=mp,po=yp,oa=bp;function Ip(){var e,t;if(typeof oa!="function")return!1;try{t=[1,3.14,-3.14,po+1,po+2],t=new oa(t),e=Ep(t)&&t[0]===1&&t[1]===3&&t[2]===po-2&&t[3]===0&&t[4]===1}catch{e=!1}return e}var Ap=Ip;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var wp=Ap,Np=wp;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Sp=typeof Uint8Array=="function"?Uint8Array:void 0,Op=Sp;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Cp(){throw new Error("not implemented")}var Pp=Cp;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Tp=Np,Rp=Op,Fp=Pp,ns;Tp()?ns=Rp:ns=Fp;var Lp=ns;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Hp=zn,Mp=typeof Uint16Array=="function";function kp(e){return Mp&&e instanceof Uint16Array||Hp(e)==="[object Uint16Array]"}var Dp=kp;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Up=Dp,Bp=Up;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Wp=65535,Kp=Wp;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var xp=typeof Uint16Array=="function"?Uint16Array:null,Gp=xp;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var jp=Bp,ho=Kp,sa=Gp;function Vp(){var e,t;if(typeof sa!="function")return!1;try{t=[1,3.14,-3.14,ho+1,ho+2],t=new sa(t),e=jp(t)&&t[0]===1&&t[1]===3&&t[2]===ho-2&&t[3]===0&&t[4]===1}catch{e=!1}return e}var Xp=Vp;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var qp=Xp,zp=qp;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Qp=typeof Uint16Array=="function"?Uint16Array:void 0,Yp=Qp;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Zp(){throw new Error("not implemented")}var Jp=Zp;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var eh=zp,th=Yp,rh=Jp,os;eh()?os=th:os=rh;var nh=os;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var oh=Lp,sh=nh,ih={uint16:sh,uint8:oh},ah=ih;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ia=ah,Cc;function lh(){var e,t;return e=new ia.uint16(1),e[0]=4660,t=new ia.uint8(e.buffer),t[0]===52}Cc=lh();var ch=Cc;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var uh=ch,pr=uh;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var fh=pr,ss;fh===!0?ss=1:ss=0;var dh=ss;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var vh=dr,ph=vr,hh=dh,Pc=new ph(1),gh=new vh(Pc.buffer);function mh(e){return Pc[0]=e,gh[hh]}var _h=mh;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var yh=_h,Qe=yh;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $h=pr,is;$h===!0?is=1:is=0;var bh=is;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Eh=dr,Ih=vr,Ah=bh,as=new Ih(1),wh=new Eh(as.buffer);function Nh(e,t){return as[0]=e,wh[Ah]=t>>>0,as[0]}var Sh=Nh;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Oh=Sh,Qn=Oh;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ch=1023,hr=Ch;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Ph(e){return e===0?.3999999999940942:.3999999999940942+e*(.22222198432149784+e*.15313837699209373)}var Th=Ph;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Rh(e){return e===0?.6666666666666735:.6666666666666735+e*(.2857142874366239+e*(.1818357216161805+e*.14798198605116586))}var Fh=Rh;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var aa=Qe,Lh=Qn,Hh=Oe,Mh=hr,kh=ke,Dh=Th,Uh=Fh,Jr=.6931471803691238,en=19082149292705877e-26,Bh=0x40000000000000,Wh=.3333333333333333,la=1048575,Kh=2146435072,xh=1048576,Gh=1072693248;function jh(e){var t,r,n,o,s,i,a,l,u,c,f,v;return e===0?kh:Hh(e)||e<0?NaN:(r=aa(e),s=0,r<xh&&(s-=54,e*=Bh,r=aa(e)),r>=Kh?e+e:(s+=(r>>20)-Mh|0,r&=la,l=r+614244&1048576|0,e=Lh(e,r|l^Gh),s+=l>>20|0,a=e-1,(la&2+r)<3?a===0?s===0?0:s*Jr+s*en:(i=a*a*(.5-Wh*a),s===0?a-i:s*Jr-(i-s*en-a)):(c=a/(2+a),v=c*c,l=r-398458|0,f=v*v,u=440401-r|0,o=f*Dh(f),n=v*Uh(f),l|=u,i=n+o,l>0?(t=.5*a*a,s===0?a-(t-c*(t+i)):s*Jr-(t-(c*(t+i)+s*en)-a)):s===0?a-c*(a-i):s*Jr-(c*(a-i)-s*en-a))))}var Vh=jh;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Xh=Vh,jr=Xh;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var qh=Math.ceil,zh=qh;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Qh=zh,Yh=Qh;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Zh=xr,Jh=Yh;function e2(e){return e<0?Jh(e):Zh(e)}var t2=e2;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r2=t2,Tc=r2;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function n2(e){return e===0?.0416666666666666:.0416666666666666+e*(-.001388888888887411+e*2480158728947673e-20)}var o2=n2;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function s2(e){return e===0?-27557314351390663e-23:-27557314351390663e-23+e*(2087572321298175e-24+e*-11359647557788195e-27)}var i2=s2;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var a2=o2,l2=i2;function c2(e,t){var r,n,o,s;return s=e*e,o=s*s,n=s*a2(s),n+=o*o*l2(s),r=.5*s,o=1-r,o+(1-o-r+(s*n-e*t))}var u2=c2;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var f2=u2,Rc=f2;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var ca=-.16666666666666632,d2=.00833333333332249,v2=-.0001984126982985795,p2=27557313707070068e-22,h2=-25050760253406863e-24,g2=158969099521155e-24;function m2(e,t){var r,n,o,s;return s=e*e,o=s*s,r=d2+s*(v2+s*p2)+s*o*(h2+s*g2),n=s*e,t===0?e+n*(ca+s*r):e-(s*(.5*t-n*r)-t-n*ca)}var _2=m2;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var y2=_2,Fc=y2;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $2=pr,ls;$2===!0?ls=0:ls=1;var b2=ls;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var E2=dr,I2=vr,A2=b2,Lc=new I2(1),w2=new E2(Lc.buffer);function N2(e){return Lc[0]=e,w2[A2]}var S2=N2;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var O2=S2,C2=O2;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var P2=pr,Hc,cs,us;P2===!0?(cs=1,us=0):(cs=0,us=1);Hc={HIGH:cs,LOW:us};var T2=Hc;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var R2=dr,F2=vr,Mc=T2,kc=new F2(1),ua=new R2(kc.buffer),L2=Mc.HIGH,H2=Mc.LOW;function M2(e,t){return ua[L2]=e,ua[H2]=t,kc[0]}var k2=M2;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var D2=k2,Ws=D2;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var U2=1023,B2=U2;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var W2=-1023,K2=W2;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var x2=-1074,G2=x2;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var j2=pr,Dc,fs,ds;j2===!0?(fs=1,ds=0):(fs=0,ds=1);Dc={HIGH:fs,LOW:ds};var V2=Dc;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var X2=dr,q2=vr,Uc=V2,Bc=new q2(1),fa=new X2(Bc.buffer),z2=Uc.HIGH,Q2=Uc.LOW;function Y2(e,t){return Bc[0]=t,e[0]=fa[z2],e[1]=fa[Q2],e}var Z2=Y2;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var da=Z2;function J2(e,t){return arguments.length===1?da([0,0],e):da(e,t)}var eg=J2;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var tg=eg,Ks=tg;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var rg=Ks,ng=Qe,og=Ws,sg=2147483648>>>0,ig=2147483647,go=[0,0];function ag(e,t){var r,n;return rg(go,e),r=go[0],r&=ig,n=ng(t),n&=sg,r|=n,og(r,go[1])}var lg=ag;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var cg=lg,xs=cg;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ug=22250738585072014e-324,fg=ug;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var dg=fg,vg=Gr,pg=Oe,hg=Gt,gg=4503599627370496;function mg(e,t,r,n){return pg(e)||vg(e)?(t[n]=e,t[n+r]=0,t):e!==0&&hg(e)<dg?(t[n]=e*gg,t[n+r]=-52,t):(t[n]=e,t[n+r]=0,t)}var Wc=mg;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _g=Wc;function yg(e){return _g(e,[0,0],1,0)}var $g=yg;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var bg=Bs,Kc=$g,Eg=Wc;bg(Kc,"assign",Eg);var Ig=Kc;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ag=2146435072,wg=Ag;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ng=Qe,Sg=wg,Og=hr;function Cg(e){var t=Ng(e);return t=(t&Sg)>>>20,t-Og|0}var Pg=Cg;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Tg=Pg,Rg=Tg;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Fg=Pe,Lg=ke,Hg=hr,Mg=B2,kg=K2,Dg=G2,Ug=Oe,Bg=Gr,Wg=xs,Kg=Ig.assign,xg=Rg,Gg=Ks,jg=Ws,Vg=2220446049250313e-31,Xg=2148532223>>>0,mo=[0,0],_o=[0,0];function qg(e,t){var r,n;return t===0||e===0||Ug(e)||Bg(e)?e:(Kg(e,mo,1,0),e=mo[0],t+=mo[1],t+=xg(e),t<Dg?Wg(0,e):t>Mg?e<0?Lg:Fg:(t<=kg?(t+=52,n=Vg):n=1,Gg(_o,e),r=_o[0],r&=Xg,r|=t+Hg<<20,n*jg(r,_o[1])))}var zg=qg;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Qg=zg,Gs=Qg;/**
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
*/function Yg(e,t){var r,n;for(r=[],n=0;n<t;n++)r.push(e);return r}var Zg=Yg;/**
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
*/var Jg=Zg,em=Jg;/**
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
*/var tm=em;function rm(e){return tm(0,e)}var nm=rm;/**
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
*/var om=nm,sm=om;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var im=xr,tn=Gs,Yn=sm,xc=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],am=[1.570796251296997,7549789415861596e-23,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],yo=16777216,$o=5960464477539063e-23,rn=Yn(20),va=Yn(20),nn=Yn(20),Ae=Yn(20);function Gc(e,t,r,n,o,s,i,a,l){var u,c,f,v,p,m,$,w,y;for(v=s,y=n[r],w=r,p=0;w>0;p++)c=$o*y|0,Ae[p]=y-yo*c|0,y=n[w-1]+c,w-=1;if(y=tn(y,o),y-=8*im(y*.125),$=y|0,y-=$,f=0,o>0?(p=Ae[r-1]>>24-o,$+=p,Ae[r-1]-=p<<24-o,f=Ae[r-1]>>23-o):o===0?f=Ae[r-1]>>23:y>=.5&&(f=2),f>0){for($+=1,u=0,p=0;p<r;p++)w=Ae[p],u===0?w!==0&&(u=1,Ae[p]=16777216-w):Ae[p]=16777215-w;if(o>0)switch(o){case 1:Ae[r-1]&=8388607;break;case 2:Ae[r-1]&=4194303;break}f===2&&(y=1-y,u!==0&&(y-=tn(1,o)))}if(y===0){for(w=0,p=r-1;p>=s;p--)w|=Ae[p];if(w===0){for(m=1;Ae[s-m]===0;m++);for(p=r+1;p<=r+m;p++){for(l[a+p]=xc[i+p],c=0,w=0;w<=a;w++)c+=e[w]*l[a+(p-w)];n[p]=c}return r+=m,Gc(e,t,r,n,o,s,i,a,l)}}if(y===0)for(r-=1,o-=24;Ae[r]===0;)r-=1,o-=24;else y=tn(y,-o),y>=yo?(c=$o*y|0,Ae[r]=y-yo*c|0,r+=1,o+=24,Ae[r]=c):Ae[r]=y|0;for(c=tn(1,o),p=r;p>=0;p--)n[p]=c*Ae[p],c*=$o;for(p=r;p>=0;p--){for(c=0,m=0;m<=v&&m<=r-p;m++)c+=am[m]*n[p+m];nn[r-p]=c}for(c=0,p=r;p>=0;p--)c+=nn[p];for(f===0?t[0]=c:t[0]=-c,c=nn[0]-c,p=1;p<=r;p++)c+=nn[p];return f===0?t[1]=c:t[1]=-c,$&7}function lm(e,t,r,n){var o,s,i,a,l,u,c,f,v;for(s=4,a=n-1,i=(r-3)/24|0,i<0&&(i=0),u=r-24*(i+1),f=i-a,v=a+s,c=0;c<=v;c++)f<0?rn[c]=0:rn[c]=xc[f],f+=1;for(c=0;c<=s;c++){for(o=0,f=0;f<=a;f++)o+=e[f]*rn[a+(c-f)];va[c]=o}return l=s,Gc(e,t,l,va,u,s,i,a,rn)}var cm=lm;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var um=Math.round,fm=um;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var dm=fm,vm=dm;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var pm=vm,pa=Qe,hm=.6366197723675814,gm=1.5707963267341256,mm=6077100506506192e-26,_m=6077100506303966e-26,ym=20222662487959506e-37,$m=20222662487111665e-37,bm=84784276603689e-45,ha=2047;function Em(e,t,r){var n,o,s,i,a,l,u;return o=pm(e*hm),i=e-o*gm,a=o*mm,u=t>>20|0,r[0]=i-a,n=pa(r[0]),l=u-(n>>20&ha),l>16&&(s=i,a=o*_m,i=s-a,a=o*ym-(s-i-a),r[0]=i-a,n=pa(r[0]),l=u-(n>>20&ha),l>49&&(s=i,a=o*$m,i=s-a,a=o*bm-(s-i-a),r[0]=i-a)),r[1]=i-r[0]-a,o}var Im=Em;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Am=Qe,wm=C2,Nm=Ws,Sm=cm,on=Im,Om=0,Cm=16777216,gt=1.5707963267341256,Ut=6077100506506192e-26,sn=2*Ut,an=3*Ut,ln=4*Ut,Pm=2147483647,Tm=2146435072,Rm=1048575,Fm=598523,Lm=1072243195,Hm=1073928572,Mm=1074752122,km=1074977148,Dm=1075183036,Um=1075388923,Bm=1075594811,Wm=1094263291,$r=[0,0,0],br=[0,0];function Km(e,t){var r,n,o,s,i,a,l,u;if(o=Am(e),s=o&Pm|0,s<=Lm)return t[0]=e,t[1]=0,0;if(s<=Mm)return(s&Rm)===Fm?on(e,s,t):s<=Hm?e>0?(u=e-gt,t[0]=u-Ut,t[1]=u-t[0]-Ut,1):(u=e+gt,t[0]=u+Ut,t[1]=u-t[0]+Ut,-1):e>0?(u=e-2*gt,t[0]=u-sn,t[1]=u-t[0]-sn,2):(u=e+2*gt,t[0]=u+sn,t[1]=u-t[0]+sn,-2);if(s<=Bm)return s<=Dm?s===km?on(e,s,t):e>0?(u=e-3*gt,t[0]=u-an,t[1]=u-t[0]-an,3):(u=e+3*gt,t[0]=u+an,t[1]=u-t[0]+an,-3):s===Um?on(e,s,t):e>0?(u=e-4*gt,t[0]=u-ln,t[1]=u-t[0]-ln,4):(u=e+4*gt,t[0]=u+ln,t[1]=u-t[0]+ln,-4);if(s<Wm)return on(e,s,t);if(s>=Tm)return t[0]=NaN,t[1]=NaN,0;for(r=wm(e),n=(s>>20)-1046,u=Nm(s-(n<<20|0),r),a=0;a<2;a++)$r[a]=u|0,u=(u-$r[a])*Cm;for($r[2]=u,i=3;$r[i-1]===Om;)i-=1;return l=Sm($r,br,n,i),e<0?(t[0]=-br[0],t[1]=-br[1],-l):(t[0]=br[0],t[1]=br[1],l)}var xm=Km;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Gm=xm,jc=Gm;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var jm=Qe,bo=Rc,ga=Fc,Vm=jc,st=[0,0],Xm=2147483647,qm=1072243195,zm=1044381696,Qm=2146435072;function Ym(e){var t,r;if(t=jm(e),t&=Xm,t<=qm)return t<zm?1:bo(e,0);if(t>=Qm)return NaN;switch(r=Vm(e,st),r&3){case 0:return bo(st[0],st[1]);case 1:return-ga(st[0],st[1]);case 2:return-bo(st[0],st[1]);default:return ga(st[0],st[1])}}var Zm=Ym;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Jm=Zm,e_=Jm;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var t_=Qe,ma=Rc,Eo=Fc,r_=jc,n_=2147483647,o_=2146435072,s_=1072243195,i_=1045430272,it=[0,0];function a_(e){var t,r;if(t=t_(e),t&=n_,t<=s_)return t<i_?e:Eo(e,0);if(t>=o_)return NaN;switch(r=r_(e,it),r&3){case 0:return Eo(it[0],it[1]);case 1:return ma(it[0],it[1]);case 2:return-Eo(it[0],it[1]);default:return-ma(it[0],it[1])}}var l_=a_;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var c_=l_,Vc=c_;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var u_=3.141592653589793,js=u_;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var f_=Oe,d_=Gr,_a=e_,Io=Vc,v_=Gt,Er=xs,Ir=js;function p_(e){var t,r;return f_(e)?NaN:d_(e)?NaN:(r=e%2,t=v_(r),t===0||t===1?Er(0,r):t<.25?Io(Ir*r):t<.75?(t=.5-t,Er(_a(Ir*t),r)):t<1.25?(r=Er(1,r)-r,Io(Ir*r)):t<1.75?(t-=1.5,-Er(_a(Ir*t),r)):(r-=Er(2,r),Io(Ir*r)))}var h_=p_;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var g_=h_,m_=g_;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function __(e){return e===0?.06735230105312927:.06735230105312927+e*(.007385550860814029+e*(.0011927076318336207+e*(.00022086279071390839+e*25214456545125733e-21)))}var y_=__;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function $_(e){return e===0?.020580808432516733:.020580808432516733+e*(.0028905138367341563+e*(.0005100697921535113+e*(.00010801156724758394+e*44864094961891516e-21)))}var b_=$_;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function E_(e){return e===0?1.3920053346762105:1.3920053346762105+e*(.7219355475671381+e*(.17193386563280308+e*(.01864591917156529+e*(.0007779424963818936+e*7326684307446256e-21))))}var I_=E_;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function A_(e){return e===0?.21498241596060885:.21498241596060885+e*(.325778796408931+e*(.14635047265246445+e*(.02664227030336386+e*(.0018402845140733772+e*3194753265841009e-20))))}var w_=A_;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function N_(e){return e===0?-.032788541075985965:-.032788541075985965+e*(.006100538702462913+e*(-.0014034646998923284+e*.00031563207090362595))}var S_=N_;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function O_(e){return e===0?.01797067508118204:.01797067508118204+e*(-.0036845201678113826+e*(.000881081882437654+e*-.00031275416837512086))}var C_=O_;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function P_(e){return e===0?-.010314224129834144:-.010314224129834144+e*(.0022596478090061247+e*(-.0005385953053567405+e*.0003355291926355191))}var T_=P_;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function R_(e){return e===0?.6328270640250934:.6328270640250934+e*(1.4549225013723477+e*(.9777175279633727+e*(.22896372806469245+e*.013381091853678766)))}var F_=R_;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function L_(e){return e===0?2.4559779371304113:2.4559779371304113+e*(2.128489763798934+e*(.7692851504566728+e*(.10422264559336913+e*.003217092422824239)))}var H_=L_;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function M_(e){return e===0?.08333333333333297:.08333333333333297+e*(-.0027777777772877554+e*(.0007936505586430196+e*(-.00059518755745034+e*(.0008363399189962821+e*-.0016309293409657527))))}var k_=M_;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var D_=Oe,U_=Gr,B_=Gt,Qt=jr,W_=Tc,K_=m_,x_=js,Ao=Pe,G_=y_,j_=b_,V_=I_,X_=w_,q_=S_,z_=C_,Q_=T_,Y_=F_,Z_=H_,J_=k_,e3=.07721566490153287,t3=.3224670334241136,r3=1,n3=-.07721566490153287,o3=.48383612272381005,s3=-.1475877229945939,i3=.06462494023913339,a3=-.07721566490153287,l3=1,c3=.4189385332046727,cn=1.4616321449683622,u3=4503599627370496,f3=0x400000000000000,d3=8470329472543003e-37,ya=1.4616321449683622,v3=-.12148629053584961,p3=-3638676997039505e-33;function h3(e){var t,r,n,o,s,i,a,l,u,c,f,v,p;if(D_(e)||U_(e))return e;if(e===0)return Ao;if(e<0?(t=!0,e=-e):t=!1,e<d3)return-Qt(e);if(t){if(e>=u3||(u=K_(e),u===0))return Ao;r=Qt(x_/B_(u*e))}if(e===1||e===2)return 0;if(e<2)switch(e<=.9?(p=-Qt(e),e>=cn-1+.27?(f=1-e,n=0):e>=cn-1-.27?(f=e-(ya-1),n=1):(f=e,n=2)):(p=0,e>=cn+.27?(f=2-e,n=0):e>=cn-.27?(f=e-ya,n=1):(f=e-1,n=2)),n){case 0:v=f*f,i=e3+v*G_(v),s=v*(t3+v*j_(v)),a=f*i+s,p+=a-.5*f;break;case 1:v=f*f,c=v*f,i=o3+c*q_(c),s=s3+c*z_(c),o=i3+c*Q_(c),a=v*i-(p3-c*(s+f*o)),p+=v3+a;break;case 2:i=f*(a3+f*Y_(f)),s=l3+f*Z_(f),p+=-.5*f+i/s;break}else if(e<8)switch(n=W_(e),f=e-n,a=f*(n3+f*X_(f)),l=r3+f*V_(f),p=.5*f+a/l,v=1,n){case 7:v*=f+6;case 6:v*=f+5;case 5:v*=f+4;case 4:v*=f+3;case 3:v*=f+2,p+=Qt(v)}else e<f3?(u=Qt(e),v=1/e,f=v*v,c=c3+v*J_(f),p=(e-.5)*(u-1)+c):p=e*(Qt(e)-1);return t&&(p=r-p),p}var g3=h3;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var m3=g3,_3=m3;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function y3(e){return e===0?.6666666666666735:.6666666666666735+e*(.3999999999940942+e*(.2857142874366239+e*(.22222198432149784+e*(.1818357216161805+e*(.15313837699209373+e*.14798198605116586)))))}var $3=y3;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var b3=Oe,$a=Qe,ba=Qn,E3=Pe,I3=ke,Ea=hr,A3=$3,wo=.6931471803691238,No=19082149292705877e-26,w3=.41421356237309503,N3=-.2928932188134525,S3=1862645149230957e-24,O3=5551115123125783e-32,C3=9007199254740992,P3=.6666666666666666;function T3(e){var t,r,n,o,s,i,a,l,u,c;if(e<-1||b3(e))return NaN;if(e===-1)return I3;if(e===E3||e===0)return e;if(e<0?n=-e:n=e,c=1,n<w3){if(n<S3)return n<O3?e:e-e*e*.5;e>N3&&(c=0,o=e,r=1)}return c!==0&&(n<C3?(u=1+e,r=$a(u),c=(r>>20)-Ea,c>0?s=1-(u-e):s=e-(u-1),s/=u):(u=e,r=$a(u),c=(r>>20)-Ea,s=0),r&=1048575,r<434334?u=ba(u,r|1072693248):(c+=1,u=ba(u,r|1071644672),r=1048576-r>>2),o=u-1),t=.5*o*o,r===0?o===0?(s+=c*No,c*wo+s):(l=t*(1-P3*o),c*wo-(l-(c*No+s)-o)):(i=o/(2+o),a=i*i,l=a*A3(a),c===0?o-(t-i*(t+l)):c*wo-(t-(i*(t+l)+(c*No+s))-o))}var R3=T3;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var F3=R3,Vs=F3;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var L3=ke;function H3(e){return e===0&&1/e===L3}var M3=H3;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var k3=M3,Xc=k3;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var D3=2.5066282746310007,U3=D3;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var B3=qn;function W3(e){return B3(e/2)}var K3=W3;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var x3=K3,G3=x3;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ia=G3;function j3(e){return e>0?Ia(e-1):Ia(e+1)}var V3=j3;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var X3=V3,qc=X3;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var q3=Math.sqrt,z3=q3;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Q3=z3,Y3=Q3;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Z3=pr,vs;Z3===!0?vs=0:vs=1;var J3=vs;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e6=dr,t6=vr,r6=J3,ps=new t6(1),n6=new e6(ps.buffer);function o6(e,t){return ps[0]=e,n6[r6]=t>>>0,ps[0]}var s6=o6;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var i6=s6,Zn=i6;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function a6(e){return e|0}var l6=a6;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var c6=l6,zc=c6;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Aa=qc,u6=xs,f6=ke,un=Pe;function d6(e,t){return t===f6?un:t===un?0:t>0?Aa(t)?e:0:Aa(t)?u6(un,e):un}var v6=d6;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var p6=Qe,h6=2147483647,g6=1072693247,fn=1e300,dn=1e-300;function m6(e,t){var r,n;return n=p6(e),r=n&h6,r<=g6?t<0?fn*fn:dn*dn:t>0?fn*fn:dn*dn}var _6=m6;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var y6=Gt,wa=Pe;function $6(e,t){return e===-1?(e-e)/(e-e):e===1?1:y6(e)<1==(t===wa)?0:wa}var b6=$6;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function E6(e){return e===0?.5999999999999946:.5999999999999946+e*(.4285714285785502+e*(.33333332981837743+e*(.272728123808534+e*(.23066074577556175+e*.20697501780033842))))}var I6=E6;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var A6=Qe,vn=Zn,Na=Qn,w6=hr,N6=I6,S6=1048575,Sa=1048576,O6=1072693248,C6=536870912,P6=524288,T6=20,R6=9007199254740992,F6=.9617966939259756,L6=.9617967009544373,H6=-7028461650952758e-24,M6=[1,1.5],k6=[0,.5849624872207642],D6=[0,1350039202129749e-23];function U6(e,t,r){var n,o,s,i,a,l,u,c,f,v,p,m,$,w,y,H,O,B,K,te,G,P;return te=0,r<Sa&&(t*=R6,te-=53,r=A6(t)),te+=(r>>T6)-w6|0,G=r&S6|0,r=G|O6|0,G<=235662?P=0:G<767610?P=1:(P=0,te+=1,r-=Sa),t=Na(t,r),c=M6[P],B=t-c,K=1/(t+c),o=B*K,i=vn(o,0),n=(r>>1|C6)+P6,n+=P<<18,l=Na(0,n),u=t-(l-c),a=K*(B-i*l-i*u),s=o*o,O=s*s*N6(s),O+=a*(i+o),s=i*i,l=3+s+O,l=vn(l,0),u=O-(l-3-s),B=i*l,K=a*l+u*o,v=B+K,v=vn(v,0),p=K-(v-B),m=L6*v,$=H6*v+p*F6+D6[P],f=k6[P],H=te,w=m+$+f+H,w=vn(w,0),y=$-(w-H-f-m),e[0]=w,e[1]=y,e}var B6=U6;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function W6(e){return e===0?.5:.5+e*(-.3333333333333333+e*.25)}var K6=W6;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var x6=Zn,G6=K6,j6=1.4426950408889634,V6=1.4426950216293335,X6=19259629911266175e-24;function q6(e,t){var r,n,o,s,i,a;return o=t-1,s=o*o*G6(o),i=V6*o,a=o*X6-s*j6,n=i+a,n=x6(n,0),r=a-(n-i),e[0]=n,e[1]=r,e}var z6=q6;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Q6=.6931471805599453,Y6=Q6;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Z6(e){return e===0?.16666666666666602:.16666666666666602+e*(-.0027777777777015593+e*(6613756321437934e-20+e*(-16533902205465252e-22+e*41381367970572385e-24)))}var J6=Z6;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var e4=Qe,Oa=Qn,t4=Zn,r4=zc,n4=Gs,o4=Y6,Ca=hr,s4=J6,Pa=2147483647,Ta=1048575,Ra=1048576,i4=1071644672,Ar=20,a4=.6931471824645996,l4=-1904654299957768e-24;function c4(e,t,r){var n,o,s,i,a,l,u,c,f,v,p;return v=e&Pa|0,p=(v>>Ar)-Ca|0,f=0,v>i4&&(f=e+(Ra>>p+1)>>>0,p=((f&Pa)>>Ar)-Ca|0,n=(f&~(Ta>>p))>>>0,s=Oa(0,n),f=(f&Ta|Ra)>>Ar-p>>>0,e<0&&(f=-f),t-=s),s=r+t,s=t4(s,0),a=s*a4,l=(r-(s-t))*o4+s*l4,c=a+l,u=l-(c-a),s=c*c,o=c-s*s4(s),i=c*o/(o-2)-(u+c*u),c=1-(i-c),e=e4(c),e=r4(e),e+=f<<Ar>>>0,e>>Ar<=0?c=n4(c,f):c=Oa(c,e),c}var u4=c4;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Fa=Oe,La=qc,Ha=Gr,f4=qn,Ma=Y3,d4=Gt,So=Ks,v4=Zn,ka=zc,p4=ke,h4=Pe,g4=v6,m4=_6,_4=b6,y4=B6,$4=z6,b4=u4,Oo=2147483647,E4=1072693247,I4=1105199104,A4=1139802112,Da=1083179008,w4=1072693248,N4=1083231232,S4=3230714880>>>0,Ua=31,mt=1e300,_t=1e-300,O4=8008566259537294e-32,at=[0,0],Ba=[0,0];function Qc(e,t){var r,n,o,s,i,a,l,u,c,f,v,p,m,$,w,y;if(Fa(e)||Fa(t))return NaN;if(So(at,t),a=at[0],l=at[1],l===0){if(t===0)return 1;if(t===1)return e;if(t===-1)return 1/e;if(t===.5)return Ma(e);if(t===-.5)return 1/Ma(e);if(t===2)return e*e;if(t===3)return e*e*e;if(t===4)return e*=e,e*e;if(Ha(t))return _4(e,t)}if(So(at,e),s=at[0],i=at[1],i===0){if(s===0)return g4(e,t);if(e===1)return 1;if(e===-1&&La(t))return-1;if(Ha(e))return e===p4?Qc(-0,-t):t<0?0:h4}if(e<0&&f4(t)===!1)return(e-e)/(e-e);if(o=d4(e),r=s&Oo|0,n=a&Oo|0,u=s>>>Ua|0,c=a>>>Ua|0,u&&La(t)?u=-1:u=1,n>I4){if(n>A4)return m4(e,t);if(r<E4)return c===1?u*mt*mt:u*_t*_t;if(r>w4)return c===0?u*mt*mt:u*_t*_t;m=$4(Ba,o)}else m=y4(Ba,o,r);if(f=v4(t,0),p=(t-f)*m[0]+t*m[1],v=f*m[0],$=p+v,So(at,$),w=ka(at[0]),y=ka(at[1]),w>=Da){if((w-Da|y)!==0||p+O4>$-v)return u*mt*mt}else if((w&Oo)>=N4&&((w-S4|y)!==0||p<=$-v))return u*_t*_t;return $=b4(w,v,p),u*$}var C4=Qc;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var P4=C4,Yc=P4;/**
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
*/function T4(e){return e===0?.16666666666666602:.16666666666666602+e*(-.0027777777777015593+e*(6613756321437934e-20+e*(-16533902205465252e-22+e*41381367970572385e-24)))}var R4=T4;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var F4=Gs,L4=R4;function H4(e,t,r){var n,o,s,i;return n=e-t,o=n*n,s=n-o*L4(o),i=1-(t-n*s/(2-s)-e),F4(i,r)}var M4=H4;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var k4=Oe,Wa=Tc,D4=ke,Ka=Pe,U4=M4,B4=.6931471803691238,W4=19082149292705877e-26,xa=1.4426950408889634,K4=709.782712893384,x4=-745.1332191019411,Zc=1/(1<<28),G4=-Zc;function j4(e){var t,r,n;return k4(e)||e===Ka?e:e===D4?0:e>K4?Ka:e<x4?0:e>G4&&e<Zc?1+e:(e<0?n=Wa(xa*e-.5):n=Wa(xa*e+.5),t=e-n*B4,r=n*W4,U4(t,r,n))}var V4=j4;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var X4=V4,Xs=X4;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function q4(e){return e===0?.08333333333334822:.08333333333334822+e*(.0034722222160545866+e*(-.0026813261780578124+e*(-.00022954996161337813+e*.0007873113957930937)))}var z4=q4;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Q4=U3,Ga=Yc,Y4=Xs,Z4=z4,J4=143.01608;function ey(e){var t,r,n;return t=1/e,t=1+t*Z4(t),r=Y4(e),e>J4?(n=Ga(e,.5*e-.25),r=n*(n/r)):r=Ga(e,e-.5)/r,Q4*r*t}var ty=ey;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ry=.5772156649015329,ny=ry;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var oy=ny;function sy(e,t){return t/((1+oy*e)*e)}var iy=sy;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function ay(e){var t,r,n;return e===0?1:(e<0?t=-e:t=e,t<=1?(r=1+e*(.4942148268014971+e*(.20744822764843598+e*(.04763678004571372+e*(.010421379756176158+e*(.0011913514700658638+e*(.00016011952247675185+e*0)))))),n=1+e*(.0714304917030273+e*(-.23459179571824335+e*(.035823639860549865+e*(.011813978522206043+e*(-.004456419138517973+e*(.0005396055804933034+e*-23158187332412014e-21))))))):(e=1/e,r=0+e*(.00016011952247675185+e*(.0011913514700658638+e*(.010421379756176158+e*(.04763678004571372+e*(.20744822764843598+e*(.4942148268014971+e*1)))))),n=-23158187332412014e-21+e*(.0005396055804933034+e*(-.004456419138517973+e*(.011813978522206043+e*(.035823639860549865+e*(-.23459179571824335+e*(.0714304917030273+e*1))))))),r/n)}var ly=ay;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var cy=Oe,uy=qn,fy=Xc,ja=Gt,dy=xr,vy=Vc,Va=Pe,Xa=ke,qa=js,za=ty,Qa=iy,py=ly;function hy(e){var t,r,n,o;if(uy(e)&&e<0||e===Xa||cy(e))return NaN;if(e===0)return fy(e)?Xa:Va;if(e>171.61447887182297)return Va;if(e<-170.5674972726612)return 0;if(r=ja(e),r>33)return e>=0?za(e):(n=dy(r),(n&1)===0?t=-1:t=1,o=r-n,o>.5&&(n+=1,o=r-n),o=r*vy(qa*o),t*qa/(ja(o)*za(r)));for(o=1;e>=3;)e-=1,o*=e;for(;e<0;){if(e>-1e-9)return Qa(e,o);o/=e,e+=1}for(;e<2;){if(e<1e-9)return Qa(e,o);o/=e,e+=1}return e===2?o:(e-=2,o*py(e))}var gy=hy;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var my=gy,_y=my;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var yy=Pe;function $y(e){return e===0&&1/e===yy}var by=$y;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ey=by,Iy=Ey;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ya=Iy,Co=Oe,Ay=ke,pn=Pe;function wy(e,t){var r,n,o,s;if(r=arguments.length,r===2)return Co(e)||Co(t)?NaN:e===pn||t===pn?pn:e===t&&e===0?Ya(e)?e:t:e>t?e:t;for(n=Ay,s=0;s<r;s++){if(o=arguments[s],Co(o)||o===pn)return o;(o>n||o===n&&o===0&&Ya(o))&&(n=o)}return n}var Ny=wy;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Sy=Ny,Oy=Sy;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Za=Xc,Po=Oe,hn=ke,Cy=Pe;function Py(e,t){var r,n,o,s;if(r=arguments.length,r===2)return Po(e)||Po(t)?NaN:e===hn||t===hn?hn:e===t&&e===0?Za(e)?e:t:e<t?e:t;for(n=Cy,s=0;s<r;s++){if(o=arguments[s],Po(o)||o===hn)return o;(o<n||o===n&&o===0&&Za(o))&&(n=o)}return n}var Ty=Py;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ry=Ty,Fy=Ry;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ly=.9189385332046728,Hy=Ly;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Jc=[1276642195630063e-46,-3401102254316749e-45,1025680058010471e-43,-35475981581010704e-43,14292273559424982e-41,-6831888753985767e-39,39628370610464347e-38,-2868042435334643e-35,2683181998482699e-33,-3399615005417722e-31,6221098041892606e-29,-1809129475572494e-26,981082564692473e-23,-1384948176067564e-20,.16663894804518634],My=Jc.length;function ky(e){var t,r,n,o,s;if(e<-1.1||e>1.1)return NaN;for(n=0,o=0,t=2*e,s=0;s<My;s++)r=n,n=o,o=t*n-r+Jc[s];return(o-r)*.5}var Dy=ky;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Uy=Yc,By=Dy,Wy=9490626562425156e-8,Ky=3745194030963158e291;function xy(e){return e<10?NaN:e>=Ky?0:e<Wy?By(2*Uy(10/e,2)-1)/e:1/(e*12)}var Gy=xy;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var jy=_3,Ja=Vs,To=_y,Vy=Oy,Xy=Fy,gn=jr,qy=Hy,zy=ke,el=Pe,wr=Gy;function Qy(e,t){var r,n,o;return n=Xy(e,t),o=Vy(e,t),n<0?NaN:n===0?el:o===el?zy:n>=10?(r=wr(n)+wr(o)-wr(n+o),-.5*gn(o)+qy+r+(n-.5)*gn(n/(n+o))+o*Ja(-n/(n+o))):o>=10?(r=wr(o)-wr(n+o),jy(n)+r+n-n*gn(n+o)+(o-.5)*Ja(-n/(n+o))):gn(To(n)*(To(o)/To(n+o)))}var Yy=Qy;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Zy=Yy,Jy=Zy;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var tl=qn,rl=Oe,e$=Jy,t$=Gt,nl=jr,ol=ke;function hs(e,t){return rl(e)||rl(t)?NaN:!tl(e)||!tl(t)?NaN:e<0?hs(-e+t-1,t):t<0?ol:t===0?0:t===1?nl(t$(e)):e<t?ol:e-t<2?hs(e,e-t):-nl(e+1)-e$(e-t+1,t+1)}var r$=hs;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var n$=r$,eu=n$;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var sl=Sc,o$=eu,Ro=Oe,s$=Vs,i$=Xs,a$=jr,l$=Pe;function c$(e,t,r){var n;return Ro(e)||Ro(t)||Ro(r)||r<0||r>1||!sl(t)||t===l$?NaN:sl(e)?e>t?0:r===0?e===0?1:0:r===1?e===t?1:0:(n=o$(t,e),n+=e*a$(r)+(t-e)*s$(-r),i$(n)):0}var u$=c$;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function f$(e){return t;function t(){return e}}var d$=f$;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var v$=d$,tu=v$;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var il=Oe;function p$(e,t){return il(e)||il(t)?NaN:e===t?1:0}var h$=p$;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var g$=tu,al=Oe;function m$(e){if(al(e))return g$(NaN);return t;function t(r){return al(r)?NaN:r===e?1:0}}var _$=m$;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var y$=Bs,ru=h$,$$=_$;y$(ru,"factory",$$);var b$=ru;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ll=Sc,E$=tu,I$=eu,cl=b$.factory,Fo=Oe,A$=Vs,w$=Xs,N$=jr,S$=Pe;function O$(e,t){if(Fo(e)||Fo(t)||!ll(e)||e===S$||t<0||t>1)return E$(NaN);if(t===0||e===0)return cl(0);if(t===1)return cl(e);return r;function r(n){var o;return Fo(n)?NaN:ll(n)?n>e?0:(o=I$(e,n),o+=n*N$(t)+(e-n)*A$(-t),w$(o)):0}}var C$=O$;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var P$=Bs,nu=u$,T$=C$;P$(nu,"factory",T$);var R$=nu;const ou={E:.1249,T:.0928,A:.0804,O:.0764,I:.0757,N:.0723,S:.0651,R:.0628,H:.0505,L:.0407,D:.0382,C:.0334,U:.0273,M:.0251,F:.024,P:.0214,G:.0187,W:.0168,Y:.0166,B:.0148,V:.0105,K:.0054,X:.0023,J:.0016,Q:.0012,Z:9e-4};function F$(e,t,r=ou){const n={};let o=0;for(const s of Object.keys(r))o+=n[s]=R$(e,t,r[s]);for(const s of Object.keys(n))n[s]/=o;return n}function L$(e){const t=Array(26).fill(0);for(let n=0;n<e.length;++n){const o=e.charCodeAt(n);65<=o&&o<=90?++t[o-65]:97<=o&&o<=122&&++t[o-97]}const r={};for(let n=0;n<26;++n)r[String.fromCharCode(n+65)]=t[n];return r}function H$(e,t){let r=L$(e),n=ou;if(t&&t.length){const i=new Set(t);let a=1;if(n=Object.fromEntries(Object.entries(n).filter(([l,u])=>i.has(l)?(a-=u,!0):!1)),a<1)for(const l of Object.keys(n))n[l]/=a;r=Object.fromEntries(Object.entries(r).filter(l=>!i.has(l[0])))}const o=Object.values(r).reduce((i,a)=>i+a,0),s=Object.keys(r).reduce((i,a)=>(r[a]&&(i[a]={count:r[a],decodesToProbs:F$(r[a],o,n)}),i),{});return{totalLetters:o,letterDetails:s}}function su(e){return Object.entries(e).sort((t,r)=>r[1]-t[1]).map(t=>t[0])}function M$(...e){const t=Math.min(...e),r=Math.max(...e)-t;return e.map(n=>(n-t)/r)}function k$(e,t,r){const n=(a,l)=>Math.round(a+(l-a)*r),o=n(e.r,t.r),s=n(e.g,t.g),i=n(e.b,t.b);return{r:o,g:s,b:i}}const jt=pc("encoded",()=>{const e=we(""),t=xt(new Map),r=ve(()=>H$(e.value)),n=(i,a)=>{for(const[l,u]of i.entries())if(u===a)return l},o=i=>i.length===1&&/[a-z]/i.test(i);return{message:e,decryptionKeys:t,allLetterStats:r,addKey:(i,a)=>{if(!o(i)||!o(a))return!1;i=i.toUpperCase(),a=a.toUpperCase();const l=n(t,a);return l&&t.delete(l),t.set(i,a),!0}}}),iu=pc("raw",()=>({message:we("")})),D$=e=>(cr("data-v-aa6b7497"),e=e(),ur(),e),U$=D$(()=>A("p",null," Enter text below - either plain text and click encode, or a message encoded with a simple alphabetical letter for letter substitution, and click decode. This app provides some tools to help you, but it does not decode the message for you. ",-1)),B$=Be({__name:"HomeView",setup(e){const t=jt(),r=iu(),n=we(t.message||r.message),o=Ds(),s=()=>{r.message=n.value,t.message="",o.push({name:"encode"})},i=()=>{t.message!==n.value&&(r.message="",t.decryptionKeys.clear(),t.message=n.value),o.push({name:"decode"})};return(a,l)=>(j(),V(re,null,[U$,A("fieldset",null,[A("div",null,[bn(A("textarea",{id:"message","onUpdate:modelValue":l[0]||(l[0]=u=>n.value=u)},null,512),[[H0,n.value]])]),A("button",{class:"btn",onClick:i,role:"link"},"Decode"),A("button",{class:"btn",onClick:s,role:"link"},"Encode")])],64))}});const W$=nt(B$,[["__scopeId","data-v-aa6b7497"]]);function K$(){const e=Array(26);for(let t=0;t<26;++t)e[t]=[String.fromCharCode(t+65),Math.random()];return e.sort((t,r)=>t[1]-r[1]),e.map(t=>t[0])}function ul(e,t){t||(t=K$());const r=Array(e.length);for(let n=0;n<e.length;++n){const o=e.charCodeAt(n);65<=o&&o<=90?r[n]=t[o-65]:97<=o&&o<=122?r[n]=t[o-97].toLowerCase():r[n]=e[n]}return r.join("")}const x$=["value"],G$={for:"noSpaces"},j$={for:"noSpaces"},V$={for:"noSpaces"},X$=Be({__name:"EncodeMsg",setup(e){const t=iu().message,r=we(ul(t)),n=we(!1),o=we(!1),s=we(!1);t||Ds().push("/");const i=ve(()=>{let l=r.value;return n.value&&(l=l.replace(/\s/g,"")),o.value&&(l=l.replace(/[^a-zA-Z\s]/g,"")),s.value&&(l=l.toUpperCase()),l}),a=()=>{r.value=ul(t)};return(l,u)=>(j(),V(re,null,[A("div",null,[A("textarea",{readonly:"",value:me(i)},null,8,x$)]),A("fieldset",null,[A("label",G$,[bn(A("input",{type:"checkbox","onUpdate:modelValue":u[0]||(u[0]=c=>n.value=c),id:"noSpaces"},null,512),[[ao,n.value]]),ct(" Exclude whitespace ")]),A("label",j$,[bn(A("input",{type:"checkbox","onUpdate:modelValue":u[1]||(u[1]=c=>o.value=c),id:"noSpaces"},null,512),[[ao,o.value]]),ct(" Exclude punctuation ")]),A("label",V$,[bn(A("input",{type:"checkbox","onUpdate:modelValue":u[2]||(u[2]=c=>s.value=c),id:"noSpaces"},null,512),[[ao,s.value]]),ct(" Capitals Only ")])]),A("button",{class:"btn",onClick:a},"New random key")],64))}});const q$=nt(X$,[["__scopeId","data-v-f3de3c51"]]),z$=["disabled"],Q$=["onClick","title"],Y$=Be({__name:"DecodingKeyboard",props:{activeEncodedLetter:null},emits:["key-click","enter-key-click"],setup(e){const t=e,r=jt(),n=["QWERTYUIOP".split(""),"ASDFGHJKL".split(""),[..."ZXCVBNM".split(""),"enter"]],o=Object.fromEntries(Array.from({length:26},(a,l)=>[String.fromCharCode(l+65),1/26])),s=ve(()=>t.activeEncodedLetter?r.allLetterStats.letterDetails[t.activeEncodedLetter].decodesToProbs:o),i=ve(()=>{const a={r:0,g:255,b:0},l={r:255,g:0,b:0},u=M$(...Object.values(s.value)),c=Object.fromEntries(Object.keys(s.value).map((v,p)=>[v,u[p]])),f=new Set(r.decryptionKeys.values());return n.map(v=>v.map(p=>{var m;return p.length===1?{value:p,colour:k$(l,a,c[p]||0),p:`probability=${((m=s.value[p])==null?void 0:m.toFixed(3))||"[select letter]"}`,isInUse:f.has(p)}:{value:p}}))});return(a,l)=>(j(),V("fieldset",{id:"keyboard",disabled:!e.activeEncodedLetter},[(j(!0),V(re,null,Le(me(i),(u,c)=>(j(),V("div",{class:"row",key:c},[A("div",{class:Et(`spacer${c}`)},null,2),(j(!0),V(re,null,Le(u,f=>(j(),V(re,{key:f},[f.colour?(j(),V("button",{key:0,type:"button",class:Et(f.isInUse?"used-key":""),style:Cn({borderColor:`rgb(${f.colour.r},${f.colour.g},${f.colour.b})`}),onClick:v=>a.$emit("key-click",f.value),title:f.p},[A("span",null,ie(f.value),1)],14,Q$)):(j(),V("button",{key:1,type:"button",class:"non-alpha",onClick:l[0]||(l[0]=v=>a.$emit("enter-key-click"))},[A("span",null,ie(f.value),1)]))],64))),128)),A("div",{class:Et(`spacer${c}`)},null,2)]))),128))],8,z$))}});const Z$=nt(Y$,[["__scopeId","data-v-89db8600"]]),J$={id:"coded-text"},e5={key:0,class:"non-alpha char"},t5=["title","onClick","onDblclick"],r5=Be({__name:"PartialDecodedText",props:{activeLetter:null},emits:["update:active-letter","update:active-word"],setup(e,{emit:t}){const r=e,n=jt(),o=we(-1),s=we(-1),i=we(-1);Wn(()=>{window.addEventListener("keydown",c)}),Kr(()=>{window.removeEventListener("keydown",c)});const a=ve(()=>{let f=-1;return n.message.split(`
`).map(v=>{var m;++f;const p=Array(v.length);for(let $=0;$<v.length;++$){const w=v[$],y=w.charCodeAt(0),H=65<=y&&y<=90;if(H||97<=y&&y<=122){let O,B;H?(B=w,O=n.decryptionKeys.get(w)):(B=String.fromCharCode(y-32),O=(m=n.decryptionKeys.get(B))==null?void 0:m.toLowerCase());const K=Boolean(O);p[$]={id:f++,uc:B,display:O||w,prior:K?`decrypted from '${w}''`:void 0,isDecrypted:K,isNonAlpha:!1}}else p[$]={id:f++,display:w,isNonAlpha:!0}}return p})});function l(f){o.value=f,(f<s.value||f>=i.value)&&(s.value=i.value=-1),t("update:active-letter",f===-1?"":n.message[f].toUpperCase())}function u(f){s.value=p(n.message,f,!1)+1,i.value=p(n.message,f,!0);const v=n.message.slice(s.value,i.value);t("update:active-word",v);function p(m,$,w=!0){let y=$,H=w?()=>++y<m.length:()=>--y>=0,O;for(;H()&&(65<=(O=m.charCodeAt(y))&&O<=90||97<=O&&O<=122););return y}}Wt(()=>r.activeLetter,f=>{o.value!==-1&&f!==n.message[o.value].toUpperCase()&&(o.value=-1)});function c(f){if(o.value===-1||f.key!=="ArrowRight"&&f.key!=="ArrowLeft")return;const v=p(n.message,o.value,f.key==="ArrowRight");v>=0&&l(v);function p(m,$,w=!0){let y=$,H=w?()=>++y<m.length:()=>--y>=0,O;for(;H()&&((O=m.charCodeAt(y))<65||90<O&&O<97||122<O););return y<m.length?y:-1}}return(f,v)=>(j(),V("div",J$,[(j(!0),V(re,null,Le(me(a),(p,m)=>(j(),V("div",{key:m},[(j(!0),V(re,null,Le(p,$=>(j(),V(re,{key:$.id},[$.isNonAlpha?(j(),V("span",e5,ie($.display),1)):(j(),V("span",{key:1,class:Et(["alpha char",{current:$.id===o.value,"active-letter":$.uc===e.activeLetter,"active-word":s.value<=$.id&&$.id<=i.value,decrypted:$.isDecrypted}]),title:$.prior,onClick:w=>l($.id),onDblclick:w=>u($.id)},ie($.display),43,t5))],64))),128))]))),128))]))}});const n5=nt(r5,[["__scopeId","data-v-3c3fbd57"]]),qs=e=>(cr("data-v-2309fe36"),e=e(),ur(),e),o5=qs(()=>A("td",null,null,-1)),s5=["onClick"],i5=qs(()=>A("th",null,"count",-1)),a5=qs(()=>A("th",null,"decoded",-1)),l5=Be({__name:"DecodingKeyStats",props:{activeLetter:null},setup(e){const t=e,r=jt(),n=we(),o=ve(()=>Object.keys(r.allLetterStats.letterDetails)),s=ve(()=>o.value.map((l,u)=>({display:r.decryptionKeys.get(l)||"",id:r.decryptionKeys.get(l)||u}))),i=ve(()=>Object.values(r.allLetterStats.letterDetails).map(l=>su(l.decodesToProbs).map(u=>({letter:u,prob:l.decodesToProbs[u].toFixed(3)})))),a=l=>{switch(Math.round(l%10)){case 1:return"st";case 2:return"nd";case 3:return"rd";default:return"th"}};return Wt(()=>t.activeLetter,l=>{if(l&&n.value&&n.value.scrollWidth>n.value.clientWidth){const u=n.value.scrollWidth/(o.value.length+1);let f=(o.value.indexOf(l)+1.5)*u-.5*n.value.clientWidth;f<0&&(f=0),n.value.scrollLeft=f}}),(l,u)=>(j(),V("div",{id:"letter-details",ref_key:"mainDiv",ref:n},[A("table",null,[A("tbody",null,[A("tr",null,[o5,(j(!0),V(re,null,Le(me(o),c=>(j(),V("th",{key:c},[A("a",{href:"#",class:Et(e.activeLetter===c?"active":""),onClick:U0(f=>l.$emit("update:active-letter",c),["prevent"])},ie(c),11,s5)]))),128))]),A("tr",null,[i5,(j(!0),V(re,null,Le(me(r).allLetterStats.letterDetails,(c,f)=>(j(),V("td",{key:f},ie(c.count),1))),128))]),A("tr",null,[a5,(j(!0),V(re,null,Le(me(s),c=>(j(),V("td",{key:c.id},ie(c.display),1))),128))]),(j(),V(re,null,Le(3,c=>A("tr",{key:c},[A("th",null,[ct(ie(c),1),A("sup",null,ie(a(c)),1)]),(j(!0),V(re,null,Le(me(i),(f,v)=>(j(),V("td",{key:v},ie(f[c-1].letter)+"\xA0("+ie(f[c-1].prob)+") ",1))),128))])),64))])])],512))}});const c5=nt(l5,[["__scopeId","data-v-2309fe36"]]),u5=Object.freeze([null,{a:2.06,i:.52},{of:4.16,to:2.6,in:2.27,is:1.13,it:.77,as:.77,be:.65,by:.63,on:.62,he:.55,or:.49,at:.46,an:.37,we:.28,if:.21,so:.19,no:.19},{the:7.14,and:3.04,for:.88,was:.74,not:.61,are:.5,his:.49,but:.38,had:.35,you:.31,one:.29,all:.28,can:.22,her:.22,has:.22,who:.2},{that:1.08,with:.7,this:.51,from:.47,have:.37,they:.33,were:.31,been:.22,more:.21,when:.2,will:.2},{which:.42,their:.29,there:.22,would:.2}]),f5={key:0,id:"words-of-length"},d5={key:0},v5={key:1},p5=Be({__name:"CommonWordLengths",props:{wordLength:null},setup(e){const t=e,r=ve(()=>u5[t.wordLength]);return(n,o)=>e.wordLength?(j(),V("div",f5,[A("h4",null,"Word length: "+ie(e.wordLength),1),me(r)?(j(),V("ol",d5,[(j(!0),V(re,null,Le(me(r),(s,i)=>(j(),V("li",{key:i},[ct(' "'+ie(i)+'" ',1),A("small",null,"("+ie(s)+"% of all words)",1)]))),128))])):(j(),V("p",v5,"No data"))])):sc("",!0)}});const h5=nt(p5,[["__scopeId","data-v-c7de237e"]]),g5={TH:3.56,HE:3.07,IN:2.43,ER:2.05,AN:1.99,RE:1.85,ON:1.76,AT:1.49,EN:1.45,ND:1.35,TI:1.34,ES:1.34,OR:1.28,TE:1.2,OF:1.17,ED:1.17,IS:1.13,IT:1.12,AL:1.09,AR:1.07,ST:1.05,TO:1.04,NT:1.04,NG:.95,SE:.93,HA:.93,AS:.87,OU:.87,IO:.83,LE:.83,VE:.83,CO:.79,ME:.79,DE:.76,HI:.76,RI:.73,RO:.73,IC:.7,NE:.69,EA:.69,RA:.69,CE:.65,LI:.62,CH:.6,LL:.58,BE:.58,MA:.57,SI:.55,OM:.55,UR:.54};function m5(e,t=2){var n;const r=new Map;for(const o of e.toUpperCase().split(/[^A-Z]+/))for(let s=t;s<=o.length;++s){const i=o.substring(s-t,s),a=(n=r.get(i))!=null?n:0;r.set(i,a+1)}return r}function _5(e,t=2){return new Map([...m5(e,t)].sort((r,n)=>n[1]-r[1]))}const au=e=>(cr("data-v-2a73057a"),e=e(),ur(),e),y5={id:"bigram-frequencies"},$5={class:"table-container"},b5=au(()=>A("thead",null,[A("tr",null,[A("th",{colspan:"3"},"Encoded Bigrams Found")]),A("tr",null,[A("th",null,"Bigram"),A("th",null,"Count"),A("th",null,"%")])],-1)),E5={class:"table-container"},I5={id:"Expected"},A5=au(()=>A("thead",null,[A("tr",null,[A("th",{colspan:"2"},"Common English Bigrams")]),A("tr",null,[A("th",null,"Bigram"),A("th",null,"Frequency")])],-1)),w5=Be({__name:"BigramStatDisplay",setup(e){const t=jt(),r=ve(()=>_5(t.message,2)),n=ve(()=>{let o=0;for(const s of r.value.values())o+=s;return o});return(o,s)=>(j(),V("div",y5,[A("div",$5,[A("table",null,[b5,A("tbody",null,[(j(!0),V(re,null,Le(me(r),([i,a])=>(j(),V("tr",{key:i},[A("td",null,ie(i),1),A("td",null,ie(a),1),A("td",null,ie((a*100/me(n)).toFixed(1))+"%",1)]))),128))])])]),A("div",E5,[A("table",I5,[A5,A("tbody",null,[(j(!0),V(re,null,Le(me(g5),(i,a)=>(j(),V("tr",{key:a},[A("td",null,ie(a),1),A("td",null,ie(i)+"%",1)]))),128))])])])]))}});const N5=nt(w5,[["__scopeId","data-v-2a73057a"]]),zs=e=>(cr("data-v-98c414d6"),e=e(),ur(),e),S5={key:0,class:"message"},O5=zs(()=>A("hr",null,null,-1)),C5=zs(()=>A("hr",null,null,-1)),P5=zs(()=>A("hr",null,null,-1)),T5=Be({__name:"DecodeMsg",setup(e){const t=we(""),r=we(""),n=we(0),o=jt(),s=Ds();o.message||s.push({name:"home"}),Wn(()=>{window.addEventListener("keyup",i),l("click on letter within the message to select the encoded letter, then use the keyboard to determine what the real letter is")}),Kr(()=>{window.removeEventListener("keyup",i)});function i(u){u.key==="Escape"||u.key==="Delete"?o.decryptionKeys.delete(t.value):a(u.key)}function a(u){o.addKey(t.value,u)}function l(u,c=3e3){r.value=u,c>0&&setTimeout(()=>{r.value=""},c)}return(u,c)=>(j(),V(re,null,[ye(Ms,null,{default:Ps(()=>[r.value?(j(),V("div",S5,ie(r.value),1)):sc("",!0)]),_:1}),ye(n5,{"active-letter":t.value,"onUpdate:active-letter":c[0]||(c[0]=f=>t.value=f),"onUpdate:activeWord":c[1]||(c[1]=f=>n.value=f.length)},null,8,["active-letter"]),O5,A("div",null,[A("h4",null,[ct(" Total letters: "),A("output",null,ie(me(o).allLetterStats.totalLetters),1)])]),ye(Z$,{onKeyClick:a,onEnterKeyClick:c[2]||(c[2]=f=>me(s).push({name:"decoded-key-details"})),"active-encoded-letter":t.value},null,8,["active-encoded-letter"]),ye(c5,{"active-letter":t.value,"onUpdate:active-letter":c[3]||(c[3]=f=>t.value=f)},null,8,["active-letter"]),C5,ye(N5),P5,ye(h5,{"word-length":n.value},null,8,["word-length"])],64))}});const R5=nt(T5,[["__scopeId","data-v-98c414d6"]]),lu=e=>(cr("data-v-4a52d52e"),e=e(),ur(),e),F5={id:"letter-details"},L5=lu(()=>A("tr",null,[A("th",{rowspan:"2"},"Encoded"),A("th",{rowspan:"2"},"Decodes to"),A("th",{rowspan:"2"},"Occurences"),A("th",{colspan:"3"},"probabilities")],-1)),H5=lu(()=>A("tr",null,[A("th",null,"Value"),A("th",null,"Rank / 26"),A("th",null,"max (all letters)")],-1)),M5=["onClick"],k5=Be({__name:"DecodedKeysFinalDetails",setup(e){const t=jt(),r=ve(()=>[...t.decryptionKeys.keys()].map(n=>{const o=t.decryptionKeys.get(n),s=t.allLetterStats.letterDetails[n],i=su(s.decodesToProbs),a=l=>l.toFixed(4);return{encoded:n,decoded:o,count:s.count,pValue:a(s.decodesToProbs[o]),rank:i.indexOf(o)+1,maxP:s.decodesToProbs[i[0]].toFixed(3),maxLetter:i[0]}}));return(n,o)=>{const s=Pf("RouterLink");return j(),V(re,null,[A("div",F5,[A("table",null,[A("tbody",null,[L5,H5,(j(!0),V(re,null,Le(me(r),i=>(j(),V("tr",{key:i.encoded},[A("td",null,ie(i.encoded),1),A("td",null,ie(i.decoded),1),A("td",null,ie(i.count),1),A("td",null,ie(i.pValue),1),A("td",null,ie(i.rank),1),A("td",null,ie(i.maxP)+"\xA0("+ie(i.maxLetter)+")",1)]))),128))])])]),ye(s,{to:"/decode",custom:""},{default:Ps(({navigate:i})=>[A("button",{class:"btn",onClick:i,role:"link"},"Back to decoding",8,M5)]),_:1})],64)}}});const D5=nt(k5,[["__scopeId","data-v-4a52d52e"]]),U5=Yd({history:pd("/letter-swap-decoder/"),routes:[{path:"/",name:"home",component:W$},{path:"/decode",name:"decode",component:R5},{path:"/encode",name:"encode",component:q$},{path:"/decoded-key-details",name:"decoded-key-details",component:D5}]});const Qs=K0(nv);Qs.use(j0());Qs.use(U5);Qs.mount("#app");
