<template lang="pug">
.aside0
.aside1
    .title CPE能力模型
    .img_sub1
.title.title1 机构能力模型
.aside2
.title_sub
    .kuai
    .sub_title CPE管理平台
    .kuai
.aside3
</template>

<script setup>
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
  font-size: 36px;
  font-family: SourceHanSansCN-Bold, SourceHanSansCN;
  font-weight: bold;
  color: #1a1f34;
  line-height: 54px;
  margin-top: 100px;
  margin-bottom: 65px;
  text-align: center;
}
.title1 {
  margin-bottom:80px;
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
  width: 750px;
  height: 656px;
  background: #f4f7fc;
  overflow:hidden;
  .img_sub1 {
    width: 690px;
    height: 404px;
    background: url("@/assets/business/services1.png") no-repeat;
    background-size: 100% 100%;
    margin: 0 auto;
  }
}
.aside2 {
  width: 750px;
  height: 466px;
  background: url("@/assets/business/services2.png") no-repeat;
  background-size: 100% 100%;
  margin: 0 auto;
}
.title_sub {
  display: flex;
  margin: 80px auto 60px auto;
  width: 100%;
  justify-content: center;
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
    white-space: nowrap;
  }
}
.aside3 {
  width: 750px;
  height: 824px;
  background: url("@/assets/business/services3.png") no-repeat;
  background-size: 100% 100%;
  margin: 0 auto 100px auto;
}
</style>
