<template lang="pug">
Header
van-swipe.swipe(autoplay="5000" :show-indicators="false")
  van-swipe-item
    img.swipe-img(src="@/assets/images/banner1.png")
  van-swipe-item
    img.swipe-img(src="@/assets/images/banner2.png")
.bush-system-wrap
  .title 东岸业务体系
  .items
    .item(v-for="(item, index) in items" :key="index")
      img(:src="item.icon")
      .label {{item.label}}
  img.decor(src="@/assets/images/decor-bg.png")
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
ContactForm
Footer
</template>

<script setup>
import { ref } from 'vue'
import Header from '@/components/Header/index.vue'
import bushSystemIcon1 from '@/assets/images/bush-system-icon1.png'
import bushSystemIcon2 from '@/assets/images/bush-system-icon2.png'
import bushSystemIcon3 from '@/assets/images/bush-system-icon3.png'
import bushSystemIcon4 from '@/assets/images/bush-system-icon4.png'
import bushSystemIcon5 from '@/assets/images/bush-system-icon5.png'
import WalkLantern from '@/components/WalkLantern/index.vue'
import ContactForm from '@/components/ContactForm/index.vue'
import Footer from '@/components/Footer/index.vue'

import http from '@/utils/http'
const fetch = async () => {
  const data = await http.get('/api/advantage/findByAll')
  // console.log(data)
}

const latestList = ref([])
const fetchLatestDevelop = async () => {
  const { code, data } = await http.get('/api/article/findPage', { page: 1, pageSize: 60 })
  if (code === 200) {
    latestList.value = data.data
  }
}
fetchLatestDevelop()
const items = ref([
  {
    icon: bushSystemIcon1,
    label: '资产收购'
  },
  {
    icon: bushSystemIcon2,
    label: '数据服务'
  },
  {
    icon: bushSystemIcon3,
    label: '须弥系统'
  },
  {
    icon: bushSystemIcon4,
    label: '资产评估服务'
  },
  {
    icon: bushSystemIcon5,
    label: '贷后全流程服务'
  }
])
fetch()
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
  margin-top: 100px;
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
</style>
