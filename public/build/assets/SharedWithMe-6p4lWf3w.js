import{A as k}from"./AuthenticatedLayout-_E8msa5o.js";import{h as w,_ as C}from"./http-helper-7HKkKYeF.js";import{_ as h}from"./Checkbox-16AlpGuJ.js";import{r as c,h as V,m as M,p as S,o as d,c as j,w as I,b as a,a as i,f as m,q as N,F as O,g as $,n as B,t as f,d as F}from"./app-0jD_U881.js";import{_ as U}from"./DownloadFilesButton-Uf9sCTBc.js";import"./ApplicationLogo-kOi6OoIv.js";import"./_plugin-vue_export-helper-x3n3nnut.js";import"./SecondaryButton-DOSrhAGb.js";import"./TextInput-owTTohJd.js";import"./PrimaryButton--FYT-SEj.js";const A={class:"flex items-center justify-end p-1 mb-3"},E={class:"flex-1 overflow-auto"},L={class:"min-w-full"},T={class:"bg-gray-200 border-b"},q={class:"text-sm font-medium text-gray-900 px-6 py-4 text-left w-[30px] max-w-[30px] pr-0"},z=a("th",{class:"text-sm font-medium text-gray-900 px-6 py-4 text-left"}," Name ",-1),D=a("th",{class:"text-sm font-medium text-gray-900 px-6 py-4 text-left"}," Path ",-1),G=["onClick"],P={class:"px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 w-[30px] max-w-[30px] pr-0"},W={class:"px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 flex items-center"},H={class:"px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"},J={key:0,class:"py-8 text-center text-sm text-gray-900"},le={__name:"SharedWithMe",props:{files:Object,folder:Object,ancestors:Object},setup(v){const o=c(!1),l=c({}),p=c(null),r=v,s=c({data:r.files.data,next:r.files.links.next}),_=V(()=>Object.entries(l.value).filter(e=>e[1]).map(e=>e[0]));function g(){console.log("load more"),console.log(s.value.next),s.value.next!==null&&w(s.value.next).then(e=>{s.value.data=[...s.value.data,...e.data],s.value.next=e.links.next})}function b(){s.value.data.forEach(e=>{l.value[e.id]=o.value})}function y(e){l.value[e.id]=!l.value[e.id],x(e)}function x(e){if(!l.value[e.id])o.value=!1;else{let n=!0;for(let t of s.value.data)if(!l.value[t.id]){n=!1;break}o.value=n}}return M(()=>{s.value={data:r.files.data,next:r.files.links.next}}),S(()=>{new IntersectionObserver(n=>n.forEach(t=>t.isIntersecting&&g()),{rootMargin:"-250px 0px 0px 0px"}).observe(p.value)}),(e,n)=>(d(),j(k,null,{default:I(()=>[a("nav",A,[a("div",null,[i(U,{all:o.value,ids:_.value,class:"mr-2","shared-with-me":!0},null,8,["all","ids"])])]),a("div",E,[a("table",L,[a("thead",T,[a("tr",null,[a("th",q,[i(h,{onChange:b,checked:o.value,"onUpdate:checked":n[0]||(n[0]=t=>o.value=t)},null,8,["checked"])]),z,D])]),a("tbody",null,[(d(!0),m(O,null,N(s.value.data,t=>(d(),m("tr",{key:t.id,onClick:u=>y(t),class:B(["border-b transition duration-300 ease-in-out hover:bg-blue-100 cursor-pointer",l.value[t.id]||o.value?"bg-blue-50":"bg-white"])},[a("td",P,[i(h,{onChange:u=>x(t),modelValue:l.value[t.id],"onUpdate:modelValue":u=>l.value[t.id]=u,checked:l.value[t.id]||o.value},null,8,["onChange","modelValue","onUpdate:modelValue","checked"])]),a("td",W,[i(C,{file:t},null,8,["file"]),F(" "+f(t.name),1)]),a("td",H,f(t.path),1)],10,G))),128))])]),s.value.data.length?$("",!0):(d(),m("div",J," There is no data in this folder ")),a("div",{ref_key:"loadMoreIntersect",ref:p},null,512)])]),_:1}))}};export{le as default};
