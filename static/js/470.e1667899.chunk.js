"use strict";(self.webpackChunkreact_team_project=self.webpackChunkreact_team_project||[]).push([[470],{7470:function(n,e,t){t.r(e),t.d(e,{default:function(){return I}});var i=t(9434),r=t(7689),a=t(2791),o=t(1149),s=t(9439),d=t(1087),l=t(5705),c=t(9273),h=t(9601),u=t(1445),m=t(3535),p=t(7608),x=t(751),f=t(6215),g=t(7629),w=t(184),j=function(){var n=(0,i.I0)(),e=(0,i.v9)((function(n){return n.auth.status})),t=(0,a.useState)(["33%","red"]),r=(0,s.Z)(t,2),o=r[0],j=r[1],b=(0,l.TA)({initialValues:{email:"",password:"",confirmPassword:"",username:""},validationSchema:x.T,onSubmit:function(e,t){var i=e.username,r=e.email,a=e.password;n((0,c.y1)({username:i,email:r,password:a})).then((function(n){return null!==n&&void 0!==n&&n.error?(0,f.Z)(n.payload instanceof Object?n.payload[0]:n.payload):t.resetForm()}))}}),y=b.values,v=b.isSubmitting,_=b.errors,k=b.touched,C=b.handleBlur,Z=b.handleChange,P=b.handleSubmit,I=y.email,A=y.password,B=y.confirmPassword,S=y.username;return(0,a.useEffect)((function(){A.match(/^(?=(.*[A-Z]){1,})(?=(.*[0-9]){1,})(?=(.*[!@#$%^&*()\-__+.]){1,}).{6,}$/)?j(["100%","#28ce65"]):A.match(/^(?=(.*[A-Z]){1,})(?=(.*[0-9]){1,}).{1,}$/)||A.match(/^(?=(.*[A-Z]){1,})(?=(.*[!@#$%^&*()\-__+.]){1,}).{1,}$/)||A.match(/^(?=(.*[0-9]){1,})(?=(.*[!@#$%^&*()\-__+.]){1,}).{1,}$/)?j(["66%","yellow"]):j(["33%","red"])}),[A]),(0,w.jsxs)(g.cX,{children:[(0,w.jsxs)(g.Dx,{children:[(0,w.jsx)(u.K7,{children:(0,w.jsx)("use",{href:h.Z+"#icon-wallet"})}),"Wallet"]}),(0,w.jsxs)(g.Bt,{onSubmit:P,children:[(0,w.jsxs)(g.__,{children:[(0,w.jsx)(g.II,{onChange:Z,onBlur:C,value:I,id:"email",type:"email",name:"email",placeholder:"E-mail",disabled:"loading"===e}),(0,w.jsx)(g.LQ,{style:{color:_.email&&k.email&&"red"}}),_.email&&k.email&&(0,w.jsx)(g.jj,{children:_.email})]}),(0,w.jsxs)(g.__,{children:[(0,w.jsx)(g.II,{onChange:Z,onBlur:C,value:A,id:"password",type:"password",name:"password",placeholder:"Password",disabled:"loading"===e}),(0,w.jsx)(g.CW,{style:{color:_.password&&k.password&&"red"}}),_.password&&k.password&&(0,w.jsx)(g.jj,{children:_.password}),A.length>0&&(0,w.jsx)(w.Fragment,{children:(0,w.jsx)(p.x,{position:"absolute",bottom:"-8px",width:"100%",overflow:"hidden",backgroundColor:"#e5f1e9",height:"4px",borderRadius:"2px",color:"#000",children:(0,w.jsx)(g.Ru,{width:o[0],color:o[1],height:"5px","data-name":"dfd"})})}),A.length>0&&(0,w.jsx)(g.wY,{children:"33%"===o[0]?"weak":"66%"===o[0]?"medium":"strong"})]}),(0,w.jsxs)(g.__,{children:[(0,w.jsx)(g.II,{onChange:Z,onBlur:C,value:B,id:"confirmPassword",type:"password",name:"confirmPassword",placeholder:"Confirm password",disabled:"loading"===e}),(0,w.jsx)(g.CW,{style:{color:_.confirmPassword&&k.confirmPassword&&"red"}}),B.length>0&&(0,w.jsx)(p.x,{position:"absolute",bottom:"-8px",width:"100%",overflow:"hidden",backgroundColor:"#e5f1e9",height:"4px",borderRadius:"2px",children:(0,w.jsx)(p.x,{style:{width:"calc(".concat(B.length,"*(100% / ").concat(A.length,")")},backgroundColor:_.password||_.confirmPassword?"red":"#28ce65",height:"5px"})})]}),(0,w.jsxs)(g.__,{children:[(0,w.jsx)(g.II,{onChange:Z,onBlur:C,value:S,id:"username",type:"text",name:"username",placeholder:"First name",disabled:"loading"===e}),(0,w.jsx)(g.tB,{style:{color:_.username&&k.username&&"red"}}),_.username&&k.username&&(0,w.jsx)(g.jj,{children:_.username})]}),(0,w.jsx)(m.Z,{style:{opacity:v&&.35},type:"submit",content:"Register",hasAccent:!0,disabled:"loading"===e})]}),(0,w.jsx)(d.OL,{to:"/login",children:(0,w.jsx)(m.Z,{type:"button",content:"Log in",disabled:"loading"===e})})]})},b=t(1466),y=t(168),v=t(7691);var _,k,C=t.p+"static/media/register_page.37cba7b2ca11740b4d78005248225d48.svg",Z=v.ZP.main(_||(_=(0,y.Z)(["\n  font-family: ",";\n  font-size: ",";\n  font-weight: ",";\n  line-height: 1.5;\n\n  "," {\n    min-height: 1024px;\n  }\n\n  ",' {\n    min-height: 720px;\n\n    &::after{\n    content: "";\n    position: fixed;\n    top: 0;\n    right: 0;\n\n    width: calc((100vw - 1280px)/2 + 731px);\n    height: 100vh;\n\n    background-color: rgba(255, 255, 255, 0.4);\n    backdrop-filter: blur(25px);\n  }\n  }\n'])),(function(n){return n.theme.fonts.secondary}),(function(n){return n.theme.fontSizes.title}),(function(n){return n.theme.fontWeight.normal}),(function(n){return n.theme.media.tabletFrom}),(function(n){return n.theme.media.desktop})),P=v.ZP.h1(k||(k=(0,y.Z)(["\n  font-family: inherit;\n  font-size: inherit;\n  font-weight: inherit;\n\n  "," {\n    position: absolute;\n    width: 1px;\n    height: 1px;\n    margin: -1px;\n    border: 0;\n    padding: 0;\n\n    white-space: nowrap;\n    clip-path: inset(100%);\n    clip: rect(0 0 0 0);\n    overflow: hidden;\n  }\n\n  "," {\n  margin: 60px 137px 50px 98px;\n\n  min-width: 501px;\n  min-height: 250px;\n\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n\n  background-image: url(",");\n  background-size: 274px 250px;\n  background-repeat: no-repeat;\n}\n\n  "," {\n    margin: 153px 30.9px 77.5px 50px;\n\n    min-width: 452.1px;\n    min-height: 489.5px;\n\n    align-items: flex-end;\n    justify-content: center;\n\n    background-size: 452.1px 412.6px;\n  }\n"])),(function(n){return n.theme.media.mobileAll}),(function(n){return n.theme.media.tabletFrom}),C,(function(n){return n.theme.media.desktop}));var I=(0,b.Z)((function(){var n=(0,r.s0)(),e=(0,i.v9)((function(n){return n.auth.isAuth}));return(0,a.useEffect)((function(){e&&n("/home")}),[e,n]),!e&&(0,w.jsx)(Z,{children:(0,w.jsxs)(o.ER,{children:[(0,w.jsx)(P,{children:"Finance App"}),(0,w.jsx)(j,{})]})})}),"/home")}}]);
//# sourceMappingURL=470.e1667899.chunk.js.map