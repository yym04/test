<template>
    <div>
        <PageHeader title="保密协议"/>
        <main>
            <div class="main-text">
                <div class="text">
                    尊敬的长安汽车体验官：<br>
                    <br>
                    <b>为保障您的合法权益，您应认真阅读并遵守本《保密协议》（以下简称“本协议”），除非您已阅读，充分理解并完全接受本合同所有条款，并同意按本合同约定的条款遵守法律责任和义务，否则您应立即停止并退出。一旦您以点击，替换或其他方式对本合同内容进行确认即被您已阅读并同意接受本合同的约束。</b><br>
                    <br>
                    您完全自愿在重庆长安汽车股份有限公司“知音伙伴”体验官活动。您完全理解在此过程中，本公司有可能，或者有必要，向您披露某些商业秘密。为保护双方各自的合法权益，经友好协商并达成一致双方同意就商业秘密的保密协议以及本保密协议。<br>
                    <br>
                    1、定义 <br>
                    <br>
                    1.1“保密信息”，包括但不仅限于本公司（1）与项目有关的任何/所有协议，往来传真，合作备忘录或邮件；（2）研究成果，客户资料，产品，商业计划，行销信息，投资信息，财务状况，图纸，技术决窍，计算机程序，研究和其他资料，以及任何由您根据这些信息编制的或所编制的与这些信息有关的资料，任何包括这些信息或全部或部分依据这些信息而形成的资料；（3）属于第三方但本公司承担保密义务的信息；（4）其他尽到审慎义务的人判断应予保密的信息。
                    <br>
                    <br>
                </div>
            </div>
        </main>
        <div class="bottom">
            <button class="confirm-btn" :class="{active:isAgree}" :disabled="!!seconds"  @click="handleAgree">
                <span v-if="seconds">阅读{{seconds}}s后同意《保密协议》</span>
                <span v-else>同意《保密协议》</span>
            </button>
        </div>
    </div>
</template>
<script>
import PageHeader from '../../components/PageHeader'
export default {
    data() {
        return {
            seconds: 2,
            isDisabled: {
                backgroundColor: '#F2F2F2'
            },
            isAgree: false
        }
    },
    components: {
        PageHeader
    },
    beforeCreate() {
    },
    created() {
        // 拿缓存中的isAgree
        this.isAgree = sessionStorage.getItem('isAgree') === 'true' ? true : false;
        console.log(this.isAgree)
        // 如果进来之前是未同意状态 强制读10S
        if (!this.isAgree) {
            this.timer = setInterval(() => {
                this.seconds--
                if (this.seconds <= 0) {
                    this.seconds = 0
                    // 清空定时器
                    clearInterval(this.timer)
                    this.timer = null
                }
            }, 1000)
        } else {
            this.seconds = 0
        }
    },
    beforeDestroy() {
        // 清空定时器
        if (this.timer) {
            clearInterval(this.timer)
            this.timer = null
        }
    },
    methods: {
        handleAgree() {
            this.isAgree = !this.isAgree;
            sessionStorage.setItem('isAgree', this.isAgree)
            // setTimeout(() => {
            //     this.$router.go(-1)
            // }, 1000)
        }
    }
}
</script>
<style scoped lang="scss">
    .main-text{
        height:calc(100vh - 120px);
        width: 343px;
        margin: 16px auto;
        overflow: auto;
        .text{
            height: auto;
            font: 16px "苹方-简";
            line-height: 24px;
            color: #222222;
        }
    }
    .bottom{
        position: fixed;
        bottom: 0;
        width: 100vw;
        height: 60px;
        text-align: center;
        .confirm-btn{
            width: 321px;
            height: 45px;
            border: none;
            margin-top: 7.5px;
            border-radius: 6px;
            color: #FFFFFF;
            background-color: $color-main;
            &.active{
                background-color: $active-color;
            }
            &:active{
                background-color: $active-color;
            }
        }
    }
</style>
