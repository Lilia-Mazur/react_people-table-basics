(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{24:function(e,t,c){},25:function(e,t,c){},26:function(e,t,c){"use strict";c.r(t);var n=c(11),r=c(5),a=c(2),s=(c(21),c(22),c(6)),j=c.n(s),i=c(0),o=function(e){var t=e.to,c=e.title;return Object(i.jsx)(r.c,{to:t,className:function(e){var t=e.isActive;return j()("navbar-item",{"has-background-grey-lighter":t})},children:c})},l=function(){return Object(i.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)("div",{className:"navbar-brand",children:[Object(i.jsx)(o,{to:"/",title:"Home"}),Object(i.jsx)(o,{to:"/people",title:"People"})]})})})},b=(c(24),function(){return Object(i.jsxs)("div",{"data-cy":"app",children:[Object(i.jsx)(l,{}),Object(i.jsx)("div",{className:"section",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsx)(a.b,{})})})]})}),h=function(){return Object(i.jsx)("h1",{className:"title",children:"Home Page"})},d=c(8),u=c(4),O=c(1),x=(c(25),function(){return Object(i.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(i.jsx)("div",{className:"Loader__content"})})}),p=function(e){var t=e.person;return Object(i.jsx)(r.b,{to:"../".concat(t.slug),className:j()({"has-text-danger":"f"===t.sex}),children:t.name})},m=function(e){var t=e.person,c=t.slug,n=t.sex,r=t.born,s=t.died,o=t.mother,l=t.motherName,b=t.father,h=t.fatherName,d=Object(a.i)().personSlug===c;return Object(i.jsxs)("tr",{"data-cy":"person",className:j()({"has-background-warning":d}),children:[Object(i.jsx)("td",{children:Object(i.jsx)(p,{person:t})}),Object(i.jsx)("td",{children:n}),Object(i.jsx)("td",{children:r}),Object(i.jsx)("td",{children:s}),Object(i.jsx)("td",{children:o?Object(i.jsx)(p,{person:o}):l||"-"}),Object(i.jsx)("td",{children:b?Object(i.jsx)(p,{person:b}):h||"-"})]})},f=function(e){var t=e.people;return Object(i.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{children:"Name"}),Object(i.jsx)("th",{children:"Sex"}),Object(i.jsx)("th",{children:"Born"}),Object(i.jsx)("th",{children:"Died"}),Object(i.jsx)("th",{children:"Mother"}),Object(i.jsx)("th",{children:"Father"})]})}),Object(i.jsx)("tbody",{children:t.map((function(e){return Object(i.jsx)(m,{person:e},e.slug)}))})]})},v=c(9),g=c(12),N="https://mate-academy.github.io/react_people-table/api/people.json";function y(e){return new Promise((function(t){return setTimeout(t,e)}))}function w(){return(w=Object(g.a)(Object(v.a)().mark((function e(){return Object(v.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",y(500).then((function(){return fetch(N)})).then((function(e){return e.json()})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var P=function(){var e=Object(O.useState)([]),t=Object(u.a)(e,2),c=t[0],n=t[1],r=Object(O.useState)(!1),a=Object(u.a)(r,2),s=a[0],j=a[1],o=Object(O.useState)(!1),l=Object(u.a)(o,2),b=l[0],h=l[1];return Object(O.useEffect)((function(){j(!0),function(){return w.apply(this,arguments)}().then((function(e){var t=e.map((function(t){return Object(d.a)(Object(d.a)({},t),{},{mother:e.find((function(e){return e.name===t.motherName})),father:e.find((function(e){return e.name===t.fatherName}))})}));n(t)})).catch((function(){h(!0)})).finally((function(){j(!1)}))}),[]),Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h1",{className:"title",children:"People Page"}),Object(i.jsx)("div",{className:"block",children:Object(i.jsxs)("div",{className:"box table-container",children:[s&&Object(i.jsx)(x,{}),b&&Object(i.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:"Something went wrong"}),!s&&!b&&!c.length&&Object(i.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"}),c.length>0&&Object(i.jsx)(f,{people:c})]})})]})},S=function(){return Object(i.jsx)("h1",{className:"title",children:"Page not found"})};Object(n.createRoot)(document.getElementById("root")).render(Object(i.jsx)(r.a,{children:Object(i.jsx)(a.e,{children:Object(i.jsxs)(a.c,{path:"/",element:Object(i.jsx)(b,{}),children:[Object(i.jsx)(a.c,{index:!0,element:Object(i.jsx)(h,{})}),Object(i.jsx)(a.c,{path:"home",element:Object(i.jsx)(a.a,{to:"/",replace:!0})}),Object(i.jsxs)(a.c,{path:"people",children:[Object(i.jsx)(a.c,{index:!0,element:Object(i.jsx)(P,{})}),Object(i.jsx)(a.c,{path:":personSlug",element:Object(i.jsx)(P,{})})]}),Object(i.jsx)(a.c,{path:"*",element:Object(i.jsx)(S,{})})]})})}))}},[[26,1,2]]]);
//# sourceMappingURL=main.a33e1ca2.chunk.js.map