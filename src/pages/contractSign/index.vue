<template>
    <div class="main">
        <!--头部导航-->
		<van-nav-bar title="合同签订" :border="false" @click-left="onClickLeft" @click-right="onClickRight('contractSearch')">
            <van-icon :name="backIcon" size="18px" slot="left" />
            <van-icon :name="searchIcon" size="18px" slot="right" />
        </van-nav-bar>

        <van-tabs 
            color="#4c62e7"
            line-width="50%"
            title-active-color="#4c62e7"
            title-inactive-color="#000000"
            line-height=3
            :border="false"
            >

            <van-tab title="待签约">
                <div class="cell" v-for="item in list1">
                    <van-row>
                        <van-col><img class="img" src="../../assets/images/38/Sequencenumber@2.png" alt="" /></van-col>
                        <van-col class="title right-text">申请顺序号{{item.applicationSequenceNumber}}</van-col>
                    </van-row>
                    <van-row>
                        <van-col span="9" class="left-text">企业名称：</van-col>
                        <van-col class="right-text">{{item.companyName}}</van-col>
                    </van-row>
                    <van-row>
                        <van-col span="9" class="left-text">统一社会信用代码：</van-col>
                        <van-col class="right-text">{{item.creditCode}}</van-col>
                    </van-row>
                    <van-row>
                        <van-col span="9" class="left-text">企业主姓名：</van-col>
                        <van-col class="right-text">{{item.owner}}</van-col>
                    </van-row>
                    <van-row>
                        <van-col span="9" class="left-text">产品代码：</van-col>
                        <van-col class="right-text">{{item.productCode}}</van-col>
                    </van-row>
                    <van-row>
                        <van-col span="9" class="left-text">ID：</van-col>
                        <van-col class="right-text">{{item.id}}</van-col>
                    </van-row>
                    <div class="btn van-hairline--top" @click="go('sign', {signInfo: item})"><img class="img-btn" src="../../assets/images/38/Signing@2x.png" />签约</div>
                </div>
            </van-tab>
            <van-tab title="已签约">
                <div class="cell" v-for="item in list2">
                    <van-row>
                        <van-col><img class="img" src="../../assets/images/38/Sequencenumber@2.png" alt="" /></van-col>
                        <van-col class="title right-text">申请顺序号{{item.applicationSequenceNumber}}</van-col>
                    </van-row>
                    <van-row>
                        <van-col span="9" class="left-text">企业名称：</van-col>
                        <van-col class="right-text">{{item.companyName}}</van-col>
                    </van-row>
                    <van-row>
                        <van-col span="9" class="left-text">统一社会信用代码：</van-col>
                        <van-col class="right-text">{{item.creditCode}}</van-col>
                    </van-row>
                    <van-row>
                        <van-col span="9" class="left-text">企业主姓名：</van-col>
                        <van-col class="right-text">{{item.owner}}</van-col>
                    </van-row>
                    <van-row>
                        <van-col span="9" class="left-text">产品代码：</van-col>
                        <van-col class="right-text">{{item.productCode}}</van-col>
                    </van-row>
                    <van-row>
                        <van-col span="9" class="left-text">签约时间：</van-col>
                        <van-col class="right-text">{{item.signDate}}</van-col>
                    </van-row>
                    <van-row>
                        <van-col span="9" class="left-text">ID：</van-col>
                        <van-col class="right-text">{{item.id}}</van-col>
                    </van-row>
                    <div class="btn van-hairline--top" @click="go('contractDetail', {signedInfo: item})"><img class="img-btn" src="../../assets/images/38/Viewreport@2x.png" />查看详情</div>
                </div>
            </van-tab>
        </van-tabs>
    </div>
</template>

<script>
import base from '@/base';
import backIcon from '@/assets/images/38/return@2x.png';
import searchIcon from '@/assets/images/38/searchfor@2x.png';

export default {
    name: 'contractSign',
    mixins: [base],
    data() {
        return {
            backIcon,
            searchIcon,
            list1: [
                {
                    applicationSequenceNumber: 987628221227780861,
                    companyName: '广州琪琪电子商务有限公司',
                    creditCode: 'HHGU6656789999',
                    owner: '王小二',
                    productCode: '8765789000-9877',
                    id: 123456
                },
                {
                    applicationSequenceNumber: 987628221227780860,
                    companyName: '广州琪琪电子商务有限公司',
                    creditCode: 'HHGU6656789911',
                    owner: '张三',
                    productCode: '8765789000-9870',
                    id: 345678
                },
            ],
            list2: [
                {
                    applicationSequenceNumber: 987628221227780859,
                    companyName: '广州琪琪电子商务有限公司',
                    creditCode: 'HHGU66567891234',
                    owner: '王小二',
                    productCode: '8765789000-94321',
                    signDate: '2019-08-08',
                    id: 123456
                },
                {
                    applicationSequenceNumber: 987628221227780858,
                    companyName: '广州琪琪电子商务有限公司',
                    creditCode: '8876545789998765688',
                    owner: '王小二',
                    productCode: '8765789000-9870',
                    signDate: '2019-08-02',
                    id: 654432
                },
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.main{
    background-color: #eeeeee;
    padding-bottom: 10px;
}
.cell{
    background-color: #ffffff;
    border-radius: 12px;
    padding-top: 10px;
    margin: 10px;
}
.img{
    width: 19px;
    height: 19px;
    margin-right: 2px;
    vertical-align: top;
    margin-top: 6px;
    margin-left: 16px;
}
.left-text,
.right-text{
    line-height: 34px;
    font-size: 14px;
}
.left-text{
    color: #999999;
    margin-left: 34px;
}
.right-text{
    font-weight: 500;
    color: #000000;
}
.title{
    font-size: 16px;
}
.btn{
    text-align: center;
    height: 40;
    line-height: 40px;
    color: #4c62e7;
}
.img-btn{
    width: 19px;
    height: 19px;
    vertical-align: middle;
    margin-top: -2px;
    margin-right: 6px;
}
</style>