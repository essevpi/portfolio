(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8581:function(e,n,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i(7674)}])},7674:function(e,n,i){"use strict";i.r(n),i.d(n,{default:function(){return G}});var a=i(5893),t=i(7294),o=i(9008),c=i(1664),s=i(5675),r=i(8366),_=i.n(r),l=[{name:"GitHub",iconPath:"/icons/github.svg",url:"https://github.com/essevpi"},{name:"LinkedIn",iconPath:"/icons/linkedin.svg",url:"/"}],d=function(){return(0,a.jsxs)("footer",{className:_().footer__container,children:[(0,a.jsx)("div",{className:_().footer__heading,children:"Made with \ud83d\udc9c by me myself and I"}),(0,a.jsx)("div",{className:_()["footer__social-wrapper"],children:l.map((function(e,n){return(0,a.jsx)("div",{className:_()["footer__social-item"],children:(0,a.jsx)(c.default,{href:e.url,passHref:!0,children:(0,a.jsx)("a",{children:(0,a.jsx)(s.default,{src:e.iconPath,alt:e.name,height:32,width:32})})})},n)}))})]})},m=i(1190),h=i(6580),p=i(1649),u=i(6533),f=i.n(u),v=[{name:"About",path:"about"},{name:"Skills",path:"skills"},{name:"Contact",path:"contact"}],x={closed:{width:0},open:{width:"55%",transition:{duration:.3,ease:"easeOut"}},close:{width:0,opacity:0,transition:{duration:.3,ease:"easeOut"}}},j=function(){var e=(0,t.useState)(!1),n=e[0],i=e[1];return(0,a.jsx)("nav",{className:f().navbar__container,children:(0,a.jsxs)("div",{className:f().navbar__wrapper,children:[(0,a.jsx)(c.default,{href:"/",children:(0,a.jsx)("a",{className:f().navbar__logo,children:"essevpi"})}),(0,a.jsx)("ul",{className:f().navbar__links,children:v.map((function(e){return(0,a.jsx)("li",{children:(0,a.jsx)(c.default,{href:"/#".concat(e.path),children:e.name})},"link-".concat(e.path))}))}),(0,a.jsxs)("div",{className:f().navbar__menu,children:[(0,a.jsx)(p.tgG,{onClick:function(){return i(!0)}}),(0,a.jsx)(m.M,{children:n&&(0,a.jsxs)(h.E.div,{variants:x,initial:"closed",animate:"open",exit:"close",children:[(0,a.jsx)(p.QAE,{onClick:function(){return i(!1)}}),(0,a.jsx)("ul",{className:f().navbar__links,children:v.map((function(e){return(0,a.jsx)("li",{children:(0,a.jsx)(c.default,{href:"#".concat(e.path),children:(0,a.jsx)("a",{onClick:function(){return i(!1)},children:e.name})})},"link-".concat(e.path))}))})]})})]})]})})},g=i(1340),b=i.n(g),k=function(){return(0,a.jsxs)("div",{className:"".concat(b().section__container," app__flex app__fullscreen"),id:"about",children:[(0,a.jsx)("div",{className:b()["section__divider-top"],children:(0,a.jsx)(s.default,{src:"/images/hero_divider-top.svg",alt:"hero-divider-top",layout:"fill"})}),(0,a.jsxs)(h.E.div,{className:"app__section",initial:{y:"50%",opacity:0},whileInView:{y:0,opacity:1},transition:{type:"spring",bounce:.5,duration:1},viewport:{once:!1,amount:.8},children:[(0,a.jsx)("h1",{children:"Hello there, I'm Simone!"}),(0,a.jsx)("h2",{children:"This is a h2 tag"}),(0,a.jsx)("p",{children:"This will be a long description \ud83d\ude80"}),(0,a.jsx)("a",{children:"Test link to check clamp"})]}),(0,a.jsx)("div",{className:b()["section__divider-bottom"],children:(0,a.jsx)(s.default,{src:"/images/hero_divider-bottom.svg",alt:"hero-divider-bottom",layout:"fill"})})]})},N=i(8895),w=i.n(N),P=i(9554),S=i.n(P);function y(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}var C=function(){var e=(0,t.useState)({name:"",email:"",message:""}),n=e[0],i=e[1],o=function(e){i(function(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{},a=Object.keys(i);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(i).filter((function(e){return Object.getOwnPropertyDescriptor(i,e).enumerable})))),a.forEach((function(n){y(e,n,i[n])}))}return e}({},n,y({},e.target.name,e.target.value)))};return(0,a.jsx)("div",{children:(0,a.jsxs)("form",{className:S()["contact-form__form"],onSubmit:function(e){e.preventDefault(),""===n.user||""===n.email||""===n.message?alert("All fields are required"):alert("Data: ".concat(n.name,", ").concat(n.email,", ").concat(n.message))},children:[(0,a.jsx)("h2",{children:"Let's get in touch"}),(0,a.jsx)("p",{children:"Reach me at my LinkedIn or feel free to use the form below."}),(0,a.jsxs)("div",{className:S()["contact-form-field__wrapper"],children:[(0,a.jsx)("label",{className:S()["contact-form__label"],children:"Name"}),(0,a.jsx)("input",{className:S()["contact-form__input"],type:"text",value:n.user,name:"name",placeholder:"Name",onChange:o,required:!0})]}),(0,a.jsxs)("div",{className:S()["contact-form-field__wrapper"],children:[(0,a.jsx)("label",{className:S()["contact-form__label"],children:"Email"}),(0,a.jsx)("input",{className:S()["contact-form__input"],type:"email",value:n.email,name:"email",placeholder:"Email",onChange:o})]}),(0,a.jsxs)("div",{className:S()["contact-form-field__wrapper"],children:[(0,a.jsx)("label",{className:S()["contact-form__label"],children:"Message"}),(0,a.jsx)("textarea",{className:S()["contact-form__input"],value:n.message,name:"message",placeholder:"Message",onChange:o})]}),(0,a.jsx)("input",{className:S()["contact-form__btn"],type:"submit",value:"Send",disabled:!0})]})})},I=function(){return(0,a.jsxs)("div",{className:"".concat(w().section__container," app__flex app__fullscreen"),id:"contact",children:[(0,a.jsx)("div",{className:w()["section__divider-top"],children:(0,a.jsx)(s.default,{src:"/images/projects_divider-top.svg",alt:"projects-divider-top",layout:"fill"})}),(0,a.jsx)("div",{className:"".concat(w()["section__contact-container"]," app__section"),children:(0,a.jsx)(C,{})})]})},E=i(3065),O=i.n(E),H=i(5318),F=i.n(H),L=function(e){var n=e.name,i=e.iconPath,t=e.iconSize;return(0,a.jsxs)(h.E.div,{whileHover:{scale:1.25,transition:{duration:.25,ease:"easeInOut"}},className:F()["skills__container-item"],children:[(0,a.jsx)(s.default,{src:i,alt:n,height:t,width:t}),(0,a.jsx)("span",{className:F()["skills__item-title"],children:n})]})},T=function(e){var n=e.cards,i=e.title,t=e.description,o=e.iconSize;return(0,a.jsxs)("div",{className:F().skills__container,children:[(0,a.jsxs)("div",{className:F()["skills__container-header"],children:[(0,a.jsx)("h2",{children:i}),(0,a.jsx)("p",{children:t})]}),(0,a.jsx)("div",{className:F()["skills__container-wrapper"],children:n.map((function(e,n){return(0,a.jsx)(L,{name:e.name,iconPath:e.iconPath,iconSize:o},n)}))})]})},R={heading:{title:"Skills & Tools",description:"Here's a list of the main technologies and tools I worked with so far."},items:[{name:"HTML 5",iconPath:"/icons/html5.svg"},{name:"CSS 3",iconPath:"/icons/css3.svg"},{name:"JavaScript",iconPath:"/icons/javascript.svg"},{name:"React",iconPath:"/icons/react.svg"},{name:"SASS",iconPath:"/icons/sass.svg"},{name:"Redux",iconPath:"/icons/redux.svg"},{name:"NodeJS",iconPath:"/icons/nodejs.svg"},{name:"Express",iconPath:"/icons/express.svg"},{name:"MongoDB",iconPath:"/icons/mongodb.svg"},{name:"GraphQL",iconPath:"/icons/graphql.svg"},{name:"Jest",iconPath:"/icons/jest.svg"},{name:"NPM",iconPath:"/icons/npm.svg"},{name:"VS Code",iconPath:"/icons/vscode.svg"},{name:"NextJS",iconPath:"/icons/nextjs.svg"},{name:"GIT",iconPath:"/icons/git.svg"},{name:"Webpack",iconPath:"/icons/webpack.svg"}]},M={heading:{title:"Other things I plan to learn",description:"Here are some of the technologies I plan to learn or I'm already working with"},items:[{name:"TypeScript",iconPath:"/icons/typescript.svg"},{name:"React Native",iconPath:"/icons/react.svg"},{name:"Tailwind",iconPath:"/icons/tailwind.svg"},{name:"CI/CD",iconPath:"/icons/cicd.svg"}]},V=function(){var e=(0,t.useState)(),n=(e[0],e[1]);(0,t.useEffect)((function(){window.innerWidth<900?n(!0):n(!1)}),[]);var i={offscreen:{y:"50%",opacity:0},onscreen:{y:0,opacity:1,transition:{type:"spring",bounce:.5,duration:1.2}}};return(0,a.jsx)("div",{className:"".concat(O().section__container," app__flex app__fullscreen"),id:"skills",children:(0,a.jsxs)("div",{className:"app__section",children:[(0,a.jsx)(h.E.div,{className:O().skills__container,variants:i,initial:"offscreen",whileInView:"onscreen",viewport:{once:!0},children:(0,a.jsx)(T,{cards:R.items,title:R.heading.title,description:R.heading.description,iconSize:48})}),(0,a.jsx)(h.E.div,{className:O().skills__container,variants:i,initial:"offscreen",whileInView:"onscreen",viewport:{once:!0},children:(0,a.jsx)(T,{cards:M.items,title:M.heading.title,description:M.heading.description,iconSize:48})})]})})},z=i(8700),A=i.n(z);function G(){return(0,a.jsxs)("div",{className:A().app,children:[(0,a.jsxs)(o.default,{children:[(0,a.jsx)("title",{children:"essevpi"}),(0,a.jsx)("meta",{name:"description",content:"Homepage"}),(0,a.jsx)("link",{rel:"icon",href:"".concat("".concat("/portfolio","/favicon.ico"))})]}),(0,a.jsx)(j,{}),(0,a.jsx)(k,{}),(0,a.jsx)(V,{}),(0,a.jsx)(I,{}),(0,a.jsx)(d,{})]})}},5318:function(e){e.exports={card__container:"SkillList_card__container__IVijR",card__item:"SkillList_card__item__9foBr","skills__container-header":"SkillList_skills__container-header__I_FT2","skills__container-wrapper":"SkillList_skills__container-wrapper__GcLIV","skills__container-item":"SkillList_skills__container-item__n4wKh"}},9554:function(e){e.exports={"contact-form__form":"ContactForm_contact-form__form__RMvff","contact-form__btn":"ContactForm_contact-form__btn__EBNb5","contact-form-field__wrapper":"ContactForm_contact-form-field__wrapper__LRtzj","contact-form__input":"ContactForm_contact-form__input__Yh1e5","contact-form__input-valid":"ContactForm_contact-form__input-valid__gW_or","contact-form__input-invalid":"ContactForm_contact-form__input-invalid__uQoKx","contact-form__label":"ContactForm_contact-form__label__M6gk9"}},8366:function(e){e.exports={footer__container:"Footer_footer__container___GQrb",footer__heading:"Footer_footer__heading__IcX6x","footer__social-wrapper":"Footer_footer__social-wrapper__nwGb_","footer__social-item":"Footer_footer__social-item__gAHOB"}},6533:function(e){e.exports={navbar__container:"Navbar_navbar__container__VytxH",navbar__wrapper:"Navbar_navbar__wrapper__H8cWk",navbar__logo:"Navbar_navbar__logo__a00xQ",navbar__links:"Navbar_navbar__links__YAPIm","navbar__cta-button":"Navbar_navbar__cta-button__NNWbo",navbar__menu:"Navbar_navbar__menu__JHivR"}},8700:function(e){e.exports={app:"App_app__PJvd0"}},8895:function(e){e.exports={section__container:"Contact_section__container__da4eQ","section__divider-top":"Contact_section__divider-top__3IgkV","section__contact-container":"Contact_section__contact-container__Yxqk3"}},1340:function(e){e.exports={section__container:"Hero_section__container__lDjkc","section__divider-top":"Hero_section__divider-top__othyt","section__divider-bottom":"Hero_section__divider-bottom__hy2_c"}},3065:function(e){e.exports={section__container:"Skills_section__container__r8COT","skills__container-header":"Skills_skills__container-header__heIiu","skills__container-wrapper":"Skills_skills__container-wrapper__Ra9lK","skills__container-item":"Skills_skills__container-item__PkWzU","color-change":"Skills_color-change__F6j6R"}}},function(e){e.O(0,[866,161,774,888,179],(function(){return n=8581,e(e.s=n);var n}));var n=e.O();_N_E=n}]);