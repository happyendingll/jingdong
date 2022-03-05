import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '../views/MyLogin.vue'
import MyRegister from '../views/MyRegister.vue'
import MySearchV from '../views/MySearchV.vue'

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: MyRegister
  },
  {
    path: '/MySearchV',
    name: 'MySearchV',
    component: MySearchV
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
