<template>
    <div>
        <PageHeader title="体验官报名"></PageHeader>
        <main>
            <div class="main-form">
                <p class="form-title">您好，请完善个人信息</p>
                <p class="form-title-sub">最多8个汉字，不支持特殊字符</p>
                <form class="m-form" @submit.prevent="onSubmit">
                    <div class="form-item">
                        <input type="text" v-validate="'required|name'"  name="name" v-model="name" v-auto-focus class="form-input" placeholder="请输入姓名" >
                        <span v-show="errors.has('name')">{{ errors.first('name') }}</span>
                    </div>
                    <div class="form-item">
                        <input type="text" v-validate="'required|idCard'" name="idCard" v-model="idCard" class="form-input" placeholder="请输入证件号码" >
                        <span v-show="errors.has('idCard')">{{ errors.first('idCard') }}</span>
                    </div>
                    <p class="tips">为保障您的个人隐私权益，请在点击同意按钮前认真阅读并勾选同意下方协议</p>
                    <p class="tips">
                    <span>
                         <input type="checkbox" v-validate="'required'" name="isAgree" v-model="isAgree" value="" id="checkbox1">
                        <label for="checkbox1"><a href="#/confidentiality" @click="onReadC">《保密协议》</a></label>
                    </span>
                        <!--<span>
                            <input type="checkbox"  value="" id="checkbox2">
                            <label for="checkbox2"><a href="">《职务职责》</a>&nbsp;<a href="">《权益介绍》</a></label>
                        </span>-->
                    </p>
                    <SubmitBtn text="下一步" :is-disabled="errors.any()" />
                </form>
            </div>
        </main>
    </div>
</template>
<script>
import validate from '../mixins/validate'
import PageHeader from '../components/PageHeader'
import SubmitBtn from '../components/SubmitBtn'
// import { mapState } from 'vuex'

export default {
    name: 'Certificate',
    mixins: [validate],
    data() {
        return {
            name: '',
            idCard: '',
            isAgree: false // false表示未同意 ture表示已同意
        }
    },
    computed: {
        // ...mapState(['username', 'idCard']), // 拿state里面的数据
    },
    created() {
        // 拿到state里面的姓名和身份证号码
        this.name = this.$store.state.username;
        this.idCard = this.$store.state.idCard;
        this.isAgree = sessionStorage.getItem('isAgree') === 'true' ? true : false;
        console.log(this.isAgree)
    },
    methods: {
        onSubmit: function(e) {
            console.log(e)
            this.validateBeforeSubmit('请勾选保密协议', { isAgree: this.isAgree }).then(() => {
                return this.$router.push('/phone')
            })
        },
        onReadC: function () {
            // 保存姓名和身份证号
            // dispacth action 中的saveNameIdCard 从而改变state
            this.$store.dispatch('saveNameIdCard', { username: this.name, idCard: this.idCard })
            sessionStorage.setItem('isAgree', this.isAgree)
        }
    },
    components: {
        PageHeader, SubmitBtn
    }
}
</script>
<style scoped lang="scss">
    //复选框不可点击
    input[type="checkbox"]::before{
        cursor: not-allowed;
        pointer-events:none
    }
</style>
