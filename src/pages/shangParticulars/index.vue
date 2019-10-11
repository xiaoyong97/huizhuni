<template>
  <!--商机详情页-->
  <div class="main">
   
    <div class="content">
      <van-nav-bar :title='title' @click-left="onClickLeft" fixed>
        <van-icon name="arrow-left" slot="left"  size="24px" />
      </van-nav-bar>
    </div>
    
    <div>
      <div class="xiangQingBac">
            <div class="biaoQian">
              <div class="logoHang"><div class="logoLeft"> </div><div class="logoRight">企业标签</div></div>
              <van-row  class="biaoQianLie" gutter="10">
                <van-col  v-for="item in enterprise.EnterpriseLabel"><div class ="BKuang" >{{item.name}}</div></van-col>
              </van-row>
            </div>
            <div class="xinXi">
              <div>
                <van-col span="17">
                  <div class="logoHang"><div class="logoLeft"> </div><div class="logoRight">企业详细信息</div></div>
                </van-col>
                <van-col style="line-height:20px;" span="4"></van-col>
                <van-col style="line-height:20px;" span="3">
                  <div class="jingZhuenWan">精准</br>测额</div>
                </van-col>
              </div>
              <div class="mesKang">
                <van-row>
                  <van-col class="mesKangLeft" span="8">企业名称</van-col>
                  <van-col class="mesKangRight" span="16">{{enterprise.companyName|qianDanText(textJueIsOk)}}</van-col>
                </van-row>
                <van-row>
                  <van-col class="mesKangLeft" span="8">联系人</van-col>
                  <van-col class="mesKangRight" span="16">{{enterprise.principalName|principaText(textJueIsOk)}}</van-col>
                </van-row>
                <van-row>
                  <van-col class="mesKangLeft" span="8">联系电话</van-col>
                  <van-col class="mesKangRight" span="16">{{enterprise.phone|phoneText(textJueIsOk)}}</van-col>
                </van-row>
                <van-row>
                  <van-col class="mesKangLeft" span="8">企业注册地址</van-col>
                  <van-col class="mesKangRight" span="16">{{enterprise.address}}</van-col>
                </van-row>
                <van-row>
                  <van-col class="mesKangLeft" span="8">所属行业</van-col>
                  <van-col class="mesKangRight" span="16">{{enterprise.Subordinate}}</van-col>
                </van-row>
                <van-row>
                  <van-col class="mesKangLeft" span="8">经营范围</van-col>
                  <van-col class="mesKangRight" span="16">{{enterprise.scopeBusiness}}</van-col>
                </van-row>
                <van-row>
                  <van-col class="mesKangLeft" span="8">成立日期</van-col>
                  <van-col class="mesKangRight" span="16">{{enterprise.establishTime}}</van-col>
                </van-row>
                <van-row>
                  <van-col class="mesKangLeft" span="8">是否存量客户</van-col>
                  <van-col class="mesKangRight" span="16">{{enterprise.whether}}</van-col>
                </van-row>
                <van-row>
                  <van-col class="mesKangLeft" span="8">精准测额时间</van-col>
                  <van-col class="mesKangRightTime" span="16">{{enterprise.accurateTime}}</van-col>
                </van-row>
                <van-row>
                  <van-col class="mesKangLeft" span="8">申贷意向时间</van-col>
                  <van-col class="mesKangRightTime" span="16">{{enterprise.CreditTime}}</van-col>
                </van-row>
              </div>
              <div class="eDu">
                <van-divider style="margin-top: 10px;margin-bottom: 10px;"/>
                <div class="logoHang"><div class="logoLeft"> </div><div class="logoRight">产品额度</div></div>
                <van-row gutter="15">
                  <van-col class="kuang" span="6">
                    <div class="kuangHangDi" v-if="statusOne"><!--橘色状态-->
                      <div class="kuangTop">信用快贷</div><div class="kuangBottom">{{enterprise.moneyOne}}</div>
                    </div>
                    <div class="kuangHang" v-if="!statusOne">
                      <div class="kuangTop">信用快贷</div><div class="kuangBottom">{{enterprise.moneyOne}}</div>
                    </div>
                  </van-col>
                  <van-col class="kuang" span="6">
                    <div class="kuangHangDi" v-if="statusTwo"><!--橘色状态-->
                      <div class="kuangTop">抵押快贷</div><div class="kuangBottom">{{enterprise.moneyTwo}}</div>
                    </div>
                    <div class="kuangHang" v-if="!statusTwo">
                      <div class="kuangTop">抵押快贷</div><div class="kuangBottom">{{enterprise.moneyTwo}}</div>
                    </div>
                  </van-col>
                  <van-col class="kuang" span="6">
                    <div class="kuangHangDi" v-if="statusThree"><!--橘色状态-->
                      <div class="kuangTop">交易快贷</div><div class="kuangBottom">{{enterprise.moneyThree}}</div>
                    </div>
                    <div class="kuangHang" v-if="!statusThree">
                      <div class="kuangTop">交易快贷</div><div class="kuangBottom">{{enterprise.moneyThree}}</div>
                    </div>
                  </van-col>
                  <van-col class="kuang" span="6">
                    <div class="kuangHangDi" v-if="statusFour"><!--橘色状态-->
                      <div class="kuangTop">质押快贷</div><div class="kuangBottom">{{enterprise.moneyFour}}</div>
                    </div>
                    <div class="kuangHang" v-if="!statusFour">
                      <div class="kuangTop">质押快贷</div><div class="kuangBottom">{{enterprise.moneyFour}}</div>
                    </div>
                  </van-col>
                </van-row>
              </div>
            </div>
            <div class="botButDiv"><van-button class="botQianDanBut" round type="info" @click="xiangQingQianDan" v-if="qianDanIsOk">抢单</van-button></div>
            <div class="botButDiv"><van-button class="botQianDanBut" round type="info" @click="xiangQingFangQi" v-if="fansQiIsOk">放弃</van-button></div>
           
          </div>
          
        <!--dialog已抢单放弃按钮弹出框-->
        <van-dialog v-model="fangQiButShow" title="请选择放弃原因" :show-cancel-button="true" confirm="fangQiConfirm()">
          <van-radio-group v-model="fangQiRadio">
            <van-radio class="fangButClass" name="1">无法联系客户</van-radio>
            <van-radio class="fangButClass" name="2">客户无贷款意愿</van-radio>
            <van-radio class="fangButClass" name="3">客户条件不符合</van-radio>
          </van-radio-group>
        </van-dialog>
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
       title : '商机详情',
       id:this.$route.params.id,//跳转参数id
       qianDanIsOk: true,
       fansQiIsOk: false,
       fangQiButShow: false,
       fangQiRadio: 1,
       enterprise:[],//接受显示数据
       enterpriseOne:{
         EnterpriseLabel:[//企业标签
           {name:'法定代表人'},
           {name:'个人征信'},
           {name:'绑定惠懂你'},
           {name:'联系电话'},
           {name:'精准测额'},
           {name:'信贷准入'},
           {name:'申贷意愿'},
         ],
         companyName: '青岛智慧科技有限公司', //公司名称
         principalName: '王光明',//联系人
         phone: '13818886688',//联系电话
         address: '山东省青岛市城阳区惜福镇王沙路1616号',//企业注册地址
         Subordinate: '软件和信息技术服务行业',//所属行业
         scopeBusiness: '计算机软硬件的技术开发，技术咨询，技术转让，技术服务，数据库处理，经济信息咨询，经营电子商务，计算机编程',//经营范围
         establishTime: "2012年9月20日",//成立日期
         whether: '否',//是否存量客户
         accurateTime: '2019年10月12日',//精准测额时间
         CreditTime: '2019年10月12日',//申贷意愿时间
         moneyOne:'188万',
         moneyTwo:'850万',
         moneyThree:'300万',
         moneyFour:'800万',
       },
       enterpriseTwo:{
         EnterpriseLabel:[//企业标签
           {name:'法定代表人'},
           {name:'个人征信'},
           {name:'企业征信'},
           {name:'基本户'},
           {name:'一般户'},
           {name:'绑定惠懂你'},
           {name:'联系电话'},
           {name:'企业网银'},
           {name:'个人网银'},
           {name:'手机银行'},
           {name:'精准测额'},
           {name:'申贷意愿'},
         ],
         companyName: '广州市睿智防水电器股份有限公司', //公司名称
         principalName: '艾仲华',//联系人
         phone: '13702137765',//联系电话
         address: '广州市高新技术产业开发区迎宾大道188号',//企业注册地址
         Subordinate: '计算机，通信和其他电子设备制造业',//所属行业
         scopeBusiness: '电子元件及组件制造：货物进出口：电子元器件批发：技术进出口：电器辅件',//经营范围
         establishTime: "2009年3月12日",//成立日期
         whether: '是',//是否存量客户
         accurateTime: '2019年10月12日',//精准测额时间
         CreditTime: '2019年10月12日',//申贷意愿时间
         moneyOne:'188万',
         moneyTwo:'850万',
         moneyThree:'300万',
         moneyFour:'800万',
       },
       textJueIsOk: false,//判断是否抢单成功用于企业信息打码,未成功false，成功true
       //四个快贷状态,true为橘色
       statusOne: false,//1信用快贷
       statusTwo: false,//2抵押快贷
       statusThree: false,//3交易快贷
       statusFour: false,//4质押快贷
     }
  },

  //数据预加载
  created : function(){

  },

  //网页加载完成
  mounted : function(){
    this.GetDateList()//初始化数据
  },
  
  //声明方法
  methods : {
    
    go : function(){
      this.$router.push('/more');
    },
    //获取初始化数据
    GetDateList(){
      if(this.id==1){
        this.enterprise=this.enterpriseOne
        this.statusOne=true//1信用快贷
        this.statusTwo=true//2抵押快贷
        this.statusThree=false//3交易快贷
        this.statusFour=false//4质押快贷
      }else if(this.id==2){
        this.enterprise=this.enterpriseTwo
        this.statusOne=false//1信用快贷
        this.statusTwo=true//2抵押快贷
        this.statusThree=false//3交易快贷
        this.statusFour=false//4质押快贷
      }
    },
    //商机详情抢单按钮
    xiangQingQianDan(){
      Dialog.alert({
        title: '',
        message: '抢单成功'
      }).then(() => {
        this.title=this.enterpriseTwo.companyName
        this.qianDanIsOk= false
        this.fansQiIsOk= true
        this.textJueIsOk=true
      });
    },
    //商机详情放弃按钮
    xiangQingFangQi(){
      //this.fangQiButShow = true
      Dialog.alert({
        title: '',
        message: '已放弃订单'
      }).then(() => {
        this.qianDanIsOk= true
        this.fansQiIsOk= false
        this.textJueIsOk=false
      });
    },
    //放弃弹窗确定按钮
    fangQiConfirm(){
      // Dialog.alert({
      //   title: '',
      //   message: '已放弃订单'
      // }).then(() => {
      //   this.qianDanIsOk= true
      //   this.fansQiIsOk= false
      //   this.textJueIsOk=false
      // });
    },
    //返回上一级
    onClickLeft() {
      this.$router.go(-1);
    }

  },
  //vue过滤器
  filters: {
    //文字抢单前公司字体截取
    qianDanText(value,isOk){
      if(isOk==false){
        return value.slice(0,2) + '**********'
      }
      return value
    },
    //文字抢单前负责人字体截取
    principaText(value,isOk){
      if(isOk==false){
        return value.slice(0,1) + '**'
      }
      return value
    },
    //文字抢单前电话字体截取
    phoneText(value,isOk){
      if(isOk==false){
        return value.slice(0,3) + '****' +value.slice(7,11) 
      }
      return value
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
    min-width: 40px;
    line-height:20px;
    margin-top:14px;
    font-size: 10px;
    border-radius: 10px;
    text-align: center;
    padding-left:5px;
    padding-right:5px;
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
    min-height:78px;
    margin: 8px auto 0px auto;
    border-radius: 10px;
    padding-left: 10px ;
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
  .biaoQianLie {
    padding-left: 10px;
    padding-bottom: 10px;
  }
  .xiangQingBac .xinXi{
    width: 90%;
    height:auto;
    margin: 8px auto 0px auto;
    border-radius: 10px;
    padding-left: 10px;
    padding-bottom: 30px;
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
  .mesKangRightTime{
    line-height: 20px;
    margin-top:5px;
    font-size: 13px;
    color:red;
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
  //放弃弹窗
  .fangButClass{
    margin: 15px 0px 10px 80px ;
  }
</style>
