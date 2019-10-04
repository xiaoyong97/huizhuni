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
                 <van-col :class="type==1?'active':''" class="top_bar_box_col top_bar_box_col_left " span="12"><p class="top_bar_box_text_left" @click="changeType(1)">我的活动</p></van-col>
                 <van-col :class="type==2?'active':''" class="top_bar_box_col " span="12"><p class="top_bar_box_text_right" @click="changeType(2)">报表查询</p></van-col>
             </van-row>
         </div>

        <img src="../../assets/images/38/filter1@2x.png" class="img_fliter" >
         <img src="../../assets/images/38/searchfor@2x.png" class="img_search" >
         <img src="../../assets/images/38/return@2x.png" class="img_return"  @click="onClickLeft">
        <div class="content">
			
            <van-tabs v-show="type==1" color="#4c62e7" line-width="33%" line-height=3 title-active-color="#4c62e7">
                <van-tab title="已发布(3)" color="#4c62e7">
                    <div class="card_div" style="" >
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
                                <van-col class="" span="8" @click="goviewList">
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
                    <div class="card_div" style="" >
                        <div @click="goactivityDetailsNotBegin" class="card-bottom-line">
                            <van-row style="padding: 16px 12px 0" @click="goactivityDetailsNotBegin">
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
                            <van-col class="" span="8" @click="goviewList">
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
                    <div class="card_div" style="" @click="goactivityDetailsOver">
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
                            <van-col class="" span="8" @click="goviewList">
                                <van-col class="" span="2"><img src="../../assets/image/my/List@2x.png" class="img_location" ></van-col>
                                <van-col class="" span="20" style="text-align: center"><p class="card_list2_test" >查看名单</p></van-col>
                            </van-col>
                            <van-col class="" span="8">
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
				<van-tab title="已拒绝(1)" color="#4c62e7">
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
			<div class="query_container" v-show="type==2">
				<div >
					<div class="line_grey"></div>
					<div class="header_text">
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
					 
					 <van-row class="cell">
						<van-col class="cell-header" span="6">报告期</van-col>
						<van-col class="cell-content" span="16">
							<input type="text" v-model="date" readonly="" @click="chooseDate">
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
							  <img slot="button" class="calendar" src="../../assets/images/38/calendar@2x.png" alt="">
							 </van-field>
							<div class="zhi">至</div>
							  <van-field
							    v-model="end_date"
							    type="password" 
								  class="border"
							  > 
							   
							  <img  slot="button" class="calendar" src="../../assets/images/38/calendar2.png" alt="">
							  </van-field>
							</van-cell-group>
							<div class="btn-group">
								<button class="cancel-btn" @click="cancel_choose">取消</button> |
								<button class="btn-sure" @click="sure">确定</button>
							</div>
						</div>
						
						<van-datetime-picker
						  v-model="currentDate"
						  type="date"
						  :min-date="minDate"
						  class="datetime-picker"
						/>
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
	
				minDate: new Date(),
				maxDate: new Date(2019, 10, 1),
				currentDate: new Date(),
				date_show:true,
				end_date:'',
				start_date:'',
            }
        },


        //数据预加载
        created : ()=>{
        },

        //网页加载完成
        mounted (){
        	
        },

        //声明方法
        methods : {
            onClickLeft() {
                this.$router.go(-1);
            },
            gomyperformance : function(){
                this.$router.push('./myperformance');
            },
            goviewList : function(){
                this.$router.push('./viewList');
            },
            goactivityDetailsNotBegin : function(){
                this.$router.push('./activityDetailsNotBegin');
            },
            goactivityDetailsIng : function(){
                this.$router.push('./activityDetailsIng');
            },
            // go : function(){
            //     alert()
            //     this.$router.push('/index5');
            // },
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
			sort:function(type){
				
			},
			chooseDate:function(){
				this.date_picker = true;
			},
			cancel_choose:function(){
				this.date_picker = false;
			},
			sure:function(){
				this.date_picker = false;
			}
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
	.date_container{
		width:414px;
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
		
	}
	.btn-group .btn-sure{
		width: 47%;
		height: 44px;
		color: #4c62e7;
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
