(this.webpackJsonpmedtech=this.webpackJsonpmedtech||[]).push([[21],{197:function(e,a,t){e.exports={body:"Auth_body__2G_36",container:"Auth_container__38MaD",title__container:"Auth_title__container__3I0PX",title:"Auth_title__ahNSX",login:"Auth_login__1cL42",input__container:"Auth_input__container__K24G3",password:"Auth_password__3BfEs",fbt:"Auth_fbt__sxCqU",logwith:"Auth_logwith__1rhjU",logicon:"Auth_logicon__3iEmz",gl:"Auth_gl__2LwUK",fb:"Auth_fb__2vpKw",fakey:"Auth_fakey__15jbk",error__icon:"Auth_error__icon__1xHHe",success__icon:"Auth_success__icon__XaeFf",restore:"Auth_restore__2ihi1",reg:"Auth_reg__2vdud",goback:"Auth_goback__1gHLP",goBack:"Auth_goBack__1FVA6",submit_button:"Auth_submit_button__1Icqq",icon:"Auth_icon__1a6ap",remember__container:"Auth_remember__container__25UJT",remember__desc:"Auth_remember__desc__1_bki"}},227:function(e,a,t){"use strict";t.r(a);var n=t(1),c=t(8),r=t.n(c),l=t(19),o=t(0),i=t.n(o),s=t(197),m=t.n(s),_=t(43),u=t(90),b=t(7),h=t(81),d=t(89),p=t(6),g=t(18),E=t(22),f=t(4),A=(t(10),t(78)),v=t(16),N=t(79);a.default=Object(v.b)((function(e){return{}}),(function(e){return{login:function(a,t){return e(Object(A.b)(a,t))},showAlert:function(a){return e(Object(N.b)(a))},hideAlert:function(){return e(Object(N.a)())}}}))((function(e){var a=e.login,t=(e.hideAlert,e.showAlert),c=e.location,o=Object(E.f)(),s=[{name:"\u0413\u043e\u043b\u043e\u0432\u043d\u0430",path:"/",icon:i.a.createElement(b.a,{icon:p.p})},{name:"\u0423\u0432\u0456\u0439\u0442\u0438",path:"/login"}];return console.log("location ===",null===c||void 0===c?void 0:c.state),i.a.createElement("div",null,i.a.createElement(u.a,{initialValues:{email:"",password:"",isRemember:!1},validate:function(e){var a={};return console.log("is remember ===",e.isRemember),e.password.length<=5&&(a.password="\u0417\u0430\u043d\u0430\u0434\u0442\u043e \u043a\u043e\u0440\u043e\u0442\u043a\u0438\u0439 \u043f\u0430\u0440\u043e\u043b\u044c"),e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e.email)||(a.email="\u041d\u0435\u0432\u0456\u0440\u043d\u043e \u0432\u0432\u0435\u0434\u0435\u043d\u0430 \u0435\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u0430 \u043f\u043e\u0448\u0442\u0430"):a.email="\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0435\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u0443 \u043f\u043e\u0448\u0442\u0443",a},onSubmit:function(){var e=Object(l.a)(r.a.mark((function e(n,l){var i,s,m,_;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l.setSubmitting,i=n.email,s=n.password,e.next=4,a({email:i,password:s},n.isRemember);case 4:m=e.sent,console.log("userId ===",m),"admin"===m?o.push("/admin"):m?(null===c||void 0===c||null===(_=c.state)||void 0===_?void 0:_.redirectTo)?o.push(c.state.redirectTo):o.push("/profile/".concat(m)):t("\u041f\u043e\u043c\u0438\u043b\u043a\u0430 \u043f\u0440\u0438 \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0456\u0457. \u041d\u0435\u0432\u0456\u0440\u043d\u043e \u0432\u0432\u0435\u0434\u0435\u043d\u0456 \u0434\u0430\u043d\u0456.");case 7:case"end":return e.stop()}}),e)})));return function(a,t){return e.apply(this,arguments)}}()},(function(e){var a=e.values,t=e.errors,c=e.touched,r=e.handleChange,l=e.handleBlur,u=e.handleSubmit,E=e.setValues,A=function(){return i.a.createElement(b.a,{icon:p.g,className:"".concat(m.a.icon," ").concat(m.a.success__icon)})},v=function(){return i.a.createElement(b.a,{icon:p.n,className:"".concat(m.a.icon," ").concat(m.a.error__icon)})};return i.a.createElement("form",null,i.a.createElement("div",{className:m.a.body},i.a.createElement("div",{className:m.a.container},i.a.createElement("div",{className:m.a.title__container},i.a.createElement("h4",{className:m.a.title},"\u0423\u0432\u0456\u0439\u0442\u0438"),i.a.createElement(d.a,{items:s})),i.a.createElement("div",{className:m.a.login},i.a.createElement("div",{className:m.a.input__container},i.a.createElement("div",{className:m.a.email},i.a.createElement(_.a,{onChange:r,onBlur:l,name:"email",value:a.email,type:"email",placeholder:"example@gmail.com"},!t.email&&c.email&&!!a.email&&i.a.createElement(A,null),(t.email||!a.email)&&c.email&&i.a.createElement(v,null)),i.a.createElement("div",{className:m.a.password},i.a.createElement(_.a,{onChange:r,onBlur:l,type:"password",name:"password",value:a.password,placeholder:"\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"},(t.email||!a.email)&&c.email&&i.a.createElement(v,null))),i.a.createElement("div",{className:m.a.remember__container},i.a.createElement("input",{type:"checkbox",checked:a.isRemember,className:m.a.remember__checkbox,name:"isRemember",onChange:r}),i.a.createElement("p",{onClick:function(){return E(Object(n.a)(Object(n.a)({},a),{},{isRemember:!a.isRemember}))},className:m.a.remember__desc},"\u0417\u0430\u043f\u0430\u043c'\u044f\u0442\u0430\u0442\u0438 \u043c\u0435\u043d\u0435")))),i.a.createElement(f.b,{to:"/restore"},i.a.createElement("button",{className:m.a.restore,type:"button"},"\u0412\u0456\u0434\u043d\u043e\u0432\u0438\u0442\u0438 \u0430\u043a\u0430\u0443\u043d\u0442")),i.a.createElement("div",{className:m.a.submit_button},i.a.createElement(g.a,{type:"submit",onClick:u,title:"\u041f\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0438"})),i.a.createElement("div",{className:m.a.fbt},i.a.createElement(f.b,{to:"/register"},i.a.createElement("button",{className:m.a.reg},"\u0417\u0430\u0440\u0435\u0454\u0441\u0442\u0440\u0443\u0432\u0430\u0442\u0438\u0441\u044c")),i.a.createElement("button",{className:m.a.reg,onClick:function(){o.goBack()}},i.a.createElement(b.a,{icon:p.b,className:m.a.goBack}),"\u041f\u0440\u043e\u0434\u043e\u0432\u0436\u0438\u0442\u0438 \u043f\u043e\u043a\u0443\u043f\u043a\u0438")),i.a.createElement("div",{className:m.a.logwith},i.a.createElement(b.a,{icon:h.b,className:"".concat(m.a.logicon," ").concat(m.a.gl)}),i.a.createElement(b.a,{icon:h.a,className:"".concat(m.a.logicon," ").concat(m.a.fb," ")}))))))})))}))}}]);
//# sourceMappingURL=21.adc77496.chunk.js.map