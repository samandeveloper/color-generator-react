(this.webpackJsonpreminder=this.webpackJsonpreminder||[]).push([[0],{10:function(e,t,a){},11:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(4),o=a.n(r),l=(a(10),a(1)),i=function(e){var t=e.hexColor,a=e.weight,r=e.index,o=Object(n.useState)(!1),i=Object(l.a)(o,2),s=i[0],u=i[1];console.log(t);return Object(n.useEffect)((function(){var e=setTimeout((function(){u(!1)}),3e3);return function(){clearTimeout(e)}}),[s]),c.a.createElement("article",{className:"color ".concat(r>10&&"color-light"),style:{backgroundColor:"#".concat(t)},onClick:function(){u(!0),navigator.clipboard.writeText("#".concat(t))}},c.a.createElement("p",{className:"percent-value"},a,"%"),c.a.createElement("p",{className:"color-value"},"#",t),s&&c.a.createElement("p",{className:"alert"},"copied to clipboard"))},s=a(2),u=a.n(s);var m=function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)(!1),s=Object(l.a)(o,2),m=s[0],b=s[1],p=Object(n.useState)(new u.a("#f15025").all(10)),d=Object(l.a)(p,2),f=d[0],E=d[1];return c.a.createElement("div",null,c.a.createElement("section",{className:"container"},c.a.createElement("h3",null,"color generator"),c.a.createElement("form",{onSubmit:function(e){e.preventDefault();try{var t=new u.a(a).all(10);console.log(t),E(t)}catch(m){b(!0),console.log(m)}}},c.a.createElement("input",{type:"text",placeholder:"#f15025",value:a,onChange:function(e){return r(e.target.value)},style:{border:m?"1px solid red":"1px solid white"}}),c.a.createElement("button",{type:"submit",className:"btn"},"submit"))),c.a.createElement("section",{className:"colors"},f.map((function(e,t){return c.a.createElement(i,Object.assign({key:t},e,{index:t,hexColor:e.hex}))}))))};o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(m,null)),document.getElementById("root"))},5:function(e,t,a){e.exports=a(11)}},[[5,1,2]]]);
//# sourceMappingURL=main.bd62da46.chunk.js.map