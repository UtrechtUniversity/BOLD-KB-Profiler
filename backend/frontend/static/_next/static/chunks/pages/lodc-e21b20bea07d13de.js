(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[658],{59748:function(e,t,n){"use strict";var r=n(95318);t.Z=void 0;var a=r(n(64938)),i=n(85893),o=(0,a.default)([(0,i.jsx)("path",{d:"M12 5.99 19.53 19H4.47L12 5.99M12 2 1 21h22L12 2z"},"0"),(0,i.jsx)("path",{d:"M13 16h-2v2h2zm0-6h-2v5h2z"},"1")],"WarningAmber");t.Z=o},66343:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/lodc",function(){return n(67993)}])},67993:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return pe}});var r=n(85893),a=n(9008),i=n.n(a),o=n(99226),l=n(53156),s=n(66242),c=n(78445),u=n(44267),d=n(76992),f=n(81458),m=n(99964),p=n(67294),h=n(88767),b=n(25778),y=n(34051),v=n.n(y),x=n(62400);function j(e,t,n,r,a,i,o){try{var l=e[i](o),s=l.value}catch(c){return void n(c)}l.done?t(s):Promise.resolve(s).then(r,a)}function w(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){w(e,t,n[t])}))}return e}var _=function(){var e,t=(e=v().mark((function e(){var t,n;return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.x1.get("lodc/datasets");case 2:return t=e.sent,n=Object.values(t.data).map((function(e){return g({id:e._id},e)})),e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,a){var i=e.apply(t,n);function o(e){j(i,r,a,o,l,"next",e)}function l(e){j(i,r,a,o,l,"throw",e)}o(void 0)}))});return function(){return t.apply(this,arguments)}}(),Z=n(58953),O=n(65362),S=n(26615),k=n(27798),P=n(41664),A=n.n(P),D=n(94054),N=n(40476),C=n(53457),L=n(50480),M=n(69368),I=n(97212),E=n(59334),G=n(50122),q=n(15861),F=n(83321),T=n(86886),W=n(61903),R=n(47312),V=n(85945),z=n(18972),K=n(54048),Q=n(82580),H=n(9386),U=n(87177),B=n(74231),X=n(59748),$=n(17224);function Y(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function J(e,t,n,r,a,i,o){try{var l=e[i](o),s=l.value}catch(c){return void n(c)}l.done?t(s):Promise.resolve(s).then(r,a)}function ee(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function te(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){ee(e,t,n[t])}))}return e}function ne(e){return function(e){if(Array.isArray(e))return Y(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return Y(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Y(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var re,ae=function(e){var t=e.formik,n=e.fieldName,a=e.title,i=e.emptyMessage,o=e.options,l=e.restrictKG,s=void 0===l||l,c=(0,p.useCallback)((function(e,r){e.target.checked?(t.setFieldValue(n,ne(t.values[n]).concat([r])),"sparql"===n?t.setFieldValue("files",[]):t.setFieldValue("sparql",[])):t.setFieldValue(n,t.values[n].filter((function(e){return e!==r})))}),[t,n]);return(0,r.jsxs)(D.Z,{component:"fieldset",variant:"standard",children:[(0,r.jsx)(N.Z,{component:"legend",children:a}),(0,r.jsxs)(C.Z,{children:[o.map((function(e,a){return(0,r.jsx)(L.Z,{control:(0,r.jsx)(M.Z,{checked:t.values[n].includes(e.url),onChange:function(t){return c(t,e.url)},disabled:!e.available||s&&"NO"==e.detect_kg}),label:(0,r.jsx)(I.ZP,{alignItems:"flex-start",children:(0,r.jsx)(E.Z,{primary:(0,r.jsxs)(G.Z,{href:e.url,target:"_blank",children:[e.title," ",(0,r.jsx)(K.Z,{fontSize:"small"})," ",!e.available&&(0,r.jsx)(X.Z,{fontSize:"small"})]}),secondary:e.description})})},a)})),0===o.length&&(0,r.jsx)(q.Z,{variant:"body2",children:i})]})]})},ie=function(e){var t,n=(0,p.useState)(!1),a=n[0],i=n[1],o=(0,U.Z)().sendNotification,l=e.dataset,s=e.onComplete,c=B.Ry({}),u=(0,Q.TA)({initialValues:{name:l.title,description:(null===(t=l.description)||void 0===t?void 0:t.en)||"",files:[],sparql:[],search_mode:"LOCAL"},validationSchema:c,onSubmit:function(){var e,t=(e=v().mark((function e(t){var n,r;return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i(!0),e.prev=1,n=null,r=t.sparql.length?{source_type:"sparql",sparql:t.sparql[0]}:{source_type:"urls",urls:t.files},e.next=6,x.x1.post("/datasets/",{name:t.name,description:t.description,source:te({lodc_id:l.identifier},r),mode:"sparql"===r.source_type?"SPARQL":"LOCAL",search_mode:t.search_mode});case 6:(n=e.sent)&&(201===n.status?(console.log(n.data),o({message:"LODC dataset scheduled for import",variant:"success"}),s(!0)):o({message:"Error creating dataset",variant:"error"})),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.error(e.t0);case 13:i(!1);case 14:case"end":return e.stop()}}),e,null,[[1,10]])})),function(){var t=this,n=arguments;return new Promise((function(r,a){var i=e.apply(t,n);function o(e){J(i,r,a,o,l,"next",e)}function l(e){J(i,r,a,o,l,"throw",e)}o(void 0)}))});return function(e){return t.apply(this,arguments)}}()});return p.useEffect((function(){u.resetForm()}),[l]),(0,r.jsx)(H.Y,{form:u,loading:a,actions:(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(F.Z,{variant:"contained",type:"submit",children:"Submit"})}),children:(0,r.jsxs)(T.ZP,{container:!0,spacing:3,children:[(0,r.jsx)(T.ZP,{item:!0,xs:12,children:(0,r.jsx)(G.Z,{href:"https://lod-cloud.net/dataset/".concat(l.identifier),target:"_blank",children:(0,r.jsxs)(q.Z,{variant:"body2",children:["Open on Linked Open Data Cloud ",(0,r.jsx)(K.Z,{fontSize:"small"})]})})}),(0,r.jsx)(T.ZP,{item:!0,xs:12,children:(0,r.jsx)(W.Z,te({label:"Name",variant:"outlined",fullWidth:!0},(0,$.s)(u,"name")))}),(0,r.jsx)(T.ZP,{item:!0,xs:12,children:(0,r.jsx)(W.Z,te({maxRows:4,label:"Description",variant:"outlined",multiline:!0,fullWidth:!0},(0,$.s)(u,"description")))}),(0,r.jsx)(T.ZP,{item:!0,xs:12,children:(0,r.jsx)(ae,{formik:u,fieldName:"files",title:"Full download",emptyMessage:"No full downloads available",options:l.full_download})}),(0,r.jsx)(T.ZP,{item:!0,xs:12,children:(0,r.jsx)(ae,{formik:u,fieldName:"files",title:"Other download",emptyMessage:"No other downloads available",options:l.other_download})}),(0,r.jsx)(T.ZP,{item:!0,xs:12,children:(0,r.jsx)(ae,{formik:u,fieldName:"sparql",title:"SPARQL endpoint",emptyMessage:"No SPARQL endpoints available",restrictKG:!1,options:l.sparql})}),(0,r.jsx)(T.ZP,{item:!0,xs:12,children:(0,r.jsxs)(D.Z,{fullWidth:!0,children:[(0,r.jsx)(R.Z,{id:"search_mode_label",children:"Search Mode"}),(0,r.jsxs)(V.Z,te({labelId:"search_mode_label",label:"Search Mode"},(0,$.s)(u,"search_mode"),{children:[(0,r.jsx)(z.Z,{value:"LOCAL",children:"Build Local Search Index"}),(0,r.jsx)(z.Z,{value:"WIKIDATA",children:"Use WikiData API"})]}))]})})]})})};function oe(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function le(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function se(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,i=[],o=!0,l=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);o=!0);}catch(s){l=!0,a=s}finally{try{o||null==n.return||n.return()}finally{if(l)throw a}}return i}}(e,t)||ue(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ce(e){return function(e){if(Array.isArray(e))return oe(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||ue(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ue(e,t){if(e){if("string"===typeof e)return oe(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?oe(e,t):void 0}}var de=[{field:"identifier",headerName:"ID",flex:.5},{field:"title",headerName:"Title",flex:1,minWidth:200,renderCell:function(e){return(0,r.jsx)(A(),{href:"https://lod-cloud.net/dataset/".concat(encodeURIComponent(e.row.identifier)),target:"_blank",children:e.value})}},{field:"description",headerName:"Description",flex:1,valueGetter:function(e){return null!==(re=e.row.description.en)&&void 0!==re?re:""},renderCell:function(e){return(0,r.jsx)(b.j,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){le(e,t,n[t])}))}return e}({},e,{maxLength:80}))}},{field:"domain",headerName:"Domain",flex:.5},{field:"website",headerName:"Website",flex:.5},{field:"triples",headerName:"Triples",flex:.5,type:"number",valueGetter:function(e){return e.row.triples?e.row.triples.toString().replaceAll(/[.,]/g,""):null}},{field:"n_downloads_available",headerName:"Downloads Available",type:"number"},{field:"n_downloads_kg",headerName:"Downloads KG",type:"number"},{field:"n_downloads_maybekg",headerName:"Downloads Maybe KG",type:"number"},{field:"n_kg_available",headerName:"KG Available",type:"number",width:180}],fe=function(e){var t=(0,h.useQuery)("lodc-datasets",_).data,n=se(p.useState(null),2),a=n[0],i=n[1],l=ce(de).concat([{field:"actions",type:"actions",getActions:function(e){return[(0,r.jsx)(O.u,{icon:(0,r.jsx)(Z.Z,{}),onClick:function(){return t=e.row,void i(t);var t},label:"Import"})]}}]);return(0,r.jsxs)(o.Z,{sx:{width:"100%",height:600},children:[(0,r.jsx)(S._,{components:{Toolbar:k.n,LoadingOverlay:f.Z},rows:t||[],loading:!t,columns:l,getRowHeight:function(){return"auto"},getEstimatedRowHeight:function(){return 100},initialState:{filter:{filterModel:{items:[{columnField:"n_kg_available",operatorValue:">",value:"0"}]}},columns:{columnVisibilityModel:{n_downloads_available:!1,n_downloads_kg:!1,n_downloads_maybekg:!1}}},componentsProps:{toolbar:{showQuickFilter:!0,quickFilterProps:{debounceMs:500}}},sx:{"&.MuiDataGrid-root--densityCompact .MuiDataGrid-cell":{py:1,overflow:"hidden"},"&.MuiDataGrid-root--densityStandard .MuiDataGrid-cell":{py:"15px",overflow:"hidden"},"&.MuiDataGrid-root--densityComfortable .MuiDataGrid-cell":{py:"22px",overflow:"hidden"}}}),(0,r.jsx)(m.Z,{open:null!==a,onClose:function(){return i(null)},"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,r.jsxs)(s.Z,{sx:{width:600,position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",maxHeight:"100%",display:"flex",flexDirection:"column"},children:[(0,r.jsx)(c.Z,{title:"Import LODC Dataset"}),(0,r.jsx)(u.Z,{sx:{overflow:"auto",flex:1},children:(0,r.jsx)(ie,{dataset:a,onComplete:function(e){i(null)}})})]})})]})},me=function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i(),{children:(0,r.jsx)("title",{children:"BOLD LODC datasets"})}),(0,r.jsx)(o.Z,{component:"main",sx:{flexGrow:1,py:8},children:(0,r.jsx)(l.Z,{maxWidth:!1,children:(0,r.jsxs)(s.Z,{children:[(0,r.jsx)(c.Z,{title:"Linked Open Data Cloud Datasets"}),(0,r.jsx)(u.Z,{children:(0,r.jsx)(fe,{})})]})})})]})};me.getLayout=function(e){return(0,r.jsx)(d.A,{showNavbar:!1,children:e})};var pe=me}},function(e){e.O(0,[502,464,17,551,91,786,774,888,179],(function(){return t=66343,e(e.s=t);var t}));var t=e.O();_N_E=t}]);