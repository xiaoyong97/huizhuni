<template>
    <div class="main">
		 <!--头部导航-->
		<van-nav-bar :title="title"  left-arrow @click-left="onClickLeft" ></van-nav-bar>
		<div class="content">
			<van-cell-group class="bg-grey"  v-for="(item, index) in task.info[0].mortgaged" v-show="task.status !== 2">
			 <van-cell class="grey">抵押物{{index+1}}</van-cell>
			 <van-cell>
				 <van-col span="2"><img class="logo" src="../../assets/images/38/Companyname@2x.png" alt=""></van-col>
				 <van-col span="22"><h3>产权证号:{{item.number}}</h3></van-col>
			 </van-cell>
			 <van-cell>
				 <van-col span="2"></van-col>
				 <van-col span="6">房产地址:</van-col>
				 <van-col span="16">{{item.sf}}{{item.address}}</van-col>
			 </van-cell>

			 <van-cell>
				  <van-col span="2"></van-col>
				 <van-col span="6">产权人:</van-col>
				 <van-col span="16">{{item.holder}}</van-col>
			 </van-cell>

			 </van-cell-group>

			<van-cell-group class="bg-grey" v-show="task.status == 1">
				 <van-cell class="grey"  > </van-cell>

				<van-cell>
					 <van-col span="8">借款人</van-col>
					 <van-col span="16">{{info.mortgagor[0].name}}</van-col>
				</van-cell>
				<van-cell>
					 <van-col span="8">联系方式</van-col>
					 <van-col span="16">{{info.mortgagor[0].diyaren_mobile}}</van-col>
				</van-cell>
			</van-cell-group>
			<div  v-show="task.status == 2">
				<div class="tqm">
					<p class="subtext">电子评估报告提取码</p>
					<p>27780861877282212</p>
				</div>
				<div class="btn-container">
					<button v-for="(item, index) in info.mortgaged" v-bind:class="index == choose? 'active':''" @click="chooseTab(index)">
						抵押物{{index+1}}
					</button>
				</div>

				<div class="pan-container">
					<br>

					<div v-for="(item, index) in info.mortgaged"  v-show="choose == index">
						<van-cell-group class="bg-grey" v-show="info.status !== 0">

							<van-cell>
								<van-col span="2"><img class="logo" src="../../assets/images/38/Companyname@2x.png" alt=""></van-col>
								<van-col span="22"><h3>产权证号:00118810044</h3></van-col>
							</van-cell>
							<van-cell>
								 <van-col span="12" class="subtext">项目名称:</van-col>
								 <van-col span="12">御华府24幢1号201室</van-col>
							</van-cell>
							<van-cell>
								 <van-col span="12" class="subtext">城市:</van-col>
								 <van-col span="12">{{item.sf}}广东省广州市</van-col>
							</van-cell>
							<van-cell>
								 <van-col span="12" class="subtext">行政区域:</van-col>
								 <van-col span="12">海珠区</van-col>
							</van-cell>
							<van-cell>
								 <van-col span="12" class="subtext">楼盘:</van-col>
								 <van-col span="12">御华府</van-col>
							</van-cell>
							<van-cell>
								 <van-col span="12" class="subtext">楼栋号:</van-col>
								 <van-col span="12">24号楼</van-col>
							</van-cell>
							<van-cell>
								 <van-col span="12" class="subtext">单元号:</van-col>
								 <van-col span="12">1单元</van-col>
							</van-cell>
							<van-cell>
								 <van-col span="12" class="subtext">户号:</van-col>
								 <van-col span="12">201</van-col>
							</van-cell>
							<van-cell>
								 <van-col span="12" class="subtext">证载地址:</van-col>
<!--								<van-col span="12">{{item.sf}}</van-col>-->
								<van-col span="12">广东省广州市海珠区华府南路御华府24幢1号201室</van-col>
							</van-cell>
							<van-cell>
								 <van-col span="12" class="subtext">房屋证载用途:</van-col>
								 <van-col span="12">住宅</van-col>
							</van-cell>
							<van-cell>
								 <van-col span="12" class="subtext">建筑面积(㎡):</van-col>
								 <van-col span="12">120.4</van-col>
							</van-cell>
							<van-cell>
								 <van-col span="12" class="subtext">登记价(元):</van-col>
								 <van-col span="12">——</van-col>
							</van-cell>
							<van-cell>
								 <van-col span="12" class="subtext">竣工日期:</van-col>
								 <van-col span="12">20150530</van-col>
							</van-cell>
							<van-cell>
								 <van-col span="12" class="subtext">居室:</van-col>
								 <van-col span="12">3</van-col>
							</van-cell>
							<van-cell>
								 <van-col span="12" class="subtext">厅:</van-col>
								 <van-col span="12">1</van-col>
							</van-cell>
							<van-cell>
								 <van-col span="12" class="subtext">厨房:</van-col>
								 <van-col span="12">1</van-col>
							</van-cell>
							<van-cell>
								 <van-col span="12" class="subtext">卫生间:</van-col>
								 <van-col span="12">2</van-col>
							</van-cell>
							<van-cell>
								 <van-col span="12" class="subtext">抵押物价值单价(/㎡):</van-col>
								 <van-col span="12" class="red">107974</van-col>
							</van-cell>
							<van-cell>
								 <van-col span="12" class="subtext">抵押价值(元):</van-col>
								 <van-col span="12" class="red">13000069.6</van-col>
							</van-cell>
							<van-cell>
								 <van-col span="12" class="subtext">抵押净值1(元):</van-col>
								 <van-col span="12" class="red">11700062.64</van-col>
							</van-cell>
							<van-cell>
								 <van-col span="12" class="subtext">抵押净值2(元):</van-col>
								 <van-col span="12" class="red">11050059.16</van-col>
							</van-cell>
						</van-cell-group>
					</div>
				</div>
			</div>

