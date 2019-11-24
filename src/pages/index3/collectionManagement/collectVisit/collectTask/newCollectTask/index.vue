<template>
	<div class="newCollectTask">
	 <!--头部导航-->
		<van-nav-bar :title="title[step]"  left-arrow @click-left="onClickLeft" @click-right="go('newCollectTask')" right-text="提交审核"></van-nav-bar>
		<van-tabs v-model="active" color="#4c62e7" line-width="33%" title-active-color="#4c62e7">
		  <van-tab title="催收现场取证" >
			  <van-collapse v-model="activeNames" class="collapse">
			    <van-collapse-item  name="1" >
					 <van-row slot="title">
						 <van-col span="2" class=""><van-icon name="location-o" color="#389BF6" size="24px"/></van-col>
						 <van-col span="6" class=""><span class="collapse-text">现场签到</span></van-col>
					 </van-row>
				 <div style="display: inline-block;height: 38px;">
					 <van-row>
					 <van-col span="6" class="">
					 	<van-icon name="location-o" class="sign-icon"/>
					 </van-col>
					 <van-col span="6" class="">
					 	<button class="sign-button">现场签到</button>
					 </van-col>
					 </van-row>
				 </div>
				 
				 </van-collapse-item>
			    <van-collapse-item name="2">
						 <van-row slot="title">
							 <van-col span="2" class=""><van-icon name="photo-o" color="#389BF6" size="24px"/></van-col>
							 <van-col span="12" class=""><span class="collapse-text">经营情况影像</span></van-col>
						 </van-row>
					<div class="dot-border">
						<div><van-icon name="photo-o" class="dot-border-icon"/></div>
						<div><span class="dot-border-span">拍摄/上传</span></div>
					</div>
				</van-collapse-item>
			    <van-collapse-item  name="3">
					<van-row slot="title">
						 <van-col span="2" class=""><van-icon name="photo-o" color="#389BF6" size="24px"/></van-col>
						 <van-col span="12" class=""><span class="collapse-text">抵押物情况</span></van-col>
					</van-row>
					<div class="dot-border">
						<div><van-icon name="photo-o" class="dot-border-icon"/></div>
						<div><span class="dot-border-span">拍摄/上传</span></div>
					</div>
				</van-collapse-item>
			  </van-collapse>
			  
			 <van-cell  >
				 <van-icon slot="icon" name="play-circle-o" color="#389BF6" size="24px"/>
			 <span class="collapse-text">访问录音</span> 
			 <van-icon
				slot="right-icon"
			     name="add-o"
			     style="line-height: inherit;"
			    color="#389BF6" size="24px"
			   />
			</van-cell>
		  </van-tab>
		  <van-tab title="催收信息维护" >
		  		123	  
		  			 
		  </van-tab>
		  </van-tabs>
		
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
		title:['催收任务'],
		step:0,
		active:0,
		activeNames: ['1'],
		infos:[
		   {data:'2019-11-10',fankui:'无力还款', account:'0',status:'结束'},
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
  },
  //引入组件
  components: {
	NavBar,

  }
 }
</script>

<style lang="scss" scoped>
	.collapse-icon{
		margin:0 8px ;
		padding-top: 4px;
		font-size: 18px;
		color: #389BF6;
	}
	.collapse-text{
		font-size: 16px;
		padding-left: 4px
	}
	.sign-icon{
		margin-left:8px;
		font-size: 38px;
		line-height: 38px;
		color: #389BF6;
	}
	.sign-button{
		margin: 0;
		height: 38px;
		line-height: 38px;
		width: 120px;
		border-radius: 38px;
		background-color: #389BF6;
		color: white;
	}
	.dot-border{
		border: 1px dashed #389BF6;
		border-radius: 6px;
		flex-direction: column;
		text-align: center;
		justify-content: center;
		width: 160px;
		height: 120px;
	}
	.dot-border-icon{
		margin-top: 18px;
		font-size: 48px;
		color: #389BF6;
	}
	.dot-border-span{
		font-size: 18px;
		color: #389BF6;
	}

</style>
