import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import(/* webpackChunkName: "about" */ '../views/Admin.vue')
  },
  {
    path: '/admin-users',
    name: 'AdminUsers',
    component: () => import(/* webpackChunkName: "about" */ '../views/AdminUsers.vue')
  },
  {
    path: '/admin-products',
    name: 'AdminProducts',
    component: () => import(/* webpackChunkName: "about" */ '../views/AdminProducts.vue')
  },
  {
    path: '/admin-products/:id',
    name: 'AdminProductDetails',
    component: () => import(/* webpackChunkName: "about" */ '../views/AdminProductDetails.vue')
  },
  {
    path: '/products',
    name: 'Products',
    component: () => import(/* webpackChunkName: "about" */ '../views/Products.vue')
  },
  {
    path: '/products/:id',
    name: 'ProductDetails',
    component: () => import(/* webpackChunkName: "about" */ '../views/ProductDetails.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "about" */ '../views/Register.vue')
  },
  {
    path: '/reset',
    name: 'Reset',
    component: () => import(/* webpackChunkName: "about" */ '../views/Reset.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
