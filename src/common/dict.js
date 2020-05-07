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
            phone: '手机号码'
        }
    }
};
export { dict }
