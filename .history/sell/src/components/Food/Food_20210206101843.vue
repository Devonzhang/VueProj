<template>
  <div class="food" v-show="showFlag">

  </div>
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
      }

    },
  }
</script>

<style>
@import url('Food.css');
</style>
