<template>
  <v-container>
    <v-row class="profile">
      <v-col cols="12">
        <v-menu
          class="profile_container"
          bottom
          min-width="200px"
          rounded
          offset-y
        >
          <template v-slot:activator="{on}">
            <v-btn
              icon
              v-on="on"
            >
              <v-avatar>
                <img
                  src="https://avatars.githubusercontent.com/u/17153380?v=4"
                >
              </v-avatar>
            </v-btn>
          </template>
          <v-card>
            <v-list-item-content class="justify-center">
              <div class="mx-auto text-center">
                <v-avatar>
                  <img
                    src="https://avatars.githubusercontent.com/u/17153380?v=4"
                  >
                </v-avatar>
                <h3 class="pt-3">{{ getUser.name }}</h3>
                <p class="caption mt-1">
                  {{ getUser.email }}
                </p>
                <v-divider class="my-3" />
                <v-btn
                  depressed
                  rounded
                  text
                  @click="logout"
                >
                  Logout
                </v-btn>
              </div>
            </v-list-item-content>
          </v-card>
        </v-menu>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    user: {
      initials: 'YH'
    },
    themeSwitch: false
  }),
  computed: {
    getUser() {
      return this.$store.state.user
    }
  },
  methods: {
    async logout() {
      const result = await this.$store.dispatch('user/logout', { vm: this })
      if (result) {
        await this.$store.commit('menu/RESET_MENUS')
      }
      this.$router.push(`/login?redirect=${this.$route.fullPath}`)
    }
  }
}
</script>

<style scoped>
.profile {
  padding-top: 3px;
}
</style>
