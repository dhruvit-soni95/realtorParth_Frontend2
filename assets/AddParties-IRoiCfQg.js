import{r as x,j as e,z as l}from"./utilities-CctrEpBK.js";import{b as Y}from"./react-LWYCItZ7.js";import{f as W}from"./index-C2Q5DQVp.js";import{T as H}from"./trash-2-rL8MhJA3.js";import{P as K}from"./plus-IkxV875u.js";import"./supabase-DWWbfOGS.js";const Q=["Upload Docs","Fintrac","Politically Exposed","CRG","Documents"];function se(){const E=Y(),m=JSON.parse(localStorage.getItem("transactionUser")||"{}"),[i,p]=x.useState([{name:"",email:"",phone:"",role:"Buyer"}]),D=["Buyer","Seller","Agent","Lawyer"],[F,g]=x.useState(!1),[d,h]=x.useState({to:[],subject:"",message:""}),[f,S]=x.useState(""),[R,C]=x.useState(!1),[w,v]=x.useState([]);x.useEffect(()=>{const r=localStorage.getItem("currentTransactionId");if(!r||!(m!=null&&m.id))return;(async()=>{try{const s=new AbortController,t=setTimeout(()=>s.abort(),1e4),a=await fetch(`https://realtorparth.ca/api/transactions/parties/${r}/${m.id}`,{signal:s.signal});clearTimeout(t);let o;try{o=await a.json()}catch{throw new Error("Invalid server response")}if(!a.ok)throw new Error((o==null?void 0:o.message)||`Error ${a.status}`);o.success&&o.parties.length>0&&p(o.parties.map(c=>({_id:c._id,name:c.name,email:c.email,phone:c.phone||"",role:c.role,licenseImage:c.licenseImage,passportImage:c.passportImage})))}catch(s){console.error("Fetch Parties Error:",s),s.name==="AbortError"?l.error("Request timed out"):s.name==="TypeError"?l.error("Server Down or Network error"):l.error(s.message||"Failed to load parties")}})()},[]);const $=r=>{const n=Array.from(r.target.files||[]);v(s=>[...s,...n])},M=r=>{v(n=>n.filter((s,t)=>t!==r))},b=(r,n,s)=>{const t=[...i];t[r][n]=s,p(t)},B=()=>{if(i.length>=4){l.error("Maximum 4 parties allowed");return}p([...i,{name:"",email:"",phone:"",role:"Buyer"}])},L=async r=>{const n=i[r];try{if(n._id){const t=await fetch(`https://realtorparth.ca/api/transactions/parties/${n._id}/${m.id}`,{method:"DELETE"});let a;try{a=await t.json()}catch{throw new Error("Invalid server response")}if(!t.ok||!a.success)throw new Error((a==null?void 0:a.message)||"Failed to delete party")}const s=i.filter((t,a)=>a!==r);p(s),l.success("Party removed")}catch(s){console.error("Delete Party Error:",s),s.name==="TypeError"?l.error("Server Down or Network error"):l.error(s.message||"Failed to delete")}},O=async()=>{if(i.some(n=>!n.name||!n.email)){l.error("Please fill required fields.");return}const r=localStorage.getItem("currentTransactionId");if(!r||!(m!=null&&m.id)){l.error("Transaction not found");return}try{const n=new AbortController,s=setTimeout(()=>n.abort(),1e4),t=await fetch("https://realtorparth.ca/api/transactions/parties/save",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({transactionId:r,userId:m.id,parties:i.map(o=>({_id:o._id,name:o.name,email:o.email,phone:o.phone,role:o.role}))}),signal:n.signal});clearTimeout(s);let a;try{a=await t.json()}catch{throw new Error("Invalid server response")}if(!t.ok)throw new Error((a==null?void 0:a.message)||`Error ${t.status}`);if(!a.success)throw new Error(a.message||"Failed to save parties");l.success("Parties saved successfully ✅"),setTimeout(()=>{window.location.reload()},800)}catch(n){console.error("Save Parties Error:",n),n.name==="AbortError"?l.error("Request timed out"):n.name==="TypeError"?l.error("Server Down or Network error"):l.error(n.message||"Server error")}},[q,U]=x.useState({}),G=async r=>{try{const[n,s,t,a]=await Promise.all([fetch(`https://realtorparth.ca/api/fintracpdf/fintrac/user/${r._id}`),fetch(`https://realtorparth.ca/api/fintracpeppdf/pep/user/${r._id}`),fetch(`https://realtorparth.ca/api/crgpdf/crg/user/${r._id}`),fetch(`https://realtorparth.ca/api/statuspdf/document-status/pdf/${r._id}`)]),[o,c,N,y]=await Promise.all([n.json(),s.json(),t.json(),a.json()]);let k=0;if(y!=null&&y.data){const u=y.data,A=[u.EBRAA,u.EBRATDA,u.RPC,u.EBRADA],z=[u.SCSAAFA,u.IDMMGOL,u.ESRAA],T=A.filter(Boolean).length/A.length,_=z.filter(Boolean).length/z.length;(T>0||_>0)&&(k=Math.max(T,_))}const j=[!!(r.licenseImage||r.passportImage),!!(o!=null&&o.data),!!(c!=null&&c.data),!!(N!=null&&N.data),k===1],I=j.filter(Boolean).length;return{completed:I,total:j.length,percent:Math.round(I/j.length*100),steps:j}}catch(n){return console.error("Step check error:",n),{completed:0,total:5,percent:0,steps:[]}}};x.useEffect(()=>{i.length&&i.forEach(r=>{r._id&&G(r).then(n=>{U(s=>({...s,[r._id]:n}))})})},[i]);const J=async()=>{if(d.to.length===0){l.error("Please select at least one recipient");return}try{const r=new FormData;r.append("subject",d.subject),r.append("message",d.message),r.append("transactionId",localStorage.getItem("currentTransactionId")||""),d.to.forEach(t=>{r.append("to",t)}),w.forEach(t=>{r.append("attachments",t)});const s=await(await fetch("https://realtorparth.ca/api/transactions/parties/send-email",{method:"POST",body:r})).json();if(!s.success)throw new Error(s.message);l.success("Email sent successfully ✉️"),g(!1),h({to:[],subject:"",message:""}),v([])}catch(r){l.error(r.message||"Failed to send email")}},P=i.filter(r=>f?r.email.toLowerCase().includes(f.toLowerCase())||r.name.toLowerCase().includes(f.toLowerCase()):!0);return e.jsxs("div",{className:"space-y-6 lg:space-y-8",children:[e.jsxs("div",{className:"flex flex-col xl:flex-row xl:items-center xl:justify-between gap-5",children:[e.jsxs("div",{className:"min-w-0",children:[e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-gray-800",children:"Add Parties"}),e.jsx("p",{className:"text-sm sm:text-base text-gray-500 mt-1",children:"You can add up to 4 parties to this transaction."})]}),e.jsxs("button",{onClick:()=>g(!0),className:`\r
          w-full sm:w-auto\r
          flex items-center justify-center gap-2\r
          bg-bronze\r
          text-white\r
          px-6 sm:px-8\r
          py-3.5\r
          rounded-2xl\r
          font-semibold\r
          hover:bg-bronze-dark\r
          transition-all\r
          shadow-sm\r
        `,children:[e.jsx(W,{className:"w-5 h-5"}),"Send Email"]})]}),e.jsx("div",{className:"space-y-6",children:i.map((r,n)=>{const s=q[r._id]||{completed:0,total:6,percent:0,steps:[]};return e.jsxs("div",{className:`\r
              bg-white\r
              border border-gray-200\r
              rounded-3xl\r
              shadow-sm\r
              overflow-hidden\r
            `,children:[e.jsxs("div",{className:`\r
                px-5 sm:px-7\r
                py-5\r
                border-b border-gray-100\r
                flex flex-col lg:flex-row\r
                lg:items-center\r
                justify-between\r
                gap-4\r
              `,children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:`\r
                    w-12 h-12\r
                    rounded-2xl\r
                    bg-bronze/10\r
                    flex items-center justify-center\r
                    text-bronze\r
                    font-bold\r
                  `,children:n+1}),e.jsxs("div",{children:[e.jsxs("h3",{className:"text-lg font-semibold text-gray-800",children:["Party ",n+1]}),e.jsx("p",{className:"text-sm text-gray-500",children:"Buyer/Seller information"})]})]}),e.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[r._id&&e.jsx("button",{onClick:()=>E(`/admin/transactions/partypdfdata/${r._id}`),className:`\r
                      px-4 py-2.5\r
                      rounded-xl\r
                      border border-gray-200\r
                      text-sm font-medium\r
                      hover:bg-gray-50\r
                      transition-all\r
                    `,children:"See Docs"}),i.length>1&&e.jsx("button",{onClick:()=>L(n),className:`\r
                      w-11 h-11\r
                      rounded-xl\r
                      bg-red-50\r
                      hover:bg-red-100\r
                      text-red-500\r
                      flex items-center justify-center\r
                      transition-all\r
                    `,children:e.jsx(H,{className:"w-5 h-5"})})]})]}),e.jsxs("div",{className:"p-5 sm:p-7",children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-5",children:[e.jsxs("div",{children:[e.jsx("label",{className:"text-sm font-medium text-gray-600",children:"Full Name *"}),e.jsx("input",{type:"text",value:r.name,onChange:t=>b(n,"name",t.target.value),className:`\r
                      w-full\r
                      mt-2\r
                      border border-gray-200\r
                      rounded-2xl\r
                      px-4 py-3\r
                      focus:outline-none\r
                      focus:ring-2\r
                      focus:ring-bronze/30\r
                    `})]}),e.jsxs("div",{children:[e.jsx("label",{className:"text-sm font-medium text-gray-600",children:"Email *"}),e.jsx("input",{type:"email",value:r.email,onChange:t=>b(n,"email",t.target.value),className:`\r
                      w-full\r
                      mt-2\r
                      border border-gray-200\r
                      rounded-2xl\r
                      px-4 py-3\r
                      focus:outline-none\r
                      focus:ring-2\r
                      focus:ring-bronze/30\r
                    `})]}),e.jsxs("div",{children:[e.jsx("label",{className:"text-sm font-medium text-gray-600",children:"Phone"}),e.jsx("input",{type:"text",value:r.phone,onChange:t=>b(n,"phone",t.target.value),className:`\r
                      w-full\r
                      mt-2\r
                      border border-gray-200\r
                      rounded-2xl\r
                      px-4 py-3\r
                      focus:outline-none\r
                      focus:ring-2\r
                      focus:ring-bronze/30\r
                    `})]}),e.jsxs("div",{children:[e.jsx("label",{className:"text-sm font-medium text-gray-600",children:"Role"}),e.jsx("select",{value:r.role,onChange:t=>b(n,"role",t.target.value),className:`\r
                      w-full\r
                      mt-2\r
                      border border-gray-200\r
                      rounded-2xl\r
                      px-4 py-3\r
                      focus:outline-none\r
                      focus:ring-2\r
                      focus:ring-bronze/30\r
                    `,children:D.map(t=>e.jsx("option",{children:t},t))})]})]}),(r.licenseImage||r.passportImage)&&e.jsxs("div",{className:"mt-8",children:[e.jsx("div",{className:"flex items-center justify-between mb-4",children:e.jsx("p",{className:"text-sm font-semibold text-gray-700",children:"Uploaded Documents"})}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[r.licenseImage&&e.jsxs("div",{className:"bg-gray-50 rounded-2xl p-3 border border-gray-100",children:[e.jsx("p",{className:"text-xs font-medium text-gray-500 mb-2",children:"Driving License"}),e.jsx("img",{src:r.licenseImage,className:`\r
                            w-full\r
                            h-40 sm:h-48\r
                            object-cover\r
                            rounded-xl\r
                            border\r
                          `})]}),r.passportImage&&e.jsxs("div",{className:"bg-gray-50 rounded-2xl p-3 border border-gray-100",children:[e.jsx("p",{className:"text-xs font-medium text-gray-500 mb-2",children:"Passport"}),e.jsx("img",{src:r.passportImage,className:`\r
                            w-full\r
                            h-40 sm:h-48\r
                            object-cover\r
                            rounded-xl\r
                            border\r
                          `})]})]})]}),e.jsxs("div",{className:`\r
                  mt-8\r
                  border border-gray-200\r
                  rounded-3xl\r
                  p-5 sm:p-7\r
                  bg-gray-50/50\r
                `,children:[e.jsxs("div",{className:"flex items-center justify-between gap-4 mb-5",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-base font-semibold text-gray-800",children:"Completion Progress"}),e.jsxs("p",{className:"text-sm text-gray-500 mt-1",children:[s.completed," of"," ",s.total," steps completed"]})]}),e.jsxs("div",{className:"text-xl font-bold text-bronze",children:[s.percent,"%"]})]}),e.jsxs("div",{className:"relative",children:[e.jsx("div",{className:"w-full bg-gray-200 rounded-full h-3"}),e.jsx("div",{className:`\r
                      absolute top-0 left-0\r
                      bg-gradient-to-r\r
                      from-bronze\r
                      to-yellow-500\r
                      h-3\r
                      rounded-full\r
                      transition-all duration-500\r
                    `,style:{width:`${s.percent}%`}})]}),e.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mt-8",children:Q.map((t,a)=>{const o=s.steps[a],c=!o&&a===s.completed;return e.jsxs("div",{className:"flex flex-col items-center text-center",children:[e.jsx("div",{className:`
                              w-10 h-10
                              rounded-full
                              flex items-center justify-center
                              text-sm font-bold
                              transition-all
                              ${o?"bg-green-500 text-white":c?"bg-yellow-400 text-white animate-pulse":"bg-white border border-gray-300 text-gray-400"}
                            `,children:o?"✓":a+1}),e.jsx("span",{className:`
                              mt-3
                              text-xs font-medium
                              leading-relaxed
                              ${o?"text-green-600":c?"text-yellow-600":"text-gray-400"}
                            `,children:t})]},a)})})]})]})]},n)})}),i.length<4&&e.jsxs("button",{onClick:B,className:`\r
          flex items-center gap-3\r
          px-5 py-4\r
          rounded-2xl\r
          border border-dashed border-bronze\r
          text-bronze\r
          hover:bg-bronze/5\r
          transition-all\r
          font-semibold\r
          w-full sm:w-auto\r
        `,children:[e.jsx(K,{className:"w-5 h-5"}),"Add Party"]}),e.jsxs("div",{className:`\r
        pt-6\r
        border-t border-gray-200\r
        flex flex-col-reverse sm:flex-row\r
        justify-end\r
        gap-3\r
      `,children:[e.jsx("button",{onClick:()=>E("/admin/transactions/create"),className:`\r
          w-full sm:w-auto\r
          px-6 py-3\r
          border border-gray-200\r
          rounded-2xl\r
          text-gray-600\r
          font-medium\r
          hover:bg-gray-50\r
          transition-all\r
        `,children:"Back"}),e.jsx("button",{onClick:O,className:`\r
          w-full sm:w-auto\r
          px-6 py-3\r
          bg-bronze\r
          text-white\r
          rounded-2xl\r
          font-semibold\r
          hover:opacity-90\r
          transition-all\r
          shadow-sm\r
        `,children:"Add Parties & Send E-Mail"})]}),F&&e.jsx("div",{className:`\r
          fixed inset-0\r
          z-50\r
          bg-black/50\r
          backdrop-blur-sm\r
          p-4\r
          overflow-y-auto\r
        `,children:e.jsx("div",{className:`\r
            min-h-full\r
            flex items-center justify-center\r
          `,children:e.jsxs("div",{className:`\r
              bg-white\r
              w-full\r
              max-w-3xl\r
              rounded-3xl\r
              shadow-2xl\r
              overflow-hidden\r
            `,children:[e.jsxs("div",{className:`\r
                px-6 sm:px-8\r
                py-5\r
                border-b border-gray-100\r
                flex items-center justify-between\r
              `,children:[e.jsxs("div",{children:[e.jsx("h2",{className:"text-xl font-bold text-gray-800",children:"New Message"}),e.jsx("p",{className:"text-sm text-gray-500 mt-1",children:"Send email to selected parties"})]}),e.jsx("button",{onClick:()=>g(!1),className:`\r
                  w-10 h-10\r
                  rounded-xl\r
                  hover:bg-gray-100\r
                  flex items-center justify-center\r
                  transition-all\r
                `,children:"✕"})]}),e.jsxs("div",{className:"p-6 sm:p-8 space-y-5",children:[e.jsxs("div",{className:"relative",children:[e.jsx("label",{className:"text-sm font-medium text-gray-600 mb-2 block",children:"To"}),e.jsxs("div",{className:`\r
                    border border-gray-200\r
                    rounded-2xl\r
                    p-3\r
                    flex flex-wrap gap-2\r
                    min-h-[56px]\r
                  `,children:[d.to.map((r,n)=>e.jsxs("div",{className:`\r
                          bg-bronze/10\r
                          text-bronze\r
                          px-3 py-1.5\r
                          rounded-xl\r
                          text-sm\r
                          flex items-center gap-2\r
                        `,children:[r,e.jsx("button",{onClick:()=>h(s=>({...s,to:s.to.filter(t=>t!==r)})),children:"✕"})]},n)),e.jsx("input",{type:"text",value:f,onChange:r=>S(r.target.value),onFocus:()=>C(!0),onBlur:()=>setTimeout(()=>C(!1),150),placeholder:"Select recipients...",className:`\r
                      flex-1\r
                      min-w-[180px]\r
                      outline-none\r
                      text-sm\r
                      py-1\r
                    `})]}),R&&e.jsxs("div",{className:`\r
                      absolute z-50\r
                      w-full\r
                      mt-2\r
                      bg-white\r
                      border border-gray-200\r
                      rounded-2xl\r
                      shadow-xl\r
                      max-h-60\r
                      overflow-y-auto\r
                    `,children:[P.length===0&&e.jsx("div",{className:"px-4 py-3 text-sm text-gray-400",children:"No results found"}),P.filter(r=>!d.to.includes(r.email)).map((r,n)=>e.jsxs("div",{onClick:()=>{h(s=>({...s,to:[...s.to,r.email]})),S("")},className:`\r
                            px-4 py-3\r
                            hover:bg-gray-50\r
                            cursor-pointer\r
                            flex items-center justify-between\r
                            gap-3\r
                          `,children:[e.jsxs("div",{className:"min-w-0",children:[e.jsx("p",{className:"text-sm font-medium text-gray-700 truncate",children:r.name}),e.jsx("p",{className:"text-xs text-gray-400 truncate",children:r.email})]}),e.jsx("span",{className:"text-xs text-gray-400 whitespace-nowrap",children:r.role})]},n))]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"text-sm font-medium text-gray-600 mb-2 block",children:"Subject"}),e.jsx("input",{type:"text",placeholder:"Enter subject...",value:d.subject,onChange:r=>h({...d,subject:r.target.value}),className:`\r
                    w-full\r
                    border border-gray-200\r
                    rounded-2xl\r
                    px-4 py-3\r
                    focus:outline-none\r
                    focus:ring-2\r
                    focus:ring-bronze/30\r
                  `})]}),e.jsxs("div",{children:[e.jsx("label",{className:"text-sm font-medium text-gray-600 mb-2 block",children:"Message"}),e.jsx("textarea",{placeholder:"Write your message...",value:d.message,onChange:r=>h({...d,message:r.target.value}),rows:7,className:`\r
                    w-full\r
                    border border-gray-200\r
                    rounded-2xl\r
                    px-4 py-3\r
                    resize-none\r
                    focus:outline-none\r
                    focus:ring-2\r
                    focus:ring-bronze/30\r
                  `})]}),e.jsxs("div",{children:[e.jsx("label",{className:"text-sm font-medium text-gray-600 mb-3 block",children:"Attachments"}),e.jsxs("label",{className:`\r
                    inline-flex items-center gap-2\r
                    px-4 py-3\r
                    border border-gray-200\r
                    rounded-2xl\r
                    cursor-pointer\r
                    hover:bg-gray-50\r
                    text-sm font-medium\r
                    transition-all\r
                  `,children:["📎 Add Files",e.jsx("input",{type:"file",multiple:!0,onChange:$,className:"hidden"})]}),w.length>0&&e.jsx("div",{className:"mt-4 space-y-3",children:w.map((r,n)=>e.jsxs("div",{className:`\r
                            flex items-center justify-between\r
                            gap-3\r
                            bg-gray-50\r
                            border border-gray-100\r
                            px-4 py-3\r
                            rounded-2xl\r
                          `,children:[e.jsx("span",{className:"truncate text-sm text-gray-700",children:r.name}),e.jsx("button",{onClick:()=>M(n),className:"text-red-500 hover:text-red-700",children:"✕"})]},n))})]})]}),e.jsxs("div",{className:`\r
                px-6 sm:px-8\r
                py-5\r
                border-t border-gray-100\r
                flex flex-col-reverse sm:flex-row\r
                justify-end\r
                gap-3\r
              `,children:[e.jsx("button",{onClick:()=>g(!1),className:`\r
                  w-full sm:w-auto\r
                  px-5 py-3\r
                  border border-gray-200\r
                  rounded-2xl\r
                  font-medium\r
                  hover:bg-gray-50\r
                `,children:"Cancel"}),e.jsx("button",{onClick:J,className:`\r
                  w-full sm:w-auto\r
                  bg-bronze\r
                  text-white\r
                  px-7 py-3\r
                  rounded-2xl\r
                  font-semibold\r
                  hover:bg-bronze-dark\r
                  transition-all\r
                `,children:"Send Email"})]})]})})})]})}export{se as default};
