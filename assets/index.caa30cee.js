(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerpolicy&&(s.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?s.credentials="include":o.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(o){if(o.ep)return;o.ep=!0;const s=r(o);fetch(o.href,s)}})();function gs(e,t){const r=Object.create(null),n=e.split(",");for(let o=0;o<n.length;o++)r[n[o]]=!0;return t?o=>!!r[o.toLowerCase()]:o=>!!r[o]}function Cn(e){if(B(e)){const t={};for(let r=0;r<e.length;r++){const n=e[r],o=Ee(n)?uu(n):Cn(n);if(o)for(const s in o)t[s]=o[s]}return t}else{if(Ee(e))return e;if(ae(e))return e}}const au=/;(?![^(]*\))/g,lu=/:([^]+)/,cu=/\/\*.*?\*\//gs;function uu(e){const t={};return e.replace(cu,"").split(au).forEach(r=>{if(r){const n=r.split(lu);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}function Et(e){let t="";if(Ee(e))t=e;else if(B(e))for(let r=0;r<e.length;r++){const n=Et(e[r]);n&&(t+=n+" ")}else if(ae(e))for(const r in e)e[r]&&(t+=r+" ");return t.trim()}const fu="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",du=gs(fu);function ul(e){return!!e||e===""}function vu(e,t){if(e.length!==t.length)return!1;let r=!0;for(let n=0;r&&n<e.length;n++)r=Pn(e[n],t[n]);return r}function Pn(e,t){if(e===t)return!0;let r=Js(e),n=Js(t);if(r||n)return r&&n?e.getTime()===t.getTime():!1;if(r=Pr(e),n=Pr(t),r||n)return e===t;if(r=B(e),n=B(t),r||n)return r&&n?vu(e,t):!1;if(r=ae(e),n=ae(t),r||n){if(!r||!n)return!1;const o=Object.keys(e).length,s=Object.keys(t).length;if(o!==s)return!1;for(const i in e){const a=e.hasOwnProperty(i),l=t.hasOwnProperty(i);if(a&&!l||!a&&l||!Pn(e[i],t[i]))return!1}}return String(e)===String(t)}function fl(e,t){return e.findIndex(r=>Pn(r,t))}const he=e=>Ee(e)?e:e==null?"":B(e)||ae(e)&&(e.toString===pl||!j(e.toString))?JSON.stringify(e,dl,2):String(e),dl=(e,t)=>t&&t.__v_isRef?dl(e,t.value):Zt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((r,[n,o])=>(r[`${n} =>`]=o,r),{})}:Rn(t)?{[`Set(${t.size})`]:[...t.values()]}:ae(t)&&!B(t)&&!hl(t)?String(t):t,fe={},Yt=[],je=()=>{},pu=()=>!1,hu=/^on[^a-z]/,Tn=e=>hu.test(e),ms=e=>e.startsWith("onUpdate:"),Ne=Object.assign,_s=(e,t)=>{const r=e.indexOf(t);r>-1&&e.splice(r,1)},gu=Object.prototype.hasOwnProperty,J=(e,t)=>gu.call(e,t),B=Array.isArray,Zt=e=>Ur(e)==="[object Map]",Rn=e=>Ur(e)==="[object Set]",Js=e=>Ur(e)==="[object Date]",j=e=>typeof e=="function",Ee=e=>typeof e=="string",Pr=e=>typeof e=="symbol",ae=e=>e!==null&&typeof e=="object",vl=e=>ae(e)&&j(e.then)&&j(e.catch),pl=Object.prototype.toString,Ur=e=>pl.call(e),mu=e=>Ur(e).slice(8,-1),hl=e=>Ur(e)==="[object Object]",ys=e=>Ee(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,mn=gs(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Fn=e=>{const t=Object.create(null);return r=>t[r]||(t[r]=e(r))},_u=/-(\w)/g,rt=Fn(e=>e.replace(_u,(t,r)=>r?r.toUpperCase():"")),yu=/\B([A-Z])/g,sr=Fn(e=>e.replace(yu,"-$1").toLowerCase()),Ln=Fn(e=>e.charAt(0).toUpperCase()+e.slice(1)),Jn=Fn(e=>e?`on${Ln(e)}`:""),Tr=(e,t)=>!Object.is(e,t),_n=(e,t)=>{for(let r=0;r<e.length;r++)e[r](t)},In=(e,t,r)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:r})},Rr=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let ei;const $u=()=>ei||(ei=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Je;class gl{constructor(t=!1){this.detached=t,this.active=!0,this.effects=[],this.cleanups=[],this.parent=Je,!t&&Je&&(this.index=(Je.scopes||(Je.scopes=[])).push(this)-1)}run(t){if(this.active){const r=Je;try{return Je=this,t()}finally{Je=r}}}on(){Je=this}off(){Je=this.parent}stop(t){if(this.active){let r,n;for(r=0,n=this.effects.length;r<n;r++)this.effects[r].stop();for(r=0,n=this.cleanups.length;r<n;r++)this.cleanups[r]();if(this.scopes)for(r=0,n=this.scopes.length;r<n;r++)this.scopes[r].stop(!0);if(!this.detached&&this.parent&&!t){const o=this.parent.scopes.pop();o&&o!==this&&(this.parent.scopes[this.index]=o,o.index=this.index)}this.parent=void 0,this.active=!1}}}function ml(e){return new gl(e)}function bu(e,t=Je){t&&t.active&&t.effects.push(e)}const $s=e=>{const t=new Set(e);return t.w=0,t.n=0,t},_l=e=>(e.w&Nt)>0,yl=e=>(e.n&Nt)>0,Eu=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=Nt},Iu=e=>{const{deps:t}=e;if(t.length){let r=0;for(let n=0;n<t.length;n++){const o=t[n];_l(o)&&!yl(o)?o.delete(e):t[r++]=o,o.w&=~Nt,o.n&=~Nt}t.length=r}},Lo=new WeakMap;let Ar=0,Nt=1;const Ho=30;let Ke;const Wt=Symbol(""),Mo=Symbol("");class bs{constructor(t,r=null,n){this.fn=t,this.scheduler=r,this.active=!0,this.deps=[],this.parent=void 0,bu(this,n)}run(){if(!this.active)return this.fn();let t=Ke,r=It;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Ke,Ke=this,It=!0,Nt=1<<++Ar,Ar<=Ho?Eu(this):ti(this),this.fn()}finally{Ar<=Ho&&Iu(this),Nt=1<<--Ar,Ke=this.parent,It=r,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Ke===this?this.deferStop=!0:this.active&&(ti(this),this.onStop&&this.onStop(),this.active=!1)}}function ti(e){const{deps:t}=e;if(t.length){for(let r=0;r<t.length;r++)t[r].delete(e);t.length=0}}let It=!0;const $l=[];function ir(){$l.push(It),It=!1}function ar(){const e=$l.pop();It=e===void 0?!0:e}function He(e,t,r){if(It&&Ke){let n=Lo.get(e);n||Lo.set(e,n=new Map);let o=n.get(r);o||n.set(r,o=$s()),bl(o)}}function bl(e,t){let r=!1;Ar<=Ho?yl(e)||(e.n|=Nt,r=!_l(e)):r=!e.has(Ke),r&&(e.add(Ke),Ke.deps.push(e))}function ct(e,t,r,n,o,s){const i=Lo.get(e);if(!i)return;let a=[];if(t==="clear")a=[...i.values()];else if(r==="length"&&B(e)){const l=Rr(n);i.forEach((u,c)=>{(c==="length"||c>=l)&&a.push(u)})}else switch(r!==void 0&&a.push(i.get(r)),t){case"add":B(e)?ys(r)&&a.push(i.get("length")):(a.push(i.get(Wt)),Zt(e)&&a.push(i.get(Mo)));break;case"delete":B(e)||(a.push(i.get(Wt)),Zt(e)&&a.push(i.get(Mo)));break;case"set":Zt(e)&&a.push(i.get(Wt));break}if(a.length===1)a[0]&&ko(a[0]);else{const l=[];for(const u of a)u&&l.push(...u);ko($s(l))}}function ko(e,t){const r=B(e)?e:[...e];for(const n of r)n.computed&&ri(n);for(const n of r)n.computed||ri(n)}function ri(e,t){(e!==Ke||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const Au=gs("__proto__,__v_isRef,__isVue"),El=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Pr)),wu=Es(),Nu=Es(!1,!0),Su=Es(!0),ni=Ou();function Ou(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...r){const n=ee(this);for(let s=0,i=this.length;s<i;s++)He(n,"get",s+"");const o=n[t](...r);return o===-1||o===!1?n[t](...r.map(ee)):o}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...r){ir();const n=ee(this)[t].apply(this,r);return ar(),n}}),e}function Es(e=!1,t=!1){return function(n,o,s){if(o==="__v_isReactive")return!e;if(o==="__v_isReadonly")return e;if(o==="__v_isShallow")return t;if(o==="__v_raw"&&s===(e?t?Gu:Sl:t?Nl:wl).get(n))return n;const i=B(n);if(!e&&i&&J(ni,o))return Reflect.get(ni,o,s);const a=Reflect.get(n,o,s);return(Pr(o)?El.has(o):Au(o))||(e||He(n,"get",o),t)?a:_e(a)?i&&ys(o)?a:a.value:ae(a)?e?Ol(a):xt(a):a}}const Cu=Il(),Pu=Il(!0);function Il(e=!1){return function(r,n,o,s){let i=r[n];if(er(i)&&_e(i)&&!_e(o))return!1;if(!e&&(!An(o)&&!er(o)&&(i=ee(i),o=ee(o)),!B(r)&&_e(i)&&!_e(o)))return i.value=o,!0;const a=B(r)&&ys(n)?Number(n)<r.length:J(r,n),l=Reflect.set(r,n,o,s);return r===ee(s)&&(a?Tr(o,i)&&ct(r,"set",n,o):ct(r,"add",n,o)),l}}function Tu(e,t){const r=J(e,t);e[t];const n=Reflect.deleteProperty(e,t);return n&&r&&ct(e,"delete",t,void 0),n}function Ru(e,t){const r=Reflect.has(e,t);return(!Pr(t)||!El.has(t))&&He(e,"has",t),r}function Fu(e){return He(e,"iterate",B(e)?"length":Wt),Reflect.ownKeys(e)}const Al={get:wu,set:Cu,deleteProperty:Tu,has:Ru,ownKeys:Fu},Lu={get:Su,set(e,t){return!0},deleteProperty(e,t){return!0}},Hu=Ne({},Al,{get:Nu,set:Pu}),Is=e=>e,Hn=e=>Reflect.getPrototypeOf(e);function Xr(e,t,r=!1,n=!1){e=e.__v_raw;const o=ee(e),s=ee(t);r||(t!==s&&He(o,"get",t),He(o,"get",s));const{has:i}=Hn(o),a=n?Is:r?Ns:Fr;if(i.call(o,t))return a(e.get(t));if(i.call(o,s))return a(e.get(s));e!==o&&e.get(t)}function zr(e,t=!1){const r=this.__v_raw,n=ee(r),o=ee(e);return t||(e!==o&&He(n,"has",e),He(n,"has",o)),e===o?r.has(e):r.has(e)||r.has(o)}function qr(e,t=!1){return e=e.__v_raw,!t&&He(ee(e),"iterate",Wt),Reflect.get(e,"size",e)}function oi(e){e=ee(e);const t=ee(this);return Hn(t).has.call(t,e)||(t.add(e),ct(t,"add",e,e)),this}function si(e,t){t=ee(t);const r=ee(this),{has:n,get:o}=Hn(r);let s=n.call(r,e);s||(e=ee(e),s=n.call(r,e));const i=o.call(r,e);return r.set(e,t),s?Tr(t,i)&&ct(r,"set",e,t):ct(r,"add",e,t),this}function ii(e){const t=ee(this),{has:r,get:n}=Hn(t);let o=r.call(t,e);o||(e=ee(e),o=r.call(t,e)),n&&n.call(t,e);const s=t.delete(e);return o&&ct(t,"delete",e,void 0),s}function ai(){const e=ee(this),t=e.size!==0,r=e.clear();return t&&ct(e,"clear",void 0,void 0),r}function Qr(e,t){return function(n,o){const s=this,i=s.__v_raw,a=ee(i),l=t?Is:e?Ns:Fr;return!e&&He(a,"iterate",Wt),i.forEach((u,c)=>n.call(o,l(u),l(c),s))}}function Yr(e,t,r){return function(...n){const o=this.__v_raw,s=ee(o),i=Zt(s),a=e==="entries"||e===Symbol.iterator&&i,l=e==="keys"&&i,u=o[e](...n),c=r?Is:t?Ns:Fr;return!t&&He(s,"iterate",l?Mo:Wt),{next(){const{value:f,done:v}=u.next();return v?{value:f,done:v}:{value:a?[c(f[0]),c(f[1])]:c(f),done:v}},[Symbol.iterator](){return this}}}}function dt(e){return function(...t){return e==="delete"?!1:this}}function Mu(){const e={get(s){return Xr(this,s)},get size(){return qr(this)},has:zr,add:oi,set:si,delete:ii,clear:ai,forEach:Qr(!1,!1)},t={get(s){return Xr(this,s,!1,!0)},get size(){return qr(this)},has:zr,add:oi,set:si,delete:ii,clear:ai,forEach:Qr(!1,!0)},r={get(s){return Xr(this,s,!0)},get size(){return qr(this,!0)},has(s){return zr.call(this,s,!0)},add:dt("add"),set:dt("set"),delete:dt("delete"),clear:dt("clear"),forEach:Qr(!0,!1)},n={get(s){return Xr(this,s,!0,!0)},get size(){return qr(this,!0)},has(s){return zr.call(this,s,!0)},add:dt("add"),set:dt("set"),delete:dt("delete"),clear:dt("clear"),forEach:Qr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{e[s]=Yr(s,!1,!1),r[s]=Yr(s,!0,!1),t[s]=Yr(s,!1,!0),n[s]=Yr(s,!0,!0)}),[e,r,t,n]}const[ku,Du,Uu,Wu]=Mu();function As(e,t){const r=t?e?Wu:Uu:e?Du:ku;return(n,o,s)=>o==="__v_isReactive"?!e:o==="__v_isReadonly"?e:o==="__v_raw"?n:Reflect.get(J(r,o)&&o in n?r:n,o,s)}const Bu={get:As(!1,!1)},Ku={get:As(!1,!0)},xu={get:As(!0,!1)},wl=new WeakMap,Nl=new WeakMap,Sl=new WeakMap,Gu=new WeakMap;function ju(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Vu(e){return e.__v_skip||!Object.isExtensible(e)?0:ju(mu(e))}function xt(e){return er(e)?e:ws(e,!1,Al,Bu,wl)}function Xu(e){return ws(e,!1,Hu,Ku,Nl)}function Ol(e){return ws(e,!0,Lu,xu,Sl)}function ws(e,t,r,n,o){if(!ae(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const s=o.get(e);if(s)return s;const i=Vu(e);if(i===0)return e;const a=new Proxy(e,i===2?n:r);return o.set(e,a),a}function At(e){return er(e)?At(e.__v_raw):!!(e&&e.__v_isReactive)}function er(e){return!!(e&&e.__v_isReadonly)}function An(e){return!!(e&&e.__v_isShallow)}function Cl(e){return At(e)||er(e)}function ee(e){const t=e&&e.__v_raw;return t?ee(t):e}function tr(e){return In(e,"__v_skip",!0),e}const Fr=e=>ae(e)?xt(e):e,Ns=e=>ae(e)?Ol(e):e;function Pl(e){It&&Ke&&(e=ee(e),bl(e.dep||(e.dep=$s())))}function Tl(e,t){e=ee(e),e.dep&&ko(e.dep)}function _e(e){return!!(e&&e.__v_isRef===!0)}function we(e){return Rl(e,!1)}function zu(e){return Rl(e,!0)}function Rl(e,t){return _e(e)?e:new qu(e,t)}class qu{constructor(t,r){this.__v_isShallow=r,this.dep=void 0,this.__v_isRef=!0,this._rawValue=r?t:ee(t),this._value=r?t:Fr(t)}get value(){return Pl(this),this._value}set value(t){const r=this.__v_isShallow||An(t)||er(t);t=r?t:ee(t),Tr(t,this._rawValue)&&(this._rawValue=t,this._value=r?t:Fr(t),Tl(this))}}function be(e){return _e(e)?e.value:e}const Qu={get:(e,t,r)=>be(Reflect.get(e,t,r)),set:(e,t,r,n)=>{const o=e[t];return _e(o)&&!_e(r)?(o.value=r,!0):Reflect.set(e,t,r,n)}};function Fl(e){return At(e)?e:new Proxy(e,Qu)}function Yu(e){const t=B(e)?new Array(e.length):{};for(const r in e)t[r]=Ju(e,r);return t}class Zu{constructor(t,r,n){this._object=t,this._key=r,this._defaultValue=n,this.__v_isRef=!0}get value(){const t=this._object[this._key];return t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}}function Ju(e,t,r){const n=e[t];return _e(n)?n:new Zu(e,t,r)}var Ll;class ef{constructor(t,r,n,o){this._setter=r,this.dep=void 0,this.__v_isRef=!0,this[Ll]=!1,this._dirty=!0,this.effect=new bs(t,()=>{this._dirty||(this._dirty=!0,Tl(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!o,this.__v_isReadonly=n}get value(){const t=ee(this);return Pl(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}Ll="__v_isReadonly";function tf(e,t,r=!1){let n,o;const s=j(e);return s?(n=e,o=je):(n=e.get,o=e.set),new ef(n,o,s||!o,r)}function wt(e,t,r,n){let o;try{o=n?e(...n):e()}catch(s){Mn(s,t,r)}return o}function De(e,t,r,n){if(j(e)){const s=wt(e,t,r,n);return s&&vl(s)&&s.catch(i=>{Mn(i,t,r)}),s}const o=[];for(let s=0;s<e.length;s++)o.push(De(e[s],t,r,n));return o}function Mn(e,t,r,n=!0){const o=t?t.vnode:null;if(t){let s=t.parent;const i=t.proxy,a=r;for(;s;){const u=s.ec;if(u){for(let c=0;c<u.length;c++)if(u[c](e,i,a)===!1)return}s=s.parent}const l=t.appContext.config.errorHandler;if(l){wt(l,null,10,[e,i,a]);return}}rf(e,r,o,n)}function rf(e,t,r,n=!0){console.error(e)}let Lr=!1,Do=!1;const Se=[];let tt=0;const Jt=[];let at=null,Lt=0;const Hl=Promise.resolve();let Ss=null;function Os(e){const t=Ss||Hl;return e?t.then(this?e.bind(this):e):t}function nf(e){let t=tt+1,r=Se.length;for(;t<r;){const n=t+r>>>1;Hr(Se[n])<e?t=n+1:r=n}return t}function Cs(e){(!Se.length||!Se.includes(e,Lr&&e.allowRecurse?tt+1:tt))&&(e.id==null?Se.push(e):Se.splice(nf(e.id),0,e),Ml())}function Ml(){!Lr&&!Do&&(Do=!0,Ss=Hl.then(Dl))}function of(e){const t=Se.indexOf(e);t>tt&&Se.splice(t,1)}function sf(e){B(e)?Jt.push(...e):(!at||!at.includes(e,e.allowRecurse?Lt+1:Lt))&&Jt.push(e),Ml()}function li(e,t=Lr?tt+1:0){for(;t<Se.length;t++){const r=Se[t];r&&r.pre&&(Se.splice(t,1),t--,r())}}function kl(e){if(Jt.length){const t=[...new Set(Jt)];if(Jt.length=0,at){at.push(...t);return}for(at=t,at.sort((r,n)=>Hr(r)-Hr(n)),Lt=0;Lt<at.length;Lt++)at[Lt]();at=null,Lt=0}}const Hr=e=>e.id==null?1/0:e.id,af=(e,t)=>{const r=Hr(e)-Hr(t);if(r===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return r};function Dl(e){Do=!1,Lr=!0,Se.sort(af);const t=je;try{for(tt=0;tt<Se.length;tt++){const r=Se[tt];r&&r.active!==!1&&wt(r,null,14)}}finally{tt=0,Se.length=0,kl(),Lr=!1,Ss=null,(Se.length||Jt.length)&&Dl()}}function lf(e,t,...r){if(e.isUnmounted)return;const n=e.vnode.props||fe;let o=r;const s=t.startsWith("update:"),i=s&&t.slice(7);if(i&&i in n){const c=`${i==="modelValue"?"model":i}Modifiers`,{number:f,trim:v}=n[c]||fe;v&&(o=r.map(p=>Ee(p)?p.trim():p)),f&&(o=r.map(Rr))}let a,l=n[a=Jn(t)]||n[a=Jn(rt(t))];!l&&s&&(l=n[a=Jn(sr(t))]),l&&De(l,e,6,o);const u=n[a+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,De(u,e,6,o)}}function Ul(e,t,r=!1){const n=t.emitsCache,o=n.get(e);if(o!==void 0)return o;const s=e.emits;let i={},a=!1;if(!j(e)){const l=u=>{const c=Ul(u,t,!0);c&&(a=!0,Ne(i,c))};!r&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!s&&!a?(ae(e)&&n.set(e,null),null):(B(s)?s.forEach(l=>i[l]=null):Ne(i,s),ae(e)&&n.set(e,i),i)}function kn(e,t){return!e||!Tn(t)?!1:(t=t.slice(2).replace(/Once$/,""),J(e,t[0].toLowerCase()+t.slice(1))||J(e,sr(t))||J(e,t))}let Le=null,Dn=null;function wn(e){const t=Le;return Le=e,Dn=e&&e.type.__scopeId||null,t}function Wr(e){Dn=e}function Br(){Dn=null}function Ps(e,t=Le,r){if(!t||e._n)return e;const n=(...o)=>{n._d&&_i(-1);const s=wn(t);let i;try{i=e(...o)}finally{wn(s),n._d&&_i(1)}return i};return n._n=!0,n._c=!0,n._d=!0,n}function eo(e){const{type:t,vnode:r,proxy:n,withProxy:o,props:s,propsOptions:[i],slots:a,attrs:l,emit:u,render:c,renderCache:f,data:v,setupState:p,ctx:m,inheritAttrs:$}=e;let A,y;const H=wn(e);try{if(r.shapeFlag&4){const W=o||n;A=et(c.call(W,W,f,s,p,v,m)),y=l}else{const W=t;A=et(W.length>1?W(s,{attrs:l,slots:a,emit:u}):W(s,null)),y=t.props?l:cf(l)}}catch(W){Nr.length=0,Mn(W,e,1),A=$e(Xe)}let S=A;if(y&&$!==!1){const W=Object.keys(y),{shapeFlag:K}=S;W.length&&K&7&&(i&&W.some(ms)&&(y=uf(y,i)),S=St(S,y))}return r.dirs&&(S=St(S),S.dirs=S.dirs?S.dirs.concat(r.dirs):r.dirs),r.transition&&(S.transition=r.transition),A=S,wn(H),A}const cf=e=>{let t;for(const r in e)(r==="class"||r==="style"||Tn(r))&&((t||(t={}))[r]=e[r]);return t},uf=(e,t)=>{const r={};for(const n in e)(!ms(n)||!(n.slice(9)in t))&&(r[n]=e[n]);return r};function ff(e,t,r){const{props:n,children:o,component:s}=e,{props:i,children:a,patchFlag:l}=t,u=s.emitsOptions;if(t.dirs||t.transition)return!0;if(r&&l>=0){if(l&1024)return!0;if(l&16)return n?ci(n,i,u):!!i;if(l&8){const c=t.dynamicProps;for(let f=0;f<c.length;f++){const v=c[f];if(i[v]!==n[v]&&!kn(u,v))return!0}}}else return(o||a)&&(!a||!a.$stable)?!0:n===i?!1:n?i?ci(n,i,u):!0:!!i;return!1}function ci(e,t,r){const n=Object.keys(t);if(n.length!==Object.keys(e).length)return!0;for(let o=0;o<n.length;o++){const s=n[o];if(t[s]!==e[s]&&!kn(r,s))return!0}return!1}function df({vnode:e,parent:t},r){for(;t&&t.subTree===e;)(e=t.vnode).el=r,t=t.parent}const vf=e=>e.__isSuspense;function pf(e,t){t&&t.pendingBranch?B(e)?t.effects.push(...e):t.effects.push(e):sf(e)}function yn(e,t){if(Ie){let r=Ie.provides;const n=Ie.parent&&Ie.parent.provides;n===r&&(r=Ie.provides=Object.create(n)),r[e]=t}}function Ve(e,t,r=!1){const n=Ie||Le;if(n){const o=n.parent==null?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides;if(o&&e in o)return o[e];if(arguments.length>1)return r&&j(t)?t.call(n.proxy):t}}const Zr={};function Bt(e,t,r){return Wl(e,t,r)}function Wl(e,t,{immediate:r,deep:n,flush:o,onTrack:s,onTrigger:i}=fe){const a=Ie;let l,u=!1,c=!1;if(_e(e)?(l=()=>e.value,u=An(e)):At(e)?(l=()=>e,n=!0):B(e)?(c=!0,u=e.some(S=>At(S)||An(S)),l=()=>e.map(S=>{if(_e(S))return S.value;if(At(S))return Dt(S);if(j(S))return wt(S,a,2)})):j(e)?t?l=()=>wt(e,a,2):l=()=>{if(!(a&&a.isUnmounted))return f&&f(),De(e,a,3,[v])}:l=je,t&&n){const S=l;l=()=>Dt(S())}let f,v=S=>{f=y.onStop=()=>{wt(S,a,4)}},p;if(kr)if(v=je,t?r&&De(t,a,3,[l(),c?[]:void 0,v]):l(),o==="sync"){const S=c0();p=S.__watcherHandles||(S.__watcherHandles=[])}else return je;let m=c?new Array(e.length).fill(Zr):Zr;const $=()=>{if(!!y.active)if(t){const S=y.run();(n||u||(c?S.some((W,K)=>Tr(W,m[K])):Tr(S,m)))&&(f&&f(),De(t,a,3,[S,m===Zr?void 0:c&&m[0]===Zr?[]:m,v]),m=S)}else y.run()};$.allowRecurse=!!t;let A;o==="sync"?A=$:o==="post"?A=()=>Re($,a&&a.suspense):($.pre=!0,a&&($.id=a.uid),A=()=>Cs($));const y=new bs(l,A);t?r?$():m=y.run():o==="post"?Re(y.run.bind(y),a&&a.suspense):y.run();const H=()=>{y.stop(),a&&a.scope&&_s(a.scope.effects,y)};return p&&p.push(H),H}function hf(e,t,r){const n=this.proxy,o=Ee(e)?e.includes(".")?Bl(n,e):()=>n[e]:e.bind(n,n);let s;j(t)?s=t:(s=t.handler,r=t);const i=Ie;rr(this);const a=Wl(o,s.bind(n),r);return i?rr(i):Kt(),a}function Bl(e,t){const r=t.split(".");return()=>{let n=e;for(let o=0;o<r.length&&n;o++)n=n[r[o]];return n}}function Dt(e,t){if(!ae(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),_e(e))Dt(e.value,t);else if(B(e))for(let r=0;r<e.length;r++)Dt(e[r],t);else if(Rn(e)||Zt(e))e.forEach(r=>{Dt(r,t)});else if(hl(e))for(const r in e)Dt(e[r],t);return e}function gf(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Bn(()=>{e.isMounted=!0}),Vl(()=>{e.isUnmounting=!0}),e}const ke=[Function,Array],mf={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:ke,onEnter:ke,onAfterEnter:ke,onEnterCancelled:ke,onBeforeLeave:ke,onLeave:ke,onAfterLeave:ke,onLeaveCancelled:ke,onBeforeAppear:ke,onAppear:ke,onAfterAppear:ke,onAppearCancelled:ke},setup(e,{slots:t}){const r=Ls(),n=gf();let o;return()=>{const s=t.default&&Gl(t.default(),!0);if(!s||!s.length)return;let i=s[0];if(s.length>1){for(const $ of s)if($.type!==Xe){i=$;break}}const a=ee(e),{mode:l}=a;if(n.isLeaving)return to(i);const u=ui(i);if(!u)return to(i);const c=Uo(u,a,n,r);Wo(u,c);const f=r.subTree,v=f&&ui(f);let p=!1;const{getTransitionKey:m}=u.type;if(m){const $=m();o===void 0?o=$:$!==o&&(o=$,p=!0)}if(v&&v.type!==Xe&&(!Ht(u,v)||p)){const $=Uo(v,a,n,r);if(Wo(v,$),l==="out-in")return n.isLeaving=!0,$.afterLeave=()=>{n.isLeaving=!1,r.update.active!==!1&&r.update()},to(i);l==="in-out"&&u.type!==Xe&&($.delayLeave=(A,y,H)=>{const S=xl(n,v);S[String(v.key)]=v,A._leaveCb=()=>{y(),A._leaveCb=void 0,delete c.delayedLeave},c.delayedLeave=H})}return i}}},Kl=mf;function xl(e,t){const{leavingVNodes:r}=e;let n=r.get(t.type);return n||(n=Object.create(null),r.set(t.type,n)),n}function Uo(e,t,r,n){const{appear:o,mode:s,persisted:i=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:u,onEnterCancelled:c,onBeforeLeave:f,onLeave:v,onAfterLeave:p,onLeaveCancelled:m,onBeforeAppear:$,onAppear:A,onAfterAppear:y,onAppearCancelled:H}=t,S=String(e.key),W=xl(r,e),K=(C,Q)=>{C&&De(C,n,9,Q)},te=(C,Q)=>{const Y=Q[1];K(C,Q),B(C)?C.every(ue=>ue.length<=1)&&Y():C.length<=1&&Y()},G={mode:s,persisted:i,beforeEnter(C){let Q=a;if(!r.isMounted)if(o)Q=$||a;else return;C._leaveCb&&C._leaveCb(!0);const Y=W[S];Y&&Ht(e,Y)&&Y.el._leaveCb&&Y.el._leaveCb(),K(Q,[C])},enter(C){let Q=l,Y=u,ue=c;if(!r.isMounted)if(o)Q=A||l,Y=y||u,ue=H||c;else return;let L=!1;const ie=C._enterCb=de=>{L||(L=!0,de?K(ue,[C]):K(Y,[C]),G.delayedLeave&&G.delayedLeave(),C._enterCb=void 0)};Q?te(Q,[C,ie]):ie()},leave(C,Q){const Y=String(e.key);if(C._enterCb&&C._enterCb(!0),r.isUnmounting)return Q();K(f,[C]);let ue=!1;const L=C._leaveCb=ie=>{ue||(ue=!0,Q(),ie?K(m,[C]):K(p,[C]),C._leaveCb=void 0,W[Y]===e&&delete W[Y])};W[Y]=e,v?te(v,[C,L]):L()},clone(C){return Uo(C,t,r,n)}};return G}function to(e){if(Un(e))return e=St(e),e.children=null,e}function ui(e){return Un(e)?e.children?e.children[0]:void 0:e}function Wo(e,t){e.shapeFlag&6&&e.component?Wo(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Gl(e,t=!1,r){let n=[],o=0;for(let s=0;s<e.length;s++){let i=e[s];const a=r==null?i.key:String(r)+String(i.key!=null?i.key:s);i.type===se?(i.patchFlag&128&&o++,n=n.concat(Gl(i.children,t,a))):(t||i.type!==Xe)&&n.push(a!=null?St(i,{key:a}):i)}if(o>1)for(let s=0;s<n.length;s++)n[s].patchFlag=-2;return n}function qe(e){return j(e)?{setup:e,name:e.name}:e}const $n=e=>!!e.type.__asyncLoader,Un=e=>e.type.__isKeepAlive;function _f(e,t){jl(e,"a",t)}function yf(e,t){jl(e,"da",t)}function jl(e,t,r=Ie){const n=e.__wdc||(e.__wdc=()=>{let o=r;for(;o;){if(o.isDeactivated)return;o=o.parent}return e()});if(Wn(t,n,r),r){let o=r.parent;for(;o&&o.parent;)Un(o.parent.vnode)&&$f(n,t,r,o),o=o.parent}}function $f(e,t,r,n){const o=Wn(t,e,n,!0);Kr(()=>{_s(n[t],o)},r)}function Wn(e,t,r=Ie,n=!1){if(r){const o=r[e]||(r[e]=[]),s=t.__weh||(t.__weh=(...i)=>{if(r.isUnmounted)return;ir(),rr(r);const a=De(t,r,e,i);return Kt(),ar(),a});return n?o.unshift(s):o.push(s),s}}const ut=e=>(t,r=Ie)=>(!kr||e==="sp")&&Wn(e,(...n)=>t(...n),r),bf=ut("bm"),Bn=ut("m"),Ef=ut("bu"),If=ut("u"),Vl=ut("bum"),Kr=ut("um"),Af=ut("sp"),wf=ut("rtg"),Nf=ut("rtc");function Sf(e,t=Ie){Wn("ec",e,t)}function bn(e,t){const r=Le;if(r===null)return e;const n=Gn(r)||r.proxy,o=e.dirs||(e.dirs=[]);for(let s=0;s<t.length;s++){let[i,a,l,u=fe]=t[s];i&&(j(i)&&(i={mounted:i,updated:i}),i.deep&&Dt(a),o.push({dir:i,instance:n,value:a,oldValue:void 0,arg:l,modifiers:u}))}return e}function Ct(e,t,r,n){const o=e.dirs,s=t&&t.dirs;for(let i=0;i<o.length;i++){const a=o[i];s&&(a.oldValue=s[i].value);let l=a.dir[n];l&&(ir(),De(l,r,8,[e.el,a,e,t]),ar())}}const Xl="components";function Of(e,t){return Pf(Xl,e,!0,t)||e}const Cf=Symbol();function Pf(e,t,r=!0,n=!1){const o=Le||Ie;if(o){const s=o.type;if(e===Xl){const a=i0(s,!1);if(a&&(a===t||a===rt(t)||a===Ln(rt(t))))return s}const i=fi(o[e]||s[e],t)||fi(o.appContext[e],t);return!i&&n?s:i}}function fi(e,t){return e&&(e[t]||e[rt(t)]||e[Ln(rt(t))])}function xe(e,t,r,n){let o;const s=r&&r[n];if(B(e)||Ee(e)){o=new Array(e.length);for(let i=0,a=e.length;i<a;i++)o[i]=t(e[i],i,void 0,s&&s[i])}else if(typeof e=="number"){o=new Array(e);for(let i=0;i<e;i++)o[i]=t(i+1,i,void 0,s&&s[i])}else if(ae(e))if(e[Symbol.iterator])o=Array.from(e,(i,a)=>t(i,a,void 0,s&&s[a]));else{const i=Object.keys(e);o=new Array(i.length);for(let a=0,l=i.length;a<l;a++){const u=i[a];o[a]=t(e[u],u,a,s&&s[a])}}else o=[];return r&&(r[n]=o),o}const Bo=e=>e?sc(e)?Gn(e)||e.proxy:Bo(e.parent):null,wr=Ne(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Bo(e.parent),$root:e=>Bo(e.root),$emit:e=>e.emit,$options:e=>Ts(e),$forceUpdate:e=>e.f||(e.f=()=>Cs(e.update)),$nextTick:e=>e.n||(e.n=Os.bind(e.proxy)),$watch:e=>hf.bind(e)}),ro=(e,t)=>e!==fe&&!e.__isScriptSetup&&J(e,t),Tf={get({_:e},t){const{ctx:r,setupState:n,data:o,props:s,accessCache:i,type:a,appContext:l}=e;let u;if(t[0]!=="$"){const p=i[t];if(p!==void 0)switch(p){case 1:return n[t];case 2:return o[t];case 4:return r[t];case 3:return s[t]}else{if(ro(n,t))return i[t]=1,n[t];if(o!==fe&&J(o,t))return i[t]=2,o[t];if((u=e.propsOptions[0])&&J(u,t))return i[t]=3,s[t];if(r!==fe&&J(r,t))return i[t]=4,r[t];Ko&&(i[t]=0)}}const c=wr[t];let f,v;if(c)return t==="$attrs"&&He(e,"get",t),c(e);if((f=a.__cssModules)&&(f=f[t]))return f;if(r!==fe&&J(r,t))return i[t]=4,r[t];if(v=l.config.globalProperties,J(v,t))return v[t]},set({_:e},t,r){const{data:n,setupState:o,ctx:s}=e;return ro(o,t)?(o[t]=r,!0):n!==fe&&J(n,t)?(n[t]=r,!0):J(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(s[t]=r,!0)},has({_:{data:e,setupState:t,accessCache:r,ctx:n,appContext:o,propsOptions:s}},i){let a;return!!r[i]||e!==fe&&J(e,i)||ro(t,i)||(a=s[0])&&J(a,i)||J(n,i)||J(wr,i)||J(o.config.globalProperties,i)},defineProperty(e,t,r){return r.get!=null?e._.accessCache[t]=0:J(r,"value")&&this.set(e,t,r.value,null),Reflect.defineProperty(e,t,r)}};let Ko=!0;function Rf(e){const t=Ts(e),r=e.proxy,n=e.ctx;Ko=!1,t.beforeCreate&&di(t.beforeCreate,e,"bc");const{data:o,computed:s,methods:i,watch:a,provide:l,inject:u,created:c,beforeMount:f,mounted:v,beforeUpdate:p,updated:m,activated:$,deactivated:A,beforeDestroy:y,beforeUnmount:H,destroyed:S,unmounted:W,render:K,renderTracked:te,renderTriggered:G,errorCaptured:C,serverPrefetch:Q,expose:Y,inheritAttrs:ue,components:L,directives:ie,filters:de}=t;if(u&&Ff(u,n,null,e.appContext.config.unwrapInjectedRef),i)for(const le in i){const ne=i[le];j(ne)&&(n[le]=ne.bind(r))}if(o){const le=o.call(r,r);ae(le)&&(e.data=xt(le))}if(Ko=!0,s)for(const le in s){const ne=s[le],Ue=j(ne)?ne.bind(r,r):j(ne.get)?ne.get.bind(r,r):je,Ot=!j(ne)&&j(ne.set)?ne.set.bind(r):je,We=ge({get:Ue,set:Ot});Object.defineProperty(n,le,{enumerable:!0,configurable:!0,get:()=>We.value,set:Te=>We.value=Te})}if(a)for(const le in a)zl(a[le],n,r,le);if(l){const le=j(l)?l.call(r):l;Reflect.ownKeys(le).forEach(ne=>{yn(ne,le[ne])})}c&&di(c,e,"c");function ve(le,ne){B(ne)?ne.forEach(Ue=>le(Ue.bind(r))):ne&&le(ne.bind(r))}if(ve(bf,f),ve(Bn,v),ve(Ef,p),ve(If,m),ve(_f,$),ve(yf,A),ve(Sf,C),ve(Nf,te),ve(wf,G),ve(Vl,H),ve(Kr,W),ve(Af,Q),B(Y))if(Y.length){const le=e.exposed||(e.exposed={});Y.forEach(ne=>{Object.defineProperty(le,ne,{get:()=>r[ne],set:Ue=>r[ne]=Ue})})}else e.exposed||(e.exposed={});K&&e.render===je&&(e.render=K),ue!=null&&(e.inheritAttrs=ue),L&&(e.components=L),ie&&(e.directives=ie)}function Ff(e,t,r=je,n=!1){B(e)&&(e=xo(e));for(const o in e){const s=e[o];let i;ae(s)?"default"in s?i=Ve(s.from||o,s.default,!0):i=Ve(s.from||o):i=Ve(s),_e(i)&&n?Object.defineProperty(t,o,{enumerable:!0,configurable:!0,get:()=>i.value,set:a=>i.value=a}):t[o]=i}}function di(e,t,r){De(B(e)?e.map(n=>n.bind(t.proxy)):e.bind(t.proxy),t,r)}function zl(e,t,r,n){const o=n.includes(".")?Bl(r,n):()=>r[n];if(Ee(e)){const s=t[e];j(s)&&Bt(o,s)}else if(j(e))Bt(o,e.bind(r));else if(ae(e))if(B(e))e.forEach(s=>zl(s,t,r,n));else{const s=j(e.handler)?e.handler.bind(r):t[e.handler];j(s)&&Bt(o,s,e)}}function Ts(e){const t=e.type,{mixins:r,extends:n}=t,{mixins:o,optionsCache:s,config:{optionMergeStrategies:i}}=e.appContext,a=s.get(t);let l;return a?l=a:!o.length&&!r&&!n?l=t:(l={},o.length&&o.forEach(u=>Nn(l,u,i,!0)),Nn(l,t,i)),ae(t)&&s.set(t,l),l}function Nn(e,t,r,n=!1){const{mixins:o,extends:s}=t;s&&Nn(e,s,r,!0),o&&o.forEach(i=>Nn(e,i,r,!0));for(const i in t)if(!(n&&i==="expose")){const a=Lf[i]||r&&r[i];e[i]=a?a(e[i],t[i]):t[i]}return e}const Lf={data:vi,props:Ft,emits:Ft,methods:Ft,computed:Ft,beforeCreate:Ce,created:Ce,beforeMount:Ce,mounted:Ce,beforeUpdate:Ce,updated:Ce,beforeDestroy:Ce,beforeUnmount:Ce,destroyed:Ce,unmounted:Ce,activated:Ce,deactivated:Ce,errorCaptured:Ce,serverPrefetch:Ce,components:Ft,directives:Ft,watch:Mf,provide:vi,inject:Hf};function vi(e,t){return t?e?function(){return Ne(j(e)?e.call(this,this):e,j(t)?t.call(this,this):t)}:t:e}function Hf(e,t){return Ft(xo(e),xo(t))}function xo(e){if(B(e)){const t={};for(let r=0;r<e.length;r++)t[e[r]]=e[r];return t}return e}function Ce(e,t){return e?[...new Set([].concat(e,t))]:t}function Ft(e,t){return e?Ne(Ne(Object.create(null),e),t):t}function Mf(e,t){if(!e)return t;if(!t)return e;const r=Ne(Object.create(null),e);for(const n in t)r[n]=Ce(e[n],t[n]);return r}function kf(e,t,r,n=!1){const o={},s={};In(s,xn,1),e.propsDefaults=Object.create(null),ql(e,t,o,s);for(const i in e.propsOptions[0])i in o||(o[i]=void 0);r?e.props=n?o:Xu(o):e.type.props?e.props=o:e.props=s,e.attrs=s}function Df(e,t,r,n){const{props:o,attrs:s,vnode:{patchFlag:i}}=e,a=ee(o),[l]=e.propsOptions;let u=!1;if((n||i>0)&&!(i&16)){if(i&8){const c=e.vnode.dynamicProps;for(let f=0;f<c.length;f++){let v=c[f];if(kn(e.emitsOptions,v))continue;const p=t[v];if(l)if(J(s,v))p!==s[v]&&(s[v]=p,u=!0);else{const m=rt(v);o[m]=Go(l,a,m,p,e,!1)}else p!==s[v]&&(s[v]=p,u=!0)}}}else{ql(e,t,o,s)&&(u=!0);let c;for(const f in a)(!t||!J(t,f)&&((c=sr(f))===f||!J(t,c)))&&(l?r&&(r[f]!==void 0||r[c]!==void 0)&&(o[f]=Go(l,a,f,void 0,e,!0)):delete o[f]);if(s!==a)for(const f in s)(!t||!J(t,f)&&!0)&&(delete s[f],u=!0)}u&&ct(e,"set","$attrs")}function ql(e,t,r,n){const[o,s]=e.propsOptions;let i=!1,a;if(t)for(let l in t){if(mn(l))continue;const u=t[l];let c;o&&J(o,c=rt(l))?!s||!s.includes(c)?r[c]=u:(a||(a={}))[c]=u:kn(e.emitsOptions,l)||(!(l in n)||u!==n[l])&&(n[l]=u,i=!0)}if(s){const l=ee(r),u=a||fe;for(let c=0;c<s.length;c++){const f=s[c];r[f]=Go(o,l,f,u[f],e,!J(u,f))}}return i}function Go(e,t,r,n,o,s){const i=e[r];if(i!=null){const a=J(i,"default");if(a&&n===void 0){const l=i.default;if(i.type!==Function&&j(l)){const{propsDefaults:u}=o;r in u?n=u[r]:(rr(o),n=u[r]=l.call(null,t),Kt())}else n=l}i[0]&&(s&&!a?n=!1:i[1]&&(n===""||n===sr(r))&&(n=!0))}return n}function Ql(e,t,r=!1){const n=t.propsCache,o=n.get(e);if(o)return o;const s=e.props,i={},a=[];let l=!1;if(!j(e)){const c=f=>{l=!0;const[v,p]=Ql(f,t,!0);Ne(i,v),p&&a.push(...p)};!r&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}if(!s&&!l)return ae(e)&&n.set(e,Yt),Yt;if(B(s))for(let c=0;c<s.length;c++){const f=rt(s[c]);pi(f)&&(i[f]=fe)}else if(s)for(const c in s){const f=rt(c);if(pi(f)){const v=s[c],p=i[f]=B(v)||j(v)?{type:v}:Object.assign({},v);if(p){const m=mi(Boolean,p.type),$=mi(String,p.type);p[0]=m>-1,p[1]=$<0||m<$,(m>-1||J(p,"default"))&&a.push(f)}}}const u=[i,a];return ae(e)&&n.set(e,u),u}function pi(e){return e[0]!=="$"}function hi(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function gi(e,t){return hi(e)===hi(t)}function mi(e,t){return B(t)?t.findIndex(r=>gi(r,e)):j(t)&&gi(t,e)?0:-1}const Yl=e=>e[0]==="_"||e==="$stable",Rs=e=>B(e)?e.map(et):[et(e)],Uf=(e,t,r)=>{if(t._n)return t;const n=Ps((...o)=>Rs(t(...o)),r);return n._c=!1,n},Zl=(e,t,r)=>{const n=e._ctx;for(const o in e){if(Yl(o))continue;const s=e[o];if(j(s))t[o]=Uf(o,s,n);else if(s!=null){const i=Rs(s);t[o]=()=>i}}},Jl=(e,t)=>{const r=Rs(t);e.slots.default=()=>r},Wf=(e,t)=>{if(e.vnode.shapeFlag&32){const r=t._;r?(e.slots=ee(t),In(t,"_",r)):Zl(t,e.slots={})}else e.slots={},t&&Jl(e,t);In(e.slots,xn,1)},Bf=(e,t,r)=>{const{vnode:n,slots:o}=e;let s=!0,i=fe;if(n.shapeFlag&32){const a=t._;a?r&&a===1?s=!1:(Ne(o,t),!r&&a===1&&delete o._):(s=!t.$stable,Zl(t,o)),i=t}else t&&(Jl(e,t),i={default:1});if(s)for(const a in o)!Yl(a)&&!(a in i)&&delete o[a]};function ec(){return{app:null,config:{isNativeTag:pu,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Kf=0;function xf(e,t){return function(n,o=null){j(n)||(n=Object.assign({},n)),o!=null&&!ae(o)&&(o=null);const s=ec(),i=new Set;let a=!1;const l=s.app={_uid:Kf++,_component:n,_props:o,_container:null,_context:s,_instance:null,version:u0,get config(){return s.config},set config(u){},use(u,...c){return i.has(u)||(u&&j(u.install)?(i.add(u),u.install(l,...c)):j(u)&&(i.add(u),u(l,...c))),l},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),l},component(u,c){return c?(s.components[u]=c,l):s.components[u]},directive(u,c){return c?(s.directives[u]=c,l):s.directives[u]},mount(u,c,f){if(!a){const v=$e(n,o);return v.appContext=s,c&&t?t(v,u):e(v,u,f),a=!0,l._container=u,u.__vue_app__=l,Gn(v.component)||v.component.proxy}},unmount(){a&&(e(null,l._container),delete l._container.__vue_app__)},provide(u,c){return s.provides[u]=c,l}};return l}}function jo(e,t,r,n,o=!1){if(B(e)){e.forEach((v,p)=>jo(v,t&&(B(t)?t[p]:t),r,n,o));return}if($n(n)&&!o)return;const s=n.shapeFlag&4?Gn(n.component)||n.component.proxy:n.el,i=o?null:s,{i:a,r:l}=e,u=t&&t.r,c=a.refs===fe?a.refs={}:a.refs,f=a.setupState;if(u!=null&&u!==l&&(Ee(u)?(c[u]=null,J(f,u)&&(f[u]=null)):_e(u)&&(u.value=null)),j(l))wt(l,a,12,[i,c]);else{const v=Ee(l),p=_e(l);if(v||p){const m=()=>{if(e.f){const $=v?J(f,l)?f[l]:c[l]:l.value;o?B($)&&_s($,s):B($)?$.includes(s)||$.push(s):v?(c[l]=[s],J(f,l)&&(f[l]=c[l])):(l.value=[s],e.k&&(c[e.k]=l.value))}else v?(c[l]=i,J(f,l)&&(f[l]=i)):p&&(l.value=i,e.k&&(c[e.k]=i))};i?(m.id=-1,Re(m,r)):m()}}}const Re=pf;function Gf(e){return jf(e)}function jf(e,t){const r=$u();r.__VUE__=!0;const{insert:n,remove:o,patchProp:s,createElement:i,createText:a,createComment:l,setText:u,setElementText:c,parentNode:f,nextSibling:v,setScopeId:p=je,insertStaticContent:m}=e,$=(d,h,g,_=null,E=null,N=null,T=!1,w=null,O=!!h.dynamicChildren)=>{if(d===h)return;d&&!Ht(d,h)&&(_=P(d),Te(d,E,N,!0),d=null),h.patchFlag===-2&&(O=!1,h.dynamicChildren=null);const{type:I,ref:D,shapeFlag:M}=h;switch(I){case Kn:A(d,h,g,_);break;case Xe:y(d,h,g,_);break;case no:d==null&&H(h,g,_,T);break;case se:L(d,h,g,_,E,N,T,w,O);break;default:M&1?K(d,h,g,_,E,N,T,w,O):M&6?ie(d,h,g,_,E,N,T,w,O):(M&64||M&128)&&I.process(d,h,g,_,E,N,T,w,O,Z)}D!=null&&E&&jo(D,d&&d.ref,N,h||d,!h)},A=(d,h,g,_)=>{if(d==null)n(h.el=a(h.children),g,_);else{const E=h.el=d.el;h.children!==d.children&&u(E,h.children)}},y=(d,h,g,_)=>{d==null?n(h.el=l(h.children||""),g,_):h.el=d.el},H=(d,h,g,_)=>{[d.el,d.anchor]=m(d.children,h,g,_,d.el,d.anchor)},S=({el:d,anchor:h},g,_)=>{let E;for(;d&&d!==h;)E=v(d),n(d,g,_),d=E;n(h,g,_)},W=({el:d,anchor:h})=>{let g;for(;d&&d!==h;)g=v(d),o(d),d=g;o(h)},K=(d,h,g,_,E,N,T,w,O)=>{T=T||h.type==="svg",d==null?te(h,g,_,E,N,T,w,O):Q(d,h,E,N,T,w,O)},te=(d,h,g,_,E,N,T,w)=>{let O,I;const{type:D,props:M,shapeFlag:U,transition:x,dirs:q}=d;if(O=d.el=i(d.type,N,M&&M.is,M),U&8?c(O,d.children):U&16&&C(d.children,O,null,_,E,N&&D!=="foreignObject",T,w),q&&Ct(d,null,_,"created"),M){for(const oe in M)oe!=="value"&&!mn(oe)&&s(O,oe,null,M[oe],N,d.children,_,E,F);"value"in M&&s(O,"value",null,M.value),(I=M.onVnodeBeforeMount)&&Ze(I,_,d)}G(O,d,d.scopeId,T,_),q&&Ct(d,null,_,"beforeMount");const ce=(!E||E&&!E.pendingBranch)&&x&&!x.persisted;ce&&x.beforeEnter(O),n(O,h,g),((I=M&&M.onVnodeMounted)||ce||q)&&Re(()=>{I&&Ze(I,_,d),ce&&x.enter(O),q&&Ct(d,null,_,"mounted")},E)},G=(d,h,g,_,E)=>{if(g&&p(d,g),_)for(let N=0;N<_.length;N++)p(d,_[N]);if(E){let N=E.subTree;if(h===N){const T=E.vnode;G(d,T,T.scopeId,T.slotScopeIds,E.parent)}}},C=(d,h,g,_,E,N,T,w,O=0)=>{for(let I=O;I<d.length;I++){const D=d[I]=w?yt(d[I]):et(d[I]);$(null,D,h,g,_,E,N,T,w)}},Q=(d,h,g,_,E,N,T)=>{const w=h.el=d.el;let{patchFlag:O,dynamicChildren:I,dirs:D}=h;O|=d.patchFlag&16;const M=d.props||fe,U=h.props||fe;let x;g&&Pt(g,!1),(x=U.onVnodeBeforeUpdate)&&Ze(x,g,h,d),D&&Ct(h,d,g,"beforeUpdate"),g&&Pt(g,!0);const q=E&&h.type!=="foreignObject";if(I?Y(d.dynamicChildren,I,w,g,_,q,N):T||ne(d,h,w,null,g,_,q,N,!1),O>0){if(O&16)ue(w,h,M,U,g,_,E);else if(O&2&&M.class!==U.class&&s(w,"class",null,U.class,E),O&4&&s(w,"style",M.style,U.style,E),O&8){const ce=h.dynamicProps;for(let oe=0;oe<ce.length;oe++){const ye=ce[oe],Be=M[ye],Vt=U[ye];(Vt!==Be||ye==="value")&&s(w,ye,Be,Vt,E,d.children,g,_,F)}}O&1&&d.children!==h.children&&c(w,h.children)}else!T&&I==null&&ue(w,h,M,U,g,_,E);((x=U.onVnodeUpdated)||D)&&Re(()=>{x&&Ze(x,g,h,d),D&&Ct(h,d,g,"updated")},_)},Y=(d,h,g,_,E,N,T)=>{for(let w=0;w<h.length;w++){const O=d[w],I=h[w],D=O.el&&(O.type===se||!Ht(O,I)||O.shapeFlag&70)?f(O.el):g;$(O,I,D,null,_,E,N,T,!0)}},ue=(d,h,g,_,E,N,T)=>{if(g!==_){if(g!==fe)for(const w in g)!mn(w)&&!(w in _)&&s(d,w,g[w],null,T,h.children,E,N,F);for(const w in _){if(mn(w))continue;const O=_[w],I=g[w];O!==I&&w!=="value"&&s(d,w,I,O,T,h.children,E,N,F)}"value"in _&&s(d,"value",g.value,_.value)}},L=(d,h,g,_,E,N,T,w,O)=>{const I=h.el=d?d.el:a(""),D=h.anchor=d?d.anchor:a("");let{patchFlag:M,dynamicChildren:U,slotScopeIds:x}=h;x&&(w=w?w.concat(x):x),d==null?(n(I,g,_),n(D,g,_),C(h.children,g,D,E,N,T,w,O)):M>0&&M&64&&U&&d.dynamicChildren?(Y(d.dynamicChildren,U,g,E,N,T,w),(h.key!=null||E&&h===E.subTree)&&tc(d,h,!0)):ne(d,h,g,D,E,N,T,w,O)},ie=(d,h,g,_,E,N,T,w,O)=>{h.slotScopeIds=w,d==null?h.shapeFlag&512?E.ctx.activate(h,g,_,T,O):de(h,g,_,E,N,T,O):me(d,h,O)},de=(d,h,g,_,E,N,T)=>{const w=d.component=t0(d,_,E);if(Un(d)&&(w.ctx.renderer=Z),r0(w),w.asyncDep){if(E&&E.registerDep(w,ve),!d.el){const O=w.subTree=$e(Xe);y(null,O,h,g)}return}ve(w,d,h,g,E,N,T)},me=(d,h,g)=>{const _=h.component=d.component;if(ff(d,h,g))if(_.asyncDep&&!_.asyncResolved){le(_,h,g);return}else _.next=h,of(_.update),_.update();else h.el=d.el,_.vnode=h},ve=(d,h,g,_,E,N,T)=>{const w=()=>{if(d.isMounted){let{next:D,bu:M,u:U,parent:x,vnode:q}=d,ce=D,oe;Pt(d,!1),D?(D.el=q.el,le(d,D,T)):D=q,M&&_n(M),(oe=D.props&&D.props.onVnodeBeforeUpdate)&&Ze(oe,x,D,q),Pt(d,!0);const ye=eo(d),Be=d.subTree;d.subTree=ye,$(Be,ye,f(Be.el),P(Be),d,E,N),D.el=ye.el,ce===null&&df(d,ye.el),U&&Re(U,E),(oe=D.props&&D.props.onVnodeUpdated)&&Re(()=>Ze(oe,x,D,q),E)}else{let D;const{el:M,props:U}=h,{bm:x,m:q,parent:ce}=d,oe=$n(h);if(Pt(d,!1),x&&_n(x),!oe&&(D=U&&U.onVnodeBeforeMount)&&Ze(D,ce,h),Pt(d,!0),M&&V){const ye=()=>{d.subTree=eo(d),V(M,d.subTree,d,E,null)};oe?h.type.__asyncLoader().then(()=>!d.isUnmounted&&ye()):ye()}else{const ye=d.subTree=eo(d);$(null,ye,g,_,d,E,N),h.el=ye.el}if(q&&Re(q,E),!oe&&(D=U&&U.onVnodeMounted)){const ye=h;Re(()=>Ze(D,ce,ye),E)}(h.shapeFlag&256||ce&&$n(ce.vnode)&&ce.vnode.shapeFlag&256)&&d.a&&Re(d.a,E),d.isMounted=!0,h=g=_=null}},O=d.effect=new bs(w,()=>Cs(I),d.scope),I=d.update=()=>O.run();I.id=d.uid,Pt(d,!0),I()},le=(d,h,g)=>{h.component=d;const _=d.vnode.props;d.vnode=h,d.next=null,Df(d,h.props,_,g),Bf(d,h.children,g),ir(),li(),ar()},ne=(d,h,g,_,E,N,T,w,O=!1)=>{const I=d&&d.children,D=d?d.shapeFlag:0,M=h.children,{patchFlag:U,shapeFlag:x}=h;if(U>0){if(U&128){Ot(I,M,g,_,E,N,T,w,O);return}else if(U&256){Ue(I,M,g,_,E,N,T,w,O);return}}x&8?(D&16&&F(I,E,N),M!==I&&c(g,M)):D&16?x&16?Ot(I,M,g,_,E,N,T,w,O):F(I,E,N,!0):(D&8&&c(g,""),x&16&&C(M,g,_,E,N,T,w,O))},Ue=(d,h,g,_,E,N,T,w,O)=>{d=d||Yt,h=h||Yt;const I=d.length,D=h.length,M=Math.min(I,D);let U;for(U=0;U<M;U++){const x=h[U]=O?yt(h[U]):et(h[U]);$(d[U],x,g,null,E,N,T,w,O)}I>D?F(d,E,N,!0,!1,M):C(h,g,_,E,N,T,w,O,M)},Ot=(d,h,g,_,E,N,T,w,O)=>{let I=0;const D=h.length;let M=d.length-1,U=D-1;for(;I<=M&&I<=U;){const x=d[I],q=h[I]=O?yt(h[I]):et(h[I]);if(Ht(x,q))$(x,q,g,null,E,N,T,w,O);else break;I++}for(;I<=M&&I<=U;){const x=d[M],q=h[U]=O?yt(h[U]):et(h[U]);if(Ht(x,q))$(x,q,g,null,E,N,T,w,O);else break;M--,U--}if(I>M){if(I<=U){const x=U+1,q=x<D?h[x].el:_;for(;I<=U;)$(null,h[I]=O?yt(h[I]):et(h[I]),g,q,E,N,T,w,O),I++}}else if(I>U)for(;I<=M;)Te(d[I],E,N,!0),I++;else{const x=I,q=I,ce=new Map;for(I=q;I<=U;I++){const Fe=h[I]=O?yt(h[I]):et(h[I]);Fe.key!=null&&ce.set(Fe.key,I)}let oe,ye=0;const Be=U-q+1;let Vt=!1,Qs=0;const pr=new Array(Be);for(I=0;I<Be;I++)pr[I]=0;for(I=x;I<=M;I++){const Fe=d[I];if(ye>=Be){Te(Fe,E,N,!0);continue}let Ye;if(Fe.key!=null)Ye=ce.get(Fe.key);else for(oe=q;oe<=U;oe++)if(pr[oe-q]===0&&Ht(Fe,h[oe])){Ye=oe;break}Ye===void 0?Te(Fe,E,N,!0):(pr[Ye-q]=I+1,Ye>=Qs?Qs=Ye:Vt=!0,$(Fe,h[Ye],g,null,E,N,T,w,O),ye++)}const Ys=Vt?Vf(pr):Yt;for(oe=Ys.length-1,I=Be-1;I>=0;I--){const Fe=q+I,Ye=h[Fe],Zs=Fe+1<D?h[Fe+1].el:_;pr[I]===0?$(null,Ye,g,Zs,E,N,T,w,O):Vt&&(oe<0||I!==Ys[oe]?We(Ye,g,Zs,2):oe--)}}},We=(d,h,g,_,E=null)=>{const{el:N,type:T,transition:w,children:O,shapeFlag:I}=d;if(I&6){We(d.component.subTree,h,g,_);return}if(I&128){d.suspense.move(h,g,_);return}if(I&64){T.move(d,h,g,Z);return}if(T===se){n(N,h,g);for(let M=0;M<O.length;M++)We(O[M],h,g,_);n(d.anchor,h,g);return}if(T===no){S(d,h,g);return}if(_!==2&&I&1&&w)if(_===0)w.beforeEnter(N),n(N,h,g),Re(()=>w.enter(N),E);else{const{leave:M,delayLeave:U,afterLeave:x}=w,q=()=>n(N,h,g),ce=()=>{M(N,()=>{q(),x&&x()})};U?U(N,q,ce):ce()}else n(N,h,g)},Te=(d,h,g,_=!1,E=!1)=>{const{type:N,props:T,ref:w,children:O,dynamicChildren:I,shapeFlag:D,patchFlag:M,dirs:U}=d;if(w!=null&&jo(w,null,g,d,!0),D&256){h.ctx.deactivate(d);return}const x=D&1&&U,q=!$n(d);let ce;if(q&&(ce=T&&T.onVnodeBeforeUnmount)&&Ze(ce,h,d),D&6)b(d.component,g,_);else{if(D&128){d.suspense.unmount(g,_);return}x&&Ct(d,null,h,"beforeUnmount"),D&64?d.type.remove(d,h,g,E,Z,_):I&&(N!==se||M>0&&M&64)?F(I,h,g,!1,!0):(N===se&&M&384||!E&&D&16)&&F(O,h,g),_&&jt(d)}(q&&(ce=T&&T.onVnodeUnmounted)||x)&&Re(()=>{ce&&Ze(ce,h,d),x&&Ct(d,null,h,"unmounted")},g)},jt=d=>{const{type:h,el:g,anchor:_,transition:E}=d;if(h===se){Vr(g,_);return}if(h===no){W(d);return}const N=()=>{o(g),E&&!E.persisted&&E.afterLeave&&E.afterLeave()};if(d.shapeFlag&1&&E&&!E.persisted){const{leave:T,delayLeave:w}=E,O=()=>T(g,N);w?w(d.el,N,O):O()}else N()},Vr=(d,h)=>{let g;for(;d!==h;)g=v(d),o(d),d=g;o(h)},b=(d,h,g)=>{const{bum:_,scope:E,update:N,subTree:T,um:w}=d;_&&_n(_),E.stop(),N&&(N.active=!1,Te(T,d,h,g)),w&&Re(w,h),Re(()=>{d.isUnmounted=!0},h),h&&h.pendingBranch&&!h.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===h.pendingId&&(h.deps--,h.deps===0&&h.resolve())},F=(d,h,g,_=!1,E=!1,N=0)=>{for(let T=N;T<d.length;T++)Te(d[T],h,g,_,E)},P=d=>d.shapeFlag&6?P(d.component.subTree):d.shapeFlag&128?d.suspense.next():v(d.anchor||d.el),k=(d,h,g)=>{d==null?h._vnode&&Te(h._vnode,null,null,!0):$(h._vnode||null,d,h,null,null,null,g),li(),kl(),h._vnode=d},Z={p:$,um:Te,m:We,r:jt,mt:de,mc:C,pc:ne,pbc:Y,n:P,o:e};let pe,V;return t&&([pe,V]=t(Z)),{render:k,hydrate:pe,createApp:xf(k,pe)}}function Pt({effect:e,update:t},r){e.allowRecurse=t.allowRecurse=r}function tc(e,t,r=!1){const n=e.children,o=t.children;if(B(n)&&B(o))for(let s=0;s<n.length;s++){const i=n[s];let a=o[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=o[s]=yt(o[s]),a.el=i.el),r||tc(i,a)),a.type===Kn&&(a.el=i.el)}}function Vf(e){const t=e.slice(),r=[0];let n,o,s,i,a;const l=e.length;for(n=0;n<l;n++){const u=e[n];if(u!==0){if(o=r[r.length-1],e[o]<u){t[n]=o,r.push(n);continue}for(s=0,i=r.length-1;s<i;)a=s+i>>1,e[r[a]]<u?s=a+1:i=a;u<e[r[s]]&&(s>0&&(t[n]=r[s-1]),r[s]=n)}}for(s=r.length,i=r[s-1];s-- >0;)r[s]=i,i=t[i];return r}const Xf=e=>e.__isTeleport,se=Symbol(void 0),Kn=Symbol(void 0),Xe=Symbol(void 0),no=Symbol(void 0),Nr=[];let Ge=null;function X(e=!1){Nr.push(Ge=e?null:[])}function zf(){Nr.pop(),Ge=Nr[Nr.length-1]||null}let Mr=1;function _i(e){Mr+=e}function rc(e){return e.dynamicChildren=Mr>0?Ge||Yt:null,zf(),Mr>0&&Ge&&Ge.push(e),e}function z(e,t,r,n,o,s){return rc(R(e,t,r,n,o,s,!0))}function qf(e,t,r,n,o){return rc($e(e,t,r,n,o,!0))}function Vo(e){return e?e.__v_isVNode===!0:!1}function Ht(e,t){return e.type===t.type&&e.key===t.key}const xn="__vInternal",nc=({key:e})=>e!=null?e:null,En=({ref:e,ref_key:t,ref_for:r})=>e!=null?Ee(e)||_e(e)||j(e)?{i:Le,r:e,k:t,f:!!r}:e:null;function R(e,t=null,r=null,n=0,o=null,s=e===se?0:1,i=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&nc(t),ref:t&&En(t),scopeId:Dn,slotScopeIds:null,children:r,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:n,dynamicProps:o,dynamicChildren:null,appContext:null,ctx:Le};return a?(Fs(l,r),s&128&&e.normalize(l)):r&&(l.shapeFlag|=Ee(r)?8:16),Mr>0&&!i&&Ge&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Ge.push(l),l}const $e=Qf;function Qf(e,t=null,r=null,n=0,o=null,s=!1){if((!e||e===Cf)&&(e=Xe),Vo(e)){const a=St(e,t,!0);return r&&Fs(a,r),Mr>0&&!s&&Ge&&(a.shapeFlag&6?Ge[Ge.indexOf(e)]=a:Ge.push(a)),a.patchFlag|=-2,a}if(a0(e)&&(e=e.__vccOpts),t){t=Yf(t);let{class:a,style:l}=t;a&&!Ee(a)&&(t.class=Et(a)),ae(l)&&(Cl(l)&&!B(l)&&(l=Ne({},l)),t.style=Cn(l))}const i=Ee(e)?1:vf(e)?128:Xf(e)?64:ae(e)?4:j(e)?2:0;return R(e,t,r,n,o,i,s,!0)}function Yf(e){return e?Cl(e)||xn in e?Ne({},e):e:null}function St(e,t,r=!1){const{props:n,ref:o,patchFlag:s,children:i}=e,a=t?Zf(n||{},t):n;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:a,key:a&&nc(a),ref:t&&t.ref?r&&o?B(o)?o.concat(En(t)):[o,En(t)]:En(t):o,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:i,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==se?s===-1?16:s|16:s,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&St(e.ssContent),ssFallback:e.ssFallback&&St(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx}}function lt(e=" ",t=0){return $e(Kn,null,e,t)}function oc(e="",t=!1){return t?(X(),qf(Xe,null,e)):$e(Xe,null,e)}function et(e){return e==null||typeof e=="boolean"?$e(Xe):B(e)?$e(se,null,e.slice()):typeof e=="object"?yt(e):$e(Kn,null,String(e))}function yt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:St(e)}function Fs(e,t){let r=0;const{shapeFlag:n}=e;if(t==null)t=null;else if(B(t))r=16;else if(typeof t=="object")if(n&65){const o=t.default;o&&(o._c&&(o._d=!1),Fs(e,o()),o._c&&(o._d=!0));return}else{r=32;const o=t._;!o&&!(xn in t)?t._ctx=Le:o===3&&Le&&(Le.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else j(t)?(t={default:t,_ctx:Le},r=32):(t=String(t),n&64?(r=16,t=[lt(t)]):r=8);e.children=t,e.shapeFlag|=r}function Zf(...e){const t={};for(let r=0;r<e.length;r++){const n=e[r];for(const o in n)if(o==="class")t.class!==n.class&&(t.class=Et([t.class,n.class]));else if(o==="style")t.style=Cn([t.style,n.style]);else if(Tn(o)){const s=t[o],i=n[o];i&&s!==i&&!(B(s)&&s.includes(i))&&(t[o]=s?[].concat(s,i):i)}else o!==""&&(t[o]=n[o])}return t}function Ze(e,t,r,n=null){De(e,t,7,[r,n])}const Jf=ec();let e0=0;function t0(e,t,r){const n=e.type,o=(t?t.appContext:e.appContext)||Jf,s={uid:e0++,vnode:e,type:n,parent:t,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,scope:new gl(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(o.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ql(n,o),emitsOptions:Ul(n,o),emit:null,emitted:null,propsDefaults:fe,inheritAttrs:n.inheritAttrs,ctx:fe,data:fe,props:fe,attrs:fe,slots:fe,refs:fe,setupState:fe,setupContext:null,suspense:r,suspenseId:r?r.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=t?t.root:s,s.emit=lf.bind(null,s),e.ce&&e.ce(s),s}let Ie=null;const Ls=()=>Ie||Le,rr=e=>{Ie=e,e.scope.on()},Kt=()=>{Ie&&Ie.scope.off(),Ie=null};function sc(e){return e.vnode.shapeFlag&4}let kr=!1;function r0(e,t=!1){kr=t;const{props:r,children:n}=e.vnode,o=sc(e);kf(e,r,o,t),Wf(e,n);const s=o?n0(e,t):void 0;return kr=!1,s}function n0(e,t){const r=e.type;e.accessCache=Object.create(null),e.proxy=tr(new Proxy(e.ctx,Tf));const{setup:n}=r;if(n){const o=e.setupContext=n.length>1?s0(e):null;rr(e),ir();const s=wt(n,e,0,[e.props,o]);if(ar(),Kt(),vl(s)){if(s.then(Kt,Kt),t)return s.then(i=>{yi(e,i,t)}).catch(i=>{Mn(i,e,0)});e.asyncDep=s}else yi(e,s,t)}else ic(e,t)}function yi(e,t,r){j(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:ae(t)&&(e.setupState=Fl(t)),ic(e,r)}let $i;function ic(e,t,r){const n=e.type;if(!e.render){if(!t&&$i&&!n.render){const o=n.template||Ts(e).template;if(o){const{isCustomElement:s,compilerOptions:i}=e.appContext.config,{delimiters:a,compilerOptions:l}=n,u=Ne(Ne({isCustomElement:s,delimiters:a},i),l);n.render=$i(o,u)}}e.render=n.render||je}rr(e),ir(),Rf(e),ar(),Kt()}function o0(e){return new Proxy(e.attrs,{get(t,r){return He(e,"get","$attrs"),t[r]}})}function s0(e){const t=n=>{e.exposed=n||{}};let r;return{get attrs(){return r||(r=o0(e))},slots:e.slots,emit:e.emit,expose:t}}function Gn(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Fl(tr(e.exposed)),{get(t,r){if(r in t)return t[r];if(r in wr)return wr[r](e)},has(t,r){return r in t||r in wr}}))}function i0(e,t=!0){return j(e)?e.displayName||e.name:e.name||t&&e.__name}function a0(e){return j(e)&&"__vccOpts"in e}const ge=(e,t)=>tf(e,t,kr);function Hs(e,t,r){const n=arguments.length;return n===2?ae(t)&&!B(t)?Vo(t)?$e(e,null,[t]):$e(e,t):$e(e,null,t):(n>3?r=Array.prototype.slice.call(arguments,2):n===3&&Vo(r)&&(r=[r]),$e(e,t,r))}const l0=Symbol(""),c0=()=>Ve(l0),u0="3.2.45",f0="http://www.w3.org/2000/svg",Mt=typeof document<"u"?document:null,bi=Mt&&Mt.createElement("template"),d0={insert:(e,t,r)=>{t.insertBefore(e,r||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,r,n)=>{const o=t?Mt.createElementNS(f0,e):Mt.createElement(e,r?{is:r}:void 0);return e==="select"&&n&&n.multiple!=null&&o.setAttribute("multiple",n.multiple),o},createText:e=>Mt.createTextNode(e),createComment:e=>Mt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Mt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,r,n,o,s){const i=r?r.previousSibling:t.lastChild;if(o&&(o===s||o.nextSibling))for(;t.insertBefore(o.cloneNode(!0),r),!(o===s||!(o=o.nextSibling)););else{bi.innerHTML=n?`<svg>${e}</svg>`:e;const a=bi.content;if(n){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,r)}return[i?i.nextSibling:t.firstChild,r?r.previousSibling:t.lastChild]}};function v0(e,t,r){const n=e._vtc;n&&(t=(t?[t,...n]:[...n]).join(" ")),t==null?e.removeAttribute("class"):r?e.setAttribute("class",t):e.className=t}function p0(e,t,r){const n=e.style,o=Ee(r);if(r&&!o){for(const s in r)Xo(n,s,r[s]);if(t&&!Ee(t))for(const s in t)r[s]==null&&Xo(n,s,"")}else{const s=n.display;o?t!==r&&(n.cssText=r):t&&e.removeAttribute("style"),"_vod"in e&&(n.display=s)}}const Ei=/\s*!important$/;function Xo(e,t,r){if(B(r))r.forEach(n=>Xo(e,t,n));else if(r==null&&(r=""),t.startsWith("--"))e.setProperty(t,r);else{const n=h0(e,t);Ei.test(r)?e.setProperty(sr(n),r.replace(Ei,""),"important"):e[n]=r}}const Ii=["Webkit","Moz","ms"],oo={};function h0(e,t){const r=oo[t];if(r)return r;let n=rt(t);if(n!=="filter"&&n in e)return oo[t]=n;n=Ln(n);for(let o=0;o<Ii.length;o++){const s=Ii[o]+n;if(s in e)return oo[t]=s}return t}const Ai="http://www.w3.org/1999/xlink";function g0(e,t,r,n,o){if(n&&t.startsWith("xlink:"))r==null?e.removeAttributeNS(Ai,t.slice(6,t.length)):e.setAttributeNS(Ai,t,r);else{const s=du(t);r==null||s&&!ul(r)?e.removeAttribute(t):e.setAttribute(t,s?"":r)}}function m0(e,t,r,n,o,s,i){if(t==="innerHTML"||t==="textContent"){n&&i(n,o,s),e[t]=r==null?"":r;return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=r;const l=r==null?"":r;(e.value!==l||e.tagName==="OPTION")&&(e.value=l),r==null&&e.removeAttribute(t);return}let a=!1;if(r===""||r==null){const l=typeof e[t];l==="boolean"?r=ul(r):r==null&&l==="string"?(r="",a=!0):l==="number"&&(r=0,a=!0)}try{e[t]=r}catch{}a&&e.removeAttribute(t)}function kt(e,t,r,n){e.addEventListener(t,r,n)}function _0(e,t,r,n){e.removeEventListener(t,r,n)}function y0(e,t,r,n,o=null){const s=e._vei||(e._vei={}),i=s[t];if(n&&i)i.value=n;else{const[a,l]=$0(t);if(n){const u=s[t]=I0(n,o);kt(e,a,u,l)}else i&&(_0(e,a,i,l),s[t]=void 0)}}const wi=/(?:Once|Passive|Capture)$/;function $0(e){let t;if(wi.test(e)){t={};let n;for(;n=e.match(wi);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):sr(e.slice(2)),t]}let so=0;const b0=Promise.resolve(),E0=()=>so||(b0.then(()=>so=0),so=Date.now());function I0(e,t){const r=n=>{if(!n._vts)n._vts=Date.now();else if(n._vts<=r.attached)return;De(A0(n,r.value),t,5,[n])};return r.value=e,r.attached=E0(),r}function A0(e,t){if(B(t)){const r=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{r.call(e),e._stopped=!0},t.map(n=>o=>!o._stopped&&n&&n(o))}else return t}const Ni=/^on[a-z]/,w0=(e,t,r,n,o=!1,s,i,a,l)=>{t==="class"?v0(e,n,o):t==="style"?p0(e,r,n):Tn(t)?ms(t)||y0(e,t,r,n,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):N0(e,t,n,o))?m0(e,t,n,s,i,a,l):(t==="true-value"?e._trueValue=n:t==="false-value"&&(e._falseValue=n),g0(e,t,n,o))};function N0(e,t,r,n){return n?!!(t==="innerHTML"||t==="textContent"||t in e&&Ni.test(t)&&j(r)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Ni.test(t)&&Ee(r)?!1:t in e}const vt="transition",hr="animation",Ms=(e,{slots:t})=>Hs(Kl,S0(e),t);Ms.displayName="Transition";const ac={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Ms.props=Ne({},Kl.props,ac);const Tt=(e,t=[])=>{B(e)?e.forEach(r=>r(...t)):e&&e(...t)},Si=e=>e?B(e)?e.some(t=>t.length>1):e.length>1:!1;function S0(e){const t={};for(const L in e)L in ac||(t[L]=e[L]);if(e.css===!1)return t;const{name:r="v",type:n,duration:o,enterFromClass:s=`${r}-enter-from`,enterActiveClass:i=`${r}-enter-active`,enterToClass:a=`${r}-enter-to`,appearFromClass:l=s,appearActiveClass:u=i,appearToClass:c=a,leaveFromClass:f=`${r}-leave-from`,leaveActiveClass:v=`${r}-leave-active`,leaveToClass:p=`${r}-leave-to`}=e,m=O0(o),$=m&&m[0],A=m&&m[1],{onBeforeEnter:y,onEnter:H,onEnterCancelled:S,onLeave:W,onLeaveCancelled:K,onBeforeAppear:te=y,onAppear:G=H,onAppearCancelled:C=S}=t,Q=(L,ie,de)=>{Rt(L,ie?c:a),Rt(L,ie?u:i),de&&de()},Y=(L,ie)=>{L._isLeaving=!1,Rt(L,f),Rt(L,p),Rt(L,v),ie&&ie()},ue=L=>(ie,de)=>{const me=L?G:H,ve=()=>Q(ie,L,de);Tt(me,[ie,ve]),Oi(()=>{Rt(ie,L?l:s),pt(ie,L?c:a),Si(me)||Ci(ie,n,$,ve)})};return Ne(t,{onBeforeEnter(L){Tt(y,[L]),pt(L,s),pt(L,i)},onBeforeAppear(L){Tt(te,[L]),pt(L,l),pt(L,u)},onEnter:ue(!1),onAppear:ue(!0),onLeave(L,ie){L._isLeaving=!0;const de=()=>Y(L,ie);pt(L,f),T0(),pt(L,v),Oi(()=>{!L._isLeaving||(Rt(L,f),pt(L,p),Si(W)||Ci(L,n,A,de))}),Tt(W,[L,de])},onEnterCancelled(L){Q(L,!1),Tt(S,[L])},onAppearCancelled(L){Q(L,!0),Tt(C,[L])},onLeaveCancelled(L){Y(L),Tt(K,[L])}})}function O0(e){if(e==null)return null;if(ae(e))return[io(e.enter),io(e.leave)];{const t=io(e);return[t,t]}}function io(e){return Rr(e)}function pt(e,t){t.split(/\s+/).forEach(r=>r&&e.classList.add(r)),(e._vtc||(e._vtc=new Set)).add(t)}function Rt(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.remove(n));const{_vtc:r}=e;r&&(r.delete(t),r.size||(e._vtc=void 0))}function Oi(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let C0=0;function Ci(e,t,r,n){const o=e._endId=++C0,s=()=>{o===e._endId&&n()};if(r)return setTimeout(s,r);const{type:i,timeout:a,propCount:l}=P0(e,t);if(!i)return n();const u=i+"end";let c=0;const f=()=>{e.removeEventListener(u,v),s()},v=p=>{p.target===e&&++c>=l&&f()};setTimeout(()=>{c<l&&f()},a+1),e.addEventListener(u,v)}function P0(e,t){const r=window.getComputedStyle(e),n=m=>(r[m]||"").split(", "),o=n(`${vt}Delay`),s=n(`${vt}Duration`),i=Pi(o,s),a=n(`${hr}Delay`),l=n(`${hr}Duration`),u=Pi(a,l);let c=null,f=0,v=0;t===vt?i>0&&(c=vt,f=i,v=s.length):t===hr?u>0&&(c=hr,f=u,v=l.length):(f=Math.max(i,u),c=f>0?i>u?vt:hr:null,v=c?c===vt?s.length:l.length:0);const p=c===vt&&/\b(transform|all)(,|$)/.test(n(`${vt}Property`).toString());return{type:c,timeout:f,propCount:v,hasTransform:p}}function Pi(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((r,n)=>Ti(r)+Ti(e[n])))}function Ti(e){return Number(e.slice(0,-1).replace(",","."))*1e3}function T0(){return document.body.offsetHeight}const Sn=e=>{const t=e.props["onUpdate:modelValue"]||!1;return B(t)?r=>_n(t,r):t};function R0(e){e.target.composing=!0}function Ri(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const F0={created(e,{modifiers:{lazy:t,trim:r,number:n}},o){e._assign=Sn(o);const s=n||o.props&&o.props.type==="number";kt(e,t?"change":"input",i=>{if(i.target.composing)return;let a=e.value;r&&(a=a.trim()),s&&(a=Rr(a)),e._assign(a)}),r&&kt(e,"change",()=>{e.value=e.value.trim()}),t||(kt(e,"compositionstart",R0),kt(e,"compositionend",Ri),kt(e,"change",Ri))},mounted(e,{value:t}){e.value=t==null?"":t},beforeUpdate(e,{value:t,modifiers:{lazy:r,trim:n,number:o}},s){if(e._assign=Sn(s),e.composing||document.activeElement===e&&e.type!=="range"&&(r||n&&e.value.trim()===t||(o||e.type==="number")&&Rr(e.value)===t))return;const i=t==null?"":t;e.value!==i&&(e.value=i)}},ao={deep:!0,created(e,t,r){e._assign=Sn(r),kt(e,"change",()=>{const n=e._modelValue,o=L0(e),s=e.checked,i=e._assign;if(B(n)){const a=fl(n,o),l=a!==-1;if(s&&!l)i(n.concat(o));else if(!s&&l){const u=[...n];u.splice(a,1),i(u)}}else if(Rn(n)){const a=new Set(n);s?a.add(o):a.delete(o),i(a)}else i(lc(e,s))})},mounted:Fi,beforeUpdate(e,t,r){e._assign=Sn(r),Fi(e,t,r)}};function Fi(e,{value:t,oldValue:r},n){e._modelValue=t,B(t)?e.checked=fl(t,n.props.value)>-1:Rn(t)?e.checked=t.has(n.props.value):t!==r&&(e.checked=Pn(t,lc(e,!0)))}function L0(e){return"_value"in e?e._value:e.value}function lc(e,t){const r=t?"_trueValue":"_falseValue";return r in e?e[r]:t}const H0=["ctrl","shift","alt","meta"],M0={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>H0.some(r=>e[`${r}Key`]&&!t.includes(r))},k0=(e,t)=>(r,...n)=>{for(let o=0;o<t.length;o++){const s=M0[t[o]];if(s&&s(r,t))return}return e(r,...n)},D0=Ne({patchProp:w0},d0);let Li;function U0(){return Li||(Li=Gf(D0))}const W0=(...e)=>{const t=U0().createApp(...e),{mount:r}=t;return t.mount=n=>{const o=B0(n);if(!o)return;const s=t._component;!j(s)&&!s.render&&!s.template&&(s.template=o.innerHTML),o.innerHTML="";const i=r(o,!1,o instanceof SVGElement);return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),i},t};function B0(e){return Ee(e)?document.querySelector(e):e}var K0=!1;/*!
  * pinia v2.0.23
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */let cc;const jn=e=>cc=e,uc=Symbol();function zo(e){return e&&typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"&&typeof e.toJSON!="function"}var Sr;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(Sr||(Sr={}));function x0(){const e=ml(!0),t=e.run(()=>we({}));let r=[],n=[];const o=tr({install(s){jn(o),o._a=s,s.provide(uc,o),s.config.globalProperties.$pinia=o,n.forEach(i=>r.push(i)),n=[]},use(s){return!this._a&&!K0?n.push(s):r.push(s),this},_p:r,_a:null,_e:e,_s:new Map,state:t});return o}const fc=()=>{};function Hi(e,t,r,n=fc){e.push(t);const o=()=>{const s=e.indexOf(t);s>-1&&(e.splice(s,1),n())};return!r&&Ls()&&Kr(o),o}function Xt(e,...t){e.slice().forEach(r=>{r(...t)})}function qo(e,t){e instanceof Map&&t instanceof Map&&t.forEach((r,n)=>e.set(n,r)),e instanceof Set&&t instanceof Set&&t.forEach(e.add,e);for(const r in t){if(!t.hasOwnProperty(r))continue;const n=t[r],o=e[r];zo(o)&&zo(n)&&e.hasOwnProperty(r)&&!_e(n)&&!At(n)?e[r]=qo(o,n):e[r]=n}return e}const G0=Symbol();function j0(e){return!zo(e)||!e.hasOwnProperty(G0)}const{assign:$t}=Object;function V0(e){return!!(_e(e)&&e.effect)}function X0(e,t,r,n){const{state:o,actions:s,getters:i}=t,a=r.state.value[e];let l;function u(){a||(r.state.value[e]=o?o():{});const c=Yu(r.state.value[e]);return $t(c,s,Object.keys(i||{}).reduce((f,v)=>(f[v]=tr(ge(()=>{jn(r);const p=r._s.get(e);return i[v].call(p,p)})),f),{}))}return l=dc(e,u,t,r,n,!0),l.$reset=function(){const f=o?o():{};this.$patch(v=>{$t(v,f)})},l}function dc(e,t,r={},n,o,s){let i;const a=$t({actions:{}},r),l={deep:!0};let u,c,f=tr([]),v=tr([]),p;const m=n.state.value[e];!s&&!m&&(n.state.value[e]={}),we({});let $;function A(G){let C;u=c=!1,typeof G=="function"?(G(n.state.value[e]),C={type:Sr.patchFunction,storeId:e,events:p}):(qo(n.state.value[e],G),C={type:Sr.patchObject,payload:G,storeId:e,events:p});const Q=$=Symbol();Os().then(()=>{$===Q&&(u=!0)}),c=!0,Xt(f,C,n.state.value[e])}const y=fc;function H(){i.stop(),f=[],v=[],n._s.delete(e)}function S(G,C){return function(){jn(n);const Q=Array.from(arguments),Y=[],ue=[];function L(me){Y.push(me)}function ie(me){ue.push(me)}Xt(v,{args:Q,name:G,store:K,after:L,onError:ie});let de;try{de=C.apply(this&&this.$id===e?this:K,Q)}catch(me){throw Xt(ue,me),me}return de instanceof Promise?de.then(me=>(Xt(Y,me),me)).catch(me=>(Xt(ue,me),Promise.reject(me))):(Xt(Y,de),de)}}const W={_p:n,$id:e,$onAction:Hi.bind(null,v),$patch:A,$reset:y,$subscribe(G,C={}){const Q=Hi(f,G,C.detached,()=>Y()),Y=i.run(()=>Bt(()=>n.state.value[e],ue=>{(C.flush==="sync"?c:u)&&G({storeId:e,type:Sr.direct,events:p},ue)},$t({},l,C)));return Q},$dispose:H},K=xt(W);n._s.set(e,K);const te=n._e.run(()=>(i=ml(),i.run(()=>t())));for(const G in te){const C=te[G];if(_e(C)&&!V0(C)||At(C))s||(m&&j0(C)&&(_e(C)?C.value=m[G]:qo(C,m[G])),n.state.value[e][G]=C);else if(typeof C=="function"){const Q=S(G,C);te[G]=Q,a.actions[G]=C}}return $t(K,te),$t(ee(K),te),Object.defineProperty(K,"$state",{get:()=>n.state.value[e],set:G=>{A(C=>{$t(C,G)})}}),n._p.forEach(G=>{$t(K,i.run(()=>G({store:K,app:n._a,pinia:n,options:a})))}),m&&s&&r.hydrate&&r.hydrate(K.$state,m),u=!0,c=!0,K}function vc(e,t,r){let n,o;const s=typeof t=="function";typeof e=="string"?(n=e,o=s?r:t):(o=e,n=e.id);function i(a,l){const u=Ls();return a=a||u&&Ve(uc),a&&jn(a),a=cc,a._s.has(n)||(s?dc(n,t,o,a):X0(n,o,a)),a._s.get(n)}return i.$id=n,i}/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Qt=typeof window<"u";function z0(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const re=Object.assign;function lo(e,t){const r={};for(const n in t){const o=t[n];r[n]=ze(o)?o.map(e):e(o)}return r}const Or=()=>{},ze=Array.isArray,q0=/\/$/,Q0=e=>e.replace(q0,"");function co(e,t,r="/"){let n,o={},s="",i="";const a=t.indexOf("#");let l=t.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(n=t.slice(0,l),s=t.slice(l+1,a>-1?a:t.length),o=e(s)),a>-1&&(n=n||t.slice(0,a),i=t.slice(a,t.length)),n=ed(n!=null?n:t,r),{fullPath:n+(s&&"?")+s+i,path:n,query:o,hash:i}}function Y0(e,t){const r=t.query?e(t.query):"";return t.path+(r&&"?")+r+(t.hash||"")}function Mi(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Z0(e,t,r){const n=t.matched.length-1,o=r.matched.length-1;return n>-1&&n===o&&nr(t.matched[n],r.matched[o])&&pc(t.params,r.params)&&e(t.query)===e(r.query)&&t.hash===r.hash}function nr(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function pc(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const r in e)if(!J0(e[r],t[r]))return!1;return!0}function J0(e,t){return ze(e)?ki(e,t):ze(t)?ki(t,e):e===t}function ki(e,t){return ze(t)?e.length===t.length&&e.every((r,n)=>r===t[n]):e.length===1&&e[0]===t}function ed(e,t){if(e.startsWith("/"))return e;if(!e)return t;const r=t.split("/"),n=e.split("/");let o=r.length-1,s,i;for(s=0;s<n.length;s++)if(i=n[s],i!==".")if(i==="..")o>1&&o--;else break;return r.slice(0,o).join("/")+"/"+n.slice(s-(s===n.length?1:0)).join("/")}var Dr;(function(e){e.pop="pop",e.push="push"})(Dr||(Dr={}));var Cr;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Cr||(Cr={}));function td(e){if(!e)if(Qt){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Q0(e)}const rd=/^[^#]+#/;function nd(e,t){return e.replace(rd,"#")+t}function od(e,t){const r=document.documentElement.getBoundingClientRect(),n=e.getBoundingClientRect();return{behavior:t.behavior,left:n.left-r.left-(t.left||0),top:n.top-r.top-(t.top||0)}}const Vn=()=>({left:window.pageXOffset,top:window.pageYOffset});function sd(e){let t;if("el"in e){const r=e.el,n=typeof r=="string"&&r.startsWith("#"),o=typeof r=="string"?n?document.getElementById(r.slice(1)):document.querySelector(r):r;if(!o)return;t=od(o,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function Di(e,t){return(history.state?history.state.position-t:-1)+e}const Qo=new Map;function id(e,t){Qo.set(e,t)}function ad(e){const t=Qo.get(e);return Qo.delete(e),t}let ld=()=>location.protocol+"//"+location.host;function hc(e,t){const{pathname:r,search:n,hash:o}=t,s=e.indexOf("#");if(s>-1){let a=o.includes(e.slice(s))?e.slice(s).length:1,l=o.slice(a);return l[0]!=="/"&&(l="/"+l),Mi(l,"")}return Mi(r,e)+n+o}function cd(e,t,r,n){let o=[],s=[],i=null;const a=({state:v})=>{const p=hc(e,location),m=r.value,$=t.value;let A=0;if(v){if(r.value=p,t.value=v,i&&i===m){i=null;return}A=$?v.position-$.position:0}else n(p);o.forEach(y=>{y(r.value,m,{delta:A,type:Dr.pop,direction:A?A>0?Cr.forward:Cr.back:Cr.unknown})})};function l(){i=r.value}function u(v){o.push(v);const p=()=>{const m=o.indexOf(v);m>-1&&o.splice(m,1)};return s.push(p),p}function c(){const{history:v}=window;!v.state||v.replaceState(re({},v.state,{scroll:Vn()}),"")}function f(){for(const v of s)v();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",c)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",c),{pauseListeners:l,listen:u,destroy:f}}function Ui(e,t,r,n=!1,o=!1){return{back:e,current:t,forward:r,replaced:n,position:window.history.length,scroll:o?Vn():null}}function ud(e){const{history:t,location:r}=window,n={value:hc(e,r)},o={value:t.state};o.value||s(n.value,{back:null,current:n.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function s(l,u,c){const f=e.indexOf("#"),v=f>-1?(r.host&&document.querySelector("base")?e:e.slice(f))+l:ld()+e+l;try{t[c?"replaceState":"pushState"](u,"",v),o.value=u}catch(p){console.error(p),r[c?"replace":"assign"](v)}}function i(l,u){const c=re({},t.state,Ui(o.value.back,l,o.value.forward,!0),u,{position:o.value.position});s(l,c,!0),n.value=l}function a(l,u){const c=re({},o.value,t.state,{forward:l,scroll:Vn()});s(c.current,c,!0);const f=re({},Ui(n.value,l,null),{position:c.position+1},u);s(l,f,!1),n.value=l}return{location:n,state:o,push:a,replace:i}}function fd(e){e=td(e);const t=ud(e),r=cd(e,t.state,t.location,t.replace);function n(s,i=!0){i||r.pauseListeners(),history.go(s)}const o=re({location:"",base:e,go:n,createHref:nd.bind(null,e)},t,r);return Object.defineProperty(o,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(o,"state",{enumerable:!0,get:()=>t.state.value}),o}function dd(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),fd(e)}function vd(e){return typeof e=="string"||e&&typeof e=="object"}function gc(e){return typeof e=="string"||typeof e=="symbol"}const ht={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},mc=Symbol("");var Wi;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Wi||(Wi={}));function or(e,t){return re(new Error,{type:e,[mc]:!0},t)}function nt(e,t){return e instanceof Error&&mc in e&&(t==null||!!(e.type&t))}const Bi="[^/]+?",pd={sensitive:!1,strict:!1,start:!0,end:!0},hd=/[.+*?^${}()[\]/\\]/g;function gd(e,t){const r=re({},pd,t),n=[];let o=r.start?"^":"";const s=[];for(const u of e){const c=u.length?[]:[90];r.strict&&!u.length&&(o+="/");for(let f=0;f<u.length;f++){const v=u[f];let p=40+(r.sensitive?.25:0);if(v.type===0)f||(o+="/"),o+=v.value.replace(hd,"\\$&"),p+=40;else if(v.type===1){const{value:m,repeatable:$,optional:A,regexp:y}=v;s.push({name:m,repeatable:$,optional:A});const H=y||Bi;if(H!==Bi){p+=10;try{new RegExp(`(${H})`)}catch(W){throw new Error(`Invalid custom RegExp for param "${m}" (${H}): `+W.message)}}let S=$?`((?:${H})(?:/(?:${H}))*)`:`(${H})`;f||(S=A&&u.length<2?`(?:/${S})`:"/"+S),A&&(S+="?"),o+=S,p+=20,A&&(p+=-8),$&&(p+=-20),H===".*"&&(p+=-50)}c.push(p)}n.push(c)}if(r.strict&&r.end){const u=n.length-1;n[u][n[u].length-1]+=.7000000000000001}r.strict||(o+="/?"),r.end?o+="$":r.strict&&(o+="(?:/|$)");const i=new RegExp(o,r.sensitive?"":"i");function a(u){const c=u.match(i),f={};if(!c)return null;for(let v=1;v<c.length;v++){const p=c[v]||"",m=s[v-1];f[m.name]=p&&m.repeatable?p.split("/"):p}return f}function l(u){let c="",f=!1;for(const v of e){(!f||!c.endsWith("/"))&&(c+="/"),f=!1;for(const p of v)if(p.type===0)c+=p.value;else if(p.type===1){const{value:m,repeatable:$,optional:A}=p,y=m in u?u[m]:"";if(ze(y)&&!$)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const H=ze(y)?y.join("/"):y;if(!H)if(A)v.length<2&&(c.endsWith("/")?c=c.slice(0,-1):f=!0);else throw new Error(`Missing required param "${m}"`);c+=H}}return c||"/"}return{re:i,score:n,keys:s,parse:a,stringify:l}}function md(e,t){let r=0;for(;r<e.length&&r<t.length;){const n=t[r]-e[r];if(n)return n;r++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function _d(e,t){let r=0;const n=e.score,o=t.score;for(;r<n.length&&r<o.length;){const s=md(n[r],o[r]);if(s)return s;r++}if(Math.abs(o.length-n.length)===1){if(Ki(n))return 1;if(Ki(o))return-1}return o.length-n.length}function Ki(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const yd={type:0,value:""},$d=/[a-zA-Z0-9_]/;function bd(e){if(!e)return[[]];if(e==="/")return[[yd]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(p){throw new Error(`ERR (${r})/"${u}": ${p}`)}let r=0,n=r;const o=[];let s;function i(){s&&o.push(s),s=[]}let a=0,l,u="",c="";function f(){!u||(r===0?s.push({type:0,value:u}):r===1||r===2||r===3?(s.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:u,regexp:c,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),u="")}function v(){u+=l}for(;a<e.length;){if(l=e[a++],l==="\\"&&r!==2){n=r,r=4;continue}switch(r){case 0:l==="/"?(u&&f(),i()):l===":"?(f(),r=1):v();break;case 4:v(),r=n;break;case 1:l==="("?r=2:$d.test(l)?v():(f(),r=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?c[c.length-1]=="\\"?c=c.slice(0,-1)+l:r=3:c+=l;break;case 3:f(),r=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,c="";break;default:t("Unknown state");break}}return r===2&&t(`Unfinished custom RegExp for param "${u}"`),f(),i(),o}function Ed(e,t,r){const n=gd(bd(e.path),r),o=re(n,{record:e,parent:t,children:[],alias:[]});return t&&!o.record.aliasOf==!t.record.aliasOf&&t.children.push(o),o}function Id(e,t){const r=[],n=new Map;t=ji({strict:!1,end:!0,sensitive:!1},t);function o(c){return n.get(c)}function s(c,f,v){const p=!v,m=Ad(c);m.aliasOf=v&&v.record;const $=ji(t,c),A=[m];if("alias"in c){const S=typeof c.alias=="string"?[c.alias]:c.alias;for(const W of S)A.push(re({},m,{components:v?v.record.components:m.components,path:W,aliasOf:v?v.record:m}))}let y,H;for(const S of A){const{path:W}=S;if(f&&W[0]!=="/"){const K=f.record.path,te=K[K.length-1]==="/"?"":"/";S.path=f.record.path+(W&&te+W)}if(y=Ed(S,f,$),v?v.alias.push(y):(H=H||y,H!==y&&H.alias.push(y),p&&c.name&&!Gi(y)&&i(c.name)),m.children){const K=m.children;for(let te=0;te<K.length;te++)s(K[te],y,v&&v.children[te])}v=v||y,(y.record.components&&Object.keys(y.record.components).length||y.record.name||y.record.redirect)&&l(y)}return H?()=>{i(H)}:Or}function i(c){if(gc(c)){const f=n.get(c);f&&(n.delete(c),r.splice(r.indexOf(f),1),f.children.forEach(i),f.alias.forEach(i))}else{const f=r.indexOf(c);f>-1&&(r.splice(f,1),c.record.name&&n.delete(c.record.name),c.children.forEach(i),c.alias.forEach(i))}}function a(){return r}function l(c){let f=0;for(;f<r.length&&_d(c,r[f])>=0&&(c.record.path!==r[f].record.path||!_c(c,r[f]));)f++;r.splice(f,0,c),c.record.name&&!Gi(c)&&n.set(c.record.name,c)}function u(c,f){let v,p={},m,$;if("name"in c&&c.name){if(v=n.get(c.name),!v)throw or(1,{location:c});$=v.record.name,p=re(xi(f.params,v.keys.filter(H=>!H.optional).map(H=>H.name)),c.params&&xi(c.params,v.keys.map(H=>H.name))),m=v.stringify(p)}else if("path"in c)m=c.path,v=r.find(H=>H.re.test(m)),v&&(p=v.parse(m),$=v.record.name);else{if(v=f.name?n.get(f.name):r.find(H=>H.re.test(f.path)),!v)throw or(1,{location:c,currentLocation:f});$=v.record.name,p=re({},f.params,c.params),m=v.stringify(p)}const A=[];let y=v;for(;y;)A.unshift(y.record),y=y.parent;return{name:$,path:m,params:p,matched:A,meta:Nd(A)}}return e.forEach(c=>s(c)),{addRoute:s,resolve:u,removeRoute:i,getRoutes:a,getRecordMatcher:o}}function xi(e,t){const r={};for(const n of t)n in e&&(r[n]=e[n]);return r}function Ad(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:wd(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function wd(e){const t={},r=e.props||!1;if("component"in e)t.default=r;else for(const n in e.components)t[n]=typeof r=="boolean"?r:r[n];return t}function Gi(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Nd(e){return e.reduce((t,r)=>re(t,r.meta),{})}function ji(e,t){const r={};for(const n in e)r[n]=n in t?t[n]:e[n];return r}function _c(e,t){return t.children.some(r=>r===e||_c(e,r))}const yc=/#/g,Sd=/&/g,Od=/\//g,Cd=/=/g,Pd=/\?/g,$c=/\+/g,Td=/%5B/g,Rd=/%5D/g,bc=/%5E/g,Fd=/%60/g,Ec=/%7B/g,Ld=/%7C/g,Ic=/%7D/g,Hd=/%20/g;function ks(e){return encodeURI(""+e).replace(Ld,"|").replace(Td,"[").replace(Rd,"]")}function Md(e){return ks(e).replace(Ec,"{").replace(Ic,"}").replace(bc,"^")}function Yo(e){return ks(e).replace($c,"%2B").replace(Hd,"+").replace(yc,"%23").replace(Sd,"%26").replace(Fd,"`").replace(Ec,"{").replace(Ic,"}").replace(bc,"^")}function kd(e){return Yo(e).replace(Cd,"%3D")}function Dd(e){return ks(e).replace(yc,"%23").replace(Pd,"%3F")}function Ud(e){return e==null?"":Dd(e).replace(Od,"%2F")}function On(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function Wd(e){const t={};if(e===""||e==="?")return t;const n=(e[0]==="?"?e.slice(1):e).split("&");for(let o=0;o<n.length;++o){const s=n[o].replace($c," "),i=s.indexOf("="),a=On(i<0?s:s.slice(0,i)),l=i<0?null:On(s.slice(i+1));if(a in t){let u=t[a];ze(u)||(u=t[a]=[u]),u.push(l)}else t[a]=l}return t}function Vi(e){let t="";for(let r in e){const n=e[r];if(r=kd(r),n==null){n!==void 0&&(t+=(t.length?"&":"")+r);continue}(ze(n)?n.map(s=>s&&Yo(s)):[n&&Yo(n)]).forEach(s=>{s!==void 0&&(t+=(t.length?"&":"")+r,s!=null&&(t+="="+s))})}return t}function Bd(e){const t={};for(const r in e){const n=e[r];n!==void 0&&(t[r]=ze(n)?n.map(o=>o==null?null:""+o):n==null?n:""+n)}return t}const Kd=Symbol(""),Xi=Symbol(""),Xn=Symbol(""),Ac=Symbol(""),Zo=Symbol("");function gr(){let e=[];function t(n){return e.push(n),()=>{const o=e.indexOf(n);o>-1&&e.splice(o,1)}}function r(){e=[]}return{add:t,list:()=>e,reset:r}}function bt(e,t,r,n,o){const s=n&&(n.enterCallbacks[o]=n.enterCallbacks[o]||[]);return()=>new Promise((i,a)=>{const l=f=>{f===!1?a(or(4,{from:r,to:t})):f instanceof Error?a(f):vd(f)?a(or(2,{from:t,to:f})):(s&&n.enterCallbacks[o]===s&&typeof f=="function"&&s.push(f),i())},u=e.call(n&&n.instances[o],t,r,l);let c=Promise.resolve(u);e.length<3&&(c=c.then(l)),c.catch(f=>a(f))})}function uo(e,t,r,n){const o=[];for(const s of e)for(const i in s.components){let a=s.components[i];if(!(t!=="beforeRouteEnter"&&!s.instances[i]))if(xd(a)){const u=(a.__vccOpts||a)[t];u&&o.push(bt(u,r,n,s,i))}else{let l=a();o.push(()=>l.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${i}" at "${s.path}"`));const c=z0(u)?u.default:u;s.components[i]=c;const v=(c.__vccOpts||c)[t];return v&&bt(v,r,n,s,i)()}))}}return o}function xd(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function zi(e){const t=Ve(Xn),r=Ve(Ac),n=ge(()=>t.resolve(be(e.to))),o=ge(()=>{const{matched:l}=n.value,{length:u}=l,c=l[u-1],f=r.matched;if(!c||!f.length)return-1;const v=f.findIndex(nr.bind(null,c));if(v>-1)return v;const p=qi(l[u-2]);return u>1&&qi(c)===p&&f[f.length-1].path!==p?f.findIndex(nr.bind(null,l[u-2])):v}),s=ge(()=>o.value>-1&&Xd(r.params,n.value.params)),i=ge(()=>o.value>-1&&o.value===r.matched.length-1&&pc(r.params,n.value.params));function a(l={}){return Vd(l)?t[be(e.replace)?"replace":"push"](be(e.to)).catch(Or):Promise.resolve()}return{route:n,href:ge(()=>n.value.href),isActive:s,isExactActive:i,navigate:a}}const Gd=qe({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:zi,setup(e,{slots:t}){const r=xt(zi(e)),{options:n}=Ve(Xn),o=ge(()=>({[Qi(e.activeClass,n.linkActiveClass,"router-link-active")]:r.isActive,[Qi(e.exactActiveClass,n.linkExactActiveClass,"router-link-exact-active")]:r.isExactActive}));return()=>{const s=t.default&&t.default(r);return e.custom?s:Hs("a",{"aria-current":r.isExactActive?e.ariaCurrentValue:null,href:r.href,onClick:r.navigate,class:o.value},s)}}}),jd=Gd;function Vd(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Xd(e,t){for(const r in t){const n=t[r],o=e[r];if(typeof n=="string"){if(n!==o)return!1}else if(!ze(o)||o.length!==n.length||n.some((s,i)=>s!==o[i]))return!1}return!0}function qi(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Qi=(e,t,r)=>e!=null?e:t!=null?t:r,zd=qe({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:r}){const n=Ve(Zo),o=ge(()=>e.route||n.value),s=Ve(Xi,0),i=ge(()=>{let u=be(s);const{matched:c}=o.value;let f;for(;(f=c[u])&&!f.components;)u++;return u}),a=ge(()=>o.value.matched[i.value]);yn(Xi,ge(()=>i.value+1)),yn(Kd,a),yn(Zo,o);const l=we();return Bt(()=>[l.value,a.value,e.name],([u,c,f],[v,p,m])=>{c&&(c.instances[f]=u,p&&p!==c&&u&&u===v&&(c.leaveGuards.size||(c.leaveGuards=p.leaveGuards),c.updateGuards.size||(c.updateGuards=p.updateGuards))),u&&c&&(!p||!nr(c,p)||!v)&&(c.enterCallbacks[f]||[]).forEach($=>$(u))},{flush:"post"}),()=>{const u=o.value,c=e.name,f=a.value,v=f&&f.components[c];if(!v)return Yi(r.default,{Component:v,route:u});const p=f.props[c],m=p?p===!0?u.params:typeof p=="function"?p(u):p:null,A=Hs(v,re({},m,t,{onVnodeUnmounted:y=>{y.component.isUnmounted&&(f.instances[c]=null)},ref:l}));return Yi(r.default,{Component:A,route:u})||A}}});function Yi(e,t){if(!e)return null;const r=e(t);return r.length===1?r[0]:r}const wc=zd;function qd(e){const t=Id(e.routes,e),r=e.parseQuery||Wd,n=e.stringifyQuery||Vi,o=e.history,s=gr(),i=gr(),a=gr(),l=zu(ht);let u=ht;Qt&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const c=lo.bind(null,b=>""+b),f=lo.bind(null,Ud),v=lo.bind(null,On);function p(b,F){let P,k;return gc(b)?(P=t.getRecordMatcher(b),k=F):k=b,t.addRoute(k,P)}function m(b){const F=t.getRecordMatcher(b);F&&t.removeRoute(F)}function $(){return t.getRoutes().map(b=>b.record)}function A(b){return!!t.getRecordMatcher(b)}function y(b,F){if(F=re({},F||l.value),typeof b=="string"){const d=co(r,b,F.path),h=t.resolve({path:d.path},F),g=o.createHref(d.fullPath);return re(d,h,{params:v(h.params),hash:On(d.hash),redirectedFrom:void 0,href:g})}let P;if("path"in b)P=re({},b,{path:co(r,b.path,F.path).path});else{const d=re({},b.params);for(const h in d)d[h]==null&&delete d[h];P=re({},b,{params:f(b.params)}),F.params=f(F.params)}const k=t.resolve(P,F),Z=b.hash||"";k.params=c(v(k.params));const pe=Y0(n,re({},b,{hash:Md(Z),path:k.path})),V=o.createHref(pe);return re({fullPath:pe,hash:Z,query:n===Vi?Bd(b.query):b.query||{}},k,{redirectedFrom:void 0,href:V})}function H(b){return typeof b=="string"?co(r,b,l.value.path):re({},b)}function S(b,F){if(u!==b)return or(8,{from:F,to:b})}function W(b){return G(b)}function K(b){return W(re(H(b),{replace:!0}))}function te(b){const F=b.matched[b.matched.length-1];if(F&&F.redirect){const{redirect:P}=F;let k=typeof P=="function"?P(b):P;return typeof k=="string"&&(k=k.includes("?")||k.includes("#")?k=H(k):{path:k},k.params={}),re({query:b.query,hash:b.hash,params:"path"in k?{}:b.params},k)}}function G(b,F){const P=u=y(b),k=l.value,Z=b.state,pe=b.force,V=b.replace===!0,d=te(P);if(d)return G(re(H(d),{state:typeof d=="object"?re({},Z,d.state):Z,force:pe,replace:V}),F||P);const h=P;h.redirectedFrom=F;let g;return!pe&&Z0(n,k,P)&&(g=or(16,{to:h,from:k}),Ot(k,k,!0,!1)),(g?Promise.resolve(g):Q(h,k)).catch(_=>nt(_)?nt(_,2)?_:Ue(_):le(_,h,k)).then(_=>{if(_){if(nt(_,2))return G(re({replace:V},H(_.to),{state:typeof _.to=="object"?re({},Z,_.to.state):Z,force:pe}),F||h)}else _=ue(h,k,!0,V,Z);return Y(h,k,_),_})}function C(b,F){const P=S(b,F);return P?Promise.reject(P):Promise.resolve()}function Q(b,F){let P;const[k,Z,pe]=Qd(b,F);P=uo(k.reverse(),"beforeRouteLeave",b,F);for(const d of k)d.leaveGuards.forEach(h=>{P.push(bt(h,b,F))});const V=C.bind(null,b,F);return P.push(V),zt(P).then(()=>{P=[];for(const d of s.list())P.push(bt(d,b,F));return P.push(V),zt(P)}).then(()=>{P=uo(Z,"beforeRouteUpdate",b,F);for(const d of Z)d.updateGuards.forEach(h=>{P.push(bt(h,b,F))});return P.push(V),zt(P)}).then(()=>{P=[];for(const d of b.matched)if(d.beforeEnter&&!F.matched.includes(d))if(ze(d.beforeEnter))for(const h of d.beforeEnter)P.push(bt(h,b,F));else P.push(bt(d.beforeEnter,b,F));return P.push(V),zt(P)}).then(()=>(b.matched.forEach(d=>d.enterCallbacks={}),P=uo(pe,"beforeRouteEnter",b,F),P.push(V),zt(P))).then(()=>{P=[];for(const d of i.list())P.push(bt(d,b,F));return P.push(V),zt(P)}).catch(d=>nt(d,8)?d:Promise.reject(d))}function Y(b,F,P){for(const k of a.list())k(b,F,P)}function ue(b,F,P,k,Z){const pe=S(b,F);if(pe)return pe;const V=F===ht,d=Qt?history.state:{};P&&(k||V?o.replace(b.fullPath,re({scroll:V&&d&&d.scroll},Z)):o.push(b.fullPath,Z)),l.value=b,Ot(b,F,P,V),Ue()}let L;function ie(){L||(L=o.listen((b,F,P)=>{if(!Vr.listening)return;const k=y(b),Z=te(k);if(Z){G(re(Z,{replace:!0}),k).catch(Or);return}u=k;const pe=l.value;Qt&&id(Di(pe.fullPath,P.delta),Vn()),Q(k,pe).catch(V=>nt(V,12)?V:nt(V,2)?(G(V.to,k).then(d=>{nt(d,20)&&!P.delta&&P.type===Dr.pop&&o.go(-1,!1)}).catch(Or),Promise.reject()):(P.delta&&o.go(-P.delta,!1),le(V,k,pe))).then(V=>{V=V||ue(k,pe,!1),V&&(P.delta&&!nt(V,8)?o.go(-P.delta,!1):P.type===Dr.pop&&nt(V,20)&&o.go(-1,!1)),Y(k,pe,V)}).catch(Or)}))}let de=gr(),me=gr(),ve;function le(b,F,P){Ue(b);const k=me.list();return k.length?k.forEach(Z=>Z(b,F,P)):console.error(b),Promise.reject(b)}function ne(){return ve&&l.value!==ht?Promise.resolve():new Promise((b,F)=>{de.add([b,F])})}function Ue(b){return ve||(ve=!b,ie(),de.list().forEach(([F,P])=>b?P(b):F()),de.reset()),b}function Ot(b,F,P,k){const{scrollBehavior:Z}=e;if(!Qt||!Z)return Promise.resolve();const pe=!P&&ad(Di(b.fullPath,0))||(k||!P)&&history.state&&history.state.scroll||null;return Os().then(()=>Z(b,F,pe)).then(V=>V&&sd(V)).catch(V=>le(V,b,F))}const We=b=>o.go(b);let Te;const jt=new Set,Vr={currentRoute:l,listening:!0,addRoute:p,removeRoute:m,hasRoute:A,getRoutes:$,resolve:y,options:e,push:W,replace:K,go:We,back:()=>We(-1),forward:()=>We(1),beforeEach:s.add,beforeResolve:i.add,afterEach:a.add,onError:me.add,isReady:ne,install(b){const F=this;b.component("RouterLink",jd),b.component("RouterView",wc),b.config.globalProperties.$router=F,Object.defineProperty(b.config.globalProperties,"$route",{enumerable:!0,get:()=>be(l)}),Qt&&!Te&&l.value===ht&&(Te=!0,W(o.location).catch(Z=>{}));const P={};for(const Z in ht)P[Z]=ge(()=>l.value[Z]);b.provide(Xn,F),b.provide(Ac,xt(P)),b.provide(Zo,l);const k=b.unmount;jt.add(b),b.unmount=function(){jt.delete(b),jt.size<1&&(u=ht,L&&L(),L=null,l.value=ht,Te=!1,ve=!1),k()}}};return Vr}function zt(e){return e.reduce((t,r)=>t.then(()=>r()),Promise.resolve())}function Qd(e,t){const r=[],n=[],o=[],s=Math.max(t.matched.length,e.matched.length);for(let i=0;i<s;i++){const a=t.matched[i];a&&(e.matched.find(u=>nr(u,a))?n.push(a):r.push(a));const l=e.matched[i];l&&(t.matched.find(u=>nr(u,l))||o.push(l))}return[r,n,o]}function Ds(){return Ve(Xn)}const Us=e=>(Wr("data-v-33f552ac"),e=e(),Br(),e),Yd=Us(()=>R("header",null,[R("h2",null,"Encode/Decode"),R("summary",null,"simple letter for letter substitution ciphers")],-1)),Zd=Us(()=>R("hr",null,null,-1)),Jd=Us(()=>R("footer",null,[R("aside",null," This app is for entertainment and learning purposes only and comes with no warranty. "),R("small",null,[lt(" This project is under an MIT licence and is hosted at "),R("a",{href:"https://github.com/mcshaz/letter-swap-decoder"}," github.com/mcshaz/letter-swap-decoder "),lt(". More detail can be found there. ")]),R("p",null,"version 0.1.3")],-1)),ev=qe({__name:"App",setup(e){return(t,r)=>(X(),z(se,null,[Yd,$e(be(wc)),Zd,Jd],64))}});const ft=(e,t)=>{const r=e.__vccOpts||e;for(const[n,o]of t)r[n]=o;return r},tv=ft(ev,[["__scopeId","data-v-33f552ac"]]);/**
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
*/var rv=typeof Object.defineProperty=="function"?Object.defineProperty:null,nv=rv;/**
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
*/var ov=nv;function sv(){try{return ov({},"x",{}),!0}catch{return!1}}var iv=sv;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var av=Object.defineProperty,lv=av;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var lr=Object.prototype,Zi=lr.toString,Ji=lr.__defineGetter__,ea=lr.__defineSetter__,cv=lr.__lookupGetter__,uv=lr.__lookupSetter__;function fv(e,t,r){var n,o,s,i;if(typeof e!="object"||e===null||Zi.call(e)==="[object Array]")throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if(typeof r!="object"||r===null||Zi.call(r)==="[object Array]")throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if(o="value"in r,o&&(cv.call(e,t)||uv.call(e,t)?(n=e.__proto__,e.__proto__=lr,delete e[t],e[t]=r.value,e.__proto__=n):e[t]=r.value),s="get"in r,i="set"in r,o&&(s||i))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return s&&Ji&&Ji.call(e,t,r.get),i&&ea&&ea.call(e,t,r.set),e}var dv=fv;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var vv=iv,pv=lv,hv=dv,Jo;vv()?Jo=pv:Jo=hv;var gv=Jo;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var mv=gv;function _v(e,t,r){mv(e,t,{configurable:!1,enumerable:!1,writable:!1,value:r})}var yv=_v;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $v=yv,Ws=$v;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var bv=Math.floor,Ev=bv;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Iv=Ev,xr=Iv;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Av=xr;function wv(e){return Av(e)===e&&e>=0}var Nv=wv;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Sv=Nv,Nc=Sv;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ov=xr;function Cv(e){return Ov(e)===e}var Pv=Cv;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Tv=Pv,zn=Tv;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Rv(e){return e!==e}var Fv=Rv;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Lv=Fv,Oe=Lv;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Hv=Number.POSITIVE_INFINITY,Pe=Hv;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Mv=Number;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var kv=Mv,Dv=kv;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Uv=Dv,Wv=Uv.NEGATIVE_INFINITY,Me=Wv;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Bv=Pe,Kv=Me;function xv(e){return e===Bv||e===Kv}var Gv=xv;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var jv=Gv,Gr=jv;/**
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
*/function Vv(e){return Math.abs(e)}var Xv=Vv;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var zv=Xv,Gt=zv;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function qv(){return typeof Symbol=="function"&&typeof Symbol("foo")=="symbol"}var Qv=qv;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Jv=Zv,ep=Jv();function tp(){return ep&&typeof Symbol.toStringTag=="symbol"}var rp=tp;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var sp=Object.prototype.toString,Sc=sp;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ip=Sc;function ap(e){return ip.call(e)}var lp=ap;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var cp=Object.prototype.hasOwnProperty;function up(e,t){return e==null?!1:cp.call(e,t)}var fp=up;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var dp=fp,vp=dp;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var pp=typeof Symbol=="function"?Symbol.toStringTag:"",hp=pp;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var gp=vp,mr=hp,fo=Sc;function mp(e){var t,r,n;if(e==null)return fo.call(e);r=e[mr],t=gp(e,mr);try{e[mr]=void 0}catch{return fo.call(e)}return n=fo.call(e),t?e[mr]=r:delete e[mr],n}var _p=mp;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var yp=op,$p=lp,bp=_p,es;yp()?es=bp:es=$p;var qn=es;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ep=qn,Ip=typeof Uint32Array=="function";function Ap(e){return Ip&&e instanceof Uint32Array||Ep(e)==="[object Uint32Array]"}var wp=Ap;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Np=wp,Sp=Np;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Op=4294967295,Cp=Op;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Pp=typeof Uint32Array=="function"?Uint32Array:null,Tp=Pp;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Rp=Sp,vo=Cp,ta=Tp;function Fp(){var e,t;if(typeof ta!="function")return!1;try{t=[1,3.14,-3.14,vo+1,vo+2],t=new ta(t),e=Rp(t)&&t[0]===1&&t[1]===3&&t[2]===vo-2&&t[3]===0&&t[4]===1}catch{e=!1}return e}var Lp=Fp;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Hp=Lp,Mp=Hp;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var kp=typeof Uint32Array=="function"?Uint32Array:void 0,Dp=kp;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Up(){throw new Error("not implemented")}var Wp=Up;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Bp=Mp,Kp=Dp,xp=Wp,ts;Bp()?ts=Kp:ts=xp;var cr=ts;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Gp=qn,jp=typeof Float64Array=="function";function Vp(e){return jp&&e instanceof Float64Array||Gp(e)==="[object Float64Array]"}var Xp=Vp;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var zp=Xp,qp=zp;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Qp=typeof Float64Array=="function"?Float64Array:null,Yp=Qp;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Zp=qp,ra=Yp;function Jp(){var e,t;if(typeof ra!="function")return!1;try{t=new ra([1,3.14,-3.14,NaN]),e=Zp(t)&&t[0]===1&&t[1]===3.14&&t[2]===-3.14&&t[3]!==t[3]}catch{e=!1}return e}var e1=Jp;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var t1=e1,r1=t1;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var n1=typeof Float64Array=="function"?Float64Array:void 0,o1=n1;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function s1(){throw new Error("not implemented")}var i1=s1;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var a1=r1,l1=o1,c1=i1,rs;a1()?rs=l1:rs=c1;var ur=rs;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var u1=qn,f1=typeof Uint8Array=="function";function d1(e){return f1&&e instanceof Uint8Array||u1(e)==="[object Uint8Array]"}var v1=d1;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var g1=255,m1=g1;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _1=typeof Uint8Array=="function"?Uint8Array:null,y1=_1;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $1=h1,po=m1,na=y1;function b1(){var e,t;if(typeof na!="function")return!1;try{t=[1,3.14,-3.14,po+1,po+2],t=new na(t),e=$1(t)&&t[0]===1&&t[1]===3&&t[2]===po-2&&t[3]===0&&t[4]===1}catch{e=!1}return e}var E1=b1;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var I1=E1,A1=I1;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var w1=typeof Uint8Array=="function"?Uint8Array:void 0,N1=w1;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function S1(){throw new Error("not implemented")}var O1=S1;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var C1=A1,P1=N1,T1=O1,ns;C1()?ns=P1:ns=T1;var R1=ns;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var F1=qn,L1=typeof Uint16Array=="function";function H1(e){return L1&&e instanceof Uint16Array||F1(e)==="[object Uint16Array]"}var M1=H1;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var U1=65535,W1=U1;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var B1=typeof Uint16Array=="function"?Uint16Array:null,K1=B1;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var x1=D1,ho=W1,oa=K1;function G1(){var e,t;if(typeof oa!="function")return!1;try{t=[1,3.14,-3.14,ho+1,ho+2],t=new oa(t),e=x1(t)&&t[0]===1&&t[1]===3&&t[2]===ho-2&&t[3]===0&&t[4]===1}catch{e=!1}return e}var j1=G1;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var V1=j1,X1=V1;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var z1=typeof Uint16Array=="function"?Uint16Array:void 0,q1=z1;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Q1(){throw new Error("not implemented")}var Y1=Q1;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Z1=X1,J1=q1,eh=Y1,os;Z1()?os=J1:os=eh;var th=os;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var rh=R1,nh=th,oh={uint16:nh,uint8:rh},sh=oh;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var sa=sh,Oc;function ih(){var e,t;return e=new sa.uint16(1),e[0]=4660,t=new sa.uint8(e.buffer),t[0]===52}Oc=ih();var ah=Oc;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var lh=ah,fr=lh;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ch=fr,ss;ch===!0?ss=1:ss=0;var uh=ss;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var fh=cr,dh=ur,vh=uh,Cc=new dh(1),ph=new fh(Cc.buffer);function hh(e){return Cc[0]=e,ph[vh]}var gh=hh;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var mh=gh,Qe=mh;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _h=fr,is;_h===!0?is=1:is=0;var yh=is;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $h=cr,bh=ur,Eh=yh,as=new bh(1),Ih=new $h(as.buffer);function Ah(e,t){return as[0]=e,Ih[Eh]=t>>>0,as[0]}var wh=Ah;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Nh=wh,Qn=Nh;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Sh=1023,dr=Sh;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Oh(e){return e===0?.3999999999940942:.3999999999940942+e*(.22222198432149784+e*.15313837699209373)}var Ch=Oh;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Ph(e){return e===0?.6666666666666735:.6666666666666735+e*(.2857142874366239+e*(.1818357216161805+e*.14798198605116586))}var Th=Ph;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var ia=Qe,Rh=Qn,Fh=Oe,Lh=dr,Hh=Me,Mh=Ch,kh=Th,Jr=.6931471803691238,en=19082149292705877e-26,Dh=0x40000000000000,Uh=.3333333333333333,aa=1048575,Wh=2146435072,Bh=1048576,Kh=1072693248;function xh(e){var t,r,n,o,s,i,a,l,u,c,f,v;return e===0?Hh:Fh(e)||e<0?NaN:(r=ia(e),s=0,r<Bh&&(s-=54,e*=Dh,r=ia(e)),r>=Wh?e+e:(s+=(r>>20)-Lh|0,r&=aa,l=r+614244&1048576|0,e=Rh(e,r|l^Kh),s+=l>>20|0,a=e-1,(aa&2+r)<3?a===0?s===0?0:s*Jr+s*en:(i=a*a*(.5-Uh*a),s===0?a-i:s*Jr-(i-s*en-a)):(c=a/(2+a),v=c*c,l=r-398458|0,f=v*v,u=440401-r|0,o=f*Mh(f),n=v*kh(f),l|=u,i=n+o,l>0?(t=.5*a*a,s===0?a-(t-c*(t+i)):s*Jr-(t-(c*(t+i)+s*en)-a)):s===0?a-c*(a-i):s*Jr-(c*(a-i)-s*en-a))))}var Gh=xh;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var jh=Gh,jr=jh;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Vh=Math.ceil,Xh=Vh;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var zh=Xh,qh=zh;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Qh=xr,Yh=qh;function Zh(e){return e<0?Yh(e):Qh(e)}var Jh=Zh;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e2=Jh,Pc=e2;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function t2(e){return e===0?.0416666666666666:.0416666666666666+e*(-.001388888888887411+e*2480158728947673e-20)}var r2=t2;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function n2(e){return e===0?-27557314351390663e-23:-27557314351390663e-23+e*(2087572321298175e-24+e*-11359647557788195e-27)}var o2=n2;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var s2=r2,i2=o2;function a2(e,t){var r,n,o,s;return s=e*e,o=s*s,n=s*s2(s),n+=o*o*i2(s),r=.5*s,o=1-r,o+(1-o-r+(s*n-e*t))}var l2=a2;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var c2=l2,Tc=c2;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var la=-.16666666666666632,u2=.00833333333332249,f2=-.0001984126982985795,d2=27557313707070068e-22,v2=-25050760253406863e-24,p2=158969099521155e-24;function h2(e,t){var r,n,o,s;return s=e*e,o=s*s,r=u2+s*(f2+s*d2)+s*o*(v2+s*p2),n=s*e,t===0?e+n*(la+s*r):e-(s*(.5*t-n*r)-t-n*la)}var g2=h2;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var m2=g2,Rc=m2;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _2=fr,ls;_2===!0?ls=0:ls=1;var y2=ls;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $2=cr,b2=ur,E2=y2,Fc=new b2(1),I2=new $2(Fc.buffer);function A2(e){return Fc[0]=e,I2[E2]}var w2=A2;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var N2=w2,S2=N2;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var O2=fr,Lc,cs,us;O2===!0?(cs=1,us=0):(cs=0,us=1);Lc={HIGH:cs,LOW:us};var C2=Lc;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var P2=cr,T2=ur,Hc=C2,Mc=new T2(1),ca=new P2(Mc.buffer),R2=Hc.HIGH,F2=Hc.LOW;function L2(e,t){return ca[R2]=e,ca[F2]=t,Mc[0]}var H2=L2;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var M2=H2,Bs=M2;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var k2=1023,D2=k2;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var U2=-1023,W2=U2;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var B2=-1074,K2=B2;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var x2=fr,kc,fs,ds;x2===!0?(fs=1,ds=0):(fs=0,ds=1);kc={HIGH:fs,LOW:ds};var G2=kc;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var j2=cr,V2=ur,Dc=G2,Uc=new V2(1),ua=new j2(Uc.buffer),X2=Dc.HIGH,z2=Dc.LOW;function q2(e,t){return Uc[0]=t,e[0]=ua[X2],e[1]=ua[z2],e}var Q2=q2;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var fa=Q2;function Y2(e,t){return arguments.length===1?fa([0,0],e):fa(e,t)}var Z2=Y2;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var J2=Z2,Ks=J2;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var eg=Ks,tg=Qe,rg=Bs,ng=2147483648>>>0,og=2147483647,go=[0,0];function sg(e,t){var r,n;return eg(go,e),r=go[0],r&=og,n=tg(t),n&=ng,r|=n,rg(r,go[1])}var ig=sg;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ag=ig,xs=ag;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var lg=22250738585072014e-324,cg=lg;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ug=cg,fg=Gr,dg=Oe,vg=Gt,pg=4503599627370496;function hg(e,t,r,n){return dg(e)||fg(e)?(t[n]=e,t[n+r]=0,t):e!==0&&vg(e)<ug?(t[n]=e*pg,t[n+r]=-52,t):(t[n]=e,t[n+r]=0,t)}var Wc=hg;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var gg=Wc;function mg(e){return gg(e,[0,0],1,0)}var _g=mg;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var yg=Ws,Bc=_g,$g=Wc;yg(Bc,"assign",$g);var bg=Bc;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Eg=2146435072,Ig=Eg;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ag=Qe,wg=Ig,Ng=dr;function Sg(e){var t=Ag(e);return t=(t&wg)>>>20,t-Ng|0}var Og=Sg;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Cg=Og,Pg=Cg;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Tg=Pe,Rg=Me,Fg=dr,Lg=D2,Hg=W2,Mg=K2,kg=Oe,Dg=Gr,Ug=xs,Wg=bg.assign,Bg=Pg,Kg=Ks,xg=Bs,Gg=2220446049250313e-31,jg=2148532223>>>0,mo=[0,0],_o=[0,0];function Vg(e,t){var r,n;return t===0||e===0||kg(e)||Dg(e)?e:(Wg(e,mo,1,0),e=mo[0],t+=mo[1],t+=Bg(e),t<Mg?Ug(0,e):t>Lg?e<0?Rg:Tg:(t<=Hg?(t+=52,n=Gg):n=1,Kg(_o,e),r=_o[0],r&=jg,r|=t+Fg<<20,n*xg(r,_o[1])))}var Xg=Vg;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var zg=Xg,Gs=zg;/**
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
*/function qg(e,t){var r,n;for(r=[],n=0;n<t;n++)r.push(e);return r}var Qg=qg;/**
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
*/var Yg=Qg,Zg=Yg;/**
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
*/var Jg=Zg;function em(e){return Jg(0,e)}var tm=em;/**
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
*/var rm=tm,nm=rm;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var om=xr,tn=Gs,Yn=nm,Kc=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],sm=[1.570796251296997,7549789415861596e-23,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],yo=16777216,$o=5960464477539063e-23,rn=Yn(20),da=Yn(20),nn=Yn(20),Ae=Yn(20);function xc(e,t,r,n,o,s,i,a,l){var u,c,f,v,p,m,$,A,y;for(v=s,y=n[r],A=r,p=0;A>0;p++)c=$o*y|0,Ae[p]=y-yo*c|0,y=n[A-1]+c,A-=1;if(y=tn(y,o),y-=8*om(y*.125),$=y|0,y-=$,f=0,o>0?(p=Ae[r-1]>>24-o,$+=p,Ae[r-1]-=p<<24-o,f=Ae[r-1]>>23-o):o===0?f=Ae[r-1]>>23:y>=.5&&(f=2),f>0){for($+=1,u=0,p=0;p<r;p++)A=Ae[p],u===0?A!==0&&(u=1,Ae[p]=16777216-A):Ae[p]=16777215-A;if(o>0)switch(o){case 1:Ae[r-1]&=8388607;break;case 2:Ae[r-1]&=4194303;break}f===2&&(y=1-y,u!==0&&(y-=tn(1,o)))}if(y===0){for(A=0,p=r-1;p>=s;p--)A|=Ae[p];if(A===0){for(m=1;Ae[s-m]===0;m++);for(p=r+1;p<=r+m;p++){for(l[a+p]=Kc[i+p],c=0,A=0;A<=a;A++)c+=e[A]*l[a+(p-A)];n[p]=c}return r+=m,xc(e,t,r,n,o,s,i,a,l)}}if(y===0)for(r-=1,o-=24;Ae[r]===0;)r-=1,o-=24;else y=tn(y,-o),y>=yo?(c=$o*y|0,Ae[r]=y-yo*c|0,r+=1,o+=24,Ae[r]=c):Ae[r]=y|0;for(c=tn(1,o),p=r;p>=0;p--)n[p]=c*Ae[p],c*=$o;for(p=r;p>=0;p--){for(c=0,m=0;m<=v&&m<=r-p;m++)c+=sm[m]*n[p+m];nn[r-p]=c}for(c=0,p=r;p>=0;p--)c+=nn[p];for(f===0?t[0]=c:t[0]=-c,c=nn[0]-c,p=1;p<=r;p++)c+=nn[p];return f===0?t[1]=c:t[1]=-c,$&7}function im(e,t,r,n){var o,s,i,a,l,u,c,f,v;for(s=4,a=n-1,i=(r-3)/24|0,i<0&&(i=0),u=r-24*(i+1),f=i-a,v=a+s,c=0;c<=v;c++)f<0?rn[c]=0:rn[c]=Kc[f],f+=1;for(c=0;c<=s;c++){for(o=0,f=0;f<=a;f++)o+=e[f]*rn[a+(c-f)];da[c]=o}return l=s,xc(e,t,l,da,u,s,i,a,rn)}var am=im;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var lm=Math.round,cm=lm;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var um=cm,fm=um;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var dm=fm,va=Qe,vm=.6366197723675814,pm=1.5707963267341256,hm=6077100506506192e-26,gm=6077100506303966e-26,mm=20222662487959506e-37,_m=20222662487111665e-37,ym=84784276603689e-45,pa=2047;function $m(e,t,r){var n,o,s,i,a,l,u;return o=dm(e*vm),i=e-o*pm,a=o*hm,u=t>>20|0,r[0]=i-a,n=va(r[0]),l=u-(n>>20&pa),l>16&&(s=i,a=o*gm,i=s-a,a=o*mm-(s-i-a),r[0]=i-a,n=va(r[0]),l=u-(n>>20&pa),l>49&&(s=i,a=o*_m,i=s-a,a=o*ym-(s-i-a),r[0]=i-a)),r[1]=i-r[0]-a,o}var bm=$m;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Em=Qe,Im=S2,Am=Bs,wm=am,on=bm,Nm=0,Sm=16777216,gt=1.5707963267341256,Ut=6077100506506192e-26,sn=2*Ut,an=3*Ut,ln=4*Ut,Om=2147483647,Cm=2146435072,Pm=1048575,Tm=598523,Rm=1072243195,Fm=1073928572,Lm=1074752122,Hm=1074977148,Mm=1075183036,km=1075388923,Dm=1075594811,Um=1094263291,_r=[0,0,0],yr=[0,0];function Wm(e,t){var r,n,o,s,i,a,l,u;if(o=Em(e),s=o&Om|0,s<=Rm)return t[0]=e,t[1]=0,0;if(s<=Lm)return(s&Pm)===Tm?on(e,s,t):s<=Fm?e>0?(u=e-gt,t[0]=u-Ut,t[1]=u-t[0]-Ut,1):(u=e+gt,t[0]=u+Ut,t[1]=u-t[0]+Ut,-1):e>0?(u=e-2*gt,t[0]=u-sn,t[1]=u-t[0]-sn,2):(u=e+2*gt,t[0]=u+sn,t[1]=u-t[0]+sn,-2);if(s<=Dm)return s<=Mm?s===Hm?on(e,s,t):e>0?(u=e-3*gt,t[0]=u-an,t[1]=u-t[0]-an,3):(u=e+3*gt,t[0]=u+an,t[1]=u-t[0]+an,-3):s===km?on(e,s,t):e>0?(u=e-4*gt,t[0]=u-ln,t[1]=u-t[0]-ln,4):(u=e+4*gt,t[0]=u+ln,t[1]=u-t[0]+ln,-4);if(s<Um)return on(e,s,t);if(s>=Cm)return t[0]=NaN,t[1]=NaN,0;for(r=Im(e),n=(s>>20)-1046,u=Am(s-(n<<20|0),r),a=0;a<2;a++)_r[a]=u|0,u=(u-_r[a])*Sm;for(_r[2]=u,i=3;_r[i-1]===Nm;)i-=1;return l=wm(_r,yr,n,i),e<0?(t[0]=-yr[0],t[1]=-yr[1],-l):(t[0]=yr[0],t[1]=yr[1],l)}var Bm=Wm;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Km=Bm,Gc=Km;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var xm=Qe,bo=Tc,ha=Rc,Gm=Gc,ot=[0,0],jm=2147483647,Vm=1072243195,Xm=1044381696,zm=2146435072;function qm(e){var t,r;if(t=xm(e),t&=jm,t<=Vm)return t<Xm?1:bo(e,0);if(t>=zm)return NaN;switch(r=Gm(e,ot),r&3){case 0:return bo(ot[0],ot[1]);case 1:return-ha(ot[0],ot[1]);case 2:return-bo(ot[0],ot[1]);default:return ha(ot[0],ot[1])}}var Qm=qm;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ym=Qm,Zm=Ym;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Jm=Qe,ga=Tc,Eo=Rc,e_=Gc,t_=2147483647,r_=2146435072,n_=1072243195,o_=1045430272,st=[0,0];function s_(e){var t,r;if(t=Jm(e),t&=t_,t<=n_)return t<o_?e:Eo(e,0);if(t>=r_)return NaN;switch(r=e_(e,st),r&3){case 0:return Eo(st[0],st[1]);case 1:return ga(st[0],st[1]);case 2:return-Eo(st[0],st[1]);default:return-ga(st[0],st[1])}}var i_=s_;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var a_=i_,jc=a_;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var l_=3.141592653589793,js=l_;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var c_=Oe,u_=Gr,ma=Zm,Io=jc,f_=Gt,$r=xs,br=js;function d_(e){var t,r;return c_(e)?NaN:u_(e)?NaN:(r=e%2,t=f_(r),t===0||t===1?$r(0,r):t<.25?Io(br*r):t<.75?(t=.5-t,$r(ma(br*t),r)):t<1.25?(r=$r(1,r)-r,Io(br*r)):t<1.75?(t-=1.5,-$r(ma(br*t),r)):(r-=$r(2,r),Io(br*r)))}var v_=d_;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var p_=v_,h_=p_;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function g_(e){return e===0?.06735230105312927:.06735230105312927+e*(.007385550860814029+e*(.0011927076318336207+e*(.00022086279071390839+e*25214456545125733e-21)))}var m_=g_;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function __(e){return e===0?.020580808432516733:.020580808432516733+e*(.0028905138367341563+e*(.0005100697921535113+e*(.00010801156724758394+e*44864094961891516e-21)))}var y_=__;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function $_(e){return e===0?1.3920053346762105:1.3920053346762105+e*(.7219355475671381+e*(.17193386563280308+e*(.01864591917156529+e*(.0007779424963818936+e*7326684307446256e-21))))}var b_=$_;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function E_(e){return e===0?.21498241596060885:.21498241596060885+e*(.325778796408931+e*(.14635047265246445+e*(.02664227030336386+e*(.0018402845140733772+e*3194753265841009e-20))))}var I_=E_;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function A_(e){return e===0?-.032788541075985965:-.032788541075985965+e*(.006100538702462913+e*(-.0014034646998923284+e*.00031563207090362595))}var w_=A_;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function N_(e){return e===0?.01797067508118204:.01797067508118204+e*(-.0036845201678113826+e*(.000881081882437654+e*-.00031275416837512086))}var S_=N_;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function O_(e){return e===0?-.010314224129834144:-.010314224129834144+e*(.0022596478090061247+e*(-.0005385953053567405+e*.0003355291926355191))}var C_=O_;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function P_(e){return e===0?.6328270640250934:.6328270640250934+e*(1.4549225013723477+e*(.9777175279633727+e*(.22896372806469245+e*.013381091853678766)))}var T_=P_;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function R_(e){return e===0?2.4559779371304113:2.4559779371304113+e*(2.128489763798934+e*(.7692851504566728+e*(.10422264559336913+e*.003217092422824239)))}var F_=R_;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function L_(e){return e===0?.08333333333333297:.08333333333333297+e*(-.0027777777772877554+e*(.0007936505586430196+e*(-.00059518755745034+e*(.0008363399189962821+e*-.0016309293409657527))))}var H_=L_;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var M_=Oe,k_=Gr,D_=Gt,qt=jr,U_=Pc,W_=h_,B_=js,Ao=Pe,K_=m_,x_=y_,G_=b_,j_=I_,V_=w_,X_=S_,z_=C_,q_=T_,Q_=F_,Y_=H_,Z_=.07721566490153287,J_=.3224670334241136,e3=1,t3=-.07721566490153287,r3=.48383612272381005,n3=-.1475877229945939,o3=.06462494023913339,s3=-.07721566490153287,i3=1,a3=.4189385332046727,cn=1.4616321449683622,l3=4503599627370496,c3=0x400000000000000,u3=8470329472543003e-37,_a=1.4616321449683622,f3=-.12148629053584961,d3=-3638676997039505e-33;function v3(e){var t,r,n,o,s,i,a,l,u,c,f,v,p;if(M_(e)||k_(e))return e;if(e===0)return Ao;if(e<0?(t=!0,e=-e):t=!1,e<u3)return-qt(e);if(t){if(e>=l3||(u=W_(e),u===0))return Ao;r=qt(B_/D_(u*e))}if(e===1||e===2)return 0;if(e<2)switch(e<=.9?(p=-qt(e),e>=cn-1+.27?(f=1-e,n=0):e>=cn-1-.27?(f=e-(_a-1),n=1):(f=e,n=2)):(p=0,e>=cn+.27?(f=2-e,n=0):e>=cn-.27?(f=e-_a,n=1):(f=e-1,n=2)),n){case 0:v=f*f,i=Z_+v*K_(v),s=v*(J_+v*x_(v)),a=f*i+s,p+=a-.5*f;break;case 1:v=f*f,c=v*f,i=r3+c*V_(c),s=n3+c*X_(c),o=o3+c*z_(c),a=v*i-(d3-c*(s+f*o)),p+=f3+a;break;case 2:i=f*(s3+f*q_(f)),s=i3+f*Q_(f),p+=-.5*f+i/s;break}else if(e<8)switch(n=U_(e),f=e-n,a=f*(t3+f*j_(f)),l=e3+f*G_(f),p=.5*f+a/l,v=1,n){case 7:v*=f+6;case 6:v*=f+5;case 5:v*=f+4;case 4:v*=f+3;case 3:v*=f+2,p+=qt(v)}else e<c3?(u=qt(e),v=1/e,f=v*v,c=a3+v*Y_(f),p=(e-.5)*(u-1)+c):p=e*(qt(e)-1);return t&&(p=r-p),p}var p3=v3;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var h3=p3,g3=h3;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function m3(e){return e===0?.6666666666666735:.6666666666666735+e*(.3999999999940942+e*(.2857142874366239+e*(.22222198432149784+e*(.1818357216161805+e*(.15313837699209373+e*.14798198605116586)))))}var _3=m3;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var y3=Oe,ya=Qe,$a=Qn,$3=Pe,b3=Me,ba=dr,E3=_3,wo=.6931471803691238,No=19082149292705877e-26,I3=.41421356237309503,A3=-.2928932188134525,w3=1862645149230957e-24,N3=5551115123125783e-32,S3=9007199254740992,O3=.6666666666666666;function C3(e){var t,r,n,o,s,i,a,l,u,c;if(e<-1||y3(e))return NaN;if(e===-1)return b3;if(e===$3||e===0)return e;if(e<0?n=-e:n=e,c=1,n<I3){if(n<w3)return n<N3?e:e-e*e*.5;e>A3&&(c=0,o=e,r=1)}return c!==0&&(n<S3?(u=1+e,r=ya(u),c=(r>>20)-ba,c>0?s=1-(u-e):s=e-(u-1),s/=u):(u=e,r=ya(u),c=(r>>20)-ba,s=0),r&=1048575,r<434334?u=$a(u,r|1072693248):(c+=1,u=$a(u,r|1071644672),r=1048576-r>>2),o=u-1),t=.5*o*o,r===0?o===0?(s+=c*No,c*wo+s):(l=t*(1-O3*o),c*wo-(l-(c*No+s)-o)):(i=o/(2+o),a=i*i,l=a*E3(a),c===0?o-(t-i*(t+l)):c*wo-(t-(i*(t+l)+(c*No+s))-o))}var P3=C3;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var T3=P3,Vs=T3;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var R3=Me;function F3(e){return e===0&&1/e===R3}var L3=F3;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var H3=L3,Vc=H3;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var M3=2.5066282746310007,k3=M3;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var D3=zn;function U3(e){return D3(e/2)}var W3=U3;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var B3=W3,K3=B3;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ea=K3;function x3(e){return e>0?Ea(e-1):Ea(e+1)}var G3=x3;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var j3=G3,Xc=j3;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var V3=Math.sqrt,X3=V3;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var z3=X3,q3=z3;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Q3=fr,vs;Q3===!0?vs=0:vs=1;var Y3=vs;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Z3=cr,J3=ur,e6=Y3,ps=new J3(1),t6=new Z3(ps.buffer);function r6(e,t){return ps[0]=e,t6[e6]=t>>>0,ps[0]}var n6=r6;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var o6=n6,Zn=o6;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function s6(e){return e|0}var i6=s6;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var a6=i6,zc=a6;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Ia=Xc,l6=xs,c6=Me,un=Pe;function u6(e,t){return t===c6?un:t===un?0:t>0?Ia(t)?e:0:Ia(t)?l6(un,e):un}var f6=u6;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var d6=Qe,v6=2147483647,p6=1072693247,fn=1e300,dn=1e-300;function h6(e,t){var r,n;return n=d6(e),r=n&v6,r<=p6?t<0?fn*fn:dn*dn:t>0?fn*fn:dn*dn}var g6=h6;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var m6=Gt,Aa=Pe;function _6(e,t){return e===-1?(e-e)/(e-e):e===1?1:m6(e)<1==(t===Aa)?0:Aa}var y6=_6;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function $6(e){return e===0?.5999999999999946:.5999999999999946+e*(.4285714285785502+e*(.33333332981837743+e*(.272728123808534+e*(.23066074577556175+e*.20697501780033842))))}var b6=$6;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var E6=Qe,vn=Zn,wa=Qn,I6=dr,A6=b6,w6=1048575,Na=1048576,N6=1072693248,S6=536870912,O6=524288,C6=20,P6=9007199254740992,T6=.9617966939259756,R6=.9617967009544373,F6=-7028461650952758e-24,L6=[1,1.5],H6=[0,.5849624872207642],M6=[0,1350039202129749e-23];function k6(e,t,r){var n,o,s,i,a,l,u,c,f,v,p,m,$,A,y,H,S,W,K,te,G,C;return te=0,r<Na&&(t*=P6,te-=53,r=E6(t)),te+=(r>>C6)-I6|0,G=r&w6|0,r=G|N6|0,G<=235662?C=0:G<767610?C=1:(C=0,te+=1,r-=Na),t=wa(t,r),c=L6[C],W=t-c,K=1/(t+c),o=W*K,i=vn(o,0),n=(r>>1|S6)+O6,n+=C<<18,l=wa(0,n),u=t-(l-c),a=K*(W-i*l-i*u),s=o*o,S=s*s*A6(s),S+=a*(i+o),s=i*i,l=3+s+S,l=vn(l,0),u=S-(l-3-s),W=i*l,K=a*l+u*o,v=W+K,v=vn(v,0),p=K-(v-W),m=R6*v,$=F6*v+p*T6+M6[C],f=H6[C],H=te,A=m+$+f+H,A=vn(A,0),y=$-(A-H-f-m),e[0]=A,e[1]=y,e}var D6=k6;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function U6(e){return e===0?.5:.5+e*(-.3333333333333333+e*.25)}var W6=U6;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var B6=Zn,K6=W6,x6=1.4426950408889634,G6=1.4426950216293335,j6=19259629911266175e-24;function V6(e,t){var r,n,o,s,i,a;return o=t-1,s=o*o*K6(o),i=G6*o,a=o*j6-s*x6,n=i+a,n=B6(n,0),r=a-(n-i),e[0]=n,e[1]=r,e}var X6=V6;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var z6=.6931471805599453,q6=z6;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Q6(e){return e===0?.16666666666666602:.16666666666666602+e*(-.0027777777777015593+e*(6613756321437934e-20+e*(-16533902205465252e-22+e*41381367970572385e-24)))}var Y6=Q6;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Z6=Qe,Sa=Qn,J6=Zn,e4=zc,t4=Gs,r4=q6,Oa=dr,n4=Y6,Ca=2147483647,Pa=1048575,Ta=1048576,o4=1071644672,Er=20,s4=.6931471824645996,i4=-1904654299957768e-24;function a4(e,t,r){var n,o,s,i,a,l,u,c,f,v,p;return v=e&Ca|0,p=(v>>Er)-Oa|0,f=0,v>o4&&(f=e+(Ta>>p+1)>>>0,p=((f&Ca)>>Er)-Oa|0,n=(f&~(Pa>>p))>>>0,s=Sa(0,n),f=(f&Pa|Ta)>>Er-p>>>0,e<0&&(f=-f),t-=s),s=r+t,s=J6(s,0),a=s*s4,l=(r-(s-t))*r4+s*i4,c=a+l,u=l-(c-a),s=c*c,o=c-s*n4(s),i=c*o/(o-2)-(u+c*u),c=1-(i-c),e=Z6(c),e=e4(e),e+=f<<Er>>>0,e>>Er<=0?c=t4(c,f):c=Sa(c,e),c}var l4=a4;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Ra=Oe,Fa=Xc,La=Gr,c4=zn,Ha=q3,u4=Gt,So=Ks,f4=Zn,Ma=zc,d4=Me,v4=Pe,p4=f6,h4=g6,g4=y6,m4=D6,_4=X6,y4=l4,Oo=2147483647,$4=1072693247,b4=1105199104,E4=1139802112,ka=1083179008,I4=1072693248,A4=1083231232,w4=3230714880>>>0,Da=31,mt=1e300,_t=1e-300,N4=8008566259537294e-32,it=[0,0],Ua=[0,0];function qc(e,t){var r,n,o,s,i,a,l,u,c,f,v,p,m,$,A,y;if(Ra(e)||Ra(t))return NaN;if(So(it,t),a=it[0],l=it[1],l===0){if(t===0)return 1;if(t===1)return e;if(t===-1)return 1/e;if(t===.5)return Ha(e);if(t===-.5)return 1/Ha(e);if(t===2)return e*e;if(t===3)return e*e*e;if(t===4)return e*=e,e*e;if(La(t))return g4(e,t)}if(So(it,e),s=it[0],i=it[1],i===0){if(s===0)return p4(e,t);if(e===1)return 1;if(e===-1&&Fa(t))return-1;if(La(e))return e===d4?qc(-0,-t):t<0?0:v4}if(e<0&&c4(t)===!1)return(e-e)/(e-e);if(o=u4(e),r=s&Oo|0,n=a&Oo|0,u=s>>>Da|0,c=a>>>Da|0,u&&Fa(t)?u=-1:u=1,n>b4){if(n>E4)return h4(e,t);if(r<$4)return c===1?u*mt*mt:u*_t*_t;if(r>I4)return c===0?u*mt*mt:u*_t*_t;m=_4(Ua,o)}else m=m4(Ua,o,r);if(f=f4(t,0),p=(t-f)*m[0]+t*m[1],v=f*m[0],$=p+v,So(it,$),A=Ma(it[0]),y=Ma(it[1]),A>=ka){if((A-ka|y)!==0||p+N4>$-v)return u*mt*mt}else if((A&Oo)>=A4&&((A-w4|y)!==0||p<=$-v))return u*_t*_t;return $=y4(A,v,p),u*$}var S4=qc;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var O4=S4,Qc=O4;/**
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
*/function C4(e){return e===0?.16666666666666602:.16666666666666602+e*(-.0027777777777015593+e*(6613756321437934e-20+e*(-16533902205465252e-22+e*41381367970572385e-24)))}var P4=C4;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var T4=Gs,R4=P4;function F4(e,t,r){var n,o,s,i;return n=e-t,o=n*n,s=n-o*R4(o),i=1-(t-n*s/(2-s)-e),T4(i,r)}var L4=F4;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var H4=Oe,Wa=Pc,M4=Me,Ba=Pe,k4=L4,D4=.6931471803691238,U4=19082149292705877e-26,Ka=1.4426950408889634,W4=709.782712893384,B4=-745.1332191019411,Yc=1/(1<<28),K4=-Yc;function x4(e){var t,r,n;return H4(e)||e===Ba?e:e===M4?0:e>W4?Ba:e<B4?0:e>K4&&e<Yc?1+e:(e<0?n=Wa(Ka*e-.5):n=Wa(Ka*e+.5),t=e-n*D4,r=n*U4,k4(t,r,n))}var G4=x4;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var j4=G4,Xs=j4;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function V4(e){return e===0?.08333333333334822:.08333333333334822+e*(.0034722222160545866+e*(-.0026813261780578124+e*(-.00022954996161337813+e*.0007873113957930937)))}var X4=V4;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var z4=k3,xa=Qc,q4=Xs,Q4=X4,Y4=143.01608;function Z4(e){var t,r,n;return t=1/e,t=1+t*Q4(t),r=q4(e),e>Y4?(n=xa(e,.5*e-.25),r=n*(n/r)):r=xa(e,e-.5)/r,z4*r*t}var J4=Z4;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ey=.5772156649015329,ty=ey;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var ry=ty;function ny(e,t){return t/((1+ry*e)*e)}var oy=ny;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function sy(e){var t,r,n;return e===0?1:(e<0?t=-e:t=e,t<=1?(r=1+e*(.4942148268014971+e*(.20744822764843598+e*(.04763678004571372+e*(.010421379756176158+e*(.0011913514700658638+e*(.00016011952247675185+e*0)))))),n=1+e*(.0714304917030273+e*(-.23459179571824335+e*(.035823639860549865+e*(.011813978522206043+e*(-.004456419138517973+e*(.0005396055804933034+e*-23158187332412014e-21))))))):(e=1/e,r=0+e*(.00016011952247675185+e*(.0011913514700658638+e*(.010421379756176158+e*(.04763678004571372+e*(.20744822764843598+e*(.4942148268014971+e*1)))))),n=-23158187332412014e-21+e*(.0005396055804933034+e*(-.004456419138517973+e*(.011813978522206043+e*(.035823639860549865+e*(-.23459179571824335+e*(.0714304917030273+e*1))))))),r/n)}var iy=sy;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var ay=Oe,ly=zn,cy=Vc,Ga=Gt,uy=xr,fy=jc,ja=Pe,Va=Me,Xa=js,za=J4,qa=oy,dy=iy;function vy(e){var t,r,n,o;if(ly(e)&&e<0||e===Va||ay(e))return NaN;if(e===0)return cy(e)?Va:ja;if(e>171.61447887182297)return ja;if(e<-170.5674972726612)return 0;if(r=Ga(e),r>33)return e>=0?za(e):(n=uy(r),(n&1)===0?t=-1:t=1,o=r-n,o>.5&&(n+=1,o=r-n),o=r*fy(Xa*o),t*Xa/(Ga(o)*za(r)));for(o=1;e>=3;)e-=1,o*=e;for(;e<0;){if(e>-1e-9)return qa(e,o);o/=e,e+=1}for(;e<2;){if(e<1e-9)return qa(e,o);o/=e,e+=1}return e===2?o:(e-=2,o*dy(e))}var py=vy;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var hy=py,gy=hy;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var my=Pe;function _y(e){return e===0&&1/e===my}var yy=_y;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $y=yy,by=$y;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Qa=by,Co=Oe,Ey=Me,pn=Pe;function Iy(e,t){var r,n,o,s;if(r=arguments.length,r===2)return Co(e)||Co(t)?NaN:e===pn||t===pn?pn:e===t&&e===0?Qa(e)?e:t:e>t?e:t;for(n=Ey,s=0;s<r;s++){if(o=arguments[s],Co(o)||o===pn)return o;(o>n||o===n&&o===0&&Qa(o))&&(n=o)}return n}var Ay=Iy;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var wy=Ay,Ny=wy;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ya=Vc,Po=Oe,hn=Me,Sy=Pe;function Oy(e,t){var r,n,o,s;if(r=arguments.length,r===2)return Po(e)||Po(t)?NaN:e===hn||t===hn?hn:e===t&&e===0?Ya(e)?e:t:e<t?e:t;for(n=Sy,s=0;s<r;s++){if(o=arguments[s],Po(o)||o===hn)return o;(o<n||o===n&&o===0&&Ya(o))&&(n=o)}return n}var Cy=Oy;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Py=Cy,Ty=Py;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ry=.9189385332046728,Fy=Ry;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Zc=[1276642195630063e-46,-3401102254316749e-45,1025680058010471e-43,-35475981581010704e-43,14292273559424982e-41,-6831888753985767e-39,39628370610464347e-38,-2868042435334643e-35,2683181998482699e-33,-3399615005417722e-31,6221098041892606e-29,-1809129475572494e-26,981082564692473e-23,-1384948176067564e-20,.16663894804518634],Ly=Zc.length;function Hy(e){var t,r,n,o,s;if(e<-1.1||e>1.1)return NaN;for(n=0,o=0,t=2*e,s=0;s<Ly;s++)r=n,n=o,o=t*n-r+Zc[s];return(o-r)*.5}var My=Hy;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var ky=Qc,Dy=My,Uy=9490626562425156e-8,Wy=3745194030963158e291;function By(e){return e<10?NaN:e>=Wy?0:e<Uy?Dy(2*ky(10/e,2)-1)/e:1/(e*12)}var Ky=By;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var xy=g3,Za=Vs,To=gy,Gy=Ny,jy=Ty,gn=jr,Vy=Fy,Xy=Me,Ja=Pe,Ir=Ky;function zy(e,t){var r,n,o;return n=jy(e,t),o=Gy(e,t),n<0?NaN:n===0?Ja:o===Ja?Xy:n>=10?(r=Ir(n)+Ir(o)-Ir(n+o),-.5*gn(o)+Vy+r+(n-.5)*gn(n/(n+o))+o*Za(-n/(n+o))):o>=10?(r=Ir(o)-Ir(n+o),xy(n)+r+n-n*gn(n+o)+(o-.5)*Za(-n/(n+o))):gn(To(n)*(To(o)/To(n+o)))}var qy=zy;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Qy=qy,Yy=Qy;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var el=zn,tl=Oe,Zy=Yy,Jy=Gt,rl=jr,nl=Me;function hs(e,t){return tl(e)||tl(t)?NaN:!el(e)||!el(t)?NaN:e<0?hs(-e+t-1,t):t<0?nl:t===0?0:t===1?rl(Jy(e)):e<t?nl:e-t<2?hs(e,e-t):-rl(e+1)-Zy(e-t+1,t+1)}var e$=hs;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var t$=e$,Jc=t$;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ol=Nc,r$=Jc,Ro=Oe,n$=Vs,o$=Xs,s$=jr,i$=Pe;function a$(e,t,r){var n;return Ro(e)||Ro(t)||Ro(r)||r<0||r>1||!ol(t)||t===i$?NaN:ol(e)?e>t?0:r===0?e===0?1:0:r===1?e===t?1:0:(n=r$(t,e),n+=e*s$(r)+(t-e)*n$(-r),o$(n)):0}var l$=a$;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function c$(e){return t;function t(){return e}}var u$=c$;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var f$=u$,eu=f$;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var sl=Oe;function d$(e,t){return sl(e)||sl(t)?NaN:e===t?1:0}var v$=d$;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var p$=eu,il=Oe;function h$(e){if(il(e))return p$(NaN);return t;function t(r){return il(r)?NaN:r===e?1:0}}var g$=h$;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var m$=Ws,tu=v$,_$=g$;m$(tu,"factory",_$);var y$=tu;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var al=Nc,$$=eu,b$=Jc,ll=y$.factory,Fo=Oe,E$=Vs,I$=Xs,A$=jr,w$=Pe;function N$(e,t){if(Fo(e)||Fo(t)||!al(e)||e===w$||t<0||t>1)return $$(NaN);if(t===0||e===0)return ll(0);if(t===1)return ll(e);return r;function r(n){var o;return Fo(n)?NaN:al(n)?n>e?0:(o=b$(e,n),o+=n*A$(t)+(e-n)*E$(-t),I$(o)):0}}var S$=N$;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var O$=Ws,ru=l$,C$=S$;O$(ru,"factory",C$);var P$=ru;const nu={E:.1249,T:.0928,A:.0804,O:.0764,I:.0757,N:.0723,S:.0651,R:.0628,H:.0505,L:.0407,D:.0382,C:.0334,U:.0273,M:.0251,F:.024,P:.0214,G:.0187,W:.0168,Y:.0166,B:.0148,V:.0105,K:.0054,X:.0023,J:.0016,Q:.0012,Z:9e-4};function T$(e,t,r=nu){const n={};let o=0;for(const s of Object.keys(r))o+=n[s]=P$(e,t,r[s]);for(const s of Object.keys(n))n[s]/=o;return n}function R$(e){const t=Array(26).fill(0);for(let n=0;n<e.length;++n){const o=e.charCodeAt(n);65<=o&&o<=90?++t[o-65]:97<=o&&o<=122&&++t[o-97]}const r={};for(let n=0;n<26;++n)r[String.fromCharCode(n+65)]=t[n];return r}function F$(e,t){let r=R$(e),n=nu;if(t&&t.length){const i=new Set(t);let a=1;if(n=Object.fromEntries(Object.entries(n).filter(([l,u])=>i.has(l)?(a-=u,!0):!1)),a<1)for(const l of Object.keys(n))n[l]/=a;r=Object.fromEntries(Object.entries(r).filter(l=>!i.has(l[0])))}const o=Object.values(r).reduce((i,a)=>i+a,0),s=Object.keys(r).reduce((i,a)=>(r[a]&&(i[a]={count:r[a],decodesToProbs:T$(r[a],o,n)}),i),{});return{totalLetters:o,letterDetails:s}}function ou(e){return Object.entries(e).sort((t,r)=>r[1]-t[1]).map(t=>t[0])}function L$(...e){const t=Math.min(...e),r=Math.max(...e)-t;return e.map(n=>(n-t)/r)}function H$(e,t,r){const n=(a,l)=>Math.round(a+(l-a)*r),o=n(e.r,t.r),s=n(e.g,t.g),i=n(e.b,t.b);return{r:o,g:s,b:i}}const vr=vc("encoded",()=>{const e=we(""),t=xt(new Map),r=ge(()=>F$(e.value)),n=(i,a)=>{for(const[l,u]of i.entries())if(u===a)return l},o=i=>i.length===1&&/[a-z]/i.test(i);return{message:e,decryptionKeys:t,allLetterStats:r,addKey:(i,a)=>{if(!o(i)||!o(a))return!1;i=i.toUpperCase(),a=a.toUpperCase();const l=n(t,a);return l&&t.delete(l),t.set(i,a),!0}}}),su=vc("raw",()=>({message:we("")})),M$=e=>(Wr("data-v-aa6b7497"),e=e(),Br(),e),k$=M$(()=>R("p",null," Enter text below - either plain text and click encode, or a message encoded with a simple alphabetical letter for letter substitution, and click decode. This app provides some tools to help you, but it does not decode the message for you. ",-1)),D$=qe({__name:"HomeView",setup(e){const t=vr(),r=su(),n=we(t.message||r.message),o=Ds(),s=()=>{r.message=n.value,t.message="",o.push({name:"encode"})},i=()=>{t.message!==n.value&&(r.message="",t.decryptionKeys.clear(),t.message=n.value),o.push({name:"decode"})};return(a,l)=>(X(),z(se,null,[k$,R("fieldset",null,[R("div",null,[bn(R("textarea",{id:"message","onUpdate:modelValue":l[0]||(l[0]=u=>n.value=u)},null,512),[[F0,n.value]])]),R("button",{class:"btn",onClick:i,role:"link"},"Decode"),R("button",{class:"btn",onClick:s,role:"link"},"Encode")])],64))}});const U$=ft(D$,[["__scopeId","data-v-aa6b7497"]]);function W$(){const e=Array(26);for(let t=0;t<26;++t)e[t]=[String.fromCharCode(t+65),Math.random()];return e.sort((t,r)=>t[1]-r[1]),e.map(t=>t[0])}function cl(e,t){t||(t=W$());const r=Array(e.length);for(let n=0;n<e.length;++n){const o=e.charCodeAt(n);65<=o&&o<=90?r[n]=t[o-65]:97<=o&&o<=122?r[n]=t[o-97].toLowerCase():r[n]=e[n]}return r.join("")}const B$=["value"],K$={for:"noSpaces"},x$={for:"noSpaces"},G$={for:"noSpaces"},j$=qe({__name:"EncodeMsg",setup(e){const t=su().message,r=we(cl(t)),n=we(!1),o=we(!1),s=we(!1);t||Ds().push("/");const i=ge(()=>{let l=r.value;return n.value&&(l=l.replace(/\s/g,"")),o.value&&(l=l.replace(/[^a-zA-Z\s]/g,"")),s.value&&(l=l.toUpperCase()),l}),a=()=>{r.value=cl(t)};return(l,u)=>(X(),z(se,null,[R("div",null,[R("textarea",{readonly:"",value:be(i)},null,8,B$)]),R("fieldset",null,[R("label",K$,[bn(R("input",{type:"checkbox","onUpdate:modelValue":u[0]||(u[0]=c=>n.value=c),id:"noSpaces"},null,512),[[ao,n.value]]),lt(" Exclude whitespace ")]),R("label",x$,[bn(R("input",{type:"checkbox","onUpdate:modelValue":u[1]||(u[1]=c=>o.value=c),id:"noSpaces"},null,512),[[ao,o.value]]),lt(" Exclude punctuation ")]),R("label",G$,[bn(R("input",{type:"checkbox","onUpdate:modelValue":u[2]||(u[2]=c=>s.value=c),id:"noSpaces"},null,512),[[ao,s.value]]),lt(" Capitals Only ")])]),R("button",{class:"btn",onClick:a},"New random key")],64))}});const V$=ft(j$,[["__scopeId","data-v-f3de3c51"]]),X$=["disabled"],z$=["onClick","title"],q$=qe({__name:"DecodingKeyboard",props:{activeEncodedLetter:null},emits:["key-click","enter-key-click"],setup(e){const t=e,r=vr(),n=["QWERTYUIOP".split(""),"ASDFGHJKL".split(""),[..."ZXCVBNM".split(""),"enter"]],o=Object.fromEntries(Array.from({length:26},(a,l)=>[String.fromCharCode(l+65),1/26])),s=ge(()=>t.activeEncodedLetter?r.allLetterStats.letterDetails[t.activeEncodedLetter].decodesToProbs:o),i=ge(()=>{const a={r:0,g:255,b:0},l={r:255,g:0,b:0},u=L$(...Object.values(s.value)),c=Object.fromEntries(Object.keys(s.value).map((v,p)=>[v,u[p]])),f=new Set(r.decryptionKeys.values());return n.map(v=>v.map(p=>{var m;return p.length===1?{value:p,colour:H$(l,a,c[p]||0),p:`probability=${((m=s.value[p])==null?void 0:m.toFixed(3))||"[select letter]"}`,isInUse:f.has(p)}:{value:p}}))});return(a,l)=>(X(),z("fieldset",{id:"keyboard",disabled:!e.activeEncodedLetter},[(X(!0),z(se,null,xe(be(i),(u,c)=>(X(),z("div",{class:"row",key:c},[R("div",{class:Et(`spacer${c}`)},null,2),(X(!0),z(se,null,xe(u,f=>(X(),z(se,{key:f},[f.colour?(X(),z("button",{key:0,type:"button",class:Et(f.isInUse?"used-key":""),style:Cn({borderColor:`rgb(${f.colour.r},${f.colour.g},${f.colour.b})`}),onClick:v=>a.$emit("key-click",f.value),title:f.p},[R("span",null,he(f.value),1)],14,z$)):(X(),z("button",{key:1,type:"button",class:"non-alpha",onClick:l[0]||(l[0]=v=>a.$emit("enter-key-click"))},[R("span",null,he(f.value),1)]))],64))),128)),R("div",{class:Et(`spacer${c}`)},null,2)]))),128))],8,X$))}});const Q$=ft(q$,[["__scopeId","data-v-89db8600"]]),Y$={id:"coded-text"},Z$={key:0,class:"non-alpha char"},J$=["title","onClick","onDblclick"],e5=qe({__name:"PartialDecodedText",props:{activeLetter:null},emits:["update:active-letter","update:active-word"],setup(e,{emit:t}){const r=e,n=vr(),o=we(-1),s=we(-1),i=we(-1);Bn(()=>{window.addEventListener("keydown",c)}),Kr(()=>{window.removeEventListener("keydown",c)});const a=ge(()=>{let f=-1;return n.message.split(`
`).map(v=>{var m;++f;const p=Array(v.length);for(let $=0;$<v.length;++$){const A=v[$],y=A.charCodeAt(0),H=65<=y&&y<=90;if(H||97<=y&&y<=122){let S,W;H?(W=A,S=n.decryptionKeys.get(A)):(W=String.fromCharCode(y-32),S=(m=n.decryptionKeys.get(W))==null?void 0:m.toLowerCase());const K=Boolean(S);p[$]={id:f++,uc:W,display:S||A,prior:K?`decrypted from '${A}''`:void 0,isDecrypted:K,isNonAlpha:!1}}else p[$]={id:f++,display:A,isNonAlpha:!0}}return p})});function l(f){o.value=f,(f<s.value||f>=i.value)&&(s.value=i.value=-1),t("update:active-letter",f===-1?"":n.message[f].toUpperCase())}function u(f){s.value=p(n.message,f,!1)+1,i.value=p(n.message,f,!0);const v=n.message.slice(s.value,i.value);t("update:active-word",v);function p(m,$,A=!0){let y=$,H=A?()=>++y<m.length:()=>--y>=0,S;for(;H()&&(65<=(S=m.charCodeAt(y))&&S<=90||97<=S&&S<=122););return y}}Bt(()=>r.activeLetter,f=>{o.value!==-1&&f!==n.message[o.value].toUpperCase()&&(o.value=-1)});function c(f){if(o.value===-1||f.key!=="ArrowRight"&&f.key!=="ArrowLeft")return;const v=p(n.message,o.value,f.key==="ArrowRight");v>=0&&l(v);function p(m,$,A=!0){let y=$,H=A?()=>++y<m.length:()=>--y>=0,S;for(;H()&&((S=m.charCodeAt(y))<65||90<S&&S<97||122<S););return y<m.length?y:-1}}return(f,v)=>(X(),z("div",Y$,[(X(!0),z(se,null,xe(be(a),(p,m)=>(X(),z("div",{key:m},[(X(!0),z(se,null,xe(p,$=>(X(),z(se,{key:$.id},[$.isNonAlpha?(X(),z("span",Z$,he($.display),1)):(X(),z("span",{key:1,class:Et(["alpha char",{current:$.id===o.value,"active-letter":$.uc===e.activeLetter,"active-word":s.value<=$.id&&$.id<=i.value,decrypted:$.isDecrypted}]),title:$.prior,onClick:A=>l($.id),onDblclick:A=>u($.id)},he($.display),43,J$))],64))),128))]))),128))]))}});const t5=ft(e5,[["__scopeId","data-v-3c3fbd57"]]),zs=e=>(Wr("data-v-2309fe36"),e=e(),Br(),e),r5=zs(()=>R("td",null,null,-1)),n5=["onClick"],o5=zs(()=>R("th",null,"count",-1)),s5=zs(()=>R("th",null,"decoded",-1)),i5=qe({__name:"DecodingKeyStats",props:{activeLetter:null},setup(e){const t=e,r=vr(),n=we(),o=ge(()=>Object.keys(r.allLetterStats.letterDetails)),s=ge(()=>o.value.map((l,u)=>({display:r.decryptionKeys.get(l)||"",id:r.decryptionKeys.get(l)||u}))),i=ge(()=>Object.values(r.allLetterStats.letterDetails).map(l=>ou(l.decodesToProbs).map(u=>({letter:u,prob:l.decodesToProbs[u].toFixed(3)})))),a=l=>{switch(Math.round(l%10)){case 1:return"st";case 2:return"nd";case 3:return"rd";default:return"th"}};return Bt(()=>t.activeLetter,l=>{if(l&&n.value&&n.value.scrollWidth>n.value.clientWidth){const u=n.value.scrollWidth/(o.value.length+1);let f=(o.value.indexOf(l)+1.5)*u-.5*n.value.clientWidth;f<0&&(f=0),n.value.scrollLeft=f}}),(l,u)=>(X(),z("div",{id:"letter-details",ref_key:"mainDiv",ref:n},[R("table",null,[R("tbody",null,[R("tr",null,[r5,(X(!0),z(se,null,xe(be(o),c=>(X(),z("th",{key:c},[R("a",{href:"#",class:Et(e.activeLetter===c?"active":""),onClick:k0(f=>l.$emit("update:active-letter",c),["prevent"])},he(c),11,n5)]))),128))]),R("tr",null,[o5,(X(!0),z(se,null,xe(be(r).allLetterStats.letterDetails,(c,f)=>(X(),z("td",{key:f},he(c.count),1))),128))]),R("tr",null,[s5,(X(!0),z(se,null,xe(be(s),c=>(X(),z("td",{key:c.id},he(c.display),1))),128))]),(X(),z(se,null,xe(3,c=>R("tr",{key:c},[R("th",null,[lt(he(c),1),R("sup",null,he(a(c)),1)]),(X(!0),z(se,null,xe(be(i),(f,v)=>(X(),z("td",{key:v},he(f[c-1].letter)+"\xA0("+he(f[c-1].prob)+") ",1))),128))])),64))])])],512))}});const a5=ft(i5,[["__scopeId","data-v-2309fe36"]]),l5=Object.freeze([null,{a:2.06,i:.52},{of:4.16,to:2.6,in:2.27,is:1.13,it:.77,as:.77,be:.65,by:.63,on:.62,he:.55,or:.49,at:.46,an:.37,we:.28,if:.21,so:.19,no:.19},{the:7.14,and:3.04,for:.88,was:.74,not:.61,are:.5,his:.49,but:.38,had:.35,you:.31,one:.29,all:.28,can:.22,her:.22,has:.22,who:.2},{that:1.08,with:.7,this:.51,from:.47,have:.37,they:.33,were:.31,been:.22,more:.21,when:.2,will:.2},{which:.42,their:.29,there:.22,would:.2}]),c5={key:0,id:"words-of-length"},u5={key:0},f5={key:1},d5=qe({__name:"CommonWordLengths",props:{wordLength:null},setup(e){const t=e,r=ge(()=>l5[t.wordLength]);return(n,o)=>e.wordLength?(X(),z("div",c5,[R("h4",null,"Word length: "+he(e.wordLength),1),be(r)?(X(),z("ol",u5,[(X(!0),z(se,null,xe(be(r),(s,i)=>(X(),z("li",{key:i},[lt(' "'+he(i)+'" ',1),R("small",null,"("+he(s)+"% of all words)",1)]))),128))])):(X(),z("p",f5,"No data"))])):oc("",!0)}});const v5=ft(d5,[["__scopeId","data-v-c7de237e"]]),p5=e=>(Wr("data-v-acb3df64"),e=e(),Br(),e),h5={key:0,class:"message"},g5=p5(()=>R("hr",null,null,-1)),m5=qe({__name:"DecodeMsg",setup(e){const t=we(""),r=we(""),n=we(0),o=vr(),s=Ds();o.message||s.push({name:"home"}),Bn(()=>{window.addEventListener("keyup",i),l("click on letter within the message to select the encoded letter, then use the keyboard to determine what the real letter is")}),Kr(()=>{window.removeEventListener("keyup",i)});function i(u){u.key==="Escape"||u.key==="Delete"?o.decryptionKeys.delete(t.value):a(u.key)}function a(u){o.addKey(t.value,u)}function l(u,c=3e3){r.value=u,c>0&&setTimeout(()=>{r.value=""},c)}return(u,c)=>(X(),z(se,null,[$e(Ms,null,{default:Ps(()=>[r.value?(X(),z("div",h5,he(r.value),1)):oc("",!0)]),_:1}),$e(t5,{"active-letter":t.value,"onUpdate:active-letter":c[0]||(c[0]=f=>t.value=f),"onUpdate:activeWord":c[1]||(c[1]=f=>n.value=f.length)},null,8,["active-letter"]),g5,R("div",null,[R("h4",null,[lt(" Total letters: "),R("output",null,he(be(o).allLetterStats.totalLetters),1)])]),$e(Q$,{onKeyClick:a,onEnterKeyClick:c[2]||(c[2]=f=>be(s).push({name:"decoded-key-details"})),"active-encoded-letter":t.value},null,8,["active-encoded-letter"]),$e(a5,{"active-letter":t.value,"onUpdate:active-letter":c[3]||(c[3]=f=>t.value=f)},null,8,["active-letter"]),$e(v5,{"word-length":n.value},null,8,["word-length"])],64))}});const _5=ft(m5,[["__scopeId","data-v-acb3df64"]]),iu=e=>(Wr("data-v-4a52d52e"),e=e(),Br(),e),y5={id:"letter-details"},$5=iu(()=>R("tr",null,[R("th",{rowspan:"2"},"Encoded"),R("th",{rowspan:"2"},"Decodes to"),R("th",{rowspan:"2"},"Occurences"),R("th",{colspan:"3"},"probabilities")],-1)),b5=iu(()=>R("tr",null,[R("th",null,"Value"),R("th",null,"Rank / 26"),R("th",null,"max (all letters)")],-1)),E5=["onClick"],I5=qe({__name:"DecodedKeysFinalDetails",setup(e){const t=vr(),r=ge(()=>[...t.decryptionKeys.keys()].map(n=>{const o=t.decryptionKeys.get(n),s=t.allLetterStats.letterDetails[n],i=ou(s.decodesToProbs),a=l=>l.toFixed(4);return{encoded:n,decoded:o,count:s.count,pValue:a(s.decodesToProbs[o]),rank:i.indexOf(o)+1,maxP:s.decodesToProbs[i[0]].toFixed(3),maxLetter:i[0]}}));return(n,o)=>{const s=Of("RouterLink");return X(),z(se,null,[R("div",y5,[R("table",null,[R("tbody",null,[$5,b5,(X(!0),z(se,null,xe(be(r),i=>(X(),z("tr",{key:i.encoded},[R("td",null,he(i.encoded),1),R("td",null,he(i.decoded),1),R("td",null,he(i.count),1),R("td",null,he(i.pValue),1),R("td",null,he(i.rank),1),R("td",null,he(i.maxP)+"\xA0("+he(i.maxLetter)+")",1)]))),128))])])]),$e(s,{to:"/decode",custom:""},{default:Ps(({navigate:i})=>[R("button",{class:"btn",onClick:i,role:"link"},"Back to decoding",8,E5)]),_:1})],64)}}});const A5=ft(I5,[["__scopeId","data-v-4a52d52e"]]),w5=qd({history:dd("/letter-swap-decoder/"),routes:[{path:"/",name:"home",component:U$},{path:"/decode",name:"decode",component:_5},{path:"/encode",name:"encode",component:V$},{path:"/decoded-key-details",name:"decoded-key-details",component:A5}]});const qs=W0(tv);qs.use(x0());qs.use(w5);qs.mount("#app");
