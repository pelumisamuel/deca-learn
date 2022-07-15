import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import MovieView from '../views/MovieView.vue'
import profileView from '../views/profileView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
  },

  {
    path: '/register',
    name: 'register',
    component: RegisterView,
  },
  {
    path: '/:id',
    name: 'movie',
    component: MovieView,
  },
  {
    path: '/profile',
    name: 'profile',
    component: profileView,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    },
  },
]

const router = createRouter({
  mode: 'history',
  history: createWebHashHistory(),
  routes,
})

export default router
