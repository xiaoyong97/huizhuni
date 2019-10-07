<template>
  <div class="main" style="position:absolute;top:0px;height:100%;width:100%;">
    <!--头部导航-->
    <van-nav-bar class="vnavbar" :title="title" left-arrow  @click-left="onClickLeft"></van-nav-bar>
    <img src="../../assets/images/huidiantong/1_0000s_0007.png" class="img_location">
    
    <div class="main">
      <van-tabs v-model="active" title-active-color="#ffffff">
        <!--基本信息-->
        <van-tab title="基本信息">
          <div class="main_box">
            <van-row class="list_row">
              <van-col class="list_left" style="text-align: left;width:100%;">
                <p class="list_test">客户名称：厦门象屿股份有限公司</p>
              </van-col>
            </van-row>
            <van-row class="list_row">
              <van-col class="list_left" style="text-align: left;width:100%;">
                <p class="list_test">组织性质：股份有限公司</p>
              </van-col>
            </van-row>
            <van-row class="list_row">
              <van-col class="list_left" style="text-align: left;width:100%;">
                <p class="list_test">企业规模：小型</p>
              </van-col>
            </van-row>
            <van-row class="list_row">
              <van-col class="list_left" style="text-align: left;width:100%;">
                <p class="list_test">注册地址：厦门市思明区</p>
              </van-col>
            </van-row>
            <van-row class="list_row">
              <van-col class="list_left" style="text-align: left;width:100%;">
                <p class="list_test">企业地址：厦门市软件园观日路1号</p>
              </van-col>
            </van-row>
            <van-row class="list_row">
              <van-col class="list_left" style="text-align: left;width:100%;">
                <p class="list_test">客户管理部门：普惠金融事业部（小企业业务部）</p>
              </van-col>
            </van-row>
            <van-row class="list_row">
              <van-col class="list_left" style="text-align: left;width:100%;">
                <p class="list_test">客户所属行业：软件开发</p>
              </van-col>
            </van-row>
            <van-row class="list_row">
              <van-col class="list_left" style="text-align: left;width:100%;">
                <p class="list_test">统一社会信用代码：913502002631573219X</p>
              </van-col>
            </van-row>
            <van-row class="list_row">
              <van-col class="list_left" style="text-align: left;width:100%;">
                <p class="list_test">注册资本：100万元</p>
              </van-col>
            </van-row>
            <van-row class="list_row">
              <van-col class="list_left" style="text-align: left;width:100%;">
                <p class="list_test">注册资本到位率：100%</p>
              </van-col>
            </van-row>
            <van-row class="list_row">
              <van-col class="list_left" style="text-align: left;width:100%;">
                <p class="list_test">经营范围：软件开发、大数据产品、页面设计、网站运营</p>
              </van-col>
            </van-row>
            <van-row class="list_row">
              <van-col class="list_left" style="text-align: left;width:100%;">
                <p class="list_test">成立时间：2016年8月</p>
              </van-col>
            </van-row>
            <van-row class="list_row">
              <van-col class="list_left" style="text-align: left;width:100%;">
                <p class="list_test">发证单位：厦门市市场监督管理局</p>
              </van-col>
            </van-row>
            <van-row class="list_row">
              <van-col class="list_left" style="text-align: left;width:100%;">
                <p class="list_test">联系方式：0592-2155678</p>
              </van-col>
            </van-row>
            <van-row class="list_row">
              <van-col class="list_left" style="text-align: left;width:100%;">
                <p class="list_test">客户权客户经理姓名：吕昌荣</p>
              </van-col>
            </van-row>
            <van-row class="list_row">
              <van-col class="list_left" style="text-align: left;width:100%;">
                <p class="list_test">客户权客户经理联系方式：13950186993</p>
              </van-col>
            </van-row>
            <van-row class="list_row">
              <van-col class="list_left" style="text-align: left;width:100%;">
                <p class="list_test">是否我行客户：是</p>
              </van-col>
            </van-row>
            <van-row class="list_row">
              <van-col class="list_left" style="text-align: left;width:100%;">
                <p class="list_test">客户分层：优质</p>
              </van-col>
            </van-row>
            <van-row class="list_row">
              <van-col class="list_left" style="text-align: left;width:100%;">
                <p class="list_test">需求强度：强</p>
              </van-col>
            </van-row>
            <!-- <van-row class="list_row">
              <van-col class="list_left" style="text-align: left;width:100%;">
                <p class="list_test">客户名称：厦门链平方科技有限公司</p>
              </van-col>
            </van-row>
            <van-row class="list_row">
              <van-col class="list_left" style="text-align: left;width:100%;">
                <p class="list_test">组织性质：股份有限公司</p>
              </van-col>
            </van-row>
            <van-row class="list_row">
              <van-col class="list_left" style="text-align: left;width:100%;">
                <p class="list_test">注册地址：厦门市思明区</p>
              </van-col>
            </van-row>
            <van-row class="list_row">
              <van-col class="list_left" style="text-align: left;width:100%;">
                <p class="list_test">企业地址：厦门市软件园近日路34号</p>
              </van-col>
            </van-row>
            <van-row class="list_row">
              <van-col class="list_left" style="text-align: left;width:100%;">
                <p class="list_test">客户所属行业：信息技术</p>
              </van-col>
            </van-row>
            <van-row class="list_row">
              <van-col class="list_left" style="text-align: left;width:100%;">
                <p class="list_test">统一社会信用代码：913502002631573219X</p>
              </van-col>
            </van-row>
            <van-row class="list_row">
              <van-col class="list_left" style="text-align: left;width:100%;">
                <p class="list_test">注册资本：100万元</p>
              </van-col>
            </van-row>
            <van-row class="list_row">
              <van-col class="list_left" style="text-align: left;width:100%;">
                <p class="list_test">注册资本到位率：100%</p>
              </van-col>
            </van-row>
            <van-row class="list_row">
              <van-col class="list_left" style="text-align: left;width:100%;">
                <p class="list_test">经营范围：软件开发、大数据产品、页面设计、网站运营</p>
              </van-col>
            </van-row>
            <van-row class="list_row">
              <van-col class="list_left" style="text-align: left;width:100%;">
                <p class="list_test">成立时间：2017年9月</p>
              </van-col>
            </van-row>
            <van-row class="list_row">
              <van-col class="list_left" style="text-align: left;width:100%;">
                <p class="list_test">发证单位：厦门市市场监督管理局</p>
              </van-col>
            </van-row>
            <van-row class="list_row">
              <van-col class="list_left" style="text-align: left;width:100%;">
                <p class="list_test">联系方式：0592-2155678</p>
              </van-col>
            </van-row>
            <van-row class="list_row">
              <van-col class="list_left" style="text-align: left;width:100%;">
                <p class="list_test">是否我行客户：是</p>
              </van-col>
            </van-row>
            <van-row class="list_row">
              <van-col class="list_left" style="text-align: left;width:100%;">
                <p class="list_test">客户分层：一般</p>
              </van-col>
            </van-row>
            <van-row class="list_row">
              <van-col class="list_left" style="text-align: left;width:100%;">
                <p class="list_test">需求强度：中</p>
              </van-col>
            </van-row> -->
          </div>
        </van-tab>
        <!--亲密度列表-->
        <van-tab title="亲密度列表">
          <div class="main_box qmdlb" style="min-height:550px;">
            <div class="cloudMtxTable_body">
              <table class="cloudTable"  style="table-layout:fixed">
                <colgroup >
                  <col width="">
                  <col width="60px">
                  <col width="70px">
                  <col width="80px">
                </colgroup>
                <tbody class="cloudTable_body ">
                  <tr style="background-color:#F7F7F7;color:#323233;">
                    <!--<td>客户名称</td>
                    <td class="data-cell"><span>性质</span></td>
                    <td class="data-cell">综合评分</td>
                    <td>是否我行客户</td>-->
                    <td>客户名称</td>
                    <td><span>性质</span></td>
                    <td>综合评分</td>
                    <td>是否我行客户</td>
                  </tr>
                  <tr>
                    <td>沈东</td>
                    <td>个人</td>
                    <td>100</td>
                    <td>是</td>
                  </tr>
                  <tr>
                    <td>蔡庆</td>
                    <td>个人</td>
                    <td>96</td>
                    <td>否</td>
                  </tr>
                  <tr>
                    <td>齐海</td>
                    <td>个人</td>
                    <td>96</td>
                    <td>否</td>
                  </tr>
                  <tr>
                    <td>厦门软件园有限公司</td>
                    <td>公司</td>
                    <td>96</td>
                    <td>是</td>
                  </tr>
                  <tr>
                    <td>吴小婷</td>
                    <td>个人</td>
                    <td>92</td>
                    <td>是</td>
                  </tr>
                  <tr>
                    <td>厦门信贷股份有限公司</td>
                    <td>公司</td>
                    <td>90</td>
                    <td>否</td>
                  </tr>
                  <tr>
                    <td>厦门国贸集团股份有限公司</td>
                    <td>公司</td>
                    <td>90</td>
                    <td>是</td>
                  </tr>
                  <tr>
                    <td>厦门国三伏光电股份有限公司</td>
                    <td>公司</td>
                    <td>89</td>
                    <td>否</td>
                  </tr>
                  <tr>
                    <td>厦门中药厂有限公司</td>
                    <td>公司</td>
                    <td>87</td>
                    <td>否</td>
                  </tr>
                  <tr>
                    <td>厦门尚为科技股份有限公司</td>
                    <td>公司</td>
                    <td>85</td>
                    <td>是</td>
                  </tr>
                </tbody>

              </table>
            </div>



          </div>
        </van-tab>
        <!--关系图谱-->
        <van-tab title="关系图谱">
          <div class="main_box gxtp" style="min-height:550px;">
            <div class="region-slectModule">
              <van-dropdown-menu id="slectModule" :overlay="false" style="height:30px;">
                <van-dropdown-item style="height:170px;" v-model="value1" :options="option1" />
              </van-dropdown-menu>
            </div>
            <img src="../../assets/images/huidiantong/gx-bg.png" class="gx_bg">
          </div>
        </van-tab>
        <!--管理层信息-->
        <van-tab title="管理层信息">
          <div class="main_box qmdlb" style="min-height:568px;">
            <div class="cloudMtxTable_body">
              <table class="cloudTable"  style="table-layout:fixed">
                <colgroup >
                  <col width="180px">
                  <col width="">
                </colgroup>
                <tbody class="cloudTable_body ">
                  <tr style="background-color:#F7F7F7;color:#323233;">
                    <td>管理员名称</td>
                    <td>职位</td>
                  </tr>
                  <tr>
                    <td>邓家国</td>
                    <td>总经理</td>
                  </tr>
                  <tr>
                    <td>张方远</td>
                    <td>财务总监</td>
                  </tr>
                </tbody>

              </table>
            </div>
          </div>
        </van-tab>
        <!--管理层信息-->
        <van-tab title="股东信息">
          <div class="main_box qmdlb" style="min-height:568px;">
            <div class="cloudMtxTable_body">
              <table class="cloudTable"  style="table-layout:fixed">
                <colgroup >
                  <col width="">
                  <col width="">
                  <col width="">
                  <col width="">
                </colgroup>
                <tbody class="cloudTable_body ">
                  <tr style="background-color:#F7F7F7;color:#323233;">
                    <td>股东姓名</td>
                    <td>出资金额</td>
                    <td>出资方式</td>
                    <td>出资比例</td>
                  </tr>
                  <tr>
                    <td>齐海</td>
                    <td>35万元</td>
                    <td>现金</td>
                    <td>35%</td>
                  </tr>
                  <tr>
                    <td>蔡庆</td>
                    <td>35万元</td>
                    <td>现金</td>
                    <td>35%</td>
                  </tr>
                  <tr>
                    <td>沈东</td>
                    <td>30万元</td>
                    <td>现金</td>
                    <td>30%</td>
                  </tr>
                </tbody>

              </table>
            </div>
          </div>
        </van-tab>
        <!--实际控制人信息-->
        <van-tab title="实际控制人信息">
          <div class="main_box qmdlb" style="min-height:568px;">
            <div class="cloudMtxTable_body" style="height:568px;">
              <table class="cloudTable"  style="table-layout:fixed">
                <colgroup >
                  <col width="100px">
                  <col width="">
                </colgroup>
                <tbody class="cloudTable_body ">
                  <tr>
                    <td class="bgcol-eee">类型</td>
                    <td>个人</td>
                  </tr>
                  <tr>
                    <td class="bgcol-eee">国籍</td>
                    <td>中国</td>
                  </tr>
                  <tr>
                    <td class="bgcol-eee">名称</td>
                    <td>沈东</td>
                  </tr>
                  <tr>
                    <td class="bgcol-eee">证件类型</td>
                    <td>身份证</td>
                  </tr>
                  <tr>
                    <td class="bgcol-eee">证件号码</td>
                    <td>130534198008218630</td>
                  </tr>
                  <tr>
                    <td class="bgcol-eee">证件有效期</td>
                    <td>永久</td>
                  </tr>
                  <tr>
                    <td class="bgcol-eee">学历</td>
                    <td>本科</td>
                  </tr>
                  <tr>
                    <td class="bgcol-eee">出生日期</td>
                    <td>1980.08.21</td>
                  </tr>
                  <tr>
                    <td class="bgcol-eee">类型</td>
                    <td>公司</td>
                  </tr>
                  <tr>
                    <td class="bgcol-eee">名称</td>
                    <td>厦门软件园开发有限责任公司</td>
                  </tr>
                  <tr>
                    <td class="bgcol-eee">证件类型</td>
                    <td>统一社会信用代码</td>
                  </tr>
                  <tr>
                    <td class="bgcol-eee">证件号码</td>
                    <td>913502002636523792X</td>
                  </tr>
                  <tr>
                    <td class="bgcol-eee">证件生效期</td>
                    <td>2013.02.26</td>
                  </tr>
                  <tr>
                    <td class="bgcol-eee">证件到期日期</td>
                    <td>2053.02.26</td>
                  </tr>
                  <tr>
                    <td class="bgcol-eee">发证机关名称</td>
                    <td>厦门市市场监督管理局</td>
                  </tr>
                  <tr>
                    <td class="bgcol-eee">发证机关所在地</td>
                    <td>厦门市</td>
                  </tr>
                </tbody>

              </table>
            </div>
          </div>
        </van-tab>
        <!--资产负债-->
        <van-tab title="资产负债">
          <div class="main_box qmdlb" style="min-height:568px;">
            <!-- <div id="myChart1" ></div> -->
          </div>
        </van-tab>
        <van-tab title="龙信商评分">龙信商评分</van-tab>
        <van-tab title="纳税信息">纳税信息</van-tab>
        <van-tab title="持有产品">持有产品</van-tab>
        <van-tab title="客群信息">客群信息</van-tab>
        <van-tab title="海关信息">海关信息</van-tab>
        <van-tab title="我行业务信息">我行业务信息</van-tab>
        <van-tab title="黑名单信息">黑名单信息</van-tab>
        <van-tab title="商机信息">商机信息</van-tab>
        <van-tab title="客户管理团队信息">客户管理团队信息</van-tab>
      </van-tabs>
    
    </div>

  </div>
