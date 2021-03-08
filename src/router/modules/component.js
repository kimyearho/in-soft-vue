import Layout from '@/layout'

export default {
  path: '/component',
  component: Layout,
  redirect: '/component/alert',
  meta: { title: 'Components', icon: 'mdi-calendar-heart', role: 'admin' },
  alwaysShow: true,
  children: [
    {
      path: 'alert',
      name: 'Alert',
      component: () => import('@/views/table/index'),
      meta: { title: 'Alert', role: 'admin' }
    },
    {
      path: 'button',
      name: 'Button',
      component: () => import('@/views/form/index'),
      meta: { title: 'Button', role: 'admin' }
    },
    {
      path: 'grid',
      name: 'Grid',
      component: () => import('@/views/form/index'),
      meta: { title: 'Grid', role: 'admin' }
    },
    {
      path: 'modal',
      name: 'Modal',
      component: () => import('@/views/form/index'),
      meta: { title: 'Modal', role: 'admin' }
    },
    {
      path: 'select-box',
      name: 'Selectbox',
      component: () => import('@/views/form/index'),
      meta: { title: 'Selectbox', role: 'admin' }
    },
    {
      path: 'text-field',
      name: 'Textfield',
      component: () => import('@/views/form/index'),
      meta: { title: 'Textfield', role: 'admin' }
    }
  ]
}
