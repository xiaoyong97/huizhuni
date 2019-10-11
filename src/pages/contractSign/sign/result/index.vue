<template>
    <div class="main">
        <van-nav-bar title="合同签订" :border="false" @click-right="finish">
            <span class="nav-right-text" slot="right">完成</span>
        </van-nav-bar>

        <div class="container">
            <div class="result-box">
                <div class="success-img">
                    <img src="../../../../assets/images/other/success@2x.png" alt="">
                </div>
                <div class="tips">签订合同已完成</div>
            </div>

            <div class="line"></div>

            <div class="title1" @click="go('contractDetail', {'signedInfo': info})">查看详情</div>

            <div class="cell">
                <van-row>
                    <van-col><img class="img" src="../../../../assets/images/38/Sequencenumber@2.png" alt="" /></van-col>
                    <van-col class="title right-text">申请顺序号{{info.unid}}</van-col>
                </van-row>
                <van-row>
                    <van-col span="6" class="left-text">申请时间：</van-col>
                    <van-col class="right-text">{{info.signDate}}</van-col>
                </van-row>
                <van-row>
                    <van-col span="6" class="left-text">产品代码：</van-col>
                    <van-col class="right-text">{{info.company_info.unified_social_credit_code}}</van-col>
                </van-row>
                <van-row>
                    <van-col span="6" class="left-text">企业名称：</van-col>
                    <van-col class="right-text">{{info.company_info.company_name}}</van-col>
                </van-row>
                <van-row>
                    <van-col span="6" class="left-text">企业主姓名：</van-col>
                    <van-col class="right-text">{{info.company_info.legal_representative}}</van-col>
                </van-row>
                <van-row>
                    <van-col span="6" class="left-text">ID：</van-col>
                    <van-col class="right-text">{{info.unid}}</van-col>
                </van-row>
            </div>
        </div>

    </div>
</template>

<script>
import base from '@/base';

export default {
    name: '',
    mixins: [base],
    data() {
        return {
            info: {}
        }
    },
	methods:{
		finish:function() {
			var infos =  sessionStorage.getItem('userinfo')
			
			if(null != infos && undefined != infos && '' != infos){
				infos = JSON.parse(infos)
				
				for(var i=0;i<infos.length;i++){
					if(infos[i].unid == this.info.unid){	
						//贷款流程 ： 0=信息待采集 1=征信待校验 2=贷款待申请 3.合同待签订 4.待跟踪
						infos[i].step = 4;
						infos[i].signDate = this.info.signDate;
						sessionStorage.setItem('userinfo',JSON.stringify(infos))
						break;
					}
				}
			}
			
			this.go('contractSign')
		},
		
	},
    created() {
        this.info = this.getItem('signInfo');
		
		var d=new Date(this.info.unid); 
		this.info.signDate = d.getFullYear()+"-"+d.getMonth()+1+"-"+d.getDate(); 
		console.log(this.info)
    }
}
</script>

<style lang="scss" scoped>
img{
    display: block;
    width: 100%;
}
.main{
    background-color: #eeeeee;
}
.container{
    background-color: #ffffff;
}
.nav-right-text{
    font-size: 16px;
    color: rgb(76, 98, 231);
}
.result-box{
    margin-top: 10px;
    padding-top: 50px;
    background-color: #ffffff;
}
.success-img{
    width: 78px;
    height: 78px;
    margin: 0 auto;
}
.tips{
    text-align: center;
    margin-top: 20px;
}
.title1{
    color: #999999;
    margin-bottom: 6px;
    margin-left: 16px;
}
.line{
    width: 90%;
    height: 1px;
    margin: 14px auto;
    background-color: #eeeeee;
}
.cell{
    background-color: #ffffff;
    margin-bottom: 10px;
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
    margin-left: 40px;
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
    padding-left: 32px;
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
</style>