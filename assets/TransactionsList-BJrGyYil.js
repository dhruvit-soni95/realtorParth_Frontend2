import{r as y,j as e,z as d}from"./utilities-CctrEpBK.js";import{b as K}from"./react-LWYCItZ7.js";import{R as Q}from"./refresh-cw-lAC9oHXo.js";import{c as W,i as C}from"./index-DK-fOYVO.js";import{P as D}from"./plus-CJqJQ53j.js";import{B as S}from"./building-2-Bgbvys4H.js";import{C as F}from"./calendar-days-DSTchTYR.js";import{U as X}from"./users-BvybAUM9.js";import{E as V}from"./external-link-D0EUt3x9.js";import"./supabase-DWWbfOGS.js";/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A=W("Archive",[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1",key:"1wp1u1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8",key:"1s80jp"}],["path",{d:"M10 12h4",key:"a56b0p"}]]),q=["Upload Docs","Fintrac","Politically Exposed","CRG","Documents"],g=q.length,Z="/admin/transactions/parties",ee="/admin/transactions/create",se="/admin/transactions/archived";function xe(){const w=K(),[f,b]=y.useState([]),[N,v]=y.useState(!0),[P,k]=y.useState(!1),[T,E]=y.useState({}),m=JSON.parse(localStorage.getItem("transactionUser")||"{}"),$=s=>{localStorage.setItem("currentTransactionId",s),w(Z)},R=()=>{localStorage.removeItem("currentTransactionId"),w(ee)},G=async s=>{if(!s._id)return{completed:0,total:g,percent:0,steps:Array(g).fill(!1)};try{const[r,c,n,t]=await Promise.all([fetch(`https://realtorparth.ca/api/fintracpdf/fintrac/user/${s._id}`),fetch(`https://realtorparth.ca/api/fintracpeppdf/pep/user/${s._id}`),fetch(`https://realtorparth.ca/api/crgpdf/crg/user/${s._id}`),fetch(`https://realtorparth.ca/api/statuspdf/document-status/pdf/${s._id}`)]),[l,a,o,i]=await Promise.all([r.json(),c.json(),n.json(),t.json()]);let p=0;if(i!=null&&i.data){const x=i.data,L=[x.EBRAA,x.EBRATDA,x.RPC,x.EBRADA],O=[x.SCSAAFA,x.IDMMGOL,x.ESRAA],B=L.filter(Boolean).length/L.length,M=O.filter(Boolean).length/O.length;(B>0||M>0)&&(p=Math.max(B,M))}const u=[!!(s.licenseImage||s.passportImage),!!(l!=null&&l.data),!!(a!=null&&a.data),!!(o!=null&&o.data),p===1],j=u.filter(Boolean).length,h=Math.round(j/g*100);return{completed:j,total:g,percent:h,steps:u}}catch(r){return console.error("Party progress error:",r),{completed:0,total:g,percent:0,steps:Array(g).fill(!1)}}},J=async s=>{try{const r=new AbortController,c=setTimeout(()=>{r.abort()},15e3),n=await fetch(`https://realtorparth.ca/api/transactions/parties/${s}/${m.id}`,{signal:r.signal});clearTimeout(c);let t;try{t=await n.json()}catch{throw new Error("Invalid server response")}if(!n.ok)throw new Error((t==null?void 0:t.message)||`Error ${n.status}`);if(!t.success||!Array.isArray(t.parties))return{progress:0,completedSteps:0,totalSteps:0,totalParties:0,completedParties:0,isComplete:!1};const l=t.parties;if(l.length===0)return{progress:0,completedSteps:0,totalSteps:0,totalParties:0,completedParties:0,isComplete:!1};const a=await Promise.all(l.map(h=>G(h))),o=a.reduce((h,x)=>h+x.completed,0),i=l.length*g,p=i>0?Math.round(o/i*100):0,u=a.filter(h=>h.percent===100).length,j=l.length>0&&u===l.length;return{progress:p,completedSteps:o,totalSteps:i,totalParties:l.length,completedParties:u,isComplete:j}}catch(r){return console.error("Transaction progress error:",r),{progress:0,completedSteps:0,totalSteps:0,totalParties:0,completedParties:0,isComplete:!1}}},I=async(s=!1)=>{if(!(m!=null&&m.id)){d.error("User not found. Please login again."),v(!1);return}try{s?k(!0):v(!0);const r=new AbortController,c=setTimeout(()=>{r.abort()},15e3),n=await fetch(`https://realtorparth.ca/api/transactions/list/${m.id}`,{signal:r.signal});clearTimeout(c);let t;try{t=await n.json()}catch{throw new Error("Invalid server response")}if(!n.ok)throw new Error((t==null?void 0:t.message)||`Error ${n.status}`);if(!t.success)throw new Error("Failed to fetch transactions");const l=(t.transactions||[]).map(a=>({id:a._id,name:a.name||"Untitled Transaction",property:a.propertyAddress||"Property address not available",status:"In Progress",createdAt:a.createdAt?new Date(a.createdAt).toLocaleDateString("en-CA"):"—",progress:0,completedSteps:0,totalSteps:0,totalParties:0,completedParties:0}));b(l),await Promise.all(l.map(async a=>{E(i=>({...i,[a.id]:!0}));const o=await J(a.id);b(i=>i.map(p=>p.id!==a.id?p:{...p,progress:o.progress,completedSteps:o.completedSteps,totalSteps:o.totalSteps,totalParties:o.totalParties,completedParties:o.completedParties,status:o.isComplete?"Completed":"In Progress"})),E(i=>({...i,[a.id]:!1}))})),s&&d.success("Transactions refreshed")}catch(r){console.error(r),(r==null?void 0:r.name)==="AbortError"?d.error("Request timed out"):(r==null?void 0:r.name)==="TypeError"?d.error("Network error. Please check your connection."):d.error((r==null?void 0:r.message)||"Failed to load transactions")}finally{v(!1),k(!1)}};y.useEffect(()=>{I()},[]);const _=async s=>{if(!(m!=null&&m.id)){d.error("User not found. Please login again.");return}try{const r=new AbortController,c=setTimeout(()=>{r.abort()},1e4),n=await fetch(`https://realtorparth.ca/api/transactions/archive/${s}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({userId:m.id}),signal:r.signal});clearTimeout(c);let t;try{t=await n.json()}catch{throw new Error("Invalid server response")}if(!n.ok)throw new Error((t==null?void 0:t.message)||`Error ${n.status}`);if(!t.success)throw new Error((t==null?void 0:t.message)||"Failed to archive transaction");b(l=>l.filter(a=>a.id!==s)),d.success("Transaction archived successfully")}catch(r){console.error(r),(r==null?void 0:r.name)==="AbortError"?d.error("Request timed out"):(r==null?void 0:r.name)==="TypeError"?d.error("Network error"):d.error((r==null?void 0:r.message)||"Server error")}},H=({transaction:s,compact:r=!1})=>{const c=T[s.id],n=s.status==="Completed",t=s.totalParties>0;return e.jsxs("div",{className:`
          rounded-2xl
          border
          border-gray-200
          bg-gray-50/70
          ${r?"p-3":"p-4"}
        `,children:[e.jsxs("div",{className:"flex items-start justify-between gap-3 mb-3",children:[e.jsxs("div",{className:"min-w-0",children:[e.jsx("p",{className:"text-xs sm:text-sm font-semibold text-gray-800",children:"Completion Progress"}),e.jsx("p",{className:"text-[11px] sm:text-xs text-gray-500 mt-1",children:c?"Checking party progress...":t?`${s.completedParties} of ${s.totalParties} parties completed`:"No parties added"})]}),e.jsx("div",{className:`
              text-base sm:text-lg
              font-bold
              whitespace-nowrap
              ${n?"text-green-600":"text-bronze"}
            `,children:c?"...":`${s.progress}%`})]}),e.jsx("div",{className:"relative w-full h-2.5 sm:h-3 bg-gray-200 rounded-full overflow-hidden",children:e.jsx("div",{className:`
              absolute
              inset-y-0
              left-0
              rounded-full
              transition-all
              duration-700
              ${n?"bg-green-500":"bg-gradient-to-r from-bronze to-yellow-500"}
            `,style:{width:`${s.progress}%`}})}),e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2 mt-2",children:[e.jsxs("span",{className:"text-[10px] sm:text-[11px] text-gray-400",children:[s.completedSteps," ","/"," ",s.totalSteps||"-"," ","steps"]}),n&&e.jsxs("span",{className:"inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-semibold text-green-600",children:[e.jsx(C,{className:"w-3.5 h-3.5"}),"Complete"]})]})]})},Y=()=>e.jsx("div",{className:"divide-y divide-gray-100",children:[1,2,3].map(s=>e.jsxs("div",{className:"p-4 sm:p-5 lg:p-6 animate-pulse",children:[e.jsxs("div",{className:"flex justify-between gap-4",children:[e.jsxs("div",{className:"flex-1 space-y-3",children:[e.jsx("div",{className:"h-5 bg-gray-200 rounded-lg w-2/3"}),e.jsx("div",{className:"h-4 bg-gray-200 rounded-lg w-4/5"})]}),e.jsx("div",{className:"h-7 w-24 bg-gray-200 rounded-full"})]}),e.jsx("div",{className:"h-4 bg-gray-200 rounded-lg w-32 mt-4"}),e.jsx("div",{className:"h-28 bg-gray-200 rounded-2xl mt-4"}),e.jsxs("div",{className:"flex gap-3 mt-4",children:[e.jsx("div",{className:"h-11 bg-gray-200 rounded-xl flex-1"}),e.jsx("div",{className:"h-11 bg-gray-200 rounded-xl flex-1"})]})]},s))}),U=()=>e.jsx("div",{className:"px-5 sm:px-8 py-16 sm:py-20 text-center",children:e.jsxs("div",{className:"max-w-md mx-auto flex flex-col items-center",children:[e.jsx("div",{className:"w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-bronze/10 flex items-center justify-center mb-5",children:e.jsx(S,{className:"w-7 h-7 sm:w-8 sm:h-8 text-bronze"})}),e.jsx("h3",{className:"text-lg sm:text-xl font-semibold text-gray-800",children:"No transactions yet"}),e.jsx("p",{className:"text-sm text-gray-400 mt-2 leading-6",children:"Create your first real estate transaction to get started."}),e.jsxs("button",{onClick:R,className:`\r
              mt-5\r
              inline-flex\r
              items-center\r
              justify-center\r
              gap-2\r
              bg-bronze\r
              text-white\r
              px-5\r
              py-3\r
              rounded-xl\r
              text-sm\r
              font-semibold\r
              hover:opacity-90\r
              active:scale-[0.98]\r
              transition-all\r
              shadow-sm\r
            `,children:[e.jsx(D,{className:"w-4 h-4"}),"Create Transaction"]})]})}),z=({status:s})=>{const r=s==="Completed";return e.jsxs("span",{className:`
          inline-flex
          items-center
          gap-1.5
          px-2.5
          sm:px-3
          py-1.5
          text-[10px]
          sm:text-xs
          font-semibold
          rounded-full
          whitespace-nowrap
          ${r?"bg-green-100 text-green-700":"bg-yellow-100 text-yellow-700"}
        `,children:[r&&e.jsx(C,{className:"w-3 h-3"}),s]})};return e.jsxs("div",{className:"w-full max-w-full space-y-5 sm:space-y-6 lg:space-y-8",children:[e.jsxs("div",{className:"flex flex-col gap-3 sm:gap-4 xl:flex-row xl:items-center xl:justify-between",children:[e.jsxs("div",{className:"min-w-0",children:[e.jsx("h2",{className:"text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 tracking-tight",children:"Transactions"}),e.jsx("p",{className:"text-xs sm:text-sm lg:text-base text-gray-500 mt-1",children:"Manage your real estate transactions."})]}),e.jsxs("div",{className:"flex flex-row items-center gap-2 sm:gap-3 w-full xl:w-auto",children:[e.jsxs("button",{onClick:()=>I(!0),disabled:P,className:`\r
        flex-1\r
        sm:flex-none\r
        inline-flex\r
        items-center\r
        justify-center\r
        gap-1.5\r
        sm:gap-2\r
        px-2.5\r
        sm:px-4\r
        py-2\r
        sm:py-3\r
        border\r
        border-gray-200\r
        rounded-lg\r
        sm:rounded-xl\r
        text-xs\r
        sm:text-sm\r
        font-medium\r
        bg-white\r
        text-gray-700\r
        hover:bg-gray-50\r
        active:scale-[0.98]\r
        transition-all\r
        disabled:opacity-60\r
        disabled:cursor-not-allowed\r
        whitespace-nowrap\r
      `,children:[e.jsx(Q,{className:`
          w-3.5
          h-3.5
          sm:w-4
          sm:h-4
          ${P?"animate-spin":""}
        `}),e.jsx("span",{children:P?"Refreshing...":"Refresh"})]}),e.jsxs("button",{onClick:()=>w(se),className:`\r
        flex-1\r
        sm:flex-none\r
        inline-flex\r
        items-center\r
        justify-center\r
        gap-1.5\r
        sm:gap-2\r
        px-2.5\r
        sm:px-4\r
        py-2\r
        sm:py-3\r
        border\r
        border-gray-200\r
        rounded-lg\r
        sm:rounded-xl\r
        text-xs\r
        sm:text-sm\r
        font-medium\r
        bg-white\r
        text-gray-700\r
        hover:bg-gray-50\r
        active:scale-[0.98]\r
        transition-all\r
        whitespace-nowrap\r
      `,children:[e.jsx(A,{className:"w-3.5 h-3.5 sm:w-4 sm:h-4"}),e.jsx("span",{className:"hidden xs:inline",children:"View Archived"}),e.jsx("span",{className:"xs:hidden",children:"Archived"})]}),e.jsxs("button",{onClick:R,className:`\r
        flex-1\r
        sm:flex-none\r
        inline-flex\r
        items-center\r
        justify-center\r
        gap-1.5\r
        sm:gap-2\r
        bg-bronze\r
        text-white\r
        px-2.5\r
        sm:px-5\r
        py-2\r
        sm:py-3\r
        rounded-lg\r
        sm:rounded-xl\r
        text-xs\r
        sm:text-sm\r
        font-semibold\r
        hover:opacity-90\r
        active:scale-[0.98]\r
        transition-all\r
        shadow-sm\r
        whitespace-nowrap\r
      `,children:[e.jsx(D,{className:"w-3.5 h-3.5 sm:w-4 sm:h-4"}),e.jsx("span",{className:"hidden xs:inline",children:"Create Transaction"}),e.jsx("span",{className:"xs:hidden",children:"Create"})]})]})]}),e.jsxs("div",{className:`\r
          bg-white\r
          border\r
          border-gray-200\r
          rounded-2xl\r
          sm:rounded-3xl\r
          shadow-sm\r
          overflow-hidden\r
          w-full\r
        `,children:[e.jsx("div",{className:"block lg:hidden",children:N?e.jsx(Y,{}):f.length===0?e.jsx(U,{}):e.jsx("div",{className:"divide-y divide-gray-100",children:f.map(s=>e.jsxs("div",{className:`\r
                    p-4\r
                    sm:p-5\r
                    md:p-6\r
                    hover:bg-gray-50/40\r
                    transition-colors\r
                  `,children:[e.jsxs("div",{className:"flex items-start justify-between gap-3",children:[e.jsxs("div",{className:"min-w-0 flex-1",children:[e.jsx("h3",{className:"text-base sm:text-lg font-semibold text-gray-800 break-words",children:s.name}),e.jsxs("div",{className:"flex items-start gap-2 mt-2",children:[e.jsx(S,{className:"w-4 h-4 text-gray-400 mt-0.5 shrink-0"}),e.jsx("p",{className:"text-sm text-gray-500 leading-5 break-words",children:s.property})]})]}),e.jsx("div",{className:"shrink-0",children:e.jsx(z,{status:s.status})})]}),e.jsxs("div",{className:"flex items-center gap-2 text-xs sm:text-sm text-gray-500 mt-4",children:[e.jsx(F,{className:"w-4 h-4 shrink-0"}),e.jsxs("span",{children:["Created:"," ",s.createdAt]})]}),s.totalParties>0&&e.jsxs("div",{className:"flex items-center gap-2 text-xs sm:text-sm text-gray-500 mt-2",children:[e.jsx(X,{className:"w-4 h-4 shrink-0"}),e.jsxs("span",{children:[s.completedParties," ","of"," ",s.totalParties," ","parties completed"]})]}),e.jsx("div",{className:"mt-4",children:e.jsx(H,{transaction:s})}),e.jsxs("div",{className:"grid grid-cols-2 gap-2.5 sm:gap-3 mt-4",children:[e.jsxs("button",{onClick:()=>$(s.id),className:`\r
                        min-h-[44px]\r
                        inline-flex\r
                        items-center\r
                        justify-center\r
                        gap-2\r
                        px-3\r
                        sm:px-4\r
                        py-3\r
                        border\r
                        border-gray-200\r
                        rounded-xl\r
                        text-sm\r
                        font-semibold\r
                        text-gray-700\r
                        bg-white\r
                        hover:bg-gray-50\r
                        active:scale-[0.98]\r
                        transition-all\r
                      `,children:[e.jsx(V,{className:"w-4 h-4"}),"Open"]}),e.jsxs("button",{onClick:()=>_(s.id),className:`\r
                        min-h-[44px]\r
                        inline-flex\r
                        items-center\r
                        justify-center\r
                        gap-2\r
                        px-3\r
                        sm:px-4\r
                        py-3\r
                        bg-red-500\r
                        text-white\r
                        rounded-xl\r
                        text-sm\r
                        font-semibold\r
                        hover:bg-red-600\r
                        active:scale-[0.98]\r
                        transition-all\r
                      `,children:[e.jsx(A,{className:"w-4 h-4"}),"Archive"]})]})]},s.id))})}),e.jsx("div",{className:"hidden lg:block overflow-x-auto",children:N?e.jsx("div",{className:"p-6",children:e.jsx("div",{className:"space-y-5 animate-pulse",children:[1,2,3].map(s=>e.jsxs("div",{className:"grid grid-cols-6 gap-6 items-center",children:[e.jsx("div",{className:"h-5 bg-gray-200 rounded w-32"}),e.jsx("div",{className:"h-5 bg-gray-200 rounded w-48"}),e.jsx("div",{className:"h-10 bg-gray-200 rounded-xl"}),e.jsx("div",{className:"h-7 bg-gray-200 rounded-full w-24"}),e.jsx("div",{className:"h-5 bg-gray-200 rounded w-24"}),e.jsx("div",{className:"h-10 bg-gray-200 rounded-xl w-32"})]},s))})}):f.length===0?e.jsx(U,{}):e.jsxs("table",{className:"w-full",children:[e.jsx("thead",{className:"bg-gray-50 border-b border-gray-100",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-5 xl:px-6 py-5 text-left text-[11px] font-bold uppercase tracking-wider text-gray-500",children:"Transaction"}),e.jsx("th",{className:"px-5 xl:px-6 py-5 text-left text-[11px] font-bold uppercase tracking-wider text-gray-500",children:"Property"}),e.jsx("th",{className:"px-5 xl:px-6 py-5 text-left text-[11px] font-bold uppercase tracking-wider text-gray-500 min-w-[260px]",children:"Progress"}),e.jsx("th",{className:"px-5 xl:px-6 py-5 text-left text-[11px] font-bold uppercase tracking-wider text-gray-500",children:"Status"}),e.jsx("th",{className:"px-5 xl:px-6 py-5 text-left text-[11px] font-bold uppercase tracking-wider text-gray-500",children:"Created"}),e.jsx("th",{className:"px-5 xl:px-6 py-5 text-left text-[11px] font-bold uppercase tracking-wider text-gray-500",children:"Actions"})]})}),e.jsx("tbody",{className:"divide-y divide-gray-100",children:f.map(s=>e.jsxs("tr",{className:`\r
                        hover:bg-gray-50/60\r
                        transition-colors\r
                      `,children:[e.jsx("td",{className:"px-5 xl:px-6 py-5 align-top",children:e.jsx("div",{className:"font-semibold text-gray-800 max-w-[190px] break-words",children:s.name})}),e.jsx("td",{className:"px-5 xl:px-6 py-5 align-top",children:e.jsxs("div",{className:"flex items-start gap-2 max-w-[260px]",children:[e.jsx(S,{className:"w-4 h-4 text-gray-400 mt-0.5 shrink-0"}),e.jsx("div",{className:"text-sm text-gray-600 leading-5 break-words",children:s.property})]})}),e.jsx("td",{className:"px-5 xl:px-6 py-5 align-top",children:e.jsxs("div",{className:"w-full min-w-[220px] max-w-[320px]",children:[e.jsxs("div",{className:"flex items-center justify-between gap-3 mb-2",children:[e.jsx("span",{className:"text-xs text-gray-500",children:s.totalParties>0?`${s.completedParties} / ${s.totalParties} parties`:"No parties"}),e.jsx("span",{className:`
                                text-sm
                                font-bold
                                whitespace-nowrap
                                ${s.status==="Completed"?"text-green-600":"text-bronze"}
                              `,children:T[s.id]?"...":`${s.progress}%`})]}),e.jsx("div",{className:"relative w-full h-2.5 bg-gray-200 rounded-full overflow-hidden",children:e.jsx("div",{className:`
                                absolute
                                inset-y-0
                                left-0
                                rounded-full
                                transition-all
                                duration-700
                                ${s.status==="Completed"?"bg-green-500":"bg-gradient-to-r from-bronze to-yellow-500"}
                              `,style:{width:`${s.progress}%`}})}),e.jsxs("div",{className:"flex items-center justify-between gap-2 mt-1.5",children:[e.jsxs("p",{className:"text-[11px] text-gray-400",children:[s.completedSteps," ","/"," ",s.totalSteps||"-"," ","steps"]}),s.status==="Completed"&&e.jsx(C,{className:"w-3.5 h-3.5 text-green-500"})]})]})}),e.jsx("td",{className:"px-5 xl:px-6 py-5 align-top",children:e.jsx(z,{status:s.status})}),e.jsx("td",{className:"px-5 xl:px-6 py-5 align-top",children:e.jsxs("div",{className:"flex items-center gap-2 text-sm text-gray-500 whitespace-nowrap",children:[e.jsx(F,{className:"w-4 h-4"}),s.createdAt]})}),e.jsx("td",{className:"px-5 xl:px-6 py-5 align-top",children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsxs("button",{onClick:()=>$(s.id),className:`\r
                              inline-flex\r
                              items-center\r
                              justify-center\r
                              gap-1.5\r
                              px-3.5\r
                              py-2.5\r
                              border\r
                              border-gray-200\r
                              rounded-xl\r
                              text-sm\r
                              font-semibold\r
                              text-gray-700\r
                              hover:bg-gray-50\r
                              active:scale-[0.98]\r
                              transition-all\r
                              whitespace-nowrap\r
                            `,children:[e.jsx(V,{className:"w-4 h-4"}),"Open"]}),e.jsxs("button",{onClick:()=>_(s.id),className:`\r
                              inline-flex\r
                              items-center\r
                              justify-center\r
                              gap-1.5\r
                              px-3.5\r
                              py-2.5\r
                              bg-red-500\r
                              text-white\r
                              rounded-xl\r
                              text-sm\r
                              font-semibold\r
                              hover:bg-red-600\r
                              active:scale-[0.98]\r
                              transition-all\r
                              whitespace-nowrap\r
                            `,children:[e.jsx(A,{className:"w-4 h-4"}),"Archive"]})]})})]},s.id))})]})})]}),f.length>0&&!N&&e.jsx("div",{className:"hidden sm:block",children:e.jsx("div",{className:"bg-white border border-gray-200 rounded-2xl p-4",children:e.jsxs("div",{className:"flex flex-wrap items-center gap-x-5 gap-y-2",children:[e.jsx("span",{className:"text-xs font-semibold text-gray-500",children:"Party steps:"}),q.map((s,r)=>e.jsxs("div",{className:"flex items-center gap-1.5",children:[e.jsx("span",{className:"w-5 h-5 rounded-full bg-gray-100 text-gray-500 flex items-center justify-center text-[10px] font-bold",children:r+1}),e.jsx("span",{className:"text-xs text-gray-500",children:s})]},s))]})})})]})}export{xe as default};
