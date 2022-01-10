import router from './router'
import store from './store'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { getToken } from '@/utils/auth'
import { title } from '@/settings'

NProgress.configure({ showSpinner: false })

// const whiteList = ['/login', '/500', '/404', '/401']

document.title = title

//! 라우터 가드는 페이지 이동전에 항상 먼저 요청된다.
//! 따라서 토큰이나 권한체크등에서 유용하게 사용가능 함
// ? https://router.vuejs.org/kr/guide/advanced/navigation-guards.html (라우터 가드 문서)
router.beforeEach(async(to, from, next) => {
  NProgress.start()

  //* 토큰 가져오기
  const hasToken = getToken()
  console.log(hasToken)
  // ? 토큰이 있는지?
  //* 저장소에 동적 라우터가 없으면
  if (store.getters.addRouters.length <= 0) {
    //* 권한 가져오기
    // const { roles } = await store.dispatch('user/getInfo')
    // console.log(roles)
    //* 메뉴 가져오기
    //* API 연동을 통해 메뉴를 가져와 현재 등록해둔 라우터와 비교하여 권한 라우터를 구성한다.
    //* 실제 프로젝트에서 권한 별 메뉴구성과 구조가 다르므로 상황에 맞게 조정한다.
    const result = await store.dispatch('menu/menuList')
    if (result) {
      //* 구성된 라우터를 동적으로 라우터에 등록한다.
      router.addRoutes(store.getters.addRouters)
      next({ ...to, replace: true })
    }
  } else {
    //* 등록된 라우터가 있으면 무시
    next()
  }
})

router.afterEach(() => {
  NProgress.done()
})
