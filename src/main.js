import Vue from 'vue'
import App from './App.vue'
// 引入路由
import router from '@/router';
// 引入仓库
import store from '@/store'

// 三级联动组件——全局组件
import TypeNav from '@/components/TypeNav'
import Carousel from '@/components/Carousel'
import Pagination from '@/components/Pagination'

// 第一个参数：全局组件名字，第二个参数：那一个组件
Vue.component(TypeNav.name,TypeNav);
Vue.component(Carousel.name,Carousel);
Vue.component(Pagination.name,Pagination);

Vue.config.productionTip = false

// 引入mock数据
import '@/mock/mockServe'

// 引入swiper
import "swiper/css/swiper.css" 



new Vue({
  render: h => h(App),
  // 注册路由：kv一致，省略v

  // 配置全局事件总线
  beforeCreate() {
      Vue.prototype.$bus = this;
  },
  router,
  store
}).$mount('#app')
