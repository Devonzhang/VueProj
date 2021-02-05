<template>
  <div id="app">

    <!-- 头部 -->
    <Myheader></Myheader>

    <!-- 导航 -->
    <div class="nav">

      nav
    </div>

    <!-- 主体内容 -->
    <div class="content">
      content

    </div>

  </div>
</template>

<script>
// 1. 导入
import Myheader from './components/Header/Header';
import Mynav from './components/Nav/Nav';



export default {
  name: 'App',
  components: {// 2. 注册
    Myheader,Mynav




  }
}
</script>

<style>



</style>
