<template>
    <div class="main">

     <!--头部导航-->
     <!--头部导航-->
     <van-nav-bar :title="title[step]"  left-arrow @click-left="onClickLeft" >
     </van-nav-bar>

    <div class="content">
		<progressBar :step="this.step" :stepArray="stepArray" v-show="step!=5"></progressBar>
		<div class="input-contianer" v-show="step==0">
			<div>
				<h4>企业营业执照</h4>
				<div class="idCard">
					<div class="idCard_shadow_button"></div>
					<p>点击拍摄/上传企业营业执照</p>
				</div>
			</div>
			<van-cell-group class="bg-grey">
				<van-field label="新一代客户编号"placeholder="请输入新一代客户编号" v-model="info.company_info.customer_id" clearable label-width="120"/>
				<van-field label="统一社会信用代码" placeholder="统一社会信用代码"  v-model="info.company_info.unified_social_credit_code" clearable label-width="120"/>
				<van-field label="企业名称" placeholder="企业名称" v-model="info.company_info.company_name" clearable label-width="120"/>
				<van-field label="企业地址"placeholder="请输企业地址" v-model="info.company_info.enterprise_address" clearable label-width="120"/>
				<van-field label="法定代表人" placeholder="法定代表人"  v-model="info.company_info.legal_representative" clearable label-width="120"/>
				<van-field label="法定代表人电话" placeholder="法定代表人电话" v-model="info.company_info.mobile" clearable label-width="120"/>
				<van-field label="法定代表人地址"placeholder="请输入法定代表人地址" v-model="info.company_info.legal_representative_address" clearable label-width="120" label-color="red"/>
			</van-cell-group>
		</div>
		<div class="input-contianer" v-show="step==1">
			<div>
				<h4>企业业主身份证</h4>
				<div class="idCard_front">
					<div class="idCard_shadow_button"></div>
					<p>点击拍摄/上传人像面</p>
				</div>
				<div class="idCard_back">
					<div class="idCard_shadow_button"></div>
					<p>点击拍摄/上传国徽面</p>
				</div>
			</div>

			<van-cell-group class="bg-grey">
				<van-field label="姓名"placeholder="请输入姓名" v-model="info.company_main_info.name" clearable label-width="120"/>
				<van-field label="性别" placeholder="请输入性别" @click-right-icon="openPicker(3)" v-model="info.company_main_info.sex" clearable label-width="120" right-icon="arrow-down"/>
				<van-field label="民族" placeholder="请输入民族" v-model="info.company_main_info.ethnic" clearable label-width="120"/>
				<van-field label="出生日期"placeholder="请输入出生日期" @click-right-icon="openPicker(1)" v-model="info.company_main_info.birth" clearable label-width="120" right-icon="arrow-down"/>
				<van-field label="住址" placeholder="请输入住址"  v-model="info.company_main_info.address" clearable label-width="120"/>
				<van-field label="公民身份证号" placeholder="请输入公民身份证号" v-model="info.company_main_info.idcard" clearable label-width="120"/>
				<van-field label="有效期限"placeholder="请输入有效期限" @click-right-icon="openPicker(2)" v-model="info.company_main_info.validity_period" clearable right-icon="arrow-down" label-width="120" label-color="red"/>
				<van-field label="学历" placeholder="请输入学历" @click-right-icon="openPicker(4)" v-model="info.company_main_info.record_of_formal_schooling" clearable right-icon="arrow-down" label-width="120"/>
				<van-field label="电话号码"placeholder="请输入电话号码" v-model="info.company_main_info.mobile" clearable label-width="120" label-color="red"/>
				<van-field label="工作单位"placeholder="请输入工作单位" v-model="info.company_main_info.work" clearable label-width="120" label-color="red"/>
				<van-field label="婚姻情况" placeholder="请输入婚姻情况" @click-right-icon="openPicker(5)" v-model="info.company_main_info.marriage_status" clearable label-width="120" right-icon="arrow-down"/>
				<van-field label="家庭人数"placeholder="请输入家庭人数" @click-right-icon="openPicker(6)" v-model="info.company_main_info.households" clearable right-icon="arrow-down" label-width="120" label-color="red"/>
			</van-cell-group>
		</div>

		<div class="input-contianer" v-show="step==2">
			<div v-for="(item,index) in info.associates">
				<h4 class="cell-hearder">关联人{{index+1}}</h4>

				<div>
					<van-field label="关系"placeholder="请输入姓名" v-model="item.name" clearable label-width="120"/>

					<div class="idCard_front">
						<div class="idCard_shadow_button"></div>
						<p>点击拍摄/上传人像面</p>
					</div>
					<div class="idCard_back">
						<div class="idCard_shadow_button"></div>
						<p>点击拍摄/上传国徽面</p>
					</div>
				</div>
				<!--style="position: fixed;top: 34px; width:100%;"-->
				<van-cell-group class="bg-grey">

					<van-field label="姓名"placeholder="请输入姓名" v-model="item.name" clearable label-width="120"/>
					<van-field label="性别" placeholder="性别" @click-right-icon="openPicker(3)" v-model="item.sex" clearable label-width="120" right-icon="arrow-down"/>
					<van-field label="民族" placeholder="请输入民族" v-model="item.ethnic" clearable label-width="120"/>
					<van-field label="出生日期"placeholder="请输入企业地址" @click-right-icon="openPicker(1)" v-model="item.birth" clearable label-width="120" right-icon="arrow-down"/>
					<van-field label="住址" placeholder="住址"  v-model="item.address" clearable label-width="120"/>
					<van-field label="公民身份证号" placeholder="公民身份证号" v-model="item.idcard" clearable label-width="120"/>
					<van-field label="有效期限"placeholder="请输入法定代表人地址" @click-right-icon="openPicker(2)" v-model="item.validity_period" clearable label-width="120" right-icon="arrow-down" label-color="red"/>
					<van-field label="学历" placeholder="法定代表人电话" @click-right-icon="openPicker(4)" v-model="item.record_of_formal_schooling" clearable label-width="120" right-icon="arrow-down"/>
						<van-field label="电话号码"placeholder="请输入电话号码" v-model="item.mobile" clearable label-width="120" label-color="red"/>
					<van-field label="工作单位"placeholder="请输入工作单位" v-model="item.work" clearable label-width="120" label-color="red"/>
					<van-field label="婚姻情况" placeholder="法定代表人电话" @click-right-icon="openPicker(5)" v-model="item.marriage_status" clearable label-width="120" right-icon="arrow-down"/>
						<van-field label="家庭人数"placeholder="请输入法定代表人地址" @click-right-icon="openPicker(6)" v-model="item.households" clearable label-width="120" label-color="red" right-icon="arrow-down"/>

				</van-cell-group>

			</div>

		</div>

		<div class="input-contianer" v-show="step==3">
			<div v-for="(item,index) in info.mortgaged">
				<h4 class="cell-hearder">抵押物{{index+1}}</h4>
				<div>
					<van-field label="关系"placeholder="请输入姓名" v-model="item.name" clearable label-width="120"/>

					<div class="idCard_front">
						<div class="idCard_shadow_button"></div>
						<p>点击拍摄/上传人像面</p>
					</div>
					<div class="idCard_back">
						<div class="idCard_shadow_button"></div>
						<p>点击拍摄/上传国徽面</p>
					</div>
				</div>

				<van-cell-group class="bg-grey">
					<van-field label="权利人"placeholder="请输入权利人" v-model="item.holder" clearable label-width="120"/>
					<van-field label="共有情况" placeholder="共有情况"  v-model="item.situations" clearable label-width="120"/>
					<van-field label="地址" placeholder="地址" @click-right-icon="openPicker(7)" v-model="item.address" clearable label-width="120" right-icon="arrow-down"/>
					<van-field label="不动产单元号"placeholder="请输入不动产单元号" v-model="item.number" clearable label-width="120"/>
					<van-field label="权利类型" placeholder="权利类型"  v-model="item.type" clearable label-width="120"/>
					<van-field label="权利性质" placeholder="权利性质" v-model="item.nature" clearable label-width="120"/>
					<van-field label="用途"placeholder="请输入用途" v-model="item.use" clearable label-width="120" label-color="red"/>
					<van-field label="面积" placeholder="面积" v-model="item.area" clearable label-width="120"/>
					<van-field label="权利其他情况"placeholder="请输入权利其他情况" v-model="item.Other" clearable label-width="120" label-color="red"/>
					<van-field label="房产证号"placeholder="请输入房产证号" v-model="item.house_nubmer" clearable label-width="120" label-color="red"/>
				</van-cell-group>

			</div>

		</div>
		<div class="input-contianer" v-show="step==4">
			<div v-for="(item,index) in info.mortgagor">
				<h4 class="cell-hearder">抵押人{{index+1}}</h4>

				<van-cell-group class="bg-grey">
					<div v-show="item.type==0">
						<div>
							<van-field label="关系 自然人" placeholder="请输入姓名"  clearable label-width="120"/>

							<div class="idCard_front">
								<div class="idCard_shadow_button"></div>
								<p>点击拍摄/上传人像面</p>
							</div>
							<div class="idCard_back">
								<div class="idCard_shadow_button"></div>
								<p>点击拍摄/上传国徽面</p>
							</div>
						</div>

						<van-field label="姓名"placeholder="请输入姓名" v-model="item.name" clearable label-width="120"/>
						<van-field label="性别" placeholder="性别" @click-right-icon="openPicker(3)" v-model="item.sex" clearable label-width="120" right-icon="arrow-down"/>

						<van-field label="民族" placeholder="请输入民族" v-model="item.ethnic" clearable label-width="120"/>
						<van-field label="出生日期"placeholder="请输入企业地址" @click-right-icon="openPicker(1)"v-model="item.birth" clearable label-width="120" right-icon="arrow-down"/>
						<van-field label="住址" placeholder="住址"  v-model="item.address" clearable label-width="120"/>
						<van-field label="公民身份证号" placeholder="公民身份证号" v-model="item.idcard" clearable label-width="120"/>
						<van-field label="有效期限"placeholder="请输入法定代表人地址" @click-right-icon="openPicker(2)" right-icon="arrow-down" v-model="item.validity_period" clearable label-width="120" label-color="red"/>
						<van-field label="抵押人联系方式" placeholder="请输入法定代表人地址" v-model="item.validity_period" clearable label-width="120" label-color="red"/>
					</div>
					<div v-show="item.type==1">
						<div>
							<van-field label="企业法人" placeholder="请输入姓名" v-model="item.type" clearable label-width="120"/>

							<div class="idCard">
								<div class="idCard_shadow_button"></div>
								<p>点击拍摄/上传企业营业执照</p>
							</div>
						</div>
						<van-field label="新一代客户编号"placeholder="请输入新一代客户编号" v-model="item.customer_id" clearable label-width="120"/>
						<van-field label="统一社会信用代码" placeholder="统一社会信用代码"  v-model="item.unified_social_credit_code" clearable label-width="120"/>
						<van-field label="企业名称" placeholder="企业名称" v-model="item.company_name" clearable label-width="120"/>
						<van-field label="企业地址"placeholder="请输企业地址" v-model="item.enterprise_address" clearable label-width="120"/>
						<van-field label="法定代表人" placeholder="法定代表人"  v-model="item.legal_representative" clearable label-width="120"/>
						<van-field label="法定代表人电话" placeholder="法定代表人电话" v-model="item.mobile" clearable label-width="120"/>
						<van-field label="法定代表人地址"placeholder="请输入法定代表人地址" v-model="item.legal_representative_address" clearable label-width="120" label-color="red"/>
					</div>

					<div class='cell'>请选择关联抵押物(可多选)</div>
					<van-checkbox-group v-model="result">
					  <van-cell-group>
					    <van-cell
					      v-for="(item, index) in info.mortgaged"
					      clickable
					      :key="item"
					      :title="`房产证号 ${item.house_nubmer}`"
					      @click="toggle(index)"
					    >
					      <van-checkbox
					        :name="item.house_nubmer"
					        ref="checkboxes"
					        slot="right-icon"
					      />
					    </van-cell>
					  </van-cell-group>
					</van-checkbox-group>
				</van-cell-group>

			</div>

		</div>

		<div class="btn_group" v-show='step!=5'>
			<p v-show="step>1" class="add_asso" @click="add_item"><span class="add">&nbsp;+&nbsp;</span>添加关联人</p>
			<div class="save_button" @click="save">保存并退出</div>
			<div class="next_button" @click="addStep">下一步</div>
		</div>
		<div v-show='step==5'>
			<div class="success-pan">
				<img class="success" src="../../../assets/images/other/success@2x.png" alt="">
				<p class="success-tip"> 信息采集成功</p>
				<div class="line"></div>
				<van-cell-group class="bg-grey"  >
					<div >
						<van-cell ><div class="grey">查看详情</div></van-cell>
						<van-cell>
							<van-col span="3"><img class="logo" src="../../../assets/images/38/Companyname@2x.png" alt=""></van-col>
							<van-col span="21"><h3>广州老地方有限公司</h3></van-col>
						</van-cell>
						<van-cell>
							<van-col span="2"></van-col>
							<van-col span="10">统一社会信用代码:</van-col>
							<van-col span="12">44000111111111</van-col>
						</van-cell>
						<van-cell>
							<van-col span="2"></van-col>
							<van-col span="10">企业主姓名</van-col>
							<van-col span="12">黄五</van-col>
						</van-cell>
						<van-cell>
							<van-col span="2"></van-col>
							<van-col span="10">采集时间:</van-col>
							<van-col span="12">2019-07-22</van-col>
						</van-cell>
					</div>
				</van-cell-group>
				<div class="jyButton" @click="go('creditCheck')">征信校验</div>
			</div>
		</div>
    </div>
