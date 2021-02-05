<template>
    <div class="nav">

      <router-link to="/goods">点菜</router-link>
      <router-link to="/ratings">评价</router-link>
      <router-link to="/seller">商家</router-link>

    </div>


</template>

<script>
  export default {


  }
</script>

<style>
  .nav{
    display: flex;
    width: 100%;
    height: 40px;
    line-height: 40px;
  }
  .nav .nav-item{
    flex: 1;
    text-align: center;
  }


</style>
