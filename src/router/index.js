import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/home.vue'
import Quanzhi from '../views/quanzhi.vue'
import Jianzhi from '../views/jianzhi.vue'
import OnlineCourse from '../views/OnlineCourse.vue'
import Jobdetails from '../views/Jobdetails.vue'
import CpyInfo from '../views/cpyinfo.vue'
import Coursevideo from '../views/Coursevideo.vue'
import Joblist from '../views/joblist.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta: {
        changeStyle: false,
        showTopBack: true
      }
    },
    {
      path: '/quanzhi',
      name: 'quanzhi',
      component: Quanzhi,
      meta: {
        changeStyle: true,
        showTopBar: true,
        showTopBack: false
      },
      children: [
        {
          path: '/quanzhi/joblist',
          name: 'joblist',
          component: Joblist,
          meta: {
            changeStyle: true,
            showTopBar: true,
            showTopBack: false
          },
        },
      ],
    },
    {
      path: '/jianzhi',
      name: 'jianzhi',
      component: Jianzhi,
      children: [
        {
          path: '/jianzhi/joblist',
          name: 'joblist',
          component: Joblist,
          meta: {
            changeStyle: true,
            showTopBar: true,
            showTopBack: false
          },
        },
      ],
      meta: {
        changeStyle: true,
        showTopBar: true,
        showTopBack: false
      }

    },
    {
      path: '/onlineCourse',
      name: 'onlineCourse',
      component: OnlineCourse,
      meta: {
        changeStyle: true,
        showTopBar: false,
        showTopBack: false
      }
    },
    {
      path: '/JD',
      name: 'Jobdetails',
      component: Jobdetails,
      meta: {
        changeStyle: true,
        showTopBar: true,
        showTopBack: false,
      }
    },
    {
      path: '/CpyInfo',
      name: 'CpyInfo',
      component: CpyInfo,
      meta: {
        changeStyle: true,
        showTopBar: false,
        showTopBack: false
      }
    },
    {
      path: '/CV',
      name: 'Coursevideo',
      component: Coursevideo,
      meta: {
        changeStyle: true,
        showTopBar: false,
        showTopBack: false
      }
    },

  ]
})
