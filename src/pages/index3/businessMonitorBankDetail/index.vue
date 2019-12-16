<template>
    <div class="main">
     <!--头部导航-->
		<van-nav-bar :title="title[type]"  left-arrow @click-left="onClickLeft" ></van-nav-bar>
		<div v-show="type != 2">
			
			<div id="myChart" ></div>
			<div></div>
			
			<div class="table">
				<van-row class="table-hearder">
					<van-col span="8" >口径 </van-col>
					<van-col span="5" >不良率</van-col>
					<van-col span="5" >比上月</van-col>
					<van-col span="5" >比年期</van-col>
				</van-row>
				<van-row class="table-content">
					<van-col span="24" v-for="item in data[type]"  class="table-row">
						<van-col span="8" class="table-left-title">{{item.title}}</van-col>
						<van-col span="5" >{{item.value1}}%</van-col>
						<van-col span="5" :class="item1>0?'red':'green'" v-for="item1 in item.value2">{{item1}}%</van-col>	
					</van-col>
				</van-row>
			</div>
		</div>
		<div v-show="type == 2">
			<van-tabs 
			color="#4c62e7"
			line-width="50%"
			title-active-color="#4c62e7"
			title-inactive-color="#000000"
			line-height=3
			:border="false"
			v-model="activeName" @click="changTab">
			  <van-tab title="历史趋势" name="a">
				   <van-dropdown-menu  v-bind:class="over">
				    <van-dropdown-item v-bind:title="switch1" ref="item1" >
						<!-- <div style=" background-color: rgba(0,0,0,0);">
							<van-cell title="全部产品"  @click="product(1,'全部产品')" />
							<van-cell title="小微快贷" @click="product(1,'小微快贷')" />
							<van-cell title="信用快贷" @click="product(1,'信用快贷')" /> 
							<van-cell title="抵押快贷"  @click="product(1,'抵押快贷')"/>
							<van-cell title="云税贷"  @click="product(1,'云税贷')"/>
						</div> -->
				    </van-dropdown-item>
					<van-dropdown-item disabled ></van-dropdown-item> 
					  <div style="position: absolute;background-color: #fff;width: 100px;height: 40px;left: 40%;"></div>
				     <van-dropdown-item v-bind:title="switch2" ref="item2">
				       <!-- <div style=" background-color: #323233;">
							<van-cell title="客户余额" @click="product(2,'客户余额')" />
							<van-cell title="贷款客户数" @click="product(2,'贷款客户数')" />
							<van-cell title="逾期贷款额" @click="product(2,'逾期贷款额')" /> 
							<van-cell title="逾期客户数" @click="product(2,'逾期客户数')" />
							<van-cell title="逾期非不良额" @click="product(2,'逾期非不良额')" />
				       </div> -->
				     </van-dropdown-item>
				   </van-dropdown-menu>
				    <div @click="showDropdownMenu(1)" style="position: absolute;background-color: rgba(0,0,0,0);width: 50%;height: 50px;left: 0px;top:40px;z-index: 2008;"></div>
					<div @click="showDropdownMenu(2)"style="position: absolute;background-color: rgba(0,0,0,0);width: 50%;height: 50px;left: 50%;top:40px;z-index: 2008;"></div>
					
				  <div id="myChart2" ></div>
				  <div></div>
				<div class="table">
					<van-row class="table-hearder">
						<van-col span="4" >日期 </van-col>
						<van-col span="5" >贷款余额</van-col>
						<van-col span="5" >比上旬</van-col>
						<van-col span="5" >比上月</van-col>
										<van-col span="5" >比年率</van-col>
					</van-row>
					<van-row class="table-content">
						<van-col span="24" v-for="item in data[type]"  class="table-row">
							<van-col span="4" class="table-left-title">{{item.title}}</van-col>
											<van-col span="5" >{{item.value1}}</van-col>
							<van-col span="5" :class="item1>0?'red':'green'" v-for="item1 in item.value2">{{item1}}</van-col>	
						</van-col>
					</van-row>
				</div>
			  </van-tab>
			  <van-tab title="下级机构" name="b">
				  <van-dropdown-menu  v-bind:class="over">
				      <van-dropdown-item v-bind:title="switch3" ref="item3" >
				  		<div style=" background-color: rgba(0,0,0,0);">
				  			<van-cell title="全部产品"  @click="product(3,'全部产品')" />
				  			<van-cell title="小微快贷" @click="product(3,'小微快贷')" />
				  			<van-cell title="信用快贷" @click="product(3,'信用快贷')" /> 
				  			<van-cell title="抵押快贷"  @click="product(3,'抵押快贷')"/>
				  			<van-cell title="云税贷"  @click="product(3,'云税贷')"/>
				  		</div>
				      </van-dropdown-item>
				  	<van-dropdown-item disabled ></van-dropdown-item> 
				  	  <div style="position: absolute;background-color: #fff;width: 100px;height: 40px;left: 40%;"></div>
				       <van-dropdown-item v-bind:title="switch4" ref="item4">
				         <div style=" background-color: #323233;">
				  			<van-cell title="贷款余额" @click="product(4,'贷款余额')" />
				  			<van-cell title="贷款客户数" @click="product(4,'贷款客户数')" />
				  			<van-cell title="逾期贷款额" @click="product(4,'逾期贷款额')" /> 
				  			<van-cell title="逾期客户数" @click="product(4,'逾期客户数')" />
				  			<van-cell title="逾期非不良额" @click="product(4,'逾期非不良额')" />
				         </div>
				       </van-dropdown-item>
				     </van-dropdown-menu>
				    <div @click="showDropdownMenu(3)" style="position: absolute;background-color: rgba(0,0,0,0);width: 50%;height: 50px;left: 0px;top:40px;z-index: 2008;"></div>
				    <div @click="showDropdownMenu(4)"style="position: absolute;background-color: rgba(0,0,0,0);width: 50%;height: 50px;left: 50%;top:40px;z-index: 2008;"></div>
				    
				    <div id="myChart3" ></div>
				    <div></div>
				  <div class="table">
				  	<van-row class="table-hearder">
				  		<van-col span="3" >编号 </van-col>
				  		<van-col span="11" >机构</van-col>
				  		<van-col span="5" >贷款余额</van-col>
				  		<van-col span="5" >比上旬</van-col>
				  					
				  	</van-row>
				  	<van-row class="table-content">
				  		<van-col span="24" v-for="item in data[type+1]"  class="table-row">
				  			<van-col span="3" class="table-left-title">{{item.title}}</van-col>
							<van-col span="11" >{{item.value0}}</van-col>
				  			<van-col span="5" >{{item.value1}}</van-col>
				  			<van-col span="5" :class="item1>0?'red':'green'" v-for="item1 in item.value2">{{item1}}</van-col>	
				  		</van-col>
				  	</van-row>
				  </div>
				  
			  </van-tab>
			</van-tabs>			
		</div>
		<van-popup v-model="show">
			<div class="cell-container">
				<div class="cell-header">{{menuTitle}}</div>
				<van-cell class="cell-content" v-for="item in showData" :title="item" @click="product(item)" />
				<div class="cell-footer" @click="product('cancel')">取消</div>
			</div>	
			
		</van-popup>
	</div>
