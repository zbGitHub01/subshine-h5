<template lang="pug">
.main
  van-swipe.swipe(autoplay="5000" :show-indicators="false")
    van-swipe-item
      img.swipe-img(src="@/assets/images/banner1.png")
    van-swipe-item
      img.swipe-img(src="@/assets/images/banner2.png")
    van-swipe-item.video_box
      img.swipe-img(:src="state.video_bkg" @click="handlePlay")
  .bush-system-wrap
    .title 东岸业务体系
    .items
      .item(v-for="(item, index) in items" :key="index" @click="goPage(item)")
        img(:src="item.icon")
        .label {{item.label}}
    .decor
      img(src="@/assets/images/decor-bg1.png")
  .aside
    .title 数字科技助力青年成长
    p.paragraph 东岸科技是一家国有参股的集团公司，是一家以金融数字科技为核心领域，以资产管理为应用场景，以430万用户大数据为依托的科技型企业。面向银行、AMC、持牌小贷机构等上游客户，东岸科技提供不良资产处置管理、资产评估定价、一体化数字决策处置系统等服务，用数字科技的时段，深化个贷不良行业数智化转型，重塑资产管理的新模式。同时，东岸科技为下游需要帮助的阶段性债务受压青年输出成长方案。截止目前，东岸科技通过首创勾销债务管理平台、成立调解中心、设立“青年成长阳光工程”等方式，成功帮助全国31万+年青人摆脱债务危机，并为其提供教育、就业等帮扶实现全面成长，助力他们更好地回归经济社会发展的正常轨道。
  WalkLantern
  .latestDevelop 
    .title 最新动态
    .card-list
      .card(v-for="item in latestList" :key="item.id")
        img(:src="item.picture")
        .desc {{ item.title }}
.video_play_box(v-show="state.videoPlayVisible")
  .video-play
    .video-content
      video(:src="state.videoSrc" class="videoSelf" :poster="state.videoSrc+'?x-oss-process=video/snapshot,t_10,f_jpg'" controls)
      span
        <van-icon name="cross" @click="handleCloseVideo"/>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { ImagePreview } from "vant";
import bushSystemIcon1 from '@/assets/images/bush-system-icon1.png'
import bushSystemIcon2 from '@/assets/images/bush-system-icon2.png'
import bushSystemIcon3 from '@/assets/images/bush-system-icon3.png'
import bushSystemIcon4 from '@/assets/images/bush-system-icon4.png'
import bushSystemIcon5 from '@/assets/images/bush-system-icon5.png'
import video_bkg from '@/assets/images/video_bkg.png'
import WalkLantern from '@/components/WalkLantern/index.vue'

import http from '@/utils/http'
// const fetch = async () => {
//   const data = await http.get('/api/advantage/findByAll')
//   // console.log(data)
// }

const state = reactive({
  videoPlayVisible: false,
  videoSrc: 'https://asfile.donganzichan.cn/assets/static/video/home-video_x264.mp4',
  bodyTop: 0,
  video_bkg
})



const latestList = ref([])
const fetchLatestDevelop = async () => {
  const { code, data } = await http.get('/api/article/findPage', { page: 1, pageSize: 60 })
  if (code === 200) {
    latestList.value = data.data
  }
}
const getHomeVideoCategory = async () => {
  const { code, data } = await http.get('/api/advantage/findPage', { page: 1, pageSize: 10, CId: '12' })
  if (code === 200) {
    const dataArr = data.data
    state.videoSrc = dataArr[0].videoUrl
    state.video_bkg = dataArr[0].phonePicture
  }
}
fetchLatestDevelop()
getHomeVideoCategory()

const items = ref([
  {
    icon: bushSystemIcon1,
    label: '资产收购',
    path: '/purchase'
  },
  {
    icon: bushSystemIcon2,
    label: '数据服务',
    path: '/services'
  },
  {
    icon: bushSystemIcon3,
    label: '须弥系统',
    path: '/sumeru'
  },
  {
    icon: bushSystemIcon4,
    label: '资产评估服务',
    path: '/appraisal'
  },
  {
    icon: bushSystemIcon5,
    label: '贷后全流程服务',
    path: '/loan'
  }
])

const router = useRouter()
const goPage = item => {
  router.push({ path: item.path })
}

