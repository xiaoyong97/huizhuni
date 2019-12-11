<template>
	<div class="main text-14">
		<div v-show="show" class="pop">
			<div class="pop-div">
				<van-row class="pop-row" @click="showPopup()">拍照</van-row>
				<van-row class="pop-row" @click="showPopup()">取消</van-row>
			</div>
		</div>
	 <!--头部导航-->
		<van-nav-bar :title="title[step]"  left-arrow @click-left="onClickLeft" ></van-nav-bar>
		<van-row class="row">
			<div class="dot-border" @click="showPopup()">
				<div><van-icon name="photo-o" class="dot-border-icon"/></div>
				<div><span class="dot-border-span">拍摄/上传</span></div>
			</div>
		</van-row>
		
		<van-row style="text-align: center;margin-top: 30px;">
			<van-button round type="info" class="save-buttom" @click="onSubmit()">保存</van-button>
		</van-row>
		
	</div>
	
</template>

<script>
	// import '@/assets/resetui.scss'
	import eventBus from '@/assets/js/eventbus.js';
	import NavBar from '@/components/navBar'
	import Vue from 'vue';
	import { Grid, GridItem,Image,Panel,Cell, CellGroup,Row, Col,Dialog,Toast ,Tab, Tabs } from 'vant';
	export default {
  data() {
    return {
		title:['添加照片'],
		step:0,
		show: false,
		type:'',

	}
  },

  //数据预加载
  created(){
		
  },

  //网页加载完成
  mounted () {
var value = this.$route.params;
this.type = value;
	if (value.activeNames) {
		sessionStorage.setItem('activeNames',JSON.stringify(value.activeNames));
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
	  onSubmit() {
		  this.$router.go(-1);
		  if (parseInt(this.type.activeNames) == 2) {
			  var value1 = sessionStorage.getItem('collect2');
			  let arr = JSON.parse(value1);
			  arr.push(1);
			  sessionStorage.setItem('collect2',JSON.stringify(arr));
		  } else {
			  var value2 = sessionStorage.getItem('collect3');
			  let arr = JSON.parse(value2);
			  arr.push(1);
			  sessionStorage.setItem('collect3',JSON.stringify(arr));
		  }
	  },
	  showPopup() {
		this.show = !this.show;
	  },
	  
  },
  //引入组件
  components: {
	NavBar,

  }
 }
</script>

<style lang="scss" scoped>
	
	.col{
		padding-left: 8px;
		line-height: 34px;
		margin-bottom:8px ;
		margin-top: 8px;
	}
	.border{
		border: 1px #7D7E80 solid;
		border-radius: 34px;
		margin-right: 8px;
	}
	.save-buttom{
		width: 160px;
		margin: 8px 0 4px;
	}
	.row{
		display: flex;
		justify-content: center;
		align-content: center;
	}
	.dot-border{
		margin-top: 30px;
		border: 1px dashed #389BF6;
		border-radius: 12px;
		flex-direction: column;
		text-align: center;
		justify-content: center;
		width: 240px;
		height: 180px;
	}
	.dot-border-icon{
		margin-top: 38px;
		font-size: 48px;
		color: #389BF6;
	}
	.dot-border-span{
		font-size: 18px;
		color: #389BF6;
	}
	.pop{
		background-color: rgba(0,0,0,0.3);
		position: fixed;
		top: 46px;
		left: 0;
		right: 0;
		button:0;
		width: 100%;
		height: 100%;
		z-index: 100;
	}
	.pop-div{
		display: flex;
		justify-content: flex-end;
		flex-direction: column;
		height: 90%;
		width: 90%;
	}
	.pop-row{
		text-align: center;
		border-radius: 6px;
		background-color: white;
		line-height: 34px;
		width: 100%;
		margin: 4px 5%;
	}
	.text-14{
		font-size: 14px;
	}
</style>
