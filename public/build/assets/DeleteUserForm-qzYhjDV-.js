import{j as u,T as _,o as y,f as w,a as o,w as a,b as s,A as h,d as c,u as t,D as x,n as g}from"./app-YJo5UV_X.js";import{D as m}from"./DangerButton-HM4oJ5xd.js";import{_ as v,a as k,b as D}from"./TextInput-3MKF02JC.js";import{a as b,_ as C}from"./SecondaryButton-2yvDDWbI.js";import"./_plugin-vue_export-helper-x3n3nnut.js";const V={class:"space-y-6"},A=s("header",null,[s("h2",{class:"text-lg font-medium text-gray-900"},"Delete Account"),s("p",{class:"mt-1 text-sm text-gray-600"}," Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain. ")],-1),B={class:"p-6"},U=s("h2",{class:"text-lg font-medium text-gray-900"}," Are you sure you want to delete your account? ",-1),$=s("p",{class:"mt-1 text-sm text-gray-600"}," Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account. ",-1),N={class:"mt-6"},P={class:"mt-6 flex justify-end"},S={__name:"DeleteUserForm",setup(T){const l=u(!1),r=u(null),e=_({password:""}),p=()=>{l.value=!0,h(()=>r.value.focus())},d=()=>{e.delete(route("profile.destroy"),{preserveScroll:!0,onSuccess:()=>n(),onError:()=>r.value.focus(),onFinish:()=>e.reset()})},n=()=>{l.value=!1,e.reset()};return(j,i)=>(y(),w("section",V,[A,o(m,{onClick:p},{default:a(()=>[c("Delete Account")]),_:1}),o(b,{show:l.value,onClose:n},{default:a(()=>[s("div",B,[U,$,s("div",N,[o(v,{for:"password",value:"Password",class:"sr-only"}),o(k,{id:"password",ref_key:"passwordInput",ref:r,modelValue:t(e).password,"onUpdate:modelValue":i[0]||(i[0]=f=>t(e).password=f),type:"password",class:"mt-1 block w-3/4",placeholder:"Password",onKeyup:x(d,["enter"])},null,8,["modelValue"]),o(D,{message:t(e).errors.password,class:"mt-2"},null,8,["message"])]),s("div",P,[o(C,{onClick:n},{default:a(()=>[c(" Cancel ")]),_:1}),o(m,{class:g(["ms-3",{"opacity-25":t(e).processing}]),disabled:t(e).processing,onClick:d},{default:a(()=>[c(" Delete Account ")]),_:1},8,["class","disabled"])])])]),_:1},8,["show"])]))}};export{S as default};
