<template>

	<div class="main">

		<!--头部-->
		<van-nav-bar
				:title='title'
				fixed
		/>
		<img src="../../assets/images/48/Message@2x.png" class="img_massage" @click="go_newspage">

		<div class="content" >
			<div class="notice-bar" v-show="isShowNoticeBar">
				&nbsp;&nbsp;&nbsp;&nbsp;客户<span class="theme_color">张三</span>进入名单池中，前往
				<div class="btn-group">
				  <span class="rob" @click="go('index2')">抢单</span>
				  <span class="close" @click="closeNotice" >X</span>
				</div>
			</div>
			<van-swipe :autoplay="3000" indicator-color="white" @change="onBannerChange">
				<van-swipe-item><img src="../../assets/images/other/banner.png" alt="" class="banner"></van-swipe-item>
				<van-swipe-item><img src="../../assets/images/other/banner3.png" alt="" class="banner"></van-swipe-item>
				<van-swipe-item><img src="../../assets/images/other/banner.png" alt="" class="banner"></van-swipe-item>
				<van-swipe-item><img src="../../assets/images/other/banner3.png" alt="" class="banner"></van-swipe-item>
				<van-swipe-item><img src="../../assets/images/other/banner.png" alt="" class="banner"></van-swipe-item>
				<div class="custom-indicator" slot="indicator">
					<ul>
						<li class="indicator " v-bind:class="{ active: current ==0  }">&nbsp;</li>
						<li class="indicator" v-bind:class="{ active: current ==1  }">&nbsp;</li>
						<li class="indicator" v-bind:class="{ active: current ==2  }">&nbsp;</li>
						<li class="indicator" v-bind:class="{ active: current ==3  }">&nbsp;</li>
						<li class="indicator" v-bind:class="{ active: current ==4  }">&nbsp;</li>
					</ul>
				</div>

			</van-swipe>


			<div class="grid-container">
				<div class="box">
					<van-grid>
						<van-grid-item v-for="item in menu" @click="go(item.url)" v-show="item.isChecked">
							<img :src="item.icon" alt="">

							<p>{{item.name}}</p>
						</van-grid-item>
						<van-grid-item @click="go('menu')">
							<img src="../../assets/images/84/custom.png">
						</van-grid-item>
					</van-grid>
				</div>
			</div>
			<van-cell-group >
				<van-cell  >
					<!-- 使用 title 插槽来自定义标题 -->
					<template slot="title">
						<van-tag type="danger" class="left_tag">&nbsp;</van-tag>
						<span class="custom-title">&nbsp;&nbsp;待办事项</span>
					</template>
				</van-cell>
				<van-cell class="padding-bottom-16">
					<van-col span="14">客户合规审核未通过</van-col>
					<van-col span="10">
						<span class="cell-num">12 </span> 户
						<van-button class="check"  type="primary" size="small" color="rgb(90,75,234)">查看</van-button>
					</van-col>

				</van-cell>
				<van-cell class="padding-bottom-16">

					<van-col span="14">客户贷款逾期通知</van-col>
					<van-col span="10">
						<span class="cell-num">10 </span> 户
						<van-button class="check"  type="primary" size="small" color="rgb(90,75,234)">查看</van-button>
					</van-col>
				</van-cell>
				<van-cell class="padding-bottom-16">
					<van-col span="14">名下待抢单客户</van-col>
					<van-col span="10">
						<span class="cell-num"> 8 </span> 条
						<van-button class="check"  type="primary" size="small" color="rgb(90,75,234)" @click="go('index2')">查看</van-button>
					</van-col>
				</van-cell>
			</van-cell-group>
			<van-cell-group >
				<van-cell is-link @click="go('index3')">
					<!-- 使用 title 插槽来自定义标题 -->
					<template slot="title">
						<van-tag type="danger" class="left_tag">&nbsp;</van-tag>
						<span class="custom-title">&nbsp;&nbsp;贷款管理</span>
					</template>
				</van-cell>
				<van-cell>
					<div class=" dk-pan">
						<van-col span="24"><img class="company" src="../../assets/images/38/Companyname@2x.png" alt=""> 广州可可有限公司 </van-col>
						<van-col class="grey" span="8">企业主</van-col><van-col span="16">张三</van-col>
						<van-col class="grey" span="8">产品代码</van-col><van-col span="16">9613</van-col>
						<van-col class="grey" span="8">应还金额（元）</van-col><van-col class="orange" span="16">200,000</van-col>
						<van-col class="grey" span="8">到期时间</van-col><van-col span="16" class="orange">2019-07-15</van-col>
					</div>

				</van-cell>
				<van-cell>
					<div class=" dk-pan">
						<van-col span="24"><img class="company" src="../../assets/images/38/Companyname@2x.png" alt=""> 广州可可有限公司 </van-col>
						<van-col class="grey" span="8">企业主</van-col><van-col span="16">张三</van-col>
						<van-col class="grey" span="8">产品代码</van-col><van-col span="16">9613</van-col>
						<van-col class="grey" span="8">应还金额（元）</van-col><van-col class="orange" span="16">200,000</van-col>
						<van-col class="grey" span="8">到期时间</van-col><van-col span="16" class="orange">2019-07-15</van-col>
					</div>

				</van-cell>
				<van-cell>
					<div class=" dk-pan">
						<van-col span="24"><img class="company" src="../../assets/images/38/Companyname@2x.png" alt=""> 广州可可有限公司 </van-col>
						<van-col class="grey" span="8">企业主</van-col><van-col span="16">张三</van-col>
						<van-col class="grey" span="8">产品代码</van-col><van-col span="16">9613</van-col>
						<van-col class="grey" span="8">应还金额（元）</van-col><van-col class="orange" span="16">200,000</van-col>
						<van-col class="grey" span="8">到期时间</van-col><van-col span="16" class="orange">2019-07-15</van-col>
					</div>
				</van-cell>

				<van-cell>
					<br>
				</van-cell>

			</van-cell-group>
		</div>
		<!--tabbar-->
		<TabBar/>
	</div>
