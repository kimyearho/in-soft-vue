<template>
  <v-main>
    <v-container
      class="boxed-layout"
    >
      <v-row align="center">
        <v-col cols="12">
          <!-- //? 콘텐츠에 표시될 라우터 컴포넌트 -->
          <app-bread-crumb v-if="$route.name !== 'Dashboard'" />
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
import BreadCrumb from '@/components/Breadcrumb'

export default {
  name: 'AppMain',
  components: {
    appBreadCrumb: BreadCrumb
  },
  data: () => ({
    styles: {
      boxed: {
        marginTop: '40px'
      },
      breadCrumbs: {
        position: 'fixed',
        width: '100%',
        zIndex: '2'
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
