<template>
  <div>
    <v-app-bar
      class="app-toolbar"
      app
      fixed
      :flat="horizon ? true : false"
      :clipped-left="clipped"
      color="indigo darken-4"
    >
      <div class="d-custom-flex align-items-center navbar-left">
        <div
          class="site-logo-wrap d-custom-flex ml-0 align-items-center"
          style="margin-top:80px"
        >
          <router-link
            to="/"
            class="grayish-blue site-logo-img"
          >
            <img
              src="@/assets/site-logo.png"
              alt="site logo"
              width="100"
              height="30"
            >
          </router-link>
        </div>
        <v-text-field
          text
          solo
          prepend-icon="mdi-search"
          class="search-bar"
        />
      </div>
      <div class="navbar-right">
        <v-btn
          icon
          large
          class="full-screen ma-0"
        >
          <v-icon color="grey">mdi-fullscreen</v-icon>
        </v-btn>
        <app-profile />
      </div>
    </v-app-bar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { title, version } from '@/settings'
import Profile from './Profile'

export default {
  name: 'Navbar',
  components: {
    appProfile: Profile
  },
  data: () => ({
    appTitle: title,
    appVersion: version
  }),
  computed: {
    ...mapGetters([
      'avatar',
      'clipped',
      'horizon'
    ])
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('app/toggleSideBar')
    }
  }
}
</script>

<style scoped>
.navbar-right {
  display: inline-flex;
}
</style>
