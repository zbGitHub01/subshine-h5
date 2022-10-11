<template lang="pug">
.title {{detailData.title}}
.title1
    span {{(detailData.time || "").trim().split(/\s+/).shift()}} 
    span.sp 来源：东岸资产
.xian
.news-detail-content(v-html="detailData.html")
.button
    van-button.bt(plain type="primary" @click="onDetail('prev')") 上一篇
    van-button.bt(plain type="primary" @click="onDetail('next')") 下一篇
.other
  .title3 其他资讯
  .card-list
    router-link(v-for="item in otherDetailData" :key="item.id" :to="{ query: {...($route.query || {}), id: item.id }}")
      .card
        img(:src="item.picture")
        .desc {{ item.title }}
</template>

<script setup>
import http from "@/utils/http";
import { computed, ref, watch } from "vue";
import { useRouter, useRoute } from "vue-router";
const router = useRouter();
const route = useRoute();
// 通过新闻id获取新闻详情
const detailData = ref([]);
// const otherDetailData = ref([]);
watch(
  () => route.query.id,
  async (id) => {
    // 做一个兜底，路径直接跳转，没有新闻id的情况
    if (!id) return;
    const { code, data } = await http.get("/api/article/findById", { id });
    if (code === 200) {
      detailData.value = data;
      console.log(data);
    }
  },
  { immediate: true }
);

// 上一篇下一篇跳转
// 所有新闻
let allNews = ref([]);
const getAllNewsList = async () => {
  const { code, data } = await http.get("/api/article/findPage", {
    page: 1,
    pageSize: 500,
  });
  if (code === 200) {
    allNews.value = data.data;
  }
};
getAllNewsList();

const otherDetailData = computed(() =>
  allNews.value.filter((item) => item.id != route.query.id)
);

const onDetail = async (type) => {
  const temIndex = allNews.value.findIndex(
    (item) => item.id === route.query.id
  );
  let dataIndex = type === "prev" ? temIndex - 1 : temIndex + 1;
  // 当前为第一篇点击上一篇跳转到最后一篇
  if (type === "prev" && temIndex === 0) dataIndex = allNews.value.length - 1;
  // 当前为最后一篇点击上一篇跳转到第一篇
  if (type === "next" && temIndex === allNews.value.length - 1) dataIndex = 0;
  router.push({
    query: { id: allNews.value[dataIndex].id },
  });
};
</script>
<style lang="scss">
.news-detail-content {
  margin: 26px 0 50px 0;
  padding: 0 40px;
  text-align: justify;

  font-size: 26px;
  font-family: SourceHanSansCN-Regular, SourceHanSansCN;
  font-weight: 400;
  color: #3c4057;
  line-height: 32px;

  img {
    max-width: 100% !important;
    height: auto !important;
    margin: 10px auto;
  }
}
</style>
<style lang="scss" scoped>
.title {
  font-size: 32px;
  font-family: SourceHanSansCN-Medium, SourceHanSansCN;
  font-weight: 500;
  color: #3988ff;
  line-height: 48px;
  margin: 80px 0 35px 0;
  padding: 0 40px;
  text-align: justify;
}
.title1 {
  margin: 35px 0 29px 0;
  padding: 0 40px;
  font-size: 24px;
  font-family: SourceHanSansCN-Regular, SourceHanSansCN;
  font-weight: 400;
  color: #6f738c;
  line-height: 36px;
  .sp {
    margin-left: 20px;
  }
}
.xian {
  width: 670px;
  margin: 0 40px;
  border-bottom: 1px solid #efefef;
}
.button {
  display: flex;
  justify-content: space-around;
  margin: 50px 0 100px 0;
  padding: 0 120px;
  .bt {
    width: 144px;
    height: 48px;
    font-size: 24px;
    font-family: SourceHanSansCN-Regular, SourceHanSansCN;
    font-weight: 400;
    color: #3988ff;
    line-height: 36px;
    // border: 1px solid #3988FF;
  }
}
.other {
  background-color: #f4f7fc;
  padding: 80px 50px;
}
.title3 {
  text-align: center;
  font-size: 36px;
  font-weight: bold;
  color: #1a1f34;
}
.card-list {
  display: flex;
  margin-top: 60px;
  margin-left: -26px;
  overflow-x: auto;
  &::-webkit-scrollbar {
    width: 0;
    display: none;
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
      color: #3c4057;
      font-size: 20px;
      font-weight: 500;
      height: 52px;
      box-sizing: border-box;
      line-height: 26px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
  }
}
</style>
