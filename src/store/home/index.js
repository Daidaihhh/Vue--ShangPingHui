import {reqCategoryList} from '@/api';

// home模块下的小仓库
const state = {
  // state中数据默认初始值不要乱写，[根据接口返回值初始化的]
  categoryList:[],
};
const mutations = {
  CATEGORYLIST(state,categoryList){
      state.categoryList = categoryList;
  }
};

const actions = {
  // 通过API里面的接口函数调用，向服务器发送请求，获取服务器的数据
  async categoryList({commit}){
    let result = await reqCategoryList();
    if(result.code == 200){
      commit("CATEGORYLIST",result.data);
    }
  }
  
};
const getters = {};

export default {
  state,
  mutations,
  actions,
  getters,
};