// 视频蒙层弹出时，禁止蒙层底部滑动
const handleStopScroll = () => {
  state.top = window.scrollY;
  document.body.style.position = 'fixed';
  document.body.style.top = `${-state.top}px`;
}

// 蒙层关闭时调用的解除底部滑动锁定
const handleOpenScroll = () => {
  document.body.style.position = '';
  document.body.style.top = '';
  window.scrollTo(0, state.top); // 回到原先的top
}

const handlePlay = () => {
  state.videoPlayVisible = true
  handleStopScroll();
  setTimeout(()=>{
    // 获取当前可视页面的高度
    const curViewHeight = document.getElementsByClassName('video_play_box')[0].offsetHeight
    // 设置video弹出时的位置.
    const videoElement = document.getElementsByClassName('video-play')[0]
    videoElement.style.top = `${(curViewHeight - videoElement.clientHeight) / 2}px`
  },1)
}
// 关闭小视频事件
const handleCloseVideo = () => {
  // 释放被锁定的底部滑动事件
  handleOpenScroll()
  // 重置video播放进度
  document.getElementsByClassName('videoSelf')[0].currentTime = 0
  state.videoPlayVisible = false
}

</script>

<style lang="scss" scoped>
.swipe {
  height: 880px;
}
.swipe-img {
  width: 100%;
  height: 880px;
}
.bush-system-wrap {
  padding: 100px 50px 80px;
}
.title {
  text-align: center;
  font-size: 36px;
  font-weight: bold;
  color: #1A1F34;
}
.items {
  display: flex;
  flex-wrap: wrap;
  margin-top: 80px;
  margin-left: -25px;
  .item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 200px;
    height: 100px;
    box-sizing: border-box;
    border: 2px solid rgba(57,136,255,0.2);
    background-color: #F4F7FC;
    margin-left: 25px;
    margin-bottom: 30px;
    img {
      width: 36px;
      height: 36px;
      margin-bottom: 10px;
    }
    .label {
      font-size: 24px;
      color: #3988FF;
    }
  }
}
.decor {
  width: 643px;
  height: 522px;
  position: relative;
  background: url("@/assets/images/decor-bg.png") no-repeat;
  background-size: 100% 100%;
  margin-top: 100px;
  img {
    width: 539px;
    height: 362px;
    margin: 85px 51px 75px 53px;
    animation: move 8s linear infinite;
  }
}
.aside {
  height: 602px;
  background: url("@/assets/images/paragraph-bg.png") no-repeat;
  background-size: 100% 100%;
  padding: 80px 40px 60px;
  box-sizing: border-box;
  color: white;
  .title {
    color: white;
    margin-bottom: 36px;
  }
  p {
    font-size: 24px;
    font-weight: 400;
    line-height: 34px;
    opacity: 0.8;
  }
}
.latestDevelop {
  background-color: #F4F7FC;
  padding: 80px 50px;
}
.card-list {
  display: flex;
  margin-top: 60px;
  margin-left: -26px;
  overflow-x: auto;
  &::-webkit-scrollbar {
    width: 0;
    display:none;
  }
  .card {
    width: 280px;
    background-color: white;
    padding-bottom: 20px;
    margin-left: 26px;
    img {
      width: 280px;
      height: 170px;
      font-size: 0;
      margin-bottom: 20px;
    }
    .desc {
      margin: 0 20px;
      color: #3C4057;
      font-size: 20px;
      font-weight: 500;
      height: 52px;
      box-sizing: border-box;
      line-height: 26px;
      overflow:hidden;
      text-overflow:ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
  }
}
.video_box {
  position: relative;
  .play_icon {
    position: absolute;
    margin: 0 auto;
    left: 46%;
    top: 45%;
    cursor: pointer;
  }
}
.video-play {
  position: absolute;
  width: 100%;
  video {
    position: relative;
    width: 100%;
    z-index: 2008;
  }
}
.video_play_box {
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background-color: rgb(0, 0, 0, .9);
  z-index: 2000;
}
.video-content {
  span {
    position: absolute;
    left: 5%;
    top: 4%;
    z-index: 8888;
    i {
      color: white;
      font-size: 40px;
    }
  }
}
@-webkit-keyframes move {
  25% {
    transform: translateY(-10px);
  }
  50%,
  100% {
    transform: translateY(0);
  }
  75% {
    transform: translateY(10px);
  }
}
</style>
