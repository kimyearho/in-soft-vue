<template>
  <v-toolbar dark>
    <v-toolbar-items>
      <template v-for="item in disaplyTags">
        <v-btn
          :key="item"
          class="mx-2"
          fab
          dark
          outlined
          :value="item"
          large
          color="white"
          min-width="80px"
          @click="setHashTag(item)"
          v-text="item"
        />
      </template>
    </v-toolbar-items>
  </v-toolbar>
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
import { getCustomTags } from '@/api/tweet'

export default {
  name: 'TweetTagToolBar',
  components: {
  },
  mixins: [StoreHelper],
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
      }
    }
  },
  beforeMount() {
    this.$i18n.locale = this.locale
  },
  mounted() {
    const $that = this
    const params = {}
    getCustomTags(params).then(({ data }) => {
      // this.memberData = data.member_list
      const tagSet = new Set()
      data.custom_tags.forEach((item) => {
        tagSet.add(item.hashtag)
      })
      $that.tagData = Array.from(tagSet)
    })
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
