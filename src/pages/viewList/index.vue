<template>
    <div class="main_box">
<!--        遮罩层-->

        <!--头部导航-->

        <van-nav-bar :title="title" left-text="返回" left-arrow @click-left="onClickLeft">

        </van-nav-bar>

        <div class="content">
            <van-tabs color="#4c62e7" line-width="50%" line-height=3>
                <van-tab title="报名名单(30)" color="#4c62e7">
                    <div class="card_div" style="" >
                            <van-row style="padding: 15px 12px 0 ">
                                <van-col class="" span="12">
                                    <p class="card_list1_test_left" style="font-weight: bold;font-size: 15px">1.张三三  &thinsp; 女</p>
                                    <p class="card_list1_test_left" style="">广州新野模具有限公司</p>
                                </van-col>
                                <van-col class="" span="12" style="text-align: left">
                                    <p class="card_list1_test_right">12345678901</p>
                                    <p class="card_list1_test_right" style="font-weight: bold;font-size: 14px">客户经理</p>
                                </van-col>
                            </van-row>
                        <div v-show="!open">
                            <div style="height: 4px"></div>
                            <p class="van_col_box_title" style="">需要接站</p>
                            <van-row class="van_row_box" style="">
                                <van-col class="van_col_box" span="12" style="border-top-left-radius: 8px">
                                    <p class="van_col_box_text" >车次/航班</p>
                                </van-col>
                                <van-col class="van_col_box" span="12" style="border-top-right-radius: 8px">
                                    <p class="van_col_box_text">到达日期</p>
                                </van-col>
                            </van-row>
                            <van-row style="" class="van_row_box">
                                <van-col class="van_col_box" span="12" style="border-bottom-left-radius: 8px">
                                    <p class="van_col_box_text" >抵达时间</p>
                                </van-col>
                                <van-col class="van_col_box" span="12" style="border-bottom-right-radius: 8px">
                                    <p class="van_col_box_text">到达地点</p>
                                </van-col>
                            </van-row>
                            <div style="height: 14px"></div>
                            <p class="van_col_box_title" style="">需要送站</p>
                            <van-row class="van_row_box" style="">
                                <van-col class="van_col_box" span="12" style="border-top-left-radius: 8px">
                                    <p class="van_col_box_text" >车次/航班</p>
                                </van-col>
                                <van-col class="van_col_box" span="12" style="border-top-right-radius: 8px">
                                    <p class="van_col_box_text">出发日期</p>
                                </van-col>
                            </van-row>
                            <van-row style="" class="van_row_box">
                                <van-col class="van_col_box" span="12" style="border-bottom-left-radius: 8px">
                                    <p class="van_col_box_text" >出发时间</p>
                                </van-col>
                                <van-col class="van_col_box" span="12" style="border-bottom-right-radius: 8px">
                                    <p class="van_col_box_text">出发地点</p>
                                </van-col>
                            </van-row>
                            <div style="height: 24px" v-show="!open"></div>
                        </div>
                        <div style="height: 15px" v-show="open"></div>
                        <img src="../../assets/images/24/Collapse@2x.png" class="img_open" v-show="!open" @click="changeOpen">
                        <img src="../../assets/images/24/Pulldownselect@2x.png" class="img_open" v-show="open" @click="changeOpen">
                    </div>
                    <div class="card_div" style="" >
                        <van-row style="padding: 15px 12px 0 ">
                            <van-col class="" span="12">
                                <p class="card_list1_test_left" style="font-weight: bold;font-size: 15px">1.张三三  &thinsp; 女</p>
                                <p class="card_list1_test_left" style="">广州新野模具有限公司</p>
                            </van-col>
                            <van-col class="" span="12" style="text-align: left">
                                <p class="card_list1_test_right">12345678901</p>
                                <p class="card_list1_test_right">客户经理</p>
                            </van-col>
                        </van-row>
                        <div v-show="!open">
                            <div style="height: 4px"></div>
                            <p class="van_col_box_title" style="">需要接站</p>
                            <van-row class="van_row_box" style="">
                                <van-col class="van_col_box" span="12" style="border-top-left-radius: 8px">
                                    <p class="van_col_box_text" >车次/航班</p>
                                </van-col>
                                <van-col class="van_col_box" span="12" style="border-top-right-radius: 8px">
                                    <p class="van_col_box_text">到达日期</p>
                                </van-col>
                            </van-row>
                            <van-row style="" class="van_row_box">
                                <van-col class="van_col_box" span="12" style="border-bottom-left-radius: 8px">
                                    <p class="van_col_box_text" >抵达时间</p>
                                </van-col>
                                <van-col class="van_col_box" span="12" style="border-bottom-right-radius: 8px">
                                    <p class="van_col_box_text">到达地点</p>
                                </van-col>
                            </van-row>
                            <div style="height: 14px"></div>
                            <p class="van_col_box_title" style="">需要送站</p>
                            <van-row class="van_row_box" style="">
                                <van-col class="van_col_box" span="12" style="border-top-left-radius: 8px">
                                    <p class="van_col_box_text" >车次/航班</p>
                                </van-col>
                                <van-col class="van_col_box" span="12" style="border-top-right-radius: 8px">
                                    <p class="van_col_box_text">出发日期</p>
                                </van-col>
                            </van-row>
                            <van-row style="" class="van_row_box">
                                <van-col class="van_col_box" span="12" style="border-bottom-left-radius: 8px">
                                    <p class="van_col_box_text" >出发时间</p>
                                </van-col>
                                <van-col class="van_col_box" span="12" style="border-bottom-right-radius: 8px">
                                    <p class="van_col_box_text">出发地点</p>
                                </van-col>
                            </van-row>
                            <div style="height: 24px" v-show="!open"></div>
                        </div>
                        <div style="height: 15px" v-show="open"></div>
                        <img src="../../assets/images/24/Collapse@2x.png" class="img_open" v-show="!open" @click="changeOpen">
                        <img src="../../assets/images/24/Pulldownselect@2x.png" class="img_open" v-show="open" @click="changeOpen">
                    </div>
                    <div class="card_div" style="" >
                        <van-row style="padding: 15px 12px 0 ">
                            <van-col class="" span="12">
                                <p class="card_list1_test_left" style="font-weight: bold;font-size: 15px">1.张三三  &thinsp; 女</p>
                                <p class="card_list1_test_left" style="">广州新野模具有限公司</p>
                            </van-col>
                            <van-col class="" span="12" style="text-align: left">
                                <p class="card_list1_test_right">12345678901</p>
                                <p class="card_list1_test_right">客户经理</p>
                            </van-col>
                        </van-row>
                        <div v-show="!open">
                            <div style="height: 4px"></div>
                            <p class="van_col_box_title" style="">需要接站</p>
                            <van-row class="van_row_box" style="">
                                <van-col class="van_col_box" span="12" style="border-top-left-radius: 8px">
                                    <p class="van_col_box_text" >车次/航班</p>
                                </van-col>
                                <van-col class="van_col_box" span="12" style="border-top-right-radius: 8px">
                                    <p class="van_col_box_text">到达日期</p>
                                </van-col>
                            </van-row>
                            <van-row style="" class="van_row_box">
                                <van-col class="van_col_box" span="12" style="border-bottom-left-radius: 8px">
                                    <p class="van_col_box_text" >抵达时间</p>
                                </van-col>
                                <van-col class="van_col_box" span="12" style="border-bottom-right-radius: 8px">
                                    <p class="van_col_box_text">到达地点</p>
                                </van-col>
                            </van-row>
                            <div style="height: 14px"></div>
                            <p class="van_col_box_title" style="">需要送站</p>
                            <van-row class="van_row_box" style="">
                                <van-col class="van_col_box" span="12" style="border-top-left-radius: 8px">
                                    <p class="van_col_box_text" >车次/航班</p>
                                </van-col>
                                <van-col class="van_col_box" span="12" style="border-top-right-radius: 8px">
                                    <p class="van_col_box_text">出发日期</p>
                                </van-col>
                            </van-row>
                            <van-row style="" class="van_row_box">
                                <van-col class="van_col_box" span="12" style="border-bottom-left-radius: 8px">
                                    <p class="van_col_box_text" >出发时间</p>
                                </van-col>
                                <van-col class="van_col_box" span="12" style="border-bottom-right-radius: 8px">
                                    <p class="van_col_box_text">出发地点</p>
                                </van-col>
                            </van-row>
                            <div style="height: 24px" v-show="!open"></div>
                        </div>
                        <div style="height: 15px" v-show="open"></div>
                        <img src="../../assets/images/24/Collapse@2x.png" class="img_open" v-show="!open" @click="changeOpen">
                        <img src="../../assets/images/24/Pulldownselect@2x.png" class="img_open" v-show="open" @click="changeOpen">
                    </div>
                    <div class="card_div" style="" >
                        <van-row style="padding: 15px 12px 0 ">
                            <van-col class="" span="12">
                                <p class="card_list1_test_left" style="font-weight: bold;font-size: 15px">1.张三三  &thinsp; 女</p>
                                <p class="card_list1_test_left" style="">广州新野模具有限公司</p>
                            </van-col>
                            <van-col class="" span="12" style="text-align: left">
                                <p class="card_list1_test_right">12345678901</p>
                                <p class="card_list1_test_right">客户经理</p>
                            </van-col>
                        </van-row>
                        <div v-show="!open">
                            <div style="height: 4px"></div>
                            <p class="van_col_box_title" style="">需要接站</p>
                            <van-row class="van_row_box" style="">
                                <van-col class="van_col_box" span="12" style="border-top-left-radius: 8px">
                                    <p class="van_col_box_text" >车次/航班</p>
                                </van-col>
                                <van-col class="van_col_box" span="12" style="border-top-right-radius: 8px">
                                    <p class="van_col_box_text">到达日期</p>
                                </van-col>
                            </van-row>
                            <van-row style="" class="van_row_box">
                                <van-col class="van_col_box" span="12" style="border-bottom-left-radius: 8px">
                                    <p class="van_col_box_text" >抵达时间</p>
                                </van-col>
                                <van-col class="van_col_box" span="12" style="border-bottom-right-radius: 8px">
                                    <p class="van_col_box_text">到达地点</p>
                                </van-col>
                            </van-row>
                            <div style="height: 14px"></div>
                            <p class="van_col_box_title" style="">需要送站</p>
                            <van-row class="van_row_box" style="">
                                <van-col class="van_col_box" span="12" style="border-top-left-radius: 8px">
                                    <p class="van_col_box_text" >车次/航班</p>
                                </van-col>
                                <van-col class="van_col_box" span="12" style="border-top-right-radius: 8px">
                                    <p class="van_col_box_text">出发日期</p>
                                </van-col>
                            </van-row>
                            <van-row style="" class="van_row_box">
                                <van-col class="van_col_box" span="12" style="border-bottom-left-radius: 8px">
                                    <p class="van_col_box_text" >出发时间</p>
                                </van-col>
                                <van-col class="van_col_box" span="12" style="border-bottom-right-radius: 8px">
                                    <p class="van_col_box_text">出发地点</p>
                                </van-col>
                            </van-row>
                            <div style="height: 24px" v-show="!open"></div>
                        </div>
                        <div style="height: 15px" v-show="open"></div>
                        <img src="../../assets/images/24/Collapse@2x.png" class="img_open" v-show="!open" @click="changeOpen">
                        <img src="../../assets/images/24/Pulldownselect@2x.png" class="img_open" v-show="open" @click="changeOpen">
                    </div>
                    <div class="card_div" style="" >
                        <van-row style="padding: 15px 12px 0 ">
                            <van-col class="" span="12">
                                <p class="card_list1_test_left" style="font-weight: bold;font-size: 15px">1.张三三  &thinsp; 女</p>
                                <p class="card_list1_test_left" style="">广州新野模具有限公司</p>
                            </van-col>
                            <van-col class="" span="12" style="text-align: left">
                                <p class="card_list1_test_right">12345678901</p>
                                <p class="card_list1_test_right">客户经理</p>
                            </van-col>
                        </van-row>
                        <div v-show="!open">
                            <div style="height: 4px"></div>
                            <p class="van_col_box_title" style="">需要接站</p>
                            <van-row class="van_row_box" style="">
                                <van-col class="van_col_box" span="12" style="border-top-left-radius: 8px">
                                    <p class="van_col_box_text" >车次/航班</p>
                                </van-col>
                                <van-col class="van_col_box" span="12" style="border-top-right-radius: 8px">
                                    <p class="van_col_box_text">到达日期</p>
                                </van-col>
                            </van-row>
                            <van-row style="" class="van_row_box">
                                <van-col class="van_col_box" span="12" style="border-bottom-left-radius: 8px">
                                    <p class="van_col_box_text" >抵达时间</p>
                                </van-col>
                                <van-col class="van_col_box" span="12" style="border-bottom-right-radius: 8px">
                                    <p class="van_col_box_text">到达地点</p>
                                </van-col>
                            </van-row>
                            <div style="height: 14px"></div>
                            <p class="van_col_box_title" style="">需要送站</p>
                            <van-row class="van_row_box" style="">
                                <van-col class="van_col_box" span="12" style="border-top-left-radius: 8px">
                                    <p class="van_col_box_text" >车次/航班</p>
                                </van-col>
                                <van-col class="van_col_box" span="12" style="border-top-right-radius: 8px">
                                    <p class="van_col_box_text">出发日期</p>
                                </van-col>
                            </van-row>
                            <van-row style="" class="van_row_box">
                                <van-col class="van_col_box" span="12" style="border-bottom-left-radius: 8px">
                                    <p class="van_col_box_text" >出发时间</p>
                                </van-col>
                                <van-col class="van_col_box" span="12" style="border-bottom-right-radius: 8px">
                                    <p class="van_col_box_text">出发地点</p>
                                </van-col>
                            </van-row>
                            <div style="height: 24px" v-show="!open"></div>
                        </div>
                        <div style="height: 15px" v-show="open"></div>
                        <img src="../../assets/images/24/Collapse@2x.png" class="img_open" v-show="!open" @click="changeOpen">
                        <img src="../../assets/images/24/Pulldownselect@2x.png" class="img_open" v-show="open" @click="changeOpen">
                    </div>
                    <div class="card_div" style="" >
                        <van-row style="padding: 15px 12px 0 ">
                            <van-col class="" span="12">
                                <p class="card_list1_test_left" style="font-weight: bold;font-size: 15px">1.张三三  &thinsp; 女</p>
                                <p class="card_list1_test_left" style="">广州新野模具有限公司</p>
                            </van-col>
                            <van-col class="" span="12" style="text-align: left">
                                <p class="card_list1_test_right">12345678901</p>
                                <p class="card_list1_test_right">客户经理</p>
                            </van-col>
                        </van-row>
                        <div v-show="!open">
                            <div style="height: 4px"></div>
                            <p class="van_col_box_title" style="">需要接站</p>
                            <van-row class="van_row_box" style="">
                                <van-col class="van_col_box" span="12" style="border-top-left-radius: 8px">
                                    <p class="van_col_box_text" >车次/航班</p>
                                </van-col>
                                <van-col class="van_col_box" span="12" style="border-top-right-radius: 8px">
                                    <p class="van_col_box_text">到达日期</p>
                                </van-col>
                            </van-row>
                            <van-row style="" class="van_row_box">
                                <van-col class="van_col_box" span="12" style="border-bottom-left-radius: 8px">
                                    <p class="van_col_box_text" >抵达时间</p>
                                </van-col>
                                <van-col class="van_col_box" span="12" style="border-bottom-right-radius: 8px">
                                    <p class="van_col_box_text">到达地点</p>
                                </van-col>
                            </van-row>
                            <div style="height: 14px"></div>
                            <p class="van_col_box_title" style="">需要送站</p>
                            <van-row class="van_row_box" style="">
                                <van-col class="van_col_box" span="12" style="border-top-left-radius: 8px">
                                    <p class="van_col_box_text" >车次/航班</p>
                                </van-col>
                                <van-col class="van_col_box" span="12" style="border-top-right-radius: 8px">
                                    <p class="van_col_box_text">出发日期</p>
                                </van-col>
                            </van-row>
                            <van-row style="" class="van_row_box">
                                <van-col class="van_col_box" span="12" style="border-bottom-left-radius: 8px">
                                    <p class="van_col_box_text" >出发时间</p>
                                </van-col>
                                <van-col class="van_col_box" span="12" style="border-bottom-right-radius: 8px">
                                    <p class="van_col_box_text">出发地点</p>
                                </van-col>
                            </van-row>
                            <div style="height: 24px" v-show="!open"></div>
                        </div>
                        <div style="height: 15px" v-show="open"></div>
                        <img src="../../assets/images/24/Collapse@2x.png" class="img_open" v-show="!open" @click="changeOpen">
                        <img src="../../assets/images/24/Pulldownselect@2x.png" class="img_open" v-show="open" @click="changeOpen">
                    </div>
                    <div class="card_div" style="" >
                        <van-row style="padding: 15px 12px 0 ">
                            <van-col class="" span="12">
                                <p class="card_list1_test_left" style="font-weight: bold;font-size: 15px">1.张三三  &thinsp; 女</p>
                                <p class="card_list1_test_left" style="">广州新野模具有限公司</p>
                            </van-col>
                            <van-col class="" span="12" style="text-align: left">
                                <p class="card_list1_test_right">12345678901</p>
                                <p class="card_list1_test_right">客户经理</p>
                            </van-col>
                        </van-row>
                        <div v-show="!open">
                            <div style="height: 4px"></div>
                            <p class="van_col_box_title" style="">需要接站</p>
                            <van-row class="van_row_box" style="">
                                <van-col class="van_col_box" span="12" style="border-top-left-radius: 8px">
                                    <p class="van_col_box_text" >车次/航班</p>
                                </van-col>
                                <van-col class="van_col_box" span="12" style="border-top-right-radius: 8px">
                                    <p class="van_col_box_text">到达日期</p>
                                </van-col>
                            </van-row>
                            <van-row style="" class="van_row_box">
                                <van-col class="van_col_box" span="12" style="border-bottom-left-radius: 8px">
                                    <p class="van_col_box_text" >抵达时间</p>
                                </van-col>
                                <van-col class="van_col_box" span="12" style="border-bottom-right-radius: 8px">
                                    <p class="van_col_box_text">到达地点</p>
                                </van-col>
                            </van-row>
                            <div style="height: 14px"></div>
                            <p class="van_col_box_title" style="">需要送站</p>
                            <van-row class="van_row_box" style="">
                                <van-col class="van_col_box" span="12" style="border-top-left-radius: 8px">
                                    <p class="van_col_box_text" >车次/航班</p>
                                </van-col>
                                <van-col class="van_col_box" span="12" style="border-top-right-radius: 8px">
                                    <p class="van_col_box_text">出发日期</p>
                                </van-col>
                            </van-row>
                            <van-row style="" class="van_row_box">
                                <van-col class="van_col_box" span="12" style="border-bottom-left-radius: 8px">
                                    <p class="van_col_box_text" >出发时间</p>
                                </van-col>
                                <van-col class="van_col_box" span="12" style="border-bottom-right-radius: 8px">
                                    <p class="van_col_box_text">出发地点</p>
                                </van-col>
                            </van-row>
                            <div style="height: 24px" v-show="!open"></div>
                        </div>
                        <div style="height: 15px" v-show="open"></div>
                        <img src="../../assets/images/24/Collapse@2x.png" class="img_open" v-show="!open" @click="changeOpen">
                        <img src="../../assets/images/24/Pulldownselect@2x.png" class="img_open" v-show="open" @click="changeOpen">
                    </div>

