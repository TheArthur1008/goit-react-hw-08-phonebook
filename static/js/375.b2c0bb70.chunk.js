"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[375],{8375:function(e,n,t){t.r(n),t.d(n,{default:function(){return v}});var a=t(7689),r=t(5048),i=t(8650),c=(t(2791),t(1087)),l=t(3329),o=function(){return(0,l.jsx)("div",{children:(0,l.jsx)("nav",{children:(0,l.jsx)(c.OL,{to:"contacts",children:"Contacts"})})})},s=t(9439),u=t(6306),d=t(9712),m=t(5777),f=function(){var e=(0,r.v9)(i.vW),n=(0,u.Zn)(),t=(0,s.Z)(n,1)[0];return(0,l.jsx)(d.xu,{children:(0,l.jsxs)(d.kC,{h:16,alignItems:"center",justifyContent:"space-between",children:[(0,l.jsxs)(d.xv,{fontSize:"20px",color:"darkgreen",as:"u",mr:10,children:["Hello! ",e]}),(0,l.jsx)(m.zx,{type:"button",onClick:function(){t()},children:"LogOut"})]})})},p=t(410),h=function(){return(0,l.jsx)(d.xu,{bg:(0,p.ff)("gray.100","gray.900"),px:4,children:(0,l.jsxs)(d.kC,{h:16,alignItems:"center",justifyContent:"space-between",children:[(0,l.jsx)(o,{}),(0,l.jsx)(f,{})]})})},v=function(){var e=(0,r.v9)(i.Vp);return(0,l.jsxs)(l.Fragment,{children:[e&&(0,l.jsx)(h,{}),(0,l.jsx)(a.j3,{})]})}},5777:function(e,n,t){t.d(n,{zx:function(){return k}});var a=t(4942),r=t(1413),i=t(4925),c=t(9439),l=t(2791),o=t(1507),s=t(251),u=t(2965),d=t(2680),m=t(9194),f=["children","className"],p=["label","placement","spacing","children","className","__css"],h=["isDisabled","isLoading","isActive","children","leftIcon","rightIcon","loadingText","iconSpacing","type","spinner","spinnerPlacement","className","as"],v=["size","colorScheme","variant","className","spacing","isAttached","isDisabled"],g=["icon","children","isRound","aria-label"],b=function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return n.filter(Boolean).join(" ")},y=function(e){return e?"":void 0},Z=(0,d.k)({strict:!1,name:"ButtonGroupContext"}),x=(0,c.Z)(Z,2),_=x[0],E=x[1];function N(e){var n=e.children,t=e.className,a=(0,i.Z)(e,f),c=(0,l.isValidElement)(n)?(0,l.cloneElement)(n,{"aria-hidden":!0,focusable:!1}):n,o=b("chakra-button__icon",t);return l.createElement(s.m$.span,(0,r.Z)((0,r.Z)({display:"inline-flex",alignSelf:"center",flexShrink:0},a),{},{className:o}),c)}function j(e){var n=e.label,t=e.placement,c=e.spacing,o=void 0===c?"0.5rem":c,u=e.children,d=void 0===u?l.createElement(m.$,{color:"currentColor",width:"1em",height:"1em"}):u,f=e.className,h=e.__css,v=(0,i.Z)(e,p),g=b("chakra-button__spinner",f),y="start"===t?"marginEnd":"marginStart",Z=(0,l.useMemo)((function(){var e;return(0,r.Z)((e={display:"flex",alignItems:"center",position:n?"relative":"absolute"},(0,a.Z)(e,y,n?o:0),(0,a.Z)(e,"fontSize","1em"),(0,a.Z)(e,"lineHeight","normal"),e),h)}),[h,n,y,o]);return l.createElement(s.m$.div,(0,r.Z)((0,r.Z)({className:g},v),{},{__css:Z}),d)}N.displayName="ButtonIcon",j.displayName="ButtonSpinner";var k=(0,s.Gp)((function(e,n){var t=E(),a=(0,s.mq)("Button",(0,r.Z)((0,r.Z)({},t),e)),d=(0,u.Lr)(e),m=d.isDisabled,f=void 0===m?null==t?void 0:t.isDisabled:m,p=d.isLoading,v=d.isActive,g=d.children,Z=d.leftIcon,x=d.rightIcon,_=d.loadingText,N=d.iconSpacing,k=void 0===N?"0.5rem":N,I=d.type,w=d.spinner,C=d.spinnerPlacement,B=void 0===C?"start":C,z=d.className,A=d.as,q=(0,i.Z)(d,h),D=(0,l.useMemo)((function(){var e=(0,r.Z)((0,r.Z)({},null==a?void 0:a._focus),{},{zIndex:1});return(0,r.Z)((0,r.Z)({display:"inline-flex",appearance:"none",alignItems:"center",justifyContent:"center",userSelect:"none",position:"relative",whiteSpace:"nowrap",verticalAlign:"middle",outline:"none"},a),!!t&&{_focus:e})}),[a,t]),R=function(e){var n=(0,l.useState)(!e),t=(0,c.Z)(n,2),a=t[0],r=t[1];return{ref:(0,l.useCallback)((function(e){e&&r("BUTTON"===e.tagName)}),[]),type:a?"button":void 0}}(A),$=R.ref,G=R.type,L={rightIcon:x,leftIcon:Z,iconSpacing:k,children:g};return l.createElement(s.m$.button,(0,r.Z)({disabled:f||p,ref:(0,o.qq)(n,$),as:A,type:null!==I&&void 0!==I?I:G,"data-active":y(v),"data-loading":y(p),__css:D,className:b("chakra-button",z)},q),p&&"start"===B&&l.createElement(j,{className:"chakra-button__spinner--start",label:_,placement:"start",spacing:k},w),p?_||l.createElement(s.m$.span,{opacity:0},l.createElement(S,(0,r.Z)({},L))):l.createElement(S,(0,r.Z)({},L)),p&&"end"===B&&l.createElement(j,{className:"chakra-button__spinner--end",label:_,placement:"end",spacing:k},w))}));function S(e){var n=e.leftIcon,t=e.rightIcon,a=e.children,r=e.iconSpacing;return l.createElement(l.Fragment,null,n&&l.createElement(N,{marginEnd:r},n),a,t&&l.createElement(N,{marginStart:r},t))}k.displayName="Button",(0,s.Gp)((function(e,n){var t=e.size,a=e.colorScheme,c=e.variant,o=e.className,u=e.spacing,d=void 0===u?"0.5rem":u,m=e.isAttached,f=e.isDisabled,p=(0,i.Z)(e,v),h=b("chakra-button__group",o),g=(0,l.useMemo)((function(){return{size:t,colorScheme:a,variant:c,isDisabled:f}}),[t,a,c,f]),y={display:"inline-flex"};return y=m?(0,r.Z)((0,r.Z)({},y),{},{"> *:first-of-type:not(:last-of-type)":{borderEndRadius:0},"> *:not(:first-of-type):not(:last-of-type)":{borderRadius:0},"> *:not(:first-of-type):last-of-type":{borderStartRadius:0}}):(0,r.Z)((0,r.Z)({},y),{},{"& > *:not(style) ~ *:not(style)":{marginStart:d}}),l.createElement(_,{value:g},l.createElement(s.m$.div,(0,r.Z)({ref:n,role:"group",__css:y,className:h,"data-attached":m?"":void 0},p)))})).displayName="ButtonGroup",(0,s.Gp)((function(e,n){var t=e.icon,a=e.children,c=e.isRound,o=e["aria-label"],s=(0,i.Z)(e,g),u=t||a,d=(0,l.isValidElement)(u)?(0,l.cloneElement)(u,{"aria-hidden":!0,focusable:!1}):null;return l.createElement(k,(0,r.Z)({padding:"0",borderRadius:c?"full":void 0,ref:n,"aria-label":o},s),d)})).displayName="IconButton"},1507:function(e,n,t){t.d(n,{lq:function(){return i},qq:function(){return c}});var a=t(2791);function r(e,n){if(null!=e)if("function"!==typeof e)try{e.current=n}catch(t){throw new Error("Cannot assign value '".concat(n,"' to ref '").concat(e,"'"))}else e(n)}function i(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return function(e){n.forEach((function(n){r(n,e)}))}}function c(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return(0,a.useMemo)((function(){return i.apply(void 0,n)}),n)}}}]);
//# sourceMappingURL=375.b2c0bb70.chunk.js.map