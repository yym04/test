import { SAVE_NAME_IDCARD } from './mutations_types'
export default {
    saveNameIdCard({ commit }, { username, idCard }) {
        commit(SAVE_NAME_IDCARD, { username, idCard })
    }
}
