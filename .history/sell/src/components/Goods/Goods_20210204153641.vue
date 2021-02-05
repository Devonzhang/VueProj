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
        <li class="menu-item" v-for="(item,index) in goods" :class="{'current':currentIndex===index}">
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
        <li class="container-list food-list-hook">
          <div v-for="item in container.operation_source_list">
            <img :src="item.pic_url">
          </div>
        </li>
        <!-- 具体分类 -->
        <li v-for="item in goods" class="food-list food-list-hook">
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
        goods:[],
        listHeight:[],
        scroolY: 0,
        menuScroll:{},
        foodScroll:{},
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

          // 计算分类区间高度
          that.calculateHeight();

        });





      }
    })
    .catch(function(error){// 出错处理
      console.log(error);
    })
  },
  computed:{// 计算属性 不能传参
    currentIndex(){
      // 根据右侧滚动位置确定对应索引下标
      for (let i=0; i<this.listHeight.length;i++){
        let height1 = this.listHeight[i];
        console.log(height1);
        let height2 = this.listHeight[i+1];
        console.log(height2);

        if (this.scroolY>=height1 && this.scroolY<height2){
          console.log(i);
          return i;
        }
        return 0;
      }
    }


  },
  methods: {
    head_bg(imgName){
      return "background-image: url("+imgName+")"

    },
    // 滚动初始化
    initScroll(){
      // ref属性就是用来绑定某个DOM元素、某个组件的，然后在 this.$ref 找到
      this.menuScroll = new BScroll(this.$refs.menuScroll);
      this.foodScroll = new BScroll(this.$refs.foodScroll,{
        probeType:3
      });

      // 添加滚动监听事件
      this.foodScroll.on('scroll',(pos)=>{
        // console.log(pos.y)
        this.scroolY = Math.abs(Math.round(pos.y));
        // console.log(this.scroolY)


      })
    },
    calculateHeight(){
      // 通过$refs获取到对应元素
      let foodlist = this.$refs.foodScroll.getElementsByClassName('food-list-hook')
      // 添加到数组区间
      // 0-216 第一个区间(专场)
      // 217-1342 第二个区间（热销）
      let height = 0;
      this.listHeight.push(height);
      for (let i = 0; i<foodlist.length;i++){
        let item =foodlist[i];
        height += item.clientHeight;
        this.listHeight.push(height);
      }



    }

  },

  }
</script>

<style>
@import url("Goods.css");


</style>
