import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () => import('../views/home/home.vue')
const Cart = () => import('../views/cart/cart.vue')
const Category = () => import('../views/category/category.vue')
const Profile = () => import('../views/profie/profile.vue')

Vue.use(VueRouter)

const routes = [

    // path: '/',
    // redirect: '/home',
    // meta: {
    //   title: '首页'
    // }

  {
    path: '/home',
    component: Home,
    name: Home,
    meta: {
      title: '首页'
    }
  },
  {
    path: '/cart',
    component: Cart,
    name: Cart,
    meta: {
      title: '购物车'
    }
  },
  {
    path: '/profile',
    component: Profile,
    name: Profile,
    meta: {
      title: '我的'
    }
  },
  {
    path: '/category',
    component: Category,
    name: Category,
    meta: {
      title: '分类'
    }
  }, 
]

const router = new VueRouter({
  routes
})

export default router
