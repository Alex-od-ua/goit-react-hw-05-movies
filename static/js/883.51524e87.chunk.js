"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[883],{449:function(e,r,n){n.d(r,{Fb:function(){return i},Jh:function(){return f},Pg:function(){return o},yO:function(){return p},z1:function(){return u}});var t=n(861),a=n(757),s=n.n(a),c=n(912).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"5bbf892bcd99762773ec3ce2eced7cd4"}}),u=function(){var e=(0,t.Z)(s().mark((function e(r){var n,t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/search/movie?",{params:{query:r}});case 2:return n=e.sent,t=n.data,e.abrupt("return",t.results);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),i=function(){var e=(0,t.Z)(s().mark((function e(){var r,n,t,a=arguments;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.length>0&&void 0!==a[0]?a[0]:1,e.next=3,c.get("/trending/all/day?",{params:{page:r}});case 3:return n=e.sent,t=n.data,e.abrupt("return",t.results);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,t.Z)(s().mark((function e(r){var n,t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/movie/".concat(r,"?"));case 2:return n=e.sent,t=n.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=(0,t.Z)(s().mark((function e(r){var n,t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/movie/".concat(r,"/credits?"));case 2:return n=e.sent,t=n.data,e.abrupt("return",t.cast);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),f=function(){var e=(0,t.Z)(s().mark((function e(r){var n,t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/movie/".concat(r,"//reviews?"));case 2:return n=e.sent,t=n.data,e.abrupt("return",t.results);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()},883:function(e,r,n){n.r(r),n.d(r,{default:function(){return _}});var t=n(861),a=n(439),s=n(757),c=n.n(s),u=n(791),i=n(596),o=(n(462),n(87)),p=n(689),f="TrendingMovies_list__RbZcl",v="TrendingMovies_item__oTryW",d="TrendingMovies_link__Kn992",l="TrendingMovies_header__RkR5o",m=n(184),h=function(e){var r=e.movies,n=(0,p.TH)(),t=r.map((function(e){var r=e.id,t=e.title,a=e.name;return(0,m.jsx)(o.rU,{className:d,to:"/movies/".concat(r),state:{from:n},children:(0,m.jsx)("li",{className:v,children:t||a})},r)}));return(0,m.jsx)("ul",{className:f,children:t})},x=n(449),g=n(447),w=function(){var e=(0,u.useState)([]),r=(0,a.Z)(e,2),n=r[0],s=r[1],o=(0,u.useState)(!1),p=(0,a.Z)(o,2),f=p[0],v=p[1],d=(0,u.useState)(null),w=(0,a.Z)(d,2),_=w[0],b=w[1];return(0,u.useEffect)((function(){var e=function(){var e=(0,t.Z)(c().mark((function e(){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,v(!0),e.next=4,(0,x.Fb)();case 4:r=e.sent,s(r),e.next=13;break;case 8:e.prev=8,e.t0=e.catch(0),n=e.t0.response,b(n.data.mesage),(0,i.Am)("".concat(n.data.mesage));case 13:return e.prev=13,v(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[0,8,13,16]])})));return function(){return e.apply(this,arguments)}}();e()}),[s]),(0,m.jsxs)("div",{children:[(0,m.jsx)("h1",{className:l,children:"Trending today"}),_&&(0,m.jsx)("p",{className:"",children:_}),f&&(0,m.jsx)(g.Z,{}),n&&(0,m.jsx)(h,{movies:n}),_&&(0,m.jsx)(i.Ix,{})]})},_=function(){return(0,m.jsx)(m.Fragment,{children:(0,m.jsx)(w,{})})}}}]);
//# sourceMappingURL=883.51524e87.chunk.js.map