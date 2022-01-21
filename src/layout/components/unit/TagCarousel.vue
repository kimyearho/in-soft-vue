<template>
  <v-carousel
    :width="getDrawWidth"
    :height="getDrawHeight"
  >
    <v-carousel-item
      v-for="(item,i) in getDraw"
      :key="i"
      :src="item.url"
      reverse-transition="fade-transition"
      transition="fade-transition"
      :href="item.url"
      target="_blank"
    />
  </v-carousel>
</template>
<script>
import {
// SET_LOCAL_ITEM,
// GET_LOCAL_ITEM,
// REMOVE_LOCAL_ITEM
} from '@/utils/local-storage'

//! Helper는 Global Mixin으로 만들지 고민필요
import StoreHelper from '@/utils/store-helper'
import { mapGetters } from 'vuex'
import { getDraws } from '@/api/tweet'

export default {
  name: 'TagCarousel',
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
    drawWidth: {
      type: Number,
      default: 1200
    },
    drawHeight: {
      type: Number,
      default: 960
    }

  },
  data() {
    return {
      drawsData: []
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
        getDraws(drawParams).then((draw_res) => {
          draws.splice(0, draws.length)
          draw_res.data.draw_list.forEach((item) => {
            draws.push(item)
          })
        })
      }
    },
    getDrawWidth: {
      get() {
        return this.drawWidth
      }
    },
    getDrawHeight: {
      get() {
        return this.drawHeight
      }
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
    this.drawWidth = document.body.clientWidth * 0.8
    this.drawHeight = document.body.clientHeight * 0.8

    this.getDraw = this.memberId
  },
  methods: {
  }
}
</script>
