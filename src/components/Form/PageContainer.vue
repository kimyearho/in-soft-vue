<template>
  <div
    class="page-wrapper"
    :class="{'horizon': horizon ? true : false}"
  >
    <v-container
      fluid
      class="pb-0"
    >
      <slot />
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'PageContainer',
  computed: {
    ...mapGetters(['horizon'])
  }
}
</script>
