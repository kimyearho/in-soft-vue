<template>
  <v-main>
    <v-system-bar
      window
      dark
      lights-out
      color="grey darken-2"
      :style="fixedBreadCrumb ? styles.breadCrumbs : ''"
    >
      <slot name="breadcrumb" />
    </v-system-bar>
    <v-container
      class="boxed-layout"
      :style="fixedBreadCrumb ? styles.boxed : ''"
    >
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
  data: () => ({
    styles: {
      boxed: {
        marginTop: '40px'
      },
      breadCrumbs: {
        position: 'fixed',
        width: '100%',
        zIndex: '1000'
      }
    }
  }),
  computed: {
    key() {
      return this.$route.path
    },
    fixedBreadCrumb() {
      return this.$store.getters.fixedBread
    }
  }
}
</script>
