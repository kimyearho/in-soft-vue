<template>
  <v-navigation-drawer
    app
    permanent
    width="300"
    class="vertical-menu"
    :class="{'semi-dark-theme': semiDarkTheme ? true : false}"
    :expand-on-hover="!sidebar.opened"
    :mini-variant="!sidebar.opened"
  >
    <div
      v-show="sidebar.opened"
      v-if="sideLogo"
      class="side-logo"
    >
      <v-img
        height="200"
        :src="sidebarLogoImage"
        :style="{cursor: 'pointer'}"
        @click="toDashboard"
      />
    </div>
    <v-divider />
    <v-list
      nav
      :style="{padding: '0'}"
    >
      <sidebar-item />
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import SidebarItem from './sideItem/Item'
import { mapGetters } from 'vuex'

export default {
  name: 'Sidebar',
  components: {
    SidebarItem
  },
  data: () => ({
    sidebarLogoImage: require('@/assets/logo2.png')
  }),
  computed: {
    ...mapGetters([
      'sidebar',
      'sideLogo',
      'semiDarkTheme'
    ])
  },
  methods: {
    toDashboard() {
      this.$router.push('/dashboard')
    }
  }
}
</script>
