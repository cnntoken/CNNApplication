<style lang="less">
.container {
    width: 100%;
    height: 100%;
    position: relative;
    text-align: center;
    margin: 0;
    padding: 0;
    padding-bottom: 45px;
}

.boardcast {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 27px;
    overflow: hidden;
    z-index: 10;
}

.boardcast li {
    height: 27px;
    overflow: hidden;
    line-height: 27px;
    font-size: 13px;
    color: #FFF;
    vertical-align: middle;
}

.boardcast li .icon {
    width: 27px;
    height: 27px;
    line-height: 13px;
    padding: 7px;
    display: inline-block;
    vertical-align: middle;
}

.boardcast li .icon svg.icon-svg {
    width: 13px;
    height: 13px;
    fill: #FFFFFF;
}

.check-in {
    width: 100%;
    height: 297px;
    /*background: -webkit-gradient(linear, left top, left bottom, from(#ea5293), to(#903065));
    background: linear-gradient(#ea5293, #903065);*/
    background-color: #F6A623;
    overflow: hidden;
    position: relative;
}

.check-in .coin-box {
    height: 110px;
    background-image: url('~@src/assets/images/@1x/empty-box.png');
    background-position: center bottom;
    background-repeat: no-repeat;
    position: relative;
    background-size: auto 133px;
    position: relative;
}
.loaded .check-in .coin-box {
    -webkit-transition: all 0.5s 0.75s;
    transition: all 0.5s 0.75s;

}
.check-in .coin-box:before, .check-in .coin-box:after {
    content: " ";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-position: center bottom;
    background-repeat: no-repeat;
    background-size: auto 133px;
    display: block;
}
.loaded .check-in .coin-box:before, .loaded .check-in .coin-box:after {
    -webkit-transition: all 0.5s;
    transition: all 0.5s;
}
.check-in .coin-box:before {
    background-image: url('~@src/assets/images/@1x/bg-coins.png');
}

.check-in .coin-box:after {
    background-image: url('~@src/assets/images/@1x/box-coins.png');
}

.check-in.checked .coin-box {
    background-image: url('~@src/assets/images/@1x/box-close.png');
}

.check-in.checked .coin-box:before, .check-in.checked .coin-box:after {
    -webkit-transform: translate(0, -20px);
    transform: translate(0, -20px);
    opacity: 0;
}

.check-in .check-in-btn {
    background-color: #FFD333;
    margin: 10px auto 15px;
    display: block;
    cursor: pointer;
    font-size: 20px;
    border-radius: 10px;
    -webkit-box-shadow: 0px 3px 0px #DE9210;
            box-shadow: 0px 3px 0px #DE9210;
    color: #A16C01;
    width: 153px;
    text-align: center;
    height: 46px;
    line-height: 46px;
    position: relative;
    font-weight: bold;
}
.loaded .check-in .check-in-btn {
    -webkit-transition: all 0.5s;
    transition: all 0.5s;    
}
.check-in .check-in-btn:active {
    -webkit-box-shadow: 0px 0px 0px rgba(0, 0, 0, 0);
            box-shadow: 0px 0px 0px rgba(0, 0, 0, 0);
    top: 3px;
}

.check-in .check-in-btn.disabled {
    opacity: 0;
}

.check-in .check-in-checked-tips {
    color: #B57100;
    background-color: none;
    margin: 10px auto 15px;
    width: 100%;
    text-align: center;
    height: 46px;
    line-height: 46px;
    display: none;
    font-weight: bold;
}

.check-in.checked .check-in-btn {
    display: none;
}

.check-in.checked .check-in-checked-tips {
    display: block;
}
.check-in-rules-modal{
    position: fixed;
    background-color: rgba(0, 0, 0, 0.6);
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 30% 50px;
    z-index: 100;
}
.check-in-rules-modal .content{
    border-radius: 3px;
    background-color: #FFF;
    padding: 10px 15px;
    display: block;
    font-size: 12px;
    line-height: 1.5;
}
.check-in-rules-modal .content .title{
    font-weight: bold;
    color: #9E9797;
    font-size: 16px;
}
.check-in .check-in-days {
    position: relative;
    text-align: center;
    display: block;
    height: 93px;
    background-color: #FFF;
}

.check-in .days-tip {
    color: #4A4A4A;
    font-size: 10px;
    text-align: left;
    position: relative;
    display: block;
    padding-left: 20px;
    padding-top: 10px;
}

.check-in .check-in-rules-btn {
    position: absolute;
    right: 0;
    top: 60px;
    padding: 5px 4px 2px 8px;
    background-color: rgba(0, 0, 0, .2);
    border-radius: 4px 0px 0px 4px;
    color: #fff;
    font-size: 10px;
}

