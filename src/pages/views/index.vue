<style lang="less">
    .container{
        padding-bottom: 20px;
    }
    header{
        position: relative;
        padding: 10px 20px;
        height: 190px;
        background-color: #F5F5F5;
    }
    header .dashboard{
        padding: 15px 15px 6px;
        max-height: 190px;
        background-color: #DC4E85;
        border-radius: 8px;
        color: #fff;
        box-shadow:0px 3px 5px 0px rgba(0,0,0,0.2);
    }
    .total-txt{
        font-size: 14px;
    }
    .total-num{
        margin-top: 10px;
        font-weight: bold;
        font-size: 30px;
    }
    .yesterday-income{
        display: flex;
        max-width: 70%;
        margin-top: 5px;
        font-size: 14px;
        flex-wrap: wrap;
        justify-content: flex-start;
        word-break: break-word;
    }
    .yes-des{
        display: inline-block;
    }
    .yes-num{
        display: inline-block;
    }
    .withdraw{
        height: 40px;
        width: 211/2px;
        right: 7px;
        top: 50%;
        position: absolute;
        transform: translateY(-50%);
        background-color: #FEDB1F;
        font-size: 18px;
        font-weight: bold;
        text-align: center;
        line-height: 40px;
        color: #987003;
        border-radius: 8px;
        box-shadow:-5px 4px 4px 0px rgba(176,63,107,0.66);
        a{
            color: #987003;
        }
    }
    .pro-content{
        padding: 15px 25px;
        height: 190px;
        background-color: #fff;
        .pro-box{
            display: flex;
            align-content: space-between;
            .action-item{
                position: relative;
                display: inline-block;
                flex: 1;
                text-align: center;
                .action-icon{
                    margin: 0 auto;
                    height: 40px;
                    width: 40px;
                }
                .action-title{
                    margin-top:4px;
                    color: #333;
                    font-size: 14px;
                }
                .action-award{
                    color: #999;
                    font-size: 12px;
                }
                &.invite-active,&.check-in-active,&.share-active{
                    padding: 10px 0 25px;
                    background-color: #fff;
                    z-index: 10002;
                    border-radius: 8px;
                    .action-award{
                        position: absolute;
                        bottom: 0;
                        left:15%;
                        height: 20px;
                        line-height: 20px;
                        margin: 10px auto 0;
                        width: 70%;
                        color: #fff;
                        background: #F6AB28;
                        border-top-left-radius: 8px;
                        border-top-right-radius: 8px;
                    }
                }
            }
            &:nth-of-type(2){
                margin-top: 10px;
            }
        }
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
        margin-top: 10px;
        padding: 2px 15px;
        background-color: #fff;
    }
    .index-list li{
        div{
            position: relative;
        }
        height: 44px;
        padding: 0 10px;
        line-height: 44px;
        a{
            width: 80%;
            padding: 10px 40px 10px 30px;
            display: inline-block;
            font-size: 14px;
            font-weight: 500;
            color: #333;
            tap-highlight-color:rgba(255,255,255,0);
            -webkit-tap-highlight-color:rgba(255,255,255,0);
        }
        &:last-of-type::after{
            display: none;
            content: '';
        }
    }
    .small-icon{
        position: absolute;
        top: 4px;
        display: inline-block;
        height: 20px;
        width: 20px;
    }

    .sys-notice {
        display: flex;
        margin-top: 10px;
        padding: 9px 20px;
        height: 55px;
        background-color: #fff;
        justify-content: space-between;
        align-items: center;
        div{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            // justify-content: 
        }
        p:nth-of-type(1){
            color: #DC4E85;
            font-weight: bolder;
            font-size: 15px;
        }
        p:nth-of-type(2){
            color:#999;
            font-size: 12px;
        }
        a{
            display: inline-block;
            font-size: 15px;
            color: #DC4E85;
        }
    }
    // .index-list li:active {
    //     background-color: #FAFAFA;
    // }


    // .index-list li a:active {
    //     background-color: rgba(0, 0, 0, 0);
    // }

    .tip_toast{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        height: 100%;
        width: 100%;
        padding: 1px;
        background-color: rgba(0,0,0,0.5);
        z-index: 10000;
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
        margin: 160px auto;
        text-align: left;

    .circle {
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background-color: #ffcc00;
        margin-right: 260px;
        float: right;
    }

    .straight {
        height: 40px;
        border-right: 1px dashed #ffcc00;
        margin-right: 266px;
    }

    .content {
        padding: 20px 10px;
        border: 1px dashed #ffcc00;
        color: #fff;
    }

    }
    .newbie-step-2 {
            margin: 160px auto;
            .circle {
                margin-left: 136px;
                float: none;
            }
            .straight {
                margin-right: 138px;
            }

    }

    .newbie-step-3 {
        width: 320px;
        margin: 160px auto;
        .content {
            padding: 15px 10px;
        }

        .circle {
            margin-left: 272px;
            float: none;
        }

        .straight {
            height: 40px;
            margin-left: 278px;

        }

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
                <div class="dashboard">
                    <div class="total-txt">Total:</div>
                    <div class="total-num">{{(userData.total_coins || 0)| coin}} CNN</div>
                    <div class="yesterday-income"><span class="yes-des">Yesterday Income: </span><span class="yes-num">{{(userData.yesterday_coins||0)|coin}} CNN</span></div>
                    <ShareData :indexWrap="true" :shareData="userData.stats" v-if="userData.stats && userData.stats.is_hide != 1"/>
                    <div v-if="userData.name" class="withdraw">
                        <a :href="$version('./income.html')">Withdraw</a>
                    </div>
                    <div v-else class="withdraw" @click="tapUserInfo">
                        Login
                    </div>
                </div>
            </header>
            <!-- 激励内容 -->
            <div class="pro-content">
                <div class="pro-box">
                <a :class="{'action-item':1, 'check-in-active':newbie.step_1_start}" @click="checkIn" id="newbie-checkin">
                    <div class="action-icon checkin"><iconCheckIn></iconCheckIn></div>
                    <div class="action-title">{{$t('textLabel.index_pro_content_checkin')}}</div>
                    <div class="action-award">+1 CNN</div>
                </a>
                <div :class="{'p_share': 1, 'action-item':1,'share-active': newbie.step_2_start}"
                    v-if="userData.share_coin" id="newbie-share" @click="shareNews('whatsapp')">
                    <div class="action-icon"><iconShare2></iconShare2></div>
                    <div class="action-title">{{$t('textLabel.index_pro_content_share')}}</div>
                    <div class="action-award">{{'+' +userData.share_coin+' CNN'}}</div>
                </div>
                <div :class="{'action-item':1,'invite-active': newbie.step_3_start}"
                    v-if="userData.partnership_coin"  id="newbie-invite" @click="inviteFriends">
                    <div class="action-icon invite"><iconInvite></iconInvite></div>
                    <div class="action-title">{{$t('textLabel.index_pro_content_invite')}}</div>
                    <div class="action-award">{{'+'+userData.partnership_coin+' CNN'}}</div>
                </div>
                </div>
                <div class="pro-box">
                <div class="action-item" @click="showDialog({actionType:'ReadArticle',totalCount:$NDGCNN.ACTION_TYPE_GAIN_COIN_MAPPING[1]*$NDGCNN.READ_REWARD_TIMES})">
                    <div class="action-icon"><iconReadArticle></iconReadArticle></div>
                    <div class="action-title">{{$t('textLabel.index_pro_content_read')}}</div>
                    <div class="action-award">{{$t('textLabel.index_read_coin_tip', {cnn:($NDGCNN.ACTION_TYPE_GAIN_COIN_MAPPING[1])||'--'})}}</div>
                </div>
                <div class="action-item" @click="showDialog({actionType:'Comment',totalCount:$NDGCNN.ACTION_TYPE_GAIN_COIN_MAPPING[22]*$NDGCNN.COMMENT_REWARD_TIMES})">
                    <div class="action-icon"><iconComment></iconComment></div>
                    <div class="action-title">{{$t('textLabel.index_pro_content_comment')}}</div>
                    <div class="action-award">{{$t('textLabel.index_comment_coin_tip', {cnn:$NDGCNN.ACTION_TYPE_GAIN_COIN_MAPPING[22]||'--'})}}</div>
                </div>
                <div class="action-item" @click="showDialog({actionType:'Like',totalCount:$NDGCNN.ACTION_TYPE_GAIN_COIN_MAPPING[23]*$NDGCNN.LIKE_REWARD_TIMES})">
                    <div class="action-icon"><iconLike></iconLike></div>
                    <div class="action-title">{{$t('textLabel.index_pro_content_like')}}</div>
                    <div class="action-award">{{$t('textLabel.index_like_coin_tip', {cnn:$NDGCNN.ACTION_TYPE_GAIN_COIN_MAPPING[23]||'--'})}}</div>
                </div>
                </div>
            </div>
            <!-- 提示开启推送通知 -->
            <div v-if="displaySystemNotice" class="sys-notice">
                <div>
                    <p>Turn on Notification</p>
                    <p>Earn extra rewards.</p>
                </div>
                <a :href="$version('./sys-notice.html')">Okay</a>
            </div>
            <ul class="NDB-list index-list">
                <li> 
                    <div>
                        <span class="small-icon"><iconContestPolicy></iconContestPolicy></span>
                        <span class="link"><a :href="$version('./policy.html')">{{$t('textLabel.index_link_contest_policy')}}</a></span>
                    </div>
                </li>
                <li> 
                    <div>
                        <span class="small-icon"><iconFaq></iconFaq></span>
                        <span class="link"><a :href="$version('./faq.html')">{{$t('textLabel.index_link_faq')}}</a></span>
                    </div>
                </li>
            </ul>
    
            <!-- 兼容老版本弹窗 -->
            <div class="tip_toast" v-if="tip_toast">
                <tipToast :from="tip_type" @close="tip_toast = false"></tipToast>
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
                    <div class="circle" id="circle-step-1"></div>
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
        iconFaq,
        iconNotify,
        iconSmallCoin,
        iconInviteCode,
        iconCheckIn,
        iconComment,
        iconLike,
        iconContestPolicy,
        iconShare2,
        iconReadArticle,
        iconInvite,
    } from '@svg';
    import Swiper from '@src/components/swiper';
    import Boardcast from '@src/components/boardcast.vue';
    import taskProceed from '../public/taskProceed.vue';
    import showEntrance from '../public/showEntrance.vue';
    import ShareData from '../public/personalShareData.vue';
    import UserBlock from '../public/userBlock.vue';
    import CountDownCoins from '../public/countDownCoins.vue';
    import tipToast from '../public/tipToast.vue';

    export default {
        components: {
            iconArc,
            iconAvatar,
            iconHaha,
            iconIncome,
            iconLetter,
            iconNews,
            iconPartnership,
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
            CountDownCoins,
            iconCheckIn,
            iconComment,
            iconLike,
            iconContestPolicy,
            iconShare2,
            iconReadArticle,
            iconInvite,
            tipToast
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
                tip_toast: false,
                tip_type: '',
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
            showDialog(opt){
                
                if(NDB.VCODE<164){
                    this.tip_toast = true
                    this.tip_type = opt.actionType
                } else {
                    NDB.showDialog(opt)
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
                    this.$nextTick(function () {
                        this.newbieScroll(document.querySelector('#circle-step-1'),document.querySelector('#newbie-checkin'))
                    })
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
                                'checkin_coins': [1, 1, 1, 1, 1, 2, 2],
                                'total_coins': 0,
                                'balance': 5,
                                'daily_share_times': 3,
                                'share_coin': 1,
                                'read_coin': 1,
                                'has_father': true,
                                'promotion_code': true,
                                'partnership_coin': 80,
                                'stats':{}
                            }
                        } else {
                            defData = {
                                'continuity': 0,
                                'checkin_coins': [1, 1, 1, 1, 1, 2, 2],
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