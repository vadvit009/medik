(this.webpackJsonpmedtech=this.webpackJsonpmedtech||[]).push([[13],{172:function(e,t,a){"use strict";var n=a(9),i=a(46),l=a(0),c=a.n(l),_=a(173),s=a.n(_),u=a(7),o=a(109),r={entering:{transform:"scale(1.2)"},entered:{transform:"scale(1.2)"},exiting:{transform:"scale(1)"},exited:{transform:"scale(1)"}};t.a=function(e){var t=e.type,a=e.label,_=e.defaultValue,m=e.value,p=e.icon,d=e.onFocus,f=void 0===d?function(){}:d,g=e.onBlur,N=void 0===g?function(){}:g,E=e.style,b=void 0===E?{}:E,w=e.inputStyle,v=void 0===w?{}:w,h=e.onChange,y=void 0===h?function(){}:h,O=e.placeholder,j=void 0===O?"":O,k=Object(i.a)(e,["type","label","defaultValue","value","icon","onFocus","onBlur","style","inputStyle","onChange","placeholder"]),B=Object(l.useState)(!1),x=Object(n.a)(B,2),C=x[0],I=x[1],S=function(){I(!0),f()},P=function(){I(!1),N()};return p?c.a.createElement("div",{className:s.a.input__container},c.a.createElement("p",{className:s.a.label},a),c.a.createElement("div",{className:s.a.custom_input,style:v},c.a.createElement(o.a,{in:C,timeout:100},(function(e){return c.a.createElement("div",{className:s.a.input__icon__container},c.a.createElement(u.a,Object.assign({icon:p},{style:r[e],className:s.a.input__icon,color:"#6a6a6a",size:"lg"})))})),c.a.createElement("input",Object.assign({style:b},{type:t||"text",alt:"loading"},{placeholder:j},{onFocus:S,onBlur:P},{onChange:y},{value:m},{className:"".concat(s.a.input," ").concat(s.a.input_with_icon),defaultValue:_},k)))):c.a.createElement("div",{className:s.a.input__container},c.a.createElement("p",{className:s.a.label},a),c.a.createElement("input",Object.assign({style:b},{type:t||"text",className:s.a.input,onFocus:S,onBlur:P},{onChange:y},{defaultValue:_},{value:m},k,{placeholder:j})))}},173:function(e,t,a){e.exports={input__container:"ProfileInput_input__container__YdTf3",input__icon:"ProfileInput_input__icon__3b2IR",input:"ProfileInput_input__1qD-N",input_with_icon:"ProfileInput_input_with_icon__ZXQgN",custom_input:"ProfileInput_custom_input__OoZtv",input__icon__container:"ProfileInput_input__icon__container__25H2X"}},209:function(e,t,a){e.exports={title__container:"EditNews_title__container__3GXEa",title:"EditNews_title__1SnJN",input__container:"EditNews_input__container__3ISko",news__content:"EditNews_news__content__2eC3S",label:"EditNews_label__3TsXJ",input:"EditNews_input__32lDf",title__input:"EditNews_title__input__3PWYN",textarea:"EditNews_textarea__6Il5U",image__input:"EditNews_image__input__2XCRy",input__image:"EditNews_input__image__24hA8",upload__image:"EditNews_upload__image__1NXCH",uploaded__image:"EditNews_uploaded__image__1MLNH",goBack__but:"EditNews_goBack__but__2m_4E",goBack:"EditNews_goBack__2mcGm"}},230:function(e,t,a){"use strict";a.r(t);var n=a(9),i=a(0),l=a.n(i),c=a(209),_=a.n(c),s=a(35),u=(a(172),a(20)),o=a(22),r=a(7),m=a(6),p=a(14),d=a(70);t.default=Object(p.b)((function(e){return{singleNews:e.news.single}}),(function(e){return{getSingleNews:function(t){return e(Object(d.b)(t))}}}))((function(e){var t=e.getSingleNews,a=e.match,c=e.singleNews,p=c.title,d=c.gallery,f=c.desc;c.createdAt,c._id;console.log(c),Object(i.useEffect)((function(){t(a.params.id)}),[]),console.log("singleNews ===",c);var g=Object(i.useRef)(null),N=Object(i.useRef)(null),E=Object(o.g)();return l.a.createElement("div",null,l.a.createElement("div",{className:_.a.title__container},l.a.createElement("h4",{className:_.a.title},"\u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u043d\u043d\u044f \u043d\u043e\u0432\u0438\u043d\u0438")),l.a.createElement(s.a,null,l.a.createElement("div",{className:_.a.input__container},l.a.createElement("div",{className:_.a.title__input},l.a.createElement("span",{className:_.a.label},"\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a"),l.a.createElement("input",{defaultValue:p,className:_.a.input})),l.a.createElement("div",{className:_.a.image__input},l.a.createElement("span",{className:_.a.label},"\u041d\u0430\u0442\u0438\u0441\u043d\u0456\u0442\u044c \u043d\u0430 \u0444\u043e\u0442\u043e, \u0449\u043e\u0431 \u043e\u0431\u0440\u0430\u0442\u0438 \u043d\u043e\u0432\u0435"),l.a.createElement("input",{type:"file",accept:"image/*",onChange:function(e){var t=Object(n.a)(e.target.files,1)[0];if(t){var a=new FileReader,i=g.current;i.file=t,a.onload=function(e){i.src=e.target.result},a.readAsDataURL(t)}},ref:N,className:_.a.input__image}),l.a.createElement("div",{className:_.a.upload__image,onClick:function(){return N.current.click()}},l.a.createElement("img",{alt:"loading",defaultValue:d,ref:g,src:d,style:{width:"100%",height:"100%"}}))),l.a.createElement("div",{className:_.a.news__content},l.a.createElement("span",{className:_.a.label},"\u0422\u0435\u043a\u0441\u0442 \u043d\u043e\u0432\u0438\u043d\u0438"),l.a.createElement("textarea",{className:_.a.textarea,defaultValue:f})),l.a.createElement(u.a,{title:"\u0417\u0431\u0435\u0440\u0435\u0433\u0442\u0438 \u0437\u043c\u0456\u043d\u0438"}),l.a.createElement("button",{className:_.a.goBack__but,onClick:function(){E.goBack()}},l.a.createElement(r.a,{icon:m.b,className:_.a.goBack}),"\u041f\u043e\u0432\u0435\u0440\u043d\u0443\u0442\u0438\u0441\u044f"))))}))}}]);
//# sourceMappingURL=13.56caea91.chunk.js.map