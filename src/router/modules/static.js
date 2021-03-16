import Layout from '@/layout'
import EmptyLayout from '@/layout/EmptyLayout'

export default {
  path: '/example',
  component: Layout,
  redirect: '/example/table',
  meta: {
    title: '예제',
    icon: 'mdi-calendar-heart',
    role: 'admin',
    breadcrumb: false
  },
  alwaysShow: true,
  children: [
    {
      path: 'table',
      name: 'Table',
      // component: () => import('@/views/table/index'),
      meta: { title: 'DataGrid', icon: 'mdi-message', role: 'admin' }
    },
    {
      path: 'form',
      name: 'Form',
      // component: () => import('@/views/form/index'),
      meta: { title: 'Form', icon: 'mdi-keyboard', role: 'admin' }
    },
    {
      path: 'nest-menu',
      redirect: '/example/nest-menu',
      name: 'Nest',
      component: EmptyLayout,
      meta: {
        title: '중첩 메뉴',
        icon: 'mdi-message',
        role: 'admin',
        breadcrumb: false
      },
      children: [
        {
          path: 'nest1',
          name: 'NestMenu1',
          component: () => import('@/views/nest/NestMenu1'),
          meta: { title: '중첩 메뉴1' }
        },
        {
          path: 'nest2',
          name: 'NestMenu2',
          component: () => import('@/views/nest/NestMenu2'),
          meta: { title: '중첩 메뉴2' }
        }
      ]
    }
  ]
}
