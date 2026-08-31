import{r as s,j as e,d}from"./utilities-CctrEpBK.js";import{b as Be}from"./react-LWYCItZ7.js";import{A as Fe}from"./activity-B-cMqFDY.js";import{R as V}from"./refresh-cw-DUCoRDOg.js";import{c as Ue,H as Ie,f as Pe,A as E}from"./index-DOj8FycN.js";import{F as qe}from"./file-text-D4ZyuMvg.js";import{U as Ve}from"./users-CaeZhrxY.js";import{M as Ee}from"./message-circle-question-Dghk1RIh.js";import{T as Oe}from"./trending-up-2Tb7pYox.js";import{R as Qe,L as Ye,C as Ke,X as We,Y as _e,T as He,a as Xe}from"./charts-CiUfmHhv.js";import"./supabase-DWWbfOGS.js";/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ge=Ue("CircleDot",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}]]),m="https://realtorparth.ca",Je="282923";function cr(){const l=Be(),[h,p]=s.useState(!0),[O,Q]=s.useState(0),[Y,K]=s.useState(0),[W,_]=s.useState(0),[H,X]=s.useState(0),[G,A]=s.useState("Live"),[J,C]=s.useState("Live"),[Z,ee]=s.useState(0),[re,ne]=s.useState([]),[se,te]=s.useState([]),[u,ae]=s.useState("Connected"),[k,$]=s.useState("Live"),[le,z]=s.useState("Live"),[ie,oe]=s.useState(""),[de,ce]=s.useState(0),[xe,me]=s.useState(0),[he,be]=s.useState(0),[ge,pe]=s.useState(0),[ue,fe]=s.useState(0),[je,f]=s.useState(!1),[t,ve]=s.useState(null),[ye,Ne]=s.useState([]),[S,we]=s.useState([]),[L,ke]=s.useState([]),Se=n=>!n||n==="UN"?"🌐":n.toUpperCase().split("").map(a=>String.fromCodePoint(127397+a.charCodeAt(0))).join(""),j=async()=>{var n,a,c,x,i,v,y,R;try{p(!0);const[o,T,M,B,F,De,Ae]=await Promise.all([d.get(`${m}/api/properties/office/admin/${Je}`,{timeout:3e4}),d.get(`${m}/api/blogging/dashboard-stats`,{timeout:1e4}),d.get(`${m}/api/faqs/dashboard-stats`,{timeout:1e4}),d.get(`${m}/api/contact/dashboard-stats`,{timeout:1e4}),d.get(`${m}/api/subscribe/dashboard-stats`,{timeout:1e4}),d.get(`${m}/api/analytics/dashboard-monthly-visitors`,{timeout:1e4}),d.get(`${m}/api/analytics/dashboard-summary`,{timeout:1e4})]),N=((a=(n=o.data)==null?void 0:n.properties)==null?void 0:a.results)||((c=o.data)==null?void 0:c.properties)||[];console.log("✅ Dashboard Listings:",N.length),Q(N.length);const U=N.filter(r=>r.isSelected===!0).length;console.log("✅ Selected Listings:",U),fe(U),$("Live");let I=[];if(T.data){const r=T.data;K(r.totalBlogs??r.total??0),be(r.publishedBlogs??r.published??0),pe(r.draftBlogs??r.drafts??0),I=r.recentBlogs||[],z("Live")}let P=[];if(M.data){const r=M.data;_(r.totalFaqs??r.total??0),P=r.recentFaqs||[]}let q=[];if(B.data){const r=B.data;ee(r.totalLeads??r.total??0);const w=r.recentLeads||[];q=r.activityLeads||w||[],ne(w),C("Live")}if(F.data){const r=F.data;X(r.totalSubscribers??r.total??0),ce(r.activeSubscribers??r.active??0),me(r.unsubscribedSubscribers??r.unsubscribed??0),A("Live")}const Ce=((x=De.data)==null?void 0:x.data)||[];Ne(Ce.map(r=>({date:r._id,visitors:r.visitors})));const D=((i=Ae.data)==null?void 0:i.data)||{};ve(D),we(D.topCountries||[]),ke(D.devices||[]);const $e=I.slice(0,2).map(r=>({type:"Blog",text:`New blog published: ${r.title}`,date:r.createdAt||new Date().toISOString()})),ze=N.slice(0,2).map(r=>({type:"Listing",text:`New listing added: ${r.UnparsedAddress||"Property"}`,date:r.ListingContractDate||new Date().toISOString()})),Re=P.slice(0,2).map(r=>({type:"FAQ",text:`FAQ updated: ${r.question}`,date:r.updatedAt||r.createdAt||new Date().toISOString()})),Te=q.slice(0,2).map(r=>({type:"Lead",text:`New lead from ${r.email}`,date:r.createdAt||new Date().toISOString()})),Me=[...$e,...ze,...Re,...Te].filter(r=>r.date).sort((r,w)=>new Date(w.date).getTime()-new Date(r.date).getTime()).slice(0,8);te(Me),ae("Connected"),$("Live"),z("Live"),A("Live"),C("Live"),oe(new Date().toLocaleTimeString())}catch(o){console.error("❌ Dashboard Error:",o),d.isAxiosError(o)&&(console.error("URL:",(v=o.config)==null?void 0:v.url),console.error("Status:",(y=o.response)==null?void 0:y.status),console.error("Response:",(R=o.response)==null?void 0:R.data))}finally{p(!1)}};s.useEffect(()=>{j();const n=setInterval(j,3e4);return()=>clearInterval(n)},[]);const Le=[{label:"Listings",value:O,subtext:`${ue} Selected Properties`,icon:Ie,color:"bg-blue-500"},{label:"Blogs",value:Y,subtext:`${he} Published • ${ge} Draft`,icon:qe,color:"bg-purple-500"},{label:"Leads",value:Z,subtext:"Customer inquiries",icon:Ve,color:"bg-green-500"},{label:"Subscribers",value:H,subtext:`${de} Active • ${xe} Unsubscribed`,icon:Pe,color:"bg-orange-500"},{label:"FAQs",value:W,subtext:"Knowledge base",icon:Ee,color:"bg-pink-500"},{label:"Market Status",value:k,subtext:"MLS API Connected",icon:Oe,color:k==="Live"?"bg-emerald-500":"bg-red-500"}];return e.jsxs("div",{className:"space-y-6 sm:space-y-8",children:[e.jsxs("div",{className:"relative overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm",children:[e.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-bronze/5 via-transparent to-transparent"}),e.jsx("div",{className:"relative p-5 sm:p-7 lg:p-8",children:e.jsxs("div",{className:"flex flex-col 2xl:flex-row 2xl:items-center justify-between gap-6",children:[e.jsxs("div",{className:"min-w-0",children:[e.jsxs("div",{className:"flex items-start sm:items-center gap-4",children:[e.jsx("div",{className:`\r
                                w-14 h-14 sm:w-16 sm:h-16\r
                                rounded-2xl\r
                                bg-bronze/10\r
                                flex items-center justify-center\r
                                flex-shrink-0\r
                            `,children:e.jsx(Fe,{className:"w-7 h-7 sm:w-8 sm:h-8 text-bronze"})}),e.jsxs("div",{className:"min-w-0",children:[e.jsx("h1",{className:`\r
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
    `,children:[e.jsx(V,{className:"w-4 h-4 animate-spin"}),e.jsx("span",{className:"font-medium",children:"Auto Refresh:"}),e.jsxs("span",{children:["Every 30s • Updated: ",ie]})]}),e.jsxs("div",{className:`
        inline-flex items-center gap-2
        px-3 py-2
        rounded-xl
        text-sm font-medium
        ${u==="Down"?"bg-red-50 text-red-700":"bg-green-50 text-green-700"}
    `,children:[e.jsx(Ge,{className:`
            w-3 h-3
            ${u==="Down"?"fill-red-600 text-red-600":"fill-green-600 text-green-600"}
        `}),u==="Down"?"System Offline":"System Online"]})]})]}),e.jsx("div",{className:`\r
                        flex flex-col sm:flex-row\r
                        gap-3\r
                        w-full 2xl:w-auto\r
                    `,children:e.jsxs("button",{onClick:j,className:`\r
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
                            `,children:[e.jsx(V,{className:"w-4 h-4"}),"Refresh Data"]})})]})})]}),e.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-3 2xl:grid-cols-6 gap-4",children:[e.jsx(b,{title:"Manage Blogs",onClick:()=>l("/admin/blogs")}),e.jsx(b,{title:"Manage Listings",onClick:()=>l("/admin/listings")}),e.jsx(b,{title:"View Leads",onClick:()=>l("/admin/leads")}),e.jsx(b,{title:"FAQs",onClick:()=>l("/admin/faqs")}),e.jsx(b,{title:"Newsletter",onClick:()=>l("/admin/subscriptions")}),e.jsx(b,{title:"Neighborhoods",onClick:()=>l("/admin/community-list")})]}),e.jsx("div",{className:`\r
            grid\r
            sm:grid-cols-2\r
            xl:grid-cols-3\r
            2xl:grid-cols-6\r
            gap-5\r
        `,children:Le.map((n,a)=>e.jsxs("div",{className:`\r
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
                            `,children:n.label}),e.jsx("h3",{className:`\r
                                text-3xl sm:text-4xl\r
                                font-bold\r
                                text-charcoal-dark\r
                                tracking-tight\r
                                leading-none\r
                            `,children:h?"—":n.value})]}),e.jsx("div",{className:`
                                w-14 h-14
                                rounded-2xl
                                flex items-center justify-center
                                text-white
                                shadow-md
                                flex-shrink-0
                                ${n.color}
                            `,children:e.jsx(n.icon,{className:"w-6 h-6"})})]}),e.jsx("div",{className:`\r
                        mt-5 pt-4\r
                        border-t border-gray-100\r
                    `,children:e.jsx("p",{className:`\r
                            text-xs sm:text-sm\r
                            text-gray-500\r
                            leading-relaxed\r
                        `,children:n.subtext})})]},a))}),e.jsxs("div",{className:`\r
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
                                `,children:(t==null?void 0:t.total)||0})]}),e.jsxs("div",{className:`\r
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
                                `,children:(t==null?void 0:t.today)||0})]}),e.jsx("button",{onClick:()=>f(!0),className:`\r
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
                        `,children:e.jsx(Qe,{width:"100%",height:"100%",children:e.jsxs(Ye,{data:ye,margin:{top:10,right:10,left:-20,bottom:0},children:[e.jsx(Ke,{strokeDasharray:"3 3",vertical:!1}),e.jsx(We,{dataKey:"date",tick:{fontSize:11},interval:"preserveStartEnd"}),e.jsx(_e,{tick:{fontSize:11},width:35}),e.jsx(He,{}),e.jsx(Xe,{type:"monotone",dataKey:"visitors",stroke:"#b8860b",strokeWidth:3,dot:{r:3},activeDot:{r:6}})]})})})}),je&&e.jsx("div",{className:`\r
            fixed inset-0 z-50\r
            flex items-center justify-center\r
            bg-black/60 backdrop-blur-sm\r
            p-4\r
        `,onClick:()=>f(!1),children:e.jsxs("div",{className:`\r
                w-full\r
                max-w-4xl\r
                max-h-[90vh]\r
                bg-white\r
                rounded-3xl\r
                shadow-2xl\r
                overflow-hidden\r
                animate-in\r
                fade-in\r
                zoom-in-95\r
                flex\r
                flex-col\r
            `,onClick:n=>n.stopPropagation(),children:[e.jsxs("div",{className:`\r
                    px-5 sm:px-6\r
                    py-5\r
                    border-b border-gray-100\r
                    flex items-center justify-between\r
                    gap-4\r
                    shrink-0\r
                `,children:[e.jsxs("div",{children:[e.jsx("h3",{className:`\r
                            text-xl sm:text-2xl\r
                            font-bold\r
                            text-charcoal-dark\r
                        `,children:"Visitor Analytics"}),e.jsx("p",{className:"text-sm text-gray-500 mt-1",children:"Website visitor overview"})]}),e.jsx("button",{type:"button",onClick:()=>f(!1),className:`\r
                        w-10 h-10\r
                        rounded-xl\r
                        hover:bg-gray-100\r
                        transition-colors\r
                        flex items-center\r
                        justify-center\r
                        text-gray-500\r
                        text-lg\r
                        shrink-0\r
                    `,children:"✕"})]}),e.jsxs("div",{className:`\r
                    p-5 sm:p-6\r
                    overflow-y-auto\r
                `,children:[e.jsxs("div",{className:`\r
                        grid\r
                        grid-cols-1\r
                        sm:grid-cols-2\r
                        gap-4 sm:gap-5\r
                    `,children:[e.jsxs("div",{className:`\r
                            bg-gradient-to-br\r
                            from-green-50\r
                            to-green-100/50\r
                            border border-green-200\r
                            rounded-3xl\r
                            p-5\r
                        `,children:[e.jsx("p",{className:`\r
                                text-sm\r
                                font-semibold\r
                                text-green-700\r
                                uppercase\r
                                tracking-wide\r
                            `,children:"Today"}),e.jsx("h4",{className:`\r
                                text-4xl\r
                                font-bold\r
                                text-green-800\r
                                mt-3\r
                            `,children:(t==null?void 0:t.today)||0}),e.jsx("p",{className:`\r
                                text-sm\r
                                text-green-700\r
                                mt-2\r
                            `,children:"Visitors today"})]}),e.jsxs("div",{className:`\r
                            bg-gradient-to-br\r
                            from-blue-50\r
                            to-blue-100/50\r
                            border border-blue-200\r
                            rounded-3xl\r
                            p-5\r
                        `,children:[e.jsx("p",{className:`\r
                                text-sm\r
                                font-semibold\r
                                text-blue-700\r
                                uppercase\r
                                tracking-wide\r
                            `,children:"This Week"}),e.jsx("h4",{className:`\r
                                text-4xl\r
                                font-bold\r
                                text-blue-800\r
                                mt-3\r
                            `,children:(t==null?void 0:t.week)||0}),e.jsx("p",{className:`\r
                                text-sm\r
                                text-blue-700\r
                                mt-2\r
                            `,children:"Last 7 days visitors"})]}),e.jsxs("div",{className:`\r
                            bg-gradient-to-br\r
                            from-orange-50\r
                            to-orange-100/50\r
                            border border-orange-200\r
                            rounded-3xl\r
                            p-5\r
                        `,children:[e.jsx("p",{className:`\r
                                text-sm\r
                                font-semibold\r
                                text-orange-700\r
                                uppercase\r
                                tracking-wide\r
                            `,children:"This Month"}),e.jsx("h4",{className:`\r
                                text-4xl\r
                                font-bold\r
                                text-orange-800\r
                                mt-3\r
                            `,children:(t==null?void 0:t.month)||0}),e.jsx("p",{className:`\r
                                text-sm\r
                                text-orange-700\r
                                mt-2\r
                            `,children:"Monthly traffic"})]}),e.jsxs("div",{className:`\r
                            bg-gradient-to-br\r
                            from-purple-50\r
                            to-purple-100/50\r
                            border border-purple-200\r
                            rounded-3xl\r
                            p-5\r
                        `,children:[e.jsx("p",{className:`\r
                                text-sm\r
                                font-semibold\r
                                text-purple-700\r
                                uppercase\r
                                tracking-wide\r
                            `,children:"This Year"}),e.jsx("h4",{className:`\r
                                text-4xl\r
                                font-bold\r
                                text-purple-800\r
                                mt-3\r
                            `,children:(t==null?void 0:t.year)||0}),e.jsx("p",{className:`\r
                                text-sm\r
                                text-purple-700\r
                                mt-2\r
                            `,children:"Yearly visitors"})]})]}),e.jsxs("div",{className:`\r
                        grid\r
                        grid-cols-1\r
                        lg:grid-cols-2\r
                        gap-5\r
                        mt-5\r
                    `,children:[e.jsxs("div",{className:`\r
                            border\r
                            border-gray-200\r
                            rounded-3xl\r
                            overflow-hidden\r
                            bg-white\r
                        `,children:[e.jsxs("div",{className:`\r
                                px-5\r
                                py-4\r
                                border-b\r
                                border-gray-100\r
                                flex\r
                                items-center\r
                                justify-between\r
                                gap-3\r
                            `,children:[e.jsxs("div",{children:[e.jsx("h4",{className:`\r
                                        text-base\r
                                        font-bold\r
                                        text-charcoal-dark\r
                                    `,children:"Top Countries"}),e.jsx("p",{className:`\r
                                        text-xs\r
                                        text-gray-500\r
                                        mt-1\r
                                    `,children:"Most visits by country"})]}),e.jsx("div",{className:`\r
                                    w-9\r
                                    h-9\r
                                    rounded-xl\r
                                    bg-bronze/10\r
                                    flex\r
                                    items-center\r
                                    justify-center\r
                                    text-lg\r
                                `,children:"🌍"})]}),e.jsx("div",{className:"p-5",children:S.length===0?e.jsxs("div",{className:`\r
                                        py-8\r
                                        text-center\r
                                    `,children:[e.jsx("div",{className:"text-3xl mb-2",children:"🌍"}),e.jsx("p",{className:`\r
                                            text-sm\r
                                            text-gray-400\r
                                        `,children:"No country data yet"})]}):e.jsx("div",{className:"space-y-4",children:S.map((n,a)=>{var i;const c=((i=S[0])==null?void 0:i.visitors)||1,x=Math.min(100,Math.round(n.visitors/c*100));return e.jsxs("div",{className:`\r
                                                        flex\r
                                                        items-center\r
                                                        gap-3\r
                                                    `,children:[e.jsx("div",{className:`\r
                                                            w-5\r
                                                            text-xs\r
                                                            font-bold\r
                                                            text-gray-400\r
                                                            text-center\r
                                                            shrink-0\r
                                                        `,children:a+1}),e.jsx("div",{className:`\r
                                                            w-9\r
                                                            h-9\r
                                                            rounded-xl\r
                                                            bg-gray-50\r
                                                            border\r
                                                            border-gray-100\r
                                                            flex\r
                                                            items-center\r
                                                            justify-center\r
                                                            text-lg\r
                                                            shrink-0\r
                                                        `,children:Se(n.countryCode)}),e.jsxs("div",{className:`\r
                                                            flex-1\r
                                                            min-w-0\r
                                                        `,children:[e.jsxs("div",{className:`\r
                                                                flex\r
                                                                items-center\r
                                                                justify-between\r
                                                                gap-3\r
                                                                mb-1.5\r
                                                            `,children:[e.jsx("p",{className:`\r
                                                                    text-sm\r
                                                                    font-semibold\r
                                                                    text-gray-800\r
                                                                    truncate\r
                                                                `,children:n.country}),e.jsx("p",{className:`\r
                                                                    text-sm\r
                                                                    font-bold\r
                                                                    text-charcoal-dark\r
                                                                    shrink-0\r
                                                                `,children:n.visitors.toLocaleString()})]}),e.jsx("div",{className:`\r
                                                                h-1.5\r
                                                                w-full\r
                                                                bg-gray-100\r
                                                                rounded-full\r
                                                                overflow-hidden\r
                                                            `,children:e.jsx("div",{className:`\r
                                                                    h-full\r
                                                                    bg-bronze\r
                                                                    rounded-full\r
                                                                    transition-all\r
                                                                    duration-500\r
                                                                `,style:{width:`${x}%`}})})]})]},`${n.countryCode}-${a}`)})})})]}),e.jsxs("div",{className:`\r
                            border\r
                            border-gray-200\r
                            rounded-3xl\r
                            overflow-hidden\r
                            bg-white\r
                        `,children:[e.jsxs("div",{className:`\r
                                px-5\r
                                py-4\r
                                border-b\r
                                border-gray-100\r
                                flex\r
                                items-center\r
                                justify-between\r
                                gap-3\r
                            `,children:[e.jsxs("div",{children:[e.jsx("h4",{className:`\r
                                        text-base\r
                                        font-bold\r
                                        text-charcoal-dark\r
                                    `,children:"Devices"}),e.jsx("p",{className:`\r
                                        text-xs\r
                                        text-gray-500\r
                                        mt-1\r
                                    `,children:"Devices used by visitors"})]}),e.jsx("div",{className:`\r
                                    w-9\r
                                    h-9\r
                                    rounded-xl\r
                                    bg-bronze/10\r
                                    flex\r
                                    items-center\r
                                    justify-center\r
                                    text-lg\r
                                `,children:"💻"})]}),e.jsx("div",{className:"p-5",children:L.length===0?e.jsxs("div",{className:`\r
                                        py-8\r
                                        text-center\r
                                    `,children:[e.jsx("div",{className:"text-3xl mb-2",children:"💻"}),e.jsx("p",{className:`\r
                                            text-sm\r
                                            text-gray-400\r
                                        `,children:"No device data yet"})]}):e.jsx("div",{className:"space-y-5",children:L.map((n,a)=>{const c=L.reduce((v,y)=>v+y.visitors,0),x=c>0?Math.round(n.visitors/c*100):0;let i="🌐";return n.device==="Desktop"?i="💻":(n.device==="Mobile"||n.device==="Tablet")&&(i="📱"),e.jsxs("div",{className:`\r
                                                        flex\r
                                                        items-center\r
                                                        gap-4\r
                                                    `,children:[e.jsx("div",{className:`\r
                                                            w-11\r
                                                            h-11\r
                                                            rounded-2xl\r
                                                            bg-gray-50\r
                                                            border\r
                                                            border-gray-100\r
                                                            flex\r
                                                            items-center\r
                                                            justify-center\r
                                                            text-xl\r
                                                            shrink-0\r
                                                        `,children:i}),e.jsxs("div",{className:`\r
                                                            flex-1\r
                                                            min-w-0\r
                                                        `,children:[e.jsxs("div",{className:`\r
                                                                flex\r
                                                                items-center\r
                                                                justify-between\r
                                                                gap-3\r
                                                                mb-1.5\r
                                                            `,children:[e.jsxs("div",{children:[e.jsx("p",{className:`\r
                                                                        text-sm\r
                                                                        font-semibold\r
                                                                        text-gray-800\r
                                                                    `,children:n.device}),e.jsxs("p",{className:`\r
                                                                        text-xs\r
                                                                        text-gray-400\r
                                                                        mt-0.5\r
                                                                    `,children:[x,"% of visits"]})]}),e.jsx("p",{className:`\r
                                                                    text-sm\r
                                                                    font-bold\r
                                                                    text-charcoal-dark\r
                                                                    shrink-0\r
                                                                `,children:n.visitors.toLocaleString()})]}),e.jsx("div",{className:`\r
                                                                h-1.5\r
                                                                w-full\r
                                                                bg-gray-100\r
                                                                rounded-full\r
                                                                overflow-hidden\r
                                                            `,children:e.jsx("div",{className:`\r
                                                                    h-full\r
                                                                    bg-charcoal-dark\r
                                                                    rounded-full\r
                                                                    transition-all\r
                                                                    duration-500\r
                                                                `,style:{width:`${x}%`}})})]})]},`${n.device}-${a}`)})})})]})]})]}),e.jsx("div",{className:`\r
                    px-5 sm:px-6\r
                    py-5\r
                    border-t border-gray-100\r
                    bg-gray-50/50\r
                    flex\r
                    justify-end\r
                    shrink-0\r
                `,children:e.jsx("button",{type:"button",onClick:()=>f(!1),className:`\r
                        px-6\r
                        py-3\r
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
                        `,children:"Latest updates across your system"})]}),e.jsx("button",{onClick:j,className:`\r
                            text-sm font-semibold\r
                            text-bronze\r
                            hover:text-bronze-dark\r
                        `,children:"Refresh"})]}),e.jsx("div",{className:"p-5 sm:p-6",children:e.jsx("div",{className:"space-y-5",children:se.map((n,a)=>e.jsxs("div",{className:`\r
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
                                        `,children:n.type})}),e.jsx("p",{className:`\r
                                        text-gray-700\r
                                        leading-relaxed\r
                                    `,children:n.text})]}),e.jsx("span",{className:`\r
                                    text-xs text-gray-400\r
                                    whitespace-nowrap\r
                                `,children:new Date(n.date).toLocaleDateString()})]},a))})})]}),e.jsxs("div",{className:`\r
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
                    `,children:"Live backend service monitoring"})]}),e.jsxs("div",{className:"p-5 sm:p-6 space-y-3",children:[e.jsx(g,{label:"Database",status:u}),e.jsx(g,{label:"Market API",status:k}),e.jsx(g,{label:"Blog API",status:le}),e.jsx(g,{label:"Subscriber System",status:G}),e.jsx(g,{label:"Lead System",status:J})]})]})]}),e.jsxs("div",{className:`\r
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
                    `,children:"Latest customer inquiries and contact requests"})]}),e.jsxs("button",{onClick:()=>l("/admin/leads"),className:`\r
                        inline-flex items-center gap-2\r
                        text-bronze font-semibold\r
                        hover:text-bronze-dark\r
                        transition-colors\r
                    `,children:["View All",e.jsx(E,{className:"w-4 h-4"})]})]}),e.jsx("div",{className:`\r
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
                    `,children:re.map((n,a)=>e.jsxs("tr",{className:`\r
                                    hover:bg-gray-50/60\r
                                    transition-colors\r
                                `,children:[e.jsx("td",{className:`\r
                                    px-6 py-5\r
                                    font-medium\r
                                    text-charcoal-dark\r
                                `,children:n.email}),e.jsx("td",{className:`\r
                                    px-6 py-5\r
                                    text-gray-500\r
                                `,children:n.phone||"N/A"}),e.jsx("td",{className:`\r
                                    px-6 py-5\r
                                `,children:e.jsx("span",{className:`\r
                                        inline-flex items-center\r
                                        px-3 py-1\r
                                        rounded-full\r
                                        text-xs font-bold\r
                                        bg-bronze/10\r
                                        text-bronze\r
                                    `,children:n.classification_tag||"Lead"})}),e.jsx("td",{className:`\r
                                    px-6 py-5\r
                                    text-sm text-gray-500\r
                                `,children:new Date(n.createdAt).toLocaleDateString()})]},a))})]})})]})]})}function b({title:l,onClick:h}){return e.jsx("button",{onClick:h,className:`\r
                bg-white\r
                border border-gray-200\r
                rounded-2xl\r
                p-5\r
                text-left\r
                hover:border-bronze\r
                hover:shadow-md\r
                transition-all\r
                group\r
            `,children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"font-semibold text-charcoal-dark group-hover:text-bronze transition-colors",children:l}),e.jsx(E,{className:"w-5 h-5 text-gray-400 group-hover:text-bronze transition-colors"})]})})}function g({label:l,status:h}){const p=h!=="Down";return e.jsxs("div",{className:"flex items-center justify-between p-4 rounded-xl bg-gray-50 mb-3",children:[e.jsx("span",{className:"font-medium text-charcoal-dark",children:l}),e.jsx("span",{className:`
                    px-3 py-1 rounded-full
                    text-xs font-bold
                    ${p?"bg-green-100 text-green-700":"bg-red-100 text-red-700"}
                `,children:h})]})}export{cr as default};
