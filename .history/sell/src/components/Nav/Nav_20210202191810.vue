<template>
    <div class="nav">

      <router-link to="/goods" class="nav-item">点菜
      <i class="line"></i></router-link>
      <router-link to="/ratings" class="nav-item">评价</router-link>
      <router-link to="/seller" class="nav-item">商家</router-link>

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
    border: 1px solid #FFBB22;
  }
  .nav .nav-item{
    flex: 1;
    text-align: center;
    font-size: 13px;
    text-decoration: none;
    color: #666666;

  }
/* 选中后的样式 */
.nav .active{
  color: #FFBB22;
}

</style>
