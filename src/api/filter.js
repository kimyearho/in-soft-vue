import request from '@/utils/request'

export function getUserGroupList(params) {
  return request({
    url: '/in-soft/group/userGroupList',
    method: 'get',
    params
  })
}

export function getPeriodList(params) {
  return request({
    url: '/in-soft/group/periodList',
    method: 'get',
    params
  })
}

