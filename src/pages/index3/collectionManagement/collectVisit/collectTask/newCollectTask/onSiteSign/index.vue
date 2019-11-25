<template>
	<div class="newCollectTask text-14">
	 <!--头部导航-->
		<van-nav-bar :title="title[step]"  left-arrow @click-left="onClickLeft" ></van-nav-bar>
		<div class="map-content">
			<img :src='img1' />
		</div>
		<van-row class="">
			 <van-col span="8" class="col"><span class="">当前系统定位</span></van-col>
			 <van-col span="16" class="col"><span class="">福建省广州市思明区</span></van-col>
		</van-row>
		<van-row >
			 <van-col span="8" class="col"><span class="">位置信息确认</span></van-col>
			 <van-col span="15" class=" col border"><span class="">广州市思明区环岛路233号乐视</span></van-col>
		</van-row>
		<van-row style="text-align: center;">
			<van-button round type="info" class="save-buttom" @click="onSubmit()">确认签到</van-button>
		</van-row>
		<van-row style="text-align: center;">
			<van-button round type="info" class="save-buttom">加载地图</van-button>
		</van-row>
	</div>
	
</template>

<script>
	// import '@/assets/resetui.scss'
	import eventBus from '@/assets/js/eventbus.js';
	import NavBar from '@/components/navBar'
	import Vue from 'vue';
	import { Grid, GridItem,Image,Panel,Cell, CellGroup,Row, Col,Dialog,Toast ,Tab, Tabs } from 'vant';
	import img1 from '@/assets/images/other/1124232902.png';
	export default {
  data() {
    return {
		title:['现场签到'],
		step:0,
		img1:img1,
		//修改地图底色
		  mapStyle: {
			style: "midnight"
		  },
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
	  }
  },
  //引入组件
  components: {
	NavBar,

  }
 }
</script>

<style lang="scss" scoped>
	.map-content{
	  position: relative;
	  img{
	    display: block;
	    width: 100%;
	  }
	  
	}
	.col{
		padding-left: 8px;
		line-height: 34px;
		margin-bottom:8px ;
		margin-top: 8px;
	}
	.border{
		border: 1px #7D7E80 solid;
		border-radius: 34px;
		margin-right: 8px;
	}
	.save-buttom{
		width: 240px;
		margin: 8px 0 4px;
	}
	.text-14{
		font-size: 14px;
	}
</style>
