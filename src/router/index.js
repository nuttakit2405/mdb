import Vue from 'vue'
import Router from 'vue-router'
import mdb from '@/components/mdb'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'mdb',
      component: mdb
    }
  ]
})