</template>

<script>
//引入组件首字母大写
import TabBar from "@/components/tabBar";
import { Tab, Tabs, Swipe, SwipeItem, Row, Col, Collapse } from "vant";
import Vue from "vue";
let echarts = require('echarts/lib/echarts')
	// 引入柱状图组件
	require('echarts/lib/chart/bar')
	require('echarts/lib/chart/pie')
	require('echarts/lib/chart/line')
	
	// 引入提示框和title组件
	require('echarts/lib/component/tooltip')
	require('echarts/lib/component/title')
	require('echarts/lib/component/legend')

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
      title: "客户信息",
      active: 0,
      current: 0,
      //切换模式
      value1: 0,
      option1: [
        { text: '亲密度关系', value: 0 },
        { text: '实际控制人', value: 1 },
        { text: '实际控制人（挖掘）', value: 2 },
        { text: '企业担保计划', value: 3 },
        { text: '配偶关系', value: 4 },
        { text: '集团派系关系（挖掘）', value: 5 },
        { text: '上下游关系', value: 6 }
      ],
      myChart1:null,
    };
  },

  //数据预加载
  created: function() {},

  //网页加载完成
  mounted() {
    this.createChart1();
  },

  //声明方法
  methods: {
    onClickLeft() {
        this.$router.go(-1);
    },
    lockCli(type){
				localStorage.setItem('ckywj_type',type);
        this.$router.push('./launchDetails/lookOriginalFile/loanBusinessOwner');
    },
    onClickLeft() {
      this.$router.go(-1);
    },
    onChange(index) {
      this.current = index;
    },
    goviewList: function() {
      this.$router.push("./viewList");
    },

    createChart1: function() {
      /* if(this.myChart1 == null){
        // 基于准备好的dom，初始化echarts实例
            this.myChart1 = echarts.init(document.getElementById('myChart1'))
            var colors = [ '#FAED5B', '#7EDCEE'];
    
            let option = {
      
            legend: {
              orient: 'vertical',
              left: 'left',
              data: ['非工商小微客户数','工商小微客户数']
            },
            
            color:colors,
            label: {
              formatter: "{b}\n{c}",	
              normal: {
                  textStyle: {
                    color: '#666666'
                  },
              }
            },
            series : [
              {
                name: '访问来源',
                type: 'pie',
                radius : '80%',
                center: ['50%', '60%'],
                data:[
                  {value:126207, name:'非工商小微客户数'},
                  {value:654745, name:'工商小微客户数'},					
                ],
                itemStyle: {
                  emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                  }
                },
                labelLine: {
                  normal: {
                    lineStyle: {
                      color: '#666666'
                    },
                    smooth: 0.2,
                    length: 4,
                    length2: 20
                  }
                },
                label: {
                  formatter: "{b}\n{c}",	
                  normal: {
                      textStyle: {
                        color: '#666666'
                      },
                  }
                },
              }
            ]
          };
        
          // 绘制图表
          this.myChart1.setOption(option);
        　　
      } */
    },
  },

  //计算属性
  computed: {},

  components: {
    TabBar
  }
};
</script>
<style lang="postcss">

