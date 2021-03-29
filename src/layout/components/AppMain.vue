<template>
  <v-main>
    <v-system-bar
      window
      dark
      lights-out
      color="blue-grey lighten-1"
    >
      <slot name="breadcrumb" />
    </v-system-bar>
    <v-container fluid>
      <v-row align="center">
        <v-col cols="12">
          <!-- //? 콘텐츠에 표시될 라우터 제목 -->
          <h1 :style="appStyles.header">{{ $route.meta.title }}</h1>
          <v-divider />
          <transition
            name="fade"
            mode="out-in"
          >
            <router-view
              :key="key"
              :style="appStyles.main"
            />
          </transition>
        </v-col>
      </v-row>
      <div class="footer">
        <slot name="footer" />
      </div>
    </v-container>
  </v-main>
</template>

<script>
export default {
  name: 'AppMain',
  data: () => ({
    appStyles: {
      header: {
        marginBottom: '10px',
        marginLeft: '10px'
      },
      main: {
        marginTop: '15px'
      }
    }
  }),
  computed: {
    key() {
      return this.$route.path
    }
  }
}
</script>
