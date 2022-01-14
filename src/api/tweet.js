import request from '@/utils/request'

export function getDraws(data) {
  return request({
    url: '/v1/tweet/draws',
    method: 'get',
    params: { 'member_id': data.member_id, 'type': data.type }
  })
}

export function getCustomDraws(data) {
  return request({
    url: '/v1/tweet/custom/draws',
    method: 'get',
    params: { 'hashtags': data.hashtags }
  })
}

export function getCustomTags(data) {
  return request({
    url: '/v1/tweet/custom/tags',
    method: 'get',
    params: {}
  })
}
