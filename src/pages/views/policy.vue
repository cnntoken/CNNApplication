<style lang="less" scoped>
    .container{
        background-color: #f3f3f3;
        padding: 20px 10px;
    }
    .title{
        font-size: 16px;
        font-weight: bold;
        color: #333333;
        margin-bottom: 16px;
    }
    .item{
        margin-bottom: 20px;
    }
    .context{
        margin-top: 10px;
        font-size: 14px;
        color: #807e7e;
    }
</style>
<template>
    <div class="container">
        <!--<div class="title">{{$t('POLICY.title')}}</div>-->
        <div class="context">
            <div class="item">{{$t('POLICY.desc')}}</div>
            <div class="item">{{$t('POLICY.notice1')}}</div>
            <div class="item">{{$t('POLICY.notice2')}}</div>
            <div class="item">{{$t('POLICY.explain')}}</div>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                pageBlock: 1
            }
        },
        created(){
            this.pageBlock--;
        }
    }
</script>
