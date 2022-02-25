import request from '@/utils/request'

export function getTwitterInfoList(data) {
  return request({
    url: '/v1/tweet/detail',
    method: 'get',
    params: { 'member_id': data.member_id }
  })
}

export function getTwitterIdsByTags(data) {
  return request({
    url: '/v1/tweet/ids',
    method: 'get',
    params: { 'hashtag': data.hashtag, 'tagtype': data.tagtype }
  })
}

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
    params: { member_id: data.member_id }
  })
}

export function getDrawsLives(data) {
  return request({
    url: '/v1/tweet/draws/live',
    method: 'get',
    params: { type: data.type, tagType: data.tagType }
  })
}
