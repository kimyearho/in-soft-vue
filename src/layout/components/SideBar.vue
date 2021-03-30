<template>
  <v-navigation-drawer
    app
    permanent
    :clipped="clipped"
    :expand-on-hover="!sidebar.opened"
    :mini-variant="!sidebar.opened"
  >
    <div
      v-show="sidebar.opened"
      class="side-logo"
    >
      <v-img
        v-if="sideLogo"
        :src="sidebarLogoImage"
        height="200"
        max-height="400"
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
    sidebarLogoImage: 'https://pbs.twimg.com/media/Ei5n6vBWoAEy5gp.png'
  }),
  computed: {
    ...mapGetters(['sidebar', 'clipped', 'sideLogo'])
  }
}
</script>
