import * as suffix from './suffixFormat.js';

let filterObj = {
    ...suffix
}
let install = (Vue)=>{
    for(let name of Object.keys(filterObj)){
        Vue.filter(name,filterObj[name]);
    }
}

export default {
    install
}