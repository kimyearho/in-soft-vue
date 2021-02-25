import Vue from 'vue'

import App from './App'
import store from './store'
import router from './router'
import '@/icons'
import '@/permission'
import vuetify from './plugins/vuetify'
import VueLogger from 'vuejs-logger'

// VueLogger 옵션
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

// 사용법 문서 참고 https://github.com/justinkames/vuejs-logger#readme
Vue.use(VueLogger, options)

//! <중요>
//! 실제 API 연동이 시작되면 아래 if 스크립트는 모두 삭제 하세요.
//! 그리고 vue.config.js 파일에서 mock 연동을 제거하세요.
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
