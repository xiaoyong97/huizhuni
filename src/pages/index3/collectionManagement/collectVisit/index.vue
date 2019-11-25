<template>
	<div class="main">
	 <!--头部导航-->
		<van-nav-bar :title="title[step]"  left-arrow @click-left="onClickLeft" ></van-nav-bar>
		<van-search placeholder="请输入客户名称或客户编号查询" v-model="value" />
		<van-row class="title text-14">
		  <van-col class="col-title" span="10">客户名称</van-col>
			<van-col class="col-title" span="7" ><span>本金逾期</span><span class="span-min">(元)</span></van-col>
			<van-col class="col-title" span="7" ><span>利息逾期</span><span class="span-min">(元)</span></van-col>
		</van-row>
		<van-row :class="index%2==0?'white':'gray'" class="text text-14"  v-for="(item,index) in this.infos" @click="go('collectTask',{info:infos[index]})">
		  <van-col class="col-word" span="10">{{item.msg}}</van-col>
			<van-col class="col-word" span="7" >{{item.account}}</van-col>
			<van-col class="col-word" span="7" >{{item.lixi}}</van-col>
		</van-row>
	</div>
</template>

<script>
	
	import NavBar from '@/components/navBar'
	import Vue from 'vue';
	import { Grid, GridItem,Image,Panel,Cell, CellGroup,Row, Col,Dialog,Toast ,Tab, Tabs } from 'vant';
	
	export default {
  data() {
    return {
		title:['催收访场'],
		step:0,
		value:'',
		infos:[
		   {msg:'广州利案宾馆有限公司',account:'106902.2', lixi:'22814.7'},
		   {msg:'广州丽思见斯建筑设计有限公司',account:'0', lixi:'698.64'},
		   {msg:'广州斯利达工贸有限公司',account:'0', lixi:'0'},
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
	  },
	  go : function(url,param){
	  		  this.$router.push({name:url,params:param});
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
		margin-top: 8px;
		
	}
	.col-title{
		color: white;
		line-height: 38px;
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
	.text{
		// line-height: 38px;
		text-align: center;
		padding: 8px 0px;
	}
	.text-14{
		font-size: 14px;
	}

</style>
