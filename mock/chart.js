const chartData = {
  'data': {
    'labels': [
      '13:34:44',
      '13:35:44',
      '13:36:44',
      '13:37:44',
      '13:38:44',
      '13:39:44',
      '13:40:44',
      '13:41:44',
      '13:42:44',
      '13:43:44',
      '13:44:44',
      '13:45:44',
      '13:46:44',
      '13:47:44',
      '13:48:44',
      '13:49:44',
      '13:50:44',
      '13:51:44',
      '13:52:44',
      '13:53:44',
      '13:54:44',
      '13:55:44',
      '13:56:44',
      '13:57:44',
      '13:58:44',
      '13:59:44',
      '14:00:44',
      '14:01:44',
      '14:02:44',
      '14:03:44'
    ],
    'datasets': [
      {
        'label': 'Host Network Rx',
        'data': [
          9.939,
          8.689,
          8.291,
          8.766,
          7.716,
          8.346,
          7.809,
          8.216,
          8.266,
          8.679,
          7.918,
          8.402,
          8.005,
          8.987,
          8.158,
          8.218,
          8.532,
          9.066,
          8.462,
          8.428,
          8.614,
          8.226,
          9.081,
          8.812,
          9.209,
          8.939,
          10.663,
          8.533,
          8.672,
          10.833
        ],
        fill: true,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgb(255, 99, 132)',
        pointBackgroundColor: 'rgb(255, 99, 132)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(255, 99, 132)'
      },
      {
        'label': 'Host Network Tx',
        'data': [
          4.303,
          3.724,
          3.346,
          3.675,
          3.083,
          3.556,
          2.948,
          3.281,
          3.58,
          3.723,
          4.31,
          4.637,
          3.456,
          4.237,
          3.528,
          3.974,
          3.605,
          3.927,
          3.33,
          3.388,
          3.337,
          3.304,
          3.116,
          3.079,
          3.676,
          3.505,
          4.697,
          3.826,
          3.653,
          4.644
        ],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgb(54, 162, 235)',
        pointBackgroundColor: 'rgb(54, 162, 235)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(54, 162, 235)'
      }
    ]
  }
}

const radarChartData = {
  'data': {
    labels: [
      'Eating',
      'Drinking',
      'Sleeping',
      'Designing',
      'Coding',
      'Cycling',
      'Running'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [65, 59, 90, 81, 56, 55, 40],
      fill: true,
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgb(255, 99, 132)',
      pointBackgroundColor: 'rgb(255, 99, 132)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(255, 99, 132)'
    }, {
      label: 'My Second Dataset',
      data: [28, 48, 40, 19, 96, 27, 100],
      fill: true,
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgb(54, 162, 235)',
      pointBackgroundColor: 'rgb(54, 162, 235)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(54, 162, 235)'
    }]
  }
}

const polarChartData = {
  'data': {
    labels: [
      'Red',
      'Green',
      'Yellow',
      'Grey',
      'Blue'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [11, 16, 7, 3, 14],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(75, 192, 192)',
        'rgb(255, 205, 86)',
        'rgb(201, 203, 207)',
        'rgb(54, 162, 235)'
      ]
    }]
  }
}

module.exports = [
  {
    url: '/in-soft/chart/lineChart',
    type: 'get',
    response: config => {
      return {
        code: 20000,
        data: chartData
      }
    }
  },
  {
    url: '/in-soft/chart/radarChart',
    type: 'get',
    response: config => {
      return {
        code: 20000,
        data: radarChartData
      }
    }
  },
  {
    url: '/in-soft/chart/polarChart',
    type: 'get',
    response: config => {
      return {
        code: 20000,
        data: polarChartData
      }
    }
  }
]
