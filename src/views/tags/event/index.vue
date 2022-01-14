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
          <tweet-tag-tool-bar @selectedTag="val => selectTag(val)" />
          <custom-tag-carousel
            :selected-tag="selectedTag"
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
import CustomTagCarousel from '@/layout/components/unit/CustomTagCarousel.vue'

export default {
  name: 'Kirinuki',
  components: {
    TweetTagToolBar,
    CustomTagCarousel
  },
  mixins: [StoreHelper],
  data() {
    return {
      selectedTag: ''
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
    selectTag: function(value) {
      this.selectedTag = value
    }
  }
}
</script>
