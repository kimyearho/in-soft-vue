import request from '@/utils/request'

export function getDraws(data) {
  return request({
    url: '/v1/tweet/draws',
    method: 'get',
    params: { 'member_id': data.member_id, 'type': data.type }
  })
}
