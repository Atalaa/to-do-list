(this["webpackJsonpto-do-list"]=this["webpackJsonpto-do-list"]||[]).push([[0],{28:function(e,t,n){e.exports=n(39)},38:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(9),o=n.n(r),u=function(){return c.a.createElement("div",{className:"heading"},c.a.createElement("h1",null,"To-Do List"))},l=n(25),i=n(11),s=n(54),m=function(e){var t=Object(a.useState)(""),n=Object(i.a)(t,2),r=n[0],o=n[1],u=Object(a.useRef)(null);Object(a.useEffect)((function(){u.current.focus()}));return c.a.createElement("div",{className:"form"},c.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e.onAdd(r),o("")},className:"task-form"},c.a.createElement("input",{ref:u,className:"task-input",maxLength:"20",type:"text",name:"item",value:r,placeholder:"Add a task...",onChange:function(e){var t=e.target.value;o(t)}}),c.a.createElement(s.a,{className:"task-button",type:"submit",variant:"contained",style:{backgroundColor:"#fdcb6e"}},"Add")))},d=(n(24),n(23),function(e){var t=Object(a.useState)(!1),n=Object(i.a)(t,2),r=n[0],o=n[1];if(r)return c.a.createElement(m,{edit:r,onAdd:function(t){e.onEdit(e.id,t),o(!1)}})}),f=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],r=t[1],o=function(e,t){t&&!/^\s*$/.test(t)&&r((function(n){return n.map((function(n,a){return console.log("newText",t),console.log("return",a===e?t:n),a===e?t:n}))}))},u=function(e){r((function(t){return t.filter((function(t,n){return n!==e}))}))};return c.a.createElement("div",null,c.a.createElement(m,{onAdd:function(e){e&&!/^\s*$/.test(e)&&r((function(t){return[e].concat(Object(l.a)(t))}))}}),c.a.createElement("div",{className:"list"},c.a.createElement("ul",null,n.map((function(e,t){return c.a.createElement(d,{key:t,id:t,text:e,onDelete:u,onEdit:o})})))))};var E=function(){return c.a.createElement("div",{className:"todo-app"},c.a.createElement("div",{className:"container"},c.a.createElement(u,null),c.a.createElement(f,null)))};n(38);o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(E,null)),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.b585d3cd.chunk.js.map