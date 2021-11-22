(this.webpackJsonpnew=this.webpackJsonpnew||[]).push([[0],{28:function(e,t,c){},41:function(e,t,c){},42:function(e,t,c){},51:function(e,t,c){},52:function(e,t,c){},53:function(e,t,c){},69:function(e,t,c){},70:function(e,t,c){},71:function(e,t,c){},74:function(e,t,c){},75:function(e,t,c){},76:function(e,t,c){},77:function(e,t,c){},78:function(e,t,c){"use strict";c.r(t);var s=c(1),i=c(19),n=c.n(i),a=c(3),l=(c(41),c(4)),o=(c(42),c(0));function r(e){e.history;return Object(o.jsxs)("div",{className:"intro",children:[Object(o.jsx)("div",{className:"top",children:Object(o.jsxs)("div",{className:"wrapper",children:[Object(o.jsx)(a.b,{to:"/React-Netflix",children:Object(o.jsx)("img",{className:"logo",src:"https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",alt:"logo"})}),Object(o.jsx)(a.b,{to:"/React-Netflix/Login",children:Object(o.jsx)("button",{className:"loginButton",children:"Sign In"})})]})}),Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("h1",{children:"Unlimited movies, TV shows, and more."}),Object(o.jsx)("h2",{children:"Watch anywhere. Cancel anytime."}),Object(o.jsx)("p",{children:"Ready to watch? Enter your email to create or restart your membership. Or just look around."}),Object(o.jsxs)("div",{className:"buttons",children:[Object(o.jsx)(a.b,{to:"/React-Netflix/register",children:Object(o.jsx)("button",{children:"Register"})}),Object(o.jsx)(a.b,{to:"/React-Netflix/home",children:Object(o.jsx)("button",{children:"Ready to Watch"})})]})]})]})}var j=c(5),d="https://api.themoviedb.org/3/",b="http://image.tmdb.org/t/p/",O="a6c74ba86064a0231a49431cda85cafe",m=c(91),x=c(96),h=c(90),u=c(92),p=c(93),v=c(94),f=c(95),N=(c(51),function(e){var t=e.modalClose,c=e.movieId,n=Object(s.useState)([]),l=Object(j.a)(n,2),r=l[0],x=l[1];return Object(s.useEffect)((function(){var e="".concat(d,"movie/").concat(c,"?api_key=").concat(O);fetch(e).then((function(e){return e.json()})).then((function(e){console.log(e),x(e)}))}),[]),Object(i.createPortal)(Object(o.jsx)("div",{className:"modal_container",onClick:function(e){console.log("e.target: ",e.target),console.log("e.targetcurrentTarget: ",e.currentTarget),e.target===e.currentTarget&&t()},children:Object(o.jsxs)("div",{className:"itemModal",children:[Object(o.jsx)("div",{className:"back",children:Object(o.jsx)(h.a,{onClick:t,className:"modal_button"})}),Object(o.jsxs)("div",{className:"itemImg",children:[r.backdrop_path&&Object(o.jsx)("img",{src:"".concat(b,"w1280/").concat(r.backdrop_path),alt:r.title}),Object(o.jsx)("div",{className:"itemText",children:Object(o.jsx)("h1",{children:r.original_title})})]}),Object(o.jsxs)("div",{className:"itemInfo",children:[Object(o.jsxs)("div",{className:"icons",children:[Object(o.jsx)(a.b,{to:"/React-Netflix/watch/".concat(c),className:"playBtn",onClick:t,children:Object(o.jsx)("button",{children:Object(o.jsx)(m.a,{})})}),Object(o.jsx)(u.a,{className:"icon"}),Object(o.jsx)(p.a,{className:"icon"}),Object(o.jsx)(v.a,{className:"icon"})]}),Object(o.jsxs)("div",{className:"itemInfoTop",children:[Object(o.jsxs)("span",{children:[r.runtime,"min."]}),Object(o.jsxs)("span",{className:"limit",children:[Object(o.jsx)(f.a,{className:"icon"})," ",r.vote_average]}),Object(o.jsx)("span",{children:r.release_date})]}),Object(o.jsx)("div",{className:"genre",children:"genre"}),Object(o.jsx)("p",{className:"desc",children:r.overview})]})]})}),document.getElementById("modal"))});var g=function(e){var t=Object(s.useState)(!1),c=Object(j.a)(t,2),i=c[0],n=c[1],l=function(){n(!i),document.body.style.overflow=i?"unset":"hidden"};return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("img",{src:e.image,alt:e.title}),Object(o.jsxs)("div",{className:"info",children:[Object(o.jsx)("h1",{children:e.title}),Object(o.jsx)("span",{className:"desc",children:e.desc}),Object(o.jsxs)("div",{className:"buttons",children:[Object(o.jsx)("button",{className:"play",children:Object(o.jsxs)(a.b,{to:"/React-Netflix/watch/".concat(e.movieId),children:[Object(o.jsx)(m.a,{}),Object(o.jsx)("span",{children:"Play"})]})}),Object(o.jsxs)("button",{className:"more",onClick:l,children:[Object(o.jsx)(x.a,{}),Object(o.jsx)("span",{children:"Info"})]})]})]}),i&&Object(o.jsx)(N,{movieId:e.movieId,modalClose:l})]})};c(52);var w=Object(l.e)((function(e){var t=Object(s.useState)([]),c=Object(j.a)(t,2),i=(c[0],c[1]),n=Object(s.useState)(null),a=Object(j.a)(n,2),l=a[0],r=a[1];return Object(s.useEffect)((function(){var e="".concat(d,"movie/popular?api_key=").concat(O,"&language=en-US&page=1");fetch(e).then((function(e){return e.json()})).then((function(e){i([e.results]),r(l||e.results[0])}))}),[]),Object(o.jsx)("div",{className:"featured",children:l&&Object(o.jsx)(g,{image:"".concat(b,"w1280/").concat(l.backdrop_path),title:l.original_title,desc:l.overview,movieId:l.id})})})),y=c(34);c(28),c(53);function k(e){var t=Object(s.useState)(!1),c=Object(j.a)(t,2),i=c[0],n=c[1],a=function(){n(!i),document.body.style.overflow=i?"unset":"hidden"};return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:"listItem",onClick:a,children:[Object(o.jsx)("span",{className:"ranking",children:e.idx+1}),Object(o.jsx)("img",{src:e.image,alt:e.title})]}),Object(o.jsx)(o.Fragment,{children:i&&Object(o.jsx)(N,{movieId:e.movieId,modalClose:a})})]})}var S=c(27),R=c(30),I=c(31),_=c(35),C=c(33),T=c(97),A=c(98),E=c(32),P=c.n(E);c(69),c(70);function B(e){var t=e.className,c=e.onClick;return Object(o.jsx)("div",{className:t,onClick:c,children:Object(o.jsx)(T.a,{className:"SlickArrow"})})}function F(e){var t=e.className,c=e.onClick;return Object(o.jsx)("div",{className:t,onClick:c,children:Object(o.jsx)(A.a,{className:"SlickArrow"})})}var L=function(e){Object(_.a)(c,e);var t=Object(C.a)(c);function c(){return Object(R.a)(this,c),t.apply(this,arguments)}return Object(I.a)(c,[{key:"render",value:function(){var e=this.props.children,t={infinite:!1,slidesToShow:6,slidesToScroll:1,swipe:!1,initialSlide:0,lazyload:!0,nextArrow:Object(o.jsx)(B,{}),prevArrow:Object(o.jsx)(F,{}),responsive:[{breakpoint:1400,settings:{slidesToShow:5,infinite:!1,slidesToScroll:1,swipe:!1,initialSlide:0,lazyload:!0,nextArrow:Object(o.jsx)(B,{}),prevArrow:Object(o.jsx)(F,{})}},{breakpoint:1200,settings:{slidesToShow:4,infinite:!1,slidesToScroll:1,swipe:!1,initialSlide:0,lazyload:!0,nextArrow:Object(o.jsx)(B,{}),prevArrow:Object(o.jsx)(F,{})}},{breakpoint:940,settings:{slidesToShow:3,infinite:!1,slidesToScroll:1,swipe:!1,initialSlide:0,lazyload:!0,nextArrow:Object(o.jsx)(B,{}),prevArrow:Object(o.jsx)(F,{})}},{breakpoint:758,settings:{slidesToShow:2,slidesToScroll:2,swipe:!0,arrows:!1,initialSlide:0,infinite:!1,lazyload:!0}}]};return Object(o.jsx)(P.a,Object(S.a)(Object(S.a)({},t),{},{children:e}))}}]),c}(s.Component),z=L;var M=Object(l.e)((function(e){var t=Object(s.useState)([]),c=Object(j.a)(t,2),i=c[0],n=c[1];Object(s.useEffect)((function(){var e="".concat(d,"movie/popular?api_key=").concat(O,"&language=en-US&page=1");fetch(e).then((function(e){return e.json()})).then((function(e){console.log(e.results),n(Object(y.a)(e.results))}))}),[]);var a=i.map((function(e,t){return Object(o.jsx)(k,{idx:t,image:e.poster_path?"".concat(b,"w500/").concat(e.poster_path):null,movieId:e.id,title:e.original_title},t)}));return Object(o.jsxs)("div",{className:"list",children:[Object(o.jsx)("span",{className:"listTitle",children:e.title}),Object(o.jsx)(z,{children:a})]})})),H=(c(71),c(99)),K=c(100),U=c(101),V=c(102),G=c(26),W=function(){var e=Object(s.useState)(!1),t=Object(j.a)(e,2),c=t[0],i=t[1];window.onscroll=function(){return i(0!==window.pageYOffset),function(){window.onscroll=null}};var n=Object(s.useState)(!1),l=Object(j.a)(n,2),r=l[0],d=l[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(G.BrowserView,{children:Object(o.jsx)("div",{className:c?"navbar scrolled":"navbar",children:Object(o.jsxs)("div",{className:"container",children:[Object(o.jsxs)("div",{className:"left",children:[Object(o.jsx)(a.b,{to:"/React-Netflix/list",children:Object(o.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",alt:"logo"})}),Object(o.jsx)("span",{children:"Homepage"}),Object(o.jsx)("span",{children:"Series"}),Object(o.jsx)("span",{children:"Movies"}),Object(o.jsx)("span",{children:"New and Popular"})]}),Object(o.jsxs)("div",{className:"right",children:[Object(o.jsx)(H.a,{className:"icon"}),Object(o.jsx)("span",{children:"KID"}),Object(o.jsx)(K.a,{className:"icon"}),Object(o.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png",alt:"profile"}),Object(o.jsxs)("div",{className:"profile",children:[Object(o.jsx)(U.a,{className:"icon"}),Object(o.jsxs)("div",{className:"options",children:[Object(o.jsx)(a.b,{to:"/React-Netflix/register",children:Object(o.jsx)("span",{children:"Register"})}),Object(o.jsx)(a.b,{to:"/React-Netflix/login",children:Object(o.jsx)("span",{children:"Login"})})]})]})]})]})})}),Object(o.jsx)(G.MobileView,{children:Object(o.jsxs)("div",{className:c?"navbar-mobile scrolled":"navbar-mobile",children:[Object(o.jsxs)("div",{className:"top",children:[Object(o.jsxs)("div",{className:"left",children:[Object(o.jsx)("div",{className:"menuIcon",onClick:function(){d(!r),document.body.style.overflow=r?"unset":"hidden"},children:r?Object(o.jsx)(h.a,{className:"icon"}):Object(o.jsx)(V.a,{className:"icon"})}),Object(o.jsx)(a.b,{to:"/React-Netflix/list",children:Object(o.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",alt:"logo"})})]}),Object(o.jsxs)("div",{className:"right",children:[Object(o.jsx)(H.a,{className:"icon"}),Object(o.jsx)(K.a,{className:"icon"})]})]}),Object(o.jsxs)("div",{className:r?"navPanel active":"navPanel",children:[Object(o.jsxs)("div",{className:"profile",children:[Object(o.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png",alt:"profile"}),Object(o.jsxs)("div",{className:"options",children:[Object(o.jsx)("p",{children:"Guest"}),Object(o.jsx)(a.b,{to:"/React-Netflix/register",children:Object(o.jsx)("span",{children:"Register"})}),Object(o.jsx)(a.b,{to:"/React-Netflix/login",children:Object(o.jsx)("span",{children:"Login"})})]})]}),Object(o.jsx)("div",{className:"menu",children:Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:"Homepage"}),Object(o.jsx)("li",{children:"Series"}),Object(o.jsx)("li",{children:"Movies"}),Object(o.jsx)("li",{children:"New and Popular"}),Object(o.jsx)("li",{children:"My List"})]})}),Object(o.jsx)("div",{className:"etc",children:Object(o.jsx)("span",{children:"KID"})})]})]})})]})},D=(c(74),function(){return Object(o.jsxs)("div",{className:"home",children:[Object(o.jsx)(W,{}),Object(o.jsx)(w,{}),Object(o.jsx)(M,{title:"Popular movies"})]})});c(75);function J(){return Object(o.jsxs)("div",{className:"login",children:[Object(o.jsx)("div",{className:"top",children:Object(o.jsx)("div",{className:"wrapper",children:Object(o.jsx)(a.b,{to:"/React-Netflix",children:Object(o.jsx)("img",{className:"logo",src:"https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",alt:"logo"})})})}),Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:"form",children:[Object(o.jsx)("h1",{children:"Sign In"}),Object(o.jsx)("input",{type:"email",placeholder:"Email or phone number"}),Object(o.jsx)("input",{type:"password",placeholder:"Password"}),Object(o.jsx)("button",{className:"loginButton",children:"Sign In"}),Object(o.jsxs)("span",{children:["New to Netflix? ",Object(o.jsx)("b",{children:"Sign up now"})]}),Object(o.jsxs)("small",{children:["This page is protected by Google reCAPTCHA to ensure you're not a bot. ",Object(o.jsx)("b",{children:"Learn more"})]})]})})]})}c(76);function Y(e){var t=e.history,c=Object(s.useState)(""),i=Object(j.a)(c,2),n=i[0],l=i[1],r=Object(s.useState)(""),d=Object(j.a)(r,2),b=(d[0],d[1]),O=Object(s.useRef)(),m=Object(s.useRef)(),x=function(){l(O.current.value)},h=function(){b(m.current.value),t.push("/React-Netflix/home")};return Object(o.jsxs)("div",{className:"register",children:[Object(o.jsx)("div",{className:"top",children:Object(o.jsxs)("div",{className:"wrapper",children:[Object(o.jsx)(a.b,{to:"/React-Netflix",children:Object(o.jsx)("img",{className:"logo",src:"https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",alt:"logo"})}),Object(o.jsx)(a.b,{to:"/React-Netflix/Login",children:Object(o.jsx)("button",{className:"loginButton",children:"Sign In"})})]})}),Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("h1",{children:"Unlimited movies, TV shows, and more."}),Object(o.jsx)("h2",{children:"Watch anywhere. Cancel anytime."}),Object(o.jsx)("p",{children:"Ready to watch? Enter your email to create or restart your membership."}),n?Object(o.jsxs)("div",{className:"input",children:[Object(o.jsx)("input",{type:"password",placeholder:"password",ref:m,onKeyPress:function(e){"Enter"===e.key&&h()},autoFocus:!0}),Object(o.jsx)("button",{className:"registerButton",onClick:h,children:"Start"})]}):Object(o.jsxs)("div",{className:"input",children:[Object(o.jsx)("input",{type:"email",placeholder:"email address",ref:O,onKeyPress:function(e){"Enter"===e.key&&x()},autoFocus:!0}),Object(o.jsx)("button",{className:"registerButton",onClick:x,children:"Get Started"})]})]})]})}var q=c(103),Q=(c(77),function(e){var t=e.embedId,c=e.name;return Object(o.jsx)("div",{className:"video",children:Object(o.jsx)("iframe",{width:"100%",height:"100%",src:"https://www.youtube.com/embed/".concat(t,"?autoplay=1&modestbranding=1"),frameBorder:"0",allow:"accelerometer; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,title:c})})});function X(e){var t=e.match.params.movieId,c=Object(s.useState)([]),i=Object(j.a)(c,2),n=i[0],l=i[1],r=Object(s.useState)(""),b=Object(j.a)(r,2),m=b[0],x=b[1],h=Object(s.useState)(""),u=Object(j.a)(h,2),p=u[0],v=u[1];return Object(s.useEffect)((function(){var e="".concat(d,"movie/").concat(t,"/videos?api_key=").concat(O);fetch(e).then((function(e){return e.json()})).then((function(e){l(e.results),x(e.results[0].key),v(e.results[0].name)}))}),[]),Object(o.jsxs)("div",{className:"watch",children:[Object(o.jsx)("div",{className:"back",children:Object(o.jsxs)(a.b,{to:"/React-Netflix/home",children:[Object(o.jsx)(q.a,{}),"Home"]})}),n&&Object(o.jsx)(Q,{embedId:m,name:p})]})}var Z=Object(l.e)((function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(l.a,{path:"/React-Netflix/",exact:!0,component:r}),Object(o.jsx)(l.a,{path:"/React-Netflix/register",component:Y}),Object(o.jsx)(l.a,{path:"/React-Netflix/login",component:J}),Object(o.jsx)(l.a,{path:"/React-Netflix/home",component:D}),Object(o.jsx)(l.a,{path:"/React-Netflix/watch/:movieId",component:X})]})}));n.a.render(Object(o.jsx)(a.a,{children:Object(o.jsx)(Z,{})}),document.getElementById("root"))}},[[78,1,2]]]);
//# sourceMappingURL=main.1b581b6b.chunk.js.map