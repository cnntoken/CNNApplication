<template>
  <div>
      <div class="container">
            <div class="table">
                <table cellpadding="0" cellspacing="0" border="0">
                    <thead>
                        <tr>
                            <th><span class="lang-top">{{$t('textLabel.top')}}</span></th>
                            <th class="left"><span class="lang-user-id">{{$t('textLabel.user_id')}}</span></th>
                            <th style="width: 104px;" class="right"><span class="lang-partnership">{{$t('textLabel.leaderboard_partnership')}}</span></th>
                            <th class="right"><span class="lang-income">{{$t('textLabel.income')}}</span></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item,index) in list" :key="index">
                            <td>{{ index+1 }}</td>
                            <td class="left">{{item.name}}</td>
                            <td class="right">{{item.partners_count || 0}}</td>
                            <td class="right">{{ item.revenue | balance }}cnn</td>
                        </tr>
                    </tbody>
                </table>
            </div>
    </div>
  </div>
</template>

<script>
import NDB from '@src/util/NDB';
import { iconDbg } from '@svg';
export default {
    components:{
        iconDbg
    },
    data(){
        return {
            pageBlock: 1,
            list: []
        }
    },
    created(){
       NDB(() => {
            NDB.get('/v1/users/mine/cnn/promotion/billboard/',{limit:50},(data) => {
                var d = data.data || [];
                if(d.length >= 50) d.length = 50;
                this.list = d;
                this.pageBlock--;
            });
        });
    }
}
</script>