import{z as Re,A as Ce,F as A,B as me,C as ve,r as y,p as P,D as L,l as O,h as F,E as H,G as Le,T as he,Q as W,o as S,c as M,w as b,a as v,u as _,n as D,k as je,b as g,d as E,f as k,s as J,e as B,j as ee,i as te,y as Ue,O as Be,t as K,H as Ve,g as ge}from"./app-0jD_U881.js";import{A as He}from"./ApplicationLogo-kOi6OoIv.js";import{_ as We,a as be}from"./SecondaryButton-DOSrhAGb.js";import{_ as Ke,a as ye,b as ze}from"./TextInput-owTTohJd.js";import{P as _e}from"./PrimaryButton--FYT-SEj.js";import{_ as xe}from"./_plugin-vue_export-helper-x3n3nnut.js";function z(e,t,...n){if(e in t){let a=t[e];return typeof a=="function"?a(...n):a}let r=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(a=>`"${a}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,z),r}var Z=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(Z||{}),Ge=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(Ge||{});function G({visible:e=!0,features:t=0,ourProps:n,theirProps:r,...a}){var o;let l=Ie(r,n),i=Object.assign(a,{props:l});if(e||t&2&&l.static)return q(i);if(t&1){let d=(o=l.unmount)==null||o?0:1;return z(d,{0(){return null},1(){return q({...a,props:{...l,hidden:!0,style:{display:"none"}}})}})}return q(i)}function q({props:e,attrs:t,slots:n,slot:r,name:a}){var o,l;let{as:i,...d}=Ye(e,["unmount","static"]),u=(o=n.default)==null?void 0:o.call(n,r),s={};if(r){let h=!1,p=[];for(let[m,f]of Object.entries(r))typeof f=="boolean"&&(h=!0),f===!0&&p.push(m);h&&(s["data-headlessui-state"]=p.join(" "))}if(i==="template"){if(u=we(u??[]),Object.keys(d).length>0||Object.keys(t).length>0){let[h,...p]=u??[];if(!qe(h)||p.length>0)throw new Error(['Passing props on "template"!',"",`The current component <${a} /> is rendering a "template".`,"However we need to passthrough the following props:",Object.keys(d).concat(Object.keys(t)).map(c=>c.trim()).filter((c,w,T)=>T.indexOf(c)===w).sort((c,w)=>c.localeCompare(w)).map(c=>`  - ${c}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".',"Render a single element as the child so that we can forward the props onto that element."].map(c=>`  - ${c}`).join(`
`)].join(`
`));let m=Ie((l=h.props)!=null?l:{},d),f=Re(h,m);for(let c in m)c.startsWith("on")&&(f.props||(f.props={}),f.props[c]=m[c]);return f}return Array.isArray(u)&&u.length===1?u[0]:u}return Ce(i,Object.assign({},d,s),{default:()=>u})}function we(e){return e.flatMap(t=>t.type===A?we(t.children):[t])}function Ie(...e){if(e.length===0)return{};if(e.length===1)return e[0];let t={},n={};for(let r of e)for(let a in r)a.startsWith("on")&&typeof r[a]=="function"?(n[a]!=null||(n[a]=[]),n[a].push(r[a])):t[a]=r[a];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(n).map(r=>[r,void 0])));for(let r in n)Object.assign(t,{[r](a,...o){let l=n[r];for(let i of l){if(a instanceof Event&&a.defaultPrevented)return;i(a,...o)}}});return t}function Ye(e,t=[]){let n=Object.assign({},e);for(let r of t)r in n&&delete n[r];return n}function qe(e){return e==null?!1:typeof e.type=="string"||typeof e.type=="object"||typeof e.type=="function"}let Ze=0;function Qe(){return++Ze}function ne(){return Qe()}var I=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(I||{});function Xe(e){throw new Error("Unexpected object: "+e)}var $=(e=>(e[e.First=0]="First",e[e.Previous=1]="Previous",e[e.Next=2]="Next",e[e.Last=3]="Last",e[e.Specific=4]="Specific",e[e.Nothing=5]="Nothing",e))($||{});function Je(e,t){let n=t.resolveItems();if(n.length<=0)return null;let r=t.resolveActiveIndex(),a=r??-1,o=(()=>{switch(e.focus){case 0:return n.findIndex(l=>!t.resolveDisabled(l));case 1:{let l=n.slice().reverse().findIndex((i,d,u)=>a!==-1&&u.length-d-1>=a?!1:!t.resolveDisabled(i));return l===-1?l:n.length-1-l}case 2:return n.findIndex((l,i)=>i<=a?!1:!t.resolveDisabled(l));case 3:{let l=n.slice().reverse().findIndex(i=>!t.resolveDisabled(i));return l===-1?l:n.length-1-l}case 4:return n.findIndex(l=>t.resolveId(l)===e.id);case 5:return null;default:Xe(e)}})();return o===-1?r:o}function x(e){var t;return e==null||e.value==null?null:(t=e.value.$el)!=null?t:e.value}let Se=Symbol("Context");var R=(e=>(e[e.Open=1]="Open",e[e.Closed=2]="Closed",e[e.Closing=4]="Closing",e[e.Opening=8]="Opening",e))(R||{});function et(){return me(Se,null)}function tt(e){ve(Se,e)}function ie(e,t){if(e)return e;let n=t??"button";if(typeof n=="string"&&n.toLowerCase()==="button")return"button"}function nt(e,t){let n=y(ie(e.value.type,e.value.as));return P(()=>{n.value=ie(e.value.type,e.value.as)}),L(()=>{var r;n.value||x(t)&&x(t)instanceof HTMLButtonElement&&!((r=x(t))!=null&&r.hasAttribute("type"))&&(n.value="button")}),n}var at=Object.defineProperty,rt=(e,t,n)=>t in e?at(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ue=(e,t,n)=>(rt(e,typeof t!="symbol"?t+"":t,n),n);class ot{constructor(){ue(this,"current",this.detect()),ue(this,"currentId",0)}set(t){this.current!==t&&(this.currentId=0,this.current=t)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}}let ae=new ot;function re(e){if(ae.isServer)return null;if(e instanceof Node)return e.ownerDocument;if(e!=null&&e.hasOwnProperty("value")){let t=x(e);if(t)return t.ownerDocument}return document}function lt({container:e,accept:t,walk:n,enabled:r}){L(()=>{let a=e.value;if(!a||r!==void 0&&!r.value)return;let o=re(e);if(!o)return;let l=Object.assign(d=>t(d),{acceptNode:t}),i=o.createTreeWalker(a,NodeFilter.SHOW_ELEMENT,l,!1);for(;i.nextNode();)n(i.currentNode)})}let Q=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var X=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e))(X||{}),st=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(st||{}),it=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(it||{});function Ee(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(Q)).sort((t,n)=>Math.sign((t.tabIndex||Number.MAX_SAFE_INTEGER)-(n.tabIndex||Number.MAX_SAFE_INTEGER)))}var oe=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(oe||{});function le(e,t=0){var n;return e===((n=re(e))==null?void 0:n.body)?!1:z(t,{0(){return e.matches(Q)},1(){let r=e;for(;r!==null;){if(r.matches(Q))return!0;r=r.parentElement}return!1}})}function $e(e){let t=re(e);O(()=>{t&&!le(t.activeElement,0)&&ct(e)})}var ut=(e=>(e[e.Keyboard=0]="Keyboard",e[e.Mouse=1]="Mouse",e))(ut||{});typeof window<"u"&&typeof document<"u"&&(document.addEventListener("keydown",e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",e=>{e.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:e.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));function ct(e){e==null||e.focus({preventScroll:!0})}let dt=["textarea","input"].join(",");function ft(e){var t,n;return(n=(t=e==null?void 0:e.matches)==null?void 0:t.call(e,dt))!=null?n:!1}function Fe(e,t=n=>n){return e.slice().sort((n,r)=>{let a=t(n),o=t(r);if(a===null||o===null)return 0;let l=a.compareDocumentPosition(o);return l&Node.DOCUMENT_POSITION_FOLLOWING?-1:l&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function pt(e,t){return mt(Ee(),t,{relativeTo:e})}function mt(e,t,{sorted:n=!0,relativeTo:r=null,skipElements:a=[]}={}){var o;let l=(o=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e==null?void 0:e.ownerDocument)!=null?o:document,i=Array.isArray(e)?n?Fe(e):e:Ee(e);a.length>0&&i.length>1&&(i=i.filter(f=>!a.includes(f))),r=r??l.activeElement;let d=(()=>{if(t&5)return 1;if(t&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),u=(()=>{if(t&1)return 0;if(t&2)return Math.max(0,i.indexOf(r))-1;if(t&4)return Math.max(0,i.indexOf(r))+1;if(t&8)return i.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),s=t&32?{preventScroll:!0}:{},h=0,p=i.length,m;do{if(h>=p||h+p<=0)return 0;let f=u+h;if(t&16)f=(f+p)%p;else{if(f<0)return 3;if(f>=p)return 1}m=i[f],m==null||m.focus(s),h+=d}while(m!==l.activeElement);return t&6&&ft(m)&&m.select(),2}function j(e,t,n){ae.isServer||L(r=>{document.addEventListener(e,t,n),r(()=>document.removeEventListener(e,t,n))})}function vt(e,t,n){ae.isServer||L(r=>{window.addEventListener(e,t,n),r(()=>window.removeEventListener(e,t,n))})}function ht(e,t,n=F(()=>!0)){function r(o,l){if(!n.value||o.defaultPrevented)return;let i=l(o);if(i===null||!i.getRootNode().contains(i))return;let d=function u(s){return typeof s=="function"?u(s()):Array.isArray(s)||s instanceof Set?s:[s]}(e);for(let u of d){if(u===null)continue;let s=u instanceof HTMLElement?u:x(u);if(s!=null&&s.contains(i)||o.composed&&o.composedPath().includes(s))return}return!le(i,oe.Loose)&&i.tabIndex!==-1&&o.preventDefault(),t(o,i)}let a=y(null);j("pointerdown",o=>{var l,i;n.value&&(a.value=((i=(l=o.composedPath)==null?void 0:l.call(o))==null?void 0:i[0])||o.target)},!0),j("mousedown",o=>{var l,i;n.value&&(a.value=((i=(l=o.composedPath)==null?void 0:l.call(o))==null?void 0:i[0])||o.target)},!0),j("click",o=>{a.value&&(r(o,()=>a.value),a.value=null)},!0),j("touchend",o=>r(o,()=>o.target instanceof HTMLElement?o.target:null),!0),vt("blur",o=>r(o,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}function ce(e){return[e.screenX,e.screenY]}function gt(){let e=y([-1,-1]);return{wasMoved(t){let n=ce(t);return e.value[0]===n[0]&&e.value[1]===n[1]?!1:(e.value=n,!0)},update(t){e.value=ce(t)}}}let de=/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;function fe(e){var t,n;let r=(t=e.innerText)!=null?t:"",a=e.cloneNode(!0);if(!(a instanceof HTMLElement))return r;let o=!1;for(let i of a.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))i.remove(),o=!0;let l=o?(n=a.innerText)!=null?n:"":r;return de.test(l)&&(l=l.replace(de,"")),l}function bt(e){let t=e.getAttribute("aria-label");if(typeof t=="string")return t.trim();let n=e.getAttribute("aria-labelledby");if(n){let r=n.split(" ").map(a=>{let o=document.getElementById(a);if(o){let l=o.getAttribute("aria-label");return typeof l=="string"?l.trim():fe(o).trim()}return null}).filter(Boolean);if(r.length>0)return r.join(", ")}return fe(e).trim()}function yt(e){let t=y(""),n=y("");return()=>{let r=x(e);if(!r)return"";let a=r.innerText;if(t.value===a)return n.value;let o=bt(r).trim().toLowerCase();return t.value=a,n.value=o,o}}var _t=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(_t||{}),xt=(e=>(e[e.Pointer=0]="Pointer",e[e.Other=1]="Other",e))(xt||{});function wt(e){requestAnimationFrame(()=>requestAnimationFrame(e))}let Oe=Symbol("MenuContext");function Y(e){let t=me(Oe,null);if(t===null){let n=new Error(`<${e} /> is missing a parent <Menu /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,Y),n}return t}let ke=H({name:"Menu",props:{as:{type:[Object,String],default:"template"}},setup(e,{slots:t,attrs:n}){let r=y(1),a=y(null),o=y(null),l=y([]),i=y(""),d=y(null),u=y(1);function s(p=m=>m){let m=d.value!==null?l.value[d.value]:null,f=Fe(p(l.value.slice()),w=>x(w.dataRef.domRef)),c=m?f.indexOf(m):null;return c===-1&&(c=null),{items:f,activeItemIndex:c}}let h={menuState:r,buttonRef:a,itemsRef:o,items:l,searchQuery:i,activeItemIndex:d,activationTrigger:u,closeMenu:()=>{r.value=1,d.value=null},openMenu:()=>r.value=0,goToItem(p,m,f){let c=s(),w=Je(p===$.Specific?{focus:$.Specific,id:m}:{focus:p},{resolveItems:()=>c.items,resolveActiveIndex:()=>c.activeItemIndex,resolveId:T=>T.id,resolveDisabled:T=>T.dataRef.disabled});i.value="",d.value=w,u.value=f??1,l.value=c.items},search(p){let m=i.value!==""?0:1;i.value+=p.toLowerCase();let f=(d.value!==null?l.value.slice(d.value+m).concat(l.value.slice(0,d.value+m)):l.value).find(w=>w.dataRef.textValue.startsWith(i.value)&&!w.dataRef.disabled),c=f?l.value.indexOf(f):-1;c===-1||c===d.value||(d.value=c,u.value=1)},clearSearch(){i.value=""},registerItem(p,m){let f=s(c=>[...c,{id:p,dataRef:m}]);l.value=f.items,d.value=f.activeItemIndex,u.value=1},unregisterItem(p){let m=s(f=>{let c=f.findIndex(w=>w.id===p);return c!==-1&&f.splice(c,1),f});l.value=m.items,d.value=m.activeItemIndex,u.value=1}};return ht([a,o],(p,m)=>{var f;h.closeMenu(),le(m,oe.Loose)||(p.preventDefault(),(f=x(a))==null||f.focus())},F(()=>r.value===0)),ve(Oe,h),tt(F(()=>z(r.value,{0:R.Open,1:R.Closed}))),()=>{let p={open:r.value===0,close:h.closeMenu};return G({ourProps:{},theirProps:e,slot:p,slots:t,attrs:n,name:"Menu"})}}}),De=H({name:"MenuButton",props:{disabled:{type:Boolean,default:!1},as:{type:[Object,String],default:"button"},id:{type:String,default:()=>`headlessui-menu-button-${ne()}`}},setup(e,{attrs:t,slots:n,expose:r}){let a=Y("MenuButton");r({el:a.buttonRef,$el:a.buttonRef});function o(u){switch(u.key){case I.Space:case I.Enter:case I.ArrowDown:u.preventDefault(),u.stopPropagation(),a.openMenu(),O(()=>{var s;(s=x(a.itemsRef))==null||s.focus({preventScroll:!0}),a.goToItem($.First)});break;case I.ArrowUp:u.preventDefault(),u.stopPropagation(),a.openMenu(),O(()=>{var s;(s=x(a.itemsRef))==null||s.focus({preventScroll:!0}),a.goToItem($.Last)});break}}function l(u){switch(u.key){case I.Space:u.preventDefault();break}}function i(u){e.disabled||(a.menuState.value===0?(a.closeMenu(),O(()=>{var s;return(s=x(a.buttonRef))==null?void 0:s.focus({preventScroll:!0})})):(u.preventDefault(),a.openMenu(),wt(()=>{var s;return(s=x(a.itemsRef))==null?void 0:s.focus({preventScroll:!0})})))}let d=nt(F(()=>({as:e.as,type:t.type})),a.buttonRef);return()=>{var u;let s={open:a.menuState.value===0},{id:h,...p}=e,m={ref:a.buttonRef,id:h,type:d.value,"aria-haspopup":"menu","aria-controls":(u=x(a.itemsRef))==null?void 0:u.id,"aria-expanded":a.menuState.value===0,onKeydown:o,onKeyup:l,onClick:i};return G({ourProps:m,theirProps:p,slot:s,attrs:t,slots:n,name:"MenuButton"})}}}),Me=H({name:"MenuItems",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:()=>`headlessui-menu-items-${ne()}`}},setup(e,{attrs:t,slots:n,expose:r}){let a=Y("MenuItems"),o=y(null);r({el:a.itemsRef,$el:a.itemsRef}),lt({container:F(()=>x(a.itemsRef)),enabled:F(()=>a.menuState.value===0),accept(s){return s.getAttribute("role")==="menuitem"?NodeFilter.FILTER_REJECT:s.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(s){s.setAttribute("role","none")}});function l(s){var h;switch(o.value&&clearTimeout(o.value),s.key){case I.Space:if(a.searchQuery.value!=="")return s.preventDefault(),s.stopPropagation(),a.search(s.key);case I.Enter:if(s.preventDefault(),s.stopPropagation(),a.activeItemIndex.value!==null){let p=a.items.value[a.activeItemIndex.value];(h=x(p.dataRef.domRef))==null||h.click()}a.closeMenu(),$e(x(a.buttonRef));break;case I.ArrowDown:return s.preventDefault(),s.stopPropagation(),a.goToItem($.Next);case I.ArrowUp:return s.preventDefault(),s.stopPropagation(),a.goToItem($.Previous);case I.Home:case I.PageUp:return s.preventDefault(),s.stopPropagation(),a.goToItem($.First);case I.End:case I.PageDown:return s.preventDefault(),s.stopPropagation(),a.goToItem($.Last);case I.Escape:s.preventDefault(),s.stopPropagation(),a.closeMenu(),O(()=>{var p;return(p=x(a.buttonRef))==null?void 0:p.focus({preventScroll:!0})});break;case I.Tab:s.preventDefault(),s.stopPropagation(),a.closeMenu(),O(()=>pt(x(a.buttonRef),s.shiftKey?X.Previous:X.Next));break;default:s.key.length===1&&(a.search(s.key),o.value=setTimeout(()=>a.clearSearch(),350));break}}function i(s){switch(s.key){case I.Space:s.preventDefault();break}}let d=et(),u=F(()=>d!==null?(d.value&R.Open)===R.Open:a.menuState.value===0);return()=>{var s,h;let p={open:a.menuState.value===0},{id:m,...f}=e,c={"aria-activedescendant":a.activeItemIndex.value===null||(s=a.items.value[a.activeItemIndex.value])==null?void 0:s.id,"aria-labelledby":(h=x(a.buttonRef))==null?void 0:h.id,id:m,onKeydown:l,onKeyup:i,role:"menu",tabIndex:0,ref:a.itemsRef};return G({ourProps:c,theirProps:f,slot:p,attrs:t,slots:n,features:Z.RenderStrategy|Z.Static,visible:u.value,name:"MenuItems"})}}}),C=H({name:"MenuItem",inheritAttrs:!1,props:{as:{type:[Object,String],default:"template"},disabled:{type:Boolean,default:!1},id:{type:String,default:()=>`headlessui-menu-item-${ne()}`}},setup(e,{slots:t,attrs:n,expose:r}){let a=Y("MenuItem"),o=y(null);r({el:o,$el:o});let l=F(()=>a.activeItemIndex.value!==null?a.items.value[a.activeItemIndex.value].id===e.id:!1),i=yt(o),d=F(()=>({disabled:e.disabled,get textValue(){return i()},domRef:o}));P(()=>a.registerItem(e.id,d)),Le(()=>a.unregisterItem(e.id)),L(()=>{a.menuState.value===0&&l.value&&a.activationTrigger.value!==0&&O(()=>{var c,w;return(w=(c=x(o))==null?void 0:c.scrollIntoView)==null?void 0:w.call(c,{block:"nearest"})})});function u(c){if(e.disabled)return c.preventDefault();a.closeMenu(),$e(x(a.buttonRef))}function s(){if(e.disabled)return a.goToItem($.Nothing);a.goToItem($.Specific,e.id)}let h=gt();function p(c){h.update(c)}function m(c){h.wasMoved(c)&&(e.disabled||l.value||a.goToItem($.Specific,e.id,0))}function f(c){h.wasMoved(c)&&(e.disabled||l.value&&a.goToItem($.Nothing))}return()=>{let{disabled:c}=e,w={active:l.value,disabled:c,close:a.closeMenu},{id:T,...Ae}=e;return G({ourProps:{id:T,ref:o,role:"menuitem",tabIndex:c===!0?void 0:-1,"aria-disabled":c===!0?!0:void 0,disabled:void 0,onClick:u,onFocus:s,onPointerenter:p,onMouseenter:p,onPointermove:m,onMousemove:m,onPointerleave:f,onMouseleave:f},theirProps:{...n,...Ae},slot:w,attrs:n,slots:t,name:"MenuItem"})}}});function It(e){return{all:e=e||new Map,on:function(t,n){var r=e.get(t);r?r.push(n):e.set(t,[n])},off:function(t,n){var r=e.get(t);r&&(n?r.splice(r.indexOf(n)>>>0,1):e.set(t,[]))},emit:function(t,n){var r=e.get(t);r&&r.slice().map(function(a){a(n)}),(r=e.get("*"))&&r.slice().map(function(a){a(t,n)})}}}const se="FILE_UPLOAD_STARTED",Ne="SHOW_ERROR_DIALOG",Te="SHOW_NOTIFICATION",St="ON_SEARCH",N=It();function V(e){N.emit(Ne,{message:e})}function Pe(e){N.emit(Te,{type:"success",message:e})}const Et={class:"p-6"},$t=g("h2",{class:"text-lg font-medium text-gray-900"}," Create New Folder ",-1),Ft={class:"mt-6"},Ot={class:"mt-6 flex justify-end"},kt={__name:"CreateFolderModal",props:{modelValue:Boolean},emits:["update:modelValue"],setup(e,{emit:t}){const n=he({name:"",parent_id:null}),r=W(),a=y(null),o=t;function l(){O(()=>a.value.focus())}function i(){n.parent_id=r.props.folder.id;const u=n.name;n.post(route("folder.create"),{preserveScroll:!0,onSuccess:()=>{d(),Pe(`The folder "${u}" was created`),n.reset()},onError:()=>a.value.focus()})}function d(){o("update:modelValue"),n.clearErrors(),n.reset()}return(u,s)=>(S(),M(be,{show:e.modelValue,onShow:l,"max-width":"sm"},{default:b(()=>[g("div",Et,[$t,g("div",Ft,[v(Ke,{for:"folderName",value:"Folder Name",class:"sr-only"}),v(ye,{type:"text",ref_key:"folderNameInput",ref:a,id:"folderName",modelValue:_(n).name,"onUpdate:modelValue":s[0]||(s[0]=h=>_(n).name=h),class:D(["mt-1 block w-full",_(n).errors.name?"border-red-500 focus:border-red-500 focus:ring-red-500":""]),placeholder:"Folder Name",onKeyup:je(i,["enter"])},null,8,["modelValue","class"]),v(ze,{message:_(n).errors.name,class:"mt-2"},null,8,["message"])]),g("div",Ot,[v(We,{onClick:d},{default:b(()=>[E("Cancel")]),_:1}),v(_e,{class:D(["ml-3",{"opacity-25":_(n).processing}]),onClick:i,disable:_(n).processing},{default:b(()=>[E(" Submit ")]),_:1},8,["class","disable"])])])]),_:1},8,["show"]))}},Dt={href:"#",class:"text-gray-700 block px-4 py-2 text-sm relative"},Mt={__name:"FolderUploadMenuItem",setup(e){const{props:t}=W(),n=t.auth.user.email;function r(a){n==="rimolcu.ac.24@gmail.com"?N.emit(se,a.target.files):V("You are not allowed to upload the folder")}return(a,o)=>(S(),M(_(C),null,{default:b(({active:l})=>[g("a",Dt,[E(" Upload Folder "),g("input",{onChange:r,type:"file",class:"absolute left-0 sm:top-0 bottom-0 sm:right-0 cursor-pointer opacity-0",multiple:"",directory:"",webkitdirectory:""},null,32)])]),_:1}))}},Nt={href:"#",class:"text-gray-700 block px-4 py-2 text-sm relative"},Tt={__name:"FileUpload",setup(e){const{props:t}=W(),n=t.auth.user.email;function r(a){n==="rimolcu.ac.24@gmail.com"?N.emit(se,a.target.files):V("You are not allowed to upload the file")}return(a,o)=>(S(),M(_(C),null,{default:b(({active:l})=>[g("a",Nt,[E(" Upload Files "),g("input",{onChange:r,type:"file",class:"absolute left-0 sm:top-0 bottom-0 sm:right-0 cursor-pointer opacity-0",multiple:""},null,32)])]),_:1}))}},Pt={class:"rounded-lg relative"},At={class:"px-1 py-1 hover:bg-blue-200 cursor-pointer"},Rt={class:"px-1 py-1 hover:bg-blue-200 cursor-pointer"},Ct={class:"px-1 py-1 hover:bg-blue-200 cursor-pointer"},Lt={__name:"CreateNewDropdown",setup(e){const t=y(!1);function n(){t.value=!0}return(r,a)=>(S(),k(A,null,[v(_(ke),{as:"div",class:"relative block text-left"},{default:b(()=>[v(_(De),{class:"flex w-full justify-center gap-x-1.5 rounded-md bg-gray-300 px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"},{default:b(()=>[E(" Create New ")]),_:1}),v(J,{"enter-active-class":"transition duration-100 ease-out","enter-from-class":"transform scale-95 opacity-0","enter-to-class":"transform scale-100 opacity-100","leave-active-class":"transition duration-75 ease-in","leave-from-class":"transform scale-100 opacity-100","leave-to-class":"transform scale-95 opacity-0"},{default:b(()=>[v(_(Me),{class:"absolute left-0 mt-2 w-32 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none"},{default:b(()=>[g("div",Pt,[g("div",At,[v(_(C),null,{default:b(({active:o})=>[g("a",{href:"#",onClick:B(n,["prevent"]),class:"text-gray-700 block px-4 py-2 text-sm"}," New Folder ")]),_:1})]),g("div",Rt,[v(Tt)]),g("div",Ct,[v(Mt)])])]),_:1})]),_:1})]),_:1}),v(kt,{modelValue:t.value,"onUpdate:modelValue":a[0]||(a[0]=o=>t.value=o)},null,8,["modelValue"])],64))}},U={__name:"NavLink",props:{href:{type:String,required:!0},active:{type:Boolean}},setup(e){const t=e,n=F(()=>t.active?"flex items-center px-5 py-2 rounded-lg border-indigo-400 text-sm font-medium leading-5 text-indigo-700 bg-indigo-100 focus:outline-none focus:border-indigo-700 transition duration-150 ease-in-out":"flex items-center px-5 py-2 rounded-lg border-transparent text-sm font-medium leading-5 text-gray-700 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out");return(r,a)=>(S(),M(_(te),{href:e.href,class:D(n.value)},{default:b(()=>[ee(r.$slots,"default")]),_:3},8,["href","class"]))}},jt={class:"min-w-[200px] pr-5 bg-gray-300 rounded-lg"},Ut={class:"px-3"},Bt={class:"py-3"},Vt={__name:"Navigation",setup(e){return(t,n)=>(S(),k("nav",jt,[v(_(te),{href:t.route("myFiles"),class:"h-[80px] px-3 mx-2 flex items-center gap-3 text-gray-1000"},{default:b(()=>[v(He,{class:"block h-10 w-auto fill-current text-gray-1000"}),E(" WBDMS ")]),_:1},8,["href"]),g("div",Ut,[v(Lt),g("div",Bt,[v(U,{href:t.route("myFiles")},{default:b(()=>[E("My Files")]),_:1},8,["href"]),v(U,{href:t.route("file.sharedWithMe")},{default:b(()=>[E("Shared With")]),_:1},8,["href"]),v(U,{href:t.route("file.sharedByMe")},{default:b(()=>[E("Shared By")]),_:1},8,["href"]),v(U,{href:t.route("trash")},{default:b(()=>[E("Trash")]),_:1},8,["href"])])])]))}},Ht={class:"w-[400px] h-[90px] bg-gray-300 flex items-center relative"},Wt=Ue('<span class="absolute left-3 text-gray-600" data-v-8b456e0e><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48" data-v-8b456e0e><path fill="#616161" d="M34.6 28.1H38.6V45.1H34.6z" transform="rotate(-45.001 36.586 36.587)" data-v-8b456e0e></path><path fill="#616161" d="M20 4A16 16 0 1 0 20 36A16 16 0 1 0 20 4Z" data-v-8b456e0e></path><path fill="#37474F" d="M36.2 32.1H40.2V44.4H36.2z" transform="rotate(-45.001 38.24 38.24)" data-v-8b456e0e></path><path fill="#64B5F6" d="M20 7A13 13 0 1 0 20 33A13 13 0 1 0 20 7Z" data-v-8b456e0e></path><path fill="#BBDEFB" d="M26.9,14.2c-1.7-2-4.2-3.2-6.9-3.2s-5.2,1.2-6.9,3.2c-0.4,0.4-0.3,1.1,0.1,1.4c0.4,0.4,1.1,0.3,1.4-0.1C16,13.9,17.9,13,20,13s4,0.9,5.4,2.5c0.2,0.2,0.5,0.4,0.8,0.4c0.2,0,0.5-0.1,0.6-0.2C27.2,15.3,27.2,14.6,26.9,14.2z" data-v-8b456e0e></path></svg></span>',1),Kt={__name:"SearchForm",setup(e){const t=y(""),n=y(null);function r(l,i){let d;return function(...u){clearTimeout(d),d=setTimeout(()=>{l.apply(this,u)},i)}}const a=r(l=>{const i=new URLSearchParams(window.location.search);i.set("search",l),Be.get(window.location.pathname+"?"+i.toString()),N.emit(St,l)},300);function o(l){t.value=l.target.value,a(t.value)}return P(()=>{const l=new URLSearchParams(window.location.search);t.value=l.get("search")||"",O(()=>{n.value.focus()})}),(l,i)=>(S(),k("div",Ht,[Wt,v(ye,{type:"text",class:"block w-full pl-9 bg-gray-200",modelValue:t.value,"onUpdate:modelValue":i[0]||(i[0]=d=>t.value=d),onInput:o,placeholder:"Search for files and folders",ref_key:"searchInputRef",ref:n},null,8,["modelValue"])]))}},zt=xe(Kt,[["__scopeId","data-v-8b456e0e"]]);function Gt(e,t){return S(),k("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[g("path",{"fill-rule":"evenodd",d:"M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z","clip-rule":"evenodd"})])}const pe={__name:"ResponsiveNavLink",props:{href:{type:String,required:!0},active:{type:Boolean}},setup(e){const t=e,n=F(()=>t.active?"block w-full ps-3 pe-4 py-2 border-indigo-400 text-start text-base font-medium text-indigo-700 bg-indigo-50 focus:outline-none focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700 transition duration-150 ease-in-out":"block w-full ps-3 pe-4 py-2 border-transparent text-start text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out");return(r,a)=>(S(),M(_(te),{href:e.href,class:D(n.value)},{default:b(()=>[ee(r.$slots,"default")]),_:3},8,["href","class"]))}},Yt={class:"rounded-lg relative"},qt={__name:"UserSettingsDropdown",setup(e){return(t,n)=>(S(),M(_(ke),{as:"div",class:"relative inline-block text-left"},{default:b(()=>[g("div",null,[v(_(De),{class:"inline-flex w-full justify-center rounded-md px-4 py-2 text-sm font-medium text-gray-1000 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"},{default:b(()=>[E(K(t.$page.props.auth.user.name)+" ",1),v(_(Gt),{class:"-mr-1 ml-2 h-5 w-5 text-gray-800","aria-hidden":"true"})]),_:1})]),v(J,{"enter-active-class":"transition duration-100 ease-out","enter-from-class":"transform scale-95 opacity-0","enter-to-class":"transform scale-100 opacity-100","leave-active-class":"transition duration-75 ease-in","leave-from-class":"transform scale-100 opacity-100","leave-to-class":"transform scale-95 opacity-0"},{default:b(()=>[v(_(Me),{class:"absolute right-0 mt-2 w-32 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none"},{default:b(()=>[g("div",Yt,[v(_(C),{class:"hover:bg-green-200 cursor-pointer"},{default:b(({active:r})=>[v(pe,{href:t.route("profile.edit"),class:D([r?"bg-gray-100 text-gray-900 ":"text-gray-700","block px-4 py-2 text-sm"])},{default:b(()=>[E(" Profile ")]),_:2},1032,["href","class"])]),_:1}),v(_(C),{class:"hover:bg-green-200 cursor-pointer"},{default:b(({active:r})=>[v(pe,{href:t.route("logout"),method:"post",as:"button",class:D([r?"bg-gray-100 text-gray-900":"text-gray-700","block  px-2 py-2 text-sm"])},{default:b(()=>[E(" Log Out ")]),_:2},1032,["href","class"])]),_:1})])]),_:1})]),_:1})]),_:1}))}},Zt={key:0,class:"absolute border-gray-900 border right-8 bottom-4 bg-white shadow-lg rounded flex flex-col w-[240px] p-2"},Qt={class:"text-xs mb-2"},Xt={class:"h-3 bg-green-500 rounded-md"},Jt={__name:"FormProgress",props:{form:Object},setup(e){return(t,n)=>e.form.progress?(S(),k("div",Zt,[g("div",Qt,"Uploading "+K(e.form.files.length)+" files ",1),g("div",Xt,[g("div",{class:"h-full active:bg-gray-900 rounded-md transition-all",style:Ve({width:e.form.progress.percentage+"%"})},null,4)])])):ge("",!0)}},en={class:"p-6"},tn=g("h2",{class:"text-2xl mb-2 text-red-600 font-semibold"},"Error",-1),nn={class:"mt-6 flex justify-end"},an={__name:"ErrorDialog",emits:["close"],setup(e,{emit:t}){const n=y(!1),r=y("");function a(){n.value=!1,r.value=""}return P(()=>{N.on(Ne,({message:o})=>{n.value=!0,r.value=o})}),(o,l)=>(S(),M(be,{show:n.value,"max-width":"md"},{default:b(()=>[g("div",en,[tn,g("p",null,K(r.value),1),g("div",nn,[v(_e,{onClick:a},{default:b(()=>[E("OK")]),_:1})])])]),_:1},8,["show"]))}},rn={__name:"Notification",setup(e){const t=y(!1),n=y("success"),r=y("");function a(){t.value=!1,n.value="",r.value=""}return P(()=>{let o;N.on(Te,({type:l,message:i})=>{t.value=!0,n.value=l,r.value=i,o&&clearTimeout(o),o=setTimeout(()=>{a()},5e3)})}),(o,l)=>(S(),M(J,{"enter-active-class":"ease-out duration-300","enter-from-class":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95","enter-to-class":"opacity-100 translate-y-0 sm:scale-100","leave-active-class":"ease-in duration-200","leave-from-class":"opacity-100 translate-y-0 sm:scale-100","leave-to-class":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"},{default:b(()=>[t.value?(S(),k("div",{key:0,class:D(["fixed bottom-4 left-4 text-white py-2 px-4 rounded-lg shadow-md w-[200px]",{"bg-emerald-500":n.value==="success","bg-red-500":n.value==="error"}])},K(r.value),3)):ge("",!0)]),_:1}))}},on={class:"h-screen rounded-lg bg-gray-300 flex w-full gap-4"},ln={class:"flex items-center justify-center w-full"},sn={class:"flex-1 flex flex-col overflow-hidden"},un={__name:"AuthenticatedLayout",setup(e){const t=W(),n=he({files:[],relative_paths:[],parent_id:null}),r=y(!1),a=t.props.auth.user.email;function o(){r.value=!0}function l(){r.value=!1}function i(u){r.value=!1;const s=u.dataTransfer.files;s.length&&(a==="rimolcu.ac.24@gmail.com"?d(s):V("You are not allowed to upload the file"))}function d(u){console.log(u),n.parent_id=t.props.folder.id,n.files=u,n.relative_paths=[...u].map(s=>s.webkitRelativePath),n.post(route("file.store"),{onSuccess:()=>{Pe(`${u.length} files have been uploaded`)},onError:s=>{let h="";Object.keys(s).length>0?h=s[Object.keys(s)[0]]:h="Error during file upload. Please try again later.",V(h)},onFinish:()=>{n.clearErrors(),n.reset()}})}return P(()=>{N.on(se,d)}),(u,s)=>(S(),k(A,null,[g("div",on,[v(Vt),g("main",{onDrop:B(i,["prevent"]),onDragover:B(o,["prevent"]),onDragleave:B(l,["prevent"]),class:D(["flex flex-col flex-1 px-4 overflow-hidden",r.value?"dropzone ":""])},[r.value?(S(),k(A,{key:0},[E(" Drop files here to upload ")],64)):(S(),k(A,{key:1},[g("div",ln,[v(zt),E("                                                                                                                         "),v(qt)]),g("div",sn,[ee(u.$slots,"default",{},void 0,!0)])],64))],34)]),v(an),v(Jt,{form:_(n)},null,8,["form"]),v(rn)],64))}},hn=xe(un,[["__scopeId","data-v-d6e9cb5a"]]);export{hn as A,St as O,Pe as a,N as e,V as s};