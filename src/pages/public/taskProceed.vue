<style >
    .NDB-newbie-task .progress .icon {
        position: absolute;
        top: -50px;
        display: inline-block;
        width: 24px;
        height: 48px;
    }
    .NDB-newbie-task .progress .icon.done_1 {
        left: 70px;
    }
    .NDB-newbie-task .progress .icon.done_2 {
        left: 140px;
    }
    .NDB-newbie-task .progress .icon.done_3 {
        left: auto;
        top: -52px;
        right: -21px;
        display: inline-block;
        width: 50px;
        height: 50px;
        background: url("~@src/assets/images/newbie/100coins.png") no-repeat;
        background-size: contain;
    }
    .NDB-newbie-task .progress .icon.done_3 .icon-svg {
        display: none;
    }
    .NDB-newbie-task .progress {
        position: relative;
        width: 220px;
        height: 12px;
        margin: 80px auto 20px;
        border-radius: 31px;
        background: linear-gradient(to right, #ff8000, #f8e81c);
    }
    .NDB-newbie-task .progress .circle {
        position: absolute;
        top: -2px;
        width: 16px;
        height: 16px;
        border-radius: 50%;
        background-color: #000;
        border: 3px solid #f9d617;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5);
    }
    .NDB-newbie-task .progress .circle.done_1 {
        left: 74px;
    }
    .NDB-newbie-task .progress .circle.done_2 {
        left: 145px;
    }
    .NDB-newbie-task .progress .circle.done_3 {
        left: auto;
        right: 0;
    }
    .NDB-newbie-task .progress .transparent {
        position: absolute;
        top: 2px;
        right: 3px;
        width: 150px;
        height: 8px;
        border-radius: 15px 31px 31px 15px;
        background-color: rgba(0, 0, 0, .8);
    }
    .NDB-newbie-task .progress .transparent.done_1 {
        width: 127px;
    }
    .NDB-newbie-task .progress .transparent.done_2 {
        width: 56px;
    }
    .NDB-newbie-task .progress .transparent.done_3 {
        width: 0;
    }
    .NDB-newbie-task .task-title {
        width: 310px;
        margin: 0 auto 20px;
        text-align: center;
    }
    .NDB-newbie-task .task-header,
    .NDB-newbie-task .task-content {
        width: 280px;
        margin: 0 auto;
        color: #fff;
        text-align: center;
    }
    .NDB-newbie-task .task-content {
        text-align: left;
    }
    .NDB-newbie-task .task-content img{
        display: block;
        margin: 0 auto;
        width: 80%;
        height: 80%
    }
    .NDB-newbie-task .proceed-btn {
        width: 250px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        margin: 20px auto;
        border-radius: 8px;
        background-color: #ffb31a;
    }
</style>
<template>
    <div class="NDB-newbie-task">
        <div class="progress">
            <span :class="['icon',{['done_'+done_count]: 1}]">
                <iconTaskComplete class="icon-svg"></iconTaskComplete>
            </span>
            <span :class="['circle',{['done_'+done_count]: 1}]"></span>
            <span :class="['transparent',{['done_'+done_count]: 1}]"></span>
        </div>
        <div class="task-title" v-if="from == 'check_in_task'" v-html="$t('textLabel.newbie_checkin_title')"></div>
        <div class="task-title" v-else-if="from == 'share_task'" v-html="$t('textLabel.newbie_share_title')"></div>
        <div class="task-title" v-else="from == 'task_all_done'" v-html="$t('textLabel.newbie_done_title',{cnn: $NDGCNN.ACTION_TYPE_GAIN_COIN_MAPPING[14]})"></div>
        <div class="task-header" v-if="from == 'check_in_task'" v-html="$t('textLabel.newbie_checkin_header')"></div>
        <div class="task-content" v-if="from == 'check_in_task'" v-html="$t('textLabel.newbie_checkin_content',{cnn:$NDGCNN.WITHDRAW_LIMIT})"></div>
        <div class="task-content" v-else-if="from == 'share_task'" v-html="$t('textLabel.newbie_share_content',{cnn:$NDGCNN.ACTION_TYPE_GAIN_COIN_MAPPING[12]})"></div>
        <div class="task-content" v-else="from == 'task_all_proceed'" v-html="$t('textLabel.newbie_done_content',{img:require('@src/assets/images/newbie/lastStep.png')})"></div>
        <div class="proceed-btn" v-if="from !== 'task_all_proceed'" @click="taskProceed(from)">{{$t('textLabel.newbie_checkin_proceed')}}</div>
        <div class="proceed-btn" v-if="from == 'task_all_proceed'" @click="taskProceed(from)">{{$t('textLabel.newbie_done_btn')}}</div>
    </div>
</template>

<script>
    import { config } from '@src/config';
    import { iconTaskComplete } from '@svg';
    export default {
        data(){
            return{
                done_count: 1
            }
        },
        props:{
            pushData: {
                type: Object,
                required: true
            },
            from: String
        },
        components: {
            iconTaskComplete
        },
        methods: {
            taskProceed(from){
                let url = '';
                switch (from){
                    case 'check_in_task':
                        window.localStorage.setItem('step_1_done', 'step_1_done');
                        window.localStorage.setItem('checkin_done','true');
                        url = './index.html';
                        location.href = `${url}?v=${config.version}`;
                        break;
                    case 'share_task':
                        this.$emit('taskProceed', 'share_proceed');
                        break;
                    case 'task_all_proceed':
                        this.$emit('taskProceed', 'task_all_proceed');
                        break;
                }
            }
        },
        created(){
            for(let key in this.pushData.task_info) {
                if(this.pushData.task_info[key] && (key !== 'checkin')) {
                    this.done_count +=1;
                }
            }
            if(this.done_count > 3) {
                this.done_count = 3;
            }
        }
    }
</script>