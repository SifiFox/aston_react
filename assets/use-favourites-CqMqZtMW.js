import{h as e,u as p,b as f,m as l,n as v}from"./index-gxMem5cA.js";const S=()=>{const[a,o]=e.useState(null),[r,t]=e.useState(!1),[u,i]=e.useState(!1),{id:c}=p(s=>s.user),n=f();return e.useEffect(()=>{t(!0),l(c).then(s=>{o(s),n(v(s.movies))}).catch(s=>i(s)).finally(()=>t(!1))},[]),{favourites:a,isLoading:r,error:u}};export{S as u};
