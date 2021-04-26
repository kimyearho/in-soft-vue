<template>
  <page-container>
    <v-row>
      <v-col :cols="12">
        <v-card>
          <v-card-title>Preview Line Example</v-card-title>
          <v-card-subtitle>대표적으로 많이 사용되는 차트 예제입니다.
            (Chart.js)</v-card-subtitle>
          <v-card-text class="mt-2">
            <div class="mt-2">
              <strong>
                <span>Source</span> <br>
                <v-divider />
                <div :style="{marginTop: '10px'}">
                  > src/components/Chart/index.vue <br>
                  > src/views/example/chart/index.vue
                </div>
              </strong>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="6">
        <v-card>
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
          <app-bar-chart
            v-if="visible.chart"
            ref="bar"
            :chart-data="chartData"
            :options="chartOptions"
          />
        </v-card>
      </v-col>
      <v-col cols="6">
        <v-card>
          <app-radar-chart
            v-if="visible.chart"
            ref="rader"
            :chart-data="radarChartData"
            :options="chartOptions"
          />
        </v-card>
      </v-col>
      <v-col cols="6">
        <v-card>
          <app-polar-chart
            v-if="visible.chart"
            ref="rader"
            :chart-data="polarChartData"
            :options="chartOptions"
          />
        </v-card>
      </v-col>
    </v-row>
  </page-container>
</template>

<script>
import LineChart from '@/components/Chart/LineChart'
import LineMixin from './mixins/line-mixin'
import BarChart from '@/components/Chart/BarChart'
import RadarChart from '@/components/Chart/RadarChart'
import PolarChart from '@/components/Chart/PolarAreaChart'
// import { mapGetters } from 'vuex'
import { getLineChart, getRadarChart, getPolarChart } from '@/api/chart'

export default {
  name: 'Chart',
  components: {
    appLineChart: LineChart,
    appBarChart: BarChart,
    appRadarChart: RadarChart,
    appPolarChart: PolarChart
  },
  //* LineChart Default Option
  mixins: [LineMixin],
  data: () => ({
    visible: {
      chart: false
    },
    chartData: null,
    radarChartData: null,
    polarChartData: null
  }),
  computed: {
    // ...mapGetters(['darkTheme'])
  },
  // watch: {
  //   darkTheme: {
  //     handler(val) {
  //       if (val) {
  //         this.chartDarkThemeSetting()
  //       } else {
  //         this.chartDefaultThemeSetting()
  //       }
  //     }
  //   }
  // },
  mounted() {
    this.call_lineChart()
    this.call_radarChart()
    this.call_polarChart()
  },
  methods: {
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
    call_polarChart() {
      getPolarChart().then(({ data }) => {
        this.polarChartData = data['data']
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
