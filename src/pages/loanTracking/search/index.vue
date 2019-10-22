<template>
    <div class="main">
        <div class="search-box">
            <div class="search">
                <img class="search-img" src="../../../assets/images/38/searchfor@2x.png" alt="" @click="onSearch">
                <input class="search-input" v-model="value" type="text" placeholder="搜索">
            </div>
            <span class="cancel-btn" @click="onCancel">取消</span>
        </div>
        <p class="tips">搜索指定内容</p>
        <p class="search-type">申请顺序号<span class="line"></span>企业名称</p>
    </div>
</template>

<script>
// import base from '@/base';

export default {
    name: 'contractSearch',
    // mixins: [base],
    data() {
        return {
            value: ''
        }
    },
    methods: {
        onSearch() {

        },
        onCancel() {
            this.$router.go(-1);
        }
    }
}
</script>

<style lang="scss" scoped>
input{
    outline: none;
    border: 0;
    background-color: rgba(0, 0, 0, 0);
}
.search-box{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
}
.search{
    flex: 1;
    background-color: #ffffff;
    border: 1px solid #cccccc;
    height: 32px;
    border-radius: 16px;
    display: flex;
    align-items: center;
    padding-left: 10px;
    padding-right: 10px;
}
.search-img{
    width: 19px;
    height: 19px;
    margin-right: 6px;
}
.search-input{
    flex: 1;
}
.cancel-btn{
    padding-left: 12px;
    padding-right: 12px;
}
p{
    text-align: center;
}
.tips{
    color: #999999;
}
.search-type{
    color: #4c62e7;
    display: flex;
    justify-content: center;
    align-items: center;
}
.line{
    display: inline-block;
    width: 1px;
    height: 16px;
    background-color: #cccccc;
    margin-left: 20px;
    margin-right: 20px;
}
</style>