<template>
  <div id="app">

    <!-- 头部 -->
    <Myheader></Myheader>

    <!-- 导航 -->
    <Mynav></Mynav>

    <!-- 主体内容 -->
    <!-- <div class="content">
      content

    </div> -->
    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view></router-view>

  </div>
</template>

<script>
// 1. 导入
import Myheader from './components/Header/Header';
import Mynav from './components/Nav/Nav';



export default {
  name: 'App',
  components: {// 2. 注册
    Myheader,
    Mynav

  },
  data(){
    return{
      // header组件需要的信息（商家信息）
      poiInfo:{

      }
    }
  },
  created(){
    // 发起异步请求，获取数据
    this.$axios.get('/api/goods')
    .then(function(response){// 获取到数据
    // 通过axios发起get请求
      console.log(response);
    })
    .catch(function(error){// 出错处理
      console.log(error);
    })
  }
}
</script>

<style>



</style>
