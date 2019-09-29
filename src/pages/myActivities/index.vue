<template>
    <div class="main">
<!--        遮罩层-->
        <div class='popContainer' v-show="show" >

            <div  class="choose_box" v-show="show1">
                <van-row class="choose_box_list" style="border-bottom: solid #666666 1px;" type="flex" justify="end">
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

        <van-nav-bar :title="title" left-text="返回" left-arrow @click-left="onClickLeft">

        </van-nav-bar>

        <div class="content">
            <van-tabs color="#4c62e7" line-width="50%" line-height=3>
                <van-tab title="已发布(3)" color="#4c62e7">
                    <div class="card_div" style="" >
                        <div @click="goactivityDetailsIng">
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
                                <van-col class="" span="10" style="text-align: right" ><p class="card_list2_test" >报名<span style="color: #4c62e7">30</span>人签到<span style="color: #4c62e7">21</span>人</p></van-col>
                            </van-row>
                        </div>
                        <hr style="size: 1px;width: 100%;color: aliceblue;margin: 0 ;padding: 0"/>
                            <van-row style="text-align: center;padding: 8px 12px 0">
                                <van-col class="" span="8" @click="goviewList">
                                    <van-col class="" span="2"><img src="../../assets/image/my/List@2x.png" class="img_location" ></van-col>
                                    <van-col class="" span="20"><p class="card_list2_test" >查看名单</p></van-col>
                                </van-col>
                                <van-col class="" span="8" @click="openOverlay">
                                    <van-col class="" span="2"><img src="../../assets/image/my/QR code@2x.png" class="img_location" ></van-col>
                                    <van-col class="" span="20"><p class="card_list2_test" >签到二维码</p></van-col>
                                </van-col>
                                <van-col class="" span="8">
                                    <van-col class="" span="2"><img src="../../assets/image/my/View report@2x.png" class="img_location" ></van-col>
                                    <van-col class="" span="20"><p class="card_list2_test" >查看问卷</p></van-col>
                                </van-col>
                            </van-row>
                        </div>
                    <div class="card_div" style="" >
                        <div @click="goactivityDetailsNotBegin" >
                            <van-row style="padding: 16px 12px 0" @click="goactivityDetailsNotBegin">
                                <van-col class="" span="12"><p class="card_list1_test_left" >支付系統及形式创新</p></van-col>
                                <van-col class="" span="12" style="text-align: right"><p class="card_list1_test_right" style="color: #f76037">未開始...</p></van-col>
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
                        <hr style="size: 1px;width: 100%;color: aliceblue;margin: 0 ;padding: 0"/>
                        <van-row style="text-align: center;padding: 8px 12px 0" type="flex" justify="center">
                            <van-col class="" span="8">
                                <van-col class="" span="2"><img src="../../assets/image/my/List@2x.png" class="img_location" ></van-col>
                                <van-col class="" span="20" style="text-align: center"><p class="card_list2_test" >查看名单</p></van-col>
                            </van-col>
                            <van-col class="" span="8" @click="openOverlay">
                                <van-col class="" span="2"><img src="../../assets/image/my/QR code@2x.png" class="img_location" ></van-col>
                                <van-col class="" span="20" style="text-align: center"><p class="card_list2_test" >签到二维码</p></van-col>
                            </van-col>
                            <van-col class="" span="8">
                                <van-col class="" span="2"><img src="../../assets/image/my/View report@2x.png" class="img_location" ></van-col>
                                <van-col class="" span="20" style="text-align: center"><p class="card_list2_test" >查看问卷</p></van-col>
                            </van-col>
                        </van-row>
                    </div>
                    <div class="card_div" style="" @click="goactivityDetailsOver">
                        <div @click="goactivityDetailsOver" >
                            <van-row style="padding: 16px 12px 0" type="flex" justify="center">
                                <van-col class="" span="12"><p class="card_list1_test_left" >今朝会-创业沙龙第六期</p></van-col>
                                <van-col class="" span="12" style="text-align: right"><p class="card_list1_test_right" style="color: #999999">已結束...</p></van-col>
                            </van-row>
                            <van-row style="padding: 16px 12px 0">
                                <van-col class="" span="2" style="justify-content: center;align-items: center;"><img src="../../assets/image/my/address@2x.png" class="img_location" ></van-col>
                                <van-col class="" span="16" style="text-align: left"><p class="card_list2_test" >省分行营业部</p></van-col>
                            </van-row>
                            <van-row style="padding: 16px 12px 8px">
                                <van-col class="" span="2"><img src="../../assets/image/my/time@2x.png" class="img_location" ></van-col>
                                <van-col class="" span="12"><p class="card_list2_test" >2019.07.06-2019.08.08</p></van-col>
                                <van-col class="" span="10" style="text-align: right"><p class="card_list2_test" >报名<span style="color: #4c62e7">108</span>人签到<span style="color: #4c62e7">102</span>人</p></van-col>
                            </van-row>
                        </div>
                        <hr style="size: 1px;width: 100%;color: aliceblue;margin: 0 ;padding: 0"/>
                        <van-row style="text-align: center;padding: 8px 12px 0" type="flex" justify="center">
                            <van-col class="" span="8" @click="goviewList">
                                <van-col class="" span="2"><img src="../../assets/image/my/List@2x.png" class="img_location" ></van-col>
                                <van-col class="" span="20" style="text-align: center"><p class="card_list2_test" >查看名单</p></van-col>
                            </van-col>
