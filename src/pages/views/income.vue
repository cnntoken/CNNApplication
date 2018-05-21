<style lang="less">
    .detail-tip{
        color: #9E9797;
        font-size: 12px;
    }
/* 
    .leader-board{
        width: 100%;
        height: 88px;
        background: #B953C4;
        background-image: -webkit-linear-gradient(top, #B953C4 0%, #E0428E 100%);
        background-image: linear-gradient(-180deg, #B953C4 0%, #E0428E 100%);
        text-align: center;
        display: block;
        position: relative;
        overflow: hidden;
    }
    .leader-board .title{
        height: 20px;
        color: #DB5372;
        font-size: 15px;
        line-height: 20px;
        background: #F8C81B;
        text-align: center;
        width: 110px;
        display: block;
        margin: 0 auto;
        position: relative;
        margin-bottom: 5px;
        z-index: 100;
        font-weight: bold;
    }
    .leader-board .title::before{
        content:  " ";
        width: 10px;
        height: 20px;
        position: absolute;
        left: -8px;
        top: 0;
        background-color: #F8C81B;
        border-radius: 0px 0px 0px 6px;
        -webkit-transform: skew(10deg, 0);
        transform: skew(10deg, 0);
    }

    .leader-board .title::after{
        content:  " ";
        width: 10px;
        height: 20px;
        position: absolute;
        right: -8px;
        top: 0;
        background-color: #F8C81B;
        border-radius: 0px 0px 6px 0px;
        -webkit-transform: skew(-10deg, 0);
        transform: skew(-10deg, 0);
    }
    .leader-board .top3{
        color: #FFF;
        font-size: 14px;
        line-height: 1.3;
        display: block;
        text-align: center;
        position: relative;
        z-index: 100;
    }
    .leader-board .top3 .order{
        font-weight: bold;
    }
    .leader-board .top3 .rs{
        font-style: italic;
    }
    .leader-board .bg-svg{
        width: 0px;
        height: 0px;
        position: absolute;
        z-index: 1;
    }
    .leader-board .bg-svg svg{
        width: 100%;
        height: 100%;
    }
    .leader-board .bg-svg:nth-child(1){
        -webkit-transform: rotate(-21deg);
        transform: rotate(-21deg);
        width: 18px;
        height: 18px;
        top: 14px;
        left: 40px;
    }
    .leader-board .bg-svg:nth-child(2){
        width: 62px;
        height: 62px;
        bottom: -24px;
        left: 0px;
    }
    .leader-board .bg-svg:nth-child(3){
        -webkit-transform: rotate(-30deg);
        transform: rotate(-30deg);
        width: 40px;
        height: 40px;
        bottom: -13px;
        left: 43px;
    }
    .leader-board .bg-svg:nth-child(4){
        -webkit-transform: rotate(45deg);
        transform: rotate(45deg);
        width: 15px;
        height: 15px;
        bottom: 4px;
        left: 93px;
    }
    .leader-board .bg-svg:nth-child(5){
        -webkit-transform: rotate(45deg);
        transform: rotate(45deg);
        width: 15px;
        height: 15px;
        bottom: 32px;
        right: 78px;
    }
    .leader-board .bg-svg:nth-child(6){
        -webkit-transform: rotate(15deg);
        transform: rotate(15deg);
        width: 62px;
        height: 62px;
        bottom: -12px;
        right: 4px;
    }

    .leader-board .bg-svg:nth-child(7){
        -webkit-transform: rotate(-57deg);
        transform: rotate(-57deg);
        width: 43px;
        height: 43px;
        bottom: -16px;
        right: 43px;
    } */

    .list-tips{
        text-align: left;
        color: #9E9797;
        padding-bottom: 10px;
        height: auto;
    }
    .income-details{
        margin: 10px;
        padding-bottom: 50px;
    }
    .income-details h3{
        font-size: 14px;
        color: #9E9797;
        font-weight: bold;
    }
    .income-details ul li{
        border-bottom: 1px solid #E8E8E8;
        padding: 10px 0;
        font-size: 0;
    }
    .income-details ul li .icon-svg{
        width: 26px;
        height: 26px;
        display: inline-block;
    }
    .income-details ul li .icon-svg svg{
        width: 26px;
        height: 26px;
    }
    .income-details ul li .time{
        width: 68px;
        font-size: 12px;
        color: #9E9797;
    }
    .income-details ul li .info{
        display: block;
        margin: 0px 72px 0 32px;
        display: block;
        font-size: 14px;
        color: #4A4A4A;
    }
    .bottom-bar{
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        background: #FFF;
        box-shadow: 0px -1px 1px rgba(0, 0, 0, 0.05);
    }
    .bottom-bar .btn{
        margin: 12px 10px;
    }
    .cash-out-btn{
        position: absolute;
        width: 120px;
        height: 26px;
        background-color: #E60033;
        top: 50px;
        left: 50%;
        margin-left: -60px;
        line-height: 24px;
        color: #FFF;
        border-radius: 4px;
        display: block;
        &.disable{
             width: 200px;
             margin-left: -100px;
             color: #fff;
            background-color: #d8d8d8;
        }
    }
