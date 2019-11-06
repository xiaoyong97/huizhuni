<template>
  <!--线下活动页-->
  <div class="main">
   
    <!-- <div class="content">
      <van-nav-bar :title='title' @click-left="onClickLeft" @click-right="onClickRight" fixed>
        <van-icon name="arrow-left" slot="left"  size="24px" />
        <van-icon name="plus" slot="right"  size="24px" />
      </van-nav-bar>
    </div> -->
    
    <div class="top_bar_main_box" >
        <van-row class="top_bar_box" style="" v-show="type==0|type==2">
            <van-col :class="type!==2?'active':''" class="top_bar_box_col top_bar_box_col_left " span="12"><p class="top_bar_box_text_left" @click="changeType(1)">融智赋能</p></van-col>
            <van-col :class="type==2?'active':''" class="top_bar_box_col" span="12"><p class="top_bar_box_text_right" @click="changeType(2)">报表查询</p></van-col>
        </van-row>
        <van-row class="top_bar_box" style="" v-show="type==1">
            <van-col :class="type!==2?'active':''" class="top_bar_box_col top_bar_box_col_left " span="24"><p class="top_bar_box_text_left_dan" @click="changeType(1)">融智赋能</p></van-col>
        </van-row>
    </div>
    <!-- <img src="../../assets/images/38/filter1@2x.png" class="img_fliter" v-show="type!==2" @click="open_fliter"> -->
    <!--<span class="top_tight_text" v-show="type==2">查看附件</span>-->
    <img src="../../assets/images/38/return@2x.png" class="img_return"  @click="onClickLeft">
    <van-icon v-show="type==1" class="img_fliter" name="plus" slot="right"  size="24px" @click="onClickRight" />

    <div class="center-div">
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
          <van-tab name="草稿箱" :title="tab4Title"  color="#4c62e7"> 
            <!--头部搜索-->
            <van-row class="seekRow" gutter="20"> 
              <van-col span="16"><van-field class="seekField" v-model="fieldWeiCao" placeholder="请输入活动名称" />    
              </van-col>
              <van-col span="8"><van-button class="seekBut">查找</van-button>
              </van-col>
            </van-row>
            <!--保存草稿-->
            <div class="card_div_examine" v-show="showCg">
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
          </van-tab>
        </van-tabs>

        <van-tabs v-model="active2" line-width="25%" title-active-color="#1989fa" color="#1989fa" v-show="type==0">
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
          <van-tab name="4" title="草稿箱" >
            <van-row class="seekRow" gutter="20"> 
              <van-col span="16"><van-field class="seekField" v-model="fieldWeiCao" placeholder="请输入活动名称" />    
              </van-col>
              <van-col span="8"><van-button class="seekBut">查找</van-button>
              </van-col>

            </van-row>

          </van-tab>-->
        </van-tabs>

        <div class="query_container" v-show="type==2">
            <div >
                <div class="line_grey"></div>
                <div class="header_text" >
                    <h3>"普惠金融百万创业者培训计划"</h3>
                    <h3>开展情况会中表</h3>
                </div>
                <van-row class="cell">
                    <van-col class="cell-header" span="6">机构名称</van-col>
                    <van-col class="cell-content" span="10">
                    <p class="selete_bank">中国建设银行总行</p>
                        <!--选择框遮罩层-->
                        <div class="selete_bank_box" v-show="selete_Bank">
                            <van-row class="bank_row" @click="seleteBank"><p class="selete_bank">中国建设银行总行</p> </van-row>
                        </div>
                    </van-col>
                    <van-col class="" span="6"><van-icon v-show="selete_Bank" name="arrow-up" class="arrow_down_icon" @click="seleteBank"/><van-icon v-show="!selete_Bank" name="arrow-down" class="arrow_down_icon" @click="seleteBank"/></van-col>
                </van-row>

                <van-row class="cell" @click="chooseDate">
                <van-col class="cell-header" span="6">报告期</van-col>
                <van-col class="cell-content" span="12">
                    <p class="selete_bank">2019.01.01-2019.07.01</p>
                </van-col>
                    <van-col class="cell-header" span="4"><img  src="../../assets/images/24/modify@2x.png" class="img_write" ></van-col>
                </van-row>
                <div class="line_grey"></div>
            </div>

            <van-row class="btn-group ">
                <van-col class="btn-item" @click="sort(1)" span="8">按字母 &nbsp;<span class="sort"><span class="top active">&nbsp;</span><span class="down">&nbsp;</span></span></van-col>
                <van-col class="btn-item" @click="sort(2)" span="8">按人数 &nbsp;<span class="sort"><span class="top active">&nbsp;</span><span class="down">&nbsp;</span></span></van-col>
                <van-col class="btn-item" @click="sort(3)" span="8">按次数 &nbsp;<span class="sort"><span class="top">&nbsp;</span><span class="down active">&nbsp;</span></span></van-col>
            </van-row>
                    <div id="myChart" ></div>
                <van-popup v-model="date_picker">
                    <div class="date_container">
                        <div class="date_input_container">
                            <h3>请设置需要查询的报告时间段</h3>
                            <van-cell-group class="input-conatiner">
                                <van-field
                                v-model="start_date"
                                clearable
                                class="border"
                                >
                                <img slot="button" @click="timePickerStatue(1)" class="calendar" src="../../assets/images/38/calendar@2x.png" alt="">
                                </van-field>
                            <div class="zhi">至</div>
                                <van-field
                                v-model="end_date"
                                clearable
                                    class="border"
                                >

                                <img  slot="button" @click="timePickerStatue(2)" class="calendar" src="../../assets/images/38/calendar2.png" alt="">
                                </van-field>
                            </van-cell-group>
                            <div class="btn-group">
                                <button class="cancel-btn" @click="cancel_choose">取消</button> |
                                <button class="btn-sure" @click="sure">确定</button>
                            </div>
                        </div>
                        <div style="width: 100%">
                            <van-datetime-picker v-show="time_Picker_Statue==1" class="datetime-picker"
                                                    v-model="currentDate1"
                                                    type="date"
                                                    :min-date="minDate"
                                                    @change="changeFn(1)" @confirm="confirmBtn(1)" @cancel="cancelFn()"
                            />
                            <van-datetime-picker v-show="time_Picker_Statue==2" class="datetime-picker"
                                                    v-model="currentDate2"
                                                    type="date"
                                                    :min-date="minDate"
                                                    @change="changeFn(2)" @confirm="confirmBtn(2)" @cancel="cancelFn()"
                            />
                        </div>

                    </div>

                </van-popup>
			</div>
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
        <div  class="menu1_choose_boxTwo" v-show="toAudit==1&&type==1">
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
        <div  class="menu1_choose_boxTwo"  style="left:65%;" v-show="type==0">
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
        <van-nav-bar id="erWeiMa" :title='erWeiMaName'  @click-right="guanBiErWeiMa">
            <van-icon name="cross" slot="right"  size="24px" />
        </van-nav-bar>
        <van-row style="background-color:white;height:287.6px;">
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
let echarts = require('echarts/lib/echarts')
	// 引入柱状图组件
	require('echarts/lib/chart/bar')
	// 引入提示框和title组件
    require('echarts/lib/component/tooltip')
	require('echarts/lib/component/title')
