<template>
    <div class="main">
     <!--头部导航-->
		<van-nav-bar :title="title[type]"  left-arrow @click-left="onClickLeft" ></van-nav-bar>
		<van-row class="toolbar">
			<van-col span="12" class="text-left padding-left ">{{date}}<img class="icon-date" src="../../../assets/images/38/date.png" alt=""></van-col>
			<van-col span="12" class="text-left padding-left">
				<van-col span="18" class="text-left"> {{bank}}</van-col>
				<van-col span="6"><img class="icon-date" src="../../../assets/images/38/Companyname@2x.png" alt=""></van-col>
			</van-col>
		</van-row>
		<table class="table" rules=rows>
				
			  <tr v-for="item in data"  >
				<td v-for="value in item">{{value}}</td>
			  </tr>
		</table>
    </div>
</template>

<script>
	
	import NavBar from '@/components/navBar'
	import Vue from 'vue';
	import { Grid, GridItem,Image,Panel,Cell, CellGroup,Row, Col,Dialog,Toast ,Tab, Tabs } from 'vant';
	
	export default {
	data() {
		return {
			title:['业务监测','银保监会口径','小企业责任部门口径'],
			step:0,
			date:'2019-11-21',
			bank:'建行江苏省分行小企业业务部',
			active:0,
			noticePan1_text:'人行口径',
			data:[
				['指标','指标值','比年初','比上月','比上旬'],
				['贷款余额(亿元)','21.37','7.39','0.05','-0.18'],
				['贷款客户数(户)','2018','770','36','10'],
				['不良贷款额(亿元)','1.18','0.03','0.02','0.1'],
				['不良贷款率','5.54','-2.73%','0.06%','0.09%'],
				['逾期贷款额(亿元)','1.19','0.04','0.01','0.10'],
				['逾期客户数(户)','39','12','1','-2'],
				['逾期非不良额(万元)','83.30','89.30','-89.20','-1051.51'],
				['逾期非不良率','0.04%','0.04%','-0.04%','-0.49%'],	
			],
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
	  }
  },
  //引入组件
  components: {
	NavBar,

  }
 }
</script>

<style lang="scss" scoped>
	.content{
		padding: 0px;
		background-color: rgb(238,238,238);
		min-height: 600px;
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
	.noticeBar{
		height: 130px;;
		background-image: linear-gradient(to right, #4bb0ff, #6149f6);
		background-size: 100% 100%;
		margin: 0px 16px;
		padding: 16px;
		border-radius: 16px;
		color: #FFFFFF;
		margin-top: 8px;
	}
	.noticePan1{
		background-color: rgb(87,92,236);
		margin-left: -16px;
		border-radius:0px 16px 16px  0px ;
		padding: 4px 32px 4px 4px;
		width: 60%;
		text-align: right;
		border: 1px lightgray solid;
	}
	.noticePan2{
		font-size: 26px;
		padding: 10px 0px 10px 0px;
	}
	.noticePan3,.noticePan6{
		padding: 4px;
	}
	.noticePan3 span,.noticePan6 span{
		color: rgb(76,224,148);
	}
	
	.noticePan4{
		padding: 4px 4px 4px 4px;
		height: 26px;
		
	}
	.noticePan5{
		color:rgb(249,241,40);
		font-size: 26px;
		padding: 10px 0px 10px 0px;
	}
	.tip{
		padding: 0px 32px ;
	}
	.van-cell__value span{
		padding-right: 16px;;
	}
	.redColor .van-cell__value span{
		color: rgb(232,86,93);
	}
	
	table{
		width: 100%;
		text-align: center;
	}
	table tr td{
		padding: 10px 0px;
	}
	table tr:first-child{
		text-align:  center;
		color: #fff;
		padding: 16px 0px;;
		background-image: linear-gradient(to right, #4bb0ff, #6149f6);
	}
	// .table-left-title{
	// 	padding: 6px 0px;
	// 	line-height: 20px;
	// 	vertical-align: middle; 
		
	// }
	// .table-content {
	// 	height: 48px;
	// 	line-height: 48px;
		
	// }
	table tr:nth-child(2n+1){
		background-color: lightgray;
	}
	.padding-left{
		padding-left: 16px;
		}
		.toolbar{
			margin-bottom: 8px;
		}
</style>
