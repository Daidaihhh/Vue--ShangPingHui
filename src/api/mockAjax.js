//axios二次封装
import axios from "axios";
// 引入进度条
import nprogress from "nprogress";

// 引入进度条样式
import "nprogress/nprogress.css";


// 1.利用axios对象的方法create，创建一个axios实例；
//2. request就是axios
const requests = axios.create({
    // 配置对象
    // 基础路径，发请求的时候，路径当中会出现api
    baseURL:"/mock",
    timeout:5000,
})

//请求拦截器
requests.interceptors.request.use((config)=>{
    //config：配置对象，对象里有个属性（hheaders请求头）

    // 进度条开始动
    nprogress.start();
    return config;
});

// 响应拦截器
requests.interceptors.response.use((res)=>{
  //成功的回调函数：服务器相应数据回来以后，响应拦截器可以监测到
    //   进度条结束
    nprogress.done()

  return res.data
},
(err)=>{
    alert(err.message);
    // 响应失败的回调函数
    return Promise.reject(new Error('faile'))

})

// 对外暴露
export default requests;