import { reqCategoryList, reqGetBannerList, reqGetFloorList } from "@/api";

// home模块下的小仓库
const state = {
  // state中数据默认初始值不要乱写，[根据接口返回值初始化的]
  categoryList: [],
  bannerList: [],
  floorList:[]
};
const mutations = {
  CATEGORYLIST(state, categoryList) {
    state.categoryList = categoryList;
    state.categoryList.length = 16;
  },
  GETBANNERLIST(state, bannerList) {
    state.bannerList = bannerList;
  },
  GETFLOORLIST(state,floorList) {
    state.floorList = floorList;
  }
};

const actions = {
  // 通过API里面的接口函数调用，向服务器发送请求，获取服务器的数据
  async categoryList({ commit }) {
    let result = await reqCategoryList();
    if (result.code == 200) {
      commit("CATEGORYLIST", result.data);
    }
  },
  // 获取首页banner数据
  async getBannerList({ commit }) {
    let result = await reqGetBannerList();
    
    if (result.code == 200) {
      commit("GETBANNERLIST", result.data);
    }
  },
  // 获取floor数据
  async getFloorList({ commit }) {
    let result = await reqGetFloorList();
    if (result.code == 200) {
      commit("GETFLOORLIST", result.data);
    }
},
}
const getters = {};

export default {
  // namespaced:true,
  state,
  mutations,
  actions,
  getters,
};
