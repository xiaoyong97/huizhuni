<template>
    <div class="main">

     <!--头部导航-->
		<van-nav-bar :title="title"  >

		</van-nav-bar>
		<img src="../../assets/images/38/return@2x.png" class="img_return"  @click="onClickLeft">
		<div class="main" style="height: 100%">
				<div class="content" >
					<van-tabs v-model="activeName" line-width=33% line-height=3 color="#4c62e7" title-active-color="#4c62e7" style="margin-bottom: 0px;padding-bottom: 0">
						<van-tab title="我的业绩" name="a" style="margin-top: 0px;padding-top: 0" >

							<div class="business_box">
								<div class="business_box1">
									<p class="business_text">商机完成情况</p>
								</div>
								<van-row class="business_box2" >
									<van-col span="12" >
										<div >
											<p class="business_text2">共领取商机</p>
										</div>
										<div >
											<van-col span="12" class="business_box3"><p class="max_num" style="color: rgb(76,98,231)">5</p></van-col>
											<van-col span="2" class="business_box3"><p class="business_text3">条</p></van-col>
										</div>
									</van-col>
									<van-col span="12" >
										<div >
											<p class="business_text2">成功转换</p>
										</div>
										<div >
											<van-col span="12" class="business_box3"><p class="max_num" style="color: rgb(247,96,55)">1</p></van-col>
											<van-col span="2" class="business_box3"><p class="business_text3">条</p></van-col>
										</div>
									</van-col>
								</van-row>
							</div>
							<!--              1-2div-->
							<div class="business_box">
								<div class="business_box1">
									<p class="business_text">你的排名</p>
								</div>
								<van-row class="business_box2" >
									<van-col span="12" >
										<div >
											<p class="business_text2" style="padding-left: 14px;">商机成功率在机构排名</p>
										</div>
										<div >
											<van-col span="12" class="business_box3"><p class="max_num" style="color: rgb(76,98,231)">12</p></van-col>
											<van-col span="2" class="business_box3"><p class="business_text3">名</p></van-col>
										</div>
									</van-col>
									<van-col span="12" >
										<div >
											<p class="business_text2" >本月下降</p>
										</div>
										<div >
											<van-col span="12" class="business_box3"><p class="max_num" style="color: rgb(70,185,72)">6</p></van-col>
											<van-col span="2" class="business_box3" style="height:40px"><img :src="decrease_img"  class="img" ></van-col>
										</div>
									</van-col>
								</van-row>
							</div>
							<!--              第1-3div-->
							<div class="business_box_3" style="border-bottom-left-radius: 0;border-bottom-right-radius: 0">
								<div class="business_box1">
									<p class="business_text">商机转化</p>
								</div>
								<van-row class="business_box2" >
									<van-col span="8" >
										<div >
											<p class="business_text2" style="padding-left: 14px;margin-top: 10px">商机成功率</p>
										</div>
										<div >
											<van-col span="12" class="business_box3"><p class="max_num" style="color: rgb(51,51,51);padding-left: 20px">33.33</p></van-col>
											<van-col span="2" class="business_box3" style="height: 45px;"><p class="business_text_percent">%</p></van-col>
										</div>
									</van-col>
