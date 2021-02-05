<template>
  <div class="cartcontrol">
    <div class="cart-decrease icon-remove_circle_outline" @click="decreaseCart"></div>
    <div class="cart-count">{{food.count}}</div>
    <div class="cart-add icon-add_circle" @click="addCart">
      <i class="bg"></i>
    </div>

  </div>
</template>

<script>
  import Vue from 'vue';
  export default {
    props:{
      food:{
        type:Object
      }
    },
    methods: {
      decreaseCart(){
        if(this.food.count){
          Vue.set(this.food,'count',);
        }
        },
      addCart(){
        if(this.food.count){
          Vue.set(this.food,'count',1);
        }else{
          this.food.count++;
        }
        }

    },


  }
</script>

<style>
  @import url("Cartcontrol.css");

</style>
