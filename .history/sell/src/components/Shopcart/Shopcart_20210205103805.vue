<template>
  <div class="shopcart">
    <div class="content-left">
      <div class="logo-wrapper">
        <span class="icon-shopping_cart logo"></span>
        <!-- <i class="num">6</i> -->
      </div>
      <div class="desc-wrapper">
        <!-- <p class="total-price">￥158</p> -->
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
        default:''
      },
      shipping_fee_tip:{
        type:String,
        default:''
      },
      selectFoods:{
        type:Array,
        default(){
          return [
            {
              min_price:10,
              count:3;
            }
          ];
        }

      }
    },
    computed:{
      // 总个数
      totalCount(){
        let num = 0;
        this.selectFoods.forEach((food) => {
          num+=food.count;

        });
        return num;
      },
      // 总金额
      totalPrice(){
        let total = 0;
        this.selectFoods.forEach((food)=>{
          total+=food.min_price*food.count;
        });
        return total;
      }

    }

  }
</script>

<style>
  @import url("Shopcart.css");
</style>
