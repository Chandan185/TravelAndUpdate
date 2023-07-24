"use strict";(self.webpackChunkfullstackproject=self.webpackChunkfullstackproject||[]).push([[322],{429:function(e,n,t){t.d(n,{Z:function(){return l}});var a=t(885),r=t(791),i=t(525),s=t(184),l=function(e){var n=(0,r.useState)(),t=(0,a.Z)(n,2),l=t[0],u=t[1],o=(0,r.useState)(),c=(0,a.Z)(o,2),d=c[0],p=c[1],f=(0,r.useState)(!1),v=(0,a.Z)(f,2),m=v[0],h=v[1],x=(0,r.useRef)();(0,r.useEffect)((function(){if(l){var e=new FileReader;e.onload=function(){p(e.result)},e.readAsDataURL(l)}}),[l]);return(0,s.jsxs)("div",{className:"form-control",children:[(0,s.jsx)("input",{id:e.id,ref:x,style:{display:"none"},type:"file",accept:".jpg,.png,.jpeg",onChange:function(n){var t,a=m;n.target.files&&1===n.target.files.length?(t=n.target.files[0],u(t),h(!0),a=!0):(h(!1),a=!1),e.onInput(e.id,t,a)}}),(0,s.jsxs)("div",{className:"image-upload ".concat(e.center&&"center"),children:[(0,s.jsxs)("div",{className:"image-upload__preview",children:[d&&(0,s.jsx)("img",{src:d,alt:"Preview"}),!d&&(0,s.jsx)("p",{children:"Please pick an image."})]}),(0,s.jsx)(i.Z,{type:"button",onClick:function(){x.current.click()},children:"PICK IMAGE"})]}),!m&&(0,s.jsx)("p",{children:e.errorText})]})}},931:function(e,n,t){t.d(n,{Z:function(){return o}});var a=t(885),r=t(413),i=t(791),s=t(654),l=t(184),u=function(e,n){switch(n.type){case"CHANGE":return(0,r.Z)((0,r.Z)({},e),{},{value:n.val,isValid:(0,s.Gu)(n.val,n.validators)});case"TOUCH":return(0,r.Z)((0,r.Z)({},e),{},{isTouched:!0});default:return e}},o=function(e){var n=(0,i.useReducer)(u,{value:e.initialValue||"",isTouched:!1,isValid:e.initialValid||!1}),t=(0,a.Z)(n,2),r=t[0],s=t[1],o=e.id,c=e.onInput,d=r.value,p=r.isValid;(0,i.useEffect)((function(){c(o,d,p)}),[o,d,p,c]);var f=function(n){s({type:"CHANGE",val:n.target.value,validators:e.validators})},v=function(){s({type:"TOUCH"})},m="input"===e.element?(0,l.jsx)("input",{id:e.id,type:e.type,placeholder:e.placeholder,onChange:f,onBlur:v,value:r.value}):(0,l.jsx)("textarea",{id:e.id,rows:e.rows||3,onChange:f,onBlur:v,value:r.value});return(0,l.jsxs)("div",{className:"form-control ".concat(!r.isValid&&r.isTouched&&"form-control--invalid"),children:[(0,l.jsx)("label",{htmlFor:e.id,children:e.label}),m,!r.isValid&&r.isTouched&&(0,l.jsx)("p",{children:e.errorText})]})}},749:function(e,n,t){t.d(n,{Z:function(){return r}});t(791);var a=t(184),r=function(e){return(0,a.jsx)("div",{className:"card ".concat(e.className),style:e.style,children:e.children})}},654:function(e,n,t){t.d(n,{Ox:function(){return c},CP:function(){return o},hg:function(){return u},Gu:function(){return d}});var a=t(181);var r="REQUIRE",i="MINLENGTH",s="MAXLENGTH",l="EMAIL",u=function(){return{type:r}},o=function(e){return{type:i,val:e}},c=function(){return{type:l}},d=function(e,n){var t,u=!0,o=function(e,n){var t="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=(0,a.Z)(e))||n&&e&&"number"===typeof e.length){t&&(e=t);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,l=!0,u=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return l=e.done,e},e:function(e){u=!0,s=e},f:function(){try{l||null==t.return||t.return()}finally{if(u)throw s}}}}(n);try{for(o.s();!(t=o.n()).done;){var c=t.value;c.type===r&&(u=u&&e.trim().length>0),c.type===i&&(u=u&&e.trim().length>=c.val),c.type===s&&(u=u&&e.trim().length<=c.val),"MIN"===c.type&&(u=u&&+e>=c.val),"MAX"===c.type&&(u=u&&+e<=c.val),c.type===l&&(u=u&&/^\S+@\S+\.\S+$/.test(e))}}catch(d){o.e(d)}finally{o.f()}return u}},584:function(e,n,t){t.d(n,{c:function(){return u}});var a=t(885),r=t(942),i=t(413),s=t(791),l=function(e,n){switch(n.type){case"INPUT_CHANGE":var t=!0;for(var a in e.inputs)e.inputs[a]&&(t=a===n.inputId?t&&n.isValid:t&&e.inputs[a].isValid);return(0,i.Z)((0,i.Z)({},e),{},{inputs:(0,i.Z)((0,i.Z)({},e.inputs),{},(0,r.Z)({},n.inputId,{value:n.value,isValid:n.isValid})),isValid:t});case"SET_DATA":return{inputs:n.inputs,isValid:n.formIsValid};default:return e}},u=function(e,n){var t=(0,s.useReducer)(l,{inputs:e,isValid:n}),r=(0,a.Z)(t,2),i=r[0],u=r[1];return[i,(0,s.useCallback)((function(e,n,t){u({type:"INPUT_CHANGE",value:n,isValid:t,inputId:e})}),[]),(0,s.useCallback)((function(e,n){u({type:"SET_DATA",inputs:e,formIsValid:n})}),[])]}},264:function(e,n,t){t.r(n),t.d(n,{default:function(){return Z}});var a=t(165),r=t(861),i=t(413),s=t(885),l=t(791),u=t(931),o=(t(239),t(584)),c=t(749),d=t(124),p=t(567),f=t(654),v=t(525),m=t(129),h=t(421),x=t(429),y=t(184),Z=function(){var e=(0,l.useContext)(d.Z),n=(0,l.useState)(!0),t=(0,s.Z)(n,2),Z=t[0],g=t[1],j=(0,p.x)(),I=j.isLoading,w=j.error,T=j.sendRequest,b=j.clearError,V=(0,o.c)({email:{value:"",isValid:!1},password:{value:"",isValid:!1}},!1),N=(0,s.Z)(V,3),C=N[0],k=N[1],S=N[2],E=function(){var n=(0,r.Z)((0,a.Z)().mark((function n(t){var r,i,s;return(0,a.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t.preventDefault(),!Z){n.next=13;break}return n.prev=2,n.next=5,T("http://localhost:5000/api/users/login","POST",JSON.stringify({email:C.inputs.email.value,password:C.inputs.password.value}),{"Content-Type":"application/json"});case 5:r=n.sent,e.login(r.userId,r.token),n.next=11;break;case 9:n.prev=9,n.t0=n.catch(2);case 11:n.next=28;break;case 13:return n.prev=13,(i=new FormData).append("email",C.inputs.email.value),i.append("name",C.inputs.name.value),i.append("password",C.inputs.password.value),i.append("image",C.inputs.image.value),console.log(i),n.next=22,T("http://localhost:5000/api/users/signup","POST",i);case 22:s=n.sent,e.login(s.userId,s.token),n.next=28;break;case 26:n.prev=26,n.t1=n.catch(13);case 28:case"end":return n.stop()}}),n,null,[[2,9],[13,26]])})));return function(e){return n.apply(this,arguments)}}();return(0,y.jsxs)(l.Fragment,{children:[(0,y.jsx)(h.Z,{error:w,onClear:b}),(0,y.jsxs)(c.Z,{className:"authentication",children:[I&&(0,y.jsx)(m.Z,{asOverlay:!0}),(0,y.jsx)("h2",{children:"Login Required"}),(0,y.jsx)("hr",{}),(0,y.jsxs)("form",{onSubmit:E,children:[!Z&&(0,y.jsx)(u.Z,{element:"input",id:"name",type:"text",label:"Your Name",validators:[(0,f.hg)()],errorText:"Please enter a name.",onInput:k}),!Z&&(0,y.jsx)(x.Z,{center:!0,id:"image",onInput:k,errorText:"Please provide an image."}),(0,y.jsx)(u.Z,{element:"input",id:"email",type:"email",label:"E-Mail",validators:[(0,f.Ox)()],errorText:"Please enter a valid email address.",onInput:k}),(0,y.jsx)(u.Z,{element:"input",id:"password",type:"password",label:"Password",validators:[(0,f.CP)(6)],errorText:"Please enter a valid password, at least 6 characters.",onInput:k}),(0,y.jsx)(v.Z,{type:"submit",disabled:!C.isValid,children:Z?"LOGIN":"SIGNUP"})]}),(0,y.jsxs)(v.Z,{inverse:!0,onClick:function(){Z?S((0,i.Z)((0,i.Z)({},C.inputs),{},{name:{value:"",isValid:!1},image:{value:null,isValid:!1}}),!1):S((0,i.Z)((0,i.Z)({},C.inputs),{},{name:void 0,image:void 0}),C.inputs.email.isValid&&C.inputs.password.isValid),g((function(e){return!e}))},children:["SWITCH TO ",Z?"SIGNUP":"LOGIN"]})]})]})}},239:function(){}}]);
//# sourceMappingURL=322.f7153961.chunk.js.map