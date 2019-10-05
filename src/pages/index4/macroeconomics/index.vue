<template>
    <div class="main_box">
        <!--头部导航-->
        <van-nav-bar :title="title" ></van-nav-bar>
        <img src="../../../assets/images/38/return@2x.png" class="img_return"  @click="onClickLeft">
        <van-row class="location_div" >
            <van-col class="relative" span="1" >
                <img src="../../../assets/images/huidiantong/location@12.jpg" class="img_location"  >
            </van-col>
            <van-col class="text_align_left" span="11" @click="openPicker"><p class="location_div_text" >{{locationTitle}}</p></van-col>
            <van-col class="text_align_right" span="12" ><p class="location_div_text" >数据日期：201903</p></van-col>
        </van-row>
        <img src="../../../assets/images/huidiantong/lianzi.jpg" class="img_lianzi1"  >
        <img src="../../../assets/images/huidiantong/lianzi.jpg" class="img_lianzi2"  >

        <div class="content">
            <div  v-for="(item) in list_">
                <van-row class="" type="flex" justify="space-between">
                    <van-col class="tag_box"  span="12" >
                        <van-row class="top_row" span="12">
                            <van-col class="left_top_col"  ><p class="test_left" >{{item.title1}}</p></van-col>
                            <van-col class="right_top_col" span="8" ><p class="test_right" >单位</p></van-col>
                        </van-row>
                        <div style="height: 4px"></div>
                        <van-row class="top_row" span="12">
                            <van-col class="left_top_col"   ><p class="test_left" >{{item.num1}}</p></van-col>
                            <van-col class="right_botton_col" span="6" ><p class="test_botton_right" >{{item.unit1}}</p></van-col>
                        </van-row>
                    </van-col>
                    <van-col class="tag_box"  span="12" >
                        <van-row class="top_row" span="12">
                            <van-col class="left_top_col"  span="16" ><p class="test_left" >{{item.title2}}</p></van-col>
                            <van-col class="right_top_col" span="8" ><p class="test_right" >单位</p></van-col>
                        </van-row>
                        <div style="height: 4px"></div>
                        <van-row class="top_row" span="12">
                            <van-col class="left_top_col"  span="18" ><p class="test_left" >{{item.num2}}</p></van-col>
                            <van-col class="right_botton_col" span="6" ><p class="test_botton_right" >{{item.unit2}}</p></van-col>
                        </van-row>
                    </van-col>


                </van-row>
                <div style="height: 8px"></div>
            </div>

            <div style="height: 8px"></div>

        </div>
            <van-picker class="picker_box" v-show="pickerShow"
                        show-toolbar
                        title="请选择省份"
                        :columns="columns"
                        @cancel="onCancel"
                        @confirm="onConfirm"
            />
    </div>
</template>

<script>

    import NavBar from '@/components/navBar'
    import Vue from 'vue';
    import { Tab, Tabs ,SubmitBar,Picker  } from 'vant';

    Vue.use(Tab).use(Tabs).use(SubmitBar).use(Picker);
    export default {

        data() {
            return {
                title : '宏观经济数据',
                pickerShow:true,
                locationTitle:'全国',
                list_:[
                    {title1:'GDP',num1:21342.8,unit1:'亿元', title2:'GDP同比',num2:6.8,unit2:'%'},
                    {title1:'GPI',num1:2.8,unit1:'%', title2:'PPI同比',num2:0.80,unit2:'%'},
                    {title1:'社会融资规模',num1:45444.8,unit1:'亿元', title2:'固定资产投资',num2:0.08,unit2:'%'},
                    {title1:'房地产投资',num1:4536744,unit1:'亿元', title2:'房地产同比',num2:5.8,unit2:'%'},
                    {title1:'财政收入',num1:121.8,unit1:'亿元', title2:'财政收入同比',num2:11.8,unit2:'%'},
                ],
                columns: ['全国','北京市', '天津市', '上海市', '重庆市', '河北省', '河北省', '安徽省', '山东省', '湖北省', '湖南省', '山西省', '黑龙江省', '浙江省', '江西省', '河南省', '辽宁省', '吉林省', '江苏省', '福建省', '广东省', '海南省', '四川省', '贵州省', '云南省', '陕西省', '甘肃省', '青海省', '台湾省', '内蒙古自治区', '广西壮族自治区', '西藏自治区', '宁夏回族自治区', '新疆维吾尔自治区', '香港特别行政区', '澳门特别行政区'],
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
            go : function(url){
                this.$router.push({name: url})
            },
            openPicker() {
                this.pickerShow = true;
            },
            onConfirm(value, index) {
                this.locationTitle = value;// (`当前值：${value}, 当前索引：${index}`);
                this.pickerShow = false;
            },
            onCancel() {
                this.pickerShow = false;
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
    .blue{
        color: #4c62e7;
        font-weight: bold;
    }
    .main_box{
        background-color: rgb(238,238,238);
        position: relative;
    }
    .content{
        padding: 0px ;
        background-color: rgb(238,238,238);
        justify-content: center;
        align-items: center;
    }
    .content{
        padding: 0 18px;
    }
    .picker_box{
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 5;
        height: 300px;
    }
    .img_location{
        position: absolute;
        top: 5px;
        left:8px ;
        height: 20px;
        width: 14px;
    }
    .img_lianzi1{
        position: absolute;
        top: 94px;
        left:10% ;
        height: 18px;
        width: 4px;
    }
    .img_lianzi2{
        position: absolute;
        top: 94px;
        left:90%;
        height: 18px;
        width: 4px;
    }
    .img_return{
        position: absolute;
        top: 14px;
        left:12px ;
        height: 18px;
        width: 18px;
        z-index: 100;
    }
    .top_row{
        padding: 0 12px;
    }
    .left_top_col{
        width: 65%;
    }
    .right_top_col{
        border-radius: 4px;
        background-color: rgb(56,155,246);
        height: 22px;
        width: 35%;
        text-align: center;
        margin: 5px auto;
    }
    .right_botton_col{
        width: 35%;
    }
    .blue{
        color: #4c62e7;
    }
    .text_align_left{
        text-align: left;
        padding-left: 8px;
    }
    .text_align_right{
        text-align: right;
        padding-right: 12px;
    }
    .relative{
        position: relative;
    }
    .location_div{
        height: 30px;
        background-color: rgb(56,155,246);
        width: auto;
        margin: 18px 8px;
    }
    .location_div_text{
        margin: 0;
        padding: 0;
        line-height: 30px;
        font-size: 14px;
        color: white;
    }
    .tag_box{
        background-image:  url(../../../assets/images/huidiantong/1004184105.png);
        background-repeat:no-repeat;
        background-size:100% 100%;
        height: 68px;
        width: 47%;
    }
    .test_left{
        margin: 0;
        padding-left: 0;
        line-height: 32px;
        font-size: 12px;
    }
    .test_botton_right{
        margin: 0;
        line-height: 32px;
        font-size: 12px;
        padding-left: 20px;
    }
    .test_right{
        font-size: 8px;
        line-height: 22px;
        padding: 0;
        margin: 0;
        color: white;
    }


</style>
