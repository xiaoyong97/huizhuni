<template>
    <div class="main" style="position: relative; ">

        <!--头部导航-->

        <van-nav-bar :title="title"  >

        </van-nav-bar>
        <img src="../../assets/images/38/return@2x.png" class="img_return"  @click="onClickLeft">
        <div class="main">
            <div class="not_start" :class="status_==1?'blue_bg':''">
                <p style="font-size: 12px;color: #FFFFFF" v-show="status_==0">进行中</p>
                <p style="font-size: 12px;color: #FFFFFF" v-show="status_==1">任务新建</p>
            </div>
            <van-swipe  indicator-color="white" >
                <van-swipe-item><img src="../../assets/images/other/banner.png" class="img_swiper" ></van-swipe-item>
                <van-swipe-item><img src="../../assets/images/other/banner.png" class="img_swiper" ></van-swipe-item>
            </van-swipe>
                <div class="main_box">
                    <van-row class="list_row_top" >
                        <van-col class=""  style="background-color: #4c62e7;width: 10px;height: 16px;margin: 9px 4px 9px 0;"></van-col>
                        <van-col class="list_title"  style="text-align: left"><p class="list_right_text bold" >活动信息</p></van-col>
                    </van-row>
                    <van-row class="list_row" >
                        <van-col class="list_left"  style="text-align: left;width: 123px;"><p class="list_test" >活动主题</p></van-col>
                        <van-col class="list_right"  style="text-align: left"><p class="list_test" style="color: rgb(51,51,51)">小微快贷</p></van-col>
                    </van-row>
                    <van-row class="list_row" >
                        <van-col class="list_left"  style="text-align: left;width: 123px;"><p class="list_test" >活动开始时间</p></van-col>
                        <van-col class="list_right"  style="text-align: left"><p class="list_test" style="color: rgb(51,51,51)">2019/07/06</p></van-col>
                    </van-row>
                    <van-row class="list_row" >
                        <van-col class="list_left"  style="text-align: left;width: 123px;"><p class="list_test" >活动结束时间</p></van-col>
                        <van-col class="list_right"  style="text-align: left"><p class="list_test" style="color: rgb(51,51,51)">2019/07/07</p></van-col>
                    </van-row>
                    <van-row class="list_row" >
                        <van-col class="list_left"  style="text-align: left;width: 123px;"><p class="list_test" >活动时长</p></van-col>
                        <van-col class="list_right"  style="text-align: left"><p class="list_test" style="color: rgb(51,51,51)">2天</p></van-col>
                    </van-row>
                    <van-row class="list_row" >
                        <van-col class="list_left"  style="text-align: left;width: 123px;"><p class="list_test" >签到时间</p></van-col>
                        <van-col class="list_right"  style="text-align: left"><p class="list_test" style="color: rgb(51,51,51)">2019/07/01   09:00</p></van-col>
                    </van-row>
                    <van-row class="list_row" >
                        <van-col class="list_left"  style="text-align: left;width: 123px;"><p class="list_test" >活动地点</p></van-col>
                        <van-col class="list_right"  style="text-align: left"><p class="list_test" style="color: rgb(51,51,51)">省分行营业部</p></van-col>
                    </van-row>
                    <van-row class="list_row" >
                        <van-col class="list_left"  style="text-align: left;width: 123px;"><p class="list_test" >培训对象</p></van-col>
                        <van-col class="list_right"  style="text-align: left"><p class="list_test" style="color: rgb(51,51,51)">小微企业</p></van-col>
                    </van-row>
                    <van-row class="list_row" >
                        <van-col class="list_left"  style="text-align: left;width: 123px;"><p class="list_test" >主办机构</p></van-col>
                        <van-col class="list_right"  style="text-align: left"><p class="list_test" style="color: rgb(51,51,51)">河西支行</p></van-col>
                    </van-row>
                    <van-row class="list_row" >
                        <van-col class="list_left"  style="text-align: left;width: 123px;"><p class="list_test" >经办人</p></van-col>
                        <van-col class="list_right"  style="text-align: left"><p class="list_test" style="color: rgb(51,51,51)">李四</p></van-col>
                    </van-row>
                    <van-row class="list_row" >
                        <van-col class="list_left"  style="text-align: left;width: 123px;"><p class="list_test" >审核人</p></van-col>
                        <van-col class="list_right"  style="text-align: left"><p class="list_test" style="color: rgb(51,51,51)">张三</p></van-col>
                    </van-row>




            </div>

            <div class="secend_box">
                <van-row class="list_row_top" >
                    <van-col class=""  style="background-color: #4c62e7;width: 10px;height: 16px;margin: 9px 4px 9px 0;"></van-col>
                    <van-col class="list_title"  style="text-align: left"><p class="list_right_text bold" >日程信息</p></van-col>
                </van-row>
                <van-row class="list_row" style="border-bottom:1px solid #333333;">
                    <van-col class=""  span="5" style="text-align: center;"><p class="list_test_min_head" >课程名称</p></van-col>
                    <van-col class=""  span="5" style="text-align: center;"><p class="list_test_min_head" >授课老师</p></van-col>
                    <van-col class=""  span="5" style="text-align: center;"><p class="list_test_min_head" >授课时间</p></van-col>
                    <van-col class=""  span="4" style="text-align: center;"><p class="list_test_min_head" >地点</p></van-col>
                    <van-col class=""  span="5"  style="text-align: center"><p class="list_test_min_head" >课程时长</p></van-col>
                </van-row>
                <van-row class="list_row" style="border-bottom:1px solid #999999;">
                    <van-col class=""  span="5" style="text-align: center;"><p class="list_test_min" >信用快贷</p></van-col>
                    <van-col class=""  span="5" style="text-align: center;"><p class="list_test_min" >李四</p></van-col>
                    <van-col class=""  span="5" style="text-align: center;"><p class="list_test_min" >9:00-13:00</p></van-col>
                    <van-col class=""  span="4" style="text-align: center;"><p class="list_test_min" >901</p></van-col>
                    <van-col class=""  span="5"  style="text-align: center"><p class="list_test_min" >120分钟</p></van-col>
                </van-row>
                <van-row class="list_row" style="border-bottom:1px solid #333333;">
                    <van-col class=""  span="5" style="text-align: center;"><p class="list_test_min" >抵押快贷</p></van-col>
                    <van-col class=""  span="5" style="text-align: center;"><p class="list_test_min" >李四</p></van-col>
                    <van-col class=""  span="5" style="text-align: center;"><p class="list_test_min" >9:00-13:00</p></van-col>
                    <van-col class=""  span="4" style="text-align: center;"><p class="list_test_min" >901</p></van-col>
                    <van-col class=""  span="5"  style="text-align: center"><p class="list_test_min" >120分钟</p></van-col>
                </van-row>
            </div>
