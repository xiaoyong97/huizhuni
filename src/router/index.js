import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);
export default new Router({
    mode : 'hash',//路由模式 需要本地预览 禁止用history
    routes: [

      //通配路由
      {
        path: '*',
        redirect: { name: 'index' }
      },


      //主页
      {
        name: 'index',
        path: '/index',
        component:  () => import('@/pages/index'),
        meta: {
         title: '惠助你'
        },
      },

      {
        name: 'index2',
        path: '/index2',
        component:  () => import('@/pages/index2'),
        meta: {
         title: '商机'
        },
      },

      {
        name: 'index3',
        path: '/index3',
        component:  () => import('@/pages/index3'),
        meta: {
         title: '商贷款机'
        },
      },

      {
        name: 'index4',
        path: '/index4',
        component:  () => import('@/pages/index4'),
        meta: {
         title: '惠点通'
        },
      },

      {
        name: 'index5',
        path: '/index5',
        component:  () => import('@/pages/index5'),
        meta: {
         title: '我的'
        },
      },

      //更多
      {
        name: 'more',
        path: '/more',
        component: () => import('@/pages/more'),
        meta: {
         title: '惠助你'
        },

      },
      {
        name: 'myPerformance',
        path: '/myPerformance',
        component: () => import('@/pages/myPerformance'),
        meta: {
          title: 'myPerformance'
        },

      },
      {
        name: 'myActivities',
        path: '/myActivities',
        component: () => import('@/pages/myActivities'),
        meta: {
          title: 'myActivities'
        },
      },
      {
        name: 'activityDetailsNotBegin',
        path: '/activityDetailsNotBegin',
        component: () => import('@/pages/activityDetailsNotBegin'),
        meta: {
          title: '活动详情未开始'
        },
      },
      {
        name: 'activityDetailsOver',
        path: '/activityDetailsOver',
        component: () => import('@/pages/activityDetailsOver'),
        meta: {
          title: '活动详情已结束'
        },
      },
        {
            name: 'activityDetailsIng',
            path: '/activityDetailsIng',
            component: () => import('@/pages/activityDetailsIng'),
            meta: {
                title: '活动详情进行中'
            },
        },
 //咕咕管理
	  {
	    name: 'gugu',
	    path: '/gugu',
	    component: () => import('@/pages/gugu'),
	    meta: {
	     title: '咕咕管理'
	    },
	  },
      //咕咕管理 添加任务
      {
        name: 'add_task',
        path: '/add_task',
        component: () => import('@/pages/add_task'),
        meta: {
         title: '添加任务'
        },
      },
	  //咕咕管理 新建任务
	  {
	    name: 'new_task',
	    path: '/new_task',
	    component: () => import('@/pages/add_task'),
	    meta: {
	     title: '新建任务'
	    },
	  },
	  //咕咕管理 搜索
	  {
	    name: 'search',
	    path: '/search',
	    component: () => import('@/pages/search'),
	    meta: {
	     title: '搜索'
	    },
	  },
        {
            name: 'viewList',
            path: '/viewList',
            component: () => import('@/pages/viewList'),
            meta: {
                title: '我的活动-查看名单'
            },
        },
      {
        name: 'attendanceList',
        path: '/attendanceList',
        component: () => import('@/pages/attendanceList'),
        meta: {
          title: '我的活动-签到名单'
        },
      },


    ]
  })
