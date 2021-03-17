<template>
  <v-breadcrumbs divider="/">
    <v-breadcrumbs-item exact>
      <span class="no-redirect">{{ $route.meta.title }}</span>
    </v-breadcrumbs-item>
  </v-breadcrumbs>
</template>

<script>
export default {
  data() {
    return {
      levelList: null
    }
  },
  methods: {}
}
</script>
