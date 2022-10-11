<template lang="pug">
.aside0
.aside1
    .title 联系我们
    .content 依托于强大的股东背景和专业的经营团队，为持牌小贷机构、上市公司及其他互金类优质小额贷款机构等客户提供不良资产投资管理服务的整体解决方案，涵盖资产包收购、管理、处置服务，合作律所清收服务等业务板块。
.aside2
    .tel
        .img1
        .content 客服电话
        .content 400-880-7733
    .work
        .img2
        .content 商务合作
        .content damarketing@dongancloud.com
.gongzhonghao
    .img3
    div(style="display:flex;flex-direction:column;justify-content:center")
        .content1 关注微信公众号“东岸科技”
        .content1 了解更多公司信息
.xiaochengxu
    .img4
    div(style="display:flex;flex-direction:column;justify-content:center")
        .content1 打开微信，搜索微信小程序
        .content1 “人力宝直聘”快速入职
</template>

<script setup></script>

<style lang="scss" scoped>
.aside0 {
  margin: 0 auto;
  width: 750px;
  height: 600px;
  background: url("@/assets/contact/header-bg.png") no-repeat;
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
    margin: 0 40px 60px 40px;
    text-align: justify;
  }
}
.aside2 {
  display: flex;
  justify-content: space-between;
  padding: 0 40px;
  .tel {
    box-sizing: border-box;
    width: 208px;
    height: 204px;
    background: #f4f7fc;
    padding: 30px 29px;
    white-space: nowrap;

    .img1 {
      margin: 0 auto 30px auto;
      width: 60px;
      height: 60px;
      background: url("@/assets/contact/contact1.png") no-repeat;
      background-size: 100% 100%;
    }
  }
  .work {
    width: 432px;
    height: 204px;
    background: #f4f7fc;
    box-sizing: border-box;
    padding: 30px;
    .img2 {
      margin: 0 auto 30px auto;
      width: 60px;
      height: 60px;
      background: url("@/assets/contact/contact2.png") no-repeat;
      background-size: 100% 100%;
    }
  }
}
.content {
  text-align: center;
  font-size: 24px;
  font-family: SourceHanSansCN-Regular, SourceHanSansCN;
  font-weight: 400;
  color: #3c4057;
  line-height: 22px;
  text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}
.gongzhonghao {
  width: 670px;
  height: 180px;
  background: #f4f7fc;
  margin: 30px auto;
  box-sizing: border-box;
  padding: 30px 168px 30px 40px;
  display: flex;
  justify-content: space-between;
  .img3 {
    //   margin: 0 auto 30px auto;
    width: 120px;
    height: 120px;
    background: url("@/assets/contact/contact4.png") no-repeat;
    background-size: 100% 100%;
  }
  .content1 {
    font-size: 24px;
    font-family: SourceHanSansCN-Regular, SourceHanSansCN;
    font-weight: 400;
    color: #3c4057;
    line-height: 36px;
  }
}
.xiaochengxu {
  width: 670px;
  height: 180px;
  background: #f4f7fc;
  margin: 30px auto 100px auto;
  box-sizing: border-box;
  padding: 30px 168px 30px 40px;
  display: flex;
  justify-content: space-between;
  .img4 {
    //   margin: 0 auto 30px auto;
    width: 120px;
    height: 120px;
    background: url("@/assets/contact/contact3.png") no-repeat;
    background-size: 100% 100%;
  }
  .content1 {
    font-size: 24px;
    font-family: SourceHanSansCN-Regular, SourceHanSansCN;
    font-weight: 400;
    color: #3c4057;
    line-height: 36px;
  }
}
</style>
