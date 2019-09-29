<template>
    <div class="main">
     
     <!--头部导航-->
     <form action="/">
       <van-search
         v-model="value"
         placeholder="请输入搜索关键词"
         show-action
        
         @cancel="onCancel"
       />
     </form>


    <div class="content">
		<div v-show="value == ''">
			<p class="grey text_center">搜索指定类目</p>
			<van-Row>
				<van-Col span="11" class="theme_color text_right">产权证号</van-Col>
				<van-Col span="2" class="theme_color text_right"></van-Col>	
				<van-Col span="11" class="theme_color text_left">房产地址</van-Col> 
			</van-Row>
			 <van-Row class="padding-top-16">
				 <van-Col span="11" class="theme_color text_right">产权人</van-Col>
				 <van-Col span="2" class="theme_color text_right"></van-Col>	
				 <van-Col span="11" class="theme_color text_left">借款人</van-Col>  
			 </van-Row>
		</div>
		<div v-show="value != ''" >
			<p class="grey text_center">暂无记录...</p>
		
		</div>
    </div>
        
    </div>
</template>

<script>

	import NavBar from '@/components/navBar'
	import Vue from 'vue';
	import { Search,Row,Col } from 'vant';

	Vue.use(Search);
 export default {

  data() {
    return {
      title : '搜索',
	  value:'',
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
	onCancel:function(){
		 this.$router.go(-1);
	},
	
  },
  
  //计算属性
  computed: {

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
		margin: 0px;
		background-color: rgb(238,238,238);
		min-height: 756px;
	}
	.grey{
		color: #999999;
		
	}
	.theme_color{
		color: #4c62e7;
	}
	.text_right{
		text-align: right;
	}
	.text_left{
		text-align: left;
	}
	.text_center{
		text-align: center;
	}
	.padding-top-16{
		padding-top: 16px;;
	}
	.van-search .van-cell{
		border-radius: 14px ;
		border: 1px solid #cccccc;
		padding-left: 8px;
	}
	.van-search__action{
		color: #4c62e7;
	}
</style>