</template>

<script>
	//引入组件首字母大写
	import TabBar from '@/components/tabBar';
	import Vue from 'vue';
	import { Swipe, SwipeItem,Grid, GridItem,Image,Panel,NoticeBar,Cell, CellGroup,Row, Col,Dialog } from 'vant';
	Vue.use(Swipe).use(SwipeItem).use(Grid).use(GridItem).use(Image)
			.use(Panel).use(NoticeBar).use(CellGroup).use(Row).use(Col);

	export default {

		//基础数据存放处
		data (){
			return {
				title : '惠助你',
				current: 0,
				isShowNoticeBar:true
			}
		},

		//数据预加载
		created : function(){

			console.log('hello world');

		},

		//网页加载完成
		mounted : function(){
			
			Dialog.setDefaultOptions({
				confirmButtonText:'查看',
				confirmButtonColor:'#4c62e7'
			})

			var textArray = [
				'您名下<span style="color:#4c62e7">8</span>个客户进入商机池<br>请点击查看',
				'您已抢单客户<span style="color:#4c62e7">王川冰</span>产品额度<br>发生变化，请点击查看',
				'您已抢单客户<span style="color:#4c62e7">白小飞</span>商机已失效<br>请点击查看',
				
			];
			if(Math.floor(Math.random()*10)%8 == 7){
				
				Dialog.confirm({
				  title: '最新消息',
				  message: textArray[Math.floor(Math.random()*10)%3]
				}).then(() => {
				  // on confirm
				}).catch(() => {
				  // on cancel
				});
			}

		},

		//声明方法
		methods : {

			go_newspage : function(){

				this.$router.push({name:'news'})
			},
			go : function(url){

				this.$router.push('/'+url)
			},
			onBannerChange(index) {
				this.current = index;
			},
			closeNotice:function(){
				this.isShowNoticeBar = false
			},

		},

		//计算属性
		computed: {
			menu:function(){
				var arr = JSON.parse(localStorage.getItem('home_menu'));
				if(arr == null || arr == undefined){
					arr = [
						{name:"信息采集",icon:require('../../assets/images/84/InformationCollection@2x.png'),url:'index3/collectOperation',isChecked:true},
						{name:"贷款发起",icon:require('../../assets/images/84/Loaninitiation1@2x.png'),url:'index3/infoDetail',isChecked:true},
						{name:"征信校验",icon:require('../../assets/images/84/Creditcheck1@2x.png'),url:'index',isChecked:true},
						{name:"申贷查询",icon:require('../../assets/images/84/Creditinquiry@2x.png'),url:'index',isChecked:true},
						{name:"贷后跟踪",icon:require('../../assets/images/84/Post-loantracking@2x.png'),url:'index',isChecked:false},
						{name:"合同签订",icon:require('../../assets/images/84/signacontract@2x.png'),url:'index',isChecked:true},
						{name:"抵押登记",icon:require('../../assets/images/84/Mortgageregistration@2x.png'),url:'index',isChecked:true},
						{name:"线下活动",icon:require('../../assets/images/84/off-lineactivity@2x.png'),url:'index',isChecked:false},
						{name:"业绩展示",icon:require('../../assets/images/84/resultsshow@2x.png'),url:'index',isChecked:false},
						{name:"客户抢单",icon:require('../../assets/images/84/Custmerrobsingle.png'),url:'index',isChecked:false},
						{name:"咕咕管理",icon:require('../../assets/images/84/gugu@2x.png'),url:'gugu',isChecked:true},
						{name:"贷款催收",icon:require('../../assets/images/84/daikuancuishou.png'),url:'index',isChecked:false},
						{name:"商机管理",icon:require('../../assets/images/84/shangjiguanli.png'),url:'index',isChecked:false},
						{name:"贷款管理",icon:require('../../assets/images/84/daikuanguanli.png'),url:'index',isChecked:false},
					]

					localStorage.setItem('home_menu',JSON.stringify(arr));
				}

				return arr;
			}
		},

		components: {
			TabBar
		}
	}
