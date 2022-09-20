/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-09-10 12:17:21
 * @LastEditors: 顾森
 * @LastEditTime: 2022-09-19 18:41:36
 * @FilePath: \新建文件夹\sigin\src\router\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import MainView from '../views/MainView.vue'

Vue.use(VueRouter)

// 解决报错
const originalPush = VueRouter.prototype.push
const originalReplace = VueRouter.prototype.replace
// push
VueRouter.prototype.push = function push (location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}
// replace
VueRouter.prototype.replace = function push (location, onResolve, onReject) {
  if (onResolve || onReject) return originalReplace.call(this, location, onResolve, onReject)
  return originalReplace.call(this, location).catch(err => err)
}

const routes = [
  {
    path:'/login',
    name:'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/LoginPage.vue'),
    // 关于使用props进行路由的传参，这种方法传递的参数，在跳转的path:'/login'的组件里面使用props进行接收和使用
    // 不管从哪个地方跳转到当前路由path:'/login'的时候，这个路由传参都会实现
    props: {
      id: 1,
      title: 2
    }
  },
  {
    path: '/',
    name: 'home',
    component: MainView,
    beforeEnter(to,from,next) {
      // 独享路由，会在路由跳转到当前时触发该守卫
      // console.log(to,from, '独享路由守卫')
      next()
    },
    redirect: '/news',
    children:[
      {
        path: 'news',
        name: 'news',
        component: () => import('@/page/news/News.vue')
      },
      {
        path: 'feedbackManagement',
        name: 'feedbackManagement',
        component: () => import('@/page/basicInformation/informationList/FeedbackManagement.vue')
      },
      {
        path: 'informationManagement',
        name: 'informationManagement',
        component: () => import('@/page/basicInformation/informationList/InformationManagement.vue')
      },
      {
        path: 'nodeManagement',
        name: 'nodeManagement',
        component: () => import('@/page/basicInformation/managementList/NodeManagement.vue')
      },
      {
        path: 'processManagement',
        name: 'processManagement',
        component: () => import('@/page/basicInformation/managementList/ProcessManagement.vue')
      },
      {
        path: 'topicMeeting',
        name: 'topicMeeting',
        component: () => import('@/page/management/meetingModule/TopicMeeting.vue')
      },
      {
        path: 'developmentProcess',
        name: 'developmentProcess',
        component: () => import('@/page/management/timeModule/DevelopmentProcess.vue')
      },
      {
        path: 'timeManagement',
        name: 'timeManagement',
        component: () => import('@/page/management/timeModule/TimeManagement.vue')
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({ 
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
// 配置全局前置路由守卫
router.beforeEach((to, from, next)=>{
  // 在这里进行判断那些组件需要放行，那些组件需要拦截下来
  // console.log(to, from);
  next();
})
// 配置全局后置路由组件守卫
router.afterEach((to,from) => {
  // 一般用于组件路由切换之后进行更换页面的Title
  // console.log(to, from)
  document.title = to.name
})
export default router
