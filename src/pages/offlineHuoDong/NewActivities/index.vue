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
              <van-icon name="todo-list-o" @click="onSelect" size="24px" color="#1989fa"/>
            </van-cell>
            <van-cell title="活动结束时间">
              <van-field class="inputFieldMesShuan" input-align="right" disabled v-model="NewActivitiesMes.EndTime" placeholder="请选择" />
              <van-icon name="todo-list-o" size="24px" color="#1989fa"/>
            </van-cell>
            <van-cell title="活动时长">
              <van-field class="inputFieldMesShuan" input-align="right" v-model="NewActivitiesMes.timeLength" placeholder="请输入" /><span style="color:black">天</span>
            </van-cell>
            <van-cell title="报道时间">
              <van-field class="inputFieldMesShuan" input-align="right" disabled v-model="NewActivitiesMes.EndTime" placeholder="请选择" />
              <van-icon name="todo-list-o" size="24px" color="#1989fa"/>
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
          <div class="logoHang"><div class="logoLeft"> </div><div class="logoRight">日程表信息</div></div>
          <van-row  class="biaoQianLie" gutter="10">
            <van-grid>
              <van-grid-item @click="newScheduleBut" style="margin:auto;border:padding-bottom:0px">
                <img src="../../../assets/images/84/custom.png">
							  <p>新建日程表</p>
              </van-grid-item>
            </van-grid>
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
    overflow: auto;
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
</style>
