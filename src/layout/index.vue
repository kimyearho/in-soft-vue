<template>
  <v-app>
    <v-main>
      <!-- //? 상단 네비게이션 -->
      <nav-bar @is-side="isSidebarHide = !isSidebarHide" />
      <!-- //? 좌측 사이드 메뉴바 -->
      <side-bar :is-hide="isSidebarHide" />
      <!-- //? 메인 콘텐츠 -->
      <app-main />
    </v-main>
  </v-app>
</template>

<script>
import NavBar from './components/Navbar'
import SideBar from './components/SideBar'
import AppMain from './components/AppMain'

export default {
  name: 'Layout',
  components: {
    NavBar,
    SideBar,
    AppMain
  },
  data: () => ({
    isSidebarHide: true
  })
}
</script>

<style lang="scss" scoped></style>
