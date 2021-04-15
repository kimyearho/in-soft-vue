// import Layout from '@/layout'
import Layout from '@/layout'

export default {
  path: '/table',
  component: Layout,
  redirect: '/table/vuetify-table',
  meta: {
    title: 'Table',
    icon: 'table2',
    role: 'admin',
    menu_id: 'M1109'
  },
  children: [
    {
      path: 'vuetify-table',
      name: 'SearchFilter',
      component: () => import('@/views/table/DefaultTable.vue'),
      meta: {
        title: 'Simple DataTable',
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
