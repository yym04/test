<template>
    <header>
        <img v-on:click="back" class="back" src="../assets/pictures/back.png" srcset="../assets/pictures/back@2x.png,../assets/pictures/back@3x.png" alt="">
        <div class="nav-title">{{title}}</div>
    </header>
</template>

<script>
export default {
    props: {
        title: String
    },
    data() {
        return {}
    },
    methods: {
        back() {
            this.$router.go(-1)
        }
    }
}
</script>

<style scoped lang="scss">
    header{
        width: 100vw;
        height: 44px;
        border: 1px solid #E8E8E8;
        .back{
            float: left;
            top:50%;
            width: 24px;
            height: 24px;
            transform: translateX(8.5px) translateY(12px);
        }
        .nav-title{
            width: 100vw;
            text-align: center;
            font-size: 16px;
            font-family: "苹方-简";
            font-weight: bold;
            color: #000000;
            @include line-height(44px,44px)
        }
    }
</style>
