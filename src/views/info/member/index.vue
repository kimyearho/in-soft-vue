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
          v-for="member in memberData[page-1]"
          :key="member"
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
            <div>이름(KR) : <span v-text="member.member_name_kor" /> </div>
            <div>이름(EN) : <span v-text="member.member_name_eng" /> </div>
            <div>이름(JP) : <span v-text="member.member_name_jp" /> </div>
            <div>기수 : <span v-text="member.member_generation" /></div>
            <div>소속 : <span v-text="member.member_classification" /></div>
          </v-card>
        </v-col>
      </v-row>
      <v-pagination
        v-model="page"
        :length="memberData.length"
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
import { getMember } from '@/api/member'

export default {
  name: 'Member',
  components: {
  },
  mixins: [StoreHelper],
  data() {
    return {
      memberData: {
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
    getMember(user).then(({ data }) => {
      console.log(data)
      if (data && data.member_list) {
        const target = data.member_list
        this.memberData = []
        const cutSize = 12
        while (target.length > cutSize) {
          const temp = target.splice(0, cutSize)
          console.log(temp)
          this.memberData.push(temp)
        }
        this.memberData.push(target)

        console.log(this.memberData.length)
      }
    })
  }
}
</script>
