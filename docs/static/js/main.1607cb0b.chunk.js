(this["webpackJsonpgift-expert-app"]=this["webpackJsonpgift-expert-app"]||[]).push([[0],{17:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n(7),r=n.n(c),i=n(2),s=n(9),o=n(0),u=function(t){var e=t.setCategories,n=Object(a.useState)(""),c=Object(i.a)(n,2),r=c[0],u=c[1];return Object(o.jsx)("form",{onSubmit:function(t){t.preventDefault(),r.trim().length>2&&(e((function(t){return[r].concat(Object(s.a)(t))})),u(""))},children:Object(o.jsx)("input",{onChange:function(t){u(t.target.value)},type:"text",value:r})})},j=n(10),d=n(6),l=n.n(d),m=n(8),f=function(){var t=Object(m.a)(l.a.mark((function t(e){var n,a,c,r,i;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(e),"&limit=12&api_key=zoPqydGyVGGouAnSzZyy9d6uvYvTHPcf"),t.next=3,fetch(n);case 3:return a=t.sent,t.next=6,a.json();case 6:return c=t.sent,r=c.data,i=r.map((function(t){var e;return{id:t.id,title:t.title,imageUrl:null===(e=t.images)||void 0===e?void 0:e.downsized_medium.url}})),t.abrupt("return",i);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),b=function(t){t.id;var e=t.title,n=t.imageUrl;return Object(o.jsxs)("div",{className:"card animate__animated animate__backInDown",children:[Object(o.jsx)("img",{alt:e,src:n}),e.trim().length>40?Object(o.jsx)("p",{children:"Too much text..."}):Object(o.jsx)("p",{children:e})]})},p=function(t){var e=t.category,n=function(t){var e=Object(a.useState)({data:[],loading:!0}),n=Object(i.a)(e,2),c=n[0],r=n[1];return Object(a.useEffect)((function(){f(t).then((function(t){setTimeout((function(){console.log(t),r({data:t,loading:!1})}),2100)}))}),[t]),c}(e),c=n.data,r=n.loading;return console.log(r),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("h3",{className:"animate__animated animate__backInDown",children:[" ",e," "]}),r&&Object(o.jsxs)("p",{className:"loadingText animate__animated animate__flash",children:["Looking for 12 Gifs of: ",e.trim()]}),Object(o.jsx)("div",{className:"card-grid",children:c.map((function(t){return Object(o.jsx)(b,Object(j.a)({img:t},t),t.id)}))})]})},h=function(){var t=Object(a.useState)(["Rick And Morty"]),e=Object(i.a)(t,2),n=e[0],c=e[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h3",{children:"Gif Expert App"}),Object(o.jsx)(u,{setCategories:c}),Object(o.jsx)("hr",{}),Object(o.jsx)("ol",{children:n.map((function(t){return Object(o.jsx)(p,{category:t},t)}))})]})};n(17);r.a.render(Object(o.jsx)(h,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.1607cb0b.chunk.js.map