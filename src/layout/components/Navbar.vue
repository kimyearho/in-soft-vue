<template>
  <div>
    <v-app-bar
      app
      dark
      :clipped-left="clipped"
      color="blue darken-1"
    >
      <v-app-bar-nav-icon @click="toggleSideBar" />
      <span class="title ml-3 mr-5">
        <h3>IN-SOFT Vue</h3>
      </span>

      <v-spacer />
      <profile />
    </v-app-bar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import Profile from './Profile'

export default {
  name: 'Navbar',
  components: {
    Profile
  },
  computed: {
    ...mapGetters(['avatar', 'clipped'])
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('app/toggleSideBar')
    }
  }
}
</script>
