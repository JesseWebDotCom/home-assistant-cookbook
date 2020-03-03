(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{101:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return d})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var i=n(1),a=n(6),r=(n(0),n(126)),o=n(128),c={id:"outdoor",title:"Outdoor"},d={id:"node-red/examples/outdoor",title:"Outdoor",description:"import useBaseUrl from '@docusaurus/useBaseUrl';",source:"@site/docs/node-red/examples/outdoor.md",permalink:"/home-assistant-cookbook/docs/node-red/examples/outdoor",sidebar:"docs",previous:{title:"Motion",permalink:"/home-assistant-cookbook/docs/node-red/examples/lighting/motion"},next:{title:"Tutorials",permalink:"/home-assistant-cookbook/docs/node-red/tutorials/getting-started"}},l=[{value:"Nighttime Lighting",id:"nighttime-lighting",children:[]},{value:"Dim Nighttime Lighting",id:"dim-nighttime-lighting",children:[]},{value:"Turn off Nighttime Lighting",id:"turn-off-nighttime-lighting",children:[]}],s={rightToc:l};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Misc automations specifically for the outdoors."),Object(r.b)("h2",{id:"nighttime-lighting"},"Nighttime Lighting"),Object(r.b)("p",null,"Turn a light when at 6PM."),Object(r.b)("div",{className:"admonition admonition-tip"},Object(r.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("div",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(i.a)({parentName:"div"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"Usage Ideas")),Object(r.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("ul",{parentName:"div"},Object(r.b)("li",{parentName:"ul"},"Front door lighting"),Object(r.b)("li",{parentName:"ul"},"Walkway lighting")))),Object(r.b)("img",{alt:"Max Timeout",src:Object(o.a)("img/outdoor-nighttime.png")}),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-json"}),'[{"id":"81fc9d3f.b51d","type":"inject","z":"dde1d524.9cc4d","name":"6PM","topic":"","payload":"","payloadType":"date","repeat":"","crontab":"00 18 * * *","once":false,"onceDelay":0.1,"x":110,"y":340,"wires":[["595d1171.d40c3"]]},{"id":"595d1171.d40c3","type":"api-call-service","z":"dde1d524.9cc4d","name":"Turn on light at 100% brightness","server":"a77b5e9d.0c69","version":1,"debugenabled":false,"service_domain":"light","service":"turn_on","entityId":"light.living_room_lamp","data":"{\\"brightness_pct\\":\\"100\\"}","dataType":"json","mergecontext":"","output_location":"","output_location_type":"none","mustacheAltTags":false,"x":340,"y":340,"wires":[[]]},{"id":"a77b5e9d.0c69","type":"server","z":"","name":"Home Assistant","addon":true}]\n')),Object(r.b)("h2",{id:"dim-nighttime-lighting"},"Dim Nighttime Lighting"),Object(r.b)("p",null,"Dim the light at 9PM."),Object(r.b)("img",{alt:"Dim Nightime",src:Object(o.a)("img/outdoor-nighttime-dim.png")}),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-json"}),'[{"id":"ac717fc5.498ff8","type":"inject","z":"dde1d524.9cc4d","name":"9PM","topic":"","payload":"","payloadType":"date","repeat":"","crontab":"00 21 * * *","once":false,"onceDelay":0.1,"x":110,"y":440,"wires":[["f2f34bae.edb748"]]},{"id":"f2f34bae.edb748","type":"api-call-service","z":"dde1d524.9cc4d","name":"Set light brightness to 50%","server":"a77b5e9d.0c69","version":1,"debugenabled":false,"service_domain":"light","service":"turn_on","entityId":"light.living_room_lamp","data":"{\\"brightness_pct\\":\\"50\\"}","dataType":"json","mergecontext":"","output_location":"","output_location_type":"none","mustacheAltTags":false,"x":320,"y":440,"wires":[[]]},{"id":"a77b5e9d.0c69","type":"server","z":"","name":"Home Assistant","addon":true}]\n')),Object(r.b)("h2",{id:"turn-off-nighttime-lighting"},"Turn off Nighttime Lighting"),Object(r.b)("p",null,"Turn off the light at 11PM."),Object(r.b)("img",{alt:"Nightime Off",src:Object(o.a)("img/outdoor-nighttime-off.png")}),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-json"}),'[{"id":"33c433c.c3a684c","type":"api-call-service","z":"dde1d524.9cc4d","name":"Turn off light","server":"a77b5e9d.0c69","version":1,"debugenabled":false,"service_domain":"light","service":"turn_off","entityId":"light.living_room_lamp","data":"","dataType":"json","mergecontext":"","output_location":"","output_location_type":"none","mustacheAltTags":false,"x":270,"y":540,"wires":[[]]},{"id":"7e78e5ee.c861c4","type":"inject","z":"dde1d524.9cc4d","name":"11PM","topic":"","payload":"","payloadType":"date","repeat":"","crontab":"00 23 * * *","once":false,"onceDelay":0.1,"x":110,"y":540,"wires":[["33c433c.c3a684c"]]},{"id":"a77b5e9d.0c69","type":"server","z":"","name":"Home Assistant","addon":true}]\n')))}u.isMDXComponent=!0},126:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var i=n(0),a=n.n(i);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),s=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},u=function(e){var t=s(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=Object(i.forwardRef)((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),u=s(n),m=i,b=u["".concat(o,".").concat(m)]||u[m]||p[m]||r;return n?a.a.createElement(b,c({ref:t},l,{components:n})):a.a.createElement(b,c({ref:t},l))}));function b(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var l=2;l<r;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},127:function(e,t,n){"use strict";var i=n(0),a=n(32);t.a=function(){return Object(i.useContext)(a.a)}},128:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var i=n(127);function a(e){const{siteConfig:t}=Object(i.a)(),{baseUrl:n="/"}=t||{};if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?n+e.slice(1):n+e}}}]);