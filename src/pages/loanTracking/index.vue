<template>
    <div class="main">
        <!--头部导航-->
		<van-nav-bar title="贷后跟踪" :border="false" @click-left="onClickLeft" @click-right="go('loanTrackingSearch', {loanTracking: activeTab})">
            <van-icon :name="backIcon" size="18px" slot="left" />
            <van-icon :name="searchIcon" size="18px" slot="right" />
        </van-nav-bar>

        <!--        遮罩层-->
        <div class='popContainer' v-show="isOpen">
            <div class="choose_box" v-for="(item, index) in typeList">
                <van-row class="choose_box_list" @click="choose(index)">
                    <p class="choose_box_text " :class="type == index ? 'blue' : '' ">{{item}}</p>
                </van-row>
            </div>

        </div>

        <van-tabs v-model="activeTab" title-active-color="#4c62e7" title-inactive-color="#000000" color="#4c62e7" line-width="33.333333%" line-height=3 :border="false">
            <van-tab title="逾期提醒" class="tab-content">
                <van-cell class="cell" v-for="item in tabList1" @click="go('loanTrackingDetail', {status: '逾期', loanTracking: activeTab, loanTrackingItemInfo: item})">
                    <van-row>
                        <van-col span="18"><img class="company" :src="companyIcon" alt=""> {{item.company}} </van-col>
                        <van-col span="6"><div class="p">逾期<span class="days">{{item.delayDays}}</span>天</div></van-col>
                    </van-row>
                    <van-row>
                        <van-col offset="2" class="grey" span="8">企业主</van-col>
                        <van-col span="8">{{item.userName}}</van-col>
                    </van-row>
                    <van-row>
                        <van-col offset="2" class="grey" span="8">产品代码</van-col>
                        <van-col span="8">{{item.productCode}}</van-col>
                    </van-row>
                    <van-row>
                        <van-col offset="2" class="grey" span="8">应还金额（元）</van-col>
                        <van-col class="orange" span="8">{{item.amount}}</van-col>
                    </van-row>
                    <van-row>
                        <van-col offset="2" class="grey" span="8">到期时间</van-col>
                        <van-col span="8" class="orange">{{item.date}}</van-col>
                    </van-row>
				</van-cell>
            </van-tab>
            <van-tab class="tab-content">
                <div slot="title">
                    续贷提醒<van-icon class="more-img" :name="moreImg" @click="typeSelect" />
                </div>
                <div class="tab2-content">
                    <div class="cell" v-for="item in tabList2" @click="go('loanTrackingDetail', {status: '续贷',loanTracking: activeTab, loanTrackingItemInfo: item})">
                        <van-cell>
                            <van-row>
                            <van-col span="18"><img class="company" :src="companyIcon" alt=""> {{item.company}} </van-col>
                        </van-row>
                        <van-row>
                            <van-col offset="2" class="grey" span="8">企业主</van-col>
                            <van-col span="8">{{item.userName}}</van-col>
                        </van-row>
                        <van-row>
                            <van-col offset="2" class="grey" span="8">产品代码</van-col>
                            <van-col span="8">{{item.productCode}}</van-col>
                        </van-row>
                        <van-row>
                            <van-col offset="2" class="grey" span="8">应还金额（元）</van-col>
                            <van-col class="orange" span="8">{{item.amount}}</van-col>
                        </van-row>
                        <van-row>
                            <van-col offset="2" class="grey" span="8">到期时间</van-col>
                            <van-col span="8" class="orange">{{item.date}}</van-col>
                        </van-row>
                        </van-cell>
                        <img class="tag" :src="item.tag" />
                    </div>
                </div>
            </van-tab>
            <van-tab title="还本息提醒" class="tab-content">
                <van-cell class="cell" v-for="item in tabList3" @click="go('loanTrackingDetail', {status: '正常', loanTracking: activeTab, loanTrackingItemInfo: item})">
                    <van-row>
                        <van-col span="18"><img class="company" :src="companyIcon" alt=""> {{item.company}} </van-col>
                    </van-row>
                    <van-row>
                        <van-col offset="2" class="grey" span="8">企业主</van-col>
                        <van-col span="8">{{item.userName}}</van-col>
                    </van-row>
                    <van-row>
                        <van-col offset="2" class="grey" span="8">产品代码</van-col>
                        <van-col span="8">{{item.productCode}}</van-col>
                    </van-row>
                    <van-row>
                        <van-col offset="2" class="grey" span="8">应还金额（元）</van-col>
                        <van-col class="orange" span="8">{{item.amount}}</van-col>
                    </van-row>
                    <van-row>
                        <van-col offset="2" class="grey" span="8">到期时间</van-col>
                        <van-col span="8" class="orange">{{item.date}}</van-col>
                    </van-row>
				</van-cell>
            </van-tab>
        </van-tabs>
    </div>
