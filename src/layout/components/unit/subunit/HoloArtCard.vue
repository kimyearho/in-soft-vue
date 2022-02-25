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
              :style="fanartStyle('70vmin')"
              @contextmenu.prevent
            />
            <v-card-subtitle style="text-align:center">
              <a
                :href="'https://twitter.com/moonahoshinova/status/'+draw.twitter_id"
                target="_blank"
              >go to tweet</a>
              <v-card-text
                class="pa-0"
                v-text="draw.twitter_user_nm"
              />
              <v-card-text
                class="pa-0"
                v-text="getTime(draw.created)"
              />
            </v-card-subtitle>
            <v-divider />

            <v-card-actions>
              <v-spacer />
              <v-btn
                color="primary"
                text
                @click="imageDownLoad()"
              >
                Download
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>
    </template>
    <v-card-subtitle style="text-align:center">
      <v-card-text
        v-if="draw.twitter_id"
        class="pa-0"
      >
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
import {
  GET_LOCAL_ITEM
} from '@/utils/local-storage'

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
    },
    type: {
      type: String,
      default: 'base'
    }
  },
  data() {
    return {
      dialog: false,
      lodingImg: 'http://pbs.twimg.com/media/FIZ-ACwUUAEONeG.jpg'
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
  watch: {
    dialog() {
      if (this.dialog && this.getDraw.twitter_id) {
        this.$store.dispatch('statistics/sendMessage', { 'message': 'click', 'user': GET_LOCAL_ITEM('user_index'), 'type': this.type, 'data': this.draw })
      }
    }
  },
  beforeMount() {
    this.$i18n.locale = this.locale
  },

  methods: {
    getTime(value) {
      if (value) {
        return new Date(value * 1000).toLocaleString()
      } else {
        return ''
      }
    },
    fanartStyle(heightSize) {
      const draw = this.getDraw
      if ('type' in draw && draw.type === 'temp') {
        return {}
      }

      return { backgroundImage: 'url(' + draw.url + '?format=jpg), url(' + this.lodingImg + ')', backgroundSize: 'contain', backgroundPosition: 'center', height: heightSize }
    },
    imageDownLoad() {
      // this.$refs.download.click()
      downloadImg(this.draw.url)
      this.$store.dispatch('statistics/sendMessage', { 'message': 'download', 'user': GET_LOCAL_ITEM('user_index'), 'type': this.type, 'data': this.draw })

      function dataURLtoBlob(dataurl) {
        var arr = dataurl.split(',')
        var mime = arr[0].match(/:(.*?);/)[1]
        var bstr = atob(arr[1])
        var n = bstr.length
        var u8arr = new Uint8Array(n)
        while (n--) {
          u8arr[n] = bstr.charCodeAt(n)
        }
        return new Blob([u8arr], {
          type: mime
        })
      }

      function downloadImg(imgSrc) {
        var image = new Image()
        image.crossOrigin = 'anonymous'
        image.src = imgSrc
        var fileName = image.src.split('/').pop()
        image.onload = function() {
          var canvas = document.createElement('canvas')
          canvas.width = this.width
          canvas.height = this.height
          canvas.getContext('2d').drawImage(this, 0, 0)
          if (typeof window.navigator.msSaveBlob !== 'undefined') {
            window.navigator.msSaveBlob(dataURLtoBlob(canvas.toDataURL()), fileName)
          } else {
            var link = document.createElement('a')
            link.href = canvas.toDataURL()
            link.download = fileName
            link.click()
            link = null
          }
        }
      }
    }
  }
}
</script>
