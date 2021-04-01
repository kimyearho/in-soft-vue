<template>
  <v-navigation-drawer
    app
    permanent
    :clipped="clipped"
    :expand-on-hover="!sidebar.opened"
    :mini-variant="!sidebar.opened"
    width="300"
  >
    <div
      v-show="sidebar.opened"
      class="side-logo"
    >
      <v-img
        v-if="sideLogo"
        :src="sidebarLogoImage"
        height="200"
      />
    </div>
    <v-divider />
    <v-list
      nav
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
    ...mapGetters(['sidebar', 'clipped', 'sideLogo'])
  }
}
</script>
