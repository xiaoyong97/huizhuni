<template>
    <div class="main">
     
     <!--头部导航-->
    <van-nav-bar :title="title"  left-arrow @click-left="onClickLeft" @click-right="next">
	<van-button slot="right" class="theme_color"  >{{nextTitle}}</van-button>
	</van-nav-bar>


    <div class="content">
		<div v-show="step==1">
			<van-cell-group class="bg-grey"  v-for="(item, index) in card_count"  v-show="type==1">
				<van-cell class="grey"  >抵押物{{index+1}}</van-cell>
				<van-field label="产权证号"placeholder="请输入产权证号" v-model="item.cqzh"/>
				<!-- <van-field label="房产地址" placeholder=""   /> -->
				<van-row class="field_container" >
				<van-col class="" span="6">房产地址</van-col>
				<van-col class="area_select" span="18" @click="area_select(index+1)" >{{card_count[index].sf}}<span v-if="!card_count[index].sf"> 请选择省份/地区</span></van-col>
				</van-row>	
				<van-field label="" placeholder="详细地址"  v-model="item.xxdz"/>
				<van-field label="产权人"placeholder="" v-model="item.cqr"/>
		
			 </van-cell-group>
			 
			<van-cell-group class="bg-grey"  v-for="(item, index) in card_count" v-show="type==0" >
			 <van-cell class="grey"  >抵押物{{index+1}}</van-cell>
			 <van-cell>

				 <van-col span="24"><h3>产权证号:{{item.cqzh}}</h3></van-col>
			 </van-cell>
			 <van-cell>
				 <van-col span="2"></van-col>
				 <van-col span="6">房产地址:</van-col>
				 <van-col span="16">{{item.sf}}</van-col>
			 </van-cell>
			 <van-cell>
				  <van-col span="2"></van-col>
				 <van-col span="6"></van-col>
				 <van-col span="16">{{item.xxdz}}</van-col>
			 </van-cell>
			 <van-cell>
				  <van-col span="2"></van-col>
				 <van-col span="6">产权人:</van-col>
				 <van-col span="16">{{item.cqr}}</van-col>
			 </van-cell>
				
			 </van-cell-group>			
						
						
					
			<van-cell-group class="bg-grey">
				<van-cell class="grey addCard" v-show="type==1" @click="addCard"><van-icon name="add" />添加抵押物</van-cell>
				<van-cell class="grey addCard" v-show="type==0" ></van-cell>
				<van-field label="借款人"placeholder=""  v-model="jkr"/>
				<van-field label="联系方式" placeholder=""  v-model="lxfs"/>
			  </van-cell-group>
			  
			  <div class="area_select_pan">
					<van-area :area-list="areaList" :columns-num="3" v-show="is_show_area" @confirm="area_confirm"  @cancel="area_select(0)"/>
			  </div>
		</div>
		<div v-show="step==2">
			<van-cell-group class="bg-grey"  v-for="(item, index) in card_count" >
			 <van-cell class="grey">抵押物{{index+1}}</van-cell>
			 <van-cell>
				 <van-col span="2"><img class="logo" src="../../assets/images/38/Companyname@2x.png" alt=""></van-col>
				 <van-col span="22"><h3>产权证号:{{item.cqzh}}</h3></van-col>
			 </van-cell>
			 <van-cell>
				 <van-col span="2"></van-col>
				 <van-col span="6">房产地址:</van-col>
				 <van-col span="16">{{item.sf}}</van-col>
			 </van-cell>
			 <van-cell>
				  <van-col span="2"></van-col>
				 <van-col span="6"></van-col>
				 <van-col span="16">{{item.xxdz}}</van-col>
			 </van-cell>
			 <van-cell>
				  <van-col span="2"></van-col>
				 <van-col span="6">产权人:</van-col>
				 <van-col span="16">{{item.cqr}}</van-col>
			 </van-cell>
				
			 </van-cell-group>
					
			<van-cell-group class="bg-grey">
				 <van-cell class="grey"  > </van-cell>
				 <br>
				<van-cell>
								 <van-col span="8">借款人</van-col>
								 <van-col span="16">{{jkr}}</van-col>
				</van-cell>
				<van-cell>
								 <van-col span="8">联系方式</van-col>
								 <van-col span="16">{{lxfs}}</van-col>
				</van-cell>
			
			</van-cell-group>		
			
		
		</div>
		<div v-show="step==3">
			<div>
				<img class="success" src="../../assets/images/other/success@2x.png" alt="">
				<p class="success-tip">发布已成功</p>
				<p class="detail-tip">查看详情</p>
				
				<van-cell-group class="bg-grey"  v-for="(item, index) in card_count" >
					<div v-if="isShowDetail || index == 0">
						<van-cell>抵押物{{index+1}}</van-cell>
						<van-cell>
											 <van-col span="2"><img class="logo" src="../../assets/images/38/Companyname@2x.png" alt=""></van-col>
											 <van-col span="22"><h4>产权证号:{{item.cqzh}}</h4></van-col>
											
						</van-cell>
						<van-cell>
											 <van-col span="2"></van-col>
											 <van-col span="6">房产地址:</van-col>
											 <van-col span="16">{{item.sf}}</van-col>
						</van-cell>
						<van-cell>
											  <van-col span="2"></van-col>
											 <van-col span="6"></van-col>
											 <van-col span="16">{{item.xxdz}}</van-col>
						</van-cell>
						<van-cell>
											  <van-col span="2"></van-col>
											 <van-col span="6">产权人:</van-col>
											 <van-col span="16">{{item.cqr}}</van-col>
						</van-cell>
					</div>
				
					
				 </van-cell-group>
						
				<van-button class="more" @click="more" v-show="!isShowDetail">查看更多 ▿ </van-button>
				<van-cell-group class="bg-grey">
					 <van-cell class="grey"  > </van-cell>
					<van-cell>
									 <van-col span="8">借款人</van-col>
									 <van-col span="16">{{jkr}}</van-col>
					</van-cell>
					<van-cell>
									 <van-col span="8">联系方式</van-col>
									 <van-col span="16">{{lxfs}}</van-col>
					</van-cell>
				
				</van-cell-group>	
			</div>
		</div>
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
      title : '新建任务',
	  nextTitle:'下一步',
	  
	  areaList: areaList,
	  is_show_area:false,
	  areaCellIndex:0,
	  step:1,
	  jkr:'',
	  lxfs:'',
	  isShowDetail:false,
		isSubmit:false,
	  }
  },


  //数据预加载
  created : ()=>{
	
  },

  //网页加载完成
  mounted : ()=>{
		var diyawuList = localStorage.getItem('diyawu');
		console.log(diyawuList)
		
		var task = localStorage.getItem('task');
		console.log(task)
  },
  
  //声明方法
  methods : {
	area_select:function(index){
		
		if( index == 0){
			this.is_show_area = false;
			return;
		} 
		this.areaCellIndex = index;
		this.is_show_area = !this.is_show_area; 
	},
	area_confirm:function(data){
		var area = '';
		for(var i = 0; i< data.length; i++){
			area += ' '+data[i].name
		}
		// this.areaArray[this.areaCellIndex-1] = area;
		this.card_count[this.areaCellIndex-1].sf = area;
		this.is_show_area = false;
	},
	addCard:function(){
		
	
		 this.card_count[this.card_count.length] =  {id:Date.parse(new Date())+this.card_count.length,cqzh:'',sf:'',xxdz:'',cqr:''};
		 this.$forceUpdate();//并不管用
	},
	onClickLeft() {
		
		if(this.step==1 || this.isSubmit ){
			this.$router.go(-1);
			return;
		}
	
		this.step=this.step-1;
		this.setTitle();
	  
	},
	checkType:function(){
		var type = localStorage.getItem('type')
		var that = this;
		if(type != null && type != undefined){
					 
			if(type == 0){
						
				that.step = 1;
				that.type = 0;
			}
		}
	},
	next:function(){
		 
		if(this.step==3){
			this.$router.go(-1);
		}else{
			if(this.step == 2){
				this.saveData();
			}
			this.step = this.step+1;
		}
		this.setTitle();
	},
	saveData:function(){
		var diyawuList = this.parseJson(localStorage.getItem('diyawu'));
		var all = diyawuList.concat(this.card_count);
		localStorage.setItem('diyawu',JSON.stringify(all));
		
		//add task
		var task = {
			task_id : Date.parse(new Date()),
			diyawuList: this.card_count,
			jkr:this.jkr,
			lxfs:this.lxfs,
			status:1,
			datail:'',
		}
		var taskList = this.parseJson(localStorage.getItem('task'));
		taskList.push(task);
		localStorage.setItem('task',JSON.stringify(taskList));
		this.isSubmit = true;
	},
	parseJson:function(str){
		if(str == null || str == undefined) return [];
		
		return JSON.parse(str);
	},
	setTitle:function(){
	
		switch(this.step){
			case 1:{
				this.title= this.type == 1 ? '新建任务' : '发布任务';
			};
			break;
			case 2:{
				this.title= '确认信息';
			};
			break;
			case 3:{
				this.title='任务发布';
			};
			break;
		}
		
		this.nextTitle = this.step == 1 ? '下一步' : this.step == 2 ? '发布' : '完成';
	},
	more:function(){
		this.isShowDetail = true;
	}
  },
  
  //计算属性
  computed: {
	// 仅读取
	type: function () {
	  return sessionStorage.getItem('type')
	},
	card_count:function () {
		var count = [
			{id:Date.parse(new Date())+'0',cqzh:'',sf:'',xxdz:'',cqr:''}, 	
		];
		if(this.type == 0){
			count = JSON.parse(localStorage.getItem('diyawu'))
		}
		return count;
	}
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
</style>
