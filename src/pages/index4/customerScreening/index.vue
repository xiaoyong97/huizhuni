<template>

  <div class="main">

    <!-- <van-nav-bar
      :title='title'
      fixed
    /> -->
    <div class="menu-sc">
      <van-search placeholder="请输入客户名称" class="vv-search"/>
      <van-button style="margin:5px;" size="small" type="default">搜索</van-button>
      <van-icon name="location" />思明区
    </div>
    <div class="content">
      <!-- <div class="msg">惠点通</div> -->
      <baidu-map id="container" :mapClick="false" :center="center" :zoom="zoom" @ready="handler">
        <div v-for="(marker, i) of markers" :key="i">
          <bm-marker :position="{lng: subSSS(marker.center,0), lat: subSSS(marker.center,1)}" @click="infoWindowOpen(i)" :dragging="true" animation="BMAP_ANIMATION_BOUNCE">
            <bm-info-window :title="marker.pname" :show="marker.showFlag" @close="infoWindowClose(i)" @open="infoWindowOpen(i)">
              <div class="fosize">项目名称：{{marker.pname}}</div>
              <div class="fosize">设备数量：{{marker.devices}}</div>
            </bm-info-window>
          </bm-marker>
        </div>
        <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>
      </baidu-map>
    </div>
    <!--底部导航-->
    <BottomBar/>
    <!--覆盖底部导航-->
    <div class="botBarFuGaiDiv">
      <van-row >
        <van-col span="5" class="botBarFuGai" @click="opencustomer"></van-col>
      </van-row>
    </div>
    <!--客户筛选右侧弹出菜单-->
    <van-popup class="right_popup_bac" v-model="huiPopupShow" position="right">
      <div class="headerTitleLan">
        <div class="headerIcon"><van-icon size="20px" name="arrow-left"/></div>
        <div class="headerTitle">客户筛选</div>
      </div>

      <div class="right_popup_mes_bac">
        <van-row class="keQunRow">
          <van-col  span="5">
            <div class="keQunText">距离：</div>
          </van-col>
          <van-col span="19" >
            <div class="keQunTabes"> 
              <van-checkbox-group v-model="distanceS" >
                <van-checkbox class="keQunCheckbox" v-for="item in distanceS" :key="item.value" :name="item.name" >
                  {{ item.name }}
                </van-checkbox>
              </van-checkbox-group>
            </div>
          </van-col>
        </van-row>


      </div>
    </van-popup>
  </div>

</template>

<script>
//引入组件首字母大写
import BottomBar from '@/components/bottomBar'
export default {

  //基础数据存放处
  data (){
     return {
       title : '惠点通',
       //修改地图底色
        mapStyle: {
         style : "midnight"
        },
        //聚合列表 项目名称坐标设备数量
        markers:[
          {center:'113.27147,23.131669',showFlag:false,pname:'消防火灾监控系统',pSbNum:3},
          {center:'113.263423,23.131963',showFlag:false,pname:'消防火灾监控系统2',pSbNum:4},
          {center:'113.298996,23.099108',showFlag:false,pname:'消防火灾监控系统3',pSbNum:5},
          {center:'113.241863,23.091626',showFlag:false,pname:'消防火灾监控系统4',pSbNum:7},
          {center:'113.214159,23.074407',showFlag:false,pname:'消防火灾监控系统5',pSbNum:9}
        ],
        center: {lng: 113.27147, lat: 23.131669},
        zoom: 3,
        show: true,
        //惠点通右侧弹出菜单使用
        huiPopupShow:true,
        distance: [],//距离选中
        distanceS: [//距离数据
          { name: '500米', value: 1 },
          { name: '1公里', value: 2 },
          { name: '3公里', value: 3 },
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

    handler ({BMap, map}) {
      //默认经纬度
      this.center.lng = 113.27147
      this.center.lat = 23.131669
      this.zoom = 13
    },
    //坐标截取
    subSSS(row,xy){
      var indexRow = row.split(",");
      return indexRow[xy]
    },
    infoWindowClose (marker) {
      this.markers[marker].showFlag = false
    },
    infoWindowOpen (marker) {
      this.markers[marker].showFlag = true
    },
    //点击打开客户筛选右侧弹出菜单
    opencustomer(){
      this.huiPopupShow=true;
    },


  },

  //计算属性
  computed: {

  },


  components: {
    BottomBar
  }
}
</script>

<style>
  
<style>
  .right_popup_mes_bac .van-action-sheet__header{
    line-height: 40px;
    font-size: 15px;
    background-color: #379BF6;
    color: white;
  }
   .right_popup_mes_bac .van-icon{
    color: white;
  }
  .keQunTabes .van-icon-success{
    width: 14px;
    height:14px;
    line-height: 14px;
    border-radius: 0px;
    margin-top:5px;
    border:1px solid #737373
  }
  .keQunTabes .van-checkbox__label{
      color:#737373;
  }
</style>
</style>
<style lang="scss" scoped>

.menu-sc{
 position:fixed;
 top:0px;
 left:0px;
 width:100%;
 height:46px;
 line-height:46px;
 text-align:center;
 background-color:#fff;
 z-index:1;
}
#near{
  width: 100%;
  height: 100%;
  position: absolute;
}
#container{
  width:100%;
  height:100%;
  height:736px;
  float:left;
}
.vv-search{
  width: auto;
  min-width: 63%;
  float: left;
  line-height: 46px;
  height: 46px;
}
//客户筛选右侧弹出菜单
.right_popup_bac{
  height:93%;
  width: 80%;
  position: fixed;
  top: 0px !important;
  -webkit-transform: translate3d(0,0%,0) !important;
  transform: translate3d(0,0%,0) !important;
}
.headerTitleLan{
  width:100%;
  height:40px;
  line-height:40px;
  background-color:#379BF6;
  color:white;
}
.headerIcon{
  float: left;
  width:10%;
  padding-left: 10px;
  padding-top: 3px;
}
.headerTitle{
  float: left;
  width:80%;
  text-align:center;
}
.right_popup_mes_bac{
  width: 100%;
  height:90%;
  margin:10px;
  border:1px solid;
}
.keQunRow{
  margin-bottom:13px;
}
.keQunText{
  text-align: right;
  color:#737373;
  margin-top:5px;
}
.keQunTabes{
  width:100%;
  border:1px solid;
}
.keQunCheckbox{
  float: left;
  height: 26px;
  margin-right: 19px;
}
//覆盖底部导航
.botBarFuGaiDiv{
  width:20%;
  position: fixed;
  bottom:0px;
  left:80%;
  z-index:1;
}
.botBarFuGai{
  width:100%;
  height: 50px;
}
</style>
