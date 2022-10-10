<template lang="pug">
.footer-wrapper
  .footer-container
    .footer-left
      .cell.mg60
        .label 商务合作
        .content damarketing@dongancloud.com
      .cell
        .label 联系方式
        .content dongankeji@dongancloud.com
    .footer-right
      .label 微信公众号
      .qrcode-box
        img(src="@/assets/images/qrcode1.png")
        img(src="@/assets/images/qrcode2.png")
  .divider
  .record Copyright © 2019 浙江东岸科技有限公司版权所有        浙ICP备19017663号-1
</template>

<script setup>
</script>

<style lang="scss" scoped>
.footer-wrapper {
  padding: 80px 50px 0;
  background-color: #191B27;
}
.footer-container {
  display: flex;
  justify-content: space-between;
  .mg60 {
    margin-bottom: 60px;
  }
  .content {
    font-size: 20px;
    font-weight: 400;
    color: rgba(255, 255, 255, 0.6);
  }
  .label {
    font-size: 24px;
    font-weight: 500;
    color: #FFFFFF;
    margin-bottom: 20px;
  }
  .qrcode-box {
    display: flex;
    img {
      width: 120px;
      height: 120px;
      margin-right: 30px;
      &:last-child {
        margin-right: 0;
      }
    }
  }
}
.divider {
  height: 1px;
  background: #FFFFFF;
  opacity: 0.3;
  margin-top: 60px;
}
.record {
  height: 60px;
  line-height: 60px;
  text-align: center;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.6);
}
</style>