<!--                    撑开div-->
                    <div style="height: 8px"></div>
                </van-tab>
                <van-tab title="签到名单" color="#4c62e7">
                    <div class="card_div" style="">
                        <van-row style="padding: 12px 12px 0">
                            <van-col class="" span="12"><p class="card_list1_test_left" >支付系统及形式创新001</p></van-col>
                            <van-col class="" span="12" style="text-align: right"><p class="card_list1_test_right" >签到总人数:<span style="color: #4c62e7">&thinsp;&thinsp;21</span>人</p></van-col>
                        </van-row>
                        <van-row style="padding: 0px 12px 0px;">
                            <van-col class="" span="6"><p class="card_list2_test" >课程名称</p></van-col>
                            <van-col class="" span="6"><p class="card_list2_test" >信用快贷</p></van-col>
                            <van-col class="" span="12" style="text-align: right"></van-col>
                        </van-row>
                        <van-row style="padding: 0px 12px 4px;border-bottom: #999999 0.01em solid">
                            <van-col class="icon_box" span="2"><img src="../../assets/image/my/time@2x.png" class="img_location" ></van-col>
                            <van-col class="" span="10"><p class="card_list2_test" >09:00-11:00</p></van-col>
                            <van-col class="icon_box" span="2" style="justify-content: center;align-items: center;"><img src="../../assets/image/my/address@2x.png" class="img_location" ></van-col>
                            <van-col class="" span="10" style="text-align: left"><p class="card_list2_test" >省分行营业部901</p></van-col>
                        </van-row>

                        <van-row style="text-align: center;padding: 8px 12px 8PX" type="flex" justify="center" @click="go_attendanceList">
                                <van-col class="icon_box" span=""><img src="../../assets/image/my/List@2x.png" class="img_location" ></van-col>
                                <van-col class="" span=""><p class="card_list2_test" style="padding-left: 8px">查看签到名单</p></van-col>
                        </van-row>
                    </div>
                    <div class="card_div" style="">
                        <van-row style="padding: 12px 12px 0">
                            <van-col class="" span="12"><p class="card_list1_test_left" >支付系统及形式创新001</p></van-col>
                            <van-col class="" span="12" style="text-align: right"><p class="card_list1_test_right" >签到总人数:<span style="color: #4c62e7">&thinsp;&thinsp;21</span>人</p></van-col>
                        </van-row>
                        <van-row style="padding: 0px 12px 0px;">
                            <van-col class="" span="6"><p class="card_list2_test" >课程名称</p></van-col>
                            <van-col class="" span="6"><p class="card_list2_test" >信用快贷</p></van-col>
                            <van-col class="" span="12" style="text-align: right"></van-col>
                        </van-row>
                        <van-row style="padding: 0px 12px 4px;border-bottom: #999999 0.01em solid">
                            <van-col class="icon_box" span="2"><img src="../../assets/image/my/time@2x.png" class="img_location" ></van-col>
                            <van-col class="" span="10"><p class="card_list2_test" >15:00-17:00</p></van-col>
                            <van-col class="icon_box" span="2" style="justify-content: center;align-items: center;"><img src="../../assets/image/my/address@2x.png" class="img_location" ></van-col>
                            <van-col class="" span="10" style="text-align: left"><p class="card_list2_test" >省分行营业部901</p></van-col>
                        </van-row>

                        <van-row style="text-align: center;padding: 8px 12px 8PX" type="flex" justify="center" @click="go_attendanceList">
                                <van-col class="icon_box" span=""><img src="../../assets/image/my/List@2x.png" class="img_location" ></van-col>
                                <van-col class="" span="" style="text-align: left"><p class="card_list2_test" style="padding-left: 8px">查看签到名单</p></van-col>
                        </van-row>
                    </div>
