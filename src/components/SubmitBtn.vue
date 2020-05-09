<template>
    <button type="submit" class="submit_btn"
            :class="{active : !isDisabled }"
            :disabled="isDisabled ">{{text}}
    </button>
</template>

<script>
export default {
    data() {
        return {}
    },
    props: {
        text: String,
        isDisabled: Boolean,
    },
    methods: {
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
        &.active{
            background-color: $active-color;
        }
        &:active{
            background-color: $active-color;
        }
    }
</style>
