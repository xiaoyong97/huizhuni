<template>
	<div class="newCollectTask">
	 <!--头部导航-->
		<van-nav-bar :title="title[step]"  left-arrow @click-left="onClickLeft" ></van-nav-bar>
		<br/>
		<div class="cell_container" >
			<table id="table_tool">
				<tr>
					<th>
						<div @click="changTag(1)">
							<img src="../../../../assets/images/other/08.png" alt="">
							<p v-bind:class="{theme:type==1}">备付金不足</p>
						</div>	
					</th>
					<th>
						<div @click="changTag(2)">
							<img src="../../../../assets/images/other/06.png" alt="">
							<p v-bind:class="{theme:type==2}">本金逾期</p>
						</div>	
					</th>
					<th>
						<div @click="changTag(3)">
							<img src="../../../../assets/images/other/10.png" alt="">
							<p v-bind:class="{theme:type==3}">利息逾期</p>
						</div>	
					</th>
					<th>
						<div @click="changTag(4)">
							<img src="../../../../assets/images/other/09.png" alt="">
							<p v-bind:class="{theme:type==4}">结息失败</p>
						</div>	
					</th>
					<th>
						<div @click="changTag(5)">
							<img src="../../../../assets/images/other/07.png" alt="">
							<p v-bind:class="{theme:type==5}">到期提醒</p>
						</div>	
					</th>
					<th>
						<div @click="changTag(6)">
							<img src="../../../../assets/images/other/11.png" alt="">
							<p v-bind:class="{theme:type==6}">账户变动</p>
						</div>
					</th>
				</tr>
			</table>		
		</div>
		<div class="table_container">
			<table v-show="type == 1" id="table1">
				<tr class="title">
					<th>客户名称</th>
					<th>授信品种</th>
					<th>债项余额</th>
					<th>当日债项余额</th>
					<th>到期应扣金额</th>
				</tr>
				<tr v-for="(item,index) in this.infos[type-1]">
					<td class="col-word" v-for="item1 in item">{{item1}}</td>	
				</tr>
			</table>
			<table v-show="type == 2" id="table2">
				<tr class="title">
					<th>客户名称</th>
					<th>授信品种</th>
					<th>债项余额</th>
					<th>拖欠天数</th>
					<th>逾期本金</th>
				</tr>
				<tr v-for="(item,index) in this.infos[type-1]" >
					<td class="col-word" v-for="item1 in item">{{item1}}</td>	
				</tr>
			</table>
			<table v-show="type == 3" id="table3">
				<tr class="title">
					<th>客户名称</th>
					<th>授信品种</th>
					<th>债项余额</th>
					<th>拖欠天数</th>
					<th>欠息金额</th>
				</tr>
				<tr v-for="(item,index) in this.infos[type-1]">
					<td class="col-word" v-for="item1 in item">{{item1}}</td>	
				</tr>
			</table>
			<table v-show="type == 4" id="table4">
				<tr class="title">
					<th>客户名称</th>
					<th>授信品种</th>
					<th>债项余额</th>
					<th>差额</th>
				</tr>
				<tr v-for="(item,index) in this.infos[type-1]">
					<td class="col-word" v-for="item1 in item">{{item1}}</td>	
				</tr>
			</table>
			<table v-show="type == 5" id="table5">
				<tr class="title">
					<th>客户名称</th>
					<th>授信品种</th>
					<th>贷款到期日期</th>
					<th>贷款余额</th>
				</tr>
				<tr v-for="(item,index) in this.infos[type-1]">
					<td class="col-word" v-for="item1 in item">{{item1}}</td>	
				</tr>
			</table>
			<table v-show="type == 6" id="table6">
				<tr class="title">
					<th>客户名称</th>
					<th>存款账号</th>
					<th>存款余额</th>
					<th>逾期欠息合计金额</th>
				</tr>
				<tr v-for="(item,index) in this.infos[type-1]">
					<td class="col-word" v-for="item1 in item">{{item1}}</td>	
				</tr>
			</table>
		</div>
		
	</div>
	
</template>

