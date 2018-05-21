<style lang="less" module>
    .wrap{
        color: #807e7e;
        padding: 6px 10px 8px;
        font-size: 21/2px;
        background-color: #fff;
        box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2);
        .box{
            display: flex;
        }
        .item{
            flex: 1;
        }
        .title{
            font-weight: bolder;
            text-align: center;
        }
        .number{
            font-size: 40/2px;
            color: #d94b8a;;
            font-weight: bolder;
        }
    }
</style>
<template>
    <div :class="$style.wrap">
        <div :class="$style.day">{{$t('textLabel.share_data_today')}}</div>
        <div :class="$style.box">
            <div :class="$style.item">
                <div :class="$style.title">{{$t('textLabel.share_data_share')}}</div>
                <div :class="[$style.data,'text-center']">
                    <div :class="$style.number">{{shareData.today_shares || 0}}</div>
                </div>
            </div>
            <div :class="$style.item">
                <div :class="$style.title">{{$t('textLabel.share_data_effective_share')}}</div>
                <div :class="[$style.data,'text-center']">
                    <div :class="$style.number">{{shareData.today_effective_shares || 0}}</div>
                </div>
            </div>
            <div :class="$style.item">
                <div :class="$style.title">{{$t('textLabel.share_data_friends')}}</div>
                <div :class="[$style.data,'text-center']">
                    <div :class="$style.number">{{shareData.today_children || 0}}</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        props:{
            shareData:{
                type: Object,
                default(){
                    return {}
                }
            }
        }
    }
</script>