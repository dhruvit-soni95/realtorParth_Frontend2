import{r as n,d as u,j as e}from"./utilities-CctrEpBK.js";import{S as p,A as b}from"./index-DlkXBmGL.js";import{L as l}from"./react-LWYCItZ7.js";import{O as f}from"./OptimizedImage-CAJf1M8k.js";import{B as j}from"./book-open-VmBM6KAG.js";import"./supabase-DWWbfOGS.js";const m="https://realtorparth.ca";function R(){const[i,c]=n.useState([]),[x,h]=n.useState(!0);return n.useEffect(()=>{(async()=>{try{const g=(await u.get(`${m}/api/blogging/blogs?status=published`)).data.map(a=>{var o,d;const r=document.createElement("div");r.innerHTML=a.content||"";let s=((o=r.querySelector("p"))==null?void 0:o.textContent)||r.textContent||"";return s=s.replace(/\s+/g," ").trim(),s.length>180&&(s=s.substring(0,180).trim()+"..."),{id:a._id,title:a.title,slug:a.slug||a._id,content:s,image_url:a.imageURL||(a.image?`${m}/api/blogging/uploads/${a.image}`:void 0),created_at:a.publishDate||a.createdAt,schema_question:((d=a.tags)==null?void 0:d[0])||null}});c(g)}catch(t){console.error("Failed to fetch blogs:",t),c([])}finally{h(!1)}})()},[]),e.jsxs(e.Fragment,{children:[e.jsx(p,{title:"Real Estate Blog | The Real Estate Realist",description:"Insights, market updates, and advice for navigating the Airdrie and Calgary real estate markets."}),e.jsxs("main",{className:"pt-48 pb-20 px-4 max-w-7xl mx-auto min-h-[60vh] bg-gray-50/30",children:[e.jsxs("div",{className:"text-center mb-16",children:[e.jsx("h1",{className:"text-4xl font-bold text-charcoal-dark mb-4",children:"Market Insights & Advice"}),e.jsx("p",{className:"text-xl text-gray-600 max-w-2xl mx-auto",children:"Stay informed with the latest trends and data-driven analysis."})]}),x?e.jsx("div",{className:"text-center py-12",children:e.jsx("p",{className:"text-charcoal-light",children:"Loading articles..."})}):i.length===0?e.jsx("div",{className:"text-center py-12 glass-card rounded-lg",children:e.jsx("p",{className:"text-charcoal",children:"No articles published yet. Check back soon!"})}):e.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12",children:i.map(t=>e.jsxs("div",{className:`
              group
              bg-white
              rounded-2xl
              overflow-hidden
              shadow-sm
              border
              border-gray-100
              hover:shadow-xl
              transition-all
              duration-300
              hover:-translate-y-1
            `,children:[e.jsx(l,{to:`/blog/${t.slug}`,className:"block bg-white",children:t.image_url?e.jsx("div",{className:"aspect-[3/2] bg-white overflow-hidden",children:e.jsx(f,{src:t.image_url,alt:t.title,className:`
                      w-full
                      h-full
                      object-contain
                      transition-transform
                      duration-700
                      group-hover:scale-105
                    `})}):e.jsx("div",{className:"aspect-[3/2] flex items-center justify-center bg-gray-100 text-gray-300",children:e.jsx(j,{className:"w-10 h-10"})})}),e.jsxs("div",{className:"p-6",children:[e.jsx(l,{to:`/blog/${t.slug}`,className:"block group-hover:text-bronze transition-colors",children:e.jsx("h2",{className:"text-xl font-bold text-charcoal-dark mb-3 line-clamp-2",children:t.title})}),t.schema_question&&e.jsx("div",{className:"mb-4 text-xs font-semibold text-bronze uppercase tracking-wider",children:t.schema_question}),e.jsx("p",{className:"text-charcoal text-sm leading-relaxed line-clamp-3 mb-6",children:t.content}),e.jsxs(l,{to:`/blog/${t.slug}`,className:"inline-flex items-center text-bronze font-bold hover:text-bronze-dark",children:["Read Article",e.jsx(b,{className:`
                    ml-2
                    w-4
                    h-4
                    transition-transform
                    group-hover:translate-x-1
                  `})]})]})]},t.id))})]})]})}export{R as default};
