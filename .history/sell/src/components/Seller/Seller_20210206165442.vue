<template>
  <div class="seller">
    <div class="seller-wrapper">
      <Split></Split>
      <div class="seller-view">
        <div class="address-wrapper">
          <div class="address-left">
            {{seller.address}}
          </div>
          <div class="address-right">
            <div class="content"></div>
          </div>
        </div>
        <div class="pic-wrapper"></div>
        <div class="safety-wrapper"></div>
      </div>
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
    data(){
      return{
        seller:{}
      }

    },
    created() {
      let that = this;
      // Ratings数据获取
      this.$axios.get('/api/seller')
      .then(function(response){// 获取到数据
      // 通过axios发起get请求
        // console.log(response);
        var dataSource=response.data.data;
        // console.log(dataSource)
        if(dataSource.code==0){
          that.seller = dataSource.data;
          // console.log(that.seller)




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
