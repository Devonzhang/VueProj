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
        <div class="pic-wrapper" v-if="seller.poi_env" ref="picsView">
          <ul class="pics-list" ref="picsList">
            <li class="pics-item" v-for="imgurl in seller.poi_env.thumbnails_url_list" ref="picsItem">
              <img :src="imgurl">
            </li>
          </ul>
        </div>
        <div class="safety-wrapper">
          查看食品安全档案
          <span class="icon-keyboard_arrow_right"></span>
        </div>
      </div>
      <Split></Split>

      <div class="tip-wrapper">
        <div class="delivery-wrapper">
          配送服务：{{seller.app_delivery_tip}}
        </div>
        <div class="shipping-wrapper">
          配送时间：{{seller.shipping_time}}
        </div>

      </div>
      <Split></Split>

      <div class="other-wrapper">
        <div class="server-wrapper">
          商家服务
          <div class="poi-server" v-for="item in seller.poi_service">
            <img :src="item.icon">
            {{item.content}}

          </div>

        </div>

        <div class="discounts-wrapper">
          <div class="discounts-item" v-for="item in seller.discounts2">
            <div class="icon">
              <img :src="item.icon_url">
            </div>
            <div class="text">
              {{item.}}
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
// 导入Split
import Split from 'components/Split/Split';
// 导入BScroll
import BScroll from 'better-scroll';
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
          that.$nextTick(()=>{
            if (that.seller.poi_env.thumbnails_url_list){
              let imgW = that.$refs.picsItem[0].clientWidth;
              let marginR = 11;
              let width = (imgW + marginR) * that.seller.poi_env.thumbnails_url_list.length;
              that.$refs.picsList.style.width = width + 'px';
              that.scroll = new BScroll(that.$refs.picsView,{
                scrollX: true
              });

            }
          });




        }
      })
      .catch(function(error){// 出错处理
        console.log(error);
      })

    },
    components:{
      Split,
      BScroll
    }

  }
</script>

<style>
@import url('Seller.css');
</style>