</style>

<template>
<div>
      <div class="container">
        <!-- <a class="leader-board" :href="$version('./leader-board.html')">
            <span class="bg-svg">
                <iconD></iconD>
            </span>
            <span class="bg-svg">
                <iconD></iconD>
            </span>
            <span class="bg-svg">
                <iconD></iconD>
            </span>
            <span class="bg-svg">
                <iconD></iconD>
            </span>
            <span class="bg-svg">
                <iconD></iconD>
            </span>
            <span class="bg-svg">
                <iconD></iconD>
            </span>
            <span class="bg-svg">
                <iconD></iconD>
            </span>
            <span class="title"><span class="lang-leader-board">{{$t('textLabel.income_leader_board')}}</span></span>
            <div class="leaderBoard" v-if="billboard.length">
                <span class="top3" v-for="(bill,index) in billboard" :key="index">
                    <span class="order">{{index+1}}</span>
                    <span class="name">{{bill.name}}</span>
                    <span class="name">&nbsp;{{ bill.revenue | balance}}cnn</span>
                </span>
            </div>
        </a> -->
        <ShareData :shareData="shareData" v-if="shareData && shareData.is_hide != 1"/>
        <div class="money-card">
            <div class="total middle">
                <span class="label-title"><span class="lang-total">{{$t('textLabel.income_total')}}</span>: </span>
                <span class="label-text totalCash">{{income.total_coins | balance}}cnn</span>
            </div>
            <!-- <a class="cash-out-btn btn" :href="$version('./cash-out.html')"><span class="lang-cash-out">{{$t('textLabel.cashout')}}</span></a> -->
            <a class="cash-out-btn btn disable"><span>Withdraw(coming soon)</span></a>
            <!-- <div class="bottom left">
                <span class="label-title">
                <span class="lang-yesterday">{{$t('textLabel.income_yesterday')}} </span>
                <span class="lang-coins">{{$t('textLabel.coins')}}</span>: </span>
                <span class="label-text yesterdayCoins"> {{income.yesterday_coins | coin }}</span>
            </div> -->
            <div class="bottom center">
                <span class="label-title">
                <span class="lang-yesterday">{{$t('textLabel.income_yesterday')}} </span>
                <span class="lang-income">{{$t('textLabel.income')}}</span>: </span>
                <span class="label-text yesterdayCash">{{ income.yesterday_coins | balance}}cnn</span>
            </div>
        </div>
        <!-- <div class="list-tips">
            <span class="lang-exchange-rate">{{$t('textLabel.income_exchange_rate')}}</span><br>
            <span class="lang-exchange-tip">{{$t('textLabel.income_exchange_tip')}}</span>

        </div> -->
        <a class="btn btn-large shareMoneyBtn" @click="selectShareChannel"><span class="lang-share-money">{{$t('textLabel.share_money')}}</span></a>
        <div class="income-details">
            <h3><span class="lang-details">{{$t('textLabel.details')}}</span></h3>
            <span class="lang-details-tip detail-tip">{{ $t('textLabel.details_tip') }}</span>
            <ul class="incomeDetails">
                <div v-for="(notice,index) in notifications" :key="index" v-if="!(notice.action == 2 && notice.coins == 0)">
                    <li class="clearfix" v-if="notice.action != 6">
                        <template v-if="notice.action == 2 && notice.coins == 0">
                            <span class="icon-svg fl">
                                <span :is="'icon-whatsapp'"></span>
                            </span>
                            <span class="time fr">{{ notice.datetime }}</span>
                            <span class="info">
                                <span >{{$t('textLabel.action_share_whatsapp')}}</span>
                            </span>
                        </template>
                        <template v-else>
                            <span class="icon-svg fl">
                                <!-- <span :is="ACTIONS2TYPE(notice.action)"></span> -->
                                <iconD></iconD>
                            </span>
                                <span class="time fr">{{ notice.datetime }}</span>
                                <span class="info">
                                <!-- <template v-if="notice.cash">
                                    <span class="">{{notice.cash > 0 ? '+':'-'}}{{Math.abs(notice.cash) | balance}}</span>
                                </template> -->
                                <template>
                                    <span >{{notice.coins > 0 ? '+':'-'}}</span>
                                    <span>{{Math.abs(notice.coins) | balance }}</span>&nbsp;<span class="lang-coins">{{$t('textLabel.coins')}}</span>
                                </template>
                                <br>
                                <span>{{$t(switchACTIONS(notice.action))}}</span>
                            </span>
                        </template>

                    </li>
                    <template v-else>
                        <li class="clearfix">
                            <span class="icon-svg fl">
                                <iconD></iconD>
                            </span>
                            <span class="time fr">{{notice.datetime || ""}}</span>
                            <span class="info">
                                <span class="rs">{{notice.coins | balance }}</span><br>
                                <span>{{$t(switchACTIONS(notice.action))}}</span>
                            </span>
                            
                        </li>
                        <li class="clearfix">
                            <span class="icon-svg fl">
                                <iconD></iconD>
                            </span>
                            <span class="time fr">{{notice.datetime || ""}}</span>
                            <span class="info">
                                {{notice.coins}} <span class="lang-coins">{{$t('textLabel.coins')}}</span><br>
                                <span>{{$t(switchACTIONS(notice.action))}}</span>
                            </span>
                        </li>
                    </template>
                </div>
            </ul>
        </div>
      </div>
        <ShowIncome :show="showIncomeBox" :showSms="showSmsBox" :pcode="pcode" from="income" :pushData="pushData" @close="showIncomeBox = false"></ShowIncome>
