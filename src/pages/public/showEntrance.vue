<style lang="less" scoped>
    .entrance-warp {
        position: fixed;
        left: 0;
        top: 0;
        bottom: 0;
        right: 0;
        z-index: 10001;
    }
    .NDB-share-card-content {
        position: fixed;
        top: 50%;
        left: 50%;
        width: 80%;
        transform: translate(-50%, -50%);
        padding: 1px;
        border-radius: 8px;
        text-align: center;
        z-index: 10001;
        background-color: rgba(0, 0, 0, 0.84)!important;
        .modal-close {
            top: -13%;
            left: 100%;
            background-color: #b3b3b3;
            border: solid 1px #b3b3b3;
            &:before {
               background-color: #f5f5f5;
            }
            &:after {
               background-color: #f5f5f5;
            }
        }
        .process-content {
            padding: 20px 0;
            border-radius: 8px;
            .title {
                padding: 0 10px;
                font-weight: bold;
            }
            .step-proceed {
                width: 80px;
                height: 30px;
                line-height: 30px;
                margin: 0 auto;
                border-radius: 8px;
                color: #333;
                background-color: #ffb31a;
            }
            ul {
                li {
                    height: 30px;
                    line-height: 30px;
                    margin: 20px 0;
                    color: #fff;
                    .step-icon {
                        width: 20px;
                        float: left;
                        margin: 0 16px;
                        .complete {
                            display: inline-block;
                            width: 20px;
                            height: 20px;
                        }
                        .gray {
                            display: inline-block;
                            width: 14px;
                            height: 14px;
                            border-radius: 50%;
                            background-color: rgba(0, 0, 0, 0.84);
                            border: 3px solid #9e9797;
                        }
                    }
                    .step-content {
                        display: inline-block;
                        width: 230px;
                        text-align: left;
                        .small-coin {
                            display: inline-block;
                            width: 9px;
                        }
                        .coin-count {
                            margin: 0 5px;
                            color: #FFC21C;
                        }
                        .step-name {
                            &.active {
                                 color: #FFC21C;
                             }
                        }
                    }
                }
            }
        }
    }
</style>
<template>
    <div class="entrance-warp" @click="close">
        <div class="NDB-share-card-content" @click.prevent.stop="prevent">
            <div class="process-content">
                <div class="title" v-html="$t('textLabel.newbie_entrance_title',{cnn: $NDGCNN.ACTION_TYPE_GAIN_COIN_MAPPING[14]})"></div>
                <ul>
                    <li>
                        <div class="step-icon">
                            <span class="gray" v-if="pushData.task_info && !pushData.task_info.checkin"></span>
                            <span class="complete" v-else><iconTaskComplete></iconTaskComplete></span>
                        </div>
                        <div class="step-content">
                            <span :class="{'step-name': 1, 'active': pushData.task_info && pushData.task_info.checkin}">{{$t('textLabel.newbie_entrance_step_1')}}</span>
                        </div>
                    </li>
                    <li>
                        <div class="step-icon">
                            <span class="gray" v-if="pushData.task_info && !pushData.task_info.share"></span>
                            <span class="complete" v-else><iconTaskComplete></iconTaskComplete></span>
                        </div>
                        <div class="step-content">
                            <span :class="{'step-name': 1, 'active': pushData.task_info && pushData.task_info.share}">{{$t('textLabel.newbie_entrance_step_2')}}</span>
                        </div>
                    </li>
                    <li>
                        <div class="step-icon">
                            <span class="gray"></span>
                        </div>
                        <div class="step-content">
                            <span>{{$t('textLabel.newbie_entrance_step_3')}}</span>
                        </div>
                    </li>
                </ul>
                <div class="step-proceed" @click="entrance">{{$t('textLabel.newbie_entrance_proceed')}}</div>
            </div>
            <div class="modal-close" @click="close"></div>
        </div>
    </div>
</template>

<script>
    import { iconTaskComplete, iconCoinGold } from '@svg';

    export default {
        props:{
            pushData: {
                type: Object,
                required: true
            }
        },
        components: {
            iconTaskComplete,iconCoinGold
        },
        methods: {
            close(){
                this.$emit('close');
            },
            prevent(){

            },
            entrance(){
                this.$emit('taskProcessStart');
            }
        }
    }
</script>