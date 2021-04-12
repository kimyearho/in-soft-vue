<template>
  <v-footer
    dark
    padless
    color="grey lighten-3"
    :style="horizon ? 'paddingLeft:0' : ''"
  >
    <v-col
      class="text-center"
      cols="12"
    >
      <p class="footer">{{ new Date().getFullYear() }} — <strong>IN-SOFT</strong></p>
    </v-col>
  </v-footer>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data: () => ({
    icons: [
      'mdi-facebook',
      'mdi-twitter',
      'mdi-linkedin',
      'mdi-instagram'
    ]
  }),
  computed: {
    ...mapGetters(['horizon'])
  }
}
</script>

<style scoped>
.footer {
  color: #000 !important;
}
</style>
