"use strict";(self.webpackChunkfullstackproject=self.webpackChunkfullstackproject||[]).push([[414],{99:function(e,t,n){n.r(t);var r=n(165),i=n(861),a=n(885),l=n(791),u=n(739),s=n(931),o=n(525),c=n(654),d=(n(239),n(584)),p=n(567),f=n(124),v=n(421),h=n(129),m=n(429),y=n(184);t.default=function(){var e=(0,l.useContext)(f.Z),t=(0,p.x)(),n=t.isLoading,x=t.error,g=t.sendRequest,Z=t.clearError,j=(0,d.c)({title:{value:"",isValid:!1},description:{value:"",isValid:!1},address:{value:"",isValid:!1},image:{value:null,isValid:!1}},!1),T=(0,a.Z)(j,2),b=T[0],V=T[1],I=(0,u.s0)(),C=function(){var t=(0,i.Z)((0,r.Z)().mark((function t(n){var i;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.prev=1,(i=new FormData).append("title",b.inputs.title.value),i.append("description",b.inputs.description.value),i.append("address",b.inputs.address.value),i.append("image",b.inputs.image.value),t.next=9,g("".concat("https://myclicks.onrender.com/api","/places"),"POST",i,{Authorization:"Bearer "+e.token});case 9:I("/"),t.next=14;break;case 12:t.prev=12,t.t0=t.catch(1);case 14:case"end":return t.stop()}}),t,null,[[1,12]])})));return function(e){return t.apply(this,arguments)}}();return(0,y.jsxs)(l.Fragment,{children:[x&&(0,y.jsx)(v.Z,{error:x,onClear:Z}),(0,y.jsxs)("form",{className:"place-form",onSubmit:C,children:[n&&(0,y.jsx)(h.Z,{asOverlay:!0}),(0,y.jsx)(s.Z,{id:"title",element:"input",type:"text",label:"Title",validators:[(0,c.hg)()],errorText:"Please enter a valid title.",onInput:V}),(0,y.jsx)(s.Z,{id:"description",element:"textarea",label:"Description",validators:[(0,c.CP)(5)],errorText:"Please enter a valid description (at least 5 characters).",onInput:V}),(0,y.jsx)(s.Z,{id:"address",element:"input",label:"Address",validators:[(0,c.hg)()],errorText:"Please enter a valid address.",onInput:V}),(0,y.jsx)(m.Z,{id:"image",onInput:V,errorText:"Please Provide an image."}),(0,y.jsx)(o.Z,{type:"submit",disabled:!b.isValid,children:"ADD PLACE"})]})]})}},429:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(885),i=n(791),a=n(525),l=n(184),u=function(e){var t=(0,i.useState)(),n=(0,r.Z)(t,2),u=n[0],s=n[1],o=(0,i.useState)(),c=(0,r.Z)(o,2),d=c[0],p=c[1],f=(0,i.useState)(!1),v=(0,r.Z)(f,2),h=v[0],m=v[1],y=(0,i.useRef)();(0,i.useEffect)((function(){if(u){var e=new FileReader;e.onload=function(){p(e.result)},e.readAsDataURL(u)}}),[u]);return(0,l.jsxs)("div",{className:"form-control",children:[(0,l.jsx)("input",{id:e.id,ref:y,style:{display:"none"},type:"file",accept:".jpg,.png,.jpeg",onChange:function(t){var n,r=h;t.target.files&&1===t.target.files.length?(n=t.target.files[0],s(n),m(!0),r=!0):(m(!1),r=!1),e.onInput(e.id,n,r)}}),(0,l.jsxs)("div",{className:"image-upload ".concat(e.center&&"center"),children:[(0,l.jsxs)("div",{className:"image-upload__preview",children:[d&&(0,l.jsx)("img",{src:d,alt:"Preview"}),!d&&(0,l.jsx)("p",{children:"Please pick an image."})]}),(0,l.jsx)(a.Z,{type:"button",onClick:function(){y.current.click()},children:"PICK IMAGE"})]}),!h&&(0,l.jsx)("p",{children:e.errorText})]})}},931:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(885),i=n(413),a=n(791),l=n(654),u=n(184),s=function(e,t){switch(t.type){case"CHANGE":return(0,i.Z)((0,i.Z)({},e),{},{value:t.val,isValid:(0,l.Gu)(t.val,t.validators)});case"TOUCH":return(0,i.Z)((0,i.Z)({},e),{},{isTouched:!0});default:return e}},o=function(e){var t=(0,a.useReducer)(s,{value:e.initialValue||"",isTouched:!1,isValid:e.initialValid||!1}),n=(0,r.Z)(t,2),i=n[0],l=n[1],o=e.id,c=e.onInput,d=i.value,p=i.isValid;(0,a.useEffect)((function(){c(o,d,p)}),[o,d,p,c]);var f=function(t){l({type:"CHANGE",val:t.target.value,validators:e.validators})},v=function(){l({type:"TOUCH"})},h="input"===e.element?(0,u.jsx)("input",{id:e.id,type:e.type,placeholder:e.placeholder,onChange:f,onBlur:v,value:i.value}):(0,u.jsx)("textarea",{id:e.id,rows:e.rows||3,onChange:f,onBlur:v,value:i.value});return(0,u.jsxs)("div",{className:"form-control ".concat(!i.isValid&&i.isTouched&&"form-control--invalid"),children:[(0,u.jsx)("label",{htmlFor:e.id,children:e.label}),h,!i.isValid&&i.isTouched&&(0,u.jsx)("p",{children:e.errorText})]})}},654:function(e,t,n){n.d(t,{Ox:function(){return c},CP:function(){return o},hg:function(){return s},Gu:function(){return d}});var r=n(181);var i="REQUIRE",a="MINLENGTH",l="MAXLENGTH",u="EMAIL",s=function(){return{type:i}},o=function(e){return{type:a,val:e}},c=function(){return{type:u}},d=function(e,t){var n,s=!0,o=function(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=(0,r.Z)(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var i=0,a=function(){};return{s:a,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,u=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return u=e.done,e},e:function(e){s=!0,l=e},f:function(){try{u||null==n.return||n.return()}finally{if(s)throw l}}}}(t);try{for(o.s();!(n=o.n()).done;){var c=n.value;c.type===i&&(s=s&&e.trim().length>0),c.type===a&&(s=s&&e.trim().length>=c.val),c.type===l&&(s=s&&e.trim().length<=c.val),"MIN"===c.type&&(s=s&&+e>=c.val),"MAX"===c.type&&(s=s&&+e<=c.val),c.type===u&&(s=s&&/^\S+@\S+\.\S+$/.test(e))}}catch(d){o.e(d)}finally{o.f()}return s}},584:function(e,t,n){n.d(t,{c:function(){return s}});var r=n(885),i=n(942),a=n(413),l=n(791),u=function(e,t){switch(t.type){case"INPUT_CHANGE":var n=!0;for(var r in e.inputs)e.inputs[r]&&(n=r===t.inputId?n&&t.isValid:n&&e.inputs[r].isValid);return(0,a.Z)((0,a.Z)({},e),{},{inputs:(0,a.Z)((0,a.Z)({},e.inputs),{},(0,i.Z)({},t.inputId,{value:t.value,isValid:t.isValid})),isValid:n});case"SET_DATA":return{inputs:t.inputs,isValid:t.formIsValid};default:return e}},s=function(e,t){var n=(0,l.useReducer)(u,{inputs:e,isValid:t}),i=(0,r.Z)(n,2),a=i[0],s=i[1];return[a,(0,l.useCallback)((function(e,t,n){s({type:"INPUT_CHANGE",value:t,isValid:n,inputId:e})}),[]),(0,l.useCallback)((function(e,t){s({type:"SET_DATA",inputs:e,formIsValid:t})}),[])]}},239:function(){}}]);
//# sourceMappingURL=414.d9a0a925.chunk.js.map