<!--                            <van-col class="" span="8">-->
<!--                                <van-col class="" span="2"><img src="../../assets/image/my/QR code@2x.png" class="img_location" ></van-col>-->
<!--                                <van-col class="" span="20" style="text-align: center"><p class="card_list2_test" >签到二维码</p></van-col>-->
<!--                            </van-col>-->
                            <van-col class="" span="8">
                                <van-col class="" span="2"><img src="../../assets/image/my/View report@2x.png" class="img_location" ></van-col>
                                <van-col class="" span="20" style="text-align: center"><p class="card_list2_test" >查看问卷</p></van-col>
                            </van-col>
                        </van-row>
                    </div>
                    <div style="height: 8px"></div>
                </van-tab>
                <van-tab title="待审核(3)" color="#4c62e7">
                    <div class="card_div" style="">
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
                            <van-col class="" span="10" style="text-align: right"><p class="card_list2_test" >报名<span style="color: #4c62e7">30</span>人签到<span style="color: #4c62e7">21</span>人</p></van-col>
                        </van-row>
                        <hr style="size: 1px;width: 100%;color: aliceblue;margin: 0 ;padding: 0"/>
                        <van-row style="text-align: center;padding: 8px 12px 0">
                            <van-col class="" span="8">
                                <van-col class="" span="2"><img src="../../assets/image/my/List@2x.png" class="img_location" ></van-col>
                                <van-col class="" span="20"><p class="card_list2_test" >查看名单</p></van-col>
                            </van-col>
                            <van-col class="" span="8">
                                <van-col class="" span="2"><img src="../../assets/image/my/QR code@2x.png" class="img_location" ></van-col>
                                <van-col class="" span="20"><p class="card_list2_test" >签到二维码</p></van-col>
                            </van-col>
                            <van-col class="" span="8">
                                <van-col class="" span="2"><img src="../../assets/image/my/View report@2x.png" class="img_location" ></van-col>
                                <van-col class="" span="20"><p class="card_list2_test" >查看问卷</p></van-col>
                            </van-col>
                        </van-row>
                    </div>
