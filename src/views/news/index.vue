<template lang="pug">
.aside0
.kong
van-pull-refresh(v-model="refreshing" @refresh="onRefresh")
    van-list(v-model:loading="loading" :finished="finished" finished-text="没有更多了" @load="onLoad")
        van-cell(v-for="item in newsList" :key="item.id" @click="onDetail(item.id)")
            .list-wrap
                img.item-img(:src="item.picture" alt="新闻资讯")
                .mr
                    span.item-name.color-hover {{ item.title }}
                    span.item-desc {{item.intro}}
                    div(style="display: flex; justify-content:space-between;")
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
    console.log(data);
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
  // 重新加载数据，将 loading 设置为 true，表示处于加载状态
  loading.value = true;
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
.aside0 {
  margin: 0 auto;
  width: 750px;
  height: 600px;
  background: url("@/assets/news/header-bg.png") no-repeat;
  background-size: 100% 100%;
}
.kong {
  height: 60px;
}
.list-wrap {
  width: 690px;
  height: 230px;
  background: #ffffff;
  margin: 0 auto 30px auto;
  border: 1px solid #efefef;
  display: flex;
  align-items: center;
  cursor: pointer;
  .item-img {
    width: 220px;
    height: 170px;
    display: block;
    margin: 0 30px;
  }
  .mr {
    // 再调?
    margin-right: 20px;
    font-size: 18px;
    display: flex;
    flex: 1;
    flex-direction: column;
    color: #3c4057;
    text-align: justify;
    .item-name {
      width: 390px;
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
      font-size: 28px;
      font-weight: 500;
      font-family: SourceHanSansCN-Medium, SourceHanSansCN;
      color: #1a1f34;
    }
    .item-desc {
      width: 390px;
      line-height: 29px;
      overflow: hidden;
      display: -webkit-box;
      text-overflow: ellipsis;
      text-overflow: -o-ellipsis-lastline;
      line-clamp: 2;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      margin: 6px 0 16px 0;
      font-size: 20px;
      font-family: SourceHanSansCN-Regular, SourceHanSansCN;
      font-weight: 400;
      color: #6f738c;
    }
  }
}
// hover这也不太懂
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
</style>