<!--		选择器遮罩层-->
		<div class="pop_picker" v-show="time_Picker_Statue!==0">
<!--			自定义选择器-->
			<van-picker :columns="columns"  show-toolbar @cancel="onCancel" @confirm="confirmBtn(0)" v-show="time_Picker_Statue==3"   class="picker"/>
<!--			地址选择器-->
			<van-area :area-list="areaList" :columns-num="3" v-show="time_Picker_Statue==7" @confirm="confirmBtn(10)"  @cancel="onCancel" class="picker"/>
			<van-datetime-picker v-show="time_Picker_Statue==1" class="picker"
								 v-model="currentDate1"
								 type="date"
								 :min-date="minDate"
								 @confirm="confirmBtn(1)" @cancel="onCancel()"
			/>
			<van-datetime-picker v-show="time_Picker_Statue==2" class="picker"
								 v-model="currentDate2"
								 type="date"
								 :min-date="minDate"
								 @confirm="confirmBtn(2)" @cancel="onCancel()"
			/>
		</div>
    </div>
</template>

<script>
	import areaList from '../../../area.js';
	import NavBar from '@/components/navBar'
	import progressBar from '@/components/progressBar'
	import Vue from 'vue';
	import { DropdownMenu, DropdownItem,Grid, GridItem,Image,Panel,NoticeBar,Cell, CellGroup,Row, Col,Dialog } from 'vant';
	Vue.use(DropdownMenu).use(DropdownItem);
	export default {
  data() {
    return {
		areaList:areaList,
		zidingyi:3,//3性别4学历5婚姻6家庭人数
		currentDate1: new Date(),//1:开始日期  2 结束日期
		currentDate2: new Date(),
		timeValue1: '',//按确认后显示的日期  1：开始日期  2：结束日期
		timeValue2: '',
		time_Picker_Statue:0, //0：不显示 1：显示开始日期控件 2：显示结束日期控件  3：自定义控件：默认性别
		columns:['男', '女'],//默认自定义picker数据

      title : [
		'信息采集-企业信息',
		'信息采集-企业主信息',
		'信息采集-关联人信息',
		'信息采集-抵押物信息',
		'信息采集-抵押人信息',
	  ],
		step:0,
		stepArray:[
			'企业信息',
			'企业主信息',
			'关联人信息',
			'抵押物信息',
			'抵押人信息',
		],
		info:{
			company_info:{
				customer_id:'44099999999',
				unified_social_credit_code:'xxxxxxxxxx',
				company_name:'XXXX有限公司',
				enterprise_address:'广州市越秀区法政路XX号',
				legal_representative:'张三',
				mobile:'13800000000',
				legal_representative_address:'广州市越秀区法政路XX号',
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
  mounted () {
  	var value1 = this.$route.params.step;
	  console.log(value1);
	  console.log('12312312');

	  if (value1) {
	  	this.step = value1;
	  }
  },

  //声明方法
  methods : {
	  openPicker(i) {//0：不显示 1：显示开始日期控件 2：显示结束日期控件  3:自定义控件：  3性别4学历5婚姻6家庭人数
	  	switch (i) {
			case 0:
				this.time_Picker_Statue = 0;
				break;
			case 1:
				this.time_Picker_Statue = 1;
				break;
			case 2:
				this.time_Picker_Statue = 2;
				break;
			case 3:
				this.time_Picker_Statue = 3;
				this.columns = ['男', '女'];
				break;
			case 4:
				this.time_Picker_Statue = 3;
				this.columns = ['研究生以上', '本科','大专','高中'];
				break;
			case 5:
				this.time_Picker_Statue = 3;
				this.columns = ['已婚', '未婚','离异'];
				break;
			case 6:
				this.time_Picker_Statue = 3;
				this.columns = [4, 3,2,1];
				break;
			case 7:
				this.time_Picker_Statue = 7;
				break;
			default:
				break;

		}

	  },
	  //自定义以及日期picker---取消键
	  onCancel() {
		  this.time_Picker_Statue = 0;
	  },
	  //自定义以及日期picker----确定键
	  confirmBtn(i) { // 确定按钮TODO

	  this.time_Picker_Statue = 0;
	  },
	  timeFormat(time) { // 时间格式化 2019-09-08
		  let year = time.getFullYear();
		  let month = time.getMonth() + 1;
		  let day = time.getDate();
		  if (this.type == 2) {
			  return year + '年' + month + '月' + day +'日'
		  }
		  return year + '-' + month + '-' + day
	  },
	  onConfirm() {
		  this.$refs.item.toggle();
	  },
	addStep:function(){
		if(this.step == 5 ){
			this.$router.go(-1);
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
	add_item:function(){
		switch(this.step){
			case 2:{
				this.info.associates.push({
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
					})
			}
			break;
			case 3:{
				this.info.mortgaged.push({
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
				})
			}
			break;
			case 4:{
				this.info.mortgagor.push({
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
					})
			}
			break;
		}
	},
	toggle:function (index) {
	  this.$refs.checkboxes[index].toggle();
	},
	save:function(){
		this.$router.go(-1);
	},
	  go : function(url){

		  this.$router.push({name: url})
	  },
  },

  //计算属性
  computed: {
  },

  //引入组件
  components: {
	progressBar,
	NavBar,

  }
 }
</script>

<style lang="scss" scoped>
.pop_picker{
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	background-color: rgba(0,0,0,0.3);
}
.bg-grey{
	position: relative;
}
.picker{
	position: absolute;
	bottom: 0;
	width: 100%;
}
.content{
	padding: 0px;
	background-color: rgb(238,238,238);
	min-height: 600px;
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
.step-text-pan.more{
	color: #4c62e7;
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
		.line-pan{
			margin-top: 30px;
			margin-left: 8%;
			margin-right: 8%;
		}
		.point{
			width: 16px;
			height: 16px;
			background-color: #999999;

			border-radius: 8px;
			float: left;
		}
		.point.active{
			width: 16px;
			height: 16px;
			background-image: url(../../../assets/images/24/Navigationcircle@2x.png);
			background-size: 100%;
			border-radius: 8px;
			float: left;
		}

		.progress{
			background-color: #999999;
			float: left;
			width: 18%;
			height: 2px;
			margin: 7px 0px;
		}
		.progress.active{
			background-image: url(../../../assets/images/Label2@2x.png);
			background-size: 100%;
		}
		.idCard{
			background-image: url(../../../assets/images/idcard/bg_dyw@2x.png);
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
			width: 46%;
			margin: 0 2%;
			display: inline-block;
			height: 80px;
		}
		.idCard_front{
			background-image: url(../../../assets/images/idcard/bg_sfz_front@2x.png);
		}
		.idCard_back{
			background-image: url(../../../assets/images/idcard/bg_sfz_reverse@2x.png);
		}
		.input-contianer{
			margin-top: 8px;
			background-color: #fff;
		}
		.idCard_shadow_button{
			background-image: url(../../../assets/images/84/Shooting@2x.png);
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
			padding: 8px 16px;
		}
		.btn_group{
			background: rgb(238,238,238);
			padding: 16px;
			text-align: center;
		}
		.btn_group div{
			width: 100px;
			display: inline-block;
			border-radius: 16px;
			text-align: center;
			padding: 4px 16px;
			margin: 0px 16px;
		}
		.btn_group .save_button{
			background-color: #fff;
			border: 1px solid #4c62e7;
			color: #4c62e7;
		}
		.btn_group .next_button{
			background-image: url(../../../assets/images/other/Doublebutton@2x.png);
			background-size: 100% 100%;
			color: #fff;
			padding-bottom: 10px;
			line-height: 24px;
		}
		.cell-hearder{
			background-color: rgb(238,238,238);
		}
		.add_asso{
			text-align: center;
			color: #4c62e7;
			margin-top: -6px;
		}
		.cell{
			height: 24px;
			padding: 10px 16px;
		}

</style>
