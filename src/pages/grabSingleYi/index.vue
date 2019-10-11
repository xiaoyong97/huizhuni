<template>
  <!--商机已抢单页-->
  <div class="main">
   
    <div class="content">
      <div id="yiQian">
        <TabBar/>
      </div>
       <!--头部导航-->
      <van-row  gutter="10" class="daohangKuang">
        <van-col class="skipCaiDan">
           <van-row>
             <van-col span="10"></van-col>
            <van-col>
              <div class="navLeft" @click="onClickLeft">抢单</div>
            </van-col>
            <van-col>
              <div  class="navRight">已抢单</div>
            </van-col>
          </van-row>
        </van-col>
        <van-col>
          <van-icon @click="searchBut" name="search" size="24px" color="#4c62e7"/>
        </van-col>
      </van-row>
     
    </div>
    
    <div>
      <!--style="position: fixed;top: 34px; width:100%;"-->
      <van-tabs class="qiangDanTabs" v-model="activeName" line-width="33%" title-active-color="#1989fa" color="#1989fa"> 
        <!--                历史名单下拉图标-->
        <img src="../../assets/images/24/Pulldown@2x.png" class="menu1_open" v-show="menu!==1" @click="openMenu(1)">
        <img src="../../assets/images/24/Pullupselect@12x.png" class="menu1_open" v-show="menu==1" @click="closeMenu">
        <!--全部-->
        <van-tab title="全部" name="a">
         <div class="bac">
            
            <div class="daiWanCheng">
              <van-row>
                <van-col class="qiangDanCol" span="17">
                  <div class="qiangGongSi">新野摸具制造有限公司</div><div class="qiangGongLu">(<20KM)</div>
                </van-col>
                <div @click="yiParticularsCardBut(1)">
                  <van-col style="line-height:20px;" span="3">
                    <div class="jingZhuenWan">精准</br>测额</div>
                  </van-col>
                  <van-col style="line-height:20px;" span="4">
                    <div class="yunShuiDaiWan">云税贷</br>破冰行动</div>
                  </van-col>
                </div>
              </van-row>
              <van-row @click="yiParticularsCardBut(1)" gutter="15">
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
              <van-row  @click="yiParticularsCardBut(1)" gutter="10">
                <van-col><div class ="BKuang" >一般户</div></van-col>
                <van-col><div class ="BKuang" >结算户</div></van-col>
                <van-col><div class ="BKuang" >企业征信</div></van-col>
                <van-col><div class ="BKuang" >个人征信</div></van-col>
              </van-row>
              <van-row gutter="10">
                <div><div class ="timeKuang" @click="yiParticularsCardBut(1)"><span>认领时间：</span>2019/08/21 &nbsp; 18:21</div>
                  <div class ="isKuang" ><van-button @click="fangQiBut" class="kuangFangBut" round type="info">放弃</van-button></div>
                </div>
              </van-row>
            </div>

            <div class="daiWanCheng">
              <van-row >
                <van-col class="qiangDanCol" span="17">
                  <div class="qiangGongSi">新野摸具制造有限公司</div><div class="qiangGongLu">(<20KM)</div>
                </van-col>
                <div @click="yiParticularsCardBut(2)">
                  <van-col style="line-height:20px;" span="3">
                    <div class="jingZhuenWan">精准</br>测额</div>
                  </van-col>
                  <van-col style="line-height:20px;" span="4">
                    <div class="yunShuiDaiWan">云税贷</br>破冰行动</div>
                  </van-col>
                </div>
              </van-row>
              <van-row gutter="15" @click="yiParticularsCardBut(2)">
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
              <van-row  gutter="10"  @click="yiParticularsCardBut(2)">
                <van-col><div class ="BKuang" >一般户</div></van-col>
                <van-col><div class ="BKuang" >结算户</div></van-col>
                <van-col><div class ="BKuang" >企业征信</div></van-col>
                <van-col><div class ="BKuang" >个人征信</div></van-col>
              </van-row>
              <van-row  gutter="10"  @click="yiParticularsCardBut(2)">
                <div><div class ="timeKuang" ><span>认领时间：</span>2019/08/21 &nbsp; 18:21</div><div class ="isKuang" >已完成</div></div>
              </van-row>
            </div>
            
            
            <div class="daiWanCheng">
              <van-row >
                <van-col class="qiangDanCol" span="17">
                  <div class="qiangGongSi">新野摸具制造有限公司</div><div class="qiangGongLu">(<20KM)</div>
                </van-col>
                <div @click="yiParticularsCardBut(3)">
                  <van-col style="line-height:20px;" span="3">
                    <div class="jingZhuenWan">精准</br>测额</div>
                  </van-col>
                  <van-col style="line-height:20px;" span="4">
                    <div class="yunShuiDaiWan">云税贷</br>破冰行动</div>
                  </van-col>
                </div>
              </van-row>
              <van-row gutter="15" >
                <van-col class="kuang" span="6"  @click="yiParticularsCardBut(3)">
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
              <van-row  gutter="10" @click="yiParticularsCardBut(3)">
                <van-col><div class ="BKuang" >一般户</div></van-col>
                <van-col><div class ="BKuang" >结算户</div></van-col>
                <van-col><div class ="BKuang" >企业征信</div></van-col>
                <van-col><div class ="BKuang" >个人征信</div></van-col>
              </van-row>
              <van-row  gutter="10" @click="yiParticularsCardBut(3)">
                <div><div class ="timeKuang" ><span>认领时间：</span>2019/08/21 &nbsp; 18:21</div><div class ="isKuangOrange" >已退回</div></div>
              </van-row>
            </div>


            
            <div class="daiWanCheng">
              <van-row >
                <van-col class="qiangDanCol" span="17">
                  <div class="qiangGongSi">新野摸具制造有限公司</div><div class="qiangGongLu">(<20KM)</div>
                </van-col>
               <div @click="yiParticularsCardBut(4)">
                  <van-col style="line-height:20px;" span="3">
                    <div class="jingZhuenWan">精准</br>测额</div>
                  </van-col>
                  <van-col style="line-height:20px;" span="4">
                    <div class="yunShuiDaiWan">云税贷</br>破冰行动</div>
                  </van-col>
                </div>
              </van-row>
              <van-row gutter="15"  @click="yiParticularsCardBut(4)">
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
              <van-row  gutter="10" @click="yiParticularsCardBut(4)">
                <van-col><div class ="BKuang" >一般户</div></van-col>
                <van-col><div class ="BKuang" >结算户</div></van-col>
                <van-col><div class ="BKuang" >企业征信</div></van-col>
                <van-col><div class ="BKuang" >个人征信</div></van-col>
              </van-row>
              <van-row  gutter="10"  @click="yiParticularsCardBut(4)">
                <div><div class ="timeKuang" ><span>认领时间：</span>2019/08/21 &nbsp; 18:21</div><div class ="isKuangBlue" >已放弃</div></div>
              </van-row>
            </div>

            
            <div class="yiShiXiao">
              <van-row >
                <van-col class="qiangDanCol" span="17">
                  <div class="qiangGongSi">新野摸具制造有限公司</div><div class="qiangGongLu">(<20KM)</div>
                </van-col>
                <div @click="yiParticularsCardBut(5)">
                  <van-col style="line-height:20px;" span="3">
                    <div class="jingZhuenWan">精准</br>测额</div>
                  </van-col>
                  <van-col style="line-height:20px;" span="4">
                    <div class="yunShuiDaiWan">云税贷</br>破冰行动</div>
                  </van-col>
                </div>
              </van-row>
              <van-row gutter="15"b @click="yiParticularsCardBut(5)">
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
              <van-row  gutter="10"  @click="yiParticularsCardBut(5)">
                <van-col><div class ="BKuang" >一般户</div></van-col>
                <van-col><div class ="BKuang" >结算户</div></van-col>
                <van-col><div class ="BKuang" >企业征信</div></van-col>
                <van-col><div class ="BKuang" >个人征信</div></van-col>
              </van-row>
              <van-row  gutter="10"  @click="yiParticularsCardBut(5)">
                <div><div class ="timeKuang" ><span>认领时间：</span>2019/08/21 &nbsp; 18:21</div><div class ="isKuangGray" >已失效</div></div>
              </van-row>
            </div>
            
          </div>
        </van-tab>
        
        <!--待完成-->
        <van-tab title="待完成(1)" name="b" >
          <div class="bac">
            
            <div class="daiWanCheng">
              <van-row>
                <van-col class="qiangDanCol" span="17">
                  <div class="qiangGongSi">新野摸具制造有限公司</div><div class="qiangGongLu">(<20KM)</div>
                </van-col>
                <div @click="yiParticularsCardBut(1)">
                  <van-col style="line-height:20px;" span="3">
                    <div class="jingZhuenWan">精准</br>测额</div>
                  </van-col>
                  <van-col style="line-height:20px;" span="4">
                    <div class="yunShuiDaiWan">云税贷</br>破冰行动</div>
                  </van-col>
                </div>
              </van-row>
              <van-row @click="yiParticularsCardBut(1)" gutter="15">
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
              <van-row  @click="yiParticularsCardBut(1)" gutter="10">
                <van-col><div class ="BKuang" >一般户</div></van-col>
                <van-col><div class ="BKuang" >结算户</div></van-col>
                <van-col><div class ="BKuang" >企业征信</div></van-col>
                <van-col><div class ="BKuang" >个人征信</div></van-col>
              </van-row>
              <van-row gutter="10">
                <div><div class ="timeKuang" @click="yiParticularsCardBut(1)"><span>认领时间：</span>2019/08/21 &nbsp; 18:21</div>
                  <div class ="isKuang" ><van-button @click="fangQiBut" class="kuangFangBut" round type="info">放弃</van-button></div>
                </div>
              </van-row>
            </div>
          </div>
        </van-tab>

        <!--历史名单-->
        <van-tab title="历史名单(4)" name="c">
          <div class="bac">
            <div class="daiWanCheng" v-show="menu2_choose==1|menu2_choose==0">
              <van-row >
                <van-col class="qiangDanCol" span="17">
                  <div class="qiangGongSi">新野摸具制造有限公司</div><div class="qiangGongLu">(<20KM)</div>
                </van-col>
                <div @click="yiParticularsCardBut(2)">
                  <van-col style="line-height:20px;" span="3">
                    <div class="jingZhuenWan">精准</br>测额</div>
                  </van-col>
                  <van-col style="line-height:20px;" span="4">
                    <div class="yunShuiDaiWan">云税贷</br>破冰行动</div>
                  </van-col>
                </div>
              </van-row>
              <van-row gutter="15"  @click="yiParticularsCardBut(2)">
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
              <van-row  gutter="10"  @click="yiParticularsCardBut(2)">
                <van-col><div class ="BKuang" >一般户</div></van-col>
                <van-col><div class ="BKuang" >结算户</div></van-col>
                <van-col><div class ="BKuang" >企业征信</div></van-col>
                <van-col><div class ="BKuang" >个人征信</div></van-col>
              </van-row>
              <van-row  gutter="10" @click="yiParticularsCardBut(2)">
                <div><div class ="timeKuang" ><span>认领时间：</span>2019/08/21 &nbsp; 18:21</div><div class ="isKuang" >已完成</div></div>
              </van-row>
            </div>
            
            
            <div class="daiWanCheng"  v-show="menu2_choose==2|menu2_choose==0">
              <van-row >
                <van-col class="qiangDanCol" span="17">
                  <div class="qiangGongSi">新野摸具制造有限公司</div><div class="qiangGongLu">(<20KM)</div>
                </van-col>
                <div @click="yiParticularsCardBut(3)">
                  <van-col style="line-height:20px;" span="3">
                    <div class="jingZhuenWan">精准</br>测额</div>
                  </van-col>
                  <van-col style="line-height:20px;" span="4">
                    <div class="yunShuiDaiWan">云税贷</br>破冰行动</div>
                  </van-col>
                </div>
              </van-row>
              <van-row gutter="15" @click="yiParticularsCardBut(3)">
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
              <van-row  gutter="10" @click="yiParticularsCardBut(3)">
                <van-col><div class ="BKuang" >一般户</div></van-col>
                <van-col><div class ="BKuang" >结算户</div></van-col>
                <van-col><div class ="BKuang" >企业征信</div></van-col>
                <van-col><div class ="BKuang" >个人征信</div></van-col>
              </van-row>
              <van-row  gutter="10" @click="yiParticularsCardBut(3)">
                <div><div class ="timeKuang" ><span>认领时间：</span>2019/08/21 &nbsp; 18:21</div><div class ="isKuangOrange" >已退回</div></div>
              </van-row>
            </div>


            
            <div class="daiWanCheng"  v-show="menu2_choose==3|menu2_choose==0">
              <van-row >
                <van-col class="qiangDanCol" span="17">
                  <div class="qiangGongSi">新野摸具制造有限公司</div><div class="qiangGongLu">(<20KM)</div>
                </van-col>
                <div @click="yiParticularsCardBut(4)">
                  <van-col style="line-height:20px;" span="3">
                    <div class="jingZhuenWan">精准</br>测额</div>
                  </van-col>
                  <van-col style="line-height:20px;" span="4">
                    <div class="yunShuiDaiWan">云税贷</br>破冰行动</div>
                  </van-col>
                </div>
              </van-row>
              <van-row gutter="15" @click="yiParticularsCardBut(4)">
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
              <van-row  gutter="10" @click="yiParticularsCardBut(4)">
                <van-col><div class ="BKuang" >一般户</div></van-col>
                <van-col><div class ="BKuang" >结算户</div></van-col>
                <van-col><div class ="BKuang" >企业征信</div></van-col>
                <van-col><div class ="BKuang" >个人征信</div></van-col>
              </van-row>
              <van-row  gutter="10" @click="yiParticularsCardBut(4)">
                <div><div class ="timeKuang" ><span>认领时间：</span>2019/08/21 &nbsp; 18:21</div><div class ="isKuangBlue" >已放弃</div></div>
              </van-row>
            </div>

            
            <div class="yiShiXiao"  v-show="menu2_choose==4|menu2_choose==0">
              <van-row >
                <van-col class="qiangDanCol" span="17">
                  <div class="qiangGongSi">新野摸具制造有限公司</div><div class="qiangGongLu">(<20KM)</div>
                </van-col>
                <div @click="yiParticularsCardBut(5)">
                  <van-col style="line-height:20px;" span="3">
                    <div class="jingZhuenWan">精准</br>测额</div>
                  </van-col>
                  <van-col style="line-height:20px;" span="4">
                    <div class="yunShuiDaiWan">云税贷</br>破冰行动</div>
                  </van-col>
                </div>
              </van-row>
              <van-row gutter="15" @click="yiParticularsCardBut(5)">
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
              <van-row  gutter="10" @click="yiParticularsCardBut(5)">
                <van-col><div class ="BKuang" >一般户</div></van-col>
                <van-col><div class ="BKuang" >结算户</div></van-col>
                <van-col><div class ="BKuang" >企业征信</div></van-col>
                <van-col><div class ="BKuang" >个人征信</div></van-col>
              </van-row>
              <van-row  gutter="10" @click="yiParticularsCardBut(5)">
                <div><div class ="timeKuang" ><span>认领时间：</span>2019/08/21 &nbsp; 18:21</div><div class ="isKuangGray" >已失效</div></div>
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
         <!--         历史名单下拉菜单-->
    <div class='menu_popContainer'  v-show="menu!==-1">
        <div  class="menu1_choose_box" v-show="menu==1">
            <van-row class="choose_box_list" @click="menu2Choose(0)">
                <p class="menu1_choose_box_text " :class="menu2_choose == 0 ? 'blue' : '' ">全部历史</p>
            </van-row>
            <van-row class="choose_box_list" @click="menu2Choose(1)">
                <p class="menu1_choose_box_text " :class="menu2_choose == 1 ? 'blue' : '' ">已完成</p>
            </van-row>
            <van-row class="choose_box_list" @click="menu2Choose(2)">
                <p class="menu1_choose_box_text " :class="menu2_choose == 2 ? 'blue' : '' ">已退回</p>
            </van-row>
            <van-row class="choose_box_list" @click="menu2Choose(3)">
                <p class="menu1_choose_box_text " :class="menu2_choose == 3 ? 'blue' : '' ">已放弃</p>
            </van-row>
            <van-row class="choose_box_list" @click="menu2Choose(4)">
                <p class="menu1_choose_box_text " :class="menu2_choose == 4 ? 'blue' : '' ">已失效</p>
            </van-row>
        </div>
    </div>

            
    <img class="jiImg" @click="fuGaiTiaoIndex2" src="../../assets/images/48/Businessopportunityselected@2x.png"/>
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
       menu:-1,  //-1:不显示
       active:0,
       menu2_choose:0,
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
       active: 'b',
     }
  },

  //数据预加载
  created : function(){

  },

  //网页加载完成
  mounted : function(){
    this.activeB()
  },
  
  //声明方法
  methods : {
    
    go : function(){
      this.$router.push('/more');
    },
    //商机图标覆盖加跳转index2
    fuGaiTiaoIndex2(){
      this.$router.push('/index2');
    },
    //图标下拉
    openMenu (i){
      this.menu = i;
    },
    //图标上拉
    closeMenu (){
        this.menu = -1;
    },
    //下拉列表中列得点击事件
    menu2Choose(i){
        this.menu2_choose = i;
        this.menu = -1;
    },
    //已抢单中放弃按钮
    fangQiBut(){
      this.fangQiButShow = true
    },
    //抢单按钮,跳到抢单页面
    onClickLeft(){
      this.$router.push('/index2');
    },
    //已抢单按钮,跳到抢单页面
    onClickRight(){
      this.$router.push('/grabSingleYi');
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
    yiParticularsCardBut(stutasId){
      this.$router.push('/managementParticulars/'+stutasId);
    },
    //点击打开搜索
    searchBut(){
      this.$router.push('/searchShang');
    },

    activeB(){
      this.active="b"
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
<style>
  #yiQian .van-tabbar-item:nth-of-type(2){
    color:#4c62e7 !important;
  }
</style>
<style lang="scss" scoped>
  .jiImg{
    background-color: white;
    width:18px;
    height: 18px;;
    position: fixed;
    bottom:25px;
    left:103px;
    z-index: 1;
  }

  //头部导航
  .daohangKuang{
    position: fixed;
    top:0px;
    width:100%;
    z-index: 1;
    height:44px;
    line-height:44px;
    margin-top:0px;
    padding-top:10px;
  }
  .skipCaiDan{
    width: 90%;
    margin:auto;
  }
  .navLeft{ 
    width:60px;
    height:30px;
    line-height: 30px;
    font-size: 13px;
    text-align: center;
    border-bottom-left-radius:7px;
    border-top-left-radius: 7px;
    border:1px solid #4c62e7;
    color: #4c62e7;
  }
  .navRight{ 
    width:60px;
    height:30px;
    line-height: 30px;
    font-size: 13px;
    text-align: center;
    border-bottom-right-radius:7px;
    border-top-right-radius: 7px;
    border:1px solid #4c62e7;
    color: white;
    background-color: #4c62e7;
  }
  //结束
  //下拉图标及菜单
  .menu1_open{
      height: 18px;
      width: 18px;
      position: absolute;
      left: 93%;
      top:14px;
      z-index: 100;
  }
  .menu_popContainer{
      position: fixed;
      top: 90px;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0,0,0,0.3);
      z-index: 101;
  }
  .menu1_choose_box{
      position: relative;
      top:0px;
      left:67%;
      width: 33%;
      text-align: center;
      background-color: white;
  }
    .menu1_choose_box_text{
        line-height: 36px;
        color: #999999;
        font-size: 16px;
        margin-block-start:0;
        margin-block-end:0;
    }
  //结束
  .qiangDanTabs{
    padding-bottom: 50px;
  }
  .qiangDanTabs .bac{
    width: 100%;
    height: 509px;
    overflow: auto;
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
  .daiWanCheng .qiangDanCol .qiangGongSi{
    float: left;
    max-width:170px;
    font-weight:bold;
    font-size:15px;
    color: rgb(51,51,51);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .daiWanCheng .qiangDanCol .qiangGongLu{
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
    background-size: 100%;
    background-image: url(../../assets/images/Label1@2x.png);
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
  .daiWanCheng .kuang {
    font-weight: bold;
    height:36px;
    margin-top:12px;
    margin-bottom:5px;
    padding:auto;
  }
  .daiWanCheng .kuang .kuangHang{
    height: 42px;
    border-radius: 5px;
    border:1px dashed rgb(76,98,232);
  }
  .daiWanCheng .kuang .kuangHangDi{
    height: 42px;
    border-radius: 5px;
    border:1px dashed orange;
  }
  .daiWanCheng .kuang .kuangHangDi .kuangBottom{
    color: orange;
  }
  .daiWanCheng .kuang .kuangTop{
    width:100%;
    line-height: 21px;
    color: rgb(51,51,51);
    text-align: center;
    font-size: 13px;
  }
   .daiWanCheng .kuang .kuangBottom{
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

  //已失效灰色样式
  .qiangDanTabs .yiShiXiao{
    width: 90%;
    height:174px;
    margin: 8px auto 0px auto;
    border-radius: 10px;
    padding-left: 10px;
    padding-right: 10px;
    background-color: white;
  }
  .yiShiXiao .qiangDanCol{
    line-height:20px;
    margin-top:15px;
  }
  .yiShiXiao .qiangDanCol .qiangGongSi{
    float: left;
    max-width:170px;
    font-weight:bold;
    font-size:15px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .yiShiXiao .qiangDanCol .qiangGongLu{
    font-size:11px;
  }
  .yiShiXiao .jingZhuenWan{
    width: 36px;
    height: 34px;
    color: white;
    line-height: 12px;
    padding-top:4px;
    text-align: center;
    font-size: 4px;
    background-size: 100%;
    background-image: url(../../assets/images/Label1gray.png);
  }
  .yiShiXiao .yunShuiDaiWan{
    width: 56px;
    height: 34px;
    color: white;
    line-height: 12px;
    text-align: center;
    padding-top:4px;
    font-size: 5px;
    background-image: url(../../assets/images/Label2gray.png);
    background-size: 100%;
  }
  .yiShiXiao .kuang {
    font-weight: bold;
    height:36px;
    margin-top:12px;
    margin-bottom:5px;
    padding:auto;
  }
  .yiShiXiao .kuang .kuangHang{
    height: 42px;
    border-radius: 5px;
    border:1px dashed #B3B3B3;
  }
  .yiShiXiao .kuang .kuangHangDi{
    height: 42px;
    border-radius: 5px;
    border:1px dashed #B3B3B3;
  }
  .yiShiXiao .kuang .kuangHangDi .kuangBottom{
    color: #B3B3B3;
  }
  .yiShiXiao .kuang .kuangTop{
    width:100%;
    line-height: 21px;
    color: #B3B3B3;
    text-align: center;
    font-size: 13px;
  }
   .yiShiXiao .kuang .kuangBottom{
    width:100%;
    color: #B3B3B3;
    text-align: center;
    line-height: 15px;
    font-size: 13px;
  }
  .yiShiXiao .BKuang{
    width: 55px;
    line-height:20px;
    margin-top:14px;
    font-size: 10px;
    border-radius: 15px;
    text-align: center;
    color: #B3B3B3;
    box-shadow:0 0 1px #B3B3B3;
    border:1px solid #B3B3B3;
  }
  .yiShiXiao .timeKuang{
    width:65%;
    line-height:40px;
    float: left;
    font-size: 12px;
    color:#B3B3B3;
  }
  .yiShiXiao .timeKuang span{
    font-size: 14px;
  }
  .yiShiXiao .isKuangGray{
    float:right;
    line-height:40px;
    padding-right: 15px;
    font-size: 16px;
    color: #B3B3B3;
  }
  //失效结束

  
  .daiWanCheng .isKuang{
    float:right;
    line-height:40px;
    padding-right: 15px;
    font-size: 16px;
    color: green;
  }
  .daiWanCheng .isKuangBlue{
    float:right;
    line-height:40px;
    padding-right: 15px;
    font-size: 16px;
    color: rgb(76,98,232);
  }
  .daiWanCheng .isKuangOrange{
    float:right;
    line-height:40px;
    padding-right: 15px;
    font-size: 16px;
    color: orange;
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
