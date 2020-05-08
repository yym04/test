/*
* 自定义validate
* */
const dict = {
    zh_CN: {
        messages: {
            email: () => '请输入正确的邮箱格式',
            required: (field) => '请输入' + field
        },
        attributes: {
            name: '姓名',
            idCard: '身份证号码',
            phone: '手机号码',
            isAgree: '保密协议',
            code: '验证码'
        }
    }
};
export { dict }
