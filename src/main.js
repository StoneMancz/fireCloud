// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import axios from 'axios'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/styles/basic.css'
import './assets/styles/iconfont.css'
import VueAMap from 'vue-amap';
// 引入echarts
import echarts from 'echarts'
import store from './store'
Vue.prototype.$echarts = echarts
Vue.prototype.$http = axios
Vue.use(VueAMap);
Vue.config.productionTip = false
Vue.use(ElementUI)
//初始化高德地图
VueAMap.initAMapApiLoader({
    key: 'd131f815357afc30295997020bd15940',
    plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
    // 默认高德 sdk 版本为 1.4.4
    v: '1.4.4'
});
//路由守卫
router.beforeEach((to, from, next) => {
    //无论是刷新还是路由跳转，第一个进入的就是这个路由前置钩子
    if (to.meta.requireAuth) {
        if (store.state.token) {
            next();
        } else {
            next({
                path: '/',
                query: {
                    redirect: to.fullPath
                }
            })
        }
    } else {
        next();
    }
})
new Vue({
    el: '#app',
    router,
    store,
    components: {
        App
    },
    template: '<App/>'
})