<template>
  <div class="cartcontrol">
    <div class="cart-decrease icon-remove_circle_outline" @click="decreaseCart"></div>
    <div class="cart-count">10</div>
    <div class="cart-add icon-add_circle" @click="addCart">
      <i class="bg"></i>
    </div>

  </div>
</template>

<script>
  export default {
    methods: {
      decreaseCart(){},
      addCart(){}

    },


  }
</script>

<style>
  @import url("Cartcontrol.css");

</style>
