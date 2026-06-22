import{r as x,j as e,d as he,z as D}from"./utilities-CctrEpBK.js";import{f as ue}from"./react-LWYCItZ7.js";import{b as k,B as ge,d as ve,e as je,f as Ne,g as ye,h as we,P as ke,i as Ce,p as $e,j as _e}from"./charts-CiUfmHhv.js";k.register(ge,ve,je,Ne,ye,we,ke,Ce,$e,_e);const U=18e3,F=300,Re=1650,f=t=>{const n=Math.abs(Math.round(t));return`${t<0?"–$":"$"}${n.toLocaleString("en-CA")}`},Se=(t,n)=>{if(n===0)return 0;const d=n/12/100;return t*(d*Math.pow(1+d,F)/(Math.pow(1+d,F)-1))*12},w=({children:t})=>e.jsxs("div",{className:"flex items-center gap-4 mb-6",children:[e.jsx("span",{className:`\r
            text-[11px]\r
            uppercase\r
            tracking-[0.18em]\r
            text-amber-400\r
            font-semibold\r
            whitespace-nowrap\r
        `,children:t}),e.jsx("div",{className:`\r
            flex-1\r
            h-[1px]\r
            bg-gradient-to-r\r
            from-amber-400/60\r
            via-amber-300/20\r
            to-transparent\r
        `})]}),_=({children:t})=>e.jsx("div",{className:"bg-[#131f40]/90 px-5 py-[18px] border-b border-amber-900/20 text-[12px] uppercase tracking-[0.16em] text-amber-400",children:t}),h=({label:t,value:n,labelBold:d,valueColor:l="text-[#f5f0e8]",mt:C=""})=>e.jsxs("div",{className:`flex items-center justify-between gap-4 py-3.5 border-b border-amber-900/10 last:border-b-0 ${C}`,children:[e.jsx("span",{className:`text-[15px] ${d?"text-[#111827] font-semibold":"text-[#6b7280]"}`,children:t}),e.jsx("span",{className:`font-semibold text-[15px] ${l}`,children:n})]}),B=({label:t,min:n,max:d,step:l,value:C,onChange:G,displayValue:L,hintLeft:R,hintCenter:m,hintRight:T})=>e.jsxs("div",{className:"mb-7",children:[e.jsxs("div",{className:"flex justify-between mb-3.5",children:[e.jsx("span",{className:"text-[#f5f0e8]/62 text-[15px]",children:t}),e.jsx("span",{className:"text-amber-400 text-[16px] font-semibold",children:L})]}),e.jsx("input",{type:"range",min:n,max:d,step:l,value:C,onChange:I=>G(Number(I.target.value)),className:`\r
                w-full h-[2px]\r
                appearance-none\r
                bg-amber-900/30\r
                outline-none\r
                cursor-pointer\r
\r
                [&::-webkit-slider-thumb]:appearance-none\r
                [&::-webkit-slider-thumb]:w-[14px]\r
                [&::-webkit-slider-thumb]:h-[14px]\r
                [&::-webkit-slider-thumb]:rounded-full\r
                [&::-webkit-slider-thumb]:bg-amber-400\r
                [&::-webkit-slider-thumb]:border-2\r
                [&::-webkit-slider-thumb]:border-[#071427]\r
                [&::-webkit-slider-thumb]:shadow-[0_0_0_2px_#c9a55a]\r
            `}),e.jsxs("div",{className:"mt-3 flex justify-between text-[12px] text-[#f5f0e8]/42",children:[e.jsx("span",{children:R}),m&&e.jsx("span",{className:m.className??"text-amber-400",children:m.label}),e.jsx("span",{children:T})]})]}),Y=({title:t,value:n,note:d,valueClass:l="text-amber-400"})=>e.jsxs("div",{className:"border-t border-amber-900/25 pt-5 mt-5",children:[e.jsx("div",{className:"text-[#f5f0e8]/34 uppercase tracking-[0.12em] text-[11px] mb-4",children:t}),e.jsx("div",{className:`text-[42px] font-['Cormorant_Garamond',serif] leading-none ${l}`,children:n}),e.jsx("div",{className:"mt-3 text-[#f5f0e8]/48 text-[13px]",children:d})]}),Ae=()=>{const[t]=ue(),n=Number(t.get("askingPrice"))||999999,d=t.get("propertyAddress")||"47 Highlands Place W",l=t.get("city")||"Lethbridge",C=t.get("province")||"AB",G=t.get("postalCode")||"",L=t.get("mls")||"A2302093",R=t.get("propertyType")||"Fourplex",m=t.get("beds")||"3",T=t.get("baths")||"2",I=t.get("parking")||"6",S=Number(t.get("units"))||4,Q=t.get("yearBuilt")||"2003",W=t.get("sqft")||"",[O,J]=x.useState("investor"),[g,Z]=x.useState(Number(t.get("rentPerUnit"))||1650),[u,ee]=x.useState(Number(t.get("downPayment"))||25),[v,re]=x.useState(Number(t.get("mortgageRate"))||6),[$,ae]=x.useState(Number(t.get("vacancyRate"))||5),V=x.useRef(null),z=x.useRef(null),H=x.useRef(null),i=O==="owner",te="https://realtorparth.ca";x.useEffect(()=>{const r=document.createElement("link");r.rel="preconnect",r.href="https://fonts.googleapis.com";const s=document.createElement("link");s.rel="preconnect",s.href="https://fonts.gstatic.com",s.crossOrigin="true";const c=document.createElement("link");return c.href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=DM+Sans:wght@300;400;500;700&display=swap",c.rel="stylesheet",document.head.append(r,s,c),()=>{[r,s,c].forEach(j=>document.head.removeChild(j))}},[]);const a=x.useMemo(()=>{const r=Number(t.get("units"))||4,s=i?Math.max(r-1,1):r,c=n*u/100,j=n-c,b=Se(j,v),N=b/12,M=g*s*12,P=M*$/100,y=M-P,A=i?0:y*.08,E=U+A,o=y-E,de=o/n*100,ce=n/(g*r*12),q=o-b,xe=c>0?q/c*100:0,me=b>0?o/b:999,pe=Math.ceil(i?(b+U)/(1-$/100)/(s*12):(b+U)/.92/(1-$/100)/(r*12)),K=y/12,be=N>0?Math.min(100,K/N*100):100,X=Math.max(0,-q/12),fe=Re-X;return{totalUnits:r,rentableUnits:s,dp:c,loanAmt:j,ads:b,monthlyMortgage:N,gpr:M,vacLoss:P,egi:y,mgmt:A,totalExp:E,noi:o,cap:de,grm:ce,cf:q,coc:xe,dscr:me,breakEvenRent:pe,monthlyRentalIncome:K,coverPct:be,monthlyShortfall:X,saving:fe}},[n,g,u,v,$,i,t]);x.useEffect(()=>{k.defaults.color="#6b7280",k.defaults.font.family="'DM Sans', sans-serif",k.defaults.borderColor="rgba(17,24,39,0.08)";const r=new k(V.current,{type:"bar",data:{labels:["1-bedroom","2-bedroom","3-bedroom"],datasets:[{data:[14.6,10.7,24],backgroundColor:["#d4a547","#c9982f","#b98a2f"],borderRadius:8}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1},tooltip:{backgroundColor:"#111827",titleColor:"#ffffff",bodyColor:"#ffffff",borderColor:"#e5e7eb",borderWidth:1}},scales:{x:{grid:{display:!1},ticks:{color:"#6b7280"}},y:{grid:{color:"rgba(17,24,39,0.06)"},ticks:{color:"#6b7280",callback:o=>`${o}%`}}}}}),s=new k(z.current,{type:"bar",data:{labels:["1-year","5-year"],datasets:[{data:[8.99,43.82],backgroundColor:["#d4a547","#b98a2f"],borderRadius:8}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1},tooltip:{backgroundColor:"#111827",titleColor:"#ffffff",bodyColor:"#ffffff",borderColor:"#e5e7eb",borderWidth:1}},scales:{x:{grid:{display:!1},ticks:{color:"#6b7280"}},y:{grid:{color:"rgba(17,24,39,0.06)"},ticks:{color:"#6b7280",callback:o=>`${o}%`}}}}}),c=[0,1,2,3,4,5],j=n,b=u/100,N=v/100/12,M=j*(1-b),P=o=>M*((Math.pow(1+N,F)-Math.pow(1+N,o))/(Math.pow(1+N,F)-1)),y=c.map(o=>Math.round(j*Math.pow(1.07,o))),A=c.map(o=>Math.round(y[o]-P(o*12))),E=new k(H.current,{type:"line",data:{labels:c.map(o=>o===0?"Today":`Year ${o}`),datasets:[{label:"Property Value",data:y,borderColor:"#b98a2f",backgroundColor:"rgba(185,138,47,0.08)",fill:!0,tension:.4,borderWidth:3,pointBackgroundColor:"#b98a2f",pointRadius:4},{label:"Equity",data:A,borderColor:"#10b981",backgroundColor:"rgba(16,185,129,0.08)",fill:!0,tension:.4,borderDash:[6,6],borderWidth:3,pointBackgroundColor:"#10b981",pointRadius:4}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1},tooltip:{backgroundColor:"#111827",titleColor:"#ffffff",bodyColor:"#ffffff",borderColor:"#e5e7eb",borderWidth:1}},scales:{x:{grid:{display:!1},ticks:{color:"#6b7280"}},y:{grid:{color:"rgba(17,24,39,0.06)"},ticks:{color:"#6b7280",callback:o=>`$${(Number(o)/1e3).toFixed(0)}K`}}}}});return()=>{r.destroy(),s.destroy(),E.destroy()}},[n,u,v]);const ne=a.cap>=6?"text-emerald-400":a.cap>=5?"text-amber-400":"text-red-400",se=a.cf>=0?"text-emerald-400":a.cf>-5e3?"text-amber-400":"text-red-400",oe=a.coc>=5?"text-emerald-400":a.coc>=0?"text-amber-400":"text-red-400",le=a.dscr>=1.2?"text-emerald-400":a.dscr>=1?"text-amber-400":"text-red-400",p=a.cf>=0,ie=async()=>{try{const s=(await he.post(`${te}/api/share/create-share`,{reportUrl:`https://realtorparth.ca${location.pathname}${location.search}`})).data.shortUrl;navigator.share?await navigator.share({title:"Investment Analysis Report",text:`Investment analysis for ${d}`,url:s}):(await navigator.clipboard.writeText(s),D.success("Sharable link copied to clipboard")),D.success("Sharable link created • expires in 7 days",{duration:5e3})}catch(r){console.error(r),D.error("Failed to share report")}};return e.jsxs("div",{className:`\r
        min-h-screen\r
        font-['DM_Sans',sans-serif]\r
        text-[#111827]\r
        leading-[1.65]\r
        relative\r
        overflow-hidden\r
        bg-[##F9FAFB]\r
    `,style:{background:`
            radial-gradient(
                circle at top right,
                rgba(185,138,47,0.08),
                transparent 30%
            ),
            linear-gradient(
                to bottom,
                #fdfcf9 0%,
                #F9FAFB 40%,
                #f5f7fa 100%
            )
        `},children:[e.jsx("div",{className:`fixed bottom-10 -right-8 text-[82px] font-['Cormorant_Garamond',serif]\r
          text-amber-400/[0.03] pointer-events-none -rotate-12 select-none z-0 whitespace-nowrap`,children:"The Real Estate Realist"}),e.jsx("header",{className:`\r
        sticky\r
        top-0\r
        z-50\r
        border-b\r
        border-[#e7dcc3]\r
        backdrop-blur-[14px]\r
        bg-[rgba(249,250,251,0.92)]\r
    `,children:e.jsxs("div",{className:`\r
            max-w-[1120px]\r
            mx-auto\r
            px-4\r
            sm:px-6\r
            lg:px-8\r
            min-h-[78px]\r
            sm:min-h-[82px]\r
            flex\r
            items-center\r
            justify-between\r
            gap-4\r
        `,children:[e.jsxs("a",{href:"https://realtorparth.ca",target:"_blank",rel:"noreferrer",className:`\r
                flex\r
                items-center\r
                gap-3\r
                sm:gap-4\r
                no-underline\r
                min-w-0\r
            `,children:[e.jsx("div",{className:`\r
                    w-[44px]\r
                    h-[44px]\r
                    sm:w-[50px]\r
                    sm:h-[50px]\r
                    rounded-full\r
                    overflow-hidden\r
                    border\r
                    border-[#d9c59a]\r
                    bg-[#f8f6f1]\r
                    shadow-sm\r
                    flex-shrink-0\r
                `,children:e.jsx("img",{src:"parth_black_suite-removebg-preview.png",alt:"Parth Brahmbhatt",className:"w-full h-full object-cover"})}),e.jsxs("div",{className:"min-w-0",children:[e.jsx("span",{className:`\r
                        block\r
                        text-[17px]\r
                        sm:text-[20px]\r
                        font-['Cormorant_Garamond',serif]\r
                        text-[#111827]\r
                        leading-[1.05]\r
                        truncate\r
                    `,children:"Parth Brahmbhatt"}),e.jsx("span",{className:`\r
                        block\r
                        text-[9px]\r
                        sm:text-[10px]\r
                        uppercase\r
                        tracking-[0.14em]\r
                        sm:tracking-[0.16em]\r
                        text-[#b98a2f]\r
                        mt-[3px]\r
                        sm:mt-[4px]\r
                        font-semibold\r
                        whitespace-nowrap\r
                    `,children:"The Real Estate Realist"})]})]}),e.jsxs("a",{href:"https://realtorparth.ca",target:"_blank",rel:"noreferrer",className:`\r
                no-underline\r
                px-4\r
                sm:px-6\r
                py-2.5\r
                sm:py-3\r
                rounded-full\r
                border\r
                border-[#e7dcc3]\r
                bg-white\r
                text-[#b98a2f]\r
                text-[9px]\r
                sm:text-[11px]\r
                uppercase\r
                tracking-[0.12em]\r
                sm:tracking-[0.14em]\r
                font-semibold\r
                transition-all\r
                duration-300\r
                hover:bg-[#faf7ef]\r
                hover:border-[#d9c59a]\r
                hover:shadow-sm\r
                whitespace-nowrap\r
                flex-shrink-0\r
            `,children:[e.jsx("span",{className:"hidden sm:inline",children:"Book a Consultation"}),e.jsx("span",{className:"sm:hidden",children:"Consult"})]})]})}),e.jsx("section",{className:"px-4 sm:px-6 lg:px-8 pt-[110px] sm:pt-[120px] lg:pt-[78px] pb-14 lg:pb-16 border-b border-[#e7dcc3] bg-[#F9FAFB]",children:e.jsxs("div",{className:`\r
            max-w-[1120px]\r
            mx-auto\r
            grid\r
            grid-cols-1\r
            xl:grid-cols-[1fr_auto]\r
            gap-10\r
            xl:gap-12\r
            items-start\r
            xl:items-end\r
        `,children:[e.jsxs("div",{className:"min-w-0",children:[e.jsxs("div",{className:`\r
                    inline-flex\r
                    items-center\r
                    gap-2\r
                    bg-[#faf7ef]\r
                    border\r
                    border-[#ead9ae]\r
                    rounded-full\r
                    px-4\r
                    sm:px-5\r
                    py-2\r
                    mb-5\r
                    max-w-full\r
                `,children:[e.jsx("div",{className:"w-2 h-2 rounded-full bg-[#b98a2f] flex-shrink-0"}),e.jsx("span",{className:`\r
                        text-[10px]\r
                        sm:text-[11px]\r
                        tracking-[0.16em]\r
                        text-[#b98a2f]\r
                        uppercase\r
                        font-semibold\r
                        whitespace-nowrap\r
                    `,children:"Investment Analysis Report"})]}),e.jsxs("h1",{className:`\r
                    font-['Cormorant_Garamond',serif]\r
                    font-medium\r
                    leading-[1.02]\r
                    text-[#111827]\r
                    mb-5\r
                    break-words\r
                `,style:{fontSize:"clamp(34px, 7vw, 64px)"},children:[d,e.jsx("br",{}),e.jsxs("span",{className:"text-[#4b5563]",children:[l,", ",C," ",G]})]}),e.jsxs("p",{className:`\r
                    text-[#6b7280]\r
                    mb-8\r
                    text-[14px]\r
                    sm:text-[15px]\r
                    leading-[1.8]\r
                `,children:[R,e.jsxs(e.Fragment,{children:[" ","· MLS® ",L]}),e.jsxs(e.Fragment,{children:[" ","· Built"," ",Q]}),W&&e.jsxs(e.Fragment,{children:[" ","· ",W," SqFt"]})]}),e.jsxs("div",{className:"flex flex-wrap gap-3",children:[e.jsxs("span",{className:`\r
                            bg-[#f8f6f1]\r
                            border\r
                            border-[#e7d6af]\r
                            text-[#b98a2f]\r
                            px-4\r
                            py-2\r
                            rounded-full\r
                            text-[10px]\r
                            sm:text-[11px]\r
                            tracking-[0.12em]\r
                            uppercase\r
                            font-semibold\r
                        `,children:[m," Beds"]}),e.jsxs("span",{className:`\r
                            bg-[#f8f6f1]\r
                            border\r
                            border-[#e7d6af]\r
                            text-[#b98a2f]\r
                            px-4\r
                            py-2\r
                            rounded-full\r
                            text-[10px]\r
                            sm:text-[11px]\r
                            tracking-[0.12em]\r
                            uppercase\r
                            font-semibold\r
                        `,children:[T," Baths"]}),e.jsxs("span",{className:`\r
                            bg-[#f8f6f1]\r
                            border\r
                            border-[#e7d6af]\r
                            text-[#b98a2f]\r
                            px-4\r
                            py-2\r
                            rounded-full\r
                            text-[10px]\r
                            sm:text-[11px]\r
                            tracking-[0.12em]\r
                            uppercase\r
                            font-semibold\r
                        `,children:[I," Parking"]}),e.jsx("span",{className:`\r
                            bg-[#f8f6f1]\r
                            border\r
                            border-[#e7d6af]\r
                            text-[#b98a2f]\r
                            px-4\r
                            py-2\r
                            rounded-full\r
                            text-[10px]\r
                            sm:text-[11px]\r
                            tracking-[0.12em]\r
                            uppercase\r
                            font-semibold\r
                        `,children:R})]})]}),e.jsxs("div",{className:`\r
                bg-white\r
                border\r
                border-[#ebe7df]\r
                rounded-[30px]\r
                px-6\r
                sm:px-8\r
                lg:px-10\r
                py-7\r
                sm:py-8\r
                lg:py-9\r
                shadow-[0_20px_60px_rgba(15,23,42,0.06)]\r
                w-full\r
                xl:w-auto\r
                xl:min-w-[320px]\r
            `,children:[e.jsx("p",{className:"text-[11px] uppercase tracking-[0.16em] text-[#9ca3af] mb-3",children:"Asking Price"}),e.jsxs("p",{className:`\r
                    leading-none\r
                    font-['Cormorant_Garamond',serif]\r
                    text-[#111827]\r
                    break-words\r
                `,style:{fontSize:"clamp(42px, 8vw, 64px)"},children:["$",n.toLocaleString("en-CA")]}),e.jsxs("div",{className:"mt-6 pt-6 border-t border-[#f1f1f1]",children:[e.jsx("p",{className:"text-[11px] uppercase tracking-[0.14em] text-[#9ca3af] mb-2",children:"Investment Snapshot"}),e.jsx("p",{className:"text-[#b98a2f] text-[14px] sm:text-[15px] font-medium leading-[1.7]",children:Number(m)>0?`$${Math.round(n/Number(m)).toLocaleString()} per bedroom`:"Premium Investment Opportunity"})]})]})]})}),e.jsxs("main",{className:"max-w-[1120px] mx-auto px-8 py-[60px] pb-[90px] relative z-10",children:[e.jsx(w,{children:"Key Metrics"}),e.jsx("div",{className:"grid md:grid-cols-2 xl:grid-cols-3 gap-6 mb-16",children:[{label:"Cap Rate",value:`${a.cap.toFixed(1)}%`,color:ne,note:"Market avg ~5–6%"},{label:"Net Operating Income",value:f(a.noi),color:"text-[#111827]",note:"Annual NOI after expenses"},{label:"Annual Cash Flow",value:f(a.cf),color:se,note:`At ${u}% down · ${v.toFixed(2)}% rate`},{label:"Cash-on-Cash Return",value:`${a.coc.toFixed(1)}%`,color:oe,note:"Return on invested equity"},{label:"Debt Service Coverage",value:a.dscr.toFixed(2),color:le,note:"Lenders typically require ≥ 1.20"},{label:"Gross Rent Multiplier",value:`${a.grm.toFixed(1)}×`,color:"text-[#111827]",note:"Purchase price ÷ gross rent"}].map((r,s)=>e.jsxs("div",{className:`\r
                group\r
                relative\r
                overflow-hidden\r
                bg-white\r
                border\r
                border-[#ebe7df]\r
                rounded-[30px]\r
                p-8\r
                shadow-[0_20px_60px_rgba(15,23,42,0.05)]\r
                hover:shadow-[0_25px_70px_rgba(15,23,42,0.08)]\r
                transition-all\r
                duration-300\r
            `,children:[e.jsx("div",{className:"absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-[#b98a2f] to-[#e7d6af]"}),e.jsx("div",{className:"text-[11px] uppercase tracking-[0.18em] text-[#9ca3af] mb-5 font-semibold",children:r.label}),e.jsx("div",{className:`
                    text-[44px]
                    leading-none
                    font-['Cormorant_Garamond',serif]
                    mb-5
                    ${r.color}
                `,children:r.value}),e.jsxs("div",{className:"flex items-start gap-3",children:[e.jsx("div",{className:"w-2 h-2 rounded-full bg-[#b98a2f] mt-[7px] flex-shrink-0"}),e.jsx("p",{className:"text-[#6b7280] text-[14px] leading-[1.7]",children:r.note})]})]},s))}),e.jsx("div",{className:"flex mb-[34px] gap-4 flex-wrap",children:[{id:"investor",icon:"◢",label:`Full Investment (${S} units rented)`},{id:"owner",icon:"⌂",label:`Owner-Occupied (live in 1, rent ${Math.max(S-1,1)})`}].map(r=>e.jsxs("button",{onClick:()=>J(r.id),className:`
                flex items-center gap-2.5
                border
                px-[22px]
                py-[13px]
                rounded-2xl
                text-[14px]
                cursor-pointer
                transition-all
                duration-200

                ${O===r.id?`
                        bg-[#111827]
                        border-[#111827]
                        text-white
                        shadow-[0_10px_30px_rgba(17,24,39,0.12)]
                    `:`
                        bg-white
                        border-[#e5e7eb]
                        text-[#6b7280]
                        hover:border-[#b98a2f]
                        hover:text-[#111827]
                    `}
            `,children:[e.jsx("span",{className:`
                    ${O===r.id?"text-[#d4a547]":"text-[#b98a2f]"}
                `,children:r.icon}),r.label]},r.id))}),e.jsxs("div",{className:"grid grid-cols-1 xl:grid-cols-2 gap-10 mb-14",children:[e.jsxs("div",{className:"min-w-0",children:[e.jsx(w,{children:"Income & Expenses"}),e.jsxs("div",{className:`\r
            bg-white\r
            border\r
            border-[#ebe7df]\r
            rounded-[24px]\r
            sm:rounded-[28px]\r
            lg:rounded-[32px]\r
            overflow-hidden\r
            shadow-[0_20px_60px_rgba(15,23,42,0.06)]\r
        `,children:[e.jsxs(_,{children:["Annual proforma —"," ",i?"owner-occupied":"full investment"]}),e.jsxs("div",{className:"p-5 sm:p-6 lg:p-8 text-[#111827]",children:[e.jsx(h,{label:`Gross potential rent (${i?"3":"4"} units)`,value:f(a.gpr),valueColor:"text-[#b98a2f]"}),e.jsx(h,{label:"Less vacancy allowance",value:`–${f(a.vacLoss)}`,valueColor:"text-red-500"}),e.jsx(h,{label:"Effective gross income",value:f(a.egi),valueColor:"text-[#b98a2f]"}),e.jsx(h,{label:"Property taxes (est.)",value:"–$8,000",valueColor:"text-red-500"}),e.jsx(h,{label:"Insurance (est.)",value:"–$4,000",valueColor:"text-red-500"}),e.jsx(h,{label:"Maintenance & repairs (est.)",value:"–$6,000",valueColor:"text-red-500"}),e.jsx(h,{label:"Property management (8%)",value:i?"$0":`–${f(a.mgmt)}`,valueColor:i?"text-[#111827]":"text-red-500"}),e.jsx(h,{label:"Net operating income",value:f(a.noi),labelBold:!0,valueColor:"text-[#b98a2f]",mt:"pt-1"}),e.jsx(h,{label:"Annual debt service",value:`–${f(a.ads)}`,valueColor:"text-red-500",mt:"mt-3"}),e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-5 pb-4",children:[e.jsx("span",{className:"text-[15px] text-[#111827] font-semibold",children:i?"Annual out-of-pocket":"Annual cash flow"}),e.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[e.jsx("span",{className:`px-3 py-1.5 rounded-full text-[10px] tracking-[0.14em] border font-semibold

                        ${p?"text-emerald-600 border-emerald-200 bg-emerald-50":i&&a.cf>-800*12?"text-[#b98a2f] border-[#ead9ae] bg-[#faf7ef]":"text-red-500 border-red-200 bg-red-50"}
                    `,children:i?p?"SURPLUS":a.cf>-800*12?"LOW COST":"OUT-OF-POCKET":p?"POSITIVE":a.cf>-5e3?"MARGINAL":"NEGATIVE"}),e.jsx("span",{className:`text-[20px] sm:text-[22px] font-['Cormorant_Garamond',serif]

                        ${p?"text-emerald-600":i&&a.cf>-800*12?"text-[#b98a2f]":"text-red-500"}
                    `,children:f(a.cf)})]})]}),e.jsx("div",{className:"w-full h-2 bg-[#eef1f5] overflow-hidden rounded-full",children:e.jsx("div",{className:`
                        h-full
                        rounded-full
                        transition-all
                        duration-500

                        ${p?"bg-gradient-to-r from-emerald-400 to-emerald-500":i&&a.cf>-800*12?"bg-gradient-to-r from-[#d4a547] to-[#b98a2f]":"bg-gradient-to-r from-red-400 to-red-500"}
                    `,style:{width:i?p?"88%":a.cf>-800*12?"78%":"100%":p?"72%":a.cf>-5e3?"64%":"57%"}})}),i&&e.jsxs("div",{className:`\r
                        mt-8\r
                        border\r
                        border-[#ead9ae]\r
                        bg-[#faf7ef]\r
                        rounded-[20px]\r
                        sm:rounded-[24px]\r
                        p-5\r
                        sm:p-6\r
                    `,children:[e.jsx("div",{className:"text-[12px] uppercase tracking-[0.14em] text-[#b98a2f] mb-5 font-semibold",children:"Owner-occupier perspective"}),[{label:"Monthly mortgage payment",val:`–$${Math.round(a.monthlyMortgage).toLocaleString()}/mo`,cls:"text-red-500"},{label:"Monthly rental income (3 units)",val:`+$${Math.round(a.monthlyRentalIncome).toLocaleString()}/mo`,cls:"text-emerald-600"},{label:"Monthly out-of-pocket",val:a.cf>=0?`+$${Math.round(a.cf/12).toLocaleString()}/mo surplus`:`–$${Math.round(Math.abs(a.cf)/12).toLocaleString()}/mo`,cls:a.cf>=0?"text-emerald-600":"text-red-500"},{label:"Tenants cover % of mortgage",val:`${Math.round(a.coverPct)}% of mortgage covered`,cls:"text-[#b98a2f]"},{label:"vs. renting a 3-bed in Lethbridge",val:a.saving>0?`Save ~$${Math.round(a.saving).toLocaleString()}/mo vs renting`:`~$${Math.round(Math.abs(a.saving)).toLocaleString()}/mo more than renting`,cls:a.saving>0?"text-red-500":"text-emerald-600"},{label:"Owner-occ. mortgage rate advantage",val:"~0.5–1% lower rate possible",cls:"text-[#b98a2f]"}].map(r=>e.jsxs("div",{className:`\r
                                flex\r
                                flex-col\r
                                sm:flex-row\r
                                sm:items-center\r
                                justify-between\r
                                gap-2\r
                                sm:gap-5\r
                                py-3\r
                                border-b\r
                                border-[#eadfca]\r
                                last:border-b-0\r
                            `,children:[e.jsx("span",{className:"text-[13px] text-[#6b7280]",children:r.label}),e.jsx("strong",{className:`text-[13px] font-semibold sm:text-right ${r.cls}`,children:r.val})]},r.label))]})]})]})]}),e.jsxs("div",{className:"min-w-0",children:[e.jsx(w,{children:"Adjust Assumptions"}),e.jsxs("div",{className:`\r
            bg-white\r
            border\r
            border-[#ebe7df]\r
            rounded-[24px]\r
            sm:rounded-[28px]\r
            lg:rounded-[32px]\r
            overflow-hidden\r
            shadow-[0_20px_60px_rgba(15,23,42,0.06)]\r
        `,children:[e.jsx(_,{children:"Interactive calculator"}),e.jsxs("div",{className:"p-5 sm:p-6 lg:p-8",children:[e.jsx(B,{label:"Rent per unit / month",min:1e3,max:2e3,step:25,value:g,onChange:Z,displayValue:`$${g.toLocaleString()}`,hintLeft:"$1,000",hintCenter:{label:"▲ CMHC avg $1,682",className:"text-[#b98a2f]"},hintRight:"$2,000"}),e.jsx(B,{label:"Down payment",min:0,max:50,step:5,value:u,onChange:ee,displayValue:`${u}% · $${Math.round(n*u/100).toLocaleString()}`,hintLeft:"0%",hintRight:"50%"}),e.jsx(B,{label:"Mortgage rate",min:2,max:8,step:.25,value:v,onChange:re,displayValue:`${v.toFixed(2)}%`,hintLeft:"2.00%",hintRight:"8.00%"}),e.jsx(B,{label:"Vacancy rate",min:2,max:12,step:1,value:$,onChange:ae,displayValue:`${$}%`,hintLeft:"2%",hintRight:"12%"}),e.jsx(Y,{title:"Break-even rent to achieve positive cash flow",value:`$${a.breakEvenRent.toLocaleString()}/unit/mo`,note:"at current down payment & rate assumptions"}),e.jsx(Y,{title:"Break-even purchase price at $1,650/unit/mo",value:"~$870,000",note:"suggested negotiation floor for cash flow neutrality",valueClass:"text-[#111827]"})]})]})]})]}),e.jsxs(w,{children:[l," market context"]}),e.jsxs("div",{className:"grid lg:grid-cols-2 gap-10 mb-14",children:[e.jsxs("div",{className:"bg-white border border-[#ebe7df] rounded-[32px] overflow-hidden shadow-[0_20px_60px_rgba(15,23,42,0.06)]",children:[e.jsxs(_,{children:["Rental rate growth — ",l]}),e.jsxs("div",{className:"p-8",children:[e.jsx("div",{className:"relative w-full h-[240px]",children:e.jsx("canvas",{ref:V})}),e.jsxs("div",{className:"mt-6 flex flex-wrap gap-3",children:[e.jsxs("div",{className:"bg-[#faf7ef] border border-[#ead9ae] px-4 py-2 rounded-full text-[11px] uppercase tracking-[0.12em] text-[#b98a2f] font-semibold",children:[S," Units"]}),e.jsxs("div",{className:"bg-[#faf7ef] border border-[#ead9ae] px-4 py-2 rounded-full text-[11px] uppercase tracking-[0.12em] text-[#b98a2f] font-semibold",children:[m," Bed Units"]}),e.jsxs("div",{className:"bg-[#faf7ef] border border-[#ead9ae] px-4 py-2 rounded-full text-[11px] uppercase tracking-[0.12em] text-[#b98a2f] font-semibold",children:["Rent: $",Number(g).toLocaleString(),"/mo"]})]}),e.jsxs("p",{className:"mt-[22px] text-[14px] leading-[1.9] text-[#6b7280]",children:["Rental demand in"," ",e.jsx("span",{className:"text-[#b98a2f] font-medium",children:l})," ","continues to remain stable for"," ",m,"-bedroom rental inventory. Based on the current projected rent of"," ",e.jsxs("span",{className:"text-[#b98a2f] font-medium",children:["$",Number(g).toLocaleString(),"/month"]})," ","across"," ",e.jsxs("span",{className:"text-[#b98a2f] font-medium",children:[S," units"]}),", this property demonstrates strong long-term rental positioning for an income-focused investor."]})]})]}),e.jsxs("div",{className:"bg-white border border-[#ebe7df] rounded-[32px] overflow-hidden shadow-[0_20px_60px_rgba(15,23,42,0.06)]",children:[e.jsx(_,{children:"Property value appreciation"}),e.jsxs("div",{className:"p-8",children:[e.jsx("div",{className:"relative w-full h-[240px]",children:e.jsx("canvas",{ref:z})}),e.jsxs("div",{className:"mt-6 grid grid-cols-2 gap-4",children:[e.jsxs("div",{className:"border border-[#ebe7df] rounded-[22px] p-5 bg-[#fafafa]",children:[e.jsx("div",{className:"text-[10px] uppercase tracking-[0.14em] text-[#9ca3af] mb-3",children:"Current Asking"}),e.jsxs("div",{className:"text-[32px] font-['Cormorant_Garamond',serif] text-[#b98a2f] leading-none",children:["$",n.toLocaleString()]})]}),e.jsxs("div",{className:"border border-[#ebe7df] rounded-[22px] p-5 bg-[#fafafa]",children:[e.jsx("div",{className:"text-[10px] uppercase tracking-[0.14em] text-[#9ca3af] mb-3",children:"Price Per Door"}),e.jsxs("div",{className:"text-[32px] font-['Cormorant_Garamond',serif] text-[#111827] leading-none",children:["$",Math.round(n/Number(S)).toLocaleString()]})]})]}),e.jsxs("p",{className:"mt-[22px] text-[14px] leading-[1.9] text-[#6b7280]",children:["Historical appreciation trends in"," ",e.jsxs("span",{className:"text-[#b98a2f] font-medium",children:[l,", ",C]})," ","suggest continued long-term upside potential for well-located multi-family properties. At an asking price of"," ",e.jsxs("span",{className:"text-[#b98a2f] font-medium",children:["$",n.toLocaleString()]}),", this asset may provide both equity growth and rental income expansion over time."]})]})]})]}),e.jsx(w,{children:"5-year equity projection"}),e.jsxs("div",{className:"bg-white border border-[#ebe7df] rounded-[32px] overflow-hidden mb-14 shadow-[0_20px_60px_rgba(15,23,42,0.06)]",children:[e.jsx(_,{children:"Estimated equity at sale (assuming 7% annual appreciation)"}),e.jsxs("div",{className:"p-8",children:[e.jsxs("div",{className:"grid md:grid-cols-3 gap-4 mb-8",children:[e.jsxs("div",{className:"border border-[#ebe7df] rounded-[22px] p-5 bg-[#fafafa]",children:[e.jsx("div",{className:"text-[10px] uppercase tracking-[0.14em] text-[#9ca3af] mb-3",children:"Purchase Price"}),e.jsxs("div",{className:"text-[34px] leading-none font-['Cormorant_Garamond',serif] text-[#111827]",children:["$",n.toLocaleString()]})]}),e.jsxs("div",{className:"border border-[#ebe7df] rounded-[22px] p-5 bg-[#fafafa]",children:[e.jsx("div",{className:"text-[10px] uppercase tracking-[0.14em] text-[#9ca3af] mb-3",children:"Estimated Appreciation"}),e.jsx("div",{className:"text-[34px] leading-none font-['Cormorant_Garamond',serif] text-[#b98a2f]",children:"7% / year"})]}),e.jsxs("div",{className:"border border-[#ebe7df] rounded-[22px] p-5 bg-[#fafafa]",children:[e.jsx("div",{className:"text-[10px] uppercase tracking-[0.14em] text-[#9ca3af] mb-3",children:"5-Year Strategy"}),e.jsx("div",{className:"text-[34px] leading-none font-['Cormorant_Garamond',serif] text-[#111827]",children:"Long-Term Hold"})]})]}),e.jsx("div",{className:"relative w-full h-[320px] bg-[#fcfcfc] border border-[#ebe7df] rounded-[26px] p-5",children:e.jsx("canvas",{ref:H})}),e.jsxs("p",{className:"mt-[24px] text-[14px] leading-[1.9] text-[#6b7280]",children:["This projection illustrates estimated equity growth assuming a conservative annual appreciation rate of"," ",e.jsx("span",{className:"text-[#b98a2f] font-medium",children:"7%"}),". Equity is calculated using projected property appreciation combined with mortgage principal paydown over time. While market conditions can vary, well-positioned multi-family assets in"," ",e.jsx("span",{className:"text-[#b98a2f] font-medium",children:l})," ","may continue benefiting from long-term demand, population growth, and rental supply constraints."]})]})]}),e.jsx(w,{children:"Investment verdict"}),e.jsxs("div",{className:"bg-white border border-[#ebe7df] rounded-[32px] overflow-hidden mb-14 shadow-[0_20px_60px_rgba(15,23,42,0.06)]",children:[e.jsxs("div",{className:"px-8 pt-8 pb-5 border-b border-[#f1ece2]",children:[e.jsxs("div",{className:"inline-flex items-center gap-2 bg-[#faf7ef] border border-[#ead9ae] rounded-full px-4 py-2 mb-5",children:[e.jsx("div",{className:"w-2 h-2 rounded-full bg-[#b98a2f]"}),e.jsx("span",{className:"text-[11px] uppercase tracking-[0.18em] text-[#b98a2f] font-semibold",children:"Professional Assessment"})]}),e.jsxs("h2",{className:"text-[44px] leading-none font-['Cormorant_Garamond',serif] text-[#111827]",children:["Our assessment —"," ",d]})]}),e.jsxs("div",{className:"p-8",children:[e.jsxs("div",{className:"grid md:grid-cols-3 gap-5 mb-10",children:[e.jsxs("div",{className:"border border-[#ebe7df] rounded-[22px] p-5 bg-[#fafafa]",children:[e.jsx("div",{className:"text-[10px] uppercase tracking-[0.14em] text-[#9ca3af] mb-3",children:"Investment Style"}),e.jsx("div",{className:"text-[30px] leading-none font-['Cormorant_Garamond',serif] text-[#111827]",children:"Appreciation"})]}),e.jsxs("div",{className:"border border-[#ebe7df] rounded-[22px] p-5 bg-[#fafafa]",children:[e.jsx("div",{className:"text-[10px] uppercase tracking-[0.14em] text-[#9ca3af] mb-3",children:"Market Position"}),e.jsx("div",{className:"text-[30px] leading-none font-['Cormorant_Garamond',serif] text-[#b98a2f]",children:"Multi-Family"})]}),e.jsxs("div",{className:"border border-[#ebe7df] rounded-[22px] p-5 bg-[#fafafa]",children:[e.jsx("div",{className:"text-[10px] uppercase tracking-[0.14em] text-[#9ca3af] mb-3",children:"Cash Flow Status"}),e.jsx("div",{className:`text-[30px] leading-none font-['Cormorant_Garamond',serif]
                    ${p?"text-emerald-500":"text-red-500"}`,children:p?"Positive":"Negative"})]})]}),e.jsx("div",{className:"grid lg:grid-cols-2 gap-8 mb-10",children:[{title:"Strengths",titleColor:"text-emerald-500",bg:"bg-emerald-50",border:"border-emerald-100",marker:"+",markerColor:"text-emerald-500",items:["Turn-key multi-family asset with strong long-term rental positioning","Separately metered utilities reduce landlord operating exposure",`${m}-bedroom rental inventory remains in demand across ${l}`,"Opportunity to optimize future rents toward market levels",`${l} continues showing strong population and rental growth`,"Off-street parking and functional layout improve tenant retention","Long-term appreciation potential supports equity accumulation"]},{title:"Concerns",titleColor:"text-red-500",bg:"bg-red-50",border:"border-red-100",marker:"–",markerColor:"text-red-500",items:["Current financing environment pressures near-term cash flow","Debt coverage may fall below ideal lender thresholds","Price per door remains elevated relative to some competing inventory","Vacancy or tenant turnover could temporarily impact returns","Operating expenses may increase over time with inflation","Strong performance depends on maintaining market-level rents"]}].map(r=>e.jsxs("div",{className:`border ${r.border} ${r.bg} rounded-[26px] p-7`,children:[e.jsx("div",{className:`uppercase tracking-[0.16em] text-[12px] mb-6 font-semibold ${r.titleColor}`,children:r.title}),e.jsx("ul",{className:"list-none p-0 m-0 space-y-4",children:r.items.map(s=>e.jsxs("li",{className:"relative pl-6 text-[14px] leading-[1.9] text-[#4b5563]",children:[e.jsx("span",{className:`absolute left-0 top-0 font-semibold ${r.markerColor}`,children:r.marker}),s]},s))})]},r.title))}),e.jsxs("div",{className:"border border-[#ebe7df] rounded-[28px] p-7 bg-[#fafafa]",children:[e.jsx("div",{className:"text-[11px] uppercase tracking-[0.16em] text-[#b98a2f] mb-4",children:"Bottom Line"}),e.jsxs("p",{className:"text-[15px] leading-[2] text-[#4b5563]",children:["This property appears best suited for an investor focused on"," ",e.jsx("span",{className:"text-[#111827] font-semibold",children:"long-term appreciation and equity growth"})," ","rather than immediate aggressive cash flow. Based on the current assumptions, the asset may require moderate monthly support under conventional financing terms, particularly at today’s interest rates. However, continued rental demand in"," ",e.jsx("span",{className:"text-[#b98a2f] font-semibold",children:l})," ","combined with future rent growth, mortgage paydown, and appreciation potential could improve long-term overall returns significantly. Investors should verify current lease amounts, operating expenses, and tenant turnover opportunities before final acquisition decisions."]})]})]})]}),e.jsx(w,{children:"Due diligence checklist"}),e.jsxs("div",{className:"bg-white border border-[#ebe7df] rounded-[32px] overflow-hidden mb-14 shadow-[0_20px_60px_rgba(15,23,42,0.06)]",children:[e.jsx(_,{children:"Questions to ask the listing agent"}),e.jsxs("div",{className:"p-8",children:[e.jsxs("div",{className:"grid md:grid-cols-3 gap-4 mb-8",children:[e.jsxs("div",{className:"border border-[#ebe7df] rounded-[22px] p-5 bg-[#fafafa]",children:[e.jsx("div",{className:"text-[10px] uppercase tracking-[0.14em] text-[#9ca3af] mb-3",children:"Property Type"}),e.jsx("div",{className:"text-[30px] leading-none font-['Cormorant_Garamond',serif] text-[#111827]",children:R})]}),e.jsxs("div",{className:"border border-[#ebe7df] rounded-[22px] p-5 bg-[#fafafa]",children:[e.jsx("div",{className:"text-[10px] uppercase tracking-[0.14em] text-[#9ca3af] mb-3",children:"Market"}),e.jsx("div",{className:"text-[30px] leading-none font-['Cormorant_Garamond',serif] text-[#b98a2f]",children:l})]}),e.jsxs("div",{className:"border border-[#ebe7df] rounded-[22px] p-5 bg-[#fafafa]",children:[e.jsx("div",{className:"text-[10px] uppercase tracking-[0.14em] text-[#9ca3af] mb-3",children:"MLS® Reference"}),e.jsx("div",{className:"text-[30px] leading-none font-['Cormorant_Garamond',serif] text-[#111827]",children:L})]})]}),e.jsx("div",{className:"grid md:grid-cols-2 gap-5",children:["Current monthly rents for all occupied units","Reason and duration for any current vacancy","Lease expiry dates and tenant renewal history","Actual annual property tax and utility costs","Recent repairs, renovations, or deferred maintenance","Roof, furnace, plumbing, and electrical condition","Tenant payment history or arrears concerns","Historical vacancy trends in the building","Insurance claims or prior property damage","Any planned condo, zoning, or municipal changes"].map((r,s)=>e.jsxs("div",{className:"flex items-start gap-4 border border-[#ebe7df] rounded-[22px] p-5 bg-[#fafafa]",children:[e.jsx("div",{className:"w-8 h-8 rounded-full bg-[#faf7ef] border border-[#ead9ae] flex items-center justify-center flex-shrink-0",children:e.jsx("span",{className:"text-[11px] font-semibold text-[#b98a2f]",children:s+1})}),e.jsx("div",{className:"text-[14px] leading-[1.9] text-[#4b5563]",children:r})]},r))}),e.jsxs("div",{className:"mt-8 border border-[#ebe7df] rounded-[24px] p-6 bg-[#fafafa]",children:[e.jsx("div",{className:"text-[11px] uppercase tracking-[0.16em] text-[#b98a2f] mb-4",children:"Why this matters"}),e.jsxs("p",{className:"text-[14px] leading-[2] text-[#6b7280]",children:["Performing thorough due diligence before submitting an offer can significantly reduce investment risk. Reviewing lease agreements, operating expenses, tenant quality, maintenance history, and vacancy trends provides a clearer understanding of the property's true income potential and long-term stability. For multi-family investments in"," ",e.jsx("span",{className:"text-[#b98a2f] font-medium",children:l}),", verifying actual rent rolls and expense statements is especially important when evaluating projected returns."]})]})]})]})]}),e.jsxs("footer",{className:"bg-white border border-[#ebe7df] rounded-[36px] overflow-hidden shadow-[0_20px_60px_rgba(15,23,42,0.06)]",children:[e.jsx("div",{className:"max-w-[1120px] mx-auto p-8 md:p-10",children:e.jsxs("div",{className:"flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10",children:[e.jsxs("div",{className:"flex items-center gap-6",children:[e.jsx("div",{className:"w-[82px] h-[82px] rounded-full overflow-hidden border-4 border-[#f3e4bf] shadow-md flex-shrink-0 bg-[#fafafa]",children:e.jsx("img",{src:"parth_black_suite-removebg-preview.png",alt:"Parth Brahmbhatt",className:"w-full h-full object-cover"})}),e.jsxs("div",{children:[e.jsx("div",{className:"text-[34px] leading-none font-['Cormorant_Garamond',serif] text-[#111827] mb-2",children:"Parth Brahmbhatt"}),e.jsx("div",{className:"text-[#b98a2f] text-[14px] mb-3",children:"The Real Estate Realist · Airdrie & Calgary"}),e.jsx("a",{href:"https://realtorparth.ca",target:"_blank",rel:"noreferrer",className:"text-[#6b7280] text-[14px] no-underline hover:text-[#111827] transition-colors",children:"realtorparth.ca"})]})]}),e.jsxs("div",{className:"flex flex-col sm:flex-row gap-4",children:[e.jsx("a",{href:"https://realtorparth.ca",target:"_blank",rel:"noreferrer",className:`\r
                        no-underline\r
                        px-8\r
                        py-4\r
                        rounded-2xl\r
                        bg-[#111827]\r
                        hover:bg-black\r
                        text-white\r
                        uppercase\r
                        tracking-[0.16em]\r
                        text-[11px]\r
                        font-semibold\r
                        transition-all\r
                        duration-300\r
                        text-center\r
                        shadow-lg\r
                    `,children:"Work With Parth"}),e.jsx("button",{onClick:ie,className:`\r
        px-8\r
        py-4\r
        rounded-2xl\r
        border border-[#d1d5db]\r
        bg-white\r
        hover:bg-[#fafafa]\r
        text-[#111827]\r
        uppercase\r
        tracking-[0.16em]\r
        text-[11px]\r
        font-semibold\r
        transition-all\r
        duration-300\r
        cursor-pointer\r
    `,children:"Share This Report"})]})]})}),e.jsx("div",{className:"border-t border-[#ebe7df] bg-[#fafafa]",children:e.jsxs("div",{className:"max-w-[1120px] mx-auto px-8 md:px-10 py-7",children:[e.jsx("div",{className:"text-[11px] uppercase tracking-[0.16em] text-[#b98a2f] mb-4",children:"Disclaimer"}),e.jsxs("p",{className:"text-[13px] leading-[2] text-[#6b7280]",children:["This report was prepared by"," ",e.jsx("span",{className:"text-[#111827] font-medium",children:"Parth Brahmbhatt, REALTOR®"})," ","using publicly available market data, estimated financial assumptions, and projected investment performance models. All figures, rental projections, appreciation estimates, financing assumptions, and operating costs are illustrative only and should not be considered financial, legal, accounting, or investment advice. Buyers and investors should independently verify all information and consult licensed professionals before making any purchasing or financing decisions. REALTOR®, REALTORS®, and the REALTOR® logo are trademarks controlled by CREA."]})]})})]})]})};export{Ae as default};
