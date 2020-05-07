<template>
    <div>
        <PageHeader title="标签选择"/>
        <div class="main-form">
            <p class="form-title">恭喜，成为第 <span class="num">10</span> 位体验官，</p>
            <p class="form-title">您认为自己满足哪些标签？</p>
            <p class="form-title-sub">选择不小于2项</p>
            <div class="tag-box">
                <div class="tag" :class="{active:isActive}" @click="handleClick(e)"><p class="tag-name">传统</p></div>
                <div class="tag" :class="{active:isActive}" @click="isActive =!isActive"><p class="tag-name">精打细算</p></div>
                <div class="tag" :class="{active:isActive}" @click="isActive =!isActive"><p class="tag-name">宅</p></div>
                <div class="tag" :class="{active:isActive}" @click="isActive =!isActive"><p class="tag-name">积极向上</p></div>
                <div class="tag" :class="{active:isActive}" @click="isActive =!isActive"><p class="tag-name">有责任感</p></div>
                <!--占位-->
                <div class="tag_empty"></div>
                <div class="tag_empty"></div>
                <div class="tag_empty"></div>
            </div>
            <SubmitBtn text="选好的，进入下一步 >" toLink="/credential"/>
        </div>
    </div>
</template>
<script>
import PageHeader from '../components/PageHeader'
import SubmitBtn from '../components/SubmitBtn'
export default {
    data() {
        return {
            isActive: false
        }
    },
    components: {
        PageHeader, SubmitBtn
    },
    methods: {
        handleClick(e){
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
            p{
                font: 12pt "苹方-简";
                color: #262626;
                text-align: center;
                line-height: 36px;
            }
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
