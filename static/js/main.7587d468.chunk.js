(this["webpackJsonpuser-table"]=this["webpackJsonpuser-table"]||[]).push([[0],[,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),s=n(4),i=n.n(s),u=(n(10),n(3)),a=(n(11),n(5)),o=n.n(a),l=(n(12),n(0)),d=function(e){var t=e.body,n=e.users,r=function(e,t,n,r){switch(t){case 2:var c=r.findIndex((function(e){return e[2]===n[2]&&e!==n}));return e.length>12||-1!==c?"error":void 0;case 3:var s=r.findIndex((function(e){return e[3]===n[3]&&e!==n}));return e.includes("@")&&-1===s?void 0:"error";case 4:return 0===+e||+e<21||isNaN(+e)?"error":void 0;case 5:return+n[t-1]<+e?"error":void 0;case 6:return+e>1e6||""===e?"error":void 0;case 9:return e.includes("-")?4===e.split("-")[0].length?"":"error":e.includes("/")&&2===e.split("/")[0].length?"":"error";case 10:return 6!==e.length?"error":void 0;default:return}};return Object(l.jsx)("tbody",{className:"employees__body",children:Object(l.jsx)("tr",{children:t.map((function(e,t,c){return 7===t&&""===e&&(e="FALSE"),8===t&&1===e.split(", ").length&&(e=e.slice(0,2).toUpperCase()),8===t&&e.includes(", ")&&(e=e.split(", ").join(" | ")),Object(l.jsx)("td",{className:r(e,t,c,n),children:e},t)}))})})},f=(n(14),function(e){var t=e.header;return Object(l.jsx)("thead",{className:"employees__header",children:Object(l.jsx)("tr",{className:"employees__header--cell",children:t.map((function(e,t){return Object(l.jsx)("th",{children:e},t)}))})})}),p=(n(15),function(e){var t=e.employeesData;return Object(l.jsx)("table",{className:"employees",children:t.map((function(e,t,n){return 0===t?Object(l.jsx)(f,{header:e},t):Object(l.jsx)(d,{body:e,users:n},t)}))})});var h=function(){var e=Object(r.useState)([]),t=Object(u.a)(e,2),n=t[0],c=t[1],s=Object(r.useState)(!0),i=Object(u.a)(s,2),a=i[0],d=i[1],f=function(e){e[0]&&o.a.parse(e[0],{complete:function(e){var t=function(e){if(!e.some((function(e,t){return""===e[2]||""===e[1]}))){for(var t=e.filter((function(e){return e.length>1})).map((function(e,t){if(0===t)return e.unshift("ID"),e.push("Duplicate with"),e;if(!e[1].includes("+1")){var n=e[1].split("");n.unshift("+1"),e[1]=n.join("")}return e.unshift(t),Number.isInteger(+e[6])||(e[6]=Number(e[6]).toFixed(2)),e})),n=function(e){var n=t.findIndex((function(n){return n[2]===t[e][2]&&n!==t[e]||n[3].toLowerCase()===t[e][3].toLowerCase()&&n!==t[e]}));n>0?t[e].push(n):t[e].push("")},r=1;r<t.length;r++)n(r);return t}d(!1)}(e.data);c(t)}})};return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("label",{className:"App__label",htmlFor:"file-input-id",children:"Import users"}),Object(l.jsx)("input",{className:"App__input",type:"file",id:"file-input-id",accept:".csv",onChange:function(e){e.target.files[0].name.includes(".csv")?(c([]),d(!0),f(e.target.files)):d(!1)}}),a?Object(l.jsx)(p,{employeesData:n}):Object(l.jsx)("p",{className:"App__error",children:"File format is not correct"})]})},j=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),r(e),c(e),s(e),i(e)}))};i.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(h,{})}),document.getElementById("root")),j()}],[[16,1,2]]]);
//# sourceMappingURL=main.7587d468.chunk.js.map