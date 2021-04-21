import Vue from 'vue'

import App from './App'
import store from './store'
import router from './router'
import request from './utils/request'
import '@/permission'
import vuetify from './plugins/vuetify'
import VueLogger from 'vuejs-logger'
import lodash from 'lodash'
import moment from 'moment'
import './styles/index.scss'
import '@/assets/icons'

import '../node_modules/ag-grid-community/dist/styles/ag-grid.css'
import '../node_modules/ag-grid-community/dist/styles/ag-theme-alpine.css'
import '../node_modules/ag-grid-community/dist/styles/ag-theme-alpine-dark.css'

//* VueLogger 옵션
//* https://github.com/justinkames/vuejs-logger#readme
const isProduction = process.env.NODE_ENV === 'production'
const options = {
  isEnabled: true,
  logLevel: isProduction ? 'error' : 'info',
  stringifyArguments: false,
  showLogLevel: true,
  showMethodName: true,
  separator: '|',
  showConsoleColors: true
}

//* Logger Global (component level ex this.$log.info(message))
Vue.use(VueLogger, options)
//* Lodash Global (component level ex) this.$lodash.random(20))
Vue.prototype.$lodash = lodash
//* Axios Global (component level ex) this.$axios.get() ...)
Vue.prototype.$axios = request
//* Moment Global
Vue.prototype.$moment = moment

//! <중요>
//! 실제 API 연동이 시작되면 아래 if 스크립트는 모두 삭제 하세요.
//! 그리고 vue.config.js 파일에서 mock 연동을 제거하세요.
//! https://github.com/nuysoft/Mock
if (process.env.NODE_ENV === 'production') {
  const { mockXHR } = require('../mock')
  mockXHR()
}

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  vuetify,
  render: (h) => h(App)
})
