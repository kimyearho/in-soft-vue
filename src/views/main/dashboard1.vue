<template>
  <div>
    <page-container>
      <v-row>
        <v-col cols="12">
          <v-card>
            <v-card-title>Live Streaming</v-card-title>
            <template v-for="item in getStream">
              <v-container :key="item.url">
                <v-card>
                  <a
                    :href="item.url"
                    target="_blank"
                  >
                    <v-container>
                      <p v-text="item.member" />
                      <v-container center>
                        <img
                          :src="item.image_url"
                          width="100%"
                          height="100%"
                        >
                      </v-container>
                      <v-container>
                        <p v-text="item.date" />
                        <p v-text="item.text" />
                      </v-container>
                    </v-container>
                  </a>
                </v-card>
              </v-container>
            </template>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6">
          <DrawCard
            :maxcount="60*60"
            :speed="8"
            :art-type="randomArtType"
            :tag-type="randomTagType"
          />
        </v-col>
        <v-col cols="6">
          <DrawCard
            :maxcount="60*60"
            :speed="8"
            :art-type="recommendArtType"
            :tag-type="recommendTagType"
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6">
          <v-card
            min-width="400px"
            min-height="1000px"
          >
            <v-card-title>Live Hololive News by hololive official site</v-card-title>
            <template v-for="item in getNews">
              <v-container :key="item.url">
                <v-card>
                  <a
                    :href="item.url"
                    target="_blank"
                  >
                    <v-container>
                      <v-container center>
                        <img
                          :src="item.image_url"
                          width="100%"
                          height="100%"
                        >
                      </v-container>
                      <v-container>
                        <p v-text="item.date" />
                        <p v-text="item.text" />
                      </v-container>
                    </v-container>
                  </a>
                </v-card>
              </v-container>
            </template>
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
                  fill-height
                />
              </template>
            </v-container></v-card>
        </v-col>
      </v-row>
    </page-container>
  </div>
</template>

<script>
import { getMemeberLiveTweets } from '@/api/member'
import DrawCard from '@/layout/components/unit/DrawCard.vue'
import axios from 'axios'
import cheerio from 'cheerio'

export default {
  name: 'Dashboard',
  components: {
    DrawCard
  },
  data() {
    return {
      tweetId: null,
      randomArtType: 'random',
      randomTagType: 'fanart',
      recommendArtType: 'recommend',
      recommendTagType: 'fanart',
      news: '',
      stream: []
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
    getNews: {
      get() {
        return this.news
      }
    },
    getStream: {
      get() {
        return this.stream
      }
    }
  },
  beforeMount() {
    this.$i18n.locale = this.locale
    this.refreshTweet()
    this.connect()
    this.refreshNews()
    this.refreshStreams()
  },
  beforeDestroy() {
    this.disconnect()
  },
  methods: {
    refreshStreams() {
    },
    refreshNews() {
      const getHtml = async() => {
        try {
          return await axios.get('https://hololive.hololivepro.com/')
        } catch (error) {
          console.error(error)
        }
      }

      getHtml()
        .then(html => {
          const ulList = []
          const $HTML = cheerio.load(html.data)
          const $bodyList = $HTML('div.news ul').children('li')

          $bodyList.each(function(i, elem) {
            if (i < 2) {
              ulList[i] = {
                url: $HTML(this).find('a').attr('href'),
                date: $HTML(this).find('.txt_box').children('p').get(0).children[0].data,
                text: $HTML(this).find('.txt_box').children('p').get(1).children[0].data,
                image_url: $HTML(this).find('a figure img').attr('src')
              }
            }
          })
          this.news = ulList
          return ulList
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
          console.log(data)
          $that.getTweet = data.tweet_id
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

<style scoped>
.dashboard-container {
  width: 100%;
}
</style>
