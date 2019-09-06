import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import Data from '../config/utils'

Vue.use(Vuex)

const state = {
    searchList: Data.searchList
}

const getters = {
    searchTypes(state) {
        return Object.keys(state.searchList)
    }
}

export default new Vuex.Store({
    state,
    getters,
    mutations
})