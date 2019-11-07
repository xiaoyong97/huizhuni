<template>
    <div class="main">
<!--        遮罩层-->

        <!--头部导航-->
        <van-nav-bar :title="title"  >
        </van-nav-bar>
        <img src="../../../assets/images/38/return@2x.png" class="img_return"  @click="onClickLeft">

        <div class="content">
            <div class="card_div" style="" >
                <van-row style="padding: 15px 12px 0 ">
                    <van-col class="" span="12">
                        <p class="card_list1_test_left" style="font-weight: bold;font-size: 15px">1.张三三  &thinsp; 女</p>
                        <p class="card_list1_test_left" style="">广州新野模具有限公司</p>
                    </van-col>
                    <van-col class="" span="12" style="text-align: left">
                        <p class="card_list1_test_right">12345678901</p>
                        <p class="card_list1_test_right" style="font-size: 15px">客户经理</p>
                    </van-col>
                </van-row>
                <div style="height: 15px" v-show="open"></div>

            </div>
            <div class="card_div" style="" >
                <van-row style="padding: 15px 12px 0 ">
                    <van-col class="" span="12">
                        <p class="card_list1_test_left" style="font-weight: bold;font-size: 15px">2.赵无极  &thinsp; 男</p>
                        <p class="card_list1_test_left" style="">鲁信创投</p>
                    </van-col>
                    <van-col class="" span="12" style="text-align: left">
                        <p class="card_list1_test_right">12345678901</p>
                        <p class="card_list1_test_right" style="font-size: 15px">客户经理</p>
                    </van-col>
                </van-row>
                <div style="height: 15px" v-show="open"></div>

            </div>
            <div class="card_div" style="" >
                <van-row style="padding: 15px 12px 0 ">
                    <van-col class="" span="12">
                        <p class="card_list1_test_left" style="font-weight: bold;font-size: 15px">3.李思思  &thinsp; 男</p>
                        <p class="card_list1_test_left" style="">广州新野模具有限公司</p>
                    </van-col>
                    <van-col class="" span="12" style="text-align: left">
                        <p class="card_list1_test_right">12345678901</p>
                        <p class="card_list1_test_right" style="font-size: 15px">客户经理</p>
                    </van-col>
                </van-row>
                <div style="height: 15px" v-show="open"></div>

            </div>
            <div class="card_div" style="" >
                <van-row style="padding: 15px 12px 0 ">
                    <van-col class="" span="12">
                        <p class="card_list1_test_left" style="font-weight: bold;font-size: 15px">4.乔亚  &thinsp; 女</p>
                        <p class="card_list1_test_left" style="">贵州百灵药业</p>
                    </van-col>
                    <van-col class="" span="12" style="text-align: left">
                        <p class="card_list1_test_right">12345678901</p>
                        <p class="card_list1_test_right" style="font-size: 15px">客户经理</p>
                    </van-col>
                </van-row>
                <div style="height: 15px" v-show="open"></div>

            </div>
            <div class="card_div" style="" >
                <van-row style="padding: 15px 12px 0 ">
                    <van-col class="" span="12">
                        <p class="card_list1_test_left" style="font-weight: bold;font-size: 15px">5.李歉  &thinsp; 男</p>
                        <p class="card_list1_test_left" style="">广州新野模具有限公司</p>
                    </van-col>
                    <van-col class="" span="12" style="text-align: left">
                        <p class="card_list1_test_right">12345678901</p>
                        <p class="card_list1_test_right" style="font-size: 15px">客户经理</p>
                    </van-col>
                </van-row>
                <div style="height: 15px" v-show="open"></div>

            </div>
            <div class="card_div" style="" >
                <van-row style="padding: 15px 12px 0 ">
                    <van-col class="" span="12">
                        <p class="card_list1_test_left" style="font-weight: bold;font-size: 15px">6.钱云龙  &thinsp; 男</p>
                        <p class="card_list1_test_left" style="">广州新野模具有限公司</p>
                    </van-col>
                    <van-col class="" span="12" style="text-align: left">
                        <p class="card_list1_test_right">12345678901</p>
                        <p class="card_list1_test_right" style="font-size: 15px">客户经理</p>
                    </van-col>
                </van-row>
                <div style="height: 15px" v-show="open"></div>

            </div>
            <div class="card_div" style="" >
                <van-row style="padding: 15px 12px 0 ">
                    <van-col class="" span="12">
                        <p class="card_list1_test_left" style="font-weight: bold;font-size: 15px">7.孙战  &thinsp; 女</p>
                        <p class="card_list1_test_left" style="">湖南中山药机</p>
                    </van-col>
                    <van-col class="" span="12" style="text-align: left">
                        <p class="card_list1_test_right">12345678901</p>
                        <p class="card_list1_test_right" style="font-size: 15px">客户经理</p>
                    </van-col>
                </van-row>
                <div style="height: 15px" v-show="open"></div>

            </div>
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
                title : '签到名单',
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
                /* let activeNameDan="b"
                this.$router.push("/offlineHuoDong/viewList/"+activeNameDan) */
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
    .van_col_box_title{
        padding-left: 12px;
        font-size: 14px;
        margin-block-start:0;
        margin-block-end:0;
        margin-bottom: 4px;
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
    .img_return{
        position: absolute;
        top: 14px;
        left:12px ;
        height: 18px;
        width: 18px;
        z-index: 100;
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
        /*background-color: rgb(238,238,238);*/
        justify-content: center;
        align-items: center;
        margin-top: 8px;
    }
    .main{
        padding: 0px;
        background-color: rgb(238,238,238);
    }
    .card_list1_test_left{
        color: #333333;
        font-size: 15px;
        margin-block-start:0;
        margin-block-end:0;
        line-height: 30px;
    }
    .card_list1_test_right{
        color: #333333;
        font-size: 15px;
        margin-block-start:0;
        margin-block-end:0;
        line-height: 30px;
    }
    .card_list2_test{
        color: #333333;
        font-size: 15px;
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
