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

            </div>
            <div class="pack-score item"></div>
          </div>
        </div>
        <div class="overview-right"></div>
      </div>

    </div>
  </div>
</template>

<script>
// 导入Star
import Star from 'components/Star/Star';
  export default {
    data(){
      return{
        ratings:{}
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
      Star
    }

  }
</script>

<style>
@import url('Ratings.css');
</style>
