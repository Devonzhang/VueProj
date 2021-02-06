<template>
  <div class="seller">
    <div class="seller-wrapper">
      <Split></Split>
      <div class="seller-view"></div>
      <Split></Split>

      <div class="tip-wrapper"></div>
      <Split></Split>

      <div class="other-wrapper"></div>
    </div>

  </div>
</template>

<script>
// 导入Split
import Split from 'components/Split/Split';
  export default {
    created() {
      let that = this;
      // Ratings数据获取
      this.$axios.get('/api/ratings')
      .then(function(response){// 获取到数据
      // 通过axios发起get请求
        // console.log(response);
        var dataSource=response.data.data;
        // console.log(dataSource)
        if(dataSource.code==0){
          that.ratings = dataSource.data;
          // console.log(that.ratings)





        }
      })
      .catch(function(error){// 出错处理
        console.log(error);
      })

    },
    components:{
      Split
    }

  }
</script>

<style>
@import url('Seller.css');
</style>
