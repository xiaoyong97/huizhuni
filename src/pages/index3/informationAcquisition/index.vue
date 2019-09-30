<template>
     <div class="main" style="position: relative; ">

        <!--头部导航-->

        <van-nav-bar :title="title"  >

        </van-nav-bar>

        <img src="../../../assets/images/38/filter1@2x.png" class="img_fliter" >
         <img src="../../../assets/images/38/searchfor@2x.png" class="img_search" >
         <img src="../../../assets/images/38/return@2x.png" class="img_return"  @click="onClickLeft">
        <div class="content">
            <van-tabs color="#4c62e7" line-width="33%" line-height=3 title-active-color="#4c62e7">
                <van-tab title="待补录" color="#4c62e7">
                    <div class="card_div" style="" >
                        <div @click="goactivityDetailsIng" class="card-bottom-line">

                            <van-row style="padding: 16px 12px 0">
                                <van-col class="" span="2" style="justify-content: center;align-items: center;"><img src="../../../assets/images/38/Companyname@2x.png" class="img_location" ></van-col>
                                <van-col class="" span="16" style="text-align: left"><p class="card_list2_test" >广州建信信息科技有限公司</p></van-col>
                            </van-row>
                            <van-row style="padding: 16px 12px 0">
                                <van-col class="" span="2"><p class="card_list1_test_left" ></p></van-col>
                                <van-col class="" span="10"><p class="card_list1_test_left" >统一社会信用代码</p></van-col>
                                <van-col class="" span="12" style="text-align: right"><p class="card_list1_test_right">440108888888</p></van-col>
                            </van-row>
                            <van-row style="padding: 16px 12px 0">
                                <van-col class="" span="12"><p class="card_list1_test_left" >企业主姓名</p></van-col>
                                <van-col class="" span="12" style="text-align: right"><p class="card_list1_test_right">张三</p></van-col>
                            </van-row>
                            <van-row style="padding: 16px 12px 0">
                                <van-col class="" span="12"><p class="card_list1_test_left" >采集时间</p></van-col>
                                <van-col class="" span="12" style="text-align: right"><p class="card_list1_test_right">2019-07-22</p></van-col>
                            </van-row>
                        </div>
                            <van-row style="text-align: center;padding: 8px 12px 0">
                                <van-col class="" span="8">
                                    <van-col class="" span="2"><img src="../../../assets/image/my/View report@2x.png" class="img_location" ></van-col>
                                    <van-col class="" span="20"><p class="card_list2_test" >补录</p></van-col>
                                </van-col>
                            </van-row>
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
    import { Tab, Tabs ,SubmitBar, } from 'vant';

    Vue.use(Tab).use(Tabs).use(SubmitBar);
    export default {

        data() {
            return {
                title : '信息采集',
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
</style>
