<template lang="pug">
header.header(:class="{fixed: !isBlock}")
  .logo
    img(src="@/assets/images/logo.png")
  .wap-nav
    van-icon(name="wap-nav")
</template>

<script setup>
import {  } from 'vue'
defineProps({
  isBlock: {
    type: Boolean,
    default: false
  }
})
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 50px;
  height: 166px;
  background-color: #162139;
  box-sizing: border-box;
  &.fixed {
    position: absolute;
    top: 0;
    left: 0;
    background-color: transparent;
    z-index: 999;
  }
}
.logo {
  width: 295px;
  height: 68px;
  img {
    width: 100%;
    height: 100%;
  }
}
.wap-nav {
  color: white;
  font-size: 72px;
}
</style>
