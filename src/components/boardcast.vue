<style lang="less">
    .broadcast-box{
        position: relative;
        height: 27px;
        overflow: hidden;
    }
    .broadcast {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
    .broadcast li {
        height: 27px;
        overflow: hidden;
        line-height: 27px;
        font-size: 13px;
        color: #D94B8A;
        vertical-align: middle;
        text-align: center;
    }

    .broadcast li .icon {
        width: 27px;
        height: 27px;
        line-height: 13px;
        padding: 7px;
        display: inline-block;
        vertical-align: middle;
    }

    .broadcast li .icon svg.icon-svg {
        width: 13px;
        height: 13px;
        fill: #D94B8A;
    }
   .list-complete-item {
        transition: all .5s;
        display: inline-block;
        width: 100%;

        /*display: inline-block;
        margin-right: 10px;*/
    }
     .list-complete-leave-active {
        opacity: 0;
        transform: translateY(-27px);
    }
      .list-complete-enter{
          transform: translateY(27px);
           opacity: 0;
      }
      .list-complete-enter-active{
           opacity: 1;
      }
    .list-complete-leave-active {
        position: absolute;
    }
</style>

<template>
    <div class="broadcast-box">
        <transition-group name="list-complete" class="broadcast" tag="ul">
            <li v-for="(item,index) in list" :key="item" class="list-complete-item">
                <span class="icon"><iconHand class="hand icon-svg"></iconHand></span>{{item}}
            </li>
        </transition-group>
    </div>
</template>

<script>
import { iconHand } from '@svg';
let names = ['Gita Deshpande','Gitanjali Chakrabarti','Gitika Datta','Gobind Acharya','Godavari Agarwal','Gokul Anand','Gopal Patel','Gopika Babu','Govind Bhatt','Gowri Varma','Greeshma Deshpande','Grishma Chakrabarti','Gulab Datta','Gumwant Acharya','Guru Agarwal','Gurudeep Anand','Guruprasad Patel','Gurupriya Babu','Guruputra Bhatt','Gyan Varma','Gyandev Deshpande','Hetal Chakrabarti','Himakar Datta','Himani Acharya','Himanshu Agarwal','Hita Anand','Hitesh Patel','Honnesh Babu','Imaran Bhatt','Inder Varma','Inderjit Deshpande','Inderpal Chakrabarti','Indhrajaa Datta','Indi Acharya','Indira Agarwal','Indra Anand','Indrajit Patel','Indrakshi Babu','Indrani Bhatt','Indrayan Varma','Indria Deshpande','Indrina Chakrabarti','Indu Datta','Induma Acharya','Iravan Agarwal','Ishaan Anand','Ishana Patel','Ishani Babu','Jvalant Bhatt','Jyoti Varma','Jyotika Deshpande','Jyotis Chakrabarti','Jyotish Datta','Jyotsna Acharya','Kahol Agarwal','Kailas Anand','Kailasa Patel','Kailash Babu','Kaisra Bhatt','Kaivalanth Varma','Kajal Deshpande','Kala Chakrabarti','Kalavati Datta','Kunal Acharya','Kunda Agarwal','Kundan Anand','Kundanika Patel','Kunik Babu','Kunti Bhatt','Kusa Varma','Kush Deshpande','Kushad Chakrabarti','Kushal Datta','Kusumesh Acharya','Kusumit Agarwal','Lahar Anand','Lajita Patel','Lajwanti Babu','Laksha Bhatt','Lakshith Varma','Lakshman Deshpande','Lakshmi Chakrabarti','Lakshmishree Datta','Lal Acharya','Lalam Agarwal','Lalima Anand','Monisha Patel','Mridula Babu','Mrinal Bhatt','Mugdha Varma','Mukta Deshpande','Mukul Chakrabarti','Muni Datta','Murali Acharya','Naaz Agarwal','Nagendra Anand','Naitik Patel','Nalin Babu','Namdev Bhatt','Namrata Varma','राहुल कुमार','आभिलाश भगत','देसराज शर्मा','आभिषेक भारती','अतुल गौतम','प्रियांका वर्मा','अनिल पांडे'];
export default {
    components:{
        iconHand
    },
    data(){
        return {
            list:[]
        }
    },
    methods:{
        change(){
            let text = this.$t('BOARDCASTTIP',{name:names[parseInt(Math.random()*names.length)],money:(250+(parseInt(Math.random()*400)))});
            this.list.push(text);
            if(this.list.length > 1 ){
                this.list.shift();
            }
        }
    },
    destroyed(){
        if(this.timmer){
            clearInterval(this.timmer);
        }
    },
    created(){
        this.change();
        this.timmer = setInterval(()=>{this.change()},3000);
    }
}
</script>
