import{b as i,j as s,S as h,L as d,R as m,B as n,d as j,r as u,e as p,u as x,f as y,g as H,H as k,c as a,E as v,a as _}from"./index-gxMem5cA.js";import{u as g}from"./use-history-cl3w-Khl.js";const C="_list_jmobv_1",q="_historyItem_jmobv_8",L="_historyLink_jmobv_14",c={list:C,historyItem:q,historyLink:L},b=({requests:r})=>{const t=i(),o=e=>{u(e).catch(l=>{console.log(l)}),t(p({request:e}))};return s.jsx("div",{className:c.list,children:r.map(e=>s.jsx("div",{className:c.historyItem,children:s.jsxs(h,{children:[s.jsx(d,{className:c.historyLink,to:`${m.search}/${e.request}`,children:e.request}),s.jsx(n,{onClick:()=>o(e.request),children:s.jsx(j,{})})]})},e.request))})},N=()=>{const{requests:r}=x(e=>e.history),t=i(),o=()=>{y().catch(e=>{console.log(e)}),t(H())};return s.jsxs("div",{children:[s.jsx(n,{onClick:o,children:"Очистить историю"}),r&&s.jsx(b,{requests:r})]})},F=({title:r})=>(g(),s.jsxs(s.Fragment,{children:[s.jsx(k,{}),s.jsxs("div",{className:a.pageWrapper,children:[s.jsx("h1",{className:a.pageTitle,children:r}),s.jsx("div",{className:a.pageContent,children:s.jsx(v,{FallbackComponent:_,children:s.jsx(N,{})})})]})]}));export{F as default};
