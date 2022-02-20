<template>
  <v-container height="80%">
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
              :type="type"
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
import { getDraws, getCustomDraws } from '@/api/tweet'
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
      default: null
    },
    colNumber: {
      type: Number,
      default: 3
    },
    rowNumber: { // observer 객체로 인식됨
      type: Number,
      default: 4
    },
    isCustom: {
      type: Boolean,
      dafault: false
    },
    hashTag: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      drawsData: [],
      drawPage: 1,
      maxDrawPage: 50,
      type: 'base'
    }
  },
  computed: {
    ...mapGetters(['locale']),
    getDraw: {
      get() {
        return this.drawsData
      },
      set(value) {
        const $that = this
        let drawParams = null
        const draws = this.drawsData

        if (this.isCustom) {
          drawParams = { 'hashtags': this.hashTag }
          getCustomDraws(drawParams).then((draw_res) => {
            draws.splice(0, draws.length)
            draw_res.data.second_draws.forEach((item) => {
              const data = { 'twitter_id': item.holo_member_tweet_id, 'created': item.created, 'index': item.index, 'type': 'second', 'url': item.media_link, twitter_user_id: '', twitter_user_nm: '' }
              draws.push(data)
            })

            draw_res.data.third_draws.forEach((item) => {
              item.type = 'third'
              draws.push(item)
            })
            $that.maxDrawPage = Math.round(draws.length / $that.rowNumber / $that.colNumber)
            $that.drawPage = 1
          })
        } else {
          drawParams = { 'type': this.drawType, 'member_id': this.memberId }
          getDraws(drawParams).then((draw_res) => {
            draws.splice(0, draws.length)
            draw_res.data.draw_list.forEach((item) => {
              draws.push(item)
            })
            $that.maxDrawPage = Math.round(draws.length / $that.rowNumber / $that.colNumber)
            $that.drawPage = 1
          })
        }
      }
    },
    getMaxDrawPage() {
      return this.maxDrawPage
    }
  },
  watch: {
    memberId: function(value) {
      this.getDraw = value
    },
    hashTag: function(value) {
      this.getDraw = value
    }
  },
  beforeMount() {
    this.$i18n.locale = this.locale
  },
  mounted() {
    if (this.isCustom) {
      if (this.hashtag) {
        this.getDraw = this.hashtag
      }
    } else {
      this.getDraw = this.memberId
    }
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
      const draw = draws[index + ((row - 1) * this.colNumber) + col - 1]
      return draw
    }
  }
}
</script>
