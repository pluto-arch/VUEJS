import Vue from 'vue'
import Router from 'vue-router'
import HomeView from '@/components/HomeView'
import DetailsView from '@/components/DetailsView'
import UpdateView from '@/components/UpdateView'
import CreateView from '@/components/CreateView'
import DeleteView from '@/components/DeleteView'



Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomeView',
      component: HomeView
    },
    {
      path: '/details/:id',
      name: 'DetailsView',
      component: DetailsView
    },
    {
      path: '/updates/:id',
      name: 'UpdateView',
      component: UpdateView
    },
    {
      path: '/creates',
      name: 'CreateView',
      component: CreateView
    },
    {
      path: '/deletes/:id',
      name: 'DeleteView',
      component: DeleteView
    }
  ]
})
