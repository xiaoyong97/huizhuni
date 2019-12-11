<template>
	<div class="addCustomer text-14">
		<van-nav-bar :title="title[type]"  left-arrow @click-left="onClickLeft" ></van-nav-bar>
		<div v-show="type == 1">
			<van-row  class="select_row">
				   <van-col class="col" span="8" dot>与借款人关系</van-col>
				   <van-col class="select border" span="12">
					   
					   <select  class=" " name="" id="">
						   <option >实际控制人</option>
						   <option >实际控制人配偶</option>
						   <option >企业法人</option>
						   <option >企业法人配偶</option>
						   <option >实际控制人亲属</option>
						   <option >企业员工</option>
						   <option >担保人</option> 
					   </select>
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
			
		</div>
		<div v-show="type == 0">
			<van-row  class="select_row">
				   <van-col class="col" span="8" dot>员工编号</van-col>
				   <van-col class="select border" span="12">
					   
					   <select  class=" " name="" id="">
						   <option >72707632</option>
					   </select>
				   </van-col>
			</van-row>
			<van-row  class="select_row">
				   <van-col class="col" span="8" dot>客户名称</van-col>
				   <van-col class="" span="12">
					   <input  class="border" type="text" value="客户名称_72707632" placeholder="请输入客户名称" />
				   </van-col>
			</van-row>
			<van-row  class="select_row">
				   <van-col class="col" span="8" dot>职务</van-col>
				   <van-col class="" span="12">
					   <input class="border" type="text" value="ABCDEF" placeholder="请输入客户名称" />
				   </van-col>
			</van-row>
		</div>	
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
		title:['新增行内人员','新增客户人员'],
		show: false,
		value1: 0,
		value2: '贾跃亭',
		value3: '13433433864',
		value4: 'ABCDEF',
		type:0,
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
	this.type = this.$route.params.type;

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
		width: 200px;
		border: 1px solid #999999;
		border-radius: 34px;
		line-height: 34px;
		height: 34px;
		margin-top: 8px;
		padding-left: 12px;
		align-items: left;
		justify-content: left;
	}
	.col{
		line-height: 34px;
		margin-top: 8px;
		padding-left: 16px;
	}
	.save-buttom{
		width: 160px;
		margin: 8px 0 4px;
	}
	.text-14{
		font-size: 14px;
	}
	.select{
		width: 215px;
		height: 38px;
	}
	.select select{
		width: 186px;
		background-color: #fff;
		appearance:none;
		-moz-appearance:none;
		-webkit-appearance:none;
		border: 0px;
		/*在选择框的最右侧中间显示小箭头图片*/
		background: url("http://ourjs.github.io/static/2015/arrow.png") no-repeat scroll right center transparent;
		padding-right: 16px;
	}
	
	
	
</style>
