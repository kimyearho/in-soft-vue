import Cookies from 'js-cookie'
import { v1, v3, v4, v5 } from 'uuid'

const TokenKey = 'vue-insoft'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

export function CREATE_UUID(version) {
  switch (version) {
    case 'v1':
      return v1()
    case 'v3':
      return v3()
    case 'v4':
      return v4()
    case 'v5':
      return v5()
  }
}
