import{j as e}from"./index-C_SWdmGa.js";import{r as s}from"./icons-B7WE3pec.js";import{g as a}from"./vendor-DI7-unS2.js";import{r as t}from"./scroll-BV8eipok.js";import{a as n,F as r,b as i,H as o}from"./index-zoA-_WCW.js";const c=a(t()),l=s.memo((()=>{const[a,t]=s.useState({}),[o,c]=s.useState([]),[l,p]=s.useState(!0),[x,j]=s.useState(null),h=s.useCallback((async()=>{try{p(!0),j(null);const e=localStorage.getItem("adminContents");if(e){const s=JSON.parse(e);c(s);const a=Object.fromEntries(s.map((e=>[e.id,!1])));return t(a),void p(!1)}const s=await n.get("/data.json");c(s.data.contents);const a=Object.fromEntries(s.data.contents.map((e=>[e.id,!1])));t(a)}catch(e){j(e.message||"Failed to fetch contents")}finally{p(!1)}}),[]);s.useEffect((()=>{h()}),[h]);const u=s.useCallback((e=>{t((s=>({...s,[e]:!s[e]})))}),[]);return l?e.jsx(d,{}):x?e.jsx(m,{message:x}):e.jsx("main",{className:"app-main mirror-bg",children:o.map((s=>e.jsxs("article",{className:"app-content",children:[e.jsxs("button",{className:"w-full flex flex-col md:flex-row items-center justify-between p-2",onClick:()=>u(s.id),"aria-expanded":a[s.id],"aria-controls":`content-${s.id}`,children:[e.jsx("h2",{className:"flex-1 text-left",children:s.title}),e.jsx("span",{className:"flex items-center","aria-hidden":"true",children:a[s.id]?e.jsx(r,{}):e.jsx(i,{})})]}),e.jsx("div",{id:`content-${s.id}`,className:"transition-all duration-200 ease-in-out overflow-hidden "+(a[s.id]?"max-h-40 opacity-100":"max-h-0 opacity-0"),children:e.jsx("p",{className:"p-2",children:s.description})})]},s.id)))})})),d=()=>e.jsx("div",{className:"app-main mirror-bg",children:[1,2,3].map((s=>e.jsx("div",{className:"app-content animate-pulse",children:e.jsx("div",{className:"h-20 bg-gray-200 rounded w-full"})},s)))}),m=({message:s})=>e.jsx("div",{className:"app-main mirror-bg",children:e.jsxs("div",{className:"app-content bg-red-50 border-red-500",children:[e.jsxs("p",{className:"text-red-500 p-4",children:["Error: ",s]}),e.jsx("button",{onClick:()=>window.location.reload(),className:"mx-4 mb-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600",children:"Retry"})]})}),p=s.memo((()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"React Notes"}),e.jsx(c,{options:{suppressScrollX:!0},children:e.jsx(l,{})})]})));export{p as default};