</template>

<script>
    // import vanNavBar from '@/components/navBar';
    import base from '@/base';
    import backIcon from '@/assets/images/38/return@2x.png';
    import searchIcon from '@/assets/images/38/searchfor@2x.png';
    import moreImg1 from '@/assets/images/24/Pulldownselect@2x.png';
    import moreImg2 from '@/assets/images/24/Collapse@2x.png';
    import moreImg3 from '@/assets/images/24/Pulldown@2x.png';

    export default {
        name: 'loanTracking',
        mixins: [base],
        components: {
            // vanNavBar
        },
        data() {
            return {
                backIcon,
                searchIcon,
                activeTab: 1,
                moreDown: true,
                companyIcon: require('@/assets/images/38/Companyname@2x.png'),
                tabList1: [
                    {
                        company: '广州可可有限公司',
                        delayDays: 59,
                        userName: '张三',
                        productCode: 9613,
                        amount: '200,000',
                        date: '2019-07-15'
                    },
                    {
                        company: '广州京东金融有限公司',
                        delayDays: 35,
                        userName: '张三',
                        productCode: 9613,
                        amount: '200,000',
                        date: '2019-08-08'
                    },
                    {
                        company: '广州市睿智防水电器股份有限公司',
                        delayDays: 12,
                        userName: '艾仲华',
                        productCode: 9613,
                        amount: '200,000',
                        date: '2019-09-01'
                    }
                ],
                tabList2: [
                    {
                        company: '广州市睿智防水电器股份有限公司',
                        userName: '艾仲华',
                        productCode: 9613,
                        amount: '2,000,000',
                        date: '2019-08-08',
                        customerNumber: 8877554554125233,
                        type: 2,
                        tag: require('../../assets/images/other/blacklist@2x.png')
                    },
                    {
                        company: '广州可可有限公司',
                        userName: '张三',
                        productCode: 9613,
                        amount: '2,000,000',
                        date: '2019-08-08',
                        customerNumber: 8877554554125233,
                        type: 1,
                        tag: require('../../assets/images/other/whitelist@2x.png')
                    },
                    {
                        company: '广州京东金融有限公司',
                        userName: '张三',
                        productCode: 9613,
                        amount: '2,000,000',
                        date: '2019-08-08',
                        customerNumber: 8877554554125233,
                        type: 3,
                        tag: require('../../assets/images/other/Greylist@2x.png')
                    },
                    {
                        company: '广州智康科技有限公司',
                        userName: '张康',
                        productCode: 9613,
                        amount: '2,000,000',
                        date: '2019-08-08',
                        customerNumber: 8877554554125233,
                        type: 4,
                        tag: require('../../assets/images/other/Bluelist@2x.png')
                    },
                    {
                        company: '广州智融科技有限公司',
                        userName: '李智磊',
                        productCode: 9613,
                        amount: '2,000,000',
                        date: '2019-08-08',
                        customerNumber: 8877554554125233,
                        type: 5,
                        tag: require('../../assets/images/other/Yellowlist@2x.png')
                    }
                ],
                tabList2BackUp: [
                    {
                        company: '广州京东金融有限公司',
                        userName: '张三',
                        productCode: 9613,
                        amount: '2,000,000',
                        date: '2019-08-08',
                        customerNumber: 8877554554125233,
                        type: 2,
                        tag: require('../../assets/images/other/blacklist@2x.png')
                    },
                    {
                        company: '公司三安',
                        userName: '孙二九',
                        productCode: 9613,
                        amount: '2,000,000',
                        date: '2019-08-08',
                        customerNumber: 8877554554125233,
                        type: 1,
                        tag: require('../../assets/images/other/whitelist@2x.png')
                    },
                    {
                        company: '广州京西科技有限公司',
                        userName: '张三',
                        productCode: 9613,
                        amount: '2,000,000',
                        date: '2019-08-08',
                        customerNumber: 8877554554125233,
                        type: 3,
                        tag: require('../../assets/images/other/Greylist@2x.png')
                    },
                    {
                        company: '广州智康科技有限公司',
                        userName: '张康',
                        productCode: 9613,
                        amount: '2,000,000',
                        date: '2019-08-08',
                        customerNumber: 8877554554125233,
                        type: 4,
                        tag: require('../../assets/images/other/Bluelist@2x.png')
                    },
                    {
                        company: '广州智融科技有限公司',
                        userName: '李智磊',
                        productCode: 9613,
                        amount: '2,000,000',
                        date: '2019-08-08',
                        customerNumber: 8877554554125233,
                        type: 5,
                        tag: require('../../assets/images/other/Yellowlist@2x.png')
                    }
                ],
                tabList3: [
                    {
                        company: '公司三安',
                        userName: '孙二九',
                        productCode: '0063',
                        amount: '1010.00',
                        date: '2019-10-30'
                    },
                    {
                        company: '广州市睿智防水电器股份有限公司',
                        userName: '艾仲华',
                        productCode: 9613,
                        amount: '5000',
                        date: '2019-11-01'
                    }
                ],
                typeSelectFlag: false,
                type: -1,
                typeList: ['全部', '续贷白名单', '续贷黑名单', '续贷灰名单', '续贷蓝名单', '续贷黄名单'],
            }
        },
        computed: {
            moreImg() {
                return this.activeTab == 1 ? moreImg1 : moreImg3;
            },
            isOpen() {
                return (this.activeTab == 1  && this.typeSelectFlag) ? true : false;
            }
        },
        methods: {
            typeSelect() {
                if (this.activeTab == 1) {
                    this.typeSelectFlag = true;
                }
            },
            choose(index) {
                this.typeSelectFlag = false;
                this.type = index;
                if (index == 0) {
                    this.tabList2 = this.tabList2BackUp;
                } else {
                    this.tabList2 = this.tabList2BackUp.filter((item) => {
                        return item.type == index;
                    })
                }
            }
        },
        watch: {
            activeTab(value) {
                this.typeSelectFlag = false;
            }
        },
        mounted() {
            this.activeTab = this.getItem('loanTracking') == undefined  ? 1 : this.getItem('loanTracking');
        }
    }
