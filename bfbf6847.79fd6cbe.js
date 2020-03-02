(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{112:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return d}));var r=n(1),o=n(6),a=(n(0),n(122)),i={id:"getting-started",title:"Getting Started",sidebar_label:"Getting Started"},c={id:"node-red/getting-started",title:"Getting Started",description:"Node-RED is an automation engine where you can visually design and monitor automation workflows.",source:"@site/docs/node-red/getting-started.md",permalink:"/home-assistant-cookbook/docs/node-red/getting-started",sidebar_label:"Getting Started",sidebar:"docs",previous:{title:"Switches",permalink:"/home-assistant-cookbook/docs/home-assistant/examples/switches"},next:{title:"Bathroom",permalink:"/home-assistant-cookbook/docs/node-red/examples/bathroom"}},l=[{value:"Installing Node-RED",id:"installing-node-red",children:[]}],s={rightToc:l};function d(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Node-RED is an automation engine where you can visually design and monitor automation workflows."),Object(a.b)("h2",{id:"installing-node-red"},"Installing Node-RED"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Visit your Home Assistant website (ex. ",Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"http://homeassistant.local:8123"}),"http://homeassistant.local:8123"),")"),Object(a.b)("li",{parentName:"ol"},"Click ",Object(a.b)("inlineCode",{parentName:"li"},"Supervisor | Add-on Store")," "),Object(a.b)("li",{parentName:"ol"},"Search for and install the ",Object(a.b)("inlineCode",{parentName:"li"},"Node-RED")," add-on"),Object(a.b)("li",{parentName:"ol"},"Under config, provide a credential_secret and set ssl to false"),Object(a.b)("li",{parentName:"ol"},"Click ",Object(a.b)("inlineCode",{parentName:"li"},"show in sidebar")," and then ",Object(a.b)("inlineCode",{parentName:"li"},"Start"))))}d.isMDXComponent=!0},122:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),d=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},p=function(e){var t=d(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=d(n),b=r,m=p["".concat(i,".").concat(b)]||p[b]||u[b]||a;return n?o.a.createElement(m,c({ref:t},s,{components:n})):o.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);