<template>
  <!--商机管理详情页-->
  <div class="main">
   
    <div class="content">
      <TabBar/>
      <van-nav-bar :title='title' @click-left="onClickLeft" fixed>
        <van-icon name="arrow-left" slot="left"  size="24px" />
      </van-nav-bar>
    </div>
    
    <div>
      <div class="xiangQingBac">
            <div class="biaoQian">
              <div class="logoHang"><div class="logoLeft"> </div><div class="logoRight">企业标签</div></div>
              <van-row  class="biaoQianLie" gutter="10">
                <van-col span="2"></van-col>
                <van-col><div class ="BKuang" >一般户</div></van-col>
                <van-col><div class ="BKuang" >结算户</div></van-col>
                <van-col><div class ="BKuang" >企业征信</div></van-col>
                <van-col><div class ="BKuang" >个人征信</div></van-col>
              </van-row>
            </div>
            <div class="xinXi">
              <div>
                <van-col span="17">
                  <div class="logoHang"><div class="logoLeft"> </div><div class="logoRight">企业纤细信息</div></div>
                </van-col>
                <van-col style="line-height:20px;" span="3">
                  <div class="jingZhuenWan">精准</br>测额</div>
                </van-col>
                <van-col style="line-height:20px;" span="4">
                  <div class="yunShuiDaiWan">云税贷</br>破冰行动</div>
                </van-col>
              </div>
              <div class="mesKang">
                <van-row>
                  <van-col class="mesKangLeft" span="8">企业名称</van-col>
                  <van-col class="mesKangRight" span="16">新野摸具制造有限公司</van-col>
                </van-row>
                <van-row>
                  <van-col class="mesKangLeft" span="8">联系人</van-col>
                  <van-col class="mesKangRight" span="16">李某某</van-col>
                </van-row>
                <van-row>
                  <van-col class="mesKangLeft" span="8">联系电话</van-col>
                  <van-col class="mesKangRight" span="16">13527283736</van-col>
                </van-row>
                <van-row>
                  <van-col class="mesKangLeft" span="8">企业联系地址</van-col>
                  <van-col class="mesKangRight" span="16">北京市朝阳区建国路1号科贸大厦</van-col>
                </van-row>
                <van-row>
                  <van-col class="mesKangLeft" span="8">经营范围</van-col>
                  <van-col class="mesKangRight" span="16">北京市朝阳区建国路1号科贸大厦北京市朝阳区建国路1号科贸大厦</van-col>
                </van-row>
                <van-row>
                  <van-col class="mesKangLeft" span="8">成立年限</van-col>
                  <van-col class="mesKangRight" span="16">4年</van-col>
                </van-row>
                <van-row>
                  <van-col class="mesKangLeft" span="8">是否存量客户</van-col>
                  <van-col class="mesKangRight" span="16">是</van-col>
                </van-row>
                <van-row>
                  <van-col class="mesKangLeft" span="8">精准测额时间</van-col>
                  <van-col class="mesKangRight" span="16">2019/08/15</van-col>
                </van-row>
                <van-row>
                  <van-col class="mesKangLeft" span="8">申贷意向时间</van-col>
                  <van-col class="mesKangRight" span="16">2019/07/21</van-col>
                </van-row>
              </div>
              <div class="eDu">
                  <van-divider style="margin-top: 10px;margin-bottom: 10px;"/>
                  <div class="logoHang"><div class="logoLeft"> </div><div class="logoRight">产品额度</div></div>
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
                </div><div class="eDu">
                <div class="logoHang"><div class="logoLeft"> </div><div class="logoRight">企业关系图谱</div></div>
                
                
              </div>
            </div>
            <div class="botButDiv"><van-button class="botQianDanBut" round type="info" @click="xiangQingQianDan">放弃</van-button></div>
           
          </div>
      </div>

      
    <!--dialog已抢单放弃按钮弹出框-->
    <van-dialog v-model="fangQiButShow" title="请选择放弃原因" show-cancel-button>
      <van-radio-group v-model="fangQiRadio">
        <van-radio class="fangButClass" name="1">无法联系客户</van-radio>
        <van-radio class="fangButClass" name="2">客户无贷款意愿</van-radio>
        <van-radio class="fangButClass" name="3">客户条件不符合</van-radio>
      </van-radio-group>
    </van-dialog>

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
       title : '新野摸具制造有限公司',
       fangQiButShow: false,
       fangQiRadio: 1,
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
    //商机管理放弃按钮
    xiangQingQianDan(){
      this.fangQiButShow = true
      // Dialog.alert({
      //   title: '',
      //   message: '放弃订单成功'
      // }).then(() => {
      //   // on close
      // });
    },
    //返回上一级
    onClickLeft() {
      this.$router.go(-1);
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
  .qiangDanTabs .bac{
    width: 100%;
    height: 100%;
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
    max-width:180px;
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
    margin-top:10px;
    margin-bottom:15px;
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

  //商机详情部分
  .xiangQingBac{
    width: 100%;
    height: 100%;
    margin: 0px;
    padding-top: 1px;
    padding-bottom: 48px;
    background-color: #E7EAF5;
  }
  .xiangQingBac .biaoQian{
    width: 90%;
    height:78px;
    margin: 8px auto 0px auto;
    border-radius: 10px;
    padding-left: 10px;
    padding-right: 10px;
    background-color: white;
  }
  .logoHang{
    width:60%;
    height: 30px;
    line-height: 30px;
  }
  .logoHang .logoLeft{
    float: left;
    width:10px;
    height: 20px;
    margin:5px 0px 0px 5px;
    background-color: rgb(76,98,232);
  }
  .logoHang .logoRight{
    margin-left: 25px;
    padding-top: 3px;
  }
  .biaoQianLie .BKuang{
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
  .xiangQingBac .xinXi{
    width: 90%;
    height:540px;
    margin: 8px auto 0px auto;
    border-radius: 10px;
    padding-left: 10px;
    padding-right: 10px;
    background-color: white;
  }
  .mesKangLeft{
    line-height: 20px;
    margin-top:5px;
    font-size: 13px;
    color:#B3B3B3;
  }
  .mesKangRight{
    line-height: 20px;
    margin-top:5px;
    font-size: 13px;
  }
  .botButDiv{
    line-height:40px;
    width:250px;
    margin: 20px auto;
  }
  .botButDiv .botQianDanBut{
    height:35px;
    line-height:35px;
    width:250px;
  }
</style>
