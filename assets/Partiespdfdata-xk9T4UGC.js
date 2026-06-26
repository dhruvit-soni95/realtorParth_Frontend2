import{j as e,r as d}from"./utilities-CctrEpBK.js";import{a as T,b as M}from"./react-LWYCItZ7.js";import{F as z}from"./file-text-8Ak8nlF4.js";import"./index-DN8WULiC.js";import"./supabase-DWWbfOGS.js";function S({title:s,image:r,emptyText:p,onPreview:g}){return e.jsxs("div",{className:"bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-sm",children:[e.jsxs("div",{className:"px-5 py-4 border-b border-gray-100 flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"font-bold text-gray-800",children:s}),e.jsx("p",{className:"text-sm text-gray-500 mt-1",children:"Uploaded document preview"})]}),r&&e.jsx("span",{className:"bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full",children:"Uploaded"})]}),e.jsx("div",{className:"p-5",children:r?e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"w-full h-[320px] sm:h-[420px] rounded-2xl border border-gray-200 overflow-hidden bg-white cursor-pointer",onClick:()=>g(r),children:e.jsx("img",{src:r,alt:s,className:"w-full h-full object-cover"})}),e.jsx("button",{onClick:()=>g(r),className:"w-full bg-bronze hover:bg-bronze-dark text-white font-semibold py-3 rounded-2xl transition-all",children:"Open Full Image"})]}):e.jsxs("div",{className:"h-[320px] rounded-2xl border-2 border-dashed border-gray-200 flex flex-col items-center justify-center text-center px-6",children:[e.jsxs("p",{className:"text-lg font-semibold text-gray-500",children:["No ",s," Uploaded"]}),e.jsx("p",{className:"text-sm text-gray-400 mt-2",children:p})]})})]})}function O({image:s,onClose:r}){return s?e.jsxs("div",{className:"fixed inset-0 z-[1000] bg-black/90 flex items-center justify-center p-4",children:[e.jsx("button",{onClick:r,className:"absolute top-5 right-5 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white text-2xl flex items-center justify-center",children:"✕"}),e.jsx("img",{src:s,alt:"Preview",className:"max-w-full max-h-full object-contain rounded-2xl shadow-2xl bg-white"})]}):null}const G=[{name:"FINTRAC - Individual Identification Information Record Form",key:"fintrac"},{name:"FINTRAC - Politically Exposed Person Checklist Form",key:"pep"},{name:"Consumer Relationships Guide (Print Friendly)",key:"crg"}],L=[{name:"Exclusive Buyer Representation Agreement (Designated Agency)",key:"EBRADA"},{name:"Exclusive Buyer Representation Agreement Amendment",key:"EBRAA"},{name:"Exclusive Buyer Representation Agreement Termination (Designated Agency)",key:"EBRATDA"},{name:"Residential Purchase Contract",key:"RPC"}],U=[{name:"Seller Customer Status Acknowledgment and Fee Agreement",key:"SCSAAFA"},{name:"CREB® - Illegal Drug Manufacture_Marijuana Grow Operation Listing",key:"IDMMGOL"},{name:"Exclusive Seller Representation Agreement Amendment",key:"ESRAA"}],$=({status:s})=>{const r=s==="Filled";return e.jsxs("div",{className:`flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold border shadow-sm
      ${r?"bg-green-50 text-green-700 border-green-200":"bg-yellow-50 text-yellow-700 border-yellow-200"}`,children:[e.jsx("span",{className:`w-2 h-2 rounded-full ${r?"bg-green-500":"bg-yellow-500"}`}),s]})};function X(){const{id:s}=T(),r=M(),[p,g]=d.useState(G),[w,D]=d.useState(L),[N,C]=d.useState(U),[c,E]=d.useState(null),[P,h]=d.useState(null),[u,I]=d.useState({}),[B,v]=d.useState(!1);d.useEffect(()=>{if(!s)return;(async()=>{try{const[t,a,i]=await Promise.all([fetch(`https://realtorparth.ca/api/fintracpdf/fintrac/user/${s}`),fetch(`https://realtorparth.ca/api/fintracpeppdf/pep/user/${s}`),fetch(`https://realtorparth.ca/api/crgpdf/crg/user/${s}`)]),R=await(await fetch(`https://realtorparth.ca/api/fintracpdf/client/${s}`)).json();R.success&&E(R.data);const b=await t.json(),y=await a.json(),j=await i.json();g(m=>m.map(l=>l.key==="fintrac"?{...l,status:b!=null&&b.data?"Filled":"Not Filled"}:l.key==="pep"?{...l,status:y!=null&&y.data?"Filled":"Not Filled"}:l.key==="crg"?{...l,status:j!=null&&j.data?"Filled":"Not Filled"}:l));const o=await(await fetch(`https://realtorparth.ca/api/statuspdf/document-status/${s}`)).json();o!=null&&o.data&&(D(m=>m.map(l=>({...l,status:o.data[l.key]?"Filled":"Not Filled"}))),C(m=>m.map(l=>({...l,status:o.data[l.key]?"Filled":"Not Filled"}))));const x=await(await fetch(`https://realtorparth.ca/api/transactions/parties/party/${s}`)).json();x!=null&&x.party&&I({licenseImage:x.party.licenseImage,passportImage:x.party.passportImage})}catch(t){console.error(t)}})()},[s]);const k=async(n,t="party")=>{if(s)try{n.key==="fintrac"&&r(`/party/fintrac/${s}?mode=${t}`),n.key==="pep"&&r(`/party/politically-exposed/${s}?mode=${t}`),n.key==="crg"&&r(`/party/crg/${s}?mode=${t}`),n.key==="EBRADA"&&r(`/party/forms/EBRADA/${s}?mode=${t}`),n.key==="EBRAA"&&r(`/party/forms/EBRAA/${s}?mode=${t}`),n.key==="EBRATDA"&&r(`/party/forms/EBRATDA/${s}?mode=${t}`),n.key==="RPC"&&r(`/party/forms/RPC/${s}?mode=${t}`),n.key==="SCSAAFA"&&r(`/party/forms/SCSAAFA/${s}?mode=${t}`),n.key==="IDMMGOL"&&r(`/party/forms/IDMMGOL/${s}?mode=${t}`),n.key==="ESRAA"&&r(`/party/forms/ESRAA/${s}?mode=${t}`)}catch(a){console.error(a)}},A=async n=>{try{if(!s)return;let t="";switch(n.key){case"crg":t="/api/crgpdf/send-crg-for-signature";break;case"EBRAA":t="/api/ebraapdf/send-buyer-amendment-for-signature";break;case"EBRADA":t="/api/ebradapdf/send-buyer-representation-for-signature";break;case"EBRATDA":t="/api/ebratdapdf/send-buyer-termination-for-signature";break;case"RPC":t="/api/rpcpdf/send-rpc-for-signature";break;case"SCSAAFA":t="/api/scsaafapdf/send-scsaafa-for-signature";break;case"ESRAA":t="/api/esraapdf/send-esraa-for-signature";break;case"IDMMGOL":t="/api/idmmgolpdf/send-idmmgol-for-signature";break;default:alert("This document cannot be sent for signature.");return}const a=await fetch(`https://realtorparth.ca${t}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({partyId:s})}),i=await a.json();if(!a.ok)throw new Error(i.message||"Failed");alert(i.message||"Email sent successfully.")}catch(t){console.error(t),alert(t.message||"Something went wrong.")}},f=({title:n,data:t})=>e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between gap-3",children:[e.jsxs("div",{children:[e.jsx("h2",{className:"text-xl font-bold text-gray-800",children:n}),e.jsx("p",{className:"text-sm text-gray-500 mt-1",children:"Document status and actions"})]}),e.jsxs("div",{className:"bg-bronze/10 text-bronze px-4 py-2 rounded-xl text-sm font-semibold",children:[t.length," Documents"]})]}),e.jsx("div",{className:"lg:hidden space-y-4",children:t.map((a,i)=>e.jsxs("div",{className:`\r
                        bg-white\r
                        border border-gray-200\r
                        rounded-2xl\r
                        p-5\r
                        shadow-sm\r
                    `,children:[e.jsxs("div",{className:"flex items-start justify-between gap-3",children:[e.jsxs("div",{className:"min-w-0",children:[e.jsx("p",{className:"text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2",children:"Document Name"}),e.jsx("h3",{className:"font-semibold text-gray-800 leading-relaxed",children:a.name})]}),e.jsx("div",{className:"flex-shrink-0",children:e.jsx($,{status:a.status||"Not Filled"})})]}),e.jsxs("div",{className:"mt-5 grid grid-cols-2 gap-3",children:[e.jsx("button",{onClick:()=>k(a,"admin"),className:"bg-bronze hover:bg-bronze-dark text-white font-semibold px-4 py-3 rounded-xl transition-all",children:"Open"}),e.jsx("button",{disabled:a.status!=="Filled",onClick:()=>A(a),className:`px-5 py-2.5 rounded-xl text-white text-sm font-semibold
        ${a.status==="Filled"?"bg-blue-600 hover:bg-blue-700":"bg-gray-300 cursor-not-allowed"}`,children:"Send for Sign"})]})]},i))}),e.jsxs("div",{className:`\r
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
                `,children:[e.jsx("div",{className:"col-span-5 px-6 py-5",children:"Document Name"}),e.jsx("div",{className:"col-span-3 px-6 py-5 text-center",children:"Status"}),e.jsx("div",{className:"col-span-4 px-6 py-5 text-center",children:"Action"})]}),t.map((a,i)=>e.jsxs("div",{className:`\r
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
                            `,children:a.name})}),e.jsx("div",{className:`\r
                            col-span-3\r
                            px-6 py-5\r
                            flex items-center justify-center\r
                        `,children:e.jsx($,{status:a.status||"Not Filled"})}),e.jsx("div",{className:`\r
                            col-span-4\r
                            px-6 py-5\r
                            flex items-center justify-center\r
                        `,children:e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{onClick:()=>k(a,"admin"),className:"bg-bronze hover:bg-bronze-dark text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-all shadow-sm",children:"Open"}),e.jsx("button",{disabled:a.status!=="Filled",onClick:()=>A(a),className:`px-5 py-2.5 rounded-xl text-white text-sm font-semibold
        ${a.status==="Filled"?"bg-blue-600 hover:bg-blue-700":"bg-gray-300 cursor-not-allowed"}`,children:"Send for Sign"})]})})]},i))]})]}),F=u.licenseImage||u.passportImage;return e.jsxs("div",{className:"min-h-screen flex justify-center p-8 bg-white",children:[e.jsxs("div",{className:"w-full max-w-7xl mx-auto space-y-8 sm:space-y-10",children:[e.jsx("div",{className:`\r
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
                        `,children:e.jsx(z,{className:"w-7 h-7 text-bronze"})}),e.jsxs("div",{className:"min-w-0",children:[e.jsx("h1",{className:`\r
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
                        `,children:[e.jsx("p",{className:"text-xs text-gray-500 uppercase font-semibold tracking-wide",children:"General"}),e.jsx("p",{className:"text-lg font-bold text-gray-800 mt-1",children:p.length})]}),e.jsxs("div",{className:`\r
                            bg-blue-50\r
                            px-4 py-2.5\r
                            rounded-2xl\r
                        `,children:[e.jsx("p",{className:"text-xs text-blue-600 uppercase font-semibold tracking-wide",children:"Buying"}),e.jsx("p",{className:"text-lg font-bold text-blue-700 mt-1",children:w.length})]}),e.jsxs("div",{className:`\r
                            bg-green-50\r
                            px-4 py-2.5\r
                            rounded-2xl\r
                        `,children:[e.jsx("p",{className:"text-xs text-green-600 uppercase font-semibold tracking-wide",children:"Selling"}),e.jsx("p",{className:"text-lg font-bold text-green-700 mt-1",children:N.length})]})]})]}),e.jsx("div",{className:`\r
                    flex flex-col sm:flex-row\r
                    gap-3\r
                    w-full lg:w-auto\r
                `,children:e.jsx("button",{onClick:()=>v(!0),disabled:!F,className:`
                        w-full sm:w-auto
                        px-5 py-3.5
                        rounded-2xl
                        font-semibold
                        text-sm
                        transition-all
                        shadow-sm
                        whitespace-nowrap
                        ${F?"bg-[#1f3a56] hover:bg-[#162c44] text-white":"bg-gray-300 text-gray-500 cursor-not-allowed"}
                    `,children:"View Uploaded Docs"})})]})}),c&&e.jsxs("div",{className:"mt-6 bg-white border border-gray-200 rounded-3xl shadow-sm p-6",children:[e.jsx("h2",{className:"text-lg font-semibold text-gray-800 mb-5",children:"Client FINTRAC Declaration"}),e.jsxs("div",{className:"space-y-5",children:[e.jsxs("div",{className:"flex justify-between items-center border-b pb-3",children:[e.jsx("span",{className:"font-medium text-gray-700",children:"Politically Exposed Individual"}),e.jsx("span",{className:`font-semibold px-3 py-1 rounded-full text-sm
                        ${c.clientPoliticallyExposed==="yes"?"bg-red-100 text-red-700":"bg-green-100 text-green-700"}`,children:c.clientPoliticallyExposed||"-"})]}),e.jsxs("div",{className:"flex justify-between items-center border-b pb-3",children:[e.jsx("span",{className:"font-medium text-gray-700",children:"Family Member in Government / Politics"}),e.jsx("span",{className:`font-semibold px-3 py-1 rounded-full text-sm
                        ${c.clientFamilyGovernment==="yes"?"bg-red-100 text-red-700":"bg-green-100 text-green-700"}`,children:c.clientFamilyGovernment||"-"})]}),e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("span",{className:"font-medium text-gray-700",children:"Acting on Behalf of Third Party"}),e.jsx("span",{className:`font-semibold px-3 py-1 rounded-full text-sm
                        ${c.clientThirdParty==="yes"?"bg-red-100 text-red-700":"bg-green-100 text-green-700"}`,children:c.clientThirdParty||"-"})]})]})]}),e.jsxs("div",{className:"space-y-8",children:[e.jsx(f,{title:"PDF Templates",data:p}),e.jsx(f,{title:"Buying Documents",data:w}),e.jsx(f,{title:"Selling Documents",data:N})]})]}),B&&e.jsxs("div",{className:"fixed inset-0 z-[999] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6",children:[e.jsxs("div",{className:"relative w-full max-w-6xl max-h-[92vh] overflow-y-auto bg-white rounded-3xl shadow-2xl border border-gray-200",children:[e.jsxs("div",{className:"sticky top-0 bg-white border-b border-gray-100 px-5 sm:px-7 py-5 flex justify-between items-center",children:[e.jsxs("div",{children:[e.jsx("h2",{className:"text-2xl font-bold text-gray-800",children:"Uploaded Documents"}),e.jsx("p",{className:"text-sm text-gray-500 mt-1",children:"Preview uploaded identification documents."})]}),e.jsx("button",{onClick:()=>v(!1),className:"w-11 h-11 rounded-2xl bg-gray-100 hover:bg-gray-200",children:"✕"})]}),e.jsx("div",{className:"p-5 sm:p-7",children:e.jsxs("div",{className:"grid grid-cols-1 xl:grid-cols-2 gap-6 sm:gap-8",children:[e.jsx(S,{title:"Driving License",image:u.licenseImage,emptyText:"Driving license not uploaded yet.",onPreview:h}),e.jsx(S,{title:"Passport",image:u.passportImage,emptyText:"Passport not uploaded yet.",onPreview:h})]})})]}),e.jsx(O,{image:P,onClose:()=>h(null)})]})]})}export{X as default};
