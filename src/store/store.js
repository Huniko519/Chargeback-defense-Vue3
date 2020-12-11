import Vue from 'vue'
import Vuex from 'vuex'
import warpliteapi from '../modules/warpliteapi'
import login from '../modules/login'
import quickbookapi from '../modules/quickbookapi'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        connected: false,
        error: '',
        message: ''
    },
    getters: {
    },
    mutations: {

    },
    actions: {

    },
    modules: {
        warpliteapi,
        login,
        quickbookapi
    }
})