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
          <tweet-component-tweet
            :id="item.tweet_id"
            :options="{ theme: 'dark' }"
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
// import { getMember, getMemeberTags } from '@/api/member'
import MemberToolBar from '@/layout/components/unit/MemberToolBar.vue'

export default {
  name: 'TweetLive',
  components: {
    MemberToolBar
  },
  mixins: [StoreHelper],
  data() {
    return {
      selectedMember: 1
    }
  },
  computed: {
    ...mapGetters(['locale'])
  },
  beforeMount() {
    this.$i18n.locale = this.locale
  },
  mounted() {
  },
  methods: {
    selectMemberId: function(value) {
      this.selectedMember = value
    }
  }
}
</script>
