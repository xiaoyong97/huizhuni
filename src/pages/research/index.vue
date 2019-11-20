<template>
    <div class="main_box">
       
        <!--头部导航-->
      <van-nav-bar :title="title"></van-nav-bar>
		<img src="../../assets/images/38/return@2x.png" class="img_return"  @click="onClickLeft">

        <div class="content">
			<div v-show="step == 1">
				<br>
				<div class="item"  @click="next">
					1.普惠小微指数调研问券   
					<img src="../../assets/images/other/rightjt.png" alt="" class="jt">
				</div>
				<div class="item" @click="next">
					2.关于“惠助你”使用体验的调查问券 
					<img src="../../assets/images/other/rightjt.png" alt="" class="jt">
				</div>
				<div class="item"  @click="next">
					3.关于“惠助你”使用需求的调查问券
					<img src="../../assets/images/other/rightjt.png" alt="" class="jt">
				</div>
			</div>
			<div v-show="step == 2" >
				<br>
				<div class="stepContainer">
					<div class="header"><img src="../../assets/images/other/8031574240560_.pic_hd.jpg" alt="">关于"惠助你"使用体验的问卷调查</div>
					<p>您好！感谢使用中国建设银行“惠懂你”APP；</p>
					<p>“惠懂你”APP是一款我行通过运用互联网、大数据等技术，为小微企业提供服务的互联网应用，为了更好地了解您对我行金融服务的满意程度和需求，特向大家发起问卷调查，以使我们提供更加优质的服务，谢谢！</p>
				</div>
				<div class="startBtn" @click="next">开始答题</div>
			</div>
			<div v-show="step == 3">
				<br>
				<div class="stepContainer">
					<div class="header"><img src="../../assets/images/other/8031574240560_.pic_hd.jpg" alt="">关于"惠助你"使用体验的问卷调查</div>
					<p>1.您使用的惠助你APP多长时间？（单选题）</p>
					<van-radio-group v-model="radio">
					  <van-radio name="1" checked-color="#ACA8DC">不足一个月</van-radio><br>
					  <van-radio name="2" checked-color="#ACA8DC">1-3个月</van-radio><br>
					  <van-radio name="3" checked-color="#ACA8DC">3-6个月</van-radio><br>
					  <van-radio name="4" checked-color="#ACA8DC">6个月以上</van-radio><br>
					</van-radio-group>  
				</div>
				<div class="startBtn" @click="next">下一题</div>
			</div>
			<div v-show="step == 4">
				<br>
				<div class="stepContainer">
					<div class="header"><img src="../../assets/images/other/8031574240560_.pic_hd.jpg" alt="">关于"惠助你"使用体验的问卷调查</div>
					<p>2.您觉得惠助你哪方面有待提升？（多选题）    </p>
					<van-checkbox-group v-model="result" >
					  <van-checkbox name="a" checked-color="#ACA8DC">产品流程</van-checkbox><br>
					  <van-checkbox name="b" checked-color="#ACA8DC">操作流程、方法</van-checkbox><br>
					  <van-checkbox name="c" checked-color="#ACA8DC">系统稳定性</van-checkbox><br>
					   <van-checkbox name="d" checked-color="#ACA8DC">培训服务品质</van-checkbox><br>
					   <van-checkbox name="f" checked-color="#ACA8DC">其他</van-checkbox><br>
					   
					</van-checkbox-group>
					
					
					   <textarea name="" id="textarea" cols="38" rows="3" border="1" placeholder="请填写"></textarea>
				</div>
				<div class="btn-group">
					<div class="beforeBtn" @click="before">上一题</div>
					<div class="startBtn" @click="next">下一题</div>
				</div>
			</div>
			
			<div v-show="step == 5">
				<br>
				<div class="stepContainer">
					<div class="header"><img src="../../assets/images/other/8031574240560_.pic_hd.jpg" alt="">关于"惠助你"使用体验的问卷调查</div>
					<p>3.您对惠助你使用是否满意？ </p>
					<van-row>
					  <van-col span="5" >很不满意 </van-col>
					  <van-col span="5">不满意 </van-col>
					  <van-col span="5"> 一般</van-col>
					  <van-col span="4"> 满意</van-col>
					   <van-col span="5"> 很满意</van-col>
					</van-row>
					<p>产品功能</p>
					
					
					<van-row>
						<van-radio-group v-model="radio1">
						  <van-col span="5" ><van-radio name="1" checked-color="#ACA8DC"></van-radio></van-col>
						  <van-col span="5"><van-radio name="2" checked-color="#ACA8DC"></van-radio></van-col>
						  <van-col span="5"><van-radio name="3" checked-color="#ACA8DC"></van-radio></van-col>
						  <van-col span="4"><van-radio name="4" checked-color="#ACA8DC"></van-radio></van-col>
						  <van-col span="5"><van-radio name="5" checked-color="#ACA8DC"></van-radio></van-col>
						</van-radio-group>  	
					</van-row>
					<p>外观设计</p>
					<van-row>
					  <van-radio-group v-model="radio2">
					    <van-col span="5" ><van-radio name="6" checked-color="#ACA8DC"></van-radio></van-col>
					    <van-col span="5"><van-radio name="7" checked-color="#ACA8DC"></van-radio></van-col>
					    <van-col span="5"><van-radio name="8" checked-color="#ACA8DC"></van-radio></van-col>
					    <van-col span="4"><van-radio name="9" checked-color="#ACA8DC"></van-radio></van-col>
					    <van-col span="5"><van-radio name="10" checked-color="#ACA8DC"></van-radio></van-col>
					  </van-radio-group>  
					</van-row>
					<p>操作流畅性</p>
					<van-row>
					  <van-radio-group v-model="radio3">
					    <van-col span="5" ><van-radio name="A" checked-color="#ACA8DC"></van-radio></van-col>
					    <van-col span="5"><van-radio name="B" checked-color="#ACA8DC"></van-radio></van-col>
					    <van-col span="5"><van-radio name="C" checked-color="#ACA8DC"></van-radio></van-col>
					    <van-col span="4"><van-radio name="D" checked-color="#ACA8DC"></van-radio></van-col>
					    <van-col span="5"><van-radio name="E" checked-color="#ACA8DC"></van-radio></van-col>
					  </van-radio-group>  
					</van-row>
					<p>系统稳定性</p>
					<van-row>
					  <van-radio-group v-model="radio4">
					    <van-col span="5" ><van-radio name="a" checked-color="#ACA8DC"></van-radio></van-col>
					    <van-col span="5"><van-radio name="b" checked-color="#ACA8DC"></van-radio></van-col>
					    <van-col span="5"><van-radio name="c" checked-color="#ACA8DC"></van-radio></van-col>
					    <van-col span="4"><van-radio name="e" checked-color="#ACA8DC"></van-radio></van-col>
					    <van-col span="5"><van-radio name="f" checked-color="#ACA8DC"></van-radio></van-col>
					  </van-radio-group>  
					</van-row>
					
					
				</div>
				<div class="btn-group">
					<div class="beforeBtn" @click="before">上一题</div>
					<div class="startBtn" @click="next">下一题</div>
				</div>
			</div>
				
			<div v-show="step == 6">
				<br>
				<div class="stepContainer">
					<div class="header"><img src="../../assets/images/other/8031574240560_.pic_hd.jpg" alt="">关于"惠助你"使用体验的问卷调查</div>
					<p>4.您最喜欢"惠助你”的哪个模块？（排序）</p>
				   <van-checkbox-group v-model="result2" :max="2">
				     <van-checkbox name="a" checked-color="#ACA8DC">商机</van-checkbox><br/>
				     <van-checkbox name="b" checked-color="#ACA8DC">贷款</van-checkbox><br/>
				     <van-checkbox name="c" checked-color="#ACA8DC">融资赋能</van-checkbox><br/>
					 <van-checkbox name="d" checked-color="#ACA8DC">催收管理</van-checkbox><br/>
					 <van-checkbox name="f" checked-color="#ACA8DC">贷款跟踪</van-checkbox><br/>
				   </van-checkbox-group>
				   
				</div>
				<div class="startBtn" @click="next">下一题</div>
			</div>	
		
			<div v-show="step == 7">
				<br>
				<div class="stepContainer">
					<div class="header"><img src="../../assets/images/other/8031574240560_.pic_hd.jpg" alt="">关于"惠助你"使用体验的问卷调查</div>
					<p>5.您对“惠助你”APP有什么改进建议</p>
					
					<textarea name="" id="textarea5" cols="41" rows="6" border="1" placeholder="请填写"></textarea>
				</div>
				<div class="startBtn" @click="submit">提交问卷</div>
			</div>
			
			<div v-show="step == 8">
				<div class="success-pan">
					<img class="success" src="../../assets/images/other/success@2x.png" alt="">
					<p class="success-tip"> 问卷提交成功</p>
					<p class="success-tip"> 感谢您的反馈！</p>
					<div class="goToMainBtn" @click="next">返回首页</div>
				</div>
			</div>
		</div>
    </div>
