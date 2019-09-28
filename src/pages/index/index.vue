<template>
  
  <div class="main">
   
   <!--头部-->
   <van-nav-bar
    :title='title'
    fixed
   />
	
 
  <div class="content" >
	  <van-notice-bar mode="closeable" :scrollable="true"  color="rgb(0,0,0)"
  background="rgba(238,238,238,0.7)">
	  客户张三进入名单池中，前往
	  <button >前往</button>
	  </van-notice-bar>
	<van-swipe :autoplay="3000" indicator-color="white" @change="onBannerChange">
		<van-swipe-item><img src="../../assets/images/other/banner.png" alt="" class="banner"></van-swipe-item>
		<van-swipe-item><img src="../../assets/images/other/banner.png" alt="" class="banner"></van-swipe-item>
		<van-swipe-item><img src="../../assets/images/other/banner.png" alt="" class="banner"></van-swipe-item>
		<van-swipe-item><img src="../../assets/images/other/banner.png" alt="" class="banner"></van-swipe-item>
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
			  <van-grid-item icon="photo-o" text="文字">
				  <img src="../../assets/images/84/InformationCollection@2x.png" alt="">
				   <p>信息采集</p>
			  </van-grid-item>
			  <van-grid-item icon="photo-o" text="文字">
			  			  	<img src="../../assets/images/84/Loaninitiation1@2x.png" alt="">
			  			   <p>贷款发起</p>
			  </van-grid-item>
			  <van-grid-item icon="photo-o" text="文字">
			  			  <img src="../../assets/images/84/Creditcheck1@2x.png" alt="">
			  			   <p>征信校验</p>
			  </van-grid-item>
			  <van-grid-item icon="photo-o" text="文字">
			  			 <img src="../../assets/images/84/Creditinquiry@2x.png" alt="">
			  			   <p>审贷查询</p>
			  </van-grid-item>
			</van-grid>
			<van-grid>
			  <van-grid-item icon="photo-o" text="文字">
			  		<img src="../../assets/images/84/signacontract@2x.png" alt="">
			  			   <p>合同签订</p>
			  </van-grid-item>
			  <van-grid-item icon="photo-o" text="文字">
			  			<img src="../../assets/images/84/Mortgageregistration@2x.png" alt="">
			  			   <p>抵押登记</p>
			  </van-grid-item>
			  <van-grid-item icon="photo-o" text="文字" @click="go('gugu')">
			  			 <img src="../../assets/images/84/gugu@2x.png" alt="">
			  			   <p>咕咕管理</p>
			  </van-grid-item>
			  <van-grid-item icon="photo-o" text="文字">
			  			 <img src="../../assets/images/84/custom.png"">
			  			 
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
			<van-button class="check"  type="primary" size="small" color="rgb(90,75,234)">查看</van-button>
			</van-col>
		</van-cell>
	</van-cell-group>
	<van-cell-group >
		<van-cell is-link >
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
			<van-col span="14">名下待抢单客户</van-col>
			<van-col span="10">
			<span class="cell-num"> 8 </span> 条
			<van-button class="check"  type="primary" size="small" color="rgb(90,75,234)">查看</van-button>
			</van-col>
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
import { Swipe, SwipeItem,Grid, GridItem,Image,Panel,NoticeBar,Cell, CellGroup,Row, Col } from 'vant';
Vue.use(Swipe).use(SwipeItem).use(Grid).use(GridItem).use(Image)
.use(Panel).use(NoticeBar).use(CellGroup).use(Row).use(Col);

export default {

  //基础数据存放处
  data (){
     return {
       title : '惠助你',
	    current: 0,
     }
  },

  //数据预加载
  created : function(){

    console.log('hello world');
    
  },

  //网页加载完成
  mounted : function(){
   
  },
  
  //声明方法
  methods : {
    
    go : function(url){
		
      this.$router.push('/'+url);
    },
	onBannerChange(index) {
		this.current = index;
	}

  },
  
  //计算属性
  computed: {

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

</style>
