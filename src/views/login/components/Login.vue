<template>
  <v-container
    class="fill-height"
    fluid
  >
    <v-form
      ref="form"
      lazy-validation
      :style="{width: '100%'}"
    >
      <v-row
        align="center"
        justify="center"
      >
        <v-col
          cols="12"
          lg="4"
          sm="8"
          md="4"
        >
          <v-card class="elevation-12">
            <v-toolbar
              color="primary"
              dark
              flat
            >
              <v-toolbar-title>Login form</v-toolbar-title>
              <v-spacer />
            </v-toolbar>
            <v-card-text>
              <v-form>
                <v-text-field
                  v-model="model.username"
                  label="Login"
                  name="login"
                  prepend-icon="mdi-account"
                  type="text"
                />

                <v-text-field
                  id="password"
                  v-model="model.password"
                  label="Password"
                  name="password"
                  prepend-icon="mdi-lock"
                  type="password"
                />
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer />
              <v-btn
                color="primary"
                @click="login"
              >Login</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-form>
  </v-container>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      validCredentials: {
        username: 'lightscope',
        password: 'lightscope'
      },
      model: {
        username: 'admin',
        password: 'admin'
      },
      loading: false,
      rules: {}
    }
  },
  methods: {
    async login() {
      const valid = await this.$refs.form.validate()
      if (!valid) {
        return
      }
      this.loading = true
      this.$store
        .dispatch('user/userLogin', this.model)
        .then(() => {
          this.$router.push({ path: this.redirect || '/' })
          this.loading = false
        })
        .catch(() => {
          this.loading = false
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-button {
  width: 100%;
  margin-top: 40px;
}
.login-form {
  width: 290px;
}
.forgot-password {
  margin-top: 10px;
}
</style>

<style lang="scss">
$teal: rgb(0, 124, 137);
.login .el-input__inner:hover {
  border-color: $teal;
}
.login .el-input__prefix {
  background: rgb(238, 237, 234);
  left: 0;
  height: calc(100% - 2px);
  left: 1px;
  top: 1px;
  border-radius: 3px;
  .el-input__icon {
    width: 30px;
  }
}
.login .el-input input {
  padding-left: 35px;
}
.login .el-card {
  padding-top: 0;
  padding-bottom: 30px;
}
h2 {
  font-family: 'Open Sans';
  letter-spacing: 1px;
  font-family: Roboto, sans-serif;
  padding-bottom: 20px;
}
.login .el-card {
  width: 340px;
  display: flex;
  justify-content: center;
  background-color: #ffffff94;
}
</style>
