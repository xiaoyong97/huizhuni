<template>
    <div class="main">
     
     <!--头部导航-->
   
	 <van-nav-bar :title="title" left-text="返回" left-arrow @click-left="onClickLeft" @click-right="new_task">
		 
	 <van-icon name="add"  slot="right" class="add"/>
	 </van-nav-bar>
	<van-icon name="search" class="search" @click="gotoSearch()"  />
    <div class="content">
       <van-tabs color="#4c62e7" line-width="50%">
         <van-tab title="任务发布" color="#4c62e7">
			 <van-cell-group class="bg-grey">
				 <van-checkbox-group v-model="result">
					<van-cell v-for="(item, index) in diyawuList">
						<div class="checkbox">
							<van-checkbox  checked-color="#4c62e7"  :key="item.id" :name="item.id" ></van-checkbox>
						</div>
						<div class="pan-content">
							<div class=" dk-pan">
								<van-col span="24"><div class="title"><img class="company" src="../../assets/images/38/Companyname@2x.png" alt=""> 产权证号{{item.cqzh}}&nbsp;</div></van-col>
								<van-col class="grey" span="8">房产地址</van-col><van-col class="grey" span="16">{{item.sf}}{{item.xxdz}}&nbsp;</van-col>
								<van-col class="grey" span="8">产权人</van-col><van-col class="grey" span="16">{{item.cqr}}&nbsp;</van-col>
								<van-col class="grey" span="8">借款人</van-col><van-col class="grey" span="16">{{task[0].jkr}}&nbsp;</van-col>	
							</div>
						</div>
					</van-cell>
				</van-checkbox-group>
			<van-submit-bar
				:price="result.length*100"
				decimal-length="0"
				button-text="发布任务" 
				currency=""  
				@submit="add_task"
			>
			</van-submit-bar>
			 
			 </van-cell-group>
		 </van-tab>
         <van-tab title="任务查看" color="#4c62e7">
			 <van-cell-group class="bg-grey pan2">
			  	<van-cell v-for="(item, index) in task">	
			  		<div class="pan-content">
			 			<div class=" dk-pan">
							<img class="pan-tag-img" src="../../assets/images/other/Label7.0@2x.png" alt="" v-show="item.status == 0">
							<img class="pan-tag-img" src="../../assets/images/other/Label7@2x.png" alt="" v-show="item.status == 1">
							<img class="pan-tag-img" src="../../assets/images/other/Label6@x.png" alt="" v-show="item.status == 2">
			 				<van-col span="24"><div class="title"><img class="company" src="../../assets/images/38/Companyname@2x.png" alt=""> 产权证号{{item.diyawuList[0].cqzh}}</div></van-col>
			 				<van-col class="grey" span="8">房产地址</van-col><van-col class="grey" span="16">{{item.diyawuList[0].sf}}{{item.diyawuList[0].xxdz}}</van-col>
			 				<van-col class="grey" span="8">产权人</van-col><van-col class="grey" span="16">{{item.diyawuList[0].cqr}}&nbsp;</van-col>
			 				<van-col class="grey" span="8">借款人</van-col><van-col class="grey" span="16">{{item.jkr}}&nbsp;</van-col>	
							<van-col span="24" class="detail" @click="checkTask(item.task_id)"><img class="detail-img" src="../../assets/images/38/Companyname@2x.png" alt=""> 查看详情</van-col>
						</div>
			 		</div>
			  	</van-cell>
			 
			 </van-submit-bar>
			  
			  </van-cell-group>
		 </van-tab>
       </van-tabs>
    </div>
      
    </div>
</template>

