//当前模块是用来统一管理API的
import requests from './request';
import mockRequests from './mockAjax';


//发请求：axios发请求返回结果Promise对象
export const reqCategoryList = () => requests.get("/product/getBaseCategoryList");
//获取banner（Home首页轮播图接口）
export const reqGetBannerList = () => mockRequests.get("/banner");

// 获取floor数据

export const reqGetFloorList = () => mockRequests.get("/floor");
