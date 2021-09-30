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
                <svg-icon
                  class="child-svg-icon"
                  icon-class="login2"
                />
              </v-avatar>
            </v-btn>
          </template>
          <v-card>
            <v-list-item-content class="justify-center">
              <div class="mx-auto text-center">
                <template v-if="getUser.name">
                  <h3 class="pt-3">{{ getUser.name }}</h3>
                  <p class="caption mt-1">
                    {{ getUser.email }}
                  </p>
                </template>
                <template v-else>
                  <v-btn
                    depressed
                    rounded
                    text
                    @click="googleLogin"
                  >
                    Google Login
                  </v-btn>
                </template>
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
    },
    async googleLogin() {
      await this.$gAuth.signIn()
        .then(data => {
          const userInfo = {
            accessToken: data.$b.access_token,
            userId: data.it.Re,
            userEmail: data.it.Tt,
            picture: data.it.lk
          }
          console.log(userInfo)
          this.$store.dispatch('user/googleUserLogin', { userInfo })
            .then(result => {
              console.log(result)
            })
        })
    }
  }
}
</script>

<style scoped>
.profile {
  padding-top: 3px;
}
</style>
