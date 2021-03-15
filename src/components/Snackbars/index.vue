<template>
  <v-snackbar
    v-model="is_snackbar"
    light
  >
    {{ text }}

    <template v-slot:action="{attrs}">
      <v-btn
        color="pink"
        text
        v-bind="attrs"
        @click="closeSnackbar"
      >
        Close
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
export default {
  name: 'CommonSnackbars',
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      is_snackbar: false,
      timeout: 1500,
      text: 'Your ID has been saved'
    }
  },
  watch: {
    visible: {
      handler(val) {
        if (val) {
          this.showSnackbar()
        }
      }
    }
  },
  methods: {
    showSnackbar() {
      this.is_snackbar = this.visible
      //* 컴포넌트에서 timeout 기능을 지원하지만 수동 처리를 위해 직접구현.
      setTimeout(() => {
        this.is_snackbar = !this.visible
        this.closeSnackbar()
      }, this.timeout)
    },
    closeSnackbar() {
      this.is_snackbar = false
      this.$emit('close')
    }
  }
}
</script>
