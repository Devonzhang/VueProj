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
    }

  }
</script>

<style>
@import url('Food.css');
</style>
