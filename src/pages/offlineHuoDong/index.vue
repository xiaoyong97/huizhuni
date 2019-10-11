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
        <van-tabs v-model="active" line-width="25%" title-active-color="#1989fa" color="#1989fa" v-show="type==1">
          <!--                已发布下拉图标-->
          <img src="../../assets/images/24/Pulldown@2x.png" class="menu1_open" v-show="menu!==1" @click="openMenu(1,1)">
          <img src="../../assets/images/24/Pullupselect@12x.png" class="menu1_open" v-show="menu==1" @click="openMenu(1,-1)">
          <van-tab :title="tab1Title" name="已发布" color="#4c62e7">
            <!--头部搜索-->
            <van-row class="seekRow" gutter="20"> 
              <van-col span="16"><van-field class="seekField" v-model="fieldWei" placeholder="请输入活动名称" />    
              </van-col>
              <van-col span="8"><van-button class="seekBut">查找</van-button>
              </van-col>
            </van-row>
            <van-row class="seekRow" gutter="20" style="height:30px;line-height:30px;"> 
                <van-col style="text-align:center;" span="24">共有<font data-v-27d9ad80="" color="#4c62e7">{{countcc}}</font>数据</van-button>
                </van-col>
            </van-row>
            <!--进行中-->
            <div class="card_div" v-show="menu_choose==2|menu_choose==0">
              <div @click="goPage('newActivitiesConfirmDetails',{status_:0})" class="card-bottom-line">
                  <van-row style="padding: 16px 12px 0">
                      <van-col class="" span="12"><p class="card_list1_test_left" >建行每周沙龙会</p></van-col>
                      <!-- <van-col class="" span="12" style="text-align: right"><p class="card_list1_test_right">进行中...</p></van-col> -->
                  </van-row>
                  <van-row style="padding: 16px 12px 0">
                      <van-col class="" span="2" style="justify-content: center;align-items: center;"><img src="../../assets/image/my/address@2x.png" class="img_location" ></van-col>
                      <van-col class="" span="16" style="text-align: left"><p class="card_list2_test" >西湖</p></van-col>
                  </van-row>
                  <van-row style="padding: 16px 12px 8px">
                      <van-col class="" span="2"><img src="../../assets/image/my/time@2x.png" class="img_location" ></van-col>
                      <van-col class="" span="12"><p class="card_list2_test" >2019.10.12-2019.10.13</p></van-col>
                      <van-col class="" span="10" style="text-align: right" ><p class="card_list2_test" >报名<span style="color: #4c62e7">0</span>人</p></van-col>
                  </van-row>
                  <img  src="../../assets/images/other/ICON_325-02.png" class="img_task" >
              </div>
              <van-row style="text-align: center;padding: 8px 12px 0">
                <van-col class="" span="12" @click="goViewList('/offlineHuoDong/viewList')">
                    <van-col class="" span="2"><img src="../../assets/image/my/List@2x.png" class="img_location location2" ></van-col>
                    <van-col class="" span="20"><p class="card_list2_test" >查看名单</p></van-col>
                </van-col>
                <van-col class="" span="12" @click="openOverlay">
                    <van-col class="" span="2"><img src="../../assets/image/my/QR code@2x.png" class="img_location location2" ></van-col>
                    <van-col class="" span="22"><p class="card_list2_test" @click="baoMingQianDao">报名/签到</p></van-col>
                </van-col>
              </van-row>
            </div>
            <!--已发布-->
            <div class="card_div" v-show="menu_choose==1|menu_choose==0">
              <div @click="goPage('activityDetailsNotBegin')" class="card-bottom-line">
                  <van-row style="padding: 16px 12px 0" >
                      <van-col class="" span="12"><p class="card_list1_test_left" >支付系統及形式创新</p></van-col>
                      <!--<van-col class="" span="12" style="text-align: right"><p class="card_list1_test_right" style="color: #f76037">未开始</p></van-col> -->
                  </van-row>
                  <van-row style="padding: 16px 12px 0">
                      <van-col class="" span="2" style="justify-content: center;align-items: center;"><img src="../../assets/image/my/address@2x.png" class="img_location" ></van-col>
                      <van-col class="" span="16" style="text-align: left"><p class="card_list2_test" >省分行营业部</p></van-col>
                  </van-row>
                  <van-row style="padding: 16px 12px 8px">
                      <van-col class="" span="2"><img src="../../assets/image/my/time@2x.png" class="img_location" ></van-col>
                      <van-col class="" span="12"><p class="card_list2_test" >2019.07.06-2019.08.08</p></van-col>
                      <van-col class="" span="10" style="text-align: right"><p class="card_list2_test" >报名<span style="color: #4c62e7">30</span>人</p></van-col>
                  </van-row>
                  <img  src="../../assets/images/other/ICON_325.png" class="img_task" >
              </div>
              <van-row style="text-align: center;padding: 8px 12px 0" type="flex" justify="center">
                  <van-col class="" span="12" @click="goViewList('/offlineHuoDong/viewList')">
                      <van-col class="" span="2"><img src="../../assets/image/my/List@2x.png" class="img_location location2" ></van-col>
                      <van-col class="" span="20" style="text-align: center"><p class="card_list2_test" >查看名单</p></van-col>
                  </van-col>
                  <van-col class="" span="12" @click="openOverlay">
                      <van-col class="" span="2"><img src="../../assets/image/my/QR code@2x.png" class="img_location location2" ></van-col>
                      <van-col class="" span="22" style="text-align: center"><p class="card_list2_test" @click="baoMingQianDao">报名/签到</p></van-col>
                  </van-col>
              </van-row>
            </div>
            <!--已结束-->
            <div class="card_div" v-show="menu_choose==3|menu_choose==0" >
              <div @click="goPage('activityDetailsOver')"  class="card-bottom-line">
                  <van-row style="padding: 16px 12px 0" type="flex" justify="center">
                      <van-col class="" span="12"><p class="card_list1_test_left" >今朝会-创业沙龙第六期</p></van-col>
                      <van-col class="" span="12" style="text-align: right"><p class="card_list1_test_right" style="color: #999999">已结束</p></van-col>
                  </van-row>
                  <van-row style="padding: 16px 12px 0">
                      <van-col class="" span="2" style="justify-content: center;align-items: center;"><img src="../../assets/image/my/address@2x.png" class="img_location" ></van-col>
                      <van-col class="" span="16" style="text-align: left"><p class="card_list2_test" >省分行营业部</p></van-col>
                  </van-row>
                  <van-row style="padding: 16px 12px 8px">
                      <van-col class="" span="2"><img src="../../assets/image/my/time@2x.png" class="img_location" ></van-col>
                      <van-col class="" span="12"><p class="card_list2_test" >2019.07.06-2019.08.08</p></van-col>
                      <van-col class="" span="10" style="text-align: right"><p class="card_list2_test" >报名<span style="color: #4c62e7">98</span>人/签到<span style="color: #4c62e7">92</span>人</p></van-col>
                  </van-row>
                  <img  src="../../assets/images/other/ICON_325-03.png" class="img_task" >
              </div>
              <van-row style="text-align: center;padding: 8px 12px 0" type="flex" justify="center">
                  <van-col class="" span="12" @click="goViewList('/offlineHuoDong/viewList')">
                      <van-col class="" span="2"><img src="../../assets/image/my/List@2x.png" class="img_location location2" ></van-col>
                      <van-col class="" span="20" style="text-align: center"><p class="card_list2_test" >查看名单</p></van-col>
                  </van-col>
                  <van-col class="" span="12" @click="goPage('xinZhenguploadImage')">
                      <van-col class="" span="2"><img src="../../assets/images/38/Upload@2x.png" class="img_location location2" ></van-col>
                      <van-col class="" span="20" style="text-align: center"><p class="card_list2_test" >上传照片</p></van-col>
                  </van-col>
              </van-row>
            </div>
          </van-tab>

          <!--                已发布下拉图标-->
          <img src="../../assets/images/24/Pulldown@2x.png" class="menu1_openTwo" v-show="toAudit!==1" @click="openMenu(2,1)">
          <img src="../../assets/images/24/Pullupselect@12x.png" class="menu1_openTwo" v-show="toAudit==1" @click="openMenu(2,-1)">
          <van-tab :title="tab2Title" name="待审核" color="#4c62e7">
            <!--头部搜索-->
            <van-row class="seekRow" gutter="20"> 
              <van-col span="16"><van-field class="seekField" v-model="fieldDai" placeholder="请输入活动名称" />    
              </van-col>
              <van-col span="8"><van-button class="seekBut">查找</van-button>
              </van-col>
            </van-row>
            <van-row class="seekRow" gutter="20" style="height:30px;line-height:30px;"> 
                <van-col style="text-align:center;" span="24">共有<font data-v-27d9ad80="" color="#4c62e7">{{countDsh}}</font>数据</van-button>
                </van-col>
            </van-row>
            <!--待审核-->
            <div class="card_div_examine" v-show="menu2_choose==1|menu2_choose==0" @click="goPage('newActivitiesConfirmDetails',{status_:1})">
                <van-row style="padding: 16px 12px 0">
                    <van-col class="" span="12"><p class="card_list1_test_left" >小微快贷企业交流会</p></van-col>
                </van-row>
                <van-row style="padding: 16px 12px 0">
                    <van-col class="" span="2" style="justify-content: center;align-items: center;"><img src="../../assets/image/my/address@2x.png" class="img_location" ></van-col>
                    <van-col class="" span="16" style="text-align: left"><p class="card_list2_test" >省分行营业部</p></van-col>
                </van-row>
                <van-row style="padding: 16px 12px 8px">
                    <van-col class="" span="2"><img src="../../assets/image/my/time@2x.png" class="img_location" ></van-col>
                    <van-col class="" span="12"><p class="card_list2_test" >2019.07.06-2019.08.08</p></van-col>
                    <van-col class="" span="10" style="text-align: right"></van-col>
                </van-row>
                <van-row style="text-align: center;padding: 8px 12px 0px;margin-bottom: 16px;background-color: white">
                    <van-col class="text-left" span="2"><img src="../../assets/images/38/Reviewer.png" class="img_location" ></van-col>
                    <van-col class="text-left" span="12"><p class="card_list2_test">等待<font color="#4c62e7">张三</font>审核</p></van-col>
                </van-row>
                <img  src="../../assets/images/other/Label3@2x.png" class="img_task" >
            </div>
            <!--任务中止-->
            <div class="card_div_examine" v-show="menu2_choose==2|menu2_choose==0" style="">
                <van-row style="padding: 16px 12px 0">
                    <van-col class="" span="12"><p class="card_list1_test_left" >小微贷款</p></van-col>
                </van-row>
                <van-row style="padding: 16px 12px 0">
                    <van-col class="" span="2" style="justify-content: center;align-items: center;"><img src="../../assets/image/my/address@2x.png" class="img_location" ></van-col>
                    <van-col class="" span="16" style="text-align: left"><p class="card_list2_test" >省分行营业部</p></van-col>
                </van-row>
                <van-row style="padding: 16px 12px 8px">
                    <van-col class="" span="2"><img src="../../assets/image/my/time@2x.png" class="img_location" ></van-col>
                    <van-col class="" span="12"><p class="card_list2_test" >2019.07.06-2019.08.08</p></van-col>
                    <van-col class="" span="10" style="text-align: right"></van-col>
                </van-row>
                <van-row style="text-align: center;padding: 8px 12px 0px;margin-bottom: 16px;background-color: white">
                    <van-col class="text-left" span="2"><img src="../../assets/images/38/Reviewer.png" class="img_location" ></van-col>
                    <van-col class="text-left" span="12"><p class="card_list2_test">等待<font color="#4c62e7">张三</font>审核</p></van-col>
                </van-row>
                <img  src="../../assets/images/other/Label5@2x.png" class="img_task" >
            </div>
            <!--任务变更-->
            <div class="card_div_examine" v-show="menu2_choose==3|menu2_choose==0" style="">
                <van-row style="padding: 16px 12px 0">
                    <van-col class="" span="12"><p class="card_list1_test_left" >小微快贷企业交流会</p></van-col>
                </van-row>
                <van-row style="padding: 16px 12px 0">
                    <van-col class="" span="2" style="justify-content: center;align-items: center;"><img src="../../assets/image/my/address@2x.png" class="img_location" ></van-col>
                    <van-col class="" span="16" style="text-align: left"><p class="card_list2_test" >省分行营业部</p></van-col>
                </van-row>
                <van-row style="padding: 16px 12px 8px">
                    <van-col class="" span="2"><img src="../../assets/image/my/time@2x.png" class="img_location" ></van-col>
                    <van-col class="" span="12"><p class="card_list2_test" >2019.07.06-2019.08.08</p></van-col>
                    <van-col class="" span="10" style="text-align: right"></van-col>
                </van-row>
                <van-row style="text-align: center;padding: 8px 12px 0px;margin-bottom: 16px;background-color: white">
                    <van-col class="text-left" span="2"><img src="../../assets/images/38/Reviewer.png" class="img_location" ></van-col>
                    <van-col class="text-left" span="12"><p class="card_list2_test">等待<font color="#4c62e7">张三</font>审核</p></van-col>
                </van-row>
                <img  src="../../assets/images/other/Label-15@2x.png" class="img_task" >
            </div>
            <!--名单补录-->
            <div class="card_div_examine" v-show="menu2_choose==4|menu2_choose==0" style=""  @click="goPage('replenishmentDetails')">
                <van-row style="padding: 16px 12px 0">
                    <van-col class="" span="12"><p class="card_list1_test_left" >小微快贷企业交流会</p></van-col>
                </van-row>
                <van-row style="padding: 16px 12px 0">
                    <van-col class="" span="2" style="justify-content: center;align-items: center;"><img src="../../assets/image/my/address@2x.png" class="img_location" ></van-col>
                    <van-col class="" span="16" style="text-align: left"><p class="card_list2_test" >省分行营业部</p></van-col>
                </van-row>
                <van-row style="padding: 16px 12px 8px">
                    <van-col class="" span="2"><img src="../../assets/image/my/time@2x.png" class="img_location" ></van-col>
                    <van-col class="" span="12"><p class="card_list2_test" >2019.07.06-2019.08.08</p></van-col>
                    <van-col class="" span="10" style="text-align: right"></van-col>
                </van-row>
                <van-row style="text-align: center;padding: 8px 12px 0px;margin-bottom: 16px;background-color: white">
                    <van-col class="text-left" span="2"><img src="../../assets/images/38/Reviewer.png" class="img_location" ></van-col>
                    <van-col class="text-left" span="12"><p class="card_list2_test">等待<font color="#4c62e7">张三</font>审核</p></van-col>
                </van-row>
                <img  src="../../assets/images/activity/Label14@2x.png" class="img_task" >
            </div>


          </van-tab>

          <!--                已发布下拉图标-->
          <img src="../../assets/images/24/Pulldown@2x.png" class="menu1_openThree" v-show="refuse!==1" @click="openMenu(3,1)">
          <img src="../../assets/images/24/Pullupselect@12x.png" class="menu1_openThree" v-show="refuse==1" @click="openMenu(3,-1)">
          <van-tab :title="tab3Title" name="已拒绝" color="#4c62e7">
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

        <van-tabs v-model="active" line-width="25%" title-active-color="#1989fa" color="#1989fa" v-show="type==0">
          <!--                已发布下拉图标-->
          <img src="../../assets/images/24/Pulldown@2x.png" style="left:32%;" class="menu1_open" v-show="menu!==1" @click="openMenu(1,1)">
          <img src="../../assets/images/24/Pullupselect@12x.png" style="left:32%;" class="menu1_open" v-show="menu==1" @click="openMenu(1,-1)">
          <van-tab :title="tab1Title" name="已发布" color="#4c62e7">
            <!--头部搜索-->
            <van-row class="seekRow" gutter="20"> 
              <van-col span="16"><van-field class="seekField" v-model="fieldWei" placeholder="请输入活动名称" />    
              </van-col>
              <van-col span="8"><van-button class="seekBut">查找</van-button>
              </van-col>
            </van-row>
            <van-row class="seekRow" gutter="20" style="height:30px;line-height:30px;"> 
                <van-col style="text-align:center;" span="24">共有<font data-v-27d9ad80="" color="#4c62e7">{{countcc}}</font>数据</van-button>
                </van-col>
            </van-row>
            <!--进行中-->
            <div class="card_div" v-show="menu_choose==2|menu_choose==0">
              <div @click="goPage('newActivitiesConfirmDetails',{status_:0})" class="card-bottom-line">
                  <van-row style="padding: 16px 12px 0">
                      <van-col class="" span="12"><p class="card_list1_test_left" >建行每周沙龙会</p></van-col>
                      <!-- <van-col class="" span="12" style="text-align: right"><p class="card_list1_test_right">进行中...</p></van-col> -->
                  </van-row>
                  <van-row style="padding: 16px 12px 0">
                      <van-col class="" span="2" style="justify-content: center;align-items: center;"><img src="../../assets/image/my/address@2x.png" class="img_location" ></van-col>
                      <van-col class="" span="16" style="text-align: left"><p class="card_list2_test" >西湖</p></van-col>
                  </van-row>
                  <van-row style="padding: 16px 12px 8px">
                      <van-col class="" span="2"><img src="../../assets/image/my/time@2x.png" class="img_location" ></van-col>
                      <van-col class="" span="12"><p class="card_list2_test" >2019.10.12-2019.10.13</p></van-col>
                      <van-col class="" span="10" style="text-align: right" ><p class="card_list2_test" >报名<span style="color: #4c62e7">0</span>人</p></van-col>
                  </van-row>
                  <img  src="../../assets/images/other/ICON_325-02.png" class="img_task" >
              </div>
              <van-row style="text-align: center;padding: 8px 12px 0">
                <van-col class="" span="12" @click="goViewList('/offlineHuoDong/viewList')">
                    <van-col class="" span="2"><img src="../../assets/image/my/List@2x.png" class="img_location location2" ></van-col>
                    <van-col class="" span="20"><p class="card_list2_test" >查看名单</p></van-col>
                </van-col>
                <van-col class="" span="12" @click="openOverlay">
                    <van-col class="" span="2"><img src="../../assets/image/my/QR code@2x.png" class="img_location location2" ></van-col>
                    <van-col class="" span="22"><p class="card_list2_test" @click="baoMingQianDao">报名/签到</p></van-col>
                </van-col>
              </van-row>
            </div>
            <!--已发布-->
            <div class="card_div" v-show="menu_choose==1|menu_choose==0">
              <div @click="goPage('activityDetailsNotBegin')" class="card-bottom-line">
                  <van-row style="padding: 16px 12px 0" >
                      <van-col class="" span="12"><p class="card_list1_test_left" >支付系統及形式创新</p></van-col>
                      <!--<van-col class="" span="12" style="text-align: right"><p class="card_list1_test_right" style="color: #f76037">未开始</p></van-col> -->
                  </van-row>
                  <van-row style="padding: 16px 12px 0">
                      <van-col class="" span="2" style="justify-content: center;align-items: center;"><img src="../../assets/image/my/address@2x.png" class="img_location" ></van-col>
                      <van-col class="" span="16" style="text-align: left"><p class="card_list2_test" >省分行营业部</p></van-col>
                  </van-row>
                  <van-row style="padding: 16px 12px 8px">
                      <van-col class="" span="2"><img src="../../assets/image/my/time@2x.png" class="img_location" ></van-col>
                      <van-col class="" span="12"><p class="card_list2_test" >2019.07.06-2019.08.08</p></van-col>
                      <van-col class="" span="10" style="text-align: right"><p class="card_list2_test" >报名<span style="color: #4c62e7">30</span>人</p></van-col>
                  </van-row>
                  <img  src="../../assets/images/other/ICON_325.png" class="img_task" >
              </div>
              <van-row style="text-align: center;padding: 8px 12px 0" type="flex" justify="center">
                  <van-col class="" span="12" @click="goViewList('/offlineHuoDong/viewList')">
                      <van-col class="" span="2"><img src="../../assets/image/my/List@2x.png" class="img_location location2" ></van-col>
                      <van-col class="" span="20" style="text-align: center"><p class="card_list2_test" >查看名单</p></van-col>
                  </van-col>
                  <van-col class="" span="12" @click="openOverlay">
                      <van-col class="" span="2"><img src="../../assets/image/my/QR code@2x.png" class="img_location location2" ></van-col>
                      <van-col class="" span="22" style="text-align: center"><p class="card_list2_test" @click="baoMingQianDao">报名/签到</p></van-col>
                  </van-col>
              </van-row>
            </div>
            <!--已结束-->
            <div class="card_div" v-show="menu_choose==3|menu_choose==0" >
              <div @click="goPage('activityDetailsOver')"  class="card-bottom-line">
                  <van-row style="padding: 16px 12px 0" type="flex" justify="center">
                      <van-col class="" span="12"><p class="card_list1_test_left" >今朝会-创业沙龙第六期</p></van-col>
                      <van-col class="" span="12" style="text-align: right"><p class="card_list1_test_right" style="color: #999999">已结束</p></van-col>
                  </van-row>
                  <van-row style="padding: 16px 12px 0">
                      <van-col class="" span="2" style="justify-content: center;align-items: center;"><img src="../../assets/image/my/address@2x.png" class="img_location" ></van-col>
                      <van-col class="" span="16" style="text-align: left"><p class="card_list2_test" >省分行营业部</p></van-col>
                  </van-row>
                  <van-row style="padding: 16px 12px 8px">
                      <van-col class="" span="2"><img src="../../assets/image/my/time@2x.png" class="img_location" ></van-col>
                      <van-col class="" span="12"><p class="card_list2_test" >2019.07.06-2019.08.08</p></van-col>
                      <van-col class="" span="10" style="text-align: right"><p class="card_list2_test" >报名<span style="color: #4c62e7">98</span>人/签到<span style="color: #4c62e7">92</span>人</p></van-col>
                  </van-row>
                  <img  src="../../assets/images/other/ICON_325-03.png" class="img_task" >
              </div>
              <van-row style="text-align: center;padding: 8px 12px 0" type="flex" justify="center">
                  <van-col class="" span="12" @click="goViewList('/offlineHuoDong/viewList')">
                      <van-col class="" span="2"><img src="../../assets/image/my/List@2x.png" class="img_location location2" ></van-col>
                      <van-col class="" span="20" style="text-align: center"><p class="card_list2_test" >查看名单</p></van-col>
                  </van-col>
                  <van-col class="" span="12" @click="goPage('xinZhenguploadImage')">
                      <van-col class="" span="2"><img src="../../assets/images/38/Upload@2x.png" class="img_location location2" ></van-col>
                      <van-col class="" span="20" style="text-align: center"><p class="card_list2_test" >上传照片</p></van-col>
                  </van-col>
              </van-row>
            </div>
          </van-tab>

          <!--                已发布下拉图标-->
          <img src="../../assets/images/24/Pulldown@2x.png" style="left:83%;" class="menu1_openTwo" v-show="toAudit!==1" @click="openMenu(2,1)">
          <img src="../../assets/images/24/Pullupselect@12x.png" style="left:83%;" class="menu1_openTwo" v-show="toAudit==1" @click="openMenu(2,-1)">
          <van-tab :title="tab2Title" name="待审核" color="#4c62e7">
            <!--头部搜索-->
            <van-row class="seekRow" gutter="20"> 
              <van-col span="16"><van-field class="seekField" v-model="fieldDai" placeholder="请输入活动名称" />    
              </van-col>
              <van-col span="8"><van-button class="seekBut">查找</van-button>
              </van-col>
            </van-row>
            <van-row class="seekRow" gutter="20" style="height:30px;line-height:30px;"> 
                <van-col style="text-align:center;" span="24">共有<font data-v-27d9ad80="" color="#4c62e7">{{countDsh}}</font>数据</van-button>
                </van-col>
            </van-row>
            <!--待审核-->
            <div class="card_div_examine" v-show="menu2_choose==1|menu2_choose==0" @click="goPage('activityParticulars',{status_:1})">
                <van-row style="padding: 16px 12px 0">
                    <van-col class="" span="12"><p class="card_list1_test_left" >小微快贷企业交流会</p></van-col>
                </van-row>
                <van-row style="padding: 16px 12px 0">
                    <van-col class="" span="2" style="justify-content: center;align-items: center;"><img src="../../assets/image/my/address@2x.png" class="img_location" ></van-col>
                    <van-col class="" span="16" style="text-align: left"><p class="card_list2_test" >省分行营业部</p></van-col>
                </van-row>
                <van-row style="padding: 16px 12px 8px">
                    <van-col class="" span="2"><img src="../../assets/image/my/time@2x.png" class="img_location" ></van-col>
                    <van-col class="" span="12"><p class="card_list2_test" >2019.07.06-2019.08.08</p></van-col>
                    <van-col class="" span="10" style="text-align: right"></van-col>
                </van-row>
                <van-row style="text-align: center;padding: 8px 12px 0px;margin-bottom: 16px;background-color: white">
                    <van-col class="text-left" span="2"><img src="../../assets/images/38/Reviewer.png" class="img_location" ></van-col>
                    <van-col class="text-left" span="12"><p class="card_list2_test">等待<font color="#4c62e7">张三</font>审核</p></van-col>
                </van-row>
                <img  src="../../assets/images/other/Label3@2x.png" class="img_task" >
            </div>
            <!--任务中止-->
            <div class="card_div_examine" v-show="menu2_choose==2|menu2_choose==0" style="">
                <van-row style="padding: 16px 12px 0">
                    <van-col class="" span="12"><p class="card_list1_test_left" >小微贷款</p></van-col>
                </van-row>
                <van-row style="padding: 16px 12px 0">
                    <van-col class="" span="2" style="justify-content: center;align-items: center;"><img src="../../assets/image/my/address@2x.png" class="img_location" ></van-col>
                    <van-col class="" span="16" style="text-align: left"><p class="card_list2_test" >省分行营业部</p></van-col>
                </van-row>
                <van-row style="padding: 16px 12px 8px">
                    <van-col class="" span="2"><img src="../../assets/image/my/time@2x.png" class="img_location" ></van-col>
                    <van-col class="" span="12"><p class="card_list2_test" >2019.07.06-2019.08.08</p></van-col>
                    <van-col class="" span="10" style="text-align: right"></van-col>
                </van-row>
                <van-row style="text-align: center;padding: 8px 12px 0px;margin-bottom: 16px;background-color: white">
                    <van-col class="text-left" span="2"><img src="../../assets/images/38/Reviewer.png" class="img_location" ></van-col>
                    <van-col class="text-left" span="12"><p class="card_list2_test">等待<font color="#4c62e7">张三</font>审核</p></van-col>
                </van-row>
                <img  src="../../assets/images/other/Label5@2x.png" class="img_task" >
            </div>
            <!--任务变更-->
            <div class="card_div_examine" v-show="menu2_choose==3|menu2_choose==0" style="">
                <van-row style="padding: 16px 12px 0">
                    <van-col class="" span="12"><p class="card_list1_test_left" >小微快贷企业交流会</p></van-col>
                </van-row>
                <van-row style="padding: 16px 12px 0">
                    <van-col class="" span="2" style="justify-content: center;align-items: center;"><img src="../../assets/image/my/address@2x.png" class="img_location" ></van-col>
                    <van-col class="" span="16" style="text-align: left"><p class="card_list2_test" >省分行营业部</p></van-col>
                </van-row>
                <van-row style="padding: 16px 12px 8px">
                    <van-col class="" span="2"><img src="../../assets/image/my/time@2x.png" class="img_location" ></van-col>
                    <van-col class="" span="12"><p class="card_list2_test" >2019.07.06-2019.08.08</p></van-col>
                    <van-col class="" span="10" style="text-align: right"></van-col>
                </van-row>
                <van-row style="text-align: center;padding: 8px 12px 0px;margin-bottom: 16px;background-color: white">
                    <van-col class="text-left" span="2"><img src="../../assets/images/38/Reviewer.png" class="img_location" ></van-col>
                    <van-col class="text-left" span="12"><p class="card_list2_test">等待<font color="#4c62e7">张三</font>审核</p></van-col>
                </van-row>
                <img  src="../../assets/images/other/Label-15@2x.png" class="img_task" >
            </div>
            <!--名单补录-->
            <div class="card_div_examine" v-show="menu2_choose==4|menu2_choose==0" style=""  @click="goPage('replenishmentDetails')">
                <van-row style="padding: 16px 12px 0">
                    <van-col class="" span="12"><p class="card_list1_test_left" >小微快贷企业交流会</p></van-col>
                </van-row>
                <van-row style="padding: 16px 12px 0">
                    <van-col class="" span="2" style="justify-content: center;align-items: center;"><img src="../../assets/image/my/address@2x.png" class="img_location" ></van-col>
                    <van-col class="" span="16" style="text-align: left"><p class="card_list2_test" >省分行营业部</p></van-col>
                </van-row>
                <van-row style="padding: 16px 12px 8px">
                    <van-col class="" span="2"><img src="../../assets/image/my/time@2x.png" class="img_location" ></van-col>
                    <van-col class="" span="12"><p class="card_list2_test" >2019.07.06-2019.08.08</p></van-col>
                    <van-col class="" span="10" style="text-align: right"></van-col>
                </van-row>
                <van-row style="text-align: center;padding: 8px 12px 0px;margin-bottom: 16px;background-color: white">
                    <van-col class="text-left" span="2"><img src="../../assets/images/38/Reviewer.png" class="img_location" ></van-col>
                    <van-col class="text-left" span="12"><p class="card_list2_test">等待<font color="#4c62e7">张三</font>审核</p></van-col>
                </van-row>
                <img  src="../../assets/images/activity/Label14@2x.png" class="img_task" >
            </div>


          </van-tab>

          <!--                已发布下拉图标-->
          <!-- <img src="../../assets/images/24/Pulldown@2x.png" class="menu1_openThree" v-show="refuse!==1" @click="openMenu(3,1)">
          <img src="../../assets/images/24/Pullupselect@12x.png" class="menu1_openThree" v-show="refuse==1" @click="openMenu(3,-1)">
          <van-tab :title="tab3Title" name="已拒绝" color="#4c62e7">
            <van-row class="seekRow" gutter="20"> 
              <van-col span="16"><van-field class="seekField" v-model="fieldYi" placeholder="请输入活动名称" />    
              </van-col>
              <van-col span="8"><van-button class="seekBut">查找</van-button>
              </van-col>
            </van-row>

          </van-tab>
          <van-tab name="4" title="草稿箱">
            <van-row class="seekRow" gutter="20"> 
              <van-col span="16"><van-field class="seekField" v-model="fieldWeiCao" placeholder="请输入活动名称" />    
              </van-col>
              <van-col span="8"><van-button class="seekBut">查找</van-button>
              </van-col>
            </van-row>

          </van-tab> -->
        </van-tabs>
      </div>
    </div>
         <!--         已发布下拉菜单-->
    <div class='menu_popContainer'  v-show="menu!==-1">
        <div  class="menu1_choose_box" v-show="menu==1&&type==1">
            <van-row class="choose_box_list" @click="menuChoose(0)">
                <p class="menu1_choose_box_text " :class="menu_choose == 0 ? 'blue' : '' ">已发布</p>
            </van-row>
            <van-row class="choose_box_list" @click="menuChoose(1)">
                <p class="menu1_choose_box_text " :class="menu_choose == 1 ? 'blue' : '' ">未开始</p>
            </van-row>
            <van-row class="choose_box_list" @click="menuChoose(2)">
                <p class="menu1_choose_box_text " :class="menu_choose == 2 ? 'blue' : '' ">进行中</p>
            </van-row>
            <van-row class="choose_box_list" @click="menuChoose(3)">
                <p class="menu1_choose_box_text " :class="menu_choose == 3 ? 'blue' : '' ">已结束</p>
            </van-row>
        </div>
        <div  class="menu1_choose_box" style="left:13%;" v-show="type==0">
            <van-row class="choose_box_list" @click="menuChoose(0)">
                <p class="menu1_choose_box_text " :class="menu_choose == 0 ? 'blue' : '' ">已发布</p>
            </van-row>
            <van-row class="choose_box_list" @click="menuChoose(1)">
                <p class="menu1_choose_box_text " :class="menu_choose == 1 ? 'blue' : '' ">未开始</p>
            </van-row>
            <van-row class="choose_box_list" @click="menuChoose(2)">
                <p class="menu1_choose_box_text " :class="menu_choose == 2 ? 'blue' : '' ">进行中</p>
            </van-row>
            <van-row class="choose_box_list" @click="menuChoose(3)">
                <p class="menu1_choose_box_text " :class="menu_choose == 3 ? 'blue' : '' ">已结束</p>
            </van-row>
        </div>
    </div>
         <!--         待审核下拉菜单-->
    <div class='menu_popContainerTwo'  v-show="toAudit!==-1">
        <div  class="menu1_choose_boxTwo" v-show="toAudit==1&&manu==1">
            <van-row class="choose_box_listTwo" @click="menu2Choose(0)">
                <p class="menu1_choose_box_textTwo " :class="menu2_choose == 0 ? 'blue' : '' ">待审核</p>
            </van-row>
            <van-row class="choose_box_listTwo" @click="menu2Choose(1)">
                <p class="menu1_choose_box_textTwo " :class="menu2_choose == 1 ? 'blue' : '' ">任务新建</p>
            </van-row>
            <van-row class="choose_box_listTwo" @click="menu2Choose(2)">
                <p class="menu1_choose_box_textTwo " :class="menu2_choose == 2 ? 'blue' : '' ">任务终止</p>
            </van-row>
            <van-row class="choose_box_listTwo" @click="menu2Choose(3)">
                <p class="menu1_choose_box_textTwo " :class="menu2_choose == 3 ? 'blue' : '' ">任务变更</p>
            </van-row>
            <van-row class="choose_box_listTwo" @click="menu2Choose(4)">
                <p class="menu1_choose_box_textTwo " :class="menu2_choose == 4 ? 'blue' : '' ">名单补录</p>
            </van-row>
        </div>
        <div  class="menu1_choose_boxTwo"  style="left:65%;" v-show="toAudit==1">
            <van-row class="choose_box_listTwo" @click="menu2Choose(0)">
                <p class="menu1_choose_box_textTwo " :class="menu2_choose == 0 ? 'blue' : '' ">待审核</p>
            </van-row>
            <van-row class="choose_box_listTwo" @click="menu2Choose(1)">
                <p class="menu1_choose_box_textTwo " :class="menu2_choose == 1 ? 'blue' : '' ">任务新建</p>
            </van-row>
            <van-row class="choose_box_listTwo" @click="menu2Choose(2)">
                <p class="menu1_choose_box_textTwo " :class="menu2_choose == 2 ? 'blue' : '' ">任务终止</p>
            </van-row>
            <van-row class="choose_box_listTwo" @click="menu2Choose(3)">
                <p class="menu1_choose_box_textTwo " :class="menu2_choose == 3 ? 'blue' : '' ">任务变更</p>
            </van-row>
            <van-row class="choose_box_listTwo" @click="menu2Choose(4)">
                <p class="menu1_choose_box_textTwo " :class="menu2_choose == 4 ? 'blue' : '' ">名单补录</p>
            </van-row>
        </div>
    </div>
         <!--         待审核下拉菜单-->
    <div class='menu_popContainerThree'  v-show="refuse!==-1">
        <div  class="menu1_choose_boxThree" v-show="refuse==1">
          <van-row class="choose_box_listThree" @click="menu3Choose(0)">
                <p class="menu1_choose_box_textThree " :class="menu3_choose == 0 ? 'blue' : '' ">已拒绝</p>
            </van-row>
            <van-row class="choose_box_listThree" @click="menu3Choose(1)">
                <p class="menu1_choose_box_textThree " :class="menu3_choose == 1 ? 'blue' : '' ">拒绝新建</p>
            </van-row>
            <van-row class="choose_box_listThree" @click="menu3Choose(2)">
                <p class="menu1_choose_box_textThree " :class="menu3_choose == 2 ? 'blue' : '' ">拒绝变更</p>
            </van-row>
            <van-row class="choose_box_listThree" @click="menu3Choose(3)">
                <p class="menu1_choose_box_textThree " :class="menu3_choose == 3 ? 'blue' : '' ">拒绝补录</p>
            </van-row>
        </div>
    </div>
    
    <!--二维码弹出框-->
     <van-popup v-model="erWeiMaIs" position="bottom" :style="{ height: '50%' }">
        <van-nav-bar id="erWeiMa" title='报名二维码'  @click-right="guanBiErWeiMa">
            <van-icon name="cross" slot="right"  size="24px" />
        </van-nav-bar>
        <van-row>
            <van-col span="5"></van-col>
            <van-col span="8">
              <div class="mesZhong">
                <img class="duiImg" src="../../assets/images/1570783923er.png"/></br>
                <div style="margin-left:45px;font-size:13px;">报名参加建行每周沙龙会</div>
              </div>
            </van-col>
          </van-row>
     </van-popup>
    <!--报名签到上拉-->
    <van-action-sheet id="baoMingId" title="报名/签到" v-model="baoQianIS" :actions="auditors" @select="xuanZhongAditor"/>
   
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
       menu_choose:0,
       menu2_choose:0,
       menu3_choose:0,
       fieldWei: '',//已发布输入框值
       fieldDai: '',//已发布输入框值
       fieldYi: '',//已发布输入框值
       fieldWeiCao: '',//已发布输入框值
       type:1,
       tab1Title:"已发布",
       tab2Title:"待审核",
       tab3Title:"已拒绝",
       countcc:3,
       countDsh:4,
       baoQianIS:false,
       erWeiMaIs:false,
       tuPianIs: false,
       auditors: [
        { id: 1,name: '报名二维码' },
        { id: 2,name: '每周沙龙会' },
       ],
     }
  },

  //数据预加载
  created : function(){

  },

  //网页加载完成
  mounted : function(){
    var value = sessionStorage.getItem('intelligenceEnablement')
    if (value == "supervisor") {
        this.type = 0
    } else {
        this.type = 1;
    }
  },
  
  //声明方法
  methods : {
    goViewList(url){
      this.$router.push(url)
    },
    goPage (url,param){
        this.$router.push({name:url,params:param});
    },
    //报名签到
    baoMingQianDao(){
       this.baoQianIS=true;
    },
    //报名签到选中项
    xuanZhongAditor(item){
        if(item.id==1){
            //打开二维码
            this.erWeiMaIs =true;
        }else if(item.id==2){
            this.erWeiMaIs =true;
        }
    },
    //关闭二维码
    guanBiErWeiMa(){
        this.erWeiMaIs =false;
    },
    openOverlay : function(){
        this.show = true;
        this.show1 = true;
    },
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
    menuChoose(i) {
      switch (i) {
          case 0 :
              this.tab1Title = '已发布';
              this.countcc=3
              break;
          case 1 :
              this.tab1Title = '未开始';
              this.countcc=1
              break;
          case 2 :
              this.tab1Title = '进行中';
              this.countcc=1
              break;
          case 3 :
              this.tab1Title = '已结束';
              this.countcc=1
              break;
          default:
              break;
      }
      this.menu_choose = i;
      this.menu = -1;
    },
    //已发布下拉列表中列得点击事件
    menu2Choose(i){
      switch (i) {
          case 0 :
              this.tab2Title = '待审核';
              this.countDsh = 4
              break;
          case 1 :
              this.tab2Title = '任务新建';
              this.countDsh = 1
              break;
          case 2 :
              this.tab2Title = '任务终止';
              this.countDsh = 1
              break;
          case 3 :
              this.tab2Title = '任务变更';
              this.countDsh = 1
              break;
          case 4 :
              this.tab2Title = '名单补录';
              this.countDsh = 1
              break;
          default:
              break;
      }
      this.menu2_choose = i;
      this.toAudit = -1;
    },
    //已发布下拉列表中列得点击事件
    menu3Choose(i){
      switch (i) {
          case 0 :
              this.tab3Title = '已拒绝';
              break;
          case 1 :
              this.tab3Title = '拒绝新建';
              break;
          case 2 :
              this.tab3Title = '拒绝变更';
              break;
          case 3 :
              this.tab3Title = '拒绝补录';
              break;
          default:
              break;
      }
      this.menu3_choose = i;
      this.refuse = -1;
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
<style>
    #erWeiMa .van-nav-bar__title{
        font-weight: bold;
    }
    #baoMingId .van-action-sheet__header{
        font-weight: bold;
    }
    #baoMingId .van-action-sheet__name{
        color:#4c62e8;
    }
