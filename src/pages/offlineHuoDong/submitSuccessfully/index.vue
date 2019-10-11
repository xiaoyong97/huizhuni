<template>
  <!--提交成功页-->
  <div class="main">
   
    <div class="content">
      <van-nav-bar :title='title' @click-left="onClickLeft" fixed>
        <van-icon name="arrow-left" slot="left"  size="24px" />
      </van-nav-bar>
    </div>
    
    <div>
      <div class="xiangQingBac" >

        <div class="huoDongMes">
          
          <van-row>
            <van-col span="7"></van-col>
            <van-col span="8">
              <div class="mesZhong">
                <img class="duiImg" src="../../../assets/images/other/success@2x.png"/></br>
                <div class="textDiv">提交成功</div>
                <div class="textDiv">等待<span style="color:#4c62e8">陈雪梅</span>审核</div>
              </div>
            </van-col>
          </van-row>
          
          
        </div>
      </div>
    </div>
  </div>
  
</template>

<script>
//引入组件首字母大写
import TabBar from '@/components/tabBar';
import { Divider } from 'vant';
import { Checkbox, CheckboxGroup } from 'vant';
export default {

  //基础数据存放处
  data (){
     return {
        title : '新建活动',
      
     }
  },

  //数据预加载
  created : function(){

  },

  //网页加载完成
  mounted : function(){
    
  },
  
  //声明方法
  methods : {
    
    go : function(){
      this.$router.push('/more');
    },
    //返回上一级
    onClickLeft() {
      //this.$router.push('/offlineHuoDong');
      this.$router.go(-1);
    },
   
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
  //
  .xiangQingBac{
    width: 100%;
    min-height: 620px;
    height: 100%;
    overflow: auto;
    margin: 0px;
    background-color: #E7EAF5;
  } 
  .huoDongMes{
    width: 100%;
    height:250px;
    margin-top: 20px;
    background-color: white;
  }

  .mesZhong{
    width:150px;
    height:220px;
  }
  .duiImg{
    width:100px;
    height:100px;
    margin-top:30px;;
    margin-left:25px;;
  }
  .textDiv{
    width:100%;
    text-align:center;
    margin-top:10px;
    font-size: 16px;
  }
</style>
