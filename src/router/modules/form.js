import Layout from '@/layout'

export default {
  path: '/form-layout',
  component: Layout,
  redirect: '/form-layout/cpx-form',
  meta: {
    title: 'Form-Layout',
    role: 'admin',
    icon: 'website',
    menu_id: 'M1112'
  },
  children: [
    {
      path: 'cpx-form',
      name: 'CloudPc_Form',
      component: () => import('@/views/form/cloudPcForm/index.vue'),
      meta: {
        title: 'CloudPc_Form',
        role: 'admin',
        menu_id: 'M1113',
        activeClass: 'is-active'
      }
    }
  ]
}
