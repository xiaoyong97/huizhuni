<template>
	<div class="newCollectTask text-14">
	 <!--头部导航-->
		<van-nav-bar :title="title[step]"  left-arrow @click-left="onClickLeft" @click-right="submit" right-text="提交审核"></van-nav-bar>
		<img src="../../../../../../assets/images/other/luyin1.png" alt="" class="luyin" v-show="luyin==1" @click="nextStep">
		   <img src="../../../../../../assets/images/other/luyin2.png" alt="" class="luyin"  v-show="luyin==2" @click="nextStep"> 
		    <img src="../../../../../../assets/images/other/luyin3.png" alt="" class="luyin"  v-show="luyin==3" @click="nextStep"> 
		
		<van-overlay :show="show" @click="show = false" style="z-index: 2;">
		  <div class="wrapper" @click.stop>
		    <div class="block" >
				<div >下一审核人</div>
				<div @click="submit">客户_10753888</div>
				<div  @click="submit">客户_10763282</div>
				<div  @click="submit">客户_10732237</div>
				<div  @click="submit">客户_10758543</div>
				<div  @click="submit">客户_10755615</div>
			</div>
		  </div>
		</van-overlay>
		<van-tabs @click="onTabClick" v-model="activeTab" color="#4c62e7" line-width="33%" title-active-color="#4c62e7">
		  <van-tab title="催收现场取证" name="tab1">
			  <van-collapse v-model="activeNames" class="collapse">
			    <van-collapse-item  name="1" >
					 <van-row slot="title" >
						 <van-col span="2" class=""><van-icon name="location-o" color="#389BF6" size="24px"/></van-col>
						 <van-col span="6" class=""><span class="collapse-text">现场签到</span></van-col>
					 </van-row>
				 <div >
					 <van-row>
					 <van-col span="3" class="">
					 	<van-icon name="location-o" class="sign-icon"/>
					 </van-col>
					 <van-col span="6" class="">
					 	<button class="sign-button" @click="go('onSiteSign')">现场签到</button>
					 </van-col>
					 </van-row>
				 </div>
				 <div v-show="signShow==2">
				 					 123
				 </div>
				 
				 </van-collapse-item>
			    <van-collapse-item name="2">
					 <van-row slot="title">
						 <van-col span="2" class=""><van-icon name="photo-o" color="#389BF6" size="24px"/></van-col>
						 <van-col span="12" class=""><span class="collapse-text">经营情况影像</span></van-col>
					 </van-row>
					 <van-row  class="picture_div" >
						 <van-col  class="dot-border" span="11"  v-for="(item) in list[0]">
							 <img src="../../../../../../assets/images/other/0191125155504.png" class="img_file"  >
							 <img src="../../../../../../assets/images/24/Empty@2x.png" class="img_close" @click="remove_img(0)" >
						 </van-col>
						 <van-col class="dot-border" span="11" @click="go('addImg')">
						 	<div><van-icon name="photo-o" class="dot-border-icon"/></div>
						 	<div><span class="dot-border-span">拍摄/上传</span></div>
						 </van-col>
					 </van-row>
					
				</van-collapse-item>
			    <van-collapse-item  name="3">
					<van-row slot="title">
						 <van-col span="2" class=""><van-icon name="photo-o" color="#389BF6" size="24px"/></van-col>
						 <van-col span="12" class=""><span class="collapse-text">抵押物情况</span></van-col>
					</van-row>
					<van-row  class="picture_div" >
						 <van-col  class="dot-border" span="11"  v-for="(item) in list[0]">
							 <img src="../../../../../../assets/images/other/125155704.png" class="img_file"  >
							 <img src="../../../../../../assets/images/24/Empty@2x.png" class="img_close" @click="remove_img(0)" >
						 </van-col>
						 <van-col class="dot-border" span="11" @click="go('addImg')">
							<div><van-icon name="photo-o" class="dot-border-icon"/></div>
							<div><span class="dot-border-span">拍摄/上传</span></div>
						 </van-col>
					</van-row>
				</van-collapse-item>
			  </van-collapse>
			  
			 <van-cell  >
				 <van-icon slot="icon" name="play-circle-o" color="#389BF6" size="24px"/>
			 <span class="collapse-text">访问录音</span> 
			 <van-icon
				slot="right-icon"
			     name="add-o"
			     style="line-height: inherit;"
			    color="#389BF6" size="24px"
				@click="nextStep"
			   />
		</van-cell>
			<van-row style="text-align: center;">
				<van-button round type="info" class="save-buttom">保存</van-button>
			</van-row>
		  </van-tab>
		  <van-tab title="催收信息维护" name="tab2">
		  		<van-row >
		  		  <van-col class="col-title padding-left" span="18">行内人员</van-col>
				    <van-col class="col-title theme" span="3" @click="go('addCustomer',{type:0})">新增</van-col>
					  <van-col class="col-title theme" span="3">删除</van-col>
		  		</van-row>
				<table class="table" rules=none >
					<tr>
						<th>员工名称</th>
						<th>职务</th>
						<th>所在单位</th>
					</tr>
					<tr>
						<td>客户名<br/>_72707632</td>
						<td>ABCDEFG</td>
						<td>ABCDEFG</td>
					</tr>
				</table>
		  		<van-row >
		  		  <van-col class="col-title padding-left" span="18">客户人员</van-col>
		  		    <van-col class="col-title theme" span="3" @click="go('addCustomer',{type:1})">新增</van-col>
		  			  <van-col class="col-title theme" span="3">删除</van-col>
		  		</van-row>
		  		<table class="table" rules=none >
		  			<tr>
		  				<th>员工名称</th>
		  				<th>与债权人关系</th>
		  				<th>联系方式</th>
		  			</tr>
		  			<tr>
		  				<td>贾跃亭</td>
		  				<td>实际控制人</td>
		  				<td>1369733232</td>
		  			</tr>
		  		</table>	
				<van-collapse  v-model="activeNames">
				  <van-collapse-item name="2">
				  		 <van-row slot="title">
				  			 <van-col span="11" class=""><span class="collapse-text">客户接触反馈情况</span></van-col>
				  		 </van-row>
						<van-row  class="select_row">
							   <van-col class="" span="11" dot>执行上门催收原因</van-col>
							   <van-col class="" span="12">
								   <select name="" id="">
									   <option value="">本金逾期</option>
									   <option value="">欠息</option>
									   <option value="">非逾期欠息原因</option>
								   </select>
							   </van-col>
						</van-row>
						<van-row class="select_row">
							   <van-col class="" span="11">接触情况</van-col>
							   <van-col class="" span="12">
								   <select name="" id="">
									   <option value="">实际控制人接触成功</option>
									   <option value="">实际控制人安排其他人接触</option>
									   <option value="">实际控制人因故未能接触</option>
									   <option value="">实际控制人拒绝接触</option>
									   <option value="">实际控制人失去联系</option>
								   </select>
							   </van-col>
						</van-row>
						<van-row class="select_row">
							   <van-col class="" span="11">客户态度</van-col>
							   <van-col class="" span="12">
								   <select name="" id="">
										<option value="">积极配合</option>
										<option value="">配合</option>
										<option value="">拒绝配合</option>
										<option value="">无</option>
								   </select>
							   </van-col>
						</van-row>
						<van-row class="select_row">
							   <van-col class="" span="11">反馈情况</van-col>
							   <van-col class="" span="12">
								   <select name="" id="">
										<option value="">承诺一次性还款</option>
										<option value="">承诺分期还款</option>
										<option value="">无明确回复</option>
										<option value="">无力还款</option>
										<option value="">无</option>
								   </select>
							   </van-col>
						</van-row>
						<van-row  class="select_row">
							   <van-col class="" span="11" dot>具体情况描述</van-col>
							   <van-col class="" span="12">
								  <textarea name="" id="" cols="26" rows="6">
									  
								  </textarea>
							   </van-col>
						</van-row>
				  </van-collapse-item>
				</van-collapse>
				
				<van-row >
				  <van-col class="col-title padding-left" span="18">承认还款计划</van-col>
				    <van-col class="col-title theme" span="3" @click="go('repaymentPlan')">新增</van-col>
					  <van-col class="col-title theme" span="3">删除</van-col>
				</van-row>
				<table class="table" rules=none >
					<tr>
						<th>还款日期</th>
						<th>还款金额</th>
					</tr>
					<tr>
						<td>2019-11-13</td>
						<td>10000</td>
					</tr>
				</table>
				
				<van-collapse  v-model="activeNames">
				  <van-collapse-item name="3">
				  		 <van-row slot="title">
				  			 <van-col span="12" class=""><span class="collapse-text">催收检查结论</span></van-col>
				  		 </van-row>
					<van-row  class="select_row">
						   <van-col class="" span="11" dot>总体判断描述</van-col>
						   <van-col class="" span="12">
							  <textarea name="" id="" cols="26" rows="6">
								  
							  </textarea>
						   </van-col>
					</van-row>
					<van-row  class="select_row">
						   <van-col class="" span="11" dot>下一次措施建议</van-col>
						   <van-col class="" span="12">
							  <textarea name="" id="" cols="26" rows="6">
								  
							  </textarea>
						   </van-col>
					</van-row>
				  </van-collapse-item>
				</van-collapse>
				<van-row style="text-align: center;margin-top: 30px;">
					<van-button round type="info" class="save-buttom" @click="onSubmit()">保存</van-button>
				</van-row>
		  </van-tab>
		  </van-tabs>
		
	</div>
	
