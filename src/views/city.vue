<template>
    <div>
        <PageHeader title="请选择城市"/>
        <div class="main-form">
            <p class="form-title">选择您所在的城市</p>
            <p class="form-title-sub">选择城市地址提交</p>
            <form class="m-form">
                <div class="form-item">
                    <input type="phone" v-model="phone"  class="form-input" placeholder="请选择城市" >
                </div>
                <SubmitBtn text="提交报名" toLink="/"/>
            </form>
        </div>
    </div>
</template>
<script>
import PageHeader from '../components/PageHeader'
import SubmitBtn from '../components/SubmitBtn'
export default {
    data() {
        return {}
    },
    components: {
        PageHeader, SubmitBtn
    }
}
</script>
<style scoped lang="scss">

</style>
