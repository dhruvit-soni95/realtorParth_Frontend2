import{r as t,j as e}from"./utilities-CctrEpBK.js";import{b as g,d as b,O as w}from"./react-LWYCItZ7.js";import{c as l,u as y,C as v,X as j,H as N,e as k,f as C,g as S}from"./index-Lk1orLNk.js";import L from"./Login-BHpo1qwm.js";import{C as M}from"./chevron-right-BqO3LQWL.js";import{F as z}from"./file-text-C718BFKK.js";import{B as A}from"./building-2-D70kth3N.js";import{B as I}from"./book-open-DyMD5h4_.js";import{U as O}from"./users-FzDNx8ny.js";import{C as $}from"./calculator-BEUB0f4h.js";import{M as D}from"./message-circle-question-CTHORL4S.js";import{I as W,W as B}from"./wand-2-BynHKp3T.js";import"./supabase-DWWbfOGS.js";import"./eye-DOVhI3--.js";/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E=l("FolderKanban",[["path",{d:"M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z",key:"1fr9dc"}],["path",{d:"M8 10v4",key:"tgpxqk"}],["path",{d:"M12 10v2",key:"hh53o1"}],["path",{d:"M16 10v6",key:"1d6xys"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F=l("LayoutDashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H=l("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V=l("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);function ne(){var d,c;const{user:a}=y(),h=g(),[i,s]=t.useState(!1),[n,x]=t.useState(!1),[o,m]=t.useState(null);t.useEffect(()=>{const r=localStorage.getItem("adminEmail");m(!!r)},[]);const p=async()=>{localStorage.removeItem("adminEmail"),h("/")};if(o===null)return e.jsx("div",{className:`\r
                min-h-screen\r
                flex items-center justify-center\r
                bg-gray-100\r
            `,children:e.jsx("p",{className:"text-gray-500",children:"Checking authentication..."})});if(!o)return e.jsx(L,{});const f=[{icon:F,label:"Dashboard",path:"/admin"},{icon:E,label:"Transactions",path:"/admin/transactions"},{icon:z,label:"Blog Posts",path:"/admin/blogs"},{icon:A,label:"Neighborhoods",path:"/admin/community-list"},{icon:I,label:"Resources",path:"/admin/resources"},{icon:N,label:"Listings",path:"/admin/listings"},{icon:O,label:"Leads",path:"/admin/leads"},{icon:$,label:"Home Valuations",path:"/admin/home-valuations"},{icon:D,label:"FAQs",path:"/admin/faqs"},{icon:k,label:"Testimonials",path:"/admin/testimonials"},{icon:W,label:"Social Post",path:"/admin/socialpost"},{icon:B,label:"Image Design",path:"/admin/createimage"},{icon:C,label:"Newsletter",path:"/admin/subscriptions"},{icon:V,label:"Settings",path:"/admin/settings"}];return e.jsxs("div",{className:`\r
        h-screen\r
        bg-gray-100\r
        flex\r
        overflow-hidden\r
    `,children:[i&&e.jsx("div",{className:`\r
                    fixed inset-0\r
                    bg-black/50\r
                    backdrop-blur-sm\r
                    z-40\r
                    lg:hidden\r
                `,onClick:()=>s(!1)}),e.jsx("aside",{className:`
                fixed lg:sticky lg:top-0
                inset-y-0 left-0 z-50
                h-screen
                bg-charcoal-dark
                text-white
                shadow-2xl
                transition-all duration-300 ease-in-out
                flex-shrink-0
                overflow-hidden
                ${n?"lg:w-[92px] w-72 sm:w-64":"w-72 sm:w-64"}
                ${i?"translate-x-0":"-translate-x-full lg:translate-x-0"}
            `,children:e.jsxs("div",{className:`\r
                h-full\r
                flex flex-col\r
                overflow-hidden\r
            `,children:[e.jsxs("div",{className:`
                        border-b border-white/10
                        flex items-center
                        flex-shrink-0
                        ${n?"lg:justify-center justify-between p-4":"justify-between p-5 sm:p-6"}
                    `,children:[(!n||typeof window<"u"&&window.innerWidth<1024)&&e.jsxs("div",{className:"min-w-0",children:[e.jsx("h1",{className:`\r
                                text-xl font-bold\r
                                tracking-wider\r
                                truncate\r
                            `,children:"ADMIN"}),e.jsx("p",{className:`\r
                                text-xs text-gray-400 mt-1\r
                            `,children:"Dashboard Panel"})]}),e.jsx("button",{onClick:()=>x(!n),className:`\r
                            hidden lg:flex\r
                            w-10 h-10\r
                            rounded-xl\r
                            hover:bg-white/10\r
                            transition-colors\r
                            items-center justify-center\r
                            flex-shrink-0\r
                        `,children:n?e.jsx(M,{className:"w-5 h-5"}):e.jsx(v,{className:"w-5 h-5"})}),e.jsx("button",{onClick:()=>s(!1),className:`\r
                            lg:hidden\r
                            w-9 h-9\r
                            rounded-lg\r
                            hover:bg-white/10\r
                            flex items-center justify-center\r
                        `,children:e.jsx(j,{className:"w-5 h-5"})})]}),e.jsx("div",{className:`\r
                    flex-1\r
                    overflow-y-auto\r
                    overflow-x-hidden\r
                    custom-scrollbar\r
                `,children:e.jsx("nav",{className:`
                            py-5 space-y-1.5
                            overflow-x-hidden
                            ${n?"lg:px-2 px-3 sm:px-4":"px-3 sm:px-4"}
                        `,children:f.map(r=>e.jsxs(b,{to:r.path,end:r.path==="/admin",onClick:()=>s(!1),className:({isActive:u})=>`
                                        relative
                                        flex items-center
                                        rounded-2xl
                                        transition-all duration-200
                                        group
                                        overflow-hidden
                                        ${n?"lg:justify-center lg:px-3 lg:py-4 gap-3 px-4 py-3":"gap-3 px-4 py-3"}
                                        ${u?"bg-bronze text-white shadow-lg":"text-gray-400 hover:bg-white/5 hover:text-white"}
                                    `,children:[e.jsx(r.icon,{className:`\r
                                    w-5 h-5\r
                                    flex-shrink-0\r
                                `}),(!n||typeof window<"u"&&window.innerWidth<1024)&&e.jsx("span",{className:`\r
                                        font-medium\r
                                        text-sm sm:text-base\r
                                        truncate\r
                                    `,children:r.label}),n&&e.jsx("div",{className:`\r
                                            hidden lg:block\r
                                            fixed\r
                                            left-[100px]\r
                                            whitespace-nowrap\r
                                            bg-black\r
                                            text-white\r
                                            text-sm\r
                                            px-3 py-2\r
                                            rounded-xl\r
                                            opacity-0\r
                                            pointer-events-none\r
                                            group-hover:opacity-100\r
                                            transition-opacity\r
                                            z-[9999]\r
                                        `,children:r.label})]},r.path))})}),e.jsxs("div",{className:`\r
                    p-4\r
                    border-t border-white/10\r
                    bg-black/10\r
                    flex-shrink-0\r
                `,children:[e.jsxs("div",{className:`
                            rounded-2xl
                            bg-white/5
                            mb-3
                            overflow-hidden
                            ${n?"lg:p-3 lg:flex lg:justify-center flex items-center gap-3 px-3 py-3":"flex items-center gap-3 px-3 py-3"}
                        `,children:[e.jsx("div",{className:`\r
                            w-10 h-10\r
                            rounded-full\r
                            bg-bronze/20\r
                            flex items-center justify-center\r
                            text-bronze\r
                            font-bold\r
                            text-sm\r
                            flex-shrink-0\r
                        `,children:((c=(d=a==null?void 0:a.email)==null?void 0:d[0])==null?void 0:c.toUpperCase())||"A"}),(!n||typeof window<"u"&&window.innerWidth<1024)&&e.jsxs("div",{className:`\r
                                overflow-hidden min-w-0\r
                            `,children:[e.jsx("p",{className:`\r
                                    text-sm font-medium\r
                                    truncate text-white\r
                                `,children:a==null?void 0:a.email}),e.jsx("p",{className:`\r
                                    text-xs text-gray-400\r
                                `,children:"Administrator"})]})]}),e.jsxs("button",{onClick:p,className:`
                            w-full
                            text-red-400
                            hover:bg-red-500/10
                            rounded-2xl
                            transition-all duration-200
                            overflow-hidden
                            ${n?"lg:flex lg:justify-center lg:p-3 flex items-center gap-3 px-4 py-3":"flex items-center gap-3 px-4 py-3"}
                        `,children:[e.jsx(H,{className:`\r
                            w-5 h-5\r
                            flex-shrink-0\r
                        `}),(!n||typeof window<"u"&&window.innerWidth<1024)&&e.jsx("span",{className:"font-medium",children:"Sign Out"})]})]})]})}),e.jsxs("div",{className:`\r
            flex-1\r
            flex flex-col\r
            h-screen\r
            min-w-0\r
            overflow-hidden\r
        `,children:[e.jsxs("header",{className:`\r
                lg:hidden\r
                sticky top-0 z-30\r
                bg-white/95\r
                backdrop-blur-md\r
                border-b border-gray-200\r
                px-4 py-3\r
                flex items-center justify-between\r
                shadow-sm\r
            `,children:[e.jsx("button",{onClick:()=>s(!0),className:`\r
                        w-10 h-10\r
                        rounded-xl\r
                        hover:bg-gray-100\r
                        flex items-center justify-center\r
                        transition-colors\r
                        text-charcoal-dark\r
                    `,children:e.jsx(S,{className:"w-6 h-6"})}),e.jsx("div",{className:"text-center",children:e.jsx("h2",{className:`\r
                        font-bold\r
                        text-charcoal-dark\r
                        text-sm sm:text-base\r
                    `,children:"Admin Dashboard"})}),e.jsx("div",{className:"w-10"})]}),e.jsx("main",{className:`\r
                flex-1\r
                h-screen\r
                overflow-y-auto\r
                overflow-x-hidden\r
                main-scrollbar\r
            `,children:e.jsx("div",{className:`\r
                    p-4 sm:p-5 lg:p-8\r
                    max-w-full\r
                `,children:e.jsx(w,{})})})]})]})}export{ne as default};