.check-in .check-in-progress {
    display: inline-block;
    padding: 0;
    margin: 10px 0 15px;
    overflow: visible;
    font-size: 0;
    height: 14px;
    border-bottom: 1px dashed #CCCCCC;
    vertical-align: top;
}

.check-in .check-in-progress li {
    width: 27px;
    text-align: center;
    display: inline-block;
    margin: 0px 5px;
    position: relative;
    vertical-align: top;
}

.check-in .check-in-progress li:nth-child(1) {
    margin-left: 0;
}

.check-in .check-in-progress li:nth-last-child(1) {
    margin-right: 0;
}

.check-in .check-in-progress li .coin {
    width: 27px;
    height: 27px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: #FFF;
    border: 1px solid #E5B72E;
    text-align: center;
    line-height: 26px;
    color: #CC9D3D;
    position: relative;
    font-size: 12px;
    font-weight: bold;
}

.check-in .check-in-progress li .coin:before {
    content: "+";
}

.check-in .check-in-progress li.active .coin {
    background: #F8E81C;
    border: 2px solid #E5B72E;
    line-height: 24px;
    color: #B17813;
    overflow: hidden;
    position: relative;
    font-weight: bold;
}
.check-in .check-in-progress li.active .coin:before {
    content: "";
    display: none;
}
.check-in .check-in-progress li .days {
    color: #4A4A4A;
    font-weight: 600;
    font-size: 8px;
    position: absolute;
    top: 27px;
    left: 0px;
    right: 0;
    text-align: center;
    height: 27px;
    line-height: 27px;
}

.check-in .check-in-progress li.active .days {
    font-size: 0;
}

.check-in .check-in-progress li.active .days:before {
    content: " ";
    width: 4px;
    height: 2px;
    background-color: #E5B72E;
    position: absolute;
    top: 12px;
    left: 50%;
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
    margin-left: -4px;
}

.check-in .check-in-progress li.active .days:after {
    content: " ";
    width: 8px;
    height: 2px;
    background-color: #E5B72E;
    position: absolute;
    top: 12px;
    left: 50%;
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
    margin-left: -2px;
}
.check-in-tips{
    height: 23px;
    padding-top: 7px;
    line-height: 16px;
    text-align: center;
    font-size: 16px;
    color: #B57100;
    font-weight: bold;
}
.check-in .money-box {
    position: absolute;
    left: 0;
    bottom: 200px;
    background-color: #000;
    border-radius: 0 7px 7px 0;
    color: #fff;
    font-size: 10px;
    background-color: rgba(0, 0, 0, .2);
    padding: 16px 20px 16px 16px;
    min-width: 75px;
    font-weight: bold;
    text-align: left;
}

