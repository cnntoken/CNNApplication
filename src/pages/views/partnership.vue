<style lang="less">
    @import "../../assets/less/const.less";
    .container{
        font-family: Roboto;
    }
    .invite-card{
        text-align: center;
        padding: 0 0 25px;
    }
    .invite-card .card{
        margin: 0 auto;
        width: 100%;
        height: 92px;
        position: relative;
        // overflow: hidden;
        background-image: linear-gradient(-180deg, #8749DE 0%, #B24AC7 100%);
        color: #FFF;
        font-size: 22px;
        font-weight: bold;
        word-wrap: pre-line;
        line-height: 1;
    }
    .invite-card .card span{
        display: inline-block;
        margin-top: 10px;
        position: relative;
        z-index: 10;
    }
    .invite-card .card b{
        font-size: 36px;
        font-weight: 900;
        font-style: italic;
        color: #f8e71c;
    }
    .invite-card .card .terms-contest {
        position: absolute;
        right: 0;
        bottom: -18px;
        font-size: 12px;
        font-weight: normal;
        height: 24px;
        line-height: 24px;
        padding: 0 10px 0 15px;
        border-radius: 10px 0 0 10px;
        background-color: rgba(0, 0, 0, .6);
        z-index: 999;
    }
    .invite-card .card:after{
        content: " ";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-size: auto 100%;
        background-repeat: no-repeat;
        background-image: url('~@src/assets/images/@1x/partnership-banner.png');
        background-position: center;
    }

    @media only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (min--moz-device-pixel-ratio: 2), only screen and (-o-min-device-pixel-ratio: 2/1), only screen and (min-device-pixel-ratio: 2) {
        .invite-card .card:after{
            background-image: url('~@src/assets/images/@2x/partnership-banner.png');
        }
    }

    @media only screen and (-webkit-min-device-pixel-ratio: 3), only screen and (min--moz-device-pixel-ratio: 3), only screen and (-o-min-device-pixel-ratio: 3/1), only screen and (min-device-pixel-ratio: 3) {
        .invite-card .card:after{
        background-image: url('~@src/assets/images/@3x/partnership-banner.png');
        }
    }
    .share-tips{
        margin: 26px auto 12px;
        padding: 0 10px;
        .highlight{
            color: #d94b8a;
            font-size: 16px;
            font-weight: bold;
        }
        .aux{
            color: @color-aux;
            font-size: 12px;
            margin-top: 6px;
        }
    }
    .link-content{
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 20px;
        .link-box{
            min-width: 200px;
            padding: 5px 10px;
            border-radius: 4px;
            background-color: #e6e6e6;
            .desc{
                font-size: 10px;
                color: #9e9797;
            }
            .link{
                font-size: 12px;
                color: #807e7e;
                font-weight: bold;
                padding: 0 30px;
            }
        }
    }
    .transfer-content{
        margin:15px 20px 0;
        padding-top: 11px;
        border-top:1px solid #e8e8e8;
        .dfn{
            font-size: 16px;
            color: #d94b8a;
            font-weight: bold;
        }
        .desc{
            margin: 10px 0;
            font-size: 12px;
            color: #807e7e;
        }
        .content-box{
            width: 50%;
            margin: 16px auto 0;
            display: flex;
            align-items: center;
            justify-content: center;
            .item{
                flex: 1;
            }
            .item-name{
                display: block;
                font-size: 12px;
                color: #4a4a4a;
            }
        }
        .transfer-remind{
            padding: 0 26px;
            margin-bottom: 0;
        }
        .highlight{
            color: #d94b8a;
        }
    }

    .invite-miss{
        margin-bottom: 18px;
        .desc{
            padding: 10px 10px 0;
            font-size: 12px;
            text-align: center;
            color: #807e7e;
        }
        .code-box-content{
            margin-top: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .code-box{
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 6px 17px;
            margin: 0 auto;
            border-radius: 4px;
            background-color: #d94b8a;
            min-width: 150px;
            .code-text{
                font-size: 10px;
                margin-bottom: 2px;
                color: rgba(255, 255, 255, 0.75);
            }
            .code-character{

                color: #ffffff;
                font-size: 14px;
                font-weight: 500;
            }
        }
    }


    .invite-table{
        min-height: 0;
        table td{
            height: 40px;
        }
    }
    .invite-list-tips{
        border-bottom: none;
        padding-top: 10px;
        padding-bottom: 0;
        border-top: 1px solid #E8E8E8;
    }
    .newbie-task-invite {
        width: 80%;
        margin: 20px auto;
        color: #fff;
        text-align: left;
        .title {
            text-align: center;
            margin-bottom: 10px;
        }
        .transfer-img {
            margin: 5px 0;
            text-align: center;
            img {
                width: 80%;
                height: 80%;
            }
        }
        .task-proceed {
            width: 250px;
            height: 40px;
            line-height: 40px;
            text-align: center;
            margin: 20px auto;
            border-radius: 8px;
            color: #333;
            background-color: #ffb31a;
        }
    }
    .task-detail {
        color: #fff;
        .des {
            width: 90%;
            margin: 150px auto 20px;
            text-align: left;
        }
        .rules-table{
            margin:10px 0;
            overflow: auto;
            -webkit-overflow-scrolling: touch;
            table{
                width: 100%;
                background-color: #1a1a1a;
                tr {
                    &:first-child{
                        td{
                            border-bottom: 1px solid #333;
                        }
                    }
                    td{
                        &:not(:first-child){
                        padding: 0;
                    }
                        font-size: 10px !important;
                        &:first-child{
                            color: #d8d8d8;
                            font-weight: normal;
                            border-left: none;
                        }
                        border-left: 1px solid #333;
                        color: #b17813;
                        font-weight: bold;
                    }
                    &:not(:first-child){
                        .gain-coin{
                                    display: inline-block;
                                    background-color: #f8e81c;
                                    border: 1px solid #e5b72e;
                                    border-radius: 50%;
                                    width: 30px;
                                    height: 30px;
                                    line-height: 30px;
                                }
                    }
                }
            }
        }
        .proceed-btn {
            width: 250px;
            height: 40px;
            line-height: 40px;
            text-align: center;
            margin: 30px auto;
            border-radius: 8px;
            color: #333;
            background-color: #ffb31a;
        }
    }
</style>

<template>
<div>
    <div class="container">
        <ul class="NDB-tab">
            <li :class="{'active': channel== 'invite'}" @click="switchChannel('invite')"><a><span class="lang-invite">{{$t('textLabel.partnership_invite')}}</span></a></li>
            <li :class="{'active': channel== 'inviteList'}" @click="switchChannel('inviteList')"><a><span class="lang-invite-list">{{$t('textLabel.partnership_invite_list')}}</span></a></li>
        </ul>
        <div class="NDB-tab-content">
            <div class="NDB-tab-pannel" v-if="channel == 'invite'">
                <div class="invite-card">
                    <div class="card">
                        <span class="lang-share-card-text" v-html="$t('textLabel.partnership_share_card_text',{text:'<b>2500</b>'})"></span>
                    </div>
                    <div class="share-tips">
                        <div class="highlight" v-html="$t('textLabel.partnership_invite_tip')"></div>
                        <div class="aux">{{$t('textLabel.partnership_invite_tip2')}}</div>
                    </div>
                    <div class="link-content">
                        <div @click="copyLink" class="link-box">
                            <div class="desc">{{$t('textLabel.invite_copy')}}</div>
                            <div class="link">{{inviteLinkText}}</div>
                        </div>
                    </div>

                    <ul class="share-btn shareBtns">
                        <li @click="share('whatsapp')">
                            <span class="share-svg">
                                <iconWhatsapp></iconWhatsapp>
                            </span>
                            <span class="name"><span class="lang-whatsapp">{{$t('textLabel.whatsapp')}}</span></span>
                        </li>
                        <li @click="shareByFb">
                            <span class="share-svg">
                                <iconFacebook></iconFacebook>
                            </span>
                            <span class="name"><span class="lang-facebook">{{$t('textLabel.facebook')}}</span></span>
                        </li>
                        <!--<li @click="share('sms')" v-if="showSMS">-->
                        <li @click="share('sms')">
                            <span class="share-svg">
                                <iconMessage></iconMessage>
                            </span>
                            <span class="name"><span class="lang-sms">{{$t('textLabel.sms')}}</span></span>
                        </li>
                        <!--<li @click="share('other')" v-if="showOther">-->
                        <li @click="share('other')">
                            <span class="share-svg">
                                <iconShare/>
                            </span>
                            <span class="name"><span>{{$t('textLabel.other')}}</span></span>
                        </li>
                    </ul>


                    <div class="transfer-content" v-if="showTransfer">
                        <div class="dfn">
                            {{$t('textLabel.transfer_tips')}}
                        </div>
                        <div class="desc">
                            <div v-html="$t('textLabel.transfer_desc')"></div>
                        </div>
                        <div class="content-box">
                            <div class="item" v-if="transferPackages['com.lenovo.anyshare.gps']" @click="transferApp('com.lenovo.anyshare.gps','shareit')">
                                <span class="share-svg">
                                    <iconShareit></iconShareit>
                                </span>
                               <span class="item-name">{{$t('textLabel.shareit')}}</span>
                            </div>
                            <div class="item"  v-if="transferPackages['cn.xender']" @click="transferApp('cn.xender','xender')">
                                <span class="share-svg">
                                    <iconXender></iconXender>
                                </span>
                                <span class="item-name">{{$t('textLabel.xender')}}</span>
                            </div>
                        </div>
                        <div class="desc transfer-remind">
                            {{$t('textLabel.transfer_remind')}}
                        </div>
                    </div>
                    <shareFlow/>
                </div>
            </div>
            <div class="NDB-tab-pannel" v-if="channel == 'inviteList'">
                <div class="invite-miss">
                    <div class="desc" v-html="$t('textLabel.invite_miss_desc')"></div>
                    <div class="code-box-content">
                        <div class="code-box" @click="copyInviteCode">
                            <div class="code-text">{{$t('textLabel.invite_copy')}}</div>
                            <div class="code-character">{{userData.pcode}}</div>
                        </div>
                    </div>
                </div>
                <div class="list-tips invite-list-tips">
                    <span class="listTotalNum lang-invite-num">{{$t('textLabel.partnership_invite_num')}}{{userData.partners_count || 0}}</span>
                </div>
                <div class="table invite-table" v-if="userData.partners && userData.partners.length">
                    <table cellpadding="0" cellspacing="0" border="0">
                        <thead>
                            <tr>
                                <th class="center" width="80px"><span class="lang-rank">{{$t('textLabel.number')}}</span></th>
                                <th class="left"><span class="lang-user-id">{{$t('textLabel.user_id')}}</span></th>
                                <th class="center"><span class="lang-coins">{{$t('textLabel.coins')}}</span></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(partner,index) in userData.partners" :key="index">
                                <td class="center">{{index+1}}</td>
                                <td class="left">{{partner.name}}</td>
                                <td class="center">{{partner.gain_coins | balance}}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <!-- <fbPaste v-if="showFbPaste" @share="share('fb')"></fbPaste> -->
        <div class="NDB-newbie-task" v-if="task_done">
            <div class="newbie-task-invite" v-if="!task_learn">
                <div class="title" v-html="$t('textLabel.newbie_invite_title')"></div>
                <div>{{$t('textLabel.newbie_invite_content_1')}}</div>
                <template v-if="transferPackages['com.lenovo.anyshare.gps'] && transferPackages['cn.xender']">
                    <div class="transfer-img"><img :src="$t('textLabel.newbie_invite_img.sx')" alt=""></div>
                </template>
                <template v-else-if="transferPackages['com.lenovo.anyshare.gps'] && !transferPackages['cn.xender']">
                    <div class="transfer-img"><img :src="$t('textLabel.newbie_invite_img.s')" alt=""></div>
                </template>
                <template v-else-if="!transferPackages['com.lenovo.anyshare.gps'] && transferPackages['cn.xender']">
                    <div class="transfer-img"><img :src="$t('textLabel.newbie_invite_img.x')" alt=""></div>
                </template>
                <template v-else="!transferPackages['com.lenovo.anyshare.gps'] && !transferPackages['cn.xender']">
                    <div class="transfer-img"><img :src="$t('textLabel.newbie_invite_img.empty')" alt=""></div>
                </template>
                <div>{{$t('textLabel.newbie_invite_content_2',{cnn: $NDGCNN.PARTNERSHIP_TOTAL_COINS})}}</div>
                <div class="task-proceed" @click="taskDetail">{{$t('textLabel.newbie_invite_btn')}}</div>
            </div>
            <div class="task-detail" v-if="task_detail">
                <div class="des" v-html="$t('textLabel.newbie_invite_des',{cnn1:$NDGCNN.PARTNERSHIP_TOTAL_COINS,cnn2:$NDGCNN.TAKE_CHILD_COIN,cnn3:$NDGCNN.CHILD_REACH_GOAL_COIN[0]})"></div>
                <div class="proceed-btn" @click="taskDone">{{$t('textLabel.newbie_checkin_proceed')}}</div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import NDB from '@src/util/NDB';
    import { iconDbg,iconMessage,iconFacebook,iconWhatsapp,iconShare,iconShareit,iconXender } from '@svg';

import shareFlow from '../public/shareFlow.vue';
import fbPaste from '../public/fbPaste.vue';
import { config } from '@src/config';
import { getStorage,copy } from '@src/util/index.js';

export default {
    components:{
        iconDbg,
        iconShare,
        iconWhatsapp,
        iconFacebook,
        iconMessage,
        fbPaste,
        iconShareit,
        iconXender,
        shareFlow
    },
    data(){
        return{
            pageBlock: 1,
            showFbPaste: false,
            channel: 'invite',
            showSMS: false,
            showOther: false,
            task_done: false,
            task_learn: false,
            task_detail: false,
            user_type: '',
            userData: {},
            SHARE_INFO: this.$i18n.getLocaleMessage(this.$i18n.locale).SHAREINFO,
            transferPackages:{
                'cn.xender': false,
                'com.lenovo.anyshare.gps':false
            }
        }
    },

    computed:{
        inviteLinkText(){
            let str = this.$t('SHAREINFO.url_prefix.text');
            if(this.userData.pcode){
                str += this.userData.pcode + '/';
            }
            return str;
        },
        showTransfer(){
            let transferObj = this.transferPackages;
            for(let i in transferObj){
                if(transferObj.hasOwnProperty(i) && transferObj[i]){
                    return true;
                }
            }
            return false;
        }
    },
    methods:{
        switchChannel(channel){
            this.channel = channel;
        },
        copyLink(){
            let str = this.inviteLinkText;
            if(copy(str)){
                NDB.toast({msg : this.$t('COPYTIP')});
            }
        },
        copyInviteCode(){
            let str = this.userData.pcode;
            if(copy(str)){
                NDB.toast({msg : this.$t('COPYTIP')});
            }
        },
        shareByFb(){
            this.share('fb');
           let text = this.$t('SHAREINFO.text_no_name');
           if(this.userData.name){
               text = this.$t('SHAREINFO.text',{text:this.userData.name});
           }
           copy(text);
           this.showFbPaste = true;
        },
        transferApp(packageName,type){
            console.log(packageName)
            NDB.transferApp({
                'platform': packageName,
                 's_apk':'com.newsdog.cnn',
                 'params':{}
            },(res)=>{
                if(res.code == 200){
                    NDB.post('/v1/users/mine/cnn/promotion/app/share/',{type},(d)=>{
                        console.log(d);
                    });
                }
            })
        },
        taskDetail(){
            this.task_learn = true;
            this.task_detail = true;
        },
        taskDone(){
            NDB.post('/v1/users/mine/cnn/promotion/task/newbie/',{},(d)=>{
                if(d.gained_coins) {
                    window.localStorage.setItem('step_3_done', 'step_3_done');
                    location.href = `./index.html?v=${config.version}`;
                }
            });
        },
        share(platform){
            if(platform == 'fb'){
                this.showFbPaste = false;
            }
            let text = this.$t('SHAREINFO.text') + ' 👉 ';
            let title = this.$t('SHAREINFO.title');
            let url_prefix = this.$t(`SHAREINFO.url_prefix.${platform}`);
            let image = this.$t('SHAREINFO.image');
            if(this.user_type == 'fb' && this.userData.name){
                text = this.$t('SHAREINFO.text',{text:this.userData.name});
            }
            NDB.share({
                platform,
                text,
                title,
                url: url_prefix + (this.userData.pcode || "123456")+'/?t='+new Date().getTime(),
                image,
                have_img: false,
                from : "partnership"
            }, (d) => {
                NDB.post('/v1/users/mine/cnn/promotion/app/share/',{"type": platform},(d)=>{
                    if(d.gain_coins){
                        NDB.onShare({
                            coin : d.gain_coins
                        });
                    }
                });
            });
        }
    },
    created(){
        NDB(() => {

            NDB.isLogined((res)=>{
                this.user_type = res.user_type;
            });
            NDB.getAppInstallInfo({'packages': Object.keys(this.transferPackages).join(',')},(res)=>{
                console.log(res)
                this.transferPackages = res;
            });
            NDB.get('/v1/users/mine/cnn/promotion/partnerships/',(d) =>{
                if(NDB.VCODE >= 126 && !d.fu){
                    this.showSMS = true;
                }
                if(NDB.VCODE >= 130){
                    this.showOther = true;
                }
                if(getStorage('channel') == 'xiaomi'){
                    this.showSMS = false;
                }
                this.userData = d;
                this.pageBlock--;
            });
            let task_invite = window.localStorage.getItem('step_3');
            if(task_invite == 'step_3') {
                window.localStorage.removeItem('step_3');
            }
            if(task_invite == 'step_3') {
                this.task_done = true;
            }
        });
    }
}
</script>
