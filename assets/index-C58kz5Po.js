var nh=Object.defineProperty;var rh=(n,t,e)=>t in n?nh(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var ks=(n,t,e)=>rh(n,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();function zt(){}function Vl(n){return n()}function Yo(){return Object.create(null)}function xt(n){n.forEach(Vl)}function Dl(n){return typeof n=="function"}function qn(n,t){return n!=n?t==t:n!==t||n&&typeof n=="object"||typeof n=="function"}function sh(n){return Object.keys(n).length===0}function M(n,t){n.appendChild(t)}function nt(n,t,e){n.insertBefore(t,e||null)}function et(n){n.parentNode&&n.parentNode.removeChild(n)}function Ns(n,t){for(let e=0;e<n.length;e+=1)n[e]&&n[e].d(t)}function U(n){return document.createElement(n)}function ht(n){return document.createTextNode(n)}function G(){return ht(" ")}function mi(){return ht("")}function lt(n,t,e,r){return n.addEventListener(t,e,r),()=>n.removeEventListener(t,e,r)}function kl(n){return function(t){return t.preventDefault(),n.call(this,t)}}function N(n,t,e){e==null?n.removeAttribute(t):n.getAttribute(t)!==e&&n.setAttribute(t,e)}function ih(n){return Array.from(n.childNodes)}function Nt(n,t){t=""+t,n.data!==t&&(n.data=t)}function ae(n,t){n.value=t??""}function zs(n,t,e,r){e==null?n.style.removeProperty(t):n.style.setProperty(t,e,"")}function oh(n,t,{bubbles:e=!1,cancelable:r=!1}={}){return new CustomEvent(n,{detail:t,bubbles:e,cancelable:r})}let Nn;function Sn(n){Nn=n}function Nl(){if(!Nn)throw new Error("Function called outside component initialization");return Nn}function pi(n){Nl().$$.on_mount.push(n)}function gi(){const n=Nl();return(t,e,{cancelable:r=!1}={})=>{const s=n.$$.callbacks[t];if(s){const o=oh(t,e,{cancelable:r});return s.slice().forEach(a=>{a.call(n,o)}),!o.defaultPrevented}return!0}}const qe=[],Vr=[];let Ge=[];const Jo=[],ah=Promise.resolve();let $s=!1;function lh(){$s||($s=!0,ah.then(Ol))}function Hs(n){Ge.push(n)}const Os=new Set;let Be=0;function Ol(){if(Be!==0)return;const n=Nn;do{try{for(;Be<qe.length;){const t=qe[Be];Be++,Sn(t),uh(t.$$)}}catch(t){throw qe.length=0,Be=0,t}for(Sn(null),qe.length=0,Be=0;Vr.length;)Vr.pop()();for(let t=0;t<Ge.length;t+=1){const e=Ge[t];Os.has(e)||(Os.add(e),e())}Ge.length=0}while(qe.length);for(;Jo.length;)Jo.pop()();$s=!1,Os.clear(),Sn(n)}function uh(n){if(n.fragment!==null){n.update(),xt(n.before_update);const t=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,t),n.after_update.forEach(Hs)}}function ch(n){const t=[],e=[];Ge.forEach(r=>n.indexOf(r)===-1?t.push(r):e.push(r)),e.forEach(r=>r()),Ge=t}const Ir=new Set;let Pe;function Zo(){Pe={r:0,c:[],p:Pe}}function ta(){Pe.r||xt(Pe.c),Pe=Pe.p}function jt(n,t){n&&n.i&&(Ir.delete(n),n.i(t))}function le(n,t,e,r){if(n&&n.o){if(Ir.has(n))return;Ir.add(n),Pe.c.push(()=>{Ir.delete(n),r&&(e&&n.d(1),r())}),n.o(t)}else r&&r()}function je(n){return(n==null?void 0:n.length)!==void 0?n:Array.from(n)}function Wr(n){n&&n.c()}function zn(n,t,e){const{fragment:r,after_update:s}=n.$$;r&&r.m(t,e),Hs(()=>{const o=n.$$.on_mount.map(Vl).filter(Dl);n.$$.on_destroy?n.$$.on_destroy.push(...o):xt(o),n.$$.on_mount=[]}),s.forEach(Hs)}function $n(n,t){const e=n.$$;e.fragment!==null&&(ch(e.after_update),xt(e.on_destroy),e.fragment&&e.fragment.d(t),e.on_destroy=e.fragment=null,e.ctx=[])}function hh(n,t){n.$$.dirty[0]===-1&&(qe.push(n),lh(),n.$$.dirty.fill(0)),n.$$.dirty[t/31|0]|=1<<t%31}function Hn(n,t,e,r,s,o,a=null,u=[-1]){const h=Nn;Sn(n);const f=n.$$={fragment:null,ctx:[],props:o,update:zt,not_equal:s,bound:Yo(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(h?h.$$.context:[])),callbacks:Yo(),dirty:u,skip_bound:!1,root:t.target||h.$$.root};a&&a(f.root);let m=!1;if(f.ctx=e?e(n,t.props||{},(y,T,...I)=>{const P=I.length?I[0]:T;return f.ctx&&s(f.ctx[y],f.ctx[y]=P)&&(!f.skip_bound&&f.bound[y]&&f.bound[y](P),m&&hh(n,y)),T}):[],f.update(),m=!0,xt(f.before_update),f.fragment=r?r(f.ctx):!1,t.target){if(t.hydrate){const y=ih(t.target);f.fragment&&f.fragment.l(y),y.forEach(et)}else f.fragment&&f.fragment.c();t.intro&&jt(n.$$.fragment),zn(n,t.target,t.anchor),Ol()}Sn(h)}class Kn{constructor(){ks(this,"$$");ks(this,"$$set")}$destroy(){$n(this,1),this.$destroy=zt}$on(t,e){if(!Dl(e))return zt;const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(e),()=>{const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}$set(t){this.$$set&&!sh(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const fh="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(fh);const dh=()=>{};var ea={};/**
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
 */const Ml=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?t[e++]=s:s<2048?(t[e++]=s>>6|192,t[e++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=s>>18|240,t[e++]=s>>12&63|128,t[e++]=s>>6&63|128,t[e++]=s&63|128):(t[e++]=s>>12|224,t[e++]=s>>6&63|128,t[e++]=s&63|128)}return t},mh=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const s=n[e++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const o=n[e++];t[r++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=n[e++],a=n[e++],u=n[e++],h=((s&7)<<18|(o&63)<<12|(a&63)<<6|u&63)-65536;t[r++]=String.fromCharCode(55296+(h>>10)),t[r++]=String.fromCharCode(56320+(h&1023))}else{const o=n[e++],a=n[e++];t[r++]=String.fromCharCode((s&15)<<12|(o&63)<<6|a&63)}}return t.join("")},Ll={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const o=n[s],a=s+1<n.length,u=a?n[s+1]:0,h=s+2<n.length,f=h?n[s+2]:0,m=o>>2,y=(o&3)<<4|u>>4;let T=(u&15)<<2|f>>6,I=f&63;h||(I=64,a||(T=64)),r.push(e[m],e[y],e[T],e[I])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(Ml(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):mh(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const o=e[n.charAt(s++)],u=s<n.length?e[n.charAt(s)]:0;++s;const f=s<n.length?e[n.charAt(s)]:64;++s;const y=s<n.length?e[n.charAt(s)]:64;if(++s,o==null||u==null||f==null||y==null)throw new ph;const T=o<<2|u>>4;if(r.push(T),f!==64){const I=u<<4&240|f>>2;if(r.push(I),y!==64){const P=f<<6&192|y;r.push(P)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class ph extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const gh=function(n){const t=Ml(n);return Ll.encodeByteArray(t,!0)},Dr=function(n){return gh(n).replace(/\./g,"")},_h=function(n){try{return Ll.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function Rh(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ph(){var n;const t=(n=_i())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Sh(){return!Ph()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Ch(){try{return typeof indexedDB=="object"}catch{return!1}}function Vh(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{e=!1},s.onerror=()=>{var o;t(((o=s.error)===null||o===void 0?void 0:o.message)||"")}}catch(e){t(e)}})}/**
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
 */var Z;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Z||(Z={}));const xh={debug:Z.DEBUG,verbose:Z.VERBOSE,info:Z.INFO,warn:Z.WARN,error:Z.ERROR,silent:Z.SILENT},Uh=Z.INFO,Bh={[Z.DEBUG]:"log",[Z.VERBOSE]:"log",[Z.INFO]:"info",[Z.WARN]:"warn",[Z.ERROR]:"error"},jh=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),s=Bh[t];if(s)console[s](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Ul{constructor(t){this.name=t,this._logLevel=Uh,this._logHandler=jh,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Z))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?xh[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Z.DEBUG,...t),this._logHandler(this,Z.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Z.VERBOSE,...t),this._logHandler(this,Z.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Z.INFO,...t),this._logHandler(this,Z.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Z.WARN,...t),this._logHandler(this,Z.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Z.ERROR,...t),this._logHandler(this,Z.ERROR,...t)}}const qh=(n,t)=>t.some(e=>n instanceof e);let ra,sa;function zh(){return ra||(ra=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function $h(){return sa||(sa=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Bl=new WeakMap,Ks=new WeakMap,jl=new WeakMap,Ms=new WeakMap,yi=new WeakMap;function Hh(n){const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("success",o),n.removeEventListener("error",a)},o=()=>{e(ce(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",o),n.addEventListener("error",a)});return t.then(e=>{e instanceof IDBCursor&&Bl.set(e,n)}).catch(()=>{}),yi.set(t,n),t}function Kh(n){if(Ks.has(n))return;const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",a),n.removeEventListener("abort",a)},o=()=>{e(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",o),n.addEventListener("error",a),n.addEventListener("abort",a)});Ks.set(n,t)}let Gs={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return Ks.get(n);if(t==="objectStoreNames")return n.objectStoreNames||jl.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return ce(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function Gh(n){Gs=n(Gs)}function Wh(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call(Ls(this),t,...e);return jl.set(r,t.sort?t.sort():[t]),ce(r)}:$h().includes(n)?function(...t){return n.apply(Ls(this),t),ce(Bl.get(this))}:function(...t){return ce(n.apply(Ls(this),t))}}function Qh(n){return typeof n=="function"?Wh(n):(n instanceof IDBTransaction&&Kh(n),qh(n,zh())?new Proxy(n,Gs):n)}function ce(n){if(n instanceof IDBRequest)return Hh(n);if(Ms.has(n))return Ms.get(n);const t=Qh(n);return t!==n&&(Ms.set(n,t),yi.set(t,n)),t}const Ls=n=>yi.get(n);function Xh(n,t,{blocked:e,upgrade:r,blocking:s,terminated:o}={}){const a=indexedDB.open(n,t),u=ce(a);return r&&a.addEventListener("upgradeneeded",h=>{r(ce(a.result),h.oldVersion,h.newVersion,ce(a.transaction),h)}),e&&a.addEventListener("blocked",h=>e(h.oldVersion,h.newVersion,h)),u.then(h=>{o&&h.addEventListener("close",()=>o()),s&&h.addEventListener("versionchange",f=>s(f.oldVersion,f.newVersion,f))}).catch(()=>{}),u}const Yh=["get","getKey","getAll","getAllKeys","count"],Jh=["put","add","delete","clear"],Fs=new Map;function ia(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(Fs.get(t))return Fs.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,s=Jh.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Yh.includes(e)))return;const o=async function(a,...u){const h=this.transaction(a,s?"readwrite":"readonly");let f=h.store;return r&&(f=f.index(u.shift())),(await Promise.all([f[e](...u),s&&h.done]))[0]};return Fs.set(t,o),o}Gh(n=>({...n,get:(t,e,r)=>ia(t,e)||n.get(t,e,r),has:(t,e)=>!!ia(t,e)||n.has(t,e)}));/**
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
 */const te=new Ul("@firebase/app"),ef="@firebase/app-compat",nf="@firebase/analytics-compat",rf="@firebase/analytics",sf="@firebase/app-check-compat",of="@firebase/app-check",af="@firebase/auth",lf="@firebase/auth-compat",uf="@firebase/database",cf="@firebase/data-connect",hf="@firebase/database-compat",ff="@firebase/functions",df="@firebase/functions-compat",mf="@firebase/installations",pf="@firebase/installations-compat",gf="@firebase/messaging",_f="@firebase/messaging-compat",yf="@firebase/performance",Ef="@firebase/performance-compat",vf="@firebase/remote-config",Tf="@firebase/remote-config-compat",wf="@firebase/storage",If="@firebase/storage-compat",Af="@firebase/firestore",bf="@firebase/vertexai",Rf="@firebase/firestore-compat",Pf="firebase",Sf="11.5.0";/**
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
 */const Qs="[DEFAULT]",Cf={[Ws]:"fire-core",[ef]:"fire-core-compat",[rf]:"fire-analytics",[nf]:"fire-analytics-compat",[of]:"fire-app-check",[sf]:"fire-app-check-compat",[af]:"fire-auth",[lf]:"fire-auth-compat",[uf]:"fire-rtdb",[cf]:"fire-data-connect",[hf]:"fire-rtdb-compat",[ff]:"fire-fn",[df]:"fire-fn-compat",[mf]:"fire-iid",[pf]:"fire-iid-compat",[gf]:"fire-fcm",[_f]:"fire-fcm-compat",[yf]:"fire-perf",[Ef]:"fire-perf-compat",[vf]:"fire-rc",[Tf]:"fire-rc-compat",[wf]:"fire-gcs",[If]:"fire-gcs-compat",[Af]:"fire-fst",[Rf]:"fire-fst-compat",[bf]:"fire-vertex","fire-js":"fire-js",[Pf]:"fire-js-all"};/**
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
 */const Mf=Sf;function ql(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Qs,automaticDataCollectionEnabled:!1},t),s=r.name;if(typeof s!="string"||!s)throw he.create("bad-app-name",{appName:String(s)});if(e||(e=Fl()),!e)throw he.create("no-options");const o=Nr.get(s);if(o){if(kr(e,o.options)&&kr(r,o.config))return o;throw he.create("duplicate-app",{appName:s})}const a=new Fh(s);for(const h of Xs.values())a.addComponent(h);const u=new Of(e,r,a);return Nr.set(s,u),u}function Lf(n=Qs){const t=Nr.get(n);if(!t&&n===Qs&&Fl())return ql();if(!t)throw he.create("no-app",{appName:n});return t}function We(n,t,e){var r;let s=(r=Cf[n])!==null&&r!==void 0?r:n;e&&(s+=`-${e}`);const o=s.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const u=[`Unable to register library "${s}" with version "${t}":`];o&&u.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&u.push("and"),a&&u.push(`version name "${t}" contains illegal characters (whitespace or "/")`),te.warn(u.join(" "));return}Or(new On(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
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
 */const Bf=1024,jf=30;class qf{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new $f(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,e;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=ua();if(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:s}),this._heartbeatsCache.heartbeats.length>jf){const a=Hf(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){te.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=ua(),{heartbeatsToSend:r,unsentEntries:s}=zf(this._heartbeatsCache.heartbeats),o=Dr(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return te.warn(e),""}}}function ua(){return new Date().toISOString().substring(0,10)}function zf(n,t=Bf){const e=[];let r=n.slice();for(const s of n){const o=e.find(a=>a.agent===s.agent);if(o){if(o.dates.push(s.date),ca(e)>t){o.dates.pop();break}}else if(e.push({agent:s.agent,dates:[s.date]}),ca(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class $f{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ch()?Vh().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await Uf(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return la(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return la(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function ca(n){return Dr(JSON.stringify({version:2,heartbeats:n})).length}function Hf(n){if(n.length===0)return-1;let t=0,e=n[0].date;for(let r=1;r<n.length;r++)n[r].date<e&&(e=n[r].date,t=r);return t}/**
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
 */function Kf(n){Or(new On("platform-logger",t=>new Zh(t),"PRIVATE")),Or(new On("heartbeat",t=>new qf(t),"PRIVATE")),We(Ws,oa,n),We(Ws,oa,"esm2017"),We("fire-js","")}Kf("");var ha=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var fe,Hl;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(E,g){function p(){}p.prototype=g.prototype,E.D=g.prototype,E.prototype=new p,E.prototype.constructor=E,E.C=function(v,w,A){for(var _=Array(arguments.length-2),it=2;it<arguments.length;it++)_[it-2]=arguments[it];return g.prototype[w].apply(v,_)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(r,e),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(E,g,p){p||(p=0);var v=Array(16);if(typeof g=="string")for(var w=0;16>w;++w)v[w]=g.charCodeAt(p++)|g.charCodeAt(p++)<<8|g.charCodeAt(p++)<<16|g.charCodeAt(p++)<<24;else for(w=0;16>w;++w)v[w]=g[p++]|g[p++]<<8|g[p++]<<16|g[p++]<<24;g=E.g[0],p=E.g[1],w=E.g[2];var A=E.g[3],_=g+(A^p&(w^A))+v[0]+3614090360&4294967295;g=p+(_<<7&4294967295|_>>>25),_=A+(w^g&(p^w))+v[1]+3905402710&4294967295,A=g+(_<<12&4294967295|_>>>20),_=w+(p^A&(g^p))+v[2]+606105819&4294967295,w=A+(_<<17&4294967295|_>>>15),_=p+(g^w&(A^g))+v[3]+3250441966&4294967295,p=w+(_<<22&4294967295|_>>>10),_=g+(A^p&(w^A))+v[4]+4118548399&4294967295,g=p+(_<<7&4294967295|_>>>25),_=A+(w^g&(p^w))+v[5]+1200080426&4294967295,A=g+(_<<12&4294967295|_>>>20),_=w+(p^A&(g^p))+v[6]+2821735955&4294967295,w=A+(_<<17&4294967295|_>>>15),_=p+(g^w&(A^g))+v[7]+4249261313&4294967295,p=w+(_<<22&4294967295|_>>>10),_=g+(A^p&(w^A))+v[8]+1770035416&4294967295,g=p+(_<<7&4294967295|_>>>25),_=A+(w^g&(p^w))+v[9]+2336552879&4294967295,A=g+(_<<12&4294967295|_>>>20),_=w+(p^A&(g^p))+v[10]+4294925233&4294967295,w=A+(_<<17&4294967295|_>>>15),_=p+(g^w&(A^g))+v[11]+2304563134&4294967295,p=w+(_<<22&4294967295|_>>>10),_=g+(A^p&(w^A))+v[12]+1804603682&4294967295,g=p+(_<<7&4294967295|_>>>25),_=A+(w^g&(p^w))+v[13]+4254626195&4294967295,A=g+(_<<12&4294967295|_>>>20),_=w+(p^A&(g^p))+v[14]+2792965006&4294967295,w=A+(_<<17&4294967295|_>>>15),_=p+(g^w&(A^g))+v[15]+1236535329&4294967295,p=w+(_<<22&4294967295|_>>>10),_=g+(w^A&(p^w))+v[1]+4129170786&4294967295,g=p+(_<<5&4294967295|_>>>27),_=A+(p^w&(g^p))+v[6]+3225465664&4294967295,A=g+(_<<9&4294967295|_>>>23),_=w+(g^p&(A^g))+v[11]+643717713&4294967295,w=A+(_<<14&4294967295|_>>>18),_=p+(A^g&(w^A))+v[0]+3921069994&4294967295,p=w+(_<<20&4294967295|_>>>12),_=g+(w^A&(p^w))+v[5]+3593408605&4294967295,g=p+(_<<5&4294967295|_>>>27),_=A+(p^w&(g^p))+v[10]+38016083&4294967295,A=g+(_<<9&4294967295|_>>>23),_=w+(g^p&(A^g))+v[15]+3634488961&4294967295,w=A+(_<<14&4294967295|_>>>18),_=p+(A^g&(w^A))+v[4]+3889429448&4294967295,p=w+(_<<20&4294967295|_>>>12),_=g+(w^A&(p^w))+v[9]+568446438&4294967295,g=p+(_<<5&4294967295|_>>>27),_=A+(p^w&(g^p))+v[14]+3275163606&4294967295,A=g+(_<<9&4294967295|_>>>23),_=w+(g^p&(A^g))+v[3]+4107603335&4294967295,w=A+(_<<14&4294967295|_>>>18),_=p+(A^g&(w^A))+v[8]+1163531501&4294967295,p=w+(_<<20&4294967295|_>>>12),_=g+(w^A&(p^w))+v[13]+2850285829&4294967295,g=p+(_<<5&4294967295|_>>>27),_=A+(p^w&(g^p))+v[2]+4243563512&4294967295,A=g+(_<<9&4294967295|_>>>23),_=w+(g^p&(A^g))+v[7]+1735328473&4294967295,w=A+(_<<14&4294967295|_>>>18),_=p+(A^g&(w^A))+v[12]+2368359562&4294967295,p=w+(_<<20&4294967295|_>>>12),_=g+(p^w^A)+v[5]+4294588738&4294967295,g=p+(_<<4&4294967295|_>>>28),_=A+(g^p^w)+v[8]+2272392833&4294967295,A=g+(_<<11&4294967295|_>>>21),_=w+(A^g^p)+v[11]+1839030562&4294967295,w=A+(_<<16&4294967295|_>>>16),_=p+(w^A^g)+v[14]+4259657740&4294967295,p=w+(_<<23&4294967295|_>>>9),_=g+(p^w^A)+v[1]+2763975236&4294967295,g=p+(_<<4&4294967295|_>>>28),_=A+(g^p^w)+v[4]+1272893353&4294967295,A=g+(_<<11&4294967295|_>>>21),_=w+(A^g^p)+v[7]+4139469664&4294967295,w=A+(_<<16&4294967295|_>>>16),_=p+(w^A^g)+v[10]+3200236656&4294967295,p=w+(_<<23&4294967295|_>>>9),_=g+(p^w^A)+v[13]+681279174&4294967295,g=p+(_<<4&4294967295|_>>>28),_=A+(g^p^w)+v[0]+3936430074&4294967295,A=g+(_<<11&4294967295|_>>>21),_=w+(A^g^p)+v[3]+3572445317&4294967295,w=A+(_<<16&4294967295|_>>>16),_=p+(w^A^g)+v[6]+76029189&4294967295,p=w+(_<<23&4294967295|_>>>9),_=g+(p^w^A)+v[9]+3654602809&4294967295,g=p+(_<<4&4294967295|_>>>28),_=A+(g^p^w)+v[12]+3873151461&4294967295,A=g+(_<<11&4294967295|_>>>21),_=w+(A^g^p)+v[15]+530742520&4294967295,w=A+(_<<16&4294967295|_>>>16),_=p+(w^A^g)+v[2]+3299628645&4294967295,p=w+(_<<23&4294967295|_>>>9),_=g+(w^(p|~A))+v[0]+4096336452&4294967295,g=p+(_<<6&4294967295|_>>>26),_=A+(p^(g|~w))+v[7]+1126891415&4294967295,A=g+(_<<10&4294967295|_>>>22),_=w+(g^(A|~p))+v[14]+2878612391&4294967295,w=A+(_<<15&4294967295|_>>>17),_=p+(A^(w|~g))+v[5]+4237533241&4294967295,p=w+(_<<21&4294967295|_>>>11),_=g+(w^(p|~A))+v[12]+1700485571&4294967295,g=p+(_<<6&4294967295|_>>>26),_=A+(p^(g|~w))+v[3]+2399980690&4294967295,A=g+(_<<10&4294967295|_>>>22),_=w+(g^(A|~p))+v[10]+4293915773&4294967295,w=A+(_<<15&4294967295|_>>>17),_=p+(A^(w|~g))+v[1]+2240044497&4294967295,p=w+(_<<21&4294967295|_>>>11),_=g+(w^(p|~A))+v[8]+1873313359&4294967295,g=p+(_<<6&4294967295|_>>>26),_=A+(p^(g|~w))+v[15]+4264355552&4294967295,A=g+(_<<10&4294967295|_>>>22),_=w+(g^(A|~p))+v[6]+2734768916&4294967295,w=A+(_<<15&4294967295|_>>>17),_=p+(A^(w|~g))+v[13]+1309151649&4294967295,p=w+(_<<21&4294967295|_>>>11),_=g+(w^(p|~A))+v[4]+4149444226&4294967295,g=p+(_<<6&4294967295|_>>>26),_=A+(p^(g|~w))+v[11]+3174756917&4294967295,A=g+(_<<10&4294967295|_>>>22),_=w+(g^(A|~p))+v[2]+718787259&4294967295,w=A+(_<<15&4294967295|_>>>17),_=p+(A^(w|~g))+v[9]+3951481745&4294967295,E.g[0]=E.g[0]+g&4294967295,E.g[1]=E.g[1]+(w+(_<<21&4294967295|_>>>11))&4294967295,E.g[2]=E.g[2]+w&4294967295,E.g[3]=E.g[3]+A&4294967295}r.prototype.u=function(E,g){g===void 0&&(g=E.length);for(var p=g-this.blockSize,v=this.B,w=this.h,A=0;A<g;){if(w==0)for(;A<=p;)s(this,E,A),A+=this.blockSize;if(typeof E=="string"){for(;A<g;)if(v[w++]=E.charCodeAt(A++),w==this.blockSize){s(this,v),w=0;break}}else for(;A<g;)if(v[w++]=E[A++],w==this.blockSize){s(this,v),w=0;break}}this.h=w,this.o+=g},r.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var g=1;g<E.length-8;++g)E[g]=0;var p=8*this.o;for(g=E.length-8;g<E.length;++g)E[g]=p&255,p/=256;for(this.u(E),E=Array(16),g=p=0;4>g;++g)for(var v=0;32>v;v+=8)E[p++]=this.g[g]>>>v&255;return E};function o(E,g){var p=u;return Object.prototype.hasOwnProperty.call(p,E)?p[E]:p[E]=g(E)}function a(E,g){this.h=g;for(var p=[],v=!0,w=E.length-1;0<=w;w--){var A=E[w]|0;v&&A==g||(p[w]=A,v=!1)}this.g=p}var u={};function h(E){return-128<=E&&128>E?o(E,function(g){return new a([g|0],0>g?-1:0)}):new a([E|0],0>E?-1:0)}function f(E){if(isNaN(E)||!isFinite(E))return y;if(0>E)return S(f(-E));for(var g=[],p=1,v=0;E>=p;v++)g[v]=E/p|0,p*=4294967296;return new a(g,0)}function m(E,g){if(E.length==0)throw Error("number format error: empty string");if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(E.charAt(0)=="-")return S(m(E.substring(1),g));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var p=f(Math.pow(g,8)),v=y,w=0;w<E.length;w+=8){var A=Math.min(8,E.length-w),_=parseInt(E.substring(w,w+A),g);8>A?(A=f(Math.pow(g,A)),v=v.j(A).add(f(_))):(v=v.j(p),v=v.add(f(_)))}return v}var y=h(0),T=h(1),I=h(16777216);n=a.prototype,n.m=function(){if(D(this))return-S(this).m();for(var E=0,g=1,p=0;p<this.g.length;p++){var v=this.i(p);E+=(0<=v?v:4294967296+v)*g,g*=4294967296}return E},n.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(P(this))return"0";if(D(this))return"-"+S(this).toString(E);for(var g=f(Math.pow(E,6)),p=this,v="";;){var w=Q(p,g).g;p=C(p,w.j(g));var A=((0<p.g.length?p.g[0]:p.h)>>>0).toString(E);if(p=w,P(p))return A+v;for(;6>A.length;)A="0"+A;v=A+v}},n.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function P(E){if(E.h!=0)return!1;for(var g=0;g<E.g.length;g++)if(E.g[g]!=0)return!1;return!0}function D(E){return E.h==-1}n.l=function(E){return E=C(this,E),D(E)?-1:P(E)?0:1};function S(E){for(var g=E.g.length,p=[],v=0;v<g;v++)p[v]=~E.g[v];return new a(p,~E.h).add(T)}n.abs=function(){return D(this)?S(this):this},n.add=function(E){for(var g=Math.max(this.g.length,E.g.length),p=[],v=0,w=0;w<=g;w++){var A=v+(this.i(w)&65535)+(E.i(w)&65535),_=(A>>>16)+(this.i(w)>>>16)+(E.i(w)>>>16);v=_>>>16,A&=65535,_&=65535,p[w]=_<<16|A}return new a(p,p[p.length-1]&-2147483648?-1:0)};function C(E,g){return E.add(S(g))}n.j=function(E){if(P(this)||P(E))return y;if(D(this))return D(E)?S(this).j(S(E)):S(S(this).j(E));if(D(E))return S(this.j(S(E)));if(0>this.l(I)&&0>E.l(I))return f(this.m()*E.m());for(var g=this.g.length+E.g.length,p=[],v=0;v<2*g;v++)p[v]=0;for(v=0;v<this.g.length;v++)for(var w=0;w<E.g.length;w++){var A=this.i(v)>>>16,_=this.i(v)&65535,it=E.i(w)>>>16,q=E.i(w)&65535;p[2*v+2*w]+=_*q,O(p,2*v+2*w),p[2*v+2*w+1]+=A*q,O(p,2*v+2*w+1),p[2*v+2*w+1]+=_*it,O(p,2*v+2*w+1),p[2*v+2*w+2]+=A*it,O(p,2*v+2*w+2)}for(v=0;v<g;v++)p[v]=p[2*v+1]<<16|p[2*v];for(v=g;v<2*g;v++)p[v]=0;return new a(p,0)};function O(E,g){for(;(E[g]&65535)!=E[g];)E[g+1]+=E[g]>>>16,E[g]&=65535,g++}function L(E,g){this.g=E,this.h=g}function Q(E,g){if(P(g))throw Error("division by zero");if(P(E))return new L(y,y);if(D(E))return g=Q(S(E),g),new L(S(g.g),S(g.h));if(D(g))return g=Q(E,S(g)),new L(S(g.g),g.h);if(30<E.g.length){if(D(E)||D(g))throw Error("slowDivide_ only works with positive integers.");for(var p=T,v=g;0>=v.l(E);)p=K(p),v=K(v);var w=Y(p,1),A=Y(v,1);for(v=Y(v,2),p=Y(p,2);!P(v);){var _=A.add(v);0>=_.l(E)&&(w=w.add(p),A=_),v=Y(v,1),p=Y(p,1)}return g=C(E,w.j(g)),new L(w,g)}for(w=y;0<=E.l(g);){for(p=Math.max(1,Math.floor(E.m()/g.m())),v=Math.ceil(Math.log(p)/Math.LN2),v=48>=v?1:Math.pow(2,v-48),A=f(p),_=A.j(g);D(_)||0<_.l(E);)p-=v,A=f(p),_=A.j(g);P(A)&&(A=T),w=w.add(A),E=C(E,_)}return new L(w,E)}n.A=function(E){return Q(this,E).h},n.and=function(E){for(var g=Math.max(this.g.length,E.g.length),p=[],v=0;v<g;v++)p[v]=this.i(v)&E.i(v);return new a(p,this.h&E.h)},n.or=function(E){for(var g=Math.max(this.g.length,E.g.length),p=[],v=0;v<g;v++)p[v]=this.i(v)|E.i(v);return new a(p,this.h|E.h)},n.xor=function(E){for(var g=Math.max(this.g.length,E.g.length),p=[],v=0;v<g;v++)p[v]=this.i(v)^E.i(v);return new a(p,this.h^E.h)};function K(E){for(var g=E.g.length+1,p=[],v=0;v<g;v++)p[v]=E.i(v)<<1|E.i(v-1)>>>31;return new a(p,E.h)}function Y(E,g){var p=g>>5;g%=32;for(var v=E.g.length-p,w=[],A=0;A<v;A++)w[A]=0<g?E.i(A+p)>>>g|E.i(A+p+1)<<32-g:E.i(A+p);return new a(w,E.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Hl=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=f,a.fromString=m,fe=a}).apply(typeof ha<"u"?ha:typeof self<"u"?self:typeof window<"u"?window:{});var _r=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Kl,bn,Gl,Ar,Ys,Wl,Ql,Xl;(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(i,l,c){return i==Array.prototype||i==Object.prototype||(i[l]=c.value),i};function e(i){i=[typeof globalThis=="object"&&globalThis,i,typeof window=="object"&&window,typeof self=="object"&&self,typeof _r=="object"&&_r];for(var l=0;l<i.length;++l){var c=i[l];if(c&&c.Math==Math)return c}throw Error("Cannot find global object")}var r=e(this);function s(i,l){if(l)t:{var c=r;i=i.split(".");for(var d=0;d<i.length-1;d++){var b=i[d];if(!(b in c))break t;c=c[b]}i=i[i.length-1],d=c[i],l=l(d),l!=d&&l!=null&&t(c,i,{configurable:!0,writable:!0,value:l})}}function o(i,l){i instanceof String&&(i+="");var c=0,d=!1,b={next:function(){if(!d&&c<i.length){var R=c++;return{value:l(R,i[R]),done:!1}}return d=!0,{done:!0,value:void 0}}};return b[Symbol.iterator]=function(){return b},b}s("Array.prototype.values",function(i){return i||function(){return o(this,function(l,c){return c})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},u=this||self;function h(i){var l=typeof i;return l=l!="object"?l:i?Array.isArray(i)?"array":l:"null",l=="array"||l=="object"&&typeof i.length=="number"}function f(i){var l=typeof i;return l=="object"&&i!=null||l=="function"}function m(i,l,c){return i.call.apply(i.bind,arguments)}function y(i,l,c){if(!i)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var b=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(b,d),i.apply(l,b)}}return function(){return i.apply(l,arguments)}}function T(i,l,c){return T=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?m:y,T.apply(null,arguments)}function I(i,l){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();return d.push.apply(d,arguments),i.apply(this,d)}}function P(i,l){function c(){}c.prototype=l.prototype,i.aa=l.prototype,i.prototype=new c,i.prototype.constructor=i,i.Qb=function(d,b,R){for(var F=Array(arguments.length-2),st=2;st<arguments.length;st++)F[st-2]=arguments[st];return l.prototype[b].apply(d,F)}}function D(i){const l=i.length;if(0<l){const c=Array(l);for(let d=0;d<l;d++)c[d]=i[d];return c}return[]}function S(i,l){for(let c=1;c<arguments.length;c++){const d=arguments[c];if(h(d)){const b=i.length||0,R=d.length||0;i.length=b+R;for(let F=0;F<R;F++)i[b+F]=d[F]}else i.push(d)}}class C{constructor(l,c){this.i=l,this.j=c,this.h=0,this.g=null}get(){let l;return 0<this.h?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function O(i){return/^[\s\xa0]*$/.test(i)}function L(){var i=u.navigator;return i&&(i=i.userAgent)?i:""}function Q(i){return Q[" "](i),i}Q[" "]=function(){};var K=L().indexOf("Gecko")!=-1&&!(L().toLowerCase().indexOf("webkit")!=-1&&L().indexOf("Edge")==-1)&&!(L().indexOf("Trident")!=-1||L().indexOf("MSIE")!=-1)&&L().indexOf("Edge")==-1;function Y(i,l,c){for(const d in i)l.call(c,i[d],d,i)}function E(i,l){for(const c in i)l.call(void 0,i[c],c,i)}function g(i){const l={};for(const c in i)l[c]=i[c];return l}const p="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function v(i,l){let c,d;for(let b=1;b<arguments.length;b++){d=arguments[b];for(c in d)i[c]=d[c];for(let R=0;R<p.length;R++)c=p[R],Object.prototype.hasOwnProperty.call(d,c)&&(i[c]=d[c])}}function w(i){var l=1;i=i.split(":");const c=[];for(;0<l&&i.length;)c.push(i.shift()),l--;return i.length&&c.push(i.join(":")),c}function A(i){u.setTimeout(()=>{throw i},0)}function _(){var i=Me;let l=null;return i.g&&(l=i.g,i.g=i.g.next,i.g||(i.h=null),l.next=null),l}class it{constructor(){this.h=this.g=null}add(l,c){const d=q.get();d.set(l,c),this.h?this.h.next=d:this.g=d,this.h=d}}var q=new C(()=>new Vt,i=>i.reset());class Vt{constructor(){this.next=this.g=this.h=null}set(l,c){this.h=l,this.g=c,this.next=null}reset(){this.next=this.g=this.h=null}}let Qt,Xt=!1,Me=new it,yt=()=>{const i=u.Promise.resolve(void 0);Qt=()=>{i.then(Ut)}};var Ut=()=>{for(var i;i=_();){try{i.h.call(i.g)}catch(c){A(c)}var l=q;l.j(i),100>l.h&&(l.h++,i.next=l.g,l.g=i)}Xt=!1};function re(){this.s=this.s,this.C=this.C}re.prototype.s=!1,re.prototype.ma=function(){this.s||(this.s=!0,this.N())},re.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function It(i,l){this.type=i,this.g=this.target=l,this.defaultPrevented=!1}It.prototype.h=function(){this.defaultPrevented=!0};var Ic=function(){if(!u.addEventListener||!Object.defineProperty)return!1;var i=!1,l=Object.defineProperty({},"passive",{get:function(){i=!0}});try{const c=()=>{};u.addEventListener("test",c,l),u.removeEventListener("test",c,l)}catch{}return i}();function hn(i,l){if(It.call(this,i?i.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,i){var c=this.type=i.type,d=i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:null;if(this.target=i.target||i.srcElement,this.g=l,l=i.relatedTarget){if(K){t:{try{Q(l.nodeName);var b=!0;break t}catch{}b=!1}b||(l=null)}}else c=="mouseover"?l=i.fromElement:c=="mouseout"&&(l=i.toElement);this.relatedTarget=l,d?(this.clientX=d.clientX!==void 0?d.clientX:d.pageX,this.clientY=d.clientY!==void 0?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0),this.button=i.button,this.key=i.key||"",this.ctrlKey=i.ctrlKey,this.altKey=i.altKey,this.shiftKey=i.shiftKey,this.metaKey=i.metaKey,this.pointerId=i.pointerId||0,this.pointerType=typeof i.pointerType=="string"?i.pointerType:Ac[i.pointerType]||"",this.state=i.state,this.i=i,i.defaultPrevented&&hn.aa.h.call(this)}}P(hn,It);var Ac={2:"touch",3:"pen",4:"mouse"};hn.prototype.h=function(){hn.aa.h.call(this);var i=this.i;i.preventDefault?i.preventDefault():i.returnValue=!1};var Jn="closure_listenable_"+(1e6*Math.random()|0),bc=0;function Rc(i,l,c,d,b){this.listener=i,this.proxy=null,this.src=l,this.type=c,this.capture=!!d,this.ha=b,this.key=++bc,this.da=this.fa=!1}function Zn(i){i.da=!0,i.listener=null,i.proxy=null,i.src=null,i.ha=null}function tr(i){this.src=i,this.g={},this.h=0}tr.prototype.add=function(i,l,c,d,b){var R=i.toString();i=this.g[R],i||(i=this.g[R]=[],this.h++);var F=cs(i,l,d,b);return-1<F?(l=i[F],c||(l.fa=!1)):(l=new Rc(l,this.src,R,!!d,b),l.fa=c,i.push(l)),l};function us(i,l){var c=l.type;if(c in i.g){var d=i.g[c],b=Array.prototype.indexOf.call(d,l,void 0),R;(R=0<=b)&&Array.prototype.splice.call(d,b,1),R&&(Zn(l),i.g[c].length==0&&(delete i.g[c],i.h--))}}function cs(i,l,c,d){for(var b=0;b<i.length;++b){var R=i[b];if(!R.da&&R.listener==l&&R.capture==!!c&&R.ha==d)return b}return-1}var hs="closure_lm_"+(1e6*Math.random()|0),fs={};function Yi(i,l,c,d,b){if(Array.isArray(l)){for(var R=0;R<l.length;R++)Yi(i,l[R],c,d,b);return null}return c=to(c),i&&i[Jn]?i.K(l,c,f(d)?!!d.capture:!1,b):Pc(i,l,c,!1,d,b)}function Pc(i,l,c,d,b,R){if(!l)throw Error("Invalid event type");var F=f(b)?!!b.capture:!!b,st=ms(i);if(st||(i[hs]=st=new tr(i)),c=st.add(l,c,d,F,R),c.proxy)return c;if(d=Sc(),c.proxy=d,d.src=i,d.listener=c,i.addEventListener)Ic||(b=F),b===void 0&&(b=!1),i.addEventListener(l.toString(),d,b);else if(i.attachEvent)i.attachEvent(Zi(l.toString()),d);else if(i.addListener&&i.removeListener)i.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");return c}function Sc(){function i(c){return l.call(i.src,i.listener,c)}const l=Cc;return i}function Ji(i,l,c,d,b){if(Array.isArray(l))for(var R=0;R<l.length;R++)Ji(i,l[R],c,d,b);else d=f(d)?!!d.capture:!!d,c=to(c),i&&i[Jn]?(i=i.i,l=String(l).toString(),l in i.g&&(R=i.g[l],c=cs(R,c,d,b),-1<c&&(Zn(R[c]),Array.prototype.splice.call(R,c,1),R.length==0&&(delete i.g[l],i.h--)))):i&&(i=ms(i))&&(l=i.g[l.toString()],i=-1,l&&(i=cs(l,c,d,b)),(c=-1<i?l[i]:null)&&ds(c))}function ds(i){if(typeof i!="number"&&i&&!i.da){var l=i.src;if(l&&l[Jn])us(l.i,i);else{var c=i.type,d=i.proxy;l.removeEventListener?l.removeEventListener(c,d,i.capture):l.detachEvent?l.detachEvent(Zi(c),d):l.addListener&&l.removeListener&&l.removeListener(d),(c=ms(l))?(us(c,i),c.h==0&&(c.src=null,l[hs]=null)):Zn(i)}}}function Zi(i){return i in fs?fs[i]:fs[i]="on"+i}function Cc(i,l){if(i.da)i=!0;else{l=new hn(l,this);var c=i.listener,d=i.ha||i.src;i.fa&&ds(i),i=c.call(d,l)}return i}function ms(i){return i=i[hs],i instanceof tr?i:null}var ps="__closure_events_fn_"+(1e9*Math.random()>>>0);function to(i){return typeof i=="function"?i:(i[ps]||(i[ps]=function(l){return i.handleEvent(l)}),i[ps])}function At(){re.call(this),this.i=new tr(this),this.M=this,this.F=null}P(At,re),At.prototype[Jn]=!0,At.prototype.removeEventListener=function(i,l,c,d){Ji(this,i,l,c,d)};function Dt(i,l){var c,d=i.F;if(d)for(c=[];d;d=d.F)c.push(d);if(i=i.M,d=l.type||l,typeof l=="string")l=new It(l,i);else if(l instanceof It)l.target=l.target||i;else{var b=l;l=new It(d,i),v(l,b)}if(b=!0,c)for(var R=c.length-1;0<=R;R--){var F=l.g=c[R];b=er(F,d,!0,l)&&b}if(F=l.g=i,b=er(F,d,!0,l)&&b,b=er(F,d,!1,l)&&b,c)for(R=0;R<c.length;R++)F=l.g=c[R],b=er(F,d,!1,l)&&b}At.prototype.N=function(){if(At.aa.N.call(this),this.i){var i=this.i,l;for(l in i.g){for(var c=i.g[l],d=0;d<c.length;d++)Zn(c[d]);delete i.g[l],i.h--}}this.F=null},At.prototype.K=function(i,l,c,d){return this.i.add(String(i),l,!1,c,d)},At.prototype.L=function(i,l,c,d){return this.i.add(String(i),l,!0,c,d)};function er(i,l,c,d){if(l=i.i.g[String(l)],!l)return!0;l=l.concat();for(var b=!0,R=0;R<l.length;++R){var F=l[R];if(F&&!F.da&&F.capture==c){var st=F.listener,Et=F.ha||F.src;F.fa&&us(i.i,F),b=st.call(Et,d)!==!1&&b}}return b&&!d.defaultPrevented}function eo(i,l,c){if(typeof i=="function")c&&(i=T(i,c));else if(i&&typeof i.handleEvent=="function")i=T(i.handleEvent,i);else throw Error("Invalid listener argument");return 2147483647<Number(l)?-1:u.setTimeout(i,l||0)}function no(i){i.g=eo(()=>{i.g=null,i.i&&(i.i=!1,no(i))},i.l);const l=i.h;i.h=null,i.m.apply(null,l)}class Vc extends re{constructor(l,c){super(),this.m=l,this.l=c,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:no(this)}N(){super.N(),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function fn(i){re.call(this),this.h=i,this.g={}}P(fn,re);var ro=[];function so(i){Y(i.g,function(l,c){this.g.hasOwnProperty(c)&&ds(l)},i),i.g={}}fn.prototype.N=function(){fn.aa.N.call(this),so(this)},fn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var gs=u.JSON.stringify,Dc=u.JSON.parse,kc=class{stringify(i){return u.JSON.stringify(i,void 0)}parse(i){return u.JSON.parse(i,void 0)}};function _s(){}_s.prototype.h=null;function io(i){return i.h||(i.h=i.i())}function oo(){}var dn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ys(){It.call(this,"d")}P(ys,It);function Es(){It.call(this,"c")}P(Es,It);var we={},ao=null;function nr(){return ao=ao||new At}we.La="serverreachability";function lo(i){It.call(this,we.La,i)}P(lo,It);function mn(i){const l=nr();Dt(l,new lo(l))}we.STAT_EVENT="statevent";function uo(i,l){It.call(this,we.STAT_EVENT,i),this.stat=l}P(uo,It);function kt(i){const l=nr();Dt(l,new uo(l,i))}we.Ma="timingevent";function co(i,l){It.call(this,we.Ma,i),this.size=l}P(co,It);function pn(i,l){if(typeof i!="function")throw Error("Fn must not be null and must be a function");return u.setTimeout(function(){i()},l)}function gn(){this.g=!0}gn.prototype.xa=function(){this.g=!1};function Nc(i,l,c,d,b,R){i.info(function(){if(i.g)if(R)for(var F="",st=R.split("&"),Et=0;Et<st.length;Et++){var tt=st[Et].split("=");if(1<tt.length){var bt=tt[0];tt=tt[1];var Rt=bt.split("_");F=2<=Rt.length&&Rt[1]=="type"?F+(bt+"="+tt+"&"):F+(bt+"=redacted&")}}else F=null;else F=R;return"XMLHTTP REQ ("+d+") [attempt "+b+"]: "+l+`
`+c+`
`+F})}function Oc(i,l,c,d,b,R,F){i.info(function(){return"XMLHTTP RESP ("+d+") [ attempt "+b+"]: "+l+`
`+c+`
`+R+" "+F})}function Le(i,l,c,d){i.info(function(){return"XMLHTTP TEXT ("+l+"): "+Lc(i,c)+(d?" "+d:"")})}function Mc(i,l){i.info(function(){return"TIMEOUT: "+l})}gn.prototype.info=function(){};function Lc(i,l){if(!i.g)return l;if(!l)return null;try{var c=JSON.parse(l);if(c){for(i=0;i<c.length;i++)if(Array.isArray(c[i])){var d=c[i];if(!(2>d.length)){var b=d[1];if(Array.isArray(b)&&!(1>b.length)){var R=b[0];if(R!="noop"&&R!="stop"&&R!="close")for(var F=1;F<b.length;F++)b[F]=""}}}}return gs(c)}catch{return l}}var rr={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ho={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},vs;function sr(){}P(sr,_s),sr.prototype.g=function(){return new XMLHttpRequest},sr.prototype.i=function(){return{}},vs=new sr;function se(i,l,c,d){this.j=i,this.i=l,this.l=c,this.R=d||1,this.U=new fn(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new fo}function fo(){this.i=null,this.g="",this.h=!1}var mo={},Ts={};function ws(i,l,c){i.L=1,i.v=lr(Yt(l)),i.m=c,i.P=!0,po(i,null)}function po(i,l){i.F=Date.now(),ir(i),i.A=Yt(i.v);var c=i.A,d=i.R;Array.isArray(d)||(d=[String(d)]),Co(c.i,"t",d),i.C=0,c=i.j.J,i.h=new fo,i.g=Go(i.j,c?l:null,!i.m),0<i.O&&(i.M=new Vc(T(i.Y,i,i.g),i.O)),l=i.U,c=i.g,d=i.ca;var b="readystatechange";Array.isArray(b)||(b&&(ro[0]=b.toString()),b=ro);for(var R=0;R<b.length;R++){var F=Yi(c,b[R],d||l.handleEvent,!1,l.h||l);if(!F)break;l.g[F.key]=F}l=i.H?g(i.H):{},i.m?(i.u||(i.u="POST"),l["Content-Type"]="application/x-www-form-urlencoded",i.g.ea(i.A,i.u,i.m,l)):(i.u="GET",i.g.ea(i.A,i.u,null,l)),mn(),Nc(i.i,i.u,i.A,i.l,i.R,i.m)}se.prototype.ca=function(i){i=i.target;const l=this.M;l&&Jt(i)==3?l.j():this.Y(i)},se.prototype.Y=function(i){try{if(i==this.g)t:{const Rt=Jt(this.g);var l=this.g.Ba();const Ue=this.g.Z();if(!(3>Rt)&&(Rt!=3||this.g&&(this.h.h||this.g.oa()||Lo(this.g)))){this.J||Rt!=4||l==7||(l==8||0>=Ue?mn(3):mn(2)),Is(this);var c=this.g.Z();this.X=c;e:if(go(this)){var d=Lo(this.g);i="";var b=d.length,R=Jt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ie(this),_n(this);var F="";break e}this.h.i=new u.TextDecoder}for(l=0;l<b;l++)this.h.h=!0,i+=this.h.i.decode(d[l],{stream:!(R&&l==b-1)});d.length=0,this.h.g+=i,this.C=0,F=this.h.g}else F=this.g.oa();if(this.o=c==200,Oc(this.i,this.u,this.A,this.l,this.R,Rt,c),this.o){if(this.T&&!this.K){e:{if(this.g){var st,Et=this.g;if((st=Et.g?Et.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!O(st)){var tt=st;break e}}tt=null}if(c=tt)Le(this.i,this.l,c,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,As(this,c);else{this.o=!1,this.s=3,kt(12),Ie(this),_n(this);break t}}if(this.P){c=!0;let Bt;for(;!this.J&&this.C<F.length;)if(Bt=Fc(this,F),Bt==Ts){Rt==4&&(this.s=4,kt(14),c=!1),Le(this.i,this.l,null,"[Incomplete Response]");break}else if(Bt==mo){this.s=4,kt(15),Le(this.i,this.l,F,"[Invalid Chunk]"),c=!1;break}else Le(this.i,this.l,Bt,null),As(this,Bt);if(go(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Rt!=4||F.length!=0||this.h.h||(this.s=1,kt(16),c=!1),this.o=this.o&&c,!c)Le(this.i,this.l,F,"[Invalid Chunked Response]"),Ie(this),_n(this);else if(0<F.length&&!this.W){this.W=!0;var bt=this.j;bt.g==this&&bt.ba&&!bt.M&&(bt.j.info("Great, no buffering proxy detected. Bytes received: "+F.length),Vs(bt),bt.M=!0,kt(11))}}else Le(this.i,this.l,F,null),As(this,F);Rt==4&&Ie(this),this.o&&!this.J&&(Rt==4?zo(this.j,this):(this.o=!1,ir(this)))}else th(this.g),c==400&&0<F.indexOf("Unknown SID")?(this.s=3,kt(12)):(this.s=0,kt(13)),Ie(this),_n(this)}}}catch{}finally{}};function go(i){return i.g?i.u=="GET"&&i.L!=2&&i.j.Ca:!1}function Fc(i,l){var c=i.C,d=l.indexOf(`
`,c);return d==-1?Ts:(c=Number(l.substring(c,d)),isNaN(c)?mo:(d+=1,d+c>l.length?Ts:(l=l.slice(d,d+c),i.C=d+c,l)))}se.prototype.cancel=function(){this.J=!0,Ie(this)};function ir(i){i.S=Date.now()+i.I,_o(i,i.I)}function _o(i,l){if(i.B!=null)throw Error("WatchDog timer not null");i.B=pn(T(i.ba,i),l)}function Is(i){i.B&&(u.clearTimeout(i.B),i.B=null)}se.prototype.ba=function(){this.B=null;const i=Date.now();0<=i-this.S?(Mc(this.i,this.A),this.L!=2&&(mn(),kt(17)),Ie(this),this.s=2,_n(this)):_o(this,this.S-i)};function _n(i){i.j.G==0||i.J||zo(i.j,i)}function Ie(i){Is(i);var l=i.M;l&&typeof l.ma=="function"&&l.ma(),i.M=null,so(i.U),i.g&&(l=i.g,i.g=null,l.abort(),l.ma())}function As(i,l){try{var c=i.j;if(c.G!=0&&(c.g==i||bs(c.h,i))){if(!i.K&&bs(c.h,i)&&c.G==3){try{var d=c.Da.g.parse(l)}catch{d=null}if(Array.isArray(d)&&d.length==3){var b=d;if(b[0]==0){t:if(!c.u){if(c.g)if(c.g.F+3e3<i.F)mr(c),fr(c);else break t;Cs(c),kt(18)}}else c.za=b[1],0<c.za-c.T&&37500>b[2]&&c.F&&c.v==0&&!c.C&&(c.C=pn(T(c.Za,c),6e3));if(1>=vo(c.h)&&c.ca){try{c.ca()}catch{}c.ca=void 0}}else be(c,11)}else if((i.K||c.g==i)&&mr(c),!O(l))for(b=c.Da.g.parse(l),l=0;l<b.length;l++){let tt=b[l];if(c.T=tt[0],tt=tt[1],c.G==2)if(tt[0]=="c"){c.K=tt[1],c.ia=tt[2];const bt=tt[3];bt!=null&&(c.la=bt,c.j.info("VER="+c.la));const Rt=tt[4];Rt!=null&&(c.Aa=Rt,c.j.info("SVER="+c.Aa));const Ue=tt[5];Ue!=null&&typeof Ue=="number"&&0<Ue&&(d=1.5*Ue,c.L=d,c.j.info("backChannelRequestTimeoutMs_="+d)),d=c;const Bt=i.g;if(Bt){const gr=Bt.g?Bt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(gr){var R=d.h;R.g||gr.indexOf("spdy")==-1&&gr.indexOf("quic")==-1&&gr.indexOf("h2")==-1||(R.j=R.l,R.g=new Set,R.h&&(Rs(R,R.h),R.h=null))}if(d.D){const Ds=Bt.g?Bt.g.getResponseHeader("X-HTTP-Session-Id"):null;Ds&&(d.ya=Ds,ot(d.I,d.D,Ds))}}c.G=3,c.l&&c.l.ua(),c.ba&&(c.R=Date.now()-i.F,c.j.info("Handshake RTT: "+c.R+"ms")),d=c;var F=i;if(d.qa=Ko(d,d.J?d.ia:null,d.W),F.K){To(d.h,F);var st=F,Et=d.L;Et&&(st.I=Et),st.B&&(Is(st),ir(st)),d.g=F}else jo(d);0<c.i.length&&dr(c)}else tt[0]!="stop"&&tt[0]!="close"||be(c,7);else c.G==3&&(tt[0]=="stop"||tt[0]=="close"?tt[0]=="stop"?be(c,7):Ss(c):tt[0]!="noop"&&c.l&&c.l.ta(tt),c.v=0)}}mn(4)}catch{}}var xc=class{constructor(i,l){this.g=i,this.map=l}};function yo(i){this.l=i||10,u.PerformanceNavigationTiming?(i=u.performance.getEntriesByType("navigation"),i=0<i.length&&(i[0].nextHopProtocol=="hq"||i[0].nextHopProtocol=="h2")):i=!!(u.chrome&&u.chrome.loadTimes&&u.chrome.loadTimes()&&u.chrome.loadTimes().wasFetchedViaSpdy),this.j=i?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Eo(i){return i.h?!0:i.g?i.g.size>=i.j:!1}function vo(i){return i.h?1:i.g?i.g.size:0}function bs(i,l){return i.h?i.h==l:i.g?i.g.has(l):!1}function Rs(i,l){i.g?i.g.add(l):i.h=l}function To(i,l){i.h&&i.h==l?i.h=null:i.g&&i.g.has(l)&&i.g.delete(l)}yo.prototype.cancel=function(){if(this.i=wo(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const i of this.g.values())i.cancel();this.g.clear()}};function wo(i){if(i.h!=null)return i.i.concat(i.h.D);if(i.g!=null&&i.g.size!==0){let l=i.i;for(const c of i.g.values())l=l.concat(c.D);return l}return D(i.i)}function Uc(i){if(i.V&&typeof i.V=="function")return i.V();if(typeof Map<"u"&&i instanceof Map||typeof Set<"u"&&i instanceof Set)return Array.from(i.values());if(typeof i=="string")return i.split("");if(h(i)){for(var l=[],c=i.length,d=0;d<c;d++)l.push(i[d]);return l}l=[],c=0;for(d in i)l[c++]=i[d];return l}function Bc(i){if(i.na&&typeof i.na=="function")return i.na();if(!i.V||typeof i.V!="function"){if(typeof Map<"u"&&i instanceof Map)return Array.from(i.keys());if(!(typeof Set<"u"&&i instanceof Set)){if(h(i)||typeof i=="string"){var l=[];i=i.length;for(var c=0;c<i;c++)l.push(c);return l}l=[],c=0;for(const d in i)l[c++]=d;return l}}}function Io(i,l){if(i.forEach&&typeof i.forEach=="function")i.forEach(l,void 0);else if(h(i)||typeof i=="string")Array.prototype.forEach.call(i,l,void 0);else for(var c=Bc(i),d=Uc(i),b=d.length,R=0;R<b;R++)l.call(void 0,d[R],c&&c[R],i)}var Ao=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function jc(i,l){if(i){i=i.split("&");for(var c=0;c<i.length;c++){var d=i[c].indexOf("="),b=null;if(0<=d){var R=i[c].substring(0,d);b=i[c].substring(d+1)}else R=i[c];l(R,b?decodeURIComponent(b.replace(/\+/g," ")):"")}}}function Ae(i){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,i instanceof Ae){this.h=i.h,or(this,i.j),this.o=i.o,this.g=i.g,ar(this,i.s),this.l=i.l;var l=i.i,c=new vn;c.i=l.i,l.g&&(c.g=new Map(l.g),c.h=l.h),bo(this,c),this.m=i.m}else i&&(l=String(i).match(Ao))?(this.h=!1,or(this,l[1]||"",!0),this.o=yn(l[2]||""),this.g=yn(l[3]||"",!0),ar(this,l[4]),this.l=yn(l[5]||"",!0),bo(this,l[6]||"",!0),this.m=yn(l[7]||"")):(this.h=!1,this.i=new vn(null,this.h))}Ae.prototype.toString=function(){var i=[],l=this.j;l&&i.push(En(l,Ro,!0),":");var c=this.g;return(c||l=="file")&&(i.push("//"),(l=this.o)&&i.push(En(l,Ro,!0),"@"),i.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.s,c!=null&&i.push(":",String(c))),(c=this.l)&&(this.g&&c.charAt(0)!="/"&&i.push("/"),i.push(En(c,c.charAt(0)=="/"?$c:zc,!0))),(c=this.i.toString())&&i.push("?",c),(c=this.m)&&i.push("#",En(c,Kc)),i.join("")};function Yt(i){return new Ae(i)}function or(i,l,c){i.j=c?yn(l,!0):l,i.j&&(i.j=i.j.replace(/:$/,""))}function ar(i,l){if(l){if(l=Number(l),isNaN(l)||0>l)throw Error("Bad port number "+l);i.s=l}else i.s=null}function bo(i,l,c){l instanceof vn?(i.i=l,Gc(i.i,i.h)):(c||(l=En(l,Hc)),i.i=new vn(l,i.h))}function ot(i,l,c){i.i.set(l,c)}function lr(i){return ot(i,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),i}function yn(i,l){return i?l?decodeURI(i.replace(/%25/g,"%2525")):decodeURIComponent(i):""}function En(i,l,c){return typeof i=="string"?(i=encodeURI(i).replace(l,qc),c&&(i=i.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i):null}function qc(i){return i=i.charCodeAt(0),"%"+(i>>4&15).toString(16)+(i&15).toString(16)}var Ro=/[#\/\?@]/g,zc=/[#\?:]/g,$c=/[#\?]/g,Hc=/[#\?@]/g,Kc=/#/g;function vn(i,l){this.h=this.g=null,this.i=i||null,this.j=!!l}function ie(i){i.g||(i.g=new Map,i.h=0,i.i&&jc(i.i,function(l,c){i.add(decodeURIComponent(l.replace(/\+/g," ")),c)}))}n=vn.prototype,n.add=function(i,l){ie(this),this.i=null,i=Fe(this,i);var c=this.g.get(i);return c||this.g.set(i,c=[]),c.push(l),this.h+=1,this};function Po(i,l){ie(i),l=Fe(i,l),i.g.has(l)&&(i.i=null,i.h-=i.g.get(l).length,i.g.delete(l))}function So(i,l){return ie(i),l=Fe(i,l),i.g.has(l)}n.forEach=function(i,l){ie(this),this.g.forEach(function(c,d){c.forEach(function(b){i.call(l,b,d,this)},this)},this)},n.na=function(){ie(this);const i=Array.from(this.g.values()),l=Array.from(this.g.keys()),c=[];for(let d=0;d<l.length;d++){const b=i[d];for(let R=0;R<b.length;R++)c.push(l[d])}return c},n.V=function(i){ie(this);let l=[];if(typeof i=="string")So(this,i)&&(l=l.concat(this.g.get(Fe(this,i))));else{i=Array.from(this.g.values());for(let c=0;c<i.length;c++)l=l.concat(i[c])}return l},n.set=function(i,l){return ie(this),this.i=null,i=Fe(this,i),So(this,i)&&(this.h-=this.g.get(i).length),this.g.set(i,[l]),this.h+=1,this},n.get=function(i,l){return i?(i=this.V(i),0<i.length?String(i[0]):l):l};function Co(i,l,c){Po(i,l),0<c.length&&(i.i=null,i.g.set(Fe(i,l),D(c)),i.h+=c.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const i=[],l=Array.from(this.g.keys());for(var c=0;c<l.length;c++){var d=l[c];const R=encodeURIComponent(String(d)),F=this.V(d);for(d=0;d<F.length;d++){var b=R;F[d]!==""&&(b+="="+encodeURIComponent(String(F[d]))),i.push(b)}}return this.i=i.join("&")};function Fe(i,l){return l=String(l),i.j&&(l=l.toLowerCase()),l}function Gc(i,l){l&&!i.j&&(ie(i),i.i=null,i.g.forEach(function(c,d){var b=d.toLowerCase();d!=b&&(Po(this,d),Co(this,b,c))},i)),i.j=l}function Wc(i,l){const c=new gn;if(u.Image){const d=new Image;d.onload=I(oe,c,"TestLoadImage: loaded",!0,l,d),d.onerror=I(oe,c,"TestLoadImage: error",!1,l,d),d.onabort=I(oe,c,"TestLoadImage: abort",!1,l,d),d.ontimeout=I(oe,c,"TestLoadImage: timeout",!1,l,d),u.setTimeout(function(){d.ontimeout&&d.ontimeout()},1e4),d.src=i}else l(!1)}function Qc(i,l){const c=new gn,d=new AbortController,b=setTimeout(()=>{d.abort(),oe(c,"TestPingServer: timeout",!1,l)},1e4);fetch(i,{signal:d.signal}).then(R=>{clearTimeout(b),R.ok?oe(c,"TestPingServer: ok",!0,l):oe(c,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(b),oe(c,"TestPingServer: error",!1,l)})}function oe(i,l,c,d,b){try{b&&(b.onload=null,b.onerror=null,b.onabort=null,b.ontimeout=null),d(c)}catch{}}function Xc(){this.g=new kc}function Yc(i,l,c){const d=c||"";try{Io(i,function(b,R){let F=b;f(b)&&(F=gs(b)),l.push(d+R+"="+encodeURIComponent(F))})}catch(b){throw l.push(d+"type="+encodeURIComponent("_badmap")),b}}function ur(i){this.l=i.Ub||null,this.j=i.eb||!1}P(ur,_s),ur.prototype.g=function(){return new cr(this.l,this.j)},ur.prototype.i=function(i){return function(){return i}}({});function cr(i,l){At.call(this),this.D=i,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}P(cr,At),n=cr.prototype,n.open=function(i,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=i,this.A=l,this.readyState=1,wn(this)},n.send=function(i){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const l={headers:this.u,method:this.B,credentials:this.m,cache:void 0};i&&(l.body=i),(this.D||u).fetch(new Request(this.A,l)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Tn(this)),this.readyState=0},n.Sa=function(i){if(this.g&&(this.l=i,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=i.headers,this.readyState=2,wn(this)),this.g&&(this.readyState=3,wn(this),this.g)))if(this.responseType==="arraybuffer")i.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof u.ReadableStream<"u"&&"body"in i){if(this.j=i.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Vo(this)}else i.text().then(this.Ra.bind(this),this.ga.bind(this))};function Vo(i){i.j.read().then(i.Pa.bind(i)).catch(i.ga.bind(i))}n.Pa=function(i){if(this.g){if(this.o&&i.value)this.response.push(i.value);else if(!this.o){var l=i.value?i.value:new Uint8Array(0);(l=this.v.decode(l,{stream:!i.done}))&&(this.response=this.responseText+=l)}i.done?Tn(this):wn(this),this.readyState==3&&Vo(this)}},n.Ra=function(i){this.g&&(this.response=this.responseText=i,Tn(this))},n.Qa=function(i){this.g&&(this.response=i,Tn(this))},n.ga=function(){this.g&&Tn(this)};function Tn(i){i.readyState=4,i.l=null,i.j=null,i.v=null,wn(i)}n.setRequestHeader=function(i,l){this.u.append(i,l)},n.getResponseHeader=function(i){return this.h&&this.h.get(i.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const i=[],l=this.h.entries();for(var c=l.next();!c.done;)c=c.value,i.push(c[0]+": "+c[1]),c=l.next();return i.join(`\r
`)};function wn(i){i.onreadystatechange&&i.onreadystatechange.call(i)}Object.defineProperty(cr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(i){this.m=i?"include":"same-origin"}});function Do(i){let l="";return Y(i,function(c,d){l+=d,l+=":",l+=c,l+=`\r
`}),l}function Ps(i,l,c){t:{for(d in c){var d=!1;break t}d=!0}d||(c=Do(c),typeof i=="string"?c!=null&&encodeURIComponent(String(c)):ot(i,l,c))}function ct(i){At.call(this),this.headers=new Map,this.o=i||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}P(ct,At);var Jc=/^https?$/i,Zc=["POST","PUT"];n=ct.prototype,n.Ha=function(i){this.J=i},n.ea=function(i,l,c,d){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+i);l=l?l.toUpperCase():"GET",this.D=i,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():vs.g(),this.v=this.o?io(this.o):io(vs),this.g.onreadystatechange=T(this.Ea,this);try{this.B=!0,this.g.open(l,String(i),!0),this.B=!1}catch(R){ko(this,R);return}if(i=c||"",c=new Map(this.headers),d)if(Object.getPrototypeOf(d)===Object.prototype)for(var b in d)c.set(b,d[b]);else if(typeof d.keys=="function"&&typeof d.get=="function")for(const R of d.keys())c.set(R,d.get(R));else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(c.keys()).find(R=>R.toLowerCase()=="content-type"),b=u.FormData&&i instanceof u.FormData,!(0<=Array.prototype.indexOf.call(Zc,l,void 0))||d||b||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[R,F]of c)this.g.setRequestHeader(R,F);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Mo(this),this.u=!0,this.g.send(i),this.u=!1}catch(R){ko(this,R)}};function ko(i,l){i.h=!1,i.g&&(i.j=!0,i.g.abort(),i.j=!1),i.l=l,i.m=5,No(i),hr(i)}function No(i){i.A||(i.A=!0,Dt(i,"complete"),Dt(i,"error"))}n.abort=function(i){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=i||7,Dt(this,"complete"),Dt(this,"abort"),hr(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),hr(this,!0)),ct.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Oo(this):this.bb())},n.bb=function(){Oo(this)};function Oo(i){if(i.h&&typeof a<"u"&&(!i.v[1]||Jt(i)!=4||i.Z()!=2)){if(i.u&&Jt(i)==4)eo(i.Ea,0,i);else if(Dt(i,"readystatechange"),Jt(i)==4){i.h=!1;try{const F=i.Z();t:switch(F){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break t;default:l=!1}var c;if(!(c=l)){var d;if(d=F===0){var b=String(i.D).match(Ao)[1]||null;!b&&u.self&&u.self.location&&(b=u.self.location.protocol.slice(0,-1)),d=!Jc.test(b?b.toLowerCase():"")}c=d}if(c)Dt(i,"complete"),Dt(i,"success");else{i.m=6;try{var R=2<Jt(i)?i.g.statusText:""}catch{R=""}i.l=R+" ["+i.Z()+"]",No(i)}}finally{hr(i)}}}}function hr(i,l){if(i.g){Mo(i);const c=i.g,d=i.v[0]?()=>{}:null;i.g=null,i.v=null,l||Dt(i,"ready");try{c.onreadystatechange=d}catch{}}}function Mo(i){i.I&&(u.clearTimeout(i.I),i.I=null)}n.isActive=function(){return!!this.g};function Jt(i){return i.g?i.g.readyState:0}n.Z=function(){try{return 2<Jt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(i){if(this.g){var l=this.g.responseText;return i&&l.indexOf(i)==0&&(l=l.substring(i.length)),Dc(l)}};function Lo(i){try{if(!i.g)return null;if("response"in i.g)return i.g.response;switch(i.H){case"":case"text":return i.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in i.g)return i.g.mozResponseArrayBuffer}return null}catch{return null}}function th(i){const l={};i=(i.g&&2<=Jt(i)&&i.g.getAllResponseHeaders()||"").split(`\r
`);for(let d=0;d<i.length;d++){if(O(i[d]))continue;var c=w(i[d]);const b=c[0];if(c=c[1],typeof c!="string")continue;c=c.trim();const R=l[b]||[];l[b]=R,R.push(c)}E(l,function(d){return d.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function In(i,l,c){return c&&c.internalChannelParams&&c.internalChannelParams[i]||l}function Fo(i){this.Aa=0,this.i=[],this.j=new gn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=In("failFast",!1,i),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=In("baseRetryDelayMs",5e3,i),this.cb=In("retryDelaySeedMs",1e4,i),this.Wa=In("forwardChannelMaxRetries",2,i),this.wa=In("forwardChannelRequestTimeoutMs",2e4,i),this.pa=i&&i.xmlHttpFactory||void 0,this.Xa=i&&i.Tb||void 0,this.Ca=i&&i.useFetchStreams||!1,this.L=void 0,this.J=i&&i.supportsCrossDomainXhr||!1,this.K="",this.h=new yo(i&&i.concurrentRequestLimit),this.Da=new Xc,this.P=i&&i.fastHandshake||!1,this.O=i&&i.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=i&&i.Rb||!1,i&&i.xa&&this.j.xa(),i&&i.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&i&&i.detectBufferingProxy||!1,this.ja=void 0,i&&i.longPollingTimeout&&0<i.longPollingTimeout&&(this.ja=i.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Fo.prototype,n.la=8,n.G=1,n.connect=function(i,l,c,d){kt(0),this.W=i,this.H=l||{},c&&d!==void 0&&(this.H.OSID=c,this.H.OAID=d),this.F=this.X,this.I=Ko(this,null,this.W),dr(this)};function Ss(i){if(xo(i),i.G==3){var l=i.U++,c=Yt(i.I);if(ot(c,"SID",i.K),ot(c,"RID",l),ot(c,"TYPE","terminate"),An(i,c),l=new se(i,i.j,l),l.L=2,l.v=lr(Yt(c)),c=!1,u.navigator&&u.navigator.sendBeacon)try{c=u.navigator.sendBeacon(l.v.toString(),"")}catch{}!c&&u.Image&&(new Image().src=l.v,c=!0),c||(l.g=Go(l.j,null),l.g.ea(l.v)),l.F=Date.now(),ir(l)}Ho(i)}function fr(i){i.g&&(Vs(i),i.g.cancel(),i.g=null)}function xo(i){fr(i),i.u&&(u.clearTimeout(i.u),i.u=null),mr(i),i.h.cancel(),i.s&&(typeof i.s=="number"&&u.clearTimeout(i.s),i.s=null)}function dr(i){if(!Eo(i.h)&&!i.s){i.s=!0;var l=i.Ga;Qt||yt(),Xt||(Qt(),Xt=!0),Me.add(l,i),i.B=0}}function eh(i,l){return vo(i.h)>=i.h.j-(i.s?1:0)?!1:i.s?(i.i=l.D.concat(i.i),!0):i.G==1||i.G==2||i.B>=(i.Va?0:i.Wa)?!1:(i.s=pn(T(i.Ga,i,l),$o(i,i.B)),i.B++,!0)}n.Ga=function(i){if(this.s)if(this.s=null,this.G==1){if(!i){this.U=Math.floor(1e5*Math.random()),i=this.U++;const b=new se(this,this.j,i);let R=this.o;if(this.S&&(R?(R=g(R),v(R,this.S)):R=this.S),this.m!==null||this.O||(b.H=R,R=null),this.P)t:{for(var l=0,c=0;c<this.i.length;c++){e:{var d=this.i[c];if("__data__"in d.map&&(d=d.map.__data__,typeof d=="string")){d=d.length;break e}d=void 0}if(d===void 0)break;if(l+=d,4096<l){l=c;break t}if(l===4096||c===this.i.length-1){l=c+1;break t}}l=1e3}else l=1e3;l=Bo(this,b,l),c=Yt(this.I),ot(c,"RID",i),ot(c,"CVER",22),this.D&&ot(c,"X-HTTP-Session-Id",this.D),An(this,c),R&&(this.O?l="headers="+encodeURIComponent(String(Do(R)))+"&"+l:this.m&&Ps(c,this.m,R)),Rs(this.h,b),this.Ua&&ot(c,"TYPE","init"),this.P?(ot(c,"$req",l),ot(c,"SID","null"),b.T=!0,ws(b,c,null)):ws(b,c,l),this.G=2}}else this.G==3&&(i?Uo(this,i):this.i.length==0||Eo(this.h)||Uo(this))};function Uo(i,l){var c;l?c=l.l:c=i.U++;const d=Yt(i.I);ot(d,"SID",i.K),ot(d,"RID",c),ot(d,"AID",i.T),An(i,d),i.m&&i.o&&Ps(d,i.m,i.o),c=new se(i,i.j,c,i.B+1),i.m===null&&(c.H=i.o),l&&(i.i=l.D.concat(i.i)),l=Bo(i,c,1e3),c.I=Math.round(.5*i.wa)+Math.round(.5*i.wa*Math.random()),Rs(i.h,c),ws(c,d,l)}function An(i,l){i.H&&Y(i.H,function(c,d){ot(l,d,c)}),i.l&&Io({},function(c,d){ot(l,d,c)})}function Bo(i,l,c){c=Math.min(i.i.length,c);var d=i.l?T(i.l.Na,i.l,i):null;t:{var b=i.i;let R=-1;for(;;){const F=["count="+c];R==-1?0<c?(R=b[0].g,F.push("ofs="+R)):R=0:F.push("ofs="+R);let st=!0;for(let Et=0;Et<c;Et++){let tt=b[Et].g;const bt=b[Et].map;if(tt-=R,0>tt)R=Math.max(0,b[Et].g-100),st=!1;else try{Yc(bt,F,"req"+tt+"_")}catch{d&&d(bt)}}if(st){d=F.join("&");break t}}}return i=i.i.splice(0,c),l.D=i,d}function jo(i){if(!i.g&&!i.u){i.Y=1;var l=i.Fa;Qt||yt(),Xt||(Qt(),Xt=!0),Me.add(l,i),i.v=0}}function Cs(i){return i.g||i.u||3<=i.v?!1:(i.Y++,i.u=pn(T(i.Fa,i),$o(i,i.v)),i.v++,!0)}n.Fa=function(){if(this.u=null,qo(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var i=2*this.R;this.j.info("BP detection timer enabled: "+i),this.A=pn(T(this.ab,this),i)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,kt(10),fr(this),qo(this))};function Vs(i){i.A!=null&&(u.clearTimeout(i.A),i.A=null)}function qo(i){i.g=new se(i,i.j,"rpc",i.Y),i.m===null&&(i.g.H=i.o),i.g.O=0;var l=Yt(i.qa);ot(l,"RID","rpc"),ot(l,"SID",i.K),ot(l,"AID",i.T),ot(l,"CI",i.F?"0":"1"),!i.F&&i.ja&&ot(l,"TO",i.ja),ot(l,"TYPE","xmlhttp"),An(i,l),i.m&&i.o&&Ps(l,i.m,i.o),i.L&&(i.g.I=i.L);var c=i.g;i=i.ia,c.L=1,c.v=lr(Yt(l)),c.m=null,c.P=!0,po(c,i)}n.Za=function(){this.C!=null&&(this.C=null,fr(this),Cs(this),kt(19))};function mr(i){i.C!=null&&(u.clearTimeout(i.C),i.C=null)}function zo(i,l){var c=null;if(i.g==l){mr(i),Vs(i),i.g=null;var d=2}else if(bs(i.h,l))c=l.D,To(i.h,l),d=1;else return;if(i.G!=0){if(l.o)if(d==1){c=l.m?l.m.length:0,l=Date.now()-l.F;var b=i.B;d=nr(),Dt(d,new co(d,c)),dr(i)}else jo(i);else if(b=l.s,b==3||b==0&&0<l.X||!(d==1&&eh(i,l)||d==2&&Cs(i)))switch(c&&0<c.length&&(l=i.h,l.i=l.i.concat(c)),b){case 1:be(i,5);break;case 4:be(i,10);break;case 3:be(i,6);break;default:be(i,2)}}}function $o(i,l){let c=i.Ta+Math.floor(Math.random()*i.cb);return i.isActive()||(c*=2),c*l}function be(i,l){if(i.j.info("Error code "+l),l==2){var c=T(i.fb,i),d=i.Xa;const b=!d;d=new Ae(d||"//www.google.com/images/cleardot.gif"),u.location&&u.location.protocol=="http"||or(d,"https"),lr(d),b?Wc(d.toString(),c):Qc(d.toString(),c)}else kt(2);i.G=0,i.l&&i.l.sa(l),Ho(i),xo(i)}n.fb=function(i){i?(this.j.info("Successfully pinged google.com"),kt(2)):(this.j.info("Failed to ping google.com"),kt(1))};function Ho(i){if(i.G=0,i.ka=[],i.l){const l=wo(i.h);(l.length!=0||i.i.length!=0)&&(S(i.ka,l),S(i.ka,i.i),i.h.i.length=0,D(i.i),i.i.length=0),i.l.ra()}}function Ko(i,l,c){var d=c instanceof Ae?Yt(c):new Ae(c);if(d.g!="")l&&(d.g=l+"."+d.g),ar(d,d.s);else{var b=u.location;d=b.protocol,l=l?l+"."+b.hostname:b.hostname,b=+b.port;var R=new Ae(null);d&&or(R,d),l&&(R.g=l),b&&ar(R,b),c&&(R.l=c),d=R}return c=i.D,l=i.ya,c&&l&&ot(d,c,l),ot(d,"VER",i.la),An(i,d),d}function Go(i,l,c){if(l&&!i.J)throw Error("Can't create secondary domain capable XhrIo object.");return l=i.Ca&&!i.pa?new ct(new ur({eb:c})):new ct(i.pa),l.Ha(i.J),l}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Wo(){}n=Wo.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function pr(){}pr.prototype.g=function(i,l){return new Mt(i,l)};function Mt(i,l){At.call(this),this.g=new Fo(l),this.l=i,this.h=l&&l.messageUrlParams||null,i=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(i?i["X-Client-Protocol"]="webchannel":i={"X-Client-Protocol":"webchannel"}),this.g.o=i,i=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(i?i["X-WebChannel-Content-Type"]=l.messageContentType:i={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.va&&(i?i["X-WebChannel-Client-Profile"]=l.va:i={"X-WebChannel-Client-Profile":l.va}),this.g.S=i,(i=l&&l.Sb)&&!O(i)&&(this.g.m=i),this.v=l&&l.supportsCrossDomainXhr||!1,this.u=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!O(l)&&(this.g.D=l,i=this.h,i!==null&&l in i&&(i=this.h,l in i&&delete i[l])),this.j=new xe(this)}P(Mt,At),Mt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Mt.prototype.close=function(){Ss(this.g)},Mt.prototype.o=function(i){var l=this.g;if(typeof i=="string"){var c={};c.__data__=i,i=c}else this.u&&(c={},c.__data__=gs(i),i=c);l.i.push(new xc(l.Ya++,i)),l.G==3&&dr(l)},Mt.prototype.N=function(){this.g.l=null,delete this.j,Ss(this.g),delete this.g,Mt.aa.N.call(this)};function Qo(i){ys.call(this),i.__headers__&&(this.headers=i.__headers__,this.statusCode=i.__status__,delete i.__headers__,delete i.__status__);var l=i.__sm__;if(l){t:{for(const c in l){i=c;break t}i=void 0}(this.i=i)&&(i=this.i,l=l!==null&&i in l?l[i]:void 0),this.data=l}else this.data=i}P(Qo,ys);function Xo(){Es.call(this),this.status=1}P(Xo,Es);function xe(i){this.g=i}P(xe,Wo),xe.prototype.ua=function(){Dt(this.g,"a")},xe.prototype.ta=function(i){Dt(this.g,new Qo(i))},xe.prototype.sa=function(i){Dt(this.g,new Xo)},xe.prototype.ra=function(){Dt(this.g,"b")},pr.prototype.createWebChannel=pr.prototype.g,Mt.prototype.send=Mt.prototype.o,Mt.prototype.open=Mt.prototype.m,Mt.prototype.close=Mt.prototype.close,Xl=function(){return new pr},Ql=function(){return nr()},Wl=we,Ys={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},rr.NO_ERROR=0,rr.TIMEOUT=8,rr.HTTP_ERROR=6,Ar=rr,ho.COMPLETE="complete",Gl=ho,oo.EventType=dn,dn.OPEN="a",dn.CLOSE="b",dn.ERROR="c",dn.MESSAGE="d",At.prototype.listen=At.prototype.K,bn=oo,ct.prototype.listenOnce=ct.prototype.L,ct.prototype.getLastError=ct.prototype.Ka,ct.prototype.getLastErrorCode=ct.prototype.Ba,ct.prototype.getStatus=ct.prototype.Z,ct.prototype.getResponseJson=ct.prototype.Oa,ct.prototype.getResponseText=ct.prototype.oa,ct.prototype.send=ct.prototype.ea,ct.prototype.setWithCredentials=ct.prototype.Ha,Kl=ct}).apply(typeof _r<"u"?_r:typeof self<"u"?self:typeof window<"u"?window:{});const fa="@firebase/firestore",da="4.7.10";/**
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
 */class St{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}St.UNAUTHENTICATED=new St(null),St.GOOGLE_CREDENTIALS=new St("google-credentials-uid"),St.FIRST_PARTY=new St("first-party-uid"),St.MOCK_USER=new St("mock-user");/**
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
 */const Ce=new Ul("@firebase/firestore");function ze(){return Ce.logLevel}function x(n,...t){if(Ce.logLevel<=Z.DEBUG){const e=t.map(Ei);Ce.debug(`Firestore (${on}): ${n}`,...e)}}function ee(n,...t){if(Ce.logLevel<=Z.ERROR){const e=t.map(Ei);Ce.error(`Firestore (${on}): ${n}`,...e)}}function Ye(n,...t){if(Ce.logLevel<=Z.WARN){const e=t.map(Ei);Ce.warn(`Firestore (${on}): ${n}`,...e)}}function Ei(n){if(typeof n=="string")return n;try{/**
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
 */function z(n="Unexpected state"){const t=`FIRESTORE (${on}) INTERNAL ASSERTION FAILED: `+n;throw ee(t),new Error(t)}function rt(n,t){n||z()}function H(n,t){return n}/**
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
 */const k={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class B extends sn{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Yl{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Gf{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(St.UNAUTHENTICATED))}shutdown(){}}class Wf{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class Qf{constructor(t){this.t=t,this.currentUser=St.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){rt(this.o===void 0);let r=this.i;const s=h=>this.i!==r?(r=this.i,e(h)):Promise.resolve();let o=new de;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new de,t.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const h=o;t.enqueueRetryable(async()=>{await h.promise,await s(this.currentUser)})},u=h=>{x("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(h=>u(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?u(h):(x("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new de)}},0),a()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(r=>this.i!==t?(x("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(rt(typeof r.accessToken=="string"),new Yl(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return rt(t===null||typeof t=="string"),new St(t)}}class Xf{constructor(t,e,r){this.l=t,this.h=e,this.P=r,this.type="FirstParty",this.user=St.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.T.set("Authorization",t),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class Yf{constructor(t,e,r){this.l=t,this.h=e,this.P=r}getToken(){return Promise.resolve(new Xf(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(St.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ma{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Jf{constructor(t,e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,kf(t)&&t.settings.appCheckToken&&(this.V=t.settings.appCheckToken)}start(t,e){rt(this.o===void 0);const r=o=>{o.error!=null&&x("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.R;return this.R=o.token,x("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>r(o))};const s=o=>{x("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>s(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?s(o):x("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new ma(this.V));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(rt(typeof e.token=="string"),this.R=e.token,new ma(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */class Zl{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=Zf(40);for(let o=0;o<s.length;++o)r.length<20&&s[o]<e&&(r+=t.charAt(s[o]%62))}return r}}function W(n,t){return n<t?-1:n>t?1:0}function Js(n,t){let e=0;for(;e<n.length&&e<t.length;){const r=n.codePointAt(e),s=t.codePointAt(e);if(r!==s){if(r<128&&s<128)return W(r,s);{const o=Jl(),a=td(o.encode(pa(n,e)),o.encode(pa(t,e)));return a!==0?a:W(r,s)}}e+=r>65535?2:1}return W(n.length,t.length)}function pa(n,t){return n.codePointAt(t)>65535?n.substring(t,t+2):n.substring(t,t+1)}function td(n,t){for(let e=0;e<n.length&&e<t.length;++e)if(n[e]!==t[e])return W(n[e],t[e]);return W(n.length,t.length)}function Je(n,t,e){return n.length===t.length&&n.every((r,s)=>e(r,t[s]))}/**
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
 */const ga=-62135596800,_a=1e6;class pt{static now(){return pt.fromMillis(Date.now())}static fromDate(t){return pt.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor((t-1e3*e)*_a);return new pt(e,r)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new B(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new B(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<ga)throw new B(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new B(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/_a}_compareTo(t){return this.seconds===t.seconds?W(this.nanoseconds,t.nanoseconds):W(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds-ga;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class ${static fromTimestamp(t){return new $(t)}static min(){return new $(new pt(0,0))}static max(){return new $(new pt(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const ya="__name__";class Ht{constructor(t,e,r){e===void 0?e=0:e>t.length&&z(),r===void 0?r=t.length-e:r>t.length-e&&z(),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return Ht.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Ht?t.forEach(r=>{e.push(r)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let s=0;s<r;s++){const o=Ht.compareSegments(t.get(s),e.get(s));if(o!==0)return o}return W(t.length,e.length)}static compareSegments(t,e){const r=Ht.isNumericId(t),s=Ht.isNumericId(e);return r&&!s?-1:!r&&s?1:r&&s?Ht.extractNumericId(t).compare(Ht.extractNumericId(e)):Js(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return fe.fromString(t.substring(4,t.length-2))}}class at extends Ht{construct(t,e,r){return new at(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new B(k.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter(s=>s.length>0))}return new at(e)}static emptyPath(){return new at([])}}const ed=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Tt extends Ht{construct(t,e,r){return new Tt(t,e,r)}static isValidIdentifier(t){return ed.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Tt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===ya}static keyField(){return new Tt([ya])}static fromServerFormat(t){const e=[];let r="",s=0;const o=()=>{if(r.length===0)throw new B(k.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let a=!1;for(;s<t.length;){const u=t[s];if(u==="\\"){if(s+1===t.length)throw new B(k.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const h=t[s+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new B(k.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=h,s+=2}else u==="`"?(a=!a,s++):u!=="."||a?(r+=u,s++):(o(),s++)}if(o(),a)throw new B(k.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Tt(e)}static emptyPath(){return new Tt([])}}/**
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
 */class j{constructor(t){this.path=t}static fromPath(t){return new j(at.fromString(t))}static fromName(t){return new j(at.fromString(t).popFirst(5))}static empty(){return new j(at.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&at.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return at.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new j(new at(t.slice()))}}/**
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
 */const Ln=-1;function nd(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=$.fromTimestamp(r===1e9?new pt(e+1,0):new pt(e,r));return new pe(s,j.empty(),t)}function rd(n){return new pe(n.readTime,n.key,Ln)}class pe{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new pe($.min(),j.empty(),Ln)}static max(){return new pe($.max(),j.empty(),Ln)}}function sd(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=j.comparator(n.documentKey,t.documentKey),e!==0?e:W(n.largestBatchId,t.largestBatchId))}/**
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
 */async function an(n){if(n.code!==k.FAILED_PRECONDITION||n.message!==id)throw n;x("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class V{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&z(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new V((r,s)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(r,s)},this.catchCallback=o=>{this.wrapFailure(e,o).next(r,s)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof V?e:V.resolve(e)}catch(e){return V.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):V.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):V.reject(e)}static resolve(t){return new V((e,r)=>{e(t)})}static reject(t){return new V((e,r)=>{r(t)})}static waitFor(t){return new V((e,r)=>{let s=0,o=0,a=!1;t.forEach(u=>{++s,u.next(()=>{++o,a&&o===s&&e()},h=>r(h))}),a=!0,o===s&&e()})}static or(t){let e=V.resolve(!1);for(const r of t)e=e.next(s=>s?V.resolve(s):r());return e}static forEach(t,e){const r=[];return t.forEach((s,o)=>{r.push(e.call(this,s,o))}),this.waitFor(r)}static mapArray(t,e){return new V((r,s)=>{const o=t.length,a=new Array(o);let u=0;for(let h=0;h<o;h++){const f=h;e(t[f]).next(m=>{a[f]=m,++u,u===o&&r(a)},m=>s(m))}})}static doWhile(t,e){return new V((r,s)=>{const o=()=>{t()===!0?e().next(()=>{o()},s):r()};o()})}}function ad(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function ln(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class ut{constructor(t,e){this.comparator=t,this.root=e||vt.EMPTY}insert(t,e){return new ut(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,vt.BLACK,null,null))}remove(t){return new ut(this.comparator,this.root.remove(t,this.comparator).copy(null,null,vt.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(t,r.key);if(s===0)return e+r.left.size;s<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,r)=>(t(e,r),!1))}toString(){const t=[];return this.inorderTraversal((e,r)=>(t.push(`${e}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new yr(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new yr(this.root,t,this.comparator,!1)}getReverseIterator(){return new yr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new yr(this.root,t,this.comparator,!0)}}class yr{constructor(t,e,r,s){this.isReverse=s,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?r(t.key,e):1,e&&s&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class vt{constructor(t,e,r,s,o){this.key=t,this.value=e,this.color=r??vt.RED,this.left=s??vt.EMPTY,this.right=o??vt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,s,o){return new vt(t??this.key,e??this.value,r??this.color,s??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let s=this;const o=r(t,s.key);return s=o<0?s.copy(null,null,null,s.left.insert(t,e,r),null):o===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return vt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return vt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,vt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,vt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw z();const t=this.left.check();if(t!==this.right.check())throw z();return t+(this.isRed()?0:1)}}vt.EMPTY=null,vt.RED=!0,vt.BLACK=!1;vt.EMPTY=new class{constructor(){this.size=0}get key(){throw z()}get value(){throw z()}get color(){throw z()}get left(){throw z()}get right(){throw z()}copy(t,e,r,s,o){return this}insert(t,e,r){return new vt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class wt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(s){try{return atob(s)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new nu("Invalid base64 string: "+o):o}}(t);return new wt(e)}static fromUint8Array(t){const e=function(s){let o="";for(let a=0;a<s.length;++a)o+=String.fromCharCode(s[a]);return o}(t);return new wt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const r=new Uint8Array(e.length);for(let s=0;s<e.length;s++)r[s]=e.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return W(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}wt.EMPTY_BYTE_STRING=new wt("");const hd=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ge(n){if(rt(!!n),typeof n=="string"){let t=0;const e=hd.exec(n);if(rt(!!e),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:ft(n.seconds),nanos:ft(n.nanos)}}function ft(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function _e(n){return typeof n=="string"?wt.fromBase64String(n):wt.fromUint8Array(n)}/**
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
 */const au="__type__",dd="__max__",Er={mapValue:{}},lu="__vector__",Fr="value";function ye(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Ti(n)?4:pd(n)?9007199254740991:md(n)?10:11:z()}function Wt(n,t){if(n===t)return!0;const e=ye(n);if(e!==ye(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return Fn(n).isEqual(Fn(t));case 3:return function(s,o){if(typeof s.timestampValue=="string"&&typeof o.timestampValue=="string"&&s.timestampValue.length===o.timestampValue.length)return s.timestampValue===o.timestampValue;const a=ge(s.timestampValue),u=ge(o.timestampValue);return a.seconds===u.seconds&&a.nanos===u.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(s,o){return _e(s.bytesValue).isEqual(_e(o.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(s,o){return ft(s.geoPointValue.latitude)===ft(o.geoPointValue.latitude)&&ft(s.geoPointValue.longitude)===ft(o.geoPointValue.longitude)}(n,t);case 2:return function(s,o){if("integerValue"in s&&"integerValue"in o)return ft(s.integerValue)===ft(o.integerValue);if("doubleValue"in s&&"doubleValue"in o){const a=ft(s.doubleValue),u=ft(o.doubleValue);return a===u?Mr(a)===Mr(u):isNaN(a)&&isNaN(u)}return!1}(n,t);case 9:return Je(n.arrayValue.values||[],t.arrayValue.values||[],Wt);case 10:case 11:return function(s,o){const a=s.mapValue.fields||{},u=o.mapValue.fields||{};if(va(a)!==va(u))return!1;for(const h in a)if(a.hasOwnProperty(h)&&(u[h]===void 0||!Wt(a[h],u[h])))return!1;return!0}(n,t);default:return z()}}function Un(n,t){return(n.values||[]).find(e=>Wt(e,t))!==void 0}function Ze(n,t){if(n===t)return 0;const e=ye(n),r=ye(t);if(e!==r)return W(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return W(n.booleanValue,t.booleanValue);case 2:return function(o,a){const u=ft(o.integerValue||o.doubleValue),h=ft(a.integerValue||a.doubleValue);return u<h?-1:u>h?1:u===h?0:isNaN(u)?isNaN(h)?0:-1:1}(n,t);case 3:return wa(n.timestampValue,t.timestampValue);case 4:return wa(Fn(n),Fn(t));case 5:return Js(n.stringValue,t.stringValue);case 6:return function(o,a){const u=_e(o),h=_e(a);return u.compareTo(h)}(n.bytesValue,t.bytesValue);case 7:return function(o,a){const u=o.split("/"),h=a.split("/");for(let f=0;f<u.length&&f<h.length;f++){const m=W(u[f],h[f]);if(m!==0)return m}return W(u.length,h.length)}(n.referenceValue,t.referenceValue);case 8:return function(o,a){const u=W(ft(o.latitude),ft(a.latitude));return u!==0?u:W(ft(o.longitude),ft(a.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return Ia(n.arrayValue,t.arrayValue);case 10:return function(o,a){var u,h,f,m;const y=o.fields||{},T=a.fields||{},I=(u=y[Fr])===null||u===void 0?void 0:u.arrayValue,P=(h=T[Fr])===null||h===void 0?void 0:h.arrayValue,D=W(((f=I==null?void 0:I.values)===null||f===void 0?void 0:f.length)||0,((m=P==null?void 0:P.values)===null||m===void 0?void 0:m.length)||0);return D!==0?D:Ia(I,P)}(n.mapValue,t.mapValue);case 11:return function(o,a){if(o===Er.mapValue&&a===Er.mapValue)return 0;if(o===Er.mapValue)return 1;if(a===Er.mapValue)return-1;const u=o.fields||{},h=Object.keys(u),f=a.fields||{},m=Object.keys(f);h.sort(),m.sort();for(let y=0;y<h.length&&y<m.length;++y){const T=Js(h[y],m[y]);if(T!==0)return T;const I=Ze(u[h[y]],f[m[y]]);if(I!==0)return I}return W(h.length,m.length)}(n.mapValue,t.mapValue);default:throw z()}}function wa(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return W(n,t);const e=ge(n),r=ge(t),s=W(e.seconds,r.seconds);return s!==0?s:W(e.nanos,r.nanos)}function Ia(n,t){const e=n.values||[],r=t.values||[];for(let s=0;s<e.length&&s<r.length;++s){const o=Ze(e[s],r[s]);if(o)return o}return W(e.length,r.length)}function tn(n){return Zs(n)}function Zs(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const r=ge(e);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return _e(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return j.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let r="[",s=!0;for(const o of e.values||[])s?s=!1:r+=",",r+=Zs(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(e){const r=Object.keys(e.fields||{}).sort();let s="{",o=!0;for(const a of r)o?o=!1:s+=",",s+=`${a}:${Zs(e.fields[a])}`;return s+"}"}(n.mapValue):z()}function br(n){switch(ye(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=Yr(n);return t?16+br(t):16;case 5:return 2*n.stringValue.length;case 6:return _e(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,o)=>s+br(o),0)}(n.arrayValue);case 10:case 11:return function(r){let s=0;return De(r.fields,(o,a)=>{s+=o.length+br(a)}),s}(n.mapValue);default:throw z()}}function Aa(n,t){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${t.path.canonicalString()}`}}function ti(n){return!!n&&"integerValue"in n}function wi(n){return!!n&&"arrayValue"in n}function ba(n){return!!n&&"nullValue"in n}function Ra(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Rr(n){return!!n&&"mapValue"in n}function md(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{})[au])===null||e===void 0?void 0:e.stringValue)===lu}function Cn(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return De(n.mapValue.fields,(e,r)=>t.mapValue.fields[e]=Cn(r)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=Cn(n.arrayValue.values[e]);return t}return Object.assign({},n)}function pd(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===dd}/**
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
 */class Lt{constructor(t){this.value=t}static empty(){return new Lt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!Rr(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Cn(e)}setAll(t){let e=Tt.emptyPath(),r={},s=[];t.forEach((a,u)=>{if(!e.isImmediateParentOf(u)){const h=this.getFieldsMap(e);this.applyChanges(h,r,s),r={},s=[],e=u.popLast()}a?r[u.lastSegment()]=Cn(a):s.push(u.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,r,s)}delete(t){const e=this.field(t.popLast());Rr(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Wt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=e.mapValue.fields[t.get(r)];Rr(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,r){De(e,(s,o)=>t[s]=o);for(const s of r)delete t[s]}clone(){return new Lt(Cn(this.value))}}function uu(n){const t=[];return De(n.fields,(e,r)=>{const s=new Tt([e]);if(Rr(r)){const o=uu(r.mapValue).fields;if(o.length===0)t.push(s);else for(const a of o)t.push(s.child(a))}else t.push(s)}),new qt(t)}/**
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
 */class Ct{constructor(t,e,r,s,o,a,u){this.key=t,this.documentType=e,this.version=r,this.readTime=s,this.createTime=o,this.data=a,this.documentState=u}static newInvalidDocument(t){return new Ct(t,0,$.min(),$.min(),$.min(),Lt.empty(),0)}static newFoundDocument(t,e,r,s){return new Ct(t,1,e,$.min(),r,s,0)}static newNoDocument(t,e){return new Ct(t,2,e,$.min(),$.min(),Lt.empty(),0)}static newUnknownDocument(t,e){return new Ct(t,3,e,$.min(),$.min(),Lt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual($.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Lt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Lt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=$.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Ct&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Ct(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class xr{constructor(t,e){this.position=t,this.inclusive=e}}function Pa(n,t,e){let r=0;for(let s=0;s<n.position.length;s++){const o=t[s],a=n.position[s];if(o.field.isKeyField()?r=j.comparator(j.fromName(a.referenceValue),e.key):r=Ze(a,e.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function Sa(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!Wt(n.position[e],t.position[e]))return!1;return!0}/**
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
 */class cu{}class mt extends cu{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new yd(t,e,r):e==="array-contains"?new Td(t,r):e==="in"?new wd(t,r):e==="not-in"?new Id(t,r):e==="array-contains-any"?new Ad(t,r):new mt(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new Ed(t,r):new vd(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(Ze(e,this.value)):e!==null&&ye(this.value)===ye(e)&&this.matchesComparison(Ze(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return z()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class $t extends cu{constructor(t,e){super(),this.filters=t,this.op=e,this.ce=null}static create(t,e){return new $t(t,e)}matches(t){return hu(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function hu(n){return n.op==="and"}function fu(n){return _d(n)&&hu(n)}function _d(n){for(const t of n.filters)if(t instanceof $t)return!1;return!0}function ei(n){if(n instanceof mt)return n.field.canonicalString()+n.op.toString()+tn(n.value);if(fu(n))return n.filters.map(t=>ei(t)).join(",");{const t=n.filters.map(e=>ei(e)).join(",");return`${n.op}(${t})`}}function du(n,t){return n instanceof mt?function(r,s){return s instanceof mt&&r.op===s.op&&r.field.isEqual(s.field)&&Wt(r.value,s.value)}(n,t):n instanceof $t?function(r,s){return s instanceof $t&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((o,a,u)=>o&&du(a,s.filters[u]),!0):!1}(n,t):void z()}function mu(n){return n instanceof mt?function(e){return`${e.field.canonicalString()} ${e.op} ${tn(e.value)}`}(n):n instanceof $t?function(e){return e.op.toString()+" {"+e.getFilters().map(mu).join(" ,")+"}"}(n):"Filter"}class yd extends mt{constructor(t,e,r){super(t,e,r),this.key=j.fromName(r.referenceValue)}matches(t){const e=j.comparator(t.key,this.key);return this.matchesComparison(e)}}class Ed extends mt{constructor(t,e){super(t,"in",e),this.keys=pu("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class vd extends mt{constructor(t,e){super(t,"not-in",e),this.keys=pu("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function pu(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(r=>j.fromName(r.referenceValue))}class Td extends mt{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return wi(e)&&Un(e.arrayValue,this.value)}}class wd extends mt{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&Un(this.value.arrayValue,e)}}class Id extends mt{constructor(t,e){super(t,"not-in",e)}matches(t){if(Un(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!Un(this.value.arrayValue,e)}}class Ad extends mt{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!wi(e)||!e.arrayValue.values)&&e.arrayValue.values.some(r=>Un(this.value.arrayValue,r))}}/**
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
 */class bd{constructor(t,e=null,r=[],s=[],o=null,a=null,u=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=s,this.limit=o,this.startAt=a,this.endAt=u,this.le=null}}function Ca(n,t=null,e=[],r=[],s=null,o=null,a=null){return new bd(n,t,e,r,s,o,a)}function Ii(n){const t=H(n);if(t.le===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(r=>ei(r)).join(","),e+="|ob:",e+=t.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),Xr(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(r=>tn(r)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(r=>tn(r)).join(",")),t.le=e}return t.le}function Ai(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!gd(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!du(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!Sa(n.startAt,t.startAt)&&Sa(n.endAt,t.endAt)}function ni(n){return j.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class Gn{constructor(t,e=null,r=[],s=[],o=null,a="F",u=null,h=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=s,this.limit=o,this.limitType=a,this.startAt=u,this.endAt=h,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function Rd(n,t,e,r,s,o,a,u){return new Gn(n,t,e,r,s,o,a,u)}function gu(n){return new Gn(n)}function Va(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function _u(n){return n.collectionGroup!==null}function Vn(n){const t=H(n);if(t.he===null){t.he=[];const e=new Set;for(const o of t.explicitOrderBy)t.he.push(o),e.add(o.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let u=new gt(Tt.comparator);return a.filters.forEach(h=>{h.getFlattenedFilters().forEach(f=>{f.isInequality()&&(u=u.add(f.field))})}),u})(t).forEach(o=>{e.has(o.canonicalString())||o.isKeyField()||t.he.push(new Ur(o,r))}),e.has(Tt.keyField().canonicalString())||t.he.push(new Ur(Tt.keyField(),r))}return t.he}function Kt(n){const t=H(n);return t.Pe||(t.Pe=Pd(t,Vn(n))),t.Pe}function Pd(n,t){if(n.limitType==="F")return Ca(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(s=>{const o=s.dir==="desc"?"asc":"desc";return new Ur(s.field,o)});const e=n.endAt?new xr(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new xr(n.startAt.position,n.startAt.inclusive):null;return Ca(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function ri(n,t){const e=n.filters.concat([t]);return new Gn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),e,n.limit,n.limitType,n.startAt,n.endAt)}function si(n,t,e){return new Gn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function Jr(n,t){return Ai(Kt(n),Kt(t))&&n.limitType===t.limitType}function yu(n){return`${Ii(Kt(n))}|lt:${n.limitType}`}function $e(n){return`Query(target=${function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map(s=>mu(s)).join(", ")}]`),Xr(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map(s=>tn(s)).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map(s=>tn(s)).join(",")),`Target(${r})`}(Kt(n))}; limitType=${n.limitType})`}function Zr(n,t){return t.isFoundDocument()&&function(r,s){const o=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):j.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(n,t)&&function(r,s){for(const o of Vn(r))if(!o.field.isKeyField()&&s.data.field(o.field)===null)return!1;return!0}(n,t)&&function(r,s){for(const o of r.filters)if(!o.matches(s))return!1;return!0}(n,t)&&function(r,s){return!(r.startAt&&!function(a,u,h){const f=Pa(a,u,h);return a.inclusive?f<=0:f<0}(r.startAt,Vn(r),s)||r.endAt&&!function(a,u,h){const f=Pa(a,u,h);return a.inclusive?f>=0:f>0}(r.endAt,Vn(r),s))}(n,t)}function Sd(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Eu(n){return(t,e)=>{let r=!1;for(const s of Vn(n)){const o=Cd(s,t,e);if(o!==0)return o;r=r||s.field.isKeyField()}return 0}}function Cd(n,t,e){const r=n.field.isKeyField()?j.comparator(t.key,e.key):function(o,a,u){const h=a.data.field(o),f=u.data.field(o);return h!==null&&f!==null?Ze(h,f):z()}(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return z()}}/**
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
 */const Vd=new ut(j.comparator);function ne(){return Vd}const vu=new ut(j.comparator);function Rn(...n){let t=vu;for(const e of n)t=t.insert(e.key,e);return t}function Tu(n){let t=vu;return n.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function Se(){return Dn()}function wu(){return Dn()}function Dn(){return new ke(n=>n.toString(),(n,t)=>n.isEqual(t))}const Dd=new ut(j.comparator),kd=new gt(j.comparator);function X(...n){let t=kd;for(const e of n)t=t.add(e);return t}const Nd=new gt(W);function Od(){return Nd}/**
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
 */class ts{constructor(){this._=void 0}}function Ld(n,t,e){return n instanceof Br?function(s,o){const a={fields:{[su]:{stringValue:ru},[ou]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return o&&Ti(o)&&(o=Yr(o)),o&&(a.fields[iu]=o),{mapValue:a}}(e,t):n instanceof Bn?bu(n,t):n instanceof jn?Ru(n,t):function(s,o){const a=Au(s,o),u=Da(a)+Da(s.Ie);return ti(a)&&ti(s.Ie)?Iu(u):bi(s.serializer,u)}(n,t)}function Fd(n,t,e){return n instanceof Bn?bu(n,t):n instanceof jn?Ru(n,t):e}function Au(n,t){return n instanceof jr?function(r){return ti(r)||function(o){return!!o&&"doubleValue"in o}(r)}(t)?t:{integerValue:0}:null}class Br extends ts{}class Bn extends ts{constructor(t){super(),this.elements=t}}function bu(n,t){const e=Pu(t);for(const r of n.elements)e.some(s=>Wt(s,r))||e.push(r);return{arrayValue:{values:e}}}class jn extends ts{constructor(t){super(),this.elements=t}}function Ru(n,t){let e=Pu(t);for(const r of n.elements)e=e.filter(s=>!Wt(s,r));return{arrayValue:{values:e}}}class jr extends ts{constructor(t,e){super(),this.serializer=t,this.Ie=e}}function Da(n){return ft(n.integerValue||n.doubleValue)}function Pu(n){return wi(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function xd(n,t){return n.field.isEqual(t.field)&&function(r,s){return r instanceof Bn&&s instanceof Bn||r instanceof jn&&s instanceof jn?Je(r.elements,s.elements,Wt):r instanceof jr&&s instanceof jr?Wt(r.Ie,s.Ie):r instanceof Br&&s instanceof Br}(n.transform,t.transform)}class Ud{constructor(t,e){this.version=t,this.transformResults=e}}class Zt{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Zt}static exists(t){return new Zt(void 0,t)}static updateTime(t){return new Zt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Pr(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class es{}function Su(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new Vu(n.key,Zt.none()):new Wn(n.key,n.data,Zt.none());{const e=n.data,r=Lt.empty();let s=new gt(Tt.comparator);for(let o of t.fields)if(!s.has(o)){let a=e.field(o);a===null&&o.length>1&&(o=o.popLast(),a=e.field(o)),a===null?r.delete(o):r.set(o,a),s=s.add(o)}return new Ne(n.key,r,new qt(s.toArray()),Zt.none())}}function Bd(n,t,e){n instanceof Wn?function(s,o,a){const u=s.value.clone(),h=Na(s.fieldTransforms,o,a.transformResults);u.setAll(h),o.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(n,t,e):n instanceof Ne?function(s,o,a){if(!Pr(s.precondition,o))return void o.convertToUnknownDocument(a.version);const u=Na(s.fieldTransforms,o,a.transformResults),h=o.data;h.setAll(Cu(s)),h.setAll(u),o.convertToFoundDocument(a.version,h).setHasCommittedMutations()}(n,t,e):function(s,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()}(0,t,e)}function kn(n,t,e,r){return n instanceof Wn?function(o,a,u,h){if(!Pr(o.precondition,a))return u;const f=o.value.clone(),m=Oa(o.fieldTransforms,h,a);return f.setAll(m),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),null}(n,t,e,r):n instanceof Ne?function(o,a,u,h){if(!Pr(o.precondition,a))return u;const f=Oa(o.fieldTransforms,h,a),m=a.data;return m.setAll(Cu(o)),m.setAll(f),a.convertToFoundDocument(a.version,m).setHasLocalMutations(),u===null?null:u.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(y=>y.field))}(n,t,e,r):function(o,a,u){return Pr(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):u}(n,t,e)}function jd(n,t){let e=null;for(const r of n.fieldTransforms){const s=t.data.field(r.field),o=Au(r.transform,s||null);o!=null&&(e===null&&(e=Lt.empty()),e.set(r.field,o))}return e||null}function ka(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Je(r,s,(o,a)=>xd(o,a))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class Wn extends es{constructor(t,e,r,s=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Ne extends es{constructor(t,e,r,s,o=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=s,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Cu(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}}),t}function Na(n,t,e){const r=new Map;rt(n.length===e.length);for(let s=0;s<e.length;s++){const o=n[s],a=o.transform,u=t.data.field(o.field);r.set(o.field,Fd(a,u,e[s]))}return r}function Oa(n,t,e){const r=new Map;for(const s of n){const o=s.transform,a=e.data.field(s.field);r.set(s.field,Ld(o,a,t))}return r}class Vu extends es{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class qd extends es{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class zd{constructor(t,e,r,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const o=this.mutations[s];o.key.isEqual(t.key)&&Bd(o,t,r[s])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=kn(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=kn(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=wu();return this.mutations.forEach(s=>{const o=t.get(s.key),a=o.overlayedDocument;let u=this.applyToLocalView(a,o.mutatedFields);u=e.has(s.key)?null:u;const h=Su(a,u);h!==null&&r.set(s.key,h),a.isValidDocument()||a.convertToNoDocument($.min())}),r}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),X())}isEqual(t){return this.batchId===t.batchId&&Je(this.mutations,t.mutations,(e,r)=>ka(e,r))&&Je(this.baseMutations,t.baseMutations,(e,r)=>ka(e,r))}}class Ri{constructor(t,e,r,s){this.batch=t,this.commitVersion=e,this.mutationResults=r,this.docVersions=s}static from(t,e,r){rt(t.mutations.length===r.length);let s=function(){return Dd}();const o=t.mutations;for(let a=0;a<o.length;a++)s=s.insert(o[a].key,r[a].version);return new Ri(t,e,r,s)}}/**
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
 */var dt,J;function Kd(n){switch(n){case k.OK:return z();case k.CANCELLED:case k.UNKNOWN:case k.DEADLINE_EXCEEDED:case k.RESOURCE_EXHAUSTED:case k.INTERNAL:case k.UNAVAILABLE:case k.UNAUTHENTICATED:return!1;case k.INVALID_ARGUMENT:case k.NOT_FOUND:case k.ALREADY_EXISTS:case k.PERMISSION_DENIED:case k.FAILED_PRECONDITION:case k.ABORTED:case k.OUT_OF_RANGE:case k.UNIMPLEMENTED:case k.DATA_LOSS:return!0;default:return z()}}function Du(n){if(n===void 0)return ee("GRPC error has no .code"),k.UNKNOWN;switch(n){case dt.OK:return k.OK;case dt.CANCELLED:return k.CANCELLED;case dt.UNKNOWN:return k.UNKNOWN;case dt.DEADLINE_EXCEEDED:return k.DEADLINE_EXCEEDED;case dt.RESOURCE_EXHAUSTED:return k.RESOURCE_EXHAUSTED;case dt.INTERNAL:return k.INTERNAL;case dt.UNAVAILABLE:return k.UNAVAILABLE;case dt.UNAUTHENTICATED:return k.UNAUTHENTICATED;case dt.INVALID_ARGUMENT:return k.INVALID_ARGUMENT;case dt.NOT_FOUND:return k.NOT_FOUND;case dt.ALREADY_EXISTS:return k.ALREADY_EXISTS;case dt.PERMISSION_DENIED:return k.PERMISSION_DENIED;case dt.FAILED_PRECONDITION:return k.FAILED_PRECONDITION;case dt.ABORTED:return k.ABORTED;case dt.OUT_OF_RANGE:return k.OUT_OF_RANGE;case dt.UNIMPLEMENTED:return k.UNIMPLEMENTED;case dt.DATA_LOSS:return k.DATA_LOSS;default:return z()}}(J=dt||(dt={}))[J.OK=0]="OK",J[J.CANCELLED=1]="CANCELLED",J[J.UNKNOWN=2]="UNKNOWN",J[J.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",J[J.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",J[J.NOT_FOUND=5]="NOT_FOUND",J[J.ALREADY_EXISTS=6]="ALREADY_EXISTS",J[J.PERMISSION_DENIED=7]="PERMISSION_DENIED",J[J.UNAUTHENTICATED=16]="UNAUTHENTICATED",J[J.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",J[J.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",J[J.ABORTED=10]="ABORTED",J[J.OUT_OF_RANGE=11]="OUT_OF_RANGE",J[J.UNIMPLEMENTED=12]="UNIMPLEMENTED",J[J.INTERNAL=13]="INTERNAL",J[J.UNAVAILABLE=14]="UNAVAILABLE",J[J.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const Gd=new fe([4294967295,4294967295],0);function Ma(n){const t=Jl().encode(n),e=new Hl;return e.update(t),new Uint8Array(e.digest())}function La(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),s=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new fe([e,r],0),new fe([s,o],0)]}class Pi{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new Pn(`Invalid padding: ${e}`);if(r<0)throw new Pn(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new Pn(`Invalid hash count: ${r}`);if(t.length===0&&e!==0)throw new Pn(`Invalid padding when bitmap length is 0: ${e}`);this.Ee=8*t.length-e,this.de=fe.fromNumber(this.Ee)}Ae(t,e,r){let s=t.add(e.multiply(fe.fromNumber(r)));return s.compare(Gd)===1&&(s=new fe([s.getBits(0),s.getBits(1)],0)),s.modulo(this.de).toNumber()}Re(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.Ee===0)return!1;const e=Ma(t),[r,s]=La(e);for(let o=0;o<this.hashCount;o++){const a=this.Ae(r,s,o);if(!this.Re(a))return!1}return!0}static create(t,e,r){const s=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),a=new Pi(o,s,e);return r.forEach(u=>a.insert(u)),a}insert(t){if(this.Ee===0)return;const e=Ma(t),[r,s]=La(e);for(let o=0;o<this.hashCount;o++){const a=this.Ae(r,s,o);this.Ve(a)}}Ve(t){const e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}}class Pn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class ns{constructor(t,e,r,s,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,r){const s=new Map;return s.set(t,Qn.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new ns($.min(),s,new ut(W),ne(),X())}}class Qn{constructor(t,e,r,s,o){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new Qn(r,e,X(),X(),X())}}/**
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
 */class Sr{constructor(t,e,r,s){this.me=t,this.removedTargetIds=e,this.key=r,this.fe=s}}class ku{constructor(t,e){this.targetId=t,this.ge=e}}class Nu{constructor(t,e,r=wt.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=s}}class Fa{constructor(){this.pe=0,this.ye=xa(),this.we=wt.EMPTY_BYTE_STRING,this.Se=!1,this.be=!0}get current(){return this.Se}get resumeToken(){return this.we}get De(){return this.pe!==0}get ve(){return this.be}Ce(t){t.approximateByteSize()>0&&(this.be=!0,this.we=t)}Fe(){let t=X(),e=X(),r=X();return this.ye.forEach((s,o)=>{switch(o){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:r=r.add(s);break;default:z()}}),new Qn(this.we,this.Se,t,e,r)}Me(){this.be=!1,this.ye=xa()}xe(t,e){this.be=!0,this.ye=this.ye.insert(t,e)}Oe(t){this.be=!0,this.ye=this.ye.remove(t)}Ne(){this.pe+=1}Be(){this.pe-=1,rt(this.pe>=0)}Le(){this.be=!0,this.Se=!0}}class Wd{constructor(t){this.ke=t,this.qe=new Map,this.Qe=ne(),this.$e=vr(),this.Ue=vr(),this.Ke=new ut(W)}We(t){for(const e of t.me)t.fe&&t.fe.isFoundDocument()?this.Ge(e,t.fe):this.ze(e,t.key,t.fe);for(const e of t.removedTargetIds)this.ze(e,t.key,t.fe)}je(t){this.forEachTarget(t,e=>{const r=this.He(e);switch(t.state){case 0:this.Je(e)&&r.Ce(t.resumeToken);break;case 1:r.Be(),r.De||r.Me(),r.Ce(t.resumeToken);break;case 2:r.Be(),r.De||this.removeTarget(e);break;case 3:this.Je(e)&&(r.Le(),r.Ce(t.resumeToken));break;case 4:this.Je(e)&&(this.Ye(e),r.Ce(t.resumeToken));break;default:z()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.qe.forEach((r,s)=>{this.Je(s)&&e(s)})}Ze(t){const e=t.targetId,r=t.ge.count,s=this.Xe(e);if(s){const o=s.target;if(ni(o))if(r===0){const a=new j(o.path);this.ze(e,a,Ct.newNoDocument(a,$.min()))}else rt(r===1);else{const a=this.et(e);if(a!==r){const u=this.tt(t),h=u?this.nt(u,t,a):1;if(h!==0){this.Ye(e);const f=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(e,f)}}}}}tt(t){const e=t.ge.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:o=0}=e;let a,u;try{a=_e(r).toUint8Array()}catch(h){if(h instanceof nu)return Ye("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{u=new Pi(a,s,o)}catch(h){return Ye(h instanceof Pn?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return u.Ee===0?null:u}nt(t,e,r){return e.ge.count===r-this.st(t,e.targetId)?0:2}st(t,e){const r=this.ke.getRemoteKeysForTarget(e);let s=0;return r.forEach(o=>{const a=this.ke.it(),u=`projects/${a.projectId}/databases/${a.database}/documents/${o.path.canonicalString()}`;t.mightContain(u)||(this.ze(e,o,null),s++)}),s}ot(t){const e=new Map;this.qe.forEach((o,a)=>{const u=this.Xe(a);if(u){if(o.current&&ni(u.target)){const h=new j(u.target.path);this._t(h).has(a)||this.ut(a,h)||this.ze(a,h,Ct.newNoDocument(h,t))}o.ve&&(e.set(a,o.Fe()),o.Me())}});let r=X();this.Ue.forEach((o,a)=>{let u=!0;a.forEachWhile(h=>{const f=this.Xe(h);return!f||f.purpose==="TargetPurposeLimboResolution"||(u=!1,!1)}),u&&(r=r.add(o))}),this.Qe.forEach((o,a)=>a.setReadTime(t));const s=new ns(t,e,this.Ke,this.Qe,r);return this.Qe=ne(),this.$e=vr(),this.Ue=vr(),this.Ke=new ut(W),s}Ge(t,e){if(!this.Je(t))return;const r=this.ut(t,e.key)?2:0;this.He(t).xe(e.key,r),this.Qe=this.Qe.insert(e.key,e),this.$e=this.$e.insert(e.key,this._t(e.key).add(t)),this.Ue=this.Ue.insert(e.key,this.ct(e.key).add(t))}ze(t,e,r){if(!this.Je(t))return;const s=this.He(t);this.ut(t,e)?s.xe(e,1):s.Oe(e),this.Ue=this.Ue.insert(e,this.ct(e).delete(t)),this.Ue=this.Ue.insert(e,this.ct(e).add(t)),r&&(this.Qe=this.Qe.insert(e,r))}removeTarget(t){this.qe.delete(t)}et(t){const e=this.He(t).Fe();return this.ke.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Ne(t){this.He(t).Ne()}He(t){let e=this.qe.get(t);return e||(e=new Fa,this.qe.set(t,e)),e}ct(t){let e=this.Ue.get(t);return e||(e=new gt(W),this.Ue=this.Ue.insert(t,e)),e}_t(t){let e=this.$e.get(t);return e||(e=new gt(W),this.$e=this.$e.insert(t,e)),e}Je(t){const e=this.Xe(t)!==null;return e||x("WatchChangeAggregator","Detected inactive target",t),e}Xe(t){const e=this.qe.get(t);return e&&e.De?null:this.ke.lt(t)}Ye(t){this.qe.set(t,new Fa),this.ke.getRemoteKeysForTarget(t).forEach(e=>{this.ze(t,e,null)})}ut(t,e){return this.ke.getRemoteKeysForTarget(t).has(e)}}function vr(){return new ut(j.comparator)}function xa(){return new ut(j.comparator)}const Qd={asc:"ASCENDING",desc:"DESCENDING"},Xd={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Yd={and:"AND",or:"OR"};class Jd{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function ii(n,t){return n.useProto3Json||Xr(t)?t:{value:t}}function qr(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Ou(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function Zd(n,t){return qr(n,t.toTimestamp())}function Gt(n){return rt(!!n),$.fromTimestamp(function(e){const r=ge(e);return new pt(r.seconds,r.nanos)}(n))}function Si(n,t){return oi(n,t).canonicalString()}function oi(n,t){const e=function(s){return new at(["projects",s.projectId,"databases",s.database])}(n).child("documents");return t===void 0?e:e.child(t)}function Mu(n){const t=at.fromString(n);return rt(Bu(t)),t}function ai(n,t){return Si(n.databaseId,t.path)}function Us(n,t){const e=Mu(t);if(e.get(1)!==n.databaseId.projectId)throw new B(k.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new B(k.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new j(Fu(e))}function Lu(n,t){return Si(n.databaseId,t)}function tm(n){const t=Mu(n);return t.length===4?at.emptyPath():Fu(t)}function li(n){return new at(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Fu(n){return rt(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Ua(n,t,e){return{name:ai(n,t),fields:e.value.mapValue.fields}}function em(n,t){let e;if("targetChange"in t){t.targetChange;const r=function(f){return f==="NO_CHANGE"?0:f==="ADD"?1:f==="REMOVE"?2:f==="CURRENT"?3:f==="RESET"?4:z()}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],o=function(f,m){return f.useProto3Json?(rt(m===void 0||typeof m=="string"),wt.fromBase64String(m||"")):(rt(m===void 0||m instanceof Buffer||m instanceof Uint8Array),wt.fromUint8Array(m||new Uint8Array))}(n,t.targetChange.resumeToken),a=t.targetChange.cause,u=a&&function(f){const m=f.code===void 0?k.UNKNOWN:Du(f.code);return new B(m,f.message||"")}(a);e=new Nu(r,s,o,u||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=Us(n,r.document.name),o=Gt(r.document.updateTime),a=r.document.createTime?Gt(r.document.createTime):$.min(),u=new Lt({mapValue:{fields:r.document.fields}}),h=Ct.newFoundDocument(s,o,a,u),f=r.targetIds||[],m=r.removedTargetIds||[];e=new Sr(f,m,h.key,h)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=Us(n,r.document),o=r.readTime?Gt(r.readTime):$.min(),a=Ct.newNoDocument(s,o),u=r.removedTargetIds||[];e=new Sr([],u,a.key,a)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=Us(n,r.document),o=r.removedTargetIds||[];e=new Sr([],o,s,null)}else{if(!("filter"in t))return z();{t.filter;const r=t.filter;r.targetId;const{count:s=0,unchangedNames:o}=r,a=new Hd(s,o),u=r.targetId;e=new ku(u,a)}}return e}function nm(n,t){let e;if(t instanceof Wn)e={update:Ua(n,t.key,t.value)};else if(t instanceof Vu)e={delete:ai(n,t.key)};else if(t instanceof Ne)e={update:Ua(n,t.key,t.data),updateMask:hm(t.fieldMask)};else{if(!(t instanceof qd))return z();e={verify:ai(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(r=>function(o,a){const u=a.transform;if(u instanceof Br)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(u instanceof Bn)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:u.elements}};if(u instanceof jn)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:u.elements}};if(u instanceof jr)return{fieldPath:a.field.canonicalString(),increment:u.Ie};throw z()}(0,r))),t.precondition.isNone||(e.currentDocument=function(s,o){return o.updateTime!==void 0?{updateTime:Zd(s,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:z()}(n,t.precondition)),e}function rm(n,t){return n&&n.length>0?(rt(t!==void 0),n.map(e=>function(s,o){let a=s.updateTime?Gt(s.updateTime):Gt(o);return a.isEqual($.min())&&(a=Gt(o)),new Ud(a,s.transformResults||[])}(e,t))):[]}function sm(n,t){return{documents:[Lu(n,t.path)]}}function im(n,t){const e={structuredQuery:{}},r=t.path;let s;t.collectionGroup!==null?(s=r,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=r.popLast(),e.structuredQuery.from=[{collectionId:r.lastSegment()}]),e.parent=Lu(n,s);const o=function(f){if(f.length!==0)return Uu($t.create(f,"and"))}(t.filters);o&&(e.structuredQuery.where=o);const a=function(f){if(f.length!==0)return f.map(m=>function(T){return{field:He(T.field),direction:lm(T.dir)}}(m))}(t.orderBy);a&&(e.structuredQuery.orderBy=a);const u=ii(n,t.limit);return u!==null&&(e.structuredQuery.limit=u),t.startAt&&(e.structuredQuery.startAt=function(f){return{before:f.inclusive,values:f.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(f){return{before:!f.inclusive,values:f.position}}(t.endAt)),{ht:e,parent:s}}function om(n){let t=tm(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let s=null;if(r>0){rt(r===1);const m=e.from[0];m.allDescendants?s=m.collectionId:t=t.child(m.collectionId)}let o=[];e.where&&(o=function(y){const T=xu(y);return T instanceof $t&&fu(T)?T.getFilters():[T]}(e.where));let a=[];e.orderBy&&(a=function(y){return y.map(T=>function(P){return new Ur(Ke(P.field),function(S){switch(S){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(T))}(e.orderBy));let u=null;e.limit&&(u=function(y){let T;return T=typeof y=="object"?y.value:y,Xr(T)?null:T}(e.limit));let h=null;e.startAt&&(h=function(y){const T=!!y.before,I=y.values||[];return new xr(I,T)}(e.startAt));let f=null;return e.endAt&&(f=function(y){const T=!y.before,I=y.values||[];return new xr(I,T)}(e.endAt)),Rd(t,s,a,o,u,"F",h,f)}function am(n,t){const e=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return z()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function xu(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=Ke(e.unaryFilter.field);return mt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Ke(e.unaryFilter.field);return mt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=Ke(e.unaryFilter.field);return mt.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Ke(e.unaryFilter.field);return mt.create(a,"!=",{nullValue:"NULL_VALUE"});default:return z()}}(n):n.fieldFilter!==void 0?function(e){return mt.create(Ke(e.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return z()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return $t.create(e.compositeFilter.filters.map(r=>xu(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return z()}}(e.compositeFilter.op))}(n):z()}function lm(n){return Qd[n]}function um(n){return Xd[n]}function cm(n){return Yd[n]}function He(n){return{fieldPath:n.canonicalString()}}function Ke(n){return Tt.fromServerFormat(n.fieldPath)}function Uu(n){return n instanceof mt?function(e){if(e.op==="=="){if(Ra(e.value))return{unaryFilter:{field:He(e.field),op:"IS_NAN"}};if(ba(e.value))return{unaryFilter:{field:He(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Ra(e.value))return{unaryFilter:{field:He(e.field),op:"IS_NOT_NAN"}};if(ba(e.value))return{unaryFilter:{field:He(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:He(e.field),op:um(e.op),value:e.value}}}(n):n instanceof $t?function(e){const r=e.getFilters().map(s=>Uu(s));return r.length===1?r[0]:{compositeFilter:{op:cm(e.op),filters:r}}}(n):z()}function hm(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function Bu(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class ue{constructor(t,e,r,s,o=$.min(),a=$.min(),u=wt.EMPTY_BYTE_STRING,h=null){this.target=t,this.targetId=e,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=u,this.expectedCount=h}withSequenceNumber(t){return new ue(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new ue(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new ue(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new ue(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class mm{constructor(){this.Tn=new pm}addToCollectionParentIndex(t,e){return this.Tn.add(e),V.resolve()}getCollectionParents(t,e){return V.resolve(this.Tn.getEntries(e))}addFieldIndex(t,e){return V.resolve()}deleteFieldIndex(t,e){return V.resolve()}deleteAllFieldIndexes(t){return V.resolve()}createTargetIndexes(t,e){return V.resolve()}getDocumentsMatchingTarget(t,e){return V.resolve(null)}getIndexType(t,e){return V.resolve(0)}getFieldIndexes(t,e){return V.resolve([])}getNextCollectionGroupToUpdate(t){return V.resolve(null)}getMinOffset(t,e){return V.resolve(pe.min())}getMinOffsetFromCollectionGroup(t,e){return V.resolve(pe.min())}updateCollectionGroup(t,e,r){return V.resolve()}updateIndexEntries(t,e){return V.resolve()}}class pm{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e]||new gt(at.comparator),o=!s.has(r);return this.index[e]=s.add(r),o}has(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e];return s&&s.has(r)}getEntries(t){return(this.index[t]||new gt(at.comparator)).toArray()}}/**
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
 */const Ba={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},ju=41943040;class Ot{static withCacheSize(t){return new Ot(t,Ot.DEFAULT_COLLECTION_PERCENTILE,Ot.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,r){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=r}}/**
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
 */Ot.DEFAULT_COLLECTION_PERCENTILE=10,Ot.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ot.DEFAULT=new Ot(ju,Ot.DEFAULT_COLLECTION_PERCENTILE,Ot.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ot.DISABLED=new Ot(-1,0,0);/**
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
 */const ja="LruGarbageCollector",gm=1048576;function qa([n,t],[e,r]){const s=W(n,e);return s===0?W(t,r):s}class _m{constructor(t){this.Hn=t,this.buffer=new gt(qa),this.Jn=0}Yn(){return++this.Jn}Zn(t){const e=[t,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(e);else{const r=this.buffer.last();qa(e,r)<0&&(this.buffer=this.buffer.delete(r).add(e))}}get maxValue(){return this.buffer.last()[0]}}class ym{constructor(t,e,r){this.garbageCollector=t,this.asyncQueue=e,this.localStore=r,this.Xn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return this.Xn!==null}er(t){x(ja,`Garbage collection scheduled in ${t}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){ln(e)?x(ja,"Ignoring IndexedDB error during garbage collection: ",e):await an(e)}await this.er(3e5)})}}class Em{constructor(t,e){this.tr=t,this.params=e}calculateTargetCount(t,e){return this.tr.nr(t).next(r=>Math.floor(e/100*r))}nthSequenceNumber(t,e){if(e===0)return V.resolve(Qr.ae);const r=new _m(e);return this.tr.forEachTarget(t,s=>r.Zn(s.sequenceNumber)).next(()=>this.tr.rr(t,s=>r.Zn(s))).next(()=>r.maxValue)}removeTargets(t,e,r){return this.tr.removeTargets(t,e,r)}removeOrphanedDocuments(t,e){return this.tr.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(x("LruGarbageCollector","Garbage collection skipped; disabled"),V.resolve(Ba)):this.getCacheSize(t).next(r=>r<this.params.cacheSizeCollectionThreshold?(x("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Ba):this.ir(t,e))}getCacheSize(t){return this.tr.getCacheSize(t)}ir(t,e){let r,s,o,a,u,h,f;const m=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(y=>(y>this.params.maximumSequenceNumbersToCollect?(x("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${y}`),s=this.params.maximumSequenceNumbersToCollect):s=y,a=Date.now(),this.nthSequenceNumber(t,s))).next(y=>(r=y,u=Date.now(),this.removeTargets(t,r,e))).next(y=>(o=y,h=Date.now(),this.removeOrphanedDocuments(t,r))).next(y=>(f=Date.now(),ze()<=Z.DEBUG&&x("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-m}ms
	Determined least recently used ${s} in `+(u-a)+`ms
	Removed ${o} targets in `+(h-u)+`ms
	Removed ${y} documents in `+(f-h)+`ms
Total Duration: ${f-m}ms`),V.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:o,documentsRemoved:y})))}}function vm(n,t){return new Em(n,t)}/**
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
 */class Tm{constructor(){this.changes=new ke(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,Ct.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?V.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class Im{constructor(t,e,r,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=s}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next(s=>(r=s,this.remoteDocumentCache.getEntry(t,e))).next(s=>(r!==null&&kn(r.mutation,s,qt.empty(),pt.now()),s))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.getLocalViewOfDocuments(t,r,X()).next(()=>r))}getLocalViewOfDocuments(t,e,r=X()){const s=Se();return this.populateOverlays(t,s,e).next(()=>this.computeViews(t,e,s,r).next(o=>{let a=Rn();return o.forEach((u,h)=>{a=a.insert(u,h.overlayedDocument)}),a}))}getOverlayedDocuments(t,e){const r=Se();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,X()))}populateOverlays(t,e,r){const s=[];return r.forEach(o=>{e.has(o)||s.push(o)}),this.documentOverlayCache.getOverlays(t,s).next(o=>{o.forEach((a,u)=>{e.set(a,u)})})}computeViews(t,e,r,s){let o=ne();const a=Dn(),u=function(){return Dn()}();return e.forEach((h,f)=>{const m=r.get(f.key);s.has(f.key)&&(m===void 0||m.mutation instanceof Ne)?o=o.insert(f.key,f):m!==void 0?(a.set(f.key,m.mutation.getFieldMask()),kn(m.mutation,f,m.mutation.getFieldMask(),pt.now())):a.set(f.key,qt.empty())}),this.recalculateAndSaveOverlays(t,o).next(h=>(h.forEach((f,m)=>a.set(f,m)),e.forEach((f,m)=>{var y;return u.set(f,new wm(m,(y=a.get(f))!==null&&y!==void 0?y:null))}),u))}recalculateAndSaveOverlays(t,e){const r=Dn();let s=new ut((a,u)=>a-u),o=X();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(a=>{for(const u of a)u.keys().forEach(h=>{const f=e.get(h);if(f===null)return;let m=r.get(h)||qt.empty();m=u.applyToLocalView(f,m),r.set(h,m);const y=(s.get(u.batchId)||X()).add(h);s=s.insert(u.batchId,y)})}).next(()=>{const a=[],u=s.getReverseIterator();for(;u.hasNext();){const h=u.getNext(),f=h.key,m=h.value,y=wu();m.forEach(T=>{if(!o.has(T)){const I=Su(e.get(T),r.get(T));I!==null&&y.set(T,I),o=o.add(T)}}),a.push(this.documentOverlayCache.saveOverlays(t,f,y))}return V.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,e,r,s){return function(a){return j.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):_u(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,s):this.getDocumentsMatchingCollectionQuery(t,e,r,s)}getNextDocuments(t,e,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,s).next(o=>{const a=s-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,s-o.size):V.resolve(Se());let u=Ln,h=o;return a.next(f=>V.forEach(f,(m,y)=>(u<y.largestBatchId&&(u=y.largestBatchId),o.get(m)?V.resolve():this.remoteDocumentCache.getEntry(t,m).next(T=>{h=h.insert(m,T)}))).next(()=>this.populateOverlays(t,f,o)).next(()=>this.computeViews(t,h,f,X())).next(m=>({batchId:u,changes:Tu(m)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new j(e)).next(r=>{let s=Rn();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(t,e,r,s){const o=e.collectionGroup;let a=Rn();return this.indexManager.getCollectionParents(t,o).next(u=>V.forEach(u,h=>{const f=function(y,T){return new Gn(T,null,y.explicitOrderBy.slice(),y.filters.slice(),y.limit,y.limitType,y.startAt,y.endAt)}(e,h.child(o));return this.getDocumentsMatchingCollectionQuery(t,f,r,s).next(m=>{m.forEach((y,T)=>{a=a.insert(y,T)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(t,e,r,s){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next(a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,o,s))).next(a=>{o.forEach((h,f)=>{const m=f.getKey();a.get(m)===null&&(a=a.insert(m,Ct.newInvalidDocument(m)))});let u=Rn();return a.forEach((h,f)=>{const m=o.get(h);m!==void 0&&kn(m.mutation,f,qt.empty(),pt.now()),Zr(e,f)&&(u=u.insert(h,f))}),u})}}/**
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
 */class Am{constructor(t){this.serializer=t,this.dr=new Map,this.Ar=new Map}getBundleMetadata(t,e){return V.resolve(this.dr.get(e))}saveBundleMetadata(t,e){return this.dr.set(e.id,function(s){return{id:s.id,version:s.version,createTime:Gt(s.createTime)}}(e)),V.resolve()}getNamedQuery(t,e){return V.resolve(this.Ar.get(e))}saveNamedQuery(t,e){return this.Ar.set(e.name,function(s){return{name:s.name,query:dm(s.bundledQuery),readTime:Gt(s.readTime)}}(e)),V.resolve()}}/**
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
 */class bm{constructor(){this.overlays=new ut(j.comparator),this.Rr=new Map}getOverlay(t,e){return V.resolve(this.overlays.get(e))}getOverlays(t,e){const r=Se();return V.forEach(e,s=>this.getOverlay(t,s).next(o=>{o!==null&&r.set(s,o)})).next(()=>r)}saveOverlays(t,e,r){return r.forEach((s,o)=>{this.Et(t,e,o)}),V.resolve()}removeOverlaysForBatchId(t,e,r){const s=this.Rr.get(r);return s!==void 0&&(s.forEach(o=>this.overlays=this.overlays.remove(o)),this.Rr.delete(r)),V.resolve()}getOverlaysForCollection(t,e,r){const s=Se(),o=e.length+1,a=new j(e.child("")),u=this.overlays.getIteratorFrom(a);for(;u.hasNext();){const h=u.getNext().value,f=h.getKey();if(!e.isPrefixOf(f.path))break;f.path.length===o&&h.largestBatchId>r&&s.set(h.getKey(),h)}return V.resolve(s)}getOverlaysForCollectionGroup(t,e,r,s){let o=new ut((f,m)=>f-m);const a=this.overlays.getIterator();for(;a.hasNext();){const f=a.getNext().value;if(f.getKey().getCollectionGroup()===e&&f.largestBatchId>r){let m=o.get(f.largestBatchId);m===null&&(m=Se(),o=o.insert(f.largestBatchId,m)),m.set(f.getKey(),f)}}const u=Se(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach((f,m)=>u.set(f,m)),!(u.size()>=s)););return V.resolve(u)}Et(t,e,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.Rr.get(s.largestBatchId).delete(r.key);this.Rr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new $d(e,r));let o=this.Rr.get(e);o===void 0&&(o=X(),this.Rr.set(e,o)),this.Rr.set(e,o.add(r.key))}}/**
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
 */class Rm{constructor(){this.sessionToken=wt.EMPTY_BYTE_STRING}getSessionToken(t){return V.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,V.resolve()}}/**
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
 */class Ci{constructor(){this.Vr=new gt(_t.mr),this.gr=new gt(_t.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(t,e){const r=new _t(t,e);this.Vr=this.Vr.add(r),this.gr=this.gr.add(r)}yr(t,e){t.forEach(r=>this.addReference(r,e))}removeReference(t,e){this.wr(new _t(t,e))}Sr(t,e){t.forEach(r=>this.removeReference(r,e))}br(t){const e=new j(new at([])),r=new _t(e,t),s=new _t(e,t+1),o=[];return this.gr.forEachInRange([r,s],a=>{this.wr(a),o.push(a.key)}),o}Dr(){this.Vr.forEach(t=>this.wr(t))}wr(t){this.Vr=this.Vr.delete(t),this.gr=this.gr.delete(t)}vr(t){const e=new j(new at([])),r=new _t(e,t),s=new _t(e,t+1);let o=X();return this.gr.forEachInRange([r,s],a=>{o=o.add(a.key)}),o}containsKey(t){const e=new _t(t,0),r=this.Vr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class _t{constructor(t,e){this.key=t,this.Cr=e}static mr(t,e){return j.comparator(t.key,e.key)||W(t.Cr,e.Cr)}static pr(t,e){return W(t.Cr,e.Cr)||j.comparator(t.key,e.key)}}/**
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
 */class Pm{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Fr=1,this.Mr=new gt(_t.mr)}checkEmpty(t){return V.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,s){const o=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new zd(o,e,r,s);this.mutationQueue.push(a);for(const u of s)this.Mr=this.Mr.add(new _t(u.key,o)),this.indexManager.addToCollectionParentIndex(t,u.key.path.popLast());return V.resolve(a)}lookupMutationBatch(t,e){return V.resolve(this.Or(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,s=this.Nr(r),o=s<0?0:s;return V.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return V.resolve(this.mutationQueue.length===0?vi:this.Fr-1)}getAllMutationBatches(t){return V.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new _t(e,0),s=new _t(e,Number.POSITIVE_INFINITY),o=[];return this.Mr.forEachInRange([r,s],a=>{const u=this.Or(a.Cr);o.push(u)}),V.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new gt(W);return e.forEach(s=>{const o=new _t(s,0),a=new _t(s,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([o,a],u=>{r=r.add(u.Cr)})}),V.resolve(this.Br(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,s=r.length+1;let o=r;j.isDocumentKey(o)||(o=o.child(""));const a=new _t(new j(o),0);let u=new gt(W);return this.Mr.forEachWhile(h=>{const f=h.key.path;return!!r.isPrefixOf(f)&&(f.length===s&&(u=u.add(h.Cr)),!0)},a),V.resolve(this.Br(u))}Br(t){const e=[];return t.forEach(r=>{const s=this.Or(r);s!==null&&e.push(s)}),e}removeMutationBatch(t,e){rt(this.Lr(e.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Mr;return V.forEach(e.mutations,s=>{const o=new _t(s.key,e.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.Mr=r})}qn(t){}containsKey(t,e){const r=new _t(e,0),s=this.Mr.firstAfterOrEqual(r);return V.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,V.resolve()}Lr(t,e){return this.Nr(t)}Nr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Or(t){const e=this.Nr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
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
 */class Sm{constructor(t){this.kr=t,this.docs=function(){return new ut(j.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,s=this.docs.get(r),o=s?s.size:0,a=this.kr(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return V.resolve(r?r.document.mutableCopy():Ct.newInvalidDocument(e))}getEntries(t,e){let r=ne();return e.forEach(s=>{const o=this.docs.get(s);r=r.insert(s,o?o.document.mutableCopy():Ct.newInvalidDocument(s))}),V.resolve(r)}getDocumentsMatchingQuery(t,e,r,s){let o=ne();const a=e.path,u=new j(a.child("__id-9223372036854775808__")),h=this.docs.getIteratorFrom(u);for(;h.hasNext();){const{key:f,value:{document:m}}=h.getNext();if(!a.isPrefixOf(f.path))break;f.path.length>a.length+1||sd(rd(m),r)<=0||(s.has(m.key)||Zr(e,m))&&(o=o.insert(m.key,m.mutableCopy()))}return V.resolve(o)}getAllFromCollectionGroup(t,e,r,s){z()}qr(t,e){return V.forEach(this.docs,r=>e(r))}newChangeBuffer(t){return new Cm(this)}getSize(t){return V.resolve(this.size)}}class Cm extends Tm{constructor(t){super(),this.Ir=t}applyChanges(t){const e=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?e.push(this.Ir.addEntry(t,s)):this.Ir.removeEntry(r)}),V.waitFor(e)}getFromCache(t,e){return this.Ir.getEntry(t,e)}getAllFromCache(t,e){return this.Ir.getEntries(t,e)}}/**
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
 */class Vm{constructor(t){this.persistence=t,this.Qr=new ke(e=>Ii(e),Ai),this.lastRemoteSnapshotVersion=$.min(),this.highestTargetId=0,this.$r=0,this.Ur=new Ci,this.targetCount=0,this.Kr=en.Un()}forEachTarget(t,e){return this.Qr.forEach((r,s)=>e(s)),V.resolve()}getLastRemoteSnapshotVersion(t){return V.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return V.resolve(this.$r)}allocateTargetId(t){return this.highestTargetId=this.Kr.next(),V.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.$r&&(this.$r=e),V.resolve()}zn(t){this.Qr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Kr=new en(e),this.highestTargetId=e),t.sequenceNumber>this.$r&&(this.$r=t.sequenceNumber)}addTargetData(t,e){return this.zn(e),this.targetCount+=1,V.resolve()}updateTargetData(t,e){return this.zn(e),V.resolve()}removeTargetData(t,e){return this.Qr.delete(e.target),this.Ur.br(e.targetId),this.targetCount-=1,V.resolve()}removeTargets(t,e,r){let s=0;const o=[];return this.Qr.forEach((a,u)=>{u.sequenceNumber<=e&&r.get(u.targetId)===null&&(this.Qr.delete(a),o.push(this.removeMatchingKeysForTargetId(t,u.targetId)),s++)}),V.waitFor(o).next(()=>s)}getTargetCount(t){return V.resolve(this.targetCount)}getTargetData(t,e){const r=this.Qr.get(e)||null;return V.resolve(r)}addMatchingKeys(t,e,r){return this.Ur.yr(e,r),V.resolve()}removeMatchingKeys(t,e,r){this.Ur.Sr(e,r);const s=this.persistence.referenceDelegate,o=[];return s&&e.forEach(a=>{o.push(s.markPotentiallyOrphaned(t,a))}),V.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.Ur.br(e),V.resolve()}getMatchingKeysForTargetId(t,e){const r=this.Ur.vr(e);return V.resolve(r)}containsKey(t,e){return V.resolve(this.Ur.containsKey(e))}}/**
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
 */class qu{constructor(t,e){this.Wr={},this.overlays={},this.Gr=new Qr(0),this.zr=!1,this.zr=!0,this.jr=new Rm,this.referenceDelegate=t(this),this.Hr=new Vm(this),this.indexManager=new mm,this.remoteDocumentCache=function(s){return new Sm(s)}(r=>this.referenceDelegate.Jr(r)),this.serializer=new fm(e),this.Yr=new Am(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new bm,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.Wr[t.toKey()];return r||(r=new Pm(e,this.referenceDelegate),this.Wr[t.toKey()]=r),r}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(t,e,r){x("MemoryPersistence","Starting transaction:",t);const s=new Dm(this.Gr.next());return this.referenceDelegate.Zr(),r(s).next(o=>this.referenceDelegate.Xr(s).next(()=>o)).toPromise().then(o=>(s.raiseOnCommittedEvent(),o))}ei(t,e){return V.or(Object.values(this.Wr).map(r=>()=>r.containsKey(t,e)))}}class Dm extends od{constructor(t){super(),this.currentSequenceNumber=t}}class Vi{constructor(t){this.persistence=t,this.ti=new Ci,this.ni=null}static ri(t){return new Vi(t)}get ii(){if(this.ni)return this.ni;throw z()}addReference(t,e,r){return this.ti.addReference(r,e),this.ii.delete(r.toString()),V.resolve()}removeReference(t,e,r){return this.ti.removeReference(r,e),this.ii.add(r.toString()),V.resolve()}markPotentiallyOrphaned(t,e){return this.ii.add(e.toString()),V.resolve()}removeTarget(t,e){this.ti.br(e.targetId).forEach(s=>this.ii.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next(s=>{s.forEach(o=>this.ii.add(o.toString()))}).next(()=>r.removeTargetData(t,e))}Zr(){this.ni=new Set}Xr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return V.forEach(this.ii,r=>{const s=j.fromPath(r);return this.si(t,s).next(o=>{o||e.removeEntry(s,$.min())})}).next(()=>(this.ni=null,e.apply(t)))}updateLimboDocument(t,e){return this.si(t,e).next(r=>{r?this.ii.delete(e.toString()):this.ii.add(e.toString())})}Jr(t){return 0}si(t,e){return V.or([()=>V.resolve(this.ti.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.ei(t,e)])}}class zr{constructor(t,e){this.persistence=t,this.oi=new ke(r=>ud(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=vm(this,e)}static ri(t,e){return new zr(t,e)}Zr(){}Xr(t){return V.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}nr(t){const e=this.sr(t);return this.persistence.getTargetCache().getTargetCount(t).next(r=>e.next(s=>r+s))}sr(t){let e=0;return this.rr(t,r=>{e++}).next(()=>e)}rr(t,e){return V.forEach(this.oi,(r,s)=>this.ar(t,r,s).next(o=>o?V.resolve():e(s)))}removeTargets(t,e,r){return this.persistence.getTargetCache().removeTargets(t,e,r)}removeOrphanedDocuments(t,e){let r=0;const s=this.persistence.getRemoteDocumentCache(),o=s.newChangeBuffer();return s.qr(t,a=>this.ar(t,a,e).next(u=>{u||(r++,o.removeEntry(a,$.min()))})).next(()=>o.apply(t)).next(()=>r)}markPotentiallyOrphaned(t,e){return this.oi.set(e,t.currentSequenceNumber),V.resolve()}removeTarget(t,e){const r=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,r)}addReference(t,e,r){return this.oi.set(r,t.currentSequenceNumber),V.resolve()}removeReference(t,e,r){return this.oi.set(r,t.currentSequenceNumber),V.resolve()}updateLimboDocument(t,e){return this.oi.set(e,t.currentSequenceNumber),V.resolve()}Jr(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=br(t.data.value)),e}ar(t,e,r){return V.or([()=>this.persistence.ei(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const s=this.oi.get(e);return V.resolve(s!==void 0&&s>r)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
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
 */class Di{constructor(t,e,r,s){this.targetId=t,this.fromCache=e,this.Hi=r,this.Ji=s}static Yi(t,e){let r=X(),s=X();for(const o of e.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:s=s.add(o.doc.key)}return new Di(t,e.fromCache,r,s)}}/**
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
 */class Nm{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=function(){return Sh()?8:ad(Rh())>0?6:4}()}initialize(t,e){this.ns=t,this.indexManager=e,this.Zi=!0}getDocumentsMatchingQuery(t,e,r,s){const o={result:null};return this.rs(t,e).next(a=>{o.result=a}).next(()=>{if(!o.result)return this.ss(t,e,s,r).next(a=>{o.result=a})}).next(()=>{if(o.result)return;const a=new km;return this._s(t,e,a).next(u=>{if(o.result=u,this.Xi)return this.us(t,e,a,u.size)})}).next(()=>o.result)}us(t,e,r,s){return r.documentReadCount<this.es?(ze()<=Z.DEBUG&&x("QueryEngine","SDK will not create cache indexes for query:",$e(e),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),V.resolve()):(ze()<=Z.DEBUG&&x("QueryEngine","Query:",$e(e),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ts*s?(ze()<=Z.DEBUG&&x("QueryEngine","The SDK decides to create cache indexes for query:",$e(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Kt(e))):V.resolve())}rs(t,e){if(Va(e))return V.resolve(null);let r=Kt(e);return this.indexManager.getIndexType(t,r).next(s=>s===0?null:(e.limit!==null&&s===1&&(e=si(e,null,"F"),r=Kt(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next(o=>{const a=X(...o);return this.ns.getDocuments(t,a).next(u=>this.indexManager.getMinOffset(t,r).next(h=>{const f=this.cs(e,u);return this.ls(e,f,a,h.readTime)?this.rs(t,si(e,null,"F")):this.hs(t,f,e,h)}))})))}ss(t,e,r,s){return Va(e)||s.isEqual($.min())?V.resolve(null):this.ns.getDocuments(t,r).next(o=>{const a=this.cs(e,o);return this.ls(e,a,r,s)?V.resolve(null):(ze()<=Z.DEBUG&&x("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),$e(e)),this.hs(t,a,e,nd(s,Ln)).next(u=>u))})}cs(t,e){let r=new gt(Eu(t));return e.forEach((s,o)=>{Zr(t,o)&&(r=r.add(o))}),r}ls(t,e,r,s){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(s)>0)}_s(t,e,r){return ze()<=Z.DEBUG&&x("QueryEngine","Using full collection scan to execute query:",$e(e)),this.ns.getDocumentsMatchingQuery(t,e,pe.min(),r)}hs(t,e,r,s){return this.ns.getDocumentsMatchingQuery(t,r,s).next(o=>(e.forEach(a=>{o=o.insert(a.key,a)}),o))}}/**
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
 */const ki="LocalStore",Om=3e8;class Mm{constructor(t,e,r,s){this.persistence=t,this.Ps=e,this.serializer=s,this.Ts=new ut(W),this.Is=new ke(o=>Ii(o),Ai),this.Es=new Map,this.ds=t.getRemoteDocumentCache(),this.Hr=t.getTargetCache(),this.Yr=t.getBundleCache(),this.As(r)}As(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Im(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.Ts))}}function Lm(n,t,e,r){return new Mm(n,t,e,r)}async function zu(n,t){const e=H(n);return await e.persistence.runTransaction("Handle user change","readonly",r=>{let s;return e.mutationQueue.getAllMutationBatches(r).next(o=>(s=o,e.As(t),e.mutationQueue.getAllMutationBatches(r))).next(o=>{const a=[],u=[];let h=X();for(const f of s){a.push(f.batchId);for(const m of f.mutations)h=h.add(m.key)}for(const f of o){u.push(f.batchId);for(const m of f.mutations)h=h.add(m.key)}return e.localDocuments.getDocuments(r,h).next(f=>({Rs:f,removedBatchIds:a,addedBatchIds:u}))})})}function Fm(n,t){const e=H(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=t.batch.keys(),o=e.ds.newChangeBuffer({trackRemovals:!0});return function(u,h,f,m){const y=f.batch,T=y.keys();let I=V.resolve();return T.forEach(P=>{I=I.next(()=>m.getEntry(h,P)).next(D=>{const S=f.docVersions.get(P);rt(S!==null),D.version.compareTo(S)<0&&(y.applyToRemoteDocument(D,f),D.isValidDocument()&&(D.setReadTime(f.commitVersion),m.addEntry(D)))})}),I.next(()=>u.mutationQueue.removeMutationBatch(h,y))}(e,r,t,o).next(()=>o.apply(r)).next(()=>e.mutationQueue.performConsistencyCheck(r)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(r,s,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(u){let h=X();for(let f=0;f<u.mutationResults.length;++f)u.mutationResults[f].transformResults.length>0&&(h=h.add(u.batch.mutations[f].key));return h}(t))).next(()=>e.localDocuments.getDocuments(r,s))})}function $u(n){const t=H(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Hr.getLastRemoteSnapshotVersion(e))}function xm(n,t){const e=H(n),r=t.snapshotVersion;let s=e.Ts;return e.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const a=e.ds.newChangeBuffer({trackRemovals:!0});s=e.Ts;const u=[];t.targetChanges.forEach((m,y)=>{const T=s.get(y);if(!T)return;u.push(e.Hr.removeMatchingKeys(o,m.removedDocuments,y).next(()=>e.Hr.addMatchingKeys(o,m.addedDocuments,y)));let I=T.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(y)!==null?I=I.withResumeToken(wt.EMPTY_BYTE_STRING,$.min()).withLastLimboFreeSnapshotVersion($.min()):m.resumeToken.approximateByteSize()>0&&(I=I.withResumeToken(m.resumeToken,r)),s=s.insert(y,I),function(D,S,C){return D.resumeToken.approximateByteSize()===0||S.snapshotVersion.toMicroseconds()-D.snapshotVersion.toMicroseconds()>=Om?!0:C.addedDocuments.size+C.modifiedDocuments.size+C.removedDocuments.size>0}(T,I,m)&&u.push(e.Hr.updateTargetData(o,I))});let h=ne(),f=X();if(t.documentUpdates.forEach(m=>{t.resolvedLimboDocuments.has(m)&&u.push(e.persistence.referenceDelegate.updateLimboDocument(o,m))}),u.push(Um(o,a,t.documentUpdates).next(m=>{h=m.Vs,f=m.fs})),!r.isEqual($.min())){const m=e.Hr.getLastRemoteSnapshotVersion(o).next(y=>e.Hr.setTargetsMetadata(o,o.currentSequenceNumber,r));u.push(m)}return V.waitFor(u).next(()=>a.apply(o)).next(()=>e.localDocuments.getLocalViewOfDocuments(o,h,f)).next(()=>h)}).then(o=>(e.Ts=s,o))}function Um(n,t,e){let r=X(),s=X();return e.forEach(o=>r=r.add(o)),t.getEntries(n,r).next(o=>{let a=ne();return e.forEach((u,h)=>{const f=o.get(u);h.isFoundDocument()!==f.isFoundDocument()&&(s=s.add(u)),h.isNoDocument()&&h.version.isEqual($.min())?(t.removeEntry(u,h.readTime),a=a.insert(u,h)):!f.isValidDocument()||h.version.compareTo(f.version)>0||h.version.compareTo(f.version)===0&&f.hasPendingWrites?(t.addEntry(h),a=a.insert(u,h)):x(ki,"Ignoring outdated watch update for ",u,". Current version:",f.version," Watch version:",h.version)}),{Vs:a,fs:s}})}function Bm(n,t){const e=H(n);return e.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=vi),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function jm(n,t){const e=H(n);return e.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return e.Hr.getTargetData(r,t).next(o=>o?(s=o,V.resolve(s)):e.Hr.allocateTargetId(r).next(a=>(s=new ue(t,a,"TargetPurposeListen",r.currentSequenceNumber),e.Hr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=e.Ts.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(e.Ts=e.Ts.insert(r.targetId,r),e.Is.set(t,r.targetId)),r})}async function ui(n,t,e){const r=H(n),s=r.Ts.get(t),o=e?"readwrite":"readwrite-primary";try{e||await r.persistence.runTransaction("Release target",o,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!ln(a))throw a;x(ki,`Failed to update sequence numbers for target ${t}: ${a}`)}r.Ts=r.Ts.remove(t),r.Is.delete(s.target)}function za(n,t,e){const r=H(n);let s=$.min(),o=X();return r.persistence.runTransaction("Execute query","readwrite",a=>function(h,f,m){const y=H(h),T=y.Is.get(m);return T!==void 0?V.resolve(y.Ts.get(T)):y.Hr.getTargetData(f,m)}(r,a,Kt(t)).next(u=>{if(u)return s=u.lastLimboFreeSnapshotVersion,r.Hr.getMatchingKeysForTargetId(a,u.targetId).next(h=>{o=h})}).next(()=>r.Ps.getDocumentsMatchingQuery(a,t,e?s:$.min(),e?o:X())).next(u=>(qm(r,Sd(t),u),{documents:u,gs:o})))}function qm(n,t,e){let r=n.Es.get(t)||$.min();e.forEach((s,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),n.Es.set(t,r)}class $a{constructor(){this.activeTargetIds=Od()}Ds(t){this.activeTargetIds=this.activeTargetIds.add(t)}vs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}bs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class zm{constructor(){this.ho=new $a,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t,e=!0){return e&&this.ho.Ds(t),this.Po[t]||"not-current"}updateQueryState(t,e,r){this.Po[t]=e}removeLocalQueryTarget(t){this.ho.vs(t)}isLocalQueryTarget(t){return this.ho.activeTargetIds.has(t)}clearQueryState(t){delete this.Po[t]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(t){return this.ho.activeTargetIds.has(t)}start(){return this.ho=new $a,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */const Ha="ConnectivityMonitor";class Ka{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(t){this.Vo.push(t)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){x(Ha,"Network connectivity changed: AVAILABLE");for(const t of this.Vo)t(0)}Ro(){x(Ha,"Network connectivity changed: UNAVAILABLE");for(const t of this.Vo)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const Bs="RestConnection",Hm={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Km{get fo(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.po=e+"://"+t.host,this.yo=`projects/${r}/databases/${s}`,this.wo=this.databaseId.database===Lr?`project_id=${r}`:`project_id=${r}&database_id=${s}`}So(t,e,r,s,o){const a=ci(),u=this.bo(t,e.toUriEncodedString());x(Bs,`Sending RPC '${t}' ${a}:`,u,r);const h={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(h,s,o),this.vo(t,u,h,r).then(f=>(x(Bs,`Received RPC '${t}' ${a}: `,f),f),f=>{throw Ye(Bs,`RPC '${t}' ${a} failed with error: `,f,"url: ",u,"request:",r),f})}Co(t,e,r,s,o,a){return this.So(t,e,r,s,o)}Do(t,e,r){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+on}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach((s,o)=>t[o]=s),r&&r.headers.forEach((s,o)=>t[o]=s)}bo(t,e){const r=Hm[t];return`${this.po}/v1/${e}:${r}`}terminate(){}}/**
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
 */class Gm{constructor(t){this.Fo=t.Fo,this.Mo=t.Mo}xo(t){this.Oo=t}No(t){this.Bo=t}Lo(t){this.ko=t}onMessage(t){this.qo=t}close(){this.Mo()}send(t){this.Fo(t)}Qo(){this.Oo()}$o(){this.Bo()}Uo(t){this.ko(t)}Ko(t){this.qo(t)}}/**
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
 */const Pt="WebChannelConnection";class Wm extends Km{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}vo(t,e,r,s){const o=ci();return new Promise((a,u)=>{const h=new Kl;h.setWithCredentials(!0),h.listenOnce(Gl.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case Ar.NO_ERROR:const m=h.getResponseJson();x(Pt,`XHR for RPC '${t}' ${o} received:`,JSON.stringify(m)),a(m);break;case Ar.TIMEOUT:x(Pt,`RPC '${t}' ${o} timed out`),u(new B(k.DEADLINE_EXCEEDED,"Request time out"));break;case Ar.HTTP_ERROR:const y=h.getStatus();if(x(Pt,`RPC '${t}' ${o} failed with status:`,y,"response text:",h.getResponseText()),y>0){let T=h.getResponseJson();Array.isArray(T)&&(T=T[0]);const I=T==null?void 0:T.error;if(I&&I.status&&I.message){const P=function(S){const C=S.toLowerCase().replace(/_/g,"-");return Object.values(k).indexOf(C)>=0?C:k.UNKNOWN}(I.status);u(new B(P,I.message))}else u(new B(k.UNKNOWN,"Server responded with status "+h.getStatus()))}else u(new B(k.UNAVAILABLE,"Connection failed."));break;default:z()}}finally{x(Pt,`RPC '${t}' ${o} completed.`)}});const f=JSON.stringify(s);x(Pt,`RPC '${t}' ${o} sending request:`,s),h.send(e,"POST",f,r,15)})}Wo(t,e,r){const s=ci(),o=[this.po,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=Xl(),u=Ql(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},f=this.longPollingOptions.timeoutSeconds;f!==void 0&&(h.longPollingTimeout=Math.round(1e3*f)),this.useFetchStreams&&(h.useFetchStreams=!0),this.Do(h.initMessageHeaders,e,r),h.encodeInitMessageHeaders=!0;const m=o.join("");x(Pt,`Creating RPC '${t}' stream ${s}: ${m}`,h);const y=a.createWebChannel(m,h);let T=!1,I=!1;const P=new Gm({Fo:S=>{I?x(Pt,`Not sending because RPC '${t}' stream ${s} is closed:`,S):(T||(x(Pt,`Opening RPC '${t}' stream ${s} transport.`),y.open(),T=!0),x(Pt,`RPC '${t}' stream ${s} sending:`,S),y.send(S))},Mo:()=>y.close()}),D=(S,C,O)=>{S.listen(C,L=>{try{O(L)}catch(Q){setTimeout(()=>{throw Q},0)}})};return D(y,bn.EventType.OPEN,()=>{I||(x(Pt,`RPC '${t}' stream ${s} transport opened.`),P.Qo())}),D(y,bn.EventType.CLOSE,()=>{I||(I=!0,x(Pt,`RPC '${t}' stream ${s} transport closed`),P.Uo())}),D(y,bn.EventType.ERROR,S=>{I||(I=!0,Ye(Pt,`RPC '${t}' stream ${s} transport errored:`,S),P.Uo(new B(k.UNAVAILABLE,"The operation could not be completed")))}),D(y,bn.EventType.MESSAGE,S=>{var C;if(!I){const O=S.data[0];rt(!!O);const L=O,Q=(L==null?void 0:L.error)||((C=L[0])===null||C===void 0?void 0:C.error);if(Q){x(Pt,`RPC '${t}' stream ${s} received error:`,Q);const K=Q.status;let Y=function(p){const v=dt[p];if(v!==void 0)return Du(v)}(K),E=Q.message;Y===void 0&&(Y=k.INTERNAL,E="Unknown error status: "+K+" with message "+Q.message),I=!0,P.Uo(new B(Y,E)),y.close()}else x(Pt,`RPC '${t}' stream ${s} received:`,O),P.Ko(O)}}),D(u,Wl.STAT_EVENT,S=>{S.stat===Ys.PROXY?x(Pt,`RPC '${t}' stream ${s} detected buffering proxy`):S.stat===Ys.NOPROXY&&x(Pt,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{P.$o()},0),P}}function js(){return typeof document<"u"?document:null}/**
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
 */class Hu{constructor(t,e,r=1e3,s=1.5,o=6e4){this.Ti=t,this.timerId=e,this.Go=r,this.zo=s,this.jo=o,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(t){this.cancel();const e=Math.floor(this.Ho+this.e_()),r=Math.max(0,Date.now()-this.Yo),s=Math.max(0,e-r);s>0&&x("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ho} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,s,()=>(this.Yo=Date.now(),t())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
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
 */const Ga="PersistentStream";class Ku{constructor(t,e,r,s,o,a,u,h){this.Ti=t,this.n_=r,this.r_=s,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=u,this.listener=h,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new Hu(t,e)}u_(){return this.state===1||this.state===5||this.c_()}c_(){return this.state===2||this.state===3}start(){this.__=0,this.state!==4?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&this.s_===null&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(t){this.E_(),this.stream.send(t)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(t,e){this.E_(),this.d_(),this.a_.cancel(),this.i_++,t!==4?this.a_.reset():e&&e.code===k.RESOURCE_EXHAUSTED?(ee(e.toString()),ee("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):e&&e.code===k.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.A_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Lo(e)}A_(){}auth(){this.state=1;const t=this.R_(this.i_),e=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.i_===e&&this.V_(r,s)},r=>{t(()=>{const s=new B(k.UNKNOWN,"Fetching auth token failed: "+r.message);return this.m_(s)})})}V_(t,e){const r=this.R_(this.i_);this.stream=this.f_(t,e),this.stream.xo(()=>{r(()=>this.listener.xo())}),this.stream.No(()=>{r(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(s=>{r(()=>this.m_(s))}),this.stream.onMessage(s=>{r(()=>++this.__==1?this.g_(s):this.onNext(s))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(t){return x(Ga,`close with error: ${t}`),this.stream=null,this.close(4,t)}R_(t){return e=>{this.Ti.enqueueAndForget(()=>this.i_===t?e():(x(Ga,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Qm extends Ku{constructor(t,e,r,s,o,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,s,a),this.serializer=o}f_(t,e){return this.connection.Wo("Listen",t,e)}g_(t){return this.onNext(t)}onNext(t){this.a_.reset();const e=em(this.serializer,t),r=function(o){if(!("targetChange"in o))return $.min();const a=o.targetChange;return a.targetIds&&a.targetIds.length?$.min():a.readTime?Gt(a.readTime):$.min()}(t);return this.listener.p_(e,r)}y_(t){const e={};e.database=li(this.serializer),e.addTarget=function(o,a){let u;const h=a.target;if(u=ni(h)?{documents:sm(o,h)}:{query:im(o,h).ht},u.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){u.resumeToken=Ou(o,a.resumeToken);const f=ii(o,a.expectedCount);f!==null&&(u.expectedCount=f)}else if(a.snapshotVersion.compareTo($.min())>0){u.readTime=qr(o,a.snapshotVersion.toTimestamp());const f=ii(o,a.expectedCount);f!==null&&(u.expectedCount=f)}return u}(this.serializer,t);const r=am(this.serializer,t);r&&(e.labels=r),this.I_(e)}w_(t){const e={};e.database=li(this.serializer),e.removeTarget=t,this.I_(e)}}class Xm extends Ku{constructor(t,e,r,s,o,a){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,r,s,a),this.serializer=o}get S_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.S_&&this.b_([])}f_(t,e){return this.connection.Wo("Write",t,e)}g_(t){return rt(!!t.streamToken),this.lastStreamToken=t.streamToken,rt(!t.writeResults||t.writeResults.length===0),this.listener.D_()}onNext(t){rt(!!t.streamToken),this.lastStreamToken=t.streamToken,this.a_.reset();const e=rm(t.writeResults,t.commitTime),r=Gt(t.commitTime);return this.listener.v_(r,e)}C_(){const t={};t.database=li(this.serializer),this.I_(t)}b_(t){const e={streamToken:this.lastStreamToken,writes:t.map(r=>nm(this.serializer,r))};this.I_(e)}}/**
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
 */class Ym{}class Jm extends Ym{constructor(t,e,r,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=s,this.F_=!1}M_(){if(this.F_)throw new B(k.FAILED_PRECONDITION,"The client has already been terminated.")}So(t,e,r,s){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.So(t,oi(e,r),s,o,a)).catch(o=>{throw o.name==="FirebaseError"?(o.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new B(k.UNKNOWN,o.toString())})}Co(t,e,r,s,o){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,u])=>this.connection.Co(t,oi(e,r),s,a,u,o)).catch(a=>{throw a.name==="FirebaseError"?(a.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new B(k.UNKNOWN,a.toString())})}terminate(){this.F_=!0,this.connection.terminate()}}class Zm{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){this.x_===0&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(t){this.state==="Online"?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.L_("Offline")))}set(t){this.Q_(),this.x_=0,t==="Online"&&(this.N_=!1),this.L_(t)}L_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}k_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(ee(e),this.N_=!1):x("OnlineStateTracker",e)}Q_(){this.O_!==null&&(this.O_.cancel(),this.O_=null)}}/**
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
 */const Ve="RemoteStore";class tp{constructor(t,e,r,s,o){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.U_=[],this.K_=new Map,this.W_=new Set,this.G_=[],this.z_=o,this.z_.To(a=>{r.enqueueAndForget(async()=>{Oe(this)&&(x(Ve,"Restarting streams for network reachability change."),await async function(h){const f=H(h);f.W_.add(4),await Xn(f),f.j_.set("Unknown"),f.W_.delete(4),await ss(f)}(this))})}),this.j_=new Zm(r,s)}}async function ss(n){if(Oe(n))for(const t of n.G_)await t(!0)}async function Xn(n){for(const t of n.G_)await t(!1)}function Gu(n,t){const e=H(n);e.K_.has(t.targetId)||(e.K_.set(t.targetId,t),Li(e)?Mi(e):un(e).c_()&&Oi(e,t))}function Ni(n,t){const e=H(n),r=un(e);e.K_.delete(t),r.c_()&&Wu(e,t),e.K_.size===0&&(r.c_()?r.P_():Oe(e)&&e.j_.set("Unknown"))}function Oi(n,t){if(n.H_.Ne(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo($.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}un(n).y_(t)}function Wu(n,t){n.H_.Ne(t),un(n).w_(t)}function Mi(n){n.H_=new Wd({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),lt:t=>n.K_.get(t)||null,it:()=>n.datastore.serializer.databaseId}),un(n).start(),n.j_.B_()}function Li(n){return Oe(n)&&!un(n).u_()&&n.K_.size>0}function Oe(n){return H(n).W_.size===0}function Qu(n){n.H_=void 0}async function ep(n){n.j_.set("Online")}async function np(n){n.K_.forEach((t,e)=>{Oi(n,t)})}async function rp(n,t){Qu(n),Li(n)?(n.j_.q_(t),Mi(n)):n.j_.set("Unknown")}async function sp(n,t,e){if(n.j_.set("Online"),t instanceof Nu&&t.state===2&&t.cause)try{await async function(s,o){const a=o.cause;for(const u of o.targetIds)s.K_.has(u)&&(await s.remoteSyncer.rejectListen(u,a),s.K_.delete(u),s.H_.removeTarget(u))}(n,t)}catch(r){x(Ve,"Failed to remove targets %s: %s ",t.targetIds.join(","),r),await $r(n,r)}else if(t instanceof Sr?n.H_.We(t):t instanceof ku?n.H_.Ze(t):n.H_.je(t),!e.isEqual($.min()))try{const r=await $u(n.localStore);e.compareTo(r)>=0&&await function(o,a){const u=o.H_.ot(a);return u.targetChanges.forEach((h,f)=>{if(h.resumeToken.approximateByteSize()>0){const m=o.K_.get(f);m&&o.K_.set(f,m.withResumeToken(h.resumeToken,a))}}),u.targetMismatches.forEach((h,f)=>{const m=o.K_.get(h);if(!m)return;o.K_.set(h,m.withResumeToken(wt.EMPTY_BYTE_STRING,m.snapshotVersion)),Wu(o,h);const y=new ue(m.target,h,f,m.sequenceNumber);Oi(o,y)}),o.remoteSyncer.applyRemoteEvent(u)}(n,e)}catch(r){x(Ve,"Failed to raise snapshot:",r),await $r(n,r)}}async function $r(n,t,e){if(!ln(t))throw t;n.W_.add(1),await Xn(n),n.j_.set("Offline"),e||(e=()=>$u(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{x(Ve,"Retrying IndexedDB access"),await e(),n.W_.delete(1),await ss(n)})}function Xu(n,t){return t().catch(e=>$r(n,e,t))}async function is(n){const t=H(n),e=Ee(t);let r=t.U_.length>0?t.U_[t.U_.length-1].batchId:vi;for(;ip(t);)try{const s=await Bm(t.localStore,r);if(s===null){t.U_.length===0&&e.P_();break}r=s.batchId,op(t,s)}catch(s){await $r(t,s)}Yu(t)&&Ju(t)}function ip(n){return Oe(n)&&n.U_.length<10}function op(n,t){n.U_.push(t);const e=Ee(n);e.c_()&&e.S_&&e.b_(t.mutations)}function Yu(n){return Oe(n)&&!Ee(n).u_()&&n.U_.length>0}function Ju(n){Ee(n).start()}async function ap(n){Ee(n).C_()}async function lp(n){const t=Ee(n);for(const e of n.U_)t.b_(e.mutations)}async function up(n,t,e){const r=n.U_.shift(),s=Ri.from(r,t,e);await Xu(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await is(n)}async function cp(n,t){t&&Ee(n).S_&&await async function(r,s){if(function(a){return Kd(a)&&a!==k.ABORTED}(s.code)){const o=r.U_.shift();Ee(r).h_(),await Xu(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,s)),await is(r)}}(n,t),Yu(n)&&Ju(n)}async function Wa(n,t){const e=H(n);e.asyncQueue.verifyOperationInProgress(),x(Ve,"RemoteStore received new credentials");const r=Oe(e);e.W_.add(3),await Xn(e),r&&e.j_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.W_.delete(3),await ss(e)}async function hp(n,t){const e=H(n);t?(e.W_.delete(2),await ss(e)):t||(e.W_.add(2),await Xn(e),e.j_.set("Unknown"))}function un(n){return n.J_||(n.J_=function(e,r,s){const o=H(e);return o.M_(),new Qm(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(n.datastore,n.asyncQueue,{xo:ep.bind(null,n),No:np.bind(null,n),Lo:rp.bind(null,n),p_:sp.bind(null,n)}),n.G_.push(async t=>{t?(n.J_.h_(),Li(n)?Mi(n):n.j_.set("Unknown")):(await n.J_.stop(),Qu(n))})),n.J_}function Ee(n){return n.Y_||(n.Y_=function(e,r,s){const o=H(e);return o.M_(),new Xm(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(n.datastore,n.asyncQueue,{xo:()=>Promise.resolve(),No:ap.bind(null,n),Lo:cp.bind(null,n),D_:lp.bind(null,n),v_:up.bind(null,n)}),n.G_.push(async t=>{t?(n.Y_.h_(),await is(n)):(await n.Y_.stop(),n.U_.length>0&&(x(Ve,`Stopping write stream with ${n.U_.length} pending writes`),n.U_=[]))})),n.Y_}/**
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
 */class Fi{constructor(t,e,r,s,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=s,this.removalCallback=o,this.deferred=new de,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,s,o){const a=Date.now()+r,u=new Fi(t,e,a,s,o);return u.start(r),u}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new B(k.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function xi(n,t){if(ee("AsyncQueue",`${t}: ${n}`),ln(n))return new B(k.UNAVAILABLE,`${t}: ${n}`);throw n}/**
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
 */class Qe{static emptySet(t){return new Qe(t.comparator)}constructor(t){this.comparator=t?(e,r)=>t(e,r)||j.comparator(e.key,r.key):(e,r)=>j.comparator(e.key,r.key),this.keyedMap=Rn(),this.sortedSet=new ut(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,r)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Qe)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=r.getNext().key;if(!s.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
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
 */class Qa{constructor(){this.Z_=new ut(j.comparator)}track(t){const e=t.doc.key,r=this.Z_.get(e);r?t.type!==0&&r.type===3?this.Z_=this.Z_.insert(e,t):t.type===3&&r.type!==1?this.Z_=this.Z_.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.Z_=this.Z_.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.Z_=this.Z_.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.Z_=this.Z_.remove(e):t.type===1&&r.type===2?this.Z_=this.Z_.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.Z_=this.Z_.insert(e,{type:2,doc:t.doc}):z():this.Z_=this.Z_.insert(e,t)}X_(){const t=[];return this.Z_.inorderTraversal((e,r)=>{t.push(r)}),t}}class nn{constructor(t,e,r,s,o,a,u,h,f){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=o,this.fromCache=a,this.syncStateChanged=u,this.excludesMetadataChanges=h,this.hasCachedResults=f}static fromInitialDocuments(t,e,r,s,o){const a=[];return e.forEach(u=>{a.push({type:0,doc:u})}),new nn(t,e,Qe.emptySet(e),a,r,s,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Jr(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let s=0;s<e.length;s++)if(e[s].type!==r[s].type||!e[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class fp{constructor(){this.ea=void 0,this.ta=[]}na(){return this.ta.some(t=>t.ra())}}class dp{constructor(){this.queries=Xa(),this.onlineState="Unknown",this.ia=new Set}terminate(){(function(e,r){const s=H(e),o=s.queries;s.queries=Xa(),o.forEach((a,u)=>{for(const h of u.ta)h.onError(r)})})(this,new B(k.ABORTED,"Firestore shutting down"))}}function Xa(){return new ke(n=>yu(n),Jr)}async function mp(n,t){const e=H(n);let r=3;const s=t.query;let o=e.queries.get(s);o?!o.na()&&t.ra()&&(r=2):(o=new fp,r=t.ra()?0:1);try{switch(r){case 0:o.ea=await e.onListen(s,!0);break;case 1:o.ea=await e.onListen(s,!1);break;case 2:await e.onFirstRemoteStoreListen(s)}}catch(a){const u=xi(a,`Initialization of query '${$e(t.query)}' failed`);return void t.onError(u)}e.queries.set(s,o),o.ta.push(t),t.sa(e.onlineState),o.ea&&t.oa(o.ea)&&Ui(e)}async function pp(n,t){const e=H(n),r=t.query;let s=3;const o=e.queries.get(r);if(o){const a=o.ta.indexOf(t);a>=0&&(o.ta.splice(a,1),o.ta.length===0?s=t.ra()?0:1:!o.na()&&t.ra()&&(s=2))}switch(s){case 0:return e.queries.delete(r),e.onUnlisten(r,!0);case 1:return e.queries.delete(r),e.onUnlisten(r,!1);case 2:return e.onLastRemoteStoreUnlisten(r);default:return}}function gp(n,t){const e=H(n);let r=!1;for(const s of t){const o=s.query,a=e.queries.get(o);if(a){for(const u of a.ta)u.oa(s)&&(r=!0);a.ea=s}}r&&Ui(e)}function _p(n,t,e){const r=H(n),s=r.queries.get(t);if(s)for(const o of s.ta)o.onError(e);r.queries.delete(t)}function Ui(n){n.ia.forEach(t=>{t.next()})}var hi,Ya;(Ya=hi||(hi={}))._a="default",Ya.Cache="cache";class yp{constructor(t,e,r){this.query=t,this.aa=e,this.ua=!1,this.ca=null,this.onlineState="Unknown",this.options=r||{}}oa(t){if(!this.options.includeMetadataChanges){const r=[];for(const s of t.docChanges)s.type!==3&&r.push(s);t=new nn(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.ua?this.la(t)&&(this.aa.next(t),e=!0):this.ha(t,this.onlineState)&&(this.Pa(t),e=!0),this.ca=t,e}onError(t){this.aa.error(t)}sa(t){this.onlineState=t;let e=!1;return this.ca&&!this.ua&&this.ha(this.ca,t)&&(this.Pa(this.ca),e=!0),e}ha(t,e){if(!t.fromCache||!this.ra())return!0;const r=e!=="Offline";return(!this.options.Ta||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}la(t){if(t.docChanges.length>0)return!0;const e=this.ca&&this.ca.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}Pa(t){t=nn.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.ua=!0,this.aa.next(t)}ra(){return this.options.source!==hi.Cache}}/**
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
 */class Zu{constructor(t){this.key=t}}class tc{constructor(t){this.key=t}}class Ep{constructor(t,e){this.query=t,this.fa=e,this.ga=null,this.hasCachedResults=!1,this.current=!1,this.pa=X(),this.mutatedKeys=X(),this.ya=Eu(t),this.wa=new Qe(this.ya)}get Sa(){return this.fa}ba(t,e){const r=e?e.Da:new Qa,s=e?e.wa:this.wa;let o=e?e.mutatedKeys:this.mutatedKeys,a=s,u=!1;const h=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,f=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((m,y)=>{const T=s.get(m),I=Zr(this.query,y)?y:null,P=!!T&&this.mutatedKeys.has(T.key),D=!!I&&(I.hasLocalMutations||this.mutatedKeys.has(I.key)&&I.hasCommittedMutations);let S=!1;T&&I?T.data.isEqual(I.data)?P!==D&&(r.track({type:3,doc:I}),S=!0):this.va(T,I)||(r.track({type:2,doc:I}),S=!0,(h&&this.ya(I,h)>0||f&&this.ya(I,f)<0)&&(u=!0)):!T&&I?(r.track({type:0,doc:I}),S=!0):T&&!I&&(r.track({type:1,doc:T}),S=!0,(h||f)&&(u=!0)),S&&(I?(a=a.add(I),o=D?o.add(m):o.delete(m)):(a=a.delete(m),o=o.delete(m)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const m=this.query.limitType==="F"?a.last():a.first();a=a.delete(m.key),o=o.delete(m.key),r.track({type:1,doc:m})}return{wa:a,Da:r,ls:u,mutatedKeys:o}}va(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r,s){const o=this.wa;this.wa=t.wa,this.mutatedKeys=t.mutatedKeys;const a=t.Da.X_();a.sort((m,y)=>function(I,P){const D=S=>{switch(S){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return z()}};return D(I)-D(P)}(m.type,y.type)||this.ya(m.doc,y.doc)),this.Ca(r),s=s!=null&&s;const u=e&&!s?this.Fa():[],h=this.pa.size===0&&this.current&&!s?1:0,f=h!==this.ga;return this.ga=h,a.length!==0||f?{snapshot:new nn(this.query,t.wa,o,a,t.mutatedKeys,h===0,f,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ma:u}:{Ma:u}}sa(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({wa:this.wa,Da:new Qa,mutatedKeys:this.mutatedKeys,ls:!1},!1)):{Ma:[]}}xa(t){return!this.fa.has(t)&&!!this.wa.has(t)&&!this.wa.get(t).hasLocalMutations}Ca(t){t&&(t.addedDocuments.forEach(e=>this.fa=this.fa.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.fa=this.fa.delete(e)),this.current=t.current)}Fa(){if(!this.current)return[];const t=this.pa;this.pa=X(),this.wa.forEach(r=>{this.xa(r.key)&&(this.pa=this.pa.add(r.key))});const e=[];return t.forEach(r=>{this.pa.has(r)||e.push(new tc(r))}),this.pa.forEach(r=>{t.has(r)||e.push(new Zu(r))}),e}Oa(t){this.fa=t.gs,this.pa=X();const e=this.ba(t.documents);return this.applyChanges(e,!0)}Na(){return nn.fromInitialDocuments(this.query,this.wa,this.mutatedKeys,this.ga===0,this.hasCachedResults)}}const Bi="SyncEngine";class vp{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}}class Tp{constructor(t){this.key=t,this.Ba=!1}}class wp{constructor(t,e,r,s,o,a){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=s,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.La={},this.ka=new ke(u=>yu(u),Jr),this.qa=new Map,this.Qa=new Set,this.$a=new ut(j.comparator),this.Ua=new Map,this.Ka=new Ci,this.Wa={},this.Ga=new Map,this.za=en.Kn(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return this.ja===!0}}async function Ip(n,t,e=!0){const r=oc(n);let s;const o=r.ka.get(t);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),s=o.view.Na()):s=await ec(r,t,e,!0),s}async function Ap(n,t){const e=oc(n);await ec(e,t,!0,!1)}async function ec(n,t,e,r){const s=await jm(n.localStore,Kt(t)),o=s.targetId,a=n.sharedClientState.addLocalQueryTarget(o,e);let u;return r&&(u=await bp(n,t,o,a==="current",s.resumeToken)),n.isPrimaryClient&&e&&Gu(n.remoteStore,s),u}async function bp(n,t,e,r,s){n.Ha=(y,T,I)=>async function(D,S,C,O){let L=S.view.ba(C);L.ls&&(L=await za(D.localStore,S.query,!1).then(({documents:E})=>S.view.ba(E,L)));const Q=O&&O.targetChanges.get(S.targetId),K=O&&O.targetMismatches.get(S.targetId)!=null,Y=S.view.applyChanges(L,D.isPrimaryClient,Q,K);return Za(D,S.targetId,Y.Ma),Y.snapshot}(n,y,T,I);const o=await za(n.localStore,t,!0),a=new Ep(t,o.gs),u=a.ba(o.documents),h=Qn.createSynthesizedTargetChangeForCurrentChange(e,r&&n.onlineState!=="Offline",s),f=a.applyChanges(u,n.isPrimaryClient,h);Za(n,e,f.Ma);const m=new vp(t,e,a);return n.ka.set(t,m),n.qa.has(e)?n.qa.get(e).push(t):n.qa.set(e,[t]),f.snapshot}async function Rp(n,t,e){const r=H(n),s=r.ka.get(t),o=r.qa.get(s.targetId);if(o.length>1)return r.qa.set(s.targetId,o.filter(a=>!Jr(a,t))),void r.ka.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await ui(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),e&&Ni(r.remoteStore,s.targetId),fi(r,s.targetId)}).catch(an)):(fi(r,s.targetId),await ui(r.localStore,s.targetId,!0))}async function Pp(n,t){const e=H(n),r=e.ka.get(t),s=e.qa.get(r.targetId);e.isPrimaryClient&&s.length===1&&(e.sharedClientState.removeLocalQueryTarget(r.targetId),Ni(e.remoteStore,r.targetId))}async function Sp(n,t,e){const r=Mp(n);try{const s=await function(a,u){const h=H(a),f=pt.now(),m=u.reduce((I,P)=>I.add(P.key),X());let y,T;return h.persistence.runTransaction("Locally write mutations","readwrite",I=>{let P=ne(),D=X();return h.ds.getEntries(I,m).next(S=>{P=S,P.forEach((C,O)=>{O.isValidDocument()||(D=D.add(C))})}).next(()=>h.localDocuments.getOverlayedDocuments(I,P)).next(S=>{y=S;const C=[];for(const O of u){const L=jd(O,y.get(O.key).overlayedDocument);L!=null&&C.push(new Ne(O.key,L,uu(L.value.mapValue),Zt.exists(!0)))}return h.mutationQueue.addMutationBatch(I,f,C,u)}).next(S=>{T=S;const C=S.applyToLocalDocumentSet(y,D);return h.documentOverlayCache.saveOverlays(I,S.batchId,C)})}).then(()=>({batchId:T.batchId,changes:Tu(y)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(s.batchId),function(a,u,h){let f=a.Wa[a.currentUser.toKey()];f||(f=new ut(W)),f=f.insert(u,h),a.Wa[a.currentUser.toKey()]=f}(r,s.batchId,e),await Yn(r,s.changes),await is(r.remoteStore)}catch(s){const o=xi(s,"Failed to persist write");e.reject(o)}}async function nc(n,t){const e=H(n);try{const r=await xm(e.localStore,t);t.targetChanges.forEach((s,o)=>{const a=e.Ua.get(o);a&&(rt(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?a.Ba=!0:s.modifiedDocuments.size>0?rt(a.Ba):s.removedDocuments.size>0&&(rt(a.Ba),a.Ba=!1))}),await Yn(e,r,t)}catch(r){await an(r)}}function Ja(n,t,e){const r=H(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const s=[];r.ka.forEach((o,a)=>{const u=a.view.sa(t);u.snapshot&&s.push(u.snapshot)}),function(a,u){const h=H(a);h.onlineState=u;let f=!1;h.queries.forEach((m,y)=>{for(const T of y.ta)T.sa(u)&&(f=!0)}),f&&Ui(h)}(r.eventManager,t),s.length&&r.La.p_(s),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function Cp(n,t,e){const r=H(n);r.sharedClientState.updateQueryState(t,"rejected",e);const s=r.Ua.get(t),o=s&&s.key;if(o){let a=new ut(j.comparator);a=a.insert(o,Ct.newNoDocument(o,$.min()));const u=X().add(o),h=new ns($.min(),new Map,new ut(W),a,u);await nc(r,h),r.$a=r.$a.remove(o),r.Ua.delete(t),ji(r)}else await ui(r.localStore,t,!1).then(()=>fi(r,t,e)).catch(an)}async function Vp(n,t){const e=H(n),r=t.batch.batchId;try{const s=await Fm(e.localStore,t);sc(e,r,null),rc(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await Yn(e,s)}catch(s){await an(s)}}async function Dp(n,t,e){const r=H(n);try{const s=await function(a,u){const h=H(a);return h.persistence.runTransaction("Reject batch","readwrite-primary",f=>{let m;return h.mutationQueue.lookupMutationBatch(f,u).next(y=>(rt(y!==null),m=y.keys(),h.mutationQueue.removeMutationBatch(f,y))).next(()=>h.mutationQueue.performConsistencyCheck(f)).next(()=>h.documentOverlayCache.removeOverlaysForBatchId(f,m,u)).next(()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(f,m)).next(()=>h.localDocuments.getDocuments(f,m))})}(r.localStore,t);sc(r,t,e),rc(r,t),r.sharedClientState.updateMutationState(t,"rejected",e),await Yn(r,s)}catch(s){await an(s)}}function rc(n,t){(n.Ga.get(t)||[]).forEach(e=>{e.resolve()}),n.Ga.delete(t)}function sc(n,t,e){const r=H(n);let s=r.Wa[r.currentUser.toKey()];if(s){const o=s.get(t);o&&(e?o.reject(e):o.resolve(),s=s.remove(t)),r.Wa[r.currentUser.toKey()]=s}}function fi(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const r of n.qa.get(t))n.ka.delete(r),e&&n.La.Ja(r,e);n.qa.delete(t),n.isPrimaryClient&&n.Ka.br(t).forEach(r=>{n.Ka.containsKey(r)||ic(n,r)})}function ic(n,t){n.Qa.delete(t.path.canonicalString());const e=n.$a.get(t);e!==null&&(Ni(n.remoteStore,e),n.$a=n.$a.remove(t),n.Ua.delete(e),ji(n))}function Za(n,t,e){for(const r of e)r instanceof Zu?(n.Ka.addReference(r.key,t),kp(n,r)):r instanceof tc?(x(Bi,"Document no longer in limbo: "+r.key),n.Ka.removeReference(r.key,t),n.Ka.containsKey(r.key)||ic(n,r.key)):z()}function kp(n,t){const e=t.key,r=e.path.canonicalString();n.$a.get(e)||n.Qa.has(r)||(x(Bi,"New document in limbo: "+e),n.Qa.add(r),ji(n))}function ji(n){for(;n.Qa.size>0&&n.$a.size<n.maxConcurrentLimboResolutions;){const t=n.Qa.values().next().value;n.Qa.delete(t);const e=new j(at.fromString(t)),r=n.za.next();n.Ua.set(r,new Tp(e)),n.$a=n.$a.insert(e,r),Gu(n.remoteStore,new ue(Kt(gu(e.path)),r,"TargetPurposeLimboResolution",Qr.ae))}}async function Yn(n,t,e){const r=H(n),s=[],o=[],a=[];r.ka.isEmpty()||(r.ka.forEach((u,h)=>{a.push(r.Ha(h,t,e).then(f=>{var m;if((f||e)&&r.isPrimaryClient){const y=f?!f.fromCache:(m=e==null?void 0:e.targetChanges.get(h.targetId))===null||m===void 0?void 0:m.current;r.sharedClientState.updateQueryState(h.targetId,y?"current":"not-current")}if(f){s.push(f);const y=Di.Yi(h.targetId,f);o.push(y)}}))}),await Promise.all(a),r.La.p_(s),await async function(h,f){const m=H(h);try{await m.persistence.runTransaction("notifyLocalViewChanges","readwrite",y=>V.forEach(f,T=>V.forEach(T.Hi,I=>m.persistence.referenceDelegate.addReference(y,T.targetId,I)).next(()=>V.forEach(T.Ji,I=>m.persistence.referenceDelegate.removeReference(y,T.targetId,I)))))}catch(y){if(!ln(y))throw y;x(ki,"Failed to update sequence numbers: "+y)}for(const y of f){const T=y.targetId;if(!y.fromCache){const I=m.Ts.get(T),P=I.snapshotVersion,D=I.withLastLimboFreeSnapshotVersion(P);m.Ts=m.Ts.insert(T,D)}}}(r.localStore,o))}async function Np(n,t){const e=H(n);if(!e.currentUser.isEqual(t)){x(Bi,"User change. New user:",t.toKey());const r=await zu(e.localStore,t);e.currentUser=t,function(o,a){o.Ga.forEach(u=>{u.forEach(h=>{h.reject(new B(k.CANCELLED,a))})}),o.Ga.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await Yn(e,r.Rs)}}function Op(n,t){const e=H(n),r=e.Ua.get(t);if(r&&r.Ba)return X().add(r.key);{let s=X();const o=e.qa.get(t);if(!o)return s;for(const a of o){const u=e.ka.get(a);s=s.unionWith(u.view.Sa)}return s}}function oc(n){const t=H(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=nc.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Op.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Cp.bind(null,t),t.La.p_=gp.bind(null,t.eventManager),t.La.Ja=_p.bind(null,t.eventManager),t}function Mp(n){const t=H(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Vp.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Dp.bind(null,t),t}class Hr{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=rs(t.databaseInfo.databaseId),this.sharedClientState=this.Za(t),this.persistence=this.Xa(t),await this.persistence.start(),this.localStore=this.eu(t),this.gcScheduler=this.tu(t,this.localStore),this.indexBackfillerScheduler=this.nu(t,this.localStore)}tu(t,e){return null}nu(t,e){return null}eu(t){return Lm(this.persistence,new Nm,t.initialUser,this.serializer)}Xa(t){return new qu(Vi.ri,this.serializer)}Za(t){return new zm}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Hr.provider={build:()=>new Hr};class Lp extends Hr{constructor(t){super(),this.cacheSizeBytes=t}tu(t,e){rt(this.persistence.referenceDelegate instanceof zr);const r=this.persistence.referenceDelegate.garbageCollector;return new ym(r,t.asyncQueue,e)}Xa(t){const e=this.cacheSizeBytes!==void 0?Ot.withCacheSize(this.cacheSizeBytes):Ot.DEFAULT;return new qu(r=>zr.ri(r,e),this.serializer)}}class di{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Ja(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Np.bind(null,this.syncEngine),await hp(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new dp}()}createDatastore(t){const e=rs(t.databaseInfo.databaseId),r=function(o){return new Wm(o)}(t.databaseInfo);return function(o,a,u,h){return new Jm(o,a,u,h)}(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return function(r,s,o,a,u){return new tp(r,s,o,a,u)}(this.localStore,this.datastore,t.asyncQueue,e=>Ja(this.syncEngine,e,0),function(){return Ka.D()?new Ka:new $m}())}createSyncEngine(t,e){return function(s,o,a,u,h,f,m){const y=new wp(s,o,a,u,h,f);return m&&(y.ja=!0),y}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(s){const o=H(s);x(Ve,"RemoteStore shutting down."),o.W_.add(5),await Xn(o),o.z_.shutdown(),o.j_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}di.provider={build:()=>new di};/**
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
 */const ve="FirestoreClient";class xp{constructor(t,e,r,s,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=s,this.user=St.UNAUTHENTICATED,this.clientId=Zl.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,async a=>{x(ve,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(x(ve,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new de;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=xi(e,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function qs(n,t){n.asyncQueue.verifyOperationInProgress(),x(ve,"Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await zu(t.localStore,s),r=s)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function tl(n,t){n.asyncQueue.verifyOperationInProgress();const e=await Up(n);x(ve,"Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(r=>Wa(t.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>Wa(t.remoteStore,s)),n._onlineComponents=t}async function Up(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){x(ve,"Using user provided OfflineComponentProvider");try{await qs(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(s){return s.name==="FirebaseError"?s.code===k.FAILED_PRECONDITION||s.code===k.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(e))throw e;Ye("Error using user provided cache. Falling back to memory cache: "+e),await qs(n,new Hr)}}else x(ve,"Using default OfflineComponentProvider"),await qs(n,new Lp(void 0));return n._offlineComponents}async function ac(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(x(ve,"Using user provided OnlineComponentProvider"),await tl(n,n._uninitializedComponentsProvider._online)):(x(ve,"Using default OnlineComponentProvider"),await tl(n,new di))),n._onlineComponents}function Bp(n){return ac(n).then(t=>t.syncEngine)}async function jp(n){const t=await ac(n),e=t.eventManager;return e.onListen=Ip.bind(null,t.syncEngine),e.onUnlisten=Rp.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=Ap.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=Pp.bind(null,t.syncEngine),e}function qp(n,t,e={}){const r=new de;return n.asyncQueue.enqueueAndForget(async()=>function(o,a,u,h,f){const m=new Fp({next:T=>{m.su(),a.enqueueAndForget(()=>pp(o,y)),T.fromCache&&h.source==="server"?f.reject(new B(k.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):f.resolve(T)},error:T=>f.reject(T)}),y=new yp(u,m,{includeMetadataChanges:!0,Ta:!0});return mp(o,y)}(await jp(n),n.asyncQueue,t,e,r)),r.promise}/**
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
 */function uc(n,t,e){if(!e)throw new B(k.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function zp(n,t,e,r){if(t===!0&&r===!0)throw new B(k.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function nl(n){if(!j.isDocumentKey(n))throw new B(k.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function rl(n){if(j.isDocumentKey(n))throw new B(k.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function os(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":z()}function Kr(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new B(k.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=os(n);throw new B(k.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
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
 */const cc="firestore.googleapis.com",sl=!0;class il{constructor(t){var e,r;if(t.host===void 0){if(t.ssl!==void 0)throw new B(k.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=cc,this.ssl=sl}else this.host=t.host,this.ssl=(e=t.ssl)!==null&&e!==void 0?e:sl;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=ju;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<gm)throw new B(k.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}zp("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=lc((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new B(k.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new B(k.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new B(k.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class as{constructor(t,e,r,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new il({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new B(k.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new B(k.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new il(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Gf;switch(r.type){case"firstParty":return new Yf(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new B(k.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const r=el.get(e);r&&(x("ComponentProvider","Removing Datastore"),el.delete(e),r.terminate())}(this),Promise.resolve()}}function $p(n,t,e,r={}){var s;const o=(n=Kr(n,as))._getSettings(),a=Object.assign(Object.assign({},o),{emulatorOptions:n._getEmulatorOptions()}),u=`${t}:${e}`;o.host!==cc&&o.host!==u&&Ye("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const h=Object.assign(Object.assign({},o),{host:u,ssl:!1,emulatorOptions:r});if(!kr(h,a)&&(n._setSettings(h),r.mockUserToken)){let f,m;if(typeof r.mockUserToken=="string")f=r.mockUserToken,m=St.MOCK_USER;else{f=bh(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const y=r.mockUserToken.sub||r.mockUserToken.user_id;if(!y)throw new B(k.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");m=new St(y)}n._authCredentials=new Wf(new Yl(f,m))}}/**
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
 */class cn{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new cn(this.firestore,t,this._query)}}class Ft{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new me(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Ft(this.firestore,t,this._key)}}class me extends cn{constructor(t,e,r){super(t,e,gu(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Ft(this.firestore,null,new j(t))}withConverter(t){return new me(this.firestore,t,this._path)}}function hc(n,t,...e){if(n=Xe(n),uc("collection","path",t),n instanceof as){const r=at.fromString(t,...e);return rl(r),new me(n,null,r)}{if(!(n instanceof Ft||n instanceof me))throw new B(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(at.fromString(t,...e));return rl(r),new me(n.firestore,null,r)}}function Hp(n,t,...e){if(n=Xe(n),arguments.length===1&&(t=Zl.newId()),uc("doc","path",t),n instanceof as){const r=at.fromString(t,...e);return nl(r),new Ft(n,null,new j(r))}{if(!(n instanceof Ft||n instanceof me))throw new B(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(at.fromString(t,...e));return nl(r),new Ft(n.firestore,n instanceof me?n.converter:null,new j(r))}}/**
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
 */const ol="AsyncQueue";class al{constructor(t=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new Hu(this,"async_queue_retry"),this.Su=()=>{const r=js();r&&x(ol,"Visibility state changed to "+r.visibilityState),this.a_.t_()},this.bu=t;const e=js();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Su)}get isShuttingDown(){return this.mu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Du(),this.vu(t)}enterRestrictedMode(t){if(!this.mu){this.mu=!0,this.yu=t||!1;const e=js();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.Su)}}enqueue(t){if(this.Du(),this.mu)return new Promise(()=>{});const e=new de;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Vu.push(t),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(t){if(!ln(t))throw t;x(ol,"Operation failed with retryable error: "+t)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(t){const e=this.bu.then(()=>(this.pu=!0,t().catch(r=>{this.gu=r,this.pu=!1;const s=function(a){let u=a.message||"";return a.stack&&(u=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),u}(r);throw ee("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.pu=!1,r))));return this.bu=e,e}enqueueAfterDelay(t,e,r){this.Du(),this.wu.indexOf(t)>-1&&(e=0);const s=Fi.createAndSchedule(this,t,e,r,o=>this.Fu(o));return this.fu.push(s),s}Du(){this.gu&&z()}verifyOperationInProgress(){}async Mu(){let t;do t=this.bu,await t;while(t!==this.bu)}xu(t){for(const e of this.fu)if(e.timerId===t)return!0;return!1}Ou(t){return this.Mu().then(()=>{this.fu.sort((e,r)=>e.targetTimeMs-r.targetTimeMs);for(const e of this.fu)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.Mu()})}Nu(t){this.wu.push(t)}Fu(t){const e=this.fu.indexOf(t);this.fu.splice(e,1)}}class qi extends as{constructor(t,e,r,s){super(t,e,r,s),this.type="firestore",this._queue=new al,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new al(t),this._firestoreClient=void 0,await t}}}function Kp(n,t){const e=typeof n=="object"?n:Lf(),r=typeof n=="string"?n:Lr,s=Df(e,"firestore").getImmediate({identifier:r});if(!s._initialized){const o=Ih("firestore");o&&$p(s,...o)}return s}function fc(n){if(n._terminated)throw new B(k.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Gp(n),n._firestoreClient}function Gp(n){var t,e,r;const s=n._freezeSettings(),o=function(u,h,f,m){return new fd(u,h,f,m.host,m.ssl,m.experimentalForceLongPolling,m.experimentalAutoDetectLongPolling,lc(m.experimentalLongPollingOptions),m.useFetchStreams)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((e=s.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new xp(n._authCredentials,n._appCheckCredentials,n._queue,o,n._componentsProvider&&function(u){const h=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(h),_online:h}}(n._componentsProvider))}/**
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
 */class rn{constructor(t){this._byteString=t}static fromBase64String(t){try{return new rn(wt.fromBase64String(t))}catch(e){throw new B(k.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new rn(wt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class zi{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new B(k.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Tt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class $i{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new B(k.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new B(k.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return W(this._lat,t._lat)||W(this._long,t._long)}}/**
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
 */const Wp=/^__.*__$/;class Qp{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return this.fieldMask!==null?new Ne(t,this.data,this.fieldMask,e,this.fieldTransforms):new Wn(t,this.data,e,this.fieldTransforms)}}function mc(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw z()}}class Ki{constructor(t,e,r,s,o,a){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=s,o===void 0&&this.Bu(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(t){return new Ki(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.ku({path:r,Qu:!1});return s.$u(t),s}Uu(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.ku({path:r,Qu:!1});return s.Bu(),s}Ku(t){return this.ku({path:void 0,Qu:!0})}Wu(t){return Gr(t,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}Bu(){if(this.path)for(let t=0;t<this.path.length;t++)this.$u(this.path.get(t))}$u(t){if(t.length===0)throw this.Wu("Document fields must not be empty");if(mc(this.Lu)&&Wp.test(t))throw this.Wu('Document fields cannot begin and end with "__"')}}class Xp{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||rs(t)}ju(t,e,r,s=!1){return new Ki({Lu:t,methodName:e,zu:r,path:Tt.emptyPath(),Qu:!1,Gu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function pc(n){const t=n._freezeSettings(),e=rs(n._databaseId);return new Xp(n._databaseId,!!t.ignoreUndefinedProperties,e)}function Yp(n,t,e,r,s,o={}){const a=n.ju(o.merge||o.mergeFields?2:0,t,e,s);yc("Data must be an object, but it was:",a,r);const u=gc(r,a);let h,f;if(o.merge)h=new qt(a.fieldMask),f=a.fieldTransforms;else if(o.mergeFields){const m=[];for(const y of o.mergeFields){const T=Zp(t,y,e);if(!a.contains(T))throw new B(k.INVALID_ARGUMENT,`Field '${T}' is specified in your field mask but missing from your input data.`);eg(m,T)||m.push(T)}h=new qt(m),f=a.fieldTransforms.filter(y=>h.covers(y.field))}else h=null,f=a.fieldTransforms;return new Qp(new Lt(u),h,f)}function Jp(n,t,e,r=!1){return Gi(e,n.ju(r?4:3,t))}function Gi(n,t){if(_c(n=Xe(n)))return yc("Unsupported field value:",t,n),gc(n,t);if(n instanceof dc)return function(r,s){if(!mc(s.Lu))throw s.Wu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Wu(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(s);o&&s.fieldTransforms.push(o)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.Qu&&t.Lu!==4)throw t.Wu("Nested arrays are not supported");return function(r,s){const o=[];let a=0;for(const u of r){let h=Gi(u,s.Ku(a));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),a++}return{arrayValue:{values:o}}}(n,t)}return function(r,s){if((r=Xe(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Md(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=pt.fromDate(r);return{timestampValue:qr(s.serializer,o)}}if(r instanceof pt){const o=new pt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:qr(s.serializer,o)}}if(r instanceof $i)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof rn)return{bytesValue:Ou(s.serializer,r._byteString)};if(r instanceof Ft){const o=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(o))throw s.Wu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:Si(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Hi)return function(a,u){return{mapValue:{fields:{[au]:{stringValue:lu},[Fr]:{arrayValue:{values:a.toArray().map(f=>{if(typeof f!="number")throw u.Wu("VectorValues must only contain numeric values.");return bi(u.serializer,f)})}}}}}}(r,s);throw s.Wu(`Unsupported field value: ${os(r)}`)}(n,t)}function gc(n,t){const e={};return eu(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):De(n,(r,s)=>{const o=Gi(s,t.qu(r));o!=null&&(e[r]=o)}),{mapValue:{fields:e}}}function _c(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof pt||n instanceof $i||n instanceof rn||n instanceof Ft||n instanceof dc||n instanceof Hi)}function yc(n,t,e){if(!_c(e)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(e)){const r=os(e);throw r==="an object"?t.Wu(n+" a custom object"):t.Wu(n+" "+r)}}function Zp(n,t,e){if((t=Xe(t))instanceof zi)return t._internalPath;if(typeof t=="string")return Ec(n,t);throw Gr("Field path arguments must be of type string or ",n,!1,void 0,e)}const tg=new RegExp("[~\\*/\\[\\]]");function Ec(n,t,e){if(t.search(tg)>=0)throw Gr(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new zi(...t.split("."))._internalPath}catch{throw Gr(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function Gr(n,t,e,r,s){const o=r&&!r.isEmpty(),a=s!==void 0;let u=`Function ${t}() called with invalid data`;e&&(u+=" (via `toFirestore()`)"),u+=". ";let h="";return(o||a)&&(h+=" (found",o&&(h+=` in field ${r}`),a&&(h+=` in document ${s}`),h+=")"),new B(k.INVALID_ARGUMENT,u+n+h)}function eg(n,t){return n.some(e=>e.isEqual(t))}/**
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
 */function rg(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new B(k.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Qi{}class sg extends Qi{}function ig(n,t,...e){let r=[];t instanceof Qi&&r.push(t),r=r.concat(e),function(o){const a=o.filter(h=>h instanceof Xi).length,u=o.filter(h=>h instanceof ls).length;if(a>1||a>0&&u>0)throw new B(k.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)n=s._apply(n);return n}class ls extends sg{constructor(t,e,r){super(),this._field=t,this._op=e,this._value=r,this.type="where"}static _create(t,e,r){return new ls(t,e,r)}_apply(t){const e=this._parse(t);return Tc(t._query,e),new cn(t.firestore,t.converter,ri(t._query,e))}_parse(t){const e=pc(t.firestore);return function(o,a,u,h,f,m,y){let T;if(f.isKeyField()){if(m==="array-contains"||m==="array-contains-any")throw new B(k.INVALID_ARGUMENT,`Invalid Query. You can't perform '${m}' queries on documentId().`);if(m==="in"||m==="not-in"){ul(y,m);const P=[];for(const D of y)P.push(ll(h,o,D));T={arrayValue:{values:P}}}else T=ll(h,o,y)}else m!=="in"&&m!=="not-in"&&m!=="array-contains-any"||ul(y,m),T=Jp(u,a,y,m==="in"||m==="not-in");return mt.create(f,m,T)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}function og(n,t,e){const r=t,s=Wi("where",n);return ls._create(s,r,e)}class Xi extends Qi{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new Xi(t,e)}_parse(t){const e=this._queryConstraints.map(r=>r._parse(t)).filter(r=>r.getFilters().length>0);return e.length===1?e[0]:$t.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:(function(s,o){let a=s;const u=o.getFlattenedFilters();for(const h of u)Tc(a,h),a=ri(a,h)}(t._query,e),new cn(t.firestore,t.converter,ri(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function ll(n,t,e){if(typeof(e=Xe(e))=="string"){if(e==="")throw new B(k.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!_u(t)&&e.indexOf("/")!==-1)throw new B(k.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const r=t.path.child(at.fromString(e));if(!j.isDocumentKey(r))throw new B(k.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Aa(n,new j(r))}if(e instanceof Ft)return Aa(n,e._key);throw new B(k.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${os(e)}.`)}function ul(n,t){if(!Array.isArray(n)||n.length===0)throw new B(k.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function Tc(n,t){const e=function(s,o){for(const a of s)for(const u of a.getFlattenedFilters())if(o.indexOf(u.op)>=0)return u.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(e!==null)throw e===t.op?new B(k.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new B(k.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}class ag{convertValue(t,e="none"){switch(ye(t)){case 0:return null;case 1:return t.booleanValue;case 2:return ft(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(_e(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw z()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return De(t,(s,o)=>{r[s]=this.convertValue(o,e)}),r}convertVectorValue(t){var e,r,s;const o=(s=(r=(e=t.fields)===null||e===void 0?void 0:e[Fr].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(a=>ft(a.doubleValue));return new Hi(o)}convertGeoPoint(t){return new $i(ft(t.latitude),ft(t.longitude))}convertArray(t,e){return(t.values||[]).map(r=>this.convertValue(r,e))}convertServerTimestamp(t,e){switch(e){case"previous":const r=Yr(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(Fn(t));default:return null}}convertTimestamp(t){const e=ge(t);return new pt(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=at.fromString(t);rt(Bu(r));const s=new xn(r.get(1),r.get(3)),o=new j(r.popFirst(5));return s.isEqual(e)||ee(`Document ${o} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}/**
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
 */class wr{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class ug extends vc{constructor(t,e,r,s,o,a){super(t,e,r,s,a),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Cr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(Wi("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}}class Cr extends ug{data(t={}){return super.data(t)}}class cg{constructor(t,e,r,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new wr(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(r=>{t.call(e,new Cr(this._firestore,this._userDataWriter,r.key,r,new wr(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new B(k.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(s,o){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(u=>{const h=new Cr(s._firestore,s._userDataWriter,u.doc.key,u.doc,new wr(s._snapshot.mutatedKeys.has(u.doc.key),s._snapshot.fromCache),s.query.converter);return u.doc,{type:"added",doc:h,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(u=>o||u.type!==3).map(u=>{const h=new Cr(s._firestore,s._userDataWriter,u.doc.key,u.doc,new wr(s._snapshot.mutatedKeys.has(u.doc.key),s._snapshot.fromCache),s.query.converter);let f=-1,m=-1;return u.type!==0&&(f=a.indexOf(u.doc.key),a=a.delete(u.doc.key)),u.type!==1&&(a=a.add(u.doc),m=a.indexOf(u.doc.key)),{type:hg(u.type),doc:h,oldIndex:f,newIndex:m}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function hg(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return z()}}class fg extends ag{constructor(t){super(),this.firestore=t}convertBytes(t){return new rn(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Ft(this.firestore,null,e)}}function dg(n){n=Kr(n,cn);const t=Kr(n.firestore,qi),e=fc(t),r=new fg(t);return rg(n._query),qp(e,n._query).then(s=>new cg(t,r,n,s))}function mg(n,t){const e=Kr(n.firestore,qi),r=Hp(n),s=lg(n.converter,t);return pg(e,[Yp(pc(n.firestore),"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,Zt.exists(!1))]).then(()=>r)}function pg(n,t){return function(r,s){const o=new de;return r.asyncQueue.enqueueAndForget(async()=>Sp(await Bp(r),s,o)),o.promise}(fc(n),t)}(function(t,e=!0){(function(s){on=s})(Mf),Or(new On("firestore",(r,{instanceIdentifier:s,options:o})=>{const a=r.getProvider("app").getImmediate(),u=new qi(new Qf(r.getProvider("auth-internal")),new Jf(a,r.getProvider("app-check-internal")),function(f,m){if(!Object.prototype.hasOwnProperty.apply(f.options,["projectId"]))throw new B(k.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new xn(f.options.projectId,m)}(a,s),a);return o=Object.assign({useFetchStreams:e},o),u._setSettings(o),u},"PUBLIC").setMultipleInstances(!0)),We(fa,da,t),We(fa,da,"esm2017")})();var gg="firebase",_g="11.5.0";/**
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
 */We(gg,_g,"app");const yg={apiKey:"AIzaSyDNZCXCOGwTjyYXCzDLKGEr7dzj7XKvFNk",authDomain:"drents-elftal.firebaseapp.com",projectId:"drents-elftal",storageBucket:"drents-elftal.firebasestorage.app",messagingSenderId:"542166909378",appId:"1:542166909378:web:1c3cd5336f6168067c965b",measurementId:"G-1F8PEJ34WQ"},Eg=ql(yg),wc=Kp(Eg);async function vg(n){const t=hc(wc,"teams"),e=ig(t,og("email","==",n));return!(await dg(e)).empty}async function Tg(n,t,e){try{if(await vg(t))throw new Error("Je hebt al gestemd met dit e-mailadres.");const s={players:n,email:t,allowNewsletter:e,submittedAt:new Date};return(await mg(hc(wc,"teams"),s)).id}catch(r){throw console.error("Error submitting team:",r),r}}function cl(n){let t,e,r,s,o,a,u,h,f,m,y,T,I,P,D,S,C,O,L,Q,K,Y,E,g,p=n[2]&&hl(n);function v(_,it){return _[1]?Ig:wg}let w=v(n),A=w(n);return{c(){t=U("div"),e=U("div"),r=U("div"),r.innerHTML='<h3 id="email-form-title" class="svelte-txf4uf">Verstuur je stem</h3>',s=G(),o=U("form"),p&&p.c(),a=G(),u=U("div"),h=U("label"),h.textContent="E-mailadres:",f=G(),m=U("input"),y=G(),T=U("div"),I=U("label"),P=U("input"),D=G(),S=U("span"),S.textContent="Ik wil mail ontvangen van RTV Drenthe over Onze Club. Als je dit aanvinkt meld je je alleen aan voor nieuws rond Onze Club",C=G(),O=U("div"),L=U("button"),Q=ht("Annuleren"),K=G(),Y=U("button"),A.c(),N(r,"class","modal-header svelte-txf4uf"),N(h,"for","email"),N(h,"class","svelte-txf4uf"),N(m,"type","email"),N(m,"id","email"),m.required=!0,N(m,"placeholder","Vul je e-mailadres in"),m.disabled=n[1],N(m,"class","svelte-txf4uf"),N(u,"class","form-group svelte-txf4uf"),N(P,"type","checkbox"),P.disabled=n[1],N(P,"class","svelte-txf4uf"),N(I,"class","checkbox-label svelte-txf4uf"),N(T,"class","form-group checkbox-group svelte-txf4uf"),N(L,"type","button"),N(L,"class","cancel-button svelte-txf4uf"),L.disabled=n[1],N(Y,"type","submit"),N(Y,"class","save-button svelte-txf4uf"),Y.disabled=n[1],N(O,"class","modal-footer svelte-txf4uf"),N(o,"class","modal-content svelte-txf4uf"),N(e,"class","modal svelte-txf4uf"),N(e,"role","dialog"),N(e,"aria-labelledby","email-form-title"),N(e,"aria-modal","true"),N(t,"class","modal-backdrop svelte-txf4uf"),N(t,"role","presentation")},m(_,it){nt(_,t,it),M(t,e),M(e,r),M(e,s),M(e,o),p&&p.m(o,null),M(o,a),M(o,u),M(u,h),M(u,f),M(u,m),ae(m,n[3]),M(o,y),M(o,T),M(T,I),M(I,P),P.checked=n[4],M(I,D),M(I,S),M(o,C),M(o,O),M(O,L),M(L,Q),M(O,K),M(O,Y),A.m(Y,null),E||(g=[lt(m,"input",n[7]),lt(P,"change",n[8]),lt(L,"click",n[5]),lt(o,"submit",kl(n[6]))],E=!0)},p(_,it){_[2]?p?p.p(_,it):(p=hl(_),p.c(),p.m(o,a)):p&&(p.d(1),p=null),it&2&&(m.disabled=_[1]),it&8&&m.value!==_[3]&&ae(m,_[3]),it&2&&(P.disabled=_[1]),it&16&&(P.checked=_[4]),it&2&&(L.disabled=_[1]),w!==(w=v(_))&&(A.d(1),A=w(_),A&&(A.c(),A.m(Y,null))),it&2&&(Y.disabled=_[1])},d(_){_&&et(t),p&&p.d(),A.d(),E=!1,xt(g)}}}function hl(n){let t,e;return{c(){t=U("div"),e=ht(n[2]),N(t,"class","error-message svelte-txf4uf")},m(r,s){nt(r,t,s),M(t,e)},p(r,s){s&4&&Nt(e,r[2])},d(r){r&&et(t)}}}function wg(n){let t;return{c(){t=ht("Versturen")},m(e,r){nt(e,t,r)},d(e){e&&et(t)}}}function Ig(n){let t;return{c(){t=ht("Versturen...")},m(e,r){nt(e,t,r)},d(e){e&&et(t)}}}function Ag(n){let t,e=n[0]&&cl(n);return{c(){e&&e.c(),t=mi()},m(r,s){e&&e.m(r,s),nt(r,t,s)},p(r,[s]){r[0]?e?e.p(r,s):(e=cl(r),e.c(),e.m(t.parentNode,t)):e&&(e.d(1),e=null)},i:zt,o:zt,d(r){r&&et(t),e&&e.d(r)}}}function bg(n,t,e){let{isOpen:r=!1}=t,{isSubmitting:s=!1}=t,{submitError:o=null}=t,a="",u=!1;const h=gi();function f(){s||h("close")}function m(){s||h("submit",{email:a,consent:u})}function y(P){P.key==="Escape"&&r&&!s&&f()}pi(()=>(document.addEventListener("keydown",y),()=>{document.removeEventListener("keydown",y)}));function T(){a=this.value,e(3,a)}function I(){u=this.checked,e(4,u)}return n.$$set=P=>{"isOpen"in P&&e(0,r=P.isOpen),"isSubmitting"in P&&e(1,s=P.isSubmitting),"submitError"in P&&e(2,o=P.submitError)},[r,s,o,a,u,f,m,T,I]}class Rg extends Kn{constructor(t){super(),Hn(this,t,bg,Ag,qn,{isOpen:0,isSubmitting:1,submitError:2})}}function fl(n){let t,e,r,s,o=n[6]?"Edit":"Add",a,u,h,f,m,y,T,I,P,D,S,C,O,L,Q,K,Y,E,g,p,v,w,A,_,it,q,Vt=n[6]?"Save":"Add",Qt,Xt,Me;return{c(){t=U("div"),e=U("div"),r=U("div"),s=U("h3"),a=ht(o),u=ht(" Player - "),h=ht(n[3]),f=ht(" #"),m=ht(n[4]),y=G(),T=U("form"),I=U("div"),P=U("label"),P.textContent="First Name:",D=G(),S=U("input"),C=G(),O=U("div"),L=U("label"),L.textContent="Surname:",Q=G(),K=U("input"),Y=G(),E=U("div"),g=U("label"),g.textContent="Club:",p=G(),v=U("input"),w=G(),A=U("div"),_=U("button"),_.textContent="Cancel",it=G(),q=U("button"),Qt=ht(Vt),N(s,"id","modal-title"),N(s,"class","svelte-jja17o"),N(r,"class","modal-header svelte-jja17o"),N(P,"for","firstName"),N(P,"class","svelte-jja17o"),N(S,"type","text"),N(S,"id","firstName"),S.required=!0,N(S,"placeholder","Enter first name"),N(S,"class","svelte-jja17o"),N(I,"class","form-group svelte-jja17o"),N(L,"for","surname"),N(L,"class","svelte-jja17o"),N(K,"type","text"),N(K,"id","surname"),K.required=!0,N(K,"placeholder","Enter surname"),N(K,"class","svelte-jja17o"),N(O,"class","form-group svelte-jja17o"),N(g,"for","playerClub"),N(g,"class","svelte-jja17o"),N(v,"type","text"),N(v,"id","playerClub"),v.required=!0,N(v,"placeholder","Enter club name"),N(v,"class","svelte-jja17o"),N(E,"class","form-group svelte-jja17o"),N(_,"type","button"),N(_,"class","cancel-button svelte-jja17o"),N(q,"type","submit"),N(q,"class","save-button svelte-jja17o"),N(A,"class","modal-footer svelte-jja17o"),N(T,"class","modal-content svelte-jja17o"),N(e,"class","modal svelte-jja17o"),N(e,"role","dialog"),N(e,"aria-labelledby","modal-title"),N(e,"aria-modal","true"),N(t,"class","modal-backdrop svelte-jja17o"),N(t,"role","presentation")},m(yt,Ut){nt(yt,t,Ut),M(t,e),M(e,r),M(r,s),M(s,a),M(s,u),M(s,h),M(s,f),M(s,m),M(e,y),M(e,T),M(T,I),M(I,P),M(I,D),M(I,S),ae(S,n[0]),M(T,C),M(T,O),M(O,L),M(O,Q),M(O,K),ae(K,n[1]),M(T,Y),M(T,E),M(E,g),M(E,p),M(E,v),ae(v,n[2]),M(T,w),M(T,A),M(A,_),M(A,it),M(A,q),M(q,Qt),Xt||(Me=[lt(S,"input",n[9]),lt(K,"input",n[10]),lt(v,"input",n[11]),lt(_,"click",n[8]),lt(T,"submit",kl(n[7]))],Xt=!0)},p(yt,Ut){Ut&64&&o!==(o=yt[6]?"Edit":"Add")&&Nt(a,o),Ut&8&&Nt(h,yt[3]),Ut&16&&Nt(m,yt[4]),Ut&1&&S.value!==yt[0]&&ae(S,yt[0]),Ut&2&&K.value!==yt[1]&&ae(K,yt[1]),Ut&4&&v.value!==yt[2]&&ae(v,yt[2]),Ut&64&&Vt!==(Vt=yt[6]?"Save":"Add")&&Nt(Qt,Vt)},d(yt){yt&&et(t),Xt=!1,xt(Me)}}}function Pg(n){let t,e=n[5]&&fl(n);return{c(){e&&e.c(),t=mi()},m(r,s){e&&e.m(r,s),nt(r,t,s)},p(r,[s]){r[5]?e?e.p(r,s):(e=fl(r),e.c(),e.m(t.parentNode,t)):e&&(e.d(1),e=null)},i:zt,o:zt,d(r){r&&et(t),e&&e.d(r)}}}function Sg(n,t,e){let{position:r}=t,{number:s}=t,{firstName:o=""}=t,{surname:a=""}=t,{club:u=""}=t,{isOpen:h=!1}=t,{isEdit:f=!1}=t;const m=gi();function y(){m("save",{firstName:o,surname:a,club:u}),m("close")}function T(){m("close")}function I(C){C.key==="Escape"&&h&&T()}pi(()=>(document.addEventListener("keydown",I),()=>{document.removeEventListener("keydown",I)}));function P(){o=this.value,e(0,o),e(5,h),e(6,f)}function D(){a=this.value,e(1,a),e(5,h),e(6,f)}function S(){u=this.value,e(2,u),e(5,h),e(6,f)}return n.$$set=C=>{"position"in C&&e(3,r=C.position),"number"in C&&e(4,s=C.number),"firstName"in C&&e(0,o=C.firstName),"surname"in C&&e(1,a=C.surname),"club"in C&&e(2,u=C.club),"isOpen"in C&&e(5,h=C.isOpen),"isEdit"in C&&e(6,f=C.isEdit)},n.$$.update=()=>{n.$$.dirty&96&&h&&!f&&(e(0,o=""),e(1,a=""),e(2,u=""))},[o,a,u,r,s,h,f,y,T,P,D,S]}class Cg extends Kn{constructor(t){super(),Hn(this,t,Sg,Pg,qn,{position:3,number:4,firstName:0,surname:1,club:2,isOpen:5,isEdit:6})}}function dl(n,t,e){const r=n.slice();return r[21]=t[e],r[23]=e,r}function ml(n,t,e){const r=n.slice();return r[21]=t[e],r[23]=e,r}function pl(n,t,e){const r=n.slice();return r[21]=t[e],r[23]=e,r}function gl(n){let t,e=Te(n[0][1])+"",r,s,o,a=n[0][1].club+"",u;return{c(){t=U("span"),r=ht(e),s=G(),o=U("span"),u=ht(a),N(t,"class","player-name svelte-p0e7uy"),N(o,"class","player-club svelte-p0e7uy")},m(h,f){nt(h,t,f),M(t,r),nt(h,s,f),nt(h,o,f),M(o,u)},p(h,f){f&1&&e!==(e=Te(h[0][1])+"")&&Nt(r,e),f&1&&a!==(a=h[0][1].club+"")&&Nt(u,a)},d(h){h&&(et(t),et(s),et(o))}}}function _l(n){let t,e=Te(n[0][n[23]===0?3:n[23]===1?4:2])+"",r,s,o,a=n[0][n[23]===0?3:n[23]===1?4:2].club+"",u;return{c(){t=U("span"),r=ht(e),s=G(),o=U("span"),u=ht(a),N(t,"class","player-name svelte-p0e7uy"),N(o,"class","player-club svelte-p0e7uy")},m(h,f){nt(h,t,f),M(t,r),nt(h,s,f),nt(h,o,f),M(o,u)},p(h,f){f&1&&e!==(e=Te(h[0][h[23]===0?3:h[23]===1?4:2])+"")&&Nt(r,e),f&1&&a!==(a=h[0][h[23]===0?3:h[23]===1?4:2].club+"")&&Nt(u,a)},d(h){h&&(et(t),et(s),et(o))}}}function yl(n){let t,e,r,s,o,a,u=n[0][n[23]===0?3:n[23]===1?4:2]&&_l(n);function h(){return n[12](n[23])}function f(...m){return n[13](n[23],...m)}return{c(){t=U("button"),e=U("span"),e.textContent=`${n[23]===0?3:n[23]===1?4:2}`,r=G(),u&&u.c(),s=G(),N(e,"class","number svelte-p0e7uy"),N(t,"type","button"),N(t,"class","player-position defender svelte-p0e7uy"),N(t,"style","bottom: "+n[21].bottom+"; "+(n[21].left?"left: "+n[21].left:"right: "+n[21].right)),N(t,"aria-label","Select defender position "+(n[23]+1))},m(m,y){nt(m,t,y),M(t,e),M(t,r),u&&u.m(t,null),M(t,s),o||(a=[lt(t,"click",h),lt(t,"keydown",f)],o=!0)},p(m,y){n=m,n[0][n[23]===0?3:n[23]===1?4:2]?u?u.p(n,y):(u=_l(n),u.c(),u.m(t,s)):u&&(u.d(1),u=null)},d(m){m&&et(t),u&&u.d(),o=!1,xt(a)}}}function El(n){let t,e=Te(n[0][n[23]===0?6:n[23]===1?5:n[23]===2?10:8])+"",r,s,o,a=n[0][n[23]===0?6:n[23]===1?5:n[23]===2?10:8].club+"",u;return{c(){t=U("span"),r=ht(e),s=G(),o=U("span"),u=ht(a),N(t,"class","player-name svelte-p0e7uy"),N(o,"class","player-club svelte-p0e7uy")},m(h,f){nt(h,t,f),M(t,r),nt(h,s,f),nt(h,o,f),M(o,u)},p(h,f){f&1&&e!==(e=Te(h[0][h[23]===0?6:h[23]===1?5:h[23]===2?10:8])+"")&&Nt(r,e),f&1&&a!==(a=h[0][h[23]===0?6:h[23]===1?5:h[23]===2?10:8].club+"")&&Nt(u,a)},d(h){h&&(et(t),et(s),et(o))}}}function vl(n){let t,e,r,s,o,a,u=n[0][n[23]===0?6:n[23]===1?5:n[23]===2?10:8]&&El(n);function h(){return n[14](n[23])}function f(...m){return n[15](n[23],...m)}return{c(){t=U("button"),e=U("span"),e.textContent=`${n[23]===0?6:n[23]===1?5:n[23]===2?10:8}`,r=G(),u&&u.c(),s=G(),N(e,"class","number svelte-p0e7uy"),N(t,"type","button"),N(t,"class","player-position midfielder svelte-p0e7uy"),N(t,"style","bottom: "+n[21].bottom+"; "+(n[21].left?"left: "+n[21].left:"right: "+n[21].right)),N(t,"aria-label","Select midfielder position "+(n[23]+1))},m(m,y){nt(m,t,y),M(t,e),M(t,r),u&&u.m(t,null),M(t,s),o||(a=[lt(t,"click",h),lt(t,"keydown",f)],o=!0)},p(m,y){n=m,n[0][n[23]===0?6:n[23]===1?5:n[23]===2?10:8]?u?u.p(n,y):(u=El(n),u.c(),u.m(t,s)):u&&(u.d(1),u=null)},d(m){m&&et(t),u&&u.d(),o=!1,xt(a)}}}function Tl(n){let t,e=Te(n[0][n[23]===0?11:n[23]===1?9:7])+"",r,s,o,a=n[0][n[23]===0?11:n[23]===1?9:7].club+"",u;return{c(){t=U("span"),r=ht(e),s=G(),o=U("span"),u=ht(a),N(t,"class","player-name svelte-p0e7uy"),N(o,"class","player-club svelte-p0e7uy")},m(h,f){nt(h,t,f),M(t,r),nt(h,s,f),nt(h,o,f),M(o,u)},p(h,f){f&1&&e!==(e=Te(h[0][h[23]===0?11:h[23]===1?9:7])+"")&&Nt(r,e),f&1&&a!==(a=h[0][h[23]===0?11:h[23]===1?9:7].club+"")&&Nt(u,a)},d(h){h&&(et(t),et(s),et(o))}}}function wl(n){let t,e,r,s,o,a,u=n[0][n[23]===0?11:n[23]===1?9:7]&&Tl(n);function h(){return n[16](n[23])}function f(...m){return n[17](n[23],...m)}return{c(){t=U("button"),e=U("span"),e.textContent=`${n[23]===0?11:n[23]===1?9:7}`,r=G(),u&&u.c(),s=G(),N(e,"class","number svelte-p0e7uy"),N(t,"type","button"),N(t,"class","player-position forward svelte-p0e7uy"),N(t,"style","bottom: "+n[21].bottom+"; "+(n[21].left?"left: "+n[21].left:"right: "+n[21].right)),N(t,"aria-label","Select forward position "+(n[23]+1))},m(m,y){nt(m,t,y),M(t,e),M(t,r),u&&u.m(t,null),M(t,s),o||(a=[lt(t,"click",h),lt(t,"keydown",f)],o=!0)},p(m,y){n=m,n[0][n[23]===0?11:n[23]===1?9:7]?u?u.p(n,y):(u=Tl(n),u.c(),u.m(t,s)):u&&(u.d(1),u=null)},d(m){m&&et(t),u&&u.d(),o=!1,xt(a)}}}function Vg(n){var Y,E,g;let t,e,r,s,o,a,u,h,f,m,y,T,I,P,D=n[0][1]&&gl(n),S=je(n[5].defenders),C=[];for(let p=0;p<S.length;p+=1)C[p]=yl(pl(n,S,p));let O=je(n[5].midfielders),L=[];for(let p=0;p<O.length;p+=1)L[p]=vl(ml(n,O,p));let Q=je(n[5].forwards),K=[];for(let p=0;p<Q.length;p+=1)K[p]=wl(dl(n,Q,p));return y=new Cg({props:{isOpen:n[1],position:n[2]||"",number:n[3]||0,firstName:((Y=n[4])==null?void 0:Y.firstName)||"",surname:((E=n[4])==null?void 0:E.surname)||"",club:((g=n[4])==null?void 0:g.club)||"",isEdit:!!n[4]}}),y.$on("save",n[7]),y.$on("close",n[18]),{c(){t=U("div"),e=U("div"),r=U("div"),s=U("button"),o=U("span"),o.textContent="1",a=G(),D&&D.c(),u=G();for(let p=0;p<C.length;p+=1)C[p].c();h=G();for(let p=0;p<L.length;p+=1)L[p].c();f=G();for(let p=0;p<K.length;p+=1)K[p].c();m=G(),Wr(y.$$.fragment),N(o,"class","number svelte-p0e7uy"),N(s,"type","button"),N(s,"class","player-position goalkeeper svelte-p0e7uy"),zs(s,"bottom",n[5].goalkeeper.bottom),zs(s,"left",n[5].goalkeeper.left),N(s,"aria-label","Select goalkeeper position"),N(r,"class","player-positions svelte-p0e7uy"),N(e,"class","pitch-container svelte-p0e7uy"),N(t,"class","football-pitch svelte-p0e7uy")},m(p,v){nt(p,t,v),M(t,e),M(e,r),M(r,s),M(s,o),M(s,a),D&&D.m(s,null),M(r,u);for(let w=0;w<C.length;w+=1)C[w]&&C[w].m(r,null);M(r,h);for(let w=0;w<L.length;w+=1)L[w]&&L[w].m(r,null);M(r,f);for(let w=0;w<K.length;w+=1)K[w]&&K[w].m(r,null);nt(p,m,v),zn(y,p,v),T=!0,I||(P=[lt(s,"click",n[10]),lt(s,"keydown",n[11])],I=!0)},p(p,[v]){var A,_,it;if(p[0][1]?D?D.p(p,v):(D=gl(p),D.c(),D.m(s,null)):D&&(D.d(1),D=null),v&97){S=je(p[5].defenders);let q;for(q=0;q<S.length;q+=1){const Vt=pl(p,S,q);C[q]?C[q].p(Vt,v):(C[q]=yl(Vt),C[q].c(),C[q].m(r,h))}for(;q<C.length;q+=1)C[q].d(1);C.length=S.length}if(v&97){O=je(p[5].midfielders);let q;for(q=0;q<O.length;q+=1){const Vt=ml(p,O,q);L[q]?L[q].p(Vt,v):(L[q]=vl(Vt),L[q].c(),L[q].m(r,f))}for(;q<L.length;q+=1)L[q].d(1);L.length=O.length}if(v&97){Q=je(p[5].forwards);let q;for(q=0;q<Q.length;q+=1){const Vt=dl(p,Q,q);K[q]?K[q].p(Vt,v):(K[q]=wl(Vt),K[q].c(),K[q].m(r,null))}for(;q<K.length;q+=1)K[q].d(1);K.length=Q.length}const w={};v&2&&(w.isOpen=p[1]),v&4&&(w.position=p[2]||""),v&8&&(w.number=p[3]||0),v&16&&(w.firstName=((A=p[4])==null?void 0:A.firstName)||""),v&16&&(w.surname=((_=p[4])==null?void 0:_.surname)||""),v&16&&(w.club=((it=p[4])==null?void 0:it.club)||""),v&16&&(w.isEdit=!!p[4]),y.$set(w)},i(p){T||(jt(y.$$.fragment,p),T=!0)},o(p){le(y.$$.fragment,p),T=!1},d(p){p&&(et(t),et(m)),D&&D.d(),Ns(C,p),Ns(L,p),Ns(K,p),$n(y,p),I=!1,xt(P)}}}function Te(n){return window.matchMedia("(max-width: 768px)").matches?n.surname:`${n.firstName} ${n.surname}`}function Dg(n,t,e){const r=gi();let{initialPlayers:s={}}=t,o=s,a=!1,u=null,h=null,f=null;const m={goalkeeper:{bottom:"5%",left:"50%"},defenders:[{bottom:"25%",left:"17%"},{bottom:"25%",left:"50%"},{bottom:"25%",left:"83%"}],midfielders:[{bottom:"45%",left:"12.5%"},{bottom:"45%",left:"37.5%"},{bottom:"45%",left:"62.5%"},{bottom:"45%",left:"87.5%"}],forwards:[{bottom:"70%",left:"17%"},{bottom:"70%",left:"50%"},{bottom:"70%",left:"83%"}]};function y(E,g){e(2,u=E),e(3,h=g),e(4,f=o[g]||null),e(1,a=!0)}function T(E){if(h!==null){e(0,o[h]={firstName:E.detail.firstName,surname:E.detail.surname,club:E.detail.club},o),e(0,o),e(8,s),e(1,a=!1),e(2,u=null),e(3,h=null),e(4,f=null);const g=Object.keys(o).length;r("playersUpdate",{filledPositions:g,players:o})}}function I(){e(0,o={}),e(1,a=!1),e(2,u=null),e(3,h=null),e(4,f=null),r("playersUpdate",{filledPositions:0,players:o})}const P=()=>y("goalkeeper",1),D=E=>E.key==="Enter"&&y("goalkeeper",1),S=E=>y("defender",E===0?3:E===1?4:2),C=(E,g)=>g.key==="Enter"&&y("defender",E===0?3:E===1?4:2),O=E=>y("midfielder",E===0?6:E===1?5:E===2?10:8),L=(E,g)=>g.key==="Enter"&&y("midfielder",E===0?6:E===1?5:E===2?10:8),Q=E=>y("forward",E===0?11:E===1?9:7),K=(E,g)=>g.key==="Enter"&&y("forward",E===0?11:E===1?9:7),Y=()=>{e(1,a=!1),e(4,f=null)};return n.$$set=E=>{"initialPlayers"in E&&e(8,s=E.initialPlayers)},n.$$.update=()=>{if(n.$$.dirty&257&&s&&Object.keys(s).length>0){e(0,o=s);const E=Object.keys(o).length;r("playersUpdate",{filledPositions:E,players:o})}},[o,a,u,h,f,m,y,T,s,I,P,D,S,C,O,L,Q,K,Y]}class kg extends Kn{constructor(t){super(),Hn(this,t,Dg,Vg,qn,{initialPlayers:8,resetPlayers:9})}get resetPlayers(){return this.$$.ctx[9]}}function Il(n){let t,e,r,s,o,a,u,h,f,m,y,T,I,P,D,S,C=n[2]&&Al(n);return{c(){t=U("div"),e=U("h3"),e.textContent="Deel je elftal",r=G(),s=U("div"),o=U("button"),o.textContent="Download afbeelding",a=G(),C&&C.c(),u=G(),h=U("button"),h.textContent="Deel op WhatsApp",f=G(),m=U("button"),m.textContent="Deel op Facebook",y=G(),T=U("button"),T.textContent="Deel op Instagram",I=G(),P=U("canvas"),N(e,"class","svelte-zs3t9j"),N(o,"class","download-button svelte-zs3t9j"),N(h,"class","whatsapp-button svelte-zs3t9j"),N(m,"class","facebook-button svelte-zs3t9j"),N(T,"class","instagram-button svelte-zs3t9j"),N(s,"class","share-buttons svelte-zs3t9j"),zs(P,"display","none"),N(t,"class","share-modal svelte-zs3t9j")},m(O,L){nt(O,t,L),M(t,e),M(t,r),M(t,s),M(s,o),M(s,a),C&&C.m(s,null),M(s,u),M(s,h),M(s,f),M(s,m),M(s,y),M(s,T),M(t,I),M(t,P),n[7](P),D||(S=[lt(o,"click",n[3]),lt(h,"click",Og),lt(m,"click",Mg),lt(T,"click",n[4])],D=!0)},p(O,L){O[2]?C?C.p(O,L):(C=Al(O),C.c(),C.m(s,u)):C&&(C.d(1),C=null)},d(O){O&&et(t),C&&C.d(),n[7](null),D=!1,xt(S)}}}function Al(n){let t,e,r;return{c(){t=U("button"),t.textContent="Delen",N(t,"class","share-button svelte-zs3t9j")},m(s,o){nt(s,t,o),e||(r=lt(t,"click",n[5]),e=!0)},p:zt,d(s){s&&et(t),e=!1,r()}}}function Ng(n){let t,e=n[0]&&Il(n);return{c(){e&&e.c(),t=mi()},m(r,s){e&&e.m(r,s),nt(r,t,s)},p(r,[s]){r[0]?e?e.p(r,s):(e=Il(r),e.c(),e.m(t.parentNode,t)):e&&(e.d(1),e=null)},i:zt,o:zt,d(r){r&&et(t),e&&e.d(r)}}}async function Og(){const n="Maak ook jouw Drents Elftal!",t=encodeURIComponent(window.location.href);window.open(`https://wa.me/?text=${encodeURIComponent(n+" "+t)}`,"_blank")}async function Mg(){const n=encodeURIComponent(window.location.href);window.open(`https://www.facebook.com/sharer/sharer.php?u=${n}`,"_blank")}function Lg(n,t,e){let{players:r}=t,{isOpen:s=!1}=t,o,a=!1;pi(()=>{e(2,a=!!navigator.share)});async function u(){if(o)try{const T=await h(),I=document.createElement("a");I.download="mijn-drents-elftal.png",I.href=T,document.body.appendChild(I),I.click(),document.body.removeChild(I)}catch(T){console.error("Error downloading image:",T)}}async function h(){const T=o,I=T.getContext("2d");if(!I)throw new Error("Could not get canvas context");T.width=1200,T.height=630,I.fillStyle="#2E7D32",I.fillRect(0,0,T.width,T.height),I.strokeStyle="rgba(255, 255, 255, 0.5)",I.lineWidth=2,I.strokeRect(50,50,T.width-100,T.height-100),I.beginPath(),I.moveTo(T.width/2,50),I.lineTo(T.width/2,T.height-50),I.stroke(),I.beginPath(),I.arc(T.width/2,T.height/2,50,0,Math.PI*2),I.stroke(),I.fillStyle="white",I.font="bold 48px Arial",I.textAlign="center",I.fillText("Mijn Drents Elftal",T.width/2,40);const P={1:{x:T.width/2,y:T.height-100},2:{x:T.width*.17,y:T.height-200},3:{x:T.width*.5,y:T.height-200},4:{x:T.width*.83,y:T.height-200},5:{x:T.width*.125,y:T.height-350},6:{x:T.width*.375,y:T.height-350},8:{x:T.width*.625,y:T.height-350},10:{x:T.width*.875,y:T.height-350},7:{x:T.width*.17,y:T.height-500},9:{x:T.width*.5,y:T.height-500},11:{x:T.width*.83,y:T.height-500}},D=new Image;return D.src="/jersey-drenthe.svg",await new Promise(S=>{D.onload=S}),Object.entries(r).forEach(([S,C])=>{const O=P[parseInt(S)];if(!O)return;const L=60;I.drawImage(D,O.x-L/2,O.y-L/2,L,L),I.fillStyle="white",I.font="bold 24px Arial",I.textAlign="center",I.fillText(S,O.x,O.y+5),I.font="16px Arial",I.fillText(`${C.firstName} ${C.surname}`,O.x,O.y+L),I.font="14px Arial",I.fillStyle="rgba(255, 255, 255, 0.8)",I.fillText(C.club,O.x,O.y+L+20)}),I.font="bold 24px Arial",I.fillStyle="white",I.textAlign="right",I.fillText("RTV Drenthe",T.width-60,T.height-30),T.toDataURL("image/png")}async function f(){await u(),alert("Je kunt de afbeelding nu delen op Instagram!")}async function m(){if(a)try{const T=await(await fetch(await h())).blob(),I=new File([T],"mijn-drents-elftal.png",{type:"image/png"});await navigator.share({title:"Mijn Drents Elftal",text:"Maak ook jouw Drents Elftal!",url:window.location.href,files:[I]})}catch(T){console.error("Error sharing:",T)}}function y(T){Vr[T?"unshift":"push"](()=>{o=T,e(1,o)})}return n.$$set=T=>{"players"in T&&e(6,r=T.players),"isOpen"in T&&e(0,s=T.isOpen)},[s,o,a,u,f,m,r,y]}class Fg extends Kn{constructor(t){super(),Hn(this,t,Lg,Ng,qn,{players:6,isOpen:0})}}function bl(n){let t,e,r;return{c(){t=U("button"),t.textContent="Stem indienen",N(t,"class","submit-button svelte-gf82yw")},m(s,o){nt(s,t,o),e||(r=lt(t,"click",n[11]),e=!0)},p:zt,d(s){s&&et(t),e=!1,r()}}}function Rl(n){let t,e;return t=new Rg({props:{isOpen:n[1],isSubmitting:n[5],submitError:n[4]}}),t.$on("close",n[12]),t.$on("submit",n[9]),{c(){Wr(t.$$.fragment)},m(r,s){zn(t,r,s),e=!0},p(r,s){const o={};s&2&&(o.isOpen=r[1]),s&32&&(o.isSubmitting=r[5]),s&16&&(o.submitError=r[4]),t.$set(o)},i(r){e||(jt(t.$$.fragment,r),e=!0)},o(r){le(t.$$.fragment,r),e=!1},d(r){$n(t,r)}}}function Pl(n){let t,e;return t=new Fg({props:{players:n[0],isOpen:n[2]}}),{c(){Wr(t.$$.fragment)},m(r,s){zn(t,r,s),e=!0},p(r,s){const o={};s&1&&(o.players=r[0]),s&4&&(o.isOpen=r[2]),t.$set(o)},i(r){e||(jt(t.$$.fragment,r),e=!0)},o(r){le(t.$$.fragment,r),e=!1},d(r){$n(t,r)}}}function Sl(n){let t,e;return{c(){t=U("div"),e=ht(n[3]),N(t,"class","success-message svelte-gf82yw")},m(r,s){nt(r,t,s),M(t,e)},p(r,s){s&8&&Nt(e,r[3])},d(r){r&&et(t)}}}function Cl(n){let t,e;return{c(){t=U("div"),e=ht(n[4]),N(t,"class","error-message svelte-gf82yw")},m(r,s){nt(r,t,s),M(t,e)},p(r,s){s&16&&Nt(e,r[4])},d(r){r&&et(t)}}}function xg(n){let t,e,r,s,o,a,u,h,f,m,y,T={initialPlayers:n[0]};o=new kg({props:T}),n[10](o),o.$on("playersUpdate",n[8]);let I=!n[1]&&!n[2]&&n[6]&&bl(n),P=n[1]&&Rl(n),D=n[2]&&Pl(n),S=n[3]&&Sl(n),C=n[4]&&Cl(n);return{c(){t=U("div"),e=U("header"),e.innerHTML='<h1 class="svelte-gf82yw">Drents Elftal</h1> <p>Maak je eigen Drents Elftal</p>',r=G(),s=U("main"),Wr(o.$$.fragment),a=G(),I&&I.c(),u=G(),P&&P.c(),h=G(),D&&D.c(),f=G(),S&&S.c(),m=G(),C&&C.c(),N(e,"class","svelte-gf82yw"),N(t,"class","container svelte-gf82yw")},m(O,L){nt(O,t,L),M(t,e),M(t,r),M(t,s),zn(o,s,null),M(s,a),I&&I.m(s,null),M(s,u),P&&P.m(s,null),M(s,h),D&&D.m(s,null),M(s,f),S&&S.m(s,null),M(s,m),C&&C.m(s,null),y=!0},p(O,[L]){const Q={};L&1&&(Q.initialPlayers=O[0]),o.$set(Q),!O[1]&&!O[2]&&O[6]?I?I.p(O,L):(I=bl(O),I.c(),I.m(s,u)):I&&(I.d(1),I=null),O[1]?P?(P.p(O,L),L&2&&jt(P,1)):(P=Rl(O),P.c(),jt(P,1),P.m(s,h)):P&&(Zo(),le(P,1,1,()=>{P=null}),ta()),O[2]?D?(D.p(O,L),L&4&&jt(D,1)):(D=Pl(O),D.c(),jt(D,1),D.m(s,f)):D&&(Zo(),le(D,1,1,()=>{D=null}),ta()),O[3]?S?S.p(O,L):(S=Sl(O),S.c(),S.m(s,m)):S&&(S.d(1),S=null),O[4]?C?C.p(O,L):(C=Cl(O),C.c(),C.m(s,null)):C&&(C.d(1),C=null)},i(O){y||(jt(o.$$.fragment,O),jt(P),jt(D),y=!0)},o(O){le(o.$$.fragment,O),le(P),le(D),y=!1},d(O){O&&et(t),n[10](null),$n(o),I&&I.d(),P&&P.d(),D&&D.d(),S&&S.d(),C&&C.d()}}}function Ug(n,t,e){let r={},s=!1,o=!1,a="",u="",h=!1,f=!1;function m(C){const{filledPositions:O,players:L}=C.detail;e(0,r=L),e(6,f=O===11)}function y(C){const{email:O,allowEmails:L}=C.detail;T(O,L)}async function T(C,O){e(5,h=!0);try{await Tg(r,C,O),e(3,a="Bedankt voor je stem!"),e(1,s=!1),e(2,o=!0),I&&I.resetPlayers()}catch(L){e(4,u="Er is iets misgegaan. Probeer het later opnieuw."),console.error("Error submitting team:",L)}finally{e(5,h=!1)}}let I;function P(C){Vr[C?"unshift":"push"](()=>{I=C,e(7,I)})}return[r,s,o,a,u,h,f,I,m,y,P,()=>e(1,s=!0),()=>e(1,s=!1)]}class Bg extends Kn{constructor(t){super(),Hn(this,t,Ug,xg,qn,{})}}new Bg({target:document.getElementById("app")});
