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
		 <div class="content-bar">
			<table class=" margin-top" id="table">
				 <tr class="tab-title tab-list">
					 <th class="col-title">客户名称</th>
					 <th class="col-title">逾期金额</th>
					 <th class="col-title">欠息金额</th>
					 <th class="col-title">回收金额</th>
					 <th class="col-title">催收方式</th>
				 </tr>
				 
				 <tr class="tab-list" v-for="(item,index) in this.customerList" @click="go('myCustomer')">
				  <td class="col-first-word" span="8">{{item.name}}</td>
				  <td class="col-word blue-word" span="4">{{item.overdueAmount}}</td>
				  <td class="col-word green-word" span="4">{{item.oweInterestAmount}}</td>
				  <td class="col-word red-word" span="4">{{item.recoveryAmount}}</td>
				  <td class="col-word" span="4">{{item.collectionWay}}</td>
				 </tr>
			 </table>	
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
  mounted () {
	    this.creatDrag('table');
  },
  //声明方法
  methods : {
	  onClickLeft:function(){
	  		  this.$router.go(-1);
	  },
      go : function(url){
        this.$router.push({name:url});
      },
	  isMobile:function(){
	  		  var ua = navigator.userAgent;
	  		  
	  		  var ipad = ua.match(/(iPad).*OS\s([\d_]+)/),
	  		  
	  		  isIphone =!ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/),
	  		  
	  		  isAndroid = ua.match(/(Android)\s+([\d.]+)/),
	  		  
	  		  isMobile = isIphone || isAndroid;
	  		  return isMobile? true :false;
	  },
	  creatDrag:function(id){
				
	  			if(this.isMobile()){
	  				return;
	  			}
	  		    var oBox = document.getElementById(id);
	  			var Toleft = 0;
	  		      oBox.onmousedown = function(ev) {
	  			
	  		          var ev = ev || event;
	  		          var Y = ev.clientY;
	  		          var X = ev.clientX;
	  		   			var maxWidth = 	document.getElementById(id).offsetWidth - document.body.clientWidth;
	  		          if( Toleft == 0){
	  						Toleft = document.getElementById(id).scrollLeft;
	  					}
	  		          console.log(maxWidth)
	  		          oBox.onmousemove = function(ev) {
	  		              ev = ev || event;
	  		              var subY = ev.clientY - Y;
	  		              var subX = ev.clientX - X ;
	  		              Y = ev.clientY;
	  		              X = ev.clientX;
	  		             
	  		              Toleft -= (subX);
	  						if(Toleft>maxWidth) Toleft = maxWidth;
	  					  document.getElementById(id).style.transform = 'translateX(-' + Toleft + 'px)';
	  		          }
	  		          document.onmouseup = function() {
	  		              oBox.onmousemove = function() {
	  		                  null;
	  		              }
	  		          }
	  		      }
	  }
	  
  },
  //引入组件
  components: {NavBar,}
 }
</script>

<style lang="scss" scoped>
	.content-bar{
		width: 100%;
		white-space:nowrap;/*内容横向排列不换行*/ 
		overflow-x:auto;
		overflow-y:hidden;
	}
	table tr th,table tr td{
		padding: 2px 16px;
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
