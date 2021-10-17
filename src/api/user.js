import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/in-soft/user/login',
    method: 'post',
    data
  })
}

export function googleLogin(data) {
  return request({
    url: '/v1/login',
    method: 'post',
    data
  })
}

export function getInfo(data) {
  return request({
    url: '/v1/users/' + data.user_id,
    method: 'get',
    params: { user_email: data.user_email }
  })
}

export function logout() {
  return request({
    url: '/in-soft/user/logout',
    method: 'post'
  })
}
