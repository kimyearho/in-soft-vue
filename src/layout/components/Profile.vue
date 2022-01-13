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
import {
  SET_LOCAL_ITEM,
  GET_LOCAL_ITEM,
  REMOVE_LOCAL_ITEM
} from '@/utils/local-storage'

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
  created() {
    this.getUserInfo()
  },
  methods: {
    async getUserInfo() {
      const user_id = GET_LOCAL_ITEM('user_id')
      const user_email = GET_LOCAL_ITEM('user_email')
      const user = { user_id, user_email }
      this.$store.dispatch('user/getInfo', { user })
        .then(result => {
        })
    },
    async logout() {

    },
    async googleLogin() {
      if (GET_LOCAL_ITEM('user_id')) {
        const isLogin = this.getUserInfo()
        if (isLogin) {
          return 0
        }
      }

      await this.$gAuth.signIn()
        .then(data => {
          const infoObject = data[Object.keys(data)[2]]
          const userInfo = {
            accessToken: data[Object.keys(data)[1]].access_token,
            userId: infoObject[Object.keys(infoObject)[1]],
            userName: infoObject[Object.keys(infoObject)[2]],
            userEmail: infoObject[Object.keys(infoObject)[5]],
            picture: infoObject[Object.keys(infoObject)[4]]
          }
          this.$store.dispatch('user/googleUserLogin', { userInfo })
            .then(result => {
              console.log(result)

              REMOVE_LOCAL_ITEM('user_id')
              REMOVE_LOCAL_ITEM('user_email')
              REMOVE_LOCAL_ITEM('picture')
              REMOVE_LOCAL_ITEM('login_date')

              SET_LOCAL_ITEM('user_id', userInfo.userId)
              SET_LOCAL_ITEM('user_email', userInfo.userEmail)
              SET_LOCAL_ITEM('picture', userInfo.picture)
              SET_LOCAL_ITEM('login_date', new Date())
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