export default {

  //基础数据存放处
  data (){
     return {
       title : '新建活动',
       guanLiId:this.$route.params.guanLiId,//跳转参数id
       active: "已发布",
       active2: "已发布",
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
       tab4Title:"草稿箱",
       countcc:3,
       countDsh:4,
       baoQianIS:false,
       erWeiMaIs:false,
       tuPianIs: false,
       auditors: [
        { id: 1,name: '报名二维码' },
        { id: 2,name: '签到二维码' },
       ],
       erWeiMaName: '报名二维码',
       showCg:false,
        selete_Bank:false,
        date_picker:false,
        end_date:'',
        start_date:'',
        time_Picker_Statue:0, //0：不显示 1：显示开始日期控件 2：显示结束日期控件
        timeValue1: '',//按确认后显示的日期  1：开始日期  2：结束日期
        timeValue2: '',
        currentDate1: new Date(),//1:开始日期  2 结束日期
        currentDate2: new Date(),
        minDate: new Date(2018, 10, 1),
     }
  },

  //数据预加载
  created : function(){

  },

  //网页加载完成
  mounted : function(){
    var value = sessionStorage.getItem('intelligenceEnablement')
    var saveCG = sessionStorage.getItem('saveCg')
    if (value == "supervisor") {//营销主管岗
        this.type = 0
    } else {//普惠营销管理岗
        this.type = 1;
        //检查是否保存草稿跳转过来
        if(saveCG == "true"){
            this.showCg = true;
        }
    }
  },
  
  //声明方法
  methods : {
    
    sure:function(){
        this.date_picker = false;
        this.time_Picker_Statue = 0;
    },
    cancel_choose:function(){
        this.date_picker = false;
        this.time_Picker_Statue = 0;
    },
    confirmBtn(i) { // 确定按钮
        if(this.type !== 2) {
            if (i==1) {
                this.timeValue1 = this.timeFormat(this.currentDate1);
            } else {
                this.timeValue2 = this.timeFormat(this.currentDate2);
            }
        } else {
            if (i==1) {
                this.start_date = this.timeFormat(this.currentDate1);
            } else {
                this.end_date = this.timeFormat(this.currentDate2);
            }
        }
        this.time_Picker_Statue = 0;
    },
    changeFn(i) { // 值变化是触发
        if (i==1) {
            this.changeDate = this.currentDate1 // Tue Sep 08 2020 00:00:00 GMT+0800 (中国标准时间)
        } else {
            this.changeDate = this.currentDate2 // Tue Sep 08 2020 00:00:00 GMT+0800 (中国标准时间)
        }
    },
    cancelFn(){
        this.time_Picker_Statue = 0;
    },
    timePickerStatue(i) {
        this.time_Picker_Statue = i;
    },
    chooseDate (){
        this.date_picker = true;
    },
    seleteBank() {
        this.selete_Bank = !this.selete_Bank;
    },
    //切换卡片
    changeType:function(index){
        if(index==2){
            this.type = index;
            var that = this;
            setTimeout(function(){
                if(that.type == 2){
                    that.createChart();
                }
            },100)
        }else{
            var value = sessionStorage.getItem('intelligenceEnablement')
            if (value == "supervisor") {//营销主管岗
                this.type = 0
            } else {//普惠营销管理岗
                this.type = 1;
            }
        }
    },
    goViewList(url){
        let activeNameDan="a"
      this.$router.push(url+"/"+activeNameDan)
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
            this.erWeiMaName='报名二维码'
        }else if(item.id==2){
            this.erWeiMaIs =true;
            this.erWeiMaName='签到二维码'
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
      this.$router.push('/index');
      //this.$router.go(-1);
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

    //报表查询
    createChart: function() {
        if(this.myChart == null){
            // 基于准备好的dom，初始化echarts实例
            this.myChart = echarts.init(document.getElementById('myChart'))
            var colors = ['#4c62e7', '#f76037', '#675bba'];

            let option = {
            color: colors,
                grid: {
                    left: '20%',
                },
                tooltip : {
                    trigger: 'item',
                    formatter: function (value) {
                        if(value.seriesName == '人'){
                            return  '<div style="padding:16px">'+value.name+"培训总人数:<span style='color:#4c62e7'>"+value.value+'</span>'+value.seriesName+"<br/>其中一级分行主办:<span style='color:#4c62e7'>500</span>人<br/>其中二级级分行主办:<span style='color:#4c62e7'>1600</span>人<br/>其中三级分行主办:<span style='color:#4c62e7'>2770</span>人</div>"
                        } else {
                            return  '<div style="padding:16px">'+value.name+"培训总次数:<span style='color:#4c62e7'>"+value.value+'</span>'+value.seriesName+"<br/>其中一级分行主办:<span style='color:#4c62e7'>10</span>次<br/>其中二级级分行主办:<span style='color:#4c62e7'>24</span>次<br/>其中三级分行主办:<span style='color:#4c62e7'>47</span>次</div>"
                        }
                    },
                    backgroundColor: 'rgb(255,255,255)',

                    textStyle:{
                        color:'#000',
                        lineHeight:'44',
                    },
                },
            xAxis:[

                    {
                    type: 'value',
                    // name: '人',
                    z:10,
                    position: 'top',
                    offset: 40,
                    axisLine: {
                        lineStyle: {
                            color: colors[0]
                        },
                    },

                    axisLabel: {
                        formatter: '{value}'
                    }
                },
                {
                    type: 'value',
                    position: 'bottom',
                    offset: -520,
                    axisLine: {
                        lineStyle: {
                            color: colors[1]
                        }
                    },
                    axisLabel: {
                        formatter: '{value}'
                    }
                },


            ],
            yAxis:  {
                type: 'category',
                data: ['广东省分行','湖南省分行','河北省分行','河南省分行','山东省分行', '山西省分行','陕西省分行',]

            },
                series: [
                    {
                        name:'人',
                        type:'bar',
                        label: {
                                normal: {
                                    position: 'right',
                                    show: true
                                }
                            },
                        data:[4870,4200,3800,5000,4700,3300,3800]
                    },
                    {
                        name:'次',
                        type:'bar',
                        xAxisIndex: 1,
                        label: {
                                    normal: {
                                        position: 'right',
                                        show: true
                                    }
                                },
                        data:[100,84,74,85,81,50,76]
                    },

                ]
            };

            // 绘制图表
            this.myChart.setOption(option);
　　　　    return this.myChart;
        }
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
  .center-div{
    position: relative;
    top: 47px;
  }
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
  .location2{position:relative; left: 35px;}
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


    .top_bar_main_box{
        width: 100%;
        position: absolute;
        top: 8px;
        justify-content: center;align-items: center;text-align: center;
        z-index: 99;
    }
    .top_bar_box{
        margin: 0 auto;
        border: #4c62e7 1px solid;
        width: 150px;
        height: 30px;

        border-radius: 8px;
    }


    .top_bar_box_col_left{
        /*background-color: #4c62e7;*/

        border-bottom-left-radius:7px;
        border-top-left-radius: 7px;
    }

    .top_bar_box_text_left{
        font-size: 14px;
        line-height: 30px;
        color: rgb(76,98,231);
        margin-block-start:0;
        margin-block-end:0;

        border-bottom-left-radius:7px;
        border-top-left-radius: 7px;
    }
    .top_bar_box_text_left_dan{
        font-size: 14px;
        line-height: 30px;
        color:white;
        margin-top:1px;
        margin-left:1px;
        background-color:rgb(76,98,231);
        margin-block-start:0;
        border-radius: 8px;
        margin-block-end:0;
    }
    .top_bar_box_text_right{
        font-size: 14px;
        line-height: 30px;
        color: rgb(76,98,231);
        margin-block-start:0;
        margin-block-end:0;

        border-bottom-right-radius:7px;
        border-top-right-radius: 7px;
    }
	.top_bar_box_col.active .top_bar_box_text_right, .top_bar_box_col.active .top_bar_box_text_left{
		background-color: rgb(76,98,231);
		color: #fff;
	}
    .img_fliter{
        position: absolute;
        top: 14px;
        right:12px ;
        height: 18px;
        width: 18px;
        z-index: 100;
    }
    .top_tight_text{
        position: absolute;
        top: 14px;
        right:12px ;
        color: #4c62e7;
        font-size: 14px;
        z-index: 100;
    }
    .img_return{
        position: absolute;
        top: 14px;
        left:12px ;
        height: 18px;
        width: 18px;
        z-index: 100;
    }

    ////报表查询
    .arrow_down_icon{
        font-size: 18px;
        color: #4c62e7;
        margin: 8px auto;
        margin-left: -10px;
    }
	.query_container{
		background-color: #fff;
		width: 100%;

	}
	.query_container .header_text{
		text-align: center;
		padding-top: 16px;
	}
	.query_container .header_text h3{
		margin: 4px;
	}
    .line_grey{
		min-height: 12px;
		background-color: rgb(238,238,238);
	}
	.cell{
		height: 34px;
		margin-bottom: 8px;
	}
	.cell .cell-header{
		text-align: center;
		color: #999999;
		height: 34px;
		line-height: 34px;
	}
	.cell .cell-content select{
		font-size: 16px;;
		appearance:none;
		-moz-appearance:none;
		-webkit-appearance:none;
		-ms-appearance:none;

		border:1px solid rgba(0,0,0,0);
		width:100%;
		height:34px;

		background:#fff;
		color:#666;

		outline:none;
	}
	.btn-group .btn-item{
		height: 44px;
		text-align: center;
		line-height: 44px;
		border-bottom: 1px solid #dddddd;
		margin-bottom: 16px;
	}
    .selete_bank{
       padding: 0;
        line-height: 34px;
        font-size: 16px;
        margin: 0;
    }
    .selete_bank_box{
        position: fixed;
        z-index: 10;
        left:0;
        right: 0;
        top:166px;
        bottom: 0;
        background-color: rgba(0,0,0,0.3);
    }
    .bank_row{
        background-color: white;
        position: absolute;
        top: 0;
        height: 34px;
        width: 100%;
        border-top: 1px solid #999999;
        border-bottom: 1px solid #999999;
        text-align: center;
    }
	.btn-group .btn-item .sort{
		display: inline-block;
		width: 12px;
		margin-top: 8px;
		vertical-align: top;
	}
	.btn-group .btn-item .sort .top{
		border: 6px solid rgba(0,0,0,0);
		border-bottom: 6px solid #666666;
		display: block;
		height: 0px;
		width: 0px;;
		margin-bottom: 2px;
		// background-color: red;
	}
	.btn-group .btn-item .sort .down{
		border: 6px solid rgba(0,0,0,0) ;
		border-top: 6px solid #666666;

		display: block;
		height: 0px;
		width: 0px;;
	}

	.btn-group .btn-item .sort .down.active{
		border-top: 6px solid #4c62e7;
	}
	.btn-group .btn-item .sort .top.active{
		border-bottom: 6px solid #4c62e7;
	}
	#myChart{
		width: 100%;
		height:600px;
	}

    .width_half{
        width: 50%;
    }
    .width_half_right{
        width: 50%;
        position: relative;
        left: 50%;
    }

	.date_container{
		width:100%;
		min-height: 736px;

	}
	.border{
		border: 1px solid grey;
		border-radius: 30px;
	}
	.date_input_container{
		width: 76%;
		margin: 100px auto 30px auto;
		background-color: #fff;
		border-radius: 16px;
	}
	.date_input_container h3{
		padding-top: 16px;
		height: 44px;
		line-height: 44px;
		text-align: center;
	}

	.input-conatiner{
		width: 80%;
		margin: 16px auto 16px auto;
	}
	.van-popup{
		background-color: rgba(0,0,0,0);
        width: 100%;
	}
	.datetime-picker{
		position: absolute;
		bottom:0px;
		width: 100%;
	}
	.btn-group{
		height: 44px;
		border-top: 1px solid #dddddd;
	}
	.btn-group .cancel-btn{
		width: 47%;
		height: 44px;
        background-color: white;
        border: 0px;
        border-radius: 10px;
	}
	.btn-group .btn-sure{
		width: 47%;
		height: 44px;
		color: #4c62e7;
        background-color: white;
        border: 0px;
        border-radius: 10px;
	}
	.zhi{
		height: 40px;
		text-align: center;
		line-height: 40px;
		font-size: 16px;
	}
	.calendar{
		width: 24px;
		height: 24px;
		line-height: 24px;
	}

</style>
