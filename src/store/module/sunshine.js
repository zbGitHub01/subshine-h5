import { defineStore } from "pinia";

export const sunshineStore = defineStore('sunshineStore',{
  state: () => {
    return {
      currentType: null, // 首页点击项目还是活动的当前type
      currentItem: {},  // details页点击查看详情的当前项
      y:0
    }
   },

  actions: {
    setCurrentType(val) {
      this.currentType = val;
    },
    setCurrentItem( obj = {} ) {
      this.currentItem = Object.assign(this.currentItem,obj);
    },
    setY(value){ this.y = value}
  },
  persist: {
    enabled: true,
    strategies: [
      {storage: localStorage, paths: ['currentType']}
    ]
  }
})