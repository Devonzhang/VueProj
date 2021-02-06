<template>
  <div id="app">

    <!-- 头部 -->
    <Myheader :poiInfo="poiInfo"></Myheader>

    <!-- 导航 -->
    <Mynav :commentNum="commentNum"></Mynav>

    <!-- 主体内容 -->
    <!-- <div class="content">
      content

    </div> -->
    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <keep-alive>

      <router-view></router-view>
    </keep-alive>

  </div>
</template>

<script>
// 1. 导入
import Myheader from 'components/Header/Header';
import Mynav from 'components/Nav/Nav';



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

      },
      commentNum:0
    }
  },
  created(){
    var that = this;
    // 发起异步请求，获取数据
    // Goods数据获取
    this.$axios.get('/api/goods')
    .then(function(response){// 获取到数据
    // 通过axios发起get请求
      // console.log(response);
      var dataSource=response.data.data;
      // console.log(dataSource)
      if(dataSource.code==0){
        that.poiInfo = dataSource.data.poi_info;
        // console.log(that.poiInfo)

      }
    })
    .catch(function(error){// 出错处理
      console.log(error);
    })
    // Ratings数据获取
    this.$axios.get('/api/ratings')
    .then(function(response){// 获取到数据
    // 通过axios发起get请求
      // console.log(response);
      var dataSource=response.data.data;
      // console.log(dataSource)
      if(dataSource.code==0){
        that.commentNum = dataSource.data.comment_num;
        // console.log(that.poiInfo)

      }
    })
    .catch(function(error){// 出错处理
      console.log(error);
    })
  }
}
</script>

<style>
</style>
