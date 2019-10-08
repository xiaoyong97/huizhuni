<template>
  <div class="main" style="position: relative;">
    <!--头部导航-->
    <van-nav-bar class="vnavbar" :title="title"></van-nav-bar>
    <img src="../../../assets/images/38/return@2x.png" class="img_return" @click="onClickLeft" />
    <span class="more_choose" @click="go('/confirmLoanInformation')">下一步</span>
    <div class="main">
      <div class="main_box">
        
        <van-row class="list_row" style="padding-top:10px;">
          
          <!-- <van-field label="产品代码" placeholder="请输入产品代码" v-model="info.cpCode" clearable label-width="116"/> -->
          <van-col class="list_left" style="text-align: left;width: 132px;">
            <p class="list_test paddingLeft">产品代码</p>
          </van-col>
          <van-col class="list_right" style="text-align:left;width:250px;">
            <span class="inptSpan">
              <input class="inptmodel" type="text" value="9613">
            </span>
          </van-col>
          
        </van-row>
        <van-row class="list_row">
          <van-col class="list_left" style="text-align: left;width: 132px;">
            <p class="list_test paddingLeft">产品名称</p>
          </van-col>
          <van-col class="list_right" style="text-align: left">
            <p class="list_test" style="color: rgb(51,51,51)">抵押快贷</p>
          </van-col>
        </van-row>
        <van-row class="list_row">
          <van-col class="list_left" style="text-align: left;width: 132px;">
            <p class="list_test paddingLeft">币种</p>
          </van-col>
          <van-col class="list_right" style="text-align: left;width:250px;">
            <!-- <p class="list_test" style="color: rgb(51,51,51)">
              <select class="slectmodel" name="ymdSelect" id="ymdSelect">
                <option>人民币</option>
              </select>
            </p> -->
            <div class="slectModule2">
              <van-dropdown-menu id="slectModule" :overlay="false" style="height:35px;">
                <van-dropdown-item style="height:170px;" v-model="value1" :options="option1" />
              </van-dropdown-menu>
            </div>
          </van-col>
          <!-- <van-col class="list_left" id="fieldSelect" style="text-align: left;width:100%">
            <van-field style="paddin-left:0px;"
              readonly
              clickable
              label="币种"
              :value="value"
              placeholder="请选择币种"
              @click="showPicker = true"
            />
            <van-popup v-model="showPicker" position="bottom">
              <van-picker
                show-toolbar
                :columns="columns"
                @cancel="showPicker = false"
                @confirm="onConfirm"
              />
            </van-popup>
          </van-col> -->
        </van-row>
        <van-row class="list_row">
          <!-- <van-col>
            <van-field label="借款金额(元)" placeholder="请输入借款金额" v-model="info.mmmey" clearable label-width="116"/>
          </van-col> -->
          <van-col class="list_left" style="text-align: left;width: 132px;">
            <p class="list_test paddingLeft">借款金额(元)</p>
          </van-col>
          <van-col class="list_right" style="text-align:left;width:250px;">
            <span class="inptSpan">
              <input class="inptmodel" type="text" value="200,000">
            </span>
          </van-col>
        </van-row>
        <!-- <van-row class="list_row">
          <van-col class="list_left" style="text-align: left;width: 132px;">
            <p class="list_test paddingLeft">借款金额(元)</p>
          </van-col>
          <van-col class="list_right" style="text-align: left">
            <p class="list_test" style="color: rgb(51,51,51)">200,000</p>
          </van-col>
        </van-row> -->
        <van-row class="list_row">
          <van-col class="list_left" style="text-align: left;width: 132px;">
            <p class="list_test paddingLeft">借款金额大写</p>
          </van-col>
          <van-col class="list_right" style="text-align: left">
            <p class="list_test" style="color: rgb(51,51,51)">贰拾万元整</p>
          </van-col>
        </van-row>
        <van-row class="list_row">
          <van-col class="list_left" style="text-align: left;width: 132px;">
            <p class="list_test paddingLeft">借款期限</p>
          </van-col>
          <van-col class="list_right" style="text-align: left;width:250px;">
            <p class="list_test" style="color: rgb(51,51,51);width:112px;float:left;margin-right:10px;">
              <span class="inptSpan">
                <input class="inptmodel" type="text" value="12">
              </span>
              <!-- <select class="slectmodel" name="ymdSelect" id="ymdSelect">
                <option>年</option>
                <option>月</option>
                <option>日</option>
              </select> -->
            </p>
            <div class="slectModule2">
              <van-dropdown-menu :overlay="false" style="height:35px;">
                <van-dropdown-item style="height:170px;" v-model="value2" :options="option2" />
              </van-dropdown-menu>
            </div>
          </van-col>
        </van-row>
        
      </div>
    </div>

  </div>
</template>

<script>
//引入组件首字母大写
import TabBar from "@/components/tabBar";
import { Tab, Tabs, Swipe, SwipeItem, Row, Col, Collapse } from "vant";
import Vue from "vue";

Vue.use(Swipe)
  .use(SwipeItem)
  .use(Col)
  .use(Row)
  .use(Tab)
  .use(Tabs)
  .use(Collapse);
