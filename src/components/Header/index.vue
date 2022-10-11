<template lang="pug">
header.header(:class="{fixed: isBlock}")
  .logo
    img(src="@/assets/images/logo.png")
  .wap-nav
    van-popover(v-model:show="showPopover" placement="bottom-end")
      .menu
        .menu-item(v-for="(submenu, index) in menuList" :key="submenu.path" @click="handleClick(submenu)")
          span(:class="{arrow: submenu.children, up: expanded}") {{ submenu.label }}
          ul.menu-item-group(v-if="submenu.children" :class="{expanded: expanded}")
            li.item(v-for="item in submenu.children" :key="item.path" @click="handleClick(item)") {{item.label}}
          van-divider(v-if="index !== menuList.length - 1")
      template(#reference)
        van-icon(name="wap-nav")
.block(v-if="isBlock")
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
defineProps({
  isBlock: {
    type: Boolean,
    default: false
  }
})
const showPopover = ref(false)
const menuList = ref([
  { label: '首页', path: '/home' },
  {
    label: '业务体系',
    path: null,
    children: [
      { label: '资产收购', path: '/purchase' },
      { label: '数据服务', path: '/services' },
      { label: '须弥系统', path: '/sumeru' },
      { label: '资产评估服务', path: '/appraisal' },
      { label: '贷后全流程服务', path: '/loan' }
    ]
  },
  { label: '新闻资讯', path: '/news' },
  { label: '债务查询', path: '/debt' },
  { label: '关于东岸', path: '/about' },
  { label: '联系我们', path: '/contact' }
])
const expanded = ref(false)

const router = useRouter()
const handleClick = (item) => {
  if (!item.path) {
    expanded.value = !expanded.value
    return
  }
  router.push({ path: item.path })
  showPopover.value = false
}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 50px;
  height: 166px;
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;
  background-color: transparent;
  z-index: 999;
  &.fixed {
    position: fixed;
    background-color: #162139;
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
.block {
  height: 166px;
}
.menu {
  padding: 10px 35px;
  .menu-item {
    line-height: 70px;
    font-size: 28px;
    text-align: center;
    color: #333333;
    .arrow {
      position: relative;
      padding: 0 20px;
      &.up {
        &:after {
          transform: rotate(-225deg);
        }
      }
      &:after {
        position: absolute;
        transition: all 0.3s;
        top: 30%;
        right: -4px;
        margin-top: -5px;
        border: 6px solid;
        border-color: transparent transparent #333 #333;
        transform: rotate(-45deg);
        transform-origin: 6px 9px;
        content: "";
      }
    }
    &:last-child {
      border-bottom: none;
    }
    :deep(.van-divider) {
      margin: 0;
      border-color: #E5E5E5;
    }
  }
  .menu-item-group {
    height: 0;
    overflow: hidden;
    transition: height ease-in-out 0.3s;
    &.expanded {
      height: 350px;
    }
    .item {
      color: #666666;
    }
  }
}
</style>
