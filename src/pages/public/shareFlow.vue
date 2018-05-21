<style lang="less" scoped>
    .content{
        text-align: center;
        padding-top: 40px;
        img{
            max-width: 100%;
        }
        .box{
            margin-top: 40px;
            .details-btn{
                display: block;
                color: #fff;
                margin: 0 auto;
                width: 300/2px;
                height: 24px;
                line-height: 24px;
                border-radius: 4px;
                background-color: #ffc517;
                box-shadow: 0 1px 0 0 #dba400;
                &:active{
                    box-shadow: none;
                }
            }
        }
        .box-number{
            @w: 30px;
            margin: 0 auto;
            color: #fff;
            font-size: 18px;
            font-weight: bolder;
            background-color: #174d55;
            width: @w;
            height: @w;
            line-height: @w;
            border-radius: 50%;
        }
        .title{
            font-size: 18px;
            color: #4a4a4a;
        }
        .subtitle{
            margin-top: 5px;
            font-size: 12px;
            color: #807e7e;
        }
        .step-title{
            color: #4a4a4a;
            font-size: 18px;
            margin: 10px auto;
        }
        .step-desc{

            color: #807e7e;
            font-size: 14px;
        }
    }

    .box1{
        img{
            width: 676/2px;
        }
    }
    .box2{
        img{
            max-width: 710/2px;
        }
    }
    .box3{
        padding-top: 20px;
        .money-content{
            margin-bottom: 10px;
            img{
                max-width: 491/2px;
            }
        }
        img{
            max-width: 588/2px;
        }
    }
    .box4{
        img{
            max-width: 636/2px;
        }
    }

    .detail-modal{
        position: fixed;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background-color: rgba(0, 0, 0, 0.6);
        .wrap{
            position: relative;
            width: 90%;
            margin-top: -30px;
            text-align: left;
            padding: 20px 12px;
            font-size: 12px;
            color: #807e7e;
            border-radius: 3px;
            box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.5);
            background-color: #fff;
        }
        .rules-table{
            margin:10px -12px;
            overflow: auto;
            -webkit-overflow-scrolling: touch;
            table{
                width: 100%;
                background-color: #f3eeee;
                tr {
                    &:first-child{
                        td{
                            border-bottom: 1px solid #fff;
                        }
                    }
                    td{
                        &:not(:first-child){
                            padding: 0;
                        }
                        font-size: 10px !important;
                        &:first-child{
                            color: #807e7e;
                            font-weight: normal;
                            border-left: none;
                        }
                        border-left: 1px solid #fff;
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
    }
</style>
<template>
    <div class="content">
        <div class="title" v-html="$t('textLabel.partnership_flow_title')"></div>
        <div class="subtitle"  v-html="$t('textLabel.partnership_flow_subtitle')"></div>
        <div class="box box1">
            <div class="box-number">1</div>
            <div class="step-title">{{$t('textLabel.partnership_flow_step1')}}</div>
            <div class="pic-box">
                <img :src="stepImage[0]">
            </div>
            <a class="details-btn" style="margin-top: 23px" @click="showDetail(0)">{{$t('textLabel.rule_detail')}}</a>
        </div>
        <div class="box box4">
            <div class="step-title">{{$t('textLabel.partnership_flow_step4')}}</div>
            <div class="step-desc">{{$t('textLabel.partnership_flow_step4_1')}}</div>
            <div class="pic-box">
                <img :src="stepImage[4]">
            </div>
        </div>

        <div class="detail-modal" v-show="currentItem">
            <div class="wrap">
                <div v-html="currentItem"></div>
                <div class="modal-close" @click="close"></div>
            </div>
        </div>
    </div>
</template>


<script>
    export default {
        data(){
            return {
                stepImage: this.$t('INVITE_RULE_STEP_IMAGE'),
                currentItem: ''
            }
        },
        methods:{
            getWholeCnn(){
                let total = 0;
                this.$NDGCNN.CHILD_REACH_GOAL_COIN.forEach(item=>total+=item);
                return this.$NDGCNN.TAKE_CHILD_COIN + total;
            },
            showDetail(index){
                this.currentItem = this.$t('INVITE_RULES_DETAIL',{total:this.getWholeCnn(),cnn1:this.$NDGCNN.TAKE_CHILD_COIN,cnn2:this.$NDGCNN.CHILD_REACH_GOAL_COIN[0]});
            },
            close(){
                this.currentItem = '';
            }
        }
    }
</script>