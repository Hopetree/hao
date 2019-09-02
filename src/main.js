// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import axios from 'axios'

import routes from './router'
import store from './store/index'

import './assets/css/main.css'

Vue.prototype.$axios = axios

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(ElementUI)

const router = new VueRouter({
    // 去掉url中#
    // mode: 'history',
    routes: routes
})

/* eslint-disable no-new */
new Vue({
    router,
    store,
}).$mount('#app')