</template>

<script>

    import NavBar from '@/components/navBar'
    import Vue from 'vue';
    import { Tab, Tabs ,SubmitBar,Dialog ,Checkbox} from 'vant';

    Vue.use(Tab).use(Tabs).use(SubmitBar);
    export default {

        data() {
            return {
                title : '调查问券',
                step: 1,
                is_open:false,
                type:0,
                active:0,
                tab2:'已校验',
				infos:[],
				checked:false,
				radio:[],
				radio1:[],
				radio2:[],
				radio3:[],
				radio4:[],
				result:[],
				result2:[],
            }
        },


        //数据预加载
        created : ()=>{
        },

        //网页加载完成
        mounted (){
		
		},

        //声明方法
        methods : {
            onClickLeft() {
                // this.$router.push({path:'/'});
                this.$router.go(-1);
            },
            go : function(url,params = false){
				if(params){
					this.$router.push({name: url,query:{unid:params}})
				}else{
					 this.$router.push({name: url})
				}

            },
            openOverlay : function(){
                if(this.active == 1) {
                    this.is_open = !this.is_open;
                }
            },
            next() {
				if(this.step<8){
					this.step ++;
				} else {
					
					this.radio = this.radio1 = this.radio2 = this.radio3 = this.radio4 = this.result =this.result2=[];
					this.step = 1;
				}
                
            },
			before(){
				this.step--;
			},
            onTabClick(index) {
                this.active = index
            },
			submit(){
				var that = this;
				Dialog.confirm({
				  title: '提示信息',
				  message: '您尚未提交答卷<br/>确认是否离开此页面？',
				  confirmButtonText:'离开',
				}).then(() => {
				   that.next()
				}).catch(() => {
				  // on cancel
				});
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
    .hiddin_box{
        display: none;
    }
    .hiddin_box_show{
        display: block;
    }
    .null_box{
        height: 8px;
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
        float: right;
        background-color: white;
        width: 50%;
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
    .van_col_box{
        background-color: rgb(250,250,250);
        border: rgb(220,220,220) solid 0.5px;
    }
    .van_col_box_text{
        padding: 6px 16px;
        font-size: 12px;
        margin-block-start:0;
        margin-block-end:0;
    }
    .van_row_box{
        margin: 0 12px;
    }



    .list_right_text{
        margin-block-start:0;
        margin-block-end:0;
        font-size: 14px;
        line-height: 34px;
        color: rgb(51,51,51);
    }
    .img_open{
        position: absolute;
        bottom: 2px;
        right: 12px;
        height: 20px;
        width: 20px;
    }

    // scoped 表示私有样式
    .content{
        padding: 0px ;
        background-color: rgb(238,238,238);
		min-height: 700px;
        justify-content: center;
        align-items: center;
    }
    .card_list1_test_left{
        color: #999999;
        font-size: 14px;
        margin-block-start:0;
        margin-block-end:0;
        line-height: 30px;
        padding-left: 28px;
    }
    .img_return{
        position: absolute;
        top: 14px;
        left:12px ;
        height: 18px;
        width: 18px;
        z-index: 100;
    }
    .img_fliter{
        position: absolute;
        top: 14px;
        right:12px ;
        height: 18px;
        width: 18px;
        z-index: 100;
    }
    .img_search{
        position: absolute;
        top: 14px;
        right:12px ;
        height: 18px;
        width: 18px;
        z-index: 100;

    }
    .card_list1_test_right{
        color: #333333;
        font-size: 14px;
        margin-block-start:0;
        margin-block-end:0;
        line-height: 30px;
    }
    .card_list2_test{
        color: #333333;
        font-size: 14px;
        margin-block-start:0;
        margin-block-end:0;
        line-height: 30px;
    }
    .img_location{
        height: 18px;
        width: 18px;
    }
    .img_is_open{
        height: 18px;
        width: 18px;
        position: absolute;
        right: 13%;
        top:12px;
        z-index: 100;
    }
    .img_pass{
        position: absolute;
        right: 10px;
        top:-0px;
        height: 44px;
        width: 68px;
    }
    .icon_box{
        margin-top: 6px;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
    .icon_box2{
        margin-left: 30%;
        margin-top: 6px;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
    .card_div{
        position: relative;
        width: auto;
        padding:0px;
        background-color: white;
        border-radius: 10px;
        margin: 8px 10px 0;
    }

   .item{
		height: 100px;
		background-color: #fff;
		line-height: 100px;
		padding-left: 16px;
		margin: 0px 16px 16px 16px;
		border-radius: 8px;
		position: relative;
   }
   .item>.jt{
	   width: 26px;
	   height: 16px;
	   
	   position: absolute;
	   right: 30px;;
	   top: 42px;
   }
   .stepContainer{
	   background-color: #fff;
	   margin-top: 40px;
	   padding: 80px 16px 16px 16px;
	   position: relative;
   }
   .stepContainer .header{
	   position: absolute;
	   top: -50px;
	   height: 120px;
	   left: 16px;
	   right:16px;
	   background-color: #fff;
	   text-align: center;
	   border-radius: 12px;
	   box-shadow: 0px 0px 12px #999999 ;
   }
   .stepContainer .header img{
	   display: block;
	   margin: 16px auto;
	   width: 40px;
	   height: 40px; 
   }
   .startBtn{
	   width: 50%;
	   height: 40px;
	   line-height: 36px;
	   margin: 0px auto ;
	   background-image: url(../../assets/images/other/Slider2@2x.png);
	   background-size: 100% 100%;
	   color: #fff;
	   text-align: center;
		margin-top: 200px;;
   }
   .beforeBtn{
	  width: 46%;
	  height: 36px;	  
	  line-height: 36px;
	  margin-right: 4px;
	  background-size: 100% 100%;
	  border: 1px rgb(85,86,232) solid;
	  
	  border-radius: 16px;
	  color: rgb(85,86,232);
	  text-align: center;
	  margin-top: 200px;
   }
   .btn-group{
	   margin:0px 16px;
   }
   .btn-group>.beforeBtn,.btn-group>.startBtn{
	   margin-top: 30px;
	   
	  float: left;
   }
   
   #textarea{
	   margin-left: 26px;
	   border: 1px solid lightgray;
   }
   #textarea5{
	    border: 1px solid lightgray;
   }
   .success-pan{
   	min-height: 300px;
   	background-color: #fff;
   	position: relative;
   }
   .success{
   		width: 25%;
   		display: block;
   		margin: 72px auto 10px;
   	}
   	.success-tip{
   		text-align: center;
   		margin-bottom: 4px;
   	}
	.goToMainBtn{
		width: 46%;
		height: 36px;	  
		line-height: 36px;
		margin: 0px auto;
		background-size: 100% 100%;
		border: 1px rgb(85,86,232) solid;
		
		border-radius: 16px;
		color: rgb(85,86,232);
		text-align: center;
		margin-top: 20px;
	}
</style>
