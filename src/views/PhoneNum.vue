<template>
    <div>
        <PageHeader title="验证手机号"/>
        <div class="main-form">
            <p class="form-title">请验证手机号码</p>
            <p class="form-title-sub">输入手机号并获取验证码验证</p>
            <form class="m-form" @submit.prevent="onSubmit">
                <div class="form-item">
                    <button class="code-btn">获取验证码</button>
                    <input type="phone" v-validate="'required|phone'" name="phone" v-model="phone"  class="form-input" placeholder="请输入手机号" >
                    <span v-show="errors.has('phone')">{{ errors.first('phone') }}</span>
                </div>
                <div class="form-item">
                    <input type="text" v-validate="'required|code'" name="code" v-model="code"  class="form-input" placeholder="请输入短信验证码"  >
                    <span v-show="errors.has('code')">{{ errors.first('code') }}</span>
                </div>
                <SubmitBtn text="下一步"  :is-disabled="errors.any()" :anyEmpty="anyEmpty" />
            </form>
        </div>
    </div>
</template>
<script>
import validate from '../mixins/validate'
import PageHeader from '../components/PageHeader'
import SubmitBtn from '../components/SubmitBtn'
export default {
    name: 'phoneNum',
    mixins: [validate],
    data() {
        return {
            phone: '',
            code: ''
        }
    },
    computed: {
        anyEmpty: function() {
            // 非空验证： 是否有未填的必填项 ture:有; false:没有
            return !this.phone || !this.code
        }
    },
    components: {
        PageHeader, SubmitBtn
    },
    methods: {
        onSubmit() {
            this.validateBeforeSubmit('请检查手机号和验证码！').then(() => {
                return this.$router.push('/city')
            })
        }
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
