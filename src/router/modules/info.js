import Layout from '@/layout'

// 멤버 소개 및 멤버 채널, 트위터 목록
export default {
  path: '/info',
  component: Layout,
  redirect: '/info/member',
  meta: {
    title: 'info',
    role: 'user',
    icon: 'website',
    mdiIcon: 'mdi-oci',
    menu_id: 'M20100'
  },
  children: [
    {
      path: 'member',
      name: 'member',
      component: () => import('@/views/info/member/index.vue'),
      meta: {
        title: 'member',
        role: 'user',
        menu_id: 'M20101',
        activeClass: 'is-active'
      }
    },
    {
      path: 'channel',
      name: 'channel',
      component: () => import('@/views/info/channel/index.vue'),
      meta: {
        title: 'channel',
        role: 'user',
        menu_id: 'M20102',
        activeClass: 'is-active'
      }
    },
    {
      path: 'twitter',
      name: 'twitter',
      component: () => import('@/views/info/twitter/index.vue'),
      meta: {
        title: 'twitter',
        role: 'user',
        menu_id: 'M20103',
        activeClass: 'is-active'
      }
    }
  ]
}
