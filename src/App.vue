<template>
  <div id="app">
    <Header></Header>
    <!-- 路由组件出口 -->
    <router-view></router-view>

    <Footer v-show="$route.meta.show"></Footer>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'


export default {
  name: 'App',
  components: {
   Header,
   Footer
  },
  mounted() {
    // 通知Vuex发请求，回去数据，存储在仓库中
    // 获取商品三级分类的数据
    this.$store.dispatch("categoryList");
  }
}
</script>

<style>

</style>
