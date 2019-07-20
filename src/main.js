// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import routes from './router'
import VueRouter from 'vue-router';

Vue.config.productionTip = false

Vue.use(VueRouter)
const router = new VueRouter({
    // 去掉url中#
    mode: 'history',
    routes: routes
})

/* eslint-disable no-new */
new Vue({
    router,
}).$mount('#app')
