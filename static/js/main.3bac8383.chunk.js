(this["webpackJsonprick-and-morty"]=this["webpackJsonprick-and-morty"]||[]).push([[0],{78:function(e,t,n){e.exports=n(96)},83:function(e,t,n){},84:function(e,t,n){},95:function(e,t,n){},96:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(65),o=n.n(i),c=(n(83),n(84),n(27)),l=n(8),u=n(21),s=n(24),d=n(10),m=n(13),v=n(66);function p(e){var t=e.searchTerm,n=e.onSearch,i=Object(r.useState)(t),o=Object(s.a)(i,2),c=o[0],l=o[1],u=Object(v.debounce)((function(e){return n(e)}),1e3);return a.a.createElement("input",{type:"text",placeholder:"Search",value:c,onChange:function(e){l(e.target.value),u(e.target.value)}})}var f=n(76),b=n(75),h=n(74),E=n(67);function g(){var e=Object(d.a)(["\n\tdisplay: flex;\n\tjustify-content: ","; \n\tflex: ",";\n\t","\n"]);return g=function(){return e},e}function x(){var e=Object(d.a)(["\n\tdisplay: flex;\n\tborder-bottom: 1px solid silver;\n\tbackground:  ",";\n\tpadding: 5px 10px;\n\t:hover { background-color: #f5f5f5; }\n\t:nth-child(even) { background-color: #f2f2f2; }\n"]);return x=function(){return e},e}function j(){var e=Object(d.a)(["\n"]);return j=function(){return e},e}function O(){var e=Object(d.a)(["\n\tdisplay: flex;\n\tborder-bottom: 1px solid silver;\n\talign-items: center;\n\tbackground:  ",";\n\tpadding: 5px 10px;\n\tcolor: white;\n\theight: 30px;\n"]);return O=function(){return e},e}function y(){var e=Object(d.a)(["\n"]);return y=function(){return e},e}var w=m.a.div(y()),k=m.a.div(O(),(function(e){var t;return null!==(t=e.background)&&void 0!==t?t:"transparent"})),A=m.a.div(j()),C=m.a.div(x(),(function(e){var t;return null!==(t=e.background)&&void 0!==t?t:"transparent"})),S={xs:function(e){return"\n\t\t@media only screen and (max-width: 580px) {\n\t\t\t".concat(e,"\n\t\t}\n\t")}},z=m.a.div(g(),(function(e){var t;return null!==(t=e.justifyContent)&&void 0!==t?t:"flex-start"}),(function(e){return e.size}),(function(e){return e.collapse&&S[e.collapse]("\n\t\tdisplay : none;\n\t")})),I=n(77);var N=function(e){e.items,e.renderItem,e.loading,e.hasNextPage,Object(I.a)(e,["items","renderItem","loading","hasNextPage"])};function $(e){var t=e.id,n=e.name,i=e.air_date,o=e.episode,l=e.characters,u=function(){var e=Object(r.useState)({isHovered:!1}),t=Object(s.a)(e,2),n=t[0],a=t[1],i=Object(r.useRef)(null),o=function(){return a({isHovered:!0})},c=function(){return a({isHovered:!1})};return Object(r.useEffect)((function(){var e=i.current;if(e)return e.addEventListener("mouseenter",(function(){return o()})),e.addEventListener("mouseleave",(function(){return c()})),function(){e.removeEventListener("mouseenter",(function(){return o()})),e.removeEventListener("mouseleave",(function(){return c()}))}}),[i.current]),[i,n]}(),d=Object(s.a)(u,2),m=d[0],v=d[1];return a.a.createElement(C,null,a.a.createElement(z,{size:5},a.a.createElement(c.b,{to:"/episode/".concat(t)},t," ",n)),a.a.createElement(z,{size:2,collapse:"xs"},o),a.a.createElement(z,{size:3,collapse:"xs"},i),a.a.createElement(z,{size:3,justifyContent:"center"},a.a.createElement("div",{ref:m,style:{position:"relative"}},"#",l.length,v.isHovered&&a.a.createElement("button",{className:"show-more",title:"Show characters",onClick:function(){}},"Show"))))}function L(){var e=Object(d.a)(["\n\tquery episodes($page: Int, $filter: String) {\n\t\tepisodes(page: $page, filter: { name: $filter }) {\n\t\t\tresults {\n\t\t\t\tid\n\t\t\t\tname\n\t\t\t\tepisode\n\t\t\t\tair_date\n\t\t\t\tcharacters {\n\t\t\t\t\tid\n\t\t\t\t}\n\t\t\t}\n\t\t\tinfo {\n\t\t\t\tnext\n\t\t\t}\n\t\t}\n\t}\n"]);return L=function(){return e},e}function P(){var e=Object(d.a)(["\n\tborder: '1px solid silver';\n\tborder-top-width: 0;\n\toverflow-y: auto;\n\theight: 450px;\n"]);return P=function(){return e},e}var T=m.a.div(P()),q=Object(u.gql)(L());var D=function(e){var t,n=e.searchTerm,r=Object(u.useQuery)(q,{variables:{page:1,filter:n}}),i=r.loading,o=r.error,c=r.data,l=r.fetchMore,s=(c||{}).episodes,d=null===s||void 0===s?void 0:s.results,m=null===s||void 0===s||null===(t=s.info)||void 0===t?void 0:t.next,v=!!m;if(o)return a.a.createElement("p",null,"Error :(");var p=Object(E.a)({loading:i,hasNextPage:v,onLoadMore:function(){l({variables:{page:m,filter:n},updateQuery:function(e,t){var n=t.fetchMoreResult,r=null===n||void 0===n?void 0:n.episodes;return console.log(null===r||void 0===r?void 0:r.results),Object(h.a)(e,(function(e){var t,n=e.episodes;(null===n||void 0===n?void 0:n.results)&&(null===n||void 0===n?void 0:n.info)&&(null===r||void 0===r?void 0:r.results)&&((t=n.results).push.apply(t,Object(b.a)(r.results)),n.info=Object(f.a)({},r.info))}))}})},scrollContainer:"parent"});return a.a.createElement(a.a.Fragment,null,a.a.createElement(w,null,a.a.createElement(k,{background:"gray"},a.a.createElement(z,{size:5},"EPISODE"),a.a.createElement(z,{size:2,collapse:"xs"},"CODE"),a.a.createElement(z,{size:3,collapse:"xs"},"AIR DATE"),a.a.createElement(z,{size:3,justifyContent:"center"},"#Characters"))),a.a.createElement(T,null,a.a.createElement(A,{ref:p},a.a.createElement(N,{items:d,loading:i,hasNextPage:v,renderItem:function(e){return e.id?a.a.createElement($,Object.assign({key:e.id},e)):null}},");"))))};function M(){var e=Object(d.a)(["\n\t// position: 'relative';\n\tbackground-color: gainsboro;\n\tborder-radius: 10px;\n\tbox-shadow: 3px 3px 25px -5px rgba(0,0,0,0.47);\n\tcolor: #1A1A1A;\n\tdisplay: inline-block;\n\tmargin: 20px 15px;\n\twidth: 98%;\n\toverflow: hidden;\n"]);return M=function(){return e},e}var H=m.a.div(M());function R(){var e=Object(r.useState)(""),t=Object(s.a)(e,2),n=t[0],i=t[1];return a.a.createElement(H,null,a.a.createElement("div",{style:{padding:"5px 10px",width:"20%"}},a.a.createElement(p,{searchTerm:n,onSearch:function(e){return i(e)}})),a.a.createElement(D,{searchTerm:n}))}function _(e){var t=e.id,n=e.name,r=e.episode,i=e.image;return a.a.createElement("div",{key:t,className:"item"},a.a.createElement("img",{alt:"Actor",style:{width:120,height:120},src:i}),a.a.createElement("div",null,n),a.a.createElement("div",null,"Episodes: ",r.length))}n(95);function B(e){var t=e.characters;return a.a.createElement("div",{className:"container"},t.map((function(e){return a.a.createElement(_,Object.assign({key:e.id},e))})))}function Q(){var e=Object(d.a)(["\n\tquery episode($id: ID!) {\n\t\tepisode(id: $id) {\n\t\t\tid\n\t\t\tname\n\t\t\tair_date\n\t\t\tepisode\n\t\t\t created\n\t\t\tcharacters {\n\t\t\t  id\n\t\t\t  name\n\t\t\t  status\n\t\t\t  species\n\t\t\t  gender\n\t\t\t  location {\n\t\t\t\t name\n\t\t\t  }\n\t\t\t  image\n\t\t\t  created\n\t\t\t  episode {\n\t\t\t\t  id\n\t\t\t  }\n\t\t }\n\t\n\t\t}\n\t}\n"]);return Q=function(){return e},e}function F(){var e=Object(d.a)(["\n  padding: 0 15px;\n"]);return F=function(){return e},e}function J(){var e=Object(d.a)(["\n  font-size: 1.66rem;\n"]);return J=function(){return e},e}function W(){var e=Object(d.a)(["\n\tposition: 'relative'\n\tbackground-color: gainsboro;\n\tborder-radius: 10px;\n\tbox-shadow: 3px 3px 25px -5px rgba(0,0,0,0.47);\n\tcolor: #1A1A1A;\n\tdisplay: inline-block;\n\tmargin: 20px 15px;\n\tmmmax-width: 300px;\n\toverflow: hidden;\n"]);return W=function(){return e},e}var G=m.a.div(W()),K=m.a.div(J()),U=m.a.div(F()),V=Object(u.gql)(Q());function X(){var e=Object(l.f)().id,t=Object(u.useQuery)(V,{variables:{id:e}}),n=t.loading,r=t.error,i=t.data;if(i&&console.log("data",i),n)return a.a.createElement("p",null,"Loading...");if(r)return a.a.createElement("p",null,"Error :(");var o=i.episode,s=o.name,d=o.air_date,m=o.episode,v=o.characters;return a.a.createElement(G,null,a.a.createElement(U,null,a.a.createElement(K,null,s),a.a.createElement("div",null,m),a.a.createElement("div",null,"AIR DATE: ",d)),a.a.createElement("h4",{style:{padding:"0px 15px"}},"Characters"),a.a.createElement(B,{characters:v}),a.a.createElement("div",{style:{position:"absolute",right:"30px",top:"30px"}},a.a.createElement(c.b,{to:"/"},"Back to Episodes")))}var Y=new u.ApolloClient({uri:"https://rickandmortyapi.com/graphql",cache:new u.InMemoryCache({})});var Z=function(){return a.a.createElement(c.a,null,a.a.createElement(u.ApolloProvider,{client:Y},a.a.createElement(a.a.Fragment,null,a.a.createElement("div",null,a.a.createElement(l.c,null,a.a.createElement(l.a,{path:"/episode/:id"},a.a.createElement(X,null)),a.a.createElement(l.a,{path:"/"},a.a.createElement(R,null)))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(Z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[78,1,2]]]);
//# sourceMappingURL=main.3bac8383.chunk.js.map