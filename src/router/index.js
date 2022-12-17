// 配置路由的页面
import Vue from 'vue';
import VueRouter from 'vue-router';

// 使用插件
Vue.use(VueRouter);

import routes from './routes';

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}


// 配置
export default new VueRouter({
  // 配置路由
  routes,
  // 滚动行为
  scrollBehavior(to,from,savePosition) {
    return {y:0}
  }
});

