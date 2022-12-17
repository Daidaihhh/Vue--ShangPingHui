import Vue from 'vue';
import Vuex from "vuex";

Vue.use(Vuex);
// 引入小仓库
import home from './home';
import search from './search';
import detail from './detail';

export default new Vuex.Store({
  // 实现vuex仓库模块化开发存储数据
    modules:{
      home,
      search,
      detail
    }
});