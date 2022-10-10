<template lang="pug">
.aside0
.title 国资背景
.aside1
    .paragraph.paragraph1 东岸科技2020年引入国资入股，成为国资加持的集团性控股平台。现已获得水南城新区投资发展有限公司(国有独资)及旗下丽水市绿色产业发展基金有限公司的2轮融资。
.title 3年+资产处置运作经验
.aside2
    .paragraph.paragraph2 东岸科技通过3年多的个贷不良资产管理，公司个人不良资产管理规模超200亿，沉淀用户数据超430万。免除利息罚息超42亿，帮助32万多年轻人完成了债务还款与个人成长。
.title_sub
    .kuai
    .sub_title 完整的分析链路
    .kuai
.aside3
WalkLantern(:isText="true")
.kong
</template>

<script setup>
import WalkLantern from '@/components/WalkLantern/index.vue'
</script>

<style lang="scss" scoped>
.aside0 {
  margin: 0 auto;
  width: 750px;
  height: 600px;
  background: url("@/assets/business/header-bg.png") no-repeat;
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
.paragraph {
    font-size: 22px;
    font-family: SourceHanSansCN-Regular, SourceHanSansCN;
    font-weight: 400;
    color: #ffffff;
    line-height: 32px;
    text-align: justify;
}
.aside1 {
  margin: 0 auto;
  width: 670px;
  height: 260px;
  background: url("@/assets/business/zichanshougou1.png") no-repeat;
  background-size: 100% 100%;
  overflow: hidden;
  .paragraph1 {
    width: 317px;
    height: 206px;
    margin-left: 40px;
    margin-top: 25px;
  }
}
.aside2 {
  margin: 0 auto;
  width: 670px;
  height: 300px;
  background: url("@/assets/business/zichanshougou2.png") no-repeat;
  background-size: 100% 100%;
  overflow: hidden;
  .paragraph2 {
    width: 309px;
    height: 199px;
    margin-left: 323px;
    margin-top: 65px;
  }
}
.title_sub {
  display: flex;
  margin: 80px auto 60px auto;
  width: 260px;
  height: 30px;
  align-items: center;
  .kuai {
    width: 12px;
    height: 12px;
    background: #ffbe26;
  }
  .sub_title {
    margin: 0 20px;
    font-size: 28px;
    font-family: SourceHanSansCN-Medium, SourceHanSansCN;
    font-weight: 500;
    color: #3988ff;
    line-height: 42px;
  }
}
.aside3 {
  margin: 0 auto;
  width: 671px;
  height: 406px;
  background: url("@/assets/business/zichanshougou3.png") no-repeat;
  background-size: 100% 100%;
}
.kong {
    height:80px;
}
</style>
