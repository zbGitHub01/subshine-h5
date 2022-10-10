<template lang="pug">
.aside0
.item(v-for="(item,index) in items" :key="index" :style="{ backgroundImage:`url('${item.img}')`}") 
    .title_sub {{item.title}}
    .content
        .content_sub(v-for="(content,index) in item.content" :key="index") {{content}}
.title 科学完善的评估决策流程
.aside1
.title 服务优势
.aside2
.aside3
    .title1 报告案例
    p.content 可视化的数据评估报告后台，直观看到报告解读及分析，协助债权人全面洞悉资产包情况，全面提升用户交互体验。
    .img_sub
</template>

<script setup>
import { ref } from "vue";
import zaichanpinggu1 from "@/assets/business/zichanpinggu1.png";
import zaichanpinggu2 from "@/assets/business/zichanpinggu2.png";
import zaichanpinggu3 from "@/assets/business/zichanpinggu3.png";
const items = ref([
  {
    title: "智能评估定价",
    content: ["跟随用户债务全生命周期", "数据“采集+管理+分析+应用”智能一体化"],
    img: zaichanpinggu1,
  },
  {
    title: "应用场景",
    content: [
      "个人不良资产定价：出具单户用户画像及全资产估价报告",
      "服务对象：银行、AMC、消费金融公司等",
    ],
    img: zaichanpinggu2,
  },
  {
    title: "服务介绍",
    content: [
      "基于多维数据及业界领先的财务状况模型算法框架，运用智能分析技术为机构在“知客”和 “用户成长”两件事上，智能分层、动态响应 、策略优化 ，助力机构更高效地了解资产的潜能及突破点。",
    ],
    img: zaichanpinggu3,
  },
]);
</script>

<style lang="scss" scoped>
.aside0 {
  margin: 0 auto;
  width: 750px;
  height: 600px;
  background: url("@/assets/business/header-bg.png") no-repeat;
  background-size: 100% 100%;
  margin-bottom: 100px;
}
.item {
  box-sizing: border-box;
  width: 670px;
  background-size: 100% 100%;
  flex-direction: column;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 50px;
  margin-bottom: 30px;
  margin-top: 30px;
  .title_sub {
    font-size: 32px;
    font-family: SourceHanSansCN-Medium, SourceHanSansCN;
    font-weight: 500;
    color: #ffffff;
    line-height: 48px;
    margin-bottom: 20px;
  }
  .content {
    font-size: 22px;
    font-family: SourceHanSansCN-Regular, SourceHanSansCN;
    font-weight: 400;
    color: rgba(255, 255, 255, 0.8);
    line-height: 32px;
    text-align: justify;
  }
}
.title {
  margin-top: 120px;
  margin-bottom: 80px;
  text-align: center;
  font-size: 36px;
  font-family: SourceHanSansCN-Bold, SourceHanSansCN;
  font-weight: bold;
  color: #1a1f34;
  line-height: 54px;
}
.title1 {
  margin-top: 80px;
  margin-bottom: 30px;
  text-align: center;
  font-size: 36px;
  font-family: SourceHanSansCN-Bold, SourceHanSansCN;
  font-weight: bold;
  color: #1a1f34;
  line-height: 54px;
}
.aside1 {
  margin: 0 auto;
  width: 557px;
  height: 1040px;
  background: url("@/assets/business/zichanpinggu4.png") no-repeat;
  background-size: 100% 100%;
}
.aside2 {
  margin: 0 auto;
  width: 670px;
  height: 874px;
  background: url("@/assets/business/zichanpinggu5.png") no-repeat;
  background-size: 100% 100%;
}
.aside3 {
  width: 750px;
  height: 949px;
  background: #f4f7fc;
  overflow: hidden;
  margin-top: 100px;
  .title {
    margin-top: 120px;
    margin-bottom: 80px;
  }
  .content {
    font-size: 20px;
    font-family: SourceHanSansCN-Regular, SourceHanSansCN;
    font-weight: 400;
    color: #3c4057;
    line-height: 26px;
    text-align: justify;
    margin: 0 40px 60px 40px;
  }
  .img_sub {
    margin: 0 auto;
    width: 670px;
    height: 601px;
    background: url("@/assets/business/zichanpinggu6.png") no-repeat;
    background-size: 100% 100%;
  }
}
</style>
