<style lang="less" scoped>
    .container{
        background-color: #f3f3f3;
    }
    .item{
        padding: 20px 10px;
        &:not(:last-child){
            border-bottom: 1px solid rgba(192, 192, 192, 0.42);
        }
    }
    .title{
        font-size: 16px;
        font-weight: bold;
        color: #333333;
    }
    .time{
        font-size: 12px;
        color: #333333;
        span{
            margin-right: 5px;
        }
    }
    .context{
        margin-top: 10px;
        font-size: 14px;
        color: #807e7e;
    }
</style>
<template>
    <div class="container">
        <ul class="list">
            <li class="item" v-for="(data , index) in list" :key="index">
                <div class="title">{{data.title}}</div>
                <div class="time"><span>{{data.time}}</span><span>{{data.date}}</span></div>
                <div class="context" v-html="data.context"></div>
            </li>
        </ul>
    </div>
</template>
<script>
    import notifyJson from '@src/lang/notifies.json';
    export default {
        data(){
            return {
                pageBlock: 1,
                list: notifyJson[this.$i18n.locale].list
            }
        },
        created(){
            this.pageBlock--;
        }
    }
</script>
