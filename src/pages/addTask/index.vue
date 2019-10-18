<template>
    <div class="main">

     <!--头部导航-->
    <van-nav-bar :title="title"  left-arrow @click-left="onClickLeft" @click-right="next">
	<van-button slot="right" class="theme_color next_button"  >{{nextTitle}}</van-button>
	</van-nav-bar>


    <div class="content addTask">

		<div v-show="step==1">
			<van-cell-group class="bg-grey"  v-for="(item, index) in info.mortgaged"  v-show="type==1">
				<van-cell class="grey"  >抵押物{{index+1}}</van-cell>
				<van-field class="van-field" label="产权证号"placeholder="请输入产权证号" v-model="item.number"/>
				 <van-field class="van-field" label="房产地址" disabled placeholder="请选择省份/地区" v-model="item.sf" right-icon="arrow-down" @click-right-icon="area_select(index+1)"/>
<!--				<van-row class="field_container" >-->
<!--				<van-col class="" span="6">房产地址</van-col>-->
<!--				<van-col class="area_select" span="18" @click="area_select(index+1)" >{{item.sf}}<span v-if="!info.mortgaged[index].sf"> 请选择省份/地区</span></van-col>-->
<!--				</van-row>-->
				<van-field class="van-field" label="" placeholder="详细地址"  v-model="item.address"/>
				<van-field class="van-field" label="产权人"placeholder="" v-model="item.holder"/>

			 </van-cell-group>

			<van-cell-group class="bg-grey"  v-for="(item, index) in info.mortgaged" v-show="type==0" >
			 <van-cell class="grey"  >抵押物{{index+1}}</van-cell>
			 <van-cell>
				 <van-col span="24"><h3>产权证号:{{item.number}}</h3></van-col>
			 </van-cell>
			 <van-cell>
				 <van-col span="2"></van-col>
				 <van-col span="6">房产地址:</van-col>
				 <van-col span="16">{{item.address}}</van-col>
			 </van-cell>
			 <van-cell>
				  <van-col span="2"></van-col>
				 <van-col span="6"></van-col>
				 <van-col span="16">{{item.xxdz}}</van-col>
			 </van-cell>
			 <van-cell>
				  <van-col span="2"></van-col>
				 <van-col span="6">产权人:</van-col>
				 <van-col span="16">{{item.holder}}</van-col>
			 </van-cell>

			 </van-cell-group>

			<van-cell-group class="bg-grey">
				<van-cell class="grey " v-show="type==1" @click="addCard"><div class="addCard"><van-icon name="add-o" />添加抵押物</div></van-cell>
				<van-cell class="grey addCard" v-show="type==0" ></van-cell>
				<van-field class="van-field" label="借款人"placeholder=""  v-model="info.mortgagor[0].name"/>
				<van-field class="van-field" label="联系方式" placeholder=""  v-model="info.mortgagor[0].diyaren_mobile"/>
			  </van-cell-group>

			  <div class="area_select_pan">
					<van-area :area-list="areaList" :columns-num="3" v-show="is_show_area" @confirm="area_confirm"  @cancel="area_select(0)"/>
			  </div>
		</div>
		<div v-show="step==2">
			<van-cell-group class="bg-grey"  v-for="(item, index) in info.mortgaged" >
			 <van-cell class="grey">抵押物{{index+1}}</van-cell>
			 <van-cell>
				 <van-col span="2"><img class="logo" src="../../assets/images/38/Propertycertificatenumber@2x.png" alt=""></van-col>
				 <van-col span="22" ><h3>产权证号:{{item.number}}</h3></van-col>
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

			<van-cell-group class="bg-grey">
				 <van-cell class="grey"  > </van-cell>
				 <br>
				<van-cell>
								 <van-col span="8">借款人</van-col>
								 <van-col span="16">{{info.mortgagor[0].name}}</van-col>
				</van-cell>
				<van-cell>
								 <van-col span="8">联系方式</van-col>
								 <van-col span="16">{{info.mortgagor[0].diyaren_mobile}}</van-col>
				</van-cell>

			</van-cell-group>


		</div>
		<div v-show="step==3">
			<div>
				<img class="success" src="../../assets/images/other/success@2x.png" alt="">
				<p class="success-tip">发布已成功</p>
				<p class="detail-tip">查看详情</p>

				<van-cell-group class="bg-grey"  v-for="(item, index) in info.mortgaged" >
					<div v-if="isShowDetail || index == 0">
						<van-cell>抵押物{{index+1}}</van-cell>
						<van-cell>
											 <van-col span="2"><img class="logo" src="../../assets/images/38/Companyname@2x.png" alt=""></van-col>
											 <van-col span="22"><h4>产权证号:{{item.number}}</h4></van-col>

						</van-cell>
						<van-cell>
											 <van-col span="2"></van-col>
											 <van-col span="6">房产地址:</van-col>
											 <van-col span="16">{{item.sf}}</van-col>
						</van-cell>
						<van-cell>
											  <van-col span="2"></van-col>
											 <van-col span="6"></van-col>
											 <van-col span="16">{{item.address}}</van-col>
						</van-cell>
						<van-cell>
											  <van-col span="2"></van-col>
											 <van-col span="6">产权人:</van-col>
											 <van-col span="16">{{item.holder}}</van-col>
						</van-cell>
					</div>


				 </van-cell-group>

				<van-button class="more" @click="more" v-show="!isShowDetail">查看更多 ▿ </van-button>
				<van-cell-group class="bg-grey">
					 <van-cell class="grey"  ></van-cell>
					<van-cell>
						 <van-col span="8">借款人</van-col>
						 <van-col span="16">{{info.mortgagor[0].name}}</van-col>
					</van-cell>
					<van-cell>
						 <van-col span="8">联系方式</van-col>
						 <van-col span="16">{{info.mortgagor[0].diyaren_mobile}}</van-col>
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
	import '../../assets/resetui.scss'
 export default {

  data() {
    return {
      title : '新建任务',
	  nextTitle:'下一步',

	  areaList: areaList,
	  is_show_area:false,
	  areaCellIndex:0,
	  step:1,
	  info:{
	  	company_info:{
	  		customer_id:'252841000000526649',
	  		unified_social_credit_code:'91120116MA07K2307A',
	  		company_name:'广州市睿智防水电器股份有限公司',
	  		enterprise_address:'广州市高新技术产业开发区迎宾大道188号',
	  		legal_representative:'艾仲华',
	  		mobile:'13702137765',
	  		legal_representative_address:'广州市高新技术产业开发区迎宾大道188号',
	  	},
	  	company_main_info:{
	  		name:'艾仲华',
	  		sex:'女',
	  		ethnic:'汉族',
	  		birth:'1976.8.1',
	  		address:'广州市天河朱景新城中花城大道中海花城湾4号楼3们201',
	  		idcard:'120106197608016578',
	  		validity_period:'2030.1.1' ,//有效期
	  		record_of_formal_schooling : '研究生', //学历
	  		mobile:'13702137765',
	  		work:'广州市睿智防水电器股份有限公司',
	  		marriage_status:'已婚',
	  		households:'3',
	  	},
	  	associates:[   //关联人
	  		{
	  			relationship:'其他', //0=自然人， 1=  企业法人
	  			name:'李天明',
	  			sex:'男',
	  			ethnic:'汉族',
	  			birth:'1970.10.20',
	  			address:'广东省广州市天河区花城大道中海花城湾4号楼3门201',
	  			idcard:'120106197010204098',
	  			validity_period:'2030.1.1' ,//有效期
	  			record_of_formal_schooling : '研究生', //学历
	  			mobile:'13439078656',
	  			work:'无',
	  			marriage_status:'已婚',
	  			households:'3',
	  		}
	  	],
	  	mortgaged:[
	  		{
	  			relationship:'其他', //0=自然人， 1=  企业法人
	  			holder:'',
	  			situations:'自由',
				sf:'',
	  			address:'',
	  			number:'',
	  			type:'自有',
	  			nature:'自有',
	  			use:'住宅',
	  			area:'120.4',
	  			Other:'无',
	  			house_nubmer:'0188192319',
	  		}
	  	],
	  	mortgagor:[
	  		{
	  			relationship:'自然人', //0=自然人， 1=  企业法人
	  			name:'',
	  			sex:'女',
	  			ethnic:'汉族',
	  			birth:'1976.8.1',
	  			address:'广州市天河朱景新城中花城大道中海花城湾4号楼3们201',
	  			idcard:'120106197608016578',
	  			validity_period:'2030.1.1' , //有效期
	  			diyaren_mobile:'',
	  			diyawu:[],
	  			customer_id:'',
	  			unified_social_credit_code:'',
	  			company_name:'',
	  			enterprise_address:'',
	  			legal_representative:'',
	  			mobile:'',
	  		},
	  		{
	  			relationship:'企业法人', //0=自然人， 1=  企业法人
	  			name:'艾仲华',
	  			sex:'',
	  			ethnic:'',
	  			birth:'',
	  			address:'',
	  			idcard:'',
	  			validity_period:'' , //有效期
	  			diyaren_mobile:'',
	  			diyawu:[],
	  			customer_id:'252841000000526649',
	  			unified_social_credit_code:'91120116MA07K2307A',
	  			company_name:'广州市睿智防水电器股份有限公司',
	  			enterprise_address:'广州市高新技术产业开发区迎宾大道188号',
	  			legal_representative:'艾仲华',
	  			mobile:'13702137765',
	  			legal_representative_address:'广州市高新技术产业开发区迎宾大道188号',

	  		}
	  	],
	  	unid:'',
	  	collect_time:'',
	  	step:5,  //贷款流程 ： 0=信息待采集 1=征信待校验 2=贷款待申请 3.合同待签订 4.待跟踪
	  	isPass:true,
	  	loan:{},
		status:0,
	  },
		lxfs:'',
		jkr:'',
		isShowDetail:false,
		isSubmit:false,
		 unids:[],
	  }

  },


  //数据预加载
  created (){
	  var task = this.$route.params.task;
	  var tmpArray = [];
	  this.info = task.info[0];
	  for(var i=0;i<task.info.length;i++){
		   tmpArray.push(task.info[i].mortgaged[0]);
		   this.unids.push(task.info[i].unid);
	  }

	 this.info.mortgaged = tmpArray;

  },

  //网页加载完成
  mounted(){
		var diyawuList = localStorage.getItem('diyawu');

		if(this.type == 0){
			this.name = localStorage.getItem('jkr')
		}
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

		this.info.mortgaged[this.areaCellIndex-1].sf = area;
		this.is_show_area = false;
	},
	addCard:function(){
		var mortgaged = {
	  			relationship:'其他', //0=自然人， 1=  企业法人
	  			holder:'',
	  			situations:'自由',
	  			address:'',
				sf:'',
	  			number:'',
	  			type:'自有',
	  			nature:'自有',
	  			use:'住宅',
	  			area:'120.4',
	  			Other:'无',
	  			house_nubmer:'0188192319',
	  		};
			this.info.mortgaged[this.info.mortgaged.length] = mortgaged;
		 // this.card_count[this.card_count.length] =  {id:Date.parse(new Date())+this.card_count.length,cqzh:'',sf:'',xxdz:'',cqr:''};
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

		var jsonStr = sessionStorage.getItem('userinfo');
		console.log('999'+jsonStr)
		console.log('888'+this.unids)
			if(jsonStr != '' && jsonStr != undefined && jsonStr != null){
				var infos = JSON.parse(jsonStr);
				for(var i=0;i<this.unids.length;i++){
					for(var ii=0;ii<infos.length;ii++){
						console.log('999'+infos)
						if(this.unids[i] == infos[ii].unid){
							infos[ii].status=1;
						}
					}
				}
				infos.push(
						this.info
					)
				sessionStorage.setItem('userinfo',JSON.stringify(infos));
			}

		// this.info.step=5;
		// this.info.unid = Date.parse(new Date());
		//
		// var tasks = [];
		// var jsonStr = sessionStorage.getItem('task');
		// if(jsonStr != null && jsonStr != undefined){
		// 	tasks =  JSON.parse(jsonStr);
		// }
		// tasks.push({
		// 	status:0,
		// 	info:[this.info],
		// })
		// sessionStorage.setItem('task',JSON.stringify(tasks))
		//
		// if(this.unids.length>0){
		//
		// 	var jsonStr = sessionStorage.getItem('userinfo');
		// 	if(jsonStr != '' && jsonStr != undefined && jsonStr != null){
		// 		var infos = JSON.parse(jsonStr);
		//
		// 		for(var i=0;i<this.unids.length;i++){
		//
		// 			for(var ii=0;ii<infos.length;ii++){
		// 				console.log(this.unids[i])
		// 				console.log(infos[ii].unid)
		// 				if(this.unids[i] == infos[ii].unid){
		// 					infos[ii].status=1;
		// 				}
		// 			}
		// 		}
		// 		sessionStorage.setItem('userinfo',JSON.stringify(infos));
		// 	}
		// }

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
.van-field .van-cell__control{
	border: 1px solid lightgray;
	background-color: red;
}
.theme_color{
	color:#4c62e7;

}
.next_button,.next_button:hover{
	border: 0px;
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
	.addCard{
		text-align: center;
		color:#4c62e7;
		font-size: 16px;
	}
	.addCard .van-icon{
		font-size: 18px;
		font-weight: bold;
		margin-right: 4px;
		vertical-align: text-top;
	}
	.border-container{
		border: 1px solid #cccccc;
	}
</style>
