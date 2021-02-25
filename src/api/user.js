import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/in-soft/user/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/in-soft/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/in-soft/user/logout',
    method: 'post'
  })
}
