<template>

    <div class="main">

        <van-nav-bar
                :title='title'
                fixed
        />

        <div class="content">
                <img :src="img1" class="img" @click="gomyActivities">
                <img :src="img2" class="img" @click="gomyperformance">
        </div>




        <TabBar/>

    </div>

</template>

<script>

    //引入组件首字母大写
    import TabBar from '@/components/tabBar';

    export default {

        //基础数据存放处
        data (){
            return {
                title : '我的',
                img1: require('@/assets/images/other/wodehuodong.jpg'),
                img2: require('@/assets/images/other/wodeyeji.jpg'),
                //  screenWidth: document.body.clientWidth, // 屏幕尺寸
                //  screenHeight: document.body.clientHeight, // 屏幕尺寸
            }
        },

        //数据预加载
        created : function(){
            this.screenHeight = window.screenHeight;
        },

        //网页加载完成
        mounted () {
            const that = this
            window.onresize = () => {
                return (() => {
                    window.screenWidth = document.body.clientWidth;
                    window.screenHeight = document.body.clientHeight;
                    that.screenWidth = window.screenWidth;
                    that.screenHeight = window.screenHeight;

                })()
            }
        },

        //声明方法
        methods : {

            gomyActivities : function(){
                this.$router.push('/myActivities');
            },
            gomyperformance : function(){
                this.$router.push('./myperformance');
            },


        },

        //计算属性
        computed: {

        },


        components: {
            TabBar
        }
    }
</script>

<style lang="scss" scoped>
    .img{
        border-radius: 20px;
        width: 95%;
        padding:8px 12px 0 12px;
    };
    .main{
        background-color: rgb(238,238,238);
        margin: 0;
        padding: 0;
    };
    .content{
        height:600px;
        background-color: rgb(238,238,238);
    }
</style>
