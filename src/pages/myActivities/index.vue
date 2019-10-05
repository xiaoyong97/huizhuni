<template>
     <div class="main" style="position: relative; ">
<!--        遮罩层-->
        <div class='popContainer' v-show="show" >

            <div  class="choose_box" v-show="show1">
                <van-row class="choose_box_list" style="border-bottom: solid #dddddd 1px;" type="flex" justify="end">
                    <van-col class="choose_box_text" span="8" style="text-align: center"><p class="choose_box_text" style="font-size: 18px;color: #333333">报名/签到</p></van-col>
                    <van-col class="list_title" span="8" style="text-align: right"><p class="choose_box_text" style="padding-right: 10px" @click="closeOverlay">取消</p></van-col>
                </van-row>
                <van-row class="choose_box_list" >
                    <p class="choose_box_text" >报名二维码</p>
                </van-row>
                <van-row class="choose_box_list" @click="openSecendOverlay">
                    <p class="choose_box_text" >支付系统及形式创新001</p>
                </van-row>
                <van-row class="choose_box_list" @click="openSecendOverlay">
                    <p class="choose_box_text blue" >支付系统及形式创新002</p>
                </van-row>
                <van-row class="choose_box_list" @click="openSecendOverlay">
                    <p class="choose_box_text blue" >支付系统及形式创新003</p>
                </van-row>
                <van-row class="choose_box_list" @click="openSecendOverlay">
                    <p class="choose_box_text blue" >支付系统及形式创新004</p>
                </van-row>
                <van-row class="choose_box_list" @click="openSecendOverlay">
                    <p class="choose_box_text blue" >支付系统及形式创新005</p>
                </van-row>


            </div>
            <div  class="choose_box" style="height: auto;" v-show="show2">
                <div style="height: 10px;position: relative"><img @click="gobackOverlay" src="../../assets/images/24/Empty@2x.png" class="img_close" ></div>
                <van-row class="choose_box_list" >
                    <p class="choose_box_text" style="color: #333333;">{{openOverlay_title}}</p>
                </van-row>
                <van-row class="" style="justify-content: center;align-items: center;text-align:center" >
                    <img src="../../assets/images/other/erweima.png" class="img_erweima" >
                </van-row>
                <div class=""  style="background-color: #4c62e7;width: 120px;height: 5px;margin: 0px auto;"></div>
                <van-row class="choose_box_list" >
                    <p class="choose_box_text" >签到二维码</p>
                </van-row>
                <van-row class="list_row_top" >
                    <van-col class=""  style="background-color: #4c62e7;width: 10px;height: 16px;margin: 9px 4px 9px 0;"></van-col>
                    <van-col class=""  style="text-align: left"><p class="list_right_text" style="font-weight: bold">日程信息</p></van-col>
                </van-row>
                <van-row class="list_row" >
                    <van-col class=""  span="5" style="text-align: center;"><p class="list_test_min_head" >日程名称</p></van-col>
                    <van-col class=""  span="5" style="text-align: center;"><p class="list_test_min_head" >主讲人</p></van-col>
                    <van-col class=""  span="5" style="text-align: center;"><p class="list_test_min_head" >日程时间</p></van-col>
                    <van-col class=""  span="4" style="text-align: center;"><p class="list_test_min_head" >地点</p></van-col>
                    <van-col class=""  span="5"  style="text-align: center"><p class="list_test_min_head" >日程时长</p></van-col>
                </van-row>
                <van-row class="list_row" >
                    <van-col class=""  span="5" style="text-align: center;"><p class="list_test_min" >信用快贷</p></van-col>
                    <van-col class=""  span="5" style="text-align: center;"><p class="list_test_min" >李四</p></van-col>
                    <van-col class=""  span="5" style="text-align: center;"><p class="list_test_min" >9:00-13:00</p></van-col>
                    <van-col class=""  span="4" style="text-align: center;"><p class="list_test_min" >901</p></van-col>
                    <van-col class=""  span="5"  style="text-align: center"><p class="list_test_min" >120分钟</p></van-col>
                </van-row>
                <van-row class="list_row" >
                    <van-col class=""  span="5" style="text-align: center;"><p class="list_test_min" >抵押快贷</p></van-col>
                    <van-col class=""  span="5" style="text-align: center;"><p class="list_test_min" >李四</p></van-col>
                    <van-col class=""  span="5" style="text-align: center;"><p class="list_test_min" >9:00-13:00</p></van-col>
                    <van-col class=""  span="4" style="text-align: center;"><p class="list_test_min" >901</p></van-col>
                    <van-col class=""  span="5"  style="text-align: center"><p class="list_test_min" >120分钟</p></van-col>
                </van-row>

            </div>
        </div>
        <!--头部导航-->

        <van-nav-bar :title="title"  ></van-nav-bar>
         <div class="top_bar_main_box" >
             <van-row class="top_bar_box" style="">
                 <van-col :class="type!==2?'active':''" class="top_bar_box_col top_bar_box_col_left " span="12"><p class="top_bar_box_text_left" @click="changeType(1)">我的活动</p></van-col>
                 <van-col :class="type==2?'active':''" class="top_bar_box_col " span="12"><p class="top_bar_box_text_right" @click="changeType(2)">报表查询</p></van-col>
             </van-row>
         </div>
         <img src="../../assets/images/38/filter1@2x.png" class="img_fliter" @click="open_fliter">
         <img src="../../assets/images/38/searchfor@2x.png" class="img_search" >
         <img src="../../assets/images/38/return@2x.png" class="img_return"  @click="onClickLeft">
         <!--         下拉菜单-->
         <div class='menu_popContainer'  v-show="menu!==-1">
             <div  class="menu1_choose_box" :class="type==0?'width_half':''" v-show="menu==0">
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
             <div  class="menu1_choose_box position_center" :class="type==1?'':'width_half_right'" v-show="menu==1">
                 <van-row class="choose_box_list" @click="menu2Choose(0)">
                     <p class="menu1_choose_box_text " :class="menu2_choose == 0 ? 'blue' : '' ">全部</p>
                 </van-row>
                 <van-row class="choose_box_list" @click="menu2Choose(1)">
                     <p class="menu1_choose_box_text " :class="menu2_choose == 1 ? 'blue' : '' ">任务新建</p>
                 </van-row>
                 <van-row class="choose_box_list" @click="menu2Choose(2)">
                     <p class="menu1_choose_box_text " :class="menu2_choose == 2 ? 'blue' : '' ">任务中止</p>
                 </van-row>
                 <van-row class="choose_box_list" @click="menu2Choose(3)">
                     <p class="menu1_choose_box_text " :class="menu2_choose == 3 ? 'blue' : '' ">任务变更</p>
                 </van-row>
                 <van-row class="choose_box_list" @click="menu2Choose(4)">
                     <p class="menu1_choose_box_text " :class="menu2_choose == 4 ? 'blue' : '' ">名单补录</p>
                 </van-row>

             </div>
             <!--         时间筛选-->
             <div  class="fliter_box" v-show="menu==9">
                 <van-row class="fliter_row" type="flex" justify="space-between">
                     <van-col class="start_time" span="4"><p class="datetime_picker_text" >开始时间</p></van-col>
                     <van-col class="total_time" span="5" @click="seleteTime(1)" :class="time_choose == 1 ? 'border_blue' : '' "><p class="datetime_picker_text" :class="time_choose == 1 ? 'blue' : '' ">近一周</p></van-col>
                     <van-col class="total_time" span="5" @click="seleteTime(2)" :class="time_choose == 2 ? 'border_blue' : '' "><p class="datetime_picker_text" :class="time_choose == 2 ? 'blue' : '' ">近一个月</p></van-col>
                     <van-col class="total_time" span="5" @click="seleteTime(3)" :class="time_choose == 3 ? 'border_blue' : '' "><p class="datetime_picker_text" :class="time_choose == 3 ? 'blue' : '' ">近三个月</p></van-col>
                     <van-col class="total_time" span="5" @click="seleteTime(4)" :class="time_choose == 4 ? 'border_blue' : '' "><p class="datetime_picker_text" :class="time_choose == 4 ? 'blue' : '' ">近六个月</p></van-col>
                 </van-row>
                 <div class="null_box"></div>
                 <van-row class="fliter_row" type="flex" justify="space-between">
                     <van-col class="start_time" span="4"><p class="datetime_picker_text" >自定义</p></van-col>
                     <van-col class="selete_time" span="7"><p class="datetime_picker_text" >{{timeValue1}}</p></van-col>
                     <van-col class="" span="1">
                         <img src="../../assets/images/38/calendar@2x.png" class="img_calendar "  @click="timePickerStatue(1)">
                     </van-col>
                     <van-col class="" span="1"><p class="datetime_picker_text" >一</p></van-col>
                     <van-col class="selete_time" span="7"><p class="datetime_picker_text" >{{timeValue2}}</p></van-col>
                     <van-col class="" span="1">
                         <img src="../../assets/images/38/calendar@2x.png" class="img_calendar "  @click="timePickerStatue(2)">
                     </van-col>
                 </van-row>
                 <div class="null_box"></div>
                 <van-row class="" >
                     <van-col class="orange_fliter_box" span="12" @click="clearAll"><p class="bg_fliter_box_text" >清空条件</p></van-col>
                     <van-col class="blue_fliter_box" span="12" @click="open_fliter"><p class="bg_fliter_box_text" >确定</p></van-col>
                 </van-row>
                 <div class="null_box"></div>
                 <van-datetime-picker v-show="time_Picker_Statue==1"
                                      v-model="currentDate1"
                                      type="date"
                                      :min-date="minDate"
                                      @change="changeFn(1)" @confirm="confirmBtn(1)" @cancel="cancelFn()"
                 />
                 <van-datetime-picker v-show="time_Picker_Statue==2"
                                      v-model="currentDate2"
                                      type="date"
                                      :min-date="minDate"
                                      @change="changeFn(2)" @confirm="confirmBtn(2)" @cancel="cancelFn()"
                 />
             </div>
         </div>
        <div class="content">
            <van-tabs color="#4c62e7" v-model="active" line-width="33%" line-height=3 title-active-color="#4c62e7" v-show="type==1" class="relative" @click="onTabClick">
                <!--                已发布下拉图标-->
                <img src="../../assets/images/24/Pulldownselect@2x.png" class="menu1_open" v-show="menu!==0" @click="openMenu(0)">
                <img src="../../assets/images/24/Pullupselect@12x.png" class="menu1_open" v-show="menu==0" @click="closeMenu">
                <!--                待审核下拉图标-->
                <img src="../../assets/images/24/Pulldownselect@2x.png" class="menu1_open menu2_open" v-show="menu!==1" @click="openMenu(1)">
                <img src="../../assets/images/24/Pullupselect@12x.png" class="menu1_open menu2_open" v-show="menu==1" @click="closeMenu">
                <van-tab :title="tab1Title" name="已发布" color="#4c62e7" >
                    <div class="card_div" v-show="menu_choose==2|menu_choose==0">
                        <div @click="goPage('activityDetailsIng',{status_:0})" class="card-bottom-line">
                            <van-row style="padding: 16px 12px 0">
                                <van-col class="" span="12"><p class="card_list1_test_left" >小微贷款</p></van-col>
                                <van-col class="" span="12" style="text-align: right"><p class="card_list1_test_right">进行中...</p></van-col>
                            </van-row>
                            <van-row style="padding: 16px 12px 0">
                                <van-col class="" span="2" style="justify-content: center;align-items: center;"><img src="../../assets/image/my/address@2x.png" class="img_location" ></van-col>
                                <van-col class="" span="16" style="text-align: left"><p class="card_list2_test" >省分行营业部</p></van-col>
                            </van-row>
                            <van-row style="padding: 16px 12px 8px">
                                <van-col class="" span="2"><img src="../../assets/image/my/time@2x.png" class="img_location" ></van-col>
                                <van-col class="" span="12"><p class="card_list2_test" >2019.07.06-2019.08.08</p></van-col>
                                <van-col class="" span="10" style="text-align: right" ><p class="card_list2_test" >报名<span style="color: #4c62e7">30</span>人/签到<span style="color: #4c62e7">21</span>人</p></van-col>
                            </van-row>
                        </div>
                            <van-row style="text-align: center;padding: 8px 12px 0">
                                <van-col class="" span="8" @click="goPage('viewList')">
                                    <van-col class="" span="2"><img src="../../assets/image/my/List@2x.png" class="img_location" ></van-col>
                                    <van-col class="" span="20"><p class="card_list2_test" >查看名单</p></van-col>
                                </van-col>
                                <van-col class="" span="8" @click="openOverlay">
                                    <van-col class="" span="2"><img src="../../assets/image/my/QR code@2x.png" class="img_location" ></van-col>
                                    <van-col class="" span="22"><p class="card_list2_test" >报名/签到</p></van-col>
                                </van-col>
                                <van-col class="" span="8">
                                    <van-col class="" span="2"><img src="../../assets/image/my/View report@2x.png" class="img_location" ></van-col>
                                    <van-col class="" span="20"><p class="card_list2_test" >查看问卷</p></van-col>
                                </van-col>
                            </van-row>
                        </div>
                    <div class="card_div" v-show="menu_choose==1|menu_choose==0">
                        <div @click="goPage('activityDetailsNotBegin')" class="card-bottom-line">
                            <van-row style="padding: 16px 12px 0" >
                                <van-col class="" span="12"><p class="card_list1_test_left" >支付系統及形式创新</p></van-col>
                                <van-col class="" span="12" style="text-align: right"><p class="card_list1_test_right" style="color: #f76037">未开始</p></van-col>
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
                        </div>
                        <van-row style="text-align: center;padding: 8px 12px 0" type="flex" justify="center">
                            <van-col class="" span="8" @click="goPage('viewList')">
                                <van-col class="" span="2"><img src="../../assets/image/my/List@2x.png" class="img_location" ></van-col>
                                <van-col class="" span="20" style="text-align: center"><p class="card_list2_test" >查看名单</p></van-col>
                            </van-col>
                            <van-col class="" span="8" @click="openOverlay">
                                <van-col class="" span="2"><img src="../../assets/image/my/QR code@2x.png" class="img_location" ></van-col>
                                <van-col class="" span="22" style="text-align: center"><p class="card_list2_test" >报名/签到</p></van-col>
                            </van-col>
                            <van-col class="" span="8">
                                <van-col class="" span="2"><img src="../../assets/image/my/View report@2x.png" class="img_location" ></van-col>
                                <van-col class="" span="20" style="text-align: center"><p class="card_list2_test" >查看问卷</p></van-col>
                            </van-col>
                        </van-row>
                    </div>
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
                        </div>
                        <van-row style="text-align: center;padding: 8px 12px 0" type="flex" justify="center">
                            <van-col class="" span="8" @click="goPage('viewList')">
                                <van-col class="" span="2"><img src="../../assets/image/my/List@2x.png" class="img_location" ></van-col>
                                <van-col class="" span="20" style="text-align: center"><p class="card_list2_test" >查看名单</p></van-col>
                            </van-col>
                            <van-col class="" span="8" @click="goPage('uploadImage')">
                                <van-col class="" span="2"><img src="../../assets/images/38/Upload@2x.png" class="img_location" ></van-col>
                                <van-col class="" span="20" style="text-align: center"><p class="card_list2_test" >上传照片</p></van-col>
                            </van-col>
                            <van-col class="" span="8">
                                <van-col class="" span="2"><img src="../../assets/image/my/View report@2x.png" class="img_location" ></van-col>
                                <van-col class="" span="20" style="text-align: center"><p class="card_list2_test" >查看问卷</p></van-col>
                            </van-col>
                        </van-row>
                    </div>
                    <div style="height: 8px"></div>
                </van-tab>
                <van-tab :title="tab2Title" name="待审核" color="#4c62e7" >
                    <!--                    任务新建-->
                    <div class="card_div_examine" v-show="menu2_choose==1|menu2_choose==0" @click="goPage('activityDetailsIng',{status_:1})">
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
                    <!--                    任务中止-->
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
                    <!--                    任务变更-->
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
                    <!--                    名单补录-->
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


                    <div style="height: 8px"></div>
                </van-tab>
				<!-- 已拒绝 -->
				<van-tab title="已拒绝(1)" color="#4c62e7" >
                    <div class="card_div" style="" >
                        <div>
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
                            </van-row>
                        </div>
                        <van-row style="text-align: center;padding: 8px 12px 0px;margin-bottom: 16px;background-color: white">
                            <van-col class="text-left" span="2"><img src="../../assets/images/38/Reviewer.png" class="img_location" ></van-col>
                            <van-col class="text-left" span="12"><p class="card_list2_test">审核人<font color="#4c62e7">张三</font>已拒绝</p></van-col>
                        </van-row>
                    </div>

                    <div style="height: 8px"></div>
				</van-tab>
            </van-tabs>
            <van-tabs color="#4c62e7" v-model="active2" line-width="50%" line-height=3 title-active-color="#4c62e7" v-show="type==0" class="relative" @click="onTabClick2">
                <!--                已发布下拉图标-->
                <img src="../../assets/images/24/Pulldownselect@2x.png" class="tabs2_menu1_open" v-show="menu!==0" @click="openMenu(0)">
                <img src="../../assets/images/24/Pullupselect@12x.png" class="tabs2_menu1_open" v-show="menu==0" @click="closeMenu">
                <!--                待审核下拉图标-->
                <img src="../../assets/images/24/Pulldownselect@2x.png" class="tabs2_menu1_open tabs2_menu2_open" v-show="menu!==1" @click="openMenu(1)">
                <img src="../../assets/images/24/Pullupselect@12x.png" class="tabs2_menu1_open tabs2_menu2_open" v-show="menu==1" @click="closeMenu">
                <van-tab :title="tab1Title" name="已发布" color="#4c62e7" >
                    <div class="card_div" v-show="menu_choose==2|menu_choose==0" style="" >
                        <div @click="goPage('activityDetailsIng',{status_:0})" class="card-bottom-line">
                            <van-row style="padding: 16px 12px 0">
                                <van-col class="" span="12"><p class="card_list1_test_left" >小微贷款</p></van-col>
                                <van-col class="" span="12" style="text-align: right"><p class="card_list1_test_right">进行中...</p></van-col>
                            </van-row>
                            <van-row style="padding: 16px 12px 0">
                                <van-col class="" span="2" style="justify-content: center;align-items: center;"><img src="../../assets/image/my/address@2x.png" class="img_location" ></van-col>
                                <van-col class="" span="16" style="text-align: left"><p class="card_list2_test" >省分行营业部</p></van-col>
                            </van-row>
                            <van-row style="padding: 16px 12px 8px">
                                <van-col class="" span="2"><img src="../../assets/image/my/time@2x.png" class="img_location" ></van-col>
                                <van-col class="" span="12"><p class="card_list2_test" >2019.07.06-2019.08.08</p></van-col>
                                <van-col class="" span="10" style="text-align: right" ><p class="card_list2_test" >报名<span style="color: #4c62e7">30</span>人/签到<span style="color: #4c62e7">21</span>人</p></van-col>
                            </van-row>
                        </div>
                        <van-row style="text-align: center;padding: 8px 12px 0">
                            <van-col class="" span="8" @click="goPage('viewList')">
                                <van-col class="" span="2"><img src="../../assets/image/my/List@2x.png" class="img_location" ></van-col>
                                <van-col class="" span="20"><p class="card_list2_test" >查看名单</p></van-col>
                            </van-col>
                            <van-col class="" span="8" @click="openOverlay">
                                <van-col class="" span="2"><img src="../../assets/image/my/QR code@2x.png" class="img_location" ></van-col>
                                <van-col class="" span="22"><p class="card_list2_test" >报名/签到</p></van-col>
                            </van-col>
                            <van-col class="" span="8">
                                <van-col class="" span="2"><img src="../../assets/image/my/View report@2x.png" class="img_location" ></van-col>
                                <van-col class="" span="20"><p class="card_list2_test" >查看问卷</p></van-col>
                            </van-col>
                        </van-row>
                    </div>
                    <div class="card_div" v-show="menu_choose==1|menu_choose==0" style="" >
                        <div @click="goPage('activityDetailsNotBegin')" class="card-bottom-line">
                            <van-row style="padding: 16px 12px 0" >
                                <van-col class="" span="12"><p class="card_list1_test_left" >支付系統及形式创新</p></van-col>
                                <van-col class="" span="12" style="text-align: right"><p class="card_list1_test_right" style="color: #f76037">未开始</p></van-col>
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
                        </div>
                        <van-row style="text-align: center;padding: 8px 12px 0" type="flex" justify="center">
                            <van-col class="" span="8" @click="goPage('viewList')">
                                <van-col class="" span="2"><img src="../../assets/image/my/List@2x.png" class="img_location" ></van-col>
                                <van-col class="" span="20" style="text-align: center"><p class="card_list2_test" >查看名单</p></van-col>
                            </van-col>
                            <van-col class="" span="8" @click="openOverlay">
                                <van-col class="" span="2"><img src="../../assets/image/my/QR code@2x.png" class="img_location" ></van-col>
                                <van-col class="" span="22" style="text-align: center"><p class="card_list2_test" >报名/签到</p></van-col>
                            </van-col>
                            <van-col class="" span="8">
                                <van-col class="" span="2"><img src="../../assets/image/my/View report@2x.png" class="img_location" ></van-col>
                                <van-col class="" span="20" style="text-align: center"><p class="card_list2_test" >查看问卷</p></van-col>
                            </van-col>
                        </van-row>
                    </div>
                    <div class="card_div" v-show="menu_choose==3|menu_choose==0" style="" >
                        <div @click="goPage('activityDetailsOver')" class="card-bottom-line">
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
                        </div>
                        <van-row style="text-align: center;padding: 8px 12px 0" type="flex" justify="center">
                            <van-col class="" span="8" @click="goPage('viewList')">
                                <van-col class="" span="2"><img src="../../assets/image/my/List@2x.png" class="img_location" ></van-col>
                                <van-col class="" span="20" style="text-align: center"><p class="card_list2_test" >查看名单</p></van-col>
                            </van-col>
                            <van-col class="" span="8" @click="goPage('uploadImage')">
                                <van-col class="" span="2"><img src="../../assets/images/38/Upload@2x.png" class="img_location" ></van-col>
                                <van-col class="" span="20" style="text-align: center"><p class="card_list2_test" >上传照片</p></van-col>
                            </van-col>
                            <van-col class="" span="8">
                                <van-col class="" span="2"><img src="../../assets/image/my/View report@2x.png" class="img_location" ></van-col>
                                <van-col class="" span="20" style="text-align: center"><p class="card_list2_test" >查看问卷</p></van-col>
                            </van-col>
                        </van-row>
                    </div>
                    <div style="height: 8px"></div>
                </van-tab>
                <van-tab :title="tab2Title" name="待审核" color="#4c62e7" >
                    <!--                    任务新建-->
                    <div class="card_div_examine" v-show="menu2_choose==1|menu2_choose==0" @click="goPage('activityDetailsIng',{status_:1})" >
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
                    <!--                    任务中止-->
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
                    <!--                    任务变更-->
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
                    <!--                    名单补录-->
                    <div class="card_div_examine" v-show="menu2_choose==4|menu2_choose==0" @click="goPage('replenishmentDetails')">
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


                    <div style="height: 8px"></div>
                </van-tab>

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
								 <van-col class="cell-content" span="16">
									 <select name="" id="">
										 <option value="" selected>中国建设银行总行</option>
									 </select>
								 </van-col>
							 </van-row>

							 <van-row class="cell" @click="chooseDate">
								<van-col class="cell-header" span="6">报告期</van-col>
								<van-col class="cell-content" span="16">
									<select name="" id="">
										<option value="" selected>2019.01.01-2019.07.01</option>
									</select>
								</van-col>
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
</template>