<!--            <div v-show="status_==1">-->
<!--                <div class="secend_box" style="height: auto" v-show="identity=='management'">-->
<!--                    <van-row class="list_row_top" >-->
<!--                        <van-col class=""  style="background-color: #4c62e7;width: 10px;height: 16px;margin: 9px 4px 9px 0;"></van-col>-->
<!--                        <van-col class="list_title"  style="text-align: left"><p class="list_right_text" >请选择审核人</p></van-col>-->
<!--                    </van-row>-->
<!--                    <van-row class="list_row" >-->
<!--                        <van-col class=""  span="8" style="text-align: left;"><p class="list_test_examine" style="color: #333333">审核人</p></van-col>-->
<!--                        <van-col class=""  span="14" style="text-align: left;"><p class="list_test_examine" >请选择</p></van-col>-->
<!--                        <van-col class=""  span="2" style="text-align: left;"><img src="../../assets/images/24/more@2x.png" class="img_right" ></van-col>-->
<!--                    </van-row>-->
<!--                </div>-->
<!--            </div>-->

            <div class="secend_box" style="height: auto" >
                <van-row class="list_row_top" type="flex" justify="center">
                    <van-col class="" span="12" style="height: 40px">
                        <van-row class="" type="flex" justify="center" @click="goviewList">
                            <van-col class="" span="2" ><img src="../../assets/images/38/List@2x.png" class="img_right" ></van-col>
                            <van-col class="" span="12" ><p class="list_test_last" >查看名单</p></van-col>
                        </van-row>
                    </van-col>
                    <van-col class="" span="12" style="height:40px">
                        <van-row class="" type="flex" justify="center">
                            <van-col class="" span="2" ><img src="../../assets/images/38/QRcode@2x.png" class="img_right" ></van-col>
                            <van-col class="" span="12" ><p class="list_test_last" >报名/签到</p></van-col>
                        </van-row>
                    </van-col>
                </van-row>
                <van-row class="list_row" type="flex" justify="center">
                    <van-col class="" span="12" style="height:40px">
                        <van-row class="" type="flex" justify="center">
                            <van-col class="" span="2" ><img src="../../assets/images/38/Viewreport@2x.png" class="img_right" ></van-col>
                            <van-col class="" span="12" ><p class="list_test_last" >查看问卷</p></van-col>
                        </van-row>
                    </van-col>
                    <van-col class="" span="12" style="height:40px">
                        <van-row class="" type="flex" justify="center" @click="goPsge('checkList')">
                            <van-col class="" span="2" ><img src="../../assets/images/38/Viewreport@2x.png" class="img_right" ></van-col>
                            <van-col class="" span="12" ><p class="list_test_last" >查看报名表</p></van-col>
                        </van-row>
                    </van-col>
                </van-row>
            </div>
            <div v-show="identity=='management'">
                <van-row type="flex" justify="center" class="choose_row" v-show="status_==1 && agree_status==0">
                    <van-col class="reject_col"  span="9" @click="agreeStatus(0)" ><p class="reject_col_test">拒绝创建</p></van-col>
                    <van-col class=""  span="2" ></van-col>
                    <van-col class="agree_col"   span="9" @click="agreeStatus(1)"><p class="agree_col_test" >同意创建</p></van-col>
                </van-row>
                <div class="null_box" v-show="status_==1"></div>
            </div>

        </div>
    </div>
