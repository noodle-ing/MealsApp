import { createStore} from 'vuex'
import state from './state.js'
import * as actions from './actions.js';
import * as mutations from './mutations.js';
import * as getters from './getters.js';
const store = createStore({
    state,
    actions,
    mutations,
    getters,
})

export default store; // обязательная команда чтобы что мы написали а именно хранилище store можно был использовать в во всем приложение