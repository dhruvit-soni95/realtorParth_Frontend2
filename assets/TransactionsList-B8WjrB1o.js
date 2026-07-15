import{r as g,z as a,j as e}from"./utilities-CctrEpBK.js";import{b as y}from"./react-LWYCItZ7.js";import{P as u}from"./plus-DbZyHpl1.js";import"./index-DJgW8yHV.js";import"./supabase-DWWbfOGS.js";function v(){const l=y(),[c,m]=g.useState([]),n=JSON.parse(localStorage.getItem("transactionUser")||"{}");g.useEffect(()=>{if(!(n!=null&&n.id)){a.error("User not found. Please login again.");return}(async()=>{try{const t=new AbortController,d=setTimeout(()=>t.abort(),1e4),o=await fetch(`https://realtorparth.ca/api/transactions/list/${n.id}`,{signal:t.signal});clearTimeout(d);let s;try{s=await o.json()}catch{throw new Error("Invalid server response")}if(!o.ok)throw new Error((s==null?void 0:s.message)||`Error ${o.status}`);if(!s.success)throw new Error("Failed to fetch transactions");const x=s.transactions.map(i=>({id:i._id,name:i.name,property:i.propertyAddress,status:i.status,createdAt:new Date(i.createdAt).toISOString().split("T")[0]}));m(x)}catch(t){console.error(t),t.name==="AbortError"?a.error("Request timed out"):t.name==="TypeError"?a.error("Network error"):a.error(t.message||"Failed to load transactions")}})()},[]);const p=r=>{localStorage.setItem("currentTransactionId",r),l("/admin/transactions/create")},h=async r=>{if(!(n!=null&&n.id)){a.error("User not found. Please login again.");return}try{const t=new AbortController,d=setTimeout(()=>t.abort(),1e4),o=await fetch(`https://realtorparth.ca/api/transactions/archive/${r}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({userId:n.id}),signal:t.signal});clearTimeout(d);let s;try{s=await o.json()}catch{throw new Error("Invalid server response")}if(!o.ok)throw new Error((s==null?void 0:s.message)||`Error ${o.status}`);if(!s.success)throw new Error(s.message||"Failed to archive");m(x=>x.filter(i=>i.id!==r)),a.success("Transaction archived ✅")}catch(t){console.error(t),t.name==="AbortError"?a.error("Request timed out"):t.name==="TypeError"?a.error("Network error"):a.error(t.message||"Server error")}};return e.jsxs("div",{className:"space-y-6 lg:space-y-8",children:[e.jsxs("div",{className:"flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4",children:[e.jsxs("div",{className:"min-w-0",children:[e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-gray-800",children:"Transactions"}),e.jsx("p",{className:"text-sm sm:text-base text-gray-500 mt-1",children:"Manage real estate transactions."})]}),e.jsxs("div",{className:"flex flex-col sm:flex-row gap-3 w-full lg:w-auto",children:[e.jsx("button",{onClick:()=>l("/admin/transactions/archived"),className:`\r
            w-full sm:w-auto\r
            px-4 py-3\r
            border border-gray-200\r
            rounded-xl\r
            text-sm font-medium\r
            bg-white\r
            hover:bg-gray-50\r
            transition-all\r
            whitespace-nowrap\r
          `,children:"View Archived"}),e.jsxs("button",{onClick:()=>{localStorage.removeItem("currentTransactionId"),l("/admin/transactions/create")},className:`\r
            w-full sm:w-auto\r
            flex items-center justify-center gap-2\r
            bg-bronze\r
            text-white\r
            px-5 py-3\r
            rounded-xl\r
            font-semibold\r
            hover:opacity-90\r
            transition-all\r
            shadow-sm\r
            whitespace-nowrap\r
          `,children:[e.jsx(u,{className:"w-4 h-4"}),"Create Transaction"]})]})]}),e.jsxs("div",{className:`\r
        bg-white\r
        border border-gray-200\r
        rounded-3xl\r
        shadow-sm\r
        overflow-hidden\r
      `,children:[e.jsx("div",{className:"block lg:hidden",children:c.length===0?e.jsx("div",{className:"px-6 py-16 text-center",children:e.jsxs("div",{className:"flex flex-col items-center gap-3",children:[e.jsx("p",{className:"text-lg font-semibold text-gray-700",children:"No transactions yet"}),e.jsx("p",{className:"text-sm text-gray-400 max-w-sm",children:"Create your first transaction to get started."}),e.jsx("button",{onClick:()=>{localStorage.removeItem("currentTransactionId"),l("/admin/transactions/create")},className:`\r
                  mt-3\r
                  bg-bronze\r
                  text-white\r
                  px-5 py-3\r
                  rounded-xl\r
                  font-medium\r
                  hover:opacity-90\r
                `,children:"Create Transaction"})]})}):e.jsx("div",{className:"divide-y divide-gray-100",children:c.map(r=>e.jsxs("div",{className:"p-5 space-y-4",children:[e.jsxs("div",{className:"flex items-start justify-between gap-3",children:[e.jsxs("div",{className:"min-w-0",children:[e.jsx("h3",{className:"font-semibold text-gray-800 truncate",children:r.name}),e.jsx("p",{className:"text-sm text-gray-500 mt-1 break-words",children:r.property})]}),e.jsx("span",{className:`
                      px-3 py-1
                      text-xs font-semibold
                      rounded-full
                      whitespace-nowrap
                      ${r.status==="Completed"?"bg-green-100 text-green-700":"bg-yellow-100 text-yellow-700"}
                    `,children:r.status})]}),e.jsxs("div",{className:"text-sm text-gray-500",children:["Created: ",r.createdAt]}),e.jsxs("div",{className:"flex gap-3",children:[e.jsx("button",{onClick:()=>p(r.id),className:`\r
                      flex-1\r
                      px-4 py-3\r
                      border border-gray-200\r
                      rounded-xl\r
                      text-sm font-medium\r
                      hover:bg-gray-50\r
                      transition-all\r
                    `,children:"Open"}),e.jsx("button",{onClick:()=>h(r.id),className:`\r
                      flex-1\r
                      px-4 py-3\r
                      bg-red-500\r
                      text-white\r
                      rounded-xl\r
                      text-sm font-medium\r
                      hover:bg-red-600\r
                      transition-all\r
                    `,children:"Archive"})]})]},r.id))})}),e.jsx("div",{className:"hidden lg:block overflow-x-auto",children:e.jsxs("table",{className:"w-full min-w-[900px]",children:[e.jsx("thead",{className:"bg-gray-50 border-b border-gray-100",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-6 py-5 text-left text-xs font-bold uppercase tracking-wider text-gray-500",children:"Transaction"}),e.jsx("th",{className:"px-6 py-5 text-left text-xs font-bold uppercase tracking-wider text-gray-500",children:"Property"}),e.jsx("th",{className:"px-6 py-5 text-left text-xs font-bold uppercase tracking-wider text-gray-500",children:"Status"}),e.jsx("th",{className:"px-6 py-5 text-left text-xs font-bold uppercase tracking-wider text-gray-500",children:"Created"}),e.jsx("th",{className:"px-6 py-5 text-left text-xs font-bold uppercase tracking-wider text-gray-500",children:"Actions"})]})}),e.jsx("tbody",{className:"divide-y divide-gray-100",children:c.length===0?e.jsx("tr",{children:e.jsx("td",{colSpan:5,className:"py-20 text-center",children:e.jsxs("div",{className:"flex flex-col items-center gap-3",children:[e.jsx("p",{className:"text-xl font-semibold text-gray-700",children:"No transactions yet"}),e.jsx("p",{className:"text-sm text-gray-400",children:"Create your first transaction to get started."}),e.jsx("button",{onClick:()=>{localStorage.removeItem("currentTransactionId"),l("/admin/transactions/create")},className:`\r
                        mt-3\r
                        bg-bronze\r
                        text-white\r
                        px-5 py-3\r
                        rounded-xl\r
                        hover:opacity-90\r
                      `,children:"Create Transaction"})]})})}):c.map(r=>e.jsxs("tr",{className:"hover:bg-gray-50/60 transition-colors",children:[e.jsx("td",{className:"px-6 py-5",children:e.jsx("div",{className:"font-semibold text-gray-800",children:r.name})}),e.jsx("td",{className:"px-6 py-5",children:e.jsx("div",{className:"text-gray-600 max-w-[320px] break-words",children:r.property})}),e.jsx("td",{className:"px-6 py-5",children:e.jsx("span",{className:`
                        inline-flex
                        px-3 py-1.5
                        text-xs font-semibold
                        rounded-full
                        ${r.status==="Completed"?"bg-green-100 text-green-700":"bg-yellow-100 text-yellow-700"}
                      `,children:r.status})}),e.jsx("td",{className:"px-6 py-5 text-gray-500 whitespace-nowrap",children:r.createdAt}),e.jsx("td",{className:"px-6 py-5",children:e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("button",{onClick:()=>p(r.id),className:`\r
                          px-4 py-2.5\r
                          border border-gray-200\r
                          rounded-xl\r
                          text-sm font-medium\r
                          hover:bg-gray-50\r
                          transition-all\r
                        `,children:"Open"}),e.jsx("button",{onClick:()=>h(r.id),className:`\r
                          px-4 py-2.5\r
                          bg-red-500\r
                          text-white\r
                          rounded-xl\r
                          text-sm font-medium\r
                          hover:bg-red-600\r
                          transition-all\r
                        `,children:"Archive"})]})})]},r.id))})]})})]})]})}export{v as default};