<!--                    未开始-->

                    <div style="height: 8px"></div>
                </van-tab>





            </van-tabs>
        </div>

    </div>
</template>

<script>

    import NavBar from '@/components/navBar'
    import Vue from 'vue';
    import { Tab, Tabs ,SubmitBar, } from 'vant';

    Vue.use(Tab).use(Tabs).use(SubmitBar);
    export default {

        data() {
            return {
                title : '查看名单',
                checked: true,
                show: false,
                show1:false,
                show2:false,
                openOverlay_title:"",
                open:true,
            }
        },


        //数据预加载
        created : ()=>{
        },

        //网页加载完成
        mounted : ()=>{

        },

        //声明方法
        methods : {
            onClickLeft() {
                this.$router.go(-1);
            },
            gomyperformance : function(){
                this.$router.push('./myperformance');
            },
            goactivityDetailsNotBegin : function(){
                this.$router.push('./activityDetailsNotBegin');
            },
            go : function(){
                this.$router.push('/index5');
            },
            go_attendanceList() {
                this.$router.push('/attendanceList');
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
            changeOpen() {
                this.open=!this.open
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
    .van_col_box{
        background-color: rgb(250,250,250);
        border: rgb(220,220,220) solid 0.5px;
    }
    .van_col_box_text{
        padding: 6px 16px;
        font-size: 15px;
        margin-block-start:0;
        margin-block-end:0;
    }
    .van_row_box{
        margin: 0 12px;
    }



    .list_right_text{
        margin-block-start:0;
        margin-block-end:0;
        font-size: 14px;
        line-height: 34px;
        color: rgb(51,51,51);
    }
    .img_open{
        position: absolute;
        bottom: 2px;
        right: 12px;
        height: 20px;
        width: 20px;
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
        margin-block-start:0;
        margin-block-end:0;
        line-height: 30px;
    }
    .card_list1_test_right{
        color: #666666;
        font-size: 14px;
        margin-block-start:0;
        margin-block-end:0;
        line-height: 30px;
    }
    .card_list2_test{
        color: #666666;
        font-size: 14px;
        margin-block-start:0;
        margin-block-end:0;
        line-height: 30px;
    }
    .img_location{
        height: 18px;
        width: 18px;
    }
    .icon_box{
        margin-top: 6px;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
    .card_div{
        position: relative;
        width: auto;
        padding:0px;
        background-color: white;
        border-radius: 10px;
        margin: 8px 10px 0;
    }
</style>
