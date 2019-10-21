<template>
    <div class="main">
        <van-nav-bar :title="'合同签订-'+title" @click-left="back">
            <van-icon :name="backIcon" size="18px" slot="left" />
        </van-nav-bar>

        <div class="process-box">
            <div class="steps-box">
                <div class="step-title" :class="[active == 0 ? 'active' : '',  active > 0 ? 'steped' : '']">贷款合同</div>
                <div class="dot">
                    <span :class="[active >= 0 ? 'active' : '']"></span>
                </div>
                <div class="line" :class="[active >= 1 ? 'active' : '']"></div>
            </div>
            <div class="steps-box">
                <div class="step-title" :class="[active == 1 ? 'active' : '', active > 1 ? 'steped' : '']">抵押合同</div>
                <div class="dot">
                    <span :class="[active >= 1 ? 'active' : '']"></span>
                </div>
                <div class="line" :class="[active >= 2 ? 'active' : '']"></div>
            </div>
            <div class="steps-box">
                <div class="step-title" :class="[active == 2 ? 'active' : '', active > 2 ? 'steped' : '']">担保合同</div>
                <div class="dot">
                    <span :class="[active >= 2 ? 'active' : '']"></span>
                </div>
                <div class="line" :class="[active >= 3 ? 'active' : '']"></div>
            </div>
            <div class="steps-box">
                <div class="step-title" :class="[active >= 3 ? 'active' : '']">支用合同</div>
                <div class="dot">
                    <span :class="[active >= 3 ? 'active' : '']"></span>
                </div>
            </div>
        </div>

        <div class="divider"></div>

        <div class="content1" v-if="content1Show">
            <div class="init-img">
                <img src="../../../assets/images/face/init.png" alt="">
            </div>
            <p class="tips">签约人人脸识别</p>
            <div class="info-box">
                <div class="name-box van-hairline--bottom">
                    <label for="name">姓名</label>
                    <input id="name" type="text" placeholder="请输入姓名" v-model="info.company_main_info.name">
                </div>
                <div class="id-box van-hairline--bottom">
                    <label for="id">身份证号</label>
                    <input id="id" type="number" placeholder="请输入身份证号" v-model="info.company_main_info.idcard">
                </div>
            </div>
            <div class="btn" @click="start">开始识别</div>
        </div>

        <div class="content2" v-if="content2Show">
            <p class="title" v-show="isDistinguish">拿起手机正对脸部</p>
            <div class="default-img">
                <img src="../../../assets/images/face/default.png" alt="">
            </div>
            <p v-show="isDistinguish">人脸录入中</p>
        </div>

        <div class="content3" v-if="content3Show">
            <p class="title">签约人手持合同照片</p>
            <div class="contract-img">
                <img src="../../../assets/images/idcard/bg_sfz_front@2x.png" alt="">
                <div class="shoot-box">
                    <div class="shoot-img">
                        <img src="../../../assets/images/other/Takeaphoto@2x.png" alt="">
                    </div>
                    <div class="shoot-text">照片添加，请拍照上传</div>
                </div>
            </div>
            <div class="next-btn" @click="next">下一步</div>
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
            active: 0,
            content1Show: true,
            content2Show: false,
            content3Show: false,
            isDistinguish: true,
			info:{},
        }
    },
    computed: {
        title() {
            switch (this.active) {
                case 0:
                    return '贷款合同';
                    break;
                case 1:
                    return '抵押合同';
                    break;
                case 2:
                    return '担保合同';
                    break;
                case 3:
                    return '支用合同';
                    break;
                default:
                    break;
            }
        }
    },
    methods: {
        back() {
            if (this.active == 0) {
                this.$router.go(-1);
            } else {
                this.active--;
                this.isDistinguish = true;
                this.content1Show = true;
                this.content2Show = false;
                this.content3Show = false;
            }
        },
        start() {
            this.content1Show = false;
            this.content2Show = true;
            setTimeout(() => {
                this.isDistinguish = false;
                this.$dialog.confirm({
                    message: '人脸识别不成功，是否重试？',
                    confirmButtonText: '跳过',
                    cancelButtonText: '确定',
                    confirmButtonColor: '#4c62e7',
                    cancelButtonColor: '#999999',
                    className: 'dialog',
                }).then(() => {
                    // this.content2Show = false;
                    // this.content3Show = true;
                    this.active++;
                    this.isDistinguish = true;
                    this.content1Show = true;
                    this.content2Show = false;
                    this.content3Show = false;
                }).catch(() => {
                    this.isDistinguish = true;
                    setTimeout(() => {
                        this.isDistinguish = false;
                        this.$dialog.alert({
                            message: '人脸识别成功',
                            confirmButtonText: '确定',
                            confirmButtonColor: '#4c62e7',
                            className: 'dialog',
                        }).then(() => {
                            this.content2Show = false;
                            this.content3Show = true;
                        })
                    }, 2000)
                });
            }, 2000)
        },
        next() {
			
            if (this.active == 3) {
                this.go('contractSignResult',{signInfo:this.info})
            } else {
                this.active++;
                this.isDistinguish = true;
                this.content1Show = true;
                this.content2Show = false;
                this.content3Show = false;
            }
        }
    },
    created() {
        this.info = this.$route.params.signInfo;
		console.log(this.info)
		
    }
}
</script> 

