<template>
  <div>
    <v-app-bar
      app
      dark
      :flat="horizon ? true : false"
      :clipped-left="clipped"
      class="app-bar"
      color="indigo darken-2"
    >
      <!-- <v-app-bar-nav-icon
        v-if="!horizon"
        @click="toggleSideBar"
      /> -->
      <div class="site-logo">
        <span class="title ml-3 mr-5">
          <h3>{{ appTitle }} {{ appVersion }}</h3>
        </span>
      </div>

      <v-spacer />
      <profile />
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
    Profile
  },
  data: () => ({
    appTitle: title,
    appVersion: version
  }),
  computed: {
    ...mapGetters(['avatar', 'clipped', 'horizon'])
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('app/toggleSideBar')
    }
  }
}
</script>

<style scoped>
.app-bar >>> .v-toolbar__content {
  padding: 0 !important;
}
.site-logo {
  background: #1a237e;
  max-height: 64px;
  padding-right: 60px;
  padding-left: 52px;
}
.site-logo .title {
  line-height: 15px;
}
</style>
