<template>
  <div class="star">
    <!-- itemClass：on half off -->
    <span v-for="itemClass in itemClasses" :class="itemClass" class="star-item"></span>


  </div>
</template>

<script>
// 定义星星长度
const LENGTH = 5;
// 星星对应class名称
const CLS_ON='on';
const CLS_HALF='half';
const CLS_OFF='off';
  export default {
    props:{
      score:{
        type: Number
      }
    },
    computed:{
      itemClasses(){
        let result=[];
        // 4.7 => 4.5 3.9=>3.5 4.1=>4.0
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
