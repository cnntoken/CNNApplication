import generate from '@src/util/generate.js';
import {getQueryString, setStorage} from '@src/util/index.js';
import App from '../views/index.vue';
let page = 'index';
import { config } from '@src/config';
import NDB from '@src/util/NDB';

function pushRouter(){
    let pushData = JSON.parse(getQueryString('push')||'{}');
    if(window.localStorage.getItem('push_id') == pushData.push_id){
        return false;
    }
    let type = pushData.type;
    if(!type && type !== 0){
        return false;
    }
    if(pushData.push_id){
        window.localStorage.setItem('push_id',pushData.push_id);
        window.localStorage.setItem('push_data',getQueryString('push'));
    }

    let url = '';
    if(type == 0 || type == 7 || type == 11 || type == 15){
        url = './income.html';
    }else if(type == 8){
        url = './cash-out.html';
    }else if(type == 302){
       if(pushData.page == 'partnership'){
           url = './partnership.html';
       }else if(pushData.page == 'checkin'){
           url = './checkin.html';
       }else if(pushData.page == 'read'){
           NDB(()=>{
               NDB.readNews();
           })
       }
    }else {
        url = './index.html';
    }
    location.href = `${url}?v=${config.version}`;
}
let  setChannel = ()=>{
    let channel = getQueryString('channel');
    if(channel){
        setStorage('channel',channel);
    }
};
setChannel();
try{
    pushRouter();
    let inviteCode = getQueryString('invite_code')
    if(inviteCode){
        window.localStorage.setItem('invite_code',inviteCode);
    }
}catch(e){
    console.log(e);
}
generate({App, page});