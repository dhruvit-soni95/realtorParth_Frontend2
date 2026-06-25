import{r as u,j as e}from"./utilities-CctrEpBK.js";import{a as Ee,b as Ie}from"./react-LWYCItZ7.js";import{F as Oe}from"./file-text-cAFf4ctX.js";import"./index-C_2GHpiZ.js";import"./supabase-DWWbfOGS.js";const Me=[{name:"FINTRAC - Individual Identification Information Record Form",key:"fintrac"},{name:"FINTRAC - Politically Exposed Person Checklist Form",key:"pep"},{name:"Consumer Relationships Guide (Print Friendly)",key:"crg"}],Le=[{name:"Exclusive Buyer Representation Agreement (Designated Agency)",key:"EBRADA"},{name:"Exclusive Buyer Representation Agreement Amendment",key:"EBRAA"},{name:"Exclusive Buyer Representation Agreement Termination (Designated Agency)",key:"EBRATDA"},{name:"Residential Purchase Contract",key:"RPC"}],$e=[{name:"Seller Customer Status Acknowledgment and Fee Agreement",key:"SCSAAFA"},{name:"CREB® - Illegal Drug Manufacture_Marijuana Grow Operation Listing",key:"IDMMGOL"},{name:"Exclusive Seller Representation Agreement Amendment",key:"ESRAA"}],q=({status:m})=>{const w=m==="Filled";return e.jsxs("div",{className:`flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold border shadow-sm
      ${w?"bg-green-50 text-green-700 border-green-200":"bg-yellow-50 text-yellow-700 border-yellow-200"}`,children:[e.jsx("span",{className:`w-2 h-2 rounded-full ${w?"bg-green-500":"bg-yellow-500"}`}),m]})};function Ze(){const{id:m}=Ee(),w=Ie(),[z,J]=u.useState(Me),[I,K]=u.useState(Le),[O,Q]=u.useState($e),[i,X]=u.useState(null),[ee,le]=u.useState(!1),[j,ae]=u.useState(null),[se,re]=u.useState(!1),[A,te]=u.useState(null),[ne,ie]=u.useState(!1),[t,de]=u.useState(null),[oe,ce]=u.useState(!1),[g,xe]=u.useState(null),[me,be]=u.useState(!1),[f,ue]=u.useState(null),[je,he]=u.useState(!1),[a,pe]=u.useState(null),[ve,ge]=u.useState(!1),[n,ye]=u.useState(null),[fe,Ne]=u.useState(!1),[v,ke]=u.useState(null),[we,Se]=u.useState(!1),[h,De]=u.useState(null),[Pe,Ae]=u.useState(!1),[M,Re]=u.useState(null),[W,C]=u.useState(null),[N,Ce]=u.useState({}),[Be,U]=u.useState(!1);u.useEffect(()=>{if(!m)return;(async()=>{try{const[o,x,r]=await Promise.all([fetch(`https://realtorparth.ca/api/fintracpdf/fintrac/user/${m}`),fetch(`https://realtorparth.ca/api/fintracpeppdf/pep/user/${m}`),fetch(`https://realtorparth.ca/api/crgpdf/crg/user/${m}`)]),T=await o.json(),F=await x.json(),R=await r.json();J(D=>D.map(k=>k.key==="fintrac"?{...k,status:T!=null&&T.data?"Filled":"Not Filled"}:k.key==="pep"?{...k,status:F!=null&&F.data?"Filled":"Not Filled"}:k.key==="crg"?{...k,status:R!=null&&R.data?"Filled":"Not Filled"}:k));const P=await(await fetch(`https://realtorparth.ca/api/statuspdf/document-status/${m}`)).json();if(P!=null&&P.data&&(K(D=>D.map(k=>({...k,status:P.data[k.key]?"Filled":"Not Filled"}))),Q(D=>D.map(k=>({...k,status:P.data[k.key]?"Filled":"Not Filled"})))),P!=null&&P.data){const D=P.data,k=[D.EBRAA,D.EBRATDA,D.RPC,D.EBRADA],Y=[D.SCSAAFA,D.IDMMGOL,D.ESRAA],Z=k.filter(Boolean).length/k.length,V=Y.filter(Boolean).length/Y.length;(Z>0||V>0)&&Re(Z>=V?"buyer":"seller")}const E=await(await fetch(`https://realtorparth.ca/api/transactions/parties/party/${m}`)).json();E!=null&&E.party&&Ce({licenseImage:E.party.licenseImage,passportImage:E.party.passportImage})}catch(o){console.error(o)}})()},[m]);const G=async(c,o="party")=>{if(m)try{if(c.key==="fintrac"){const r=await(await fetch(`https://realtorparth.ca/api/fintracpdf/fintrac/user/${m}`)).json();r!=null&&r.data&&(X(r.data),w(`/party/fintrac/${m}?mode=${o}`))}if(c.key==="pep"){const r=await(await fetch(`https://realtorparth.ca/api/fintracpeppdf/pep/user/${m}`)).json();r!=null&&r.data?(ae(r.data),w(`/party/politically-exposed/${m}?mode=${o}`)):alert("No PEP data found")}if(c.key==="crg"){const r=await(await fetch(`https://realtorparth.ca/api/crgpdf/crg/user/${m}`)).json();r!=null&&r.data?(te(r.data),w(`/party/crg/${m}?mode=${o}`)):alert("No CRG data found")}if(c.key==="EBRADA"){const r=await(await fetch(`https://realtorparth.ca/api/ebradapdf/buyeragreement/user/${m}`)).json();r!=null&&r.data?(de(r.data),w(`/party/forms/EBRADA/${m}?mode=${o}`)):alert("No Buyer Agreement found")}if(c.key==="EBRAA"){const r=await(await fetch(`https://realtorparth.ca/api/ebraapdf/buyer-amendment/user/${m}`)).json();r!=null&&r.data?(xe(r.data),w(`/party/forms/EBRAA/${m}?mode=${o}`)):alert("No Amendment found")}if(c.key==="EBRATDA"){const r=await(await fetch(`https://realtorparth.ca/api/ebratdapdf/buyer-termination/user/${m}`)).json();r!=null&&r.data?(ue(r.data),w(`/party/forms/EBRATDA/${m}?mode=${o}`)):alert("No Termination Agreement found")}if(c.key==="RPC"){const r=await(await fetch(`https://realtorparth.ca/api/rpcpdf/rpc/user/${m}`)).json();r!=null&&r.data?(pe(r.data),w(`/party/forms/RPC/${m}?mode=${o}`)):alert("No RPC found")}if(c.key==="SCSAAFA"){const r=await(await fetch(`https://realtorparth.ca/api/scsaafa/user/${m}`)).json();r!=null&&r.data?(ye(r.data),w(`/party/forms/SCSAAFA/${m}?mode=${o}`)):alert("No Seller Agreement found")}if(c.key==="IDMMGOL"){const r=await(await fetch(`https://realtorparth.ca/api/idmmgol/user/${m}`)).json();r!=null&&r.data?(ke(r.data),w(`/party/forms/IDMMGOL/${m}?mode=${o}`)):alert("No IDMMGOL found")}if(c.key==="ESRAA"){const r=await(await fetch(`https://realtorparth.ca/api/esraa/user/${m}`)).json();r!=null&&r.data?(De(r.data),w(`/party/forms/ESRAA/${m}?mode=${o}`)):alert("No ESRAA found")}}catch(x){console.error(x)}},_=async c=>{try{(await(await fetch("https://realtorparth.ca/api/reminder/send",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({partyId:m,documentKey:c.key,documentName:c.name})})).json()).success?alert("Reminder email sent ✅"):alert("Failed to send email")}catch(o){console.error("Email error:",o),alert("Server error")}},B=({title:c,data:o})=>e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between gap-3",children:[e.jsxs("div",{children:[e.jsx("h2",{className:"text-xl font-bold text-gray-800",children:c}),e.jsx("p",{className:"text-sm text-gray-500 mt-1",children:"Document status and actions"})]}),e.jsxs("div",{className:"bg-bronze/10 text-bronze px-4 py-2 rounded-xl text-sm font-semibold",children:[o.length," Documents"]})]}),e.jsx("div",{className:"lg:hidden space-y-4",children:o.map((x,r)=>e.jsxs("div",{className:`\r
                        bg-white\r
                        border border-gray-200\r
                        rounded-2xl\r
                        p-5\r
                        shadow-sm\r
                    `,children:[e.jsxs("div",{className:"flex items-start justify-between gap-3",children:[e.jsxs("div",{className:"min-w-0",children:[e.jsx("p",{className:"text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2",children:"Document Name"}),e.jsx("h3",{className:"font-semibold text-gray-800 leading-relaxed",children:x.name})]}),e.jsx("div",{className:"flex-shrink-0",children:e.jsx(q,{status:x.status||"Not Filled"})})]}),e.jsxs("div",{className:"mt-5",children:[(x.status||"Not Filled")==="Filled"&&e.jsx("button",{onClick:()=>G(x,"admin"),className:`\r
                                    w-full\r
                                    bg-bronze\r
                                    hover:bg-bronze-dark\r
                                    text-white\r
                                    font-semibold\r
                                    px-4 py-3\r
                                    rounded-xl\r
                                    transition-all\r
                                `,children:"Open Document"}),(x.status||"Not Filled")==="Not Filled"&&e.jsx("button",{onClick:()=>_(x),className:`\r
                                    w-full\r
                                    bg-red-500\r
                                    hover:bg-red-600\r
                                    text-white\r
                                    font-semibold\r
                                    px-4 py-3\r
                                    rounded-xl\r
                                    transition-all\r
                                `,children:"Send Reminder Email"})]})]},r))}),e.jsxs("div",{className:`\r
                hidden lg:block\r
                bg-white\r
                border border-gray-200\r
                rounded-3xl\r
                overflow-hidden\r
                shadow-sm\r
            `,children:[e.jsxs("div",{className:`\r
                    grid grid-cols-12\r
                    bg-gray-50\r
                    border-b border-gray-200\r
                    text-xs font-bold\r
                    uppercase tracking-wide\r
                    text-gray-500\r
                `,children:[e.jsx("div",{className:"col-span-5 px-6 py-5",children:"Document Name"}),e.jsx("div",{className:"col-span-3 px-6 py-5 text-center",children:"Status"}),e.jsx("div",{className:"col-span-4 px-6 py-5 text-center",children:"Action"})]}),o.map((x,r)=>e.jsxs("div",{className:`\r
                        grid grid-cols-12\r
                        border-b border-gray-100\r
                        hover:bg-gray-50/70\r
                        transition-all\r
                        group\r
                    `,children:[e.jsx("div",{className:`\r
                            col-span-5\r
                            px-6 py-5\r
                            flex items-center\r
                        `,children:e.jsx("p",{className:`\r
                                font-medium\r
                                text-gray-700\r
                                leading-relaxed\r
                                group-hover:text-bronze\r
                                transition-colors\r
                            `,children:x.name})}),e.jsx("div",{className:`\r
                            col-span-3\r
                            px-6 py-5\r
                            flex items-center justify-center\r
                        `,children:e.jsx(q,{status:x.status||"Not Filled"})}),e.jsxs("div",{className:`\r
                            col-span-4\r
                            px-6 py-5\r
                            flex items-center justify-center\r
                        `,children:[(x.status||"Not Filled")==="Filled"&&e.jsx("button",{onClick:()=>G(x,"admin"),className:`\r
                                        bg-bronze\r
                                        hover:bg-bronze-dark\r
                                        text-white\r
                                        text-sm\r
                                        font-semibold\r
                                        px-5 py-2.5\r
                                        rounded-xl\r
                                        transition-all\r
                                        shadow-sm\r
                                    `,children:"Open"}),(x.status||"Not Filled")==="Not Filled"&&e.jsx("button",{onClick:()=>_(x),className:`\r
                                        bg-red-500\r
                                        hover:bg-red-600\r
                                        text-white\r
                                        text-sm\r
                                        font-semibold\r
                                        px-5 py-2.5\r
                                        rounded-xl\r
                                        transition-all\r
                                        shadow-sm\r
                                    `,children:"Send Reminder"})]})]},r))]})]}),H=N.licenseImage||N.passportImage,d=({title:c,children:o})=>e.jsxs("div",{className:`\r
            bg-white\r
            border border-gray-200\r
            rounded-3xl\r
            p-5 sm:p-7\r
            shadow-sm\r
            mb-6\r
        `,children:[e.jsxs("div",{className:"mb-6",children:[e.jsx("h3",{className:"text-lg sm:text-xl font-bold text-gray-800",children:c}),e.jsx("div",{className:"w-14 h-1 bg-bronze rounded-full mt-3"})]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-5",children:o})]}),s=({label:c,value:o})=>e.jsxs("div",{className:`\r
            bg-gray-50\r
            border border-gray-100\r
            rounded-2xl\r
            p-4\r
            min-w-0\r
        `,children:[e.jsx("p",{className:`\r
                text-xs\r
                font-semibold\r
                uppercase\r
                tracking-wide\r
                text-gray-400\r
                mb-2\r
            `,children:c}),e.jsx("p",{className:`\r
                font-semibold\r
                text-gray-800\r
                break-words\r
            `,children:o||"-"})]}),l=({label:c,value:o})=>e.jsxs("div",{className:"space-y-2",children:[e.jsx("p",{className:"text-xs font-semibold text-gray-500 uppercase tracking-wide",children:c}),e.jsx("div",{className:`\r
                min-h-[44px]\r
                border-b-2 border-gray-300\r
                flex items-end\r
                pb-1\r
                text-sm sm:text-base\r
                font-medium\r
                text-gray-800\r
                break-words\r
            `,children:o||""})]}),p=({label:c,checked:o})=>e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:`\r
                w-5 h-5\r
                rounded-md\r
                border-2 border-gray-400\r
                flex items-center justify-center\r
                flex-shrink-0\r
                bg-white\r
            `,children:o&&e.jsx("div",{className:"w-2.5 h-2.5 rounded-sm bg-bronze"})}),e.jsx("span",{className:"text-sm font-medium text-gray-700",children:c})]}),L=({checked:c})=>e.jsx("div",{className:`\r
            w-5 h-5\r
            rounded-md\r
            border-2 border-gray-400\r
            flex items-center justify-center\r
            bg-white\r
            mx-auto\r
        `,children:c&&e.jsx("div",{className:"w-2.5 h-2.5 rounded-sm bg-bronze"})}),$=({label:c,value:o})=>e.jsxs("div",{className:"flex flex-col items-center",children:[e.jsx("div",{className:`\r
                w-16 sm:w-20\r
                h-12\r
                rounded-xl\r
                border-2 border-gray-300\r
                bg-white\r
                flex items-center justify-center\r
                text-sm font-semibold\r
                text-gray-800\r
            `,children:o||""}),e.jsx("span",{className:"text-[11px] font-medium text-gray-500 mt-2 uppercase tracking-wide",children:c})]}),y=({title:c,children:o})=>e.jsxs("div",{className:`\r
            mt-8\r
            bg-white\r
            border border-gray-200\r
            rounded-3xl\r
            p-5 sm:p-7\r
            shadow-sm\r
        `,children:[e.jsxs("div",{className:"mb-6",children:[e.jsx("h2",{className:"text-lg sm:text-xl font-bold text-gray-800",children:c}),e.jsx("div",{className:"w-14 h-1 bg-bronze rounded-full mt-3"})]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-5",children:o})]}),S=({label:c,value:o})=>e.jsxs("div",{className:"mt-5",children:[e.jsx("p",{className:"text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2",children:c}),e.jsx("div",{className:`\r
                border-2 border-gray-300\r
                rounded-2xl\r
                min-h-[120px]\r
                p-4\r
                bg-white\r
                text-sm\r
                text-gray-700\r
                leading-relaxed\r
                whitespace-pre-wrap\r
                break-words\r
            `,children:o||""})]}),b=({label:c,value:o})=>e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:`\r
                border-b-2 border-gray-400\r
                h-12\r
                flex items-end justify-center\r
                pb-1\r
                text-sm\r
                font-medium\r
                text-gray-800\r
            `,children:o||""}),e.jsx("p",{className:"text-center text-xs font-medium text-gray-500 uppercase tracking-wide",children:c})]}),Te=["Previously worked with client or personal relationship?","Client has criminal history?","Concern about money laundering location?","Within 10 km of international border/airport?","Is Canadian citizen or permanent resident?","Domestic PEP?","Foreign PEP or HIO?","Subject to Ministerial Directive?","Any other high-risk country connections?","Attempted to conceal identity?","Brokerage filed suspicious report before?","Transaction unusual for occupation?","Transaction involves third party?","Non face-to-face identification?","Deposit in cash?","Unusual transaction history?","Anything unusual about client?"],Fe={1:{yes:0,no:2,possibly:0},2:{yes:10,no:0,possibly:1},3:{yes:2,no:0,possibly:1},4:{yes:2,no:0,possibly:0},5:{yes:0,no:2,possibly:1},6:{yes:6,no:0,possibly:0},7:{yes:10,no:0,possibly:0},8:{yes:10,no:0,possibly:0},9:{yes:5,no:0,possibly:1},10:{yes:6,no:0,possibly:0},11:{yes:10,no:0,possibly:0},12:{yes:5,no:0,possibly:0},13:{yes:2,no:0,possibly:1},14:{yes:2,no:0,possibly:0},15:{yes:3,no:0,possibly:0},16:{yes:4,no:0,possibly:0},17:{yes:4,no:0,possibly:0}};return e.jsxs("div",{className:"min-h-screen flex justify-center p-8 bg-white",children:[e.jsxs("div",{className:"w-full max-w-7xl mx-auto space-y-8 sm:space-y-10",children:[e.jsx("div",{className:`\r
            bg-white\r
            border border-gray-200\r
            rounded-3xl\r
            shadow-sm\r
            p-5 sm:p-7\r
        `,children:e.jsxs("div",{className:`\r
                flex flex-col lg:flex-row\r
                lg:items-center\r
                justify-between\r
                gap-5\r
            `,children:[e.jsxs("div",{className:"min-w-0",children:[e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("div",{className:`\r
                            w-14 h-14\r
                            rounded-2xl\r
                            bg-bronze/10\r
                            flex items-center justify-center\r
                            flex-shrink-0\r
                        `,children:e.jsx(Oe,{className:"w-7 h-7 text-bronze"})}),e.jsxs("div",{className:"min-w-0",children:[e.jsx("h1",{className:`\r
                                text-2xl sm:text-3xl\r
                                font-bold\r
                                text-gray-800\r
                                leading-tight\r
                            `,children:"Party Documents"}),e.jsx("p",{className:`\r
                                text-sm sm:text-base\r
                                text-gray-500\r
                                mt-1\r
                            `,children:"View, manage, and track all transaction documents."})]})]}),e.jsxs("div",{className:`\r
                        mt-5\r
                        flex flex-wrap items-center gap-3\r
                    `,children:[e.jsxs("div",{className:`\r
                            bg-gray-100\r
                            px-4 py-2.5\r
                            rounded-2xl\r
                        `,children:[e.jsx("p",{className:"text-xs text-gray-500 uppercase font-semibold tracking-wide",children:"General"}),e.jsx("p",{className:"text-lg font-bold text-gray-800 mt-1",children:z.length})]}),e.jsxs("div",{className:`\r
                            bg-blue-50\r
                            px-4 py-2.5\r
                            rounded-2xl\r
                        `,children:[e.jsx("p",{className:"text-xs text-blue-600 uppercase font-semibold tracking-wide",children:"Buying"}),e.jsx("p",{className:"text-lg font-bold text-blue-700 mt-1",children:I.length})]}),e.jsxs("div",{className:`\r
                            bg-green-50\r
                            px-4 py-2.5\r
                            rounded-2xl\r
                        `,children:[e.jsx("p",{className:"text-xs text-green-600 uppercase font-semibold tracking-wide",children:"Selling"}),e.jsx("p",{className:"text-lg font-bold text-green-700 mt-1",children:O.length})]})]})]}),e.jsx("div",{className:`\r
                    flex flex-col sm:flex-row\r
                    gap-3\r
                    w-full lg:w-auto\r
                `,children:e.jsx("button",{onClick:()=>U(!0),disabled:!H,className:`
                        w-full sm:w-auto
                        px-5 py-3.5
                        rounded-2xl
                        font-semibold
                        text-sm
                        transition-all
                        shadow-sm
                        whitespace-nowrap
                        ${H?"bg-[#1f3a56] hover:bg-[#162c44] text-white":"bg-gray-300 text-gray-500 cursor-not-allowed"}
                    `,children:"View Uploaded Docs"})})]})}),e.jsxs("div",{className:"space-y-8",children:[e.jsx(B,{title:"PDF Templates",data:z}),M==="buyer"&&e.jsx(B,{title:"Buying Documents",data:I}),M==="seller"&&e.jsx(B,{title:"Selling Documents",data:O}),!M&&e.jsxs(e.Fragment,{children:[e.jsx(B,{title:"Buying Documents",data:I}),e.jsx(B,{title:"Selling Documents",data:O})]})]})]}),Be&&e.jsxs("div",{className:`\r
                        fixed inset-0\r
                        z-[999]\r
                        bg-black/60\r
                        backdrop-blur-sm\r
                        flex items-center justify-center\r
                        p-4 sm:p-6\r
                    `,children:[e.jsxs("div",{className:`\r
                            relative\r
                            w-full\r
                            max-w-6xl\r
                            max-h-[92vh]\r
                            overflow-y-auto\r
                            bg-white\r
                            rounded-3xl\r
                            shadow-2xl\r
                            border border-gray-200\r
                        `,children:[e.jsxs("div",{className:`\r
                                sticky top-0 z-20\r
                                bg-white\r
                                border-b border-gray-100\r
                                px-5 sm:px-7 py-5\r
                                flex items-start sm:items-center\r
                                justify-between gap-4\r
                                rounded-t-3xl\r
                            `,children:[e.jsxs("div",{className:"min-w-0",children:[e.jsx("h2",{className:`\r
                                        text-2xl sm:text-3xl\r
                                        font-bold\r
                                        text-gray-800\r
                                    `,children:"Uploaded Documents"}),e.jsx("p",{className:`\r
                                        text-sm sm:text-base\r
                                        text-gray-500\r
                                        mt-1\r
                                    `,children:"Preview uploaded identification documents."})]}),e.jsx("button",{onClick:()=>U(!1),className:`\r
                                    w-11 h-11\r
                                    rounded-2xl\r
                                    bg-gray-100\r
                                    hover:bg-gray-200\r
                                    text-gray-600\r
                                    transition-all\r
                                    flex items-center justify-center\r
                                    flex-shrink-0\r
                                `,children:"✕"})]}),e.jsx("div",{className:"p-5 sm:p-7",children:e.jsxs("div",{className:`\r
                                    grid\r
                                    grid-cols-1\r
                                    xl:grid-cols-2\r
                                    gap-6 sm:gap-8\r
                                `,children:[e.jsxs("div",{className:`\r
                                        bg-white\r
                                        border border-gray-200\r
                                        rounded-3xl\r
                                        overflow-hidden\r
                                        shadow-sm\r
                                    `,children:[e.jsxs("div",{className:`\r
                                            px-5 py-4\r
                                            border-b border-gray-100\r
                                            flex items-center justify-between\r
                                        `,children:[e.jsxs("div",{children:[e.jsx("h3",{className:"font-bold text-gray-800",children:"Driving License"}),e.jsx("p",{className:"text-sm text-gray-500 mt-1",children:"Uploaded document preview"})]}),N.licenseImage&&e.jsx("span",{className:`\r
                                                    bg-green-100\r
                                                    text-green-700\r
                                                    text-xs\r
                                                    font-semibold\r
                                                    px-3 py-1\r
                                                    rounded-full\r
                                                `,children:"Uploaded"})]}),e.jsx("div",{className:"p-5",children:N.licenseImage?e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:`\r
        w-full\r
        h-[320px] sm:h-[420px]\r
        rounded-2xl\r
        border border-gray-200\r
        overflow-hidden\r
        bg-white\r
        cursor-pointer\r
    `,onClick:()=>{N.licenseImage&&C(N.licenseImage)},children:e.jsx("img",{src:N.licenseImage,alt:"License",className:`\r
            w-full\r
            h-full\r
            object-cover\r
            block\r
        `})}),e.jsx("button",{onClick:()=>{N.licenseImage&&C(N.licenseImage)},className:`\r
                                                        w-full\r
                                                        bg-bronze\r
                                                        hover:bg-bronze-dark\r
                                                        text-white\r
                                                        font-semibold\r
                                                        py-3\r
                                                        rounded-2xl\r
                                                        transition-all\r
                                                    `,children:"Open Full Image"})]}):e.jsxs("div",{className:`\r
                                                    h-[320px]\r
                                                    rounded-2xl\r
                                                    border-2 border-dashed\r
                                                    border-gray-200\r
                                                    flex flex-col\r
                                                    items-center justify-center\r
                                                    text-center\r
                                                    px-6\r
                                                `,children:[e.jsx("p",{className:"text-lg font-semibold text-gray-500",children:"No License Uploaded"}),e.jsx("p",{className:"text-sm text-gray-400 mt-2",children:"Driving license not uploaded yet."})]})})]}),e.jsxs("div",{className:`\r
                                        bg-white\r
                                        border border-gray-200\r
                                        rounded-3xl\r
                                        overflow-hidden\r
                                        shadow-sm\r
                                    `,children:[e.jsxs("div",{className:`\r
                                            px-5 py-4\r
                                            border-b border-gray-100\r
                                            flex items-center justify-between\r
                                        `,children:[e.jsxs("div",{children:[e.jsx("h3",{className:"font-bold text-gray-800",children:"Passport"}),e.jsx("p",{className:"text-sm text-gray-500 mt-1",children:"Uploaded document preview"})]}),N.passportImage&&e.jsx("span",{className:`\r
                                                    bg-green-100\r
                                                    text-green-700\r
                                                    text-xs\r
                                                    font-semibold\r
                                                    px-3 py-1\r
                                                    rounded-full\r
                                                `,children:"Uploaded"})]}),e.jsx("div",{className:"p-5",children:N.passportImage?e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:`\r
                                                        w-full\r
                                                        rounded-2xl\r
                                                        border border-gray-200\r
                                                        overflow-hidden\r
                                                        bg-white\r
                                                        cursor-pointer\r
                                                    `,onClick:()=>{N.passportImage&&C(N.passportImage)},children:e.jsx("img",{src:N.passportImage,alt:"Passport",className:`\r
                                                            w-full\r
                                                            h-auto\r
                                                            object-cover\r
                                                            block\r
                                                        `})}),e.jsx("button",{onClick:()=>{N.passportImage&&C(N.passportImage)},className:`\r
                                                        w-full\r
                                                        bg-bronze\r
                                                        hover:bg-bronze-dark\r
                                                        text-white\r
                                                        font-semibold\r
                                                        py-3\r
                                                        rounded-2xl\r
                                                        transition-all\r
                                                    `,children:"Open Full Image"})]}):e.jsxs("div",{className:`\r
                                                    h-[320px]\r
                                                    rounded-2xl\r
                                                    border-2 border-dashed\r
                                                    border-gray-200\r
                                                    flex flex-col\r
                                                    items-center justify-center\r
                                                    text-center\r
                                                    px-6\r
                                                `,children:[e.jsx("p",{className:"text-lg font-semibold text-gray-500",children:"No Passport Uploaded"}),e.jsx("p",{className:"text-sm text-gray-400 mt-2",children:"Passport not uploaded yet."})]})})]})]})})]}),W&&e.jsxs("div",{className:`\r
                                fixed inset-0\r
                                z-[1000]\r
                                bg-black/90\r
                                flex items-center justify-center\r
                                p-4\r
                            `,children:[e.jsx("button",{onClick:()=>C(null),className:`\r
                                    absolute\r
                                    top-5 right-5\r
                                    w-12 h-12\r
                                    rounded-full\r
                                    bg-white/10\r
                                    hover:bg-white/20\r
                                    text-white\r
                                    text-2xl\r
                                    flex items-center justify-center\r
                                    transition-all\r
                                `,children:"✕"}),e.jsx("img",{src:W,alt:"Preview",className:`\r
                                    max-w-full\r
                                    max-h-full\r
                                    object-contain\r
                                    rounded-2xl\r
                                    shadow-2xl\r
                                    bg-white\r
                                `})]})]}),ee&&i&&e.jsx("div",{className:"fixed inset-0 bg-black/60 flex items-center justify-center z-50",children:e.jsxs("div",{className:"bg-white w-[95%] max-w-5xl h-[95vh] overflow-y-auto p-8 text-[13px] leading-relaxed relative shadow-xl",children:[e.jsx("button",{onClick:()=>le(!1),className:"absolute top-4 right-4 text-gray-600 text-lg",children:"✕"}),e.jsx("h1",{className:"text-center font-bold text-lg border-b pb-2 mb-4",children:"Individual Identification Information Record"}),e.jsxs("div",{className:"mb-4",children:[e.jsx("p",{className:"font-semibold",children:"Transaction Property Address:"}),e.jsxs("div",{className:"border-b border-black min-h-[20px]",children:[i.propertyStreetNum," ",i.propertyStreet,", ",i.propertyCity," ",i.propertyPostalCode]})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-4 mb-4",children:[e.jsxs("div",{children:[e.jsx("p",{children:"Sales Representative/Broker:"}),e.jsx("div",{className:"border-b border-black",children:i.representativeName})]}),e.jsxs("div",{children:[e.jsx("p",{children:"Sales Representative/Broker:"}),e.jsx("div",{className:"border-b border-black",children:i.brokerName})]}),e.jsxs("div",{children:[e.jsx("p",{children:"Date Verified:"}),e.jsx("div",{className:"border-b border-black",children:i.dateVerified})]})]}),e.jsx("h2",{className:"font-bold mt-6 mb-2",children:"A. Verification of Individual"}),e.jsxs("div",{className:"grid grid-cols-2 gap-4 mb-4",children:[e.jsx(l,{label:"Full Name",value:i.fullName}),e.jsx(l,{label:"DOB",value:i.dob}),e.jsx(l,{label:"Address",value:i.address}),e.jsx(l,{label:"Occupation",value:i.occupation})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("p",{className:"font-semibold mb-1",children:"Identification Type:"}),e.jsxs("div",{className:"flex gap-6",children:[e.jsx(p,{label:"Driver License",checked:i.idTypeDriver}),e.jsx(p,{label:"Passport",checked:i.idTypePassport}),e.jsx(p,{label:"Other",checked:i.idTypeOther})]})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-4 mb-6",children:[e.jsx(l,{label:"Document Number",value:i.documentNumber}),e.jsx(l,{label:"Expiry Date",value:i.expiryDate}),e.jsx(l,{label:"Country",value:i.country}),e.jsx(l,{label:"Issuing Jurisdiction",value:i.issuingJurisdiction})]}),e.jsx("h2",{className:"font-bold mt-6 mb-2",children:"Credit File Method"}),e.jsxs("div",{className:"grid grid-cols-2 gap-4 mb-6",children:[e.jsx(l,{label:"Credit Bureau",value:i.creditBureauName}),e.jsx(l,{label:"Reference Number",value:i.creditFileReferenceNumber})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("p",{className:"font-semibold mb-1",children:"Dual ID Process Method:"}),e.jsxs("div",{className:"grid gap-4 grid-cols-3",children:[e.jsx(p,{label:"Individual’s Name and DOB",checked:i.idTypeDriver}),e.jsx(l,{label:"Name of Source",value:i.dobSourceName}),e.jsx(l,{label:"Account Number",value:i.dobAccountNumber})]}),e.jsxs("div",{className:"grid gap-4 grid-cols-3",children:[e.jsx(p,{label:"Individual’s Name and Address",checked:i.idTypePassport}),e.jsx(l,{label:"Name of Source",value:i.addressSourceName}),e.jsx(l,{label:"Account Number",value:i.addressAccountNumber})]}),e.jsxs("div",{className:"grid gap-4 grid-cols-4",children:[e.jsx(p,{label:"Individual’s Name and Financial Account",checked:i.idTypeOther}),e.jsx(l,{label:"Name of SOurce",value:i.financialSourceName}),e.jsx(l,{label:"Financial Account Type",value:i.financialAccountType}),e.jsx(l,{label:"Account Number",value:i.financialAccountNumber})]})]}),e.jsx("h2",{className:"font-bold mt-6 mb-2",children:"B. Third Party"}),e.jsxs("div",{className:"grid grid-cols-2 gap-4 mb-6",children:[e.jsx(l,{label:"Name of Third Party",value:i.thirdPartyName}),e.jsx(l,{label:"Address",value:i.thirdPartyAddress}),e.jsx(l,{label:"Phone",value:i.thirdPartyPhone}),e.jsx(l,{label:"DOB",value:i.thirdPartyDOB}),e.jsx(l,{label:"Business Or Occupation",value:i.thirdPartyOccupation}),e.jsx(l,{label:"Registration Number",value:i.thirdPartyRegistration}),e.jsx(l,{label:"Relationship",value:i.thirdPartyRelationship})]}),e.jsx("h2",{className:"font-bold mt-6 mb-2",children:"C. Client Risk Questions"}),e.jsxs("table",{className:"w-full border border-black text-xs mt-4",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"bg-gray-100 border-b border-black",children:[e.jsx("th",{className:"p-2 border-r w-[40px]",children:"#"}),e.jsx("th",{className:"p-2 border-r text-left",children:"Question"}),e.jsx("th",{className:"p-2 border-r w-[70px]",children:"Yes"}),e.jsx("th",{className:"p-2 border-r w-[70px]",children:"No"}),e.jsx("th",{className:"p-2 w-[90px]",children:"Possibly"})]})}),e.jsx("tbody",{children:Te.map((c,o)=>{var R;const x=o+1,r=(R=i[`q${x}`])==null?void 0:R.toLowerCase(),T=Fe[x].possibly>0,F=x===5?"Unknown":"Possibly";return e.jsxs("tr",{className:"border-t",children:[e.jsx("td",{className:"p-2 border-r text-center",children:x}),e.jsx("td",{className:"p-2 border-r",children:c}),e.jsx("td",{className:"p-2 border-r text-center",children:e.jsx(L,{checked:r==="yes"})}),e.jsx("td",{className:"p-2 border-r text-center",children:e.jsx(L,{checked:r==="no"})}),e.jsx("td",{className:"p-2 text-center",children:T&&e.jsxs("div",{className:"flex flex-col items-center gap-1",children:[e.jsx(L,{checked:r==="possibly"}),e.jsx("span",{className:"text-[10px]",children:F})]})})]},x)})})]}),e.jsxs("div",{className:"mt-6 grid grid-cols-2 gap-4",children:[e.jsx(l,{label:"Total Risk Score",value:i.totalRiskScore}),e.jsx(l,{label:"Risk Level",value:i.riskLevel})]}),e.jsxs("div",{className:"mb-4 mt-6",children:[e.jsx("h2",{children:"Business Relationship"}),e.jsx("p",{className:"font-semibold mb-1",children:"Purpose and Intended Nature of the Business Relationship:"}),e.jsxs("div",{className:"Grid grid-cols-2 gap-6",children:[e.jsx(p,{label:"Residential Property",checked:i.propertyTypeResidential}),e.jsx(p,{label:"Residential Property for income puposes",checked:i.propertyTypeIncome}),e.jsx(p,{label:"Commercial Property",checked:i.propertyTypeCommercial}),e.jsx(p,{label:"Land for Commercial Use",checked:i.propertyTypeLand}),e.jsx(p,{label:"Other for Commercial Use",checked:i.otherPropertyType}),e.jsx(l,{label:"Other Property Type",value:i.otherPropertyType})]})]}),e.jsx("div",{className:"mt-6  gap-4",children:e.jsx(l,{label:"Business Description",value:i.businessDescription})}),e.jsxs("div",{className:"mt-6  gap-4",children:[e.jsx("p",{children:"Measures Taken to Monitor Business Relationship and Keep Client Information Up-To-Date"}),e.jsx(l,{label:"Monitoring Measures",value:i.monitoringMeasures}),e.jsx(l,{label:"Enhanced Measures",value:i.enhancedMeasures})]})]})}),se&&j&&e.jsx("div",{className:"fixed inset-0 bg-black/50 flex items-center justify-center z-50",children:e.jsxs("div",{className:"bg-white rounded-lg p-6 w-[95%] max-w-4xl relative overflow-y-auto max-h-[90vh]",children:[e.jsx("button",{onClick:()=>re(!1),className:"absolute top-2 right-3 text-gray-500 text-lg",children:"✕"}),e.jsx("h1",{className:"text-center text-lg font-bold mb-6 border-b pb-2",children:"Politically Exposed Person (PEP)"}),e.jsxs(d,{title:"Individual Information",children:[e.jsx(s,{label:"Individual Name",value:j.txtIndividual}),e.jsx(s,{label:"PEP Name",value:j.txtPEP}),e.jsx(s,{label:"Organization",value:j.txtOrganization}),e.jsx(s,{label:"Determine Date",value:j.txtDetermineDate})]}),e.jsxs(d,{title:"Determination whether the individual is:",children:[e.jsx(p,{label:"Politically exposed foreign person",checked:j.chkOpt_Determine1}),e.jsx(p,{label:"Politically exposed domestic person",checked:j.chkOpt_Determine2}),e.jsx(p,{label:"Head of international organization",checked:j.chkOpt_Determine3}),e.jsx(p,{label:"None of the above",checked:j.chkOpt_Determine4})]}),e.jsxs(d,{title:"How was this determination made?",children:[e.jsx(p,{label:"Asked individual",checked:j.chkOpt_Determination1}),e.jsx(p,{label:"Internet search",checked:j.chkOpt_Determination2}),e.jsx(p,{label:"Commercial PEP/HIO database",checked:j.chkOpt_Determination3}),e.jsx(p,{label:"Other",checked:j.chkOpt_Determination4}),e.jsx(s,{label:"Other Explanation",value:j.txtDeterminationOther})]}),e.jsxs(d,{title:"",children:[e.jsx(s,{label:"Determination Date",value:j.txtDetermineDate}),e.jsx(s,{label:"Position held by PEP/HIO",value:j.txtPEP}),e.jsx(s,{label:"Organization Name",value:j.txtOrganization})]}),e.jsxs(d,{title:"Risk Assessment",children:[e.jsx(s,{label:"Risk Level",value:j.chkOpt_Risk}),e.jsx(s,{label:"Source of Funds",value:j.txtSource}),e.jsx("h2",{children:"6A. Is client high risk according to brokerage policies?"}),e.jsx(s,{label:"",value:j.chkOpt_Completed?"Yes":"No"})]}),e.jsxs(d,{title:"Financial Information",children:[e.jsx(s,{label:"If $100,000 received — Is individual high risk?",value:j.radio_group_27zujm}),e.jsx(s,{label:"Cash Source",value:j.txtCashSource}),e.jsx(s,{label:"Wealth Source",value:j.txtWealthSource})]}),e.jsxs(d,{title:"Management Approval",children:[e.jsx(s,{label:"Management",value:j.txtManagement}),e.jsx(s,{label:"Management Date",value:j.txtManagementDate})]})]})}),ne&&A&&e.jsx("div",{className:"fixed inset-0 bg-black/60 flex items-center justify-center z-50",children:e.jsxs("div",{className:"bg-white w-[95%] max-w-3xl p-8 relative shadow-xl",children:[e.jsx("button",{onClick:()=>ie(!1),className:"absolute top-4 right-4 text-gray-600 text-lg",children:"✕"}),e.jsx("h1",{className:"text-center text-lg font-bold mb-6 border-b pb-2",children:"Consumer Relationships Guide Acknowledgement"}),e.jsx("p",{className:"text-sm mb-6 leading-relaxed text-gray-700",children:"The undersigned acknowledges receipt of the Consumer Relationships Guide."}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-xs mb-1",children:"Consumer Name (1)"}),e.jsx("div",{className:"border-b border-black min-h-[24px] text-sm",children:A.consumerPrintName1||""})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-xs mb-1",children:"Consumer Name (2)"}),e.jsx("div",{className:"border-b border-black min-h-[24px] text-sm",children:A.consumerPrintName2||""})]})]}),e.jsxs("div",{className:"mt-8",children:[e.jsx("p",{className:"text-xs mb-2",children:"Date Signed"}),e.jsxs("div",{className:"flex gap-4",children:[e.jsx($,{label:"Month",value:A.signedDateM}),e.jsx($,{label:"Day",value:A.signedDateD}),e.jsx($,{label:"Year",value:A.signedYear})]})]}),e.jsx("div",{className:"mt-10",children:e.jsx("div",{className:"border-t border-black pt-2 text-xs text-gray-600",children:"Signature of Consumer(s)"})})]})}),oe&&t&&e.jsx("div",{className:"fixed inset-0 bg-black/60 flex items-center justify-center z-50",children:e.jsxs("div",{className:"bg-white w-[95%] max-w-6xl h-[95vh] overflow-y-auto p-8 text-[13px] relative shadow-xl",children:[e.jsx("button",{onClick:()=>ce(!1),className:"absolute top-4 right-4 text-gray-600 text-lg",children:"✕"}),e.jsx("h1",{className:"text-center font-bold text-lg border-b pb-2 mb-4",children:"Exclusive Buyer Representation Agreement"}),e.jsx(l,{label:"Agreement Number",value:t.agreementNumber}),e.jsxs(y,{title:"Brokerage",children:[e.jsx(l,{label:"Brokerage 1",value:t.brokerageName1}),e.jsx(l,{label:"Brokerage 2",value:t.brokerageName2})]}),e.jsxs(y,{title:"Buyers",children:[e.jsx(l,{label:"Buyer 1",value:t.buyerName1}),e.jsx(l,{label:"Buyer 2",value:t.buyerName2})]}),e.jsxs(y,{title:"Property Details",children:[e.jsx(l,{label:"Property Type",value:t.propertyType}),e.jsx(l,{label:"Market Areas",value:t.marketAreas})]}),e.jsx(l,{label:"Designated Agent",value:t.designatedAgentName}),e.jsxs(y,{title:"Agreement Term",children:[e.jsx(l,{label:"Start",value:`${t.startDate}/${t.startYear} ${t.startTime}`}),e.jsx(l,{label:"End",value:`${t.endDate}/${t.endYear} ${t.endTime}`})]}),e.jsx(S,{label:"Agent Services",value:t.agentServices}),e.jsx(l,{label:"Retainer Amount",value:t.daysAfterAgreement}),e.jsxs(y,{title:"Fees",children:[e.jsx(l,{label:"Our Fee",value:t.ourFee}),e.jsx(l,{label:"Retainer Amount",value:t.retainerAmount}),e.jsx(l,{label:"Retainer Date",value:`${t.retainerMonth}/${t.retainerDay}/${t.retainerYear}`}),e.jsx(l,{label:"Refund within",value:t.refundDays})]}),e.jsxs(y,{title:"Payment Terms",children:[e.jsx(l,{label:"Within days agreement ends",value:t.contractDaysAfterAgreement}),e.jsx(l,{label:"Pay within",value:t.paymentAfterPurchaseDays}),e.jsx(l,{label:"Refund difference within",value:t.refundDifferenceDays}),e.jsx(l,{label:"Pay remaining within",value:t.differencePaymentDays})]}),e.jsx(S,{label:"Reasonable Expenses",value:t.reasonableExpenses}),e.jsx(S,{label:"Additional Terms",value:t.additionalTerms}),e.jsx(S,{label:"THIS AGREEMENT INCLUDES THESE ATTACHED DOCUMENTS",value:t.attachedDocuments}),e.jsxs(y,{title:"Buyer 1 Contact Info",children:[e.jsx(l,{label:"Name",value:t.buyer1Name}),e.jsx(l,{label:"Adress",value:t.buyer1Address}),e.jsx(l,{label:"Email",value:t.buyer1Email}),e.jsx(l,{label:"Fax",value:t.buyer1Fax}),e.jsx(l,{label:"Phone",value:t.buyer1Phone})]}),e.jsxs(y,{title:"Buyer 2 Contact Info",children:[e.jsx(l,{label:"Name",value:t.buyer2Name}),e.jsx(l,{label:"Address",value:t.buyer2Address}),e.jsx(l,{label:"Email",value:t.buyer2Email}),e.jsx(l,{label:"Fax",value:t.buyer2Fax}),e.jsx(l,{label:"Phone",value:t.buyer2Phone})]}),e.jsxs(y,{title:"Brokerage Contact",children:[e.jsx(l,{label:"Name",value:t.brokerageName}),e.jsx(l,{label:"Address",value:t.brokerageAddress}),e.jsx(l,{label:"Email",value:t.brokerageEmail}),e.jsx(l,{label:"Fax",value:t.brokerageFax}),e.jsx(l,{label:"Phone",value:t.brokeragePhone})]}),e.jsxs(y,{title:"Representative Contact",children:[e.jsx(l,{label:"Name",value:t.repName}),e.jsx(l,{label:"Email",value:t.repPhone}),e.jsx(l,{label:"Fax",value:t.repFax}),e.jsx(l,{label:"Phone",value:t.repEmail})]}),e.jsx("h2",{className:"font-semibold mt-8 mb-2",children:"Signatures"}),e.jsxs("div",{className:"grid grid-cols-2 gap-6",children:[e.jsx(b,{label:"Buyer 1",value:t.buyersig1}),e.jsx(b,{label:"Buyer 2",value:t.buyersig2}),e.jsx(b,{label:"Witness 1",value:t.witness1sig}),e.jsx(b,{label:"Witness 2",value:t.witness2sig}),e.jsx(b,{label:"Agent",value:t.agentsig})]}),e.jsx("div",{className:"mt-6",children:e.jsx(l,{label:"Signed Date",value:`${t.signedDateM}/${t.signedDateD}/${t.signedYear}`})})]})}),me&&g&&e.jsx("div",{className:"fixed inset-0 bg-black/60 flex items-center justify-center z-50",children:e.jsxs("div",{className:"bg-white w-[95%] max-w-5xl h-[95vh] overflow-y-auto p-8 text-[13px] leading-relaxed relative shadow-xl",children:[e.jsx("button",{onClick:()=>be(!1),className:"absolute top-4 right-4 text-gray-600 text-lg",children:"✕"}),e.jsx("h1",{className:"text-center font-bold text-lg border-b pb-2 mb-4",children:"Buyer Representation Agreement Amendment"}),e.jsxs(y,{title:"Brokerage",children:[e.jsx(l,{label:"Brokerage 1",value:g.brokerageName1}),e.jsx(l,{label:"Brokerage 2",value:g.brokerageName2})]}),e.jsxs(y,{title:"Buyers",children:[e.jsx(l,{label:"Buyer 1",value:g.buyerName1}),e.jsx(l,{label:"Buyer 2",value:g.buyerName2})]}),e.jsx(l,{label:"Original Agreement Reference",value:g.agreementRef}),e.jsxs(y,{title:"Amendment Effective Date",children:[e.jsx(l,{label:"Time",value:g.effectiveTime}),e.jsx(l,{label:"Date",value:g.effectiveDate})]}),e.jsxs(y,{title:"Amendment End Date",children:[e.jsx(l,{label:"Time",value:g.endTime}),e.jsx(l,{label:"Date",value:g.endDate})]}),e.jsxs(y,{title:"Property Details",children:[e.jsx(l,{label:"Property Type",value:g.propertyType}),e.jsx(l,{label:"Market Areas",value:g.marketAreas})]}),e.jsx(S,{label:"Other Amendments / Terms",value:g.otherAmendments}),e.jsx("div",{className:"mt-6",children:e.jsx(l,{label:"Signed Date",value:g.signedDate})}),e.jsx("h2",{className:"font-semibold mt-8 mb-2",children:"Signatures"}),e.jsxs("div",{className:"grid grid-cols-2 gap-6",children:[e.jsx(b,{label:"Buyer 1 (Print Name)",value:g.buyerPrint1}),e.jsx(b,{label:"Buyer 2 (Print Name)",value:g.buyerPrint2}),e.jsx(b,{label:"Witness 1",value:g.witnessPrint1}),e.jsx(b,{label:"Witness 2",value:g.witnessPrint2}),e.jsx(b,{label:"Representative",value:g.repPrintName})]})]})}),je&&f&&e.jsx("div",{className:"fixed inset-0 bg-black/60 flex items-center justify-center z-50",children:e.jsxs("div",{className:"bg-white w-[95%] max-w-5xl h-[95vh] overflow-y-auto p-8 text-[13px] leading-relaxed relative shadow-xl",children:[e.jsx("button",{onClick:()=>he(!1),className:"absolute top-4 right-4 text-gray-600 text-lg",children:"✕"}),e.jsx("h1",{className:"text-center font-bold text-lg border-b pb-2 mb-4",children:"Buyer Representation Agreement Termination"}),e.jsxs(y,{title:"Brokerage",children:[e.jsx(l,{label:"Brokerage 1",value:f.brokerageName1}),e.jsx(l,{label:"Brokerage 2",value:f.brokerageName2})]}),e.jsxs(y,{title:"Buyers",children:[e.jsx(l,{label:"Buyer 1",value:f.buyerName1}),e.jsx(l,{label:"Buyer 2",value:f.buyerName2})]}),e.jsx(l,{label:"Agreement Being Terminated",value:f.terminateAgreement}),e.jsxs(y,{title:"Termination Details",children:[e.jsx(l,{label:"Time",value:f.terminationTime}),e.jsx(l,{label:"Date",value:f.terminationDate}),e.jsx(l,{label:"Termination Type",value:f.terminationType})]}),e.jsx(S,{label:"Additional Terms / Conditions",value:f.additionalTerms}),e.jsx("div",{className:"mt-6",children:e.jsx(l,{label:"Signed Date",value:f.signedDate})}),e.jsx("h2",{className:"font-semibold mt-8 mb-2",children:"Signatures"}),e.jsxs("div",{className:"grid grid-cols-2 gap-6",children:[e.jsx(b,{label:"Buyer 1",value:f.buyerPrint1}),e.jsx(b,{label:"Buyer 2",value:f.buyerPrint2}),e.jsx(b,{label:"Witness 1",value:f.witnessPrint1}),e.jsx(b,{label:"Witness 2",value:f.witnessPrint2}),e.jsx(b,{label:"Broker",value:f.brokerPrint})]})]})}),ve&&a&&e.jsx("div",{className:"fixed inset-0 bg-black/60 flex items-center justify-center z-50",children:e.jsxs("div",{className:"bg-white w-[98%] max-w-7xl h-[95vh] overflow-y-auto p-8 text-[12px] leading-relaxed relative shadow-xl",children:[e.jsx("button",{onClick:()=>ge(!1),className:"absolute top-4 right-4 text-gray-600 text-lg",children:"✕"}),e.jsx("h1",{className:"text-center font-bold text-lg border-b pb-2 mb-4",children:"Residential Purchase Contract"}),e.jsxs(d,{title:"Parties",children:[e.jsx(s,{label:"Seller 1",value:a.sellerName1}),e.jsx(s,{label:"Seller 2",value:a.sellerName2}),e.jsx(s,{label:"Buyer 1",value:a.buyerName1}),e.jsx(s,{label:"Buyer 2",value:a.buyerName2})]}),e.jsxs(d,{title:"Property",children:[e.jsx(s,{label:"Unit #",value:a.unitnumber}),e.jsx(s,{label:"Street #",value:a.streetnumber}),e.jsx(s,{label:"Street Name",value:a.streetname}),e.jsx(s,{label:"City",value:a.city}),e.jsx(s,{label:"Postal Code",value:a.postalCode})]}),e.jsxs(d,{title:"Legal Description",children:[e.jsx(s,{label:"Plan",value:a.plan}),e.jsx(s,{label:"Block",value:a.block}),e.jsx(s,{label:"Lot",value:a.lot}),e.jsx(s,{label:"Other",value:a.legalOther})]}),e.jsx(S,{label:"Unattached goods included",value:a.unattachedGoods}),e.jsx(S,{label:"Attached goods included",value:a.attachedGoods}),e.jsxs(d,{title:"Purchase Price",children:[e.jsx(s,{label:"Price",value:a.purchasePrice}),e.jsx(s,{label:"Completion Day",value:a.completionDay})]}),e.jsx(d,{title:"General Terms",children:e.jsx(s,{label:"Purpose of closing this contract",value:a.hidbrokerage})}),e.jsxs(d,{title:"Deposits",children:[e.jsx(s,{label:"Trustee",value:a.depositTrustee}),e.jsx(s,{label:"Amount paid by the buyer",value:a.depositAmount1}),e.jsx(s,{label:"Method of payment",value:a.depositMethod1}),e.jsx(s,{label:"Initial Payment Time",value:a.depositTime1}),e.jsx(s,{label:"Initial Payment Date",value:a.depositDate1}),e.jsx(s,{label:"Additional Payment Amount",value:a.depositAmount2}),e.jsx(s,{label:"Method of Payment",value:a.depositMethod2}),e.jsx(s,{label:"Additional Payment Time",value:a.depositTime2}),e.jsx(s,{label:"Additional Payment Date",value:a.depositDate2})]}),e.jsxs(d,{title:"Dower",children:[e.jsx(s,{label:"Provide a completed Dower Consent and Acknowledgement form part of this contract on or before",value:a.altertime3}),e.jsx(s,{label:"Date",value:a.alterdate3})]}),e.jsxs(d,{title:"Conditions",children:[e.jsx(s,{label:"Required Down Payment %",value:a.downPaymentPercent}),e.jsx(s,{label:"Financing Time",value:a.financingConditionTime}),e.jsx(s,{label:"Financing Date",value:a.financingConditionDay}),e.jsx(s,{label:"Inspection Time",value:a.inspectionConditionTime}),e.jsx(s,{label:"Inspection Date",value:a.inspectionConditionDay}),e.jsx(s,{label:"Buyer Property Sale Time",value:a.buyerPropertySaleTime}),e.jsx(s,{label:"Buyer Property Sale Date",value:a.buyerPropertySaleDay}),e.jsx(s,{label:"Buyer Conditions",value:a.buyerConditions}),e.jsx(s,{label:"Deadline Time",value:a.buyCondTime}),e.jsx(s,{label:"Deadline Date",value:a.buyCondDate}),e.jsx(s,{label:"Seller Conditions",value:a.sellerConditions}),e.jsx(s,{label:"Deadline Time",value:a.sellerCondTime}),e.jsx(s,{label:"Deadline Date",value:a.sellerCondDate})]}),e.jsxs(d,{title:"Attachments",children:[e.jsx(p,{label:"Financing Schedule",checked:a.financingSchedule}),e.jsx(p,{label:"Tenancy Schedule",checked:a.tenancySchedule}),e.jsx(p,{label:"Manufactured Home",checked:a.manufacturedHomeSchedule}),e.jsx(p,{label:"Sale of Buyer Property",checked:a.saleOfBuyerPropertySchedule}),e.jsx(p,{label:"Addendum",checked:a.addendum})]}),e.jsx(S,{label:"Other Attachments",value:a.otherAttachment}),e.jsx(S,{label:"Other Terms",value:a.otherTerms}),e.jsxs("div",{className:"mt-4 grid grid-cols-2",children:[e.jsx(d,{title:"SellerBrokerage",children:e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(l,{label:"Name",value:a.sellerBrokerage}),e.jsx(l,{label:"Address",value:a.sellerRepAddr}),e.jsx(l,{label:"City",value:a.sellerRepCity}),e.jsx(l,{label:"State",value:a.sellerRepState}),e.jsx(l,{label:"Postal Code",value:a.sellerRepcode}),e.jsx("h2",{children:"Brokerage Represntative"}),e.jsx(l,{label:"Name",value:a.brksellerRepName}),e.jsx(l,{label:"Phone",value:a.brksellerRepPhone}),e.jsx(l,{label:"Fax",value:a.brksellerRepFax}),e.jsx(l,{label:"Email",value:a.brksellerRepEmail})]})}),e.jsx(d,{title:"Buyer Brokerage",children:e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(l,{label:"Name",value:a.buyerBrokerage}),e.jsx(l,{label:"Address",value:a.buyerRepAddr}),e.jsx(l,{label:"City",value:a.buyerRepCity}),e.jsx(l,{label:"State",value:a.buyerRepState}),e.jsx(l,{label:"Postal Code",value:a.buyerRepcode}),e.jsx("h2",{children:"Brokerage Represntative"}),e.jsx(l,{label:"Name",value:a.brkbuyerRepName}),e.jsx(l,{label:"Phone",value:a.brkbuyerRepPhone}),e.jsx(l,{label:"Fax",value:a.brkbuyerRepFax}),e.jsx(l,{label:"Email",value:a.brkbuyerRepEmail})]})})]}),e.jsx(S,{label:"If no brokerage is authorized, enter the Seller's Authorized Representative",value:a.sellerAuthorizedPerson}),e.jsx(S,{label:"If no brokerage is authorized, enter the Buyer's Authorized Representative",value:a.buyerAuthorizedPerson}),e.jsx("div",{className:"mt-6",children:e.jsxs(d,{title:"Offer",children:[e.jsx(s,{label:"Offer Expiry Time",value:a.offerExpiryTime}),e.jsx(s,{label:"Offer Expiry Date",value:a.offerExpiryDate}),e.jsx(s,{label:"Buyer 1 Signed Time",value:a.buyerSignedTime1}),e.jsx(s,{label:"Buyer 1 Signed Date",value:a.buyerSignedDate1}),e.jsx(s,{label:"Witness Name",value:a.buyerWitnessName1}),e.jsx(s,{label:"Buyer 2 Signed Time",value:a.buyerSignedTime2}),e.jsx(s,{label:"Buyer 2 Signed Date",value:a.buyerSignedDate2}),e.jsx(s,{label:"Witness Name",value:a.buyerWitnessName2})]})}),e.jsx("div",{className:"mt-6",children:e.jsxs(d,{title:"Acceptanse",children:[e.jsx(s,{label:"Seller 1 Signed Time",value:a.sellerSignedTime1}),e.jsx(s,{label:"Seller 1 Signed Date",value:a.sellerSignedDate1}),e.jsx(s,{label:"Witness Name",value:a.sellerWitnessName1}),e.jsx(s,{label:"Seller 2 Signed Time",value:a.sellerSignedTime2}),e.jsx(s,{label:"Seller 2 Signed Date",value:a.sellerSignedDate2}),e.jsx(s,{label:"Witness Name",value:a.sellerWitnessName2})]})}),e.jsx("div",{className:"mt-6",children:e.jsxs(d,{title:"Non-Owner Spouse Signature",children:[e.jsx(s,{label:"Spouse Signed Time",value:a.spouseSignedTime}),e.jsx(s,{label:"Spouse Signed Date",value:a.spouseSignedDate}),e.jsx(s,{label:"Spouse Name",value:a.spouseName}),e.jsx(s,{label:"Witness Name",value:a.spouseWitnessName})]})}),e.jsx("h3",{children:"CONVEYANCING INFORMATION"}),e.jsxs("div",{className:"mt-4 grid grid-cols-2",children:[e.jsx(d,{title:"Seller Info",children:e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(l,{label:"Street Number",value:a.sellerRepstreetnum}),e.jsx(l,{label:"Street",value:a.sellerRepstreet}),e.jsx(l,{label:"City",value:a.sellerCity}),e.jsx(l,{label:"State",value:a.sellerState}),e.jsx(l,{label:"Postal Code",value:a.sellercode}),e.jsx(l,{label:"Phone",value:a.sellerRepphone}),e.jsx(l,{label:"Fax",value:a.sellerRepfax}),e.jsx("h2",{children:"Lawyer Info"}),e.jsx(l,{label:"Lawyer Name",value:a.brksellerRepLName}),e.jsx(l,{label:"Firm",value:a.brksellerRepLfirm}),e.jsx(l,{label:"Address",value:a.brksellerRepLaddr}),e.jsx(l,{label:"City",value:a.brksellerRepLcity}),e.jsx(l,{label:"State",value:a.brksellerRepLstate}),e.jsx(l,{label:"Postal Code",value:a.brksellerRepLcode}),e.jsx(l,{label:"Phone",value:a.brksellerRepLPhone}),e.jsx(l,{label:"Fax",value:a.brksellerRepLFax}),e.jsx(l,{label:"Email",value:a.brksellerRepLEmail})]})}),e.jsx(d,{title:"Buyer Info",children:e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(l,{label:"Street Number",value:a.buyerRepstreetNum}),e.jsx(l,{label:"Street",value:a.buyerRepStreet}),e.jsx(l,{label:"City",value:a.buyerRepCity2}),e.jsx(l,{label:"State",value:a.buyerRepState2}),e.jsx(l,{label:"Postal Code",value:a.buyerRepcode2}),e.jsx(l,{label:"Phone",value:a.brkbuyerRepPhone}),e.jsx(l,{label:"Fax",value:a.brkbuyerRepFax}),e.jsx("h2",{children:"Lawyer Info"}),e.jsx(l,{label:"Lawyer Name",value:a.brkbuyerRepLName}),e.jsx(l,{label:"Firm",value:a.brkbuyerRepLFirm}),e.jsx(l,{label:"Address",value:a.brkbuyerRepLAddr}),e.jsx(l,{label:"City",value:a.brkbuyerRepLCity}),e.jsx(l,{label:"State",value:a.brkbuyerRepLstate}),e.jsx(l,{label:"Postal Code",value:a.brkbuyerRepLZip}),e.jsx(l,{label:"Phone",value:a.brkbuyerRepLPhone}),e.jsx(l,{label:"Fax",value:a.brkbuyerRepLFax}),e.jsx(l,{label:"Email",value:a.brkbuyerRepLEmail})]})})]})]})}),fe&&n&&e.jsx("div",{className:"fixed inset-0 bg-black/60 flex items-center justify-center z-50",children:e.jsxs("div",{className:"bg-white w-[95%] max-w-6xl h-[95vh] overflow-y-auto p-8 text-[13px] relative shadow-xl",children:[e.jsx("button",{onClick:()=>Ne(!1),className:"absolute top-4 right-4 text-gray-600 text-lg",children:"✕"}),e.jsx("h1",{className:"text-center font-bold text-lg border-b pb-2 mb-4",children:"Seller Customer Status Acknowledgment & Fee Agreement"}),e.jsx(l,{label:"Agreement Number",value:n.agreementNumber}),e.jsx("div",{className:"mt-6",children:e.jsxs(d,{title:"Brokerage",children:[e.jsx(l,{label:"Brokerage 1",value:n.brokerageName1}),e.jsx(l,{label:"Brokerage 2",value:n.brokerageName2})]})}),e.jsxs(d,{title:"Seller",children:[e.jsx(l,{label:"Seller 1",value:n.sellerName1}),e.jsx(l,{label:"Seller 2",value:n.sellerName2})]}),e.jsxs(d,{title:"Property",children:[e.jsx(l,{label:"Unit #",value:n.propertyUnitNumber}),e.jsx(l,{label:"Street #",value:n.streetNumber}),e.jsx(l,{label:"Street",value:n.street}),e.jsx(l,{label:"City",value:n.city}),e.jsx(l,{label:"State",value:n.state}),e.jsx(l,{label:"Zip",value:n.zipcode})]}),e.jsxs(d,{title:"Legal Description",children:[e.jsx(l,{label:"Plan",value:n.plan}),e.jsx(l,{label:"Block",value:n.block}),e.jsx(l,{label:"Lot",value:n.lot}),e.jsx(l,{label:"Condo Plan",value:n.condoPlan}),e.jsx(l,{label:"Unit Number",value:n.unitNumber})]}),e.jsxs(d,{title:"ATS",children:[e.jsx(l,{label:"Meridian",value:n.meridian}),e.jsx(l,{label:"Range",value:n.range}),e.jsx(l,{label:"Township",value:n.township}),e.jsx(l,{label:"Section",value:n.section})]}),e.jsxs(d,{title:"Fees",children:[e.jsx(l,{label:"Fee Amount",value:n.feeAmount}),e.jsx(l,{label:"Days 1",value:n.feeDays1}),e.jsx(l,{label:"Days 2",value:n.feeDays2})]}),e.jsxs(d,{title:"Dower",children:[e.jsx(l,{label:"Married",value:n.married}),e.jsx(l,{label:"Resided",value:n.resided})]}),e.jsxs(d,{title:"Seller 1 Contact",children:[e.jsx(l,{label:"Name",value:n.seller1Name}),e.jsx(l,{label:"Street Number",value:n.seller1Streetnum}),e.jsx(l,{label:"Street",value:n.seller1Street}),e.jsx(l,{label:"City",value:n.seller1City}),e.jsx(l,{label:"State",value:n.seller1State}),e.jsx(l,{label:"Zip Code",value:n.seller1Zipcode}),e.jsx(l,{label:"Phone",value:n.seller1Phone}),e.jsx(l,{label:"Fax",value:n.seller1Fax}),e.jsx(l,{label:"Email",value:n.seller1Email})]}),e.jsxs(d,{title:"Seller 2 Contact",children:[e.jsx(l,{label:"Name",value:n.seller2Name}),e.jsx(l,{label:"Street Number",value:n.seller2Streetnum}),e.jsx(l,{label:"Street",value:n.seller2Street}),e.jsx(l,{label:"City",value:n.seller2City}),e.jsx(l,{label:"State",value:n.seller2State}),e.jsx(l,{label:"Zip Code",value:n.seller2Zipcode}),e.jsx(l,{label:"Phone",value:n.seller2Phone}),e.jsx(l,{label:"Fax",value:n.seller2Fax}),e.jsx(l,{label:"Email",value:n.seller2Email})]}),e.jsxs(d,{title:"Brokerage Contact",children:[e.jsx(l,{label:"Address",value:"Diamond Realty & Associates Ltd"}),e.jsx(l,{label:"Address",value:n.brokerageAddress}),e.jsx(l,{label:"Phone",value:"(403) 453-8211"}),e.jsx(l,{label:"Fax",value:n.brokerageFax}),e.jsx(l,{label:"Email",value:n.brokerageEmail})]}),e.jsxs(d,{title:"Representative",children:[e.jsx(l,{label:"Name",value:"Parth Brahmbhatt"}),e.jsx(l,{label:"Phone",value:"(403) 453-8211"}),e.jsx(l,{label:"Fax",value:n.repFax}),e.jsx(l,{label:"Email",value:"brahmbhattparthj@hotmail.com"})]}),e.jsx("h2",{className:"font-semibold mt-8 mb-2",children:"Signatures"}),e.jsx(l,{label:"Signed Date",value:n.signedDate}),e.jsxs("div",{className:"grid grid-cols-2 gap-6",children:[e.jsx(b,{label:"Seller 1",value:n.sellerPrint1}),e.jsx(b,{label:"Seller 2",value:n.sellerPrint2}),e.jsx(b,{label:"Witness 1",value:n.witnessPrint1}),e.jsx(b,{label:"Witness 2",value:n.witnessPrint2}),e.jsx(b,{label:"Representative",value:"Parth Brahmbhatt"})]}),e.jsxs(d,{title:"Spouse",children:[e.jsx(l,{label:"SpouseName",value:n.spouseName}),e.jsx(l,{label:"Witness Name",value:n.spouseWitnessName})]})]})}),we&&v&&e.jsx("div",{className:"fixed inset-0 bg-black/60 flex items-center justify-center z-50",children:e.jsxs("div",{className:"bg-white w-[95%] max-w-5xl h-[95vh] overflow-y-auto p-8 text-[13px] relative shadow-xl",children:[e.jsx("button",{onClick:()=>Se(!1),className:"absolute top-4 right-4 text-gray-600 text-lg",children:"✕"}),e.jsx("h1",{className:"text-center font-bold text-lg border-b pb-2 mb-4",children:"Illegal Drug / Marijuana Grow Operation Listing Disclosure"}),e.jsxs(d,{title:"Agreement Info",children:[e.jsx(s,{label:"Agreement Number",value:v.agreementNumber}),e.jsx(s,{label:"Listing Contract #",value:v.listingContractNumber})]}),e.jsxs(d,{title:"Seller(s)",children:[e.jsx(s,{label:"Seller 1 First Name",value:v.sellerFirstName1}),e.jsx(s,{label:"Seller 1 Last Name",value:v.sellerLastName1}),e.jsx(s,{label:"Seller 2 First Name",value:v.sellerFirstName2}),e.jsx(s,{label:"Seller 2 Last Name",value:v.sellerLastName2})]}),e.jsxs(d,{title:"Brokerage",children:[e.jsx(s,{label:"Brokerage Name",value:"Diamond Realty & Associates Ltd"}),e.jsx(s,{label:"Representative Name",value:"Parth Brahmbhatt"})]}),e.jsxs(d,{title:"Property Address",children:[e.jsx(s,{label:"Street Number",value:v.streetNum}),e.jsx(s,{label:"Street",value:v.street}),e.jsx(s,{label:"Unit Number",value:v.unitNum}),e.jsx(s,{label:"City",value:v.city}),e.jsx(s,{label:"State",value:v.state}),e.jsx(s,{label:"Zip Code",value:v.zipCode})]}),e.jsxs(d,{title:"Legal Description",children:[e.jsx(s,{label:"Plan",value:v.plan}),e.jsx(s,{label:"Block",value:v.block}),e.jsx(s,{label:"Lot / Unit",value:v.lotUnit})]}),e.jsxs(d,{title:"Seller Signatures",children:[e.jsx(s,{label:"Sign Date",value:v.sellerSignDate}),e.jsx(b,{label:"Seller 1 Print Name",value:v.sellerPrint1}),e.jsx(b,{label:"Seller 2 Print Name",value:v.sellerPrint2}),e.jsx(b,{label:"Witness 1",value:v.witness1}),e.jsx(b,{label:"Witness 2",value:v.witness2})]}),e.jsxs(d,{title:"Brokerage Signature",children:[e.jsx(s,{label:"Sign Date",value:v.brokerageSignDate}),e.jsx(b,{label:"Representative Print Name",value:"Parth Brahmbhatt"})]})]})}),Pe&&h&&e.jsx("div",{className:"fixed inset-0 bg-black/60 flex items-center justify-center z-50",children:e.jsxs("div",{className:"bg-white w-[95%] max-w-5xl h-[95vh] overflow-y-auto p-8 text-[13px] relative shadow-xl",children:[e.jsx("button",{onClick:()=>Ae(!1),className:"absolute top-4 right-4 text-gray-600 text-lg",children:"✕"}),e.jsx("h1",{className:"text-center font-bold text-lg border-b pb-2 mb-4",children:"Exclusive Seller Representation Agreement Amendment"}),e.jsxs(d,{title:"Agreement",children:[e.jsx(s,{label:"Agreement Number",value:h.agreementNumber}),e.jsx(s,{label:"Listing Number",value:h.listingNumber}),e.jsx(s,{label:"Original Agreement",value:h.exclusiveselleragreement})]}),e.jsxs(d,{title:"Brokerage",children:[e.jsx(s,{label:"Brokerage 1",value:"Diamond Realty & Associates Ltd"}),e.jsx(s,{label:"Brokerage 2",value:h.brokerageName2})]}),e.jsxs(d,{title:"Seller",children:[e.jsx(s,{label:"Seller 1",value:h.sellerName1}),e.jsx(s,{label:"Seller 2",value:h.sellerName2})]}),e.jsxs(d,{title:"Property",children:[e.jsx(s,{label:"Unit Number",value:h.unitNum}),e.jsx(s,{label:"Street Number",value:h.streetNum}),e.jsx(s,{label:"Street",value:h.street}),e.jsx(s,{label:"City",value:h.city}),e.jsx(s,{label:"State",value:h.state}),e.jsx(s,{label:"Zip Code",value:h.zipcode})]}),e.jsxs(d,{title:"Effective Date",children:[e.jsx(s,{label:"Time",value:h.effectiveTime}),e.jsx(s,{label:"Date",value:h.effectiveDate})]}),e.jsxs(d,{title:"End Date",children:[e.jsx(s,{label:"Time",value:h.endTime}),e.jsx(s,{label:"Date",value:h.endDate})]}),e.jsx(d,{title:"Price",children:e.jsx(s,{label:"Listing Price",value:h.price})}),e.jsx(S,{label:"Other Amendments / Terms",value:h.otherAmendments}),e.jsx("div",{className:"mt-6",children:e.jsx(s,{label:"Signed Date",value:h.signedDate})}),e.jsx("h2",{className:"font-semibold mt-8 mb-2",children:"Signatures"}),e.jsxs("div",{className:"grid grid-cols-2 gap-6",children:[e.jsx(b,{label:"Seller 1",value:h.sellerPrint1}),e.jsx(b,{label:"Seller 2",value:h.sellerPrint2}),e.jsx(b,{label:"Witness 1",value:h.witnessPrint1}),e.jsx(b,{label:"Witness 2",value:h.witnessPrint2}),e.jsx(b,{label:"Representative",value:h.repPrintName})]})]})})]})}export{Ze as default};