</template>

<script>

    //引入组件首字母大写
    import TabBar from '@/components/tabBar'
    import { Tab, Tabs,Swipe, SwipeItem, Row, Col ,Dialog  } from 'vant';
    import Vue from 'vue';

    Vue.use(Swipe).use(SwipeItem).use(Col).use(Row).use(Tab).use(Tabs).use(Dialog);
    export default {
        //基础数据存放处
        data (){
            return {
                title : '活动详情',
                activeName: 'a',
                current: 0,
                status_:0,//0：活动未开始  1:任务新建
                identity:'',
                agree_status:0,
            }
        },

        //数据预加载
        created : function(){
        },

        //网页加载完成
        mounted () {
            var value_status = this.$route.params.status_;
            console.log(value_status);
            if (value_status!==undefined) {
                sessionStorage.setItem('status_',value_status)
            }

            this.status_ = sessionStorage.getItem('status_');

            var value = sessionStorage.getItem('identity');
            if (value == "management") {
                this.identity = 'management'
            }

        },

        //声明方法
        methods : {
            agreeStatus(i) {
                if (i==0) {
                    this.agree_status = 1;
                    Dialog.alert({
                        message: '拒绝创建'
                    }).then(() => {
                        // on close
                    });

                }else {
                    Dialog.alert({
                        message: '同意创建'
                    }).then(() => {
                        // on close
                    });
                    this.agree_status = 1;
                }
            },
            onClickLeft() {
                this.$router.go(-1);
            },
            onChange(index) {
                this.current = index;
            },
            goviewList : function(){
                this.$router.push('./viewList');
            },
            goPsge(url) {
                this.$router.push({name:url});
            }
        },

        //计算属性
        computed: {
        },

        components: {
            TabBar

        }
    }
</script>

<style lang="scss" scoped>
    .img_swiper{
        height: 200px;
        width: auto;
    }
    .main{
        background-color: rgb(238,238,238);
        position: relative;
    };
    .list_right_text{
        margin-block-start:0;
        margin-block-end:0;
        font-size: 14px;
        line-height: 34px;
        color: rgb(51,51,51);
    }
    .list_test_examine{
        line-height: 40px;
        font-size: 15px;
        margin-block-start:0;
        margin-block-end:0;
        color: rgb(153,153,153);
    }
    .main_box{
        height: 434px;
        width: 100%;
        background-color: white;
        border-top-right-radius: 8px;
        border-top-left-radius: 8px;
        position: relative;
        top:-10px
    }
    .reject_col{
        border: #4c62e7 1px solid;
        border-radius: 40px;
        text-align: center;
        height: 34px;
    }
    .choose_row{
        margin: 12px auto;
    }
    .null_box{
        height: 12px;
    }
    .reject_col_test{
        padding: 0;
        margin: 0;
        line-height: 34px;
        font-size: 14px;
        color: #4c62e7;
    }
    .agree_col{
        border: #4c62e7 1px solid;
        border-radius: 40px;
        background-color: #4c62e7;
        height: 34px;
        text-align: center;
    }
    .agree_col_test{
        padding: 0;
        margin: 0;
        line-height: 34px;
        font-size: 14px;
        color: #fff;
    }
    .list_test{
        line-height: 40px;
        margin-block-start:0;
        margin-block-end:0;
        color: rgb(102,102,102);
    }
    .list_test_min{
        line-height: 30px;
        font-size: 12px;
        margin-block-start:0;
        margin-block-end:0;
        color: rgb(102,102,102);
    }
    .list_test_min_head{
        line-height: 30px;
        font-size: 14px;
        margin-block-start:0;
        margin-block-end:0;
        color: rgb(51,51,51);
    }
    .list_test_last{
        padding-left: 4px;
        line-height: 40px;
        font-size: 14px;
        margin-block-start:0;
        margin-block-end:0;
        color: rgb(51,51,51);
    }
    .list_row_top{
        padding: 0px 12px;
    }
    .img_return{
        position: absolute;
        top: 14px;
        left:12px ;
        height: 18px;
        width: 18px;
        z-index: 100;
    }
    .list_row{
        padding: 0 12px ;margin:0;
    }
    .list_left{
        text-align: left;width: 123px;
    }
    .list_right{
        text-align: left
    }
    .secend_box{
        background-color: #FFFFFF;
        position: relative;
        top:-10px;
        width: 100%;
        height: 136px;
        margin-top: 9px;
    }
    .img_right{
        height: 16px;
        width: 16px;
        margin: 12px 0;
    }
    .not_start{
        z-index: 100;
        width: 60px;
        height: 40px;
        background-color: #f34c83 ;
        position: absolute;
        right: 0;
        top: 20px;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
    .blue_bg{
        background-color: #4c62e7;
    }
    .bold{
        font-weight: bold;
    }





</style>
