<style lang="less" scoped>
    .container{
        background-color: #f3f3f3;
    }
    .content{
        overflow: auto;
    }
    .box{
        padding: 12px 27px;
        margin: 13px 12px 0;
        background-color: #fff;
        border-radius: 10px;
    }
    .title{
        color: #D94B8A;
        font-size: 16px;
	    font-weight: bolder;
    }
    .desc{
        font-size: 16px;
        color: #4A4A4A;
        margin-top: 5px;
        margin-bottom: 25px;
    }
    .pic{
        text-align: center;
    }
    .img{
    max-width: 100%;
    }
    .setting{
        width: 200px;
        height: 40px;
        margin: 20px auto;
        color: #fff;
        font-size: 18px;
        line-height: 40px;
        text-align: center;
        border-radius: 20px;
        background-color: #D94B8A;
    } 
</style>
<template>
    <div class="container">
        <div class="content">
            <ul class="list">
            <li class="box" v-for="(data , index) in list" :key="index">
                <div class="title">{{data.title}}</div>
                <div class="desc"><span>{{data.desc}}</span><span>{{data.date}}</span></div>
                <div class="pic"><img class="img" :src="data.img"/></div>
            </li>
            <div class="setting" @click="goSystem">{{$t("SYSNOTICE-SETTING")}}</div>
        </ul>
        </div>     
    </div>
</template>

<script>
    import NDB from '@src/util/NDB';
    import sysNotice from "@src/lang/sysnotice.js";
    export default {
        data(){
            return {
                pageBlock: 1,
                list:  sysNotice[this.$i18n.locale].list
            }
        },
        created(){
            this.pageBlock--;
        },
        methods:{
            pageBack (){
                history.go(-1);
            },
            goSystem (){
               NDB(()=>{
                   NDB.goSystemSetting();
               })
            }
       }
    }
</script>
