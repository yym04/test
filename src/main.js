import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import filters from './filters/index'
// import wechat from '@/common/wechat/index'
import { Picker } from 'vant'// 引入vant
import VeeValidate, { Validator } from 'vee-validate';
import zh from 'vee-validate/dist/locale/zh_CN';
import { dict } from './common/dict'
import './common/rules'

Validator.addLocale(zh);
const config = {
    locale: 'zh_CN',
    events: 'blur'
    // events: 'input|blur',
};
// Vue.use(wechat);
Vue.use(Picker);
Vue.use(VeeValidate, config);
Validator.updateDictionary(dict);

// 注入全局过滤器
Object.keys(filters).forEach(item => {
    Vue.filter(item, filters[item])
})
// const wx = Vue.wechat;
// wx.config({
//     appId: '',
//     nonceStr: '',
//     signature: '',
//     timestamp: '',
//     jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage']
// })
Vue.config.productionTip = false
Vue.config.devtools = true
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
