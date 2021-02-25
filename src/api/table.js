import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/in-soft/table/list',
    method: 'get',
    params
  })
}
