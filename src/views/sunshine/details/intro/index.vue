<script setup>
import { watch, onMounted, nextTick } from 'vue';
import { sunshineStore } from '@/store/module/sunshine.js';
import { useRoute } from 'vue-router';
import { computedImgAttribute } from '../../utils/formatImg';
import { getTitle } from '../../utils';

  const route = useRoute();
  const store = sunshineStore();

  watch(store.currentItem,(newVal,oldVal) => {
    Object.keys(newVal).length < 1 ? history.back(): '' ;
  }, {immediate: true, deep: true});

  const onClickLeft = () => history.back();

  onMounted(() => {
    computedImgAttribute('content-body', nextTick);
  })

 
</script>

<template>
  <div>
    <van-nav-bar
      :title="getTitle(route.query.type)"
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="content">
      <div>{{store.currentItem.name}}</div>
      <div>{{store.currentItem.createTime}} 发布</div>
      <div class="content-body" v-html="store.currentItem.html"></div>
    </div>
  </div>
</template>
<style lang="scss" scoped>

.content {
  margin: 0 auto;
  padding-bottom: 50px;
  width: 636px;
  min-height: 1454px;
  overflow: auto;
  & div:nth-child(1) {
    margin-top: 30px;
    height: 48px;
    font-size: 36px;
    font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Arial, sans-serif;
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
  font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Arial, sans-serif;
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