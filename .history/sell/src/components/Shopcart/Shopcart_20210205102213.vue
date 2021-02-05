<template>
  <div class="shopcart">
    <div class="content-left">
      <div class="logo-wrapper">
        <span class="icon-shopping_cart logo"></span>
      </div>
      <div class="desc-wrapper">
        <p class="tip">另需{{shipping_fee_tip}}</p>

      </div>
    </div>
    <div class="content-right">
      {{min_price_tip}}
    </div>

  </div>
</template>

<script>
  export default {
    props:{
      min_price_tip:{
        type:String,
        defalt:''
      },
      shipping_fee_tip:{
        type:String,
        defalt:''
      }
    }

  }
</script>

<style>
  @import url("Shopcart.css");
</style>
