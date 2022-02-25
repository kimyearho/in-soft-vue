<template>
  <v-card>
    <template>
      <div class="text-center">
        <v-dialog
          v-model="dialog"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-card
              :style="imageStyle('30vmin')"
              v-bind="attrs"
              v-on="on"
            />
          </template>

          <v-card>
            <v-carousel
              width="90vmin"
              height="90vmin"
            >
              <v-carousel-item
                v-for="(item,i) in costumes"
                :key="i"
                width="90vmin"
                height="90vmin"
                :src="item.img_url"
                reverse-transition="fade-transition"
                transition="fade-transition"
              />
            </v-carousel>
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
        >go to youtube</a>
      </v-card-text>
      <v-card-text
        class="pa-0"
        v-text="member.member_name_kor"
      />
    </v-card-subtitle>
  </v-card>
</template>
<script>
//! Helper는 Global Mixin으로 만들지 고민필요
import StoreHelper from '@/utils/store-helper'
import { mapGetters } from 'vuex'
import { getMemberCustomes } from '@/api/member'

export default {
  name: 'TagCarousel',
  mixins: [StoreHelper],
  props: {
    member: {
      type: Object,
      default() {
        return {
          'created': 1641347989,
          'index': 1,
          'member_name_jp': 'ときのそら',
          'member_name_kor': '토키노 소라',
          'member_name_eng': 'Tokino Sora',
          'isDelete': 'N',
          'modified': 1641347989,
          'member_classification': 'JP',
          'isUse': 'Y',
          'img_url': 'https://hololive.hololivepro.com/wp-content/uploads/2021/05/tokino_sora_thumb.png',
          'company_name_alias': 'holo',
          'member_generation': '0기'
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
      lodingImg: 'http://pbs.twimg.com/media/FIZ-ACwUUAEONeG.jpg',
      costumes: []
    }
  },
  computed: {
    ...mapGetters(['locale']),
    getmember: {
      get() {
        return this.member
      }
    },
    getCostumes: {
      get() {
        return this.costumes
      },
      set(value) {
        const $that = this
        const params = { 'member_id': value }
        getMemberCustomes(params).then(({ data }) => {
          const temp = []
          data.customes_list.forEach((item) => {
            temp.push(item)
          })
          $that.costumes = temp
        })
      }
    }
  },
  beforeMount() {
    this.$i18n.locale = this.locale
    this.getCostumes = this.member.index
  },
  methods: {
    imageStyle(heightSize) {
      const member = this.getmember
      return { backgroundImage: 'url(' + member.img_url + '?format=jpg), url(' + this.lodingImg + ')', backgroundSize: 'contain', backgroundPosition: 'center', height: heightSize }
    }
  }
}
</script>
