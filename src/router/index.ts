import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/home',
    name: 'home',
    component: HomeView,
    beforeEnter: (to,from,next) => {
      if(localStorage.getItem('dataKey') != null){
        next();
      } else {
        next('/')
      }
    }
  },
  {
    path: '/',
    name: 'login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/Register.vue')
  },
  {
    path: '/details',
    name: 'Details',
    component: () => import('../views/Details.vue'),
     beforeEnter: (to,from,next) => {
      if(localStorage.getItem('dataKey') != null){
        next();
      } else {
        next('/')
      }
    }
  },
  {
    path: '/chat',
    name: 'chat',
    component: () => import('../views/chat.vue'),
     beforeEnter: (to,from,next) => {
      if(localStorage.getItem('dataKey') != null){
        next();
      } else {
        next('/')
      }
    }
  },
  {
    path: '/groupChat',
    name: 'groupChat',
    component: () => import('../views/GroupChat.vue'),
     beforeEnter: (to,from,next) => {
      if(localStorage.getItem('dataKey') != null){
        next();
      } else {
        next('/')
      }
    }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../views/Profile.vue'),
     beforeEnter: (to,from,next) => {
      if(localStorage.getItem('dataKey') != null){
        next();
      } else {
        next('/')
      }
    }
  },
  {
    path: '/inbox',
    name: 'Inbox',
    component: () => import('../views/Inbox.vue'),
     beforeEnter: (to,from,next) => {
      if(localStorage.getItem('dataKey') != null){
        next();
      } else {
        next('/')
      }
    }
  },
  {
    path: '/quiz',
    name: 'Quiz',
    component: () => import('../views/Quiz.vue'),
     beforeEnter: (to,from,next) => {
      if(localStorage.getItem('dataKey') != null){
        next();
      } else {
        next('/')
      }
    }
  },
  {
    path: '/answer',
    name: 'Answer',
    component: () => import('../views/Answer.vue'),
     beforeEnter: (to,from,next) => {
      if(localStorage.getItem('dataKey') != null){
        next();
      } else {
        next('/')
      }
    }
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('../views/404Page.vue'),
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
