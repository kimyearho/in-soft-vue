<template>
  <v-container padding-top="0px">
    <v-toolbar dark>
      <v-container>
        <v-toolbar-items :key="memberId">
          <v-container>
            <template v-for="item in disaplyTags">
              <v-btn
                :key="item"
                class="mx-2"
                fab
                outlined
                :value="item"
                large
                color="white"
                min-width="8%"
                @click="setHashTag(item)"
                v-text="item"
              />
            </template>
          </v-container>
        </v-toolbar-items>
      </v-container>
    </v-toolbar>
  </v-container>
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
import { getMemeberTags } from '@/api/member'
import { getCustomTags } from '@/api/tweet'

export default {
  name: 'TweetTagToolBar',
  components: {
  },
  mixins: [StoreHelper],
  props: {
    memberId: {
      type: Number,
      default: null
    },
    tagType: { // base, custom
      type: String,
      default: 'base'
    }
  },
  data() {
    return {
      tagData: [],
      selectOptions: {
        hashTag: 1
      }
    }
  },
  computed: {
    ...mapGetters(['locale']),
    disaplyTags: {
      get() {
        return this.tagData
      },
      set(value) {
        const $that = this
        const params = {}
        let rest = null
        params.member_id = $that.memberId
        if ($that.tagType === 'base') {
          rest = getMemeberTags(params)
        } else if ($that.tagType === 'custom') {
          rest = getCustomTags(params)
        }

        rest.then(({ data }) => {
          // this.memberData = data.member_list
          const tagSet = new Set()

          if ($that.tagType === 'base') {
            data.tag_list.forEach((item) => {
              tagSet.add(item.hashtag)
            })
          } else if ($that.tagType === 'custom') {
            data.custom_tags.forEach((item) => {
              tagSet.add(item.hashtag)
            })
          }

          $that.tagData = Array.from(tagSet)
        })
      }
    }
  },
  watch: {
    memberId() {
      this.disaplyTags = this.memberId
    }
  },
  beforeMount() {
    this.$i18n.locale = this.locale
  },
  mounted() {
    this.disaplyTags = this.memberId
  },
  methods: {
    setHashTag: function(value) {
      this.selectOptions.hashTag = value
      this.$emit('selectedTag', value)
    }
  }
}
</script>
<style scoped>
  /* div {
    padding: 20px
  }

  div span {
    margin: 20px
  } */
</style>
