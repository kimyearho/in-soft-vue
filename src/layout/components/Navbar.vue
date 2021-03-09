<template>
  <v-app-bar
    app
    clipped-left
    dark
    color="blue darken-3"
  >
    <v-app-bar-nav-icon @click="$emit('is-side')" />
    <span class="title ml-3 mr-5">
      <h3>inSoft Vue-framework</h3>
      <!-- <v-img :src="require('@/assets/images/admin_portal_logo_default_no_tag.png')" /> -->
    </span>

    <v-spacer />
    <profile />
  </v-app-bar>
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
    ...mapGetters(['sidebar', 'avatar'])
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('app/toggleSideBar')
    }
  }
}
</script>