</template>

<script>
	import eventBus from '@/assets/js/eventbus.js';
	import NavBar from '@/components/navBar'
	import Vue from 'vue';
	import { Grid, GridItem,Image,Panel,Cell, CellGroup,Row, Col,Dialog,Toast ,Tab, Tabs } from 'vant';
	import img1 from '@/assets/images/other/certificate.jpg';
	import img2 from '@/assets/images/24/Empty@2x.png';
	export default {
  data() {
    return {
		title:['催收任务'],
		step:0,
		activeTab:'tab1',
		signShow:'',//1：未签到，2：已签到
		activeNames: ['4'],
		luyin:0,
		show:false,
		img1:img1,
		img2:img2,
		list:[
		    [1],[1],
		],
	}
  },

  //数据预加载
  created(){
		
  },

  //网页加载完成
  mounted () {
	  var collectTabName = sessionStorage.getItem("collectTabName");
	  if (collectTabName == 'tab2') {
		  this.activeTab = collectTabName;
	  }
	  
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
	  remove_img(i) {
	      this.list[i].pop();
	  },
	  onTabClick(name, title) {
		  sessionStorage.setItem("collectTabName",name);
	  },
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
		font-size: 14px;
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
		position: relative;
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
		// position: fixed;
		// bottom: 8px;
		// transform: translateX(-50%);
	}
	.luyin{
		position: absolute;
		left: 0px;
		top:44px;;
		width: 100%;
		height: 100%;
		z-index: 2;
	}
	.table{
		width: 100%;
		text-align: left;
		margin-top: 10px;
		
	}
	.table tr *{
		padding: 8px 0px 8px 16px;
	}
	.table tr td{
		background-color: rgb(232,232,232);
		height: 44px;
	}
	.theme{
		color: #4C62E8;
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
	.picture_div p{
	    margin: 0;
	    padding: 0;
	    line-height: 40px;
	
	}
	.picture_col{
	    text-align: center;
	    position: relative;
	    padding: 4px auto;
	    margin: 8px 4px;
	    height: 155px;
	    margin-right: 4px;
	}
	.img_close{
	    position: absolute;
	    top: 5px;
	    right:8px ;
	    height: 24px;
	    width: 24px;
	}
	.img_file{
	    width: 90%;
	    height: 95%;
	    margin: 2px auto;
	
	}
	.van-overlay{
		z-index: 2;
	}
	.text-14{
		font-size: 14px;
	}
	.padding-left{
		padding-left: 16px;
	}
	.col-title{
		padding-top: 8px;;
	}
</style>
