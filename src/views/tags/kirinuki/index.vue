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
      />
      <!-- //? Snackbar 컴포넌트 -->
      <common-snackbars
        :visible="snackbar"
        @close="snackbar = false"
      />
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
import CommonSnackbars from '@/components/Snackbars'
import { mapGetters } from 'vuex'

export default {
  name: 'Channel',
  components: {
    CommonSnackbars
  },
  mixins: [StoreHelper],
  data() {
    return {
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

  }
}
</script>
