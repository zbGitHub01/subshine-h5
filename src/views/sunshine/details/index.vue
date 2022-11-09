
<script setup>
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';

import { list } from '../tips/index';

  const router = useRouter();

  const state = reactive({})
  const dataList = ref([]);
  const loading = ref(false);
  const finished = ref(false);
  const refreshing = ref(false);

  const onLoad = () => {
    setTimeout(() => {
      if (refreshing.value) {
        dataList.value = [];
        refreshing.value = false;
      }
      dataList.value.push(...list)

      loading.value = false;
      if (dataList.value.length >= 7) {
        finished.value = true;
      }
    }, 1000);
  };

  const onRefresh = () => {
    // 清空列表数据
    finished.value = false;
    // 重新加载数据
    // 将 loading 设置为 true，表示处于加载状态
    loading.value = true;
    onLoad();
  };

  // 活动跳转
  const handleClick = () => {
    router.push({name:'Activity'});
  }

</script>

<template>
  <div class="border-content">
    <div class="border-main">
      <div class="tops">
        <span>阳光工程项目</span>
      </div>
      <ul>
        <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
          <van-list
            v-model:loading="loading"
            :finished="finished"
            finished-text="没有更多了"
            @load="onLoad"
          >
            <li v-for="item,index in dataList" :key="index">
              <div>
                <img :src="item.bkgImg" v-lazy="item.bkgImg" >
                <img 
                  class="active" 
                  src="../../../assets/sunshine/active_icon.png"
                  v-if="item.isActive" 
                  @click="handleClick"
                />
              </div>
              <div>
                <span>{{item.name}}</span><br/>
                <span>{{item.createTime}}</span>
              </div>
              <div></div>
            </li>
          </van-list>
        </van-pull-refresh>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>

.border-content {
  width: 710px;
  min-height: 1689px;
  margin: 0 auto;
  margin-bottom: 40px;
  padding: 11px 0;
  background: #FFA651;
  border-radius: 20px;
  .border-main {
    position: relative;
    width: 690px;
    height: 1689px;
    margin: 0 auto;
    background: #FFFFFF;
    border-radius: 20px;
    border-top: 1px solid #FFA651;
    .tops {
      position: absolute;
      top: -5px;
      left: 123px;
      width: 444px;
      height: 85px;
      background: url('@/assets/sunshine/juxing.png') no-repeat center;
      background-size: 100%;
      text-align: center;
      span {
        display: inline-block;
        margin-top: 5px;
        font-size: 48px;
        font-family: PingFang-SC-Bold, PingFang-SC;
        font-weight: bold;
        color: #FFFFFF;
      }
    }
    ul {
      margin: 0 auto;
      margin-top: 85px;
      padding: 0;
      width: 630px;
      height: 93%;
      list-style: none;
      overflow: scroll;
      li {
        position: relative;
        width: 630px;
        height: 467px;
        div:first-child {
          position: relative;
          width: 100%;
          height: 340px;
          margin-bottom: 20px;
          border-radius: 4px;
          img {
            width: 100%;
            height: 100%;
          }
          .active {
            cursor: pointer;
            position: absolute;
            top: 0px;
            right: 0px;
            width: 92px;
            height: 36px;
          }
          & + div span {
            display: inline-block;
            &:first-child {
              height: 44px;
              margin-bottom: 4px;
              font-size: 32px;
              font-family: PingFang-SC-Bold, PingFang-SC;
              font-weight: bold;
              color: #16494B;
              line-height: 44px;
            }
            &:last-child {
              height: 33px;
              font-size: 24px;
              font-family: PingFangSC-Regular, PingFang SC;
              font-weight: 400;
              color: #16494B;
              line-height: 33px;
            }
          }
        }
        & div:last-child {
          margin-top: 20px;
          width: 628px;
          height: 1px;
          opacity: 0.49;
          border: 1px solid #164
        }
      }
      & li:not(:last-child) {
        margin-top: 35px;
      }
    }
  }
}
:deep(.van-list__finished-text) {
  height: 84px;
  font-size: 28px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #16494B;
  line-height: 84px;
  text-align: center;
  letter-spacing: 1px;
}

</style>