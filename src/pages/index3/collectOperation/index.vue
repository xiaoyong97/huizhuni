<template>
    <div class="main">
     
     <!--头部导航-->
     <NavBar :title="title"/>


    <div class="content">
		<div class="step-container"  v-show='step!=7'>
			<div class="step-title-pan" >
				<div class="text-center step-text-pan active">企业信息</div>
				<div class="text-center step-text-pan">企业住信息</div>
				<div span="4" class="text-center step-text-pan">关联人信息</div>
				<div span="4" class="text-center step-text-pan">抵押物信息</div>
				<div span="4" class="text-center step-text-pan">抵押人信息</div>
			</div>
			
		</div>
		 
		 
		<div v-show='step==7'>
			<div class="success-pan">
				<img class="success" src="../../../assets/images/other/success@2x.png" alt="">
				<p class="success-tip"> 信息采集成功</p>
				<div class="line"></div>
				<van-cell-group class="bg-grey"  >
					<div >
						<van-cell ><div class="grey">查看详情</div></van-cell>
						<van-cell>
							 <van-col span="3"><img class="logo" src="../../../assets/images/38/Companyname@2x.png" alt=""></van-col>
							 <van-col span="21"><h3>广州老地方有限公司</h3></van-col>		
						</van-cell>
						<van-cell>
							 <van-col span="2"></van-col>
							 <van-col span="10">统一社会信用代码:</van-col>
							 <van-col span="12">44000111111111</van-col>
						</van-cell>
						<van-cell>
							  <van-col span="2"></van-col>
							 <van-col span="10">企业主姓名</van-col>
							 <van-col span="12">黄五</van-col>
						</van-cell>
						<van-cell>
							 <van-col span="2"></van-col>
							 <van-col span="10">采集时间:</van-col>
							 <van-col span="12">2019-07-22</van-col>
						</van-cell>
					</div>
				 </van-cell-group>
				 <div class="jyButton">征信校验</div>
			</div>
		</div>
    </div>
        
    </div>
</template>

<script>

	import NavBar from '@/components/navBar'
	import Vue from 'vue';
	import { Swipe, SwipeItem,Grid, GridItem,Image,Panel,NoticeBar,Cell, CellGroup,Row, Col,Dialog } from 'vant';
	export default {

  data() {
    return {
      title : '信息采集',
	  step:7,
    }
  },
  
  
  //数据预加载
  created : ()=>{

    

  },

  //网页加载完成
  mounted : ()=>{
    
  },
  
  //声明方法
  methods : {


  },
  
  //计算属性
  computed: {

  },

  //引入组件
  components: {
    NavBar
  }


 }
</script>

<style lang="scss" scoped>
.content{
	padding: 0px;
	background-color: rgb(238,238,238);
	min-height: 600px;
}
#grad {
  background: -webkit-linear-gradient(red, blue); /* Safari 5.1 - 6.0 */
  background: -o-linear-gradient(red, blue); /* Opera 11.1 - 12.0 */
  background: -moz-linear-gradient(red, blue); /* Firefox 3.6 - 15 */
  background: linear-gradient(red, blue); /* 标准的语法 */
}
.text-center{
	text-align: center;
}
.step-container{
	padding: 12px;
	min-height: 30px;
}
.step-text-pan{
	font-size: 10px;
	width: 20%;
	padding: 2px 0px;
	float: left;
	border-radius: 14px;
	color: #666666;
}
.step-text-pan.active{
	background-image: url(../../../assets/images/other/Process@2x.png);
	background-size: 100% 100%;
	color: #fff;
	margin-top: -6px;
	padding-bottom: 12px;;
}
.success{
		width: 25%;
		display: block;
		margin: 72px auto 10px;
	}
	.success-tip{
		text-align: center;
		margin-bottom: 30px;
	}
	.detail-tip{
		text-align: center;
		color: #999999;
	}
	.grey{
		color: #666666;
	}
	.field_container{
		padding: 10px 16px;;
	}
	.area_select{
			padding-left: 4px;
	}
	.area_select_pan{
		position: absolute;
		bottom: 10px;
		width: 100%;
	}
	.van-field .van-cell__value{
		border: 1px solid lightgray;
		background-color: red;
	}
	.theme_color{
		color:#4c62e7;
	}
	.logo{
			width: 22px;
			height: 24px;
			vertical-align: top;
		}
		h3,h4{
			margin: 0px;;
		}
		.line{
			border-bottom: 1px solid #dddddd;
		}
		.success-pan{
			min-height: 300px;
			background-color: #fff;
			position: relative;
		}
		.jyButton{
			color: #fff;
			width: 260px;
			height: 38px;
			line-height: 38px;
			text-align: center;
			background-image: url(../../../assets/images/other/Mainbutton@2x.png);
			background-size: 100% 100%;
			position: absolute;
			bottom: -60px;
			left: 50%;
			margin-left: -130px;
			font-weight: bold;
			
		}
</style>