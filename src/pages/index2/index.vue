<template>
  
  <div class="main">
   
    <div class="content">
      <TabBar/>
      <!--<van-nav-bar :title='title' left-text="抢单" right-text="已抢单" @click-left="onClickLeft"  @click-right="onClickRight" fixed/>-->
      <!--<van-nav-bar title="标题" left-text="抢单" right-text="已抢单" @click-left="onClickLeft" @click-right="onClickRight" fixed/>-->
      
      <van-row  gutter="10" class="daohangKuang">
        <van-col span="7"></van-col>
        <van-col span="11"><div >
          <van-tabs class="daoHangQie" type="card" color="#1989fa">
            <van-tab >
              <div slot="title" @click="onClickLeft" class="navLeft">
                  抢单
              </div>
              <div style="width:375px;">
              </div>
            </van-tab>
            <van-tab> 
              <div  class="navRight" @click="onClickRight" slot="title">
                已抢单
              </div>
            </van-tab>
          </van-tabs>
        </div></van-col>
        <van-col span="6"><van-icon  @click="searchBut" name="search" size="22px" style="margin-top:15px;float:right;"/></van-col>
      </van-row>
     
    </div>
 

  </div>
  
</template>

<script>
//引入组件首字母大写
import TabBar from '@/components/tabBar';
import { Dialog } from 'vant';
import { Divider } from 'vant';
export default {

  //基础数据存放处
  data (){
     return {
       
       
     }
  },

  //数据预加载
  created : function(){

  },

  //网页加载完成
  mounted : function(){
    this.onClickLeft()
  },
  
  //声明方法
  methods : {
    
    go : function(){
      this.$router.push('/more');
    },
    //抢单按钮,跳到抢单页面
    onClickLeft(){
      this.$router.push('/grabSingle');
    },
    //已抢单按钮,跳到抢单页面
    onClickRight(){
      this.$router.push('/grabSingleYi');
    },
    //点击打开搜索
    searchBut(){
      this.$router.push('/searchShang');
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
  .daohangKuang{
    position: fixed;
    top:0px;
    width:100%;
    height:50px;
    margin-top:0px;
    line-height:50px;
  }
  .daoHangQie{
    width:150px;
    margin-top:10px;
    padding:0px;
  }
  .navLeft{ 
    border-bottom-left-radius:17px;
    border-top-left-radius: 17px;
  }
  .navRight{ 
    border-radius: 10px;
    border-bottom-right-radius:
    7px;border-top-right-radius: 7px;
  }
  .qiangDanTabs{
    padding-bottom: 50px;
  }
  .qiangDanTabs .bac{
    width: 100%;
    height: auto;
    margin: 0px;
    padding-top: 1px;
    padding-bottom: 8px;
    background-color: #E7EAF5;
  }
  .qiangDanTabs .daiWanCheng{
    width: 90%;
    height:174px;
    margin: 8px auto 0px auto;
    border-radius: 10px;
    padding-left: 10px;
    padding-right: 10px;
    background-color: white;
  }
  .daiWanCheng .qiangDanCol{
    line-height:20px;
    margin-top:15px;
  }
  .qiangDanCol .qiangGongSi{
    float: left;
    max-width:170px;
    font-weight:bold;
    font-size:15px;
    color: rgb(51,51,51);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .qiangDanCol .qiangGongLu{
    font-size:11px;
  }
  .jingZhuenWan{
    width: 36px;
    height: 34px;
    color: white;
    line-height: 12px;
    padding-top:4px;
    text-align: center;
    font-size: 4px;
    background-size: 100%;
    background-image: url(../../assets/images/Label1@2x.png);
  }
  .yunShuiDaiWan{
    width: 56px;
    height: 34px;
    color: white;
    line-height: 12px;
    text-align: center;
    padding-top:4px;
    font-size: 5px;
    background-image: url(../../assets/images/Label2@2x.png);
    background-size: 100%;
  }
  .kuang {
    font-weight: bold;
    height:36px;
    margin-top:12px;
    margin-bottom:5px;
    padding:auto;
  }
  .kuang .kuangHang{
    height: 42px;
    border-radius: 5px;
    border:1px dashed rgb(76,98,232);
  }
  .kuang .kuangHangDi{
    height: 42px;
    border-radius: 5px;
    border:1px dashed orange;
  }
  .kuang .kuangHangDi .kuangBottom{
    color: orange;
  }
  .kuang .kuangTop{
    width:100%;
    line-height: 21px;
    color: rgb(51,51,51);
    text-align: center;
    font-size: 13px;
  }
   .kuang .kuangBottom{
    width:100%;
    color: rgb(76,98,232);
    text-align: center;
    line-height: 15px;
    font-size: 13px;
  }
  .BKuang{
    width: 55px;
    line-height:20px;
    margin-top:14px;
    font-size: 10px;
    border-radius: 15px;
    text-align: center;
    color: rgb(76,98,232);;
    box-shadow:0 0 1px rgb(76,98,232);
    border:1px solid rgb(76,98,232);
  }
  .daiWanCheng .timeKuang{
    width:65%;
    line-height:40px;
    float: left;
    font-size: 12px;
    color:rgb(102,102,102);
  }
  .daiWanCheng .timeKuang span{
    font-size: 14px;
  }
  .daiWanCheng .isKuang{
    float:right;
    line-height:40px;
    padding-right: 15px;
    font-size: 16px;
    color: green;
  }
  .daiWanCheng .isKuang .kuangFangBut{
    height: 25px;;
    line-height: 25px;
    width:100px;
    font-size: 14px;
  }
  .fangButClass{
    margin: 15px 0px 10px 80px ;
  }

  //部分
  .huaTime{
    float: right;
    width: 80px;
    font-size: 12px;
    line-height: 15px;
    margin-top: 10px;
   }
  .huaTime .timeSpan{
    float: right;
    line-height: 20px;
    margin-right:12px;
  }
  .timeKuang .sliderHua{
    margin-top:20px;
    margin-left: 42px;
    width:75%;
  }
  .timeKuang .sliderHua .custom-button{
    line-height: 26px;
    width: 80px;
    font-size: 13px;
    text-align: center;
    border-radius: 13px;
    background-color: rgb(76,98,232);
    color: white;
  }

</style>
