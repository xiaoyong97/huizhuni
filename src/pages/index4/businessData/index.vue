<template>
    <div class="main">
     
     <!--头部导航-->
     <van-nav-bar class="theme_color" :title="title"  left-arrow @click-left="onClickLeft" >
    
     </van-nav-bar>

    <div class="content">
		<div class="container">
			<van-row class="header">
			  <van-col  class="header_left"></van-col>
			  <van-col  class="header_center">建行厦门金山支行</van-col>
			  <van-col  class="header_right"></van-col>
			</van-row>
			
			<van-collapse v-model="activeName" accordion @change="createChart">
			<van-collapse-item  name="1"><div slot="title"><img class="icon" src="../../../assets/images/48/01_gskhjg.png" alt="">工商客户结构</div><div id="myChart1" ></div></van-collapse-item>
			<van-collapse-item  name="2"><div slot="title"><img class="icon" src="../../../assets/images/48/02_whkhjg.png" alt="">我行客户结构</div><div id="myChart2" ></div></van-collapse-item>
			<van-collapse-item  name="3"><div slot="title"><img class="icon"  src="../../../assets/images/48/03_ckye.png" alt="">存款余额</div><div id="myChart3" ></div></van-collapse-item>
			<van-collapse-item  name="4"><div slot="title"><img class="icon" src="../../../assets/images/48/04_dkye.png" alt="">贷款余额</div><div id="myChart4" ></div></van-collapse-item>
			<van-collapse-item  name="5"><div slot="title"><img class="icon" src="../../../assets/images/48/05_phkhs.png" alt="">普惠客余数</div><div id="myChart5" ></div></van-collapse-item>
			<van-collapse-item  name="6"><div slot="title"><img class="icon" src="../../../assets/images/48/06_phdkye.png" alt="">普惠贷款余额</div><div id="myChart6" ></div></van-collapse-item>
			<van-collapse-item  name="7"><div slot="title"><img class="icon" src="../../../assets/images/48/07_xwkdyhs.png" alt="">小额快贷客户数</div><div id="myChart7" ></div></van-collapse-item>
			<van-collapse-item  name="8"><div slot="title"><img class="icon" src="../../../assets/images/48/08_xwkdye.png" alt="">小额快贷余额</div><div id="myChart8" ></div></van-collapse-item>
			<van-collapse-item  name="9"><div slot="title"><img class="icon" src="../../../assets/images/48/09_blye.png" alt="">不良余额/不良率</div><div id="myChart9" ></div></van-collapse-item>
			</van-collapse>
		</div>
    </div>
        
    </div>
</template>

