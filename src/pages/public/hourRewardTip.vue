<style lang="less" scoped>
    .NDB-share-card-content{
        padding: 20px;
    }
    .title .content{
        font-size: 36px;
        height: 42px;
        line-height: 42px;
        margin: 0 auto;
        color: #333;
    }
    .content {
        margin: 15px 0 24px;
    }
    .btn{
        font-size: 20px;
        height: 40px;
        line-height: 40px;
        margin: 0 auto;
        border: solid 1px #e60033;
        color: #e60033;
        border-radius: 6px;
        text-align: center;
    }
</style>
<template>
  <div class="NDB-share-card" v-show="show">
      <div class="NDB-share-card-wrapper" @click="close">
            <div class="NDB-share-card-content" @click.prevent.stop="prevent">
                <div class="title">
                    <span>{{$t('textLabel.hourly_rewards_tip_title')}}</span>
                </div>
                <div class="content">
                    <span v-html="$t('textLabel.hourly_rewards_tip_content')"></span>
                </div>
                <div class="btn" @click="close">
                    <span>{{$t('textLabel.hourly_rewards_tip_foot')}}</span>
                </div>
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
        prevent() {

        }
    }
}
</script>


