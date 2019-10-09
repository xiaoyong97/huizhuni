<template>
    <div class="main" >

        <!--头部导航-->

        <van-nav-bar :title="title"  ></van-nav-bar>
        <img src="../../../assets/images/38/return@2x.png" class="img_return"  @click="onClickLeft">
                <div class="main_box">
                    <div class="null_box"></div>
                    <van-row class="list_row" >
                        <van-col span="6" class="van-col_left"  ><p class="left_text">姓名</p></van-col>
                        <van-col span="18" class=" "  > <van-field   class="input_box" placeholder="" /></van-col>
                    </van-row>
                    <van-row class="list_row" >
                        <van-col span="6" class="van-col_left"  ><p class="left_text">性别</p></van-col>
                        <van-col span="10" class="van-col_left"  ><p class="left_text"></p></van-col>
                        <van-col span="2" class="van-col_left"  ><p class="left_text">男</p></van-col>
                        <van-col span="4" class="radio_col "  > <van-switch v-model="checked" /> </van-col>
                        <van-col span="2" class="van-col_left"  ><p class="left_text">女</p></van-col>
                    </van-row>
                    <van-row class="list_row" >
                        <van-col span="6" class="van-col_left"  ><p class="left_text">手机号</p></van-col>
                        <van-col span="18" class=" "  ><van-field   class="input_box" placeholder="" /></van-col>
                    </van-row>
                    <van-row class="list_row" >
                        <van-col span="6" class="van-col_left"  ><p class="left_text">公司名称</p></van-col>
                        <van-col span="18" class=" "  > <van-field   class="input_box" placeholder="" /> </van-col>
                    </van-row>
                    <van-row class="list_row" >
                        <van-col span="6" class="van-col_left"  ><p class="left_text">职务</p></van-col>
                        <van-col span="18" class=" "  > <van-field   class="input_box" placeholder="" /> </van-col>
                    </van-row>
                    <van-row class="list_row" >
                        <van-col span="6" class="van-col_left"  ><p class="left_text">民族</p></van-col>
                        <van-col span="18" class=" "  > <van-field   class="input_box" placeholder="" /> </van-col>
                    </van-row>
                    <van-row class="list_row" @click="setType(1)">
                        <van-col span="8" class="van-col_left"  ><p class="left_text">需要接站 <van-icon name="arrow-up" v-show="type!==1"/><van-icon name="arrow-down"  v-show="type==1"/></p></van-col>
                    </van-row>
                    <div v-show="type==1">
                        <van-row class="list_row" >
                            <van-col span="6" class="text_align_right"  ><p class="left_text">车次/航班</p></van-col>
                            <van-col span="18" class=" "  > <van-field   class="input_box" placeholder="" /> </van-col>
                        </van-row>
                        <van-row class="list_row" >
                            <van-col span="6" class="text_align_right"  ><p class="left_text">到达日期</p></van-col>
                            <van-col span="18" class="time_col "  >
                                <div class="input_div relative"><p class="time_text">{{timeValue1}}</p><img src="../../../assets/images/38/calendar@2x.png" class="img_calendar "  @click="timePickerStatue(1)"></div>
                            </van-col>
                        </van-row>
                        <van-row class="list_row" >
                            <van-col span="6" class="text_align_right"  ><p class="left_text">抵达时间</p></van-col>
                            <van-col span="18" class=" "  > <van-field   class="input_box" placeholder="" /> </van-col>
                        </van-row>
                        <van-row class="list_row" >
                            <van-col span="6" class="text_align_right"  ><p class="left_text">到达地点</p></van-col>
                            <van-col span="18" class=" "  > <van-field   class="input_box" placeholder="" /> </van-col>
                        </van-row>
                    </div>
                    <van-row class="list_row" @click="setType(2)">
                        <van-col span="8" class="van-col_left"  ><p class="left_text">需要送站 <van-icon name="arrow-up" v-show="type!==2"/><van-icon name="arrow-down" v-show="type==2"/></p></van-col>
                    </van-row>
                    <div v-show="type==2">
                        <van-row class="list_row" >
                            <van-col span="6" class="text_align_right"  ><p class="left_text">车次/航班</p></van-col>
                            <van-col span="18" class=" "  > <van-field   class="input_box" placeholder="" /> </van-col>
                        </van-row>
                        <van-row class="list_row" >
                            <van-col span="6" class="text_align_right"  ><p class="left_text">出发日期</p></van-col>
                            <van-col span="18" class="time_col "  >
                                <div class="input_div relative"><p class="time_text">{{timeValue2}}</p><img src="../../../assets/images/38/calendar@2x.png" class="img_calendar "  @click="timePickerStatue(2)"></div>
                            </van-col>
                        </van-row>
                        <van-row class="list_row" >
                            <van-col span="6" class="text_align_right"  ><p class="left_text">出发时间</p></van-col>
                            <van-col span="18" class=" "  > <van-field   class="input_box" placeholder="" /> </van-col>
                        </van-row>
                        <van-row class="list_row" >
                            <van-col span="6" class="text_align_right"  ><p class="left_text">出发地点</p></van-col>
                            <van-col span="18" class=" "  > <van-field   class="input_box" placeholder="" /> </van-col>
                        </van-row>
                    </div>
                <div class="time_picker_box" v-show="time_Picker_Statue!==0">
                    <van-datetime-picker v-show="time_Picker_Statue==1" class="time_picker"
                                         v-model="currentDate1"
                                         type="date"
                                         :min-date="minDate"
                                         @change="changeFn(1)" @confirm="confirmBtn(1)" @cancel="cancelFn()"
                    />
                    <van-datetime-picker v-show="time_Picker_Statue==2"  class="time_picker"
                                         v-model="currentDate2"
                                         type="date"
                                         :min-date="minDate"
                                         @change="changeFn(2)" @confirm="confirmBtn(2)" @cancel="cancelFn()"
                    />
                </div>
                    <div class="null_box"></div>
            </div>
        <div class="main_box">
            <van-row class="van_row" >
                <p class="baoming_txt" >报名表二维码</p>
            </van-row>
            <van-row class="van_row" >
                <img src="../../../assets/images/other/erweima.png" class="img_erweima" >
            </van-row>
            <van-row class="van_row" >
                <div class="border_box"> <p class="share_text" >分享二维码</p></div>
            </van-row>
            <div class="null_box"></div>
        </div>
    </div>
