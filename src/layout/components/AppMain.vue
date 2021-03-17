<template>
  <v-container fluid>
    <v-row align="center">
      <v-col cols="12">
        <!-- //? 콘텐츠에 표시될 라우터 컴포넌트 -->
        <h1 :style="{marginBottom: '30px'}">{{ $route.meta.title }}</h1>
        <router-view :key="key" />
      </v-col>
    </v-row>
  </v-container>
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