</div>
</template>
<script>
import NDB from '@src/util/NDB';
import {ACTIONS , ACTION_TYPES} from '@src/util/index';
import { iconCoin,iconD,iconWallet,iconCash,iconWhatsapp } from '@svg';
import ShowIncome from '../public/showIncome.vue';
import { getStorage } from '@src/util/index.js';
import ShareData from '../public/personalShareData.vue';
export default {
  components:{
      iconCoin,
      iconD,
      iconWallet,
      iconCash,
      ShowIncome,
      iconWhatsapp,
      ShareData
  },
  data(){
      return{
          pageBlock: 2,
          showSmsBox: false,
          showIncomeBox: false,
          loading: false,
          billboard:[],
          income:{},
          notifications:[],
          pcode:'',
          shareData:{},
          pushData:{}
      }
  },
  methods:{
      switchACTIONS(action,onlyType){
        let str = ACTIONS[action];
        if(onlyType){
            return str;
        }else{
            if(str == 'follow' || str == 'checkin' || str == 'bonus'){
                return `textLabel.${ACTIONS[action]}`;
            }else{
                return `textLabel.action_${ACTIONS[action]}`;
            }
        }
    },
      ACTIONS2TYPE(action,onlyType){
        if(onlyType){
            return ACTION_TYPES[action];
        }else {
            return `icon-${ACTION_TYPES[action]}`;
        }
    },
      selectShareChannel(){
        this.showIncomeBox = true;
        this.pushData = {type:99,cash:this.income.total_coins};
      },
      getPush(){
          var push_data = JSON.parse(window.localStorage.getItem('push_data') || '{}');
          push_data.noShareBtn = true;
          if (!push_data.push_id) {
              return false;
          }
          this.showIncomeBox = true;
          this.pushData = push_data;
          window.localStorage.removeItem('push_data');
      }
  },
  computed:{
        shareCardText(){
            let tipType = this.ACTIONS2TYPE(this.pushData.type,true);
            let tipAction = this.switchACTIONS(this.pushData.type,true);
            let info = this.$t(`SHAREINFO.card_tips.${tipAction}`,{text: tipType == 'cash' ? this.pushData.cash : this.pushData.coin});
            return info;
        }
  },
    created(){
      NDB(() => {
            // NDB.get('/v1/users/mine/cnn/promotion/billboard/',{limit:3},(data) =>{
            //     this.pageBlock--;
            //     var d = data.data || [];
            //     if(d.length > 3){d.length = 3}
            //     this.billboard = d;
            // });
            NDB.get('/v1/users/mine/cnn/promotion/income/',(d)=>{
                this.pageBlock--;
                this.income = d;
                this.revenue = d.revenue;
                this.pcode = d.pcode;
                this.shareData = d.stats || {};
                if(NDB.VCODE >= 126 && !d.fu){
                    this.showSmsBox = true;
                }
                if(getStorage('channel') == 'xiaomi'){
                    this.showSmsBox = false;
                }
                try{
                    this.getPush();
                }catch(e){
                    console.log(e);
                }
            });
            NDB.get('/v1/users/mine/cnn/promotion/notifications/',(data)=>{
                this.pageBlock--;
                this.notifications =  data.data || [];
                console.log('notification',this.notifications)
            });
        });
    }
}
</script>