import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },{
      path: '/login',
      name: 'login',
      component: () => import('../views/Login.vue')
    },{
      path: '/dashboard/:id',
      name: 'dashboard',
      component: () => import('../views/Dashboard.vue'),
      meta: {requiresAuth: true}
    },
  ]
})


router.beforeEach( async (to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // authentication check
    const token = localStorage.getItem('token')
    if (token) {
      // check if token is valid
      return next()
    }
    return next('/login') 
    
  }
  next()
})

export default router
