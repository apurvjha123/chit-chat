(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[702],{9129:function(e,t,r){Promise.resolve().then(r.bind(r,1388))},7832:function(e,t,r){"use strict";r.d(t,{Z:function(){return Components_Navbar}});var a=r(7437),s=r(1396),n=r.n(s);r(2265);var d=r(4606),Components_Logout=()=>(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("li",{children:(0,a.jsx)("div",{onClick:()=>{localStorage.removeItem("UserId"),window.location.reload()},className:"block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent",children:"Log Out"})})}),Components_Navbar=()=>(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("div",{children:(0,a.jsx)("nav",{className:"fixed top-0 left-0 w-full border-gray-200 px-2 sm:px-4 py-2.5 rounded",children:(0,a.jsxs)("div",{className:"container flex flex-wrap justify-between items-center mx-auto",children:[(0,a.jsx)(n(),{href:"/dashboard",className:"flex items-center",children:(0,a.jsx)("span",{className:"self-center text-xl font-semibold font-serif px-3 whitespace-nowrap dark:text-white",children:"Chit-Chat"})}),(0,a.jsx)("div",{className:"w-full md:w-auto",id:"navbar-default",children:(0,a.jsxs)("ul",{className:"flex flex-row flex-wrap p-4 mt-4 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700",children:[(0,a.jsx)("li",{children:(0,a.jsx)(n(),{href:"/organization",className:"block py-2 pr-4 pl-3 text-gray-700 hover:text-sky-600  rounded md:bg-transparent md:p-0 dark:text-white",children:"Organizations"})}),(0,a.jsx)("li",{children:(0,a.jsx)(n(),{href:"/addAIData",className:"block py-2 pr-4 pl-3 text-gray-700 hover:text-sky-600  rounded md:bg-transparent md:p-0 dark:text-white",children:"Train Data"})}),(0,a.jsx)("li",{children:(0,a.jsx)(n(),{href:"/docs",className:"block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent",children:"Docs"})}),(0,a.jsx)("li",{children:(0,a.jsx)(n(),{href:"https://github.com/apurvjha123",className:"block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent",children:"About"})}),(0,a.jsx)("li",{children:(0,a.jsx)(n(),{href:"https://github.com/apurvjha123/chit-chat-nextjs",className:"block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent",children:(0,a.jsxs)("div",{className:"flex",children:[(0,a.jsx)(d.rFR,{className:"p-1 text-xl"}),"Contribute"]})})}),(0,a.jsx)(Components_Logout,{})]})})]})})})})},4608:function(e,t,r){"use strict";var a=r(7437);r(2265);var s=r(1396),n=r.n(s);t.Z=()=>(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("div",{className:"flex items-center justify-center h-screen",children:(0,a.jsxs)("div",{className:"bg-white bg-opacity-10 rounded-xl p-8 w-96 shadow-lg backdrop-blur-md",children:[(0,a.jsx)("h2",{className:"text-xl font-bold mb-4",children:"Login Is Require !"}),(0,a.jsx)(n(),{href:"/login",className:"px-4 py-2 rounded bg-white bg-opacity-20 hover:bg-opacity-30 focus:outline-none",children:"Sign Up"})]})})})},9947:function(e,t,r){"use strict";r.d(t,{$9:function(){return getOrganizationById},$u:function(){return fetchs},Fi:function(){return addOrganization},Mo:function(){return SignUp},XU:function(){return getAiModelById},gx:function(){return Auth}});var a=r(9222);let fetchs=async()=>{let e=await a.Z.get("https://chit-chat.tech/api/v1/getAllOrganization");return e.data},getOrganizationById=async e=>{let t=await a.Z.get("https://chit-chat.tech/api/v1/getOrganizationById?UserId=".concat(e));return t.data},getAiModelById=async e=>{let t=await a.Z.get("https://chit-chat.tech/api/v1/getAiModelById?UserId=".concat(e));return t.data},addOrganization=async e=>{let t=await a.Z.post("https://chit-chat.tech/api/v1/newOrganization",e);return t},Auth=async e=>{let t=await a.Z.post("https://chit-chat.tech/register/login",e);return t},SignUp=async e=>{let t=await a.Z.post("https://chit-chat.tech/register/signup",e);return t}},1388:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return page}});var a=r(7437),s=r(7832),n=r(2265);function OrgTemp(e){let{OrganizationName:t,OrganizationPhone:r,OrganizationWebsite:s,createdAt:n}=e;return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("div",{className:"flex justify-center items-center p-3",children:(0,a.jsxs)("div",{className:"max-w-xs bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300",children:[(0,a.jsx)("h1",{className:"text-xl font-semibold mb-2",children:t}),(0,a.jsxs)("div",{className:"mb-3",children:[(0,a.jsx)("span",{className:"font-medium",children:"Phone:"})," ",r]}),(0,a.jsxs)("div",{className:"mb-3",children:[(0,a.jsx)("span",{className:"font-medium",children:"Website:"})," ",s]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("span",{className:"font-medium",children:"Created At:"})," ",new Date(n).toLocaleString()]})]})})})}var d=r(6820),i=r(2410),l=r(4606),o=r(171),dashboard_AiModel=e=>{let{organizationName:t,uploadKnowledge:r,embeddedKnowlege:s,apiKey:c,createdAt:h}=e,[x,m]=(0,n.useState)({organizationName:"",uploadKnowledge:"",embeddedKnowlege:"",apiKey:"",createdAt:""}),[g,p]=(0,n.useState)(!1);return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("div",{className:"flex justify-between",children:(0,a.jsx)("div",{className:"rounded-xl p-2 shadow-xl w-full",children:(0,a.jsxs)("div",{className:"flex justify-between items-center",children:[(0,a.jsx)("div",{className:"flex-none rounded-md mr-2",children:t}),(0,a.jsxs)("div",{className:"flex-grow text-center rounded-md",children:[c.substring(0,4),"...",c.slice(-5),(0,a.jsx)("button",{onClick:()=>{navigator.clipboard.writeText(c.toString()).then(()=>{(0,o.Am)("API Key copied to clipboard!",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"})}).catch(e=>{o.Am.error("Failed to copy API Key!",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"})})},className:"p-2 border text-white rounded active:bg-white",children:(0,a.jsx)("div",{className:"flex",children:(0,a.jsx)(d.fwS,{className:"text-lime-500"})})})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("button",{className:"flex-none rounded-md underline pt-3 text-blue-900",onClick:()=>{m({organizationName:t,uploadKnowledge:r,embeddedKnowlege:s,apiKey:c,createdAt:h}),p(!0)},children:(0,a.jsx)(l.xt8,{})}),g&&(0,a.jsxs)("div",{className:"fixed inset-0 flex items-center justify-center z-50",onClick:()=>p(!1),children:[(0,a.jsx)("div",{className:"absolute inset-0 bg-gray-500 opacity-50 backdrop-blur-md"}),(0,a.jsxs)("div",{className:"relative p-6 bg-white bg-opacity-20 rounded-lg backdrop-blur-md max-w-screen-lg mx-auto",onClick:e=>e.stopPropagation(),children:[(0,a.jsx)("button",{onClick:()=>p(!1),className:"absolute top-4 right-4  text-gray-500 rounded-full p-2 hover:bg-gray-600 focus:outline-none",children:(0,a.jsx)(i.FMH,{})}),(0,a.jsx)("h2",{className:"text-2xl mb-4",children:"Details"}),(0,a.jsxs)("p",{children:[(0,a.jsx)("strong",{children:"Organization Name:"})," ",x.organizationName]}),(0,a.jsxs)("p",{className:"flex",children:[(0,a.jsx)("strong",{children:"Upload Knowledge:"})," ",(0,a.jsx)("div",{className:"text-sky-500 underline",children:x.uploadKnowledge})]}),(0,a.jsxs)("p",{className:"flex",children:[(0,a.jsx)("strong",{children:"Embedded Knowledge:"})," ",(0,a.jsx)("div",{className:"text-sky-500 underline",children:x.embeddedKnowlege})]}),(0,a.jsxs)("p",{children:[(0,a.jsx)("strong",{children:"API Key:"})," ",x.apiKey]}),(0,a.jsxs)("p",{children:[(0,a.jsx)("strong",{children:"Created At:"})," ",new Date(x.createdAt).toLocaleString()]})]})]})]})]})})})})},c=r(9947),h=r(4608),page=()=>{let[e,t]=(0,n.useState)(null);(0,n.useEffect)(()=>{t(localStorage.getItem("UserId"))},[]);let[r,d]=(0,n.useState)({response:{data:[]}}),[i,l]=(0,n.useState)({response:{data:[]}}),value=async()=>{if(e){let t=await (0,c.$9)(e);d(t)}};(0,n.useEffect)(()=>{value()},[e]);let valueAi=async()=>{if(e){let t=await (0,c.XU)(e);l(t)}};return(0,n.useEffect)(()=>{valueAi()},[e]),(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{className:"w-screen min-h-screen bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100",children:[(0,a.jsx)(s.Z,{}),e?(0,a.jsxs)("div",{className:"grid md:grid-cols-7 grid-cols-1 sm:pt-20 pt-52 h-screen shadow-2xl",children:[(0,a.jsxs)("div",{className:"md:col-span-3 overflow-y-auto scrollbar-hide max-h-[calc(100vh-64px)]",children:[(0,a.jsx)("div",{className:"flex justify-center p-2 font-serif text-gray-800 font-bold text-2xl",children:"Organizations"}),(0,a.jsx)("div",{className:" grid grid-cols-2",children:r&&r.response&&r.response.data&&r.response.data.map((e,t)=>(0,a.jsx)(OrgTemp,{OrganizationName:e.OrganizationName,OrganizationPhone:e.OrganizationPhone,OrganizationWebsite:e.OrganizationWebsite,createdAt:e.createdAt},t))})]}),(0,a.jsxs)("div",{className:"md:col-span-4 overflow-y-auto scrollbar-hide max-h-[calc(100vh-64px)]",children:[(0,a.jsx)("div",{className:"flex justify-center p-2 font-serif text-gray-800 font-bold text-2xl",children:"Ai Trained Models"}),(0,a.jsxs)("div",{className:"flex p-3",children:[(0,a.jsx)("div",{className:"text-start py-2 font-bold font-sans",children:"Name"}),(0,a.jsx)("div",{className:"flex-grow text-center py-2 font-bold font-sans",children:"API Key"})]}),(0,a.jsx)("div",{className:"p-4 overflow-y-auto",children:i&&i.response&&i.response.data&&i.response.data.map((e,t)=>(0,a.jsx)(dashboard_AiModel,{organizationName:e.organizationName,uploadKnowledge:e.uploadKnowledge,embeddedKnowlege:e.embeddedKnowlege,apiKey:e.apiKey,createdAt:e.createdAt},t))})]})]}):(0,a.jsx)(h.Z,{})]})})}}},function(e){e.O(0,[447,115,400,438,656,971,864,744],function(){return e(e.s=9129)}),_N_E=e.O()}]);