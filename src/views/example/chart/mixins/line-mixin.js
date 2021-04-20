export default {
  data: () => ({
    color: {
      gridLine: {
        DEFAULT: '#616161'
      },
      line: {
        DEFAULT: '#E0E0E0',
        WHITE: '#FFFFFF',
        BLUE_RIGHT: '#4FC3F7',
        RED_RIGHT: '#E53935'
      },
      point: {
        DEFAULT: '#424242'
      }
    },
    chartOptions: {
      responsive: true,
      elements: {
        line: {
          tension: 0
        }
      },
      title: {
        display: false
      },
      tooltips: {
      },
      hover: {
        mode: 'nearest',
        intersect: false
      },
      scales: {
        xAxes: [
          {
            display: true,
            scaleLabel: {
              display: true
            },
            gridLines: {
              color: 'rgba(0,0,0,0.1)'
            },
            ticks: {
              fontColor: '#999',
              autoSkip: true
            }
          }
        ],
        yAxes: [
          {
            display: true,
            ticks: {
              fontColor: '#999'
              // min: 0,
              // beginAtZero: true
            },
            scaleLabel: {
              display: true
            },
            gridLines: {
              color: 'rgba(0,0,0,0.1)'
            }
          }
        ]
      },
      legend: {
        display: true,
        align: 'end',
        labels: {
          boxWidth: 10,
          fontColor: '#999',
          padding: 20
        }
      },
      maintainAspectRatio: false
    }
  })
}
