<template>
  <v-app class="v-app">
    <v-container
      fluid
      fill-height
    >
      <v-row
        no-gutters
        align="center"
        justify="center"
      >
        <v-col
          cols="3"
        >
          <v-card
            class="pa-2 grey lighten-4"
            :elevation="24"
            :style="{height: '100%'}"
          >
            <v-list-item two-line>
              <v-list-item-content>
                <v-list-item-title>
                  <h2>Sign in</h2> <br>
                </v-list-item-title>
                <v-list-item-subtitle>Welcome IN SOFT Vue framework (ID:
                  admin)</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-divider />
            <v-form
              ref="form"
              v-model="valid"
              class="mt-40"
            >
              <v-text-field
                v-model="model.username"
                label="ID"
                clearable
                required
                :counter="10"
                :rules="nameRules"
              />
              <v-text-field
                v-model="model.password"
                label="Password"
                type="password"
                clearable
                required
              />
              <v-checkbox
                v-model="checkedRemember"
                :disabled="!model.username"
                @change="updateRemember"
              >
                <template v-slot:label>
                  <div>Remember me</div>
                </template>
              </v-checkbox>
              <v-btn
                block
                class="mr-4"
                color="info darken-1"
                :loading="loader"
                :disabled="loader"
                @click="login"
              >
                Login
              </v-btn>
              <div class="v-remember-me">
                <a>Forgot your password?</a>
              </div>
            </v-form>
            <v-divider />
            <v-card-actions>
              <v-row class="text-center">
                <v-col cols="12">
                  <small>Copyright © INSOFT. All rights Reserved.</small>
                </v-col>
              </v-row>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      <!-- //? Snackbar 컴포넌트 -->
      <common-snackbars
        :visible="snackbar"
        @close="snackbar = false"
      />
    </v-container>
  </v-app>
</template>

<script>
import {
  SET_LOCAL_ITEM,
  GET_LOCAL_ITEM,
  REMOVE_LOCAL_ITEM
} from '@/utils/local-storage'

//! Helper는 Global Mixin으로 만들지 고민필요
import StoreHelper from '@/utils/store-helper'
import CommonSnackbars from '@/components/Snackbars'

export default {
  name: 'Login',
  components: {
    CommonSnackbars
  },
  mixins: [StoreHelper],
  data() {
    return {
      loader: false,
      snackbar: false,
      checkedRemember: false,
      valid: true,
      model: {
        username: 'admin',
        password: 'admin'
      },
      nameRules: [
        (v) => !!v || 'Name is required',
        (v) => (v && v.length <= 10) || 'Name must be less than 10 characters'
      ]
    }
  },
  mounted() {
    const rememberId = GET_LOCAL_ITEM('user-id')
    if (!this.$lodash.isEmpty(rememberId)) {
      this.checkedRemember = !this.checkedRemember
      this.model.username = rememberId
    }
  },
  methods: {
    //* 체크박스가 변경될 때마다 호출된다.
    updateRemember(val) {
      if (val) this.snackbar = val
    },

    async login() {
      //* 수동 유효성 체크
      //* 유효성 체크가 통과되지 않으면 반환된다.
      const valid = await this.$refs.form.validate()
      if (!valid) return

      //* 아이디 저장체크 여부에 띠른 처리
      this.checkedRemember
        ? SET_LOCAL_ITEM('user-id', this.model.username)
        : REMOVE_LOCAL_ITEM('user-id')

      //* action: action name
      //* params: formData or get parameter
      //* loaderName: 로딩 애니메이션을 사용할 경우 (사용하지 않을경우 제거)
      const actionData = {
        action: 'user/userLogin',
        params: this.model,
        loaderName: 'loader'
      }

      //* action disaptch
      this.mixin_dispatch(actionData)
        .then(() => {
          setTimeout(() => {
            this.$router.push({ path: this.redirect || '/' })
          }, 500)
        })
        .catch(() => {
          this.loader = false
        })
    }
  }
}
</script>
