import request from '@/utils/request'

export function getMenuList(params) {
  return request({
    url: '/v1/menu/list',
    method: 'get',
    params
  })
}
