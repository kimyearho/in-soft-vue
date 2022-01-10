import request from '@/utils/request'

export function getMember(data) {
  return request({
    url: '/v1/member/youtube/collection',
    method: 'get'
  })
}

export function getMemberChannel(data) {
  return request({
    url: '/v1/member/youtube/collection',
    method: 'get',
    params: { user_id: data.user_id }
  })
}
