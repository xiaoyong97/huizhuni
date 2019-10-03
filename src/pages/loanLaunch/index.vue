<template>
    <div class="main">
     
     <!--头部导航-->
   
	 <van-nav-bar class="vnavbar" :title="title" left-arrow @click-left="onClickLeft" @click-right="new_task">
	 </van-nav-bar>
	<van-icon name="search" class="search" @click="gotoSearch()"  />
    <div class="content">
       <van-tabs color="#4c62e7" line-width="50%">
         <van-tab title="待申请" color="#4c62e7">
			 <van-cell-group class="bg-grey pan2">
			  	<div class="cell-container">
					<br>
					<van-cell class="cell-box">
						<div class=" dk-pan">
							<van-col span="15"><img class="company" src="../../assets/images/38/Companyname@2x.png" alt="">&nbsp;广州可可有限公司 </van-col>
							<van-col span="9" class="subText">采集:2019/08/15 </van-col>
							<van-col class="grey" span="9">企业主</van-col><van-col span="15">张三</van-col>
							<van-col class="grey" span="9">统一社会信用代码 </van-col><van-col span="15">&nbsp;91439104MA4PLN3035</van-col>
							<van-col span="24" class="detail" ><img class="detail-img" src="../../assets/images/38/Initiatingaloan@2x.png" alt="">&nbsp;&nbsp;贷款发起</van-col>
						</div>
					</van-cell>
					<van-cell class="cell-box">
						<div class=" dk-pan">
							<van-col span="15"><img class="company" src="../../assets/images/38/Companyname@2x.png" alt=""> 广州可可有限公司 </van-col>
							<van-col span="9" class="subText">采集:2019/08/15 </van-col>
							<van-col class="grey" span="9">企业主</van-col><van-col span="15">张三</van-col>
							<van-col class="grey" span="9">统一社会信用代码 </van-col><van-col span="15">&nbsp;91439104MA4PLN3035</van-col>
							<van-col span="24" class="detail" ><img class="detail-img" src="../../assets/images/38/Initiatingaloan@2x.png" alt="">&nbsp;&nbsp;贷款发起</van-col>
						</div>
					</van-cell>
					<van-cell class="cell-box">
						<div class=" dk-pan">
							<van-col span="15"><img class="company" src="../../assets/images/38/Companyname@2x.png" alt=""> 广州可可有限公司 </van-col>
							<van-col span="9" class="subText">采集:2019/08/15 </van-col>
							<van-col class="grey" span="9">企业主</van-col><van-col span="15">张三</van-col>
							<van-col class="grey" span="9">统一社会信用代码 </van-col><van-col span="15">&nbsp;91439104MA4PLN3035</van-col>
							<van-col span="24" class="detail" ><img class="detail-img" src="../../assets/images/38/Initiatingaloan@2x.png" alt="">&nbsp;&nbsp;贷款发起</van-col>
						</div>
					</van-cell>
				</div>
			  </van-cell-group>
		 </van-tab>
         <van-tab title="已申请" color="#4c62e7">
			 <van-cell-group class="bg-grey pan2">
			  	<div class="cell-container">
					<br>
					<van-cell class="cell-box">
						<div class=" dk-pan">
							<van-col span="15"><img class="company" src="../../assets/images/38/Companyname@2x.png" alt="">&nbsp;广州可可有限公司 </van-col>
							<van-col span="9" class="subText">采集:2019/08/15 </van-col>
							<van-col class="grey" span="9">企业主</van-col><van-col span="15">张三</van-col>
							<van-col class="grey" span="9">统一社会信用代码 </van-col><van-col span="15">&nbsp;91439104MA4PLN3035</van-col>
							<van-col span="24" class="detail" @click="go('launchDetails')"><img class="detail-img" src="../../assets/images/38/View@2x.png" alt="">&nbsp;&nbsp;查看详情</van-col>
						</div>
					</van-cell>
					<van-cell class="cell-box">
						<div class=" dk-pan">
							<van-col span="15"><img class="company" src="../../assets/images/38/Companyname@2x.png" alt=""> 广州可可有限公司 </van-col>
							<van-col span="9" class="subText">采集:2019/08/15 </van-col>
							<van-col class="grey" span="9">企业主</van-col><van-col span="15">张三</van-col>
							<van-col class="grey" span="9">统一社会信用代码 </van-col><van-col span="15">&nbsp;91439104MA4PLN3035</van-col>
							<van-col span="24" class="detail" @click="go('launchDetails')"><img class="detail-img" src="../../assets/images/38/View@2x.png" alt="">&nbsp;&nbsp;查看详情</van-col>
						</div>
					</van-cell>
					<van-cell class="cell-box">
						<div class=" dk-pan">
							<van-col span="15"><img class="company" src="../../assets/images/38/Companyname@2x.png" alt=""> 广州可可有限公司 </van-col>
							<van-col span="9" class="subText">采集:2019/08/15 </van-col>
							<van-col class="grey" span="9">企业主</van-col><van-col span="15">张三</van-col>
							<van-col class="grey" span="9">统一社会信用代码 </van-col><van-col span="15">&nbsp;91439104MA4PLN3035</van-col>
							<van-col span="24" class="detail" @click="go('launchDetails')"><img class="detail-img" src="../../assets/images/38/View@2x.png" alt="">&nbsp;&nbsp;查看详情</van-col>
						</div>
					</van-cell>
					<van-cell class="cell-box">
						<div class=" dk-pan">
							<van-col span="15"><img class="company" src="../../assets/images/38/Companyname@2x.png" alt=""> 广州可可有限公司 </van-col>
							<van-col span="9" class="subText">采集:2019/08/15 </van-col>
							<van-col class="grey" span="9">企业主</van-col><van-col span="15">张三</van-col>
							<van-col class="grey" span="9">统一社会信用代码 </van-col><van-col span="15">&nbsp;91439104MA4PLN3035</van-col>
							<van-col span="24" class="detail" @click="go('launchDetails')"><img class="detail-img" src="../../assets/images/38/View@2x.png" alt="">&nbsp;&nbsp;查看详情</van-col>
						</div>
					</van-cell>
					<van-cell class="cell-box">
						<div class=" dk-pan">
							<van-col span="15"><img class="company" src="../../assets/images/38/Companyname@2x.png" alt=""> 广州可可有限公司 </van-col>
							<van-col span="9" class="subText">采集:2019/08/15 </van-col>
							<van-col class="grey" span="9">企业主</van-col><van-col span="15">张三</van-col>
							<van-col class="grey" span="9">统一社会信用代码 </van-col><van-col span="15">&nbsp;91439104MA4PLN3035</van-col>
							<van-col span="24" class="detail" @click="go('launchDetails')"><img class="detail-img" src="../../assets/images/38/View@2x.png" alt="">&nbsp;&nbsp;查看详情</van-col>
						</div>
					</van-cell>
					<van-cell class="cell-box">
						<div class=" dk-pan">
							<van-col span="15"><img class="company" src="../../assets/images/38/Companyname@2x.png" alt=""> 广州可可有限公司 </van-col>
							<van-col span="9" class="subText">采集:2019/08/15 </van-col>
							<van-col class="grey" span="9">企业主</van-col><van-col span="15">张三</van-col>
							<van-col class="grey" span="9">统一社会信用代码 </van-col><van-col span="15">&nbsp;91439104MA4PLN3035</van-col>
							<van-col span="24" class="detail" @click="go('launchDetails')"><img class="detail-img" src="../../assets/images/38/View@2x.png" alt="">&nbsp;&nbsp;查看详情</van-col>
						</div>
					</van-cell>
					<van-cell class="cell-box">
						<div class=" dk-pan">
							<van-col span="15"><img class="company" src="../../assets/images/38/Companyname@2x.png" alt=""> 广州可可有限公司 </van-col>
							<van-col span="9" class="subText">采集:2019/08/15 </van-col>
							<van-col class="grey" span="9">企业主</van-col><van-col span="15">张三</van-col>
							<van-col class="grey" span="9">统一社会信用代码 </van-col><van-col span="15">&nbsp;91439104MA4PLN3035</van-col>
							<van-col span="24" class="detail" @click="go('launchDetails')"><img class="detail-img" src="../../assets/images/38/View@2x.png" alt="">&nbsp;&nbsp;查看详情</van-col>
						</div>
					</van-cell>
					<van-cell class="cell-box">
						<div class=" dk-pan">
							<van-col span="15"><img class="company" src="../../assets/images/38/Companyname@2x.png" alt=""> 广州可可有限公司 </van-col>
							<van-col span="9" class="subText">采集:2019/08/15 </van-col>
							<van-col class="grey" span="9">企业主</van-col><van-col span="15">张三</van-col>
							<van-col class="grey" span="9">统一社会信用代码 </van-col><van-col span="15">&nbsp;91439104MA4PLN3035</van-col>
							<van-col span="24" class="detail" @click="go('launchDetails')"><img class="detail-img" src="../../assets/images/38/View@2x.png" alt="">&nbsp;&nbsp;查看详情</van-col>
						</div>
					</van-cell>
				</div>
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
      title : '贷款发起',
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
	  
    go:function(url){
      this.$router.push({name:url});
    },
	add_task:function  () {
		sessionStorage.setItem('type',0);
		localStorage.setItem('jkr',this.task[this.task.length-1].jkr);
		
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
		var diyawu = JSON.parse(localStorage.getItem('diyawu'));
		if(diyawu == null || diyawu == undefined ){
			var obj = [{
					"id": "15697680360000",
					"cqzh": "987628221227780861",
					"sf": " 广东省 广州市 天河区",
					"xxdz": "ZZ街道AABBBBBBB",
					"cqr": "张三"
					},
					{
					"id": "15697680360001",
					"cqzh": "987628221227780861",
					"sf": " 广东省 广州市 天河区",
					"xxdz": "ZZ街道AABBBBBBB",
					"cqr": "张三"
					}];
				diyawu = obj;
				localStorage.setItem('diyawu',JSON.stringify(obj))
			}
			
			return diyawu;
		},
		task:function(){
		var task = JSON.parse(localStorage.getItem('task'));
		if(task == null || task == undefined ){
			var obj = [{
				"task_id": 1569768171000,
				"diyawuList": [{
					"id": "15697680360000",
					"cqzh": "987628221227780861",
					"sf": " 广东省 广州市 天河区",
					"xxdz": "ZZ街道AABBBBBBB",
					"cqr": "张三"
					},
					{
					"id": "15697680360001",
					"cqzh": "987628221227780862",
					"sf": " 广东省 广州市 天河区",
					"xxdz": "ZZ街道AABBBBBBB",
					"cqr": "张三"
					}],
				"jkr": "王小二",
				"lxfs": "13902506869",
				"status": 0,
				"datail": ""
			},
			{
				"task_id": 1569768171001,
				"diyawuList": [{
					"id": "15697680360000",
					"cqzh": "987628221227780861",
					"sf": " 广东省 广州市 天河区",
					"xxdz": "ZZ街道AABBBBBBB",
					"cqr": "张三"
					},
					{
					"id": "15697680360001",
					"cqzh": "987628221227780861",
					"sf": " 广东省 广州市 天河区",
					"xxdz": "ZZ街道AABBBBBBB",
					"cqr": "张三"
					}],
				"jkr": "王小二",
				"lxfs": "13902506869",
				"status": 1,
				"datail": ""
			},
			{
				"task_id": 1569768171002,
				"diyawuList": [{
					"id": "15697680360000",
					"cqzh": "987628221227780861",
					"sf": " 广东省 广州市 天河区",
					"xxdz": "ZZ街道AABBBBBBB",
					"cqr": "张三"
					},
					{
					"id": "15697680360001",
					"cqzh": "987628221227780861",
					"sf": " 广东省 广州市 天河区",
					"xxdz": "ZZ街道AABBBBBBB",
					"cqr": "张三"
					}],
				"jkr": "王小二",
				"lxfs": "13902506869",
				"status": 2,
				"datail": ""
			}]
			localStorage.setItem('task',JSON.stringify(obj))
			task = obj;
		}
	
		return task
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
	.vnavbar{
		position: fixed;
		top: 0px;
		width: 100%;
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
		border: 1px solid #4c62e7;
		border-radius: 15px;
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
		position: fixed;
		right: 10px;
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
	.van-checkbox__icon .van-icon{
		border: 1px solid red;
	}
.pan2 .company{
    width: 18px;
    height: 18px;
    position: absolute;
    top: 18px;
    left: 18px;
}
.dk-pan div{
	padding: 4px 0px;
}
.grey{
	color: #999999;
}
.orange{
	color: #f76037;
}
.cell-container{
	padding-bottom: 64px;
	min-height: 600px;
}
.cell-container .cell-box{
	border-radius: 8px;
	margin-bottom: 16px;;
}
.subText{
	font-size: 12px;
	color: #666666;
	text-align: right;
}
.detail{
	text-align: center;
	color: #4c62e7;
	padding: 12px 0px 8px;
	font-size: 14px;
	margin-left: -11px;
	border-top: 1px lightgray solid;
}

.detail-img{
	width: 20px;
	vertical-align: text-top;
}
</style>