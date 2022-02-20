<template>
  <v-main :class="{'mt-50' : isDashboard ? true : false}">
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
import {
  SET_LOCAL_ITEM,
  GET_LOCAL_ITEM
} from '@/utils/local-storage'
import {
  CREATE_UUID
} from '@/utils/auth'

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
    isDashboard() {
      return this.$route.name === 'Dashboard' && this.horizonMode === true
    },
    key() {
      return this.$route.path
    }
  },
  created() {
    this.$store.dispatch('statistics/connectStart', { 'url': '/v1/statistics/count/image', 'protocol': 'statistics' })
    this.setUserIndex()
  },
  methods: {
    setUserIndex() {
      const user_index = GET_LOCAL_ITEM('user_index')
      if (!user_index) {
        const index = CREATE_UUID('v4')
        SET_LOCAL_ITEM('user_index', index)
      }
    }
  }
}
</script>
