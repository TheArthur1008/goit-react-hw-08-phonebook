"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[73],{2073:function(e,n,t){t.r(n),t.d(n,{default:function(){return w}});var r=t(2791),a=t(7689),s=t(5048),o=t(8650),c=t(5295),i=t(9712),u=t(824),l=t(3329),d=function(){var e=(0,s.I0)(),n=(0,s.v9)((function(e){return e.filter}));return(0,l.jsxs)(i.Kq,{w:"400px",mx:"auto",my:"6",spacing:4,children:[(0,l.jsx)("p",{children:" Find contacts by name"}),(0,l.jsx)(u.II,{onChange:function(n){e((0,c.T)(n.currentTarget.value.toLowerCase()))},value:n,type:"text",name:"filter"})]})},m=t(1413),h=t(6501),p=t(9439),x=t(9085),f=t(5777),b=function(e){var n=e.name,t=e.number,a=e.id,s=(0,h.zr)(),o=(0,p.Z)(s,2),c=o[0],u=o[1],d=u.isLoading,m=u.isSuccess,b=u.error;return(0,r.useEffect)((function(){m&&x.Am.info(" ".concat(n," was removed from the phone book")),b&&x.Am.error("oops something went wrong")}),[m,n,b]),(0,l.jsx)(i.xu,{mb:"5",children:(0,l.jsxs)(i.kC,{alignItems:"center",justifyContent:"space-between",w:"400px",mb:"5",children:[n,": ",t,(0,l.jsx)(f.zx,{type:"button",onClick:function(){return c(a)},disabled:d,children:d?"Delete...":"Delete"})]})},a)},j=t(9194),g=function(){var e=(0,h.pG)(),n=e.data,t=e.isFetching,r=(0,s.v9)((function(e){return e.filter})),a=n&&n.filter((function(e){return e.name.toLowerCase().includes(r)}));return(0,l.jsxs)(l.Fragment,{children:[n&&0!==n.length&&(0,l.jsx)("ul",{children:0!==a.length?a.map((function(e){return(0,l.jsx)(b,(0,m.Z)({},e),e.id)})):(0,l.jsxs)("p",{children:["no search contacts: ",r]})}),n&&0===n.length&&(0,l.jsx)("p",{children:"'You have no contacts'"}),t&&(0,l.jsx)(j.$,{thickness:"4px",speed:"0.65s",emptyColor:"gray.200",color:"blue.500",size:"xl"})]})},v=function(){var e=(0,h.F3)(),n=(0,p.Z)(e,2),t=n[0],a=n[1],s=a.isLoading,o=a.isSuccess,c=a.error,d=(0,h.pG)().data,m=(0,r.useState)(""),b=(0,p.Z)(m,2),j=b[0],g=b[1],v=(0,r.useState)(""),w=(0,p.Z)(v,2),C=w[0],y=w[1],k=(0,r.useState)(""),A=(0,p.Z)(k,2),Z=A[0],z=A[1];(0,r.useEffect)((function(){o&&x.Am.success(" ".concat(Z," added to contact book"),{autoClose:800}),c&&x.Am.error("oops something went wrong")}),[c,o,Z]);var I=function(e){var n=e.currentTarget,t=n.name,r=n.value;switch(t){case"name":g(r);break;case"number":y(r);break;default:return}};return(0,l.jsx)("form",{autoComplete:"off",onSubmit:function(e){e.preventDefault(),z(j),d.every((function(e){return e.name.toLowerCase()!==j.toLowerCase()}))?t({name:j,number:C}):x.Am.error("".concat(j," is alredy in contacts!!!")),g(""),y("")},children:(0,l.jsxs)(i.Kq,{w:"400px",mx:"auto",my:"6",spacing:4,children:[(0,l.jsx)("p",{children:"Name"}),(0,l.jsx)(u.II,{onChange:I,value:j,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,placeholder:"John Dou"}),(0,l.jsx)("p",{children:"Number"}),(0,l.jsx)(u.II,{onChange:I,value:C,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,placeholder:"000-111-22-33"}),(0,l.jsx)(f.zx,{colorScheme:"gray",type:"submit",disabled:!C||!j,children:s?"Add Contact...Spiner":"Add Contact"})]})})},w=function(){var e=(0,s.v9)(o.Vp);return(0,l.jsxs)(i.xu,{w:"400px",mx:"auto",my:"6",children:[!e&&(0,l.jsx)(a.Fg,{to:"/",replace:!0}),(0,l.jsx)(i.X6,{mb:5,children:"Phonebook"}),(0,l.jsx)(v,{}),(0,l.jsx)(i.X6,{mb:5,children:"Contacts"}),(0,l.jsx)(d,{}),(0,l.jsx)(g,{})]})}}}]);
//# sourceMappingURL=73.e9c21b9c.chunk.js.map