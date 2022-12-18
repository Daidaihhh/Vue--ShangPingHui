// 配置路由的页面
import Vue from 'vue';
import VueRouter from 'vue-router';
import routers from "./routers";

// 使用插件
Vue.use(VueRouter);

// 重写push和replace
let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.push;
VueRouter.prototype.push = function(location, resolve, reject) {
    if (resolve && reject) {
        originPush.call(this, location, resolve, reject);
    } else {
        originPush.call(
            this,
            location,
            () => {},
            () => {}
        );
    }
};
VueRouter.prototype.replace = function(location, resolve, reject) {
    if (resolve && reject) {
        originReplace.call(this, location, resolve, reject);
    } else {
        originReplace.call(
            this,
            location,
            () => {},
            () => {}
        );
    }
};



// 配置
export default new VueRouter({
  // 配置路由
  routes:routers,
  // 滚动行为
  scrollBehavior(to,from,savePosition) {
    return {y:0}
  }
});

