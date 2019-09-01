import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'

Vue.use(Vuex)

const img_path = '/static/img/'

const state = {
    searchList: {
        baidu: {
            title: '百度',
            url: 'https://www.baidu.com/s',
            key: 'wd',
            icon: img_path + 'icon_baidu.png'
        },
        bing: {
            title: '必应',
            url: 'https://cn.bing.com/search',
            key: 'q',
            icon: img_path + 'icon_bing.png'
        },
        sogou: {
            title: '搜狗',
            url: 'https://www.sogou.com/web',
            key: 'query',
            icon: img_path + 'icon_sogou.png'
        },
        so: {
            title: '360搜索',
            url: 'https://www.so.com/s',
            key: 'q',
            icon: img_path + 'icon_360.png'
        },
        google: {
            title: 'Google',
            url: 'https://www.google.com/search',
            key: 'q',
            icon: img_path + 'icon_google.png'
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