<!--									<van-col span="10" style="position: relative">-->
<!--										<van-row class="" style="position: absolute;top: 20px;width: 130px;left: 20px">-->
<!--											<van-col  class="business_box3" span="1"><img :src="successCircle"  class="img_navigation" ></van-col>-->
<!--											<van-col  class="business_box3" span="20"><p class="business_text_success">成功</p></van-col>-->
<!--										</van-row>-->
<!--										<van-row class="" style="position: absolute;top: 40px;width: 130px;left: 20px">-->
<!--											<van-col class="business_box3" span="1"><img :src="failCircle"  class="img_navigation" ></van-col>-->
<!--											<van-col class="business_box3" span="20"><p class="business_text_success">未成功</p></van-col>-->
<!--										</van-row>-->
<!--									</van-col>-->
									<van-col span="16" >
										<div id="myChart"></div>
									</van-col>
									<img :src="pull_down"  class="felx_img" @click="onCilckFlex" v-show="step">
									<img :src="Pullup"  class="felx_img" @click="onCilckFlex" v-show="!step">
								</van-row>
							</div>

							<!--              折叠div-->
							<div v-show="!step" style="height: 100px"></div>
							<div class="business_box" v-show="step" style="border-top-left-radius: 0;border-top-right-radius: 0;height: auto">
								<van-row>
									<p class="business_text_flex" >截止&nbsp;<span style="color: #4c62e7">09</span>&nbsp;月<span style="color: #4c62e7">&nbsp;01&nbsp;</span>日</p>
								</van-row>
								<van-row>
									<van-col span="12"><p class="business_flexbox_text">您名下商机处理情况为</p></van-col>
								</van-row>
								<van-row>
									<p class="business_flexbox_text" >已成功累计笔数：<span style="color: #4c62e7">1</span>&nbsp;笔</p>
								</van-row>
								<van-row>
									<p class="business_flexbox_text" >待完成累计笔数：<span style="color: #f76037">1</span>&nbsp;笔</p>
								</van-row>
								<van-row>
									<p class="business_flexbox_text" >已放弃累计笔数：<span style="color: #f34c83">1</span>&nbsp;笔</p>
								</van-row>
								<van-row>
									<p class="business_flexbox_text" >已退回累计笔数：<span style="color: #46b948">1</span>&nbsp;笔</p>
								</van-row>
								<van-row>
									<p class="business_flexbox_text" >已失效累计笔数：<span style="color: #B3B3B3">1</span>&nbsp;笔</p>
								</van-row>
							</div>
						</van-tab>
						<van-tab title="机构业绩" name="b" style="margin-top: 0px;padding-top: 0" ></van-tab>
						<van-tab title="客户经理排行榜" name="c" >
							<van-row style="position: relative;margin-top: 8px;background-color: #FFFFFF;max-height: 143px;padding: 11px 10px">
								<van-col span="8">
									<van-row style="height: 60px">
										<van-col span=""><img :src="medal"  class="img_medal" ></van-col>
										<van-col span=""><p class="tab3_div1_text1" >光荣榜</p></van-col>
									</van-row>
									<van-row span="24" style="text-align: center;">
										<p class="tab3_div1_text2">第<span class="tab3_div1_text3" >12</span>名</p>
									</van-row>
								</van-col>
								<van-col  class="" span="8" style="position: relative">
									<img :src="frame1"  class="img_frame" >
									<img :src="people1"  class="img_frame_head" >
								</van-col>
								<van-col span="8">
									<van-row style="height: 60px">
										<p class="tab3_div1_text5" style="color: rgb(51,51,51);">广东省分行</p>
										<p class="tab3_div1_text5" >2019年9月</p>
									</van-row>
									<van-row style="text-align: center;">
										<p class="tab3_div1_text2">成功<span class="tab3_div1_text3">34</span>笔</p>
									</van-row>
								</van-col>
							</van-row>

							<div class="list_div ">
								<van-row class="list_box" type="flex" justify="center" style="position: relative">
									<van-col  class="" span="1"><p class="list_text1" style="color: rgb(247,96,55)">1.</p></van-col>
									<van-col  class="" span="4" >
										<img :src="frame2"  class="img_frame_min" >
										<img :src="people2"  class="img_frame_head_min" >
									</van-col>
									<van-col  class="" span="10"><p class="list_text2" >Selina</p></van-col>
									<van-col  class="text-align_right" span="9"><p class="list_text3">成功<span class="list_text4">47</span>笔</p></van-col>
								</van-row>
								<van-row class="list_box" type="flex" justify="center" style="position: relative">
									<van-col  class="" span="1"><p class="list_text1" style="color: rgb(169,168,168)">2.</p></van-col>
									<van-col  class="" span="4" >
										<img :src="frame3"  class="img_frame_min" >
										<img :src="people3"  class="img_frame_head_min" >
									</van-col>
									<van-col  class="" span="10"><p class="list_text2">王长生</p></van-col>
									<van-col  class="text-align_right" span="9"><p class="list_text3">成功<span class="list_text4">45</span>笔</p></van-col>
								</van-row>
								<van-row class="list_box" type="flex" justify="center" style="position: relative">
									<van-col  class="" span="1"><p class="list_text1" style="color: rgb(219,146,65)">3.</p></van-col>
									<van-col  class="" span="4" >
										<img :src="frame4"  class="img_frame_min" >
										<img :src="people3"  class="img_frame_head_min" >
									</van-col>
									<van-col  class="" span="10"><p class="list_text2">赵无极</p></van-col>
									<van-col  class="text-align_right" span="9" ><p class="list_text3">成功<span class="list_text4">42</span>笔</p></van-col>
								</van-row>
								<van-row class="list_box" type="flex" justify="center" style="position: relative">
									<van-col  class="" span="1"><p class="list_text1" >4.</p></van-col>
									<van-col  class="" span="4" >
										<img :src="people3"  class="img_frame_head_min" >
									</van-col>
									<van-col  class="" span="10"><p class="list_text2">石昊</p></van-col>
									<van-col  class="text-align_right" span="9" ><p class="list_text3">成功<span class="list_text4">41</span>笔</p></van-col>
								</van-row>
								<van-row class="list_box" type="flex" justify="center" style="position: relative">
									<van-col  class="" span="1"><p class="list_text1" >5.</p></van-col>
									<van-col  class="" span="4" >
										<img :src="people1"  class="img_frame_head_min" >
									</van-col>
									<van-col  class="" span="10"><p class="list_text2">柳飘飘</p></van-col>
									<van-col  class="text-align_right" span="9" ><p class="list_text3">成功<span class="list_text4">40</span>笔</p></van-col>
								</van-row>
								<van-row class="list_box" type="flex" justify="center" style="position: relative">
									<van-col  class="" span="1"><p class="list_text1" >6.</p></van-col>
									<van-col  class="" span="4" >
										<img :src="people3"  class="img_frame_head_min" >
									</van-col>
									<van-col  class="" span="10"><p class="list_text2">徐琨</p></van-col>
									<van-col  class="text-align_right" span="9" ><p class="list_text3">成功<span class="list_text4">39</span>笔</p></van-col>
								</van-row>
								<van-row class="list_box" type="flex" justify="center" style="position: relative">
									<van-col  class="" span="1"><p class="list_text1" >7.</p></van-col>
									<van-col  class="" span="4" >
										<img :src="people3"  class="img_frame_head_min" >
									</van-col>
									<van-col  class="" span="10"><p class="list_text2">李察</p></van-col>
									<van-col  class="text-align_right" span="9" ><p class="list_text3">成功<span class="list_text4">39</span>笔</p></van-col>
								</van-row>
								<van-row class="list_box" type="flex" justify="center" style="position: relative">
									<van-col  class="" span="1"><p class="list_text1" >8.</p></van-col>
									<van-col  class="" span="4" >
										<img :src="people3"  class="img_frame_head_min" >
									</van-col>
									<van-col  class="" span="10"><p class="list_text2">秦广汉</p></van-col>
									<van-col  class="text-align_right" span="9" ><p class="list_text3">成功<span class="list_text4">37</span>笔</p></van-col>
								</van-row>
								<van-row class="list_box" type="flex" justify="center" style="position: relative">
									<van-col  class="" span="1"><p class="list_text1" >9.</p></van-col>
									<van-col  class="" span="4" >
										<img :src="people2"  class="img_frame_head_min" >
									</van-col>
									<van-col  class="" span="10"><p class="list_text2">曾李</p></van-col>
									<van-col  class="text-align_right" span="9" ><p class="list_text3">成功<span class="list_text4">35</span>笔</p></van-col>
								</van-row>


							</div>
						</van-tab>
					</van-tabs>

				</div>
			</div>
		</div>
