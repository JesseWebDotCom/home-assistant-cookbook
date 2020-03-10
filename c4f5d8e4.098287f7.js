(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{150:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(0),c=a.n(r),l=a(163),o=a.n(l),s=a(173),i=a(164),u=a(157),d=a(159),m=a(151),h=a.n(m);const f={margin:"0 auto","text-align":"center"},b=[{title:c.a.createElement(c.a.Fragment,null,"Home Assistant"),imageUrl:"img/home-assistant.png",description:c.a.createElement(c.a.Fragment,null,"Control your devices and connect your services through Home Assistant.")},{title:c.a.createElement(c.a.Fragment,null,"Node-RED"),imageUrl:"img/node-red.png",description:c.a.createElement(c.a.Fragment,null,"Drag, drop, and visually automate your home through Node-RED.")},{title:c.a.createElement(c.a.Fragment,null,"ESPHome"),imageUrl:"img/esphome.png",description:c.a.createElement(c.a.Fragment,null,"Make and manage your own sensors and devices through ESPHome.")}];function p({imageUrl:e,title:t,description:a}){const n=Object(d.a)(e);return c.a.createElement("div",{style:f,className:o()("col col--4",h.a.feature)},n&&c.a.createElement("div",{className:"text--center"},c.a.createElement("img",{className:h.a.featureImage,src:n,alt:t})),c.a.createElement("h3",null,t),c.a.createElement("p",null,a))}t.default=function(){const e=Object(u.a)(),{siteConfig:t={}}=e;return c.a.createElement(s.a,{title:"",description:"Snippets, examples, and tutorials for Home Assistant, Node-RED, ESPHome, & More"},c.a.createElement("header",{className:o()("hero hero--primary",h.a.heroBanner)},c.a.createElement("div",{className:"container"},c.a.createElement("h1",{className:"hero__title"},t.title),c.a.createElement("p",{className:"hero__subtitle"},t.tagline),c.a.createElement("div",{className:h.a.buttons},c.a.createElement(i.a,{className:o()("button button--outline button--secondary button--lg",h.a.getStarted),to:Object(d.a)("docs/home-assistant/getting-started")},"Get Started")))),c.a.createElement("main",null,b&&b.length&&c.a.createElement("section",{className:h.a.features},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},b.map((e,t)=>c.a.createElement(p,Object(n.a)({key:t},e))))))))}},166:function(e,t,a){"use strict";var n=a(0);const r=a.n(n).a.createContext({isDarkTheme:!1,setLightTheme:()=>{},setDarkTheme:()=>{}});t.a=r},168:function(e,t,a){"use strict";var n=a(0),r=a(166);t.a=function(){return Object(n.useContext)(r.a)}},169:function(e,t,a){"use strict";var n=a(35);a.d(t,"a",(function(){return n.c})),a.d(t,"b",(function(){return n.d}))},170:function(e,t,a){"use strict";var n=a(0);t.a=function(e=!0){Object(n.useEffect)(()=>(document.body.style.overflow=e?"hidden":"visible",()=>{document.body.style.overflow="visible"}),[e])}},173:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(178),l=a(157),o=a(159);const s="",i="dark";var u=()=>{const{siteConfig:{themeConfig:{disableDarkMode:e}}={}}=Object(l.a)(),[t,a]=Object(n.useState)("undefined"!=typeof document?document.documentElement.getAttribute("data-theme"):s),r=Object(n.useCallback)(e=>{try{localStorage.setItem("theme",e)}catch(t){console.error(t)}},[a]),c=Object(n.useCallback)(()=>{a(s),r(s)},[]),o=Object(n.useCallback)(()=>{a(i),r(i)},[]);return Object(n.useEffect)(()=>{document.documentElement.setAttribute("data-theme",t)},[t]),Object(n.useEffect)(()=>{if(!e)try{const e=localStorage.getItem("theme");null!==e&&a(e)}catch(t){console.error(t)}},[a]),{isDarkTheme:t===i,setLightTheme:c,setDarkTheme:o}},d=a(166);var m=function(e){const{isDarkTheme:t,setLightTheme:a,setDarkTheme:n}=u();return r.a.createElement(d.a.Provider,{value:{isDarkTheme:t,setLightTheme:a,setDarkTheme:n}},e.children)},h=a(1),f=a(164),b=a(163),p=a.n(b),g=a(48);a(120);var v=e=>{const[t,c]=Object(n.useState)(!0),l=Object(n.useRef)(null),o=Object(n.useContext)(g.a);Object(n.useEffect)(()=>{const{siteConfig:e={}}=o,{themeConfig:{algolia:t}}=e;"undefined"!=typeof window?a.e(27).then(a.t.bind(null,250,7)).then(({default:e})=>{e({appId:t.appId,apiKey:t.apiKey,indexName:t.indexName,inputSelector:"#search_input_react",algoliaOptions:t.algoliaOptions})}):(console.warn("Search has failed to load and now is being disabled"),c(!1))},[]);const s=Object(n.useCallback)(t=>{l.current.contains(t.target)||l.current.focus(),e.handleSearchBarToggle(!e.isSearchBarExpanded)},[e.isSearchBarExpanded]);return t?r.a.createElement("div",{className:"navbar__search",key:"search-box"},r.a.createElement("span",{role:"button",className:p()("search-icon",{"search-icon-hidden":e.isSearchBarExpanded}),onClick:s,onKeyDown:s,tabIndex:0}),r.a.createElement("input",{id:"search_input_react",type:"search",placeholder:"Search","aria-label":"Search",className:p()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onFocus:s,onBlur:s,ref:l})):null},E=a(174),k=a.n(E),y=a(121),_=a.n(y);const O=()=>r.a.createElement("span",{className:p()(_.a.toggle,_.a.moon)}),N=()=>r.a.createElement("span",{className:p()(_.a.toggle,_.a.sun)});var j=function(e){const{isClient:t}=Object(l.a)();return r.a.createElement(k.a,Object(h.a)({disabled:!t,icons:{checked:r.a.createElement(O,null),unchecked:r.a.createElement(N,null)}},e))},w=a(168),C=a(169);var S=function(e){const[t,a]=Object(n.useState)(e);return Object(n.useEffect)(()=>{const e=()=>a(window.location.hash);return window.addEventListener("hashchange",e),()=>window.removeEventListener("hashchange",e)},[]),[t,a]};var T=e=>{const[t,a]=Object(n.useState)(!0),[r,c]=Object(n.useState)(!1),[l,o]=Object(n.useState)(0),[s,i]=Object(n.useState)(0),u=Object(n.useCallback)(e=>{null!==e&&i(e.getBoundingClientRect().height)},[]),d=Object(C.b)(),[m,h]=S(d.hash),f=()=>{const e=window.pageYOffset||document.documentElement.scrollTop;if(e<s)return;if(r)return c(!1),a(!1),void o(e);const t=document.documentElement.scrollHeight-s,n=window.innerHeight;l&&e>l?a(!1):e+n<t&&a(!0),o(e)};return Object(n.useEffect)(()=>{if(e)return window.addEventListener("scroll",f),()=>{window.removeEventListener("scroll",f)}},[l,s]),Object(n.useEffect)(()=>{e&&(a(!0),h(d.hash))},[d]),Object(n.useEffect)(()=>{e&&m&&c(!0)},[m]),{navbarRef:u,isNavbarVisible:t}},x=a(170),D=a(122),M=a.n(D);function B({to:e,href:t,label:a,position:n,...c}){const l=Object(o.a)(e);return r.a.createElement(f.a,Object(h.a)({className:"navbar__item navbar__link"},t?{target:"_blank",rel:"noopener noreferrer",href:t}:{activeClassName:"navbar__link--active",to:l},c),a)}var F=function(){const e=Object(l.a)(),{siteConfig:t={}}=e,{baseUrl:a,themeConfig:c={}}=t,{navbar:s={},disableDarkMode:i=!1}=c,{title:u,logo:d={},links:m=[],hideOnScroll:b=!1}=s,[g,E]=Object(n.useState)(!1),[k,y]=Object(n.useState)(!1),{isDarkTheme:_,setLightTheme:O,setDarkTheme:N}=Object(w.a)(),{navbarRef:C,isNavbarVisible:S}=T(b);Object(x.a)(g);const D=Object(n.useCallback)(()=>{E(!0)},[E]),F=Object(n.useCallback)(()=>{E(!1)},[E]),L=Object(n.useCallback)(e=>e.target.checked?N():O(),[O,N]),P=d.href||a,I=/http/.test(P)?{rel:"noopener noreferrer",target:"_blank"}:null,X=d.srcDark&&_?d.srcDark:d.src,H=Object(o.a)(X);return r.a.createElement("nav",{ref:C,className:p()("navbar","navbar--light","navbar--fixed-top",{"navbar-sidebar--show":g,[M.a.navbarHideable]:b,[M.a.navbarHidden]:!S})},r.a.createElement("div",{className:"navbar__inner"},r.a.createElement("div",{className:"navbar__items"},r.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:D,onKeyDown:D},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",role:"img",focusable:"false"},r.a.createElement("title",null,"Menu"),r.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),r.a.createElement(f.a,Object(h.a)({className:"navbar__brand",to:P},I),null!=d&&r.a.createElement("img",{className:"navbar__logo",src:H,alt:d.alt}),null!=u&&r.a.createElement("strong",{className:k?M.a.hideLogoText:""},u)),m.filter(e=>"right"!==e.position).map((e,t)=>r.a.createElement(B,Object(h.a)({},e,{key:t})))),r.a.createElement("div",{className:"navbar__items navbar__items--right"},m.filter(e=>"right"===e.position).map((e,t)=>r.a.createElement(B,Object(h.a)({},e,{key:t}))),!i&&r.a.createElement(j,{className:M.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:_,onChange:L}),r.a.createElement(v,{handleSearchBarToggle:y,isSearchBarExpanded:k}))),r.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:F}),r.a.createElement("div",{className:"navbar-sidebar"},r.a.createElement("div",{className:"navbar-sidebar__brand"},r.a.createElement(f.a,Object(h.a)({className:"navbar__brand",onClick:F,to:P},I),null!=d&&r.a.createElement("img",{className:"navbar__logo",src:H,alt:d.alt}),null!=u&&r.a.createElement("strong",null,u)),!i&&g&&r.a.createElement(j,{"aria-label":"Dark mode toggle in sidebar",checked:_,onChange:L})),r.a.createElement("div",{className:"navbar-sidebar__items"},r.a.createElement("div",{className:"menu"},r.a.createElement("ul",{className:"menu__list"},m.map((e,t)=>r.a.createElement("li",{className:"menu__list-item",key:t},r.a.createElement(B,Object(h.a)({className:"menu__link"},e,{onClick:F})))))))))},L=a(123),P=a.n(L);function I({to:e,href:t,label:a,...n}){const c=Object(o.a)(e);return r.a.createElement(f.a,Object(h.a)({className:"footer__link-item"},t?{target:"_blank",rel:"noopener noreferrer",href:t}:{to:c},n),a)}const X=({url:e,alt:t})=>r.a.createElement("img",{className:"footer__logo",alt:t,src:e});var H=function(){const e=Object(l.a)(),{siteConfig:t={}}=e,{themeConfig:a={}}=t,{footer:n}=a,{copyright:c,links:s=[],logo:i={}}=n||{},u=Object(o.a)(i.src);return n?r.a.createElement("footer",{className:p()("footer",{"footer--dark":"dark"===n.style})},r.a.createElement("div",{className:"container"},s&&s.length>0&&r.a.createElement("div",{className:"row footer__links"},s.map((e,t)=>r.a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?r.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?r.a.createElement("ul",{className:"footer__items"},e.items.map((e,t)=>e.html?r.a.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):r.a.createElement("li",{key:e.href||e.to,className:"footer__item"},r.a.createElement(I,e)))):null))),(i||c)&&r.a.createElement("div",{className:"text--center"},i&&i.src&&r.a.createElement("div",{className:"margin-bottom--sm"},i.href?r.a.createElement("a",{href:i.href,target:"_blank",rel:"noopener noreferrer",className:P.a.footerLogoLink},r.a.createElement(X,{alt:i.alt,url:u})):r.a.createElement(X,{alt:i.alt,url:u})),c))):null};a(124);t.a=function(e){const{siteConfig:t={}}=Object(l.a)(),{favicon:a,title:n,themeConfig:{image:s},url:i}=t,{children:u,title:d,noFooter:h,description:f,image:b,keywords:p,permalink:g,version:v}=e,E=d?`${d} | ${n}`:n,k=b||s,y=i+Object(o.a)(k),_=Object(o.a)(a);return r.a.createElement(m,null,r.a.createElement(c.a,null,r.a.createElement("html",{lang:"en"}),r.a.createElement("meta",{httpEquiv:"x-ua-compatible",content:"ie=edge"}),E&&r.a.createElement("title",null,E),E&&r.a.createElement("meta",{property:"og:title",content:E}),a&&r.a.createElement("link",{rel:"shortcut icon",href:_}),f&&r.a.createElement("meta",{name:"description",content:f}),f&&r.a.createElement("meta",{property:"og:description",content:f}),v&&r.a.createElement("meta",{name:"docsearch:version",content:v}),p&&p.length&&r.a.createElement("meta",{name:"keywords",content:p.join(",")}),k&&r.a.createElement("meta",{property:"og:image",content:y}),k&&r.a.createElement("meta",{property:"twitter:image",content:y}),k&&r.a.createElement("meta",{name:"twitter:image:alt",content:`Image for ${E}`}),g&&r.a.createElement("meta",{property:"og:url",content:i+g}),r.a.createElement("meta",{name:"twitter:card",content:"summary"})),r.a.createElement(F,null),r.a.createElement("div",{className:"main-wrapper"},u),!h&&r.a.createElement(H,null))}},174:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),c=a(0),l=m(c),o=m(a(163)),s=m(a(11)),i=m(a(175)),u=m(a(176)),d=a(177);function m(e){return e&&e.__esModule?e:{default:e}}var h=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.handleClick=a.handleClick.bind(a),a.handleTouchStart=a.handleTouchStart.bind(a),a.handleTouchMove=a.handleTouchMove.bind(a),a.handleTouchEnd=a.handleTouchEnd.bind(a),a.handleFocus=a.handleFocus.bind(a),a.handleBlur=a.handleBlur.bind(a),a.previouslyChecked=!(!e.checked&&!e.defaultChecked),a.state={checked:!(!e.checked&&!e.defaultChecked),hasFocus:!1},a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidUpdate",value:function(e){e.checked!==this.props.checked&&this.setState({checked:!!this.props.checked})}},{key:"handleClick",value:function(e){var t=this.input;if(e.target!==t&&!this.moved)return this.previouslyChecked=t.checked,e.preventDefault(),t.focus(),void t.click();var a=this.props.hasOwnProperty("checked")?this.props.checked:t.checked;this.setState({checked:a})}},{key:"handleTouchStart",value:function(e){this.startX=(0,d.pointerCoord)(e).x,this.activated=!0}},{key:"handleTouchMove",value:function(e){if(this.activated&&(this.moved=!0,this.startX)){var t=(0,d.pointerCoord)(e).x;this.state.checked&&t+15<this.startX?(this.setState({checked:!1}),this.startX=t,this.activated=!0):t-15>this.startX&&(this.setState({checked:!0}),this.startX=t,this.activated=t<this.startX+5)}}},{key:"handleTouchEnd",value:function(e){if(this.moved){var t=this.input;if(e.preventDefault(),this.startX){var a=(0,d.pointerCoord)(e).x;!0===this.previouslyChecked&&this.startX+4>a?this.previouslyChecked!==this.state.checked&&(this.setState({checked:!1}),this.previouslyChecked=this.state.checked,t.click()):this.startX-4<a&&this.previouslyChecked!==this.state.checked&&(this.setState({checked:!0}),this.previouslyChecked=this.state.checked,t.click()),this.activated=!1,this.startX=null,this.moved=!1}}}},{key:"handleFocus",value:function(e){var t=this.props.onFocus;t&&t(e),this.setState({hasFocus:!0})}},{key:"handleBlur",value:function(e){var t=this.props.onBlur;t&&t(e),this.setState({hasFocus:!1})}},{key:"getIcon",value:function(e){var a=this.props.icons;return a?void 0===a[e]?t.defaultProps.icons[e]:a[e]:null}},{key:"render",value:function(){var e=this,t=this.props,a=t.className,r=(t.icons,function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(t,["className","icons"])),c=(0,o.default)("react-toggle",{"react-toggle--checked":this.state.checked,"react-toggle--focus":this.state.hasFocus,"react-toggle--disabled":this.props.disabled},a);return l.default.createElement("div",{className:c,onClick:this.handleClick,onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd},l.default.createElement("div",{className:"react-toggle-track"},l.default.createElement("div",{className:"react-toggle-track-check"},this.getIcon("checked")),l.default.createElement("div",{className:"react-toggle-track-x"},this.getIcon("unchecked"))),l.default.createElement("div",{className:"react-toggle-thumb"}),l.default.createElement("input",n({},r,{ref:function(t){e.input=t},onFocus:this.handleFocus,onBlur:this.handleBlur,className:"react-toggle-screenreader-only",type:"checkbox"})))}}]),t}(c.PureComponent);t.default=h,h.displayName="Toggle",h.defaultProps={icons:{checked:l.default.createElement(i.default,null),unchecked:l.default.createElement(u.default,null)}},h.propTypes={checked:s.default.bool,disabled:s.default.bool,defaultChecked:s.default.bool,onChange:s.default.func,onFocus:s.default.func,onBlur:s.default.func,className:s.default.string,name:s.default.string,value:s.default.string,id:s.default.string,"aria-labelledby":s.default.string,"aria-label":s.default.string,icons:s.default.oneOfType([s.default.bool,s.default.shape({checked:s.default.node,unchecked:s.default.node})])}},175:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(0),c=(n=r)&&n.__esModule?n:{default:n};t.default=function(){return c.default.createElement("svg",{width:"14",height:"11",viewBox:"0 0 14 11"},c.default.createElement("title",null,"switch-check"),c.default.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}))}},176:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(0),c=(n=r)&&n.__esModule?n:{default:n};t.default=function(){return c.default.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10"},c.default.createElement("title",null,"switch-x"),c.default.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"}))}},177:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.pointerCoord=function(e){if(e){var t=e.changedTouches;if(t&&t.length>0){var a=t[0];return{x:a.clientX,y:a.clientY}}var n=e.pageX;if(void 0!==n)return{x:n,y:e.pageY}}return{x:0,y:0}}}}]);