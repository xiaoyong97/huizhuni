<template>
    <div class="main">
		
     <!--头部导航-->
		<van-nav-bar :title="title[step]"  left-arrow @click-left="onClickLeft" ></van-nav-bar>
		<van-search
		   v-model="value"
		   placeholder="请输入客户名称或客户编号查询"
		   show-action:false
		   shape="round"
		   @search="onSearch"
		  >
		  </van-search>
		 <div class="content-bar margin-top">
			 <van-row class="tab-title tab-list">
			  <van-col class="col-title" span="8">客户名称</van-col>
			  <van-col class="col-title" span="4">逾期金额</van-col>
			  <van-col class="col-title" span="4">欠息金额</van-col>
			  <van-col class="col-title" span="4">回收金额</van-col>
			  <van-col class="col-title" span="4">催收方式</van-col>
			 </van-row>
			 <van-row class="tab-list" v-for="(item,index) in this.customerList" @click="go('myCustomer')">
			  <van-col class="col-first-word" span="8">{{item.name}}</van-col>
			  <van-col class="col-word blue-word" span="4">{{item.overdueAmount}}</van-col>
			  <van-col class="col-word green-word" span="4">{{item.oweInterestAmount}}</van-col>
			  <van-col class="col-word red-word" span="4">{{item.recoveryAmount}}</van-col>
			  <van-col class="col-word" span="4">{{item.collectionWay}}</van-col>
			 </van-row>
		 </div>
    </div>
</template>

<script>
	
	import NavBar from '@/components/navBar'
	import Vue from 'vue';
	import { Image,Row, Col,Dialog,Search } from 'vant';
	
	export default {
  data() {
    return {
		title:['我的客户'],
		step:0,
		active:0,
		popup:1,
		type:0,
		show: false,
		customerList:[
			{name:'广州利峯宾馆有限公司',overdueAmount:'106902.2',oweInterestAmount:'2814.7',recoveryAmount:'1097.8',collectionWay:'上门催收'},
			{name:'广州利峯宾馆有限公司',overdueAmount:'106902.2',oweInterestAmount:'2814.7',recoveryAmount:'1097.8',collectionWay:'上门催收'},
			{name:'广州利峯宾馆有限公司',overdueAmount:'106902.2',oweInterestAmount:'2814.7',recoveryAmount:'1097.8',collectionWay:'上门催收'},
			{name:'广州利峯宾馆有限公司',overdueAmount:'106902.2',oweInterestAmount:'2814.7',recoveryAmount:'1097.8',collectionWay:'上门催收'},
			{name:'广州利峯宾馆有限公司',overdueAmount:'106902.2',oweInterestAmount:'2814.7',recoveryAmount:'1097.8',collectionWay:'上门催收'},
			{name:'广州利峯宾馆有限公司',overdueAmount:'106902.2',oweInterestAmount:'2814.7',recoveryAmount:'1097.8',collectionWay:'上门催收'},
			{name:'广州利峯宾馆有限公司',overdueAmount:'106902.2',oweInterestAmount:'2814.7',recoveryAmount:'1097.8',collectionWay:'上门催收'},
			{name:'广州利峯宾馆有限公司',overdueAmount:'106902.2',oweInterestAmount:'2814.7',recoveryAmount:'1097.8',collectionWay:'上门催收'},
			{name:'广州利峯宾馆有限公司',overdueAmount:'106902.2',oweInterestAmount:'2814.7',recoveryAmount:'1097.8',collectionWay:'上门催收'},
			{name:'广州利峯宾馆有限公司',overdueAmount:'106902.2',oweInterestAmount:'2814.7',recoveryAmount:'1097.8',collectionWay:'上门催收'},
			{name:'广州利峯宾馆有限公司',overdueAmount:'106902.2',oweInterestAmount:'2814.7',recoveryAmount:'1097.8',collectionWay:'上门催收'},
			{name:'广州利峯宾馆有限公司',overdueAmount:'106902.2',oweInterestAmount:'2814.7',recoveryAmount:'1097.8',collectionWay:'上门催收'},
			{name:'广州利峯宾馆有限公司',overdueAmount:'106902.2',oweInterestAmount:'2814.7',recoveryAmount:'1097.8',collectionWay:'上门催收'},
			{name:'广州利峯宾馆有限公司',overdueAmount:'106902.2',oweInterestAmount:'2814.7',recoveryAmount:'1097.8',collectionWay:'上门催收'},
			{name:'广州利峯宾馆有限公司',overdueAmount:'106902.2',oweInterestAmount:'2814.7',recoveryAmount:'1097.8',collectionWay:'上门催收'},
			{name:'广州利峯宾馆有限公司',overdueAmount:'106902.2',oweInterestAmount:'2814.7',recoveryAmount:'1097.8',collectionWay:'上门催收'},
			{name:'广州利峯宾馆有限公司',overdueAmount:'106902.2',oweInterestAmount:'2814.7',recoveryAmount:'1097.8',collectionWay:'上门催收'},
			{name:'广州利峯宾馆有限公司',overdueAmount:'106902.2',oweInterestAmount:'2814.7',recoveryAmount:'1097.8',collectionWay:'上门催收'}
		]
	}
  },
  //数据预加载
  created(){},
  //网页加载完成
  mounted () {},
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
  components: {NavBar,}
 }
</script>

<style lang="scss" scoped>
	.content-bar{
		width: 100%;
		overflow-x:scroll;
	}
	.tab-title{
		margin-top: 8px;
		background-image: linear-gradient(to right, #4bb0ff, #6149f6);
	}
	.tab-list{
		height: 38px;
		width: 140%;
	}
	.col-title{
		color: white;
		line-height: 38px;
		text-align: center;
	}
	.col-word{
		line-height: 38px;
		text-align: center;
	}
	.col-first-word{
		line-height: 38px;
		font-size: 14px;
		padding-left: 16px;
	}
	.blue-word{
		color:#4C62E7
	}
	.green-word{
		color: #46b948;
	}
	.red-word{
		color: #f76037;
	}
</style>
