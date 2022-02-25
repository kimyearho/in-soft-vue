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
          <template
            v-if="getSelectedMemberTweet"
          >
            <tweet-component-tweet
              :id="getSelectedMemberTweet.id"
              :key="getSelectedMemberTweet.id"
              :options="{ theme: 'dark' }"
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
import { getMemeberLiveTweets } from '@/api/member'
import MemberToolBar from '@/layout/components/unit/MemberToolBar.vue'

export default {
  name: 'TweetLive',
  components: {
    MemberToolBar
  },
  mixins: [StoreHelper],
  data() {
    return {
      selectedMember: 1,
      tweetList: [],
      socket: null,
      status: null
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
    getSelectedMemberTweet: {
      get(selectedMember) {
        const $that = this
        let tweet = this.tweetList.filter(o => { return o.memberId === $that.selectedMember })
        if (tweet != null && tweet.length > 1) {
          tweet = tweet.get(0)
        }
        return tweet[0]
      }
    }
  },
  beforeMount() {
    this.$i18n.locale = this.locale
    // const params = { 'hashtag': value, 'tagtype': this.tagType }
    const $that = this
    const params = {}

    getMemeberLiveTweets(params).then(({ data }) => {
      $that.tweetList = []
      const temp = []
      data.tweet_list.forEach((item) => {
        temp.push({ 'id': item.tweet_id, 'memberId': item.member_id })
      })
      $that.tweetList = temp
      $that.connect()
    })
  },
  beforeDestroy() {
    this.disconnect()
  },
  methods: {
    selectMemberId(value) {
      this.getSelectedMember = value
    },
    connect() {
      const webSocketUrl = 'ws://' + process.env.VUE_APP_BASE_API + ':8000/v1/member/tweet/live'
      const subprotocols = ['live_tweet']
      const $that = this
      $that.socket = new WebSocket(webSocketUrl, subprotocols)
      $that.socket.onopen = () => {
        $that.status = 'connected'
        console.log('websocket connection success')
        // this.socket.send("{ 'text': 'test' }")
        $that.socket.onmessage = ({ data }) => {
          data = JSON.parse(data)
          // data = {"tweet_id": "1486671961174409221", "member_id": 5}
          const temp = $that.tweetList.filter(o => o.memberId === data.member_id)
          const tweet = temp.length === 1 ? temp[0] : null
          tweet.id = data.tweet_id
          console.log(data)
        }
      }
    },
    disconnect() {
      this.socket.close()
      this.status = 'disconnected'
    }
  }
}

</script>
