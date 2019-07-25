import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'

Vue.use(Vuex)

const state = {
    searchList: {
        baidu: {
            type: 'baidu',
            url: 'https://www.baidu.com/s',
            key: 'wd'
        },
        bing: {
            type: 'bing',
            url: 'https://cn.bing.com/search',
            key: 'q'
        },
        sogou: {
            type: 'sogou',
            url: 'https://www.sogou.com/web',
            key: 'query'
        },
        so: {
            type: 'so',
            url: 'https://www.so.com/s',
            key: 'q'
        }
    },
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