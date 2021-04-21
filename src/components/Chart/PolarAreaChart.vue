<script>
import { PolarArea, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins

export default {
  name: 'PolarAreaChart',
  extends: PolarArea,
  mixins: [reactiveProp],
  props: {
    chartData: {
      type: Object,
      default: null
    },
    options: {
      type: Object,
      default: null
    }
  },
  watch: {
    chartData() {
      this.$data._chart.update()
    }
  },
  mounted() {
    this.renderChart(this.chartData, this.options)
  },
  methods: {
    chartUpdate() {
      this.$data._chart.update()
    }
  }
}
</script>
