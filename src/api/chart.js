import request from '@/utils/request'

export function getLineChart(params) {
  return request({
    url: '/in-soft/chart/lineChart',
    method: 'get',
    params
  })
}
