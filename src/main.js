import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import filters from './filters/index'
import { Picker, Toast } from 'vant'// 引入vant
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
Vue.use(Picker, Toast);
Vue.use(VeeValidate, config);
/* 修改Toast默认设置 */
Toast.setDefaultOptions({ duration: 2000 });
Toast.setDefaultOptions('loading', { forbidClick: true });
Validator.updateDictionary(dict);
// 注入全局过滤器
Object.keys(filters).forEach(item => {
    Vue.filter(item, filters[item])
})
Vue.config.productionTip = false
Vue.config.devtools = true

/*  全局自定义指令 */
// 自动获取焦点
Vue.directive('autoFocus', {
    inserted(el) {
        el.focus()
    }
})
// 防止重复点击提交
Vue.directive('preventReclick', {
    bind(el, binding) {
        el.addEventListener('click', function() {
            if (!el.disabled) {
                el.disabled = true
                setTimeout(() => {
                    el.disabled = false
                }, binding.value || 2000)
            }
        })
    }
})

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
