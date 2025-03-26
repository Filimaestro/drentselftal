var Gc=Object.defineProperty;var Wc=(n,t,e)=>t in n?Gc(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var Ss=(n,t,e)=>Wc(n,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();function be(){}function El(n){return n()}function Go(){return Object.create(null)}function Kt(n){n.forEach(El)}function vl(n){return typeof n=="function"}function qr(n,t){return n!=n?t==t:n!==t||n&&typeof n=="object"||typeof n=="function"}function Qc(n){return Object.keys(n).length===0}function N(n,t){n.appendChild(t)}function rt(n,t,e){n.insertBefore(t,e||null)}function nt(n){n.parentNode&&n.parentNode.removeChild(n)}function Cs(n,t){for(let e=0;e<n.length;e+=1)n[e]&&n[e].d(t)}function B(n){return document.createElement(n)}function ct(n){return document.createTextNode(n)}function Z(){return ct(" ")}function Tl(){return ct("")}function _t(n,t,e,r){return n.addEventListener(t,e,r),()=>n.removeEventListener(t,e,r)}function Il(n){return function(t){return t.preventDefault(),n.call(this,t)}}function D(n,t,e){e==null?n.removeAttribute(t):n.getAttribute(t)!==e&&n.setAttribute(t,e)}function Xc(n){return Array.from(n.childNodes)}function Mt(n,t){t=""+t,n.data!==t&&(n.data=t)}function ie(n,t){n.value=t??""}function Wo(n,t,e,r){e==null?n.style.removeProperty(t):n.style.setProperty(t,e,"")}function Yc(n,t,{bubbles:e=!1,cancelable:r=!1}={}){return new CustomEvent(n,{detail:t,bubbles:e,cancelable:r})}let Vn;function bn(n){Vn=n}function wl(){if(!Vn)throw new Error("Function called outside component initialization");return Vn}function Al(n){wl().$$.on_mount.push(n)}function fi(){const n=wl();return(t,e,{cancelable:r=!1}={})=>{const s=n.$$.callbacks[t];if(s){const o=Yc(t,e,{cancelable:r});return s.slice().forEach(a=>{a.call(n,o)}),!o.defaultPrevented}return!0}}const Ue=[],Us=[];let $e=[];const Qo=[],Jc=Promise.resolve();let Bs=!1;function Zc(){Bs||(Bs=!0,Jc.then(bl))}function js(n){$e.push(n)}const Vs=new Set;let Fe=0;function bl(){if(Fe!==0)return;const n=Vn;do{try{for(;Fe<Ue.length;){const t=Ue[Fe];Fe++,bn(t),th(t.$$)}}catch(t){throw Ue.length=0,Fe=0,t}for(bn(null),Ue.length=0,Fe=0;Us.length;)Us.pop()();for(let t=0;t<$e.length;t+=1){const e=$e[t];Vs.has(e)||(Vs.add(e),e())}$e.length=0}while(Ue.length);for(;Qo.length;)Qo.pop()();Bs=!1,Vs.clear(),bn(n)}function th(n){if(n.fragment!==null){n.update(),Kt(n.before_update);const t=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,t),n.after_update.forEach(js)}}function eh(n){const t=[],e=[];$e.forEach(r=>n.indexOf(r)===-1?t.push(r):e.push(r)),e.forEach(r=>r()),$e=t}const pr=new Set;let nh;function Ir(n,t){n&&n.i&&(pr.delete(n),n.i(t))}function qs(n,t,e,r){if(n&&n.o){if(pr.has(n))return;pr.add(n),nh.c.push(()=>{pr.delete(n)}),n.o(t)}}function xe(n){return(n==null?void 0:n.length)!==void 0?n:Array.from(n)}function zs(n){n&&n.c()}function wr(n,t,e){const{fragment:r,after_update:s}=n.$$;r&&r.m(t,e),js(()=>{const o=n.$$.on_mount.map(El).filter(vl);n.$$.on_destroy?n.$$.on_destroy.push(...o):Kt(o),n.$$.on_mount=[]}),s.forEach(js)}function Ar(n,t){const e=n.$$;e.fragment!==null&&(eh(e.after_update),Kt(e.on_destroy),e.fragment&&e.fragment.d(t),e.on_destroy=e.fragment=null,e.ctx=[])}function rh(n,t){n.$$.dirty[0]===-1&&(Ue.push(n),Zc(),n.$$.dirty.fill(0)),n.$$.dirty[t/31|0]|=1<<t%31}function zr(n,t,e,r,s,o,a=null,u=[-1]){const h=Vn;bn(n);const f=n.$$={fragment:null,ctx:[],props:o,update:be,not_equal:s,bound:Go(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(h?h.$$.context:[])),callbacks:Go(),dirty:u,skip_bound:!1,root:t.target||h.$$.root};a&&a(f.root);let p=!1;if(f.ctx=e?e(n,t.props||{},(E,A,...R)=>{const S=R.length?R[0]:A;return f.ctx&&s(f.ctx[E],f.ctx[E]=S)&&(!f.skip_bound&&f.bound[E]&&f.bound[E](S),p&&rh(n,E)),A}):[],f.update(),p=!0,Kt(f.before_update),f.fragment=r?r(f.ctx):!1,t.target){if(t.hydrate){const E=Xc(t.target);f.fragment&&f.fragment.l(E),E.forEach(nt)}else f.fragment&&f.fragment.c();t.intro&&Ir(n.$$.fragment),wr(n,t.target,t.anchor),bl()}bn(h)}class $r{constructor(){Ss(this,"$$");Ss(this,"$$set")}$destroy(){Ar(this,1),this.$destroy=be}$on(t,e){if(!vl(e))return be;const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(e),()=>{const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}$set(t){this.$$set&&!Qc(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const sh="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(sh);function Xo(n){let t,e,r,s,o=n[6]?"Edit":"Add",a,u,h,f,p,E,A,R,S,O,V,k,j,x,W,G,M,T,_,m,y,v,I,g,it,z,Vt=n[6]?"Save":"Add",Gt,Wt,ke;return{c(){t=B("div"),e=B("div"),r=B("div"),s=B("h3"),a=ct(o),u=ct(" Player - "),h=ct(n[3]),f=ct(" #"),p=ct(n[4]),E=Z(),A=B("form"),R=B("div"),S=B("label"),S.textContent="First Name:",O=Z(),V=B("input"),k=Z(),j=B("div"),x=B("label"),x.textContent="Surname:",W=Z(),G=B("input"),M=Z(),T=B("div"),_=B("label"),_.textContent="Club:",m=Z(),y=B("input"),v=Z(),I=B("div"),g=B("button"),g.textContent="Cancel",it=Z(),z=B("button"),Gt=ct(Vt),D(s,"id","modal-title"),D(s,"class","svelte-jja17o"),D(r,"class","modal-header svelte-jja17o"),D(S,"for","firstName"),D(S,"class","svelte-jja17o"),D(V,"type","text"),D(V,"id","firstName"),V.required=!0,D(V,"placeholder","Enter first name"),D(V,"class","svelte-jja17o"),D(R,"class","form-group svelte-jja17o"),D(x,"for","surname"),D(x,"class","svelte-jja17o"),D(G,"type","text"),D(G,"id","surname"),G.required=!0,D(G,"placeholder","Enter surname"),D(G,"class","svelte-jja17o"),D(j,"class","form-group svelte-jja17o"),D(_,"for","playerClub"),D(_,"class","svelte-jja17o"),D(y,"type","text"),D(y,"id","playerClub"),y.required=!0,D(y,"placeholder","Enter club name"),D(y,"class","svelte-jja17o"),D(T,"class","form-group svelte-jja17o"),D(g,"type","button"),D(g,"class","cancel-button svelte-jja17o"),D(z,"type","submit"),D(z,"class","save-button svelte-jja17o"),D(I,"class","modal-footer svelte-jja17o"),D(A,"class","modal-content svelte-jja17o"),D(e,"class","modal svelte-jja17o"),D(e,"role","dialog"),D(e,"aria-labelledby","modal-title"),D(e,"aria-modal","true"),D(t,"class","modal-backdrop svelte-jja17o"),D(t,"role","presentation")},m(yt,xt){rt(yt,t,xt),N(t,e),N(e,r),N(r,s),N(s,a),N(s,u),N(s,h),N(s,f),N(s,p),N(e,E),N(e,A),N(A,R),N(R,S),N(R,O),N(R,V),ie(V,n[0]),N(A,k),N(A,j),N(j,x),N(j,W),N(j,G),ie(G,n[1]),N(A,M),N(A,T),N(T,_),N(T,m),N(T,y),ie(y,n[2]),N(A,v),N(A,I),N(I,g),N(I,it),N(I,z),N(z,Gt),Wt||(ke=[_t(V,"input",n[9]),_t(G,"input",n[10]),_t(y,"input",n[11]),_t(g,"click",n[8]),_t(A,"submit",Il(n[7]))],Wt=!0)},p(yt,xt){xt&64&&o!==(o=yt[6]?"Edit":"Add")&&Mt(a,o),xt&8&&Mt(h,yt[3]),xt&16&&Mt(p,yt[4]),xt&1&&V.value!==yt[0]&&ie(V,yt[0]),xt&2&&G.value!==yt[1]&&ie(G,yt[1]),xt&4&&y.value!==yt[2]&&ie(y,yt[2]),xt&64&&Vt!==(Vt=yt[6]?"Save":"Add")&&Mt(Gt,Vt)},d(yt){yt&&nt(t),Wt=!1,Kt(ke)}}}function ih(n){let t,e=n[5]&&Xo(n);return{c(){e&&e.c(),t=Tl()},m(r,s){e&&e.m(r,s),rt(r,t,s)},p(r,[s]){r[5]?e?e.p(r,s):(e=Xo(r),e.c(),e.m(t.parentNode,t)):e&&(e.d(1),e=null)},i:be,o:be,d(r){r&&nt(t),e&&e.d(r)}}}function oh(n,t,e){let{position:r}=t,{number:s}=t,{firstName:o=""}=t,{surname:a=""}=t,{club:u=""}=t,{isOpen:h=!1}=t,{isEdit:f=!1}=t;const p=fi();function E(){p("save",{firstName:o,surname:a,club:u}),p("close")}function A(){p("close")}function R(k){k.key==="Escape"&&h&&A()}Al(()=>(document.addEventListener("keydown",R),()=>{document.removeEventListener("keydown",R)}));function S(){o=this.value,e(0,o),e(5,h),e(6,f)}function O(){a=this.value,e(1,a),e(5,h),e(6,f)}function V(){u=this.value,e(2,u),e(5,h),e(6,f)}return n.$$set=k=>{"position"in k&&e(3,r=k.position),"number"in k&&e(4,s=k.number),"firstName"in k&&e(0,o=k.firstName),"surname"in k&&e(1,a=k.surname),"club"in k&&e(2,u=k.club),"isOpen"in k&&e(5,h=k.isOpen),"isEdit"in k&&e(6,f=k.isEdit)},n.$$.update=()=>{n.$$.dirty&96&&h&&!f&&(e(0,o=""),e(1,a=""),e(2,u=""))},[o,a,u,r,s,h,f,E,A,S,O,V]}class ah extends $r{constructor(t){super(),zr(this,t,oh,ih,qr,{position:3,number:4,firstName:0,surname:1,club:2,isOpen:5,isEdit:6})}}function Yo(n,t,e){const r=n.slice();return r[20]=t[e],r[22]=e,r}function Jo(n,t,e){const r=n.slice();return r[20]=t[e],r[22]=e,r}function Zo(n,t,e){const r=n.slice();return r[20]=t[e],r[22]=e,r}function ta(n){let t,e=fe(n[0][1])+"",r,s,o,a=n[0][1].club+"",u;return{c(){t=B("span"),r=ct(e),s=Z(),o=B("span"),u=ct(a),D(t,"class","player-name svelte-p0e7uy"),D(o,"class","player-club svelte-p0e7uy")},m(h,f){rt(h,t,f),N(t,r),rt(h,s,f),rt(h,o,f),N(o,u)},p(h,f){f&1&&e!==(e=fe(h[0][1])+"")&&Mt(r,e),f&1&&a!==(a=h[0][1].club+"")&&Mt(u,a)},d(h){h&&(nt(t),nt(s),nt(o))}}}function ea(n){let t,e=fe(n[0][n[22]===0?3:n[22]===1?4:2])+"",r,s,o,a=n[0][n[22]===0?3:n[22]===1?4:2].club+"",u;return{c(){t=B("span"),r=ct(e),s=Z(),o=B("span"),u=ct(a),D(t,"class","player-name svelte-p0e7uy"),D(o,"class","player-club svelte-p0e7uy")},m(h,f){rt(h,t,f),N(t,r),rt(h,s,f),rt(h,o,f),N(o,u)},p(h,f){f&1&&e!==(e=fe(h[0][h[22]===0?3:h[22]===1?4:2])+"")&&Mt(r,e),f&1&&a!==(a=h[0][h[22]===0?3:h[22]===1?4:2].club+"")&&Mt(u,a)},d(h){h&&(nt(t),nt(s),nt(o))}}}function na(n){let t,e,r,s,o,a,u=n[0][n[22]===0?3:n[22]===1?4:2]&&ea(n);function h(){return n[11](n[22])}function f(...p){return n[12](n[22],...p)}return{c(){t=B("button"),e=B("span"),e.textContent=`${n[22]===0?3:n[22]===1?4:2}`,r=Z(),u&&u.c(),s=Z(),D(e,"class","number svelte-p0e7uy"),D(t,"type","button"),D(t,"class","player-position defender svelte-p0e7uy"),D(t,"style","bottom: "+n[20].bottom+"; "+(n[20].left?"left: "+n[20].left:"right: "+n[20].right)),D(t,"aria-label","Select defender position "+(n[22]+1))},m(p,E){rt(p,t,E),N(t,e),N(t,r),u&&u.m(t,null),N(t,s),o||(a=[_t(t,"click",h),_t(t,"keydown",f)],o=!0)},p(p,E){n=p,n[0][n[22]===0?3:n[22]===1?4:2]?u?u.p(n,E):(u=ea(n),u.c(),u.m(t,s)):u&&(u.d(1),u=null)},d(p){p&&nt(t),u&&u.d(),o=!1,Kt(a)}}}function ra(n){let t,e=fe(n[0][n[22]===0?6:n[22]===1?5:n[22]===2?10:8])+"",r,s,o,a=n[0][n[22]===0?6:n[22]===1?5:n[22]===2?10:8].club+"",u;return{c(){t=B("span"),r=ct(e),s=Z(),o=B("span"),u=ct(a),D(t,"class","player-name svelte-p0e7uy"),D(o,"class","player-club svelte-p0e7uy")},m(h,f){rt(h,t,f),N(t,r),rt(h,s,f),rt(h,o,f),N(o,u)},p(h,f){f&1&&e!==(e=fe(h[0][h[22]===0?6:h[22]===1?5:h[22]===2?10:8])+"")&&Mt(r,e),f&1&&a!==(a=h[0][h[22]===0?6:h[22]===1?5:h[22]===2?10:8].club+"")&&Mt(u,a)},d(h){h&&(nt(t),nt(s),nt(o))}}}function sa(n){let t,e,r,s,o,a,u=n[0][n[22]===0?6:n[22]===1?5:n[22]===2?10:8]&&ra(n);function h(){return n[13](n[22])}function f(...p){return n[14](n[22],...p)}return{c(){t=B("button"),e=B("span"),e.textContent=`${n[22]===0?6:n[22]===1?5:n[22]===2?10:8}`,r=Z(),u&&u.c(),s=Z(),D(e,"class","number svelte-p0e7uy"),D(t,"type","button"),D(t,"class","player-position midfielder svelte-p0e7uy"),D(t,"style","bottom: "+n[20].bottom+"; "+(n[20].left?"left: "+n[20].left:"right: "+n[20].right)),D(t,"aria-label","Select midfielder position "+(n[22]+1))},m(p,E){rt(p,t,E),N(t,e),N(t,r),u&&u.m(t,null),N(t,s),o||(a=[_t(t,"click",h),_t(t,"keydown",f)],o=!0)},p(p,E){n=p,n[0][n[22]===0?6:n[22]===1?5:n[22]===2?10:8]?u?u.p(n,E):(u=ra(n),u.c(),u.m(t,s)):u&&(u.d(1),u=null)},d(p){p&&nt(t),u&&u.d(),o=!1,Kt(a)}}}function ia(n){let t,e=fe(n[0][n[22]===0?11:n[22]===1?9:7])+"",r,s,o,a=n[0][n[22]===0?11:n[22]===1?9:7].club+"",u;return{c(){t=B("span"),r=ct(e),s=Z(),o=B("span"),u=ct(a),D(t,"class","player-name svelte-p0e7uy"),D(o,"class","player-club svelte-p0e7uy")},m(h,f){rt(h,t,f),N(t,r),rt(h,s,f),rt(h,o,f),N(o,u)},p(h,f){f&1&&e!==(e=fe(h[0][h[22]===0?11:h[22]===1?9:7])+"")&&Mt(r,e),f&1&&a!==(a=h[0][h[22]===0?11:h[22]===1?9:7].club+"")&&Mt(u,a)},d(h){h&&(nt(t),nt(s),nt(o))}}}function oa(n){let t,e,r,s,o,a,u=n[0][n[22]===0?11:n[22]===1?9:7]&&ia(n);function h(){return n[15](n[22])}function f(...p){return n[16](n[22],...p)}return{c(){t=B("button"),e=B("span"),e.textContent=`${n[22]===0?11:n[22]===1?9:7}`,r=Z(),u&&u.c(),s=Z(),D(e,"class","number svelte-p0e7uy"),D(t,"type","button"),D(t,"class","player-position forward svelte-p0e7uy"),D(t,"style","bottom: "+n[20].bottom+"; "+(n[20].left?"left: "+n[20].left:"right: "+n[20].right)),D(t,"aria-label","Select forward position "+(n[22]+1))},m(p,E){rt(p,t,E),N(t,e),N(t,r),u&&u.m(t,null),N(t,s),o||(a=[_t(t,"click",h),_t(t,"keydown",f)],o=!0)},p(p,E){n=p,n[0][n[22]===0?11:n[22]===1?9:7]?u?u.p(n,E):(u=ia(n),u.c(),u.m(t,s)):u&&(u.d(1),u=null)},d(p){p&&nt(t),u&&u.d(),o=!1,Kt(a)}}}function lh(n){var M,T,_;let t,e,r,s,o,a,u,h,f,p,E,A,R,S,O=n[0][1]&&ta(n),V=xe(n[5].defenders),k=[];for(let m=0;m<V.length;m+=1)k[m]=na(Zo(n,V,m));let j=xe(n[5].midfielders),x=[];for(let m=0;m<j.length;m+=1)x[m]=sa(Jo(n,j,m));let W=xe(n[5].forwards),G=[];for(let m=0;m<W.length;m+=1)G[m]=oa(Yo(n,W,m));return E=new ah({props:{isOpen:n[1],position:n[2]||"",number:n[3]||0,firstName:((M=n[4])==null?void 0:M.firstName)||"",surname:((T=n[4])==null?void 0:T.surname)||"",club:((_=n[4])==null?void 0:_.club)||"",isEdit:!!n[4]}}),E.$on("save",n[7]),E.$on("close",n[17]),{c(){t=B("div"),e=B("div"),r=B("div"),s=B("button"),o=B("span"),o.textContent="1",a=Z(),O&&O.c(),u=Z();for(let m=0;m<k.length;m+=1)k[m].c();h=Z();for(let m=0;m<x.length;m+=1)x[m].c();f=Z();for(let m=0;m<G.length;m+=1)G[m].c();p=Z(),zs(E.$$.fragment),D(o,"class","number svelte-p0e7uy"),D(s,"type","button"),D(s,"class","player-position goalkeeper svelte-p0e7uy"),Wo(s,"bottom",n[5].goalkeeper.bottom),Wo(s,"left",n[5].goalkeeper.left),D(s,"aria-label","Select goalkeeper position"),D(r,"class","player-positions svelte-p0e7uy"),D(e,"class","pitch-container svelte-p0e7uy"),D(t,"class","football-pitch svelte-p0e7uy")},m(m,y){rt(m,t,y),N(t,e),N(e,r),N(r,s),N(s,o),N(s,a),O&&O.m(s,null),N(r,u);for(let v=0;v<k.length;v+=1)k[v]&&k[v].m(r,null);N(r,h);for(let v=0;v<x.length;v+=1)x[v]&&x[v].m(r,null);N(r,f);for(let v=0;v<G.length;v+=1)G[v]&&G[v].m(r,null);rt(m,p,y),wr(E,m,y),A=!0,R||(S=[_t(s,"click",n[9]),_t(s,"keydown",n[10])],R=!0)},p(m,[y]){var I,g,it;if(m[0][1]?O?O.p(m,y):(O=ta(m),O.c(),O.m(s,null)):O&&(O.d(1),O=null),y&97){V=xe(m[5].defenders);let z;for(z=0;z<V.length;z+=1){const Vt=Zo(m,V,z);k[z]?k[z].p(Vt,y):(k[z]=na(Vt),k[z].c(),k[z].m(r,h))}for(;z<k.length;z+=1)k[z].d(1);k.length=V.length}if(y&97){j=xe(m[5].midfielders);let z;for(z=0;z<j.length;z+=1){const Vt=Jo(m,j,z);x[z]?x[z].p(Vt,y):(x[z]=sa(Vt),x[z].c(),x[z].m(r,f))}for(;z<x.length;z+=1)x[z].d(1);x.length=j.length}if(y&97){W=xe(m[5].forwards);let z;for(z=0;z<W.length;z+=1){const Vt=Yo(m,W,z);G[z]?G[z].p(Vt,y):(G[z]=oa(Vt),G[z].c(),G[z].m(r,null))}for(;z<G.length;z+=1)G[z].d(1);G.length=W.length}const v={};y&2&&(v.isOpen=m[1]),y&4&&(v.position=m[2]||""),y&8&&(v.number=m[3]||0),y&16&&(v.firstName=((I=m[4])==null?void 0:I.firstName)||""),y&16&&(v.surname=((g=m[4])==null?void 0:g.surname)||""),y&16&&(v.club=((it=m[4])==null?void 0:it.club)||""),y&16&&(v.isEdit=!!m[4]),E.$set(v)},i(m){A||(Ir(E.$$.fragment,m),A=!0)},o(m){qs(E.$$.fragment,m),A=!1},d(m){m&&(nt(t),nt(p)),O&&O.d(),Cs(k,m),Cs(x,m),Cs(G,m),Ar(E,m),R=!1,Kt(S)}}}function fe(n){return window.matchMedia("(max-width: 768px)").matches?n.surname:`${n.firstName} ${n.surname}`}function uh(n,t,e){const r=fi();let s={},o=!1,a=null,u=null,h=null;const f={goalkeeper:{bottom:"5%",left:"50%"},defenders:[{bottom:"25%",left:"17%"},{bottom:"25%",left:"50%"},{bottom:"25%",left:"83%"}],midfielders:[{bottom:"45%",left:"12.5%"},{bottom:"45%",left:"37.5%"},{bottom:"45%",left:"62.5%"},{bottom:"45%",left:"87.5%"}],forwards:[{bottom:"70%",left:"17%"},{bottom:"70%",left:"50%"},{bottom:"70%",left:"83%"}]};function p(M,T){e(2,a=M),e(3,u=T),e(4,h=s[T]||null),e(1,o=!0)}function E(M){if(u!==null){e(0,s[u]={firstName:M.detail.firstName,surname:M.detail.surname,club:M.detail.club},s),e(0,s),e(1,o=!1),e(2,a=null),e(3,u=null),e(4,h=null);const T=Object.keys(s).length;r("playersUpdate",{filledPositions:T,players:s})}}function A(){e(0,s={}),e(1,o=!1),e(2,a=null),e(3,u=null),e(4,h=null),r("playersUpdate",{filledPositions:0,players:s})}return[s,o,a,u,h,f,p,E,A,()=>p("goalkeeper",1),M=>M.key==="Enter"&&p("goalkeeper",1),M=>p("defender",M===0?3:M===1?4:2),(M,T)=>T.key==="Enter"&&p("defender",M===0?3:M===1?4:2),M=>p("midfielder",M===0?6:M===1?5:M===2?10:8),(M,T)=>T.key==="Enter"&&p("midfielder",M===0?6:M===1?5:M===2?10:8),M=>p("forward",M===0?11:M===1?9:7),(M,T)=>T.key==="Enter"&&p("forward",M===0?11:M===1?9:7),()=>{e(1,o=!1),e(4,h=null)}]}class ch extends $r{constructor(t){super(),zr(this,t,uh,lh,qr,{resetPlayers:8})}get resetPlayers(){return this.$$.ctx[8]}}function aa(n){let t,e,r,s,o,a,u,h,f,p,E,A,R,S,O,V,k,j,x,W,G,M,T,_,m=n[2]&&la(n);function y(g,it){return g[1]?fh:hh}let v=y(n),I=v(n);return{c(){t=B("div"),e=B("div"),r=B("div"),r.innerHTML='<h3 id="email-form-title" class="svelte-txf4uf">Verstuur je stem</h3>',s=Z(),o=B("form"),m&&m.c(),a=Z(),u=B("div"),h=B("label"),h.textContent="E-mailadres:",f=Z(),p=B("input"),E=Z(),A=B("div"),R=B("label"),S=B("input"),O=Z(),V=B("span"),V.textContent="Ik wil mail ontvangen van RTV Drenthe over Onze Club. Als je dit aanvinkt meld je je alleen aan voor nieuws rond Onze Club",k=Z(),j=B("div"),x=B("button"),W=ct("Annuleren"),G=Z(),M=B("button"),I.c(),D(r,"class","modal-header svelte-txf4uf"),D(h,"for","email"),D(h,"class","svelte-txf4uf"),D(p,"type","email"),D(p,"id","email"),p.required=!0,D(p,"placeholder","Vul je e-mailadres in"),p.disabled=n[1],D(p,"class","svelte-txf4uf"),D(u,"class","form-group svelte-txf4uf"),D(S,"type","checkbox"),S.disabled=n[1],D(S,"class","svelte-txf4uf"),D(R,"class","checkbox-label svelte-txf4uf"),D(A,"class","form-group checkbox-group svelte-txf4uf"),D(x,"type","button"),D(x,"class","cancel-button svelte-txf4uf"),x.disabled=n[1],D(M,"type","submit"),D(M,"class","save-button svelte-txf4uf"),M.disabled=n[1],D(j,"class","modal-footer svelte-txf4uf"),D(o,"class","modal-content svelte-txf4uf"),D(e,"class","modal svelte-txf4uf"),D(e,"role","dialog"),D(e,"aria-labelledby","email-form-title"),D(e,"aria-modal","true"),D(t,"class","modal-backdrop svelte-txf4uf"),D(t,"role","presentation")},m(g,it){rt(g,t,it),N(t,e),N(e,r),N(e,s),N(e,o),m&&m.m(o,null),N(o,a),N(o,u),N(u,h),N(u,f),N(u,p),ie(p,n[3]),N(o,E),N(o,A),N(A,R),N(R,S),S.checked=n[4],N(R,O),N(R,V),N(o,k),N(o,j),N(j,x),N(x,W),N(j,G),N(j,M),I.m(M,null),T||(_=[_t(p,"input",n[7]),_t(S,"change",n[8]),_t(x,"click",n[5]),_t(o,"submit",Il(n[6]))],T=!0)},p(g,it){g[2]?m?m.p(g,it):(m=la(g),m.c(),m.m(o,a)):m&&(m.d(1),m=null),it&2&&(p.disabled=g[1]),it&8&&p.value!==g[3]&&ie(p,g[3]),it&2&&(S.disabled=g[1]),it&16&&(S.checked=g[4]),it&2&&(x.disabled=g[1]),v!==(v=y(g))&&(I.d(1),I=v(g),I&&(I.c(),I.m(M,null))),it&2&&(M.disabled=g[1])},d(g){g&&nt(t),m&&m.d(),I.d(),T=!1,Kt(_)}}}function la(n){let t,e;return{c(){t=B("div"),e=ct(n[2]),D(t,"class","error-message svelte-txf4uf")},m(r,s){rt(r,t,s),N(t,e)},p(r,s){s&4&&Mt(e,r[2])},d(r){r&&nt(t)}}}function hh(n){let t;return{c(){t=ct("Versturen")},m(e,r){rt(e,t,r)},d(e){e&&nt(t)}}}function fh(n){let t;return{c(){t=ct("Versturen...")},m(e,r){rt(e,t,r)},d(e){e&&nt(t)}}}function dh(n){let t,e=n[0]&&aa(n);return{c(){e&&e.c(),t=Tl()},m(r,s){e&&e.m(r,s),rt(r,t,s)},p(r,[s]){r[0]?e?e.p(r,s):(e=aa(r),e.c(),e.m(t.parentNode,t)):e&&(e.d(1),e=null)},i:be,o:be,d(r){r&&nt(t),e&&e.d(r)}}}function mh(n,t,e){let{isOpen:r=!1}=t,{isSubmitting:s=!1}=t,{submitError:o=null}=t,a="",u=!1;const h=fi();function f(){s||h("close")}function p(){s||h("submit",{email:a,consent:u})}function E(S){S.key==="Escape"&&r&&!s&&f()}Al(()=>(document.addEventListener("keydown",E),()=>{document.removeEventListener("keydown",E)}));function A(){a=this.value,e(3,a)}function R(){u=this.checked,e(4,u)}return n.$$set=S=>{"isOpen"in S&&e(0,r=S.isOpen),"isSubmitting"in S&&e(1,s=S.isSubmitting),"submitError"in S&&e(2,o=S.submitError)},[r,s,o,a,u,f,p,A,R]}class ph extends $r{constructor(t){super(),zr(this,t,mh,dh,qr,{isOpen:0,isSubmitting:1,submitError:2})}}const gh=()=>{};var ua={};/**
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
 */const Rl=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?t[e++]=s:s<2048?(t[e++]=s>>6|192,t[e++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=s>>18|240,t[e++]=s>>12&63|128,t[e++]=s>>6&63|128,t[e++]=s&63|128):(t[e++]=s>>12|224,t[e++]=s>>6&63|128,t[e++]=s&63|128)}return t},_h=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const s=n[e++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const o=n[e++];t[r++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=n[e++],a=n[e++],u=n[e++],h=((s&7)<<18|(o&63)<<12|(a&63)<<6|u&63)-65536;t[r++]=String.fromCharCode(55296+(h>>10)),t[r++]=String.fromCharCode(56320+(h&1023))}else{const o=n[e++],a=n[e++];t[r++]=String.fromCharCode((s&15)<<12|(o&63)<<6|a&63)}}return t.join("")},Pl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const o=n[s],a=s+1<n.length,u=a?n[s+1]:0,h=s+2<n.length,f=h?n[s+2]:0,p=o>>2,E=(o&3)<<4|u>>4;let A=(u&15)<<2|f>>6,R=f&63;h||(R=64,a||(A=64)),r.push(e[p],e[E],e[A],e[R])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(Rl(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):_h(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const o=e[n.charAt(s++)],u=s<n.length?e[n.charAt(s)]:0;++s;const f=s<n.length?e[n.charAt(s)]:64;++s;const E=s<n.length?e[n.charAt(s)]:64;if(++s,o==null||u==null||f==null||E==null)throw new yh;const A=o<<2|u>>4;if(r.push(A),f!==64){const R=u<<4&240|f>>2;if(r.push(R),E!==64){const S=f<<6&192|E;r.push(S)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class yh extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Eh=function(n){const t=Rl(n);return Pl.encodeByteArray(t,!0)},br=function(n){return Eh(n).replace(/\./g,"")},vh=function(n){try{return Pl.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function Th(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Ih=()=>Th().__FIREBASE_DEFAULTS__,wh=()=>{if(typeof process>"u"||typeof ua>"u")return;const n=ua.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Ah=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&vh(n[1]);return t&&JSON.parse(t)},di=()=>{try{return gh()||Ih()||wh()||Ah()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},bh=n=>{var t,e;return(e=(t=di())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},Rh=n=>{const t=bh(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},Sl=()=>{var n;return(n=di())===null||n===void 0?void 0:n.config};/**
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
 */class Ph{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
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
 */function Sh(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",s=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n);return[br(JSON.stringify(e)),br(JSON.stringify(a)),""].join(".")}/**
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
 */function Ch(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Vh(){var n;const t=(n=di())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Dh(){return!Vh()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function kh(){try{return typeof indexedDB=="object"}catch{return!1}}function Nh(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{e=!1},s.onerror=()=>{var o;t(((o=s.error)===null||o===void 0?void 0:o.message)||"")}}catch(e){t(e)}})}/**
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
 */const Oh="FirebaseError";class en extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=Oh,Object.setPrototypeOf(this,en.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Cl.prototype.create)}}class Cl{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},s=`${this.service}/${t}`,o=this.errors[t],a=o?Mh(o,r):"Error",u=`${this.serviceName}: ${a} (${s}).`;return new en(s,u,r)}}function Mh(n,t){return n.replace(Lh,(e,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const Lh=/\{\$([^}]+)}/g;function Rr(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const s of e){if(!r.includes(s))return!1;const o=n[s],a=t[s];if(ca(o)&&ca(a)){if(!Rr(o,a))return!1}else if(o!==a)return!1}for(const s of r)if(!e.includes(s))return!1;return!0}function ca(n){return n!==null&&typeof n=="object"}/**
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
 */function Ge(n){return n&&n._delegate?n._delegate:n}class Dn{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const we="[DEFAULT]";/**
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
 */class Fh{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new Ph;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:e});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Uh(t))try{this.getOrInitializeService({instanceIdentifier:we})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(e);try{const o=this.getOrInitializeService({instanceIdentifier:s});r.resolve(o)}catch{}}}}clearInstance(t=we){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=we){return this.instances.has(t)}getOptions(t=we){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[o,a]of this.instancesDeferred.entries()){const u=this.normalizeInstanceIdentifier(o);r===u&&a.resolve(s)}return s}onInit(t,e){var r;const s=this.normalizeInstanceIdentifier(e),o=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(s,o);const a=this.instances.get(s);return a&&t(a,s),()=>{o.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const s of r)try{s(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:xh(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=we){return this.component?this.component.multipleInstances?t:we:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function xh(n){return n===we?void 0:n}function Uh(n){return n.instantiationMode==="EAGER"}/**
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
 */class Bh{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new Fh(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var J;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(J||(J={}));const jh={debug:J.DEBUG,verbose:J.VERBOSE,info:J.INFO,warn:J.WARN,error:J.ERROR,silent:J.SILENT},qh=J.INFO,zh={[J.DEBUG]:"log",[J.VERBOSE]:"log",[J.INFO]:"info",[J.WARN]:"warn",[J.ERROR]:"error"},$h=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),s=zh[t];if(s)console[s](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Vl{constructor(t){this.name=t,this._logLevel=qh,this._logHandler=$h,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in J))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?jh[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,J.DEBUG,...t),this._logHandler(this,J.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,J.VERBOSE,...t),this._logHandler(this,J.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,J.INFO,...t),this._logHandler(this,J.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,J.WARN,...t),this._logHandler(this,J.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,J.ERROR,...t),this._logHandler(this,J.ERROR,...t)}}const Hh=(n,t)=>t.some(e=>n instanceof e);let ha,fa;function Kh(){return ha||(ha=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Gh(){return fa||(fa=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Dl=new WeakMap,$s=new WeakMap,kl=new WeakMap,Ds=new WeakMap,mi=new WeakMap;function Wh(n){const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("success",o),n.removeEventListener("error",a)},o=()=>{e(ae(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",o),n.addEventListener("error",a)});return t.then(e=>{e instanceof IDBCursor&&Dl.set(e,n)}).catch(()=>{}),mi.set(t,n),t}function Qh(n){if($s.has(n))return;const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",a),n.removeEventListener("abort",a)},o=()=>{e(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",o),n.addEventListener("error",a),n.addEventListener("abort",a)});$s.set(n,t)}let Hs={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return $s.get(n);if(t==="objectStoreNames")return n.objectStoreNames||kl.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return ae(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function Xh(n){Hs=n(Hs)}function Yh(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call(ks(this),t,...e);return kl.set(r,t.sort?t.sort():[t]),ae(r)}:Gh().includes(n)?function(...t){return n.apply(ks(this),t),ae(Dl.get(this))}:function(...t){return ae(n.apply(ks(this),t))}}function Jh(n){return typeof n=="function"?Yh(n):(n instanceof IDBTransaction&&Qh(n),Hh(n,Kh())?new Proxy(n,Hs):n)}function ae(n){if(n instanceof IDBRequest)return Wh(n);if(Ds.has(n))return Ds.get(n);const t=Jh(n);return t!==n&&(Ds.set(n,t),mi.set(t,n)),t}const ks=n=>mi.get(n);function Zh(n,t,{blocked:e,upgrade:r,blocking:s,terminated:o}={}){const a=indexedDB.open(n,t),u=ae(a);return r&&a.addEventListener("upgradeneeded",h=>{r(ae(a.result),h.oldVersion,h.newVersion,ae(a.transaction),h)}),e&&a.addEventListener("blocked",h=>e(h.oldVersion,h.newVersion,h)),u.then(h=>{o&&h.addEventListener("close",()=>o()),s&&h.addEventListener("versionchange",f=>s(f.oldVersion,f.newVersion,f))}).catch(()=>{}),u}const tf=["get","getKey","getAll","getAllKeys","count"],ef=["put","add","delete","clear"],Ns=new Map;function da(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(Ns.get(t))return Ns.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,s=ef.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(s||tf.includes(e)))return;const o=async function(a,...u){const h=this.transaction(a,s?"readwrite":"readonly");let f=h.store;return r&&(f=f.index(u.shift())),(await Promise.all([f[e](...u),s&&h.done]))[0]};return Ns.set(t,o),o}Xh(n=>({...n,get:(t,e,r)=>da(t,e)||n.get(t,e,r),has:(t,e)=>!!da(t,e)||n.has(t,e)}));/**
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
 */class nf{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(rf(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function rf(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Ks="@firebase/app",ma="0.11.3";/**
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
 */const Jt=new Vl("@firebase/app"),sf="@firebase/app-compat",of="@firebase/analytics-compat",af="@firebase/analytics",lf="@firebase/app-check-compat",uf="@firebase/app-check",cf="@firebase/auth",hf="@firebase/auth-compat",ff="@firebase/database",df="@firebase/data-connect",mf="@firebase/database-compat",pf="@firebase/functions",gf="@firebase/functions-compat",_f="@firebase/installations",yf="@firebase/installations-compat",Ef="@firebase/messaging",vf="@firebase/messaging-compat",Tf="@firebase/performance",If="@firebase/performance-compat",wf="@firebase/remote-config",Af="@firebase/remote-config-compat",bf="@firebase/storage",Rf="@firebase/storage-compat",Pf="@firebase/firestore",Sf="@firebase/vertexai",Cf="@firebase/firestore-compat",Vf="firebase",Df="11.5.0";/**
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
 */const Gs="[DEFAULT]",kf={[Ks]:"fire-core",[sf]:"fire-core-compat",[af]:"fire-analytics",[of]:"fire-analytics-compat",[uf]:"fire-app-check",[lf]:"fire-app-check-compat",[cf]:"fire-auth",[hf]:"fire-auth-compat",[ff]:"fire-rtdb",[df]:"fire-data-connect",[mf]:"fire-rtdb-compat",[pf]:"fire-fn",[gf]:"fire-fn-compat",[_f]:"fire-iid",[yf]:"fire-iid-compat",[Ef]:"fire-fcm",[vf]:"fire-fcm-compat",[Tf]:"fire-perf",[If]:"fire-perf-compat",[wf]:"fire-rc",[Af]:"fire-rc-compat",[bf]:"fire-gcs",[Rf]:"fire-gcs-compat",[Pf]:"fire-fst",[Cf]:"fire-fst-compat",[Sf]:"fire-vertex","fire-js":"fire-js",[Vf]:"fire-js-all"};/**
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
 */const Pr=new Map,Nf=new Map,Ws=new Map;function pa(n,t){try{n.container.addComponent(t)}catch(e){Jt.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function Sr(n){const t=n.name;if(Ws.has(t))return Jt.debug(`There were multiple attempts to register component ${t}.`),!1;Ws.set(t,n);for(const e of Pr.values())pa(e,n);for(const e of Nf.values())pa(e,n);return!0}function Of(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}function Mf(n){return n==null?!1:n.settings!==void 0}/**
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
 */const Lf={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},le=new Cl("app","Firebase",Lf);/**
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
 */class Ff{constructor(t,e,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Dn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw le.create("app-deleted",{appName:this._name})}}/**
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
 */const xf=Df;function Nl(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Gs,automaticDataCollectionEnabled:!1},t),s=r.name;if(typeof s!="string"||!s)throw le.create("bad-app-name",{appName:String(s)});if(e||(e=Sl()),!e)throw le.create("no-options");const o=Pr.get(s);if(o){if(Rr(e,o.options)&&Rr(r,o.config))return o;throw le.create("duplicate-app",{appName:s})}const a=new Bh(s);for(const h of Ws.values())a.addComponent(h);const u=new Ff(e,r,a);return Pr.set(s,u),u}function Uf(n=Gs){const t=Pr.get(n);if(!t&&n===Gs&&Sl())return Nl();if(!t)throw le.create("no-app",{appName:n});return t}function He(n,t,e){var r;let s=(r=kf[n])!==null&&r!==void 0?r:n;e&&(s+=`-${e}`);const o=s.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const u=[`Unable to register library "${s}" with version "${t}":`];o&&u.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&u.push("and"),a&&u.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Jt.warn(u.join(" "));return}Sr(new Dn(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
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
 */const Bf="firebase-heartbeat-database",jf=1,kn="firebase-heartbeat-store";let Os=null;function Ol(){return Os||(Os=Zh(Bf,jf,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(kn)}catch(e){console.warn(e)}}}}).catch(n=>{throw le.create("idb-open",{originalErrorMessage:n.message})})),Os}async function qf(n){try{const e=(await Ol()).transaction(kn),r=await e.objectStore(kn).get(Ml(n));return await e.done,r}catch(t){if(t instanceof en)Jt.warn(t.message);else{const e=le.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Jt.warn(e.message)}}}async function ga(n,t){try{const r=(await Ol()).transaction(kn,"readwrite");await r.objectStore(kn).put(t,Ml(n)),await r.done}catch(e){if(e instanceof en)Jt.warn(e.message);else{const r=le.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});Jt.warn(r.message)}}}function Ml(n){return`${n.name}!${n.options.appId}`}/**
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
 */const zf=1024,$f=30;class Hf{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Gf(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,e;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=_a();if(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:s}),this._heartbeatsCache.heartbeats.length>$f){const a=Wf(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Jt.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=_a(),{heartbeatsToSend:r,unsentEntries:s}=Kf(this._heartbeatsCache.heartbeats),o=br(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return Jt.warn(e),""}}}function _a(){return new Date().toISOString().substring(0,10)}function Kf(n,t=zf){const e=[];let r=n.slice();for(const s of n){const o=e.find(a=>a.agent===s.agent);if(o){if(o.dates.push(s.date),ya(e)>t){o.dates.pop();break}}else if(e.push({agent:s.agent,dates:[s.date]}),ya(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class Gf{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return kh()?Nh().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await qf(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return ga(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return ga(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function ya(n){return br(JSON.stringify({version:2,heartbeats:n})).length}function Wf(n){if(n.length===0)return-1;let t=0,e=n[0].date;for(let r=1;r<n.length;r++)n[r].date<e&&(e=n[r].date,t=r);return t}/**
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
 */function Qf(n){Sr(new Dn("platform-logger",t=>new nf(t),"PRIVATE")),Sr(new Dn("heartbeat",t=>new Hf(t),"PRIVATE")),He(Ks,ma,n),He(Ks,ma,"esm2017"),He("fire-js","")}Qf("");var Ea=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ue,Ll;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(T,_){function m(){}m.prototype=_.prototype,T.D=_.prototype,T.prototype=new m,T.prototype.constructor=T,T.C=function(y,v,I){for(var g=Array(arguments.length-2),it=2;it<arguments.length;it++)g[it-2]=arguments[it];return _.prototype[v].apply(y,g)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(r,e),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(T,_,m){m||(m=0);var y=Array(16);if(typeof _=="string")for(var v=0;16>v;++v)y[v]=_.charCodeAt(m++)|_.charCodeAt(m++)<<8|_.charCodeAt(m++)<<16|_.charCodeAt(m++)<<24;else for(v=0;16>v;++v)y[v]=_[m++]|_[m++]<<8|_[m++]<<16|_[m++]<<24;_=T.g[0],m=T.g[1],v=T.g[2];var I=T.g[3],g=_+(I^m&(v^I))+y[0]+3614090360&4294967295;_=m+(g<<7&4294967295|g>>>25),g=I+(v^_&(m^v))+y[1]+3905402710&4294967295,I=_+(g<<12&4294967295|g>>>20),g=v+(m^I&(_^m))+y[2]+606105819&4294967295,v=I+(g<<17&4294967295|g>>>15),g=m+(_^v&(I^_))+y[3]+3250441966&4294967295,m=v+(g<<22&4294967295|g>>>10),g=_+(I^m&(v^I))+y[4]+4118548399&4294967295,_=m+(g<<7&4294967295|g>>>25),g=I+(v^_&(m^v))+y[5]+1200080426&4294967295,I=_+(g<<12&4294967295|g>>>20),g=v+(m^I&(_^m))+y[6]+2821735955&4294967295,v=I+(g<<17&4294967295|g>>>15),g=m+(_^v&(I^_))+y[7]+4249261313&4294967295,m=v+(g<<22&4294967295|g>>>10),g=_+(I^m&(v^I))+y[8]+1770035416&4294967295,_=m+(g<<7&4294967295|g>>>25),g=I+(v^_&(m^v))+y[9]+2336552879&4294967295,I=_+(g<<12&4294967295|g>>>20),g=v+(m^I&(_^m))+y[10]+4294925233&4294967295,v=I+(g<<17&4294967295|g>>>15),g=m+(_^v&(I^_))+y[11]+2304563134&4294967295,m=v+(g<<22&4294967295|g>>>10),g=_+(I^m&(v^I))+y[12]+1804603682&4294967295,_=m+(g<<7&4294967295|g>>>25),g=I+(v^_&(m^v))+y[13]+4254626195&4294967295,I=_+(g<<12&4294967295|g>>>20),g=v+(m^I&(_^m))+y[14]+2792965006&4294967295,v=I+(g<<17&4294967295|g>>>15),g=m+(_^v&(I^_))+y[15]+1236535329&4294967295,m=v+(g<<22&4294967295|g>>>10),g=_+(v^I&(m^v))+y[1]+4129170786&4294967295,_=m+(g<<5&4294967295|g>>>27),g=I+(m^v&(_^m))+y[6]+3225465664&4294967295,I=_+(g<<9&4294967295|g>>>23),g=v+(_^m&(I^_))+y[11]+643717713&4294967295,v=I+(g<<14&4294967295|g>>>18),g=m+(I^_&(v^I))+y[0]+3921069994&4294967295,m=v+(g<<20&4294967295|g>>>12),g=_+(v^I&(m^v))+y[5]+3593408605&4294967295,_=m+(g<<5&4294967295|g>>>27),g=I+(m^v&(_^m))+y[10]+38016083&4294967295,I=_+(g<<9&4294967295|g>>>23),g=v+(_^m&(I^_))+y[15]+3634488961&4294967295,v=I+(g<<14&4294967295|g>>>18),g=m+(I^_&(v^I))+y[4]+3889429448&4294967295,m=v+(g<<20&4294967295|g>>>12),g=_+(v^I&(m^v))+y[9]+568446438&4294967295,_=m+(g<<5&4294967295|g>>>27),g=I+(m^v&(_^m))+y[14]+3275163606&4294967295,I=_+(g<<9&4294967295|g>>>23),g=v+(_^m&(I^_))+y[3]+4107603335&4294967295,v=I+(g<<14&4294967295|g>>>18),g=m+(I^_&(v^I))+y[8]+1163531501&4294967295,m=v+(g<<20&4294967295|g>>>12),g=_+(v^I&(m^v))+y[13]+2850285829&4294967295,_=m+(g<<5&4294967295|g>>>27),g=I+(m^v&(_^m))+y[2]+4243563512&4294967295,I=_+(g<<9&4294967295|g>>>23),g=v+(_^m&(I^_))+y[7]+1735328473&4294967295,v=I+(g<<14&4294967295|g>>>18),g=m+(I^_&(v^I))+y[12]+2368359562&4294967295,m=v+(g<<20&4294967295|g>>>12),g=_+(m^v^I)+y[5]+4294588738&4294967295,_=m+(g<<4&4294967295|g>>>28),g=I+(_^m^v)+y[8]+2272392833&4294967295,I=_+(g<<11&4294967295|g>>>21),g=v+(I^_^m)+y[11]+1839030562&4294967295,v=I+(g<<16&4294967295|g>>>16),g=m+(v^I^_)+y[14]+4259657740&4294967295,m=v+(g<<23&4294967295|g>>>9),g=_+(m^v^I)+y[1]+2763975236&4294967295,_=m+(g<<4&4294967295|g>>>28),g=I+(_^m^v)+y[4]+1272893353&4294967295,I=_+(g<<11&4294967295|g>>>21),g=v+(I^_^m)+y[7]+4139469664&4294967295,v=I+(g<<16&4294967295|g>>>16),g=m+(v^I^_)+y[10]+3200236656&4294967295,m=v+(g<<23&4294967295|g>>>9),g=_+(m^v^I)+y[13]+681279174&4294967295,_=m+(g<<4&4294967295|g>>>28),g=I+(_^m^v)+y[0]+3936430074&4294967295,I=_+(g<<11&4294967295|g>>>21),g=v+(I^_^m)+y[3]+3572445317&4294967295,v=I+(g<<16&4294967295|g>>>16),g=m+(v^I^_)+y[6]+76029189&4294967295,m=v+(g<<23&4294967295|g>>>9),g=_+(m^v^I)+y[9]+3654602809&4294967295,_=m+(g<<4&4294967295|g>>>28),g=I+(_^m^v)+y[12]+3873151461&4294967295,I=_+(g<<11&4294967295|g>>>21),g=v+(I^_^m)+y[15]+530742520&4294967295,v=I+(g<<16&4294967295|g>>>16),g=m+(v^I^_)+y[2]+3299628645&4294967295,m=v+(g<<23&4294967295|g>>>9),g=_+(v^(m|~I))+y[0]+4096336452&4294967295,_=m+(g<<6&4294967295|g>>>26),g=I+(m^(_|~v))+y[7]+1126891415&4294967295,I=_+(g<<10&4294967295|g>>>22),g=v+(_^(I|~m))+y[14]+2878612391&4294967295,v=I+(g<<15&4294967295|g>>>17),g=m+(I^(v|~_))+y[5]+4237533241&4294967295,m=v+(g<<21&4294967295|g>>>11),g=_+(v^(m|~I))+y[12]+1700485571&4294967295,_=m+(g<<6&4294967295|g>>>26),g=I+(m^(_|~v))+y[3]+2399980690&4294967295,I=_+(g<<10&4294967295|g>>>22),g=v+(_^(I|~m))+y[10]+4293915773&4294967295,v=I+(g<<15&4294967295|g>>>17),g=m+(I^(v|~_))+y[1]+2240044497&4294967295,m=v+(g<<21&4294967295|g>>>11),g=_+(v^(m|~I))+y[8]+1873313359&4294967295,_=m+(g<<6&4294967295|g>>>26),g=I+(m^(_|~v))+y[15]+4264355552&4294967295,I=_+(g<<10&4294967295|g>>>22),g=v+(_^(I|~m))+y[6]+2734768916&4294967295,v=I+(g<<15&4294967295|g>>>17),g=m+(I^(v|~_))+y[13]+1309151649&4294967295,m=v+(g<<21&4294967295|g>>>11),g=_+(v^(m|~I))+y[4]+4149444226&4294967295,_=m+(g<<6&4294967295|g>>>26),g=I+(m^(_|~v))+y[11]+3174756917&4294967295,I=_+(g<<10&4294967295|g>>>22),g=v+(_^(I|~m))+y[2]+718787259&4294967295,v=I+(g<<15&4294967295|g>>>17),g=m+(I^(v|~_))+y[9]+3951481745&4294967295,T.g[0]=T.g[0]+_&4294967295,T.g[1]=T.g[1]+(v+(g<<21&4294967295|g>>>11))&4294967295,T.g[2]=T.g[2]+v&4294967295,T.g[3]=T.g[3]+I&4294967295}r.prototype.u=function(T,_){_===void 0&&(_=T.length);for(var m=_-this.blockSize,y=this.B,v=this.h,I=0;I<_;){if(v==0)for(;I<=m;)s(this,T,I),I+=this.blockSize;if(typeof T=="string"){for(;I<_;)if(y[v++]=T.charCodeAt(I++),v==this.blockSize){s(this,y),v=0;break}}else for(;I<_;)if(y[v++]=T[I++],v==this.blockSize){s(this,y),v=0;break}}this.h=v,this.o+=_},r.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var _=1;_<T.length-8;++_)T[_]=0;var m=8*this.o;for(_=T.length-8;_<T.length;++_)T[_]=m&255,m/=256;for(this.u(T),T=Array(16),_=m=0;4>_;++_)for(var y=0;32>y;y+=8)T[m++]=this.g[_]>>>y&255;return T};function o(T,_){var m=u;return Object.prototype.hasOwnProperty.call(m,T)?m[T]:m[T]=_(T)}function a(T,_){this.h=_;for(var m=[],y=!0,v=T.length-1;0<=v;v--){var I=T[v]|0;y&&I==_||(m[v]=I,y=!1)}this.g=m}var u={};function h(T){return-128<=T&&128>T?o(T,function(_){return new a([_|0],0>_?-1:0)}):new a([T|0],0>T?-1:0)}function f(T){if(isNaN(T)||!isFinite(T))return E;if(0>T)return V(f(-T));for(var _=[],m=1,y=0;T>=m;y++)_[y]=T/m|0,m*=4294967296;return new a(_,0)}function p(T,_){if(T.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(T.charAt(0)=="-")return V(p(T.substring(1),_));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var m=f(Math.pow(_,8)),y=E,v=0;v<T.length;v+=8){var I=Math.min(8,T.length-v),g=parseInt(T.substring(v,v+I),_);8>I?(I=f(Math.pow(_,I)),y=y.j(I).add(f(g))):(y=y.j(m),y=y.add(f(g)))}return y}var E=h(0),A=h(1),R=h(16777216);n=a.prototype,n.m=function(){if(O(this))return-V(this).m();for(var T=0,_=1,m=0;m<this.g.length;m++){var y=this.i(m);T+=(0<=y?y:4294967296+y)*_,_*=4294967296}return T},n.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(S(this))return"0";if(O(this))return"-"+V(this).toString(T);for(var _=f(Math.pow(T,6)),m=this,y="";;){var v=W(m,_).g;m=k(m,v.j(_));var I=((0<m.g.length?m.g[0]:m.h)>>>0).toString(T);if(m=v,S(m))return I+y;for(;6>I.length;)I="0"+I;y=I+y}},n.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function S(T){if(T.h!=0)return!1;for(var _=0;_<T.g.length;_++)if(T.g[_]!=0)return!1;return!0}function O(T){return T.h==-1}n.l=function(T){return T=k(this,T),O(T)?-1:S(T)?0:1};function V(T){for(var _=T.g.length,m=[],y=0;y<_;y++)m[y]=~T.g[y];return new a(m,~T.h).add(A)}n.abs=function(){return O(this)?V(this):this},n.add=function(T){for(var _=Math.max(this.g.length,T.g.length),m=[],y=0,v=0;v<=_;v++){var I=y+(this.i(v)&65535)+(T.i(v)&65535),g=(I>>>16)+(this.i(v)>>>16)+(T.i(v)>>>16);y=g>>>16,I&=65535,g&=65535,m[v]=g<<16|I}return new a(m,m[m.length-1]&-2147483648?-1:0)};function k(T,_){return T.add(V(_))}n.j=function(T){if(S(this)||S(T))return E;if(O(this))return O(T)?V(this).j(V(T)):V(V(this).j(T));if(O(T))return V(this.j(V(T)));if(0>this.l(R)&&0>T.l(R))return f(this.m()*T.m());for(var _=this.g.length+T.g.length,m=[],y=0;y<2*_;y++)m[y]=0;for(y=0;y<this.g.length;y++)for(var v=0;v<T.g.length;v++){var I=this.i(y)>>>16,g=this.i(y)&65535,it=T.i(v)>>>16,z=T.i(v)&65535;m[2*y+2*v]+=g*z,j(m,2*y+2*v),m[2*y+2*v+1]+=I*z,j(m,2*y+2*v+1),m[2*y+2*v+1]+=g*it,j(m,2*y+2*v+1),m[2*y+2*v+2]+=I*it,j(m,2*y+2*v+2)}for(y=0;y<_;y++)m[y]=m[2*y+1]<<16|m[2*y];for(y=_;y<2*_;y++)m[y]=0;return new a(m,0)};function j(T,_){for(;(T[_]&65535)!=T[_];)T[_+1]+=T[_]>>>16,T[_]&=65535,_++}function x(T,_){this.g=T,this.h=_}function W(T,_){if(S(_))throw Error("division by zero");if(S(T))return new x(E,E);if(O(T))return _=W(V(T),_),new x(V(_.g),V(_.h));if(O(_))return _=W(T,V(_)),new x(V(_.g),_.h);if(30<T.g.length){if(O(T)||O(_))throw Error("slowDivide_ only works with positive integers.");for(var m=A,y=_;0>=y.l(T);)m=G(m),y=G(y);var v=M(m,1),I=M(y,1);for(y=M(y,2),m=M(m,2);!S(y);){var g=I.add(y);0>=g.l(T)&&(v=v.add(m),I=g),y=M(y,1),m=M(m,1)}return _=k(T,v.j(_)),new x(v,_)}for(v=E;0<=T.l(_);){for(m=Math.max(1,Math.floor(T.m()/_.m())),y=Math.ceil(Math.log(m)/Math.LN2),y=48>=y?1:Math.pow(2,y-48),I=f(m),g=I.j(_);O(g)||0<g.l(T);)m-=y,I=f(m),g=I.j(_);S(I)&&(I=A),v=v.add(I),T=k(T,g)}return new x(v,T)}n.A=function(T){return W(this,T).h},n.and=function(T){for(var _=Math.max(this.g.length,T.g.length),m=[],y=0;y<_;y++)m[y]=this.i(y)&T.i(y);return new a(m,this.h&T.h)},n.or=function(T){for(var _=Math.max(this.g.length,T.g.length),m=[],y=0;y<_;y++)m[y]=this.i(y)|T.i(y);return new a(m,this.h|T.h)},n.xor=function(T){for(var _=Math.max(this.g.length,T.g.length),m=[],y=0;y<_;y++)m[y]=this.i(y)^T.i(y);return new a(m,this.h^T.h)};function G(T){for(var _=T.g.length+1,m=[],y=0;y<_;y++)m[y]=T.i(y)<<1|T.i(y-1)>>>31;return new a(m,T.h)}function M(T,_){var m=_>>5;_%=32;for(var y=T.g.length-m,v=[],I=0;I<y;I++)v[I]=0<_?T.i(I+m)>>>_|T.i(I+m+1)<<32-_:T.i(I+m);return new a(v,T.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Ll=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=f,a.fromString=p,ue=a}).apply(typeof Ea<"u"?Ea:typeof self<"u"?self:typeof window<"u"?window:{});var ur=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Fl,In,xl,gr,Qs,Ul,Bl,jl;(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(i,l,c){return i==Array.prototype||i==Object.prototype||(i[l]=c.value),i};function e(i){i=[typeof globalThis=="object"&&globalThis,i,typeof window=="object"&&window,typeof self=="object"&&self,typeof ur=="object"&&ur];for(var l=0;l<i.length;++l){var c=i[l];if(c&&c.Math==Math)return c}throw Error("Cannot find global object")}var r=e(this);function s(i,l){if(l)t:{var c=r;i=i.split(".");for(var d=0;d<i.length-1;d++){var w=i[d];if(!(w in c))break t;c=c[w]}i=i[i.length-1],d=c[i],l=l(d),l!=d&&l!=null&&t(c,i,{configurable:!0,writable:!0,value:l})}}function o(i,l){i instanceof String&&(i+="");var c=0,d=!1,w={next:function(){if(!d&&c<i.length){var b=c++;return{value:l(b,i[b]),done:!1}}return d=!0,{done:!0,value:void 0}}};return w[Symbol.iterator]=function(){return w},w}s("Array.prototype.values",function(i){return i||function(){return o(this,function(l,c){return c})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},u=this||self;function h(i){var l=typeof i;return l=l!="object"?l:i?Array.isArray(i)?"array":l:"null",l=="array"||l=="object"&&typeof i.length=="number"}function f(i){var l=typeof i;return l=="object"&&i!=null||l=="function"}function p(i,l,c){return i.call.apply(i.bind,arguments)}function E(i,l,c){if(!i)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var w=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(w,d),i.apply(l,w)}}return function(){return i.apply(l,arguments)}}function A(i,l,c){return A=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?p:E,A.apply(null,arguments)}function R(i,l){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();return d.push.apply(d,arguments),i.apply(this,d)}}function S(i,l){function c(){}c.prototype=l.prototype,i.aa=l.prototype,i.prototype=new c,i.prototype.constructor=i,i.Qb=function(d,w,b){for(var L=Array(arguments.length-2),st=2;st<arguments.length;st++)L[st-2]=arguments[st];return l.prototype[w].apply(d,L)}}function O(i){const l=i.length;if(0<l){const c=Array(l);for(let d=0;d<l;d++)c[d]=i[d];return c}return[]}function V(i,l){for(let c=1;c<arguments.length;c++){const d=arguments[c];if(h(d)){const w=i.length||0,b=d.length||0;i.length=w+b;for(let L=0;L<b;L++)i[w+L]=d[L]}else i.push(d)}}class k{constructor(l,c){this.i=l,this.j=c,this.h=0,this.g=null}get(){let l;return 0<this.h?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function j(i){return/^[\s\xa0]*$/.test(i)}function x(){var i=u.navigator;return i&&(i=i.userAgent)?i:""}function W(i){return W[" "](i),i}W[" "]=function(){};var G=x().indexOf("Gecko")!=-1&&!(x().toLowerCase().indexOf("webkit")!=-1&&x().indexOf("Edge")==-1)&&!(x().indexOf("Trident")!=-1||x().indexOf("MSIE")!=-1)&&x().indexOf("Edge")==-1;function M(i,l,c){for(const d in i)l.call(c,i[d],d,i)}function T(i,l){for(const c in i)l.call(void 0,i[c],c,i)}function _(i){const l={};for(const c in i)l[c]=i[c];return l}const m="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function y(i,l){let c,d;for(let w=1;w<arguments.length;w++){d=arguments[w];for(c in d)i[c]=d[c];for(let b=0;b<m.length;b++)c=m[b],Object.prototype.hasOwnProperty.call(d,c)&&(i[c]=d[c])}}function v(i){var l=1;i=i.split(":");const c=[];for(;0<l&&i.length;)c.push(i.shift()),l--;return i.length&&c.push(i.join(":")),c}function I(i){u.setTimeout(()=>{throw i},0)}function g(){var i=ke;let l=null;return i.g&&(l=i.g,i.g=i.g.next,i.g||(i.h=null),l.next=null),l}class it{constructor(){this.h=this.g=null}add(l,c){const d=z.get();d.set(l,c),this.h?this.h.next=d:this.g=d,this.h=d}}var z=new k(()=>new Vt,i=>i.reset());class Vt{constructor(){this.next=this.g=this.h=null}set(l,c){this.h=l,this.g=c,this.next=null}reset(){this.next=this.g=this.h=null}}let Gt,Wt=!1,ke=new it,yt=()=>{const i=u.Promise.resolve(void 0);Gt=()=>{i.then(xt)}};var xt=()=>{for(var i;i=g();){try{i.h.call(i.g)}catch(c){I(c)}var l=z;l.j(i),100>l.h&&(l.h++,i.next=l.g,l.g=i)}Wt=!1};function ee(){this.s=this.s,this.C=this.C}ee.prototype.s=!1,ee.prototype.ma=function(){this.s||(this.s=!0,this.N())},ee.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function wt(i,l){this.type=i,this.g=this.target=l,this.defaultPrevented=!1}wt.prototype.h=function(){this.defaultPrevented=!0};var mc=function(){if(!u.addEventListener||!Object.defineProperty)return!1;var i=!1,l=Object.defineProperty({},"passive",{get:function(){i=!0}});try{const c=()=>{};u.addEventListener("test",c,l),u.removeEventListener("test",c,l)}catch{}return i}();function ln(i,l){if(wt.call(this,i?i.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,i){var c=this.type=i.type,d=i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:null;if(this.target=i.target||i.srcElement,this.g=l,l=i.relatedTarget){if(G){t:{try{W(l.nodeName);var w=!0;break t}catch{}w=!1}w||(l=null)}}else c=="mouseover"?l=i.fromElement:c=="mouseout"&&(l=i.toElement);this.relatedTarget=l,d?(this.clientX=d.clientX!==void 0?d.clientX:d.pageX,this.clientY=d.clientY!==void 0?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0),this.button=i.button,this.key=i.key||"",this.ctrlKey=i.ctrlKey,this.altKey=i.altKey,this.shiftKey=i.shiftKey,this.metaKey=i.metaKey,this.pointerId=i.pointerId||0,this.pointerType=typeof i.pointerType=="string"?i.pointerType:pc[i.pointerType]||"",this.state=i.state,this.i=i,i.defaultPrevented&&ln.aa.h.call(this)}}S(ln,wt);var pc={2:"touch",3:"pen",4:"mouse"};ln.prototype.h=function(){ln.aa.h.call(this);var i=this.i;i.preventDefault?i.preventDefault():i.returnValue=!1};var $n="closure_listenable_"+(1e6*Math.random()|0),gc=0;function _c(i,l,c,d,w){this.listener=i,this.proxy=null,this.src=l,this.type=c,this.capture=!!d,this.ha=w,this.key=++gc,this.da=this.fa=!1}function Hn(i){i.da=!0,i.listener=null,i.proxy=null,i.src=null,i.ha=null}function Kn(i){this.src=i,this.g={},this.h=0}Kn.prototype.add=function(i,l,c,d,w){var b=i.toString();i=this.g[b],i||(i=this.g[b]=[],this.h++);var L=os(i,l,d,w);return-1<L?(l=i[L],c||(l.fa=!1)):(l=new _c(l,this.src,b,!!d,w),l.fa=c,i.push(l)),l};function is(i,l){var c=l.type;if(c in i.g){var d=i.g[c],w=Array.prototype.indexOf.call(d,l,void 0),b;(b=0<=w)&&Array.prototype.splice.call(d,w,1),b&&(Hn(l),i.g[c].length==0&&(delete i.g[c],i.h--))}}function os(i,l,c,d){for(var w=0;w<i.length;++w){var b=i[w];if(!b.da&&b.listener==l&&b.capture==!!c&&b.ha==d)return w}return-1}var as="closure_lm_"+(1e6*Math.random()|0),ls={};function Gi(i,l,c,d,w){if(Array.isArray(l)){for(var b=0;b<l.length;b++)Gi(i,l[b],c,d,w);return null}return c=Xi(c),i&&i[$n]?i.K(l,c,f(d)?!!d.capture:!1,w):yc(i,l,c,!1,d,w)}function yc(i,l,c,d,w,b){if(!l)throw Error("Invalid event type");var L=f(w)?!!w.capture:!!w,st=cs(i);if(st||(i[as]=st=new Kn(i)),c=st.add(l,c,d,L,b),c.proxy)return c;if(d=Ec(),c.proxy=d,d.src=i,d.listener=c,i.addEventListener)mc||(w=L),w===void 0&&(w=!1),i.addEventListener(l.toString(),d,w);else if(i.attachEvent)i.attachEvent(Qi(l.toString()),d);else if(i.addListener&&i.removeListener)i.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");return c}function Ec(){function i(c){return l.call(i.src,i.listener,c)}const l=vc;return i}function Wi(i,l,c,d,w){if(Array.isArray(l))for(var b=0;b<l.length;b++)Wi(i,l[b],c,d,w);else d=f(d)?!!d.capture:!!d,c=Xi(c),i&&i[$n]?(i=i.i,l=String(l).toString(),l in i.g&&(b=i.g[l],c=os(b,c,d,w),-1<c&&(Hn(b[c]),Array.prototype.splice.call(b,c,1),b.length==0&&(delete i.g[l],i.h--)))):i&&(i=cs(i))&&(l=i.g[l.toString()],i=-1,l&&(i=os(l,c,d,w)),(c=-1<i?l[i]:null)&&us(c))}function us(i){if(typeof i!="number"&&i&&!i.da){var l=i.src;if(l&&l[$n])is(l.i,i);else{var c=i.type,d=i.proxy;l.removeEventListener?l.removeEventListener(c,d,i.capture):l.detachEvent?l.detachEvent(Qi(c),d):l.addListener&&l.removeListener&&l.removeListener(d),(c=cs(l))?(is(c,i),c.h==0&&(c.src=null,l[as]=null)):Hn(i)}}}function Qi(i){return i in ls?ls[i]:ls[i]="on"+i}function vc(i,l){if(i.da)i=!0;else{l=new ln(l,this);var c=i.listener,d=i.ha||i.src;i.fa&&us(i),i=c.call(d,l)}return i}function cs(i){return i=i[as],i instanceof Kn?i:null}var hs="__closure_events_fn_"+(1e9*Math.random()>>>0);function Xi(i){return typeof i=="function"?i:(i[hs]||(i[hs]=function(l){return i.handleEvent(l)}),i[hs])}function At(){ee.call(this),this.i=new Kn(this),this.M=this,this.F=null}S(At,ee),At.prototype[$n]=!0,At.prototype.removeEventListener=function(i,l,c,d){Wi(this,i,l,c,d)};function Dt(i,l){var c,d=i.F;if(d)for(c=[];d;d=d.F)c.push(d);if(i=i.M,d=l.type||l,typeof l=="string")l=new wt(l,i);else if(l instanceof wt)l.target=l.target||i;else{var w=l;l=new wt(d,i),y(l,w)}if(w=!0,c)for(var b=c.length-1;0<=b;b--){var L=l.g=c[b];w=Gn(L,d,!0,l)&&w}if(L=l.g=i,w=Gn(L,d,!0,l)&&w,w=Gn(L,d,!1,l)&&w,c)for(b=0;b<c.length;b++)L=l.g=c[b],w=Gn(L,d,!1,l)&&w}At.prototype.N=function(){if(At.aa.N.call(this),this.i){var i=this.i,l;for(l in i.g){for(var c=i.g[l],d=0;d<c.length;d++)Hn(c[d]);delete i.g[l],i.h--}}this.F=null},At.prototype.K=function(i,l,c,d){return this.i.add(String(i),l,!1,c,d)},At.prototype.L=function(i,l,c,d){return this.i.add(String(i),l,!0,c,d)};function Gn(i,l,c,d){if(l=i.i.g[String(l)],!l)return!0;l=l.concat();for(var w=!0,b=0;b<l.length;++b){var L=l[b];if(L&&!L.da&&L.capture==c){var st=L.listener,Et=L.ha||L.src;L.fa&&is(i.i,L),w=st.call(Et,d)!==!1&&w}}return w&&!d.defaultPrevented}function Yi(i,l,c){if(typeof i=="function")c&&(i=A(i,c));else if(i&&typeof i.handleEvent=="function")i=A(i.handleEvent,i);else throw Error("Invalid listener argument");return 2147483647<Number(l)?-1:u.setTimeout(i,l||0)}function Ji(i){i.g=Yi(()=>{i.g=null,i.i&&(i.i=!1,Ji(i))},i.l);const l=i.h;i.h=null,i.m.apply(null,l)}class Tc extends ee{constructor(l,c){super(),this.m=l,this.l=c,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:Ji(this)}N(){super.N(),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function un(i){ee.call(this),this.h=i,this.g={}}S(un,ee);var Zi=[];function to(i){M(i.g,function(l,c){this.g.hasOwnProperty(c)&&us(l)},i),i.g={}}un.prototype.N=function(){un.aa.N.call(this),to(this)},un.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var fs=u.JSON.stringify,Ic=u.JSON.parse,wc=class{stringify(i){return u.JSON.stringify(i,void 0)}parse(i){return u.JSON.parse(i,void 0)}};function ds(){}ds.prototype.h=null;function eo(i){return i.h||(i.h=i.i())}function no(){}var cn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ms(){wt.call(this,"d")}S(ms,wt);function ps(){wt.call(this,"c")}S(ps,wt);var Ee={},ro=null;function Wn(){return ro=ro||new At}Ee.La="serverreachability";function so(i){wt.call(this,Ee.La,i)}S(so,wt);function hn(i){const l=Wn();Dt(l,new so(l))}Ee.STAT_EVENT="statevent";function io(i,l){wt.call(this,Ee.STAT_EVENT,i),this.stat=l}S(io,wt);function kt(i){const l=Wn();Dt(l,new io(l,i))}Ee.Ma="timingevent";function oo(i,l){wt.call(this,Ee.Ma,i),this.size=l}S(oo,wt);function fn(i,l){if(typeof i!="function")throw Error("Fn must not be null and must be a function");return u.setTimeout(function(){i()},l)}function dn(){this.g=!0}dn.prototype.xa=function(){this.g=!1};function Ac(i,l,c,d,w,b){i.info(function(){if(i.g)if(b)for(var L="",st=b.split("&"),Et=0;Et<st.length;Et++){var tt=st[Et].split("=");if(1<tt.length){var bt=tt[0];tt=tt[1];var Rt=bt.split("_");L=2<=Rt.length&&Rt[1]=="type"?L+(bt+"="+tt+"&"):L+(bt+"=redacted&")}}else L=null;else L=b;return"XMLHTTP REQ ("+d+") [attempt "+w+"]: "+l+`
`+c+`
`+L})}function bc(i,l,c,d,w,b,L){i.info(function(){return"XMLHTTP RESP ("+d+") [ attempt "+w+"]: "+l+`
`+c+`
`+b+" "+L})}function Ne(i,l,c,d){i.info(function(){return"XMLHTTP TEXT ("+l+"): "+Pc(i,c)+(d?" "+d:"")})}function Rc(i,l){i.info(function(){return"TIMEOUT: "+l})}dn.prototype.info=function(){};function Pc(i,l){if(!i.g)return l;if(!l)return null;try{var c=JSON.parse(l);if(c){for(i=0;i<c.length;i++)if(Array.isArray(c[i])){var d=c[i];if(!(2>d.length)){var w=d[1];if(Array.isArray(w)&&!(1>w.length)){var b=w[0];if(b!="noop"&&b!="stop"&&b!="close")for(var L=1;L<w.length;L++)w[L]=""}}}}return fs(c)}catch{return l}}var Qn={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ao={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},gs;function Xn(){}S(Xn,ds),Xn.prototype.g=function(){return new XMLHttpRequest},Xn.prototype.i=function(){return{}},gs=new Xn;function ne(i,l,c,d){this.j=i,this.i=l,this.l=c,this.R=d||1,this.U=new un(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new lo}function lo(){this.i=null,this.g="",this.h=!1}var uo={},_s={};function ys(i,l,c){i.L=1,i.v=tr(Qt(l)),i.m=c,i.P=!0,co(i,null)}function co(i,l){i.F=Date.now(),Yn(i),i.A=Qt(i.v);var c=i.A,d=i.R;Array.isArray(d)||(d=[String(d)]),bo(c.i,"t",d),i.C=0,c=i.j.J,i.h=new lo,i.g=zo(i.j,c?l:null,!i.m),0<i.O&&(i.M=new Tc(A(i.Y,i,i.g),i.O)),l=i.U,c=i.g,d=i.ca;var w="readystatechange";Array.isArray(w)||(w&&(Zi[0]=w.toString()),w=Zi);for(var b=0;b<w.length;b++){var L=Gi(c,w[b],d||l.handleEvent,!1,l.h||l);if(!L)break;l.g[L.key]=L}l=i.H?_(i.H):{},i.m?(i.u||(i.u="POST"),l["Content-Type"]="application/x-www-form-urlencoded",i.g.ea(i.A,i.u,i.m,l)):(i.u="GET",i.g.ea(i.A,i.u,null,l)),hn(),Ac(i.i,i.u,i.A,i.l,i.R,i.m)}ne.prototype.ca=function(i){i=i.target;const l=this.M;l&&Xt(i)==3?l.j():this.Y(i)},ne.prototype.Y=function(i){try{if(i==this.g)t:{const Rt=Xt(this.g);var l=this.g.Ba();const Le=this.g.Z();if(!(3>Rt)&&(Rt!=3||this.g&&(this.h.h||this.g.oa()||ko(this.g)))){this.J||Rt!=4||l==7||(l==8||0>=Le?hn(3):hn(2)),Es(this);var c=this.g.Z();this.X=c;e:if(ho(this)){var d=ko(this.g);i="";var w=d.length,b=Xt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ve(this),mn(this);var L="";break e}this.h.i=new u.TextDecoder}for(l=0;l<w;l++)this.h.h=!0,i+=this.h.i.decode(d[l],{stream:!(b&&l==w-1)});d.length=0,this.h.g+=i,this.C=0,L=this.h.g}else L=this.g.oa();if(this.o=c==200,bc(this.i,this.u,this.A,this.l,this.R,Rt,c),this.o){if(this.T&&!this.K){e:{if(this.g){var st,Et=this.g;if((st=Et.g?Et.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!j(st)){var tt=st;break e}}tt=null}if(c=tt)Ne(this.i,this.l,c,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,vs(this,c);else{this.o=!1,this.s=3,kt(12),ve(this),mn(this);break t}}if(this.P){c=!0;let Ut;for(;!this.J&&this.C<L.length;)if(Ut=Sc(this,L),Ut==_s){Rt==4&&(this.s=4,kt(14),c=!1),Ne(this.i,this.l,null,"[Incomplete Response]");break}else if(Ut==uo){this.s=4,kt(15),Ne(this.i,this.l,L,"[Invalid Chunk]"),c=!1;break}else Ne(this.i,this.l,Ut,null),vs(this,Ut);if(ho(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Rt!=4||L.length!=0||this.h.h||(this.s=1,kt(16),c=!1),this.o=this.o&&c,!c)Ne(this.i,this.l,L,"[Invalid Chunked Response]"),ve(this),mn(this);else if(0<L.length&&!this.W){this.W=!0;var bt=this.j;bt.g==this&&bt.ba&&!bt.M&&(bt.j.info("Great, no buffering proxy detected. Bytes received: "+L.length),Rs(bt),bt.M=!0,kt(11))}}else Ne(this.i,this.l,L,null),vs(this,L);Rt==4&&ve(this),this.o&&!this.J&&(Rt==4?Uo(this.j,this):(this.o=!1,Yn(this)))}else Hc(this.g),c==400&&0<L.indexOf("Unknown SID")?(this.s=3,kt(12)):(this.s=0,kt(13)),ve(this),mn(this)}}}catch{}finally{}};function ho(i){return i.g?i.u=="GET"&&i.L!=2&&i.j.Ca:!1}function Sc(i,l){var c=i.C,d=l.indexOf(`
`,c);return d==-1?_s:(c=Number(l.substring(c,d)),isNaN(c)?uo:(d+=1,d+c>l.length?_s:(l=l.slice(d,d+c),i.C=d+c,l)))}ne.prototype.cancel=function(){this.J=!0,ve(this)};function Yn(i){i.S=Date.now()+i.I,fo(i,i.I)}function fo(i,l){if(i.B!=null)throw Error("WatchDog timer not null");i.B=fn(A(i.ba,i),l)}function Es(i){i.B&&(u.clearTimeout(i.B),i.B=null)}ne.prototype.ba=function(){this.B=null;const i=Date.now();0<=i-this.S?(Rc(this.i,this.A),this.L!=2&&(hn(),kt(17)),ve(this),this.s=2,mn(this)):fo(this,this.S-i)};function mn(i){i.j.G==0||i.J||Uo(i.j,i)}function ve(i){Es(i);var l=i.M;l&&typeof l.ma=="function"&&l.ma(),i.M=null,to(i.U),i.g&&(l=i.g,i.g=null,l.abort(),l.ma())}function vs(i,l){try{var c=i.j;if(c.G!=0&&(c.g==i||Ts(c.h,i))){if(!i.K&&Ts(c.h,i)&&c.G==3){try{var d=c.Da.g.parse(l)}catch{d=null}if(Array.isArray(d)&&d.length==3){var w=d;if(w[0]==0){t:if(!c.u){if(c.g)if(c.g.F+3e3<i.F)or(c),sr(c);else break t;bs(c),kt(18)}}else c.za=w[1],0<c.za-c.T&&37500>w[2]&&c.F&&c.v==0&&!c.C&&(c.C=fn(A(c.Za,c),6e3));if(1>=go(c.h)&&c.ca){try{c.ca()}catch{}c.ca=void 0}}else Ie(c,11)}else if((i.K||c.g==i)&&or(c),!j(l))for(w=c.Da.g.parse(l),l=0;l<w.length;l++){let tt=w[l];if(c.T=tt[0],tt=tt[1],c.G==2)if(tt[0]=="c"){c.K=tt[1],c.ia=tt[2];const bt=tt[3];bt!=null&&(c.la=bt,c.j.info("VER="+c.la));const Rt=tt[4];Rt!=null&&(c.Aa=Rt,c.j.info("SVER="+c.Aa));const Le=tt[5];Le!=null&&typeof Le=="number"&&0<Le&&(d=1.5*Le,c.L=d,c.j.info("backChannelRequestTimeoutMs_="+d)),d=c;const Ut=i.g;if(Ut){const lr=Ut.g?Ut.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(lr){var b=d.h;b.g||lr.indexOf("spdy")==-1&&lr.indexOf("quic")==-1&&lr.indexOf("h2")==-1||(b.j=b.l,b.g=new Set,b.h&&(Is(b,b.h),b.h=null))}if(d.D){const Ps=Ut.g?Ut.g.getResponseHeader("X-HTTP-Session-Id"):null;Ps&&(d.ya=Ps,ot(d.I,d.D,Ps))}}c.G=3,c.l&&c.l.ua(),c.ba&&(c.R=Date.now()-i.F,c.j.info("Handshake RTT: "+c.R+"ms")),d=c;var L=i;if(d.qa=qo(d,d.J?d.ia:null,d.W),L.K){_o(d.h,L);var st=L,Et=d.L;Et&&(st.I=Et),st.B&&(Es(st),Yn(st)),d.g=L}else Fo(d);0<c.i.length&&ir(c)}else tt[0]!="stop"&&tt[0]!="close"||Ie(c,7);else c.G==3&&(tt[0]=="stop"||tt[0]=="close"?tt[0]=="stop"?Ie(c,7):As(c):tt[0]!="noop"&&c.l&&c.l.ta(tt),c.v=0)}}hn(4)}catch{}}var Cc=class{constructor(i,l){this.g=i,this.map=l}};function mo(i){this.l=i||10,u.PerformanceNavigationTiming?(i=u.performance.getEntriesByType("navigation"),i=0<i.length&&(i[0].nextHopProtocol=="hq"||i[0].nextHopProtocol=="h2")):i=!!(u.chrome&&u.chrome.loadTimes&&u.chrome.loadTimes()&&u.chrome.loadTimes().wasFetchedViaSpdy),this.j=i?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function po(i){return i.h?!0:i.g?i.g.size>=i.j:!1}function go(i){return i.h?1:i.g?i.g.size:0}function Ts(i,l){return i.h?i.h==l:i.g?i.g.has(l):!1}function Is(i,l){i.g?i.g.add(l):i.h=l}function _o(i,l){i.h&&i.h==l?i.h=null:i.g&&i.g.has(l)&&i.g.delete(l)}mo.prototype.cancel=function(){if(this.i=yo(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const i of this.g.values())i.cancel();this.g.clear()}};function yo(i){if(i.h!=null)return i.i.concat(i.h.D);if(i.g!=null&&i.g.size!==0){let l=i.i;for(const c of i.g.values())l=l.concat(c.D);return l}return O(i.i)}function Vc(i){if(i.V&&typeof i.V=="function")return i.V();if(typeof Map<"u"&&i instanceof Map||typeof Set<"u"&&i instanceof Set)return Array.from(i.values());if(typeof i=="string")return i.split("");if(h(i)){for(var l=[],c=i.length,d=0;d<c;d++)l.push(i[d]);return l}l=[],c=0;for(d in i)l[c++]=i[d];return l}function Dc(i){if(i.na&&typeof i.na=="function")return i.na();if(!i.V||typeof i.V!="function"){if(typeof Map<"u"&&i instanceof Map)return Array.from(i.keys());if(!(typeof Set<"u"&&i instanceof Set)){if(h(i)||typeof i=="string"){var l=[];i=i.length;for(var c=0;c<i;c++)l.push(c);return l}l=[],c=0;for(const d in i)l[c++]=d;return l}}}function Eo(i,l){if(i.forEach&&typeof i.forEach=="function")i.forEach(l,void 0);else if(h(i)||typeof i=="string")Array.prototype.forEach.call(i,l,void 0);else for(var c=Dc(i),d=Vc(i),w=d.length,b=0;b<w;b++)l.call(void 0,d[b],c&&c[b],i)}var vo=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function kc(i,l){if(i){i=i.split("&");for(var c=0;c<i.length;c++){var d=i[c].indexOf("="),w=null;if(0<=d){var b=i[c].substring(0,d);w=i[c].substring(d+1)}else b=i[c];l(b,w?decodeURIComponent(w.replace(/\+/g," ")):"")}}}function Te(i){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,i instanceof Te){this.h=i.h,Jn(this,i.j),this.o=i.o,this.g=i.g,Zn(this,i.s),this.l=i.l;var l=i.i,c=new _n;c.i=l.i,l.g&&(c.g=new Map(l.g),c.h=l.h),To(this,c),this.m=i.m}else i&&(l=String(i).match(vo))?(this.h=!1,Jn(this,l[1]||"",!0),this.o=pn(l[2]||""),this.g=pn(l[3]||"",!0),Zn(this,l[4]),this.l=pn(l[5]||"",!0),To(this,l[6]||"",!0),this.m=pn(l[7]||"")):(this.h=!1,this.i=new _n(null,this.h))}Te.prototype.toString=function(){var i=[],l=this.j;l&&i.push(gn(l,Io,!0),":");var c=this.g;return(c||l=="file")&&(i.push("//"),(l=this.o)&&i.push(gn(l,Io,!0),"@"),i.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.s,c!=null&&i.push(":",String(c))),(c=this.l)&&(this.g&&c.charAt(0)!="/"&&i.push("/"),i.push(gn(c,c.charAt(0)=="/"?Mc:Oc,!0))),(c=this.i.toString())&&i.push("?",c),(c=this.m)&&i.push("#",gn(c,Fc)),i.join("")};function Qt(i){return new Te(i)}function Jn(i,l,c){i.j=c?pn(l,!0):l,i.j&&(i.j=i.j.replace(/:$/,""))}function Zn(i,l){if(l){if(l=Number(l),isNaN(l)||0>l)throw Error("Bad port number "+l);i.s=l}else i.s=null}function To(i,l,c){l instanceof _n?(i.i=l,xc(i.i,i.h)):(c||(l=gn(l,Lc)),i.i=new _n(l,i.h))}function ot(i,l,c){i.i.set(l,c)}function tr(i){return ot(i,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),i}function pn(i,l){return i?l?decodeURI(i.replace(/%25/g,"%2525")):decodeURIComponent(i):""}function gn(i,l,c){return typeof i=="string"?(i=encodeURI(i).replace(l,Nc),c&&(i=i.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i):null}function Nc(i){return i=i.charCodeAt(0),"%"+(i>>4&15).toString(16)+(i&15).toString(16)}var Io=/[#\/\?@]/g,Oc=/[#\?:]/g,Mc=/[#\?]/g,Lc=/[#\?@]/g,Fc=/#/g;function _n(i,l){this.h=this.g=null,this.i=i||null,this.j=!!l}function re(i){i.g||(i.g=new Map,i.h=0,i.i&&kc(i.i,function(l,c){i.add(decodeURIComponent(l.replace(/\+/g," ")),c)}))}n=_n.prototype,n.add=function(i,l){re(this),this.i=null,i=Oe(this,i);var c=this.g.get(i);return c||this.g.set(i,c=[]),c.push(l),this.h+=1,this};function wo(i,l){re(i),l=Oe(i,l),i.g.has(l)&&(i.i=null,i.h-=i.g.get(l).length,i.g.delete(l))}function Ao(i,l){return re(i),l=Oe(i,l),i.g.has(l)}n.forEach=function(i,l){re(this),this.g.forEach(function(c,d){c.forEach(function(w){i.call(l,w,d,this)},this)},this)},n.na=function(){re(this);const i=Array.from(this.g.values()),l=Array.from(this.g.keys()),c=[];for(let d=0;d<l.length;d++){const w=i[d];for(let b=0;b<w.length;b++)c.push(l[d])}return c},n.V=function(i){re(this);let l=[];if(typeof i=="string")Ao(this,i)&&(l=l.concat(this.g.get(Oe(this,i))));else{i=Array.from(this.g.values());for(let c=0;c<i.length;c++)l=l.concat(i[c])}return l},n.set=function(i,l){return re(this),this.i=null,i=Oe(this,i),Ao(this,i)&&(this.h-=this.g.get(i).length),this.g.set(i,[l]),this.h+=1,this},n.get=function(i,l){return i?(i=this.V(i),0<i.length?String(i[0]):l):l};function bo(i,l,c){wo(i,l),0<c.length&&(i.i=null,i.g.set(Oe(i,l),O(c)),i.h+=c.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const i=[],l=Array.from(this.g.keys());for(var c=0;c<l.length;c++){var d=l[c];const b=encodeURIComponent(String(d)),L=this.V(d);for(d=0;d<L.length;d++){var w=b;L[d]!==""&&(w+="="+encodeURIComponent(String(L[d]))),i.push(w)}}return this.i=i.join("&")};function Oe(i,l){return l=String(l),i.j&&(l=l.toLowerCase()),l}function xc(i,l){l&&!i.j&&(re(i),i.i=null,i.g.forEach(function(c,d){var w=d.toLowerCase();d!=w&&(wo(this,d),bo(this,w,c))},i)),i.j=l}function Uc(i,l){const c=new dn;if(u.Image){const d=new Image;d.onload=R(se,c,"TestLoadImage: loaded",!0,l,d),d.onerror=R(se,c,"TestLoadImage: error",!1,l,d),d.onabort=R(se,c,"TestLoadImage: abort",!1,l,d),d.ontimeout=R(se,c,"TestLoadImage: timeout",!1,l,d),u.setTimeout(function(){d.ontimeout&&d.ontimeout()},1e4),d.src=i}else l(!1)}function Bc(i,l){const c=new dn,d=new AbortController,w=setTimeout(()=>{d.abort(),se(c,"TestPingServer: timeout",!1,l)},1e4);fetch(i,{signal:d.signal}).then(b=>{clearTimeout(w),b.ok?se(c,"TestPingServer: ok",!0,l):se(c,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(w),se(c,"TestPingServer: error",!1,l)})}function se(i,l,c,d,w){try{w&&(w.onload=null,w.onerror=null,w.onabort=null,w.ontimeout=null),d(c)}catch{}}function jc(){this.g=new wc}function qc(i,l,c){const d=c||"";try{Eo(i,function(w,b){let L=w;f(w)&&(L=fs(w)),l.push(d+b+"="+encodeURIComponent(L))})}catch(w){throw l.push(d+"type="+encodeURIComponent("_badmap")),w}}function er(i){this.l=i.Ub||null,this.j=i.eb||!1}S(er,ds),er.prototype.g=function(){return new nr(this.l,this.j)},er.prototype.i=function(i){return function(){return i}}({});function nr(i,l){At.call(this),this.D=i,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}S(nr,At),n=nr.prototype,n.open=function(i,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=i,this.A=l,this.readyState=1,En(this)},n.send=function(i){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const l={headers:this.u,method:this.B,credentials:this.m,cache:void 0};i&&(l.body=i),(this.D||u).fetch(new Request(this.A,l)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,yn(this)),this.readyState=0},n.Sa=function(i){if(this.g&&(this.l=i,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=i.headers,this.readyState=2,En(this)),this.g&&(this.readyState=3,En(this),this.g)))if(this.responseType==="arraybuffer")i.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof u.ReadableStream<"u"&&"body"in i){if(this.j=i.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Ro(this)}else i.text().then(this.Ra.bind(this),this.ga.bind(this))};function Ro(i){i.j.read().then(i.Pa.bind(i)).catch(i.ga.bind(i))}n.Pa=function(i){if(this.g){if(this.o&&i.value)this.response.push(i.value);else if(!this.o){var l=i.value?i.value:new Uint8Array(0);(l=this.v.decode(l,{stream:!i.done}))&&(this.response=this.responseText+=l)}i.done?yn(this):En(this),this.readyState==3&&Ro(this)}},n.Ra=function(i){this.g&&(this.response=this.responseText=i,yn(this))},n.Qa=function(i){this.g&&(this.response=i,yn(this))},n.ga=function(){this.g&&yn(this)};function yn(i){i.readyState=4,i.l=null,i.j=null,i.v=null,En(i)}n.setRequestHeader=function(i,l){this.u.append(i,l)},n.getResponseHeader=function(i){return this.h&&this.h.get(i.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const i=[],l=this.h.entries();for(var c=l.next();!c.done;)c=c.value,i.push(c[0]+": "+c[1]),c=l.next();return i.join(`\r
`)};function En(i){i.onreadystatechange&&i.onreadystatechange.call(i)}Object.defineProperty(nr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(i){this.m=i?"include":"same-origin"}});function Po(i){let l="";return M(i,function(c,d){l+=d,l+=":",l+=c,l+=`\r
`}),l}function ws(i,l,c){t:{for(d in c){var d=!1;break t}d=!0}d||(c=Po(c),typeof i=="string"?c!=null&&encodeURIComponent(String(c)):ot(i,l,c))}function ut(i){At.call(this),this.headers=new Map,this.o=i||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}S(ut,At);var zc=/^https?$/i,$c=["POST","PUT"];n=ut.prototype,n.Ha=function(i){this.J=i},n.ea=function(i,l,c,d){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+i);l=l?l.toUpperCase():"GET",this.D=i,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():gs.g(),this.v=this.o?eo(this.o):eo(gs),this.g.onreadystatechange=A(this.Ea,this);try{this.B=!0,this.g.open(l,String(i),!0),this.B=!1}catch(b){So(this,b);return}if(i=c||"",c=new Map(this.headers),d)if(Object.getPrototypeOf(d)===Object.prototype)for(var w in d)c.set(w,d[w]);else if(typeof d.keys=="function"&&typeof d.get=="function")for(const b of d.keys())c.set(b,d.get(b));else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(c.keys()).find(b=>b.toLowerCase()=="content-type"),w=u.FormData&&i instanceof u.FormData,!(0<=Array.prototype.indexOf.call($c,l,void 0))||d||w||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[b,L]of c)this.g.setRequestHeader(b,L);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Do(this),this.u=!0,this.g.send(i),this.u=!1}catch(b){So(this,b)}};function So(i,l){i.h=!1,i.g&&(i.j=!0,i.g.abort(),i.j=!1),i.l=l,i.m=5,Co(i),rr(i)}function Co(i){i.A||(i.A=!0,Dt(i,"complete"),Dt(i,"error"))}n.abort=function(i){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=i||7,Dt(this,"complete"),Dt(this,"abort"),rr(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),rr(this,!0)),ut.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Vo(this):this.bb())},n.bb=function(){Vo(this)};function Vo(i){if(i.h&&typeof a<"u"&&(!i.v[1]||Xt(i)!=4||i.Z()!=2)){if(i.u&&Xt(i)==4)Yi(i.Ea,0,i);else if(Dt(i,"readystatechange"),Xt(i)==4){i.h=!1;try{const L=i.Z();t:switch(L){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break t;default:l=!1}var c;if(!(c=l)){var d;if(d=L===0){var w=String(i.D).match(vo)[1]||null;!w&&u.self&&u.self.location&&(w=u.self.location.protocol.slice(0,-1)),d=!zc.test(w?w.toLowerCase():"")}c=d}if(c)Dt(i,"complete"),Dt(i,"success");else{i.m=6;try{var b=2<Xt(i)?i.g.statusText:""}catch{b=""}i.l=b+" ["+i.Z()+"]",Co(i)}}finally{rr(i)}}}}function rr(i,l){if(i.g){Do(i);const c=i.g,d=i.v[0]?()=>{}:null;i.g=null,i.v=null,l||Dt(i,"ready");try{c.onreadystatechange=d}catch{}}}function Do(i){i.I&&(u.clearTimeout(i.I),i.I=null)}n.isActive=function(){return!!this.g};function Xt(i){return i.g?i.g.readyState:0}n.Z=function(){try{return 2<Xt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(i){if(this.g){var l=this.g.responseText;return i&&l.indexOf(i)==0&&(l=l.substring(i.length)),Ic(l)}};function ko(i){try{if(!i.g)return null;if("response"in i.g)return i.g.response;switch(i.H){case"":case"text":return i.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in i.g)return i.g.mozResponseArrayBuffer}return null}catch{return null}}function Hc(i){const l={};i=(i.g&&2<=Xt(i)&&i.g.getAllResponseHeaders()||"").split(`\r
`);for(let d=0;d<i.length;d++){if(j(i[d]))continue;var c=v(i[d]);const w=c[0];if(c=c[1],typeof c!="string")continue;c=c.trim();const b=l[w]||[];l[w]=b,b.push(c)}T(l,function(d){return d.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function vn(i,l,c){return c&&c.internalChannelParams&&c.internalChannelParams[i]||l}function No(i){this.Aa=0,this.i=[],this.j=new dn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=vn("failFast",!1,i),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=vn("baseRetryDelayMs",5e3,i),this.cb=vn("retryDelaySeedMs",1e4,i),this.Wa=vn("forwardChannelMaxRetries",2,i),this.wa=vn("forwardChannelRequestTimeoutMs",2e4,i),this.pa=i&&i.xmlHttpFactory||void 0,this.Xa=i&&i.Tb||void 0,this.Ca=i&&i.useFetchStreams||!1,this.L=void 0,this.J=i&&i.supportsCrossDomainXhr||!1,this.K="",this.h=new mo(i&&i.concurrentRequestLimit),this.Da=new jc,this.P=i&&i.fastHandshake||!1,this.O=i&&i.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=i&&i.Rb||!1,i&&i.xa&&this.j.xa(),i&&i.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&i&&i.detectBufferingProxy||!1,this.ja=void 0,i&&i.longPollingTimeout&&0<i.longPollingTimeout&&(this.ja=i.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=No.prototype,n.la=8,n.G=1,n.connect=function(i,l,c,d){kt(0),this.W=i,this.H=l||{},c&&d!==void 0&&(this.H.OSID=c,this.H.OAID=d),this.F=this.X,this.I=qo(this,null,this.W),ir(this)};function As(i){if(Oo(i),i.G==3){var l=i.U++,c=Qt(i.I);if(ot(c,"SID",i.K),ot(c,"RID",l),ot(c,"TYPE","terminate"),Tn(i,c),l=new ne(i,i.j,l),l.L=2,l.v=tr(Qt(c)),c=!1,u.navigator&&u.navigator.sendBeacon)try{c=u.navigator.sendBeacon(l.v.toString(),"")}catch{}!c&&u.Image&&(new Image().src=l.v,c=!0),c||(l.g=zo(l.j,null),l.g.ea(l.v)),l.F=Date.now(),Yn(l)}jo(i)}function sr(i){i.g&&(Rs(i),i.g.cancel(),i.g=null)}function Oo(i){sr(i),i.u&&(u.clearTimeout(i.u),i.u=null),or(i),i.h.cancel(),i.s&&(typeof i.s=="number"&&u.clearTimeout(i.s),i.s=null)}function ir(i){if(!po(i.h)&&!i.s){i.s=!0;var l=i.Ga;Gt||yt(),Wt||(Gt(),Wt=!0),ke.add(l,i),i.B=0}}function Kc(i,l){return go(i.h)>=i.h.j-(i.s?1:0)?!1:i.s?(i.i=l.D.concat(i.i),!0):i.G==1||i.G==2||i.B>=(i.Va?0:i.Wa)?!1:(i.s=fn(A(i.Ga,i,l),Bo(i,i.B)),i.B++,!0)}n.Ga=function(i){if(this.s)if(this.s=null,this.G==1){if(!i){this.U=Math.floor(1e5*Math.random()),i=this.U++;const w=new ne(this,this.j,i);let b=this.o;if(this.S&&(b?(b=_(b),y(b,this.S)):b=this.S),this.m!==null||this.O||(w.H=b,b=null),this.P)t:{for(var l=0,c=0;c<this.i.length;c++){e:{var d=this.i[c];if("__data__"in d.map&&(d=d.map.__data__,typeof d=="string")){d=d.length;break e}d=void 0}if(d===void 0)break;if(l+=d,4096<l){l=c;break t}if(l===4096||c===this.i.length-1){l=c+1;break t}}l=1e3}else l=1e3;l=Lo(this,w,l),c=Qt(this.I),ot(c,"RID",i),ot(c,"CVER",22),this.D&&ot(c,"X-HTTP-Session-Id",this.D),Tn(this,c),b&&(this.O?l="headers="+encodeURIComponent(String(Po(b)))+"&"+l:this.m&&ws(c,this.m,b)),Is(this.h,w),this.Ua&&ot(c,"TYPE","init"),this.P?(ot(c,"$req",l),ot(c,"SID","null"),w.T=!0,ys(w,c,null)):ys(w,c,l),this.G=2}}else this.G==3&&(i?Mo(this,i):this.i.length==0||po(this.h)||Mo(this))};function Mo(i,l){var c;l?c=l.l:c=i.U++;const d=Qt(i.I);ot(d,"SID",i.K),ot(d,"RID",c),ot(d,"AID",i.T),Tn(i,d),i.m&&i.o&&ws(d,i.m,i.o),c=new ne(i,i.j,c,i.B+1),i.m===null&&(c.H=i.o),l&&(i.i=l.D.concat(i.i)),l=Lo(i,c,1e3),c.I=Math.round(.5*i.wa)+Math.round(.5*i.wa*Math.random()),Is(i.h,c),ys(c,d,l)}function Tn(i,l){i.H&&M(i.H,function(c,d){ot(l,d,c)}),i.l&&Eo({},function(c,d){ot(l,d,c)})}function Lo(i,l,c){c=Math.min(i.i.length,c);var d=i.l?A(i.l.Na,i.l,i):null;t:{var w=i.i;let b=-1;for(;;){const L=["count="+c];b==-1?0<c?(b=w[0].g,L.push("ofs="+b)):b=0:L.push("ofs="+b);let st=!0;for(let Et=0;Et<c;Et++){let tt=w[Et].g;const bt=w[Et].map;if(tt-=b,0>tt)b=Math.max(0,w[Et].g-100),st=!1;else try{qc(bt,L,"req"+tt+"_")}catch{d&&d(bt)}}if(st){d=L.join("&");break t}}}return i=i.i.splice(0,c),l.D=i,d}function Fo(i){if(!i.g&&!i.u){i.Y=1;var l=i.Fa;Gt||yt(),Wt||(Gt(),Wt=!0),ke.add(l,i),i.v=0}}function bs(i){return i.g||i.u||3<=i.v?!1:(i.Y++,i.u=fn(A(i.Fa,i),Bo(i,i.v)),i.v++,!0)}n.Fa=function(){if(this.u=null,xo(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var i=2*this.R;this.j.info("BP detection timer enabled: "+i),this.A=fn(A(this.ab,this),i)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,kt(10),sr(this),xo(this))};function Rs(i){i.A!=null&&(u.clearTimeout(i.A),i.A=null)}function xo(i){i.g=new ne(i,i.j,"rpc",i.Y),i.m===null&&(i.g.H=i.o),i.g.O=0;var l=Qt(i.qa);ot(l,"RID","rpc"),ot(l,"SID",i.K),ot(l,"AID",i.T),ot(l,"CI",i.F?"0":"1"),!i.F&&i.ja&&ot(l,"TO",i.ja),ot(l,"TYPE","xmlhttp"),Tn(i,l),i.m&&i.o&&ws(l,i.m,i.o),i.L&&(i.g.I=i.L);var c=i.g;i=i.ia,c.L=1,c.v=tr(Qt(l)),c.m=null,c.P=!0,co(c,i)}n.Za=function(){this.C!=null&&(this.C=null,sr(this),bs(this),kt(19))};function or(i){i.C!=null&&(u.clearTimeout(i.C),i.C=null)}function Uo(i,l){var c=null;if(i.g==l){or(i),Rs(i),i.g=null;var d=2}else if(Ts(i.h,l))c=l.D,_o(i.h,l),d=1;else return;if(i.G!=0){if(l.o)if(d==1){c=l.m?l.m.length:0,l=Date.now()-l.F;var w=i.B;d=Wn(),Dt(d,new oo(d,c)),ir(i)}else Fo(i);else if(w=l.s,w==3||w==0&&0<l.X||!(d==1&&Kc(i,l)||d==2&&bs(i)))switch(c&&0<c.length&&(l=i.h,l.i=l.i.concat(c)),w){case 1:Ie(i,5);break;case 4:Ie(i,10);break;case 3:Ie(i,6);break;default:Ie(i,2)}}}function Bo(i,l){let c=i.Ta+Math.floor(Math.random()*i.cb);return i.isActive()||(c*=2),c*l}function Ie(i,l){if(i.j.info("Error code "+l),l==2){var c=A(i.fb,i),d=i.Xa;const w=!d;d=new Te(d||"//www.google.com/images/cleardot.gif"),u.location&&u.location.protocol=="http"||Jn(d,"https"),tr(d),w?Uc(d.toString(),c):Bc(d.toString(),c)}else kt(2);i.G=0,i.l&&i.l.sa(l),jo(i),Oo(i)}n.fb=function(i){i?(this.j.info("Successfully pinged google.com"),kt(2)):(this.j.info("Failed to ping google.com"),kt(1))};function jo(i){if(i.G=0,i.ka=[],i.l){const l=yo(i.h);(l.length!=0||i.i.length!=0)&&(V(i.ka,l),V(i.ka,i.i),i.h.i.length=0,O(i.i),i.i.length=0),i.l.ra()}}function qo(i,l,c){var d=c instanceof Te?Qt(c):new Te(c);if(d.g!="")l&&(d.g=l+"."+d.g),Zn(d,d.s);else{var w=u.location;d=w.protocol,l=l?l+"."+w.hostname:w.hostname,w=+w.port;var b=new Te(null);d&&Jn(b,d),l&&(b.g=l),w&&Zn(b,w),c&&(b.l=c),d=b}return c=i.D,l=i.ya,c&&l&&ot(d,c,l),ot(d,"VER",i.la),Tn(i,d),d}function zo(i,l,c){if(l&&!i.J)throw Error("Can't create secondary domain capable XhrIo object.");return l=i.Ca&&!i.pa?new ut(new er({eb:c})):new ut(i.pa),l.Ha(i.J),l}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function $o(){}n=$o.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function ar(){}ar.prototype.g=function(i,l){return new Ot(i,l)};function Ot(i,l){At.call(this),this.g=new No(l),this.l=i,this.h=l&&l.messageUrlParams||null,i=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(i?i["X-Client-Protocol"]="webchannel":i={"X-Client-Protocol":"webchannel"}),this.g.o=i,i=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(i?i["X-WebChannel-Content-Type"]=l.messageContentType:i={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.va&&(i?i["X-WebChannel-Client-Profile"]=l.va:i={"X-WebChannel-Client-Profile":l.va}),this.g.S=i,(i=l&&l.Sb)&&!j(i)&&(this.g.m=i),this.v=l&&l.supportsCrossDomainXhr||!1,this.u=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!j(l)&&(this.g.D=l,i=this.h,i!==null&&l in i&&(i=this.h,l in i&&delete i[l])),this.j=new Me(this)}S(Ot,At),Ot.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ot.prototype.close=function(){As(this.g)},Ot.prototype.o=function(i){var l=this.g;if(typeof i=="string"){var c={};c.__data__=i,i=c}else this.u&&(c={},c.__data__=fs(i),i=c);l.i.push(new Cc(l.Ya++,i)),l.G==3&&ir(l)},Ot.prototype.N=function(){this.g.l=null,delete this.j,As(this.g),delete this.g,Ot.aa.N.call(this)};function Ho(i){ms.call(this),i.__headers__&&(this.headers=i.__headers__,this.statusCode=i.__status__,delete i.__headers__,delete i.__status__);var l=i.__sm__;if(l){t:{for(const c in l){i=c;break t}i=void 0}(this.i=i)&&(i=this.i,l=l!==null&&i in l?l[i]:void 0),this.data=l}else this.data=i}S(Ho,ms);function Ko(){ps.call(this),this.status=1}S(Ko,ps);function Me(i){this.g=i}S(Me,$o),Me.prototype.ua=function(){Dt(this.g,"a")},Me.prototype.ta=function(i){Dt(this.g,new Ho(i))},Me.prototype.sa=function(i){Dt(this.g,new Ko)},Me.prototype.ra=function(){Dt(this.g,"b")},ar.prototype.createWebChannel=ar.prototype.g,Ot.prototype.send=Ot.prototype.o,Ot.prototype.open=Ot.prototype.m,Ot.prototype.close=Ot.prototype.close,jl=function(){return new ar},Bl=function(){return Wn()},Ul=Ee,Qs={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Qn.NO_ERROR=0,Qn.TIMEOUT=8,Qn.HTTP_ERROR=6,gr=Qn,ao.COMPLETE="complete",xl=ao,no.EventType=cn,cn.OPEN="a",cn.CLOSE="b",cn.ERROR="c",cn.MESSAGE="d",At.prototype.listen=At.prototype.K,In=no,ut.prototype.listenOnce=ut.prototype.L,ut.prototype.getLastError=ut.prototype.Ka,ut.prototype.getLastErrorCode=ut.prototype.Ba,ut.prototype.getStatus=ut.prototype.Z,ut.prototype.getResponseJson=ut.prototype.Oa,ut.prototype.getResponseText=ut.prototype.oa,ut.prototype.send=ut.prototype.ea,ut.prototype.setWithCredentials=ut.prototype.Ha,Fl=ut}).apply(typeof ur<"u"?ur:typeof self<"u"?self:typeof window<"u"?window:{});const va="@firebase/firestore",Ta="4.7.10";/**
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
 */let nn="11.5.0";/**
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
 */const Re=new Vl("@firebase/firestore");function Be(){return Re.logLevel}function F(n,...t){if(Re.logLevel<=J.DEBUG){const e=t.map(pi);Re.debug(`Firestore (${nn}): ${n}`,...e)}}function Zt(n,...t){if(Re.logLevel<=J.ERROR){const e=t.map(pi);Re.error(`Firestore (${nn}): ${n}`,...e)}}function We(n,...t){if(Re.logLevel<=J.WARN){const e=t.map(pi);Re.warn(`Firestore (${nn}): ${n}`,...e)}}function pi(n){if(typeof n=="string")return n;try{/**
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
 */function $(n="Unexpected state"){const t=`FIRESTORE (${nn}) INTERNAL ASSERTION FAILED: `+n;throw Zt(t),new Error(t)}function et(n,t){n||$()}function K(n,t){return n}/**
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
 */const C={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class U extends en{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class ce{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
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
 */class ql{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Xf{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(St.UNAUTHENTICATED))}shutdown(){}}class Yf{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class Jf{constructor(t){this.t=t,this.currentUser=St.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){et(this.o===void 0);let r=this.i;const s=h=>this.i!==r?(r=this.i,e(h)):Promise.resolve();let o=new ce;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new ce,t.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const h=o;t.enqueueRetryable(async()=>{await h.promise,await s(this.currentUser)})},u=h=>{F("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(h=>u(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?u(h):(F("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new ce)}},0),a()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(r=>this.i!==t?(F("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(et(typeof r.accessToken=="string"),new ql(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return et(t===null||typeof t=="string"),new St(t)}}class Zf{constructor(t,e,r){this.l=t,this.h=e,this.P=r,this.type="FirstParty",this.user=St.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.T.set("Authorization",t),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class td{constructor(t,e,r){this.l=t,this.h=e,this.P=r}getToken(){return Promise.resolve(new Zf(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(St.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Ia{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ed{constructor(t,e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,Mf(t)&&t.settings.appCheckToken&&(this.V=t.settings.appCheckToken)}start(t,e){et(this.o===void 0);const r=o=>{o.error!=null&&F("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.R;return this.R=o.token,F("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>r(o))};const s=o=>{F("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>s(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?s(o):F("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new Ia(this.V));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(et(typeof e.token=="string"),this.R=e.token,new Ia(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function nd(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
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
 */function zl(){return new TextEncoder}/**
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
 */class $l{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=nd(40);for(let o=0;o<s.length;++o)r.length<20&&s[o]<e&&(r+=t.charAt(s[o]%62))}return r}}function Q(n,t){return n<t?-1:n>t?1:0}function Xs(n,t){let e=0;for(;e<n.length&&e<t.length;){const r=n.codePointAt(e),s=t.codePointAt(e);if(r!==s){if(r<128&&s<128)return Q(r,s);{const o=zl(),a=rd(o.encode(wa(n,e)),o.encode(wa(t,e)));return a!==0?a:Q(r,s)}}e+=r>65535?2:1}return Q(n.length,t.length)}function wa(n,t){return n.codePointAt(t)>65535?n.substring(t,t+2):n.substring(t,t+1)}function rd(n,t){for(let e=0;e<n.length&&e<t.length;++e)if(n[e]!==t[e])return Q(n[e],t[e]);return Q(n.length,t.length)}function Qe(n,t,e){return n.length===t.length&&n.every((r,s)=>e(r,t[s]))}/**
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
 */const Aa=-62135596800,ba=1e6;class mt{static now(){return mt.fromMillis(Date.now())}static fromDate(t){return mt.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor((t-1e3*e)*ba);return new mt(e,r)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new U(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new U(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<Aa)throw new U(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new U(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/ba}_compareTo(t){return this.seconds===t.seconds?Q(this.nanoseconds,t.nanoseconds):Q(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds-Aa;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class H{static fromTimestamp(t){return new H(t)}static min(){return new H(new mt(0,0))}static max(){return new H(new mt(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Ra="__name__";class qt{constructor(t,e,r){e===void 0?e=0:e>t.length&&$(),r===void 0?r=t.length-e:r>t.length-e&&$(),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return qt.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof qt?t.forEach(r=>{e.push(r)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let s=0;s<r;s++){const o=qt.compareSegments(t.get(s),e.get(s));if(o!==0)return o}return Q(t.length,e.length)}static compareSegments(t,e){const r=qt.isNumericId(t),s=qt.isNumericId(e);return r&&!s?-1:!r&&s?1:r&&s?qt.extractNumericId(t).compare(qt.extractNumericId(e)):Xs(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return ue.fromString(t.substring(4,t.length-2))}}class at extends qt{construct(t,e,r){return new at(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new U(C.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter(s=>s.length>0))}return new at(e)}static emptyPath(){return new at([])}}const sd=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Tt extends qt{construct(t,e,r){return new Tt(t,e,r)}static isValidIdentifier(t){return sd.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Tt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Ra}static keyField(){return new Tt([Ra])}static fromServerFormat(t){const e=[];let r="",s=0;const o=()=>{if(r.length===0)throw new U(C.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let a=!1;for(;s<t.length;){const u=t[s];if(u==="\\"){if(s+1===t.length)throw new U(C.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const h=t[s+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new U(C.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=h,s+=2}else u==="`"?(a=!a,s++):u!=="."||a?(r+=u,s++):(o(),s++)}if(o(),a)throw new U(C.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Tt(e)}static emptyPath(){return new Tt([])}}/**
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
 */class q{constructor(t){this.path=t}static fromPath(t){return new q(at.fromString(t))}static fromName(t){return new q(at.fromString(t).popFirst(5))}static empty(){return new q(at.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&at.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return at.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new q(new at(t.slice()))}}/**
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
 */const Nn=-1;function id(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=H.fromTimestamp(r===1e9?new mt(e+1,0):new mt(e,r));return new de(s,q.empty(),t)}function od(n){return new de(n.readTime,n.key,Nn)}class de{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new de(H.min(),q.empty(),Nn)}static max(){return new de(H.max(),q.empty(),Nn)}}function ad(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=q.comparator(n.documentKey,t.documentKey),e!==0?e:Q(n.largestBatchId,t.largestBatchId))}/**
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
 */const ld="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class ud{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function rn(n){if(n.code!==C.FAILED_PRECONDITION||n.message!==ld)throw n;F("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class P{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&$(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new P((r,s)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(r,s)},this.catchCallback=o=>{this.wrapFailure(e,o).next(r,s)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof P?e:P.resolve(e)}catch(e){return P.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):P.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):P.reject(e)}static resolve(t){return new P((e,r)=>{e(t)})}static reject(t){return new P((e,r)=>{r(t)})}static waitFor(t){return new P((e,r)=>{let s=0,o=0,a=!1;t.forEach(u=>{++s,u.next(()=>{++o,a&&o===s&&e()},h=>r(h))}),a=!0,o===s&&e()})}static or(t){let e=P.resolve(!1);for(const r of t)e=e.next(s=>s?P.resolve(s):r());return e}static forEach(t,e){const r=[];return t.forEach((s,o)=>{r.push(e.call(this,s,o))}),this.waitFor(r)}static mapArray(t,e){return new P((r,s)=>{const o=t.length,a=new Array(o);let u=0;for(let h=0;h<o;h++){const f=h;e(t[f]).next(p=>{a[f]=p,++u,u===o&&r(a)},p=>s(p))}})}static doWhile(t,e){return new P((r,s)=>{const o=()=>{t()===!0?e().next(()=>{o()},s):r()};o()})}}function cd(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function sn(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Hr{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.oe(r),this._e=r=>e.writeSequenceNumber(r))}oe(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this._e&&this._e(t),t}}Hr.ae=-1;/**
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
 */const gi=-1;function Kr(n){return n==null}function Cr(n){return n===0&&1/n==-1/0}function hd(n){return typeof n=="number"&&Number.isInteger(n)&&!Cr(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const Hl="";function fd(n){let t="";for(let e=0;e<n.length;e++)t.length>0&&(t=Pa(t)),t=dd(n.get(e),t);return Pa(t)}function dd(n,t){let e=t;const r=n.length;for(let s=0;s<r;s++){const o=n.charAt(s);switch(o){case"\0":e+="";break;case Hl:e+="";break;default:e+=o}}return e}function Pa(n){return n+Hl+""}/**
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
 */function Sa(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function Se(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function Kl(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
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
 */class lt{constructor(t,e){this.comparator=t,this.root=e||vt.EMPTY}insert(t,e){return new lt(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,vt.BLACK,null,null))}remove(t){return new lt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,vt.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(t,r.key);if(s===0)return e+r.left.size;s<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,r)=>(t(e,r),!1))}toString(){const t=[];return this.inorderTraversal((e,r)=>(t.push(`${e}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new cr(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new cr(this.root,t,this.comparator,!1)}getReverseIterator(){return new cr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new cr(this.root,t,this.comparator,!0)}}class cr{constructor(t,e,r,s){this.isReverse=s,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?r(t.key,e):1,e&&s&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class vt{constructor(t,e,r,s,o){this.key=t,this.value=e,this.color=r??vt.RED,this.left=s??vt.EMPTY,this.right=o??vt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,s,o){return new vt(t??this.key,e??this.value,r??this.color,s??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let s=this;const o=r(t,s.key);return s=o<0?s.copy(null,null,null,s.left.insert(t,e,r),null):o===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return vt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return vt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,vt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,vt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw $();const t=this.left.check();if(t!==this.right.check())throw $();return t+(this.isRed()?0:1)}}vt.EMPTY=null,vt.RED=!0,vt.BLACK=!1;vt.EMPTY=new class{constructor(){this.size=0}get key(){throw $()}get value(){throw $()}get color(){throw $()}get left(){throw $()}get right(){throw $()}copy(t,e,r,s,o){return this}insert(t,e,r){return new vt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class pt{constructor(t){this.comparator=t,this.data=new lt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,r)=>(t(e),!1))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Ca(this.data.getIterator())}getIteratorFrom(t){return new Ca(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(r=>{e=e.add(r)}),e}isEqual(t){if(!(t instanceof pt)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=r.getNext().key;if(this.comparator(s,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new pt(this.comparator);return e.data=t,e}}class Ca{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Bt{constructor(t){this.fields=t,t.sort(Tt.comparator)}static empty(){return new Bt([])}unionWith(t){let e=new pt(Tt.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new Bt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Qe(this.fields,t.fields,(e,r)=>e.isEqual(r))}}/**
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
 */class Gl extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class It{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(s){try{return atob(s)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new Gl("Invalid base64 string: "+o):o}}(t);return new It(e)}static fromUint8Array(t){const e=function(s){let o="";for(let a=0;a<s.length;++a)o+=String.fromCharCode(s[a]);return o}(t);return new It(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const r=new Uint8Array(e.length);for(let s=0;s<e.length;s++)r[s]=e.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return Q(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}It.EMPTY_BYTE_STRING=new It("");const md=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function me(n){if(et(!!n),typeof n=="string"){let t=0;const e=md.exec(n);if(et(!!e),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:ht(n.seconds),nanos:ht(n.nanos)}}function ht(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function pe(n){return typeof n=="string"?It.fromBase64String(n):It.fromUint8Array(n)}/**
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
 */const Wl="server_timestamp",Ql="__type__",Xl="__previous_value__",Yl="__local_write_time__";function _i(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{})[Ql])===null||e===void 0?void 0:e.stringValue)===Wl}function Gr(n){const t=n.mapValue.fields[Xl];return _i(t)?Gr(t):t}function On(n){const t=me(n.mapValue.fields[Yl].timestampValue);return new mt(t.seconds,t.nanos)}/**
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
 */class pd{constructor(t,e,r,s,o,a,u,h,f){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=s,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=u,this.longPollingOptions=h,this.useFetchStreams=f}}const Vr="(default)";class Mn{constructor(t,e){this.projectId=t,this.database=e||Vr}static empty(){return new Mn("","")}get isDefaultDatabase(){return this.database===Vr}isEqual(t){return t instanceof Mn&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const Jl="__type__",gd="__max__",hr={mapValue:{}},Zl="__vector__",Dr="value";function ge(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?_i(n)?4:yd(n)?9007199254740991:_d(n)?10:11:$()}function Ht(n,t){if(n===t)return!0;const e=ge(n);if(e!==ge(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return On(n).isEqual(On(t));case 3:return function(s,o){if(typeof s.timestampValue=="string"&&typeof o.timestampValue=="string"&&s.timestampValue.length===o.timestampValue.length)return s.timestampValue===o.timestampValue;const a=me(s.timestampValue),u=me(o.timestampValue);return a.seconds===u.seconds&&a.nanos===u.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(s,o){return pe(s.bytesValue).isEqual(pe(o.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(s,o){return ht(s.geoPointValue.latitude)===ht(o.geoPointValue.latitude)&&ht(s.geoPointValue.longitude)===ht(o.geoPointValue.longitude)}(n,t);case 2:return function(s,o){if("integerValue"in s&&"integerValue"in o)return ht(s.integerValue)===ht(o.integerValue);if("doubleValue"in s&&"doubleValue"in o){const a=ht(s.doubleValue),u=ht(o.doubleValue);return a===u?Cr(a)===Cr(u):isNaN(a)&&isNaN(u)}return!1}(n,t);case 9:return Qe(n.arrayValue.values||[],t.arrayValue.values||[],Ht);case 10:case 11:return function(s,o){const a=s.mapValue.fields||{},u=o.mapValue.fields||{};if(Sa(a)!==Sa(u))return!1;for(const h in a)if(a.hasOwnProperty(h)&&(u[h]===void 0||!Ht(a[h],u[h])))return!1;return!0}(n,t);default:return $()}}function Ln(n,t){return(n.values||[]).find(e=>Ht(e,t))!==void 0}function Xe(n,t){if(n===t)return 0;const e=ge(n),r=ge(t);if(e!==r)return Q(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return Q(n.booleanValue,t.booleanValue);case 2:return function(o,a){const u=ht(o.integerValue||o.doubleValue),h=ht(a.integerValue||a.doubleValue);return u<h?-1:u>h?1:u===h?0:isNaN(u)?isNaN(h)?0:-1:1}(n,t);case 3:return Va(n.timestampValue,t.timestampValue);case 4:return Va(On(n),On(t));case 5:return Xs(n.stringValue,t.stringValue);case 6:return function(o,a){const u=pe(o),h=pe(a);return u.compareTo(h)}(n.bytesValue,t.bytesValue);case 7:return function(o,a){const u=o.split("/"),h=a.split("/");for(let f=0;f<u.length&&f<h.length;f++){const p=Q(u[f],h[f]);if(p!==0)return p}return Q(u.length,h.length)}(n.referenceValue,t.referenceValue);case 8:return function(o,a){const u=Q(ht(o.latitude),ht(a.latitude));return u!==0?u:Q(ht(o.longitude),ht(a.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return Da(n.arrayValue,t.arrayValue);case 10:return function(o,a){var u,h,f,p;const E=o.fields||{},A=a.fields||{},R=(u=E[Dr])===null||u===void 0?void 0:u.arrayValue,S=(h=A[Dr])===null||h===void 0?void 0:h.arrayValue,O=Q(((f=R==null?void 0:R.values)===null||f===void 0?void 0:f.length)||0,((p=S==null?void 0:S.values)===null||p===void 0?void 0:p.length)||0);return O!==0?O:Da(R,S)}(n.mapValue,t.mapValue);case 11:return function(o,a){if(o===hr.mapValue&&a===hr.mapValue)return 0;if(o===hr.mapValue)return 1;if(a===hr.mapValue)return-1;const u=o.fields||{},h=Object.keys(u),f=a.fields||{},p=Object.keys(f);h.sort(),p.sort();for(let E=0;E<h.length&&E<p.length;++E){const A=Xs(h[E],p[E]);if(A!==0)return A;const R=Xe(u[h[E]],f[p[E]]);if(R!==0)return R}return Q(h.length,p.length)}(n.mapValue,t.mapValue);default:throw $()}}function Va(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return Q(n,t);const e=me(n),r=me(t),s=Q(e.seconds,r.seconds);return s!==0?s:Q(e.nanos,r.nanos)}function Da(n,t){const e=n.values||[],r=t.values||[];for(let s=0;s<e.length&&s<r.length;++s){const o=Xe(e[s],r[s]);if(o)return o}return Q(e.length,r.length)}function Ye(n){return Ys(n)}function Ys(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const r=me(e);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return pe(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return q.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let r="[",s=!0;for(const o of e.values||[])s?s=!1:r+=",",r+=Ys(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(e){const r=Object.keys(e.fields||{}).sort();let s="{",o=!0;for(const a of r)o?o=!1:s+=",",s+=`${a}:${Ys(e.fields[a])}`;return s+"}"}(n.mapValue):$()}function _r(n){switch(ge(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=Gr(n);return t?16+_r(t):16;case 5:return 2*n.stringValue.length;case 6:return pe(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,o)=>s+_r(o),0)}(n.arrayValue);case 10:case 11:return function(r){let s=0;return Se(r.fields,(o,a)=>{s+=o.length+_r(a)}),s}(n.mapValue);default:throw $()}}function ka(n,t){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${t.path.canonicalString()}`}}function Js(n){return!!n&&"integerValue"in n}function yi(n){return!!n&&"arrayValue"in n}function Na(n){return!!n&&"nullValue"in n}function Oa(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function yr(n){return!!n&&"mapValue"in n}function _d(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{})[Jl])===null||e===void 0?void 0:e.stringValue)===Zl}function Rn(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return Se(n.mapValue.fields,(e,r)=>t.mapValue.fields[e]=Rn(r)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=Rn(n.arrayValue.values[e]);return t}return Object.assign({},n)}function yd(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===gd}/**
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
 */class Lt{constructor(t){this.value=t}static empty(){return new Lt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!yr(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Rn(e)}setAll(t){let e=Tt.emptyPath(),r={},s=[];t.forEach((a,u)=>{if(!e.isImmediateParentOf(u)){const h=this.getFieldsMap(e);this.applyChanges(h,r,s),r={},s=[],e=u.popLast()}a?r[u.lastSegment()]=Rn(a):s.push(u.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,r,s)}delete(t){const e=this.field(t.popLast());yr(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Ht(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=e.mapValue.fields[t.get(r)];yr(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,r){Se(e,(s,o)=>t[s]=o);for(const s of r)delete t[s]}clone(){return new Lt(Rn(this.value))}}function tu(n){const t=[];return Se(n.fields,(e,r)=>{const s=new Tt([e]);if(yr(r)){const o=tu(r.mapValue).fields;if(o.length===0)t.push(s);else for(const a of o)t.push(s.child(a))}else t.push(s)}),new Bt(t)}/**
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
 */class Ct{constructor(t,e,r,s,o,a,u){this.key=t,this.documentType=e,this.version=r,this.readTime=s,this.createTime=o,this.data=a,this.documentState=u}static newInvalidDocument(t){return new Ct(t,0,H.min(),H.min(),H.min(),Lt.empty(),0)}static newFoundDocument(t,e,r,s){return new Ct(t,1,e,H.min(),r,s,0)}static newNoDocument(t,e){return new Ct(t,2,e,H.min(),H.min(),Lt.empty(),0)}static newUnknownDocument(t,e){return new Ct(t,3,e,H.min(),H.min(),Lt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(H.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Lt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Lt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=H.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Ct&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Ct(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class kr{constructor(t,e){this.position=t,this.inclusive=e}}function Ma(n,t,e){let r=0;for(let s=0;s<n.position.length;s++){const o=t[s],a=n.position[s];if(o.field.isKeyField()?r=q.comparator(q.fromName(a.referenceValue),e.key):r=Xe(a,e.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function La(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!Ht(n.position[e],t.position[e]))return!1;return!0}/**
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
 */class Nr{constructor(t,e="asc"){this.field=t,this.dir=e}}function Ed(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
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
 */class eu{}class dt extends eu{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new Td(t,e,r):e==="array-contains"?new Ad(t,r):e==="in"?new bd(t,r):e==="not-in"?new Rd(t,r):e==="array-contains-any"?new Pd(t,r):new dt(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new Id(t,r):new wd(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(Xe(e,this.value)):e!==null&&ge(this.value)===ge(e)&&this.matchesComparison(Xe(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return $()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class jt extends eu{constructor(t,e){super(),this.filters=t,this.op=e,this.ce=null}static create(t,e){return new jt(t,e)}matches(t){return nu(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function nu(n){return n.op==="and"}function ru(n){return vd(n)&&nu(n)}function vd(n){for(const t of n.filters)if(t instanceof jt)return!1;return!0}function Zs(n){if(n instanceof dt)return n.field.canonicalString()+n.op.toString()+Ye(n.value);if(ru(n))return n.filters.map(t=>Zs(t)).join(",");{const t=n.filters.map(e=>Zs(e)).join(",");return`${n.op}(${t})`}}function su(n,t){return n instanceof dt?function(r,s){return s instanceof dt&&r.op===s.op&&r.field.isEqual(s.field)&&Ht(r.value,s.value)}(n,t):n instanceof jt?function(r,s){return s instanceof jt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((o,a,u)=>o&&su(a,s.filters[u]),!0):!1}(n,t):void $()}function iu(n){return n instanceof dt?function(e){return`${e.field.canonicalString()} ${e.op} ${Ye(e.value)}`}(n):n instanceof jt?function(e){return e.op.toString()+" {"+e.getFilters().map(iu).join(" ,")+"}"}(n):"Filter"}class Td extends dt{constructor(t,e,r){super(t,e,r),this.key=q.fromName(r.referenceValue)}matches(t){const e=q.comparator(t.key,this.key);return this.matchesComparison(e)}}class Id extends dt{constructor(t,e){super(t,"in",e),this.keys=ou("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class wd extends dt{constructor(t,e){super(t,"not-in",e),this.keys=ou("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function ou(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(r=>q.fromName(r.referenceValue))}class Ad extends dt{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return yi(e)&&Ln(e.arrayValue,this.value)}}class bd extends dt{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&Ln(this.value.arrayValue,e)}}class Rd extends dt{constructor(t,e){super(t,"not-in",e)}matches(t){if(Ln(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!Ln(this.value.arrayValue,e)}}class Pd extends dt{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!yi(e)||!e.arrayValue.values)&&e.arrayValue.values.some(r=>Ln(this.value.arrayValue,r))}}/**
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
 */class Sd{constructor(t,e=null,r=[],s=[],o=null,a=null,u=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=s,this.limit=o,this.startAt=a,this.endAt=u,this.le=null}}function Fa(n,t=null,e=[],r=[],s=null,o=null,a=null){return new Sd(n,t,e,r,s,o,a)}function Ei(n){const t=K(n);if(t.le===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(r=>Zs(r)).join(","),e+="|ob:",e+=t.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),Kr(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(r=>Ye(r)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(r=>Ye(r)).join(",")),t.le=e}return t.le}function vi(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!Ed(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!su(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!La(n.startAt,t.startAt)&&La(n.endAt,t.endAt)}function ti(n){return q.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class Un{constructor(t,e=null,r=[],s=[],o=null,a="F",u=null,h=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=s,this.limit=o,this.limitType=a,this.startAt=u,this.endAt=h,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function Cd(n,t,e,r,s,o,a,u){return new Un(n,t,e,r,s,o,a,u)}function au(n){return new Un(n)}function xa(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function lu(n){return n.collectionGroup!==null}function Pn(n){const t=K(n);if(t.he===null){t.he=[];const e=new Set;for(const o of t.explicitOrderBy)t.he.push(o),e.add(o.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let u=new pt(Tt.comparator);return a.filters.forEach(h=>{h.getFlattenedFilters().forEach(f=>{f.isInequality()&&(u=u.add(f.field))})}),u})(t).forEach(o=>{e.has(o.canonicalString())||o.isKeyField()||t.he.push(new Nr(o,r))}),e.has(Tt.keyField().canonicalString())||t.he.push(new Nr(Tt.keyField(),r))}return t.he}function zt(n){const t=K(n);return t.Pe||(t.Pe=Vd(t,Pn(n))),t.Pe}function Vd(n,t){if(n.limitType==="F")return Fa(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(s=>{const o=s.dir==="desc"?"asc":"desc";return new Nr(s.field,o)});const e=n.endAt?new kr(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new kr(n.startAt.position,n.startAt.inclusive):null;return Fa(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function ei(n,t){const e=n.filters.concat([t]);return new Un(n.path,n.collectionGroup,n.explicitOrderBy.slice(),e,n.limit,n.limitType,n.startAt,n.endAt)}function ni(n,t,e){return new Un(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function Wr(n,t){return vi(zt(n),zt(t))&&n.limitType===t.limitType}function uu(n){return`${Ei(zt(n))}|lt:${n.limitType}`}function je(n){return`Query(target=${function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map(s=>iu(s)).join(", ")}]`),Kr(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map(s=>Ye(s)).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map(s=>Ye(s)).join(",")),`Target(${r})`}(zt(n))}; limitType=${n.limitType})`}function Qr(n,t){return t.isFoundDocument()&&function(r,s){const o=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):q.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(n,t)&&function(r,s){for(const o of Pn(r))if(!o.field.isKeyField()&&s.data.field(o.field)===null)return!1;return!0}(n,t)&&function(r,s){for(const o of r.filters)if(!o.matches(s))return!1;return!0}(n,t)&&function(r,s){return!(r.startAt&&!function(a,u,h){const f=Ma(a,u,h);return a.inclusive?f<=0:f<0}(r.startAt,Pn(r),s)||r.endAt&&!function(a,u,h){const f=Ma(a,u,h);return a.inclusive?f>=0:f>0}(r.endAt,Pn(r),s))}(n,t)}function Dd(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function cu(n){return(t,e)=>{let r=!1;for(const s of Pn(n)){const o=kd(s,t,e);if(o!==0)return o;r=r||s.field.isKeyField()}return 0}}function kd(n,t,e){const r=n.field.isKeyField()?q.comparator(t.key,e.key):function(o,a,u){const h=a.data.field(o),f=u.data.field(o);return h!==null&&f!==null?Xe(h,f):$()}(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return $()}}/**
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
 */class Ce{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[s,o]of r)if(this.equalsFn(s,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),s=this.inner[r];if(s===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],t))return void(s[o]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return r.length===1?delete this.inner[e]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(t){Se(this.inner,(e,r)=>{for(const[s,o]of r)t(s,o)})}isEmpty(){return Kl(this.inner)}size(){return this.innerSize}}/**
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
 */const Nd=new lt(q.comparator);function te(){return Nd}const hu=new lt(q.comparator);function wn(...n){let t=hu;for(const e of n)t=t.insert(e.key,e);return t}function fu(n){let t=hu;return n.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function Ae(){return Sn()}function du(){return Sn()}function Sn(){return new Ce(n=>n.toString(),(n,t)=>n.isEqual(t))}const Od=new lt(q.comparator),Md=new pt(q.comparator);function X(...n){let t=Md;for(const e of n)t=t.add(e);return t}const Ld=new pt(Q);function Fd(){return Ld}/**
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
 */function Ti(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Cr(t)?"-0":t}}function mu(n){return{integerValue:""+n}}function xd(n,t){return hd(t)?mu(t):Ti(n,t)}/**
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
 */class Xr{constructor(){this._=void 0}}function Ud(n,t,e){return n instanceof Or?function(s,o){const a={fields:{[Ql]:{stringValue:Wl},[Yl]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return o&&_i(o)&&(o=Gr(o)),o&&(a.fields[Xl]=o),{mapValue:a}}(e,t):n instanceof Fn?gu(n,t):n instanceof xn?_u(n,t):function(s,o){const a=pu(s,o),u=Ua(a)+Ua(s.Ie);return Js(a)&&Js(s.Ie)?mu(u):Ti(s.serializer,u)}(n,t)}function Bd(n,t,e){return n instanceof Fn?gu(n,t):n instanceof xn?_u(n,t):e}function pu(n,t){return n instanceof Mr?function(r){return Js(r)||function(o){return!!o&&"doubleValue"in o}(r)}(t)?t:{integerValue:0}:null}class Or extends Xr{}class Fn extends Xr{constructor(t){super(),this.elements=t}}function gu(n,t){const e=yu(t);for(const r of n.elements)e.some(s=>Ht(s,r))||e.push(r);return{arrayValue:{values:e}}}class xn extends Xr{constructor(t){super(),this.elements=t}}function _u(n,t){let e=yu(t);for(const r of n.elements)e=e.filter(s=>!Ht(s,r));return{arrayValue:{values:e}}}class Mr extends Xr{constructor(t,e){super(),this.serializer=t,this.Ie=e}}function Ua(n){return ht(n.integerValue||n.doubleValue)}function yu(n){return yi(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function jd(n,t){return n.field.isEqual(t.field)&&function(r,s){return r instanceof Fn&&s instanceof Fn||r instanceof xn&&s instanceof xn?Qe(r.elements,s.elements,Ht):r instanceof Mr&&s instanceof Mr?Ht(r.Ie,s.Ie):r instanceof Or&&s instanceof Or}(n.transform,t.transform)}class qd{constructor(t,e){this.version=t,this.transformResults=e}}class Yt{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Yt}static exists(t){return new Yt(void 0,t)}static updateTime(t){return new Yt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Er(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class Yr{}function Eu(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new Tu(n.key,Yt.none()):new Bn(n.key,n.data,Yt.none());{const e=n.data,r=Lt.empty();let s=new pt(Tt.comparator);for(let o of t.fields)if(!s.has(o)){let a=e.field(o);a===null&&o.length>1&&(o=o.popLast(),a=e.field(o)),a===null?r.delete(o):r.set(o,a),s=s.add(o)}return new Ve(n.key,r,new Bt(s.toArray()),Yt.none())}}function zd(n,t,e){n instanceof Bn?function(s,o,a){const u=s.value.clone(),h=ja(s.fieldTransforms,o,a.transformResults);u.setAll(h),o.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(n,t,e):n instanceof Ve?function(s,o,a){if(!Er(s.precondition,o))return void o.convertToUnknownDocument(a.version);const u=ja(s.fieldTransforms,o,a.transformResults),h=o.data;h.setAll(vu(s)),h.setAll(u),o.convertToFoundDocument(a.version,h).setHasCommittedMutations()}(n,t,e):function(s,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()}(0,t,e)}function Cn(n,t,e,r){return n instanceof Bn?function(o,a,u,h){if(!Er(o.precondition,a))return u;const f=o.value.clone(),p=qa(o.fieldTransforms,h,a);return f.setAll(p),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),null}(n,t,e,r):n instanceof Ve?function(o,a,u,h){if(!Er(o.precondition,a))return u;const f=qa(o.fieldTransforms,h,a),p=a.data;return p.setAll(vu(o)),p.setAll(f),a.convertToFoundDocument(a.version,p).setHasLocalMutations(),u===null?null:u.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(E=>E.field))}(n,t,e,r):function(o,a,u){return Er(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):u}(n,t,e)}function $d(n,t){let e=null;for(const r of n.fieldTransforms){const s=t.data.field(r.field),o=pu(r.transform,s||null);o!=null&&(e===null&&(e=Lt.empty()),e.set(r.field,o))}return e||null}function Ba(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Qe(r,s,(o,a)=>jd(o,a))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class Bn extends Yr{constructor(t,e,r,s=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Ve extends Yr{constructor(t,e,r,s,o=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=s,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function vu(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}}),t}function ja(n,t,e){const r=new Map;et(n.length===e.length);for(let s=0;s<e.length;s++){const o=n[s],a=o.transform,u=t.data.field(o.field);r.set(o.field,Bd(a,u,e[s]))}return r}function qa(n,t,e){const r=new Map;for(const s of n){const o=s.transform,a=e.data.field(s.field);r.set(s.field,Ud(o,a,t))}return r}class Tu extends Yr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Hd extends Yr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Kd{constructor(t,e,r,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const o=this.mutations[s];o.key.isEqual(t.key)&&zd(o,t,r[s])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=Cn(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=Cn(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=du();return this.mutations.forEach(s=>{const o=t.get(s.key),a=o.overlayedDocument;let u=this.applyToLocalView(a,o.mutatedFields);u=e.has(s.key)?null:u;const h=Eu(a,u);h!==null&&r.set(s.key,h),a.isValidDocument()||a.convertToNoDocument(H.min())}),r}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),X())}isEqual(t){return this.batchId===t.batchId&&Qe(this.mutations,t.mutations,(e,r)=>Ba(e,r))&&Qe(this.baseMutations,t.baseMutations,(e,r)=>Ba(e,r))}}class Ii{constructor(t,e,r,s){this.batch=t,this.commitVersion=e,this.mutationResults=r,this.docVersions=s}static from(t,e,r){et(t.mutations.length===r.length);let s=function(){return Od}();const o=t.mutations;for(let a=0;a<o.length;a++)s=s.insert(o[a].key,r[a].version);return new Ii(t,e,r,s)}}/**
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
 */class Gd{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class Wd{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
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
 */var ft,Y;function Qd(n){switch(n){case C.OK:return $();case C.CANCELLED:case C.UNKNOWN:case C.DEADLINE_EXCEEDED:case C.RESOURCE_EXHAUSTED:case C.INTERNAL:case C.UNAVAILABLE:case C.UNAUTHENTICATED:return!1;case C.INVALID_ARGUMENT:case C.NOT_FOUND:case C.ALREADY_EXISTS:case C.PERMISSION_DENIED:case C.FAILED_PRECONDITION:case C.ABORTED:case C.OUT_OF_RANGE:case C.UNIMPLEMENTED:case C.DATA_LOSS:return!0;default:return $()}}function Iu(n){if(n===void 0)return Zt("GRPC error has no .code"),C.UNKNOWN;switch(n){case ft.OK:return C.OK;case ft.CANCELLED:return C.CANCELLED;case ft.UNKNOWN:return C.UNKNOWN;case ft.DEADLINE_EXCEEDED:return C.DEADLINE_EXCEEDED;case ft.RESOURCE_EXHAUSTED:return C.RESOURCE_EXHAUSTED;case ft.INTERNAL:return C.INTERNAL;case ft.UNAVAILABLE:return C.UNAVAILABLE;case ft.UNAUTHENTICATED:return C.UNAUTHENTICATED;case ft.INVALID_ARGUMENT:return C.INVALID_ARGUMENT;case ft.NOT_FOUND:return C.NOT_FOUND;case ft.ALREADY_EXISTS:return C.ALREADY_EXISTS;case ft.PERMISSION_DENIED:return C.PERMISSION_DENIED;case ft.FAILED_PRECONDITION:return C.FAILED_PRECONDITION;case ft.ABORTED:return C.ABORTED;case ft.OUT_OF_RANGE:return C.OUT_OF_RANGE;case ft.UNIMPLEMENTED:return C.UNIMPLEMENTED;case ft.DATA_LOSS:return C.DATA_LOSS;default:return $()}}(Y=ft||(ft={}))[Y.OK=0]="OK",Y[Y.CANCELLED=1]="CANCELLED",Y[Y.UNKNOWN=2]="UNKNOWN",Y[Y.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Y[Y.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Y[Y.NOT_FOUND=5]="NOT_FOUND",Y[Y.ALREADY_EXISTS=6]="ALREADY_EXISTS",Y[Y.PERMISSION_DENIED=7]="PERMISSION_DENIED",Y[Y.UNAUTHENTICATED=16]="UNAUTHENTICATED",Y[Y.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Y[Y.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Y[Y.ABORTED=10]="ABORTED",Y[Y.OUT_OF_RANGE=11]="OUT_OF_RANGE",Y[Y.UNIMPLEMENTED=12]="UNIMPLEMENTED",Y[Y.INTERNAL=13]="INTERNAL",Y[Y.UNAVAILABLE=14]="UNAVAILABLE",Y[Y.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const Xd=new ue([4294967295,4294967295],0);function za(n){const t=zl().encode(n),e=new Ll;return e.update(t),new Uint8Array(e.digest())}function $a(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),s=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new ue([e,r],0),new ue([s,o],0)]}class wi{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new An(`Invalid padding: ${e}`);if(r<0)throw new An(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new An(`Invalid hash count: ${r}`);if(t.length===0&&e!==0)throw new An(`Invalid padding when bitmap length is 0: ${e}`);this.Ee=8*t.length-e,this.de=ue.fromNumber(this.Ee)}Ae(t,e,r){let s=t.add(e.multiply(ue.fromNumber(r)));return s.compare(Xd)===1&&(s=new ue([s.getBits(0),s.getBits(1)],0)),s.modulo(this.de).toNumber()}Re(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.Ee===0)return!1;const e=za(t),[r,s]=$a(e);for(let o=0;o<this.hashCount;o++){const a=this.Ae(r,s,o);if(!this.Re(a))return!1}return!0}static create(t,e,r){const s=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),a=new wi(o,s,e);return r.forEach(u=>a.insert(u)),a}insert(t){if(this.Ee===0)return;const e=za(t),[r,s]=$a(e);for(let o=0;o<this.hashCount;o++){const a=this.Ae(r,s,o);this.Ve(a)}}Ve(t){const e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}}class An extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Jr{constructor(t,e,r,s,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,r){const s=new Map;return s.set(t,jn.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new Jr(H.min(),s,new lt(Q),te(),X())}}class jn{constructor(t,e,r,s,o){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new jn(r,e,X(),X(),X())}}/**
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
 */class vr{constructor(t,e,r,s){this.me=t,this.removedTargetIds=e,this.key=r,this.fe=s}}class wu{constructor(t,e){this.targetId=t,this.ge=e}}class Au{constructor(t,e,r=It.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=s}}class Ha{constructor(){this.pe=0,this.ye=Ka(),this.we=It.EMPTY_BYTE_STRING,this.Se=!1,this.be=!0}get current(){return this.Se}get resumeToken(){return this.we}get De(){return this.pe!==0}get ve(){return this.be}Ce(t){t.approximateByteSize()>0&&(this.be=!0,this.we=t)}Fe(){let t=X(),e=X(),r=X();return this.ye.forEach((s,o)=>{switch(o){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:r=r.add(s);break;default:$()}}),new jn(this.we,this.Se,t,e,r)}Me(){this.be=!1,this.ye=Ka()}xe(t,e){this.be=!0,this.ye=this.ye.insert(t,e)}Oe(t){this.be=!0,this.ye=this.ye.remove(t)}Ne(){this.pe+=1}Be(){this.pe-=1,et(this.pe>=0)}Le(){this.be=!0,this.Se=!0}}class Yd{constructor(t){this.ke=t,this.qe=new Map,this.Qe=te(),this.$e=fr(),this.Ue=fr(),this.Ke=new lt(Q)}We(t){for(const e of t.me)t.fe&&t.fe.isFoundDocument()?this.Ge(e,t.fe):this.ze(e,t.key,t.fe);for(const e of t.removedTargetIds)this.ze(e,t.key,t.fe)}je(t){this.forEachTarget(t,e=>{const r=this.He(e);switch(t.state){case 0:this.Je(e)&&r.Ce(t.resumeToken);break;case 1:r.Be(),r.De||r.Me(),r.Ce(t.resumeToken);break;case 2:r.Be(),r.De||this.removeTarget(e);break;case 3:this.Je(e)&&(r.Le(),r.Ce(t.resumeToken));break;case 4:this.Je(e)&&(this.Ye(e),r.Ce(t.resumeToken));break;default:$()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.qe.forEach((r,s)=>{this.Je(s)&&e(s)})}Ze(t){const e=t.targetId,r=t.ge.count,s=this.Xe(e);if(s){const o=s.target;if(ti(o))if(r===0){const a=new q(o.path);this.ze(e,a,Ct.newNoDocument(a,H.min()))}else et(r===1);else{const a=this.et(e);if(a!==r){const u=this.tt(t),h=u?this.nt(u,t,a):1;if(h!==0){this.Ye(e);const f=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(e,f)}}}}}tt(t){const e=t.ge.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:o=0}=e;let a,u;try{a=pe(r).toUint8Array()}catch(h){if(h instanceof Gl)return We("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{u=new wi(a,s,o)}catch(h){return We(h instanceof An?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return u.Ee===0?null:u}nt(t,e,r){return e.ge.count===r-this.st(t,e.targetId)?0:2}st(t,e){const r=this.ke.getRemoteKeysForTarget(e);let s=0;return r.forEach(o=>{const a=this.ke.it(),u=`projects/${a.projectId}/databases/${a.database}/documents/${o.path.canonicalString()}`;t.mightContain(u)||(this.ze(e,o,null),s++)}),s}ot(t){const e=new Map;this.qe.forEach((o,a)=>{const u=this.Xe(a);if(u){if(o.current&&ti(u.target)){const h=new q(u.target.path);this._t(h).has(a)||this.ut(a,h)||this.ze(a,h,Ct.newNoDocument(h,t))}o.ve&&(e.set(a,o.Fe()),o.Me())}});let r=X();this.Ue.forEach((o,a)=>{let u=!0;a.forEachWhile(h=>{const f=this.Xe(h);return!f||f.purpose==="TargetPurposeLimboResolution"||(u=!1,!1)}),u&&(r=r.add(o))}),this.Qe.forEach((o,a)=>a.setReadTime(t));const s=new Jr(t,e,this.Ke,this.Qe,r);return this.Qe=te(),this.$e=fr(),this.Ue=fr(),this.Ke=new lt(Q),s}Ge(t,e){if(!this.Je(t))return;const r=this.ut(t,e.key)?2:0;this.He(t).xe(e.key,r),this.Qe=this.Qe.insert(e.key,e),this.$e=this.$e.insert(e.key,this._t(e.key).add(t)),this.Ue=this.Ue.insert(e.key,this.ct(e.key).add(t))}ze(t,e,r){if(!this.Je(t))return;const s=this.He(t);this.ut(t,e)?s.xe(e,1):s.Oe(e),this.Ue=this.Ue.insert(e,this.ct(e).delete(t)),this.Ue=this.Ue.insert(e,this.ct(e).add(t)),r&&(this.Qe=this.Qe.insert(e,r))}removeTarget(t){this.qe.delete(t)}et(t){const e=this.He(t).Fe();return this.ke.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Ne(t){this.He(t).Ne()}He(t){let e=this.qe.get(t);return e||(e=new Ha,this.qe.set(t,e)),e}ct(t){let e=this.Ue.get(t);return e||(e=new pt(Q),this.Ue=this.Ue.insert(t,e)),e}_t(t){let e=this.$e.get(t);return e||(e=new pt(Q),this.$e=this.$e.insert(t,e)),e}Je(t){const e=this.Xe(t)!==null;return e||F("WatchChangeAggregator","Detected inactive target",t),e}Xe(t){const e=this.qe.get(t);return e&&e.De?null:this.ke.lt(t)}Ye(t){this.qe.set(t,new Ha),this.ke.getRemoteKeysForTarget(t).forEach(e=>{this.ze(t,e,null)})}ut(t,e){return this.ke.getRemoteKeysForTarget(t).has(e)}}function fr(){return new lt(q.comparator)}function Ka(){return new lt(q.comparator)}const Jd={asc:"ASCENDING",desc:"DESCENDING"},Zd={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},tm={and:"AND",or:"OR"};class em{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function ri(n,t){return n.useProto3Json||Kr(t)?t:{value:t}}function Lr(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function bu(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function nm(n,t){return Lr(n,t.toTimestamp())}function $t(n){return et(!!n),H.fromTimestamp(function(e){const r=me(e);return new mt(r.seconds,r.nanos)}(n))}function Ai(n,t){return si(n,t).canonicalString()}function si(n,t){const e=function(s){return new at(["projects",s.projectId,"databases",s.database])}(n).child("documents");return t===void 0?e:e.child(t)}function Ru(n){const t=at.fromString(n);return et(Du(t)),t}function ii(n,t){return Ai(n.databaseId,t.path)}function Ms(n,t){const e=Ru(t);if(e.get(1)!==n.databaseId.projectId)throw new U(C.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new U(C.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new q(Su(e))}function Pu(n,t){return Ai(n.databaseId,t)}function rm(n){const t=Ru(n);return t.length===4?at.emptyPath():Su(t)}function oi(n){return new at(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Su(n){return et(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Ga(n,t,e){return{name:ii(n,t),fields:e.value.mapValue.fields}}function sm(n,t){let e;if("targetChange"in t){t.targetChange;const r=function(f){return f==="NO_CHANGE"?0:f==="ADD"?1:f==="REMOVE"?2:f==="CURRENT"?3:f==="RESET"?4:$()}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],o=function(f,p){return f.useProto3Json?(et(p===void 0||typeof p=="string"),It.fromBase64String(p||"")):(et(p===void 0||p instanceof Buffer||p instanceof Uint8Array),It.fromUint8Array(p||new Uint8Array))}(n,t.targetChange.resumeToken),a=t.targetChange.cause,u=a&&function(f){const p=f.code===void 0?C.UNKNOWN:Iu(f.code);return new U(p,f.message||"")}(a);e=new Au(r,s,o,u||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=Ms(n,r.document.name),o=$t(r.document.updateTime),a=r.document.createTime?$t(r.document.createTime):H.min(),u=new Lt({mapValue:{fields:r.document.fields}}),h=Ct.newFoundDocument(s,o,a,u),f=r.targetIds||[],p=r.removedTargetIds||[];e=new vr(f,p,h.key,h)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=Ms(n,r.document),o=r.readTime?$t(r.readTime):H.min(),a=Ct.newNoDocument(s,o),u=r.removedTargetIds||[];e=new vr([],u,a.key,a)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=Ms(n,r.document),o=r.removedTargetIds||[];e=new vr([],o,s,null)}else{if(!("filter"in t))return $();{t.filter;const r=t.filter;r.targetId;const{count:s=0,unchangedNames:o}=r,a=new Wd(s,o),u=r.targetId;e=new wu(u,a)}}return e}function im(n,t){let e;if(t instanceof Bn)e={update:Ga(n,t.key,t.value)};else if(t instanceof Tu)e={delete:ii(n,t.key)};else if(t instanceof Ve)e={update:Ga(n,t.key,t.data),updateMask:mm(t.fieldMask)};else{if(!(t instanceof Hd))return $();e={verify:ii(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(r=>function(o,a){const u=a.transform;if(u instanceof Or)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(u instanceof Fn)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:u.elements}};if(u instanceof xn)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:u.elements}};if(u instanceof Mr)return{fieldPath:a.field.canonicalString(),increment:u.Ie};throw $()}(0,r))),t.precondition.isNone||(e.currentDocument=function(s,o){return o.updateTime!==void 0?{updateTime:nm(s,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:$()}(n,t.precondition)),e}function om(n,t){return n&&n.length>0?(et(t!==void 0),n.map(e=>function(s,o){let a=s.updateTime?$t(s.updateTime):$t(o);return a.isEqual(H.min())&&(a=$t(o)),new qd(a,s.transformResults||[])}(e,t))):[]}function am(n,t){return{documents:[Pu(n,t.path)]}}function lm(n,t){const e={structuredQuery:{}},r=t.path;let s;t.collectionGroup!==null?(s=r,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=r.popLast(),e.structuredQuery.from=[{collectionId:r.lastSegment()}]),e.parent=Pu(n,s);const o=function(f){if(f.length!==0)return Vu(jt.create(f,"and"))}(t.filters);o&&(e.structuredQuery.where=o);const a=function(f){if(f.length!==0)return f.map(p=>function(A){return{field:qe(A.field),direction:hm(A.dir)}}(p))}(t.orderBy);a&&(e.structuredQuery.orderBy=a);const u=ri(n,t.limit);return u!==null&&(e.structuredQuery.limit=u),t.startAt&&(e.structuredQuery.startAt=function(f){return{before:f.inclusive,values:f.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(f){return{before:!f.inclusive,values:f.position}}(t.endAt)),{ht:e,parent:s}}function um(n){let t=rm(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let s=null;if(r>0){et(r===1);const p=e.from[0];p.allDescendants?s=p.collectionId:t=t.child(p.collectionId)}let o=[];e.where&&(o=function(E){const A=Cu(E);return A instanceof jt&&ru(A)?A.getFilters():[A]}(e.where));let a=[];e.orderBy&&(a=function(E){return E.map(A=>function(S){return new Nr(ze(S.field),function(V){switch(V){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(S.direction))}(A))}(e.orderBy));let u=null;e.limit&&(u=function(E){let A;return A=typeof E=="object"?E.value:E,Kr(A)?null:A}(e.limit));let h=null;e.startAt&&(h=function(E){const A=!!E.before,R=E.values||[];return new kr(R,A)}(e.startAt));let f=null;return e.endAt&&(f=function(E){const A=!E.before,R=E.values||[];return new kr(R,A)}(e.endAt)),Cd(t,s,a,o,u,"F",h,f)}function cm(n,t){const e=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return $()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function Cu(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=ze(e.unaryFilter.field);return dt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=ze(e.unaryFilter.field);return dt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=ze(e.unaryFilter.field);return dt.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=ze(e.unaryFilter.field);return dt.create(a,"!=",{nullValue:"NULL_VALUE"});default:return $()}}(n):n.fieldFilter!==void 0?function(e){return dt.create(ze(e.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return $()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return jt.create(e.compositeFilter.filters.map(r=>Cu(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return $()}}(e.compositeFilter.op))}(n):$()}function hm(n){return Jd[n]}function fm(n){return Zd[n]}function dm(n){return tm[n]}function qe(n){return{fieldPath:n.canonicalString()}}function ze(n){return Tt.fromServerFormat(n.fieldPath)}function Vu(n){return n instanceof dt?function(e){if(e.op==="=="){if(Oa(e.value))return{unaryFilter:{field:qe(e.field),op:"IS_NAN"}};if(Na(e.value))return{unaryFilter:{field:qe(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Oa(e.value))return{unaryFilter:{field:qe(e.field),op:"IS_NOT_NAN"}};if(Na(e.value))return{unaryFilter:{field:qe(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:qe(e.field),op:fm(e.op),value:e.value}}}(n):n instanceof jt?function(e){const r=e.getFilters().map(s=>Vu(s));return r.length===1?r[0]:{compositeFilter:{op:dm(e.op),filters:r}}}(n):$()}function mm(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function Du(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class oe{constructor(t,e,r,s,o=H.min(),a=H.min(),u=It.EMPTY_BYTE_STRING,h=null){this.target=t,this.targetId=e,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=u,this.expectedCount=h}withSequenceNumber(t){return new oe(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new oe(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new oe(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new oe(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class pm{constructor(t){this.Tt=t}}function gm(n){const t=um({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?ni(t,t.limit,"L"):t}/**
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
 */class _m{constructor(){this.Tn=new ym}addToCollectionParentIndex(t,e){return this.Tn.add(e),P.resolve()}getCollectionParents(t,e){return P.resolve(this.Tn.getEntries(e))}addFieldIndex(t,e){return P.resolve()}deleteFieldIndex(t,e){return P.resolve()}deleteAllFieldIndexes(t){return P.resolve()}createTargetIndexes(t,e){return P.resolve()}getDocumentsMatchingTarget(t,e){return P.resolve(null)}getIndexType(t,e){return P.resolve(0)}getFieldIndexes(t,e){return P.resolve([])}getNextCollectionGroupToUpdate(t){return P.resolve(null)}getMinOffset(t,e){return P.resolve(de.min())}getMinOffsetFromCollectionGroup(t,e){return P.resolve(de.min())}updateCollectionGroup(t,e,r){return P.resolve()}updateIndexEntries(t,e){return P.resolve()}}class ym{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e]||new pt(at.comparator),o=!s.has(r);return this.index[e]=s.add(r),o}has(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e];return s&&s.has(r)}getEntries(t){return(this.index[t]||new pt(at.comparator)).toArray()}}/**
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
 */const Wa={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},ku=41943040;class Nt{static withCacheSize(t){return new Nt(t,Nt.DEFAULT_COLLECTION_PERCENTILE,Nt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,r){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=r}}/**
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
 */Nt.DEFAULT_COLLECTION_PERCENTILE=10,Nt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Nt.DEFAULT=new Nt(ku,Nt.DEFAULT_COLLECTION_PERCENTILE,Nt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Nt.DISABLED=new Nt(-1,0,0);/**
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
 */class Je{constructor(t){this.$n=t}next(){return this.$n+=2,this.$n}static Un(){return new Je(0)}static Kn(){return new Je(-1)}}/**
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
 */const Qa="LruGarbageCollector",Em=1048576;function Xa([n,t],[e,r]){const s=Q(n,e);return s===0?Q(t,r):s}class vm{constructor(t){this.Hn=t,this.buffer=new pt(Xa),this.Jn=0}Yn(){return++this.Jn}Zn(t){const e=[t,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(e);else{const r=this.buffer.last();Xa(e,r)<0&&(this.buffer=this.buffer.delete(r).add(e))}}get maxValue(){return this.buffer.last()[0]}}class Tm{constructor(t,e,r){this.garbageCollector=t,this.asyncQueue=e,this.localStore=r,this.Xn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return this.Xn!==null}er(t){F(Qa,`Garbage collection scheduled in ${t}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){sn(e)?F(Qa,"Ignoring IndexedDB error during garbage collection: ",e):await rn(e)}await this.er(3e5)})}}class Im{constructor(t,e){this.tr=t,this.params=e}calculateTargetCount(t,e){return this.tr.nr(t).next(r=>Math.floor(e/100*r))}nthSequenceNumber(t,e){if(e===0)return P.resolve(Hr.ae);const r=new vm(e);return this.tr.forEachTarget(t,s=>r.Zn(s.sequenceNumber)).next(()=>this.tr.rr(t,s=>r.Zn(s))).next(()=>r.maxValue)}removeTargets(t,e,r){return this.tr.removeTargets(t,e,r)}removeOrphanedDocuments(t,e){return this.tr.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(F("LruGarbageCollector","Garbage collection skipped; disabled"),P.resolve(Wa)):this.getCacheSize(t).next(r=>r<this.params.cacheSizeCollectionThreshold?(F("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Wa):this.ir(t,e))}getCacheSize(t){return this.tr.getCacheSize(t)}ir(t,e){let r,s,o,a,u,h,f;const p=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(E=>(E>this.params.maximumSequenceNumbersToCollect?(F("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${E}`),s=this.params.maximumSequenceNumbersToCollect):s=E,a=Date.now(),this.nthSequenceNumber(t,s))).next(E=>(r=E,u=Date.now(),this.removeTargets(t,r,e))).next(E=>(o=E,h=Date.now(),this.removeOrphanedDocuments(t,r))).next(E=>(f=Date.now(),Be()<=J.DEBUG&&F("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-p}ms
	Determined least recently used ${s} in `+(u-a)+`ms
	Removed ${o} targets in `+(h-u)+`ms
	Removed ${E} documents in `+(f-h)+`ms
Total Duration: ${f-p}ms`),P.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:o,documentsRemoved:E})))}}function wm(n,t){return new Im(n,t)}/**
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
 */class Am{constructor(){this.changes=new Ce(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,Ct.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?P.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class bm{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
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
 */class Rm{constructor(t,e,r,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=s}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next(s=>(r=s,this.remoteDocumentCache.getEntry(t,e))).next(s=>(r!==null&&Cn(r.mutation,s,Bt.empty(),mt.now()),s))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.getLocalViewOfDocuments(t,r,X()).next(()=>r))}getLocalViewOfDocuments(t,e,r=X()){const s=Ae();return this.populateOverlays(t,s,e).next(()=>this.computeViews(t,e,s,r).next(o=>{let a=wn();return o.forEach((u,h)=>{a=a.insert(u,h.overlayedDocument)}),a}))}getOverlayedDocuments(t,e){const r=Ae();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,X()))}populateOverlays(t,e,r){const s=[];return r.forEach(o=>{e.has(o)||s.push(o)}),this.documentOverlayCache.getOverlays(t,s).next(o=>{o.forEach((a,u)=>{e.set(a,u)})})}computeViews(t,e,r,s){let o=te();const a=Sn(),u=function(){return Sn()}();return e.forEach((h,f)=>{const p=r.get(f.key);s.has(f.key)&&(p===void 0||p.mutation instanceof Ve)?o=o.insert(f.key,f):p!==void 0?(a.set(f.key,p.mutation.getFieldMask()),Cn(p.mutation,f,p.mutation.getFieldMask(),mt.now())):a.set(f.key,Bt.empty())}),this.recalculateAndSaveOverlays(t,o).next(h=>(h.forEach((f,p)=>a.set(f,p)),e.forEach((f,p)=>{var E;return u.set(f,new bm(p,(E=a.get(f))!==null&&E!==void 0?E:null))}),u))}recalculateAndSaveOverlays(t,e){const r=Sn();let s=new lt((a,u)=>a-u),o=X();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(a=>{for(const u of a)u.keys().forEach(h=>{const f=e.get(h);if(f===null)return;let p=r.get(h)||Bt.empty();p=u.applyToLocalView(f,p),r.set(h,p);const E=(s.get(u.batchId)||X()).add(h);s=s.insert(u.batchId,E)})}).next(()=>{const a=[],u=s.getReverseIterator();for(;u.hasNext();){const h=u.getNext(),f=h.key,p=h.value,E=du();p.forEach(A=>{if(!o.has(A)){const R=Eu(e.get(A),r.get(A));R!==null&&E.set(A,R),o=o.add(A)}}),a.push(this.documentOverlayCache.saveOverlays(t,f,E))}return P.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,e,r,s){return function(a){return q.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):lu(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,s):this.getDocumentsMatchingCollectionQuery(t,e,r,s)}getNextDocuments(t,e,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,s).next(o=>{const a=s-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,s-o.size):P.resolve(Ae());let u=Nn,h=o;return a.next(f=>P.forEach(f,(p,E)=>(u<E.largestBatchId&&(u=E.largestBatchId),o.get(p)?P.resolve():this.remoteDocumentCache.getEntry(t,p).next(A=>{h=h.insert(p,A)}))).next(()=>this.populateOverlays(t,f,o)).next(()=>this.computeViews(t,h,f,X())).next(p=>({batchId:u,changes:fu(p)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new q(e)).next(r=>{let s=wn();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(t,e,r,s){const o=e.collectionGroup;let a=wn();return this.indexManager.getCollectionParents(t,o).next(u=>P.forEach(u,h=>{const f=function(E,A){return new Un(A,null,E.explicitOrderBy.slice(),E.filters.slice(),E.limit,E.limitType,E.startAt,E.endAt)}(e,h.child(o));return this.getDocumentsMatchingCollectionQuery(t,f,r,s).next(p=>{p.forEach((E,A)=>{a=a.insert(E,A)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(t,e,r,s){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next(a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,o,s))).next(a=>{o.forEach((h,f)=>{const p=f.getKey();a.get(p)===null&&(a=a.insert(p,Ct.newInvalidDocument(p)))});let u=wn();return a.forEach((h,f)=>{const p=o.get(h);p!==void 0&&Cn(p.mutation,f,Bt.empty(),mt.now()),Qr(e,f)&&(u=u.insert(h,f))}),u})}}/**
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
 */class Pm{constructor(t){this.serializer=t,this.dr=new Map,this.Ar=new Map}getBundleMetadata(t,e){return P.resolve(this.dr.get(e))}saveBundleMetadata(t,e){return this.dr.set(e.id,function(s){return{id:s.id,version:s.version,createTime:$t(s.createTime)}}(e)),P.resolve()}getNamedQuery(t,e){return P.resolve(this.Ar.get(e))}saveNamedQuery(t,e){return this.Ar.set(e.name,function(s){return{name:s.name,query:gm(s.bundledQuery),readTime:$t(s.readTime)}}(e)),P.resolve()}}/**
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
 */class Sm{constructor(){this.overlays=new lt(q.comparator),this.Rr=new Map}getOverlay(t,e){return P.resolve(this.overlays.get(e))}getOverlays(t,e){const r=Ae();return P.forEach(e,s=>this.getOverlay(t,s).next(o=>{o!==null&&r.set(s,o)})).next(()=>r)}saveOverlays(t,e,r){return r.forEach((s,o)=>{this.Et(t,e,o)}),P.resolve()}removeOverlaysForBatchId(t,e,r){const s=this.Rr.get(r);return s!==void 0&&(s.forEach(o=>this.overlays=this.overlays.remove(o)),this.Rr.delete(r)),P.resolve()}getOverlaysForCollection(t,e,r){const s=Ae(),o=e.length+1,a=new q(e.child("")),u=this.overlays.getIteratorFrom(a);for(;u.hasNext();){const h=u.getNext().value,f=h.getKey();if(!e.isPrefixOf(f.path))break;f.path.length===o&&h.largestBatchId>r&&s.set(h.getKey(),h)}return P.resolve(s)}getOverlaysForCollectionGroup(t,e,r,s){let o=new lt((f,p)=>f-p);const a=this.overlays.getIterator();for(;a.hasNext();){const f=a.getNext().value;if(f.getKey().getCollectionGroup()===e&&f.largestBatchId>r){let p=o.get(f.largestBatchId);p===null&&(p=Ae(),o=o.insert(f.largestBatchId,p)),p.set(f.getKey(),f)}}const u=Ae(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach((f,p)=>u.set(f,p)),!(u.size()>=s)););return P.resolve(u)}Et(t,e,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.Rr.get(s.largestBatchId).delete(r.key);this.Rr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new Gd(e,r));let o=this.Rr.get(e);o===void 0&&(o=X(),this.Rr.set(e,o)),this.Rr.set(e,o.add(r.key))}}/**
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
 */class Cm{constructor(){this.sessionToken=It.EMPTY_BYTE_STRING}getSessionToken(t){return P.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,P.resolve()}}/**
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
 */class bi{constructor(){this.Vr=new pt(gt.mr),this.gr=new pt(gt.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(t,e){const r=new gt(t,e);this.Vr=this.Vr.add(r),this.gr=this.gr.add(r)}yr(t,e){t.forEach(r=>this.addReference(r,e))}removeReference(t,e){this.wr(new gt(t,e))}Sr(t,e){t.forEach(r=>this.removeReference(r,e))}br(t){const e=new q(new at([])),r=new gt(e,t),s=new gt(e,t+1),o=[];return this.gr.forEachInRange([r,s],a=>{this.wr(a),o.push(a.key)}),o}Dr(){this.Vr.forEach(t=>this.wr(t))}wr(t){this.Vr=this.Vr.delete(t),this.gr=this.gr.delete(t)}vr(t){const e=new q(new at([])),r=new gt(e,t),s=new gt(e,t+1);let o=X();return this.gr.forEachInRange([r,s],a=>{o=o.add(a.key)}),o}containsKey(t){const e=new gt(t,0),r=this.Vr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class gt{constructor(t,e){this.key=t,this.Cr=e}static mr(t,e){return q.comparator(t.key,e.key)||Q(t.Cr,e.Cr)}static pr(t,e){return Q(t.Cr,e.Cr)||q.comparator(t.key,e.key)}}/**
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
 */class Vm{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Fr=1,this.Mr=new pt(gt.mr)}checkEmpty(t){return P.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,s){const o=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new Kd(o,e,r,s);this.mutationQueue.push(a);for(const u of s)this.Mr=this.Mr.add(new gt(u.key,o)),this.indexManager.addToCollectionParentIndex(t,u.key.path.popLast());return P.resolve(a)}lookupMutationBatch(t,e){return P.resolve(this.Or(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,s=this.Nr(r),o=s<0?0:s;return P.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return P.resolve(this.mutationQueue.length===0?gi:this.Fr-1)}getAllMutationBatches(t){return P.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new gt(e,0),s=new gt(e,Number.POSITIVE_INFINITY),o=[];return this.Mr.forEachInRange([r,s],a=>{const u=this.Or(a.Cr);o.push(u)}),P.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new pt(Q);return e.forEach(s=>{const o=new gt(s,0),a=new gt(s,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([o,a],u=>{r=r.add(u.Cr)})}),P.resolve(this.Br(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,s=r.length+1;let o=r;q.isDocumentKey(o)||(o=o.child(""));const a=new gt(new q(o),0);let u=new pt(Q);return this.Mr.forEachWhile(h=>{const f=h.key.path;return!!r.isPrefixOf(f)&&(f.length===s&&(u=u.add(h.Cr)),!0)},a),P.resolve(this.Br(u))}Br(t){const e=[];return t.forEach(r=>{const s=this.Or(r);s!==null&&e.push(s)}),e}removeMutationBatch(t,e){et(this.Lr(e.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Mr;return P.forEach(e.mutations,s=>{const o=new gt(s.key,e.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.Mr=r})}qn(t){}containsKey(t,e){const r=new gt(e,0),s=this.Mr.firstAfterOrEqual(r);return P.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,P.resolve()}Lr(t,e){return this.Nr(t)}Nr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Or(t){const e=this.Nr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
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
 */class Dm{constructor(t){this.kr=t,this.docs=function(){return new lt(q.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,s=this.docs.get(r),o=s?s.size:0,a=this.kr(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return P.resolve(r?r.document.mutableCopy():Ct.newInvalidDocument(e))}getEntries(t,e){let r=te();return e.forEach(s=>{const o=this.docs.get(s);r=r.insert(s,o?o.document.mutableCopy():Ct.newInvalidDocument(s))}),P.resolve(r)}getDocumentsMatchingQuery(t,e,r,s){let o=te();const a=e.path,u=new q(a.child("__id-9223372036854775808__")),h=this.docs.getIteratorFrom(u);for(;h.hasNext();){const{key:f,value:{document:p}}=h.getNext();if(!a.isPrefixOf(f.path))break;f.path.length>a.length+1||ad(od(p),r)<=0||(s.has(p.key)||Qr(e,p))&&(o=o.insert(p.key,p.mutableCopy()))}return P.resolve(o)}getAllFromCollectionGroup(t,e,r,s){$()}qr(t,e){return P.forEach(this.docs,r=>e(r))}newChangeBuffer(t){return new km(this)}getSize(t){return P.resolve(this.size)}}class km extends Am{constructor(t){super(),this.Ir=t}applyChanges(t){const e=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?e.push(this.Ir.addEntry(t,s)):this.Ir.removeEntry(r)}),P.waitFor(e)}getFromCache(t,e){return this.Ir.getEntry(t,e)}getAllFromCache(t,e){return this.Ir.getEntries(t,e)}}/**
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
 */class Nm{constructor(t){this.persistence=t,this.Qr=new Ce(e=>Ei(e),vi),this.lastRemoteSnapshotVersion=H.min(),this.highestTargetId=0,this.$r=0,this.Ur=new bi,this.targetCount=0,this.Kr=Je.Un()}forEachTarget(t,e){return this.Qr.forEach((r,s)=>e(s)),P.resolve()}getLastRemoteSnapshotVersion(t){return P.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return P.resolve(this.$r)}allocateTargetId(t){return this.highestTargetId=this.Kr.next(),P.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.$r&&(this.$r=e),P.resolve()}zn(t){this.Qr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Kr=new Je(e),this.highestTargetId=e),t.sequenceNumber>this.$r&&(this.$r=t.sequenceNumber)}addTargetData(t,e){return this.zn(e),this.targetCount+=1,P.resolve()}updateTargetData(t,e){return this.zn(e),P.resolve()}removeTargetData(t,e){return this.Qr.delete(e.target),this.Ur.br(e.targetId),this.targetCount-=1,P.resolve()}removeTargets(t,e,r){let s=0;const o=[];return this.Qr.forEach((a,u)=>{u.sequenceNumber<=e&&r.get(u.targetId)===null&&(this.Qr.delete(a),o.push(this.removeMatchingKeysForTargetId(t,u.targetId)),s++)}),P.waitFor(o).next(()=>s)}getTargetCount(t){return P.resolve(this.targetCount)}getTargetData(t,e){const r=this.Qr.get(e)||null;return P.resolve(r)}addMatchingKeys(t,e,r){return this.Ur.yr(e,r),P.resolve()}removeMatchingKeys(t,e,r){this.Ur.Sr(e,r);const s=this.persistence.referenceDelegate,o=[];return s&&e.forEach(a=>{o.push(s.markPotentiallyOrphaned(t,a))}),P.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.Ur.br(e),P.resolve()}getMatchingKeysForTargetId(t,e){const r=this.Ur.vr(e);return P.resolve(r)}containsKey(t,e){return P.resolve(this.Ur.containsKey(e))}}/**
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
 */class Nu{constructor(t,e){this.Wr={},this.overlays={},this.Gr=new Hr(0),this.zr=!1,this.zr=!0,this.jr=new Cm,this.referenceDelegate=t(this),this.Hr=new Nm(this),this.indexManager=new _m,this.remoteDocumentCache=function(s){return new Dm(s)}(r=>this.referenceDelegate.Jr(r)),this.serializer=new pm(e),this.Yr=new Pm(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Sm,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.Wr[t.toKey()];return r||(r=new Vm(e,this.referenceDelegate),this.Wr[t.toKey()]=r),r}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(t,e,r){F("MemoryPersistence","Starting transaction:",t);const s=new Om(this.Gr.next());return this.referenceDelegate.Zr(),r(s).next(o=>this.referenceDelegate.Xr(s).next(()=>o)).toPromise().then(o=>(s.raiseOnCommittedEvent(),o))}ei(t,e){return P.or(Object.values(this.Wr).map(r=>()=>r.containsKey(t,e)))}}class Om extends ud{constructor(t){super(),this.currentSequenceNumber=t}}class Ri{constructor(t){this.persistence=t,this.ti=new bi,this.ni=null}static ri(t){return new Ri(t)}get ii(){if(this.ni)return this.ni;throw $()}addReference(t,e,r){return this.ti.addReference(r,e),this.ii.delete(r.toString()),P.resolve()}removeReference(t,e,r){return this.ti.removeReference(r,e),this.ii.add(r.toString()),P.resolve()}markPotentiallyOrphaned(t,e){return this.ii.add(e.toString()),P.resolve()}removeTarget(t,e){this.ti.br(e.targetId).forEach(s=>this.ii.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next(s=>{s.forEach(o=>this.ii.add(o.toString()))}).next(()=>r.removeTargetData(t,e))}Zr(){this.ni=new Set}Xr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return P.forEach(this.ii,r=>{const s=q.fromPath(r);return this.si(t,s).next(o=>{o||e.removeEntry(s,H.min())})}).next(()=>(this.ni=null,e.apply(t)))}updateLimboDocument(t,e){return this.si(t,e).next(r=>{r?this.ii.delete(e.toString()):this.ii.add(e.toString())})}Jr(t){return 0}si(t,e){return P.or([()=>P.resolve(this.ti.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.ei(t,e)])}}class Fr{constructor(t,e){this.persistence=t,this.oi=new Ce(r=>fd(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=wm(this,e)}static ri(t,e){return new Fr(t,e)}Zr(){}Xr(t){return P.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}nr(t){const e=this.sr(t);return this.persistence.getTargetCache().getTargetCount(t).next(r=>e.next(s=>r+s))}sr(t){let e=0;return this.rr(t,r=>{e++}).next(()=>e)}rr(t,e){return P.forEach(this.oi,(r,s)=>this.ar(t,r,s).next(o=>o?P.resolve():e(s)))}removeTargets(t,e,r){return this.persistence.getTargetCache().removeTargets(t,e,r)}removeOrphanedDocuments(t,e){let r=0;const s=this.persistence.getRemoteDocumentCache(),o=s.newChangeBuffer();return s.qr(t,a=>this.ar(t,a,e).next(u=>{u||(r++,o.removeEntry(a,H.min()))})).next(()=>o.apply(t)).next(()=>r)}markPotentiallyOrphaned(t,e){return this.oi.set(e,t.currentSequenceNumber),P.resolve()}removeTarget(t,e){const r=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,r)}addReference(t,e,r){return this.oi.set(r,t.currentSequenceNumber),P.resolve()}removeReference(t,e,r){return this.oi.set(r,t.currentSequenceNumber),P.resolve()}updateLimboDocument(t,e){return this.oi.set(e,t.currentSequenceNumber),P.resolve()}Jr(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=_r(t.data.value)),e}ar(t,e,r){return P.or([()=>this.persistence.ei(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const s=this.oi.get(e);return P.resolve(s!==void 0&&s>r)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
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
 */class Pi{constructor(t,e,r,s){this.targetId=t,this.fromCache=e,this.Hi=r,this.Ji=s}static Yi(t,e){let r=X(),s=X();for(const o of e.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:s=s.add(o.doc.key)}return new Pi(t,e.fromCache,r,s)}}/**
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
 */class Mm{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class Lm{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=function(){return Dh()?8:cd(Ch())>0?6:4}()}initialize(t,e){this.ns=t,this.indexManager=e,this.Zi=!0}getDocumentsMatchingQuery(t,e,r,s){const o={result:null};return this.rs(t,e).next(a=>{o.result=a}).next(()=>{if(!o.result)return this.ss(t,e,s,r).next(a=>{o.result=a})}).next(()=>{if(o.result)return;const a=new Mm;return this._s(t,e,a).next(u=>{if(o.result=u,this.Xi)return this.us(t,e,a,u.size)})}).next(()=>o.result)}us(t,e,r,s){return r.documentReadCount<this.es?(Be()<=J.DEBUG&&F("QueryEngine","SDK will not create cache indexes for query:",je(e),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),P.resolve()):(Be()<=J.DEBUG&&F("QueryEngine","Query:",je(e),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ts*s?(Be()<=J.DEBUG&&F("QueryEngine","The SDK decides to create cache indexes for query:",je(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,zt(e))):P.resolve())}rs(t,e){if(xa(e))return P.resolve(null);let r=zt(e);return this.indexManager.getIndexType(t,r).next(s=>s===0?null:(e.limit!==null&&s===1&&(e=ni(e,null,"F"),r=zt(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next(o=>{const a=X(...o);return this.ns.getDocuments(t,a).next(u=>this.indexManager.getMinOffset(t,r).next(h=>{const f=this.cs(e,u);return this.ls(e,f,a,h.readTime)?this.rs(t,ni(e,null,"F")):this.hs(t,f,e,h)}))})))}ss(t,e,r,s){return xa(e)||s.isEqual(H.min())?P.resolve(null):this.ns.getDocuments(t,r).next(o=>{const a=this.cs(e,o);return this.ls(e,a,r,s)?P.resolve(null):(Be()<=J.DEBUG&&F("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),je(e)),this.hs(t,a,e,id(s,Nn)).next(u=>u))})}cs(t,e){let r=new pt(cu(t));return e.forEach((s,o)=>{Qr(t,o)&&(r=r.add(o))}),r}ls(t,e,r,s){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(s)>0)}_s(t,e,r){return Be()<=J.DEBUG&&F("QueryEngine","Using full collection scan to execute query:",je(e)),this.ns.getDocumentsMatchingQuery(t,e,de.min(),r)}hs(t,e,r,s){return this.ns.getDocumentsMatchingQuery(t,r,s).next(o=>(e.forEach(a=>{o=o.insert(a.key,a)}),o))}}/**
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
 */const Si="LocalStore",Fm=3e8;class xm{constructor(t,e,r,s){this.persistence=t,this.Ps=e,this.serializer=s,this.Ts=new lt(Q),this.Is=new Ce(o=>Ei(o),vi),this.Es=new Map,this.ds=t.getRemoteDocumentCache(),this.Hr=t.getTargetCache(),this.Yr=t.getBundleCache(),this.As(r)}As(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Rm(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.Ts))}}function Um(n,t,e,r){return new xm(n,t,e,r)}async function Ou(n,t){const e=K(n);return await e.persistence.runTransaction("Handle user change","readonly",r=>{let s;return e.mutationQueue.getAllMutationBatches(r).next(o=>(s=o,e.As(t),e.mutationQueue.getAllMutationBatches(r))).next(o=>{const a=[],u=[];let h=X();for(const f of s){a.push(f.batchId);for(const p of f.mutations)h=h.add(p.key)}for(const f of o){u.push(f.batchId);for(const p of f.mutations)h=h.add(p.key)}return e.localDocuments.getDocuments(r,h).next(f=>({Rs:f,removedBatchIds:a,addedBatchIds:u}))})})}function Bm(n,t){const e=K(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=t.batch.keys(),o=e.ds.newChangeBuffer({trackRemovals:!0});return function(u,h,f,p){const E=f.batch,A=E.keys();let R=P.resolve();return A.forEach(S=>{R=R.next(()=>p.getEntry(h,S)).next(O=>{const V=f.docVersions.get(S);et(V!==null),O.version.compareTo(V)<0&&(E.applyToRemoteDocument(O,f),O.isValidDocument()&&(O.setReadTime(f.commitVersion),p.addEntry(O)))})}),R.next(()=>u.mutationQueue.removeMutationBatch(h,E))}(e,r,t,o).next(()=>o.apply(r)).next(()=>e.mutationQueue.performConsistencyCheck(r)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(r,s,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(u){let h=X();for(let f=0;f<u.mutationResults.length;++f)u.mutationResults[f].transformResults.length>0&&(h=h.add(u.batch.mutations[f].key));return h}(t))).next(()=>e.localDocuments.getDocuments(r,s))})}function Mu(n){const t=K(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Hr.getLastRemoteSnapshotVersion(e))}function jm(n,t){const e=K(n),r=t.snapshotVersion;let s=e.Ts;return e.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const a=e.ds.newChangeBuffer({trackRemovals:!0});s=e.Ts;const u=[];t.targetChanges.forEach((p,E)=>{const A=s.get(E);if(!A)return;u.push(e.Hr.removeMatchingKeys(o,p.removedDocuments,E).next(()=>e.Hr.addMatchingKeys(o,p.addedDocuments,E)));let R=A.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(E)!==null?R=R.withResumeToken(It.EMPTY_BYTE_STRING,H.min()).withLastLimboFreeSnapshotVersion(H.min()):p.resumeToken.approximateByteSize()>0&&(R=R.withResumeToken(p.resumeToken,r)),s=s.insert(E,R),function(O,V,k){return O.resumeToken.approximateByteSize()===0||V.snapshotVersion.toMicroseconds()-O.snapshotVersion.toMicroseconds()>=Fm?!0:k.addedDocuments.size+k.modifiedDocuments.size+k.removedDocuments.size>0}(A,R,p)&&u.push(e.Hr.updateTargetData(o,R))});let h=te(),f=X();if(t.documentUpdates.forEach(p=>{t.resolvedLimboDocuments.has(p)&&u.push(e.persistence.referenceDelegate.updateLimboDocument(o,p))}),u.push(qm(o,a,t.documentUpdates).next(p=>{h=p.Vs,f=p.fs})),!r.isEqual(H.min())){const p=e.Hr.getLastRemoteSnapshotVersion(o).next(E=>e.Hr.setTargetsMetadata(o,o.currentSequenceNumber,r));u.push(p)}return P.waitFor(u).next(()=>a.apply(o)).next(()=>e.localDocuments.getLocalViewOfDocuments(o,h,f)).next(()=>h)}).then(o=>(e.Ts=s,o))}function qm(n,t,e){let r=X(),s=X();return e.forEach(o=>r=r.add(o)),t.getEntries(n,r).next(o=>{let a=te();return e.forEach((u,h)=>{const f=o.get(u);h.isFoundDocument()!==f.isFoundDocument()&&(s=s.add(u)),h.isNoDocument()&&h.version.isEqual(H.min())?(t.removeEntry(u,h.readTime),a=a.insert(u,h)):!f.isValidDocument()||h.version.compareTo(f.version)>0||h.version.compareTo(f.version)===0&&f.hasPendingWrites?(t.addEntry(h),a=a.insert(u,h)):F(Si,"Ignoring outdated watch update for ",u,". Current version:",f.version," Watch version:",h.version)}),{Vs:a,fs:s}})}function zm(n,t){const e=K(n);return e.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=gi),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function $m(n,t){const e=K(n);return e.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return e.Hr.getTargetData(r,t).next(o=>o?(s=o,P.resolve(s)):e.Hr.allocateTargetId(r).next(a=>(s=new oe(t,a,"TargetPurposeListen",r.currentSequenceNumber),e.Hr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=e.Ts.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(e.Ts=e.Ts.insert(r.targetId,r),e.Is.set(t,r.targetId)),r})}async function ai(n,t,e){const r=K(n),s=r.Ts.get(t),o=e?"readwrite":"readwrite-primary";try{e||await r.persistence.runTransaction("Release target",o,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!sn(a))throw a;F(Si,`Failed to update sequence numbers for target ${t}: ${a}`)}r.Ts=r.Ts.remove(t),r.Is.delete(s.target)}function Ya(n,t,e){const r=K(n);let s=H.min(),o=X();return r.persistence.runTransaction("Execute query","readwrite",a=>function(h,f,p){const E=K(h),A=E.Is.get(p);return A!==void 0?P.resolve(E.Ts.get(A)):E.Hr.getTargetData(f,p)}(r,a,zt(t)).next(u=>{if(u)return s=u.lastLimboFreeSnapshotVersion,r.Hr.getMatchingKeysForTargetId(a,u.targetId).next(h=>{o=h})}).next(()=>r.Ps.getDocumentsMatchingQuery(a,t,e?s:H.min(),e?o:X())).next(u=>(Hm(r,Dd(t),u),{documents:u,gs:o})))}function Hm(n,t,e){let r=n.Es.get(t)||H.min();e.forEach((s,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),n.Es.set(t,r)}class Ja{constructor(){this.activeTargetIds=Fd()}Ds(t){this.activeTargetIds=this.activeTargetIds.add(t)}vs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}bs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Km{constructor(){this.ho=new Ja,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t,e=!0){return e&&this.ho.Ds(t),this.Po[t]||"not-current"}updateQueryState(t,e,r){this.Po[t]=e}removeLocalQueryTarget(t){this.ho.vs(t)}isLocalQueryTarget(t){return this.ho.activeTargetIds.has(t)}clearQueryState(t){delete this.Po[t]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(t){return this.ho.activeTargetIds.has(t)}start(){return this.ho=new Ja,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class Gm{To(t){}shutdown(){}}/**
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
 */const Za="ConnectivityMonitor";class tl{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(t){this.Vo.push(t)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){F(Za,"Network connectivity changed: AVAILABLE");for(const t of this.Vo)t(0)}Ro(){F(Za,"Network connectivity changed: UNAVAILABLE");for(const t of this.Vo)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let dr=null;function li(){return dr===null?dr=function(){return 268435456+Math.round(2147483648*Math.random())}():dr++,"0x"+dr.toString(16)}/**
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
 */const Ls="RestConnection",Wm={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Qm{get fo(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.po=e+"://"+t.host,this.yo=`projects/${r}/databases/${s}`,this.wo=this.databaseId.database===Vr?`project_id=${r}`:`project_id=${r}&database_id=${s}`}So(t,e,r,s,o){const a=li(),u=this.bo(t,e.toUriEncodedString());F(Ls,`Sending RPC '${t}' ${a}:`,u,r);const h={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(h,s,o),this.vo(t,u,h,r).then(f=>(F(Ls,`Received RPC '${t}' ${a}: `,f),f),f=>{throw We(Ls,`RPC '${t}' ${a} failed with error: `,f,"url: ",u,"request:",r),f})}Co(t,e,r,s,o,a){return this.So(t,e,r,s,o)}Do(t,e,r){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+nn}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach((s,o)=>t[o]=s),r&&r.headers.forEach((s,o)=>t[o]=s)}bo(t,e){const r=Wm[t];return`${this.po}/v1/${e}:${r}`}terminate(){}}/**
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
 */class Xm{constructor(t){this.Fo=t.Fo,this.Mo=t.Mo}xo(t){this.Oo=t}No(t){this.Bo=t}Lo(t){this.ko=t}onMessage(t){this.qo=t}close(){this.Mo()}send(t){this.Fo(t)}Qo(){this.Oo()}$o(){this.Bo()}Uo(t){this.ko(t)}Ko(t){this.qo(t)}}/**
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
 */const Pt="WebChannelConnection";class Ym extends Qm{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}vo(t,e,r,s){const o=li();return new Promise((a,u)=>{const h=new Fl;h.setWithCredentials(!0),h.listenOnce(xl.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case gr.NO_ERROR:const p=h.getResponseJson();F(Pt,`XHR for RPC '${t}' ${o} received:`,JSON.stringify(p)),a(p);break;case gr.TIMEOUT:F(Pt,`RPC '${t}' ${o} timed out`),u(new U(C.DEADLINE_EXCEEDED,"Request time out"));break;case gr.HTTP_ERROR:const E=h.getStatus();if(F(Pt,`RPC '${t}' ${o} failed with status:`,E,"response text:",h.getResponseText()),E>0){let A=h.getResponseJson();Array.isArray(A)&&(A=A[0]);const R=A==null?void 0:A.error;if(R&&R.status&&R.message){const S=function(V){const k=V.toLowerCase().replace(/_/g,"-");return Object.values(C).indexOf(k)>=0?k:C.UNKNOWN}(R.status);u(new U(S,R.message))}else u(new U(C.UNKNOWN,"Server responded with status "+h.getStatus()))}else u(new U(C.UNAVAILABLE,"Connection failed."));break;default:$()}}finally{F(Pt,`RPC '${t}' ${o} completed.`)}});const f=JSON.stringify(s);F(Pt,`RPC '${t}' ${o} sending request:`,s),h.send(e,"POST",f,r,15)})}Wo(t,e,r){const s=li(),o=[this.po,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=jl(),u=Bl(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},f=this.longPollingOptions.timeoutSeconds;f!==void 0&&(h.longPollingTimeout=Math.round(1e3*f)),this.useFetchStreams&&(h.useFetchStreams=!0),this.Do(h.initMessageHeaders,e,r),h.encodeInitMessageHeaders=!0;const p=o.join("");F(Pt,`Creating RPC '${t}' stream ${s}: ${p}`,h);const E=a.createWebChannel(p,h);let A=!1,R=!1;const S=new Xm({Fo:V=>{R?F(Pt,`Not sending because RPC '${t}' stream ${s} is closed:`,V):(A||(F(Pt,`Opening RPC '${t}' stream ${s} transport.`),E.open(),A=!0),F(Pt,`RPC '${t}' stream ${s} sending:`,V),E.send(V))},Mo:()=>E.close()}),O=(V,k,j)=>{V.listen(k,x=>{try{j(x)}catch(W){setTimeout(()=>{throw W},0)}})};return O(E,In.EventType.OPEN,()=>{R||(F(Pt,`RPC '${t}' stream ${s} transport opened.`),S.Qo())}),O(E,In.EventType.CLOSE,()=>{R||(R=!0,F(Pt,`RPC '${t}' stream ${s} transport closed`),S.Uo())}),O(E,In.EventType.ERROR,V=>{R||(R=!0,We(Pt,`RPC '${t}' stream ${s} transport errored:`,V),S.Uo(new U(C.UNAVAILABLE,"The operation could not be completed")))}),O(E,In.EventType.MESSAGE,V=>{var k;if(!R){const j=V.data[0];et(!!j);const x=j,W=(x==null?void 0:x.error)||((k=x[0])===null||k===void 0?void 0:k.error);if(W){F(Pt,`RPC '${t}' stream ${s} received error:`,W);const G=W.status;let M=function(m){const y=ft[m];if(y!==void 0)return Iu(y)}(G),T=W.message;M===void 0&&(M=C.INTERNAL,T="Unknown error status: "+G+" with message "+W.message),R=!0,S.Uo(new U(M,T)),E.close()}else F(Pt,`RPC '${t}' stream ${s} received:`,j),S.Ko(j)}}),O(u,Ul.STAT_EVENT,V=>{V.stat===Qs.PROXY?F(Pt,`RPC '${t}' stream ${s} detected buffering proxy`):V.stat===Qs.NOPROXY&&F(Pt,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{S.$o()},0),S}}function Fs(){return typeof document<"u"?document:null}/**
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
 */function Zr(n){return new em(n,!0)}/**
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
 */class Lu{constructor(t,e,r=1e3,s=1.5,o=6e4){this.Ti=t,this.timerId=e,this.Go=r,this.zo=s,this.jo=o,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(t){this.cancel();const e=Math.floor(this.Ho+this.e_()),r=Math.max(0,Date.now()-this.Yo),s=Math.max(0,e-r);s>0&&F("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ho} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,s,()=>(this.Yo=Date.now(),t())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
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
 */const el="PersistentStream";class Fu{constructor(t,e,r,s,o,a,u,h){this.Ti=t,this.n_=r,this.r_=s,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=u,this.listener=h,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new Lu(t,e)}u_(){return this.state===1||this.state===5||this.c_()}c_(){return this.state===2||this.state===3}start(){this.__=0,this.state!==4?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&this.s_===null&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(t){this.E_(),this.stream.send(t)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(t,e){this.E_(),this.d_(),this.a_.cancel(),this.i_++,t!==4?this.a_.reset():e&&e.code===C.RESOURCE_EXHAUSTED?(Zt(e.toString()),Zt("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):e&&e.code===C.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.A_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Lo(e)}A_(){}auth(){this.state=1;const t=this.R_(this.i_),e=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.i_===e&&this.V_(r,s)},r=>{t(()=>{const s=new U(C.UNKNOWN,"Fetching auth token failed: "+r.message);return this.m_(s)})})}V_(t,e){const r=this.R_(this.i_);this.stream=this.f_(t,e),this.stream.xo(()=>{r(()=>this.listener.xo())}),this.stream.No(()=>{r(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(s=>{r(()=>this.m_(s))}),this.stream.onMessage(s=>{r(()=>++this.__==1?this.g_(s):this.onNext(s))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(t){return F(el,`close with error: ${t}`),this.stream=null,this.close(4,t)}R_(t){return e=>{this.Ti.enqueueAndForget(()=>this.i_===t?e():(F(el,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Jm extends Fu{constructor(t,e,r,s,o,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,s,a),this.serializer=o}f_(t,e){return this.connection.Wo("Listen",t,e)}g_(t){return this.onNext(t)}onNext(t){this.a_.reset();const e=sm(this.serializer,t),r=function(o){if(!("targetChange"in o))return H.min();const a=o.targetChange;return a.targetIds&&a.targetIds.length?H.min():a.readTime?$t(a.readTime):H.min()}(t);return this.listener.p_(e,r)}y_(t){const e={};e.database=oi(this.serializer),e.addTarget=function(o,a){let u;const h=a.target;if(u=ti(h)?{documents:am(o,h)}:{query:lm(o,h).ht},u.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){u.resumeToken=bu(o,a.resumeToken);const f=ri(o,a.expectedCount);f!==null&&(u.expectedCount=f)}else if(a.snapshotVersion.compareTo(H.min())>0){u.readTime=Lr(o,a.snapshotVersion.toTimestamp());const f=ri(o,a.expectedCount);f!==null&&(u.expectedCount=f)}return u}(this.serializer,t);const r=cm(this.serializer,t);r&&(e.labels=r),this.I_(e)}w_(t){const e={};e.database=oi(this.serializer),e.removeTarget=t,this.I_(e)}}class Zm extends Fu{constructor(t,e,r,s,o,a){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,r,s,a),this.serializer=o}get S_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.S_&&this.b_([])}f_(t,e){return this.connection.Wo("Write",t,e)}g_(t){return et(!!t.streamToken),this.lastStreamToken=t.streamToken,et(!t.writeResults||t.writeResults.length===0),this.listener.D_()}onNext(t){et(!!t.streamToken),this.lastStreamToken=t.streamToken,this.a_.reset();const e=om(t.writeResults,t.commitTime),r=$t(t.commitTime);return this.listener.v_(r,e)}C_(){const t={};t.database=oi(this.serializer),this.I_(t)}b_(t){const e={streamToken:this.lastStreamToken,writes:t.map(r=>im(this.serializer,r))};this.I_(e)}}/**
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
 */class tp{}class ep extends tp{constructor(t,e,r,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=s,this.F_=!1}M_(){if(this.F_)throw new U(C.FAILED_PRECONDITION,"The client has already been terminated.")}So(t,e,r,s){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.So(t,si(e,r),s,o,a)).catch(o=>{throw o.name==="FirebaseError"?(o.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new U(C.UNKNOWN,o.toString())})}Co(t,e,r,s,o){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,u])=>this.connection.Co(t,si(e,r),s,a,u,o)).catch(a=>{throw a.name==="FirebaseError"?(a.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new U(C.UNKNOWN,a.toString())})}terminate(){this.F_=!0,this.connection.terminate()}}class np{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){this.x_===0&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(t){this.state==="Online"?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.L_("Offline")))}set(t){this.Q_(),this.x_=0,t==="Online"&&(this.N_=!1),this.L_(t)}L_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}k_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(Zt(e),this.N_=!1):F("OnlineStateTracker",e)}Q_(){this.O_!==null&&(this.O_.cancel(),this.O_=null)}}/**
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
 */const Pe="RemoteStore";class rp{constructor(t,e,r,s,o){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.U_=[],this.K_=new Map,this.W_=new Set,this.G_=[],this.z_=o,this.z_.To(a=>{r.enqueueAndForget(async()=>{De(this)&&(F(Pe,"Restarting streams for network reachability change."),await async function(h){const f=K(h);f.W_.add(4),await qn(f),f.j_.set("Unknown"),f.W_.delete(4),await ts(f)}(this))})}),this.j_=new np(r,s)}}async function ts(n){if(De(n))for(const t of n.G_)await t(!0)}async function qn(n){for(const t of n.G_)await t(!1)}function xu(n,t){const e=K(n);e.K_.has(t.targetId)||(e.K_.set(t.targetId,t),ki(e)?Di(e):on(e).c_()&&Vi(e,t))}function Ci(n,t){const e=K(n),r=on(e);e.K_.delete(t),r.c_()&&Uu(e,t),e.K_.size===0&&(r.c_()?r.P_():De(e)&&e.j_.set("Unknown"))}function Vi(n,t){if(n.H_.Ne(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(H.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}on(n).y_(t)}function Uu(n,t){n.H_.Ne(t),on(n).w_(t)}function Di(n){n.H_=new Yd({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),lt:t=>n.K_.get(t)||null,it:()=>n.datastore.serializer.databaseId}),on(n).start(),n.j_.B_()}function ki(n){return De(n)&&!on(n).u_()&&n.K_.size>0}function De(n){return K(n).W_.size===0}function Bu(n){n.H_=void 0}async function sp(n){n.j_.set("Online")}async function ip(n){n.K_.forEach((t,e)=>{Vi(n,t)})}async function op(n,t){Bu(n),ki(n)?(n.j_.q_(t),Di(n)):n.j_.set("Unknown")}async function ap(n,t,e){if(n.j_.set("Online"),t instanceof Au&&t.state===2&&t.cause)try{await async function(s,o){const a=o.cause;for(const u of o.targetIds)s.K_.has(u)&&(await s.remoteSyncer.rejectListen(u,a),s.K_.delete(u),s.H_.removeTarget(u))}(n,t)}catch(r){F(Pe,"Failed to remove targets %s: %s ",t.targetIds.join(","),r),await xr(n,r)}else if(t instanceof vr?n.H_.We(t):t instanceof wu?n.H_.Ze(t):n.H_.je(t),!e.isEqual(H.min()))try{const r=await Mu(n.localStore);e.compareTo(r)>=0&&await function(o,a){const u=o.H_.ot(a);return u.targetChanges.forEach((h,f)=>{if(h.resumeToken.approximateByteSize()>0){const p=o.K_.get(f);p&&o.K_.set(f,p.withResumeToken(h.resumeToken,a))}}),u.targetMismatches.forEach((h,f)=>{const p=o.K_.get(h);if(!p)return;o.K_.set(h,p.withResumeToken(It.EMPTY_BYTE_STRING,p.snapshotVersion)),Uu(o,h);const E=new oe(p.target,h,f,p.sequenceNumber);Vi(o,E)}),o.remoteSyncer.applyRemoteEvent(u)}(n,e)}catch(r){F(Pe,"Failed to raise snapshot:",r),await xr(n,r)}}async function xr(n,t,e){if(!sn(t))throw t;n.W_.add(1),await qn(n),n.j_.set("Offline"),e||(e=()=>Mu(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{F(Pe,"Retrying IndexedDB access"),await e(),n.W_.delete(1),await ts(n)})}function ju(n,t){return t().catch(e=>xr(n,e,t))}async function es(n){const t=K(n),e=_e(t);let r=t.U_.length>0?t.U_[t.U_.length-1].batchId:gi;for(;lp(t);)try{const s=await zm(t.localStore,r);if(s===null){t.U_.length===0&&e.P_();break}r=s.batchId,up(t,s)}catch(s){await xr(t,s)}qu(t)&&zu(t)}function lp(n){return De(n)&&n.U_.length<10}function up(n,t){n.U_.push(t);const e=_e(n);e.c_()&&e.S_&&e.b_(t.mutations)}function qu(n){return De(n)&&!_e(n).u_()&&n.U_.length>0}function zu(n){_e(n).start()}async function cp(n){_e(n).C_()}async function hp(n){const t=_e(n);for(const e of n.U_)t.b_(e.mutations)}async function fp(n,t,e){const r=n.U_.shift(),s=Ii.from(r,t,e);await ju(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await es(n)}async function dp(n,t){t&&_e(n).S_&&await async function(r,s){if(function(a){return Qd(a)&&a!==C.ABORTED}(s.code)){const o=r.U_.shift();_e(r).h_(),await ju(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,s)),await es(r)}}(n,t),qu(n)&&zu(n)}async function nl(n,t){const e=K(n);e.asyncQueue.verifyOperationInProgress(),F(Pe,"RemoteStore received new credentials");const r=De(e);e.W_.add(3),await qn(e),r&&e.j_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.W_.delete(3),await ts(e)}async function mp(n,t){const e=K(n);t?(e.W_.delete(2),await ts(e)):t||(e.W_.add(2),await qn(e),e.j_.set("Unknown"))}function on(n){return n.J_||(n.J_=function(e,r,s){const o=K(e);return o.M_(),new Jm(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(n.datastore,n.asyncQueue,{xo:sp.bind(null,n),No:ip.bind(null,n),Lo:op.bind(null,n),p_:ap.bind(null,n)}),n.G_.push(async t=>{t?(n.J_.h_(),ki(n)?Di(n):n.j_.set("Unknown")):(await n.J_.stop(),Bu(n))})),n.J_}function _e(n){return n.Y_||(n.Y_=function(e,r,s){const o=K(e);return o.M_(),new Zm(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(n.datastore,n.asyncQueue,{xo:()=>Promise.resolve(),No:cp.bind(null,n),Lo:dp.bind(null,n),D_:hp.bind(null,n),v_:fp.bind(null,n)}),n.G_.push(async t=>{t?(n.Y_.h_(),await es(n)):(await n.Y_.stop(),n.U_.length>0&&(F(Pe,`Stopping write stream with ${n.U_.length} pending writes`),n.U_=[]))})),n.Y_}/**
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
 */class Ni{constructor(t,e,r,s,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=s,this.removalCallback=o,this.deferred=new ce,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,s,o){const a=Date.now()+r,u=new Ni(t,e,a,s,o);return u.start(r),u}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new U(C.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Oi(n,t){if(Zt("AsyncQueue",`${t}: ${n}`),sn(n))return new U(C.UNAVAILABLE,`${t}: ${n}`);throw n}/**
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
 */class Ke{static emptySet(t){return new Ke(t.comparator)}constructor(t){this.comparator=t?(e,r)=>t(e,r)||q.comparator(e.key,r.key):(e,r)=>q.comparator(e.key,r.key),this.keyedMap=wn(),this.sortedSet=new lt(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,r)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Ke)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=r.getNext().key;if(!s.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const r=new Ke;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=e,r}}/**
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
 */class rl{constructor(){this.Z_=new lt(q.comparator)}track(t){const e=t.doc.key,r=this.Z_.get(e);r?t.type!==0&&r.type===3?this.Z_=this.Z_.insert(e,t):t.type===3&&r.type!==1?this.Z_=this.Z_.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.Z_=this.Z_.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.Z_=this.Z_.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.Z_=this.Z_.remove(e):t.type===1&&r.type===2?this.Z_=this.Z_.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.Z_=this.Z_.insert(e,{type:2,doc:t.doc}):$():this.Z_=this.Z_.insert(e,t)}X_(){const t=[];return this.Z_.inorderTraversal((e,r)=>{t.push(r)}),t}}class Ze{constructor(t,e,r,s,o,a,u,h,f){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=o,this.fromCache=a,this.syncStateChanged=u,this.excludesMetadataChanges=h,this.hasCachedResults=f}static fromInitialDocuments(t,e,r,s,o){const a=[];return e.forEach(u=>{a.push({type:0,doc:u})}),new Ze(t,e,Ke.emptySet(e),a,r,s,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Wr(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let s=0;s<e.length;s++)if(e[s].type!==r[s].type||!e[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class pp{constructor(){this.ea=void 0,this.ta=[]}na(){return this.ta.some(t=>t.ra())}}class gp{constructor(){this.queries=sl(),this.onlineState="Unknown",this.ia=new Set}terminate(){(function(e,r){const s=K(e),o=s.queries;s.queries=sl(),o.forEach((a,u)=>{for(const h of u.ta)h.onError(r)})})(this,new U(C.ABORTED,"Firestore shutting down"))}}function sl(){return new Ce(n=>uu(n),Wr)}async function _p(n,t){const e=K(n);let r=3;const s=t.query;let o=e.queries.get(s);o?!o.na()&&t.ra()&&(r=2):(o=new pp,r=t.ra()?0:1);try{switch(r){case 0:o.ea=await e.onListen(s,!0);break;case 1:o.ea=await e.onListen(s,!1);break;case 2:await e.onFirstRemoteStoreListen(s)}}catch(a){const u=Oi(a,`Initialization of query '${je(t.query)}' failed`);return void t.onError(u)}e.queries.set(s,o),o.ta.push(t),t.sa(e.onlineState),o.ea&&t.oa(o.ea)&&Mi(e)}async function yp(n,t){const e=K(n),r=t.query;let s=3;const o=e.queries.get(r);if(o){const a=o.ta.indexOf(t);a>=0&&(o.ta.splice(a,1),o.ta.length===0?s=t.ra()?0:1:!o.na()&&t.ra()&&(s=2))}switch(s){case 0:return e.queries.delete(r),e.onUnlisten(r,!0);case 1:return e.queries.delete(r),e.onUnlisten(r,!1);case 2:return e.onLastRemoteStoreUnlisten(r);default:return}}function Ep(n,t){const e=K(n);let r=!1;for(const s of t){const o=s.query,a=e.queries.get(o);if(a){for(const u of a.ta)u.oa(s)&&(r=!0);a.ea=s}}r&&Mi(e)}function vp(n,t,e){const r=K(n),s=r.queries.get(t);if(s)for(const o of s.ta)o.onError(e);r.queries.delete(t)}function Mi(n){n.ia.forEach(t=>{t.next()})}var ui,il;(il=ui||(ui={}))._a="default",il.Cache="cache";class Tp{constructor(t,e,r){this.query=t,this.aa=e,this.ua=!1,this.ca=null,this.onlineState="Unknown",this.options=r||{}}oa(t){if(!this.options.includeMetadataChanges){const r=[];for(const s of t.docChanges)s.type!==3&&r.push(s);t=new Ze(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.ua?this.la(t)&&(this.aa.next(t),e=!0):this.ha(t,this.onlineState)&&(this.Pa(t),e=!0),this.ca=t,e}onError(t){this.aa.error(t)}sa(t){this.onlineState=t;let e=!1;return this.ca&&!this.ua&&this.ha(this.ca,t)&&(this.Pa(this.ca),e=!0),e}ha(t,e){if(!t.fromCache||!this.ra())return!0;const r=e!=="Offline";return(!this.options.Ta||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}la(t){if(t.docChanges.length>0)return!0;const e=this.ca&&this.ca.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}Pa(t){t=Ze.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.ua=!0,this.aa.next(t)}ra(){return this.options.source!==ui.Cache}}/**
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
 */class $u{constructor(t){this.key=t}}class Hu{constructor(t){this.key=t}}class Ip{constructor(t,e){this.query=t,this.fa=e,this.ga=null,this.hasCachedResults=!1,this.current=!1,this.pa=X(),this.mutatedKeys=X(),this.ya=cu(t),this.wa=new Ke(this.ya)}get Sa(){return this.fa}ba(t,e){const r=e?e.Da:new rl,s=e?e.wa:this.wa;let o=e?e.mutatedKeys:this.mutatedKeys,a=s,u=!1;const h=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,f=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((p,E)=>{const A=s.get(p),R=Qr(this.query,E)?E:null,S=!!A&&this.mutatedKeys.has(A.key),O=!!R&&(R.hasLocalMutations||this.mutatedKeys.has(R.key)&&R.hasCommittedMutations);let V=!1;A&&R?A.data.isEqual(R.data)?S!==O&&(r.track({type:3,doc:R}),V=!0):this.va(A,R)||(r.track({type:2,doc:R}),V=!0,(h&&this.ya(R,h)>0||f&&this.ya(R,f)<0)&&(u=!0)):!A&&R?(r.track({type:0,doc:R}),V=!0):A&&!R&&(r.track({type:1,doc:A}),V=!0,(h||f)&&(u=!0)),V&&(R?(a=a.add(R),o=O?o.add(p):o.delete(p)):(a=a.delete(p),o=o.delete(p)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const p=this.query.limitType==="F"?a.last():a.first();a=a.delete(p.key),o=o.delete(p.key),r.track({type:1,doc:p})}return{wa:a,Da:r,ls:u,mutatedKeys:o}}va(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r,s){const o=this.wa;this.wa=t.wa,this.mutatedKeys=t.mutatedKeys;const a=t.Da.X_();a.sort((p,E)=>function(R,S){const O=V=>{switch(V){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return $()}};return O(R)-O(S)}(p.type,E.type)||this.ya(p.doc,E.doc)),this.Ca(r),s=s!=null&&s;const u=e&&!s?this.Fa():[],h=this.pa.size===0&&this.current&&!s?1:0,f=h!==this.ga;return this.ga=h,a.length!==0||f?{snapshot:new Ze(this.query,t.wa,o,a,t.mutatedKeys,h===0,f,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ma:u}:{Ma:u}}sa(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({wa:this.wa,Da:new rl,mutatedKeys:this.mutatedKeys,ls:!1},!1)):{Ma:[]}}xa(t){return!this.fa.has(t)&&!!this.wa.has(t)&&!this.wa.get(t).hasLocalMutations}Ca(t){t&&(t.addedDocuments.forEach(e=>this.fa=this.fa.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.fa=this.fa.delete(e)),this.current=t.current)}Fa(){if(!this.current)return[];const t=this.pa;this.pa=X(),this.wa.forEach(r=>{this.xa(r.key)&&(this.pa=this.pa.add(r.key))});const e=[];return t.forEach(r=>{this.pa.has(r)||e.push(new Hu(r))}),this.pa.forEach(r=>{t.has(r)||e.push(new $u(r))}),e}Oa(t){this.fa=t.gs,this.pa=X();const e=this.ba(t.documents);return this.applyChanges(e,!0)}Na(){return Ze.fromInitialDocuments(this.query,this.wa,this.mutatedKeys,this.ga===0,this.hasCachedResults)}}const Li="SyncEngine";class wp{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}}class Ap{constructor(t){this.key=t,this.Ba=!1}}class bp{constructor(t,e,r,s,o,a){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=s,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.La={},this.ka=new Ce(u=>uu(u),Wr),this.qa=new Map,this.Qa=new Set,this.$a=new lt(q.comparator),this.Ua=new Map,this.Ka=new bi,this.Wa={},this.Ga=new Map,this.za=Je.Kn(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return this.ja===!0}}async function Rp(n,t,e=!0){const r=Yu(n);let s;const o=r.ka.get(t);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),s=o.view.Na()):s=await Ku(r,t,e,!0),s}async function Pp(n,t){const e=Yu(n);await Ku(e,t,!0,!1)}async function Ku(n,t,e,r){const s=await $m(n.localStore,zt(t)),o=s.targetId,a=n.sharedClientState.addLocalQueryTarget(o,e);let u;return r&&(u=await Sp(n,t,o,a==="current",s.resumeToken)),n.isPrimaryClient&&e&&xu(n.remoteStore,s),u}async function Sp(n,t,e,r,s){n.Ha=(E,A,R)=>async function(O,V,k,j){let x=V.view.ba(k);x.ls&&(x=await Ya(O.localStore,V.query,!1).then(({documents:T})=>V.view.ba(T,x)));const W=j&&j.targetChanges.get(V.targetId),G=j&&j.targetMismatches.get(V.targetId)!=null,M=V.view.applyChanges(x,O.isPrimaryClient,W,G);return al(O,V.targetId,M.Ma),M.snapshot}(n,E,A,R);const o=await Ya(n.localStore,t,!0),a=new Ip(t,o.gs),u=a.ba(o.documents),h=jn.createSynthesizedTargetChangeForCurrentChange(e,r&&n.onlineState!=="Offline",s),f=a.applyChanges(u,n.isPrimaryClient,h);al(n,e,f.Ma);const p=new wp(t,e,a);return n.ka.set(t,p),n.qa.has(e)?n.qa.get(e).push(t):n.qa.set(e,[t]),f.snapshot}async function Cp(n,t,e){const r=K(n),s=r.ka.get(t),o=r.qa.get(s.targetId);if(o.length>1)return r.qa.set(s.targetId,o.filter(a=>!Wr(a,t))),void r.ka.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await ai(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),e&&Ci(r.remoteStore,s.targetId),ci(r,s.targetId)}).catch(rn)):(ci(r,s.targetId),await ai(r.localStore,s.targetId,!0))}async function Vp(n,t){const e=K(n),r=e.ka.get(t),s=e.qa.get(r.targetId);e.isPrimaryClient&&s.length===1&&(e.sharedClientState.removeLocalQueryTarget(r.targetId),Ci(e.remoteStore,r.targetId))}async function Dp(n,t,e){const r=xp(n);try{const s=await function(a,u){const h=K(a),f=mt.now(),p=u.reduce((R,S)=>R.add(S.key),X());let E,A;return h.persistence.runTransaction("Locally write mutations","readwrite",R=>{let S=te(),O=X();return h.ds.getEntries(R,p).next(V=>{S=V,S.forEach((k,j)=>{j.isValidDocument()||(O=O.add(k))})}).next(()=>h.localDocuments.getOverlayedDocuments(R,S)).next(V=>{E=V;const k=[];for(const j of u){const x=$d(j,E.get(j.key).overlayedDocument);x!=null&&k.push(new Ve(j.key,x,tu(x.value.mapValue),Yt.exists(!0)))}return h.mutationQueue.addMutationBatch(R,f,k,u)}).next(V=>{A=V;const k=V.applyToLocalDocumentSet(E,O);return h.documentOverlayCache.saveOverlays(R,V.batchId,k)})}).then(()=>({batchId:A.batchId,changes:fu(E)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(s.batchId),function(a,u,h){let f=a.Wa[a.currentUser.toKey()];f||(f=new lt(Q)),f=f.insert(u,h),a.Wa[a.currentUser.toKey()]=f}(r,s.batchId,e),await zn(r,s.changes),await es(r.remoteStore)}catch(s){const o=Oi(s,"Failed to persist write");e.reject(o)}}async function Gu(n,t){const e=K(n);try{const r=await jm(e.localStore,t);t.targetChanges.forEach((s,o)=>{const a=e.Ua.get(o);a&&(et(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?a.Ba=!0:s.modifiedDocuments.size>0?et(a.Ba):s.removedDocuments.size>0&&(et(a.Ba),a.Ba=!1))}),await zn(e,r,t)}catch(r){await rn(r)}}function ol(n,t,e){const r=K(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const s=[];r.ka.forEach((o,a)=>{const u=a.view.sa(t);u.snapshot&&s.push(u.snapshot)}),function(a,u){const h=K(a);h.onlineState=u;let f=!1;h.queries.forEach((p,E)=>{for(const A of E.ta)A.sa(u)&&(f=!0)}),f&&Mi(h)}(r.eventManager,t),s.length&&r.La.p_(s),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function kp(n,t,e){const r=K(n);r.sharedClientState.updateQueryState(t,"rejected",e);const s=r.Ua.get(t),o=s&&s.key;if(o){let a=new lt(q.comparator);a=a.insert(o,Ct.newNoDocument(o,H.min()));const u=X().add(o),h=new Jr(H.min(),new Map,new lt(Q),a,u);await Gu(r,h),r.$a=r.$a.remove(o),r.Ua.delete(t),Fi(r)}else await ai(r.localStore,t,!1).then(()=>ci(r,t,e)).catch(rn)}async function Np(n,t){const e=K(n),r=t.batch.batchId;try{const s=await Bm(e.localStore,t);Qu(e,r,null),Wu(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await zn(e,s)}catch(s){await rn(s)}}async function Op(n,t,e){const r=K(n);try{const s=await function(a,u){const h=K(a);return h.persistence.runTransaction("Reject batch","readwrite-primary",f=>{let p;return h.mutationQueue.lookupMutationBatch(f,u).next(E=>(et(E!==null),p=E.keys(),h.mutationQueue.removeMutationBatch(f,E))).next(()=>h.mutationQueue.performConsistencyCheck(f)).next(()=>h.documentOverlayCache.removeOverlaysForBatchId(f,p,u)).next(()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(f,p)).next(()=>h.localDocuments.getDocuments(f,p))})}(r.localStore,t);Qu(r,t,e),Wu(r,t),r.sharedClientState.updateMutationState(t,"rejected",e),await zn(r,s)}catch(s){await rn(s)}}function Wu(n,t){(n.Ga.get(t)||[]).forEach(e=>{e.resolve()}),n.Ga.delete(t)}function Qu(n,t,e){const r=K(n);let s=r.Wa[r.currentUser.toKey()];if(s){const o=s.get(t);o&&(e?o.reject(e):o.resolve(),s=s.remove(t)),r.Wa[r.currentUser.toKey()]=s}}function ci(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const r of n.qa.get(t))n.ka.delete(r),e&&n.La.Ja(r,e);n.qa.delete(t),n.isPrimaryClient&&n.Ka.br(t).forEach(r=>{n.Ka.containsKey(r)||Xu(n,r)})}function Xu(n,t){n.Qa.delete(t.path.canonicalString());const e=n.$a.get(t);e!==null&&(Ci(n.remoteStore,e),n.$a=n.$a.remove(t),n.Ua.delete(e),Fi(n))}function al(n,t,e){for(const r of e)r instanceof $u?(n.Ka.addReference(r.key,t),Mp(n,r)):r instanceof Hu?(F(Li,"Document no longer in limbo: "+r.key),n.Ka.removeReference(r.key,t),n.Ka.containsKey(r.key)||Xu(n,r.key)):$()}function Mp(n,t){const e=t.key,r=e.path.canonicalString();n.$a.get(e)||n.Qa.has(r)||(F(Li,"New document in limbo: "+e),n.Qa.add(r),Fi(n))}function Fi(n){for(;n.Qa.size>0&&n.$a.size<n.maxConcurrentLimboResolutions;){const t=n.Qa.values().next().value;n.Qa.delete(t);const e=new q(at.fromString(t)),r=n.za.next();n.Ua.set(r,new Ap(e)),n.$a=n.$a.insert(e,r),xu(n.remoteStore,new oe(zt(au(e.path)),r,"TargetPurposeLimboResolution",Hr.ae))}}async function zn(n,t,e){const r=K(n),s=[],o=[],a=[];r.ka.isEmpty()||(r.ka.forEach((u,h)=>{a.push(r.Ha(h,t,e).then(f=>{var p;if((f||e)&&r.isPrimaryClient){const E=f?!f.fromCache:(p=e==null?void 0:e.targetChanges.get(h.targetId))===null||p===void 0?void 0:p.current;r.sharedClientState.updateQueryState(h.targetId,E?"current":"not-current")}if(f){s.push(f);const E=Pi.Yi(h.targetId,f);o.push(E)}}))}),await Promise.all(a),r.La.p_(s),await async function(h,f){const p=K(h);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",E=>P.forEach(f,A=>P.forEach(A.Hi,R=>p.persistence.referenceDelegate.addReference(E,A.targetId,R)).next(()=>P.forEach(A.Ji,R=>p.persistence.referenceDelegate.removeReference(E,A.targetId,R)))))}catch(E){if(!sn(E))throw E;F(Si,"Failed to update sequence numbers: "+E)}for(const E of f){const A=E.targetId;if(!E.fromCache){const R=p.Ts.get(A),S=R.snapshotVersion,O=R.withLastLimboFreeSnapshotVersion(S);p.Ts=p.Ts.insert(A,O)}}}(r.localStore,o))}async function Lp(n,t){const e=K(n);if(!e.currentUser.isEqual(t)){F(Li,"User change. New user:",t.toKey());const r=await Ou(e.localStore,t);e.currentUser=t,function(o,a){o.Ga.forEach(u=>{u.forEach(h=>{h.reject(new U(C.CANCELLED,a))})}),o.Ga.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await zn(e,r.Rs)}}function Fp(n,t){const e=K(n),r=e.Ua.get(t);if(r&&r.Ba)return X().add(r.key);{let s=X();const o=e.qa.get(t);if(!o)return s;for(const a of o){const u=e.ka.get(a);s=s.unionWith(u.view.Sa)}return s}}function Yu(n){const t=K(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=Gu.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Fp.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=kp.bind(null,t),t.La.p_=Ep.bind(null,t.eventManager),t.La.Ja=vp.bind(null,t.eventManager),t}function xp(n){const t=K(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Np.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Op.bind(null,t),t}class Ur{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=Zr(t.databaseInfo.databaseId),this.sharedClientState=this.Za(t),this.persistence=this.Xa(t),await this.persistence.start(),this.localStore=this.eu(t),this.gcScheduler=this.tu(t,this.localStore),this.indexBackfillerScheduler=this.nu(t,this.localStore)}tu(t,e){return null}nu(t,e){return null}eu(t){return Um(this.persistence,new Lm,t.initialUser,this.serializer)}Xa(t){return new Nu(Ri.ri,this.serializer)}Za(t){return new Km}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ur.provider={build:()=>new Ur};class Up extends Ur{constructor(t){super(),this.cacheSizeBytes=t}tu(t,e){et(this.persistence.referenceDelegate instanceof Fr);const r=this.persistence.referenceDelegate.garbageCollector;return new Tm(r,t.asyncQueue,e)}Xa(t){const e=this.cacheSizeBytes!==void 0?Nt.withCacheSize(this.cacheSizeBytes):Nt.DEFAULT;return new Nu(r=>Fr.ri(r,e),this.serializer)}}class hi{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>ol(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Lp.bind(null,this.syncEngine),await mp(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new gp}()}createDatastore(t){const e=Zr(t.databaseInfo.databaseId),r=function(o){return new Ym(o)}(t.databaseInfo);return function(o,a,u,h){return new ep(o,a,u,h)}(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return function(r,s,o,a,u){return new rp(r,s,o,a,u)}(this.localStore,this.datastore,t.asyncQueue,e=>ol(this.syncEngine,e,0),function(){return tl.D()?new tl:new Gm}())}createSyncEngine(t,e){return function(s,o,a,u,h,f,p){const E=new bp(s,o,a,u,h,f);return p&&(E.ja=!0),E}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(s){const o=K(s);F(Pe,"RemoteStore shutting down."),o.W_.add(5),await qn(o),o.z_.shutdown(),o.j_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}hi.provider={build:()=>new hi};/**
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
 */class Bp{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.iu(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.iu(this.observer.error,t):Zt("Uncaught Error in snapshot listener:",t.toString()))}su(){this.muted=!0}iu(t,e){setTimeout(()=>{this.muted||t(e)},0)}}/**
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
 */const ye="FirestoreClient";class jp{constructor(t,e,r,s,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=s,this.user=St.UNAUTHENTICATED,this.clientId=$l.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,async a=>{F(ye,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(F(ye,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new ce;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=Oi(e,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function xs(n,t){n.asyncQueue.verifyOperationInProgress(),F(ye,"Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Ou(t.localStore,s),r=s)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function ll(n,t){n.asyncQueue.verifyOperationInProgress();const e=await qp(n);F(ye,"Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(r=>nl(t.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>nl(t.remoteStore,s)),n._onlineComponents=t}async function qp(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){F(ye,"Using user provided OfflineComponentProvider");try{await xs(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(s){return s.name==="FirebaseError"?s.code===C.FAILED_PRECONDITION||s.code===C.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(e))throw e;We("Error using user provided cache. Falling back to memory cache: "+e),await xs(n,new Ur)}}else F(ye,"Using default OfflineComponentProvider"),await xs(n,new Up(void 0));return n._offlineComponents}async function Ju(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(F(ye,"Using user provided OnlineComponentProvider"),await ll(n,n._uninitializedComponentsProvider._online)):(F(ye,"Using default OnlineComponentProvider"),await ll(n,new hi))),n._onlineComponents}function zp(n){return Ju(n).then(t=>t.syncEngine)}async function $p(n){const t=await Ju(n),e=t.eventManager;return e.onListen=Rp.bind(null,t.syncEngine),e.onUnlisten=Cp.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=Pp.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=Vp.bind(null,t.syncEngine),e}function Hp(n,t,e={}){const r=new ce;return n.asyncQueue.enqueueAndForget(async()=>function(o,a,u,h,f){const p=new Bp({next:A=>{p.su(),a.enqueueAndForget(()=>yp(o,E)),A.fromCache&&h.source==="server"?f.reject(new U(C.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):f.resolve(A)},error:A=>f.reject(A)}),E=new Tp(u,p,{includeMetadataChanges:!0,Ta:!0});return _p(o,E)}(await $p(n),n.asyncQueue,t,e,r)),r.promise}/**
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
 */function Zu(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
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
 */const ul=new Map;/**
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
 */function tc(n,t,e){if(!e)throw new U(C.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function Kp(n,t,e,r){if(t===!0&&r===!0)throw new U(C.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function cl(n){if(!q.isDocumentKey(n))throw new U(C.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function hl(n){if(q.isDocumentKey(n))throw new U(C.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function ns(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":$()}function Br(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new U(C.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=ns(n);throw new U(C.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
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
 */const ec="firestore.googleapis.com",fl=!0;class dl{constructor(t){var e,r;if(t.host===void 0){if(t.ssl!==void 0)throw new U(C.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=ec,this.ssl=fl}else this.host=t.host,this.ssl=(e=t.ssl)!==null&&e!==void 0?e:fl;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=ku;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<Em)throw new U(C.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Kp("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Zu((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new U(C.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new U(C.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new U(C.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class rs{constructor(t,e,r,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new dl({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new U(C.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new U(C.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new dl(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Xf;switch(r.type){case"firstParty":return new td(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new U(C.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const r=ul.get(e);r&&(F("ComponentProvider","Removing Datastore"),ul.delete(e),r.terminate())}(this),Promise.resolve()}}function Gp(n,t,e,r={}){var s;const o=(n=Br(n,rs))._getSettings(),a=Object.assign(Object.assign({},o),{emulatorOptions:n._getEmulatorOptions()}),u=`${t}:${e}`;o.host!==ec&&o.host!==u&&We("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const h=Object.assign(Object.assign({},o),{host:u,ssl:!1,emulatorOptions:r});if(!Rr(h,a)&&(n._setSettings(h),r.mockUserToken)){let f,p;if(typeof r.mockUserToken=="string")f=r.mockUserToken,p=St.MOCK_USER;else{f=Sh(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const E=r.mockUserToken.sub||r.mockUserToken.user_id;if(!E)throw new U(C.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new St(E)}n._authCredentials=new Yf(new ql(f,p))}}/**
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
 */class an{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new an(this.firestore,t,this._query)}}class Ft{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new he(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Ft(this.firestore,t,this._key)}}class he extends an{constructor(t,e,r){super(t,e,au(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Ft(this.firestore,null,new q(t))}withConverter(t){return new he(this.firestore,t,this._path)}}function nc(n,t,...e){if(n=Ge(n),tc("collection","path",t),n instanceof rs){const r=at.fromString(t,...e);return hl(r),new he(n,null,r)}{if(!(n instanceof Ft||n instanceof he))throw new U(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(at.fromString(t,...e));return hl(r),new he(n.firestore,null,r)}}function Wp(n,t,...e){if(n=Ge(n),arguments.length===1&&(t=$l.newId()),tc("doc","path",t),n instanceof rs){const r=at.fromString(t,...e);return cl(r),new Ft(n,null,new q(r))}{if(!(n instanceof Ft||n instanceof he))throw new U(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(at.fromString(t,...e));return cl(r),new Ft(n.firestore,n instanceof he?n.converter:null,new q(r))}}/**
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
 */const ml="AsyncQueue";class pl{constructor(t=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new Lu(this,"async_queue_retry"),this.Su=()=>{const r=Fs();r&&F(ml,"Visibility state changed to "+r.visibilityState),this.a_.t_()},this.bu=t;const e=Fs();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Su)}get isShuttingDown(){return this.mu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Du(),this.vu(t)}enterRestrictedMode(t){if(!this.mu){this.mu=!0,this.yu=t||!1;const e=Fs();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.Su)}}enqueue(t){if(this.Du(),this.mu)return new Promise(()=>{});const e=new ce;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Vu.push(t),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(t){if(!sn(t))throw t;F(ml,"Operation failed with retryable error: "+t)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(t){const e=this.bu.then(()=>(this.pu=!0,t().catch(r=>{this.gu=r,this.pu=!1;const s=function(a){let u=a.message||"";return a.stack&&(u=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),u}(r);throw Zt("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.pu=!1,r))));return this.bu=e,e}enqueueAfterDelay(t,e,r){this.Du(),this.wu.indexOf(t)>-1&&(e=0);const s=Ni.createAndSchedule(this,t,e,r,o=>this.Fu(o));return this.fu.push(s),s}Du(){this.gu&&$()}verifyOperationInProgress(){}async Mu(){let t;do t=this.bu,await t;while(t!==this.bu)}xu(t){for(const e of this.fu)if(e.timerId===t)return!0;return!1}Ou(t){return this.Mu().then(()=>{this.fu.sort((e,r)=>e.targetTimeMs-r.targetTimeMs);for(const e of this.fu)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.Mu()})}Nu(t){this.wu.push(t)}Fu(t){const e=this.fu.indexOf(t);this.fu.splice(e,1)}}class xi extends rs{constructor(t,e,r,s){super(t,e,r,s),this.type="firestore",this._queue=new pl,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new pl(t),this._firestoreClient=void 0,await t}}}function Qp(n,t){const e=typeof n=="object"?n:Uf(),r=typeof n=="string"?n:Vr,s=Of(e,"firestore").getImmediate({identifier:r});if(!s._initialized){const o=Rh("firestore");o&&Gp(s,...o)}return s}function rc(n){if(n._terminated)throw new U(C.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Xp(n),n._firestoreClient}function Xp(n){var t,e,r;const s=n._freezeSettings(),o=function(u,h,f,p){return new pd(u,h,f,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,Zu(p.experimentalLongPollingOptions),p.useFetchStreams)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((e=s.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new jp(n._authCredentials,n._appCheckCredentials,n._queue,o,n._componentsProvider&&function(u){const h=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(h),_online:h}}(n._componentsProvider))}/**
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
 */class tn{constructor(t){this._byteString=t}static fromBase64String(t){try{return new tn(It.fromBase64String(t))}catch(e){throw new U(C.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new tn(It.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class Ui{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new U(C.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Tt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class sc{constructor(t){this._methodName=t}}/**
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
 */class Bi{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new U(C.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new U(C.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return Q(this._lat,t._lat)||Q(this._long,t._long)}}/**
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
 */class ji{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(r,s){if(r.length!==s.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==s[o])return!1;return!0}(this._values,t._values)}}/**
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
 */const Yp=/^__.*__$/;class Jp{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return this.fieldMask!==null?new Ve(t,this.data,this.fieldMask,e,this.fieldTransforms):new Bn(t,this.data,e,this.fieldTransforms)}}function ic(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw $()}}class qi{constructor(t,e,r,s,o,a){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=s,o===void 0&&this.Bu(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(t){return new qi(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.ku({path:r,Qu:!1});return s.$u(t),s}Uu(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.ku({path:r,Qu:!1});return s.Bu(),s}Ku(t){return this.ku({path:void 0,Qu:!0})}Wu(t){return jr(t,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}Bu(){if(this.path)for(let t=0;t<this.path.length;t++)this.$u(this.path.get(t))}$u(t){if(t.length===0)throw this.Wu("Document fields must not be empty");if(ic(this.Lu)&&Yp.test(t))throw this.Wu('Document fields cannot begin and end with "__"')}}class Zp{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||Zr(t)}ju(t,e,r,s=!1){return new qi({Lu:t,methodName:e,zu:r,path:Tt.emptyPath(),Qu:!1,Gu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function oc(n){const t=n._freezeSettings(),e=Zr(n._databaseId);return new Zp(n._databaseId,!!t.ignoreUndefinedProperties,e)}function tg(n,t,e,r,s,o={}){const a=n.ju(o.merge||o.mergeFields?2:0,t,e,s);uc("Data must be an object, but it was:",a,r);const u=ac(r,a);let h,f;if(o.merge)h=new Bt(a.fieldMask),f=a.fieldTransforms;else if(o.mergeFields){const p=[];for(const E of o.mergeFields){const A=ng(t,E,e);if(!a.contains(A))throw new U(C.INVALID_ARGUMENT,`Field '${A}' is specified in your field mask but missing from your input data.`);sg(p,A)||p.push(A)}h=new Bt(p),f=a.fieldTransforms.filter(E=>h.covers(E.field))}else h=null,f=a.fieldTransforms;return new Jp(new Lt(u),h,f)}function eg(n,t,e,r=!1){return zi(e,n.ju(r?4:3,t))}function zi(n,t){if(lc(n=Ge(n)))return uc("Unsupported field value:",t,n),ac(n,t);if(n instanceof sc)return function(r,s){if(!ic(s.Lu))throw s.Wu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Wu(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(s);o&&s.fieldTransforms.push(o)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.Qu&&t.Lu!==4)throw t.Wu("Nested arrays are not supported");return function(r,s){const o=[];let a=0;for(const u of r){let h=zi(u,s.Ku(a));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),a++}return{arrayValue:{values:o}}}(n,t)}return function(r,s){if((r=Ge(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return xd(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=mt.fromDate(r);return{timestampValue:Lr(s.serializer,o)}}if(r instanceof mt){const o=new mt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Lr(s.serializer,o)}}if(r instanceof Bi)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof tn)return{bytesValue:bu(s.serializer,r._byteString)};if(r instanceof Ft){const o=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(o))throw s.Wu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:Ai(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof ji)return function(a,u){return{mapValue:{fields:{[Jl]:{stringValue:Zl},[Dr]:{arrayValue:{values:a.toArray().map(f=>{if(typeof f!="number")throw u.Wu("VectorValues must only contain numeric values.");return Ti(u.serializer,f)})}}}}}}(r,s);throw s.Wu(`Unsupported field value: ${ns(r)}`)}(n,t)}function ac(n,t){const e={};return Kl(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Se(n,(r,s)=>{const o=zi(s,t.qu(r));o!=null&&(e[r]=o)}),{mapValue:{fields:e}}}function lc(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof mt||n instanceof Bi||n instanceof tn||n instanceof Ft||n instanceof sc||n instanceof ji)}function uc(n,t,e){if(!lc(e)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(e)){const r=ns(e);throw r==="an object"?t.Wu(n+" a custom object"):t.Wu(n+" "+r)}}function ng(n,t,e){if((t=Ge(t))instanceof Ui)return t._internalPath;if(typeof t=="string")return cc(n,t);throw jr("Field path arguments must be of type string or ",n,!1,void 0,e)}const rg=new RegExp("[~\\*/\\[\\]]");function cc(n,t,e){if(t.search(rg)>=0)throw jr(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new Ui(...t.split("."))._internalPath}catch{throw jr(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function jr(n,t,e,r,s){const o=r&&!r.isEmpty(),a=s!==void 0;let u=`Function ${t}() called with invalid data`;e&&(u+=" (via `toFirestore()`)"),u+=". ";let h="";return(o||a)&&(h+=" (found",o&&(h+=` in field ${r}`),a&&(h+=` in document ${s}`),h+=")"),new U(C.INVALID_ARGUMENT,u+n+h)}function sg(n,t){return n.some(e=>e.isEqual(t))}/**
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
 */class hc{constructor(t,e,r,s,o){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=s,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new Ft(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new ig(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field($i("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class ig extends hc{data(){return super.data()}}function $i(n,t){return typeof t=="string"?cc(n,t):t instanceof Ui?t._internalPath:t._delegate._internalPath}/**
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
 */function og(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new U(C.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Hi{}class ag extends Hi{}function lg(n,t,...e){let r=[];t instanceof Hi&&r.push(t),r=r.concat(e),function(o){const a=o.filter(h=>h instanceof Ki).length,u=o.filter(h=>h instanceof ss).length;if(a>1||a>0&&u>0)throw new U(C.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)n=s._apply(n);return n}class ss extends ag{constructor(t,e,r){super(),this._field=t,this._op=e,this._value=r,this.type="where"}static _create(t,e,r){return new ss(t,e,r)}_apply(t){const e=this._parse(t);return fc(t._query,e),new an(t.firestore,t.converter,ei(t._query,e))}_parse(t){const e=oc(t.firestore);return function(o,a,u,h,f,p,E){let A;if(f.isKeyField()){if(p==="array-contains"||p==="array-contains-any")throw new U(C.INVALID_ARGUMENT,`Invalid Query. You can't perform '${p}' queries on documentId().`);if(p==="in"||p==="not-in"){_l(E,p);const S=[];for(const O of E)S.push(gl(h,o,O));A={arrayValue:{values:S}}}else A=gl(h,o,E)}else p!=="in"&&p!=="not-in"&&p!=="array-contains-any"||_l(E,p),A=eg(u,a,E,p==="in"||p==="not-in");return dt.create(f,p,A)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}function ug(n,t,e){const r=t,s=$i("where",n);return ss._create(s,r,e)}class Ki extends Hi{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new Ki(t,e)}_parse(t){const e=this._queryConstraints.map(r=>r._parse(t)).filter(r=>r.getFilters().length>0);return e.length===1?e[0]:jt.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:(function(s,o){let a=s;const u=o.getFlattenedFilters();for(const h of u)fc(a,h),a=ei(a,h)}(t._query,e),new an(t.firestore,t.converter,ei(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function gl(n,t,e){if(typeof(e=Ge(e))=="string"){if(e==="")throw new U(C.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!lu(t)&&e.indexOf("/")!==-1)throw new U(C.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const r=t.path.child(at.fromString(e));if(!q.isDocumentKey(r))throw new U(C.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return ka(n,new q(r))}if(e instanceof Ft)return ka(n,e._key);throw new U(C.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ns(e)}.`)}function _l(n,t){if(!Array.isArray(n)||n.length===0)throw new U(C.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function fc(n,t){const e=function(s,o){for(const a of s)for(const u of a.getFlattenedFilters())if(o.indexOf(u.op)>=0)return u.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(e!==null)throw e===t.op?new U(C.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new U(C.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}class cg{convertValue(t,e="none"){switch(ge(t)){case 0:return null;case 1:return t.booleanValue;case 2:return ht(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(pe(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw $()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return Se(t,(s,o)=>{r[s]=this.convertValue(o,e)}),r}convertVectorValue(t){var e,r,s;const o=(s=(r=(e=t.fields)===null||e===void 0?void 0:e[Dr].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(a=>ht(a.doubleValue));return new ji(o)}convertGeoPoint(t){return new Bi(ht(t.latitude),ht(t.longitude))}convertArray(t,e){return(t.values||[]).map(r=>this.convertValue(r,e))}convertServerTimestamp(t,e){switch(e){case"previous":const r=Gr(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(On(t));default:return null}}convertTimestamp(t){const e=me(t);return new mt(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=at.fromString(t);et(Du(r));const s=new Mn(r.get(1),r.get(3)),o=new q(r.popFirst(5));return s.isEqual(e)||Zt(`Document ${o} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}/**
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
 */function hg(n,t,e){let r;return r=n?n.toFirestore(t):t,r}/**
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
 */class mr{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class fg extends hc{constructor(t,e,r,s,o,a){super(t,e,r,s,a),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Tr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field($i("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}}class Tr extends fg{data(t={}){return super.data(t)}}class dg{constructor(t,e,r,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new mr(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(r=>{t.call(e,new Tr(this._firestore,this._userDataWriter,r.key,r,new mr(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new U(C.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(s,o){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(u=>{const h=new Tr(s._firestore,s._userDataWriter,u.doc.key,u.doc,new mr(s._snapshot.mutatedKeys.has(u.doc.key),s._snapshot.fromCache),s.query.converter);return u.doc,{type:"added",doc:h,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(u=>o||u.type!==3).map(u=>{const h=new Tr(s._firestore,s._userDataWriter,u.doc.key,u.doc,new mr(s._snapshot.mutatedKeys.has(u.doc.key),s._snapshot.fromCache),s.query.converter);let f=-1,p=-1;return u.type!==0&&(f=a.indexOf(u.doc.key),a=a.delete(u.doc.key)),u.type!==1&&(a=a.add(u.doc),p=a.indexOf(u.doc.key)),{type:mg(u.type),doc:h,oldIndex:f,newIndex:p}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function mg(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return $()}}class pg extends cg{constructor(t){super(),this.firestore=t}convertBytes(t){return new tn(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Ft(this.firestore,null,e)}}function gg(n){n=Br(n,an);const t=Br(n.firestore,xi),e=rc(t),r=new pg(t);return og(n._query),Hp(e,n._query).then(s=>new dg(t,r,n,s))}function _g(n,t){const e=Br(n.firestore,xi),r=Wp(n),s=hg(n.converter,t);return yg(e,[tg(oc(n.firestore),"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,Yt.exists(!1))]).then(()=>r)}function yg(n,t){return function(r,s){const o=new ce;return r.asyncQueue.enqueueAndForget(async()=>Dp(await zp(r),s,o)),o.promise}(rc(n),t)}(function(t,e=!0){(function(s){nn=s})(xf),Sr(new Dn("firestore",(r,{instanceIdentifier:s,options:o})=>{const a=r.getProvider("app").getImmediate(),u=new xi(new Jf(r.getProvider("auth-internal")),new ed(a,r.getProvider("app-check-internal")),function(f,p){if(!Object.prototype.hasOwnProperty.apply(f.options,["projectId"]))throw new U(C.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Mn(f.options.projectId,p)}(a,s),a);return o=Object.assign({useFetchStreams:e},o),u._setSettings(o),u},"PUBLIC").setMultipleInstances(!0)),He(va,Ta,t),He(va,Ta,"esm2017")})();var Eg="firebase",vg="11.5.0";/**
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
 */He(Eg,vg,"app");const Tg={apiKey:"AIzaSyDNZCXCOGwTjyYXCzDLKGEr7dzj7XKvFNk",authDomain:"drents-elftal.firebaseapp.com",projectId:"drents-elftal",storageBucket:"drents-elftal.firebasestorage.app",messagingSenderId:"542166909378",appId:"1:542166909378:web:1c3cd5336f6168067c965b",measurementId:"G-1F8PEJ34WQ"},Ig=Nl(Tg),dc=Qp(Ig);async function wg(n){const t=nc(dc,"teams"),e=lg(t,ug("email","==",n));return!(await gg(e)).empty}async function Ag(n,t,e){try{if(await wg(t))throw new Error("Je hebt al gestemd met dit e-mailadres.");const s={players:n,email:t,allowNewsletter:e,submittedAt:new Date};return(await _g(nc(dc,"teams"),s)).id}catch(r){throw console.error("Error submitting team:",r),r}}function yl(n){let t;return{c(){t=B("div"),t.textContent="Bedankt voor je stem! Je elftal is succesvol opgeslagen.",D(t,"class","success-message svelte-1m9rzzk")},m(e,r){rt(e,t,r)},d(e){e&&nt(t)}}}function bg(n){let t;return{c(){t=ct("Verstuur je stem")},m(e,r){rt(e,t,r)},d(e){e&&nt(t)}}}function Rg(n){let t;return{c(){t=ct("Versturen...")},m(e,r){rt(e,t,r)},d(e){e&&nt(t)}}}function Pg(n){let t,e,r,s,o,a,u,h,f,p,E,A,R,S,O,V,k=n[4]&&yl();function j(M,T){return M[2]?Rg:bg}let x=j(n),W=x(n),G={};return E=new ch({props:G}),n[9](E),E.$on("playersUpdate",n[6]),R=new ph({props:{isOpen:n[0],isSubmitting:n[2],submitError:n[3]}}),R.$on("close",n[10]),R.$on("submit",n[7]),{c(){t=B("main"),e=B("div"),e.innerHTML='<h1 class="svelte-1m9rzzk">Drents Elftal</h1> <p class="subtitle svelte-1m9rzzk">Create your best eleven</p>',r=Z(),k&&k.c(),s=Z(),o=B("div"),a=B("button"),W.c(),h=Z(),f=B("div"),p=B("div"),zs(E.$$.fragment),A=Z(),zs(R.$$.fragment),D(e,"class","header svelte-1m9rzzk"),D(a,"class","submit-button svelte-1m9rzzk"),a.disabled=u=!n[1]||n[2],D(o,"class","controls svelte-1m9rzzk"),D(p,"class","pitch-section svelte-1m9rzzk"),D(f,"class","container svelte-1m9rzzk"),D(t,"class","svelte-1m9rzzk")},m(M,T){rt(M,t,T),N(t,e),N(t,r),k&&k.m(t,null),N(t,s),N(t,o),N(o,a),W.m(a,null),N(t,h),N(t,f),N(f,p),wr(E,p,null),N(t,A),wr(R,t,null),S=!0,O||(V=_t(a,"click",n[8]),O=!0)},p(M,[T]){M[4]?k||(k=yl(),k.c(),k.m(t,s)):k&&(k.d(1),k=null),x!==(x=j(M))&&(W.d(1),W=x(M),W&&(W.c(),W.m(a,null))),(!S||T&6&&u!==(u=!M[1]||M[2]))&&(a.disabled=u);const _={};E.$set(_);const m={};T&1&&(m.isOpen=M[0]),T&4&&(m.isSubmitting=M[2]),T&8&&(m.submitError=M[3]),R.$set(m)},i(M){S||(Ir(E.$$.fragment,M),Ir(R.$$.fragment,M),S=!0)},o(M){qs(E.$$.fragment,M),qs(R.$$.fragment,M),S=!1},d(M){M&&nt(t),k&&k.d(),W.d(),n[9](null),Ar(E),Ar(R),O=!1,V()}}}function Sg(n,t,e){let r=!1,s=!1,o={},a=!1,u=null,h=!1,f;function p(V){e(1,s=V.detail.filledPositions===11),o=V.detail.players}function E(){f&&f.resetPlayers(),e(1,s=!1),o={}}async function A(V){e(2,a=!0),e(3,u=null);try{await Ag(o,V.detail.email,V.detail.consent),e(0,r=!1),e(4,h=!0),E(),setTimeout(()=>{e(4,h=!1)},5e3)}catch(k){e(3,u=k instanceof Error?k.message:"Er is iets misgegaan bij het versturen. Probeer het later opnieuw."),console.error("Error submitting team:",k)}finally{e(2,a=!1)}}const R=()=>e(0,r=!0);function S(V){Us[V?"unshift":"push"](()=>{f=V,e(5,f)})}return[r,s,a,u,h,f,p,A,R,S,()=>e(0,r=!1)]}class Cg extends $r{constructor(t){super(),zr(this,t,Sg,Pg,qr,{})}}new Cg({target:document.getElementById("app")});
