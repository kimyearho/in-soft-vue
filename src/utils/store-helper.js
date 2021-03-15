'user strict'

export default {
  methods: {
    /**
     * Vuex Dispatch Helper
     *
     * @param {*}
     * @returns
     */
    mixin_dispatch({ action, params, loaderName }) {
      //* 공통 로딩 (없으면 사용하지 않는다)
      if (!this.$lodash.isEmpty(loaderName)) this[loaderName] = true
      return this.$store.dispatch(action, params)
    }
  }
}
