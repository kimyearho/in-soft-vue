'user strict'

export default {
  methods: {
    /**
     * Vuex Dispatch Helper
     *
     * @param {*}
     * @returns
     */
    dispatch({ action, params, loaderName }) {
      // //* 공통 로딩
      if (loaderName) this[`${loaderName}`] = true
      return this.$store.dispatch(action, params)
    }
  }
}
