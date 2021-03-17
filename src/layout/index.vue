<template>
  <v-main>
    <!-- //? 상단 네비게이션 -->
    <nav-bar />
    <!-- //? 좌측 사이드 메뉴바 -->
    <side-bar />
    <!-- //? 메인 콘텐츠 -->
    <app-main />
  </v-main>
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
  }
}
</script>

<style lang="scss" scoped></style>
