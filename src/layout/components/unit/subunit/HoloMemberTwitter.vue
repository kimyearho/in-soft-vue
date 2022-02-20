<template>
  <v-card>
    <template>
      <div class="text-center">
        <v-dialog
          v-model="dialog"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-card
              :style="imageStyle('30vmin', 'profile')"
              v-bind="attrs"
              v-on="on"
            />
          </template>

          <v-card>
            <v-card
              :style="imageStyle('70vmin','banner')"
              @contextmenu.prevent
            />
            <v-card-subtitle style="text-align:center">
              <a
                :href="'https://twitter.com/moonahoshinova/status/'+member.twitter_id"
                target="_blank"
              >go to tweet</a>
            </v-card-subtitle>
            <v-divider />
          </v-card>
        </v-dialog>
      </div>
    </template>
    <v-card-subtitle style="text-align:center">
      <v-card-text
        v-if="member.twitter_id"
        class="pa-0"
      >
        <a
          :href="'https://twitter.com/moonahoshinova/status/'+member.twitter_id"
          target="_blank"
        >go to tweet</a>
      </v-card-text>
      <v-card-text
        class="pa-0"
        v-text="member.twitter_name"
      />
      <v-card-text
        class="pa-0"
        v-text="member.twitter_username"
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
    member: {
      type: Object,
      default() {
        return {
          'index': '1',
          'twitter_name': 'ときのそら🐻💿',
          'twitter_proto': 'https://twitter.com/tokino_sora/photo',
          'twitter_url': 'https://twitter.com/tokino_sora',
          'twitter_id': '880317891249188864',
          'isUse': 'Y',
          'modified': 1641347990,
          'twitter_header_photo': 'https://twitter.com/tokino_sora/header_photo',
          'created': 1641347990,
          'twitter_username': 'tokino_sora',
          'isDelete': 'N'
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
    getmember: {
      get() {
        return this.member
      }
    }
  },
  beforeMount() {
    this.$i18n.locale = this.locale
  },
  methods: {
    imageStyle(heightSize, imgType) {
      const member = this.getmember
      if (imgType === 'profile') {
        return { backgroundImage: 'url(' + member.twitter_proto + '), url(' + this.lodingImg + ')', backgroundSize: 'contain', backgroundPosition: 'center', height: heightSize }
      } else {
        return { backgroundImage: 'url(' + member.twitter_header_photo + '), url(' + this.lodingImg + ')', backgroundSize: 'contain', backgroundPosition: 'center', height: heightSize }
      }
    }
  }
}
</script>
