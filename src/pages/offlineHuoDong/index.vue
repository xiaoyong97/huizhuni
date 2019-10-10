<template>
  <!--线下活动页-->
  <div class="main">
   
    <div class="content">
      <van-nav-bar :title='title' @click-left="onClickLeft" @click-right="onClickRight" fixed>
        <van-icon name="arrow-left" slot="left"  size="24px" />
        <van-icon name="plus" slot="right"  size="24px" />
      </van-nav-bar>
    </div>
    
    <div>
      <div class="xiangQingBac" >
        <van-tabs v-model="active" line-width="25%" title-active-color="#1989fa" color="#1989fa">
          <!--                已发布下拉图标-->
          <img src="../../assets/images/24/Pulldown@2x.png" class="menu1_open" v-show="menu!==1" @click="openMenu(1,1)">
          <img src="../../assets/images/24/Pullupselect@12x.png" class="menu1_open" v-show="menu==1" @click="openMenu(1,-1)">
          <van-tab name="1" title="已发布">
            <!--头部搜索-->
            <van-row class="seekRow" gutter="20"> 
              <van-col span="16"><van-field class="seekField" v-model="fieldWei" placeholder="请输入活动名称" />    
              </van-col>
              <van-col span="8"><van-button class="seekBut">查找</van-button>
              </van-col>
            </van-row>
          </van-tab>

          <!--                已发布下拉图标-->
          <img src="../../assets/images/24/Pulldown@2x.png" class="menu1_openTwo" v-show="toAudit!==1" @click="openMenu(2,1)">
          <img src="../../assets/images/24/Pullupselect@12x.png" class="menu1_openTwo" v-show="toAudit==1" @click="openMenu(2,-1)">
          <van-tab name="2" title="待审核">
            <!--头部搜索-->
            <van-row class="seekRow" gutter="20"> 
              <van-col span="16"><van-field class="seekField" v-model="fieldDai" placeholder="请输入活动名称" />    
              </van-col>
              <van-col span="8"><van-button class="seekBut">查找</van-button>
              </van-col>
            </van-row>
          </van-tab>

          <!--                已发布下拉图标-->
          <img src="../../assets/images/24/Pulldown@2x.png" class="menu1_openThree" v-show="refuse!==1" @click="openMenu(3,1)">
          <img src="../../assets/images/24/Pullupselect@12x.png" class="menu1_openThree" v-show="refuse==1" @click="openMenu(3,-1)">
          <van-tab name="3" title="已拒绝">
            <!--头部搜索-->
            <van-row class="seekRow" gutter="20"> 
              <van-col span="16"><van-field class="seekField" v-model="fieldYi" placeholder="请输入活动名称" />    
              </van-col>
              <van-col span="8"><van-button class="seekBut">查找</van-button>
              </van-col>
            </van-row>

          </van-tab>
          <van-tab name="4" title="草稿箱">
            <!--头部搜索-->
            <van-row class="seekRow" gutter="20"> 
              <van-col span="16"><van-field class="seekField" v-model="fieldWeiCao" placeholder="请输入活动名称" />    
              </van-col>
              <van-col span="8"><van-button class="seekBut">查找</van-button>
              </van-col>
            </van-row>

          </van-tab>
        </van-tabs>
      </div>
    </div>
         <!--         已发布下拉菜单-->
    <div class='menu_popContainer'  v-show="menu!==-1">
        <div  class="menu1_choose_box" v-show="menu==1">
            <van-row class="choose_box_list" @click="menu2Choose(0)">
                <p class="menu1_choose_box_text " :class="menu2_choose == 0 ? 'blue' : '' ">未开始</p>
            </van-row>
            <van-row class="choose_box_list" @click="menu2Choose(1)">
                <p class="menu1_choose_box_text " :class="menu2_choose == 1 ? 'blue' : '' ">进行中</p>
            </van-row>
            <van-row class="choose_box_list" @click="menu2Choose(2)">
                <p class="menu1_choose_box_text " :class="menu2_choose == 2 ? 'blue' : '' ">已结束</p>
            </van-row>
        </div>
    </div>
         <!--         待审核下拉菜单-->
    <div class='menu_popContainerTwo'  v-show="toAudit!==-1">
        <div  class="menu1_choose_boxTwo" v-show="toAudit==1">
            <van-row class="choose_box_listTwo" @click="menu2Choose(0)">
                <p class="menu1_choose_box_textTwo " :class="menu2_choose == 0 ? 'blue' : '' ">任务新建</p>
            </van-row>
            <van-row class="choose_box_listTwo" @click="menu2Choose(1)">
                <p class="menu1_choose_box_textTwo " :class="menu2_choose == 1 ? 'blue' : '' ">任务终止</p>
            </van-row>
            <van-row class="choose_box_listTwo" @click="menu2Choose(2)">
                <p class="menu1_choose_box_textTwo " :class="menu2_choose == 2 ? 'blue' : '' ">任务变更</p>
            </van-row>
            <van-row class="choose_box_listTwo" @click="menu2Choose(2)">
                <p class="menu1_choose_box_textTwo " :class="menu2_choose == 2 ? 'blue' : '' ">名单补录</p>
            </van-row>
        </div>
    </div>
         <!--         待审核下拉菜单-->
    <div class='menu_popContainerThree'  v-show="refuse!==-1">
        <div  class="menu1_choose_boxThree" v-show="refuse==1">
            <van-row class="choose_box_listThree" @click="menu2Choose(0)">
                <p class="menu1_choose_box_textThree " :class="menu2_choose == 0 ? 'blue' : '' ">拒绝新建</p>
            </van-row>
            <van-row class="choose_box_listThree" @click="menu2Choose(1)">
                <p class="menu1_choose_box_textThree " :class="menu2_choose == 1 ? 'blue' : '' ">拒绝变更</p>
            </van-row>
            <van-row class="choose_box_listThree" @click="menu2Choose(2)">
                <p class="menu1_choose_box_textThree " :class="menu2_choose == 2 ? 'blue' : '' ">拒绝补录</p>
            </van-row>
        </div>
    </div>


  </div>
