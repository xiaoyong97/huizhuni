<template>
    <div class="main">
        <!--头部导航-->
		<van-nav-bar title="合同签订" :border="false" @click-left="onClickLeft1" @click-right="go('contractSearch',{contractSign:activeName})">
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
            v-model="activeName"
            >

            <van-tab title="待签约" name="sign">
                <div class="cell" v-for="item in infos" v-show="item.step==3">
                    <van-row>
                        <van-col><img class="img" src="../../assets/images/38/Sequencenumber@2.png" alt="" /></van-col>
                        <van-col class="title right-text">申请顺序号{{item.unid}}</van-col>
                    </van-row>
                   <van-row>
                       <van-col span="8" class="left-text">企业名称:</van-col>
                       <van-col class="right-text">{{item.company_info.company_name}}</van-col>
                   </van-row>
                   <van-row>
                       <van-col span="8" class="left-text">统一社会信用代码:</van-col>
                       <van-col class="right-text">{{item.company_info.unified_social_credit_code}}</van-col>
                   </van-row>
                   <van-row>
                       <van-col span="8" class="left-text">企业主姓名:</van-col>
                       <van-col class="right-text">{{item.company_info.legal_representative}}</van-col>
                   </van-row>
                   <van-row>
                       <van-col span="8" class="left-text">ID:</van-col>
                       <van-col class="right-text">{{item.unid}}</van-col>
                   </van-row>
                    <div class="btn van-hairline--top" @click="go('sign', {signInfo: item, contractSign: 'sign'})"><img class="img-btn" src="../../assets/images/38/Signing@2x.png" />签约</div>
                </div>
            </van-tab>
            <van-tab title="已签约" name="signed">
               	<div class="cell" v-for="item in infos" v-show="item.step==4">
                    <van-row>
                        <van-col><img class="img" src="../../assets/images/38/Sequencenumber@2.png" alt="" /></van-col>
                        <van-col class="title right-text">申请顺序号{{item.unid}}</van-col>
                    </van-row>
                    <van-row>
                        <van-col span="8" class="left-text">企业名称:</van-col>
                        <van-col class="right-text">{{item.company_info.company_name}}</van-col>
                    </van-row>
                    <van-row>
                        <van-col span="8" class="left-text">统一社会信用代码:</van-col>
                        <van-col class="right-text">{{item.company_info.unified_social_credit_code}}</van-col>
                    </van-row>
                    <van-row>
                        <van-col span="8" class="left-text">企业主姓名:</van-col>
                        <van-col class="right-text">{{item.company_info.legal_representative}}</van-col>
                    </van-row>
                    <van-row>
                        <van-col span="8" class="left-text">产品代码:</van-col>
                        <van-col class="right-text">{{item.company_info.customer_id}}</van-col>
                    </van-row>
                    <!-- <van-row>
                        <van-col span="8" class="left-text">签约时间:</van-col>
                        <van-col class="right-text">{{item.signDate}}</van-col>
                    </van-row> -->
                    <van-row>
                        <van-col span="8" class="left-text">ID:</van-col>
                        <van-col class="right-text">{{item.unid}}</van-col>
                    </van-row>
                    <div class="btn van-hairline--top" @click="go('contractDetail', {signedInfo: item, contractSign: 'signed'})"><img class="img-btn" src="../../assets/images/38/Viewreport@2x.png" />查看详情</div>
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
	mounted (){
		  var infos =  sessionStorage.getItem('userinfo')
		  if(null != infos && undefined != infos && '' != infos){
		  	this.infos = JSON.parse(infos)
			console.log(this.infos)
		  }
          this.activeName = this.getItem('contractSign') == undefined  ? 'sign' : this.getItem('contractSign');
	},
	methods:{
		onClickLeft1:function(){
            this.setItem('contractSign', 'sign')
			this.$router.push({name: 'index3'})
            // this.$router.go(-1);
		}
	},
    data() {
        return {
            backIcon,
            searchIcon,
			infos:{},
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
            ],
            activeName: 'sign',
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
    margin-left: 12px;
}
.left-text,
.right-text{
    line-height: 34px;
    font-size: 14px;
}
.left-text{
    color: #999999;
    margin-left: 20px;
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