<!--                    未开始-->
                    <div class="card_div" style="" @click="goactivityDetailsNotBegin">
                        <van-row style="padding: 16px 12px 0">
                            <van-col class="" span="12"><p class="card_list1_test_left" >支付系統及形式创新</p></van-col>
                            <van-col class="" span="12" style="text-align: right"><p class="card_list1_test_right" style="color: #f76037">未開始...</p></van-col>
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
                        <hr style="size: 1px;width: 100%;color: aliceblue;margin: 0 ;padding: 0"/>
                        <van-row style="text-align: center;padding: 8px 12px 0" type="flex" justify="center">
                            <van-col class="" span="8">
                                <van-col class="" span="2"><img src="../../assets/image/my/List@2x.png" class="img_location" ></van-col>
                                <van-col class="" span="20" style="text-align: center"><p class="card_list2_test" >查看名单</p></van-col>
                            </van-col>
                            <van-col class="" span="8">
                                <van-col class="" span="2"><img src="../../assets/image/my/QR code@2x.png" class="img_location" ></van-col>
                                <van-col class="" span="20" style="text-align: center"><p class="card_list2_test" >签到二维码</p></van-col>
                            </van-col>
                            <van-col class="" span="8">
                                <van-col class="" span="2"><img src="../../assets/image/my/View report@2x.png" class="img_location" ></van-col>
                                <van-col class="" span="20" style="text-align: center"><p class="card_list2_test" >查看问卷</p></van-col>
                            </van-col>
                        </van-row>
                    </div>
<!--                    已结束-->
<!--                    <div class="card_div" style="" @click="goactivityDetailsNotBegin">-->
<!--                        <van-row style="padding: 16px 12px 0" type="flex" justify="center">-->
<!--                            <van-col class="" span="12"><p class="card_list1_test_left" >今朝会-创业沙龙第六期</p></van-col>-->
<!--                            <van-col class="" span="12" style="text-align: right"><p class="card_list1_test_right" style="color: #999999">已結束...</p></van-col>-->
<!--                        </van-row>-->
<!--                        <van-row style="padding: 16px 12px 0">-->
<!--                            <van-col class="" span="2" style="justify-content: center;align-items: center;"><img src="../../assets/image/my/address@2x.png" class="img_location" ></van-col>-->
<!--                            <van-col class="" span="16" style="text-align: left"><p class="card_list2_test" >省分行营业部</p></van-col>-->
<!--                        </van-row>-->
<!--                        <van-row style="padding: 16px 12px 8px">-->
<!--                            <van-col class="" span="2"><img src="../../assets/image/my/time@2x.png" class="img_location" ></van-col>-->
<!--                            <van-col class="" span="12"><p class="card_list2_test" >2019.07.06-2019.08.08</p></van-col>-->
<!--                            <van-col class="" span="10" style="text-align: right"><p class="card_list2_test" >报名<span style="color: #4c62e7">108</span>人签到<span style="color: #4c62e7">102</span>人</p></van-col>-->
<!--                        </van-row>-->
<!--                        <hr style="size: 1px;width: 100%;color: aliceblue;margin: 0 ;padding: 0"/>-->
<!--                        <van-row style="text-align: center;padding: 8px 12px 0" type="flex" justify="center">-->
<!--                            <van-col class="" span="8">-->
<!--                                <van-col class="" span="2"><img src="../../assets/image/my/List@2x.png" class="img_location" ></van-col>-->
<!--                                <van-col class="" span="20" style="text-align: center"><p class="card_list2_test" >查看名单</p></van-col>-->
<!--                            </van-col>-->
<!--&lt;!&ndash;                                                        <van-col class="" span="8">&ndash;&gt;-->
<!--&lt;!&ndash;                                                            <van-col class="" span="2"><img src="../../assets/image/my/QR code@2x.png" class="img_location" ></van-col>&ndash;&gt;-->
<!--&lt;!&ndash;                                                            <van-col class="" span="20" style="text-align: center"><p class="card_list2_test" >签到二维码</p></van-col>&ndash;&gt;-->
<!--&lt;!&ndash;                                                        </van-col>&ndash;&gt;-->
<!--                            <van-col class="" span="8">-->
<!--                                <van-col class="" span="2"><img src="../../assets/image/my/View report@2x.png" class="img_location" ></van-col>-->
<!--                                <van-col class="" span="20" style="text-align: center"><p class="card_list2_test" >查看问卷</p></van-col>-->
<!--                            </van-col>-->
<!--                        </van-row>-->
<!--                    </div>-->
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
                title : '我的活动',
                checked: true,
                show: false,
                show1:false,
                show2:false,
                openOverlay_title:"",

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
</style>
