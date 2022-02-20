<template>
  <v-card>
    <v-card>
      <v-card-actions>
        <v-card-title v-text="artType+' art'" />
        <v-spacer />
        <v-btn
          @click="leftScroll()"
        >
          Left
        </v-btn>
        <v-btn
          v-show="getscrollStart"
          @click="stopScroll()"
        >
          Stop
        </v-btn>
        <v-btn
          v-show="!getscrollStart"
          @click="startScroll()"
        >
          Start
        </v-btn>
        <v-btn
          @click="rightScroll()"
        >
          Right
        </v-btn>
        <v-spacer />
      </v-card-actions>
    </v-card>
    <HoloArtCard
      min-width="400px"
      min-height="400px"
      :draw="getFanart()"
    />
  </v-card>
</template>

<script>
import { getDrawsLives } from '@/api/tweet'
import HoloArtCard from '@/layout/components/unit/subunit/HoloArtCard.vue'

export default {
  name: 'DrawCard',
  components: {
    HoloArtCard
  },
  props: {
    maxcount: {
      type: Number,
      default: 60 * 60 // 1 hour
    },
    speed: { // next scroll time ( speed * 1 sec )
      type: Number,
      default: 8
    },
    artType: { // random  or  recommend
      type: String,
      default: 'random'
    },
    tagType: {
      type: String,
      default() {
        return 'fanart' // 'fanart,stream,etc....'
      }
    }
  },
  data() {
    return {
      artList: [],
      count: 0,
      scrollStart: true,
      baseUrl: 'https://pbs.twimg.com/media/FKU3L1TakAEl2gB',
      timer: null,
      fanartItem: {}
    }
  },
  computed: {
    getscrollStart: {
      get() {
        return this.scrollStart
      },
      set(value) {
        if (value) {
          this.scrollStart = value
          this.setTimer()
        } else {
          this.scrollStart = value
          clearTimeout(this.timer)
        }
      }
    }
  },
  watch: {
    count() {
      this.fanartItem = this.artList[this.count]
    }
  },
  beforeMount() {
    this.$i18n.locale = this.locale
    this.refreshFanart()
  },
  beforeDestroy() {
    clearTimeout(this.timer)
  },
  methods: {
    setTimer() {
      const $that = this
      $that.timer = setInterval(() => {
        if ($that.maxcount > $that.count) {
          $that.count = $that.count + 1
        } else {
          clearTimeout($that.timer)
          $that.count = 0
          $that.setTimer()
        }
      }, $that.speed * 1000)
    },
    refreshFanart() {
      const $that = this
      const params = { 'type': this.artType, 'tagType': this.tagType }
      getDrawsLives(params).then(({ data }) => {
        $that.artList = data.tweet_list
        $that.setTimer()
      })
    },
    getFanart() {
      return this.fanartItem
    },
    stopScroll() {
      this.getscrollStart = false
    },
    startScroll() {
      this.getscrollStart = true
    },
    rightScroll() {
      this.getscrollStart = false
      if (this.maxcount > this.count) {
        this.count += 1
      }
    },
    leftScroll() {
      this.getscrollStart = false
      if (this.count > 0) {
        this.count -= 1
      }
    }
  }
}
</script>
