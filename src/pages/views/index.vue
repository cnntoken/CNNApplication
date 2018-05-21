<style lang="less">
    .container{
        padding-bottom: 20px;
    }
    header {
        height: 80px;
        position: relative;
        background-color: #D94B8A;
        text-align: center;
        margin-bottom: 1px;
        /*z-index: 1;*/
        padding-top: 0;
        overflow: hidden;
    }
    header .avatar {
        position: absolute;
        left: 50%;
        top: 0;
        width: 50px;
        height: 50px;
        margin-left: -25px;
        overflow: hidden;
        border-radius: 25px;
        box-shadow: 0 3px 8px 0 rgba(0, 0, 0, .24);
    }

    header .avatar svg {
        display: block;
        width: 50px;
        height: 50px;
    }

    header .avatar.noAvatar svg {
        display: block;
    }

    header .avatar .user-avatar {
        position: absolute;
        width: 50px;
        height: 50px;
        top: 0;
        left: 0;
        z-index: 1;
        border-radius: 50%;
        background-size: 100% auto;
        background-repeat: no-repeat;
        background-position: center center;
    }

    header .username {
        color: #FFF;
        font-size: 12px;
        display: block;
        margin-top: 55px;
        text-align: center;
    }

    header .money-box {
        position: absolute;
        left: 0;
        top: 0px;
        margin: 10px 0;
        background-color: #000;
        border-radius: 0 7px 7px 0;
        color: #fff;
        font-size: 10px;
        background-color: rgba(0, 0, 0, .2);
        padding: 7px 14px 7px 11px;
        min-width: 75px;
        font-weight: bold;
        text-align: left;
    }

    header .money-box .num, header .money-box .rs {
        font-size: 16px;
        color: #F8DA1B;
        font-weight: bold;
    }

    header .check-in {
        position: absolute;
        top: 0;
        right: 26px;
    }

    header .check-in-btn {
        background-color: #FFDA21;
        margin: 10px auto 3px;
        cursor: pointer;
        font-size: 14px;
        font-weight: bold;
        border-radius: 4px;
        box-shadow: 0 3px 0 #DE9210;
        color: #926e01;
        width: 83px;
        height: 27px;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    header .check-in-btn:active {
        box-shadow: 0 1px 0 #DE9210;
        top: 2px;
    }

    header .check-in-btn.check-in-active {
        z-index: 10002;
    }

    header .check-in .continous-days {
        color: #7F1947;
        font-size: 10px;
    }
    .swiper-container-autoheight, .swiper-container-autoheight .swiper-slide {
        min-height: 169px!important;
    }
    .swiper-wrapper .swiper-slide:nth-child(-n+2){
        position: relative;
    }
    .swiper-wrapper .swiper-slide:nth-child(1)::before {
        content: '';
        position: absolute;
        right: 12.54%;
        bottom: 17%;
        width: 30.32%;
        height: 18.34%;
        background-image: url("~@src/assets/images/swiper-coin.png");
        background-size: 100%;
        -webkit-animation: swipercoin .5s linear 0s infinite alternate;
        animation: swipercoin .5s linear 0s infinite alternate;
        background-repeat: no-repeat;
        opacity: 0;
    }
    .hi .swiper-wrapper .swiper-slide:nth-child(1)::before {
        right: 21.87%;
        opacity: 1;
    }
    .en .swiper-wrapper .swiper-slide:nth-child(-n+2)::before {
        opacity: 1;
    }
    @keyframes swipercoin {
        0% {
            -webkit-transform: scale(.9);
            transform: scale(.9);
        }
        20% {
            -webkit-transform: scale(1.05);
            transform: scale(1.05);
        }
        40% {
            -webkit-transform: scale(.9);
            transform: scale(0.9);
        }
        100% {
            -webkit-transform: scale(.9);
            transform: scale(.9);
        }
    }
    .index-list {
        padding: 0 10px 10px 10px;
    }

    .index-list li {
        padding: 10px;
        margin: 6px 0;
        border-radius: 10px;
        box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
        &.sys-notice {
            padding: 0;
            height: 40px;
            background-color: #d94b8a;
            border-radius: 10px;
            a{
                display: inline-block;
                padding: 0 15px;
                display: inline-block;
                color: #fff;
            }
        }
        &.p_share {
            &.share-active {
                z-index: 10002;
            }
        }
        &.p_partnership {
            &.invite-active {
                z-index: 10002;
            }
        }
    }
    .index-list li:active {
        background-color: #FAFAFA;
    }

    .index-list li:after {
        display: none;
        content: "";
    }

    .index-list li.important {
        -webkit-box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.20);
        box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.20);
    }

    .index-list li a {
        padding: 0 40px 0px 30px;
        font-size: 16px;
        color: #4A4A4A;
        font-weight: 500;
    }

    .index-list li a:active {
        background-color: rgba(0, 0, 0, 0);
    }

    .index-list li a:active .icon {
        background-color: #FAFAFA;
    }

    .index-list li svg.icon-svg {
        width: 16px;
        height: 16px;
        fill: #CCA3AB;
        display: inline-block;
        line-height: 16px;
    }

    .index-list li .coin-tip {
        position: absolute;
        color: #fff;
        height: 16px;
        overflow: hidden;
        font-size: 11px;
        background-color: #f5ac3b;
        text-align: center;
        min-width: 0;
        border-radius: 0 0 3px 3px;
        transform: skew(0deg);
        width: 57px;
        top: 0;
        right: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        font-style: italic;
        line-height: normal;
        .small-svg {
            margin-left: 2px;
            width: 7px;
            height: 12px;
        }
    }
    .index-list li .attachment {
        padding: 12px 0 0 0;
        background-color: rgba(0, 0, 0, 0);
        margin-left: 0;
        position: relative;
        display: none;
    }

    .index-list li .attachment .btn {
        position: absolute;
        top: 50%;
        margin-top: -12px;
        right: 6px;
        padding: 0 6px;
        text-decoration: none;
        background-color: #DC4E85;
        color: #FFF;
        border-radius: 4px;
        border: none;
        display: block;
        height: 24px;
        line-height: 24px;
    }

    .index-list li .attachment .text {
        font-size: 12px;
        color: #7F7E7E;
        line-height: 1.2;
        display: block;
        margin-right: 85px;
    }

    .onLoginMask {
        display: block;
        position: fixed;
        z-index: 10000;
        background-color: rgba(0, 0, 0, 0.1);
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    .official-email {
        color: #4990E2;
        margin: 10px 0;
    }

    .notification-link {
        padding-right: 10px !important;
    }

    .nav-notice {
        font-size: 12px;
        line-height: 12px;
        color: #D94B8A;
        font-weight: bold;
        font-style: normal;
    }

    .invite-content {
        padding: 0 10px;
        .invite-box {
            display: flex;
            flex-direction: row;
            justify-content: space-between;

        .input {
            height: 34px;
            flex: 1;
            display: flex;
            margin-right: 10px;
            padding-left: 15px;
            border-radius: 10px;
            background-color: #fff;
            box-shadow: inset 0 0 1px 0 rgba(0, 0, 0, 0.2);
            border: solid 1px #d8d8d8;
            overflow: hidden;
            font-size: 13px;

        .code-label {
            font-weight: 500;
            color: #d94b8a;
            white-space: nowrap;
            line-height: 34px;
        }

        .code-input {
            position: relative;
            flex: 1;
            overflow: hidden;
            input {
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                border: none;
                outline: none;
                padding-left: 4px;
                background-color: transparent;
            }
        }
    }
    .submit {
        font-weight: bold;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 70px;
        height: 34px;
        color: #fff;
        font-size: 14px;
        border-radius: 10px;
        background-color: #d94b8a;
        box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2);
    }

    }
    .desc {
        padding-left: 10px;
        font-size: 12px;
        color: #e60033;
    }

    }
    .task-entrance {
        position: fixed;
        bottom: 35px;
        right: 22px;
        width: 70px;
        height: 68px;
        background-image: url("~@src/assets/images/TASK-ENTRANCE.png");
        background-size: contain;
    }

    .NDB-newbie-task {
    .modal-close {
        top: -16px;
        left: 94%;
        background-color: transparent;
        border: none;
        &:before {
             background-color: #f5f5f5;
         }
        &:after {
             background-color: #f5f5f5;
         }
    }
    .newbie-des {
        margin-top: 15%;

    .newbie-img {
        width: 190px;
        height: 110px;
        margin: 0 auto 12px;
        background: url("~@src/assets/images/newbie.png") no-repeat;
        background-size: contain;
    }

    .newbie-title {
        font-size: 18px;
        font-weight: bold;
        margin-bottom: 16px;
        color: #ffb31a;
        text-align: center;
    }

    .newbie-guide {
        padding: 0 32px;
        margin-bottom: 36px;
        color: #fff;
        text-align: left;
    }

    .newbie-start {
        width: 50%;
        height: 42px;
        line-height: 42px;
        margin: 0 auto;
        color: #333;
        border-radius: 8px;
        background-color: #ffb31a;
        text-align: center;
    }

    }
    .newbie-step-1, .newbie-step-2, .newbie-step-3 {
        width: 280px;
        margin: 44px auto;
        text-align: left;

    .circle {
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background-color: #ffcc00;
        margin-right: 14px;
        float: right;
    }

    .straight {
        height: 20px;
        border-right: 1px dashed #ffcc00;
        margin-right: 20px;
    }

    .content {
        padding: 20px 10px;
        border: 1px dashed #ffcc00;
        color: #fff;
    }

    }
    .newbie-step-2 {
             margin: 100px auto;

            .circle {
                margin-left: 126px;
                float: none;
            }

            .straight {
                margin-right: 148px;
            }

    }

    .newbie-step-3 {
        width: 320px;
        margin: 90px auto;
        .content {
            padding: 15px 10px;
        }

    .circle {
        margin-left: 152px;
        float: none;
    }

    .straight {
        height: 40px;
        margin-right: 162px;
    }

    }
    }


    .policy-box{
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 20px auto;
        color: #588ad4;
        .exclamation{
            text-align: center;
            width: 48/2px;
            height: 48/2px;
            line-height: 48/2px;
            border-radius: 50%;
            margin-right: 3px;
            border: 1px solid  #588ad4;
            font-weight: bolder;
            transform: scale(.8);
        }
        .policy-link{
            height: 60/2px;
            font-size: 48/3px;
            line-height: 60/2px;
            text-align: center;
            color: #588ad4;
            text-decoration: underline;
        }
    }
    .position-empty{
        width: 100%;
        height: 12px;
    }

