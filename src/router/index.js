import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/home.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/about.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/contact.vue')
    },
    {
      path: '/hotnews',
      name: 'hotnews',
      component: () => import('../views/hotnews.vue')
    },
    {
      path: '/product',
      name: 'product',
      component: () => import('../views/product.vue')
    }

    ,{
      path: '/book/:id',
      name: 'book',
      component: () => import('../views/book.vue')
    }
  ]
})

export default router
