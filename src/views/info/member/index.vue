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
              <HoloMemberCard
                v-if="selectMemberData([i,item])"
                :member="selectMemberData([i,item])"
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
import { getMember } from '@/api/member'
import HoloMemberCard from '@/layout/components/unit/subunit/HoloMemberCard.vue'

export default {
  name: 'Member',
  components: {
    HoloMemberCard
  },
  mixins: [StoreHelper],
  data() {
    return {
      memberData: {
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
    getMember(user).then(({ data }) => {
      console.log(data)
      if (data && data.member_list) {
        this.memberData = data.member_list
        this.maxPage = Math.round(data.member_list.length / this.colNumber / this.rowNumber)
        console.log(data.member_list)
        console.log(this.maxPage)
      }
    })
  },
  methods: {
    selectMemberData(value) {
      const data = this.memberData
      const row = value[0]
      const col = value[1]

      const index = (this.page - 1) * (this.colNumber * this.rowNumber)
      const number = index + ((row - 1) * this.colNumber) + col - 1
      return data[number]
    }
  }
}
</script>
