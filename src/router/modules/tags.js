import Layout from '@/layout'

// 멤버 소개 및 멤버 채널, 트위터 목록
export default {
  path: '/tags',
  component: Layout,
  redirect: '/tags/fanart',
  meta: {
    title: 'tags',
    role: 'user',
    icon: 'website',
    mdiIcon: 'mdi-oci',
    menu_id: 'M20300'
  },
  children: [
    {
      path: 'fanart',
      name: 'fanart',
      component: () => import('@/views/tags/fanart/index.vue'),
      meta: {
        title: 'fanart',
        role: 'user',
        menu_id: 'M20301',
        activeClass: 'is-active'
      }
    },
    {
      path: 'meme',
      name: 'meme',
      component: () => import('@/views/tags/meme/index.vue'),
      meta: {
        title: 'meme',
        role: 'user',
        menu_id: 'M20302',
        activeClass: 'is-active'
      }
    },
    {
      path: 'kirinuki',
      name: 'kirinuki',
      component: () => import('@/views/tags/kirinuki/index.vue'),
      meta: {
        title: 'kirinuki',
        role: 'user',
        menu_id: 'M20303',
        activeClass: 'is-active'
      }
    },
    {
      path: 'event',
      name: 'event',
      component: () => import('@/views/tags/event/index.vue'),
      meta: {
        title: 'event',
        role: 'user',
        menu_id: 'M20304',
        activeClass: 'is-active'
      }
    },
    {
      path: 'all',
      name: 'all',
      component: () => import('@/views/tags/all/index.vue'),
      meta: {
        title: 'all',
        role: 'user',
        menu_id: 'M20305',
        activeClass: 'is-active'
      }
    }
  ]
}
