import { reqGetSearchInfo } from "@/api";

// search模块下的小仓库
const state = {
  searchList:{},
};
const mutations = {
  GETSEARCHLIST(state,searchList){
    state.searchList = searchList;
  }
};
const actions = {
    async getSearchList({commit},params = {}) {
      let result = await reqGetSearchInfo(params);
      if(result.code == 200) {
        commit("GETSEARCHLIST",result.data)
      }
    }
};
// 相当于计算属性，getters为了简化数据
const getters = {
  // 当前形参state是这个小仓库的state
  goodsList(state){
    return state.searchList.goodsList||[];
    // 如果有数据，则正确返回数组；网络不给力，返回undefined；计算新的属性的属性值至少来一个数组；
  },
  trademarkList(state){
    return state.searchList.trademarkList;
  },
  attrsList(state){
    return state.searchList.attrsList;
  },

};

export default{
  state,
  mutations,
  actions,
  getters,
}