<style>
     table tr td{
        border: 1px solid #CCC;
        border-width: 1px 0px 0px 1px;
        color: #7F7E7E;
    }    
    table tr:nth-last-child(1) td{
        border-bottom-width: 2px; 
    }
    table tr td:nth-last-child(1){
        border-right-width: 2px; 
    }
    table tr td:nth-child(1){
        width: 80px;
    }
</style>
<template>
    <div class="attachment no-btn">
        <span class="text" v-for="(ans,index) in data.answers" :key="index">
            <template v-if="ans!='table'">
                <span>{{ans}}</span>
                <template v-if="index != data.answers.length-1"><br><br></template>
            </template>
            <template v-else>
                <table cellpadding="0" cellspacing="0" width="100%">
                    <tbody>
                        <tr v-for="(row,index) in tableArr" :key="index">
                            <td v-for="(ele,index) of row" :key="index">{{ele}}</td>
                        </tr>
                    </tbody>
                </table>
                <br>
            </template>
        </span>
    </div>
</template>
<script>
import faqJson from '@src/lang/faq.json';

export default {
    data(){
        return{
            tableArr:faqJson[this.$i18n.locale].table
        }
    },
    props:{
        data:{
            type: Object,
            required: true
        }
    }
}
</script>