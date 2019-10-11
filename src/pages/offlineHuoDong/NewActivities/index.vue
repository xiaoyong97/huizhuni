<template>
  <!--新建活动页-->
  <div class="main">
   
    <div class="content">
      <van-nav-bar :title='title' @click-left="onClickLeft" @click-right="onClickRight" fixed>
        <van-icon name="arrow-left" slot="left"  size="24px" />
        <van-icon style="padding-bottom:6px;" slot="right"  size="16px" >保存草稿</van-icon>
      </van-nav-bar>
    </div>
    
    <div>
      <div class="xiangQingBac" >

        <div class="huoDongMes">
          <div class="logoHang"><div class="logoLeft"> </div><div class="logoRight">活动信息</div></div>
          <div  class="biaoQianLie" gutter="10">
            <van-cell title="活动主题">
              <van-field class="inputFieldMes" input-align="right" v-model="NewActivitiesMes.theme" placeholder="请输入" />
            </van-cell>
            <van-cell title="活动开始时间">
              <van-field class="inputFieldMesShuan" input-align="right" disabled v-model="NewActivitiesMes.StartTime" placeholder="请选择" />
              <van-icon name="todo-list-o" @click="onSelect(1)" size="24px" color="#1989fa"/>
            </van-cell>
            <van-cell title="活动结束时间">
              <van-field class="inputFieldMesShuan" input-align="right" disabled v-model="NewActivitiesMes.EndTime" placeholder="请选择" />
              <van-icon name="todo-list-o" @click="onSelect(2)" size="24px" color="#1989fa"/>
            </van-cell>
            <van-cell title="活动时长">
              <van-field class="inputFieldMesShuan" input-align="right" v-model="NewActivitiesMes.timeLength" placeholder="请输入" /><span style="color:black">天</span>
            </van-cell>
            <van-cell title="报到时间">
              <van-field class="inputFieldMesShuan" input-align="right" disabled v-model="NewActivitiesMes.registerTime" placeholder="请选择" />
              <van-icon name="todo-list-o" @click="onSelect(3)" size="24px" color="#1989fa"/>
            </van-cell>
            <van-cell title="活动地点">
              <van-field class="inputFieldMes" input-align="right" v-model="NewActivitiesMes.Location" placeholder="请输入" />
            </van-cell>
            <van-cell title="活动对象">
              <van-field class="inputFieldMes" input-align="right" v-model="NewActivitiesMes.huoObject" placeholder="请输入" />
            </van-cell>
            <van-cell title="主办机构">
              <van-field class="inputFieldMesShuan" input-align="right" disabled v-model="NewActivitiesMes.organization" placeholder="请选择" />
              <van-icon :name="shangRight" size="22px" color="#1989fa" @click="openOrganization(1)"/>
            </van-cell>
            <van-cell title="经办人">
              <van-field class="inputFieldMesShuan" input-align="right" disabled v-model="NewActivitiesMes.sponsor" placeholder="请选择" />
              <van-icon :name="shangRight" size="22px" color="#1989fa" @click="openOrganization(2)"/>
            </van-cell>
            <van-cell title="审核人">
              <van-field class="inputFieldMesShuan" input-align="right" disabled v-model="NewActivitiesMes.auditor" placeholder="请选择" />
              <van-icon :name="shangRight" size="22px" color="#1989fa" @click="openOrganization(3)"/>
            </van-cell>
          </div>
        </div>

        <div class="huoDongMes">
          <div class="logoHang"><div class="logoLeft"> </div><div class="logoRight">日程表信息</div>
            <div class="tianJiaBut" v-show="!riChengQueDing" @click="newScheduleBut">添加</div>
          </div>
          <van-row  class="biaoQianLie" gutter="10">
            <van-grid   v-show="riChengQueDing">
              <van-grid-item @click="newScheduleBut">
                <img src="../../../assets/images/84/custom.png">
							  <p>新建日程表</p>
              </van-grid-item>
            </van-grid>

            <div class="secend_box"  v-show="!riChengQueDing">
                <van-row class="list_row" style="border-bottom:1px solid #333333;font-weight: bold;">
                    <van-col class=""  span="6" style="text-align: center;"><p class="list_test_min_head" >日期名称</p></van-col>
                    <van-col class=""  span="6" style="text-align: center;"><p class="list_test_min_head" >主讲人</p></van-col>
                    <van-col class=""  span="12" style="text-align: center;"><p class="list_test_min_head" >日程日期</p></van-col>
                </van-row>
                <van-row class="list_row" style="border-bottom:1px solid #999999;font-size:14px;">
                    <van-col class=""  span="6" style="text-align: center;"><p class="list_test_min" >每周沙龙会</p></van-col>
                    <van-col class=""  span="6" style="text-align: center;"><p class="list_test_min" >西施</p></van-col>
                    <van-col class=""  span="12" style="text-align: center;"><p class="list_test_min" >10/12 9:30-10/12 11:20</p></van-col>
                </van-row>
            </div>
          </van-row>
        </div>

        <div class="huoDongMes">
          <div class="logoHang"><div class="logoLeft"> </div><div class="logoRight">报名表</div></div>
          <div  class="biaoQianLie">
            <van-checkbox-group v-model="NewActivitiesMes.checkboxList">
              <van-cell-group>
                <van-cell v-for="item in checkboxListS" clickable :key="item.id" :title="`${item.name}`">
                  <van-checkbox :name="item.name" ref="checkboxListS" slot="right-icon" />
                </van-cell>
              </van-cell-group>
            </van-checkbox-group>
          </div>
        </div>
        <div class="botButDiv"><van-button class="botQianDanBut" round type="info" v-if="true" @click="xiangQingQianDan">下一步</van-button></div>

      </div>
    </div>

    <!-- 日程表信息上拉 -->
    <van-popup v-model="scheduleIs" position="bottom" :style="{ height: '100%' }">
      
      <div class="content">
        <van-nav-bar :title='title' style="font-weight: bold" @click-right="onClickRightRi" fixed>
          <van-icon name="cross" slot="right"  size="24px"  />
        </van-nav-bar>
      </div>
      <div class="xiangQingBac" >
        <div class="huoDongMes">
          <div class="logoHang"><div class="logoLeft"> </div><div class="logoRight">活动信息</div></div>
          <div  class="biaoQianLie" gutter="10">
            <van-cell title="日程名称">
              <van-field class="inputFieldMes" input-align="right" v-model="NewActivitiesMes.schedule.scheduleName" placeholder="请输入" />
            </van-cell>
            <van-cell title="主讲人">
              <van-field class="inputFieldMes" input-align="right" v-model="NewActivitiesMes.schedule.scheduleSpeaker" placeholder="请输入" />
            </van-cell>
            <van-cell title="日程开始时间">
              <van-field class="inputFieldMesShuan" input-align="right" disabled v-model="NewActivitiesMes.schedule.scheduleStartTime" placeholder="请选择" />
              <van-icon name="todo-list-o" @click="onSelect(4)" size="24px" color="#1989fa"/>
            </van-cell>
            <van-cell title="日程结束时间">
              <van-field class="inputFieldMesShuan" input-align="right" disabled v-model="NewActivitiesMes.schedule.scheduleEndTime" placeholder="请选择" />
              <van-icon name="todo-list-o"  @click="onSelect(5)"  size="24px" color="#1989fa"/>
            </van-cell>
            <van-cell title="日程时长">
              <van-field class="inputFieldMesShuan" input-align="right" v-model="NewActivitiesMes.schedule.scheduleLength" placeholder="请输入" /><span style="color:black">分钟</span>
            </van-cell>
            <van-cell title="日程地点">
              <van-field class="inputFieldMes" input-align="right" v-model="NewActivitiesMes.schedule.scheduleLocation" placeholder="请输入" />
            </van-cell>
          </div>
        </div>
        <div class="botButDiv"><van-button class="botQianDanBut" round type="info" @click="riQueDing">确定</van-button></div>

      </div>
    </van-popup >
    <!--开始时间上拉-->
    <van-action-sheet v-model="StartTimeIs">
      <van-datetime-picker @change="changeVal" @confirm="timeQueDing" @cancel="timeQiXiao " v-model="currentDate" type="datetime" :min-date="minDate" :max-date="maxDate"/>
    </van-action-sheet>
    <!--结束时间上拉-->
    <van-action-sheet v-model="EndTimeIS">
      <van-datetime-picker @change="changeValTwo" @confirm="timeQueDingTwo" @cancel="timeQiXiao " v-model="currentDate" type="datetime" :min-date="minDate" :max-date="maxDate"/>
    </van-action-sheet>
    <!--报到时间上拉-->
    <van-action-sheet v-model="registerTimeIS">
      <van-datetime-picker @change="changeValThree" @confirm="timeQueDingThree" @cancel="timeQiXiao " v-model="currentDate" type="datetime" :min-date="minDate" :max-date="maxDate"/>
    </van-action-sheet>
    <!--主办机构上拉-->
    <van-action-sheet v-model="organizationIs" :actions="organizations" @select="xuanZhongOrganization"/>
    <!--经办人上拉-->
    <van-action-sheet v-model="sponsorIS" :actions="sponsors" @select="xuanZhongSponsor"/>
    <!--审核人上拉-->
    <van-action-sheet v-model="auditorIS" :actions="auditors" @select="xuanZhongAditor"/>
    <!--日程开始时间上拉-->
    <van-action-sheet v-model="RiStartTimeIs">
      <van-datetime-picker @change="changeValFour" @confirm="timeQueDinFOur" @cancel="timeQiXiao " v-model="currentDate" type="datetime" :min-date="minDate" :max-date="maxDate"/>
    </van-action-sheet>
    <!--日程结束时间上拉-->
    <van-action-sheet v-model="RiEndTimeIs">
      <van-datetime-picker @change="changeValFive" @confirm="timeQueDingFive" @cancel="timeQiXiao " v-model="currentDate" type="datetime" :min-date="minDate" :max-date="maxDate"/>
    </van-action-sheet>



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
        minHour: 10,
        maxHour: 20,
        minDate: new Date(),
        maxDate: new Date(2099, 10, 1),
        currentDate: new Date(),
        scheduleIs: false,
        StartTimeIs: false,
        EndTimeIS: false,
        registerTimeIS: false,
        organizationIs: false,
        sponsorIS: false,
        auditorIS: false,
        riChengQueDing:true,
        RiStartTimeIs:false,
        RiEndTimeIs:false,
        shangRight:'arrow',
        jieShouTime: '',//暂时接受时间
       checkboxListS:[
         {id:1,name:"是否需要接站"},
         {id:2,name:"是否需要送站"}
       ],
       organizations: [
        { id: 1,name: '建行机构分行营业部' },
       ],
       sponsors: [
        { id: 1,name: '杨峰' },
       ],
       auditors: [
        { id: 1,name: '陈雪梅' },
       ],
       NewActivitiesMes:{
         theme: '',//活动主题
         StartTime: '',//活动开始时间
         EndTime: '',//活动结束时间
         timeLength: '',//活动时长，天
         registerTime: '',//报到时间
         Location:'',//活动地点
         huoObject:'',//活动对象
         organization:'',//主办机构
         sponsor:'',//主办人
         auditor:'',//审核人
         schedule:{//新建日程表
          scheduleName:'',//日称名称
          scheduleSpeaker:'',//主讲人
          scheduleStartTime:'',//日程开始时间
          scheduleEndTime:'',//日程结束时间
          scheduleLength:'',//日程时长，分钟
          scheduleLocation:'',//日程地点
         },
         checkboxList: [],//是否接送站
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
    
    //新建日程表
    newScheduleBut(){
      //this.$router.push('/offlineHuoDong/newSchedule');
      this.scheduleIs=true;
    },
    //关闭日程表
    onClickRightRi(){
      this.scheduleIs=false
    },
    //日程表确定按钮
    riQueDing(){
      this.scheduleIs=false
      this.riChengQueDing=false
    },
    onClickRight(){

    },
    //打开选择时间
    onSelect(value) {
      if(value==1){
        this.StartTimeIs = true;
      }else if(value==2){
        this.EndTimeIS = true;
      }else if(value==3){
        this.registerTimeIS = true;
      }else if(value==4){
        this.RiStartTimeIs = true;
      }else if(value==5){
        this.RiEndTimeIs = true;
      }
    },
    changeVal(values){
      this.jieShouTime=""
      this.jieShouTime=values.getColumnValue(0)+"/"+values.getColumnValue(1)+"/"+values.getColumnValue(2)+" "+values.getColumnValue(3)+":"+values.getColumnValue(4)
    },
    changeValTwo(values){
      this.jieShouTime=""
      this.jieShouTime=values.getColumnValue(0)+"/"+values.getColumnValue(1)+"/"+values.getColumnValue(2)+" "+values.getColumnValue(3)+":"+values.getColumnValue(4)
    },
    changeValThree(values){
      this.jieShouTime=""
      this.jieShouTime=values.getColumnValue(0)+"/"+values.getColumnValue(1)+"/"+values.getColumnValue(2)+" "+values.getColumnValue(3)+":"+values.getColumnValue(4)
    },
    changeValFour(values){
      this.jieShouTime=""
      this.jieShouTime=values.getColumnValue(0)+"/"+values.getColumnValue(1)+"/"+values.getColumnValue(2)+" "+values.getColumnValue(3)+":"+values.getColumnValue(4)
    },
    changeValFive(values){
      this.jieShouTime=""
      this.jieShouTime=values.getColumnValue(0)+"/"+values.getColumnValue(1)+"/"+values.getColumnValue(2)+" "+values.getColumnValue(3)+":"+values.getColumnValue(4)
    },
    //开始时间确定按钮，关闭选择时间
    timeQueDing(){
       this.NewActivitiesMes.StartTime=this.jieShouTime
       this.StartTimeIs = false;
    },
    //结束时间确定按钮，关闭选择时间
    timeQueDingTwo(){
       this.NewActivitiesMes.EndTime=this.jieShouTime
       this.EndTimeIS = false;
    },
    //报到时间确定按钮，关闭选择时间
    timeQueDingThree(){
       this.NewActivitiesMes.registerTime=this.jieShouTime
       this.registerTimeIS = false;
    },
    //日程开始时间确定按钮，关闭选择时间
    timeQueDinFOur(){
      this.NewActivitiesMes.schedule.scheduleStartTime=this.jieShouTime
      this.RiStartTimeIs = false;
    },
    //日程=结束时间确定按钮，关闭选择时间
    timeQueDingFive(){
      this.NewActivitiesMes.schedule.scheduleEndTime=this.jieShouTime
      this.RiEndTimeIs = false;
    },
    //取消按钮，关闭选择时间
    timeQiXiao(){
      this.StartTimeIs = false;
       this.EndTimeIS = false;
       this.EndTimeIS = false;
      this.RiStartTimeIs = false;
      this.RiEndTimeIs = false;
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
    

    //下一步
    xiangQingQianDan(){
      this.$router.push('/offlineHuoDong/newActivitiesConfirm');
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
    width:100%;
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
    float: left;
    font-weight: bold;
    margin-left: 25px;
    padding-top: 3px;
  }
  .logoHang .tianJiaBut{
    float:right;
    width: 70px;
    padding-top: 3px;
    font-weight: bold;
    color:rgb(76,98,232);
  }
  .biaoQianLie {
    height:auto;
    padding-right: 15px;
    margin-bottom:20px;
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
  .botButDiv .botQianDanBut{
    height:35px;
    line-height:35px;
    width:250px;
  }
  .inputFieldMes{
    float:left;
    width:100%;
    height: 26px;
    line-height: 26px;
    padding-top:0px;
    padding-bottom:0px;
    padding-right:0px;
    text-align: right;
  }
  .inputFieldMesShuan{
    float:left;
    width:82%;
    height: 26px;
    line-height: 26px;
    padding-top:0px;
    padding-bottom:0px;
    padding-right:0px;
    text-align: right;
  }
</style>
