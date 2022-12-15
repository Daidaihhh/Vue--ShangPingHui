//当前模块是用来统一管理API的
import requests from './request';
import mockRequests from './mockAjax';

//发请求：axios发请求返回结果Promise对象
export const reqCategoryList = () => requests.get("/product/getBaseCategoryList");

//获取banner（Home首页轮播图接口）
export const reqGetBannerList = () => mockRequests.get("/banner");

// 获取floor数据
export const reqGetFloorList = () => mockRequests.get("/floor");

// 获取搜索模块数据 地址:/api/list  请求方式post  要带参数
// 当前接口，给服务器传递参数params，至少得是空对象；
// 向服务器请求数据，若有数据，返回对象；没有数据，返回空对象
export const reqGetSearchInfo = (params) => {
    return requests({
        url:'/list',
        method:'POST',
        data:params
    })
}

