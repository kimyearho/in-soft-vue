import Layout from '@/layout'
// import EmptyLayout from '@/layout/EmptyLayout'

export default {
  path: '/components',
  component: Layout,
  redirect: '/components/search-filter',
  meta: {
    title: 'Components',
    icon: 'component',
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
    {
      path: 'modal',
      name: 'Modal',
      component: () => import('@/views/example/modal/index'),
      meta: {
        title: 'Modal',
        icon: 'mdi-keyboard',
        role: 'admin',
        menu_id: 'M1107',
        activeClass: 'is-active'
      }
    },
    {
      path: 'clone-template',
      name: 'Modal',
      component: () => import('@/views/example/clone/index'),
      meta: {
        title: 'CloneTemplate',
        icon: 'mdi-keyboard',
        role: 'admin',
        menu_id: 'M1114',
        activeClass: 'is-active'
      }
    }
    // {
    //   path: 'table',
    //   component: EmptyLayout,
    //   redirect: '/table/vuetify-table',
    //   meta: {
    //     title: 'Table',
    //     icon: 'table2',
    //     role: 'admin',
    //     menu_id: 'M1109'
    //   },
    //   children: [
    //     {
    //       path: 'vuetify-table',
    //       name: 'SearchFilter',
    //       component: () => import('@/views/table/DefaultTable.vue'),
    //       meta: {
    //         title: 'Simple DataTable',
    //         icon: 'mdi-message',
    //         role: 'admin',
    //         menu_id: 'M1110',
    //         activeClass: 'is-active'
    //       }
    //     },
    //     {
    //       path: 'ag-grid-table',
    //       name: 'SearchFilter',
    //       component: () => import('@/views/table/AgGrid.vue'),
    //       meta: {
    //         title: 'Ag-Grid Table',
    //         icon: 'mdi-message',
    //         role: 'admin',
    //         menu_id: 'M1111',
    //         activeClass: 'is-active'
    //       }
    //     }
    //   ]
    // },
    // {
    //   path: 'form-layout',
    //   component: EmptyLayout,
    //   redirect: '/form-layout/cpx-form',
    //   meta: {
    //     title: 'Form-Layout',
    //     role: 'admin',
    //     menu_id: 'M1112'
    //   },
    //   children: [
    //     {
    //       path: 'cpx-form',
    //       name: 'CloudPc_Form',
    //       component: () => import('@/views/form/cloudPcForm/index.vue'),
    //       meta: {
    //         title: 'CloudPc_Form',
    //         role: 'admin',
    //         menu_id: 'M1113',
    //         activeClass: 'is-active'
    //       }
    //     }
    //   ]

    // }
  ]
}
