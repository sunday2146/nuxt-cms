webpackJsonp([14],{"8Git":function(e,t,a){"use strict";var n=a("Xxa5"),s=a.n(n),i=a("exGp"),r=a.n(i);t.a={layout:"admin",middleware:"auth",methods:{postArticle:function(){this.$router.push("/admin/articles/editor")},handleChange:function(){var e=r()(s.a.mark(function e(t){var a;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a=void 0,"所有"!==t){e.next=7;break}return e.next=4,this.$store.dispatch("GET_USERS","?pageIndex="+this.pageIndex+"&pageSize="+this.pageSize);case 4:a=e.sent,e.next=10;break;case 7:return e.next=9,this.$store.dispatch("GET_USERS","?role="+t+"&pageIndex="+this.pageIndex+"&pageSize="+this.pageSize);case 9:a=e.sent;case 10:this.table=a.data;case 11:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),handleSizeChange:function(){var e=r()(s.a.mark(function e(t){var a;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.pageSize=t,e.next=3,this.$store.dispatch("GET_USERS","?pageIndex="+this.pageIndex+"&pageSize="+this.pageSize);case 3:a=e.sent,this.table=a.data;case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),handleCurrentChange:function(){var e=r()(s.a.mark(function e(t){var a;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.pageIndex=t,e.next=3,this.$store.dispatch("GET_USERS","?pageIndex="+this.pageIndex+"&pageSize="+this.pageSize);case 3:a=e.sent,this.table=a.data;case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),checkRow:function(e){this.dialog=e,this.dialogTableVisible=!0},deleteRow:function(e,t){var a=this;this.$confirm("此操作将永久删除该用户, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(r()(s.a.mark(function n(){var i;return s.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.$store.dispatch("DEL_USER",t[e].username);case 2:if(!(i=n.sent).success){n.next=8;break}t.splice(e,1),a.$message({type:"success",message:"删除成功!"}),n.next=9;break;case 8:throw i.message;case 9:case"end":return n.stop()}},n,a)}))).catch(function(e){a.$message({type:"info",message:e.message?e.message:e})})},editRow:function(e){this.$router.push("/admin/users/editor?id="+e)}},asyncData:function(){var e=r()(s.a.mark(function e(t){var a,n=t.store;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.dispatch("GET_USERS","");case 2:return a=e.sent,e.abrupt("return",{table:a.data,total:a.total});case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),data:function(){return{table:[],total:null,pageIndex:1,pageSize:10,select:"",options:["所有","超级管理员","管理员","用户"],dialog:{},dialogTableVisible:!1}}}},Qipa:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("8Git"),s=a("fG7V"),i=a("VU/8")(n.a,s.a,!1,null,null,null);i.options.__file="pages/admin/users/index.vue",t.default=i.exports},fG7V:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"admin-list"},[a("div",{staticClass:"flex-row-sb"},[a("el-select",{attrs:{slot:"prepend",placeholder:e.$t("admin.page.article.typeFilter")},on:{change:e.handleChange},slot:"prepend",model:{value:e.select,callback:function(t){e.select=t},expression:"select"}},e._l(e.options,function(e){return a("el-option",{key:e,attrs:{label:e,value:e}})}),1)],1),a("div",{staticClass:"table-container"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.table,"tooltip-effect":"dark"}},[a("el-table-column",{attrs:{prop:"name",label:"名称","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"email",label:"邮箱","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"role",label:"角色","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{fixed:"right",label:"操作",width:"170"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){e.checkRow(t.row)}}},[e._v(e._s(e.$t("admin.page.check")))]),a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){e.editRow(t.row.id)}}},[e._v(e._s(e.$t("admin.page.edit")))])]}}])})],1),a("el-pagination",{attrs:{"current-page":e.pageIndex,"page-size":e.pageSize,"page-sizes":[10,20,30,40,50],layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1),a("el-dialog",{attrs:{visible:e.dialogTableVisible},on:{"update:visible":function(t){e.dialogTableVisible=t}}},[a("div",{staticClass:"title"},[e._v("角色："+e._s(e.dialog.role))]),a("div",{staticClass:"title"},[e._v("名称："+e._s(e.dialog.name))]),a("div",{staticClass:"title"},[e._v("邮箱："+e._s(e.dialog.email))])])],1)};n._withStripped=!0;var s={render:n,staticRenderFns:[]};t.a=s}});