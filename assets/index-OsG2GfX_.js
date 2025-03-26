var Qc=Object.defineProperty;var Xc=(n,t,e)=>t in n?Qc(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var Ds=(n,t,e)=>Xc(n,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();function Ht(){}function Il(n){return n()}function Xo(){return Object.create(null)}function qt(n){n.forEach(Il)}function Al(n){return typeof n=="function"}function qn(n,t){return n!=n?t==t:n!==t||n&&typeof n=="object"||typeof n=="function"}function Yc(n){return Object.keys(n).length===0}function N(n,t){n.appendChild(t)}function nt(n,t,e){n.insertBefore(t,e||null)}function et(n){n.parentNode&&n.parentNode.removeChild(n)}function ks(n,t){for(let e=0;e<n.length;e+=1)n[e]&&n[e].d(t)}function B(n){return document.createElement(n)}function ht(n){return document.createTextNode(n)}function W(){return ht(" ")}function di(){return ht("")}function lt(n,t,e,r){return n.addEventListener(t,e,r),()=>n.removeEventListener(t,e,r)}function bl(n){return function(t){return t.preventDefault(),n.call(this,t)}}function D(n,t,e){e==null?n.removeAttribute(t):n.getAttribute(t)!==e&&n.setAttribute(t,e)}function Jc(n){return Array.from(n.childNodes)}function Ot(n,t){t=""+t,n.data!==t&&(n.data=t)}function oe(n,t){n.value=t??""}function qs(n,t,e,r){e==null?n.style.removeProperty(t):n.style.setProperty(t,e,"")}function Zc(n,t,{bubbles:e=!1,cancelable:r=!1}={}){return new CustomEvent(n,{detail:t,bubbles:e,cancelable:r})}let Nn;function bn(n){Nn=n}function Rl(){if(!Nn)throw new Error("Function called outside component initialization");return Nn}function mi(n){Rl().$$.on_mount.push(n)}function pi(){const n=Rl();return(t,e,{cancelable:r=!1}={})=>{const s=n.$$.callbacks[t];if(s){const o=Zc(t,e,{cancelable:r});return s.slice().forEach(a=>{a.call(n,o)}),!o.defaultPrevented}return!0}}const Ue=[],Vr=[];let $e=[];const Yo=[],th=Promise.resolve();let zs=!1;function eh(){zs||(zs=!0,th.then(Cl))}function $s(n){$e.push(n)}const Ns=new Set;let Fe=0;function Cl(){if(Fe!==0)return;const n=Nn;do{try{for(;Fe<Ue.length;){const t=Ue[Fe];Fe++,bn(t),nh(t.$$)}}catch(t){throw Ue.length=0,Fe=0,t}for(bn(null),Ue.length=0,Fe=0;Vr.length;)Vr.pop()();for(let t=0;t<$e.length;t+=1){const e=$e[t];Ns.has(e)||(Ns.add(e),e())}$e.length=0}while(Ue.length);for(;Yo.length;)Yo.pop()();zs=!1,Ns.clear(),bn(n)}function nh(n){if(n.fragment!==null){n.update(),qt(n.before_update);const t=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,t),n.after_update.forEach($s)}}function rh(n){const t=[],e=[];$e.forEach(r=>n.indexOf(r)===-1?t.push(r):e.push(r)),e.forEach(r=>r()),$e=t}const Tr=new Set;let sh;function Rn(n,t){n&&n.i&&(Tr.delete(n),n.i(t))}function wr(n,t,e,r){if(n&&n.o){if(Tr.has(n))return;Tr.add(n),sh.c.push(()=>{Tr.delete(n)}),n.o(t)}}function xe(n){return(n==null?void 0:n.length)!==void 0?n:Array.from(n)}function Ir(n){n&&n.c()}function Cn(n,t,e){const{fragment:r,after_update:s}=n.$$;r&&r.m(t,e),$s(()=>{const o=n.$$.on_mount.map(Il).filter(Al);n.$$.on_destroy?n.$$.on_destroy.push(...o):qt(o),n.$$.on_mount=[]}),s.forEach($s)}function Pn(n,t){const e=n.$$;e.fragment!==null&&(rh(e.after_update),qt(e.on_destroy),e.fragment&&e.fragment.d(t),e.on_destroy=e.fragment=null,e.ctx=[])}function ih(n,t){n.$$.dirty[0]===-1&&(Ue.push(n),eh(),n.$$.dirty.fill(0)),n.$$.dirty[t/31|0]|=1<<t%31}function zn(n,t,e,r,s,o,a=null,u=[-1]){const h=Nn;bn(n);const f=n.$$={fragment:null,ctx:[],props:o,update:Ht,not_equal:s,bound:Xo(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(h?h.$$.context:[])),callbacks:Xo(),dirty:u,skip_bound:!1,root:t.target||h.$$.root};a&&a(f.root);let m=!1;if(f.ctx=e?e(n,t.props||{},(E,v,...A)=>{const C=A.length?A[0]:v;return f.ctx&&s(f.ctx[E],f.ctx[E]=C)&&(!f.skip_bound&&f.bound[E]&&f.bound[E](C),m&&ih(n,E)),v}):[],f.update(),m=!0,qt(f.before_update),f.fragment=r?r(f.ctx):!1,t.target){if(t.hydrate){const E=Jc(t.target);f.fragment&&f.fragment.l(E),E.forEach(et)}else f.fragment&&f.fragment.c();t.intro&&Rn(n.$$.fragment),Cn(n,t.target,t.anchor),Cl()}bn(h)}class $n{constructor(){Ds(this,"$$");Ds(this,"$$set")}$destroy(){Pn(this,1),this.$destroy=Ht}$on(t,e){if(!Al(e))return Ht;const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(e),()=>{const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}$set(t){this.$$set&&!Yc(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const oh="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(oh);function Jo(n){let t,e,r,s,o=n[6]?"Edit":"Add",a,u,h,f,m,E,v,A,C,M,S,k,F,O,Y,G,x,w,g,p,y,T,I,_,it,z,Vt=n[6]?"Save":"Add",Wt,Qt,ke;return{c(){t=B("div"),e=B("div"),r=B("div"),s=B("h3"),a=ht(o),u=ht(" Player - "),h=ht(n[3]),f=ht(" #"),m=ht(n[4]),E=W(),v=B("form"),A=B("div"),C=B("label"),C.textContent="First Name:",M=W(),S=B("input"),k=W(),F=B("div"),O=B("label"),O.textContent="Surname:",Y=W(),G=B("input"),x=W(),w=B("div"),g=B("label"),g.textContent="Club:",p=W(),y=B("input"),T=W(),I=B("div"),_=B("button"),_.textContent="Cancel",it=W(),z=B("button"),Wt=ht(Vt),D(s,"id","modal-title"),D(s,"class","svelte-jja17o"),D(r,"class","modal-header svelte-jja17o"),D(C,"for","firstName"),D(C,"class","svelte-jja17o"),D(S,"type","text"),D(S,"id","firstName"),S.required=!0,D(S,"placeholder","Enter first name"),D(S,"class","svelte-jja17o"),D(A,"class","form-group svelte-jja17o"),D(O,"for","surname"),D(O,"class","svelte-jja17o"),D(G,"type","text"),D(G,"id","surname"),G.required=!0,D(G,"placeholder","Enter surname"),D(G,"class","svelte-jja17o"),D(F,"class","form-group svelte-jja17o"),D(g,"for","playerClub"),D(g,"class","svelte-jja17o"),D(y,"type","text"),D(y,"id","playerClub"),y.required=!0,D(y,"placeholder","Enter club name"),D(y,"class","svelte-jja17o"),D(w,"class","form-group svelte-jja17o"),D(_,"type","button"),D(_,"class","cancel-button svelte-jja17o"),D(z,"type","submit"),D(z,"class","save-button svelte-jja17o"),D(I,"class","modal-footer svelte-jja17o"),D(v,"class","modal-content svelte-jja17o"),D(e,"class","modal svelte-jja17o"),D(e,"role","dialog"),D(e,"aria-labelledby","modal-title"),D(e,"aria-modal","true"),D(t,"class","modal-backdrop svelte-jja17o"),D(t,"role","presentation")},m(yt,xt){nt(yt,t,xt),N(t,e),N(e,r),N(r,s),N(s,a),N(s,u),N(s,h),N(s,f),N(s,m),N(e,E),N(e,v),N(v,A),N(A,C),N(A,M),N(A,S),oe(S,n[0]),N(v,k),N(v,F),N(F,O),N(F,Y),N(F,G),oe(G,n[1]),N(v,x),N(v,w),N(w,g),N(w,p),N(w,y),oe(y,n[2]),N(v,T),N(v,I),N(I,_),N(I,it),N(I,z),N(z,Wt),Qt||(ke=[lt(S,"input",n[9]),lt(G,"input",n[10]),lt(y,"input",n[11]),lt(_,"click",n[8]),lt(v,"submit",bl(n[7]))],Qt=!0)},p(yt,xt){xt&64&&o!==(o=yt[6]?"Edit":"Add")&&Ot(a,o),xt&8&&Ot(h,yt[3]),xt&16&&Ot(m,yt[4]),xt&1&&S.value!==yt[0]&&oe(S,yt[0]),xt&2&&G.value!==yt[1]&&oe(G,yt[1]),xt&4&&y.value!==yt[2]&&oe(y,yt[2]),xt&64&&Vt!==(Vt=yt[6]?"Save":"Add")&&Ot(Wt,Vt)},d(yt){yt&&et(t),Qt=!1,qt(ke)}}}function ah(n){let t,e=n[5]&&Jo(n);return{c(){e&&e.c(),t=di()},m(r,s){e&&e.m(r,s),nt(r,t,s)},p(r,[s]){r[5]?e?e.p(r,s):(e=Jo(r),e.c(),e.m(t.parentNode,t)):e&&(e.d(1),e=null)},i:Ht,o:Ht,d(r){r&&et(t),e&&e.d(r)}}}function lh(n,t,e){let{position:r}=t,{number:s}=t,{firstName:o=""}=t,{surname:a=""}=t,{club:u=""}=t,{isOpen:h=!1}=t,{isEdit:f=!1}=t;const m=pi();function E(){m("save",{firstName:o,surname:a,club:u}),m("close")}function v(){m("close")}function A(k){k.key==="Escape"&&h&&v()}mi(()=>(document.addEventListener("keydown",A),()=>{document.removeEventListener("keydown",A)}));function C(){o=this.value,e(0,o),e(5,h),e(6,f)}function M(){a=this.value,e(1,a),e(5,h),e(6,f)}function S(){u=this.value,e(2,u),e(5,h),e(6,f)}return n.$$set=k=>{"position"in k&&e(3,r=k.position),"number"in k&&e(4,s=k.number),"firstName"in k&&e(0,o=k.firstName),"surname"in k&&e(1,a=k.surname),"club"in k&&e(2,u=k.club),"isOpen"in k&&e(5,h=k.isOpen),"isEdit"in k&&e(6,f=k.isEdit)},n.$$.update=()=>{n.$$.dirty&96&&h&&!f&&(e(0,o=""),e(1,a=""),e(2,u=""))},[o,a,u,r,s,h,f,E,v,C,M,S]}class uh extends $n{constructor(t){super(),zn(this,t,lh,ah,qn,{position:3,number:4,firstName:0,surname:1,club:2,isOpen:5,isEdit:6})}}function Zo(n,t,e){const r=n.slice();return r[20]=t[e],r[22]=e,r}function ta(n,t,e){const r=n.slice();return r[20]=t[e],r[22]=e,r}function ea(n,t,e){const r=n.slice();return r[20]=t[e],r[22]=e,r}function na(n){let t,e=de(n[0][1])+"",r,s,o,a=n[0][1].club+"",u;return{c(){t=B("span"),r=ht(e),s=W(),o=B("span"),u=ht(a),D(t,"class","player-name svelte-p0e7uy"),D(o,"class","player-club svelte-p0e7uy")},m(h,f){nt(h,t,f),N(t,r),nt(h,s,f),nt(h,o,f),N(o,u)},p(h,f){f&1&&e!==(e=de(h[0][1])+"")&&Ot(r,e),f&1&&a!==(a=h[0][1].club+"")&&Ot(u,a)},d(h){h&&(et(t),et(s),et(o))}}}function ra(n){let t,e=de(n[0][n[22]===0?3:n[22]===1?4:2])+"",r,s,o,a=n[0][n[22]===0?3:n[22]===1?4:2].club+"",u;return{c(){t=B("span"),r=ht(e),s=W(),o=B("span"),u=ht(a),D(t,"class","player-name svelte-p0e7uy"),D(o,"class","player-club svelte-p0e7uy")},m(h,f){nt(h,t,f),N(t,r),nt(h,s,f),nt(h,o,f),N(o,u)},p(h,f){f&1&&e!==(e=de(h[0][h[22]===0?3:h[22]===1?4:2])+"")&&Ot(r,e),f&1&&a!==(a=h[0][h[22]===0?3:h[22]===1?4:2].club+"")&&Ot(u,a)},d(h){h&&(et(t),et(s),et(o))}}}function sa(n){let t,e,r,s,o,a,u=n[0][n[22]===0?3:n[22]===1?4:2]&&ra(n);function h(){return n[11](n[22])}function f(...m){return n[12](n[22],...m)}return{c(){t=B("button"),e=B("span"),e.textContent=`${n[22]===0?3:n[22]===1?4:2}`,r=W(),u&&u.c(),s=W(),D(e,"class","number svelte-p0e7uy"),D(t,"type","button"),D(t,"class","player-position defender svelte-p0e7uy"),D(t,"style","bottom: "+n[20].bottom+"; "+(n[20].left?"left: "+n[20].left:"right: "+n[20].right)),D(t,"aria-label","Select defender position "+(n[22]+1))},m(m,E){nt(m,t,E),N(t,e),N(t,r),u&&u.m(t,null),N(t,s),o||(a=[lt(t,"click",h),lt(t,"keydown",f)],o=!0)},p(m,E){n=m,n[0][n[22]===0?3:n[22]===1?4:2]?u?u.p(n,E):(u=ra(n),u.c(),u.m(t,s)):u&&(u.d(1),u=null)},d(m){m&&et(t),u&&u.d(),o=!1,qt(a)}}}function ia(n){let t,e=de(n[0][n[22]===0?6:n[22]===1?5:n[22]===2?10:8])+"",r,s,o,a=n[0][n[22]===0?6:n[22]===1?5:n[22]===2?10:8].club+"",u;return{c(){t=B("span"),r=ht(e),s=W(),o=B("span"),u=ht(a),D(t,"class","player-name svelte-p0e7uy"),D(o,"class","player-club svelte-p0e7uy")},m(h,f){nt(h,t,f),N(t,r),nt(h,s,f),nt(h,o,f),N(o,u)},p(h,f){f&1&&e!==(e=de(h[0][h[22]===0?6:h[22]===1?5:h[22]===2?10:8])+"")&&Ot(r,e),f&1&&a!==(a=h[0][h[22]===0?6:h[22]===1?5:h[22]===2?10:8].club+"")&&Ot(u,a)},d(h){h&&(et(t),et(s),et(o))}}}function oa(n){let t,e,r,s,o,a,u=n[0][n[22]===0?6:n[22]===1?5:n[22]===2?10:8]&&ia(n);function h(){return n[13](n[22])}function f(...m){return n[14](n[22],...m)}return{c(){t=B("button"),e=B("span"),e.textContent=`${n[22]===0?6:n[22]===1?5:n[22]===2?10:8}`,r=W(),u&&u.c(),s=W(),D(e,"class","number svelte-p0e7uy"),D(t,"type","button"),D(t,"class","player-position midfielder svelte-p0e7uy"),D(t,"style","bottom: "+n[20].bottom+"; "+(n[20].left?"left: "+n[20].left:"right: "+n[20].right)),D(t,"aria-label","Select midfielder position "+(n[22]+1))},m(m,E){nt(m,t,E),N(t,e),N(t,r),u&&u.m(t,null),N(t,s),o||(a=[lt(t,"click",h),lt(t,"keydown",f)],o=!0)},p(m,E){n=m,n[0][n[22]===0?6:n[22]===1?5:n[22]===2?10:8]?u?u.p(n,E):(u=ia(n),u.c(),u.m(t,s)):u&&(u.d(1),u=null)},d(m){m&&et(t),u&&u.d(),o=!1,qt(a)}}}function aa(n){let t,e=de(n[0][n[22]===0?11:n[22]===1?9:7])+"",r,s,o,a=n[0][n[22]===0?11:n[22]===1?9:7].club+"",u;return{c(){t=B("span"),r=ht(e),s=W(),o=B("span"),u=ht(a),D(t,"class","player-name svelte-p0e7uy"),D(o,"class","player-club svelte-p0e7uy")},m(h,f){nt(h,t,f),N(t,r),nt(h,s,f),nt(h,o,f),N(o,u)},p(h,f){f&1&&e!==(e=de(h[0][h[22]===0?11:h[22]===1?9:7])+"")&&Ot(r,e),f&1&&a!==(a=h[0][h[22]===0?11:h[22]===1?9:7].club+"")&&Ot(u,a)},d(h){h&&(et(t),et(s),et(o))}}}function la(n){let t,e,r,s,o,a,u=n[0][n[22]===0?11:n[22]===1?9:7]&&aa(n);function h(){return n[15](n[22])}function f(...m){return n[16](n[22],...m)}return{c(){t=B("button"),e=B("span"),e.textContent=`${n[22]===0?11:n[22]===1?9:7}`,r=W(),u&&u.c(),s=W(),D(e,"class","number svelte-p0e7uy"),D(t,"type","button"),D(t,"class","player-position forward svelte-p0e7uy"),D(t,"style","bottom: "+n[20].bottom+"; "+(n[20].left?"left: "+n[20].left:"right: "+n[20].right)),D(t,"aria-label","Select forward position "+(n[22]+1))},m(m,E){nt(m,t,E),N(t,e),N(t,r),u&&u.m(t,null),N(t,s),o||(a=[lt(t,"click",h),lt(t,"keydown",f)],o=!0)},p(m,E){n=m,n[0][n[22]===0?11:n[22]===1?9:7]?u?u.p(n,E):(u=aa(n),u.c(),u.m(t,s)):u&&(u.d(1),u=null)},d(m){m&&et(t),u&&u.d(),o=!1,qt(a)}}}function ch(n){var x,w,g;let t,e,r,s,o,a,u,h,f,m,E,v,A,C,M=n[0][1]&&na(n),S=xe(n[5].defenders),k=[];for(let p=0;p<S.length;p+=1)k[p]=sa(ea(n,S,p));let F=xe(n[5].midfielders),O=[];for(let p=0;p<F.length;p+=1)O[p]=oa(ta(n,F,p));let Y=xe(n[5].forwards),G=[];for(let p=0;p<Y.length;p+=1)G[p]=la(Zo(n,Y,p));return E=new uh({props:{isOpen:n[1],position:n[2]||"",number:n[3]||0,firstName:((x=n[4])==null?void 0:x.firstName)||"",surname:((w=n[4])==null?void 0:w.surname)||"",club:((g=n[4])==null?void 0:g.club)||"",isEdit:!!n[4]}}),E.$on("save",n[7]),E.$on("close",n[17]),{c(){t=B("div"),e=B("div"),r=B("div"),s=B("button"),o=B("span"),o.textContent="1",a=W(),M&&M.c(),u=W();for(let p=0;p<k.length;p+=1)k[p].c();h=W();for(let p=0;p<O.length;p+=1)O[p].c();f=W();for(let p=0;p<G.length;p+=1)G[p].c();m=W(),Ir(E.$$.fragment),D(o,"class","number svelte-p0e7uy"),D(s,"type","button"),D(s,"class","player-position goalkeeper svelte-p0e7uy"),qs(s,"bottom",n[5].goalkeeper.bottom),qs(s,"left",n[5].goalkeeper.left),D(s,"aria-label","Select goalkeeper position"),D(r,"class","player-positions svelte-p0e7uy"),D(e,"class","pitch-container svelte-p0e7uy"),D(t,"class","football-pitch svelte-p0e7uy")},m(p,y){nt(p,t,y),N(t,e),N(e,r),N(r,s),N(s,o),N(s,a),M&&M.m(s,null),N(r,u);for(let T=0;T<k.length;T+=1)k[T]&&k[T].m(r,null);N(r,h);for(let T=0;T<O.length;T+=1)O[T]&&O[T].m(r,null);N(r,f);for(let T=0;T<G.length;T+=1)G[T]&&G[T].m(r,null);nt(p,m,y),Cn(E,p,y),v=!0,A||(C=[lt(s,"click",n[9]),lt(s,"keydown",n[10])],A=!0)},p(p,[y]){var I,_,it;if(p[0][1]?M?M.p(p,y):(M=na(p),M.c(),M.m(s,null)):M&&(M.d(1),M=null),y&97){S=xe(p[5].defenders);let z;for(z=0;z<S.length;z+=1){const Vt=ea(p,S,z);k[z]?k[z].p(Vt,y):(k[z]=sa(Vt),k[z].c(),k[z].m(r,h))}for(;z<k.length;z+=1)k[z].d(1);k.length=S.length}if(y&97){F=xe(p[5].midfielders);let z;for(z=0;z<F.length;z+=1){const Vt=ta(p,F,z);O[z]?O[z].p(Vt,y):(O[z]=oa(Vt),O[z].c(),O[z].m(r,f))}for(;z<O.length;z+=1)O[z].d(1);O.length=F.length}if(y&97){Y=xe(p[5].forwards);let z;for(z=0;z<Y.length;z+=1){const Vt=Zo(p,Y,z);G[z]?G[z].p(Vt,y):(G[z]=la(Vt),G[z].c(),G[z].m(r,null))}for(;z<G.length;z+=1)G[z].d(1);G.length=Y.length}const T={};y&2&&(T.isOpen=p[1]),y&4&&(T.position=p[2]||""),y&8&&(T.number=p[3]||0),y&16&&(T.firstName=((I=p[4])==null?void 0:I.firstName)||""),y&16&&(T.surname=((_=p[4])==null?void 0:_.surname)||""),y&16&&(T.club=((it=p[4])==null?void 0:it.club)||""),y&16&&(T.isEdit=!!p[4]),E.$set(T)},i(p){v||(Rn(E.$$.fragment,p),v=!0)},o(p){wr(E.$$.fragment,p),v=!1},d(p){p&&(et(t),et(m)),M&&M.d(),ks(k,p),ks(O,p),ks(G,p),Pn(E,p),A=!1,qt(C)}}}function de(n){return window.matchMedia("(max-width: 768px)").matches?n.surname:`${n.firstName} ${n.surname}`}function hh(n,t,e){const r=pi();let s={},o=!1,a=null,u=null,h=null;const f={goalkeeper:{bottom:"5%",left:"50%"},defenders:[{bottom:"25%",left:"17%"},{bottom:"25%",left:"50%"},{bottom:"25%",left:"83%"}],midfielders:[{bottom:"45%",left:"12.5%"},{bottom:"45%",left:"37.5%"},{bottom:"45%",left:"62.5%"},{bottom:"45%",left:"87.5%"}],forwards:[{bottom:"70%",left:"17%"},{bottom:"70%",left:"50%"},{bottom:"70%",left:"83%"}]};function m(x,w){e(2,a=x),e(3,u=w),e(4,h=s[w]||null),e(1,o=!0)}function E(x){if(u!==null){e(0,s[u]={firstName:x.detail.firstName,surname:x.detail.surname,club:x.detail.club},s),e(0,s),e(1,o=!1),e(2,a=null),e(3,u=null),e(4,h=null);const w=Object.keys(s).length;r("playersUpdate",{filledPositions:w,players:s})}}function v(){e(0,s={}),e(1,o=!1),e(2,a=null),e(3,u=null),e(4,h=null),r("playersUpdate",{filledPositions:0,players:s})}return[s,o,a,u,h,f,m,E,v,()=>m("goalkeeper",1),x=>x.key==="Enter"&&m("goalkeeper",1),x=>m("defender",x===0?3:x===1?4:2),(x,w)=>w.key==="Enter"&&m("defender",x===0?3:x===1?4:2),x=>m("midfielder",x===0?6:x===1?5:x===2?10:8),(x,w)=>w.key==="Enter"&&m("midfielder",x===0?6:x===1?5:x===2?10:8),x=>m("forward",x===0?11:x===1?9:7),(x,w)=>w.key==="Enter"&&m("forward",x===0?11:x===1?9:7),()=>{e(1,o=!1),e(4,h=null)}]}class fh extends $n{constructor(t){super(),zn(this,t,hh,ch,qn,{resetPlayers:8})}get resetPlayers(){return this.$$.ctx[8]}}function ua(n){let t,e,r,s,o,a,u,h,f,m,E,v,A,C,M,S,k,F,O,Y,G,x,w,g,p=n[2]&&ca(n);function y(_,it){return _[1]?mh:dh}let T=y(n),I=T(n);return{c(){t=B("div"),e=B("div"),r=B("div"),r.innerHTML='<h3 id="email-form-title" class="svelte-txf4uf">Verstuur je stem</h3>',s=W(),o=B("form"),p&&p.c(),a=W(),u=B("div"),h=B("label"),h.textContent="E-mailadres:",f=W(),m=B("input"),E=W(),v=B("div"),A=B("label"),C=B("input"),M=W(),S=B("span"),S.textContent="Ik wil mail ontvangen van RTV Drenthe over Onze Club. Als je dit aanvinkt meld je je alleen aan voor nieuws rond Onze Club",k=W(),F=B("div"),O=B("button"),Y=ht("Annuleren"),G=W(),x=B("button"),I.c(),D(r,"class","modal-header svelte-txf4uf"),D(h,"for","email"),D(h,"class","svelte-txf4uf"),D(m,"type","email"),D(m,"id","email"),m.required=!0,D(m,"placeholder","Vul je e-mailadres in"),m.disabled=n[1],D(m,"class","svelte-txf4uf"),D(u,"class","form-group svelte-txf4uf"),D(C,"type","checkbox"),C.disabled=n[1],D(C,"class","svelte-txf4uf"),D(A,"class","checkbox-label svelte-txf4uf"),D(v,"class","form-group checkbox-group svelte-txf4uf"),D(O,"type","button"),D(O,"class","cancel-button svelte-txf4uf"),O.disabled=n[1],D(x,"type","submit"),D(x,"class","save-button svelte-txf4uf"),x.disabled=n[1],D(F,"class","modal-footer svelte-txf4uf"),D(o,"class","modal-content svelte-txf4uf"),D(e,"class","modal svelte-txf4uf"),D(e,"role","dialog"),D(e,"aria-labelledby","email-form-title"),D(e,"aria-modal","true"),D(t,"class","modal-backdrop svelte-txf4uf"),D(t,"role","presentation")},m(_,it){nt(_,t,it),N(t,e),N(e,r),N(e,s),N(e,o),p&&p.m(o,null),N(o,a),N(o,u),N(u,h),N(u,f),N(u,m),oe(m,n[3]),N(o,E),N(o,v),N(v,A),N(A,C),C.checked=n[4],N(A,M),N(A,S),N(o,k),N(o,F),N(F,O),N(O,Y),N(F,G),N(F,x),I.m(x,null),w||(g=[lt(m,"input",n[7]),lt(C,"change",n[8]),lt(O,"click",n[5]),lt(o,"submit",bl(n[6]))],w=!0)},p(_,it){_[2]?p?p.p(_,it):(p=ca(_),p.c(),p.m(o,a)):p&&(p.d(1),p=null),it&2&&(m.disabled=_[1]),it&8&&m.value!==_[3]&&oe(m,_[3]),it&2&&(C.disabled=_[1]),it&16&&(C.checked=_[4]),it&2&&(O.disabled=_[1]),T!==(T=y(_))&&(I.d(1),I=T(_),I&&(I.c(),I.m(x,null))),it&2&&(x.disabled=_[1])},d(_){_&&et(t),p&&p.d(),I.d(),w=!1,qt(g)}}}function ca(n){let t,e;return{c(){t=B("div"),e=ht(n[2]),D(t,"class","error-message svelte-txf4uf")},m(r,s){nt(r,t,s),N(t,e)},p(r,s){s&4&&Ot(e,r[2])},d(r){r&&et(t)}}}function dh(n){let t;return{c(){t=ht("Versturen")},m(e,r){nt(e,t,r)},d(e){e&&et(t)}}}function mh(n){let t;return{c(){t=ht("Versturen...")},m(e,r){nt(e,t,r)},d(e){e&&et(t)}}}function ph(n){let t,e=n[0]&&ua(n);return{c(){e&&e.c(),t=di()},m(r,s){e&&e.m(r,s),nt(r,t,s)},p(r,[s]){r[0]?e?e.p(r,s):(e=ua(r),e.c(),e.m(t.parentNode,t)):e&&(e.d(1),e=null)},i:Ht,o:Ht,d(r){r&&et(t),e&&e.d(r)}}}function gh(n,t,e){let{isOpen:r=!1}=t,{isSubmitting:s=!1}=t,{submitError:o=null}=t,a="",u=!1;const h=pi();function f(){s||h("close")}function m(){s||h("submit",{email:a,consent:u})}function E(C){C.key==="Escape"&&r&&!s&&f()}mi(()=>(document.addEventListener("keydown",E),()=>{document.removeEventListener("keydown",E)}));function v(){a=this.value,e(3,a)}function A(){u=this.checked,e(4,u)}return n.$$set=C=>{"isOpen"in C&&e(0,r=C.isOpen),"isSubmitting"in C&&e(1,s=C.isSubmitting),"submitError"in C&&e(2,o=C.submitError)},[r,s,o,a,u,f,m,v,A]}class _h extends $n{constructor(t){super(),zn(this,t,gh,ph,qn,{isOpen:0,isSubmitting:1,submitError:2})}}function ha(n){let t,e,r,s,o,a,u,h,f,m,E,v,A,C,M,S,k=n[2]&&fa(n);return{c(){t=B("div"),e=B("h3"),e.textContent="Deel je elftal",r=W(),s=B("div"),o=B("button"),o.textContent="Download afbeelding",a=W(),k&&k.c(),u=W(),h=B("button"),h.textContent="Deel op WhatsApp",f=W(),m=B("button"),m.textContent="Deel op Facebook",E=W(),v=B("button"),v.textContent="Deel op Instagram",A=W(),C=B("canvas"),D(e,"class","svelte-zs3t9j"),D(o,"class","download-button svelte-zs3t9j"),D(h,"class","whatsapp-button svelte-zs3t9j"),D(m,"class","facebook-button svelte-zs3t9j"),D(v,"class","instagram-button svelte-zs3t9j"),D(s,"class","share-buttons svelte-zs3t9j"),qs(C,"display","none"),D(t,"class","share-modal svelte-zs3t9j")},m(F,O){nt(F,t,O),N(t,e),N(t,r),N(t,s),N(s,o),N(s,a),k&&k.m(s,null),N(s,u),N(s,h),N(s,f),N(s,m),N(s,E),N(s,v),N(t,A),N(t,C),n[7](C),M||(S=[lt(o,"click",n[3]),lt(h,"click",vh),lt(m,"click",Th),lt(v,"click",n[4])],M=!0)},p(F,O){F[2]?k?k.p(F,O):(k=fa(F),k.c(),k.m(s,u)):k&&(k.d(1),k=null)},d(F){F&&et(t),k&&k.d(),n[7](null),M=!1,qt(S)}}}function fa(n){let t,e,r;return{c(){t=B("button"),t.textContent="Delen",D(t,"class","share-button svelte-zs3t9j")},m(s,o){nt(s,t,o),e||(r=lt(t,"click",n[5]),e=!0)},p:Ht,d(s){s&&et(t),e=!1,r()}}}function yh(n){let t,e=n[0]&&ha(n);return{c(){e&&e.c(),t=di()},m(r,s){e&&e.m(r,s),nt(r,t,s)},p(r,[s]){r[0]?e?e.p(r,s):(e=ha(r),e.c(),e.m(t.parentNode,t)):e&&(e.d(1),e=null)},i:Ht,o:Ht,d(r){r&&et(t),e&&e.d(r)}}}const Eh="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHJlY3Qgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIGZpbGw9IiNGRkYwMDAiLz4KICA8cGF0aCBkPSJNMjAgMjBIMzBWMzBIMjBWMjBaTTcwIDIwSDgwVjMwSDcwVjIwWk0yMCA3MEgzMFY4MEgyMFY3MFpNNzAgNzBIMDhWNzBIMzBWNzBaTTIwIDQwSDMwVjUwSDIwVjQwWk03MCA0MEg4MFY1MEg3MFY0MFoiIGZpbGw9IiMwMDAwMDAiLz4KPC9zdmc+";async function vh(){const n="Maak ook jouw Drents Elftal!",t=encodeURIComponent("https://www.rtvdrenthe.nl/drents-elftal");window.open(`https://wa.me/?text=${encodeURIComponent(n+" "+t)}`,"_blank")}async function Th(){const n=encodeURIComponent("https://www.rtvdrenthe.nl/drents-elftal");window.open(`https://www.facebook.com/sharer/sharer.php?u=${n}`,"_blank")}function wh(n,t,e){let{players:r}=t,{isOpen:s=!1}=t,o,a=!1;mi(()=>{e(2,a=!!navigator.share)});async function u(){if(o)try{const v=await h(),A=document.createElement("a");A.download="mijn-drents-elftal.png",A.href=v,document.body.appendChild(A),A.click(),document.body.removeChild(A)}catch(v){console.error("Error downloading image:",v)}}async function h(){const v=o,A=v.getContext("2d");if(!A)throw new Error("Could not get canvas context");v.width=1200,v.height=630,A.fillStyle="#2E7D32",A.fillRect(0,0,v.width,v.height),A.strokeStyle="rgba(255, 255, 255, 0.5)",A.lineWidth=2,A.strokeRect(50,50,v.width-100,v.height-100),A.beginPath(),A.moveTo(v.width/2,50),A.lineTo(v.width/2,v.height-50),A.stroke(),A.beginPath(),A.arc(v.width/2,v.height/2,50,0,Math.PI*2),A.stroke(),A.fillStyle="white",A.font="bold 48px Arial",A.textAlign="center",A.fillText("Mijn Drents Elftal",v.width/2,40);const C={1:{x:v.width/2,y:v.height-100},2:{x:v.width*.17,y:v.height-200},3:{x:v.width*.5,y:v.height-200},4:{x:v.width*.83,y:v.height-200},5:{x:v.width*.125,y:v.height-350},6:{x:v.width*.375,y:v.height-350},8:{x:v.width*.625,y:v.height-350},10:{x:v.width*.875,y:v.height-350},7:{x:v.width*.17,y:v.height-500},9:{x:v.width*.5,y:v.height-500},11:{x:v.width*.83,y:v.height-500}},M=new Image;return M.src=Eh,await new Promise(S=>{M.onload=S}),Object.entries(r).forEach(([S,k])=>{const F=C[parseInt(S)];if(!F)return;const O=60;A.drawImage(M,F.x-O/2,F.y-O/2,O,O),A.fillStyle="white",A.font="bold 24px Arial",A.textAlign="center",A.fillText(S,F.x,F.y+5),A.font="16px Arial",A.fillText(`${k.firstName} ${k.surname}`,F.x,F.y+O),A.font="14px Arial",A.fillStyle="rgba(255, 255, 255, 0.8)",A.fillText(k.club,F.x,F.y+O+20)}),A.font="bold 24px Arial",A.fillStyle="white",A.textAlign="right",A.fillText("RTV Drenthe",v.width-60,v.height-30),v.toDataURL("image/png")}async function f(){await u(),alert("Je kunt de afbeelding nu delen op Instagram!")}async function m(){if(a)try{const v=await(await fetch(await h())).blob(),A=new File([v],"mijn-drents-elftal.png",{type:"image/png"});await navigator.share({title:"Mijn Drents Elftal",text:"Maak ook jouw Drents Elftal!",url:"https://www.rtvdrenthe.nl/drents-elftal",files:[A]})}catch(v){console.error("Error sharing:",v)}}function E(v){Vr[v?"unshift":"push"](()=>{o=v,e(1,o)})}return n.$$set=v=>{"players"in v&&e(6,r=v.players),"isOpen"in v&&e(0,s=v.isOpen)},[s,o,a,u,f,m,r,E]}class Ih extends $n{constructor(t){super(),zn(this,t,wh,yh,qn,{players:6,isOpen:0})}}const Ah=()=>{};var da={};/**
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
 */const Pl=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?t[e++]=s:s<2048?(t[e++]=s>>6|192,t[e++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=s>>18|240,t[e++]=s>>12&63|128,t[e++]=s>>6&63|128,t[e++]=s&63|128):(t[e++]=s>>12|224,t[e++]=s>>6&63|128,t[e++]=s&63|128)}return t},bh=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const s=n[e++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const o=n[e++];t[r++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=n[e++],a=n[e++],u=n[e++],h=((s&7)<<18|(o&63)<<12|(a&63)<<6|u&63)-65536;t[r++]=String.fromCharCode(55296+(h>>10)),t[r++]=String.fromCharCode(56320+(h&1023))}else{const o=n[e++],a=n[e++];t[r++]=String.fromCharCode((s&15)<<12|(o&63)<<6|a&63)}}return t.join("")},Sl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const o=n[s],a=s+1<n.length,u=a?n[s+1]:0,h=s+2<n.length,f=h?n[s+2]:0,m=o>>2,E=(o&3)<<4|u>>4;let v=(u&15)<<2|f>>6,A=f&63;h||(A=64,a||(v=64)),r.push(e[m],e[E],e[v],e[A])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(Pl(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):bh(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const o=e[n.charAt(s++)],u=s<n.length?e[n.charAt(s)]:0;++s;const f=s<n.length?e[n.charAt(s)]:64;++s;const E=s<n.length?e[n.charAt(s)]:64;if(++s,o==null||u==null||f==null||E==null)throw new Rh;const v=o<<2|u>>4;if(r.push(v),f!==64){const A=u<<4&240|f>>2;if(r.push(A),E!==64){const C=f<<6&192|E;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Rh extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ch=function(n){const t=Pl(n);return Sl.encodeByteArray(t,!0)},Dr=function(n){return Ch(n).replace(/\./g,"")},Ph=function(n){try{return Sl.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function Sh(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Vh=()=>Sh().__FIREBASE_DEFAULTS__,Dh=()=>{if(typeof process>"u"||typeof da>"u")return;const n=da.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},kh=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&Ph(n[1]);return t&&JSON.parse(t)},gi=()=>{try{return Ah()||Vh()||Dh()||kh()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Nh=n=>{var t,e;return(e=(t=gi())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},Mh=n=>{const t=Nh(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},Vl=()=>{var n;return(n=gi())===null||n===void 0?void 0:n.config};/**
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
 */class Oh{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
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
 */function Lh(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",s=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Dr(JSON.stringify(e)),Dr(JSON.stringify(a)),""].join(".")}/**
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
 */function Fh(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function xh(){var n;const t=(n=gi())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Uh(){return!xh()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Bh(){try{return typeof indexedDB=="object"}catch{return!1}}function jh(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{e=!1},s.onerror=()=>{var o;t(((o=s.error)===null||o===void 0?void 0:o.message)||"")}}catch(e){t(e)}})}/**
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
 */const qh="FirebaseError";class en extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=qh,Object.setPrototypeOf(this,en.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Dl.prototype.create)}}class Dl{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},s=`${this.service}/${t}`,o=this.errors[t],a=o?zh(o,r):"Error",u=`${this.serviceName}: ${a} (${s}).`;return new en(s,u,r)}}function zh(n,t){return n.replace($h,(e,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const $h=/\{\$([^}]+)}/g;function kr(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const s of e){if(!r.includes(s))return!1;const o=n[s],a=t[s];if(ma(o)&&ma(a)){if(!kr(o,a))return!1}else if(o!==a)return!1}for(const s of r)if(!e.includes(s))return!1;return!0}function ma(n){return n!==null&&typeof n=="object"}/**
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
 */function Ke(n){return n&&n._delegate?n._delegate:n}class Mn{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Ae="[DEFAULT]";/**
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
 */class Gh{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new Oh;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:e});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Kh(t))try{this.getOrInitializeService({instanceIdentifier:Ae})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(e);try{const o=this.getOrInitializeService({instanceIdentifier:s});r.resolve(o)}catch{}}}}clearInstance(t=Ae){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Ae){return this.instances.has(t)}getOptions(t=Ae){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[o,a]of this.instancesDeferred.entries()){const u=this.normalizeInstanceIdentifier(o);r===u&&a.resolve(s)}return s}onInit(t,e){var r;const s=this.normalizeInstanceIdentifier(e),o=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(s,o);const a=this.instances.get(s);return a&&t(a,s),()=>{o.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const s of r)try{s(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Hh(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Ae){return this.component?this.component.multipleInstances?t:Ae:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Hh(n){return n===Ae?void 0:n}function Kh(n){return n.instantiationMode==="EAGER"}/**
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
 */class Wh{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new Gh(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Z;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Z||(Z={}));const Qh={debug:Z.DEBUG,verbose:Z.VERBOSE,info:Z.INFO,warn:Z.WARN,error:Z.ERROR,silent:Z.SILENT},Xh=Z.INFO,Yh={[Z.DEBUG]:"log",[Z.VERBOSE]:"log",[Z.INFO]:"info",[Z.WARN]:"warn",[Z.ERROR]:"error"},Jh=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),s=Yh[t];if(s)console[s](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class kl{constructor(t){this.name=t,this._logLevel=Xh,this._logHandler=Jh,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Z))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Qh[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Z.DEBUG,...t),this._logHandler(this,Z.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Z.VERBOSE,...t),this._logHandler(this,Z.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Z.INFO,...t),this._logHandler(this,Z.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Z.WARN,...t),this._logHandler(this,Z.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Z.ERROR,...t),this._logHandler(this,Z.ERROR,...t)}}const Zh=(n,t)=>t.some(e=>n instanceof e);let pa,ga;function tf(){return pa||(pa=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ef(){return ga||(ga=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Nl=new WeakMap,Gs=new WeakMap,Ml=new WeakMap,Ms=new WeakMap,_i=new WeakMap;function nf(n){const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("success",o),n.removeEventListener("error",a)},o=()=>{e(le(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",o),n.addEventListener("error",a)});return t.then(e=>{e instanceof IDBCursor&&Nl.set(e,n)}).catch(()=>{}),_i.set(t,n),t}function rf(n){if(Gs.has(n))return;const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",a),n.removeEventListener("abort",a)},o=()=>{e(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",o),n.addEventListener("error",a),n.addEventListener("abort",a)});Gs.set(n,t)}let Hs={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return Gs.get(n);if(t==="objectStoreNames")return n.objectStoreNames||Ml.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return le(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function sf(n){Hs=n(Hs)}function of(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call(Os(this),t,...e);return Ml.set(r,t.sort?t.sort():[t]),le(r)}:ef().includes(n)?function(...t){return n.apply(Os(this),t),le(Nl.get(this))}:function(...t){return le(n.apply(Os(this),t))}}function af(n){return typeof n=="function"?of(n):(n instanceof IDBTransaction&&rf(n),Zh(n,tf())?new Proxy(n,Hs):n)}function le(n){if(n instanceof IDBRequest)return nf(n);if(Ms.has(n))return Ms.get(n);const t=af(n);return t!==n&&(Ms.set(n,t),_i.set(t,n)),t}const Os=n=>_i.get(n);function lf(n,t,{blocked:e,upgrade:r,blocking:s,terminated:o}={}){const a=indexedDB.open(n,t),u=le(a);return r&&a.addEventListener("upgradeneeded",h=>{r(le(a.result),h.oldVersion,h.newVersion,le(a.transaction),h)}),e&&a.addEventListener("blocked",h=>e(h.oldVersion,h.newVersion,h)),u.then(h=>{o&&h.addEventListener("close",()=>o()),s&&h.addEventListener("versionchange",f=>s(f.oldVersion,f.newVersion,f))}).catch(()=>{}),u}const uf=["get","getKey","getAll","getAllKeys","count"],cf=["put","add","delete","clear"],Ls=new Map;function _a(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(Ls.get(t))return Ls.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,s=cf.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(s||uf.includes(e)))return;const o=async function(a,...u){const h=this.transaction(a,s?"readwrite":"readonly");let f=h.store;return r&&(f=f.index(u.shift())),(await Promise.all([f[e](...u),s&&h.done]))[0]};return Ls.set(t,o),o}sf(n=>({...n,get:(t,e,r)=>_a(t,e)||n.get(t,e,r),has:(t,e)=>!!_a(t,e)||n.has(t,e)}));/**
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
 */class hf{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(ff(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function ff(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Ks="@firebase/app",ya="0.11.3";/**
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
 */const Zt=new kl("@firebase/app"),df="@firebase/app-compat",mf="@firebase/analytics-compat",pf="@firebase/analytics",gf="@firebase/app-check-compat",_f="@firebase/app-check",yf="@firebase/auth",Ef="@firebase/auth-compat",vf="@firebase/database",Tf="@firebase/data-connect",wf="@firebase/database-compat",If="@firebase/functions",Af="@firebase/functions-compat",bf="@firebase/installations",Rf="@firebase/installations-compat",Cf="@firebase/messaging",Pf="@firebase/messaging-compat",Sf="@firebase/performance",Vf="@firebase/performance-compat",Df="@firebase/remote-config",kf="@firebase/remote-config-compat",Nf="@firebase/storage",Mf="@firebase/storage-compat",Of="@firebase/firestore",Lf="@firebase/vertexai",Ff="@firebase/firestore-compat",xf="firebase",Uf="11.5.0";/**
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
 */const Ws="[DEFAULT]",Bf={[Ks]:"fire-core",[df]:"fire-core-compat",[pf]:"fire-analytics",[mf]:"fire-analytics-compat",[_f]:"fire-app-check",[gf]:"fire-app-check-compat",[yf]:"fire-auth",[Ef]:"fire-auth-compat",[vf]:"fire-rtdb",[Tf]:"fire-data-connect",[wf]:"fire-rtdb-compat",[If]:"fire-fn",[Af]:"fire-fn-compat",[bf]:"fire-iid",[Rf]:"fire-iid-compat",[Cf]:"fire-fcm",[Pf]:"fire-fcm-compat",[Sf]:"fire-perf",[Vf]:"fire-perf-compat",[Df]:"fire-rc",[kf]:"fire-rc-compat",[Nf]:"fire-gcs",[Mf]:"fire-gcs-compat",[Of]:"fire-fst",[Ff]:"fire-fst-compat",[Lf]:"fire-vertex","fire-js":"fire-js",[xf]:"fire-js-all"};/**
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
 */const Nr=new Map,jf=new Map,Qs=new Map;function Ea(n,t){try{n.container.addComponent(t)}catch(e){Zt.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function Mr(n){const t=n.name;if(Qs.has(t))return Zt.debug(`There were multiple attempts to register component ${t}.`),!1;Qs.set(t,n);for(const e of Nr.values())Ea(e,n);for(const e of jf.values())Ea(e,n);return!0}function qf(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}function zf(n){return n==null?!1:n.settings!==void 0}/**
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
 */const $f={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ue=new Dl("app","Firebase",$f);/**
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
 */class Gf{constructor(t,e,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Mn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw ue.create("app-deleted",{appName:this._name})}}/**
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
 */const Hf=Uf;function Ol(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Ws,automaticDataCollectionEnabled:!1},t),s=r.name;if(typeof s!="string"||!s)throw ue.create("bad-app-name",{appName:String(s)});if(e||(e=Vl()),!e)throw ue.create("no-options");const o=Nr.get(s);if(o){if(kr(e,o.options)&&kr(r,o.config))return o;throw ue.create("duplicate-app",{appName:s})}const a=new Wh(s);for(const h of Qs.values())a.addComponent(h);const u=new Gf(e,r,a);return Nr.set(s,u),u}function Kf(n=Ws){const t=Nr.get(n);if(!t&&n===Ws&&Vl())return Ol();if(!t)throw ue.create("no-app",{appName:n});return t}function Ge(n,t,e){var r;let s=(r=Bf[n])!==null&&r!==void 0?r:n;e&&(s+=`-${e}`);const o=s.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const u=[`Unable to register library "${s}" with version "${t}":`];o&&u.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&u.push("and"),a&&u.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Zt.warn(u.join(" "));return}Mr(new Mn(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
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
 */const Wf="firebase-heartbeat-database",Qf=1,On="firebase-heartbeat-store";let Fs=null;function Ll(){return Fs||(Fs=lf(Wf,Qf,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(On)}catch(e){console.warn(e)}}}}).catch(n=>{throw ue.create("idb-open",{originalErrorMessage:n.message})})),Fs}async function Xf(n){try{const e=(await Ll()).transaction(On),r=await e.objectStore(On).get(Fl(n));return await e.done,r}catch(t){if(t instanceof en)Zt.warn(t.message);else{const e=ue.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Zt.warn(e.message)}}}async function va(n,t){try{const r=(await Ll()).transaction(On,"readwrite");await r.objectStore(On).put(t,Fl(n)),await r.done}catch(e){if(e instanceof en)Zt.warn(e.message);else{const r=ue.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});Zt.warn(r.message)}}}function Fl(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Yf=1024,Jf=30;class Zf{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new ed(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,e;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Ta();if(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:s}),this._heartbeatsCache.heartbeats.length>Jf){const a=nd(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Zt.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Ta(),{heartbeatsToSend:r,unsentEntries:s}=td(this._heartbeatsCache.heartbeats),o=Dr(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return Zt.warn(e),""}}}function Ta(){return new Date().toISOString().substring(0,10)}function td(n,t=Yf){const e=[];let r=n.slice();for(const s of n){const o=e.find(a=>a.agent===s.agent);if(o){if(o.dates.push(s.date),wa(e)>t){o.dates.pop();break}}else if(e.push({agent:s.agent,dates:[s.date]}),wa(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class ed{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Bh()?jh().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await Xf(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return va(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return va(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function wa(n){return Dr(JSON.stringify({version:2,heartbeats:n})).length}function nd(n){if(n.length===0)return-1;let t=0,e=n[0].date;for(let r=1;r<n.length;r++)n[r].date<e&&(e=n[r].date,t=r);return t}/**
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
 */function rd(n){Mr(new Mn("platform-logger",t=>new hf(t),"PRIVATE")),Mr(new Mn("heartbeat",t=>new Zf(t),"PRIVATE")),Ge(Ks,ya,n),Ge(Ks,ya,"esm2017"),Ge("fire-js","")}rd("");var Ia=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ce,xl;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(w,g){function p(){}p.prototype=g.prototype,w.D=g.prototype,w.prototype=new p,w.prototype.constructor=w,w.C=function(y,T,I){for(var _=Array(arguments.length-2),it=2;it<arguments.length;it++)_[it-2]=arguments[it];return g.prototype[T].apply(y,_)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(r,e),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(w,g,p){p||(p=0);var y=Array(16);if(typeof g=="string")for(var T=0;16>T;++T)y[T]=g.charCodeAt(p++)|g.charCodeAt(p++)<<8|g.charCodeAt(p++)<<16|g.charCodeAt(p++)<<24;else for(T=0;16>T;++T)y[T]=g[p++]|g[p++]<<8|g[p++]<<16|g[p++]<<24;g=w.g[0],p=w.g[1],T=w.g[2];var I=w.g[3],_=g+(I^p&(T^I))+y[0]+3614090360&4294967295;g=p+(_<<7&4294967295|_>>>25),_=I+(T^g&(p^T))+y[1]+3905402710&4294967295,I=g+(_<<12&4294967295|_>>>20),_=T+(p^I&(g^p))+y[2]+606105819&4294967295,T=I+(_<<17&4294967295|_>>>15),_=p+(g^T&(I^g))+y[3]+3250441966&4294967295,p=T+(_<<22&4294967295|_>>>10),_=g+(I^p&(T^I))+y[4]+4118548399&4294967295,g=p+(_<<7&4294967295|_>>>25),_=I+(T^g&(p^T))+y[5]+1200080426&4294967295,I=g+(_<<12&4294967295|_>>>20),_=T+(p^I&(g^p))+y[6]+2821735955&4294967295,T=I+(_<<17&4294967295|_>>>15),_=p+(g^T&(I^g))+y[7]+4249261313&4294967295,p=T+(_<<22&4294967295|_>>>10),_=g+(I^p&(T^I))+y[8]+1770035416&4294967295,g=p+(_<<7&4294967295|_>>>25),_=I+(T^g&(p^T))+y[9]+2336552879&4294967295,I=g+(_<<12&4294967295|_>>>20),_=T+(p^I&(g^p))+y[10]+4294925233&4294967295,T=I+(_<<17&4294967295|_>>>15),_=p+(g^T&(I^g))+y[11]+2304563134&4294967295,p=T+(_<<22&4294967295|_>>>10),_=g+(I^p&(T^I))+y[12]+1804603682&4294967295,g=p+(_<<7&4294967295|_>>>25),_=I+(T^g&(p^T))+y[13]+4254626195&4294967295,I=g+(_<<12&4294967295|_>>>20),_=T+(p^I&(g^p))+y[14]+2792965006&4294967295,T=I+(_<<17&4294967295|_>>>15),_=p+(g^T&(I^g))+y[15]+1236535329&4294967295,p=T+(_<<22&4294967295|_>>>10),_=g+(T^I&(p^T))+y[1]+4129170786&4294967295,g=p+(_<<5&4294967295|_>>>27),_=I+(p^T&(g^p))+y[6]+3225465664&4294967295,I=g+(_<<9&4294967295|_>>>23),_=T+(g^p&(I^g))+y[11]+643717713&4294967295,T=I+(_<<14&4294967295|_>>>18),_=p+(I^g&(T^I))+y[0]+3921069994&4294967295,p=T+(_<<20&4294967295|_>>>12),_=g+(T^I&(p^T))+y[5]+3593408605&4294967295,g=p+(_<<5&4294967295|_>>>27),_=I+(p^T&(g^p))+y[10]+38016083&4294967295,I=g+(_<<9&4294967295|_>>>23),_=T+(g^p&(I^g))+y[15]+3634488961&4294967295,T=I+(_<<14&4294967295|_>>>18),_=p+(I^g&(T^I))+y[4]+3889429448&4294967295,p=T+(_<<20&4294967295|_>>>12),_=g+(T^I&(p^T))+y[9]+568446438&4294967295,g=p+(_<<5&4294967295|_>>>27),_=I+(p^T&(g^p))+y[14]+3275163606&4294967295,I=g+(_<<9&4294967295|_>>>23),_=T+(g^p&(I^g))+y[3]+4107603335&4294967295,T=I+(_<<14&4294967295|_>>>18),_=p+(I^g&(T^I))+y[8]+1163531501&4294967295,p=T+(_<<20&4294967295|_>>>12),_=g+(T^I&(p^T))+y[13]+2850285829&4294967295,g=p+(_<<5&4294967295|_>>>27),_=I+(p^T&(g^p))+y[2]+4243563512&4294967295,I=g+(_<<9&4294967295|_>>>23),_=T+(g^p&(I^g))+y[7]+1735328473&4294967295,T=I+(_<<14&4294967295|_>>>18),_=p+(I^g&(T^I))+y[12]+2368359562&4294967295,p=T+(_<<20&4294967295|_>>>12),_=g+(p^T^I)+y[5]+4294588738&4294967295,g=p+(_<<4&4294967295|_>>>28),_=I+(g^p^T)+y[8]+2272392833&4294967295,I=g+(_<<11&4294967295|_>>>21),_=T+(I^g^p)+y[11]+1839030562&4294967295,T=I+(_<<16&4294967295|_>>>16),_=p+(T^I^g)+y[14]+4259657740&4294967295,p=T+(_<<23&4294967295|_>>>9),_=g+(p^T^I)+y[1]+2763975236&4294967295,g=p+(_<<4&4294967295|_>>>28),_=I+(g^p^T)+y[4]+1272893353&4294967295,I=g+(_<<11&4294967295|_>>>21),_=T+(I^g^p)+y[7]+4139469664&4294967295,T=I+(_<<16&4294967295|_>>>16),_=p+(T^I^g)+y[10]+3200236656&4294967295,p=T+(_<<23&4294967295|_>>>9),_=g+(p^T^I)+y[13]+681279174&4294967295,g=p+(_<<4&4294967295|_>>>28),_=I+(g^p^T)+y[0]+3936430074&4294967295,I=g+(_<<11&4294967295|_>>>21),_=T+(I^g^p)+y[3]+3572445317&4294967295,T=I+(_<<16&4294967295|_>>>16),_=p+(T^I^g)+y[6]+76029189&4294967295,p=T+(_<<23&4294967295|_>>>9),_=g+(p^T^I)+y[9]+3654602809&4294967295,g=p+(_<<4&4294967295|_>>>28),_=I+(g^p^T)+y[12]+3873151461&4294967295,I=g+(_<<11&4294967295|_>>>21),_=T+(I^g^p)+y[15]+530742520&4294967295,T=I+(_<<16&4294967295|_>>>16),_=p+(T^I^g)+y[2]+3299628645&4294967295,p=T+(_<<23&4294967295|_>>>9),_=g+(T^(p|~I))+y[0]+4096336452&4294967295,g=p+(_<<6&4294967295|_>>>26),_=I+(p^(g|~T))+y[7]+1126891415&4294967295,I=g+(_<<10&4294967295|_>>>22),_=T+(g^(I|~p))+y[14]+2878612391&4294967295,T=I+(_<<15&4294967295|_>>>17),_=p+(I^(T|~g))+y[5]+4237533241&4294967295,p=T+(_<<21&4294967295|_>>>11),_=g+(T^(p|~I))+y[12]+1700485571&4294967295,g=p+(_<<6&4294967295|_>>>26),_=I+(p^(g|~T))+y[3]+2399980690&4294967295,I=g+(_<<10&4294967295|_>>>22),_=T+(g^(I|~p))+y[10]+4293915773&4294967295,T=I+(_<<15&4294967295|_>>>17),_=p+(I^(T|~g))+y[1]+2240044497&4294967295,p=T+(_<<21&4294967295|_>>>11),_=g+(T^(p|~I))+y[8]+1873313359&4294967295,g=p+(_<<6&4294967295|_>>>26),_=I+(p^(g|~T))+y[15]+4264355552&4294967295,I=g+(_<<10&4294967295|_>>>22),_=T+(g^(I|~p))+y[6]+2734768916&4294967295,T=I+(_<<15&4294967295|_>>>17),_=p+(I^(T|~g))+y[13]+1309151649&4294967295,p=T+(_<<21&4294967295|_>>>11),_=g+(T^(p|~I))+y[4]+4149444226&4294967295,g=p+(_<<6&4294967295|_>>>26),_=I+(p^(g|~T))+y[11]+3174756917&4294967295,I=g+(_<<10&4294967295|_>>>22),_=T+(g^(I|~p))+y[2]+718787259&4294967295,T=I+(_<<15&4294967295|_>>>17),_=p+(I^(T|~g))+y[9]+3951481745&4294967295,w.g[0]=w.g[0]+g&4294967295,w.g[1]=w.g[1]+(T+(_<<21&4294967295|_>>>11))&4294967295,w.g[2]=w.g[2]+T&4294967295,w.g[3]=w.g[3]+I&4294967295}r.prototype.u=function(w,g){g===void 0&&(g=w.length);for(var p=g-this.blockSize,y=this.B,T=this.h,I=0;I<g;){if(T==0)for(;I<=p;)s(this,w,I),I+=this.blockSize;if(typeof w=="string"){for(;I<g;)if(y[T++]=w.charCodeAt(I++),T==this.blockSize){s(this,y),T=0;break}}else for(;I<g;)if(y[T++]=w[I++],T==this.blockSize){s(this,y),T=0;break}}this.h=T,this.o+=g},r.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var g=1;g<w.length-8;++g)w[g]=0;var p=8*this.o;for(g=w.length-8;g<w.length;++g)w[g]=p&255,p/=256;for(this.u(w),w=Array(16),g=p=0;4>g;++g)for(var y=0;32>y;y+=8)w[p++]=this.g[g]>>>y&255;return w};function o(w,g){var p=u;return Object.prototype.hasOwnProperty.call(p,w)?p[w]:p[w]=g(w)}function a(w,g){this.h=g;for(var p=[],y=!0,T=w.length-1;0<=T;T--){var I=w[T]|0;y&&I==g||(p[T]=I,y=!1)}this.g=p}var u={};function h(w){return-128<=w&&128>w?o(w,function(g){return new a([g|0],0>g?-1:0)}):new a([w|0],0>w?-1:0)}function f(w){if(isNaN(w)||!isFinite(w))return E;if(0>w)return S(f(-w));for(var g=[],p=1,y=0;w>=p;y++)g[y]=w/p|0,p*=4294967296;return new a(g,0)}function m(w,g){if(w.length==0)throw Error("number format error: empty string");if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(w.charAt(0)=="-")return S(m(w.substring(1),g));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var p=f(Math.pow(g,8)),y=E,T=0;T<w.length;T+=8){var I=Math.min(8,w.length-T),_=parseInt(w.substring(T,T+I),g);8>I?(I=f(Math.pow(g,I)),y=y.j(I).add(f(_))):(y=y.j(p),y=y.add(f(_)))}return y}var E=h(0),v=h(1),A=h(16777216);n=a.prototype,n.m=function(){if(M(this))return-S(this).m();for(var w=0,g=1,p=0;p<this.g.length;p++){var y=this.i(p);w+=(0<=y?y:4294967296+y)*g,g*=4294967296}return w},n.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(C(this))return"0";if(M(this))return"-"+S(this).toString(w);for(var g=f(Math.pow(w,6)),p=this,y="";;){var T=Y(p,g).g;p=k(p,T.j(g));var I=((0<p.g.length?p.g[0]:p.h)>>>0).toString(w);if(p=T,C(p))return I+y;for(;6>I.length;)I="0"+I;y=I+y}},n.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function C(w){if(w.h!=0)return!1;for(var g=0;g<w.g.length;g++)if(w.g[g]!=0)return!1;return!0}function M(w){return w.h==-1}n.l=function(w){return w=k(this,w),M(w)?-1:C(w)?0:1};function S(w){for(var g=w.g.length,p=[],y=0;y<g;y++)p[y]=~w.g[y];return new a(p,~w.h).add(v)}n.abs=function(){return M(this)?S(this):this},n.add=function(w){for(var g=Math.max(this.g.length,w.g.length),p=[],y=0,T=0;T<=g;T++){var I=y+(this.i(T)&65535)+(w.i(T)&65535),_=(I>>>16)+(this.i(T)>>>16)+(w.i(T)>>>16);y=_>>>16,I&=65535,_&=65535,p[T]=_<<16|I}return new a(p,p[p.length-1]&-2147483648?-1:0)};function k(w,g){return w.add(S(g))}n.j=function(w){if(C(this)||C(w))return E;if(M(this))return M(w)?S(this).j(S(w)):S(S(this).j(w));if(M(w))return S(this.j(S(w)));if(0>this.l(A)&&0>w.l(A))return f(this.m()*w.m());for(var g=this.g.length+w.g.length,p=[],y=0;y<2*g;y++)p[y]=0;for(y=0;y<this.g.length;y++)for(var T=0;T<w.g.length;T++){var I=this.i(y)>>>16,_=this.i(y)&65535,it=w.i(T)>>>16,z=w.i(T)&65535;p[2*y+2*T]+=_*z,F(p,2*y+2*T),p[2*y+2*T+1]+=I*z,F(p,2*y+2*T+1),p[2*y+2*T+1]+=_*it,F(p,2*y+2*T+1),p[2*y+2*T+2]+=I*it,F(p,2*y+2*T+2)}for(y=0;y<g;y++)p[y]=p[2*y+1]<<16|p[2*y];for(y=g;y<2*g;y++)p[y]=0;return new a(p,0)};function F(w,g){for(;(w[g]&65535)!=w[g];)w[g+1]+=w[g]>>>16,w[g]&=65535,g++}function O(w,g){this.g=w,this.h=g}function Y(w,g){if(C(g))throw Error("division by zero");if(C(w))return new O(E,E);if(M(w))return g=Y(S(w),g),new O(S(g.g),S(g.h));if(M(g))return g=Y(w,S(g)),new O(S(g.g),g.h);if(30<w.g.length){if(M(w)||M(g))throw Error("slowDivide_ only works with positive integers.");for(var p=v,y=g;0>=y.l(w);)p=G(p),y=G(y);var T=x(p,1),I=x(y,1);for(y=x(y,2),p=x(p,2);!C(y);){var _=I.add(y);0>=_.l(w)&&(T=T.add(p),I=_),y=x(y,1),p=x(p,1)}return g=k(w,T.j(g)),new O(T,g)}for(T=E;0<=w.l(g);){for(p=Math.max(1,Math.floor(w.m()/g.m())),y=Math.ceil(Math.log(p)/Math.LN2),y=48>=y?1:Math.pow(2,y-48),I=f(p),_=I.j(g);M(_)||0<_.l(w);)p-=y,I=f(p),_=I.j(g);C(I)&&(I=v),T=T.add(I),w=k(w,_)}return new O(T,w)}n.A=function(w){return Y(this,w).h},n.and=function(w){for(var g=Math.max(this.g.length,w.g.length),p=[],y=0;y<g;y++)p[y]=this.i(y)&w.i(y);return new a(p,this.h&w.h)},n.or=function(w){for(var g=Math.max(this.g.length,w.g.length),p=[],y=0;y<g;y++)p[y]=this.i(y)|w.i(y);return new a(p,this.h|w.h)},n.xor=function(w){for(var g=Math.max(this.g.length,w.g.length),p=[],y=0;y<g;y++)p[y]=this.i(y)^w.i(y);return new a(p,this.h^w.h)};function G(w){for(var g=w.g.length+1,p=[],y=0;y<g;y++)p[y]=w.i(y)<<1|w.i(y-1)>>>31;return new a(p,w.h)}function x(w,g){var p=g>>5;g%=32;for(var y=w.g.length-p,T=[],I=0;I<y;I++)T[I]=0<g?w.i(I+p)>>>g|w.i(I+p+1)<<32-g:w.i(I+p);return new a(T,w.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,xl=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=f,a.fromString=m,ce=a}).apply(typeof Ia<"u"?Ia:typeof self<"u"?self:typeof window<"u"?window:{});var pr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ul,wn,Bl,Ar,Xs,jl,ql,zl;(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(i,l,c){return i==Array.prototype||i==Object.prototype||(i[l]=c.value),i};function e(i){i=[typeof globalThis=="object"&&globalThis,i,typeof window=="object"&&window,typeof self=="object"&&self,typeof pr=="object"&&pr];for(var l=0;l<i.length;++l){var c=i[l];if(c&&c.Math==Math)return c}throw Error("Cannot find global object")}var r=e(this);function s(i,l){if(l)t:{var c=r;i=i.split(".");for(var d=0;d<i.length-1;d++){var b=i[d];if(!(b in c))break t;c=c[b]}i=i[i.length-1],d=c[i],l=l(d),l!=d&&l!=null&&t(c,i,{configurable:!0,writable:!0,value:l})}}function o(i,l){i instanceof String&&(i+="");var c=0,d=!1,b={next:function(){if(!d&&c<i.length){var R=c++;return{value:l(R,i[R]),done:!1}}return d=!0,{done:!0,value:void 0}}};return b[Symbol.iterator]=function(){return b},b}s("Array.prototype.values",function(i){return i||function(){return o(this,function(l,c){return c})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},u=this||self;function h(i){var l=typeof i;return l=l!="object"?l:i?Array.isArray(i)?"array":l:"null",l=="array"||l=="object"&&typeof i.length=="number"}function f(i){var l=typeof i;return l=="object"&&i!=null||l=="function"}function m(i,l,c){return i.call.apply(i.bind,arguments)}function E(i,l,c){if(!i)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var b=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(b,d),i.apply(l,b)}}return function(){return i.apply(l,arguments)}}function v(i,l,c){return v=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?m:E,v.apply(null,arguments)}function A(i,l){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();return d.push.apply(d,arguments),i.apply(this,d)}}function C(i,l){function c(){}c.prototype=l.prototype,i.aa=l.prototype,i.prototype=new c,i.prototype.constructor=i,i.Qb=function(d,b,R){for(var L=Array(arguments.length-2),st=2;st<arguments.length;st++)L[st-2]=arguments[st];return l.prototype[b].apply(d,L)}}function M(i){const l=i.length;if(0<l){const c=Array(l);for(let d=0;d<l;d++)c[d]=i[d];return c}return[]}function S(i,l){for(let c=1;c<arguments.length;c++){const d=arguments[c];if(h(d)){const b=i.length||0,R=d.length||0;i.length=b+R;for(let L=0;L<R;L++)i[b+L]=d[L]}else i.push(d)}}class k{constructor(l,c){this.i=l,this.j=c,this.h=0,this.g=null}get(){let l;return 0<this.h?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function F(i){return/^[\s\xa0]*$/.test(i)}function O(){var i=u.navigator;return i&&(i=i.userAgent)?i:""}function Y(i){return Y[" "](i),i}Y[" "]=function(){};var G=O().indexOf("Gecko")!=-1&&!(O().toLowerCase().indexOf("webkit")!=-1&&O().indexOf("Edge")==-1)&&!(O().indexOf("Trident")!=-1||O().indexOf("MSIE")!=-1)&&O().indexOf("Edge")==-1;function x(i,l,c){for(const d in i)l.call(c,i[d],d,i)}function w(i,l){for(const c in i)l.call(void 0,i[c],c,i)}function g(i){const l={};for(const c in i)l[c]=i[c];return l}const p="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function y(i,l){let c,d;for(let b=1;b<arguments.length;b++){d=arguments[b];for(c in d)i[c]=d[c];for(let R=0;R<p.length;R++)c=p[R],Object.prototype.hasOwnProperty.call(d,c)&&(i[c]=d[c])}}function T(i){var l=1;i=i.split(":");const c=[];for(;0<l&&i.length;)c.push(i.shift()),l--;return i.length&&c.push(i.join(":")),c}function I(i){u.setTimeout(()=>{throw i},0)}function _(){var i=ke;let l=null;return i.g&&(l=i.g,i.g=i.g.next,i.g||(i.h=null),l.next=null),l}class it{constructor(){this.h=this.g=null}add(l,c){const d=z.get();d.set(l,c),this.h?this.h.next=d:this.g=d,this.h=d}}var z=new k(()=>new Vt,i=>i.reset());class Vt{constructor(){this.next=this.g=this.h=null}set(l,c){this.h=l,this.g=c,this.next=null}reset(){this.next=this.g=this.h=null}}let Wt,Qt=!1,ke=new it,yt=()=>{const i=u.Promise.resolve(void 0);Wt=()=>{i.then(xt)}};var xt=()=>{for(var i;i=_();){try{i.h.call(i.g)}catch(c){I(c)}var l=z;l.j(i),100>l.h&&(l.h++,i.next=l.g,l.g=i)}Qt=!1};function ne(){this.s=this.s,this.C=this.C}ne.prototype.s=!1,ne.prototype.ma=function(){this.s||(this.s=!0,this.N())},ne.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function It(i,l){this.type=i,this.g=this.target=l,this.defaultPrevented=!1}It.prototype.h=function(){this.defaultPrevented=!0};var gc=function(){if(!u.addEventListener||!Object.defineProperty)return!1;var i=!1,l=Object.defineProperty({},"passive",{get:function(){i=!0}});try{const c=()=>{};u.addEventListener("test",c,l),u.removeEventListener("test",c,l)}catch{}return i}();function ln(i,l){if(It.call(this,i?i.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,i){var c=this.type=i.type,d=i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:null;if(this.target=i.target||i.srcElement,this.g=l,l=i.relatedTarget){if(G){t:{try{Y(l.nodeName);var b=!0;break t}catch{}b=!1}b||(l=null)}}else c=="mouseover"?l=i.fromElement:c=="mouseout"&&(l=i.toElement);this.relatedTarget=l,d?(this.clientX=d.clientX!==void 0?d.clientX:d.pageX,this.clientY=d.clientY!==void 0?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0),this.button=i.button,this.key=i.key||"",this.ctrlKey=i.ctrlKey,this.altKey=i.altKey,this.shiftKey=i.shiftKey,this.metaKey=i.metaKey,this.pointerId=i.pointerId||0,this.pointerType=typeof i.pointerType=="string"?i.pointerType:_c[i.pointerType]||"",this.state=i.state,this.i=i,i.defaultPrevented&&ln.aa.h.call(this)}}C(ln,It);var _c={2:"touch",3:"pen",4:"mouse"};ln.prototype.h=function(){ln.aa.h.call(this);var i=this.i;i.preventDefault?i.preventDefault():i.returnValue=!1};var Xn="closure_listenable_"+(1e6*Math.random()|0),yc=0;function Ec(i,l,c,d,b){this.listener=i,this.proxy=null,this.src=l,this.type=c,this.capture=!!d,this.ha=b,this.key=++yc,this.da=this.fa=!1}function Yn(i){i.da=!0,i.listener=null,i.proxy=null,i.src=null,i.ha=null}function Jn(i){this.src=i,this.g={},this.h=0}Jn.prototype.add=function(i,l,c,d,b){var R=i.toString();i=this.g[R],i||(i=this.g[R]=[],this.h++);var L=us(i,l,d,b);return-1<L?(l=i[L],c||(l.fa=!1)):(l=new Ec(l,this.src,R,!!d,b),l.fa=c,i.push(l)),l};function ls(i,l){var c=l.type;if(c in i.g){var d=i.g[c],b=Array.prototype.indexOf.call(d,l,void 0),R;(R=0<=b)&&Array.prototype.splice.call(d,b,1),R&&(Yn(l),i.g[c].length==0&&(delete i.g[c],i.h--))}}function us(i,l,c,d){for(var b=0;b<i.length;++b){var R=i[b];if(!R.da&&R.listener==l&&R.capture==!!c&&R.ha==d)return b}return-1}var cs="closure_lm_"+(1e6*Math.random()|0),hs={};function Xi(i,l,c,d,b){if(Array.isArray(l)){for(var R=0;R<l.length;R++)Xi(i,l[R],c,d,b);return null}return c=Zi(c),i&&i[Xn]?i.K(l,c,f(d)?!!d.capture:!1,b):vc(i,l,c,!1,d,b)}function vc(i,l,c,d,b,R){if(!l)throw Error("Invalid event type");var L=f(b)?!!b.capture:!!b,st=ds(i);if(st||(i[cs]=st=new Jn(i)),c=st.add(l,c,d,L,R),c.proxy)return c;if(d=Tc(),c.proxy=d,d.src=i,d.listener=c,i.addEventListener)gc||(b=L),b===void 0&&(b=!1),i.addEventListener(l.toString(),d,b);else if(i.attachEvent)i.attachEvent(Ji(l.toString()),d);else if(i.addListener&&i.removeListener)i.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");return c}function Tc(){function i(c){return l.call(i.src,i.listener,c)}const l=wc;return i}function Yi(i,l,c,d,b){if(Array.isArray(l))for(var R=0;R<l.length;R++)Yi(i,l[R],c,d,b);else d=f(d)?!!d.capture:!!d,c=Zi(c),i&&i[Xn]?(i=i.i,l=String(l).toString(),l in i.g&&(R=i.g[l],c=us(R,c,d,b),-1<c&&(Yn(R[c]),Array.prototype.splice.call(R,c,1),R.length==0&&(delete i.g[l],i.h--)))):i&&(i=ds(i))&&(l=i.g[l.toString()],i=-1,l&&(i=us(l,c,d,b)),(c=-1<i?l[i]:null)&&fs(c))}function fs(i){if(typeof i!="number"&&i&&!i.da){var l=i.src;if(l&&l[Xn])ls(l.i,i);else{var c=i.type,d=i.proxy;l.removeEventListener?l.removeEventListener(c,d,i.capture):l.detachEvent?l.detachEvent(Ji(c),d):l.addListener&&l.removeListener&&l.removeListener(d),(c=ds(l))?(ls(c,i),c.h==0&&(c.src=null,l[cs]=null)):Yn(i)}}}function Ji(i){return i in hs?hs[i]:hs[i]="on"+i}function wc(i,l){if(i.da)i=!0;else{l=new ln(l,this);var c=i.listener,d=i.ha||i.src;i.fa&&fs(i),i=c.call(d,l)}return i}function ds(i){return i=i[cs],i instanceof Jn?i:null}var ms="__closure_events_fn_"+(1e9*Math.random()>>>0);function Zi(i){return typeof i=="function"?i:(i[ms]||(i[ms]=function(l){return i.handleEvent(l)}),i[ms])}function At(){ne.call(this),this.i=new Jn(this),this.M=this,this.F=null}C(At,ne),At.prototype[Xn]=!0,At.prototype.removeEventListener=function(i,l,c,d){Yi(this,i,l,c,d)};function Dt(i,l){var c,d=i.F;if(d)for(c=[];d;d=d.F)c.push(d);if(i=i.M,d=l.type||l,typeof l=="string")l=new It(l,i);else if(l instanceof It)l.target=l.target||i;else{var b=l;l=new It(d,i),y(l,b)}if(b=!0,c)for(var R=c.length-1;0<=R;R--){var L=l.g=c[R];b=Zn(L,d,!0,l)&&b}if(L=l.g=i,b=Zn(L,d,!0,l)&&b,b=Zn(L,d,!1,l)&&b,c)for(R=0;R<c.length;R++)L=l.g=c[R],b=Zn(L,d,!1,l)&&b}At.prototype.N=function(){if(At.aa.N.call(this),this.i){var i=this.i,l;for(l in i.g){for(var c=i.g[l],d=0;d<c.length;d++)Yn(c[d]);delete i.g[l],i.h--}}this.F=null},At.prototype.K=function(i,l,c,d){return this.i.add(String(i),l,!1,c,d)},At.prototype.L=function(i,l,c,d){return this.i.add(String(i),l,!0,c,d)};function Zn(i,l,c,d){if(l=i.i.g[String(l)],!l)return!0;l=l.concat();for(var b=!0,R=0;R<l.length;++R){var L=l[R];if(L&&!L.da&&L.capture==c){var st=L.listener,Et=L.ha||L.src;L.fa&&ls(i.i,L),b=st.call(Et,d)!==!1&&b}}return b&&!d.defaultPrevented}function to(i,l,c){if(typeof i=="function")c&&(i=v(i,c));else if(i&&typeof i.handleEvent=="function")i=v(i.handleEvent,i);else throw Error("Invalid listener argument");return 2147483647<Number(l)?-1:u.setTimeout(i,l||0)}function eo(i){i.g=to(()=>{i.g=null,i.i&&(i.i=!1,eo(i))},i.l);const l=i.h;i.h=null,i.m.apply(null,l)}class Ic extends ne{constructor(l,c){super(),this.m=l,this.l=c,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:eo(this)}N(){super.N(),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function un(i){ne.call(this),this.h=i,this.g={}}C(un,ne);var no=[];function ro(i){x(i.g,function(l,c){this.g.hasOwnProperty(c)&&fs(l)},i),i.g={}}un.prototype.N=function(){un.aa.N.call(this),ro(this)},un.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ps=u.JSON.stringify,Ac=u.JSON.parse,bc=class{stringify(i){return u.JSON.stringify(i,void 0)}parse(i){return u.JSON.parse(i,void 0)}};function gs(){}gs.prototype.h=null;function so(i){return i.h||(i.h=i.i())}function io(){}var cn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function _s(){It.call(this,"d")}C(_s,It);function ys(){It.call(this,"c")}C(ys,It);var ve={},oo=null;function tr(){return oo=oo||new At}ve.La="serverreachability";function ao(i){It.call(this,ve.La,i)}C(ao,It);function hn(i){const l=tr();Dt(l,new ao(l))}ve.STAT_EVENT="statevent";function lo(i,l){It.call(this,ve.STAT_EVENT,i),this.stat=l}C(lo,It);function kt(i){const l=tr();Dt(l,new lo(l,i))}ve.Ma="timingevent";function uo(i,l){It.call(this,ve.Ma,i),this.size=l}C(uo,It);function fn(i,l){if(typeof i!="function")throw Error("Fn must not be null and must be a function");return u.setTimeout(function(){i()},l)}function dn(){this.g=!0}dn.prototype.xa=function(){this.g=!1};function Rc(i,l,c,d,b,R){i.info(function(){if(i.g)if(R)for(var L="",st=R.split("&"),Et=0;Et<st.length;Et++){var tt=st[Et].split("=");if(1<tt.length){var bt=tt[0];tt=tt[1];var Rt=bt.split("_");L=2<=Rt.length&&Rt[1]=="type"?L+(bt+"="+tt+"&"):L+(bt+"=redacted&")}}else L=null;else L=R;return"XMLHTTP REQ ("+d+") [attempt "+b+"]: "+l+`
`+c+`
`+L})}function Cc(i,l,c,d,b,R,L){i.info(function(){return"XMLHTTP RESP ("+d+") [ attempt "+b+"]: "+l+`
`+c+`
`+R+" "+L})}function Ne(i,l,c,d){i.info(function(){return"XMLHTTP TEXT ("+l+"): "+Sc(i,c)+(d?" "+d:"")})}function Pc(i,l){i.info(function(){return"TIMEOUT: "+l})}dn.prototype.info=function(){};function Sc(i,l){if(!i.g)return l;if(!l)return null;try{var c=JSON.parse(l);if(c){for(i=0;i<c.length;i++)if(Array.isArray(c[i])){var d=c[i];if(!(2>d.length)){var b=d[1];if(Array.isArray(b)&&!(1>b.length)){var R=b[0];if(R!="noop"&&R!="stop"&&R!="close")for(var L=1;L<b.length;L++)b[L]=""}}}}return ps(c)}catch{return l}}var er={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},co={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Es;function nr(){}C(nr,gs),nr.prototype.g=function(){return new XMLHttpRequest},nr.prototype.i=function(){return{}},Es=new nr;function re(i,l,c,d){this.j=i,this.i=l,this.l=c,this.R=d||1,this.U=new un(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ho}function ho(){this.i=null,this.g="",this.h=!1}var fo={},vs={};function Ts(i,l,c){i.L=1,i.v=or(Xt(l)),i.m=c,i.P=!0,mo(i,null)}function mo(i,l){i.F=Date.now(),rr(i),i.A=Xt(i.v);var c=i.A,d=i.R;Array.isArray(d)||(d=[String(d)]),Po(c.i,"t",d),i.C=0,c=i.j.J,i.h=new ho,i.g=Ho(i.j,c?l:null,!i.m),0<i.O&&(i.M=new Ic(v(i.Y,i,i.g),i.O)),l=i.U,c=i.g,d=i.ca;var b="readystatechange";Array.isArray(b)||(b&&(no[0]=b.toString()),b=no);for(var R=0;R<b.length;R++){var L=Xi(c,b[R],d||l.handleEvent,!1,l.h||l);if(!L)break;l.g[L.key]=L}l=i.H?g(i.H):{},i.m?(i.u||(i.u="POST"),l["Content-Type"]="application/x-www-form-urlencoded",i.g.ea(i.A,i.u,i.m,l)):(i.u="GET",i.g.ea(i.A,i.u,null,l)),hn(),Rc(i.i,i.u,i.A,i.l,i.R,i.m)}re.prototype.ca=function(i){i=i.target;const l=this.M;l&&Yt(i)==3?l.j():this.Y(i)},re.prototype.Y=function(i){try{if(i==this.g)t:{const Rt=Yt(this.g);var l=this.g.Ba();const Le=this.g.Z();if(!(3>Rt)&&(Rt!=3||this.g&&(this.h.h||this.g.oa()||Oo(this.g)))){this.J||Rt!=4||l==7||(l==8||0>=Le?hn(3):hn(2)),ws(this);var c=this.g.Z();this.X=c;e:if(po(this)){var d=Oo(this.g);i="";var b=d.length,R=Yt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Te(this),mn(this);var L="";break e}this.h.i=new u.TextDecoder}for(l=0;l<b;l++)this.h.h=!0,i+=this.h.i.decode(d[l],{stream:!(R&&l==b-1)});d.length=0,this.h.g+=i,this.C=0,L=this.h.g}else L=this.g.oa();if(this.o=c==200,Cc(this.i,this.u,this.A,this.l,this.R,Rt,c),this.o){if(this.T&&!this.K){e:{if(this.g){var st,Et=this.g;if((st=Et.g?Et.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!F(st)){var tt=st;break e}}tt=null}if(c=tt)Ne(this.i,this.l,c,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Is(this,c);else{this.o=!1,this.s=3,kt(12),Te(this),mn(this);break t}}if(this.P){c=!0;let Ut;for(;!this.J&&this.C<L.length;)if(Ut=Vc(this,L),Ut==vs){Rt==4&&(this.s=4,kt(14),c=!1),Ne(this.i,this.l,null,"[Incomplete Response]");break}else if(Ut==fo){this.s=4,kt(15),Ne(this.i,this.l,L,"[Invalid Chunk]"),c=!1;break}else Ne(this.i,this.l,Ut,null),Is(this,Ut);if(po(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Rt!=4||L.length!=0||this.h.h||(this.s=1,kt(16),c=!1),this.o=this.o&&c,!c)Ne(this.i,this.l,L,"[Invalid Chunked Response]"),Te(this),mn(this);else if(0<L.length&&!this.W){this.W=!0;var bt=this.j;bt.g==this&&bt.ba&&!bt.M&&(bt.j.info("Great, no buffering proxy detected. Bytes received: "+L.length),Ss(bt),bt.M=!0,kt(11))}}else Ne(this.i,this.l,L,null),Is(this,L);Rt==4&&Te(this),this.o&&!this.J&&(Rt==4?qo(this.j,this):(this.o=!1,rr(this)))}else Kc(this.g),c==400&&0<L.indexOf("Unknown SID")?(this.s=3,kt(12)):(this.s=0,kt(13)),Te(this),mn(this)}}}catch{}finally{}};function po(i){return i.g?i.u=="GET"&&i.L!=2&&i.j.Ca:!1}function Vc(i,l){var c=i.C,d=l.indexOf(`
`,c);return d==-1?vs:(c=Number(l.substring(c,d)),isNaN(c)?fo:(d+=1,d+c>l.length?vs:(l=l.slice(d,d+c),i.C=d+c,l)))}re.prototype.cancel=function(){this.J=!0,Te(this)};function rr(i){i.S=Date.now()+i.I,go(i,i.I)}function go(i,l){if(i.B!=null)throw Error("WatchDog timer not null");i.B=fn(v(i.ba,i),l)}function ws(i){i.B&&(u.clearTimeout(i.B),i.B=null)}re.prototype.ba=function(){this.B=null;const i=Date.now();0<=i-this.S?(Pc(this.i,this.A),this.L!=2&&(hn(),kt(17)),Te(this),this.s=2,mn(this)):go(this,this.S-i)};function mn(i){i.j.G==0||i.J||qo(i.j,i)}function Te(i){ws(i);var l=i.M;l&&typeof l.ma=="function"&&l.ma(),i.M=null,ro(i.U),i.g&&(l=i.g,i.g=null,l.abort(),l.ma())}function Is(i,l){try{var c=i.j;if(c.G!=0&&(c.g==i||As(c.h,i))){if(!i.K&&As(c.h,i)&&c.G==3){try{var d=c.Da.g.parse(l)}catch{d=null}if(Array.isArray(d)&&d.length==3){var b=d;if(b[0]==0){t:if(!c.u){if(c.g)if(c.g.F+3e3<i.F)fr(c),cr(c);else break t;Ps(c),kt(18)}}else c.za=b[1],0<c.za-c.T&&37500>b[2]&&c.F&&c.v==0&&!c.C&&(c.C=fn(v(c.Za,c),6e3));if(1>=Eo(c.h)&&c.ca){try{c.ca()}catch{}c.ca=void 0}}else Ie(c,11)}else if((i.K||c.g==i)&&fr(c),!F(l))for(b=c.Da.g.parse(l),l=0;l<b.length;l++){let tt=b[l];if(c.T=tt[0],tt=tt[1],c.G==2)if(tt[0]=="c"){c.K=tt[1],c.ia=tt[2];const bt=tt[3];bt!=null&&(c.la=bt,c.j.info("VER="+c.la));const Rt=tt[4];Rt!=null&&(c.Aa=Rt,c.j.info("SVER="+c.Aa));const Le=tt[5];Le!=null&&typeof Le=="number"&&0<Le&&(d=1.5*Le,c.L=d,c.j.info("backChannelRequestTimeoutMs_="+d)),d=c;const Ut=i.g;if(Ut){const mr=Ut.g?Ut.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(mr){var R=d.h;R.g||mr.indexOf("spdy")==-1&&mr.indexOf("quic")==-1&&mr.indexOf("h2")==-1||(R.j=R.l,R.g=new Set,R.h&&(bs(R,R.h),R.h=null))}if(d.D){const Vs=Ut.g?Ut.g.getResponseHeader("X-HTTP-Session-Id"):null;Vs&&(d.ya=Vs,ot(d.I,d.D,Vs))}}c.G=3,c.l&&c.l.ua(),c.ba&&(c.R=Date.now()-i.F,c.j.info("Handshake RTT: "+c.R+"ms")),d=c;var L=i;if(d.qa=Go(d,d.J?d.ia:null,d.W),L.K){vo(d.h,L);var st=L,Et=d.L;Et&&(st.I=Et),st.B&&(ws(st),rr(st)),d.g=L}else Bo(d);0<c.i.length&&hr(c)}else tt[0]!="stop"&&tt[0]!="close"||Ie(c,7);else c.G==3&&(tt[0]=="stop"||tt[0]=="close"?tt[0]=="stop"?Ie(c,7):Cs(c):tt[0]!="noop"&&c.l&&c.l.ta(tt),c.v=0)}}hn(4)}catch{}}var Dc=class{constructor(i,l){this.g=i,this.map=l}};function _o(i){this.l=i||10,u.PerformanceNavigationTiming?(i=u.performance.getEntriesByType("navigation"),i=0<i.length&&(i[0].nextHopProtocol=="hq"||i[0].nextHopProtocol=="h2")):i=!!(u.chrome&&u.chrome.loadTimes&&u.chrome.loadTimes()&&u.chrome.loadTimes().wasFetchedViaSpdy),this.j=i?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function yo(i){return i.h?!0:i.g?i.g.size>=i.j:!1}function Eo(i){return i.h?1:i.g?i.g.size:0}function As(i,l){return i.h?i.h==l:i.g?i.g.has(l):!1}function bs(i,l){i.g?i.g.add(l):i.h=l}function vo(i,l){i.h&&i.h==l?i.h=null:i.g&&i.g.has(l)&&i.g.delete(l)}_o.prototype.cancel=function(){if(this.i=To(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const i of this.g.values())i.cancel();this.g.clear()}};function To(i){if(i.h!=null)return i.i.concat(i.h.D);if(i.g!=null&&i.g.size!==0){let l=i.i;for(const c of i.g.values())l=l.concat(c.D);return l}return M(i.i)}function kc(i){if(i.V&&typeof i.V=="function")return i.V();if(typeof Map<"u"&&i instanceof Map||typeof Set<"u"&&i instanceof Set)return Array.from(i.values());if(typeof i=="string")return i.split("");if(h(i)){for(var l=[],c=i.length,d=0;d<c;d++)l.push(i[d]);return l}l=[],c=0;for(d in i)l[c++]=i[d];return l}function Nc(i){if(i.na&&typeof i.na=="function")return i.na();if(!i.V||typeof i.V!="function"){if(typeof Map<"u"&&i instanceof Map)return Array.from(i.keys());if(!(typeof Set<"u"&&i instanceof Set)){if(h(i)||typeof i=="string"){var l=[];i=i.length;for(var c=0;c<i;c++)l.push(c);return l}l=[],c=0;for(const d in i)l[c++]=d;return l}}}function wo(i,l){if(i.forEach&&typeof i.forEach=="function")i.forEach(l,void 0);else if(h(i)||typeof i=="string")Array.prototype.forEach.call(i,l,void 0);else for(var c=Nc(i),d=kc(i),b=d.length,R=0;R<b;R++)l.call(void 0,d[R],c&&c[R],i)}var Io=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Mc(i,l){if(i){i=i.split("&");for(var c=0;c<i.length;c++){var d=i[c].indexOf("="),b=null;if(0<=d){var R=i[c].substring(0,d);b=i[c].substring(d+1)}else R=i[c];l(R,b?decodeURIComponent(b.replace(/\+/g," ")):"")}}}function we(i){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,i instanceof we){this.h=i.h,sr(this,i.j),this.o=i.o,this.g=i.g,ir(this,i.s),this.l=i.l;var l=i.i,c=new _n;c.i=l.i,l.g&&(c.g=new Map(l.g),c.h=l.h),Ao(this,c),this.m=i.m}else i&&(l=String(i).match(Io))?(this.h=!1,sr(this,l[1]||"",!0),this.o=pn(l[2]||""),this.g=pn(l[3]||"",!0),ir(this,l[4]),this.l=pn(l[5]||"",!0),Ao(this,l[6]||"",!0),this.m=pn(l[7]||"")):(this.h=!1,this.i=new _n(null,this.h))}we.prototype.toString=function(){var i=[],l=this.j;l&&i.push(gn(l,bo,!0),":");var c=this.g;return(c||l=="file")&&(i.push("//"),(l=this.o)&&i.push(gn(l,bo,!0),"@"),i.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.s,c!=null&&i.push(":",String(c))),(c=this.l)&&(this.g&&c.charAt(0)!="/"&&i.push("/"),i.push(gn(c,c.charAt(0)=="/"?Fc:Lc,!0))),(c=this.i.toString())&&i.push("?",c),(c=this.m)&&i.push("#",gn(c,Uc)),i.join("")};function Xt(i){return new we(i)}function sr(i,l,c){i.j=c?pn(l,!0):l,i.j&&(i.j=i.j.replace(/:$/,""))}function ir(i,l){if(l){if(l=Number(l),isNaN(l)||0>l)throw Error("Bad port number "+l);i.s=l}else i.s=null}function Ao(i,l,c){l instanceof _n?(i.i=l,Bc(i.i,i.h)):(c||(l=gn(l,xc)),i.i=new _n(l,i.h))}function ot(i,l,c){i.i.set(l,c)}function or(i){return ot(i,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),i}function pn(i,l){return i?l?decodeURI(i.replace(/%25/g,"%2525")):decodeURIComponent(i):""}function gn(i,l,c){return typeof i=="string"?(i=encodeURI(i).replace(l,Oc),c&&(i=i.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i):null}function Oc(i){return i=i.charCodeAt(0),"%"+(i>>4&15).toString(16)+(i&15).toString(16)}var bo=/[#\/\?@]/g,Lc=/[#\?:]/g,Fc=/[#\?]/g,xc=/[#\?@]/g,Uc=/#/g;function _n(i,l){this.h=this.g=null,this.i=i||null,this.j=!!l}function se(i){i.g||(i.g=new Map,i.h=0,i.i&&Mc(i.i,function(l,c){i.add(decodeURIComponent(l.replace(/\+/g," ")),c)}))}n=_n.prototype,n.add=function(i,l){se(this),this.i=null,i=Me(this,i);var c=this.g.get(i);return c||this.g.set(i,c=[]),c.push(l),this.h+=1,this};function Ro(i,l){se(i),l=Me(i,l),i.g.has(l)&&(i.i=null,i.h-=i.g.get(l).length,i.g.delete(l))}function Co(i,l){return se(i),l=Me(i,l),i.g.has(l)}n.forEach=function(i,l){se(this),this.g.forEach(function(c,d){c.forEach(function(b){i.call(l,b,d,this)},this)},this)},n.na=function(){se(this);const i=Array.from(this.g.values()),l=Array.from(this.g.keys()),c=[];for(let d=0;d<l.length;d++){const b=i[d];for(let R=0;R<b.length;R++)c.push(l[d])}return c},n.V=function(i){se(this);let l=[];if(typeof i=="string")Co(this,i)&&(l=l.concat(this.g.get(Me(this,i))));else{i=Array.from(this.g.values());for(let c=0;c<i.length;c++)l=l.concat(i[c])}return l},n.set=function(i,l){return se(this),this.i=null,i=Me(this,i),Co(this,i)&&(this.h-=this.g.get(i).length),this.g.set(i,[l]),this.h+=1,this},n.get=function(i,l){return i?(i=this.V(i),0<i.length?String(i[0]):l):l};function Po(i,l,c){Ro(i,l),0<c.length&&(i.i=null,i.g.set(Me(i,l),M(c)),i.h+=c.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const i=[],l=Array.from(this.g.keys());for(var c=0;c<l.length;c++){var d=l[c];const R=encodeURIComponent(String(d)),L=this.V(d);for(d=0;d<L.length;d++){var b=R;L[d]!==""&&(b+="="+encodeURIComponent(String(L[d]))),i.push(b)}}return this.i=i.join("&")};function Me(i,l){return l=String(l),i.j&&(l=l.toLowerCase()),l}function Bc(i,l){l&&!i.j&&(se(i),i.i=null,i.g.forEach(function(c,d){var b=d.toLowerCase();d!=b&&(Ro(this,d),Po(this,b,c))},i)),i.j=l}function jc(i,l){const c=new dn;if(u.Image){const d=new Image;d.onload=A(ie,c,"TestLoadImage: loaded",!0,l,d),d.onerror=A(ie,c,"TestLoadImage: error",!1,l,d),d.onabort=A(ie,c,"TestLoadImage: abort",!1,l,d),d.ontimeout=A(ie,c,"TestLoadImage: timeout",!1,l,d),u.setTimeout(function(){d.ontimeout&&d.ontimeout()},1e4),d.src=i}else l(!1)}function qc(i,l){const c=new dn,d=new AbortController,b=setTimeout(()=>{d.abort(),ie(c,"TestPingServer: timeout",!1,l)},1e4);fetch(i,{signal:d.signal}).then(R=>{clearTimeout(b),R.ok?ie(c,"TestPingServer: ok",!0,l):ie(c,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(b),ie(c,"TestPingServer: error",!1,l)})}function ie(i,l,c,d,b){try{b&&(b.onload=null,b.onerror=null,b.onabort=null,b.ontimeout=null),d(c)}catch{}}function zc(){this.g=new bc}function $c(i,l,c){const d=c||"";try{wo(i,function(b,R){let L=b;f(b)&&(L=ps(b)),l.push(d+R+"="+encodeURIComponent(L))})}catch(b){throw l.push(d+"type="+encodeURIComponent("_badmap")),b}}function ar(i){this.l=i.Ub||null,this.j=i.eb||!1}C(ar,gs),ar.prototype.g=function(){return new lr(this.l,this.j)},ar.prototype.i=function(i){return function(){return i}}({});function lr(i,l){At.call(this),this.D=i,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}C(lr,At),n=lr.prototype,n.open=function(i,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=i,this.A=l,this.readyState=1,En(this)},n.send=function(i){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const l={headers:this.u,method:this.B,credentials:this.m,cache:void 0};i&&(l.body=i),(this.D||u).fetch(new Request(this.A,l)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,yn(this)),this.readyState=0},n.Sa=function(i){if(this.g&&(this.l=i,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=i.headers,this.readyState=2,En(this)),this.g&&(this.readyState=3,En(this),this.g)))if(this.responseType==="arraybuffer")i.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof u.ReadableStream<"u"&&"body"in i){if(this.j=i.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;So(this)}else i.text().then(this.Ra.bind(this),this.ga.bind(this))};function So(i){i.j.read().then(i.Pa.bind(i)).catch(i.ga.bind(i))}n.Pa=function(i){if(this.g){if(this.o&&i.value)this.response.push(i.value);else if(!this.o){var l=i.value?i.value:new Uint8Array(0);(l=this.v.decode(l,{stream:!i.done}))&&(this.response=this.responseText+=l)}i.done?yn(this):En(this),this.readyState==3&&So(this)}},n.Ra=function(i){this.g&&(this.response=this.responseText=i,yn(this))},n.Qa=function(i){this.g&&(this.response=i,yn(this))},n.ga=function(){this.g&&yn(this)};function yn(i){i.readyState=4,i.l=null,i.j=null,i.v=null,En(i)}n.setRequestHeader=function(i,l){this.u.append(i,l)},n.getResponseHeader=function(i){return this.h&&this.h.get(i.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const i=[],l=this.h.entries();for(var c=l.next();!c.done;)c=c.value,i.push(c[0]+": "+c[1]),c=l.next();return i.join(`\r
`)};function En(i){i.onreadystatechange&&i.onreadystatechange.call(i)}Object.defineProperty(lr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(i){this.m=i?"include":"same-origin"}});function Vo(i){let l="";return x(i,function(c,d){l+=d,l+=":",l+=c,l+=`\r
`}),l}function Rs(i,l,c){t:{for(d in c){var d=!1;break t}d=!0}d||(c=Vo(c),typeof i=="string"?c!=null&&encodeURIComponent(String(c)):ot(i,l,c))}function ct(i){At.call(this),this.headers=new Map,this.o=i||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}C(ct,At);var Gc=/^https?$/i,Hc=["POST","PUT"];n=ct.prototype,n.Ha=function(i){this.J=i},n.ea=function(i,l,c,d){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+i);l=l?l.toUpperCase():"GET",this.D=i,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Es.g(),this.v=this.o?so(this.o):so(Es),this.g.onreadystatechange=v(this.Ea,this);try{this.B=!0,this.g.open(l,String(i),!0),this.B=!1}catch(R){Do(this,R);return}if(i=c||"",c=new Map(this.headers),d)if(Object.getPrototypeOf(d)===Object.prototype)for(var b in d)c.set(b,d[b]);else if(typeof d.keys=="function"&&typeof d.get=="function")for(const R of d.keys())c.set(R,d.get(R));else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(c.keys()).find(R=>R.toLowerCase()=="content-type"),b=u.FormData&&i instanceof u.FormData,!(0<=Array.prototype.indexOf.call(Hc,l,void 0))||d||b||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[R,L]of c)this.g.setRequestHeader(R,L);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Mo(this),this.u=!0,this.g.send(i),this.u=!1}catch(R){Do(this,R)}};function Do(i,l){i.h=!1,i.g&&(i.j=!0,i.g.abort(),i.j=!1),i.l=l,i.m=5,ko(i),ur(i)}function ko(i){i.A||(i.A=!0,Dt(i,"complete"),Dt(i,"error"))}n.abort=function(i){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=i||7,Dt(this,"complete"),Dt(this,"abort"),ur(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ur(this,!0)),ct.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?No(this):this.bb())},n.bb=function(){No(this)};function No(i){if(i.h&&typeof a<"u"&&(!i.v[1]||Yt(i)!=4||i.Z()!=2)){if(i.u&&Yt(i)==4)to(i.Ea,0,i);else if(Dt(i,"readystatechange"),Yt(i)==4){i.h=!1;try{const L=i.Z();t:switch(L){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break t;default:l=!1}var c;if(!(c=l)){var d;if(d=L===0){var b=String(i.D).match(Io)[1]||null;!b&&u.self&&u.self.location&&(b=u.self.location.protocol.slice(0,-1)),d=!Gc.test(b?b.toLowerCase():"")}c=d}if(c)Dt(i,"complete"),Dt(i,"success");else{i.m=6;try{var R=2<Yt(i)?i.g.statusText:""}catch{R=""}i.l=R+" ["+i.Z()+"]",ko(i)}}finally{ur(i)}}}}function ur(i,l){if(i.g){Mo(i);const c=i.g,d=i.v[0]?()=>{}:null;i.g=null,i.v=null,l||Dt(i,"ready");try{c.onreadystatechange=d}catch{}}}function Mo(i){i.I&&(u.clearTimeout(i.I),i.I=null)}n.isActive=function(){return!!this.g};function Yt(i){return i.g?i.g.readyState:0}n.Z=function(){try{return 2<Yt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(i){if(this.g){var l=this.g.responseText;return i&&l.indexOf(i)==0&&(l=l.substring(i.length)),Ac(l)}};function Oo(i){try{if(!i.g)return null;if("response"in i.g)return i.g.response;switch(i.H){case"":case"text":return i.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in i.g)return i.g.mozResponseArrayBuffer}return null}catch{return null}}function Kc(i){const l={};i=(i.g&&2<=Yt(i)&&i.g.getAllResponseHeaders()||"").split(`\r
`);for(let d=0;d<i.length;d++){if(F(i[d]))continue;var c=T(i[d]);const b=c[0];if(c=c[1],typeof c!="string")continue;c=c.trim();const R=l[b]||[];l[b]=R,R.push(c)}w(l,function(d){return d.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function vn(i,l,c){return c&&c.internalChannelParams&&c.internalChannelParams[i]||l}function Lo(i){this.Aa=0,this.i=[],this.j=new dn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=vn("failFast",!1,i),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=vn("baseRetryDelayMs",5e3,i),this.cb=vn("retryDelaySeedMs",1e4,i),this.Wa=vn("forwardChannelMaxRetries",2,i),this.wa=vn("forwardChannelRequestTimeoutMs",2e4,i),this.pa=i&&i.xmlHttpFactory||void 0,this.Xa=i&&i.Tb||void 0,this.Ca=i&&i.useFetchStreams||!1,this.L=void 0,this.J=i&&i.supportsCrossDomainXhr||!1,this.K="",this.h=new _o(i&&i.concurrentRequestLimit),this.Da=new zc,this.P=i&&i.fastHandshake||!1,this.O=i&&i.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=i&&i.Rb||!1,i&&i.xa&&this.j.xa(),i&&i.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&i&&i.detectBufferingProxy||!1,this.ja=void 0,i&&i.longPollingTimeout&&0<i.longPollingTimeout&&(this.ja=i.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Lo.prototype,n.la=8,n.G=1,n.connect=function(i,l,c,d){kt(0),this.W=i,this.H=l||{},c&&d!==void 0&&(this.H.OSID=c,this.H.OAID=d),this.F=this.X,this.I=Go(this,null,this.W),hr(this)};function Cs(i){if(Fo(i),i.G==3){var l=i.U++,c=Xt(i.I);if(ot(c,"SID",i.K),ot(c,"RID",l),ot(c,"TYPE","terminate"),Tn(i,c),l=new re(i,i.j,l),l.L=2,l.v=or(Xt(c)),c=!1,u.navigator&&u.navigator.sendBeacon)try{c=u.navigator.sendBeacon(l.v.toString(),"")}catch{}!c&&u.Image&&(new Image().src=l.v,c=!0),c||(l.g=Ho(l.j,null),l.g.ea(l.v)),l.F=Date.now(),rr(l)}$o(i)}function cr(i){i.g&&(Ss(i),i.g.cancel(),i.g=null)}function Fo(i){cr(i),i.u&&(u.clearTimeout(i.u),i.u=null),fr(i),i.h.cancel(),i.s&&(typeof i.s=="number"&&u.clearTimeout(i.s),i.s=null)}function hr(i){if(!yo(i.h)&&!i.s){i.s=!0;var l=i.Ga;Wt||yt(),Qt||(Wt(),Qt=!0),ke.add(l,i),i.B=0}}function Wc(i,l){return Eo(i.h)>=i.h.j-(i.s?1:0)?!1:i.s?(i.i=l.D.concat(i.i),!0):i.G==1||i.G==2||i.B>=(i.Va?0:i.Wa)?!1:(i.s=fn(v(i.Ga,i,l),zo(i,i.B)),i.B++,!0)}n.Ga=function(i){if(this.s)if(this.s=null,this.G==1){if(!i){this.U=Math.floor(1e5*Math.random()),i=this.U++;const b=new re(this,this.j,i);let R=this.o;if(this.S&&(R?(R=g(R),y(R,this.S)):R=this.S),this.m!==null||this.O||(b.H=R,R=null),this.P)t:{for(var l=0,c=0;c<this.i.length;c++){e:{var d=this.i[c];if("__data__"in d.map&&(d=d.map.__data__,typeof d=="string")){d=d.length;break e}d=void 0}if(d===void 0)break;if(l+=d,4096<l){l=c;break t}if(l===4096||c===this.i.length-1){l=c+1;break t}}l=1e3}else l=1e3;l=Uo(this,b,l),c=Xt(this.I),ot(c,"RID",i),ot(c,"CVER",22),this.D&&ot(c,"X-HTTP-Session-Id",this.D),Tn(this,c),R&&(this.O?l="headers="+encodeURIComponent(String(Vo(R)))+"&"+l:this.m&&Rs(c,this.m,R)),bs(this.h,b),this.Ua&&ot(c,"TYPE","init"),this.P?(ot(c,"$req",l),ot(c,"SID","null"),b.T=!0,Ts(b,c,null)):Ts(b,c,l),this.G=2}}else this.G==3&&(i?xo(this,i):this.i.length==0||yo(this.h)||xo(this))};function xo(i,l){var c;l?c=l.l:c=i.U++;const d=Xt(i.I);ot(d,"SID",i.K),ot(d,"RID",c),ot(d,"AID",i.T),Tn(i,d),i.m&&i.o&&Rs(d,i.m,i.o),c=new re(i,i.j,c,i.B+1),i.m===null&&(c.H=i.o),l&&(i.i=l.D.concat(i.i)),l=Uo(i,c,1e3),c.I=Math.round(.5*i.wa)+Math.round(.5*i.wa*Math.random()),bs(i.h,c),Ts(c,d,l)}function Tn(i,l){i.H&&x(i.H,function(c,d){ot(l,d,c)}),i.l&&wo({},function(c,d){ot(l,d,c)})}function Uo(i,l,c){c=Math.min(i.i.length,c);var d=i.l?v(i.l.Na,i.l,i):null;t:{var b=i.i;let R=-1;for(;;){const L=["count="+c];R==-1?0<c?(R=b[0].g,L.push("ofs="+R)):R=0:L.push("ofs="+R);let st=!0;for(let Et=0;Et<c;Et++){let tt=b[Et].g;const bt=b[Et].map;if(tt-=R,0>tt)R=Math.max(0,b[Et].g-100),st=!1;else try{$c(bt,L,"req"+tt+"_")}catch{d&&d(bt)}}if(st){d=L.join("&");break t}}}return i=i.i.splice(0,c),l.D=i,d}function Bo(i){if(!i.g&&!i.u){i.Y=1;var l=i.Fa;Wt||yt(),Qt||(Wt(),Qt=!0),ke.add(l,i),i.v=0}}function Ps(i){return i.g||i.u||3<=i.v?!1:(i.Y++,i.u=fn(v(i.Fa,i),zo(i,i.v)),i.v++,!0)}n.Fa=function(){if(this.u=null,jo(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var i=2*this.R;this.j.info("BP detection timer enabled: "+i),this.A=fn(v(this.ab,this),i)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,kt(10),cr(this),jo(this))};function Ss(i){i.A!=null&&(u.clearTimeout(i.A),i.A=null)}function jo(i){i.g=new re(i,i.j,"rpc",i.Y),i.m===null&&(i.g.H=i.o),i.g.O=0;var l=Xt(i.qa);ot(l,"RID","rpc"),ot(l,"SID",i.K),ot(l,"AID",i.T),ot(l,"CI",i.F?"0":"1"),!i.F&&i.ja&&ot(l,"TO",i.ja),ot(l,"TYPE","xmlhttp"),Tn(i,l),i.m&&i.o&&Rs(l,i.m,i.o),i.L&&(i.g.I=i.L);var c=i.g;i=i.ia,c.L=1,c.v=or(Xt(l)),c.m=null,c.P=!0,mo(c,i)}n.Za=function(){this.C!=null&&(this.C=null,cr(this),Ps(this),kt(19))};function fr(i){i.C!=null&&(u.clearTimeout(i.C),i.C=null)}function qo(i,l){var c=null;if(i.g==l){fr(i),Ss(i),i.g=null;var d=2}else if(As(i.h,l))c=l.D,vo(i.h,l),d=1;else return;if(i.G!=0){if(l.o)if(d==1){c=l.m?l.m.length:0,l=Date.now()-l.F;var b=i.B;d=tr(),Dt(d,new uo(d,c)),hr(i)}else Bo(i);else if(b=l.s,b==3||b==0&&0<l.X||!(d==1&&Wc(i,l)||d==2&&Ps(i)))switch(c&&0<c.length&&(l=i.h,l.i=l.i.concat(c)),b){case 1:Ie(i,5);break;case 4:Ie(i,10);break;case 3:Ie(i,6);break;default:Ie(i,2)}}}function zo(i,l){let c=i.Ta+Math.floor(Math.random()*i.cb);return i.isActive()||(c*=2),c*l}function Ie(i,l){if(i.j.info("Error code "+l),l==2){var c=v(i.fb,i),d=i.Xa;const b=!d;d=new we(d||"//www.google.com/images/cleardot.gif"),u.location&&u.location.protocol=="http"||sr(d,"https"),or(d),b?jc(d.toString(),c):qc(d.toString(),c)}else kt(2);i.G=0,i.l&&i.l.sa(l),$o(i),Fo(i)}n.fb=function(i){i?(this.j.info("Successfully pinged google.com"),kt(2)):(this.j.info("Failed to ping google.com"),kt(1))};function $o(i){if(i.G=0,i.ka=[],i.l){const l=To(i.h);(l.length!=0||i.i.length!=0)&&(S(i.ka,l),S(i.ka,i.i),i.h.i.length=0,M(i.i),i.i.length=0),i.l.ra()}}function Go(i,l,c){var d=c instanceof we?Xt(c):new we(c);if(d.g!="")l&&(d.g=l+"."+d.g),ir(d,d.s);else{var b=u.location;d=b.protocol,l=l?l+"."+b.hostname:b.hostname,b=+b.port;var R=new we(null);d&&sr(R,d),l&&(R.g=l),b&&ir(R,b),c&&(R.l=c),d=R}return c=i.D,l=i.ya,c&&l&&ot(d,c,l),ot(d,"VER",i.la),Tn(i,d),d}function Ho(i,l,c){if(l&&!i.J)throw Error("Can't create secondary domain capable XhrIo object.");return l=i.Ca&&!i.pa?new ct(new ar({eb:c})):new ct(i.pa),l.Ha(i.J),l}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ko(){}n=Ko.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function dr(){}dr.prototype.g=function(i,l){return new Mt(i,l)};function Mt(i,l){At.call(this),this.g=new Lo(l),this.l=i,this.h=l&&l.messageUrlParams||null,i=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(i?i["X-Client-Protocol"]="webchannel":i={"X-Client-Protocol":"webchannel"}),this.g.o=i,i=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(i?i["X-WebChannel-Content-Type"]=l.messageContentType:i={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.va&&(i?i["X-WebChannel-Client-Profile"]=l.va:i={"X-WebChannel-Client-Profile":l.va}),this.g.S=i,(i=l&&l.Sb)&&!F(i)&&(this.g.m=i),this.v=l&&l.supportsCrossDomainXhr||!1,this.u=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!F(l)&&(this.g.D=l,i=this.h,i!==null&&l in i&&(i=this.h,l in i&&delete i[l])),this.j=new Oe(this)}C(Mt,At),Mt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Mt.prototype.close=function(){Cs(this.g)},Mt.prototype.o=function(i){var l=this.g;if(typeof i=="string"){var c={};c.__data__=i,i=c}else this.u&&(c={},c.__data__=ps(i),i=c);l.i.push(new Dc(l.Ya++,i)),l.G==3&&hr(l)},Mt.prototype.N=function(){this.g.l=null,delete this.j,Cs(this.g),delete this.g,Mt.aa.N.call(this)};function Wo(i){_s.call(this),i.__headers__&&(this.headers=i.__headers__,this.statusCode=i.__status__,delete i.__headers__,delete i.__status__);var l=i.__sm__;if(l){t:{for(const c in l){i=c;break t}i=void 0}(this.i=i)&&(i=this.i,l=l!==null&&i in l?l[i]:void 0),this.data=l}else this.data=i}C(Wo,_s);function Qo(){ys.call(this),this.status=1}C(Qo,ys);function Oe(i){this.g=i}C(Oe,Ko),Oe.prototype.ua=function(){Dt(this.g,"a")},Oe.prototype.ta=function(i){Dt(this.g,new Wo(i))},Oe.prototype.sa=function(i){Dt(this.g,new Qo)},Oe.prototype.ra=function(){Dt(this.g,"b")},dr.prototype.createWebChannel=dr.prototype.g,Mt.prototype.send=Mt.prototype.o,Mt.prototype.open=Mt.prototype.m,Mt.prototype.close=Mt.prototype.close,zl=function(){return new dr},ql=function(){return tr()},jl=ve,Xs={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},er.NO_ERROR=0,er.TIMEOUT=8,er.HTTP_ERROR=6,Ar=er,co.COMPLETE="complete",Bl=co,io.EventType=cn,cn.OPEN="a",cn.CLOSE="b",cn.ERROR="c",cn.MESSAGE="d",At.prototype.listen=At.prototype.K,wn=io,ct.prototype.listenOnce=ct.prototype.L,ct.prototype.getLastError=ct.prototype.Ka,ct.prototype.getLastErrorCode=ct.prototype.Ba,ct.prototype.getStatus=ct.prototype.Z,ct.prototype.getResponseJson=ct.prototype.Oa,ct.prototype.getResponseText=ct.prototype.oa,ct.prototype.send=ct.prototype.ea,ct.prototype.setWithCredentials=ct.prototype.Ha,Ul=ct}).apply(typeof pr<"u"?pr:typeof self<"u"?self:typeof window<"u"?window:{});const Aa="@firebase/firestore",ba="4.7.10";/**
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
 */class Pt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Pt.UNAUTHENTICATED=new Pt(null),Pt.GOOGLE_CREDENTIALS=new Pt("google-credentials-uid"),Pt.FIRST_PARTY=new Pt("first-party-uid"),Pt.MOCK_USER=new Pt("mock-user");/**
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
 */const Re=new kl("@firebase/firestore");function Be(){return Re.logLevel}function U(n,...t){if(Re.logLevel<=Z.DEBUG){const e=t.map(yi);Re.debug(`Firestore (${nn}): ${n}`,...e)}}function te(n,...t){if(Re.logLevel<=Z.ERROR){const e=t.map(yi);Re.error(`Firestore (${nn}): ${n}`,...e)}}function We(n,...t){if(Re.logLevel<=Z.WARN){const e=t.map(yi);Re.warn(`Firestore (${nn}): ${n}`,...e)}}function yi(n){if(typeof n=="string")return n;try{/**
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
 */function $(n="Unexpected state"){const t=`FIRESTORE (${nn}) INTERNAL ASSERTION FAILED: `+n;throw te(t),new Error(t)}function rt(n,t){n||$()}function K(n,t){return n}/**
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
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class j extends en{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class he{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
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
 */class $l{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class sd{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(Pt.UNAUTHENTICATED))}shutdown(){}}class id{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class od{constructor(t){this.t=t,this.currentUser=Pt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){rt(this.o===void 0);let r=this.i;const s=h=>this.i!==r?(r=this.i,e(h)):Promise.resolve();let o=new he;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new he,t.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const h=o;t.enqueueRetryable(async()=>{await h.promise,await s(this.currentUser)})},u=h=>{U("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(h=>u(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?u(h):(U("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new he)}},0),a()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(r=>this.i!==t?(U("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(rt(typeof r.accessToken=="string"),new $l(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return rt(t===null||typeof t=="string"),new Pt(t)}}class ad{constructor(t,e,r){this.l=t,this.h=e,this.P=r,this.type="FirstParty",this.user=Pt.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.T.set("Authorization",t),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class ld{constructor(t,e,r){this.l=t,this.h=e,this.P=r}getToken(){return Promise.resolve(new ad(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(Pt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Ra{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ud{constructor(t,e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,zf(t)&&t.settings.appCheckToken&&(this.V=t.settings.appCheckToken)}start(t,e){rt(this.o===void 0);const r=o=>{o.error!=null&&U("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.R;return this.R=o.token,U("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>r(o))};const s=o=>{U("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>s(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?s(o):U("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new Ra(this.V));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(rt(typeof e.token=="string"),this.R=e.token,new Ra(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function cd(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
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
 */function Gl(){return new TextEncoder}/**
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
 */class Hl{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=cd(40);for(let o=0;o<s.length;++o)r.length<20&&s[o]<e&&(r+=t.charAt(s[o]%62))}return r}}function Q(n,t){return n<t?-1:n>t?1:0}function Ys(n,t){let e=0;for(;e<n.length&&e<t.length;){const r=n.codePointAt(e),s=t.codePointAt(e);if(r!==s){if(r<128&&s<128)return Q(r,s);{const o=Gl(),a=hd(o.encode(Ca(n,e)),o.encode(Ca(t,e)));return a!==0?a:Q(r,s)}}e+=r>65535?2:1}return Q(n.length,t.length)}function Ca(n,t){return n.codePointAt(t)>65535?n.substring(t,t+2):n.substring(t,t+1)}function hd(n,t){for(let e=0;e<n.length&&e<t.length;++e)if(n[e]!==t[e])return Q(n[e],t[e]);return Q(n.length,t.length)}function Qe(n,t,e){return n.length===t.length&&n.every((r,s)=>e(r,t[s]))}/**
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
 */const Pa=-62135596800,Sa=1e6;class pt{static now(){return pt.fromMillis(Date.now())}static fromDate(t){return pt.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor((t-1e3*e)*Sa);return new pt(e,r)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new j(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new j(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<Pa)throw new j(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new j(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Sa}_compareTo(t){return this.seconds===t.seconds?Q(this.nanoseconds,t.nanoseconds):Q(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds-Pa;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class H{static fromTimestamp(t){return new H(t)}static min(){return new H(new pt(0,0))}static max(){return new H(new pt(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Va="__name__";class zt{constructor(t,e,r){e===void 0?e=0:e>t.length&&$(),r===void 0?r=t.length-e:r>t.length-e&&$(),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return zt.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof zt?t.forEach(r=>{e.push(r)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let s=0;s<r;s++){const o=zt.compareSegments(t.get(s),e.get(s));if(o!==0)return o}return Q(t.length,e.length)}static compareSegments(t,e){const r=zt.isNumericId(t),s=zt.isNumericId(e);return r&&!s?-1:!r&&s?1:r&&s?zt.extractNumericId(t).compare(zt.extractNumericId(e)):Ys(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return ce.fromString(t.substring(4,t.length-2))}}class at extends zt{construct(t,e,r){return new at(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new j(V.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter(s=>s.length>0))}return new at(e)}static emptyPath(){return new at([])}}const fd=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Tt extends zt{construct(t,e,r){return new Tt(t,e,r)}static isValidIdentifier(t){return fd.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Tt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Va}static keyField(){return new Tt([Va])}static fromServerFormat(t){const e=[];let r="",s=0;const o=()=>{if(r.length===0)throw new j(V.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let a=!1;for(;s<t.length;){const u=t[s];if(u==="\\"){if(s+1===t.length)throw new j(V.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const h=t[s+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new j(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=h,s+=2}else u==="`"?(a=!a,s++):u!=="."||a?(r+=u,s++):(o(),s++)}if(o(),a)throw new j(V.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Tt(e)}static emptyPath(){return new Tt([])}}/**
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
 */const Ln=-1;function dd(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=H.fromTimestamp(r===1e9?new pt(e+1,0):new pt(e,r));return new me(s,q.empty(),t)}function md(n){return new me(n.readTime,n.key,Ln)}class me{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new me(H.min(),q.empty(),Ln)}static max(){return new me(H.max(),q.empty(),Ln)}}function pd(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=q.comparator(n.documentKey,t.documentKey),e!==0?e:Q(n.largestBatchId,t.largestBatchId))}/**
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
 */const gd="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class _d{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function rn(n){if(n.code!==V.FAILED_PRECONDITION||n.message!==gd)throw n;U("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class P{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&$(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new P((r,s)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(r,s)},this.catchCallback=o=>{this.wrapFailure(e,o).next(r,s)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof P?e:P.resolve(e)}catch(e){return P.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):P.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):P.reject(e)}static resolve(t){return new P((e,r)=>{e(t)})}static reject(t){return new P((e,r)=>{r(t)})}static waitFor(t){return new P((e,r)=>{let s=0,o=0,a=!1;t.forEach(u=>{++s,u.next(()=>{++o,a&&o===s&&e()},h=>r(h))}),a=!0,o===s&&e()})}static or(t){let e=P.resolve(!1);for(const r of t)e=e.next(s=>s?P.resolve(s):r());return e}static forEach(t,e){const r=[];return t.forEach((s,o)=>{r.push(e.call(this,s,o))}),this.waitFor(r)}static mapArray(t,e){return new P((r,s)=>{const o=t.length,a=new Array(o);let u=0;for(let h=0;h<o;h++){const f=h;e(t[f]).next(m=>{a[f]=m,++u,u===o&&r(a)},m=>s(m))}})}static doWhile(t,e){return new P((r,s)=>{const o=()=>{t()===!0?e().next(()=>{o()},s):r()};o()})}}function yd(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function sn(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Wr{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.oe(r),this._e=r=>e.writeSequenceNumber(r))}oe(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this._e&&this._e(t),t}}Wr.ae=-1;/**
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
 */const Ei=-1;function Qr(n){return n==null}function Or(n){return n===0&&1/n==-1/0}function Ed(n){return typeof n=="number"&&Number.isInteger(n)&&!Or(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const Kl="";function vd(n){let t="";for(let e=0;e<n.length;e++)t.length>0&&(t=Da(t)),t=Td(n.get(e),t);return Da(t)}function Td(n,t){let e=t;const r=n.length;for(let s=0;s<r;s++){const o=n.charAt(s);switch(o){case"\0":e+="";break;case Kl:e+="";break;default:e+=o}}return e}function Da(n){return n+Kl+""}/**
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
 */function ka(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function Pe(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function Wl(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
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
 */class ut{constructor(t,e){this.comparator=t,this.root=e||vt.EMPTY}insert(t,e){return new ut(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,vt.BLACK,null,null))}remove(t){return new ut(this.comparator,this.root.remove(t,this.comparator).copy(null,null,vt.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(t,r.key);if(s===0)return e+r.left.size;s<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,r)=>(t(e,r),!1))}toString(){const t=[];return this.inorderTraversal((e,r)=>(t.push(`${e}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new gr(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new gr(this.root,t,this.comparator,!1)}getReverseIterator(){return new gr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new gr(this.root,t,this.comparator,!0)}}class gr{constructor(t,e,r,s){this.isReverse=s,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?r(t.key,e):1,e&&s&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class vt{constructor(t,e,r,s,o){this.key=t,this.value=e,this.color=r??vt.RED,this.left=s??vt.EMPTY,this.right=o??vt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,s,o){return new vt(t??this.key,e??this.value,r??this.color,s??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let s=this;const o=r(t,s.key);return s=o<0?s.copy(null,null,null,s.left.insert(t,e,r),null):o===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return vt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return vt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,vt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,vt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw $();const t=this.left.check();if(t!==this.right.check())throw $();return t+(this.isRed()?0:1)}}vt.EMPTY=null,vt.RED=!0,vt.BLACK=!1;vt.EMPTY=new class{constructor(){this.size=0}get key(){throw $()}get value(){throw $()}get color(){throw $()}get left(){throw $()}get right(){throw $()}copy(t,e,r,s,o){return this}insert(t,e,r){return new vt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class gt{constructor(t){this.comparator=t,this.data=new ut(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,r)=>(t(e),!1))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Na(this.data.getIterator())}getIteratorFrom(t){return new Na(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(r=>{e=e.add(r)}),e}isEqual(t){if(!(t instanceof gt)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=r.getNext().key;if(this.comparator(s,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new gt(this.comparator);return e.data=t,e}}class Na{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Bt{constructor(t){this.fields=t,t.sort(Tt.comparator)}static empty(){return new Bt([])}unionWith(t){let e=new gt(Tt.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new Bt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Qe(this.fields,t.fields,(e,r)=>e.isEqual(r))}}/**
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
 */class Ql extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class wt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(s){try{return atob(s)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new Ql("Invalid base64 string: "+o):o}}(t);return new wt(e)}static fromUint8Array(t){const e=function(s){let o="";for(let a=0;a<s.length;++a)o+=String.fromCharCode(s[a]);return o}(t);return new wt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const r=new Uint8Array(e.length);for(let s=0;s<e.length;s++)r[s]=e.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return Q(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}wt.EMPTY_BYTE_STRING=new wt("");const wd=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function pe(n){if(rt(!!n),typeof n=="string"){let t=0;const e=wd.exec(n);if(rt(!!e),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:ft(n.seconds),nanos:ft(n.nanos)}}function ft(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function ge(n){return typeof n=="string"?wt.fromBase64String(n):wt.fromUint8Array(n)}/**
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
 */const Xl="server_timestamp",Yl="__type__",Jl="__previous_value__",Zl="__local_write_time__";function vi(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{})[Yl])===null||e===void 0?void 0:e.stringValue)===Xl}function Xr(n){const t=n.mapValue.fields[Jl];return vi(t)?Xr(t):t}function Fn(n){const t=pe(n.mapValue.fields[Zl].timestampValue);return new pt(t.seconds,t.nanos)}/**
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
 */class Id{constructor(t,e,r,s,o,a,u,h,f){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=s,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=u,this.longPollingOptions=h,this.useFetchStreams=f}}const Lr="(default)";class xn{constructor(t,e){this.projectId=t,this.database=e||Lr}static empty(){return new xn("","")}get isDefaultDatabase(){return this.database===Lr}isEqual(t){return t instanceof xn&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const tu="__type__",Ad="__max__",_r={mapValue:{}},eu="__vector__",Fr="value";function _e(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?vi(n)?4:Rd(n)?9007199254740991:bd(n)?10:11:$()}function Kt(n,t){if(n===t)return!0;const e=_e(n);if(e!==_e(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return Fn(n).isEqual(Fn(t));case 3:return function(s,o){if(typeof s.timestampValue=="string"&&typeof o.timestampValue=="string"&&s.timestampValue.length===o.timestampValue.length)return s.timestampValue===o.timestampValue;const a=pe(s.timestampValue),u=pe(o.timestampValue);return a.seconds===u.seconds&&a.nanos===u.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(s,o){return ge(s.bytesValue).isEqual(ge(o.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(s,o){return ft(s.geoPointValue.latitude)===ft(o.geoPointValue.latitude)&&ft(s.geoPointValue.longitude)===ft(o.geoPointValue.longitude)}(n,t);case 2:return function(s,o){if("integerValue"in s&&"integerValue"in o)return ft(s.integerValue)===ft(o.integerValue);if("doubleValue"in s&&"doubleValue"in o){const a=ft(s.doubleValue),u=ft(o.doubleValue);return a===u?Or(a)===Or(u):isNaN(a)&&isNaN(u)}return!1}(n,t);case 9:return Qe(n.arrayValue.values||[],t.arrayValue.values||[],Kt);case 10:case 11:return function(s,o){const a=s.mapValue.fields||{},u=o.mapValue.fields||{};if(ka(a)!==ka(u))return!1;for(const h in a)if(a.hasOwnProperty(h)&&(u[h]===void 0||!Kt(a[h],u[h])))return!1;return!0}(n,t);default:return $()}}function Un(n,t){return(n.values||[]).find(e=>Kt(e,t))!==void 0}function Xe(n,t){if(n===t)return 0;const e=_e(n),r=_e(t);if(e!==r)return Q(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return Q(n.booleanValue,t.booleanValue);case 2:return function(o,a){const u=ft(o.integerValue||o.doubleValue),h=ft(a.integerValue||a.doubleValue);return u<h?-1:u>h?1:u===h?0:isNaN(u)?isNaN(h)?0:-1:1}(n,t);case 3:return Ma(n.timestampValue,t.timestampValue);case 4:return Ma(Fn(n),Fn(t));case 5:return Ys(n.stringValue,t.stringValue);case 6:return function(o,a){const u=ge(o),h=ge(a);return u.compareTo(h)}(n.bytesValue,t.bytesValue);case 7:return function(o,a){const u=o.split("/"),h=a.split("/");for(let f=0;f<u.length&&f<h.length;f++){const m=Q(u[f],h[f]);if(m!==0)return m}return Q(u.length,h.length)}(n.referenceValue,t.referenceValue);case 8:return function(o,a){const u=Q(ft(o.latitude),ft(a.latitude));return u!==0?u:Q(ft(o.longitude),ft(a.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return Oa(n.arrayValue,t.arrayValue);case 10:return function(o,a){var u,h,f,m;const E=o.fields||{},v=a.fields||{},A=(u=E[Fr])===null||u===void 0?void 0:u.arrayValue,C=(h=v[Fr])===null||h===void 0?void 0:h.arrayValue,M=Q(((f=A==null?void 0:A.values)===null||f===void 0?void 0:f.length)||0,((m=C==null?void 0:C.values)===null||m===void 0?void 0:m.length)||0);return M!==0?M:Oa(A,C)}(n.mapValue,t.mapValue);case 11:return function(o,a){if(o===_r.mapValue&&a===_r.mapValue)return 0;if(o===_r.mapValue)return 1;if(a===_r.mapValue)return-1;const u=o.fields||{},h=Object.keys(u),f=a.fields||{},m=Object.keys(f);h.sort(),m.sort();for(let E=0;E<h.length&&E<m.length;++E){const v=Ys(h[E],m[E]);if(v!==0)return v;const A=Xe(u[h[E]],f[m[E]]);if(A!==0)return A}return Q(h.length,m.length)}(n.mapValue,t.mapValue);default:throw $()}}function Ma(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return Q(n,t);const e=pe(n),r=pe(t),s=Q(e.seconds,r.seconds);return s!==0?s:Q(e.nanos,r.nanos)}function Oa(n,t){const e=n.values||[],r=t.values||[];for(let s=0;s<e.length&&s<r.length;++s){const o=Xe(e[s],r[s]);if(o)return o}return Q(e.length,r.length)}function Ye(n){return Js(n)}function Js(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const r=pe(e);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return ge(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return q.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let r="[",s=!0;for(const o of e.values||[])s?s=!1:r+=",",r+=Js(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(e){const r=Object.keys(e.fields||{}).sort();let s="{",o=!0;for(const a of r)o?o=!1:s+=",",s+=`${a}:${Js(e.fields[a])}`;return s+"}"}(n.mapValue):$()}function br(n){switch(_e(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=Xr(n);return t?16+br(t):16;case 5:return 2*n.stringValue.length;case 6:return ge(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,o)=>s+br(o),0)}(n.arrayValue);case 10:case 11:return function(r){let s=0;return Pe(r.fields,(o,a)=>{s+=o.length+br(a)}),s}(n.mapValue);default:throw $()}}function La(n,t){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${t.path.canonicalString()}`}}function Zs(n){return!!n&&"integerValue"in n}function Ti(n){return!!n&&"arrayValue"in n}function Fa(n){return!!n&&"nullValue"in n}function xa(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Rr(n){return!!n&&"mapValue"in n}function bd(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{})[tu])===null||e===void 0?void 0:e.stringValue)===eu}function Sn(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return Pe(n.mapValue.fields,(e,r)=>t.mapValue.fields[e]=Sn(r)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=Sn(n.arrayValue.values[e]);return t}return Object.assign({},n)}function Rd(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===Ad}/**
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
 */class Lt{constructor(t){this.value=t}static empty(){return new Lt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!Rr(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Sn(e)}setAll(t){let e=Tt.emptyPath(),r={},s=[];t.forEach((a,u)=>{if(!e.isImmediateParentOf(u)){const h=this.getFieldsMap(e);this.applyChanges(h,r,s),r={},s=[],e=u.popLast()}a?r[u.lastSegment()]=Sn(a):s.push(u.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,r,s)}delete(t){const e=this.field(t.popLast());Rr(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Kt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=e.mapValue.fields[t.get(r)];Rr(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,r){Pe(e,(s,o)=>t[s]=o);for(const s of r)delete t[s]}clone(){return new Lt(Sn(this.value))}}function nu(n){const t=[];return Pe(n.fields,(e,r)=>{const s=new Tt([e]);if(Rr(r)){const o=nu(r.mapValue).fields;if(o.length===0)t.push(s);else for(const a of o)t.push(s.child(a))}else t.push(s)}),new Bt(t)}/**
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
 */class St{constructor(t,e,r,s,o,a,u){this.key=t,this.documentType=e,this.version=r,this.readTime=s,this.createTime=o,this.data=a,this.documentState=u}static newInvalidDocument(t){return new St(t,0,H.min(),H.min(),H.min(),Lt.empty(),0)}static newFoundDocument(t,e,r,s){return new St(t,1,e,H.min(),r,s,0)}static newNoDocument(t,e){return new St(t,2,e,H.min(),H.min(),Lt.empty(),0)}static newUnknownDocument(t,e){return new St(t,3,e,H.min(),H.min(),Lt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(H.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Lt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Lt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=H.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof St&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new St(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class xr{constructor(t,e){this.position=t,this.inclusive=e}}function Ua(n,t,e){let r=0;for(let s=0;s<n.position.length;s++){const o=t[s],a=n.position[s];if(o.field.isKeyField()?r=q.comparator(q.fromName(a.referenceValue),e.key):r=Xe(a,e.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function Ba(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!Kt(n.position[e],t.position[e]))return!1;return!0}/**
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
 */class Ur{constructor(t,e="asc"){this.field=t,this.dir=e}}function Cd(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
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
 */class ru{}class mt extends ru{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new Sd(t,e,r):e==="array-contains"?new kd(t,r):e==="in"?new Nd(t,r):e==="not-in"?new Md(t,r):e==="array-contains-any"?new Od(t,r):new mt(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new Vd(t,r):new Dd(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(Xe(e,this.value)):e!==null&&_e(this.value)===_e(e)&&this.matchesComparison(Xe(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return $()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class jt extends ru{constructor(t,e){super(),this.filters=t,this.op=e,this.ce=null}static create(t,e){return new jt(t,e)}matches(t){return su(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function su(n){return n.op==="and"}function iu(n){return Pd(n)&&su(n)}function Pd(n){for(const t of n.filters)if(t instanceof jt)return!1;return!0}function ti(n){if(n instanceof mt)return n.field.canonicalString()+n.op.toString()+Ye(n.value);if(iu(n))return n.filters.map(t=>ti(t)).join(",");{const t=n.filters.map(e=>ti(e)).join(",");return`${n.op}(${t})`}}function ou(n,t){return n instanceof mt?function(r,s){return s instanceof mt&&r.op===s.op&&r.field.isEqual(s.field)&&Kt(r.value,s.value)}(n,t):n instanceof jt?function(r,s){return s instanceof jt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((o,a,u)=>o&&ou(a,s.filters[u]),!0):!1}(n,t):void $()}function au(n){return n instanceof mt?function(e){return`${e.field.canonicalString()} ${e.op} ${Ye(e.value)}`}(n):n instanceof jt?function(e){return e.op.toString()+" {"+e.getFilters().map(au).join(" ,")+"}"}(n):"Filter"}class Sd extends mt{constructor(t,e,r){super(t,e,r),this.key=q.fromName(r.referenceValue)}matches(t){const e=q.comparator(t.key,this.key);return this.matchesComparison(e)}}class Vd extends mt{constructor(t,e){super(t,"in",e),this.keys=lu("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class Dd extends mt{constructor(t,e){super(t,"not-in",e),this.keys=lu("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function lu(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(r=>q.fromName(r.referenceValue))}class kd extends mt{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Ti(e)&&Un(e.arrayValue,this.value)}}class Nd extends mt{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&Un(this.value.arrayValue,e)}}class Md extends mt{constructor(t,e){super(t,"not-in",e)}matches(t){if(Un(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!Un(this.value.arrayValue,e)}}class Od extends mt{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Ti(e)||!e.arrayValue.values)&&e.arrayValue.values.some(r=>Un(this.value.arrayValue,r))}}/**
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
 */class Ld{constructor(t,e=null,r=[],s=[],o=null,a=null,u=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=s,this.limit=o,this.startAt=a,this.endAt=u,this.le=null}}function ja(n,t=null,e=[],r=[],s=null,o=null,a=null){return new Ld(n,t,e,r,s,o,a)}function wi(n){const t=K(n);if(t.le===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(r=>ti(r)).join(","),e+="|ob:",e+=t.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),Qr(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(r=>Ye(r)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(r=>Ye(r)).join(",")),t.le=e}return t.le}function Ii(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!Cd(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!ou(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!Ba(n.startAt,t.startAt)&&Ba(n.endAt,t.endAt)}function ei(n){return q.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class Gn{constructor(t,e=null,r=[],s=[],o=null,a="F",u=null,h=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=s,this.limit=o,this.limitType=a,this.startAt=u,this.endAt=h,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function Fd(n,t,e,r,s,o,a,u){return new Gn(n,t,e,r,s,o,a,u)}function uu(n){return new Gn(n)}function qa(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function cu(n){return n.collectionGroup!==null}function Vn(n){const t=K(n);if(t.he===null){t.he=[];const e=new Set;for(const o of t.explicitOrderBy)t.he.push(o),e.add(o.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let u=new gt(Tt.comparator);return a.filters.forEach(h=>{h.getFlattenedFilters().forEach(f=>{f.isInequality()&&(u=u.add(f.field))})}),u})(t).forEach(o=>{e.has(o.canonicalString())||o.isKeyField()||t.he.push(new Ur(o,r))}),e.has(Tt.keyField().canonicalString())||t.he.push(new Ur(Tt.keyField(),r))}return t.he}function $t(n){const t=K(n);return t.Pe||(t.Pe=xd(t,Vn(n))),t.Pe}function xd(n,t){if(n.limitType==="F")return ja(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(s=>{const o=s.dir==="desc"?"asc":"desc";return new Ur(s.field,o)});const e=n.endAt?new xr(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new xr(n.startAt.position,n.startAt.inclusive):null;return ja(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function ni(n,t){const e=n.filters.concat([t]);return new Gn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),e,n.limit,n.limitType,n.startAt,n.endAt)}function ri(n,t,e){return new Gn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function Yr(n,t){return Ii($t(n),$t(t))&&n.limitType===t.limitType}function hu(n){return`${wi($t(n))}|lt:${n.limitType}`}function je(n){return`Query(target=${function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map(s=>au(s)).join(", ")}]`),Qr(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map(s=>Ye(s)).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map(s=>Ye(s)).join(",")),`Target(${r})`}($t(n))}; limitType=${n.limitType})`}function Jr(n,t){return t.isFoundDocument()&&function(r,s){const o=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):q.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(n,t)&&function(r,s){for(const o of Vn(r))if(!o.field.isKeyField()&&s.data.field(o.field)===null)return!1;return!0}(n,t)&&function(r,s){for(const o of r.filters)if(!o.matches(s))return!1;return!0}(n,t)&&function(r,s){return!(r.startAt&&!function(a,u,h){const f=Ua(a,u,h);return a.inclusive?f<=0:f<0}(r.startAt,Vn(r),s)||r.endAt&&!function(a,u,h){const f=Ua(a,u,h);return a.inclusive?f>=0:f>0}(r.endAt,Vn(r),s))}(n,t)}function Ud(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function fu(n){return(t,e)=>{let r=!1;for(const s of Vn(n)){const o=Bd(s,t,e);if(o!==0)return o;r=r||s.field.isKeyField()}return 0}}function Bd(n,t,e){const r=n.field.isKeyField()?q.comparator(t.key,e.key):function(o,a,u){const h=a.data.field(o),f=u.data.field(o);return h!==null&&f!==null?Xe(h,f):$()}(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return $()}}/**
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
 */class Se{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[s,o]of r)if(this.equalsFn(s,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),s=this.inner[r];if(s===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],t))return void(s[o]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return r.length===1?delete this.inner[e]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(t){Pe(this.inner,(e,r)=>{for(const[s,o]of r)t(s,o)})}isEmpty(){return Wl(this.inner)}size(){return this.innerSize}}/**
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
 */const jd=new ut(q.comparator);function ee(){return jd}const du=new ut(q.comparator);function In(...n){let t=du;for(const e of n)t=t.insert(e.key,e);return t}function mu(n){let t=du;return n.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function be(){return Dn()}function pu(){return Dn()}function Dn(){return new Se(n=>n.toString(),(n,t)=>n.isEqual(t))}const qd=new ut(q.comparator),zd=new gt(q.comparator);function X(...n){let t=zd;for(const e of n)t=t.add(e);return t}const $d=new gt(Q);function Gd(){return $d}/**
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
 */function Ai(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Or(t)?"-0":t}}function gu(n){return{integerValue:""+n}}function Hd(n,t){return Ed(t)?gu(t):Ai(n,t)}/**
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
 */class Zr{constructor(){this._=void 0}}function Kd(n,t,e){return n instanceof Br?function(s,o){const a={fields:{[Yl]:{stringValue:Xl},[Zl]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return o&&vi(o)&&(o=Xr(o)),o&&(a.fields[Jl]=o),{mapValue:a}}(e,t):n instanceof Bn?yu(n,t):n instanceof jn?Eu(n,t):function(s,o){const a=_u(s,o),u=za(a)+za(s.Ie);return Zs(a)&&Zs(s.Ie)?gu(u):Ai(s.serializer,u)}(n,t)}function Wd(n,t,e){return n instanceof Bn?yu(n,t):n instanceof jn?Eu(n,t):e}function _u(n,t){return n instanceof jr?function(r){return Zs(r)||function(o){return!!o&&"doubleValue"in o}(r)}(t)?t:{integerValue:0}:null}class Br extends Zr{}class Bn extends Zr{constructor(t){super(),this.elements=t}}function yu(n,t){const e=vu(t);for(const r of n.elements)e.some(s=>Kt(s,r))||e.push(r);return{arrayValue:{values:e}}}class jn extends Zr{constructor(t){super(),this.elements=t}}function Eu(n,t){let e=vu(t);for(const r of n.elements)e=e.filter(s=>!Kt(s,r));return{arrayValue:{values:e}}}class jr extends Zr{constructor(t,e){super(),this.serializer=t,this.Ie=e}}function za(n){return ft(n.integerValue||n.doubleValue)}function vu(n){return Ti(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function Qd(n,t){return n.field.isEqual(t.field)&&function(r,s){return r instanceof Bn&&s instanceof Bn||r instanceof jn&&s instanceof jn?Qe(r.elements,s.elements,Kt):r instanceof jr&&s instanceof jr?Kt(r.Ie,s.Ie):r instanceof Br&&s instanceof Br}(n.transform,t.transform)}class Xd{constructor(t,e){this.version=t,this.transformResults=e}}class Jt{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Jt}static exists(t){return new Jt(void 0,t)}static updateTime(t){return new Jt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Cr(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class ts{}function Tu(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new Iu(n.key,Jt.none()):new Hn(n.key,n.data,Jt.none());{const e=n.data,r=Lt.empty();let s=new gt(Tt.comparator);for(let o of t.fields)if(!s.has(o)){let a=e.field(o);a===null&&o.length>1&&(o=o.popLast(),a=e.field(o)),a===null?r.delete(o):r.set(o,a),s=s.add(o)}return new Ve(n.key,r,new Bt(s.toArray()),Jt.none())}}function Yd(n,t,e){n instanceof Hn?function(s,o,a){const u=s.value.clone(),h=Ga(s.fieldTransforms,o,a.transformResults);u.setAll(h),o.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(n,t,e):n instanceof Ve?function(s,o,a){if(!Cr(s.precondition,o))return void o.convertToUnknownDocument(a.version);const u=Ga(s.fieldTransforms,o,a.transformResults),h=o.data;h.setAll(wu(s)),h.setAll(u),o.convertToFoundDocument(a.version,h).setHasCommittedMutations()}(n,t,e):function(s,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()}(0,t,e)}function kn(n,t,e,r){return n instanceof Hn?function(o,a,u,h){if(!Cr(o.precondition,a))return u;const f=o.value.clone(),m=Ha(o.fieldTransforms,h,a);return f.setAll(m),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),null}(n,t,e,r):n instanceof Ve?function(o,a,u,h){if(!Cr(o.precondition,a))return u;const f=Ha(o.fieldTransforms,h,a),m=a.data;return m.setAll(wu(o)),m.setAll(f),a.convertToFoundDocument(a.version,m).setHasLocalMutations(),u===null?null:u.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(E=>E.field))}(n,t,e,r):function(o,a,u){return Cr(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):u}(n,t,e)}function Jd(n,t){let e=null;for(const r of n.fieldTransforms){const s=t.data.field(r.field),o=_u(r.transform,s||null);o!=null&&(e===null&&(e=Lt.empty()),e.set(r.field,o))}return e||null}function $a(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Qe(r,s,(o,a)=>Qd(o,a))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class Hn extends ts{constructor(t,e,r,s=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Ve extends ts{constructor(t,e,r,s,o=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=s,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function wu(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}}),t}function Ga(n,t,e){const r=new Map;rt(n.length===e.length);for(let s=0;s<e.length;s++){const o=n[s],a=o.transform,u=t.data.field(o.field);r.set(o.field,Wd(a,u,e[s]))}return r}function Ha(n,t,e){const r=new Map;for(const s of n){const o=s.transform,a=e.data.field(s.field);r.set(s.field,Kd(o,a,t))}return r}class Iu extends ts{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Zd extends ts{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class tm{constructor(t,e,r,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const o=this.mutations[s];o.key.isEqual(t.key)&&Yd(o,t,r[s])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=kn(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=kn(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=pu();return this.mutations.forEach(s=>{const o=t.get(s.key),a=o.overlayedDocument;let u=this.applyToLocalView(a,o.mutatedFields);u=e.has(s.key)?null:u;const h=Tu(a,u);h!==null&&r.set(s.key,h),a.isValidDocument()||a.convertToNoDocument(H.min())}),r}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),X())}isEqual(t){return this.batchId===t.batchId&&Qe(this.mutations,t.mutations,(e,r)=>$a(e,r))&&Qe(this.baseMutations,t.baseMutations,(e,r)=>$a(e,r))}}class bi{constructor(t,e,r,s){this.batch=t,this.commitVersion=e,this.mutationResults=r,this.docVersions=s}static from(t,e,r){rt(t.mutations.length===r.length);let s=function(){return qd}();const o=t.mutations;for(let a=0;a<o.length;a++)s=s.insert(o[a].key,r[a].version);return new bi(t,e,r,s)}}/**
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
 */class em{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class nm{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
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
 */var dt,J;function rm(n){switch(n){case V.OK:return $();case V.CANCELLED:case V.UNKNOWN:case V.DEADLINE_EXCEEDED:case V.RESOURCE_EXHAUSTED:case V.INTERNAL:case V.UNAVAILABLE:case V.UNAUTHENTICATED:return!1;case V.INVALID_ARGUMENT:case V.NOT_FOUND:case V.ALREADY_EXISTS:case V.PERMISSION_DENIED:case V.FAILED_PRECONDITION:case V.ABORTED:case V.OUT_OF_RANGE:case V.UNIMPLEMENTED:case V.DATA_LOSS:return!0;default:return $()}}function Au(n){if(n===void 0)return te("GRPC error has no .code"),V.UNKNOWN;switch(n){case dt.OK:return V.OK;case dt.CANCELLED:return V.CANCELLED;case dt.UNKNOWN:return V.UNKNOWN;case dt.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case dt.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case dt.INTERNAL:return V.INTERNAL;case dt.UNAVAILABLE:return V.UNAVAILABLE;case dt.UNAUTHENTICATED:return V.UNAUTHENTICATED;case dt.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case dt.NOT_FOUND:return V.NOT_FOUND;case dt.ALREADY_EXISTS:return V.ALREADY_EXISTS;case dt.PERMISSION_DENIED:return V.PERMISSION_DENIED;case dt.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case dt.ABORTED:return V.ABORTED;case dt.OUT_OF_RANGE:return V.OUT_OF_RANGE;case dt.UNIMPLEMENTED:return V.UNIMPLEMENTED;case dt.DATA_LOSS:return V.DATA_LOSS;default:return $()}}(J=dt||(dt={}))[J.OK=0]="OK",J[J.CANCELLED=1]="CANCELLED",J[J.UNKNOWN=2]="UNKNOWN",J[J.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",J[J.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",J[J.NOT_FOUND=5]="NOT_FOUND",J[J.ALREADY_EXISTS=6]="ALREADY_EXISTS",J[J.PERMISSION_DENIED=7]="PERMISSION_DENIED",J[J.UNAUTHENTICATED=16]="UNAUTHENTICATED",J[J.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",J[J.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",J[J.ABORTED=10]="ABORTED",J[J.OUT_OF_RANGE=11]="OUT_OF_RANGE",J[J.UNIMPLEMENTED=12]="UNIMPLEMENTED",J[J.INTERNAL=13]="INTERNAL",J[J.UNAVAILABLE=14]="UNAVAILABLE",J[J.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const sm=new ce([4294967295,4294967295],0);function Ka(n){const t=Gl().encode(n),e=new xl;return e.update(t),new Uint8Array(e.digest())}function Wa(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),s=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new ce([e,r],0),new ce([s,o],0)]}class Ri{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new An(`Invalid padding: ${e}`);if(r<0)throw new An(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new An(`Invalid hash count: ${r}`);if(t.length===0&&e!==0)throw new An(`Invalid padding when bitmap length is 0: ${e}`);this.Ee=8*t.length-e,this.de=ce.fromNumber(this.Ee)}Ae(t,e,r){let s=t.add(e.multiply(ce.fromNumber(r)));return s.compare(sm)===1&&(s=new ce([s.getBits(0),s.getBits(1)],0)),s.modulo(this.de).toNumber()}Re(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.Ee===0)return!1;const e=Ka(t),[r,s]=Wa(e);for(let o=0;o<this.hashCount;o++){const a=this.Ae(r,s,o);if(!this.Re(a))return!1}return!0}static create(t,e,r){const s=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),a=new Ri(o,s,e);return r.forEach(u=>a.insert(u)),a}insert(t){if(this.Ee===0)return;const e=Ka(t),[r,s]=Wa(e);for(let o=0;o<this.hashCount;o++){const a=this.Ae(r,s,o);this.Ve(a)}}Ve(t){const e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}}class An extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class es{constructor(t,e,r,s,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,r){const s=new Map;return s.set(t,Kn.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new es(H.min(),s,new ut(Q),ee(),X())}}class Kn{constructor(t,e,r,s,o){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new Kn(r,e,X(),X(),X())}}/**
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
 */class Pr{constructor(t,e,r,s){this.me=t,this.removedTargetIds=e,this.key=r,this.fe=s}}class bu{constructor(t,e){this.targetId=t,this.ge=e}}class Ru{constructor(t,e,r=wt.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=s}}class Qa{constructor(){this.pe=0,this.ye=Xa(),this.we=wt.EMPTY_BYTE_STRING,this.Se=!1,this.be=!0}get current(){return this.Se}get resumeToken(){return this.we}get De(){return this.pe!==0}get ve(){return this.be}Ce(t){t.approximateByteSize()>0&&(this.be=!0,this.we=t)}Fe(){let t=X(),e=X(),r=X();return this.ye.forEach((s,o)=>{switch(o){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:r=r.add(s);break;default:$()}}),new Kn(this.we,this.Se,t,e,r)}Me(){this.be=!1,this.ye=Xa()}xe(t,e){this.be=!0,this.ye=this.ye.insert(t,e)}Oe(t){this.be=!0,this.ye=this.ye.remove(t)}Ne(){this.pe+=1}Be(){this.pe-=1,rt(this.pe>=0)}Le(){this.be=!0,this.Se=!0}}class im{constructor(t){this.ke=t,this.qe=new Map,this.Qe=ee(),this.$e=yr(),this.Ue=yr(),this.Ke=new ut(Q)}We(t){for(const e of t.me)t.fe&&t.fe.isFoundDocument()?this.Ge(e,t.fe):this.ze(e,t.key,t.fe);for(const e of t.removedTargetIds)this.ze(e,t.key,t.fe)}je(t){this.forEachTarget(t,e=>{const r=this.He(e);switch(t.state){case 0:this.Je(e)&&r.Ce(t.resumeToken);break;case 1:r.Be(),r.De||r.Me(),r.Ce(t.resumeToken);break;case 2:r.Be(),r.De||this.removeTarget(e);break;case 3:this.Je(e)&&(r.Le(),r.Ce(t.resumeToken));break;case 4:this.Je(e)&&(this.Ye(e),r.Ce(t.resumeToken));break;default:$()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.qe.forEach((r,s)=>{this.Je(s)&&e(s)})}Ze(t){const e=t.targetId,r=t.ge.count,s=this.Xe(e);if(s){const o=s.target;if(ei(o))if(r===0){const a=new q(o.path);this.ze(e,a,St.newNoDocument(a,H.min()))}else rt(r===1);else{const a=this.et(e);if(a!==r){const u=this.tt(t),h=u?this.nt(u,t,a):1;if(h!==0){this.Ye(e);const f=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(e,f)}}}}}tt(t){const e=t.ge.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:o=0}=e;let a,u;try{a=ge(r).toUint8Array()}catch(h){if(h instanceof Ql)return We("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{u=new Ri(a,s,o)}catch(h){return We(h instanceof An?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return u.Ee===0?null:u}nt(t,e,r){return e.ge.count===r-this.st(t,e.targetId)?0:2}st(t,e){const r=this.ke.getRemoteKeysForTarget(e);let s=0;return r.forEach(o=>{const a=this.ke.it(),u=`projects/${a.projectId}/databases/${a.database}/documents/${o.path.canonicalString()}`;t.mightContain(u)||(this.ze(e,o,null),s++)}),s}ot(t){const e=new Map;this.qe.forEach((o,a)=>{const u=this.Xe(a);if(u){if(o.current&&ei(u.target)){const h=new q(u.target.path);this._t(h).has(a)||this.ut(a,h)||this.ze(a,h,St.newNoDocument(h,t))}o.ve&&(e.set(a,o.Fe()),o.Me())}});let r=X();this.Ue.forEach((o,a)=>{let u=!0;a.forEachWhile(h=>{const f=this.Xe(h);return!f||f.purpose==="TargetPurposeLimboResolution"||(u=!1,!1)}),u&&(r=r.add(o))}),this.Qe.forEach((o,a)=>a.setReadTime(t));const s=new es(t,e,this.Ke,this.Qe,r);return this.Qe=ee(),this.$e=yr(),this.Ue=yr(),this.Ke=new ut(Q),s}Ge(t,e){if(!this.Je(t))return;const r=this.ut(t,e.key)?2:0;this.He(t).xe(e.key,r),this.Qe=this.Qe.insert(e.key,e),this.$e=this.$e.insert(e.key,this._t(e.key).add(t)),this.Ue=this.Ue.insert(e.key,this.ct(e.key).add(t))}ze(t,e,r){if(!this.Je(t))return;const s=this.He(t);this.ut(t,e)?s.xe(e,1):s.Oe(e),this.Ue=this.Ue.insert(e,this.ct(e).delete(t)),this.Ue=this.Ue.insert(e,this.ct(e).add(t)),r&&(this.Qe=this.Qe.insert(e,r))}removeTarget(t){this.qe.delete(t)}et(t){const e=this.He(t).Fe();return this.ke.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Ne(t){this.He(t).Ne()}He(t){let e=this.qe.get(t);return e||(e=new Qa,this.qe.set(t,e)),e}ct(t){let e=this.Ue.get(t);return e||(e=new gt(Q),this.Ue=this.Ue.insert(t,e)),e}_t(t){let e=this.$e.get(t);return e||(e=new gt(Q),this.$e=this.$e.insert(t,e)),e}Je(t){const e=this.Xe(t)!==null;return e||U("WatchChangeAggregator","Detected inactive target",t),e}Xe(t){const e=this.qe.get(t);return e&&e.De?null:this.ke.lt(t)}Ye(t){this.qe.set(t,new Qa),this.ke.getRemoteKeysForTarget(t).forEach(e=>{this.ze(t,e,null)})}ut(t,e){return this.ke.getRemoteKeysForTarget(t).has(e)}}function yr(){return new ut(q.comparator)}function Xa(){return new ut(q.comparator)}const om={asc:"ASCENDING",desc:"DESCENDING"},am={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},lm={and:"AND",or:"OR"};class um{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function si(n,t){return n.useProto3Json||Qr(t)?t:{value:t}}function qr(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Cu(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function cm(n,t){return qr(n,t.toTimestamp())}function Gt(n){return rt(!!n),H.fromTimestamp(function(e){const r=pe(e);return new pt(r.seconds,r.nanos)}(n))}function Ci(n,t){return ii(n,t).canonicalString()}function ii(n,t){const e=function(s){return new at(["projects",s.projectId,"databases",s.database])}(n).child("documents");return t===void 0?e:e.child(t)}function Pu(n){const t=at.fromString(n);return rt(Nu(t)),t}function oi(n,t){return Ci(n.databaseId,t.path)}function xs(n,t){const e=Pu(t);if(e.get(1)!==n.databaseId.projectId)throw new j(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new j(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new q(Vu(e))}function Su(n,t){return Ci(n.databaseId,t)}function hm(n){const t=Pu(n);return t.length===4?at.emptyPath():Vu(t)}function ai(n){return new at(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Vu(n){return rt(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Ya(n,t,e){return{name:oi(n,t),fields:e.value.mapValue.fields}}function fm(n,t){let e;if("targetChange"in t){t.targetChange;const r=function(f){return f==="NO_CHANGE"?0:f==="ADD"?1:f==="REMOVE"?2:f==="CURRENT"?3:f==="RESET"?4:$()}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],o=function(f,m){return f.useProto3Json?(rt(m===void 0||typeof m=="string"),wt.fromBase64String(m||"")):(rt(m===void 0||m instanceof Buffer||m instanceof Uint8Array),wt.fromUint8Array(m||new Uint8Array))}(n,t.targetChange.resumeToken),a=t.targetChange.cause,u=a&&function(f){const m=f.code===void 0?V.UNKNOWN:Au(f.code);return new j(m,f.message||"")}(a);e=new Ru(r,s,o,u||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=xs(n,r.document.name),o=Gt(r.document.updateTime),a=r.document.createTime?Gt(r.document.createTime):H.min(),u=new Lt({mapValue:{fields:r.document.fields}}),h=St.newFoundDocument(s,o,a,u),f=r.targetIds||[],m=r.removedTargetIds||[];e=new Pr(f,m,h.key,h)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=xs(n,r.document),o=r.readTime?Gt(r.readTime):H.min(),a=St.newNoDocument(s,o),u=r.removedTargetIds||[];e=new Pr([],u,a.key,a)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=xs(n,r.document),o=r.removedTargetIds||[];e=new Pr([],o,s,null)}else{if(!("filter"in t))return $();{t.filter;const r=t.filter;r.targetId;const{count:s=0,unchangedNames:o}=r,a=new nm(s,o),u=r.targetId;e=new bu(u,a)}}return e}function dm(n,t){let e;if(t instanceof Hn)e={update:Ya(n,t.key,t.value)};else if(t instanceof Iu)e={delete:oi(n,t.key)};else if(t instanceof Ve)e={update:Ya(n,t.key,t.data),updateMask:wm(t.fieldMask)};else{if(!(t instanceof Zd))return $();e={verify:oi(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(r=>function(o,a){const u=a.transform;if(u instanceof Br)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(u instanceof Bn)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:u.elements}};if(u instanceof jn)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:u.elements}};if(u instanceof jr)return{fieldPath:a.field.canonicalString(),increment:u.Ie};throw $()}(0,r))),t.precondition.isNone||(e.currentDocument=function(s,o){return o.updateTime!==void 0?{updateTime:cm(s,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:$()}(n,t.precondition)),e}function mm(n,t){return n&&n.length>0?(rt(t!==void 0),n.map(e=>function(s,o){let a=s.updateTime?Gt(s.updateTime):Gt(o);return a.isEqual(H.min())&&(a=Gt(o)),new Xd(a,s.transformResults||[])}(e,t))):[]}function pm(n,t){return{documents:[Su(n,t.path)]}}function gm(n,t){const e={structuredQuery:{}},r=t.path;let s;t.collectionGroup!==null?(s=r,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=r.popLast(),e.structuredQuery.from=[{collectionId:r.lastSegment()}]),e.parent=Su(n,s);const o=function(f){if(f.length!==0)return ku(jt.create(f,"and"))}(t.filters);o&&(e.structuredQuery.where=o);const a=function(f){if(f.length!==0)return f.map(m=>function(v){return{field:qe(v.field),direction:Em(v.dir)}}(m))}(t.orderBy);a&&(e.structuredQuery.orderBy=a);const u=si(n,t.limit);return u!==null&&(e.structuredQuery.limit=u),t.startAt&&(e.structuredQuery.startAt=function(f){return{before:f.inclusive,values:f.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(f){return{before:!f.inclusive,values:f.position}}(t.endAt)),{ht:e,parent:s}}function _m(n){let t=hm(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let s=null;if(r>0){rt(r===1);const m=e.from[0];m.allDescendants?s=m.collectionId:t=t.child(m.collectionId)}let o=[];e.where&&(o=function(E){const v=Du(E);return v instanceof jt&&iu(v)?v.getFilters():[v]}(e.where));let a=[];e.orderBy&&(a=function(E){return E.map(v=>function(C){return new Ur(ze(C.field),function(S){switch(S){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(C.direction))}(v))}(e.orderBy));let u=null;e.limit&&(u=function(E){let v;return v=typeof E=="object"?E.value:E,Qr(v)?null:v}(e.limit));let h=null;e.startAt&&(h=function(E){const v=!!E.before,A=E.values||[];return new xr(A,v)}(e.startAt));let f=null;return e.endAt&&(f=function(E){const v=!E.before,A=E.values||[];return new xr(A,v)}(e.endAt)),Fd(t,s,a,o,u,"F",h,f)}function ym(n,t){const e=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return $()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function Du(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=ze(e.unaryFilter.field);return mt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=ze(e.unaryFilter.field);return mt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=ze(e.unaryFilter.field);return mt.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=ze(e.unaryFilter.field);return mt.create(a,"!=",{nullValue:"NULL_VALUE"});default:return $()}}(n):n.fieldFilter!==void 0?function(e){return mt.create(ze(e.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return $()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return jt.create(e.compositeFilter.filters.map(r=>Du(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return $()}}(e.compositeFilter.op))}(n):$()}function Em(n){return om[n]}function vm(n){return am[n]}function Tm(n){return lm[n]}function qe(n){return{fieldPath:n.canonicalString()}}function ze(n){return Tt.fromServerFormat(n.fieldPath)}function ku(n){return n instanceof mt?function(e){if(e.op==="=="){if(xa(e.value))return{unaryFilter:{field:qe(e.field),op:"IS_NAN"}};if(Fa(e.value))return{unaryFilter:{field:qe(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(xa(e.value))return{unaryFilter:{field:qe(e.field),op:"IS_NOT_NAN"}};if(Fa(e.value))return{unaryFilter:{field:qe(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:qe(e.field),op:vm(e.op),value:e.value}}}(n):n instanceof jt?function(e){const r=e.getFilters().map(s=>ku(s));return r.length===1?r[0]:{compositeFilter:{op:Tm(e.op),filters:r}}}(n):$()}function wm(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function Nu(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class ae{constructor(t,e,r,s,o=H.min(),a=H.min(),u=wt.EMPTY_BYTE_STRING,h=null){this.target=t,this.targetId=e,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=u,this.expectedCount=h}withSequenceNumber(t){return new ae(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new ae(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new ae(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new ae(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class Im{constructor(t){this.Tt=t}}function Am(n){const t=_m({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?ri(t,t.limit,"L"):t}/**
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
 */class bm{constructor(){this.Tn=new Rm}addToCollectionParentIndex(t,e){return this.Tn.add(e),P.resolve()}getCollectionParents(t,e){return P.resolve(this.Tn.getEntries(e))}addFieldIndex(t,e){return P.resolve()}deleteFieldIndex(t,e){return P.resolve()}deleteAllFieldIndexes(t){return P.resolve()}createTargetIndexes(t,e){return P.resolve()}getDocumentsMatchingTarget(t,e){return P.resolve(null)}getIndexType(t,e){return P.resolve(0)}getFieldIndexes(t,e){return P.resolve([])}getNextCollectionGroupToUpdate(t){return P.resolve(null)}getMinOffset(t,e){return P.resolve(me.min())}getMinOffsetFromCollectionGroup(t,e){return P.resolve(me.min())}updateCollectionGroup(t,e,r){return P.resolve()}updateIndexEntries(t,e){return P.resolve()}}class Rm{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e]||new gt(at.comparator),o=!s.has(r);return this.index[e]=s.add(r),o}has(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e];return s&&s.has(r)}getEntries(t){return(this.index[t]||new gt(at.comparator)).toArray()}}/**
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
 */const Ja={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Mu=41943040;class Nt{static withCacheSize(t){return new Nt(t,Nt.DEFAULT_COLLECTION_PERCENTILE,Nt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,r){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=r}}/**
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
 */Nt.DEFAULT_COLLECTION_PERCENTILE=10,Nt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Nt.DEFAULT=new Nt(Mu,Nt.DEFAULT_COLLECTION_PERCENTILE,Nt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Nt.DISABLED=new Nt(-1,0,0);/**
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
 */const Za="LruGarbageCollector",Cm=1048576;function tl([n,t],[e,r]){const s=Q(n,e);return s===0?Q(t,r):s}class Pm{constructor(t){this.Hn=t,this.buffer=new gt(tl),this.Jn=0}Yn(){return++this.Jn}Zn(t){const e=[t,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(e);else{const r=this.buffer.last();tl(e,r)<0&&(this.buffer=this.buffer.delete(r).add(e))}}get maxValue(){return this.buffer.last()[0]}}class Sm{constructor(t,e,r){this.garbageCollector=t,this.asyncQueue=e,this.localStore=r,this.Xn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return this.Xn!==null}er(t){U(Za,`Garbage collection scheduled in ${t}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){sn(e)?U(Za,"Ignoring IndexedDB error during garbage collection: ",e):await rn(e)}await this.er(3e5)})}}class Vm{constructor(t,e){this.tr=t,this.params=e}calculateTargetCount(t,e){return this.tr.nr(t).next(r=>Math.floor(e/100*r))}nthSequenceNumber(t,e){if(e===0)return P.resolve(Wr.ae);const r=new Pm(e);return this.tr.forEachTarget(t,s=>r.Zn(s.sequenceNumber)).next(()=>this.tr.rr(t,s=>r.Zn(s))).next(()=>r.maxValue)}removeTargets(t,e,r){return this.tr.removeTargets(t,e,r)}removeOrphanedDocuments(t,e){return this.tr.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(U("LruGarbageCollector","Garbage collection skipped; disabled"),P.resolve(Ja)):this.getCacheSize(t).next(r=>r<this.params.cacheSizeCollectionThreshold?(U("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Ja):this.ir(t,e))}getCacheSize(t){return this.tr.getCacheSize(t)}ir(t,e){let r,s,o,a,u,h,f;const m=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(E=>(E>this.params.maximumSequenceNumbersToCollect?(U("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${E}`),s=this.params.maximumSequenceNumbersToCollect):s=E,a=Date.now(),this.nthSequenceNumber(t,s))).next(E=>(r=E,u=Date.now(),this.removeTargets(t,r,e))).next(E=>(o=E,h=Date.now(),this.removeOrphanedDocuments(t,r))).next(E=>(f=Date.now(),Be()<=Z.DEBUG&&U("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-m}ms
	Determined least recently used ${s} in `+(u-a)+`ms
	Removed ${o} targets in `+(h-u)+`ms
	Removed ${E} documents in `+(f-h)+`ms
Total Duration: ${f-m}ms`),P.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:o,documentsRemoved:E})))}}function Dm(n,t){return new Vm(n,t)}/**
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
 */class km{constructor(){this.changes=new Se(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,St.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?P.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class Nm{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
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
 */class Mm{constructor(t,e,r,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=s}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next(s=>(r=s,this.remoteDocumentCache.getEntry(t,e))).next(s=>(r!==null&&kn(r.mutation,s,Bt.empty(),pt.now()),s))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.getLocalViewOfDocuments(t,r,X()).next(()=>r))}getLocalViewOfDocuments(t,e,r=X()){const s=be();return this.populateOverlays(t,s,e).next(()=>this.computeViews(t,e,s,r).next(o=>{let a=In();return o.forEach((u,h)=>{a=a.insert(u,h.overlayedDocument)}),a}))}getOverlayedDocuments(t,e){const r=be();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,X()))}populateOverlays(t,e,r){const s=[];return r.forEach(o=>{e.has(o)||s.push(o)}),this.documentOverlayCache.getOverlays(t,s).next(o=>{o.forEach((a,u)=>{e.set(a,u)})})}computeViews(t,e,r,s){let o=ee();const a=Dn(),u=function(){return Dn()}();return e.forEach((h,f)=>{const m=r.get(f.key);s.has(f.key)&&(m===void 0||m.mutation instanceof Ve)?o=o.insert(f.key,f):m!==void 0?(a.set(f.key,m.mutation.getFieldMask()),kn(m.mutation,f,m.mutation.getFieldMask(),pt.now())):a.set(f.key,Bt.empty())}),this.recalculateAndSaveOverlays(t,o).next(h=>(h.forEach((f,m)=>a.set(f,m)),e.forEach((f,m)=>{var E;return u.set(f,new Nm(m,(E=a.get(f))!==null&&E!==void 0?E:null))}),u))}recalculateAndSaveOverlays(t,e){const r=Dn();let s=new ut((a,u)=>a-u),o=X();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(a=>{for(const u of a)u.keys().forEach(h=>{const f=e.get(h);if(f===null)return;let m=r.get(h)||Bt.empty();m=u.applyToLocalView(f,m),r.set(h,m);const E=(s.get(u.batchId)||X()).add(h);s=s.insert(u.batchId,E)})}).next(()=>{const a=[],u=s.getReverseIterator();for(;u.hasNext();){const h=u.getNext(),f=h.key,m=h.value,E=pu();m.forEach(v=>{if(!o.has(v)){const A=Tu(e.get(v),r.get(v));A!==null&&E.set(v,A),o=o.add(v)}}),a.push(this.documentOverlayCache.saveOverlays(t,f,E))}return P.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,e,r,s){return function(a){return q.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):cu(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,s):this.getDocumentsMatchingCollectionQuery(t,e,r,s)}getNextDocuments(t,e,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,s).next(o=>{const a=s-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,s-o.size):P.resolve(be());let u=Ln,h=o;return a.next(f=>P.forEach(f,(m,E)=>(u<E.largestBatchId&&(u=E.largestBatchId),o.get(m)?P.resolve():this.remoteDocumentCache.getEntry(t,m).next(v=>{h=h.insert(m,v)}))).next(()=>this.populateOverlays(t,f,o)).next(()=>this.computeViews(t,h,f,X())).next(m=>({batchId:u,changes:mu(m)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new q(e)).next(r=>{let s=In();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(t,e,r,s){const o=e.collectionGroup;let a=In();return this.indexManager.getCollectionParents(t,o).next(u=>P.forEach(u,h=>{const f=function(E,v){return new Gn(v,null,E.explicitOrderBy.slice(),E.filters.slice(),E.limit,E.limitType,E.startAt,E.endAt)}(e,h.child(o));return this.getDocumentsMatchingCollectionQuery(t,f,r,s).next(m=>{m.forEach((E,v)=>{a=a.insert(E,v)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(t,e,r,s){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next(a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,o,s))).next(a=>{o.forEach((h,f)=>{const m=f.getKey();a.get(m)===null&&(a=a.insert(m,St.newInvalidDocument(m)))});let u=In();return a.forEach((h,f)=>{const m=o.get(h);m!==void 0&&kn(m.mutation,f,Bt.empty(),pt.now()),Jr(e,f)&&(u=u.insert(h,f))}),u})}}/**
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
 */class Om{constructor(t){this.serializer=t,this.dr=new Map,this.Ar=new Map}getBundleMetadata(t,e){return P.resolve(this.dr.get(e))}saveBundleMetadata(t,e){return this.dr.set(e.id,function(s){return{id:s.id,version:s.version,createTime:Gt(s.createTime)}}(e)),P.resolve()}getNamedQuery(t,e){return P.resolve(this.Ar.get(e))}saveNamedQuery(t,e){return this.Ar.set(e.name,function(s){return{name:s.name,query:Am(s.bundledQuery),readTime:Gt(s.readTime)}}(e)),P.resolve()}}/**
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
 */class Lm{constructor(){this.overlays=new ut(q.comparator),this.Rr=new Map}getOverlay(t,e){return P.resolve(this.overlays.get(e))}getOverlays(t,e){const r=be();return P.forEach(e,s=>this.getOverlay(t,s).next(o=>{o!==null&&r.set(s,o)})).next(()=>r)}saveOverlays(t,e,r){return r.forEach((s,o)=>{this.Et(t,e,o)}),P.resolve()}removeOverlaysForBatchId(t,e,r){const s=this.Rr.get(r);return s!==void 0&&(s.forEach(o=>this.overlays=this.overlays.remove(o)),this.Rr.delete(r)),P.resolve()}getOverlaysForCollection(t,e,r){const s=be(),o=e.length+1,a=new q(e.child("")),u=this.overlays.getIteratorFrom(a);for(;u.hasNext();){const h=u.getNext().value,f=h.getKey();if(!e.isPrefixOf(f.path))break;f.path.length===o&&h.largestBatchId>r&&s.set(h.getKey(),h)}return P.resolve(s)}getOverlaysForCollectionGroup(t,e,r,s){let o=new ut((f,m)=>f-m);const a=this.overlays.getIterator();for(;a.hasNext();){const f=a.getNext().value;if(f.getKey().getCollectionGroup()===e&&f.largestBatchId>r){let m=o.get(f.largestBatchId);m===null&&(m=be(),o=o.insert(f.largestBatchId,m)),m.set(f.getKey(),f)}}const u=be(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach((f,m)=>u.set(f,m)),!(u.size()>=s)););return P.resolve(u)}Et(t,e,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.Rr.get(s.largestBatchId).delete(r.key);this.Rr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new em(e,r));let o=this.Rr.get(e);o===void 0&&(o=X(),this.Rr.set(e,o)),this.Rr.set(e,o.add(r.key))}}/**
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
 */class Fm{constructor(){this.sessionToken=wt.EMPTY_BYTE_STRING}getSessionToken(t){return P.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,P.resolve()}}/**
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
 */class Pi{constructor(){this.Vr=new gt(_t.mr),this.gr=new gt(_t.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(t,e){const r=new _t(t,e);this.Vr=this.Vr.add(r),this.gr=this.gr.add(r)}yr(t,e){t.forEach(r=>this.addReference(r,e))}removeReference(t,e){this.wr(new _t(t,e))}Sr(t,e){t.forEach(r=>this.removeReference(r,e))}br(t){const e=new q(new at([])),r=new _t(e,t),s=new _t(e,t+1),o=[];return this.gr.forEachInRange([r,s],a=>{this.wr(a),o.push(a.key)}),o}Dr(){this.Vr.forEach(t=>this.wr(t))}wr(t){this.Vr=this.Vr.delete(t),this.gr=this.gr.delete(t)}vr(t){const e=new q(new at([])),r=new _t(e,t),s=new _t(e,t+1);let o=X();return this.gr.forEachInRange([r,s],a=>{o=o.add(a.key)}),o}containsKey(t){const e=new _t(t,0),r=this.Vr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class _t{constructor(t,e){this.key=t,this.Cr=e}static mr(t,e){return q.comparator(t.key,e.key)||Q(t.Cr,e.Cr)}static pr(t,e){return Q(t.Cr,e.Cr)||q.comparator(t.key,e.key)}}/**
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
 */class xm{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Fr=1,this.Mr=new gt(_t.mr)}checkEmpty(t){return P.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,s){const o=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new tm(o,e,r,s);this.mutationQueue.push(a);for(const u of s)this.Mr=this.Mr.add(new _t(u.key,o)),this.indexManager.addToCollectionParentIndex(t,u.key.path.popLast());return P.resolve(a)}lookupMutationBatch(t,e){return P.resolve(this.Or(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,s=this.Nr(r),o=s<0?0:s;return P.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return P.resolve(this.mutationQueue.length===0?Ei:this.Fr-1)}getAllMutationBatches(t){return P.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new _t(e,0),s=new _t(e,Number.POSITIVE_INFINITY),o=[];return this.Mr.forEachInRange([r,s],a=>{const u=this.Or(a.Cr);o.push(u)}),P.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new gt(Q);return e.forEach(s=>{const o=new _t(s,0),a=new _t(s,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([o,a],u=>{r=r.add(u.Cr)})}),P.resolve(this.Br(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,s=r.length+1;let o=r;q.isDocumentKey(o)||(o=o.child(""));const a=new _t(new q(o),0);let u=new gt(Q);return this.Mr.forEachWhile(h=>{const f=h.key.path;return!!r.isPrefixOf(f)&&(f.length===s&&(u=u.add(h.Cr)),!0)},a),P.resolve(this.Br(u))}Br(t){const e=[];return t.forEach(r=>{const s=this.Or(r);s!==null&&e.push(s)}),e}removeMutationBatch(t,e){rt(this.Lr(e.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Mr;return P.forEach(e.mutations,s=>{const o=new _t(s.key,e.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.Mr=r})}qn(t){}containsKey(t,e){const r=new _t(e,0),s=this.Mr.firstAfterOrEqual(r);return P.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,P.resolve()}Lr(t,e){return this.Nr(t)}Nr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Or(t){const e=this.Nr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
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
 */class Um{constructor(t){this.kr=t,this.docs=function(){return new ut(q.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,s=this.docs.get(r),o=s?s.size:0,a=this.kr(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return P.resolve(r?r.document.mutableCopy():St.newInvalidDocument(e))}getEntries(t,e){let r=ee();return e.forEach(s=>{const o=this.docs.get(s);r=r.insert(s,o?o.document.mutableCopy():St.newInvalidDocument(s))}),P.resolve(r)}getDocumentsMatchingQuery(t,e,r,s){let o=ee();const a=e.path,u=new q(a.child("__id-9223372036854775808__")),h=this.docs.getIteratorFrom(u);for(;h.hasNext();){const{key:f,value:{document:m}}=h.getNext();if(!a.isPrefixOf(f.path))break;f.path.length>a.length+1||pd(md(m),r)<=0||(s.has(m.key)||Jr(e,m))&&(o=o.insert(m.key,m.mutableCopy()))}return P.resolve(o)}getAllFromCollectionGroup(t,e,r,s){$()}qr(t,e){return P.forEach(this.docs,r=>e(r))}newChangeBuffer(t){return new Bm(this)}getSize(t){return P.resolve(this.size)}}class Bm extends km{constructor(t){super(),this.Ir=t}applyChanges(t){const e=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?e.push(this.Ir.addEntry(t,s)):this.Ir.removeEntry(r)}),P.waitFor(e)}getFromCache(t,e){return this.Ir.getEntry(t,e)}getAllFromCache(t,e){return this.Ir.getEntries(t,e)}}/**
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
 */class jm{constructor(t){this.persistence=t,this.Qr=new Se(e=>wi(e),Ii),this.lastRemoteSnapshotVersion=H.min(),this.highestTargetId=0,this.$r=0,this.Ur=new Pi,this.targetCount=0,this.Kr=Je.Un()}forEachTarget(t,e){return this.Qr.forEach((r,s)=>e(s)),P.resolve()}getLastRemoteSnapshotVersion(t){return P.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return P.resolve(this.$r)}allocateTargetId(t){return this.highestTargetId=this.Kr.next(),P.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.$r&&(this.$r=e),P.resolve()}zn(t){this.Qr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Kr=new Je(e),this.highestTargetId=e),t.sequenceNumber>this.$r&&(this.$r=t.sequenceNumber)}addTargetData(t,e){return this.zn(e),this.targetCount+=1,P.resolve()}updateTargetData(t,e){return this.zn(e),P.resolve()}removeTargetData(t,e){return this.Qr.delete(e.target),this.Ur.br(e.targetId),this.targetCount-=1,P.resolve()}removeTargets(t,e,r){let s=0;const o=[];return this.Qr.forEach((a,u)=>{u.sequenceNumber<=e&&r.get(u.targetId)===null&&(this.Qr.delete(a),o.push(this.removeMatchingKeysForTargetId(t,u.targetId)),s++)}),P.waitFor(o).next(()=>s)}getTargetCount(t){return P.resolve(this.targetCount)}getTargetData(t,e){const r=this.Qr.get(e)||null;return P.resolve(r)}addMatchingKeys(t,e,r){return this.Ur.yr(e,r),P.resolve()}removeMatchingKeys(t,e,r){this.Ur.Sr(e,r);const s=this.persistence.referenceDelegate,o=[];return s&&e.forEach(a=>{o.push(s.markPotentiallyOrphaned(t,a))}),P.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.Ur.br(e),P.resolve()}getMatchingKeysForTargetId(t,e){const r=this.Ur.vr(e);return P.resolve(r)}containsKey(t,e){return P.resolve(this.Ur.containsKey(e))}}/**
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
 */class Ou{constructor(t,e){this.Wr={},this.overlays={},this.Gr=new Wr(0),this.zr=!1,this.zr=!0,this.jr=new Fm,this.referenceDelegate=t(this),this.Hr=new jm(this),this.indexManager=new bm,this.remoteDocumentCache=function(s){return new Um(s)}(r=>this.referenceDelegate.Jr(r)),this.serializer=new Im(e),this.Yr=new Om(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Lm,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.Wr[t.toKey()];return r||(r=new xm(e,this.referenceDelegate),this.Wr[t.toKey()]=r),r}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(t,e,r){U("MemoryPersistence","Starting transaction:",t);const s=new qm(this.Gr.next());return this.referenceDelegate.Zr(),r(s).next(o=>this.referenceDelegate.Xr(s).next(()=>o)).toPromise().then(o=>(s.raiseOnCommittedEvent(),o))}ei(t,e){return P.or(Object.values(this.Wr).map(r=>()=>r.containsKey(t,e)))}}class qm extends _d{constructor(t){super(),this.currentSequenceNumber=t}}class Si{constructor(t){this.persistence=t,this.ti=new Pi,this.ni=null}static ri(t){return new Si(t)}get ii(){if(this.ni)return this.ni;throw $()}addReference(t,e,r){return this.ti.addReference(r,e),this.ii.delete(r.toString()),P.resolve()}removeReference(t,e,r){return this.ti.removeReference(r,e),this.ii.add(r.toString()),P.resolve()}markPotentiallyOrphaned(t,e){return this.ii.add(e.toString()),P.resolve()}removeTarget(t,e){this.ti.br(e.targetId).forEach(s=>this.ii.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next(s=>{s.forEach(o=>this.ii.add(o.toString()))}).next(()=>r.removeTargetData(t,e))}Zr(){this.ni=new Set}Xr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return P.forEach(this.ii,r=>{const s=q.fromPath(r);return this.si(t,s).next(o=>{o||e.removeEntry(s,H.min())})}).next(()=>(this.ni=null,e.apply(t)))}updateLimboDocument(t,e){return this.si(t,e).next(r=>{r?this.ii.delete(e.toString()):this.ii.add(e.toString())})}Jr(t){return 0}si(t,e){return P.or([()=>P.resolve(this.ti.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.ei(t,e)])}}class zr{constructor(t,e){this.persistence=t,this.oi=new Se(r=>vd(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=Dm(this,e)}static ri(t,e){return new zr(t,e)}Zr(){}Xr(t){return P.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}nr(t){const e=this.sr(t);return this.persistence.getTargetCache().getTargetCount(t).next(r=>e.next(s=>r+s))}sr(t){let e=0;return this.rr(t,r=>{e++}).next(()=>e)}rr(t,e){return P.forEach(this.oi,(r,s)=>this.ar(t,r,s).next(o=>o?P.resolve():e(s)))}removeTargets(t,e,r){return this.persistence.getTargetCache().removeTargets(t,e,r)}removeOrphanedDocuments(t,e){let r=0;const s=this.persistence.getRemoteDocumentCache(),o=s.newChangeBuffer();return s.qr(t,a=>this.ar(t,a,e).next(u=>{u||(r++,o.removeEntry(a,H.min()))})).next(()=>o.apply(t)).next(()=>r)}markPotentiallyOrphaned(t,e){return this.oi.set(e,t.currentSequenceNumber),P.resolve()}removeTarget(t,e){const r=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,r)}addReference(t,e,r){return this.oi.set(r,t.currentSequenceNumber),P.resolve()}removeReference(t,e,r){return this.oi.set(r,t.currentSequenceNumber),P.resolve()}updateLimboDocument(t,e){return this.oi.set(e,t.currentSequenceNumber),P.resolve()}Jr(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=br(t.data.value)),e}ar(t,e,r){return P.or([()=>this.persistence.ei(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const s=this.oi.get(e);return P.resolve(s!==void 0&&s>r)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
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
 */class Vi{constructor(t,e,r,s){this.targetId=t,this.fromCache=e,this.Hi=r,this.Ji=s}static Yi(t,e){let r=X(),s=X();for(const o of e.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:s=s.add(o.doc.key)}return new Vi(t,e.fromCache,r,s)}}/**
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
 */class zm{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class $m{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=function(){return Uh()?8:yd(Fh())>0?6:4}()}initialize(t,e){this.ns=t,this.indexManager=e,this.Zi=!0}getDocumentsMatchingQuery(t,e,r,s){const o={result:null};return this.rs(t,e).next(a=>{o.result=a}).next(()=>{if(!o.result)return this.ss(t,e,s,r).next(a=>{o.result=a})}).next(()=>{if(o.result)return;const a=new zm;return this._s(t,e,a).next(u=>{if(o.result=u,this.Xi)return this.us(t,e,a,u.size)})}).next(()=>o.result)}us(t,e,r,s){return r.documentReadCount<this.es?(Be()<=Z.DEBUG&&U("QueryEngine","SDK will not create cache indexes for query:",je(e),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),P.resolve()):(Be()<=Z.DEBUG&&U("QueryEngine","Query:",je(e),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ts*s?(Be()<=Z.DEBUG&&U("QueryEngine","The SDK decides to create cache indexes for query:",je(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,$t(e))):P.resolve())}rs(t,e){if(qa(e))return P.resolve(null);let r=$t(e);return this.indexManager.getIndexType(t,r).next(s=>s===0?null:(e.limit!==null&&s===1&&(e=ri(e,null,"F"),r=$t(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next(o=>{const a=X(...o);return this.ns.getDocuments(t,a).next(u=>this.indexManager.getMinOffset(t,r).next(h=>{const f=this.cs(e,u);return this.ls(e,f,a,h.readTime)?this.rs(t,ri(e,null,"F")):this.hs(t,f,e,h)}))})))}ss(t,e,r,s){return qa(e)||s.isEqual(H.min())?P.resolve(null):this.ns.getDocuments(t,r).next(o=>{const a=this.cs(e,o);return this.ls(e,a,r,s)?P.resolve(null):(Be()<=Z.DEBUG&&U("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),je(e)),this.hs(t,a,e,dd(s,Ln)).next(u=>u))})}cs(t,e){let r=new gt(fu(t));return e.forEach((s,o)=>{Jr(t,o)&&(r=r.add(o))}),r}ls(t,e,r,s){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(s)>0)}_s(t,e,r){return Be()<=Z.DEBUG&&U("QueryEngine","Using full collection scan to execute query:",je(e)),this.ns.getDocumentsMatchingQuery(t,e,me.min(),r)}hs(t,e,r,s){return this.ns.getDocumentsMatchingQuery(t,r,s).next(o=>(e.forEach(a=>{o=o.insert(a.key,a)}),o))}}/**
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
 */const Di="LocalStore",Gm=3e8;class Hm{constructor(t,e,r,s){this.persistence=t,this.Ps=e,this.serializer=s,this.Ts=new ut(Q),this.Is=new Se(o=>wi(o),Ii),this.Es=new Map,this.ds=t.getRemoteDocumentCache(),this.Hr=t.getTargetCache(),this.Yr=t.getBundleCache(),this.As(r)}As(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Mm(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.Ts))}}function Km(n,t,e,r){return new Hm(n,t,e,r)}async function Lu(n,t){const e=K(n);return await e.persistence.runTransaction("Handle user change","readonly",r=>{let s;return e.mutationQueue.getAllMutationBatches(r).next(o=>(s=o,e.As(t),e.mutationQueue.getAllMutationBatches(r))).next(o=>{const a=[],u=[];let h=X();for(const f of s){a.push(f.batchId);for(const m of f.mutations)h=h.add(m.key)}for(const f of o){u.push(f.batchId);for(const m of f.mutations)h=h.add(m.key)}return e.localDocuments.getDocuments(r,h).next(f=>({Rs:f,removedBatchIds:a,addedBatchIds:u}))})})}function Wm(n,t){const e=K(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=t.batch.keys(),o=e.ds.newChangeBuffer({trackRemovals:!0});return function(u,h,f,m){const E=f.batch,v=E.keys();let A=P.resolve();return v.forEach(C=>{A=A.next(()=>m.getEntry(h,C)).next(M=>{const S=f.docVersions.get(C);rt(S!==null),M.version.compareTo(S)<0&&(E.applyToRemoteDocument(M,f),M.isValidDocument()&&(M.setReadTime(f.commitVersion),m.addEntry(M)))})}),A.next(()=>u.mutationQueue.removeMutationBatch(h,E))}(e,r,t,o).next(()=>o.apply(r)).next(()=>e.mutationQueue.performConsistencyCheck(r)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(r,s,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(u){let h=X();for(let f=0;f<u.mutationResults.length;++f)u.mutationResults[f].transformResults.length>0&&(h=h.add(u.batch.mutations[f].key));return h}(t))).next(()=>e.localDocuments.getDocuments(r,s))})}function Fu(n){const t=K(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Hr.getLastRemoteSnapshotVersion(e))}function Qm(n,t){const e=K(n),r=t.snapshotVersion;let s=e.Ts;return e.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const a=e.ds.newChangeBuffer({trackRemovals:!0});s=e.Ts;const u=[];t.targetChanges.forEach((m,E)=>{const v=s.get(E);if(!v)return;u.push(e.Hr.removeMatchingKeys(o,m.removedDocuments,E).next(()=>e.Hr.addMatchingKeys(o,m.addedDocuments,E)));let A=v.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(E)!==null?A=A.withResumeToken(wt.EMPTY_BYTE_STRING,H.min()).withLastLimboFreeSnapshotVersion(H.min()):m.resumeToken.approximateByteSize()>0&&(A=A.withResumeToken(m.resumeToken,r)),s=s.insert(E,A),function(M,S,k){return M.resumeToken.approximateByteSize()===0||S.snapshotVersion.toMicroseconds()-M.snapshotVersion.toMicroseconds()>=Gm?!0:k.addedDocuments.size+k.modifiedDocuments.size+k.removedDocuments.size>0}(v,A,m)&&u.push(e.Hr.updateTargetData(o,A))});let h=ee(),f=X();if(t.documentUpdates.forEach(m=>{t.resolvedLimboDocuments.has(m)&&u.push(e.persistence.referenceDelegate.updateLimboDocument(o,m))}),u.push(Xm(o,a,t.documentUpdates).next(m=>{h=m.Vs,f=m.fs})),!r.isEqual(H.min())){const m=e.Hr.getLastRemoteSnapshotVersion(o).next(E=>e.Hr.setTargetsMetadata(o,o.currentSequenceNumber,r));u.push(m)}return P.waitFor(u).next(()=>a.apply(o)).next(()=>e.localDocuments.getLocalViewOfDocuments(o,h,f)).next(()=>h)}).then(o=>(e.Ts=s,o))}function Xm(n,t,e){let r=X(),s=X();return e.forEach(o=>r=r.add(o)),t.getEntries(n,r).next(o=>{let a=ee();return e.forEach((u,h)=>{const f=o.get(u);h.isFoundDocument()!==f.isFoundDocument()&&(s=s.add(u)),h.isNoDocument()&&h.version.isEqual(H.min())?(t.removeEntry(u,h.readTime),a=a.insert(u,h)):!f.isValidDocument()||h.version.compareTo(f.version)>0||h.version.compareTo(f.version)===0&&f.hasPendingWrites?(t.addEntry(h),a=a.insert(u,h)):U(Di,"Ignoring outdated watch update for ",u,". Current version:",f.version," Watch version:",h.version)}),{Vs:a,fs:s}})}function Ym(n,t){const e=K(n);return e.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=Ei),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function Jm(n,t){const e=K(n);return e.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return e.Hr.getTargetData(r,t).next(o=>o?(s=o,P.resolve(s)):e.Hr.allocateTargetId(r).next(a=>(s=new ae(t,a,"TargetPurposeListen",r.currentSequenceNumber),e.Hr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=e.Ts.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(e.Ts=e.Ts.insert(r.targetId,r),e.Is.set(t,r.targetId)),r})}async function li(n,t,e){const r=K(n),s=r.Ts.get(t),o=e?"readwrite":"readwrite-primary";try{e||await r.persistence.runTransaction("Release target",o,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!sn(a))throw a;U(Di,`Failed to update sequence numbers for target ${t}: ${a}`)}r.Ts=r.Ts.remove(t),r.Is.delete(s.target)}function el(n,t,e){const r=K(n);let s=H.min(),o=X();return r.persistence.runTransaction("Execute query","readwrite",a=>function(h,f,m){const E=K(h),v=E.Is.get(m);return v!==void 0?P.resolve(E.Ts.get(v)):E.Hr.getTargetData(f,m)}(r,a,$t(t)).next(u=>{if(u)return s=u.lastLimboFreeSnapshotVersion,r.Hr.getMatchingKeysForTargetId(a,u.targetId).next(h=>{o=h})}).next(()=>r.Ps.getDocumentsMatchingQuery(a,t,e?s:H.min(),e?o:X())).next(u=>(Zm(r,Ud(t),u),{documents:u,gs:o})))}function Zm(n,t,e){let r=n.Es.get(t)||H.min();e.forEach((s,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),n.Es.set(t,r)}class nl{constructor(){this.activeTargetIds=Gd()}Ds(t){this.activeTargetIds=this.activeTargetIds.add(t)}vs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}bs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class tp{constructor(){this.ho=new nl,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t,e=!0){return e&&this.ho.Ds(t),this.Po[t]||"not-current"}updateQueryState(t,e,r){this.Po[t]=e}removeLocalQueryTarget(t){this.ho.vs(t)}isLocalQueryTarget(t){return this.ho.activeTargetIds.has(t)}clearQueryState(t){delete this.Po[t]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(t){return this.ho.activeTargetIds.has(t)}start(){return this.ho=new nl,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class ep{To(t){}shutdown(){}}/**
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
 */const rl="ConnectivityMonitor";class sl{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(t){this.Vo.push(t)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){U(rl,"Network connectivity changed: AVAILABLE");for(const t of this.Vo)t(0)}Ro(){U(rl,"Network connectivity changed: UNAVAILABLE");for(const t of this.Vo)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Er=null;function ui(){return Er===null?Er=function(){return 268435456+Math.round(2147483648*Math.random())}():Er++,"0x"+Er.toString(16)}/**
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
 */const Us="RestConnection",np={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class rp{get fo(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.po=e+"://"+t.host,this.yo=`projects/${r}/databases/${s}`,this.wo=this.databaseId.database===Lr?`project_id=${r}`:`project_id=${r}&database_id=${s}`}So(t,e,r,s,o){const a=ui(),u=this.bo(t,e.toUriEncodedString());U(Us,`Sending RPC '${t}' ${a}:`,u,r);const h={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(h,s,o),this.vo(t,u,h,r).then(f=>(U(Us,`Received RPC '${t}' ${a}: `,f),f),f=>{throw We(Us,`RPC '${t}' ${a} failed with error: `,f,"url: ",u,"request:",r),f})}Co(t,e,r,s,o,a){return this.So(t,e,r,s,o)}Do(t,e,r){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+nn}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach((s,o)=>t[o]=s),r&&r.headers.forEach((s,o)=>t[o]=s)}bo(t,e){const r=np[t];return`${this.po}/v1/${e}:${r}`}terminate(){}}/**
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
 */class sp{constructor(t){this.Fo=t.Fo,this.Mo=t.Mo}xo(t){this.Oo=t}No(t){this.Bo=t}Lo(t){this.ko=t}onMessage(t){this.qo=t}close(){this.Mo()}send(t){this.Fo(t)}Qo(){this.Oo()}$o(){this.Bo()}Uo(t){this.ko(t)}Ko(t){this.qo(t)}}/**
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
 */const Ct="WebChannelConnection";class ip extends rp{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}vo(t,e,r,s){const o=ui();return new Promise((a,u)=>{const h=new Ul;h.setWithCredentials(!0),h.listenOnce(Bl.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case Ar.NO_ERROR:const m=h.getResponseJson();U(Ct,`XHR for RPC '${t}' ${o} received:`,JSON.stringify(m)),a(m);break;case Ar.TIMEOUT:U(Ct,`RPC '${t}' ${o} timed out`),u(new j(V.DEADLINE_EXCEEDED,"Request time out"));break;case Ar.HTTP_ERROR:const E=h.getStatus();if(U(Ct,`RPC '${t}' ${o} failed with status:`,E,"response text:",h.getResponseText()),E>0){let v=h.getResponseJson();Array.isArray(v)&&(v=v[0]);const A=v==null?void 0:v.error;if(A&&A.status&&A.message){const C=function(S){const k=S.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(k)>=0?k:V.UNKNOWN}(A.status);u(new j(C,A.message))}else u(new j(V.UNKNOWN,"Server responded with status "+h.getStatus()))}else u(new j(V.UNAVAILABLE,"Connection failed."));break;default:$()}}finally{U(Ct,`RPC '${t}' ${o} completed.`)}});const f=JSON.stringify(s);U(Ct,`RPC '${t}' ${o} sending request:`,s),h.send(e,"POST",f,r,15)})}Wo(t,e,r){const s=ui(),o=[this.po,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=zl(),u=ql(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},f=this.longPollingOptions.timeoutSeconds;f!==void 0&&(h.longPollingTimeout=Math.round(1e3*f)),this.useFetchStreams&&(h.useFetchStreams=!0),this.Do(h.initMessageHeaders,e,r),h.encodeInitMessageHeaders=!0;const m=o.join("");U(Ct,`Creating RPC '${t}' stream ${s}: ${m}`,h);const E=a.createWebChannel(m,h);let v=!1,A=!1;const C=new sp({Fo:S=>{A?U(Ct,`Not sending because RPC '${t}' stream ${s} is closed:`,S):(v||(U(Ct,`Opening RPC '${t}' stream ${s} transport.`),E.open(),v=!0),U(Ct,`RPC '${t}' stream ${s} sending:`,S),E.send(S))},Mo:()=>E.close()}),M=(S,k,F)=>{S.listen(k,O=>{try{F(O)}catch(Y){setTimeout(()=>{throw Y},0)}})};return M(E,wn.EventType.OPEN,()=>{A||(U(Ct,`RPC '${t}' stream ${s} transport opened.`),C.Qo())}),M(E,wn.EventType.CLOSE,()=>{A||(A=!0,U(Ct,`RPC '${t}' stream ${s} transport closed`),C.Uo())}),M(E,wn.EventType.ERROR,S=>{A||(A=!0,We(Ct,`RPC '${t}' stream ${s} transport errored:`,S),C.Uo(new j(V.UNAVAILABLE,"The operation could not be completed")))}),M(E,wn.EventType.MESSAGE,S=>{var k;if(!A){const F=S.data[0];rt(!!F);const O=F,Y=(O==null?void 0:O.error)||((k=O[0])===null||k===void 0?void 0:k.error);if(Y){U(Ct,`RPC '${t}' stream ${s} received error:`,Y);const G=Y.status;let x=function(p){const y=dt[p];if(y!==void 0)return Au(y)}(G),w=Y.message;x===void 0&&(x=V.INTERNAL,w="Unknown error status: "+G+" with message "+Y.message),A=!0,C.Uo(new j(x,w)),E.close()}else U(Ct,`RPC '${t}' stream ${s} received:`,F),C.Ko(F)}}),M(u,jl.STAT_EVENT,S=>{S.stat===Xs.PROXY?U(Ct,`RPC '${t}' stream ${s} detected buffering proxy`):S.stat===Xs.NOPROXY&&U(Ct,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{C.$o()},0),C}}function Bs(){return typeof document<"u"?document:null}/**
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
 */function ns(n){return new um(n,!0)}/**
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
 */class xu{constructor(t,e,r=1e3,s=1.5,o=6e4){this.Ti=t,this.timerId=e,this.Go=r,this.zo=s,this.jo=o,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(t){this.cancel();const e=Math.floor(this.Ho+this.e_()),r=Math.max(0,Date.now()-this.Yo),s=Math.max(0,e-r);s>0&&U("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ho} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,s,()=>(this.Yo=Date.now(),t())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
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
 */const il="PersistentStream";class Uu{constructor(t,e,r,s,o,a,u,h){this.Ti=t,this.n_=r,this.r_=s,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=u,this.listener=h,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new xu(t,e)}u_(){return this.state===1||this.state===5||this.c_()}c_(){return this.state===2||this.state===3}start(){this.__=0,this.state!==4?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&this.s_===null&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(t){this.E_(),this.stream.send(t)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(t,e){this.E_(),this.d_(),this.a_.cancel(),this.i_++,t!==4?this.a_.reset():e&&e.code===V.RESOURCE_EXHAUSTED?(te(e.toString()),te("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):e&&e.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.A_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Lo(e)}A_(){}auth(){this.state=1;const t=this.R_(this.i_),e=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.i_===e&&this.V_(r,s)},r=>{t(()=>{const s=new j(V.UNKNOWN,"Fetching auth token failed: "+r.message);return this.m_(s)})})}V_(t,e){const r=this.R_(this.i_);this.stream=this.f_(t,e),this.stream.xo(()=>{r(()=>this.listener.xo())}),this.stream.No(()=>{r(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(s=>{r(()=>this.m_(s))}),this.stream.onMessage(s=>{r(()=>++this.__==1?this.g_(s):this.onNext(s))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(t){return U(il,`close with error: ${t}`),this.stream=null,this.close(4,t)}R_(t){return e=>{this.Ti.enqueueAndForget(()=>this.i_===t?e():(U(il,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class op extends Uu{constructor(t,e,r,s,o,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,s,a),this.serializer=o}f_(t,e){return this.connection.Wo("Listen",t,e)}g_(t){return this.onNext(t)}onNext(t){this.a_.reset();const e=fm(this.serializer,t),r=function(o){if(!("targetChange"in o))return H.min();const a=o.targetChange;return a.targetIds&&a.targetIds.length?H.min():a.readTime?Gt(a.readTime):H.min()}(t);return this.listener.p_(e,r)}y_(t){const e={};e.database=ai(this.serializer),e.addTarget=function(o,a){let u;const h=a.target;if(u=ei(h)?{documents:pm(o,h)}:{query:gm(o,h).ht},u.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){u.resumeToken=Cu(o,a.resumeToken);const f=si(o,a.expectedCount);f!==null&&(u.expectedCount=f)}else if(a.snapshotVersion.compareTo(H.min())>0){u.readTime=qr(o,a.snapshotVersion.toTimestamp());const f=si(o,a.expectedCount);f!==null&&(u.expectedCount=f)}return u}(this.serializer,t);const r=ym(this.serializer,t);r&&(e.labels=r),this.I_(e)}w_(t){const e={};e.database=ai(this.serializer),e.removeTarget=t,this.I_(e)}}class ap extends Uu{constructor(t,e,r,s,o,a){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,r,s,a),this.serializer=o}get S_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.S_&&this.b_([])}f_(t,e){return this.connection.Wo("Write",t,e)}g_(t){return rt(!!t.streamToken),this.lastStreamToken=t.streamToken,rt(!t.writeResults||t.writeResults.length===0),this.listener.D_()}onNext(t){rt(!!t.streamToken),this.lastStreamToken=t.streamToken,this.a_.reset();const e=mm(t.writeResults,t.commitTime),r=Gt(t.commitTime);return this.listener.v_(r,e)}C_(){const t={};t.database=ai(this.serializer),this.I_(t)}b_(t){const e={streamToken:this.lastStreamToken,writes:t.map(r=>dm(this.serializer,r))};this.I_(e)}}/**
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
 */class lp{}class up extends lp{constructor(t,e,r,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=s,this.F_=!1}M_(){if(this.F_)throw new j(V.FAILED_PRECONDITION,"The client has already been terminated.")}So(t,e,r,s){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.So(t,ii(e,r),s,o,a)).catch(o=>{throw o.name==="FirebaseError"?(o.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new j(V.UNKNOWN,o.toString())})}Co(t,e,r,s,o){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,u])=>this.connection.Co(t,ii(e,r),s,a,u,o)).catch(a=>{throw a.name==="FirebaseError"?(a.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new j(V.UNKNOWN,a.toString())})}terminate(){this.F_=!0,this.connection.terminate()}}class cp{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){this.x_===0&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(t){this.state==="Online"?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.L_("Offline")))}set(t){this.Q_(),this.x_=0,t==="Online"&&(this.N_=!1),this.L_(t)}L_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}k_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(te(e),this.N_=!1):U("OnlineStateTracker",e)}Q_(){this.O_!==null&&(this.O_.cancel(),this.O_=null)}}/**
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
 */const Ce="RemoteStore";class hp{constructor(t,e,r,s,o){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.U_=[],this.K_=new Map,this.W_=new Set,this.G_=[],this.z_=o,this.z_.To(a=>{r.enqueueAndForget(async()=>{De(this)&&(U(Ce,"Restarting streams for network reachability change."),await async function(h){const f=K(h);f.W_.add(4),await Wn(f),f.j_.set("Unknown"),f.W_.delete(4),await rs(f)}(this))})}),this.j_=new cp(r,s)}}async function rs(n){if(De(n))for(const t of n.G_)await t(!0)}async function Wn(n){for(const t of n.G_)await t(!1)}function Bu(n,t){const e=K(n);e.K_.has(t.targetId)||(e.K_.set(t.targetId,t),Oi(e)?Mi(e):on(e).c_()&&Ni(e,t))}function ki(n,t){const e=K(n),r=on(e);e.K_.delete(t),r.c_()&&ju(e,t),e.K_.size===0&&(r.c_()?r.P_():De(e)&&e.j_.set("Unknown"))}function Ni(n,t){if(n.H_.Ne(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(H.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}on(n).y_(t)}function ju(n,t){n.H_.Ne(t),on(n).w_(t)}function Mi(n){n.H_=new im({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),lt:t=>n.K_.get(t)||null,it:()=>n.datastore.serializer.databaseId}),on(n).start(),n.j_.B_()}function Oi(n){return De(n)&&!on(n).u_()&&n.K_.size>0}function De(n){return K(n).W_.size===0}function qu(n){n.H_=void 0}async function fp(n){n.j_.set("Online")}async function dp(n){n.K_.forEach((t,e)=>{Ni(n,t)})}async function mp(n,t){qu(n),Oi(n)?(n.j_.q_(t),Mi(n)):n.j_.set("Unknown")}async function pp(n,t,e){if(n.j_.set("Online"),t instanceof Ru&&t.state===2&&t.cause)try{await async function(s,o){const a=o.cause;for(const u of o.targetIds)s.K_.has(u)&&(await s.remoteSyncer.rejectListen(u,a),s.K_.delete(u),s.H_.removeTarget(u))}(n,t)}catch(r){U(Ce,"Failed to remove targets %s: %s ",t.targetIds.join(","),r),await $r(n,r)}else if(t instanceof Pr?n.H_.We(t):t instanceof bu?n.H_.Ze(t):n.H_.je(t),!e.isEqual(H.min()))try{const r=await Fu(n.localStore);e.compareTo(r)>=0&&await function(o,a){const u=o.H_.ot(a);return u.targetChanges.forEach((h,f)=>{if(h.resumeToken.approximateByteSize()>0){const m=o.K_.get(f);m&&o.K_.set(f,m.withResumeToken(h.resumeToken,a))}}),u.targetMismatches.forEach((h,f)=>{const m=o.K_.get(h);if(!m)return;o.K_.set(h,m.withResumeToken(wt.EMPTY_BYTE_STRING,m.snapshotVersion)),ju(o,h);const E=new ae(m.target,h,f,m.sequenceNumber);Ni(o,E)}),o.remoteSyncer.applyRemoteEvent(u)}(n,e)}catch(r){U(Ce,"Failed to raise snapshot:",r),await $r(n,r)}}async function $r(n,t,e){if(!sn(t))throw t;n.W_.add(1),await Wn(n),n.j_.set("Offline"),e||(e=()=>Fu(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{U(Ce,"Retrying IndexedDB access"),await e(),n.W_.delete(1),await rs(n)})}function zu(n,t){return t().catch(e=>$r(n,e,t))}async function ss(n){const t=K(n),e=ye(t);let r=t.U_.length>0?t.U_[t.U_.length-1].batchId:Ei;for(;gp(t);)try{const s=await Ym(t.localStore,r);if(s===null){t.U_.length===0&&e.P_();break}r=s.batchId,_p(t,s)}catch(s){await $r(t,s)}$u(t)&&Gu(t)}function gp(n){return De(n)&&n.U_.length<10}function _p(n,t){n.U_.push(t);const e=ye(n);e.c_()&&e.S_&&e.b_(t.mutations)}function $u(n){return De(n)&&!ye(n).u_()&&n.U_.length>0}function Gu(n){ye(n).start()}async function yp(n){ye(n).C_()}async function Ep(n){const t=ye(n);for(const e of n.U_)t.b_(e.mutations)}async function vp(n,t,e){const r=n.U_.shift(),s=bi.from(r,t,e);await zu(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await ss(n)}async function Tp(n,t){t&&ye(n).S_&&await async function(r,s){if(function(a){return rm(a)&&a!==V.ABORTED}(s.code)){const o=r.U_.shift();ye(r).h_(),await zu(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,s)),await ss(r)}}(n,t),$u(n)&&Gu(n)}async function ol(n,t){const e=K(n);e.asyncQueue.verifyOperationInProgress(),U(Ce,"RemoteStore received new credentials");const r=De(e);e.W_.add(3),await Wn(e),r&&e.j_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.W_.delete(3),await rs(e)}async function wp(n,t){const e=K(n);t?(e.W_.delete(2),await rs(e)):t||(e.W_.add(2),await Wn(e),e.j_.set("Unknown"))}function on(n){return n.J_||(n.J_=function(e,r,s){const o=K(e);return o.M_(),new op(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(n.datastore,n.asyncQueue,{xo:fp.bind(null,n),No:dp.bind(null,n),Lo:mp.bind(null,n),p_:pp.bind(null,n)}),n.G_.push(async t=>{t?(n.J_.h_(),Oi(n)?Mi(n):n.j_.set("Unknown")):(await n.J_.stop(),qu(n))})),n.J_}function ye(n){return n.Y_||(n.Y_=function(e,r,s){const o=K(e);return o.M_(),new ap(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(n.datastore,n.asyncQueue,{xo:()=>Promise.resolve(),No:yp.bind(null,n),Lo:Tp.bind(null,n),D_:Ep.bind(null,n),v_:vp.bind(null,n)}),n.G_.push(async t=>{t?(n.Y_.h_(),await ss(n)):(await n.Y_.stop(),n.U_.length>0&&(U(Ce,`Stopping write stream with ${n.U_.length} pending writes`),n.U_=[]))})),n.Y_}/**
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
 */class Li{constructor(t,e,r,s,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=s,this.removalCallback=o,this.deferred=new he,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,s,o){const a=Date.now()+r,u=new Li(t,e,a,s,o);return u.start(r),u}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new j(V.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Fi(n,t){if(te("AsyncQueue",`${t}: ${n}`),sn(n))return new j(V.UNAVAILABLE,`${t}: ${n}`);throw n}/**
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
 */class He{static emptySet(t){return new He(t.comparator)}constructor(t){this.comparator=t?(e,r)=>t(e,r)||q.comparator(e.key,r.key):(e,r)=>q.comparator(e.key,r.key),this.keyedMap=In(),this.sortedSet=new ut(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,r)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof He)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=r.getNext().key;if(!s.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const r=new He;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=e,r}}/**
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
 */class al{constructor(){this.Z_=new ut(q.comparator)}track(t){const e=t.doc.key,r=this.Z_.get(e);r?t.type!==0&&r.type===3?this.Z_=this.Z_.insert(e,t):t.type===3&&r.type!==1?this.Z_=this.Z_.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.Z_=this.Z_.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.Z_=this.Z_.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.Z_=this.Z_.remove(e):t.type===1&&r.type===2?this.Z_=this.Z_.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.Z_=this.Z_.insert(e,{type:2,doc:t.doc}):$():this.Z_=this.Z_.insert(e,t)}X_(){const t=[];return this.Z_.inorderTraversal((e,r)=>{t.push(r)}),t}}class Ze{constructor(t,e,r,s,o,a,u,h,f){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=o,this.fromCache=a,this.syncStateChanged=u,this.excludesMetadataChanges=h,this.hasCachedResults=f}static fromInitialDocuments(t,e,r,s,o){const a=[];return e.forEach(u=>{a.push({type:0,doc:u})}),new Ze(t,e,He.emptySet(e),a,r,s,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Yr(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let s=0;s<e.length;s++)if(e[s].type!==r[s].type||!e[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class Ip{constructor(){this.ea=void 0,this.ta=[]}na(){return this.ta.some(t=>t.ra())}}class Ap{constructor(){this.queries=ll(),this.onlineState="Unknown",this.ia=new Set}terminate(){(function(e,r){const s=K(e),o=s.queries;s.queries=ll(),o.forEach((a,u)=>{for(const h of u.ta)h.onError(r)})})(this,new j(V.ABORTED,"Firestore shutting down"))}}function ll(){return new Se(n=>hu(n),Yr)}async function bp(n,t){const e=K(n);let r=3;const s=t.query;let o=e.queries.get(s);o?!o.na()&&t.ra()&&(r=2):(o=new Ip,r=t.ra()?0:1);try{switch(r){case 0:o.ea=await e.onListen(s,!0);break;case 1:o.ea=await e.onListen(s,!1);break;case 2:await e.onFirstRemoteStoreListen(s)}}catch(a){const u=Fi(a,`Initialization of query '${je(t.query)}' failed`);return void t.onError(u)}e.queries.set(s,o),o.ta.push(t),t.sa(e.onlineState),o.ea&&t.oa(o.ea)&&xi(e)}async function Rp(n,t){const e=K(n),r=t.query;let s=3;const o=e.queries.get(r);if(o){const a=o.ta.indexOf(t);a>=0&&(o.ta.splice(a,1),o.ta.length===0?s=t.ra()?0:1:!o.na()&&t.ra()&&(s=2))}switch(s){case 0:return e.queries.delete(r),e.onUnlisten(r,!0);case 1:return e.queries.delete(r),e.onUnlisten(r,!1);case 2:return e.onLastRemoteStoreUnlisten(r);default:return}}function Cp(n,t){const e=K(n);let r=!1;for(const s of t){const o=s.query,a=e.queries.get(o);if(a){for(const u of a.ta)u.oa(s)&&(r=!0);a.ea=s}}r&&xi(e)}function Pp(n,t,e){const r=K(n),s=r.queries.get(t);if(s)for(const o of s.ta)o.onError(e);r.queries.delete(t)}function xi(n){n.ia.forEach(t=>{t.next()})}var ci,ul;(ul=ci||(ci={}))._a="default",ul.Cache="cache";class Sp{constructor(t,e,r){this.query=t,this.aa=e,this.ua=!1,this.ca=null,this.onlineState="Unknown",this.options=r||{}}oa(t){if(!this.options.includeMetadataChanges){const r=[];for(const s of t.docChanges)s.type!==3&&r.push(s);t=new Ze(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.ua?this.la(t)&&(this.aa.next(t),e=!0):this.ha(t,this.onlineState)&&(this.Pa(t),e=!0),this.ca=t,e}onError(t){this.aa.error(t)}sa(t){this.onlineState=t;let e=!1;return this.ca&&!this.ua&&this.ha(this.ca,t)&&(this.Pa(this.ca),e=!0),e}ha(t,e){if(!t.fromCache||!this.ra())return!0;const r=e!=="Offline";return(!this.options.Ta||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}la(t){if(t.docChanges.length>0)return!0;const e=this.ca&&this.ca.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}Pa(t){t=Ze.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.ua=!0,this.aa.next(t)}ra(){return this.options.source!==ci.Cache}}/**
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
 */class Hu{constructor(t){this.key=t}}class Ku{constructor(t){this.key=t}}class Vp{constructor(t,e){this.query=t,this.fa=e,this.ga=null,this.hasCachedResults=!1,this.current=!1,this.pa=X(),this.mutatedKeys=X(),this.ya=fu(t),this.wa=new He(this.ya)}get Sa(){return this.fa}ba(t,e){const r=e?e.Da:new al,s=e?e.wa:this.wa;let o=e?e.mutatedKeys:this.mutatedKeys,a=s,u=!1;const h=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,f=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((m,E)=>{const v=s.get(m),A=Jr(this.query,E)?E:null,C=!!v&&this.mutatedKeys.has(v.key),M=!!A&&(A.hasLocalMutations||this.mutatedKeys.has(A.key)&&A.hasCommittedMutations);let S=!1;v&&A?v.data.isEqual(A.data)?C!==M&&(r.track({type:3,doc:A}),S=!0):this.va(v,A)||(r.track({type:2,doc:A}),S=!0,(h&&this.ya(A,h)>0||f&&this.ya(A,f)<0)&&(u=!0)):!v&&A?(r.track({type:0,doc:A}),S=!0):v&&!A&&(r.track({type:1,doc:v}),S=!0,(h||f)&&(u=!0)),S&&(A?(a=a.add(A),o=M?o.add(m):o.delete(m)):(a=a.delete(m),o=o.delete(m)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const m=this.query.limitType==="F"?a.last():a.first();a=a.delete(m.key),o=o.delete(m.key),r.track({type:1,doc:m})}return{wa:a,Da:r,ls:u,mutatedKeys:o}}va(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r,s){const o=this.wa;this.wa=t.wa,this.mutatedKeys=t.mutatedKeys;const a=t.Da.X_();a.sort((m,E)=>function(A,C){const M=S=>{switch(S){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return $()}};return M(A)-M(C)}(m.type,E.type)||this.ya(m.doc,E.doc)),this.Ca(r),s=s!=null&&s;const u=e&&!s?this.Fa():[],h=this.pa.size===0&&this.current&&!s?1:0,f=h!==this.ga;return this.ga=h,a.length!==0||f?{snapshot:new Ze(this.query,t.wa,o,a,t.mutatedKeys,h===0,f,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ma:u}:{Ma:u}}sa(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({wa:this.wa,Da:new al,mutatedKeys:this.mutatedKeys,ls:!1},!1)):{Ma:[]}}xa(t){return!this.fa.has(t)&&!!this.wa.has(t)&&!this.wa.get(t).hasLocalMutations}Ca(t){t&&(t.addedDocuments.forEach(e=>this.fa=this.fa.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.fa=this.fa.delete(e)),this.current=t.current)}Fa(){if(!this.current)return[];const t=this.pa;this.pa=X(),this.wa.forEach(r=>{this.xa(r.key)&&(this.pa=this.pa.add(r.key))});const e=[];return t.forEach(r=>{this.pa.has(r)||e.push(new Ku(r))}),this.pa.forEach(r=>{t.has(r)||e.push(new Hu(r))}),e}Oa(t){this.fa=t.gs,this.pa=X();const e=this.ba(t.documents);return this.applyChanges(e,!0)}Na(){return Ze.fromInitialDocuments(this.query,this.wa,this.mutatedKeys,this.ga===0,this.hasCachedResults)}}const Ui="SyncEngine";class Dp{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}}class kp{constructor(t){this.key=t,this.Ba=!1}}class Np{constructor(t,e,r,s,o,a){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=s,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.La={},this.ka=new Se(u=>hu(u),Yr),this.qa=new Map,this.Qa=new Set,this.$a=new ut(q.comparator),this.Ua=new Map,this.Ka=new Pi,this.Wa={},this.Ga=new Map,this.za=Je.Kn(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return this.ja===!0}}async function Mp(n,t,e=!0){const r=Zu(n);let s;const o=r.ka.get(t);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),s=o.view.Na()):s=await Wu(r,t,e,!0),s}async function Op(n,t){const e=Zu(n);await Wu(e,t,!0,!1)}async function Wu(n,t,e,r){const s=await Jm(n.localStore,$t(t)),o=s.targetId,a=n.sharedClientState.addLocalQueryTarget(o,e);let u;return r&&(u=await Lp(n,t,o,a==="current",s.resumeToken)),n.isPrimaryClient&&e&&Bu(n.remoteStore,s),u}async function Lp(n,t,e,r,s){n.Ha=(E,v,A)=>async function(M,S,k,F){let O=S.view.ba(k);O.ls&&(O=await el(M.localStore,S.query,!1).then(({documents:w})=>S.view.ba(w,O)));const Y=F&&F.targetChanges.get(S.targetId),G=F&&F.targetMismatches.get(S.targetId)!=null,x=S.view.applyChanges(O,M.isPrimaryClient,Y,G);return hl(M,S.targetId,x.Ma),x.snapshot}(n,E,v,A);const o=await el(n.localStore,t,!0),a=new Vp(t,o.gs),u=a.ba(o.documents),h=Kn.createSynthesizedTargetChangeForCurrentChange(e,r&&n.onlineState!=="Offline",s),f=a.applyChanges(u,n.isPrimaryClient,h);hl(n,e,f.Ma);const m=new Dp(t,e,a);return n.ka.set(t,m),n.qa.has(e)?n.qa.get(e).push(t):n.qa.set(e,[t]),f.snapshot}async function Fp(n,t,e){const r=K(n),s=r.ka.get(t),o=r.qa.get(s.targetId);if(o.length>1)return r.qa.set(s.targetId,o.filter(a=>!Yr(a,t))),void r.ka.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await li(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),e&&ki(r.remoteStore,s.targetId),hi(r,s.targetId)}).catch(rn)):(hi(r,s.targetId),await li(r.localStore,s.targetId,!0))}async function xp(n,t){const e=K(n),r=e.ka.get(t),s=e.qa.get(r.targetId);e.isPrimaryClient&&s.length===1&&(e.sharedClientState.removeLocalQueryTarget(r.targetId),ki(e.remoteStore,r.targetId))}async function Up(n,t,e){const r=Hp(n);try{const s=await function(a,u){const h=K(a),f=pt.now(),m=u.reduce((A,C)=>A.add(C.key),X());let E,v;return h.persistence.runTransaction("Locally write mutations","readwrite",A=>{let C=ee(),M=X();return h.ds.getEntries(A,m).next(S=>{C=S,C.forEach((k,F)=>{F.isValidDocument()||(M=M.add(k))})}).next(()=>h.localDocuments.getOverlayedDocuments(A,C)).next(S=>{E=S;const k=[];for(const F of u){const O=Jd(F,E.get(F.key).overlayedDocument);O!=null&&k.push(new Ve(F.key,O,nu(O.value.mapValue),Jt.exists(!0)))}return h.mutationQueue.addMutationBatch(A,f,k,u)}).next(S=>{v=S;const k=S.applyToLocalDocumentSet(E,M);return h.documentOverlayCache.saveOverlays(A,S.batchId,k)})}).then(()=>({batchId:v.batchId,changes:mu(E)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(s.batchId),function(a,u,h){let f=a.Wa[a.currentUser.toKey()];f||(f=new ut(Q)),f=f.insert(u,h),a.Wa[a.currentUser.toKey()]=f}(r,s.batchId,e),await Qn(r,s.changes),await ss(r.remoteStore)}catch(s){const o=Fi(s,"Failed to persist write");e.reject(o)}}async function Qu(n,t){const e=K(n);try{const r=await Qm(e.localStore,t);t.targetChanges.forEach((s,o)=>{const a=e.Ua.get(o);a&&(rt(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?a.Ba=!0:s.modifiedDocuments.size>0?rt(a.Ba):s.removedDocuments.size>0&&(rt(a.Ba),a.Ba=!1))}),await Qn(e,r,t)}catch(r){await rn(r)}}function cl(n,t,e){const r=K(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const s=[];r.ka.forEach((o,a)=>{const u=a.view.sa(t);u.snapshot&&s.push(u.snapshot)}),function(a,u){const h=K(a);h.onlineState=u;let f=!1;h.queries.forEach((m,E)=>{for(const v of E.ta)v.sa(u)&&(f=!0)}),f&&xi(h)}(r.eventManager,t),s.length&&r.La.p_(s),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function Bp(n,t,e){const r=K(n);r.sharedClientState.updateQueryState(t,"rejected",e);const s=r.Ua.get(t),o=s&&s.key;if(o){let a=new ut(q.comparator);a=a.insert(o,St.newNoDocument(o,H.min()));const u=X().add(o),h=new es(H.min(),new Map,new ut(Q),a,u);await Qu(r,h),r.$a=r.$a.remove(o),r.Ua.delete(t),Bi(r)}else await li(r.localStore,t,!1).then(()=>hi(r,t,e)).catch(rn)}async function jp(n,t){const e=K(n),r=t.batch.batchId;try{const s=await Wm(e.localStore,t);Yu(e,r,null),Xu(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await Qn(e,s)}catch(s){await rn(s)}}async function qp(n,t,e){const r=K(n);try{const s=await function(a,u){const h=K(a);return h.persistence.runTransaction("Reject batch","readwrite-primary",f=>{let m;return h.mutationQueue.lookupMutationBatch(f,u).next(E=>(rt(E!==null),m=E.keys(),h.mutationQueue.removeMutationBatch(f,E))).next(()=>h.mutationQueue.performConsistencyCheck(f)).next(()=>h.documentOverlayCache.removeOverlaysForBatchId(f,m,u)).next(()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(f,m)).next(()=>h.localDocuments.getDocuments(f,m))})}(r.localStore,t);Yu(r,t,e),Xu(r,t),r.sharedClientState.updateMutationState(t,"rejected",e),await Qn(r,s)}catch(s){await rn(s)}}function Xu(n,t){(n.Ga.get(t)||[]).forEach(e=>{e.resolve()}),n.Ga.delete(t)}function Yu(n,t,e){const r=K(n);let s=r.Wa[r.currentUser.toKey()];if(s){const o=s.get(t);o&&(e?o.reject(e):o.resolve(),s=s.remove(t)),r.Wa[r.currentUser.toKey()]=s}}function hi(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const r of n.qa.get(t))n.ka.delete(r),e&&n.La.Ja(r,e);n.qa.delete(t),n.isPrimaryClient&&n.Ka.br(t).forEach(r=>{n.Ka.containsKey(r)||Ju(n,r)})}function Ju(n,t){n.Qa.delete(t.path.canonicalString());const e=n.$a.get(t);e!==null&&(ki(n.remoteStore,e),n.$a=n.$a.remove(t),n.Ua.delete(e),Bi(n))}function hl(n,t,e){for(const r of e)r instanceof Hu?(n.Ka.addReference(r.key,t),zp(n,r)):r instanceof Ku?(U(Ui,"Document no longer in limbo: "+r.key),n.Ka.removeReference(r.key,t),n.Ka.containsKey(r.key)||Ju(n,r.key)):$()}function zp(n,t){const e=t.key,r=e.path.canonicalString();n.$a.get(e)||n.Qa.has(r)||(U(Ui,"New document in limbo: "+e),n.Qa.add(r),Bi(n))}function Bi(n){for(;n.Qa.size>0&&n.$a.size<n.maxConcurrentLimboResolutions;){const t=n.Qa.values().next().value;n.Qa.delete(t);const e=new q(at.fromString(t)),r=n.za.next();n.Ua.set(r,new kp(e)),n.$a=n.$a.insert(e,r),Bu(n.remoteStore,new ae($t(uu(e.path)),r,"TargetPurposeLimboResolution",Wr.ae))}}async function Qn(n,t,e){const r=K(n),s=[],o=[],a=[];r.ka.isEmpty()||(r.ka.forEach((u,h)=>{a.push(r.Ha(h,t,e).then(f=>{var m;if((f||e)&&r.isPrimaryClient){const E=f?!f.fromCache:(m=e==null?void 0:e.targetChanges.get(h.targetId))===null||m===void 0?void 0:m.current;r.sharedClientState.updateQueryState(h.targetId,E?"current":"not-current")}if(f){s.push(f);const E=Vi.Yi(h.targetId,f);o.push(E)}}))}),await Promise.all(a),r.La.p_(s),await async function(h,f){const m=K(h);try{await m.persistence.runTransaction("notifyLocalViewChanges","readwrite",E=>P.forEach(f,v=>P.forEach(v.Hi,A=>m.persistence.referenceDelegate.addReference(E,v.targetId,A)).next(()=>P.forEach(v.Ji,A=>m.persistence.referenceDelegate.removeReference(E,v.targetId,A)))))}catch(E){if(!sn(E))throw E;U(Di,"Failed to update sequence numbers: "+E)}for(const E of f){const v=E.targetId;if(!E.fromCache){const A=m.Ts.get(v),C=A.snapshotVersion,M=A.withLastLimboFreeSnapshotVersion(C);m.Ts=m.Ts.insert(v,M)}}}(r.localStore,o))}async function $p(n,t){const e=K(n);if(!e.currentUser.isEqual(t)){U(Ui,"User change. New user:",t.toKey());const r=await Lu(e.localStore,t);e.currentUser=t,function(o,a){o.Ga.forEach(u=>{u.forEach(h=>{h.reject(new j(V.CANCELLED,a))})}),o.Ga.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await Qn(e,r.Rs)}}function Gp(n,t){const e=K(n),r=e.Ua.get(t);if(r&&r.Ba)return X().add(r.key);{let s=X();const o=e.qa.get(t);if(!o)return s;for(const a of o){const u=e.ka.get(a);s=s.unionWith(u.view.Sa)}return s}}function Zu(n){const t=K(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=Qu.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Gp.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Bp.bind(null,t),t.La.p_=Cp.bind(null,t.eventManager),t.La.Ja=Pp.bind(null,t.eventManager),t}function Hp(n){const t=K(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=jp.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=qp.bind(null,t),t}class Gr{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=ns(t.databaseInfo.databaseId),this.sharedClientState=this.Za(t),this.persistence=this.Xa(t),await this.persistence.start(),this.localStore=this.eu(t),this.gcScheduler=this.tu(t,this.localStore),this.indexBackfillerScheduler=this.nu(t,this.localStore)}tu(t,e){return null}nu(t,e){return null}eu(t){return Km(this.persistence,new $m,t.initialUser,this.serializer)}Xa(t){return new Ou(Si.ri,this.serializer)}Za(t){return new tp}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Gr.provider={build:()=>new Gr};class Kp extends Gr{constructor(t){super(),this.cacheSizeBytes=t}tu(t,e){rt(this.persistence.referenceDelegate instanceof zr);const r=this.persistence.referenceDelegate.garbageCollector;return new Sm(r,t.asyncQueue,e)}Xa(t){const e=this.cacheSizeBytes!==void 0?Nt.withCacheSize(this.cacheSizeBytes):Nt.DEFAULT;return new Ou(r=>zr.ri(r,e),this.serializer)}}class fi{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>cl(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=$p.bind(null,this.syncEngine),await wp(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new Ap}()}createDatastore(t){const e=ns(t.databaseInfo.databaseId),r=function(o){return new ip(o)}(t.databaseInfo);return function(o,a,u,h){return new up(o,a,u,h)}(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return function(r,s,o,a,u){return new hp(r,s,o,a,u)}(this.localStore,this.datastore,t.asyncQueue,e=>cl(this.syncEngine,e,0),function(){return sl.D()?new sl:new ep}())}createSyncEngine(t,e){return function(s,o,a,u,h,f,m){const E=new Np(s,o,a,u,h,f);return m&&(E.ja=!0),E}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(s){const o=K(s);U(Ce,"RemoteStore shutting down."),o.W_.add(5),await Wn(o),o.z_.shutdown(),o.j_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}fi.provider={build:()=>new fi};/**
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
 */class Wp{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.iu(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.iu(this.observer.error,t):te("Uncaught Error in snapshot listener:",t.toString()))}su(){this.muted=!0}iu(t,e){setTimeout(()=>{this.muted||t(e)},0)}}/**
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
 */const Ee="FirestoreClient";class Qp{constructor(t,e,r,s,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=s,this.user=Pt.UNAUTHENTICATED,this.clientId=Hl.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,async a=>{U(Ee,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(U(Ee,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new he;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=Fi(e,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function js(n,t){n.asyncQueue.verifyOperationInProgress(),U(Ee,"Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Lu(t.localStore,s),r=s)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function fl(n,t){n.asyncQueue.verifyOperationInProgress();const e=await Xp(n);U(Ee,"Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(r=>ol(t.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>ol(t.remoteStore,s)),n._onlineComponents=t}async function Xp(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){U(Ee,"Using user provided OfflineComponentProvider");try{await js(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(s){return s.name==="FirebaseError"?s.code===V.FAILED_PRECONDITION||s.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(e))throw e;We("Error using user provided cache. Falling back to memory cache: "+e),await js(n,new Gr)}}else U(Ee,"Using default OfflineComponentProvider"),await js(n,new Kp(void 0));return n._offlineComponents}async function tc(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(U(Ee,"Using user provided OnlineComponentProvider"),await fl(n,n._uninitializedComponentsProvider._online)):(U(Ee,"Using default OnlineComponentProvider"),await fl(n,new fi))),n._onlineComponents}function Yp(n){return tc(n).then(t=>t.syncEngine)}async function Jp(n){const t=await tc(n),e=t.eventManager;return e.onListen=Mp.bind(null,t.syncEngine),e.onUnlisten=Fp.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=Op.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=xp.bind(null,t.syncEngine),e}function Zp(n,t,e={}){const r=new he;return n.asyncQueue.enqueueAndForget(async()=>function(o,a,u,h,f){const m=new Wp({next:v=>{m.su(),a.enqueueAndForget(()=>Rp(o,E)),v.fromCache&&h.source==="server"?f.reject(new j(V.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):f.resolve(v)},error:v=>f.reject(v)}),E=new Sp(u,m,{includeMetadataChanges:!0,Ta:!0});return bp(o,E)}(await Jp(n),n.asyncQueue,t,e,r)),r.promise}/**
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
 */function ec(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
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
 */const dl=new Map;/**
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
 */function nc(n,t,e){if(!e)throw new j(V.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function tg(n,t,e,r){if(t===!0&&r===!0)throw new j(V.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function ml(n){if(!q.isDocumentKey(n))throw new j(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function pl(n){if(q.isDocumentKey(n))throw new j(V.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function is(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":$()}function Hr(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new j(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=is(n);throw new j(V.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
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
 */const rc="firestore.googleapis.com",gl=!0;class _l{constructor(t){var e,r;if(t.host===void 0){if(t.ssl!==void 0)throw new j(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=rc,this.ssl=gl}else this.host=t.host,this.ssl=(e=t.ssl)!==null&&e!==void 0?e:gl;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=Mu;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<Cm)throw new j(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}tg("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ec((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new j(V.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new j(V.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new j(V.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class os{constructor(t,e,r,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new _l({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new j(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new j(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new _l(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new sd;switch(r.type){case"firstParty":return new ld(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new j(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const r=dl.get(e);r&&(U("ComponentProvider","Removing Datastore"),dl.delete(e),r.terminate())}(this),Promise.resolve()}}function eg(n,t,e,r={}){var s;const o=(n=Hr(n,os))._getSettings(),a=Object.assign(Object.assign({},o),{emulatorOptions:n._getEmulatorOptions()}),u=`${t}:${e}`;o.host!==rc&&o.host!==u&&We("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const h=Object.assign(Object.assign({},o),{host:u,ssl:!1,emulatorOptions:r});if(!kr(h,a)&&(n._setSettings(h),r.mockUserToken)){let f,m;if(typeof r.mockUserToken=="string")f=r.mockUserToken,m=Pt.MOCK_USER;else{f=Lh(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const E=r.mockUserToken.sub||r.mockUserToken.user_id;if(!E)throw new j(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");m=new Pt(E)}n._authCredentials=new id(new $l(f,m))}}/**
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
 */class an{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new an(this.firestore,t,this._query)}}class Ft{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new fe(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Ft(this.firestore,t,this._key)}}class fe extends an{constructor(t,e,r){super(t,e,uu(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Ft(this.firestore,null,new q(t))}withConverter(t){return new fe(this.firestore,t,this._path)}}function sc(n,t,...e){if(n=Ke(n),nc("collection","path",t),n instanceof os){const r=at.fromString(t,...e);return pl(r),new fe(n,null,r)}{if(!(n instanceof Ft||n instanceof fe))throw new j(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(at.fromString(t,...e));return pl(r),new fe(n.firestore,null,r)}}function ng(n,t,...e){if(n=Ke(n),arguments.length===1&&(t=Hl.newId()),nc("doc","path",t),n instanceof os){const r=at.fromString(t,...e);return ml(r),new Ft(n,null,new q(r))}{if(!(n instanceof Ft||n instanceof fe))throw new j(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(at.fromString(t,...e));return ml(r),new Ft(n.firestore,n instanceof fe?n.converter:null,new q(r))}}/**
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
 */const yl="AsyncQueue";class El{constructor(t=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new xu(this,"async_queue_retry"),this.Su=()=>{const r=Bs();r&&U(yl,"Visibility state changed to "+r.visibilityState),this.a_.t_()},this.bu=t;const e=Bs();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Su)}get isShuttingDown(){return this.mu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Du(),this.vu(t)}enterRestrictedMode(t){if(!this.mu){this.mu=!0,this.yu=t||!1;const e=Bs();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.Su)}}enqueue(t){if(this.Du(),this.mu)return new Promise(()=>{});const e=new he;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Vu.push(t),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(t){if(!sn(t))throw t;U(yl,"Operation failed with retryable error: "+t)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(t){const e=this.bu.then(()=>(this.pu=!0,t().catch(r=>{this.gu=r,this.pu=!1;const s=function(a){let u=a.message||"";return a.stack&&(u=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),u}(r);throw te("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.pu=!1,r))));return this.bu=e,e}enqueueAfterDelay(t,e,r){this.Du(),this.wu.indexOf(t)>-1&&(e=0);const s=Li.createAndSchedule(this,t,e,r,o=>this.Fu(o));return this.fu.push(s),s}Du(){this.gu&&$()}verifyOperationInProgress(){}async Mu(){let t;do t=this.bu,await t;while(t!==this.bu)}xu(t){for(const e of this.fu)if(e.timerId===t)return!0;return!1}Ou(t){return this.Mu().then(()=>{this.fu.sort((e,r)=>e.targetTimeMs-r.targetTimeMs);for(const e of this.fu)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.Mu()})}Nu(t){this.wu.push(t)}Fu(t){const e=this.fu.indexOf(t);this.fu.splice(e,1)}}class ji extends os{constructor(t,e,r,s){super(t,e,r,s),this.type="firestore",this._queue=new El,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new El(t),this._firestoreClient=void 0,await t}}}function rg(n,t){const e=typeof n=="object"?n:Kf(),r=typeof n=="string"?n:Lr,s=qf(e,"firestore").getImmediate({identifier:r});if(!s._initialized){const o=Mh("firestore");o&&eg(s,...o)}return s}function ic(n){if(n._terminated)throw new j(V.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||sg(n),n._firestoreClient}function sg(n){var t,e,r;const s=n._freezeSettings(),o=function(u,h,f,m){return new Id(u,h,f,m.host,m.ssl,m.experimentalForceLongPolling,m.experimentalAutoDetectLongPolling,ec(m.experimentalLongPollingOptions),m.useFetchStreams)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((e=s.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new Qp(n._authCredentials,n._appCheckCredentials,n._queue,o,n._componentsProvider&&function(u){const h=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(h),_online:h}}(n._componentsProvider))}/**
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
 */class tn{constructor(t){this._byteString=t}static fromBase64String(t){try{return new tn(wt.fromBase64String(t))}catch(e){throw new j(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new tn(wt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class qi{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new j(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Tt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class oc{constructor(t){this._methodName=t}}/**
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
 */class zi{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new j(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new j(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return Q(this._lat,t._lat)||Q(this._long,t._long)}}/**
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
 */class $i{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(r,s){if(r.length!==s.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==s[o])return!1;return!0}(this._values,t._values)}}/**
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
 */const ig=/^__.*__$/;class og{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return this.fieldMask!==null?new Ve(t,this.data,this.fieldMask,e,this.fieldTransforms):new Hn(t,this.data,e,this.fieldTransforms)}}function ac(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw $()}}class Gi{constructor(t,e,r,s,o,a){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=s,o===void 0&&this.Bu(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(t){return new Gi(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.ku({path:r,Qu:!1});return s.$u(t),s}Uu(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.ku({path:r,Qu:!1});return s.Bu(),s}Ku(t){return this.ku({path:void 0,Qu:!0})}Wu(t){return Kr(t,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}Bu(){if(this.path)for(let t=0;t<this.path.length;t++)this.$u(this.path.get(t))}$u(t){if(t.length===0)throw this.Wu("Document fields must not be empty");if(ac(this.Lu)&&ig.test(t))throw this.Wu('Document fields cannot begin and end with "__"')}}class ag{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||ns(t)}ju(t,e,r,s=!1){return new Gi({Lu:t,methodName:e,zu:r,path:Tt.emptyPath(),Qu:!1,Gu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function lc(n){const t=n._freezeSettings(),e=ns(n._databaseId);return new ag(n._databaseId,!!t.ignoreUndefinedProperties,e)}function lg(n,t,e,r,s,o={}){const a=n.ju(o.merge||o.mergeFields?2:0,t,e,s);hc("Data must be an object, but it was:",a,r);const u=uc(r,a);let h,f;if(o.merge)h=new Bt(a.fieldMask),f=a.fieldTransforms;else if(o.mergeFields){const m=[];for(const E of o.mergeFields){const v=cg(t,E,e);if(!a.contains(v))throw new j(V.INVALID_ARGUMENT,`Field '${v}' is specified in your field mask but missing from your input data.`);fg(m,v)||m.push(v)}h=new Bt(m),f=a.fieldTransforms.filter(E=>h.covers(E.field))}else h=null,f=a.fieldTransforms;return new og(new Lt(u),h,f)}function ug(n,t,e,r=!1){return Hi(e,n.ju(r?4:3,t))}function Hi(n,t){if(cc(n=Ke(n)))return hc("Unsupported field value:",t,n),uc(n,t);if(n instanceof oc)return function(r,s){if(!ac(s.Lu))throw s.Wu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Wu(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(s);o&&s.fieldTransforms.push(o)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.Qu&&t.Lu!==4)throw t.Wu("Nested arrays are not supported");return function(r,s){const o=[];let a=0;for(const u of r){let h=Hi(u,s.Ku(a));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),a++}return{arrayValue:{values:o}}}(n,t)}return function(r,s){if((r=Ke(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Hd(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=pt.fromDate(r);return{timestampValue:qr(s.serializer,o)}}if(r instanceof pt){const o=new pt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:qr(s.serializer,o)}}if(r instanceof zi)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof tn)return{bytesValue:Cu(s.serializer,r._byteString)};if(r instanceof Ft){const o=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(o))throw s.Wu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:Ci(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof $i)return function(a,u){return{mapValue:{fields:{[tu]:{stringValue:eu},[Fr]:{arrayValue:{values:a.toArray().map(f=>{if(typeof f!="number")throw u.Wu("VectorValues must only contain numeric values.");return Ai(u.serializer,f)})}}}}}}(r,s);throw s.Wu(`Unsupported field value: ${is(r)}`)}(n,t)}function uc(n,t){const e={};return Wl(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Pe(n,(r,s)=>{const o=Hi(s,t.qu(r));o!=null&&(e[r]=o)}),{mapValue:{fields:e}}}function cc(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof pt||n instanceof zi||n instanceof tn||n instanceof Ft||n instanceof oc||n instanceof $i)}function hc(n,t,e){if(!cc(e)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(e)){const r=is(e);throw r==="an object"?t.Wu(n+" a custom object"):t.Wu(n+" "+r)}}function cg(n,t,e){if((t=Ke(t))instanceof qi)return t._internalPath;if(typeof t=="string")return fc(n,t);throw Kr("Field path arguments must be of type string or ",n,!1,void 0,e)}const hg=new RegExp("[~\\*/\\[\\]]");function fc(n,t,e){if(t.search(hg)>=0)throw Kr(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new qi(...t.split("."))._internalPath}catch{throw Kr(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function Kr(n,t,e,r,s){const o=r&&!r.isEmpty(),a=s!==void 0;let u=`Function ${t}() called with invalid data`;e&&(u+=" (via `toFirestore()`)"),u+=". ";let h="";return(o||a)&&(h+=" (found",o&&(h+=` in field ${r}`),a&&(h+=` in document ${s}`),h+=")"),new j(V.INVALID_ARGUMENT,u+n+h)}function fg(n,t){return n.some(e=>e.isEqual(t))}/**
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
 */class dc{constructor(t,e,r,s,o){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=s,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new Ft(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new dg(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Ki("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class dg extends dc{data(){return super.data()}}function Ki(n,t){return typeof t=="string"?fc(n,t):t instanceof qi?t._internalPath:t._delegate._internalPath}/**
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
 */function mg(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new j(V.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Wi{}class pg extends Wi{}function gg(n,t,...e){let r=[];t instanceof Wi&&r.push(t),r=r.concat(e),function(o){const a=o.filter(h=>h instanceof Qi).length,u=o.filter(h=>h instanceof as).length;if(a>1||a>0&&u>0)throw new j(V.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)n=s._apply(n);return n}class as extends pg{constructor(t,e,r){super(),this._field=t,this._op=e,this._value=r,this.type="where"}static _create(t,e,r){return new as(t,e,r)}_apply(t){const e=this._parse(t);return mc(t._query,e),new an(t.firestore,t.converter,ni(t._query,e))}_parse(t){const e=lc(t.firestore);return function(o,a,u,h,f,m,E){let v;if(f.isKeyField()){if(m==="array-contains"||m==="array-contains-any")throw new j(V.INVALID_ARGUMENT,`Invalid Query. You can't perform '${m}' queries on documentId().`);if(m==="in"||m==="not-in"){Tl(E,m);const C=[];for(const M of E)C.push(vl(h,o,M));v={arrayValue:{values:C}}}else v=vl(h,o,E)}else m!=="in"&&m!=="not-in"&&m!=="array-contains-any"||Tl(E,m),v=ug(u,a,E,m==="in"||m==="not-in");return mt.create(f,m,v)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}function _g(n,t,e){const r=t,s=Ki("where",n);return as._create(s,r,e)}class Qi extends Wi{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new Qi(t,e)}_parse(t){const e=this._queryConstraints.map(r=>r._parse(t)).filter(r=>r.getFilters().length>0);return e.length===1?e[0]:jt.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:(function(s,o){let a=s;const u=o.getFlattenedFilters();for(const h of u)mc(a,h),a=ni(a,h)}(t._query,e),new an(t.firestore,t.converter,ni(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function vl(n,t,e){if(typeof(e=Ke(e))=="string"){if(e==="")throw new j(V.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!cu(t)&&e.indexOf("/")!==-1)throw new j(V.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const r=t.path.child(at.fromString(e));if(!q.isDocumentKey(r))throw new j(V.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return La(n,new q(r))}if(e instanceof Ft)return La(n,e._key);throw new j(V.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${is(e)}.`)}function Tl(n,t){if(!Array.isArray(n)||n.length===0)throw new j(V.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function mc(n,t){const e=function(s,o){for(const a of s)for(const u of a.getFlattenedFilters())if(o.indexOf(u.op)>=0)return u.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(e!==null)throw e===t.op?new j(V.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new j(V.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}class yg{convertValue(t,e="none"){switch(_e(t)){case 0:return null;case 1:return t.booleanValue;case 2:return ft(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(ge(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw $()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return Pe(t,(s,o)=>{r[s]=this.convertValue(o,e)}),r}convertVectorValue(t){var e,r,s;const o=(s=(r=(e=t.fields)===null||e===void 0?void 0:e[Fr].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(a=>ft(a.doubleValue));return new $i(o)}convertGeoPoint(t){return new zi(ft(t.latitude),ft(t.longitude))}convertArray(t,e){return(t.values||[]).map(r=>this.convertValue(r,e))}convertServerTimestamp(t,e){switch(e){case"previous":const r=Xr(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(Fn(t));default:return null}}convertTimestamp(t){const e=pe(t);return new pt(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=at.fromString(t);rt(Nu(r));const s=new xn(r.get(1),r.get(3)),o=new q(r.popFirst(5));return s.isEqual(e)||te(`Document ${o} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}/**
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
 */function Eg(n,t,e){let r;return r=n?n.toFirestore(t):t,r}/**
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
 */class vr{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class vg extends dc{constructor(t,e,r,s,o,a){super(t,e,r,s,a),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Sr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(Ki("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}}class Sr extends vg{data(t={}){return super.data(t)}}class Tg{constructor(t,e,r,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new vr(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(r=>{t.call(e,new Sr(this._firestore,this._userDataWriter,r.key,r,new vr(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new j(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(s,o){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(u=>{const h=new Sr(s._firestore,s._userDataWriter,u.doc.key,u.doc,new vr(s._snapshot.mutatedKeys.has(u.doc.key),s._snapshot.fromCache),s.query.converter);return u.doc,{type:"added",doc:h,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(u=>o||u.type!==3).map(u=>{const h=new Sr(s._firestore,s._userDataWriter,u.doc.key,u.doc,new vr(s._snapshot.mutatedKeys.has(u.doc.key),s._snapshot.fromCache),s.query.converter);let f=-1,m=-1;return u.type!==0&&(f=a.indexOf(u.doc.key),a=a.delete(u.doc.key)),u.type!==1&&(a=a.add(u.doc),m=a.indexOf(u.doc.key)),{type:wg(u.type),doc:h,oldIndex:f,newIndex:m}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function wg(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return $()}}class Ig extends yg{constructor(t){super(),this.firestore=t}convertBytes(t){return new tn(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Ft(this.firestore,null,e)}}function Ag(n){n=Hr(n,an);const t=Hr(n.firestore,ji),e=ic(t),r=new Ig(t);return mg(n._query),Zp(e,n._query).then(s=>new Tg(t,r,n,s))}function bg(n,t){const e=Hr(n.firestore,ji),r=ng(n),s=Eg(n.converter,t);return Rg(e,[lg(lc(n.firestore),"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,Jt.exists(!1))]).then(()=>r)}function Rg(n,t){return function(r,s){const o=new he;return r.asyncQueue.enqueueAndForget(async()=>Up(await Yp(r),s,o)),o.promise}(ic(n),t)}(function(t,e=!0){(function(s){nn=s})(Hf),Mr(new Mn("firestore",(r,{instanceIdentifier:s,options:o})=>{const a=r.getProvider("app").getImmediate(),u=new ji(new od(r.getProvider("auth-internal")),new ud(a,r.getProvider("app-check-internal")),function(f,m){if(!Object.prototype.hasOwnProperty.apply(f.options,["projectId"]))throw new j(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new xn(f.options.projectId,m)}(a,s),a);return o=Object.assign({useFetchStreams:e},o),u._setSettings(o),u},"PUBLIC").setMultipleInstances(!0)),Ge(Aa,ba,t),Ge(Aa,ba,"esm2017")})();var Cg="firebase",Pg="11.5.0";/**
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
 */Ge(Cg,Pg,"app");const Sg={apiKey:"AIzaSyDNZCXCOGwTjyYXCzDLKGEr7dzj7XKvFNk",authDomain:"drents-elftal.firebaseapp.com",projectId:"drents-elftal",storageBucket:"drents-elftal.firebasestorage.app",messagingSenderId:"542166909378",appId:"1:542166909378:web:1c3cd5336f6168067c965b",measurementId:"G-1F8PEJ34WQ"},Vg=Ol(Sg),pc=rg(Vg);async function Dg(n){const t=sc(pc,"teams"),e=n.toLowerCase(),r=gg(t,_g("email","==",e)),s=await Ag(r);return console.log("Checking email:",e),console.log("Found duplicates:",!s.empty),!s.empty}async function kg(n,t,e){try{if(!t||t.trim()==="")throw new Error("Vul een e-mailadres in.");const r=t.toLowerCase().trim();if(await Dg(r))throw new Error("Je hebt al gestemd met dit e-mailadres.");const o={players:n,email:r,allowNewsletter:e,submittedAt:new Date};return(await bg(sc(pc,"teams"),o)).id}catch(r){throw console.error("Error submitting team:",r),r}}function wl(n){let t;return{c(){t=B("div"),t.textContent="Bedankt voor je stem! Je elftal is succesvol opgeslagen.",D(t,"class","success-message svelte-1m9rzzk")},m(e,r){nt(e,t,r)},d(e){e&&et(t)}}}function Ng(n){let t;return{c(){t=ht("Verstuur je stem")},m(e,r){nt(e,t,r)},d(e){e&&et(t)}}}function Mg(n){let t;return{c(){t=ht("Versturen...")},m(e,r){nt(e,t,r)},d(e){e&&et(t)}}}function Og(n){let t,e,r,s,o,a,u,h,f,m,E,v,A,C,M,S,k,F,O=n[5]&&wl();function Y(g,p){return g[3]?Mg:Ng}let G=Y(n),x=G(n),w={};return E=new fh({props:w}),n[11](E),E.$on("playersUpdate",n[8]),A=new _h({props:{isOpen:n[0],isSubmitting:n[3],submitError:n[4]}}),A.$on("close",n[12]),A.$on("submit",n[9]),M=new Ih({props:{isOpen:n[1],players:n[7]}}),{c(){t=B("main"),e=B("div"),e.innerHTML='<h1 class="svelte-1m9rzzk">Drents Elftal</h1> <p class="subtitle svelte-1m9rzzk">Create your best eleven</p>',r=W(),O&&O.c(),s=W(),o=B("div"),a=B("button"),x.c(),h=W(),f=B("div"),m=B("div"),Ir(E.$$.fragment),v=W(),Ir(A.$$.fragment),C=W(),Ir(M.$$.fragment),D(e,"class","header svelte-1m9rzzk"),D(a,"class","submit-button svelte-1m9rzzk"),a.disabled=u=!n[2]||n[3],D(o,"class","controls svelte-1m9rzzk"),D(m,"class","pitch-section svelte-1m9rzzk"),D(f,"class","container svelte-1m9rzzk"),D(t,"class","svelte-1m9rzzk")},m(g,p){nt(g,t,p),N(t,e),N(t,r),O&&O.m(t,null),N(t,s),N(t,o),N(o,a),x.m(a,null),N(t,h),N(t,f),N(f,m),Cn(E,m,null),N(t,v),Cn(A,t,null),N(t,C),Cn(M,t,null),S=!0,k||(F=lt(a,"click",n[10]),k=!0)},p(g,[p]){g[5]?O||(O=wl(),O.c(),O.m(t,s)):O&&(O.d(1),O=null),G!==(G=Y(g))&&(x.d(1),x=G(g),x&&(x.c(),x.m(a,null))),(!S||p&12&&u!==(u=!g[2]||g[3]))&&(a.disabled=u);const y={};E.$set(y);const T={};p&1&&(T.isOpen=g[0]),p&8&&(T.isSubmitting=g[3]),p&16&&(T.submitError=g[4]),A.$set(T);const I={};p&2&&(I.isOpen=g[1]),p&128&&(I.players=g[7]),M.$set(I)},i(g){S||(Rn(E.$$.fragment,g),Rn(A.$$.fragment,g),Rn(M.$$.fragment,g),S=!0)},o(g){wr(E.$$.fragment,g),wr(A.$$.fragment,g),wr(M.$$.fragment,g),S=!1},d(g){g&&et(t),O&&O.d(),x.d(),n[11](null),Pn(E),Pn(A),Pn(M),k=!1,F()}}}function Lg(n,t,e){let r=!1,s=!1,o=!1,a={},u=!1,h=null,f=!1,m,E={};function v(k){e(2,o=k.detail.filledPositions===11),a=k.detail.players}async function A(k){if(!u){e(3,u=!0),e(4,h=null);try{await kg(a,k.detail.email,k.detail.consent),e(5,f=!0),e(0,r=!1),e(7,E={...a}),e(1,s=!0),setTimeout(()=>{e(5,f=!1),e(3,u=!1)},3e3)}catch(F){console.error("Error submitting team:",F),e(4,h=F instanceof Error?F.message:"Er is iets misgegaan bij het versturen. Probeer het later opnieuw."),e(3,u=!1)}}}const C=()=>e(0,r=!0);function M(k){Vr[k?"unshift":"push"](()=>{m=k,e(6,m)})}return[r,s,o,u,h,f,m,E,v,A,C,M,()=>e(0,r=!1)]}class Fg extends $n{constructor(t){super(),zn(this,t,Lg,Og,qn,{})}}new Fg({target:document.getElementById("app")});
