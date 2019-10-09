<template>
    <div class="main_box">
        <!--        遮罩层-->
        <div class='popContainer'  v-show="is_open">
            <img src="../../../../assets/images/38/return@2x.png" class="img_return" @click="openOverlay" >
            <van-nav-bar  >
            </van-nav-bar>
            <p class="craema_text">请拍摄征信查询授权协议</p>
            <img src="../../../../assets/images/other/02130521.png" class="img_shoot"  >
            <p style="line-height: 10px"></p>
            <img src="../../../../assets/images/other/Takeaphoto@2x.png" class="img_cmarea"  @click="add_img">

        </div>
        <!--头部导航-->
        <van-nav-bar :title="title"  right-text="发起校验" @click-right="createCheck('creditCheckResult')">

        </van-nav-bar>
        <img src="../../../../assets/images/38/return@2x.png" class="img_return"  @click="onClickLeft">
        <div class="content">
            <van-row  class="picture_div" id="mainbox">
                <van-col v-for="(item,i) in list" class="picture_col" span="8" >
                    <img src="../../../../assets/images/other/file.png" class="img_file"  >
                    <img src="../../../../assets/images/24/Empty@2x.png" class="img_close" @click="remove_img" >
                </van-col>

                <van-col class="picture_col blue_border" span="8" @click="openOverlay">
                    <img src="../../../../assets/images/84/Shooting@2x.png" class="img_cmarea2"  >
                    <p class="add_text">添加</p>
                </van-col>
            </van-row>
        </div>

    </div>
</template>

<script>

    import NavBar from '@/components/navBar'
    import Vue from 'vue';
    import { Tab, Tabs ,SubmitBar, } from 'vant';

    Vue.use(Tab).use(Tabs).use(SubmitBar);
    export default {

        data() {
            return {
                title : '征信校验',
                checked: true,
                is_open:false,
                type:0,
                list:[1,1,1
                ],
            }
        },


        //数据预加载
        created : ()=>{
        },

        //网页加载完成
        mounted(){
			
        },

        //声明方法
        methods : {
            onClickLeft() {
                this.$router.go(-1);
            },
			createCheck:function(url){
				
				var infos =  sessionStorage.getItem('userinfo')
				if(null != infos && undefined != infos && '' != infos){
					infos = JSON.parse(infos)
					var unid = this.$route.query.unid;
					for(var i=0;i<infos.length;i++){
						if(infos[i].unid == unid){	
							//贷款流程 ： 0=信息待采集 1=征信待校验 2=贷款待申请 3.合同待签订 4.待跟踪
							infos[i].step = 2;
							sessionStorage.setItem('userinfo',JSON.stringify(infos))
							break;
						}
					}
				}
				this.go(url);
			},
            go : function(url){
                this.$router.push({name: url})
            },
            openOverlay : function(){
                this.is_open = !this.is_open;
            },
            onTabClick(index) {
                this.active = index
            },
            remove_img() {
                this.list.pop();
            },
            add_img() {
                this.list.push('1');
                this.is_open = !this.is_open;
            }


        },

        //计算属性
        computed: {

        },

        //引入组件
        components: {
            NavBar
        }


    }
</script>

<style lang="scss" scoped>
    .popContainer{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0,0,0,0.6);
        z-index: 110;
        text-align: center;
    }
    .choose_box{
        float: right;
        background-color: white;
        width: 50%;
    }
    .blue{
        color: #4c62e7;
    }
    .craema_text {
        color: #ffffff;
        margin-top: 50px;
        font-size: 14px;
    }
    .picture_div{

    }
    .picture_col{
        text-align: center;
        position: relative;
        padding: 4px auto;
        margin: 8px auto;
        height: 155px;
    }
    .blue_border{
        border: #4c62e7 1px dashed;
        border-radius: 2px;
        text-align: center;
    }
    .content{
        padding: 0 12px ;
        background-color: rgb(238,238,238);
    }

    .img_return{
        position: absolute;
        top: 14px;
        left:12px ;
        height: 18px;
        width: 18px;
        z-index: 100;
    }
    .img_close{
        position: absolute;
        top: 8px;
        right:12px ;
        height: 24px;
        width: 24px;
        z-index: 10;
    }
    .img_file{
        width: 90%;
        height: 95%;
        margin: 2px auto;

    }
    .img_cmarea{
       margin-top: 14px;
        left:45% ;
        height: 80px;
        width: 80px;
    }
    .img_cmarea2{
        margin-top: 40px;
        height: 50px;
        width: 50px;
    }
    .img_shoot{
        margin-top: 10px;
        width: 260px;
        height: 380px;
    }
    .add_text{
        color: #4c62e7;
        font-size: 14px;
        line-height: 34px;
        margin: 0;
    }

</style>
