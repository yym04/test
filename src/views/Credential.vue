<template>
    <div>
        <PageHeader title="招募分享"/>
        <div class="credential-img">
            <img src="" alt="二维码">
        </div>
        <p class="tips">长按保存图片，邀请好友一起成为体验官</p>
        <p style="text-align: center">
            <SubmitBtn text="打开APP 参与体验"/>
        </p>
    </div>
</template>
<script>
import PageHeader from '../components/PageHeader'
import SubmitBtn from '../components/SubmitBtn'
export default {
    data() {
        return {
        }
    },
    components: {
        PageHeader, SubmitBtn
    }
}
</script>
<style scoped lang="scss">
    .credential-img{
        width: 343px;
        height: 541px;
        margin: 16px auto;
    }
    .tips{
        text-align: center;
        height: 16.5px;
        line-height: 16.5px;
    }
</style>