<script>

 import NavBar from '@/components/navBar'
	import Vue from 'vue';
	import { Cell, CellGroup,Row, Col ,Collapse, CollapseItem} from 'vant';
	let echarts = require('echarts/lib/echarts')
	// 引入柱状图组件
	require('echarts/lib/chart/bar')
	require('echarts/lib/chart/pie')
	require('echarts/lib/chart/line')
	
	// 引入提示框和title组件
	require('echarts/lib/component/tooltip')
	require('echarts/lib/component/title')
	require('echarts/lib/component/legend')
	
 export default {

  data() {
    return {
      title : '经营数据',
	  activeName:'1',
	  myChart1:null,
	  myChart2:null,
	  myChart3:null,
	  myChart4:null,
	  myChart5:null,
	  myChart6:null,
	  myChart7:null,
	  myChart8:null,
	  myChart9:null,
	 
    }
  },
  
  
  //数据预加载
  created : ()=>{

    

  },

  //网页加载完成
  mounted (){
	  
	  this.createChart1();
	 
  },
  
  //声明方法
  methods : {
	onClickLeft:function(){
			this.$router.go(-1);
	},
	createChart:function(){
		var that = this;
		setTimeout(function(){
				
			switch(that.activeName){
				case '1':
					that.createChart1();
				break;
				case '2':
					that.createChart2();
				break;
				case '3':
					that.createChart3();
				break;
				case '4':
					that.createChart4();
				break;
				case '5':
					that.createChart5();
				break;
				case '6':
					that.createChart6();
				break;
				case '7':
					that.createChart7();
				break;
				case '8':
					that.createChart8();
				break;
				case '9':
					that.createChart9();
				break;
			}
		},100)
	},
	createChart1: function() {
		if(this.myChart1 == null){
			// 基于准备好的dom，初始化echarts实例
			      this.myChart1 = echarts.init(document.getElementById('myChart1'))
				  var colors = [ '#FAED5B', '#7EDCEE'];
	
				  let option = {
		
					legend: {
						orient: 'vertical',
						left: 'left',
						data: ['非工商小微客户数','工商小微客户数']
					},
					
					color:colors,
					label: {
						formatter: "{b}\n{c}",	
						normal: {
						    textStyle: {
						    	color: '#666666'
						    },
						}
					},
					series : [
						{
							name: '访问来源',
							type: 'pie',
							radius : '80%',
							center: ['50%', '60%'],
							data:[
								{value:126207, name:'非工商小微客户数'},
								{value:654745, name:'工商小微客户数'},					
							],
							itemStyle: {
								emphasis: {
									shadowBlur: 10,
									shadowOffsetX: 0,
									shadowColor: 'rgba(0, 0, 0, 0.5)'
								}
							},
							labelLine: {
								normal: {
									lineStyle: {
										color: '#666666'
									},
									smooth: 0.2,
									length: 4,
									length2: 20
								}
							},
							label: {
								formatter: "{b}\n{c}",	
								normal: {
								    textStyle: {
								    	color: '#666666'
								    },
								}
							},
						}
					]
				};
				  
			
	
			      // 绘制图表
			      this.myChart1.setOption(option);
				  // this.createChart2();
			　　
		}
	},
	createChart2: function() {
		if(this.myChart2 == null){
			// 基于准备好的dom，初始化echarts实例
			  this.myChart2 = echarts.init(document.getElementById('myChart2'))
			  var colors = [ '#FAED5B', '#7EDCEE','#F57B2A'];
			  let option = {
				legend: {
					orient: 'vertical',
					left: 'left',
					data: ['未分类客户数','我行小微客户数','我行中大型客户数'],
				},		
				color:colors,
				label: {
					formatter: "{b}\n{c}",	
					normal: {
						textStyle: {
							color: '#666666'
						},
					}
				},
				series : [
					{
						name: '访问来源',
						type: 'pie',
						radius : '80%',
						center: ['50%', '60%'],
						data:[
							{value:19904, name:'未分类客户数'},
							{value:138742, name:'我行小微客户数'},	
							{value:100719, name:'我行中大型客户数'},	
						],
						itemStyle: {
							emphasis: {
								shadowBlur: 10,
								shadowOffsetX: 0,
								shadowColor: 'rgba(0, 0, 0, 0.5)'
							}
						},
						labelLine: {
							normal: {
								lineStyle: {
									color: '#666666'
								},
								smooth: 0.2,
								length: 8,
								length2: 20
							}
						},
						label: {
							formatter: "{b}\n{c}",	
							normal: {
								textStyle: {
									color: '#666666'
								},
							}
						},
					}
				]
			};
			// 绘制图表
			this.myChart2.setOption(option);		　
		}
	},
	createChart3: function() {
			if(this.myChart3 == null){
				// 基于准备好的dom，初始化echarts实例
				  this.myChart3 = echarts.init(document.getElementById('myChart3'))
				  var colors = [ '#FAED5B', '#7EDCEE','#F57B2A'];
				   
				  let option = {
					 color: ['#8FC0FE'],
					  legend: {
					         data:[{
								 name:'全行一般性存款',
								 textStyle:{
									 // color:'#fff',
									 // backgroundColor:'#8FC0FE',
									
								 }
							 },'小企业业务一般性存款日均余额','对公余额','小企业业务一般性存款点余额']
							,selected: {
								全行一般性存款:true,
								小企业业务一般性存款日均余额:false,
								对公余额:false,
								小企业业务一般性存款点余额:false
							},
							selectedMode:'single',
							itemWidth:0,
						 },
					    tooltip : {
					        trigger: 'axis',
					        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
					            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
					        }
					    },
					    grid: {
					        left: '3%',
					        right: '4%',
					        bottom: '3%',
							// top:'23%',
					        containLabel: true
					    },
					    xAxis : [
					        {
					            type : 'category',
					            data : ['201802', '201803', '201804', '201805', '201806', '201807', '201808', '201809', '201810', '201811', '201812', '201901'],
					             axisLabel: {
					                       interval: 0,
					                       rotate: 30
					                   },
					        }
					    ],
					    yAxis : [
					        {
					            type : 'value'
					        }
					    ],
					    series : [
					        {
					            name:'全行一般性存款',
					            type:'bar',
					            barWidth: '40%',
					            data:[280, 350, 360, 410, 210, 310, 290, 340, 360, 240, 310,450]
					        },
							{
							    name:'小企业业务一般性存款日均余额',
							    type:'bar',
							    barWidth: '40%',
							    data:[280, 350, 360, 410, 210, 310, 290, 340, 360, 240, 310,450]
							},
							{
							    name:'对公余额',
							    type:'bar',
							    barWidth: '40%',
							    data:[410, 290, 300, 460, 280, 350, 370, 260, 290, 280, 370,470]
							},
							{
							    name:'小企业业务一般性存款点余额',
							    type:'bar',
							    barWidth: '40%',
							    data:[350, 320, 270, 440, 320, 290, 280, 310, 330, 325, 310,450]
							}
					    ]
				};
				// 绘制图表
				this.myChart3.setOption(option);		　
			}
		},
	createChart4: function() {
			if(this.myChart4 == null){
				// 基于准备好的dom，初始化echarts实例
				  this.myChart4 = echarts.init(document.getElementById('myChart4'))
				  var colors = [ '#FAED5B', '#7EDCEE','#F57B2A'];
				   
				  let option = {
					 color: ['#3EC275'],
					  legend: {
					         data:['小企业部责任','全行对公贷款余额']
							,selected: {
								小企业部责任:true,
								全行对公贷款余额:false,
							},
							selectedMode:'single',
							itemWidth:0,
							itemStyle:{
								backgroundColor:'#000'
							}
						 },
					    tooltip : {
					        trigger: 'axis',
					        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
					            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
					        }
					    },
					    grid: {
					        left: '3%',
					        right: '4%',
					        bottom: '3%',
							// top:'23%',
					        containLabel: true
					    },
					    xAxis : [
					        {
					            type : 'category',
					            data : ['201802', '201803', '201804', '201805', '201806', '201807', '201808', '201809', '201810', '201811', '201812', '201901'],
					             axisLabel: {
					                       interval: 0,
					                       rotate: 30
					                   },
					        }
					    ],
					    yAxis : [
					        {
					            type : 'value'
					        }
					    ],
					    series : [
					        {
					            name:'小企业部责任',
					            type:'bar',
					            barWidth: '40%',
					            data:[1800, 1350, 1550, 1800, 1400, 1700, 1800, 1510, 1515, 1225, 1700,1850]
					        },
							{
							    name:'全行对公贷款余额',
							    type:'bar',
							    barWidth: '40%',
							    data:[1550, 1200, 1300, 1850, 1220, 1440, 1560, 1660, 1350, 1450, 1800,1700]
							},
						
					    ]
				};
				// 绘制图表
				this.myChart4.setOption(option);		　
			}
		},	
	createChart5: function() {
		if(this.myChart5 == null){
			// 基于准备好的dom，初始化echarts实例
			  this.myChart5 = echarts.init(document.getElementById('myChart5'))
			  var colors = [ '#FAED5B', '#7EDCEE','#F57B2A'];
			   
			  let option = {
				 color: ['#8FC0FE'],
				  legend: {
						 data:['普惠8+1','人行普惠','银监普惠']
						,selected: {
							"普惠8+1":true,
							人行普惠:false,
							银监普惠:false,
						},
						selectedMode:'single',
						itemWidth:0,
						itemStyle:{
							backgroundColor:'#000'
						}
					 },
					tooltip : {
						trigger: 'axis',
						axisPointer : {            // 坐标轴指示器，坐标轴触发有效
							type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
						}
					},
					grid: {
						left: '3%',
						right: '4%',
						bottom: '3%',
						// top:'23%',
						containLabel: true
					},
					xAxis : [
						{
							type : 'category',
							data : ['201802', '201803', '201804', '201805', '201806', '201807', '201808', '201809', '201810', '201811', '201812', '201901'],
							 axisLabel: {
									   interval: 0,
									   rotate: 30
								   },
						}
					],
					yAxis : [
						{
							type : 'value'
						}
					],
					series : [
						{
							name:'普惠8+1',
							type:'bar',
							barWidth: '40%',
							data:[1800, 1350, 1550, 1800, 1400, 1700, 1800, 1510, 1515, 1225, 1700,1850]
						},
						{
							name:'人行普惠',
							type:'bar',
							barWidth: '40%',
							data:[1550, 1200, 1300, 1850, 1220, 1440, 1560, 1660, 1350, 1450, 1800,1700]
						},
						{
							name:'银监普惠',
							type:'bar',
							barWidth: '40%',
							data:[1550, 1200, 1300, 1850, 1220, 1440, 1560, 1660, 1350, 1450, 1800,1700]
						},
					
					]
			};
			// 绘制图表
			this.myChart5.setOption(option);		　
		}
	},
	createChart6: function() {
		if(this.myChart6 == null){
			// 基于准备好的dom，初始化echarts实例
			  this.myChart6 = echarts.init(document.getElementById('myChart6'))
			  var colors = [ '#FAED5B', '#7EDCEE','#F57B2A'];
			   
			  let option = {
				 color: ['#8FC0FE'],
				  legend: {
						 data:['普惠8+1','人行普惠','银监普惠']
						,selected: {
							"普惠8+1":true,
							人行普惠:false,
							银监普惠:false,
						},
						selectedMode:'single',
						itemWidth:0,
						itemStyle:{
							backgroundColor:'#000'
						}
					 },
					tooltip : {
						trigger: 'axis',
						axisPointer : {            // 坐标轴指示器，坐标轴触发有效
							type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
						}
					},
					grid: {
						left: '3%',
						right: '4%',
						bottom: '3%',
						// top:'23%',
						containLabel: true
					},
					xAxis : [
						{
							type : 'category',
							data : ['201802', '201803', '201804', '201805', '201806', '201807', '201808', '201809', '201810', '201811', '201812', '201901'],
							 axisLabel: {
									   interval: 0,
									   rotate: 30
								   },
						}
					],
					yAxis : [
						{
							type : 'value'
						}
					],
					series : [
						{
							name:'普惠8+1',
							type:'bar',
							barWidth: '40%',
							data:[1800, 1350, 1550, 1800, 1400, 1700, 1800, 1510, 1515, 1225, 1700,1850]
						},
						{
							name:'人行普惠',
							type:'bar',
							barWidth: '40%',
							data:[1550, 1200, 1300, 1850, 1220, 1440, 1560, 1660, 1350, 1450, 1800,1700]
						},
						{
							name:'银监普惠',
							type:'bar',
							barWidth: '40%',
							data:[1550, 1200, 1300, 1850, 1220, 1440, 1560, 1660, 1350, 1450, 1800,1700]
						},
					
					]
			};
			// 绘制图表
			this.myChart6.setOption(option);		　
		}
	},
	createChart7: function() {
		if(this.myChart7 == null){
			// 基于准备好的dom，初始化echarts实例
			  this.myChart7 = echarts.init(document.getElementById('myChart7'))
			  var colors = [ '#FAED5B', '#7EDCEE','#F57B2A'];
			   
			  let option = {
				 color: colors,
				  // legend: {
						//  data:['普惠8+1','人行普惠','银监普惠']
						// ,selected: {
						// 	"普惠8+1":true,
						// 	人行普惠:false,
						// 	银监普惠:false,
						// },
						// selectedMode:'single',
						// itemWidth:0,
						// itemStyle:{
						// 	backgroundColor:'#000'
						// }
					 // },
					tooltip : {
						trigger: 'axis',
						axisPointer : {            // 坐标轴指示器，坐标轴触发有效
							type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
						}
					},
					grid: {
						left: '3%',
						right: '4%',
						bottom: '3%',
						top:'2%',
						containLabel: true
					},
					xAxis : [
						{
							type : 'category',
							data : [ '201807', '201808', '201809', '201810', '201811', '201812', '201901'],
							 axisLabel: {
									   interval: 0,
									   rotate: 30
								   },
						}
					],
					yAxis : [
						{
							type : 'value'
						}
					],
					series : [
						{
							name:'普惠8+1',
							type:'bar',
							barWidth: '40%',
							data:[ 2.3, 1.7, 2, 1.65, 2.3,2,2.2]
						},
					]
			};
			// 绘制图表
			this.myChart7.setOption(option);		　
		}
	},
	createChart8: function() {
		if(this.myChart8 == null){
			// 基于准备好的dom，初始化echarts实例
			  this.myChart8 = echarts.init(document.getElementById('myChart8'))
			  var colors = [ '#FAED5B', '#7EDCEE','#F57B2A'];
			   
			  let option = {
				 color: colors,	
					tooltip : {
						trigger: 'axis',
						axisPointer : {            // 坐标轴指示器，坐标轴触发有效
							type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
						}
					},
					grid: {
						left: '3%',
						right: '4%',
						bottom: '3%',
						top:'2%',
						containLabel: true
					},
					xAxis : [
						{
							type : 'category',
							data : [ '201807', '201808', '201809', '201810', '201811', '201812', '201901'],
							 axisLabel: {
									   interval: 0,
									   rotate: 30
								   },
						}
					],
					yAxis : [
						{
							type : 'value'
						}
					],
					series : [
						{
							name:'普惠8+1',
							type:'bar',
							barWidth: '40%',
							data:[ 77, 83, 90, 80, 75,70,78]
						},
					]
			};
			// 绘制图表
			this.myChart8.setOption(option);		　
		}
	},
	createChart9: function() {
		if(this.myChart9 == null){
			// 基于准备好的dom，初始化echarts实例
			  this.myChart9 = echarts.init(document.getElementById('myChart9'))
			  var colors = [ '#F57B2A'];
			   
			  let option = {
				 color: colors,	
					tooltip : {
						trigger: 'axis',
						axisPointer : {            // 坐标轴指示器，坐标轴触发有效
							type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
						}
					},
					legend: {
						data:[{
							 name:'小企业部责任',
							 textStyle:{
								 // color:'#fff',
								 // backgroundColor:'#8FC0FE',
								
							 }
						 },'普惠8+1','人行普惠','小微快贷']
						,selected: {
							小企业部责任:true,
							"普惠8+1":false,
							人行普惠:false,
							小微快贷:false
						},
						selectedMode:'single',
						itemWidth:0,
					 },
					grid: {
						left: '3%',
						right: '4%',
						bottom: '3%',
						// top:'2%',
						containLabel: true
					},
					xAxis : [
						{
							type : 'category',
							data : ['201802', '201803', '201804', '201805', '201806', '201807', '201808', '201809', '201810', '201811', '201812', '201901'],
							 axisLabel: {
									   interval: 0,
									   rotate: 30
								   },
						}
					],
					yAxis : [
						{
							type : 'value'
						}
					],
					series : [
					    {
					        name:'小企业部责任',
					        type:'bar',
					        barWidth: '40%',
					        data:[15, 17, 16, 18, 17, 17.5, 20, 21, 23, 24, 22,23]
					    },
						{
						    name:'普惠8+1',
						    type:'bar',
						    barWidth: '40%',
						    data:[18, 17.5, 22, 23, 13, 19, 17, 18, 20, 23, 18,20]
						},
						{
						    name:'人行普惠',
						    type:'bar',
						    barWidth: '40%',
						    data:[410, 290, 300, 460, 280, 350, 370, 260, 290, 280, 370,470]
						},
						{
						    name:'小微快贷',
						    type:'bar',
						    barWidth: '40%',
						    data:[21, 13, 17, 23, 19, 21, 19, 24, 19, 17, 17,19]
						},
						{
							name:'不良率',
							type:'line',
							lineStyle:{
								color:'#F30021'
							},
							data:[2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
						}
					]
			};
			// 绘制图表
			this.myChart9.setOption(option);		　
		}
	},
	
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
// scoped 表示私有样式
	.content{
		padding: 8px;
		background-color: rgb(238,238,238);
	}
	.theme_color{
		background-color: #4c62e7;
	}
	.van-nav-bar__title,.van-icon.van-icon-arrow-left.van-nav-bar__arrow{
		color:#fff;
	}
	.container{
		background-color: #fff;
		box-shadow: 0 2px 2px 0 rgba(0,0,0,.15);
	}
	.header{
		width: 200px;
		margin: 0px auto;
	}
	.header_left{
		border-top:18px solid #4c62e7;
		border-right:8px solid #4c62e7;
		border-left:8px solid rgba(0,0,0,0);
		border-bottom:18px solid rgba(0,0,0,0);
		height: 0px;;
		width: 11px;
	}
	.header_center{
		background-color: #4c62e7;
		color: #fff;
		height: 36px;
		line-height: 36px;
		font-size: 16px;
		padding-left: 16px;
		padding-right: 16px;
	}
	.header_right{
		border-top:18px solid #4c62e7;
		border-left:8px solid #4c62e7;
		border-right:8px solid rgba(0,0,0,0);
		border-bottom:18px solid rgba(0,0,0,0);
		height: 0px;;
		width: 11px;
	}
	#myChart1,#myChart2{
		width: 100%;
		height:160px;
	}
	#myChart3,#myChart4,#myChart5,#myChart6,#myChart9{
		width: 100%;
		height:260px;
	}
	#myChart7,#myChart8{
		width: 100%;
		height:200px;
	}
	.icon{
		width: 20px;
		margin-right: 8px;
		vertical-align: middle;
	}
</style>