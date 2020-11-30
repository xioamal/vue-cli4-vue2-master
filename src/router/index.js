import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const Usa = resolve => require(['@v/usa.vue'], resolve)
const Home = resolve => require(['@v/Home.vue'], resolve)
const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/usa',
    name: '/usa',
    component: Usa
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
