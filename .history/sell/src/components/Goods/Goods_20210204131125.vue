<template>
  <div class="goods">

    <!-- 菜单分类 -->
    <div class="menu-wrapper">
      <ul>
        <!-- 专场 -->
        <li class="menu-item">
          <p class="text">
            <img :src="container.tag_icon" v-if="container.tag_icon" class="icon">
            {{container.tag_name}}
          </p>
        </li>
        <li class="menu-item" v-for="item in goods">
          <p class="text">
            <img :src="item.icon" v-if="item.icon" class="icon">
            {{item.name}}
          </p>
        </li>
      </ul>
    </div>

    <!-- 商品列表 -->
    <div class="foods-wrapper">
      <ul>
        <!-- 具体分类 -->
        <li v-for="item in goods">
          <!-- 具体商品 -->
          <h3 class="title">{{item.name}}</h3>
          <!-- 具体商品列表 -->
          <ul>
            <li v-for="food in item.spus">
              <div class="icon" :style="head_bg(food.picture)"></div>
              <div class="content"></div>
            </li>

          </ul>
        </li>
      </ul>
    </div>
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
        // console.log(that.container)
        // console.log(that.goods)



      }
    })
    .catch(function(error){// 出错处理
      console.log(error);
    })
  },
  computed:{// 计算属性 不能传参


  },
  method: {
    head_bg(imgName){
      return "background-image: url("+imgName+")"

    }

  },

  }
</script>

<style>
@import url("Goods.css");


</style>
