<template lang="pug">
.aside0
.aside1
    .title 债务查询并还款
    .content 勾销已与数十家金融机构达成战略合作，开设绿色协商通道。帮助困难借款人减免息费快速销账。
    .img_sub
</template>

<script setup></script>

<style lang="scss" scoped>
.aside0 {
  margin: 0 auto;
  width: 750px;
  height: 600px;
  background: url("@/assets/debt/header-bg.png") no-repeat;
  background-size: 100% 100%;
}
.aside1 {
  overflow: hidden;
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
  .content {
    font-size: 20px;
    font-family: SourceHanSansCN-Regular, SourceHanSansCN;
    font-weight: 400;
    color: #3c4057;
    line-height: 26px;
    margin: 0 40px 57px 40px;
    text-align: justify;
  }
  .img_sub {
    width: 670px;
    height: 541px;
    background: url("@/assets/debt/debt1.png") no-repeat;
    background-size: 100% 100%;
    margin: 0 auto 100px auto;
  }
}
</style>
