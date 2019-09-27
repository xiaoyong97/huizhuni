<template>
  
  <div class="main">
   
   <!--头部-->
   <van-nav-bar
    :title='title'
    fixed
   />
  
  <div class="content">
    <div class="msg">这是一个主页...</div>
    <div style="color:blue;font-weight: bold;text-align:center;padding:20px;" @click="go">跳转</div>
  </div>
  
    

  <!--tabbar-->
  <TabBar/>

  </div>
  
</template>

<script>
//引入组件首字母大写
import TabBar from '@/components/tabBar'
export default {

  //基础数据存放处
  data (){
     return {
       title : '主页'
     }
  },

  //数据预加载
  created : function(){

    console.log('hello world');
    
  },

  //网页加载完成
  mounted : function(){
    
  },
  
  //声明方法
  methods : {
    
    go : function(){
      this.$router.push('/more');
    }
    

  },
  
  //计算属性
  computed: {

  },


  components: {
    TabBar
  }
}
</script>

<style lang="scss" scoped>
.msg{
  text-align: center;
  padding:10px;
}
</style>
