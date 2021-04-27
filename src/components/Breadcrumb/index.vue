<template>
  <page-container class="page-header">
    <v-row>
      <v-col cols="12">
        <span class="header-title d-inline-block">
          {{ $route.meta.title }}
        </span>
        <span class="divider" />
        <v-row class="d-inline-block">
          <v-col>
            <v-breadcrumbs
              :items="levelList"
            >
              <template v-slot:divider>
                <v-icon>mdi-chevron-right</v-icon>
              </template>
              <template v-slot:item="{item}">
                <v-breadcrumbs-item
                  v-if="item.meta.title === 'Dashboard'"
                  class="breadcrumbs-home"
                  @click="link(item)"
                >
                  <v-icon>{{ item.meta.icon }}</v-icon>
                </v-breadcrumbs-item>
                <v-breadcrumbs-item v-else>
                  {{ item.meta.title }}
                </v-breadcrumbs-item>
              </template>
            </v-breadcrumbs>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </page-container>
</template>

<script>
import pathToRegexp from 'path-to-regexp'

export default {
  data() {
    return {
      levelList: []
    }
  },
  watch: {
    $route(route) {
      if (route.path.startsWith('/redirect/')) {
        return
      }
      this.getBreadcrumb()
    }
  },
  mounted() {
    this.getBreadcrumb()
  },
  methods: {
    link(item) {
      this.$router.push({ path: item.path })
    },
    getBreadcrumb() {
      let matched = this.$route.matched.filter(
        (item) => item.meta && item.meta.title
      )
      const first = matched[0]
      if (!this.isDashboard(first)) {
        matched = [
          { path: '/dashboard', meta: { title: 'Dashboard', icon: 'mdi-home' }}
        ].concat(matched)
      }
      this.levelList = matched.filter(
        (item) => item.meta && item.meta.title && item.meta.breadcrumb !== false
      )
    },
    isDashboard(route) {
      const name = route && route.name
      if (!name) {
        return false
      }
      return name.trim().toLocaleLowerCase() === 'Dashboard'.toLocaleLowerCase()
    },
    pathCompile(path) {
      const { params } = this.$route
      var toPath = pathToRegexp.compile(path)
      return toPath(params)
    },
    handleLink(item) {
      const { redirect, path } = item
      if (redirect) {
        this.$router.push(redirect)
        return
      }
      this.$router.push(this.pathCompile(path))
    }
  }
}
</script>
