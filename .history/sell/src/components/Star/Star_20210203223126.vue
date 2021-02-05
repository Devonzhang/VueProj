<template>
  <div class="star">
    <!-- itemClass：on half off -->
    <span v-for="itemClass in itemClasses" :class="itemClass" class="star-item"></span>


  </div>
</template>

<script>
  export default {
    props:{
      score:{
        type: Number
      }
    }

  }
</script>

<style>
.star{
  font-size: 0;

}
.star .star-item{
  display: inline-block;
  width: 10px;
  height: 10px;

  margin-left: 3px;
  background-repeat: no-repeat;
  background-size: 10px 10px;

}

.star .star:last-child{
  margin-right: 0;
}

/* 对应三种图片类型 */
.star .on{
  background-image: url(star24_on@2x.png);

}
.star .half{
  background-image: url(star24_half@2x.png);

}
.star .off{
  background-image: url(star24_off@2x.png);

}

</style>