<script>

	import NavBar from '@/components/navBar'
	import Vue from 'vue';
	import { Tab, Tabs ,SubmitBar,Cell,Checkbox } from 'vant';

	Vue.use(Tab).use(Tabs).use(SubmitBar).use(Checkbox);
 export default {

  data() {
    return {
      title : '咕咕管理',
	  checked: 400,
	  result:[],
	  count:0
    }
  },
  
  
  //数据预加载
  created : ()=>{
  },

  //网页加载完成
  mounted : ()=>{
    
  },
   watch: {
      // 如果 `question` 发生改变，这个函数就会运行
      result: function (newCount, oldCount) {
        this.count = newCount.length*100;
      }
    },
  
  //声明方法
  methods : {
	add_task:function  () {
		sessionStorage.setItem('type',0);
	  this.$router.push({name: 'new_task', params: {type: 0}});
	},
	new_task:function (){
		sessionStorage.setItem('type',1);
		this.$router.push({name: 'new_task', params: {type: 1}});
	},
	gotoSearch:function(){
		this.$router.push({name: 'search'});
		return;
	},
	onClickLeft:function() {
	  this.$router.go(-1);
	},
	checkTask:function(id){
		localStorage.setItem('id',id);
		this.$router.push({name: 'checkTask'});
	}
  },
  
  //计算属性
  computed: {
	diyawuList:function(){
		console.log(localStorage.getItem('diyawu'))
		return JSON.parse(localStorage.getItem('diyawu'))
	},
	task:function(){
		console.log(localStorage.getItem('task'))
		return JSON.parse(localStorage.getItem('task'))
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
		padding: 0px;
	}
	.van-submit-bar__text{
		text-align: left;
		padding-left: 44px;
		
	}
	.van-submit-bar__button{
		background-color: #4c62e7;
		border: 1px solid #4c62e7;
		margin: 16px 16px;;
		height: 36px;
		line-height: 32px;
		border-radius: 30px;
	}
	.van-submit-bar__price{
		color: #4c62e7;
	}
	.van-tab__pane{
		background-color: red;
	}
	.dk-pan{
		padding: 8px 8px 8px 30px;
		background-color: #fff;
		box-shadow: 0 2px 2px 0 rgba(0,0,0,.15);
		border-radius: 8px;
		// min-height: 170px;
		height: 100%;
	}
	.dk-pan:before{
	    content:"";
	    display:table;
	}
	.dk-pan:after{
	    content:"";
	    display:table;
	    clear:both;
	}
	
	.bg-grey{
		background-color: rgb(238,238,238);
		padding: 0px;
	}
	.van-cell{
		background-color: rgba(0,0,0,0);
		padding-left: 16px;;
		padding-right: 24px;
		padding-top: 2px;
		padding-bottom: 0px;;
	}
	.van-cell__value--alone{
		padding: 4px 8px 4px 30px;;
		
	}
	.company{
		width: 18px;
		height: 18px;
		position: absolute;
		top:16px;
		left: 38px;;
	}
	.dk-pan .title{
		font-size: 16px;;
	}
	.grey{
		color: #999999;
	}
	.dk-pan .van-col--8,.dk-pan .van-col--16{
		margin-top: 8px;;
		margin-bottom: 8px;;
	}
	
	.checkbox{
		position: absolute;
		left: 0px;
		top:50%;
	}
	.pan2 .van-cell__value--alone{
		padding: 4px 8px 4px 8px;;
	}
	
	.pan2 .company{
		width: 18px;
		height: 18px;
		position: absolute;
		top:16px;
		left: 18px;;
	}
	
	.pan2 .van-cell{
		background-color: rgba(0,0,0,0);
		padding-left: 4px;;
		padding-right: 4px;
		padding-top: 2px;
		padding-bottom: 0px;;
	}
	.detail{
		text-align: center;
		color: #4c62e7;
		padding: 12px 0px 8px;
		font-size: 20px;
		margin-left: -11px;
		border-top: 1px lightgray solid;
	}
	.pan-tag-img{
		position: absolute;
		right: 20px;
		top: 0px;
		width: 40px;;
	}
	.detail-img{
		width: 18px;;
		
	}
	.search{
		position: absolute;
		right: 64px;
		top:14px;
		font-size: 24px;
		font-weight: 900;
		color: #4c62e7;
		z-index: 100;;
	}
	.add{
		color: #4c62e7;
		font-size: 24px;
	}
	.van-nav-bar__text{
		color: #4c62e7;
	}
	.van-nav-bar .van-icon{
		color: #4c62e7;
	}
</style>