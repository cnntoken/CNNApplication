<style>
html,body{
    width: 100%;
    height: 67px;
    padding: 0;
    margin: 0;
    font-size: 0;
    color: #FFF;
    overflow: hidden;
}
body{
    padding:10px 10px 0px 10px;
    width: auto;
}
.container{
    height: 57px;
    border-radius: 6px;
    background-image: linear-gradient(-124deg, #EB4C4C 1%, #CE5AD6 100%);
    box-shadow: 0 1px 3px 0 rgba(0,0,0,0.30);
    text-align: center;
    position: relative;
}
.container:before{
    content: " ";
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    background-image: url("~@src/assets/images/@1x/banner_left.png");
    background-size: auto 100%;
    background-repeat: no-repeat;
    background-position: left center;
    z-index: 0;
}
.container:after{
    content: " ";
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    background-image: url("~@src/assets/images/@1x/banner_right.png");
    background-size: auto 100%;
    background-repeat: no-repeat;
    background-position: right center;
    z-index: 0;
}
.container h1{
    font-size: 15px;
    font-weight: bold;
    color: #FFF;
    line-height: 1.5;
    margin: 0;
    position: relative;
    z-index: 1;
}
.container h1 b{
    font-size: 25px;
    font-weight: bold;
    color: #FFF;
}
.container h2{
    margin: 0;
    font-size: 10px;
    font-weight: normal;
    color: #FFF;
    line-height: 1.5;
    display: inline-block;
    height: 18px;
    line-height: 18px;
    border-radius: 9px;
    background-color: rgba(51, 51, 51, .2);
    padding: 0 10px;
    z-index: 1;
    position: relative;
}
.line{
    width: 100%;
    margin-top: 9px;
    height: 1px;
    background-color:#ECE6E6;
    transform: scale(1,0.333);
    -webkit-transform: scale(1,0.333);
}
</style>
<template>
 <div>
    <div class="container" @click="showImage">
        <h1><b>1000</b> रूपए कमाने के लिए दोस्तों का आमंत्रण करें</h1>
        <h2>और न्यूज़ पढ़नें से सिक्के भी मिलें!*</h2>
    </div>
    <div class="line"></div>
  </div>
</template>
<script>
    export default {
        data(){
            return {
                bgImgs:[
                    require('@src/assets/images/@1x/empty-box.png'),
                    require('@src/assets/images/@1x/box-close.png'),
                    require('@src/assets/images/@1x/box-coins.png'),
                    require('@src/assets/images/@1x/bg-coins.png'), 
                    require('@src/assets/images/@1x/banner.png')
                ]
            }
        },
        created(){
            console.log(this.bgImgs)
            this.needLoadImgs = this.bgImgs.length;
            for(var i = 0; i < this.bgImgs.length; i++){
                var image = new Image();
                image.src =  this.bgImgs[i];
                if(!image.complete){
                    image.onload = ()=> {
                        this.showPage();
                    }
                }else{
                    this.showPage();
                }
            }
        },
        methods:{
            showImage(){
                 try{
                    AndroidImgHandler.openPromotion(); // view images
                }catch(e){
                    console.log("openPromotion is failed");
                } 
            },
            showPage(){
                    this.needLoadImgs--;
                    if(this.needLoadImgs < 1){
                    try{
                        AndroidImgHandler.show('{"slide" : false }'); // view images
                    }catch(e){
                        console.log("show is failed");
                    }      
                }
            }
        }
    }
</script>