<template>
  <v-carousel
    width="100%"
    height="100%"
  >
    <v-carousel-item
      v-for="(item,i) in getDraw"
      :key="i"
      width="100%"
      height="100%"
      :src="item.url"
      reverse-transition="fade-transition"
      transition="fade-transition"
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
  }
}
</script>
