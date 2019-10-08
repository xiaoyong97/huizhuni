<template>
    <div class="main">
        <!--头部导航-->
		<van-nav-bar title="贷后跟踪" :border="false" @click-left="onClickLeft" @click-right="onClickRight('index')">
            <van-icon :name="backIcon" size="18px" slot="left" />
            <van-icon :name="searchIcon" size="18px" slot="right" />
        </van-nav-bar>

        <van-tabs v-model="activeTab" title-active-color="#4c62e7" title-inactive-color="#000000" color="#4c62e7" line-width="33.333333%" line-height=3 :border="false">
            <van-tab title="逾期提醒" class="tab-content">
                <van-cell class="cell" v-for="item in tabList1" @click="go('loanTrackingDetail', {status: '逾期'})">
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
                    续贷提醒<van-icon class="more-img" :name="moreImg" />
                </div>
                <div class="tab2-content">
                    <div class="cell" v-for="item in tabList2">
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
                <van-cell class="cell" v-for="item in tabList3" @click="go('loanTrackingDetail', {status: '正常'})">
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
                        company: '北京京东金融有限公司',
                        delayDays: 35,
                        userName: '张三',
                        productCode: 9613,
                        amount: '200,000',
                        date: '2019-08-08'
                    },
                    {
                        company: '广州可可有限公司',
                        delayDays: 12,
                        userName: '张三',
                        productCode: 9613,
                        amount: '200,000',
                        date: '2019-09-01'
                    }
                ],
                tabList2: [
                    {
                        company: '北京京东金融有限公司',
                        userName: '张三',
                        productCode: 9613,
                        amount: '2,000,000',
                        date: '2019-08-08',
                        customerNumber: 8877554554125233,
                        tag: require('../../assets/images/other/blacklist@2x.png')
                    },
                    {
                        company: '北京京东金融有限公司',
                        userName: '张三',
                        productCode: 9613,
                        amount: '2,000,000',
                        date: '2019-08-08',
                        customerNumber: 8877554554125233,
                        tag: require('../../assets/images/other/whitelist@2x.png')
                    },
                    {
                        company: '北京京东金融有限公司',
                        userName: '张三',
                        productCode: 9613,
                        amount: '2,000,000',
                        date: '2019-08-08',
                        customerNumber: 8877554554125233,
                        tag: require('../../assets/images/other/Greylist@2x.png')
                    },
                    {
                        company: '北京京东金融有限公司',
                        userName: '张三',
                        productCode: 9613,
                        amount: '2,000,000',
                        date: '2019-08-08',
                        customerNumber: 8877554554125233,
                        tag: require('../../assets/images/other/Bluelist@2x.png')
                    },
                    {
                        company: '北京京东金融有限公司',
                        userName: '张三',
                        productCode: 9613,
                        amount: '2,000,000',
                        date: '2019-08-08',
                        customerNumber: 8877554554125233,
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
            }
        },
        computed: {
            moreImg() {
                return this.activeTab == 1 ? moreImg1 : moreImg3;
            }
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
</style>