</style>

<template>
    <div :class="{'loaded':dataLoaded}">
        <UserBlock v-if="blocked"/>
        <div v-else class="container">
            <header>
                <div class="avatar" @click="tapUserInfo" :class="{'noAvatar':!avatarThumbnail}">
                    <span class="user-avatar" v-if="avatarThumbnail"
                          :style="{backgroundImage: 'url('+ avatarThumbnail + ')'}"></span>
                    <iconAvatar></iconAvatar>
                </div>
                <span class="username" :class="{'noName': !userData.name}" @click="tapUserInfo">
                    {{userData.name}}
                    <span v-if="!userData.name" class="lang-sign-in">{{$t('textLabel.index_sign_in')}}</span>
                </span>
                <a class="money-box" :href="$version('./income.html')">
                    <div class="coin">
                        <span class="lang-coin">{{$t('textLabel.coin')}}</span>:
                        <span class="num">{{userData.total_coins || 0}}</span>
                    </div>
                    <!-- <div class="balance">
                        <span class="lang-balance">{{$t('textLabel.balance')}}</span>:
                        <span class="rs">{{userData.balance | balance }}</span>
                    </div> -->
                </a>
                <span class="check-in">
                    <a class="btn check-in-btn"
                       :class="{'checked': userData.has_checked, 'check-in-active': newbie.step_1_start}"
                       @click="checkIn">
                        {{$t('textLabel.checkin')}}
                    </a>
                    <span class="continous-days lang-continous">{{$t('textLabel.index_continous',{text: userData.continuity})}}</span>
                </span>
            </header>
            <ShareData :shareData="userData.stats" v-if="userData.stats && userData.stats.is_hide != 1"/>
            <div class="position-empty"></div>
            <!-- <Boardcast/> -->
            <!-- <CountDownCoins :countdownData="countdownData" @showRewardsTipsComponent="showRewardsTipsComponent" :countdownTimeStamp="countdownTimeStamp"></CountDownCoins> -->
            <!-- <HourRewardTip :show="showHourlyTips" @close="showHourlyTips = false"></HourRewardTip> -->



            <!-- 更改：去掉banner -->
            <!-- <Swiper :dataArr="imageData" :onBannerTap="bannerTap"></Swiper> -->

            <ul class="NDB-list index-list">
                <li v-if="displaySystemNotice" class="sys-notice">
                    <a :href="$version('./sys-notice.html')">{{$t('SYSNOTICE')}}</a>
                </li>

                <!-- 更改： 去掉notice  -->
                <!-- <li  v-if="$t('NOTICE')">
                    <a :href="$version('./notifications.html')" class="text-one-line notification-link">
                    <span class="icon">
                        <iconNotify class="icon-svg"></iconNotify>
                    </span>
                        <span class="nav-notice">{{$t('NOTICE')}}</span>
                    </a>
                </li> -->
                <li :class="{'p_partnership': 1, 'invite-active': newbie.step_3_start}"
                    v-if="userData.partnership_coin"  id="newbie-invite">
                    <a @click="inviteFriends">
                    <span class="icon">
                        <iconPartnership class="icon-svg"></iconPartnership>
                    </span>
                        <span class="lang-partnership">{{$t('textLabel.partnership')}}</span>
                        <div class="coin-tip" v-if="userData.partnership_coin">
                            <span>{{'+' + userData.partnership_coin}}</span> <span class="small-svg"><iconSmallCoin/></span>
                        </div>
                    </a>
                </li>
                <li :class="{'p_share': 1, 'active': activeNav=='share' || newbie.step_2_start, 'share-active': newbie.step_2_start}"
                    v-if="userData.share_coin" id="newbie-share">
                    <a @click="toggleNav('share')">
                    <span class="icon">
                        <iconShareApp class="icon-svg"></iconShareApp>
                    </span>
                        <span class="lang-share-on-fb">{{$t('textLabel.share_on_fb')}}</span>
                        <div v-if="userData.share_coin" class="coin-tip"><span>{{'+' +userData.share_coin}}</span> <span
                                class="small-svg"><iconSmallCoin/></span></div>
                    </a>
                    <div class="attachment">
                        <span class="text"><span class="lang-share-tip daily_share_times">{{$t('textLabel.share_tip',{cnn: $NDGCNN.ACTION_TYPE_GAIN_COIN_MAPPING[12]})}}</span></span>
                        <button class="btn shareNewsBtn" @click="shareNews('whatsapp')"><span class="lang-share-app">{{$t('textLabel.share_app')}}</span>
                        </button>
                    </div>
                </li>
                <li class="p_income">
                    <a :href="$version('./income.html')">
                    <span class="icon">
                        <iconIncome class="icon-svg"></iconIncome>
                    </span>
                        <span class="lang-income">{{$t('textLabel.income')}}</span>
                    </a>
                </li>
                <li :class="{'active': activeNav=='invite'}" v-if="userData.show_pcode_box">
                    <a @click="toggleNav('invite')">
                      <span class="icon">
                        <iconInviteCode class="icon-svg"></iconInviteCode>
                    </span>
                        <span class="lang-invite-code">{{$t('textLabel.invite_code')}}</span>
                    </a>
                    <div class="invite-content attachment">
                        <div class="invite-box">
                            <div class="input">
                                <div class="code-label">{{$t('textLabel.invite_code')}}:</div>
                                <div class="code-input">
                                    <input type="text" maxlength="8" v-model="invite_code">
                                </div>
                            </div>
                            <div class="submit" @click="invited">{{$t('textLabel.invite_code_submit')}}</div>
                        </div>
                        <div class="desc">{{$t('textLabel.invite_code_tips',{text:50})}}</div>
                    </div>
                </li>
                <li>
                    <a class="faqLink" :href="$version('./faq.html')">
                    <span class="icon">
                        <iconFaq class="icon-svg"></iconFaq>
                    </span>
                        <span class="lang-faq">{{$t('textLabel.faq')}}</span>
                    </a>
                </li>
            </ul>
    
            <div class="policy-box">
                <span class="exclamation">!</span>
                <a :href="$version('./policy.html')" class="policy-link">{{$t('textLabel.policy_notice')}}</a>
            </div>





            <!--newbie task-->
            <div class="task-entrance" @click="newbieEntrance"
                 v-if="newbie.showTaskIcon"></div>
            <showEntrance v-if="newbie.showEntranceBox" :pushData="userData" @taskProcessStart="taskProcessStart"
                          @close="newbie.showEntranceBox = false"></showEntrance>

            <div class="NDB-newbie-task" v-if="newbie.taskDes">
                <div class="newbie-des">
                    <div class="newbie-img"></div>
                    <div class="newbie-title">{{$t('textLabel.newbie_title')}}</div>
                    <div class="newbie-guide" v-html="$t('textLabel.newbie_guide',{cnn: $NDGCNN.ACTION_TYPE_GAIN_COIN_MAPPING[14]})"></div>
                    <div class="newbie-start" @click="newbieStart">{{$t('textLabel.newbie_start')}}</div>
                </div>
                <div class="modal-close" @click="closeDes"></div>
            </div>
            <div class="NDB-newbie-task" v-if="newbie.step_1_start">
                <div class="newbie-step-1">
                    <div class="circle"></div>
                    <div class="straight"></div>
                    <div class="content" v-html="$t('textLabel.newbie_step_1')"></div>
                </div>
            </div>
            <div class="NDB-newbie-task" v-if="newbie.step_2_start">
                <div class="newbie-step-2">
                    <div class="circle" id="circle-step-2"></div>
                    <div class="straight"></div>
                    <div class="content" v-html="$t('textLabel.newbie_step_2',{cnn:$NDGCNN.ACTION_TYPE_GAIN_COIN_MAPPING[12]})"></div>
                </div>
            </div>
            <div class="NDB-newbie-task" v-if="newbie.step_3_start">
                <div class="newbie-step-3">
                    <div class="circle" id="circle-step-3"></div>
                    <div class="straight"></div>
                    <div class="content" v-html="$t('textLabel.newbie_step_3')"></div>
                </div>
            </div>
            <taskProceed v-if="newbie.step_2_end" from="share_task" :pushData="userData"
                         @taskProceed="taskProceed"></taskProceed>
            <taskProceed v-else-if="newbie.step_3_end" from="task_all_proceed" :pushData="userData"
                         @taskProceed="taskProceed"></taskProceed>

        </div>
    </div>
