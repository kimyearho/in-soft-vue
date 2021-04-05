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
    ...mapGetters(['sidebar', 'clipped', 'sideLogo'])
  },
  methods: {
    toDashboard() {
      this.$router.push('/dashboard')
    }
  }
}
</script>
