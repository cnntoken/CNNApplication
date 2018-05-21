<template>
    <div class="container">
        <ul class="NDB-list" v-if="list.length > 0">
            <Item :dataObj.sync="data" v-for="(data,index) in list" :key="index" @toggle="toggle"></Item>
        </ul>
    </div>
</template>
<script>
import Item from '../public/question.vue';
import faqJson from '@src/lang/faq.js';
export default {
  data(){
      return {
          pageBlock: 1,
          list: faqJson(this.$NDGCNN)[this.$i18n.locale].list.map(item => {
              this.$set(item,'active',false);
              return item;
            })
      }
  },

  components:{
      Item
  },
  methods:{
      toggle(dataObj){
        this.list.forEach((ele)=> {
            if(dataObj == ele){
                ele.active = !ele.active;
            }else{
                ele.active = false;
            }
        });
      }
  },
    created(){
      this.pageBlock--;
    }
}
</script>