</template>

<script>
    import NDB from '@src/util/NDB';
    import {getQueryString, setStorage} from '@src/util/index.js';
    import {config} from '@src/config';
    import {
        iconArc,
        iconAvatar,
        iconHaha,
        iconIncome,
        iconLetter,
        iconNews,
        iconPartnership,
        iconShareApp,
        iconFaq,
        iconNotify,
        iconSmallCoin,
        iconInviteCode
    } from '@svg';
    import Swiper from '@src/components/swiper';
    import Boardcast from '@src/components/boardcast.vue';
    import taskProceed from '../public/taskProceed.vue';
    import showEntrance from '../public/showEntrance.vue';
    import ShareData from '../public/personalShareData.vue';
    import UserBlock from '../public/userBlock.vue';
    import CountDownCoins from '../public/countDownCoins.vue';

    let newbieScroll = (dom1,dom2)=>{
        let top1 = dom1.offsetTop + dom1.offsetHeight;
        let top2 = dom2.offsetTop;
        let range = top2 - top1-10;
        if(range < 0)range = 0;
        window.scrollTo(0, range);
    }

    export default {
        components: {
            iconArc,
            iconAvatar,
            iconHaha,
            iconIncome,
            iconLetter,
            iconNews,
            iconPartnership,
            iconShareApp,
            iconFaq,
            iconNotify,
            iconSmallCoin,
            iconInviteCode,
            Swiper,
            Boardcast,
            taskProceed,
            showEntrance,
            ShareData,
            UserBlock,
            CountDownCoins
        },
        data(){
            return {
                newbie: {
                    showTaskIcon: false,
                    isTask: false,
                    first: false,
                    taskDes: false,
                    showEntranceBox: false,
                    step_1_start: false,
                    step_1_end: false,
                    step_2_start: false,
                    step_2_end: false,
                    step_3_start: false,
                    step_3_end: false,
                    supportLocalStorage: true
                },
                blocked: false,
                noLogin: false,
                dataLoaded: false,
                showHourlyTips: false,
                user_type: '',
                userData: {},
                activeNav: '',
                countdownData: {
                    countDownSuccessTime: '',
                    status: false,
                    stylePosition: false
                },
                countdownTimeStamp : 0,
                imageData: this.$t('SWIPERS'),
                invite_code: window.localStorage.getItem('invite_code') || '',
                displaySystemNotice: false
            }
        },
        watch: {
            dataLoaded(val){
                if (val) {
                    this.$launchEnd();
                }
            }
        },
        methods: {
            newbieScroll(dom1,dom2){
                let containerHeight = window.innerHeight;
                let top1 = dom1.offsetTop ;
                let top2 = dom2.offsetTop ;
                let dis = dom2.offsetHeight;
                let range = top2 - top1 + dis + 10;
                this.$el.style.height = containerHeight + range + 'px';
                if(range < 0)range = 0;
                window.scrollTo(0, range);
            },
            invited(){
                let code = this.invite_code;
                let reg = /^\w{6}$/;
                if (!code) {
                    NDB.toast({msg: this.$t('textLabel.invite_code_empty')});
                    return false;
                }
                if (!reg.test(code)) {
                    NDB.toast({msg: this.$t('textLabel.invite_code_invalid')});
                    return false;
                }
                NDB.post('/v1/users/mine/cnn/promotion/code/', {
                    promotion_code: code
                }, (d) => {
                    if (d.live) {
                        this.userData.show_pcode_box = false;
                        let msg = this.$t('textLabel.invite_code_success');
                        if (NDB.VCODE >= 131) {
                            NDB.coinToast({msg, coin: d.gain_coins}, () => {
                            })
                        } else {
                            NDB.toast({msg});
                        }
                    } else {
                        NDB.toast({msg: this.$t('textLabel.invite_code_fail')});
                    }
                });
            },
            toggleNav(item) {
                if (this.activeNav == item) {
                    this.activeNav = '';
                } else {
                    this.activeNav = item;
                }
            },
            readNews(){
                NDB.readNews();
            },
            checkIn(){
                if (this.newbie.isTask) {
                    setStorage('step_1', 'step_1');
                }
                let url = './checkin.html';
                location.href = `${url}?v=${config.version}`;
            },
            inviteFriends(){
                if (this.newbie.isTask) {
                    window.localStorage.setItem('step_3', 'step_3');
                }
                let url = './partnership.html';
                location.href = `${url}?v=${config.version}`;
            },
            shareNews(platform){
                let text = this.$t('SHAREINFO.text') + ' 👉 ';
                let title = this.$t('SHAREINFO.title');
                let url_prefix = this.$t(`SHAREINFO.url_prefix.${platform}`);
                let image = this.$t('SHAREINFO.image');
                console.log("SHAREINFO.image", image);

                NDB.share({
                    platform: "whatsapp",
                    text,
                    title,
                    url: url_prefix + (this.userData.pcode || "123456") + '/?t=' + new Date().getTime(),
                    image,
                    have_img: false,
                    from: "index"
                }, (d) => {
                    window.localStorage.removeItem('step_1_done');
                    this.userData.task_info.share = true;
                    this.newbie.step_2_start = false;
                    NDB.post('/v1/users/mine/cnn/promotion/app/share/', {"type": platform}, (d) => {
                        if (this.newbie.isTask) {
                            this.newbie.step_2_end = true;
                        }
                    });
                });
            },
            updateTotalCoins(coin, type, days){
                var type2Fn = {
                    "checkin": "onCheckIn",
                    "share": "onShare",
                };
                var fn = NDB[type2Fn[type]];
                var params = {
                    coin: coin
                };
                if (days) {
                    params.days = days;
                }
                fn(params);
                this.userData.total_coins += coin;
            },
            reGetPromotionCode(){
                NDB.get('/v1/users/mine/cnn/promotion/code/', (d) => {
                    this.userData = d;
                    this.dataLoaded = true;
                    localStorage.setItem('pcode', d.pcode);
                });
            },
            tapUserInfo(){
                if (this.user_type != "fb") {
                    NDB.login();
                }
            },
            renderData(d){
                document.querySelector('body').classList.add(NDB.LANG);
                if (!d.fu) {
                    NDB.requirePermissions(this.$i18n);
                }
                this.userData = d;
                this.countdownData.stylePosition = (this.userData.stats && this.userData.stats.is_hide != 1);

                if (!d.pcode && this.noLogin) {
                    this.reGetPromotionCode();
                } else {
                    this.dataLoaded = true;
                }
                try {
                    localStorage.setItem('pcode', d.pcode);
                } catch (e) {
                }

                try {
                    localStorage.setItem('test', 'test');
                } catch (e) {
                }
                try {
                    this.newbie.first = (getQueryString('first') == 'true' && window.localStorage.getItem("loginStatus") != "true");
                    window.localStorage.setItem('loginStatus', 'true');
                } catch (e) {
                    this.newbie.first = false;
                }
                try {
                    this.newbie.supportLocalStorage = window.localStorage.getItem('test') == 'test';
                } catch (e) {
                    this.newbie.supportLocalStorage = false;
                }
                if(!this.userData.task_info.done && !this.newbie.first && this.newbie.supportLocalStorage) {
                    this.newbie.showTaskIcon = true;
                }
                if (this.newbie.first && !this.userData.task_info.done && !this.userData.task_info.checkin && !this.userData.task_info.share && this.newbie.supportLocalStorage) {
                    setTimeout(()=> {
                        this.newbie.taskDes = true;
                    }, 2000);
                }
                let checkinSource = window.localStorage.getItem('checkin_done');
                if(checkinSource == 'true') {
                    window.localStorage.removeItem('checkin_done');
                }
                if (window.localStorage.getItem('step_1_done') == 'step_1_done' && checkinSource == 'true') {
                    this.newbie.taskDes = false;
                    this.newbieTaskWrap();
                }
                if (window.localStorage.getItem('step_3_done') == 'step_3_done') {
                    this.newbie.taskDes = false;
                    this.newbie.step_3_end = true;
                    window.localStorage.removeItem('step_3_done');
                }
            },
            newbieTaskWrap(){
                let containerHeight = window.innerHeight;
                this.$el.style.overflow = 'hidden';
                this.$el.style.height = containerHeight + 'px';
                this.newbie.taskDes = false;
                if (!this.userData.task_info.checkin) {
                    this.newbie.taskDes = false;
                    this.newbie.step_1_start = true;
                } else if (!this.userData.task_info.share) {
                    window.localStorage.removeItem('step_1_done');
                    this.newbie.taskDes = false;
                    this.newbie.step_2_start = true;
                    this.newbie.isTask = true;
                    this.$nextTick(function () {
                        this.newbieScroll(document.querySelector('#circle-step-2'),document.querySelector('#newbie-share'))
                    })
                } else if (!this.userData.task_info.done) {
                    this.newbie.taskDes = false;
                    this.newbie.isTask = true;
                    this.newbie.step_3_start = true;
                    this.$nextTick(function () {
                        this.newbieScroll(document.querySelector('#circle-step-3'),document.querySelector('#newbie-invite'))
                    })
                }
                if (this.userData.task_info.done) {
                    this.$el.style.overflow = 'auto';
                    this.$el.style.height = '100%';
                }
            },
            newbieStart(){
                this.newbie.taskDes = false;
                this.newbie.isTask = true;
                this.newbieTaskWrap();
            },
            taskProceed(proceed){
                this.newbie.isTask = true;
                if (proceed == 'share_proceed') {
                    this.newbie.step_2_end = false;
                } else if (proceed == 'task_all_proceed') {
                    this.newbie.step_3_end = false;
                    this.newbie.showEntranceBox = false;
                    this.newbie.isTask = false;
                    window.localStorage.removeItem('step_1');
                    window.localStorage.removeItem('step_3');
                    window.localStorage.removeItem('step_3_done');
                }
                this.newbieTaskWrap();
            },
            taskProcessStart(){

                this.newbie.showEntranceBox = false;
                this.newbie.isTask = true;
                this.newbie.taskDes = false;
                this.newbieTaskWrap();
            },
            newbieEntrance(){
                if (!this.userData.task_info.checkin && !this.userData.task_info.share && !this.userData.task_info.done) {
                    this.newbie.taskDes = true;
                } else {
                    this.newbie.showEntranceBox = true;
                }
            },
            closeDes(){
                this.newbie.taskDes = false;
                if(!this.userData.task_info.done) {
                    this.newbie.showTaskIcon = true;
                }
            }
        },
        computed: {
            avatarThumbnail(){
                if (this.userData.avatar && this.userData.avatar.thumbnail && this.user_type == "fb") {
                    return this.userData.avatar.thumbnail;
                }
                return '';
            }
        },
        created(){
            console.log(this.$NDGCNN)
            // this.getLastTimerCoinsTs();
            NDB(() => {
                NDB.isLogined((res) => {
                    if (res && res.login) {
                        this.user_type = res.user_type;
                        NDB.get('/v1/users/mine/cnn/promotion/', (d) => {
                            console.log('----promotion----', d);
                            if(d.blocked){
                                this.dataLoaded = true;
                                this.blocked = true;
                            }else {
                                this.renderData(d);
                            }
                        });
                    } else {
                        let defData;
                        if (NDB.LIVE) {
                            defData = {
                                'continuity': 0,
                                'checkin_coins': [2, 2.5, 3, 3.5, 4, 4.5, 5],
                                'total_coins': 0,
                                'balance': 5,
                                'daily_share_times': 3,
                                'share_coin': 0.5,
                                'read_coin': 2.5,
                                'has_father': true,
                                'promotion_code': true,
                                'partnership_coin': 450,
                                'stats':{}
                            }
                        } else {
                            defData = {
                                'continuity': 0,
                                'checkin_coins': [2, 2.5, 3, 3.5, 4, 4.5, 5],
                                'total_coins': 0,
                                'balance': 5,
                                'daily_share_times': 0,
                                'share_coin': 0,
                                'read_coin': 0,
                                'has_father': false,
                                'promotion_code': false,
                                'partnership_coin': 0,
                                'stats':{}
                            }
                        }
                        this.renderData(defData);
                        this.noLogin = true;
                    }
                });
                NDB.isSysNotificationEnabled(res=>{
                    this.displaySystemNotice = !res.notification_enabled;
                })
            });
        }
    }
</script>