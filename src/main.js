import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'normalize.css'
import { Field, CellGroup } from 'vant'

createApp(App).use(store).use(router).use(Field).use(CellGroup).mount('#app')
