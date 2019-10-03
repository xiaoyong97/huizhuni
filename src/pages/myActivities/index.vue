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

        <van-nav-bar :title="title"  >

        </van-nav-bar>
         <div class="top_bar_main_box" >
             <van-row class="top_bar_box" style="">
                 <van-col class="top_bar_box_col_left" span="12"><p class="top_bar_box_text_left" >我的活动</p></van-col>
                 <van-col class="" span="12"><p class="top_bar_box_text_right" >报表查询</p></van-col>
             </van-row>
         </div>

        <img src="../../assets/images/38/filter1@2x.png" class="img_fliter" @click="open_fliter">
         <img src="../../assets/images/38/searchfor@2x.png" class="img_search" >
         <img src="../../assets/images/38/return@2x.png" class="img_return"  @click="onClickLeft">
<!--         下拉菜单-->
         <div class='menu_popContainer'  v-show="menu!==0">
             <div  class="menu1_choose_box" v-show="menu==1">
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
             <div  class="menu1_choose_box position_center" v-show="menu==2">
                 <van-row class="choose_box_list" @click="menuChoose(0)">
                     <p class="menu1_choose_box_text " :class="menu_choose == 0 ? 'blue' : '' ">已审核</p>
                 </van-row>
                 <van-row class="choose_box_list" @click="menuChoose(1)">
                     <p class="menu1_choose_box_text " :class="menu_choose == 1 ? 'blue' : '' ">未审核</p>
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
            <van-tabs color="#4c62e7" line-width="33%" line-height=3 title-active-color="#4c62e7" v-show="identity=='management'" class="relative">
<!--                已发布下拉图标-->
                <img src="../../assets/images/24/Pulldownselect@2x.png" class="menu1_open" v-show="menu!==1" @click="openMenu(1)">
                <img src="../../assets/images/24/Pullupselect@12x.png" class="menu1_open" v-show="menu==1" @click="closeMenu">
<!--                待审核下拉图标-->
                <img src="../../assets/images/24/Pulldownselect@2x.png" class="menu1_open menu2_open" v-show="menu!==2" @click="openMenu(2)">
                <img src="../../assets/images/24/Pullupselect@12x.png" class="menu1_open menu2_open" v-show="menu==2" @click="closeMenu">
                <van-tab title="已发布(3)" color="#4c62e7">
                    <div class="card_div" v-show="menu_choose==2|menu_choose==0">
                        <div @click="goactivityDetailsIng" class="card-bottom-line">
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
                        <div @click="goactivityDetailsOver" class="card-bottom-line">
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
                <van-tab title="待审核(4)" color="#4c62e7">
                    <!--                    任务新建-->
                    <div class="card_div_examine" style="">
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
                    <div class="card_div_examine" style="">
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
                    <div class="card_div_examine" style="">
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
                    <div class="card_div_examine" style="">
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
				<van-tab title="已拒绝(1)"  color="#4c62e7">
                    <div class="card_div" >
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
            <van-tabs color="#4c62e7" line-width="50%" line-height=3 title-active-color="#4c62e7" v-show="identity=='handle'">
                <van-tab title="已发布(3)" color="#4c62e7">
                    <div class="card_div" v-show="menu_choose==2|menu_choose==0" style="" >
                        <div @click="goactivityDetailsIng" class="card-bottom-line">
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
                    <div class="card_div" v-show="menu_choose==3|menu_choose==0" style="" @click="goactivityDetailsOver">
                        <div @click="goactivityDetailsOver" class="card-bottom-line">
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
                <van-tab title="待审核(4)" color="#4c62e7">
                    <!--                    任务新建-->
                    <div class="card_div_examine" style="">
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
                    <div class="card_div_examine" style="">
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
                    <div class="card_div_examine" style="">
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
                    <div class="card_div_examine" style="">
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
        </div>

    </div>
</template>

