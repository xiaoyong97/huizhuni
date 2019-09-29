<template>
  <div class="main">
    <!--头部-->
    <van-nav-bar :title="title" fixed />

    <div class="content">
      <div class="grid-container">
        <div class="box">
			<van-row class="vspan-col">
				<van-col span="6">
					<img src="../../assets/images/84/InformationCollection@2x.png" alt />
              		<p>信息采集</p>
				</van-col>
				<van-col span="6">
					<img src="../../assets/images/84/Creditcheck1@2x.png" alt />
					<p>征信校验</p>
				</van-col>
				<van-col span="6">
					<img src="../../assets/images/84/Loaninitiation1@2x.png" alt />
              		<p>贷款发起</p>
				</van-col>
				<van-col span="6">
					<img src="../../assets/images/84/Creditinquiry@2x.png" alt />
              		<p>审贷查询</p>
				</van-col>
			</van-row>
			<van-row class="vspan-col">
				<van-col span="6">
					<img src="../../assets/images/84/Mortgageregistration@2x.png" alt />
					<p>抵押登记</p>
				</van-col>
				<van-col span="6">
					<img src="../../assets/images/84/Post-loantracking@2x.png" alt />
					<p>贷后跟踪</p>
				</van-col>
				<van-col span="6">
					<img src="../../assets/images/84/signacontract@2x.png" alt />
					<p>合同签订</p>
				</van-col>
			</van-row>
        </div>
      </div>
	<img src="../../assets/images/other/banner.png" alt class="banner" />
      
      <van-cell-group>
        <van-cell is-link>
          <!-- 使用 title 插槽来自定义标题 -->
          <template slot="title">
            <van-tag type="danger" class="left_tag">&nbsp;</van-tag>
            <span class="custom-title">&nbsp;&nbsp;贷款发起</span>
          </template>
        </van-cell>
        <van-cell>
          <div class="dk-pan">
            <van-col span="24">
              <img class="company" src="../../assets/images/38/Companyname@2x.png" alt /> 广州可可有限公司
            </van-col>
            <van-col class="grey" span="8">企业主</van-col>
            <van-col span="16">张三</van-col>
            <van-col class="grey" span="8">产品代码</van-col>
            <van-col span="16">9613</van-col>
            <van-col class="grey" span="8">应还金额（元）</van-col>
            <van-col class="orange" span="16">200,000</van-col>
            <van-col class="grey" span="8">到期时间</van-col>
            <van-col span="16" class="orange">2019-07-15</van-col>
          </div>
        </van-cell>

        <van-cell>
          <van-col span="14">名下待抢单客户</van-col>
          <van-col span="10">
            <span class="cell-num">8</span> 条
            <van-button class="check" type="primary" size="small" color="rgb(90,75,234)">查看</van-button>
          </van-col>
        </van-cell>
      </van-cell-group>
    </div>

    <!--tabbar-->
    <TabBar />
  </div>
</template>

<script>
//引入组件首字母大写
import TabBar from "@/components/tabBar";
import Vue from "vue";
import {
  Swipe,
  SwipeItem,
  Grid,
  GridItem,
  Image,
  Panel,
  NoticeBar,
  Cell,
  CellGroup,
  Row,
  Col
} from "vant";
Vue.use(Swipe)
  .use(SwipeItem)
  .use(Grid)
  .use(GridItem)
  .use(Image)
  .use(Panel)
  .use(NoticeBar)
  .use(CellGroup)
  .use(Row)
  .use(Col);

export default {
  //基础数据存放处
  data() {
    return {
      title: "贷款",
    };
  },

  //数据预加载
  created: function() {
    console.log("hello world");
  },

  //网页加载完成
  mounted: function() {},

  //声明方法
  methods: {
    go: function(url) {
      this.$router.push("/" + url);
    },
  },

  //计算属性
  computed: {},

  components: {
    TabBar
  }
};
</script>

<style lang="scss" scoped>
.vspan-col{
	margin-top:20px;
}
.msg {
  text-align: center;
  padding: 10px;
}
.banner {
  width: 100%;
}
.grid-container {
  padding: 10px 12px;

  border-radius: 8px;
}
.grid-container .box {
  border: 1px solid rgb(248, 248, 248);
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.15);
  min-height: 200px;
  border-radius: 12px;
}
.grid-container .grid {
  width: 25%;
  height: 80px;
  float: left;
}
.grid-container img {
  width: 25%;
  min-width: 44px;
  display: block;
  margin: 0 auto;
}
.grid-container p {
  text-align: center;
  margin: 2px;
  font-size: 14px;
}
.left_tag {
  background-color: rgb(90, 75, 234);
  padding: 0px 4px;
}
.cell-num {
  color: #f76037;
  font-size: 26px;
}
.check {
  background-color: #4c62e7;
  padding: 0px 16px;
  border-radius: 14px;
  float: right;
}
.dk-pan {
  padding: 0px 20px;
}
.dk-pan div {
  padding: 4px 0px;
}
.grey {
  color: #999999;
}
.orange {
  color: #f76037;
}
.company {
  width: 20px;
  height: 20px;
  display: inline;
  margin-left: -16px;
  vertical-align: text-center;
}
.padding-bottom-16 {
  padding-bottom: 32px;
}
</style>
