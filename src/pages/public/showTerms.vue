<style lang="less" scoped>
    .terms-box{
        padding: 20px 20px;
        .terms{ 
            font-size: 13px;
            color: #807e7e;
            line-height: 1.2;
            margin: 5px 0;
            text-align: left;
        }
    }
</style>
<template>
    <div class="NDB-share-card" v-show="show">
        <div class="NDB-share-card-wrapper" @click="close">
            <div class="NDB-share-card-content" @click.prevent.stop="prevent">
                <div class="terms-box">
                    <div class="terms">{{$t('textLabel.partnership_invite_terms1')}}</div>
                    <div class="terms">{{$t('textLabel.partnership_invite_terms2')}}</div>
                    <div class="terms">{{$t('textLabel.partnership_invite_terms3')}}</div>
                    <div class="terms">{{$t('textLabel.partnership_invite_terms4')}}</div>
                </div>
                <div class="modal-close" @click="close"></div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        props:{
            show: {
                type: Boolean,
                default: false
            }
        },
        methods:{
            close(){
                this.$emit('close');
            },
            prevent() {}
        }
    }
</script>