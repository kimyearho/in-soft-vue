<template>
  <div>
    <v-app-bar
      app
      flat
      clipped-left
      dark
      color="blue-grey darken-4"
    >
      <v-app-bar-nav-icon @click="toggleSideBar" />
      <span class="title ml-3 mr-5">
        <h3>InSoft Vue-Framework</h3>
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
    ...mapGetters(['avatar'])
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('app/toggleSideBar')
    }
  }
}
</script>
