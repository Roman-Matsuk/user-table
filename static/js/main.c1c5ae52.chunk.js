(this["webpackJsonpuser-table"]=this["webpackJsonpuser-table"]||[]).push([[0],{10:function(e,t,r){},11:function(e,t,r){},13:function(e,t,r){"use strict";r.r(t);var n=r(1),c=r.n(n),s=r(4),i=r.n(s),a=(r(10),r(3)),u=(r(11),r(5)),o=r.n(u),l=r(0),d=function(e){var t=e.body,r=e.users,n=function(e,t,r,n){switch(t){case 1:return;case 2:var c=n.findIndex((function(e){return e[2]===r[2]&&e!==r}));return e.length>12||-1!==c?"error":void 0;case 3:var s=n.findIndex((function(e){return e[3]===r[3]&&e!==r}));return e.includes("@")&&-1===s?void 0:"error";case 4:return 0===+e||+e<21||isNaN(+e)?"error":void 0;case 5:return+r[t-1]<+e?"error":void 0;case 6:return+e>1e6||""===e?"error":void 0;case 7:return void(""===e&&(e="FALSE"));case 9:return e.includes("-")?4===e.split("-")[0].length?"":"error":e.includes("/")&&2===e.split("/")[0].length?"":"error";case 10:return 6!==e.length?"error":void 0;default:return}};return Object(l.jsx)("tbody",{className:"employees__body",children:Object(l.jsx)("tr",{children:t.map((function(e,t,c){return 7===t&&""===e&&(e="FALSE"),Object(l.jsx)("td",{className:n(e,t,c,r),children:e},t)}))})})},f=function(e){var t=e.header;return Object(l.jsx)("thead",{className:"employees__header",children:Object(l.jsx)("tr",{className:"employees__header--cell",children:t.map((function(e,t){return Object(l.jsx)("th",{children:e},t)}))})})},h=function(e){var t=e.employeesData;return console.log(t),Object(l.jsx)("table",{className:"employees",children:t.map((function(e,t,r){return 0===t?Object(l.jsx)(f,{header:e},t):Object(l.jsx)(d,{body:e,users:r},t)}))})};var j=function(){var e=Object(n.useState)([]),t=Object(a.a)(e,2),r=t[0],c=t[1],s=Object(n.useState)(!0),i=Object(a.a)(s,2),u=i[0],d=i[1],f=function(e){e[0]&&o.a.parse(e[0],{complete:function(e){var t=function(e){if(!e.some((function(e,t){return""===e[2]||""===e[1]}))){for(var t=e.filter((function(e){return e.length>1})).map((function(e,t){if(0===t)return e.unshift("ID"),e.push("Duplicate with"),e;if(!e[1].includes("+1")){var r=e[1].split("");r.unshift("+1"),e[1]=r.join("")}return e.unshift(t),Number.isInteger(+e[6])||(e[6]=Number(e[6]).toFixed(2)),e})),r=function(e){var r=t.findIndex((function(r){return r[2]===t[e][2]&&r!==t[e]||r[3].toLowerCase()===t[e][3].toLowerCase()&&r!==t[e]}));r>0?t[e].push(r):t[e].push("")},n=1;n<t.length;n++)r(n);return t}d(!1)}(e.data);c(t)}})};return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("label",{className:"import__label",htmlFor:"file-input-id",children:"Import users"}),Object(l.jsx)("input",{className:"import__input",type:"file",id:"file-input-id",accept:".csv",onChange:function(e){e.target.files[0].name.includes(".csv")?(c([]),d(!0),f(e.target.files)):d(!1)}}),u?Object(l.jsx)(h,{employeesData:r}):Object(l.jsx)("p",{className:"input__error",children:"File format is not correct"})]})},p=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,14)).then((function(t){var r=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;r(e),n(e),c(e),s(e),i(e)}))};i.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(j,{})}),document.getElementById("root")),p()}},[[13,1,2]]]);
//# sourceMappingURL=main.c1c5ae52.chunk.js.map