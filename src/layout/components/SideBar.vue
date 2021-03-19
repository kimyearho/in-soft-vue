<template>
  <v-navigation-drawer
    app
    permanent
    :clipped="clipped"
    :expand-on-hover="!sidebar.opened"
    :mini-variant="!sidebar.opened"
  >
    <v-list
      nav
    >
      <sidebar-item />
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import SidebarItem from './SideItem/Item'
import { mapGetters } from 'vuex'

export default {
  name: 'Sidebar',
  components: {
    SidebarItem
  },
  data: () => ({
  }),
  computed: {
    ...mapGetters(['sidebar', 'clipped'])
  }
}
</script>
