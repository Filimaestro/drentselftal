var nh=Object.defineProperty;var rh=(n,t,e)=>t in n?nh(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var ks=(n,t,e)=>rh(n,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();function zt(){}function Vl(n){return n()}function Yo(){return Object.create(null)}function xt(n){n.forEach(Vl)}function Dl(n){return typeof n=="function"}function qn(n,t){return n!=n?t==t:n!==t||n&&typeof n=="object"||typeof n=="function"}function sh(n){return Object.keys(n).length===0}function k(n,t){n.appendChild(t)}function nt(n,t,e){n.insertBefore(t,e||null)}function et(n){n.parentNode&&n.parentNode.removeChild(n)}function Ns(n,t){for(let e=0;e<n.length;e+=1)n[e]&&n[e].d(t)}function x(n){return document.createElement(n)}function ht(n){return document.createTextNode(n)}function Q(){return ht(" ")}function mi(){return ht("")}function lt(n,t,e,r){return n.addEventListener(t,e,r),()=>n.removeEventListener(t,e,r)}function kl(n){return function(t){return t.preventDefault(),n.call(this,t)}}function V(n,t,e){e==null?n.removeAttribute(t):n.getAttribute(t)!==e&&n.setAttribute(t,e)}function ih(n){return Array.from(n.childNodes)}function Nt(n,t){t=""+t,n.data!==t&&(n.data=t)}function ae(n,t){n.value=t??""}function zs(n,t,e,r){e==null?n.style.removeProperty(t):n.style.setProperty(t,e,"")}function oh(n,t,{bubbles:e=!1,cancelable:r=!1}={}){return new CustomEvent(n,{detail:t,bubbles:e,cancelable:r})}let Nn;function Cn(n){Nn=n}function Nl(){if(!Nn)throw new Error("Function called outside component initialization");return Nn}function pi(n){Nl().$$.on_mount.push(n)}function gi(){const n=Nl();return(t,e,{cancelable:r=!1}={})=>{const s=n.$$.callbacks[t];if(s){const o=oh(t,e,{cancelable:r});return s.slice().forEach(a=>{a.call(n,o)}),!o.defaultPrevented}return!0}}const qe=[],Vr=[];let Ke=[];const Jo=[],ah=Promise.resolve();let $s=!1;function lh(){$s||($s=!0,ah.then(Ol))}function Hs(n){Ke.push(n)}const Os=new Set;let je=0;function Ol(){if(je!==0)return;const n=Nn;do{try{for(;je<qe.length;){const t=qe[je];je++,Cn(t),uh(t.$$)}}catch(t){throw qe.length=0,je=0,t}for(Cn(null),qe.length=0,je=0;Vr.length;)Vr.pop()();for(let t=0;t<Ke.length;t+=1){const e=Ke[t];Os.has(e)||(Os.add(e),e())}Ke.length=0}while(qe.length);for(;Jo.length;)Jo.pop()();$s=!1,Os.clear(),Cn(n)}function uh(n){if(n.fragment!==null){n.update(),xt(n.before_update);const t=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,t),n.after_update.forEach(Hs)}}function ch(n){const t=[],e=[];Ke.forEach(r=>n.indexOf(r)===-1?t.push(r):e.push(r)),e.forEach(r=>r()),Ke=t}const Ir=new Set;let Pe;function Zo(){Pe={r:0,c:[],p:Pe}}function ta(){Pe.r||xt(Pe.c),Pe=Pe.p}function Bt(n,t){n&&n.i&&(Ir.delete(n),n.i(t))}function le(n,t,e,r){if(n&&n.o){if(Ir.has(n))return;Ir.add(n),Pe.c.push(()=>{Ir.delete(n),r&&(e&&n.d(1),r())}),n.o(t)}else r&&r()}function Be(n){return(n==null?void 0:n.length)!==void 0?n:Array.from(n)}function Wr(n){n&&n.c()}function zn(n,t,e){const{fragment:r,after_update:s}=n.$$;r&&r.m(t,e),Hs(()=>{const o=n.$$.on_mount.map(Vl).filter(Dl);n.$$.on_destroy?n.$$.on_destroy.push(...o):xt(o),n.$$.on_mount=[]}),s.forEach(Hs)}function $n(n,t){const e=n.$$;e.fragment!==null&&(ch(e.after_update),xt(e.on_destroy),e.fragment&&e.fragment.d(t),e.on_destroy=e.fragment=null,e.ctx=[])}function hh(n,t){n.$$.dirty[0]===-1&&(qe.push(n),lh(),n.$$.dirty.fill(0)),n.$$.dirty[t/31|0]|=1<<t%31}function Hn(n,t,e,r,s,o,a=null,u=[-1]){const h=Nn;Cn(n);const f=n.$$={fragment:null,ctx:[],props:o,update:zt,not_equal:s,bound:Yo(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(h?h.$$.context:[])),callbacks:Yo(),dirty:u,skip_bound:!1,root:t.target||h.$$.root};a&&a(f.root);let p=!1;if(f.ctx=e?e(n,t.props||{},(E,T,...A)=>{const P=A.length?A[0]:T;return f.ctx&&s(f.ctx[E],f.ctx[E]=P)&&(!f.skip_bound&&f.bound[E]&&f.bound[E](P),p&&hh(n,E)),T}):[],f.update(),p=!0,xt(f.before_update),f.fragment=r?r(f.ctx):!1,t.target){if(t.hydrate){const E=ih(t.target);f.fragment&&f.fragment.l(E),E.forEach(et)}else f.fragment&&f.fragment.c();t.intro&&Bt(n.$$.fragment),zn(n,t.target,t.anchor),Ol()}Cn(h)}class Gn{constructor(){ks(this,"$$");ks(this,"$$set")}$destroy(){$n(this,1),this.$destroy=zt}$on(t,e){if(!Dl(e))return zt;const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(e),()=>{const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}$set(t){this.$$set&&!sh(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const fh="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(fh);const dh=()=>{};var ea={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ml=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?t[e++]=s:s<2048?(t[e++]=s>>6|192,t[e++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=s>>18|240,t[e++]=s>>12&63|128,t[e++]=s>>6&63|128,t[e++]=s&63|128):(t[e++]=s>>12|224,t[e++]=s>>6&63|128,t[e++]=s&63|128)}return t},mh=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const s=n[e++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const o=n[e++];t[r++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=n[e++],a=n[e++],u=n[e++],h=((s&7)<<18|(o&63)<<12|(a&63)<<6|u&63)-65536;t[r++]=String.fromCharCode(55296+(h>>10)),t[r++]=String.fromCharCode(56320+(h&1023))}else{const o=n[e++],a=n[e++];t[r++]=String.fromCharCode((s&15)<<12|(o&63)<<6|a&63)}}return t.join("")},Ll={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const o=n[s],a=s+1<n.length,u=a?n[s+1]:0,h=s+2<n.length,f=h?n[s+2]:0,p=o>>2,E=(o&3)<<4|u>>4;let T=(u&15)<<2|f>>6,A=f&63;h||(A=64,a||(T=64)),r.push(e[p],e[E],e[T],e[A])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(Ml(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):mh(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const o=e[n.charAt(s++)],u=s<n.length?e[n.charAt(s)]:0;++s;const f=s<n.length?e[n.charAt(s)]:64;++s;const E=s<n.length?e[n.charAt(s)]:64;if(++s,o==null||u==null||f==null||E==null)throw new ph;const T=o<<2|u>>4;if(r.push(T),f!==64){const A=u<<4&240|f>>2;if(r.push(A),E!==64){const P=f<<6&192|E;r.push(P)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class ph extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const gh=function(n){const t=Ml(n);return Ll.encodeByteArray(t,!0)},Dr=function(n){return gh(n).replace(/\./g,"")},_h=function(n){try{return Ll.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yh(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eh=()=>yh().__FIREBASE_DEFAULTS__,vh=()=>{if(typeof process>"u"||typeof ea>"u")return;const n=ea.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Th=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&_h(n[1]);return t&&JSON.parse(t)},_i=()=>{try{return dh()||Eh()||vh()||Th()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},wh=n=>{var t,e;return(e=(t=_i())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},Ih=n=>{const t=wh(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},Fl=()=>{var n;return(n=_i())===null||n===void 0?void 0:n.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ah{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bh(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",s=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Dr(JSON.stringify(e)),Dr(JSON.stringify(a)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rh(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ph(){var n;const t=(n=_i())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Ch(){return!Ph()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Sh(){try{return typeof indexedDB=="object"}catch{return!1}}function Vh(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{e=!1},s.onerror=()=>{var o;t(((o=s.error)===null||o===void 0?void 0:o.message)||"")}}catch(e){t(e)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dh="FirebaseError";class sn extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=Dh,Object.setPrototypeOf(this,sn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,xl.prototype.create)}}class xl{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},s=`${this.service}/${t}`,o=this.errors[t],a=o?kh(o,r):"Error",u=`${this.serviceName}: ${a} (${s}).`;return new sn(s,u,r)}}function kh(n,t){return n.replace(Nh,(e,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const Nh=/\{\$([^}]+)}/g;function kr(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const s of e){if(!r.includes(s))return!1;const o=n[s],a=t[s];if(na(o)&&na(a)){if(!kr(o,a))return!1}else if(o!==a)return!1}for(const s of r)if(!e.includes(s))return!1;return!0}function na(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xe(n){return n&&n._delegate?n._delegate:n}class On{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Re="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oh{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new Ah;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:e});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Lh(t))try{this.getOrInitializeService({instanceIdentifier:Re})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(e);try{const o=this.getOrInitializeService({instanceIdentifier:s});r.resolve(o)}catch{}}}}clearInstance(t=Re){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Re){return this.instances.has(t)}getOptions(t=Re){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[o,a]of this.instancesDeferred.entries()){const u=this.normalizeInstanceIdentifier(o);r===u&&a.resolve(s)}return s}onInit(t,e){var r;const s=this.normalizeInstanceIdentifier(e),o=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(s,o);const a=this.instances.get(s);return a&&t(a,s),()=>{o.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const s of r)try{s(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Mh(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Re){return this.component?this.component.multipleInstances?t:Re:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Mh(n){return n===Re?void 0:n}function Lh(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fh{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new Oh(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Z;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Z||(Z={}));const xh={debug:Z.DEBUG,verbose:Z.VERBOSE,info:Z.INFO,warn:Z.WARN,error:Z.ERROR,silent:Z.SILENT},Uh=Z.INFO,jh={[Z.DEBUG]:"log",[Z.VERBOSE]:"log",[Z.INFO]:"info",[Z.WARN]:"warn",[Z.ERROR]:"error"},Bh=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),s=jh[t];if(s)console[s](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Ul{constructor(t){this.name=t,this._logLevel=Uh,this._logHandler=Bh,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Z))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?xh[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Z.DEBUG,...t),this._logHandler(this,Z.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Z.VERBOSE,...t),this._logHandler(this,Z.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Z.INFO,...t),this._logHandler(this,Z.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Z.WARN,...t),this._logHandler(this,Z.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Z.ERROR,...t),this._logHandler(this,Z.ERROR,...t)}}const qh=(n,t)=>t.some(e=>n instanceof e);let ra,sa;function zh(){return ra||(ra=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function $h(){return sa||(sa=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const jl=new WeakMap,Gs=new WeakMap,Bl=new WeakMap,Ms=new WeakMap,yi=new WeakMap;function Hh(n){const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("success",o),n.removeEventListener("error",a)},o=()=>{e(ce(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",o),n.addEventListener("error",a)});return t.then(e=>{e instanceof IDBCursor&&jl.set(e,n)}).catch(()=>{}),yi.set(t,n),t}function Gh(n){if(Gs.has(n))return;const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",a),n.removeEventListener("abort",a)},o=()=>{e(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",o),n.addEventListener("error",a),n.addEventListener("abort",a)});Gs.set(n,t)}let Ks={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return Gs.get(n);if(t==="objectStoreNames")return n.objectStoreNames||Bl.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return ce(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function Kh(n){Ks=n(Ks)}function Wh(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call(Ls(this),t,...e);return Bl.set(r,t.sort?t.sort():[t]),ce(r)}:$h().includes(n)?function(...t){return n.apply(Ls(this),t),ce(jl.get(this))}:function(...t){return ce(n.apply(Ls(this),t))}}function Qh(n){return typeof n=="function"?Wh(n):(n instanceof IDBTransaction&&Gh(n),qh(n,zh())?new Proxy(n,Ks):n)}function ce(n){if(n instanceof IDBRequest)return Hh(n);if(Ms.has(n))return Ms.get(n);const t=Qh(n);return t!==n&&(Ms.set(n,t),yi.set(t,n)),t}const Ls=n=>yi.get(n);function Xh(n,t,{blocked:e,upgrade:r,blocking:s,terminated:o}={}){const a=indexedDB.open(n,t),u=ce(a);return r&&a.addEventListener("upgradeneeded",h=>{r(ce(a.result),h.oldVersion,h.newVersion,ce(a.transaction),h)}),e&&a.addEventListener("blocked",h=>e(h.oldVersion,h.newVersion,h)),u.then(h=>{o&&h.addEventListener("close",()=>o()),s&&h.addEventListener("versionchange",f=>s(f.oldVersion,f.newVersion,f))}).catch(()=>{}),u}const Yh=["get","getKey","getAll","getAllKeys","count"],Jh=["put","add","delete","clear"],Fs=new Map;function ia(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(Fs.get(t))return Fs.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,s=Jh.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Yh.includes(e)))return;const o=async function(a,...u){const h=this.transaction(a,s?"readwrite":"readonly");let f=h.store;return r&&(f=f.index(u.shift())),(await Promise.all([f[e](...u),s&&h.done]))[0]};return Fs.set(t,o),o}Kh(n=>({...n,get:(t,e,r)=>ia(t,e)||n.get(t,e,r),has:(t,e)=>!!ia(t,e)||n.has(t,e)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zh{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(tf(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function tf(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Ws="@firebase/app",oa="0.11.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const te=new Ul("@firebase/app"),ef="@firebase/app-compat",nf="@firebase/analytics-compat",rf="@firebase/analytics",sf="@firebase/app-check-compat",of="@firebase/app-check",af="@firebase/auth",lf="@firebase/auth-compat",uf="@firebase/database",cf="@firebase/data-connect",hf="@firebase/database-compat",ff="@firebase/functions",df="@firebase/functions-compat",mf="@firebase/installations",pf="@firebase/installations-compat",gf="@firebase/messaging",_f="@firebase/messaging-compat",yf="@firebase/performance",Ef="@firebase/performance-compat",vf="@firebase/remote-config",Tf="@firebase/remote-config-compat",wf="@firebase/storage",If="@firebase/storage-compat",Af="@firebase/firestore",bf="@firebase/vertexai",Rf="@firebase/firestore-compat",Pf="firebase",Cf="11.5.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qs="[DEFAULT]",Sf={[Ws]:"fire-core",[ef]:"fire-core-compat",[rf]:"fire-analytics",[nf]:"fire-analytics-compat",[of]:"fire-app-check",[sf]:"fire-app-check-compat",[af]:"fire-auth",[lf]:"fire-auth-compat",[uf]:"fire-rtdb",[cf]:"fire-data-connect",[hf]:"fire-rtdb-compat",[ff]:"fire-fn",[df]:"fire-fn-compat",[mf]:"fire-iid",[pf]:"fire-iid-compat",[gf]:"fire-fcm",[_f]:"fire-fcm-compat",[yf]:"fire-perf",[Ef]:"fire-perf-compat",[vf]:"fire-rc",[Tf]:"fire-rc-compat",[wf]:"fire-gcs",[If]:"fire-gcs-compat",[Af]:"fire-fst",[Rf]:"fire-fst-compat",[bf]:"fire-vertex","fire-js":"fire-js",[Pf]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nr=new Map,Vf=new Map,Xs=new Map;function aa(n,t){try{n.container.addComponent(t)}catch(e){te.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function Or(n){const t=n.name;if(Xs.has(t))return te.debug(`There were multiple attempts to register component ${t}.`),!1;Xs.set(t,n);for(const e of Nr.values())aa(e,n);for(const e of Vf.values())aa(e,n);return!0}function Df(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}function kf(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nf={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},he=new xl("app","Firebase",Nf);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Of{constructor(t,e,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new On("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw he.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mf=Cf;function ql(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Qs,automaticDataCollectionEnabled:!1},t),s=r.name;if(typeof s!="string"||!s)throw he.create("bad-app-name",{appName:String(s)});if(e||(e=Fl()),!e)throw he.create("no-options");const o=Nr.get(s);if(o){if(kr(e,o.options)&&kr(r,o.config))return o;throw he.create("duplicate-app",{appName:s})}const a=new Fh(s);for(const h of Xs.values())a.addComponent(h);const u=new Of(e,r,a);return Nr.set(s,u),u}function Lf(n=Qs){const t=Nr.get(n);if(!t&&n===Qs&&Fl())return ql();if(!t)throw he.create("no-app",{appName:n});return t}function We(n,t,e){var r;let s=(r=Sf[n])!==null&&r!==void 0?r:n;e&&(s+=`-${e}`);const o=s.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const u=[`Unable to register library "${s}" with version "${t}":`];o&&u.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&u.push("and"),a&&u.push(`version name "${t}" contains illegal characters (whitespace or "/")`),te.warn(u.join(" "));return}Or(new On(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ff="firebase-heartbeat-database",xf=1,Mn="firebase-heartbeat-store";let xs=null;function zl(){return xs||(xs=Xh(Ff,xf,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(Mn)}catch(e){console.warn(e)}}}}).catch(n=>{throw he.create("idb-open",{originalErrorMessage:n.message})})),xs}async function Uf(n){try{const e=(await zl()).transaction(Mn),r=await e.objectStore(Mn).get($l(n));return await e.done,r}catch(t){if(t instanceof sn)te.warn(t.message);else{const e=he.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});te.warn(e.message)}}}async function la(n,t){try{const r=(await zl()).transaction(Mn,"readwrite");await r.objectStore(Mn).put(t,$l(n)),await r.done}catch(e){if(e instanceof sn)te.warn(e.message);else{const r=he.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});te.warn(r.message)}}}function $l(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jf=1024,Bf=30;class qf{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new $f(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,e;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=ua();if(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:s}),this._heartbeatsCache.heartbeats.length>Bf){const a=Hf(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){te.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=ua(),{heartbeatsToSend:r,unsentEntries:s}=zf(this._heartbeatsCache.heartbeats),o=Dr(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return te.warn(e),""}}}function ua(){return new Date().toISOString().substring(0,10)}function zf(n,t=jf){const e=[];let r=n.slice();for(const s of n){const o=e.find(a=>a.agent===s.agent);if(o){if(o.dates.push(s.date),ca(e)>t){o.dates.pop();break}}else if(e.push({agent:s.agent,dates:[s.date]}),ca(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class $f{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Sh()?Vh().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await Uf(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return la(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return la(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function ca(n){return Dr(JSON.stringify({version:2,heartbeats:n})).length}function Hf(n){if(n.length===0)return-1;let t=0,e=n[0].date;for(let r=1;r<n.length;r++)n[r].date<e&&(e=n[r].date,t=r);return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gf(n){Or(new On("platform-logger",t=>new Zh(t),"PRIVATE")),Or(new On("heartbeat",t=>new qf(t),"PRIVATE")),We(Ws,oa,n),We(Ws,oa,"esm2017"),We("fire-js","")}Gf("");var ha=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var fe,Hl;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(_,g){function m(){}m.prototype=g.prototype,_.D=g.prototype,_.prototype=new m,_.prototype.constructor=_,_.C=function(v,w,I){for(var y=Array(arguments.length-2),it=2;it<arguments.length;it++)y[it-2]=arguments[it];return g.prototype[w].apply(v,y)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(r,e),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(_,g,m){m||(m=0);var v=Array(16);if(typeof g=="string")for(var w=0;16>w;++w)v[w]=g.charCodeAt(m++)|g.charCodeAt(m++)<<8|g.charCodeAt(m++)<<16|g.charCodeAt(m++)<<24;else for(w=0;16>w;++w)v[w]=g[m++]|g[m++]<<8|g[m++]<<16|g[m++]<<24;g=_.g[0],m=_.g[1],w=_.g[2];var I=_.g[3],y=g+(I^m&(w^I))+v[0]+3614090360&4294967295;g=m+(y<<7&4294967295|y>>>25),y=I+(w^g&(m^w))+v[1]+3905402710&4294967295,I=g+(y<<12&4294967295|y>>>20),y=w+(m^I&(g^m))+v[2]+606105819&4294967295,w=I+(y<<17&4294967295|y>>>15),y=m+(g^w&(I^g))+v[3]+3250441966&4294967295,m=w+(y<<22&4294967295|y>>>10),y=g+(I^m&(w^I))+v[4]+4118548399&4294967295,g=m+(y<<7&4294967295|y>>>25),y=I+(w^g&(m^w))+v[5]+1200080426&4294967295,I=g+(y<<12&4294967295|y>>>20),y=w+(m^I&(g^m))+v[6]+2821735955&4294967295,w=I+(y<<17&4294967295|y>>>15),y=m+(g^w&(I^g))+v[7]+4249261313&4294967295,m=w+(y<<22&4294967295|y>>>10),y=g+(I^m&(w^I))+v[8]+1770035416&4294967295,g=m+(y<<7&4294967295|y>>>25),y=I+(w^g&(m^w))+v[9]+2336552879&4294967295,I=g+(y<<12&4294967295|y>>>20),y=w+(m^I&(g^m))+v[10]+4294925233&4294967295,w=I+(y<<17&4294967295|y>>>15),y=m+(g^w&(I^g))+v[11]+2304563134&4294967295,m=w+(y<<22&4294967295|y>>>10),y=g+(I^m&(w^I))+v[12]+1804603682&4294967295,g=m+(y<<7&4294967295|y>>>25),y=I+(w^g&(m^w))+v[13]+4254626195&4294967295,I=g+(y<<12&4294967295|y>>>20),y=w+(m^I&(g^m))+v[14]+2792965006&4294967295,w=I+(y<<17&4294967295|y>>>15),y=m+(g^w&(I^g))+v[15]+1236535329&4294967295,m=w+(y<<22&4294967295|y>>>10),y=g+(w^I&(m^w))+v[1]+4129170786&4294967295,g=m+(y<<5&4294967295|y>>>27),y=I+(m^w&(g^m))+v[6]+3225465664&4294967295,I=g+(y<<9&4294967295|y>>>23),y=w+(g^m&(I^g))+v[11]+643717713&4294967295,w=I+(y<<14&4294967295|y>>>18),y=m+(I^g&(w^I))+v[0]+3921069994&4294967295,m=w+(y<<20&4294967295|y>>>12),y=g+(w^I&(m^w))+v[5]+3593408605&4294967295,g=m+(y<<5&4294967295|y>>>27),y=I+(m^w&(g^m))+v[10]+38016083&4294967295,I=g+(y<<9&4294967295|y>>>23),y=w+(g^m&(I^g))+v[15]+3634488961&4294967295,w=I+(y<<14&4294967295|y>>>18),y=m+(I^g&(w^I))+v[4]+3889429448&4294967295,m=w+(y<<20&4294967295|y>>>12),y=g+(w^I&(m^w))+v[9]+568446438&4294967295,g=m+(y<<5&4294967295|y>>>27),y=I+(m^w&(g^m))+v[14]+3275163606&4294967295,I=g+(y<<9&4294967295|y>>>23),y=w+(g^m&(I^g))+v[3]+4107603335&4294967295,w=I+(y<<14&4294967295|y>>>18),y=m+(I^g&(w^I))+v[8]+1163531501&4294967295,m=w+(y<<20&4294967295|y>>>12),y=g+(w^I&(m^w))+v[13]+2850285829&4294967295,g=m+(y<<5&4294967295|y>>>27),y=I+(m^w&(g^m))+v[2]+4243563512&4294967295,I=g+(y<<9&4294967295|y>>>23),y=w+(g^m&(I^g))+v[7]+1735328473&4294967295,w=I+(y<<14&4294967295|y>>>18),y=m+(I^g&(w^I))+v[12]+2368359562&4294967295,m=w+(y<<20&4294967295|y>>>12),y=g+(m^w^I)+v[5]+4294588738&4294967295,g=m+(y<<4&4294967295|y>>>28),y=I+(g^m^w)+v[8]+2272392833&4294967295,I=g+(y<<11&4294967295|y>>>21),y=w+(I^g^m)+v[11]+1839030562&4294967295,w=I+(y<<16&4294967295|y>>>16),y=m+(w^I^g)+v[14]+4259657740&4294967295,m=w+(y<<23&4294967295|y>>>9),y=g+(m^w^I)+v[1]+2763975236&4294967295,g=m+(y<<4&4294967295|y>>>28),y=I+(g^m^w)+v[4]+1272893353&4294967295,I=g+(y<<11&4294967295|y>>>21),y=w+(I^g^m)+v[7]+4139469664&4294967295,w=I+(y<<16&4294967295|y>>>16),y=m+(w^I^g)+v[10]+3200236656&4294967295,m=w+(y<<23&4294967295|y>>>9),y=g+(m^w^I)+v[13]+681279174&4294967295,g=m+(y<<4&4294967295|y>>>28),y=I+(g^m^w)+v[0]+3936430074&4294967295,I=g+(y<<11&4294967295|y>>>21),y=w+(I^g^m)+v[3]+3572445317&4294967295,w=I+(y<<16&4294967295|y>>>16),y=m+(w^I^g)+v[6]+76029189&4294967295,m=w+(y<<23&4294967295|y>>>9),y=g+(m^w^I)+v[9]+3654602809&4294967295,g=m+(y<<4&4294967295|y>>>28),y=I+(g^m^w)+v[12]+3873151461&4294967295,I=g+(y<<11&4294967295|y>>>21),y=w+(I^g^m)+v[15]+530742520&4294967295,w=I+(y<<16&4294967295|y>>>16),y=m+(w^I^g)+v[2]+3299628645&4294967295,m=w+(y<<23&4294967295|y>>>9),y=g+(w^(m|~I))+v[0]+4096336452&4294967295,g=m+(y<<6&4294967295|y>>>26),y=I+(m^(g|~w))+v[7]+1126891415&4294967295,I=g+(y<<10&4294967295|y>>>22),y=w+(g^(I|~m))+v[14]+2878612391&4294967295,w=I+(y<<15&4294967295|y>>>17),y=m+(I^(w|~g))+v[5]+4237533241&4294967295,m=w+(y<<21&4294967295|y>>>11),y=g+(w^(m|~I))+v[12]+1700485571&4294967295,g=m+(y<<6&4294967295|y>>>26),y=I+(m^(g|~w))+v[3]+2399980690&4294967295,I=g+(y<<10&4294967295|y>>>22),y=w+(g^(I|~m))+v[10]+4293915773&4294967295,w=I+(y<<15&4294967295|y>>>17),y=m+(I^(w|~g))+v[1]+2240044497&4294967295,m=w+(y<<21&4294967295|y>>>11),y=g+(w^(m|~I))+v[8]+1873313359&4294967295,g=m+(y<<6&4294967295|y>>>26),y=I+(m^(g|~w))+v[15]+4264355552&4294967295,I=g+(y<<10&4294967295|y>>>22),y=w+(g^(I|~m))+v[6]+2734768916&4294967295,w=I+(y<<15&4294967295|y>>>17),y=m+(I^(w|~g))+v[13]+1309151649&4294967295,m=w+(y<<21&4294967295|y>>>11),y=g+(w^(m|~I))+v[4]+4149444226&4294967295,g=m+(y<<6&4294967295|y>>>26),y=I+(m^(g|~w))+v[11]+3174756917&4294967295,I=g+(y<<10&4294967295|y>>>22),y=w+(g^(I|~m))+v[2]+718787259&4294967295,w=I+(y<<15&4294967295|y>>>17),y=m+(I^(w|~g))+v[9]+3951481745&4294967295,_.g[0]=_.g[0]+g&4294967295,_.g[1]=_.g[1]+(w+(y<<21&4294967295|y>>>11))&4294967295,_.g[2]=_.g[2]+w&4294967295,_.g[3]=_.g[3]+I&4294967295}r.prototype.u=function(_,g){g===void 0&&(g=_.length);for(var m=g-this.blockSize,v=this.B,w=this.h,I=0;I<g;){if(w==0)for(;I<=m;)s(this,_,I),I+=this.blockSize;if(typeof _=="string"){for(;I<g;)if(v[w++]=_.charCodeAt(I++),w==this.blockSize){s(this,v),w=0;break}}else for(;I<g;)if(v[w++]=_[I++],w==this.blockSize){s(this,v),w=0;break}}this.h=w,this.o+=g},r.prototype.v=function(){var _=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);_[0]=128;for(var g=1;g<_.length-8;++g)_[g]=0;var m=8*this.o;for(g=_.length-8;g<_.length;++g)_[g]=m&255,m/=256;for(this.u(_),_=Array(16),g=m=0;4>g;++g)for(var v=0;32>v;v+=8)_[m++]=this.g[g]>>>v&255;return _};function o(_,g){var m=u;return Object.prototype.hasOwnProperty.call(m,_)?m[_]:m[_]=g(_)}function a(_,g){this.h=g;for(var m=[],v=!0,w=_.length-1;0<=w;w--){var I=_[w]|0;v&&I==g||(m[w]=I,v=!1)}this.g=m}var u={};function h(_){return-128<=_&&128>_?o(_,function(g){return new a([g|0],0>g?-1:0)}):new a([_|0],0>_?-1:0)}function f(_){if(isNaN(_)||!isFinite(_))return E;if(0>_)return D(f(-_));for(var g=[],m=1,v=0;_>=m;v++)g[v]=_/m|0,m*=4294967296;return new a(g,0)}function p(_,g){if(_.length==0)throw Error("number format error: empty string");if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(_.charAt(0)=="-")return D(p(_.substring(1),g));if(0<=_.indexOf("-"))throw Error('number format error: interior "-" character');for(var m=f(Math.pow(g,8)),v=E,w=0;w<_.length;w+=8){var I=Math.min(8,_.length-w),y=parseInt(_.substring(w,w+I),g);8>I?(I=f(Math.pow(g,I)),v=v.j(I).add(f(y))):(v=v.j(m),v=v.add(f(y)))}return v}var E=h(0),T=h(1),A=h(16777216);n=a.prototype,n.m=function(){if(M(this))return-D(this).m();for(var _=0,g=1,m=0;m<this.g.length;m++){var v=this.i(m);_+=(0<=v?v:4294967296+v)*g,g*=4294967296}return _},n.toString=function(_){if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(P(this))return"0";if(M(this))return"-"+D(this).toString(_);for(var g=f(Math.pow(_,6)),m=this,v="";;){var w=B(m,g).g;m=L(m,w.j(g));var I=((0<m.g.length?m.g[0]:m.h)>>>0).toString(_);if(m=w,P(m))return I+v;for(;6>I.length;)I="0"+I;v=I+v}},n.i=function(_){return 0>_?0:_<this.g.length?this.g[_]:this.h};function P(_){if(_.h!=0)return!1;for(var g=0;g<_.g.length;g++)if(_.g[g]!=0)return!1;return!0}function M(_){return _.h==-1}n.l=function(_){return _=L(this,_),M(_)?-1:P(_)?0:1};function D(_){for(var g=_.g.length,m=[],v=0;v<g;v++)m[v]=~_.g[v];return new a(m,~_.h).add(T)}n.abs=function(){return M(this)?D(this):this},n.add=function(_){for(var g=Math.max(this.g.length,_.g.length),m=[],v=0,w=0;w<=g;w++){var I=v+(this.i(w)&65535)+(_.i(w)&65535),y=(I>>>16)+(this.i(w)>>>16)+(_.i(w)>>>16);v=y>>>16,I&=65535,y&=65535,m[w]=y<<16|I}return new a(m,m[m.length-1]&-2147483648?-1:0)};function L(_,g){return _.add(D(g))}n.j=function(_){if(P(this)||P(_))return E;if(M(this))return M(_)?D(this).j(D(_)):D(D(this).j(_));if(M(_))return D(this.j(D(_)));if(0>this.l(A)&&0>_.l(A))return f(this.m()*_.m());for(var g=this.g.length+_.g.length,m=[],v=0;v<2*g;v++)m[v]=0;for(v=0;v<this.g.length;v++)for(var w=0;w<_.g.length;w++){var I=this.i(v)>>>16,y=this.i(v)&65535,it=_.i(w)>>>16,$=_.i(w)&65535;m[2*v+2*w]+=y*$,O(m,2*v+2*w),m[2*v+2*w+1]+=I*$,O(m,2*v+2*w+1),m[2*v+2*w+1]+=y*it,O(m,2*v+2*w+1),m[2*v+2*w+2]+=I*it,O(m,2*v+2*w+2)}for(v=0;v<g;v++)m[v]=m[2*v+1]<<16|m[2*v];for(v=g;v<2*g;v++)m[v]=0;return new a(m,0)};function O(_,g){for(;(_[g]&65535)!=_[g];)_[g+1]+=_[g]>>>16,_[g]&=65535,g++}function N(_,g){this.g=_,this.h=g}function B(_,g){if(P(g))throw Error("division by zero");if(P(_))return new N(E,E);if(M(_))return g=B(D(_),g),new N(D(g.g),D(g.h));if(M(g))return g=B(_,D(g)),new N(D(g.g),g.h);if(30<_.g.length){if(M(_)||M(g))throw Error("slowDivide_ only works with positive integers.");for(var m=T,v=g;0>=v.l(_);)m=q(m),v=q(v);var w=H(m,1),I=H(v,1);for(v=H(v,2),m=H(m,2);!P(v);){var y=I.add(v);0>=y.l(_)&&(w=w.add(m),I=y),v=H(v,1),m=H(m,1)}return g=L(_,w.j(g)),new N(w,g)}for(w=E;0<=_.l(g);){for(m=Math.max(1,Math.floor(_.m()/g.m())),v=Math.ceil(Math.log(m)/Math.LN2),v=48>=v?1:Math.pow(2,v-48),I=f(m),y=I.j(g);M(y)||0<y.l(_);)m-=v,I=f(m),y=I.j(g);P(I)&&(I=T),w=w.add(I),_=L(_,y)}return new N(w,_)}n.A=function(_){return B(this,_).h},n.and=function(_){for(var g=Math.max(this.g.length,_.g.length),m=[],v=0;v<g;v++)m[v]=this.i(v)&_.i(v);return new a(m,this.h&_.h)},n.or=function(_){for(var g=Math.max(this.g.length,_.g.length),m=[],v=0;v<g;v++)m[v]=this.i(v)|_.i(v);return new a(m,this.h|_.h)},n.xor=function(_){for(var g=Math.max(this.g.length,_.g.length),m=[],v=0;v<g;v++)m[v]=this.i(v)^_.i(v);return new a(m,this.h^_.h)};function q(_){for(var g=_.g.length+1,m=[],v=0;v<g;v++)m[v]=_.i(v)<<1|_.i(v-1)>>>31;return new a(m,_.h)}function H(_,g){var m=g>>5;g%=32;for(var v=_.g.length-m,w=[],I=0;I<v;I++)w[I]=0<g?_.i(I+m)>>>g|_.i(I+m+1)<<32-g:_.i(I+m);return new a(w,_.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Hl=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=f,a.fromString=p,fe=a}).apply(typeof ha<"u"?ha:typeof self<"u"?self:typeof window<"u"?window:{});var _r=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Gl,bn,Kl,Ar,Ys,Wl,Ql,Xl;(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(i,l,c){return i==Array.prototype||i==Object.prototype||(i[l]=c.value),i};function e(i){i=[typeof globalThis=="object"&&globalThis,i,typeof window=="object"&&window,typeof self=="object"&&self,typeof _r=="object"&&_r];for(var l=0;l<i.length;++l){var c=i[l];if(c&&c.Math==Math)return c}throw Error("Cannot find global object")}var r=e(this);function s(i,l){if(l)t:{var c=r;i=i.split(".");for(var d=0;d<i.length-1;d++){var b=i[d];if(!(b in c))break t;c=c[b]}i=i[i.length-1],d=c[i],l=l(d),l!=d&&l!=null&&t(c,i,{configurable:!0,writable:!0,value:l})}}function o(i,l){i instanceof String&&(i+="");var c=0,d=!1,b={next:function(){if(!d&&c<i.length){var R=c++;return{value:l(R,i[R]),done:!1}}return d=!0,{done:!0,value:void 0}}};return b[Symbol.iterator]=function(){return b},b}s("Array.prototype.values",function(i){return i||function(){return o(this,function(l,c){return c})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},u=this||self;function h(i){var l=typeof i;return l=l!="object"?l:i?Array.isArray(i)?"array":l:"null",l=="array"||l=="object"&&typeof i.length=="number"}function f(i){var l=typeof i;return l=="object"&&i!=null||l=="function"}function p(i,l,c){return i.call.apply(i.bind,arguments)}function E(i,l,c){if(!i)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var b=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(b,d),i.apply(l,b)}}return function(){return i.apply(l,arguments)}}function T(i,l,c){return T=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?p:E,T.apply(null,arguments)}function A(i,l){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();return d.push.apply(d,arguments),i.apply(this,d)}}function P(i,l){function c(){}c.prototype=l.prototype,i.aa=l.prototype,i.prototype=new c,i.prototype.constructor=i,i.Qb=function(d,b,R){for(var F=Array(arguments.length-2),st=2;st<arguments.length;st++)F[st-2]=arguments[st];return l.prototype[b].apply(d,F)}}function M(i){const l=i.length;if(0<l){const c=Array(l);for(let d=0;d<l;d++)c[d]=i[d];return c}return[]}function D(i,l){for(let c=1;c<arguments.length;c++){const d=arguments[c];if(h(d)){const b=i.length||0,R=d.length||0;i.length=b+R;for(let F=0;F<R;F++)i[b+F]=d[F]}else i.push(d)}}class L{constructor(l,c){this.i=l,this.j=c,this.h=0,this.g=null}get(){let l;return 0<this.h?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function O(i){return/^[\s\xa0]*$/.test(i)}function N(){var i=u.navigator;return i&&(i=i.userAgent)?i:""}function B(i){return B[" "](i),i}B[" "]=function(){};var q=N().indexOf("Gecko")!=-1&&!(N().toLowerCase().indexOf("webkit")!=-1&&N().indexOf("Edge")==-1)&&!(N().indexOf("Trident")!=-1||N().indexOf("MSIE")!=-1)&&N().indexOf("Edge")==-1;function H(i,l,c){for(const d in i)l.call(c,i[d],d,i)}function _(i,l){for(const c in i)l.call(void 0,i[c],c,i)}function g(i){const l={};for(const c in i)l[c]=i[c];return l}const m="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function v(i,l){let c,d;for(let b=1;b<arguments.length;b++){d=arguments[b];for(c in d)i[c]=d[c];for(let R=0;R<m.length;R++)c=m[R],Object.prototype.hasOwnProperty.call(d,c)&&(i[c]=d[c])}}function w(i){var l=1;i=i.split(":");const c=[];for(;0<l&&i.length;)c.push(i.shift()),l--;return i.length&&c.push(i.join(":")),c}function I(i){u.setTimeout(()=>{throw i},0)}function y(){var i=Me;let l=null;return i.g&&(l=i.g,i.g=i.g.next,i.g||(i.h=null),l.next=null),l}class it{constructor(){this.h=this.g=null}add(l,c){const d=$.get();d.set(l,c),this.h?this.h.next=d:this.g=d,this.h=d}}var $=new L(()=>new Vt,i=>i.reset());class Vt{constructor(){this.next=this.g=this.h=null}set(l,c){this.h=l,this.g=c,this.next=null}reset(){this.next=this.g=this.h=null}}let Qt,Xt=!1,Me=new it,yt=()=>{const i=u.Promise.resolve(void 0);Qt=()=>{i.then(Ut)}};var Ut=()=>{for(var i;i=y();){try{i.h.call(i.g)}catch(c){I(c)}var l=$;l.j(i),100>l.h&&(l.h++,i.next=l.g,l.g=i)}Xt=!1};function re(){this.s=this.s,this.C=this.C}re.prototype.s=!1,re.prototype.ma=function(){this.s||(this.s=!0,this.N())},re.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function It(i,l){this.type=i,this.g=this.target=l,this.defaultPrevented=!1}It.prototype.h=function(){this.defaultPrevented=!0};var Ic=function(){if(!u.addEventListener||!Object.defineProperty)return!1;var i=!1,l=Object.defineProperty({},"passive",{get:function(){i=!0}});try{const c=()=>{};u.addEventListener("test",c,l),u.removeEventListener("test",c,l)}catch{}return i}();function hn(i,l){if(It.call(this,i?i.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,i){var c=this.type=i.type,d=i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:null;if(this.target=i.target||i.srcElement,this.g=l,l=i.relatedTarget){if(q){t:{try{B(l.nodeName);var b=!0;break t}catch{}b=!1}b||(l=null)}}else c=="mouseover"?l=i.fromElement:c=="mouseout"&&(l=i.toElement);this.relatedTarget=l,d?(this.clientX=d.clientX!==void 0?d.clientX:d.pageX,this.clientY=d.clientY!==void 0?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0),this.button=i.button,this.key=i.key||"",this.ctrlKey=i.ctrlKey,this.altKey=i.altKey,this.shiftKey=i.shiftKey,this.metaKey=i.metaKey,this.pointerId=i.pointerId||0,this.pointerType=typeof i.pointerType=="string"?i.pointerType:Ac[i.pointerType]||"",this.state=i.state,this.i=i,i.defaultPrevented&&hn.aa.h.call(this)}}P(hn,It);var Ac={2:"touch",3:"pen",4:"mouse"};hn.prototype.h=function(){hn.aa.h.call(this);var i=this.i;i.preventDefault?i.preventDefault():i.returnValue=!1};var Jn="closure_listenable_"+(1e6*Math.random()|0),bc=0;function Rc(i,l,c,d,b){this.listener=i,this.proxy=null,this.src=l,this.type=c,this.capture=!!d,this.ha=b,this.key=++bc,this.da=this.fa=!1}function Zn(i){i.da=!0,i.listener=null,i.proxy=null,i.src=null,i.ha=null}function tr(i){this.src=i,this.g={},this.h=0}tr.prototype.add=function(i,l,c,d,b){var R=i.toString();i=this.g[R],i||(i=this.g[R]=[],this.h++);var F=cs(i,l,d,b);return-1<F?(l=i[F],c||(l.fa=!1)):(l=new Rc(l,this.src,R,!!d,b),l.fa=c,i.push(l)),l};function us(i,l){var c=l.type;if(c in i.g){var d=i.g[c],b=Array.prototype.indexOf.call(d,l,void 0),R;(R=0<=b)&&Array.prototype.splice.call(d,b,1),R&&(Zn(l),i.g[c].length==0&&(delete i.g[c],i.h--))}}function cs(i,l,c,d){for(var b=0;b<i.length;++b){var R=i[b];if(!R.da&&R.listener==l&&R.capture==!!c&&R.ha==d)return b}return-1}var hs="closure_lm_"+(1e6*Math.random()|0),fs={};function Yi(i,l,c,d,b){if(Array.isArray(l)){for(var R=0;R<l.length;R++)Yi(i,l[R],c,d,b);return null}return c=to(c),i&&i[Jn]?i.K(l,c,f(d)?!!d.capture:!1,b):Pc(i,l,c,!1,d,b)}function Pc(i,l,c,d,b,R){if(!l)throw Error("Invalid event type");var F=f(b)?!!b.capture:!!b,st=ms(i);if(st||(i[hs]=st=new tr(i)),c=st.add(l,c,d,F,R),c.proxy)return c;if(d=Cc(),c.proxy=d,d.src=i,d.listener=c,i.addEventListener)Ic||(b=F),b===void 0&&(b=!1),i.addEventListener(l.toString(),d,b);else if(i.attachEvent)i.attachEvent(Zi(l.toString()),d);else if(i.addListener&&i.removeListener)i.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");return c}function Cc(){function i(c){return l.call(i.src,i.listener,c)}const l=Sc;return i}function Ji(i,l,c,d,b){if(Array.isArray(l))for(var R=0;R<l.length;R++)Ji(i,l[R],c,d,b);else d=f(d)?!!d.capture:!!d,c=to(c),i&&i[Jn]?(i=i.i,l=String(l).toString(),l in i.g&&(R=i.g[l],c=cs(R,c,d,b),-1<c&&(Zn(R[c]),Array.prototype.splice.call(R,c,1),R.length==0&&(delete i.g[l],i.h--)))):i&&(i=ms(i))&&(l=i.g[l.toString()],i=-1,l&&(i=cs(l,c,d,b)),(c=-1<i?l[i]:null)&&ds(c))}function ds(i){if(typeof i!="number"&&i&&!i.da){var l=i.src;if(l&&l[Jn])us(l.i,i);else{var c=i.type,d=i.proxy;l.removeEventListener?l.removeEventListener(c,d,i.capture):l.detachEvent?l.detachEvent(Zi(c),d):l.addListener&&l.removeListener&&l.removeListener(d),(c=ms(l))?(us(c,i),c.h==0&&(c.src=null,l[hs]=null)):Zn(i)}}}function Zi(i){return i in fs?fs[i]:fs[i]="on"+i}function Sc(i,l){if(i.da)i=!0;else{l=new hn(l,this);var c=i.listener,d=i.ha||i.src;i.fa&&ds(i),i=c.call(d,l)}return i}function ms(i){return i=i[hs],i instanceof tr?i:null}var ps="__closure_events_fn_"+(1e9*Math.random()>>>0);function to(i){return typeof i=="function"?i:(i[ps]||(i[ps]=function(l){return i.handleEvent(l)}),i[ps])}function At(){re.call(this),this.i=new tr(this),this.M=this,this.F=null}P(At,re),At.prototype[Jn]=!0,At.prototype.removeEventListener=function(i,l,c,d){Ji(this,i,l,c,d)};function Dt(i,l){var c,d=i.F;if(d)for(c=[];d;d=d.F)c.push(d);if(i=i.M,d=l.type||l,typeof l=="string")l=new It(l,i);else if(l instanceof It)l.target=l.target||i;else{var b=l;l=new It(d,i),v(l,b)}if(b=!0,c)for(var R=c.length-1;0<=R;R--){var F=l.g=c[R];b=er(F,d,!0,l)&&b}if(F=l.g=i,b=er(F,d,!0,l)&&b,b=er(F,d,!1,l)&&b,c)for(R=0;R<c.length;R++)F=l.g=c[R],b=er(F,d,!1,l)&&b}At.prototype.N=function(){if(At.aa.N.call(this),this.i){var i=this.i,l;for(l in i.g){for(var c=i.g[l],d=0;d<c.length;d++)Zn(c[d]);delete i.g[l],i.h--}}this.F=null},At.prototype.K=function(i,l,c,d){return this.i.add(String(i),l,!1,c,d)},At.prototype.L=function(i,l,c,d){return this.i.add(String(i),l,!0,c,d)};function er(i,l,c,d){if(l=i.i.g[String(l)],!l)return!0;l=l.concat();for(var b=!0,R=0;R<l.length;++R){var F=l[R];if(F&&!F.da&&F.capture==c){var st=F.listener,Et=F.ha||F.src;F.fa&&us(i.i,F),b=st.call(Et,d)!==!1&&b}}return b&&!d.defaultPrevented}function eo(i,l,c){if(typeof i=="function")c&&(i=T(i,c));else if(i&&typeof i.handleEvent=="function")i=T(i.handleEvent,i);else throw Error("Invalid listener argument");return 2147483647<Number(l)?-1:u.setTimeout(i,l||0)}function no(i){i.g=eo(()=>{i.g=null,i.i&&(i.i=!1,no(i))},i.l);const l=i.h;i.h=null,i.m.apply(null,l)}class Vc extends re{constructor(l,c){super(),this.m=l,this.l=c,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:no(this)}N(){super.N(),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function fn(i){re.call(this),this.h=i,this.g={}}P(fn,re);var ro=[];function so(i){H(i.g,function(l,c){this.g.hasOwnProperty(c)&&ds(l)},i),i.g={}}fn.prototype.N=function(){fn.aa.N.call(this),so(this)},fn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var gs=u.JSON.stringify,Dc=u.JSON.parse,kc=class{stringify(i){return u.JSON.stringify(i,void 0)}parse(i){return u.JSON.parse(i,void 0)}};function _s(){}_s.prototype.h=null;function io(i){return i.h||(i.h=i.i())}function oo(){}var dn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ys(){It.call(this,"d")}P(ys,It);function Es(){It.call(this,"c")}P(Es,It);var we={},ao=null;function nr(){return ao=ao||new At}we.La="serverreachability";function lo(i){It.call(this,we.La,i)}P(lo,It);function mn(i){const l=nr();Dt(l,new lo(l))}we.STAT_EVENT="statevent";function uo(i,l){It.call(this,we.STAT_EVENT,i),this.stat=l}P(uo,It);function kt(i){const l=nr();Dt(l,new uo(l,i))}we.Ma="timingevent";function co(i,l){It.call(this,we.Ma,i),this.size=l}P(co,It);function pn(i,l){if(typeof i!="function")throw Error("Fn must not be null and must be a function");return u.setTimeout(function(){i()},l)}function gn(){this.g=!0}gn.prototype.xa=function(){this.g=!1};function Nc(i,l,c,d,b,R){i.info(function(){if(i.g)if(R)for(var F="",st=R.split("&"),Et=0;Et<st.length;Et++){var tt=st[Et].split("=");if(1<tt.length){var bt=tt[0];tt=tt[1];var Rt=bt.split("_");F=2<=Rt.length&&Rt[1]=="type"?F+(bt+"="+tt+"&"):F+(bt+"=redacted&")}}else F=null;else F=R;return"XMLHTTP REQ ("+d+") [attempt "+b+"]: "+l+`
`+c+`
`+F})}function Oc(i,l,c,d,b,R,F){i.info(function(){return"XMLHTTP RESP ("+d+") [ attempt "+b+"]: "+l+`
`+c+`
`+R+" "+F})}function Le(i,l,c,d){i.info(function(){return"XMLHTTP TEXT ("+l+"): "+Lc(i,c)+(d?" "+d:"")})}function Mc(i,l){i.info(function(){return"TIMEOUT: "+l})}gn.prototype.info=function(){};function Lc(i,l){if(!i.g)return l;if(!l)return null;try{var c=JSON.parse(l);if(c){for(i=0;i<c.length;i++)if(Array.isArray(c[i])){var d=c[i];if(!(2>d.length)){var b=d[1];if(Array.isArray(b)&&!(1>b.length)){var R=b[0];if(R!="noop"&&R!="stop"&&R!="close")for(var F=1;F<b.length;F++)b[F]=""}}}}return gs(c)}catch{return l}}var rr={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ho={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},vs;function sr(){}P(sr,_s),sr.prototype.g=function(){return new XMLHttpRequest},sr.prototype.i=function(){return{}},vs=new sr;function se(i,l,c,d){this.j=i,this.i=l,this.l=c,this.R=d||1,this.U=new fn(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new fo}function fo(){this.i=null,this.g="",this.h=!1}var mo={},Ts={};function ws(i,l,c){i.L=1,i.v=lr(Yt(l)),i.m=c,i.P=!0,po(i,null)}function po(i,l){i.F=Date.now(),ir(i),i.A=Yt(i.v);var c=i.A,d=i.R;Array.isArray(d)||(d=[String(d)]),So(c.i,"t",d),i.C=0,c=i.j.J,i.h=new fo,i.g=Ko(i.j,c?l:null,!i.m),0<i.O&&(i.M=new Vc(T(i.Y,i,i.g),i.O)),l=i.U,c=i.g,d=i.ca;var b="readystatechange";Array.isArray(b)||(b&&(ro[0]=b.toString()),b=ro);for(var R=0;R<b.length;R++){var F=Yi(c,b[R],d||l.handleEvent,!1,l.h||l);if(!F)break;l.g[F.key]=F}l=i.H?g(i.H):{},i.m?(i.u||(i.u="POST"),l["Content-Type"]="application/x-www-form-urlencoded",i.g.ea(i.A,i.u,i.m,l)):(i.u="GET",i.g.ea(i.A,i.u,null,l)),mn(),Nc(i.i,i.u,i.A,i.l,i.R,i.m)}se.prototype.ca=function(i){i=i.target;const l=this.M;l&&Jt(i)==3?l.j():this.Y(i)},se.prototype.Y=function(i){try{if(i==this.g)t:{const Rt=Jt(this.g);var l=this.g.Ba();const Ue=this.g.Z();if(!(3>Rt)&&(Rt!=3||this.g&&(this.h.h||this.g.oa()||Lo(this.g)))){this.J||Rt!=4||l==7||(l==8||0>=Ue?mn(3):mn(2)),Is(this);var c=this.g.Z();this.X=c;e:if(go(this)){var d=Lo(this.g);i="";var b=d.length,R=Jt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ie(this),_n(this);var F="";break e}this.h.i=new u.TextDecoder}for(l=0;l<b;l++)this.h.h=!0,i+=this.h.i.decode(d[l],{stream:!(R&&l==b-1)});d.length=0,this.h.g+=i,this.C=0,F=this.h.g}else F=this.g.oa();if(this.o=c==200,Oc(this.i,this.u,this.A,this.l,this.R,Rt,c),this.o){if(this.T&&!this.K){e:{if(this.g){var st,Et=this.g;if((st=Et.g?Et.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!O(st)){var tt=st;break e}}tt=null}if(c=tt)Le(this.i,this.l,c,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,As(this,c);else{this.o=!1,this.s=3,kt(12),Ie(this),_n(this);break t}}if(this.P){c=!0;let jt;for(;!this.J&&this.C<F.length;)if(jt=Fc(this,F),jt==Ts){Rt==4&&(this.s=4,kt(14),c=!1),Le(this.i,this.l,null,"[Incomplete Response]");break}else if(jt==mo){this.s=4,kt(15),Le(this.i,this.l,F,"[Invalid Chunk]"),c=!1;break}else Le(this.i,this.l,jt,null),As(this,jt);if(go(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Rt!=4||F.length!=0||this.h.h||(this.s=1,kt(16),c=!1),this.o=this.o&&c,!c)Le(this.i,this.l,F,"[Invalid Chunked Response]"),Ie(this),_n(this);else if(0<F.length&&!this.W){this.W=!0;var bt=this.j;bt.g==this&&bt.ba&&!bt.M&&(bt.j.info("Great, no buffering proxy detected. Bytes received: "+F.length),Vs(bt),bt.M=!0,kt(11))}}else Le(this.i,this.l,F,null),As(this,F);Rt==4&&Ie(this),this.o&&!this.J&&(Rt==4?zo(this.j,this):(this.o=!1,ir(this)))}else th(this.g),c==400&&0<F.indexOf("Unknown SID")?(this.s=3,kt(12)):(this.s=0,kt(13)),Ie(this),_n(this)}}}catch{}finally{}};function go(i){return i.g?i.u=="GET"&&i.L!=2&&i.j.Ca:!1}function Fc(i,l){var c=i.C,d=l.indexOf(`
`,c);return d==-1?Ts:(c=Number(l.substring(c,d)),isNaN(c)?mo:(d+=1,d+c>l.length?Ts:(l=l.slice(d,d+c),i.C=d+c,l)))}se.prototype.cancel=function(){this.J=!0,Ie(this)};function ir(i){i.S=Date.now()+i.I,_o(i,i.I)}function _o(i,l){if(i.B!=null)throw Error("WatchDog timer not null");i.B=pn(T(i.ba,i),l)}function Is(i){i.B&&(u.clearTimeout(i.B),i.B=null)}se.prototype.ba=function(){this.B=null;const i=Date.now();0<=i-this.S?(Mc(this.i,this.A),this.L!=2&&(mn(),kt(17)),Ie(this),this.s=2,_n(this)):_o(this,this.S-i)};function _n(i){i.j.G==0||i.J||zo(i.j,i)}function Ie(i){Is(i);var l=i.M;l&&typeof l.ma=="function"&&l.ma(),i.M=null,so(i.U),i.g&&(l=i.g,i.g=null,l.abort(),l.ma())}function As(i,l){try{var c=i.j;if(c.G!=0&&(c.g==i||bs(c.h,i))){if(!i.K&&bs(c.h,i)&&c.G==3){try{var d=c.Da.g.parse(l)}catch{d=null}if(Array.isArray(d)&&d.length==3){var b=d;if(b[0]==0){t:if(!c.u){if(c.g)if(c.g.F+3e3<i.F)mr(c),fr(c);else break t;Ss(c),kt(18)}}else c.za=b[1],0<c.za-c.T&&37500>b[2]&&c.F&&c.v==0&&!c.C&&(c.C=pn(T(c.Za,c),6e3));if(1>=vo(c.h)&&c.ca){try{c.ca()}catch{}c.ca=void 0}}else be(c,11)}else if((i.K||c.g==i)&&mr(c),!O(l))for(b=c.Da.g.parse(l),l=0;l<b.length;l++){let tt=b[l];if(c.T=tt[0],tt=tt[1],c.G==2)if(tt[0]=="c"){c.K=tt[1],c.ia=tt[2];const bt=tt[3];bt!=null&&(c.la=bt,c.j.info("VER="+c.la));const Rt=tt[4];Rt!=null&&(c.Aa=Rt,c.j.info("SVER="+c.Aa));const Ue=tt[5];Ue!=null&&typeof Ue=="number"&&0<Ue&&(d=1.5*Ue,c.L=d,c.j.info("backChannelRequestTimeoutMs_="+d)),d=c;const jt=i.g;if(jt){const gr=jt.g?jt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(gr){var R=d.h;R.g||gr.indexOf("spdy")==-1&&gr.indexOf("quic")==-1&&gr.indexOf("h2")==-1||(R.j=R.l,R.g=new Set,R.h&&(Rs(R,R.h),R.h=null))}if(d.D){const Ds=jt.g?jt.g.getResponseHeader("X-HTTP-Session-Id"):null;Ds&&(d.ya=Ds,ot(d.I,d.D,Ds))}}c.G=3,c.l&&c.l.ua(),c.ba&&(c.R=Date.now()-i.F,c.j.info("Handshake RTT: "+c.R+"ms")),d=c;var F=i;if(d.qa=Go(d,d.J?d.ia:null,d.W),F.K){To(d.h,F);var st=F,Et=d.L;Et&&(st.I=Et),st.B&&(Is(st),ir(st)),d.g=F}else Bo(d);0<c.i.length&&dr(c)}else tt[0]!="stop"&&tt[0]!="close"||be(c,7);else c.G==3&&(tt[0]=="stop"||tt[0]=="close"?tt[0]=="stop"?be(c,7):Cs(c):tt[0]!="noop"&&c.l&&c.l.ta(tt),c.v=0)}}mn(4)}catch{}}var xc=class{constructor(i,l){this.g=i,this.map=l}};function yo(i){this.l=i||10,u.PerformanceNavigationTiming?(i=u.performance.getEntriesByType("navigation"),i=0<i.length&&(i[0].nextHopProtocol=="hq"||i[0].nextHopProtocol=="h2")):i=!!(u.chrome&&u.chrome.loadTimes&&u.chrome.loadTimes()&&u.chrome.loadTimes().wasFetchedViaSpdy),this.j=i?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Eo(i){return i.h?!0:i.g?i.g.size>=i.j:!1}function vo(i){return i.h?1:i.g?i.g.size:0}function bs(i,l){return i.h?i.h==l:i.g?i.g.has(l):!1}function Rs(i,l){i.g?i.g.add(l):i.h=l}function To(i,l){i.h&&i.h==l?i.h=null:i.g&&i.g.has(l)&&i.g.delete(l)}yo.prototype.cancel=function(){if(this.i=wo(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const i of this.g.values())i.cancel();this.g.clear()}};function wo(i){if(i.h!=null)return i.i.concat(i.h.D);if(i.g!=null&&i.g.size!==0){let l=i.i;for(const c of i.g.values())l=l.concat(c.D);return l}return M(i.i)}function Uc(i){if(i.V&&typeof i.V=="function")return i.V();if(typeof Map<"u"&&i instanceof Map||typeof Set<"u"&&i instanceof Set)return Array.from(i.values());if(typeof i=="string")return i.split("");if(h(i)){for(var l=[],c=i.length,d=0;d<c;d++)l.push(i[d]);return l}l=[],c=0;for(d in i)l[c++]=i[d];return l}function jc(i){if(i.na&&typeof i.na=="function")return i.na();if(!i.V||typeof i.V!="function"){if(typeof Map<"u"&&i instanceof Map)return Array.from(i.keys());if(!(typeof Set<"u"&&i instanceof Set)){if(h(i)||typeof i=="string"){var l=[];i=i.length;for(var c=0;c<i;c++)l.push(c);return l}l=[],c=0;for(const d in i)l[c++]=d;return l}}}function Io(i,l){if(i.forEach&&typeof i.forEach=="function")i.forEach(l,void 0);else if(h(i)||typeof i=="string")Array.prototype.forEach.call(i,l,void 0);else for(var c=jc(i),d=Uc(i),b=d.length,R=0;R<b;R++)l.call(void 0,d[R],c&&c[R],i)}var Ao=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Bc(i,l){if(i){i=i.split("&");for(var c=0;c<i.length;c++){var d=i[c].indexOf("="),b=null;if(0<=d){var R=i[c].substring(0,d);b=i[c].substring(d+1)}else R=i[c];l(R,b?decodeURIComponent(b.replace(/\+/g," ")):"")}}}function Ae(i){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,i instanceof Ae){this.h=i.h,or(this,i.j),this.o=i.o,this.g=i.g,ar(this,i.s),this.l=i.l;var l=i.i,c=new vn;c.i=l.i,l.g&&(c.g=new Map(l.g),c.h=l.h),bo(this,c),this.m=i.m}else i&&(l=String(i).match(Ao))?(this.h=!1,or(this,l[1]||"",!0),this.o=yn(l[2]||""),this.g=yn(l[3]||"",!0),ar(this,l[4]),this.l=yn(l[5]||"",!0),bo(this,l[6]||"",!0),this.m=yn(l[7]||"")):(this.h=!1,this.i=new vn(null,this.h))}Ae.prototype.toString=function(){var i=[],l=this.j;l&&i.push(En(l,Ro,!0),":");var c=this.g;return(c||l=="file")&&(i.push("//"),(l=this.o)&&i.push(En(l,Ro,!0),"@"),i.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.s,c!=null&&i.push(":",String(c))),(c=this.l)&&(this.g&&c.charAt(0)!="/"&&i.push("/"),i.push(En(c,c.charAt(0)=="/"?$c:zc,!0))),(c=this.i.toString())&&i.push("?",c),(c=this.m)&&i.push("#",En(c,Gc)),i.join("")};function Yt(i){return new Ae(i)}function or(i,l,c){i.j=c?yn(l,!0):l,i.j&&(i.j=i.j.replace(/:$/,""))}function ar(i,l){if(l){if(l=Number(l),isNaN(l)||0>l)throw Error("Bad port number "+l);i.s=l}else i.s=null}function bo(i,l,c){l instanceof vn?(i.i=l,Kc(i.i,i.h)):(c||(l=En(l,Hc)),i.i=new vn(l,i.h))}function ot(i,l,c){i.i.set(l,c)}function lr(i){return ot(i,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),i}function yn(i,l){return i?l?decodeURI(i.replace(/%25/g,"%2525")):decodeURIComponent(i):""}function En(i,l,c){return typeof i=="string"?(i=encodeURI(i).replace(l,qc),c&&(i=i.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i):null}function qc(i){return i=i.charCodeAt(0),"%"+(i>>4&15).toString(16)+(i&15).toString(16)}var Ro=/[#\/\?@]/g,zc=/[#\?:]/g,$c=/[#\?]/g,Hc=/[#\?@]/g,Gc=/#/g;function vn(i,l){this.h=this.g=null,this.i=i||null,this.j=!!l}function ie(i){i.g||(i.g=new Map,i.h=0,i.i&&Bc(i.i,function(l,c){i.add(decodeURIComponent(l.replace(/\+/g," ")),c)}))}n=vn.prototype,n.add=function(i,l){ie(this),this.i=null,i=Fe(this,i);var c=this.g.get(i);return c||this.g.set(i,c=[]),c.push(l),this.h+=1,this};function Po(i,l){ie(i),l=Fe(i,l),i.g.has(l)&&(i.i=null,i.h-=i.g.get(l).length,i.g.delete(l))}function Co(i,l){return ie(i),l=Fe(i,l),i.g.has(l)}n.forEach=function(i,l){ie(this),this.g.forEach(function(c,d){c.forEach(function(b){i.call(l,b,d,this)},this)},this)},n.na=function(){ie(this);const i=Array.from(this.g.values()),l=Array.from(this.g.keys()),c=[];for(let d=0;d<l.length;d++){const b=i[d];for(let R=0;R<b.length;R++)c.push(l[d])}return c},n.V=function(i){ie(this);let l=[];if(typeof i=="string")Co(this,i)&&(l=l.concat(this.g.get(Fe(this,i))));else{i=Array.from(this.g.values());for(let c=0;c<i.length;c++)l=l.concat(i[c])}return l},n.set=function(i,l){return ie(this),this.i=null,i=Fe(this,i),Co(this,i)&&(this.h-=this.g.get(i).length),this.g.set(i,[l]),this.h+=1,this},n.get=function(i,l){return i?(i=this.V(i),0<i.length?String(i[0]):l):l};function So(i,l,c){Po(i,l),0<c.length&&(i.i=null,i.g.set(Fe(i,l),M(c)),i.h+=c.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const i=[],l=Array.from(this.g.keys());for(var c=0;c<l.length;c++){var d=l[c];const R=encodeURIComponent(String(d)),F=this.V(d);for(d=0;d<F.length;d++){var b=R;F[d]!==""&&(b+="="+encodeURIComponent(String(F[d]))),i.push(b)}}return this.i=i.join("&")};function Fe(i,l){return l=String(l),i.j&&(l=l.toLowerCase()),l}function Kc(i,l){l&&!i.j&&(ie(i),i.i=null,i.g.forEach(function(c,d){var b=d.toLowerCase();d!=b&&(Po(this,d),So(this,b,c))},i)),i.j=l}function Wc(i,l){const c=new gn;if(u.Image){const d=new Image;d.onload=A(oe,c,"TestLoadImage: loaded",!0,l,d),d.onerror=A(oe,c,"TestLoadImage: error",!1,l,d),d.onabort=A(oe,c,"TestLoadImage: abort",!1,l,d),d.ontimeout=A(oe,c,"TestLoadImage: timeout",!1,l,d),u.setTimeout(function(){d.ontimeout&&d.ontimeout()},1e4),d.src=i}else l(!1)}function Qc(i,l){const c=new gn,d=new AbortController,b=setTimeout(()=>{d.abort(),oe(c,"TestPingServer: timeout",!1,l)},1e4);fetch(i,{signal:d.signal}).then(R=>{clearTimeout(b),R.ok?oe(c,"TestPingServer: ok",!0,l):oe(c,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(b),oe(c,"TestPingServer: error",!1,l)})}function oe(i,l,c,d,b){try{b&&(b.onload=null,b.onerror=null,b.onabort=null,b.ontimeout=null),d(c)}catch{}}function Xc(){this.g=new kc}function Yc(i,l,c){const d=c||"";try{Io(i,function(b,R){let F=b;f(b)&&(F=gs(b)),l.push(d+R+"="+encodeURIComponent(F))})}catch(b){throw l.push(d+"type="+encodeURIComponent("_badmap")),b}}function ur(i){this.l=i.Ub||null,this.j=i.eb||!1}P(ur,_s),ur.prototype.g=function(){return new cr(this.l,this.j)},ur.prototype.i=function(i){return function(){return i}}({});function cr(i,l){At.call(this),this.D=i,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}P(cr,At),n=cr.prototype,n.open=function(i,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=i,this.A=l,this.readyState=1,wn(this)},n.send=function(i){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const l={headers:this.u,method:this.B,credentials:this.m,cache:void 0};i&&(l.body=i),(this.D||u).fetch(new Request(this.A,l)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Tn(this)),this.readyState=0},n.Sa=function(i){if(this.g&&(this.l=i,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=i.headers,this.readyState=2,wn(this)),this.g&&(this.readyState=3,wn(this),this.g)))if(this.responseType==="arraybuffer")i.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof u.ReadableStream<"u"&&"body"in i){if(this.j=i.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Vo(this)}else i.text().then(this.Ra.bind(this),this.ga.bind(this))};function Vo(i){i.j.read().then(i.Pa.bind(i)).catch(i.ga.bind(i))}n.Pa=function(i){if(this.g){if(this.o&&i.value)this.response.push(i.value);else if(!this.o){var l=i.value?i.value:new Uint8Array(0);(l=this.v.decode(l,{stream:!i.done}))&&(this.response=this.responseText+=l)}i.done?Tn(this):wn(this),this.readyState==3&&Vo(this)}},n.Ra=function(i){this.g&&(this.response=this.responseText=i,Tn(this))},n.Qa=function(i){this.g&&(this.response=i,Tn(this))},n.ga=function(){this.g&&Tn(this)};function Tn(i){i.readyState=4,i.l=null,i.j=null,i.v=null,wn(i)}n.setRequestHeader=function(i,l){this.u.append(i,l)},n.getResponseHeader=function(i){return this.h&&this.h.get(i.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const i=[],l=this.h.entries();for(var c=l.next();!c.done;)c=c.value,i.push(c[0]+": "+c[1]),c=l.next();return i.join(`\r
`)};function wn(i){i.onreadystatechange&&i.onreadystatechange.call(i)}Object.defineProperty(cr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(i){this.m=i?"include":"same-origin"}});function Do(i){let l="";return H(i,function(c,d){l+=d,l+=":",l+=c,l+=`\r
`}),l}function Ps(i,l,c){t:{for(d in c){var d=!1;break t}d=!0}d||(c=Do(c),typeof i=="string"?c!=null&&encodeURIComponent(String(c)):ot(i,l,c))}function ct(i){At.call(this),this.headers=new Map,this.o=i||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}P(ct,At);var Jc=/^https?$/i,Zc=["POST","PUT"];n=ct.prototype,n.Ha=function(i){this.J=i},n.ea=function(i,l,c,d){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+i);l=l?l.toUpperCase():"GET",this.D=i,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():vs.g(),this.v=this.o?io(this.o):io(vs),this.g.onreadystatechange=T(this.Ea,this);try{this.B=!0,this.g.open(l,String(i),!0),this.B=!1}catch(R){ko(this,R);return}if(i=c||"",c=new Map(this.headers),d)if(Object.getPrototypeOf(d)===Object.prototype)for(var b in d)c.set(b,d[b]);else if(typeof d.keys=="function"&&typeof d.get=="function")for(const R of d.keys())c.set(R,d.get(R));else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(c.keys()).find(R=>R.toLowerCase()=="content-type"),b=u.FormData&&i instanceof u.FormData,!(0<=Array.prototype.indexOf.call(Zc,l,void 0))||d||b||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[R,F]of c)this.g.setRequestHeader(R,F);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Mo(this),this.u=!0,this.g.send(i),this.u=!1}catch(R){ko(this,R)}};function ko(i,l){i.h=!1,i.g&&(i.j=!0,i.g.abort(),i.j=!1),i.l=l,i.m=5,No(i),hr(i)}function No(i){i.A||(i.A=!0,Dt(i,"complete"),Dt(i,"error"))}n.abort=function(i){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=i||7,Dt(this,"complete"),Dt(this,"abort"),hr(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),hr(this,!0)),ct.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Oo(this):this.bb())},n.bb=function(){Oo(this)};function Oo(i){if(i.h&&typeof a<"u"&&(!i.v[1]||Jt(i)!=4||i.Z()!=2)){if(i.u&&Jt(i)==4)eo(i.Ea,0,i);else if(Dt(i,"readystatechange"),Jt(i)==4){i.h=!1;try{const F=i.Z();t:switch(F){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break t;default:l=!1}var c;if(!(c=l)){var d;if(d=F===0){var b=String(i.D).match(Ao)[1]||null;!b&&u.self&&u.self.location&&(b=u.self.location.protocol.slice(0,-1)),d=!Jc.test(b?b.toLowerCase():"")}c=d}if(c)Dt(i,"complete"),Dt(i,"success");else{i.m=6;try{var R=2<Jt(i)?i.g.statusText:""}catch{R=""}i.l=R+" ["+i.Z()+"]",No(i)}}finally{hr(i)}}}}function hr(i,l){if(i.g){Mo(i);const c=i.g,d=i.v[0]?()=>{}:null;i.g=null,i.v=null,l||Dt(i,"ready");try{c.onreadystatechange=d}catch{}}}function Mo(i){i.I&&(u.clearTimeout(i.I),i.I=null)}n.isActive=function(){return!!this.g};function Jt(i){return i.g?i.g.readyState:0}n.Z=function(){try{return 2<Jt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(i){if(this.g){var l=this.g.responseText;return i&&l.indexOf(i)==0&&(l=l.substring(i.length)),Dc(l)}};function Lo(i){try{if(!i.g)return null;if("response"in i.g)return i.g.response;switch(i.H){case"":case"text":return i.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in i.g)return i.g.mozResponseArrayBuffer}return null}catch{return null}}function th(i){const l={};i=(i.g&&2<=Jt(i)&&i.g.getAllResponseHeaders()||"").split(`\r
`);for(let d=0;d<i.length;d++){if(O(i[d]))continue;var c=w(i[d]);const b=c[0];if(c=c[1],typeof c!="string")continue;c=c.trim();const R=l[b]||[];l[b]=R,R.push(c)}_(l,function(d){return d.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function In(i,l,c){return c&&c.internalChannelParams&&c.internalChannelParams[i]||l}function Fo(i){this.Aa=0,this.i=[],this.j=new gn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=In("failFast",!1,i),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=In("baseRetryDelayMs",5e3,i),this.cb=In("retryDelaySeedMs",1e4,i),this.Wa=In("forwardChannelMaxRetries",2,i),this.wa=In("forwardChannelRequestTimeoutMs",2e4,i),this.pa=i&&i.xmlHttpFactory||void 0,this.Xa=i&&i.Tb||void 0,this.Ca=i&&i.useFetchStreams||!1,this.L=void 0,this.J=i&&i.supportsCrossDomainXhr||!1,this.K="",this.h=new yo(i&&i.concurrentRequestLimit),this.Da=new Xc,this.P=i&&i.fastHandshake||!1,this.O=i&&i.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=i&&i.Rb||!1,i&&i.xa&&this.j.xa(),i&&i.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&i&&i.detectBufferingProxy||!1,this.ja=void 0,i&&i.longPollingTimeout&&0<i.longPollingTimeout&&(this.ja=i.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Fo.prototype,n.la=8,n.G=1,n.connect=function(i,l,c,d){kt(0),this.W=i,this.H=l||{},c&&d!==void 0&&(this.H.OSID=c,this.H.OAID=d),this.F=this.X,this.I=Go(this,null,this.W),dr(this)};function Cs(i){if(xo(i),i.G==3){var l=i.U++,c=Yt(i.I);if(ot(c,"SID",i.K),ot(c,"RID",l),ot(c,"TYPE","terminate"),An(i,c),l=new se(i,i.j,l),l.L=2,l.v=lr(Yt(c)),c=!1,u.navigator&&u.navigator.sendBeacon)try{c=u.navigator.sendBeacon(l.v.toString(),"")}catch{}!c&&u.Image&&(new Image().src=l.v,c=!0),c||(l.g=Ko(l.j,null),l.g.ea(l.v)),l.F=Date.now(),ir(l)}Ho(i)}function fr(i){i.g&&(Vs(i),i.g.cancel(),i.g=null)}function xo(i){fr(i),i.u&&(u.clearTimeout(i.u),i.u=null),mr(i),i.h.cancel(),i.s&&(typeof i.s=="number"&&u.clearTimeout(i.s),i.s=null)}function dr(i){if(!Eo(i.h)&&!i.s){i.s=!0;var l=i.Ga;Qt||yt(),Xt||(Qt(),Xt=!0),Me.add(l,i),i.B=0}}function eh(i,l){return vo(i.h)>=i.h.j-(i.s?1:0)?!1:i.s?(i.i=l.D.concat(i.i),!0):i.G==1||i.G==2||i.B>=(i.Va?0:i.Wa)?!1:(i.s=pn(T(i.Ga,i,l),$o(i,i.B)),i.B++,!0)}n.Ga=function(i){if(this.s)if(this.s=null,this.G==1){if(!i){this.U=Math.floor(1e5*Math.random()),i=this.U++;const b=new se(this,this.j,i);let R=this.o;if(this.S&&(R?(R=g(R),v(R,this.S)):R=this.S),this.m!==null||this.O||(b.H=R,R=null),this.P)t:{for(var l=0,c=0;c<this.i.length;c++){e:{var d=this.i[c];if("__data__"in d.map&&(d=d.map.__data__,typeof d=="string")){d=d.length;break e}d=void 0}if(d===void 0)break;if(l+=d,4096<l){l=c;break t}if(l===4096||c===this.i.length-1){l=c+1;break t}}l=1e3}else l=1e3;l=jo(this,b,l),c=Yt(this.I),ot(c,"RID",i),ot(c,"CVER",22),this.D&&ot(c,"X-HTTP-Session-Id",this.D),An(this,c),R&&(this.O?l="headers="+encodeURIComponent(String(Do(R)))+"&"+l:this.m&&Ps(c,this.m,R)),Rs(this.h,b),this.Ua&&ot(c,"TYPE","init"),this.P?(ot(c,"$req",l),ot(c,"SID","null"),b.T=!0,ws(b,c,null)):ws(b,c,l),this.G=2}}else this.G==3&&(i?Uo(this,i):this.i.length==0||Eo(this.h)||Uo(this))};function Uo(i,l){var c;l?c=l.l:c=i.U++;const d=Yt(i.I);ot(d,"SID",i.K),ot(d,"RID",c),ot(d,"AID",i.T),An(i,d),i.m&&i.o&&Ps(d,i.m,i.o),c=new se(i,i.j,c,i.B+1),i.m===null&&(c.H=i.o),l&&(i.i=l.D.concat(i.i)),l=jo(i,c,1e3),c.I=Math.round(.5*i.wa)+Math.round(.5*i.wa*Math.random()),Rs(i.h,c),ws(c,d,l)}function An(i,l){i.H&&H(i.H,function(c,d){ot(l,d,c)}),i.l&&Io({},function(c,d){ot(l,d,c)})}function jo(i,l,c){c=Math.min(i.i.length,c);var d=i.l?T(i.l.Na,i.l,i):null;t:{var b=i.i;let R=-1;for(;;){const F=["count="+c];R==-1?0<c?(R=b[0].g,F.push("ofs="+R)):R=0:F.push("ofs="+R);let st=!0;for(let Et=0;Et<c;Et++){let tt=b[Et].g;const bt=b[Et].map;if(tt-=R,0>tt)R=Math.max(0,b[Et].g-100),st=!1;else try{Yc(bt,F,"req"+tt+"_")}catch{d&&d(bt)}}if(st){d=F.join("&");break t}}}return i=i.i.splice(0,c),l.D=i,d}function Bo(i){if(!i.g&&!i.u){i.Y=1;var l=i.Fa;Qt||yt(),Xt||(Qt(),Xt=!0),Me.add(l,i),i.v=0}}function Ss(i){return i.g||i.u||3<=i.v?!1:(i.Y++,i.u=pn(T(i.Fa,i),$o(i,i.v)),i.v++,!0)}n.Fa=function(){if(this.u=null,qo(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var i=2*this.R;this.j.info("BP detection timer enabled: "+i),this.A=pn(T(this.ab,this),i)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,kt(10),fr(this),qo(this))};function Vs(i){i.A!=null&&(u.clearTimeout(i.A),i.A=null)}function qo(i){i.g=new se(i,i.j,"rpc",i.Y),i.m===null&&(i.g.H=i.o),i.g.O=0;var l=Yt(i.qa);ot(l,"RID","rpc"),ot(l,"SID",i.K),ot(l,"AID",i.T),ot(l,"CI",i.F?"0":"1"),!i.F&&i.ja&&ot(l,"TO",i.ja),ot(l,"TYPE","xmlhttp"),An(i,l),i.m&&i.o&&Ps(l,i.m,i.o),i.L&&(i.g.I=i.L);var c=i.g;i=i.ia,c.L=1,c.v=lr(Yt(l)),c.m=null,c.P=!0,po(c,i)}n.Za=function(){this.C!=null&&(this.C=null,fr(this),Ss(this),kt(19))};function mr(i){i.C!=null&&(u.clearTimeout(i.C),i.C=null)}function zo(i,l){var c=null;if(i.g==l){mr(i),Vs(i),i.g=null;var d=2}else if(bs(i.h,l))c=l.D,To(i.h,l),d=1;else return;if(i.G!=0){if(l.o)if(d==1){c=l.m?l.m.length:0,l=Date.now()-l.F;var b=i.B;d=nr(),Dt(d,new co(d,c)),dr(i)}else Bo(i);else if(b=l.s,b==3||b==0&&0<l.X||!(d==1&&eh(i,l)||d==2&&Ss(i)))switch(c&&0<c.length&&(l=i.h,l.i=l.i.concat(c)),b){case 1:be(i,5);break;case 4:be(i,10);break;case 3:be(i,6);break;default:be(i,2)}}}function $o(i,l){let c=i.Ta+Math.floor(Math.random()*i.cb);return i.isActive()||(c*=2),c*l}function be(i,l){if(i.j.info("Error code "+l),l==2){var c=T(i.fb,i),d=i.Xa;const b=!d;d=new Ae(d||"//www.google.com/images/cleardot.gif"),u.location&&u.location.protocol=="http"||or(d,"https"),lr(d),b?Wc(d.toString(),c):Qc(d.toString(),c)}else kt(2);i.G=0,i.l&&i.l.sa(l),Ho(i),xo(i)}n.fb=function(i){i?(this.j.info("Successfully pinged google.com"),kt(2)):(this.j.info("Failed to ping google.com"),kt(1))};function Ho(i){if(i.G=0,i.ka=[],i.l){const l=wo(i.h);(l.length!=0||i.i.length!=0)&&(D(i.ka,l),D(i.ka,i.i),i.h.i.length=0,M(i.i),i.i.length=0),i.l.ra()}}function Go(i,l,c){var d=c instanceof Ae?Yt(c):new Ae(c);if(d.g!="")l&&(d.g=l+"."+d.g),ar(d,d.s);else{var b=u.location;d=b.protocol,l=l?l+"."+b.hostname:b.hostname,b=+b.port;var R=new Ae(null);d&&or(R,d),l&&(R.g=l),b&&ar(R,b),c&&(R.l=c),d=R}return c=i.D,l=i.ya,c&&l&&ot(d,c,l),ot(d,"VER",i.la),An(i,d),d}function Ko(i,l,c){if(l&&!i.J)throw Error("Can't create secondary domain capable XhrIo object.");return l=i.Ca&&!i.pa?new ct(new ur({eb:c})):new ct(i.pa),l.Ha(i.J),l}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Wo(){}n=Wo.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function pr(){}pr.prototype.g=function(i,l){return new Mt(i,l)};function Mt(i,l){At.call(this),this.g=new Fo(l),this.l=i,this.h=l&&l.messageUrlParams||null,i=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(i?i["X-Client-Protocol"]="webchannel":i={"X-Client-Protocol":"webchannel"}),this.g.o=i,i=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(i?i["X-WebChannel-Content-Type"]=l.messageContentType:i={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.va&&(i?i["X-WebChannel-Client-Profile"]=l.va:i={"X-WebChannel-Client-Profile":l.va}),this.g.S=i,(i=l&&l.Sb)&&!O(i)&&(this.g.m=i),this.v=l&&l.supportsCrossDomainXhr||!1,this.u=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!O(l)&&(this.g.D=l,i=this.h,i!==null&&l in i&&(i=this.h,l in i&&delete i[l])),this.j=new xe(this)}P(Mt,At),Mt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Mt.prototype.close=function(){Cs(this.g)},Mt.prototype.o=function(i){var l=this.g;if(typeof i=="string"){var c={};c.__data__=i,i=c}else this.u&&(c={},c.__data__=gs(i),i=c);l.i.push(new xc(l.Ya++,i)),l.G==3&&dr(l)},Mt.prototype.N=function(){this.g.l=null,delete this.j,Cs(this.g),delete this.g,Mt.aa.N.call(this)};function Qo(i){ys.call(this),i.__headers__&&(this.headers=i.__headers__,this.statusCode=i.__status__,delete i.__headers__,delete i.__status__);var l=i.__sm__;if(l){t:{for(const c in l){i=c;break t}i=void 0}(this.i=i)&&(i=this.i,l=l!==null&&i in l?l[i]:void 0),this.data=l}else this.data=i}P(Qo,ys);function Xo(){Es.call(this),this.status=1}P(Xo,Es);function xe(i){this.g=i}P(xe,Wo),xe.prototype.ua=function(){Dt(this.g,"a")},xe.prototype.ta=function(i){Dt(this.g,new Qo(i))},xe.prototype.sa=function(i){Dt(this.g,new Xo)},xe.prototype.ra=function(){Dt(this.g,"b")},pr.prototype.createWebChannel=pr.prototype.g,Mt.prototype.send=Mt.prototype.o,Mt.prototype.open=Mt.prototype.m,Mt.prototype.close=Mt.prototype.close,Xl=function(){return new pr},Ql=function(){return nr()},Wl=we,Ys={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},rr.NO_ERROR=0,rr.TIMEOUT=8,rr.HTTP_ERROR=6,Ar=rr,ho.COMPLETE="complete",Kl=ho,oo.EventType=dn,dn.OPEN="a",dn.CLOSE="b",dn.ERROR="c",dn.MESSAGE="d",At.prototype.listen=At.prototype.K,bn=oo,ct.prototype.listenOnce=ct.prototype.L,ct.prototype.getLastError=ct.prototype.Ka,ct.prototype.getLastErrorCode=ct.prototype.Ba,ct.prototype.getStatus=ct.prototype.Z,ct.prototype.getResponseJson=ct.prototype.Oa,ct.prototype.getResponseText=ct.prototype.oa,ct.prototype.send=ct.prototype.ea,ct.prototype.setWithCredentials=ct.prototype.Ha,Gl=ct}).apply(typeof _r<"u"?_r:typeof self<"u"?self:typeof window<"u"?window:{});const fa="@firebase/firestore",da="4.7.10";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Ct.UNAUTHENTICATED=new Ct(null),Ct.GOOGLE_CREDENTIALS=new Ct("google-credentials-uid"),Ct.FIRST_PARTY=new Ct("first-party-uid"),Ct.MOCK_USER=new Ct("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let on="11.5.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Se=new Ul("@firebase/firestore");function ze(){return Se.logLevel}function U(n,...t){if(Se.logLevel<=Z.DEBUG){const e=t.map(Ei);Se.debug(`Firestore (${on}): ${n}`,...e)}}function ee(n,...t){if(Se.logLevel<=Z.ERROR){const e=t.map(Ei);Se.error(`Firestore (${on}): ${n}`,...e)}}function Ye(n,...t){if(Se.logLevel<=Z.WARN){const e=t.map(Ei);Se.warn(`Firestore (${on}): ${n}`,...e)}}function Ei(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(e){return JSON.stringify(e)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G(n="Unexpected state"){const t=`FIRESTORE (${on}) INTERNAL ASSERTION FAILED: `+n;throw ee(t),new Error(t)}function rt(n,t){n||G()}function W(n,t){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class j extends sn{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yl{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Kf{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(Ct.UNAUTHENTICATED))}shutdown(){}}class Wf{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class Qf{constructor(t){this.t=t,this.currentUser=Ct.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){rt(this.o===void 0);let r=this.i;const s=h=>this.i!==r?(r=this.i,e(h)):Promise.resolve();let o=new de;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new de,t.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const h=o;t.enqueueRetryable(async()=>{await h.promise,await s(this.currentUser)})},u=h=>{U("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(h=>u(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?u(h):(U("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new de)}},0),a()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(r=>this.i!==t?(U("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(rt(typeof r.accessToken=="string"),new Yl(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return rt(t===null||typeof t=="string"),new Ct(t)}}class Xf{constructor(t,e,r){this.l=t,this.h=e,this.P=r,this.type="FirstParty",this.user=Ct.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.T.set("Authorization",t),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class Yf{constructor(t,e,r){this.l=t,this.h=e,this.P=r}getToken(){return Promise.resolve(new Xf(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(Ct.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ma{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Jf{constructor(t,e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,kf(t)&&t.settings.appCheckToken&&(this.V=t.settings.appCheckToken)}start(t,e){rt(this.o===void 0);const r=o=>{o.error!=null&&U("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.R;return this.R=o.token,U("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>r(o))};const s=o=>{U("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>s(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?s(o):U("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new ma(this.V));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(rt(typeof e.token=="string"),this.R=e.token,new ma(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zf(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jl(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zl{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=Zf(40);for(let o=0;o<s.length;++o)r.length<20&&s[o]<e&&(r+=t.charAt(s[o]%62))}return r}}function X(n,t){return n<t?-1:n>t?1:0}function Js(n,t){let e=0;for(;e<n.length&&e<t.length;){const r=n.codePointAt(e),s=t.codePointAt(e);if(r!==s){if(r<128&&s<128)return X(r,s);{const o=Jl(),a=td(o.encode(pa(n,e)),o.encode(pa(t,e)));return a!==0?a:X(r,s)}}e+=r>65535?2:1}return X(n.length,t.length)}function pa(n,t){return n.codePointAt(t)>65535?n.substring(t,t+2):n.substring(t,t+1)}function td(n,t){for(let e=0;e<n.length&&e<t.length;++e)if(n[e]!==t[e])return X(n[e],t[e]);return X(n.length,t.length)}function Je(n,t,e){return n.length===t.length&&n.every((r,s)=>e(r,t[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ga=-62135596800,_a=1e6;class pt{static now(){return pt.fromMillis(Date.now())}static fromDate(t){return pt.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor((t-1e3*e)*_a);return new pt(e,r)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new j(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new j(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<ga)throw new j(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new j(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/_a}_compareTo(t){return this.seconds===t.seconds?X(this.nanoseconds,t.nanoseconds):X(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds-ga;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{static fromTimestamp(t){return new K(t)}static min(){return new K(new pt(0,0))}static max(){return new K(new pt(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ya="__name__";class Ht{constructor(t,e,r){e===void 0?e=0:e>t.length&&G(),r===void 0?r=t.length-e:r>t.length-e&&G(),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return Ht.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Ht?t.forEach(r=>{e.push(r)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let s=0;s<r;s++){const o=Ht.compareSegments(t.get(s),e.get(s));if(o!==0)return o}return X(t.length,e.length)}static compareSegments(t,e){const r=Ht.isNumericId(t),s=Ht.isNumericId(e);return r&&!s?-1:!r&&s?1:r&&s?Ht.extractNumericId(t).compare(Ht.extractNumericId(e)):Js(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return fe.fromString(t.substring(4,t.length-2))}}class at extends Ht{construct(t,e,r){return new at(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new j(S.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter(s=>s.length>0))}return new at(e)}static emptyPath(){return new at([])}}const ed=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Tt extends Ht{construct(t,e,r){return new Tt(t,e,r)}static isValidIdentifier(t){return ed.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Tt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===ya}static keyField(){return new Tt([ya])}static fromServerFormat(t){const e=[];let r="",s=0;const o=()=>{if(r.length===0)throw new j(S.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let a=!1;for(;s<t.length;){const u=t[s];if(u==="\\"){if(s+1===t.length)throw new j(S.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const h=t[s+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new j(S.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=h,s+=2}else u==="`"?(a=!a,s++):u!=="."||a?(r+=u,s++):(o(),s++)}if(o(),a)throw new j(S.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Tt(e)}static emptyPath(){return new Tt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(t){this.path=t}static fromPath(t){return new z(at.fromString(t))}static fromName(t){return new z(at.fromString(t).popFirst(5))}static empty(){return new z(at.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&at.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return at.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new z(new at(t.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ln=-1;function nd(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=K.fromTimestamp(r===1e9?new pt(e+1,0):new pt(e,r));return new pe(s,z.empty(),t)}function rd(n){return new pe(n.readTime,n.key,Ln)}class pe{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new pe(K.min(),z.empty(),Ln)}static max(){return new pe(K.max(),z.empty(),Ln)}}function sd(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=z.comparator(n.documentKey,t.documentKey),e!==0?e:X(n.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const id="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class od{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function an(n){if(n.code!==S.FAILED_PRECONDITION||n.message!==id)throw n;U("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&G(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new C((r,s)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(r,s)},this.catchCallback=o=>{this.wrapFailure(e,o).next(r,s)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof C?e:C.resolve(e)}catch(e){return C.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):C.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):C.reject(e)}static resolve(t){return new C((e,r)=>{e(t)})}static reject(t){return new C((e,r)=>{r(t)})}static waitFor(t){return new C((e,r)=>{let s=0,o=0,a=!1;t.forEach(u=>{++s,u.next(()=>{++o,a&&o===s&&e()},h=>r(h))}),a=!0,o===s&&e()})}static or(t){let e=C.resolve(!1);for(const r of t)e=e.next(s=>s?C.resolve(s):r());return e}static forEach(t,e){const r=[];return t.forEach((s,o)=>{r.push(e.call(this,s,o))}),this.waitFor(r)}static mapArray(t,e){return new C((r,s)=>{const o=t.length,a=new Array(o);let u=0;for(let h=0;h<o;h++){const f=h;e(t[f]).next(p=>{a[f]=p,++u,u===o&&r(a)},p=>s(p))}})}static doWhile(t,e){return new C((r,s)=>{const o=()=>{t()===!0?e().next(()=>{o()},s):r()};o()})}}function ad(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function ln(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.oe(r),this._e=r=>e.writeSequenceNumber(r))}oe(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this._e&&this._e(t),t}}Qr.ae=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vi=-1;function Xr(n){return n==null}function Mr(n){return n===0&&1/n==-1/0}function ld(n){return typeof n=="number"&&Number.isInteger(n)&&!Mr(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tu="";function ud(n){let t="";for(let e=0;e<n.length;e++)t.length>0&&(t=Ea(t)),t=cd(n.get(e),t);return Ea(t)}function cd(n,t){let e=t;const r=n.length;for(let s=0;s<r;s++){const o=n.charAt(s);switch(o){case"\0":e+="";break;case tu:e+="";break;default:e+=o}}return e}function Ea(n){return n+tu+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function va(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function De(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function eu(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(t,e){this.comparator=t,this.root=e||vt.EMPTY}insert(t,e){return new ut(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,vt.BLACK,null,null))}remove(t){return new ut(this.comparator,this.root.remove(t,this.comparator).copy(null,null,vt.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(t,r.key);if(s===0)return e+r.left.size;s<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,r)=>(t(e,r),!1))}toString(){const t=[];return this.inorderTraversal((e,r)=>(t.push(`${e}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new yr(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new yr(this.root,t,this.comparator,!1)}getReverseIterator(){return new yr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new yr(this.root,t,this.comparator,!0)}}class yr{constructor(t,e,r,s){this.isReverse=s,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?r(t.key,e):1,e&&s&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class vt{constructor(t,e,r,s,o){this.key=t,this.value=e,this.color=r??vt.RED,this.left=s??vt.EMPTY,this.right=o??vt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,s,o){return new vt(t??this.key,e??this.value,r??this.color,s??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let s=this;const o=r(t,s.key);return s=o<0?s.copy(null,null,null,s.left.insert(t,e,r),null):o===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return vt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return vt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,vt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,vt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw G();const t=this.left.check();if(t!==this.right.check())throw G();return t+(this.isRed()?0:1)}}vt.EMPTY=null,vt.RED=!0,vt.BLACK=!1;vt.EMPTY=new class{constructor(){this.size=0}get key(){throw G()}get value(){throw G()}get color(){throw G()}get left(){throw G()}get right(){throw G()}copy(t,e,r,s,o){return this}insert(t,e,r){return new vt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(t){this.comparator=t,this.data=new ut(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,r)=>(t(e),!1))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Ta(this.data.getIterator())}getIteratorFrom(t){return new Ta(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(r=>{e=e.add(r)}),e}isEqual(t){if(!(t instanceof gt)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=r.getNext().key;if(this.comparator(s,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new gt(this.comparator);return e.data=t,e}}class Ta{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(t){this.fields=t,t.sort(Tt.comparator)}static empty(){return new qt([])}unionWith(t){let e=new gt(Tt.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new qt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Je(this.fields,t.fields,(e,r)=>e.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nu extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(s){try{return atob(s)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new nu("Invalid base64 string: "+o):o}}(t);return new wt(e)}static fromUint8Array(t){const e=function(s){let o="";for(let a=0;a<s.length;++a)o+=String.fromCharCode(s[a]);return o}(t);return new wt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const r=new Uint8Array(e.length);for(let s=0;s<e.length;s++)r[s]=e.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return X(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}wt.EMPTY_BYTE_STRING=new wt("");const hd=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ge(n){if(rt(!!n),typeof n=="string"){let t=0;const e=hd.exec(n);if(rt(!!e),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:ft(n.seconds),nanos:ft(n.nanos)}}function ft(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function _e(n){return typeof n=="string"?wt.fromBase64String(n):wt.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ru="server_timestamp",su="__type__",iu="__previous_value__",ou="__local_write_time__";function Ti(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{})[su])===null||e===void 0?void 0:e.stringValue)===ru}function Yr(n){const t=n.mapValue.fields[iu];return Ti(t)?Yr(t):t}function Fn(n){const t=ge(n.mapValue.fields[ou].timestampValue);return new pt(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fd{constructor(t,e,r,s,o,a,u,h,f){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=s,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=u,this.longPollingOptions=h,this.useFetchStreams=f}}const Lr="(default)";class xn{constructor(t,e){this.projectId=t,this.database=e||Lr}static empty(){return new xn("","")}get isDefaultDatabase(){return this.database===Lr}isEqual(t){return t instanceof xn&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const au="__type__",dd="__max__",Er={mapValue:{}},lu="__vector__",Fr="value";function ye(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Ti(n)?4:pd(n)?9007199254740991:md(n)?10:11:G()}function Wt(n,t){if(n===t)return!0;const e=ye(n);if(e!==ye(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return Fn(n).isEqual(Fn(t));case 3:return function(s,o){if(typeof s.timestampValue=="string"&&typeof o.timestampValue=="string"&&s.timestampValue.length===o.timestampValue.length)return s.timestampValue===o.timestampValue;const a=ge(s.timestampValue),u=ge(o.timestampValue);return a.seconds===u.seconds&&a.nanos===u.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(s,o){return _e(s.bytesValue).isEqual(_e(o.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(s,o){return ft(s.geoPointValue.latitude)===ft(o.geoPointValue.latitude)&&ft(s.geoPointValue.longitude)===ft(o.geoPointValue.longitude)}(n,t);case 2:return function(s,o){if("integerValue"in s&&"integerValue"in o)return ft(s.integerValue)===ft(o.integerValue);if("doubleValue"in s&&"doubleValue"in o){const a=ft(s.doubleValue),u=ft(o.doubleValue);return a===u?Mr(a)===Mr(u):isNaN(a)&&isNaN(u)}return!1}(n,t);case 9:return Je(n.arrayValue.values||[],t.arrayValue.values||[],Wt);case 10:case 11:return function(s,o){const a=s.mapValue.fields||{},u=o.mapValue.fields||{};if(va(a)!==va(u))return!1;for(const h in a)if(a.hasOwnProperty(h)&&(u[h]===void 0||!Wt(a[h],u[h])))return!1;return!0}(n,t);default:return G()}}function Un(n,t){return(n.values||[]).find(e=>Wt(e,t))!==void 0}function Ze(n,t){if(n===t)return 0;const e=ye(n),r=ye(t);if(e!==r)return X(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return X(n.booleanValue,t.booleanValue);case 2:return function(o,a){const u=ft(o.integerValue||o.doubleValue),h=ft(a.integerValue||a.doubleValue);return u<h?-1:u>h?1:u===h?0:isNaN(u)?isNaN(h)?0:-1:1}(n,t);case 3:return wa(n.timestampValue,t.timestampValue);case 4:return wa(Fn(n),Fn(t));case 5:return Js(n.stringValue,t.stringValue);case 6:return function(o,a){const u=_e(o),h=_e(a);return u.compareTo(h)}(n.bytesValue,t.bytesValue);case 7:return function(o,a){const u=o.split("/"),h=a.split("/");for(let f=0;f<u.length&&f<h.length;f++){const p=X(u[f],h[f]);if(p!==0)return p}return X(u.length,h.length)}(n.referenceValue,t.referenceValue);case 8:return function(o,a){const u=X(ft(o.latitude),ft(a.latitude));return u!==0?u:X(ft(o.longitude),ft(a.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return Ia(n.arrayValue,t.arrayValue);case 10:return function(o,a){var u,h,f,p;const E=o.fields||{},T=a.fields||{},A=(u=E[Fr])===null||u===void 0?void 0:u.arrayValue,P=(h=T[Fr])===null||h===void 0?void 0:h.arrayValue,M=X(((f=A==null?void 0:A.values)===null||f===void 0?void 0:f.length)||0,((p=P==null?void 0:P.values)===null||p===void 0?void 0:p.length)||0);return M!==0?M:Ia(A,P)}(n.mapValue,t.mapValue);case 11:return function(o,a){if(o===Er.mapValue&&a===Er.mapValue)return 0;if(o===Er.mapValue)return 1;if(a===Er.mapValue)return-1;const u=o.fields||{},h=Object.keys(u),f=a.fields||{},p=Object.keys(f);h.sort(),p.sort();for(let E=0;E<h.length&&E<p.length;++E){const T=Js(h[E],p[E]);if(T!==0)return T;const A=Ze(u[h[E]],f[p[E]]);if(A!==0)return A}return X(h.length,p.length)}(n.mapValue,t.mapValue);default:throw G()}}function wa(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return X(n,t);const e=ge(n),r=ge(t),s=X(e.seconds,r.seconds);return s!==0?s:X(e.nanos,r.nanos)}function Ia(n,t){const e=n.values||[],r=t.values||[];for(let s=0;s<e.length&&s<r.length;++s){const o=Ze(e[s],r[s]);if(o)return o}return X(e.length,r.length)}function tn(n){return Zs(n)}function Zs(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const r=ge(e);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return _e(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return z.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let r="[",s=!0;for(const o of e.values||[])s?s=!1:r+=",",r+=Zs(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(e){const r=Object.keys(e.fields||{}).sort();let s="{",o=!0;for(const a of r)o?o=!1:s+=",",s+=`${a}:${Zs(e.fields[a])}`;return s+"}"}(n.mapValue):G()}function br(n){switch(ye(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=Yr(n);return t?16+br(t):16;case 5:return 2*n.stringValue.length;case 6:return _e(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,o)=>s+br(o),0)}(n.arrayValue);case 10:case 11:return function(r){let s=0;return De(r.fields,(o,a)=>{s+=o.length+br(a)}),s}(n.mapValue);default:throw G()}}function Aa(n,t){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${t.path.canonicalString()}`}}function ti(n){return!!n&&"integerValue"in n}function wi(n){return!!n&&"arrayValue"in n}function ba(n){return!!n&&"nullValue"in n}function Ra(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Rr(n){return!!n&&"mapValue"in n}function md(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{})[au])===null||e===void 0?void 0:e.stringValue)===lu}function Sn(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return De(n.mapValue.fields,(e,r)=>t.mapValue.fields[e]=Sn(r)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=Sn(n.arrayValue.values[e]);return t}return Object.assign({},n)}function pd(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===dd}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(t){this.value=t}static empty(){return new Lt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!Rr(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Sn(e)}setAll(t){let e=Tt.emptyPath(),r={},s=[];t.forEach((a,u)=>{if(!e.isImmediateParentOf(u)){const h=this.getFieldsMap(e);this.applyChanges(h,r,s),r={},s=[],e=u.popLast()}a?r[u.lastSegment()]=Sn(a):s.push(u.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,r,s)}delete(t){const e=this.field(t.popLast());Rr(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Wt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=e.mapValue.fields[t.get(r)];Rr(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,r){De(e,(s,o)=>t[s]=o);for(const s of r)delete t[s]}clone(){return new Lt(Sn(this.value))}}function uu(n){const t=[];return De(n.fields,(e,r)=>{const s=new Tt([e]);if(Rr(r)){const o=uu(r.mapValue).fields;if(o.length===0)t.push(s);else for(const a of o)t.push(s.child(a))}else t.push(s)}),new qt(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(t,e,r,s,o,a,u){this.key=t,this.documentType=e,this.version=r,this.readTime=s,this.createTime=o,this.data=a,this.documentState=u}static newInvalidDocument(t){return new St(t,0,K.min(),K.min(),K.min(),Lt.empty(),0)}static newFoundDocument(t,e,r,s){return new St(t,1,e,K.min(),r,s,0)}static newNoDocument(t,e){return new St(t,2,e,K.min(),K.min(),Lt.empty(),0)}static newUnknownDocument(t,e){return new St(t,3,e,K.min(),K.min(),Lt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(K.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Lt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Lt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=K.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof St&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new St(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(t,e){this.position=t,this.inclusive=e}}function Pa(n,t,e){let r=0;for(let s=0;s<n.position.length;s++){const o=t[s],a=n.position[s];if(o.field.isKeyField()?r=z.comparator(z.fromName(a.referenceValue),e.key):r=Ze(a,e.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function Ca(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!Wt(n.position[e],t.position[e]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur{constructor(t,e="asc"){this.field=t,this.dir=e}}function gd(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cu{}class mt extends cu{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new yd(t,e,r):e==="array-contains"?new Td(t,r):e==="in"?new wd(t,r):e==="not-in"?new Id(t,r):e==="array-contains-any"?new Ad(t,r):new mt(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new Ed(t,r):new vd(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(Ze(e,this.value)):e!==null&&ye(this.value)===ye(e)&&this.matchesComparison(Ze(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return G()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class $t extends cu{constructor(t,e){super(),this.filters=t,this.op=e,this.ce=null}static create(t,e){return new $t(t,e)}matches(t){return hu(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function hu(n){return n.op==="and"}function fu(n){return _d(n)&&hu(n)}function _d(n){for(const t of n.filters)if(t instanceof $t)return!1;return!0}function ei(n){if(n instanceof mt)return n.field.canonicalString()+n.op.toString()+tn(n.value);if(fu(n))return n.filters.map(t=>ei(t)).join(",");{const t=n.filters.map(e=>ei(e)).join(",");return`${n.op}(${t})`}}function du(n,t){return n instanceof mt?function(r,s){return s instanceof mt&&r.op===s.op&&r.field.isEqual(s.field)&&Wt(r.value,s.value)}(n,t):n instanceof $t?function(r,s){return s instanceof $t&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((o,a,u)=>o&&du(a,s.filters[u]),!0):!1}(n,t):void G()}function mu(n){return n instanceof mt?function(e){return`${e.field.canonicalString()} ${e.op} ${tn(e.value)}`}(n):n instanceof $t?function(e){return e.op.toString()+" {"+e.getFilters().map(mu).join(" ,")+"}"}(n):"Filter"}class yd extends mt{constructor(t,e,r){super(t,e,r),this.key=z.fromName(r.referenceValue)}matches(t){const e=z.comparator(t.key,this.key);return this.matchesComparison(e)}}class Ed extends mt{constructor(t,e){super(t,"in",e),this.keys=pu("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class vd extends mt{constructor(t,e){super(t,"not-in",e),this.keys=pu("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function pu(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(r=>z.fromName(r.referenceValue))}class Td extends mt{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return wi(e)&&Un(e.arrayValue,this.value)}}class wd extends mt{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&Un(this.value.arrayValue,e)}}class Id extends mt{constructor(t,e){super(t,"not-in",e)}matches(t){if(Un(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!Un(this.value.arrayValue,e)}}class Ad extends mt{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!wi(e)||!e.arrayValue.values)&&e.arrayValue.values.some(r=>Un(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bd{constructor(t,e=null,r=[],s=[],o=null,a=null,u=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=s,this.limit=o,this.startAt=a,this.endAt=u,this.le=null}}function Sa(n,t=null,e=[],r=[],s=null,o=null,a=null){return new bd(n,t,e,r,s,o,a)}function Ii(n){const t=W(n);if(t.le===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(r=>ei(r)).join(","),e+="|ob:",e+=t.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),Xr(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(r=>tn(r)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(r=>tn(r)).join(",")),t.le=e}return t.le}function Ai(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!gd(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!du(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!Ca(n.startAt,t.startAt)&&Ca(n.endAt,t.endAt)}function ni(n){return z.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn{constructor(t,e=null,r=[],s=[],o=null,a="F",u=null,h=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=s,this.limit=o,this.limitType=a,this.startAt=u,this.endAt=h,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function Rd(n,t,e,r,s,o,a,u){return new Kn(n,t,e,r,s,o,a,u)}function gu(n){return new Kn(n)}function Va(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function _u(n){return n.collectionGroup!==null}function Vn(n){const t=W(n);if(t.he===null){t.he=[];const e=new Set;for(const o of t.explicitOrderBy)t.he.push(o),e.add(o.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let u=new gt(Tt.comparator);return a.filters.forEach(h=>{h.getFlattenedFilters().forEach(f=>{f.isInequality()&&(u=u.add(f.field))})}),u})(t).forEach(o=>{e.has(o.canonicalString())||o.isKeyField()||t.he.push(new Ur(o,r))}),e.has(Tt.keyField().canonicalString())||t.he.push(new Ur(Tt.keyField(),r))}return t.he}function Gt(n){const t=W(n);return t.Pe||(t.Pe=Pd(t,Vn(n))),t.Pe}function Pd(n,t){if(n.limitType==="F")return Sa(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(s=>{const o=s.dir==="desc"?"asc":"desc";return new Ur(s.field,o)});const e=n.endAt?new xr(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new xr(n.startAt.position,n.startAt.inclusive):null;return Sa(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function ri(n,t){const e=n.filters.concat([t]);return new Kn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),e,n.limit,n.limitType,n.startAt,n.endAt)}function si(n,t,e){return new Kn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function Jr(n,t){return Ai(Gt(n),Gt(t))&&n.limitType===t.limitType}function yu(n){return`${Ii(Gt(n))}|lt:${n.limitType}`}function $e(n){return`Query(target=${function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map(s=>mu(s)).join(", ")}]`),Xr(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map(s=>tn(s)).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map(s=>tn(s)).join(",")),`Target(${r})`}(Gt(n))}; limitType=${n.limitType})`}function Zr(n,t){return t.isFoundDocument()&&function(r,s){const o=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):z.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(n,t)&&function(r,s){for(const o of Vn(r))if(!o.field.isKeyField()&&s.data.field(o.field)===null)return!1;return!0}(n,t)&&function(r,s){for(const o of r.filters)if(!o.matches(s))return!1;return!0}(n,t)&&function(r,s){return!(r.startAt&&!function(a,u,h){const f=Pa(a,u,h);return a.inclusive?f<=0:f<0}(r.startAt,Vn(r),s)||r.endAt&&!function(a,u,h){const f=Pa(a,u,h);return a.inclusive?f>=0:f>0}(r.endAt,Vn(r),s))}(n,t)}function Cd(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Eu(n){return(t,e)=>{let r=!1;for(const s of Vn(n)){const o=Sd(s,t,e);if(o!==0)return o;r=r||s.field.isKeyField()}return 0}}function Sd(n,t,e){const r=n.field.isKeyField()?z.comparator(t.key,e.key):function(o,a,u){const h=a.data.field(o),f=u.data.field(o);return h!==null&&f!==null?Ze(h,f):G()}(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return G()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[s,o]of r)if(this.equalsFn(s,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),s=this.inner[r];if(s===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],t))return void(s[o]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return r.length===1?delete this.inner[e]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(t){De(this.inner,(e,r)=>{for(const[s,o]of r)t(s,o)})}isEmpty(){return eu(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vd=new ut(z.comparator);function ne(){return Vd}const vu=new ut(z.comparator);function Rn(...n){let t=vu;for(const e of n)t=t.insert(e.key,e);return t}function Tu(n){let t=vu;return n.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function Ce(){return Dn()}function wu(){return Dn()}function Dn(){return new ke(n=>n.toString(),(n,t)=>n.isEqual(t))}const Dd=new ut(z.comparator),kd=new gt(z.comparator);function Y(...n){let t=kd;for(const e of n)t=t.add(e);return t}const Nd=new gt(X);function Od(){return Nd}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bi(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Mr(t)?"-0":t}}function Iu(n){return{integerValue:""+n}}function Md(n,t){return ld(t)?Iu(t):bi(n,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(){this._=void 0}}function Ld(n,t,e){return n instanceof jr?function(s,o){const a={fields:{[su]:{stringValue:ru},[ou]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return o&&Ti(o)&&(o=Yr(o)),o&&(a.fields[iu]=o),{mapValue:a}}(e,t):n instanceof jn?bu(n,t):n instanceof Bn?Ru(n,t):function(s,o){const a=Au(s,o),u=Da(a)+Da(s.Ie);return ti(a)&&ti(s.Ie)?Iu(u):bi(s.serializer,u)}(n,t)}function Fd(n,t,e){return n instanceof jn?bu(n,t):n instanceof Bn?Ru(n,t):e}function Au(n,t){return n instanceof Br?function(r){return ti(r)||function(o){return!!o&&"doubleValue"in o}(r)}(t)?t:{integerValue:0}:null}class jr extends ts{}class jn extends ts{constructor(t){super(),this.elements=t}}function bu(n,t){const e=Pu(t);for(const r of n.elements)e.some(s=>Wt(s,r))||e.push(r);return{arrayValue:{values:e}}}class Bn extends ts{constructor(t){super(),this.elements=t}}function Ru(n,t){let e=Pu(t);for(const r of n.elements)e=e.filter(s=>!Wt(s,r));return{arrayValue:{values:e}}}class Br extends ts{constructor(t,e){super(),this.serializer=t,this.Ie=e}}function Da(n){return ft(n.integerValue||n.doubleValue)}function Pu(n){return wi(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function xd(n,t){return n.field.isEqual(t.field)&&function(r,s){return r instanceof jn&&s instanceof jn||r instanceof Bn&&s instanceof Bn?Je(r.elements,s.elements,Wt):r instanceof Br&&s instanceof Br?Wt(r.Ie,s.Ie):r instanceof jr&&s instanceof jr}(n.transform,t.transform)}class Ud{constructor(t,e){this.version=t,this.transformResults=e}}class Zt{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Zt}static exists(t){return new Zt(void 0,t)}static updateTime(t){return new Zt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Pr(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class es{}function Cu(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new Vu(n.key,Zt.none()):new Wn(n.key,n.data,Zt.none());{const e=n.data,r=Lt.empty();let s=new gt(Tt.comparator);for(let o of t.fields)if(!s.has(o)){let a=e.field(o);a===null&&o.length>1&&(o=o.popLast(),a=e.field(o)),a===null?r.delete(o):r.set(o,a),s=s.add(o)}return new Ne(n.key,r,new qt(s.toArray()),Zt.none())}}function jd(n,t,e){n instanceof Wn?function(s,o,a){const u=s.value.clone(),h=Na(s.fieldTransforms,o,a.transformResults);u.setAll(h),o.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(n,t,e):n instanceof Ne?function(s,o,a){if(!Pr(s.precondition,o))return void o.convertToUnknownDocument(a.version);const u=Na(s.fieldTransforms,o,a.transformResults),h=o.data;h.setAll(Su(s)),h.setAll(u),o.convertToFoundDocument(a.version,h).setHasCommittedMutations()}(n,t,e):function(s,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()}(0,t,e)}function kn(n,t,e,r){return n instanceof Wn?function(o,a,u,h){if(!Pr(o.precondition,a))return u;const f=o.value.clone(),p=Oa(o.fieldTransforms,h,a);return f.setAll(p),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),null}(n,t,e,r):n instanceof Ne?function(o,a,u,h){if(!Pr(o.precondition,a))return u;const f=Oa(o.fieldTransforms,h,a),p=a.data;return p.setAll(Su(o)),p.setAll(f),a.convertToFoundDocument(a.version,p).setHasLocalMutations(),u===null?null:u.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(E=>E.field))}(n,t,e,r):function(o,a,u){return Pr(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):u}(n,t,e)}function Bd(n,t){let e=null;for(const r of n.fieldTransforms){const s=t.data.field(r.field),o=Au(r.transform,s||null);o!=null&&(e===null&&(e=Lt.empty()),e.set(r.field,o))}return e||null}function ka(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Je(r,s,(o,a)=>xd(o,a))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class Wn extends es{constructor(t,e,r,s=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Ne extends es{constructor(t,e,r,s,o=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=s,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Su(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}}),t}function Na(n,t,e){const r=new Map;rt(n.length===e.length);for(let s=0;s<e.length;s++){const o=n[s],a=o.transform,u=t.data.field(o.field);r.set(o.field,Fd(a,u,e[s]))}return r}function Oa(n,t,e){const r=new Map;for(const s of n){const o=s.transform,a=e.data.field(s.field);r.set(s.field,Ld(o,a,t))}return r}class Vu extends es{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class qd extends es{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zd{constructor(t,e,r,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const o=this.mutations[s];o.key.isEqual(t.key)&&jd(o,t,r[s])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=kn(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=kn(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=wu();return this.mutations.forEach(s=>{const o=t.get(s.key),a=o.overlayedDocument;let u=this.applyToLocalView(a,o.mutatedFields);u=e.has(s.key)?null:u;const h=Cu(a,u);h!==null&&r.set(s.key,h),a.isValidDocument()||a.convertToNoDocument(K.min())}),r}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),Y())}isEqual(t){return this.batchId===t.batchId&&Je(this.mutations,t.mutations,(e,r)=>ka(e,r))&&Je(this.baseMutations,t.baseMutations,(e,r)=>ka(e,r))}}class Ri{constructor(t,e,r,s){this.batch=t,this.commitVersion=e,this.mutationResults=r,this.docVersions=s}static from(t,e,r){rt(t.mutations.length===r.length);let s=function(){return Dd}();const o=t.mutations;for(let a=0;a<o.length;a++)s=s.insert(o[a].key,r[a].version);return new Ri(t,e,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $d{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hd{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var dt,J;function Gd(n){switch(n){case S.OK:return G();case S.CANCELLED:case S.UNKNOWN:case S.DEADLINE_EXCEEDED:case S.RESOURCE_EXHAUSTED:case S.INTERNAL:case S.UNAVAILABLE:case S.UNAUTHENTICATED:return!1;case S.INVALID_ARGUMENT:case S.NOT_FOUND:case S.ALREADY_EXISTS:case S.PERMISSION_DENIED:case S.FAILED_PRECONDITION:case S.ABORTED:case S.OUT_OF_RANGE:case S.UNIMPLEMENTED:case S.DATA_LOSS:return!0;default:return G()}}function Du(n){if(n===void 0)return ee("GRPC error has no .code"),S.UNKNOWN;switch(n){case dt.OK:return S.OK;case dt.CANCELLED:return S.CANCELLED;case dt.UNKNOWN:return S.UNKNOWN;case dt.DEADLINE_EXCEEDED:return S.DEADLINE_EXCEEDED;case dt.RESOURCE_EXHAUSTED:return S.RESOURCE_EXHAUSTED;case dt.INTERNAL:return S.INTERNAL;case dt.UNAVAILABLE:return S.UNAVAILABLE;case dt.UNAUTHENTICATED:return S.UNAUTHENTICATED;case dt.INVALID_ARGUMENT:return S.INVALID_ARGUMENT;case dt.NOT_FOUND:return S.NOT_FOUND;case dt.ALREADY_EXISTS:return S.ALREADY_EXISTS;case dt.PERMISSION_DENIED:return S.PERMISSION_DENIED;case dt.FAILED_PRECONDITION:return S.FAILED_PRECONDITION;case dt.ABORTED:return S.ABORTED;case dt.OUT_OF_RANGE:return S.OUT_OF_RANGE;case dt.UNIMPLEMENTED:return S.UNIMPLEMENTED;case dt.DATA_LOSS:return S.DATA_LOSS;default:return G()}}(J=dt||(dt={}))[J.OK=0]="OK",J[J.CANCELLED=1]="CANCELLED",J[J.UNKNOWN=2]="UNKNOWN",J[J.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",J[J.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",J[J.NOT_FOUND=5]="NOT_FOUND",J[J.ALREADY_EXISTS=6]="ALREADY_EXISTS",J[J.PERMISSION_DENIED=7]="PERMISSION_DENIED",J[J.UNAUTHENTICATED=16]="UNAUTHENTICATED",J[J.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",J[J.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",J[J.ABORTED=10]="ABORTED",J[J.OUT_OF_RANGE=11]="OUT_OF_RANGE",J[J.UNIMPLEMENTED=12]="UNIMPLEMENTED",J[J.INTERNAL=13]="INTERNAL",J[J.UNAVAILABLE=14]="UNAVAILABLE",J[J.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kd=new fe([4294967295,4294967295],0);function Ma(n){const t=Jl().encode(n),e=new Hl;return e.update(t),new Uint8Array(e.digest())}function La(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),s=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new fe([e,r],0),new fe([s,o],0)]}class Pi{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new Pn(`Invalid padding: ${e}`);if(r<0)throw new Pn(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new Pn(`Invalid hash count: ${r}`);if(t.length===0&&e!==0)throw new Pn(`Invalid padding when bitmap length is 0: ${e}`);this.Ee=8*t.length-e,this.de=fe.fromNumber(this.Ee)}Ae(t,e,r){let s=t.add(e.multiply(fe.fromNumber(r)));return s.compare(Kd)===1&&(s=new fe([s.getBits(0),s.getBits(1)],0)),s.modulo(this.de).toNumber()}Re(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.Ee===0)return!1;const e=Ma(t),[r,s]=La(e);for(let o=0;o<this.hashCount;o++){const a=this.Ae(r,s,o);if(!this.Re(a))return!1}return!0}static create(t,e,r){const s=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),a=new Pi(o,s,e);return r.forEach(u=>a.insert(u)),a}insert(t){if(this.Ee===0)return;const e=Ma(t),[r,s]=La(e);for(let o=0;o<this.hashCount;o++){const a=this.Ae(r,s,o);this.Ve(a)}}Ve(t){const e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}}class Pn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(t,e,r,s,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,r){const s=new Map;return s.set(t,Qn.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new ns(K.min(),s,new ut(X),ne(),Y())}}class Qn{constructor(t,e,r,s,o){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new Qn(r,e,Y(),Y(),Y())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr{constructor(t,e,r,s){this.me=t,this.removedTargetIds=e,this.key=r,this.fe=s}}class ku{constructor(t,e){this.targetId=t,this.ge=e}}class Nu{constructor(t,e,r=wt.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=s}}class Fa{constructor(){this.pe=0,this.ye=xa(),this.we=wt.EMPTY_BYTE_STRING,this.Se=!1,this.be=!0}get current(){return this.Se}get resumeToken(){return this.we}get De(){return this.pe!==0}get ve(){return this.be}Ce(t){t.approximateByteSize()>0&&(this.be=!0,this.we=t)}Fe(){let t=Y(),e=Y(),r=Y();return this.ye.forEach((s,o)=>{switch(o){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:r=r.add(s);break;default:G()}}),new Qn(this.we,this.Se,t,e,r)}Me(){this.be=!1,this.ye=xa()}xe(t,e){this.be=!0,this.ye=this.ye.insert(t,e)}Oe(t){this.be=!0,this.ye=this.ye.remove(t)}Ne(){this.pe+=1}Be(){this.pe-=1,rt(this.pe>=0)}Le(){this.be=!0,this.Se=!0}}class Wd{constructor(t){this.ke=t,this.qe=new Map,this.Qe=ne(),this.$e=vr(),this.Ue=vr(),this.Ke=new ut(X)}We(t){for(const e of t.me)t.fe&&t.fe.isFoundDocument()?this.Ge(e,t.fe):this.ze(e,t.key,t.fe);for(const e of t.removedTargetIds)this.ze(e,t.key,t.fe)}je(t){this.forEachTarget(t,e=>{const r=this.He(e);switch(t.state){case 0:this.Je(e)&&r.Ce(t.resumeToken);break;case 1:r.Be(),r.De||r.Me(),r.Ce(t.resumeToken);break;case 2:r.Be(),r.De||this.removeTarget(e);break;case 3:this.Je(e)&&(r.Le(),r.Ce(t.resumeToken));break;case 4:this.Je(e)&&(this.Ye(e),r.Ce(t.resumeToken));break;default:G()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.qe.forEach((r,s)=>{this.Je(s)&&e(s)})}Ze(t){const e=t.targetId,r=t.ge.count,s=this.Xe(e);if(s){const o=s.target;if(ni(o))if(r===0){const a=new z(o.path);this.ze(e,a,St.newNoDocument(a,K.min()))}else rt(r===1);else{const a=this.et(e);if(a!==r){const u=this.tt(t),h=u?this.nt(u,t,a):1;if(h!==0){this.Ye(e);const f=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(e,f)}}}}}tt(t){const e=t.ge.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:o=0}=e;let a,u;try{a=_e(r).toUint8Array()}catch(h){if(h instanceof nu)return Ye("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{u=new Pi(a,s,o)}catch(h){return Ye(h instanceof Pn?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return u.Ee===0?null:u}nt(t,e,r){return e.ge.count===r-this.st(t,e.targetId)?0:2}st(t,e){const r=this.ke.getRemoteKeysForTarget(e);let s=0;return r.forEach(o=>{const a=this.ke.it(),u=`projects/${a.projectId}/databases/${a.database}/documents/${o.path.canonicalString()}`;t.mightContain(u)||(this.ze(e,o,null),s++)}),s}ot(t){const e=new Map;this.qe.forEach((o,a)=>{const u=this.Xe(a);if(u){if(o.current&&ni(u.target)){const h=new z(u.target.path);this._t(h).has(a)||this.ut(a,h)||this.ze(a,h,St.newNoDocument(h,t))}o.ve&&(e.set(a,o.Fe()),o.Me())}});let r=Y();this.Ue.forEach((o,a)=>{let u=!0;a.forEachWhile(h=>{const f=this.Xe(h);return!f||f.purpose==="TargetPurposeLimboResolution"||(u=!1,!1)}),u&&(r=r.add(o))}),this.Qe.forEach((o,a)=>a.setReadTime(t));const s=new ns(t,e,this.Ke,this.Qe,r);return this.Qe=ne(),this.$e=vr(),this.Ue=vr(),this.Ke=new ut(X),s}Ge(t,e){if(!this.Je(t))return;const r=this.ut(t,e.key)?2:0;this.He(t).xe(e.key,r),this.Qe=this.Qe.insert(e.key,e),this.$e=this.$e.insert(e.key,this._t(e.key).add(t)),this.Ue=this.Ue.insert(e.key,this.ct(e.key).add(t))}ze(t,e,r){if(!this.Je(t))return;const s=this.He(t);this.ut(t,e)?s.xe(e,1):s.Oe(e),this.Ue=this.Ue.insert(e,this.ct(e).delete(t)),this.Ue=this.Ue.insert(e,this.ct(e).add(t)),r&&(this.Qe=this.Qe.insert(e,r))}removeTarget(t){this.qe.delete(t)}et(t){const e=this.He(t).Fe();return this.ke.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Ne(t){this.He(t).Ne()}He(t){let e=this.qe.get(t);return e||(e=new Fa,this.qe.set(t,e)),e}ct(t){let e=this.Ue.get(t);return e||(e=new gt(X),this.Ue=this.Ue.insert(t,e)),e}_t(t){let e=this.$e.get(t);return e||(e=new gt(X),this.$e=this.$e.insert(t,e)),e}Je(t){const e=this.Xe(t)!==null;return e||U("WatchChangeAggregator","Detected inactive target",t),e}Xe(t){const e=this.qe.get(t);return e&&e.De?null:this.ke.lt(t)}Ye(t){this.qe.set(t,new Fa),this.ke.getRemoteKeysForTarget(t).forEach(e=>{this.ze(t,e,null)})}ut(t,e){return this.ke.getRemoteKeysForTarget(t).has(e)}}function vr(){return new ut(z.comparator)}function xa(){return new ut(z.comparator)}const Qd={asc:"ASCENDING",desc:"DESCENDING"},Xd={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Yd={and:"AND",or:"OR"};class Jd{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function ii(n,t){return n.useProto3Json||Xr(t)?t:{value:t}}function qr(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Ou(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function Zd(n,t){return qr(n,t.toTimestamp())}function Kt(n){return rt(!!n),K.fromTimestamp(function(e){const r=ge(e);return new pt(r.seconds,r.nanos)}(n))}function Ci(n,t){return oi(n,t).canonicalString()}function oi(n,t){const e=function(s){return new at(["projects",s.projectId,"databases",s.database])}(n).child("documents");return t===void 0?e:e.child(t)}function Mu(n){const t=at.fromString(n);return rt(ju(t)),t}function ai(n,t){return Ci(n.databaseId,t.path)}function Us(n,t){const e=Mu(t);if(e.get(1)!==n.databaseId.projectId)throw new j(S.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new j(S.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new z(Fu(e))}function Lu(n,t){return Ci(n.databaseId,t)}function tm(n){const t=Mu(n);return t.length===4?at.emptyPath():Fu(t)}function li(n){return new at(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Fu(n){return rt(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Ua(n,t,e){return{name:ai(n,t),fields:e.value.mapValue.fields}}function em(n,t){let e;if("targetChange"in t){t.targetChange;const r=function(f){return f==="NO_CHANGE"?0:f==="ADD"?1:f==="REMOVE"?2:f==="CURRENT"?3:f==="RESET"?4:G()}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],o=function(f,p){return f.useProto3Json?(rt(p===void 0||typeof p=="string"),wt.fromBase64String(p||"")):(rt(p===void 0||p instanceof Buffer||p instanceof Uint8Array),wt.fromUint8Array(p||new Uint8Array))}(n,t.targetChange.resumeToken),a=t.targetChange.cause,u=a&&function(f){const p=f.code===void 0?S.UNKNOWN:Du(f.code);return new j(p,f.message||"")}(a);e=new Nu(r,s,o,u||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=Us(n,r.document.name),o=Kt(r.document.updateTime),a=r.document.createTime?Kt(r.document.createTime):K.min(),u=new Lt({mapValue:{fields:r.document.fields}}),h=St.newFoundDocument(s,o,a,u),f=r.targetIds||[],p=r.removedTargetIds||[];e=new Cr(f,p,h.key,h)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=Us(n,r.document),o=r.readTime?Kt(r.readTime):K.min(),a=St.newNoDocument(s,o),u=r.removedTargetIds||[];e=new Cr([],u,a.key,a)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=Us(n,r.document),o=r.removedTargetIds||[];e=new Cr([],o,s,null)}else{if(!("filter"in t))return G();{t.filter;const r=t.filter;r.targetId;const{count:s=0,unchangedNames:o}=r,a=new Hd(s,o),u=r.targetId;e=new ku(u,a)}}return e}function nm(n,t){let e;if(t instanceof Wn)e={update:Ua(n,t.key,t.value)};else if(t instanceof Vu)e={delete:ai(n,t.key)};else if(t instanceof Ne)e={update:Ua(n,t.key,t.data),updateMask:hm(t.fieldMask)};else{if(!(t instanceof qd))return G();e={verify:ai(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(r=>function(o,a){const u=a.transform;if(u instanceof jr)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(u instanceof jn)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:u.elements}};if(u instanceof Bn)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:u.elements}};if(u instanceof Br)return{fieldPath:a.field.canonicalString(),increment:u.Ie};throw G()}(0,r))),t.precondition.isNone||(e.currentDocument=function(s,o){return o.updateTime!==void 0?{updateTime:Zd(s,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:G()}(n,t.precondition)),e}function rm(n,t){return n&&n.length>0?(rt(t!==void 0),n.map(e=>function(s,o){let a=s.updateTime?Kt(s.updateTime):Kt(o);return a.isEqual(K.min())&&(a=Kt(o)),new Ud(a,s.transformResults||[])}(e,t))):[]}function sm(n,t){return{documents:[Lu(n,t.path)]}}function im(n,t){const e={structuredQuery:{}},r=t.path;let s;t.collectionGroup!==null?(s=r,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=r.popLast(),e.structuredQuery.from=[{collectionId:r.lastSegment()}]),e.parent=Lu(n,s);const o=function(f){if(f.length!==0)return Uu($t.create(f,"and"))}(t.filters);o&&(e.structuredQuery.where=o);const a=function(f){if(f.length!==0)return f.map(p=>function(T){return{field:He(T.field),direction:lm(T.dir)}}(p))}(t.orderBy);a&&(e.structuredQuery.orderBy=a);const u=ii(n,t.limit);return u!==null&&(e.structuredQuery.limit=u),t.startAt&&(e.structuredQuery.startAt=function(f){return{before:f.inclusive,values:f.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(f){return{before:!f.inclusive,values:f.position}}(t.endAt)),{ht:e,parent:s}}function om(n){let t=tm(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let s=null;if(r>0){rt(r===1);const p=e.from[0];p.allDescendants?s=p.collectionId:t=t.child(p.collectionId)}let o=[];e.where&&(o=function(E){const T=xu(E);return T instanceof $t&&fu(T)?T.getFilters():[T]}(e.where));let a=[];e.orderBy&&(a=function(E){return E.map(T=>function(P){return new Ur(Ge(P.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(T))}(e.orderBy));let u=null;e.limit&&(u=function(E){let T;return T=typeof E=="object"?E.value:E,Xr(T)?null:T}(e.limit));let h=null;e.startAt&&(h=function(E){const T=!!E.before,A=E.values||[];return new xr(A,T)}(e.startAt));let f=null;return e.endAt&&(f=function(E){const T=!E.before,A=E.values||[];return new xr(A,T)}(e.endAt)),Rd(t,s,a,o,u,"F",h,f)}function am(n,t){const e=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return G()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function xu(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=Ge(e.unaryFilter.field);return mt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Ge(e.unaryFilter.field);return mt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=Ge(e.unaryFilter.field);return mt.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Ge(e.unaryFilter.field);return mt.create(a,"!=",{nullValue:"NULL_VALUE"});default:return G()}}(n):n.fieldFilter!==void 0?function(e){return mt.create(Ge(e.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return G()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return $t.create(e.compositeFilter.filters.map(r=>xu(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return G()}}(e.compositeFilter.op))}(n):G()}function lm(n){return Qd[n]}function um(n){return Xd[n]}function cm(n){return Yd[n]}function He(n){return{fieldPath:n.canonicalString()}}function Ge(n){return Tt.fromServerFormat(n.fieldPath)}function Uu(n){return n instanceof mt?function(e){if(e.op==="=="){if(Ra(e.value))return{unaryFilter:{field:He(e.field),op:"IS_NAN"}};if(ba(e.value))return{unaryFilter:{field:He(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Ra(e.value))return{unaryFilter:{field:He(e.field),op:"IS_NOT_NAN"}};if(ba(e.value))return{unaryFilter:{field:He(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:He(e.field),op:um(e.op),value:e.value}}}(n):n instanceof $t?function(e){const r=e.getFilters().map(s=>Uu(s));return r.length===1?r[0]:{compositeFilter:{op:cm(e.op),filters:r}}}(n):G()}function hm(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function ju(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(t,e,r,s,o=K.min(),a=K.min(),u=wt.EMPTY_BYTE_STRING,h=null){this.target=t,this.targetId=e,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=u,this.expectedCount=h}withSequenceNumber(t){return new ue(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new ue(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new ue(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new ue(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fm{constructor(t){this.Tt=t}}function dm(n){const t=om({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?si(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mm{constructor(){this.Tn=new pm}addToCollectionParentIndex(t,e){return this.Tn.add(e),C.resolve()}getCollectionParents(t,e){return C.resolve(this.Tn.getEntries(e))}addFieldIndex(t,e){return C.resolve()}deleteFieldIndex(t,e){return C.resolve()}deleteAllFieldIndexes(t){return C.resolve()}createTargetIndexes(t,e){return C.resolve()}getDocumentsMatchingTarget(t,e){return C.resolve(null)}getIndexType(t,e){return C.resolve(0)}getFieldIndexes(t,e){return C.resolve([])}getNextCollectionGroupToUpdate(t){return C.resolve(null)}getMinOffset(t,e){return C.resolve(pe.min())}getMinOffsetFromCollectionGroup(t,e){return C.resolve(pe.min())}updateCollectionGroup(t,e,r){return C.resolve()}updateIndexEntries(t,e){return C.resolve()}}class pm{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e]||new gt(at.comparator),o=!s.has(r);return this.index[e]=s.add(r),o}has(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e];return s&&s.has(r)}getEntries(t){return(this.index[t]||new gt(at.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ja={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Bu=41943040;class Ot{static withCacheSize(t){return new Ot(t,Ot.DEFAULT_COLLECTION_PERCENTILE,Ot.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,r){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ot.DEFAULT_COLLECTION_PERCENTILE=10,Ot.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ot.DEFAULT=new Ot(Bu,Ot.DEFAULT_COLLECTION_PERCENTILE,Ot.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ot.DISABLED=new Ot(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(t){this.$n=t}next(){return this.$n+=2,this.$n}static Un(){return new en(0)}static Kn(){return new en(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ba="LruGarbageCollector",gm=1048576;function qa([n,t],[e,r]){const s=X(n,e);return s===0?X(t,r):s}class _m{constructor(t){this.Hn=t,this.buffer=new gt(qa),this.Jn=0}Yn(){return++this.Jn}Zn(t){const e=[t,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(e);else{const r=this.buffer.last();qa(e,r)<0&&(this.buffer=this.buffer.delete(r).add(e))}}get maxValue(){return this.buffer.last()[0]}}class ym{constructor(t,e,r){this.garbageCollector=t,this.asyncQueue=e,this.localStore=r,this.Xn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return this.Xn!==null}er(t){U(Ba,`Garbage collection scheduled in ${t}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){ln(e)?U(Ba,"Ignoring IndexedDB error during garbage collection: ",e):await an(e)}await this.er(3e5)})}}class Em{constructor(t,e){this.tr=t,this.params=e}calculateTargetCount(t,e){return this.tr.nr(t).next(r=>Math.floor(e/100*r))}nthSequenceNumber(t,e){if(e===0)return C.resolve(Qr.ae);const r=new _m(e);return this.tr.forEachTarget(t,s=>r.Zn(s.sequenceNumber)).next(()=>this.tr.rr(t,s=>r.Zn(s))).next(()=>r.maxValue)}removeTargets(t,e,r){return this.tr.removeTargets(t,e,r)}removeOrphanedDocuments(t,e){return this.tr.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(U("LruGarbageCollector","Garbage collection skipped; disabled"),C.resolve(ja)):this.getCacheSize(t).next(r=>r<this.params.cacheSizeCollectionThreshold?(U("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),ja):this.ir(t,e))}getCacheSize(t){return this.tr.getCacheSize(t)}ir(t,e){let r,s,o,a,u,h,f;const p=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(E=>(E>this.params.maximumSequenceNumbersToCollect?(U("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${E}`),s=this.params.maximumSequenceNumbersToCollect):s=E,a=Date.now(),this.nthSequenceNumber(t,s))).next(E=>(r=E,u=Date.now(),this.removeTargets(t,r,e))).next(E=>(o=E,h=Date.now(),this.removeOrphanedDocuments(t,r))).next(E=>(f=Date.now(),ze()<=Z.DEBUG&&U("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-p}ms
	Determined least recently used ${s} in `+(u-a)+`ms
	Removed ${o} targets in `+(h-u)+`ms
	Removed ${E} documents in `+(f-h)+`ms
Total Duration: ${f-p}ms`),C.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:o,documentsRemoved:E})))}}function vm(n,t){return new Em(n,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tm{constructor(){this.changes=new ke(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,St.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?C.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wm{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Im{constructor(t,e,r,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=s}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next(s=>(r=s,this.remoteDocumentCache.getEntry(t,e))).next(s=>(r!==null&&kn(r.mutation,s,qt.empty(),pt.now()),s))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.getLocalViewOfDocuments(t,r,Y()).next(()=>r))}getLocalViewOfDocuments(t,e,r=Y()){const s=Ce();return this.populateOverlays(t,s,e).next(()=>this.computeViews(t,e,s,r).next(o=>{let a=Rn();return o.forEach((u,h)=>{a=a.insert(u,h.overlayedDocument)}),a}))}getOverlayedDocuments(t,e){const r=Ce();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,Y()))}populateOverlays(t,e,r){const s=[];return r.forEach(o=>{e.has(o)||s.push(o)}),this.documentOverlayCache.getOverlays(t,s).next(o=>{o.forEach((a,u)=>{e.set(a,u)})})}computeViews(t,e,r,s){let o=ne();const a=Dn(),u=function(){return Dn()}();return e.forEach((h,f)=>{const p=r.get(f.key);s.has(f.key)&&(p===void 0||p.mutation instanceof Ne)?o=o.insert(f.key,f):p!==void 0?(a.set(f.key,p.mutation.getFieldMask()),kn(p.mutation,f,p.mutation.getFieldMask(),pt.now())):a.set(f.key,qt.empty())}),this.recalculateAndSaveOverlays(t,o).next(h=>(h.forEach((f,p)=>a.set(f,p)),e.forEach((f,p)=>{var E;return u.set(f,new wm(p,(E=a.get(f))!==null&&E!==void 0?E:null))}),u))}recalculateAndSaveOverlays(t,e){const r=Dn();let s=new ut((a,u)=>a-u),o=Y();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(a=>{for(const u of a)u.keys().forEach(h=>{const f=e.get(h);if(f===null)return;let p=r.get(h)||qt.empty();p=u.applyToLocalView(f,p),r.set(h,p);const E=(s.get(u.batchId)||Y()).add(h);s=s.insert(u.batchId,E)})}).next(()=>{const a=[],u=s.getReverseIterator();for(;u.hasNext();){const h=u.getNext(),f=h.key,p=h.value,E=wu();p.forEach(T=>{if(!o.has(T)){const A=Cu(e.get(T),r.get(T));A!==null&&E.set(T,A),o=o.add(T)}}),a.push(this.documentOverlayCache.saveOverlays(t,f,E))}return C.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,e,r,s){return function(a){return z.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):_u(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,s):this.getDocumentsMatchingCollectionQuery(t,e,r,s)}getNextDocuments(t,e,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,s).next(o=>{const a=s-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,s-o.size):C.resolve(Ce());let u=Ln,h=o;return a.next(f=>C.forEach(f,(p,E)=>(u<E.largestBatchId&&(u=E.largestBatchId),o.get(p)?C.resolve():this.remoteDocumentCache.getEntry(t,p).next(T=>{h=h.insert(p,T)}))).next(()=>this.populateOverlays(t,f,o)).next(()=>this.computeViews(t,h,f,Y())).next(p=>({batchId:u,changes:Tu(p)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new z(e)).next(r=>{let s=Rn();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(t,e,r,s){const o=e.collectionGroup;let a=Rn();return this.indexManager.getCollectionParents(t,o).next(u=>C.forEach(u,h=>{const f=function(E,T){return new Kn(T,null,E.explicitOrderBy.slice(),E.filters.slice(),E.limit,E.limitType,E.startAt,E.endAt)}(e,h.child(o));return this.getDocumentsMatchingCollectionQuery(t,f,r,s).next(p=>{p.forEach((E,T)=>{a=a.insert(E,T)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(t,e,r,s){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next(a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,o,s))).next(a=>{o.forEach((h,f)=>{const p=f.getKey();a.get(p)===null&&(a=a.insert(p,St.newInvalidDocument(p)))});let u=Rn();return a.forEach((h,f)=>{const p=o.get(h);p!==void 0&&kn(p.mutation,f,qt.empty(),pt.now()),Zr(e,f)&&(u=u.insert(h,f))}),u})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Am{constructor(t){this.serializer=t,this.dr=new Map,this.Ar=new Map}getBundleMetadata(t,e){return C.resolve(this.dr.get(e))}saveBundleMetadata(t,e){return this.dr.set(e.id,function(s){return{id:s.id,version:s.version,createTime:Kt(s.createTime)}}(e)),C.resolve()}getNamedQuery(t,e){return C.resolve(this.Ar.get(e))}saveNamedQuery(t,e){return this.Ar.set(e.name,function(s){return{name:s.name,query:dm(s.bundledQuery),readTime:Kt(s.readTime)}}(e)),C.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bm{constructor(){this.overlays=new ut(z.comparator),this.Rr=new Map}getOverlay(t,e){return C.resolve(this.overlays.get(e))}getOverlays(t,e){const r=Ce();return C.forEach(e,s=>this.getOverlay(t,s).next(o=>{o!==null&&r.set(s,o)})).next(()=>r)}saveOverlays(t,e,r){return r.forEach((s,o)=>{this.Et(t,e,o)}),C.resolve()}removeOverlaysForBatchId(t,e,r){const s=this.Rr.get(r);return s!==void 0&&(s.forEach(o=>this.overlays=this.overlays.remove(o)),this.Rr.delete(r)),C.resolve()}getOverlaysForCollection(t,e,r){const s=Ce(),o=e.length+1,a=new z(e.child("")),u=this.overlays.getIteratorFrom(a);for(;u.hasNext();){const h=u.getNext().value,f=h.getKey();if(!e.isPrefixOf(f.path))break;f.path.length===o&&h.largestBatchId>r&&s.set(h.getKey(),h)}return C.resolve(s)}getOverlaysForCollectionGroup(t,e,r,s){let o=new ut((f,p)=>f-p);const a=this.overlays.getIterator();for(;a.hasNext();){const f=a.getNext().value;if(f.getKey().getCollectionGroup()===e&&f.largestBatchId>r){let p=o.get(f.largestBatchId);p===null&&(p=Ce(),o=o.insert(f.largestBatchId,p)),p.set(f.getKey(),f)}}const u=Ce(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach((f,p)=>u.set(f,p)),!(u.size()>=s)););return C.resolve(u)}Et(t,e,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.Rr.get(s.largestBatchId).delete(r.key);this.Rr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new $d(e,r));let o=this.Rr.get(e);o===void 0&&(o=Y(),this.Rr.set(e,o)),this.Rr.set(e,o.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rm{constructor(){this.sessionToken=wt.EMPTY_BYTE_STRING}getSessionToken(t){return C.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,C.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si{constructor(){this.Vr=new gt(_t.mr),this.gr=new gt(_t.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(t,e){const r=new _t(t,e);this.Vr=this.Vr.add(r),this.gr=this.gr.add(r)}yr(t,e){t.forEach(r=>this.addReference(r,e))}removeReference(t,e){this.wr(new _t(t,e))}Sr(t,e){t.forEach(r=>this.removeReference(r,e))}br(t){const e=new z(new at([])),r=new _t(e,t),s=new _t(e,t+1),o=[];return this.gr.forEachInRange([r,s],a=>{this.wr(a),o.push(a.key)}),o}Dr(){this.Vr.forEach(t=>this.wr(t))}wr(t){this.Vr=this.Vr.delete(t),this.gr=this.gr.delete(t)}vr(t){const e=new z(new at([])),r=new _t(e,t),s=new _t(e,t+1);let o=Y();return this.gr.forEachInRange([r,s],a=>{o=o.add(a.key)}),o}containsKey(t){const e=new _t(t,0),r=this.Vr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class _t{constructor(t,e){this.key=t,this.Cr=e}static mr(t,e){return z.comparator(t.key,e.key)||X(t.Cr,e.Cr)}static pr(t,e){return X(t.Cr,e.Cr)||z.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pm{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Fr=1,this.Mr=new gt(_t.mr)}checkEmpty(t){return C.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,s){const o=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new zd(o,e,r,s);this.mutationQueue.push(a);for(const u of s)this.Mr=this.Mr.add(new _t(u.key,o)),this.indexManager.addToCollectionParentIndex(t,u.key.path.popLast());return C.resolve(a)}lookupMutationBatch(t,e){return C.resolve(this.Or(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,s=this.Nr(r),o=s<0?0:s;return C.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return C.resolve(this.mutationQueue.length===0?vi:this.Fr-1)}getAllMutationBatches(t){return C.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new _t(e,0),s=new _t(e,Number.POSITIVE_INFINITY),o=[];return this.Mr.forEachInRange([r,s],a=>{const u=this.Or(a.Cr);o.push(u)}),C.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new gt(X);return e.forEach(s=>{const o=new _t(s,0),a=new _t(s,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([o,a],u=>{r=r.add(u.Cr)})}),C.resolve(this.Br(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,s=r.length+1;let o=r;z.isDocumentKey(o)||(o=o.child(""));const a=new _t(new z(o),0);let u=new gt(X);return this.Mr.forEachWhile(h=>{const f=h.key.path;return!!r.isPrefixOf(f)&&(f.length===s&&(u=u.add(h.Cr)),!0)},a),C.resolve(this.Br(u))}Br(t){const e=[];return t.forEach(r=>{const s=this.Or(r);s!==null&&e.push(s)}),e}removeMutationBatch(t,e){rt(this.Lr(e.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Mr;return C.forEach(e.mutations,s=>{const o=new _t(s.key,e.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.Mr=r})}qn(t){}containsKey(t,e){const r=new _t(e,0),s=this.Mr.firstAfterOrEqual(r);return C.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,C.resolve()}Lr(t,e){return this.Nr(t)}Nr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Or(t){const e=this.Nr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cm{constructor(t){this.kr=t,this.docs=function(){return new ut(z.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,s=this.docs.get(r),o=s?s.size:0,a=this.kr(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return C.resolve(r?r.document.mutableCopy():St.newInvalidDocument(e))}getEntries(t,e){let r=ne();return e.forEach(s=>{const o=this.docs.get(s);r=r.insert(s,o?o.document.mutableCopy():St.newInvalidDocument(s))}),C.resolve(r)}getDocumentsMatchingQuery(t,e,r,s){let o=ne();const a=e.path,u=new z(a.child("__id-9223372036854775808__")),h=this.docs.getIteratorFrom(u);for(;h.hasNext();){const{key:f,value:{document:p}}=h.getNext();if(!a.isPrefixOf(f.path))break;f.path.length>a.length+1||sd(rd(p),r)<=0||(s.has(p.key)||Zr(e,p))&&(o=o.insert(p.key,p.mutableCopy()))}return C.resolve(o)}getAllFromCollectionGroup(t,e,r,s){G()}qr(t,e){return C.forEach(this.docs,r=>e(r))}newChangeBuffer(t){return new Sm(this)}getSize(t){return C.resolve(this.size)}}class Sm extends Tm{constructor(t){super(),this.Ir=t}applyChanges(t){const e=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?e.push(this.Ir.addEntry(t,s)):this.Ir.removeEntry(r)}),C.waitFor(e)}getFromCache(t,e){return this.Ir.getEntry(t,e)}getAllFromCache(t,e){return this.Ir.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vm{constructor(t){this.persistence=t,this.Qr=new ke(e=>Ii(e),Ai),this.lastRemoteSnapshotVersion=K.min(),this.highestTargetId=0,this.$r=0,this.Ur=new Si,this.targetCount=0,this.Kr=en.Un()}forEachTarget(t,e){return this.Qr.forEach((r,s)=>e(s)),C.resolve()}getLastRemoteSnapshotVersion(t){return C.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return C.resolve(this.$r)}allocateTargetId(t){return this.highestTargetId=this.Kr.next(),C.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.$r&&(this.$r=e),C.resolve()}zn(t){this.Qr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Kr=new en(e),this.highestTargetId=e),t.sequenceNumber>this.$r&&(this.$r=t.sequenceNumber)}addTargetData(t,e){return this.zn(e),this.targetCount+=1,C.resolve()}updateTargetData(t,e){return this.zn(e),C.resolve()}removeTargetData(t,e){return this.Qr.delete(e.target),this.Ur.br(e.targetId),this.targetCount-=1,C.resolve()}removeTargets(t,e,r){let s=0;const o=[];return this.Qr.forEach((a,u)=>{u.sequenceNumber<=e&&r.get(u.targetId)===null&&(this.Qr.delete(a),o.push(this.removeMatchingKeysForTargetId(t,u.targetId)),s++)}),C.waitFor(o).next(()=>s)}getTargetCount(t){return C.resolve(this.targetCount)}getTargetData(t,e){const r=this.Qr.get(e)||null;return C.resolve(r)}addMatchingKeys(t,e,r){return this.Ur.yr(e,r),C.resolve()}removeMatchingKeys(t,e,r){this.Ur.Sr(e,r);const s=this.persistence.referenceDelegate,o=[];return s&&e.forEach(a=>{o.push(s.markPotentiallyOrphaned(t,a))}),C.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.Ur.br(e),C.resolve()}getMatchingKeysForTargetId(t,e){const r=this.Ur.vr(e);return C.resolve(r)}containsKey(t,e){return C.resolve(this.Ur.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qu{constructor(t,e){this.Wr={},this.overlays={},this.Gr=new Qr(0),this.zr=!1,this.zr=!0,this.jr=new Rm,this.referenceDelegate=t(this),this.Hr=new Vm(this),this.indexManager=new mm,this.remoteDocumentCache=function(s){return new Cm(s)}(r=>this.referenceDelegate.Jr(r)),this.serializer=new fm(e),this.Yr=new Am(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new bm,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.Wr[t.toKey()];return r||(r=new Pm(e,this.referenceDelegate),this.Wr[t.toKey()]=r),r}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(t,e,r){U("MemoryPersistence","Starting transaction:",t);const s=new Dm(this.Gr.next());return this.referenceDelegate.Zr(),r(s).next(o=>this.referenceDelegate.Xr(s).next(()=>o)).toPromise().then(o=>(s.raiseOnCommittedEvent(),o))}ei(t,e){return C.or(Object.values(this.Wr).map(r=>()=>r.containsKey(t,e)))}}class Dm extends od{constructor(t){super(),this.currentSequenceNumber=t}}class Vi{constructor(t){this.persistence=t,this.ti=new Si,this.ni=null}static ri(t){return new Vi(t)}get ii(){if(this.ni)return this.ni;throw G()}addReference(t,e,r){return this.ti.addReference(r,e),this.ii.delete(r.toString()),C.resolve()}removeReference(t,e,r){return this.ti.removeReference(r,e),this.ii.add(r.toString()),C.resolve()}markPotentiallyOrphaned(t,e){return this.ii.add(e.toString()),C.resolve()}removeTarget(t,e){this.ti.br(e.targetId).forEach(s=>this.ii.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next(s=>{s.forEach(o=>this.ii.add(o.toString()))}).next(()=>r.removeTargetData(t,e))}Zr(){this.ni=new Set}Xr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return C.forEach(this.ii,r=>{const s=z.fromPath(r);return this.si(t,s).next(o=>{o||e.removeEntry(s,K.min())})}).next(()=>(this.ni=null,e.apply(t)))}updateLimboDocument(t,e){return this.si(t,e).next(r=>{r?this.ii.delete(e.toString()):this.ii.add(e.toString())})}Jr(t){return 0}si(t,e){return C.or([()=>C.resolve(this.ti.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.ei(t,e)])}}class zr{constructor(t,e){this.persistence=t,this.oi=new ke(r=>ud(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=vm(this,e)}static ri(t,e){return new zr(t,e)}Zr(){}Xr(t){return C.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}nr(t){const e=this.sr(t);return this.persistence.getTargetCache().getTargetCount(t).next(r=>e.next(s=>r+s))}sr(t){let e=0;return this.rr(t,r=>{e++}).next(()=>e)}rr(t,e){return C.forEach(this.oi,(r,s)=>this.ar(t,r,s).next(o=>o?C.resolve():e(s)))}removeTargets(t,e,r){return this.persistence.getTargetCache().removeTargets(t,e,r)}removeOrphanedDocuments(t,e){let r=0;const s=this.persistence.getRemoteDocumentCache(),o=s.newChangeBuffer();return s.qr(t,a=>this.ar(t,a,e).next(u=>{u||(r++,o.removeEntry(a,K.min()))})).next(()=>o.apply(t)).next(()=>r)}markPotentiallyOrphaned(t,e){return this.oi.set(e,t.currentSequenceNumber),C.resolve()}removeTarget(t,e){const r=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,r)}addReference(t,e,r){return this.oi.set(r,t.currentSequenceNumber),C.resolve()}removeReference(t,e,r){return this.oi.set(r,t.currentSequenceNumber),C.resolve()}updateLimboDocument(t,e){return this.oi.set(e,t.currentSequenceNumber),C.resolve()}Jr(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=br(t.data.value)),e}ar(t,e,r){return C.or([()=>this.persistence.ei(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const s=this.oi.get(e);return C.resolve(s!==void 0&&s>r)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di{constructor(t,e,r,s){this.targetId=t,this.fromCache=e,this.Hi=r,this.Ji=s}static Yi(t,e){let r=Y(),s=Y();for(const o of e.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:s=s.add(o.doc.key)}return new Di(t,e.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class km{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nm{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=function(){return Ch()?8:ad(Rh())>0?6:4}()}initialize(t,e){this.ns=t,this.indexManager=e,this.Zi=!0}getDocumentsMatchingQuery(t,e,r,s){const o={result:null};return this.rs(t,e).next(a=>{o.result=a}).next(()=>{if(!o.result)return this.ss(t,e,s,r).next(a=>{o.result=a})}).next(()=>{if(o.result)return;const a=new km;return this._s(t,e,a).next(u=>{if(o.result=u,this.Xi)return this.us(t,e,a,u.size)})}).next(()=>o.result)}us(t,e,r,s){return r.documentReadCount<this.es?(ze()<=Z.DEBUG&&U("QueryEngine","SDK will not create cache indexes for query:",$e(e),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),C.resolve()):(ze()<=Z.DEBUG&&U("QueryEngine","Query:",$e(e),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ts*s?(ze()<=Z.DEBUG&&U("QueryEngine","The SDK decides to create cache indexes for query:",$e(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Gt(e))):C.resolve())}rs(t,e){if(Va(e))return C.resolve(null);let r=Gt(e);return this.indexManager.getIndexType(t,r).next(s=>s===0?null:(e.limit!==null&&s===1&&(e=si(e,null,"F"),r=Gt(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next(o=>{const a=Y(...o);return this.ns.getDocuments(t,a).next(u=>this.indexManager.getMinOffset(t,r).next(h=>{const f=this.cs(e,u);return this.ls(e,f,a,h.readTime)?this.rs(t,si(e,null,"F")):this.hs(t,f,e,h)}))})))}ss(t,e,r,s){return Va(e)||s.isEqual(K.min())?C.resolve(null):this.ns.getDocuments(t,r).next(o=>{const a=this.cs(e,o);return this.ls(e,a,r,s)?C.resolve(null):(ze()<=Z.DEBUG&&U("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),$e(e)),this.hs(t,a,e,nd(s,Ln)).next(u=>u))})}cs(t,e){let r=new gt(Eu(t));return e.forEach((s,o)=>{Zr(t,o)&&(r=r.add(o))}),r}ls(t,e,r,s){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(s)>0)}_s(t,e,r){return ze()<=Z.DEBUG&&U("QueryEngine","Using full collection scan to execute query:",$e(e)),this.ns.getDocumentsMatchingQuery(t,e,pe.min(),r)}hs(t,e,r,s){return this.ns.getDocumentsMatchingQuery(t,r,s).next(o=>(e.forEach(a=>{o=o.insert(a.key,a)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ki="LocalStore",Om=3e8;class Mm{constructor(t,e,r,s){this.persistence=t,this.Ps=e,this.serializer=s,this.Ts=new ut(X),this.Is=new ke(o=>Ii(o),Ai),this.Es=new Map,this.ds=t.getRemoteDocumentCache(),this.Hr=t.getTargetCache(),this.Yr=t.getBundleCache(),this.As(r)}As(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Im(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.Ts))}}function Lm(n,t,e,r){return new Mm(n,t,e,r)}async function zu(n,t){const e=W(n);return await e.persistence.runTransaction("Handle user change","readonly",r=>{let s;return e.mutationQueue.getAllMutationBatches(r).next(o=>(s=o,e.As(t),e.mutationQueue.getAllMutationBatches(r))).next(o=>{const a=[],u=[];let h=Y();for(const f of s){a.push(f.batchId);for(const p of f.mutations)h=h.add(p.key)}for(const f of o){u.push(f.batchId);for(const p of f.mutations)h=h.add(p.key)}return e.localDocuments.getDocuments(r,h).next(f=>({Rs:f,removedBatchIds:a,addedBatchIds:u}))})})}function Fm(n,t){const e=W(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=t.batch.keys(),o=e.ds.newChangeBuffer({trackRemovals:!0});return function(u,h,f,p){const E=f.batch,T=E.keys();let A=C.resolve();return T.forEach(P=>{A=A.next(()=>p.getEntry(h,P)).next(M=>{const D=f.docVersions.get(P);rt(D!==null),M.version.compareTo(D)<0&&(E.applyToRemoteDocument(M,f),M.isValidDocument()&&(M.setReadTime(f.commitVersion),p.addEntry(M)))})}),A.next(()=>u.mutationQueue.removeMutationBatch(h,E))}(e,r,t,o).next(()=>o.apply(r)).next(()=>e.mutationQueue.performConsistencyCheck(r)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(r,s,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(u){let h=Y();for(let f=0;f<u.mutationResults.length;++f)u.mutationResults[f].transformResults.length>0&&(h=h.add(u.batch.mutations[f].key));return h}(t))).next(()=>e.localDocuments.getDocuments(r,s))})}function $u(n){const t=W(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Hr.getLastRemoteSnapshotVersion(e))}function xm(n,t){const e=W(n),r=t.snapshotVersion;let s=e.Ts;return e.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const a=e.ds.newChangeBuffer({trackRemovals:!0});s=e.Ts;const u=[];t.targetChanges.forEach((p,E)=>{const T=s.get(E);if(!T)return;u.push(e.Hr.removeMatchingKeys(o,p.removedDocuments,E).next(()=>e.Hr.addMatchingKeys(o,p.addedDocuments,E)));let A=T.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(E)!==null?A=A.withResumeToken(wt.EMPTY_BYTE_STRING,K.min()).withLastLimboFreeSnapshotVersion(K.min()):p.resumeToken.approximateByteSize()>0&&(A=A.withResumeToken(p.resumeToken,r)),s=s.insert(E,A),function(M,D,L){return M.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-M.snapshotVersion.toMicroseconds()>=Om?!0:L.addedDocuments.size+L.modifiedDocuments.size+L.removedDocuments.size>0}(T,A,p)&&u.push(e.Hr.updateTargetData(o,A))});let h=ne(),f=Y();if(t.documentUpdates.forEach(p=>{t.resolvedLimboDocuments.has(p)&&u.push(e.persistence.referenceDelegate.updateLimboDocument(o,p))}),u.push(Um(o,a,t.documentUpdates).next(p=>{h=p.Vs,f=p.fs})),!r.isEqual(K.min())){const p=e.Hr.getLastRemoteSnapshotVersion(o).next(E=>e.Hr.setTargetsMetadata(o,o.currentSequenceNumber,r));u.push(p)}return C.waitFor(u).next(()=>a.apply(o)).next(()=>e.localDocuments.getLocalViewOfDocuments(o,h,f)).next(()=>h)}).then(o=>(e.Ts=s,o))}function Um(n,t,e){let r=Y(),s=Y();return e.forEach(o=>r=r.add(o)),t.getEntries(n,r).next(o=>{let a=ne();return e.forEach((u,h)=>{const f=o.get(u);h.isFoundDocument()!==f.isFoundDocument()&&(s=s.add(u)),h.isNoDocument()&&h.version.isEqual(K.min())?(t.removeEntry(u,h.readTime),a=a.insert(u,h)):!f.isValidDocument()||h.version.compareTo(f.version)>0||h.version.compareTo(f.version)===0&&f.hasPendingWrites?(t.addEntry(h),a=a.insert(u,h)):U(ki,"Ignoring outdated watch update for ",u,". Current version:",f.version," Watch version:",h.version)}),{Vs:a,fs:s}})}function jm(n,t){const e=W(n);return e.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=vi),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function Bm(n,t){const e=W(n);return e.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return e.Hr.getTargetData(r,t).next(o=>o?(s=o,C.resolve(s)):e.Hr.allocateTargetId(r).next(a=>(s=new ue(t,a,"TargetPurposeListen",r.currentSequenceNumber),e.Hr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=e.Ts.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(e.Ts=e.Ts.insert(r.targetId,r),e.Is.set(t,r.targetId)),r})}async function ui(n,t,e){const r=W(n),s=r.Ts.get(t),o=e?"readwrite":"readwrite-primary";try{e||await r.persistence.runTransaction("Release target",o,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!ln(a))throw a;U(ki,`Failed to update sequence numbers for target ${t}: ${a}`)}r.Ts=r.Ts.remove(t),r.Is.delete(s.target)}function za(n,t,e){const r=W(n);let s=K.min(),o=Y();return r.persistence.runTransaction("Execute query","readwrite",a=>function(h,f,p){const E=W(h),T=E.Is.get(p);return T!==void 0?C.resolve(E.Ts.get(T)):E.Hr.getTargetData(f,p)}(r,a,Gt(t)).next(u=>{if(u)return s=u.lastLimboFreeSnapshotVersion,r.Hr.getMatchingKeysForTargetId(a,u.targetId).next(h=>{o=h})}).next(()=>r.Ps.getDocumentsMatchingQuery(a,t,e?s:K.min(),e?o:Y())).next(u=>(qm(r,Cd(t),u),{documents:u,gs:o})))}function qm(n,t,e){let r=n.Es.get(t)||K.min();e.forEach((s,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),n.Es.set(t,r)}class $a{constructor(){this.activeTargetIds=Od()}Ds(t){this.activeTargetIds=this.activeTargetIds.add(t)}vs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}bs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class zm{constructor(){this.ho=new $a,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t,e=!0){return e&&this.ho.Ds(t),this.Po[t]||"not-current"}updateQueryState(t,e,r){this.Po[t]=e}removeLocalQueryTarget(t){this.ho.vs(t)}isLocalQueryTarget(t){return this.ho.activeTargetIds.has(t)}clearQueryState(t){delete this.Po[t]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(t){return this.ho.activeTargetIds.has(t)}start(){return this.ho=new $a,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $m{To(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ha="ConnectivityMonitor";class Ga{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(t){this.Vo.push(t)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){U(Ha,"Network connectivity changed: AVAILABLE");for(const t of this.Vo)t(0)}Ro(){U(Ha,"Network connectivity changed: UNAVAILABLE");for(const t of this.Vo)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Tr=null;function ci(){return Tr===null?Tr=function(){return 268435456+Math.round(2147483648*Math.random())}():Tr++,"0x"+Tr.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const js="RestConnection",Hm={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Gm{get fo(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.po=e+"://"+t.host,this.yo=`projects/${r}/databases/${s}`,this.wo=this.databaseId.database===Lr?`project_id=${r}`:`project_id=${r}&database_id=${s}`}So(t,e,r,s,o){const a=ci(),u=this.bo(t,e.toUriEncodedString());U(js,`Sending RPC '${t}' ${a}:`,u,r);const h={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(h,s,o),this.vo(t,u,h,r).then(f=>(U(js,`Received RPC '${t}' ${a}: `,f),f),f=>{throw Ye(js,`RPC '${t}' ${a} failed with error: `,f,"url: ",u,"request:",r),f})}Co(t,e,r,s,o,a){return this.So(t,e,r,s,o)}Do(t,e,r){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+on}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach((s,o)=>t[o]=s),r&&r.headers.forEach((s,o)=>t[o]=s)}bo(t,e){const r=Hm[t];return`${this.po}/v1/${e}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Km{constructor(t){this.Fo=t.Fo,this.Mo=t.Mo}xo(t){this.Oo=t}No(t){this.Bo=t}Lo(t){this.ko=t}onMessage(t){this.qo=t}close(){this.Mo()}send(t){this.Fo(t)}Qo(){this.Oo()}$o(){this.Bo()}Uo(t){this.ko(t)}Ko(t){this.qo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pt="WebChannelConnection";class Wm extends Gm{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}vo(t,e,r,s){const o=ci();return new Promise((a,u)=>{const h=new Gl;h.setWithCredentials(!0),h.listenOnce(Kl.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case Ar.NO_ERROR:const p=h.getResponseJson();U(Pt,`XHR for RPC '${t}' ${o} received:`,JSON.stringify(p)),a(p);break;case Ar.TIMEOUT:U(Pt,`RPC '${t}' ${o} timed out`),u(new j(S.DEADLINE_EXCEEDED,"Request time out"));break;case Ar.HTTP_ERROR:const E=h.getStatus();if(U(Pt,`RPC '${t}' ${o} failed with status:`,E,"response text:",h.getResponseText()),E>0){let T=h.getResponseJson();Array.isArray(T)&&(T=T[0]);const A=T==null?void 0:T.error;if(A&&A.status&&A.message){const P=function(D){const L=D.toLowerCase().replace(/_/g,"-");return Object.values(S).indexOf(L)>=0?L:S.UNKNOWN}(A.status);u(new j(P,A.message))}else u(new j(S.UNKNOWN,"Server responded with status "+h.getStatus()))}else u(new j(S.UNAVAILABLE,"Connection failed."));break;default:G()}}finally{U(Pt,`RPC '${t}' ${o} completed.`)}});const f=JSON.stringify(s);U(Pt,`RPC '${t}' ${o} sending request:`,s),h.send(e,"POST",f,r,15)})}Wo(t,e,r){const s=ci(),o=[this.po,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=Xl(),u=Ql(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},f=this.longPollingOptions.timeoutSeconds;f!==void 0&&(h.longPollingTimeout=Math.round(1e3*f)),this.useFetchStreams&&(h.useFetchStreams=!0),this.Do(h.initMessageHeaders,e,r),h.encodeInitMessageHeaders=!0;const p=o.join("");U(Pt,`Creating RPC '${t}' stream ${s}: ${p}`,h);const E=a.createWebChannel(p,h);let T=!1,A=!1;const P=new Km({Fo:D=>{A?U(Pt,`Not sending because RPC '${t}' stream ${s} is closed:`,D):(T||(U(Pt,`Opening RPC '${t}' stream ${s} transport.`),E.open(),T=!0),U(Pt,`RPC '${t}' stream ${s} sending:`,D),E.send(D))},Mo:()=>E.close()}),M=(D,L,O)=>{D.listen(L,N=>{try{O(N)}catch(B){setTimeout(()=>{throw B},0)}})};return M(E,bn.EventType.OPEN,()=>{A||(U(Pt,`RPC '${t}' stream ${s} transport opened.`),P.Qo())}),M(E,bn.EventType.CLOSE,()=>{A||(A=!0,U(Pt,`RPC '${t}' stream ${s} transport closed`),P.Uo())}),M(E,bn.EventType.ERROR,D=>{A||(A=!0,Ye(Pt,`RPC '${t}' stream ${s} transport errored:`,D),P.Uo(new j(S.UNAVAILABLE,"The operation could not be completed")))}),M(E,bn.EventType.MESSAGE,D=>{var L;if(!A){const O=D.data[0];rt(!!O);const N=O,B=(N==null?void 0:N.error)||((L=N[0])===null||L===void 0?void 0:L.error);if(B){U(Pt,`RPC '${t}' stream ${s} received error:`,B);const q=B.status;let H=function(m){const v=dt[m];if(v!==void 0)return Du(v)}(q),_=B.message;H===void 0&&(H=S.INTERNAL,_="Unknown error status: "+q+" with message "+B.message),A=!0,P.Uo(new j(H,_)),E.close()}else U(Pt,`RPC '${t}' stream ${s} received:`,O),P.Ko(O)}}),M(u,Wl.STAT_EVENT,D=>{D.stat===Ys.PROXY?U(Pt,`RPC '${t}' stream ${s} detected buffering proxy`):D.stat===Ys.NOPROXY&&U(Pt,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{P.$o()},0),P}}function Bs(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rs(n){return new Jd(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hu{constructor(t,e,r=1e3,s=1.5,o=6e4){this.Ti=t,this.timerId=e,this.Go=r,this.zo=s,this.jo=o,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(t){this.cancel();const e=Math.floor(this.Ho+this.e_()),r=Math.max(0,Date.now()-this.Yo),s=Math.max(0,e-r);s>0&&U("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ho} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,s,()=>(this.Yo=Date.now(),t())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ka="PersistentStream";class Gu{constructor(t,e,r,s,o,a,u,h){this.Ti=t,this.n_=r,this.r_=s,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=u,this.listener=h,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new Hu(t,e)}u_(){return this.state===1||this.state===5||this.c_()}c_(){return this.state===2||this.state===3}start(){this.__=0,this.state!==4?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&this.s_===null&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(t){this.E_(),this.stream.send(t)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(t,e){this.E_(),this.d_(),this.a_.cancel(),this.i_++,t!==4?this.a_.reset():e&&e.code===S.RESOURCE_EXHAUSTED?(ee(e.toString()),ee("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):e&&e.code===S.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.A_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Lo(e)}A_(){}auth(){this.state=1;const t=this.R_(this.i_),e=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.i_===e&&this.V_(r,s)},r=>{t(()=>{const s=new j(S.UNKNOWN,"Fetching auth token failed: "+r.message);return this.m_(s)})})}V_(t,e){const r=this.R_(this.i_);this.stream=this.f_(t,e),this.stream.xo(()=>{r(()=>this.listener.xo())}),this.stream.No(()=>{r(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(s=>{r(()=>this.m_(s))}),this.stream.onMessage(s=>{r(()=>++this.__==1?this.g_(s):this.onNext(s))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(t){return U(Ka,`close with error: ${t}`),this.stream=null,this.close(4,t)}R_(t){return e=>{this.Ti.enqueueAndForget(()=>this.i_===t?e():(U(Ka,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Qm extends Gu{constructor(t,e,r,s,o,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,s,a),this.serializer=o}f_(t,e){return this.connection.Wo("Listen",t,e)}g_(t){return this.onNext(t)}onNext(t){this.a_.reset();const e=em(this.serializer,t),r=function(o){if(!("targetChange"in o))return K.min();const a=o.targetChange;return a.targetIds&&a.targetIds.length?K.min():a.readTime?Kt(a.readTime):K.min()}(t);return this.listener.p_(e,r)}y_(t){const e={};e.database=li(this.serializer),e.addTarget=function(o,a){let u;const h=a.target;if(u=ni(h)?{documents:sm(o,h)}:{query:im(o,h).ht},u.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){u.resumeToken=Ou(o,a.resumeToken);const f=ii(o,a.expectedCount);f!==null&&(u.expectedCount=f)}else if(a.snapshotVersion.compareTo(K.min())>0){u.readTime=qr(o,a.snapshotVersion.toTimestamp());const f=ii(o,a.expectedCount);f!==null&&(u.expectedCount=f)}return u}(this.serializer,t);const r=am(this.serializer,t);r&&(e.labels=r),this.I_(e)}w_(t){const e={};e.database=li(this.serializer),e.removeTarget=t,this.I_(e)}}class Xm extends Gu{constructor(t,e,r,s,o,a){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,r,s,a),this.serializer=o}get S_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.S_&&this.b_([])}f_(t,e){return this.connection.Wo("Write",t,e)}g_(t){return rt(!!t.streamToken),this.lastStreamToken=t.streamToken,rt(!t.writeResults||t.writeResults.length===0),this.listener.D_()}onNext(t){rt(!!t.streamToken),this.lastStreamToken=t.streamToken,this.a_.reset();const e=rm(t.writeResults,t.commitTime),r=Kt(t.commitTime);return this.listener.v_(r,e)}C_(){const t={};t.database=li(this.serializer),this.I_(t)}b_(t){const e={streamToken:this.lastStreamToken,writes:t.map(r=>nm(this.serializer,r))};this.I_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ym{}class Jm extends Ym{constructor(t,e,r,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=s,this.F_=!1}M_(){if(this.F_)throw new j(S.FAILED_PRECONDITION,"The client has already been terminated.")}So(t,e,r,s){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.So(t,oi(e,r),s,o,a)).catch(o=>{throw o.name==="FirebaseError"?(o.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new j(S.UNKNOWN,o.toString())})}Co(t,e,r,s,o){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,u])=>this.connection.Co(t,oi(e,r),s,a,u,o)).catch(a=>{throw a.name==="FirebaseError"?(a.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new j(S.UNKNOWN,a.toString())})}terminate(){this.F_=!0,this.connection.terminate()}}class Zm{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){this.x_===0&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(t){this.state==="Online"?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.L_("Offline")))}set(t){this.Q_(),this.x_=0,t==="Online"&&(this.N_=!1),this.L_(t)}L_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}k_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(ee(e),this.N_=!1):U("OnlineStateTracker",e)}Q_(){this.O_!==null&&(this.O_.cancel(),this.O_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ve="RemoteStore";class tp{constructor(t,e,r,s,o){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.U_=[],this.K_=new Map,this.W_=new Set,this.G_=[],this.z_=o,this.z_.To(a=>{r.enqueueAndForget(async()=>{Oe(this)&&(U(Ve,"Restarting streams for network reachability change."),await async function(h){const f=W(h);f.W_.add(4),await Xn(f),f.j_.set("Unknown"),f.W_.delete(4),await ss(f)}(this))})}),this.j_=new Zm(r,s)}}async function ss(n){if(Oe(n))for(const t of n.G_)await t(!0)}async function Xn(n){for(const t of n.G_)await t(!1)}function Ku(n,t){const e=W(n);e.K_.has(t.targetId)||(e.K_.set(t.targetId,t),Li(e)?Mi(e):un(e).c_()&&Oi(e,t))}function Ni(n,t){const e=W(n),r=un(e);e.K_.delete(t),r.c_()&&Wu(e,t),e.K_.size===0&&(r.c_()?r.P_():Oe(e)&&e.j_.set("Unknown"))}function Oi(n,t){if(n.H_.Ne(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(K.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}un(n).y_(t)}function Wu(n,t){n.H_.Ne(t),un(n).w_(t)}function Mi(n){n.H_=new Wd({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),lt:t=>n.K_.get(t)||null,it:()=>n.datastore.serializer.databaseId}),un(n).start(),n.j_.B_()}function Li(n){return Oe(n)&&!un(n).u_()&&n.K_.size>0}function Oe(n){return W(n).W_.size===0}function Qu(n){n.H_=void 0}async function ep(n){n.j_.set("Online")}async function np(n){n.K_.forEach((t,e)=>{Oi(n,t)})}async function rp(n,t){Qu(n),Li(n)?(n.j_.q_(t),Mi(n)):n.j_.set("Unknown")}async function sp(n,t,e){if(n.j_.set("Online"),t instanceof Nu&&t.state===2&&t.cause)try{await async function(s,o){const a=o.cause;for(const u of o.targetIds)s.K_.has(u)&&(await s.remoteSyncer.rejectListen(u,a),s.K_.delete(u),s.H_.removeTarget(u))}(n,t)}catch(r){U(Ve,"Failed to remove targets %s: %s ",t.targetIds.join(","),r),await $r(n,r)}else if(t instanceof Cr?n.H_.We(t):t instanceof ku?n.H_.Ze(t):n.H_.je(t),!e.isEqual(K.min()))try{const r=await $u(n.localStore);e.compareTo(r)>=0&&await function(o,a){const u=o.H_.ot(a);return u.targetChanges.forEach((h,f)=>{if(h.resumeToken.approximateByteSize()>0){const p=o.K_.get(f);p&&o.K_.set(f,p.withResumeToken(h.resumeToken,a))}}),u.targetMismatches.forEach((h,f)=>{const p=o.K_.get(h);if(!p)return;o.K_.set(h,p.withResumeToken(wt.EMPTY_BYTE_STRING,p.snapshotVersion)),Wu(o,h);const E=new ue(p.target,h,f,p.sequenceNumber);Oi(o,E)}),o.remoteSyncer.applyRemoteEvent(u)}(n,e)}catch(r){U(Ve,"Failed to raise snapshot:",r),await $r(n,r)}}async function $r(n,t,e){if(!ln(t))throw t;n.W_.add(1),await Xn(n),n.j_.set("Offline"),e||(e=()=>$u(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{U(Ve,"Retrying IndexedDB access"),await e(),n.W_.delete(1),await ss(n)})}function Xu(n,t){return t().catch(e=>$r(n,e,t))}async function is(n){const t=W(n),e=Ee(t);let r=t.U_.length>0?t.U_[t.U_.length-1].batchId:vi;for(;ip(t);)try{const s=await jm(t.localStore,r);if(s===null){t.U_.length===0&&e.P_();break}r=s.batchId,op(t,s)}catch(s){await $r(t,s)}Yu(t)&&Ju(t)}function ip(n){return Oe(n)&&n.U_.length<10}function op(n,t){n.U_.push(t);const e=Ee(n);e.c_()&&e.S_&&e.b_(t.mutations)}function Yu(n){return Oe(n)&&!Ee(n).u_()&&n.U_.length>0}function Ju(n){Ee(n).start()}async function ap(n){Ee(n).C_()}async function lp(n){const t=Ee(n);for(const e of n.U_)t.b_(e.mutations)}async function up(n,t,e){const r=n.U_.shift(),s=Ri.from(r,t,e);await Xu(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await is(n)}async function cp(n,t){t&&Ee(n).S_&&await async function(r,s){if(function(a){return Gd(a)&&a!==S.ABORTED}(s.code)){const o=r.U_.shift();Ee(r).h_(),await Xu(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,s)),await is(r)}}(n,t),Yu(n)&&Ju(n)}async function Wa(n,t){const e=W(n);e.asyncQueue.verifyOperationInProgress(),U(Ve,"RemoteStore received new credentials");const r=Oe(e);e.W_.add(3),await Xn(e),r&&e.j_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.W_.delete(3),await ss(e)}async function hp(n,t){const e=W(n);t?(e.W_.delete(2),await ss(e)):t||(e.W_.add(2),await Xn(e),e.j_.set("Unknown"))}function un(n){return n.J_||(n.J_=function(e,r,s){const o=W(e);return o.M_(),new Qm(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(n.datastore,n.asyncQueue,{xo:ep.bind(null,n),No:np.bind(null,n),Lo:rp.bind(null,n),p_:sp.bind(null,n)}),n.G_.push(async t=>{t?(n.J_.h_(),Li(n)?Mi(n):n.j_.set("Unknown")):(await n.J_.stop(),Qu(n))})),n.J_}function Ee(n){return n.Y_||(n.Y_=function(e,r,s){const o=W(e);return o.M_(),new Xm(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(n.datastore,n.asyncQueue,{xo:()=>Promise.resolve(),No:ap.bind(null,n),Lo:cp.bind(null,n),D_:lp.bind(null,n),v_:up.bind(null,n)}),n.G_.push(async t=>{t?(n.Y_.h_(),await is(n)):(await n.Y_.stop(),n.U_.length>0&&(U(Ve,`Stopping write stream with ${n.U_.length} pending writes`),n.U_=[]))})),n.Y_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi{constructor(t,e,r,s,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=s,this.removalCallback=o,this.deferred=new de,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,s,o){const a=Date.now()+r,u=new Fi(t,e,a,s,o);return u.start(r),u}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new j(S.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function xi(n,t){if(ee("AsyncQueue",`${t}: ${n}`),ln(n))return new j(S.UNAVAILABLE,`${t}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{static emptySet(t){return new Qe(t.comparator)}constructor(t){this.comparator=t?(e,r)=>t(e,r)||z.comparator(e.key,r.key):(e,r)=>z.comparator(e.key,r.key),this.keyedMap=Rn(),this.sortedSet=new ut(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,r)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Qe)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=r.getNext().key;if(!s.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const r=new Qe;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=e,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qa{constructor(){this.Z_=new ut(z.comparator)}track(t){const e=t.doc.key,r=this.Z_.get(e);r?t.type!==0&&r.type===3?this.Z_=this.Z_.insert(e,t):t.type===3&&r.type!==1?this.Z_=this.Z_.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.Z_=this.Z_.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.Z_=this.Z_.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.Z_=this.Z_.remove(e):t.type===1&&r.type===2?this.Z_=this.Z_.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.Z_=this.Z_.insert(e,{type:2,doc:t.doc}):G():this.Z_=this.Z_.insert(e,t)}X_(){const t=[];return this.Z_.inorderTraversal((e,r)=>{t.push(r)}),t}}class nn{constructor(t,e,r,s,o,a,u,h,f){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=o,this.fromCache=a,this.syncStateChanged=u,this.excludesMetadataChanges=h,this.hasCachedResults=f}static fromInitialDocuments(t,e,r,s,o){const a=[];return e.forEach(u=>{a.push({type:0,doc:u})}),new nn(t,e,Qe.emptySet(e),a,r,s,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Jr(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let s=0;s<e.length;s++)if(e[s].type!==r[s].type||!e[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fp{constructor(){this.ea=void 0,this.ta=[]}na(){return this.ta.some(t=>t.ra())}}class dp{constructor(){this.queries=Xa(),this.onlineState="Unknown",this.ia=new Set}terminate(){(function(e,r){const s=W(e),o=s.queries;s.queries=Xa(),o.forEach((a,u)=>{for(const h of u.ta)h.onError(r)})})(this,new j(S.ABORTED,"Firestore shutting down"))}}function Xa(){return new ke(n=>yu(n),Jr)}async function mp(n,t){const e=W(n);let r=3;const s=t.query;let o=e.queries.get(s);o?!o.na()&&t.ra()&&(r=2):(o=new fp,r=t.ra()?0:1);try{switch(r){case 0:o.ea=await e.onListen(s,!0);break;case 1:o.ea=await e.onListen(s,!1);break;case 2:await e.onFirstRemoteStoreListen(s)}}catch(a){const u=xi(a,`Initialization of query '${$e(t.query)}' failed`);return void t.onError(u)}e.queries.set(s,o),o.ta.push(t),t.sa(e.onlineState),o.ea&&t.oa(o.ea)&&Ui(e)}async function pp(n,t){const e=W(n),r=t.query;let s=3;const o=e.queries.get(r);if(o){const a=o.ta.indexOf(t);a>=0&&(o.ta.splice(a,1),o.ta.length===0?s=t.ra()?0:1:!o.na()&&t.ra()&&(s=2))}switch(s){case 0:return e.queries.delete(r),e.onUnlisten(r,!0);case 1:return e.queries.delete(r),e.onUnlisten(r,!1);case 2:return e.onLastRemoteStoreUnlisten(r);default:return}}function gp(n,t){const e=W(n);let r=!1;for(const s of t){const o=s.query,a=e.queries.get(o);if(a){for(const u of a.ta)u.oa(s)&&(r=!0);a.ea=s}}r&&Ui(e)}function _p(n,t,e){const r=W(n),s=r.queries.get(t);if(s)for(const o of s.ta)o.onError(e);r.queries.delete(t)}function Ui(n){n.ia.forEach(t=>{t.next()})}var hi,Ya;(Ya=hi||(hi={}))._a="default",Ya.Cache="cache";class yp{constructor(t,e,r){this.query=t,this.aa=e,this.ua=!1,this.ca=null,this.onlineState="Unknown",this.options=r||{}}oa(t){if(!this.options.includeMetadataChanges){const r=[];for(const s of t.docChanges)s.type!==3&&r.push(s);t=new nn(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.ua?this.la(t)&&(this.aa.next(t),e=!0):this.ha(t,this.onlineState)&&(this.Pa(t),e=!0),this.ca=t,e}onError(t){this.aa.error(t)}sa(t){this.onlineState=t;let e=!1;return this.ca&&!this.ua&&this.ha(this.ca,t)&&(this.Pa(this.ca),e=!0),e}ha(t,e){if(!t.fromCache||!this.ra())return!0;const r=e!=="Offline";return(!this.options.Ta||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}la(t){if(t.docChanges.length>0)return!0;const e=this.ca&&this.ca.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}Pa(t){t=nn.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.ua=!0,this.aa.next(t)}ra(){return this.options.source!==hi.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zu{constructor(t){this.key=t}}class tc{constructor(t){this.key=t}}class Ep{constructor(t,e){this.query=t,this.fa=e,this.ga=null,this.hasCachedResults=!1,this.current=!1,this.pa=Y(),this.mutatedKeys=Y(),this.ya=Eu(t),this.wa=new Qe(this.ya)}get Sa(){return this.fa}ba(t,e){const r=e?e.Da:new Qa,s=e?e.wa:this.wa;let o=e?e.mutatedKeys:this.mutatedKeys,a=s,u=!1;const h=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,f=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((p,E)=>{const T=s.get(p),A=Zr(this.query,E)?E:null,P=!!T&&this.mutatedKeys.has(T.key),M=!!A&&(A.hasLocalMutations||this.mutatedKeys.has(A.key)&&A.hasCommittedMutations);let D=!1;T&&A?T.data.isEqual(A.data)?P!==M&&(r.track({type:3,doc:A}),D=!0):this.va(T,A)||(r.track({type:2,doc:A}),D=!0,(h&&this.ya(A,h)>0||f&&this.ya(A,f)<0)&&(u=!0)):!T&&A?(r.track({type:0,doc:A}),D=!0):T&&!A&&(r.track({type:1,doc:T}),D=!0,(h||f)&&(u=!0)),D&&(A?(a=a.add(A),o=M?o.add(p):o.delete(p)):(a=a.delete(p),o=o.delete(p)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const p=this.query.limitType==="F"?a.last():a.first();a=a.delete(p.key),o=o.delete(p.key),r.track({type:1,doc:p})}return{wa:a,Da:r,ls:u,mutatedKeys:o}}va(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r,s){const o=this.wa;this.wa=t.wa,this.mutatedKeys=t.mutatedKeys;const a=t.Da.X_();a.sort((p,E)=>function(A,P){const M=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return G()}};return M(A)-M(P)}(p.type,E.type)||this.ya(p.doc,E.doc)),this.Ca(r),s=s!=null&&s;const u=e&&!s?this.Fa():[],h=this.pa.size===0&&this.current&&!s?1:0,f=h!==this.ga;return this.ga=h,a.length!==0||f?{snapshot:new nn(this.query,t.wa,o,a,t.mutatedKeys,h===0,f,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ma:u}:{Ma:u}}sa(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({wa:this.wa,Da:new Qa,mutatedKeys:this.mutatedKeys,ls:!1},!1)):{Ma:[]}}xa(t){return!this.fa.has(t)&&!!this.wa.has(t)&&!this.wa.get(t).hasLocalMutations}Ca(t){t&&(t.addedDocuments.forEach(e=>this.fa=this.fa.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.fa=this.fa.delete(e)),this.current=t.current)}Fa(){if(!this.current)return[];const t=this.pa;this.pa=Y(),this.wa.forEach(r=>{this.xa(r.key)&&(this.pa=this.pa.add(r.key))});const e=[];return t.forEach(r=>{this.pa.has(r)||e.push(new tc(r))}),this.pa.forEach(r=>{t.has(r)||e.push(new Zu(r))}),e}Oa(t){this.fa=t.gs,this.pa=Y();const e=this.ba(t.documents);return this.applyChanges(e,!0)}Na(){return nn.fromInitialDocuments(this.query,this.wa,this.mutatedKeys,this.ga===0,this.hasCachedResults)}}const ji="SyncEngine";class vp{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}}class Tp{constructor(t){this.key=t,this.Ba=!1}}class wp{constructor(t,e,r,s,o,a){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=s,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.La={},this.ka=new ke(u=>yu(u),Jr),this.qa=new Map,this.Qa=new Set,this.$a=new ut(z.comparator),this.Ua=new Map,this.Ka=new Si,this.Wa={},this.Ga=new Map,this.za=en.Kn(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return this.ja===!0}}async function Ip(n,t,e=!0){const r=oc(n);let s;const o=r.ka.get(t);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),s=o.view.Na()):s=await ec(r,t,e,!0),s}async function Ap(n,t){const e=oc(n);await ec(e,t,!0,!1)}async function ec(n,t,e,r){const s=await Bm(n.localStore,Gt(t)),o=s.targetId,a=n.sharedClientState.addLocalQueryTarget(o,e);let u;return r&&(u=await bp(n,t,o,a==="current",s.resumeToken)),n.isPrimaryClient&&e&&Ku(n.remoteStore,s),u}async function bp(n,t,e,r,s){n.Ha=(E,T,A)=>async function(M,D,L,O){let N=D.view.ba(L);N.ls&&(N=await za(M.localStore,D.query,!1).then(({documents:_})=>D.view.ba(_,N)));const B=O&&O.targetChanges.get(D.targetId),q=O&&O.targetMismatches.get(D.targetId)!=null,H=D.view.applyChanges(N,M.isPrimaryClient,B,q);return Za(M,D.targetId,H.Ma),H.snapshot}(n,E,T,A);const o=await za(n.localStore,t,!0),a=new Ep(t,o.gs),u=a.ba(o.documents),h=Qn.createSynthesizedTargetChangeForCurrentChange(e,r&&n.onlineState!=="Offline",s),f=a.applyChanges(u,n.isPrimaryClient,h);Za(n,e,f.Ma);const p=new vp(t,e,a);return n.ka.set(t,p),n.qa.has(e)?n.qa.get(e).push(t):n.qa.set(e,[t]),f.snapshot}async function Rp(n,t,e){const r=W(n),s=r.ka.get(t),o=r.qa.get(s.targetId);if(o.length>1)return r.qa.set(s.targetId,o.filter(a=>!Jr(a,t))),void r.ka.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await ui(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),e&&Ni(r.remoteStore,s.targetId),fi(r,s.targetId)}).catch(an)):(fi(r,s.targetId),await ui(r.localStore,s.targetId,!0))}async function Pp(n,t){const e=W(n),r=e.ka.get(t),s=e.qa.get(r.targetId);e.isPrimaryClient&&s.length===1&&(e.sharedClientState.removeLocalQueryTarget(r.targetId),Ni(e.remoteStore,r.targetId))}async function Cp(n,t,e){const r=Mp(n);try{const s=await function(a,u){const h=W(a),f=pt.now(),p=u.reduce((A,P)=>A.add(P.key),Y());let E,T;return h.persistence.runTransaction("Locally write mutations","readwrite",A=>{let P=ne(),M=Y();return h.ds.getEntries(A,p).next(D=>{P=D,P.forEach((L,O)=>{O.isValidDocument()||(M=M.add(L))})}).next(()=>h.localDocuments.getOverlayedDocuments(A,P)).next(D=>{E=D;const L=[];for(const O of u){const N=Bd(O,E.get(O.key).overlayedDocument);N!=null&&L.push(new Ne(O.key,N,uu(N.value.mapValue),Zt.exists(!0)))}return h.mutationQueue.addMutationBatch(A,f,L,u)}).next(D=>{T=D;const L=D.applyToLocalDocumentSet(E,M);return h.documentOverlayCache.saveOverlays(A,D.batchId,L)})}).then(()=>({batchId:T.batchId,changes:Tu(E)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(s.batchId),function(a,u,h){let f=a.Wa[a.currentUser.toKey()];f||(f=new ut(X)),f=f.insert(u,h),a.Wa[a.currentUser.toKey()]=f}(r,s.batchId,e),await Yn(r,s.changes),await is(r.remoteStore)}catch(s){const o=xi(s,"Failed to persist write");e.reject(o)}}async function nc(n,t){const e=W(n);try{const r=await xm(e.localStore,t);t.targetChanges.forEach((s,o)=>{const a=e.Ua.get(o);a&&(rt(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?a.Ba=!0:s.modifiedDocuments.size>0?rt(a.Ba):s.removedDocuments.size>0&&(rt(a.Ba),a.Ba=!1))}),await Yn(e,r,t)}catch(r){await an(r)}}function Ja(n,t,e){const r=W(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const s=[];r.ka.forEach((o,a)=>{const u=a.view.sa(t);u.snapshot&&s.push(u.snapshot)}),function(a,u){const h=W(a);h.onlineState=u;let f=!1;h.queries.forEach((p,E)=>{for(const T of E.ta)T.sa(u)&&(f=!0)}),f&&Ui(h)}(r.eventManager,t),s.length&&r.La.p_(s),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function Sp(n,t,e){const r=W(n);r.sharedClientState.updateQueryState(t,"rejected",e);const s=r.Ua.get(t),o=s&&s.key;if(o){let a=new ut(z.comparator);a=a.insert(o,St.newNoDocument(o,K.min()));const u=Y().add(o),h=new ns(K.min(),new Map,new ut(X),a,u);await nc(r,h),r.$a=r.$a.remove(o),r.Ua.delete(t),Bi(r)}else await ui(r.localStore,t,!1).then(()=>fi(r,t,e)).catch(an)}async function Vp(n,t){const e=W(n),r=t.batch.batchId;try{const s=await Fm(e.localStore,t);sc(e,r,null),rc(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await Yn(e,s)}catch(s){await an(s)}}async function Dp(n,t,e){const r=W(n);try{const s=await function(a,u){const h=W(a);return h.persistence.runTransaction("Reject batch","readwrite-primary",f=>{let p;return h.mutationQueue.lookupMutationBatch(f,u).next(E=>(rt(E!==null),p=E.keys(),h.mutationQueue.removeMutationBatch(f,E))).next(()=>h.mutationQueue.performConsistencyCheck(f)).next(()=>h.documentOverlayCache.removeOverlaysForBatchId(f,p,u)).next(()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(f,p)).next(()=>h.localDocuments.getDocuments(f,p))})}(r.localStore,t);sc(r,t,e),rc(r,t),r.sharedClientState.updateMutationState(t,"rejected",e),await Yn(r,s)}catch(s){await an(s)}}function rc(n,t){(n.Ga.get(t)||[]).forEach(e=>{e.resolve()}),n.Ga.delete(t)}function sc(n,t,e){const r=W(n);let s=r.Wa[r.currentUser.toKey()];if(s){const o=s.get(t);o&&(e?o.reject(e):o.resolve(),s=s.remove(t)),r.Wa[r.currentUser.toKey()]=s}}function fi(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const r of n.qa.get(t))n.ka.delete(r),e&&n.La.Ja(r,e);n.qa.delete(t),n.isPrimaryClient&&n.Ka.br(t).forEach(r=>{n.Ka.containsKey(r)||ic(n,r)})}function ic(n,t){n.Qa.delete(t.path.canonicalString());const e=n.$a.get(t);e!==null&&(Ni(n.remoteStore,e),n.$a=n.$a.remove(t),n.Ua.delete(e),Bi(n))}function Za(n,t,e){for(const r of e)r instanceof Zu?(n.Ka.addReference(r.key,t),kp(n,r)):r instanceof tc?(U(ji,"Document no longer in limbo: "+r.key),n.Ka.removeReference(r.key,t),n.Ka.containsKey(r.key)||ic(n,r.key)):G()}function kp(n,t){const e=t.key,r=e.path.canonicalString();n.$a.get(e)||n.Qa.has(r)||(U(ji,"New document in limbo: "+e),n.Qa.add(r),Bi(n))}function Bi(n){for(;n.Qa.size>0&&n.$a.size<n.maxConcurrentLimboResolutions;){const t=n.Qa.values().next().value;n.Qa.delete(t);const e=new z(at.fromString(t)),r=n.za.next();n.Ua.set(r,new Tp(e)),n.$a=n.$a.insert(e,r),Ku(n.remoteStore,new ue(Gt(gu(e.path)),r,"TargetPurposeLimboResolution",Qr.ae))}}async function Yn(n,t,e){const r=W(n),s=[],o=[],a=[];r.ka.isEmpty()||(r.ka.forEach((u,h)=>{a.push(r.Ha(h,t,e).then(f=>{var p;if((f||e)&&r.isPrimaryClient){const E=f?!f.fromCache:(p=e==null?void 0:e.targetChanges.get(h.targetId))===null||p===void 0?void 0:p.current;r.sharedClientState.updateQueryState(h.targetId,E?"current":"not-current")}if(f){s.push(f);const E=Di.Yi(h.targetId,f);o.push(E)}}))}),await Promise.all(a),r.La.p_(s),await async function(h,f){const p=W(h);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",E=>C.forEach(f,T=>C.forEach(T.Hi,A=>p.persistence.referenceDelegate.addReference(E,T.targetId,A)).next(()=>C.forEach(T.Ji,A=>p.persistence.referenceDelegate.removeReference(E,T.targetId,A)))))}catch(E){if(!ln(E))throw E;U(ki,"Failed to update sequence numbers: "+E)}for(const E of f){const T=E.targetId;if(!E.fromCache){const A=p.Ts.get(T),P=A.snapshotVersion,M=A.withLastLimboFreeSnapshotVersion(P);p.Ts=p.Ts.insert(T,M)}}}(r.localStore,o))}async function Np(n,t){const e=W(n);if(!e.currentUser.isEqual(t)){U(ji,"User change. New user:",t.toKey());const r=await zu(e.localStore,t);e.currentUser=t,function(o,a){o.Ga.forEach(u=>{u.forEach(h=>{h.reject(new j(S.CANCELLED,a))})}),o.Ga.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await Yn(e,r.Rs)}}function Op(n,t){const e=W(n),r=e.Ua.get(t);if(r&&r.Ba)return Y().add(r.key);{let s=Y();const o=e.qa.get(t);if(!o)return s;for(const a of o){const u=e.ka.get(a);s=s.unionWith(u.view.Sa)}return s}}function oc(n){const t=W(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=nc.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Op.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Sp.bind(null,t),t.La.p_=gp.bind(null,t.eventManager),t.La.Ja=_p.bind(null,t.eventManager),t}function Mp(n){const t=W(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Vp.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Dp.bind(null,t),t}class Hr{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=rs(t.databaseInfo.databaseId),this.sharedClientState=this.Za(t),this.persistence=this.Xa(t),await this.persistence.start(),this.localStore=this.eu(t),this.gcScheduler=this.tu(t,this.localStore),this.indexBackfillerScheduler=this.nu(t,this.localStore)}tu(t,e){return null}nu(t,e){return null}eu(t){return Lm(this.persistence,new Nm,t.initialUser,this.serializer)}Xa(t){return new qu(Vi.ri,this.serializer)}Za(t){return new zm}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Hr.provider={build:()=>new Hr};class Lp extends Hr{constructor(t){super(),this.cacheSizeBytes=t}tu(t,e){rt(this.persistence.referenceDelegate instanceof zr);const r=this.persistence.referenceDelegate.garbageCollector;return new ym(r,t.asyncQueue,e)}Xa(t){const e=this.cacheSizeBytes!==void 0?Ot.withCacheSize(this.cacheSizeBytes):Ot.DEFAULT;return new qu(r=>zr.ri(r,e),this.serializer)}}class di{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Ja(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Np.bind(null,this.syncEngine),await hp(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new dp}()}createDatastore(t){const e=rs(t.databaseInfo.databaseId),r=function(o){return new Wm(o)}(t.databaseInfo);return function(o,a,u,h){return new Jm(o,a,u,h)}(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return function(r,s,o,a,u){return new tp(r,s,o,a,u)}(this.localStore,this.datastore,t.asyncQueue,e=>Ja(this.syncEngine,e,0),function(){return Ga.D()?new Ga:new $m}())}createSyncEngine(t,e){return function(s,o,a,u,h,f,p){const E=new wp(s,o,a,u,h,f);return p&&(E.ja=!0),E}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(s){const o=W(s);U(Ve,"RemoteStore shutting down."),o.W_.add(5),await Xn(o),o.z_.shutdown(),o.j_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}di.provider={build:()=>new di};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fp{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.iu(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.iu(this.observer.error,t):ee("Uncaught Error in snapshot listener:",t.toString()))}su(){this.muted=!0}iu(t,e){setTimeout(()=>{this.muted||t(e)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ve="FirestoreClient";class xp{constructor(t,e,r,s,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=s,this.user=Ct.UNAUTHENTICATED,this.clientId=Zl.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,async a=>{U(ve,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(U(ve,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new de;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=xi(e,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function qs(n,t){n.asyncQueue.verifyOperationInProgress(),U(ve,"Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await zu(t.localStore,s),r=s)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function tl(n,t){n.asyncQueue.verifyOperationInProgress();const e=await Up(n);U(ve,"Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(r=>Wa(t.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>Wa(t.remoteStore,s)),n._onlineComponents=t}async function Up(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){U(ve,"Using user provided OfflineComponentProvider");try{await qs(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(s){return s.name==="FirebaseError"?s.code===S.FAILED_PRECONDITION||s.code===S.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(e))throw e;Ye("Error using user provided cache. Falling back to memory cache: "+e),await qs(n,new Hr)}}else U(ve,"Using default OfflineComponentProvider"),await qs(n,new Lp(void 0));return n._offlineComponents}async function ac(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(U(ve,"Using user provided OnlineComponentProvider"),await tl(n,n._uninitializedComponentsProvider._online)):(U(ve,"Using default OnlineComponentProvider"),await tl(n,new di))),n._onlineComponents}function jp(n){return ac(n).then(t=>t.syncEngine)}async function Bp(n){const t=await ac(n),e=t.eventManager;return e.onListen=Ip.bind(null,t.syncEngine),e.onUnlisten=Rp.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=Ap.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=Pp.bind(null,t.syncEngine),e}function qp(n,t,e={}){const r=new de;return n.asyncQueue.enqueueAndForget(async()=>function(o,a,u,h,f){const p=new Fp({next:T=>{p.su(),a.enqueueAndForget(()=>pp(o,E)),T.fromCache&&h.source==="server"?f.reject(new j(S.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):f.resolve(T)},error:T=>f.reject(T)}),E=new yp(u,p,{includeMetadataChanges:!0,Ta:!0});return mp(o,E)}(await Bp(n),n.asyncQueue,t,e,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lc(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const el=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uc(n,t,e){if(!e)throw new j(S.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function zp(n,t,e,r){if(t===!0&&r===!0)throw new j(S.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function nl(n){if(!z.isDocumentKey(n))throw new j(S.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function rl(n){if(z.isDocumentKey(n))throw new j(S.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function os(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":G()}function Gr(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new j(S.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=os(n);throw new j(S.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cc="firestore.googleapis.com",sl=!0;class il{constructor(t){var e,r;if(t.host===void 0){if(t.ssl!==void 0)throw new j(S.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=cc,this.ssl=sl}else this.host=t.host,this.ssl=(e=t.ssl)!==null&&e!==void 0?e:sl;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=Bu;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<gm)throw new j(S.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}zp("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=lc((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new j(S.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new j(S.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new j(S.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class as{constructor(t,e,r,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new il({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new j(S.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new j(S.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new il(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Kf;switch(r.type){case"firstParty":return new Yf(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new j(S.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const r=el.get(e);r&&(U("ComponentProvider","Removing Datastore"),el.delete(e),r.terminate())}(this),Promise.resolve()}}function $p(n,t,e,r={}){var s;const o=(n=Gr(n,as))._getSettings(),a=Object.assign(Object.assign({},o),{emulatorOptions:n._getEmulatorOptions()}),u=`${t}:${e}`;o.host!==cc&&o.host!==u&&Ye("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const h=Object.assign(Object.assign({},o),{host:u,ssl:!1,emulatorOptions:r});if(!kr(h,a)&&(n._setSettings(h),r.mockUserToken)){let f,p;if(typeof r.mockUserToken=="string")f=r.mockUserToken,p=Ct.MOCK_USER;else{f=bh(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const E=r.mockUserToken.sub||r.mockUserToken.user_id;if(!E)throw new j(S.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new Ct(E)}n._authCredentials=new Wf(new Yl(f,p))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new cn(this.firestore,t,this._query)}}class Ft{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new me(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Ft(this.firestore,t,this._key)}}class me extends cn{constructor(t,e,r){super(t,e,gu(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Ft(this.firestore,null,new z(t))}withConverter(t){return new me(this.firestore,t,this._path)}}function hc(n,t,...e){if(n=Xe(n),uc("collection","path",t),n instanceof as){const r=at.fromString(t,...e);return rl(r),new me(n,null,r)}{if(!(n instanceof Ft||n instanceof me))throw new j(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(at.fromString(t,...e));return rl(r),new me(n.firestore,null,r)}}function Hp(n,t,...e){if(n=Xe(n),arguments.length===1&&(t=Zl.newId()),uc("doc","path",t),n instanceof as){const r=at.fromString(t,...e);return nl(r),new Ft(n,null,new z(r))}{if(!(n instanceof Ft||n instanceof me))throw new j(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(at.fromString(t,...e));return nl(r),new Ft(n.firestore,n instanceof me?n.converter:null,new z(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ol="AsyncQueue";class al{constructor(t=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new Hu(this,"async_queue_retry"),this.Su=()=>{const r=Bs();r&&U(ol,"Visibility state changed to "+r.visibilityState),this.a_.t_()},this.bu=t;const e=Bs();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Su)}get isShuttingDown(){return this.mu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Du(),this.vu(t)}enterRestrictedMode(t){if(!this.mu){this.mu=!0,this.yu=t||!1;const e=Bs();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.Su)}}enqueue(t){if(this.Du(),this.mu)return new Promise(()=>{});const e=new de;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Vu.push(t),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(t){if(!ln(t))throw t;U(ol,"Operation failed with retryable error: "+t)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(t){const e=this.bu.then(()=>(this.pu=!0,t().catch(r=>{this.gu=r,this.pu=!1;const s=function(a){let u=a.message||"";return a.stack&&(u=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),u}(r);throw ee("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.pu=!1,r))));return this.bu=e,e}enqueueAfterDelay(t,e,r){this.Du(),this.wu.indexOf(t)>-1&&(e=0);const s=Fi.createAndSchedule(this,t,e,r,o=>this.Fu(o));return this.fu.push(s),s}Du(){this.gu&&G()}verifyOperationInProgress(){}async Mu(){let t;do t=this.bu,await t;while(t!==this.bu)}xu(t){for(const e of this.fu)if(e.timerId===t)return!0;return!1}Ou(t){return this.Mu().then(()=>{this.fu.sort((e,r)=>e.targetTimeMs-r.targetTimeMs);for(const e of this.fu)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.Mu()})}Nu(t){this.wu.push(t)}Fu(t){const e=this.fu.indexOf(t);this.fu.splice(e,1)}}class qi extends as{constructor(t,e,r,s){super(t,e,r,s),this.type="firestore",this._queue=new al,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new al(t),this._firestoreClient=void 0,await t}}}function Gp(n,t){const e=typeof n=="object"?n:Lf(),r=typeof n=="string"?n:Lr,s=Df(e,"firestore").getImmediate({identifier:r});if(!s._initialized){const o=Ih("firestore");o&&$p(s,...o)}return s}function fc(n){if(n._terminated)throw new j(S.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Kp(n),n._firestoreClient}function Kp(n){var t,e,r;const s=n._freezeSettings(),o=function(u,h,f,p){return new fd(u,h,f,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,lc(p.experimentalLongPollingOptions),p.useFetchStreams)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((e=s.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new xp(n._authCredentials,n._appCheckCredentials,n._queue,o,n._componentsProvider&&function(u){const h=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(h),_online:h}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(t){this._byteString=t}static fromBase64String(t){try{return new rn(wt.fromBase64String(t))}catch(e){throw new j(S.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new rn(wt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new j(S.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Tt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dc{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new j(S.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new j(S.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return X(this._lat,t._lat)||X(this._long,t._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(r,s){if(r.length!==s.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==s[o])return!1;return!0}(this._values,t._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wp=/^__.*__$/;class Qp{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return this.fieldMask!==null?new Ne(t,this.data,this.fieldMask,e,this.fieldTransforms):new Wn(t,this.data,e,this.fieldTransforms)}}function mc(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw G()}}class Gi{constructor(t,e,r,s,o,a){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=s,o===void 0&&this.Bu(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(t){return new Gi(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.ku({path:r,Qu:!1});return s.$u(t),s}Uu(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.ku({path:r,Qu:!1});return s.Bu(),s}Ku(t){return this.ku({path:void 0,Qu:!0})}Wu(t){return Kr(t,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}Bu(){if(this.path)for(let t=0;t<this.path.length;t++)this.$u(this.path.get(t))}$u(t){if(t.length===0)throw this.Wu("Document fields must not be empty");if(mc(this.Lu)&&Wp.test(t))throw this.Wu('Document fields cannot begin and end with "__"')}}class Xp{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||rs(t)}ju(t,e,r,s=!1){return new Gi({Lu:t,methodName:e,zu:r,path:Tt.emptyPath(),Qu:!1,Gu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function pc(n){const t=n._freezeSettings(),e=rs(n._databaseId);return new Xp(n._databaseId,!!t.ignoreUndefinedProperties,e)}function Yp(n,t,e,r,s,o={}){const a=n.ju(o.merge||o.mergeFields?2:0,t,e,s);yc("Data must be an object, but it was:",a,r);const u=gc(r,a);let h,f;if(o.merge)h=new qt(a.fieldMask),f=a.fieldTransforms;else if(o.mergeFields){const p=[];for(const E of o.mergeFields){const T=Zp(t,E,e);if(!a.contains(T))throw new j(S.INVALID_ARGUMENT,`Field '${T}' is specified in your field mask but missing from your input data.`);eg(p,T)||p.push(T)}h=new qt(p),f=a.fieldTransforms.filter(E=>h.covers(E.field))}else h=null,f=a.fieldTransforms;return new Qp(new Lt(u),h,f)}function Jp(n,t,e,r=!1){return Ki(e,n.ju(r?4:3,t))}function Ki(n,t){if(_c(n=Xe(n)))return yc("Unsupported field value:",t,n),gc(n,t);if(n instanceof dc)return function(r,s){if(!mc(s.Lu))throw s.Wu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Wu(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(s);o&&s.fieldTransforms.push(o)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.Qu&&t.Lu!==4)throw t.Wu("Nested arrays are not supported");return function(r,s){const o=[];let a=0;for(const u of r){let h=Ki(u,s.Ku(a));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),a++}return{arrayValue:{values:o}}}(n,t)}return function(r,s){if((r=Xe(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Md(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=pt.fromDate(r);return{timestampValue:qr(s.serializer,o)}}if(r instanceof pt){const o=new pt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:qr(s.serializer,o)}}if(r instanceof $i)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof rn)return{bytesValue:Ou(s.serializer,r._byteString)};if(r instanceof Ft){const o=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(o))throw s.Wu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:Ci(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Hi)return function(a,u){return{mapValue:{fields:{[au]:{stringValue:lu},[Fr]:{arrayValue:{values:a.toArray().map(f=>{if(typeof f!="number")throw u.Wu("VectorValues must only contain numeric values.");return bi(u.serializer,f)})}}}}}}(r,s);throw s.Wu(`Unsupported field value: ${os(r)}`)}(n,t)}function gc(n,t){const e={};return eu(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):De(n,(r,s)=>{const o=Ki(s,t.qu(r));o!=null&&(e[r]=o)}),{mapValue:{fields:e}}}function _c(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof pt||n instanceof $i||n instanceof rn||n instanceof Ft||n instanceof dc||n instanceof Hi)}function yc(n,t,e){if(!_c(e)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(e)){const r=os(e);throw r==="an object"?t.Wu(n+" a custom object"):t.Wu(n+" "+r)}}function Zp(n,t,e){if((t=Xe(t))instanceof zi)return t._internalPath;if(typeof t=="string")return Ec(n,t);throw Kr("Field path arguments must be of type string or ",n,!1,void 0,e)}const tg=new RegExp("[~\\*/\\[\\]]");function Ec(n,t,e){if(t.search(tg)>=0)throw Kr(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new zi(...t.split("."))._internalPath}catch{throw Kr(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function Kr(n,t,e,r,s){const o=r&&!r.isEmpty(),a=s!==void 0;let u=`Function ${t}() called with invalid data`;e&&(u+=" (via `toFirestore()`)"),u+=". ";let h="";return(o||a)&&(h+=" (found",o&&(h+=` in field ${r}`),a&&(h+=` in document ${s}`),h+=")"),new j(S.INVALID_ARGUMENT,u+n+h)}function eg(n,t){return n.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vc{constructor(t,e,r,s,o){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=s,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new Ft(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new ng(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Wi("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class ng extends vc{data(){return super.data()}}function Wi(n,t){return typeof t=="string"?Ec(n,t):t instanceof zi?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rg(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new j(S.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Qi{}class sg extends Qi{}function ig(n,t,...e){let r=[];t instanceof Qi&&r.push(t),r=r.concat(e),function(o){const a=o.filter(h=>h instanceof Xi).length,u=o.filter(h=>h instanceof ls).length;if(a>1||a>0&&u>0)throw new j(S.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)n=s._apply(n);return n}class ls extends sg{constructor(t,e,r){super(),this._field=t,this._op=e,this._value=r,this.type="where"}static _create(t,e,r){return new ls(t,e,r)}_apply(t){const e=this._parse(t);return Tc(t._query,e),new cn(t.firestore,t.converter,ri(t._query,e))}_parse(t){const e=pc(t.firestore);return function(o,a,u,h,f,p,E){let T;if(f.isKeyField()){if(p==="array-contains"||p==="array-contains-any")throw new j(S.INVALID_ARGUMENT,`Invalid Query. You can't perform '${p}' queries on documentId().`);if(p==="in"||p==="not-in"){ul(E,p);const P=[];for(const M of E)P.push(ll(h,o,M));T={arrayValue:{values:P}}}else T=ll(h,o,E)}else p!=="in"&&p!=="not-in"&&p!=="array-contains-any"||ul(E,p),T=Jp(u,a,E,p==="in"||p==="not-in");return mt.create(f,p,T)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}function og(n,t,e){const r=t,s=Wi("where",n);return ls._create(s,r,e)}class Xi extends Qi{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new Xi(t,e)}_parse(t){const e=this._queryConstraints.map(r=>r._parse(t)).filter(r=>r.getFilters().length>0);return e.length===1?e[0]:$t.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:(function(s,o){let a=s;const u=o.getFlattenedFilters();for(const h of u)Tc(a,h),a=ri(a,h)}(t._query,e),new cn(t.firestore,t.converter,ri(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function ll(n,t,e){if(typeof(e=Xe(e))=="string"){if(e==="")throw new j(S.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!_u(t)&&e.indexOf("/")!==-1)throw new j(S.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const r=t.path.child(at.fromString(e));if(!z.isDocumentKey(r))throw new j(S.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Aa(n,new z(r))}if(e instanceof Ft)return Aa(n,e._key);throw new j(S.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${os(e)}.`)}function ul(n,t){if(!Array.isArray(n)||n.length===0)throw new j(S.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function Tc(n,t){const e=function(s,o){for(const a of s)for(const u of a.getFlattenedFilters())if(o.indexOf(u.op)>=0)return u.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(e!==null)throw e===t.op?new j(S.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new j(S.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}class ag{convertValue(t,e="none"){switch(ye(t)){case 0:return null;case 1:return t.booleanValue;case 2:return ft(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(_e(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw G()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return De(t,(s,o)=>{r[s]=this.convertValue(o,e)}),r}convertVectorValue(t){var e,r,s;const o=(s=(r=(e=t.fields)===null||e===void 0?void 0:e[Fr].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(a=>ft(a.doubleValue));return new Hi(o)}convertGeoPoint(t){return new $i(ft(t.latitude),ft(t.longitude))}convertArray(t,e){return(t.values||[]).map(r=>this.convertValue(r,e))}convertServerTimestamp(t,e){switch(e){case"previous":const r=Yr(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(Fn(t));default:return null}}convertTimestamp(t){const e=ge(t);return new pt(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=at.fromString(t);rt(ju(r));const s=new xn(r.get(1),r.get(3)),o=new z(r.popFirst(5));return s.isEqual(e)||ee(`Document ${o} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lg(n,t,e){let r;return r=n?n.toFirestore(t):t,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class ug extends vc{constructor(t,e,r,s,o,a){super(t,e,r,s,a),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Sr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(Wi("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}}class Sr extends ug{data(t={}){return super.data(t)}}class cg{constructor(t,e,r,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new wr(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(r=>{t.call(e,new Sr(this._firestore,this._userDataWriter,r.key,r,new wr(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new j(S.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(s,o){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(u=>{const h=new Sr(s._firestore,s._userDataWriter,u.doc.key,u.doc,new wr(s._snapshot.mutatedKeys.has(u.doc.key),s._snapshot.fromCache),s.query.converter);return u.doc,{type:"added",doc:h,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(u=>o||u.type!==3).map(u=>{const h=new Sr(s._firestore,s._userDataWriter,u.doc.key,u.doc,new wr(s._snapshot.mutatedKeys.has(u.doc.key),s._snapshot.fromCache),s.query.converter);let f=-1,p=-1;return u.type!==0&&(f=a.indexOf(u.doc.key),a=a.delete(u.doc.key)),u.type!==1&&(a=a.add(u.doc),p=a.indexOf(u.doc.key)),{type:hg(u.type),doc:h,oldIndex:f,newIndex:p}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function hg(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return G()}}class fg extends ag{constructor(t){super(),this.firestore=t}convertBytes(t){return new rn(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Ft(this.firestore,null,e)}}function dg(n){n=Gr(n,cn);const t=Gr(n.firestore,qi),e=fc(t),r=new fg(t);return rg(n._query),qp(e,n._query).then(s=>new cg(t,r,n,s))}function mg(n,t){const e=Gr(n.firestore,qi),r=Hp(n),s=lg(n.converter,t);return pg(e,[Yp(pc(n.firestore),"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,Zt.exists(!1))]).then(()=>r)}function pg(n,t){return function(r,s){const o=new de;return r.asyncQueue.enqueueAndForget(async()=>Cp(await jp(r),s,o)),o.promise}(fc(n),t)}(function(t,e=!0){(function(s){on=s})(Mf),Or(new On("firestore",(r,{instanceIdentifier:s,options:o})=>{const a=r.getProvider("app").getImmediate(),u=new qi(new Qf(r.getProvider("auth-internal")),new Jf(a,r.getProvider("app-check-internal")),function(f,p){if(!Object.prototype.hasOwnProperty.apply(f.options,["projectId"]))throw new j(S.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new xn(f.options.projectId,p)}(a,s),a);return o=Object.assign({useFetchStreams:e},o),u._setSettings(o),u},"PUBLIC").setMultipleInstances(!0)),We(fa,da,t),We(fa,da,"esm2017")})();var gg="firebase",_g="11.5.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */We(gg,_g,"app");const yg={apiKey:"AIzaSyDNZCXCOGwTjyYXCzDLKGEr7dzj7XKvFNk",authDomain:"drents-elftal.firebaseapp.com",projectId:"drents-elftal",storageBucket:"drents-elftal.firebasestorage.app",messagingSenderId:"542166909378",appId:"1:542166909378:web:1c3cd5336f6168067c965b",measurementId:"G-1F8PEJ34WQ"},Eg=ql(yg),wc=Gp(Eg);async function vg(n){const t=hc(wc,"teams"),e=ig(t,og("email","==",n));return!(await dg(e)).empty}async function Tg(n,t,e){try{if(await vg(t))throw new Error("Je hebt al gestemd met dit e-mailadres.");const s={players:n,email:t,allowNewsletter:e,submittedAt:new Date};return(await mg(hc(wc,"teams"),s)).id}catch(r){throw console.error("Error submitting team:",r),r}}function cl(n){let t,e,r,s,o,a,u,h,f,p,E,T,A,P,M,D,L,O,N,B,q,H,_,g,m=n[2]&&hl(n);function v(y,it){return y[1]?Ig:wg}let w=v(n),I=w(n);return{c(){t=x("div"),e=x("div"),r=x("div"),r.innerHTML='<h3 id="email-form-title" class="svelte-txf4uf">Verstuur je stem</h3>',s=Q(),o=x("form"),m&&m.c(),a=Q(),u=x("div"),h=x("label"),h.textContent="E-mailadres:",f=Q(),p=x("input"),E=Q(),T=x("div"),A=x("label"),P=x("input"),M=Q(),D=x("span"),D.textContent="Ik wil mail ontvangen van RTV Drenthe over Onze Club. Als je dit aanvinkt meld je je alleen aan voor nieuws rond Onze Club",L=Q(),O=x("div"),N=x("button"),B=ht("Annuleren"),q=Q(),H=x("button"),I.c(),V(r,"class","modal-header svelte-txf4uf"),V(h,"for","email"),V(h,"class","svelte-txf4uf"),V(p,"type","email"),V(p,"id","email"),p.required=!0,V(p,"placeholder","Vul je e-mailadres in"),p.disabled=n[1],V(p,"class","svelte-txf4uf"),V(u,"class","form-group svelte-txf4uf"),V(P,"type","checkbox"),P.disabled=n[1],V(P,"class","svelte-txf4uf"),V(A,"class","checkbox-label svelte-txf4uf"),V(T,"class","form-group checkbox-group svelte-txf4uf"),V(N,"type","button"),V(N,"class","cancel-button svelte-txf4uf"),N.disabled=n[1],V(H,"type","submit"),V(H,"class","save-button svelte-txf4uf"),H.disabled=n[1],V(O,"class","modal-footer svelte-txf4uf"),V(o,"class","modal-content svelte-txf4uf"),V(e,"class","modal svelte-txf4uf"),V(e,"role","dialog"),V(e,"aria-labelledby","email-form-title"),V(e,"aria-modal","true"),V(t,"class","modal-backdrop svelte-txf4uf"),V(t,"role","presentation")},m(y,it){nt(y,t,it),k(t,e),k(e,r),k(e,s),k(e,o),m&&m.m(o,null),k(o,a),k(o,u),k(u,h),k(u,f),k(u,p),ae(p,n[3]),k(o,E),k(o,T),k(T,A),k(A,P),P.checked=n[4],k(A,M),k(A,D),k(o,L),k(o,O),k(O,N),k(N,B),k(O,q),k(O,H),I.m(H,null),_||(g=[lt(p,"input",n[7]),lt(P,"change",n[8]),lt(N,"click",n[5]),lt(o,"submit",kl(n[6]))],_=!0)},p(y,it){y[2]?m?m.p(y,it):(m=hl(y),m.c(),m.m(o,a)):m&&(m.d(1),m=null),it&2&&(p.disabled=y[1]),it&8&&p.value!==y[3]&&ae(p,y[3]),it&2&&(P.disabled=y[1]),it&16&&(P.checked=y[4]),it&2&&(N.disabled=y[1]),w!==(w=v(y))&&(I.d(1),I=w(y),I&&(I.c(),I.m(H,null))),it&2&&(H.disabled=y[1])},d(y){y&&et(t),m&&m.d(),I.d(),_=!1,xt(g)}}}function hl(n){let t,e;return{c(){t=x("div"),e=ht(n[2]),V(t,"class","error-message svelte-txf4uf")},m(r,s){nt(r,t,s),k(t,e)},p(r,s){s&4&&Nt(e,r[2])},d(r){r&&et(t)}}}function wg(n){let t;return{c(){t=ht("Versturen")},m(e,r){nt(e,t,r)},d(e){e&&et(t)}}}function Ig(n){let t;return{c(){t=ht("Versturen...")},m(e,r){nt(e,t,r)},d(e){e&&et(t)}}}function Ag(n){let t,e=n[0]&&cl(n);return{c(){e&&e.c(),t=mi()},m(r,s){e&&e.m(r,s),nt(r,t,s)},p(r,[s]){r[0]?e?e.p(r,s):(e=cl(r),e.c(),e.m(t.parentNode,t)):e&&(e.d(1),e=null)},i:zt,o:zt,d(r){r&&et(t),e&&e.d(r)}}}function bg(n,t,e){let{isOpen:r=!1}=t,{isSubmitting:s=!1}=t,{submitError:o=null}=t,a="",u=!1;const h=gi();function f(){s||h("close")}function p(){s||h("submit",{email:a,consent:u})}function E(P){P.key==="Escape"&&r&&!s&&f()}pi(()=>(document.addEventListener("keydown",E),()=>{document.removeEventListener("keydown",E)}));function T(){a=this.value,e(3,a)}function A(){u=this.checked,e(4,u)}return n.$$set=P=>{"isOpen"in P&&e(0,r=P.isOpen),"isSubmitting"in P&&e(1,s=P.isSubmitting),"submitError"in P&&e(2,o=P.submitError)},[r,s,o,a,u,f,p,T,A]}class Rg extends Gn{constructor(t){super(),Hn(this,t,bg,Ag,qn,{isOpen:0,isSubmitting:1,submitError:2})}}function fl(n){let t,e,r,s,o=n[6]?"Edit":"Add",a,u,h,f,p,E,T,A,P,M,D,L,O,N,B,q,H,_,g,m,v,w,I,y,it,$,Vt=n[6]?"Save":"Add",Qt,Xt,Me;return{c(){t=x("div"),e=x("div"),r=x("div"),s=x("h3"),a=ht(o),u=ht(" Player - "),h=ht(n[3]),f=ht(" #"),p=ht(n[4]),E=Q(),T=x("form"),A=x("div"),P=x("label"),P.textContent="First Name:",M=Q(),D=x("input"),L=Q(),O=x("div"),N=x("label"),N.textContent="Surname:",B=Q(),q=x("input"),H=Q(),_=x("div"),g=x("label"),g.textContent="Club:",m=Q(),v=x("input"),w=Q(),I=x("div"),y=x("button"),y.textContent="Cancel",it=Q(),$=x("button"),Qt=ht(Vt),V(s,"id","modal-title"),V(s,"class","svelte-jja17o"),V(r,"class","modal-header svelte-jja17o"),V(P,"for","firstName"),V(P,"class","svelte-jja17o"),V(D,"type","text"),V(D,"id","firstName"),D.required=!0,V(D,"placeholder","Enter first name"),V(D,"class","svelte-jja17o"),V(A,"class","form-group svelte-jja17o"),V(N,"for","surname"),V(N,"class","svelte-jja17o"),V(q,"type","text"),V(q,"id","surname"),q.required=!0,V(q,"placeholder","Enter surname"),V(q,"class","svelte-jja17o"),V(O,"class","form-group svelte-jja17o"),V(g,"for","playerClub"),V(g,"class","svelte-jja17o"),V(v,"type","text"),V(v,"id","playerClub"),v.required=!0,V(v,"placeholder","Enter club name"),V(v,"class","svelte-jja17o"),V(_,"class","form-group svelte-jja17o"),V(y,"type","button"),V(y,"class","cancel-button svelte-jja17o"),V($,"type","submit"),V($,"class","save-button svelte-jja17o"),V(I,"class","modal-footer svelte-jja17o"),V(T,"class","modal-content svelte-jja17o"),V(e,"class","modal svelte-jja17o"),V(e,"role","dialog"),V(e,"aria-labelledby","modal-title"),V(e,"aria-modal","true"),V(t,"class","modal-backdrop svelte-jja17o"),V(t,"role","presentation")},m(yt,Ut){nt(yt,t,Ut),k(t,e),k(e,r),k(r,s),k(s,a),k(s,u),k(s,h),k(s,f),k(s,p),k(e,E),k(e,T),k(T,A),k(A,P),k(A,M),k(A,D),ae(D,n[0]),k(T,L),k(T,O),k(O,N),k(O,B),k(O,q),ae(q,n[1]),k(T,H),k(T,_),k(_,g),k(_,m),k(_,v),ae(v,n[2]),k(T,w),k(T,I),k(I,y),k(I,it),k(I,$),k($,Qt),Xt||(Me=[lt(D,"input",n[9]),lt(q,"input",n[10]),lt(v,"input",n[11]),lt(y,"click",n[8]),lt(T,"submit",kl(n[7]))],Xt=!0)},p(yt,Ut){Ut&64&&o!==(o=yt[6]?"Edit":"Add")&&Nt(a,o),Ut&8&&Nt(h,yt[3]),Ut&16&&Nt(p,yt[4]),Ut&1&&D.value!==yt[0]&&ae(D,yt[0]),Ut&2&&q.value!==yt[1]&&ae(q,yt[1]),Ut&4&&v.value!==yt[2]&&ae(v,yt[2]),Ut&64&&Vt!==(Vt=yt[6]?"Save":"Add")&&Nt(Qt,Vt)},d(yt){yt&&et(t),Xt=!1,xt(Me)}}}function Pg(n){let t,e=n[5]&&fl(n);return{c(){e&&e.c(),t=mi()},m(r,s){e&&e.m(r,s),nt(r,t,s)},p(r,[s]){r[5]?e?e.p(r,s):(e=fl(r),e.c(),e.m(t.parentNode,t)):e&&(e.d(1),e=null)},i:zt,o:zt,d(r){r&&et(t),e&&e.d(r)}}}function Cg(n,t,e){let{position:r}=t,{number:s}=t,{firstName:o=""}=t,{surname:a=""}=t,{club:u=""}=t,{isOpen:h=!1}=t,{isEdit:f=!1}=t;const p=gi();function E(){p("save",{firstName:o,surname:a,club:u}),p("close")}function T(){p("close")}function A(L){L.key==="Escape"&&h&&T()}pi(()=>(document.addEventListener("keydown",A),()=>{document.removeEventListener("keydown",A)}));function P(){o=this.value,e(0,o),e(5,h),e(6,f)}function M(){a=this.value,e(1,a),e(5,h),e(6,f)}function D(){u=this.value,e(2,u),e(5,h),e(6,f)}return n.$$set=L=>{"position"in L&&e(3,r=L.position),"number"in L&&e(4,s=L.number),"firstName"in L&&e(0,o=L.firstName),"surname"in L&&e(1,a=L.surname),"club"in L&&e(2,u=L.club),"isOpen"in L&&e(5,h=L.isOpen),"isEdit"in L&&e(6,f=L.isEdit)},n.$$.update=()=>{n.$$.dirty&96&&h&&!f&&(e(0,o=""),e(1,a=""),e(2,u=""))},[o,a,u,r,s,h,f,E,T,P,M,D]}class Sg extends Gn{constructor(t){super(),Hn(this,t,Cg,Pg,qn,{position:3,number:4,firstName:0,surname:1,club:2,isOpen:5,isEdit:6})}}function dl(n,t,e){const r=n.slice();return r[21]=t[e],r[23]=e,r}function ml(n,t,e){const r=n.slice();return r[21]=t[e],r[23]=e,r}function pl(n,t,e){const r=n.slice();return r[21]=t[e],r[23]=e,r}function gl(n){let t,e=Te(n[0][1])+"",r,s,o,a=n[0][1].club+"",u;return{c(){t=x("span"),r=ht(e),s=Q(),o=x("span"),u=ht(a),V(t,"class","player-name svelte-p0e7uy"),V(o,"class","player-club svelte-p0e7uy")},m(h,f){nt(h,t,f),k(t,r),nt(h,s,f),nt(h,o,f),k(o,u)},p(h,f){f&1&&e!==(e=Te(h[0][1])+"")&&Nt(r,e),f&1&&a!==(a=h[0][1].club+"")&&Nt(u,a)},d(h){h&&(et(t),et(s),et(o))}}}function _l(n){let t,e=Te(n[0][n[23]===0?3:n[23]===1?4:2])+"",r,s,o,a=n[0][n[23]===0?3:n[23]===1?4:2].club+"",u;return{c(){t=x("span"),r=ht(e),s=Q(),o=x("span"),u=ht(a),V(t,"class","player-name svelte-p0e7uy"),V(o,"class","player-club svelte-p0e7uy")},m(h,f){nt(h,t,f),k(t,r),nt(h,s,f),nt(h,o,f),k(o,u)},p(h,f){f&1&&e!==(e=Te(h[0][h[23]===0?3:h[23]===1?4:2])+"")&&Nt(r,e),f&1&&a!==(a=h[0][h[23]===0?3:h[23]===1?4:2].club+"")&&Nt(u,a)},d(h){h&&(et(t),et(s),et(o))}}}function yl(n){let t,e,r,s,o,a,u=n[0][n[23]===0?3:n[23]===1?4:2]&&_l(n);function h(){return n[12](n[23])}function f(...p){return n[13](n[23],...p)}return{c(){t=x("button"),e=x("span"),e.textContent=`${n[23]===0?3:n[23]===1?4:2}`,r=Q(),u&&u.c(),s=Q(),V(e,"class","number svelte-p0e7uy"),V(t,"type","button"),V(t,"class","player-position defender svelte-p0e7uy"),V(t,"style","bottom: "+n[21].bottom+"; "+(n[21].left?"left: "+n[21].left:"right: "+n[21].right)),V(t,"aria-label","Select defender position "+(n[23]+1))},m(p,E){nt(p,t,E),k(t,e),k(t,r),u&&u.m(t,null),k(t,s),o||(a=[lt(t,"click",h),lt(t,"keydown",f)],o=!0)},p(p,E){n=p,n[0][n[23]===0?3:n[23]===1?4:2]?u?u.p(n,E):(u=_l(n),u.c(),u.m(t,s)):u&&(u.d(1),u=null)},d(p){p&&et(t),u&&u.d(),o=!1,xt(a)}}}function El(n){let t,e=Te(n[0][n[23]===0?6:n[23]===1?5:n[23]===2?10:8])+"",r,s,o,a=n[0][n[23]===0?6:n[23]===1?5:n[23]===2?10:8].club+"",u;return{c(){t=x("span"),r=ht(e),s=Q(),o=x("span"),u=ht(a),V(t,"class","player-name svelte-p0e7uy"),V(o,"class","player-club svelte-p0e7uy")},m(h,f){nt(h,t,f),k(t,r),nt(h,s,f),nt(h,o,f),k(o,u)},p(h,f){f&1&&e!==(e=Te(h[0][h[23]===0?6:h[23]===1?5:h[23]===2?10:8])+"")&&Nt(r,e),f&1&&a!==(a=h[0][h[23]===0?6:h[23]===1?5:h[23]===2?10:8].club+"")&&Nt(u,a)},d(h){h&&(et(t),et(s),et(o))}}}function vl(n){let t,e,r,s,o,a,u=n[0][n[23]===0?6:n[23]===1?5:n[23]===2?10:8]&&El(n);function h(){return n[14](n[23])}function f(...p){return n[15](n[23],...p)}return{c(){t=x("button"),e=x("span"),e.textContent=`${n[23]===0?6:n[23]===1?5:n[23]===2?10:8}`,r=Q(),u&&u.c(),s=Q(),V(e,"class","number svelte-p0e7uy"),V(t,"type","button"),V(t,"class","player-position midfielder svelte-p0e7uy"),V(t,"style","bottom: "+n[21].bottom+"; "+(n[21].left?"left: "+n[21].left:"right: "+n[21].right)),V(t,"aria-label","Select midfielder position "+(n[23]+1))},m(p,E){nt(p,t,E),k(t,e),k(t,r),u&&u.m(t,null),k(t,s),o||(a=[lt(t,"click",h),lt(t,"keydown",f)],o=!0)},p(p,E){n=p,n[0][n[23]===0?6:n[23]===1?5:n[23]===2?10:8]?u?u.p(n,E):(u=El(n),u.c(),u.m(t,s)):u&&(u.d(1),u=null)},d(p){p&&et(t),u&&u.d(),o=!1,xt(a)}}}function Tl(n){let t,e=Te(n[0][n[23]===0?11:n[23]===1?9:7])+"",r,s,o,a=n[0][n[23]===0?11:n[23]===1?9:7].club+"",u;return{c(){t=x("span"),r=ht(e),s=Q(),o=x("span"),u=ht(a),V(t,"class","player-name svelte-p0e7uy"),V(o,"class","player-club svelte-p0e7uy")},m(h,f){nt(h,t,f),k(t,r),nt(h,s,f),nt(h,o,f),k(o,u)},p(h,f){f&1&&e!==(e=Te(h[0][h[23]===0?11:h[23]===1?9:7])+"")&&Nt(r,e),f&1&&a!==(a=h[0][h[23]===0?11:h[23]===1?9:7].club+"")&&Nt(u,a)},d(h){h&&(et(t),et(s),et(o))}}}function wl(n){let t,e,r,s,o,a,u=n[0][n[23]===0?11:n[23]===1?9:7]&&Tl(n);function h(){return n[16](n[23])}function f(...p){return n[17](n[23],...p)}return{c(){t=x("button"),e=x("span"),e.textContent=`${n[23]===0?11:n[23]===1?9:7}`,r=Q(),u&&u.c(),s=Q(),V(e,"class","number svelte-p0e7uy"),V(t,"type","button"),V(t,"class","player-position forward svelte-p0e7uy"),V(t,"style","bottom: "+n[21].bottom+"; "+(n[21].left?"left: "+n[21].left:"right: "+n[21].right)),V(t,"aria-label","Select forward position "+(n[23]+1))},m(p,E){nt(p,t,E),k(t,e),k(t,r),u&&u.m(t,null),k(t,s),o||(a=[lt(t,"click",h),lt(t,"keydown",f)],o=!0)},p(p,E){n=p,n[0][n[23]===0?11:n[23]===1?9:7]?u?u.p(n,E):(u=Tl(n),u.c(),u.m(t,s)):u&&(u.d(1),u=null)},d(p){p&&et(t),u&&u.d(),o=!1,xt(a)}}}function Vg(n){var H,_,g;let t,e,r,s,o,a,u,h,f,p,E,T,A,P,M=n[0][1]&&gl(n),D=Be(n[5].defenders),L=[];for(let m=0;m<D.length;m+=1)L[m]=yl(pl(n,D,m));let O=Be(n[5].midfielders),N=[];for(let m=0;m<O.length;m+=1)N[m]=vl(ml(n,O,m));let B=Be(n[5].forwards),q=[];for(let m=0;m<B.length;m+=1)q[m]=wl(dl(n,B,m));return E=new Sg({props:{isOpen:n[1],position:n[2]||"",number:n[3]||0,firstName:((H=n[4])==null?void 0:H.firstName)||"",surname:((_=n[4])==null?void 0:_.surname)||"",club:((g=n[4])==null?void 0:g.club)||"",isEdit:!!n[4]}}),E.$on("save",n[7]),E.$on("close",n[18]),{c(){t=x("div"),e=x("div"),r=x("div"),s=x("button"),o=x("span"),o.textContent="1",a=Q(),M&&M.c(),u=Q();for(let m=0;m<L.length;m+=1)L[m].c();h=Q();for(let m=0;m<N.length;m+=1)N[m].c();f=Q();for(let m=0;m<q.length;m+=1)q[m].c();p=Q(),Wr(E.$$.fragment),V(o,"class","number svelte-p0e7uy"),V(s,"type","button"),V(s,"class","player-position goalkeeper svelte-p0e7uy"),zs(s,"bottom",n[5].goalkeeper.bottom),zs(s,"left",n[5].goalkeeper.left),V(s,"aria-label","Select goalkeeper position"),V(r,"class","player-positions svelte-p0e7uy"),V(e,"class","pitch-container svelte-p0e7uy"),V(t,"class","football-pitch svelte-p0e7uy")},m(m,v){nt(m,t,v),k(t,e),k(e,r),k(r,s),k(s,o),k(s,a),M&&M.m(s,null),k(r,u);for(let w=0;w<L.length;w+=1)L[w]&&L[w].m(r,null);k(r,h);for(let w=0;w<N.length;w+=1)N[w]&&N[w].m(r,null);k(r,f);for(let w=0;w<q.length;w+=1)q[w]&&q[w].m(r,null);nt(m,p,v),zn(E,m,v),T=!0,A||(P=[lt(s,"click",n[10]),lt(s,"keydown",n[11])],A=!0)},p(m,[v]){var I,y,it;if(m[0][1]?M?M.p(m,v):(M=gl(m),M.c(),M.m(s,null)):M&&(M.d(1),M=null),v&97){D=Be(m[5].defenders);let $;for($=0;$<D.length;$+=1){const Vt=pl(m,D,$);L[$]?L[$].p(Vt,v):(L[$]=yl(Vt),L[$].c(),L[$].m(r,h))}for(;$<L.length;$+=1)L[$].d(1);L.length=D.length}if(v&97){O=Be(m[5].midfielders);let $;for($=0;$<O.length;$+=1){const Vt=ml(m,O,$);N[$]?N[$].p(Vt,v):(N[$]=vl(Vt),N[$].c(),N[$].m(r,f))}for(;$<N.length;$+=1)N[$].d(1);N.length=O.length}if(v&97){B=Be(m[5].forwards);let $;for($=0;$<B.length;$+=1){const Vt=dl(m,B,$);q[$]?q[$].p(Vt,v):(q[$]=wl(Vt),q[$].c(),q[$].m(r,null))}for(;$<q.length;$+=1)q[$].d(1);q.length=B.length}const w={};v&2&&(w.isOpen=m[1]),v&4&&(w.position=m[2]||""),v&8&&(w.number=m[3]||0),v&16&&(w.firstName=((I=m[4])==null?void 0:I.firstName)||""),v&16&&(w.surname=((y=m[4])==null?void 0:y.surname)||""),v&16&&(w.club=((it=m[4])==null?void 0:it.club)||""),v&16&&(w.isEdit=!!m[4]),E.$set(w)},i(m){T||(Bt(E.$$.fragment,m),T=!0)},o(m){le(E.$$.fragment,m),T=!1},d(m){m&&(et(t),et(p)),M&&M.d(),Ns(L,m),Ns(N,m),Ns(q,m),$n(E,m),A=!1,xt(P)}}}function Te(n){return window.matchMedia("(max-width: 768px)").matches?n.surname:`${n.firstName} ${n.surname}`}function Dg(n,t,e){const r=gi();let{initialPlayers:s={}}=t,o=s,a=!1,u=null,h=null,f=null;const p={goalkeeper:{bottom:"5%",left:"50%"},defenders:[{bottom:"25%",left:"17%"},{bottom:"25%",left:"50%"},{bottom:"25%",left:"83%"}],midfielders:[{bottom:"45%",left:"12.5%"},{bottom:"45%",left:"37.5%"},{bottom:"45%",left:"62.5%"},{bottom:"45%",left:"87.5%"}],forwards:[{bottom:"70%",left:"17%"},{bottom:"70%",left:"50%"},{bottom:"70%",left:"83%"}]};function E(_,g){e(2,u=_),e(3,h=g),e(4,f=o[g]||null),e(1,a=!0)}function T(_){if(h!==null){e(0,o[h]={firstName:_.detail.firstName,surname:_.detail.surname,club:_.detail.club},o),e(0,o),e(8,s),e(1,a=!1),e(2,u=null),e(3,h=null),e(4,f=null);const g=Object.keys(o).length;r("playersUpdate",{filledPositions:g,players:o})}}function A(){e(0,o={}),e(1,a=!1),e(2,u=null),e(3,h=null),e(4,f=null),r("playersUpdate",{filledPositions:0,players:o})}const P=()=>E("goalkeeper",1),M=_=>_.key==="Enter"&&E("goalkeeper",1),D=_=>E("defender",_===0?3:_===1?4:2),L=(_,g)=>g.key==="Enter"&&E("defender",_===0?3:_===1?4:2),O=_=>E("midfielder",_===0?6:_===1?5:_===2?10:8),N=(_,g)=>g.key==="Enter"&&E("midfielder",_===0?6:_===1?5:_===2?10:8),B=_=>E("forward",_===0?11:_===1?9:7),q=(_,g)=>g.key==="Enter"&&E("forward",_===0?11:_===1?9:7),H=()=>{e(1,a=!1),e(4,f=null)};return n.$$set=_=>{"initialPlayers"in _&&e(8,s=_.initialPlayers)},n.$$.update=()=>{if(n.$$.dirty&257&&s&&Object.keys(s).length>0){e(0,o=s);const _=Object.keys(o).length;r("playersUpdate",{filledPositions:_,players:o})}},[o,a,u,h,f,p,E,T,s,A,P,M,D,L,O,N,B,q,H]}class kg extends Gn{constructor(t){super(),Hn(this,t,Dg,Vg,qn,{initialPlayers:8,resetPlayers:9})}get resetPlayers(){return this.$$.ctx[9]}}function Il(n){let t,e,r,s,o,a,u,h,f,p,E,T,A,P,M,D,L=n[2]&&Al(n);return{c(){t=x("div"),e=x("h3"),e.textContent="Deel je elftal",r=Q(),s=x("div"),o=x("button"),o.textContent="Download afbeelding",a=Q(),L&&L.c(),u=Q(),h=x("button"),h.textContent="Deel op WhatsApp",f=Q(),p=x("button"),p.textContent="Deel op Facebook",E=Q(),T=x("button"),T.textContent="Deel op Instagram",A=Q(),P=x("canvas"),V(e,"class","svelte-zs3t9j"),V(o,"class","download-button svelte-zs3t9j"),V(h,"class","whatsapp-button svelte-zs3t9j"),V(p,"class","facebook-button svelte-zs3t9j"),V(T,"class","instagram-button svelte-zs3t9j"),V(s,"class","share-buttons svelte-zs3t9j"),zs(P,"display","none"),V(t,"class","share-modal svelte-zs3t9j")},m(O,N){nt(O,t,N),k(t,e),k(t,r),k(t,s),k(s,o),k(s,a),L&&L.m(s,null),k(s,u),k(s,h),k(s,f),k(s,p),k(s,E),k(s,T),k(t,A),k(t,P),n[7](P),M||(D=[lt(o,"click",n[3]),lt(h,"click",Og),lt(p,"click",Mg),lt(T,"click",n[4])],M=!0)},p(O,N){O[2]?L?L.p(O,N):(L=Al(O),L.c(),L.m(s,u)):L&&(L.d(1),L=null)},d(O){O&&et(t),L&&L.d(),n[7](null),M=!1,xt(D)}}}function Al(n){let t,e,r;return{c(){t=x("button"),t.textContent="Delen",V(t,"class","share-button svelte-zs3t9j")},m(s,o){nt(s,t,o),e||(r=lt(t,"click",n[5]),e=!0)},p:zt,d(s){s&&et(t),e=!1,r()}}}function Ng(n){let t,e=n[0]&&Il(n);return{c(){e&&e.c(),t=mi()},m(r,s){e&&e.m(r,s),nt(r,t,s)},p(r,[s]){r[0]?e?e.p(r,s):(e=Il(r),e.c(),e.m(t.parentNode,t)):e&&(e.d(1),e=null)},i:zt,o:zt,d(r){r&&et(t),e&&e.d(r)}}}async function Og(){const n="Maak ook jouw Drents Elftal!",t=encodeURIComponent(window.location.href);window.open(`https://wa.me/?text=${encodeURIComponent(n+" "+t)}`,"_blank")}async function Mg(){const n=encodeURIComponent(window.location.href);window.open(`https://www.facebook.com/sharer/sharer.php?u=${n}`,"_blank")}function Lg(n,t,e){let{players:r}=t,{isOpen:s=!1}=t,o,a=!1;pi(()=>{e(2,a=!!navigator.share)});async function u(){if(o)try{const T=await h(),A=document.createElement("a");A.download="mijn-drents-elftal.png",A.href=T,document.body.appendChild(A),A.click(),document.body.removeChild(A)}catch(T){console.error("Error downloading image:",T)}}async function h(){const T=o,A=T.getContext("2d");if(!A)throw new Error("Could not get canvas context");T.width=1200,T.height=630,A.fillStyle="#2E7D32",A.fillRect(0,0,T.width,T.height),A.strokeStyle="rgba(255, 255, 255, 0.5)",A.lineWidth=2,A.strokeRect(50,50,T.width-100,T.height-100),A.beginPath(),A.moveTo(T.width/2,50),A.lineTo(T.width/2,T.height-50),A.stroke(),A.beginPath(),A.arc(T.width/2,T.height/2,50,0,Math.PI*2),A.stroke(),A.fillStyle="white",A.font="bold 48px Arial",A.textAlign="center",A.fillText("Mijn Drents Elftal",T.width/2,40);const P={1:{x:T.width/2,y:T.height-100},2:{x:T.width*.17,y:T.height-200},3:{x:T.width*.5,y:T.height-200},4:{x:T.width*.83,y:T.height-200},5:{x:T.width*.125,y:T.height-350},6:{x:T.width*.375,y:T.height-350},8:{x:T.width*.625,y:T.height-350},10:{x:T.width*.875,y:T.height-350},7:{x:T.width*.17,y:T.height-500},9:{x:T.width*.5,y:T.height-500},11:{x:T.width*.83,y:T.height-500}},M=new Image;return M.src="/jersey-drenthe.svg",await new Promise(D=>{M.onload=D}),Object.entries(r).forEach(([D,L])=>{const O=P[parseInt(D)];if(!O)return;const N=60;A.drawImage(M,O.x-N/2,O.y-N/2,N,N),A.fillStyle="white",A.font="bold 24px Arial",A.textAlign="center",A.fillText(D,O.x,O.y+5),A.font="16px Arial",A.fillText(`${L.firstName} ${L.surname}`,O.x,O.y+N),A.font="14px Arial",A.fillStyle="rgba(255, 255, 255, 0.8)",A.fillText(L.club,O.x,O.y+N+20)}),A.font="bold 24px Arial",A.fillStyle="white",A.textAlign="right",A.fillText("RTV Drenthe",T.width-60,T.height-30),T.toDataURL("image/png")}async function f(){await u(),alert("Je kunt de afbeelding nu delen op Instagram!")}async function p(){if(a)try{const T=await(await fetch(await h())).blob(),A=new File([T],"mijn-drents-elftal.png",{type:"image/png"});await navigator.share({title:"Mijn Drents Elftal",text:"Maak ook jouw Drents Elftal!",url:window.location.href,files:[A]})}catch(T){console.error("Error sharing:",T)}}function E(T){Vr[T?"unshift":"push"](()=>{o=T,e(1,o)})}return n.$$set=T=>{"players"in T&&e(6,r=T.players),"isOpen"in T&&e(0,s=T.isOpen)},[s,o,a,u,f,p,r,E]}class Fg extends Gn{constructor(t){super(),Hn(this,t,Lg,Ng,qn,{players:6,isOpen:0})}}function bl(n){let t,e,r;return{c(){t=x("button"),t.textContent="Stem indienen",V(t,"class","submit-button svelte-15jddfq")},m(s,o){nt(s,t,o),e||(r=lt(t,"click",n[12]),e=!0)},p:zt,d(s){s&&et(t),e=!1,r()}}}function Rl(n){let t,e;return t=new Rg({props:{isOpen:n[1],isSubmitting:n[5],submitError:n[4]}}),t.$on("close",n[13]),t.$on("submit",n[9]),{c(){Wr(t.$$.fragment)},m(r,s){zn(t,r,s),e=!0},p(r,s){const o={};s&2&&(o.isOpen=r[1]),s&32&&(o.isSubmitting=r[5]),s&16&&(o.submitError=r[4]),t.$set(o)},i(r){e||(Bt(t.$$.fragment,r),e=!0)},o(r){le(t.$$.fragment,r),e=!1},d(r){$n(t,r)}}}function Pl(n){let t,e;return t=new Fg({props:{players:n[0],isOpen:n[2]}}),{c(){Wr(t.$$.fragment)},m(r,s){zn(t,r,s),e=!0},p(r,s){const o={};s&1&&(o.players=r[0]),s&4&&(o.isOpen=r[2]),t.$set(o)},i(r){e||(Bt(t.$$.fragment,r),e=!0)},o(r){le(t.$$.fragment,r),e=!1},d(r){$n(t,r)}}}function Cl(n){let t,e;return{c(){t=x("div"),e=ht(n[3]),V(t,"class","success-message svelte-15jddfq")},m(r,s){nt(r,t,s),k(t,e)},p(r,s){s&8&&Nt(e,r[3])},d(r){r&&et(t)}}}function Sl(n){let t,e;return{c(){t=x("div"),e=ht(n[4]),V(t,"class","error-message svelte-15jddfq")},m(r,s){nt(r,t,s),k(t,e)},p(r,s){s&16&&Nt(e,r[4])},d(r){r&&et(t)}}}function xg(n){let t,e,r,s,o,a,u,h,f,p,E,T,A,P,M,D,L={initialPlayers:n[0]};h=new kg({props:L}),n[11](h),h.$on("playersUpdate",n[8]);let O=!n[1]&&!n[2]&&n[6]&&bl(n),N=n[1]&&Rl(n),B=n[2]&&Pl(n),q=n[3]&&Cl(n),H=n[4]&&Sl(n);return{c(){t=x("div"),e=x("header"),e.innerHTML='<h1 class="svelte-15jddfq">Drents Elftal</h1> <p>Maak je eigen Drents Elftal</p>',r=Q(),s=x("main"),o=x("div"),a=x("button"),a.textContent="Vul met test data",u=Q(),Wr(h.$$.fragment),f=Q(),O&&O.c(),p=Q(),N&&N.c(),E=Q(),B&&B.c(),T=Q(),q&&q.c(),A=Q(),H&&H.c(),V(e,"class","svelte-15jddfq"),V(a,"class","test-data-button svelte-15jddfq"),V(o,"class","controls svelte-15jddfq"),V(t,"class","container svelte-15jddfq")},m(_,g){nt(_,t,g),k(t,e),k(t,r),k(t,s),k(s,o),k(o,a),k(s,u),zn(h,s,null),k(s,f),O&&O.m(s,null),k(s,p),N&&N.m(s,null),k(s,E),B&&B.m(s,null),k(s,T),q&&q.m(s,null),k(s,A),H&&H.m(s,null),P=!0,M||(D=lt(a,"click",n[10]),M=!0)},p(_,[g]){const m={};g&1&&(m.initialPlayers=_[0]),h.$set(m),!_[1]&&!_[2]&&_[6]?O?O.p(_,g):(O=bl(_),O.c(),O.m(s,p)):O&&(O.d(1),O=null),_[1]?N?(N.p(_,g),g&2&&Bt(N,1)):(N=Rl(_),N.c(),Bt(N,1),N.m(s,E)):N&&(Zo(),le(N,1,1,()=>{N=null}),ta()),_[2]?B?(B.p(_,g),g&4&&Bt(B,1)):(B=Pl(_),B.c(),Bt(B,1),B.m(s,T)):B&&(Zo(),le(B,1,1,()=>{B=null}),ta()),_[3]?q?q.p(_,g):(q=Cl(_),q.c(),q.m(s,A)):q&&(q.d(1),q=null),_[4]?H?H.p(_,g):(H=Sl(_),H.c(),H.m(s,null)):H&&(H.d(1),H=null)},i(_){P||(Bt(h.$$.fragment,_),Bt(N),Bt(B),P=!0)},o(_){le(h.$$.fragment,_),le(N),le(B),P=!1},d(_){_&&et(t),n[11](null),$n(h),O&&O.d(),N&&N.d(),B&&B.d(),q&&q.d(),H&&H.d(),M=!1,D()}}}function Ug(n,t,e){let r={},s=!1,o=!1,a="",u="",h=!1,f=!1;function p(O){const{filledPositions:N,players:B}=O.detail;e(0,r=B),e(6,f=N===11)}function E(O){const{email:N,allowEmails:B}=O.detail;T(N,B)}async function T(O,N){e(5,h=!0);try{await Tg(r,O,N),e(3,a="Bedankt voor je stem!"),e(1,s=!1),e(2,o=!0),P&&P.resetPlayers()}catch(B){e(4,u="Er is iets misgegaan. Probeer het later opnieuw."),console.error("Error submitting team:",B)}finally{e(5,h=!1)}}function A(){e(0,r={1:{firstName:"Sergio",surname:"Padt",club:"FC Groningen"},2:{firstName:"Deyovaisio",surname:"Zeefuik",club:"Heracles Almelo"},3:{firstName:"Mike",surname:"Te Wierik",club:"FC Groningen"},4:{firstName:"Marco",surname:"Rente",club:"Heracles Almelo"},5:{firstName:"Thom",surname:"Haye",club:"SC Heerenveen"},6:{firstName:"Django",surname:"Warmerdam",club:"FC Groningen"},8:{firstName:"Arjen",surname:"Robben",club:"FC Groningen"},10:{firstName:"Jens",surname:"Toornstra",club:"Feyenoord"},7:{firstName:"Cody",surname:"Gakpo",club:"PSV"},9:{firstName:"Wout",surname:"Weghorst",club:"Wolfsburg"},11:{firstName:"Steven",surname:"Bergwijn",club:"Ajax"}}),e(6,f=!0)}let P;function M(O){Vr[O?"unshift":"push"](()=>{P=O,e(7,P)})}return[r,s,o,a,u,h,f,P,p,E,A,M,()=>e(1,s=!0),()=>e(1,s=!1)]}class jg extends Gn{constructor(t){super(),Hn(this,t,Ug,xg,qn,{})}}new jg({target:document.getElementById("app")});
