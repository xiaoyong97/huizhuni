<template>
  <!--新建日程表页-->
  <div class="main">
   
    <div class="content">
      <van-nav-bar :title='title' style="font-weight: bold" @click-right="onClickRight" fixed>
        <van-icon name="cross" slot="right"  size="24px"  />
      </van-nav-bar>
    </div>
    
    <div>
      <div class="xiangQingBac" >

        <div class="huoDongMes">
          <div class="logoHang"><div class="logoLeft"> </div><div class="logoRight">活动信息</div></div>
          <div  class="biaoQianLie" gutter="10">
            <van-cell title="日程名称">
              <van-field class="inputFieldMes" input-align="right" v-model="schedule.scheduleName" placeholder="请输入" />
            </van-cell>
            <van-cell title="主讲人">
              <van-field class="inputFieldMes" input-align="right" v-model="schedule.scheduleSpeaker" placeholder="请输入" />
            </van-cell>
            <van-cell title="日程开始时间">
              <van-field class="inputFieldMesShuan" input-align="right" disabled v-model="schedule.scheduleStartTime" placeholder="请选择" />
              <van-icon name="todo-list-o" @click="onSelect" size="24px" color="#1989fa"/>
            </van-cell>
            <van-cell title="日程结束时间">
              <van-field class="inputFieldMesShuan" input-align="right" disabled v-model="schedule.EndTime" placeholder="请选择" />
              <van-icon name="todo-list-o"  @click="onSelect"  size="24px" color="#1989fa"/>
            </van-cell>
            <van-cell title="日程时长">
              <van-field class="inputFieldMesShuan" input-align="right" v-model="schedule.scheduleLength" placeholder="请输入" /><span style="color:black">分钟</span>
            </van-cell>
            <van-cell title="日程地点">
              <van-field class="inputFieldMes" input-align="right" v-model="schedule.scheduleLocation" placeholder="请输入" />
            </van-cell>
          </div>
        </div>

        <div class="botButDiv"><van-button class="botQianDanBut" round type="info" v-if="true">确定</van-button></div>

      </div>
    </div>

    <!--时间上拉-->
    <van-action-sheet v-model="StartTimeIs" @select="onSelect">
      <van-datetime-picker @confirm="timeQueDing" @cancel="timeQiXiao " v-model="minDate" type="datetime" :min-date="minDate" :max-date="maxDate"/>
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
        title : '新建日程信息',
        minHour: 10,
        maxHour: 20,
        minDate: new Date(),
        maxDate: new Date(2099, 10, 1),
        currentDate: new Date(),
        StartTimeIs: false,
       schedule:{//新建日程表
        scheduleName:'',//日称名称
        scheduleSpeaker:'',//主讲人
        scheduleStartTime:'',//日程开始时间
        scheduleEndTime:'',//日程结束时间
        scheduleLength:'',//日程时长，分钟
        scheduleLocation:'',//日程地点
       },
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
    onClickRight(){
      this.$router.go(-1);
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

    //确定
    xiangQingQianDan(){

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
    width:80%;
    height: 26px;
    line-height: 24px;
    padding-top:0px;
    padding-bottom:0px;
    padding-right:0px;
    text-align: right;
  }
</style>
