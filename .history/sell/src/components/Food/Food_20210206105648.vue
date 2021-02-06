<template>
  <transition name="detail">
    <div class="food" v-show="showFlag">
      <div class="food-wrapper">
        <div class="food-content">
          <div class="img-wrapper">
            <img :src="food.picture" class="food-img">
            <span class="close-bt icon-close" @click="closeView"></span>
            <img src="./share.png" class="share-bt">
            <img src="./more.png" class="more-bt">

          </div>
        </div>
      </div>

    </div>

  </transition>

</template>

<script>
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
      },
      closeView(){
        this.showFlag = false;

      }

    },
  }
</script>

<style>
@import url('Food.css');
</style>