<script>

    import NavBar from '@/components/navBar'
    import Vue from 'vue';
    import { Tab, Tabs ,SubmitBar,Popup,DatetimePicker,Dialog,Field } from 'vant';
	let echarts = require('echarts/lib/echarts')
	// 引入柱状图组件
	require('echarts/lib/chart/bar')
	// 引入提示框和title组件
    require('echarts/lib/component/tooltip')
	require('echarts/lib/component/title')
    Vue.use(Tab).use(Tabs).use(SubmitBar);
    export default {

        data() {
            return {
                hidden:false,
                menu:-1,  //-1:不显示 0:已发布，1.待审核，2.已拒绝,9筛选
                menu_choose :0,
                menu2_choose :0,//tab审核的菜单选择 1：新建2：中止3：变更4：名单补录
                time_choose :0,
                fliter:false,
                currentDate1: new Date(),//1:开始日期  2 结束日期
                currentDate2: new Date(),
                timeValue1: '',//按确认后显示的日期  1：开始日期  2：结束日期
                timeValue2: '',
                endData:'',
                minDate: new Date(2018, 10, 1),
                time_Picker_Statue:0, //0：不显示 1：显示开始日期控件 2：显示结束日期控件
                active:1,
                active2:1,
                tab1Title:'已发布(3)',
                tab2Title:'待审核(4)',
                title : '',
                checked: true,
                show: false,
                show1:false,
                show2:false,
                openOverlay_title:"",
				type:1,
				myChart:null,
				date_picker:false,
				date:'2019.01.01-2019.07.01',

				maxDate: new Date(2019, 10, 1),
				currentDate: new Date(),
				date_show:true,
				end_date:'',
				start_date:'',
            }
        },


        //数据预加载
        created  (){
            this.menu = -1;

        },

        //网页加载完成
        mounted (){
            var avtiveValue = sessionStorage.getItem("myActivityTabActive");
            var avtiveValue2 = sessionStorage.getItem("myActivityTabActive2");
            if (avtiveValue!==null) {
                console.log(avtiveValue)
                this.active = avtiveValue
            }
            if (avtiveValue2!==null) {
                console.log(avtiveValue2)
                this.active2 = avtiveValue2
            }
            var value = sessionStorage.getItem('identity')
            if (value == "management") {
                this.type = 0
            } else {
                this.type = 1;
            }
        },

        //声明方法
        methods : {
            menuChoose(i) {
                switch (i) {
                    case 0 :
                        this.tab1Title = '已发布(3)';
                        break;
                    case 1 :
                        this.tab1Title = '未开始(1)';
                        break;
                    case 2 :
                        this.tab1Title = '进行中(1)';
                        break;
                    case 3 :
                        this.tab1Title = '已结束(1)';
                        break;
                    default:
                        break;
                }
                this.menu_choose = i;
                this.menu = -1;
            },
            menu2Choose(i){
                switch (i) {
                    case 0 :
                        this.tab2Title = '待审核(4)';
                        break;
                    case 1 :
                        this.tab2Title = '任务新建(1)';
                        break;
                    case 2 :
                        this.tab2Title = '任务中止(1)';
                        break;
                    case 3 :
                        this.tab2Title = '任务变更(1)';
                        break;
                    case 4 :
                        this.tab2Title = '名单补录(1)';
                        break;
                    default:
                        break;
                }
                this.menu2_choose = i;
                this.menu = -1;
            },
            onTabClick(index) {
                console.log(index+'tabclick')
                this.active = index;
                sessionStorage.setItem("myActivityTabActive",index)
            },
            onTabClick2(index) {
                console.log(index+'tabclick')
                this.active2 = index;
                sessionStorage.setItem("myActivityTabActive2",index)
            },
            timePickerStatue(i) {
                this.time_Picker_Statue = i;
            },
            onClickLeft() {
                this.$router.go(-1);
                sessionStorage.setItem("myActivityTabActive",'已发布');
                sessionStorage.setItem("myActivityTabActive2",'已发布')
            },
            seleteTime(i) {
                this.time_choose = i;
            },
            goPage (url,param){
                this.$router.push({name:url,params:param});
            },
            openMenu (i){
                if (i== 0 && (this.active=='已发布' || this.active2=='已发布')) {
                    this.menu = i;
                }
                if (i== 1 && (this.active=='待审核' || this.active2=='待审核')) {
                    this.menu = i;
                }
            },
            closeMenu (){
                this.menu = -1;
            },
            open_fliter() {
                if(this.type !== 2) {
                    if (this.menu == 9) {
                        this.menu = -1;
                    } else {
                        this.menu = 9
                    }
                } else {
                    this.menu = -1;
                }


            },
            clearAll() {
                this.timeValue1 = '';
                this.timeValue2 = '';
                this.time_choose = 0;
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
            timeFormat(time) { // 时间格式化 2019-09-08
                let year = time.getFullYear();
                let month = time.getMonth() + 1;
                let day = time.getDate();
                if (this.type == 2) {
                    return year + '年' + month + '月' + day +'日'
                }
                return year + '/' + month + '/' + day
            },
            openOverlay : function(){
                this.show = true;
                this.show1 = true;
            },
            closeOverlay : function(){
                this.show = false;
                this.show1 = false;
            },
            openSecendOverlay (e){
                this.show2 = true;
                this.show1 = false;
                this.openOverlay_title = e.target.innerHTML
            },
            gobackOverlay : function(){
                this.show = true;
                this.show1 = true;
                this.show2 = false;
            },
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
			changeType:function(index){
				this.type = index
				var that = this;
				setTimeout(function(){
					if(that.type == 2){
						that.createChart();
					}
				},100)
			},
			chooseDate (){
				this.date_picker = true;
			},
			cancel_choose:function(){
				this.date_picker = false;
                this.time_Picker_Statue = 0;
			},
			sure:function(){
				this.date_picker = false;
                this.time_Picker_Statue = 0;
			},
            sort:function(type){


            },

        },

        //计算属性
        computed: {

        },

        //引入组件
        components: {
            NavBar
        }


    }
</script>

<style lang="scss" scoped>
    .menu1_open{
        height: 18px;
        width: 18px;
        position: absolute;
        left: 25%;
        top:14px;
        z-index: 100;
    }
    .width_half{
        width: 50%;
    }

    .tabs2_menu1_open{
        height: 18px;
        width: 18px;
        position: absolute;
        left: 35%;
        top:14px;
        z-index: 100;
    }
    .menu2_open{
        left: 60%;
    }
    .tabs2_menu2_open{
        left: 85%;
    }
    .menu1_choose_box_text{
        line-height: 34px;
        color: #999999;
        font-size: 16px;
        margin-block-start:0;
        margin-block-end:0;
    }
    .menu1_choose_box{
        width: 33%;
        text-align: center;
        background-color: white;
    }
    .fliter_box{
        padding: 0 8px;
        position: relative;
        top:-40px;
        z-index: 120;
        background-color: white;
    }
    .relative{
        position: relative;
    }
    .total_time{
        border: #999999 1px solid;
        border-radius: 2px;
        padding: 0;
        margin: auto 4px;
        text-align: center;
    }
    .datetime_picker_text{
        font-size: 12px;
        padding: 0;
        margin: 0;
        line-height: 24px;
    }
    .selete_time{
        border: #999999 1px solid;
        border-radius: 2px;
        padding: 0;
        margin: auto 4px;
        text-align: center;
        height: 24px;
    }
    .orange_fliter_box{
        background-color: #f76037;
        height: 34px;
        text-align: center;
    }
    .blue_fliter_box{
        background-color: #4c62e7;
        height: 34px;
        text-align: center;
    }
    .fliter_row{
        height: 24px;
    }
    .position_center{
        position: relative;
        left: 33%;
    }
    .img_calendar{
        position: relative;
        top:2px;
        height: 18px;
        width: 18px;
    }
    .bg_fliter_box_text{
        color: white;
        font-size: 14px;
        padding: 0;
        margin: 0;
        line-height: 34px;
    }
    .null_box{
         height: 14px;
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
    .blue{
        color: #4c62e7;
    }
    .border_blue{
        border-color: #4c62e7;
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
    }
    .top_bar_box_text_right{
        font-size: 14px;
        line-height: 30px;
        color: rgb(76,98,231);
        margin-block-start:0;
        margin-block-end:0;
    }
	.top_bar_box_col.active .top_bar_box_text_right, .top_bar_box_col.active .top_bar_box_text_left{
		background-color: rgb(76,98,231);
		color: #fff;
	}

    .img_fliter{
        position: absolute;
        top: 14px;
        right:40px ;
        height: 18px;
        width: 18px;
        z-index: 100;
    }
    .img_search{
        position: absolute;
        top: 14px;
        right:12px ;
        height: 18px;
        width: 18px;
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
    .popContainer{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0,0,0,0.3);
        z-index: 100;
    }
    .choose_box{
        height: 281px;
        position: absolute;
        bottom: 0;
        background-color: white;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        width: 100%;
    }
    .choose_box_text{
        line-height: 40px;
         color: #999999;
         font-size: 16px;
         margin-block-start:0;
         margin-block-end:0;
     }
    .blue{
        color: #4c62e7;
    }
    .choose_box_list{
        text-align: center;
        height: 40px;
        margin: 0;
        padding: 0;
    }
    .list_test_min{
        line-height: 30px;
        font-size: 12px;
        margin-block-start:0;
        margin-block-end:0;
        color: rgb(102,102,102);
    }
    .list_row{
        padding: 0 12px ;margin:0;
    }
    .list_test_min_head{
        line-height: 30px;
        font-size: 14px;
        margin-block-start:0;
        margin-block-end:0;
        color: rgb(51,51,51);
    }
    .list_row_top{
        padding: 0px 12px;
    }
    .img_erweima{
        height: 120px;
        width: 120px;
    }
    .img_close{
        height: 20px;
        width: 20px;
        position: absolute;
        right: 10px;
        top: 10px;
    }
    .list_right_text{
        margin-block-start:0;
        margin-block-end:0;
        font-size: 14px;
        line-height: 34px;
        color: rgb(51,51,51);
    }
    // scoped 表示私有样式
    .content{
        padding: 0px ;
        background-color: rgb(238,238,238);
        justify-content: center;
        align-items: center;
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
    }
    .text-left {
        text-align: left;
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
		margin: 4px;;
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
