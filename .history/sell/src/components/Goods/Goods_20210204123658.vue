<template>
  <div class="goods">

    <!-- 菜单分类 -->
    <div class="menu-wrapper"></div>

    <!-- 商品列表 -->
    <div class="foods-wrapper"></div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        container:{},
        goods:[]
}
    },
    created(){
    var that = this;
    // 发起异步请求，获取数据
    this.$axios.get('/api/goods')
    .then(function(response){// 获取到数据
    // 通过axios发起get请求
      // console.log(response);
      var dataSource=response.data.data;
      // console.log(dataSource)
      if(dataSource.code==0){
        that.container = dataSource.data.container_operation_source;
        that.goods = dataSource.data.food_spu_tags;
        console.log(that.container)
        console.log(that.goods)



      }
    })
    .catch(function(error){// 出错处理
      console.log(error);
    })
  }

  }
</script>

<style>
@import url("Goods.css");


</style>
