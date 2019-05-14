import Vue from 'vue'
import Router from 'vue-router'
import Index from '../pages/home/Index.vue'
import Electric from '../components/Electric.vue'
import Water from '../components/Water.vue'
import Monitor from '../components/Monitor.vue'
import Fire_controller from '../components/Fire_controller.vue'
import Header from '../pages/home/components/Header.vue'
import Aside from '../pages/home/components/Aside.vue'
import Main from '../pages/home/components/Main.vue'
import Bottom from '../pages/home/components/Bottom.vue'
import Right_top from '../pages/home/components/Right_top.vue'
Vue.use(Router)
export default new Router({
    routes: [{
        path: '/',
        name: 'Index',
        component: Index
    }, {
        path: '/electric',
        name: 'Electric',
        component: Electric
    }, {
        path: '/water',
        name: 'Water',
        component: Water
    }, {
        path: '/monitor',
        name: 'Monitor',
        component: Monitor
    }, {
        path: '/fire_controller',
        name: 'Fire_controller',
        component: Fire_controller
    }, {
        path: '/header',
        name: 'Header',
        component: Header
    }, {
        path: '/aside',
        name: Aside,
        component: Aside
    }, {
        path: '/main',
        name: Main,
        component: Main
    }, {
        path: '/foot',
        name: 'Foot',
        component: Bottom
    }, {
        path: '/right_top',
        name: 'Right_top',
        component: Right_top
    }]
})