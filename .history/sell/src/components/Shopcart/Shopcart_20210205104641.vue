<template>
  <div class="shopcart" :class="{'highlight': totalCount>0}">
    <div class="content-left">
      <div class="logo-wrapper" :class="{'highlight': totalCount>0}">
        <span class="icon-shopping_cart logo" :class="{'highlight': totalCount>0}"></span>
        <i class="num" v-show="totalCount" :class="{'highlight': totalCount>0}">{{totalCount}}</i>
      </div>
      <div class="desc-wrapper">
        <p class="total-price" v-show="totalPrice">￥{{totalPrice}}</p>
        <p class="tip" :class="{'highlight': totalCount>0}">另需{{shipping_fee_tip}}</p>

      </div>
    </div>
    <div class="content-right" :class="{'highlight': totalCount>0}">
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
              count:2
            },
            {
              min_price:5,
              count:50
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
