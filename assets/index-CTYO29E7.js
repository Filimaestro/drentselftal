var $e=Object.defineProperty;var ze=(e,t,l)=>t in e?$e(e,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[t]=l;var ue=(e,t,l)=>ze(e,typeof t!="symbol"?t+"":t,l);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function l(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=l(i);fetch(i.href,s)}})();function G(){}function Ge(e){return e()}function he(){return Object.create(null)}function R(e){e.forEach(Ge)}function Ie(e){return typeof e=="function"}function ee(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function Ue(e){return Object.keys(e).length===0}function c(e,t){e.appendChild(t)}function B(e,t,l){e.insertBefore(t,l||null)}function N(e){e.parentNode&&e.parentNode.removeChild(e)}function X(e,t){for(let l=0;l<e.length;l+=1)e[l]&&e[l].d(t)}function _(e){return document.createElement(e)}function A(e){return document.createTextNode(e)}function E(){return A(" ")}function We(){return A("")}function F(e,t,l,n){return e.addEventListener(t,l,n),()=>e.removeEventListener(t,l,n)}function Ve(e){return function(t){return t.preventDefault(),e.call(this,t)}}function a(e,t,l){l==null?e.removeAttribute(t):e.getAttribute(t)!==l&&e.setAttribute(t,l)}function Je(e){return Array.from(e.childNodes)}function T(e,t){t=""+t,e.data!==t&&(e.data=t)}function $(e,t){e.value=t??""}function U(e,t,l,n){l==null?e.style.removeProperty(t):e.style.setProperty(t,l,"")}function _e(e,t,l){for(let n=0;n<e.options.length;n+=1){const i=e.options[n];if(i.__value===t){i.selected=!0;return}}(!l||t!==void 0)&&(e.selectedIndex=-1)}function Qe(e){const t=e.querySelector(":checked");return t&&t.__value}function Xe(e,t,{bubbles:l=!1,cancelable:n=!1}={}){return new CustomEvent(e,{detail:t,bubbles:l,cancelable:n})}let oe;function ne(e){oe=e}function qe(){if(!oe)throw new Error("Function called outside component initialization");return oe}function Ye(e){qe().$$.on_mount.push(e)}function fe(){const e=qe();return(t,l,{cancelable:n=!1}={})=>{const i=e.$$.callbacks[t];if(i){const s=Xe(t,l,{cancelable:n});return i.slice().forEach(r=>{r.call(e,s)}),!s.defaultPrevented}return!0}}const Q=[],ve=[];let Y=[];const ge=[],Ze=Promise.resolve();let de=!1;function xe(){de||(de=!0,Ze.then(He))}function re(e){Y.push(e)}const ce=new Set;let J=0;function He(){if(J!==0)return;const e=oe;do{try{for(;J<Q.length;){const t=Q[J];J++,ne(t),et(t.$$)}}catch(t){throw Q.length=0,J=0,t}for(ne(null),Q.length=0,J=0;ve.length;)ve.pop()();for(let t=0;t<Y.length;t+=1){const l=Y[t];ce.has(l)||(ce.add(l),l())}Y.length=0}while(Q.length);for(;ge.length;)ge.pop()();de=!1,ce.clear(),ne(e)}function et(e){if(e.fragment!==null){e.update(),R(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(re)}}function tt(e){const t=[],l=[];Y.forEach(n=>e.indexOf(n)===-1?t.push(n):l.push(n)),l.forEach(n=>n()),Y=t}const se=new Set;let V;function me(){V={r:0,c:[],p:V}}function pe(){V.r||R(V.c),V=V.p}function K(e,t){e&&e.i&&(se.delete(e),e.i(t))}function H(e,t,l,n){if(e&&e.o){if(se.has(e))return;se.add(e),V.c.push(()=>{se.delete(e),n&&(l&&e.d(1),n())}),e.o(t)}else n&&n()}function q(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function ie(e){e&&e.c()}function Z(e,t,l){const{fragment:n,after_update:i}=e.$$;n&&n.m(t,l),re(()=>{const s=e.$$.on_mount.map(Ge).filter(Ie);e.$$.on_destroy?e.$$.on_destroy.push(...s):R(s),e.$$.on_mount=[]}),i.forEach(re)}function x(e,t){const l=e.$$;l.fragment!==null&&(tt(l.after_update),R(l.on_destroy),l.fragment&&l.fragment.d(t),l.on_destroy=l.fragment=null,l.ctx=[])}function lt(e,t){e.$$.dirty[0]===-1&&(Q.push(e),xe(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function te(e,t,l,n,i,s,r=null,u=[-1]){const o=oe;ne(e);const f=e.$$={fragment:null,ctx:[],props:s,update:G,not_equal:i,bound:he(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(o?o.$$.context:[])),callbacks:he(),dirty:u,skip_bound:!1,root:t.target||o.$$.root};r&&r(f.root);let y=!1;if(f.ctx=l?l(e,t.props||{},(d,b,...p)=>{const k=p.length?p[0]:b;return f.ctx&&i(f.ctx[d],f.ctx[d]=k)&&(!f.skip_bound&&f.bound[d]&&f.bound[d](k),y&&lt(e,d)),b}):[],f.update(),y=!0,R(f.before_update),f.fragment=n?n(f.ctx):!1,t.target){if(t.hydrate){const d=Je(t.target);f.fragment&&f.fragment.l(d),d.forEach(N)}else f.fragment&&f.fragment.c();t.intro&&K(e.$$.fragment),Z(e,t.target,t.anchor),He()}ne(o)}class le{constructor(){ue(this,"$$");ue(this,"$$set")}$destroy(){x(this,1),this.$destroy=G}$on(t,l){if(!Ie(l))return G;const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(l),()=>{const i=n.indexOf(l);i!==-1&&n.splice(i,1)}}$set(t){this.$$set&&!Ue(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const nt="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(nt);function ye(e){let t,l,n,i,s=e[5]?"Edit":"Add",r,u,o,f,y,d,b,p,k,m,j,S,P,h,C,w,D,L,M,v,O,g=e[5]?"Save":"Add",I,ae,be;return{c(){t=_("div"),l=_("div"),n=_("div"),i=_("h3"),r=A(s),u=A(" Player - "),o=A(e[2]),f=A(" #"),y=A(e[3]),d=E(),b=_("form"),p=_("div"),k=_("label"),k.textContent="Player Name:",m=E(),j=_("input"),S=E(),P=_("div"),h=_("label"),h.textContent="Club:",C=E(),w=_("input"),D=E(),L=_("div"),M=_("button"),M.textContent="Cancel",v=E(),O=_("button"),I=A(g),a(i,"id","modal-title"),a(i,"class","svelte-jja17o"),a(n,"class","modal-header svelte-jja17o"),a(k,"for","playerName"),a(k,"class","svelte-jja17o"),a(j,"type","text"),a(j,"id","playerName"),j.required=!0,a(j,"placeholder","Enter player name"),a(j,"class","svelte-jja17o"),a(p,"class","form-group svelte-jja17o"),a(h,"for","playerClub"),a(h,"class","svelte-jja17o"),a(w,"type","text"),a(w,"id","playerClub"),w.required=!0,a(w,"placeholder","Enter club name"),a(w,"class","svelte-jja17o"),a(P,"class","form-group svelte-jja17o"),a(M,"type","button"),a(M,"class","cancel-button svelte-jja17o"),a(O,"type","submit"),a(O,"class","save-button svelte-jja17o"),a(L,"class","modal-footer svelte-jja17o"),a(b,"class","modal-content svelte-jja17o"),a(l,"class","modal svelte-jja17o"),a(l,"role","dialog"),a(l,"aria-labelledby","modal-title"),a(l,"aria-modal","true"),a(t,"class","modal-backdrop svelte-jja17o"),a(t,"role","presentation")},m(W,z){B(W,t,z),c(t,l),c(l,n),c(n,i),c(i,r),c(i,u),c(i,o),c(i,f),c(i,y),c(l,d),c(l,b),c(b,p),c(p,k),c(p,m),c(p,j),$(j,e[0]),c(b,S),c(b,P),c(P,h),c(P,C),c(P,w),$(w,e[1]),c(b,D),c(b,L),c(L,M),c(L,v),c(L,O),c(O,I),ae||(be=[F(j,"input",e[8]),F(w,"input",e[9]),F(M,"click",e[7]),F(b,"submit",Ve(e[6]))],ae=!0)},p(W,z){z&32&&s!==(s=W[5]?"Edit":"Add")&&T(r,s),z&4&&T(o,W[2]),z&8&&T(y,W[3]),z&1&&j.value!==W[0]&&$(j,W[0]),z&2&&w.value!==W[1]&&$(w,W[1]),z&32&&g!==(g=W[5]?"Save":"Add")&&T(I,g)},d(W){W&&N(t),ae=!1,R(be)}}}function ot(e){let t,l=e[4]&&ye(e);return{c(){l&&l.c(),t=We()},m(n,i){l&&l.m(n,i),B(n,t,i)},p(n,[i]){n[4]?l?l.p(n,i):(l=ye(n),l.c(),l.m(t.parentNode,t)):l&&(l.d(1),l=null)},i:G,o:G,d(n){n&&N(t),l&&l.d(n)}}}function it(e,t,l){let{position:n}=t,{number:i}=t,{playerName:s=""}=t,{club:r=""}=t,{isOpen:u=!1}=t,{isEdit:o=!1}=t;const f=fe();function y(){f("save",{playerName:s,club:r}),f("close")}function d(){f("close")}function b(m){m.key==="Escape"&&u&&d()}Ye(()=>(document.addEventListener("keydown",b),()=>{document.removeEventListener("keydown",b)}));function p(){s=this.value,l(0,s)}function k(){r=this.value,l(1,r)}return e.$$set=m=>{"position"in m&&l(2,n=m.position),"number"in m&&l(3,i=m.number),"playerName"in m&&l(0,s=m.playerName),"club"in m&&l(1,r=m.club),"isOpen"in m&&l(4,u=m.isOpen),"isEdit"in m&&l(5,o=m.isEdit)},[s,r,n,i,u,o,y,d,p,k]}class st extends le{constructor(t){super(),te(this,t,it,ot,ee,{position:2,number:3,playerName:0,club:1,isOpen:4,isEdit:5})}}function ke(e,t,l){const n=e.slice();return n[16]=t[l],n[18]=l,n}function je(e,t,l){const n=e.slice();return n[16]=t[l],n[18]=l,n}function Ce(e,t,l){const n=e.slice();return n[16]=t[l],n[18]=l,n}function we(e){let t,l=e[0][1].name+"",n,i,s,r=e[0][1].club+"",u;return{c(){t=_("span"),n=A(l),i=E(),s=_("span"),u=A(r),a(t,"class","player-name svelte-1lj5979"),a(s,"class","player-club svelte-1lj5979")},m(o,f){B(o,t,f),c(t,n),B(o,i,f),B(o,s,f),c(s,u)},p(o,f){f&1&&l!==(l=o[0][1].name+"")&&T(n,l),f&1&&r!==(r=o[0][1].club+"")&&T(u,r)},d(o){o&&(N(t),N(i),N(s))}}}function Ee(e){let t,l=e[0][e[18]+2].name+"",n,i,s,r=e[0][e[18]+2].club+"",u;return{c(){t=_("span"),n=A(l),i=E(),s=_("span"),u=A(r),a(t,"class","player-name svelte-1lj5979"),a(s,"class","player-club svelte-1lj5979")},m(o,f){B(o,t,f),c(t,n),B(o,i,f),B(o,s,f),c(s,u)},p(o,f){f&1&&l!==(l=o[0][o[18]+2].name+"")&&T(n,l),f&1&&r!==(r=o[0][o[18]+2].club+"")&&T(u,r)},d(o){o&&(N(t),N(i),N(s))}}}function Se(e){let t,l,n,i,s,r,u,o=e[0][e[18]+2]&&Ee(e);function f(){return e[10](e[18])}function y(...d){return e[11](e[18],...d)}return{c(){t=_("button"),l=_("span"),l.textContent=`${e[18]+2}`,n=E(),o&&o.c(),i=E(),a(l,"class","number svelte-1lj5979"),a(t,"type","button"),a(t,"class","player-position defender svelte-1lj5979"),a(t,"style",s="bottom: "+e[16].bottom+"; "+(e[16].left?"left: "+e[16].left:"right: "+e[16].right)),a(t,"aria-label","Select defender position "+(e[18]+1))},m(d,b){B(d,t,b),c(t,l),c(t,n),o&&o.m(t,null),c(t,i),r||(u=[F(t,"click",f),F(t,"keydown",y)],r=!0)},p(d,b){e=d,e[0][e[18]+2]?o?o.p(e,b):(o=Ee(e),o.c(),o.m(t,i)):o&&(o.d(1),o=null),b&8&&s!==(s="bottom: "+e[16].bottom+"; "+(e[16].left?"left: "+e[16].left:"right: "+e[16].right))&&a(t,"style",s)},d(d){d&&N(t),o&&o.d(),r=!1,R(u)}}}function Ne(e){let t,l=e[0][e[18]+6].name+"",n,i,s,r=e[0][e[18]+6].club+"",u;return{c(){t=_("span"),n=A(l),i=E(),s=_("span"),u=A(r),a(t,"class","player-name svelte-1lj5979"),a(s,"class","player-club svelte-1lj5979")},m(o,f){B(o,t,f),c(t,n),B(o,i,f),B(o,s,f),c(s,u)},p(o,f){f&1&&l!==(l=o[0][o[18]+6].name+"")&&T(n,l),f&1&&r!==(r=o[0][o[18]+6].club+"")&&T(u,r)},d(o){o&&(N(t),N(i),N(s))}}}function Be(e){let t,l,n,i,s,r,u,o=e[0][e[18]+6]&&Ne(e);function f(){return e[12](e[18])}function y(...d){return e[13](e[18],...d)}return{c(){t=_("button"),l=_("span"),l.textContent=`${e[18]+6}`,n=E(),o&&o.c(),i=E(),a(l,"class","number svelte-1lj5979"),a(t,"type","button"),a(t,"class","player-position midfielder svelte-1lj5979"),a(t,"style",s="bottom: "+e[16].bottom+"; "+(e[16].left?"left: "+e[16].left:"right: "+e[16].right)),a(t,"aria-label","Select midfielder position "+(e[18]+1))},m(d,b){B(d,t,b),c(t,l),c(t,n),o&&o.m(t,null),c(t,i),r||(u=[F(t,"click",f),F(t,"keydown",y)],r=!0)},p(d,b){e=d,e[0][e[18]+6]?o?o.p(e,b):(o=Ne(e),o.c(),o.m(t,i)):o&&(o.d(1),o=null),b&8&&s!==(s="bottom: "+e[16].bottom+"; "+(e[16].left?"left: "+e[16].left:"right: "+e[16].right))&&a(t,"style",s)},d(d){d&&N(t),o&&o.d(),r=!1,R(u)}}}function Pe(e){let t,l=e[0][e[18]+10].name+"",n,i,s,r=e[0][e[18]+10].club+"",u;return{c(){t=_("span"),n=A(l),i=E(),s=_("span"),u=A(r),a(t,"class","player-name svelte-1lj5979"),a(s,"class","player-club svelte-1lj5979")},m(o,f){B(o,t,f),c(t,n),B(o,i,f),B(o,s,f),c(s,u)},p(o,f){f&1&&l!==(l=o[0][o[18]+10].name+"")&&T(n,l),f&1&&r!==(r=o[0][o[18]+10].club+"")&&T(u,r)},d(o){o&&(N(t),N(i),N(s))}}}function Me(e){let t,l,n,i,s,r,u,o=e[0][e[18]+10]&&Pe(e);function f(){return e[14](e[18])}function y(...d){return e[15](e[18],...d)}return{c(){t=_("button"),l=_("span"),l.textContent=`${e[18]+10}`,n=E(),o&&o.c(),i=E(),a(l,"class","number svelte-1lj5979"),a(t,"type","button"),a(t,"class","player-position forward svelte-1lj5979"),a(t,"style",s="bottom: "+e[16].bottom+"; "+(e[16].left?"left: "+e[16].left:"right: "+e[16].right)),a(t,"aria-label","Select forward position "+(e[18]+1))},m(d,b){B(d,t,b),c(t,l),c(t,n),o&&o.m(t,null),c(t,i),r||(u=[F(t,"click",f),F(t,"keydown",y)],r=!0)},p(d,b){e=d,e[0][e[18]+10]?o?o.p(e,b):(o=Pe(e),o.c(),o.m(t,i)):o&&(o.d(1),o=null),b&8&&s!==(s="bottom: "+e[16].bottom+"; "+(e[16].left?"left: "+e[16].left:"right: "+e[16].right))&&a(t,"style",s)},d(d){d&&N(t),o&&o.d(),r=!1,R(u)}}}function Le(e){var n,i;let t,l;return t=new st({props:{position:e[1].position,number:e[1].number,playerName:((n=e[0][e[1].number])==null?void 0:n.name)||"",club:((i=e[0][e[1].number])==null?void 0:i.club)||"",isOpen:e[2],isEdit:!!e[0][e[1].number]}}),t.$on("close",e[5]),t.$on("save",e[6]),{c(){ie(t.$$.fragment)},m(s,r){Z(t,s,r),l=!0},p(s,r){var o,f;const u={};r&2&&(u.position=s[1].position),r&2&&(u.number=s[1].number),r&3&&(u.playerName=((o=s[0][s[1].number])==null?void 0:o.name)||""),r&3&&(u.club=((f=s[0][s[1].number])==null?void 0:f.club)||""),r&4&&(u.isOpen=s[2]),r&3&&(u.isEdit=!!s[0][s[1].number]),t.$set(u)},i(s){l||(K(t.$$.fragment,s),l=!0)},o(s){H(t.$$.fragment,s),l=!1},d(s){x(t,s)}}}function rt(e){let t,l,n,i,s,r,u,o,f,y,d,b,p,k,m,j,S=e[0][1]&&we(e),P=q(e[3].defenders),h=[];for(let v=0;v<P.length;v+=1)h[v]=Se(Ce(e,P,v));let C=q(e[3].midfielders),w=[];for(let v=0;v<C.length;v+=1)w[v]=Be(je(e,C,v));let D=q(e[3].forwards),L=[];for(let v=0;v<D.length;v+=1)L[v]=Me(ke(e,D,v));let M=e[1]&&e[2]&&Le(e);return{c(){t=_("div"),l=_("div"),n=_("div"),n.innerHTML='<div class="center-circle svelte-1lj5979"></div> <div class="center-line svelte-1lj5979"></div> <div class="center-spot svelte-1lj5979"></div> <div class="penalty-area penalty-area-top svelte-1lj5979"></div> <div class="penalty-area penalty-area-bottom svelte-1lj5979"></div> <div class="goal-area goal-area-top svelte-1lj5979"></div> <div class="goal-area goal-area-bottom svelte-1lj5979"></div> <div class="penalty-arc penalty-arc-top svelte-1lj5979"></div> <div class="penalty-arc penalty-arc-bottom svelte-1lj5979"></div> <div class="corner-arc corner-top-left svelte-1lj5979"></div> <div class="corner-arc corner-top-right svelte-1lj5979"></div> <div class="corner-arc corner-bottom-left svelte-1lj5979"></div> <div class="corner-arc corner-bottom-right svelte-1lj5979"></div>',i=E(),s=_("div"),r=_("button"),u=_("span"),u.textContent="1",o=E(),S&&S.c(),f=E();for(let v=0;v<h.length;v+=1)h[v].c();y=E();for(let v=0;v<w.length;v+=1)w[v].c();d=E();for(let v=0;v<L.length;v+=1)L[v].c();b=E(),M&&M.c(),p=We(),a(n,"class","pitch-markings svelte-1lj5979"),a(u,"class","number svelte-1lj5979"),a(r,"type","button"),a(r,"class","player-position goalkeeper svelte-1lj5979"),U(r,"bottom",e[3].goalkeeper.bottom),U(r,"left",e[3].goalkeeper.left),a(r,"aria-label","Select goalkeeper position"),a(s,"class","player-positions svelte-1lj5979"),a(l,"class","pitch-container svelte-1lj5979"),a(t,"class","football-pitch svelte-1lj5979")},m(v,O){B(v,t,O),c(t,l),c(l,n),c(l,i),c(l,s),c(s,r),c(r,u),c(r,o),S&&S.m(r,null),c(s,f);for(let g=0;g<h.length;g+=1)h[g]&&h[g].m(s,null);c(s,y);for(let g=0;g<w.length;g+=1)w[g]&&w[g].m(s,null);c(s,d);for(let g=0;g<L.length;g+=1)L[g]&&L[g].m(s,null);B(v,b,O),M&&M.m(v,O),B(v,p,O),k=!0,m||(j=[F(r,"click",e[8]),F(r,"keydown",e[9])],m=!0)},p(v,[O]){if(v[0][1]?S?S.p(v,O):(S=we(v),S.c(),S.m(r,null)):S&&(S.d(1),S=null),(!k||O&8)&&U(r,"bottom",v[3].goalkeeper.bottom),(!k||O&8)&&U(r,"left",v[3].goalkeeper.left),O&25){P=q(v[3].defenders);let g;for(g=0;g<P.length;g+=1){const I=Ce(v,P,g);h[g]?h[g].p(I,O):(h[g]=Se(I),h[g].c(),h[g].m(s,y))}for(;g<h.length;g+=1)h[g].d(1);h.length=P.length}if(O&25){C=q(v[3].midfielders);let g;for(g=0;g<C.length;g+=1){const I=je(v,C,g);w[g]?w[g].p(I,O):(w[g]=Be(I),w[g].c(),w[g].m(s,d))}for(;g<w.length;g+=1)w[g].d(1);w.length=C.length}if(O&25){D=q(v[3].forwards);let g;for(g=0;g<D.length;g+=1){const I=ke(v,D,g);L[g]?L[g].p(I,O):(L[g]=Me(I),L[g].c(),L[g].m(s,null))}for(;g<L.length;g+=1)L[g].d(1);L.length=D.length}v[1]&&v[2]?M?(M.p(v,O),O&6&&K(M,1)):(M=Le(v),M.c(),K(M,1),M.m(p.parentNode,p)):M&&(me(),H(M,1,1,()=>{M=null}),pe())},i(v){k||(K(M),k=!0)},o(v){H(M),k=!1},d(v){v&&(N(t),N(b),N(p)),S&&S.d(),X(h,v),X(w,v),X(L,v),M&&M.d(v),m=!1,R(j)}}}function ft(e){return{...{goalkeeper:{bottom:"8%",left:"50%"}},...{"4-4-2":{goalkeeper:{bottom:"8%",left:"50%"},defenders:[{bottom:"20%",left:"20%"},{bottom:"20%",left:"40%"},{bottom:"20%",left:"60%"},{bottom:"20%",left:"80%"}],midfielders:[{bottom:"50%",left:"20%"},{bottom:"50%",left:"40%"},{bottom:"50%",left:"60%"},{bottom:"50%",left:"80%"}],forwards:[{bottom:"75%",left:"35%"},{bottom:"75%",left:"65%"}]},"4-3-3":{goalkeeper:{bottom:"8%",left:"50%"},defenders:[{bottom:"20%",left:"20%"},{bottom:"20%",left:"40%"},{bottom:"20%",left:"60%"},{bottom:"20%",left:"80%"}],midfielders:[{bottom:"50%",left:"30%"},{bottom:"50%",left:"50%"},{bottom:"50%",left:"70%"}],forwards:[{bottom:"75%",left:"25%"},{bottom:"75%",left:"50%"},{bottom:"75%",left:"75%"}]},"3-5-2":{goalkeeper:{bottom:"8%",left:"50%"},defenders:[{bottom:"20%",left:"30%"},{bottom:"20%",left:"50%"},{bottom:"20%",left:"70%"}],midfielders:[{bottom:"50%",left:"15%"},{bottom:"50%",left:"35%"},{bottom:"50%",left:"50%"},{bottom:"50%",left:"65%"},{bottom:"50%",left:"85%"}],forwards:[{bottom:"75%",left:"35%"},{bottom:"75%",left:"65%"}]},"5-3-2":{goalkeeper:{bottom:"8%",left:"50%"},defenders:[{bottom:"20%",left:"15%"},{bottom:"20%",left:"35%"},{bottom:"20%",left:"50%"},{bottom:"20%",left:"65%"},{bottom:"20%",left:"85%"}],midfielders:[{bottom:"50%",left:"30%"},{bottom:"50%",left:"50%"},{bottom:"50%",left:"70%"}],forwards:[{bottom:"75%",left:"35%"},{bottom:"75%",left:"65%"}]},"4-2-3-1":{goalkeeper:{bottom:"8%",left:"50%"},defenders:[{bottom:"20%",left:"20%"},{bottom:"20%",left:"40%"},{bottom:"20%",left:"60%"},{bottom:"20%",left:"80%"}],midfielders:[{bottom:"40%",left:"35%"},{bottom:"40%",left:"65%"},{bottom:"60%",left:"30%"},{bottom:"60%",left:"50%"},{bottom:"60%",left:"70%"}],forwards:[{bottom:"80%",left:"50%"}]}}[e]}}function at(e,t,l){let n,{formation:i="4-4-2"}=t,s={},r=null,u=!1;function o(h,C){l(1,r={number:C,position:h}),l(2,u=!0)}function f(){l(2,u=!1),l(1,r=null)}function y(h){if(r){const{number:C,position:w}=r;l(0,s[C]={name:h.detail.playerName,club:h.detail.club,position:w,number:C},s)}}const d=()=>o("goalkeeper",1),b=h=>h.key==="Enter"&&o("goalkeeper",1),p=h=>o("defender",h+2),k=(h,C)=>C.key==="Enter"&&o("defender",h+2),m=h=>o("midfielder",h+6),j=(h,C)=>C.key==="Enter"&&o("midfielder",h+6),S=h=>o("forward",h+10),P=(h,C)=>C.key==="Enter"&&o("forward",h+10);return e.$$set=h=>{"formation"in h&&l(7,i=h.formation)},e.$$.update=()=>{e.$$.dirty&128&&l(3,n=ft(i))},[s,r,u,n,o,f,y,i,d,b,p,k,m,j,S,P]}class ut extends le{constructor(t){super(),te(this,t,at,rt,ee,{formation:7})}}function Oe(e,t,l){const n=e.slice();return n[5]=t[l],n}function Fe(e){let t,l=e[5]+"",n;return{c(){t=_("option"),n=A(l),t.__value=e[5],$(t,t.__value)},m(i,s){B(i,t,s),c(t,n)},p:G,d(i){i&&N(t)}}}function ct(e){let t,l,n,i,s,r,u=q(e[1]),o=[];for(let f=0;f<u.length;f+=1)o[f]=Fe(Oe(e,u,f));return{c(){t=_("div"),l=_("label"),l.textContent="Formation:",n=E(),i=_("select");for(let f=0;f<o.length;f+=1)o[f].c();a(l,"for","formation"),a(l,"class","svelte-1txkkcv"),a(i,"id","formation"),a(i,"class","svelte-1txkkcv"),e[0]===void 0&&re(()=>e[3].call(i)),a(t,"class","formation-selector svelte-1txkkcv")},m(f,y){B(f,t,y),c(t,l),c(t,n),c(t,i);for(let d=0;d<o.length;d+=1)o[d]&&o[d].m(i,null);_e(i,e[0],!0),s||(r=[F(i,"change",e[3]),F(i,"change",e[2])],s=!0)},p(f,[y]){if(y&2){u=q(f[1]);let d;for(d=0;d<u.length;d+=1){const b=Oe(f,u,d);o[d]?o[d].p(b,y):(o[d]=Fe(b),o[d].c(),o[d].m(i,null))}for(;d<o.length;d+=1)o[d].d(1);o.length=u.length}y&3&&_e(i,f[0])},i:G,o:G,d(f){f&&N(t),X(o,f),s=!1,R(r)}}}function dt(e,t,l){const n=["4-4-2","4-3-3","3-5-2","5-3-2","4-2-3-1"];let i="4-4-2";const s=fe();function r(){s("formationChange",i)}function u(){i=Qe(this),l(0,i),l(1,n)}return[i,n,r,u]}class mt extends le{constructor(t){super(),te(this,t,dt,ct,ee,{})}}function Ae(e,t,l){const n=e.slice();return n[11]=t[l],n[13]=l,n}function Te(e){let t,l=q(e[1]),n=[];for(let i=0;i<l.length;i+=1)n[i]=Ke(Ae(e,l,i));return{c(){t=_("ul");for(let i=0;i<n.length;i+=1)n[i].c();a(t,"id","club-suggestions"),a(t,"class","suggestions svelte-12fi29h"),a(t,"role","listbox"),a(t,"aria-label","Club suggestions")},m(i,s){B(i,t,s);for(let r=0;r<n.length;r+=1)n[r]&&n[r].m(t,null)},p(i,s){if(s&106){l=q(i[1]);let r;for(r=0;r<l.length;r+=1){const u=Ae(i,l,r);n[r]?n[r].p(u,s):(n[r]=Ke(u),n[r].c(),n[r].m(t,null))}for(;r<n.length;r+=1)n[r].d(1);n.length=l.length}},d(i){i&&N(t),X(n,i)}}}function Ke(e){let t,l,n,i,s,r=e[11].name+"",u,o,f,y,d;function b(){return e[8](e[11],e[13])}function p(...k){return e[9](e[11],e[13],...k)}return{c(){t=_("li"),l=_("div"),n=_("div"),i=E(),s=_("span"),u=A(r),o=E(),a(n,"class","jersey-preview svelte-12fi29h"),U(n,"background-color",e[11].jerseyColor),a(l,"class","club-option svelte-12fi29h"),a(t,"id","club-option-"+e[13]),a(t,"role","option"),a(t,"aria-selected",f=e[3]===e[13]),a(t,"tabindex","0"),a(t,"class","svelte-12fi29h")},m(k,m){B(k,t,m),c(t,l),c(l,n),c(l,i),c(l,s),c(s,u),c(t,o),y||(d=[F(t,"click",b),F(t,"keydown",p)],y=!0)},p(k,m){e=k,m&2&&U(n,"background-color",e[11].jerseyColor),m&2&&r!==(r=e[11].name+"")&&T(u,r),m&8&&f!==(f=e[3]===e[13])&&a(t,"aria-selected",f)},d(k){k&&N(t),y=!1,R(d)}}}function pt(e){let t,l,n,i,s,r,u,o=e[2]&&e[1].length>0&&Te(e);return{c(){t=_("template"),l=_("div"),n=_("input"),s=E(),o&&o.c(),a(n,"type","text"),a(n,"placeholder","Search for a club..."),a(n,"role","combobox"),a(n,"aria-expanded",e[2]),a(n,"aria-controls","club-suggestions"),a(n,"aria-activedescendant",i=e[3]>=0?`club-option-${e[3]}`:void 0),a(n,"class","svelte-12fi29h"),a(l,"class","club-search svelte-12fi29h")},m(f,y){B(f,t,y),c(t.content,l),c(l,n),$(n,e[0]),c(l,s),o&&o.m(l,null),r||(u=[F(n,"input",e[7]),F(n,"input",e[4])],r=!0)},p(f,[y]){y&4&&a(n,"aria-expanded",f[2]),y&8&&i!==(i=f[3]>=0?`club-option-${f[3]}`:void 0)&&a(n,"aria-activedescendant",i),y&1&&n.value!==f[0]&&$(n,f[0]),f[2]&&f[1].length>0?o?o.p(f,y):(o=Te(f),o.c(),o.m(l,null)):o&&(o.d(1),o=null)},i:G,o:G,d(f){f&&N(t),o&&o.d(),r=!1,R(u)}}}function bt(e,t,l){const n=fe();let i="",s=[],r=!1,u=-1;function o(k){const m=k.target;l(0,i=m.value),i.length>2?(l(1,s=[{name:"FC Groningen",jerseyColor:"#0066cc"},{name:"SC Heerenveen",jerseyColor:"#ffffff"},{name:"FC Emmen",jerseyColor:"#ff0000"},{name:"FC Twente",jerseyColor:"#ff0000"},{name:"Heracles Almelo",jerseyColor:"#000000"}].filter(j=>j.name.toLowerCase().includes(i.toLowerCase()))),l(2,r=!0),l(3,u=-1)):(l(1,s=[]),l(2,r=!1))}function f(k,m){l(0,i=k.name),l(3,u=m),l(2,r=!1),n("clubSelect",{clubName:k.name,jerseyColor:k.jerseyColor})}function y(k,m,j){(k.key==="Enter"||k.key===" ")&&f(m,j)}function d(){i=this.value,l(0,i)}return[i,s,r,u,o,f,y,d,(k,m)=>f(k,m),(k,m,j)=>y(j,k,m)]}class ht extends le{constructor(t){super(),te(this,t,bt,pt,ee,{})}}function _t(e){let t,l=(e[1]||"Select Club")+"",n,i,s;return{c(){t=_("button"),n=A(l),a(t,"class","club-button svelte-aj8v9v")},m(r,u){B(r,t,u),c(t,n),i||(s=F(t,"click",e[7]),i=!0)},p(r,u){u&2&&l!==(l=(r[1]||"Select Club")+"")&&T(n,l)},i:G,o:G,d(r){r&&N(t),i=!1,s()}}}function vt(e){let t,l;return t=new ht({}),t.$on("clubSelect",e[6]),{c(){ie(t.$$.fragment)},m(n,i){Z(t,n,i),l=!0},p:G,i(n){l||(K(t.$$.fragment,n),l=!0)},o(n){H(t.$$.fragment,n),l=!1},d(n){x(t,n)}}}function gt(e){let t,l,n,i,s,r,u,o,f,y,d,b,p,k,m,j;const S=[vt,_t],P=[];function h(C,w){return C[4]?0:1}return b=h(e),p=P[b]=S[b](e),{c(){t=_("template"),l=_("div"),n=_("div"),i=A(e[3]),s=E(),r=_("div"),u=E(),o=_("div"),f=_("input"),y=E(),d=_("div"),p.c(),a(n,"class","position-label svelte-aj8v9v"),a(r,"class","jersey svelte-aj8v9v"),U(r,"background-color",e[2]),a(f,"type","text"),a(f,"placeholder","Player name"),a(f,"class","svelte-aj8v9v"),a(d,"class","club-section svelte-aj8v9v"),a(o,"class","player-inputs svelte-aj8v9v"),a(l,"class","player-card svelte-aj8v9v")},m(C,w){B(C,t,w),c(t.content,l),c(l,n),c(n,i),c(l,s),c(l,r),c(l,u),c(l,o),c(o,f),$(f,e[0]),c(o,y),c(o,d),P[b].m(d,null),k=!0,m||(j=[F(f,"input",e[8]),F(f,"input",e[5])],m=!0)},p(C,[w]){(!k||w&8)&&T(i,C[3]),(!k||w&4)&&U(r,"background-color",C[2]),w&1&&f.value!==C[0]&&$(f,C[0]);let D=b;b=h(C),b===D?P[b].p(C,w):(me(),H(P[D],1,1,()=>{P[D]=null}),pe(),p=P[b],p?p.p(C,w):(p=P[b]=S[b](C),p.c()),K(p,1),p.m(d,null))},i(C){k||(K(p),k=!0)},o(C){H(p),k=!1},d(C){C&&N(t),P[b].d(),m=!1,R(j)}}}function yt(e,t,l){const n=fe();let{position:i}=t,{playerName:s=""}=t,{clubName:r=""}=t,{jerseyColor:u="#ffffff"}=t,o=!1;function f(p){const k=p.target;l(0,s=k.value),n("playerChange",{position:i,playerName:s})}function y(p){l(1,r=p.detail.clubName),l(2,u=p.detail.jerseyColor),l(4,o=!1),n("clubChange",{position:i,clubName:r,jerseyColor:u})}function d(){l(4,o=!o)}function b(){s=this.value,l(0,s)}return e.$$set=p=>{"position"in p&&l(3,i=p.position),"playerName"in p&&l(0,s=p.playerName),"clubName"in p&&l(1,r=p.clubName),"jerseyColor"in p&&l(2,u=p.jerseyColor)},[s,r,u,i,o,f,y,d,b]}class kt extends le{constructor(t){super(),te(this,t,yt,gt,ee,{position:3,playerName:0,clubName:1,jerseyColor:2})}}function Re(e,t,l){const n=e.slice();return n[3]=t[l],n}function De(e){let t,l;return t=new kt({props:{position:e[3].position}}),{c(){ie(t.$$.fragment)},m(n,i){Z(t,n,i),l=!0},p(n,i){const s={};i&1&&(s.position=n[3].position),t.$set(s)},i(n){l||(K(t.$$.fragment,n),l=!0)},o(n){H(t.$$.fragment,n),l=!1},d(n){x(t,n)}}}function jt(e){let t,l,n,i,s,r,u,o,f,y,d;r=new mt({props:{selectedFormation:e[0]}}),r.$on("formationChange",e[1]),o=new ut({props:{formation:e[0]}});let b=q(e[2][e[0]]),p=[];for(let m=0;m<b.length;m+=1)p[m]=De(Re(e,b,m));const k=m=>H(p[m],1,1,()=>{p[m]=null});return{c(){t=_("main"),l=_("div"),l.innerHTML='<h1 class="svelte-eisf1d">Drents Elftal</h1> <p class="subtitle svelte-eisf1d">Create your best eleven</p>',n=E(),i=_("div"),s=_("div"),ie(r.$$.fragment),u=E(),ie(o.$$.fragment),f=E(),y=_("div");for(let m=0;m<p.length;m+=1)p[m].c();a(l,"class","header svelte-eisf1d"),a(s,"class","pitch-section svelte-eisf1d"),a(y,"class","player-list svelte-eisf1d"),a(i,"class","container svelte-eisf1d"),a(t,"class","svelte-eisf1d")},m(m,j){B(m,t,j),c(t,l),c(t,n),c(t,i),c(i,s),Z(r,s,null),c(s,u),Z(o,s,null),c(i,f),c(i,y);for(let S=0;S<p.length;S+=1)p[S]&&p[S].m(y,null);d=!0},p(m,[j]){const S={};j&1&&(S.selectedFormation=m[0]),r.$set(S);const P={};if(j&1&&(P.formation=m[0]),o.$set(P),j&5){b=q(m[2][m[0]]);let h;for(h=0;h<b.length;h+=1){const C=Re(m,b,h);p[h]?(p[h].p(C,j),K(p[h],1)):(p[h]=De(C),p[h].c(),K(p[h],1),p[h].m(y,null))}for(me(),h=b.length;h<p.length;h+=1)k(h);pe()}},i(m){if(!d){K(r.$$.fragment,m),K(o.$$.fragment,m);for(let j=0;j<b.length;j+=1)K(p[j]);d=!0}},o(m){H(r.$$.fragment,m),H(o.$$.fragment,m),p=p.filter(Boolean);for(let j=0;j<p.length;j+=1)H(p[j]);d=!1},d(m){m&&N(t),x(r),x(o),X(p,m)}}}function Ct(e,t,l){let n="4-4-2";function i(r){l(0,n=r.detail)}return[n,i,{"4-4-2":[{position:"GK"},{position:"LB"},{position:"CB"},{position:"CB"},{position:"RB"},{position:"LM"},{position:"CM"},{position:"CM"},{position:"RM"},{position:"ST"},{position:"ST"}],"4-3-3":[{position:"GK"},{position:"LB"},{position:"CB"},{position:"CB"},{position:"RB"},{position:"CM"},{position:"CM"},{position:"CM"},{position:"LW"},{position:"ST"},{position:"RW"}],"3-5-2":[{position:"GK"},{position:"CB"},{position:"CB"},{position:"CB"},{position:"LWB"},{position:"CM"},{position:"CM"},{position:"CM"},{position:"RWB"},{position:"ST"},{position:"ST"}],"5-3-2":[{position:"GK"},{position:"LWB"},{position:"CB"},{position:"CB"},{position:"CB"},{position:"RWB"},{position:"CM"},{position:"CM"},{position:"CM"},{position:"ST"},{position:"ST"}],"4-2-3-1":[{position:"GK"},{position:"LB"},{position:"CB"},{position:"CB"},{position:"RB"},{position:"CDM"},{position:"CDM"},{position:"CAM"},{position:"CAM"},{position:"CAM"},{position:"ST"}]}]}class wt extends le{constructor(t){super(),te(this,t,Ct,jt,ee,{})}}new wt({target:document.getElementById("app")});