<!--			<van-cell-group class="bg-grey" v-show="task.status == 3">-->
				<van-cell-group class="bg-grey" v-show="task.status == 2">
				<div class="line"></div>
				<van-cell>
					 <van-col span="2"><img class="logo" src="../../assets/images/38/Companyname@2x.png" alt=""></van-col>
					 <van-col span="22"><h3>评估公司:广东德正资产评估有限公司</h3></van-col>
				</van-cell>
				<van-cell>
								 <van-col span="8">评估人</van-col>
								 <van-col span="16">黎凯</van-col>
				</van-cell>
				<van-cell>
								 <van-col span="8">联系方式</van-col>
								 <van-col span="16">13902506869</van-col>
				</van-cell>
			</van-cell-group>

			<van-cell-group class="bg-grey" v-show="task.status == 2">
				<div class="line"></div>
					<div class="img-container" v-for="(item, index) in info.diyawuList">
						<van-col span="8"   class="img-box">
							<img src="../../assets/images/24/house1.jpeg" alt="">
						</van-col>
						<van-col span="8"   class="img-box">
							<img src="../../assets/images/24/house2.jpeg" alt="">
						</van-col>
						<van-col span="8"   class="img-box">
							<img src="../../assets/images/24/house3.jpeg" alt="">
						</van-col>
					</div>
			</van-cell-group>
		</div>
    </div>
</template>

<script>

	import NavBar from '@/components/navBar'
	import Vue from 'vue';
	import { Cell , Row, Col,Field,Area,AddressEdit} from 'vant';
	import areaList from '../../area.js';
	export default {

	data() {
	return {
		title : '任务查看',
		choose: 0,
		task:{},
		info:{},
	  }
	},

	//网页加载完成
	 created(){

		this.task = this.$route.query.task;
		 console.log('999',this.task.info)
		 console.log('999',this.task.status)
		if(this.task.info !== undefined){
			this.info = this.task.info[0];
			console.log('77',this.info)
		} else{

			this.info = this.task;
			console.log(this.task)
		}
	},

	//声明方法
	methods : {
		onClickLeft() {
			this.$router.go(-1);
		},
		parseJson:function(str){
			if(str == null || str == undefined) return [];

			return JSON.parse(str);
		},
		chooseTab:function(index){
			this.choose = index;
		}
	},

	//计算属性
	computed: {
		// 仅读取
		type: function () {
			return localStorage.getItem('type')
		},

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
	min-height: 697px;
	background-color: rgb(238,238,238);
}
.grey{
	background-color: rgb(238,238,238);
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
	.success{
		width: 25%;
		display: block;
		margin: 72px auto 10px;
	}
	.success-tip{
		text-align: center;
		margin-bottom: 40px;
	}
	.detail-tip{
		text-align: center;
		color: #999999;
	}
	.more{
		width: 120px;
		height: 30px;
		border: 1px solid #4c62e7;
		color: #4c62e7;
		font-size: 16px;;
		border-radius: 14px;
		line-height: 30px;
		margin: 0 auto 20px;;
		display: block;

	}
	.line{
		border-bottom: 1px solid #dddddd;
	}
	.tqm{
		background: rgb(242,245,252);
		padding: 12px;;
	}
	.tqm p{
		margin: 4px;
		text-align: center;
	}
	.tqm p.subtext{
		color: #999999;
		font-size: 12px;;
	}
	.btn-container {
		padding: 12px;
	}
	.btn-container button{
		background-color: #fff;
		border-radius: 15px;
		width: 32px;
		height: 30px;;
		overflow: hidden;
		color: #4c62e7;
		border: 0px;
		margin-right: 10px;
		white-space:nowrap;
		text-overflow:clip;
		-o-text-overflow:clip;
		overflow: hidden;
		-webkit-line-clamp: 1; //在第几行后开始省略
		direction: rtl;
		border-left: 8px solid #fff;
		border-right: 6px solid #fff;
	}
	.btn-container button.active{
		width: auto;

	}
	.pan-container{
		background-color: #fff;
		font-size: 12px;
		margin-bottom: 12px;
		padding-bottom: 12px;
	}
	.subtext{
		color: #999999;
	}
	.pan-container .van-cell{
		padding: 4px 16px;
	}
	.red{
		color: #f76037;
	}
	.img-container{
		padding: 16px 8px;
	}
	.img-box {
		padding: 0px 4px;
	}
	.img-box img{
		width: 100%;
	}
</style>
