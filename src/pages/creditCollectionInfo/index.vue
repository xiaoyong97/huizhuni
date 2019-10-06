<template>
    <div class="main">
     
     <!--头部导航-->
     <van-nav-bar :title="title[step]"  left-arrow @click-left="onClickLeft" >
     </van-nav-bar>
	 <span v-show="step==2" class="more_choose" @click="addStep">发起校验</span>
	 <span v-show="step!=2" class="more_choose" @click="addStep">下一步</span>

    <div class="content">
		<progressNavBar :step="this.step" :stepArray="stepArray" v-show="step!=3"></progressNavBar>
		<div class="input-contianer" v-show="step==0">
			<div>
				<div class="title-top">请上传征信查询授权协议</div>
				<img class="success" src="../../assets/images/other/bg_zxcxsqxy.png" alt="">
				<div class="idCard_back">
					<div class="idCard_shadow_button"></div>
					<p>点击拍摄</p>
				</div>
				<div style="clear:both;"></div>
			</div>
			<div>
				<div class="title-top">请上传客户手持征信查询授权协议的映像</div>
				<div class="idCard_back">
					<div class="idCard_shadow_button"></div>
					<p>点击拍摄</p>
				</div>
				<div style="clear:both;"></div>
			</div>
			
		</div> 
		<div class="input-contianer" v-show="step==1">
			<div>
				<div class="title-top">请上传业务申请书</div>
				<img class="success" src="../../assets/images/other/bg_zxcxsqxy.png" alt="">
				<div class="idCard_back">
					<div class="idCard_shadow_button"></div>
					<p>点击拍摄</p>
				</div>
				<div style="clear:both;"></div>
			</div>
			<div>
				<div class="title-top">请上传客户手持业务申请书的映像</div>
				<div class="idCard_back">
					<div class="idCard_shadow_button"></div>
					<p>点击拍摄</p>
				</div>
				<div style="clear:both;"></div>
			</div>

		</div> 
		<div class="input-contianer" v-show="step==2">
			<div>
				<div class="title-top">请上传企业主手持本人身份证的映像</div>
				<div class="idCard_back">
					<div class="idCard_shadow_button"></div>
					<p>点击拍摄</p>
				</div>
				<div style="clear:both;"></div>
			</div>
			
		</div>
		
    </div>
        
    </div>
</template>

<script>

	import NavBar from '@/components/navBar'
	import progressNavBar from '@/components/progressNavBar'
	import Vue from 'vue';
	import { Swipe, SwipeItem,Grid, GridItem,Image,Panel,NoticeBar,Cell, CellGroup,Row, Col,Dialog } from 'vant';
	export default {

  data() {
    return {
      title : [
		'征信采集信息',
		'征信采集信息',
		'征信采集信息',
	  ],
		step:0,
		stepArray:[
			'征信查询授权协议',
			'业务申请书',
			'企业主信息', 
		],
		info:{
			company_info:{
				customer_id:'',
				unified_social_credit_code:'',
				company_name:'',
				enterprise_address:'',
				legal_representative:'',
				mobile:'',
				legal_representative_address:'',
			},
			company_main_info:{
				name:'',
				sex:'',
				ethnic:'',
				birth:'',
				address:'',
				idcard:'', 
				validity_period:'' ,//有效期
				record_of_formal_schooling : '', //学历
				mobile:'',
				work:'',
				marriage_status:'',
				households:'',
			},
			associates:[   //关联人
				{
					name:'',
					sex:'',
					ethnic:'',
					birth:'',
					address:'',
					idcard:'', 
					validity_period:'' ,//有效期
					record_of_formal_schooling : '', //学历
					mobile:'',
					work:'',
					marriage_status:'',
					households:'',
				}
			],
			mortgaged:[
				{
					holder:'',
					situations:'',
					address:'',
					number:'',
					type:'',
					nature:'',
					use:'',
					area:'',
					Other:'',
					house_nubmer:'',
				}
			],
			mortgagor:[  
				{
					type:'0', //0=自然人， 1=  企业法人
					name:'',
					sex:'',
					ethnic:'',
					birth:'',
					address:'',
					idcard:'', 
					validity_period:'' , //有效期
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
					type:'1', //0=自然人， 1=  企业法人
					name:'',
					sex:'',
					ethnic:'',
					birth:'',
					address:'',
					idcard:'', 
					validity_period:'' , //有效期
					diyaren_mobile:'',
					diyawu:[],
					customer_id:'',
					unified_social_credit_code:'',
					company_name:'',
					enterprise_address:'',
					legal_representative:'',
					mobile:'',
				}
			]
		},
		result:[],
    }
  },
  
  //数据预加载
  created : ()=>{
  },

  //网页加载完成
  mounted : ()=>{
  },
  
  //声明方法
  methods : {
	addStep:function(){
		if(this.step == 2 ){
			this.$router.push('/index3/creditCheck/nextCreditCheck/creditCheckResult');
			return;
		}
		this.step ++;
	},
	onClickLeft:function() {
		if(this.step == 0 ){
			this.$router.go(-1);
			return;
		}
		this.step=this.step-1;
	},
	
	toggle:function (index) {
	  this.$refs.checkboxes[index].toggle();
	},
  },
  
  //计算属性
  computed: {
  },

  //引入组件
  components: {
	progressNavBar,
	NavBar,
	
  }
 }