</template>

<script>

	//引入组件首字母大写
	import TabBar from '@/components/tabBar'
	// import NavBar from '@/components/tabBar'
	import Vue from 'vue';
	import { Tab, Tabs } from 'vant';
	import { Row, Col } from 'vant';

	Vue.use(Row).use(Col);
	Vue.use(Tab).use(Tabs);
	let echarts = require('echarts/lib/echarts');
	require('echarts/lib/chart/pie');
	require('echarts/lib/component/title');
	require('echarts/lib/component/legend')
	export default {

		//基础数据存放处
		data (){
			return {
				title : '业绩展示',
				activeName: 'a',
				step:false,
				myChart:null,
				decrease_img: require('@/assets/image/my/decrease.png'),
				pull_down: require('@/assets/image/my/Pull down 4@2x.png'),
				successCircle: require('@/assets/images/24/Navigationcirclepink@2x.png'),
				failCircle: require('@/assets/images/24/Navigationcircle@2x.png'),
				chart: require('@/assets/images/activity/chart.png'),
				Pullup: require('@/assets/images/38/Pullup.png'),
				frame1: require('@/assets/image/my/Picture frame1@2x.png'),
				frame2: require('@/assets/image/my/Picture frame2@2x.png'),
				frame3: require('@/assets/image/my/Picture frame3@2x.png'),
				frame4: require('@/assets/image/my/Picture frame4@2x.png'),
				people1: require('@/assets/images/activity/people1.png'),
				people2: require('@/assets/images/activity/people2.png'),
				people3: require('@/assets/images/activity/people3.png'),
				medal: require('@/assets/image/my/medal.png'),
				// medal: require('@/assets/image/my/medal.png'),
			}
		},

		//数据预加载
		created : function(){

		},

		//网页加载完成
		mounted () {
			var that = this ;
			setTimeout(function () {
				that.createChart();
			},100)

		},

		//声明方法
		methods : {
            onClickLeft() {
                this.$router.go(-1);
            },
			go : function(){
				this.$router.push('/index5');
			},
			onCilckFlex () {
            	this.step=!this.step
			},
			createChart: function() {
				console.log('666')
				if(this.myChart == null){
					console.log('123')
					// 基于准备好的dom，初始化echarts实例
					this.myChart = echarts.init(document.getElementById('myChart'))
					let option = {
						color:['#4c62e7','#f34c83'],
						legend: {
							orient: 'vertical',
							x: '10',
							y:'50',
							icon: "circle",
							data:['未成功','成功'],
							selectedMode:false,
						},
						series: [
							{
								name:'访问来源',
								type:'pie',
								radius: ['30%', '100%'],
								label: {

									normal: {
										position: 'inner',
										formatter: ' {per|{d}%}  ',
										rich: {
											per: {
												color: '#fff',
												padding: [2, 4],
												fontSize: 14,

											}
										}
									}
								},
								data:[
									{value:66.67, name:'未成功'},
									{value:33.33, name:'成功'},

								]
							}
						]
					};

					// 绘制图表
					this.myChart.setOption(option);
				}
			},


		},

		//计算属性
		computed: {

		},


		components: {
			TabBar

		}
	}
