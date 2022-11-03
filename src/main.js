import { createApp } from 'vue'
import { Lazyload } from 'vant';
import App from './App.vue'
import router from './router'
import './styles/reset.scss'
const app = createApp(App)

app.use(Lazyload);
app.use(router)
app.mount('#app')
