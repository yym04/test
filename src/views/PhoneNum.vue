<template>
    <div>
        <PageHeader title="验证手机号"/>
        <div class="main-form">
            <p class="form-title">请验证手机号码</p>
            <p class="form-title-sub">输入手机号并获取验证码验证</p>
            <form class="m-form">
                <div class="form-item">
                    <button class="code-btn">获取验证码</button>
                    <input type="phone" v-model="phone"  class="form-input" placeholder="请输入手机号" >
                </div>
                <div class="form-item">
                    <input type="text" v-model="code"  class="form-input" placeholder="请输入短信验证码"  >
                </div>
                <SubmitBtn text="下一步" toLink="/city"/>
            </form>
        </div>
    </div>
</template>
<script>
import PageHeader from '../components/PageHeader'
import SubmitBtn from '../components/SubmitBtn'
export default {
    data() {
        return {
            phone: '',
            code: ''
        }
    },
    components: {
        PageHeader, SubmitBtn
    }
}
</script>
<style scoped lang="scss">
    .code-btn{
        position: absolute;
        right: 27px;
        border: none;
        color: #4771F6;
        font: bold 14px $font-family-main;
        background-color: #FFFFFF;
    }
</style>
