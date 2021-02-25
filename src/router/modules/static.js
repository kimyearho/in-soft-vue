import Layout from '@/layout'

export default {
  path: '/example',
  component: Layout,
  redirect: '/example/table',
  meta: { title: 'Example', icon: 'mdi-calendar-heart', role: 'admin' },
  alwaysShow: true,
  children: [
    {
      path: 'table',
      name: 'Table',
      component: () => import('@/views/table/index'),
      meta: { title: 'Table', icon: 'mdi-message', role: 'admin' }
    },
    {
      path: 'form',
      name: 'Form',
      component: () => import('@/views/form/index'),
      meta: { title: 'Form', icon: 'mdi-keyboard', role: 'admin' }
    }
  ]
}
