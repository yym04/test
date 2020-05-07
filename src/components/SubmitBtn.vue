<template>
    <button class="submit_btn"  @click="OnSubmit">{{text}}
    </button>
</template>

<script>
export default {
    data() {
        return {}
    },
    props: {
        text: String,
        toLink: String // t挑战至哪个页面
    },
    methods: {
        OnSubmit() {
            this.$router.push(this.toLink)
        }
    }
}
</script>

<style scoped lang="scss">
    .submit_btn{
        width: 321px;
        height: 45px;
        margin: 24px auto 10px;
        font-size: 15px;
        font-family: $font-family-main;
        font-weight: bold;
        color: white;
        background-color: $color-main;
        text-align: center;
        vertical-align: center;
        line-height: 45px;
        border: none;
        border-radius: 6px;
    }
</style>