</template>

<script>

    //引入组件首字母大写
    import TabBar from '@/components/tabBar'
    import { Tab, Tabs,Swipe, SwipeItem, Row, Col,Switch  } from 'vant';
    import Vue from 'vue';

    Vue.use(Swipe).use(SwipeItem).use(Col).use(Row).use(Tab).use(Tabs).use(Switch);
    export default {
        //基础数据存放处
        data (){
            return {
                value:'',
                title : '查看报名表',
                checked:true,
                type:0,
                time_Picker_Statue:0, //0：不显示 1：接站日期 2：送站日期
                currentDate1: new Date(),//1:开始日期  2 结束日期
                currentDate2: new Date(),
                timeValue1: '',
                timeValue2: '',
                endData:'',
                minDate: new Date(2018, 10, 1),
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
            setType(i) {
              if (this.type!==i) {
                  this.type = i;
              } else {
                  this.type = 0;
              }
            },
            onClickLeft() {
                this.$router.go(-1);
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
            timePickerStatue(i){
                console.log(i)
                this.time_Picker_Statue = i;
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
    .img_return{
        position: absolute;
        top: 14px;
        left:12px ;
        height: 18px;
        width: 18px;
        z-index: 100;
    }
    .van_row{
        justify-content: center;align-items: center;text-align:center
    }
    .border_box{
       display: inline-block;
        border: #4c62e7 1px solid;
        border-radius: 50px;
        width: 120px;
        text-align: center;
        margin-top: 8px;
    }
    .time_text{
        line-height: 34px;
        padding: 0 12px;
        margin: 0;
    }
    .baoming_txt{
        margin: 0;
        padding-top: 12px;
        line-height: 34px;
        font-size: 14px;
    }
    .share_text{
        line-height: 34px;
        font-size: 16px;
        color: #4c62e7;
        margin: 0;
        padding: 0;
    }
    .img_erweima{
        height: 120px;
        width: 120px;
    }
    .null_box{
        height: 8px;
    }
    .time_picker{
        position: absolute;
        bottom: 0;
        width: 100%;
    }
    .time_picker_box{
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        background-color: rgba(0,0,0,0.3);
        z-index: 101;
    }
    .img_calendar{
        position: absolute;
        top:7px;
        height: 18px;
        width: 18px;
        right: 12px;
    }
    .text_align_right{
        text-align: right;
    }
    .relative{
        position: relative;
    }
    .van-col_left{
        padding-left: 6px;
        height: 40px;
    }
    .radio_col{
        margin: 4px auto;
    }
    .main{
        background-color: rgb(238,238,238);
    }
    .main_box{
        background-color: white;
        margin-top: 8px;
        position: relative;
        padding: 0 12px;
    }
    .input_box{
        height: 34px;
        border: #dddddd 1px solid;
        border-radius: 34px;
        width: 90%;
        margin: 2px 10px;
        padding:4px 17px;
    }
    .input_div{
        height: 28px;
        border: #dddddd 1px solid;
        border-radius: 34px;
        width: 77%;
        margin: 2px 10px;
        padding:4px 17px;
    }
    .time_col{
    }
    .list_row{
        height: 40px;
        justify-content: center;
        align-items: center;
        margin-top: 8px;
    }
    .left_text{
        line-height: 40px;
        font-size: 16px;
        margin: 0;
        padding: 0;
    }
</style>
