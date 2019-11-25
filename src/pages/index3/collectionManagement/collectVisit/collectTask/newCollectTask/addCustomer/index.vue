<template>
	<div class="addCustomer text-14">
		<van-nav-bar :title="title[step]"  left-arrow @click-left="onClickLeft" ></van-nav-bar>
		<van-row  class="select_row">
			   <van-col class="col" span="8" dot>与借款人关系</van-col>
			   <van-col class="" span="12">
				   <van-dropdown-menu class="border">
				     <van-dropdown-item v-model="value1" :options="option1" />
				   </van-dropdown-menu>
				   <!-- <select  class="border" name="" id="">
					   <option value="">实际控制人</option>
				   </select> -->
			   </van-col>
		</van-row>
		<van-row  class="select_row">
			   <van-col class="col" span="8" dot>客户名称</van-col>
			   <van-col class="" span="12">
				   <input  class="border" type="text" v-model="value2" placeholder="请输入客户名称" />
			   </van-col>
		</van-row>
		<van-row  class="select_row">
			   <van-col class="col" span="8" dot>联系方式</van-col>
			   <van-col class="" span="12">
				   <input class="border" type="text" v-model="value3" placeholder="请输入客户名称" />
			   </van-col>
		</van-row>
		<van-row  class="select_row">
			   <van-col class="col" span="8" dot>所在单位</van-col>
			   <van-col class="" span="12">
				   <input class="border" type="text" v-model="value4" placeholder="请输入客户名称" />
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
		title:['新增客户人员'],
		step:0,
		show: false,
		value1: 0,
		value2: '',
		value3: '',
		value4: '',
	  option1: [
		{ text: '实际控制人', value: 0 },
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
	  go : function(url,item){
	    this.$router.push({name:url,params:item});
	  },
	  onSubmit() {
		  this.$router.go(-1);
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
	.text-14{
		font-size: 14px;
	}
	
	
	
	
</style>
