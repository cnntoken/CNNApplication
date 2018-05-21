<style scoped lang="less">
    .shareBg{
        position: fixed;
        left: 0;
        top: 0;
        z-index: 5;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.6);
    }
    .wrap{
        position: absolute;
        top: 50%;
        left: 50%;
        width: 90%;
        padding-bottom: 55/3px;
        color: #fff;
        transform: translate(-50%,-50%);
        background-color: #fff;
        border-radius: 5px;
        overflow: hidden;
        .content{
            height: 80px;
            font-size: 16px;
            font-weight: bolder;
            line-height: 1.56;
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            background-image: linear-gradient(to top, #dc549e, #f9798f);
        }
        .btn{
            height: 40px;
            border-radius: 4px;
            background-color: #ef579a;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bolder;
            font-size: 16px;
            margin: 50/3px 20px 0;
        }
    }
    @border-width :7px;
    .paste{
        display: inline-block;
        position: relative;
        min-width: 170/3px;
        background-color: #f3f3f3;
        padding: 2px 5px;
        color: #333;
        font-size: 15px;
        border-radius: 5px;
        margin:0 3px;
        &::after{
            content: '';
            position: absolute;
            top: 100%;
            left: 50%;
            margin-left: -@border-width/2 - 3;
            margin-top: -1px;
            border: @border-width solid transparent;
            border-top-color: #f3f3f3;
        }
    }
</style>
<template>
    <div class="shareBg">
        <div class="wrap">
            <div class="content" v-if="lang == 'en'">
                <div>
                    {{$t('FB_SHARE.text1')}}
                </div>
                <div>
                    <span class="paste">{{$t('FB_SHARE.paste')}}</span><span>{{$t('FB_SHARE.text2')}}</span>
                </div>
            </div>
            <div v-else class="content">
                <div>
                    {{$t('FB_SHARE.text1')}}
                </div>
                <div>
                    <span>{{$t('FB_SHARE.text2')}}</span><span class="paste">{{$t('FB_SHARE.paste')}}</span><span>{{$t('FB_SHARE.text3')}}</span>
                </div>
            </div>
            <div class="btn" @click="ok">{{$t('FB_SHARE.ok')}}</div>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                lang: this.$i18n.locale
            }
        },
        methods:{
            ok(){
                this.$emit('share')
            }
        }
    }
</script>