<template>
  <div>
    <search-filter :is-description-use="false" />
    <page-container>
      <v-row>
        <v-col cols="6">
          <v-card>
            <v-card-title>Line Chart</v-card-title>
            <v-card-subtitle>
              <small>Copyright © INSOFT. All rights Reserved.</small>
            </v-card-subtitle>
            <app-line-chart
              v-if="visible.chart"
              ref="line"
              :chart-data="chartData"
              :options="chartOptions"
            />
          </v-card>
        </v-col>
        <v-col cols="6">
          <v-card>
            <v-card-title>Radar Chart</v-card-title>
            <v-card-subtitle>
              <small>Copyright © INSOFT. All rights Reserved.</small>
            </v-card-subtitle>
            <app-radar-chart
              v-if="visible.chart"
              ref="rader"
              :chart-data="radarChartData"
              :options="chartOptions"
            />
          </v-card>
        </v-col>
        <v-col>
          <ag-grid-table />
        </v-col>
      </v-row>
    </page-container>
  </div>
</template>

<script>
import { getList } from '@/api/table'
import LineChart from '@/components/Chart/LineChart'
import RadarChart from '@/components/Chart/RadarChart'
import SearchFilter from '@/views/example/searchFilter/index'
import AgGridTable from '@/views/table/AgGrid'
import { getLineChart, getRadarChart } from '@/api/chart'
import LineMixin from '@/views/example/chart/mixins/line-mixin'

export default {
  name: 'Dashboard',
  components: {
    SearchFilter,
    AgGridTable,
    appLineChart: LineChart,
    appRadarChart: RadarChart
  },
  mixins: [LineMixin],
  data() {
    return {
      colHeight: '110px',
      headers: [
        {
          text: 'ID',
          value: 'id'
        },
        {
          text: 'Title',
          value: 'title'
        },
        {
          text: 'Name',
          value: 'author'
        },
        {
          text: 'Date',
          value: 'display_time'
        },
        {
          text: 'Nums',
          value: 'pageviews'
        }
      ],
      visible: {
        chart: false
      },
      rowItems: [],
      chartData: null,
      radarChartData: null
    }
  },
  mounted() {
    getList().then(({ data }) => {
      if (data.total > 0) {
        this.rowItems = data.items
      }
    })
    this.call_lineChart()
    this.call_radarChart()
  },
  methods: {
    dynamicHeight(is) {
      if (is) {
        this.colHeight = '220px'
      } else {
        this.colHeight = '110px'
      }
    },
    call_lineChart() {
      getLineChart().then(({ data }) => {
        this.chartData = data['data']
        this.chartOptionSetting()
      })
    },
    call_radarChart() {
      getRadarChart().then(({ data }) => {
        this.radarChartData = data['data']
      })
    },
    chartOptionSetting() {
      this.chartOptions.tooltips = {
        intersect: true,
        external: function(tooltipModel) {
          const datasets = this.chartData.datasets
          if (undefined !== tooltipModel.body) {
            const lastLabel = datasets[datasets.length - 1].label

            if (lastLabel.indexOf('  |  ') !== -1) {
              const rp = '  |  ' + lastLabel.split('  |  ')[1]
              const tt = tooltipModel.body[0].lines[0]
              tooltipModel.body[0].lines[0] = tt.replace(rp, '')
            }
          }
        }
      }
      this.visible.chart = true
    }
  }
}
</script>

<style scoped>
.dashboard-container {
  width: 100%;
}
</style>
