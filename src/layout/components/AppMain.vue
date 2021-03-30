<template>
  <v-main>
    <v-system-bar
      window
      dark
      lights-out
      color="grey darken-2"
    >
      <slot name="breadcrumb" />
    </v-system-bar>
    <v-container class="boxed-layout">
      <v-row align="center">
        <v-col cols="12">
          <!-- //? 콘텐츠에 표시될 라우터 컴포넌트 -->
          <h1
            class="boxed-header"
          >{{ $route.meta.title }}</h1>
          <transition
            name="fade"
            mode="out-in"
          >
            <router-view :key="key" />
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
  computed: {
    key() {
      return this.$route.path
    }
  }
}
</script>
