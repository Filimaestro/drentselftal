var Iu=Object.defineProperty;var Au=(n,t,e)=>t in n?Iu(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var ni=(n,t,e)=>Au(n,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();function _e(){}function ya(n){return n()}function no(){return Object.create(null)}function $t(n){n.forEach(ya)}function va(n){return typeof n=="function"}function Tr(n,t){return n!=n?t==t:n!==t||n&&typeof n=="object"||typeof n=="function"}function wu(n){return Object.keys(n).length===0}function D(n,t){n.appendChild(t)}function tt(n,t,e){n.insertBefore(t,e||null)}function J(n){n.parentNode&&n.parentNode.removeChild(n)}function ri(n,t){for(let e=0;e<n.length;e+=1)n[e]&&n[e].d(t)}function x(n){return document.createElement(n)}function ot(n){return document.createTextNode(n)}function Q(){return ot(" ")}function Ea(){return ot("")}function ht(n,t,e,r){return n.addEventListener(t,e,r),()=>n.removeEventListener(t,e,r)}function Ta(n){return function(t){return t.preventDefault(),n.call(this,t)}}function P(n,t,e){e==null?n.removeAttribute(t):n.getAttribute(t)!==e&&n.setAttribute(t,e)}function bu(n){return Array.from(n.childNodes)}function Nt(n,t){t=""+t,n.data!==t&&(n.data=t)}function te(n,t){n.value=t??""}function ro(n,t,e,r){e==null?n.style.removeProperty(t):n.style.setProperty(t,e,"")}function Ru(n,t,{bubbles:e=!1,cancelable:r=!1}={}){return new CustomEvent(n,{detail:t,bubbles:e,cancelable:r})}let dn;function ln(n){dn=n}function Ia(){if(!dn)throw new Error("Function called outside component initialization");return dn}function Aa(n){Ia().$$.on_mount.push(n)}function Ni(){const n=Ia();return(t,e,{cancelable:r=!1}={})=>{const s=n.$$.callbacks[t];if(s){const o=Ru(t,e,{cancelable:r});return s.slice().forEach(l=>{l.call(n,o)}),!o.defaultPrevented}return!0}}const De=[],io=[];let Oe=[];const so=[],Pu=Promise.resolve();let fi=!1;function Su(){fi||(fi=!0,Pu.then(wa))}function di(n){Oe.push(n)}const ii=new Set;let Ce=0;function wa(){if(Ce!==0)return;const n=dn;do{try{for(;Ce<De.length;){const t=De[Ce];Ce++,ln(t),Cu(t.$$)}}catch(t){throw De.length=0,Ce=0,t}for(ln(null),De.length=0,Ce=0;io.length;)io.pop()();for(let t=0;t<Oe.length;t+=1){const e=Oe[t];ii.has(e)||(ii.add(e),e())}Oe.length=0}while(De.length);for(;so.length;)so.pop()();fi=!1,ii.clear(),ln(n)}function Cu(n){if(n.fragment!==null){n.update(),$t(n.before_update);const t=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,t),n.after_update.forEach(di)}}function Vu(n){const t=[],e=[];Oe.forEach(r=>n.indexOf(r)===-1?t.push(r):e.push(r)),e.forEach(r=>r()),Oe=t}const Yn=new Set;let Du;function nr(n,t){n&&n.i&&(Yn.delete(n),n.i(t))}function pi(n,t,e,r){if(n&&n.o){if(Yn.has(n))return;Yn.add(n),Du.c.push(()=>{Yn.delete(n)}),n.o(t)}}function Ve(n){return(n==null?void 0:n.length)!==void 0?n:Array.from(n)}function mi(n){n&&n.c()}function rr(n,t,e){const{fragment:r,after_update:s}=n.$$;r&&r.m(t,e),di(()=>{const o=n.$$.on_mount.map(ya).filter(va);n.$$.on_destroy?n.$$.on_destroy.push(...o):$t(o),n.$$.on_mount=[]}),s.forEach(di)}function ir(n,t){const e=n.$$;e.fragment!==null&&(Vu(e.after_update),$t(e.on_destroy),e.fragment&&e.fragment.d(t),e.on_destroy=e.fragment=null,e.ctx=[])}function ku(n,t){n.$$.dirty[0]===-1&&(De.push(n),Su(),n.$$.dirty.fill(0)),n.$$.dirty[t/31|0]|=1<<t%31}function Ir(n,t,e,r,s,o,l=null,c=[-1]){const h=dn;ln(n);const d=n.$$={fragment:null,ctx:[],props:o,update:_e,not_equal:s,bound:no(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(h?h.$$.context:[])),callbacks:no(),dirty:c,skip_bound:!1,root:t.target||h.$$.root};l&&l(d.root);let y=!1;if(d.ctx=e?e(n,t.props||{},(I,b,...S)=>{const C=S.length?S[0]:b;return d.ctx&&s(d.ctx[I],d.ctx[I]=C)&&(!d.skip_bound&&d.bound[I]&&d.bound[I](C),y&&ku(n,I)),b}):[],d.update(),y=!0,$t(d.before_update),d.fragment=r?r(d.ctx):!1,t.target){if(t.hydrate){const I=bu(t.target);d.fragment&&d.fragment.l(I),I.forEach(J)}else d.fragment&&d.fragment.c();t.intro&&nr(n.$$.fragment),rr(n,t.target,t.anchor),wa()}ln(h)}class Ar{constructor(){ni(this,"$$");ni(this,"$$set")}$destroy(){ir(this,1),this.$destroy=_e}$on(t,e){if(!va(e))return _e;const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(e),()=>{const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}$set(t){this.$$set&&!wu(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Nu="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Nu);function oo(n){let t,e,r,s,o=n[6]?"Edit":"Add",l,c,h,d,y,I,b,S,C,F,N,L,B,O,H,M,z,E,g,p,_,v,T,m,et,j,Pt=n[6]?"Save":"Add",zt,qt,we;return{c(){t=x("div"),e=x("div"),r=x("div"),s=x("h3"),l=ot(o),c=ot(" Player - "),h=ot(n[3]),d=ot(" #"),y=ot(n[4]),I=Q(),b=x("form"),S=x("div"),C=x("label"),C.textContent="First Name:",F=Q(),N=x("input"),L=Q(),B=x("div"),O=x("label"),O.textContent="Surname:",H=Q(),M=x("input"),z=Q(),E=x("div"),g=x("label"),g.textContent="Club:",p=Q(),_=x("input"),v=Q(),T=x("div"),m=x("button"),m.textContent="Cancel",et=Q(),j=x("button"),zt=ot(Pt),P(s,"id","modal-title"),P(s,"class","svelte-jja17o"),P(r,"class","modal-header svelte-jja17o"),P(C,"for","firstName"),P(C,"class","svelte-jja17o"),P(N,"type","text"),P(N,"id","firstName"),N.required=!0,P(N,"placeholder","Enter first name"),P(N,"class","svelte-jja17o"),P(S,"class","form-group svelte-jja17o"),P(O,"for","surname"),P(O,"class","svelte-jja17o"),P(M,"type","text"),P(M,"id","surname"),M.required=!0,P(M,"placeholder","Enter surname"),P(M,"class","svelte-jja17o"),P(B,"class","form-group svelte-jja17o"),P(g,"for","playerClub"),P(g,"class","svelte-jja17o"),P(_,"type","text"),P(_,"id","playerClub"),_.required=!0,P(_,"placeholder","Enter club name"),P(_,"class","svelte-jja17o"),P(E,"class","form-group svelte-jja17o"),P(m,"type","button"),P(m,"class","cancel-button svelte-jja17o"),P(j,"type","submit"),P(j,"class","save-button svelte-jja17o"),P(T,"class","modal-footer svelte-jja17o"),P(b,"class","modal-content svelte-jja17o"),P(e,"class","modal svelte-jja17o"),P(e,"role","dialog"),P(e,"aria-labelledby","modal-title"),P(e,"aria-modal","true"),P(t,"class","modal-backdrop svelte-jja17o"),P(t,"role","presentation")},m(pt,Ot){tt(pt,t,Ot),D(t,e),D(e,r),D(r,s),D(s,l),D(s,c),D(s,h),D(s,d),D(s,y),D(e,I),D(e,b),D(b,S),D(S,C),D(S,F),D(S,N),te(N,n[0]),D(b,L),D(b,B),D(B,O),D(B,H),D(B,M),te(M,n[1]),D(b,z),D(b,E),D(E,g),D(E,p),D(E,_),te(_,n[2]),D(b,v),D(b,T),D(T,m),D(T,et),D(T,j),D(j,zt),qt||(we=[ht(N,"input",n[9]),ht(M,"input",n[10]),ht(_,"input",n[11]),ht(m,"click",n[8]),ht(b,"submit",Ta(n[7]))],qt=!0)},p(pt,Ot){Ot&64&&o!==(o=pt[6]?"Edit":"Add")&&Nt(l,o),Ot&8&&Nt(h,pt[3]),Ot&16&&Nt(y,pt[4]),Ot&1&&N.value!==pt[0]&&te(N,pt[0]),Ot&2&&M.value!==pt[1]&&te(M,pt[1]),Ot&4&&_.value!==pt[2]&&te(_,pt[2]),Ot&64&&Pt!==(Pt=pt[6]?"Save":"Add")&&Nt(zt,Pt)},d(pt){pt&&J(t),qt=!1,$t(we)}}}function Ou(n){let t,e=n[5]&&oo(n);return{c(){e&&e.c(),t=Ea()},m(r,s){e&&e.m(r,s),tt(r,t,s)},p(r,[s]){r[5]?e?e.p(r,s):(e=oo(r),e.c(),e.m(t.parentNode,t)):e&&(e.d(1),e=null)},i:_e,o:_e,d(r){r&&J(t),e&&e.d(r)}}}function Mu(n,t,e){let{position:r}=t,{number:s}=t,{firstName:o=""}=t,{surname:l=""}=t,{club:c=""}=t,{isOpen:h=!1}=t,{isEdit:d=!1}=t;const y=Ni();function I(){y("save",{firstName:o,surname:l,club:c}),y("close")}function b(){y("close")}function S(L){L.key==="Escape"&&h&&b()}Aa(()=>(document.addEventListener("keydown",S),()=>{document.removeEventListener("keydown",S)}));function C(){o=this.value,e(0,o),e(5,h),e(6,d)}function F(){l=this.value,e(1,l),e(5,h),e(6,d)}function N(){c=this.value,e(2,c),e(5,h),e(6,d)}return n.$$set=L=>{"position"in L&&e(3,r=L.position),"number"in L&&e(4,s=L.number),"firstName"in L&&e(0,o=L.firstName),"surname"in L&&e(1,l=L.surname),"club"in L&&e(2,c=L.club),"isOpen"in L&&e(5,h=L.isOpen),"isEdit"in L&&e(6,d=L.isEdit)},n.$$.update=()=>{n.$$.dirty&96&&h&&!d&&(e(0,o=""),e(1,l=""),e(2,c=""))},[o,l,c,r,s,h,d,I,b,C,F,N]}class Lu extends Ar{constructor(t){super(),Ir(this,t,Mu,Ou,Tr,{position:3,number:4,firstName:0,surname:1,club:2,isOpen:5,isEdit:6})}}function ao(n,t,e){const r=n.slice();return r[19]=t[e],r[21]=e,r}function lo(n,t,e){const r=n.slice();return r[19]=t[e],r[21]=e,r}function uo(n,t,e){const r=n.slice();return r[19]=t[e],r[21]=e,r}function co(n){let t,e=ie(n[0][1])+"",r,s,o,l=n[0][1].club+"",c;return{c(){t=x("span"),r=ot(e),s=Q(),o=x("span"),c=ot(l),P(t,"class","player-name svelte-p0e7uy"),P(o,"class","player-club svelte-p0e7uy")},m(h,d){tt(h,t,d),D(t,r),tt(h,s,d),tt(h,o,d),D(o,c)},p(h,d){d&1&&e!==(e=ie(h[0][1])+"")&&Nt(r,e),d&1&&l!==(l=h[0][1].club+"")&&Nt(c,l)},d(h){h&&(J(t),J(s),J(o))}}}function ho(n){let t,e=ie(n[0][n[21]===0?3:n[21]===1?4:2])+"",r,s,o,l=n[0][n[21]===0?3:n[21]===1?4:2].club+"",c;return{c(){t=x("span"),r=ot(e),s=Q(),o=x("span"),c=ot(l),P(t,"class","player-name svelte-p0e7uy"),P(o,"class","player-club svelte-p0e7uy")},m(h,d){tt(h,t,d),D(t,r),tt(h,s,d),tt(h,o,d),D(o,c)},p(h,d){d&1&&e!==(e=ie(h[0][h[21]===0?3:h[21]===1?4:2])+"")&&Nt(r,e),d&1&&l!==(l=h[0][h[21]===0?3:h[21]===1?4:2].club+"")&&Nt(c,l)},d(h){h&&(J(t),J(s),J(o))}}}function fo(n){let t,e,r,s,o,l,c=n[0][n[21]===0?3:n[21]===1?4:2]&&ho(n);function h(){return n[10](n[21])}function d(...y){return n[11](n[21],...y)}return{c(){t=x("button"),e=x("span"),e.textContent=`${n[21]===0?3:n[21]===1?4:2}`,r=Q(),c&&c.c(),s=Q(),P(e,"class","number svelte-p0e7uy"),P(t,"type","button"),P(t,"class","player-position defender svelte-p0e7uy"),P(t,"style","bottom: "+n[19].bottom+"; "+(n[19].left?"left: "+n[19].left:"right: "+n[19].right)),P(t,"aria-label","Select defender position "+(n[21]+1))},m(y,I){tt(y,t,I),D(t,e),D(t,r),c&&c.m(t,null),D(t,s),o||(l=[ht(t,"click",h),ht(t,"keydown",d)],o=!0)},p(y,I){n=y,n[0][n[21]===0?3:n[21]===1?4:2]?c?c.p(n,I):(c=ho(n),c.c(),c.m(t,s)):c&&(c.d(1),c=null)},d(y){y&&J(t),c&&c.d(),o=!1,$t(l)}}}function po(n){let t,e=ie(n[0][n[21]===0?6:n[21]===1?5:n[21]===2?10:8])+"",r,s,o,l=n[0][n[21]===0?6:n[21]===1?5:n[21]===2?10:8].club+"",c;return{c(){t=x("span"),r=ot(e),s=Q(),o=x("span"),c=ot(l),P(t,"class","player-name svelte-p0e7uy"),P(o,"class","player-club svelte-p0e7uy")},m(h,d){tt(h,t,d),D(t,r),tt(h,s,d),tt(h,o,d),D(o,c)},p(h,d){d&1&&e!==(e=ie(h[0][h[21]===0?6:h[21]===1?5:h[21]===2?10:8])+"")&&Nt(r,e),d&1&&l!==(l=h[0][h[21]===0?6:h[21]===1?5:h[21]===2?10:8].club+"")&&Nt(c,l)},d(h){h&&(J(t),J(s),J(o))}}}function mo(n){let t,e,r,s,o,l,c=n[0][n[21]===0?6:n[21]===1?5:n[21]===2?10:8]&&po(n);function h(){return n[12](n[21])}function d(...y){return n[13](n[21],...y)}return{c(){t=x("button"),e=x("span"),e.textContent=`${n[21]===0?6:n[21]===1?5:n[21]===2?10:8}`,r=Q(),c&&c.c(),s=Q(),P(e,"class","number svelte-p0e7uy"),P(t,"type","button"),P(t,"class","player-position midfielder svelte-p0e7uy"),P(t,"style","bottom: "+n[19].bottom+"; "+(n[19].left?"left: "+n[19].left:"right: "+n[19].right)),P(t,"aria-label","Select midfielder position "+(n[21]+1))},m(y,I){tt(y,t,I),D(t,e),D(t,r),c&&c.m(t,null),D(t,s),o||(l=[ht(t,"click",h),ht(t,"keydown",d)],o=!0)},p(y,I){n=y,n[0][n[21]===0?6:n[21]===1?5:n[21]===2?10:8]?c?c.p(n,I):(c=po(n),c.c(),c.m(t,s)):c&&(c.d(1),c=null)},d(y){y&&J(t),c&&c.d(),o=!1,$t(l)}}}function go(n){let t,e=ie(n[0][n[21]===0?11:n[21]===1?9:7])+"",r,s,o,l=n[0][n[21]===0?11:n[21]===1?9:7].club+"",c;return{c(){t=x("span"),r=ot(e),s=Q(),o=x("span"),c=ot(l),P(t,"class","player-name svelte-p0e7uy"),P(o,"class","player-club svelte-p0e7uy")},m(h,d){tt(h,t,d),D(t,r),tt(h,s,d),tt(h,o,d),D(o,c)},p(h,d){d&1&&e!==(e=ie(h[0][h[21]===0?11:h[21]===1?9:7])+"")&&Nt(r,e),d&1&&l!==(l=h[0][h[21]===0?11:h[21]===1?9:7].club+"")&&Nt(c,l)},d(h){h&&(J(t),J(s),J(o))}}}function _o(n){let t,e,r,s,o,l,c=n[0][n[21]===0?11:n[21]===1?9:7]&&go(n);function h(){return n[14](n[21])}function d(...y){return n[15](n[21],...y)}return{c(){t=x("button"),e=x("span"),e.textContent=`${n[21]===0?11:n[21]===1?9:7}`,r=Q(),c&&c.c(),s=Q(),P(e,"class","number svelte-p0e7uy"),P(t,"type","button"),P(t,"class","player-position forward svelte-p0e7uy"),P(t,"style","bottom: "+n[19].bottom+"; "+(n[19].left?"left: "+n[19].left:"right: "+n[19].right)),P(t,"aria-label","Select forward position "+(n[21]+1))},m(y,I){tt(y,t,I),D(t,e),D(t,r),c&&c.m(t,null),D(t,s),o||(l=[ht(t,"click",h),ht(t,"keydown",d)],o=!0)},p(y,I){n=y,n[0][n[21]===0?11:n[21]===1?9:7]?c?c.p(n,I):(c=go(n),c.c(),c.m(t,s)):c&&(c.d(1),c=null)},d(y){y&&J(t),c&&c.d(),o=!1,$t(l)}}}function Fu(n){var z,E,g;let t,e,r,s,o,l,c,h,d,y,I,b,S,C,F=n[0][1]&&co(n),N=Ve(n[5].defenders),L=[];for(let p=0;p<N.length;p+=1)L[p]=fo(uo(n,N,p));let B=Ve(n[5].midfielders),O=[];for(let p=0;p<B.length;p+=1)O[p]=mo(lo(n,B,p));let H=Ve(n[5].forwards),M=[];for(let p=0;p<H.length;p+=1)M[p]=_o(ao(n,H,p));return I=new Lu({props:{isOpen:n[1],position:n[2]||"",number:n[3]||0,firstName:((z=n[4])==null?void 0:z.firstName)||"",surname:((E=n[4])==null?void 0:E.surname)||"",club:((g=n[4])==null?void 0:g.club)||"",isEdit:!!n[4]}}),I.$on("save",n[7]),I.$on("close",n[16]),{c(){t=x("div"),e=x("div"),r=x("div"),s=x("button"),o=x("span"),o.textContent="1",l=Q(),F&&F.c(),c=Q();for(let p=0;p<L.length;p+=1)L[p].c();h=Q();for(let p=0;p<O.length;p+=1)O[p].c();d=Q();for(let p=0;p<M.length;p+=1)M[p].c();y=Q(),mi(I.$$.fragment),P(o,"class","number svelte-p0e7uy"),P(s,"type","button"),P(s,"class","player-position goalkeeper svelte-p0e7uy"),ro(s,"bottom",n[5].goalkeeper.bottom),ro(s,"left",n[5].goalkeeper.left),P(s,"aria-label","Select goalkeeper position"),P(r,"class","player-positions svelte-p0e7uy"),P(e,"class","pitch-container svelte-p0e7uy"),P(t,"class","football-pitch svelte-p0e7uy")},m(p,_){tt(p,t,_),D(t,e),D(e,r),D(r,s),D(s,o),D(s,l),F&&F.m(s,null),D(r,c);for(let v=0;v<L.length;v+=1)L[v]&&L[v].m(r,null);D(r,h);for(let v=0;v<O.length;v+=1)O[v]&&O[v].m(r,null);D(r,d);for(let v=0;v<M.length;v+=1)M[v]&&M[v].m(r,null);tt(p,y,_),rr(I,p,_),b=!0,S||(C=[ht(s,"click",n[8]),ht(s,"keydown",n[9])],S=!0)},p(p,[_]){var T,m,et;if(p[0][1]?F?F.p(p,_):(F=co(p),F.c(),F.m(s,null)):F&&(F.d(1),F=null),_&97){N=Ve(p[5].defenders);let j;for(j=0;j<N.length;j+=1){const Pt=uo(p,N,j);L[j]?L[j].p(Pt,_):(L[j]=fo(Pt),L[j].c(),L[j].m(r,h))}for(;j<L.length;j+=1)L[j].d(1);L.length=N.length}if(_&97){B=Ve(p[5].midfielders);let j;for(j=0;j<B.length;j+=1){const Pt=lo(p,B,j);O[j]?O[j].p(Pt,_):(O[j]=mo(Pt),O[j].c(),O[j].m(r,d))}for(;j<O.length;j+=1)O[j].d(1);O.length=B.length}if(_&97){H=Ve(p[5].forwards);let j;for(j=0;j<H.length;j+=1){const Pt=ao(p,H,j);M[j]?M[j].p(Pt,_):(M[j]=_o(Pt),M[j].c(),M[j].m(r,null))}for(;j<M.length;j+=1)M[j].d(1);M.length=H.length}const v={};_&2&&(v.isOpen=p[1]),_&4&&(v.position=p[2]||""),_&8&&(v.number=p[3]||0),_&16&&(v.firstName=((T=p[4])==null?void 0:T.firstName)||""),_&16&&(v.surname=((m=p[4])==null?void 0:m.surname)||""),_&16&&(v.club=((et=p[4])==null?void 0:et.club)||""),_&16&&(v.isEdit=!!p[4]),I.$set(v)},i(p){b||(nr(I.$$.fragment,p),b=!0)},o(p){pi(I.$$.fragment,p),b=!1},d(p){p&&(J(t),J(y)),F&&F.d(),ri(L,p),ri(O,p),ri(M,p),ir(I,p),S=!1,$t(C)}}}function ie(n){return window.matchMedia("(max-width: 768px)").matches?n.surname:`${n.firstName} ${n.surname}`}function Uu(n,t,e){const r=Ni();let s={},o=!1,l=null,c=null,h=null;const d={goalkeeper:{bottom:"5%",left:"50%"},defenders:[{bottom:"25%",left:"17%"},{bottom:"25%",left:"50%"},{bottom:"25%",left:"83%"}],midfielders:[{bottom:"45%",left:"12.5%"},{bottom:"45%",left:"37.5%"},{bottom:"45%",left:"62.5%"},{bottom:"45%",left:"87.5%"}],forwards:[{bottom:"70%",left:"17%"},{bottom:"70%",left:"50%"},{bottom:"70%",left:"83%"}]};function y(M,z){e(2,l=M),e(3,c=z),e(4,h=s[z]||null),e(1,o=!0)}function I(M){if(c!==null){e(0,s[c]={firstName:M.detail.firstName,surname:M.detail.surname,club:M.detail.club},s),e(0,s),e(1,o=!1),e(2,l=null),e(3,c=null),e(4,h=null);const z=Object.keys(s).length;r("playersUpdate",{filledPositions:z,players:s})}}return[s,o,l,c,h,d,y,I,()=>y("goalkeeper",1),M=>M.key==="Enter"&&y("goalkeeper",1),M=>y("defender",M===0?3:M===1?4:2),(M,z)=>z.key==="Enter"&&y("defender",M===0?3:M===1?4:2),M=>y("midfielder",M===0?6:M===1?5:M===2?10:8),(M,z)=>z.key==="Enter"&&y("midfielder",M===0?6:M===1?5:M===2?10:8),M=>y("forward",M===0?11:M===1?9:7),(M,z)=>z.key==="Enter"&&y("forward",M===0?11:M===1?9:7),()=>{e(1,o=!1),e(4,h=null)}]}class xu extends Ar{constructor(t){super(),Ir(this,t,Uu,Fu,Tr,{})}}function yo(n){let t,e,r,s,o,l,c,h,d,y,I,b,S,C,F,N,L,B,O,H,M,z,E,g,p=n[2]&&vo(n);function _(m,et){return m[1]?ju:Bu}let v=_(n),T=v(n);return{c(){t=x("div"),e=x("div"),r=x("div"),r.innerHTML='<h3 id="email-form-title" class="svelte-txf4uf">Verstuur je stem</h3>',s=Q(),o=x("form"),p&&p.c(),l=Q(),c=x("div"),h=x("label"),h.textContent="E-mailadres:",d=Q(),y=x("input"),I=Q(),b=x("div"),S=x("label"),C=x("input"),F=Q(),N=x("span"),N.textContent="Ik wil mail ontvangen van RTV Drenthe over Onze Club. Als je dit aanvinkt meld je je alleen aan voor nieuws rond Onze Club",L=Q(),B=x("div"),O=x("button"),H=ot("Annuleren"),M=Q(),z=x("button"),T.c(),P(r,"class","modal-header svelte-txf4uf"),P(h,"for","email"),P(h,"class","svelte-txf4uf"),P(y,"type","email"),P(y,"id","email"),y.required=!0,P(y,"placeholder","Vul je e-mailadres in"),y.disabled=n[1],P(y,"class","svelte-txf4uf"),P(c,"class","form-group svelte-txf4uf"),P(C,"type","checkbox"),C.disabled=n[1],P(C,"class","svelte-txf4uf"),P(S,"class","checkbox-label svelte-txf4uf"),P(b,"class","form-group checkbox-group svelte-txf4uf"),P(O,"type","button"),P(O,"class","cancel-button svelte-txf4uf"),O.disabled=n[1],P(z,"type","submit"),P(z,"class","save-button svelte-txf4uf"),z.disabled=n[1],P(B,"class","modal-footer svelte-txf4uf"),P(o,"class","modal-content svelte-txf4uf"),P(e,"class","modal svelte-txf4uf"),P(e,"role","dialog"),P(e,"aria-labelledby","email-form-title"),P(e,"aria-modal","true"),P(t,"class","modal-backdrop svelte-txf4uf"),P(t,"role","presentation")},m(m,et){tt(m,t,et),D(t,e),D(e,r),D(e,s),D(e,o),p&&p.m(o,null),D(o,l),D(o,c),D(c,h),D(c,d),D(c,y),te(y,n[3]),D(o,I),D(o,b),D(b,S),D(S,C),C.checked=n[4],D(S,F),D(S,N),D(o,L),D(o,B),D(B,O),D(O,H),D(B,M),D(B,z),T.m(z,null),E||(g=[ht(y,"input",n[7]),ht(C,"change",n[8]),ht(O,"click",n[5]),ht(o,"submit",Ta(n[6]))],E=!0)},p(m,et){m[2]?p?p.p(m,et):(p=vo(m),p.c(),p.m(o,l)):p&&(p.d(1),p=null),et&2&&(y.disabled=m[1]),et&8&&y.value!==m[3]&&te(y,m[3]),et&2&&(C.disabled=m[1]),et&16&&(C.checked=m[4]),et&2&&(O.disabled=m[1]),v!==(v=_(m))&&(T.d(1),T=v(m),T&&(T.c(),T.m(z,null))),et&2&&(z.disabled=m[1])},d(m){m&&J(t),p&&p.d(),T.d(),E=!1,$t(g)}}}function vo(n){let t,e;return{c(){t=x("div"),e=ot(n[2]),P(t,"class","error-message svelte-txf4uf")},m(r,s){tt(r,t,s),D(t,e)},p(r,s){s&4&&Nt(e,r[2])},d(r){r&&J(t)}}}function Bu(n){let t;return{c(){t=ot("Versturen")},m(e,r){tt(e,t,r)},d(e){e&&J(t)}}}function ju(n){let t;return{c(){t=ot("Versturen...")},m(e,r){tt(e,t,r)},d(e){e&&J(t)}}}function $u(n){let t,e=n[0]&&yo(n);return{c(){e&&e.c(),t=Ea()},m(r,s){e&&e.m(r,s),tt(r,t,s)},p(r,[s]){r[0]?e?e.p(r,s):(e=yo(r),e.c(),e.m(t.parentNode,t)):e&&(e.d(1),e=null)},i:_e,o:_e,d(r){r&&J(t),e&&e.d(r)}}}function zu(n,t,e){let{isOpen:r=!1}=t,{isSubmitting:s=!1}=t,{submitError:o=null}=t,l="",c=!1;const h=Ni();function d(){s||h("close")}function y(){s||h("submit",{email:l,consent:c})}function I(C){C.key==="Escape"&&r&&!s&&d()}Aa(()=>(document.addEventListener("keydown",I),()=>{document.removeEventListener("keydown",I)}));function b(){l=this.value,e(3,l)}function S(){c=this.checked,e(4,c)}return n.$$set=C=>{"isOpen"in C&&e(0,r=C.isOpen),"isSubmitting"in C&&e(1,s=C.isSubmitting),"submitError"in C&&e(2,o=C.submitError)},[r,s,o,l,c,d,y,b,S]}class qu extends Ar{constructor(t){super(),Ir(this,t,zu,$u,Tr,{isOpen:0,isSubmitting:1,submitError:2})}}const Hu=()=>{};var Eo={};/**
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
 */const ba=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?t[e++]=s:s<2048?(t[e++]=s>>6|192,t[e++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=s>>18|240,t[e++]=s>>12&63|128,t[e++]=s>>6&63|128,t[e++]=s&63|128):(t[e++]=s>>12|224,t[e++]=s>>6&63|128,t[e++]=s&63|128)}return t},Gu=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const s=n[e++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const o=n[e++];t[r++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=n[e++],l=n[e++],c=n[e++],h=((s&7)<<18|(o&63)<<12|(l&63)<<6|c&63)-65536;t[r++]=String.fromCharCode(55296+(h>>10)),t[r++]=String.fromCharCode(56320+(h&1023))}else{const o=n[e++],l=n[e++];t[r++]=String.fromCharCode((s&15)<<12|(o&63)<<6|l&63)}}return t.join("")},Ra={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const o=n[s],l=s+1<n.length,c=l?n[s+1]:0,h=s+2<n.length,d=h?n[s+2]:0,y=o>>2,I=(o&3)<<4|c>>4;let b=(c&15)<<2|d>>6,S=d&63;h||(S=64,l||(b=64)),r.push(e[y],e[I],e[b],e[S])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(ba(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):Gu(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const o=e[n.charAt(s++)],c=s<n.length?e[n.charAt(s)]:0;++s;const d=s<n.length?e[n.charAt(s)]:64;++s;const I=s<n.length?e[n.charAt(s)]:64;if(++s,o==null||c==null||d==null||I==null)throw new Ku;const b=o<<2|c>>4;if(r.push(b),d!==64){const S=c<<4&240|d>>2;if(r.push(S),I!==64){const C=d<<6&192|I;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Ku extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Wu=function(n){const t=ba(n);return Ra.encodeByteArray(t,!0)},sr=function(n){return Wu(n).replace(/\./g,"")},Qu=function(n){try{return Ra.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function Xu(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Yu=()=>Xu().__FIREBASE_DEFAULTS__,Ju=()=>{if(typeof process>"u"||typeof Eo>"u")return;const n=Eo.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Zu=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&Qu(n[1]);return t&&JSON.parse(t)},Oi=()=>{try{return Hu()||Yu()||Ju()||Zu()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},tc=n=>{var t,e;return(e=(t=Oi())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},ec=n=>{const t=tc(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},Pa=()=>{var n;return(n=Oi())===null||n===void 0?void 0:n.config};/**
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
 */class nc{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
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
 */function rc(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",s=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const l=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n);return[sr(JSON.stringify(e)),sr(JSON.stringify(l)),""].join(".")}/**
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
 */function ic(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function sc(){var n;const t=(n=Oi())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function oc(){return!sc()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function ac(){try{return typeof indexedDB=="object"}catch{return!1}}function lc(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{e=!1},s.onerror=()=>{var o;t(((o=s.error)===null||o===void 0?void 0:o.message)||"")}}catch(e){t(e)}})}/**
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
 */const uc="FirebaseError";class $e extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=uc,Object.setPrototypeOf(this,$e.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Sa.prototype.create)}}class Sa{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},s=`${this.service}/${t}`,o=this.errors[t],l=o?cc(o,r):"Error",c=`${this.serviceName}: ${l} (${s}).`;return new $e(s,c,r)}}function cc(n,t){return n.replace(hc,(e,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const hc=/\{\$([^}]+)}/g;function or(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const s of e){if(!r.includes(s))return!1;const o=n[s],l=t[s];if(To(o)&&To(l)){if(!or(o,l))return!1}else if(o!==l)return!1}for(const s of r)if(!e.includes(s))return!1;return!0}function To(n){return n!==null&&typeof n=="object"}/**
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
 */function pn(n){return n&&n._delegate?n._delegate:n}class mn{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const de="[DEFAULT]";/**
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
 */class fc{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new nc;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:e});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(pc(t))try{this.getOrInitializeService({instanceIdentifier:de})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(e);try{const o=this.getOrInitializeService({instanceIdentifier:s});r.resolve(o)}catch{}}}}clearInstance(t=de){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=de){return this.instances.has(t)}getOptions(t=de){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[o,l]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(o);r===c&&l.resolve(s)}return s}onInit(t,e){var r;const s=this.normalizeInstanceIdentifier(e),o=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(s,o);const l=this.instances.get(s);return l&&t(l,s),()=>{o.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const s of r)try{s(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:dc(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=de){return this.component?this.component.multipleInstances?t:de:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function dc(n){return n===de?void 0:n}function pc(n){return n.instantiationMode==="EAGER"}/**
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
 */class mc{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new fc(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var W;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(W||(W={}));const gc={debug:W.DEBUG,verbose:W.VERBOSE,info:W.INFO,warn:W.WARN,error:W.ERROR,silent:W.SILENT},_c=W.INFO,yc={[W.DEBUG]:"log",[W.VERBOSE]:"log",[W.INFO]:"info",[W.WARN]:"warn",[W.ERROR]:"error"},vc=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),s=yc[t];if(s)console[s](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Ca{constructor(t){this.name=t,this._logLevel=_c,this._logHandler=vc,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in W))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?gc[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,W.DEBUG,...t),this._logHandler(this,W.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,W.VERBOSE,...t),this._logHandler(this,W.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,W.INFO,...t),this._logHandler(this,W.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,W.WARN,...t),this._logHandler(this,W.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,W.ERROR,...t),this._logHandler(this,W.ERROR,...t)}}const Ec=(n,t)=>t.some(e=>n instanceof e);let Io,Ao;function Tc(){return Io||(Io=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ic(){return Ao||(Ao=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Va=new WeakMap,gi=new WeakMap,Da=new WeakMap,si=new WeakMap,Mi=new WeakMap;function Ac(n){const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("success",o),n.removeEventListener("error",l)},o=()=>{e(ee(n.result)),s()},l=()=>{r(n.error),s()};n.addEventListener("success",o),n.addEventListener("error",l)});return t.then(e=>{e instanceof IDBCursor&&Va.set(e,n)}).catch(()=>{}),Mi.set(t,n),t}function wc(n){if(gi.has(n))return;const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",l),n.removeEventListener("abort",l)},o=()=>{e(),s()},l=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",o),n.addEventListener("error",l),n.addEventListener("abort",l)});gi.set(n,t)}let _i={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return gi.get(n);if(t==="objectStoreNames")return n.objectStoreNames||Da.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return ee(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function bc(n){_i=n(_i)}function Rc(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call(oi(this),t,...e);return Da.set(r,t.sort?t.sort():[t]),ee(r)}:Ic().includes(n)?function(...t){return n.apply(oi(this),t),ee(Va.get(this))}:function(...t){return ee(n.apply(oi(this),t))}}function Pc(n){return typeof n=="function"?Rc(n):(n instanceof IDBTransaction&&wc(n),Ec(n,Tc())?new Proxy(n,_i):n)}function ee(n){if(n instanceof IDBRequest)return Ac(n);if(si.has(n))return si.get(n);const t=Pc(n);return t!==n&&(si.set(n,t),Mi.set(t,n)),t}const oi=n=>Mi.get(n);function Sc(n,t,{blocked:e,upgrade:r,blocking:s,terminated:o}={}){const l=indexedDB.open(n,t),c=ee(l);return r&&l.addEventListener("upgradeneeded",h=>{r(ee(l.result),h.oldVersion,h.newVersion,ee(l.transaction),h)}),e&&l.addEventListener("blocked",h=>e(h.oldVersion,h.newVersion,h)),c.then(h=>{o&&h.addEventListener("close",()=>o()),s&&h.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),c}const Cc=["get","getKey","getAll","getAllKeys","count"],Vc=["put","add","delete","clear"],ai=new Map;function wo(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(ai.get(t))return ai.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,s=Vc.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Cc.includes(e)))return;const o=async function(l,...c){const h=this.transaction(l,s?"readwrite":"readonly");let d=h.store;return r&&(d=d.index(c.shift())),(await Promise.all([d[e](...c),s&&h.done]))[0]};return ai.set(t,o),o}bc(n=>({...n,get:(t,e,r)=>wo(t,e)||n.get(t,e,r),has:(t,e)=>!!wo(t,e)||n.has(t,e)}));/**
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
 */class Dc{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(kc(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function kc(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const yi="@firebase/app",bo="0.11.3";/**
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
 */const Qt=new Ca("@firebase/app"),Nc="@firebase/app-compat",Oc="@firebase/analytics-compat",Mc="@firebase/analytics",Lc="@firebase/app-check-compat",Fc="@firebase/app-check",Uc="@firebase/auth",xc="@firebase/auth-compat",Bc="@firebase/database",jc="@firebase/data-connect",$c="@firebase/database-compat",zc="@firebase/functions",qc="@firebase/functions-compat",Hc="@firebase/installations",Gc="@firebase/installations-compat",Kc="@firebase/messaging",Wc="@firebase/messaging-compat",Qc="@firebase/performance",Xc="@firebase/performance-compat",Yc="@firebase/remote-config",Jc="@firebase/remote-config-compat",Zc="@firebase/storage",th="@firebase/storage-compat",eh="@firebase/firestore",nh="@firebase/vertexai",rh="@firebase/firestore-compat",ih="firebase",sh="11.5.0";/**
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
 */const vi="[DEFAULT]",oh={[yi]:"fire-core",[Nc]:"fire-core-compat",[Mc]:"fire-analytics",[Oc]:"fire-analytics-compat",[Fc]:"fire-app-check",[Lc]:"fire-app-check-compat",[Uc]:"fire-auth",[xc]:"fire-auth-compat",[Bc]:"fire-rtdb",[jc]:"fire-data-connect",[$c]:"fire-rtdb-compat",[zc]:"fire-fn",[qc]:"fire-fn-compat",[Hc]:"fire-iid",[Gc]:"fire-iid-compat",[Kc]:"fire-fcm",[Wc]:"fire-fcm-compat",[Qc]:"fire-perf",[Xc]:"fire-perf-compat",[Yc]:"fire-rc",[Jc]:"fire-rc-compat",[Zc]:"fire-gcs",[th]:"fire-gcs-compat",[eh]:"fire-fst",[rh]:"fire-fst-compat",[nh]:"fire-vertex","fire-js":"fire-js",[ih]:"fire-js-all"};/**
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
 */const ar=new Map,ah=new Map,Ei=new Map;function Ro(n,t){try{n.container.addComponent(t)}catch(e){Qt.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function lr(n){const t=n.name;if(Ei.has(t))return Qt.debug(`There were multiple attempts to register component ${t}.`),!1;Ei.set(t,n);for(const e of ar.values())Ro(e,n);for(const e of ah.values())Ro(e,n);return!0}function lh(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}function uh(n){return n==null?!1:n.settings!==void 0}/**
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
 */const ch={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ne=new Sa("app","Firebase",ch);/**
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
 */class hh{constructor(t,e,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new mn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw ne.create("app-deleted",{appName:this._name})}}/**
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
 */const fh=sh;function ka(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r=Object.assign({name:vi,automaticDataCollectionEnabled:!1},t),s=r.name;if(typeof s!="string"||!s)throw ne.create("bad-app-name",{appName:String(s)});if(e||(e=Pa()),!e)throw ne.create("no-options");const o=ar.get(s);if(o){if(or(e,o.options)&&or(r,o.config))return o;throw ne.create("duplicate-app",{appName:s})}const l=new mc(s);for(const h of Ei.values())l.addComponent(h);const c=new hh(e,r,l);return ar.set(s,c),c}function dh(n=vi){const t=ar.get(n);if(!t&&n===vi&&Pa())return ka();if(!t)throw ne.create("no-app",{appName:n});return t}function Me(n,t,e){var r;let s=(r=oh[n])!==null&&r!==void 0?r:n;e&&(s+=`-${e}`);const o=s.match(/\s|\//),l=t.match(/\s|\//);if(o||l){const c=[`Unable to register library "${s}" with version "${t}":`];o&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&l&&c.push("and"),l&&c.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Qt.warn(c.join(" "));return}lr(new mn(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
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
 */const ph="firebase-heartbeat-database",mh=1,gn="firebase-heartbeat-store";let li=null;function Na(){return li||(li=Sc(ph,mh,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(gn)}catch(e){console.warn(e)}}}}).catch(n=>{throw ne.create("idb-open",{originalErrorMessage:n.message})})),li}async function gh(n){try{const e=(await Na()).transaction(gn),r=await e.objectStore(gn).get(Oa(n));return await e.done,r}catch(t){if(t instanceof $e)Qt.warn(t.message);else{const e=ne.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Qt.warn(e.message)}}}async function Po(n,t){try{const r=(await Na()).transaction(gn,"readwrite");await r.objectStore(gn).put(t,Oa(n)),await r.done}catch(e){if(e instanceof $e)Qt.warn(e.message);else{const r=ne.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});Qt.warn(r.message)}}}function Oa(n){return`${n.name}!${n.options.appId}`}/**
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
 */const _h=1024,yh=30;class vh{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Th(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,e;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=So();if(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(l=>l.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:s}),this._heartbeatsCache.heartbeats.length>yh){const l=Ih(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(l,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Qt.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=So(),{heartbeatsToSend:r,unsentEntries:s}=Eh(this._heartbeatsCache.heartbeats),o=sr(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return Qt.warn(e),""}}}function So(){return new Date().toISOString().substring(0,10)}function Eh(n,t=_h){const e=[];let r=n.slice();for(const s of n){const o=e.find(l=>l.agent===s.agent);if(o){if(o.dates.push(s.date),Co(e)>t){o.dates.pop();break}}else if(e.push({agent:s.agent,dates:[s.date]}),Co(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class Th{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ac()?lc().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await gh(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return Po(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return Po(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function Co(n){return sr(JSON.stringify({version:2,heartbeats:n})).length}function Ih(n){if(n.length===0)return-1;let t=0,e=n[0].date;for(let r=1;r<n.length;r++)n[r].date<e&&(e=n[r].date,t=r);return t}/**
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
 */function Ah(n){lr(new mn("platform-logger",t=>new Dc(t),"PRIVATE")),lr(new mn("heartbeat",t=>new vh(t),"PRIVATE")),Me(yi,bo,n),Me(yi,bo,"esm2017"),Me("fire-js","")}Ah("");var Vo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Li;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(E,g){function p(){}p.prototype=g.prototype,E.D=g.prototype,E.prototype=new p,E.prototype.constructor=E,E.C=function(_,v,T){for(var m=Array(arguments.length-2),et=2;et<arguments.length;et++)m[et-2]=arguments[et];return g.prototype[v].apply(_,m)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(r,e),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(E,g,p){p||(p=0);var _=Array(16);if(typeof g=="string")for(var v=0;16>v;++v)_[v]=g.charCodeAt(p++)|g.charCodeAt(p++)<<8|g.charCodeAt(p++)<<16|g.charCodeAt(p++)<<24;else for(v=0;16>v;++v)_[v]=g[p++]|g[p++]<<8|g[p++]<<16|g[p++]<<24;g=E.g[0],p=E.g[1],v=E.g[2];var T=E.g[3],m=g+(T^p&(v^T))+_[0]+3614090360&4294967295;g=p+(m<<7&4294967295|m>>>25),m=T+(v^g&(p^v))+_[1]+3905402710&4294967295,T=g+(m<<12&4294967295|m>>>20),m=v+(p^T&(g^p))+_[2]+606105819&4294967295,v=T+(m<<17&4294967295|m>>>15),m=p+(g^v&(T^g))+_[3]+3250441966&4294967295,p=v+(m<<22&4294967295|m>>>10),m=g+(T^p&(v^T))+_[4]+4118548399&4294967295,g=p+(m<<7&4294967295|m>>>25),m=T+(v^g&(p^v))+_[5]+1200080426&4294967295,T=g+(m<<12&4294967295|m>>>20),m=v+(p^T&(g^p))+_[6]+2821735955&4294967295,v=T+(m<<17&4294967295|m>>>15),m=p+(g^v&(T^g))+_[7]+4249261313&4294967295,p=v+(m<<22&4294967295|m>>>10),m=g+(T^p&(v^T))+_[8]+1770035416&4294967295,g=p+(m<<7&4294967295|m>>>25),m=T+(v^g&(p^v))+_[9]+2336552879&4294967295,T=g+(m<<12&4294967295|m>>>20),m=v+(p^T&(g^p))+_[10]+4294925233&4294967295,v=T+(m<<17&4294967295|m>>>15),m=p+(g^v&(T^g))+_[11]+2304563134&4294967295,p=v+(m<<22&4294967295|m>>>10),m=g+(T^p&(v^T))+_[12]+1804603682&4294967295,g=p+(m<<7&4294967295|m>>>25),m=T+(v^g&(p^v))+_[13]+4254626195&4294967295,T=g+(m<<12&4294967295|m>>>20),m=v+(p^T&(g^p))+_[14]+2792965006&4294967295,v=T+(m<<17&4294967295|m>>>15),m=p+(g^v&(T^g))+_[15]+1236535329&4294967295,p=v+(m<<22&4294967295|m>>>10),m=g+(v^T&(p^v))+_[1]+4129170786&4294967295,g=p+(m<<5&4294967295|m>>>27),m=T+(p^v&(g^p))+_[6]+3225465664&4294967295,T=g+(m<<9&4294967295|m>>>23),m=v+(g^p&(T^g))+_[11]+643717713&4294967295,v=T+(m<<14&4294967295|m>>>18),m=p+(T^g&(v^T))+_[0]+3921069994&4294967295,p=v+(m<<20&4294967295|m>>>12),m=g+(v^T&(p^v))+_[5]+3593408605&4294967295,g=p+(m<<5&4294967295|m>>>27),m=T+(p^v&(g^p))+_[10]+38016083&4294967295,T=g+(m<<9&4294967295|m>>>23),m=v+(g^p&(T^g))+_[15]+3634488961&4294967295,v=T+(m<<14&4294967295|m>>>18),m=p+(T^g&(v^T))+_[4]+3889429448&4294967295,p=v+(m<<20&4294967295|m>>>12),m=g+(v^T&(p^v))+_[9]+568446438&4294967295,g=p+(m<<5&4294967295|m>>>27),m=T+(p^v&(g^p))+_[14]+3275163606&4294967295,T=g+(m<<9&4294967295|m>>>23),m=v+(g^p&(T^g))+_[3]+4107603335&4294967295,v=T+(m<<14&4294967295|m>>>18),m=p+(T^g&(v^T))+_[8]+1163531501&4294967295,p=v+(m<<20&4294967295|m>>>12),m=g+(v^T&(p^v))+_[13]+2850285829&4294967295,g=p+(m<<5&4294967295|m>>>27),m=T+(p^v&(g^p))+_[2]+4243563512&4294967295,T=g+(m<<9&4294967295|m>>>23),m=v+(g^p&(T^g))+_[7]+1735328473&4294967295,v=T+(m<<14&4294967295|m>>>18),m=p+(T^g&(v^T))+_[12]+2368359562&4294967295,p=v+(m<<20&4294967295|m>>>12),m=g+(p^v^T)+_[5]+4294588738&4294967295,g=p+(m<<4&4294967295|m>>>28),m=T+(g^p^v)+_[8]+2272392833&4294967295,T=g+(m<<11&4294967295|m>>>21),m=v+(T^g^p)+_[11]+1839030562&4294967295,v=T+(m<<16&4294967295|m>>>16),m=p+(v^T^g)+_[14]+4259657740&4294967295,p=v+(m<<23&4294967295|m>>>9),m=g+(p^v^T)+_[1]+2763975236&4294967295,g=p+(m<<4&4294967295|m>>>28),m=T+(g^p^v)+_[4]+1272893353&4294967295,T=g+(m<<11&4294967295|m>>>21),m=v+(T^g^p)+_[7]+4139469664&4294967295,v=T+(m<<16&4294967295|m>>>16),m=p+(v^T^g)+_[10]+3200236656&4294967295,p=v+(m<<23&4294967295|m>>>9),m=g+(p^v^T)+_[13]+681279174&4294967295,g=p+(m<<4&4294967295|m>>>28),m=T+(g^p^v)+_[0]+3936430074&4294967295,T=g+(m<<11&4294967295|m>>>21),m=v+(T^g^p)+_[3]+3572445317&4294967295,v=T+(m<<16&4294967295|m>>>16),m=p+(v^T^g)+_[6]+76029189&4294967295,p=v+(m<<23&4294967295|m>>>9),m=g+(p^v^T)+_[9]+3654602809&4294967295,g=p+(m<<4&4294967295|m>>>28),m=T+(g^p^v)+_[12]+3873151461&4294967295,T=g+(m<<11&4294967295|m>>>21),m=v+(T^g^p)+_[15]+530742520&4294967295,v=T+(m<<16&4294967295|m>>>16),m=p+(v^T^g)+_[2]+3299628645&4294967295,p=v+(m<<23&4294967295|m>>>9),m=g+(v^(p|~T))+_[0]+4096336452&4294967295,g=p+(m<<6&4294967295|m>>>26),m=T+(p^(g|~v))+_[7]+1126891415&4294967295,T=g+(m<<10&4294967295|m>>>22),m=v+(g^(T|~p))+_[14]+2878612391&4294967295,v=T+(m<<15&4294967295|m>>>17),m=p+(T^(v|~g))+_[5]+4237533241&4294967295,p=v+(m<<21&4294967295|m>>>11),m=g+(v^(p|~T))+_[12]+1700485571&4294967295,g=p+(m<<6&4294967295|m>>>26),m=T+(p^(g|~v))+_[3]+2399980690&4294967295,T=g+(m<<10&4294967295|m>>>22),m=v+(g^(T|~p))+_[10]+4293915773&4294967295,v=T+(m<<15&4294967295|m>>>17),m=p+(T^(v|~g))+_[1]+2240044497&4294967295,p=v+(m<<21&4294967295|m>>>11),m=g+(v^(p|~T))+_[8]+1873313359&4294967295,g=p+(m<<6&4294967295|m>>>26),m=T+(p^(g|~v))+_[15]+4264355552&4294967295,T=g+(m<<10&4294967295|m>>>22),m=v+(g^(T|~p))+_[6]+2734768916&4294967295,v=T+(m<<15&4294967295|m>>>17),m=p+(T^(v|~g))+_[13]+1309151649&4294967295,p=v+(m<<21&4294967295|m>>>11),m=g+(v^(p|~T))+_[4]+4149444226&4294967295,g=p+(m<<6&4294967295|m>>>26),m=T+(p^(g|~v))+_[11]+3174756917&4294967295,T=g+(m<<10&4294967295|m>>>22),m=v+(g^(T|~p))+_[2]+718787259&4294967295,v=T+(m<<15&4294967295|m>>>17),m=p+(T^(v|~g))+_[9]+3951481745&4294967295,E.g[0]=E.g[0]+g&4294967295,E.g[1]=E.g[1]+(v+(m<<21&4294967295|m>>>11))&4294967295,E.g[2]=E.g[2]+v&4294967295,E.g[3]=E.g[3]+T&4294967295}r.prototype.u=function(E,g){g===void 0&&(g=E.length);for(var p=g-this.blockSize,_=this.B,v=this.h,T=0;T<g;){if(v==0)for(;T<=p;)s(this,E,T),T+=this.blockSize;if(typeof E=="string"){for(;T<g;)if(_[v++]=E.charCodeAt(T++),v==this.blockSize){s(this,_),v=0;break}}else for(;T<g;)if(_[v++]=E[T++],v==this.blockSize){s(this,_),v=0;break}}this.h=v,this.o+=g},r.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var g=1;g<E.length-8;++g)E[g]=0;var p=8*this.o;for(g=E.length-8;g<E.length;++g)E[g]=p&255,p/=256;for(this.u(E),E=Array(16),g=p=0;4>g;++g)for(var _=0;32>_;_+=8)E[p++]=this.g[g]>>>_&255;return E};function o(E,g){var p=c;return Object.prototype.hasOwnProperty.call(p,E)?p[E]:p[E]=g(E)}function l(E,g){this.h=g;for(var p=[],_=!0,v=E.length-1;0<=v;v--){var T=E[v]|0;_&&T==g||(p[v]=T,_=!1)}this.g=p}var c={};function h(E){return-128<=E&&128>E?o(E,function(g){return new l([g|0],0>g?-1:0)}):new l([E|0],0>E?-1:0)}function d(E){if(isNaN(E)||!isFinite(E))return I;if(0>E)return N(d(-E));for(var g=[],p=1,_=0;E>=p;_++)g[_]=E/p|0,p*=4294967296;return new l(g,0)}function y(E,g){if(E.length==0)throw Error("number format error: empty string");if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(E.charAt(0)=="-")return N(y(E.substring(1),g));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var p=d(Math.pow(g,8)),_=I,v=0;v<E.length;v+=8){var T=Math.min(8,E.length-v),m=parseInt(E.substring(v,v+T),g);8>T?(T=d(Math.pow(g,T)),_=_.j(T).add(d(m))):(_=_.j(p),_=_.add(d(m)))}return _}var I=h(0),b=h(1),S=h(16777216);n=l.prototype,n.m=function(){if(F(this))return-N(this).m();for(var E=0,g=1,p=0;p<this.g.length;p++){var _=this.i(p);E+=(0<=_?_:4294967296+_)*g,g*=4294967296}return E},n.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(C(this))return"0";if(F(this))return"-"+N(this).toString(E);for(var g=d(Math.pow(E,6)),p=this,_="";;){var v=H(p,g).g;p=L(p,v.j(g));var T=((0<p.g.length?p.g[0]:p.h)>>>0).toString(E);if(p=v,C(p))return T+_;for(;6>T.length;)T="0"+T;_=T+_}},n.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function C(E){if(E.h!=0)return!1;for(var g=0;g<E.g.length;g++)if(E.g[g]!=0)return!1;return!0}function F(E){return E.h==-1}n.l=function(E){return E=L(this,E),F(E)?-1:C(E)?0:1};function N(E){for(var g=E.g.length,p=[],_=0;_<g;_++)p[_]=~E.g[_];return new l(p,~E.h).add(b)}n.abs=function(){return F(this)?N(this):this},n.add=function(E){for(var g=Math.max(this.g.length,E.g.length),p=[],_=0,v=0;v<=g;v++){var T=_+(this.i(v)&65535)+(E.i(v)&65535),m=(T>>>16)+(this.i(v)>>>16)+(E.i(v)>>>16);_=m>>>16,T&=65535,m&=65535,p[v]=m<<16|T}return new l(p,p[p.length-1]&-2147483648?-1:0)};function L(E,g){return E.add(N(g))}n.j=function(E){if(C(this)||C(E))return I;if(F(this))return F(E)?N(this).j(N(E)):N(N(this).j(E));if(F(E))return N(this.j(N(E)));if(0>this.l(S)&&0>E.l(S))return d(this.m()*E.m());for(var g=this.g.length+E.g.length,p=[],_=0;_<2*g;_++)p[_]=0;for(_=0;_<this.g.length;_++)for(var v=0;v<E.g.length;v++){var T=this.i(_)>>>16,m=this.i(_)&65535,et=E.i(v)>>>16,j=E.i(v)&65535;p[2*_+2*v]+=m*j,B(p,2*_+2*v),p[2*_+2*v+1]+=T*j,B(p,2*_+2*v+1),p[2*_+2*v+1]+=m*et,B(p,2*_+2*v+1),p[2*_+2*v+2]+=T*et,B(p,2*_+2*v+2)}for(_=0;_<g;_++)p[_]=p[2*_+1]<<16|p[2*_];for(_=g;_<2*g;_++)p[_]=0;return new l(p,0)};function B(E,g){for(;(E[g]&65535)!=E[g];)E[g+1]+=E[g]>>>16,E[g]&=65535,g++}function O(E,g){this.g=E,this.h=g}function H(E,g){if(C(g))throw Error("division by zero");if(C(E))return new O(I,I);if(F(E))return g=H(N(E),g),new O(N(g.g),N(g.h));if(F(g))return g=H(E,N(g)),new O(N(g.g),g.h);if(30<E.g.length){if(F(E)||F(g))throw Error("slowDivide_ only works with positive integers.");for(var p=b,_=g;0>=_.l(E);)p=M(p),_=M(_);var v=z(p,1),T=z(_,1);for(_=z(_,2),p=z(p,2);!C(_);){var m=T.add(_);0>=m.l(E)&&(v=v.add(p),T=m),_=z(_,1),p=z(p,1)}return g=L(E,v.j(g)),new O(v,g)}for(v=I;0<=E.l(g);){for(p=Math.max(1,Math.floor(E.m()/g.m())),_=Math.ceil(Math.log(p)/Math.LN2),_=48>=_?1:Math.pow(2,_-48),T=d(p),m=T.j(g);F(m)||0<m.l(E);)p-=_,T=d(p),m=T.j(g);C(T)&&(T=b),v=v.add(T),E=L(E,m)}return new O(v,E)}n.A=function(E){return H(this,E).h},n.and=function(E){for(var g=Math.max(this.g.length,E.g.length),p=[],_=0;_<g;_++)p[_]=this.i(_)&E.i(_);return new l(p,this.h&E.h)},n.or=function(E){for(var g=Math.max(this.g.length,E.g.length),p=[],_=0;_<g;_++)p[_]=this.i(_)|E.i(_);return new l(p,this.h|E.h)},n.xor=function(E){for(var g=Math.max(this.g.length,E.g.length),p=[],_=0;_<g;_++)p[_]=this.i(_)^E.i(_);return new l(p,this.h^E.h)};function M(E){for(var g=E.g.length+1,p=[],_=0;_<g;_++)p[_]=E.i(_)<<1|E.i(_-1)>>>31;return new l(p,E.h)}function z(E,g){var p=g>>5;g%=32;for(var _=E.g.length-p,v=[],T=0;T<_;T++)v[T]=0<g?E.i(T+p)>>>g|E.i(T+p+1)<<32-g:E.i(T+p);return new l(v,E.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,l.prototype.add=l.prototype.add,l.prototype.multiply=l.prototype.j,l.prototype.modulo=l.prototype.A,l.prototype.compare=l.prototype.l,l.prototype.toNumber=l.prototype.m,l.prototype.toString=l.prototype.toString,l.prototype.getBits=l.prototype.i,l.fromNumber=d,l.fromString=y,Li=l}).apply(typeof Vo<"u"?Vo:typeof self<"u"?self:typeof window<"u"?window:{});var Gn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ma,an,La,Jn,Ti,Fa,Ua,xa;(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(i,a,u){return i==Array.prototype||i==Object.prototype||(i[a]=u.value),i};function e(i){i=[typeof globalThis=="object"&&globalThis,i,typeof window=="object"&&window,typeof self=="object"&&self,typeof Gn=="object"&&Gn];for(var a=0;a<i.length;++a){var u=i[a];if(u&&u.Math==Math)return u}throw Error("Cannot find global object")}var r=e(this);function s(i,a){if(a)t:{var u=r;i=i.split(".");for(var f=0;f<i.length-1;f++){var A=i[f];if(!(A in u))break t;u=u[A]}i=i[i.length-1],f=u[i],a=a(f),a!=f&&a!=null&&t(u,i,{configurable:!0,writable:!0,value:a})}}function o(i,a){i instanceof String&&(i+="");var u=0,f=!1,A={next:function(){if(!f&&u<i.length){var w=u++;return{value:a(w,i[w]),done:!1}}return f=!0,{done:!0,value:void 0}}};return A[Symbol.iterator]=function(){return A},A}s("Array.prototype.values",function(i){return i||function(){return o(this,function(a,u){return u})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var l=l||{},c=this||self;function h(i){var a=typeof i;return a=a!="object"?a:i?Array.isArray(i)?"array":a:"null",a=="array"||a=="object"&&typeof i.length=="number"}function d(i){var a=typeof i;return a=="object"&&i!=null||a=="function"}function y(i,a,u){return i.call.apply(i.bind,arguments)}function I(i,a,u){if(!i)throw Error();if(2<arguments.length){var f=Array.prototype.slice.call(arguments,2);return function(){var A=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(A,f),i.apply(a,A)}}return function(){return i.apply(a,arguments)}}function b(i,a,u){return b=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?y:I,b.apply(null,arguments)}function S(i,a){var u=Array.prototype.slice.call(arguments,1);return function(){var f=u.slice();return f.push.apply(f,arguments),i.apply(this,f)}}function C(i,a){function u(){}u.prototype=a.prototype,i.aa=a.prototype,i.prototype=new u,i.prototype.constructor=i,i.Qb=function(f,A,w){for(var k=Array(arguments.length-2),Z=2;Z<arguments.length;Z++)k[Z-2]=arguments[Z];return a.prototype[A].apply(f,k)}}function F(i){const a=i.length;if(0<a){const u=Array(a);for(let f=0;f<a;f++)u[f]=i[f];return u}return[]}function N(i,a){for(let u=1;u<arguments.length;u++){const f=arguments[u];if(h(f)){const A=i.length||0,w=f.length||0;i.length=A+w;for(let k=0;k<w;k++)i[A+k]=f[k]}else i.push(f)}}class L{constructor(a,u){this.i=a,this.j=u,this.h=0,this.g=null}get(){let a;return 0<this.h?(this.h--,a=this.g,this.g=a.next,a.next=null):a=this.i(),a}}function B(i){return/^[\s\xa0]*$/.test(i)}function O(){var i=c.navigator;return i&&(i=i.userAgent)?i:""}function H(i){return H[" "](i),i}H[" "]=function(){};var M=O().indexOf("Gecko")!=-1&&!(O().toLowerCase().indexOf("webkit")!=-1&&O().indexOf("Edge")==-1)&&!(O().indexOf("Trident")!=-1||O().indexOf("MSIE")!=-1)&&O().indexOf("Edge")==-1;function z(i,a,u){for(const f in i)a.call(u,i[f],f,i)}function E(i,a){for(const u in i)a.call(void 0,i[u],u,i)}function g(i){const a={};for(const u in i)a[u]=i[u];return a}const p="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function _(i,a){let u,f;for(let A=1;A<arguments.length;A++){f=arguments[A];for(u in f)i[u]=f[u];for(let w=0;w<p.length;w++)u=p[w],Object.prototype.hasOwnProperty.call(f,u)&&(i[u]=f[u])}}function v(i){var a=1;i=i.split(":");const u=[];for(;0<a&&i.length;)u.push(i.shift()),a--;return i.length&&u.push(i.join(":")),u}function T(i){c.setTimeout(()=>{throw i},0)}function m(){var i=we;let a=null;return i.g&&(a=i.g,i.g=i.g.next,i.g||(i.h=null),a.next=null),a}class et{constructor(){this.h=this.g=null}add(a,u){const f=j.get();f.set(a,u),this.h?this.h.next=f:this.g=f,this.h=f}}var j=new L(()=>new Pt,i=>i.reset());class Pt{constructor(){this.next=this.g=this.h=null}set(a,u){this.h=a,this.g=u,this.next=null}reset(){this.next=this.g=this.h=null}}let zt,qt=!1,we=new et,pt=()=>{const i=c.Promise.resolve(void 0);zt=()=>{i.then(Ot)}};var Ot=()=>{for(var i;i=m();){try{i.h.call(i.g)}catch(u){T(u)}var a=j;a.j(i),100>a.h&&(a.h++,i.next=a.g,a.g=i)}qt=!1};function Xt(){this.s=this.s,this.C=this.C}Xt.prototype.s=!1,Xt.prototype.ma=function(){this.s||(this.s=!0,this.N())},Xt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Et(i,a){this.type=i,this.g=this.target=a,this.defaultPrevented=!1}Et.prototype.h=function(){this.defaultPrevented=!0};var zl=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var i=!1,a=Object.defineProperty({},"passive",{get:function(){i=!0}});try{const u=()=>{};c.addEventListener("test",u,a),c.removeEventListener("test",u,a)}catch{}return i}();function He(i,a){if(Et.call(this,i?i.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,i){var u=this.type=i.type,f=i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:null;if(this.target=i.target||i.srcElement,this.g=a,a=i.relatedTarget){if(M){t:{try{H(a.nodeName);var A=!0;break t}catch{}A=!1}A||(a=null)}}else u=="mouseover"?a=i.fromElement:u=="mouseout"&&(a=i.toElement);this.relatedTarget=a,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0),this.button=i.button,this.key=i.key||"",this.ctrlKey=i.ctrlKey,this.altKey=i.altKey,this.shiftKey=i.shiftKey,this.metaKey=i.metaKey,this.pointerId=i.pointerId||0,this.pointerType=typeof i.pointerType=="string"?i.pointerType:ql[i.pointerType]||"",this.state=i.state,this.i=i,i.defaultPrevented&&He.aa.h.call(this)}}C(He,Et);var ql={2:"touch",3:"pen",4:"mouse"};He.prototype.h=function(){He.aa.h.call(this);var i=this.i;i.preventDefault?i.preventDefault():i.returnValue=!1};var Pn="closure_listenable_"+(1e6*Math.random()|0),Hl=0;function Gl(i,a,u,f,A){this.listener=i,this.proxy=null,this.src=a,this.type=u,this.capture=!!f,this.ha=A,this.key=++Hl,this.da=this.fa=!1}function Sn(i){i.da=!0,i.listener=null,i.proxy=null,i.src=null,i.ha=null}function Cn(i){this.src=i,this.g={},this.h=0}Cn.prototype.add=function(i,a,u,f,A){var w=i.toString();i=this.g[w],i||(i=this.g[w]=[],this.h++);var k=Or(i,a,f,A);return-1<k?(a=i[k],u||(a.fa=!1)):(a=new Gl(a,this.src,w,!!f,A),a.fa=u,i.push(a)),a};function Nr(i,a){var u=a.type;if(u in i.g){var f=i.g[u],A=Array.prototype.indexOf.call(f,a,void 0),w;(w=0<=A)&&Array.prototype.splice.call(f,A,1),w&&(Sn(a),i.g[u].length==0&&(delete i.g[u],i.h--))}}function Or(i,a,u,f){for(var A=0;A<i.length;++A){var w=i[A];if(!w.da&&w.listener==a&&w.capture==!!u&&w.ha==f)return A}return-1}var Mr="closure_lm_"+(1e6*Math.random()|0),Lr={};function rs(i,a,u,f,A){if(Array.isArray(a)){for(var w=0;w<a.length;w++)rs(i,a[w],u,f,A);return null}return u=os(u),i&&i[Pn]?i.K(a,u,d(f)?!!f.capture:!1,A):Kl(i,a,u,!1,f,A)}function Kl(i,a,u,f,A,w){if(!a)throw Error("Invalid event type");var k=d(A)?!!A.capture:!!A,Z=Ur(i);if(Z||(i[Mr]=Z=new Cn(i)),u=Z.add(a,u,f,k,w),u.proxy)return u;if(f=Wl(),u.proxy=f,f.src=i,f.listener=u,i.addEventListener)zl||(A=k),A===void 0&&(A=!1),i.addEventListener(a.toString(),f,A);else if(i.attachEvent)i.attachEvent(ss(a.toString()),f);else if(i.addListener&&i.removeListener)i.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return u}function Wl(){function i(u){return a.call(i.src,i.listener,u)}const a=Ql;return i}function is(i,a,u,f,A){if(Array.isArray(a))for(var w=0;w<a.length;w++)is(i,a[w],u,f,A);else f=d(f)?!!f.capture:!!f,u=os(u),i&&i[Pn]?(i=i.i,a=String(a).toString(),a in i.g&&(w=i.g[a],u=Or(w,u,f,A),-1<u&&(Sn(w[u]),Array.prototype.splice.call(w,u,1),w.length==0&&(delete i.g[a],i.h--)))):i&&(i=Ur(i))&&(a=i.g[a.toString()],i=-1,a&&(i=Or(a,u,f,A)),(u=-1<i?a[i]:null)&&Fr(u))}function Fr(i){if(typeof i!="number"&&i&&!i.da){var a=i.src;if(a&&a[Pn])Nr(a.i,i);else{var u=i.type,f=i.proxy;a.removeEventListener?a.removeEventListener(u,f,i.capture):a.detachEvent?a.detachEvent(ss(u),f):a.addListener&&a.removeListener&&a.removeListener(f),(u=Ur(a))?(Nr(u,i),u.h==0&&(u.src=null,a[Mr]=null)):Sn(i)}}}function ss(i){return i in Lr?Lr[i]:Lr[i]="on"+i}function Ql(i,a){if(i.da)i=!0;else{a=new He(a,this);var u=i.listener,f=i.ha||i.src;i.fa&&Fr(i),i=u.call(f,a)}return i}function Ur(i){return i=i[Mr],i instanceof Cn?i:null}var xr="__closure_events_fn_"+(1e9*Math.random()>>>0);function os(i){return typeof i=="function"?i:(i[xr]||(i[xr]=function(a){return i.handleEvent(a)}),i[xr])}function Tt(){Xt.call(this),this.i=new Cn(this),this.M=this,this.F=null}C(Tt,Xt),Tt.prototype[Pn]=!0,Tt.prototype.removeEventListener=function(i,a,u,f){is(this,i,a,u,f)};function St(i,a){var u,f=i.F;if(f)for(u=[];f;f=f.F)u.push(f);if(i=i.M,f=a.type||a,typeof a=="string")a=new Et(a,i);else if(a instanceof Et)a.target=a.target||i;else{var A=a;a=new Et(f,i),_(a,A)}if(A=!0,u)for(var w=u.length-1;0<=w;w--){var k=a.g=u[w];A=Vn(k,f,!0,a)&&A}if(k=a.g=i,A=Vn(k,f,!0,a)&&A,A=Vn(k,f,!1,a)&&A,u)for(w=0;w<u.length;w++)k=a.g=u[w],A=Vn(k,f,!1,a)&&A}Tt.prototype.N=function(){if(Tt.aa.N.call(this),this.i){var i=this.i,a;for(a in i.g){for(var u=i.g[a],f=0;f<u.length;f++)Sn(u[f]);delete i.g[a],i.h--}}this.F=null},Tt.prototype.K=function(i,a,u,f){return this.i.add(String(i),a,!1,u,f)},Tt.prototype.L=function(i,a,u,f){return this.i.add(String(i),a,!0,u,f)};function Vn(i,a,u,f){if(a=i.i.g[String(a)],!a)return!0;a=a.concat();for(var A=!0,w=0;w<a.length;++w){var k=a[w];if(k&&!k.da&&k.capture==u){var Z=k.listener,mt=k.ha||k.src;k.fa&&Nr(i.i,k),A=Z.call(mt,f)!==!1&&A}}return A&&!f.defaultPrevented}function as(i,a,u){if(typeof i=="function")u&&(i=b(i,u));else if(i&&typeof i.handleEvent=="function")i=b(i.handleEvent,i);else throw Error("Invalid listener argument");return 2147483647<Number(a)?-1:c.setTimeout(i,a||0)}function ls(i){i.g=as(()=>{i.g=null,i.i&&(i.i=!1,ls(i))},i.l);const a=i.h;i.h=null,i.m.apply(null,a)}class Xl extends Xt{constructor(a,u){super(),this.m=a,this.l=u,this.h=null,this.i=!1,this.g=null}j(a){this.h=arguments,this.g?this.i=!0:ls(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ge(i){Xt.call(this),this.h=i,this.g={}}C(Ge,Xt);var us=[];function cs(i){z(i.g,function(a,u){this.g.hasOwnProperty(u)&&Fr(a)},i),i.g={}}Ge.prototype.N=function(){Ge.aa.N.call(this),cs(this)},Ge.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Br=c.JSON.stringify,Yl=c.JSON.parse,Jl=class{stringify(i){return c.JSON.stringify(i,void 0)}parse(i){return c.JSON.parse(i,void 0)}};function jr(){}jr.prototype.h=null;function hs(i){return i.h||(i.h=i.i())}function fs(){}var Ke={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function $r(){Et.call(this,"d")}C($r,Et);function zr(){Et.call(this,"c")}C(zr,Et);var ue={},ds=null;function Dn(){return ds=ds||new Tt}ue.La="serverreachability";function ps(i){Et.call(this,ue.La,i)}C(ps,Et);function We(i){const a=Dn();St(a,new ps(a))}ue.STAT_EVENT="statevent";function ms(i,a){Et.call(this,ue.STAT_EVENT,i),this.stat=a}C(ms,Et);function Ct(i){const a=Dn();St(a,new ms(a,i))}ue.Ma="timingevent";function gs(i,a){Et.call(this,ue.Ma,i),this.size=a}C(gs,Et);function Qe(i,a){if(typeof i!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){i()},a)}function Xe(){this.g=!0}Xe.prototype.xa=function(){this.g=!1};function Zl(i,a,u,f,A,w){i.info(function(){if(i.g)if(w)for(var k="",Z=w.split("&"),mt=0;mt<Z.length;mt++){var Y=Z[mt].split("=");if(1<Y.length){var It=Y[0];Y=Y[1];var At=It.split("_");k=2<=At.length&&At[1]=="type"?k+(It+"="+Y+"&"):k+(It+"=redacted&")}}else k=null;else k=w;return"XMLHTTP REQ ("+f+") [attempt "+A+"]: "+a+`
`+u+`
`+k})}function tu(i,a,u,f,A,w,k){i.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+A+"]: "+a+`
`+u+`
`+w+" "+k})}function be(i,a,u,f){i.info(function(){return"XMLHTTP TEXT ("+a+"): "+nu(i,u)+(f?" "+f:"")})}function eu(i,a){i.info(function(){return"TIMEOUT: "+a})}Xe.prototype.info=function(){};function nu(i,a){if(!i.g)return a;if(!a)return null;try{var u=JSON.parse(a);if(u){for(i=0;i<u.length;i++)if(Array.isArray(u[i])){var f=u[i];if(!(2>f.length)){var A=f[1];if(Array.isArray(A)&&!(1>A.length)){var w=A[0];if(w!="noop"&&w!="stop"&&w!="close")for(var k=1;k<A.length;k++)A[k]=""}}}}return Br(u)}catch{return a}}var kn={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},_s={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},qr;function Nn(){}C(Nn,jr),Nn.prototype.g=function(){return new XMLHttpRequest},Nn.prototype.i=function(){return{}},qr=new Nn;function Yt(i,a,u,f){this.j=i,this.i=a,this.l=u,this.R=f||1,this.U=new Ge(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ys}function ys(){this.i=null,this.g="",this.h=!1}var vs={},Hr={};function Gr(i,a,u){i.L=1,i.v=Fn(Ht(a)),i.m=u,i.P=!0,Es(i,null)}function Es(i,a){i.F=Date.now(),On(i),i.A=Ht(i.v);var u=i.A,f=i.R;Array.isArray(f)||(f=[String(f)]),Os(u.i,"t",f),i.C=0,u=i.j.J,i.h=new ys,i.g=Js(i.j,u?a:null,!i.m),0<i.O&&(i.M=new Xl(b(i.Y,i,i.g),i.O)),a=i.U,u=i.g,f=i.ca;var A="readystatechange";Array.isArray(A)||(A&&(us[0]=A.toString()),A=us);for(var w=0;w<A.length;w++){var k=rs(u,A[w],f||a.handleEvent,!1,a.h||a);if(!k)break;a.g[k.key]=k}a=i.H?g(i.H):{},i.m?(i.u||(i.u="POST"),a["Content-Type"]="application/x-www-form-urlencoded",i.g.ea(i.A,i.u,i.m,a)):(i.u="GET",i.g.ea(i.A,i.u,null,a)),We(),Zl(i.i,i.u,i.A,i.l,i.R,i.m)}Yt.prototype.ca=function(i){i=i.target;const a=this.M;a&&Gt(i)==3?a.j():this.Y(i)},Yt.prototype.Y=function(i){try{if(i==this.g)t:{const At=Gt(this.g);var a=this.g.Ba();const Se=this.g.Z();if(!(3>At)&&(At!=3||this.g&&(this.h.h||this.g.oa()||js(this.g)))){this.J||At!=4||a==7||(a==8||0>=Se?We(3):We(2)),Kr(this);var u=this.g.Z();this.X=u;e:if(Ts(this)){var f=js(this.g);i="";var A=f.length,w=Gt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ce(this),Ye(this);var k="";break e}this.h.i=new c.TextDecoder}for(a=0;a<A;a++)this.h.h=!0,i+=this.h.i.decode(f[a],{stream:!(w&&a==A-1)});f.length=0,this.h.g+=i,this.C=0,k=this.h.g}else k=this.g.oa();if(this.o=u==200,tu(this.i,this.u,this.A,this.l,this.R,At,u),this.o){if(this.T&&!this.K){e:{if(this.g){var Z,mt=this.g;if((Z=mt.g?mt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!B(Z)){var Y=Z;break e}}Y=null}if(u=Y)be(this.i,this.l,u,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Wr(this,u);else{this.o=!1,this.s=3,Ct(12),ce(this),Ye(this);break t}}if(this.P){u=!0;let Mt;for(;!this.J&&this.C<k.length;)if(Mt=ru(this,k),Mt==Hr){At==4&&(this.s=4,Ct(14),u=!1),be(this.i,this.l,null,"[Incomplete Response]");break}else if(Mt==vs){this.s=4,Ct(15),be(this.i,this.l,k,"[Invalid Chunk]"),u=!1;break}else be(this.i,this.l,Mt,null),Wr(this,Mt);if(Ts(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),At!=4||k.length!=0||this.h.h||(this.s=1,Ct(16),u=!1),this.o=this.o&&u,!u)be(this.i,this.l,k,"[Invalid Chunked Response]"),ce(this),Ye(this);else if(0<k.length&&!this.W){this.W=!0;var It=this.j;It.g==this&&It.ba&&!It.M&&(It.j.info("Great, no buffering proxy detected. Bytes received: "+k.length),ti(It),It.M=!0,Ct(11))}}else be(this.i,this.l,k,null),Wr(this,k);At==4&&ce(this),this.o&&!this.J&&(At==4?Ws(this.j,this):(this.o=!1,On(this)))}else Eu(this.g),u==400&&0<k.indexOf("Unknown SID")?(this.s=3,Ct(12)):(this.s=0,Ct(13)),ce(this),Ye(this)}}}catch{}finally{}};function Ts(i){return i.g?i.u=="GET"&&i.L!=2&&i.j.Ca:!1}function ru(i,a){var u=i.C,f=a.indexOf(`
`,u);return f==-1?Hr:(u=Number(a.substring(u,f)),isNaN(u)?vs:(f+=1,f+u>a.length?Hr:(a=a.slice(f,f+u),i.C=f+u,a)))}Yt.prototype.cancel=function(){this.J=!0,ce(this)};function On(i){i.S=Date.now()+i.I,Is(i,i.I)}function Is(i,a){if(i.B!=null)throw Error("WatchDog timer not null");i.B=Qe(b(i.ba,i),a)}function Kr(i){i.B&&(c.clearTimeout(i.B),i.B=null)}Yt.prototype.ba=function(){this.B=null;const i=Date.now();0<=i-this.S?(eu(this.i,this.A),this.L!=2&&(We(),Ct(17)),ce(this),this.s=2,Ye(this)):Is(this,this.S-i)};function Ye(i){i.j.G==0||i.J||Ws(i.j,i)}function ce(i){Kr(i);var a=i.M;a&&typeof a.ma=="function"&&a.ma(),i.M=null,cs(i.U),i.g&&(a=i.g,i.g=null,a.abort(),a.ma())}function Wr(i,a){try{var u=i.j;if(u.G!=0&&(u.g==i||Qr(u.h,i))){if(!i.K&&Qr(u.h,i)&&u.G==3){try{var f=u.Da.g.parse(a)}catch{f=null}if(Array.isArray(f)&&f.length==3){var A=f;if(A[0]==0){t:if(!u.u){if(u.g)if(u.g.F+3e3<i.F)zn(u),jn(u);else break t;Zr(u),Ct(18)}}else u.za=A[1],0<u.za-u.T&&37500>A[2]&&u.F&&u.v==0&&!u.C&&(u.C=Qe(b(u.Za,u),6e3));if(1>=bs(u.h)&&u.ca){try{u.ca()}catch{}u.ca=void 0}}else fe(u,11)}else if((i.K||u.g==i)&&zn(u),!B(a))for(A=u.Da.g.parse(a),a=0;a<A.length;a++){let Y=A[a];if(u.T=Y[0],Y=Y[1],u.G==2)if(Y[0]=="c"){u.K=Y[1],u.ia=Y[2];const It=Y[3];It!=null&&(u.la=It,u.j.info("VER="+u.la));const At=Y[4];At!=null&&(u.Aa=At,u.j.info("SVER="+u.Aa));const Se=Y[5];Se!=null&&typeof Se=="number"&&0<Se&&(f=1.5*Se,u.L=f,u.j.info("backChannelRequestTimeoutMs_="+f)),f=u;const Mt=i.g;if(Mt){const Hn=Mt.g?Mt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Hn){var w=f.h;w.g||Hn.indexOf("spdy")==-1&&Hn.indexOf("quic")==-1&&Hn.indexOf("h2")==-1||(w.j=w.l,w.g=new Set,w.h&&(Xr(w,w.h),w.h=null))}if(f.D){const ei=Mt.g?Mt.g.getResponseHeader("X-HTTP-Session-Id"):null;ei&&(f.ya=ei,rt(f.I,f.D,ei))}}u.G=3,u.l&&u.l.ua(),u.ba&&(u.R=Date.now()-i.F,u.j.info("Handshake RTT: "+u.R+"ms")),f=u;var k=i;if(f.qa=Ys(f,f.J?f.ia:null,f.W),k.K){Rs(f.h,k);var Z=k,mt=f.L;mt&&(Z.I=mt),Z.B&&(Kr(Z),On(Z)),f.g=k}else Gs(f);0<u.i.length&&$n(u)}else Y[0]!="stop"&&Y[0]!="close"||fe(u,7);else u.G==3&&(Y[0]=="stop"||Y[0]=="close"?Y[0]=="stop"?fe(u,7):Jr(u):Y[0]!="noop"&&u.l&&u.l.ta(Y),u.v=0)}}We(4)}catch{}}var iu=class{constructor(i,a){this.g=i,this.map=a}};function As(i){this.l=i||10,c.PerformanceNavigationTiming?(i=c.performance.getEntriesByType("navigation"),i=0<i.length&&(i[0].nextHopProtocol=="hq"||i[0].nextHopProtocol=="h2")):i=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=i?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function ws(i){return i.h?!0:i.g?i.g.size>=i.j:!1}function bs(i){return i.h?1:i.g?i.g.size:0}function Qr(i,a){return i.h?i.h==a:i.g?i.g.has(a):!1}function Xr(i,a){i.g?i.g.add(a):i.h=a}function Rs(i,a){i.h&&i.h==a?i.h=null:i.g&&i.g.has(a)&&i.g.delete(a)}As.prototype.cancel=function(){if(this.i=Ps(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const i of this.g.values())i.cancel();this.g.clear()}};function Ps(i){if(i.h!=null)return i.i.concat(i.h.D);if(i.g!=null&&i.g.size!==0){let a=i.i;for(const u of i.g.values())a=a.concat(u.D);return a}return F(i.i)}function su(i){if(i.V&&typeof i.V=="function")return i.V();if(typeof Map<"u"&&i instanceof Map||typeof Set<"u"&&i instanceof Set)return Array.from(i.values());if(typeof i=="string")return i.split("");if(h(i)){for(var a=[],u=i.length,f=0;f<u;f++)a.push(i[f]);return a}a=[],u=0;for(f in i)a[u++]=i[f];return a}function ou(i){if(i.na&&typeof i.na=="function")return i.na();if(!i.V||typeof i.V!="function"){if(typeof Map<"u"&&i instanceof Map)return Array.from(i.keys());if(!(typeof Set<"u"&&i instanceof Set)){if(h(i)||typeof i=="string"){var a=[];i=i.length;for(var u=0;u<i;u++)a.push(u);return a}a=[],u=0;for(const f in i)a[u++]=f;return a}}}function Ss(i,a){if(i.forEach&&typeof i.forEach=="function")i.forEach(a,void 0);else if(h(i)||typeof i=="string")Array.prototype.forEach.call(i,a,void 0);else for(var u=ou(i),f=su(i),A=f.length,w=0;w<A;w++)a.call(void 0,f[w],u&&u[w],i)}var Cs=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function au(i,a){if(i){i=i.split("&");for(var u=0;u<i.length;u++){var f=i[u].indexOf("="),A=null;if(0<=f){var w=i[u].substring(0,f);A=i[u].substring(f+1)}else w=i[u];a(w,A?decodeURIComponent(A.replace(/\+/g," ")):"")}}}function he(i){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,i instanceof he){this.h=i.h,Mn(this,i.j),this.o=i.o,this.g=i.g,Ln(this,i.s),this.l=i.l;var a=i.i,u=new tn;u.i=a.i,a.g&&(u.g=new Map(a.g),u.h=a.h),Vs(this,u),this.m=i.m}else i&&(a=String(i).match(Cs))?(this.h=!1,Mn(this,a[1]||"",!0),this.o=Je(a[2]||""),this.g=Je(a[3]||"",!0),Ln(this,a[4]),this.l=Je(a[5]||"",!0),Vs(this,a[6]||"",!0),this.m=Je(a[7]||"")):(this.h=!1,this.i=new tn(null,this.h))}he.prototype.toString=function(){var i=[],a=this.j;a&&i.push(Ze(a,Ds,!0),":");var u=this.g;return(u||a=="file")&&(i.push("//"),(a=this.o)&&i.push(Ze(a,Ds,!0),"@"),i.push(encodeURIComponent(String(u)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u=this.s,u!=null&&i.push(":",String(u))),(u=this.l)&&(this.g&&u.charAt(0)!="/"&&i.push("/"),i.push(Ze(u,u.charAt(0)=="/"?cu:uu,!0))),(u=this.i.toString())&&i.push("?",u),(u=this.m)&&i.push("#",Ze(u,fu)),i.join("")};function Ht(i){return new he(i)}function Mn(i,a,u){i.j=u?Je(a,!0):a,i.j&&(i.j=i.j.replace(/:$/,""))}function Ln(i,a){if(a){if(a=Number(a),isNaN(a)||0>a)throw Error("Bad port number "+a);i.s=a}else i.s=null}function Vs(i,a,u){a instanceof tn?(i.i=a,du(i.i,i.h)):(u||(a=Ze(a,hu)),i.i=new tn(a,i.h))}function rt(i,a,u){i.i.set(a,u)}function Fn(i){return rt(i,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),i}function Je(i,a){return i?a?decodeURI(i.replace(/%25/g,"%2525")):decodeURIComponent(i):""}function Ze(i,a,u){return typeof i=="string"?(i=encodeURI(i).replace(a,lu),u&&(i=i.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i):null}function lu(i){return i=i.charCodeAt(0),"%"+(i>>4&15).toString(16)+(i&15).toString(16)}var Ds=/[#\/\?@]/g,uu=/[#\?:]/g,cu=/[#\?]/g,hu=/[#\?@]/g,fu=/#/g;function tn(i,a){this.h=this.g=null,this.i=i||null,this.j=!!a}function Jt(i){i.g||(i.g=new Map,i.h=0,i.i&&au(i.i,function(a,u){i.add(decodeURIComponent(a.replace(/\+/g," ")),u)}))}n=tn.prototype,n.add=function(i,a){Jt(this),this.i=null,i=Re(this,i);var u=this.g.get(i);return u||this.g.set(i,u=[]),u.push(a),this.h+=1,this};function ks(i,a){Jt(i),a=Re(i,a),i.g.has(a)&&(i.i=null,i.h-=i.g.get(a).length,i.g.delete(a))}function Ns(i,a){return Jt(i),a=Re(i,a),i.g.has(a)}n.forEach=function(i,a){Jt(this),this.g.forEach(function(u,f){u.forEach(function(A){i.call(a,A,f,this)},this)},this)},n.na=function(){Jt(this);const i=Array.from(this.g.values()),a=Array.from(this.g.keys()),u=[];for(let f=0;f<a.length;f++){const A=i[f];for(let w=0;w<A.length;w++)u.push(a[f])}return u},n.V=function(i){Jt(this);let a=[];if(typeof i=="string")Ns(this,i)&&(a=a.concat(this.g.get(Re(this,i))));else{i=Array.from(this.g.values());for(let u=0;u<i.length;u++)a=a.concat(i[u])}return a},n.set=function(i,a){return Jt(this),this.i=null,i=Re(this,i),Ns(this,i)&&(this.h-=this.g.get(i).length),this.g.set(i,[a]),this.h+=1,this},n.get=function(i,a){return i?(i=this.V(i),0<i.length?String(i[0]):a):a};function Os(i,a,u){ks(i,a),0<u.length&&(i.i=null,i.g.set(Re(i,a),F(u)),i.h+=u.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const i=[],a=Array.from(this.g.keys());for(var u=0;u<a.length;u++){var f=a[u];const w=encodeURIComponent(String(f)),k=this.V(f);for(f=0;f<k.length;f++){var A=w;k[f]!==""&&(A+="="+encodeURIComponent(String(k[f]))),i.push(A)}}return this.i=i.join("&")};function Re(i,a){return a=String(a),i.j&&(a=a.toLowerCase()),a}function du(i,a){a&&!i.j&&(Jt(i),i.i=null,i.g.forEach(function(u,f){var A=f.toLowerCase();f!=A&&(ks(this,f),Os(this,A,u))},i)),i.j=a}function pu(i,a){const u=new Xe;if(c.Image){const f=new Image;f.onload=S(Zt,u,"TestLoadImage: loaded",!0,a,f),f.onerror=S(Zt,u,"TestLoadImage: error",!1,a,f),f.onabort=S(Zt,u,"TestLoadImage: abort",!1,a,f),f.ontimeout=S(Zt,u,"TestLoadImage: timeout",!1,a,f),c.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=i}else a(!1)}function mu(i,a){const u=new Xe,f=new AbortController,A=setTimeout(()=>{f.abort(),Zt(u,"TestPingServer: timeout",!1,a)},1e4);fetch(i,{signal:f.signal}).then(w=>{clearTimeout(A),w.ok?Zt(u,"TestPingServer: ok",!0,a):Zt(u,"TestPingServer: server error",!1,a)}).catch(()=>{clearTimeout(A),Zt(u,"TestPingServer: error",!1,a)})}function Zt(i,a,u,f,A){try{A&&(A.onload=null,A.onerror=null,A.onabort=null,A.ontimeout=null),f(u)}catch{}}function gu(){this.g=new Jl}function _u(i,a,u){const f=u||"";try{Ss(i,function(A,w){let k=A;d(A)&&(k=Br(A)),a.push(f+w+"="+encodeURIComponent(k))})}catch(A){throw a.push(f+"type="+encodeURIComponent("_badmap")),A}}function Un(i){this.l=i.Ub||null,this.j=i.eb||!1}C(Un,jr),Un.prototype.g=function(){return new xn(this.l,this.j)},Un.prototype.i=function(i){return function(){return i}}({});function xn(i,a){Tt.call(this),this.D=i,this.o=a,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}C(xn,Tt),n=xn.prototype,n.open=function(i,a){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=i,this.A=a,this.readyState=1,nn(this)},n.send=function(i){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const a={headers:this.u,method:this.B,credentials:this.m,cache:void 0};i&&(a.body=i),(this.D||c).fetch(new Request(this.A,a)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,en(this)),this.readyState=0},n.Sa=function(i){if(this.g&&(this.l=i,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=i.headers,this.readyState=2,nn(this)),this.g&&(this.readyState=3,nn(this),this.g)))if(this.responseType==="arraybuffer")i.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in i){if(this.j=i.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Ms(this)}else i.text().then(this.Ra.bind(this),this.ga.bind(this))};function Ms(i){i.j.read().then(i.Pa.bind(i)).catch(i.ga.bind(i))}n.Pa=function(i){if(this.g){if(this.o&&i.value)this.response.push(i.value);else if(!this.o){var a=i.value?i.value:new Uint8Array(0);(a=this.v.decode(a,{stream:!i.done}))&&(this.response=this.responseText+=a)}i.done?en(this):nn(this),this.readyState==3&&Ms(this)}},n.Ra=function(i){this.g&&(this.response=this.responseText=i,en(this))},n.Qa=function(i){this.g&&(this.response=i,en(this))},n.ga=function(){this.g&&en(this)};function en(i){i.readyState=4,i.l=null,i.j=null,i.v=null,nn(i)}n.setRequestHeader=function(i,a){this.u.append(i,a)},n.getResponseHeader=function(i){return this.h&&this.h.get(i.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const i=[],a=this.h.entries();for(var u=a.next();!u.done;)u=u.value,i.push(u[0]+": "+u[1]),u=a.next();return i.join(`\r
`)};function nn(i){i.onreadystatechange&&i.onreadystatechange.call(i)}Object.defineProperty(xn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(i){this.m=i?"include":"same-origin"}});function Ls(i){let a="";return z(i,function(u,f){a+=f,a+=":",a+=u,a+=`\r
`}),a}function Yr(i,a,u){t:{for(f in u){var f=!1;break t}f=!0}f||(u=Ls(u),typeof i=="string"?u!=null&&encodeURIComponent(String(u)):rt(i,a,u))}function st(i){Tt.call(this),this.headers=new Map,this.o=i||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}C(st,Tt);var yu=/^https?$/i,vu=["POST","PUT"];n=st.prototype,n.Ha=function(i){this.J=i},n.ea=function(i,a,u,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+i);a=a?a.toUpperCase():"GET",this.D=i,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():qr.g(),this.v=this.o?hs(this.o):hs(qr),this.g.onreadystatechange=b(this.Ea,this);try{this.B=!0,this.g.open(a,String(i),!0),this.B=!1}catch(w){Fs(this,w);return}if(i=u||"",u=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var A in f)u.set(A,f[A]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const w of f.keys())u.set(w,f.get(w));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(u.keys()).find(w=>w.toLowerCase()=="content-type"),A=c.FormData&&i instanceof c.FormData,!(0<=Array.prototype.indexOf.call(vu,a,void 0))||f||A||u.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[w,k]of u)this.g.setRequestHeader(w,k);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Bs(this),this.u=!0,this.g.send(i),this.u=!1}catch(w){Fs(this,w)}};function Fs(i,a){i.h=!1,i.g&&(i.j=!0,i.g.abort(),i.j=!1),i.l=a,i.m=5,Us(i),Bn(i)}function Us(i){i.A||(i.A=!0,St(i,"complete"),St(i,"error"))}n.abort=function(i){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=i||7,St(this,"complete"),St(this,"abort"),Bn(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Bn(this,!0)),st.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?xs(this):this.bb())},n.bb=function(){xs(this)};function xs(i){if(i.h&&typeof l<"u"&&(!i.v[1]||Gt(i)!=4||i.Z()!=2)){if(i.u&&Gt(i)==4)as(i.Ea,0,i);else if(St(i,"readystatechange"),Gt(i)==4){i.h=!1;try{const k=i.Z();t:switch(k){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var a=!0;break t;default:a=!1}var u;if(!(u=a)){var f;if(f=k===0){var A=String(i.D).match(Cs)[1]||null;!A&&c.self&&c.self.location&&(A=c.self.location.protocol.slice(0,-1)),f=!yu.test(A?A.toLowerCase():"")}u=f}if(u)St(i,"complete"),St(i,"success");else{i.m=6;try{var w=2<Gt(i)?i.g.statusText:""}catch{w=""}i.l=w+" ["+i.Z()+"]",Us(i)}}finally{Bn(i)}}}}function Bn(i,a){if(i.g){Bs(i);const u=i.g,f=i.v[0]?()=>{}:null;i.g=null,i.v=null,a||St(i,"ready");try{u.onreadystatechange=f}catch{}}}function Bs(i){i.I&&(c.clearTimeout(i.I),i.I=null)}n.isActive=function(){return!!this.g};function Gt(i){return i.g?i.g.readyState:0}n.Z=function(){try{return 2<Gt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(i){if(this.g){var a=this.g.responseText;return i&&a.indexOf(i)==0&&(a=a.substring(i.length)),Yl(a)}};function js(i){try{if(!i.g)return null;if("response"in i.g)return i.g.response;switch(i.H){case"":case"text":return i.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in i.g)return i.g.mozResponseArrayBuffer}return null}catch{return null}}function Eu(i){const a={};i=(i.g&&2<=Gt(i)&&i.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<i.length;f++){if(B(i[f]))continue;var u=v(i[f]);const A=u[0];if(u=u[1],typeof u!="string")continue;u=u.trim();const w=a[A]||[];a[A]=w,w.push(u)}E(a,function(f){return f.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function rn(i,a,u){return u&&u.internalChannelParams&&u.internalChannelParams[i]||a}function $s(i){this.Aa=0,this.i=[],this.j=new Xe,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=rn("failFast",!1,i),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=rn("baseRetryDelayMs",5e3,i),this.cb=rn("retryDelaySeedMs",1e4,i),this.Wa=rn("forwardChannelMaxRetries",2,i),this.wa=rn("forwardChannelRequestTimeoutMs",2e4,i),this.pa=i&&i.xmlHttpFactory||void 0,this.Xa=i&&i.Tb||void 0,this.Ca=i&&i.useFetchStreams||!1,this.L=void 0,this.J=i&&i.supportsCrossDomainXhr||!1,this.K="",this.h=new As(i&&i.concurrentRequestLimit),this.Da=new gu,this.P=i&&i.fastHandshake||!1,this.O=i&&i.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=i&&i.Rb||!1,i&&i.xa&&this.j.xa(),i&&i.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&i&&i.detectBufferingProxy||!1,this.ja=void 0,i&&i.longPollingTimeout&&0<i.longPollingTimeout&&(this.ja=i.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=$s.prototype,n.la=8,n.G=1,n.connect=function(i,a,u,f){Ct(0),this.W=i,this.H=a||{},u&&f!==void 0&&(this.H.OSID=u,this.H.OAID=f),this.F=this.X,this.I=Ys(this,null,this.W),$n(this)};function Jr(i){if(zs(i),i.G==3){var a=i.U++,u=Ht(i.I);if(rt(u,"SID",i.K),rt(u,"RID",a),rt(u,"TYPE","terminate"),sn(i,u),a=new Yt(i,i.j,a),a.L=2,a.v=Fn(Ht(u)),u=!1,c.navigator&&c.navigator.sendBeacon)try{u=c.navigator.sendBeacon(a.v.toString(),"")}catch{}!u&&c.Image&&(new Image().src=a.v,u=!0),u||(a.g=Js(a.j,null),a.g.ea(a.v)),a.F=Date.now(),On(a)}Xs(i)}function jn(i){i.g&&(ti(i),i.g.cancel(),i.g=null)}function zs(i){jn(i),i.u&&(c.clearTimeout(i.u),i.u=null),zn(i),i.h.cancel(),i.s&&(typeof i.s=="number"&&c.clearTimeout(i.s),i.s=null)}function $n(i){if(!ws(i.h)&&!i.s){i.s=!0;var a=i.Ga;zt||pt(),qt||(zt(),qt=!0),we.add(a,i),i.B=0}}function Tu(i,a){return bs(i.h)>=i.h.j-(i.s?1:0)?!1:i.s?(i.i=a.D.concat(i.i),!0):i.G==1||i.G==2||i.B>=(i.Va?0:i.Wa)?!1:(i.s=Qe(b(i.Ga,i,a),Qs(i,i.B)),i.B++,!0)}n.Ga=function(i){if(this.s)if(this.s=null,this.G==1){if(!i){this.U=Math.floor(1e5*Math.random()),i=this.U++;const A=new Yt(this,this.j,i);let w=this.o;if(this.S&&(w?(w=g(w),_(w,this.S)):w=this.S),this.m!==null||this.O||(A.H=w,w=null),this.P)t:{for(var a=0,u=0;u<this.i.length;u++){e:{var f=this.i[u];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break e}f=void 0}if(f===void 0)break;if(a+=f,4096<a){a=u;break t}if(a===4096||u===this.i.length-1){a=u+1;break t}}a=1e3}else a=1e3;a=Hs(this,A,a),u=Ht(this.I),rt(u,"RID",i),rt(u,"CVER",22),this.D&&rt(u,"X-HTTP-Session-Id",this.D),sn(this,u),w&&(this.O?a="headers="+encodeURIComponent(String(Ls(w)))+"&"+a:this.m&&Yr(u,this.m,w)),Xr(this.h,A),this.Ua&&rt(u,"TYPE","init"),this.P?(rt(u,"$req",a),rt(u,"SID","null"),A.T=!0,Gr(A,u,null)):Gr(A,u,a),this.G=2}}else this.G==3&&(i?qs(this,i):this.i.length==0||ws(this.h)||qs(this))};function qs(i,a){var u;a?u=a.l:u=i.U++;const f=Ht(i.I);rt(f,"SID",i.K),rt(f,"RID",u),rt(f,"AID",i.T),sn(i,f),i.m&&i.o&&Yr(f,i.m,i.o),u=new Yt(i,i.j,u,i.B+1),i.m===null&&(u.H=i.o),a&&(i.i=a.D.concat(i.i)),a=Hs(i,u,1e3),u.I=Math.round(.5*i.wa)+Math.round(.5*i.wa*Math.random()),Xr(i.h,u),Gr(u,f,a)}function sn(i,a){i.H&&z(i.H,function(u,f){rt(a,f,u)}),i.l&&Ss({},function(u,f){rt(a,f,u)})}function Hs(i,a,u){u=Math.min(i.i.length,u);var f=i.l?b(i.l.Na,i.l,i):null;t:{var A=i.i;let w=-1;for(;;){const k=["count="+u];w==-1?0<u?(w=A[0].g,k.push("ofs="+w)):w=0:k.push("ofs="+w);let Z=!0;for(let mt=0;mt<u;mt++){let Y=A[mt].g;const It=A[mt].map;if(Y-=w,0>Y)w=Math.max(0,A[mt].g-100),Z=!1;else try{_u(It,k,"req"+Y+"_")}catch{f&&f(It)}}if(Z){f=k.join("&");break t}}}return i=i.i.splice(0,u),a.D=i,f}function Gs(i){if(!i.g&&!i.u){i.Y=1;var a=i.Fa;zt||pt(),qt||(zt(),qt=!0),we.add(a,i),i.v=0}}function Zr(i){return i.g||i.u||3<=i.v?!1:(i.Y++,i.u=Qe(b(i.Fa,i),Qs(i,i.v)),i.v++,!0)}n.Fa=function(){if(this.u=null,Ks(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var i=2*this.R;this.j.info("BP detection timer enabled: "+i),this.A=Qe(b(this.ab,this),i)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ct(10),jn(this),Ks(this))};function ti(i){i.A!=null&&(c.clearTimeout(i.A),i.A=null)}function Ks(i){i.g=new Yt(i,i.j,"rpc",i.Y),i.m===null&&(i.g.H=i.o),i.g.O=0;var a=Ht(i.qa);rt(a,"RID","rpc"),rt(a,"SID",i.K),rt(a,"AID",i.T),rt(a,"CI",i.F?"0":"1"),!i.F&&i.ja&&rt(a,"TO",i.ja),rt(a,"TYPE","xmlhttp"),sn(i,a),i.m&&i.o&&Yr(a,i.m,i.o),i.L&&(i.g.I=i.L);var u=i.g;i=i.ia,u.L=1,u.v=Fn(Ht(a)),u.m=null,u.P=!0,Es(u,i)}n.Za=function(){this.C!=null&&(this.C=null,jn(this),Zr(this),Ct(19))};function zn(i){i.C!=null&&(c.clearTimeout(i.C),i.C=null)}function Ws(i,a){var u=null;if(i.g==a){zn(i),ti(i),i.g=null;var f=2}else if(Qr(i.h,a))u=a.D,Rs(i.h,a),f=1;else return;if(i.G!=0){if(a.o)if(f==1){u=a.m?a.m.length:0,a=Date.now()-a.F;var A=i.B;f=Dn(),St(f,new gs(f,u)),$n(i)}else Gs(i);else if(A=a.s,A==3||A==0&&0<a.X||!(f==1&&Tu(i,a)||f==2&&Zr(i)))switch(u&&0<u.length&&(a=i.h,a.i=a.i.concat(u)),A){case 1:fe(i,5);break;case 4:fe(i,10);break;case 3:fe(i,6);break;default:fe(i,2)}}}function Qs(i,a){let u=i.Ta+Math.floor(Math.random()*i.cb);return i.isActive()||(u*=2),u*a}function fe(i,a){if(i.j.info("Error code "+a),a==2){var u=b(i.fb,i),f=i.Xa;const A=!f;f=new he(f||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Mn(f,"https"),Fn(f),A?pu(f.toString(),u):mu(f.toString(),u)}else Ct(2);i.G=0,i.l&&i.l.sa(a),Xs(i),zs(i)}n.fb=function(i){i?(this.j.info("Successfully pinged google.com"),Ct(2)):(this.j.info("Failed to ping google.com"),Ct(1))};function Xs(i){if(i.G=0,i.ka=[],i.l){const a=Ps(i.h);(a.length!=0||i.i.length!=0)&&(N(i.ka,a),N(i.ka,i.i),i.h.i.length=0,F(i.i),i.i.length=0),i.l.ra()}}function Ys(i,a,u){var f=u instanceof he?Ht(u):new he(u);if(f.g!="")a&&(f.g=a+"."+f.g),Ln(f,f.s);else{var A=c.location;f=A.protocol,a=a?a+"."+A.hostname:A.hostname,A=+A.port;var w=new he(null);f&&Mn(w,f),a&&(w.g=a),A&&Ln(w,A),u&&(w.l=u),f=w}return u=i.D,a=i.ya,u&&a&&rt(f,u,a),rt(f,"VER",i.la),sn(i,f),f}function Js(i,a,u){if(a&&!i.J)throw Error("Can't create secondary domain capable XhrIo object.");return a=i.Ca&&!i.pa?new st(new Un({eb:u})):new st(i.pa),a.Ha(i.J),a}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Zs(){}n=Zs.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function qn(){}qn.prototype.g=function(i,a){return new kt(i,a)};function kt(i,a){Tt.call(this),this.g=new $s(a),this.l=i,this.h=a&&a.messageUrlParams||null,i=a&&a.messageHeaders||null,a&&a.clientProtocolHeaderRequired&&(i?i["X-Client-Protocol"]="webchannel":i={"X-Client-Protocol":"webchannel"}),this.g.o=i,i=a&&a.initMessageHeaders||null,a&&a.messageContentType&&(i?i["X-WebChannel-Content-Type"]=a.messageContentType:i={"X-WebChannel-Content-Type":a.messageContentType}),a&&a.va&&(i?i["X-WebChannel-Client-Profile"]=a.va:i={"X-WebChannel-Client-Profile":a.va}),this.g.S=i,(i=a&&a.Sb)&&!B(i)&&(this.g.m=i),this.v=a&&a.supportsCrossDomainXhr||!1,this.u=a&&a.sendRawJson||!1,(a=a&&a.httpSessionIdParam)&&!B(a)&&(this.g.D=a,i=this.h,i!==null&&a in i&&(i=this.h,a in i&&delete i[a])),this.j=new Pe(this)}C(kt,Tt),kt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},kt.prototype.close=function(){Jr(this.g)},kt.prototype.o=function(i){var a=this.g;if(typeof i=="string"){var u={};u.__data__=i,i=u}else this.u&&(u={},u.__data__=Br(i),i=u);a.i.push(new iu(a.Ya++,i)),a.G==3&&$n(a)},kt.prototype.N=function(){this.g.l=null,delete this.j,Jr(this.g),delete this.g,kt.aa.N.call(this)};function to(i){$r.call(this),i.__headers__&&(this.headers=i.__headers__,this.statusCode=i.__status__,delete i.__headers__,delete i.__status__);var a=i.__sm__;if(a){t:{for(const u in a){i=u;break t}i=void 0}(this.i=i)&&(i=this.i,a=a!==null&&i in a?a[i]:void 0),this.data=a}else this.data=i}C(to,$r);function eo(){zr.call(this),this.status=1}C(eo,zr);function Pe(i){this.g=i}C(Pe,Zs),Pe.prototype.ua=function(){St(this.g,"a")},Pe.prototype.ta=function(i){St(this.g,new to(i))},Pe.prototype.sa=function(i){St(this.g,new eo)},Pe.prototype.ra=function(){St(this.g,"b")},qn.prototype.createWebChannel=qn.prototype.g,kt.prototype.send=kt.prototype.o,kt.prototype.open=kt.prototype.m,kt.prototype.close=kt.prototype.close,xa=function(){return new qn},Ua=function(){return Dn()},Fa=ue,Ti={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},kn.NO_ERROR=0,kn.TIMEOUT=8,kn.HTTP_ERROR=6,Jn=kn,_s.COMPLETE="complete",La=_s,fs.EventType=Ke,Ke.OPEN="a",Ke.CLOSE="b",Ke.ERROR="c",Ke.MESSAGE="d",Tt.prototype.listen=Tt.prototype.K,an=fs,st.prototype.listenOnce=st.prototype.L,st.prototype.getLastError=st.prototype.Ka,st.prototype.getLastErrorCode=st.prototype.Ba,st.prototype.getStatus=st.prototype.Z,st.prototype.getResponseJson=st.prototype.Oa,st.prototype.getResponseText=st.prototype.oa,st.prototype.send=st.prototype.ea,st.prototype.setWithCredentials=st.prototype.Ha,Ma=st}).apply(typeof Gn<"u"?Gn:typeof self<"u"?self:typeof window<"u"?window:{});const Do="@firebase/firestore",ko="4.7.10";/**
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
 */class bt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}bt.UNAUTHENTICATED=new bt(null),bt.GOOGLE_CREDENTIALS=new bt("google-credentials-uid"),bt.FIRST_PARTY=new bt("first-party-uid"),bt.MOCK_USER=new bt("mock-user");/**
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
 */let ze="11.5.0";/**
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
 */const ye=new Ca("@firebase/firestore");function ke(){return ye.logLevel}function U(n,...t){if(ye.logLevel<=W.DEBUG){const e=t.map(Fi);ye.debug(`Firestore (${ze}): ${n}`,...e)}}function ve(n,...t){if(ye.logLevel<=W.ERROR){const e=t.map(Fi);ye.error(`Firestore (${ze}): ${n}`,...e)}}function wr(n,...t){if(ye.logLevel<=W.WARN){const e=t.map(Fi);ye.warn(`Firestore (${ze}): ${n}`,...e)}}function Fi(n){if(typeof n=="string")return n;try{/**
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
 */function G(n="Unexpected state"){const t=`FIRESTORE (${ze}) INTERNAL ASSERTION FAILED: `+n;throw ve(t),new Error(t)}function lt(n,t){n||G()}function nt(n,t){return n}/**
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
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class $ extends $e{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class me{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
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
 */class Ba{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class wh{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(bt.UNAUTHENTICATED))}shutdown(){}}class bh{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class Rh{constructor(t){this.t=t,this.currentUser=bt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){lt(this.o===void 0);let r=this.i;const s=h=>this.i!==r?(r=this.i,e(h)):Promise.resolve();let o=new me;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new me,t.enqueueRetryable(()=>s(this.currentUser))};const l=()=>{const h=o;t.enqueueRetryable(async()=>{await h.promise,await s(this.currentUser)})},c=h=>{U("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),l())};this.t.onInit(h=>c(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?c(h):(U("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new me)}},0),l()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(r=>this.i!==t?(U("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(lt(typeof r.accessToken=="string"),new Ba(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return lt(t===null||typeof t=="string"),new bt(t)}}class Ph{constructor(t,e,r){this.l=t,this.h=e,this.P=r,this.type="FirstParty",this.user=bt.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.T.set("Authorization",t),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class Sh{constructor(t,e,r){this.l=t,this.h=e,this.P=r}getToken(){return Promise.resolve(new Ph(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(bt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class No{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Ch{constructor(t,e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,uh(t)&&t.settings.appCheckToken&&(this.V=t.settings.appCheckToken)}start(t,e){lt(this.o===void 0);const r=o=>{o.error!=null&&U("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const l=o.token!==this.R;return this.R=o.token,U("FirebaseAppCheckTokenProvider",`Received ${l?"new":"existing"} token.`),l?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>r(o))};const s=o=>{U("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>s(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?s(o):U("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new No(this.V));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(lt(typeof e.token=="string"),this.R=e.token,new No(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function Vh(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
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
 */function Dh(){return new TextEncoder}/**
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
 */class ja{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=Vh(40);for(let o=0;o<s.length;++o)r.length<20&&s[o]<e&&(r+=t.charAt(s[o]%62))}return r}}function X(n,t){return n<t?-1:n>t?1:0}function Ii(n,t){let e=0;for(;e<n.length&&e<t.length;){const r=n.codePointAt(e),s=t.codePointAt(e);if(r!==s){if(r<128&&s<128)return X(r,s);{const o=Dh(),l=kh(o.encode(Oo(n,e)),o.encode(Oo(t,e)));return l!==0?l:X(r,s)}}e+=r>65535?2:1}return X(n.length,t.length)}function Oo(n,t){return n.codePointAt(t)>65535?n.substring(t,t+2):n.substring(t,t+1)}function kh(n,t){for(let e=0;e<n.length&&e<t.length;++e)if(n[e]!==t[e])return X(n[e],t[e]);return X(n.length,t.length)}function Fe(n,t,e){return n.length===t.length&&n.every((r,s)=>e(r,t[s]))}/**
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
 */const Mo=-62135596800,Lo=1e6;class dt{static now(){return dt.fromMillis(Date.now())}static fromDate(t){return dt.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor((t-1e3*e)*Lo);return new dt(e,r)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new $(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new $(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<Mo)throw new $(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new $(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Lo}_compareTo(t){return this.seconds===t.seconds?X(this.nanoseconds,t.nanoseconds):X(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds-Mo;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class it{static fromTimestamp(t){return new it(t)}static min(){return new it(new dt(0,0))}static max(){return new it(new dt(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Fo="__name__";class xt{constructor(t,e,r){e===void 0?e=0:e>t.length&&G(),r===void 0?r=t.length-e:r>t.length-e&&G(),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return xt.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof xt?t.forEach(r=>{e.push(r)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let s=0;s<r;s++){const o=xt.compareSegments(t.get(s),e.get(s));if(o!==0)return o}return X(t.length,e.length)}static compareSegments(t,e){const r=xt.isNumericId(t),s=xt.isNumericId(e);return r&&!s?-1:!r&&s?1:r&&s?xt.extractNumericId(t).compare(xt.extractNumericId(e)):Ii(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return Li.fromString(t.substring(4,t.length-2))}}class at extends xt{construct(t,e,r){return new at(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new $(V.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter(s=>s.length>0))}return new at(e)}static emptyPath(){return new at([])}}const Nh=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class yt extends xt{construct(t,e,r){return new yt(t,e,r)}static isValidIdentifier(t){return Nh.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),yt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Fo}static keyField(){return new yt([Fo])}static fromServerFormat(t){const e=[];let r="",s=0;const o=()=>{if(r.length===0)throw new $(V.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let l=!1;for(;s<t.length;){const c=t[s];if(c==="\\"){if(s+1===t.length)throw new $(V.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const h=t[s+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new $(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=h,s+=2}else c==="`"?(l=!l,s++):c!=="."||l?(r+=c,s++):(o(),s++)}if(o(),l)throw new $(V.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new yt(e)}static emptyPath(){return new yt([])}}/**
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
 */const _n=-1;function Oh(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=it.fromTimestamp(r===1e9?new dt(e+1,0):new dt(e,r));return new se(s,q.empty(),t)}function Mh(n){return new se(n.readTime,n.key,_n)}class se{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new se(it.min(),q.empty(),_n)}static max(){return new se(it.max(),q.empty(),_n)}}function Lh(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=q.comparator(n.documentKey,t.documentKey),e!==0?e:X(n.largestBatchId,t.largestBatchId))}/**
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
 */const Fh="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Uh{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function Ui(n){if(n.code!==V.FAILED_PRECONDITION||n.message!==Fh)throw n;U("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class R{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&G(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new R((r,s)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(r,s)},this.catchCallback=o=>{this.wrapFailure(e,o).next(r,s)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof R?e:R.resolve(e)}catch(e){return R.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):R.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):R.reject(e)}static resolve(t){return new R((e,r)=>{e(t)})}static reject(t){return new R((e,r)=>{r(t)})}static waitFor(t){return new R((e,r)=>{let s=0,o=0,l=!1;t.forEach(c=>{++s,c.next(()=>{++o,l&&o===s&&e()},h=>r(h))}),l=!0,o===s&&e()})}static or(t){let e=R.resolve(!1);for(const r of t)e=e.next(s=>s?R.resolve(s):r());return e}static forEach(t,e){const r=[];return t.forEach((s,o)=>{r.push(e.call(this,s,o))}),this.waitFor(r)}static mapArray(t,e){return new R((r,s)=>{const o=t.length,l=new Array(o);let c=0;for(let h=0;h<o;h++){const d=h;e(t[d]).next(y=>{l[d]=y,++c,c===o&&r(l)},y=>s(y))}})}static doWhile(t,e){return new R((r,s)=>{const o=()=>{t()===!0?e().next(()=>{o()},s):r()};o()})}}function xh(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function In(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class xi{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.oe(r),this._e=r=>e.writeSequenceNumber(r))}oe(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this._e&&this._e(t),t}}xi.ae=-1;/**
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
 */const Bi=-1;function ji(n){return n==null}function ur(n){return n===0&&1/n==-1/0}function Bh(n){return typeof n=="number"&&Number.isInteger(n)&&!ur(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const $a="";function jh(n){let t="";for(let e=0;e<n.length;e++)t.length>0&&(t=Uo(t)),t=$h(n.get(e),t);return Uo(t)}function $h(n,t){let e=t;const r=n.length;for(let s=0;s<r;s++){const o=n.charAt(s);switch(o){case"\0":e+="";break;case $a:e+="";break;default:e+=o}}return e}function Uo(n){return n+$a+""}/**
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
 */function xo(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function qe(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function za(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
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
 */class Dt{constructor(t,e){this.comparator=t,this.root=e||gt.EMPTY}insert(t,e){return new Dt(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,gt.BLACK,null,null))}remove(t){return new Dt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,gt.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(t,r.key);if(s===0)return e+r.left.size;s<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,r)=>(t(e,r),!1))}toString(){const t=[];return this.inorderTraversal((e,r)=>(t.push(`${e}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Kn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Kn(this.root,t,this.comparator,!1)}getReverseIterator(){return new Kn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Kn(this.root,t,this.comparator,!0)}}class Kn{constructor(t,e,r,s){this.isReverse=s,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?r(t.key,e):1,e&&s&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class gt{constructor(t,e,r,s,o){this.key=t,this.value=e,this.color=r??gt.RED,this.left=s??gt.EMPTY,this.right=o??gt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,s,o){return new gt(t??this.key,e??this.value,r??this.color,s??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let s=this;const o=r(t,s.key);return s=o<0?s.copy(null,null,null,s.left.insert(t,e,r),null):o===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return gt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return gt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,gt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,gt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw G();const t=this.left.check();if(t!==this.right.check())throw G();return t+(this.isRed()?0:1)}}gt.EMPTY=null,gt.RED=!0,gt.BLACK=!1;gt.EMPTY=new class{constructor(){this.size=0}get key(){throw G()}get value(){throw G()}get color(){throw G()}get left(){throw G()}get right(){throw G()}copy(t,e,r,s,o){return this}insert(t,e,r){return new gt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class vt{constructor(t){this.comparator=t,this.data=new Dt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,r)=>(t(e),!1))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Bo(this.data.getIterator())}getIteratorFrom(t){return new Bo(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(r=>{e=e.add(r)}),e}isEqual(t){if(!(t instanceof vt)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=r.getNext().key;if(this.comparator(s,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new vt(this.comparator);return e.data=t,e}}class Bo{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Ut{constructor(t){this.fields=t,t.sort(yt.comparator)}static empty(){return new Ut([])}unionWith(t){let e=new vt(yt.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new Ut(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Fe(this.fields,t.fields,(e,r)=>e.isEqual(r))}}/**
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
 */class zh extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Bt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(s){try{return atob(s)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new zh("Invalid base64 string: "+o):o}}(t);return new Bt(e)}static fromUint8Array(t){const e=function(s){let o="";for(let l=0;l<s.length;++l)o+=String.fromCharCode(s[l]);return o}(t);return new Bt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const r=new Uint8Array(e.length);for(let s=0;s<e.length;s++)r[s]=e.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return X(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Bt.EMPTY_BYTE_STRING=new Bt("");const qh=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ee(n){if(lt(!!n),typeof n=="string"){let t=0;const e=qh.exec(n);if(lt(!!e),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:_t(n.seconds),nanos:_t(n.nanos)}}function _t(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Ue(n){return typeof n=="string"?Bt.fromBase64String(n):Bt.fromUint8Array(n)}/**
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
 */const qa="server_timestamp",Ha="__type__",Ga="__previous_value__",Ka="__local_write_time__";function $i(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{})[Ha])===null||e===void 0?void 0:e.stringValue)===qa}function zi(n){const t=n.mapValue.fields[Ga];return $i(t)?zi(t):t}function cr(n){const t=Ee(n.mapValue.fields[Ka].timestampValue);return new dt(t.seconds,t.nanos)}/**
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
 */class Hh{constructor(t,e,r,s,o,l,c,h,d){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=s,this.ssl=o,this.forceLongPolling=l,this.autoDetectLongPolling=c,this.longPollingOptions=h,this.useFetchStreams=d}}const hr="(default)";class fr{constructor(t,e){this.projectId=t,this.database=e||hr}static empty(){return new fr("","")}get isDefaultDatabase(){return this.database===hr}isEqual(t){return t instanceof fr&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const Wa="__type__",Gh="__max__",Wn={mapValue:{}},Qa="__vector__",Ai="value";function Te(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?$i(n)?4:Wh(n)?9007199254740991:Kh(n)?10:11:G()}function jt(n,t){if(n===t)return!0;const e=Te(n);if(e!==Te(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return cr(n).isEqual(cr(t));case 3:return function(s,o){if(typeof s.timestampValue=="string"&&typeof o.timestampValue=="string"&&s.timestampValue.length===o.timestampValue.length)return s.timestampValue===o.timestampValue;const l=Ee(s.timestampValue),c=Ee(o.timestampValue);return l.seconds===c.seconds&&l.nanos===c.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(s,o){return Ue(s.bytesValue).isEqual(Ue(o.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(s,o){return _t(s.geoPointValue.latitude)===_t(o.geoPointValue.latitude)&&_t(s.geoPointValue.longitude)===_t(o.geoPointValue.longitude)}(n,t);case 2:return function(s,o){if("integerValue"in s&&"integerValue"in o)return _t(s.integerValue)===_t(o.integerValue);if("doubleValue"in s&&"doubleValue"in o){const l=_t(s.doubleValue),c=_t(o.doubleValue);return l===c?ur(l)===ur(c):isNaN(l)&&isNaN(c)}return!1}(n,t);case 9:return Fe(n.arrayValue.values||[],t.arrayValue.values||[],jt);case 10:case 11:return function(s,o){const l=s.mapValue.fields||{},c=o.mapValue.fields||{};if(xo(l)!==xo(c))return!1;for(const h in l)if(l.hasOwnProperty(h)&&(c[h]===void 0||!jt(l[h],c[h])))return!1;return!0}(n,t);default:return G()}}function yn(n,t){return(n.values||[]).find(e=>jt(e,t))!==void 0}function xe(n,t){if(n===t)return 0;const e=Te(n),r=Te(t);if(e!==r)return X(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return X(n.booleanValue,t.booleanValue);case 2:return function(o,l){const c=_t(o.integerValue||o.doubleValue),h=_t(l.integerValue||l.doubleValue);return c<h?-1:c>h?1:c===h?0:isNaN(c)?isNaN(h)?0:-1:1}(n,t);case 3:return jo(n.timestampValue,t.timestampValue);case 4:return jo(cr(n),cr(t));case 5:return Ii(n.stringValue,t.stringValue);case 6:return function(o,l){const c=Ue(o),h=Ue(l);return c.compareTo(h)}(n.bytesValue,t.bytesValue);case 7:return function(o,l){const c=o.split("/"),h=l.split("/");for(let d=0;d<c.length&&d<h.length;d++){const y=X(c[d],h[d]);if(y!==0)return y}return X(c.length,h.length)}(n.referenceValue,t.referenceValue);case 8:return function(o,l){const c=X(_t(o.latitude),_t(l.latitude));return c!==0?c:X(_t(o.longitude),_t(l.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return $o(n.arrayValue,t.arrayValue);case 10:return function(o,l){var c,h,d,y;const I=o.fields||{},b=l.fields||{},S=(c=I[Ai])===null||c===void 0?void 0:c.arrayValue,C=(h=b[Ai])===null||h===void 0?void 0:h.arrayValue,F=X(((d=S==null?void 0:S.values)===null||d===void 0?void 0:d.length)||0,((y=C==null?void 0:C.values)===null||y===void 0?void 0:y.length)||0);return F!==0?F:$o(S,C)}(n.mapValue,t.mapValue);case 11:return function(o,l){if(o===Wn.mapValue&&l===Wn.mapValue)return 0;if(o===Wn.mapValue)return 1;if(l===Wn.mapValue)return-1;const c=o.fields||{},h=Object.keys(c),d=l.fields||{},y=Object.keys(d);h.sort(),y.sort();for(let I=0;I<h.length&&I<y.length;++I){const b=Ii(h[I],y[I]);if(b!==0)return b;const S=xe(c[h[I]],d[y[I]]);if(S!==0)return S}return X(h.length,y.length)}(n.mapValue,t.mapValue);default:throw G()}}function jo(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return X(n,t);const e=Ee(n),r=Ee(t),s=X(e.seconds,r.seconds);return s!==0?s:X(e.nanos,r.nanos)}function $o(n,t){const e=n.values||[],r=t.values||[];for(let s=0;s<e.length&&s<r.length;++s){const o=xe(e[s],r[s]);if(o)return o}return X(e.length,r.length)}function Be(n){return wi(n)}function wi(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const r=Ee(e);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return Ue(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return q.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let r="[",s=!0;for(const o of e.values||[])s?s=!1:r+=",",r+=wi(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(e){const r=Object.keys(e.fields||{}).sort();let s="{",o=!0;for(const l of r)o?o=!1:s+=",",s+=`${l}:${wi(e.fields[l])}`;return s+"}"}(n.mapValue):G()}function Zn(n){switch(Te(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=zi(n);return t?16+Zn(t):16;case 5:return 2*n.stringValue.length;case 6:return Ue(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,o)=>s+Zn(o),0)}(n.arrayValue);case 10:case 11:return function(r){let s=0;return qe(r.fields,(o,l)=>{s+=o.length+Zn(l)}),s}(n.mapValue);default:throw G()}}function bi(n){return!!n&&"integerValue"in n}function qi(n){return!!n&&"arrayValue"in n}function tr(n){return!!n&&"mapValue"in n}function Kh(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{})[Wa])===null||e===void 0?void 0:e.stringValue)===Qa}function un(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return qe(n.mapValue.fields,(e,r)=>t.mapValue.fields[e]=un(r)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=un(n.arrayValue.values[e]);return t}return Object.assign({},n)}function Wh(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===Gh}/**
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
 */class Ft{constructor(t){this.value=t}static empty(){return new Ft({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!tr(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=un(e)}setAll(t){let e=yt.emptyPath(),r={},s=[];t.forEach((l,c)=>{if(!e.isImmediateParentOf(c)){const h=this.getFieldsMap(e);this.applyChanges(h,r,s),r={},s=[],e=c.popLast()}l?r[c.lastSegment()]=un(l):s.push(c.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,r,s)}delete(t){const e=this.field(t.popLast());tr(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return jt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=e.mapValue.fields[t.get(r)];tr(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,r){qe(e,(s,o)=>t[s]=o);for(const s of r)delete t[s]}clone(){return new Ft(un(this.value))}}function Xa(n){const t=[];return qe(n.fields,(e,r)=>{const s=new yt([e]);if(tr(r)){const o=Xa(r.mapValue).fields;if(o.length===0)t.push(s);else for(const l of o)t.push(s.child(l))}else t.push(s)}),new Ut(t)}/**
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
 */class Lt{constructor(t,e,r,s,o,l,c){this.key=t,this.documentType=e,this.version=r,this.readTime=s,this.createTime=o,this.data=l,this.documentState=c}static newInvalidDocument(t){return new Lt(t,0,it.min(),it.min(),it.min(),Ft.empty(),0)}static newFoundDocument(t,e,r,s){return new Lt(t,1,e,it.min(),r,s,0)}static newNoDocument(t,e){return new Lt(t,2,e,it.min(),it.min(),Ft.empty(),0)}static newUnknownDocument(t,e){return new Lt(t,3,e,it.min(),it.min(),Ft.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(it.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Ft.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Ft.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=it.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Lt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Lt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class dr{constructor(t,e){this.position=t,this.inclusive=e}}function zo(n,t,e){let r=0;for(let s=0;s<n.position.length;s++){const o=t[s],l=n.position[s];if(o.field.isKeyField()?r=q.comparator(q.fromName(l.referenceValue),e.key):r=xe(l,e.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function qo(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!jt(n.position[e],t.position[e]))return!1;return!0}/**
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
 */class pr{constructor(t,e="asc"){this.field=t,this.dir=e}}function Qh(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
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
 */class Ya{}class ft extends Ya{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new Yh(t,e,r):e==="array-contains"?new tf(t,r):e==="in"?new ef(t,r):e==="not-in"?new nf(t,r):e==="array-contains-any"?new rf(t,r):new ft(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new Jh(t,r):new Zh(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(xe(e,this.value)):e!==null&&Te(this.value)===Te(e)&&this.matchesComparison(xe(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return G()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class oe extends Ya{constructor(t,e){super(),this.filters=t,this.op=e,this.ce=null}static create(t,e){return new oe(t,e)}matches(t){return Ja(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function Ja(n){return n.op==="and"}function Za(n){return Xh(n)&&Ja(n)}function Xh(n){for(const t of n.filters)if(t instanceof oe)return!1;return!0}function Ri(n){if(n instanceof ft)return n.field.canonicalString()+n.op.toString()+Be(n.value);if(Za(n))return n.filters.map(t=>Ri(t)).join(",");{const t=n.filters.map(e=>Ri(e)).join(",");return`${n.op}(${t})`}}function tl(n,t){return n instanceof ft?function(r,s){return s instanceof ft&&r.op===s.op&&r.field.isEqual(s.field)&&jt(r.value,s.value)}(n,t):n instanceof oe?function(r,s){return s instanceof oe&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((o,l,c)=>o&&tl(l,s.filters[c]),!0):!1}(n,t):void G()}function el(n){return n instanceof ft?function(e){return`${e.field.canonicalString()} ${e.op} ${Be(e.value)}`}(n):n instanceof oe?function(e){return e.op.toString()+" {"+e.getFilters().map(el).join(" ,")+"}"}(n):"Filter"}class Yh extends ft{constructor(t,e,r){super(t,e,r),this.key=q.fromName(r.referenceValue)}matches(t){const e=q.comparator(t.key,this.key);return this.matchesComparison(e)}}class Jh extends ft{constructor(t,e){super(t,"in",e),this.keys=nl("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class Zh extends ft{constructor(t,e){super(t,"not-in",e),this.keys=nl("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function nl(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(r=>q.fromName(r.referenceValue))}class tf extends ft{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return qi(e)&&yn(e.arrayValue,this.value)}}class ef extends ft{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&yn(this.value.arrayValue,e)}}class nf extends ft{constructor(t,e){super(t,"not-in",e)}matches(t){if(yn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!yn(this.value.arrayValue,e)}}class rf extends ft{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!qi(e)||!e.arrayValue.values)&&e.arrayValue.values.some(r=>yn(this.value.arrayValue,r))}}/**
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
 */class sf{constructor(t,e=null,r=[],s=[],o=null,l=null,c=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=s,this.limit=o,this.startAt=l,this.endAt=c,this.le=null}}function Ho(n,t=null,e=[],r=[],s=null,o=null,l=null){return new sf(n,t,e,r,s,o,l)}function Hi(n){const t=nt(n);if(t.le===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(r=>Ri(r)).join(","),e+="|ob:",e+=t.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),ji(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(r=>Be(r)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(r=>Be(r)).join(",")),t.le=e}return t.le}function Gi(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!Qh(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!tl(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!qo(n.startAt,t.startAt)&&qo(n.endAt,t.endAt)}/**
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
 */class br{constructor(t,e=null,r=[],s=[],o=null,l="F",c=null,h=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=s,this.limit=o,this.limitType=l,this.startAt=c,this.endAt=h,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function of(n,t,e,r,s,o,l,c){return new br(n,t,e,r,s,o,l,c)}function af(n){return new br(n)}function Go(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function lf(n){return n.collectionGroup!==null}function cn(n){const t=nt(n);if(t.he===null){t.he=[];const e=new Set;for(const o of t.explicitOrderBy)t.he.push(o),e.add(o.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(l){let c=new vt(yt.comparator);return l.filters.forEach(h=>{h.getFlattenedFilters().forEach(d=>{d.isInequality()&&(c=c.add(d.field))})}),c})(t).forEach(o=>{e.has(o.canonicalString())||o.isKeyField()||t.he.push(new pr(o,r))}),e.has(yt.keyField().canonicalString())||t.he.push(new pr(yt.keyField(),r))}return t.he}function ge(n){const t=nt(n);return t.Pe||(t.Pe=uf(t,cn(n))),t.Pe}function uf(n,t){if(n.limitType==="F")return Ho(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(s=>{const o=s.dir==="desc"?"asc":"desc";return new pr(s.field,o)});const e=n.endAt?new dr(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new dr(n.startAt.position,n.startAt.inclusive):null;return Ho(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function Pi(n,t,e){return new br(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function rl(n,t){return Gi(ge(n),ge(t))&&n.limitType===t.limitType}function il(n){return`${Hi(ge(n))}|lt:${n.limitType}`}function on(n){return`Query(target=${function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map(s=>el(s)).join(", ")}]`),ji(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map(s=>function(l){return`${l.field.canonicalString()} (${l.dir})`}(s)).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map(s=>Be(s)).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map(s=>Be(s)).join(",")),`Target(${r})`}(ge(n))}; limitType=${n.limitType})`}function Ki(n,t){return t.isFoundDocument()&&function(r,s){const o=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):q.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(n,t)&&function(r,s){for(const o of cn(r))if(!o.field.isKeyField()&&s.data.field(o.field)===null)return!1;return!0}(n,t)&&function(r,s){for(const o of r.filters)if(!o.matches(s))return!1;return!0}(n,t)&&function(r,s){return!(r.startAt&&!function(l,c,h){const d=zo(l,c,h);return l.inclusive?d<=0:d<0}(r.startAt,cn(r),s)||r.endAt&&!function(l,c,h){const d=zo(l,c,h);return l.inclusive?d>=0:d>0}(r.endAt,cn(r),s))}(n,t)}function cf(n){return(t,e)=>{let r=!1;for(const s of cn(n)){const o=hf(s,t,e);if(o!==0)return o;r=r||s.field.isKeyField()}return 0}}function hf(n,t,e){const r=n.field.isKeyField()?q.comparator(t.key,e.key):function(o,l,c){const h=l.data.field(o),d=c.data.field(o);return h!==null&&d!==null?xe(h,d):G()}(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return G()}}/**
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
 */class Ie{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[s,o]of r)if(this.equalsFn(s,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),s=this.inner[r];if(s===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],t))return void(s[o]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return r.length===1?delete this.inner[e]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(t){qe(this.inner,(e,r)=>{for(const[s,o]of r)t(s,o)})}isEmpty(){return za(this.inner)}size(){return this.innerSize}}/**
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
 */const ff=new Dt(q.comparator);function mr(){return ff}const sl=new Dt(q.comparator);function Qn(...n){let t=sl;for(const e of n)t=t.insert(e.key,e);return t}function ol(n){let t=sl;return n.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function pe(){return hn()}function al(){return hn()}function hn(){return new Ie(n=>n.toString(),(n,t)=>n.isEqual(t))}const df=new Dt(q.comparator),pf=new vt(q.comparator);function Rt(...n){let t=pf;for(const e of n)t=t.add(e);return t}const mf=new vt(X);function gf(){return mf}/**
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
 */function Wi(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ur(t)?"-0":t}}function ll(n){return{integerValue:""+n}}function _f(n,t){return Bh(t)?ll(t):Wi(n,t)}/**
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
 */class Rr{constructor(){this._=void 0}}function yf(n,t,e){return n instanceof gr?function(s,o){const l={fields:{[Ha]:{stringValue:qa},[Ka]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return o&&$i(o)&&(o=zi(o)),o&&(l.fields[Ga]=o),{mapValue:l}}(e,t):n instanceof vn?cl(n,t):n instanceof En?hl(n,t):function(s,o){const l=ul(s,o),c=Ko(l)+Ko(s.Ie);return bi(l)&&bi(s.Ie)?ll(c):Wi(s.serializer,c)}(n,t)}function vf(n,t,e){return n instanceof vn?cl(n,t):n instanceof En?hl(n,t):e}function ul(n,t){return n instanceof _r?function(r){return bi(r)||function(o){return!!o&&"doubleValue"in o}(r)}(t)?t:{integerValue:0}:null}class gr extends Rr{}class vn extends Rr{constructor(t){super(),this.elements=t}}function cl(n,t){const e=fl(t);for(const r of n.elements)e.some(s=>jt(s,r))||e.push(r);return{arrayValue:{values:e}}}class En extends Rr{constructor(t){super(),this.elements=t}}function hl(n,t){let e=fl(t);for(const r of n.elements)e=e.filter(s=>!jt(s,r));return{arrayValue:{values:e}}}class _r extends Rr{constructor(t,e){super(),this.serializer=t,this.Ie=e}}function Ko(n){return _t(n.integerValue||n.doubleValue)}function fl(n){return qi(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function Ef(n,t){return n.field.isEqual(t.field)&&function(r,s){return r instanceof vn&&s instanceof vn||r instanceof En&&s instanceof En?Fe(r.elements,s.elements,jt):r instanceof _r&&s instanceof _r?jt(r.Ie,s.Ie):r instanceof gr&&s instanceof gr}(n.transform,t.transform)}class Tf{constructor(t,e){this.version=t,this.transformResults=e}}class Kt{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Kt}static exists(t){return new Kt(void 0,t)}static updateTime(t){return new Kt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function er(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class Pr{}function dl(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new ml(n.key,Kt.none()):new An(n.key,n.data,Kt.none());{const e=n.data,r=Ft.empty();let s=new vt(yt.comparator);for(let o of t.fields)if(!s.has(o)){let l=e.field(o);l===null&&o.length>1&&(o=o.popLast(),l=e.field(o)),l===null?r.delete(o):r.set(o,l),s=s.add(o)}return new Ae(n.key,r,new Ut(s.toArray()),Kt.none())}}function If(n,t,e){n instanceof An?function(s,o,l){const c=s.value.clone(),h=Qo(s.fieldTransforms,o,l.transformResults);c.setAll(h),o.convertToFoundDocument(l.version,c).setHasCommittedMutations()}(n,t,e):n instanceof Ae?function(s,o,l){if(!er(s.precondition,o))return void o.convertToUnknownDocument(l.version);const c=Qo(s.fieldTransforms,o,l.transformResults),h=o.data;h.setAll(pl(s)),h.setAll(c),o.convertToFoundDocument(l.version,h).setHasCommittedMutations()}(n,t,e):function(s,o,l){o.convertToNoDocument(l.version).setHasCommittedMutations()}(0,t,e)}function fn(n,t,e,r){return n instanceof An?function(o,l,c,h){if(!er(o.precondition,l))return c;const d=o.value.clone(),y=Xo(o.fieldTransforms,h,l);return d.setAll(y),l.convertToFoundDocument(l.version,d).setHasLocalMutations(),null}(n,t,e,r):n instanceof Ae?function(o,l,c,h){if(!er(o.precondition,l))return c;const d=Xo(o.fieldTransforms,h,l),y=l.data;return y.setAll(pl(o)),y.setAll(d),l.convertToFoundDocument(l.version,y).setHasLocalMutations(),c===null?null:c.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(I=>I.field))}(n,t,e,r):function(o,l,c){return er(o.precondition,l)?(l.convertToNoDocument(l.version).setHasLocalMutations(),null):c}(n,t,e)}function Af(n,t){let e=null;for(const r of n.fieldTransforms){const s=t.data.field(r.field),o=ul(r.transform,s||null);o!=null&&(e===null&&(e=Ft.empty()),e.set(r.field,o))}return e||null}function Wo(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Fe(r,s,(o,l)=>Ef(o,l))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class An extends Pr{constructor(t,e,r,s=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Ae extends Pr{constructor(t,e,r,s,o=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=s,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function pl(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}}),t}function Qo(n,t,e){const r=new Map;lt(n.length===e.length);for(let s=0;s<e.length;s++){const o=n[s],l=o.transform,c=t.data.field(o.field);r.set(o.field,vf(l,c,e[s]))}return r}function Xo(n,t,e){const r=new Map;for(const s of n){const o=s.transform,l=e.data.field(s.field);r.set(s.field,yf(o,l,t))}return r}class ml extends Pr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class wf extends Pr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class bf{constructor(t,e,r,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const o=this.mutations[s];o.key.isEqual(t.key)&&If(o,t,r[s])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=fn(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=fn(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=al();return this.mutations.forEach(s=>{const o=t.get(s.key),l=o.overlayedDocument;let c=this.applyToLocalView(l,o.mutatedFields);c=e.has(s.key)?null:c;const h=dl(l,c);h!==null&&r.set(s.key,h),l.isValidDocument()||l.convertToNoDocument(it.min())}),r}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),Rt())}isEqual(t){return this.batchId===t.batchId&&Fe(this.mutations,t.mutations,(e,r)=>Wo(e,r))&&Fe(this.baseMutations,t.baseMutations,(e,r)=>Wo(e,r))}}class Qi{constructor(t,e,r,s){this.batch=t,this.commitVersion=e,this.mutationResults=r,this.docVersions=s}static from(t,e,r){lt(t.mutations.length===r.length);let s=function(){return df}();const o=t.mutations;for(let l=0;l<o.length;l++)s=s.insert(o[l].key,r[l].version);return new Qi(t,e,r,s)}}/**
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
 */class Rf{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */var ut,K;function Pf(n){switch(n){case V.OK:return G();case V.CANCELLED:case V.UNKNOWN:case V.DEADLINE_EXCEEDED:case V.RESOURCE_EXHAUSTED:case V.INTERNAL:case V.UNAVAILABLE:case V.UNAUTHENTICATED:return!1;case V.INVALID_ARGUMENT:case V.NOT_FOUND:case V.ALREADY_EXISTS:case V.PERMISSION_DENIED:case V.FAILED_PRECONDITION:case V.ABORTED:case V.OUT_OF_RANGE:case V.UNIMPLEMENTED:case V.DATA_LOSS:return!0;default:return G()}}function Sf(n){if(n===void 0)return ve("GRPC error has no .code"),V.UNKNOWN;switch(n){case ut.OK:return V.OK;case ut.CANCELLED:return V.CANCELLED;case ut.UNKNOWN:return V.UNKNOWN;case ut.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case ut.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case ut.INTERNAL:return V.INTERNAL;case ut.UNAVAILABLE:return V.UNAVAILABLE;case ut.UNAUTHENTICATED:return V.UNAUTHENTICATED;case ut.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case ut.NOT_FOUND:return V.NOT_FOUND;case ut.ALREADY_EXISTS:return V.ALREADY_EXISTS;case ut.PERMISSION_DENIED:return V.PERMISSION_DENIED;case ut.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case ut.ABORTED:return V.ABORTED;case ut.OUT_OF_RANGE:return V.OUT_OF_RANGE;case ut.UNIMPLEMENTED:return V.UNIMPLEMENTED;case ut.DATA_LOSS:return V.DATA_LOSS;default:return G()}}(K=ut||(ut={}))[K.OK=0]="OK",K[K.CANCELLED=1]="CANCELLED",K[K.UNKNOWN=2]="UNKNOWN",K[K.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",K[K.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",K[K.NOT_FOUND=5]="NOT_FOUND",K[K.ALREADY_EXISTS=6]="ALREADY_EXISTS",K[K.PERMISSION_DENIED=7]="PERMISSION_DENIED",K[K.UNAUTHENTICATED=16]="UNAUTHENTICATED",K[K.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",K[K.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",K[K.ABORTED=10]="ABORTED",K[K.OUT_OF_RANGE=11]="OUT_OF_RANGE",K[K.UNIMPLEMENTED=12]="UNIMPLEMENTED",K[K.INTERNAL=13]="INTERNAL",K[K.UNAVAILABLE=14]="UNAVAILABLE",K[K.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new Li([4294967295,4294967295],0);class Cf{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Si(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Vf(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function Df(n,t){return Si(n,t.toTimestamp())}function Le(n){return lt(!!n),it.fromTimestamp(function(e){const r=Ee(e);return new dt(r.seconds,r.nanos)}(n))}function gl(n,t){return Ci(n,t).canonicalString()}function Ci(n,t){const e=function(s){return new at(["projects",s.projectId,"databases",s.database])}(n).child("documents");return t===void 0?e:e.child(t)}function kf(n){const t=at.fromString(n);return lt(Bf(t)),t}function Vi(n,t){return gl(n.databaseId,t.path)}function Nf(n){const t=kf(n);return t.length===4?at.emptyPath():Mf(t)}function Of(n){return new at(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Mf(n){return lt(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Yo(n,t,e){return{name:Vi(n,t),fields:e.value.mapValue.fields}}function Lf(n,t){let e;if(t instanceof An)e={update:Yo(n,t.key,t.value)};else if(t instanceof ml)e={delete:Vi(n,t.key)};else if(t instanceof Ae)e={update:Yo(n,t.key,t.data),updateMask:xf(t.fieldMask)};else{if(!(t instanceof wf))return G();e={verify:Vi(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(r=>function(o,l){const c=l.transform;if(c instanceof gr)return{fieldPath:l.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof vn)return{fieldPath:l.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof En)return{fieldPath:l.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof _r)return{fieldPath:l.field.canonicalString(),increment:c.Ie};throw G()}(0,r))),t.precondition.isNone||(e.currentDocument=function(s,o){return o.updateTime!==void 0?{updateTime:Df(s,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:G()}(n,t.precondition)),e}function Ff(n,t){return n&&n.length>0?(lt(t!==void 0),n.map(e=>function(s,o){let l=s.updateTime?Le(s.updateTime):Le(o);return l.isEqual(it.min())&&(l=Le(o)),new Tf(l,s.transformResults||[])}(e,t))):[]}function Uf(n){let t=Nf(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let s=null;if(r>0){lt(r===1);const y=e.from[0];y.allDescendants?s=y.collectionId:t=t.child(y.collectionId)}let o=[];e.where&&(o=function(I){const b=_l(I);return b instanceof oe&&Za(b)?b.getFilters():[b]}(e.where));let l=[];e.orderBy&&(l=function(I){return I.map(b=>function(C){return new pr(Ne(C.field),function(N){switch(N){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(C.direction))}(b))}(e.orderBy));let c=null;e.limit&&(c=function(I){let b;return b=typeof I=="object"?I.value:I,ji(b)?null:b}(e.limit));let h=null;e.startAt&&(h=function(I){const b=!!I.before,S=I.values||[];return new dr(S,b)}(e.startAt));let d=null;return e.endAt&&(d=function(I){const b=!I.before,S=I.values||[];return new dr(S,b)}(e.endAt)),of(t,s,l,o,c,"F",h,d)}function _l(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=Ne(e.unaryFilter.field);return ft.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Ne(e.unaryFilter.field);return ft.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=Ne(e.unaryFilter.field);return ft.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const l=Ne(e.unaryFilter.field);return ft.create(l,"!=",{nullValue:"NULL_VALUE"});default:return G()}}(n):n.fieldFilter!==void 0?function(e){return ft.create(Ne(e.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return G()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return oe.create(e.compositeFilter.filters.map(r=>_l(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return G()}}(e.compositeFilter.op))}(n):G()}function Ne(n){return yt.fromServerFormat(n.fieldPath)}function xf(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function Bf(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class jf{constructor(t){this.Tt=t}}function $f(n){const t=Uf({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Pi(t,t.limit,"L"):t}/**
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
 */class zf{constructor(){this.Tn=new qf}addToCollectionParentIndex(t,e){return this.Tn.add(e),R.resolve()}getCollectionParents(t,e){return R.resolve(this.Tn.getEntries(e))}addFieldIndex(t,e){return R.resolve()}deleteFieldIndex(t,e){return R.resolve()}deleteAllFieldIndexes(t){return R.resolve()}createTargetIndexes(t,e){return R.resolve()}getDocumentsMatchingTarget(t,e){return R.resolve(null)}getIndexType(t,e){return R.resolve(0)}getFieldIndexes(t,e){return R.resolve([])}getNextCollectionGroupToUpdate(t){return R.resolve(null)}getMinOffset(t,e){return R.resolve(se.min())}getMinOffsetFromCollectionGroup(t,e){return R.resolve(se.min())}updateCollectionGroup(t,e,r){return R.resolve()}updateIndexEntries(t,e){return R.resolve()}}class qf{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e]||new vt(at.comparator),o=!s.has(r);return this.index[e]=s.add(r),o}has(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e];return s&&s.has(r)}getEntries(t){return(this.index[t]||new vt(at.comparator)).toArray()}}/**
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
 */const Jo={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},yl=41943040;class Vt{static withCacheSize(t){return new Vt(t,Vt.DEFAULT_COLLECTION_PERCENTILE,Vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,r){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=r}}/**
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
 */Vt.DEFAULT_COLLECTION_PERCENTILE=10,Vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Vt.DEFAULT=new Vt(yl,Vt.DEFAULT_COLLECTION_PERCENTILE,Vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Vt.DISABLED=new Vt(-1,0,0);/**
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
 */class je{constructor(t){this.$n=t}next(){return this.$n+=2,this.$n}static Un(){return new je(0)}static Kn(){return new je(-1)}}/**
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
 */const Zo="LruGarbageCollector",Hf=1048576;function ta([n,t],[e,r]){const s=X(n,e);return s===0?X(t,r):s}class Gf{constructor(t){this.Hn=t,this.buffer=new vt(ta),this.Jn=0}Yn(){return++this.Jn}Zn(t){const e=[t,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(e);else{const r=this.buffer.last();ta(e,r)<0&&(this.buffer=this.buffer.delete(r).add(e))}}get maxValue(){return this.buffer.last()[0]}}class Kf{constructor(t,e,r){this.garbageCollector=t,this.asyncQueue=e,this.localStore=r,this.Xn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return this.Xn!==null}er(t){U(Zo,`Garbage collection scheduled in ${t}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){In(e)?U(Zo,"Ignoring IndexedDB error during garbage collection: ",e):await Ui(e)}await this.er(3e5)})}}class Wf{constructor(t,e){this.tr=t,this.params=e}calculateTargetCount(t,e){return this.tr.nr(t).next(r=>Math.floor(e/100*r))}nthSequenceNumber(t,e){if(e===0)return R.resolve(xi.ae);const r=new Gf(e);return this.tr.forEachTarget(t,s=>r.Zn(s.sequenceNumber)).next(()=>this.tr.rr(t,s=>r.Zn(s))).next(()=>r.maxValue)}removeTargets(t,e,r){return this.tr.removeTargets(t,e,r)}removeOrphanedDocuments(t,e){return this.tr.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(U("LruGarbageCollector","Garbage collection skipped; disabled"),R.resolve(Jo)):this.getCacheSize(t).next(r=>r<this.params.cacheSizeCollectionThreshold?(U("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Jo):this.ir(t,e))}getCacheSize(t){return this.tr.getCacheSize(t)}ir(t,e){let r,s,o,l,c,h,d;const y=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(I=>(I>this.params.maximumSequenceNumbersToCollect?(U("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${I}`),s=this.params.maximumSequenceNumbersToCollect):s=I,l=Date.now(),this.nthSequenceNumber(t,s))).next(I=>(r=I,c=Date.now(),this.removeTargets(t,r,e))).next(I=>(o=I,h=Date.now(),this.removeOrphanedDocuments(t,r))).next(I=>(d=Date.now(),ke()<=W.DEBUG&&U("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${l-y}ms
	Determined least recently used ${s} in `+(c-l)+`ms
	Removed ${o} targets in `+(h-c)+`ms
	Removed ${I} documents in `+(d-h)+`ms
Total Duration: ${d-y}ms`),R.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:o,documentsRemoved:I})))}}function Qf(n,t){return new Wf(n,t)}/**
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
 */class Xf{constructor(){this.changes=new Ie(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,Lt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?R.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class Yf{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
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
 */class Jf{constructor(t,e,r,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=s}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next(s=>(r=s,this.remoteDocumentCache.getEntry(t,e))).next(s=>(r!==null&&fn(r.mutation,s,Ut.empty(),dt.now()),s))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.getLocalViewOfDocuments(t,r,Rt()).next(()=>r))}getLocalViewOfDocuments(t,e,r=Rt()){const s=pe();return this.populateOverlays(t,s,e).next(()=>this.computeViews(t,e,s,r).next(o=>{let l=Qn();return o.forEach((c,h)=>{l=l.insert(c,h.overlayedDocument)}),l}))}getOverlayedDocuments(t,e){const r=pe();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,Rt()))}populateOverlays(t,e,r){const s=[];return r.forEach(o=>{e.has(o)||s.push(o)}),this.documentOverlayCache.getOverlays(t,s).next(o=>{o.forEach((l,c)=>{e.set(l,c)})})}computeViews(t,e,r,s){let o=mr();const l=hn(),c=function(){return hn()}();return e.forEach((h,d)=>{const y=r.get(d.key);s.has(d.key)&&(y===void 0||y.mutation instanceof Ae)?o=o.insert(d.key,d):y!==void 0?(l.set(d.key,y.mutation.getFieldMask()),fn(y.mutation,d,y.mutation.getFieldMask(),dt.now())):l.set(d.key,Ut.empty())}),this.recalculateAndSaveOverlays(t,o).next(h=>(h.forEach((d,y)=>l.set(d,y)),e.forEach((d,y)=>{var I;return c.set(d,new Yf(y,(I=l.get(d))!==null&&I!==void 0?I:null))}),c))}recalculateAndSaveOverlays(t,e){const r=hn();let s=new Dt((l,c)=>l-c),o=Rt();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(l=>{for(const c of l)c.keys().forEach(h=>{const d=e.get(h);if(d===null)return;let y=r.get(h)||Ut.empty();y=c.applyToLocalView(d,y),r.set(h,y);const I=(s.get(c.batchId)||Rt()).add(h);s=s.insert(c.batchId,I)})}).next(()=>{const l=[],c=s.getReverseIterator();for(;c.hasNext();){const h=c.getNext(),d=h.key,y=h.value,I=al();y.forEach(b=>{if(!o.has(b)){const S=dl(e.get(b),r.get(b));S!==null&&I.set(b,S),o=o.add(b)}}),l.push(this.documentOverlayCache.saveOverlays(t,d,I))}return R.waitFor(l)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,e,r,s){return function(l){return q.isDocumentKey(l.path)&&l.collectionGroup===null&&l.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):lf(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,s):this.getDocumentsMatchingCollectionQuery(t,e,r,s)}getNextDocuments(t,e,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,s).next(o=>{const l=s-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,s-o.size):R.resolve(pe());let c=_n,h=o;return l.next(d=>R.forEach(d,(y,I)=>(c<I.largestBatchId&&(c=I.largestBatchId),o.get(y)?R.resolve():this.remoteDocumentCache.getEntry(t,y).next(b=>{h=h.insert(y,b)}))).next(()=>this.populateOverlays(t,d,o)).next(()=>this.computeViews(t,h,d,Rt())).next(y=>({batchId:c,changes:ol(y)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new q(e)).next(r=>{let s=Qn();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(t,e,r,s){const o=e.collectionGroup;let l=Qn();return this.indexManager.getCollectionParents(t,o).next(c=>R.forEach(c,h=>{const d=function(I,b){return new br(b,null,I.explicitOrderBy.slice(),I.filters.slice(),I.limit,I.limitType,I.startAt,I.endAt)}(e,h.child(o));return this.getDocumentsMatchingCollectionQuery(t,d,r,s).next(y=>{y.forEach((I,b)=>{l=l.insert(I,b)})})}).next(()=>l))}getDocumentsMatchingCollectionQuery(t,e,r,s){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next(l=>(o=l,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,o,s))).next(l=>{o.forEach((h,d)=>{const y=d.getKey();l.get(y)===null&&(l=l.insert(y,Lt.newInvalidDocument(y)))});let c=Qn();return l.forEach((h,d)=>{const y=o.get(h);y!==void 0&&fn(y.mutation,d,Ut.empty(),dt.now()),Ki(e,d)&&(c=c.insert(h,d))}),c})}}/**
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
 */class Zf{constructor(t){this.serializer=t,this.dr=new Map,this.Ar=new Map}getBundleMetadata(t,e){return R.resolve(this.dr.get(e))}saveBundleMetadata(t,e){return this.dr.set(e.id,function(s){return{id:s.id,version:s.version,createTime:Le(s.createTime)}}(e)),R.resolve()}getNamedQuery(t,e){return R.resolve(this.Ar.get(e))}saveNamedQuery(t,e){return this.Ar.set(e.name,function(s){return{name:s.name,query:$f(s.bundledQuery),readTime:Le(s.readTime)}}(e)),R.resolve()}}/**
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
 */class td{constructor(){this.overlays=new Dt(q.comparator),this.Rr=new Map}getOverlay(t,e){return R.resolve(this.overlays.get(e))}getOverlays(t,e){const r=pe();return R.forEach(e,s=>this.getOverlay(t,s).next(o=>{o!==null&&r.set(s,o)})).next(()=>r)}saveOverlays(t,e,r){return r.forEach((s,o)=>{this.Et(t,e,o)}),R.resolve()}removeOverlaysForBatchId(t,e,r){const s=this.Rr.get(r);return s!==void 0&&(s.forEach(o=>this.overlays=this.overlays.remove(o)),this.Rr.delete(r)),R.resolve()}getOverlaysForCollection(t,e,r){const s=pe(),o=e.length+1,l=new q(e.child("")),c=this.overlays.getIteratorFrom(l);for(;c.hasNext();){const h=c.getNext().value,d=h.getKey();if(!e.isPrefixOf(d.path))break;d.path.length===o&&h.largestBatchId>r&&s.set(h.getKey(),h)}return R.resolve(s)}getOverlaysForCollectionGroup(t,e,r,s){let o=new Dt((d,y)=>d-y);const l=this.overlays.getIterator();for(;l.hasNext();){const d=l.getNext().value;if(d.getKey().getCollectionGroup()===e&&d.largestBatchId>r){let y=o.get(d.largestBatchId);y===null&&(y=pe(),o=o.insert(d.largestBatchId,y)),y.set(d.getKey(),d)}}const c=pe(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach((d,y)=>c.set(d,y)),!(c.size()>=s)););return R.resolve(c)}Et(t,e,r){const s=this.overlays.get(r.key);if(s!==null){const l=this.Rr.get(s.largestBatchId).delete(r.key);this.Rr.set(s.largestBatchId,l)}this.overlays=this.overlays.insert(r.key,new Rf(e,r));let o=this.Rr.get(e);o===void 0&&(o=Rt(),this.Rr.set(e,o)),this.Rr.set(e,o.add(r.key))}}/**
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
 */class ed{constructor(){this.sessionToken=Bt.EMPTY_BYTE_STRING}getSessionToken(t){return R.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,R.resolve()}}/**
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
 */class Xi{constructor(){this.Vr=new vt(ct.mr),this.gr=new vt(ct.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(t,e){const r=new ct(t,e);this.Vr=this.Vr.add(r),this.gr=this.gr.add(r)}yr(t,e){t.forEach(r=>this.addReference(r,e))}removeReference(t,e){this.wr(new ct(t,e))}Sr(t,e){t.forEach(r=>this.removeReference(r,e))}br(t){const e=new q(new at([])),r=new ct(e,t),s=new ct(e,t+1),o=[];return this.gr.forEachInRange([r,s],l=>{this.wr(l),o.push(l.key)}),o}Dr(){this.Vr.forEach(t=>this.wr(t))}wr(t){this.Vr=this.Vr.delete(t),this.gr=this.gr.delete(t)}vr(t){const e=new q(new at([])),r=new ct(e,t),s=new ct(e,t+1);let o=Rt();return this.gr.forEachInRange([r,s],l=>{o=o.add(l.key)}),o}containsKey(t){const e=new ct(t,0),r=this.Vr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class ct{constructor(t,e){this.key=t,this.Cr=e}static mr(t,e){return q.comparator(t.key,e.key)||X(t.Cr,e.Cr)}static pr(t,e){return X(t.Cr,e.Cr)||q.comparator(t.key,e.key)}}/**
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
 */class nd{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Fr=1,this.Mr=new vt(ct.mr)}checkEmpty(t){return R.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,s){const o=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const l=new bf(o,e,r,s);this.mutationQueue.push(l);for(const c of s)this.Mr=this.Mr.add(new ct(c.key,o)),this.indexManager.addToCollectionParentIndex(t,c.key.path.popLast());return R.resolve(l)}lookupMutationBatch(t,e){return R.resolve(this.Or(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,s=this.Nr(r),o=s<0?0:s;return R.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return R.resolve(this.mutationQueue.length===0?Bi:this.Fr-1)}getAllMutationBatches(t){return R.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new ct(e,0),s=new ct(e,Number.POSITIVE_INFINITY),o=[];return this.Mr.forEachInRange([r,s],l=>{const c=this.Or(l.Cr);o.push(c)}),R.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new vt(X);return e.forEach(s=>{const o=new ct(s,0),l=new ct(s,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([o,l],c=>{r=r.add(c.Cr)})}),R.resolve(this.Br(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,s=r.length+1;let o=r;q.isDocumentKey(o)||(o=o.child(""));const l=new ct(new q(o),0);let c=new vt(X);return this.Mr.forEachWhile(h=>{const d=h.key.path;return!!r.isPrefixOf(d)&&(d.length===s&&(c=c.add(h.Cr)),!0)},l),R.resolve(this.Br(c))}Br(t){const e=[];return t.forEach(r=>{const s=this.Or(r);s!==null&&e.push(s)}),e}removeMutationBatch(t,e){lt(this.Lr(e.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Mr;return R.forEach(e.mutations,s=>{const o=new ct(s.key,e.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.Mr=r})}qn(t){}containsKey(t,e){const r=new ct(e,0),s=this.Mr.firstAfterOrEqual(r);return R.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,R.resolve()}Lr(t,e){return this.Nr(t)}Nr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Or(t){const e=this.Nr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
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
 */class rd{constructor(t){this.kr=t,this.docs=function(){return new Dt(q.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,s=this.docs.get(r),o=s?s.size:0,l=this.kr(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:l}),this.size+=l-o,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return R.resolve(r?r.document.mutableCopy():Lt.newInvalidDocument(e))}getEntries(t,e){let r=mr();return e.forEach(s=>{const o=this.docs.get(s);r=r.insert(s,o?o.document.mutableCopy():Lt.newInvalidDocument(s))}),R.resolve(r)}getDocumentsMatchingQuery(t,e,r,s){let o=mr();const l=e.path,c=new q(l.child("__id-9223372036854775808__")),h=this.docs.getIteratorFrom(c);for(;h.hasNext();){const{key:d,value:{document:y}}=h.getNext();if(!l.isPrefixOf(d.path))break;d.path.length>l.length+1||Lh(Mh(y),r)<=0||(s.has(y.key)||Ki(e,y))&&(o=o.insert(y.key,y.mutableCopy()))}return R.resolve(o)}getAllFromCollectionGroup(t,e,r,s){G()}qr(t,e){return R.forEach(this.docs,r=>e(r))}newChangeBuffer(t){return new id(this)}getSize(t){return R.resolve(this.size)}}class id extends Xf{constructor(t){super(),this.Ir=t}applyChanges(t){const e=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?e.push(this.Ir.addEntry(t,s)):this.Ir.removeEntry(r)}),R.waitFor(e)}getFromCache(t,e){return this.Ir.getEntry(t,e)}getAllFromCache(t,e){return this.Ir.getEntries(t,e)}}/**
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
 */class sd{constructor(t){this.persistence=t,this.Qr=new Ie(e=>Hi(e),Gi),this.lastRemoteSnapshotVersion=it.min(),this.highestTargetId=0,this.$r=0,this.Ur=new Xi,this.targetCount=0,this.Kr=je.Un()}forEachTarget(t,e){return this.Qr.forEach((r,s)=>e(s)),R.resolve()}getLastRemoteSnapshotVersion(t){return R.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return R.resolve(this.$r)}allocateTargetId(t){return this.highestTargetId=this.Kr.next(),R.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.$r&&(this.$r=e),R.resolve()}zn(t){this.Qr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Kr=new je(e),this.highestTargetId=e),t.sequenceNumber>this.$r&&(this.$r=t.sequenceNumber)}addTargetData(t,e){return this.zn(e),this.targetCount+=1,R.resolve()}updateTargetData(t,e){return this.zn(e),R.resolve()}removeTargetData(t,e){return this.Qr.delete(e.target),this.Ur.br(e.targetId),this.targetCount-=1,R.resolve()}removeTargets(t,e,r){let s=0;const o=[];return this.Qr.forEach((l,c)=>{c.sequenceNumber<=e&&r.get(c.targetId)===null&&(this.Qr.delete(l),o.push(this.removeMatchingKeysForTargetId(t,c.targetId)),s++)}),R.waitFor(o).next(()=>s)}getTargetCount(t){return R.resolve(this.targetCount)}getTargetData(t,e){const r=this.Qr.get(e)||null;return R.resolve(r)}addMatchingKeys(t,e,r){return this.Ur.yr(e,r),R.resolve()}removeMatchingKeys(t,e,r){this.Ur.Sr(e,r);const s=this.persistence.referenceDelegate,o=[];return s&&e.forEach(l=>{o.push(s.markPotentiallyOrphaned(t,l))}),R.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.Ur.br(e),R.resolve()}getMatchingKeysForTargetId(t,e){const r=this.Ur.vr(e);return R.resolve(r)}containsKey(t,e){return R.resolve(this.Ur.containsKey(e))}}/**
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
 */class vl{constructor(t,e){this.Wr={},this.overlays={},this.Gr=new xi(0),this.zr=!1,this.zr=!0,this.jr=new ed,this.referenceDelegate=t(this),this.Hr=new sd(this),this.indexManager=new zf,this.remoteDocumentCache=function(s){return new rd(s)}(r=>this.referenceDelegate.Jr(r)),this.serializer=new jf(e),this.Yr=new Zf(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new td,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.Wr[t.toKey()];return r||(r=new nd(e,this.referenceDelegate),this.Wr[t.toKey()]=r),r}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(t,e,r){U("MemoryPersistence","Starting transaction:",t);const s=new od(this.Gr.next());return this.referenceDelegate.Zr(),r(s).next(o=>this.referenceDelegate.Xr(s).next(()=>o)).toPromise().then(o=>(s.raiseOnCommittedEvent(),o))}ei(t,e){return R.or(Object.values(this.Wr).map(r=>()=>r.containsKey(t,e)))}}class od extends Uh{constructor(t){super(),this.currentSequenceNumber=t}}class Yi{constructor(t){this.persistence=t,this.ti=new Xi,this.ni=null}static ri(t){return new Yi(t)}get ii(){if(this.ni)return this.ni;throw G()}addReference(t,e,r){return this.ti.addReference(r,e),this.ii.delete(r.toString()),R.resolve()}removeReference(t,e,r){return this.ti.removeReference(r,e),this.ii.add(r.toString()),R.resolve()}markPotentiallyOrphaned(t,e){return this.ii.add(e.toString()),R.resolve()}removeTarget(t,e){this.ti.br(e.targetId).forEach(s=>this.ii.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next(s=>{s.forEach(o=>this.ii.add(o.toString()))}).next(()=>r.removeTargetData(t,e))}Zr(){this.ni=new Set}Xr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return R.forEach(this.ii,r=>{const s=q.fromPath(r);return this.si(t,s).next(o=>{o||e.removeEntry(s,it.min())})}).next(()=>(this.ni=null,e.apply(t)))}updateLimboDocument(t,e){return this.si(t,e).next(r=>{r?this.ii.delete(e.toString()):this.ii.add(e.toString())})}Jr(t){return 0}si(t,e){return R.or([()=>R.resolve(this.ti.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.ei(t,e)])}}class yr{constructor(t,e){this.persistence=t,this.oi=new Ie(r=>jh(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=Qf(this,e)}static ri(t,e){return new yr(t,e)}Zr(){}Xr(t){return R.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}nr(t){const e=this.sr(t);return this.persistence.getTargetCache().getTargetCount(t).next(r=>e.next(s=>r+s))}sr(t){let e=0;return this.rr(t,r=>{e++}).next(()=>e)}rr(t,e){return R.forEach(this.oi,(r,s)=>this.ar(t,r,s).next(o=>o?R.resolve():e(s)))}removeTargets(t,e,r){return this.persistence.getTargetCache().removeTargets(t,e,r)}removeOrphanedDocuments(t,e){let r=0;const s=this.persistence.getRemoteDocumentCache(),o=s.newChangeBuffer();return s.qr(t,l=>this.ar(t,l,e).next(c=>{c||(r++,o.removeEntry(l,it.min()))})).next(()=>o.apply(t)).next(()=>r)}markPotentiallyOrphaned(t,e){return this.oi.set(e,t.currentSequenceNumber),R.resolve()}removeTarget(t,e){const r=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,r)}addReference(t,e,r){return this.oi.set(r,t.currentSequenceNumber),R.resolve()}removeReference(t,e,r){return this.oi.set(r,t.currentSequenceNumber),R.resolve()}updateLimboDocument(t,e){return this.oi.set(e,t.currentSequenceNumber),R.resolve()}Jr(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=Zn(t.data.value)),e}ar(t,e,r){return R.or([()=>this.persistence.ei(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const s=this.oi.get(e);return R.resolve(s!==void 0&&s>r)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
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
 */class Ji{constructor(t,e,r,s){this.targetId=t,this.fromCache=e,this.Hi=r,this.Ji=s}static Yi(t,e){let r=Rt(),s=Rt();for(const o of e.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:s=s.add(o.doc.key)}return new Ji(t,e.fromCache,r,s)}}/**
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
 */class ad{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class ld{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=function(){return oc()?8:xh(ic())>0?6:4}()}initialize(t,e){this.ns=t,this.indexManager=e,this.Zi=!0}getDocumentsMatchingQuery(t,e,r,s){const o={result:null};return this.rs(t,e).next(l=>{o.result=l}).next(()=>{if(!o.result)return this.ss(t,e,s,r).next(l=>{o.result=l})}).next(()=>{if(o.result)return;const l=new ad;return this._s(t,e,l).next(c=>{if(o.result=c,this.Xi)return this.us(t,e,l,c.size)})}).next(()=>o.result)}us(t,e,r,s){return r.documentReadCount<this.es?(ke()<=W.DEBUG&&U("QueryEngine","SDK will not create cache indexes for query:",on(e),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),R.resolve()):(ke()<=W.DEBUG&&U("QueryEngine","Query:",on(e),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ts*s?(ke()<=W.DEBUG&&U("QueryEngine","The SDK decides to create cache indexes for query:",on(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,ge(e))):R.resolve())}rs(t,e){if(Go(e))return R.resolve(null);let r=ge(e);return this.indexManager.getIndexType(t,r).next(s=>s===0?null:(e.limit!==null&&s===1&&(e=Pi(e,null,"F"),r=ge(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next(o=>{const l=Rt(...o);return this.ns.getDocuments(t,l).next(c=>this.indexManager.getMinOffset(t,r).next(h=>{const d=this.cs(e,c);return this.ls(e,d,l,h.readTime)?this.rs(t,Pi(e,null,"F")):this.hs(t,d,e,h)}))})))}ss(t,e,r,s){return Go(e)||s.isEqual(it.min())?R.resolve(null):this.ns.getDocuments(t,r).next(o=>{const l=this.cs(e,o);return this.ls(e,l,r,s)?R.resolve(null):(ke()<=W.DEBUG&&U("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),on(e)),this.hs(t,l,e,Oh(s,_n)).next(c=>c))})}cs(t,e){let r=new vt(cf(t));return e.forEach((s,o)=>{Ki(t,o)&&(r=r.add(o))}),r}ls(t,e,r,s){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(s)>0)}_s(t,e,r){return ke()<=W.DEBUG&&U("QueryEngine","Using full collection scan to execute query:",on(e)),this.ns.getDocumentsMatchingQuery(t,e,se.min(),r)}hs(t,e,r,s){return this.ns.getDocumentsMatchingQuery(t,r,s).next(o=>(e.forEach(l=>{o=o.insert(l.key,l)}),o))}}/**
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
 */const ud="LocalStore";class cd{constructor(t,e,r,s){this.persistence=t,this.Ps=e,this.serializer=s,this.Ts=new Dt(X),this.Is=new Ie(o=>Hi(o),Gi),this.Es=new Map,this.ds=t.getRemoteDocumentCache(),this.Hr=t.getTargetCache(),this.Yr=t.getBundleCache(),this.As(r)}As(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Jf(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.Ts))}}function hd(n,t,e,r){return new cd(n,t,e,r)}async function El(n,t){const e=nt(n);return await e.persistence.runTransaction("Handle user change","readonly",r=>{let s;return e.mutationQueue.getAllMutationBatches(r).next(o=>(s=o,e.As(t),e.mutationQueue.getAllMutationBatches(r))).next(o=>{const l=[],c=[];let h=Rt();for(const d of s){l.push(d.batchId);for(const y of d.mutations)h=h.add(y.key)}for(const d of o){c.push(d.batchId);for(const y of d.mutations)h=h.add(y.key)}return e.localDocuments.getDocuments(r,h).next(d=>({Rs:d,removedBatchIds:l,addedBatchIds:c}))})})}function fd(n,t){const e=nt(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=t.batch.keys(),o=e.ds.newChangeBuffer({trackRemovals:!0});return function(c,h,d,y){const I=d.batch,b=I.keys();let S=R.resolve();return b.forEach(C=>{S=S.next(()=>y.getEntry(h,C)).next(F=>{const N=d.docVersions.get(C);lt(N!==null),F.version.compareTo(N)<0&&(I.applyToRemoteDocument(F,d),F.isValidDocument()&&(F.setReadTime(d.commitVersion),y.addEntry(F)))})}),S.next(()=>c.mutationQueue.removeMutationBatch(h,I))}(e,r,t,o).next(()=>o.apply(r)).next(()=>e.mutationQueue.performConsistencyCheck(r)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(r,s,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let h=Rt();for(let d=0;d<c.mutationResults.length;++d)c.mutationResults[d].transformResults.length>0&&(h=h.add(c.batch.mutations[d].key));return h}(t))).next(()=>e.localDocuments.getDocuments(r,s))})}function dd(n){const t=nt(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Hr.getLastRemoteSnapshotVersion(e))}function pd(n,t){const e=nt(n);return e.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=Bi),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}class ea{constructor(){this.activeTargetIds=gf()}Ds(t){this.activeTargetIds=this.activeTargetIds.add(t)}vs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}bs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class md{constructor(){this.ho=new ea,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t,e=!0){return e&&this.ho.Ds(t),this.Po[t]||"not-current"}updateQueryState(t,e,r){this.Po[t]=e}removeLocalQueryTarget(t){this.ho.vs(t)}isLocalQueryTarget(t){return this.ho.activeTargetIds.has(t)}clearQueryState(t){delete this.Po[t]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(t){return this.ho.activeTargetIds.has(t)}start(){return this.ho=new ea,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class gd{To(t){}shutdown(){}}/**
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
 */const na="ConnectivityMonitor";class ra{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(t){this.Vo.push(t)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){U(na,"Network connectivity changed: AVAILABLE");for(const t of this.Vo)t(0)}Ro(){U(na,"Network connectivity changed: UNAVAILABLE");for(const t of this.Vo)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Xn=null;function Di(){return Xn===null?Xn=function(){return 268435456+Math.round(2147483648*Math.random())}():Xn++,"0x"+Xn.toString(16)}/**
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
 */const ui="RestConnection",_d={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class yd{get fo(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.po=e+"://"+t.host,this.yo=`projects/${r}/databases/${s}`,this.wo=this.databaseId.database===hr?`project_id=${r}`:`project_id=${r}&database_id=${s}`}So(t,e,r,s,o){const l=Di(),c=this.bo(t,e.toUriEncodedString());U(ui,`Sending RPC '${t}' ${l}:`,c,r);const h={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(h,s,o),this.vo(t,c,h,r).then(d=>(U(ui,`Received RPC '${t}' ${l}: `,d),d),d=>{throw wr(ui,`RPC '${t}' ${l} failed with error: `,d,"url: ",c,"request:",r),d})}Co(t,e,r,s,o,l){return this.So(t,e,r,s,o)}Do(t,e,r){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ze}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach((s,o)=>t[o]=s),r&&r.headers.forEach((s,o)=>t[o]=s)}bo(t,e){const r=_d[t];return`${this.po}/v1/${e}:${r}`}terminate(){}}/**
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
 */class vd{constructor(t){this.Fo=t.Fo,this.Mo=t.Mo}xo(t){this.Oo=t}No(t){this.Bo=t}Lo(t){this.ko=t}onMessage(t){this.qo=t}close(){this.Mo()}send(t){this.Fo(t)}Qo(){this.Oo()}$o(){this.Bo()}Uo(t){this.ko(t)}Ko(t){this.qo(t)}}/**
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
 */const wt="WebChannelConnection";class Ed extends yd{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}vo(t,e,r,s){const o=Di();return new Promise((l,c)=>{const h=new Ma;h.setWithCredentials(!0),h.listenOnce(La.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case Jn.NO_ERROR:const y=h.getResponseJson();U(wt,`XHR for RPC '${t}' ${o} received:`,JSON.stringify(y)),l(y);break;case Jn.TIMEOUT:U(wt,`RPC '${t}' ${o} timed out`),c(new $(V.DEADLINE_EXCEEDED,"Request time out"));break;case Jn.HTTP_ERROR:const I=h.getStatus();if(U(wt,`RPC '${t}' ${o} failed with status:`,I,"response text:",h.getResponseText()),I>0){let b=h.getResponseJson();Array.isArray(b)&&(b=b[0]);const S=b==null?void 0:b.error;if(S&&S.status&&S.message){const C=function(N){const L=N.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(L)>=0?L:V.UNKNOWN}(S.status);c(new $(C,S.message))}else c(new $(V.UNKNOWN,"Server responded with status "+h.getStatus()))}else c(new $(V.UNAVAILABLE,"Connection failed."));break;default:G()}}finally{U(wt,`RPC '${t}' ${o} completed.`)}});const d=JSON.stringify(s);U(wt,`RPC '${t}' ${o} sending request:`,s),h.send(e,"POST",d,r,15)})}Wo(t,e,r){const s=Di(),o=[this.po,"/","google.firestore.v1.Firestore","/",t,"/channel"],l=xa(),c=Ua(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(h.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(h.useFetchStreams=!0),this.Do(h.initMessageHeaders,e,r),h.encodeInitMessageHeaders=!0;const y=o.join("");U(wt,`Creating RPC '${t}' stream ${s}: ${y}`,h);const I=l.createWebChannel(y,h);let b=!1,S=!1;const C=new vd({Fo:N=>{S?U(wt,`Not sending because RPC '${t}' stream ${s} is closed:`,N):(b||(U(wt,`Opening RPC '${t}' stream ${s} transport.`),I.open(),b=!0),U(wt,`RPC '${t}' stream ${s} sending:`,N),I.send(N))},Mo:()=>I.close()}),F=(N,L,B)=>{N.listen(L,O=>{try{B(O)}catch(H){setTimeout(()=>{throw H},0)}})};return F(I,an.EventType.OPEN,()=>{S||(U(wt,`RPC '${t}' stream ${s} transport opened.`),C.Qo())}),F(I,an.EventType.CLOSE,()=>{S||(S=!0,U(wt,`RPC '${t}' stream ${s} transport closed`),C.Uo())}),F(I,an.EventType.ERROR,N=>{S||(S=!0,wr(wt,`RPC '${t}' stream ${s} transport errored:`,N),C.Uo(new $(V.UNAVAILABLE,"The operation could not be completed")))}),F(I,an.EventType.MESSAGE,N=>{var L;if(!S){const B=N.data[0];lt(!!B);const O=B,H=(O==null?void 0:O.error)||((L=O[0])===null||L===void 0?void 0:L.error);if(H){U(wt,`RPC '${t}' stream ${s} received error:`,H);const M=H.status;let z=function(p){const _=ut[p];if(_!==void 0)return Sf(_)}(M),E=H.message;z===void 0&&(z=V.INTERNAL,E="Unknown error status: "+M+" with message "+H.message),S=!0,C.Uo(new $(z,E)),I.close()}else U(wt,`RPC '${t}' stream ${s} received:`,B),C.Ko(B)}}),F(c,Fa.STAT_EVENT,N=>{N.stat===Ti.PROXY?U(wt,`RPC '${t}' stream ${s} detected buffering proxy`):N.stat===Ti.NOPROXY&&U(wt,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{C.$o()},0),C}}function ci(){return typeof document<"u"?document:null}/**
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
 */function Sr(n){return new Cf(n,!0)}/**
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
 */class Tl{constructor(t,e,r=1e3,s=1.5,o=6e4){this.Ti=t,this.timerId=e,this.Go=r,this.zo=s,this.jo=o,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(t){this.cancel();const e=Math.floor(this.Ho+this.e_()),r=Math.max(0,Date.now()-this.Yo),s=Math.max(0,e-r);s>0&&U("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ho} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,s,()=>(this.Yo=Date.now(),t())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
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
 */const ia="PersistentStream";class Td{constructor(t,e,r,s,o,l,c,h){this.Ti=t,this.n_=r,this.r_=s,this.connection=o,this.authCredentialsProvider=l,this.appCheckCredentialsProvider=c,this.listener=h,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new Tl(t,e)}u_(){return this.state===1||this.state===5||this.c_()}c_(){return this.state===2||this.state===3}start(){this.__=0,this.state!==4?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&this.s_===null&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(t){this.E_(),this.stream.send(t)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(t,e){this.E_(),this.d_(),this.a_.cancel(),this.i_++,t!==4?this.a_.reset():e&&e.code===V.RESOURCE_EXHAUSTED?(ve(e.toString()),ve("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):e&&e.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.A_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Lo(e)}A_(){}auth(){this.state=1;const t=this.R_(this.i_),e=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.i_===e&&this.V_(r,s)},r=>{t(()=>{const s=new $(V.UNKNOWN,"Fetching auth token failed: "+r.message);return this.m_(s)})})}V_(t,e){const r=this.R_(this.i_);this.stream=this.f_(t,e),this.stream.xo(()=>{r(()=>this.listener.xo())}),this.stream.No(()=>{r(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(s=>{r(()=>this.m_(s))}),this.stream.onMessage(s=>{r(()=>++this.__==1?this.g_(s):this.onNext(s))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(t){return U(ia,`close with error: ${t}`),this.stream=null,this.close(4,t)}R_(t){return e=>{this.Ti.enqueueAndForget(()=>this.i_===t?e():(U(ia,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Id extends Td{constructor(t,e,r,s,o,l){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,r,s,l),this.serializer=o}get S_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.S_&&this.b_([])}f_(t,e){return this.connection.Wo("Write",t,e)}g_(t){return lt(!!t.streamToken),this.lastStreamToken=t.streamToken,lt(!t.writeResults||t.writeResults.length===0),this.listener.D_()}onNext(t){lt(!!t.streamToken),this.lastStreamToken=t.streamToken,this.a_.reset();const e=Ff(t.writeResults,t.commitTime),r=Le(t.commitTime);return this.listener.v_(r,e)}C_(){const t={};t.database=Of(this.serializer),this.I_(t)}b_(t){const e={streamToken:this.lastStreamToken,writes:t.map(r=>Lf(this.serializer,r))};this.I_(e)}}/**
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
 */class Ad{}class wd extends Ad{constructor(t,e,r,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=s,this.F_=!1}M_(){if(this.F_)throw new $(V.FAILED_PRECONDITION,"The client has already been terminated.")}So(t,e,r,s){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.So(t,Ci(e,r),s,o,l)).catch(o=>{throw o.name==="FirebaseError"?(o.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new $(V.UNKNOWN,o.toString())})}Co(t,e,r,s,o){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([l,c])=>this.connection.Co(t,Ci(e,r),s,l,c,o)).catch(l=>{throw l.name==="FirebaseError"?(l.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new $(V.UNKNOWN,l.toString())})}terminate(){this.F_=!0,this.connection.terminate()}}class bd{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){this.x_===0&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(t){this.state==="Online"?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.L_("Offline")))}set(t){this.Q_(),this.x_=0,t==="Online"&&(this.N_=!1),this.L_(t)}L_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}k_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(ve(e),this.N_=!1):U("OnlineStateTracker",e)}Q_(){this.O_!==null&&(this.O_.cancel(),this.O_=null)}}/**
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
 */const wn="RemoteStore";class Rd{constructor(t,e,r,s,o){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.U_=[],this.K_=new Map,this.W_=new Set,this.G_=[],this.z_=o,this.z_.To(l=>{r.enqueueAndForget(async()=>{Rn(this)&&(U(wn,"Restarting streams for network reachability change."),await async function(h){const d=nt(h);d.W_.add(4),await bn(d),d.j_.set("Unknown"),d.W_.delete(4),await Cr(d)}(this))})}),this.j_=new bd(r,s)}}async function Cr(n){if(Rn(n))for(const t of n.G_)await t(!0)}async function bn(n){for(const t of n.G_)await t(!1)}function Rn(n){return nt(n).W_.size===0}async function Il(n,t,e){if(!In(t))throw t;n.W_.add(1),await bn(n),n.j_.set("Offline"),e||(e=()=>dd(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{U(wn,"Retrying IndexedDB access"),await e(),n.W_.delete(1),await Cr(n)})}function Al(n,t){return t().catch(e=>Il(n,e,t))}async function Vr(n){const t=nt(n),e=ae(t);let r=t.U_.length>0?t.U_[t.U_.length-1].batchId:Bi;for(;Pd(t);)try{const s=await pd(t.localStore,r);if(s===null){t.U_.length===0&&e.P_();break}r=s.batchId,Sd(t,s)}catch(s){await Il(t,s)}wl(t)&&bl(t)}function Pd(n){return Rn(n)&&n.U_.length<10}function Sd(n,t){n.U_.push(t);const e=ae(n);e.c_()&&e.S_&&e.b_(t.mutations)}function wl(n){return Rn(n)&&!ae(n).u_()&&n.U_.length>0}function bl(n){ae(n).start()}async function Cd(n){ae(n).C_()}async function Vd(n){const t=ae(n);for(const e of n.U_)t.b_(e.mutations)}async function Dd(n,t,e){const r=n.U_.shift(),s=Qi.from(r,t,e);await Al(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await Vr(n)}async function kd(n,t){t&&ae(n).S_&&await async function(r,s){if(function(l){return Pf(l)&&l!==V.ABORTED}(s.code)){const o=r.U_.shift();ae(r).h_(),await Al(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,s)),await Vr(r)}}(n,t),wl(n)&&bl(n)}async function sa(n,t){const e=nt(n);e.asyncQueue.verifyOperationInProgress(),U(wn,"RemoteStore received new credentials");const r=Rn(e);e.W_.add(3),await bn(e),r&&e.j_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.W_.delete(3),await Cr(e)}async function Nd(n,t){const e=nt(n);t?(e.W_.delete(2),await Cr(e)):t||(e.W_.add(2),await bn(e),e.j_.set("Unknown"))}function ae(n){return n.Y_||(n.Y_=function(e,r,s){const o=nt(e);return o.M_(),new Id(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(n.datastore,n.asyncQueue,{xo:()=>Promise.resolve(),No:Cd.bind(null,n),Lo:kd.bind(null,n),D_:Vd.bind(null,n),v_:Dd.bind(null,n)}),n.G_.push(async t=>{t?(n.Y_.h_(),await Vr(n)):(await n.Y_.stop(),n.U_.length>0&&(U(wn,`Stopping write stream with ${n.U_.length} pending writes`),n.U_=[]))})),n.Y_}/**
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
 */class Zi{constructor(t,e,r,s,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=s,this.removalCallback=o,this.deferred=new me,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(l=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,s,o){const l=Date.now()+r,c=new Zi(t,e,l,s,o);return c.start(r),c}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new $(V.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Rl(n,t){if(ve("AsyncQueue",`${t}: ${n}`),In(n))return new $(V.UNAVAILABLE,`${t}: ${n}`);throw n}class Od{constructor(){this.queries=oa(),this.onlineState="Unknown",this.ia=new Set}terminate(){(function(e,r){const s=nt(e),o=s.queries;s.queries=oa(),o.forEach((l,c)=>{for(const h of c.ta)h.onError(r)})})(this,new $(V.ABORTED,"Firestore shutting down"))}}function oa(){return new Ie(n=>il(n),rl)}function Md(n){n.ia.forEach(t=>{t.next()})}var aa,la;(la=aa||(aa={}))._a="default",la.Cache="cache";const Ld="SyncEngine";class Fd{constructor(t,e,r,s,o,l){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=s,this.currentUser=o,this.maxConcurrentLimboResolutions=l,this.La={},this.ka=new Ie(c=>il(c),rl),this.qa=new Map,this.Qa=new Set,this.$a=new Dt(q.comparator),this.Ua=new Map,this.Ka=new Xi,this.Wa={},this.Ga=new Map,this.za=je.Kn(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return this.ja===!0}}async function Ud(n,t,e){const r=$d(n);try{const s=await function(l,c){const h=nt(l),d=dt.now(),y=c.reduce((S,C)=>S.add(C.key),Rt());let I,b;return h.persistence.runTransaction("Locally write mutations","readwrite",S=>{let C=mr(),F=Rt();return h.ds.getEntries(S,y).next(N=>{C=N,C.forEach((L,B)=>{B.isValidDocument()||(F=F.add(L))})}).next(()=>h.localDocuments.getOverlayedDocuments(S,C)).next(N=>{I=N;const L=[];for(const B of c){const O=Af(B,I.get(B.key).overlayedDocument);O!=null&&L.push(new Ae(B.key,O,Xa(O.value.mapValue),Kt.exists(!0)))}return h.mutationQueue.addMutationBatch(S,d,L,c)}).next(N=>{b=N;const L=N.applyToLocalDocumentSet(I,F);return h.documentOverlayCache.saveOverlays(S,N.batchId,L)})}).then(()=>({batchId:b.batchId,changes:ol(I)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(s.batchId),function(l,c,h){let d=l.Wa[l.currentUser.toKey()];d||(d=new Dt(X)),d=d.insert(c,h),l.Wa[l.currentUser.toKey()]=d}(r,s.batchId,e),await Dr(r,s.changes),await Vr(r.remoteStore)}catch(s){const o=Rl(s,"Failed to persist write");e.reject(o)}}function ua(n,t,e){const r=nt(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const s=[];r.ka.forEach((o,l)=>{const c=l.view.sa(t);c.snapshot&&s.push(c.snapshot)}),function(l,c){const h=nt(l);h.onlineState=c;let d=!1;h.queries.forEach((y,I)=>{for(const b of I.ta)b.sa(c)&&(d=!0)}),d&&Md(h)}(r.eventManager,t),s.length&&r.La.p_(s),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function xd(n,t){const e=nt(n),r=t.batch.batchId;try{const s=await fd(e.localStore,t);Sl(e,r,null),Pl(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await Dr(e,s)}catch(s){await Ui(s)}}async function Bd(n,t,e){const r=nt(n);try{const s=await function(l,c){const h=nt(l);return h.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let y;return h.mutationQueue.lookupMutationBatch(d,c).next(I=>(lt(I!==null),y=I.keys(),h.mutationQueue.removeMutationBatch(d,I))).next(()=>h.mutationQueue.performConsistencyCheck(d)).next(()=>h.documentOverlayCache.removeOverlaysForBatchId(d,y,c)).next(()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,y)).next(()=>h.localDocuments.getDocuments(d,y))})}(r.localStore,t);Sl(r,t,e),Pl(r,t),r.sharedClientState.updateMutationState(t,"rejected",e),await Dr(r,s)}catch(s){await Ui(s)}}function Pl(n,t){(n.Ga.get(t)||[]).forEach(e=>{e.resolve()}),n.Ga.delete(t)}function Sl(n,t,e){const r=nt(n);let s=r.Wa[r.currentUser.toKey()];if(s){const o=s.get(t);o&&(e?o.reject(e):o.resolve(),s=s.remove(t)),r.Wa[r.currentUser.toKey()]=s}}async function Dr(n,t,e){const r=nt(n),s=[],o=[],l=[];r.ka.isEmpty()||(r.ka.forEach((c,h)=>{l.push(r.Ha(h,t,e).then(d=>{var y;if((d||e)&&r.isPrimaryClient){const I=d?!d.fromCache:(y=void 0)===null||y===void 0?void 0:y.current;r.sharedClientState.updateQueryState(h.targetId,I?"current":"not-current")}if(d){s.push(d);const I=Ji.Yi(h.targetId,d);o.push(I)}}))}),await Promise.all(l),r.La.p_(s),await async function(h,d){const y=nt(h);try{await y.persistence.runTransaction("notifyLocalViewChanges","readwrite",I=>R.forEach(d,b=>R.forEach(b.Hi,S=>y.persistence.referenceDelegate.addReference(I,b.targetId,S)).next(()=>R.forEach(b.Ji,S=>y.persistence.referenceDelegate.removeReference(I,b.targetId,S)))))}catch(I){if(!In(I))throw I;U(ud,"Failed to update sequence numbers: "+I)}for(const I of d){const b=I.targetId;if(!I.fromCache){const S=y.Ts.get(b),C=S.snapshotVersion,F=S.withLastLimboFreeSnapshotVersion(C);y.Ts=y.Ts.insert(b,F)}}}(r.localStore,o))}async function jd(n,t){const e=nt(n);if(!e.currentUser.isEqual(t)){U(Ld,"User change. New user:",t.toKey());const r=await El(e.localStore,t);e.currentUser=t,function(o,l){o.Ga.forEach(c=>{c.forEach(h=>{h.reject(new $(V.CANCELLED,l))})}),o.Ga.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await Dr(e,r.Rs)}}function $d(n){const t=nt(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=xd.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Bd.bind(null,t),t}class vr{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=Sr(t.databaseInfo.databaseId),this.sharedClientState=this.Za(t),this.persistence=this.Xa(t),await this.persistence.start(),this.localStore=this.eu(t),this.gcScheduler=this.tu(t,this.localStore),this.indexBackfillerScheduler=this.nu(t,this.localStore)}tu(t,e){return null}nu(t,e){return null}eu(t){return hd(this.persistence,new ld,t.initialUser,this.serializer)}Xa(t){return new vl(Yi.ri,this.serializer)}Za(t){return new md}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}vr.provider={build:()=>new vr};class zd extends vr{constructor(t){super(),this.cacheSizeBytes=t}tu(t,e){lt(this.persistence.referenceDelegate instanceof yr);const r=this.persistence.referenceDelegate.garbageCollector;return new Kf(r,t.asyncQueue,e)}Xa(t){const e=this.cacheSizeBytes!==void 0?Vt.withCacheSize(this.cacheSizeBytes):Vt.DEFAULT;return new vl(r=>yr.ri(r,e),this.serializer)}}class ki{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>ua(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=jd.bind(null,this.syncEngine),await Nd(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new Od}()}createDatastore(t){const e=Sr(t.databaseInfo.databaseId),r=function(o){return new Ed(o)}(t.databaseInfo);return function(o,l,c,h){return new wd(o,l,c,h)}(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return function(r,s,o,l,c){return new Rd(r,s,o,l,c)}(this.localStore,this.datastore,t.asyncQueue,e=>ua(this.syncEngine,e,0),function(){return ra.D()?new ra:new gd}())}createSyncEngine(t,e){return function(s,o,l,c,h,d,y){const I=new Fd(s,o,l,c,h,d);return y&&(I.ja=!0),I}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(s){const o=nt(s);U(wn,"RemoteStore shutting down."),o.W_.add(5),await bn(o),o.z_.shutdown(),o.j_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}ki.provider={build:()=>new ki};/**
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
 */const le="FirestoreClient";class qd{constructor(t,e,r,s,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=s,this.user=bt.UNAUTHENTICATED,this.clientId=ja.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,async l=>{U(le,"Received user=",l.uid),await this.authCredentialListener(l),this.user=l}),this.appCheckCredentials.start(r,l=>(U(le,"Received new app check token=",l),this.appCheckCredentialListener(l,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new me;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=Rl(e,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function hi(n,t){n.asyncQueue.verifyOperationInProgress(),U(le,"Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await El(t.localStore,s),r=s)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function ca(n,t){n.asyncQueue.verifyOperationInProgress();const e=await Hd(n);U(le,"Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(r=>sa(t.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>sa(t.remoteStore,s)),n._onlineComponents=t}async function Hd(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){U(le,"Using user provided OfflineComponentProvider");try{await hi(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(s){return s.name==="FirebaseError"?s.code===V.FAILED_PRECONDITION||s.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(e))throw e;wr("Error using user provided cache. Falling back to memory cache: "+e),await hi(n,new vr)}}else U(le,"Using default OfflineComponentProvider"),await hi(n,new zd(void 0));return n._offlineComponents}async function Gd(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(U(le,"Using user provided OnlineComponentProvider"),await ca(n,n._uninitializedComponentsProvider._online)):(U(le,"Using default OnlineComponentProvider"),await ca(n,new ki))),n._onlineComponents}function Kd(n){return Gd(n).then(t=>t.syncEngine)}/**
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
 */function Cl(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
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
 */const ha=new Map;/**
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
 */function Vl(n,t,e){if(!e)throw new $(V.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function Wd(n,t,e,r){if(t===!0&&r===!0)throw new $(V.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function fa(n){if(!q.isDocumentKey(n))throw new $(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function da(n){if(q.isDocumentKey(n))throw new $(V.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function ts(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":G()}function Dl(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new $(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=ts(n);throw new $(V.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
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
 */const kl="firestore.googleapis.com",pa=!0;class ma{constructor(t){var e,r;if(t.host===void 0){if(t.ssl!==void 0)throw new $(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=kl,this.ssl=pa}else this.host=t.host,this.ssl=(e=t.ssl)!==null&&e!==void 0?e:pa;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=yl;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<Hf)throw new $(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Wd("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Cl((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new $(V.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new $(V.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new $(V.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class kr{constructor(t,e,r,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ma({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new $(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new $(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ma(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new wh;switch(r.type){case"firstParty":return new Sh(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new $(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const r=ha.get(e);r&&(U("ComponentProvider","Removing Datastore"),ha.delete(e),r.terminate())}(this),Promise.resolve()}}function Qd(n,t,e,r={}){var s;const o=(n=Dl(n,kr))._getSettings(),l=Object.assign(Object.assign({},o),{emulatorOptions:n._getEmulatorOptions()}),c=`${t}:${e}`;o.host!==kl&&o.host!==c&&wr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const h=Object.assign(Object.assign({},o),{host:c,ssl:!1,emulatorOptions:r});if(!or(h,l)&&(n._setSettings(h),r.mockUserToken)){let d,y;if(typeof r.mockUserToken=="string")d=r.mockUserToken,y=bt.MOCK_USER;else{d=rc(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const I=r.mockUserToken.sub||r.mockUserToken.user_id;if(!I)throw new $(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");y=new bt(I)}n._authCredentials=new bh(new Ba(d,y))}}/**
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
 */class es{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new es(this.firestore,t,this._query)}}class Wt{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new re(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Wt(this.firestore,t,this._key)}}class re extends es{constructor(t,e,r){super(t,e,af(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Wt(this.firestore,null,new q(t))}withConverter(t){return new re(this.firestore,t,this._path)}}function Xd(n,t,...e){if(n=pn(n),Vl("collection","path",t),n instanceof kr){const r=at.fromString(t,...e);return da(r),new re(n,null,r)}{if(!(n instanceof Wt||n instanceof re))throw new $(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(at.fromString(t,...e));return da(r),new re(n.firestore,null,r)}}function Yd(n,t,...e){if(n=pn(n),arguments.length===1&&(t=ja.newId()),Vl("doc","path",t),n instanceof kr){const r=at.fromString(t,...e);return fa(r),new Wt(n,null,new q(r))}{if(!(n instanceof Wt||n instanceof re))throw new $(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(at.fromString(t,...e));return fa(r),new Wt(n.firestore,n instanceof re?n.converter:null,new q(r))}}/**
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
 */const ga="AsyncQueue";class _a{constructor(t=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new Tl(this,"async_queue_retry"),this.Su=()=>{const r=ci();r&&U(ga,"Visibility state changed to "+r.visibilityState),this.a_.t_()},this.bu=t;const e=ci();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Su)}get isShuttingDown(){return this.mu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Du(),this.vu(t)}enterRestrictedMode(t){if(!this.mu){this.mu=!0,this.yu=t||!1;const e=ci();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.Su)}}enqueue(t){if(this.Du(),this.mu)return new Promise(()=>{});const e=new me;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Vu.push(t),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(t){if(!In(t))throw t;U(ga,"Operation failed with retryable error: "+t)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(t){const e=this.bu.then(()=>(this.pu=!0,t().catch(r=>{this.gu=r,this.pu=!1;const s=function(l){let c=l.message||"";return l.stack&&(c=l.stack.includes(l.message)?l.stack:l.message+`
`+l.stack),c}(r);throw ve("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.pu=!1,r))));return this.bu=e,e}enqueueAfterDelay(t,e,r){this.Du(),this.wu.indexOf(t)>-1&&(e=0);const s=Zi.createAndSchedule(this,t,e,r,o=>this.Fu(o));return this.fu.push(s),s}Du(){this.gu&&G()}verifyOperationInProgress(){}async Mu(){let t;do t=this.bu,await t;while(t!==this.bu)}xu(t){for(const e of this.fu)if(e.timerId===t)return!0;return!1}Ou(t){return this.Mu().then(()=>{this.fu.sort((e,r)=>e.targetTimeMs-r.targetTimeMs);for(const e of this.fu)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.Mu()})}Nu(t){this.wu.push(t)}Fu(t){const e=this.fu.indexOf(t);this.fu.splice(e,1)}}class Nl extends kr{constructor(t,e,r,s){super(t,e,r,s),this.type="firestore",this._queue=new _a,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new _a(t),this._firestoreClient=void 0,await t}}}function Jd(n,t){const e=typeof n=="object"?n:dh(),r=typeof n=="string"?n:hr,s=lh(e,"firestore").getImmediate({identifier:r});if(!s._initialized){const o=ec("firestore");o&&Qd(s,...o)}return s}function Zd(n){if(n._terminated)throw new $(V.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||tp(n),n._firestoreClient}function tp(n){var t,e,r;const s=n._freezeSettings(),o=function(c,h,d,y){return new Hh(c,h,d,y.host,y.ssl,y.experimentalForceLongPolling,y.experimentalAutoDetectLongPolling,Cl(y.experimentalLongPollingOptions),y.useFetchStreams)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((e=s.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new qd(n._authCredentials,n._appCheckCredentials,n._queue,o,n._componentsProvider&&function(c){const h=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(h),_online:h}}(n._componentsProvider))}/**
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
 */class Tn{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Tn(Bt.fromBase64String(t))}catch(e){throw new $(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Tn(Bt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class Ol{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new $(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new yt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class Ml{constructor(t){this._methodName=t}}/**
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
 */class Ll{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new $(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new $(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return X(this._lat,t._lat)||X(this._long,t._long)}}/**
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
 */class Fl{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(r,s){if(r.length!==s.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==s[o])return!1;return!0}(this._values,t._values)}}/**
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
 */const ep=/^__.*__$/;class np{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return this.fieldMask!==null?new Ae(t,this.data,this.fieldMask,e,this.fieldTransforms):new An(t,this.data,e,this.fieldTransforms)}}function Ul(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw G()}}class ns{constructor(t,e,r,s,o,l){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=s,o===void 0&&this.Bu(),this.fieldTransforms=o||[],this.fieldMask=l||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(t){return new ns(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.ku({path:r,Qu:!1});return s.$u(t),s}Uu(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.ku({path:r,Qu:!1});return s.Bu(),s}Ku(t){return this.ku({path:void 0,Qu:!0})}Wu(t){return Er(t,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}Bu(){if(this.path)for(let t=0;t<this.path.length;t++)this.$u(this.path.get(t))}$u(t){if(t.length===0)throw this.Wu("Document fields must not be empty");if(Ul(this.Lu)&&ep.test(t))throw this.Wu('Document fields cannot begin and end with "__"')}}class rp{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||Sr(t)}ju(t,e,r,s=!1){return new ns({Lu:t,methodName:e,zu:r,path:yt.emptyPath(),Qu:!1,Gu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ip(n){const t=n._freezeSettings(),e=Sr(n._databaseId);return new rp(n._databaseId,!!t.ignoreUndefinedProperties,e)}function sp(n,t,e,r,s,o={}){const l=n.ju(o.merge||o.mergeFields?2:0,t,e,s);$l("Data must be an object, but it was:",l,r);const c=Bl(r,l);let h,d;if(o.merge)h=new Ut(l.fieldMask),d=l.fieldTransforms;else if(o.mergeFields){const y=[];for(const I of o.mergeFields){const b=op(t,I,e);if(!l.contains(b))throw new $(V.INVALID_ARGUMENT,`Field '${b}' is specified in your field mask but missing from your input data.`);up(y,b)||y.push(b)}h=new Ut(y),d=l.fieldTransforms.filter(I=>h.covers(I.field))}else h=null,d=l.fieldTransforms;return new np(new Ft(c),h,d)}function xl(n,t){if(jl(n=pn(n)))return $l("Unsupported field value:",t,n),Bl(n,t);if(n instanceof Ml)return function(r,s){if(!Ul(s.Lu))throw s.Wu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Wu(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(s);o&&s.fieldTransforms.push(o)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.Qu&&t.Lu!==4)throw t.Wu("Nested arrays are not supported");return function(r,s){const o=[];let l=0;for(const c of r){let h=xl(c,s.Ku(l));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),l++}return{arrayValue:{values:o}}}(n,t)}return function(r,s){if((r=pn(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return _f(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=dt.fromDate(r);return{timestampValue:Si(s.serializer,o)}}if(r instanceof dt){const o=new dt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Si(s.serializer,o)}}if(r instanceof Ll)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Tn)return{bytesValue:Vf(s.serializer,r._byteString)};if(r instanceof Wt){const o=s.databaseId,l=r.firestore._databaseId;if(!l.isEqual(o))throw s.Wu(`Document reference is for database ${l.projectId}/${l.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:gl(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Fl)return function(l,c){return{mapValue:{fields:{[Wa]:{stringValue:Qa},[Ai]:{arrayValue:{values:l.toArray().map(d=>{if(typeof d!="number")throw c.Wu("VectorValues must only contain numeric values.");return Wi(c.serializer,d)})}}}}}}(r,s);throw s.Wu(`Unsupported field value: ${ts(r)}`)}(n,t)}function Bl(n,t){const e={};return za(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):qe(n,(r,s)=>{const o=xl(s,t.qu(r));o!=null&&(e[r]=o)}),{mapValue:{fields:e}}}function jl(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof dt||n instanceof Ll||n instanceof Tn||n instanceof Wt||n instanceof Ml||n instanceof Fl)}function $l(n,t,e){if(!jl(e)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(e)){const r=ts(e);throw r==="an object"?t.Wu(n+" a custom object"):t.Wu(n+" "+r)}}function op(n,t,e){if((t=pn(t))instanceof Ol)return t._internalPath;if(typeof t=="string")return lp(n,t);throw Er("Field path arguments must be of type string or ",n,!1,void 0,e)}const ap=new RegExp("[~\\*/\\[\\]]");function lp(n,t,e){if(t.search(ap)>=0)throw Er(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new Ol(...t.split("."))._internalPath}catch{throw Er(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function Er(n,t,e,r,s){const o=r&&!r.isEmpty(),l=s!==void 0;let c=`Function ${t}() called with invalid data`;e&&(c+=" (via `toFirestore()`)"),c+=". ";let h="";return(o||l)&&(h+=" (found",o&&(h+=` in field ${r}`),l&&(h+=` in document ${s}`),h+=")"),new $(V.INVALID_ARGUMENT,c+n+h)}function up(n,t){return n.some(e=>e.isEqual(t))}/**
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
 */function cp(n,t,e){let r;return r=n?n.toFirestore(t):t,r}function hp(n,t){const e=Dl(n.firestore,Nl),r=Yd(n),s=cp(n.converter,t);return fp(e,[sp(ip(n.firestore),"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,Kt.exists(!1))]).then(()=>r)}function fp(n,t){return function(r,s){const o=new me;return r.asyncQueue.enqueueAndForget(async()=>Ud(await Kd(r),s,o)),o.promise}(Zd(n),t)}(function(t,e=!0){(function(s){ze=s})(fh),lr(new mn("firestore",(r,{instanceIdentifier:s,options:o})=>{const l=r.getProvider("app").getImmediate(),c=new Nl(new Rh(r.getProvider("auth-internal")),new Ch(l,r.getProvider("app-check-internal")),function(d,y){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new $(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new fr(d.options.projectId,y)}(l,s),l);return o=Object.assign({useFetchStreams:e},o),c._setSettings(o),c},"PUBLIC").setMultipleInstances(!0)),Me(Do,ko,t),Me(Do,ko,"esm2017")})();var dp="firebase",pp="11.5.0";/**
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
 */Me(dp,pp,"app");const mp={apiKey:"AIzaSyDNZCXCOGwTjyYXCzDLKGEr7dzj7XKvFNk",authDomain:"drents-elftal.firebaseapp.com",projectId:"drents-elftal",storageBucket:"drents-elftal.firebasestorage.app",messagingSenderId:"542166909378",appId:"1:542166909378:web:1c3cd5336f6168067c965b",measurementId:"G-1F8PEJ34WQ"},gp=ka(mp),_p=Jd(gp);async function yp(n,t,e){try{const r={players:n,email:t,allowNewsletter:e,submittedAt:new Date};return(await hp(Xd(_p,"teams"),r)).id}catch(r){throw console.error("Error submitting team:",r),r}}function vp(n){let t;return{c(){t=ot("Verstuur je stem")},m(e,r){tt(e,t,r)},d(e){e&&J(t)}}}function Ep(n){let t;return{c(){t=ot("Versturen...")},m(e,r){tt(e,t,r)},d(e){e&&J(t)}}}function Tp(n){let t,e,r,s,o,l,c,h,d,y,I,b,S,C,F;function N(O,H){return O[2]?Ep:vp}let L=N(n),B=L(n);return y=new xu({}),y.$on("playersUpdate",n[4]),b=new qu({props:{isOpen:n[0],isSubmitting:n[2],submitError:n[3]}}),b.$on("close",n[7]),b.$on("submit",n[5]),{c(){t=x("main"),e=x("div"),e.innerHTML='<h1 class="svelte-tnifld">Drents Elftal</h1> <p class="subtitle svelte-tnifld">Create your best eleven</p>',r=Q(),s=x("div"),o=x("button"),B.c(),c=Q(),h=x("div"),d=x("div"),mi(y.$$.fragment),I=Q(),mi(b.$$.fragment),P(e,"class","header svelte-tnifld"),P(o,"class","submit-button svelte-tnifld"),o.disabled=l=!n[1]||n[2],P(s,"class","controls svelte-tnifld"),P(d,"class","pitch-section svelte-tnifld"),P(h,"class","container svelte-tnifld"),P(t,"class","svelte-tnifld")},m(O,H){tt(O,t,H),D(t,e),D(t,r),D(t,s),D(s,o),B.m(o,null),D(t,c),D(t,h),D(h,d),rr(y,d,null),D(t,I),rr(b,t,null),S=!0,C||(F=ht(o,"click",n[6]),C=!0)},p(O,[H]){L!==(L=N(O))&&(B.d(1),B=L(O),B&&(B.c(),B.m(o,null))),(!S||H&6&&l!==(l=!O[1]||O[2]))&&(o.disabled=l);const M={};H&1&&(M.isOpen=O[0]),H&4&&(M.isSubmitting=O[2]),H&8&&(M.submitError=O[3]),b.$set(M)},i(O){S||(nr(y.$$.fragment,O),nr(b.$$.fragment,O),S=!0)},o(O){pi(y.$$.fragment,O),pi(b.$$.fragment,O),S=!1},d(O){O&&J(t),B.d(),ir(y),ir(b),C=!1,F()}}}function Ip(n,t,e){let r=!1,s=!1,o={},l=!1,c=null;function h(b){e(1,s=b.detail.filledPositions===11),o=b.detail.players}async function d(b){e(2,l=!0),e(3,c=null);try{await yp(o,b.detail.email,b.detail.consent),e(0,r=!1)}catch(S){e(3,c="Er is iets misgegaan bij het versturen. Probeer het later opnieuw."),console.error("Error submitting team:",S)}finally{e(2,l=!1)}}return[r,s,l,c,h,d,()=>e(0,r=!0),()=>e(0,r=!1)]}class Ap extends Ar{constructor(t){super(),Ir(this,t,Ip,Tp,Tr,{})}}new Ap({target:document.getElementById("app")});