</script>

<style lang="scss" scoped>

	.main{
		width:100%;
		height: 100%;
		background-color: rgb(238,238,238);
	};
	.img{
		height: 19px;
		width:19px;
		position: absolute;
		bottom: 0;
	};
	.img_medal{
		height: 28px;
		width:28px;
	};
	.felx_img{
		height: 19px;
		width:19px;
		position: absolute;
		bottom: 0;
		left: 48%;
	};
	success_img_box{
		position: relative;
	};
	success_img{
		height: 110px;
		width:110px;
		background-color: brown;
		position: absolute;
		top: -20px;
		right: 0;
	};
	.img_frame{
		height: 80px;
		width:80px;
		position: absolute;
		top: 35px;
		left: 25px;
		z-index: 3;
	};
	.img_frame_head{
		height: 62px;
		width:62px;
		position: absolute;
		top: 42px;
		left: 33px;
		z-index: 2;
	};
	.img_frame_min{
		height: 52px;
		width:52px;
		position: absolute;
		top: 6px;
		left: 25px;
		z-index: 3;
	};
	.img_frame_head_min{
		height: 40px;
		width:40px;
		position: absolute;
		top: 11px;
		left: 31px;
		z-index: 2;
	};
	.img_navigation{
		height: 12px;
		width:12px;
		position: absolute;
		left: 0px;
		top:24px;
	};
	.content{
        padding-top: 0;
		background-color: rgb(238,238,238);
	};

	.business_box{
		height:143px;
		width:96%;
		margin-left: 2%;
		margin-right: 2%;
		margin-top: 8px;
		background-color: rgb(255,255,255);
		padding: 0;
		border-radius: 8px;
	};
	.manager_box{
		width:100%;
		margin-top: 8px;
		background-color: rgb(255,255,255);
	};
	manager_box1{
		height:143px;
		width:100%;
		margin-top: 8px;
		padding-left: 11px;
		padding-top: 11px;
		background-color: rgb(255,0,0);
		padding: 0;
	};
	.business_box_3{
		height:143px;
		width:96%;
		margin-left: 2%;
		margin-right: 2%;
		margin-top: 8px;
		background-color: rgb(255,255,255);
		padding: 0;
		border-radius: 8px;
		position: relative;
	};
	.business_box1{
		border-radius: 8px;
		padding: 0;
	};
	.business_box2{
		margin: 0;
		padding: 0;
	};
	.business_box3{
		height: 43px;
		margin: 0;
		padding: 0;
		position: relative;
	};
	.business_box4{
		height: 48px;
		margin: 0;
		padding: 0;
		position: relative;
	};
	.business_text{
		font-family: "Plantagenet Cherokee";
		padding-left:14px ;
		padding-top: 14px;
		font-size:16px;
		font-weight: bold;
		color:rgb(51,51,51);
		margin-block-start:0;
		margin-block-end:0;
	};
	.business_text_flex{
		font-family: "Plantagenet Cherokee";
		padding-left:14px ;
		padding-top: 14px;
		font-size:16px;
		font-weight: bold;
		color:rgb(51,51,51);
		margin-block-start:0;
		margin-block-end:0;
	};
	.max_num{
		font-size:42px;
		font-family: "Palatino Linotype";
		margin-block-start:0;
		margin-block-end:0;
		padding-left: 50px;
	};
	.business_text2{
		font-size:14px;
		margin-block-start:0;
		margin-block-end:0;
		padding-left: 46px;
		margin-top: 6px;
	};
	.business_text3{
		float: left;
		font-size:14px;
		margin-block-start:0;
		margin-block-end:0;
		padding-left: 46px;
		position: absolute;
		left: -20px;
		bottom: 0;
		color: rgb(153,153,153);
	};
	.img_return{
		position: absolute;
		top: 14px;
		left:12px ;
		height: 18px;
		width: 18px;
		z-index: 100;
	}
	.business_text_success{
		float: left;
		font-size:12px;
		margin-block-start:0;
		margin-block-end:0;
		position: absolute;
		left: 14px;
		top: 22px;
		color: rgb(102,102,102);
	};
	.tab3_div1_text1{
		font-weight: bold;
		font-size:18px;
		line-height: 18px;
		margin-block-start:0;
		margin-block-end:0;
		color: rgb(51,51,51);
	};
	.tab3_div1_box2{
		justify-content: center;
		align-items: center;
		position: relative;
		height: 115px;
		background-color: aqua;
	};
	.tab3_div1_text2{
		font-size:14px;
		margin-block-start:0;
		margin-block-end:0;
		color: rgb(102,102,102);
	};
	.tab3_div1_text5{
		font-size:15px;
		text-align: right;
		line-height: 24px;
		margin-block-start:0;
		margin-block-end:0;
		color: rgb(102,102,102);
	};
	.tab3_div1_text3{
		font-size:42px;
		margin-block-start:0;
		margin-block-end:0;
		color: rgb(76,98,231);
		padding-left:10px ;
		padding-right: 10px;
	};
	.business_flexbox_text{
		float: left;
		font-size:14px;
		line-height: 28px;
		margin-block-start:0;
		margin-block-end:0;
		padding-left: 14px;
		color: rgb(51,51,51);
	};
	.business_flexbox_text2{
		float: left;
		font-size:14px;
		line-height: 28px;
		margin-block-start:0;
		margin-block-end:0;
		color: rgb(153,153,153);
	};
	.business_text_percent{
		float: left;
		font-size:24px;
		margin-block-start:0;
		margin-block-end:0;
		position: absolute;
		bottom: 0px;
		padding-left: 10px;
		color: rgb(51,51,51);
	};
	.list_div{
		margin-top: 8px;
		background-color: #FFFFFF;
		padding: 0 12px;
	};
	.list_box{
		border-bottom: #dddddd solid 1px;
		height: 65px;
	};
	.list_text1{
		font-size: 15px;
		line-height: 32px;
	};
	.list_text2{
		margin-left: 10px;
		font-size: 15px;
		line-height: 32px;
		color: rgb(51,51,51);
	};
	.list_text3{
		line-height: 32px;
		font-size: 15px;
	};
	.list_text4{
		font-weight: bold;
		line-height: 32px;
		font-size: 15px;
		color: rgb(76,98,231)
	};
	.text-align_right{
		text-align: right;
	};
	#myChart{
		width: 120%;
		height:110px;
		position: relative;
		top:-18px

	}




</style>
