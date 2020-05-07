<template>
    <div>
        <PageHeader title="体验官报名"></PageHeader>
        <div class="main-form">
            <p class="form-title">您好，请完善个人信息</p>
            <p class="form-title-sub">最多8个汉字，不支持特殊字符</p>
            <form class="m-form">
                <div class="form-item">
                    <input type="text" v-model="name"  class="form-input" placeholder="请输入姓名" >
                    <!--<hr/>-->
                </div>
                <div class="form-item">
                    <input type="text" v-model="idCard"  class="form-input" placeholder="请输入证件号码" >
                </div>
                <p class="tips">为保障您的个人隐私权益，请在点击同意按钮前认真阅读并勾选同意下方协议</p>
                <p class="tips">
                    <span>
                         <input type="checkbox"  value="" id="checkbox1">
                        <label for="checkbox1"><a href="#/confidentiality">《保密协议》</a></label>
                    </span>
                    <span>
                        <input type="checkbox"  value="" id="checkbox2">
                        <label for="checkbox2"><a href="">《职务职责》</a>&nbsp;<a href="">《权益介绍》</a></label>
                    </span>
                </p>
                <SubmitBtn text="下一步" toLink="/phone"/>
            </form>
        </div>
    </div>
</template>
<script>
import PageHeader from '../components/PageHeader'
import SubmitBtn from '../components/SubmitBtn'
export default {
    name: 'Certificate',
    data() {
        return {
            name: '',
            idCard: ''
        }
    },
    components: {
        PageHeader, SubmitBtn
    }
}
</script>
<style scoped lang="scss">
</style>
