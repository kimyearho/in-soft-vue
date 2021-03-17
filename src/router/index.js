import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 //* hidden: true                   라우터를 감출지 여부
 //* alwaysShow: true               메뉴를 상시 표시할지 여부
 //! meta : {
    roles: ['admin','editor']    라우터 권한 구성
    title: 'title'               메뉴에 표시될 메뉴명 구성
    icon: 'svg-name'/'el-icon-x' 메뉴에 표시될 아이콘 구성
    breadcrumb: false            이 옵션을 조절하면 브래드 크럼을 ON/OFF 할 수 있음.
    activeMenu: '/example/list'  메뉴에 활성화될 메뉴를 조절할 수 있음. (메뉴 템플릿에서 구성필요)
  }
 */

/**
 * 정적 라우트
 */
const constantRoutes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/layout/components/404'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: 'dashboard',
    model: true,
    meta: { title: 'Dashboard', icon: 'mdi-view-dashboard', breadcrumb: false, menu_id: 'M1100' },
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import('@/views/main/dashboard1'),
        meta: { title: 'Dashboard 1', icon: 'mdi-help-circle' }
      }
    ]
  }
]

// ? 동적 라우트 임포트
import StaticRoutes from '@/router/modules/static'
// import UiComponentsRoutes from '@/router/modules/component'

//* 기본 정적 라우트
export const defaultRoutes = constantRoutes
//* 동적으로 구성될 라우트 (신규 메뉴 추가시에 라우터를 여기 추가한다, 동적 라우터는 최초 라우터 등록시에 사용되지 않는다)
// ? 동적 라우터를 여기에 모두 추가해놓고, 권한 별 메뉴 API를 통해 받은 메뉴정보와 asyncRoutes 에 등록한 동적 라우터들의 정보와 매칭하여 메뉴를 구성할때 사용한다.
// ? 예시: src/permission.js 참고
export const asyncRoutes = [
  StaticRoutes,
  // UiComponentsRoutes,
  { path: '*', redirect: '/404', hidden: true }
]

//* 라우트 리셋
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

// ? 라우터 생성
const createRouter = () =>
  new Router({
    mode: 'history', // ? history 모드 사용시 브라우저 주소창에 해시태그가 남지 않는다.
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes, //! 기본 라우터는 정적 라우터만 등록한다.
    linkActiveClass: 'active'
  })

const router = createRouter()

export default router
