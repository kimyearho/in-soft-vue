<template>
  <div class="app-bar-wrapper">
    <div
      class="header-shadow"
      :class="{ 'vertical': !horizon ? true : false }"
    />
    <v-app-bar
      app
      fixed
      class="app-toolbar"
      :class="{ 'vertical': !horizon ? true : false }"
    >
      <div class="d-custom-flex align-items-center navbar-left">
        <v-btn
          icon
          large
          class="full-screen ma-0"
          @click="!fullscreenToggle ? openFullscreen() : closeFullscreen()"
        >
          <v-icon color="grey">mdi-fullscreen</v-icon>
        </v-btn>
        <v-btn
          icon
          large
          class="full-screen ma-0"
        >
          <v-icon color="grey">mdi-star-outline</v-icon>
        </v-btn>
        <v-btn
          icon
          large
          class="full-screen ma-0"
        >
          <v-icon color="grey">mdi-email-outline</v-icon>
        </v-btn>
      </div>
      <div class="navbar-right">
        <app-profile />
      </div>
    </v-app-bar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { title, version } from '@/settings'
import Profile from './Profile'

let elem = document.documentElement

export default {
  name: 'Navbar',
  components: {
    appProfile: Profile
  },
  data: () => ({
    appTitle: title,
    appVersion: version,
    fullscreenToggle: false
  }),
  computed: {
    ...mapGetters([
      'avatar',
      'horizon',
      'darkTheme'
    ])
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('app/toggleSideBar')
    },
    openFullscreen() {
      this.fullscreenToggle = true
      if (elem.requestFullscreen) {
        elem.requestFullscreen()
      } else if (elem.mozRequestFullScreen) {
        /* Firefox */
        elem.mozRequestFullScreen()
      } else if (elem.webkitRequestFullscreen) {
        /* Chrome, Safari & Opera */
        elem.webkitRequestFullscreen()
      } else if (elem.msRequestFullscreen) {
        /* IE/Edge */
        elem = window.top.document.body
        elem.msRequestFullscreen()
      }
    },
    closeFullscreen() {
      this.fullscreenToggle = false
      if (document.exitFullscreen) {
        document.exitFullscreen()
      } else if (document.mozCancelFullScreen) {
        /* Firefox */
        document.mozCancelFullScreen()
      } else if (document.webkitExitFullscreen) {
        /* Chrome, Safari & Opera */
        document.webkitExitFullscreen()
      } else if (document.msExitFullscreen) {
        /* IE/Edge */
        window.top.document.msExitFullscreen()
      }
    }
  }
}
</script>

<style scoped>
.navbar-right {
  display: inline-flex;
}
</style>
