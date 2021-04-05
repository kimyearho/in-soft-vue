<template>
  <v-footer
    dark
    padless
  >
    <v-col
      class="text-center"
      cols="12"
    >
      <p> {{ new Date().getFullYear() }} — <strong>IN-SOFT</strong></p>
    </v-col>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    icons: [
      'mdi-facebook',
      'mdi-twitter',
      'mdi-linkedin',
      'mdi-instagram'
    ]
  })
}
</script>
