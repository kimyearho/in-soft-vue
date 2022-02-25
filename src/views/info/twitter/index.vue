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
              <HoloMemberTwitter
                v-if="selectMemberTwitterData([i,item])"
                :member="selectMemberTwitterData([i,item])"
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
//! Helper는 Global Mixin으로 만들지 고민필요
import StoreHelper from '@/utils/store-helper'
import { mapGetters } from 'vuex'
import { getTwitters } from '@/api/twitter'
import HoloMemberTwitter from '@/layout/components/unit/subunit/HoloMemberTwitter.vue'

export default {
  name: 'Member',
  components: {
    HoloMemberTwitter
  },
  mixins: [StoreHelper],
  data() {
    return {
      memberTwitterData: {
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
    getTwitters().then(({ data }) => {
      console.log(data)
      if (data && data.twitter_list) {
        this.memberTwitterData = data.twitter_list
        this.maxPage = Math.round(data.twitter_list.length / this.colNumber / this.rowNumber)
        console.log(data.twitter_list)
        console.log(this.maxPage)
      }
    })
  },
  methods: {
    selectMemberTwitterData(value) {
      const data = this.memberTwitterData
      const row = value[0]
      const col = value[1]

      const index = (this.page - 1) * (this.colNumber * this.rowNumber)
      const number = index + ((row - 1) * this.colNumber) + col - 1
      return data[number]
    }
  }
}
</script>
