<template>
  <v-navigation-drawer
    app
    clipped
    :mini-variant="!isHide"
  >
    <v-list v-if="isHide">
      <sidebar-item />
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import SidebarItem from './sideItem/Item'

export default {
  name: 'Sidebar',
  components: {
    SidebarItem
  },
  props: {
    isHide: Boolean
  },
  data: () => ({
    drawer: null
  })
}
</script>
