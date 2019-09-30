<template>
  
  <div class="main">
   
    <div class="content">
      <TabBar/>
      <van-nav-bar :title='title' left-text="抢单" right-text="已抢单" @click-left="onClickLeft"  @click-right="onClickRight" fixed/>
      <!--<van-nav-bar title="标题" left-text="抢单" right-text="已抢单" @click-left="onClickLeft" @click-right="onClickRight" fixed/>-->
    </div>
    
    <div>
      <!--style="position: fixed;top: 34px; width:100%;"-->
      <van-tabs class="qiangDanTabs" v-model="activeName" line-width="33%" color="#1989fa"> 
        <van-tab title="全部" name="a">
          <div class="bac" @click="yiParticularsCardBut">
            <div class="daiWanCheng">
              <van-row >
                <van-col class="qiangDanCol" span="17">
                  <div class="qiangGongSi">新野摸具制造有限公司</div><div class="qiangGongLu">(<20KM)</div>
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
                <van-col><div class ="BKuang" >一般户</div></van-col>
                <van-col><div class ="BKuang" >结算户</div></van-col>
                <van-col><div class ="BKuang" >企业征信</div></van-col>
                <van-col><div class ="BKuang" >个人征信</div></van-col>
              </van-row>
              <van-row  gutter="10">
                <div><div class ="timeKuang" ><span>认领时间：</span>2019/08/21 &nbsp; 18:21</div>
                  <div class ="isKuang" ><van-button @click="fangQiBut" class="kuangFangBut" round type="info">放弃</van-button></div>
                </div>
              </van-row>
            </div>

            
            <div class="daiWanCheng" @click="yiParticularsCardBut">
              <van-row >
                <van-col class="qiangDanCol" span="17">
                  <div class="qiangGongSi">北京大荣亚太科贸有限公司有限公司</div><div class="qiangGongLu">(<20KM)</div>
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
                <div><div class ="timeKuang" ><span>认领时间：</span>2019/08/21 &nbsp; 18:21</div>
                  <div class ="isKuang" ><van-button  @click="fangQiBut"  class="kuangFangBut" round type="info">放弃</van-button></div>
                </div>
              </van-row>
            </div>
          </div>
        </van-tab>

        <van-tab title="已抢单(2)" name="b" >
          <div class="bac">
            <div class="daiWanCheng">
              <van-row >
                <van-col class="qiangDanCol" span="17">
                  <div class="qiangGongSi">新野摸具制造有限公司</div><div class="qiangGongLu">(<20KM)</div>
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
                <van-col><div class ="BKuang" >一般户</div></van-col>
                <van-col><div class ="BKuang" >结算户</div></van-col>
                <van-col><div class ="BKuang" >企业征信</div></van-col>
                <van-col><div class ="BKuang" >个人征信</div></van-col>
              </van-row>
              <van-row  gutter="10">
                <div><div class ="timeKuang" ><span>认领时间：</span>2019/08/21 &nbsp; 18:21</div>
                  <div class ="isKuang" ><van-button @click="fangQiBut" class="kuangFangBut" round type="info">放弃</van-button></div>
                </div>
              </van-row>
            </div>

            
            <div class="daiWanCheng">
              <van-row >
                <van-col class="qiangDanCol" span="17">
                  <div class="qiangGongSi">北京大荣亚太科贸有限公司有限公司</div><div class="qiangGongLu">(<20KM)</div>
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
                <div><div class ="timeKuang" ><span>认领时间：</span>2019/08/21 &nbsp; 18:21</div>
                  <div class ="isKuang" ><van-button  @click="fangQiBut"  class="kuangFangBut" round type="info">放弃</van-button></div>
                </div>
              </van-row>
            </div>
          </div>
        </van-tab>

        <van-tab title="历史名单(4)" name="c">
          <div class="bac">
            <div class="daiWanCheng">
              <van-row >
                <van-col class="qiangDanCol" span="17">
                  <div class="qiangGongSi">新野摸具制造有限公司</div><div class="qiangGongLu">(<20KM)</div>
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
                  <div class="qiangGongSi">新野摸具制造有限公司</div><div class="qiangGongLu">(<20KM)</div>
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
                  <div class="qiangGongSi">新野摸具制造有限公司</div><div class="qiangGongLu">(<20KM)</div>
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
                  <div class="qiangGongSi">新野摸具制造有限公司</div><div class="qiangGongLu">(<20KM)</div>
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
        </van-tab>
      </van-tabs>
    </div>
     

    <!--dialog已抢单放弃按钮弹出框-->
    <van-dialog v-model="fangQiButShow" title="请选择放弃原因" show-cancel-button >
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
       title : '商2机',
       activeName: 'a',
       activeTabs:'a',
       fangQiButShow: false,
       fangQiRadio: 1,
       TheSorting1: 0,
       TheSorting2: 'a',
       TheSortings1: [
         { text: '默认排序', value: 0 },
         { text: '发布时间排序', value: 1 },
         { text: '距离排序', value: 2 },
       ],
       TheSortings2: [
         { text: '筛选', value: "a" },
         { text: '新款商品', value: "b" },
         { text: '活动商品', value: "c" }
       ],
       huaKuai: null,
       huaKuaiName: "滑动抢单",
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
    //已抢单中放弃按钮
    fangQiBut(){
      this.fangQiButShow = true
    },
    //抢单按钮,跳到抢单页面
    onClickLeft(){
      this.$router.push('/grabSingle');
    },
    //已抢单按钮,跳到抢单页面
    onClickRight(){
      this.$router.push('/yiGrabTheOrder');
    },
    //滑动进度变化且结束拖动后触发
    huaKuaiChange(){
      if(this.huaKuai==100){
        this.huaKuaiName="抢单中..."
        Dialog.alert({
          title: '',
          message: '抢单成功'
        }).then(() => {
          // on close
        });
      }else{
        this.huaKuaiName="滑动抢单"
      }
    },
    //点击信息卡背景打开详情信息
    yiParticularsCardBut(){
      this.$router.push('/managementParticulars');
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
