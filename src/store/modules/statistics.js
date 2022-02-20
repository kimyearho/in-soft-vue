import { connect } from '@/api/statistics'

const getDefaultState = () => {
  return {
    websocket: null,
    oldWebsocket: null,
    socketStatus: 'disconnected'
  }
}

const state = getDefaultState()

const mutations = {
  SET_WEBSOCKET: (state, websocket) => {
    state.websocket = websocket
  },
  SET_SOCKET_STATE: (state, status) => {
    state.socketStatus = status
  },
  SET_BEFORE_WEBSOCKET: (state, websocket) => {
    state.oldWebsocket = websocket
  }
}

const actions = {
  connectStart({ commit }, data) {
    const websocket = connect(data)
    websocket.onopen = () => {
      console.log('statistics websocket connection success')
      commit('SET_SOCKET_STATE', 'connected')

      // this.socket.send("{ 'text': 'test' }")
      websocket.onmessage = ({ data }) => {
        data = JSON.parse(data)
        console.log(data)
      }
    }
    websocket.close = () => {
      console.log('statistics websocket disconnected')
      commit('SET_SOCKET_STATE', 'disconnected')
      commit('SET_BEFORE_WEBSOCKET', state.websocket)
      commit('SET_WEBSOCKET', null)
    }
    commit('SET_WEBSOCKET', websocket)
  },
  sendMessage({ commit, state }, message) {
    if (!('message' in message)) {
      return
    }
    state.websocket.send(JSON.stringify(message))
    console.log(message)
  },
  websocketHealthCheck({ state }) {
    if (!state.websocket) {
      this.connectStart
    }
  }

}

export default {
  namespaced: true, // ? 네임스페이스를 사용할지 여부를 정한다.
  state,
  mutations,
  actions
}
