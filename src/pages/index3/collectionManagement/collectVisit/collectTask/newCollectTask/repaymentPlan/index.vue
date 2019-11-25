<template>
	<div class="addCustomer">
		<van-nav-bar :title="title[step]"  left-arrow @click-left="onClickLeft" ></van-nav-bar>
		<van-row  class="select_row">
			   <van-col class="col" span="8" dot>还款日期</van-col>
			   <van-col class="" span="12">
				  <input  class="border" type="text" v-model="value1" placeholder="请输入还款日期" />
			   </van-col>
		</van-row>
		<van-row  class="select_row">
			   <van-col class="col" span="8" dot>还款金额</van-col>
			   <van-col class="" span="12">
				   <input  class="border" type="text" v-model="value2" placeholder="请输入还款金额" />
			   </van-col>
		</van-row>
		
		<van-row style="text-align: center;margin-top: 30px;">
			<van-button round type="info" class="save-buttom" @click="onSubmit()">保存</van-button>
		</van-row>
	</div>
	
</template>

<script>
	// import '@/assets/resetui.scss'
	import NavBar from '@/components/navBar'
	import Vue from 'vue';
	import { Grid, GridItem,Image,Panel,Cell, CellGroup,Row, Col,Dialog,Toast ,Tab, Tabs } from 'vant';
	export default {
  data() {
    return {
		title:['新增还款计划'],
		step:0,
		show: false,
		value1: '2019-11-13',
		value2: '1000',
	  
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
	  go : function(url,item){
	    this.$router.push({name:url,params:item});
	  },
	  onSubmit() {
		  this.$router.go(-1);
		  eventBus.$emit("sign",true);
	  },
	  
	  
  },
  //引入组件
  components: {
	NavBar,

  }
 }
</script>

<style lang="scss" scoped>
	.border{
		width: 100%;
		border: 1px solid #999999;
		border-radius: 34px;
		line-height: 34px;
		height: 34px;
		margin-top: 8px;
		padding-left: 10px;
		align-items: left;
		justify-content: left;
	}
	.col{
		line-height: 34px;
		margin-top: 8px;
		padding-left: 8px;
	}
	.save-buttom{
		width: 160px;
		margin: 8px 0 4px;
	}
	
	
	
	
</style>
