import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Product from '@/components/Product'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main
    },
    {
      path:'/product-1',
      name:'product-1',
      component:Product
    }
  ]
})
