(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-profile-user-profile"],{"051d":function(e,t,i){var n=i("61a4");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=i("4f06").default;a("54577013",n,!0,{sourceMap:!1,shadowMode:!1})},3063:function(e,t,i){var n=i("24fb");t=n(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.user-like[data-v-0bfc287a]{padding:%?30?% 0;border-bottom:#f8f8f8 solid %?10?%;font-size:%?24?%}.user-like .head[data-v-0bfc287a]{display:flex;justify-content:space-between;align-items:center;margin-bottom:%?10?%}.user-like .head .left[data-v-0bfc287a]{display:flex;align-items:center}.user-like .head .left .avatar uni-image[data-v-0bfc287a]{width:%?50?%;height:%?50?%;border-radius:50%}.user-like .head .left .nickname[data-v-0bfc287a]{margin-left:%?5?%;margin-right:%?10?%}.user-like .head .right[data-v-0bfc287a] .u-icon--right{padding:%?10?% %?16?%;border-radius:%?56?%;border:%?2?% solid #ff8200}.user-like .body .title[data-v-0bfc287a]{font-size:%?48?%;font-weight:700}.user-like .body .abstract[data-v-0bfc287a]{margin:%?20?% 0;color:#999;display:-webkit-box;overflow:hidden;text-overflow:ellipsis;-webkit-box-orient:vertical;-webkit-line-clamp:2}.user-like .body .pics[data-v-0bfc287a]{display:flex}.user-like .body .pics .pic[data-v-0bfc287a]{width:%?225?%;height:%?225?%;margin-right:%?6?%;overflow:hidden}.user-like .body .pics .pic uni-image[data-v-0bfc287a]{width:100%;height:100%}.user-like .body .pics .pic[data-v-0bfc287a]:first-child{border-radius:%?20?% 0 0 %?20?%}.user-like .body .pics .pic[data-v-0bfc287a]:last-child{border-radius:0 %?20?% %?20?% 0}.user-like .body .pics .pic.only[data-v-0bfc287a]{border-radius:%?20?%}.user-like .foot[data-v-0bfc287a]{display:flex;justify-content:space-around;align-items:center;margin-top:%?30?%}.user-like .foot > uni-view[data-v-0bfc287a]{display:flex;align-items:center}.user-like .foot > uni-view .iconfont[data-v-0bfc287a]{margin-right:%?4?%}.user-like .foot > uni-view .icon-like-fill[data-v-0bfc287a]{color:#ee2147}.user-like .foot > uni-view .icon-like-fill + uni-text[data-v-0bfc287a]{color:#ee2147}',""]),e.exports=t},"356b":function(e,t,i){"use strict";var n=i("051d"),a=i.n(n);a.a},"3b2d":function(e,t,i){var n=i("acd3");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=i("4f06").default;a("06ffe7ae",n,!0,{sourceMap:!1,shadowMode:!1})},"41ef":function(e,t,i){e.exports=i.p+"static/img/user-bg.47b99c94.png"},"525e":function(e,t,i){"use strict";var n=i("ba97"),a=i.n(n);a.a},"536e":function(e,t,i){"use strict";(function(e){i("7a82");var n=i("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(i("5530")),o=i("cd5d"),r=i("7a0d"),s=e.database(),c={name:"user-comment",props:{item:{type:Object,default:function(){return{}}},ifLast:Boolean},data:function(){return{ifLiked:!1}},computed:{hasLogin:function(){return r.store.hasLogin},userInfo:function(){return r.store.userInfo}},created:function(){this.hasLogin&&this.userIfLiked()},methods:{getName:o.getName,getAvatar:o.getAvatar,userIfLiked:function(){var t=this,i=e.getCurrentUserInfo().uid;s.collection("quanzi_like_comment").where({user_id:i,comment_id:this.item._id}).count().then((function(e){e.result.total&&(t.ifLiked=!0)}))},likeComment:function(){this.hasLogin?(this.ifLiked?this.item.like_count--:this.item.like_count++,this.ifLiked=!this.ifLiked,(0,o.handleLikeComment)(this.item._id)):(0,o.needAuth)()},goUserProfile:function(){uni.navigateTo({url:"/pages/user-profile/user-profile?id="+this.item.user_id[0]._id})},goArticleDetail:function(){uni.navigateTo({url:"/pages/detail/detail?id="+this.item.article_id[0]._id})},goCommentDetail:function(){var e=(0,a.default)((0,a.default)({},this.item),{},{article_id:this.item.article_id[0]._id});uni.setStorageSync("commentItem",e),uni.navigateTo({url:"/pages/comment-detail/comment-detail"})}}};t.default=c}).call(this,i("a9ff")["default"])},"5e22":function(e,t,i){"use strict";var n=i("3b2d"),a=i.n(n);a.a},"61a4":function(e,t,i){var n=i("24fb");t=n(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.user-comment[data-v-566c4cd0]{border-bottom:%?2?% solid #eee;padding:0 %?20?%;padding-top:%?10?%;box-sizing:border-box}.user-comment .userinfo[data-v-566c4cd0]{display:flex;align-items:center}.user-comment .userinfo .avatar[data-v-566c4cd0]{margin-right:%?18?%}.user-comment .userinfo .avatar uni-image[data-v-566c4cd0]{width:%?60?%;height:%?60?%;border-radius:50%}.user-comment .userinfo .info[data-v-566c4cd0]{flex:1}.user-comment .userinfo .info .name[data-v-566c4cd0]{font-size:%?28?%}.user-comment .userinfo .info .time[data-v-566c4cd0]{color:#999;font-size:%?24?%}.user-comment .content[data-v-566c4cd0]{margin:%?10?% 0}.user-comment .article[data-v-566c4cd0]{background-color:#f7f8fa;display:flex;align-items:center;height:%?90?%;font-size:%?24?%}.user-comment .article .article-poster[data-v-566c4cd0]{width:%?90?%;height:%?90?%}.user-comment .article .article-poster uni-image[data-v-566c4cd0]{width:%?90?%;height:%?90?%}.user-comment .article .article-content[data-v-566c4cd0]{padding:%?10?% %?20?%;color:#999;display:-webkit-box;overflow:hidden;text-overflow:ellipsis;-webkit-box-orient:vertical;-webkit-line-clamp:2}.user-comment .operate[data-v-566c4cd0]{display:flex;align-items:center;justify-content:space-between;margin:%?20?% 0}.user-comment .operate > uni-view[data-v-566c4cd0]{flex:1;font-size:%?24?%;color:#666;display:flex;align-items:center;justify-content:center}.user-comment .operate > uni-view .iconfont[data-v-566c4cd0]{margin-right:%?6?%}.user-comment .operate .like.active[data-v-566c4cd0]{color:#ee2147}',""]),e.exports=t},"6bd9":function(e,t,i){"use strict";i.r(t);var n=i("da52"),a=i.n(n);for(var o in n)["default"].indexOf(o)<0&&function(e){i.d(t,e,(function(){return n[e]}))}(o);t["default"]=a.a},"6fec":function(e,t,i){"use strict";i.r(t);var n=i("936b"),a=i.n(n);for(var o in n)["default"].indexOf(o)<0&&function(e){i.d(t,e,(function(){return n[e]}))}(o);t["default"]=a.a},8704:function(e,t,i){"use strict";i.r(t);var n=i("d182"),a=i("bf3c");for(var o in a)["default"].indexOf(o)<0&&function(e){i.d(t,e,(function(){return a[e]}))}(o);i("356b");var r=i("f0c5"),s=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"566c4cd0",null,!1,n["a"],void 0);t["default"]=s.exports},"936b":function(e,t,i){"use strict";(function(e){i("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i("7a0d"),a=i("cd5d"),o=(e.database(),{name:"user-like",props:{item:{type:Object,default:function(){return{}}},ifLast:{type:Boolean,default:!1}},data:function(){return{likeControl:""}},computed:{hasLogin:function(){return n.store.hasLogin}},methods:{focusUser:function(){},goUserProfile:function(){uni.navigateTo({url:"/pages/user-profile/user-profile?id="+this.item.user_id[0]._id})},previewImgs:function(e){uni.previewImage({urls:this.item.article_id[0].pic_urls,current:e})},goDetail:function(){uni.navigateTo({url:"/pages/detail/detail?id="+this.item.article_id[0]._id})},onLike:function(){if(this.hasLogin){var e=Date.now();if(e-this.likeControl<2e3)return void uni.showToast({title:"请勿频繁点击",icon:"none"});this.likeControl=e,this.item.isLiked?this.item.article_id[0].like_count--:this.item.article_id[0].like_count++,this.item.isLiked=!this.item.isLiked,(0,a.handleLike)(this.item.article_id[0]._id)}else(0,a.needAuth)()}}});t.default=o}).call(this,i("a9ff")["default"])},a85a:function(e,t,i){"use strict";i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return o})),i.d(t,"a",(function(){return n}));var n={uSticky:i("bef7").default,uSkeleton:i("c916").default,blog:i("717d7").default,userComment:i("8704").default,userLike:i("c47d").default,uEmpty:i("f697").default,uniLoadMore:i("2a97").default,uActionSheet:i("3787").default},a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"user-profile"},[i("v-uni-view",{ref:"atmosphereBox",staticClass:"atmosphere-bg",style:{backgroundImage:e.bg_url},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onClickAtmosBg.apply(void 0,arguments)}}}),i("v-uni-view",{staticClass:"card"},[i("v-uni-view",{staticClass:"top"},[i("v-uni-view",{staticClass:"user"},[i("v-uni-view",{staticClass:"user-left"},[i("v-uni-image",{staticStyle:{width:"128rpx",height:"128rpx","border-radius":"50%"},attrs:{src:e.avatar_url,mode:"aspectFill"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.previewAvatar.apply(void 0,arguments)}}}),i("v-uni-view",[i("v-uni-text",{staticClass:"nickname"},[e._v(e._s(e.userinfo.nickname||e.userinfo.username||"暂无昵称"))]),i("v-uni-view",[i("v-uni-text",{staticClass:"reg-badge"},[e._v("练习时长"),i("v-uni-text",{staticStyle:{margin:"0 4rpx"}},[e._v(e._s(e.registerDate))]),e._v("天")],1)],1)],1)],1),i("v-uni-view",{staticClass:"user-right"},[e.ifMyself?i("v-uni-text",{staticStyle:{color:"#fff","font-size":"24rpx"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.editProfile.apply(void 0,arguments)}}},[e._v("编辑资料")]):[i("v-uni-text",{directives:[{name:"show",rawName:"v-show",value:!e.ifFocused,expression:"!ifFocused"}],staticStyle:{color:"#fff","font-size":"24rpx"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onClickFocus.apply(void 0,arguments)}}},[e._v("关注")]),i("v-uni-text",{directives:[{name:"show",rawName:"v-show",value:e.ifFocused,expression:"ifFocused"}],staticStyle:{color:"#fff","font-size":"24rpx"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onClickFocus.apply(void 0,arguments)}}},[e._v("已关注")])]],2)],1),i("v-uni-view",{staticClass:"info"},[i("v-uni-view",{staticClass:"line"},[i("v-uni-view",{staticClass:"item"},[i("v-uni-text",{staticClass:"num"},[e._v(e._s(e.beLikedNum))]),e._v("获赞")],1),i("v-uni-view",{staticClass:"item"},[i("v-uni-text",{staticClass:"num"},[e._v(e._s(e.followerNum))]),e._v("粉丝")],1),i("v-uni-view",{staticClass:"item"},[i("v-uni-text",{staticClass:"num"},[e._v(e._s(e.friendNum))]),e._v("关注")],1)],1)],1)],1),i("v-uni-view",{staticClass:"divider"}),i("u-sticky",{attrs:{bgColor:"#fff"}},[i("v-uni-view",{staticClass:"nav-box"},e._l(e.navList,(function(t,n){return i("v-uni-view",{key:t._id,class:e.navType==n?"nav-item active":"nav-item",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onClickNavItem(n)}}},[e._v(e._s(t.name))])})),1)],1),i("v-uni-view",{staticClass:"main"},[0==e.navType?i("v-uni-view",{staticClass:"article-box"},[i("u-skeleton",{attrs:{rows:"5",avatar:!0,title:!0,loading:e.skeletonShow,rowsWidth:"90%"}},[i("v-uni-view",{staticClass:"blog-box"},e._l(e.artList,(function(t,n){return i("blog",{key:t._id,attrs:{item:t,ifLast:n==e.artList.length-1},on:{refresh:function(t){arguments[0]=t=e.$handleEvent(t),e.refresh.apply(void 0,arguments)}}})})),1)],1)],1):1==e.navType?i("v-uni-view",{staticClass:"article-box"},[i("u-skeleton",{attrs:{rows:"5",avatar:!0,title:!0,loading:e.skeletonShow,rowsWidth:"90%"}},[e._l(e.commentList,(function(t,n){return[i("user-comment",{attrs:{item:t,ifLast:n==e.commentList.length-1}})]}))],2)],1):2==e.navType?i("v-uni-view",{staticClass:"article-box"},[i("u-skeleton",{attrs:{rows:"5",avatar:!0,title:!0,loading:e.skeletonShow,rowsWidth:"90%"}},e._l(e.likeList,(function(t,n){return i("user-like",{key:t._id,attrs:{item:t,ifLast:n==e.likeList.length-1},on:{refresh:function(t){arguments[0]=t=e.$handleEvent(t),e.refresh.apply(void 0,arguments)}}})})),1)],1):3==e.navType?i("v-uni-view",{staticClass:"album-box"},e._l(e.albumList,(function(t,n){return i("v-uni-view",{key:t._id,staticClass:"img-box",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.previewUserAlbum(n)}}},[i("v-uni-image",{attrs:{src:t,mode:"aspectFill"}})],1)})),1):e._e(),e.emptyShow?i("u-empty",{attrs:{mode:"data",icon:"http://cdn.uviewui.com/uview/empty/data.png"}}):e._e(),3==e.navType||e.emptyShow?e._e():i("v-uni-view",{staticStyle:{margin:"20rpx 0"}},[i("uni-load-more",{attrs:{status:e.loadMoreStatus}})],1)],1)],1),i("u-action-sheet",{attrs:{actions:e.actionList,cancelText:"取消",show:e.showDrawer,closeOnClickOverlay:!0,closeOnClickAction:!0},on:{close:function(t){arguments[0]=t=e.$handleEvent(t),e.showDrawer=!1},select:function(t){arguments[0]=t=e.$handleEvent(t),e.onActionSelect.apply(void 0,arguments)}}})],1)},o=[]},acd3:function(e,t,i){var n=i("24fb");t=n(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.user-profile[data-v-30bb6203]{width:100%}.user-profile .atmosphere-bg[data-v-30bb6203]{width:100%;height:%?300?%;background-repeat:no-repeat;background-size:100% 100%;background-position:50%}.user-profile .card[data-v-30bb6203]{position:relative;border-radius:%?30?% %?30?% 0 0;-webkit-transform:translateY(%?-20?%);transform:translateY(%?-20?%);z-index:999;background-color:#fff}.user-profile .card .top[data-v-30bb6203]{width:100%;padding:%?30?% 0}.user-profile .card .top .user[data-v-30bb6203]{display:flex;padding:0 %?30?%;align-items:center;justify-content:space-between}.user-profile .card .top .user .user-left[data-v-30bb6203]{display:flex;align-items:center}.user-profile .card .top .user .user-left uni-image[data-v-30bb6203]{margin-right:%?30?%}.user-profile .card .top .user .user-left .nickname[data-v-30bb6203]{font-size:%?36?%;font-weight:700}.user-profile .card .top .user .user-left .reg-badge[data-v-30bb6203]{background-color:#e8f6ff;color:#4f606a;font-size:%?24?%;padding:%?6?% %?10?%;border-radius:%?10?%;margin-top:%?4?%}.user-profile .card .top .user .user-right[data-v-30bb6203]{width:%?126?%;height:%?50?%;background-color:#39a2a1;border-radius:%?25?%;text-align:center;display:flex;align-items:center;justify-content:center}.user-profile .card .top .info[data-v-30bb6203]{padding:0 %?30?%;margin-top:%?20?%}.user-profile .card .top .info .line[data-v-30bb6203]{display:flex}.user-profile .card .top .info .line .item[data-v-30bb6203]{font-size:%?28?%;margin-right:%?36?%;color:#aaa}.user-profile .card .top .info .line .item .num[data-v-30bb6203]{font-size:%?36?%;color:#333;margin-right:%?4?%}.user-profile .card .divider[data-v-30bb6203]{width:100%;height:%?10?%;background-color:#f5f5f5}.user-profile .card[data-v-30bb6203] .u-sticky{top:0!important}.user-profile .card .nav-box[data-v-30bb6203]{display:flex;margin:0 auto;justify-content:space-around;align-items:center;height:%?88?%;padding-bottom:%?20?%;border-bottom:%?2?% solid #efefef}.user-profile .card .nav-box .nav-item[data-v-30bb6203]{color:#999;font-size:%?32?%;padding:%?24?% %?36?% 0}.user-profile .card .nav-box .active[data-v-30bb6203]{color:#39a2a1;font-size:%?36?%;font-weight:700;position:relative}.user-profile .card .nav-box .active[data-v-30bb6203]::after{position:absolute;bottom:%?-18?%;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);content:"";width:%?36?%;height:%?6?%;background-color:#39a2a1;border-radius:%?2.5?%}.user-profile .card .main .article-box[data-v-30bb6203]{padding:%?20?%}.user-profile .card .main .album-box[data-v-30bb6203]{padding:%?16?%;display:grid;grid-template-columns:repeat(3,1fr);grid-column-gap:%?10?%;padding-bottom:%?50?%}.user-profile .card .main .album-box .img-box[data-v-30bb6203]{height:%?220?%;margin:0 0 %?10?%}.user-profile .card .main .album-box .img-box uni-image[data-v-30bb6203]{width:100%;height:100%}',""]),e.exports=t},ba6c:function(e,t,i){"use strict";i.r(t);var n=i("a85a"),a=i("6bd9");for(var o in a)["default"].indexOf(o)<0&&function(e){i.d(t,e,(function(){return a[e]}))}(o);i("5e22");var r=i("f0c5"),s=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"30bb6203",null,!1,n["a"],void 0);t["default"]=s.exports},ba97:function(e,t,i){var n=i("3063");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=i("4f06").default;a("f0cf0752",n,!0,{sourceMap:!1,shadowMode:!1})},bf3c:function(e,t,i){"use strict";i.r(t);var n=i("536e"),a=i.n(n);for(var o in n)["default"].indexOf(o)<0&&function(e){i.d(t,e,(function(){return n[e]}))}(o);t["default"]=a.a},c47d:function(e,t,i){"use strict";i.r(t);var n=i("e67f"),a=i("6fec");for(var o in a)["default"].indexOf(o)<0&&function(e){i.d(t,e,(function(){return a[e]}))}(o);i("525e");var r=i("f0c5"),s=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"0bfc287a",null,!1,n["a"],void 0);t["default"]=s.exports},d182:function(e,t,i){"use strict";i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return o})),i.d(t,"a",(function(){return n}));var n={uniDateformat:i("453e").default},a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"user-comment",style:{borderBottom:e.ifLast?"none":"2rpx solid #eee"}},[i("v-uni-view",{staticClass:"userinfo"},[i("v-uni-view",{staticClass:"avatar",on:{click:function(t){t.stopPropagation(),arguments[0]=t=e.$handleEvent(t),e.goUserProfile.apply(void 0,arguments)}}},[i("v-uni-image",{attrs:{src:e.getAvatar(e.item),mode:"aspectFill"}})],1),i("v-uni-view",{staticClass:"info",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.goCommentDetail.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"name"},[e._v(e._s(e.getName(e.item)))]),i("v-uni-view",{staticClass:"time"},[i("uni-dateformat",{attrs:{date:e.item.comment_date,threshold:[18e4,864e5],format:"MM/dd"}})],1)],1)],1),i("v-uni-view",{staticClass:"content",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.goCommentDetail.apply(void 0,arguments)}}},[e._v(e._s(e.item.comment_content))]),i("v-uni-view",{staticClass:"article",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.goArticleDetail.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"article-poster"},[i("v-uni-image",{attrs:{src:e.item.article_id[0].pic_urls[0],mode:"aspectFill"}})],1),i("v-uni-view",{staticClass:"article-content"},[e._v(e._s(e.item.article_id[0].title))])],1),i("v-uni-view",{staticClass:"operate"},[i("v-uni-view",{staticClass:"share"},[i("v-uni-text",{staticClass:"iconfont icon-share1"}),i("v-uni-text",{staticClass:"comment-count"},[e._v("分享")])],1),i("v-uni-view",{staticClass:"comment",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.goCommentDetail.apply(void 0,arguments)}}},[i("v-uni-text",{staticClass:"iconfont icon-comment1"}),i("v-uni-text",{staticClass:"comment-count"},[e._v(e._s(e.item.reply_count||"评论"))])],1),i("v-uni-view",{staticClass:"like",class:e.ifLiked?"active":"",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.likeComment.apply(void 0,arguments)}}},[i("v-uni-text",{staticClass:"iconfont icon-good"}),i("v-uni-text",{staticClass:"like-count"},[e._v(e._s(e.item.like_count||"点赞"))])],1)],1)],1)},o=[]},da52:function(e,t,i){"use strict";(function(e){i("7a82");var n=i("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(i("c7eb")),o=n(i("1da1")),r=n(i("2909"));i("b64b"),i("a434"),i("99af"),i("d3b7"),i("159b"),i("14d9"),i("d81d"),i("c740");var s=i("cd5d"),c=i("7a0d"),l=n(i("41ef")),u=e.database(),d={data:function(){return{navType:0,navList:[{name:"发布"},{name:"评论"},{name:"点赞"},{name:"相册"}],info:{},ifEmpty:!0,ifFocused:!1,ifMyself:!1,uid:"",focusQuery:{friend_uid:"",follow_uid:""},followerNum:0,beLikedNum:0,friendNum:0,userinfo:{avatar_file:{url:""},profile_bg:{url:""}},showDrawer:!1,actionList:[{name:"更换背景",type:"changeBg"},{name:"保存图片",type:"saveBg"}],userIP:"",artList:[],commentList:[],likeList:[],albumList:[],skeletonShow:!0,throttle:!0,loadMoreStatus:"",ifNoMore:!1,emptyShow:!1}},onLoad:function(e){console.log("params: ",e,Object.keys(e).length),this.uid=e.id,this.artList=[],this.ifNoMore=!1,this.skeletonShow=!0,this.getUserPublish(),this.init()},onShow:function(){this.getUserInfo(),this.hasLogin?this.uid==e.getCurrentUserInfo().uid?this.ifMyself=!0:(this.getIfFocused(),this.actionList.splice(0,1)):this.actionList.splice(0,1),this.getFollowerNum()},onReachBottom:function(){if(this.loadMoreStatus="loading",this.ifNoMore)this.loadMoreStatus="noMore";else switch(this.navType){case 0:this.getUserPublish();break;case 1:this.getUserComment();break;case 2:this.getUserLike();break;case 3:return void(this.loadMoreStatus="noMore");default:break}},computed:{registerDate:function(){if(this.userinfo.register_date){var e=Date.now()-this.userinfo.register_date;return Math.floor(e/1e3/3600/24)}return 0},hasLogin:function(){return c.store.hasLogin},avatar_url:function(){var e,t;return null!==(e=null===(t=this.userinfo.avatar_file)||void 0===t?void 0:t.url)&&void 0!==e?e:"../../static/imgs/avatar_default.png"},bg_url:function(){var e;return null!==(e=this.userinfo.profile_bg)&&void 0!==e&&e.url?"url(".concat(this.userinfo.profile_bg.url,")"):"url(../../static/imgs/user-bg.png)"}},methods:{getUserComment:function(){var e=this,t=u.collection("quanzi-comment").where("user_id == '".concat(this.uid,"' && comment_type == 0")).getTemp(),i=u.collection("quanzi-article").where("del_state != true").field("_id,title,pic_urls").getTemp(),n=u.collection("uni-id-users").field("_id,username,nickname,avatar_file").getTemp();u.collection(t,i,n).skip(this.commentList.length).limit(5).get().then((function(t){if(console.log("getUserComment: ",t),0==t.result.data.length)return e.ifNoMore=!0,e.loadMoreStatus="noMore",e.skeletonShow=!1,void(e.emptyShow=!0);e.commentList=[].concat((0,r.default)(e.commentList),(0,r.default)(t.result.data)),e.skeletonShow=!1}))},getUserLike:function(){var e=this,t=u.collection("quanzi_like").where("user_id == '".concat(this.uid,"'")).getTemp(),i=u.collection("quanzi-article").where("del_state != true").field("_id,user_id,view_count,like_count,comment_count,publish_date,title,content,desc,pic_urls,province").getTemp(),n=u.collection("uni-id-users").field("_id,username,nickname,avatar_file").getTemp();u.collection(t,i,n).skip(this.likeList.length).limit(5).get().then(function(){var t=(0,o.default)((0,a.default)().mark((function t(i){var n,o;return(0,a.default)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(console.log("getUserLike: ",i),0!=i.result.data.length){t.next=7;break}return e.ifNoMore=!0,e.loadMoreStatus="noMore",e.skeletonShow=!1,e.emptyShow=!0,t.abrupt("return");case 7:return e.likeList=[].concat((0,r.default)(e.likeList),(0,r.default)(i.result.data)),n=[],e.likeList.forEach((function(t){e.$set(t,"isLiked",!0),t.user_id[0]._id==e.uid&&e.$set(t,"isMyself",!0),n.push(t.article_id[0].user_id)})),t.next=12,u.collection("uni-id-users").where({_id:u.command.in(n)}).field("_id,nickname,username,avatar_file").get();case 12:o=t.sent,o=o.result.data,e.likeList.forEach((function(e){o.forEach((function(t){t._id==e.article_id[0].user_id&&(e.user_id=[t])}))})),e.skeletonShow=!1;case 16:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},getUserAlbum:function(){var e=this;u.collection("quanzi-article").where("user_id == '".concat(this.uid,"'")).field("_id,pic_urls").get().then((function(t){console.log("getUserAlbum: ",t),t.result.data.map((function(t){var i;t.pic_urls.length&&(i=e.albumList).push.apply(i,(0,r.default)(t.pic_urls))})),e.albumList.length||(e.emptyShow=!0)}))},previewUserAlbum:function(e){uni.previewImage({urls:this.albumList,current:e})},refresh:function(){this.artList=[],this.getUserPublish()},getUserPublish:function(){var t=this;if(this.throttle){this.throttle=!1;var i=u.collection("quanzi-article").where('del_state != true && user_id == "'.concat(this.uid,'"')).field("user_id,view_count,like_count,comment_count,publish_date,title,content,desc,pic_urls,province").getTemp(),n=u.collection("uni-id-users").field("_id,nickname,username,avatar_file").getTemp();u.collection(i,n).orderBy("publish_date desc").skip(this.artList.length).limit(5).get().then(function(){var i=(0,o.default)((0,a.default)().mark((function i(n){var o,s,c;return(0,a.default)().wrap((function(i){while(1)switch(i.prev=i.next){case 0:if(console.log("getUserPublish: ",n),o=[],0!=n.result.data.length){i.next=9;break}return t.ifNoMore=!0,t.loadMoreStatus="noMore",t.skeletonShow=!1,t.throttle=!0,t.emptyShow=!0,i.abrupt("return");case 9:if(s=[].concat((0,r.default)(t.artList),(0,r.default)(n.result.data)),s.forEach((function(e){e.isLiked=!1,o.push(e._id)})),!t.hasLogin){i.next=16;break}return i.next=14,u.collection("quanzi_like").where({article_id:u.command.in(o),user_id:e.getCurrentUserInfo().uid}).get();case 14:c=i.sent,c.result.data.forEach((function(e){var t=s.findIndex((function(t){return t._id==e.article_id}));s[t].isLiked=!0}));case 16:t.artList=s,t.skeletonShow=!1,t.throttle=!0,console.log("文章列表: ",t.artList);case 20:case"end":return i.stop()}}),i)})));return function(e){return i.apply(this,arguments)}}())}},onClickNavItem:function(e){var t=this;console.log(e),this.navType=e,this.ifNoMore=!1,this.skeletonShow=!0,this.emptyShow=!1,setTimeout((function(){switch(e){case 0:t.artList=[],t.getUserPublish();break;case 1:t.commentList=[],t.getUserComment();break;case 2:t.likeList=[],t.getUserLike();break;case 3:t.albumList=[],t.getUserAlbum();break;default:break}}),10)},previewAvatar:function(){uni.previewImage({urls:[this.avatar_url],loop:!0})},onActionSelect:function(t){this.showDrawer=!1,console.log(t),"changeBg"==t.type?uni.navigateTo({url:"/pages/change-profileBg/change-profileBg?id="+e.getCurrentUserInfo().uid}):"saveBg"==t.type&&this.saveImg(this.userinfo.profile_bg?this.userinfo.profile_bg.url:l.default)},saveImg:function(e){var t=document.createElement("a");t.download="",t.href=e,document.body.appendChild(t),t.click(),t.remove()},init:function(){this.getFocusNum(),this.getBeLikedNum()},getUserInfo:function(){var e=this;u.collection("uni-id-users").doc(this.uid).field("_id,username,nickname,register_date,last_login_ip,avatar_file,profile_bg").get({getOne:!0}).then((function(t){console.log("getUserInfo::: ",t),e.userinfo=t.result.data}))},getIfFocused:function(){var e=this;u.collection("quanzi-focus").where("friend_uid == '".concat(this.uid,"' && follow_uid == $cloudEnv_uid")).get().then((function(t){console.log("getIfFocused res: ",t),t.result.data.length&&(e.ifFocused=!0)}))},getFocusNum:function(){var e=this;u.collection("quanzi-focus").where("follow_uid == '".concat(this.uid,"'")).count().then((function(t){console.log("getFocusNum::: ",t),e.friendNum=t.result.total}))},getFollowerNum:function(){var e=this;u.collection("quanzi-focus").where("friend_uid == '".concat(this.uid,"'")).count().then((function(t){console.log("getFollowerNum::: ",t),e.followerNum=t.result.total}))},getBeLikedNum:function(){var e=this;u.collection("quanzi-article").groupBy("user_id").groupField("sum(like_count) as articleLikedNum").get().then((function(t){console.log("getBeLikedNum: ",t);var i=t.result.data;i.map((function(t){t.user_id==e.uid&&(e.beLikedNum=t.articleLikedNum)}))}))},onClickAtmosBg:function(){this.showDrawer=!0},onClickFocus:function(){var t=this;this.hasLogin?(this.focusQuery.friend_uid=this.uid,this.focusQuery.follow_uid=e.getCurrentUserInfo().uid,this.ifFocused?u.collection("quanzi-focus").where("friend_uid == '".concat(this.focusQuery.friend_uid,"' && follow_uid == '").concat(this.focusQuery.follow_uid,"'")).remove().then((function(e){console.log("取关res: ",e),t.getFollowerNum(),t.ifFocused=!1,uni.showToast({title:"取关成功",icon:"none"})})):u.collection("quanzi-focus").add(this.focusQuery).then((function(e){console.log("关注res: ",e),t.ifFocused=!0,t.getFollowerNum(),uni.showToast({title:"关注成功",icon:"none"})}))):(0,s.needAuth)()},editProfile:function(){uni.navigateTo({url:"/uni_modules/uni-id-pages/pages/userinfo/userinfo"})}}};t.default=d}).call(this,i("a9ff")["default"])},e67f:function(e,t,i){"use strict";i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return o})),i.d(t,"a",(function(){return n}));var n={uniDateformat:i("453e").default,uIcon:i("0b50").default},a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"user-like",style:{borderBottom:e.ifLast?"none":"#F8F8F8 solid 10rpx"}},[i("v-uni-view",{staticClass:"head"},[i("v-uni-view",{staticClass:"left"},[e.item.user_id?i("v-uni-view",{staticClass:"avatar",on:{click:function(t){t.stopPropagation(),arguments[0]=t=e.$handleEvent(t),e.goUserProfile.apply(void 0,arguments)}}},[i("v-uni-image",{attrs:{src:e.item.user_id[0].avatar_file?e.item.user_id[0].avatar_file.url:"../../static/imgs/avatar_default.png",mode:"aspectFit"}})],1):e._e(),e.item.user_id?i("v-uni-view",{staticClass:"nickname"},[e._v(e._s(e.item.user_id[0].nickname||e.item.user_id[0].username||"匿名"))]):e._e(),i("uni-dateformat",{attrs:{date:e.item.article_id[0]&&e.item.article_id[0].publish_date,threshold:[6e4,2592e6]}})],1),e.item.isMyself?e._e():i("v-uni-view",{staticClass:"right",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.focusUser.apply(void 0,arguments)}}},[i("u-icon",{attrs:{name:"plus",size:"12",labelColor:"#FF8200",labelSize:"12",color:"#FF8200",label:"关注"}})],1)],1),i("v-uni-view",{staticClass:"body"},[i("v-uni-view",{staticClass:"title",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.goDetail.apply(void 0,arguments)}}},[e._v(e._s(e.item.article_id[0]&&e.item.article_id[0].title))]),e.item.article_id[0]&&e.item.article_id[0].desc?i("v-uni-view",{staticClass:"abstract",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.goDetail.apply(void 0,arguments)}}},[e._v(e._s(e.item.article_id[0]&&e.item.article_id[0].desc))]):e._e(),e.item.article_id[0]&&e.item.article_id[0].pic_urls.length?i("v-uni-view",{staticClass:"pics"},e._l(e.item.article_id[0]&&e.item.article_id[0].pic_urls,(function(t,n){return i("v-uni-view",{key:t,staticClass:"pic",class:e.item.article_id[0]&&1==e.item.article_id[0].pic_urls.length?"only":""},[i("v-uni-image",{attrs:{src:t,mode:"aspectFill"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.previewImgs(n)}}})],1)})),1):e._e()],1),i("v-uni-view",{staticClass:"foot"},[i("v-uni-view",[i("v-uni-text",{staticClass:"iconfont icon-eye"}),i("v-uni-text",[e._v(e._s(e.item.article_id[0]&&e.item.article_id[0].view_count))])],1),i("v-uni-view",[i("v-uni-text",{staticClass:"iconfont icon-message",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.goDetail.apply(void 0,arguments)}}}),i("v-uni-text",[e._v(e._s(e.item.article_id[0]&&e.item.article_id[0].comment_count))])],1),i("v-uni-view",{on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onLike.apply(void 0,arguments)}}},[i("v-uni-text",{staticClass:"iconfont",class:e.item.isLiked?"icon-like-fill":"icon-like"}),i("v-uni-text",[e._v(e._s(e.item.article_id[0]&&e.item.article_id[0].like_count))])],1)],1)],1)},o=[]}}]);