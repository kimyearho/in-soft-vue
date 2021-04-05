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
        <h3>{{ navTitle }}</h3>
      </span>

      <v-spacer />
      <profile />
    </v-app-bar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { title } from '@/settings'
import Profile from './Profile'

export default {
  name: 'Navbar',
  components: {
    Profile
  },
  data: () => ({
    navTitle: title
  }),
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
