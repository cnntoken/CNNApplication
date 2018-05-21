<style>
    .form{
        margin: 0;
        padding: 0;
    }
    .form-group{
        padding: 5px 10px;
    }
    .form-group .error-tip{
        color: #E60033;
        font-size: 12px;
    }
    .form-control{
        width: 100%;
        height: 40px;
        box-sizing: border-box;
        border-radius: 3px;
        border: 1px solid #D9D9D9;
        background-color: #FFF;
        padding: 0px 10px;
        font-size: 16px;
        color: #4A4A4A;
    }
    .form-group.error .form-control{
        color: #E60033;
        border-color: #E60033;
    }
    .form-control::-webkit-input-placeholder { /* WebKit browsers */
        opacity: 0.3;
    }
    .tips{
        padding: 10px;
        color: #9E9797;
        font-size: 12px;
    }
    .wait-alert{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 10;
    }
    .wait-alert .content{
        position: absolute;
        top: 31%;
        height: 210px;
        margin-top: -90px;
        left: 31px;
        right: 31px;
        background-color: #FFF;
        border-radius: 3px;
        padding: 10px;
        font-size: 16px;
        color: #7F7E7E;
        text-align: center;
    }
    .close{
        display: block;
        width: 20px;
        height: 20px;
        position: relative;
    }
    .close:before{
        position: absolute;
        width: 2px;
        height: 14px;
        background-color: #9E9797;
        left: 9px;
        top: 3px;
        content: " ";
        -webkit-transform: rotate(45deg);
                transform: rotate(45deg);
    }
    .close:after{
        position: absolute;
        width: 2px;
        height: 14px;
        background-color: #9E9797;
        left: 9px;
        top: 3px;
        content: " ";
        -webkit-transform: rotate(-45deg);
                transform: rotate(-45deg);
    }
    .wait-alert .content .text{
        clear: both;
        text-align: center;
        font-size: 16px;
        line-height: 1.5;
        margin: 0px auto; 
        padding-top: 5px;
        padding-bottom: 5px;
    }
    .withdraw-svg{
        width: 180px;
        height: 80px;
        display: inline-block;
    }
    .withdraw-svg svg{
        width: 100%;
        height: 100%;
    }
</style>

<template>
    <div>
        <div class="container" style="padding-top: 20px;">
            <div class="tips">
                <span class="lang-withdraw-tips">{{$t('textLabel.withdraw_tips')}}</span>
            </div>
            <form>
                <div :class="{'form-group': true,'error':err.phone}">
                    <input class="form-control" type="number" :placeholder="PLACEHOLDER.phone" v-model="info.phone" required="required" @blur="checkPhone">
                    <span class="error-tip" v-if="err.phone">{{err.phone}}</span>
                </div>
                <div :class="{'form-group': true,'error':err.repeat}">
                    <input class="form-control" type="number" :placeholder="PLACEHOLDER.phone2" v-model="info.repeat" required="required" @blur="checkRepeat">
                    <span class="error-tip" v-if="err.repeat">{{err.repeat}}</span>
                </div>
                <div :class="{'form-group': true,'error':err.amount}">
                    <input id="amount" class="form-control" type="number" :placeholder="PLACEHOLDER.amount" v-model="info.amount" required="required" @blur="checkAmount">
                    <span class="error-tip" v-if="err.amount">{{err.amount}}</span>
                </div>
            </form>
            <span class="tips"><span class="lang-balance">{{$t('textLabel.balance')}}</span>: <span class="balance">{{ summary.balance | balance}}</span></span>
            <span class="cashBtn btn btn-large" @click="submit"><span class="lang-ok">{{$t('textLabel.ok')}}</span></span>
        </div> 
        <div class="wait-alert" v-show="showWaitAlert" @click="goBack">
            <div class="content">
                <span class="close fr"></span>
                <div class="text">
                    <span class="lang-withdraw-wait">{{$t('textLabel.withdraw_wait')}}</span>
                </div>
                <span class="withdraw-svg">   
                    <iconWithdraw></iconWithdraw>
                </span>
            </div>
        </div>
    </div>
</template>

<script>
import NDB from '@src/util/NDB';
import { iconD, iconWithdraw } from '@svg';
export default {
    components:{
        iconD,
        iconWithdraw
    },
    data(){
        return{
            pageBlock:1,
            PLACEHOLDER: this.$i18n.getLocaleMessage(this.$i18n.locale).PLACEHOLDER,
            loading: false,
            showWaitAlert: false,
            info: {
                phone: '',
                repeat: '',
                amount: ''
            },
            summary: {},
            err: {
                phone: '',
                repeat: '',
                amount: ''
            }
        }
    },
    methods:{
        checkEmpty(item){
            if(!this.info[item]){
                this.err[item] = "This can not be empty.";
                return false;
            }
            this.err[item] = "";
            return true;
        },
        checkPhone(){
            if(!this.checkEmpty('phone'))return false;
            let reg = /^\d{10}$/;
            if (!reg.test(this.info.phone)) {
                this.err.phone = "The Phone Number is invalid."
                return false;
            }else{
                this.err.phone = "";
                return true;
            }
        },
        checkRepeat(){
            if(!this.checkEmpty('repeat'))return false;
            if(this.info.phone != this.info.repeat){
                this.err.repeat = "The Phone Number are not the same."
                return false;
            }else{
                this.err.repeat = "";
                return true;
            }
        },
        checkAmount(){
            if(!this.checkEmpty('amount'))return false;
            let amount = Number(this.info.amount);
            let {withdraw_limit, balance} = this.summary;
            if(withdraw_limit && amount < withdraw_limit){
                 this.err.amount = "Too less.";
                 return false;
            }
            if(balance && amount > balance){
                 this.err.amount = "Too more.";
                 return false;
            }
            this.err.amount = "";
            return true;
        },
        verfiy(){
            return this.checkPhone() && this.checkRepeat() && this.checkAmount();
        },
        submit(){
            if(!this.verfiy())return false;
            let {phone, amount} = this.info;
            let withdraw_cash = Number(amount);
            console.log(phone,withdraw_cash);
            NDB.post('/v1/users/mine/cnn/promotion/income/withdraws/', {
                phone,
                withdraw_cash
            }, (d) => {
                this.showWaitAlert = true;
            });
        },
        goBack(){
            history.go(-1);
        }
    },
    created(){
         NDB(()=>{
            NDB.get('/v1/users/mine/cnn/promotion/income/withdraws/summary/',(d)=>{
                this.summary = d;
                this.pageBlock--;
            });
        });
    }
}
</script>
