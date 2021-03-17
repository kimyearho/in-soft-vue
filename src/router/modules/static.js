import Layout from '@/layout'
import EmptyLayout from '@/layout/EmptyLayout'

export default {
  path: '/example',
  component: Layout,
  redirect: '/example/table',
  meta: {
    title: 'Components',
    icon: 'mdi-briefcase-plus',
    role: 'admin',
    menu_id: 'M1101'
  },
  children: [
    {
      path: 'table',
      name: 'Table',
      // component: () => import('@/views/table/index'),
      meta: {
        title: 'DataGrid',
        icon: 'mdi-message',
        role: 'admin',
        menu_id: 'M1102'
      }
    },
    {
      path: 'form',
      name: 'Form',
      // component: () => import('@/views/form/index'),
      meta: {
        title: 'Form',
        icon: 'mdi-keyboard',
        role: 'admin',
        menu_id: 'M1103'
      }
    },
    {
      path: 'nest-menu',
      redirect: '/example/nest-menu',
      name: 'Nest',
      component: EmptyLayout,
      meta: {
        title: 'NestMenu',
        role: 'admin',
        menu_id: 'M1104',
        breadcrumb: false
      },
      children: [
        {
          path: 'nest1',
          name: 'NestMenu1',
          component: () => import('@/views/nest/NestMenu1'),
          meta: {
            title: 'Menu 1',
            menu_id: 'M1105'
          }
        },
        {
          path: 'nest2',
          name: 'NestMenu2',
          component: () => import('@/views/nest/NestMenu2'),
          meta: {
            title: 'Menu 2',
            menu_id: 'M1106'
          }
        }
      ]
    }
  ]
}
