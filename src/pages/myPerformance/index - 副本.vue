<template>
    <van-nav-bar :title="title" left-text="返回" left-arrow @click-left="onClickLeft" @click-right="add_task">
        <van-icon name="add"  slot="right"/>
    </van-nav-bar>
    <div class="main">
<!--        <van-nav-bar-->
<!--                :title='title'-->
<!--                fixed-->
<!--        />-->
        <!--      <NavBar :title="title"/>-->
        <div class="content">
            <div class="content">
                <van-tabs v-model="activeName" line-width=50% line-height=3 color="#4c62e7" style="margin-bottom: 0px;padding-bottom: 0">
                    <van-tab title="我的业绩" name="a" style="margin-top: 0px;padding-top: 0" >
                        <div class="business_box">
                            <div class="business_box1">
                                <p class="business_text">商机完成情况</p>
                            </div>
                            <van-row class="business_box2" >
                                <van-col span="12" >
                                    <div >
                                        <p class="business_text2">共领取商机</p>
                                    </div>
                                    <div >
                                        <van-col span="12" class="business_box3"><p class="max_num" style="color: rgb(76,98,231)">51</p></van-col>
                                        <van-col span="2" class="business_box3"><p class="business_text3">条</p></van-col>
                                    </div>
                                </van-col>
                                <van-col span="12" >
                                    <div >
                                        <p class="business_text2">成功转换</p>
                                    </div>
                                    <div >
                                        <van-col span="12" class="business_box3"><p class="max_num" style="color: rgb(247,96,55)">34</p></van-col>
                                        <van-col span="2" class="business_box3"><p class="business_text3">条</p></van-col>
                                    </div>
                                </van-col>
                            </van-row>
                        </div>
                        <!--              1-2div-->
                        <div class="business_box">
                            <div class="business_box1">
                                <p class="business_text">你的排名</p>
                            </div>
                            <van-row class="business_box2" >
                                <van-col span="12" >
                                    <div >
                                        <p class="business_text2" style="padding-left: 14px;">商机成功率在机构排名</p>
                                    </div>
                                    <div >
                                        <van-col span="12" class="business_box3"><p class="max_num" style="color: rgb(76,98,231)">12</p></van-col>
                                        <van-col span="2" class="business_box3"><p class="business_text3">名</p></van-col>
                                    </div>
                                </van-col>
                                <van-col span="12" >
                                    <div >
                                        <p class="business_text2" >本月下降</p>
                                    </div>
                                    <div >
                                        <van-col span="12" class="business_box3"><p class="max_num" style="color: rgb(70,185,72)">6</p></van-col>
                                        <van-col span="2" class="business_box3"><img :src="decrease_img"  class="img" ></van-col>
                                    </div>
                                </van-col>
                            </van-row>
                        </div>
                        <!--              第1-3div-->
                        <div class="business_box_3" style="border-bottom-left-radius: 0;border-bottom-right-radius: 0">
                            <div class="business_box1">
                                <p class="business_text">商机转化</p>
                            </div>
                            <van-row class="business_box2" >
                                <van-col span="8" style="background-color: yellow">
                                    <div >
                                        <p class="business_text2" style="padding-left: 14px;margin-top: 10px">商机成功率</p>
                                    </div>
                                    <div >
                                        <van-col span="12" class="business_box3"><p class="max_num" style="color: rgb(51,51,51);">67</p></van-col>
                                        <van-col span="2" class="business_box3"><p class="business_text_percent">%</p></van-col>
                                    </div>
                                </van-col>
                                <van-col span="8" style="background-color: yellow">
                                    <van-row class="" style="">
                                        <van-col  class="business_box3" span="1"><img :src="navigation"  class="img_navigation" ></van-col>
                                        <van-col  class="business_box3" span="20"><p class="business_text_success">成功</p></van-col>
                                    </van-row>
                                    <van-row class="" >
                                        <van-col class="business_box3" span="1"><img :src="navigation"  class="img_navigation" ></van-col>
                                        <van-col class="business_box3" span="20"><p class="business_text_success">未成功</p></van-col>
                                    </van-row>
                                </van-col>
                                <van-col span="8" >
                                    <img :src="success"  class="" style="height:110px;width: 110px;position: absolute;top: 14px;right: 20px">
                                </van-col>
                                <img :src="pull_down"  class="felx_img" >
                            </van-row>
                        </div>
                        <!--              折叠div-->
                        <div class="business_box" style="border-top-left-radius: 0;border-top-right-radius: 0">
                            <van-row>
                                <van-col span="4"><p class="business_text_flex" >截止：</p></van-col>
                                <van-col span="1"><p class="business_text" style="color: rgb(76,98,231);">09</p></van-col>
                                <van-col span="1"><p class="business_text" >月</p></van-col>
                                <van-col span="1"><p class="business_text" style="color: rgb(76,98,231);">01</p></van-col>
                                <van-col span="1"><p class="business_text" >日</p></van-col>
                            </van-row>
                            <van-row>
                                <van-col span="12"><p class="business_flexbox_text">您名下商机处理情况为</p></van-col>
                            </van-row>
                            <van-row>
                                <van-col span="12"><p class="business_flexbox_text">成功转换累计笔数：</p></van-col>
                                <van-col span="2"><p class="business_flexbox_text2" style="color: rgb(76,98,231)">34</p></van-col>
                                <van-col span="2"><p class="business_flexbox_text2">笔</p></van-col>
                            </van-row>
                            <van-row>
                                <van-col span="12"><p class="business_flexbox_text">待完成累计笔数：</p></van-col>
                                <van-col span="2"><p class="business_flexbox_text2" style="color: rgb(247,96,55)">5</p></van-col>
                                <van-col span="2"><p class="business_flexbox_text2">笔</p></van-col>
                            </van-row>
                            <van-row>
                                <van-col span="12"><p class="business_flexbox_text">放弃累计笔数：</p></van-col>
                                <van-col span="2"><p class="business_flexbox_text2" style="color: rgb(247,96,55)">1</p></van-col>
                                <van-col span="2"><p class="business_flexbox_text2">笔</p></van-col>
                            </van-row>
                            <van-row>
                                <van-col span="12"><p class="business_flexbox_text">失败累计笔数：</p></van-col>
                                <van-col span="2"><p class="business_flexbox_text2" style="color: rgb(102,102,102)">2</p></van-col>
                                <van-col span="2"><p class="business_flexbox_text2">笔</p></van-col>
                            </van-row>
                        </div>
                    </van-tab>
                    <van-tab title="机构业绩" name="b" >机构业绩</van-tab>
                    <van-tab title="客户经理排行榜" name="c" >
                        <van-row style="position: relative;margin-top: 8px;background-color: #FFFFFF;max-height: 143px;padding: 11px 10px">
                            <van-col span="8">
                                <van-row style="height: 60px">
                                    <van-col span=""><img :src="medal"  class="img_medal" ></van-col>
                                    <van-col span=""><p class="tab3_div1_text1" >光荣榜</p></van-col>
                                </van-row>
                                <van-row span="24" style="text-align: center;background-color: aliceblue">
                                    <p class="tab3_div1_text2">第<span class="tab3_div1_text3" >12</span>笔</p>
                                </van-row>
                            </van-col>
                            <van-col  class="" span="8" style="position: relative">
                                <img :src="frame1"  class="img_frame" >
                                <img :src="success"  class="img_frame_head" >
                            </van-col>
                            <van-col span="8">
                                <van-row style="height: 60px">
                                    <p class="tab3_div1_text5" style="color: rgb(51,51,51);">广东省分行</p>
                                    <p class="tab3_div1_text5" >2019年9月</p>
                                </van-row>
                                <van-row style="text-align: center;background-color: aliceblue">
                                    <p class="tab3_div1_text2">成功<span class="tab3_div1_text3">34</span>笔</p>
                                </van-row>
                            </van-col>
                        </van-row>

                        <div class="list_div ">
                            <van-row class="list_box" type="flex" justify="center" style="position: relative">
                                <van-col  class="" span="1"><p class="list_text1" style="color: rgb(247,96,55)">1.</p></van-col>
                                <van-col  class="" span="4" >
                                    <img :src="frame2"  class="img_frame_min" >
                                    <img :src="success"  class="img_frame_head_min" >
                                </van-col>
                                <van-col  class="" span="10"><p class="list_text2" >Selina</p></van-col>
                                <van-col  class="text-align_right" span="9"><p class="list_text3">成功<span class="list_text4">47</span>笔</p></van-col>
                            </van-row>
                            <hr style="size: 1px;width: 95%;color: aliceblue;margin: 0 10px;padding: 0"/>
                            <van-row class="list_box" type="flex" justify="center" style="position: relative">
                                <van-col  class="" span="1"><p class="list_text1" style="color: rgb(169,168,168)">2.</p></van-col>
                                <van-col  class="" span="4" >
                                    <img :src="frame3"  class="img_frame_min" >
                                    <img :src="success"  class="img_frame_head_min" >
                                </van-col>
                                <van-col  class="" span="10"><p class="list_text2">王长生</p></van-col>
                                <van-col  class="text-align_right" span="9"><p class="list_text3">成功<span class="list_text4">45</span>笔</p></van-col>
                            </van-row>
                            <van-row class="list_box" type="flex" justify="center" style="position: relative">
                                <van-col  class="" span="1"><p class="list_text1" style="color: rgb(219,146,65)">3.</p></van-col>
                                <van-col  class="" span="4" >
                                    <img :src="frame4"  class="img_frame_min" >
                                    <img :src="success"  class="img_frame_head_min" >
                                </van-col>
                                <van-col  class="" span="10"><p class="list_text2">赵无极</p></van-col>
                                <van-col  class="text-align_right" span="9" ><p class="list_text3">成功<span class="list_text4">42</span>笔</p></van-col>
                            </van-row>
                            <van-row class="list_box" type="flex" justify="center" style="position: relative">
                                <van-col  class="" span="1"><p class="list_text1" >4.</p></van-col>
                                <van-col  class="" span="4" >
                                    <img :src="success"  class="img_frame_head_min" >
                                </van-col>
                                <van-col  class="" span="10"><p class="list_text2">赵无极</p></van-col>
                                <van-col  class="text-align_right" span="9" ><p class="list_text3">成功<span class="list_text4">42</span>笔</p></van-col>
                            </van-row>
                            <van-row class="list_box" type="flex" justify="center" style="position: relative">
                                <van-col  class="" span="1"><p class="list_text1" >4.</p></van-col>
                                <van-col  class="" span="4" >
                                    <img :src="success"  class="img_frame_head_min" >
                                </van-col>
                                <van-col  class="" span="10"><p class="list_text2">赵无极</p></van-col>
                                <van-col  class="text-align_right" span="9" ><p class="list_text3">成功<span class="list_text4">42</span>笔</p></van-col>
                            </van-row>


                        </div>
                    </van-tab>
                </van-tabs>

            </div>






        </div>






    </div>

</template>

