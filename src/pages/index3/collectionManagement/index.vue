<template>
    <div class="main">
     <!--头部导航-->
		<van-nav-bar :title="title[step]"  left-arrow @click-left="onClickLeft" ></van-nav-bar>
		<van-row class="toolbar">
			<van-col span="12" class="text-center text-14">{{date}}<img class="icon-date" src="../../../assets/images/38/date.png" alt=""></van-col>
			<van-col span="12" class="text-center text-14">
				<van-col span="18" class="text-left"> {{bank}}</van-col>
				<van-col span="6"><img class="icon-date" src="../../../assets/images/38/Companyname@2x.png" alt=""></van-col>
			</van-col>
		</van-row>
		<img src="../../../assets/images/other/banner2.png" alt="" class="banner">

		<van-row class="row-modules">  
		  <van-col class="col-modules"  @click="go('myCustomerList')">
			  <img src="../../../assets/images/84/03.png" alt="" class="">
			   <p>我的客户</p>
		  </van-col>
		  <van-col class="col-modules"  @click="go('overdueManagement')">
					  <img src="../../../assets/images/84/04.png" alt="" class="">
					   <p>到逾期管理</p>
		  </van-col>
		  <van-col class="col-modules" @click="go('collectVisit')">
						<img src="../../../assets/images/84/05.png" alt="" class="">
					   <p>催收访场</p>
		  </van-col>
		</van-row>
		<div class="bgWhite"><p class="title">催收客户列表</p></div>
		
		<div class="card_div" v-for="(item,index) in this.infos" @click="go('myCustomer')">
		    <van-row style="padding: 4px 12px 0">
		        <van-col class="icon_box" span="2"><img src="../../../assets/images/38/Companyname@2x.png" class="img_location" ></van-col>
		        <van-col class="" span="19"><p class="card_list2_test" >{{item.gongsi}}</p></van-col>
				<van-col class="" span="1"><van-icon name="arrow" class="arrow-right"/></van-col>
			</van-row>
			<van-row style="padding: 4px 12px 0" v-if="index==0">
			    <van-col class="" span="2"></van-col>
				<van-col class="yuqi" span="7" ><span>本金逾期</span></van-col>
				<van-col class="yuqi" span="7" ><span>利息逾期</span></van-col>
			</van-row>
		    <van-row style="padding: 4px 12px 0">
		        <van-col class="" span="6"><p class="card_list1_test_left" >信贷余额</p></van-col>
				<van-col class="" span="6" style="text-align: left"><p class="card_list1_test_right" >{{item.yuer}}</p></van-col>
		        <van-col class="" span="6"><p class="card_list1_test_left" >逾用本金</p></van-col>
				<van-col class="" span="6" style="text-align: left"><p class="card_list1_test_right" >{{item.benjin}}</p></van-col>
		    </van-row>
			<van-row style="padding: 4px 12px 0">
			    <van-col class="" span="6"><p class="card_list1_test_left" >拖欠利息</p></van-col>
				<van-col class="" span="6" style="text-align: left"><p class="card_list1_test_right" >{{item.lixi}}</p></van-col>
			    <van-col class="" span="7"><p class="card_list1_test_left" >当前催收方式</p></van-col>
				<van-col class="" span="5" style="text-align: left"><p class="card_list1_test_right" >{{item.fangshi}}</p></van-col>
			</van-row>
		</div>
    </div>
</template>

<script>
	
	import NavBar from '@/components/navBar'
	import Vue from 'vue';
	import { Grid, GridItem,Image,Panel,Cell, CellGroup,Row, Col,Dialog,Toast ,Tab, Tabs } from 'vant';
	
	export default {
  data() {
    return {
		title:['催收管理'],
		step:0,
		date:'2019-11-21',
		bank:'建行江苏省分行小企业业务部',
		infos:[
			{gongsi:'厦门利室宾馆有限公司',yuer:108000,benjin:106902.2,lixi:2814.7,fangshi:'上门催收'},
			{gongsi:'厦门丽思贝斯建筑设计有限公司',yuer:500000,benjin:0,lixi:684.7,fangshi:'上门催收'},
			{gongsi:'厦门聚迈通电子商务有限公司',yuer:423600,benjin:0,lixi:0,fangshi:''},
			{gongsi:'厦门篮鑫贸易有限公司',yuer:950000,benjin:0,lixi:0,fangshi:''},
			{gongsi:'厦门德宇天成科技有限公司',yuer:108000,benjin:106902.2,lixi:2814.7,fangshi:'上门催收'},
		]
		
	}
  },

  //数据预加载
  created(){

  },

  //网页加载完成
  mounted () {
  
  },

  //声明方法
  methods : {
      onClickLeft:function(){
		  this.$router.go(-1);
	  },
	  go : function(url){
	    this.$router.push({name:url});
	  },
  },
  //引入组件
  components: {
	NavBar,

  }
 }
</script>

<style lang="scss" scoped>
	.main{
		background-color: rgb(238,238,238);
	}
	.content{
		padding: 0px;
		background-color: rgb(238,238,238);
		min-height: 600px;
	}
	.toolbar{
		background-color: white;
	}
	.text-center{
		text-align: center;
	}
	.text-left{
		text-align: left;
	}
	.no-border{
		border: 0px;
	}
	.icon-date{
		width: 20px;
		height: 20px;
		vertical-align: sub;
	}
	.banner{
		display: block;
		width:100%;
		height: auto;
	}
	.row-modules{
		background-color: white;
		padding: 8px ;
		.col-modules{
			width: 25%;
			text-align: center;
		}
		.col-modules img{
			width: 44px;
			height: 44px;
		}
		.col-modules p{
			font-size: 14px;
			margin: 0;
		}
	}
	.title{
		padding-left: 12px;
		padding-bottom: 4px;
		// font-weight: bold;
		font-size: 14px;
		margin: 0px 0 8px;
		color: #333333;
		background-color: white;
	}
	.yuqi{
		border: 1px sandybrown solid;
		border-radius: 8px;
		color: sandybrown;
		padding: 2px 0px;
		text-align: center;
		margin-right: 4px;
	}	
	.yuqi span{
		font-size: 16px;
	}
	.card_div{
	    position: relative;
	    width: auto;
	    padding:0px;
	    background-color: white;
	    margin: 8px 10px 0;
		border: rgb(235,235,235) solid 1px;
		border-radius: 8px;
		.card_div van-row{
			padding: 4px 12px 0
		}
		.icon_box{
		    margin-top: 6px;
		    justify-content: center;
		    align-items: center;
		    text-align: center;
		}
		.arrow-right{
			position: absolute;
			font-size: 24px;
			font-weight: bolder;
			color:#999999;
			top:6px;
			right:0px;
		}
		.img_location{
		    height: 18px;
		    width: 18px;
		}
		.card_list2_test{
		    color: #333333;
		    font-size: 14px;
			// font-weight: bold;
		    margin-block-start:0;
		    margin-block-end:0;
		    line-height: 30px;
		}
		.card_list1_test_left{
		    color: #999999;
		    font-size: 14px;
		    margin-block-start:0;
		    margin-block-end:0;
		    line-height: 30px;
		    padding-left: 8px;
		}
		.card_list1_test_right{
		    color: #333333;
		    font-size: 14px;
		    margin-block-start:0;
		    margin-block-end:0;
		    line-height: 30px;
		}
		.col-img{
			width: 62px;
			height: 62px;
		}
	}
	.bgWhite{
		background-color: white;
	}
	.text-14{
		font-size: 14px;
	}
	



</style>
