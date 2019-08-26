import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/welcome',
    },
    {
      name:'welcome',
      path: '/welcome',
      component: () => import("./views/welcome"),
    },
    {
      name: 'question',
      path: '/question/:num',
      component: () => import("./components/question"),
    },
    {
      path: '/newQuestion',
      component: () => import("./components/newQuestion"),
    }
  ]
})
