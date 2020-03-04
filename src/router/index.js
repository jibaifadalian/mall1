import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () => import('../views/home/home.vue')
const Cart = () => import('../views/cart/cart.vue')
const Category = () => import('../views/category/category.vue')
const Profile = () => import('@/views/profie/profile.vue')
const Detail = () => import('@/views/detail/Detail')
Vue.use(VueRouter)

const routes = [
  { path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
  },
  {
    path: '/cart',
    component: Cart,
  },
  {
    path: '/profile',
    component: Profile,
  },
  {
    path: '/category',
    component: Category,
  }, 
  {
    path:'/detail',
    component:Detail
  }
]

const router = new VueRouter({
  routes,
  mode:'history'
})

export default router
