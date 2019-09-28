<template>
    <div class="main">

        <!--头部导航-->

        <van-nav-bar :title="title" left-text="返回" left-arrow @click-left="onClickLeft">

        </van-nav-bar>

        <div class="content">
            <van-tabs color="#4c62e7" line-width="50%" line-height=3>
                <van-tab title="已发布(3)" color="#4c62e7">
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
                    <div class="card_div" style="" @click="goactivityDetailsOver">
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
                        <hr style="size: 1px;width: 100%;color: aliceblue;margin: 0 ;padding: 0"/>
                        <van-row style="text-align: center;padding: 8px 12px 0" type="flex" justify="center">
                            <van-col class="" span="8">
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
                alert()
                this.$router.push('/index5');
            },
            goactivityDetailsOver : function(){
                this.$router.push('./activityDetailsOver');
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
