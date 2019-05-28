import Vue from 'vue'
import Router from 'vue-router'
import Index from '../pages/home/Index.vue'
import FireMonitor from '../pages/fireMonitor/fireMonitoring.vue'
import Electrical from '../pages/electrical/electricalStatistics.vue'
import Water from '../pages/water/water.vue'
import FireController from '../pages/fireController/fireController.vue'
import Login from '../pages/login/login'
Vue.use(Router)
export default new Router({
    routes: [{
        path: '/',
        name: 'Login',
        component: Login
    }, {
        path: '/index',
        name: 'Index',
        meta: {
            requireAuth: true
        },
        component: Index
    }, {
        path: '/fireMonitor',
        name: 'FireMonitor',
        meta: {
            requireAuth: true
        },
        component: FireMonitor
    }, {
        path: '/electrical',
        name: 'Electrical',
        meta: {
            requireAuth: true
        },
        component: Electrical
    }, {
        path: '/water',
        name: 'Water',
        meta: {
            requireAuth: true
        },
        component: Water
    }, {
        path: '/fireController',
        name: 'FireController',
        meta: {
            requireAuth: true
        },
        component: FireController
    }]
})