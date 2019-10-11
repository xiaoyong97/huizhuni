<template>
  <!--活动详情页-->
  <div class="main">
   
    <div class="content">
      <van-nav-bar :title='title' @click-left="onClickLeft" @click-right="onClickRight" fixed>
        <van-icon name="arrow-left" slot="left"  size="24px" />
      </van-nav-bar>
    </div>
    
    <div>
      <div class="xiangQingBac" >

        <div class="huoDongMes">
          <div class="logoHang"><div class="logoLeft"> </div><div class="logoRight">活动信息</div>
            <div class="tianJiaBut"  @click="newScheduleBut">任务新建</div>
          </div>
          <div  class="biaoQianLie" gutter="10">
            <van-cell title="活动主题" value-class="cellRightMes" :value="confirmActivitiesMes.theme"/>
            <van-cell title="活动开始时间" value-class="cellRightMes" :value="confirmActivitiesMes.StartTime"/>
            <van-cell title="活动结束时间" value-class="cellRightMes" :value="confirmActivitiesMes.EndTime"/>
            <van-cell title="活动时长" value-class="cellRightMes" :value="confirmActivitiesMes.timeLength"/>
            <van-cell title="签到时间" value-class="cellRightMes" :value="confirmActivitiesMes.registerTime"/>
            <van-cell title="活动地点" value-class="cellRightMes" :value="confirmActivitiesMes.Location"/>
            <van-cell title="培训对象" value-class="cellRightMes" :value="confirmActivitiesMes.huoObject"/>
            <van-cell title="主办机构" value-class="cellRightMes" :value="confirmActivitiesMes.organization"/>
            <van-cell title="经办人" value-class="cellRightMes" :value="confirmActivitiesMes.sponsor"/>
            <van-cell title="审核人" value-class="cellRightMes" :value="confirmActivitiesMes.auditor"/>
          </div>
        </div>

        <div class="huoDongMes">
          <div class="logoHang"><div class="logoLeft"> </div><div class="logoRight">日程表信息</div></div>
          <van-row  class="biaoQianLie" gutter="10">
            <div class="secend_box">
                <van-row class="list_row" style="border-bottom:1px solid #333333;font-weight: bold;">
                    <van-col class=""  span="6" style="text-align: center;"><p class="list_test_min_head" >日期名称</p></van-col>
                    <van-col class=""  span="6" style="text-align: center;"><p class="list_test_min_head" >主讲人</p></van-col>
                    <van-col class=""  span="12" style="text-align: center;"><p class="list_test_min_head" >日程日期</p></van-col>
                </van-row>
                <van-row @click="riChengXinXi" class="list_row" style="border-bottom:1px solid #999999;font-size:14px;">
                    <van-col class=""  span="6" style="text-align: center;"><p class="list_test_min" >每周沙龙会</p></van-col>
                    <van-col class=""  span="6" style="text-align: center;"><p class="list_test_min" >西施</p></van-col>
                    <van-col class=""  span="12" style="text-align: center;"><p class="list_test_min" >10/12 9:30-10/12 11:30</p></van-col>
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
          <van-row>
            <van-col span="12"> <van-button class="botJuJueBut" round plain type="info" v-if="true" @click="juJueXinJian">拒绝新建</van-button></van-col>
            <van-col span="12"><van-button class="botQianDanBut" round type="info" v-if="true" @click="ChengQueDing">同意新建</van-button></van-col>
          </van-row>
        </div>

      </div>
    </div>


    <!--弹出日程信息框-->
    <van-dialog v-model="riChengDialog" title="活动日程">
      <div style="margin:20px 0px;">
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
          <van-col class="riChengMesLeft">10.12 09:30 - 10.12 11:30</van-col>
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
    </van-dialog>
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

  </div>
  
</template>

<script>
//引入组件首字母大写
import TabBar from '@/components/tabBar';
import { Divider } from 'vant';
import { Checkbox, CheckboxGroup } from 'vant';
import { Dialog } from 'vant';
export default {

  //基础数据存放处
  data (){
     return {
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
        riChengDialog:false,
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
         theme: '建行每周沙龙会',//活动主题
         StartTime: '2019.10.12',//活动开始时间
         EndTime: '2019.10.12',//活动结束时间
         timeLength: '2天',//活动时长，天
         registerTime: '2019.10.12  09：00',//签到时间
         Location:'西湖',//活动地点
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
    //弹出日程信息详情
    riChengXinXi(){
      this.riChengDialog=true;
    },

    //拒绝新建
    juJueXinJian(){
      Dialog.confirm({
        title: '确认进行拒绝操作吗？',
        message: ''
      }).then(() => {
        //确认拒绝按钮，返回
        this.$router.push('/offlineHuoDong');
      }).catch(() => {
       
      });
    },

    //确定
    ChengQueDing(){
      Dialog.confirm({
        title: '确认进行该操作吗？',
        message: ''
      }).then(() => {
        //确认新建按钮，返回
        this.$router.push('/offlineHuoDong');
      }).catch(() => {
        
      });
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
    min-height: 570px;
    height: 100%;
    margin: 0px;
    padding-top: 1px;
    padding-bottom: 48px;
    background-color: #E7EAF5;
  } 
  .huoDongMes{
    width: 100%;
    min-height:78px;
    height:auto;
    margin: 0px auto 20px auto;
    border-radius: 10px;
    padding-left: 10px ;
    padding-right: 10px;
    background-color: white;
  }
  .logoHang{
    width:95%;
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
    float:left;
    font-weight: bold;
    margin-left: 5px;
    padding-top: 3px;
  }
  .logoHang .tianJiaBut{
    float:right;
    width: 70px;
    height: 26px;
    line-height: 26px;
    font-size: 12px;
    text-align:center;
    color:white;
    background-color: rgb(76,98,232);
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
    width:250px;
    margin: 20px auto;
  }
  .botButDiv .botJuJueBut{
    height:35px;
    line-height:35px;
    width:100px;
  }
  .botButDiv .botQianDanBut{
    height:35px;
    line-height:35px;
    width:100px;
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
</style>
