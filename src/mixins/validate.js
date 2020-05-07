import { Toast } from 'vant'
export default {
    methods: {
        validateBeforeSubmit(errMsg, rules) {
            return new Promise((resolve) => {
                this.$validator.validateAll(rules || {}).then((result) => {
                    if (result) {
                        resolve();
                        return
                    }
                    Toast(errMsg)
                })
            })
        }
    }
}
