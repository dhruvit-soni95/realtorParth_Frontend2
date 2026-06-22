import{r as s,d as h,j as e}from"./utilities-CctrEpBK.js";import{S as x,A as g}from"./index-B5iZihzW.js";import{L as n}from"./react-LWYCItZ7.js";import{O as u}from"./OptimizedImage-CAJf1M8k.js";import{B as p}from"./book-open-gc3AX37Y.js";import"./supabase-DWWbfOGS.js";const c="https://realtorparth.ca";function y(){const[r,l]=s.useState([]),[o,d]=s.useState(!0);return s.useEffect(()=>{(async()=>{try{const m=(await h.get(`${c}/api/blogging/blogs?status=published`)).data.map(t=>{var i;return{id:t._id,title:t.title,slug:t.slug||t._id,content:t.content.length>160?t.content.slice(0,160)+"...":t.content,image_url:t.imageURL||(t.image?`${c}/api/blogging/uploads/${t.image}`:void 0),created_at:t.publishDate||t.createdAt,schema_question:((i=t.tags)==null?void 0:i[0])||null}});l(m)}catch(a){console.error("Failed to fetch blogs:",a),l([])}finally{d(!1)}})()},[]),e.jsxs(e.Fragment,{children:[e.jsx(x,{title:"Real Estate Blog | The Real Estate Realist",description:"Insights, market updates, and advice for navigating the Airdrie and Calgary real estate markets."}),e.jsxs("main",{className:"pt-48 pb-20 px-4 max-w-7xl mx-auto min-h-[60vh] bg-gray-50/30",children:[e.jsxs("div",{className:"text-center mb-16",children:[e.jsx("h1",{className:"text-4xl font-bold text-charcoal-dark mb-4",children:"Market Insights & Advice"}),e.jsx("p",{className:"text-xl text-gray-600 max-w-2xl mx-auto",children:"Stay informed with the latest trends and data-driven analysis."})]}),o?e.jsx("div",{className:"text-center py-12",children:e.jsx("p",{className:"text-charcoal-light",children:"Loading articles..."})}):r.length===0?e.jsx("div",{className:"text-center py-12 glass-card rounded-lg",children:e.jsx("p",{className:"text-charcoal",children:"No articles published yet. Check back soon!"})}):e.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12",children:r.map(a=>e.jsxs("div",{className:`
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
            `,children:[e.jsx(n,{to:`/blog/${a.slug}`,className:"block bg-white",children:a.image_url?e.jsx("div",{className:"aspect-[3/2] bg-white overflow-hidden",children:e.jsx(u,{src:a.image_url,alt:a.title,className:`
                      w-full
                      h-full
                      object-contain
                      transition-transform
                      duration-700
                      group-hover:scale-105
                    `})}):e.jsx("div",{className:"aspect-[3/2] flex items-center justify-center bg-gray-100 text-gray-300",children:e.jsx(p,{className:"w-10 h-10"})})}),e.jsxs("div",{className:"p-6",children:[e.jsx(n,{to:`/blog/${a.slug}`,className:"block group-hover:text-bronze transition-colors",children:e.jsx("h2",{className:"text-xl font-bold text-charcoal-dark mb-3 line-clamp-2",children:a.title})}),a.schema_question&&e.jsx("div",{className:"mb-4 text-xs font-semibold text-bronze uppercase tracking-wider",children:a.schema_question}),e.jsx("p",{className:"text-charcoal text-sm leading-relaxed line-clamp-3 mb-6",children:a.content}),e.jsxs(n,{to:`/blog/${a.slug}`,className:"inline-flex items-center text-bronze font-bold hover:text-bronze-dark",children:["Read Article",e.jsx(g,{className:`
                    ml-2
                    w-4
                    h-4
                    transition-transform
                    group-hover:translate-x-1
                  `})]})]})]},a.id))})]})]})}export{y as default};
