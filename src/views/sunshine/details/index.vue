
<script setup>
import { ref, reactive } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { sunshineStore } from '@/store/module/sunshine.js';
import { Toast } from 'vant';
import 'vant/es/toast/style';
import http from '@/utils/http';

  const router = useRouter();
  const route = useRoute();
  const state = reactive({
    search: {
      page: 0,
      pageSize: 3,
    }
  })

  const dataList = ref([]);
  const loading = ref(false);
  const finished = ref(false);
  const refreshing = ref(false);

  const store = sunshineStore();
  
  const onLoad = async() => {
    const { search }  = state;
    search.page ++ ;
    const dataS = {
      ...search,
      type: route.query.type,
    }
    const { code, data, msg } = await http.post("/api/activitiesConfig/list", dataS);
    if (code !== 200) {
      Toast.fail(msg);
    } else {
      dataList.value.push(...data.data);
      loading.value = false;
      if (dataList.value.length >= data.total) {
        finished.value = true;
      }
    }
  };
  const onRefresh = () => {
    // 清空列表数据
    finished.value = false;
    dataList.value = [];
    // 重新加载数据
    // 将 loading 设置为 true，表示处于加载状态
    loading.value = true;
    state.search.page = 0;
    onLoad();
    refreshing.value = false;
  };

  // 活动跳转
  const gotoSign = obj => {
    if(obj.isApply === 1) {
      sessionStorage.setItem('currentActivity',JSON.stringify(obj));
      router.push({name:'Activity'});
    } else {
      store.setCurrentItem(obj);
      router.push({name: 'Intro'});
    }
  }

</script>

<template>
  <div class="border-content">
    <div class="border-main">
      <div class="tops">
        <span>阳光工程项目</span>
      </div>
      <ul >
        <van-pull-refresh v-model="refreshing" @refresh="onRefresh" >
          <van-list
            v-model:loading="loading"
            class="contentWrapper"
            :finished="finished"
            finished-text="没有更多了"
            @load="onLoad"
          >
            <li v-for="item,index in dataList" :key="index">
              <div>
                <img :src="item.picture" v-lazy="item.picture" @click="gotoSign(item)">
                <img 
                  class="active" 
                  src="../../../assets/sunshine/active_icon.png"
                  v-if="item.isApply===1" 
                />
              </div>
              <div>
                <span @click="gotoSign(item)">{{item.name}}</span><br/>
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
// 去除滚动条
::-webkit-scrollbar {
  width: 0 !important;
}
::-webkit-scrollbar {
  width: 0 !important;height: 0;
}
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
        font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Arial, sans-serif;
        font-weight: bold;
        color: #FFFFFF;
      }
    }
    ul {
      margin: 0 auto;
      margin-top: 85px;
      padding: 0;
      width: 630px;
      height: 90%;
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
              font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Arial, sans-serif;
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
          opacity: 0.49;
          border-top: 1px solid #164
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