import request from '@/utils/request'

export function getLineChart(params) {
  return request({
    url: '/in-soft/chart/lineChart',
    method: 'get',
    params
  })
}
export function getRadarChart(params) {
  return request({
    url: '/in-soft/chart/radarChart',
    method: 'get',
    params
  })
}
export function getPolarChart(params) {
  return request({
    url: '/in-soft/chart/polarChart',
    method: 'get',
    params
  })
}
