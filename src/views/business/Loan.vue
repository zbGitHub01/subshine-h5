<template lang="pug">
.aside0
van-tabs(v-model:active="active"  type="card" scrollspy sticky)
    van-tab(title="智慧处置") 
        .aside1
            .title 智能、合规、高效、标准
            .content 全流程数字化解决方案，涵盖资产评估、清收系统、AI催收、委外催收管理、诉调管理等贷后处置服务。
            .img_sub1
    van-tab(title="处置优势")
        .aside2
            .title.title1 由资产走向用户 关注长线收益
            .img_sub2
    van-tab(title="勾销债务管理") 
        .aside3
            .title.title2 传统处置痛点
            .img_sub3
        .aside4
            .title.title3 勾销解决方案
            .img_sub4
        .aside5
            .title.title4 勾销成果展示
            .img_sub5
            .text
                span.sp1 累计回款户数
                span.sp2 8900+
        .aside6
            .title.title5 用户转化路径
            .img_sub6
        .aside7
            .title.title6 用户反馈案例
            .img_sub7
        .aside8
            .title.title7 部分页面展示
            .img_sub8
        WalkBrand
          
</template>

<script setup>
import { ref } from "vue";
import WalkBrand from "@/components/WalkBrand/index.vue";
const active = ref(0);
</script>

<style lang="scss">
.van-tab--card.van-tab--active {
  background-color: #3988ff;
  height: 80px;
}
.van-tabs__nav--card {
  border: none;
  margin: 0;
  height: 80px;
}
.van-tab--card {
  color: #3c4057;
  border-right: none;
  font-size: 24px;
  font-family: SourceHanSansCN-Regular, SourceHanSansCN;
  font-weight: 400;
  line-height: 36px;
}
.van-tabs--card {
  .van-tabs__wrap {
    height: 80px;
  }
}
</style>
<style lang="scss" scoped>
.text {
  text-align: center;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  .sp1 {
    font-size: 26px;
    font-family: SourceHanSansCN-Regular, SourceHanSansCN;
    font-weight: 400;
    color: #3988ff;
    line-height: 39px;
  }
  .sp2 {
    font-size: 40px;
    font-family: SourceHanSansCN-Medium, SourceHanSansCN;
    font-weight: 500;
    color: #3988ff;
    line-height: 60px;
    margin-left: 16px;
  }
}
.aside0 {
  margin: 0 auto;
  width: 750px;
  height: 600px;
  background: url("@/assets/business/header-bg.png") no-repeat;
  background-size: 100% 100%;
}
.title {
  margin-top: 100px;
  margin-bottom: 30px;
  text-align: center;
  font-size: 36px;
  font-family: SourceHanSansCN-Bold, SourceHanSansCN;
  font-weight: bold;
  color: #1a1f34;
  line-height: 54px;
}
.title1 {
  margin-top:80px; 
  margin-bottom:50px;
}
.title2 {
  margin-top:100px; 
  margin-bottom:80px;
}
.title3 {
  margin-top:100px; 
  margin-bottom:60px;
}
.title4 {
  margin-top:80px; 
  margin-bottom:40px;
}
.title5 {
  margin-top:100px; 
  margin-bottom:80px;
}
.title6 {
  margin-top:100px; 
  margin-bottom:60px;
}
.title6 {
  margin-top:120px; 
  margin-bottom:78px;
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
.aside1 {
  overflow: hidden;
  .img_sub1 {
    width: 690px;
    height: 1018px;
    background: url("@/assets/business/huohou1.png") no-repeat;
    background-size: 100% 100%;
    margin: 0 auto;
  }
}
.aside2 {
  width: 750px;
  height: 1188px;
  background: #f4f7fc;
  margin-top: 100px;
  overflow: hidden;
  .img_sub2 {
    width: 710px;
    height: 972px;
    background: url("@/assets/business/huohou2.png") no-repeat;
    background-size: 100% 100%;
    margin: 0 auto;
  }
}
.aside3 {
  overflow: hidden;
  .img_sub3 {
    width: 690px;
    height: 584px;
    background: url("@/assets/business/huohou3.png") no-repeat;
    background-size: 100% 100%;
    margin: 0 auto;
  }
}
.aside4 {
  overflow: hidden;
  .img_sub4 {
    width: 750px;
    height: 742px;
    background: url("@/assets/business/huohou4.png") no-repeat;
    background-size: 100% 100%;
    margin: 0 auto;
  }
}
.aside5 {
  width: 750px;
  height: 876px;
  background: #f4f7fc;
  margin-top: 100px;
  overflow: hidden;
  .img_sub5 {
    width: 590px;
    height: 590px;
    background: url("@/assets/business/huohou5.png") no-repeat;
    background-size: 100% 100%;
    margin: 0 auto;
  }
}
.aside6 {
  overflow: hidden;
  .img_sub6 {
    width: 670px;
    height: 780px;
    background: url("@/assets/business/huohou6.png") no-repeat;
    background-size: 100% 100%;
    margin: 0 auto;
  }
}
.aside7 {
  overflow: hidden;
  .img_sub7 {
    width: 720px;
    height: 788px;
    background: url("@/assets/business/huohou7.png") no-repeat;
    background-size: 100% 100%;
    margin: 0 auto;
  }
}
.aside8 {
  overflow: hidden;
  .img_sub8 {
    width: 694px;
    height: 417px;
    background: url("@/assets/business/huohou8.png") no-repeat;
    background-size: 100% 100%;
    margin: 0 auto 98px auto;
  }
}
</style>
