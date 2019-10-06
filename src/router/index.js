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

      //商机部分
      {
        name: 'grabSingle',
        path: '/grabSingle',
        component: () => import('@/pages/grabSingle'),
        meta: {
          title: '商机抢单页'
        },
      },
      {
        name: 'grabSingleYi',
        path: '/grabSingleYi',
        component: () => import('@/pages/grabSingleYi'),
        meta: {
          title: '商机已抢单页'
        },
      },
      {
        name: 'shangParticulars',
        path: '/shangParticulars',
        component: () => import('@/pages/shangParticulars'),
        meta: {
          title: '商机详情信息'
        },
      },
      {
        name: 'managementParticulars',
        path: '/managementParticulars',
        component: () => import('@/pages/managementParticulars'),
        meta: {
          title: '商机管理详情信息'
        },
      },
	  {
	    name: 'searchShang',
	    path: '/searchShang',
	    component: () => import('@/pages/searchShang'),
	    meta: {
	     title: '商机管理搜索导航'
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
        component: () => import('@/pages/addTask'),
        meta: {
         title: '添加任务'
        },
      },
	  //咕咕管理 新建任务
	  {
	    name: 'new_task',
	    path: '/new_task',
	    component: () => import('@/pages/addTask'),
	    meta: {
	     title: '新建任务'
	    },
	  },
	  //咕咕管理 查看任务
	 	  {
	 	    name: 'checkTask',
	 	    path: '/checkTask',
	 	    component: () => import('@/pages/checkTask'),
	 	    meta: {
	 	     title: '查看任务'
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
      {
        name: 'news',
        path: '/index/news',
        component: () => import('@/pages/index/news'),
        meta: {
          title: '消息'
        },
      },
        {
            name: 'accountMessage',
            path: '/index/news/accountMessage',
            component: () => import('@/pages/index/news/accountMessage'),
            meta: {
                title: '预约开户'
            },
        },
        {
            name: 'unspentLoansMessage',
            path: '/index/news/unspentLoansMessage',
            component: () => import('@/pages/index/news/unspentLoansMessage'),
            meta: {
                title: '贷款未支用'
            },
        },
        {
            name: 'noSuccessMessage',
            path: '/index/news/noSuccessMessage',
            component: () => import('@/pages/index/news/noSuccessMessage'),
            meta: {
                title: '未转化成功'
            },
        },
        {
            name: 'grabMessage',
            path: '/index/news/grabMessage',
            component: () => import('@/pages/index/news/grabMessage'),
            meta: {
                title: '抢单消息'
            },
        },
        {
            name: 'searchInfo',
            path: '/index3/informationAcquisition/searchInfo',
            component: () => import('@/pages/index3/informationAcquisition/searchInfo'),
            meta: {
                title: '信息采集搜索'
            },
        },
        {
            name: 'infoDetail',
            path: '/index3/informationAcquisition/infoDetail',
            component: () => import('@/pages/index3/informationAcquisition/infoDetail'),
            meta: {
                title: '信息采集详情'
            },
        },
        {
            name: 'statusMessage',
            path: '/index/news/statusMessage',
            component: () => import('@/pages/index/news/statusMessage'),
            meta: {
                title: '状态消息'
            },
        },
        {
            name: 'informationAcquisition',
            path: '/index3/informationAcquisition',
            component: () => import('@/pages/index3/informationAcquisition'),
            meta: {
                title: '信息采集'
            },
        },
        
    {
      name: 'loanLaunch',
      path: '/loanLaunch',
      component: () => import('@/pages/loanLaunch'),
      meta: {
      title: '贷款发起'
      },
    },
		//贷款 征信校验
		{
		  name: 'creditCheck',
		  path: '/index3/creditCheck',
		  component: () => import('@/pages/index3/creditCheck'),
		  meta: {
		   title: '征信校验'
		  },
		},
		//首页 编辑菜单
		{
		  name: 'menu',
		  path: '/menu',
		  component: () => import('@/pages/menu'),
		  meta: {
		   title: '征信校验'
		  },
		},
		//信息采集-企业信息
		{
		  name: 'collectOperation',
		  path: '/index3/collectOperation',
		  component: () => import('@/pages/index3/collectOperation'),
		  meta: {
		   title: '信息采集-企业信息'
		  },
		},
		//信息详情
		{
		  name: 'infoDetail',
		  path: '/index3/infoDetail',
		  component: () => import('@/pages/index3/infoDetail'),
		  meta: {
		   title: '信息详情'
		  },
    },
    {
      name: 'loanTracking',
      path: '/loanTracking',
      component: () => import('@/pages/loanTracking'),
      meta: {
        title: '贷后跟踪'
      }
    },
    {
      name: 'loanTrackingDetail',
      path: '/loanTracking/detail',
      component: () => import('@/pages/loanTracking/detail'),
      meta: {
        title: '贷后跟踪'
      }
    },
    {
      name: 'contractSign',
      path: '/contractSign',
      component: () => import('@/pages/contractSign'),
      meta: {
        title: '合同签订'
      }
    },
    {
      name: 'sign',
      path: '/contractSign/sign',
      component: () => import('@/pages/contractSign/sign'),
      meta: {
        title: '合同签订'
      }
    },
    {
      name: 'contractSignResult',
      path: '/contractSign/sign/result',
      component: () => import('@/pages/contractSign/sign/result'),
      meta: {
        title: '合同签订'
      }
    },
    {
      name: 'contractDetail',
      path: '/contractSign/contractDetail',
      component: () => import('@/pages/contractSign/contractDetail'),
      meta: {
        title: '已签约详情'
      }
    },
    {
      name: 'contractSearch',
      path: '/contractSign/search',
      component: () => import('@/pages/contractSign/search'),
      meta: {
        title: '合同搜索'
      }
    },
    ]
  })