</script>

<style scoped>
    .main{
        background-color: #eeeeee;
    }
    .tab-content{
        padding: 8px;
    }
    .cell{
        border-radius: 12px;
        margin-bottom: 10px;
        position: relative;
        overflow: hidden;
    }
    .cell:not(:last-child){
    }
    .grey{
		color: #999999;
	}
    .p{
        display: inline-flex;
        justify-content: flex-end;
        width: 100%;
    }
    .days,
    .orange{
		color: #f76037;
	}
    .company{
		width: 20px;
		height: 20px;
        vertical-align: top;
        margin-top: 2px;
	}
    .tag{
        position: absolute;
        top: 0px;
        right: 0px;
        width: 75px;
        height: 75px;
        /* background-size: 75px; */
    }
    .more-img{
        display: inline-block;
        vertical-align: top;
        margin-top: 14px;
        margin-left: 4px;
    }
    .popContainer{
        position: fixed;
        top: 90px;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0,0,0,0.3);
        z-index: 100;
    }
    .choose_box{
        background-color: white;
        width: 33.333333%;
        margin-left: 50%;
        transform: translateX(-50%);
    }
    .choose_box_list{
        text-align: center;
    }
    .choose_box_text{
        line-height: 34px;
        color: #999999;
        font-size: 16px;
        margin-block-start:0;
        margin-block-end:0;
    }
    .blue{
        color: #4c62e7;
    }
</style>