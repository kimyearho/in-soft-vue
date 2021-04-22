import defaultSettings from '@/settings'

const {
  showSettings,
  fixedHeader,
  fixedBreadCrumb,
  sidebarLogo,
  sidebarClipped,
  horizontalMenu,
  themeDark,
  themeSemiDark
} = defaultSettings

const state = {
  showSettings: showSettings,
  fixedHeader: fixedHeader,
  fixedBreadCrumb: fixedBreadCrumb,
  sidebarLogo: sidebarLogo,
  sidebarClipped: sidebarClipped,
  horizontal: horizontalMenu,
  themeDark: themeDark,
  themeSemiDark: themeSemiDark
}

const mutations = {
  CHANGE_SETTING: (state, { key, value }) => {
    // eslint-disable-next-line no-prototype-builtins
    if (state.hasOwnProperty(key)) {
      state[key] = value
    }
  }
}

const actions = {
  changeSetting({ commit }, data) {
    commit('CHANGE_SETTING', data)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
