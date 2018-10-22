import Vue from 'vue'
import Router from 'vue-router'


import Home from '@/components/Home'
import Cart from '@/pages/Cart'

//admin
import Index from '@/pages/admin/Index'
import New from '@/pages/admin/New'
import Products from '@/pages/admin/Products'
import Edit from '@/pages/admin/Edit'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Index,
      children: [
        {
          path: 'new',
          name: 'New',
          component: New
        },
        {
          path: 'products',
          name: 'Products',
          component: Products,
          meta: {
            isUseCache: false, // 这个字段的意思稍后再说
            keepAlive: true // 通过此字段判断是否需要缓存当前组件
          }
        },
        {
          path: 'edit/:id',
          name: 'Edit',
          component: Edit
        }
      ]
    }
  ]
})
