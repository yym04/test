<template>
    <div>
        <PageHeader title="请选择城市"/>
        <div class="main-form">
            <p class="form-title">选择您所在的城市</p>
            <p class="form-title-sub">选择城市地址提交</p>
            <form class="m-form" @submit.prevent="onSubmit">
                <div class="form-item">
                    <a class="choose-city" v-if="!showPicker" @click="showPicker = !showPicker"></a>
                    <input type="text" v-validate="'required'" name="city"  v-model="city"  class="form-input city-name" placeholder="请选择城市" >
                    <span v-show="errors.has('city')">{{ errors.first('city') }}</span>
                </div>
                <SubmitBtn text="提交报名" :is-disabled="errors.any()" :anyEmpty="anyEmpty" />
            </form>
        </div>
        <div class="city-picker">
            <transition name="pull-up" >
                <van-picker v-if="showPicker"  show-toolbar title="请选择城市"
                            :columns="columns"
                            @confirm="onConfirm"
                            @cancel="onCancel"
                            @change="onChange"/>
            </transition>
        </div>
    </div>
</template>
<script>
import validate from '../mixins/validate'
import PageHeader from '../components/PageHeader'
import SubmitBtn from '../components/SubmitBtn'
export default {
    name: 'city',
    mixins: [validate],
    data() {
        return {
            city: '',
            showPicker: false,
            columns: [
                {
                    text: '浙江',
                    children: [
                        {
                            text: '杭州',
                            children: [{ text: '西湖区' }, { text: '余杭区' }]
                        },
                        {
                            text: '温州',
                            children: [{ text: '鹿城区' }, { text: '瓯海区' }]
                        }
                    ]
                },
                {
                    text: '福建',
                    children: [
                        {
                            text: '福州',
                            children: [{ text: '鼓楼区' }, { text: '台江区' }]
                        },
                        {
                            text: '厦门',
                            children: [{ text: '思明区' }, { text: '海沧区' }]
                        }
                    ]
                }
            ]
        }
    },
    computed: {
        anyEmpty: function() {
            // 非空验证： 是否有未填的必填项 ture:有; false:没有
            return !this.city
        }
    },
    components: {
        PageHeader, SubmitBtn
    },
    methods: {
        onSubmit() {
            this.validateBeforeSubmit('请选择城市！').then(() => {
                return this.$router.push('/tag')
            })
        },
        onConfirm(value, index) {
            console.log('confirm....');
            this.city = value;
            console.log(value) // ["浙江", "杭州", "西湖区"]
            this.showPicker = false
        },
        onCancel() {
            console.log('cancel....')
            this.showPicker = false
        }
    }
}
</script>
<style scoped lang="scss">
    .choose-city{
        width: 24px;
        height: 24px;
        position: absolute;
        right: 27px;
        border: none;
        background-color: #FFFFFF;
        @include bg_image("../assets/pictures/city_right")
    }
    .city-name{
        cursor: not-allowed;
        pointer-events: none;
    }
    .van-picker{
        bottom: -120px;
    }
    /* 可以设置不同的进入和离开动画 */
    /* 设置持续时间和动画函数 */
    .pull-up-enter-active {
        transition: all .3s ease;
    }
    .pull-up-leave-active {
        transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .pull-up-enter, .pull-up-leave-to
        {
        transform: translateY(10px);
        opacity: 0;
    }
</style>
