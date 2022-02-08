<template>
  <div>
    <page-container>
      <v-row>
        <v-col cols="12">
          <v-card>
            <v-card-title>Live Streaming</v-card-title>
            <v-card-subtitle>
              <small>Copyright © INSOFT. All rights Reserved.</small>
            </v-card-subtitle>
            23232323
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6">
          <v-card>
            <v-card>
              <v-card-actions>
                <v-card-title>Random Fanart</v-card-title>
                <v-spacer />
                <v-btn
                  @click="leftRandomScroll()"
                >
                  Left
                </v-btn>
                <v-btn
                  v-show="getRandomSpeedScroll"
                  @click="stopRandomScroll()"
                >
                  stop
                </v-btn>
                <v-btn
                  v-show="!getRandomSpeedScroll"
                  @click="startRandomScroll()"
                >
                  start
                </v-btn>
                <v-btn
                  @click="rightRandomScroll()"
                >
                  Right
                </v-btn>
                <v-spacer />
              </v-card-actions></v-card>
            <v-card
              min-width="400px"
              min-height="400px"
              :style="getRandomFanart()"
            />
          </v-card>
        </v-col>
        <v-col cols="6">
          <v-card>
            <v-card-title>Recommended Fanart</v-card-title>
            <v-card
              min-width="400px"
              min-height="400px"
              :style="getRecommendFanart()"
            />
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6">
          <v-card
            min-width="400px"
            min-height="1000px"
          >
            <v-card-title>Live News</v-card-title>
            <v-card-subtitle>
              <small>Copyright © INSOFT. All rights Reserved.</small>
            </v-card-subtitle>
            23232323
          </v-card>
        </v-col>
        <v-col cols="6">
          <v-card
            min-width="400px"
            min-height="1000px"
          >
            <v-card-title>Live Tweet</v-card-title>
            <v-container>
              <template
                v-if="tweetId"
              >
                <tweet-component-tweet
                  :id="getTweet"
                  :key="getTweet"
                />
              </template>
            </v-container>
          </v-card>
        </v-col>
      </v-row>
    </page-container>
  </div>
</template>

<script>
import { getMemeberLiveTweets } from '@/api/member'
import { getDrawsLives } from '@/api/tweet'

export default {
  name: 'Dashboard',
  components: {
  },
  data() {
    return {
      tweetId: null,
      randomFanartBase: [],
      randomCount: 0,
      randomMaxCount: 60 * 60,
      randomSpeed: 5,
      randomSpeedScroll: true,
      baseUrl: 'https://pbs.twimg.com/media/FKU3L1TakAEl2gB',
      randomTimer: null,
      randomFanartItem: {}
    }
  },
  computed: {
    getTweet: {
      get() {
        return this.tweetId
      },
      set(value) {
        this.tweetId = value
      }
    },
    getRandomSpeedScroll: {
      get() {
        return this.randomSpeedScroll
      },
      set(value) {
        if (value) {
          this.randomSpeedScroll = value
          this.setRandomFanartTimer()
        } else {
          this.randomSpeedScroll = value
          clearTimeout(this.randomTimer)
        }
      }
    }
  },
  watch: {
    randomCount() {
      this.randomFanartItem = this.randomFanartBase[this.randomCount]
    }
  },
  beforeMount() {
    this.$i18n.locale = this.locale
    this.refreshTweet()
    this.connect()
    this.refreshRandomFanart()
  },
  beforeDestroy() {
    this.disconnect()
    clearTimeout(this.randomTimer)
  },
  methods: {
    setRandomFanartTimer() {
      const $that = this
      $that.randomTimer = setInterval(() => {
        if ($that.randomMaxCount > $that.randomCount) {
          $that.randomCount = $that.randomCount + 1
        } else {
          clearTimeout($that.randomTimer)
          $that.randomCount = 0
          $that.setRandomFanartTimer()
        }
      }, $that.randomSpeed * 1000)

      console.log($that.randomSpeed * 1000)
    },
    refreshRandomFanart() {
      const $that = this
      const params = { 'type': 'random' }
      getDrawsLives(params).then(({ data }) => {
        $that.randomFanartBase = data.tweet_list
        $that.setRandomFanartTimer()
      })
    },
    refreshTweet() {
      const $that = this
      const params = { 'type': 'only' }
      getMemeberLiveTweets(params).then(({ data }) => {
        const temp = []
        data.tweet_list.forEach((item) => {
          temp.push({ 'id': item.tweet_id, 'memberId': item.member_id })
        })

        $that.getTweet = temp[0].id
      })
    },
    connect() {
      const webSocketUrl = 'ws://localhost:8000/v1/member/tweet/live'
      const subprotocols = ['live_tweet']
      const $that = this
      $that.socket = new WebSocket(webSocketUrl, subprotocols)
      $that.socket.onopen = () => {
        $that.status = 'connected'
        console.log('websocket connection success')
        // this.socket.send("{ 'text': 'test' }")
        $that.socket.onmessage = ({ data }) => {
          data = JSON.parse(data)
          console.log(data)
          $that.getTweet = data.tweet_id
        }
      }
    },
    disconnect() {
      this.socket.close()
      this.status = 'disconnected'
    },
    getRandomFanart() {
      if (this.randomFanartBase.length > this.randomCount && this.randomCount > 0) {
        return { backgroundImage: 'url(' + this.randomFanartItem.url + '?format=jpg)', backgroundSize: 'contain', backgroundPosition: 'center' }
      } else {
        return { backgroundImage: 'url(' + this.baseUrl + '?format=jpg)', backgroundSize: 'contain', backgroundPosition: 'center' }
      }
    },
    getRecommendFanart() {
      return { backgroundImage: 'url(' + this.baseUrl + '?format=jpg)', backgroundSize: 'contain', backgroundPosition: 'center' }
    },
    stopRandomScroll() {
      this.getRandomSpeedScroll = false
    },
    startRandomScroll() {
      this.getRandomSpeedScroll = true
    },
    rightRandomScroll() {
      this.getRandomSpeedScroll = false
      if (this.randomMaxCount > this.randomCount) {
        this.randomCount += 1
      }
    },
    leftRandomScroll() {
      this.getRandomSpeedScroll = false
      if (this.randomCount > 0) {
        this.randomCount -= 1
      }
    }
  }
}
</script>

<style scoped>
.dashboard-container {
  width: 100%;
}
</style>
