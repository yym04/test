<template>
    <div>
        <PageHeader title="标签选择"/>
        <div class="main-form">
            <p class="form-title">恭喜，成为第 <span class="num">10</span> 位体验官，</p>
            <p class="form-title">您认为自己满足哪些标签？</p>
            <p class="form-title-sub">选择不小于2项</p>
            <form @submit.prevent="nextStep">
                <div class="tag-box" @click="handleClick">
                    <div class="tag" >传统</div>
                    <div class="tag" >精打细算</div>
                    <div class="tag" >宅</div>
                    <div class="tag" >积极向上</div>
                    <div class="tag" >有责任感</div>
                    <!--占位-->
                    <div class="tag_empty"></div>
                    <div class="tag_empty"></div>
                    <div class="tag_empty"></div>
                </div>
                <SubmitBtn text="选好的，进入下一步 >" :is-disabled="isDisabled" />
            </form>
        </div>
    </div>
</template>
<script>
import PageHeader from '../components/PageHeader'
import SubmitBtn from '../components/SubmitBtn'
export default {
    data() {
        return {
            tagNum: 0,
            isDisabled: true // 默认提交按钮为disabled
        }
    },
    watch: {
        tagNum() {
            // 选择的标签项小于2项，不允许提交
            if (this.tagNum >= 2) {
                this.isDisabled = false
            }
        }
    },
    components: {
        PageHeader, SubmitBtn
    },
    methods: {
        handleClick(e) {
            // 改变 tag 的样式
            let className = e.target.className
            console.log(className)
            if (className === 'tag-box'){
                return
            }
            if (className.indexOf('active') !== -1) {
                e.target.className = 'tag'
                this.tagNum--
            } else {
                e.target.className = 'tag active'
                this.tagNum++
            }
            console.log(this.tagNum)
        },
        nextStep() {
            this.$router.push('/credential')
        }
    }
}
</script>
<style scoped lang="scss">
    .num{
        color: $color-main;
    }
    .tag-box{
        margin-top: 4px;
        display: flex;
        display: -webkit-flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        .tag{
            width:106px;
            height: 36px;
            border-radius: 22.5px;
            background-color: #F2F2F2;
            margin-top: 16px;
            font: 12pt "苹方-简";
            color: #262626;
            text-align: center;
            line-height: 36px;
            &.active{
                color: $active-color;
                font-weight: bold;
                border: 0.5px solid $active-color;
                background-color: #EFF3FF;
            }
        }
        .tag_empty{
            width:106px;
            height: 0;
        }
    }
</style>
