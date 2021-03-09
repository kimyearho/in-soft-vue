<template>
  <v-app class="v-app">
    <v-container
      class="v-container-center"
      fill-height
    >
      <v-row no-gutters>
        <v-col
          cols="12"
          lg="8"
          sm="6"
          md="8"
        >
          <v-card
            class="v-content-card"
            outlined
            tile
          >
            <v-img
              src="@/assets/login_1.jpg"
              height="520"
            />
          </v-card>
        </v-col>
        <v-col
          cols="6"
          lg="4"
          sm="4"
          md="4"
        >
          <v-card
            class="pa-2 grey lighten-4"
            outlined
            tile
            :style="{height: '100%'}"
          >
            <v-container>
              <v-list-item two-line>
                <v-list-item-content>
                  <v-list-item-title>
                    <h2>Sign in</h2>
                  </v-list-item-title>
                  <v-list-item-subtitle>Welcome insoft Vue framework</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-divider />
              <v-form
                ref="form"
                class="mt-40"
              >
                <v-text-field
                  v-model="model.username"
                  :counter="10"
                  label="ID"
                  clearable
                  required
                />
                <v-text-field
                  v-model="model.password"
                  label="Password"
                  type="password"
                  clearable
                  required
                />
                <v-checkbox v-model="checkbox">
                  <template v-slot:label>
                    <div>Remember me</div>
                  </template>
                </v-checkbox>
                <v-btn
                  color="info darken-3"
                  class="mr-4"
                  block
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
            </v-container>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>
<script>
export default {
  name: 'Login',
  data() {
    return {
      loader: false,
      checkbox: false,
      model: {
        username: 'admin',
        password: 'admin'
      }
    }
  },
  methods: {
    async login() {
      const valid = await this.$refs.form.validate()
      if (!valid) {
        return
      }
      this.loader = true
      this.$store
        .dispatch('user/userLogin', this.model)
        .then(() => {
          setTimeout(() => {
            this.$router.push({ path: this.redirect || '/' })
          }, 1000)
        })
        .catch(() => {
          this.loader = false
        })
    }
  }
}
</script>

<style scoped>
.v-container-center {
  margin-top: auto;
  margin-bottom: auto;
}
.v-content-card {
  border: inherit;
  border-color: inherit;
}
.v-app {
  font-family: Roboto, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-image: url('../../assets/login_background.jpg');
  background-size: cover;
}
.v-remember-me {
  padding: 10px;
  float: right;
}
.v-remember-me a {
  font-style: oblique;
  color: #9e9e9e;
}
.mt-40 {
  margin-top: 40px;
}
@-moz-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-webkit-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-o-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
