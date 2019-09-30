<template>
    <div class="main">
     
     <!--头部导航-->
     <NavBar :title="title"/>


    <div class="content">
        <div class="grid-container">
        	<div class="box" >
        		<van-grid :column-num="4">
        			<van-grid-item v-for="(item,index) in menu"  >
        				<img :src="item.icon" alt="">
        			
        				<p>{{item.name}}</p>
						<div class="checkbox" :class="item.isChecked?'active':''" @click="toggleMenu(index)" v-model="menu[index]">
							<van-icon name="success" class="success" v-show="item.isChecked" />
						</div>
        			</van-grid-item>	
        		</van-grid>
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
      title : '自定义功能',
    }
  },
  
  
  //数据预加载
  created : ()=>{

  },

  //网页加载完成
  //计算属性
  computed: {
 	menu:function(){
 		var arr = JSON.parse(localStorage.getItem('home_menu'));
		
 		if(arr == null || arr == undefined){   
 			arr = [
 				{name:"信息采集",icon:require('../../assets/images/84/InformationCollection@2x.png'),url:'index',isChecked:true},
 				{name:"贷款发起",icon:require('../../assets/images/84/Loaninitiation1@2x.png'),url:'index',isChecked:true},
 				{name:"征信校验",icon:require('../../assets/images/84/Creditcheck1@2x.png'),url:'index',isChecked:true},
 				{name:"申贷查询",icon:require('../../assets/images/84/Creditinquiry@2x.png'),url:'index',isChecked:true},
 				{name:"贷后跟踪",icon:require('../../assets/images/84/Post-loantracking@2x.png'),url:'index',isChecked:false},
 				{name:"合同签订",icon:require('../../assets/images/84/signacontract@2x.png'),url:'index',isChecked:true},
 				{name:"抵押登记",icon:require('../../assets/images/84/Mortgageregistration@2x.png'),url:'index',isChecked:true},
 				{name:"线下活动",icon:require('../../assets/images/84/off-lineactivity@2x.png'),url:'index',isChecked:false},
 				{name:"业绩展示",icon:require('../../assets/images/84/resultsshow@2x.png'),url:'index',isChecked:false},
 				{name:"客户抢单",icon:require('../../assets/images/84/Custmerrobsingle.png'),url:'index',isChecked:false},
 				{name:"咕咕管理",icon:require('../../assets/images/84/gugu@2x.png'),url:'gugu',isChecked:true},
 				{name:"贷款催收",icon:require('../../assets/images/84/daikuancuishou.png'),url:'index',isChecked:false},
 				{name:"商机管理",icon:require('../../assets/images/84/shangjiguanli.png'),url:'index',isChecked:false},
 				{name:"贷款管理",icon:require('../../assets/images/84/daikuanguanli.png'),url:'index',isChecked:false},
				{name:"惠点通",icon:require('../../assets/images/84/home@2x.png'),url:'index',isChecked:false},
 			]
			
 			localStorage.setItem('home_menu',JSON.stringify(arr));
 		}
 		var index = 0;
 		for(var i = 0; i<arr.length; i++){
 			if(arr[i].isChecked){
 				index++;
 			}
 		}
		
 		return arr;
 	}
  },
  
  //声明方法
  methods : {
		toggleMenu:function(index){
			
			if(this.menu[index].isChecked){
				this.menu[index].isChecked = !this.menu[index].isChecked;
				this.$forceUpdate()
			} else{
				var tip = 0;
				for(var i = 0; i<this.menu.length; i++){
					if(this.menu[i].isChecked){
						tip++;
					}
				}
				if(tip>=7){
					return;
				}
				this.menu[index].isChecked = !this.menu[index].isChecked;
				this.$forceUpdate()
			}		
		}
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
	background-color: rgb(238,238,238);
	min-height: 590px;
	padding: 0px;;
}

.grid-container{
		padding: 10px 12px;

		border-radius: 8px;;

	}
	.grid-container .box{
		border: 1px solid rgb(248,248,248);
		box-shadow: 0 2px 2px 0 rgba(0,0,0,.15);
		min-height: 200px;
		border-radius: 12px;;
	}
	.grid-container .grid{
		width: 25%;
		height: 80px;
		float: left;
	}
	.grid-container img{
		width: 25%;
		min-width: 44px;
		display: block;
		margin: 0 auto;
	}
	.grid-container p{
		margin: 4px 0px 0px 0px;;
	}
	.checkbox{
		background-color: rgba(222,222,222,0.7);
		position: absolute;
		top: 10px;
		right: 10px;;
		width: 18px;
		height: 18px;;
		border-radius: 10px;;
	}
	.checkbox.active{
		border: 1px solid #4c62e7;
		background-color: #fff;
	}
	.success{
		color: #4c62e7;
		margin-left: 1px;
	}
</style>