<template>
    <div class="main">
        <!--头部导航-->
		<van-nav-bar title="贷后详情" :border="false" @click-left="onClickLeft" @click-right="onClickRight('index')">
            <van-icon :name="backIcon" size="18px" slot="left" />
            <span class="rigth-text" slot="right">预览</span>
        </van-nav-bar>

        <div class="container">
            <div class="cell">
                <van-row>
                    <van-col class="title-img"></van-col>
                    <van-col class="title-text">企业基本信息</van-col>
                </van-row>
                <van-row>
                    <van-col span="9" class="text">企业名称</van-col>
                    <van-col class="text">北京京东金融有限公司</van-col>
                </van-row>
                <van-row>
                    <van-col span="9" class="text">企业主</van-col>
                    <van-col class="text">张三</van-col>
                </van-row>
                <van-row>
                    <van-col span="9" class="text">客户编号</van-col>
                    <van-col class="text">1237892584697</van-col>
                </van-row>
                <van-row>
                    <van-col span="9" class="text">证件类型</van-col>
                    <van-col class="text">营业执照</van-col>
                </van-row>
                <van-row>
                    <van-col span="9" class="text">证件号码</van-col>
                    <van-col class="text">AD719736127612</van-col>
                </van-row>
            </div>
            <div class="cell">
                <van-row>
                    <van-col class="title-img"></van-col>
                    <van-col class="title-text">贷款信息</van-col>
                </van-row>
                <van-row>
                    <van-col span="9" class="text">产品名称</van-col>
                    <van-col class="text">小微快贷</van-col>
                </van-row>
                <van-row>
                    <van-col span="9" class="text">产品代码</van-col>
                    <van-col class="text">9613</van-col>
                </van-row>
                <van-row>
                    <van-col span="9" class="text">贷款账号</van-col>
                    <van-col class="text">6656 6666 6666 6666 6666</van-col>
                </van-row>
                <van-row>
                    <van-col span="9" class="text">币种</van-col>
                    <van-col class="text">人民币</van-col>
                </van-row>
                <van-row>
                    <van-col span="9" class="text">授信金额（元）</van-col>
                    <van-col class="text">2,000,000</van-col>
                </van-row>
                <van-row>
                    <van-col span="9" class="text">授信金额大写（元）</van-col>
                    <van-col class="text">贰百万元整</van-col>
                </van-row>
                <van-row>
                    <van-col span="9" class="text">贷款金额（元）</van-col>
                    <van-col class="text">2,000,000</van-col>
                </van-row>
                <van-row>
                    <van-col span="9" class="text">贷款金额大写（元）</van-col>
                    <van-col class="text">贰百万元整</van-col>
                </van-row>
                <van-row>
                    <van-col span="9" class="text">贷款利率</van-col>
                    <van-col class="text">4.53%</van-col>
                </van-row>
                <van-row>
                    <van-col span="9" class="text">贷款期限</van-col>
                    <van-col class="text">1年</van-col>
                </van-row>
            </div>
            <div class="cell">
                <van-row>
                    <van-col class="title-img"></van-col>
                    <van-col class="title-text">逾期信息</van-col>
                </van-row>
                <van-row>
                    <van-col span="9" class="text">待还本金（元）</van-col>
                    <van-col class="text orange">0</van-col>
                </van-row>
                <van-row>
                    <van-col span="9" class="text">待还利息（元）</van-col>
                    <van-col class="text orange">5,000</van-col>
                </van-row>
                <van-row>
                    <van-col span="9" class="text">贷款到期日</van-col>
                    <van-col class="text orange">2019-09-10</van-col>
                </van-row>
                <van-row>
                    <van-col span="9" class="text">贷款状态</van-col>
                    <van-col class="text">{{loanStatus}}</van-col>
                </van-row>
            </div>
        </div>
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
            loanStatus: ''
        }
    },
    created() {
        this.loanStatus = this.$route.params.status;
    }
}
</script>

<style lang="scss" scoped>
.main{
    background-color: #eeeeee;
}
.rigth-text{
    color: #4c62e7
}
.cell{
    margin-top: 10px;
    border-radius: 12px;
    background-color: #ffffff;
    padding: 10px;

}
.title-img{
    width: 10px;
    height: 16px;
    background-color: #4c62e7;
    margin: 9px 4px 9px 0;
}
.title-text{
    font-weight: bold;
    font-size: 14px;
    line-height: 34px;
    color: rgb(51,51,51);
}
.text{
    line-height: 40px;
    font-size: 14px;
    color: #333333;
}
.orange{
    color: #f76037;
}
</style>