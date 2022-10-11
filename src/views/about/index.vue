<template lang="pug">
.aside0
van-tabs(v-model:active="active"  type="card" scrollspy sticky)
    van-tab(title="公司简介") 
        .aside1
            .title 公司简介
            .img_sub1
            .title_sub 数字科技助力青年成长
            .content 东岸科技是一家国有参股的集团公司，是以金融数字科技为核心领域，以资产管理为应用场景，以大数据为依托的科技型企业。面向银行、AMC、持牌小贷机构等上游客户，东岸科技提供不良资产处置管理、资产评估定价、一体化数字决策处置系统等服务，用数字科技的手段，深化个贷不良行业数智化转型，重塑资产管理的新模式。同时，东岸科技为下游需要帮助的阶段性债务受压青年输出成长方案。作为一家以人为本、有社会责任担当的科技型企业，东岸科技自2017年成立以来，始终秉承“给信信心 给人希望 给人欢喜 给人方便”的“四给”理念，免除债务人利息与罚息，以科技助力结合“青年成长阳光工程”等方式，多维度帮扶青年成长。现已帮助全国32万国年青人摆脱债务危机，回归正常生活，走上共富之路。对化解个人不良资产发挥“蓄水池”和“稳定器”作用。为信用中国、平安中国、数字中国做出新贡献。目前，公司旗下共有数字科技、资产管理等相关类型子公司10余家，公司员工超400人，其中技术人员超30%，并设有两个研究院，专注于AI人工智能在金融行业的应用。截止2022年2月，公司积累超200亿个人不良资产债权，沉淀个人用户超430万，累计免除利息罚息超过42亿，成为浙江省乃至全国，数字科技研发与应用于个人不良资产管理起步最早、规模最大，技术开发与应用最深入的科技型企业。
    van-tab(title="发展历程") 
        .aside2
            .title 发展历程
            .img_sub2
    van-tab(title="荣誉认可") 
        .aside3
            .title 权威认可
            .img_sub3
            .title 荣誉奖项
            .img_sub4
    van-tab(title="企业文化") 
        .aside4
            .title 企业文化
            .qiye
                .img_sub5
                    .qiye__title 企业价值观
                    .qiye__caption 给人信心，给人希望
                    .qiye__caption 给人欢喜，给人方便
                .img_sub6
                    .qiye__title 企业使命
                    .qiye__caption 数字科技助力青年成长
            .title_sub 企业文化价值观——展望未来
            .content.content1 打造百年社会企业，东岸科技坚持以“给人信心、给人希望、给人欢喜、给人方便”的核心价值观，以数字科技助力青年成长，推动形成共同富裕的阶段性标志性成果，为实现共同富裕提供浙江典范。同时东岸科技全力布局科技开发、资产管理和数据运营三大板块，促进公司特定生态体系的快速发展。利用数字科技重塑个人不良资产管理的全流程，做到合规、标准、智能、高效。并运用核心能力对外进行风控模型、贷后管理等技术输出服务。未来3年，东岸科技个人不良资产规模超1000亿元，估值将超过500亿，成为个人不良资产管理和处置领域规模最大、最具专业化、数字化的科技型企业，并冲刺IPO的既定目标。
</template>

<script setup>
import { ref } from "vue";
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
  background: #F4F7FC;
}
.van-tabs--card {
  .van-tabs__wrap {
    height: 80px;
  }
}
</style>
<style lang="scss" scoped>
.aside0 {
  margin: 0 auto;
  width: 750px;
  height: 600px;
  background: url("@/assets/about/header-bg.png") no-repeat;
  background-size: 100% 100%;
}
.title {
  margin-top: 100px;
  margin-bottom: 80px;
  text-align: center;
  font-size: 36px;
  font-family: SourceHanSansCN-Bold, SourceHanSansCN;
  font-weight: bold;
  color: #1a1f34;
  line-height: 54px;
}
.title_sub {
  margin: 60px auto 19px 40px;
  font-size: 32px;
  font-family: SourceHanSansCN-Medium, SourceHanSansCN;
  font-weight: 500;
  color: #1a1f34;
  line-height: 48px;
}
.content {
  margin: 0 40px;
  text-align: justify;
  font-size: 26px;
  font-family: SourceHanSansCN-Regular, SourceHanSansCN;
  font-weight: 400;
  color: #3c4057;
  line-height: 32px;
}
.content1 {
  margin-bottom: 100px;
}
.aside1 {
  overflow: hidden;
  .img_sub1 {
    width: 670px;
    height: 274px;
    background: url("@/assets/about/about1.png") no-repeat;
    background-size: 100% 100%;
    margin: 0 auto;
  }
}
.aside2 {
  overflow: hidden;
  .img_sub2 {
    width: 690px;
    height: 816px;
    background: url("@/assets/about/about2.png") no-repeat;
    background-size: 100% 100%;
    margin: 0 auto;
  }
}
.aside3 {
  overflow: hidden;
  .img_sub3 {
    width: 694px;
    height: 1172px;
    background: url("@/assets/about/about3.png") no-repeat;
    background-size: 100% 100%;
    margin: 0 auto;
  }
  .img_sub4 {
    width: 690px;
    height: 1661px;
    background: url("@/assets/about/about4.png") no-repeat;
    background-size: 100% 100%;
    margin: 0 auto;
  }
}
.aside4 {
  .qiye {
    display: flex;
    justify-content: space-between;
    padding: 0 30px;
    color: white;
    .img_sub5 {
      width: 330px;
      height: 220px;
      background: url("@/assets/about/about5.png") no-repeat;
      background-size: 100% 100%;
    }
    .img_sub6 {
      width: 330px;
      height: 220px;
      background: url("@/assets/about/about6.png") no-repeat;
      background-size: 100% 100%;
    }

    .img_sub {
      &5,
      &6 {
        box-sizing: border-box;
        padding: 60px 0px 0px 45px;
      }
    }
    &__title {
      font-size: 30px;
      margin-bottom: 16px;
      font-weight: 500;
    }
    &__caption {
      font-size: 22px;
      font-weight: 400;
      opacity: .8;
    }
  }
}
</style>
