"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[489],{489:function(t,e,r){r.r(e),r.d(e,{default:function(){return i}});var n=r(152),o=r(791),a=r(931),u=r(523),c=r(184);function i(){var t=(0,a.$B)(),e=(0,o.useState)(""),r=(0,n.Z)(e,2),i=r[0],l=r[1],s=(0,o.useState)(""),f=(0,n.Z)(s,2),h=f[0],d=f[1];return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("header",{className:"Searchbar",children:(0,c.jsxs)("form",{className:"SearchForm",onSubmit:function(t){t.preventDefault(),""!==i.trim()&&(""!==i&&fetch("https://api.themoviedb.org/3/search/movie?api_key=c92c75743b7b53c3d8b6c69fd6fd4463&query=".concat(i,"&append_to_response=images,credits,reviews")).then((function(t){return t.json()})).then((function(t){return d(t)})),l(""))},children:[(0,c.jsx)("button",{type:"submit",className:"SearchForm-button",children:"Search"}),(0,c.jsx)("input",{className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:i,onChange:function(t){l(t.currentTarget.value.toLowerCase())}})]})}),(0,c.jsx)("hr",{}),(0,c.jsx)("ul",{children:h&&(null===h||void 0===h?void 0:h.results.map((function(e){return(0,c.jsx)("li",{children:(0,c.jsx)(u.rU,{to:"".concat(t.url,"/").concat(e.id),children:e.title})},e.id)})))})]})}},152:function(t,e,r){function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,a=[],u=!0,c=!1;try{for(r=r.call(t);!(u=(n=r.next()).done)&&(a.push(n.value),!e||a.length!==e);u=!0);}catch(i){c=!0,o=i}finally{try{u||null==r.return||r.return()}finally{if(c)throw o}}return a}}(t,e)||function(t,e){if(t){if("string"===typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.d(e,{Z:function(){return o}})}}]);
//# sourceMappingURL=489.1bd146a0.chunk.js.map