<style lang="scss" scoped>
input{
    outline: none;
    border: 0;
    background-color: rgba(0, 0, 0, 0);
}
p{
    margin-block-start: 0;
    margin-block-end: 0;
    text-align: center;
}
img{
    display: block;
    width: 100%;
}
.process-box{
    padding-left: 40px;
    padding-right: 40px;
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
}
.steps-box{
    flex: 1;
    position: relative;
    &:last-child{
        position: absolute;
        right: 44px;
        width: auto;
    }
    .step-title{
        position: absolute;
        width: 72px;
        height: 27.5px;
        margin-left: 5px;
        text-align: center;
        transform: translateX(-50%);
        color: #999999;
        &.steped{
            color: #4c62e7
        }
        &.active{
            background-image: url('../../../assets/images/face/Process@2x.png');
            background-size: 72px 27.5px;
            color: #ffffff;
            top: -3px;
        }
    }
    .dot{
        position: absolute;
        top: 36px;
        left: -8px;
        transform: translateY(-50%);
        padding: 0 8px;
        background-color: #ffffff;
        z-index: 2;
        span{
            display: block;
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background-color: #cccccc;
            &.active{
                background-color: #4c62e7;
            }
        }
    }
    .line{
        position: absolute;
        top: 36px;
        left: 4px;
        width: 80px;
        height: 2px;
        transform: translateY(-50%);
        background-color: #eeeeee;
        margin-left: 4px;
        margin-right: 4px;
        &.active{
            background-color: #4c62e7;
        }
    }
}
.divider{
    height: 4px;
    background-color: #eeeeee;
    margin-top: 56px;
}
.init-img{
    width: 72px;
    margin: 80px auto 10px;
}
.tips{
    text-align: center;
    font-size: 18px;
    color: #000;
}
.info-box{
    margin-top: 20px;
    padding-left: 30px;
    padding-right: 30px;
    .name-box,
    .id-box{
        display: flex;
        align-items: center;
        padding-left: 12px;
        padding-right: 4px;
        line-height: 32px;
        font-size: 14px;
        label{
            width: 100px;
        }
        input{
            flex: 1;
        }
    }
    .name-box{
        input{
            // text-align: right;
        }
    }
}
.btn{
    background-color: #4c62e7;
    border-radius: 18px;
    width: 120px;
    margin: 30px auto 0;
    height: 36px;
    text-align: center;
    line-height: 36px;
    color: #ffffff;
}
.content2,
.content3{
    padding-top: 70px;
}
.title{
    font-weight: 600;
    color: #000;
}
.default-img{
    width: 206px;
    margin: 30px auto;
}
.contract-img{
    position: relative;
    width: 320px;
    margin: 30px auto 100px;
}
.shoot-box{
    position: absolute;
    top: 32px;
    left: 50%;
    transform: translateX(-50%);
}
.shoot-img{
    width: 78px;
    margin: 0 auto;
}
.shoot-text{
    text-align: center;
    color: #4c62e7;
    margin-top: 20px;
}
.next-btn{
    width: 267px;
    height: 42px;
    background-image: url('../../../assets/images/other/Mainbutton@2x.png');
    background-size: 267px 42px;
    line-height: 42px;
    text-align: center;
    color: #ffffff;
    margin: 0 auto;
}
.dialog{
    width: 60%;
}
</style>