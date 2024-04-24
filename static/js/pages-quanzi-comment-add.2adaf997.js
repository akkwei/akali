(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-quanzi-comment-add"],{1328:function(t,e,a){"use strict";(function(t){a("7a82");var n=a("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(a("5530"));a("c975"),a("b64b"),a("d3b7");var r=a("87ac"),o=t.database();function u(t){var e={};for(var a in r.validator)t.indexOf(a)>-1&&(e[a]=r.validator[a]);return e}var c={data:function(){var t={article_id:"",user_id:"",comment_content:"",like_count:0,comment_type:null,reply_user_id:"",reply_comment_id:"",comment_date:null,comment_ip:"",province:""};return{formData:t,formOptions:{},rules:(0,i.default)({},u(Object.keys(t)))}},onReady:function(){this.$refs.form.setRules(this.rules)},methods:{submit:function(){var t=this;uni.showLoading({mask:!0}),this.$refs.form.validate().then((function(e){return t.submitForm(e)})).catch((function(){})).finally((function(){uni.hideLoading()}))},submitForm:function(t){var e=this;return o.collection("quanzi-comment").add(t).then((function(t){uni.showToast({icon:"none",title:"新增成功"}),e.getOpenerEventChannel().emit("refreshData"),setTimeout((function(){return uni.navigateBack()}),500)})).catch((function(t){uni.showModal({content:t.message||"请求服务失败",showCancel:!1})}))}}};e.default=c}).call(this,a("a9ff")["default"])},"6bc7":function(t,e,a){var n=a("8537");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("52b23905",n,!0,{sourceMap:!1,shadowMode:!1})},"766c":function(t,e,a){"use strict";a.r(e);var n=a("b7fc"),i=a("9041");for(var r in i)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(r);a("7c15");var o=a("f0c5"),u=Object(o["a"])(i["default"],n["b"],n["c"],!1,null,"32615842",null,!1,n["a"],void 0);e["default"]=u.exports},"7c15":function(t,e,a){"use strict";var n=a("6bc7"),i=a.n(n);i.a},8537:function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,".uni-container[data-v-32615842]{padding:15px}.uni-input-border[data-v-32615842],\n.uni-textarea-border[data-v-32615842]{width:100%;font-size:14px;color:#666;border:1px #e5e5e5 solid;border-radius:5px;box-sizing:border-box}.uni-input-border[data-v-32615842]{padding:0 10px;height:35px}.uni-textarea-border[data-v-32615842]{padding:10px;height:80px}.uni-button-group[data-v-32615842]{margin-top:50px;\ndisplay:flex;\njustify-content:center}.uni-button[data-v-32615842]{width:184px}",""]),t.exports=e},9041:function(t,e,a){"use strict";a.r(e);var n=a("1328"),i=a.n(n);for(var r in n)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(r);e["default"]=i.a},b7fc:function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return n}));var n={uniForms:a("b732").default,uniFormsItem:a("5b29").default,uniEasyinput:a("ef0a").default,uniDatetimePicker:a("f4bc").default},i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"uni-container"},[a("uni-forms",{ref:"form",attrs:{model:t.formData,"validate-trigger":"submit","err-show-type":"toast"}},[a("uni-forms-item",{attrs:{name:"article_id",label:"",required:!0}},[a("uni-easyinput",{attrs:{placeholder:"文章ID，opendb-news-posts 表中的`_id`字段"},model:{value:t.formData.article_id,callback:function(e){t.$set(t.formData,"article_id",e)},expression:"formData.article_id"}})],1),a("uni-forms-item",{attrs:{name:"user_id",label:"",required:!0}},[a("uni-easyinput",{attrs:{placeholder:"评论者ID，参考`uni-id-users` 表"},model:{value:t.formData.user_id,callback:function(e){t.$set(t.formData,"user_id",e)},expression:"formData.user_id"}})],1),a("uni-forms-item",{attrs:{name:"comment_content",label:"评论内容",required:!0}},[a("uni-easyinput",{attrs:{placeholder:"评论内容",trim:"right"},model:{value:t.formData.comment_content,callback:function(e){t.$set(t.formData,"comment_content",e)},expression:"formData.comment_content"}})],1),a("uni-forms-item",{attrs:{name:"like_count",label:"",required:!0}},[a("uni-easyinput",{attrs:{placeholder:"评论喜欢数、点赞数",type:"number"},model:{value:t.formData.like_count,callback:function(e){t.$set(t.formData,"like_count",e)},expression:"formData.like_count"}})],1),a("uni-forms-item",{attrs:{name:"comment_type",label:"",required:!0}},[a("uni-easyinput",{attrs:{placeholder:"回复类型： 0 针对文章的回复  1 针对评论的回复",type:"number"},model:{value:t.formData.comment_type,callback:function(e){t.$set(t.formData,"comment_type",e)},expression:"formData.comment_type"}})],1),a("uni-forms-item",{attrs:{name:"reply_user_id",label:""}},[a("uni-easyinput",{attrs:{placeholder:"被回复的评论用户ID，comment_type为1时有效"},model:{value:t.formData.reply_user_id,callback:function(e){t.$set(t.formData,"reply_user_id",e)},expression:"formData.reply_user_id"}})],1),a("uni-forms-item",{attrs:{name:"reply_comment_id",label:""}},[a("uni-easyinput",{attrs:{placeholder:"被回复的评论ID，comment_type为1时有效"},model:{value:t.formData.reply_comment_id,callback:function(e){t.$set(t.formData,"reply_comment_id",e)},expression:"formData.reply_comment_id"}})],1),a("uni-forms-item",{attrs:{name:"comment_date",label:""}},[a("uni-datetime-picker",{attrs:{"return-type":"timestamp"},model:{value:t.formData.comment_date,callback:function(e){t.$set(t.formData,"comment_date",e)},expression:"formData.comment_date"}})],1),a("uni-forms-item",{attrs:{name:"comment_ip",label:""}},[a("uni-easyinput",{attrs:{placeholder:"评论发表时 IP 地址"},model:{value:t.formData.comment_ip,callback:function(e){t.$set(t.formData,"comment_ip",e)},expression:"formData.comment_ip"}})],1),a("uni-forms-item",{attrs:{name:"province",label:"省份"}},[a("uni-easyinput",{attrs:{placeholder:"省份",trim:"both"},model:{value:t.formData.province,callback:function(e){t.$set(t.formData,"province",e)},expression:"formData.province"}})],1),a("v-uni-view",{staticClass:"uni-button-group"},[a("v-uni-button",{staticClass:"uni-button",attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.submit.apply(void 0,arguments)}}},[t._v("提交")])],1)],1)],1)},r=[]}}]);