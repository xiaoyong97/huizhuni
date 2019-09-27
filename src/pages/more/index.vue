<template>
    <div class="main">
     
     <!--头部导航-->
     <NavBar :title="title"/>


    <div class="content">
        <div style="text-align:center;">这是一个内页</div>   
    </div>
        
    </div>
</template>

<script>

 import NavBar from '@/components/navBar'

 export default {

  data() {
    return {
      title : '更多'
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

  },

  //引入组件
  components: {
    NavBar
  }


 }
</script>

<style lang="scss" scoped>
// scoped 表示私有样式

</style>