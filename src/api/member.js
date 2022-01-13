import request from '@/utils/request'

export function getMember(data) {
  return request({
    url: '/v1/member/list',
    method: 'get'
  })
}

export function getMemberChannel(data) {
  return request({
    url: '/v1/member/youtube/channel/list',
    method: 'get',
    params: { user_id: data.user_id }
  })
}

export function getMemeberTags(data) {
  return request({
    url: '/v1/member/tags',
    method: 'get',
    params: { member_id: data.member_id, index: data.index }
  })
}

export function getMemeberTweets(data) {
  return request({
    url: '/v1/member/tweets',
    method: 'get',
    params: { member_id: data.member_id, index: data.index }
  })
}
