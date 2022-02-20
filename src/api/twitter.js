import request from '@/utils/request'

export function getTwitters() {
  return request({
    url: '/v1/twitter',
    method: 'get'
  })
}
