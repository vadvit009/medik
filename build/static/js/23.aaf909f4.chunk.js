(this.webpackJsonpmedtech=this.webpackJsonpmedtech||[]).push([[23],{198:function(e,a,t){e.exports={body:"Register_body__24iZ7",container:"Register_container__2D3Vy",title:"Register_title__2oQC7",title__container:"Register_title__container__3ijhE",register:"Register_register__3Rr5r",input__container:"Register_input__container__3QET9",pswd:"Register_pswd__1Ea59",login:"Register_login__1lXF-",ph__number:"Register_ph__number__lPBrD",email:"Register_email__2_aTE",fbt:"Register_fbt__33FN3",logwith:"Register_logwith__1V7ub",logicon:"Register_logicon__1OQig",gl:"Register_gl__3LDv_",fb:"Register_fb__1790n",fakey:"Register_fakey__2wplQ",icon:"Register_icon__3Ici2",error__icon:"Register_error__icon__uocTc",success__icon:"Register_success__icon__1iTO8",reg:"Register_reg__3qR5r",submit_button:"Register_submit_button__1MKtB",check_box:"Register_check_box__2Cckf",faCheck:"Register_faCheck__VQsad",goback:"Register_goback__2WZkr",go__login:"Register_go__login__EIVkR",faArrowLeft:"Register_faArrowLeft__3KOCB"}},228:function(e,a,t){"use strict";t.r(a);var n=t(9),r=t.n(n),l=t(20),c=t(8),o=t(0),s=t.n(o),i=t(198),m=t.n(i),_=t(43),u=t(18),p=t(7),f=t(81),g=t(6),h=t(90),d=t(93),N=t(22),E=t(4),b=t(89),w=(t(10),t(78)),v=t(16);a.default=Object(v.b)((function(e){return{}}),(function(e){return{register:function(a){return e(Object(w.e)(a))}}}))((function(e){var a=e.register,t=Object(o.useState)(!1),n=Object(c.a)(t,2),i=(n[0],n[1],Object(o.useState)(!1)),w=Object(c.a)(i,2),v=w[0],C=w[1],R=function(e){var a=e.target.checked;console.log(v,a),C(a)},k=Object(N.f)(),B=[{name:"\u0413\u043e\u043b\u043e\u0432\u043d\u0430",path:"/",icon:s.a.createElement(p.a,{icon:g.p})},{name:"\u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044f",path:"/register"}];return s.a.createElement("div",null,s.a.createElement(h.a,{initialValues:{fName:"",sName:"",fatherName:"",email:"",password:"",passwordConfirm:"",phone:""},validate:function(e){var a={};return!e.fName||e.fName.length<=1?a.fName="\u0417\u0430\u043d\u0430\u0434\u0442\u043e \u043a\u043e\u0440\u043e\u0442\u043a\u0435 \u0406\u043c'\u044f":/[0-9._%+-]$/i.test(e.fName)&&(a.fName="\u041d\u0435\u0432\u0456\u0440\u043d\u043e \u0432\u0432\u0435\u0434\u0435\u043de \u0406\u043c'\u044f"),!e.lName||e.lName.length<=2?a.lName="\u0417\u0430\u043d\u0430\u0434\u0442\u043e \u043a\u043e\u0440\u043e\u0442\u043a\u0435 \u043f\u0440\u0456\u0437\u0432\u0438\u0449\u0435":/[0-9._%+-]$/i.test(e.lName)&&(a.lName="\u041d\u0435\u0432\u0456\u0440\u043d\u043e \u0432\u0432\u0435\u0434\u0435\u043de \u043f\u0440\u0456\u0437\u0432\u0438\u0449\u0435"),(!e.phone||e.phone.length<=10)&&(a.phone="\u041d\u0435\u0432\u0456\u0440\u043d\u043e \u0432\u0432\u0435\u0434\u0435\u043d\u0438\u0439 \u043d\u043e\u043c\u0435\u0440"),e.fatherName.length<=3?a.fatherName="\u0417\u0430\u043d\u0430\u0434\u0442\u043e \u043a\u043e\u0440\u043e\u0442\u043a\u0435 \u043f\u043e-\u0431\u0430\u0442\u044c\u043a\u043e\u0432\u0456":/[0-9._%+-]$/i.test(e.fatherName)&&(a.fatherName="\u041d\u0435\u0432\u0456\u0440\u043d\u043e \u0432\u0432\u0435\u0434\u0435\u043de \u043f\u043e-\u0431\u0430\u0442\u044c\u043a\u043e\u0432\u0456"),e.password.length<=5&&(a.password="\u0417\u0430\u043d\u0430\u0434\u0442\u043e \u043a\u043e\u0440\u043e\u0442\u043a\u0438\u0439 \u043f\u0430\u0440\u043e\u043b\u044c"),e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e.email)||(a.email="\u041d\u0435\u0432\u0456\u0440\u043d\u043e \u0432\u0432\u0435\u0434\u0435\u043d\u0430 \u0435\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u0430 \u043f\u043e\u0448\u0442\u0430"):a.email="\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0435\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u0443 \u043f\u043e\u0448\u0442\u0443",e.password!==e.passwordConfirm&&(a.passwordConfirm="ne spivpadae"),a},onSubmit:function(){var e=Object(l.a)(r.a.mark((function e(t,n){var l,c,o,s,i,m,_,u;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.setSubmitting,l=t.fName,c=t.lName,o=t.fatherName,s=t.phone,i=t.password,m=t.email,_=s.replace(/-/gi,"").replace("+",""),console.log("phone ===",_),e.next=6,a({fName:l,lName:c,fatherName:o,phone:+_,password:i,email:m});case 6:(u=e.sent)&&k.push("/profile/".concat(u._id));case 8:case"end":return e.stop()}}),e)})));return function(a,t){return e.apply(this,arguments)}}()},(function(e){var a=e.values,t=e.errors,n=e.touched,r=e.handleChange,l=e.handleBlur,c=e.handleSubmit,o=e.handleFocus,i=(e.isSubmiting,e.validateOnBlur,function(){return s.a.createElement(p.a,{icon:g.g,className:"".concat(m.a.icon," ").concat(m.a.success__icon)})}),h=function(){return s.a.createElement(p.a,{icon:g.n,className:"".concat(m.a.icon," ").concat(m.a.error__icon)})};return s.a.createElement("form",{onSubmit:c},s.a.createElement("div",{className:m.a.body},s.a.createElement("div",{className:m.a.container},s.a.createElement("div",{className:m.a.title__container},s.a.createElement("h3",{className:m.a.title},"CREATE ACCOUNT"),s.a.createElement(b.a,{items:B})),s.a.createElement("div",{className:m.a.register},s.a.createElement("div",{className:m.a.input__container},s.a.createElement("div",{className:m.a.form},s.a.createElement("div",{className:m.a.login},s.a.createElement(_.a,{placeholder:"\u0406\u043c'\u044f",name:"fName",value:a.fName,onChange:r,onBlur:l,onFocus:o},!t.fName&&n.fName&&!!a.fName&&s.a.createElement(i,null),(t.fName||!a.fName)&&n.fName&&s.a.createElement(h,null))),s.a.createElement("div",{className:m.a.login},s.a.createElement(_.a,{placeholder:"\u041f\u0440\u0456\u0437\u0432\u0438\u0449\u0435",name:"lName",value:a.lName,onChange:r,onBlur:l},!t.lName&&n.lName&&!!a.lName&&s.a.createElement(i,null),(t.lName||!a.lName)&&n.lName&&s.a.createElement(h,null))),s.a.createElement("div",{className:m.a.login},s.a.createElement(_.a,{name:"fatherName",placeholder:"\u041f\u043e-\u0431\u0430\u0442\u044c\u043a\u043e\u0432\u0456",value:a.fatherName,onChange:r,onBlur:l},!t.fatherName&&n.fatherName&&!!a.fatherName&&s.a.createElement(i,null),(t.fatherName||!a.fatherName)&&n.fatherName&&s.a.createElement(h,null))),s.a.createElement("div",{className:m.a.ph__number},s.a.createElement(d.a,{onChange:r,onBlur:l,name:"phone",value:a.phone},!t.phone&&n.phone&&!!a.phone&&s.a.createElement(i,null),(t.phone||!a.phone)&&n.phone&&s.a.createElement(h,null))),s.a.createElement("div",{className:m.a.email},s.a.createElement(_.a,{onChange:r,onBlur:l,name:"email",value:a.email,type:"email",placeholder:"example@gmail.com"},!t.email&&n.email&&!!a.email&&s.a.createElement(i,null),(t.email||!a.email)&&n.email&&s.a.createElement(h,null))),s.a.createElement("div",{className:m.a.pswd},s.a.createElement(_.a,{onChange:r,onBlur:l,name:"password",value:a.password,type:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c"},!t.password&&n.password&&!!a.password&&s.a.createElement(i,null),(t.password||!a.password)&&n.password&&s.a.createElement(h,null)))),s.a.createElement("div",{className:m.a.pswd},s.a.createElement(_.a,{onChange:r,onBlur:l,name:"passwordConfirm",value:a.passwordConfirm,type:"password",placeholder:"\u041f\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u0456\u0442\u044c \u043f\u0430\u0440\u043e\u043b\u044c"},!t.passwordConfirm&&n.passwordConfirm&&!!a.passwordConfirm&&s.a.createElement(i,null),(t.passwordConfirm||!a.passwordConfirm)&&n.passwordConfirm&&s.a.createElement(h,null))),s.a.createElement("div",{className:m.a.check_box},s.a.createElement("input",{icon:g.f,className:m.a.faCheck,type:"checkbox",name:"chexbox",onChange:R,chacked:v}),s.a.createElement(E.b,{to:"/politics"},s.a.createElement("p",{className:m.a.politics},"\u041f\u043e\u0433\u043e\u0434\u0436\u0443\u044e\u0441\u044f \u0437 \u043f\u043e\u043b\u0456\u0442\u0438\u043a\u043e\u044e \u043a\u043e\u0444\u0456\u0434\u0435\u043d\u0446\u0456\u0439\u043d\u043e\u0441\u0442\u0456"))),s.a.createElement("div",{className:m.a.submit_button},s.a.createElement(u.a,{title:"\u0417\u0430\u0440\u0435\u0454\u0441\u0442\u0440\u0443\u0432\u0430\u0442\u0438\u0441\u044f",disabled:!v,onClick:c}))),s.a.createElement("div",{className:m.a.fbt},s.a.createElement("div",null,s.a.createElement(E.b,{to:"/login"},s.a.createElement("button",{className:m.a.go__login},"\u0423\u0432\u0456\u0439\u0442\u0438"))),s.a.createElement("button",{className:m.a.goback,onClick:function(){k.goBack()}},s.a.createElement(p.a,{icon:g.b,className:m.a.faArrowLeft}),"\u041f\u0440\u043e\u0434\u043e\u0432\u0436\u0438\u0442\u0438 \u043f\u043e\u043a\u0443\u043f\u043a\u0438"),s.a.createElement("div",{className:m.a.logwith},s.a.createElement(p.a,{icon:f.b,className:"".concat(m.a.logicon," ").concat(m.a.gl)}),s.a.createElement(p.a,{icon:f.a,className:"".concat(m.a.logicon," ").concat(m.a.fb," ")})))))))})))}))}}]);
//# sourceMappingURL=23.aaf909f4.chunk.js.map