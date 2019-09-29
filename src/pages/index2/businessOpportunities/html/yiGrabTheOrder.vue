<template>
  
  <div class="main">
    <div class="bac">
      <div class="daiWanCheng">
        <van-row >
          <van-col class="qiangDanCol" span="17">
            <span class="qiangGongSi">新野摸具有限公司</span><span class="qiangGongLu">(<20KM)</span>
          </van-col>
          <van-col style="line-height:20px;" span="3">
            <div class="jingZhuenWan">精准</br>测额</div>
          </van-col>
          <van-col style="line-height:20px;" span="4">
            <div class="yunShuiDaiWan">云税贷</br>破冰行动</div>
          </van-col>
        </van-row>
        <van-row gutter="15">
          <van-col class="kuang" span="6">
            <div class="kuangHang">
              <div class="kuangTop">信用快贷</div><div class="kuangBottom">200万</div>
            </div>
          </van-col>
          <van-col class="kuang" span="6">
            <div class="kuangHangDi">
              <div class="kuangTop">抵押快贷</div><div class="kuangBottom">500万</div>
            </div>
          </van-col>
          <van-col class="kuang" span="6">
            <div class="kuangHang">
              <div class="kuangTop">交易快贷</div><div class="kuangBottom">300万</div>
            </div>
          </van-col>
          <van-col class="kuang" span="6">
            <div class="kuangHang">
              <div class="kuangTop">质押快贷</div><div class="kuangBottom">800万</div>
            </div>
          </van-col>
        </van-row>
        <van-row  gutter="10">
          <van-col><div class ="BKuang" >一般户</div></van-col>
          <van-col><div class ="BKuang" >结算户</div></van-col>
          <van-col><div class ="BKuang" >企业征信</div></van-col>
          <van-col><div class ="BKuang" >个人征信</div></van-col>
        </van-row>
        <van-row  gutter="10">
          <div><div class ="timeKuang" ><span>认领时间：</span>2019/08/21 &nbsp; 18:21</div><div class ="isKuang" >已完成</div></div>
        </van-row>
      </div>

      
      <div class="daiWanCheng">
        <van-row >
          <van-col class="qiangDanCol" span="17">
            <span class="qiangGongSi">新野摸具有限公司</span><span class="qiangGongLu">(<20KM)</span>
          </van-col>
          <van-col style="line-height:20px;" span="3">
            <div class="jingZhuenWan">精准</br>测额</div>
          </van-col>
          <van-col style="line-height:20px;" span="4">
            <div class="yunShuiDaiWan">云税贷</br>破冰行动</div>
          </van-col>
        </van-row>
        <van-row gutter="15">
          <van-col class="kuang" span="6">
            <div class="kuangHang">
              <div class="kuangTop">信用快贷</div><div class="kuangBottom">200万</div>
            </div>
          </van-col>
          <van-col class="kuang" span="6">
            <div class="kuangHangDi">
              <div class="kuangTop">抵押快贷</div><div class="kuangBottom">500万</div>
            </div>
          </van-col>
          <van-col class="kuang" span="6">
            <div class="kuangHang">
              <div class="kuangTop">交易快贷</div><div class="kuangBottom">300万</div>
            </div>
          </van-col>
          <van-col class="kuang" span="6">
            <div class="kuangHang">
              <div class="kuangTop">质押快贷</div><div class="kuangBottom">800万</div>
            </div>
          </van-col>
        </van-row>
        <van-row  gutter="10">
          <van-col><div class ="BKuang" >一般户</div></van-col>
          <van-col><div class ="BKuang" >结算户</div></van-col>
          <van-col><div class ="BKuang" >企业征信</div></van-col>
          <van-col><div class ="BKuang" >个人征信</div></van-col>
        </van-row>
        <van-row  gutter="10">
          <div><div class ="timeKuang" ><span>认领时间：</span>2019/08/21 &nbsp; 18:21</div><div class ="isKuang" >已失效</div></div>
        </van-row>
      </div>
      
    </div>
  </div>
  
</template>

<script>
//引入组件首字母大写
import TabBar from '@/components/tabBar'
export default {

  //基础数据存放处
  data (){
     return {
       title : '商2机',
       activeName: 'b',
       activeTabs:'a'
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
  .bac{
    width: 100%;
    height: 100%;
    margin: 0px;
    padding-top: 1px;
    padding-bottom: 8px;
    background-color: #E7EAF5;
  }
  .daiWanCheng{
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
    font-weight:bold;
    font-size:15px;
    color: rgb(51,51,51);
    // overflow: hidden;
    // text-overflow: ellipsis;
    // white-space: nowrap;
  }
  .qiangDanCol .qiangGongLu{
    font-size:11px;
  }
  .daiWanCheng .jingZhuenWan{
    width: 36px;
    height: 34px;
    color: white;
    line-height: 12px;
    padding-top:4px;
    text-align: center;
    font-size: 4px;
    background-image: url(../../assets/images/Label1@2x.png);
    background-size: 100%;
  }
  .daiWanCheng .yunShuiDaiWan{
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
  .daiWanCheng .BKuang{
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
</style>
