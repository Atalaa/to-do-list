(this["webpackJsonpto-do-list"]=this["webpackJsonpto-do-list"]||[]).push([[0],{15:function(e,t,n){e.exports=n(27)},25:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(9),u=n.n(r),l=function(){return c.a.createElement("div",{className:"heading"},c.a.createElement("h1",null,"To-Do List"))},o=n(13),i=n(2),s=n(39),m=function(e){var t=Object(a.useState)(""),n=Object(i.a)(t,2),r=n[0],u=n[1],l=Object(a.useRef)(null);Object(a.useEffect)((function(){l.current.focus()}));return c.a.createElement("form",{className:"form",onSubmit:function(t){t.preventDefault(),e.onAdd({task:r,id:Object(s.a)()}),u("")}},c.a.createElement("input",{ref:l,className:"task-input",maxLength:"20",type:"text",name:"item",value:r,placeholder:"Add a task ...",onChange:function(e){var t=e.target.value;u(t)}}),c.a.createElement("button",{type:"submit",className:"task-button"},"Add"))},d=n(12),f=n.n(d),E=n(10),b=n.n(E),p=function(e){var t=Object(a.useState)(!1),n=Object(i.a)(t,2),r=n[0],u=(n[1],Object(a.useRef)(null));Object(a.useEffect)((function(){e.editId===e.currentItem.id&&u.current.focus()}));return c.a.createElement("div",{className:r?"taskItem done":"taskItem"},e.editId===e.currentItem.id&&c.a.createElement("form",{className:"form"},c.a.createElement("input",{ref:u,className:"task-input edit",maxLength:"20",type:"text",name:"item",value:e.inputValue,placeholder:"Edit your task ...",onChange:function(t){var n=t.target.value;e.setInputValue(n)},style:{border:"2px solid #1dd1a1"}}),c.a.createElement("button",{onClick:function(){return e.onEdit(e.currentItem.id,e.inputValue)},type:"submit",className:"task-button edit",style:{color:"#333",backgroundColor:"#1dd1a1"}},"Save")),e.editId!==e.currentItem.id&&c.a.createElement(c.a.Fragment,null,c.a.createElement("li",null,e.currentItem.task),c.a.createElement("div",{className:"icons"},c.a.createElement(b.a,{onClick:function(){return e.handleEditChange(e.currentItem.id,e.currentItem.task)}}),c.a.createElement(f.a,{onClick:function(){return e.onDelete(e.id)}}))))},k=function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),n=t[0],r=t[1],u=Object(a.useState)(!1),l=Object(i.a)(u,2),s=l[0],d=l[1],f=function(e,t){d(e),r(t)},E=Object(a.useState)([]),b=Object(i.a)(E,2),k=b[0],v=b[1],I=function(e){e&&!/^\s*$/.test(e)&&v((function(t){return[e].concat(Object(o.a)(t))}))},j=function(e,t){t&&!/^\s*$/.test(t)&&(v((function(n){return n.map((function(n){return console.log("map",n.id===e?t:n),n.id===e&&(n.task=t),n}))})),d(!1))},O=function(e){v((function(t){return t.filter((function(t,n){return n!==e}))}))};return console.log(k),c.a.createElement("div",null,c.a.createElement(m,{onAdd:I}),c.a.createElement("div",null,c.a.createElement("ul",null,k.map((function(e,t){return c.a.createElement(p,{key:t,id:t,onAdd:I,onDelete:O,onEdit:j,currentItem:e,inputValue:n,setInputValue:r,handleEditChange:f,editId:s})})))))};var v=function(){return c.a.createElement("div",{className:"container"},c.a.createElement(l,null),c.a.createElement(k,null))};n(25);u.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(v,null)),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.c71b8e55.chunk.js.map