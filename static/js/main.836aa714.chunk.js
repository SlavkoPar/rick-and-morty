(this["webpackJsonprick-and-morty"]=this["webpackJsonprick-and-morty"]||[]).push([[0],{77:function(e,t,n){e.exports=n(95)},82:function(e,t,n){},83:function(e,t,n){},94:function(e,t,n){},95:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(65),o=n.n(i),l=(n(82),n(83),n(27)),c=n(8),u=n(12),s=n(16);function d(){var e=Object(u.a)(['\n\tposition: "fixed";\n\tbottom: 20;\n\tright: 20;\n\tzIndex: 1999;\n\tborder-width: 1px;\n\tborder-radius: 15px;\n\twidth: 30px;\n\theight: 30px;\n']);return d=function(){return e},e}function m(){window.scroll({top:0,left:0,behavior:"smooth"})}var f=s.a.button(d());var p=function(){return a.a.createElement(f,{onClick:m},a.a.createElement("span",{style:{fontSize:"25px"}},"^"))},v=n(22),E=n(2),b=n(75),g=n(21),h=n(74),x=n(72);function j(e){var t=e.searchTerm,n=e.onSearch,i=Object(r.useState)(t),o=Object(g.a)(i,2),l=o[0],c=o[1],u=Object(x.debounce)((function(e){return n(e)}),1e3);return a.a.createElement("input",{type:"text",placeholder:"Search",value:l,onChange:function(e){c(e.target.value),u(e.target.value)}})}var y=n(76);var O=function(e){var t=e.loading,n=e.children;return t?a.a.createElement("div",{style:{display:"flex",justifyContent:"center",flexGrow:"1:"}},"Loading ..."):a.a.createElement(a.a.Fragment,null,n)||null};function k(){var e=Object(u.a)(["\n\tdisplay: flex;\n\tjustify-content: ","; \n\tflex: ",";\n\t","\n"]);return k=function(){return e},e}function w(){var e=Object(u.a)(["\n\tdisplay: flex;\n\tborder-bottom: 1px solid silver;\n\tbackground:  ",";\n\tpadding: 5px 10px;\n\t:hover { background-color: #f5f5f5; }\n\t:nth-child(even) { background-color: #f2f2f2; }\n"]);return w=function(){return e},e}function C(){var e=Object(u.a)(["\n\tdisplay: flex;\n\tborder-bottom: 1px solid silver;\n\talign-items: center;\n\tbackground:  ",";\n\tpadding: 5px 10px;\n\tcolor: white;\n\theight: 30px;\n"]);return C=function(){return e},e}function I(){var e=Object(u.a)(["\n"]);return I=function(){return e},e}var S=s.a.div(I()),A=s.a.div(C(),(function(e){return e.background?e.background:"transparent"})),z=s.a.div(w(),(function(e){return e.background?e.background:"transparent"})),L={xs:function(e){return"\n\t\t@media only screen and (max-width: 480px) {\n\t\t\t".concat(e,"\n\t\t}\n\t")}},M=s.a.div(k(),(function(e){return e.justifyContent?e.justifyContent:"flex-start"}),(function(e){return e.size}),(function(e){return e.collapse&&L[e.collapse]("\n\t\tdisplay : none;\n\t")}));var $=function(e){var t=e.items,n=void 0===t?[]:t,i=e.renderItem,o=e.loading,l=e.maxVisibleItemCount,c=(Object(y.a)(e,["items","renderItem","loading","maxVisibleItemCount"]),Object(r.useState)(!l)),u=Object(g.a)(c,2),s=u[0],d=u[1],m=n.length,f=Boolean(o&&!m);return a.a.createElement(O,{loading:f},null===n||void 0===n?void 0:n.map((function(e,t){return e&&(!l||s||t<l)?i(e,t):null})),l&&m&&m>l?a.a.createElement(z,{onClick:function(){d(!s)}},a.a.createElement(M,null,"SHOW ".concat(s?"LESS":"MORE"))):null,o?a.a.createElement(z,null,a.a.createElement(M,null,a.a.createElement(O,{loading:!0}))):null)};function q(e){var t=e.id,n=e.name,i=e.air_date,o=e.episode,c=e.characters,u=function(){var e=Object(r.useState)({isHovered:!1}),t=Object(g.a)(e,2),n=t[0],a=t[1],i=Object(r.useRef)(null),o=function(){return a({isHovered:!0})},l=function(){return a({isHovered:!1})};return Object(r.useEffect)((function(){var e=i.current;if(e)return e.addEventListener("mouseenter",(function(){return o()})),e.addEventListener("mouseleave",(function(){return l()})),function(){e.removeEventListener("mouseenter",(function(){return o()})),e.removeEventListener("mouseleave",(function(){return l()}))}}),[i.current]),[i,n]}(),s=Object(g.a)(u,2),d=s[0],m=s[1];return a.a.createElement(z,null,a.a.createElement(M,{size:5},a.a.createElement(l.b,{to:"/episode/".concat(t)},t," ",n)),a.a.createElement(M,{size:2,collapse:"xs"},o),a.a.createElement(M,{size:3,collapse:"xs"},i),a.a.createElement(M,{size:2,justifyContent:"center"},a.a.createElement("div",{ref:d,style:{position:"relative"}},"#",c.length,m.isHovered&&a.a.createElement("button",{className:"show-more",title:"Edit",onClick:function(){}},"Show"))))}function H(e){return e.id?a.a.createElement(q,Object.assign({key:e.id},e)):null}var N=function(e){var t=e.episodes,n=e.loading,r=e.maxVisibleItemCount;return a.a.createElement($,{items:t,loading:n,maxVisibleItemCount:r,renderItem:H},");")},P=n(73);var D=function(e){var t=e.hasNextPage,n=e.loading,r=e.onLoadMore,i=e.children,o=Object(P.a)({hasNextPage:t,loading:n,onLoadMore:r});return a.a.createElement(S,{ref:o},i)};function R(){var e=Object(u.a)(["\n\tposition: 'relative'\n\tbackground-color: gainsboro;\n\tborder-radius: 10px;\n\tbox-shadow: 3px 3px 25px -5px rgba(0,0,0,0.47);\n\tcolor: #1A1A1A;\n\tdisplay: inline-block;\n\tmargin: 20px 15px;\n\twidth: 98%;\n\toverflow: hidden;\n"]);return R=function(){return e},e}function B(){var e=Object(u.a)(["\n\tquery episodes($page: Int, $filter: String) {\n\t\tepisodes(page: $page, filter: { name: $filter }) {\n\t\t\tresults {\n\t\t\t\tid\n\t\t\t\tname\n\t\t\t\tepisode\n\t\t\t\tair_date\n\t\t\t\tcharacters {\n\t\t\t\t\tid\n\t\t\t\t}\n\t\t\t}\n\t\t\tinfo {\n\t\t\t\tnext\n\t\t\t}\n\t\t}\n\t}\n"]);return B=function(){return e},e}var Q=Object(v.gql)(B()),T=s.a.div(R());function V(){var e,t=Object(r.useState)(""),n=Object(g.a)(t,2),i=n[0],o=n[1],l=Object(v.useQuery)(Q,{variables:{page:1,filter:i}}),c=l.loading,u=l.error,s=l.data,d=l.fetchMore;if(u)return a.a.createElement("p",null,"Error :(");var m=(s||{}).episodes,f=null===m||void 0===m?void 0:m.results,p=null===m||void 0===m||null===(e=m.info)||void 0===e?void 0:e.next,E=!!p;return a.a.createElement(T,null,a.a.createElement("div",{style:{padding:"5px 10px",width:"20%"}},a.a.createElement(j,{searchTerm:i,onSearch:function(e){return o(e)}})),a.a.createElement(S,null,a.a.createElement(A,{background:"gray"},a.a.createElement(M,{size:5},"EPISODE"),a.a.createElement(M,{size:2,collapse:"xs"},"CODE"),a.a.createElement(M,{size:3,collapse:"xs"},"AIR DATE"),a.a.createElement(M,{size:2,justifyContent:"center"},"#Characters"))),a.a.createElement(D,{hasNextPage:E,loading:c,onLoadMore:function(){return d({variables:{page:p,filter:i},updateQuery:function(e,t){var n=t.fetchMoreResult;console.log(e);var r=null===n||void 0===n?void 0:n.episodes;return Object(h.a)(e,(function(e){var t,n=e.episodes;(null===n||void 0===n?void 0:n.results)&&(null===n||void 0===n?void 0:n.info)&&(null===r||void 0===r?void 0:r.results)&&((t=n.results).push.apply(t,Object(b.a)(r.results)),n.info=r.info)}))}})}},a.a.createElement(N,{episodes:f,loading:c||E})))}function _(e){var t=e.id,n=e.name,r=e.episode,i=e.image;return a.a.createElement("div",{key:t,className:"item"},a.a.createElement("img",{alt:"Actor",style:{width:120,height:120},src:i}),a.a.createElement("div",null,n),a.a.createElement("div",null,"Episodes: ",r.length))}n(94);function W(e){var t=e.characters;return a.a.createElement("div",{className:"container"},t.map((function(e){return a.a.createElement(_,Object.assign({key:e.id},e))})))}function F(){var e=Object(u.a)(["\n\tquery episode($id: ID!) {\n\t\tepisode(id: $id) {\n\t\t\tid\n\t\t\tname\n\t\t\tair_date\n\t\t\tepisode\n\t\t\t created\n\t\t\tcharacters {\n\t\t\t  id\n\t\t\t  name\n\t\t\t  status\n\t\t\t  species\n\t\t\t  gender\n\t\t\t  location {\n\t\t\t\t name\n\t\t\t  }\n\t\t\t  image\n\t\t\t  created\n\t\t\t  episode {\n\t\t\t\t  id\n\t\t\t  }\n\t\t }\n\t\n\t\t}\n\t}\n"]);return F=function(){return e},e}function J(){var e=Object(u.a)(["\n  padding: 0 15px;\n"]);return J=function(){return e},e}function G(){var e=Object(u.a)(["\n  font-size: 1.66rem;\n"]);return G=function(){return e},e}function K(){var e=Object(u.a)(["\n\tposition: 'relative'\n\tbackground-color: gainsboro;\n\tborder-radius: 10px;\n\tbox-shadow: 3px 3px 25px -5px rgba(0,0,0,0.47);\n\tcolor: #1A1A1A;\n\tdisplay: inline-block;\n\tmargin: 20px 15px;\n\tmmmax-width: 300px;\n\toverflow: hidden;\n"]);return K=function(){return e},e}var U=s.a.div(K()),X=s.a.div(G()),Y=s.a.div(J()),Z=Object(v.gql)(F());function ee(){var e=Object(c.f)().id,t=Object(v.useQuery)(Z,{variables:{id:e}}),n=t.loading,r=t.error,i=t.data;if(i&&console.log("data",i),n)return a.a.createElement("p",null,"Loading...");if(r)return a.a.createElement("p",null,"Error :(");var o=i.episode,u=o.name,s=o.air_date,d=o.episode,m=o.characters;return a.a.createElement(U,null,a.a.createElement(Y,null,a.a.createElement(X,null,u),a.a.createElement("div",null,d),a.a.createElement("div",null,"AIR DATE: ",s)),a.a.createElement("h4",{style:{padding:"0px 15px"}},"Characters"),a.a.createElement(W,{characters:m}),a.a.createElement("div",{style:{position:"absolute",right:"30px",top:"30px"}},a.a.createElement(l.b,{to:"/"},"Back to Episodes")))}var te=new v.ApolloClient({uri:"https://rickandmortyapi.com/graphql",cache:new v.InMemoryCache({typePolicies:{Query:{fields:{search:Object(E.H)(["query"])}}}})});var ne=function(){return a.a.createElement(l.a,null,a.a.createElement(v.ApolloProvider,{client:te},a.a.createElement(a.a.Fragment,null,a.a.createElement("div",null,a.a.createElement(c.c,null,a.a.createElement(c.a,{path:"/episode/:id"},a.a.createElement(ee,null)),a.a.createElement(c.a,{path:"/"},a.a.createElement(V,null)))),a.a.createElement(p,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(ne,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[77,1,2]]]);
//# sourceMappingURL=main.836aa714.chunk.js.map