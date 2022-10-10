<template lang="pug">
.partner
  .title 部分行业合作客户
  //.cooperation-marquee-wrap
  //  .marquee-item
  //    img(v-for="item in imgGroups.group1" :key="item" :src="item")
  //    img(:src="imgGroups.group1[0]")
  //    img(:src="imgGroups.group1[1]")
  //    img(:src="imgGroups.group1[2]")
  van-swipe.swipe(autoplay="7000" :show-indicators="false" :duration="7000" ref="swipe")
    van-swipe-item.marquee-item
      img(:src="imgGroups.group1[0]")
      img(:src="imgGroups.group1[1]")
      img(:src="imgGroups.group1[2]")
    van-swipe-item.marquee-item
      img(:src="imgGroups.group1[3]")
      img(:src="imgGroups.group1[4]")
      img(:src="imgGroups.group1[5]")
    van-swipe-item.marquee-item
      img(:src="imgGroups.group1[6]")
      img(:src="imgGroups.group1[7]")
      img(:src="imgGroups.group1[4]")
  van-swipe.swipe(autoplay="5000" :show-indicators="false" :duration="5000" ref="swipe1")
    van-swipe-item.marquee-item
      img(:src="imgGroups.group2[0]")
      img(:src="imgGroups.group2[1]")
      img(:src="imgGroups.group2[2]")
    van-swipe-item.marquee-item
      img(:src="imgGroups.group2[3]")
      img(:src="imgGroups.group2[4]")
      img(:src="imgGroups.group2[5]")
    van-swipe-item.marquee-item
      img(:src="imgGroups.group2[6]")
      img(:src="imgGroups.group2[7]")
      img(:src="imgGroups.group2[4]")
  van-swipe.swipe(autoplay="7000" :show-indicators="false" :duration="7000" ref="swipe2")
    van-swipe-item.marquee-item
      img(:src="imgGroups.group3[0]")
      img(:src="imgGroups.group3[1]")
      img(:src="imgGroups.group3[2]")
    van-swipe-item.marquee-item
      img(:src="imgGroups.group3[3]")
      img(:src="imgGroups.group3[4]")
      img(:src="imgGroups.group3[5]")
    van-swipe-item.marquee-item
      img(:src="imgGroups.group3[6]")
      img(:src="imgGroups.group3[7]")
      img(:src="imgGroups.group3[4]")
</template>

<script setup>
import { reactive, ref, onMounted } from 'vue'
const imgGroups = reactive({
  group1: [],
  group2: [],
  group3: []
})
const swipe = ref()
const swipe1 = ref()
const swipe2 = ref()
const metaImages = import.meta.glob('./assets/cooperation-img*.png', { eager: true })
let imgGroupIndex = 0
Object.keys(metaImages).forEach((key, index) => {
  if (index % 8 === 0) {
    imgGroupIndex++
  }
  imgGroups['group' + imgGroupIndex].push(metaImages[key].default)
})
onMounted(() => {
  swipe.value.next()
  swipe1.value.next()
  swipe2.value.next()
})
</script>

<style lang="scss" scoped>
.partner {
  margin-top: 100px;
  .title {
    text-align: center;
    font-size: 36px;
    font-weight: bold;
    color: #1A1F34;
    margin-bottom: 80px;
  }
}
.cooperation-marquee-wrap {
  margin-top: 80px;
  overflow: hidden;
  height: 250px;
}
.swipe {
  height: 70px;
  margin-bottom: 20px;
  :deep(.van-swipe__track) {
    transition-timing-function: linear;
  }
}
.marquee-item {
  display: inline-flex;
  //animation: move 5s linear infinite;
  img {
    width: 260px;
    height: 70px;
  }
}
@keyframes move {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-2080px);
  }
}
</style>
