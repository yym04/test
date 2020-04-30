<template>
    <div>
        <PageHeader title="体验官报名"></PageHeader>
        <div class="main-form">
            <p class="form-title">您好，请完善个人信息</p>
            <p class="form-title-sub">最多8个汉字，不支持特殊字符</p>
            <form class="form">
                <div class="form-item">
                    <input type="text" v-model="name"  class="form-input" placeholder="请输入姓名" style="width: 50%">
                    <hr/>
                </div>
                <div class="form-item">
                    <input type="text" v-model="idCard"  class="form-input" placeholder="请输入证件号码" style="width: 70%" >
                    <hr/>
                </div>
                <p class="tips">为保障您的个人隐私权益，请在点击同意按钮前认真阅读并勾选同意下方协议</p>
            </form>
        </div>
    </div>
</template>
<script>
import PageHeader from '../components/PageHeader'
export default {
    name: 'Certificate',
    data() {
        return {
            name: '',
            idCard: ''
        }
    },
    components: {
        PageHeader
    }
}
</script>
<style scoped lang="scss">
    .form{
        display: flex;
        flex-direction: column;
        .form-item{
            margin-top: 24px;
            input{
                border: none;
                &::-webkit-input-placeholder{
                    color: $light-gray;
                    font-size: 15px;
                }
            }
            hr{
                width: 100%;
                border: 0.5px solid #FF5500;
                margin-top: 10px;
            }
        }
        .tips{
            color: $light-gray;
            font-size: 12px;
            margin-top: 22px;
            line-height: 16.5px;
        }
    }
</style>
