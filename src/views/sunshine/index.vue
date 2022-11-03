
<script setup>
</script>

<template>
    <div class="main">
        <header></header>
        <router-view/>
    </div>
</template>

<style lang="scss" scoped>

.main {
  padding-bottom: 43px;
  min-height: 1936px;
  background: url('@/assets/sunshine/bkg.png') no-repeat center center;
  background-size: 100% 105%;
  header {
    width: 100%;
    height: 204px;
    background: url('@/assets/sunshine/banner-font.png') no-repeat center center;
    background-size: 551px 124px;
  }
}
</style>