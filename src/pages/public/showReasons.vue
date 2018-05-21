<template>
    <div class="NDB-share-card" v-show="show">
        <div class="NDB-share-card-wrapper" @click="close">
            <div class="NDB-share-card-content" @click.prevent.stop="prevent">
                <div class="reason-content">
                    <div class="reason-title">{{$t('textLabel.cashout_cheatReason_title')}}</div>
                    <div><span v-html="$t('textLabel.cashout_cheatReason_text',{text: deductedData})"></span></div>
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
            },
            deductedData:{
                type: String,
                required: true
            },
            from:String
        },
        methods:{
            close(){
                this.$emit('close');
            },
            prevent() {

            }
        }
    }
</script>