import Layout from '@/layout'
// import EmptyLayout from '@/layout/EmptyLayout'

export default {
  path: '/table',
  component: Layout,
  redirect: '/table/vuetify-table',
  meta: {
    title: 'Table',
    icon: 'mdi-table-check',
    role: 'admin',
    menu_id: 'M1109'
  },
  children: [
    {
      path: 'vuetify-table',
      name: 'SearchFilter',
      component: () => import('@/views/table/DefaultTable.vue'),
      meta: {
        title: 'Vuetify Table',
        icon: 'mdi-message',
        role: 'admin',
        menu_id: 'M1110',
        activeClass: 'is-active'
      }
    },
    {
      path: 'ag-grid-table',
      name: 'SearchFilter',
      component: () => import('@/views/table/AgGrid.vue'),
      meta: {
        title: 'Ag-Grid Table',
        icon: 'mdi-message',
        role: 'admin',
        menu_id: 'M1111',
        activeClass: 'is-active'
      }
    }
  ]
}
