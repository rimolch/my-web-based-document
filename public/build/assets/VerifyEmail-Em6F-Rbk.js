import{T as m,h as f,o as a,c as p,w as s,a as i,u as e,Z as g,f as y,g as h,b as o,d as n,n as _,i as v,e as b}from"./app-0jD_U881.js";import{_ as x}from"./GuestLayout-ywAQCRbG.js";import{P as k}from"./PrimaryButton--FYT-SEj.js";import"./ApplicationLogo-kOi6OoIv.js";import"./_plugin-vue_export-helper-x3n3nnut.js";/* empty css                                                    */const w=o("div",{class:"mb-4 text-sm text-gray-600"}," Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another. ",-1),V={key:0,class:"mb-4 font-medium text-sm text-green-600"},B={class:"mt-4 flex items-center justify-between"},P={__name:"VerifyEmail",props:{status:{type:String}},setup(r){const c=r,t=m({}),d=()=>{t.post(route("verification.send"))},l=f(()=>c.status==="verification-link-sent");return(u,E)=>(a(),p(x,null,{default:s(()=>[i(e(g),{title:"Email Verification"}),w,l.value?(a(),y("div",V," A new verification link has been sent to the email address you provided during registration. ")):h("",!0),o("form",{onSubmit:b(d,["prevent"])},[o("div",B,[i(k,{class:_({"opacity-25":e(t).processing}),disabled:e(t).processing},{default:s(()=>[n(" Resend Verification Email ")]),_:1},8,["class","disabled"]),i(e(v),{href:u.route("logout"),method:"post",as:"button",class:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},{default:s(()=>[n("Log Out")]),_:1},8,["href"])])],32)]),_:1}))}};export{P as default};
