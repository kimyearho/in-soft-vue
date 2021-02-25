import request from '@/utils/request'

export function getMenuList(params) {
  return request({
    url: '/in-soft/menu/list',
    method: 'get',
    params
  })
}
