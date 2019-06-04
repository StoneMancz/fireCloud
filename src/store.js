import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
let store = new Vuex.Store({
  state: {
    token: '',
    api: 'https://www.easy-mock.com/mock/5ceb8c01139fb578b06086e6/iot'
  },
  mutations: {
    settoken(state, token) {
      state.token = token
    }
  },
  actions: {

  },
  getters: {
    api: state => {
      return state.api;
    }
  }
})
export default store