export default {
  //基础数据存放处
  data() {
    return {
      title: "录入贷款计划",
      activeName: "a",
      current: 0,
      info:{
        cpCode:'9613',
        mmmey:'200,000',
      },
      value: '',
      showPicker: false,
      columns: ['人民币', '港币', '澳门币', '美元', '英镑'],
      //切换模式
      value1: 0,
      option1: [
        { text: '人民币', value: 0 },
        { text: '港币', value: 1 },
        { text: '澳门币', value: 2 },
        { text: '美元', value: 3 },
        { text: '英镑', value: 4 }
      ],
      value2: 0,
      option2: [
        { text: '年', value: 0 },
        { text: '月', value: 1 },
        { text: '日', value: 2 }
      ],
    };
  },

  //数据预加载
  created: function() {},

  //网页加载完成
  mounted() {},

  //声明方法
  methods: {
    onConfirm(value) {
      this.value = value;
      this.showPicker = false;
    },
    go(goName){
        this.$router.push(goName);
    },
    onClickLeft() {
      this.$router.go(-1);
    },
    onChange(index) {
      this.current = index;
    },
    goviewList: function() {
      this.$router.push("./viewList");
    }
  },

  //计算属性
  computed: {},

  components: {
    TabBar
  }
};
</script>
<style lang="postcss">
.slectModule2{
  width: 108px;
  height: 35px;
  line-height: 35px;
  text-align: center;
  background-color: #ffffff;
  border:solid 0.5px #eeeeee;  
  border-radius: 15px;
  z-index: 1;
  padding:0px 10px 0px 8px;
  text-align: center;
  float: left;
  margin-top: 3px;
}
option{width: 125px;}
.inptmodel{border:none;height:25px;width:90%;position:relative;top:2px;float: left;}
.inptSpan{border:1px solid #eeeeee;border-radius:30px;width:90%;height:32px;float:left;padding-left:15px;margin-top: 3px;}
.slectmodel{margin-top:3px;height:35px;width:50%;float:left;border-radius:30px;padding-left:35px;text-align:center;}
.paddingLeft{
  padding-left: 15px;
}
.more_choose{
    position: fixed;
    top: 15px;
    right: 12px;
    color: #4c62e7;
    font-size: 14px;
    z-index: 100;
}
.img24_chosen{
  width: 16px;
  float: left;
  position: absolute;
  left: -22px;
  top:10px; 
}
.van-cell__right-icon{
    position: absolute !important;
    left: 10px;
}
.van-collapse-item__content {
    padding: 0px 50px 20px 50px;
}

#fieldSelect .van-cell__value:nth-of-type(2) .van-field__control {
  padding-left: 24px;
}
</style>

<style lang="scss" scoped>
body{background-color: #eeeeee;}
.van-cell:not(:last-child)::after{
  border: none;
}
.letdiv{
    padding-left: 25px;
}
.vnavbar{
    position: fixed;
    top: 0px;
    width: 100%;
}
.lockcol{
    color:#0062B3;
}
.img_swiper {
  height: 200px;
  width: auto;
}
.img_active {
  height: 100%;
  width: 100%;
}
.img_box {
  padding-top: 8px;
}
.main {
  background-color: rgb(238, 238, 238);
  position: relative;
  top: 23px;
}
.list_right_text {
  margin-block-start: 0;
  margin-block-end: 0;
  font-size: 14px;
  line-height: 34px;
  color: rgb(51, 51, 51);
}
.list_test_examine {
  line-height: 40px;
  font-size: 15px;
  margin-block-start: 0;
  margin-block-end: 0;
  color: rgb(153, 153, 153);
}
.img_return {
  position: fixed;
  top: 14px;
  left: 12px;
  height: 18px;
  width: 18px;
  z-index: 100;
}
.main_box {
  height: 100%;
  width: 100%;
  background-color: white;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  position: relative;
  top: 10px;
  padding-bottom: 10px;
}
.list_test {
  line-height: 40px;
  margin-block-start: 0;
  margin-block-end: 0;
  color: rgb(102, 102, 102);
}

.list_test2 {
  line-height:25px;
  margin-block-start: 0;
  margin-block-end: 0;
  color: rgb(102, 102, 102);
}
.list_test_min {
  line-height: 30px;
  font-size: 12px;
  margin-block-start: 0;
  margin-block-end: 0;
  color: rgb(102, 102, 102);
}
.list_test_min_head {
  line-height: 30px;
  font-size: 14px;
  margin-block-start: 0;
  margin-block-end: 0;
  color: rgb(51, 51, 51);
}
.list_test_last {
  padding-left: 4px;
  line-height: 40px;
  font-size: 14px;
  margin-block-start: 0;
  margin-block-end: 0;
  color: rgb(51, 51, 51);
}
.list_row_top {
  padding: 0px 12px;
}
.list_row {
  padding: 0 12px;
  margin: 0;
  margin-bottom: 5px;
}
.list_left {
  text-align: left;
  width: 123px;
}
.list_right {
  text-align: left;
}
.secend_box {
  background-color: #ffffff;
  position: relative;
  top: -10px;
  width: 100%;
  height: 136px;
  margin-top: 9px;
}
.img_right {
  height: 16px;
  width: 16px;
  margin: 12px 0;
}
.not_start {
  z-index: 100;
  width: 60px;
  height: 40px;
  background-color: #999999;
  position: absolute;
  right: 0;
  top: 20px;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
