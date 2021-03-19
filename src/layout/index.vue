<template>
  <div class="app-wrapper">
    <!-- //? 상단 네비게이션 -->
    <nav-bar />
    <!-- //? 좌측 사이드 메뉴바 -->
    <side-bar />
    <div class="main-container">
      <!-- //? 메인 콘텐츠 -->
      <app-main>
        <template slot="breadcrumb">
          <bread-crumbs />
        </template>
      </app-main>
      <!-- //? 푸터 -->
      <foo-ter />
    </div>
  </div>
</template>

<script>
import NavBar from './components/Navbar'
import SideBar from './components/SideBar'
import AppMain from './components/AppMain'
import FooTer from './components/Footer'
import BreadCrumbs from '@/components/Breadcrumb/index'

export default {
  name: 'Layout',
  components: {
    NavBar,
    SideBar,
    AppMain,
    FooTer,
    BreadCrumbs
  }
}
</script>
