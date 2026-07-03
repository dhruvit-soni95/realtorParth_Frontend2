import{j as e,r as n,d as N}from"./utilities-CctrEpBK.js";import{L as c,a as w}from"./react-LWYCItZ7.js";import{c as y,H as v,S as $,a as k}from"./index-mnIj3qKq.js";import{C as _}from"./chevron-right-Cy65kis-.js";import{A as S}from"./arrow-left-CL9uvmJL.js";import"./supabase-DWWbfOGS.js";/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B=y("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);function P({items:s}){return e.jsx("nav",{"aria-label":"Breadcrumb",className:"mb-6",children:e.jsxs("ol",{className:"flex items-center flex-wrap gap-2 text-sm",children:[e.jsx("li",{children:e.jsx(c,{to:"/",className:"flex items-center text-charcoal-light hover:text-bronze transition-colors","aria-label":"Home",children:e.jsx(v,{className:"w-4 h-4"})})}),s.map((a,i)=>e.jsxs("li",{className:"flex items-center gap-2",children:[e.jsx(_,{className:"w-4 h-4 text-charcoal-light/50","aria-hidden":"true"}),a.href?e.jsx(c,{to:a.href,className:"text-charcoal-light hover:text-bronze transition-colors",children:a.label}):e.jsx("span",{className:"text-charcoal-dark font-medium","aria-current":"page",children:a.label})]},i))]})})}const r="https://realestate-realist.com",x="https://realtorparth.ca";function T(){const{slug:s}=w(),[a,i]=n.useState(null),[g,m]=n.useState(!0),[h,d]=n.useState(null);if(n.useEffect(()=>{s&&(async()=>{m(!0);try{const t=await N.get(`${x}/api/blogging/blogdetail/${s}`);t.data?i(t.data):d("Article not found")}catch(t){console.error("Error fetching blog:",t),d("Failed to load article")}finally{m(!1)}})()},[s]),g)return e.jsx("div",{className:"min-h-screen flex items-center justify-center",children:e.jsx("p",{className:"text-charcoal-light",children:"Loading article…"})});if(h||!a)return e.jsxs("div",{className:"min-h-screen flex flex-col items-center justify-center gap-4",children:[e.jsx("p",{className:"text-charcoal-dark text-lg",children:h||"Article not found"}),e.jsx(c,{to:"/blog",className:"text-bronze hover:text-bronze-dark transition-colors",children:"Back to blog"})]});const o=a.imageURL||(a.image?`${x}/api/blogging/uploads/${a.image}`:`${r}/og-image.jpg`),l=a.publishDate||(()=>{const t=new Date(a.createdAt);return isNaN(t.getTime())?"":t.toISOString()})(),p={"@context":"https://schema.org","@type":"Article",headline:a.title,description:a.content.slice(0,160),image:o,url:`${r}/blog/${a.slug||a._id}`,datePublished:l,author:{"@type":"Person",name:a.author||"Parth Brahmbhatt"},publisher:{"@type":"Organization",name:"The Real Estate Realist",logo:{"@type":"ImageObject",url:`${r}/parth_black_suite-removebg-preview.png`}},...a.schema_question&&a.schema_answer&&{mainEntity:{"@type":"Question",name:a.schema_question,acceptedAnswer:{"@type":"Answer",text:a.schema_answer}}}},u=[{label:"Blog",href:"/blog"},{label:a.title}],b=[{name:"Home",url:r},{name:"Blog",url:`${r}/blog`},{name:a.title,url:`${r}/blog/${a.slug||a._id}`}];return e.jsxs(e.Fragment,{children:[e.jsx($,{title:`${a.title} | The Real Estate Realist`,description:a.content.slice(0,160),url:`${r}/blog/${a.slug||a._id}`,type:"article",schema:p,breadcrumbs:b,publishedTime:l,author:a.author||"Parth Brahmbhatt"}),e.jsx("main",{className:"min-h-screen pt-40 pb-16 px-4 bg-gray-50/30",children:e.jsxs("article",{className:"max-w-5xl mx-auto",itemScope:!0,itemType:"https://schema.org/Article",children:[e.jsx(P,{items:u}),e.jsxs(c,{to:"/blog",className:"inline-flex items-center gap-2 text-charcoal-light hover:text-bronze transition-colors mb-8",children:[e.jsx(S,{className:"w-4 h-4"}),"Back to all articles"]}),o&&e.jsx("div",{className:"mb-10 bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100",children:e.jsx("img",{src:o,alt:a.title,className:"w-full h-auto object-contain"})}),e.jsxs("header",{className:"mb-12 text-center",children:[e.jsx("h1",{className:"text-3xl md:text-5xl font-bold text-charcoal-dark mb-6 leading-tight",itemProp:"headline",children:a.title}),e.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-6 text-charcoal-light",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(B,{className:"w-4 h-4"}),e.jsx("span",{children:a.author||"Parth Brahmbhatt"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(k,{className:"w-4 h-4"}),e.jsx("time",{dateTime:l,itemProp:"datePublished",children:(()=>{if(!l)return"";const[t,j,f]=l.split("/");return new Date(`${f}-${j}-${t}`).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})})()})]})]})]}),a.schema_question&&a.schema_answer&&e.jsxs("aside",{className:`
              mb-10
              p-8
              bg-bronze/10
              border-l-4
              border-bronze
              rounded-r-2xl
            `,children:[e.jsx("h2",{className:"text-xl font-bold text-bronze-dark mb-4",children:a.schema_question}),e.jsx("p",{className:"text-charcoal-dark leading-relaxed",children:a.schema_answer})]}),e.jsx("div",{className:`
          bg-white
          rounded-3xl
          shadow-sm
          border
          border-gray-100
          p-6
          md:p-10
          lg:p-12
        `,itemProp:"articleBody",children:e.jsx("div",{className:`
            prose
            prose-lg
            max-w-none
            prose-headings:text-charcoal-dark
            prose-p:text-charcoal
            prose-p:leading-8
            prose-strong:text-charcoal-dark
          `,children:e.jsx("p",{className:"whitespace-pre-line text-lg leading-8",children:a.content})})})]})})]})}export{T as default};