</script>

<style lang="scss" scoped>
	.msg{
		text-align: center;
		padding:10px;
	}
	.banner{
		width: 100%;
	}
	.custom-indicator{
		position: absolute;
		bottom: 0px;
		height: 44px;
		width: 200px;
		left: 50%;
		margin-left: -100px;
		text-align: center;
		line-height: 44px;
	}
	.indicator{
		background-color: rgba(255,255,255,0.4);
		width: 12px;
		height: 12px;
		border-radius: 6px;
		display: inline-block;
		margin: 10px 6px;
	}
	.indicator.active{
		background-color: rgba(255,255,255,1);
	}
	.grid-container{
		padding: 10px 12px;

		border-radius: 8px;;

	}
	.grid-container .box{
		border: 1px solid rgb(248,248,248);
		box-shadow: 0 2px 2px 0 rgba(0,0,0,.15);
		min-height: 200px;
		border-radius: 12px;;
	}
	.grid-container .grid{
		width: 25%;
		height: 80px;
		float: left;
	}
	.grid-container img{
		width: 25%;
		min-width: 44px;
		display: block;
		margin: 0 auto;
	}
	.grid-container p{
		text-align: center;
		margin: 2px;;
		font-size: 14px;;
	}
	.left_tag{
		background-color: rgb(90,75,234);
		padding: 0px 4px;
	}
	.cell-num{
		color: #f76037;
		font-size: 26px;

	}
	.check{
		background-color: #4c62e7;
		padding: 0px 16px;
		border-radius: 14px;
		float: right;
	}
	.dk-pan{
		padding: 0px 20px;;
	}
	.dk-pan div{
		padding: 4px 0px;
	}
	.img_massage{
		position: fixed;
		top: 14px;
		right:12px ;
		height: 18px;
		width: 18px;
		z-index: 100;
	}
	.grey{
		color: #999999;
	}
	.orange{
		color: #f76037;
	}
	.company{
		width: 20px;
		height: 20px;
		display: inline;
		margin-left: -16px;
		vertical-align:text-center;
	}
	.padding-bottom-16{
		padding-bottom: 32px;;
	}
.msg{
  text-align: center;
  padding:10px;
}
.banner{
	width: 100%;
}
.custom-indicator{
	position: absolute;
	bottom: 0px;
	height: 44px;
	width: 200px;
	left: 50%;
	margin-left: -100px;
	text-align: center;
	line-height: 44px;
}
.indicator{
	background-color: rgba(255,255,255,0.4);
	width: 12px;
	height: 12px;
	border-radius: 6px;
	display: inline-block;
	margin: 10px 6px;
}
.indicator.active{
	background-color: rgba(255,255,255,1);
}
.grid-container{
	padding: 10px 12px;

	border-radius: 8px;;

}
.grid-container .box{
	border: 1px solid rgb(248,248,248);
	box-shadow: 0 2px 2px 0 rgba(0,0,0,.15);
	min-height: 200px;
	border-radius: 12px;;
}
.grid-container .grid{
	width: 25%;
	height: 80px;
	float: left;
}
.grid-container img{
	width: 25%;
	min-width: 44px;
	display: block;
	margin: 0 auto;
}
.grid-container p{
	text-align: center;
	margin: 2px;;
	font-size: 14px;;
}
.left_tag{
	background-color: rgb(90,75,234);
	padding: 0px 4px;
}
.cell-num{
	color: #f76037;
	font-size: 26px;

}
.check{
	background-color: #4c62e7;
	padding: 0px 16px;
	border-radius: 14px;
	float: right;
}
.dk-pan{
	padding: 0px 20px;;
}
.dk-pan div{
	padding: 4px 0px;
}
.grey{
	color: #999999;
}
.orange{
	color: #f76037;
}
.company{
	width: 20px;
	height: 20px;
	display: inline;
	margin-left: -16px;
	vertical-align:top;
	margin-top:2px;
}
.padding-bottom-16{
	padding-bottom: 32px;;
}
.notice-bar{
	position: absolute;
	top: 44px;
	width: 100%;
	z-index: 100;
	background-color: rgba(238,238,238,0.9);
	padding-top: 4px;
	font-size: 14px;
	line-height: 30px;;
}
.theme_color{
	color: #4c62e7;
}
.btn-group{
	float:right;
	margin-right: 12px;
}
.btn-group .rob{
	background-color: #4c62e7;
	color: #fff;
	border-radius: 15px;
	padding: 5px 24px;
	height: 30px;;
	margin-right: 8px;

}
.btn-group .close{
	background-color: rgb(169,169,169);
	color: #fff;
	border-radius: 16px;
	font-size: 14px;
	line-height: 20px;;
	padding: 3px 8px;
}
</style>
