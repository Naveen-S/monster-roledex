(this["webpackJsonpmonsters-rolodex"]=this["webpackJsonpmonsters-rolodex"]||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n(17)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(2),c=n.n(o),s=(n(12),n(3)),i=n(4),l=n(5),u=n(6);n(13);function m(e){var t=e.monster;return r.a.createElement("div",{className:"card-container"},r.a.createElement("img",{alt:"monster",src:"https://robohash.org/".concat(t.id,"?set=set2")}),r.a.createElement("h2",null," ",t.name," "),r.a.createElement("p",null," ",t.email," "))}n(14);var h=function(e){return r.a.createElement("div",{className:"card-list"},e.monsters.map((function(e){return r.a.createElement(m,{monster:e,key:e.id})})))};n(15);function d(e){return r.a.createElement("div",null,r.a.createElement("input",{className:"search",type:"search",placeholder:"search monsters",onChange:e.onSearchChange}))}n(16);var f=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(s.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchField:t.target.value})},e.getFilterList=function(){var t=e.state,n=t.monsters,a=t.searchField,r=n;return a&&(r=e.state.monsters.filter((function(e){return e.name.toLowerCase().indexOf(a.toLowerCase())>=0}))),r},e.state={monsters:[],searchField:""},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){e.setState({monsters:t})}))}},{key:"render",value:function(){var e=this.getFilterList();return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null," Monster Roledex "),r.a.createElement(d,{onSearchChange:this.onSearchChange}),r.a.createElement(h,{monsters:e}))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.5486152d.chunk.js.map