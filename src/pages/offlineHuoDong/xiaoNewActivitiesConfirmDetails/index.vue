<template>
  <div class="main">
   
    <div class="content">
      <van-nav-bar :title='title' @click-left="onClickLeft" @click-right="onClickRight" fixed>
        <van-icon name="arrow-left" slot="left"  size="24px" />
      </van-nav-bar>
    </div>
    
    <div>
      <div class="xiangQingBac" >

        <div class="huoDongMes">
          <div class="logoHang">
            <div class="logoLeft"> </div><div class="logoRight">活动信息</div>
            <img  src="../../../assets/images/other/Label3@2x.png" class="img_task">
          </div>
          <div  class="biaoQianLie" gutter="10">
            <van-cell title="活动主题" value-class="cellRightMes" :value="confirmActivitiesMes.hdzt"/>
            <van-cell title="活动开始时间" value-class="cellRightMes" :value="confirmActivitiesMes.hdkssj"/>
            <van-cell title="活动结束时间" value-class="cellRightMes" :value="confirmActivitiesMes.hdjssj"/>
            <van-cell title="活动时长" value-class="cellRightMes" :value="confirmActivitiesMes.timeLength"/>
            <van-cell title="签到时间" value-class="cellRightMes" :value="confirmActivitiesMes.registerTime"/>
            <van-cell title="活动地点" value-class="cellRightMes" :value="confirmActivitiesMes.Location"/>
            <van-cell title="培训对象" value-class="cellRightMes" :value="confirmActivitiesMes.huoObject"/>
            <van-cell title="主办机构" value-class="cellRightMes" :value="confirmActivitiesMes.organization"/>
            <van-cell title="经办人" value-class="cellRightMes" :value="confirmActivitiesMes.sponsor"/>
            <van-cell title="审核人" value-class="cellRightMes" :value="confirmActivitiesMes.auditor"/>
          </div>
        </div>

        <div class="huoDongMes"  @click="clickCar">
          <div class="logoHang"><div class="logoLeft"> </div><div class="logoRight">日程表信息</div></div>
          <van-row  class="biaoQianLie" gutter="10">
            <div class="secend_box">
                <van-row class="list_row" style="border-bottom:1px solid #333333;font-weight: bold;">
                    <van-col class=""  span="6" style="text-align: center;"><p class="list_test_min_head" >日期名称</p></van-col>
                    <van-col class=""  span="6" style="text-align: center;"><p class="list_test_min_head" >主讲人</p></van-col>
                    <van-col class=""  span="12" style="text-align: center;"><p class="list_test_min_head" >日程日期</p></van-col>
                </van-row>
                <van-row class="list_row" style="border-bottom:1px solid #999999;font-size:14px;">
                    <van-col class=""  span="6" style="text-align: center;"><p class="list_test_min" >每周沙龙会</p></van-col>
                    <van-col class=""  span="6" style="text-align: center;"><p class="list_test_min" >西施</p></van-col>
                    <van-col class=""  span="12" style="text-align: center;"><p class="list_test_min" >10/12 9:00-10/11 12:00</p></van-col>
                </van-row>
            </div>
          </van-row>
        </div>

        <!--<div class="huoDongMes">
          <div class="logoHang"><div class="logoLeft"> </div><div class="logoRight">报名表</div></div>
          <div  class="biaoQianLie">
            <van-cell title="是否需要接站" value="是"/>
            <van-cell title="是否需要送站" value="是"/>
          </div>
        </div>-->
        <div class="botButDiv">
          <van-button class="botQianDanBut" style="margin-right:10%;" plain hairline round type="info" v-if="true" @click="jueJueChengQueDing">拒绝新建</van-button>
          <van-button class="botQianDanBut" round type="info" v-if="true" @click="ChengQueDing">同意新建</van-button>
        </div>

      </div>
    </div>

    <!--时间上拉-->
    <van-action-sheet v-model="StartTimeIs" @select="onSelect">
      <van-datetime-picker @confirm="timeQueDing" @cancel="timeQiXiao " v-model="minDate" type="datetime" :min-date="minDate" :max-date="maxDate"/>
    </van-action-sheet>
    <!--主办机构上拉-->
    <van-action-sheet v-model="organizationIs" :actions="organizations" @select="xuanZhongOrganization"/>
    <!--经办人上拉-->
    <van-action-sheet v-model="sponsorIS" :actions="sponsors" @select="xuanZhongSponsor"/>
    <!--审核人上拉-->
    <van-action-sheet v-model="auditorIS" :actions="auditors" @select="xuanZhongAditor"/>
    
    <van-dialog class="vanDdialog" v-model="clickCarFunc" title="活动日程" :showConfirmButton="false">
      <div style="margin:10px 0px 50px 0px;">
        <van-row>
          <van-col span="8" class="riChengMesRight">日程名称：</van-col>
          <van-col class="riChengMesLeft">每周沙龙会</van-col>
        </van-row>
        <van-row>
          <van-col span="8" class="riChengMesRight">主讲人：</van-col>
          <van-col class="riChengMesLeft">西施</van-col>
        </van-row>
        <van-row>
          <van-col span="8" class="riChengMesRight">日程日期：</van-col>
          <van-col class="riChengMesLeft">10.12 09:00 - 10.11 12:00</van-col>
        </van-row>
        <van-row>
          <van-col span="8" class="riChengMesRight">日程地点：</van-col>
          <van-col class="riChengMesLeft">西湖新桥</van-col>
        </van-row>
        <van-row>
          <van-col span="8" class="riChengMesRight">日程时长：</van-col>
          <van-col class="riChengMesLeft">120分钟</van-col>
        </van-row>
      </div>
      <img class="img_xx" @click="clickCar" src="../../../assets/images/38/delete@2x.png">
    </van-dialog>
  </div>
  
