<template>
  <div class="app-wrapper">
    <!-- //? 상단 네비게이션 -->
    <app-nav-bar />
    <!-- //? 좌측 사이드 메뉴바 -->
    <app-side-bar v-if="!horizon" />
    <app-horizon-bar v-if="horizon" />
    <div class="main-container">
      <!-- //? 메인 콘텐츠 -->
      <app-main :class="{hoz: horizon}" />
      <!-- //? 푸터 -->
      <app-footer />
    </div>
    <app-custormizer />
  </div>
</template>

<script>
import NavBar from './components/Navbar'
import SideBar from './components/SideBar'
import AppMain from './components/AppMain'
import FooTer from './components/Footer'
// import BreadCrumbs from '@/components/Breadcrumb/index'
import Custormizer from '@/components/Customizer'
import Horizonbar from '@/layout/components/horizon/Horizonbar'

import { mapGetters } from 'vuex'

export default {
  name: 'RootLayout',
  components: {
    appNavBar: NavBar,
    appSideBar: SideBar,
    appMain: AppMain,
    appFooter: FooTer,
    // appBreadCrumbs: BreadCrumbs,
    appCustormizer: Custormizer,
    appHorizonBar: Horizonbar
  },
  computed: {
    ...mapGetters(['horizon'])
  }
}
</script>