</template>

<script>
	
	import NavBar from '@/components/navBar'
	import Vue from 'vue';
	import { Grid, GridItem,Image,Panel,Cell, CellGroup,Row, Col,Dialog,Toast ,Tab, Tabs,DropdownMenu, DropdownItem  } from 'vant';
	let echarts = require('echarts/lib/echarts');
	require('echarts/lib/chart/line');
	require('echarts/lib/chart/bar');
	require('echarts/lib/component/title');
	require('echarts/lib/component/legend')
	export default {
	data() {
		return {
			menuTitle:'产品',
			title:['业务监测','银保监会口径','小企业责任部门口径'],
			step:0,
			date:'2019-11-21',
			bank:'建行江苏省分行小企业业务部',
			active:0,
			noticePan1_text:'人行口径',
			type:0,
			switch1:'全部产品',
			switch2:'贷款余额',
			switch3:'全部产品',
			switch4:'贷款余额',
			barData: {
				title:'人行口径资产质量情况',
				subText:'单元(亿元)',
				color:['#525EFF', '#F58220'],
				xAxis:['贷款余额','不良贷款余额'],
				// yAxis:['助学贷款',' 建档立卡货款','创业担保贷款','农户经营性贷款','小欲企业主货款','个体工商户贷款','微型企业货款','小型企业贷款'],
				yAxis:['小型企业贷款',' 微型企业货款','个体工商户贷款','小欲企业主货款','农户经营性贷款','创业担保贷款','建档立卡货款','助学贷款'],
				data:[
					[495, 300, 80, 70, 60, 10, 10, 0],
					[10, 8, 6,4, 3,2,1, 0],
				],	
			},
			data:[
				
				[
						{
							'title':"合计",
							'value1':"1.54",
							'value2':["-0.08","-0.60" ]
						},
						{
							'title':'小型企业贷款',
							'value1':"1.96",
							'value2':["-0.13","-0.82" ]
						},
						{
							'title':'微型企业贷款',
							'value1':"0.26",
							'value2':["-0.01","0.06" ]
						},
						{
							'title':'个体工商户贷款',
							'value1':"0.70",
							'value2':["0.05","-0.09" ]
						},
						{
							'title':'小微企业主贷款',
							'value1':"1.74",
							'value2':["-0.04","-0.75" ]
						},
					
				],
				[
						{
							'title':"合计",
							'value1':"1.46",
							'value2':["-0.08","-0.62" ]
						},
						{
							'title':'小微企业法人',
							'value1':"1.53",
							'value2':["-0.11","-0.69" ]
						},
						{
							'title':'工商户和企业主',
							'value1':"1.17",
							'value2':["0.00","-0.44" ]
						},
				],
				[
						{
							'title':"201908",
							'value1':"485.09",
							'value2':["14.02","14.92","144.1" ]
						},
						{
							'title':'201907',
							'value1':"470.17",
							'value2':["470.17","470.17","470.17" ]
						},
						{
							'title':'201812',
							'value1':"340.99",
							'value2':["340.99","340.99","340.99" ]
						},
						{
							'title':'201808',
							'value1':"272.85",
							'value2':["272.85","272.85","272.8" ]
						},
				],
				[
						{
							'title':"1",
							'value0':"建行南京分行(汇总)",
							'value1':"71.34",
							'value2':["3.83"]
						},
						{
							'title':"2",
							'value0':"建行无锡分行(汇总)",
							'value1':"68.47",
							'value2':["0.03"],
						},
						{
						'title':"3",
						'value0':"建行南通分行(汇总)",
						'value1':"60.71",
						'value2':["1.25"],
						},{
						'title':"4",
						'value0':"建行常州分行(汇总)",
						'value1':"56.46",
						'value2':["1.32"],
						},{
						'title':"5",
						'value0':"建行泰州分行(汇总)",
						'value1':"44.77",
						'value2':["2.09"],
						},{
						'title':"6",
						'value0':"建行镇江分行(汇总)",
						'value1':"38.42",
						'value2':["2.23"],
						},{
						'title':"7",
						'value0':"建行盐城分行(汇总)",
						'value1':"36.01",
						'value2':["0.58"],
						},{
						'title':"8",
						'value0':"建行扬州分行(汇总)",
						'value1':"35.83",
						'value2':["1.43"],
						},{
						'title':"9",
						'value0':"建行徐州分行(汇总)",
						'value1':"21.37",
						'value2':["-0.18"],
						},
				]
			] ,
			myChart:null,
			isLoadChart:false,
			show: false,
			modalIndex:0,
			showData:[],
		}
	},

  //数据预加载
  created(){

  },

  //网页加载完成
  mounted () {
	 
	this.type = this.$route.query.type;
  	var that = this ;
  	setTimeout(function () {
  		that.createChart();
  	},100)
  },

  //声明方法
  methods : {
      onClickLeft:function(){
		  this.$router.go(-1);
	  },
	  createChart: function(isCreate = false) {
		
		var id = this.type == 2 ? (isCreate?'myChart3':'myChart2'):'myChart'
		 
	  	if(this.myChart == null || isCreate ){
	  		// 基于准备好的dom，初始化echarts实例
	  		this.myChart = echarts.init(document.getElementById(id))
			
			switch (this.type){
				case 1:{
					
					let option = {
						color: this.barData.color,
							title: {
								text: '银保监会口径资产质量情况',
								subtext: '单位(亿元)'
							},
							tooltip: {
								trigger: 'axis',
								axisPointer: {
									type: 'shadow'
								}
							},
							legend: {
								data: ['贷款余额', '不良贷款余额'],
								top: 30
							},
							grid: {
								left: '3%',
								right: '24%',
								bottom: '3%',
								top:'20%',
								containLabel: true
							},
							xAxis: {
								type: 'value',
								// boundaryGap: [0, 0.01]
							},
							yAxis: {
								type: 'category',
								data:  ['合计',' 小微企业法人','工商户和企业主'],
							},
							series: [
								{
									name: '贷款余额',
									type: 'bar',
									data:[485, 395, 90 ],
									label: {   // 图形上的文本标签
									        show: false,
									        position: 'insideTop', // 相对位置
									        rotate: 0,  // 旋转角度
									        color: '#eee'
									      },
								},
								{
									name: '不良贷款余额',
									type: 'bar',
									data: [10, 8, 0 ],
								}
							]
						}
						
						// 绘制图表
						this.myChart.setOption(option);
				}	
				break;
				case 2:{
					
					let option = {
						
						xAxis: {
							type: 'category',
							data:['201908','201907','201812','201808']
						},
						yAxis: {
							type: 'value'
						},
						grid: {
							left: '3%',
							right: '24%',
							bottom: '6%',
							top:'10%',
							containLabel: true
						},
						 lineStyle: {
										color: '#004E52',
										opacity: 0.5,
										width: 2
									},
						series: [{
							data: [1320, 1320, 1330, 1320,820, 932, 901, 934, 1290],
							type: 'line',
							areaStyle: {
								normal: {
									color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
										offset: 0,
										color: '#9696f8'
									}, {
										offset: 1,
										color: '#ffe'
									}])
								}
							},
						}]
					};
					
					let option1 = {
							 color: ['rgb(91,89,228)'],
							xAxis: {
							        type: 'category',
									data:[1,2,3,4,5,6,7]
							    },
							    yAxis: {
							        type: 'value'
							    },
								grid: {
									left: '3%',
									right: '24%',
									bottom: '3%',
									top:'10%',
									containLabel: true
								},
								 lineStyle: {
								                color: '#004E52',
								                opacity: 0.5,
								                width: 2
								            },
							    series: [{
									type:'bar',
									barWidth: '60%',
									data:[70, 68, 60, 58, 45, 40, 40]
							    }]
							};
						
						// 绘制图表
						this.myChart.setOption(isCreate?option1:option);
					
				}
					break;
				default:{
					
					let option =  {
						color: this.barData.color,
						tooltip : {
								trigger: 'axis',
								axisPointer : {            // 坐标轴指示器，坐标轴触发有效
									type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
								}
							},
					  title: {
							text: this.barData.title,
							 subtext: this.barData.subText ,
							x: '20%',
							textAlign: 'center'
						}, 
						legend: {
							data: this.barData.xAxis,
							x: '40%',
						},
						grid: {
							left: '3%',
							right: '24%',
							bottom: '3%',
							top:'20%',
							containLabel: true
						},
						xAxis:  {
							type: 'value'
						},
						yAxis: {
							type: 'category',
							data: this.barData.yAxis,
							
						},
						 // barWidth : 10,//柱图宽度
						series: []
					};
					this.barData.data.forEach((item,index)=>{
						// if(index != 0) return;
						
						option.series.push(
							{
								name: this.barData.xAxis[index],
								type: 'bar',
								stack: '总量',
								label: {
									normal: {
										show: true,
										position: 'insideRight'
									}
								},
								data: item
							},
						);
					});
					// 绘制图表
					this.myChart.setOption(option);
				}
					break;
			}	
	  	}
	  },
	  showAll(){
	  	console.log('showALl')
	  },
	  product(name){
		  var index = this.modalIndex;
		   this.show = false;
		 
		  if(name == 'cancel'){
			  return;
		  }
		 switch (index){
		 	case 1:
				this.switch1 = name
				this.$refs.item1.toggle();
		 		break;
			case 2:
				this.switch2 = name
				this.$refs.item2.toggle();
				break;
			case 3:
				this.switch3 = name
				this.$refs.item3.toggle();
				break;
			case 4:
				this.switch4 = name
				this.$refs.item4.toggle();
				break;
		 	default:
		 		break;
		 }
		 
		 
	  },
	  changTab(){
		  if(!this.isLoadChart){
			  
			   this.isLoadChart = true;
				var that = this;
				setTimeout(function () {
					that.createChart(true);
				},100)
		  }
	  },
	  showDropdownMenu(index){
		  this.show = true;
		  this.menuTitle = index%2 == 1?'产品':'指标';
		  this.modalIndex = index;
		  var data = [
			  ['全部产品','小微快贷','信用快贷','抵押快贷','云税贷'],
			  ['客户余额','贷款客户数','逾期贷款额','逾期客户数','逾期非不良额'],
			  ['小微快贷','小微快贷','信用快贷','抵押快贷','云税贷'],
			  ['贷款余额','贷款客户数','逾期贷款额','逾期客户数','逾期非不良额']
		  ];
		  
		 this.showData = data[index-1];
		
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
		margin: 0px 16px;
		padding: 16px;
		border-radius: 16px;
		color: #FFFFFF;
	}
	.noticePan1{
		background-color: rgb(87,92,236);
		margin-left: -16px;
		border-radius:0px 16px 16px  0px ;
		padding: 4px 36px 4px 4px;
		width: 60%;
		text-align: right;
		border: 1px lightgray solid;
	}
	.noticePan2{
		font-size: 26px;
		padding: 10px 0px 10px 0px;
	}
	.noticePan3,.noticePan6{
		padding: 4px;
	}
	.noticePan3 span,.noticePan6 span{
		color: rgb(76,224,148);
	}
	
	.noticePan4{
		padding: 4px 4px 4px 4px;
		height: 26px;
		
	}
	.noticePan5{
		color:rgb(249,241,40);
		font-size: 26px;
		padding: 10px 0px 10px 0px;
	}
	.tip{
		padding: 0px 32px ;
	}
	.van-cell__value span{
		padding-right: 16px;;
	}
	.redColor .van-cell__value span{
		color: rgb(232,86,93);
	}
	
	.table{
		text-align: center;
	}
	.table .table-hearder{
		// text-align:  center;
		// color: #fff;
		
		padding: 16px 16px;;
		background-color: rgb(238,238,238);
		
	}
	
	.table-left-title{
		padding: 6px 0px;
		line-height: 36px;
		vertical-align: middle; 
		
	}
	.table-content {
		height: 48px;
		line-height: 48px;
		
	}
	.table-content>div:nth-child(2n+2){
		// background-color: lightgray;
	}
	.table-row{
		font-size: 14px;
	}
	.table-row div:nth-child(2) {
		color: rgb(116,165,223);
	}
	.red{
		color: red;
	}
	.green{
		color: green;
	}
	#myChart{
			width: 120%;
			height:310px;
		}
		#myChart2,#myChart3{
				width: 120%;
				height:200px;
			}
		table tr td{
			padding:0px
		}
	.dropdown-content-container{
		width: 80%;
		margin-top: 100px;
		background-color: #fff;
	}
	.cell-container{
		width: 280px;
	}
	.cell-header,.cell-footer{
		text-align: center;
		height: 60px;
		line-height: 60px;
	}
	.cell-footer{
		color: #389BF6;
	}
</style>
