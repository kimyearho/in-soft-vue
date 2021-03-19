<template>
  <div class="text-center">
    <v-dialog
      v-model="visible"
      width="300"
      persistent
      no-click-animation
    >
      <v-card>
        <v-card-title
          class="blue lighten-1"
        >
          <span class="alert-headline">알림</span>
        </v-card-title>

        <v-card-text
          class="alert-contents"
          v-html="contents"
        />

        <v-divider />

        <v-card-actions>
          <v-spacer />
          <v-btn
            color="primary"
            text
            @click="$emit('dialogClose', false)"
          >
            I accept
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    contents: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      dialog: false
    }
  },
  methods: {
    outsideClose() {
      return
    }
  }
}
</script>
