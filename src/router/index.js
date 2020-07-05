import Vue from 'vue'
import Router from 'vue-router'
import Jianzhang from '@/components/Jianzhang'
import Youji from '@/components/youji'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Jianzhang',
      component: Jianzhang
    },
    {
      path: '/youji',
      name: 'youji',
      component: Youji
    }
  ]
})
