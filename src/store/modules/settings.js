import defaultSettings from '@/settings'
import { getMenuList } from '@/api/menu'
import { defaultRoutes, asyncRoutes } from '@/router'

const { showSettings, fixedHeader, sidebarLogo } = defaultSettings

function filterAsyncRouter(asyncRoutes, routes) {
  const routerMap = []
  asyncRoutes.forEach((route) => {
    if (route.children && route.children.length) {
      route.children = filterAsyncRouter(route.children, routes)
    }
    routerMap.push(route)
  })
  return routerMap
}

const state = {
  showSettings: showSettings,
  fixedHeader: fixedHeader,
  sidebarLogo: sidebarLogo,
  addRouters: [],
  routers: defaultRoutes
}

const mutations = {
  CHANGE_SETTING: (state, { key, value }) => {
    // eslint-disable-next-line no-prototype-builtins
    if (state.hasOwnProperty(key)) {
      state[key] = value
    }
  },
  GET_MENU_LIST: (state, routers) => {
    state.addRouters = routers
    state.routers = defaultRoutes.concat(routers)
  },
  RESET_MENUS: (state) => {
    state.addRouters = []
    state.routers = []
  }
}

const actions = {
  changeSetting({ commit }, data) {
    commit('CHANGE_SETTING', data)
  },
  resetMenus({ commit }) {
    commit('RESET_MENUS')
  },
  menuList({ commit }, params) {
    return new Promise((resolve, reject) => {
      getMenuList().then((response) => {
        const { data } = response
        const routers = filterAsyncRouter(asyncRoutes, data)
        commit('GET_MENU_LIST', routers)
        resolve(true)
      })
        .catch((error) => {
          reject(error)
        })
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
