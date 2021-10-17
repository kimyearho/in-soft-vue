import { login, logout, getInfo, googleLogin } from '@/api/user'
import { getToken, setToken, removeToken } from '@/utils/auth'
import { resetRouter } from '@/router'

const getDefaultState = () => {
  return {
    token: getToken(),
    name: '',
    avatar: '',
    email: '',
    roles: []
  }
}

const state = getDefaultState()

const mutations = {
  RESET_STATE: (state) => {
    Object.assign(state, getDefaultState())
  },
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles
  },
  SET_EMAIL: (state, email) => {
    state.email = email
  }
}

const actions = {
  // user login
  userLogin({ commit }, userInfo) {
    const { username, password } = userInfo
    return new Promise((resolve, reject) => {
      login({ username: username.trim(), password: password })
        .then((response) => {
          const { data } = response
          commit('SET_TOKEN', data.token)
          setToken(data.token)
          resolve()
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  googleUserLogin({ commit, state }, data) {
    return new Promise((resolve, reject) => {
      const userInfo = data.userInfo

      googleLogin(data).then((response) => {
        const { data, meta } = response
        console.log('googleUserLogin data')
        console.log(data)
        console.log(meta)

        if (!data || !meta) {
          return reject('Verification failed, please Login again.')
        }

        if (meta.code < 200 && meta.code >= 300) {
          return reject(meta.message)
        }
        commit('SET_NAME', userInfo.userId)
        commit('SET_AVATAR', userInfo.picture)
        commit('SET_ROLES', 'user')
        commit('SET_EMAIL', userInfo.userEmail)
        commit('SET_TOKEN', userInfo.accessToken)
        resolve(data)
      })
    })
  },
  // get user info
  getInfo({ commit, state }, data) {
    return new Promise((resolve, reject) => {
      getInfo(data.user)
        .then((response) => {
          const { data } = response

          if (!data) {
            return reject('Verification failed, please Login again.')
          }
          const { username, avatar, email } = data

          commit('SET_NAME', username)
          commit('SET_AVATAR', avatar)
          commit('SET_ROLES', 'user')
          commit('SET_EMAIL', email)
          resolve(data)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },

  // user logout
  logout({ commit, state }, { vm }) {
    return new Promise((resolve, reject) => {
      logout(state.token)
        .then(() => {
          removeToken() // must remove  token  first
          resetRouter()
          commit('SET_ROLES', [])
          commit('RESET_STATE')
          commit('settings/CHANGE_SETTING', {
            key: 'themeDark', value: false
          }, { root: true })
          commit('settings/CHANGE_SETTING', {
            key: 'locale', value: 'ko'
          }, { root: true })
          vm.$vuetify.theme.dark = false
          resolve(true)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },

  // remove token
  resetToken({ commit }) {
    return new Promise((resolve) => {
      removeToken() // must remove  token  first
      commit('SET_ROLES', [])
      commit('RESET_STATE')
      resolve()
    })
  }
}

export default {
  namespaced: true, // ? 네임스페이스를 사용할지 여부를 정한다.
  state,
  mutations,
  actions
}
