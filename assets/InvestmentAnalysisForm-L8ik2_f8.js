import{r as m,j as e,z as b,d as $}from"./utilities-CctrEpBK.js";import{b as z}from"./react-LWYCItZ7.js";const F=()=>{var v,j,N,w,y;const P=z(),[p,k]=m.useState(""),[u,f]=m.useState(!1),[r,S]=m.useState(null),[L,h]=m.useState(!1),[o,c]=m.useState({rentPerUnit:"1650",downPayment:"25",downPaymentAmount:"250000",mortgageRate:"6",vacancyRate:"5",units:"4",pricePerDoor:"0"}),_="https://realtorparth.ca",i=Number((r==null?void 0:r.ListPrice)||(r==null?void 0:r.Price)||0);m.useEffect(()=>{if(!i)return;const t=Number(o.downPayment),a=Math.round(i*t/100),s=Number(o.units)||1,n=Math.round(i/s);c(l=>({...l,downPaymentAmount:String(a),pricePerDoor:n.toLocaleString()}))},[i,o.downPayment,o.units]);const C=async()=>{var t,a;if(!p.trim()){b.error("Please enter an MLS® number");return}try{f(!0);const n=(await $.get(`${_}/api/properties/analysis/${p}`)).data.property;if(!n){b.error("Property not found");return}const l=(n==null?void 0:n.StateOrProvince)||(n==null?void 0:n.Province)||"";if(l.toLowerCase()!=="ab"&&l.toLowerCase()!=="alberta"){b.error("Only Alberta properties are supported");return}S(n);const d=4,x=Number((n==null?void 0:n.ListPrice)||(n==null?void 0:n.Price)||0),T=Number(o.downPayment),U=Math.round(x*T/100),I=x?Math.round(x/d):0;c(G=>({...G,units:String(d),downPaymentAmount:String(U),pricePerDoor:I.toLocaleString()})),h(!1)}catch(s){console.error(s);const n=(a=(t=s==null?void 0:s.response)==null?void 0:t.data)==null?void 0:a.message;b.error(n||"Property not found or unavailable")}finally{f(!1)}},A=()=>{h(!0)},g=t=>{const{name:a,value:s}=t.target;if(a==="units"){const n=Number(s)||1,l=i?Math.round(i/n):0;c(d=>({...d,units:s,pricePerDoor:l.toLocaleString()}));return}c(n=>({...n,[a]:s}))},M=t=>{const a=t.target.value,s=i?Math.round(i*Number(a||0)/100):0;c(n=>({...n,downPayment:a,downPaymentAmount:String(s)}))},B=t=>{const a=t.target.value,s=i?(Number(a||0)/i*100).toFixed(1):"0";c(n=>({...n,downPaymentAmount:a,downPayment:s}))},R=()=>{var a,s,n,l,d,x;if(!r)return;const t=new URLSearchParams({propertyAddress:r.UnparsedAddress||"",city:r.City||"",province:r.StateOrProvince||r.Province||"",postalCode:r.PostalCode||"",mls:r.ListingId||p,propertyType:r.PropertyType||r.PropertySubType||((a=r.Building)==null?void 0:a.Type)||"",askingPrice:String(r.ListPrice||r.Price||""),beds:String(r.BedroomsTotal||((s=r.Building)==null?void 0:s.Bedrooms)||""),baths:String(r.BathroomsTotalInteger||((n=r.Building)==null?void 0:n.BathroomTotal)||""),parking:String(r.ParkingTotal||r.ParkingSpaceTotal||""),yearBuilt:String(r.YearBuilt||""),sqft:String(r.LivingArea||""),taxes:String(r.TaxAnnualAmount||""),image:((d=(l=r.Media)==null?void 0:l[0])==null?void 0:d.MediaURL)||((x=r.Photo)==null?void 0:x.HighResPath)||"",description:r.PublicRemarks||"",...o}).toString();window.open(`/investmentanalysis?${t}`,"_blank")};return e.jsx("div",{className:"min-h-screen bg-gradient-to-b from-[#fafaf9] to-[#f3f4f6] text-[#111827] pt-36 px-4 md:px-6 py-12 font-['DM_Sans',sans-serif]",children:e.jsxs("div",{className:"max-w-7xl mx-auto",children:[e.jsxs("div",{className:"relative overflow-hidden rounded-[36px] border border-[#ebe7df] bg-white shadow-[0_20px_70px_rgba(15,23,42,0.06)] mb-12",children:[e.jsx("div",{className:"absolute -top-24 -right-24 w-[280px] h-[280px] rounded-full bg-[#d4af37]/10 blur-3xl"}),e.jsx("div",{className:"relative px-8 md:px-14 py-14 md:py-16",children:e.jsxs("div",{className:"max-w-3xl",children:[e.jsxs("div",{className:"inline-flex items-center gap-2 bg-[#faf7ef] border border-[#ead9ae] rounded-full px-5 py-2 mb-6",children:[e.jsx("div",{className:"w-2 h-2 rounded-full bg-[#b98a2f]"}),e.jsx("span",{className:"text-[11px] uppercase tracking-[0.18em] text-[#b98a2f] font-semibold",children:"Realtor Investment Tools"})]}),e.jsxs("h1",{className:"text-[52px] md:text-[72px] leading-[0.95] font-['Cormorant_Garamond',serif] text-[#111827] mb-6",children:["Investment Report",e.jsx("br",{}),"Generator"]}),e.jsx("p",{className:"text-[#6b7280] text-[17px] leading-[1.9] max-w-2xl",children:"Enter an MLS® number to instantly fetch live Realtor.ca property data and generate a luxury investment analysis report with dynamic projections, cash flow modeling, and professional investor insights."})]})})]}),e.jsx("div",{className:"bg-white border border-[#ebe7df] rounded-[32px] shadow-[0_10px_40px_rgba(15,23,42,0.05)] p-6 md:p-8 mb-12",children:e.jsxs("div",{className:"flex flex-col lg:flex-row gap-5",children:[e.jsxs("div",{className:"flex-1",children:[e.jsx("label",{className:"block text-[11px] uppercase tracking-[0.16em] text-[#b98a2f] mb-3",children:"MLS® Number"}),e.jsxs("div",{className:"relative",children:[e.jsx("input",{type:"text",placeholder:"Enter MLS® Number",value:p,onChange:t=>k(t.target.value),className:`\r
                                w-full\r
                                bg-[#f9fafb]\r
                                border border-[#d1d5db]\r
                                rounded-2xl\r
                                px-6 py-5\r
                                text-[16px]\r
                                text-[#111827]\r
                                outline-none\r
                                transition-all\r
                                duration-300\r
                                focus:border-[#b98a2f]\r
                                focus:ring-4\r
                                focus:ring-[#b98a2f]/10\r
                            `}),e.jsx("div",{className:"absolute right-5 top-1/2 -translate-y-1/2 text-[#9ca3af]",children:e.jsxs("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",strokeWidth:"2",viewBox:"0 0 24 24",children:[e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21 21l-4.35-4.35"}),e.jsx("circle",{cx:"11",cy:"11",r:"6"})]})})]})]}),e.jsx("div",{className:"lg:w-auto flex items-end",children:e.jsx("button",{onClick:C,disabled:u,className:`\r
                            h-[62px]\r
                            px-10\r
                            rounded-2xl\r
                            bg-[#111827]\r
                            hover:bg-black\r
                            disabled:opacity-50\r
                            text-white\r
                            uppercase\r
                            tracking-[0.16em]\r
                            text-[11px]\r
                            font-semibold\r
                            transition-all\r
                            duration-300\r
                            shadow-lg\r
                            hover:shadow-xl\r
                            whitespace-nowrap\r
                        `,children:u?"Searching...":"Search Property"})})]})}),r&&e.jsxs("div",{className:"group relative overflow-hidden rounded-[36px] bg-white border border-[#ebe7df] shadow-[0_20px_60px_rgba(15,23,42,0.06)] hover:shadow-[0_30px_80px_rgba(15,23,42,0.10)] transition-all duration-500 mb-12",children:[e.jsx("div",{className:"absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-[#b98a2f] via-[#d4af37] to-[#b98a2f]"}),e.jsxs("div",{className:"grid xl:grid-cols-[440px_1fr]",children:[e.jsxs("div",{className:"relative h-[340px] xl:h-full overflow-hidden bg-[#f3f4f6]",children:[e.jsx("img",{src:((j=(v=r.Media)==null?void 0:v[0])==null?void 0:j.MediaURL)||((N=r.Photo)==null?void 0:N.HighResPath),alt:"Property",className:`\r
                                w-full h-full object-cover\r
                                transition-transform duration-[1400ms]\r
                                group-hover:scale-105\r
                            `}),e.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/40 via-black/5 to-transparent"}),e.jsx("div",{className:"absolute top-6 left-6",children:e.jsxs("div",{className:`\r
                                backdrop-blur-md\r
                                bg-white/90\r
                                border border-white/40\r
                                rounded-full\r
                                px-5 py-2.5\r
                                shadow-lg\r
                            `,children:[e.jsx("div",{className:"text-[10px] uppercase tracking-[0.18em] text-[#b98a2f] mb-1",children:"MLS® Number"}),e.jsx("div",{className:"text-[15px] font-semibold text-[#111827]",children:r.ListingId})]})}),e.jsx("div",{className:"absolute bottom-6 left-6",children:e.jsxs("div",{className:`\r
                                backdrop-blur-xl\r
                                bg-black/60\r
                                border border-white/10\r
                                rounded-2xl\r
                                px-6 py-4\r
                            `,children:[e.jsx("div",{className:"text-[10px] uppercase tracking-[0.18em] text-white/60 mb-2",children:"Asking Price"}),e.jsxs("div",{className:"text-white text-[42px] leading-none font-['Cormorant_Garamond',serif]",children:["$",Number(r.ListPrice||r.Price).toLocaleString()]})]})})]}),e.jsxs("div",{className:"p-8 md:p-10 flex flex-col justify-between",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"inline-flex items-center gap-2 bg-[#faf7ef] border border-[#ead9ae] rounded-full px-5 py-2 mb-6",children:[e.jsx("div",{className:"w-2 h-2 rounded-full bg-[#b98a2f]"}),e.jsx("span",{className:"text-[11px] uppercase tracking-[0.14em] text-[#b98a2f] font-semibold",children:r.PropertyType||r.PropertySubType})]}),e.jsx("h2",{className:"text-[44px] md:text-[58px] leading-[0.95] font-['Cormorant_Garamond',serif] text-[#111827] mb-5",children:r.UnparsedAddress}),e.jsxs("div",{className:"flex items-center gap-3 text-[#6b7280] text-[16px] mb-8",children:[e.jsxs("svg",{className:"w-5 h-5 text-[#b98a2f]",fill:"none",stroke:"currentColor",strokeWidth:"2",viewBox:"0 0 24 24",children:[e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"}),e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 11a3 3 0 11-6 0 3 3 0 016 0z"})]}),e.jsxs("span",{children:[r.City,","," ",r.StateOrProvince]})]}),e.jsx("div",{className:"grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8",children:[{label:"Bedrooms",value:r.BedroomsTotal||((w=r.Building)==null?void 0:w.Bedrooms)||"—"},{label:"Bathrooms",value:r.BathroomsTotalInteger||((y=r.Building)==null?void 0:y.BathroomTotal)||"—"},{label:"Sq Ft",value:r.LivingArea?Number(r.LivingArea).toLocaleString():"—"},{label:"Year Built",value:r.YearBuilt||"—"}].map(t=>e.jsxs("div",{className:"bg-[#f9fafb] border border-[#ececec] rounded-2xl p-5",children:[e.jsx("div",{className:"text-[11px] uppercase tracking-[0.12em] text-[#9ca3af] mb-3",children:t.label}),e.jsx("div",{className:"text-[30px] leading-none font-['Cormorant_Garamond',serif] text-[#111827]",children:t.value})]},t.label))})]}),e.jsxs("div",{className:"mt-10 flex flex-col sm:flex-row gap-4",children:[e.jsx("button",{onClick:A,className:`\r
                                    flex-1\r
                                    bg-[#111827]\r
                                    hover:bg-black\r
                                    text-white\r
                                    py-5\r
                                    rounded-2xl\r
                                    uppercase\r
                                    tracking-[0.16em]\r
                                    text-[11px]\r
                                    font-semibold\r
                                    transition-all\r
                                    duration-300\r
                                    shadow-lg\r
                                    hover:shadow-xl\r
                                `,children:"Select Property"}),e.jsx("button",{onClick:()=>P(`/listings/${r.ListingKey||p}`),className:`\r
        px-8\r
        py-5\r
        rounded-2xl\r
        border border-[#d1d5db]\r
        text-[#111827]\r
        hover:bg-[#f9fafb]\r
        uppercase\r
        tracking-[0.16em]\r
        text-[11px]\r
        font-semibold\r
        transition-all\r
        duration-300\r
    `,children:"View Details"})]})]})]})]}),L&&e.jsxs("div",{className:"bg-white border border-[#ebe7df] rounded-[36px] shadow-[0_20px_60px_rgba(15,23,42,0.06)] overflow-hidden",children:[e.jsxs("div",{className:"relative px-8 md:px-10 py-10 border-b border-[#f1ece2] bg-gradient-to-br from-[#fffdf8] to-[#faf7ef]",children:[e.jsx("div",{className:"absolute top-0 right-0 w-[240px] h-[240px] bg-[#b98a2f]/[0.04] rounded-full blur-3xl"}),e.jsxs("div",{className:"relative z-10",children:[e.jsxs("div",{className:"inline-flex items-center gap-2 bg-white border border-[#ead9ae] rounded-full px-5 py-2 mb-6 shadow-sm",children:[e.jsx("div",{className:"w-2 h-2 rounded-full bg-[#b98a2f]"}),e.jsx("span",{className:"text-[11px] uppercase tracking-[0.18em] text-[#b98a2f] font-semibold",children:"Investment Assumptions"})]}),e.jsxs("div",{className:"flex flex-col xl:flex-row xl:items-end xl:justify-between gap-8",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-[44px] md:text-[52px] leading-none font-['Cormorant_Garamond',serif] text-[#111827] mb-4",children:"Customize Analysis"}),e.jsx("p",{className:"text-[#6b7280] text-[15px] leading-[1.9] max-w-2xl",children:"Adjust your investment assumptions before generating the final premium investment analysis report."})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-4 min-w-[320px]",children:[e.jsxs("div",{className:"bg-white border border-[#ebe7df] rounded-2xl p-5 shadow-sm",children:[e.jsx("div",{className:"text-[10px] uppercase tracking-[0.14em] text-[#9ca3af] mb-2",children:"Property Price"}),e.jsxs("div",{className:"text-[28px] leading-none font-['Cormorant_Garamond',serif] text-[#111827]",children:["$",i.toLocaleString()]})]}),e.jsxs("div",{className:"bg-white border border-[#ebe7df] rounded-2xl p-5 shadow-sm",children:[e.jsx("div",{className:"text-[10px] uppercase tracking-[0.14em] text-[#9ca3af] mb-2",children:"Price / Door"}),e.jsxs("div",{className:"text-[28px] leading-none font-['Cormorant_Garamond',serif] text-[#111827]",children:["$",o.pricePerDoor]})]})]})]})]})]}),e.jsxs("div",{className:"p-8 md:p-10",children:[e.jsx("div",{className:"flex items-center justify-between gap-5 mb-8",children:e.jsxs("div",{children:[e.jsx("h4",{className:"text-[22px] font-semibold text-[#111827] mb-1",children:"Financial Inputs"}),e.jsx("p",{className:"text-[#6b7280] text-[14px]",children:"Configure financing assumptions and rental projections."})]})}),e.jsxs("div",{className:"grid xl:grid-cols-2 gap-10",children:[e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"bg-[#fcfcfb] border border-[#ebe7df] rounded-3xl p-6",children:[e.jsx("label",{className:"block text-[11px] uppercase tracking-[0.14em] text-[#b98a2f] mb-4 font-semibold",children:"Rent Per Unit / Month"}),e.jsxs("div",{className:"relative",children:[e.jsx("span",{className:"absolute left-5 top-1/2 -translate-y-1/2 text-[#6b7280] text-[15px]",children:"$"}),e.jsx("input",{type:"number",name:"rentPerUnit",value:o.rentPerUnit,onChange:g,className:`\r
                                    w-full\r
                                    bg-white\r
                                    border border-[#d8dde5]\r
                                    rounded-2xl\r
                                    pl-10 pr-5 py-5\r
                                    text-[16px]\r
                                    font-medium\r
                                    text-[#111827]\r
                                    outline-none\r
                                    transition-all\r
                                    duration-300\r
                                    focus:border-[#b98a2f]\r
                                    focus:ring-4\r
                                    focus:ring-[#b98a2f]/10\r
                                `})]})]}),e.jsxs("div",{className:"bg-[#fcfcfb] border border-[#ebe7df] rounded-3xl p-6",children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("label",{className:"block text-[11px] uppercase tracking-[0.14em] text-[#b98a2f] font-semibold",children:"Down Payment"}),e.jsx("div",{className:"text-[13px] text-[#6b7280]",children:"Auto synchronized"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-5",children:[e.jsxs("div",{children:[e.jsx("div",{className:"text-[12px] text-[#6b7280] mb-2",children:"Percentage"}),e.jsxs("div",{className:"relative",children:[e.jsx("input",{type:"number",value:o.downPayment,onChange:M,className:`\r
                                            w-full\r
                                            bg-white\r
                                            border border-[#d8dde5]\r
                                            rounded-2xl\r
                                            px-5 py-5\r
                                            pr-12\r
                                            text-[16px]\r
                                            font-medium\r
                                            text-[#111827]\r
                                            outline-none\r
                                            transition-all\r
                                            duration-300\r
                                            focus:border-[#b98a2f]\r
                                            focus:ring-4\r
                                            focus:ring-[#b98a2f]/10\r
                                        `}),e.jsx("span",{className:"absolute right-5 top-1/2 -translate-y-1/2 text-[#6b7280] text-[15px]",children:"%"})]})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-[12px] text-[#6b7280] mb-2",children:"Dollar Amount"}),e.jsxs("div",{className:"relative",children:[e.jsx("span",{className:"absolute left-5 top-1/2 -translate-y-1/2 text-[#6b7280] text-[15px]",children:"$"}),e.jsx("input",{type:"number",value:o.downPaymentAmount,onChange:B,className:`\r
                                            w-full\r
                                            bg-white\r
                                            border border-[#d8dde5]\r
                                            rounded-2xl\r
                                            pl-10 pr-5 py-5\r
                                            text-[16px]\r
                                            font-medium\r
                                            text-[#111827]\r
                                            outline-none\r
                                            transition-all\r
                                            duration-300\r
                                            focus:border-[#b98a2f]\r
                                            focus:ring-4\r
                                            focus:ring-[#b98a2f]/10\r
                                        `})]})]})]})]})]}),e.jsx("div",{className:"space-y-6",children:[{label:"Mortgage Rate",name:"mortgageRate",suffix:"%"},{label:"Vacancy Rate",name:"vacancyRate",suffix:"%"},{label:"Number of Units",name:"units",suffix:"Units"}].map(t=>e.jsxs("div",{className:"bg-[#fcfcfb] border border-[#ebe7df] rounded-3xl p-6",children:[e.jsx("label",{className:"block text-[11px] uppercase tracking-[0.14em] text-[#b98a2f] mb-4 font-semibold",children:t.label}),e.jsxs("div",{className:"relative",children:[e.jsx("input",{type:"number",name:t.name,value:o[t.name],onChange:g,className:`\r
                                        w-full\r
                                        bg-white\r
                                        border border-[#d8dde5]\r
                                        rounded-2xl\r
                                        px-5 py-5\r
                                        pr-20\r
                                        text-[16px]\r
                                        font-medium\r
                                        text-[#111827]\r
                                        outline-none\r
                                        transition-all\r
                                        duration-300\r
                                        focus:border-[#b98a2f]\r
                                        focus:ring-4\r
                                        focus:ring-[#b98a2f]/10\r
                                    `}),e.jsx("span",{className:"absolute right-5 top-1/2 -translate-y-1/2 text-[#6b7280] text-[14px]",children:t.suffix})]})]},t.name))})]}),e.jsxs("div",{className:"mt-12 pt-8 border-t border-[#f1ece2] flex flex-col lg:flex-row lg:items-center justify-between gap-6",children:[e.jsxs("div",{children:[e.jsx("div",{className:"text-[13px] text-[#6b7280] mb-2",children:"Ready to generate your investment report?"}),e.jsx("div",{className:"text-[15px] text-[#111827] font-medium",children:"All calculations update automatically based on your assumptions."})]}),e.jsx("button",{onClick:R,className:`\r
                        bg-[#111827]\r
                        hover:bg-black\r
                        text-white\r
                        px-12\r
                        py-5\r
                        rounded-2xl\r
                        uppercase\r
                        tracking-[0.16em]\r
                        text-[11px]\r
                        font-semibold\r
                        transition-all\r
                        duration-300\r
                        shadow-[0_12px_30px_rgba(17,24,39,0.18)]\r
                        hover:shadow-[0_18px_40px_rgba(17,24,39,0.22)]\r
                        hover:-translate-y-[2px]\r
                    `,children:"Generate Report"})]})]})]})]})})};export{F as default};
