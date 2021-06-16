import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/home.vue'
import Login from "@/views/login.vue";
import Register from "@/views/register.vue";
import Main from "@/views/main.vue";
import Subscriptions from "@/views/subscription.vue";
import profile from  "@/views/profile.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/about.vue')
  },
  {
    path: '/testimonials',
    name: 'Testimonials',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/testimonials.vue')
  },
  {
    path: '/login',
    name:'login',
    component: Login
  },
  {
    path: '/register',
    name:'register',
    component: Register
  },
  {
    path: '/subscriptions',
    name:'subscriptions',
    component: Subscriptions
  },
  {
    path: '/user',
    name:'main',
    component: Main
  },
  {
    path: '/profile',
    name:'profile',
    component: profile 
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})



export default router
