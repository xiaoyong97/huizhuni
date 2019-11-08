<template>
    <div class="main" >

        <!--头部导航-->
        <van-nav-bar :title="title"  @click-right="onClickRight" right-text="保存">
        </van-nav-bar>
        <img src="../../../assets/images/38/return@2x.png" class="img_return"  @click="onClickLeft">
            <div class="secend_box" style="height: auto">
                <van-row >
                    <van-col class="img_box" span="12" v-for="(item,i) in list_img">
                        <img :src="item.img" class="img_active" >
                        <img src="../../../assets/images/24/Empty@2x.png" class="img_close" @click="remove_img(i)" >
                    </van-col>

                    <van-col class="img_box" span="12" @click="add_img">
                        <div class="add_box">
                            <img src="../../../assets/images/other/add@123.png" class="img_add" >
                            <p class="add_text">还可上传<span class="blue">{{5-this.list_img.length}}</span>张照片</p>
                        </div>
                    </van-col>
                </van-row>
            </div>
    </div>
</template>

<script>

    //引入组件首字母大写
    import TabBar from '@/components/tabBar'
    import { Tab, Tabs,Swipe, SwipeItem, Row, Col ,Dialog } from 'vant';
    import Vue from 'vue';

    Vue.use(Swipe).use(SwipeItem).use(Col).use(Row).use(Tab).use(Tabs).use(Dialog);
    export default {
        //基础数据存放处
        data (){
            return {
                title : '上传图片',
                activeName: 'a',
                current: 0,
                list_img:[
                    {img:require('../../../assets/images/activity/activitypic1.jpg')},
                    {img:require('../../../assets/images/activity/activitypic2.jpg')},
                    {img:require('../../../assets/images/activity/activitypic3.jpg')},
                    {img:require('../../../assets/images/activity/activitypic4.jpg')},
                    {img:require('../../../assets/images/activity/activitypic5.jpg')},
                ]
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
            onClickLeft() {
                this.$router.go(-1);
            },
            onClickRight(){
                this.$router.go(-1);
            },
            onChange(index) {
                this.current = index;
            },
            goviewList : function(){
                this.$router.push('./viewList');
            },
            remove_img(i) {
                Dialog.confirm({
                    message: "是否删除照片",
                    confirmButtonText: "确定", //改变确认按钮上显示的文字
                }).then(()=> {
                    this.list_img.splice(i,1)
                }).catch(() => {

                });

            },
            add_img() {
                if (this.list_img.length < 5) {
                    this.list_img.push({img:require('../../../assets/images/activity/activitypic5.jpg')})
                }
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
    .img_active{
        height: 100%;
        width: 100%;
    }
    .img_box{
        position: relative;
        padding: 8px 8px;
        height: 100px;
    }
    .add_box{
        width: 100%;
        height: 100%;
        border: #999999 1px dashed;
        text-align: center;
    }
    .add_text{
        margin: 0;
        line-height: 24px;
        font-size: 14px;
        color: #999999;
    }
    .main{
        background-color: rgb(238,238,238);
        position: fixed;
        top:0px;
        right:0px ;
        left: 0;
        bottom: 0;
    };
    .img_close{
        position: absolute;
        top:12px;
        right:12px ;
        height: 24px;
        width: 24px;
        z-index: 10;
    }
    .img_add{
       margin-top: 12px;
        height: 40px;
        width: 40px;

    }
    .blue{
        color: #4c62e7;
    }
    .img_return{
        position: absolute;
        top: 14px;
        left:12px ;
        height: 18px;
        width: 18px;
        z-index: 100;
    }

    .secend_box{
        width: 100%;
    }





</style>