</script>

<style lang="scss" scoped>
.title-top{
	max-width: 92%;
    margin: 0 auto;
	padding: 12px 0px;
    color: #323233;
    font-weight: 500;
    font-size: 16px;
}
.more_choose{
    position: absolute;
    top: 15px;
    right: 12px;
    color: #4c62e7;
    font-size: 14px;
    z-index: 100;
}
.content{
	padding: 0px;
	background-color: rgb(238,238,238);
	min-height: 620px;
}
#grad {
  background: -webkit-linear-gradient(red, blue); /* Safari 5.1 - 6.0 */
  background: -o-linear-gradient(red, blue); /* Opera 11.1 - 12.0 */
  background: -moz-linear-gradient(red, blue); /* Firefox 3.6 - 15 */
  background: linear-gradient(red, blue); /* 标准的语法 */
}
.text-center{
	text-align: center;
}
.step-container{
	padding: 12px;
	height: 54px;
	background-color: #fff;
}
.step-text-pan{
	font-size: 10px;
	width: 30% !important;
	padding: 2px 0px;
	float: left;
	border-radius: 14px;
	color: #666666;
}
.step-text-pan.active{
	background-image: url(../../assets/images/other/Process@2x.png);
	background-size: 100% 100%;
	color: #fff;
	margin-top: -6px;
	padding-bottom: 12px;;
}
.step-text-pan.more{
	color: #4c62e7;
}
.success{
	float:left;
		width: 26%;
		display: block;
		margin:5px 10px 0px 15px;
	}
	.success-tip{
		text-align: center;
		margin-bottom: 30px;
	}
	.detail-tip{
		text-align: center;
		color: #999999;
	}
	.grey{
		color: #666666;
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
		.line{
			border-bottom: 1px solid #dddddd;
		}
		.success-pan{
			min-height: 300px;
			background-color: #fff;
			position: relative;
		}
		.jyButton{
			color: #fff;
			width: 260px;
			height: 38px;
			line-height: 38px;
			text-align: center;
			background-image: url(../../assets/images/other/Mainbutton@2x.png);
			background-size: 100% 100%;
			position: absolute;
			bottom: -60px;
			left: 50%;
			margin-left: -130px;
			font-weight: bold;	
		}
		.line-pan{
			margin-top: 30px;
			margin-left: 8%;
			margin-right: 8%;
		}
		
		.progress{
			background-color: #999999;
			float: left;
			width: 18%;
			height: 2px;
			margin: 7px 0px;
		}
		.progress.active{
			background-image: url(../../assets/images/Label2@2x.png);
			background-size: 100%;
		}
		.idCard{
			background-image: url(../../assets/images/idcard/bg_dyw@2x.png);
			background-size: 100% 100%;
			height: 110px;
			width: 256px;
			margin: 16px auto;
			border-radius: 8px;;
			padding-top: 36px;;
			box-shadow: 0px 0px 12px 2px rgba(0,0,0,.15);
		}
		.idCard_front,.idCard_back{
			padding-top: 16px;
			background-size: 100% 100%;
			width: 25%;
			margin: 7px 0px 15px 18px;
			display: inline-block;
			height: 105px;
			border: 1px #0062B3 dashed;
		}
		.idCard_front{
			background-image: url(../../assets/images/idcard/bg_sfz_front@2x.png);
		}
		.input-contianer{
			margin-top: 8px;
			background-color: #fff;
		}
		.idCard_shadow_button{
			background-image: url(../../assets/images/84/Shooting@2x.png);
			background-size: 100% 100%;
			height: 40px;
			width: 40px;
			margin: 0px auto ;
		}
		.idCard p,.idCard_front p,.idCard_back p{
			text-align: center;
			color: #4c62e7;
			font-size: 12px;
		}
		.input-contianer h4{
			padding: 15px 16px 8px 16px;
		}
		.cell-hearder{
			background-color: rgb(238,238,238);
		}
		.cell{
			height: 24px;
			padding: 10px 16px;
		}
		
</style>