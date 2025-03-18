var $e=Object.defineProperty;var Je=(e,t,l)=>t in e?$e(e,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[t]=l;var ce=(e,t,l)=>Je(e,typeof t!="symbol"?t+"":t,l);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function l(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(o){if(o.ep)return;o.ep=!0;const i=l(o);fetch(o.href,i)}})();function G(){}function Ve(e){return e()}function he(){return Object.create(null)}function V(e){e.forEach(Ve)}function We(e){return typeof e=="function"}function Y(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function Qe(e){return Object.keys(e).length===0}function c(e,t){e.appendChild(t)}function F(e,t,l){e.insertBefore(t,l||null)}function L(e){e.parentNode&&e.parentNode.removeChild(e)}function le(e,t){for(let l=0;l<e.length;l+=1)e[l]&&e[l].d(t)}function b(e){return document.createElement(e)}function T(e){return document.createTextNode(e)}function E(){return T(" ")}function pe(){return T("")}function A(e,t,l,n){return e.addEventListener(t,l,n),()=>e.removeEventListener(t,l,n)}function qe(e){return function(t){return t.preventDefault(),e.call(this,t)}}function f(e,t,l){l==null?e.removeAttribute(t):e.getAttribute(t)!==l&&e.setAttribute(t,l)}function Xe(e){return Array.from(e.childNodes)}function I(e,t){t=""+t,e.data!==t&&(e.data=t)}function U(e,t){e.value=t??""}function $(e,t,l,n){l==null?e.style.removeProperty(t):e.style.setProperty(t,l,"")}function _e(e,t,l){for(let n=0;n<e.options.length;n+=1){const o=e.options[n];if(o.__value===t){o.selected=!0;return}}(!l||t!==void 0)&&(e.selectedIndex=-1)}function Ye(e){const t=e.querySelector(":checked");return t&&t.__value}function Ze(e,t,{bubbles:l=!1,cancelable:n=!1}={}){return new CustomEvent(e,{detail:t,bubbles:l,cancelable:n})}let ae;function re(e){ae=e}function He(){if(!ae)throw new Error("Function called outside component initialization");return ae}function Ue(e){He().$$.on_mount.push(e)}function ie(){const e=He();return(t,l,{cancelable:n=!1}={})=>{const o=e.$$.callbacks[t];if(o){const i=Ze(t,l,{cancelable:n});return o.slice().forEach(r=>{r.call(e,i)}),!i.defaultPrevented}return!0}}const te=[],ge=[];let ne=[];const ye=[],xe=Promise.resolve();let me=!1;function et(){me||(me=!0,xe.then(ze))}function ue(e){ne.push(e)}const de=new Set;let ee=0;function ze(){if(ee!==0)return;const e=ae;do{try{for(;ee<te.length;){const t=te[ee];ee++,re(t),tt(t.$$)}}catch(t){throw te.length=0,ee=0,t}for(re(null),te.length=0,ee=0;ge.length;)ge.pop()();for(let t=0;t<ne.length;t+=1){const l=ne[t];de.has(l)||(de.add(l),l())}ne.length=0}while(te.length);for(;ye.length;)ye.pop()();me=!1,de.clear(),re(e)}function tt(e){if(e.fragment!==null){e.update(),V(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(ue)}}function lt(e){const t=[],l=[];ne.forEach(n=>e.indexOf(n)===-1?t.push(n):l.push(n)),l.forEach(n=>n()),ne=t}const fe=new Set;let J;function be(){J={r:0,c:[],p:J}}function ve(){J.r||V(J.c),J=J.p}function D(e,t){e&&e.i&&(fe.delete(e),e.i(t))}function H(e,t,l,n){if(e&&e.o){if(fe.has(e))return;fe.add(e),J.c.push(()=>{fe.delete(e),n&&(l&&e.d(1),n())}),e.o(t)}else n&&n()}function q(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function oe(e){e&&e.c()}function Q(e,t,l){const{fragment:n,after_update:o}=e.$$;n&&n.m(t,l),ue(()=>{const i=e.$$.on_mount.map(Ve).filter(We);e.$$.on_destroy?e.$$.on_destroy.push(...i):V(i),e.$$.on_mount=[]}),o.forEach(ue)}function X(e,t){const l=e.$$;l.fragment!==null&&(lt(l.after_update),V(l.on_destroy),l.fragment&&l.fragment.d(t),l.on_destroy=l.fragment=null,l.ctx=[])}function nt(e,t){e.$$.dirty[0]===-1&&(te.push(e),et(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function Z(e,t,l,n,o,i,r=null,u=[-1]){const s=ae;re(e);const a=e.$$={fragment:null,ctx:[],props:i,update:G,not_equal:o,bound:he(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(s?s.$$.context:[])),callbacks:he(),dirty:u,skip_bound:!1,root:t.target||s.$$.root};r&&r(a.root);let C=!1;if(a.ctx=l?l(e,t.props||{},(d,m,...v)=>{const k=v.length?v[0]:m;return a.ctx&&o(a.ctx[d],a.ctx[d]=k)&&(!a.skip_bound&&a.bound[d]&&a.bound[d](k),C&&nt(e,d)),m}):[],a.update(),C=!0,V(a.before_update),a.fragment=n?n(a.ctx):!1,t.target){if(t.hydrate){const d=Xe(t.target);a.fragment&&a.fragment.l(d),d.forEach(L)}else a.fragment&&a.fragment.c();t.intro&&D(e.$$.fragment),Q(e,t.target,t.anchor),ze()}re(s)}class x{constructor(){ce(this,"$$");ce(this,"$$set")}$destroy(){X(this,1),this.$destroy=G}$on(t,l){if(!We(l))return G;const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(l),()=>{const o=n.indexOf(l);o!==-1&&n.splice(o,1)}}$set(t){this.$$set&&!Qe(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const ot="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(ot);function ke(e){let t,l,n,o,i=e[5]?"Edit":"Add",r,u,s,a,C,d,m,v,k,j,B,S,N,P,g,y,w,O,h,p,M,_=e[5]?"Save":"Add",R,K,se;return{c(){t=b("div"),l=b("div"),n=b("div"),o=b("h3"),r=T(i),u=T(" Player - "),s=T(e[2]),a=T(" #"),C=T(e[3]),d=E(),m=b("form"),v=b("div"),k=b("label"),k.textContent="Player Name:",j=E(),B=b("input"),S=E(),N=b("div"),P=b("label"),P.textContent="Club:",g=E(),y=b("input"),w=E(),O=b("div"),h=b("button"),h.textContent="Cancel",p=E(),M=b("button"),R=T(_),f(o,"id","modal-title"),f(o,"class","svelte-jja17o"),f(n,"class","modal-header svelte-jja17o"),f(k,"for","playerName"),f(k,"class","svelte-jja17o"),f(B,"type","text"),f(B,"id","playerName"),B.required=!0,f(B,"placeholder","Enter player name"),f(B,"class","svelte-jja17o"),f(v,"class","form-group svelte-jja17o"),f(P,"for","playerClub"),f(P,"class","svelte-jja17o"),f(y,"type","text"),f(y,"id","playerClub"),y.required=!0,f(y,"placeholder","Enter club name"),f(y,"class","svelte-jja17o"),f(N,"class","form-group svelte-jja17o"),f(h,"type","button"),f(h,"class","cancel-button svelte-jja17o"),f(M,"type","submit"),f(M,"class","save-button svelte-jja17o"),f(O,"class","modal-footer svelte-jja17o"),f(m,"class","modal-content svelte-jja17o"),f(l,"class","modal svelte-jja17o"),f(l,"role","dialog"),f(l,"aria-labelledby","modal-title"),f(l,"aria-modal","true"),f(t,"class","modal-backdrop svelte-jja17o"),f(t,"role","presentation")},m(W,z){F(W,t,z),c(t,l),c(l,n),c(n,o),c(o,r),c(o,u),c(o,s),c(o,a),c(o,C),c(l,d),c(l,m),c(m,v),c(v,k),c(v,j),c(v,B),U(B,e[0]),c(m,S),c(m,N),c(N,P),c(N,g),c(N,y),U(y,e[1]),c(m,w),c(m,O),c(O,h),c(O,p),c(O,M),c(M,R),K||(se=[A(B,"input",e[8]),A(y,"input",e[9]),A(h,"click",e[7]),A(m,"submit",qe(e[6]))],K=!0)},p(W,z){z&32&&i!==(i=W[5]?"Edit":"Add")&&I(r,i),z&4&&I(s,W[2]),z&8&&I(C,W[3]),z&1&&B.value!==W[0]&&U(B,W[0]),z&2&&y.value!==W[1]&&U(y,W[1]),z&32&&_!==(_=W[5]?"Save":"Add")&&I(R,_)},d(W){W&&L(t),K=!1,V(se)}}}function it(e){let t,l=e[4]&&ke(e);return{c(){l&&l.c(),t=pe()},m(n,o){l&&l.m(n,o),F(n,t,o)},p(n,[o]){n[4]?l?l.p(n,o):(l=ke(n),l.c(),l.m(t.parentNode,t)):l&&(l.d(1),l=null)},i:G,o:G,d(n){n&&L(t),l&&l.d(n)}}}function st(e,t,l){let{position:n}=t,{number:o}=t,{playerName:i=""}=t,{club:r=""}=t,{isOpen:u=!1}=t,{isEdit:s=!1}=t;const a=ie();function C(){a("save",{playerName:i,club:r}),a("close")}function d(){a("close")}function m(j){j.key==="Escape"&&u&&d()}Ue(()=>(document.addEventListener("keydown",m),()=>{document.removeEventListener("keydown",m)}));function v(){i=this.value,l(0,i)}function k(){r=this.value,l(1,r)}return e.$$set=j=>{"position"in j&&l(2,n=j.position),"number"in j&&l(3,o=j.number),"playerName"in j&&l(0,i=j.playerName),"club"in j&&l(1,r=j.club),"isOpen"in j&&l(4,u=j.isOpen),"isEdit"in j&&l(5,s=j.isEdit)},[i,r,n,o,u,s,C,d,v,k]}class rt extends x{constructor(t){super(),Z(this,t,st,it,Y,{position:2,number:3,playerName:0,club:1,isOpen:4,isEdit:5})}}function Ce(e,t,l){const n=e.slice();return n[17]=t[l],n[19]=l,n}function je(e,t,l){const n=e.slice();return n[17]=t[l],n[19]=l,n}function we(e,t,l){const n=e.slice();return n[17]=t[l],n[19]=l,n}function Ee(e){let t,l=e[0][1].name+"",n,o,i,r=e[0][1].club+"",u;return{c(){t=b("span"),n=T(l),o=E(),i=b("span"),u=T(r),f(t,"class","player-name svelte-12b20xv"),f(i,"class","player-club svelte-12b20xv")},m(s,a){F(s,t,a),c(t,n),F(s,o,a),F(s,i,a),c(i,u)},p(s,a){a&1&&l!==(l=s[0][1].name+"")&&I(n,l),a&1&&r!==(r=s[0][1].club+"")&&I(u,r)},d(s){s&&(L(t),L(o),L(i))}}}function Se(e){let t,l=e[0][e[19]+2].name+"",n,o,i,r=e[0][e[19]+2].club+"",u;return{c(){t=b("span"),n=T(l),o=E(),i=b("span"),u=T(r),f(t,"class","player-name svelte-12b20xv"),f(i,"class","player-club svelte-12b20xv")},m(s,a){F(s,t,a),c(t,n),F(s,o,a),F(s,i,a),c(i,u)},p(s,a){a&1&&l!==(l=s[0][s[19]+2].name+"")&&I(n,l),a&1&&r!==(r=s[0][s[19]+2].club+"")&&I(u,r)},d(s){s&&(L(t),L(o),L(i))}}}function Ne(e){let t,l,n,o,i,r,u,s=e[0][e[19]+2]&&Se(e);function a(){return e[10](e[19])}function C(...d){return e[11](e[19],...d)}return{c(){t=b("button"),l=b("span"),l.textContent=`${e[19]+2}`,n=E(),s&&s.c(),o=E(),f(l,"class","number svelte-12b20xv"),f(t,"type","button"),f(t,"class","player-position defender svelte-12b20xv"),f(t,"style",i="bottom: "+e[17].bottom+"; "+(e[17].left?"left: "+e[17].left:"right: "+e[17].right)),f(t,"aria-label","Select defender position "+(e[19]+1))},m(d,m){F(d,t,m),c(t,l),c(t,n),s&&s.m(t,null),c(t,o),r||(u=[A(t,"click",a),A(t,"keydown",C)],r=!0)},p(d,m){e=d,e[0][e[19]+2]?s?s.p(e,m):(s=Se(e),s.c(),s.m(t,o)):s&&(s.d(1),s=null),m&8&&i!==(i="bottom: "+e[17].bottom+"; "+(e[17].left?"left: "+e[17].left:"right: "+e[17].right))&&f(t,"style",i)},d(d){d&&L(t),s&&s.d(),r=!1,V(u)}}}function Pe(e){let t,l=e[0][e[19]+6].name+"",n,o,i,r=e[0][e[19]+6].club+"",u;return{c(){t=b("span"),n=T(l),o=E(),i=b("span"),u=T(r),f(t,"class","player-name svelte-12b20xv"),f(i,"class","player-club svelte-12b20xv")},m(s,a){F(s,t,a),c(t,n),F(s,o,a),F(s,i,a),c(i,u)},p(s,a){a&1&&l!==(l=s[0][s[19]+6].name+"")&&I(n,l),a&1&&r!==(r=s[0][s[19]+6].club+"")&&I(u,r)},d(s){s&&(L(t),L(o),L(i))}}}function Oe(e){let t,l,n,o,i,r,u,s=e[0][e[19]+6]&&Pe(e);function a(){return e[12](e[19])}function C(...d){return e[13](e[19],...d)}return{c(){t=b("button"),l=b("span"),l.textContent=`${e[19]+6}`,n=E(),s&&s.c(),o=E(),f(l,"class","number svelte-12b20xv"),f(t,"type","button"),f(t,"class","player-position midfielder svelte-12b20xv"),f(t,"style",i="bottom: "+e[17].bottom+"; "+(e[17].left?"left: "+e[17].left:"right: "+e[17].right)),f(t,"aria-label","Select midfielder position "+(e[19]+1))},m(d,m){F(d,t,m),c(t,l),c(t,n),s&&s.m(t,null),c(t,o),r||(u=[A(t,"click",a),A(t,"keydown",C)],r=!0)},p(d,m){e=d,e[0][e[19]+6]?s?s.p(e,m):(s=Pe(e),s.c(),s.m(t,o)):s&&(s.d(1),s=null),m&8&&i!==(i="bottom: "+e[17].bottom+"; "+(e[17].left?"left: "+e[17].left:"right: "+e[17].right))&&f(t,"style",i)},d(d){d&&L(t),s&&s.d(),r=!1,V(u)}}}function Be(e){let t,l=e[0][e[19]+10].name+"",n,o,i,r=e[0][e[19]+10].club+"",u;return{c(){t=b("span"),n=T(l),o=E(),i=b("span"),u=T(r),f(t,"class","player-name svelte-12b20xv"),f(i,"class","player-club svelte-12b20xv")},m(s,a){F(s,t,a),c(t,n),F(s,o,a),F(s,i,a),c(i,u)},p(s,a){a&1&&l!==(l=s[0][s[19]+10].name+"")&&I(n,l),a&1&&r!==(r=s[0][s[19]+10].club+"")&&I(u,r)},d(s){s&&(L(t),L(o),L(i))}}}function Le(e){let t,l,n,o,i,r,u,s=e[0][e[19]+10]&&Be(e);function a(){return e[14](e[19])}function C(...d){return e[15](e[19],...d)}return{c(){t=b("button"),l=b("span"),l.textContent=`${e[19]+10}`,n=E(),s&&s.c(),o=E(),f(l,"class","number svelte-12b20xv"),f(t,"type","button"),f(t,"class","player-position forward svelte-12b20xv"),f(t,"style",i="bottom: "+e[17].bottom+"; "+(e[17].left?"left: "+e[17].left:"right: "+e[17].right)),f(t,"aria-label","Select forward position "+(e[19]+1))},m(d,m){F(d,t,m),c(t,l),c(t,n),s&&s.m(t,null),c(t,o),r||(u=[A(t,"click",a),A(t,"keydown",C)],r=!0)},p(d,m){e=d,e[0][e[19]+10]?s?s.p(e,m):(s=Be(e),s.c(),s.m(t,o)):s&&(s.d(1),s=null),m&8&&i!==(i="bottom: "+e[17].bottom+"; "+(e[17].left?"left: "+e[17].left:"right: "+e[17].right))&&f(t,"style",i)},d(d){d&&L(t),s&&s.d(),r=!1,V(u)}}}function Me(e){var n,o;let t,l;return t=new rt({props:{position:e[1].position,number:e[1].number,playerName:((n=e[0][e[1].number])==null?void 0:n.name)||"",club:((o=e[0][e[1].number])==null?void 0:o.club)||"",isOpen:e[2],isEdit:!!e[0][e[1].number]}}),t.$on("close",e[5]),t.$on("save",e[6]),{c(){oe(t.$$.fragment)},m(i,r){Q(t,i,r),l=!0},p(i,r){var s,a;const u={};r&2&&(u.position=i[1].position),r&2&&(u.number=i[1].number),r&3&&(u.playerName=((s=i[0][i[1].number])==null?void 0:s.name)||""),r&3&&(u.club=((a=i[0][i[1].number])==null?void 0:a.club)||""),r&4&&(u.isOpen=i[2]),r&3&&(u.isEdit=!!i[0][i[1].number]),t.$set(u)},i(i){l||(D(t.$$.fragment,i),l=!0)},o(i){H(t.$$.fragment,i),l=!1},d(i){X(t,i)}}}function at(e){let t,l,n,o,i,r,u,s,a,C,d,m,v,k,j,B,S=e[0][1]&&Ee(e),N=q(e[3].defenders),P=[];for(let p=0;p<N.length;p+=1)P[p]=Ne(we(e,N,p));let g=q(e[3].midfielders),y=[];for(let p=0;p<g.length;p+=1)y[p]=Oe(je(e,g,p));let w=q(e[3].forwards),O=[];for(let p=0;p<w.length;p+=1)O[p]=Le(Ce(e,w,p));let h=e[1]&&e[2]&&Me(e);return{c(){t=b("div"),l=b("div"),n=b("div"),n.innerHTML='<div class="center-circle svelte-12b20xv"></div> <div class="center-line svelte-12b20xv"></div> <div class="center-spot svelte-12b20xv"></div> <div class="penalty-area penalty-area-top svelte-12b20xv"></div> <div class="penalty-area penalty-area-bottom svelte-12b20xv"></div> <div class="goal-area goal-area-top svelte-12b20xv"></div> <div class="goal-area goal-area-bottom svelte-12b20xv"></div> <div class="penalty-arc penalty-arc-top svelte-12b20xv"></div> <div class="penalty-arc penalty-arc-bottom svelte-12b20xv"></div> <div class="corner-arc corner-top-left svelte-12b20xv"></div> <div class="corner-arc corner-top-right svelte-12b20xv"></div> <div class="corner-arc corner-bottom-left svelte-12b20xv"></div> <div class="corner-arc corner-bottom-right svelte-12b20xv"></div>',o=E(),i=b("div"),r=b("button"),u=b("span"),u.textContent="1",s=E(),S&&S.c(),a=E();for(let p=0;p<P.length;p+=1)P[p].c();C=E();for(let p=0;p<y.length;p+=1)y[p].c();d=E();for(let p=0;p<O.length;p+=1)O[p].c();m=E(),h&&h.c(),v=pe(),f(n,"class","pitch-markings svelte-12b20xv"),f(u,"class","number svelte-12b20xv"),f(r,"type","button"),f(r,"class","player-position goalkeeper svelte-12b20xv"),$(r,"bottom",e[3].goalkeeper.bottom),$(r,"left",e[3].goalkeeper.left),f(r,"aria-label","Select goalkeeper position"),f(i,"class","player-positions svelte-12b20xv"),f(l,"class","pitch-container svelte-12b20xv"),f(t,"class","football-pitch svelte-12b20xv")},m(p,M){F(p,t,M),c(t,l),c(l,n),c(l,o),c(l,i),c(i,r),c(r,u),c(r,s),S&&S.m(r,null),c(i,a);for(let _=0;_<P.length;_+=1)P[_]&&P[_].m(i,null);c(i,C);for(let _=0;_<y.length;_+=1)y[_]&&y[_].m(i,null);c(i,d);for(let _=0;_<O.length;_+=1)O[_]&&O[_].m(i,null);F(p,m,M),h&&h.m(p,M),F(p,v,M),k=!0,j||(B=[A(r,"click",e[8]),A(r,"keydown",e[9])],j=!0)},p(p,[M]){if(p[0][1]?S?S.p(p,M):(S=Ee(p),S.c(),S.m(r,null)):S&&(S.d(1),S=null),(!k||M&8)&&$(r,"bottom",p[3].goalkeeper.bottom),(!k||M&8)&&$(r,"left",p[3].goalkeeper.left),M&25){N=q(p[3].defenders);let _;for(_=0;_<N.length;_+=1){const R=we(p,N,_);P[_]?P[_].p(R,M):(P[_]=Ne(R),P[_].c(),P[_].m(i,C))}for(;_<P.length;_+=1)P[_].d(1);P.length=N.length}if(M&25){g=q(p[3].midfielders);let _;for(_=0;_<g.length;_+=1){const R=je(p,g,_);y[_]?y[_].p(R,M):(y[_]=Oe(R),y[_].c(),y[_].m(i,d))}for(;_<y.length;_+=1)y[_].d(1);y.length=g.length}if(M&25){w=q(p[3].forwards);let _;for(_=0;_<w.length;_+=1){const R=Ce(p,w,_);O[_]?O[_].p(R,M):(O[_]=Le(R),O[_].c(),O[_].m(i,null))}for(;_<O.length;_+=1)O[_].d(1);O.length=w.length}p[1]&&p[2]?h?(h.p(p,M),M&6&&D(h,1)):(h=Me(p),h.c(),D(h,1),h.m(v.parentNode,v)):h&&(be(),H(h,1,1,()=>{h=null}),ve())},i(p){k||(D(h),k=!0)},o(p){H(h),k=!1},d(p){p&&(L(t),L(m),L(v)),S&&S.d(),le(P,p),le(y,p),le(O,p),h&&h.d(p),j=!1,V(B)}}}function ft(e){return{...{goalkeeper:{bottom:"5%",left:"50%"}},...{"4-4-2":{goalkeeper:{bottom:"5%",left:"50%"},defenders:[{bottom:"20%",left:"20%"},{bottom:"20%",left:"40%"},{bottom:"20%",left:"60%"},{bottom:"20%",left:"80%"}],midfielders:[{bottom:"50%",left:"20%"},{bottom:"50%",left:"40%"},{bottom:"50%",left:"60%"},{bottom:"50%",left:"80%"}],forwards:[{bottom:"75%",left:"35%"},{bottom:"75%",left:"65%"}]},"4-3-3":{goalkeeper:{bottom:"5%",left:"50%"},defenders:[{bottom:"20%",left:"20%"},{bottom:"20%",left:"40%"},{bottom:"20%",left:"60%"},{bottom:"20%",left:"80%"}],midfielders:[{bottom:"50%",left:"30%"},{bottom:"50%",left:"50%"},{bottom:"50%",left:"70%"}],forwards:[{bottom:"75%",left:"25%"},{bottom:"75%",left:"50%"},{bottom:"75%",left:"75%"}]},"3-5-2":{goalkeeper:{bottom:"5%",left:"50%"},defenders:[{bottom:"20%",left:"30%"},{bottom:"20%",left:"50%"},{bottom:"20%",left:"70%"}],midfielders:[{bottom:"50%",left:"15%"},{bottom:"50%",left:"35%"},{bottom:"50%",left:"50%"},{bottom:"50%",left:"65%"},{bottom:"50%",left:"85%"}],forwards:[{bottom:"75%",left:"35%"},{bottom:"75%",left:"65%"}]},"5-3-2":{goalkeeper:{bottom:"5%",left:"50%"},defenders:[{bottom:"20%",left:"15%"},{bottom:"20%",left:"35%"},{bottom:"20%",left:"50%"},{bottom:"20%",left:"65%"},{bottom:"20%",left:"85%"}],midfielders:[{bottom:"50%",left:"30%"},{bottom:"50%",left:"50%"},{bottom:"50%",left:"70%"}],forwards:[{bottom:"75%",left:"35%"},{bottom:"75%",left:"65%"}]},"4-2-3-1":{goalkeeper:{bottom:"5%",left:"50%"},defenders:[{bottom:"20%",left:"20%"},{bottom:"20%",left:"40%"},{bottom:"20%",left:"60%"},{bottom:"20%",left:"80%"}],midfielders:[{bottom:"40%",left:"35%"},{bottom:"40%",left:"65%"},{bottom:"60%",left:"30%"},{bottom:"60%",left:"50%"},{bottom:"60%",left:"70%"}],forwards:[{bottom:"80%",left:"50%"}]}}[e]}}function ut(e,t,l){let n;const o=ie();let{formation:i="4-4-2"}=t,r={},u=null,s=!1;function a(g,y){l(1,u={number:y,position:g}),l(2,s=!0)}function C(){l(2,s=!1),l(1,u=null)}function d(g){if(u){const{number:y,position:w}=u;l(0,r[y]={name:g.detail.playerName,club:g.detail.club,position:w,number:y},r)}}const m=()=>a("goalkeeper",1),v=g=>g.key==="Enter"&&a("goalkeeper",1),k=g=>a("defender",g+2),j=(g,y)=>y.key==="Enter"&&a("defender",g+2),B=g=>a("midfielder",g+6),S=(g,y)=>y.key==="Enter"&&a("midfielder",g+6),N=g=>a("forward",g+10),P=(g,y)=>y.key==="Enter"&&a("forward",g+10);return e.$$set=g=>{"formation"in g&&l(7,i=g.formation)},e.$$.update=()=>{if(e.$$.dirty&1){const g=Object.keys(r).length;o("playersUpdate",{filledPositions:g})}e.$$.dirty&128&&l(3,n=ft(i))},[r,u,s,n,a,C,d,i,m,v,k,j,B,S,N,P]}class ct extends x{constructor(t){super(),Z(this,t,ut,at,Y,{formation:7})}}function Fe(e,t,l){const n=e.slice();return n[5]=t[l],n}function Ae(e){let t,l=e[5]+"",n;return{c(){t=b("option"),n=T(l),t.__value=e[5],U(t,t.__value)},m(o,i){F(o,t,i),c(t,n)},p:G,d(o){o&&L(t)}}}function dt(e){let t,l,n,o,i,r,u=q(e[1]),s=[];for(let a=0;a<u.length;a+=1)s[a]=Ae(Fe(e,u,a));return{c(){t=b("div"),l=b("label"),l.textContent="Formation:",n=E(),o=b("select");for(let a=0;a<s.length;a+=1)s[a].c();f(l,"for","formation"),f(l,"class","svelte-1txkkcv"),f(o,"id","formation"),f(o,"class","svelte-1txkkcv"),e[0]===void 0&&ue(()=>e[3].call(o)),f(t,"class","formation-selector svelte-1txkkcv")},m(a,C){F(a,t,C),c(t,l),c(t,n),c(t,o);for(let d=0;d<s.length;d+=1)s[d]&&s[d].m(o,null);_e(o,e[0],!0),i||(r=[A(o,"change",e[3]),A(o,"change",e[2])],i=!0)},p(a,[C]){if(C&2){u=q(a[1]);let d;for(d=0;d<u.length;d+=1){const m=Fe(a,u,d);s[d]?s[d].p(m,C):(s[d]=Ae(m),s[d].c(),s[d].m(o,null))}for(;d<s.length;d+=1)s[d].d(1);s.length=u.length}C&3&&_e(o,a[0])},i:G,o:G,d(a){a&&L(t),le(s,a),i=!1,V(r)}}}function mt(e,t,l){const n=["4-4-2","4-3-3","3-5-2","5-3-2","4-2-3-1"];let o="4-4-2";const i=ie();function r(){i("formationChange",o)}function u(){o=Ye(this),l(0,o),l(1,n)}return[o,n,r,u]}class pt extends x{constructor(t){super(),Z(this,t,mt,dt,Y,{})}}function Te(e,t,l){const n=e.slice();return n[11]=t[l],n[13]=l,n}function Ke(e){let t,l=q(e[1]),n=[];for(let o=0;o<l.length;o+=1)n[o]=Re(Te(e,l,o));return{c(){t=b("ul");for(let o=0;o<n.length;o+=1)n[o].c();f(t,"id","club-suggestions"),f(t,"class","suggestions svelte-12fi29h"),f(t,"role","listbox"),f(t,"aria-label","Club suggestions")},m(o,i){F(o,t,i);for(let r=0;r<n.length;r+=1)n[r]&&n[r].m(t,null)},p(o,i){if(i&106){l=q(o[1]);let r;for(r=0;r<l.length;r+=1){const u=Te(o,l,r);n[r]?n[r].p(u,i):(n[r]=Re(u),n[r].c(),n[r].m(t,null))}for(;r<n.length;r+=1)n[r].d(1);n.length=l.length}},d(o){o&&L(t),le(n,o)}}}function Re(e){let t,l,n,o,i,r=e[11].name+"",u,s,a,C,d;function m(){return e[8](e[11],e[13])}function v(...k){return e[9](e[11],e[13],...k)}return{c(){t=b("li"),l=b("div"),n=b("div"),o=E(),i=b("span"),u=T(r),s=E(),f(n,"class","jersey-preview svelte-12fi29h"),$(n,"background-color",e[11].jerseyColor),f(l,"class","club-option svelte-12fi29h"),f(t,"id","club-option-"+e[13]),f(t,"role","option"),f(t,"aria-selected",a=e[3]===e[13]),f(t,"tabindex","0"),f(t,"class","svelte-12fi29h")},m(k,j){F(k,t,j),c(t,l),c(l,n),c(l,o),c(l,i),c(i,u),c(t,s),C||(d=[A(t,"click",m),A(t,"keydown",v)],C=!0)},p(k,j){e=k,j&2&&$(n,"background-color",e[11].jerseyColor),j&2&&r!==(r=e[11].name+"")&&I(u,r),j&8&&a!==(a=e[3]===e[13])&&f(t,"aria-selected",a)},d(k){k&&L(t),C=!1,V(d)}}}function bt(e){let t,l,n,o,i,r,u,s=e[2]&&e[1].length>0&&Ke(e);return{c(){t=b("template"),l=b("div"),n=b("input"),i=E(),s&&s.c(),f(n,"type","text"),f(n,"placeholder","Search for a club..."),f(n,"role","combobox"),f(n,"aria-expanded",e[2]),f(n,"aria-controls","club-suggestions"),f(n,"aria-activedescendant",o=e[3]>=0?`club-option-${e[3]}`:void 0),f(n,"class","svelte-12fi29h"),f(l,"class","club-search svelte-12fi29h")},m(a,C){F(a,t,C),c(t.content,l),c(l,n),U(n,e[0]),c(l,i),s&&s.m(l,null),r||(u=[A(n,"input",e[7]),A(n,"input",e[4])],r=!0)},p(a,[C]){C&4&&f(n,"aria-expanded",a[2]),C&8&&o!==(o=a[3]>=0?`club-option-${a[3]}`:void 0)&&f(n,"aria-activedescendant",o),C&1&&n.value!==a[0]&&U(n,a[0]),a[2]&&a[1].length>0?s?s.p(a,C):(s=Ke(a),s.c(),s.m(l,null)):s&&(s.d(1),s=null)},i:G,o:G,d(a){a&&L(t),s&&s.d(),r=!1,V(u)}}}function vt(e,t,l){const n=ie();let o="",i=[],r=!1,u=-1;function s(k){const j=k.target;l(0,o=j.value),o.length>2?(l(1,i=[{name:"FC Groningen",jerseyColor:"#0066cc"},{name:"SC Heerenveen",jerseyColor:"#ffffff"},{name:"FC Emmen",jerseyColor:"#ff0000"},{name:"FC Twente",jerseyColor:"#ff0000"},{name:"Heracles Almelo",jerseyColor:"#000000"}].filter(B=>B.name.toLowerCase().includes(o.toLowerCase()))),l(2,r=!0),l(3,u=-1)):(l(1,i=[]),l(2,r=!1))}function a(k,j){l(0,o=k.name),l(3,u=j),l(2,r=!1),n("clubSelect",{clubName:k.name,jerseyColor:k.jerseyColor})}function C(k,j,B){(k.key==="Enter"||k.key===" ")&&a(j,B)}function d(){o=this.value,l(0,o)}return[o,i,r,u,s,a,C,d,(k,j)=>a(k,j),(k,j,B)=>C(B,k,j)]}class ht extends x{constructor(t){super(),Z(this,t,vt,bt,Y,{})}}function _t(e){let t,l=(e[1]||"Select Club")+"",n,o,i;return{c(){t=b("button"),n=T(l),f(t,"class","club-button svelte-aj8v9v")},m(r,u){F(r,t,u),c(t,n),o||(i=A(t,"click",e[7]),o=!0)},p(r,u){u&2&&l!==(l=(r[1]||"Select Club")+"")&&I(n,l)},i:G,o:G,d(r){r&&L(t),o=!1,i()}}}function gt(e){let t,l;return t=new ht({}),t.$on("clubSelect",e[6]),{c(){oe(t.$$.fragment)},m(n,o){Q(t,n,o),l=!0},p:G,i(n){l||(D(t.$$.fragment,n),l=!0)},o(n){H(t.$$.fragment,n),l=!1},d(n){X(t,n)}}}function yt(e){let t,l,n,o,i,r,u,s,a,C,d,m,v,k,j,B;const S=[gt,_t],N=[];function P(g,y){return g[4]?0:1}return m=P(e),v=N[m]=S[m](e),{c(){t=b("template"),l=b("div"),n=b("div"),o=T(e[3]),i=E(),r=b("div"),u=E(),s=b("div"),a=b("input"),C=E(),d=b("div"),v.c(),f(n,"class","position-label svelte-aj8v9v"),f(r,"class","jersey svelte-aj8v9v"),$(r,"background-color",e[2]),f(a,"type","text"),f(a,"placeholder","Player name"),f(a,"class","svelte-aj8v9v"),f(d,"class","club-section svelte-aj8v9v"),f(s,"class","player-inputs svelte-aj8v9v"),f(l,"class","player-card svelte-aj8v9v")},m(g,y){F(g,t,y),c(t.content,l),c(l,n),c(n,o),c(l,i),c(l,r),c(l,u),c(l,s),c(s,a),U(a,e[0]),c(s,C),c(s,d),N[m].m(d,null),k=!0,j||(B=[A(a,"input",e[8]),A(a,"input",e[5])],j=!0)},p(g,[y]){(!k||y&8)&&I(o,g[3]),(!k||y&4)&&$(r,"background-color",g[2]),y&1&&a.value!==g[0]&&U(a,g[0]);let w=m;m=P(g),m===w?N[m].p(g,y):(be(),H(N[w],1,1,()=>{N[w]=null}),ve(),v=N[m],v?v.p(g,y):(v=N[m]=S[m](g),v.c()),D(v,1),v.m(d,null))},i(g){k||(D(v),k=!0)},o(g){H(v),k=!1},d(g){g&&L(t),N[m].d(),j=!1,V(B)}}}function kt(e,t,l){const n=ie();let{position:o}=t,{playerName:i=""}=t,{clubName:r=""}=t,{jerseyColor:u="#ffffff"}=t,s=!1;function a(v){const k=v.target;l(0,i=k.value),n("playerChange",{position:o,playerName:i})}function C(v){l(1,r=v.detail.clubName),l(2,u=v.detail.jerseyColor),l(4,s=!1),n("clubChange",{position:o,clubName:r,jerseyColor:u})}function d(){l(4,s=!s)}function m(){i=this.value,l(0,i)}return e.$$set=v=>{"position"in v&&l(3,o=v.position),"playerName"in v&&l(0,i=v.playerName),"clubName"in v&&l(1,r=v.clubName),"jerseyColor"in v&&l(2,u=v.jerseyColor)},[i,r,u,o,s,a,C,d,m]}class Ct extends x{constructor(t){super(),Z(this,t,kt,yt,Y,{position:3,playerName:0,clubName:1,jerseyColor:2})}}function De(e){let t,l,n,o,i,r,u,s,a,C,d,m,v,k,j,B,S,N,P,g,y,w;return{c(){t=b("div"),l=b("div"),n=b("div"),n.innerHTML='<h3 id="email-form-title" class="svelte-jjlrv1">Verstuur je stem</h3>',o=E(),i=b("form"),r=b("div"),u=b("label"),u.textContent="E-mailadres:",s=E(),a=b("input"),C=E(),d=b("div"),m=b("label"),v=b("input"),k=E(),j=b("span"),j.textContent="Ik wil mail ontvangen van RTV Drenthe over Onze Club. Als je dit aanvinkt meld je je alleen aan voor nieuws rond Onze Club",B=E(),S=b("div"),N=b("button"),N.textContent="Annuleren",P=E(),g=b("button"),g.textContent="Versturen",f(n,"class","modal-header svelte-jjlrv1"),f(u,"for","email"),f(u,"class","svelte-jjlrv1"),f(a,"type","email"),f(a,"id","email"),a.required=!0,f(a,"placeholder","Vul je e-mailadres in"),f(a,"class","svelte-jjlrv1"),f(r,"class","form-group svelte-jjlrv1"),f(v,"type","checkbox"),f(v,"class","svelte-jjlrv1"),f(m,"class","checkbox-label svelte-jjlrv1"),f(d,"class","form-group checkbox-group svelte-jjlrv1"),f(N,"type","button"),f(N,"class","cancel-button svelte-jjlrv1"),f(g,"type","submit"),f(g,"class","save-button svelte-jjlrv1"),f(S,"class","modal-footer svelte-jjlrv1"),f(i,"class","modal-content svelte-jjlrv1"),f(l,"class","modal svelte-jjlrv1"),f(l,"role","dialog"),f(l,"aria-labelledby","email-form-title"),f(l,"aria-modal","true"),f(t,"class","modal-backdrop svelte-jjlrv1"),f(t,"role","presentation")},m(O,h){F(O,t,h),c(t,l),c(l,n),c(l,o),c(l,i),c(i,r),c(r,u),c(r,s),c(r,a),U(a,e[1]),c(i,C),c(i,d),c(d,m),c(m,v),v.checked=e[2],c(m,k),c(m,j),c(i,B),c(i,S),c(S,N),c(S,P),c(S,g),y||(w=[A(a,"input",e[5]),A(v,"change",e[6]),A(N,"click",e[3]),A(i,"submit",qe(e[4]))],y=!0)},p(O,h){h&2&&a.value!==O[1]&&U(a,O[1]),h&4&&(v.checked=O[2])},d(O){O&&L(t),y=!1,V(w)}}}function jt(e){let t,l=e[0]&&De(e);return{c(){l&&l.c(),t=pe()},m(n,o){l&&l.m(n,o),F(n,t,o)},p(n,[o]){n[0]?l?l.p(n,o):(l=De(n),l.c(),l.m(t.parentNode,t)):l&&(l.d(1),l=null)},i:G,o:G,d(n){n&&L(t),l&&l.d(n)}}}function wt(e,t,l){let{isOpen:n=!1}=t,o="",i=!1;const r=ie();function u(){r("close")}function s(){r("submit",{email:o,consent:i}),u()}function a(m){m.key==="Escape"&&n&&u()}Ue(()=>(document.addEventListener("keydown",a),()=>{document.removeEventListener("keydown",a)}));function C(){o=this.value,l(1,o)}function d(){i=this.checked,l(2,i)}return e.$$set=m=>{"isOpen"in m&&l(0,n=m.isOpen)},[n,o,i,u,s,C,d]}class Et extends x{constructor(t){super(),Z(this,t,wt,jt,Y,{isOpen:0})}}function Ie(e,t,l){const n=e.slice();return n[9]=t[l],n}function Ge(e){let t,l;return t=new Ct({props:{position:e[9].position}}),{c(){oe(t.$$.fragment)},m(n,o){Q(t,n,o),l=!0},p(n,o){const i={};o&1&&(i.position=n[9].position),t.$set(i)},i(n){l||(D(t.$$.fragment,n),l=!0)},o(n){H(t.$$.fragment,n),l=!1},d(n){X(t,n)}}}function St(e){let t,l,n,o,i,r,u,s,a,C,d,m,v,k,j,B,S,N,P,g;i=new pt({props:{selectedFormation:e[0]}}),i.$on("formationChange",e[3]),v=new ct({props:{formation:e[0]}}),v.$on("playersUpdate",e[4]);let y=q(e[6][e[0]]),w=[];for(let h=0;h<y.length;h+=1)w[h]=Ge(Ie(e,y,h));const O=h=>H(w[h],1,1,()=>{w[h]=null});return S=new Et({props:{isOpen:e[1]}}),S.$on("close",e[8]),S.$on("submit",e[5]),{c(){t=b("main"),l=b("div"),l.innerHTML='<h1 class="svelte-n0diyi">Drents Elftal</h1> <p class="subtitle svelte-n0diyi">Create your best eleven</p>',n=E(),o=b("div"),oe(i.$$.fragment),r=E(),u=b("button"),s=T("Verstuur je stem"),C=E(),d=b("div"),m=b("div"),oe(v.$$.fragment),k=E(),j=b("div");for(let h=0;h<w.length;h+=1)w[h].c();B=E(),oe(S.$$.fragment),f(l,"class","header svelte-n0diyi"),f(u,"class","submit-button svelte-n0diyi"),u.disabled=a=!e[2],f(o,"class","controls svelte-n0diyi"),f(m,"class","pitch-section svelte-n0diyi"),f(j,"class","player-list svelte-n0diyi"),f(d,"class","container svelte-n0diyi"),f(t,"class","svelte-n0diyi")},m(h,p){F(h,t,p),c(t,l),c(t,n),c(t,o),Q(i,o,null),c(o,r),c(o,u),c(u,s),c(t,C),c(t,d),c(d,m),Q(v,m,null),c(d,k),c(d,j);for(let M=0;M<w.length;M+=1)w[M]&&w[M].m(j,null);c(t,B),Q(S,t,null),N=!0,P||(g=A(u,"click",e[7]),P=!0)},p(h,[p]){const M={};p&1&&(M.selectedFormation=h[0]),i.$set(M),(!N||p&4&&a!==(a=!h[2]))&&(u.disabled=a);const _={};if(p&1&&(_.formation=h[0]),v.$set(_),p&65){y=q(h[6][h[0]]);let K;for(K=0;K<y.length;K+=1){const se=Ie(h,y,K);w[K]?(w[K].p(se,p),D(w[K],1)):(w[K]=Ge(se),w[K].c(),D(w[K],1),w[K].m(j,null))}for(be(),K=y.length;K<w.length;K+=1)O(K);ve()}const R={};p&2&&(R.isOpen=h[1]),S.$set(R)},i(h){if(!N){D(i.$$.fragment,h),D(v.$$.fragment,h);for(let p=0;p<y.length;p+=1)D(w[p]);D(S.$$.fragment,h),N=!0}},o(h){H(i.$$.fragment,h),H(v.$$.fragment,h),w=w.filter(Boolean);for(let p=0;p<w.length;p+=1)H(w[p]);H(S.$$.fragment,h),N=!1},d(h){h&&L(t),X(i),X(v),le(w,h),X(S),P=!1,g()}}}function Nt(e,t,l){let n="4-4-2",o=!1,i=!1;function r(m){l(0,n=m.detail)}function u(m){l(2,i=m.detail.filledPositions===11)}function s(m){console.log("Email submitted:",m.detail),l(1,o=!1)}return[n,o,i,r,u,s,{"4-4-2":[{position:"GK"},{position:"LB"},{position:"CB"},{position:"CB"},{position:"RB"},{position:"LM"},{position:"CM"},{position:"CM"},{position:"RM"},{position:"ST"},{position:"ST"}],"4-3-3":[{position:"GK"},{position:"LB"},{position:"CB"},{position:"CB"},{position:"RB"},{position:"CM"},{position:"CM"},{position:"CM"},{position:"LW"},{position:"ST"},{position:"RW"}],"3-5-2":[{position:"GK"},{position:"CB"},{position:"CB"},{position:"CB"},{position:"LWB"},{position:"CM"},{position:"CM"},{position:"CM"},{position:"RWB"},{position:"ST"},{position:"ST"}],"5-3-2":[{position:"GK"},{position:"LWB"},{position:"CB"},{position:"CB"},{position:"CB"},{position:"RWB"},{position:"CM"},{position:"CM"},{position:"CM"},{position:"ST"},{position:"ST"}],"4-2-3-1":[{position:"GK"},{position:"LB"},{position:"CB"},{position:"CB"},{position:"RB"},{position:"CDM"},{position:"CDM"},{position:"CAM"},{position:"CAM"},{position:"CAM"},{position:"ST"}]},()=>l(1,o=!0),()=>l(1,o=!1)]}class Pt extends x{constructor(t){super(),Z(this,t,Nt,St,Y,{})}}new Pt({target:document.getElementById("app")});
