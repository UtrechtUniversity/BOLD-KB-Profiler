(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[53],{77957:function(t,e,n){"use strict";var r=n(95318);e.Z=void 0;var o=r(n(64938)),a=n(85893),i=(0,o.default)((0,a.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit");e.Z=i},65362:function(t,e,n){"use strict";n.d(e,{u:function(){return f}});var r=n(87462),o=n(63366),a=n(67294),i=n(93946),u=n(18972),c=n(48885),l=n(85893);const s=["label","icon","showInMenu","onClick"],f=a.forwardRef(((t,e)=>{const{label:n,icon:f,showInMenu:d,onClick:p}=t,m=(0,o.Z)(t,s),y=t=>{p&&p(t)};return d?(0,l.jsxs)(u.Z,(0,r.Z)({ref:e},m,{onClick:p,children:[f&&(0,l.jsx)(c.Z,{children:f}),n]})):(0,l.jsx)(i.Z,(0,r.Z)({ref:e,size:"small",role:"menuitem","aria-label":n},m,{onClick:y,children:a.cloneElement(f,{fontSize:"small"})}))}))},99828:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/reports",function(){return n(81237)}])},16775:function(t,e,n){"use strict";n.d(e,{Y:function(){return c}});var r=n(85893),o=n(99964),a=n(66242),i=n(78445),u=n(44267),c=(n(67294),function(t){var e=t.open,n=t.onClose,c=t.title,l=t.header,s=t.children;return(0,r.jsx)(o.Z,{open:e,onClose:n,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,r.jsxs)(a.Z,{sx:{width:600,position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",maxHeight:"100%",display:"flex",flexDirection:"column"},children:[l||(0,r.jsx)(i.Z,{title:c}),(0,r.jsx)(u.Z,{sx:{overflow:"auto",flex:1},children:s})]})})})},87177:function(t,e,n){"use strict";var r=n(73400),o=n(67294);function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function i(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,a=[],i=!0,u=!1;try{for(n=n.call(t);!(i=(r=n.next()).done)&&(a.push(r.value),!e||a.length!==e);i=!0);}catch(c){u=!0,o=c}finally{try{i||null==n.return||n.return()}finally{if(u)throw o}}return a}}(t,e)||function(t,e){if(!t)return;if("string"===typeof t)return a(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}e.Z=function(){var t=i(o.useState({message:void 0,variant:"default"}),2),e=t[0],n=t[1],a=(0,r.Ds)().enqueueSnackbar;return o.useEffect((function(){if(null===e||void 0===e?void 0:e.message){var t="info";e.variant&&(t=e.variant),a(e.message,{variant:t,autoHideDuration:5e3})}}),[e]),{notification:e,sendNotification:n}}},81237:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return tt}});var r=n(85893),o=n(9008),a=n.n(o),i=n(99226),u=n(53156),c=n(66242),l=n(78445),s=n(83321),f=n(44267),d=n(67294),p=n(76992),m=n(16775),y=n(34051),v=n.n(y),h=n(86886),b=n(24358),g=n(98456),x=n(82580),j=n(11163),w=n(417),S=n(61903),A=n(87918),O=n(62400);function C(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function Z(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function I(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),r.forEach((function(e){Z(t,e,n[e])}))}return t}function k(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}function _(t){return function(t){if(Array.isArray(t))return C(t)}(t)||function(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"===typeof t)return C(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return C(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var E=function(t){var e=t.onValueChange,n=k(t,["onValueChange"]),o=(0,d.useState)([]),a=o[0],i=o[1],u=(0,d.useState)([]),c=u[0],l=u[1],s=(0,O.zy)("/datasets/",{},{onSuccess:function(t){var e=[];a&&(e=_(a)),t&&(e=_(e).concat(_(t))),l(e)}}).setQuery;return(0,r.jsx)(w.Z,I({},n,{getOptionLabel:function(t){return"string"===typeof t?t:t.name},multiple:!0,limitTags:1,options:c,autoComplete:!0,includeInputInList:!0,value:a,onChange:function(t,n){var r;n.length>1&&(n=[n[n.length-1]]),r=_(n.filter((function(t){return c.find((function(e){return e.id===t.id}))}))),i(r),e(r)},onInputChange:function(t,e){s(e)},renderInput:function(t){return(0,r.jsx)(S.Z,I({},t,{label:"Dataset",fullWidth:!0}))},renderTags:function(t,e){return t.map((function(t,n){return(0,r.jsx)(A.Z,I({label:t.name},e({index:n})),n)}))}}))},P=n(87177),N=n(74231),T=n(68699);function R(t,e,n,r,o,a,i){try{var u=t[a](i),c=u.value}catch(l){return void n(l)}u.done?e(c):Promise.resolve(c).then(r,o)}var V=function(t){var e=(0,j.useRouter)(),n=(0,d.useState)(!1),o=n[0],a=n[1],i=(0,P.Z)().sendNotification,u=t.onClose,c=N.Ry({}),l=(0,x.TA)({initialValues:{dataset:void 0},validationSchema:c,onSubmit:function(){var t,n=(t=v().mark((function t(n){var r;return v().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a(!0),t.prev=1,t.next=4,O.x1.post("/reports/",{dataset:n.dataset.id,notebook:(0,T.lw)("Untitled Report")});case 4:if(!(r=t.sent)){t.next=14;break}if(201!==r.status){t.next=13;break}return i({message:"Report created",variant:"success"}),u(!0),t.next=11,e.push("report/".concat(r.data.id));case 11:t.next=14;break;case 13:i({message:"Error creating report",variant:"error"});case 14:t.next=19;break;case 16:t.prev=16,t.t0=t.catch(1),console.error(t.t0);case 19:a(!1);case 20:case"end":return t.stop()}}),t,null,[[1,16]])})),function(){var e=this,n=arguments;return new Promise((function(r,o){var a=t.apply(e,n);function i(t){R(a,r,o,i,u,"next",t)}function u(t){R(a,r,o,i,u,"throw",t)}i(void 0)}))});return function(t){return n.apply(this,arguments)}}()});return(0,r.jsxs)("form",{onSubmit:l.handleSubmit,children:[(0,r.jsxs)(h.ZP,{container:!0,spacing:3,children:[(0,r.jsx)(h.ZP,{item:!0,xs:12,children:(0,r.jsx)(E,{onValueChange:function(t){return t.length&&l.setFieldValue("dataset",t[0])}})}),(0,r.jsx)(h.ZP,{item:!0,xs:12,sx:{display:"flex",justifyContent:"flex-end"},children:(0,r.jsx)(s.Z,{variant:"contained",type:"submit",children:"Submit"})})]}),(0,r.jsx)(b.Z,{sx:{color:"#fff",zIndex:function(t){return t.zIndex.drawer+1}},open:o,children:(0,r.jsx)(g.Z,{color:"inherit"})})]})},M=n(77957),U=n(65362),D=n(27484),L=n.n(D),z=n(25778),W=n(93902);function $(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function F(t,e,n,r,o,a,i){try{var u=t[a](i),c=u.value}catch(l){return void n(l)}u.done?e(c):Promise.resolve(c).then(r,o)}function G(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var a=t.apply(e,n);function i(t){F(a,r,o,i,u,"next",t)}function u(t){F(a,r,o,i,u,"throw",t)}i(void 0)}))}}function H(t){return function(t){if(Array.isArray(t))return $(t)}(t)||function(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"===typeof t)return $(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return $(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var X=[{field:"id",headerName:"ID",flex:.5,valueFormatter:function(t){return(0,W.UN)(t.value)}},{field:"dataset",headerName:"Dataset",flex:1,valueGetter:function(t){return t.value.name}},{field:"name",headerName:"Name",flex:.5,valueGetter:function(t){return t.row.notebook.metadata.name}},{field:"created_at",headerName:"Created At",flex:.5,type:"dateTime",minWidth:200,valueFormatter:function(t){return(0,W.o0)(t.value)}},{field:"updated_at",headerName:"Updated At",flex:.5,type:"dateTime",minWidth:200,valueFormatter:function(t){return L()(t.value).fromNow()}}],Y={columns:{columnVisibilityModel:{}}},q=[{field:"created_at",sort:"desc"}],B=function(t){var e=(0,j.useRouter)(),n=function(){var t=G(v().mark((function t(n){return v().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.push("report/".concat(n.id));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),o=H(X).concat([{field:"actions",type:"actions",getActions:function(t){return[(0,r.jsx)(U.u,{icon:(0,r.jsx)(M.Z,{}),onClick:G(v().mark((function e(){return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n(t.row);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),label:"Edit"})]}}]);return(0,r.jsx)(i.Z,{sx:{width:"100%",height:600},children:(0,r.jsx)(z.W,{endpoint:"/reports/",columns:o,initialState:Y,initialSorting:q})})};function Q(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function J(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,a=[],i=!0,u=!1;try{for(n=n.call(t);!(i=(r=n.next()).done)&&(a.push(r.value),!e||a.length!==e);i=!0);}catch(c){u=!0,o=c}finally{try{i||null==n.return||n.return()}finally{if(u)throw o}}return a}}(t,e)||function(t,e){if(!t)return;if("string"===typeof t)return Q(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Q(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var K=function(){var t=J(d.useState(!1),2),e=t[0],n=t[1];return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a(),{children:(0,r.jsx)("title",{children:"BOLD Reports"})}),(0,r.jsx)(i.Z,{component:"main",sx:{flexGrow:1,py:8},children:(0,r.jsx)(u.Z,{maxWidth:!1,children:(0,r.jsxs)(c.Z,{children:[(0,r.jsx)(l.Z,{title:"Reports",action:(0,r.jsx)(s.Z,{variant:"contained",onClick:function(){return n(!0)},children:"Create Report"})}),(0,r.jsx)(f.Z,{children:(0,r.jsx)(B,{})})]})})}),(0,r.jsx)(m.Y,{title:"Create Report",open:e,onClose:function(){return n(!1)},children:(0,r.jsx)(V,{onClose:function(t){n(!1)}})})]})};K.getLayout=function(t){return(0,r.jsx)(p.A,{showNavbar:!1,children:t})};var tt=K},68699:function(t,e,n){"use strict";n.d(e,{VC:function(){return s},dr:function(){return d},gg:function(){return m},kE:function(){return l},lU:function(){return f},lw:function(){return c},rZ:function(){return y},wN:function(){return p}});var r=n(25934);function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),r.forEach((function(e){a(t,e,n[e])}))}return t}function u(t){return function(t){if(Array.isArray(t))return o(t)}(t)||function(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"===typeof t)return o(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var c=function(t){return{metadata:{name:t},content:{cells:{},cell_order:[]},results:{outputs:{},states:{}}}},l=function(t,e){return e=null!==e&&void 0!==e?e:{id:(0,r.Z)()},"code"===t?{cell_type:"code",metadata:e,source:"SELECT * \n{ ?s ?p ?o } \nLIMIT 10"}:"markdown"===t?{cell_type:"markdown",metadata:e,source:["# Markdown cell"]}:t.startsWith("widget_")?{cell_type:t,metadata:e,source:[],data:{}}:void 0},s=function(t,e,n){return i({},t,{content:i({},t.content,{cells:i({},t.content.cells,a({},e,n))}),results:{outputs:i({},t.results.outputs,a({},e,[])),states:i({},t.results.states,a({},e,{status:"INITIAL"}))}})},f=function(t,e,n){return i({},t,{results:i({},t.results,{outputs:i({},t.results.outputs,a({},e,n))})})},d=function(t,e,n){return i({},t,{results:i({},t.results,{states:i({},t.results.states,a({},e,i({},t.results.states[e],n)))})})},p=function(t,e,n){return i({},t,{content:i({},t.content,{cells:i({},t.content.cells,a({},e,i({},t.content.cells[e],{metadata:i({},t.content.cells[e].metadata,n)})))})})},m=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:-1,r=e.metadata.id,o=u(t.content.cell_order);return-1===n?o.push(r):o.splice(n+1,0,r),i({},t,{content:i({},t.content,{cells:i({},t.content.cells,a({},r,e)),cell_order:o})})},y=function(t,e){var n=u(t.content.cell_order),r=n.indexOf(e);-1!==r&&n.splice(r,1);var o=i({},t.content.cells);return delete o[e],i({},t,{content:i({},t.content,{cells:o,cell_order:n})})}},25934:function(t,e,n){"use strict";var r;n.d(e,{Z:function(){return f}});var o=new Uint8Array(16);function a(){if(!r&&!(r="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!==typeof msCrypto&&"function"===typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return r(o)}var i=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var u=function(t){return"string"===typeof t&&i.test(t)},c=[],l=0;l<256;++l)c.push((l+256).toString(16).substr(1));var s=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(c[t[e+0]]+c[t[e+1]]+c[t[e+2]]+c[t[e+3]]+"-"+c[t[e+4]]+c[t[e+5]]+"-"+c[t[e+6]]+c[t[e+7]]+"-"+c[t[e+8]]+c[t[e+9]]+"-"+c[t[e+10]]+c[t[e+11]]+c[t[e+12]]+c[t[e+13]]+c[t[e+14]]+c[t[e+15]]).toLowerCase();if(!u(n))throw TypeError("Stringified UUID is invalid");return n};var f=function(t,e,n){var r=(t=t||{}).random||(t.rng||a)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,e){n=n||0;for(var o=0;o<16;++o)e[n+o]=r[o];return e}return s(r)}}},function(t){t.O(0,[502,83,392,732,551,648,774,888,179],(function(){return e=99828,t(t.s=e);var e}));var e=t.O();_N_E=e}]);