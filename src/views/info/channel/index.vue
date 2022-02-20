<template>
  <v-app
    class="v-app"
  >
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
              <HoloMemberYoutube
                v-if="selectMemberYoutubeData([i,item])"
                :channel="selectMemberYoutubeData([i,item])"
              />
            </v-col>
          </template>
        </v-row>
      </v-container>
      <v-container>
        <v-pagination
          v-model="page"
          :length="maxPage"
        />
      </v-container>
    </v-container>
  </v-app>
</template>

<script>
import {
  GET_LOCAL_ITEM
} from '@/utils/local-storage'

//! Helper는 Global Mixin으로 만들지 고민필요
import StoreHelper from '@/utils/store-helper'
import { mapGetters } from 'vuex'
import { getMemberChannel } from '@/api/member'
import HoloMemberYoutube from '@/layout/components/unit/subunit/HoloMemberYoutube.vue'

export default {
  name: 'Member',
  components: {
    HoloMemberYoutube
  },
  mixins: [StoreHelper],
  data() {
    return {
      memberYoutubeData: {
        type: Array,
        default: []
      },
      page: 1,
      colNumber: 4,
      rowNumber: 3,
      maxPage: 50

    }
  },
  computed: {
    ...mapGetters(['locale'])
  },
  beforeMount() {
    this.$i18n.locale = this.locale
  },
  mounted() {
    const user_id = GET_LOCAL_ITEM('user_id')
    const user_email = GET_LOCAL_ITEM('user_email')
    const user = { user_id, user_email }

    getMemberChannel(user).then(({ data }) => {
      console.log(data)
      if (data && data.data) {
        this.memberYoutubeData = data.data
        this.maxPage = Math.round(data.data.length / this.colNumber / this.rowNumber)
        console.log(data.data)
        console.log(this.maxPage)
      }
    })
  },
  methods: {
    selectMemberYoutubeData(value) {
      const data = this.memberYoutubeData
      const row = value[0]
      const col = value[1]

      const index = (this.page - 1) * (this.colNumber * this.rowNumber)
      const number = index + ((row - 1) * this.colNumber) + col - 1
      return data[number]
    }
  }
}
</script>
