<style lang="less" scoped>
    .content{
        position: absolute;
        top: 100px;
        right: 0;
        font-size: 20px;
        height: 42px;
        line-height: 42px;
        padding: 0 6px;
        border-radius: 21px 0 0 21px;
        color: #ffee13;
        background-color: rgba(0, 0, 0, .7);
        box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.3);
        z-index: 999;
        span{
            font-size: 16px;
            display: inline-block;
            &.clock{
                img {
                    &.clock-img{
                        margin-right: 8px;
                        vertical-align: bottom;
                    }
                    &.coins-img{
                        height: 30px;
                        margin-right: 5px;
                        vertical-align: top;
                    }
                }
                .coins-svg{
                    position: relative;
                    display: inline-block;
                    width: 24px;
                    height: 24px;
                    margin: 0 10px 14px -16px;
                    vertical-align: bottom;
                    &::before{
                        content: '10';
                        position: absolute;
                        top: -6px;
                        left: 3px;
                        font-size: 14px;
                        font-weight: bold;
                    }
                }
            }
        }
    }
    .share-data {
        top: 150px;
    }
    @media only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (min--moz-device-pixel-ratio: 2), only screen and (-o-min-device-pixel-ratio: 2/1), only screen and (min-device-pixel-ratio: 2) {
    .clock-img {
        display: inline-block;
        width: 20px;
        height: 15px;
        margin: 0 5px 5px 3px;
        vertical-align: middle;
        background-size: cover;
        background-image: url('~@src/assets/images/COUNT-CLOCK.png');
    }
}
</style>
<template>
<div>
    <div :class="['content', {'share-data':countdownData.stylePosition}]" @click="showRewardsTipsComponent('hourlyAble')" v-if="countdownData.status">
        <span class="clock"><div class="clock-img"></div></span>
        <span>{{minutes<10?('0'+minutes):minutes}}:{{seconds<10?('0'+seconds):seconds}}</span>
    </div>
    <div :class="['content', {'share-data':countdownData.stylePosition}]" @click="showRewardsTipsComponent('hourlyDisable')" v-else>
        <span class="clock">
            <span class="coins-svg"><iconCoinCountdown /></span>
            <img class="coins-img" :src="hourlyReward" alt="">
        </span>
    </div>
</div>
</template>
<script>
import iconCoinCountdown from '@svg/icon-countdown-coin.vue';
export default {
    props:['countdownData','countdownTimeStamp'],
    components:{
        iconCoinCountdown
    },
    data(){
        return{
            countClock: require('@src/assets/images/COUNT-CLOCK.png'),
            hourlyReward: require('@src/assets/images/HOURLY-REWARDS-COIN.png'),
            minutes: 0,
            seconds: 0
        }
    },
    watch: {
        countdownTimeStamp(val){
            if(val){
                this.calculateTime();
            }
        }
    },
    methods:{
        calculateTime(){
            var intervalTimer = setInterval(()=>{
                this.getRemainTime();
                if(this.seconds <= 0 && this.minutes <= 0){
                    this.countdownData.status = false;
                    clearInterval(intervalTimer);
                } else {
                   
                }
            }, 1000)
        },
        getRemainTime(){
            var deviceTime = new Date().getTime();
            var serverTime =  this.countdownData.countDownSuccessTime * 1000;
            var t = 3600*1000 + serverTime - deviceTime;
            if(t >=0){
                this.seconds = Math.floor((t / 1000) % 60);
                this.minutes = Math.floor(t / 1000 / 60);
            } else{
                this.seconds = 0;
                this.minutes = 0;
            }
        },
        showRewardsTipsComponent(type){
            this.$emit('showRewardsTipsComponent', type);
        },
        prevent() {

        }  
    },
    created(){
        this.calculateTime();
    }
}
</script>

