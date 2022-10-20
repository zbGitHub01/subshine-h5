<template lang="pug">
.aside0
.aside
  van-pull-refresh(v-model="loading" @refresh="onRefresh" style="background:#F4F7FC")
      van-list(v-model:loading="loading" :finished="finished" finished-text="没有更多了" @load="onLoad")
          van-cell(v-for="item in newsList" :key="item.id" @click="onDetail(item.id)")
              .list-wrap
                  img.item-img(:src="item.picture" alt="新闻资讯")
                  .mr
                      section
                        span.item-name.color-hover {{ item.title }}
                        span.item-desc {{item.intro}}
                      div(style="display: flex; justify-content:space-between;line-height: 27px")
                          span(style="color:#6f738c").color-6f738c {{(item.time || "").trim().split(/\s+/).shift()}}
                          .color-hover(style="position: relative")
                              span.item-detail 查看详情
</template>

<script setup>
import { ref } from "vue";
import http from "@/utils/http";
import { useRouter } from "vue-router";
const router = useRouter();
const newsList = ref([]);
const loading = ref(false);
const finished = ref(false);
const refreshing = ref(false);

// 下拉刷新新闻列表
const params = {
  page: 0,
  pageSize: 10,
};
const onLoad = async () => {
  // 异步更新数据
  params.page++;
  const { code, data } = await http.get("/api/article/findPage", params);
  if (code === 200) {
    newsList.value.push(...data.data);
  }
  // 加载状态结束
  loading.value = false;
  // 数据全部加载完成
  if (newsList.value.length >= data.total) {
    finished.value = true;
  }
};
const onRefresh = () => {
  // 清空列表数据
  finished.value = false;
  newsList.value = [];
  // 重新加载数据，将 loading 设置为 true，表示处于加载状态
  loading.value = true;
  // 重置页码
  params.page = 0;
  onLoad();
};

// 跳转新闻详情
const onDetail = (id) => {
  router.push({ path: "/news-detail", query: { id } });
};
</script>
<style lang="scss" scoped>
:deep(.van-cell) {
  padding: 0 !important;
}
.aside {
  background: #f4f7fc;
  padding: 60px 30px;
}
.aside0 {
  margin: 0 auto;
  width: 750px;
  height: 600px;
  background: url("@/assets/news/header-bg.png") no-repeat;
  background-size: 100% 100%;
}

.list-wrap {
  box-sizing: border-box;
  width: 690px;
  height: 206px;
  background: #ffffff;
  border: 1px solid #efefef;
  display: flex;
  align-items: center;
  cursor: pointer;
  .item-img {
    width: 240px;
    height: 146px;
    margin: 30px 20px;
    display: block;
    margin-right: 20px;
  }
  .mr {
    box-sizing: border-box;
    height: 100%;
    margin-right: 20px;
    font-size: 18px;
    padding: 20px 0;
    display: flex;
    flex: 1;
    width: 0;
    flex-direction: column;
    color: #3c4057;
    // text-align: justify;
    justify-content: space-between;
    .item-name {
      width: 390px;
      // height: 76px;
      // overflow: hidden;
      // text-overflow: ellipsis;
      // white-space: nowrap;
      // text-overflow: -o-ellipsis-lastline;
      text-overflow: -o-ellipsis-lastline;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      line-clamp: 2;
      -webkit-box-orient: vertical;
      line-height: 36px;
      font-size: 26px;
      font-weight: 500;
      font-family: "SourceHanSansCN-Medium, SourceHanSansCN";
      color: #1a1f34;
    }
    .item-desc {
      width: 390px;
      line-height: 29px;
      white-space: nowrap;
      overflow: hidden;
      display: block;
      text-overflow: ellipsis;
      text-overflow: -o-ellipsis-lastline;
      // line-clamp: 1;
      // -webkit-line-clamp: 2;
      // -webkit-box-orient: vertical;
      // margin: 6px 0 16px 0;
      margin-top: 16px;
      font-size: 20px;
      font-family: SourceHanSansCN-Regular, SourceHanSansCN;
      font-weight: 400;
      color: #6f738c;
    }
  }
}

.color-hover:hover {
  color: #3988ff;
  .item-detail::after {
    border-top: 7px solid transparent;
    border-left: 6px solid #3988ff;
    border-bottom: 7px solid transparent;
  }
}
.item-detail {
  padding: 15px;
}
.item-detail::after {
  content: "";
  position: absolute;
  width: 0px;
  height: 0px;
  top: 50%;
  transform: translateY(-50%);
  left: calc(100% + -8px);
  border-top: 7px solid transparent;
  border-left: 6px solid #3c4057;
  border-bottom: 7px solid transparent;
}

.aside :deep(.van-cell) {
  margin-bottom: 30px;
}
</style>
