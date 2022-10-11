<script setup>
import { computed } from "vue";

// 从外部接收图片
// const props = defineProps({
//   imgs: Array,
// });

// 直接写死图片
const metaImages = import.meta.glob("./assets/*.png", {
  eager: true,
});
const imgs = Object.keys(metaImages).map((key) => {
  const fileName = key.split("/").pop();
  const name = fileName.split(".").shift();
  const src = metaImages[key].default;
  return { name, src };
});
const props = { imgs };

const sum = computed(() => props.imgs.length);
const divider = computed(() => Math.floor(sum.value / 2));
const row1 = computed(() => props.imgs.slice(0, divider.value));
const row2 = computed(() => props.imgs.slice(divider.value, sum.value));
const rows = computed(() => [
  { imgs: row1.value, key: 1 },
  { imgs: row2.value, key: 2, reverse: true },
]);
</script>

<template lang="pug">
article.marquee-wrapper
  .title 部分合作平台
  .marquee(v-for="row in rows" :key="row.key" :class="{ 'marquee__reverse': row.reverse }")
    .marquee__group(v-for="i in 2" :key="i")
      .marquee__item(v-for="img in row.imgs" :key="img.name")
        img(:src="img.src" :alt="img.name")
        span {{ img.name }}
</template>

<style lang="scss" scoped>
article.marquee-wrapper {
  width: 750px;
  height: 566px;
  background: #f4f7fc;
  overflow: hidden;
  --size: 158px;
  --gap: calc(var(--size) / 14);
  --duration: 25s;
  --scroll-start: 0;
  --scroll-end: calc(-100% - var(--gap));

  * {
    box-sizing: border-box;
  }
  .title {
    margin-top: 80px;
    margin-bottom: 26px;
    text-align: center;
    font-size: 36px;
    font-family: SourceHanSansCN-Bold, SourceHanSansCN;
    font-weight: bold;
    color: #1a1f34;
    line-height: 54px;
  }
  .marquee {
    display: flex;
    overflow: hidden;
    user-select: none;
    gap: var(--gap);
    mask-image: linear-gradient(
      var(--mask-direction, to right),
      hsl(0 0% 0% / 0),
      hsl(0 0% 0% / 1) 20%,
      hsl(0 0% 0% / 1) 80%,
      hsl(0 0% 0% / 0)
    );
  }

  .marquee__group {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: var(--gap);
    min-width: 100%;
    animation: scroll-x var(--duration) linear infinite;
  }

  .marquee__item {
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      width: var(--size);
      height: var(--size);
    }
    span {
      /* logo文本样式 */
      font-size: 20px;
      font-family: SourceHanSansCN-Regular, SourceHanSansCN;
      font-weight: 400;
      color: #3c4057;
      line-height: 30px;
    }
  }

  .marquee__reverse .marquee__group {
    animation-direction: reverse;
    animation-delay: -3s;
  }

  @keyframes scroll-x {
    from {
      transform: translateX(var(--scroll-start));
    }
    to {
      transform: translateX(var(--scroll-end));
    }
  }

  /* Parent wrapper */
  .wrapper {
    display: flex;
    flex-direction: column;
    gap: var(--gap);
    margin: auto;
    max-width: 100vw;
  }
}
</style>
