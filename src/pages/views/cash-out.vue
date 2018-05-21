<style>
    .list-tips{
        text-align: left;
        border-bottom: none;
        color: #9E9797;
    }
    .detail-tip{
        color: #9E9797;
        font-size: 12px;
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
        font-size: 14px;
        color: #4A4A4A;
    }
    .fbLoginBtn{
        background-color: #4469B3;
        vertical-align: top;
        margin-top: 20px;
    }
    .fbLoginBtn:active{
        background-color: #4064AA;
    }
    .fbLoginBtn .icon-svg{
        display: inline-block;
        width: 35px;
        height: 35px;
        vertical-align: top;
    }
    .fbLoginBtn .icon-svg svg{
        height: 100%;
        width: 100%;
    }
</style>
<template>
  <div>
    <div class="container">
            <div class="money-card">
                <div class="income middle">
                    <span class="label-title"><span class="lang-balance">{{$t("textLabel.balance")}}</span>: </span>
                    <span class="label-text balance">{{ summary.balance | balance }}</span>
                </div>
                <div class="bottom">
                    <span class="label-title"><span class="lang-accumulate">{{$t("textLabel.cashout_accumulate")}}</span>: </span>
                    <span class="label-text accumulate">{{ summary.accumulate | balance }}</span>
                </div>
            </div>
            <div class="list-tips limitTips" v-show="showLimitTips">
                <span class="lang-withdraw-limit">
                    {{$t("textLabel.cashout_withdrawLimit",{limit: (summary.withdrawLimit|| 0).toFixed(2)})}}
                </span>
            </div>
            <template v-if="userType">
                <span v-if="userType == 'device'" class="cashBtn btn btn-large" @click="cashOut" :class="{'disable': cashDisable}"><span class="lang-cash-out">{{$t("textLabel.cash_out")}}</span></span>
            </template>

            <div class="income-details">
                <h3><span class="lang-details">{{$t("textLabel.details")}}</span></h3>
                <span class="lang-details-tip detail-tip">{{$t("textLabel.details_tip")}}</span>
                <ul class="incomeDetails" v-if="inComeList.length">
                    <li class="clearfix" v-for="(data, index) in inComeList" :key="index">
                        <span class="icon-svg fl">
                            <iconWallet></iconWallet>
                        </span>
                        <span class="time fr">{{data.date || ''}}</span>
                        <span class="info">
                            <span v-if="data.cash < 0">-</span>
                            <span class="" v-if="data.cash == data.paid_cash">{{Math.abs(data.cash) | balance}}</span>
                            <span class="" v-if="data.cash != data.paid_cash">{{Math.abs(data.paid_cash) | balance}}</span>
                            <br>
                            <span v-if="data.status == 0">{{$t("textLabel.cashout_withdrawStatus_0")}}</span>
                            <span v-if="data.status == 1 && (data.cash == data.paid_cash)">{{$t("textLabel.cashout_withdrawStatus_1")}}</span>
                            <span v-if="data.status == 1 && (data.cash != data.paid_cash)"
                                  v-html="$t('textLabel.cashout_withdrawStatus_cheat',{text: data.cash - data.paid_cash})"
                                  @click="showReasons(data.cash - data.paid_cash)"></span>
                        </span>
                    </li>
                 </ul>
            </div>
        </div>
        <ShowIncome :show="showIncomeBox" :showSms="showSmsBox" from="withdraw" :pcode="pcode" :pushData="pushData" @close="showIncomeBox = false"></ShowIncome>
        <ShowReasons :show="showReasonBox" :deductedData="deductedData" from="cash-out" @close="showReasonBox = false"></ShowReasons>
    </div>
</template>
<script>
    import NDB from '@src/util/NDB';
    import {iconFacebook,iconCoin,iconWallet} from '@svg';
    import ShowIncome from '../public/showIncome.vue';
    import ShowReasons from '../public/showReasons.vue';
    import { getStorage } from '@src/util/index.js';
    export default {
        components:{
            iconFacebook,
            iconCoin,
            iconWallet,
            ShowIncome,
            ShowReasons
        },
        data(){
            return {
                pageBlock: 2,
                dataLoaded: false,
                userType: '',
                cashDisable: true,
                showLimitTips: false,
                pcode:'',
                summary:{
                    balance: 0,
                    accumulate: 0,
                    withdrawLimit: 0
                },
                inComeList:[],
                showSmsBox: false,
                showIncomeBox: false,
                showReasonBox: false,
                income:{},
                pushData:{},
                deductedData: ''
            }
        },
        methods:{
            getPush(){
                var push_data = JSON.parse(window.localStorage.getItem('push_data') || '{}');
                console.log('-------push_data-----',push_data)
                if (!push_data.push_id) {
                    return false;
                }
                console.log("=====push_data======");
                this.showIncomeBox = true;
                this.pushData = push_data;
                window.localStorage.removeItem('push_data');
            },
            cashOut(){
                if(!this.cashDisable){
                    location.href = this.$version("./withdraw.html");
                }
            },
            login(){
                NDB.login();
            },
            showReasons(deductedCash){
                this.showReasonBox = true;
                this.deductedData = deductedCash;
            }
        },
        created(){
            NDB( () => {
                NDB.get('/v1/users/mine/cnn/promotion/income/withdraws/summary/',(d) => {

                    this.summary.balance = d.balance;
                    this.summary.accumulate = d.accumulate;
                    this.summary.withdrawLimit = d.withdraw_limit;
                    this.pcode = d.pcode;

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
                    NDB.isLogined((res) => {
                        this.pageBlock--;
                        if(res && res.login){
                            this.userType = res.user_type;

                            console.log(res);
                            this.showLimitTips = d.balance < d.withdraw_limit;
                            this.cashDisable = d.balance < d.withdraw_limit;
                            this.pushData = {type : 98, cash : (d.balance + d.accumulate) };
                            this.showIncomeBox = true;
                        }
                    });
                });
                NDB.get('/v1/users/mine/cnn/promotion/income/withdraws/',(data) => {
                    console.log(data)
                    this.pageBlock--;
                    this.inComeList = data.data;
                });
            });
        }
    }
</script>
