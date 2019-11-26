<template>
	<div class="main text-14">
	 <!--头部导航-->
		<van-nav-bar :title="title[step]"  left-arrow @click-left="onClickLeft" @click-right="go('newCollectTask')" :right-text="infos[0].status=='结束'?'新建':''"></van-nav-bar>
		<van-row class="noticeBar" >
			<van-col span="24" >
				<span class="card-title">{{info.msg}}</span>
			</van-col>
			<van-col span="24" class="card-num">
				190861000002299414<span></span>
			</van-col>
			<van-row class="card-bottom-row">
			<van-col span="12" class="margin-top">
				<van-row class="">逾期本金<span></span></van-row>
				<van-row class="">{{info.account}}</van-row>
			</van-col>
			<van-col span="12" class="left-border margin-top">
				<van-row class="">&nbsp;&nbsp;拖欠利息<span></span></van-row>
				<van-row class="">&nbsp;&nbsp;{{info.lixi}}<span></span></van-row>
			</van-col>
			</van-row>
		</van-row>
		<van-row class="title white-text">
		  <van-col class="col-title" span="6">催收时间</van-col>
			<van-col class="col-title" span="6" ><span>反馈情况</span></van-col>
			<van-col class="col-title" span="6" ><span>实际回收金额</span></van-col>
			<van-col class="col-title" span="6" ><span>流程状态</span></van-col>
		</van-row>
		<van-row :class="index%2==0?'white':'gray'" class="text"  v-for="(item,index) in this.infos" @click="go('newCollectTask')">
				<van-col class="col-title" span="6">{{item.data}}</van-col>
				<van-col class="col-title" span="6" ><span>{{item.fankui}}</span></van-col>
				<van-col class="col-title" span="6" ><span>{{item.account}}</span></van-col>
				<van-col class="col-title" span="6" ><span>{{item.status}}</span></van-col>
		</van-row>
	</div>
	
</template>

<script>
	import img1 from '@/assets/images/other/bg1125.png';
	import NavBar from '@/components/navBar'
	import Vue from 'vue';
	import { Grid, GridItem,Image,Panel,Cell, CellGroup,Row, Col,Dialog,Toast ,Tab, Tabs } from 'vant';
	
	export default {
  data() {
    return {
		title:['催收任务'],
		step:0,
		value:'',
		img1:img1,
		infos:[
		   {data:'2019-11-09',fankui:'承诺分期还款', account:'0',status:'结束'},
		   {data:'2019-11-09',fankui:'', account:'0',status:'结束'},
		   {data:'2019-11-10',fankui:'无力还款', account:'0',status:'结束'},
		   {data:'2019-11-10',fankui:'承诺一次性还款', account:'0',status:'结束'},
		   {data:'2019-11-10',fankui:'无明确回复', account:'0',status:'结束'},
		   {data:'2019-11-10',fankui:'承诺分期还款', account:'0',status:'结束'},
		   {data:'2019-11-10',fankui:'承诺分期还款', account:'0',status:'结束'},
		   {data:'2019-11-11',fankui:'承诺分期还款', account:'0',status:'结束'},
		   {data:'2019-11-11',fankui:'无', account:'0',status:'结束'},
		   {data:'2019-11-13',fankui:'无明确回复', account:'0',status:'结束'},
		],
		info:[],
	}
  },

  //数据预加载
  created(){
		let msg = this.$route.params.info;
		if (msg) {
			this.info = this.$route.params.info;
			sessionStorage.setItem('collectTask',JSON.stringify(msg));
		} else {
			var infos = sessionStorage.getItem('collectTask');
			this.info = JSON.parse(infos);
		}
  },

  //网页加载完成
  mounted () {
  
  },

  //声明方法
  methods : {
      onClickLeft:function(){
		  this.$router.go(-1);
	  },
	  go : function(url,item){
	    this.$router.push({name:url,params:item});
	  },
  },
  //引入组件
  components: {
	NavBar,

  }
 }
</script>

<style lang="scss" scoped>
	.title{
		background-image: linear-gradient(to right, #4bb0ff, #6149f6);
		height: 38px;
		// margin-top: 8px;
		line-height: 38px;
		font-size: 14px;
		padding: 4px 0px;
	}
	.col-title{
		// line-height: 38px;
		text-align: center;
	}	
	.span-min{
		font-size: 10px;
	}
	.col-word{
		padding-left: 6px;
		text-align: center;
	}
	.gray{
		background-color: rgb(245,245,245);
	}
	.white{
		background-color: white;
	}
	.white-text{
		color: white;
	}
	.text{
		// line-height: 38px;
		text-align: center;
		color: black;
		font-size: 14px;
		padding: 8px 0px;
	}
	.noticeBar{
		height: auto;
		// background-image: linear-gradient(to right, #4bb0ff, #6149f6);
		background-image: url('../../../../../assets/images/other/bg1125.png');
		background-size: 100% 100%;
		margin: 0px 16px;
		padding: 16px;
		border-radius: 16px;
		color: white;
		margin-bottom: 16px;
	}
	.card-title{
		color: #f6df50;
		font-size: 24px;
	}
	.card-num{
		line-height: 30px;
	}
	.margin-top{
		margin-top:14px;
	}
	.card-bottom-row{
		
		line-height: 24px;
	}
	.left-border{
		border-left: white 1px solid;
		padding-left: 4px;
	}
	.text-14{
		font-size: 14px;
	}
	.padding-left16{
		padding-left:16px;
	}

</style>
