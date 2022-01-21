<template>
  <v-app
    class="v-app"
  >
    <v-container
      fluid
      fill-height
    >
      <v-row
        no-gutters
        align="center"
        justify="center"
      >
        <v-card
          width="100%"
          height="100%"
        >
          <member-tool-bar @selectedMemberId="val => selectMemberId(val)" />
          <tweet-component-timeline
            :id="twitterUsername"
            :key="twitterUsername"
            source-type="profile"
          />
        </v-card>
      </v-row>
    </v-container>
  </v-app>
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
import MemberToolBar from '@/layout/components/unit/MemberToolBar.vue'
import { getTwitterInfoList } from '@/api/tweet'

export default {
  name: 'TweetTimeline',
  components: {
    MemberToolBar
  },
  mixins: [StoreHelper],
  data() {
    return {
      twitterData: [],
      selectedTwitterUsername: 'tokino_sora'
    }
  },
  computed: {
    ...mapGetters(['locale']),
    twitterUsername: {
      get: function() {
        return this.selectedTwitterUsername
      },
      set: function(value) {
        const twitterData = this.twitterData.filter(o => Number(o.index) === value)
        if (twitterData.length > 0) {
          this.selectedTwitterUsername = twitterData[0].twitter_username
        }
      }
    }
  },
  beforeMount() {
    this.$i18n.locale = this.locale
  },
  mounted() {
    const twitterData = this.twitterData
    getTwitterInfoList({}).then((twitter_res) => {
      twitterData.splice(0, twitterData.length)
      twitter_res.data.twitter_list.forEach((item) => {
        twitterData.push(item)
      })
    })
  },
  methods: {
    selectMemberId: function(value) {
      this.twitterUsername = value
    }
  }
}
</script>
