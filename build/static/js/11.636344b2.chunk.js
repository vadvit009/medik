(this.webpackJsonpmedtech=this.webpackJsonpmedtech||[]).push([[11],{171:function(e,t,n){e.exports=n(172)},172:function(e,t,n){"use strict";var a,o=(a=n(0))&&"object"==typeof a&&"default"in a?a.default:a,r=n(39);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function i(e,t){e.prototype=Object.create(t.prototype),function(e,t){for(var n=Object.getOwnPropertyNames(t),a=0;a<n.length;a++){var o=n[a],r=Object.getOwnPropertyDescriptor(t,o);r&&r.configurable&&void 0===e[o]&&Object.defineProperty(e,o,r)}}(e.prototype.constructor=e,t)}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var u=function(e,t,n,a,o,r,s,i){if(!e){var l;if(void 0===t)l=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[n,a,o,r,s,i],c=0;(l=new Error(t.replace(/%s/g,(function(){return u[c++]})))).name="Invariant Violation"}throw l.framesToPop=1,l}};function c(e,t,n){if("selectionStart"in e&&"selectionEnd"in e)e.selectionStart=t,e.selectionEnd=n;else{var a=e.createTextRange();a.collapse(!0),a.moveStart("character",t),a.moveEnd("character",n-t),a.select()}}var m={9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"};function p(e,t,n){var a="",o="",r=null,s=[];if(void 0===t&&(t="_"),null==n&&(n=m),!e||"string"!=typeof e)return{maskChar:t,formatChars:n,mask:null,prefix:null,lastEditablePosition:null,permanents:[]};var i=!1;return e.split("").forEach((function(e){i=!i&&"\\"===e||(i||!n[e]?(s.push(a.length),a.length===s.length-1&&(o+=e)):r=a.length+1,a+=e,!1)})),{maskChar:t,formatChars:n,prefix:o,mask:a,lastEditablePosition:r,permanents:s}}function f(e,t){return-1!==e.permanents.indexOf(t)}function h(e,t,n){var a=e.mask,o=e.formatChars;if(!n)return!1;if(f(e,t))return a[t]===n;var r=o[a[t]];return new RegExp(r).test(n)}function d(e,t){return t.split("").every((function(t,n){return f(e,n)||!h(e,n,t)}))}function g(e,t){var n=e.maskChar,a=e.prefix;if(!n){for(;t.length>a.length&&f(e,t.length-1);)t=t.slice(0,t.length-1);return t.length}for(var o=a.length,r=t.length;r>=a.length;r--){var s=t[r];if(!f(e,r)&&h(e,r,s)){o=r+1;break}}return o}function v(e,t){return g(e,t)===e.mask.length}function _(e,t){var n=e.maskChar,a=e.mask,o=e.prefix;if(!n){for((t=k(e,"",t,0)).length<o.length&&(t=o);t.length<a.length&&f(e,t.length);)t+=a[t.length];return t}if(t)return k(e,_(e,""),t,0);for(var r=0;r<a.length;r++)f(e,r)?t+=a[r]:t+=n;return t}function k(e,t,n,a){var o=e.mask,r=e.maskChar,s=e.prefix,i=n.split(""),l=v(e,t);return!r&&a>t.length&&(t+=o.slice(t.length,a)),i.every((function(n){for(;c=n,f(e,u=a)&&c!==o[u];){if(a>=t.length&&(t+=o[a]),i=n,r&&f(e,a)&&i===r)return!0;if(++a>=o.length)return!1}var i,u,c;return!h(e,a,n)&&n!==r||(a<t.length?t=r||l||a<s.length?t.slice(0,a)+n+t.slice(a+1):(t=t.slice(0,a)+n+t.slice(a),_(e,t)):r||(t+=n),++a<o.length)})),t}function w(e,t){for(var n=e.mask,a=t;a<n.length;++a)if(!f(e,a))return a;return null}function C(e){return e||0===e?e+"":""}function E(e,t,n,a,o){var r=e.mask,s=e.prefix,i=e.lastEditablePosition,l=t,u="",c=0,m=0,p=Math.min(o.start,n.start);return n.end>o.start?m=(c=function(e,t,n,a){var o=e.mask,r=e.maskChar,s=n.split(""),i=a;return s.every((function(t){for(;s=t,f(e,n=a)&&s!==o[n];)if(++a>=o.length)return!1;var n,s;return(h(e,a,t)||t===r)&&a++,a<o.length})),a-i}(e,0,u=l.slice(o.start,n.end),p))?o.length:0:l.length<a.length&&(m=a.length-l.length),l=a,m&&(1!==m||o.length||(p=o.start===n.start?w(e,n.start):function(e,t){for(var n=t;0<=n;--n)if(!f(e,n))return n;return null}(e,n.start)),l=function(e,t,n,a){var o=n+a,r=e.maskChar,s=e.mask,i=e.prefix,l=t.split("");if(r)return l.map((function(t,a){return a<n||o<=a?t:f(e,a)?s[a]:r})).join("");for(var u=o;u<l.length;u++)f(e,u)&&(l[u]="");return n=Math.max(i.length,n),l.splice(n,o-n),t=l.join(""),_(e,t)}(e,l,p,m)),l=k(e,l,u,p),(p+=c)>=r.length?p=r.length:p<s.length&&!c?p=s.length:p>=s.length&&p<i&&c&&(p=w(e,p)),u||(u=null),{value:l=_(e,l),enteredString:u,selection:{start:p,end:p}}}function b(e){return"function"==typeof e}function N(){return window.cancelAnimationFrame||window.webkitCancelRequestAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame}function O(e){return(N()?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame:function(){return setTimeout(e,1e3/60)})(e)}function S(e){(N()||clearTimeout)(e)}var R=function(e){function t(t){var n=e.call(this,t)||this;n.focused=!1,n.mounted=!1,n.previousSelection=null,n.selectionDeferId=null,n.saveSelectionLoopDeferId=null,n.saveSelectionLoop=function(){n.previousSelection=n.getSelection(),n.saveSelectionLoopDeferId=O(n.saveSelectionLoop)},n.runSaveSelectionLoop=function(){null===n.saveSelectionLoopDeferId&&n.saveSelectionLoop()},n.stopSaveSelectionLoop=function(){null!==n.saveSelectionLoopDeferId&&(S(n.saveSelectionLoopDeferId),n.saveSelectionLoopDeferId=null,n.previousSelection=null)},n.getInputDOMNode=function(){if(!n.mounted)return null;var e=r.findDOMNode(l(l(n))),t="undefined"!=typeof window&&e instanceof window.Element;if(e&&!t)return null;if("INPUT"!==e.nodeName&&(e=e.querySelector("input")),!e)throw new Error("react-input-mask: inputComponent doesn't contain input node");return e},n.getInputValue=function(){var e=n.getInputDOMNode();return e?e.value:null},n.setInputValue=function(e){var t=n.getInputDOMNode();t&&(n.value=e,t.value=e)},n.setCursorToEnd=function(){var e=g(n.maskOptions,n.value),t=w(n.maskOptions,e);null!==t&&n.setCursorPosition(t)},n.setSelection=function(e,t,a){void 0===a&&(a={});var o=n.getInputDOMNode(),r=n.isFocused();o&&r&&(a.deferred||c(o,e,t),null!==n.selectionDeferId&&S(n.selectionDeferId),n.selectionDeferId=O((function(){n.selectionDeferId=null,c(o,e,t)})),n.previousSelection={start:e,end:t,length:Math.abs(t-e)})},n.getSelection=function(){return function(e){var t=0,n=0;if("selectionStart"in e&&"selectionEnd"in e)t=e.selectionStart,n=e.selectionEnd;else{var a=document.selection.createRange();a.parentElement()===e&&(t=-a.moveStart("character",-e.value.length),n=-a.moveEnd("character",-e.value.length))}return{start:t,end:n,length:n-t}}(n.getInputDOMNode())},n.getCursorPosition=function(){return n.getSelection().start},n.setCursorPosition=function(e){n.setSelection(e,e)},n.isFocused=function(){return n.focused},n.getBeforeMaskedValueChangeConfig=function(){var e=n.maskOptions,t=e.mask,a=e.maskChar,o=e.permanents,r=e.formatChars;return{mask:t,maskChar:a,permanents:o,alwaysShowMask:!!n.props.alwaysShowMask,formatChars:r}},n.isInputAutofilled=function(e,t,a,o){var r=n.getInputDOMNode();try{if(r.matches(":-webkit-autofill"))return!0}catch(u){}return!n.focused||o.end<a.length&&t.end===e.length},n.onChange=function(e){var t=l(l(n)).beforePasteState,a=l(l(n)).previousSelection,o=n.props.beforeMaskedValueChange,r=n.getInputValue(),s=n.value,i=n.getSelection();n.isInputAutofilled(r,i,s,a)&&(s=_(n.maskOptions,""),a={start:0,end:0,length:0}),t&&(a=t.selection,s=t.value,i={start:a.start+r.length,end:a.start+r.length,length:0},r=s.slice(0,a.start)+r+s.slice(a.end),n.beforePasteState=null);var u=E(n.maskOptions,r,i,s,a),c=u.enteredString,m=u.selection,p=u.value;if(b(o)){var f=o({value:p,selection:m},{value:s,selection:a},c,n.getBeforeMaskedValueChangeConfig());p=f.value,m=f.selection}n.setInputValue(p),b(n.props.onChange)&&n.props.onChange(e),n.isWindowsPhoneBrowser?n.setSelection(m.start,m.end,{deferred:!0}):n.setSelection(m.start,m.end)},n.onFocus=function(e){var t=n.props.beforeMaskedValueChange,a=n.maskOptions,o=a.mask,r=a.prefix;if(n.focused=!0,n.mounted=!0,o){if(n.value)g(n.maskOptions,n.value)<n.maskOptions.mask.length&&n.setCursorToEnd();else{var s=_(n.maskOptions,r),i=_(n.maskOptions,s),l=g(n.maskOptions,i),u=w(n.maskOptions,l),c={start:u,end:u};if(b(t)){var m=t({value:i,selection:c},{value:n.value,selection:null},null,n.getBeforeMaskedValueChangeConfig());i=m.value,c=m.selection}var p=i!==n.getInputValue();p&&n.setInputValue(i),p&&b(n.props.onChange)&&n.props.onChange(e),n.setSelection(c.start,c.end)}n.runSaveSelectionLoop()}b(n.props.onFocus)&&n.props.onFocus(e)},n.onBlur=function(e){var t=n.props.beforeMaskedValueChange,a=n.maskOptions.mask;if(n.stopSaveSelectionLoop(),n.focused=!1,a&&!n.props.alwaysShowMask&&d(n.maskOptions,n.value)){var o="";b(t)&&(o=t({value:o,selection:null},{value:n.value,selection:n.previousSelection},null,n.getBeforeMaskedValueChangeConfig()).value);var r=o!==n.getInputValue();r&&n.setInputValue(o),r&&b(n.props.onChange)&&n.props.onChange(e)}b(n.props.onBlur)&&n.props.onBlur(e)},n.onMouseDown=function(e){if(!n.focused&&document.addEventListener){n.mouseDownX=e.clientX,n.mouseDownY=e.clientY,n.mouseDownTime=(new Date).getTime();document.addEventListener("mouseup",(function e(t){if(document.removeEventListener("mouseup",e),n.focused){var a=Math.abs(t.clientX-n.mouseDownX),o=Math.abs(t.clientY-n.mouseDownY),r=Math.max(a,o),s=(new Date).getTime()-n.mouseDownTime;(r<=10&&s<=200||r<=5&&s<=300)&&n.setCursorToEnd()}}))}b(n.props.onMouseDown)&&n.props.onMouseDown(e)},n.onPaste=function(e){b(n.props.onPaste)&&n.props.onPaste(e),e.defaultPrevented||(n.beforePasteState={value:n.getInputValue(),selection:n.getSelection()},n.setInputValue(""))},n.handleRef=function(e){null==n.props.children&&b(n.props.inputRef)&&n.props.inputRef(e)};var a=t.mask,o=t.maskChar,s=t.formatChars,i=t.alwaysShowMask,u=t.beforeMaskedValueChange,m=t.defaultValue,f=t.value;n.maskOptions=p(a,o,s),null==m&&(m=""),null==f&&(f=m);var h=C(f);if(n.maskOptions.mask&&(i||h)&&(h=_(n.maskOptions,h),b(u))){var v=t.value;null==t.value&&(v=m),h=u({value:h,selection:null},{value:v=C(v),selection:null},null,n.getBeforeMaskedValueChangeConfig()).value}return n.value=h,n}i(t,e);var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.getInputDOMNode()&&(this.isWindowsPhoneBrowser=function(){var e=new RegExp("windows","i"),t=new RegExp("phone","i"),n=navigator.userAgent;return e.test(n)&&t.test(n)}(),this.maskOptions.mask&&this.getInputValue()!==this.value&&this.setInputValue(this.value))},n.componentDidUpdate=function(){var e=this.previousSelection,t=this.props,n=t.beforeMaskedValueChange,a=t.alwaysShowMask,o=t.mask,r=t.maskChar,s=t.formatChars,i=this.maskOptions,l=a||this.isFocused(),u=null!=this.props.value,c=u?C(this.props.value):this.value,m=e?e.start:null;if(this.maskOptions=p(o,r,s),this.maskOptions.mask){!i.mask&&this.isFocused()&&this.runSaveSelectionLoop();var f=this.maskOptions.mask&&this.maskOptions.mask!==i.mask;if(i.mask||u||(c=this.getInputValue()),(f||this.maskOptions.mask&&(c||l))&&(c=_(this.maskOptions,c)),f){var h=g(this.maskOptions,c);(null===m||h<m)&&(m=v(this.maskOptions,c)?h:w(this.maskOptions,h))}!this.maskOptions.mask||!d(this.maskOptions,c)||l||u&&this.props.value||(c="");var k={start:m,end:m};if(b(n)){var E=n({value:c,selection:k},{value:this.value,selection:this.previousSelection},null,this.getBeforeMaskedValueChangeConfig());c=E.value,k=E.selection}this.value=c;var N=this.getInputValue()!==this.value;N?(this.setInputValue(this.value),this.forceUpdate()):f&&this.forceUpdate();var O=!1;null!=k.start&&null!=k.end&&(O=!e||e.start!==k.start||e.end!==k.end),(O||N)&&this.setSelection(k.start,k.end)}else i.mask&&(this.stopSaveSelectionLoop(),this.forceUpdate())},n.componentWillUnmount=function(){this.mounted=!1,null!==this.selectionDeferId&&S(this.selectionDeferId),this.stopSaveSelectionLoop()},n.render=function(){var e,t=this.props,n=(t.mask,t.alwaysShowMask,t.maskChar,t.formatChars,t.inputRef,t.beforeMaskedValueChange,t.children),a=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],0<=t.indexOf(n)||(o[n]=e[n]);return o}(t,["mask","alwaysShowMask","maskChar","formatChars","inputRef","beforeMaskedValueChange","children"]);if(n){b(n)||u(!1);var r=["onChange","onPaste","onMouseDown","onFocus","onBlur","value","disabled","readOnly"],i=s({},a);r.forEach((function(e){return delete i[e]})),e=n(i),r.filter((function(t){return null!=e.props[t]&&e.props[t]!==a[t]})).length&&u(!1)}else e=o.createElement("input",s({ref:this.handleRef},a));var l={onFocus:this.onFocus,onBlur:this.onBlur};return this.maskOptions.mask&&(a.disabled||a.readOnly||(l.onChange=this.onChange,l.onPaste=this.onPaste,l.onMouseDown=this.onMouseDown),null!=a.value&&(l.value=this.value)),e=o.cloneElement(e,l)},t}(o.Component);e.exports=R},179:function(e,t,n){"use strict";var a=n(46),o=n(0),r=n.n(o),s=n(171),i=n.n(s),l=n(62);t.a=function(e){var t=e.value,n=e.onChange,o=e.onFocus,s=void 0===o?function(){}:o,u=e.onBlur,c=void 0===u?function(){}:u,m=e.children,p=Object(a.a)(e,["value","onChange","onFocus","onBlur","children"]);return r.a.createElement(i.a,Object.assign({mask:"+380-99-999-9999",placeholder:"+380-99-123-4567",maskChar:null},{value:t},{onFocus:s},{onBlur:c},{onChange:n}),(function(e){return r.a.createElement(l.a,Object.assign({},p,e,{type:"tel",disableUnderline:!0}),m)}))}},195:function(e,t,n){e.exports={body:"Register_body__24iZ7",container:"Register_container__2D3Vy",title:"Register_title__2oQC7",title__container:"Register_title__container__3ijhE",register:"Register_register__3Rr5r",input__container:"Register_input__container__3QET9",pswd:"Register_pswd__1Ea59",login:"Register_login__1lXF-",ph__number:"Register_ph__number__lPBrD",email:"Register_email__2_aTE",fbt:"Register_fbt__33FN3",logwith:"Register_logwith__1V7ub",logicon:"Register_logicon__1OQig",gl:"Register_gl__3LDv_",fb:"Register_fb__1790n",fakey:"Register_fakey__2wplQ",icon:"Register_icon__3Ici2",error__icon:"Register_error__icon__uocTc",success__icon:"Register_success__icon__1iTO8",reg:"Register_reg__3qR5r",submit_button:"Register_submit_button__1MKtB",check_box:"Register_check_box__2Cckf",faCheck:"Register_faCheck__VQsad",goback:"Register_goback__2WZkr",go__login:"Register_go__login__EIVkR",faArrowLeft:"Register_faArrowLeft__3KOCB"}},221:function(e,t,n){"use strict";n.r(t);var a=n(8),o=n.n(a),r=n(20),s=n(9),i=n(0),l=n.n(i),u=n(195),c=n.n(u),m=n(62),p=n(19),f=n(7),h=n(73),d=n(6),g=n(176),v=n(179),_=n(22),k=n(4),w=n(80),C=(n(21),n(69)),E=n(14);t.default=Object(E.b)((function(e){return{}}),(function(e){return{register:function(t){return e(Object(C.e)(t))}}}))((function(e){var t=e.register,n=Object(i.useState)(!1),a=Object(s.a)(n,2),u=(a[0],a[1],Object(i.useState)(!1)),C=Object(s.a)(u,2),E=C[0],b=C[1],N=function(e){var t=e.target.checked;console.log(E,t),b(t)},O=Object(_.g)(),S=[{name:"\u0413\u043e\u043b\u043e\u0432\u043d\u0430",path:"/",icon:l.a.createElement(f.a,{icon:d.p})},{name:"\u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044f",path:"/register"}];return l.a.createElement("div",null,l.a.createElement(g.a,{initialValues:{fName:"",sName:"",fatherName:"",email:"",password:"",passwordConfirm:"",phone:""},validate:function(e){var t={};return!e.fName||e.fName.length<=1?t.fName="\u0417\u0430\u043d\u0430\u0434\u0442\u043e \u043a\u043e\u0440\u043e\u0442\u043a\u0435 \u0406\u043c'\u044f":/[0-9._%+-]$/i.test(e.fName)&&(t.fName="\u041d\u0435\u0432\u0456\u0440\u043d\u043e \u0432\u0432\u0435\u0434\u0435\u043de \u0406\u043c'\u044f"),!e.lName||e.lName.length<=2?t.lName="\u0417\u0430\u043d\u0430\u0434\u0442\u043e \u043a\u043e\u0440\u043e\u0442\u043a\u0435 \u043f\u0440\u0456\u0437\u0432\u0438\u0449\u0435":/[0-9._%+-]$/i.test(e.lName)&&(t.lName="\u041d\u0435\u0432\u0456\u0440\u043d\u043e \u0432\u0432\u0435\u0434\u0435\u043de \u043f\u0440\u0456\u0437\u0432\u0438\u0449\u0435"),(!e.phone||e.phone.length<=10)&&(t.phone="\u041d\u0435\u0432\u0456\u0440\u043d\u043e \u0432\u0432\u0435\u0434\u0435\u043d\u0438\u0439 \u043d\u043e\u043c\u0435\u0440"),e.fatherName.length<=3?t.fatherName="\u0417\u0430\u043d\u0430\u0434\u0442\u043e \u043a\u043e\u0440\u043e\u0442\u043a\u0435 \u043f\u043e-\u0431\u0430\u0442\u044c\u043a\u043e\u0432\u0456":/[0-9._%+-]$/i.test(e.fatherName)&&(t.fatherName="\u041d\u0435\u0432\u0456\u0440\u043d\u043e \u0432\u0432\u0435\u0434\u0435\u043de \u043f\u043e-\u0431\u0430\u0442\u044c\u043a\u043e\u0432\u0456"),e.password.length<=5&&(t.password="\u0417\u0430\u043d\u0430\u0434\u0442\u043e \u043a\u043e\u0440\u043e\u0442\u043a\u0438\u0439 \u043f\u0430\u0440\u043e\u043b\u044c"),e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e.email)||(t.email="\u041d\u0435\u0432\u0456\u0440\u043d\u043e \u0432\u0432\u0435\u0434\u0435\u043d\u0430 \u0435\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u0430 \u043f\u043e\u0448\u0442\u0430"):t.email="\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0435\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u0443 \u043f\u043e\u0448\u0442\u0443",e.password!==e.passwordConfirm&&(t.passwordConfirm="ne spivpadae"),t},onSubmit:function(){var e=Object(r.a)(o.a.mark((function e(n,a){var r,s,i,l,u,c,m,p;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.setSubmitting,r=n.fName,s=n.lName,i=n.fatherName,l=n.phone,u=n.password,c=n.email,m=l.replace(/-/gi,"").replace("+",""),console.log("phone ===",m),e.next=6,t({fName:r,lName:s,fatherName:i,phone:+m,password:u,email:c});case 6:(p=e.sent)&&O.push("/profile/".concat(p._id));case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},(function(e){var t=e.values,n=e.errors,a=e.touched,o=e.handleChange,r=e.handleBlur,s=e.handleSubmit,i=e.handleFocus,u=(e.isSubmiting,e.validateOnBlur,function(){return l.a.createElement(f.a,{icon:d.g,className:"".concat(c.a.icon," ").concat(c.a.success__icon)})}),g=function(){return l.a.createElement(f.a,{icon:d.n,className:"".concat(c.a.icon," ").concat(c.a.error__icon)})};return l.a.createElement("form",{onSubmit:s},l.a.createElement("div",{className:c.a.body},l.a.createElement("div",{className:c.a.container},l.a.createElement("div",{className:c.a.title__container},l.a.createElement("h3",{className:c.a.title},"CREATE ACCOUNT"),l.a.createElement(w.a,{items:S})),l.a.createElement("div",{className:c.a.register},l.a.createElement("div",{className:c.a.input__container},l.a.createElement("div",{className:c.a.form},l.a.createElement("div",{className:c.a.login},l.a.createElement(m.a,{placeholder:"\u0406\u043c'\u044f",name:"fName",value:t.fName,onChange:o,onBlur:r,onFocus:i},!n.fName&&a.fName&&!!t.fName&&l.a.createElement(u,null),(n.fName||!t.fName)&&a.fName&&l.a.createElement(g,null))),l.a.createElement("div",{className:c.a.login},l.a.createElement(m.a,{placeholder:"\u041f\u0440\u0456\u0437\u0432\u0438\u0449\u0435",name:"lName",value:t.lName,onChange:o,onBlur:r},!n.lName&&a.lName&&!!t.lName&&l.a.createElement(u,null),(n.lName||!t.lName)&&a.lName&&l.a.createElement(g,null))),l.a.createElement("div",{className:c.a.login},l.a.createElement(m.a,{name:"fatherName",placeholder:"\u041f\u043e-\u0431\u0430\u0442\u044c\u043a\u043e\u0432\u0456",value:t.fatherName,onChange:o,onBlur:r},!n.fatherName&&a.fatherName&&!!t.fatherName&&l.a.createElement(u,null),(n.fatherName||!t.fatherName)&&a.fatherName&&l.a.createElement(g,null))),l.a.createElement("div",{className:c.a.ph__number},l.a.createElement(v.a,{onChange:o,onBlur:r,name:"phone",value:t.phone},!n.phone&&a.phone&&!!t.phone&&l.a.createElement(u,null),(n.phone||!t.phone)&&a.phone&&l.a.createElement(g,null))),l.a.createElement("div",{className:c.a.email},l.a.createElement(m.a,{onChange:o,onBlur:r,name:"email",value:t.email,type:"email",placeholder:"example@gmail.com"},!n.email&&a.email&&!!t.email&&l.a.createElement(u,null),(n.email||!t.email)&&a.email&&l.a.createElement(g,null))),l.a.createElement("div",{className:c.a.pswd},l.a.createElement(m.a,{onChange:o,onBlur:r,name:"password",value:t.password,type:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c"},!n.password&&a.password&&!!t.password&&l.a.createElement(u,null),(n.password||!t.password)&&a.password&&l.a.createElement(g,null)))),l.a.createElement("div",{className:c.a.pswd},l.a.createElement(m.a,{onChange:o,onBlur:r,name:"passwordConfirm",value:t.passwordConfirm,type:"password",placeholder:"\u041f\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u0456\u0442\u044c \u043f\u0430\u0440\u043e\u043b\u044c"},!n.passwordConfirm&&a.passwordConfirm&&!!t.passwordConfirm&&l.a.createElement(u,null),(n.passwordConfirm||!t.passwordConfirm)&&a.passwordConfirm&&l.a.createElement(g,null))),l.a.createElement("div",{className:c.a.check_box},l.a.createElement("input",{icon:d.f,className:c.a.faCheck,type:"checkbox",name:"chexbox",onChange:N,chacked:E}),l.a.createElement(k.b,{to:"/politics"},l.a.createElement("p",{className:c.a.politics},"\u041f\u043e\u0433\u043e\u0434\u0436\u0443\u044e\u0441\u044f \u0437 \u043f\u043e\u043b\u0456\u0442\u0438\u043a\u043e\u044e \u043a\u043e\u0444\u0456\u0434\u0435\u043d\u0446\u0456\u0439\u043d\u043e\u0441\u0442\u0456"))),l.a.createElement("div",{className:c.a.submit_button},l.a.createElement(p.a,{title:"\u0417\u0430\u0440\u0435\u0454\u0441\u0442\u0440\u0443\u0432\u0430\u0442\u0438\u0441\u044f",disabled:!E,onClick:s}))),l.a.createElement("div",{className:c.a.fbt},l.a.createElement("div",null,l.a.createElement(k.b,{to:"/login"},l.a.createElement("button",{className:c.a.go__login},"\u0423\u0432\u0456\u0439\u0442\u0438"))),l.a.createElement("button",{className:c.a.goback,onClick:function(){O.goBack()}},l.a.createElement(f.a,{icon:d.b,className:c.a.faArrowLeft}),"\u041f\u0440\u043e\u0434\u043e\u0432\u0436\u0438\u0442\u0438 \u043f\u043e\u043a\u0443\u043f\u043a\u0438"),l.a.createElement("div",{className:c.a.logwith},l.a.createElement(f.a,{icon:h.b,className:"".concat(c.a.logicon," ").concat(c.a.gl)}),l.a.createElement(f.a,{icon:h.a,className:"".concat(c.a.logicon," ").concat(c.a.fb," ")})))))))})))}))}}]);
//# sourceMappingURL=11.636344b2.chunk.js.map