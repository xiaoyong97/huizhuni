<template>
  <div class="main" style="position: relative;">
    <!--头部导航-->
    <van-nav-bar class="vnavbar" :title="title"></van-nav-bar>
    <img src="../../../assets/images/38/return@2x.png" class="img_return" @click="onClickLeft" />
    <span class="more_choose" @click="go">确认</span>

    <div class="main">
      <div class="main_box">

        <van-collapse v-model="activeName">
          <van-collapse-item name="1">
              <div class="letdiv" slot="title">企业信息</div>
                <van-row class="list_row">
                    <van-col class="list_left" style="text-align: left;width:100%;position:relative;">
                        <img class="img24_chosen" src="../../../assets/images/38/choose@2x.png" alt="">
                        <p class="list_test">新一代客户编号：{{info.company_info.customer_id}}</p>
                    </van-col>
                </van-row>
                <van-row class="list_row">
                    <van-col class="list_left" style="text-align: left;width:100%;position:relative;">
                        <p class="list_test2">统一社会信用代码：{{info.company_info.unified_social_credit_code}}</p>
                    </van-col>
                </van-row>
                <van-row class="list_row">
                    <van-col class="list_left" style="text-align: left;width:100%;position:relative;">
                        <p class="list_test2">企业名称：{{info.company_info.company_name}}</p>
                    </van-col>
                </van-row>
                <van-row class="list_row">
                    <van-col class="list_left" style="text-align: left;width:100%;position:relative;">
                        <p class="list_test2">企业地址：{{info.company_info.enterprise_address}}</p>
                    </van-col>
                </van-row>
                <van-row class="list_row">
                    <van-col class="list_left" style="text-align: left;width:100%;position:relative;">
                        <p class="list_test2">企业法定代表人：{{info.company_info.legal_representative}}</p>
                    </van-col>
                </van-row>
                <van-row class="list_row">
                    <van-col class="list_left" style="text-align: left;width:100%;position:relative;">
                        <p class="list_test2">法定代表人电话：{{info.company_info.mobile}}</p>
                    </van-col>
                </van-row>
                <van-row class="list_row">
                    <van-col class="list_left" style="text-align: left;width:100%;position:relative;">
                        <p class="list_test2">法定代表人地址：{{info.company_info.legal_representative_address}}</p>
                    </van-col>
                </van-row>

            </van-collapse-item>
          <van-collapse-item name="2">
              <div class="letdiv" slot="title">企业主信息</div>
                <van-row class="list_row">
                    <van-col class="list_left" style="text-align: left;width:100%;position:relative;">
                        <img class="img24_chosen" src="../../../assets/images/38/choose@2x.png" alt="">
                        <p class="list_test">姓名：{{info.company_main_info.name}}</p>
                    </van-col>
                </van-row>
                <van-row class="list_row">
                    <van-col class="list_left" style="text-align: left;width:100%;position:relative;">
                        <p class="list_test2">性别：{{info.company_main_info.sex}}</p>
                    </van-col>
                </van-row>
                <van-row class="list_row">
                    <van-col class="list_left" style="text-align: left;width:100%;position:relative;">
                        <p class="list_test2">民族：{{info.company_main_info.ethnic}}</p>
                    </van-col>
                </van-row>
                <van-row class="list_row">
                    <van-col class="list_left" style="text-align: left;width:100%;position:relative;">
                        <p class="list_test2">出生日期：{{info.company_main_info.birth}}</p>
                    </van-col>
                </van-row>
                <van-row class="list_row">
                    <van-col class="list_left" style="text-align: left;width:100%;position:relative;">
                        <p class="list_test2">住址：{{info.company_main_info.address}}</p>
                    </van-col>
                </van-row>
                <van-row class="list_row">
                    <van-col class="list_left" style="text-align: left;width:100%;position:relative;">
                        <p class="list_test2">公民身份证号：{{info.company_main_info.idcard}}</p>
                    </van-col>
                </van-row>
                <van-row class="list_row">
                    <van-col class="list_left" style="text-align: left;width:100%;position:relative;">
                        <p class="list_test2">有效期：{{info.company_main_info.validity_period}}</p>
                    </van-col>
                </van-row>
                <van-row class="list_row">
                    <van-col class="list_left" style="text-align: left;width:100%;position:relative;">
                        <p class="list_test2">学历：{{info.company_main_info.record_of_formal_schooling}}</p>
                    </van-col>
                </van-row>
                <van-row class="list_row">
                    <van-col class="list_left" style="text-align: left;width:100%;position:relative;">
                        <p class="list_test2">手机号：{{info.company_main_info.mobile}}</p>
                    </van-col>
                </van-row>
                <van-row class="list_row">
                    <van-col class="list_left" style="text-align: left;width:100%;position:relative;">
                        <p class="list_test2">工作单位：{{info.company_main_info.work}}</p>
                    </van-col>
                </van-row>
                <van-row class="list_row">
                    <van-col class="list_left" style="text-align: left;width:100%;position:relative;">
                        <p class="list_test2">婚姻状况：{{info.company_main_info.marriage_status}}</p>
                    </van-col>
                </van-row>
                <van-row class="list_row">
                    <van-col class="list_left" style="text-align: left;width:100%;position:relative;">
                        <p class="list_test2">家庭人数：{{info.company_main_info.households}}</p>
                    </van-col>
                </van-row>
            </van-collapse-item>
          <van-collapse-item name="3">
              <div class="letdiv" slot="title">关联人信息</div>
				<div v-for="(item ,index) in info.associates">
					<van-row class="list_row">
					    <van-col class="list_left" style="text-align: left;width:100%;position:relative;">
					        <img class="img24_chosen" src="../../../assets/images/38/choose@2x.png" alt="">
					        <p class="list_test" style="color:#323233;">姓名：{{item.name}}</p>
					    </van-col>
					</van-row>
					<van-row class="list_row">
					    <van-col class="list_left" style="text-align: left;width:100%;position:relative;">
					        <p class="list_test2">性别：{{item.sex}}</p>
					    </van-col>
					</van-row>
					<van-row class="list_row">
					    <van-col class="list_left" style="text-align: left;width:100%;position:relative;">
					        <p class="list_test2">民族：{{item.ethnic}}</p>
					    </van-col>
					</van-row>
					<van-row class="list_row">
					    <van-col class="list_left" style="text-align: left;width:100%;position:relative;">
					        <p class="list_test2">出生日期：{{item.birth}}</p>
					    </van-col>
					</van-row>
					<van-row class="list_row">
					    <van-col class="list_left" style="text-align: left;width:100%;position:relative;">
					        <p class="list_test2">住址：{{item.address}}</p>
					    </van-col>
					</van-row>
					<van-row class="list_row">
					    <van-col class="list_left" style="text-align: left;width:100%;position:relative;">
					        <p class="list_test2">公民身份证号：{{item.idcard}}</p>
					    </van-col>
					</van-row>
					<van-row class="list_row">
					    <van-col class="list_left" style="text-align: left;width:100%;position:relative;">
					        <p class="list_test2">有效期：{{item.validity_period}}</p>
					    </van-col>
					</van-row>
					<van-row class="list_row">
					    <van-col class="list_left" style="text-align: left;width:100%;position:relative;">
					        <p class="list_test2">学历：{{item.record_of_formal_schooling}}</p>
					    </van-col>
					</van-row>
					<van-row class="list_row">
					    <van-col class="list_left" style="text-align: left;width:100%;position:relative;">
					        <p class="list_test2">手机号：{{item.mobile}}</p>
					    </van-col>
					</van-row>

				</div>
            </van-collapse-item>
          <van-collapse-item name="4">
              <div class="letdiv" slot="title">抵押物及抵押人信息</div>
              <div>
                <van-row class="list_row">
                    <van-col class="list_left" style="text-align: left;width:100%;position:relative;">
                        <img class="img24_chosen" src="../../../assets/images/38/choose@2x.png" alt="">
                        <p class="list_test" style="color:#323233;">抵押物1：</p>
                    </van-col>
                </van-row>
                <van-row class="list_row">
                    <van-col class="list_left" style="text-align: left;width:100%;position:relative;">
                        <p class="list_test" style="color:#323233;">不动产权证：</p>
                        <img src="../../../assets/images/other/budongchan.png" alt="">
                    </van-col>
                </van-row>
                <van-row class="list_row">
                    <van-col class="list_left" style="text-align: left;width:100%;">
                        <p class="list_test2">权利人：艾仲华</p>
                    </van-col>
                </van-row>
              </div>
              <div v-for="(item ,index) in info.mortgaged">
                <van-row class="list_row">
                    <van-col class="list_left" style="text-align: left;width:100%;position:relative;">
                        <img class="img24_chosen" src="../../../assets/images/38/choose@2x.png" alt="">
                        <p class="list_test" style="color:#323233;">抵押物2：</p>
                    </van-col>
                </van-row>
                <van-row class="list_row">
                    <van-col class="list_left" style="text-align: left;width:100%;position:relative;">
                        <p class="list_test" style="color:#323233;">企业法人：</p>
                        <img style="width:100%;float:right;" src="../../../assets/images/idcard/sfz.png" alt="">
                    </van-col>
                </van-row>
                <van-row class="list_row">
                    <van-col class="list_left" style="text-align: left;width:100%;position:relative;">
                        <p class="list_test2">新一代客户编号：44099999999</p>
                    </van-col>
                </van-row>
                <van-row class="list_row">
                    <van-col class="list_left" style="text-align: left;width:100%;position:relative;">
                        <p class="list_test2">统一社会信用代码：xxxxxxx</p>
                    </van-col>
                </van-row>
                <van-row class="list_row">
                    <van-col class="list_left" style="text-align: left;width:100%;">
                        <p class="list_test2">企业名称：广州老地方有限公司</p>
                    </van-col>
                </van-row>
                <van-row class="list_row">
                    <van-col class="list_left" style="text-align: left;width:100%;">
                        <p class="list_test2">企业地址：广州市越秀区法政路XX号</p>
                    </van-col>
                </van-row>
                <van-row class="list_row">
                    <van-col class="list_left" style="text-align: left;width:100%;">
                        <p class="list_test2">法定代表人：广州市越秀区法政路XX号</p>
                    </van-col>
                </van-row>
                <van-row class="list_row">
                    <van-col class="list_left" style="text-align: left;width:100%;">
                        <p class="list_test2">公民身份证号码：艾仲华</p>
                    </van-col>
                </van-row>
                <van-row class="list_row">
                    <van-col class="list_left" style="text-align: left;width:100%;">
                        <p class="list_test2">有效期限：2030-01-10</p>
                    </van-col>
                </van-row>
                <van-row class="list_row">
                    <van-col class="list_left" style="text-align: left;width:100%;">
                        <p class="list_test2">法定代表人电话：13800000000</p>
                    </van-col>
                </van-row>
                <van-row class="list_row">
                    <van-col class="list_left" style="text-align: left;width:100%;">
                        <p class="list_test2">法定代表人地址：广州市越秀区法政路XX号</p>
                    </van-col>
                </van-row>
                <van-row class="list_row">
                    <van-col class="list_left" style="text-align: left;width:100%;">
                        <p class="list_test2">抵押人2联系方式：138000000000</p>
                    </van-col>
                </van-row>
                <van-row class="list_row">
                    <van-col class="list_left" style="text-align: left;width:100%;">
                        <p class="list_test2"><span style="width:103px;height:20px;float:left;"></span>FC2384239482392</p>
                    </van-col>
                </van-row>
                <van-row class="list_row">
                    <van-col class="list_left" style="text-align: left;width:100%;">
                        <p class="list_test2"><span style="width:103px;height:20px;float:left;"></span>FC7717626617263</p>
                    </van-col>
                </van-row>
                </div>
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
      title: "选择采集信息",
      activeName: [],
      current: 0,
	  info:{}
    };
  },

  //数据预加载
  created() {
      var infos =  sessionStorage.getItem('userinfo')
	  if(null != infos && undefined != infos && '' != infos){
	  	 infos = JSON.parse(infos)
               var unid = this.$route.query.unid;
	  		 for(var i=0;i<infos.length;i++){
	  			 if(unid == infos[i].unid){
                      this.info = infos[i];
	  			 }
	  		 }
	  }
  },

  //网页加载完成
  mounted() {

  },

  //声明方法
  methods: {
    lockCli(type){
		localStorage.setItem('ckywj_type',type);
        this.$router.push('./launchDetails/lookOriginalFile/loanBusinessOwner');
    },
    onClickLeft() {
      //返回列表待申请
      sessionStorage.setItem("loanLaunch_sq","待申请");
      this.$router.go(-1);
    },
    onChange(index) {
      this.current = index;
    },
    go: function() {
      this.$router.push({name:"inputLoanScheme",query:{unid:this.info.unid}});
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
  top:11px;
}
.van-cell__right-icon{
    position: absolute !important;
    left: 10px;
}
.van-collapse-item__content {
    padding: 0px 50px 20px 50px;
}
</style>

<style lang="scss" scoped>
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
