<template>
    <div class="header">
        <!-- 顶部通栏 -->
        <div class="top-wrapper">
          <div class="back-wrapper">

          </div>
          <div class="search-wrapper">

          </div>
          <div class="more-wrapper">

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

