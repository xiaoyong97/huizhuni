<template>
  <!--筛选页-->
  <div class="main">
   
    <div class="content">
      <!--头部导航-->
      <van-row  gutter="10" class="daohangKuang">
        <van-col class="skipCaiDan">
           <van-row>
             <van-col span="10"></van-col>
            <van-col>
              <div class="navLeft">抢单</div>
            </van-col>
            <van-col>
              <div  class="navRight"  @click="onClickRight">已抢单</div>
            </van-col>
          </van-row>
        </van-col>
        <van-col>
          <van-icon @click="searchBut" name="search" size="24px" color="#4c62e7"/>
        </van-col>
      </van-row>
      <!--筛选-->
      <van-dropdown-menu class="shaiHang">
        <van-dropdown-item class="shaiLeft" v-model="TheSorting1" :options="TheSortings1" />
        <div class="shaiXuanleft"  @click="onClickLeft"></div>
        <van-dropdown-item class="shaiRight" v-model="TheSorting2" :options="TheSortings2" />
        <div class="shaiXuanRightt"></div>
      </van-dropdown-menu>'
    </div>
    
    <div>
      <div class="shaiBac">
        <van-row class="mesRow">
          <van-col span="4" class="mesRight">
            所在行业
          </van-col>
          <van-col span="20">
            <div class="filtrateMes" v-for="item in industryS" :key="item.name">
              <van-button class="filtrateBut" plain type="default" :color="item.colorType" plain @click="checkBoxBut(item)">{{item.name}}</van-button>
            </div>
          </van-col>
        </van-row>
        <van-row class="mesRow">
          <van-col span="4" class="mesRight">
            联系方式
          </van-col>
          <van-col span="20">
            <div class="filtrateMes" v-for="item in relationS" :key="item.name">
              <van-button class="filtrateBut" plain :color="item.colorType" plain @click="checkBoxBut(item)">{{item.name}}</van-button>
            </div>
          </van-col>
        </van-row>
        <van-row class="mesRow">
          <van-col span="5" class="mesRight">
            联系人类型
          </van-col>
          <van-col span="19">
            <div class="filtrateMes" v-for="item in relationTypeS" :key="item.name">
              <van-button class="filtrateBut" plain  :color="item.colorType" plain @click="checkBoxBut(item)">{{item.name}}</van-button>
            </div>
          </van-col>
        </van-row>
        <van-row class="mesRow">
          <van-col span="4" class="mesRight">
            产品额度
          </van-col>
          <van-col span="20">
            <div class="filtrateMes" v-for="item in moneyS" :key="item.name">
              <van-button class="filtrateBut" style="margin-right:5px;padding:0px 10px;" plain  :color="item.colorType" plain @click="checkBoxBut(item)">{{item.name}}</van-button>
            </div>
            <van-row>
              <van-col>
                <van-cell-group>
                  <van-field class="moneyField" v-model="minimumMoney" placeholder="最低价"/>
                </van-cell-group>
              </van-col>
              <van-col style="width:10px;text-align:center;"> 
                 -
              </van-col>
              <van-col>
                <van-cell-group>
                  <van-field  class="moneyField" v-model="tallestMonry" placeholder="最高价"/> 
                </van-cell-group>
              </van-col>
              <van-col class="wanYuan"> 
                 万元
              </van-col>
            </van-row>
          </van-col>
        </van-row>
        <van-row class="mesRow">
          <van-col span="4" class="mesRight">
           额度情况
          </van-col>
          <van-col span="20">
            <div class="filtrateMes" v-for="item in conditionS" :key="item.name">
              <van-button class="filtrateBut" plain  :color="item.colorType" plain @click="checkBoxBut(item)">{{item.name}}</van-button>
            </div>
          </van-col>
        </van-row>
        <van-row class="mesRow">
          <van-col span="4" class="mesRight">
           持有产品
          </van-col>
          <van-col span="20">
            <div class="filtrateMes" v-for="item in holdS" :key="item.name">
              <van-button class="filtrateBut" plain  :color="item.colorType" plain @click="checkBoxBut(item)">{{item.name}}</van-button>
            </div>
          </van-col>
        </van-row>
        <van-row class="mesRow">
          <van-col span="4" class="mesRight">
           征信情况
          </van-col>
          <van-col span="20">
            <div class="filtrateMes" v-for="item in creditS" :key="item.name">
              <van-button class="filtrateBut" plain  :color="item.colorType" plain @click="checkBoxBut(item)">{{item.name}}</van-button>
            </div>
          </van-col>
        </van-row>
        <van-row class="mesRow">
          <van-col span="4" class="mesRight">
           申贷意愿
          </van-col>
          <van-col span="20">
            <div class="filtrateMes" v-for="item in aspirationS" :key="item.name">
              <van-button class="filtrateBut" plain  :color="item.colorType" plain @click="checkBoxBut(item)">{{item.name}}</van-button>
            </div>
          </van-col>
        </van-row>
        <van-row class="mesRow">
          <van-col span="8" class="mesRight">
           抵押快贷申请意愿
          </van-col>
          <van-col span="16">
            <div class="filtrateMes" v-for="item in pledgeS" :key="item.name">
              <van-button class="filtrateBut" plain  :color="item.colorType" plain @click="checkBoxBut(item)">{{item.name}}</van-button>
            </div>
          </van-col>
        </van-row>
      </div>
      

      <van-row class="botttomBut" >
        <van-col span="12">
          <van-button size="large" type="warning" @click="emptyBut">清空条件</van-button>
        </van-col>
        <van-col span="12">
          <van-button size="large" type="info" @click="onClickBut">确定</van-button>
        </van-col>
      </van-row>
    </div>


  </div>
  
