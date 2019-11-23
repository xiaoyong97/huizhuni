<template>
    <div class="main">
        <van-nav-bar title="已签约详情" :border="false" @click-left="onClickLeft">
            <van-icon :name="backIcon" size="18px" slot="left" />
        </van-nav-bar>
        <div class="cell">
            <van-row>
                <van-col><img class="img" src="../../../assets/images/38/Sequencenumber@2.png" alt="" /></van-col>
                <van-col class="title right-text">申请顺序号{{info.applicationSequenceNumber}}</van-col>
            </van-row>
            <van-row>
                <van-col span="8" class="left-text">企业名称:</van-col>
                <!-- <van-col class="right-text">{{info.company_info.company_name}}</van-col> -->
                <van-col class="right-text">北京京东金融有限公司</van-col>
            </van-row>
            <van-row>
                <van-col span="8" class="left-text">统一社会信用代码:</van-col>
                <!-- <van-col class="right-text">{{info.company_info.unified_social_credit_code}}</van-col> -->
                <van-col class="right-text">92320226MA05A2307C</van-col>
            </van-row>
            <van-row>
                <van-col span="8" class="left-text">企业主姓名:</van-col>
                <!-- <van-col class="right-text">{{info.company_info.legal_representative}}</van-col> -->
                <van-col class="right-text">张三</van-col>
            </van-row>
            <van-row>
                <van-col span="8" class="left-text">产品代码:</van-col>
                <!-- <van-col class="right-text">{{info.company_info.customer_id}}</van-col> -->
                <van-col class="right-text">252841000000526649</van-col>
            </van-row>
            <van-row>
                <van-col span="8" class="left-text">签约时间:</van-col>
                <van-col class="right-text">{{info.signDate}}</van-col>
            </van-row>
            <van-row>
                <van-col span="8" class="left-text">ID:</van-col>
                <van-col class="right-text">{{info.unid}}</van-col>
            </van-row>
        </div>
        <div class="box">
            <p class="title">贷款合同</p>
            <div class="cell2">
                <p class="title2">签约人人脸识别</p>
                <p class="result">验证通过</p>
            </div>
            <div class="cell2">
                <p class="title2">签约人手持合同照片</p>
                <div class="result">
                    <p>已上传</p>
                    <img class="more-img" src="../../../assets/images/24/more@2x.png" alt="" @click="showPicture">
                </div>
            </div>
        </div>
        <div class="box">
            <p class="title">抵押合同</p>
            <div class="cell2">
                <p class="title2">签约人人脸识别</p>
                <p class="result">验证通过</p>
            </div>
            <div class="cell2">
                <p class="title2">签约人手持合同照片</p>
                <div class="result">
                    <p>已上传</p>
                    <img class="more-img" src="../../../assets/images/24/more@2x.png" alt="" @click="showPicture">
                </div>
            </div>
        </div>
        <div class="box">
            <p class="title">担保合同</p>
            <div class="cell2">
                <p class="title2">签约人人脸识别</p>
                <p class="result">验证通过</p>
            </div>
            <div class="cell2">
                <p class="title2">签约人手持合同照片</p>
                <div class="result">
                    <p>已上传</p>
                    <img class="more-img" src="../../../assets/images/24/more@2x.png" alt="" @click="showPicture">
                </div>
            </div>
        </div>
        <div class="box">
            <p class="title">支用合同</p>
            <div class="cell2">
                <p class="title2">签约人人脸识别</p>
                <p class="result">验证通过</p>
            </div>
            <div class="cell2">
                <p class="title2">签约人手持合同照片</p>
                <div class="result">
                    <p>已上传</p>
                    <img class="more-img" src="../../../assets/images/24/more@2x.png" alt="" @click="showPicture">
                </div>
            </div>
        </div>
        <van-popup v-model="show"><img class="certificate-img" src="../../../assets/images/other/certificate.jpg" alt=""></van-popup>
    </div>
</template>

<script>
import base from '@/base';
import backIcon from '@/assets/images/38/return@2x.png';

export default {
    name: '',
    mixins: [base],
    data() {
        return {
            backIcon,
            info: {},
            show: false,
        }
    },
    created() {
        this.info = this.getItem('signedInfo');
		console.log(this.info)
    },
    methods: {
        showPicture() {
            this.show = true;
        }
    }
    
}
</script>

<style lang="scss" scoped>
p{
    margin-block-start: 0;
    margin-block-end: 0;
}
.main{
    background-color: #eeeeee;
    padding-bottom: 10px;
}
.cell{
    background-color: #ffffff;
    margin-top: 10px;
    margin-bottom: 10px;
}
.img{
    width: 19px;
    height: 19px;
    margin-right: 2px;
    vertical-align: top;
    margin-top: 6px;
    margin-left: 12px;
}
.left-text,
.right-text{
    line-height: 34px;
    font-size: 14px;
}
.left-text{
    color: #999999;
    margin-left: 24px;
}
.right-text{
    font-weight: 500;
    color: #000000;
}
.title{
    font-size: 16px;
}
.box{
    background-color: #ffffff;
    padding-left: 24px;
    padding-right: 24px;
    margin-bottom: 2px;
    .title{
        line-height: 40px;
    }
    .cell2{
        display: flex;
        .title2{
            width: 46%;
            font-size: 14px;
            color: #999999;
            line-height: 32px;
        }
        .result{
            flex: 1;
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 14px;
            line-height: 32px;
            .more-img{
                width: 12px;
                height: 12px;
            }
        }
    }
}
.certificate-img{
    width: 280px;
    height: 240px;
}
</style>