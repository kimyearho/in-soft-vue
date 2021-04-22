<template>
  <div>
    <v-app-bar
      class="app-toolbar"
      app
      fixed
      :flat="horizon ? true : false"
      :clipped-left="clipped"
      :color="!darkTheme ? 'indigo darken-1' : ''"
    >
      <div class="d-custom-flex align-items-center navbar-left">
        <div
          class="site-logo-wrap d-custom-flex ml-0 align-items-center"
          style="margin-top:7px"
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
      </div>
      <div class="navbar-right">
        <v-btn
          icon
          large
          class="full-screen ma-0"
          @click="!fullscreenToggle ? openFullscreen() : closeFullscreen()"
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
      'clipped',
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