<script>

    //引入组件首字母大写
    import TabBar from '@/components/tabBar'
    // import NavBar from '@/components/tabBar'
    import Vue from 'vue';
    import { Tab, Tabs } from 'vant';
    import { Row, Col } from 'vant';

    Vue.use(Row).use(Col);
    Vue.use(Tab).use(Tabs);
    export default {

        //基础数据存放处
        data (){
            return {
                title : '业绩展示',
                activeName: 'a',
                decrease_img: require('@/assets/image/my/decrease.png'),
                pull_down: require('@/assets/image/my/Pull down 4@2x.png'),
                navigation: require('@/assets/image/my/Navigation circle@2x.png'),
                success: require('@/assets/image/my/wait@2x.png'),
                frame1: require('@/assets/image/my/Picture frame1@2x.png'),
                frame2: require('@/assets/image/my/Picture frame2@2x.png'),
                frame3: require('@/assets/image/my/Picture frame3@2x.png'),
                frame4: require('@/assets/image/my/Picture frame4@2x.png'),
                medal: require('@/assets/image/my/medal.png'),
                // medal: require('@/assets/image/my/medal.png'),
            }
        },

        //数据预加载
        created : function(){

        },

        //网页加载完成
        mounted () {

        },

        //声明方法
        methods : {

            go : function(){
                this.$router.push('/index5/myperformance');
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

<style lang="scss" scoped>
    .main{
        background-color: rgb(238,238,238);

    };
    .img{
        height: 19px;
        width:19px;
        position: absolute;
        bottom: 0;
    };
    .img_medal{
        height: 28px;
        width:28px;
    };
    .felx_img{
        height: 19px;
        width:19px;
        position: absolute;
        bottom: 0;
        left: 50%;
    };
    success_img_box{
        position: relative;
    };
    success_img{
        height: 110px;
        width:110px;
        background-color: brown;
        position: absolute;
        top: -20px;
        right: 0;
    };
    .img_frame{
        height: 80px;
        width:80px;
        position: absolute;
        top: 35px;
        left: 25px;
        z-index: 3;
    };
    .img_frame_head{
        height: 62px;
        width:62px;
        position: absolute;
        top: 42px;
        left: 33px;
        z-index: 2;
    };
    .img_frame_min{
        height: 52px;
        width:52px;
        position: absolute;
        top: 6px;
        left: 25px;
        z-index: 3;
    };
    .img_frame_head_min{
        height: 40px;
        width:40px;
        position: absolute;
        top: 11px;
        left: 31px;
        z-index: 2;
    };
    .img_navigation{
        height: 12px;
        width:12px;
        position: absolute;
        left: 0px;
        top:24px;
    };
    .content{
        background-color: rgb(238,238,238);
    };
    .business_box{
        height:143px;
        width:96%;
        margin-left: 2%;
        margin-right: 2%;
        margin-top: 8px;
        background-color: rgb(255,255,255);
        padding: 0;
        border-radius: 8px;
    };
    .manager_box{
        width:100%;
        margin-top: 8px;
        background-color: rgb(255,255,255);
    };
    manager_box1{
        height:143px;
        width:100%;
        margin-top: 8px;
        padding-left: 11px;
        padding-top: 11px;
        background-color: rgb(255,0,0);
        padding: 0;
    };
    .business_box_3{
        height:143px;
        width:96%;
        margin-left: 2%;
        margin-right: 2%;
        margin-top: 8px;
        background-color: rgb(255,255,255);
        padding: 0;
        border-radius: 8px;
        position: relative;
    };
    .business_box1{
        border-radius: 8px;
        padding: 0;
    };
    .business_box2{
        margin: 0;
        padding: 0;
    };
    .business_box3{
        height: 48px;
        margin: 0;
        padding: 0;
        position: relative;
    };
    .business_box4{
        height: 48px;
        margin: 0;
        padding: 0;
        position: relative;
    };
    .business_text{
        font-family: "Plantagenet Cherokee";
        padding-left:14px ;
        padding-top: 14px;
        font-size:16px;
        font-weight: bold;
        color:rgb(51,51,51);
        margin-block-start:0;
        margin-block-end:0;
    };
    .business_text_flex{
        font-family: "Plantagenet Cherokee";
        padding-left:14px ;
        padding-top: 14px;
        font-size:16px;
        font-weight: bold;
        color:rgb(51,51,51);
        margin-block-start:0;
        margin-block-end:0;
    };
    .max_num{
        font-size:42px;
        font-family: "Palatino Linotype";
        margin-block-start:0;
        margin-block-end:0;
        padding-left: 50px;
    };
    .business_text2{
        font-size:14px;
        margin-block-start:0;
        margin-block-end:0;
        padding-left: 46px;
        margin-top: 6px;
    };
    .business_text3{
        float: left;
        font-size:14px;
        margin-block-start:0;
        margin-block-end:0;
        padding-left: 46px;
        position: absolute;
        left: -42px;
        bottom: 0;
        color: rgb(153,153,153);
    };
    .business_text_success{
        float: left;
        font-size:12px;
        margin-block-start:0;
        margin-block-end:0;
        position: absolute;
        left: 10px;
        top: 22px;
        color: rgb(102,102,102);
    };
    .tab3_div1_text1{
        font-weight: bold;
        font-size:18px;
        line-height: 18px;
        margin-block-start:0;
        margin-block-end:0;
        color: rgb(51,51,51);
    };
    .tab3_div1_box2{
        justify-content: center;
        align-items: center;
        position: relative;
        height: 115px;
        background-color: aqua;
    };
    .tab3_div1_text2{
        font-size:14px;
        margin-block-start:0;
        margin-block-end:0;
        color: rgb(102,102,102);
    };
    .tab3_div1_text5{
        font-size:15px;
        text-align: right;
        line-height: 24px;
        margin-block-start:0;
        margin-block-end:0;
        color: rgb(102,102,102);
    };
    .tab3_div1_text3{
        font-size:42px;
        margin-block-start:0;
        margin-block-end:0;
        color: rgb(76,98,231);
        padding-left:10px ;
        padding-right: 10px;
    };
    .business_flexbox_text{
        float: left;
        font-size:14px;
        line-height: 28px;
        margin-block-start:0;
        margin-block-end:0;
        padding-left: 14px;
        color: rgb(51,51,51);
    };
    .business_flexbox_text2{
        float: left;
        font-size:14px;
        line-height: 28px;
        margin-block-start:0;
        margin-block-end:0;
        color: rgb(153,153,153);
    };
    .business_text_percent{
        float: left;
        font-size:24px;
        margin-block-start:0;
        margin-block-end:0;
        position: absolute;
        bottom: -10px;
        padding-left: 30px;
        color: rgb(51,51,51);
    };
    .list_div{
        margin-top: 8px;
        background-color: #FFFFFF;
    };
    .list_box{
        border: #333333;
        border-width: 4px;
        height: 65px;
        padding: 0 6px;
    };
    .list_text1{
        font-size: 15px;
        line-height: 32px;
    };
    .list_text2{
        font-size: 15px;
        line-height: 32px;
        color: rgb(51,51,51);
    };
    .list_text3{
        line-height: 32px;
        font-size: 15px;
    };
    .list_text4{
        font-weight: bold;
        line-height: 32px;
        font-size: 15px;
        color: rgb(76,98,231)
    };
    .text-align_right{
        text-align: right;
    };





</style>
<template>

    <div class="main">
        <van-nav-bar
                :title='title'
                fixed
        />
        <!--      <NavBar :title="title"/>-->
        <div class="content">
            <div class="content">
                <van-tabs v-model="activeName" line-width=104 line-height=3 style="margin-bottom: 0px;padding-bottom: 0">
                    <van-tab title="我的业绩" name="a" style="margin-top: 0px;padding-top: 0" >
                        <div class="business_box">
                            <div class="business_box1">
                                <p class="business_text">商机完成情况</p>
                            </div>
                            <van-row class="business_box2" >
                                <van-col span="12" >
                                    <div >
                                        <p class="business_text2">共领取商机</p>
                                    </div>
                                    <div >
                                        <van-col span="12" class="business_box3"><p class="max_num" style="color: rgb(76,98,231)">51</p></van-col>
                                        <van-col span="2" class="business_box3"><p class="business_text3">条</p></van-col>
                                    </div>
                                </van-col>
                                <van-col span="12" >
                                    <div >
                                        <p class="business_text2">成功转换</p>
                                    </div>
                                    <div >
                                        <van-col span="12" class="business_box3"><p class="max_num" style="color: rgb(247,96,55)">34</p></van-col>
                                        <van-col span="2" class="business_box3"><p class="business_text3">条</p></van-col>
                                    </div>
                                </van-col>
                            </van-row>
                        </div>
                        <!--              1-2div-->
                        <div class="business_box">
                            <div class="business_box1">
                                <p class="business_text">你的排名</p>
                            </div>
                            <van-row class="business_box2" >
                                <van-col span="12" >
                                    <div >
                                        <p class="business_text2" style="padding-left: 14px;">商机成功率在机构排名</p>
                                    </div>
                                    <div >
                                        <van-col span="12" class="business_box3"><p class="max_num" style="color: rgb(76,98,231)">12</p></van-col>
                                        <van-col span="2" class="business_box3"><p class="business_text3">名</p></van-col>
                                    </div>
                                </van-col>
                                <van-col span="12" >
                                    <div >
                                        <p class="business_text2" >本月下降</p>
                                    </div>
                                    <div >
                                        <van-col span="12" class="business_box3"><p class="max_num" style="color: rgb(70,185,72)">6</p></van-col>
                                        <van-col span="2" class="business_box3"><img :src="decrease_img"  class="img" ></van-col>
                                    </div>
                                </van-col>
                            </van-row>
                        </div>
                        <!--              第1-3div-->
                        <div class="business_box_3" style="border-bottom-left-radius: 0;border-bottom-right-radius: 0">
                            <div class="business_box1">
                                <p class="business_text">商机转化</p>
                            </div>
                            <van-row class="business_box2" >
                                <van-col span="8" style="background-color: yellow">
                                    <div >
                                        <p class="business_text2" style="padding-left: 14px;margin-top: 10px">商机成功率</p>
                                    </div>
                                    <div >
                                        <van-col span="12" class="business_box3"><p class="max_num" style="color: rgb(51,51,51);">67</p></van-col>
                                        <van-col span="2" class="business_box3"><p class="business_text_percent">%</p></van-col>
                                    </div>
                                </van-col>
                                <van-col span="8" style="background-color: yellow">
                                    <van-row class="" style="">
                                        <van-col  class="business_box3" span="1"><img :src="navigation"  class="img_navigation" ></van-col>
                                        <van-col  class="business_box3" span="20"><p class="business_text_success">成功</p></van-col>
                                    </van-row>
                                    <van-row class="" >
                                        <van-col class="business_box3" span="1"><img :src="navigation"  class="img_navigation" ></van-col>
                                        <van-col class="business_box3" span="20"><p class="business_text_success">未成功</p></van-col>
                                    </van-row>
                                </van-col>
                                <van-col span="8" >
                                    <img :src="success"  class="" style="height:110px;width: 110px;position: absolute;top: 14px;right: 20px">
                                </van-col>
                                <img :src="pull_down"  class="felx_img" >
                            </van-row>
                        </div>
                        <!--              折叠div-->
                        <div class="business_box" style="border-top-left-radius: 0;border-top-right-radius: 0">
                            <van-row>
                                <van-col span="4"><p class="business_text_flex" >截止：</p></van-col>
                                <van-col span="1"><p class="business_text" style="color: rgb(76,98,231);">09</p></van-col>
                                <van-col span="1"><p class="business_text" >月</p></van-col>
                                <van-col span="1"><p class="business_text" style="color: rgb(76,98,231);">01</p></van-col>
                                <van-col span="1"><p class="business_text" >日</p></van-col>
                            </van-row>
                            <van-row>
                                <van-col span="12"><p class="business_flexbox_text">您名下商机处理情况为</p></van-col>
                            </van-row>
                            <van-row>
                                <van-col span="12"><p class="business_flexbox_text">成功转换累计笔数：</p></van-col>
                                <van-col span="2"><p class="business_flexbox_text2" style="color: rgb(76,98,231)">34</p></van-col>
                                <van-col span="2"><p class="business_flexbox_text2">笔</p></van-col>
                            </van-row>
                            <van-row>
                                <van-col span="12"><p class="business_flexbox_text">待完成累计笔数：</p></van-col>
                                <van-col span="2"><p class="business_flexbox_text2" style="color: rgb(247,96,55)">5</p></van-col>
                                <van-col span="2"><p class="business_flexbox_text2">笔</p></van-col>
                            </van-row>
                            <van-row>
                                <van-col span="12"><p class="business_flexbox_text">放弃累计笔数：</p></van-col>
                                <van-col span="2"><p class="business_flexbox_text2" style="color: rgb(247,96,55)">1</p></van-col>
                                <van-col span="2"><p class="business_flexbox_text2">笔</p></van-col>
                            </van-row>
                            <van-row>
                                <van-col span="12"><p class="business_flexbox_text">失败累计笔数：</p></van-col>
                                <van-col span="2"><p class="business_flexbox_text2" style="color: rgb(102,102,102)">2</p></van-col>
                                <van-col span="2"><p class="business_flexbox_text2">笔</p></van-col>
                            </van-row>
                        </div>
                    </van-tab>
                    <van-tab title="机构业绩" name="b" >机构业绩</van-tab>
                    <van-tab title="客户经理排行榜" name="c" >
                        <van-row style="position: relative;margin-top: 8px;background-color: #FFFFFF;max-height: 143px;padding: 11px 10px">
                            <van-col span="8">
                                <van-row style="height: 60px">
                                    <van-col span=""><img :src="medal"  class="img_medal" ></van-col>
                                    <van-col span=""><p class="tab3_div1_text1" >光荣榜</p></van-col>
                                </van-row>
                                <van-row span="24" style="text-align: center;background-color: aliceblue">
                                    <p class="tab3_div1_text2">第<span class="tab3_div1_text3" >12</span>笔</p>
                                </van-row>
                            </van-col>
                            <van-col  class="" span="8" style="position: relative">
                                <img :src="frame1"  class="img_frame" >
                                <img :src="success"  class="img_frame_head" >
                            </van-col>
                            <van-col span="8">
                                <van-row style="height: 60px">
                                    <p class="tab3_div1_text5" style="color: rgb(51,51,51);">广东省分行</p>
                                    <p class="tab3_div1_text5" >2019年9月</p>
                                </van-row>
                                <van-row style="text-align: center;background-color: aliceblue">
                                    <p class="tab3_div1_text2">成功<span class="tab3_div1_text3">34</span>笔</p>
                                </van-row>
                            </van-col>
                        </van-row>

                        <div class="list_div ">
                            <van-row class="list_box" type="flex" justify="center" style="position: relative">
                                <van-col  class="" span="1"><p class="list_text1" style="color: rgb(247,96,55)">1.</p></van-col>
                                <van-col  class="" span="4" >
                                    <img :src="frame2"  class="img_frame_min" >
                                    <img :src="success"  class="img_frame_head_min" >
                                </van-col>
                                <van-col  class="" span="10"><p class="list_text2" >Selina</p></van-col>
                                <van-col  class="text-align_right" span="9"><p class="list_text3">成功<span class="list_text4">47</span>笔</p></van-col>
                            </van-row>
                            <hr style="size: 1px;width: 95%;color: aliceblue;margin: 0 10px;padding: 0"/>
                            <van-row class="list_box" type="flex" justify="center" style="position: relative">
                                <van-col  class="" span="1"><p class="list_text1" style="color: rgb(169,168,168)">2.</p></van-col>
                                <van-col  class="" span="4" >
                                    <img :src="frame3"  class="img_frame_min" >
                                    <img :src="success"  class="img_frame_head_min" >
                                </van-col>
                                <van-col  class="" span="10"><p class="list_text2">王长生</p></van-col>
                                <van-col  class="text-align_right" span="9"><p class="list_text3">成功<span class="list_text4">45</span>笔</p></van-col>
                            </van-row>
                            <van-row class="list_box" type="flex" justify="center" style="position: relative">
                                <van-col  class="" span="1"><p class="list_text1" style="color: rgb(219,146,65)">3.</p></van-col>
                                <van-col  class="" span="4" >
                                    <img :src="frame4"  class="img_frame_min" >
                                    <img :src="success"  class="img_frame_head_min" >
                                </van-col>
                                <van-col  class="" span="10"><p class="list_text2">赵无极</p></van-col>
                                <van-col  class="text-align_right" span="9" ><p class="list_text3">成功<span class="list_text4">42</span>笔</p></van-col>
                            </van-row>
                            <van-row class="list_box" type="flex" justify="center" style="position: relative">
                                <van-col  class="" span="1"><p class="list_text1" >4.</p></van-col>
                                <van-col  class="" span="4" >
                                    <img :src="success"  class="img_frame_head_min" >
                                </van-col>
                                <van-col  class="" span="10"><p class="list_text2">赵无极</p></van-col>
                                <van-col  class="text-align_right" span="9" ><p class="list_text3">成功<span class="list_text4">42</span>笔</p></van-col>
                            </van-row>
                            <van-row class="list_box" type="flex" justify="center" style="position: relative">
                                <van-col  class="" span="1"><p class="list_text1" >4.</p></van-col>
                                <van-col  class="" span="4" >
                                    <img :src="success"  class="img_frame_head_min" >
                                </van-col>
                                <van-col  class="" span="10"><p class="list_text2">赵无极</p></van-col>
                                <van-col  class="text-align_right" span="9" ><p class="list_text3">成功<span class="list_text4">42</span>笔</p></van-col>
                            </van-row>


                        </div>
                    </van-tab>
                </van-tabs>

            </div>






        </div>






    </div>

</template>

<script>

    //引入组件首字母大写
    import TabBar from '@/components/tabBar'
    // import NavBar from '@/components/tabBar'
    import Vue from 'vue';
    import { Tab, Tabs } from 'vant';
    import { Row, Col } from 'vant';

    Vue.use(Row).use(Col);
    Vue.use(Tab).use(Tabs);
    export default {

        //基础数据存放处
        data (){
            return {
                title : '业绩展示',
                activeName: 'a',
                decrease_img: require('@/assets/image/my/decrease.png'),
                pull_down: require('@/assets/image/my/Pull down 4@2x.png'),
                navigation: require('@/assets/image/my/Navigation circle@2x.png'),
                success: require('@/assets/image/my/wait@2x.png'),
                frame1: require('@/assets/image/my/Picture frame1@2x.png'),
                frame2: require('@/assets/image/my/Picture frame2@2x.png'),
                frame3: require('@/assets/image/my/Picture frame3@2x.png'),
                frame4: require('@/assets/image/my/Picture frame4@2x.png'),
                medal: require('@/assets/image/my/medal.png'),
                // medal: require('@/assets/image/my/medal.png'),
            }
        },

        //数据预加载
        created : function(){

        },

        //网页加载完成
        mounted () {

        },

        //声明方法
        methods : {

            go : function(){
                this.$router.push('/index5/myperformance');
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

<style lang="scss" scoped>
    .main{
        background-color: rgb(238,238,238);

    };
    .img{
        height: 19px;
        width:19px;
        position: absolute;
        bottom: 0;
    };
    .img_medal{
        height: 28px;
        width:28px;
    };
    .felx_img{
        height: 19px;
        width:19px;
        position: absolute;
        bottom: 0;
        left: 50%;
    };
    success_img_box{
        position: relative;
    };
    success_img{
        height: 110px;
        width:110px;
        background-color: brown;
        position: absolute;
        top: -20px;
        right: 0;
    };
    .img_frame{
        height: 80px;
        width:80px;
        position: absolute;
        top: 35px;
        left: 25px;
        z-index: 3;
    };
    .img_frame_head{
        height: 62px;
        width:62px;
        position: absolute;
        top: 42px;
        left: 33px;
        z-index: 2;
    };
    .img_frame_min{
        height: 52px;
        width:52px;
        position: absolute;
        top: 6px;
        left: 25px;
        z-index: 3;
    };
    .img_frame_head_min{
        height: 40px;
        width:40px;
        position: absolute;
        top: 11px;
        left: 31px;
        z-index: 2;
    };
    .img_navigation{
        height: 12px;
        width:12px;
        position: absolute;
        left: 0px;
        top:24px;
    };
    .content{
        background-color: rgb(238,238,238);
    };
    .business_box{
        height:143px;
        width:96%;
        margin-left: 2%;
        margin-right: 2%;
        margin-top: 8px;
        background-color: rgb(255,255,255);
        padding: 0;
        border-radius: 8px;
    };
    .manager_box{
        width:100%;
        margin-top: 8px;
        background-color: rgb(255,255,255);
    };
    manager_box1{
        height:143px;
        width:100%;
        margin-top: 8px;
        padding-left: 11px;
        padding-top: 11px;
        background-color: rgb(255,0,0);
        padding: 0;
    };
    .business_box_3{
        height:143px;
        width:96%;
        margin-left: 2%;
        margin-right: 2%;
        margin-top: 8px;
        background-color: rgb(255,255,255);
        padding: 0;
        border-radius: 8px;
        position: relative;
    };
    .business_box1{
        border-radius: 8px;
        padding: 0;
    };
    .business_box2{
        margin: 0;
        padding: 0;
    };
    .business_box3{
        height: 48px;
        margin: 0;
        padding: 0;
        position: relative;
    };
    .business_box4{
        height: 48px;
        margin: 0;
        padding: 0;
        position: relative;
    };
    .business_text{
        font-family: "Plantagenet Cherokee";
        padding-left:14px ;
        padding-top: 14px;
        font-size:16px;
        font-weight: bold;
        color:rgb(51,51,51);
        margin-block-start:0;
        margin-block-end:0;
    };
    .business_text_flex{
        font-family: "Plantagenet Cherokee";
        padding-left:14px ;
        padding-top: 14px;
        font-size:16px;
        font-weight: bold;
        color:rgb(51,51,51);
        margin-block-start:0;
        margin-block-end:0;
    };
    .max_num{
        font-size:42px;
        font-family: "Palatino Linotype";
        margin-block-start:0;
        margin-block-end:0;
        padding-left: 50px;
    };
    .business_text2{
        font-size:14px;
        margin-block-start:0;
        margin-block-end:0;
        padding-left: 46px;
        margin-top: 6px;
    };
    .business_text3{
        float: left;
        font-size:14px;
        margin-block-start:0;
        margin-block-end:0;
        padding-left: 46px;
        position: absolute;
        left: -42px;
        bottom: 0;
        color: rgb(153,153,153);
    };
    .business_text_success{
        float: left;
        font-size:12px;
        margin-block-start:0;
        margin-block-end:0;
        position: absolute;
        left: 10px;
        top: 22px;
        color: rgb(102,102,102);
    };
    .tab3_div1_text1{
        font-weight: bold;
        font-size:18px;
        line-height: 18px;
        margin-block-start:0;
        margin-block-end:0;
        color: rgb(51,51,51);
    };
    .tab3_div1_box2{
        justify-content: center;
        align-items: center;
        position: relative;
        height: 115px;
        background-color: aqua;
    };
    .tab3_div1_text2{
        font-size:14px;
        margin-block-start:0;
        margin-block-end:0;
        color: rgb(102,102,102);
    };
    .tab3_div1_text5{
        font-size:15px;
        text-align: right;
        line-height: 24px;
        margin-block-start:0;
        margin-block-end:0;
        color: rgb(102,102,102);
    };
    .tab3_div1_text3{
        font-size:42px;
        margin-block-start:0;
        margin-block-end:0;
        color: rgb(76,98,231);
        padding-left:10px ;
        padding-right: 10px;
    };
    .business_flexbox_text{
        float: left;
        font-size:14px;
        line-height: 28px;
        margin-block-start:0;
        margin-block-end:0;
        padding-left: 14px;
        color: rgb(51,51,51);
    };
    .business_flexbox_text2{
        float: left;
        font-size:14px;
        line-height: 28px;
        margin-block-start:0;
        margin-block-end:0;
        color: rgb(153,153,153);
    };
    .business_text_percent{
        float: left;
        font-size:24px;
        margin-block-start:0;
        margin-block-end:0;
        position: absolute;
        bottom: -10px;
        padding-left: 30px;
        color: rgb(51,51,51);
    };
    .list_div{
        margin-top: 8px;
        background-color: #FFFFFF;
    };
    .list_box{
        border: #333333;
        border-width: 4px;
        height: 65px;
        padding: 0 6px;
    };
    .list_text1{
        font-size: 15px;
        line-height: 32px;
    };
    .list_text2{
        font-size: 15px;
        line-height: 32px;
        color: rgb(51,51,51);
    };
    .list_text3{
        line-height: 32px;
        font-size: 15px;
    };
    .list_text4{
        font-weight: bold;
        line-height: 32px;
        font-size: 15px;
        color: rgb(76,98,231)
    };
    .text-align_right{
        text-align: right;
    };





</style>
<template>

    <div class="main">
        <van-nav-bar
                :title='title'
                fixed
        />
        <!--      <NavBar :title="title"/>-->
        <div class="content">
            <div class="content">
                <van-tabs v-model="activeName" line-width=104 line-height=3 style="margin-bottom: 0px;padding-bottom: 0">
                    <van-tab title="我的业绩" name="a" style="margin-top: 0px;padding-top: 0" >
                        <div class="business_box">
                            <div class="business_box1">
                                <p class="business_text">商机完成情况</p>
                            </div>
                            <van-row class="business_box2" >
                                <van-col span="12" >
                                    <div >
                                        <p class="business_text2">共领取商机</p>
                                    </div>
                                    <div >
                                        <van-col span="12" class="business_box3"><p class="max_num" style="color: rgb(76,98,231)">51</p></van-col>
                                        <van-col span="2" class="business_box3"><p class="business_text3">条</p></van-col>
                                    </div>
                                </van-col>
                                <van-col span="12" >
                                    <div >
                                        <p class="business_text2">成功转换</p>
                                    </div>
                                    <div >
                                        <van-col span="12" class="business_box3"><p class="max_num" style="color: rgb(247,96,55)">34</p></van-col>
                                        <van-col span="2" class="business_box3"><p class="business_text3">条</p></van-col>
                                    </div>
                                </van-col>
                            </van-row>
                        </div>
                        <!--              1-2div-->
                        <div class="business_box">
                            <div class="business_box1">
                                <p class="business_text">你的排名</p>
                            </div>
                            <van-row class="business_box2" >
                                <van-col span="12" >
                                    <div >
                                        <p class="business_text2" style="padding-left: 14px;">商机成功率在机构排名</p>
                                    </div>
                                    <div >
                                        <van-col span="12" class="business_box3"><p class="max_num" style="color: rgb(76,98,231)">12</p></van-col>
                                        <van-col span="2" class="business_box3"><p class="business_text3">名</p></van-col>
                                    </div>
                                </van-col>
                                <van-col span="12" >
                                    <div >
                                        <p class="business_text2" >本月下降</p>
                                    </div>
                                    <div >
                                        <van-col span="12" class="business_box3"><p class="max_num" style="color: rgb(70,185,72)">6</p></van-col>
                                        <van-col span="2" class="business_box3"><img :src="decrease_img"  class="img" ></van-col>
                                    </div>
                                </van-col>
                            </van-row>
                        </div>
                        <!--              第1-3div-->
                        <div class="business_box_3" style="border-bottom-left-radius: 0;border-bottom-right-radius: 0">
                            <div class="business_box1">
                                <p class="business_text">商机转化</p>
                            </div>
                            <van-row class="business_box2" >
                                <van-col span="8" style="background-color: yellow">
                                    <div >
                                        <p class="business_text2" style="padding-left: 14px;margin-top: 10px">商机成功率</p>
                                    </div>
                                    <div >
                                        <van-col span="12" class="business_box3"><p class="max_num" style="color: rgb(51,51,51);">67</p></van-col>
                                        <van-col span="2" class="business_box3"><p class="business_text_percent">%</p></van-col>
                                    </div>
                                </van-col>
                                <van-col span="8" style="background-color: yellow">
                                    <van-row class="" style="">
                                        <van-col  class="business_box3" span="1"><img :src="navigation"  class="img_navigation" ></van-col>
                                        <van-col  class="business_box3" span="20"><p class="business_text_success">成功</p></van-col>
                                    </van-row>
                                    <van-row class="" >
                                        <van-col class="business_box3" span="1"><img :src="navigation"  class="img_navigation" ></van-col>
                                        <van-col class="business_box3" span="20"><p class="business_text_success">未成功</p></van-col>
                                    </van-row>
                                </van-col>
                                <van-col span="8" >
                                    <img :src="success"  class="" style="height:110px;width: 110px;position: absolute;top: 14px;right: 20px">
                                </van-col>
                                <img :src="pull_down"  class="felx_img" >
                            </van-row>
                        </div>
                        <!--              折叠div-->
                        <div class="business_box" style="border-top-left-radius: 0;border-top-right-radius: 0">
                            <van-row>
                                <van-col span="4"><p class="business_text_flex" >截止：</p></van-col>
                                <van-col span="1"><p class="business_text" style="color: rgb(76,98,231);">09</p></van-col>
                                <van-col span="1"><p class="business_text" >月</p></van-col>
                                <van-col span="1"><p class="business_text" style="color: rgb(76,98,231);">01</p></van-col>
                                <van-col span="1"><p class="business_text" >日</p></van-col>
                            </van-row>
                            <van-row>
                                <van-col span="12"><p class="business_flexbox_text">您名下商机处理情况为</p></van-col>
                            </van-row>
                            <van-row>
                                <van-col span="12"><p class="business_flexbox_text">成功转换累计笔数：</p></van-col>
                                <van-col span="2"><p class="business_flexbox_text2" style="color: rgb(76,98,231)">34</p></van-col>
                                <van-col span="2"><p class="business_flexbox_text2">笔</p></van-col>
                            </van-row>
                            <van-row>
                                <van-col span="12"><p class="business_flexbox_text">待完成累计笔数：</p></van-col>
                                <van-col span="2"><p class="business_flexbox_text2" style="color: rgb(247,96,55)">5</p></van-col>
                                <van-col span="2"><p class="business_flexbox_text2">笔</p></van-col>
                            </van-row>
                            <van-row>
                                <van-col span="12"><p class="business_flexbox_text">放弃累计笔数：</p></van-col>
                                <van-col span="2"><p class="business_flexbox_text2" style="color: rgb(247,96,55)">1</p></van-col>
                                <van-col span="2"><p class="business_flexbox_text2">笔</p></van-col>
                            </van-row>
                            <van-row>
                                <van-col span="12"><p class="business_flexbox_text">失败累计笔数：</p></van-col>
                                <van-col span="2"><p class="business_flexbox_text2" style="color: rgb(102,102,102)">2</p></van-col>
                                <van-col span="2"><p class="business_flexbox_text2">笔</p></van-col>
                            </van-row>
                        </div>
                    </van-tab>
                    <van-tab title="机构业绩" name="b" >机构业绩</van-tab>
                    <van-tab title="客户经理排行榜" name="c" >
                        <van-row style="position: relative;margin-top: 8px;background-color: #FFFFFF;max-height: 143px;padding: 11px 10px">
                            <van-col span="8">
                                <van-row style="height: 60px">
                                    <van-col span=""><img :src="medal"  class="img_medal" ></van-col>
                                    <van-col span=""><p class="tab3_div1_text1" >光荣榜</p></van-col>
                                </van-row>
                                <van-row span="24" style="text-align: center;background-color: aliceblue">
                                    <p class="tab3_div1_text2">第<span class="tab3_div1_text3" >12</span>笔</p>
                                </van-row>
                            </van-col>
                            <van-col  class="" span="8" style="position: relative">
                                <img :src="frame1"  class="img_frame" >
                                <img :src="success"  class="img_frame_head" >
                            </van-col>
                            <van-col span="8">
                                <van-row style="height: 60px">
                                    <p class="tab3_div1_text5" style="color: rgb(51,51,51);">广东省分行</p>
                                    <p class="tab3_div1_text5" >2019年9月</p>
                                </van-row>
                                <van-row style="text-align: center;background-color: aliceblue">
                                    <p class="tab3_div1_text2">成功<span class="tab3_div1_text3">34</span>笔</p>
                                </van-row>
                            </van-col>
                        </van-row>

                        <div class="list_div ">
                            <van-row class="list_box" type="flex" justify="center" style="position: relative">
                                <van-col  class="" span="1"><p class="list_text1" style="color: rgb(247,96,55)">1.</p></van-col>
                                <van-col  class="" span="4" >
                                    <img :src="frame2"  class="img_frame_min" >
                                    <img :src="success"  class="img_frame_head_min" >
                                </van-col>
                                <van-col  class="" span="10"><p class="list_text2" >Selina</p></van-col>
                                <van-col  class="text-align_right" span="9"><p class="list_text3">成功<span class="list_text4">47</span>笔</p></van-col>
                            </van-row>
                            <hr style="size: 1px;width: 95%;color: aliceblue;margin: 0 10px;padding: 0"/>
                            <van-row class="list_box" type="flex" justify="center" style="position: relative">
                                <van-col  class="" span="1"><p class="list_text1" style="color: rgb(169,168,168)">2.</p></van-col>
                                <van-col  class="" span="4" >
                                    <img :src="frame3"  class="img_frame_min" >
                                    <img :src="success"  class="img_frame_head_min" >
                                </van-col>
                                <van-col  class="" span="10"><p class="list_text2">王长生</p></van-col>
                                <van-col  class="text-align_right" span="9"><p class="list_text3">成功<span class="list_text4">45</span>笔</p></van-col>
                            </van-row>
                            <van-row class="list_box" type="flex" justify="center" style="position: relative">
                                <van-col  class="" span="1"><p class="list_text1" style="color: rgb(219,146,65)">3.</p></van-col>
                                <van-col  class="" span="4" >
                                    <img :src="frame4"  class="img_frame_min" >
                                    <img :src="success"  class="img_frame_head_min" >
                                </van-col>
                                <van-col  class="" span="10"><p class="list_text2">赵无极</p></van-col>
                                <van-col  class="text-align_right" span="9" ><p class="list_text3">成功<span class="list_text4">42</span>笔</p></van-col>
                            </van-row>
                            <van-row class="list_box" type="flex" justify="center" style="position: relative">
                                <van-col  class="" span="1"><p class="list_text1" >4.</p></van-col>
                                <van-col  class="" span="4" >
                                    <img :src="success"  class="img_frame_head_min" >
                                </van-col>
                                <van-col  class="" span="10"><p class="list_text2">赵无极</p></van-col>
                                <van-col  class="text-align_right" span="9" ><p class="list_text3">成功<span class="list_text4">42</span>笔</p></van-col>
                            </van-row>
                            <van-row class="list_box" type="flex" justify="center" style="position: relative">
                                <van-col  class="" span="1"><p class="list_text1" >4.</p></van-col>
                                <van-col  class="" span="4" >
                                    <img :src="success"  class="img_frame_head_min" >
                                </van-col>
                                <van-col  class="" span="10"><p class="list_text2">赵无极</p></van-col>
                                <van-col  class="text-align_right" span="9" ><p class="list_text3">成功<span class="list_text4">42</span>笔</p></van-col>
                            </van-row>


                        </div>
                    </van-tab>
                </van-tabs>

            </div>






        </div>






    </div>

</template>

<script>

    //引入组件首字母大写
    import TabBar from '@/components/tabBar'
    // import NavBar from '@/components/tabBar'
    import Vue from 'vue';
    import { Tab, Tabs } from 'vant';
    import { Row, Col } from 'vant';

    Vue.use(Row).use(Col);
    Vue.use(Tab).use(Tabs);
    export default {

        //基础数据存放处
        data (){
            return {
                title : '业绩展示',
                activeName: 'a',
                decrease_img: require('@/assets/image/my/decrease.png'),
                pull_down: require('@/assets/image/my/Pull down 4@2x.png'),
                navigation: require('@/assets/image/my/Navigation circle@2x.png'),
                success: require('@/assets/image/my/wait@2x.png'),
                frame1: require('@/assets/image/my/Picture frame1@2x.png'),
                frame2: require('@/assets/image/my/Picture frame2@2x.png'),
                frame3: require('@/assets/image/my/Picture frame3@2x.png'),
                frame4: require('@/assets/image/my/Picture frame4@2x.png'),
                medal: require('@/assets/image/my/medal.png'),
                // medal: require('@/assets/image/my/medal.png'),
            }
        },

        //数据预加载
        created : function(){

        },

        //网页加载完成
        mounted () {

        },

        //声明方法
        methods : {

            go : function(){
                this.$router.push('/index5/myperformance');
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

<style lang="scss" scoped>
    .main{
        background-color: rgb(238,238,238);

    };
    .img{
        height: 19px;
        width:19px;
        position: absolute;
        bottom: 0;
    };
    .img_medal{
        height: 28px;
        width:28px;
    };
    .felx_img{
        height: 19px;
        width:19px;
        position: absolute;
        bottom: 0;
        left: 50%;
    };
    success_img_box{
        position: relative;
    };
    success_img{
        height: 110px;
        width:110px;
        background-color: brown;
        position: absolute;
        top: -20px;
        right: 0;
    };
    .img_frame{
        height: 80px;
        width:80px;
        position: absolute;
        top: 35px;
        left: 25px;
        z-index: 3;
    };
    .img_frame_head{
        height: 62px;
        width:62px;
        position: absolute;
        top: 42px;
        left: 33px;
        z-index: 2;
    };
    .img_frame_min{
        height: 52px;
        width:52px;
        position: absolute;
        top: 6px;
        left: 25px;
        z-index: 3;
    };
    .img_frame_head_min{
        height: 40px;
        width:40px;
        position: absolute;
        top: 11px;
        left: 31px;
        z-index: 2;
    };
    .img_navigation{
        height: 12px;
        width:12px;
        position: absolute;
        left: 0px;
        top:24px;
    };
    .content{
        background-color: rgb(238,238,238);
    };
    .business_box{
        height:143px;
        width:96%;
        margin-left: 2%;
        margin-right: 2%;
        margin-top: 8px;
        background-color: rgb(255,255,255);
        padding: 0;
        border-radius: 8px;
    };
    .manager_box{
        width:100%;
        margin-top: 8px;
        background-color: rgb(255,255,255);
    };
    manager_box1{
        height:143px;
        width:100%;
        margin-top: 8px;
        padding-left: 11px;
        padding-top: 11px;
        background-color: rgb(255,0,0);
        padding: 0;
    };
    .business_box_3{
        height:143px;
        width:96%;
        margin-left: 2%;
        margin-right: 2%;
        margin-top: 8px;
        background-color: rgb(255,255,255);
        padding: 0;
        border-radius: 8px;
        position: relative;
    };
    .business_box1{
        border-radius: 8px;
        padding: 0;
    };
    .business_box2{
        margin: 0;
        padding: 0;
    };
    .business_box3{
        height: 48px;
        margin: 0;
        padding: 0;
        position: relative;
    };
    .business_box4{
        height: 48px;
        margin: 0;
        padding: 0;
        position: relative;
    };
    .business_text{
        font-family: "Plantagenet Cherokee";
        padding-left:14px ;
        padding-top: 14px;
        font-size:16px;
        font-weight: bold;
        color:rgb(51,51,51);
        margin-block-start:0;
        margin-block-end:0;
    };
    .business_text_flex{
        font-family: "Plantagenet Cherokee";
        padding-left:14px ;
        padding-top: 14px;
        font-size:16px;
        font-weight: bold;
        color:rgb(51,51,51);
        margin-block-start:0;
        margin-block-end:0;
    };
    .max_num{
        font-size:42px;
        font-family: "Palatino Linotype";
        margin-block-start:0;
        margin-block-end:0;
        padding-left: 50px;
    };
    .business_text2{
        font-size:14px;
        margin-block-start:0;
        margin-block-end:0;
        padding-left: 46px;
        margin-top: 6px;
    };
    .business_text3{
        float: left;
        font-size:14px;
        margin-block-start:0;
        margin-block-end:0;
        padding-left: 46px;
        position: absolute;
        left: -42px;
        bottom: 0;
        color: rgb(153,153,153);
    };
    .business_text_success{
        float: left;
        font-size:12px;
        margin-block-start:0;
        margin-block-end:0;
        position: absolute;
        left: 10px;
        top: 22px;
        color: rgb(102,102,102);
    };
    .tab3_div1_text1{
        font-weight: bold;
        font-size:18px;
        line-height: 18px;
        margin-block-start:0;
        margin-block-end:0;
        color: rgb(51,51,51);
    };
    .tab3_div1_box2{
        justify-content: center;
        align-items: center;
        position: relative;
        height: 115px;
        background-color: aqua;
    };
    .tab3_div1_text2{
        font-size:14px;
        margin-block-start:0;
        margin-block-end:0;
        color: rgb(102,102,102);
    };
    .tab3_div1_text5{
        font-size:15px;
        text-align: right;
        line-height: 24px;
        margin-block-start:0;
        margin-block-end:0;
        color: rgb(102,102,102);
    };
    .tab3_div1_text3{
        font-size:42px;
        margin-block-start:0;
        margin-block-end:0;
        color: rgb(76,98,231);
        padding-left:10px ;
        padding-right: 10px;
    };
    .business_flexbox_text{
        float: left;
        font-size:14px;
        line-height: 28px;
        margin-block-start:0;
        margin-block-end:0;
        padding-left: 14px;
        color: rgb(51,51,51);
    };
    .business_flexbox_text2{
        float: left;
        font-size:14px;
        line-height: 28px;
        margin-block-start:0;
        margin-block-end:0;
        color: rgb(153,153,153);
    };
    .business_text_percent{
        float: left;
        font-size:24px;
        margin-block-start:0;
        margin-block-end:0;
        position: absolute;
        bottom: -10px;
        padding-left: 30px;
        color: rgb(51,51,51);
    };
    .list_div{
        margin-top: 8px;
        background-color: #FFFFFF;
    };
    .list_box{
        border: #333333;
        border-width: 4px;
        height: 65px;
        padding: 0 6px;
    };
    .list_text1{
        font-size: 15px;
        line-height: 32px;
    };
    .list_text2{
        font-size: 15px;
        line-height: 32px;
        color: rgb(51,51,51);
    };
    .list_text3{
        line-height: 32px;
        font-size: 15px;
    };
    .list_text4{
        font-weight: bold;
        line-height: 32px;
        font-size: 15px;
        color: rgb(76,98,231)
    };
    .text-align_right{
        text-align: right;
    };





</style>
<template>

    <div class="main">
        <van-nav-bar
                :title='title'
                fixed
        />
        <!--      <NavBar :title="title"/>-->
        <div class="content">
            <div class="content">
                <van-tabs v-model="activeName" line-width=104 line-height=3 style="margin-bottom: 0px;padding-bottom: 0">
                    <van-tab title="我的业绩" name="a" style="margin-top: 0px;padding-top: 0" >
                        <div class="business_box">
                            <div class="business_box1">
                                <p class="business_text">商机完成情况</p>
                            </div>
                            <van-row class="business_box2" >
                                <van-col span="12" >
                                    <div >
                                        <p class="business_text2">共领取商机</p>
                                    </div>
                                    <div >
                                        <van-col span="12" class="business_box3"><p class="max_num" style="color: rgb(76,98,231)">51</p></van-col>
                                        <van-col span="2" class="business_box3"><p class="business_text3">条</p></van-col>
                                    </div>
                                </van-col>
                                <van-col span="12" >
                                    <div >
                                        <p class="business_text2">成功转换</p>
                                    </div>
                                    <div >
                                        <van-col span="12" class="business_box3"><p class="max_num" style="color: rgb(247,96,55)">34</p></van-col>
                                        <van-col span="2" class="business_box3"><p class="business_text3">条</p></van-col>
                                    </div>
                                </van-col>
                            </van-row>
                        </div>
                        <!--              1-2div-->
                        <div class="business_box">
                            <div class="business_box1">
                                <p class="business_text">你的排名</p>
                            </div>
                            <van-row class="business_box2" >
                                <van-col span="12" >
                                    <div >
                                        <p class="business_text2" style="padding-left: 14px;">商机成功率在机构排名</p>
                                    </div>
                                    <div >
                                        <van-col span="12" class="business_box3"><p class="max_num" style="color: rgb(76,98,231)">12</p></van-col>
                                        <van-col span="2" class="business_box3"><p class="business_text3">名</p></van-col>
                                    </div>
                                </van-col>
                                <van-col span="12" >
                                    <div >
                                        <p class="business_text2" >本月下降</p>
                                    </div>
                                    <div >
                                        <van-col span="12" class="business_box3"><p class="max_num" style="color: rgb(70,185,72)">6</p></van-col>
                                        <van-col span="2" class="business_box3"><img :src="decrease_img"  class="img" ></van-col>
                                    </div>
                                </van-col>
                            </van-row>
                        </div>
                        <!--              第1-3div-->
                        <div class="business_box_3" style="border-bottom-left-radius: 0;border-bottom-right-radius: 0">
                            <div class="business_box1">
                                <p class="business_text">商机转化</p>
                            </div>
                            <van-row class="business_box2" >
                                <van-col span="8" style="background-color: yellow">
                                    <div >
                                        <p class="business_text2" style="padding-left: 14px;margin-top: 10px">商机成功率</p>
                                    </div>
                                    <div >
                                        <van-col span="12" class="business_box3"><p class="max_num" style="color: rgb(51,51,51);">67</p></van-col>
                                        <van-col span="2" class="business_box3"><p class="business_text_percent">%</p></van-col>
                                    </div>
                                </van-col>
                                <van-col span="8" style="background-color: yellow">
                                    <van-row class="" style="">
                                        <van-col  class="business_box3" span="1"><img :src="navigation"  class="img_navigation" ></van-col>
                                        <van-col  class="business_box3" span="20"><p class="business_text_success">成功</p></van-col>
                                    </van-row>
                                    <van-row class="" >
                                        <van-col class="business_box3" span="1"><img :src="navigation"  class="img_navigation" ></van-col>
                                        <van-col class="business_box3" span="20"><p class="business_text_success">未成功</p></van-col>
                                    </van-row>
                                </van-col>
                                <van-col span="8" >
                                    <img :src="success"  class="" style="height:110px;width: 110px;position: absolute;top: 14px;right: 20px">
                                </van-col>
                                <img :src="pull_down"  class="felx_img" >
                            </van-row>
                        </div>
                        <!--              折叠div-->
                        <div class="business_box" style="border-top-left-radius: 0;border-top-right-radius: 0">
                            <van-row>
                                <van-col span="4"><p class="business_text_flex" >截止：</p></van-col>
                                <van-col span="1"><p class="business_text" style="color: rgb(76,98,231);">09</p></van-col>
                                <van-col span="1"><p class="business_text" >月</p></van-col>
                                <van-col span="1"><p class="business_text" style="color: rgb(76,98,231);">01</p></van-col>
                                <van-col span="1"><p class="business_text" >日</p></van-col>
                            </van-row>
                            <van-row>
                                <van-col span="12"><p class="business_flexbox_text">您名下商机处理情况为</p></van-col>
                            </van-row>
                            <van-row>
                                <van-col span="12"><p class="business_flexbox_text">成功转换累计笔数：</p></van-col>
                                <van-col span="2"><p class="business_flexbox_text2" style="color: rgb(76,98,231)">34</p></van-col>
                                <van-col span="2"><p class="business_flexbox_text2">笔</p></van-col>
                            </van-row>
                            <van-row>
                                <van-col span="12"><p class="business_flexbox_text">待完成累计笔数：</p></van-col>
                                <van-col span="2"><p class="business_flexbox_text2" style="color: rgb(247,96,55)">5</p></van-col>
                                <van-col span="2"><p class="business_flexbox_text2">笔</p></van-col>
                            </van-row>
                            <van-row>
                                <van-col span="12"><p class="business_flexbox_text">放弃累计笔数：</p></van-col>
                                <van-col span="2"><p class="business_flexbox_text2" style="color: rgb(247,96,55)">1</p></van-col>
                                <van-col span="2"><p class="business_flexbox_text2">笔</p></van-col>
                            </van-row>
                            <van-row>
                                <van-col span="12"><p class="business_flexbox_text">失败累计笔数：</p></van-col>
                                <van-col span="2"><p class="business_flexbox_text2" style="color: rgb(102,102,102)">2</p></van-col>
                                <van-col span="2"><p class="business_flexbox_text2">笔</p></van-col>
                            </van-row>
                        </div>
                    </van-tab>
                    <van-tab title="机构业绩" name="b" >机构业绩</van-tab>
                    <van-tab title="客户经理排行榜" name="c" >
                        <van-row style="position: relative;margin-top: 8px;background-color: #FFFFFF;max-height: 143px;padding: 11px 10px">
                            <van-col span="8">
                                <van-row style="height: 60px">
                                    <van-col span=""><img :src="medal"  class="img_medal" ></van-col>
                                    <van-col span=""><p class="tab3_div1_text1" >光荣榜</p></van-col>
                                </van-row>
                                <van-row span="24" style="text-align: center;background-color: aliceblue">
                                    <p class="tab3_div1_text2">第<span class="tab3_div1_text3" >12</span>笔</p>
                                </van-row>
                            </van-col>
                            <van-col  class="" span="8" style="position: relative">
                                <img :src="frame1"  class="img_frame" >
                                <img :src="success"  class="img_frame_head" >
                            </van-col>
                            <van-col span="8">
                                <van-row style="height: 60px">
                                    <p class="tab3_div1_text5" style="color: rgb(51,51,51);">广东省分行</p>
                                    <p class="tab3_div1_text5" >2019年9月</p>
                                </van-row>
                                <van-row style="text-align: center;background-color: aliceblue">
                                    <p class="tab3_div1_text2">成功<span class="tab3_div1_text3">34</span>笔</p>
                                </van-row>
                            </van-col>
                        </van-row>

                        <div class="list_div ">
                            <van-row class="list_box" type="flex" justify="center" style="position: relative">
                                <van-col  class="" span="1"><p class="list_text1" style="color: rgb(247,96,55)">1.</p></van-col>
                                <van-col  class="" span="4" >
                                    <img :src="frame2"  class="img_frame_min" >
                                    <img :src="success"  class="img_frame_head_min" >
                                </van-col>
                                <van-col  class="" span="10"><p class="list_text2" >Selina</p></van-col>
                                <van-col  class="text-align_right" span="9"><p class="list_text3">成功<span class="list_text4">47</span>笔</p></van-col>
                            </van-row>
                            <hr style="size: 1px;width: 95%;color: aliceblue;margin: 0 10px;padding: 0"/>
                            <van-row class="list_box" type="flex" justify="center" style="position: relative">
                                <van-col  class="" span="1"><p class="list_text1" style="color: rgb(169,168,168)">2.</p></van-col>
                                <van-col  class="" span="4" >
                                    <img :src="frame3"  class="img_frame_min" >
                                    <img :src="success"  class="img_frame_head_min" >
                                </van-col>
                                <van-col  class="" span="10"><p class="list_text2">王长生</p></van-col>
                                <van-col  class="text-align_right" span="9"><p class="list_text3">成功<span class="list_text4">45</span>笔</p></van-col>
                            </van-row>
                            <van-row class="list_box" type="flex" justify="center" style="position: relative">
                                <van-col  class="" span="1"><p class="list_text1" style="color: rgb(219,146,65)">3.</p></van-col>
                                <van-col  class="" span="4" >
                                    <img :src="frame4"  class="img_frame_min" >
                                    <img :src="success"  class="img_frame_head_min" >
                                </van-col>
                                <van-col  class="" span="10"><p class="list_text2">赵无极</p></van-col>
                                <van-col  class="text-align_right" span="9" ><p class="list_text3">成功<span class="list_text4">42</span>笔</p></van-col>
                            </van-row>
                            <van-row class="list_box" type="flex" justify="center" style="position: relative">
                                <van-col  class="" span="1"><p class="list_text1" >4.</p></van-col>
                                <van-col  class="" span="4" >
                                    <img :src="success"  class="img_frame_head_min" >
                                </van-col>
                                <van-col  class="" span="10"><p class="list_text2">赵无极</p></van-col>
                                <van-col  class="text-align_right" span="9" ><p class="list_text3">成功<span class="list_text4">42</span>笔</p></van-col>
                            </van-row>
                            <van-row class="list_box" type="flex" justify="center" style="position: relative">
                                <van-col  class="" span="1"><p class="list_text1" >4.</p></van-col>
                                <van-col  class="" span="4" >
                                    <img :src="success"  class="img_frame_head_min" >
                                </van-col>
                                <van-col  class="" span="10"><p class="list_text2">赵无极</p></van-col>
                                <van-col  class="text-align_right" span="9" ><p class="list_text3">成功<span class="list_text4">42</span>笔</p></van-col>
                            </van-row>


                        </div>
                    </van-tab>
                </van-tabs>

            </div>






        </div>






    </div>

</template>

<script>

    //引入组件首字母大写
    // import TabBar from '@/components/tabBar'
    import NavBar from '@/components/tabBar'
    import Vue from 'vue';
    import { Tab, Tabs ,Row, Col} from 'vant';

    Vue.use(Row).use(Col);
    Vue.use(Tab).use(Tabs);
    export default {

        //基础数据存放处
        data (){
            return {
                title : '业绩展示',
                activeName: 'a',
                decrease_img: require('@/assets/image/my/decrease.png'),
                pull_down: require('@/assets/image/my/Pull down 4@2x.png'),
                navigation: require('@/assets/image/my/Navigation circle@2x.png'),
                success: require('@/assets/image/my/wait@2x.png'),
                frame1: require('@/assets/image/my/Picture frame1@2x.png'),
                frame2: require('@/assets/image/my/Picture frame2@2x.png'),
                frame3: require('@/assets/image/my/Picture frame3@2x.png'),
                frame4: require('@/assets/image/my/Picture frame4@2x.png'),
                medal: require('@/assets/image/my/medal.png'),
                // medal: require('@/assets/image/my/medal.png'),
            }
        },

        //数据预加载
        created : function(){

        },

        //网页加载完成
        mounted () {

        },

        //声明方法
        methods : {

            go : function(){
                this.$router.push('/index5/myperformance');
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

<style lang="scss" scoped>
    .main{
        background-color: rgb(238,238,238);

    };
    .img{
        height: 19px;
        width:19px;
        position: absolute;
        bottom: 0;
    };
    .img_medal{
        height: 28px;
        width:28px;
    };
    .felx_img{
        height: 19px;
        width:19px;
        position: absolute;
        bottom: 0;
        left: 50%;
    };
    success_img_box{
        position: relative;
    };
    success_img{
        height: 110px;
        width:110px;
        background-color: brown;
        position: absolute;
        top: -20px;
        right: 0;
    };
    .img_frame{
        height: 80px;
        width:80px;
        position: absolute;
        top: 35px;
        left: 25px;
        z-index: 3;
    };
    .img_frame_head{
        height: 62px;
        width:62px;
        position: absolute;
        top: 42px;
        left: 33px;
        z-index: 2;
    };
    .img_frame_min{
        height: 52px;
        width:52px;
        position: absolute;
        top: 6px;
        left: 25px;
        z-index: 3;
    };
    .img_frame_head_min{
        height: 40px;
        width:40px;
        position: absolute;
        top: 11px;
        left: 31px;
        z-index: 2;
    };
    .img_navigation{
        height: 12px;
        width:12px;
        position: absolute;
        left: 0px;
        top:24px;
    };
    .content{
        background-color: rgb(238,238,238);
    };
    .business_box{
        height:143px;
        width:96%;
        margin-left: 2%;
        margin-right: 2%;
        margin-top: 8px;
        background-color: rgb(255,255,255);
        padding: 0;
        border-radius: 8px;
    };
    .manager_box{
        width:100%;
        margin-top: 8px;
        background-color: rgb(255,255,255);
    };
    manager_box1{
        height:143px;
        width:100%;
        margin-top: 8px;
        padding-left: 11px;
        padding-top: 11px;
        background-color: rgb(255,0,0);
        padding: 0;
    };
    .business_box_3{
        height:143px;
        width:96%;
        margin-left: 2%;
        margin-right: 2%;
        margin-top: 8px;
        background-color: rgb(255,255,255);
        padding: 0;
        border-radius: 8px;
        position: relative;
    };
    .business_box1{
        border-radius: 8px;
        padding: 0;
    };
    .business_box2{
        margin: 0;
        padding: 0;
    };
    .business_box3{
        height: 48px;
        margin: 0;
        padding: 0;
        position: relative;
    };
    .business_box4{
        height: 48px;
        margin: 0;
        padding: 0;
        position: relative;
    };
    .business_text{
        font-family: "Plantagenet Cherokee";
        padding-left:14px ;
        padding-top: 14px;
        font-size:16px;
        font-weight: bold;
        color:rgb(51,51,51);
        margin-block-start:0;
        margin-block-end:0;
    };
    .business_text_flex{
        font-family: "Plantagenet Cherokee";
        padding-left:14px ;
        padding-top: 14px;
        font-size:16px;
        font-weight: bold;
        color:rgb(51,51,51);
        margin-block-start:0;
        margin-block-end:0;
    };
    .max_num{
        font-size:42px;
        font-family: "Palatino Linotype";
        margin-block-start:0;
        margin-block-end:0;
        padding-left: 50px;
    };
    .business_text2{
        font-size:14px;
        margin-block-start:0;
        margin-block-end:0;
        padding-left: 46px;
        margin-top: 6px;
    };
    .business_text3{
        float: left;
        font-size:14px;
        margin-block-start:0;
        margin-block-end:0;
        padding-left: 46px;
        position: absolute;
        left: -42px;
        bottom: 0;
        color: rgb(153,153,153);
    };
    .business_text_success{
        float: left;
        font-size:12px;
        margin-block-start:0;
        margin-block-end:0;
        position: absolute;
        left: 10px;
        top: 22px;
        color: rgb(102,102,102);
    };
    .tab3_div1_text1{
        font-weight: bold;
        font-size:18px;
        line-height: 18px;
        margin-block-start:0;
        margin-block-end:0;
        color: rgb(51,51,51);
    };
    .tab3_div1_box2{
        justify-content: center;
        align-items: center;
        position: relative;
        height: 115px;
        background-color: aqua;
    };
    .tab3_div1_text2{
        font-size:14px;
        margin-block-start:0;
        margin-block-end:0;
        color: rgb(102,102,102);
    };
    .tab3_div1_text5{
        font-size:15px;
        text-align: right;
        line-height: 24px;
        margin-block-start:0;
        margin-block-end:0;
        color: rgb(102,102,102);
    };
    .tab3_div1_text3{
        font-size:42px;
        margin-block-start:0;
        margin-block-end:0;
        color: rgb(76,98,231);
        padding-left:10px ;
        padding-right: 10px;
    };
    .business_flexbox_text{
        float: left;
        font-size:14px;
        line-height: 28px;
        margin-block-start:0;
        margin-block-end:0;
        padding-left: 14px;
        color: rgb(51,51,51);
    };
    .business_flexbox_text2{
        float: left;
        font-size:14px;
        line-height: 28px;
        margin-block-start:0;
        margin-block-end:0;
        color: rgb(153,153,153);
    };
    .business_text_percent{
        float: left;
        font-size:24px;
        margin-block-start:0;
        margin-block-end:0;
        position: absolute;
        bottom: -10px;
        padding-left: 30px;
        color: rgb(51,51,51);
    };
    .list_div{
        margin-top: 8px;
        background-color: #FFFFFF;
    };
    .list_box{
        border: #333333;
        border-width: 4px;
        height: 65px;
        padding: 0 6px;
    };
    .list_text1{
        font-size: 15px;
        line-height: 32px;
    };
    .list_text2{
        font-size: 15px;
        line-height: 32px;
        color: rgb(51,51,51);
    };
    .list_text3{
        line-height: 32px;
        font-size: 15px;
    };
    .list_text4{
        font-weight: bold;
        line-height: 32px;
        font-size: 15px;
        color: rgb(76,98,231)
    };
    .text-align_right{
        text-align: right;
    };





</style>
<template>

    <div class="main">
        <van-nav-bar
                :title='title'
                fixed
        />
        <!--      <NavBar :title="title"/>-->
        <div class="content">
            <div class="content">
                <van-tabs v-model="activeName" line-width=104 line-height=3 style="margin-bottom: 0px;padding-bottom: 0">
                    <van-tab title="我的业绩" name="a" style="margin-top: 0px;padding-top: 0" >
                        <div class="business_box">
                            <div class="business_box1">
                                <p class="business_text">商机完成情况</p>
                            </div>
                            <van-row class="business_box2" >
                                <van-col span="12" >
                                    <div >
                                        <p class="business_text2">共领取商机</p>
                                    </div>
                                    <div >
                                        <van-col span="12" class="business_box3"><p class="max_num" style="color: rgb(76,98,231)">51</p></van-col>
                                        <van-col span="2" class="business_box3"><p class="business_text3">条</p></van-col>
                                    </div>
                                </van-col>
                                <van-col span="12" >
                                    <div >
                                        <p class="business_text2">成功转换</p>
                                    </div>
                                    <div >
                                        <van-col span="12" class="business_box3"><p class="max_num" style="color: rgb(247,96,55)">34</p></van-col>
                                        <van-col span="2" class="business_box3"><p class="business_text3">条</p></van-col>
                                    </div>
                                </van-col>
                            </van-row>
                        </div>
                        <!--              1-2div-->
                        <div class="business_box">
                            <div class="business_box1">
                                <p class="business_text">你的排名</p>
                            </div>
                            <van-row class="business_box2" >
                                <van-col span="12" >
                                    <div >
                                        <p class="business_text2" style="padding-left: 14px;">商机成功率在机构排名</p>
                                    </div>
                                    <div >
                                        <van-col span="12" class="business_box3"><p class="max_num" style="color: rgb(76,98,231)">12</p></van-col>
                                        <van-col span="2" class="business_box3"><p class="business_text3">名</p></van-col>
                                    </div>
                                </van-col>
                                <van-col span="12" >
                                    <div >
                                        <p class="business_text2" >本月下降</p>
                                    </div>
                                    <div >
                                        <van-col span="12" class="business_box3"><p class="max_num" style="color: rgb(70,185,72)">6</p></van-col>
                                        <van-col span="2" class="business_box3"><img :src="decrease_img"  class="img" ></van-col>
                                    </div>
                                </van-col>
                            </van-row>
                        </div>
                        <!--              第1-3div-->
                        <div class="business_box_3" style="border-bottom-left-radius: 0;border-bottom-right-radius: 0">
                            <div class="business_box1">
                                <p class="business_text">商机转化</p>
                            </div>
                            <van-row class="business_box2" >
                                <van-col span="8" style="background-color: yellow">
                                    <div >
                                        <p class="business_text2" style="padding-left: 14px;margin-top: 10px">商机成功率</p>
                                    </div>
                                    <div >
                                        <van-col span="12" class="business_box3"><p class="max_num" style="color: rgb(51,51,51);">67</p></van-col>
                                        <van-col span="2" class="business_box3"><p class="business_text_percent">%</p></van-col>
                                    </div>
                                </van-col>
                                <van-col span="8" style="background-color: yellow">
                                    <van-row class="" style="">
                                        <van-col  class="business_box3" span="1"><img :src="navigation"  class="img_navigation" ></van-col>
                                        <van-col  class="business_box3" span="20"><p class="business_text_success">成功</p></van-col>
                                    </van-row>
                                    <van-row class="" >
                                        <van-col class="business_box3" span="1"><img :src="navigation"  class="img_navigation" ></van-col>
                                        <van-col class="business_box3" span="20"><p class="business_text_success">未成功</p></van-col>
                                    </van-row>
                                </van-col>
                                <van-col span="8" >
                                    <img :src="success"  class="" style="height:110px;width: 110px;position: absolute;top: 14px;right: 20px">
                                </van-col>
                                <img :src="pull_down"  class="felx_img" >
                            </van-row>
                        </div>
                        <!--              折叠div-->
                        <div class="business_box" style="border-top-left-radius: 0;border-top-right-radius: 0">
                            <van-row>
                                <van-col span="4"><p class="business_text_flex" >截止：</p></van-col>
                                <van-col span="1"><p class="business_text" style="color: rgb(76,98,231);">09</p></van-col>
                                <van-col span="1"><p class="business_text" >月</p></van-col>
                                <van-col span="1"><p class="business_text" style="color: rgb(76,98,231);">01</p></van-col>
                                <van-col span="1"><p class="business_text" >日</p></van-col>
                            </van-row>
                            <van-row>
                                <van-col span="12"><p class="business_flexbox_text">您名下商机处理情况为</p></van-col>
                            </van-row>
                            <van-row>
                                <van-col span="12"><p class="business_flexbox_text">成功转换累计笔数：</p></van-col>
                                <van-col span="2"><p class="business_flexbox_text2" style="color: rgb(76,98,231)">34</p></van-col>
                                <van-col span="2"><p class="business_flexbox_text2">笔</p></van-col>
                            </van-row>
                            <van-row>
                                <van-col span="12"><p class="business_flexbox_text">待完成累计笔数：</p></van-col>
                                <van-col span="2"><p class="business_flexbox_text2" style="color: rgb(247,96,55)">5</p></van-col>
                                <van-col span="2"><p class="business_flexbox_text2">笔</p></van-col>
                            </van-row>
                            <van-row>
                                <van-col span="12"><p class="business_flexbox_text">放弃累计笔数：</p></van-col>
                                <van-col span="2"><p class="business_flexbox_text2" style="color: rgb(247,96,55)">1</p></van-col>
                                <van-col span="2"><p class="business_flexbox_text2">笔</p></van-col>
                            </van-row>
                            <van-row>
                                <van-col span="12"><p class="business_flexbox_text">失败累计笔数：</p></van-col>
                                <van-col span="2"><p class="business_flexbox_text2" style="color: rgb(102,102,102)">2</p></van-col>
                                <van-col span="2"><p class="business_flexbox_text2">笔</p></van-col>
                            </van-row>
                        </div>
                    </van-tab>
                    <van-tab title="机构业绩" name="b" >机构业绩</van-tab>
                    <van-tab title="客户经理排行榜" name="c" >
                        <van-row style="position: relative;margin-top: 8px;background-color: #FFFFFF;max-height: 143px;padding: 11px 10px">
                            <van-col span="8">
                                <van-row style="height: 60px">
                                    <van-col span=""><img :src="medal"  class="img_medal" ></van-col>
                                    <van-col span=""><p class="tab3_div1_text1" >光荣榜</p></van-col>
                                </van-row>
                                <van-row span="24" style="text-align: center;background-color: aliceblue">
                                    <p class="tab3_div1_text2">第<span class="tab3_div1_text3" >12</span>笔</p>
                                </van-row>
                            </van-col>
                            <van-col  class="" span="8" style="position: relative">
                                <img :src="frame1"  class="img_frame" >
                                <img :src="success"  class="img_frame_head" >
                            </van-col>
                            <van-col span="8">
                                <van-row style="height: 60px">
                                    <p class="tab3_div1_text5" style="color: rgb(51,51,51);">广东省分行</p>
                                    <p class="tab3_div1_text5" >2019年9月</p>
                                </van-row>
                                <van-row style="text-align: center;background-color: aliceblue">
                                    <p class="tab3_div1_text2">成功<span class="tab3_div1_text3">34</span>笔</p>
                                </van-row>
                            </van-col>
                        </van-row>

                        <div class="list_div ">
                            <van-row class="list_box" type="flex" justify="center" style="position: relative">
                                <van-col  class="" span="1"><p class="list_text1" style="color: rgb(247,96,55)">1.</p></van-col>
                                <van-col  class="" span="4" >
                                    <img :src="frame2"  class="img_frame_min" >
                                    <img :src="success"  class="img_frame_head_min" >
                                </van-col>
                                <van-col  class="" span="10"><p class="list_text2" >Selina</p></van-col>
                                <van-col  class="text-align_right" span="9"><p class="list_text3">成功<span class="list_text4">47</span>笔</p></van-col>
                            </van-row>
                            <hr style="size: 1px;width: 95%;color: aliceblue;margin: 0 10px;padding: 0"/>
                            <van-row class="list_box" type="flex" justify="center" style="position: relative">
                                <van-col  class="" span="1"><p class="list_text1" style="color: rgb(169,168,168)">2.</p></van-col>
                                <van-col  class="" span="4" >
                                    <img :src="frame3"  class="img_frame_min" >
                                    <img :src="success"  class="img_frame_head_min" >
                                </van-col>
                                <van-col  class="" span="10"><p class="list_text2">王长生</p></van-col>
                                <van-col  class="text-align_right" span="9"><p class="list_text3">成功<span class="list_text4">45</span>笔</p></van-col>
                            </van-row>
                            <van-row class="list_box" type="flex" justify="center" style="position: relative">
                                <van-col  class="" span="1"><p class="list_text1" style="color: rgb(219,146,65)">3.</p></van-col>
                                <van-col  class="" span="4" >
                                    <img :src="frame4"  class="img_frame_min" >
                                    <img :src="success"  class="img_frame_head_min" >
                                </van-col>
                                <van-col  class="" span="10"><p class="list_text2">赵无极</p></van-col>
                                <van-col  class="text-align_right" span="9" ><p class="list_text3">成功<span class="list_text4">42</span>笔</p></van-col>
                            </van-row>
                            <van-row class="list_box" type="flex" justify="center" style="position: relative">
                                <van-col  class="" span="1"><p class="list_text1" >4.</p></van-col>
                                <van-col  class="" span="4" >
                                    <img :src="success"  class="img_frame_head_min" >
                                </van-col>
                                <van-col  class="" span="10"><p class="list_text2">赵无极</p></van-col>
                                <van-col  class="text-align_right" span="9" ><p class="list_text3">成功<span class="list_text4">42</span>笔</p></van-col>
                            </van-row>
                            <van-row class="list_box" type="flex" justify="center" style="position: relative">
                                <van-col  class="" span="1"><p class="list_text1" >4.</p></van-col>
                                <van-col  class="" span="4" >
                                    <img :src="success"  class="img_frame_head_min" >
                                </van-col>
                                <van-col  class="" span="10"><p class="list_text2">赵无极</p></van-col>
                                <van-col  class="text-align_right" span="9" ><p class="list_text3">成功<span class="list_text4">42</span>笔</p></van-col>
                            </van-row>


                        </div>
                    </van-tab>
                </van-tabs>

            </div>






        </div>






    </div>

</template>

<script>

    //引入组件首字母大写
    import TabBar from '@/components/tabBar'
    // import NavBar from '@/components/tabBar'
    import Vue from 'vue';
    import { Tab, Tabs } from 'vant';
    import { Row, Col } from 'vant';

    Vue.use(Row).use(Col);
    Vue.use(Tab).use(Tabs);
    export default {

        //基础数据存放处
        data (){
            return {
                title : '业绩展示',
                activeName: 'a',
                decrease_img: require('@/assets/image/my/decrease.png'),
                pull_down: require('@/assets/image/my/Pull down 4@2x.png'),
                navigation: require('@/assets/image/my/Navigation circle@2x.png'),
                success: require('@/assets/image/my/wait@2x.png'),
                frame1: require('@/assets/image/my/Picture frame1@2x.png'),
                frame2: require('@/assets/image/my/Picture frame2@2x.png'),
                frame3: require('@/assets/image/my/Picture frame3@2x.png'),
                frame4: require('@/assets/image/my/Picture frame4@2x.png'),
                medal: require('@/assets/image/my/medal.png'),
                // medal: require('@/assets/image/my/medal.png'),
            }
        },

        //数据预加载
        created : function(){

        },

        //网页加载完成
        mounted () {

        },

        //声明方法
        methods : {

            go : function(){
                this.$router.push('/index5/myperformance');
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

<style lang="scss" scoped>
    .main{
        background-color: rgb(238,238,238);

    };
    .img{
        height: 19px;
        width:19px;
        position: absolute;
        bottom: 0;
    };
    .img_medal{
        height: 28px;
        width:28px;
    };
    .felx_img{
        height: 19px;
        width:19px;
        position: absolute;
        bottom: 0;
        left: 50%;
    };
    success_img_box{
        position: relative;
    };
    success_img{
        height: 110px;
        width:110px;
        background-color: brown;
        position: absolute;
        top: -20px;
        right: 0;
    };
    .img_frame{
        height: 80px;
        width:80px;
        position: absolute;
        top: 35px;
        left: 25px;
        z-index: 3;
    };
    .img_frame_head{
        height: 62px;
        width:62px;
        position: absolute;
        top: 42px;
        left: 33px;
        z-index: 2;
    };
    .img_frame_min{
        height: 52px;
        width:52px;
        position: absolute;
        top: 6px;
        left: 25px;
        z-index: 3;
    };
    .img_frame_head_min{
        height: 40px;
        width:40px;
        position: absolute;
        top: 11px;
        left: 31px;
        z-index: 2;
    };
    .img_navigation{
        height: 12px;
        width:12px;
        position: absolute;
        left: 0px;
        top:24px;
    };
    .content{
        background-color: rgb(238,238,238);
    };
    .business_box{
        height:143px;
        width:96%;
        margin-left: 2%;
        margin-right: 2%;
        margin-top: 8px;
        background-color: rgb(255,255,255);
        padding: 0;
        border-radius: 8px;
    };
    .manager_box{
        width:100%;
        margin-top: 8px;
        background-color: rgb(255,255,255);
    };
    manager_box1{
        height:143px;
        width:100%;
        margin-top: 8px;
        padding-left: 11px;
        padding-top: 11px;
        background-color: rgb(255,0,0);
        padding: 0;
    };
    .business_box_3{
        height:143px;
        width:96%;
        margin-left: 2%;
        margin-right: 2%;
        margin-top: 8px;
        background-color: rgb(255,255,255);
        padding: 0;
        border-radius: 8px;
        position: relative;
    };
    .business_box1{
        border-radius: 8px;
        padding: 0;
    };
    .business_box2{
        margin: 0;
        padding: 0;
    };
    .business_box3{
        height: 48px;
        margin: 0;
        padding: 0;
        position: relative;
    };
    .business_box4{
        height: 48px;
        margin: 0;
        padding: 0;
        position: relative;
    };
    .business_text{
        font-family: "Plantagenet Cherokee";
        padding-left:14px ;
        padding-top: 14px;
        font-size:16px;
        font-weight: bold;
        color:rgb(51,51,51);
        margin-block-start:0;
        margin-block-end:0;
    };
    .business_text_flex{
        font-family: "Plantagenet Cherokee";
        padding-left:14px ;
        padding-top: 14px;
        font-size:16px;
        font-weight: bold;
        color:rgb(51,51,51);
        margin-block-start:0;
        margin-block-end:0;
    };
    .max_num{
        font-size:42px;
        font-family: "Palatino Linotype";
        margin-block-start:0;
        margin-block-end:0;
        padding-left: 50px;
    };
    .business_text2{
        font-size:14px;
        margin-block-start:0;
        margin-block-end:0;
        padding-left: 46px;
        margin-top: 6px;
    };
    .business_text3{
        float: left;
        font-size:14px;
        margin-block-start:0;
        margin-block-end:0;
        padding-left: 46px;
        position: absolute;
        left: -42px;
        bottom: 0;
        color: rgb(153,153,153);
    };
    .business_text_success{
        float: left;
        font-size:12px;
        margin-block-start:0;
        margin-block-end:0;
        position: absolute;
        left: 10px;
        top: 22px;
        color: rgb(102,102,102);
    };
    .tab3_div1_text1{
        font-weight: bold;
        font-size:18px;
        line-height: 18px;
        margin-block-start:0;
        margin-block-end:0;
        color: rgb(51,51,51);
    };
    .tab3_div1_box2{
        justify-content: center;
        align-items: center;
        position: relative;
        height: 115px;
        background-color: aqua;
    };
    .tab3_div1_text2{
        font-size:14px;
        margin-block-start:0;
        margin-block-end:0;
        color: rgb(102,102,102);
    };
    .tab3_div1_text5{
        font-size:15px;
        text-align: right;
        line-height: 24px;
        margin-block-start:0;
        margin-block-end:0;
        color: rgb(102,102,102);
    };
    .tab3_div1_text3{
        font-size:42px;
        margin-block-start:0;
        margin-block-end:0;
        color: rgb(76,98,231);
        padding-left:10px ;
        padding-right: 10px;
    };
    .business_flexbox_text{
        float: left;
        font-size:14px;
        line-height: 28px;
        margin-block-start:0;
        margin-block-end:0;
        padding-left: 14px;
        color: rgb(51,51,51);
    };
    .business_flexbox_text2{
        float: left;
        font-size:14px;
        line-height: 28px;
        margin-block-start:0;
        margin-block-end:0;
        color: rgb(153,153,153);
    };
    .business_text_percent{
        float: left;
        font-size:24px;
        margin-block-start:0;
        margin-block-end:0;
        position: absolute;
        bottom: -10px;
        padding-left: 30px;
        color: rgb(51,51,51);
    };
    .list_div{
        margin-top: 8px;
        background-color: #FFFFFF;
    };
    .list_box{
        border: #333333;
        border-width: 4px;
        height: 65px;
        padding: 0 6px;
    };
    .list_text1{
        font-size: 15px;
        line-height: 32px;
    };
    .list_text2{
        font-size: 15px;
        line-height: 32px;
        color: rgb(51,51,51);
    };
    .list_text3{
        line-height: 32px;
        font-size: 15px;
    };
    .list_text4{
        font-weight: bold;
        line-height: 32px;
        font-size: 15px;
        color: rgb(76,98,231)
    };
    .text-align_right{
        text-align: right;
    };





</style>