.region-slectModule{
  width: 130px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  background-color: #ffffff;
  border:solid 0.5px #eeeeee;  
  border-radius: 8px;
  z-index: 1;
  padding:0px 10px 0px 8px;
}
.gx_bg{
  width:100%;
}
.van-tabs__line{
  background-color: #ffffff;
  width: 35.5px !important;
}
.van-tabs__nav{
  background-color: #389bf6;
}
.van-tab{
  color: #ffffff;
}
.van-hairline--bottom::after {
    border-bottom-width: 0px;
}
.bgcol-eee{background-color:#F7F7F7;color:#323233;}
table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  .cloudTableAuto{
    width:1200px;
    margin:20px auto;
  }
  .cloudTable{
    border: 1px solid #eeeeee;
    font-size: 16px;
    width:100%;
    color: #7d7e80;
    font-size: 12px;
  }
  .cloudTableTitle{
    padding:10px 20px;
  }
  .cloudTable td {
    height: 40px;
    min-width: 0px;
    box-sizing: border-box;
    vertical-align: middle;
    position: relative;
    border-bottom: 1px solid #eeeeee;
  }
  /*  表头 */
  .cloudTable_header tr {
    background-color: #efeff1;
  }
  .cloudTable_header th {
    min-width: 0;
    box-sizing: border-box;
    text-overflow: ellipsis;
    vertical-align: middle;
    position: relative;
    border-bottom: 1px solid #eeeeee;
    border-right: 1px solid #eeeeee;
    padding: 10px 0px;
    white-space: nowrap;
    overflow: hidden;
    font-weight: bold;
    text-align: -internal-center;
  }

  /* 表身体 */
  .cloudTable_body tr td {
    height: 35px;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: center;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    font-family: 'Lato', 'Helvetica Neue', Arial, Helvetica, sans-serif;
  }
  .cloudTable_body tr td {
    box-sizing: border-box;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: center;
    border-right: 1px solid #eeeeee;
  }
  .cloudMtxTable_body{
    /*height:102px;*/
    height:502px;
    width:100%;
    overflow-y: auto;
  }

  /* 公用样式 */
  .data-cell {
    padding-left: 15px;
    padding-right: 15px;
    font-family: 'Lato', 'Helvetica Neue', Arial, Helvetica, sans-serif;
  }
  .cloudTable_body tr:hover {
    background-color: #c5e8fe;
  }

.img_location{
    position: fixed;
    bottom: 5px;
    left:8px;
    height: 30px;
    width: 30px;
    z-index: 2;
}
.theme_color{
    background-color: rgb(56,155,246);
}
.van-nav-bar__title, .van-icon.van-icon-arrow-left.van-nav-bar__arrow{
    color: #fff;
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
</style>

<style lang="scss" scoped>
.letdiv{
    padding-left: 25px;
}
.vnavbar{
    position: fixed;
    top: 0px;
    width: 100%;
    background-color: rgb(56,155,246);
    z-index: 99;
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
  top: 45px;
  font-size: 13px;
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
  width: 90%;
  background-color: white;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  position: relative;
  top: 10px;
  padding:5px 10px 60px 10px;
  margin:0 auto;
}
/* .van-tabs{
    position: fixed;
    top: 46px;
    width: 100%;
    z-index: 1;
} */
.list_test {
  line-height: 30px;
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
