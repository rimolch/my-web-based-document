import{v as i,x as p,o as t,f as s,b as m,t as n,j as d,r as _,p as f}from"./app-0jD_U881.js";const g={class:"text-sm text-red-600"},k={__name:"InputError",props:{message:{type:String}},setup(e){return(a,r)=>i((t(),s("div",null,[m("p",g,n(e.message),1)],512)),[[p,e.message]])}},v={class:"block font-medium text-sm text-gray-700"},y={key:0},h={key:1},S={__name:"InputLabel",props:{value:{type:String}},setup(e){return(a,r)=>(t(),s("label",v,[e.value?(t(),s("span",y,n(e.value),1)):(t(),s("span",h,[d(a.$slots,"default")]))]))}},x=["value"],$={__name:"TextInput",props:{modelValue:{type:String,required:!0}},emits:["update:modelValue"],setup(e,{expose:a,emit:r}){const o=_(null);return f(()=>{o.value.hasAttribute("autofocus")&&o.value.focus()}),a({focus:()=>o.value.focus()}),(l,u)=>(t(),s("input",{type:"text",class:"border-gray-300 focus:border-gray-500 focus:ring-gray-500 rounded-md shadow-sm",value:e.modelValue,onInput:u[0]||(u[0]=c=>l.$emit("update:modelValue",c.target.value)),ref_key:"input",ref:o},null,40,x))}};export{S as _,$ as a,k as b};
