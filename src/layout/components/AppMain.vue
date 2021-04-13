<template>
  <v-main>
    <v-system-bar
      v-if="!horizonMode"
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
            :style="horizonMode ? 'marginTop: 20px' : ''"
          ><p class="font-weight-medium">{{ $route.meta.title }}</p></h1>
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
import { mapGetters } from 'vuex'

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
    ...mapGetters({
      fixedBreadCrumb: 'fixedBread',
      horizonMode: 'horizon'
    }),
    key() {
      return this.$route.path
    }
  }
}
</script>
