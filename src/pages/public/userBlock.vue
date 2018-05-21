<style lang="less" module>
    .blocked {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: auto;
        -webkit-overflow-scrolling: touch;
        .content {
            padding: 50px 20px 0;
            font-size: 14px;
            color: #9e9797;
            .avatar{
                width: 258/3px;
                margin: 0 auto;
            }
            .desc{
                margin-top: 20px;
            }
        }

    }
</style>

<template>
    <div :class="$style.blocked">
        <div :class="$style.content">
            <div class="text-center">
                <img :src="suspendImage" :class="$style.avatar" alt="">
            </div>
            <div :class="$style.desc">{{$t('textLabel.user_blocked_1')}}</div>
            <div :class="$style.desc">{{$t('textLabel.user_blocked_2')}}</div>
            <div :class="$style.desc">
                <div>{{$t('textLabel.user_blocked_3')}}</div>
                <div>{{$t('textLabel.user_blocked_4')}}</div>
                <div>{{$t('textLabel.user_blocked_5')}}</div>
                <div>{{$t('textLabel.user_blocked_6')}}</div>
            </div>
            <div :class="$style.desc">{{$t('textLabel.user_blocked_7')}}</div>
        </div>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                suspendImage: require('@src/assets/images/user-suspend.png')
            }
        }
    }
</script>