</template>

<script>
//引入组件首字母大写
import TabBar from '@/components/tabBar';
import { Divider } from 'vant';
import { Checkbox, CheckboxGroup,Dialog } from 'vant';
export default {

  //基础数据存放处
  data (){
     return {
        clickCarFunc:false,
        title : '活动详情',
        minHour: 10,
        maxHour: 20,
        minDate: new Date(),
        maxDate: new Date(2099, 10, 1),
        currentDate: new Date(),
        StartTimeIs: false,
        organizationIs: false,
        sponsorIS: false,
        auditorIS: false,
        shangRight:'arrow',
       checkboxListS:[
         {id:1,name:"是否需要接站"},
         {id:2,name:"是否需要送站"}
       ],
       organizations: [
        { id: 1,name: '建行机构分行营业部' },
        { id: 2,name: '建行机构分行技术部' },
        { id: 3,name: '建行机构分行销售部' }
       ],
       sponsors: [
        { id: 1,name: '杨峰' },
        { id: 2,name: '杨峰2' },
        { id: 3,name: '杨峰3' }
       ],
       auditors: [
        { id: 1,name: '陈雪梅' },
        { id: 2,name: '陈雪梅2' },
        { id: 3,name: '陈雪梅3' }
       ],
       confirmActivitiesMes:{
         hdzt:"小微快贷企业交流会",
         hdkssj:"2019.10.12",
         hdjssj:"2019.10.12",
         timeLength: '1天',//活动时长，天
         registerTime: '2019.10.12  09：00',//签到时间
         Location:'建行杭州分行营业部',//活动地点
         huoObject:'客户',//培训对象
         organization:'建行杭州分行营业部（汇报）',//主办机构
         sponsor:'杨峰',//经办人
         auditor:'陈雪梅',//审核人
         schedule:{//新建日程表
          scheduleName:'',//日称名称
          scheduleSpeaker:'',//主讲人
          scheduleStartTime:'',//日程开始时间
          scheduleEndTime:'',//日程结束时间
          scheduleLength:'',//日程时长，分钟
          scheduleLocation:'',//日程地点
         },
         checkboxList: [{id:1,value:true,name:'是'},{id:2,value:true,name:'是'},],//是否接送站
       }
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
    get(){
      alert(this.guanLiId)
    },
    //返回上一级
    onClickLeft() {
        sessionStorage.setItem("offlineHuoDongActive","待审核") //去到待审核
      this.$router.go(-1);
    },
    onClickRight(){

    },
    //打开选择时间
    onSelect() {
      this.StartTimeIs = true;
    },
    //时间确定按钮，关闭选择时间
    timeQueDing(){
       this.StartTimeIs = false;
    },
    //取消按钮，关闭选择时间
    timeQiXiao(){
      this.StartTimeIs = false;
    },
    //打开右向图标上拉
    openOrganization(value){
      if(value==1){
        this.organizationIs=true
      }else if(value==2){
        this.sponsorIS=true
      }else if(value==3){
        this.auditorIS=true
      }
    },
    //选中主办机构
    xuanZhongOrganization(item){
      this.NewActivitiesMes.organization=item.name
      this.organizationIs=false
    },
    //选中经办人
    xuanZhongSponsor(item){
      this.NewActivitiesMes.sponsor=item.name
      this.sponsorIS=false
    },
    //选中审核人
    xuanZhongAditor(item){
      this.NewActivitiesMes.auditor=item.name
      this.auditorIS=false
    },
    //新建日程表
    newScheduleBut(){
      this.$router.push('/offlineHuoDong/newSchedule');
    },
    //拒绝
    jueJueChengQueDing(){
      Dialog.confirm({
        message: '确定拒绝新建吗？',
        confirmButtonText: "确定",
      }).then(() => {
        //确定拒绝
				sessionStorage.setItem("xinJianStatus","yiJuJue")
        sessionStorage.setItem("offlineHuoDongActive","待审核") //去到待审核
        this.$router.push('/offlineHuoDong');
      }).catch(() => {
        // on cancel
      });
    },
    //同意
    ChengQueDing(){
      Dialog.confirm({
        message: '确定同意新建吗？',
        confirmButtonText: "确定",
      }).then(() => {
        sessionStorage.setItem("offlineHuoDongActive","已发布") //去到已发布
        this.$router.push('/offlineHuoDong');
      }).catch(() => {
        // on cancel
      });
    },

    clickCar(){
      this.clickCarFunc = this.clickCarFunc?false:true;
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
  
  .img_task{
      position: absolute;
      right: 0;
      top: 50px;
      height: 28px;
  }
  .xiangQingBac{
    width: 100%;
    min-height: 570px;
    height: 100%;
    overflow: auto;
    margin: 0px;
    padding-bottom: 48px;
    background-color: #E7EAF5;
  } 
  .huoDongMes{
    width: 100%;
    min-height:78px;
    height:auto;
    margin: 0px auto 20px auto;
    border-radius: 10px;
    /*padding-left: 10px;
    padding-right: 10px;*/
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
    font-weight: bold;
    margin-left: 25px;
    padding-top: 3px;
  }
  .biaoQianLie {
    height:auto;
    padding-right: 15px;
    margin-bottom:20px;
  }
  .cellRightMes{
    height:26px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap; 
  }
  .secend_box{
      background-color: #FFFFFF;
      position: relative;
      top:-10px;
      width: 100%;
      height: 136px;
      margin-top: 9px;
  }
  
  .botButDiv{
    line-height:40px;
    width:80%;
    margin: 20px auto;
  }
  .botButDiv .botQianDanBut{
    height:35px;
    line-height:35px;
    width:45%;
  }
  .inputFieldMes{
    float:left;
    width:100%;
    height: 26px;
    line-height: 24px;
    padding-top:0px;
    padding-bottom:0px;
    padding-right:0px;
    text-align: right;
  }
  .inputFieldMesShuan{
    float:left;
    width:83%;
    height: 26px;
    line-height: 24px;
    padding-top:0px;
    padding-bottom:0px;
    padding-right:0px;
    text-align: right;
  }
  .riChengMesRight{
    padding-left:30px;
    font-size: 14px;
    margin-top:10px;
  }
  .riChengMesLeft{
    font-size: 14px;
    font-weight: bold;
    margin-top:10px;
  }
  .vanDdialog{
    overflow:inherit !important;
  }
  .img_xx{
    position: absolute;
    bottom: -55px;
    left: 50%;
    margin-left: -20px;
    width: 38px;
  }
</style>
