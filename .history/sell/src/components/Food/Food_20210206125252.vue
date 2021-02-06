<template>
  <transition name="detail">
    <div class="food" v-show="showFlag" ref="foodView">
      <div class="food-wrapper">
        <div class="food-content">
          <div class="img-wrapper">
            <img :src="food.picture" class="food-img">
            <span class="close-bt icon-close" @click="closeView"></span>
            <img src="./share.png" class="share-bt">
            <img src="./more.png" class="more-bt">

          </div>
          <div class="content-wrapper">
            <h3 class="name">{{food.name}}</h3>
            <p class="saled">{{food.month_saled_content}}</p>
            <img class="product" v-show="food.product_label_picture" :src="food.product_label_picture">
            <p class="price">
              <span class="text">￥{{food.min_price}}</span>
              <span class="unit">/{{food.unit}}</span>
            </p>
            <div class="cartcontrol-wrapper">
              <Cartcontrol :food="food"></Cartcontrol>

            </div>
            <div class="buy" v-show="!food.count || food.count === 0" @click="addFirst">选规格</div>

          </div>
        </div>
      </div>

    </div>

  </transition>

</template>

<script>
// 导入Cartcontrol
import Cartcontrol from 'components/Cartcontrol/Cartcontrol';
import Vue from 'vue';
// 导入BScroll
import BScroll from 'better-scroll';
  export default {
    data(){
      return {
        showFlag:false,
      }
    },
    props:{
      food:{
        type:Object
      }
    },
    methods: {
      showView(){
        // 父组件是可以调用子组件方法的
        this.showFlag = true;
        // BScroll初始化
        this.$nextTick(function () {});
      },
      closeView(){
        this.showFlag = false;

      },
      addFirst(){
        Vue.set(this.food, 'count', 1);
      }

    },
    components:{
      Cartcontrol,
      BScroll
    }
  }
</script>

<style>
@import url('Food.css');
</style>
