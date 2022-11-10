import { createPinia } from 'pinia';
import piniaPluginPersist from 'pinia-plugin-persist' // 持久化

const store = createPinia();
store.use(piniaPluginPersist);

export default store;