(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[506],{6729:function(e,r,t){"use strict";t.d(r,{NJ:function(){return g}});var n=t(4577),i=t(639),a=t(63),l=t(2326),o=t(5284),s=t(9676),c=t(227),u=t(4461),d=t(658),h=t(3808),f=t(8500),v=t(2947),p=t(7294);function m(){return(m=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function b(e,r){if(null==e)return{};var t,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}var[y,g]=(0,f.k)({strict:!1,name:"FormControlContext"});var O=(0,a.G)(((e,r)=>{var t=(0,l.j)("Form",e),a=function(e){var{id:r,isRequired:t,isInvalid:a,isDisabled:l,isReadOnly:o}=e,s=b(e,["id","isRequired","isInvalid","isDisabled","isReadOnly"]),c=(0,n.Me)(),h=r||"field-"+c,f=h+"-label",y=h+"-feedback",g=h+"-helptext",[O,x]=p.useState(!1),[j,k]=p.useState(!1),[w,E]=(0,i.k)(),P=p.useCallback((function(e,r){return void 0===e&&(e={}),void 0===r&&(r=null),m({id:g},e,{ref:(0,v.l)(r,(e=>{e&&k(!0)}))})}),[g]),C=p.useCallback((function(e,r){var t,n;return void 0===e&&(e={}),void 0===r&&(r=null),m({},e,{ref:r,"data-focus":(0,u.PB)(w),"data-disabled":(0,u.PB)(l),"data-invalid":(0,u.PB)(a),"data-readonly":(0,u.PB)(o),id:null!=(t=e.id)?t:f,htmlFor:null!=(n=e.htmlFor)?n:h})}),[h,l,w,a,o,f]),I=p.useCallback((function(e,r){return void 0===e&&(e={}),void 0===r&&(r=null),m({id:y},e,{ref:(0,v.l)(r,(e=>{e&&x(!0)})),"aria-live":"polite"})}),[y]),R=p.useCallback((function(e,r){return void 0===e&&(e={}),void 0===r&&(r=null),m({},e,s,{ref:r,role:"group"})}),[s]),z=p.useCallback((function(e,r){return void 0===e&&(e={}),void 0===r&&(r=null),m({},e,{ref:r,role:"presentation","aria-hidden":!0,children:e.children||"*"})}),[]),T=p.useCallback((()=>{(0,d.A4)(E.on)}),[E]);return{isRequired:!!t,isInvalid:!!a,isReadOnly:!!o,isDisabled:!!l,isFocused:!!w,onFocus:T,onBlur:E.off,hasFeedbackText:O,setHasFeedbackText:x,hasHelpText:j,setHasHelpText:k,id:h,labelId:f,feedbackId:y,helpTextId:g,htmlProps:s,getHelpTextProps:P,getErrorMessageProps:I,getRootProps:R,getLabelProps:C,getRequiredIndicatorProps:z}}((0,o.Lr)(e)),{getRootProps:h}=a,f=b(a,["getRootProps","htmlProps"]),g=(0,u.cx)("chakra-form-control",e.className),O=p.useMemo((()=>f),[f]);return p.createElement(y,{value:O},p.createElement(s.Fo,{value:t},p.createElement(c.m$.div,m({},h({},r),{className:g,__css:{width:"100%",position:"relative"}}))))}));h.Ts&&(O.displayName="FormControl");var x=(0,a.G)(((e,r)=>{var t=g(),n=(0,s.yK)(),i=(0,u.cx)("chakra-form__helper-text",e.className);return p.createElement(c.m$.div,m({},null==t?void 0:t.getHelpTextProps(e,r),{__css:n.helperText,className:i}))}));h.Ts&&(x.displayName="FormHelperText")},2202:function(e,r,t){"use strict";t.d(r,{Y:function(){return s}});var n=t(4461),i=t(658),a=t(6729);function l(){return(l=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function o(e,r){if(null==e)return{};var t,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}function s(e){var r=function(e){var r,t,n,s=(0,a.NJ)(),{id:c,disabled:u,readOnly:d,required:h,isRequired:f,isInvalid:v,isReadOnly:p,isDisabled:m,onFocus:b,onBlur:y}=e,g=o(e,["id","disabled","readOnly","required","isRequired","isInvalid","isReadOnly","isDisabled","onFocus","onBlur"]),O=[];null!=s&&s.hasFeedbackText&&null!=s&&s.isInvalid&&O.push(s.feedbackId);null!=s&&s.hasHelpText&&O.push(s.helpTextId);return l({},g,{"aria-describedby":O.join(" ")||void 0,id:null!=c?c:null==s?void 0:s.id,isDisabled:null!=(r=null!=u?u:m)?r:null==s?void 0:s.isDisabled,isReadOnly:null!=(t=null!=d?d:p)?t:null==s?void 0:s.isReadOnly,isRequired:null!=(n=null!=h?h:f)?n:null==s?void 0:s.isRequired,isInvalid:null!=v?v:null==s?void 0:s.isInvalid,onFocus:(0,i.v0)(null==s?void 0:s.onFocus,b),onBlur:(0,i.v0)(null==s?void 0:s.onBlur,y)})}(e),{isDisabled:t,isInvalid:s,isReadOnly:c,isRequired:u}=r;return l({},o(r,["isDisabled","isInvalid","isReadOnly","isRequired"]),{disabled:t,readOnly:c,required:u,"aria-invalid":(0,n.Qm)(s),"aria-required":(0,n.Qm)(u),"aria-readonly":(0,n.Qm)(c)})}},639:function(e,r,t){"use strict";t.d(r,{k:function(){return i}});var n=t(7294);function i(e){void 0===e&&(e=!1);var[r,t]=(0,n.useState)(e);return[r,{on:(0,n.useCallback)((()=>{t(!0)}),[]),off:(0,n.useCallback)((()=>{t(!1)}),[]),toggle:(0,n.useCallback)((()=>{t((e=>!e))}),[])}]}},1684:function(e,r,t){"use strict";t.d(r,{Z:function(){return u}});var n=t(5893),i=t(9008),a=t(4096),l=t(4115),o=t(3850),s=t(9316),c="80px";function u(e){var r=e.children;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(i.default,{children:[(0,n.jsx)("title",{children:"Emissions Calculator"}),(0,n.jsx)("meta",{name:"description",content:"Emissions calculator"}),(0,n.jsx)("link",{rel:"icon",href:"".concat(s.jW,"/favicon.ico")})]}),(0,n.jsxs)(a.k,{minHeight:"100vh",direction:"column",children:[(0,n.jsx)(a.k,{alignItems:"center",height:c,top:"0",w:"100%",bg:"#055E9E",color:"white",zIndex:10,children:(0,n.jsx)(l.x,{pl:"3.5rem",fontSize:"2.25rem",fontWeight:"bold",children:"SeeChange"})}),(0,n.jsx)(a.k,{alignItems:"center",minHeight:"calc(100vh - ".concat(c,")"),pos:"relative",py:5,children:(0,n.jsx)(o.W,{centerContent:!0,maxW:"container.sm",children:r})})]})]})}},8437:function(e,r,t){"use strict";t.d(r,{Z:function(){return l}});var n=t(5893),i=t(5063),a=t(155);function l(e){var r=e.children,t=e.href,l=e.onClick,o=e.disabled,s=e.variant;return(0,n.jsx)(i.default,{href:t,passHref:!0,children:(0,n.jsx)(a.z,{mt:8,px:"12",colorScheme:"blue",disabled:o,onClick:l,variant:s||"solid",children:r})})}},9885:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return N}});var n=t(6265),i=t(5893),a=t(7294),l=t(2202),o=t(63),s=t(2326),c=t(5284),u=t(227),d=t(5505),h=t(4461),f=t(3808);function v(){return(v=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}var p=(0,o.G)(((e,r)=>{var t=(0,s.m)("Textarea",e),n=(0,c.Lr)(e),{className:i,rows:o}=n,f=function(e,r){if(null==e)return{};var t,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(n,["className","rows"]),p=(0,l.Y)(f),m=o?(0,d.CE)(t,["h","minH","height","minHeight"]):t;return a.createElement(u.m$.textarea,v({ref:r,rows:o},p,{className:(0,h.cx)("chakra-textarea",i),__css:m}))}));f.Ts&&(p.displayName="Textarea");var m,b,y,g,O,x,j,k=t(336),w=t(4115),E=t(1684),P=t(1861),C=t(8437),I=["title","titleId"];function R(){return(R=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function z(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var T=function(e){var r=e.title,t=e.titleId,n=z(e,I);return a.createElement("svg",R({width:750,height:33,fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":t},n),r?a.createElement("title",{id:t},r):null,m||(m=a.createElement("rect",{y:11,width:750,height:20,rx:4,fill:"#E9ECEF"})),b||(b=a.createElement("path",{fill:"#E49273",d:"M0 11h600v20H0z"})),y||(y=a.createElement("path",{d:"M273.285 15.878h1.694v6.272h1.617v1.449h-1.617V26h-1.652l.007-2.401h-4.711V22.15l4.662-6.272zm-3.066 6.272h3.101v-4.158l-3.101 4.158zm13.926 3.99c-1.036 0-1.867-.327-2.492-.98-.621-.658-.931-1.573-.931-2.744 0-.756.135-1.419.406-1.988a3.116 3.116 0 011.183-1.33c.513-.317 1.127-.476 1.841-.476 1.036 0 1.859.336 2.471 1.008.616.672.924 1.6.924 2.786 0 .733-.133 1.379-.399 1.939-.262.56-.647.999-1.155 1.316-.504.313-1.12.469-1.848.469zm.007-1.295c.588 0 1.022-.233 1.302-.7.284-.467.427-1.06.427-1.778 0-.443-.056-.852-.168-1.225a1.874 1.874 0 00-.553-.896c-.252-.229-.588-.343-1.008-.343-.598 0-1.039.229-1.323.686-.285.457-.427 1.05-.427 1.778 0 .439.056.847.168 1.225.112.373.296.677.553.91.256.229.599.343 1.029.343zm7.572 1.295a3.411 3.411 0 01-1.337-.28 2.507 2.507 0 01-1.029-.805c-.266-.36-.399-.803-.399-1.33v-4.963h1.708v4.767c0 .397.123.721.371.973.252.247.63.371 1.134.371.457 0 .823-.119 1.099-.357.275-.243.413-.59.413-1.043v-4.711h1.694V26h-1.309l-.189-1.414c-.089.397-.245.71-.469.938-.22.224-.479.383-.777.476-.294.093-.598.14-.91.14zm9.637-6.174h-1.617l.007 4.151c0 .322.056.523.168.602.112.075.305.112.581.112h.896v1.078c-.098.037-.243.07-.434.098a4.543 4.543 0 01-.749.049c-.574 0-1.02-.075-1.337-.224-.313-.15-.53-.364-.651-.644a2.547 2.547 0 01-.182-1.008v-4.214h-1.176v-1.204h1.225l.427-2.149h1.225v2.142h1.617v1.211zm7.776 6.174c-1.036 0-1.867-.327-2.492-.98-.621-.658-.931-1.573-.931-2.744 0-.756.135-1.419.406-1.988a3.116 3.116 0 011.183-1.33c.513-.317 1.127-.476 1.841-.476 1.036 0 1.859.336 2.471 1.008.616.672.924 1.6.924 2.786 0 .733-.133 1.379-.399 1.939-.262.56-.647.999-1.155 1.316-.504.313-1.12.469-1.848.469zm.007-1.295c.588 0 1.022-.233 1.302-.7.284-.467.427-1.06.427-1.778 0-.443-.056-.852-.168-1.225a1.874 1.874 0 00-.553-.896c-.252-.229-.588-.343-1.008-.343-.598 0-1.039.229-1.323.686-.285.457-.427 1.05-.427 1.778 0 .439.056.847.168 1.225.112.373.296.677.553.91.256.229.599.343 1.029.343zm8.934-6.083v1.204h-1.631V26h-1.701v-6.034h-1.428v-1.204h1.428v-1.078c0-.579.159-1.024.476-1.337.322-.313.787-.469 1.393-.469h1.526l.007 1.162h-1.008c-.275 0-.464.072-.567.217-.102.14-.154.362-.154.665v.84h1.659zm5.298-2.884h6.293l-.063 1.421h-4.844l-.231 2.814a3.882 3.882 0 011.085-.546 4.079 4.079 0 011.204-.168 4.01 4.01 0 011.75.378c.527.252.947.623 1.26 1.113.317.49.476 1.09.476 1.799 0 .71-.159 1.323-.476 1.841-.313.518-.756.92-1.33 1.204-.57.28-1.244.42-2.023.42a5.043 5.043 0 01-1.799-.315 4.431 4.431 0 01-1.428-.882 3.622 3.622 0 01-.889-1.281l1.379-.728c.261.523.597.957 1.008 1.302.415.34.94.511 1.575.511.658 0 1.185-.182 1.582-.546.401-.369.602-.859.602-1.47a1.868 1.868 0 00-1.029-1.694 2.257 2.257 0 00-1.071-.252c-.36 0-.689.051-.987.154-.294.098-.623.317-.987.658a.254.254 0 01-.21-.007l-1.309-.532.462-5.194z",fill:"#212529"})),g||(g=a.createElement("path",{fill:"#E49273",d:"M599 11h1v20h-1z"})),O||(O=a.createElement("path",{d:"M637.366 31.474S643 29.167 643 22.995c0-3.63-2.967-6.42-5.968-7.957a12.577 12.577 0 00-14.382-8.686c-.305.06-.605.132-.9.21a10.27 10.27 0 00-17.681 1.034 10.383 10.383 0 00-14.112 11.355c-1.5-.397-3.576.065-3.23 3.61-3.274 1.436-5.422 5.452-1.961 8.913h52.6z",fill:"#F8E4DD",stroke:"#000",strokeWidth:3,strokeMiterlimit:10})),x||(x=a.createElement("path",{d:"M615.684 21.438s0 1.502-1.499 1.502c-1.5 0-1.504-1.502-1.504-1.502h3.003zM607.894 20.054a1.788 1.788 0 100-3.575 1.788 1.788 0 000 3.575zM620.583 20.054a1.788 1.788 0 100-3.577 1.788 1.788 0 000 3.577z",stroke:"#000",strokeWidth:2,strokeMiterlimit:10})),j||(j=a.createElement("path",{d:"M608.643 18.439a.692.692 0 100-1.383.692.692 0 000 1.383zM621.333 18.439a.692.692 0 100-1.384.692.692 0 000 1.384z",fill:"#000"})))};function F(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function _(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?F(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):F(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function N(){var e=(0,P.Z)(),r=e.answers,t=e.setAnswers,n=(0,a.useState)(r.incentive),l=n[0],o=n[1];return(0,i.jsxs)(E.Z,{children:[(0,i.jsx)(T,{}),(0,i.jsx)(k.X,{children:"Question 4/5"}),(0,i.jsxs)(w.x,{textAlign:"center",children:[(0,i.jsx)("br",{}),"Can you think of anything that would encourage you to change your mode of transport to work? (e.g., public transport subsidies, carpooling arrangements, or other incentives?)"]}),(0,i.jsx)(p,{mt:8,value:l,onChange:function(e){return o(e.target.value)}}),(0,i.jsx)(C.Z,{href:"/form/Question5",onClick:function(){return t((function(e){return _(_({},e),{},{incentive:l})}))},children:"Continue"})]})}},9316:function(e,r,t){"use strict";t.d(r,{en:function(){return n},pM:function(){return i},Yd:function(){return a},jW:function(){return l}});var n=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],i=["walk","bicycle","scooter","train/tram","bus","car(shared)","car(solo)"],a=["education","health","transport","finance"],l="https://codeforaustralia.github.io/council-emissions-calculator-spike"},3862:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/form/Question4",function(){return t(9885)}])}},function(e){e.O(0,[613,283,774,888,179],(function(){return r=3862,e(e.s=r);var r}));var r=e.O();_N_E=r}]);