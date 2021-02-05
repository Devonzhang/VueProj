<template>
  <div class="goods">

    <!-- 菜单分类 -->
    <div class="menu-wrapper" ref="menuScroll">
      <ul>
        <!-- 专场 -->
        <li class="menu-item" >
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
    <div class="foods-wrapper" ref="foodScroll">
      <ul>
        <!-- 专场 -->
        <li class="container-list">
          <div v-for="item in container.operation_source_list">
            <img :src="item.pic_url">
          </div>
        </li>
        <!-- 具体分类 -->
        <li v-for="item in goods" class="food-list">
          <!-- 具体商品 -->
          <h3 class="title">{{item.name}}</h3>
          <!-- 具体商品列表 -->
          <ul>
            <li v-for="food in item.spus" class="food-item">
              <div class="icon" :style="head_bg(food.picture)"></div>
              <div class="content">
                <h3 class="name">{{food.name}}</h3>
                <p class="desc" v-if="food.description">{{food.description}}</p>
                <div class="extra">
                  <span class="saled">{{food.month_saled_content}}</span>
                  <span class="praise">{{food.praise_content}}</span>
                </div>
                <img :src="food.product_label_picture" class="product">
                <p class="price">
                  <span class="text">￥{{food.min_price}}</span>
                  <span class="unit">/{{food.unit}}</span>
                </p>
              </div>
            </li>

          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// 导入BScroll
import BScroll from 'better-scroll';
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

        // 调用滚动的初始化方法
        // that.initScroll();
        // 开始时，DOM元素没有渲染，即高度时有问题的
        // 在获取到数据后，并且DOM已经被渲染，表示列表高度是没有问题的

        // this.nextTick
        that.$nextTick(()=>{
          // DOM已经更新
          that.initScroll();

        });





      }
    })
    .catch(function(error){// 出错处理
      console.log(error);
    })
  },
  computed:{// 计算属性 不能传参


  },
  methods: {
    head_bg(imgName){
      return "background-image: url("+imgName+")"

    },
    // 滚动初始化
    initScroll(){
      // ref属性就是用来绑定某个DOM元素、某个组件的，然后在 this.$ref 找到
      new BScroll(this.$refs.menuScroll);
      new BScroll(this.$refs.foodScroll);
    }

  },

  }
</script>

<style>
@import url("Goods.css");


</style>
