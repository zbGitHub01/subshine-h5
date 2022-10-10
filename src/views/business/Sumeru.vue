<template lang="pug">
//- 头部
//- Header
.title 智能资产处置的核心大脑
.content 东岸须弥系统由东岸科技自主研发，具有知识产权的全流程、智能化、标准化的系统，支持手机APP，电脑端等多终端，任意地域，全时段覆盖。该系统涵盖3大系统和2大工具，从资产评估、用户画像分析、处置方式择优评估、分案、处置过程全监控、调解、回收数据分析等进行全方位数字化运营管理，运用科技力量提高处置效能。
.aside1.aside
.aside2
 .title(style="margin-top:80px; margin-bottom:30px") 须弥平台（处置业务管理平台CPC)
 .content CPC平台为东岸须弥系统中的核心业务管理、作业操作系统，整合了“业务+行为+数字”能力，统一数据管理，可输出精准个性化处置方案。
 .img_sub1.aside
.title(style="margin-bottom:80px") 多闻系统（智能质检系统QIS)
.aside3.aside
.aside4
  .title(style="margin-top:80px; margin-bottom:60px") 持国系统（策略模型系统SMS)
  .img_sub2.aside
.title(style="margin-bottom:80px") 增长工具（工作定制手机WCC)
.aside5.aside
.title(style="margin-top:120px; margin-bottom:30px") 广目机器人（智能联络机器人RPA)
.content(style="margin-bottom:28px") 东岸科技智能机器人通过智能呼叫系统、AI机器人及智能质检等多种科技处置手段，实现智能精细化分案、智能化外呼，流程达到100%质检合规等。
.aside6.aside
//- 底部
</template>

<script setup>
// import Header from '@/components/Header/index.vue'
</script>

<style lang="scss" scoped>
.title {
  font-size: 36px;
  font-family: SourceHanSansCN-Bold, SourceHanSansCN;
  font-weight: bold;
  color: #1a1f34;
  line-height: 54px;
  margin-top: 100px;
  margin-bottom: 30px;
  text-align: center;
}
.content {
  font-size: 20px;
  font-family: SourceHanSansCN-Regular, SourceHanSansCN;
  font-weight: 400;
  color: #3c4057;
  line-height: 26px;
  margin: 0 40px 60px 40px;
  text-align: justify;
}
.aside {
    margin: 0 auto;
    background-size: 100% 100%;
}
.aside1 {
  width: 670px;
  height: 782px;
  background: url("@/assets/business/xumi1.png") no-repeat;
  margin-bottom: 100px;
  background-size: 100% 100%;
}
.aside2 {
  width: 750px;
  height: 660px;
  background: #f4f7fc;
  overflow: hidden;
  .img_sub1 {
    width: 564px;
    height: 310px;
    background: url("@/assets/business/xumi2.png") no-repeat;
    background-size: 100% 100%;
    margin-top: 60px;
  }
}
.aside3 {
  width: 710px;
  height: 290px;
  background: url("@/assets/business/xumi3.png") no-repeat;
  background-size: 100% 100%;
  margin-bottom: 100px;
}
.aside4 {
  width: 750px;
  height: 1286px;
  background: #f4f7fc;
  overflow: hidden;
  .img_sub2 {
    width: 670px;
    height: 1030px;
    background: url("@/assets/business/xumi4.png") no-repeat;
    background-size: 100% 100%;
  }
}
.aside5 {
  width: 670px;
  height: 658px;
  background: url("@/assets/business/xumi5.png") no-repeat;
  background-size: 100% 100%;
  margin-bottom: 100px;
}
.aside6 {
  width: 671px;
  height: 435px;
  background: url("@/assets/business/xumi6.png") no-repeat;
  background-size: 100% 100%;
  margin-bottom: 100px;
}
</style>
