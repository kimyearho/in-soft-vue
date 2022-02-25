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
          <tweet-tag-tool-bar
            :member-id="getSelectedMember"
            @selectedTag="val => selectedTag(val)"
          />
          <template v-for="item in getTweetList">
            <tweet-component-tweet
              :id="item"
              :key="item"
            />
          </template>
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
import { getTwitterIdsByTags } from '@/api/tweet'
import MemberToolBar from '@/layout/components/unit/MemberToolBar.vue'
import TweetTagToolBar from '@/layout/components/unit/TweetTagToolBar.vue'

export default {
  name: 'Basetag',
  components: {
    MemberToolBar,
    TweetTagToolBar
  },
  mixins: [StoreHelper],
  data() {
    return {
      selectedMember: 1,
      tweetList: []
    }
  },
  computed: {
    ...mapGetters(['locale']),
    getSelectedMember: {
      get() {
        return this.selectedMember
      },
      set(value) {
        this.selectedMember = value
      }
    },
    getTweetList: {
      get() {
        return this.tweetList
      },
      set(value) {
        const params = { 'hashtag': value }
        const $that = this
        getTwitterIdsByTags(params).then(({ data }) => {
          const tweetSet = new Set()
          $that.tweetList = []
          data.tweet_list.forEach((item) => {
            tweetSet.add(item.twitter_id)
          })
          $that.tweetList = Array.from(tweetSet)
        })
      }
    }
  },
  beforeMount() {
    this.$i18n.locale = this.locale
  },
  mounted() {
  },
  methods: {
    selectMemberId: function(value) {
      this.getSelectedMember = value
    },
    selectedTag: function(value) {
      this.getTweetList = value
    }
  }
}
</script>
