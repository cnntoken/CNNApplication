<style lang="less" module>
   .wrap {
        color: #807e7e;
        padding: 6px 10px 0x;
        font-size: 21/2px;
        background-color: #fff;
        box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2);
   }
</style>
<template>
  <div :class="$style.wrap"> 
      <div><span></span>{{$t('textLabel.timer_promotion_active')}}
      </div>
  </div>
</template>
<script>
export default {
    props:{
        shareData:{
            type: Object,
            default(){
                return {}
            }
        }
    },
    data(){
        return{
            timerPromImg: require('@src/assets/images/swiper-coin.png')
        }
    }
}
</script>

