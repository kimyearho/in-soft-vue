<template>
  <v-container height="80%">
    <v-container>
      <v-card />
    </v-container>
    <v-container>
      <v-row
        v-for="i in rowNumber"
        :key="i"
      >
        <template>
          <v-col
            v-for="(item) in colNumber"
            :key="item"
          >
            <HoloArtCard
              :draw="selectDraw([i,item])"
            />
          </v-col>
        </template>
      </v-row>
    </v-container>
    <v-container>
      <v-pagination
        v-model="drawPage"
        :length="getMaxDrawPage"
      />
    </v-container>
  </v-container>
</template>
<script>
//! Helper는 Global Mixin으로 만들지 고민필요
import StoreHelper from '@/utils/store-helper'
import { mapGetters } from 'vuex'
import { getDraws } from '@/api/tweet'
import HoloArtCard from '@/layout/components/unit/subunit/HoloArtCard.vue'

export default {
  name: 'TagCarousel',
  components: {
    HoloArtCard
  },
  mixins: [StoreHelper],
  props: {
    drawType: {
      type: String,
      default: 'fanart'
    },
    memberId: {
      type: Number,
      default: 1
    },
    colNumber: {
      type: Number,
      default: 3
    },
    rowNumber: { // observer 객체로 인식됨
      type: Number,
      default: 4
    }

  },
  data() {
    return {
      drawsData: [],
      drawPage: 1,
      maxDrawPage: 50
    }
  },
  computed: {
    ...mapGetters(['locale']),
    getDraw: {
      get() {
        return this.drawsData
      },
      set(value) {
        const drawParams = { 'type': this.drawType, 'member_id': this.memberId }
        const draws = this.drawsData
        const $that = this
        getDraws(drawParams).then((draw_res) => {
          draws.splice(0, draws.length)
          draw_res.data.draw_list.forEach((item) => {
            draws.push(item)
          })
          $that.maxDrawPage = draws.length / $that.rowNumber / $that.colNumber + 1
        })
      }
    },
    getMaxDrawPage() {
      return 50
    }
  },
  watch: {
    memberId: function(value) {
      this.getDraw = value
    }
  },
  beforeMount() {
    this.$i18n.locale = this.locale
  },
  mounted() {
    this.getDraw = this.memberId
  },
  methods: {
    selectDraw(value) {
      const draws = this.getDraw
      const row = value[0]
      const col = value[1]
      if (draws.length < 1) {
        return { 'type': 'temp' }
      }

      const index = (this.drawPage - 1) * (this.colNumber * this.rowNumber)
      const draw = draws[index + (row * this.colNumber - 1) * col - 1]
      return draw
    }
  }
}
</script>
