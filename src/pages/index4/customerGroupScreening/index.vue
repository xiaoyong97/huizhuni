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
  
    


  <BottomBar/>

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
    

  },
  
  //计算属性
  computed: {

  },


  components: {
    BottomBar
  }
}
</script>

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
</style>
