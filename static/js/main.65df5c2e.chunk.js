(this["webpackJsonpto-do-list"]=this["webpackJsonpto-do-list"]||[]).push([[0],{15:function(e,t,n){e.exports=n(27)},25:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(9),l=n.n(r),u=function(){return c.a.createElement("div",{className:"heading"},c.a.createElement("h1",null,"To-Do List"))},o=n(13),i=n(2),s=function(e){var t=Object(a.useState)(e.edit?e.text:""),n=Object(i.a)(t,2),r=n[0],l=n[1],u=Object(a.useRef)(null);Object(a.useEffect)((function(){u.current.focus()}));var o=function(e){var t=e.target.value;l(t)},s=function(t){t.preventDefault(),e.onAdd(r),l("")};return c.a.createElement("div",null,e.edit?c.a.createElement("form",{className:"form edit",onSubmit:s},c.a.createElement("input",{ref:u,className:"task-input edit",maxLength:"20",type:"text",name:"item",value:r,placeholder:"Edit your task ...",onChange:o,style:{border:"2px solid #1dd1a1"}}),c.a.createElement("button",{type:"submit",className:"task-button edit",style:{color:"#333",backgroundColor:"#1dd1a1"}},"Save")):c.a.createElement("form",{className:"form",onSubmit:s},c.a.createElement("input",{ref:u,className:"task-input",maxLength:"20",type:"text",name:"item",value:r,placeholder:"Add a task ...",onChange:o}),c.a.createElement("button",{type:"submit",className:"task-button"},"Add")))},m=n(12),d=n.n(m),f=n(10),E=n.n(f),b=function(e){var t=Object(a.useState)(!1),n=Object(i.a)(t,2),r=n[0],l=n[1],u=Object(a.useState)(!1),o=Object(i.a)(u,2),m=o[0];o[1];return r?c.a.createElement(s,{edit:r,text:e.text,onAdd:function(t){e.onEdit(e.id,t),l((function(e){return!e}))}}):c.a.createElement("div",{className:m?"taskItem done":"taskItem"},c.a.createElement("li",null,e.text),c.a.createElement("div",{className:"icons"},c.a.createElement(E.a,{onClick:function(){return l(!0)}}),c.a.createElement(d.a,{onClick:function(){return e.onDelete(e.id)}})))},p=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],r=t[1],l=function(e,t){t&&!/^\s*$/.test(t)&&r((function(n){return n.map((function(n,a){return console.log("map",a===e?t:n),a===e?t:n}))}))},u=function(e){r((function(t){return t.filter((function(t,n){return n!==e}))}))};return c.a.createElement("div",null,c.a.createElement(s,{onAdd:function(e){e&&!/^\s*$/.test(e)&&r((function(t){return[e].concat(Object(o.a)(t))}))}}),c.a.createElement("div",null,c.a.createElement("ul",null,n.map((function(e,t){return c.a.createElement(b,{key:t,id:t,onDelete:u,onEdit:l,text:e})})))))};var v=function(){return c.a.createElement("div",{className:"container"},c.a.createElement(u,null),c.a.createElement(p,null))};n(25);l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(v,null)),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.65df5c2e.chunk.js.map