</template>

<script>
//引入组件首字母大写
import TabBar from '@/components/tabBar';
import { Dialog } from 'vant';
import { Divider } from 'vant';
export default {

  //基础数据存放处
  data (){
     return {
       TheSorting1: 1,
       TheSorting2: 1,
       TheSortings1: [
         { text: '默认排序', value: 1 },
         { text: '发布时间排序', value: 2 },
         { text: '距离排序', value: 3 },
       ],
       TheSortings2: [
         { text: '筛选', value: 1 },
         { text: '新款商品', value: 2 },
         { text: '活动商品', value: 3 }
       ],
       active: 'b',
       industryS:[//所在行业
         {name:'批发零售',colorType:"#4c62e7"},
         {name:'制造业',colorType:"#4c62e7"},
         {name:'建筑业',colorType:""},
         {name:'租凭商务',colorType:""},
         {name:'科学技术',colorType:"#4c62e7"},
         {name:'居民修理',colorType:"#4c62e7"},
         {name:'住宿餐饮',colorType:""},
         {name:'信息软件',colorType:""},
         {name:'交通仓储',colorType:""},
         {name:'农林牧渔',colorType:""},
         {name:'其他',colorType:""},
       ],
       relationS:[//联系方式
         {name:'有',colorType:"#4c62e7"},
         {name:'无',colorType:""},
       ],
       relationTypeS:[//联系人类型
         {name:'实际控制人',colorType:"#4c62e7"},
         {name:'法人',colorType:""},
         {name:'其他',colorType:""},
       ],
       moneyS:[//产品额度
         {name:'50万以下',colorType:"#4c62e7"},
         {name:'50-100万',colorType:""},
         {name:'100万以上',colorType:""},
       ],
       minimumMoney: null,//最低价
       tallestMonry: null,//最高价
       conditionS:[//额度情况
         {name:'信用额度',colorType:"#4c62e7"},
         {name:'抵押额度',colorType:""},
         {name:'质押额度',colorType:""},
         {name:'交易额度',colorType:""},
         {name:'平台快押额度',colorType:""},
         {name:'个体贷款额度',colorType:""},
       ],
       holdS:[//持有产品
         {name:'惠懂你绑定企业',colorType:"#4c62e7"},
         {name:'基本户',colorType:""},
         {name:'一般户',colorType:""},
         {name:'企业网银',colorType:""},
         {name:'手机银行',colorType:""},
         {name:'有贷户',colorType:""},
       ],
       creditS:[//征信情况
         {name:'企业征信',colorType:"#4c62e7"},
         {name:'个人征信',colorType:""},
       ],
       aspirationS:[//申待意愿
         {name:'有',colorType:"#4c62e7"},
         {name:'无',colorType:""},
       ],
       pledgeS:[//抵押快贷申请意愿
         {name:'有',colorType:"#4c62e7"},
         {name:'无',colorType:""},
       ],
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
    //抢单按钮,跳到抢单页面
    onClickLeft(){
      this.$router.push('/index2');
    },
    //已抢单按钮,跳到抢单页面
    onClickRight(){
      this.$router.push('/grabSingleYi');
    },
    //点击打开搜索
    searchBut(){
      this.$router.push('/searchShang');
    },
    //多选按钮实现样色变换效果
    checkBoxBut(i){
      if(i.colorType){
        i.colorType = "";
      }else{
        i.colorType = " #4c62e7"
      }
    },
    //单选按钮实现变换效果
    radioBut(i,iList){
      iList.map(item=>{
        item.colorType ="";
        if(item.name== i.name){
          i.colorType = " #4c62e7"
        }
      });
    },
    //确定按钮,跳回抢单页面
    onClickBut(){
      this.$router.push('/index2');
    },
    //循环清空所有选项
    forEmpty(itemList){
      itemList.map(item =>{
        item.colorType="";
      });
    },
    //清空按钮，清空所有选项
    emptyBut(){
      this.forEmpty(this.industryS)//清空所在行业
      this.forEmpty(this.relationS)//清空联系方式
      this.forEmpty(this.relationTypeS)//清空联系人类型
      this.forEmpty(this.moneyS)//清空产品额度
      this.minimumMoney=null,//清空最低价为null
      this.tallestMonry=null,//清空最高价为null
      this.forEmpty(this.conditionS)//清空额度情况
      this.forEmpty(this.holdS)//清空持有产品
      this.forEmpty(this.creditS)//清空征信情况
      this.forEmpty(this.aspirationS)//清空申贷意愿
      this.forEmpty(this.pledgeS)//清空抵押快贷申请意愿
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
<<style>
  .shaiXuanleft{
    width:50%;
    height:50px;
    position:absolute;
    left:0px;
    top:0px; 
  }
  .shaiXuanRightt{
    position:absolute;
    right:0px;
    top:5px; 
    width:50%;
    height:36px;
    border-bottom: 3px solid #4c62e7;
  }
  .shaiHang .van-dropdown-menu__item:nth-of-type(2) .van-dropdown-menu__title::after{
    color:#4c62e7;
  }
  .shaiHang .van-dropdown-menu__item:nth-of-type(2) .van-ellipsis{
    color:#4c62e7;
  }
</style>

<style lang="scss" scoped>
  //头部导航
  .daohangKuang{
    position: fixed;
    top:0px;
    width:100%;
    height:44px;
    line-height:44px;
    margin-top:0px;
    padding-top:10px;
  }
  .skipCaiDan{
    width: 90%;
    margin:auto;
  }
  .navLeft{ 
    width:60px;
    height:30px;
    line-height: 30px;
    font-size: 13px;
    text-align: center;
    border-bottom-left-radius:7px;
    border-top-left-radius: 7px;
    border:1px solid #4c62e7;
    color: white;
    background-color: #4c62e7;
  }
  .navRight{ 
    width:60px;
    height:30px;
    line-height: 30px;
    font-size: 13px;
    text-align: center;
    border-bottom-right-radius:7px;
    border-top-right-radius: 7px;
    border:1px solid #4c62e7;
    color: #4c62e7;
  }
  //结束
  .shaiHang{
    height:44px;
    position: fixed;
    top:46px;
    width: 100%;
    z-index: 1;
  }
  .shaiBac{
    height:100%;
    margin-top: 50px;
    margin-bottom: 50px;
  }
  .mesRow{
    padding: 4px 10px;
  }
  .mesRight{
    font-size: 13px;
    margin-top: 5px;
    color: #999999;
  }


  .filtrateMes{
    min-width:45px;
    float: left;
    margin-right: 8px;
    margin-bottom: 7px;
  }
  .filtrateBut{
    min-width:45px;
    height:26px;
    line-height: 26px;
    padding: 0px 5px;
    border:1px solid #B3B3B3;
    font-size: 13px;
    border-radius: 5px;
  }
  .moneyField{
    width:78px;
    height: 26px;
    line-height: 26px;
    font-size: 13px;
    border-radius: 5px;
    padding-bottom:0px;
    padding-top:0px;
    color:#4c62e7;
    border:1px solid #B3B3B3;
  }
  .wanYuan{ 
    line-height: 26px;
    margin-left:10px;
    font-size: 13px;
  }
  .botttomBut{
    width:100%;
    position: fixed;
    bottom:0px;
  }
</style>
