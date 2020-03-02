(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{110:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return r})),n.d(t,"default",(function(){return p}));var a=n(1),o=n(6),s=(n(0),n(122)),i={id:"sensors",title:"Sensors"},c={id:"home-assistant/examples/sensors",title:"Sensors",description:"Misc examples using sensors.",source:"@site/docs/home-assistant/examples/sensors.md",permalink:"/home-assistant-cookbook/docs/home-assistant/examples/sensors",sidebar:"docs",previous:{title:"People",permalink:"/home-assistant-cookbook/docs/home-assistant/examples/people"},next:{title:"Switches",permalink:"/home-assistant-cookbook/docs/home-assistant/examples/switches"}},r=[{value:"Doors Open (Specific)",id:"doors-open-specific",children:[]},{value:"Lights On",id:"lights-on",children:[]},{value:"Lights On (Specific)",id:"lights-on-specific",children:[]},{value:"Lights On Areas (Specific)",id:"lights-on-areas-specific",children:[]},{value:"Locks Unlocked (Specific)",id:"locks-unlocked-specific",children:[]}],l={rightToc:r};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(s.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"Misc examples using sensors."),Object(s.b)("h2",{id:"doors-open-specific"},"Doors Open (Specific)"),Object(s.b)("p",null,"Creates a sensor indicating how many specific doors are open."),Object(s.b)("div",{className:"admonition admonition-tip"},Object(s.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(s.b)("h5",{parentName:"div"},Object(s.b)("div",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(s.b)("svg",Object(a.a)({parentName:"div"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(s.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"Usage Ideas")),Object(s.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(s.b)("ul",{parentName:"div"},Object(s.b)("li",{parentName:"ul"},"Count open house doors, exterior doors, first floor doors, car doors, etc"),Object(s.b)("li",{parentName:"ul"},"Alert when its bedtime and doors are open")))),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"sensor:\n  - platform: template\n    sensors:\n      doors_open:\n        friendly_name: \"Doors\"\n        unit_of_measurement: 'open'\n        value_template: >\n          {% set doors = [\n              states.binary_sensor.front_door,\n              states.binary_sensor.kitchen_door,\n              ] -%}\n          {% set covers = [\n              states.cover.garage_door,\n              ] -%}\n          {% set doors_open = doors | selectattr('state','eq','on') | list | count -%}\n          {% set covers_open = covers | selectattr('state','eq','open') | list | count -%}\n          {{ doors_open + covers_open }}\n")),Object(s.b)("h2",{id:"lights-on"},"Lights On"),Object(s.b)("p",null,"Creates a sensor indicating how many lights are on.  "),Object(s.b)("div",{className:"admonition admonition-note"},Object(s.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(s.b)("h5",{parentName:"div"},Object(s.b)("div",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(s.b)("svg",Object(a.a)({parentName:"div"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(s.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(s.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(s.b)("p",{parentName:"div"},"This example includes in all and only entities in the ",Object(s.b)("inlineCode",{parentName:"p"},"light")," domain (ex. light.bathroom).  See the ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"#lights-on-specific"}),"Lights On (Specific)")," example to include specific entities (ex. light.bathroom, switch.garage_light)."))),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"sensor:\n  - platform: template\n    sensors:\n      lights_on:\n        friendly_name: \"Lights\"\n        unit_of_measurement: 'on'\n        value_template: >\n          {{ states['light'] | selectattr('state','eq','on') | list | count }}\n")),Object(s.b)("h2",{id:"lights-on-specific"},"Lights On (Specific)"),Object(s.b)("p",null,"Creates a sensor indicating how many specific lights are on."),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"sensor:\n  - platform: template\n    sensors:\n      lights_on:\n        friendly_name: \"Lights\"\n        unit_of_measurement: 'on'\n        value_template: >\n          {% set lights = [\n            states.light.living_room_lamp,\n            states.light.bathroom,\n            states.switch.garage_light,\n            ] %}\n          {{ lights | selectattr('state','eq','on') | list | count }}\n")),Object(s.b)("h2",{id:"lights-on-areas-specific"},"Lights On Areas (Specific)"),Object(s.b)("p",null,"Creates sensors indicating how many specific lights are on in specific areas."),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"sensor:\n  - platform: template\n    sensors:\n      lights_on_indoors:\n        friendly_name: \"Lights | Indoors\"\n        unit_of_measurement: 'on'\n        value_template: >\n          {% set lights = [\n            states.light.living_room_lamp,\n            states.light.bathroom,\n            states.switch.garage_light,\n            ] %}\n          {{ lights | selectattr('state','eq','on') | list | count }}\n      lights_on_outdoors:\n        friendly_name: \"Lights | Outdoors\"\n        unit_of_measurement: 'on'\n        value_template: >\n          {% set lights = [\n            states.light.front_door,\n            states.light.driveway,\n            ] %}\n          {{ lights | selectattr('state','eq','on') | list | count }}\n      lights_on:\n        friendly_name: \"Lights | Total\"\n        unit_of_measurement: 'on'\n        value_template: >\n          {{ (states.sensor.lights_on_indoors.state | int) + \n          (states.sensor.lights_on_outdoors.state | int) }}\n")),Object(s.b)("h2",{id:"locks-unlocked-specific"},"Locks Unlocked (Specific)"),Object(s.b)("p",null,"Creates a sensor indicating how many locks are unlocked."),Object(s.b)("div",{className:"admonition admonition-tip"},Object(s.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(s.b)("h5",{parentName:"div"},Object(s.b)("div",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(s.b)("svg",Object(a.a)({parentName:"div"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(s.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"Usage Ideas")),Object(s.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(s.b)("ul",{parentName:"div"},Object(s.b)("li",{parentName:"ul"},"Count unlocked house doors, car doors, etc"),Object(s.b)("li",{parentName:"ul"},"Alert when your car is not home and its doors are unlocked")))),Object(s.b)("div",{className:"admonition admonition-note"},Object(s.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(s.b)("h5",{parentName:"div"},Object(s.b)("div",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(s.b)("svg",Object(a.a)({parentName:"div"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(s.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(s.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(s.b)("p",{parentName:"div"},"Trying to make this example non-specific (ex. like ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"#lights-on"}),"Lights On"),") does not work."))),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"sensor:\n  - platform: template\n    sensors:\n      locks_unlocked:\n        friendly_name: \"Locks\"\n        unit_of_measurement: 'unlocked'\n        value_template: >\n          {% set locks = [\n            states.lock.front_door,\n            states.lock.kitchen_door,\n            ] %}\n          {{ locks | selectattr('state','eq','unlocked') | list | count }}\n")))}p.isMDXComponent=!0},122:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return h}));var a=n(0),o=n.n(a);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},m=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,l=r(e,["components","mdxType","originalType","parentName"]),m=p(n),b=a,h=m["".concat(i,".").concat(b)]||m[b]||d[b]||s;return n?o.a.createElement(h,c({ref:t},l,{components:n})):o.a.createElement(h,c({ref:t},l))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=b;var c={};for(var r in t)hasOwnProperty.call(t,r)&&(c[r]=t[r]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<s;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);