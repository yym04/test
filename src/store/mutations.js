import { SAVE_NAME_IDCARD } from './mutations_types'

export default {
    [SAVE_NAME_IDCARD](state, { username, idCard }) {
        state.username = username;
        state.idCard = idCard
    }
}
