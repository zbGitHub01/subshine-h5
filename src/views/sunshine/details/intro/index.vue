<script setup>
import { sunshineStore } from '@/store/module/sunshine.js';

  const store = sunshineStore();
  const onClickLeft = () => history.back();

</script>

<template>
  <div>
    <van-nav-bar
      title="青年阳光项目"
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="content">
      <div>{{store.currentItem.name}}</div>
      <div>{{store.currentItem.createTime}} 发布</div>
      <div>{{store.currentItem.html}}}</div>
    </div>
  </div>
</template>
<style lang="scss" scoped>

.content {
  margin: 0 auto;
  width: 636px;
  min-height: 1454px;
  overflow: scroll;
  & div:nth-child(1) {
    margin-top: 30px;
    width: 108px;
    height: 48px;
    font-size: 36px;
    font-family: PingFang-SC-Bold, PingFang-SC;
    font-weight: bold;
    color: #333333;
    line-height: 48px;
  }
  & div:nth-child(2) {
    margin-top: 10px;
    height: 33px;
    font-size: 24px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #999999;
    line-height: 33px;
  }
  & div:nth-child(3) {
    margin-top: 30px;
    font-size: 28px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #333333;
    line-height: 40px;
  }
}

:deep(.van-nav-bar__content) {
  height: 128px;
  background: #EEEEEE;
}
:deep(.van-nav-bar__title) {
  margin-left: 100px;
  height: 50px;
  font-size: 36px;
  font-family: PingFang-SC-Bold, PingFang-SC;
  font-weight: bold;
  color: #333333;
  line-height: 50px;
}
:deep(.van-nav-bar .van-icon) {
  color: #333333;;
}
:deep(.van-nav-bar__arrow) {
  font-weight: bold;
  font-size: 50px;
}
</style>