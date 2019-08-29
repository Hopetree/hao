import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import icon_baidu from '@/assets/icon_baidu.png'
import icon_bing from '@/assets/icon_bing.png'
import icon_360 from '@/assets/icon_360.png'
import icon_sougou from '@/assets/icon_sougou.png'
import icon_google from '@/assets/icon_google.png'

Vue.use(Vuex)

const state = {
    searchList: {
        baidu: {
            title: '百度',
            url: 'https://www.baidu.com/s',
            key: 'wd',
            icon: icon_baidu
        },
        bing: {
            title: '必应',
            url: 'https://cn.bing.com/search',
            key: 'q',
            icon: icon_bing
        },
        sogou: {
            title: '搜狗',
            url: 'https://www.sogou.com/web',
            key: 'query',
            icon: icon_sougou
        },
        so: {
            title: '360搜索',
            url: 'https://www.so.com/s',
            key: 'q',
            icon: icon_360
        },
        google: {
            title: 'Google',
            url: 'https://www.google.com/search',
            key: 'q',
            icon: icon_google
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