</template>

<script>
//引入组件首字母大写
import TabBar from '@/components/tabBar';
import { Divider } from 'vant';
export default {

  //基础数据存放处
  data (){
     return {
       title : '新建活动',
       guanLiId:this.$route.params.guanLiId,//跳转参数id
       active: 1,
       menu:-1,  //-1:已发布不显示
       toAudit:-1,//-1:待审核不显示
       refuse:-1,//-1:已拒绝不显示
       menu2_choose:0,
       fieldWei: '',//已发布输入框值
       fieldDai: '',//已发布输入框值
       fieldYi: '',//已发布输入框值
       fieldWeiCao: '',//已发布输入框值
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
    //新建活动页面图标
    onClickRight(){
      this.$router.push('/offlineHuoDong/NewActivities');
    },
    //图标上下拉
    openMenu (value,i){
      if(i==1){
        this.menu=-1
        this.toAudit=-1
        this.refuse=-1
      }
      if(value==1){
        this.menu=i
      }else if(value==2){
        this.toAudit=i
      }else if(value==3){
        this.refuse=i
      }
    },
    //已发布下拉列表中列得点击事件
    menu2Choose(i){
        this.menu2_choose = i;
        this.menu = -1;
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
    overflow: auto;
    margin: 0px;
    padding-top: 1px;
    padding-bottom: 48px;
    background-color: #E7EAF5;
  }
  .seekRow{
    position: fixed;
    top:90px;
    width:100%;
    height:48px;
    line-height: 48px;
  }
  .seekRow .seekField{
    float: right;
    width:95%;
    height:28px;
    line-height:28px;
    font-size:14px;
    padding:0px 0px 0px 10px;
    margin-top:10px;
    border:1px solid #999999;;
    border-radius: 15px;
  }
  .seekRow .seekBut{
    width:90%;
    height:28px;
    line-height:28px;
    font-size:14px;
    padding:0px;
    border-radius: 15px;
  }

  //已发布下拉图标及菜单
  .menu1_open{
      height: 18px;
      width: 18px;
      position: absolute;
      left: 19%;
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
      left:0%;
      width: 25%;
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

  //待审核下拉图标及菜单
  .menu1_openTwo{
      height: 18px;
      width: 18px;
      position: absolute;
      left: 45%;
      top:14px;
      z-index: 100;
  }
  .menu_popContainerTwo{
      position: fixed;
      top: 90px;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0,0,0,0.3);
      z-index: 101;
  }
  .menu1_choose_boxTwo{
      position: relative;
      top:0px;
      left:25%;
      width: 25%;
      text-align: center;
      background-color: white;
  }
  .menu1_choose_box_textTwo{
      line-height: 36px;
      color: #999999;
      font-size: 16px;
      margin-block-start:0;
      margin-block-end:0;
  }
  //已拒绝下拉图标及菜单
  .menu1_openThree{
      height: 18px;
      width: 18px;
      position: absolute;
      left: 70%;
      top:14px;
      z-index: 100;
  }
  .menu_popContainerThree{
      position: fixed;
      top: 90px;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0,0,0,0.3);
      z-index: 101;
  }
  .menu1_choose_boxThree{
      position: relative;
      top:0px;
      left:50%;
      width: 25%;
      text-align: center;
      background-color: white;
  }
  .menu1_choose_box_textThree{
      line-height: 36px;
      color: #999999;
      font-size: 16px;
      margin-block-start:0;
      margin-block-end:0;
  }
</style>
