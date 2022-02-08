<template>
  <v-card>
    <template>
      <div class="text-center">
        <v-dialog
          v-model="dialog"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-card
              :style="fanartStyle('30vmin')"
              v-bind="attrs"
              v-on="on"
            />
          </template>

          <v-card>
            <v-card-title class="text-h5 grey lighten-2">
              Lage Image
            </v-card-title>

            <v-card
              :style="fanartStyle('80vmin')"
            />

            <v-divider />

            <v-card-actions>
              <v-spacer />
              <v-btn
                color="primary"
                text
                @click="imageDownLoad()"
              >
                ImageDownLoad
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>
    </template>
    <v-card-subtitle style="text-align:center">
      <v-card-text class="pa-0">
        <a
          :href="'https://twitter.com/moonahoshinova/status/'+draw.twitter_id"
          target="_blank"
        >go to tweet</a>
      </v-card-text>
      <v-card-text
        class="pa-0"
        v-text="draw.twitter_user_nm"
      />
      <v-card-text
        class="pa-0"
        v-text="getTime(draw.created)"
      />
    </v-card-subtitle>
  </v-card>
</template>
<script>
//! Helper는 Global Mixin으로 만들지 고민필요
import StoreHelper from '@/utils/store-helper'
import { mapGetters } from 'vuex'

export default {
  name: 'TagCarousel',
  mixins: [StoreHelper],
  props: {
    draw: {
      type: Object,
      default() {
        return {
          'type': 'temp',
          'created': 1641458008,
          'url': 'http://pbs.twimg.com/media/FIZ-ACwUUAEONeG.jpg',
          'modified': 1641458008,
          'twitter_id': '1479008176125087750',
          'twitter_user_nm': 'RestyMMD',
          'isDelete': 'N',
          'isUse': 'Y',
          'twitter_user_id': '2703615866',
          'tag_type': 'image',
          'tag_datatype': 'image',
          'hashtag': '#soraArt',
          'member_id': 1,
          'memtag_type': 'fanart',
          'memtag_datatype': 'init'
        }
      }
    }
  },
  data() {
    return {
      dialog: false
    }
  },
  computed: {
    ...mapGetters(['locale']),
    getDraw: {
      get() {
        return this.draw
      }
    }
  },
  beforeMount() {
    this.$i18n.locale = this.locale
  },

  methods: {
    getTime(value) {
      return new Date(value)
    },
    fanartStyle(heightSize) {
      const draw = this.getDraw
      if ('type' in draw && draw.type === 'temp') {
        return {}
      }

      return { backgroundImage: 'url(' + draw.url + '?format=jpg)', backgroundSize: 'contain', backgroundPosition: 'center', height: heightSize }
    },
    imageDownLoad() {

    }
  }
}
</script>
