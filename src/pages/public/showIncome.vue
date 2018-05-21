<template>
    <div class="NDB-share-card" v-show="show">
        <div class="NDB-share-card-wrapper" @click="close">
            <div class="NDB-share-card-content" @click.prevent.stop="prevent">
                <div class="share-content" ref="shareArea">
                    <span class="share-card-number" v-if="ACTIONS2TYPE(pushData.type) != 'coin'">{{pushData.cash | balance }}</span>
                    <span class="share-card-text">{{shareCardText}}</span>
                </div>
                <div class="share-actions" v-if="!pushData.noShareBtn">
                    <div class="share-tip">
                        <span class="lang-share-card-tip">{{$t('textLabel.share_card_tip')}}</span>
                    </div>
                    <ul class="share-btn shareBtns">
                        <li @click.stop="shareBalance('whatsapp')">
                                    <span class="share-svg">
                                        <iconWhatsapp/>
                                    </span>
                            <span class="name"><span class="lang-whatsapp">{{$t('textLabel.whatsapp')}}</span></span>
                        </li>
                        <li @click.stop="shareBalance('fb')">
                                    <span class="share-svg">
                                        <iconFacebook/>
                                    </span>
                            <span class="name"><span class="lang-facebook"></span>{{$t('textLabel.facebook')}}</span>
                        </li>
                        <li @click.stop="shareBalance('sms')" v-if="showSms">
                                    <span class="share-svg">
                                        <iconMessage/>
                                    </span>
                            <span class="name"><span class="lang-sms">{{$t('textLabel.sms')}}</span></span>
                        </li>
                        <li @click.stop="shareBalance('other')" v-if="showOther">
                                    <span class="share-svg">
                                        <iconShare/>
                                    </span>
                            <span class="name"><span class="lang-sms">{{$t('textLabel.other')}}</span></span>
                        </li>
                    </ul>
                </div>
                <div class="modal-close" @click="close"></div>
            </div>
        </div>
    </div>
</template>
<script>
    import { ACTIONS , ACTION_TYPES} from '@src/util/index';
    import { iconMessage,iconFacebook,iconWhatsapp,iconShare } from '@svg';

    export default {
        props:{
            showSms:{
                type: Boolean,
                default: false
            },
            pcode:{
                type: String
            },
            show: {
                type: Boolean,
                default: false
            },
            pushData:{
                type: Object,
                required: true
            },
            from:String
        },
        methods:{
            ACTIONS2TYPE(type){
                return ACTION_TYPES[type]
            },
            close(){
                this.$emit('close');
            },
            prevent() {

            },
            shareBalance(platform){
                var data = this.pushData;
                var text = this.shareCardText + ' 👉 ';
                var title = this.$t(`SHAREINFO.title`);
                var url_prefix = this.$t(`SHAREINFO.url_prefix.${platform}`);
                var imgRect = this.$refs.shareArea.getBoundingClientRect();
                let shareObj = {
                    platform : platform,
                    text: text,
                    title: title,
                    url: url_prefix + (this.pcode || "123456")+'/?c='+data.type+'&a='+(data.cash||data.coin).toFixed(2)+'&t='+new Date().getTime(),
                    image_coordinate: {
                        x : imgRect.left,
                        y : imgRect.top,
                        w : imgRect.width,
                        h : imgRect.height,
                        r : 4
                    },
                    have_img: false,
                    from : this.from
                };
                console.log(shareObj);
                NDB.share(shareObj,(d) => {
                    this.close();
                    NDB.post('/v1/users/mine/cnn/promotion/app/share/',{"type": platform},(d)=>{
                        if(d.gain_coins){
                            NDB.onShare({
                                coin : d.gain_coins
                            });
                            location.href = location.href;
                        }
                    });
                });
            }
        },
        components:{
            iconMessage,iconFacebook,iconWhatsapp,iconShare
        },
        computed:{
            shareCardText(){
                let exRate = this.pushData.exRate || 0.04;
                if(!this.pushData.type && this.pushData.type !== 0){
                    return '';
                }
                let tipType =  ACTION_TYPES[this.pushData.type];
                let tipAction = ACTIONS[this.pushData.type];
                let info = this.$t(`SHAREINFO.card_tips.${tipAction}`,{textCnn: tipType != 'coin' ? this.pushData.cash.toFixed(2) : (this.pushData.coin || this.pushData.coins).toFixed(0),textRs:this.pushData.cash*exRate.toFixed(2)});
                return info;
            },
            showOther(){
                return NDB.VCODE >= 130;
            }
        }
    }
</script>