<script>

    import NavBar from '@/components/navBar'
    import Vue from 'vue';
    import { Tab, Tabs ,SubmitBar, Dialog} from 'vant';

    Vue.use(Tab).use(Tabs).use(SubmitBar).use(Dialog);
    export default {

        data() {
            return {
                title : '',
                checked: true,
                show: false,
                show1:false,
                show2:false,
                openOverlay_title:"",
                timer: '',
                menu:9,  // 1:已发布，2.待审核，3.已拒绝,9筛选
                menu_choose :0,
                time_choose :0,
                fliter:false,
                currentDate1: new Date(),//1:开始日期  2 结束日期
                currentDate2: new Date(),
                timeValue1: '',
                timeValue2: '',
                endData:'',
                minDate: new Date(2018, 10, 1),
                time_Picker_Statue:0, //0：不显示 1：显示开始日期 2：显示结束日期
            }
        },


        //数据预加载
        created (){
            this.menu = 0;
        },



        //声明方法
        methods : {
            menuChoose(i) {
                this.menu_choose = i;
                this.menu = 0;
            },
            timePickerStatue(i){

              this.time_Picker_Statue = i;
            },
            seleteTime(i) {
                this.time_choose = i;
            },
            goPage (url){
                this.$router.push({name:url});
            },
            onClickLeft() {
                this.$router.go(-1);
            },
            goactivityDetailsIng : function(){
                this.$router.push('./activityDetailsIng');
            },
            openMenu (i){
                this.menu = i;
            },
            closeMenu (){
                this.menu = 0;
            },
            goactivityDetailsOver : function(){
                this.$router.push('./activityDetailsOver');
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
            open_fliter() {
                if (this.menu == 9) {
                    this.menu = 0;
                } else {
                    this.menu = 9;
                }
            },
            clearAll() {
              this.timeValue1 = '';
                this.timeValue2 = '';
                this.time_choose = 0;
            },
            confirmBtn(i) { // 确定按钮
                if (i==1) {
                    this.timeValue1 = this.timeFormat(this.currentDate1);
                } else {
                    this.timeValue2 = this.timeFormat(this.currentDate2);
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
                return year + '/' + month + '/' + day
            },
        },
        //网页加载完成
        mounted (){
            this.timeValue1 = this.timeFormat(this.currentDate1);
        },
        //计算属性
        computed: {
            identity:function () {
                var value = sessionStorage.getItem('identity')
                if (value) {
                    return value
                } else {
                    return "management";
                }

            },
        },

        //引入组件
        components: {
            NavBar
        }


    }
</script>

<style lang="scss" scoped>
    .top_bar_main_box{
        width: 100%;
        position: absolute;
        top: 8px;
        justify-content: center;align-items: center;text-align: center;
        z-index: 99;
    }
    .menu1_open{
        height: 18px;
        width: 18px;
        position: absolute;
        left: 25%;
        top:12px;
        z-index: 100;
    }
    .menu2_open{
        left: 58%;
    }
    .menu1_choose_box_text{
        line-height: 34px;
        color: #999999;
        font-size: 16px;
        margin-block-start:0;
        margin-block-end:0;
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
        background-color: rgb(76,98,231);
        border-bottom-left-radius:7px;
        border-top-left-radius: 7px;
    }
    .top_bar_box_text_left{
        font-size: 14px;
        line-height: 30px;
        color: white;
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
    .top_bar_box_text_right{
        font-size: 14px;
        line-height: 30px;
        color: rgb(76,98,231);
        margin-block-start:0;
        margin-block-end:0;
    }
    .img_fliter{
        position: absolute;
        top: 14px;
        right:40px ;
        height: 18px;
        width: 18px;
        z-index: 100;
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
    .null_box{
        height: 14px;
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
    .menu_popContainer{
        position: fixed;
        top: 90px;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0,0,0,0.3);
        z-index: 101;
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
    .blue{
        color: #4c62e7;
    }
    .border_blue{
        border-color: #4c62e7;
    }
</style>
