(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fe393e98"],{"24ff":function(e,t,n){"use strict";var r=n("ee1c"),a=n.n(r);t["default"]=a.a},b0b4:function(e,t,n){"use strict";n.d(t,"a",function(){return s});var r=n("85f2"),a=n.n(r);function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),a()(e,r.key,r)}}function s(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}},d225:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,"a",function(){return r})},db95:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"main-wrapper"},[n("x-edit")],1)},a=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-card",{attrs:{shadow:"never"}},[n("div",{class:e.$style.header,attrs:{slot:"header"},slot:"header"},[n("span",[e._v("编辑角色")]),n("el-button",{attrs:{type:"primary",size:"mini"},on:{click:e.handSave}},[e._v("保存权限")])],1),n("el-form",{attrs:{rules:e.form.rules},model:{value:e.form.fields,callback:function(t){e.$set(e.form,"fields",t)},expression:"form.fields"}},[n("el-form-item",{attrs:{label:"角色名称"}},[n("el-input",{model:{value:e.form.fields.name,callback:function(t){e.$set(e.form.fields,"name",t)},expression:"form.fields.name"}})],1),n("el-form-item",{attrs:{label:"权限分配"}},[n("el-col",{attrs:{span:24}},[n("el-tree",{ref:"tree",attrs:{data:e.routes,"show-checkbox":"","node-key":"path","default-expand-all":""}})],1)],1)],1)],1)},s=[],o=(n("ac6a"),n("d225")),l=n("b0b4"),c=function(){function e(t){Object(o["a"])(this,e),this.routes=t}return Object(l["a"])(e,[{key:"treeData",value:function(){var e=this.constructor.filterMenu(this.routes);return this.transformToTree(e)}},{key:"treeAllData",value:function(){return this.transformToTree(this.routes)}},{key:"transformToTree",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=e.map(function(e){var r={path:n?"".concat(n,"/").concat(e.path):e.path,label:e.meta&&e.meta.title||"未定义"};return e.children&&e.children.length>0&&t.constructor.isShowChildren(e.children)&&(r.children=t.transformToTree(e.children,r.path)),r});return r}}],[{key:"filterMenu",value:function(e){var t=this,n=[];return e.forEach(function(e){e.meta&&e.meta.hidden||n.push(e),e.children&&e.children.length>0&&t.isShowChildren(e.children)?e.children=t.filterMenu(e.children):delete e.children}),n}},{key:"isShowChildren",value:function(e){return e.some(function(e){return!(e.meta&&e.meta.hidden)})}}]),e}(),u=c,f=n("7ec3"),d=new u(f["a"]),h={data:function(){return{routes:d.treeData(),form:{fields:{name:"",permissions:[]},rules:{}}}},mounted:function(){this.init()},methods:{init:function(){this.getRoutes()},getRoutes:function(){var e=["/icon/element-ui","/ui/table/complex"];this.$refs.tree.setCheckedKeys(e,!0)},handSave:function(){this.$refs.tree.getCheckedKeys();this.$message.success("请查看console.log信息")}}},m=h,p=n("24ff"),v=n("2877");function b(e){this["$style"]=p["default"].locals||p["default"]}var w=Object(v["a"])(m,i,s,!1,b,null,null),k=w.exports,y={components:{XEdit:k}},g=y,x=Object(v["a"])(g,r,a,!1,null,null,null);t["default"]=x.exports},ee1c:function(e,t,n){e.exports={header:"edit_header_125w4"}}}]);