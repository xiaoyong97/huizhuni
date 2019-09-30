<template>
    <div class="main">
     
     <!--头部导航-->
     <NavBar :title="title"/>
    <div class="content">
		<div v-show='type==0'>
			<van-cell-group class="bg-grey"  >
				<div >
					<van-cell>
						 <van-col span="1"> <van-tag type="danger" class="left_tag">&nbsp;</van-tag></van-col>
						 <van-col span="23"><h3>广州老地方有限公司</h3></van-col>		
					</van-cell>
					<van-cell>
						 <van-col span="10">全业法人营业执照:</van-col>
						 <van-col span="12"><img class="yyzz" src="../../../assets/images/other/yyzz.png" alt=""></van-col>
					</van-cell>
					<van-cell>
						 <van-col span="10">新一代客户编号:</van-col>
						 <van-col span="12">44099999999</van-col>
					</van-cell>
					<van-cell>
						 <van-col span="10">统一社会信用代码:</van-col>
						 <van-col span="12">xxxxxXxXXXX</van-col>
					</van-cell>
					<van-cell>
						 <van-col span="10">企业名称:</van-col>
						 <van-col span="12">XXXX有限公司</van-col>
					</van-cell>
					<van-cell>
						 <van-col span="10">企业地址:</van-col>
						 <van-col span="12">广州市越秀区法政路XX号</van-col>
					</van-cell>
					<van-cell>
						 <van-col span="10">法定代表人:</van-col>
						 <van-col span="12">张三</van-col>
					</van-cell>
					<van-cell>
						 <van-col span="10">法定代表人电话:</van-col>
						 <van-col span="12">13800000000</van-col>
					</van-cell>
					<van-cell>
						 <van-col span="10">法定代表人地址:</van-col>
						 <van-col span="12">广州市越秀区法政路XX号</van-col>
					</van-cell>
				</div>
			 </van-cell-group>
		</div>
		<div v-show='type==1'>
			<van-cell-group class="bg-grey"  >
				<div >
					<van-cell>
						 <van-col span="1"> <van-tag type="danger" class="left_tag">&nbsp;</van-tag></van-col>
						 <van-col span="23"><h3>企业主信息</h3></van-col>		
					</van-cell>
					<van-cell>
						 <van-col span="10">企业主身份证:</van-col>
						 <van-col span="12"><img class="yyzz" src="../../../assets/images/idcard/sfz.png" alt=""></van-col>
					</van-cell>
					<van-cell>
						 <van-col span="10">姓名:</van-col>
						 <van-col span="12">张三</van-col>
					</van-cell>
					<van-cell>
						 <van-col span="10">性别:</van-col>
						 <van-col span="12">男</van-col>
					</van-cell>
					<van-cell>
						 <van-col span="10">民族:</van-col>
						 <van-col span="12">汉</van-col>
					</van-cell>
					<van-cell>
						 <van-col span="10">出生日期:</van-col>
						 <van-col span="12">1988-01-01</van-col>
					</van-cell>
					<van-cell>
						 <van-col span="10">住址:</van-col>
						 <van-col span="12">广州市越秀区法政路XX号</van-col>
					</van-cell>
					<van-cell>
						 <van-col span="10">公民身份证号码:</van-col>
						 <van-col span="12">440103198801017543</van-col>
					</van-cell>
					<van-cell>
						 <van-col span="10">有效期限:</van-col>
						 <van-col span="12">2030-01-10</van-col>
					</van-cell>
					<van-cell>
						 <van-col span="10">学历:</van-col>
						 <van-col span="12">研究生或以上</van-col>
					</van-cell><van-cell>
						 <van-col span="10">手机号码:</van-col>
						 <van-col span="12">2030-01-10</van-col>
					</van-cell><van-cell>
						 <van-col span="10">工作单位:</van-col>
						 <van-col span="12">广州乐乐科技有限公司</van-col>
					</van-cell><van-cell>
						 <van-col span="10">婚烟情况:</van-col>
						 <van-col span="12">已婚有子女</van-col>
					</van-cell><van-cell>
						 <van-col span="10">家庭人数:</van-col>
						 <van-col span="12">3</van-col>
					</van-cell>
				</div>
			 </van-cell-group>
		</div>
		<div v-show='type==2'>
				<van-cell-group class="bg-grey"  >
					<div >
						<van-cell>
							 <van-col span="1"> <van-tag type="danger" class="left_tag">&nbsp;</van-tag></van-col>
							 <van-col span="23"><h3>企业主信息</h3></van-col>		
						</van-cell>
						<van-cell>
							 <van-col span="10">企业主身份证:</van-col>
							 <van-col span="12"><img class="yyzz" src="../../../assets/images/idcard/sfz.png" alt=""></van-col>
						</van-cell>
						<van-cell>
							 <van-col span="10">姓名:</van-col>
							 <van-col span="12">张三</van-col>
						</van-cell>
						<van-cell>
							 <van-col span="10">性别:</van-col>
							 <van-col span="12">男</van-col>
						</van-cell>
						<van-cell>
							 <van-col span="10">民族:</van-col>
							 <van-col span="12">汉</van-col>
						</van-cell>
						<van-cell>
							 <van-col span="10">出生日期:</van-col>
							 <van-col span="12">1988-01-01</van-col>
						</van-cell>
						<van-cell>
							 <van-col span="10">住址:</van-col>
							 <van-col span="12">广州市越秀区法政路XX号</van-col>
						</van-cell>
						<van-cell>
							 <van-col span="10">公民身份证号码:</van-col>
							 <van-col span="12">440103198801017543</van-col>
						</van-cell>
						<van-cell>
							 <van-col span="10">有效期限:</van-col>
							 <van-col span="12">2030-01-10</van-col>
						</van-cell>
						<van-cell>
							 <van-col span="10">学历:</van-col>
							 <van-col span="12">研究生或以上</van-col>
						</van-cell><van-cell>
							 <van-col span="10">手机号码:</van-col>
							 <van-col span="12">2030-01-10</van-col>
						</van-cell><van-cell>
							 <van-col span="10">工作单位:</van-col>
							 <van-col span="12">广州乐乐科技有限公司</van-col>
						</van-cell><van-cell>
							 <van-col span="10">婚烟情况:</van-col>
							 <van-col span="12">已婚有子女</van-col>
						</van-cell><van-cell>
							 <van-col span="10">家庭人数:</van-col>
							 <van-col span="12">3</van-col>
						</van-cell>
					</div>
				 </van-cell-group>
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


  },
  
  //计算属性
  computed: {
	 title :function  () {
			var type = localStorage.getItem('xxcj_type');
			
			switch (type){
				case 0:
					return '信息详情';
					break;
				case 1:
					return '信息采集详情';
					break;
				case 2:
					return '关联人信息';
					break;
				case 3:
					return '抵押物信息';
					break;
				case 4:
					return '抵押人信息';
					break;
				default:
					return '信息详情';
					break;
			}
		},
		type:function(){
			var type = localStorage.getItem('xxcj_type');
			
			return type ? type : 0;
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
	background-color: rgb(238,238,238);
	min-height: 640px;
	
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
	min-height: 30px;
}
.step-text-pan{
	font-size: 10px;
	width: 20%;
	padding: 2px 0px;
	float: left;
	border-radius: 14px;
	color: #666666;
}
.step-text-pan.active{
	background-image: url(../../../assets/images/other/Process@2x.png);
	background-size: 100% 100%;
	color: #fff;
	margin-top: -6px;
	padding-bottom: 12px;;
}
.success{
		width: 25%;
		display: block;
		margin: 72px auto 10px;
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
			background-image: url(../../../assets/images/other/Mainbutton@2x.png);
			background-size: 100% 100%;
			position: absolute;
			bottom: -60px;
			left: 50%;
			margin-left: -130px;
			font-weight: bold;
			
		}
		.left_tag{
			background-color: rgb(90,75,234);
			padding: 0px 3px;
			border-radius: 0px;;
			height: 16px;
		}
		.yyzz{
			width: 100%;
		}
</style>