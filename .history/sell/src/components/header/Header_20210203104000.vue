<template>
    <div class="header">
        <!-- 顶部通栏 -->
        <div class="top-wrapper">
          <div class="back-wrapper">
            <span class="icon-arrow_lift"></span>


          </div>
          <form class="search-wrapper">
            <span class="search-icon">
              <input type="text" class="search-bar" placeholder="搜索店内商品">
            </span>

          </form>
          <div class="more-wrapper">
            <a href="#" class="spelling-bt"></a>
            <div class="more-bt"></div>

          </div>
        </div>

        <!-- 主题内容 -->
        <div class="content-wrapper"></div>

        <!-- 公告内容 -->
        <div class="bulletin-wrapper"></div>

    </div>

</template>

<script>
    export default{
		props:{
			poiInfo:{
			type:Object,
			default:{}
			}
		}

    }

</script>


<style>
  /* 导入CSS */
  @import url("Header.css");


</style>

