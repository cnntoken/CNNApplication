import Vue from 'vue';
import VueI18n from 'vue-i18n';
import '@src/assets/less/base.less';
import { getInitialLang, changeTitle} from '@src/util/index.js';
import filters from '@src/filters/index.js';
import { config } from '@src/config';
import NDB from '@src/util/NDB';
import Lang from '@src/lang/en';


let launch = new Vue({
    el:'#launch-screen',
    created () {
        this.$on('launch-end', () => {
            this.onLaunchEnd();
        });
    },
    methods: {
        onLaunchEnd () {
            this.$el.parentNode.removeChild(this.$el);
        }
    }
});

Vue.prototype.$launchEnd = ()=> {
    launch.$emit('launch-end');
};
Vue.prototype.$version = (value)=>{
    return `${value}?v=${config.version}`;
};

let generate = ({page, App}) => {
    let localLang = getInitialLang();
    let preMixins = {
        beforeCreate: function () {
            changeTitle(this.$t(`pageTitle.${page}`));
        },
        watch:{
            pageBlock(number){
                if(number === 0){
                    this.$launchEnd();
                }
            }
        }
    };
    NDB(()=>{
        NDB.get('/v1/users/mine/cnn/promotion/configs/', ({data: $NDGCNN}) => {
            let langPackage = {};
            langPackage[localLang] = Lang;
            Vue.use(VueI18n);
            Vue.use(filters);
            Vue.prototype.$NDGCNN = $NDGCNN;
            const i18n = new VueI18n({
                locale: localLang,
                messages: langPackage
            });
            new Vue({
                mixins:[preMixins],
                i18n,
                ...App
            }).$mount('#root');
        });
    })
   
}
export default generate;