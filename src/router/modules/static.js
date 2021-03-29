import Layout from '@/layout'
import EmptyLayout from '@/layout/EmptyLayout'

export default {
  path: '/components',
  component: Layout,
  redirect: '/components/list-container',
  meta: {
    title: 'Components',
    icon: 'mdi-briefcase-plus',
    role: 'admin',
    menu_id: 'M1101'
  },
  children: [
    {
      path: 'search-filter',
      name: 'SearchFilter',
      component: () => import('@/views/example/searchFilter/index'),
      meta: {
        title: 'Search Filter',
        icon: 'mdi-message',
        role: 'admin',
        menu_id: 'M1108',
        activeClass: 'is-active'
      }
    },
    // {
    //   path: 'list-container',
    //   name: 'ListContainer',
    //   // component: () => import('@/views/table/index'),
    //   meta: {
    //     title: 'List Container',
    //     icon: 'mdi-message',
    //     role: 'admin',
    //     menu_id: 'M1102',
    //     activeClass: 'is-active'
    //   }
    // },
    // {
    //   path: 'detail-container',
    //   name: 'DetailContainer',
    //   // component: () => import('@/views/form/index'),
    //   meta: {
    //     title: 'Detail Container',
    //     icon: 'mdi-keyboard',
    //     role: 'admin',
    //     menu_id: 'M1103',
    //     activeClass: 'is-active'
    //   }
    // },
    {
      path: 'modal',
      name: 'Modal',
      // component: () => import('@/views/form/index'),
      meta: {
        title: 'Modal',
        icon: 'mdi-keyboard',
        role: 'admin',
        menu_id: 'M1107',
        activeClass: 'is-active'
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
            menu_id: 'M1105',
            activeClass: 'is-active'
          }
        },
        {
          path: 'nest2',
          name: 'NestMenu2',
          component: () => import('@/views/nest/NestMenu2'),
          meta: {
            title: 'Menu 2',
            menu_id: 'M1106',
            activeClass: 'is-active'
          }
        }
      ]
    }
  ]
}
