<template lang="pug">
.partner
  .title 部分合作平台
  //.cooperation-marquee-wrap
  //  .marquee-item
  //    img(v-for="item in imgGroups.group1" :key="item" :src="item")
  //    img(:src="imgGroups.group1[0]")
  //    img(:src="imgGroups.group1[1]")
  //    img(:src="imgGroups.group1[2]")
  van-swipe.swipe(autoplay="7000" :show-indicators="false" :duration="7000" ref="swipe" :stop-propagation="false" width="260")
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
      img(:src="imgGroups.group1[4]")
      img(:src="imgGroups.group1[3]")
  van-swipe.swipe(autoplay="5000" :show-indicators="false" :duration="5000" ref="swipe1" :stop-propagation="false" width="261")
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
      img(:src="imgGroups.group2[4]")
      img(:src="imgGroups.group2[3]")
</template>

<script setup>
import { reactive, ref, onMounted } from "vue";
const props = defineProps({
  isText: Boolean,
});
const imgGroups = reactive({
  group1: [],
  group2: [],
  // group3: [],
});
const swipe = ref();
const swipe1 = ref();
// const swipe2 = ref();
const metaImages = import.meta.glob("./assets/brand-img*.png", {
  eager: true,
});
let imgGroupIndex = 0;
Object.keys(metaImages).forEach((key, index) => {
  if (index % 7 === 0) {
    imgGroupIndex++;
  }
  imgGroups["group" + imgGroupIndex].push(metaImages[key].default);
});
console.log({ imgGroups });
onMounted(() => {
  swipe.value.next();
  swipe1.value.next();
});
</script>

<style lang="scss" scoped>
.partner {
  margin-top: 100px;
  .title {
    text-align: center;
    font-size: 36px;
    font-weight: bold;
    color: #1a1f34;
    margin-bottom: 80px;
  }
}
.cooperation-marquee-wrap {
  margin-top: 80px;
  overflow: hidden;
  height: 250px;
}
.swipe {
  height: 158px;
  margin-bottom: 20px;
  :deep(.van-swipe__track) {
    transition-timing-function: linear;
    width: 500px !important;
  }
}
.marquee-item {
  display: inline-flex;
  img {
    width: 158px;
    height: 158px;
  }
}

.text {
  width: 670px;
  height: 130px;
  font-size: 20px;
  font-family: SourceHanSansCN-Regular, SourceHanSansCN;
  font-weight: 400;
  color: #3c4057;
  line-height: 26px;
  margin: 0 auto 60px auto;
  text-align: justify;
}
</style>
