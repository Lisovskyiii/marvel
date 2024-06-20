"use strict";(self.webpackChunkmarvel=self.webpackChunkmarvel||[]).push([[603],{3957:(e,t,c)=>{c.d(t,{Z:()=>r});const s=c.p+"static/media/Avengers.4065c8f9c94e3d8b039a.png",a=c.p+"static/media/Avengers_logo.9eaf219344d83362e830.png";var n=c(184);const r=()=>(0,n.jsxs)("div",{className:"app__banner",children:[(0,n.jsx)("img",{src:s,alt:"Avengers"}),(0,n.jsxs)("div",{className:"app__banner-text",children:["New comics every week!",(0,n.jsx)("br",{}),"Stay tuned!"]}),(0,n.jsx)("img",{src:a,alt:"Avengers logo"})]})},9613:(e,t,c)=>{c.d(t,{Z:()=>n});const s=c.p+"static/media/error.42292aa12b6bc303ce99.gif";var a=c(184);const n=()=>(0,a.jsx)("img",{style:{display:"block",width:"250px",height:"250px",objectFit:"contain",margin:"0 auto"},src:s,alt:"Error"})},2178:(e,t,c)=>{c.r(t),c.d(t,{default:()=>h});var s=c(4270),a=c(2791),n=c(9613),r=c(3394),i=c(4304),o=c(1087),l=c(184);const m=(e,t,c)=>{switch(e){case"waiting":return(0,l.jsx)(r.Z,{});case"loading":return c?(0,l.jsx)(t,{}):(0,l.jsx)(r.Z,{});case"confirmed":return(0,l.jsx)(t,{});case"error":return(0,l.jsx)(n.Z,{});default:throw new Error("Unexpected process state")}},d=()=>{const[e,t]=(0,a.useState)([]),[c,s]=(0,a.useState)(!1),[n,r]=(0,a.useState)(0),[d,u]=(0,a.useState)(!1),{getAllComics:h,process:p,setProcess:g}=(0,i.Z)();(0,a.useEffect)((()=>{b(n,!0)}),[]);const b=(e,t)=>{s(!t),h(e).then(x).then((()=>g("confirmed")))},x=c=>{let a=!1;c.length<8&&(a=!0),t([...e,...c]),s(!1),r(n+8),u(a)};return(0,l.jsxs)("div",{className:"comics__list",children:[m(p,(()=>function(e){const t=e.map(((e,t)=>(0,l.jsx)("li",{className:"comics__item",children:(0,l.jsxs)(o.rU,{to:"/comics/".concat(e.id),children:[(0,l.jsx)("img",{src:e.thumbnail,alt:e.title,className:"comics__item-img"}),(0,l.jsx)("div",{className:"comics__item-name",children:e.title}),(0,l.jsx)("div",{className:"comics__item-price",children:e.price})]})},t)));return(0,l.jsx)("ul",{className:"comics__grid",children:t})}(e)),c),(0,l.jsx)("button",{disabled:c,style:{display:d?"none":"block"},className:"button button__main button__long",onClick:()=>b(n),children:(0,l.jsx)("div",{className:"inner",children:"load more"})})]})};var u=c(3957);const h=()=>(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(s.q,{children:[(0,l.jsx)("meta",{name:"description",content:"Page with list of our comics"}),(0,l.jsx)("title",{children:"Comics page"})]}),(0,l.jsx)(u.Z,{}),(0,l.jsx)(d,{})]})},4304:(e,t,c)=>{c.d(t,{Z:()=>a});var s=c(2791);const a=()=>{const{request:e,process:t,clearError:c,setProcess:a}=(()=>{const[e,t]=(0,s.useState)("waiting");return{request:(0,s.useCallback)((async function(e){let c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{"Content-Type":"application/json"};t("loading");try{const t=await fetch(e,{method:c,body:s,headers:a});if(!t.ok)throw new Error("Could not fetch ".concat(e,", status: ").concat(t.status));return await t.json()}catch(n){throw t("error"),n}}),[]),clearError:(0,s.useCallback)((()=>{t("loading")}),[]),process:e,setProcess:t}})(),n="apikey=f0f3fb2c26fc8c94303bfb52287e6835",r="https://gateway.marvel.com:443/v1/public/",i=e=>({id:e.id,name:e.name,description:e.description?"".concat(e.description.slice(0,210),"..."):"There is no description for this character",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,homepage:e.urls[0].url,wiki:e.urls[1].url,comics:e.comics.items}),o=e=>({id:e.id,title:e.title,pageCount:e.pageCount?"Page: ".concat(e.pageCount):"No information about the number of pages",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,description:e.description||"There is no description",language:e.textObjects.language||"en-us",prices:e.prices[0].price?"".concat(e.prices[0].price,"$"):"Not available"});return{process:t,setProcess:a,getAllCharacters:async function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:210;return(await e("".concat(r,"characters?limit=9&offset=").concat(t,"&").concat(n))).data.results.map(i)},getCharacter:async t=>{const c=await e("".concat(r,"characters/").concat(t,"?").concat(n));return i(c.data.results[0])},clearError:c,getAllComics:async t=>(await e("".concat(r,"comics?orderBy=issueNumber&limit=8&offset=").concat(t,"&").concat(n))).data.results.map(o),getComic:async t=>{const c=await e("".concat(r,"comics/").concat(t,"?").concat(n));return o(c.data.results[0])},getCharacterByName:async t=>(await e("".concat(r,"characters?name=").concat(t,"&").concat(n))).data.results.map(i)}}}}]);
//# sourceMappingURL=603.b80da04b.chunk.js.map