import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import ProductManager from '@/components/apps/ProductManager'
import Checkout from '@/components/apps/Checkout'
import Settings from '@/components/apps/Settings'

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
      name: 'Product Manager',
      component: ProductManager
    },
    {
      path: '/settings',
      name: 'Settings',
      components: Settings
    },
    {
      path: '/checkout',
      name: 'Checkout',
      component: Checkout
    }
  ]
})
