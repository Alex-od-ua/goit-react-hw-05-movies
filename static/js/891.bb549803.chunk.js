"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[891],{449:function(e,r,t){t.d(r,{Fb:function(){return i},Jh:function(){return p},Pg:function(){return o},yO:function(){return f},z1:function(){return s}});var n=t(861),a=t(757),u=t.n(a),c=t(912).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"5bbf892bcd99762773ec3ce2eced7cd4"}}),s=function(){var e=(0,n.Z)(u().mark((function e(r){var t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/search/movie?",{params:{query:r}});case 2:return t=e.sent,n=t.data,e.abrupt("return",n.results);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),i=function(){var e=(0,n.Z)(u().mark((function e(){var r,t,n,a=arguments;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.length>0&&void 0!==a[0]?a[0]:1,e.next=3,c.get("/trending/all/day?",{params:{page:r}});case 3:return t=e.sent,n=t.data,e.abrupt("return",n.results);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(u().mark((function e(r){var t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/movie/".concat(r,"?"));case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(u().mark((function e(r){var t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/movie/".concat(r,"/credits?"));case 2:return t=e.sent,n=t.data,e.abrupt("return",n.cast);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(u().mark((function e(r){var t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/movie/".concat(r,"//reviews?"));case 2:return t=e.sent,n=t.data,e.abrupt("return",n.results);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()},891:function(e,r,t){t.r(r),t.d(r,{default:function(){return j}});var n=t(861),a=t(439),u=t(757),c=t.n(u),s=t(791),i=t(87),o=t(596),f=(t(462),t(449)),p="MovieSearchForm_form__gjFvT",v="MovieSearchForm_input__3nnbh",h="MovieSearchForm_button__twkeh",l=t(184),m=function(e){var r=e.onSubmit,t=(0,s.useState)(""),n=(0,a.Z)(t,2),u=n[0],c=n[1];return(0,l.jsxs)("form",{className:p,onSubmit:function(e){e.preventDefault(),r(u)},children:[(0,l.jsx)("input",{name:"search",value:u,required:!0,placeholder:"Search movie",className:v,onChange:function(e){return c(e.target.value)}}),(0,l.jsx)("button",{type:"submit",className:h,children:"Search"})]})},d=t(689),x="MovieSearchList_list__+ojvH",b="MovieSearchList_item__zI4VY",_="MovieSearchList_link__Qi2-u",g=function(e){var r=e.movies,t=(0,d.TH)(),n=r.map((function(e){var r=e.title,n=e.id;return(0,l.jsx)("li",{className:b,children:(0,l.jsx)(i.rU,{className:_,state:{from:t},to:"/movies/".concat(n),children:r})},n)}));return(0,l.jsx)("ul",{className:x,children:n})},w=t(447),k=function(){var e=(0,s.useState)(""),r=(0,a.Z)(e,2),t=r[0],u=r[1],p=(0,s.useState)(!1),v=(0,a.Z)(p,2),h=v[0],d=v[1],x=(0,s.useState)(null),b=(0,a.Z)(x,2),_=b[0],k=b[1],j=(0,i.lr)(),S=(0,a.Z)(j,2),Z=S[0],y=S[1],F=Z.get("search");(0,s.useEffect)((function(){var e=function(){var e=(0,n.Z)(c().mark((function e(){var r,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(F){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,d(!0),e.next=6,(0,f.z1)(F);case 6:r=e.sent,u(r),e.next=16;break;case 10:e.prev=10,e.t0=e.catch(2),t=e.t0.response,k(t.data.message),console.log(t.data.message),o.Am.error("".concat(t.data.message));case 16:return e.prev=16,d(!1),e.finish(16);case 19:case"end":return e.stop()}}),e,null,[[2,10,16,19]])})));return function(){return e.apply(this,arguments)}}();e()}),[F]);return(0,l.jsxs)(l.Fragment,{children:[h&&(0,l.jsx)(w.Z,{}),_&&(0,l.jsx)("h1",{children:"error"}),(0,l.jsx)(m,{onSubmit:function(e){y({search:e})}}),t&&(0,l.jsx)(g,{movies:t}),(0,l.jsx)(o.Ix,{})]})},j=function(){return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(k,{})})}}}]);
//# sourceMappingURL=891.bb549803.chunk.js.map