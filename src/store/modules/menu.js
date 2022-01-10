import { getMenuList } from '@/api/menu'
import { defaultRoutes, asyncRoutes } from '@/router'

function filterAsyncRouter(asyncRoutes, routes) {
  const routerMap = []
  asyncRoutes.forEach((route) => {
    if (route.children && route.children.length) {
      route.children = filterAsyncRouter(route.children, routes)
    }
    if (route.meta) {
      const menu_id = route.meta.menu_id
      // if (!route.meta.title) {
      route.meta.title = routes.find((item) => item.menu_id === menu_id).menu_name
      // }
    }
    route.active = false
    routerMap.push(route)
  })
  return routerMap
}

const state = {
  addRouters: [],
  routers: defaultRoutes
}

const mutations = {
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
  resetMenus({ commit }) {
    commit('RESET_MENUS')
  },
  menuList({ commit, rootGetters }, params) {
    const locale = rootGetters.locale
    return new Promise((resolve, reject) => {
      getMenuList({ locale: locale })
        .then((response) => {
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
