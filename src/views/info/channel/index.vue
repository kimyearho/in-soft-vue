<template>
  <v-app
    class="v-app"
  >
    <v-container
      fluid
      fill-height
    >
      <v-row
        dense
        height="90%"
      >
        <v-col
          v-for="memberCh in memberChData[page-1]"
          :key="memberCh"
          cols="12"
          md="3"
          sm="4"
        >
          <v-card
            class="pa-3"
            outlined
            tile
            style="height: 150px;"
            color="#1F7087"
          >
            <div>멤버 이름 : <span v-text="memberCh.member_name" /> </div>
            <div>채널 명 : <span v-text="memberCh.channel_name" /></div>
            <div> 구독 일자 : <span v-text="memberCh.sub_date" /></div>
            <div><a
              :href="memberCh.channel_url"
              target="_blank"
            >링크</a></div>
          </v-card>
        </v-col>
      </v-row>
      <v-pagination
        v-model="page"
        :length="memberChData.length"
        :total-visible="7"
        height="10%"
      />
    </v-container>
  </v-app>
</template>

<script>
import {
// SET_LOCAL_ITEM,
  GET_LOCAL_ITEM
// REMOVE_LOCAL_ITEM
} from '@/utils/local-storage'

//! Helper는 Global Mixin으로 만들지 고민필요
import StoreHelper from '@/utils/store-helper'
import { mapGetters } from 'vuex'
import { getMemberChannel } from '@/api/member'

export default {
  name: 'Channel',
  components: {
  },
  mixins: [StoreHelper],
  data() {
    return {
      memberChData: {
        type: Array,
        default: []
      },
      page: 1
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
      if (data && data.data) {
        const target = data.data
        this.memberChData = []
        const cutSize = 12
        while (target.length > cutSize) {
          const temp = target.splice(0, cutSize)
          console.log(temp)
          this.memberChData.push(temp)
        }
        this.memberChData.push(target)

        console.log(this.memberChData.length)
      }
    })
  }
}
</script>
