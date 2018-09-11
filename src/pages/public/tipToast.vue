<style>
   .wrap{
        position: fixed;
        top: 35%;
        left: 50%;
        width: 80%;
        padding: 20px;
        transform: translateX(-50%);
        background-color: #fff;
        text-align: center;
        border-radius: 8px;
   }
    .title{
        font-weight: bolder;
        font-size: 18px;
    }
    .content{
        margin-top: 13px;
        font-size: 15px;
    }
    .close-btn{
        margin: 20px auto 0;
        height: 30px;
        line-height: 30px;
        width: 113px;
        color: #fff;
        background-color: #DC4E85;
    }
</style>
<template>
  <div class="wrap"> 
        <div class="title">
            <div v-if="from=='ReadArticle'">{{$t('textLabel.tip_read_article_title')}}</div>
            <div v-else-if="from=='Comment'">{{$t('textLabel.tip_comment_title')}}</div>
            <div v-else>{{$t('textLabel.tip_like_title')}}</div>
        </div>
        <div class="content">
            <div v-if="from=='ReadArticle'">{{$t('textLabel.tip_read_article_content',{cnn:($NDGCNN.ACTION_TYPE_GAIN_COIN_MAPPING[1]*$NDGCNN.READ_REWARD_TIMES)||'--'})}}</div>
            <div v-else-if="from=='Comment'">{{$t('textLabel.tip_comment_content',{cnn:($NDGCNN.ACTION_TYPE_GAIN_COIN_MAPPING[22]*$NDGCNN.COMMENT_REWARD_TIMES)||'--'})}}</div>
            <div v-else>{{$t('textLabel.tip_like_content',{cnn:($NDGCNN.ACTION_TYPE_GAIN_COIN_MAPPING[23]*$NDGCNN.LIKE_REWARD_TIMES)||'--'})}}</div>
        </div>
        <div class="close-btn" @click="close">OK</div>
  </div>
</template>
<script>
export default {
    props:{
       from: String
    },
    methods:{
        close(){
            this.$emit('close');
        }
    }
    // data(){
    //     return{
    //         timerPromImg: require('@src/assets/images/swiper-coin.png')
    //     }
    // }
}
</script>

