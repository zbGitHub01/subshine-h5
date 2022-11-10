import { defineStore } from "pinia";

export const sunshineStore = defineStore('sunshineStore',{
  state: () => {
    return {
      currentType: null,
      currentItem: {},
    }
   },

  actions: {
    setCurrentType(val) {
      this.currentType = val;
    }
  },
  // 开启数据缓存
  persist: {
    enabled: true
  }
})