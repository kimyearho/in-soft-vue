import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'

//* 모듈
import app from './modules/app'
import settings from './modules/settings'
import user from './modules/user'
import menu from './modules/menu'

Vue.use(Vuex)

const store = new Vuex.Store({
  //* store는 모듈별로 구성하도록 한다.
  // ? https://vuex.vuejs.org/kr/guide/modules.html (vuex module 문서)
  modules: {
    app,
    settings,
    user,
    menu
  },
  getters
})

export default store
