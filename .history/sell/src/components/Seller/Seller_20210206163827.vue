<template>
  <div class="seller">
    <div class="seller-wrapper">
      <Split></Split>
      <div class="seller-view"></div>
      <Split></Split>

      <div class="tip-wrapper"></div>
      <div class="other-wrapper"></div>
    </div>

  </div>
</template>

<script>
// 导入Split
import Split from 'components/Split/Split';
  export default {
    components:{
      Split
    }

  }
</script>

<style>
@import url('Seller.css');
</style>
