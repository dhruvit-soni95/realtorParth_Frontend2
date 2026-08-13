import{r as s,j as r,d as o}from"./utilities-CctrEpBK.js";import{b as Vr}from"./react-LWYCItZ7.js";import{A as Ir}from"./activity-CUVBcNfA.js";import{R as I}from"./refresh-cw-D2vdHOkO.js";import{c as Er,H as Qr,f as Or,A as E}from"./index-B54ERYSY.js";import{F as Yr}from"./file-text-DkTPclWU.js";import{U as Kr}from"./users-B_T2ZFw_.js";import{M as Wr}from"./message-circle-question-Dk21Mdsy.js";import{T as _r}from"./trending-up-lpIL5iD8.js";import{R as Hr,L as Xr,C as Gr,X as Jr,Y as Zr,T as re,a as ee}from"./charts-CiUfmHhv.js";import"./supabase-DWWbfOGS.js";/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ne=Er("CircleDot",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}]]),x="https://realtorparth.ca",se="282923";function ge(){const l=Vr(),[m,w]=s.useState(!0),[Q,O]=s.useState(0),[Y,K]=s.useState(0),[W,_]=s.useState(0),[H,X]=s.useState(0),[G,z]=s.useState("Live"),[J,T]=s.useState("Live"),[Z,rr]=s.useState(0),[er,nr]=s.useState([]),[sr,tr]=s.useState([]),[g,R]=s.useState("Connected"),[k,M]=s.useState("Live"),[ar,U]=s.useState("Live"),[lr,ir]=s.useState(""),[dr,cr]=s.useState(0),[or,xr]=s.useState(0),[mr,hr]=s.useState(0),[br,gr]=s.useState(0),[pr,ur]=s.useState(0),[fr,p]=s.useState(!1),[jr,vr]=s.useState([]),[t,yr]=s.useState(null),[S,Nr]=s.useState([]),[L,wr]=s.useState([]),kr=e=>!e||e==="UN"?"🌐":e.toUpperCase().split("").map(a=>String.fromCodePoint(127397+a.charCodeAt(0))).join(""),u=async()=>{var e,a,d,c,i,f,j,P,B;try{const[v,y,F,Lr,q,Ar,Cr]=await Promise.all([o.get(`${x}/api/properties/office/admin/${se}`),o.get(`${x}/api/blogging/blogs`),o.get(`${x}/api/faqs`),o.get(`${x}/api/contact`),o.get(`${x}/api/subscribe`),o.get(`${x}/api/analytics/monthly-visitors`),o.get(`${x}/api/analytics/summary`)]),A=((a=(e=v.data)==null?void 0:e.properties)==null?void 0:a.results)||((d=v.data)==null?void 0:d.properties)||[],N=Array.isArray(y.data)?y.data:((c=y.data)==null?void 0:c.blogs)||((i=y.data)==null?void 0:i.data)||[],V=Array.isArray(F.data)?F.data:[],C=((f=Lr.data)==null?void 0:f.data)||[],D=((j=q.data)==null?void 0:j.data)||[];O(A.length||0);const Dr=A.filter(n=>n.isSelected===!0).length;ur(Dr),K(N.length||0);const $r=N.filter(n=>(n.status||"draft")==="published").length,zr=N.filter(n=>(n.status||"draft")==="draft").length;hr($r),gr(zr),_(V.length||0),rr(C.length||0),X(((P=q.data)==null?void 0:P.total)||D.length||0);const Tr=D.filter(n=>n.status!=="Unsubscribed").length,Rr=D.filter(n=>n.status==="Unsubscribed").length;cr(Tr),xr(Rr),nr(C.slice(0,5)),vr(Ar.data.data.map(n=>({date:n._id,visitors:n.visitors})));const $=((B=Cr.data)==null?void 0:B.data)||{};yr($),Nr($.topCountries||[]),wr($.devices||[]);const Mr=N.slice(0,2).map(n=>({type:"Blog",text:`New blog published: ${n.title}`,date:n.createdAt})),Ur=A.slice(0,2).map(n=>({type:"Listing",text:`New listing added: ${n.UnparsedAddress||"Property"}`,date:n.ListingContractDate||new Date().toISOString()})),Pr=V.slice(0,2).map(n=>({type:"FAQ",text:`FAQ updated: ${n.question}`,date:n.updatedAt||n.createdAt})),Br=C.slice(0,2).map(n=>({type:"Lead",text:`New lead from ${n.email}`,date:n.createdAt})),Fr=[...Mr,...Ur,...Pr,...Br].sort((n,qr)=>new Date(qr.date).getTime()-new Date(n.date).getTime()).slice(0,8);tr(Fr),R("Connected"),M("Live"),U("Live"),z("Live"),T("Live"),ir(new Date().toLocaleTimeString())}catch(v){console.error(v),R("Down"),M("Down"),U("Down"),z("Down"),T("Down")}finally{w(!1)}};s.useEffect(()=>{u();const e=setInterval(u,3e4);return()=>clearInterval(e)},[]);const Sr=[{label:"Listings",value:Q,subtext:`${pr} Selected Properties`,icon:Qr,color:"bg-blue-500"},{label:"Blogs",value:Y,subtext:`${mr} Published • ${br} Draft`,icon:Yr,color:"bg-purple-500"},{label:"Leads",value:Z,subtext:"Customer inquiries",icon:Kr,color:"bg-green-500"},{label:"Subscribers",value:H,subtext:`${dr} Active • ${or} Unsubscribed`,icon:Or,color:"bg-orange-500"},{label:"FAQs",value:W,subtext:"Knowledge base",icon:Wr,color:"bg-pink-500"},{label:"Market Status",value:k,subtext:"MLS API Connected",icon:_r,color:k==="Live"?"bg-emerald-500":"bg-red-500"}];return r.jsxs("div",{className:"space-y-6 sm:space-y-8",children:[r.jsxs("div",{className:"relative overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm",children:[r.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-bronze/5 via-transparent to-transparent"}),r.jsx("div",{className:"relative p-5 sm:p-7 lg:p-8",children:r.jsxs("div",{className:"flex flex-col 2xl:flex-row 2xl:items-center justify-between gap-6",children:[r.jsxs("div",{className:"min-w-0",children:[r.jsxs("div",{className:"flex items-start sm:items-center gap-4",children:[r.jsx("div",{className:`\r
                                w-14 h-14 sm:w-16 sm:h-16\r
                                rounded-2xl\r
                                bg-bronze/10\r
                                flex items-center justify-center\r
                                flex-shrink-0\r
                            `,children:r.jsx(Ir,{className:"w-7 h-7 sm:w-8 sm:h-8 text-bronze"})}),r.jsxs("div",{className:"min-w-0",children:[r.jsx("h1",{className:`\r
                                    text-2xl sm:text-3xl lg:text-4xl\r
                                    font-bold\r
                                    text-charcoal-dark\r
                                    leading-tight\r
                                `,children:"Dashboard Overview"}),r.jsx("p",{className:`\r
                                    text-gray-500\r
                                    mt-1\r
                                    text-sm sm:text-base\r
                                `,children:"Real-time analytics, activity monitoring, visitor tracking, and admin overview."})]})]}),r.jsxs("div",{className:`\r
                                mt-5\r
                                flex flex-wrap items-center gap-3 sm:gap-4\r
                            `,children:[r.jsxs("div",{className:`\r
        inline-flex items-center gap-2\r
        bg-gray-100\r
        px-3 py-2\r
        rounded-xl\r
        text-sm text-gray-600\r
    `,children:[r.jsx(I,{className:"w-4 h-4 animate-spin"}),r.jsx("span",{className:"font-medium",children:"Auto Refresh:"}),r.jsxs("span",{children:["Every 30s • Updated: ",lr]})]}),r.jsxs("div",{className:`
        inline-flex items-center gap-2
        px-3 py-2
        rounded-xl
        text-sm font-medium
        ${g==="Down"?"bg-red-50 text-red-700":"bg-green-50 text-green-700"}
    `,children:[r.jsx(ne,{className:`
            w-3 h-3
            ${g==="Down"?"fill-red-600 text-red-600":"fill-green-600 text-green-600"}
        `}),g==="Down"?"System Offline":"System Online"]})]})]}),r.jsx("div",{className:`\r
                        flex flex-col sm:flex-row\r
                        gap-3\r
                        w-full 2xl:w-auto\r
                    `,children:r.jsxs("button",{onClick:u,className:`\r
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
                            `,children:[r.jsx(I,{className:"w-4 h-4"}),"Refresh Data"]})})]})})]}),r.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-3 2xl:grid-cols-6 gap-4",children:[r.jsx(h,{title:"Manage Blogs",onClick:()=>l("/admin/blogs")}),r.jsx(h,{title:"Manage Listings",onClick:()=>l("/admin/listings")}),r.jsx(h,{title:"View Leads",onClick:()=>l("/admin/leads")}),r.jsx(h,{title:"FAQs",onClick:()=>l("/admin/faqs")}),r.jsx(h,{title:"Newsletter",onClick:()=>l("/admin/subscriptions")}),r.jsx(h,{title:"Neighborhoods",onClick:()=>l("/admin/community-list")})]}),r.jsx("div",{className:`\r
            grid\r
            sm:grid-cols-2\r
            xl:grid-cols-3\r
            2xl:grid-cols-6\r
            gap-5\r
        `,children:Sr.map((e,a)=>r.jsxs("div",{className:`\r
                        relative overflow-hidden\r
                        bg-white\r
                        border border-gray-200\r
                        rounded-3xl\r
                        shadow-sm\r
                        hover:shadow-lg\r
                        transition-all duration-300\r
                        p-5 sm:p-6\r
                    `,children:[r.jsxs("div",{className:"flex items-start justify-between gap-4",children:[r.jsxs("div",{className:"min-w-0 flex-1",children:[r.jsx("p",{className:`\r
                                text-sm font-medium\r
                                text-gray-500\r
                                mb-2\r
                            `,children:e.label}),r.jsx("h3",{className:`\r
                                text-3xl sm:text-4xl\r
                                font-bold\r
                                text-charcoal-dark\r
                                tracking-tight\r
                                leading-none\r
                            `,children:m?"—":e.value})]}),r.jsx("div",{className:`
                                w-14 h-14
                                rounded-2xl
                                flex items-center justify-center
                                text-white
                                shadow-md
                                flex-shrink-0
                                ${e.color}
                            `,children:r.jsx(e.icon,{className:"w-6 h-6"})})]}),r.jsx("div",{className:`\r
                        mt-5 pt-4\r
                        border-t border-gray-100\r
                    `,children:r.jsx("p",{className:`\r
                            text-xs sm:text-sm\r
                            text-gray-500\r
                            leading-relaxed\r
                        `,children:e.subtext})})]},a))}),r.jsxs("div",{className:`\r
                    bg-white\r
                    rounded-3xl\r
                    border border-gray-200\r
                    shadow-sm\r
                    overflow-hidden\r
                    w-full\r
                `,children:[r.jsxs("div",{className:`\r
                        px-4 sm:px-6 lg:px-7\r
                        py-5\r
                        border-b border-gray-100\r
                        flex flex-col\r
                        2xl:flex-row\r
                        2xl:items-center\r
                        justify-between\r
                        gap-5\r
                    `,children:[r.jsxs("div",{className:"min-w-0",children:[r.jsx("h2",{className:`\r
                                text-lg sm:text-2xl\r
                                font-bold\r
                                text-charcoal-dark\r
                                break-words\r
                            `,children:"Website Visitors"}),r.jsx("p",{className:`\r
                            text-sm text-gray-500\r
                            mt-1\r
                            leading-relaxed\r
                        `,children:"Last 30 days traffic overview"})]}),r.jsxs("div",{className:`\r
                            w-full 2xl:w-auto\r
                            flex flex-col\r
                            sm:flex-row\r
                            sm:flex-wrap\r
                            items-stretch sm:items-center\r
                            gap-3\r
                        `,children:[r.jsxs("div",{className:`\r
                                flex-1 sm:flex-none\r
                                min-w-0 sm:min-w-[130px]\r
                                bg-gray-100\r
                                rounded-2xl\r
                                px-4 py-3\r
                            `,children:[r.jsx("p",{className:`\r
                                text-[11px] sm:text-xs\r
                                text-gray-500\r
                                uppercase\r
                                font-semibold\r
                                tracking-wide\r
                            `,children:"Total"}),r.jsx("p",{className:`\r
                                    text-lg sm:text-xl\r
                                    font-bold\r
                                    text-charcoal-dark\r
                                    mt-1\r
                                    truncate\r
                                `,children:(t==null?void 0:t.total)||0})]}),r.jsxs("div",{className:`\r
                                flex-1 sm:flex-none\r
                                min-w-0 sm:min-w-[130px]\r
                                bg-green-50\r
                                rounded-2xl\r
                                px-4 py-3\r
                            `,children:[r.jsx("p",{className:`\r
                                text-[11px] sm:text-xs\r
                                text-green-600\r
                                uppercase\r
                                font-semibold\r
                                tracking-wide\r
                            `,children:"Today"}),r.jsx("p",{className:`\r
                                    text-lg sm:text-xl\r
                                    font-bold\r
                                    text-green-700\r
                                    mt-1\r
                                    truncate\r
                                `,children:(t==null?void 0:t.today)||0})]}),r.jsx("button",{onClick:()=>p(!0),className:`\r
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
                            `,children:"Show More"})]})]}),r.jsx("div",{className:"p-3 sm:p-5 lg:p-6",children:r.jsx("div",{className:`\r
                            h-[260px]\r
                            sm:h-[320px]\r
                            lg:h-[360px]\r
                            w-full\r
                        `,children:r.jsx(Hr,{width:"100%",height:"100%",children:r.jsxs(Xr,{data:jr,margin:{top:10,right:10,left:-20,bottom:0},children:[r.jsx(Gr,{strokeDasharray:"3 3",vertical:!1}),r.jsx(Jr,{dataKey:"date",tick:{fontSize:11},interval:"preserveStartEnd"}),r.jsx(Zr,{tick:{fontSize:11},width:35}),r.jsx(re,{}),r.jsx(ee,{type:"monotone",dataKey:"visitors",stroke:"#b8860b",strokeWidth:3,dot:{r:3},activeDot:{r:6}})]})})})}),fr&&r.jsx("div",{className:`\r
            fixed inset-0 z-50\r
            flex items-center justify-center\r
            bg-black/60 backdrop-blur-sm\r
            p-4\r
        `,onClick:()=>p(!1),children:r.jsxs("div",{className:`\r
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
            `,onClick:e=>e.stopPropagation(),children:[r.jsxs("div",{className:`\r
                    px-5 sm:px-6\r
                    py-5\r
                    border-b border-gray-100\r
                    flex items-center justify-between\r
                    gap-4\r
                    shrink-0\r
                `,children:[r.jsxs("div",{children:[r.jsx("h3",{className:`\r
                            text-xl sm:text-2xl\r
                            font-bold\r
                            text-charcoal-dark\r
                        `,children:"Visitor Analytics"}),r.jsx("p",{className:"text-sm text-gray-500 mt-1",children:"Website visitor overview"})]}),r.jsx("button",{type:"button",onClick:()=>p(!1),className:`\r
                        w-10 h-10\r
                        rounded-xl\r
                        hover:bg-gray-100\r
                        transition-colors\r
                        flex items-center\r
                        justify-center\r
                        text-gray-500\r
                        text-lg\r
                        shrink-0\r
                    `,children:"✕"})]}),r.jsxs("div",{className:`\r
                    p-5 sm:p-6\r
                    overflow-y-auto\r
                `,children:[r.jsxs("div",{className:`\r
                        grid\r
                        grid-cols-1\r
                        sm:grid-cols-2\r
                        gap-4 sm:gap-5\r
                    `,children:[r.jsxs("div",{className:`\r
                            bg-gradient-to-br\r
                            from-green-50\r
                            to-green-100/50\r
                            border border-green-200\r
                            rounded-3xl\r
                            p-5\r
                        `,children:[r.jsx("p",{className:`\r
                                text-sm\r
                                font-semibold\r
                                text-green-700\r
                                uppercase\r
                                tracking-wide\r
                            `,children:"Today"}),r.jsx("h4",{className:`\r
                                text-4xl\r
                                font-bold\r
                                text-green-800\r
                                mt-3\r
                            `,children:(t==null?void 0:t.today)||0}),r.jsx("p",{className:`\r
                                text-sm\r
                                text-green-700\r
                                mt-2\r
                            `,children:"Visitors today"})]}),r.jsxs("div",{className:`\r
                            bg-gradient-to-br\r
                            from-blue-50\r
                            to-blue-100/50\r
                            border border-blue-200\r
                            rounded-3xl\r
                            p-5\r
                        `,children:[r.jsx("p",{className:`\r
                                text-sm\r
                                font-semibold\r
                                text-blue-700\r
                                uppercase\r
                                tracking-wide\r
                            `,children:"This Week"}),r.jsx("h4",{className:`\r
                                text-4xl\r
                                font-bold\r
                                text-blue-800\r
                                mt-3\r
                            `,children:(t==null?void 0:t.week)||0}),r.jsx("p",{className:`\r
                                text-sm\r
                                text-blue-700\r
                                mt-2\r
                            `,children:"Last 7 days visitors"})]}),r.jsxs("div",{className:`\r
                            bg-gradient-to-br\r
                            from-orange-50\r
                            to-orange-100/50\r
                            border border-orange-200\r
                            rounded-3xl\r
                            p-5\r
                        `,children:[r.jsx("p",{className:`\r
                                text-sm\r
                                font-semibold\r
                                text-orange-700\r
                                uppercase\r
                                tracking-wide\r
                            `,children:"This Month"}),r.jsx("h4",{className:`\r
                                text-4xl\r
                                font-bold\r
                                text-orange-800\r
                                mt-3\r
                            `,children:(t==null?void 0:t.month)||0}),r.jsx("p",{className:`\r
                                text-sm\r
                                text-orange-700\r
                                mt-2\r
                            `,children:"Monthly traffic"})]}),r.jsxs("div",{className:`\r
                            bg-gradient-to-br\r
                            from-purple-50\r
                            to-purple-100/50\r
                            border border-purple-200\r
                            rounded-3xl\r
                            p-5\r
                        `,children:[r.jsx("p",{className:`\r
                                text-sm\r
                                font-semibold\r
                                text-purple-700\r
                                uppercase\r
                                tracking-wide\r
                            `,children:"This Year"}),r.jsx("h4",{className:`\r
                                text-4xl\r
                                font-bold\r
                                text-purple-800\r
                                mt-3\r
                            `,children:(t==null?void 0:t.year)||0}),r.jsx("p",{className:`\r
                                text-sm\r
                                text-purple-700\r
                                mt-2\r
                            `,children:"Yearly visitors"})]})]}),r.jsxs("div",{className:`\r
                        grid\r
                        grid-cols-1\r
                        lg:grid-cols-2\r
                        gap-5\r
                        mt-5\r
                    `,children:[r.jsxs("div",{className:`\r
                            border\r
                            border-gray-200\r
                            rounded-3xl\r
                            overflow-hidden\r
                            bg-white\r
                        `,children:[r.jsxs("div",{className:`\r
                                px-5\r
                                py-4\r
                                border-b\r
                                border-gray-100\r
                                flex\r
                                items-center\r
                                justify-between\r
                                gap-3\r
                            `,children:[r.jsxs("div",{children:[r.jsx("h4",{className:`\r
                                        text-base\r
                                        font-bold\r
                                        text-charcoal-dark\r
                                    `,children:"Top Countries"}),r.jsx("p",{className:`\r
                                        text-xs\r
                                        text-gray-500\r
                                        mt-1\r
                                    `,children:"Most visits by country"})]}),r.jsx("div",{className:`\r
                                    w-9\r
                                    h-9\r
                                    rounded-xl\r
                                    bg-bronze/10\r
                                    flex\r
                                    items-center\r
                                    justify-center\r
                                    text-lg\r
                                `,children:"🌍"})]}),r.jsx("div",{className:"p-5",children:S.length===0?r.jsxs("div",{className:`\r
                                        py-8\r
                                        text-center\r
                                    `,children:[r.jsx("div",{className:"text-3xl mb-2",children:"🌍"}),r.jsx("p",{className:`\r
                                            text-sm\r
                                            text-gray-400\r
                                        `,children:"No country data yet"})]}):r.jsx("div",{className:"space-y-4",children:S.map((e,a)=>{var i;const d=((i=S[0])==null?void 0:i.visitors)||1,c=Math.min(100,Math.round(e.visitors/d*100));return r.jsxs("div",{className:`\r
                                                        flex\r
                                                        items-center\r
                                                        gap-3\r
                                                    `,children:[r.jsx("div",{className:`\r
                                                            w-5\r
                                                            text-xs\r
                                                            font-bold\r
                                                            text-gray-400\r
                                                            text-center\r
                                                            shrink-0\r
                                                        `,children:a+1}),r.jsx("div",{className:`\r
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
                                                        `,children:kr(e.countryCode)}),r.jsxs("div",{className:`\r
                                                            flex-1\r
                                                            min-w-0\r
                                                        `,children:[r.jsxs("div",{className:`\r
                                                                flex\r
                                                                items-center\r
                                                                justify-between\r
                                                                gap-3\r
                                                                mb-1.5\r
                                                            `,children:[r.jsx("p",{className:`\r
                                                                    text-sm\r
                                                                    font-semibold\r
                                                                    text-gray-800\r
                                                                    truncate\r
                                                                `,children:e.country}),r.jsx("p",{className:`\r
                                                                    text-sm\r
                                                                    font-bold\r
                                                                    text-charcoal-dark\r
                                                                    shrink-0\r
                                                                `,children:e.visitors.toLocaleString()})]}),r.jsx("div",{className:`\r
                                                                h-1.5\r
                                                                w-full\r
                                                                bg-gray-100\r
                                                                rounded-full\r
                                                                overflow-hidden\r
                                                            `,children:r.jsx("div",{className:`\r
                                                                    h-full\r
                                                                    bg-bronze\r
                                                                    rounded-full\r
                                                                    transition-all\r
                                                                    duration-500\r
                                                                `,style:{width:`${c}%`}})})]})]},`${e.countryCode}-${a}`)})})})]}),r.jsxs("div",{className:`\r
                            border\r
                            border-gray-200\r
                            rounded-3xl\r
                            overflow-hidden\r
                            bg-white\r
                        `,children:[r.jsxs("div",{className:`\r
                                px-5\r
                                py-4\r
                                border-b\r
                                border-gray-100\r
                                flex\r
                                items-center\r
                                justify-between\r
                                gap-3\r
                            `,children:[r.jsxs("div",{children:[r.jsx("h4",{className:`\r
                                        text-base\r
                                        font-bold\r
                                        text-charcoal-dark\r
                                    `,children:"Devices"}),r.jsx("p",{className:`\r
                                        text-xs\r
                                        text-gray-500\r
                                        mt-1\r
                                    `,children:"Devices used by visitors"})]}),r.jsx("div",{className:`\r
                                    w-9\r
                                    h-9\r
                                    rounded-xl\r
                                    bg-bronze/10\r
                                    flex\r
                                    items-center\r
                                    justify-center\r
                                    text-lg\r
                                `,children:"💻"})]}),r.jsx("div",{className:"p-5",children:L.length===0?r.jsxs("div",{className:`\r
                                        py-8\r
                                        text-center\r
                                    `,children:[r.jsx("div",{className:"text-3xl mb-2",children:"💻"}),r.jsx("p",{className:`\r
                                            text-sm\r
                                            text-gray-400\r
                                        `,children:"No device data yet"})]}):r.jsx("div",{className:"space-y-5",children:L.map((e,a)=>{const d=L.reduce((f,j)=>f+j.visitors,0),c=d>0?Math.round(e.visitors/d*100):0;let i="🌐";return e.device==="Desktop"?i="💻":(e.device==="Mobile"||e.device==="Tablet")&&(i="📱"),r.jsxs("div",{className:`\r
                                                        flex\r
                                                        items-center\r
                                                        gap-4\r
                                                    `,children:[r.jsx("div",{className:`\r
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
                                                        `,children:i}),r.jsxs("div",{className:`\r
                                                            flex-1\r
                                                            min-w-0\r
                                                        `,children:[r.jsxs("div",{className:`\r
                                                                flex\r
                                                                items-center\r
                                                                justify-between\r
                                                                gap-3\r
                                                                mb-1.5\r
                                                            `,children:[r.jsxs("div",{children:[r.jsx("p",{className:`\r
                                                                        text-sm\r
                                                                        font-semibold\r
                                                                        text-gray-800\r
                                                                    `,children:e.device}),r.jsxs("p",{className:`\r
                                                                        text-xs\r
                                                                        text-gray-400\r
                                                                        mt-0.5\r
                                                                    `,children:[c,"% of visits"]})]}),r.jsx("p",{className:`\r
                                                                    text-sm\r
                                                                    font-bold\r
                                                                    text-charcoal-dark\r
                                                                    shrink-0\r
                                                                `,children:e.visitors.toLocaleString()})]}),r.jsx("div",{className:`\r
                                                                h-1.5\r
                                                                w-full\r
                                                                bg-gray-100\r
                                                                rounded-full\r
                                                                overflow-hidden\r
                                                            `,children:r.jsx("div",{className:`\r
                                                                    h-full\r
                                                                    bg-charcoal-dark\r
                                                                    rounded-full\r
                                                                    transition-all\r
                                                                    duration-500\r
                                                                `,style:{width:`${c}%`}})})]})]},`${e.device}-${a}`)})})})]})]})]}),r.jsx("div",{className:`\r
                    px-5 sm:px-6\r
                    py-5\r
                    border-t border-gray-100\r
                    bg-gray-50/50\r
                    flex\r
                    justify-end\r
                    shrink-0\r
                `,children:r.jsx("button",{type:"button",onClick:()=>p(!1),className:`\r
                        px-6\r
                        py-3\r
                        rounded-2xl\r
                        bg-charcoal-dark\r
                        hover:bg-bronze\r
                        text-white\r
                        font-semibold\r
                        transition-colors\r
                    `,children:"Close"})})]})})]}),r.jsxs("div",{className:`\r
                grid\r
                xl:grid-cols-3\r
                gap-6\r
            `,children:[r.jsxs("div",{className:`\r
                xl:col-span-2\r
                bg-white\r
                rounded-3xl\r
                border border-gray-200\r
                shadow-sm\r
                overflow-hidden\r
            `,children:[r.jsxs("div",{className:`\r
                    px-5 sm:px-6 py-5\r
                    border-b border-gray-100\r
                    flex items-center justify-between\r
                    gap-4\r
                `,children:[r.jsxs("div",{children:[r.jsx("h2",{className:`\r
                            text-xl font-bold\r
                            text-charcoal-dark\r
                        `,children:"Recent Activity"}),r.jsx("p",{className:`\r
                            text-sm text-gray-500 mt-1\r
                        `,children:"Latest updates across your system"})]}),r.jsx("button",{onClick:u,className:`\r
                            text-sm font-semibold\r
                            text-bronze\r
                            hover:text-bronze-dark\r
                        `,children:"Refresh"})]}),r.jsx("div",{className:"p-5 sm:p-6",children:r.jsx("div",{className:"space-y-5",children:sr.map((e,a)=>r.jsxs("div",{className:`\r
                                    flex flex-col sm:flex-row\r
                                    sm:items-start\r
                                    justify-between\r
                                    gap-3\r
                                    border-l-4 border-bronze\r
                                    pl-4\r
                                `,children:[r.jsxs("div",{className:"min-w-0",children:[r.jsx("div",{className:`\r
                                        flex flex-wrap items-center gap-2\r
                                        mb-1\r
                                    `,children:r.jsx("span",{className:`\r
                                            text-xs font-bold\r
                                            uppercase tracking-wide\r
                                            text-bronze\r
                                            bg-bronze/10\r
                                            px-2 py-1\r
                                            rounded-lg\r
                                        `,children:e.type})}),r.jsx("p",{className:`\r
                                        text-gray-700\r
                                        leading-relaxed\r
                                    `,children:e.text})]}),r.jsx("span",{className:`\r
                                    text-xs text-gray-400\r
                                    whitespace-nowrap\r
                                `,children:new Date(e.date).toLocaleDateString()})]},a))})})]}),r.jsxs("div",{className:`\r
                bg-white\r
                rounded-3xl\r
                border border-gray-200\r
                shadow-sm\r
                overflow-hidden\r
            `,children:[r.jsxs("div",{className:`\r
                    px-5 sm:px-6 py-5\r
                    border-b border-gray-100\r
                `,children:[r.jsx("h2",{className:`\r
                        text-xl font-bold\r
                        text-charcoal-dark\r
                    `,children:"System Status"}),r.jsx("p",{className:`\r
                        text-sm text-gray-500 mt-1\r
                    `,children:"Live backend service monitoring"})]}),r.jsxs("div",{className:"p-5 sm:p-6 space-y-3",children:[r.jsx(b,{label:"Database",status:g}),r.jsx(b,{label:"Market API",status:k}),r.jsx(b,{label:"Blog API",status:ar}),r.jsx(b,{label:"Subscriber System",status:G}),r.jsx(b,{label:"Lead System",status:J})]})]})]}),r.jsxs("div",{className:`\r
            bg-white\r
            rounded-3xl\r
            border border-gray-200\r
            shadow-sm\r
            overflow-hidden\r
        `,children:[r.jsxs("div",{className:`\r
                px-5 sm:px-6 py-5\r
                border-b border-gray-100\r
                flex flex-col sm:flex-row\r
                sm:items-center\r
                justify-between\r
                gap-4\r
            `,children:[r.jsxs("div",{children:[r.jsx("h2",{className:`\r
                        text-xl font-bold\r
                        text-charcoal-dark\r
                    `,children:"Recent Leads"}),r.jsx("p",{className:`\r
                        text-sm text-gray-500 mt-1\r
                    `,children:"Latest customer inquiries and contact requests"})]}),r.jsxs("button",{onClick:()=>l("/admin/leads"),className:`\r
                        inline-flex items-center gap-2\r
                        text-bronze font-semibold\r
                        hover:text-bronze-dark\r
                        transition-colors\r
                    `,children:["View All",r.jsx(E,{className:"w-4 h-4"})]})]}),r.jsx("div",{className:`\r
                overflow-x-auto\r
                main-scrollbar\r
            `,children:r.jsxs("table",{className:`\r
                    w-full min-w-[760px]\r
                `,children:[r.jsx("thead",{className:`\r
                        bg-gray-50\r
                    `,children:r.jsxs("tr",{children:[r.jsx("th",{className:`\r
                                px-6 py-4\r
                                text-left\r
                                text-xs font-bold\r
                                uppercase\r
                                tracking-wide\r
                                text-gray-500\r
                            `,children:"Email"}),r.jsx("th",{className:`\r
                                px-6 py-4\r
                                text-left\r
                                text-xs font-bold\r
                                uppercase\r
                                tracking-wide\r
                                text-gray-500\r
                            `,children:"Phone"}),r.jsx("th",{className:`\r
                                px-6 py-4\r
                                text-left\r
                                text-xs font-bold\r
                                uppercase\r
                                tracking-wide\r
                                text-gray-500\r
                            `,children:"Type"}),r.jsx("th",{className:`\r
                                px-6 py-4\r
                                text-left\r
                                text-xs font-bold\r
                                uppercase\r
                                tracking-wide\r
                                text-gray-500\r
                            `,children:"Date"})]})}),r.jsx("tbody",{className:`\r
                        divide-y divide-gray-100\r
                    `,children:er.map((e,a)=>r.jsxs("tr",{className:`\r
                                    hover:bg-gray-50/60\r
                                    transition-colors\r
                                `,children:[r.jsx("td",{className:`\r
                                    px-6 py-5\r
                                    font-medium\r
                                    text-charcoal-dark\r
                                `,children:e.email}),r.jsx("td",{className:`\r
                                    px-6 py-5\r
                                    text-gray-500\r
                                `,children:e.phone||"N/A"}),r.jsx("td",{className:`\r
                                    px-6 py-5\r
                                `,children:r.jsx("span",{className:`\r
                                        inline-flex items-center\r
                                        px-3 py-1\r
                                        rounded-full\r
                                        text-xs font-bold\r
                                        bg-bronze/10\r
                                        text-bronze\r
                                    `,children:e.classification_tag||"Lead"})}),r.jsx("td",{className:`\r
                                    px-6 py-5\r
                                    text-sm text-gray-500\r
                                `,children:new Date(e.createdAt).toLocaleDateString()})]},a))})]})})]})]})}function h({title:l,onClick:m}){return r.jsx("button",{onClick:m,className:`\r
                bg-white\r
                border border-gray-200\r
                rounded-2xl\r
                p-5\r
                text-left\r
                hover:border-bronze\r
                hover:shadow-md\r
                transition-all\r
                group\r
            `,children:r.jsxs("div",{className:"flex items-center justify-between",children:[r.jsx("span",{className:"font-semibold text-charcoal-dark group-hover:text-bronze transition-colors",children:l}),r.jsx(E,{className:"w-5 h-5 text-gray-400 group-hover:text-bronze transition-colors"})]})})}function b({label:l,status:m}){const w=m!=="Down";return r.jsxs("div",{className:"flex items-center justify-between p-4 rounded-xl bg-gray-50 mb-3",children:[r.jsx("span",{className:"font-medium text-charcoal-dark",children:l}),r.jsx("span",{className:`
                    px-3 py-1 rounded-full
                    text-xs font-bold
                    ${w?"bg-green-100 text-green-700":"bg-red-100 text-red-700"}
                `,children:m})]})}export{ge as default};
