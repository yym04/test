<template>
    <button type="submit" class="submit_btn" :class="{active : !isDisabled&&!anyEmpty }" :disabled="isDisabled && anyEmpty"  @click="OnSubmit" >{{text}}
    </button>
</template>

<script>
export default {
    data() {
        return {}
    },
    props: {
        text: String,
        toLink: String, // t挑战至哪个页面
        isDisabled: Boolean,
        anyEmpty: Boolean // 是否有未填的必填项 ture:有; false:没有
    },
    methods: {
        OnSubmit() {
            // 全部验证
            this.$validator.validateAll().then((result) => {
                if (result) {
                    console.log('全部正确')
                } else {
                    console.log('有错误的哦')
                }
            })
            // return
            // this.$router.push(this.toLink)
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
        &.active{
            background-color: $active-color;
        }
        &:active{
            background-color: $active-color;
        }
    }
</style>
