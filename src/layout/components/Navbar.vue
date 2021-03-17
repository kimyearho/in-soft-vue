<template>
  <div>
    <!-- TODO 추후 브래드크럼으로 컴포넌트화 시킬것 -->
    <v-system-bar
      window
      color="grey darken-4"
      dark
      lights-out
    >
      <v-icon>mdi-message</v-icon>
      <span>Dashboard / Link / Link</span>
      <v-spacer />
    </v-system-bar>
    <v-app-bar
      app
      flat
      clipped-left
      dark
      color="light-blue lighten-2"
    >
      <v-app-bar-nav-icon @click="toggleSideBar" />
      <span class="title ml-3 mr-5">
        <h3>inSoft Vue-Framework</h3>
        <!-- <v-img :src="require('@/assets/images/admin_portal_logo_default_no_tag.png')" /> -->
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