<script>
	import eventBus from '@/assets/js/eventbus.js';
	import NavBar from '@/components/navBar'
	import Vue from 'vue';
	import { Grid, GridItem,Image,Panel,Cell, CellGroup,Row, Col,Dialog,Toast ,Tab, Tabs } from 'vant';
	
	export default {
  data() {
    return {
		title:['到逾期管理'],
		step:0,
		active:0,
		signShow:'',//1：未签到，2：已签到
		activeNames: ['1'],
		luyin:0,
		show:false,
		menu:[
			{
				title:'备付金不足',
				img:'src/assets/images/other/08.png',
			},
			{
				title:'本金逾期',
				img:'/assets/images/other/08.png',
			},{
				title:'利息逾期',
				img:'../../../../assets/images/other/08.png',
			},{
				title:'本金逾期',
				img:'../../../../assets/images/other/08.png',
			},{
				title:'利息逾期',
				img:'../../../../assets/images/other/08.png',
			}
		],
		infos:[
			[
				['客户名称3515033887010000','流动资金贷款','10000000','0','0'],
				['客户名称3515039887010000','流动资金贷款','90000000','0','0'],
				['客户名称3515033887010000','流动资金贷款','10000000','0','0'],
				['客户名称3515039887010000','流动资金贷款','90000000','0','0'],
			],
			[
				['客户名称278860472062624','短期小微企业信用快贷','16，000','0','0'],
				['客户名称278860472062624','短期小微企业信用快贷','37，000','0','0'],
				['客户名称278860472062624','短期小微企业信用快贷','23，000','0','0'],
				['客户名称278860472062624','短期小微企业信用快贷','30，902.0','0','0'],
			],
			[
				['客户名称190861000002299','短期小微企业信用快贷','50，000','0','0'],
			],
			[
				['广州悅客文化创意有限公司','短期小微企业信用快贷','10000','0'],
				['广州利峰宾馆有限公司','短期小微企业信用快贷','16000','0'],
				['江门兄弟（广州）商贸有限公司','短期小微企业信用快贷','26000','0'],
			],
			[
				['广州市利丰祥物流有限公司','短期小微企业信用快贷','20190619','0'],
			],
			[
				['客户名称3511357700022010','35113577000220105537','2318，578.05','0'],
			],
		],
		type:1,
	}
  },

  //数据预加载
  created(){
		this.signShow = 1;
  },

  //网页加载完成
  mounted () {
	  
	  this.creatDrag('table_tool');
	  this.creatDrag('table1');
  },
	activated() {
		eventBus.$on('sign', function(data){
				  if (data) {
						  this.signShow = 2;
				  }
				  console.log('sign',this.signShow);
		}.bind(this));
	},
  //声明方法
  methods : {
      onClickLeft:function(){
		  this.$router.go(-1);
	  },
	  go : function(url,item){
	    this.$router.push({name:url,params:item});
	  },

	  nextStep:function(){
		  if(this.luyin>2){
			   this.luyin  = 0;
			   return;
		  }
		   this.luyin ++;
	  },
	  submit:function(){
		  this.show = !this.show;

	  },
	  changTag:function( index){
		  this.type = index;
		  this.creatDrag('table'+index);
	  },
	  isMobile:function(){
		  var ua = navigator.userAgent;
		  
		  var ipad = ua.match(/(iPad).*OS\s([\d_]+)/),
		  
		  isIphone =!ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/),
		  
		  isAndroid = ua.match(/(Android)\s+([\d.]+)/),
		  
		  isMobile = isIphone || isAndroid;
		  return isMobile? true :false;
	  },
	  creatDrag:function(id){
			
			if(this.isMobile()){
				return;
			}
		    var oBox = document.getElementById(id);
			var Toleft = 0;
		      oBox.onmousedown = function(ev) {
			
		          var ev = ev || event;
		          var Y = ev.clientY;
		          var X = ev.clientX;
		   			var maxWidth = 	document.getElementById(id).offsetWidth - document.body.clientWidth;
		          if( Toleft == 0){
						Toleft = document.getElementById(id).scrollLeft;
					}
		          console.log(maxWidth)
		          oBox.onmousemove = function(ev) {
		              ev = ev || event;
		              var subY = ev.clientY - Y;
		              var subX = ev.clientX - X ;
		              Y = ev.clientY;
		              X = ev.clientX;
		             
		              Toleft -= (subX);
						if(Toleft>maxWidth) Toleft = maxWidth;
					  document.getElementById(id).style.transform = 'translateX(-' + Toleft + 'px)';
		          }
		          document.onmouseup = function() {
		              oBox.onmousemove = function() {
		                  null;
		              }
		          }
		      }
	  }
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
	.save-buttom{
		width: 120px;
		position: fixed;
		bottom: 8px;
		transform: translateX(-50%);
	}
	.luyin{
		position: absolute;
		left: 0px;
		top:44px;;
		width: 100%;
		height: 100%;
		z-index: 1;
	}
	
	.table tr *{
		padding: 8px 0px;
	}
	.table tr td{
		background-color: rgb(232,232,232);
		height: 44px;
	}
	.theme{
		color: rgb(109,95,175);
	}
	.select_row{
		height: 44px;
	}
	.select_row select{
		border: 1px solid gray;
		padding: 4px;
	}
	textarea{
		border: 1px solid lightgray;
		border-radius: 8px;
	}
	.wrapper {
	  display: flex;
	  align-items: center;
	  justify-content: center;
	  height: 100%;
	  z-index: 100;
	}
	
	.block {
		width: 280px;
		height: 240px;
		background-color: #fff;
		z-index: 100;
		line-height: 40px;;
		text-align: center;
	}
	.block>div:first-child{
		background-color: #4C62E7;
		color: #fff;
	}
	.cell_container {
		width: 100%;
		white-space:nowrap;/*内容横向排列不换行*/ 
		overflow-x:auto;
		overflow-y:hidden;
		padding-left: 8px;;
	}
	.cell_container div{
		display: inline-block;
		width: 90px;;
		height: 80px;
		text-align: center;
		
	}
	.cell_container div img{
		width: 40px;
		height: 32px;
		display: block;
		margin: 8px auto 4px auto;
		
	}
	
	.title{
		background-image: linear-gradient(to right, #4bb0ff, #6149f6);
		height: 38px;
		margin-top: 8px;
		color: #fff;
		
	}
	.col-title{
		color: white;
		line-height: 38px;
		text-align: center;
	}	
	.col-word{
		padding-left: 6px;
		text-align: center;
	}
	
	.table_container{
		width: 100%;
		white-space:nowrap;/*内容横向排列不换行*/ 
		overflow-x:auto;
		overflow-y:hidden;
	}
	
	table tr{
		height: 44px;
	}
	.theme{
		color:#4C62E7;
	}
	
</style>
