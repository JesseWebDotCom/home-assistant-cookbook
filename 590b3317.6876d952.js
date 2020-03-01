(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{116:function(e,t,r){"use strict";var a=r(0),n=r(32);t.a=function(){return Object(a.useContext)(n.a)}},117:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return y}));var a=r(0),n=r.n(a);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=n.a.createContext({}),u=function(e){var t=n.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c({},t,{},e)),r},p=function(e){var t=u(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},f=Object(a.forwardRef)((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(r),f=a,y=p["".concat(i,".").concat(f)]||p[f]||d[f]||o;return r?n.a.createElement(y,c({ref:t},l,{components:r})):n.a.createElement(y,c({ref:t},l))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},118:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var a=r(116);function n(e){const{siteConfig:t}=Object(a.a)(),{baseUrl:r="/"}=t||{};if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?r+e.slice(1):r+e}},99:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return p}));var a=r(1),n=r(6),o=(r(0),r(117)),i=r(118),c={id:"garage",title:"Garage"},s={id:"node-red/garage",title:"Garage",description:"import useBaseUrl from '@docusaurus/useBaseUrl';",source:"@site/docs/node-red/garage.mdx.md",permalink:"/home-assistant-cookbook/docs/node-red/garage",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/node-red/garage.mdx.md",sidebar:"docs",previous:{title:"Climate",permalink:"/home-assistant-cookbook/docs/node-red/climate"},next:{title:"Energy Saver",permalink:"/home-assistant-cookbook/docs/node-red/lighting/energy-saver"}},l=[{value:"Driveway Light",id:"driveway-light",children:[]}],u={rightToc:l};function p(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Misc automations specifically for the garage."),Object(o.b)("h2",{id:"driveway-light"},"Driveway Light"),Object(o.b)("p",null,"Turn the driveway light on when the garage opens and turn it off after 5 minutes (or earlier if the garage door closed)."),Object(o.b)("img",{alt:"Driveway Light",src:Object(i.a)("img/garage-driveway-light.png")}),";",Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'[{"id":"d4f11c84.0614e","type":"stoptimer","z":"c78c9cee.c1f1f","duration":"5","units":"Minute","payloadtype":"num","payloadval":"0","name":"","x":520,"y":80,"wires":[["a76ac9c1.78c3e"],[]]},{"id":"b3ab2ffe.d775a","type":"change","z":"c78c9cee.c1f1f","name":"Stop Timer","rules":[{"t":"set","p":"payload","pt":"msg","to":"stop","tot":"str"}],"action":"","property":"","from":"","to":"","reg":false,"x":310,"y":140,"wires":[["d4f11c84.0614e"]]},{"id":"76631109.9858d","type":"server-state-changed","z":"c78c9cee.c1f1f","name":"Garage Open","server":"a77b5e9d.0c69","version":1,"exposeToHomeAssistant":false,"haConfig":[{"property":"name","value":""},{"property":"icon","value":""}],"entityidfilter":"cover.garage_door","entityidfiltertype":"exact","outputinitially":false,"state_type":"str","haltifstate":"open","halt_if_type":"str","halt_if_compare":"is","outputs":2,"output_only_on_state_change":true,"x":110,"y":80,"wires":[["c01f9fce.c2e57"],[]]},{"id":"bee536cf.7990f8","type":"server-state-changed","z":"c78c9cee.c1f1f","name":"Garage Closed","server":"a77b5e9d.0c69","version":1,"exposeToHomeAssistant":false,"haConfig":[{"property":"name","value":""},{"property":"icon","value":""}],"entityidfilter":"cover.garage_door","entityidfiltertype":"exact","outputinitially":false,"state_type":"str","haltifstate":"closed","halt_if_type":"str","halt_if_compare":"is","outputs":2,"output_only_on_state_change":true,"x":120,"y":180,"wires":[["b3ab2ffe.d775a","a76ac9c1.78c3e"],[]]},{"id":"c01f9fce.c2e57","type":"api-call-service","z":"c78c9cee.c1f1f","name":"Turn on light","server":"a77b5e9d.0c69","version":1,"debugenabled":false,"service_domain":"light","service":"turn_on","entityId":"light.driveway","data":"","dataType":"json","mergecontext":"","output_location":"","output_location_type":"none","mustacheAltTags":false,"x":310,"y":80,"wires":[["d4f11c84.0614e"]]},{"id":"a76ac9c1.78c3e","type":"api-call-service","z":"c78c9cee.c1f1f","name":"Turn off light","server":"a77b5e9d.0c69","version":1,"debugenabled":false,"service_domain":"light","service":"turn_off","entityId":"light.driveway","data":"","dataType":"json","mergecontext":"","output_location":"","output_location_type":"none","mustacheAltTags":false,"x":690,"y":174,"wires":[[]]},{"id":"a77b5e9d.0c69","type":"server","z":"","name":"Home Assistant","addon":true}]\n')))}p.isMDXComponent=!0}}]);