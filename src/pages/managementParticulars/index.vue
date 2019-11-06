<template>
  <!--商机管理详情页-->
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
                  <van-col class="mesKangRight" span="16">{{enterprise.companyName}}</van-col>
                </van-row>
                <van-row>
                  <van-col class="mesKangLeft" span="8">联系人</van-col>
                  <van-col class="mesKangRight" span="16">{{enterprise.principalName}}</van-col>
                </van-row>
                <van-row>
                  <van-col class="mesKangLeft" span="8">联系电话</van-col>
                  <van-col class="mesKangRight" span="16">{{enterprise.phone}}</van-col>
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
                  <van-col class="mesKangRight" span="16">{{enterprise.accurateTime}}</van-col>
                </van-row>
                <van-row>
                  <van-col class="mesKangLeft" span="8">申贷意向时间</van-col>
                  <van-col class="mesKangRight" span="16">{{enterprise.CreditTime}}</van-col>
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
                </div><div class="eDu">
                <div class="logoHang"><div class="logoLeft"> </div><div class="logoRight">企业关系图谱</div></div>
                  
                <div class="guanXiDiv">
                  <img class="guanXiImg" src="../../assets/images/1570483597(1).png" alt />
                </div>
                  <!--<img class="guanXiImg" src="../../assets/images/1570483597(1).png" alt />-->
                
              </div>  
            </div>
            <div class="botButDiv"><van-button class="botQianDanBut" round type="info" @click="xiangQingQianDan" v-show="typeStutas==1">放弃</van-button></div>
            <div class="botButDiv"><div class="boWanChengBut" v-show="typeStutas==2">已完成</div></div>
            <div class="botButDiv"><div class="botTuiHuiBut" v-show="typeStutas==3">已退回</div></div>
            <div class="botButDiv"><div class="botYiQianDanBut" v-show="typeStutas==4">已放弃</div></div>
            <div class="botButDiv"><div class="botShiXIaoBut" v-show="typeStutas==5">已失效</div></div>
           
          </div>
      </div>

      
    
    <!--dialog已抢单放弃按钮弹出框1-->
    <van-dialog v-model="fangQiButShowOne" @confirm="radioQueDing(1)" title="请选择放弃原因" show-cancel-button >
      <van-radio-group v-model="fangQiRadio">
        <van-radio class="fangButClass" name="1">无法联系客户</van-radio>
        <van-radio class="fangButClass" name="2">客户无贷款意愿</van-radio>
        <van-radio class="fangButClass" name="3">客户条件不符合</van-radio>
      </van-radio-group>
    </van-dialog>
    <!--dialog已抢单放弃按钮弹出框2-->
    <van-dialog v-model="fangQiButShowTwo" @confirm="radioQueDing(2)" title="请选择放弃原因" show-cancel-button >
      <van-radio-group v-model="fangQiRadio">
        <van-radio class="fangButClass" name="1">无法联系客户</van-radio>
        <van-radio class="fangButClass" name="2">客户无贷款意愿</van-radio>
        <van-radio class="fangButClass" name="3">客户条件不符合</van-radio>
      </van-radio-group>
    </van-dialog>
    <!--dialog已抢单放弃按钮弹出框3-->
    <van-dialog v-model="fangQiButShowThree" @confirm="radioQueDing(3)" title="请选择放弃原因" show-cancel-button >
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
       fangQiButShowOne: false,
       fangQiButShowTwo: false,
       fangQiButShowThree: false,
       fangQiRadio: 1,
       userId:this.$route.params.userId,//跳转参数用户id
       stutasId:this.$route.params.stutasId,//跳转参数状态id
       activeNameChuan:this.$route.params.activeNameChuan,//已抢单标签状态
       typeStutas: 0,//橘色状态
       userTypeId: 0,//用户id
       enterprise:[],//接受显示数据
       enterpriseOne:{//青岛智慧科技有限公司数据1
         EnterpriseLabel:[//企业标签
           {name:'法定代表人'},
           {name:'个人征信'},
           {name:'绑定惠懂你'},
           {name:'联系电话'},
           {name:'精准测额'},
           {name:'信贷准入'},
           {name:'申贷意愿'},
         ],
         companyName: '广州智慧科技有限公司', //公司名称
         principalName: '王光明',//联系人
         phone: '13814466688',//联系电话
         address: '广州市高新技术产业开发区迎宾大道88号',//企业注册地址
         Subordinate: '软件和信息技术服务行业',//所属行业
         scopeBusiness: '计算机软硬件的技术开发；技术咨询；技术转让；技术服务；数据库处理；经济信息咨询；经营电子商务；计算机编程',//经营范围
         establishTime: "2012年9月20日",//成立日期
         whether: '否',//是否存量客户
         accurateTime: '2019年10月12日',//精准测额时间
         CreditTime: '2019年10月12日',//申贷意愿时间
         moneyOne:'188万',
         moneyTwo:'850万',
         moneyThree:'300万',
         moneyFour:'800万',
       },
       enterpriseTwo:{//广州市睿智防水电器股份有限公司数据2
         EnterpriseLabel:[//企业标签
           {name:'法人'},
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
           {name:'信贷准入'},
           {name:'申贷意愿'},
         ],
         companyName: '广州市睿智防水电器股份有限公司', //公司名称
         principalName: '艾仲华',//联系人
         phone: '13702137765',//联系电话
         address: '广州市高新技术产业开发区迎宾大道188号',//企业注册地址
         Subordinate: '计算机，通信和其他电子设备制造业',//所属行业
         scopeBusiness: '电子元件及组件制造；货物进出口；电子元器件批发；技术进出口；电器辅件',//经营范围
         establishTime: "2009年3月12日",//成立日期
         whether: '是',//是否存量客户
         accurateTime: '2019年10月12日',//精准测额时间
         CreditTime: '2019年10月12日',//申贷意愿时间
         moneyOne:'188万',
         moneyTwo:'850万',
         moneyThree:'300万',
         moneyFour:'800万',
       },
      enterpriseThree:{//新野摸具制造有限公司数据3
        EnterpriseLabel:[//企业标签
          {name:'一般户'},
          {name:'结算户'},
          {name:'企业征信'},
          {name:'个人征信'},
        ],
        companyName: '新野摸具制造有限公司', //公司名称
        principalName: '李某某',//联系人
        phone: '13527282726',//联系电话
        address: '北京市朝阳区建国路1号科贸大厦',//企业注册地址
        Subordinate: '摸具制造行业',//所属行业
        scopeBusiness: '摸具制造：摸具生产：摸具设计；技术咨询；技术转让；技术服务',//经营范围
        establishTime: "2012年9月20日",//成立日期
        whether: '否',//是否存量客户
        accurateTime: '2019年10月12日',//精准测额时间
        CreditTime: '2019年10月12日',//申贷意愿时间
        moneyOne:'188万',
        moneyTwo:'500万',
        moneyThree:'300万',
        moneyFour:'800万',
      },
      enterpriseFour:{//广西汇智科技有限公司数据4
        EnterpriseLabel:[//企业标签
          {name:'一般户'},
          {name:'结算户'},
          {name:'企业征信'},
          {name:'个人征信'},
        ],
        companyName: '广西汇智科技有限公司', //公司名称
        principalName: '张某某',//联系人
        phone: '134223322726',//联系电话
        address: '广西省桂林市建安路5号科贸大厦',//企业注册地址
        Subordinate: '计算机，通信和其他电子设备制造业',//所属行业
        scopeBusiness: '技术开发；技术咨询；技术转让；技术服务；数据库处理；经济信息咨询；经营电子商务',//经营范围
        establishTime: "2014年10月20日",//成立日期
        whether: '否',//是否存量客户
        accurateTime: '2019年10月12日',//精准测额时间
        CreditTime: '2019年10月12日',//申贷意愿时间
        moneyOne:'188万',
        moneyTwo:'500万',
        moneyThree:'300万',
        moneyFour:'800万',
      },
      enterpriseFive:{//深圳科创科技有限公司数据5
        EnterpriseLabel:[//企业标签
          {name:'一般户'},
          {name:'结算户'},
          {name:'企业征信'},
          {name:'个人征信'},
        ],
        companyName: '深圳科创科技有限公司', //公司名称
        principalName: '陈某某',//联系人
        phone: '134537857384',//联系电话
        address: '深圳市建业路7号科贸大厦',//企业注册地址
        Subordinate: '计算机，通信和其他电子设备制造业',//所属行业
        scopeBusiness: '技术开发；技术咨询；技术转让；技术服务；数据库处理；经济信息咨询；经营电子商务',//经营范围
        establishTime: "2013年3月23日",//成立日期
        whether: '否',//是否存量客户
        accurateTime: '2019年10月12日',//精准测额时间
        CreditTime: '2019年10月12日',//申贷意愿时间
        moneyOne:'188万',
        moneyTwo:'500万',
        moneyThree:'300万',
        moneyFour:'800万',
      },
      enterpriseSix:{//佛山薇薇科技有限公司数据6
        EnterpriseLabel:[//企业标签
          {name:'一般户'},
          {name:'结算户'},
          {name:'企业征信'},
          {name:'个人征信'},
        ],
        companyName: '佛山薇薇科技有限公司', //公司名称
        principalName: '罗某某',//联系人
        phone: '134537223384',//联系电话
        address: '佛山市民安路7号科贸大厦',//企业注册地址
        Subordinate: '计算机，通信和其他电子设备制造业',//所属行业
        scopeBusiness: '技术开发；技术咨询；技术转让；技术服务；经济信息咨询；经营电子商务',//经营范围
        establishTime: "2015年12月23日",//成立日期
        whether: '否',//是否存量客户
        accurateTime: '2019年10月12日',//精准测额时间
        CreditTime: '2019年10月12日',//申贷意愿时间
        moneyOne:'188万',
        moneyTwo:'500万',
        moneyThree:'300万',
        moneyFour:'800万',
      },
      enterpriseSeven:{//佛山创新科技有限公司数据7
        EnterpriseLabel:[//企业标签
          {name:'一般户'},
          {name:'结算户'},
          {name:'企业征信'},
          {name:'个人征信'},
        ],
        companyName: '佛山创新科技有限公司', //公司名称
        principalName: '谭某某',//联系人
        phone: '13486854384',//联系电话
        address: '佛山市民安路3号科贸大厦',//企业注册地址
        Subordinate: '计算机，通信和其他电子设备制造业',//所属行业
        scopeBusiness: '技术开发；技术咨询；技术转让；技术服务；经济信息咨询；经营电子商务',//经营范围
        establishTime: "2014年12月23日",//成立日期
        whether: '否',//是否存量客户
        accurateTime: '2019年10月12日',//精准测额时间
        CreditTime: '2019年10月12日',//申贷意愿时间
        moneyOne:'188万',
        moneyTwo:'500万',
        moneyThree:'300万',
        moneyFour:'800万',
      },
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
    this.getButStutasId()
    this.gteEnterprise()
  },
  
  //声明方法
  methods : {
    
    go : function(){
      this.$router.push('/more');
    },
    //初始化数据
    gteEnterprise(){
      this.userTypeId=this.userId
      this.enterprise=[]

      if(this.userTypeId==1){
        this.enterprise=this.enterpriseOne
        this.statusOne=true//1信用快贷
      }else if(this.userTypeId==2){
        this.enterprise=this.enterpriseTwo
        this.statusTwo=true//2抵押快贷
      }else if(this.userTypeId==3){
        this.enterprise=this.enterpriseThree
        this.statusTwo=true//2抵押快贷
      }else if(this.userTypeId==4){
        this.enterprise=this.enterpriseFour
        this.statusTwo=true//2抵押快贷
      }else if(this.userTypeId==5){
        this.enterprise=this.enterpriseFive
        this.statusTwo=true//2抵押快贷
      }else if(this.userTypeId==6){
        this.enterprise=this.enterpriseSix
        this.statusTwo=true//2抵押快贷
      }else if(this.userTypeId==7){
        this.enterprise=this.enterpriseSeven
        this.statusTwo=true//2抵押快贷
      }
      this.title=this.enterprise.companyName
    },
    //获取传来的状态id
    getButStutasId(){
      this.typeStutas=this.stutasId;
    },
    //商机管理放弃按钮
    xiangQingQianDan(){
      if(this.userId==1){
        this.fangQiButShowOne = true
      }else if(this.userId==2){
        this.fangQiButShowTwo = true
      }else if(this.userId==3){
        this.fangQiButShowThree = true
      }
    },
    //放弃弹框中确定按钮
    radioQueDing(num){
      if(num==1){
				sessionStorage.setItem("enterpriseStatus","YiFangQi")
      }else if(num==2){
				sessionStorage.setItem("enterpriseTwoStatus","YiFangQi")
      }else if(num==3){
				sessionStorage.setItem("enterpriseThreeStatus","YiFangQi")
      }
      this.typeStutas=4
    },
    //放弃确认
    queRen(){
      Dialog.alert({
        message: '已放弃',
        confirmButtonText: "确定",
      }).then(() => {
        this.typeStutas=4
      });
    },
    //返回上一级
    onClickLeft() {
      let activeNameHui=this.activeNameChuan
      this.$router.push('/grabSingleYi/'+activeNameHui);
      //this.$router.go(-1);
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
    min-height:78px;
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
  .guanXiDiv{
    width:100%;
    height:100px;
    line-height:100px;
    padding-left:10%;
    padding-top:15px;
  }
  .guanXiImg{
    width:80%;
    height:70px;
  }
  .biaoQianLie {
    padding-left: 10px;
    padding-bottom: 10px;
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
    min-height:600px;
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
  .botButDiv .boWanChengBut{
    height:35px;
    line-height:35px;
    width:250px;
    text-align: center;
    border:1px solid;
    border-radius: 22px;
    color: green;
  }
  .botButDiv .botTuiHuiBut{
    height:35px;
    line-height:35px;
    width:250px;
    text-align: center;
    border:1px solid;
    border-radius: 22px;
    color: orange;
  }
  .botButDiv .botYiQianDanBut{
    height:35px;
    line-height:35px;
    width:250px;
    text-align: center;
    border:1px solid;
    border-radius: 22px;
    color: rgb(76,98,232);
  }
  .botButDiv .botShiXIaoBut{
    height:35px;
    line-height:35px;
    width:250px;
    text-align: center;
    border:1px solid;
    border-radius: 22px;
    color: #666666;
  }
</style>
