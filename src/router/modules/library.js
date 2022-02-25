import Layout from '@/layout'

// 멤버 소개 및 멤버 채널, 트위터 목록
export default {
  path: '/library',
  component: Layout,
  redirect: '/library/history',
  meta: {
    title: 'library',
    role: 'user',
    icon: 'website',
    mdiIcon: 'mdi-oci',
    menu_id: 'M20200'
  },
  children: [
    {
      path: 'history',
      name: 'history',
      component: () => import('@/views/library/history/index.vue'),
      meta: {
        title: 'history',
        role: 'user',
        menu_id: 'M20201',
        activeClass: 'is-active'
      }
    },
    {
      path: 'meme',
      name: 'meme',
      component: () => import('@/views/library/meme/index.vue'),
      meta: {
        title: 'meme',
        role: 'user',
        menu_id: 'M20202',
        activeClass: 'is-active'
      }
    }
    // {
    //   path: 'kirinuki',
    //   name: 'kirinuki',
    //   component: () => import('@/views/library/kirinuki/index.vue'),
    //   meta: {
    //     title: 'kirinuki',
    //     role: 'user',
    //     menu_id: 'M20204',
    //     activeClass: 'is-active'
    //   }
    // }
  ]
}
