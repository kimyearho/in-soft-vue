import Layout from '@/layout'

// 멤버 소개 및 멤버 채널, 트위터 목록
export default {
  path: '/tweet',
  component: Layout,
  redirect: '/tweet/live',
  meta: {
    title: 'tweet',
    role: 'user',
    icon: 'website',
    mdiIcon: 'mdi-oci',
    menu_id: 'M20400'
  },
  children: [
    {
      path: 'live',
      name: 'live',
      component: () => import('@/views/tweet/live/index.vue'),
      meta: {
        title: 'live',
        role: 'user',
        menu_id: 'M20401',
        activeClass: 'is-active'
      }
    },
    {
      path: 'timeline',
      name: 'timeline',
      component: () => import('@/views/tweet/timeline/index.vue'),
      meta: {
        title: 'timeline',
        role: 'user',
        menu_id: 'M20402',
        activeClass: 'is-active'
      }
    },
    {
      path: 'basetag',
      name: 'basetag',
      component: () => import('@/views/tweet/basetag/index.vue'),
      meta: {
        title: 'basetag',
        role: 'user',
        menu_id: 'M20403',
        activeClass: 'is-active'
      }
    },
    {
      path: 'onetimetag',
      name: 'onetimetag',
      component: () => import('@/views/tweet/onetimetag/index.vue'),
      meta: {
        title: 'onetimetag',
        role: 'user',
        menu_id: 'M20404',
        activeClass: 'is-active'
      }
    }
  ]
}