</style>
<style lang="scss" scoped>
  //
  .card_div{
      max-height: 156px;
      min-height: 156px;
      width: auto;
      padding:0px;
      background-color: white;
      border-radius: 10px;
      margin: 8px 10px 0;
  }
  .card_div_examine{
      min-height: 164px;
      width: auto;
      padding:0px;
      background-color: white;
      border-radius: 10px;
      margin: 8px 10px 0;
      position: relative;
  }
  .card-bottom-line {
      border-bottom: #dddddd solid 1px;
      position:relative;
  }
  .card_list1_test_left{
      color: #333333;
      font-size: 14px;
      font-weight: bold;
      margin-block-start:0;
      margin-block-end:0;
  }
  .card_list1_test_right{
      color: #46b948;
      font-size: 14px;
      font-weight: bold;
      margin-block-start:0;
      margin-block-end:0;
  }
  .card_list2_test{
      color: rgb(51,51,51);
      font-size: 14px;
      margin-block-start:0;
      margin-block-end:0;
  }
  .img_task{
      position: absolute;
      right: 0;
      top: 16px;
      height: 28px;
  }
  .img_location{
      height: 19px;
      width: 19px;
  }
  .location2{position:relative; left: 40px;}
  .text-left{
    text-align: left;
  }

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
    /* position: fixed;
    top:90px; */
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
  //二维码
  .mesZhong{
    width:250px;
    height:250px;
  }
  .duiImg{
    width:200px;
    height:200px;
    margin-top:40px;;
    font-size: 12px;
    margin-left:20px;
  }
</style>
