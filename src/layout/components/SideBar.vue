<template>
  <v-navigation-drawer
    app
    clipped
    permanent
    :expand-on-hover="!sidebar.opened"
    :mini-variant="!sidebar.opened"
  >
    <v-list>
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
    drawer: null
  }),
  computed: {
    ...mapGetters(['sidebar'])
  }
}
</script>
