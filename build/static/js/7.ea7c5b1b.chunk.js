(this.webpackJsonpmedtech=this.webpackJsonpmedtech||[]).push([[7],{386:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var r=a(0),n=a.n(r);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=n.a.createElement("path",{d:"M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"}),u=function(e){var t=e.svgRef,a=e.title,r=i(e,["svgRef","title"]);return n.a.createElement("svg",c({viewBox:"0 0 448 512",ref:t},r),a?n.a.createElement("title",null,a):null,o)},s=n.a.forwardRef((function(e,t){return n.a.createElement(u,c({svgRef:t},e))}));a.p},387:function(e,t,a){"use strict";var r=a(0),n=a.n(r),c=a(388),i=a.n(c),o=a(24),u=a(386);t.a=function(e){var t=Object(o.g)();return n.a.createElement("div",null,n.a.createElement("button",{className:i.a.goBack__but,onClick:function(){t.goBack()}},n.a.createElement(u.a,{className:i.a.goBack}),"\u041f\u043e\u0432\u0435\u0440\u043d\u0443\u0442\u0438\u0441\u044f"))}},388:function(e,t,a){e.exports={goBack__but:"GoBackBtn_goBack__but__SlnbP",goBack:"GoBackBtn_goBack__2uu2w"}},390:function(e,t,a){"use strict";var r=a(0),n=a.n(r),c=a(391),i=a.n(c),o=a(17),u=a(31),s=a(5);t.a=Object(o.b)((function(e){return{allProductsInCart:e.cart.all}}),(function(e){return{changeNumberInCart:function(t,a,r){return e(Object(u.b)(t,a,r))},removeFromCart:function(t){return e(Object(u.d)(t))}}}))((function(e){var t=e.product,r=(e.changeNumberInCart,e.removeFromCart,e.allProductsInCart,t.gallery),c=t.title,o=t.price,u=t._id,l=t.desc,_=t.numberInCart,d=void 0===_?1:_,p=(t.selectedAttributesId,t.selectedAttributesPrice||o);return n.a.createElement("div",{className:i.a.card},n.a.createElement("div",{className:i.a.main},n.a.createElement("div",{style:{position:"relative"}},n.a.createElement(s.b,{to:"/product/".concat(u)},n.a.createElement("img",{className:i.a.img,src:r&&r[0]||a(108),alt:"loading"})),n.a.createElement("div",{className:i.a.number__tag},n.a.createElement("span",{className:i.a.number},d))),n.a.createElement("div",{className:i.a.main__content},n.a.createElement(s.b,{to:"/product/".concat(u)},n.a.createElement("span",{className:i.a.title},c.slice(0,15))),n.a.createElement("p",{className:i.a.category},l.slice(0,20)))),n.a.createElement("span",{className:i.a.fullprice},+d*+p||0,"\u20b4"))}))},391:function(e,t,a){e.exports={card:"OrderProductCard_card__1TS4h",mobile:"OrderProductCard_mobile__DU6X5",main:"OrderProductCard_main__Ly795",title:"OrderProductCard_title__3ukLp",category:"OrderProductCard_category__27JtW",img:"OrderProductCard_img__1JJeP",price:"OrderProductCard_price__3ry0Z",fullprice:"OrderProductCard_fullprice__n6_gS",remove__icon:"OrderProductCard_remove__icon__pApcH",icon_ft:"OrderProductCard_icon_ft__1marY",number__tag:"OrderProductCard_number__tag__1TiS1",number:"OrderProductCard_number__2pMkh",actions__container:"OrderProductCard_actions__container__37_6r",price__wrapper:"OrderProductCard_price__wrapper__1CZjL",qty__counter__wrapper:"OrderProductCard_qty__counter__wrapper__1MHQv",remove__icon__wrapper:"OrderProductCard_remove__icon__wrapper__24Xrd",fullprice__container:"OrderProductCard_fullprice__container__3KbIQ"}},399:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return l})),a.d(t,"c",(function(){return _})),a.d(t,"d",(function(){return d})),a.d(t,"e",(function(){return p}));var r=a(4),n=a.n(r),c=a(8),i=a(14),o=a(2),u=a(21),s=function(e,t){return function(){var a=Object(c.a)(n.a.mark((function a(r){var c;return n.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Object(i.p)(e,t);case 2:c=a.sent,r({type:o.y,cities:c.data.data});case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},l=function(e){return function(){var t=Object(c.a)(n.a.mark((function t(a){var r;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(i.D)(e);case 2:r=t.sent,a({type:o.Z,warehouses:r.data.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},_=function(e){return{type:o.S,city:e}},d=function(e){return{type:o.T,warehouse:e}},p=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"user";return function(){var a=Object(c.a)(n.a.mark((function a(r){var c,s;return n.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return c=Object(u.f)(),"admin"===t&&(c=Object(u.c)()),r({type:o.D,isLoading:!0}),a.next=5,Object(i.Q)(e,c);case 5:return s=a.sent,r({type:o.D,isLoading:!1}),200===(null===s||void 0===s?void 0:s.status)&&r({type:o.c,order:s.data}),a.abrupt("return",200===(null===s||void 0===s?void 0:s.status)&&s.data);case 9:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}},422:function(e,t,a){e.exports={title__container:"Order_title__container__3GVX4",section:"Order_section__2ZFW7",title:"Order_title__1E8wj",bread__crumbs:"Order_bread__crumbs__2WkSa",order__container:"Order_order__container__3ZPDB",submit__container:"Order_submit__container__2m2nj",submit__title:"Order_submit__title__1gae7",submit__container_all:"Order_submit__container_all__2SYGe",price:"Order_price__YuWqz",status:"Order_status__lpwGq",products__container:"Order_products__container__2OO2j",products__header:"Order_products__header__2H-ue",sort__container:"Order_sort__container__3oyQH",actions__container:"Order_actions__container__1c7yE",goBack__but:"Order_goBack__but__3rnil",goBack:"Order_goBack__1Gvf-",submit__btn__container:"Order_submit__btn__container__1xs0w",input__row:"Order_input__row__9KZr6",input__container:"Order_input__container__2faTk",phone__container:"Order_phone__container__3xpxf",phone__input:"Order_phone__input__LtPVI",input:"Order_input__kVvyR",subtotal__container:"Order_subtotal__container__1NIBh",subtotal__title:"Order_subtotal__title__3Ql9u",subtotal__price:"Order_subtotal__price__TddP3",save__user__container:"Order_save__user__container__296hm",save__user__desc:"Order_save__user__desc__3bsVB",save__user__checkbox:"Order_save__user__checkbox__LAcWJ",liqpay:"Order_liqpay__2mWEB"}},443:function(e,t,a){"use strict";a.r(t);var r=a(4),n=a.n(r),c=a(8),i=a(7),o=a(1),u=a(0),s=a.n(u),l=a(422),_=a.n(l),d=a(17),p=a(33),m=a(147),b=a(20),f=a(24),v=a(31),h=a(146),O=a(91),y=a(41),g=a(399),C=a(390),N=a(109),j=a(75),E=a(387),P=a(84),w=a(148),k=(a(155),[{value:"self-pickup",label:"\u0421\u0430\u043c\u043e\u0432\u0438\u0432\u0456\u0437"},{value:"NovaPoshta",label:"\u041d\u043e\u0432\u0430 \u043f\u043e\u0448\u0442\u0430"}]),S=[{value:"cash",label:"\u041d\u0430\u043b\u043e\u0436\u0435\u043d\u0438\u0439 \u043f\u043b\u0430\u0442\u0456\u0436"},{value:"card",label:"\u041a\u0430\u0440\u0442\u043e\u044e (LiqPay)"}],T=Object(O.b)({mapPropsToValues:function(e){return{lName:e.user.fName,fName:e.user.lName,phone:e.user.phone,deliveryType:k[0],paymentType:S[0],isSaveUser:!1,selectedWarehouse:"",selectedCity:""}},handleSubmit:function(){var e=Object(c.a)(n.a.mark((function e(t,a){var r,c,i,u,s,l,_,d,p,m,b,f,v;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.props,c=r.cartProducts,i=r.patchUser,u=r.user,s=r.createOrder,l=r.fullPrice,_=r.showAlert,d=r.setCart,p=r.history,m=a.resetForm,b=c.map((function(e){return{attrOptions:e.selectedAttributesId,id:e._id,quantity:e.quantity}})),t.phone,t.phone&&!Number.isNaN(t.phone)&&((null===(f=t.phone)||void 0===f?void 0:f.startsWith("0"))?+"38".concat(t.phone):+t.phone),t.isSaveUser&&i(Object(o.a)(Object(o.a)({},u),{},{fName:t.fName,lName:t.lName,phone:t.phone})),e.next=7,s({products:b,phone:t.phone,deliveryCity:t.selectedCity,deliveryHouse:null,deliveryStreet:null,deliveryApartament:null,deliveryWarehouse:t.selectedWarehouse,paymentType:t.paymentType.value,sum:l,userID:u._id||null,status:"card"===t.paymentType.value?"waitForPayment":"created"});case 7:(v=e.sent)?(console.log("order data ===",v),_("\u0417\u0430\u043c\u043e\u0432\u043b\u0435\u043d\u043d\u044f \u0441\u0442\u0432\u043e\u0440\u0435\u043d\u043e \u0443\u0441\u043f\u0456\u0448\u043d\u043e!","success"),d([]),localStorage.removeItem("_cart"),m({lName:"",fName:"",phone:"",deliveryType:k[0],paymentType:S[0],isSaveUser:!1}),"card"===t.paymentType.value&&p.push("/order/payment/".concat(v._id,"/").concat(v.sum))):_("\u0421\u0442\u0430\u043b\u0430\u0441\u044c \u043f\u043e\u043c\u0438\u043b\u043a\u0430 \u043f\u0440\u0438 \u0441\u0442\u0432\u043e\u0440\u0435\u043d\u043d\u0456 \u0437\u0430\u043c\u043e\u0432\u043b\u0435\u043d\u043d\u044f.");case 9:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()})((function(e){var t=e.cartProducts,a=e.fullPrice,r=e.setFullPrice,n=e.getCities,c=e.getWarehouses,l=e.cities,d=e.filterCities,v=(e.setSelectedWarehouse,e.setSelectedCity,e.warehouses),O=e.filterWarehouses,g=e.user,N=e.handleChange,j=e.values,T=e.setValues,x=e.handleSubmit,B=e.isLoading,W=[{name:"\u041a\u043e\u0448\u0438\u043a",path:"/cart",icon:s.a.createElement(P.a,{className:_.a.bread__crumbs})},{name:"\u0417\u0430\u043c\u043e\u0432\u043b\u0435\u043d\u043d\u044f",path:"/order"}],D=function(e,t){T(Object(o.a)(Object(o.a)({},j),{},Object(i.a)({},t,e)))};return Object(u.useEffect)((function(){r(t.reduce((function(e,t){var a=t.price,r=t.numberInCart,n=void 0===r?1:r;return e+(+t.selectedAttributesPrice||a)*n}),0))}),[t]),Object(u.useEffect)((function(){n()}),[]),Object(u.useEffect)((function(){T(Object(o.a)(Object(o.a)({},j),{},{fName:g.fName,lName:g.lName,phone:g.phone}))}),[g]),t.length||B?s.a.createElement("div",{className:_.a.container},s.a.createElement("div",{className:_.a.title__container},s.a.createElement("h4",{className:_.a.title},"\u0417\u0430\u043c\u043e\u0432\u043b\u0435\u043d\u043d\u044f"),s.a.createElement(h.a,{items:W})),s.a.createElement(p.a,null,s.a.createElement("div",{className:_.a.order__container},s.a.createElement("div",{className:_.a.products__container},t.map((function(e){return s.a.createElement(C.a,Object.assign({isSmall:!0},{product:e},{key:e._id}))})),s.a.createElement("div",{className:_.a.subtotal__container},s.a.createElement("div",{className:_.a.subtotal__title},"\u0426\u0456\u043d\u0430:"),s.a.createElement("div",{className:_.a.subtotal__price},a,"\u20b4"))),s.a.createElement("div",{className:_.a.submit__container_all},s.a.createElement("div",{className:_.a.submit__container},s.a.createElement("h2",{className:_.a.submit__title},"\u041e\u0444\u043e\u0440\u043c\u0438\u0442\u0438 \u0437\u0430\u043c\u043e\u0432\u043b\u0435\u043d\u043d\u044f"),s.a.createElement("div",{className:_.a.input__row},s.a.createElement(y.a,{name:"fName",inputClass:_.a.input,containerClass:_.a.input__container,value:j.fName,onChange:N,label:"\u0406\u043c'\u044f",placeholder:"John"}),s.a.createElement(y.a,{placeholder:"Doe",name:"lName",inputClass:_.a.input,containerClass:_.a.input__container,value:j.lName,onChange:N,label:"\u041f\u0440\u0456\u0437\u0432\u0438\u0449\u0435"})),s.a.createElement("div",{className:_.a.phone__container},s.a.createElement(w.a,{name:"phone",value:j.phone,onChange:N,className:_.a.phone__input,label:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0443"})),s.a.createElement(m.a,{containerClass:_.a.section,options:S,onSelect:function(e){return D(e,"paymentType")},label:"\u0422\u0438\u043f \u043e\u043f\u043b\u0430\u0442\u0438",value:j.paymentType.label}),s.a.createElement(m.a,{containerClass:_.a.section,options:k,onSelect:function(e){return D(e,"deliveryType")},label:"\u0422\u0438\u043f \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0438",value:j.deliveryType.label}),"self-pickup"!==j.deliveryType.value&&s.a.createElement(m.a,{containerClass:_.a.section,withSearch:!0,noDefaultValue:!0,onMenuScroll:function(e,t){var a=e.target;a.scrollHeight-a.scrollTop<400&&l.length%20===0&&d(t,l.length+20)},menuClass:_.a.select__menu,options:l.map((function(e){return{value:e.Description,label:e.Description}})),onSelect:function(e){T(Object(o.a)(Object(o.a)({},j),{},{selectedCity:e.label})),c(e.label)},onSearchValueChange:function(e){1===l.length&&e===l[0].Description&&(T(Object(o.a)(Object(o.a)({},j),{},{selectedCity:e})),c(e)),d(e)},label:"\u041c\u0456\u0441\u0442\u043e"}),"self-pickup"!==j.deliveryType.value&&s.a.createElement(m.a,{containerClass:_.a.section,withSearch:!0,noDefaultValue:!0,onMenuScroll:function(e,t){var a=e.target;a.scrollHeight-a.scrollTop<400&&v.length%20===0&&O(t,v.length+20)},menuClass:_.a.select__menu,options:v.map((function(e){return{value:e.Description,label:e.Description}})),onSelect:function(e){T(Object(o.a)(Object(o.a)({},j),{},{selectedWarehouse:e.value}))},label:"\u041d\u043e\u043c\u0435\u0440 \u0432\u0456\u0434\u0434\u0456\u043b\u0435\u043d\u043d\u044f"}),s.a.createElement("div",{className:_.a.actions__container},s.a.createElement("div",{className:_.a.save__user__container},s.a.createElement("input",{type:"checkbox",name:"isSaveUser",onChange:N,checked:j.isSaveUser,className:_.a.save__user__checkbox}),s.a.createElement("p",{className:_.a.save__user__desc,onClick:function(){T(Object(o.a)(Object(o.a)({},j),{},{isSaveUser:!j.isSaveUser}))}},"\u041e\u043d\u043e\u0432\u0438\u0442\u0438 \u043c\u0456\u0439 \u043f\u0440\u043e\u0444\u0456\u043b\u044c")),s.a.createElement("div",{className:_.a.submit__btn__container},s.a.createElement(b.a,{title:"\u041f\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0438 \u0437\u0430\u043c\u043e\u0432\u043b\u0435\u043d\u043d\u044f",onClick:x,isDisabled:!j.fName||!j.lName||!j.phone,className:_.a.submit__btn})),s.a.createElement(E.a,null))))))):s.a.createElement(f.a,{to:"/"})})),x=Object(f.i)(T);t.default=Object(d.b)((function(e){return{cartProducts:e.cart.all,fullPrice:e.cart.fullPrice,cities:e.order.cities,warehouses:e.order.warehouses,isLoading:e.base.isLoading,user:e.profile}}),(function(e){return{addToCart:function(t){return e(Object(v.a)(t))},removeFromCart:function(t){return e(Object(v.d)(t))},setFullPrice:function(t){return e(Object(v.f)(t))},getCities:function(){return e(Object(g.a)())},filterCities:function(t,a){return e(Object(g.a)(t,a))},getWarehouses:function(t){return e(Object(g.b)(t))},filterWarehouses:function(t){return e(Object(g.b)(t))},setSelectedCity:function(t){return e(Object(g.c)(t))},setSelectedWarehouse:function(t){return e(Object(g.d)(t))},patchUser:function(t,a){return e(Object(N.h)(t,a))},createOrder:function(t){return e(Object(g.e)(t))},showAlert:function(t,a){return e(Object(j.b)(t,a))},setCart:function(t){return e(Object(v.e)(t))}}}))(x)}}]);
//# sourceMappingURL=7.ea7c5b1b.chunk.js.map