<template>
    <div class="main">
     <!--头部导航-->
		<van-nav-bar :title="title[step]"  left-arrow @click-left="onClickLeft" ></van-nav-bar>
		<van-row class="toolbar">
			<van-col span="12" class="text-center">{{date}}<img class="icon-date" src="../../../assets/images/38/date.png" alt=""></van-col>
			<van-col span="12" class="text-center">
				<van-col span="18" class="text-left"> {{bank}}</van-col>
				<van-col span="6"><img class="icon-date" src="../../../assets/images/38/date.png" alt=""></van-col>
			</van-col>
		</van-row>
		<van-row class="noticeBar">
		
		</van-row>
		<div class="card_div"  >
		    <van-row style="padding: 4px 12px 0">
		        <van-col class="icon_box" span="2"><img src="../../../assets/images/38/Companyname@2x.png" class="img_location" ></van-col>
		        <van-col class="" span="18"><p class="card_list2_test" ></p></van-col>
		    </van-row>
		    <van-row style="padding: 4px 12px 0">
		        <van-col class="" span="12"><p class="card_list1_test_left" >统一社会信用代码</p></van-col>
		        <van-col class="" span="12" style="text-align: left"><p class="card_list1_test_right" ></p></van-col>
		    </van-row>
		    <van-row style="padding: 4px 12px 0">
		        <van-col class="" span="12"><p class="card_list1_test_left" >企业主姓名</p></van-col>
		        <van-col class="" span="12" style="text-align: left"><p class="card_list1_test_right" ></p></van-col>
		    </van-row>
		    <van-row style="padding: 4px 12px 0">
		        <van-col class="" span="12"><p class="card_list1_test_left" >采集时间</p></van-col>
		        <van-col class="" span="12" style="text-align: left"><p class="card_list1_test_right" ></p></van-col>
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
		title:['业务监测'],
		step:0,
		date:'2019-11-21',
		bank:'建行江苏省分行小企业业务部',
		active:0,
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
		padding: 16px;
		color: #FFFFFF;
	}
	.card_div{
	    position: relative;
	    width: auto;
	    padding:0px;
	    background-color: white;
	    border-radius: 10px;
	    margin: 8px 10px 0;
	}
	.icon_box{
	    margin-top: 6px;
	    justify-content: center;
	    align-items: center;
	    text-align: center;
	}
	.img_location{
	    height: 18px;
	    width: 18px;
	}
	.card_list2_test{
	    color: #333333;
	    font-size: 14px;
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
	    padding-left: 28px;
	}
	.card_list1_test_right{
	    color: #333333;
	    font-size: 14px;
	    margin-block-start:0;
	    margin-block-end:0;
	    line-height: 30px;
	}



</style>
