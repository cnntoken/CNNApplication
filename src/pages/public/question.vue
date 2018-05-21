<template>
  <li :class="['no-icon',{'active':dataObj.active}]" v-if="dataObj.type != 'title'">
      <div  @click="toggle">
        <a>
           {{dataObj.question}}
        </a>
        <span class="arrow"></span>
      </div>
        <div class="attachment no-btn" v-if="!dataObj.type">
            <span class="text" v-for="(ans,index) in dataObj.answers" :key="index">
                <span>{{ans}}</span>
                <template v-if="index != dataObj.answers.length-1"><br><br></template>
            </span>
        </div>
        <quesTable :data="dataObj" v-else-if="dataObj.type == 'table'"></quesTable>
  </li>
  <li v-else class="big-title">
      {{ dataObj.title }}
  </li>
</template>
<script>
import quesTable from './quesTable.vue';
export default {  
  props:{
      dataObj:{
          type: Object,
          required: true
      }
  },
  components:{
    quesTable
  },
  methods:{
    toggle(){
        this.$emit('toggle',this.dataObj);
    }
  }
}
</script>
