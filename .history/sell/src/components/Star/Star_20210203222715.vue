<template>
  <div class="star">
    <!-- itemClass：on half off -->
    <span v-for="itemClass in itemClasses" class="itemClass"></span>


  </div>
</template>

<script>
  export default {
    props:{
      score:{
        type:Number
      }
    }

  }
</script>

<style>

</style>
