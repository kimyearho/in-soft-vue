<template>
  <div>
    <v-system-bar
      window
      dark
      lights-out
      color="grey darken-4"
    >
      <breadcrumbs />
    </v-system-bar>
    <v-app-bar
      app
      flat
      clipped-left
      dark
      color="light-blue lighten-1"
    >
      <v-app-bar-nav-icon @click="toggleSideBar" />
      <span class="title ml-3 mr-5">
        <h3>inSoft Vue-Framework</h3>
      </span>

      <v-spacer />
      <profile />
    </v-app-bar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import Breadcrumbs from '@/components/Breadcrumb/index'
import Profile from './Profile'

export default {
  name: 'Navbar',
  components: {
    Breadcrumbs,
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
