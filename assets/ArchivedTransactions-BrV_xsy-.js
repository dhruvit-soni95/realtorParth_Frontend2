import{r as h,z as a,j as e}from"./utilities-CctrEpBK.js";import{b as g}from"./react-LWYCItZ7.js";function w(){const p=g(),[l,x]=h.useState([]),n=JSON.parse(localStorage.getItem("transactionUser")||"{}");h.useEffect(()=>{if(!(n!=null&&n.id)){a.error("User not found. Please login again.");return}(async()=>{try{const t=new AbortController,c=setTimeout(()=>t.abort(),1e4),o=await fetch(`https://realtorparth.ca/api/transactions/archived/${n.id}`,{signal:t.signal});clearTimeout(c);let s;try{s=await o.json()}catch{throw new Error("Invalid server response")}if(!o.ok)throw new Error((s==null?void 0:s.message)||`Error ${o.status}`);if(!s.success)throw new Error("Failed to fetch archived transactions");const d=s.transactions.map(i=>({id:i._id,name:i.name,property:i.propertyAddress,status:i.status,createdAt:new Date(i.createdAt).toISOString().split("T")[0]}));x(d)}catch(t){console.error(t),t.name==="AbortError"?a.error("Request timed out"):t.name==="TypeError"?a.error("Server Down or Network error"):a.error(t.message||"Failed to load data")}})()},[]);const m=async r=>{if(!(n!=null&&n.id)){a.error("User not found. Please login again.");return}try{const t=new AbortController,c=setTimeout(()=>t.abort(),1e4),o=await fetch(`https://realtorparth.ca/api/transactions/restore/${r}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({userId:n.id}),signal:t.signal});clearTimeout(c);let s;try{s=await o.json()}catch{throw new Error("Invalid server response")}if(!o.ok)throw new Error((s==null?void 0:s.message)||`Error ${o.status}`);if(!s.success)throw new Error(s.message||"Failed to restore");x(d=>d.filter(i=>i.id!==r)),a.success("Transaction restored ✅")}catch(t){console.error(t),t.name==="AbortError"?a.error("Request timed out"):t.name==="TypeError"?a.error("Server Down or Network error"):a.error(t.message||"Server error")}};return e.jsxs("div",{className:"space-y-6 lg:space-y-8",children:[e.jsxs("div",{className:"flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4",children:[e.jsxs("div",{className:"min-w-0",children:[e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-gray-800",children:"Archived Transactions"}),e.jsx("p",{className:"text-sm sm:text-base text-gray-500 mt-1",children:"Previously archived real estate transactions."})]}),e.jsx("div",{className:"flex flex-col sm:flex-row gap-3 w-full lg:w-auto",children:e.jsx("button",{onClick:()=>p("/admin/transactions"),className:`\r
                        w-full sm:w-auto\r
                        px-5 py-3\r
                        bg-bronze\r
                        text-white\r
                        rounded-xl\r
                        text-sm font-semibold\r
                        hover:opacity-90\r
                        transition-all\r
                        shadow-sm\r
                        whitespace-nowrap\r
                    `,children:"← Back to Transactions"})})]}),e.jsxs("div",{className:`\r
                bg-white\r
                border border-gray-200\r
                rounded-3xl\r
                shadow-sm\r
                overflow-hidden\r
            `,children:[e.jsx("div",{className:"block lg:hidden",children:l.length===0?e.jsx("div",{className:"px-6 py-16 text-center",children:e.jsxs("div",{className:"flex flex-col items-center gap-3",children:[e.jsx("p",{className:"text-lg font-semibold text-gray-700",children:"No archived transactions"}),e.jsx("p",{className:"text-sm text-gray-400 max-w-sm",children:"Archived transactions will appear here."})]})}):e.jsx("div",{className:"divide-y divide-gray-100",children:l.map(r=>e.jsxs("div",{className:"p-5 space-y-4",children:[e.jsxs("div",{className:"flex items-start justify-between gap-3",children:[e.jsxs("div",{className:"min-w-0",children:[e.jsx("h3",{className:"font-semibold text-gray-800 truncate",children:r.name}),e.jsx("p",{className:"text-sm text-gray-500 mt-1 break-words",children:r.property})]}),e.jsx("span",{className:`\r
                                            px-3 py-1\r
                                            text-xs font-semibold\r
                                            rounded-full\r
                                            bg-gray-200\r
                                            text-gray-700\r
                                            whitespace-nowrap\r
                                        `,children:"Archived"})]}),e.jsxs("div",{className:"text-sm text-gray-500",children:["Created: ",r.createdAt]}),e.jsx("button",{onClick:()=>m(r.id),className:`\r
                                        w-full\r
                                        px-4 py-3\r
                                        bg-green-600\r
                                        text-white\r
                                        rounded-xl\r
                                        text-sm font-semibold\r
                                        hover:bg-green-700\r
                                        transition-all\r
                                    `,children:"Restore Transaction"})]},r.id))})}),e.jsx("div",{className:"hidden lg:block overflow-x-auto",children:e.jsxs("table",{className:"w-full min-w-[900px]",children:[e.jsx("thead",{className:"bg-gray-50 border-b border-gray-100",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-6 py-5 text-left text-xs font-bold uppercase tracking-wider text-gray-500",children:"Transaction"}),e.jsx("th",{className:"px-6 py-5 text-left text-xs font-bold uppercase tracking-wider text-gray-500",children:"Property"}),e.jsx("th",{className:"px-6 py-5 text-left text-xs font-bold uppercase tracking-wider text-gray-500",children:"Status"}),e.jsx("th",{className:"px-6 py-5 text-left text-xs font-bold uppercase tracking-wider text-gray-500",children:"Created"}),e.jsx("th",{className:"px-6 py-5 text-left text-xs font-bold uppercase tracking-wider text-gray-500",children:"Actions"})]})}),e.jsx("tbody",{className:"divide-y divide-gray-100",children:l.length===0?e.jsx("tr",{children:e.jsx("td",{colSpan:5,className:"py-20 text-center",children:e.jsxs("div",{className:"flex flex-col items-center gap-3",children:[e.jsx("p",{className:"text-xl font-semibold text-gray-700",children:"No archived transactions"}),e.jsx("p",{className:"text-sm text-gray-400",children:"Archived transactions will appear here."})]})})}):l.map(r=>e.jsxs("tr",{className:"hover:bg-gray-50/60 transition-colors",children:[e.jsx("td",{className:"px-6 py-5",children:e.jsx("div",{className:"font-semibold text-gray-800",children:r.name})}),e.jsx("td",{className:"px-6 py-5",children:e.jsx("div",{className:"text-gray-600 max-w-[320px] break-words",children:r.property})}),e.jsx("td",{className:"px-6 py-5",children:e.jsx("span",{className:`\r
                                                inline-flex\r
                                                px-3 py-1.5\r
                                                text-xs font-semibold\r
                                                rounded-full\r
                                                bg-gray-200\r
                                                text-gray-700\r
                                            `,children:"Archived"})}),e.jsx("td",{className:"px-6 py-5 text-gray-500 whitespace-nowrap",children:r.createdAt}),e.jsx("td",{className:"px-6 py-5",children:e.jsx("button",{onClick:()=>m(r.id),className:`\r
                                                px-5 py-2.5\r
                                                bg-green-600\r
                                                text-white\r
                                                rounded-xl\r
                                                text-sm font-semibold\r
                                                hover:bg-green-700\r
                                                transition-all\r
                                            `,children:"Restore"})})]},r.id))})]})})]})]})}export{w as default};
