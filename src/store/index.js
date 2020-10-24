import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import Data from '../config/utils'
import SoulData from '../config/soul'

Vue.use(Vuex)

const state = {
    searchList: Data.searchList,
    linkList: Data.linkList,
    soulList: SoulData.souls
}

const getters = {
    searchTypes(state) {
        return Object.keys(state.searchList)
    },
    baselinks(state) {
        var _list = []
        var _dic = state.linkList
        for (var key in _dic) {
            var each_list = _dic[key].slice(0,6)
            _list = _list.concat(each_list)
        }
        return _list
    }

}

export default new Vuex.Store({
    state,
    getters,
    mutations
})