<template>
  <v-container fluid>
    <!-- //? 브래드크럼 -->
    <breadcrumb />
    <v-row align="center">
      <v-col cols="12">
        <!-- //? 콘텐츠에 표시될 라우터 컴포넌트 -->
        <router-view :key="key" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb'

export default {
  name: 'AppMain',
  components: {
    Breadcrumb
  },
  computed: {
    key() {
      return this.$route.path
    }
  }
}
</script>
