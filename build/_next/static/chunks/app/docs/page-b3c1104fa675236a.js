(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[726],{6549:function(e,r,t){Promise.resolve().then(t.bind(t,2452))},7832:function(e,r,t){"use strict";t.d(r,{Z:function(){return Components_Navbar}});var a=t(7437),n=t(1396),s=t.n(n);t(2265);var d=t(4606),Components_Logout=()=>(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("li",{children:(0,a.jsx)("div",{onClick:()=>{localStorage.removeItem("UserId"),window.location.reload()},className:"block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent",children:"Log Out"})})}),Components_Navbar=()=>(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("div",{children:(0,a.jsx)("nav",{className:"fixed top-0 left-0 w-full border-gray-200 px-2 sm:px-4 py-2.5 rounded",children:(0,a.jsxs)("div",{className:"container flex flex-wrap justify-between items-center mx-auto",children:[(0,a.jsx)(s(),{href:"/dashboard",className:"flex items-center",children:(0,a.jsx)("span",{className:"self-center text-xl font-semibold font-serif px-3 whitespace-nowrap dark:text-white",children:"Chit-Chat"})}),(0,a.jsx)("div",{className:"w-full md:w-auto",id:"navbar-default",children:(0,a.jsxs)("ul",{className:"flex flex-row flex-wrap p-4 mt-4 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 dark:border-gray-400",children:[(0,a.jsx)("li",{children:(0,a.jsx)(s(),{href:"/organization",className:"block py-2 pr-4 pl-3 text-gray-700 hover:text-sky-600  rounded md:bg-transparent md:p-0 dark:text-white",children:"Organizations"})}),(0,a.jsx)("li",{children:(0,a.jsx)(s(),{href:"/addAIData",className:"block py-2 pr-4 pl-3 text-gray-700 hover:text-sky-600  rounded md:bg-transparent md:p-0 dark:text-white",children:"Train Data"})}),(0,a.jsx)("li",{children:(0,a.jsx)(s(),{href:"/docs",className:"block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent",children:"Docs"})}),(0,a.jsx)("li",{children:(0,a.jsx)(s(),{href:"https://github.com/apurvjha123",className:"block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent",children:"About"})}),(0,a.jsx)("li",{children:(0,a.jsx)(s(),{href:"https://github.com/apurvjha123/chit-chat-nextjs",className:"block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent",children:(0,a.jsxs)("div",{className:"flex",children:[(0,a.jsx)(d.rFR,{className:"p-1 text-xl"}),"Contribute"]})})}),(0,a.jsx)(Components_Logout,{})]})})]})})})})},2452:function(e,r,t){"use strict";t.r(r);var a=t(7437),n=t(2265),s=t(7832),d=t(3282);t(529),t(2943);var o=t(6820),l=t(9133),i=t(1396),c=t.n(i);r.default=()=>{let e=(0,n.useRef)(null);return(0,n.useEffect)(()=>{e.current&&(d.Z.registerLanguage("javascript",l.Z),d.Z.highlightBlock(e.current))},[]),(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{className:"w-screen min-h-screen bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100",children:[(0,a.jsx)(s.Z,{}),(0,a.jsx)("div",{className:"sm:min-h-screen min-h-[54rem] flex items-center justify-center bg-opacity-50 p-4 sm:pt-28 lg:pt-30",children:(0,a.jsxs)("div",{className:"relative w-full max-w-xl mx-auto",children:[(0,a.jsxs)("div",{className:"absolute top-[-50px] left-0 space-x-4 bg-opacity-40 bg-white backdrop-blur-md rounded px-4 py-2 flex flex-row",children:[(0,a.jsx)(c(),{href:"/docs",children:(0,a.jsx)("button",{className:"mr-4 hover:text-pink-500 text-black font-semibold px-4 py-2 rounded",children:"API"})}),(0,a.jsx)(c(),{href:"/docs/cdn",children:(0,a.jsx)("button",{className:"hover:text-pink-500 text-black font-semibold px-4 py-2 rounded",children:"CDN"})})]}),(0,a.jsx)("button",{onClick:()=>{if(e.current){let r=e.current.innerText;navigator.clipboard.writeText(r)}},className:"absolute top-2 right-2 bg-white p-2 rounded-full active:bg-pink-500 hover:bg-gray-200 transition duration-300 ease-in-out z-10",children:(0,a.jsx)(o.fwS,{className:"text-pink-200 active:text-black"})}),(0,a.jsx)("div",{className:"relative z-0",children:(0,a.jsx)("pre",{ref:e,className:"overflow-auto rounded-lg shadow-xl hljs p-2 sm:text-base text-sm w-full",children:(0,a.jsx)("code",{children:'   async function generateAnswer(userQuestion, apiKey) {\n      let chatAPIUrl = `https://chit-chat.tech/api/v1/QnARetrieval?key={apiKey}`;\n\n      const payloadBody = {\n          prompt: userQuestion,\n      };\n\n      const response = await fetch(chatAPIUrl, {\n          method: "POST",\n          headers: {\n              "Content-Type": "application/json",\n          },\n          body: JSON.stringify(payloadBody),\n      });\n\n      const jsonData = await response.json();\n  }'})})})]})})]})})}},2943:function(){}},function(e){e.O(0,[447,115,438,84,971,864,744],function(){return e(e.s=6549)}),_N_E=e.O()}]);