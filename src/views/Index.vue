<template>
    <div>
        <PageHeader title="体验官报名" />
        <div class="main">
            <router-link to="/certificate"><button >点击这里 成为体验官</button></router-link>
        </div>
    </div>
</template>
<script>
import PageHeader from '../components/PageHeader.vue'
export default {
    data() {
        return {}
    },
    components: {
        PageHeader
    },
    created() {
    }
}
</script>
<style scoped lang="scss">
    .main{
        width: 100vw;
        height: calc(100vh - 44px);
        @include bg_image("../assets/pictures/background");
        position: relative;
        button{
            width: 319px;
            height: 66px;
            border: none;
            border-radius: 6px;
            @include bg_image("../assets/pictures/sign_nor");
            font-size: 18px;
            font-family: "阿里巴巴普惠体";
            font-weight: bolder;
            color: #FFFFFF;
            text-align: center;
            vertical-align: middle;
            position:absolute;
            bottom: 80px;
            left: 50%;
            transform: translateX(-160px);
        }
    }
</style>
