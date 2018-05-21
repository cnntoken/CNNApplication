<template>
    <!-- Swiper -->
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(data, index) in dataArr" :key="index" @click="bannerClick(data,index)">
                <img :src="data.img">
            </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
        <!-- Add Navigation -->
        <!--<div class="swiper-button-prev"></div>-->
        <!--<div class="swiper-button-next"></div>-->
    </div>
</template>
<script>
import '@src/assets/less/swiper.min.css';
import Swiper from './swiper.min.js';

export default {
    props:{
        dataArr:{
            type: Array
        },
        onBannerTap:{
            type: Function
        }

    },
    methods:{
        generate(){
             this.$nextTick( () => {
                this.swiper = new Swiper(this.$el, {
                    pagination: '.swiper-pagination',
                    paginationClickable: true,
                    autoHeight: true, //enable auto height
                    loop: false,
                    effect: 'coverflow',
                    grabCursor: true,
                    centeredSlides: true,
                    slidesPerView: 1.05,
                    coverflow: {
                        rotate: 0,
                        stretch: -10,
                        depth: 200,
                        modifier: 1,
                        slideShadows : false
                    }
                });
            });
        },
        bannerClick(data,index){
            if((this.onBannerTap && this.onBannerTap(data,index)) || !this.onBannerTap){
                window.location.href = this.$version(data.url);
            }
        }
    },
    mounted(){
        if(this.dataArr.length <= 1){
            return false;
        }
       this.generate();
    },
    updated(){
         if(this.dataArr.length <= 1){
            return false;
        }
        if(!this.swiper){
            this.generate();
        }else{
            this.swiper.update();
        }
    }
}
</script>