.check-in .money-box .num, .check-in .money-box .rs {
    font-size: 14px;
    color: #F8DA1B;
    font-weight: bold;
}
.banner{
    padding: 10px;
}
.banner .banner-partnership{
    height: 90px;
    width: 100%;
    background-image: linear-gradient(-135deg, #FFBC1E 0%, #FAA419 100%);
    border-radius: 4px;
    display: block;
    overflow: hidden; 
}
.banner .banner-partnership:after{
    content:  " ";
    display: block;
    height: 90px;
    width: 100%;
    background-position: center bottom;
    background-repeat: no-repeat;
    position: relative;
    background-size: auto 90px;
    background-image: url('~@src/assets/images/@1x/banner.png?v=1');
}
.notice{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 34px;
    background-color: rgba(0, 0, 0, 0.86);
    line-height: 20px;
    padding: 7px;
    color: #FFF;
    width: 100%;
    text-align: center;
    z-index: 100;
    display: block;
    vertical-align: middle;
}

.notice .svg{
    width:20px;
    height: 20px;
    display: inline-block;
    vertical-align: middle; 
    line-height: 20px;
    position: relative;
    top: -4px;
}
.notice .svg svg{
    width: 20px;
    height: 20px;
}
.banner-title{
    display: block;
    padding: 5px 0px;
    position: relative;
}
.banner-title span{
    display: inline-block;
    background-color: #F5F5F5;
    color: #9E9797;
    font-size: 12px;
    width: 100px;
    position: relative;
    z-index: 1;
}
.banner-title:after{
    content:  " ";
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    margin-top: -1px;
    background-color: #CCCCCC;
    height: 2px;
    z-index: 0;
    transform: scale(1, 0.3);
}
@media only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (min--moz-device-pixel-ratio: 2), only screen and (-o-min-device-pixel-ratio: 2/1), only screen and (min-device-pixel-ratio: 2) {
    .check-in .coin-box {
        background-image: url('~@src/assets/images/@2x/empty-box.png');
    }
    .check-in.checked .coin-box {
        background-image: url('~@src/assets/images/@2x/box-close.png');
    }
    .check-in .coin-box:before {
        background-image: url('~@src/assets/images/@2x/bg-coins.png');
    }
    .check-in .coin-box:after {
        background-image: url('~@src/assets/images/@2x/box-coins.png');
    }
    .banner .banner-partnership:after{
        background-image: url('~@src/assets/images/@2x/banner.png?v=1');
    }
}

@media only screen and (-webkit-min-device-pixel-ratio: 3), only screen and (min--moz-device-pixel-ratio: 3), only screen and (-o-min-device-pixel-ratio: 3/1), only screen and (min-device-pixel-ratio: 3) {
    .check-in .coin-box {
        background-image: url('~@src/assets/images/@3x/empty-box.png');
    }
    .check-in.checked .coin-box {
        background-image: url('~@src/assets/images/@3x/box-close.png');
    }
    .check-in .coin-box:before {
        background-image: url('~@src/assets/images/@3x/bg-coins.png');
    }
    .check-in .coin-box:after {
        background-image: url('~@src/assets/images/@3x/box-coins.png');
    }
    .banner .banner-partnership:after{
        background-image: url('~@src/assets/images/@3x/banner.png?v=1');
    }
}

    .share-content{
        margin-top: 30px;
        font-size: 45/3px;
        .title{
            text-align: center;

            color: #f6a623;
        }
        .btn-share{
            display: flex;
            position: relative;
            justify-content: center;
            align-items: center;
            width: 540/3px;
            height: 30px;
            margin: 69/3px auto 99/3px;
            border-radius: 4px;
            background-color: #41d626;
            color: #fff;
            svg{
                width: 16px;
                height: 16px;
                margin-right: 10px;
            }
            .icon-coin{
                position: absolute;
                width: 20px;
                height: 20px;
                left: 100%;
                bottom: 100%;
                margin-left: -10px;
                margin-bottom: -10px;
                line-height: 20px;
                border-radius: 50%;
                font-size: 10px;
                text-align: center;
                color: #ffef57;
                background-color: #f8ac16;
                border: solid 2px #ffdd00;

            }
        }
        .desc{
            color: #333;
            margin-bottom: 12px;
        }
        img{
            max-width: 562/2px;
        }
    }
</style>

<template>
<div :class="{'loaded': bodyLoaded}">
    <div class="container">
        <div class="check-in" :class="{'checked': userData.has_checked}">
            <div class="coin-box"></div>
            <div class="check-in-tips">
                <span class="lang-check-in-tips">{{$t('textLabel.checkin_tips')}}</span>
            </div>
            <div class="check-in-btn" :class="{'checked': userData.has_checked, 'disabled': checkInDisable}" @click="checkIn">
                <span class="lang-check-in">{{$t('textLabel.checkin')}}</span>
            </div>
            <div class="check-in-checked-tips">
                <span class="lang-have-checked-in">{{$t('textLabel.checkin_havaCheckedInBefore')}}<span class="tomorrowCoins">{{ userData.checkin_coins && userData.checkin_coins[userData.continuity] }}</span>{{$t('textLabel.checkin_havaCheckedInAfter')}}</span>
            </div>
            <a class="money-box" href="./income.html">
                <div class="coin">
                    <span class="lang-coin">{{$t('textLabel.coin')}}</span>:
                    <span class="num">{{userData.total_coins | balance}}</span>
                </div>
                <!-- <div class="balance">
                    <span class="lang-balance">{{$t('textLabel.balance')}}</span>:
                    <span class="rs">{{userData.balance | balance }}</span>
                </div> -->
            </a>
            <span class="check-in-rules-btn" @click="showRulesModal = true">
                <span class="lang-check-in-rules">{{$t('textLabel.checkin_rules')}}</span>
            </span>
            <div class="check-in-days">
                <span class="days-tip">
                    <span class="checkedDays">{{ userData.continuity }}</span>/
                    <span class="totalDays">{{ userData.checkin_coins && userData.checkin_coins.length }}</span> <span class="lang-days">{{$t('textLabel.days')}}</span>
                </span>
                <ul class="check-in-progress" v-if="userData.checkin_coins">
                    <li :class="{'active': index < userData.continuity}" v-for="(d,index) in userData.checkin_coins" :key="index">
                        <span class="coin">{{d}}</span>
                        <span class="days lang-day">{{index + 1}}{{$t('textLabel.day')}}</span>
                    </li>
                </ul>
            </div>
        </div>
        <div class="share-content">
            <div class="title" v-html="$t('textLabel.checkin_share_tip')"></div>
            <div class="btn-share" @click="shareApp"><iconWhatsappWhite/><span>{{$t('textLabel.checkin_share_btn')}}</span><div class="icon-coin">{{$NDGCNN.CHECKIN_GAIN_COIN_LIST[2]}}</div></div>
            <div class="desc">{{$t('textLabel.checkin_share_desc')}}</div>
            <div class="img">
                <img :src="$t('INCOME_SHARE_IMAGE')">
            </div>
        </div>
    </div>
    <div class="check-in-rules-modal" v-show="showRulesModal" @click="showRulesModal = false">
        <div class="content">
            <div class="title">
                <span class="lang-check-in-rules">{{$t('textLabel.checkin_rules')}}</span>
            </div>
            <span class="lang-check-in-rules-detail">{{$t('textLabel.checkin_rulesDetail',{cnn1:$NDGCNN.CHECKIN_GAIN_COIN_LIST[0]})}}</span>
        </div>
    </div>
    <taskProceed v-if="checkin_task_end" from="check_in_task" :pushData="userData"></taskProceed>
</div>
  
</template>
<script>
import NDB from '@src/util/NDB';
import { iconD,iconWhatsappWhite } from '@svg';
import taskProceed from '../public/taskProceed.vue';
export default {
  data(){
    return {
        bodyLoaded: false,
        showRulesModal:false,
        checkInDisable:true,
        userData: {},
        dataLoaded:false,
        noLogin: true,
        checkin_task_end: false
    }
  },
  components: {
      iconD,
      taskProceed,
      iconWhatsappWhite
  },
  watch:{
        dataLoaded(val){
            if(val){
                this.$launchEnd();
            }
        }
    },
  methods:{
      checkIn(){
        if(this.noLogin){
            NDB.login();
            return false;
        }
        if(this.checkInDisable){
            return false;
        }
        this.checkInDisable = true;
        NDB.post('/v1/users/mine/cnn/promotion/checkin/',(d)=>{
            if(d.gain_coins){
                this.updateTotalCoins(d.gain_coins, "checkin", d.continuity || 0);
            }
            this.userData.has_checked = true;
            this.userData.continuity += 1;
            let checkinTask = window.localStorage.getItem('step_1') == 'step_1';
            if(d.live && checkinTask) {
                this.checkin_task_end = true;
            }
        });
      },
      updateTotalCoins (coin,type,days){
            var type2Fn = {
                "checkin" : "onCheckIn",
                "share" : "onShare",
            };
            var fn = NDB[type2Fn[type]];
            var params = {
                coin: coin
            };
            if(days){
              params.days = days;
            }
            fn(params); 
            this.userData.total_coins += coin;
      },
      reGetPromotionCode(){
        NDB.get('/v1/users/mine/cnn/promotion/code/',(d)=>{
            this.userData = d;
            this.dataLoaded = true;
        });
      },
      getBasicData(){
          NDB.get('/v1/users/mine/cnn/promotion/',this.renderData);
      },
      renderData(d){
          this.userData = d;
          if(!d.pcode && this.noLogin){
              this.reGetPromotionCode();
          }else {
              this.dataLoaded = true;
          }
          setTimeout(()=>{
              this.bodyLoaded = true;
          },300);
          d.tomorrowCoins = d.checkin_coins[d.continuity];
          this.checkInDisable = false;
      },
      shareApp(){
          let platform = 'whatsapp';
          let text = this.$t('SHAREINFO.text') + ' 👉 ';
          let title = this.$t('SHAREINFO.title');
          let url_prefix = this.$t(`SHAREINFO.url_prefix.${platform}`);
          let image = this.$t('SHAREINFO.image');
          NDB.share({
              platform,
              text,
              title,
              url: url_prefix + (this.userData.pcode || "123456") + '/?t=' + new Date().getTime(),
              image,
              have_img: false,
              from: "checkin"
          }, (d) => {
              NDB.post('/v1/users/mine/cnn/promotion/app/share/', {"type": platform}, (d) => {});
          });
      },
  },
  created(){
      NDB(() => {
        NDB.isLogined((res)=>{
          var defData;
          if(res && res.login){
            this.noLogin = false;
            this.getBasicData();
          }else{
            if(NDB.LIVE){
              defData = {
                  'continuity': 0,
                  'checkin_coins': this.$NDGCNN.CHECKIN_GAIN_COIN_LIST,
                  'total_coins': 0,
                  'balance': 5,
                  'daily_share_times': 3,
                  'share_coin': 5,
                  'read_coin': 2.5,
                  'has_father': true,
                  'promotion_code': true,
                  'partnership_coin': 450
              }
            }else{
              defData = {
                  'continuity': 0,
                  'checkin_coins': this.$NDGCNN.CHECKIN_GAIN_COIN_LIST,
                  'total_coins': 0,
                  'balance': 5,
                  'daily_share_times': 0,
                  'share_coin': 0,
                  'read_coin': 0,
                  'has_father': false,
                  'promotion_code': false,
                  'partnership_coin': 0
              }                              
            }
            this.renderData(defData);
            this.noLogin = true;
          }
        });
    });
  }
}
</script>
