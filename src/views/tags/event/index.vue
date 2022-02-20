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
          <tweet-tag-tool-bar
            :tag-type="tagType"
            @selectedTag="val => selectTag(val)"
          />
          <tag-carousel
            :draw-type="drawType"
            :hash-tag="getTag"
            :is-custom="isCustom"
          /></v-card>
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
import TweetTagToolBar from '@/layout/components/unit/TweetTagToolBar.vue'
import TagCarousel from '@/layout/components/unit/TagCarousel.vue'

export default {
  name: 'Kirinuki',
  components: {
    TweetTagToolBar,
    TagCarousel
  },
  mixins: [StoreHelper],
  data() {
    return {
      selectedTag: '',
      tagType: 'custom',
      drawType: 'all',
      isCustom: true
    }
  },
  computed: {
    ...mapGetters(['locale']),
    getTag: {
      get() {
        return this.selectedTag
      },
      set(value) {
        this.selectedTag = value
      }
    }

  },
  beforeMount() {
    this.$i18n.locale = this.locale
  },
  mounted() {
  },
  methods: {
    selectTag: function(value) {
      this.getTag = value
    }
  }
}
</script>
