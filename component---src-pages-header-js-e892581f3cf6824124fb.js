(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{140:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=(a(170),a(171)),o=a.n(i),u=(a(176),a(318)),c=a(319),l=a(320),s=(a(169),a(165),a(177)),d=a(146),f=a.n(d);t.default=function(){return r.a.createElement("div",null,r.a.createElement(s.Helmet,null,r.a.createElement("title",null,"Faith Blogs"),r.a.createElement("meta",{name:"description",content:"Faith Morante - Full Stack Web Developer - Blog about Coding"})),r.a.createElement(o.a,{className:"sticky-header",header:r.a.createElement("div",{className:"header-root"},r.a.createElement(u.a,{className:"header-container"},r.a.createElement(c.a,null,r.a.createElement(l.a,null,r.a.createElement("h1",{className:"blog-header-title"},r.a.createElement(f.a,{to:"/"},"Faith Morante"))),r.a.createElement(l.a,{className:"blog-link"},r.a.createElement("h1",{className:""},r.a.createElement(f.a,{to:"/blog"},"Blog"))))))}))}},151:function(e,t,a){var n;e.exports=(n=a(158))&&n.default||n},158:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),u=a(53),c=a(2),l=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(u.a,Object.assign({location:t,pageResources:a},a.json))};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=l},178:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return p}),a.d(t,"StaticQueryContext",function(){return f}),a.d(t,"StaticQuery",function(){return h}),a.d(t,"useStaticQuery",function(){return m});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),u=a(146),c=a.n(u);a.d(t,"Link",function(){return c.a}),a.d(t,"withPrefix",function(){return u.withPrefix}),a.d(t,"navigate",function(){return u.navigate}),a.d(t,"push",function(){return u.push}),a.d(t,"replace",function(){return u.replace}),a.d(t,"navigateTo",function(){return u.navigateTo});var l=a(151),s=a.n(l);a.d(t,"PageRenderer",function(){return s.a});var d=a(32);a.d(t,"parsePath",function(){return d.a});var f=r.a.createContext({}),h=function(e){return r.a.createElement(f.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})},m=function(e){r.a.useContext;var t=r.a.useContext(f);if(t[e]&&t[e].data)return t[e].data;throw new Error("The result of this StaticQuery could not be fetched.\n\nThis is likely a bug in Gatsby and if refreshing the page does not fix it, please open an issue in https://github.com/gatsbyjs/gatsby/issues")};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}h.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}}}]);
//# sourceMappingURL=component---src-pages-header-js-e892581f3cf6824124fb.js.map