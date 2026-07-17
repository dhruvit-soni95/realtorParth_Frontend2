import{r as s,j as e,d as i}from"./utilities-CctrEpBK.js";import{b as Te}from"./react-LWYCItZ7.js";import{A as Me}from"./activity-ClJZHjc7.js";import{R as q}from"./refresh-cw-CLj0MEHF.js";import{c as Ue,H as Be,f as qe,A as F}from"./index-DZvcmMOK.js";import{F as Fe}from"./file-text-CbGd7MTB.js";import{U as Pe}from"./users-B24TLSUI.js";import{M as Ie}from"./message-circle-question-3_2f_QI1.js";import{T as Ve}from"./trending-up-a7fRlpvw.js";import{R as Ee,L as Qe,C as Oe,X as Ye,Y as Ke,T as We,a as _e}from"./charts-CiUfmHhv.js";import"./supabase-DWWbfOGS.js";/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const He=Ue("CircleDot",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}]]),o="https://realtorparth.ca",Xe="282923";function or(){const a=Te(),[d,u]=s.useState(!0),[P,I]=s.useState(0),[V,E]=s.useState(0),[Q,O]=s.useState(0),[Y,K]=s.useState(0),[W,N]=s.useState("Live"),[_,k]=s.useState("Live"),[H,X]=s.useState(0),[G,J]=s.useState([]),[Z,ee]=s.useState([]),[m,S]=s.useState("Connected"),[f,L]=s.useState("Live"),[re,A]=s.useState("Live"),[se,te]=s.useState(""),[ne,ae]=s.useState(0),[le,ie]=s.useState(0),[oe,de]=s.useState(0),[ce,xe]=s.useState(0),[me,be]=s.useState(0),[he,j]=s.useState(!1),[pe,ge]=s.useState([]),[n,ue]=s.useState(null),b=async()=>{var t,l,D,C,z,R,$,T;try{const[h,p,M,je,U,ye,we]=await Promise.all([i.get(`${o}/api/properties/office/admin/${Xe}`),i.get(`${o}/api/blogging/blogs`),i.get(`${o}/api/faqs`),i.get(`${o}/api/contact`),i.get(`${o}/api/subscribe`),i.get(`${o}/api/analytics/monthly-visitors`),i.get(`${o}/api/analytics/summary`)]),y=((l=(t=h.data)==null?void 0:t.properties)==null?void 0:l.results)||((D=h.data)==null?void 0:D.properties)||[],g=Array.isArray(p.data)?p.data:((C=p.data)==null?void 0:C.blogs)||((z=p.data)==null?void 0:z.data)||[],B=Array.isArray(M.data)?M.data:[],w=((R=je.data)==null?void 0:R.data)||[],v=(($=U.data)==null?void 0:$.data)||[];I(y.length||0);const ve=y.filter(r=>r.isSelected===!0).length;be(ve),E(g.length||0);const Ne=g.filter(r=>(r.status||"draft")==="published").length,ke=g.filter(r=>(r.status||"draft")==="draft").length;de(Ne),xe(ke),O(B.length||0),X(w.length||0),K(((T=U.data)==null?void 0:T.total)||v.length||0);const Se=v.filter(r=>r.status!=="Unsubscribed").length,Le=v.filter(r=>r.status==="Unsubscribed").length;ae(Se),ie(Le),J(w.slice(0,5)),ge(ye.data.data.map(r=>({date:r._id,visitors:r.visitors}))),ue(we.data.data);const Ae=g.slice(0,2).map(r=>({type:"Blog",text:`New blog published: ${r.title}`,date:r.createdAt})),De=y.slice(0,2).map(r=>({type:"Listing",text:`New listing added: ${r.UnparsedAddress||"Property"}`,date:r.ListingContractDate||new Date().toISOString()})),Ce=B.slice(0,2).map(r=>({type:"FAQ",text:`FAQ updated: ${r.question}`,date:r.updatedAt||r.createdAt})),ze=w.slice(0,2).map(r=>({type:"Lead",text:`New lead from ${r.email}`,date:r.createdAt})),Re=[...Ae,...De,...Ce,...ze].sort((r,$e)=>new Date($e.date).getTime()-new Date(r.date).getTime()).slice(0,8);ee(Re),S("Connected"),L("Live"),A("Live"),N("Live"),k("Live"),te(new Date().toLocaleTimeString())}catch(h){console.error(h),S("Down"),L("Down"),A("Down"),N("Down"),k("Down")}finally{u(!1)}};s.useEffect(()=>{b();const t=setInterval(b,3e4);return()=>clearInterval(t)},[]);const fe=[{label:"Listings",value:P,subtext:`${me} Selected Properties`,icon:Be,color:"bg-blue-500"},{label:"Blogs",value:V,subtext:`${oe} Published • ${ce} Draft`,icon:Fe,color:"bg-purple-500"},{label:"Leads",value:H,subtext:"Customer inquiries",icon:Pe,color:"bg-green-500"},{label:"Subscribers",value:Y,subtext:`${ne} Active • ${le} Unsubscribed`,icon:qe,color:"bg-orange-500"},{label:"FAQs",value:Q,subtext:"Knowledge base",icon:Ie,color:"bg-pink-500"},{label:"Market Status",value:f,subtext:"MLS API Connected",icon:Ve,color:f==="Live"?"bg-emerald-500":"bg-red-500"}];return e.jsxs("div",{className:"space-y-6 sm:space-y-8",children:[e.jsxs("div",{className:"relative overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm",children:[e.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-bronze/5 via-transparent to-transparent"}),e.jsx("div",{className:"relative p-5 sm:p-7 lg:p-8",children:e.jsxs("div",{className:"flex flex-col 2xl:flex-row 2xl:items-center justify-between gap-6",children:[e.jsxs("div",{className:"min-w-0",children:[e.jsxs("div",{className:"flex items-start sm:items-center gap-4",children:[e.jsx("div",{className:`\r
                                w-14 h-14 sm:w-16 sm:h-16\r
                                rounded-2xl\r
                                bg-bronze/10\r
                                flex items-center justify-center\r
                                flex-shrink-0\r
                            `,children:e.jsx(Me,{className:"w-7 h-7 sm:w-8 sm:h-8 text-bronze"})}),e.jsxs("div",{className:"min-w-0",children:[e.jsx("h1",{className:`\r
                                    text-2xl sm:text-3xl lg:text-4xl\r
                                    font-bold\r
                                    text-charcoal-dark\r
                                    leading-tight\r
                                `,children:"Dashboard Overview"}),e.jsx("p",{className:`\r
                                    text-gray-500\r
                                    mt-1\r
                                    text-sm sm:text-base\r
                                `,children:"Real-time analytics, activity monitoring, visitor tracking, and admin overview."})]})]}),e.jsxs("div",{className:`\r
                                mt-5\r
                                flex flex-wrap items-center gap-3 sm:gap-4\r
                            `,children:[e.jsxs("div",{className:`\r
        inline-flex items-center gap-2\r
        bg-gray-100\r
        px-3 py-2\r
        rounded-xl\r
        text-sm text-gray-600\r
    `,children:[e.jsx(q,{className:"w-4 h-4 animate-spin"}),e.jsx("span",{className:"font-medium",children:"Auto Refresh:"}),e.jsxs("span",{children:["Every 30s • Updated: ",se]})]}),e.jsxs("div",{className:`
        inline-flex items-center gap-2
        px-3 py-2
        rounded-xl
        text-sm font-medium
        ${m==="Down"?"bg-red-50 text-red-700":"bg-green-50 text-green-700"}
    `,children:[e.jsx(He,{className:`
            w-3 h-3
            ${m==="Down"?"fill-red-600 text-red-600":"fill-green-600 text-green-600"}
        `}),m==="Down"?"System Offline":"System Online"]})]})]}),e.jsx("div",{className:`\r
                        flex flex-col sm:flex-row\r
                        gap-3\r
                        w-full 2xl:w-auto\r
                    `,children:e.jsxs("button",{onClick:b,className:`\r
                                w-full sm:w-auto\r
                                px-5 py-3\r
                                rounded-2xl\r
                                border border-gray-200\r
                                bg-white\r
                                hover:bg-gray-50\r
                                text-charcoal-dark\r
                                font-semibold\r
                                transition-all\r
                                shadow-sm\r
                                flex items-center justify-center gap-2\r
                            `,children:[e.jsx(q,{className:"w-4 h-4"}),"Refresh Data"]})})]})})]}),e.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-3 2xl:grid-cols-6 gap-4",children:[e.jsx(c,{title:"Manage Blogs",onClick:()=>a("/admin/blogs")}),e.jsx(c,{title:"Manage Listings",onClick:()=>a("/admin/listings")}),e.jsx(c,{title:"View Leads",onClick:()=>a("/admin/leads")}),e.jsx(c,{title:"FAQs",onClick:()=>a("/admin/faqs")}),e.jsx(c,{title:"Newsletter",onClick:()=>a("/admin/subscriptions")}),e.jsx(c,{title:"Neighborhoods",onClick:()=>a("/admin/community-list")})]}),e.jsx("div",{className:`\r
            grid\r
            sm:grid-cols-2\r
            xl:grid-cols-3\r
            2xl:grid-cols-6\r
            gap-5\r
        `,children:fe.map((t,l)=>e.jsxs("div",{className:`\r
                        relative overflow-hidden\r
                        bg-white\r
                        border border-gray-200\r
                        rounded-3xl\r
                        shadow-sm\r
                        hover:shadow-lg\r
                        transition-all duration-300\r
                        p-5 sm:p-6\r
                    `,children:[e.jsxs("div",{className:"flex items-start justify-between gap-4",children:[e.jsxs("div",{className:"min-w-0 flex-1",children:[e.jsx("p",{className:`\r
                                text-sm font-medium\r
                                text-gray-500\r
                                mb-2\r
                            `,children:t.label}),e.jsx("h3",{className:`\r
                                text-3xl sm:text-4xl\r
                                font-bold\r
                                text-charcoal-dark\r
                                tracking-tight\r
                                leading-none\r
                            `,children:d?"—":t.value})]}),e.jsx("div",{className:`
                                w-14 h-14
                                rounded-2xl
                                flex items-center justify-center
                                text-white
                                shadow-md
                                flex-shrink-0
                                ${t.color}
                            `,children:e.jsx(t.icon,{className:"w-6 h-6"})})]}),e.jsx("div",{className:`\r
                        mt-5 pt-4\r
                        border-t border-gray-100\r
                    `,children:e.jsx("p",{className:`\r
                            text-xs sm:text-sm\r
                            text-gray-500\r
                            leading-relaxed\r
                        `,children:t.subtext})})]},l))}),e.jsxs("div",{className:`\r
                    bg-white\r
                    rounded-3xl\r
                    border border-gray-200\r
                    shadow-sm\r
                    overflow-hidden\r
                    w-full\r
                `,children:[e.jsxs("div",{className:`\r
                        px-4 sm:px-6 lg:px-7\r
                        py-5\r
                        border-b border-gray-100\r
                        flex flex-col\r
                        2xl:flex-row\r
                        2xl:items-center\r
                        justify-between\r
                        gap-5\r
                    `,children:[e.jsxs("div",{className:"min-w-0",children:[e.jsx("h2",{className:`\r
                                text-lg sm:text-2xl\r
                                font-bold\r
                                text-charcoal-dark\r
                                break-words\r
                            `,children:"Website Visitors"}),e.jsx("p",{className:`\r
                            text-sm text-gray-500\r
                            mt-1\r
                            leading-relaxed\r
                        `,children:"Last 30 days traffic overview"})]}),e.jsxs("div",{className:`\r
                            w-full 2xl:w-auto\r
                            flex flex-col\r
                            sm:flex-row\r
                            sm:flex-wrap\r
                            items-stretch sm:items-center\r
                            gap-3\r
                        `,children:[e.jsxs("div",{className:`\r
                                flex-1 sm:flex-none\r
                                min-w-0 sm:min-w-[130px]\r
                                bg-gray-100\r
                                rounded-2xl\r
                                px-4 py-3\r
                            `,children:[e.jsx("p",{className:`\r
                                text-[11px] sm:text-xs\r
                                text-gray-500\r
                                uppercase\r
                                font-semibold\r
                                tracking-wide\r
                            `,children:"Total"}),e.jsx("p",{className:`\r
                                    text-lg sm:text-xl\r
                                    font-bold\r
                                    text-charcoal-dark\r
                                    mt-1\r
                                    truncate\r
                                `,children:(n==null?void 0:n.total)||0})]}),e.jsxs("div",{className:`\r
                                flex-1 sm:flex-none\r
                                min-w-0 sm:min-w-[130px]\r
                                bg-green-50\r
                                rounded-2xl\r
                                px-4 py-3\r
                            `,children:[e.jsx("p",{className:`\r
                                text-[11px] sm:text-xs\r
                                text-green-600\r
                                uppercase\r
                                font-semibold\r
                                tracking-wide\r
                            `,children:"Today"}),e.jsx("p",{className:`\r
                                    text-lg sm:text-xl\r
                                    font-bold\r
                                    text-green-700\r
                                    mt-1\r
                                    truncate\r
                                `,children:(n==null?void 0:n.today)||0})]}),e.jsx("button",{onClick:()=>j(!0),className:`\r
                                w-full sm:w-auto\r
                                h-[54px] sm:h-[58px]\r
                                px-5 sm:px-6\r
                                rounded-2xl\r
                                bg-bronze\r
                                hover:bg-bronze-dark\r
                                text-white\r
                                text-sm sm:text-base\r
                                font-semibold\r
                                transition-all\r
                                shadow-md\r
                                whitespace-nowrap\r
                                flex items-center justify-center\r
                                flex-shrink-0\r
                            `,children:"Show More"})]})]}),e.jsx("div",{className:"p-3 sm:p-5 lg:p-6",children:e.jsx("div",{className:`\r
                            h-[260px]\r
                            sm:h-[320px]\r
                            lg:h-[360px]\r
                            w-full\r
                        `,children:e.jsx(Ee,{width:"100%",height:"100%",children:e.jsxs(Qe,{data:pe,margin:{top:10,right:10,left:-20,bottom:0},children:[e.jsx(Oe,{strokeDasharray:"3 3",vertical:!1}),e.jsx(Ye,{dataKey:"date",tick:{fontSize:11},interval:"preserveStartEnd"}),e.jsx(Ke,{tick:{fontSize:11},width:35}),e.jsx(We,{}),e.jsx(_e,{type:"monotone",dataKey:"visitors",stroke:"#b8860b",strokeWidth:3,dot:{r:3},activeDot:{r:6}})]})})})}),he&&e.jsx("div",{className:`\r
                        fixed inset-0 z-50\r
                        flex items-center justify-center\r
                        bg-black/60 backdrop-blur-sm\r
                        p-4\r
                    `,children:e.jsxs("div",{className:`\r
                            w-full max-w-2xl\r
                            bg-white\r
                            rounded-3xl\r
                            shadow-2xl\r
                            overflow-hidden\r
                            animate-in fade-in zoom-in-95\r
                        `,children:[e.jsxs("div",{className:`\r
                                px-5 sm:px-6 py-5\r
                                border-b border-gray-100\r
                                flex items-center justify-between\r
                                gap-4\r
                            `,children:[e.jsxs("div",{children:[e.jsx("h3",{className:`\r
                                        text-xl sm:text-2xl\r
                                        font-bold\r
                                        text-charcoal-dark\r
                                    `,children:"Visitor Analytics"}),e.jsx("p",{className:"text-sm text-gray-500 mt-1",children:"Website visitor overview"})]}),e.jsx("button",{onClick:()=>j(!1),className:`\r
                                    w-10 h-10\r
                                    rounded-xl\r
                                    hover:bg-gray-100\r
                                    transition-colors\r
                                    flex items-center justify-center\r
                                    text-gray-500\r
                                `,children:"✕"})]}),e.jsxs("div",{className:`\r
                                p-5 sm:p-6\r
                                grid sm:grid-cols-2 gap-5\r
                            `,children:[e.jsxs("div",{className:`\r
                                bg-gradient-to-br\r
                                from-green-50\r
                                to-green-100/50\r
                                border border-green-200\r
                                rounded-3xl\r
                                p-5\r
                            `,children:[e.jsx("p",{className:"text-sm font-semibold text-green-700 uppercase tracking-wide",children:"Today"}),e.jsx("h4",{className:`\r
                                        text-4xl font-bold\r
                                        text-green-800\r
                                        mt-3\r
                                    `,children:(n==null?void 0:n.today)||0}),e.jsx("p",{className:"text-sm text-green-700 mt-2",children:"Visitors today"})]}),e.jsxs("div",{className:`\r
                                    bg-gradient-to-br\r
                                    from-blue-50\r
                                    to-blue-100/50\r
                                    border border-blue-200\r
                                    rounded-3xl\r
                                    p-5\r
                                `,children:[e.jsx("p",{className:"text-sm font-semibold text-blue-700 uppercase tracking-wide",children:"This Week"}),e.jsx("h4",{className:`\r
                                        text-4xl font-bold\r
                                        text-blue-800\r
                                        mt-3\r
                                    `,children:(n==null?void 0:n.week)||0}),e.jsx("p",{className:"text-sm text-blue-700 mt-2",children:"Last 7 days visitors"})]}),e.jsxs("div",{className:`\r
                                    bg-gradient-to-br\r
                                    from-orange-50\r
                                    to-orange-100/50\r
                                    border border-orange-200\r
                                    rounded-3xl\r
                                    p-5\r
                                `,children:[e.jsx("p",{className:"text-sm font-semibold text-orange-700 uppercase tracking-wide",children:"This Month"}),e.jsx("h4",{className:`\r
                                        text-4xl font-bold\r
                                        text-orange-800\r
                                        mt-3\r
                                    `,children:(n==null?void 0:n.month)||0}),e.jsx("p",{className:"text-sm text-orange-700 mt-2",children:"Monthly traffic"})]}),e.jsxs("div",{className:`\r
                                    bg-gradient-to-br\r
                                    from-purple-50\r
                                    to-purple-100/50\r
                                    border border-purple-200\r
                                    rounded-3xl\r
                                    p-5\r
                                `,children:[e.jsx("p",{className:"text-sm font-semibold text-purple-700 uppercase tracking-wide",children:"This Year"}),e.jsx("h4",{className:`\r
                                        text-4xl font-bold\r
                                        text-purple-800\r
                                        mt-3\r
                                    `,children:(n==null?void 0:n.year)||0}),e.jsx("p",{className:"text-sm text-purple-700 mt-2",children:"Yearly visitors"})]})]}),e.jsx("div",{className:`\r
                                px-5 sm:px-6 py-5\r
                                border-t border-gray-100\r
                                bg-gray-50/50\r
                                flex justify-end\r
                            `,children:e.jsx("button",{onClick:()=>j(!1),className:`\r
                                    px-6 py-3\r
                                    rounded-2xl\r
                                    bg-charcoal-dark\r
                                    hover:bg-bronze\r
                                    text-white\r
                                    font-semibold\r
                                    transition-colors\r
                                `,children:"Close"})})]})})]}),e.jsxs("div",{className:`\r
                grid\r
                xl:grid-cols-3\r
                gap-6\r
            `,children:[e.jsxs("div",{className:`\r
                xl:col-span-2\r
                bg-white\r
                rounded-3xl\r
                border border-gray-200\r
                shadow-sm\r
                overflow-hidden\r
            `,children:[e.jsxs("div",{className:`\r
                    px-5 sm:px-6 py-5\r
                    border-b border-gray-100\r
                    flex items-center justify-between\r
                    gap-4\r
                `,children:[e.jsxs("div",{children:[e.jsx("h2",{className:`\r
                            text-xl font-bold\r
                            text-charcoal-dark\r
                        `,children:"Recent Activity"}),e.jsx("p",{className:`\r
                            text-sm text-gray-500 mt-1\r
                        `,children:"Latest updates across your system"})]}),e.jsx("button",{onClick:b,className:`\r
                            text-sm font-semibold\r
                            text-bronze\r
                            hover:text-bronze-dark\r
                        `,children:"Refresh"})]}),e.jsx("div",{className:"p-5 sm:p-6",children:e.jsx("div",{className:"space-y-5",children:Z.map((t,l)=>e.jsxs("div",{className:`\r
                                    flex flex-col sm:flex-row\r
                                    sm:items-start\r
                                    justify-between\r
                                    gap-3\r
                                    border-l-4 border-bronze\r
                                    pl-4\r
                                `,children:[e.jsxs("div",{className:"min-w-0",children:[e.jsx("div",{className:`\r
                                        flex flex-wrap items-center gap-2\r
                                        mb-1\r
                                    `,children:e.jsx("span",{className:`\r
                                            text-xs font-bold\r
                                            uppercase tracking-wide\r
                                            text-bronze\r
                                            bg-bronze/10\r
                                            px-2 py-1\r
                                            rounded-lg\r
                                        `,children:t.type})}),e.jsx("p",{className:`\r
                                        text-gray-700\r
                                        leading-relaxed\r
                                    `,children:t.text})]}),e.jsx("span",{className:`\r
                                    text-xs text-gray-400\r
                                    whitespace-nowrap\r
                                `,children:new Date(t.date).toLocaleDateString()})]},l))})})]}),e.jsxs("div",{className:`\r
                bg-white\r
                rounded-3xl\r
                border border-gray-200\r
                shadow-sm\r
                overflow-hidden\r
            `,children:[e.jsxs("div",{className:`\r
                    px-5 sm:px-6 py-5\r
                    border-b border-gray-100\r
                `,children:[e.jsx("h2",{className:`\r
                        text-xl font-bold\r
                        text-charcoal-dark\r
                    `,children:"System Status"}),e.jsx("p",{className:`\r
                        text-sm text-gray-500 mt-1\r
                    `,children:"Live backend service monitoring"})]}),e.jsxs("div",{className:"p-5 sm:p-6 space-y-3",children:[e.jsx(x,{label:"Database",status:m}),e.jsx(x,{label:"Market API",status:f}),e.jsx(x,{label:"Blog API",status:re}),e.jsx(x,{label:"Subscriber System",status:W}),e.jsx(x,{label:"Lead System",status:_})]})]})]}),e.jsxs("div",{className:`\r
            bg-white\r
            rounded-3xl\r
            border border-gray-200\r
            shadow-sm\r
            overflow-hidden\r
        `,children:[e.jsxs("div",{className:`\r
                px-5 sm:px-6 py-5\r
                border-b border-gray-100\r
                flex flex-col sm:flex-row\r
                sm:items-center\r
                justify-between\r
                gap-4\r
            `,children:[e.jsxs("div",{children:[e.jsx("h2",{className:`\r
                        text-xl font-bold\r
                        text-charcoal-dark\r
                    `,children:"Recent Leads"}),e.jsx("p",{className:`\r
                        text-sm text-gray-500 mt-1\r
                    `,children:"Latest customer inquiries and contact requests"})]}),e.jsxs("button",{onClick:()=>a("/admin/leads"),className:`\r
                        inline-flex items-center gap-2\r
                        text-bronze font-semibold\r
                        hover:text-bronze-dark\r
                        transition-colors\r
                    `,children:["View All",e.jsx(F,{className:"w-4 h-4"})]})]}),e.jsx("div",{className:`\r
                overflow-x-auto\r
                main-scrollbar\r
            `,children:e.jsxs("table",{className:`\r
                    w-full min-w-[760px]\r
                `,children:[e.jsx("thead",{className:`\r
                        bg-gray-50\r
                    `,children:e.jsxs("tr",{children:[e.jsx("th",{className:`\r
                                px-6 py-4\r
                                text-left\r
                                text-xs font-bold\r
                                uppercase\r
                                tracking-wide\r
                                text-gray-500\r
                            `,children:"Email"}),e.jsx("th",{className:`\r
                                px-6 py-4\r
                                text-left\r
                                text-xs font-bold\r
                                uppercase\r
                                tracking-wide\r
                                text-gray-500\r
                            `,children:"Phone"}),e.jsx("th",{className:`\r
                                px-6 py-4\r
                                text-left\r
                                text-xs font-bold\r
                                uppercase\r
                                tracking-wide\r
                                text-gray-500\r
                            `,children:"Type"}),e.jsx("th",{className:`\r
                                px-6 py-4\r
                                text-left\r
                                text-xs font-bold\r
                                uppercase\r
                                tracking-wide\r
                                text-gray-500\r
                            `,children:"Date"})]})}),e.jsx("tbody",{className:`\r
                        divide-y divide-gray-100\r
                    `,children:G.map((t,l)=>e.jsxs("tr",{className:`\r
                                    hover:bg-gray-50/60\r
                                    transition-colors\r
                                `,children:[e.jsx("td",{className:`\r
                                    px-6 py-5\r
                                    font-medium\r
                                    text-charcoal-dark\r
                                `,children:t.email}),e.jsx("td",{className:`\r
                                    px-6 py-5\r
                                    text-gray-500\r
                                `,children:t.phone||"N/A"}),e.jsx("td",{className:`\r
                                    px-6 py-5\r
                                `,children:e.jsx("span",{className:`\r
                                        inline-flex items-center\r
                                        px-3 py-1\r
                                        rounded-full\r
                                        text-xs font-bold\r
                                        bg-bronze/10\r
                                        text-bronze\r
                                    `,children:t.classification_tag||"Lead"})}),e.jsx("td",{className:`\r
                                    px-6 py-5\r
                                    text-sm text-gray-500\r
                                `,children:new Date(t.createdAt).toLocaleDateString()})]},l))})]})})]})]})}function c({title:a,onClick:d}){return e.jsx("button",{onClick:d,className:`\r
                bg-white\r
                border border-gray-200\r
                rounded-2xl\r
                p-5\r
                text-left\r
                hover:border-bronze\r
                hover:shadow-md\r
                transition-all\r
                group\r
            `,children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"font-semibold text-charcoal-dark group-hover:text-bronze transition-colors",children:a}),e.jsx(F,{className:"w-5 h-5 text-gray-400 group-hover:text-bronze transition-colors"})]})})}function x({label:a,status:d}){const u=d!=="Down";return e.jsxs("div",{className:"flex items-center justify-between p-4 rounded-xl bg-gray-50 mb-3",children:[e.jsx("span",{className:"font-medium text-charcoal-dark",children:a}),e.jsx("span",{className:`
                    px-3 py-1 rounded-full
                    text-xs font-bold
                    ${u?"bg-green-100 text-green-700":"bg-red-100 text-red-700"}
                `,children:d})]})}export{or as default};
