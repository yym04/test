/*
*  自定义验证规则
* */
import { Validator } from 'vee-validate';

// 姓名name
Validator.extend('name', {
    messages: {
        zh_CN: field => field + '最多8个汉字，不支持字符'
    },
    validate: value => {
        var rule = /^[\u4e00-\u9fa5]{0,8}$/;
        return rule.test(value)
    }
});

// 身份证号码idCard
Validator.extend('idCard', {
    messages: {
        zh_CN: () => '请输入正确的身份证号码'
    },
    validate: value => {
        var rule = /^\d{6}(18|19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|[xX])$/;
        return rule.test(value)
    }
});

Validator.extend('phone', {
    messages: {
        zh_CN: field => field + '必须是11位手机号码'
    },
    validate: value => {
        return value.length === 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/.test(value)
    }
});

// 验证码验证
Validator.extend('code', {
    messages: {
        zh_CN: field => field + '必须是4位数字'
    },
    validate: value => {
        return /^\d{4}$/.test(value)
    }
});

Validator.extend('pass', {
    messages: {
        zh_CN: field => field + '6-16位由字母、数字、特殊符号两两组成'
    },
    validate: value => {
        return value.length >= 6 && /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/.test(value)
    }
});

