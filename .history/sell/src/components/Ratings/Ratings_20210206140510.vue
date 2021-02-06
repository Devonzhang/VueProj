<template>
  <div class="ratings">
    <div class="ratings-wrapper">
      <div class="overview">
        <div class="overview-left"></div>
        <div class="overview-right"></div>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        ratings:{}
      }
    },
    created() {
      var that = this;
      // Ratings数据获取
    this.$axios.get('/api/ratings')
    .then(function(response){// 获取到数据
    // 通过axios发起get请求
      // console.log(response);
      var dataSource=response.data.data;
      // console.log(dataSource)
      if(dataSource.code==0){
        that.ratings = dataSource.data;
        console.log(that.ratings)

      }
    })
    .catch(function(error){// 出错处理
      console.log(error);
    })

    },

  }
</script>

<style>
@import url('Ratings.css');
</style>
