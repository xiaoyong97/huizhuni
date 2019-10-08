<template>
  <div class="main" style="position: relative;">
    <!--头部导航-->
    <van-nav-bar class="vnavbar" :title="title"></van-nav-bar>
    <img src="../../assets/images/38/return@2x.png" class="img_return" @click="onClickLeft" />
    <span class="more_choose" @click="go">确认</span>
    <div class="main">
      <div class="main_box">
        <van-row class="list_row_top">
          <van-col
            class
            style="background-color: #4c62e7;width: 10px;height: 16px;margin: 9px 4px 9px 0;"
          ></van-col>
          <van-col class="list_title" style="text-align: left">
            <p class="list_right_text">企业基本信息</p>
          </van-col>
        </van-row>
        <van-row class="list_row">
          <van-col class="list_left" style="text-align: left;width: 132px;">
            <p class="list_test">企业名称</p>
          </van-col>
          <van-col class="list_right" style="text-align: left">
            <p class="list_test" style="color: rgb(51,51,51)">广州市睿智防水电器股份有限公司</p>
          </van-col>
        </van-row>
        <van-row class="list_row">
          <van-col class="list_left" style="text-align: left;width: 132px;">
            <p class="list_test">企业主</p>
          </van-col>
          <van-col class="list_right" style="text-align: left">
            <p class="list_test" style="color: rgb(51,51,51)">艾仲华</p>
          </van-col>
        </van-row>
        <van-row class="list_row">
          <van-col class="list_left" style="text-align: left;width: 132px;">
            <p class="list_test">统一信用社会编码</p>
          </van-col>
          <van-col class="list_right" style="text-align: left">
            <p class="list_test" style="color: rgb(51,51,51)">91120116MA07K2307A</p>
          </van-col>
        </van-row>
        <van-row class="list_row">
          <van-col class="list_left" style="text-align: left;width: 132px;">
            <p class="list_test">采集时间</p>
          </van-col>
          <van-col class="list_right" style="text-align: left">
            <p class="list_test" style="color: rgb(51,51,51)">2019-8-15</p>
          </van-col>
        </van-row>
        <van-row class="list_row">
          <van-col class="list_left" style="text-align: left;width: 132px;">
            <p class="list_test">ID</p>
          </van-col>
          <van-col class="list_right" style="text-align: left">
            <p class="list_test" style="color: rgb(51,51,51)">120106197010204098</p>
          </van-col>
        </van-row>
        <van-row class="list_row_top">
          <van-col
            class
            style="background-color: #4c62e7;width: 10px;height: 16px;margin: 9px 4px 9px 0;"
          ></van-col>
          <van-col class="list_title" style="text-align: left">
            <p class="list_right_text">贷款计划</p>
          </van-col>
        </van-row>
        <van-row class="list_row">
          <van-col class="list_left" style="text-align: left;width: 132px;">
            <p class="list_test">产品计划</p>
          </van-col>
          <van-col class="list_right" style="text-align: left">
            <p class="list_test" style="color: rgb(51,51,51)">9613</p>
          </van-col>
        </van-row>
        <van-row class="list_row">
          <van-col class="list_left" style="text-align: left;width: 132px;">
            <p class="list_test">币种</p>
          </van-col>
          <van-col class="list_right" style="text-align: left">
            <p class="list_test" style="color: rgb(51,51,51)">人民币</p>
          </van-col>
        </van-row>
        <van-row class="list_row">
          <van-col class="list_left" style="text-align: left;width: 132px;">
            <p class="list_test">借款金额(元)</p>
          </van-col>
          <van-col class="list_right" style="text-align: left">
            <p class="list_test" style="color: rgb(51,51,51)">8,500,000</p>
          </van-col>
        </van-row>
        <van-row class="list_row">
          <van-col class="list_left" style="text-align: left;width: 132px;">
            <p class="list_test">借款金额大写</p>
          </van-col>
          <van-col class="list_right" style="text-align: left">
            <p class="list_test" style="color: rgb(51,51,51)">八百伍拾万元整</p>
          </van-col>
        </van-row>
        <van-row class="list_row">
          <van-col class="list_left" style="text-align: left;width: 132px;">
            <p class="list_test">借款期限</p>
          </van-col>
          <van-col class="list_right" style="text-align: left">
            <p class="list_test" style="color: rgb(51,51,51)">3年</p>
          </van-col>
        </van-row>
      </div>
    </div>

    <div class="main">
      <div class="main_box">
        <van-row class="list_row_top">
          <van-col
            class
            style="background-color: #4c62e7;width: 10px;height: 16px;margin: 9px 4px 9px 0;"
          ></van-col>
          <van-col class="list_title" style="text-align: left">
            <p class="list_right_text">企业基本信息</p>
          </van-col>
        </van-row>
        <van-collapse v-model="activeName" accordion>
          <van-collapse-item name="1">
            <div class="letdiv" slot="title">企业信息</div>
            <div slot="value" class="lockcol" @click="lockCli(0)">查看</div>

            <van-row class="list_row">
              <van-col class="list_left" style="text-align: left;width:100%;position:relative;">
                <img class="img24_chosen" src="../../assets/images/24/chosen@2x.png" alt />
                <p class="list_test">新一代客户编号：252841000000526649</p>
              </van-col>
            </van-row>
            <van-row class="list_row">
              <van-col class="list_left" style="text-align: left;width:100%;position:relative;">
                <p class="list_test2">统一社会信用代码：91120116MA07K2307A</p>
              </van-col>
            </van-row>
            <van-row class="list_row">
              <van-col class="list_left" style="text-align: left;width:100%;position:relative;">
                <p class="list_test2">企业名称：广州市睿智防水电器股份有限公司</p>
              </van-col>
            </van-row>
            <van-row class="list_row">
              <van-col class="list_left" style="text-align: left;width:100%;position:relative;">
                <p class="list_test2">企业地址：广州市高新技术产业开发区迎宾大道188号</p>
              </van-col>
            </van-row>
            <van-row class="list_row">
              <van-col class="list_left" style="text-align: left;width:100%;position:relative;">
                <p class="list_test2">企业法定代表人：艾仲华</p>
              </van-col>
            </van-row>
            <van-row class="list_row">
              <van-col class="list_left" style="text-align: left;width:100%;position:relative;">
                <p class="list_test2">法定代表人电话：13702137765</p>
              </van-col>
            </van-row>
            <van-row class="list_row">
              <van-col class="list_left" style="text-align: left;width:100%;position:relative;">
                <p class="list_test2">法定代表人地址：广州市高新技术产业开发区迎宾大道188号</p>
              </van-col>
            </van-row>
          </van-collapse-item>
          <van-collapse-item name="2">
            <div class="letdiv" slot="title">企业主信息</div>
            <div slot="value" class="lockcol" @click="lockCli(1)">查看</div>
            <van-row class="list_row">
              <van-col class="list_left" style="text-align: left;width:100%;position:relative;">
                <img class="img24_chosen" src="../../assets/images/24/chosen@2x.png" alt />
                <p class="list_test">姓名：艾仲华</p>
              </van-col>
            </van-row>
            <van-row class="list_row">
              <van-col class="list_left" style="text-align: left;width:100%;position:relative;">
                <p class="list_test2">性别：女</p>
              </van-col>
            </van-row>
            <van-row class="list_row">
              <van-col class="list_left" style="text-align: left;width:100%;position:relative;">
                <p class="list_test2">民族：汉族</p>
              </van-col>
            </van-row>
            <van-row class="list_row">
              <van-col class="list_left" style="text-align: left;width:100%;position:relative;">
                <p class="list_test2">出生日期：1976.8.1</p>
              </van-col>
            </van-row>
            <van-row class="list_row">
              <van-col class="list_left" style="text-align: left;width:100%;position:relative;">
                <p class="list_test2">住址：广州市天河朱景新城中花城大道中海花城湾4号楼3们201</p>
              </van-col>
            </van-row>
            <van-row class="list_row">
              <van-col class="list_left" style="text-align: left;width:100%;position:relative;">
                <p class="list_test2">公民身份证号：120106197608016578</p>
              </van-col>
            </van-row>
            <van-row class="list_row">
              <van-col class="list_left" style="text-align: left;width:100%;position:relative;">
                <p class="list_test2">有效期：2030.1.1</p>
              </van-col>
            </van-row>
            <van-row class="list_row">
              <van-col class="list_left" style="text-align: left;width:100%;position:relative;">
                <p class="list_test2">学历：研究生</p>
              </van-col>
            </van-row>
            <van-row class="list_row">
              <van-col class="list_left" style="text-align: left;width:100%;position:relative;">
                <p class="list_test2">手机号：13702137765</p>
              </van-col>
            </van-row>
            <van-row class="list_row">
              <van-col class="list_left" style="text-align: left;width:100%;position:relative;">
                <p class="list_test2">工作单位：广州市睿智防水电器股份有限公司</p>
              </van-col>
            </van-row>
            <van-row class="list_row">
              <van-col class="list_left" style="text-align: left;width:100%;position:relative;">
                <p class="list_test2">婚姻状况：已婚</p>
              </van-col>
            </van-row>
            <van-row class="list_row">
              <van-col class="list_left" style="text-align: left;width:100%;position:relative;">
                <p class="list_test2">家庭人数：3</p>
              </van-col>
            </van-row>
          </van-collapse-item>
          <van-collapse-item name="3">
            <div class="letdiv" slot="title">关联人信息</div>
            <div slot="value" class="lockcol" @click="lockCli(2)">查看</div>
            <van-row class="list_row">
              <van-col class="list_left" style="text-align: left;width:100%;position:relative;">
                <img class="img24_chosen" src="../../assets/images/24/chosen@2x.png" alt />
                <p class="list_test" style="color:#323233;">姓名：李天明</p>
              </van-col>
            </van-row>
            <van-row class="list_row">
              <van-col class="list_left" style="text-align: left;width:100%;position:relative;">
                <p class="list_test2">性别：男</p>
              </van-col>
            </van-row>
            <van-row class="list_row">
              <van-col class="list_left" style="text-align: left;width:100%;position:relative;">
                <p class="list_test2">民族：汉族</p>
              </van-col>
            </van-row>
            <van-row class="list_row">
              <van-col class="list_left" style="text-align: left;width:100%;position:relative;">
                <p class="list_test2">出生日期：1970.10.20</p>
              </van-col>
            </van-row>
            <van-row class="list_row">
              <van-col class="list_left" style="text-align: left;width:100%;position:relative;">
                <p class="list_test2">住址：广州市天河朱景新城中花城大道中海花城湾4号楼3们201</p>
              </van-col>
            </van-row>
            <van-row class="list_row">
              <van-col class="list_left" style="text-align: left;width:100%;position:relative;">
                <p class="list_test2">公民身份证号：120106197010204098</p>
              </van-col>
            </van-row>
            <van-row class="list_row">
              <van-col class="list_left" style="text-align: left;width:100%;position:relative;">
                <p class="list_test2">有效期：2030.1.1</p>
              </van-col>
            </van-row>
            <van-row class="list_row">
              <van-col class="list_left" style="text-align: left;width:100%;position:relative;">
                <p class="list_test2">学历：研究生</p>
              </van-col>
            </van-row>
            <van-row class="list_row">
              <van-col class="list_left" style="text-align: left;width:100%;position:relative;">
                <p class="list_test2">手机号：13439078656</p>
              </van-col>
            </van-row>
          </van-collapse-item>
          <van-collapse-item name="4">
            <div class="letdiv" slot="title">抵押物及抵押人信息</div>
            <div slot="value" class="lockcol" @click="lockCli(3)">查看</div>

            <van-row class="list_row">
              <van-col class="list_left" style="text-align: left;width:100%;position:relative;">
                <img class="img24_chosen" src="../../assets/images/24/chosen@2x.png" alt />
                <p class="list_test" style="color:#323233;">权力人：艾仲华</p>
              </van-col>
            </van-row>
            <van-row class="list_row">
              <van-col class="list_left" style="text-align: left;width:100%;position:relative;">
                <p class="list_test2">共有情况：自由</p>
              </van-col>
            </van-row>
            <van-row class="list_row">
              <van-col class="list_left" style="text-align: left;width:100%;position:relative;">
                <p class="list_test2">坐落：广东省广州市天河区花城大道中海花城湾4号楼3门201</p>
              </van-col>
            </van-row>
            <van-row class="list_row">
              <van-col class="list_left" style="text-align: left;width:100%;">
                <p class="list_test2">不动产号：0130031024</p>
              </van-col>
            </van-row>
            <van-row class="list_row">
              <van-col class="list_left" style="text-align: left;width:100%;">
                <p class="list_test2">权力性质：自有</p>
              </van-col>
            </van-row>
            <van-row class="list_row">
              <van-col class="list_left" style="text-align: left;width:100%;">
                <p class="list_test2">用途：住宅</p>
              </van-col>
            </van-row>
            <van-row class="list_row">
              <van-col class="list_left" style="text-align: left;width:100%;">
                <p class="list_test2">建筑面积：120.4</p>
              </van-col>
            </van-row>
            <van-row class="list_row">
              <van-col class="list_left" style="text-align: left;width:100%;">
                <p class="list_test2">权力其他情况：无</p>
              </van-col>
            </van-row>
          </van-collapse-item>
        </van-collapse>
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
      title: "确认贷款信息",
      activeName: "a",
      current: 0
    };
  },

  //数据预加载
  created: function() {},

  //网页加载完成
  mounted() {},

  //声明方法
  methods: {
    lockCli(type) {
      localStorage.setItem("ckywj_type", type);
      this.$router.push("./launchDetails/lookOriginalFile/loanBusinessOwner");
    },
    go() {
      this.$router.push("/loanLaunch");
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
.more_choose {
  position: fixed;
  top: 15px;
  right: 12px;
  color: #4c62e7;
  font-size: 14px;
  z-index: 100;
}
.img24_chosen {
  width: 16px;
  float: left;
  position: absolute;
  left: -22px;
  top: 10px;
}
.van-cell__right-icon {
  position: absolute !important;
  left: 10px;
}
.van-collapse-item__content {
  padding: 0px 50px 20px 50px;
}
</style>

<style lang="scss" scoped>
.letdiv {
  padding-left: 25px;
}
.vnavbar {
  position: fixed;
  top: 0px;
  width: 100%;
}
.lockcol {
  color: #0062b3;
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
  line-height: 25px;
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
