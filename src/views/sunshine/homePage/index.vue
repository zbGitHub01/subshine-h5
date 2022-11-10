
<script setup>
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';
import { sunshineStore } from '@/store/module/sunshine.js';
import http from '@/utils/http';
import { Toast } from 'vant';
import 'vant/es/toast/style';
import { tipsText, list } from '../tips/index';
import defaultBkg from '@/assets/sunshine/default_bkg.png'; // 兜底背景图

  const router = useRouter();
  const state = reactive({
    activitiesArr: [],
  })
  const store = sunshineStore();
  
  const getData = async() => {
    Toast.loading('加载中...');
    const data = await http.get('/api/activitiesConfig/getHomeActivitiesInfo');
    Toast.clear()
    if (data.code !== 200) {
      Toast.fail(data.msg);
    } else {
      Object.values(data.data).forEach(item => {
        // 判空赋默认图
        if(Object.keys(item).length === 0) {
          item.picture = defaultBkg;
        }
        state.activitiesArr.push(item);
      })
    }
  }
  
  // 更多跳转
  const goToDetail = val => {
    store.currentType = val;
    router.push({name:'Details'});
  }

  getData();

</script>

<template>
  <div class="border-tips">
    <div>{{ tipsText }}</div>
  </div>
  <div class="border-content">
    <ul>
      <li v-for="item,index in state.activitiesArr" :key="index">
        <div>
          <span>阳光工程项目</span>
          <span @click="goToDetail(item.type)">更多</span>
        </div>
        <div :style="`background: url(${item.picture}) no-repeat center;background-size: 100% 100%;`">
          <!-- <div></div> -->
        </div>
        <div v-if="index + 1 !== list.length"></div>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.border-tips {
  display: flex;
  align-items: center;
  width: 710px;
  height: 665px;
  margin: 0 auto;
  background: url('@/assets/sunshine/body_bkg.png') no-repeat center;
  background-size: 100%;
div {
  width: 630px;
  height: 497px;
  margin: 0 auto;
  font-size: 30px;
  font-family: PingFang-SC-Bold, PingFang-SC;
  font-weight: bold;
  color: #16494B;
  text-indent: 1em;
  line-height: 42px;
  letter-spacing: 1px;
}
}
.border-content {
  width: 718px;
  // min-height: 968px;
  margin: 0 auto;
  margin-top: 40px;
  padding-bottom: 40px;
  background: url('@/assets/sunshine/content_bkg.png') no-repeat center;
  background-size: 100% 100%;
  ul {
    margin: 0;
    list-style: none;
    li {
    & div:nth-child(1) {
      display: flex;
      display: -webkit-flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      padding: 30px 0;
    & span:first-child {
        display: inline-block;
        width: 192px;
        height: 44px;
        margin-left: 48px;
        font-size: 32px;
        font-family: PingFang-SC-Bold, PingFang-SC;
        font-weight: bold;
        color: #16494B;
        line-height: 44px;
    & + span {
      position: relative;
      display: inline-block;
      width: 54px;
      height: 37px;
      margin-right: 52px;
      font-size: 26px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #16494B;
      letter-spacing: 1px;
        &::after {
          content: '';
          position: absolute;
          display: inline-block;
          top: 12px;
          left: 60px;
          width: 14px;
          height: 14px;
          border-top: 1px solid #16494B;
          border-right: 1px solid #16494B;
          transform: rotate(45deg);
        }
    }
    }
    }
    & div:nth-child(2) {
        position: relative;
        width: 630px;
        height: 340px;
        margin-left: 48.5px;
        // background: url('@/assets/sunshine/linshi.png') no-repeat center;
        background-size: 100% 100%;
        line-height: 340px;
        div {
          position: absolute;
          display: flex;
          display: -webkit-flex;
          justify-content: center;
          top: 25%;
          width: 630px;
          height: 112px;
          background: #FFFFFF;
          font-size: 72px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #333333;
          opacity: 0.77;
        }
    }
    & div:nth-child(3) {
      width: 628px;
      height: 1px;
      margin-left: 48.5px;
      margin-top: 40px;
      opacity: 0.49;
      border: 1px solid
    }
  }
}
}
</style>