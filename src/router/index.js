import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import ProductManager from '@/components/apps/ProductManager'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/products',
      name: ProductManager,
      component: ProductManager
    }
  ]
})
