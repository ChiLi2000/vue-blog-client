webpackJsonp([8],{"+UT1":function(t,e){},epW7:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("ZYmg"),n={data:function(){return{blogs:[],total:0,page:1}},components:{goTop:a("A67x").a},created:function(){var t=this;s.a.getIndexBlogs({page:this.page}).then(function(e){t.blogs=e.data,t.total=e.total,t.page=e.page})}},r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"index"}},[a("section",{staticClass:"blog-posts"},t._l(t.blogs,function(e){return a("router-link",{key:e.id,staticClass:"item",attrs:{to:"/detail/"+e.id}},[a("figure",{staticClass:"avatar"},[a("img",{attrs:{src:e.user.avatar,alt:e.user.username}}),t._v(" "),a("figcaption",[t._v(t._s(e.user.username))])]),t._v(" "),a("h3",[t._v("\n        "+t._s(e.title)+"\n        "),a("span",[t._v(t._s(t.friendlyDate(e.createdAt)))])]),t._v(" "),a("p",[t._v(t._s(e.description))])])}),1),t._v(" "),a("div",{attrs:{id:"show"}},[a("goTop")],1)])},staticRenderFns:[]};var i=a("VU/8")(n,r,!1,function(t){a("+UT1")},"data-v-18d9d3d4",null);e.default=i.exports}});
//# sourceMappingURL=8.505976fa299b41447712.js.map