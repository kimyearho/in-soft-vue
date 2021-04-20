<template>
  <div class="form-wrapper">
    <v-container fluid>
      <v-row>
        <v-col :cols="12">
          <v-card>
            <v-card-title>Preview Line Example</v-card-title>
            <v-card-subtitle>Line CHart 예제</v-card-subtitle>
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
            <app-line-chart
              v-if="visible.chart"
              ref="line-chart"
              :chart-data="chartData"
              :options="chartOptions"
            />
          </v-card> </v-col></v-row>
    </v-container>
  </div>
</template>

<script>
import LineChart from '@/components/Chart/LineChart'
import LineMixin from './mixins/line-mixin'
import { mapGetters } from 'vuex'
import { getLineChart } from '@/api/chart'

export default {
  name: 'Chart',
  components: {
    appLineChart: LineChart
  },
  //* LineChart Default Option
  mixins: [LineMixin],
  data: () => ({
    visible: {
      chart: false
    },
    chartData: null
  }),
  computed: {
    ...mapGetters(['darkTheme'])
  },
  watch: {
    darkTheme: {
      handler(val) {
        if (val) {
          this.chartDarkThemeSetting()
        } else {
          this.chartDefaultThemeSetting()
        }
      }
    }
  },
  mounted() {
    this.call_lineChart()
  },
  methods: {
    call_lineChart() {
      getLineChart().then(({ data }) => {
        this.chartData = data['data']
        this.chartOptionSetting()
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
      //* 다크 테마일때
      if (this.darkTheme) {
        this.chartDarkThemeSetting()
      }
      this.visible.chart = true
    },
    chartDarkThemeSetting() {
      this.chartData.datasets[0].borderColor = this.color.line.BLUE_RIGHT
      this.chartData.datasets[0].pointBorderColor = this.color.line.WHITE
      this.chartData.datasets[1].borderColor = this.color.line.RED_RIGHT
      this.chartData.datasets[1].pointBorderColor = this.color.line.BLUE_RIGHT
      this.$refs['line-chart'].chartUpdate()
    },
    chartDefaultThemeSetting() {
      this.chartData.datasets[0].borderColor = this.color.line.DEFAULT
      this.chartData.datasets[0].pointBorderColor = this.color.point.DEFAULT
      this.chartData.datasets[1].borderColor = this.color.line.DEFAULT
      this.chartData.datasets[1].pointBorderColor = this.color.point.DEFAULT
      this.$refs['line-chart'].chartUpdate()
    }
  }
}
</script>
