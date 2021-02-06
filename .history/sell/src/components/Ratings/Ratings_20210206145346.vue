<template>
  <div class="ratings">
    <div class="ratings-wrapper">
      <div class="overview">
        <div class="overview-left">
          <div class="comment-score">
            <p class="score">
              {{ratings.comment_score}}
            </p>
            <p class="text">
              商家评分
            </p>
          </div>
          <div class="other-score">
            <div class="quility-score item">
              <span class="text">口味</span>
              <Star :score="ratings.quality_score" class="star"></Star>
              <span class="score">
                {{ratings.quality_score}}
              </span>

            </div>
            <div class="pack-score item">
              <span class="text">包装</span>
              <Star :score="ratings.pack_score" class="star"></Star>
              <span class="score">
                {{ratings.pack_score}}
              </span>
            </div>
          </div>
        </div>
        <div class="overview-right">
          <div class="delivery-score">
            <p class="score">
              {{ratings.delivery_score}}
            </p>
            <p class="text">配送评分</p>

          </div>
        </div>
      </div>
      <Split></Split>
      <div class="content">
        <div class="rating-select" v-if="ratings.tab">
          <span class="item" @click="selectTypeFn(2)" :class="{'active' : selectType ==2}">
            {{ratings.tab[0].comment_score_title}}
          </span>
          <span class="item" @click="selectTypeFn(1)" :class="{'active' : selectType ==1}">
            {{ratings.tab[1].comment_score_title}}
          </span>
          <span class="item" @click="selectTypeFn(0)" :class="{'active' : selectType ==0}">
            <img src="./icon_sub_tab_dp_normal@2x.png" v-show="selectType != 0">
            <img src="./icon_sub_tab_dp_highlighted@2x.png" v-show="selectType == 0">

            {{ratings.tab[2].comment_score_title}}
          </span>

        </div>
        <div class="labels-view">
          <span v-for="item in ratings.labels">
            {{item.content}}
            {{itemlabel_count}}

          </span>

        </div>
        <div class="rating-list"></div>
      </div>
    </div>
  </div>
</template>

<script>
// 导入Star
import Star from 'components/Star/Star';
// 导入Split
import Split from 'components/Split/Split';
const ALL = 2;// 全部
const PICTURE = 1; // 带图
const COMMENT = 0; // 点评

  export default {
    data(){
      return{
        ratings:{},
        selectType:ALL
      }
    },
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
      Star,
      Split
    },
    methods: {
      selectTypeFn(type){
        this.selectType = type;
      }
    },

  }
</script>

<style>
@import url('Ratings.css');
</style>
