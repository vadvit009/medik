(this.webpackJsonpmedtech=this.webpackJsonpmedtech||[]).push([[9],{202:function(e,a,t){"use strict";var n=t(8),c=t(38),i=t(0),l=t.n(i),r=t(203),o=t.n(r),u=t(9),_=t(112),s={entering:{transform:"scale(1.2)"},entered:{transform:"scale(1.2)"},exiting:{transform:"scale(1)"},exited:{transform:"scale(1)"}};a.a=function(e){var a=e.type,t=e.label,r=e.defaultValue,m=e.value,p=e.icon,d=e.onFocus,f=void 0===d?function(){}:d,b=e.onBlur,g=void 0===b?function(){}:b,v=e.style,E=void 0===v?{}:v,y=e.inputStyle,C=void 0===y?{}:y,h=e.onChange,j=void 0===h?function(){}:h,O=e.placeholder,N=void 0===O?"":O,P=Object(c.a)(e,["type","label","defaultValue","value","icon","onFocus","onBlur","style","inputStyle","onChange","placeholder"]),x=Object(i.useState)(!1),I=Object(n.a)(x,2),R=I[0],w=I[1],q=function(){w(!0),f()},B=function(){w(!1),g()};return p?l.a.createElement("div",{className:o.a.input__container},l.a.createElement("p",{className:o.a.label},t),l.a.createElement("div",{className:o.a.custom_input,style:C},l.a.createElement(_.a,{in:R,timeout:100},(function(e){return l.a.createElement("div",{className:o.a.input__icon__container},l.a.createElement(u.a,Object.assign({icon:p},{style:s[e],className:o.a.input__icon,color:"#6a6a6a",size:"lg"})))})),l.a.createElement("input",Object.assign({style:E},{type:a||"text",alt:"loading"},{placeholder:N},{onFocus:q,onBlur:B},{onChange:j},{value:m},{className:"".concat(o.a.input," ").concat(o.a.input_with_icon),defaultValue:r},P)))):l.a.createElement("div",{className:o.a.input__container},l.a.createElement("p",{className:o.a.label},t),l.a.createElement("input",Object.assign({style:E},{type:a||"text",className:o.a.input,onFocus:q,onBlur:B},{onChange:j},{defaultValue:r},{value:m},P,{placeholder:N})))}},203:function(e,a,t){e.exports={input__container:"ProfileInput_input__container__YdTf3",input__icon:"ProfileInput_input__icon__3b2IR",input:"ProfileInput_input__1qD-N",input_with_icon:"ProfileInput_input_with_icon__ZXQgN",custom_input:"ProfileInput_custom_input__OoZtv",input__icon__container:"ProfileInput_input__icon__container__25H2X"}},239:function(e,a,t){e.exports={container:"CreateProduct_container__3QpaR",body:"CreateProduct_body__1HsR3",input__container:"CreateProduct_input__container__3aArp",title__container:"CreateProduct_title__container__2K7xP",title:"CreateProduct_title__3mByT",images__container:"CreateProduct_images__container__2jI76",image__container:"CreateProduct_image__container__25_xh",image:"CreateProduct_image__2qlR9",delete__icon:"CreateProduct_delete__icon__3aL46",label:"CreateProduct_label__3bsHu"}},256:function(e,a,t){"use strict";t.r(a);var n=t(40),c=t(13),i=t(1),l=t(8),r=t(0),o=t.n(r),u=t(239),_=t.n(u),s=t(14),m=(t(81),t(61)),p=t(34),d=(t(202),t(9)),f=t(6);a.default=Object(s.b)((function(e){return{}}),(function(e){return{}}))((function(e){var a=Object(r.useState)({title:"",desc:"",gallery:[],price:"",vendor:"",quantity:1,recommended:!1}),t=Object(l.a)(a,2),u=t[0],s=t[1],b=function(e){var a=e.target,t=a.name,n=a.value;s((function(e){return Object(i.a)(Object(i.a)({},e),{},Object(c.a)({},t,n))}))},g=(Object(r.useRef)(null),Object(r.useRef)(null),Object(r.useState)({value:0,label:"\u041d\u0435\u043c\u0430\u0454 \u0432 \u043d\u0430\u044f\u0432\u043d\u043e\u0441\u0442\u0456"})),v=Object(l.a)(g,2);v[0],v[1];return Object(r.useEffect)((function(){console.log("product ===",u)}),[u]),o.a.createElement("div",{className:_.a.container},o.a.createElement("div",{className:_.a.title__container},o.a.createElement("h1",{className:_.a.title},"\u0421\u0442\u0432\u043e\u0440\u0435\u043d\u043d\u044f \u0442\u043e\u0432\u0430\u0440\u0443")),o.a.createElement(p.a,null,o.a.createElement("div",{className:_.a.body},o.a.createElement(m.a,{label:"\u041d\u0430\u0437\u0432\u0430",value:u.title,name:"title",onChange:b,containerClass:_.a.input__container}),o.a.createElement("div",{className:_.a.input__container},o.a.createElement("p",{className:_.a.label},"\u0424\u043e\u0442\u043e"),o.a.createElement("div",{className:_.a.images__container},u.gallery.map((function(e){return o.a.createElement("div",{className:_.a.image__container},o.a.createElement(d.a,{icon:f.I,className:_.a.delete__icon,onClick:function(){return function(e){var a=u.gallery.filter((function(a){return a!==e}));s((function(e){return Object(i.a)(Object(i.a)({},e),{},{gallery:a})}))}(e)}}),o.a.createElement("img",{className:_.a.image,src:e,alt:"loading"}))}))),o.a.createElement("input",{type:"file",multiple:!0,onChange:function(e){var a=e.target.files;Array.from(a).forEach((function(e){var a=new FileReader;a.onload=function(e){var a=e.target.result;s((function(e){return Object(i.a)(Object(i.a)({},e),{},{gallery:[].concat(Object(n.a)(e.gallery),[a])})})),console.log("result ===",a)},a.readAsDataURL(e)}))}})),o.a.createElement(m.a,{label:"\u041e\u043f\u0438\u0441",value:u.desc,name:"desc",onChange:b,containerClass:_.a.input__container,isTextarea:!0}),o.a.createElement(m.a,{label:"\u0426\u0456\u043d\u0430",value:u.title,onChange:b,containerClass:_.a.input__container}),o.a.createElement(m.a,{label:"\u041a\u0440\u0430\u0457\u043d\u0430 \u0432\u0438\u0440\u043e\u0431\u043d\u0438\u043a\u0430",value:u.vendor,name:"vendor",onChange:b,containerClass:_.a.input__container}),o.a.createElement(m.a,{label:"\u041a\u0456\u043b\u044c\u043a\u0456\u0441\u0442\u044c",value:u.quantity,name:"quantity",onChange:b,containerClass:_.a.input__container}))))}))}}]);
//# sourceMappingURL=9.6494512f.chunk.js.map