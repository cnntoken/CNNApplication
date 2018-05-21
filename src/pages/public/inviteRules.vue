<style lang="less" scoped>
    .content{
        padding-bottom: 50px;
        font-size: 12px;
        border-top: 1px solid  #f5a623;
    }
    .title{
        display: flex;
        justify-content: center;
        & > div{
            height: 24px;
            padding: 0 11px;
            line-height: 24px;
            font-weight: bold;
            color: #fff;
            border-radius: 0 0 6px 6px;
            background-color:  #f6a623;;
        }
    }
    .list{
        padding: 0 16px;
        .item{
            display: flex;
            align-items: center;
            padding:  15px 0;
            border-bottom: 1px solid #e8e8e8;
            .info{
                flex: 1;
                font-weight: 500;
                line-height: 1.33;
                letter-spacing: normal;
                color: #807e7e;
            }
            .detail{
                margin-left:20px;
                width: 60px;
                text-align: center;
                .btn{
                    height: 20px;
                    line-height: 20px;
                    color: #fff;
                    background-color: #ecad45;
                    border-radius: 3px;
                }
            }
        }
    }

</style>
<template>
    <div class="content">
        <div class="title">
            <div>
                {{$t('textLabel.invite_rule_tip')}}
            </div>
        </div>
        <ul class="list">
            <li class="item" v-for="(item,index) in list" :key="index">
                <div class="info" v-html="item.info"></div>
                <div class="detail">
                    <div class="btn" v-if="item.detail" @click="showDetail(item)">{{$t('textLabel.rule_detail')}}</div>
                </div>
            </li>
        </ul>

    </div>
</template>
<script>
    export default {
        data(){
            return {
                list:this.$t('INVITE_RULES'),
                currentItem: ''
            }
        },
        methods:{
            showDetail(item){
               this.currentItem = item;
            },
            close(){
                this.currentItem = '';
            }
        }
    }
</script>

